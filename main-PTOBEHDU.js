var Vy=Object.defineProperty,By=Object.defineProperties;var zy=Object.getOwnPropertyDescriptors;var zf=Object.getOwnPropertySymbols;var Hy=Object.prototype.hasOwnProperty,Gy=Object.prototype.propertyIsEnumerable;var Hf=(n,e,t)=>e in n?Vy(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,xt=(n,e)=>{for(var t in e||={})Hy.call(e,t)&&Hf(n,t,e[t]);if(zf)for(var t of zf(e))Gy.call(e,t)&&Hf(n,t,e[t]);return n},Ct=(n,e)=>By(n,zy(e));var Po=(n,e,t)=>new Promise((i,r)=>{var s=c=>{try{a(t.next(c))}catch(l){r(l)}},o=c=>{try{a(t.throw(c))}catch(l){r(l)}},a=c=>c.done?i(c.value):Promise.resolve(c.value).then(s,o);a((t=t.apply(n,e)).next())});function Gf(n,e){return Object.is(n,e)}var It=null,No=!1,Oo=1,Hn=Symbol("SIGNAL");function $e(n){let e=It;return It=n,e}function Wf(){return It}var Fs={version:0,lastCleanEpoch:0,dirty:!1,producerNode:void 0,producerLastReadVersion:void 0,producerIndexOfThis:void 0,nextProducerIndex:0,liveConsumerNode:void 0,liveConsumerIndexOfThis:void 0,consumerAllowSignalWrites:!1,consumerIsAlwaysLive:!1,producerMustRecompute:()=>!1,producerRecomputeValue:()=>{},consumerMarkedDirty:()=>{},consumerOnSignalRead:()=>{}};function gl(n){if(No)throw new Error("");if(It===null)return;It.consumerOnSignalRead(n);let e=It.nextProducerIndex++;if(Uo(It),e<It.producerNode.length&&It.producerNode[e]!==n&&Os(It)){let t=It.producerNode[e];ko(t,It.producerIndexOfThis[e])}It.producerNode[e]!==n&&(It.producerNode[e]=n,It.producerIndexOfThis[e]=Os(It)?Xf(n,It,e):0),It.producerLastReadVersion[e]=n.version}function Wy(){Oo++}function jf(n){if(!(Os(n)&&!n.dirty)&&!(!n.dirty&&n.lastCleanEpoch===Oo)){if(!n.producerMustRecompute(n)&&!yl(n)){n.dirty=!1,n.lastCleanEpoch=Oo;return}n.producerRecomputeValue(n),n.dirty=!1,n.lastCleanEpoch=Oo}}function $f(n){if(n.liveConsumerNode===void 0)return;let e=No;No=!0;try{for(let t of n.liveConsumerNode)t.dirty||jy(t)}finally{No=e}}function qf(){return It?.consumerAllowSignalWrites!==!1}function jy(n){n.dirty=!0,$f(n),n.consumerMarkedDirty?.(n)}function Lo(n){return n&&(n.nextProducerIndex=0),$e(n)}function vl(n,e){if($e(e),!(!n||n.producerNode===void 0||n.producerIndexOfThis===void 0||n.producerLastReadVersion===void 0)){if(Os(n))for(let t=n.nextProducerIndex;t<n.producerNode.length;t++)ko(n.producerNode[t],n.producerIndexOfThis[t]);for(;n.producerNode.length>n.nextProducerIndex;)n.producerNode.pop(),n.producerLastReadVersion.pop(),n.producerIndexOfThis.pop()}}function yl(n){Uo(n);for(let e=0;e<n.producerNode.length;e++){let t=n.producerNode[e],i=n.producerLastReadVersion[e];if(i!==t.version||(jf(t),i!==t.version))return!0}return!1}function _l(n){if(Uo(n),Os(n))for(let e=0;e<n.producerNode.length;e++)ko(n.producerNode[e],n.producerIndexOfThis[e]);n.producerNode.length=n.producerLastReadVersion.length=n.producerIndexOfThis.length=0,n.liveConsumerNode&&(n.liveConsumerNode.length=n.liveConsumerIndexOfThis.length=0)}function Xf(n,e,t){if(Yf(n),n.liveConsumerNode.length===0&&Zf(n))for(let i=0;i<n.producerNode.length;i++)n.producerIndexOfThis[i]=Xf(n.producerNode[i],n,i);return n.liveConsumerIndexOfThis.push(t),n.liveConsumerNode.push(e)-1}function ko(n,e){if(Yf(n),n.liveConsumerNode.length===1&&Zf(n))for(let i=0;i<n.producerNode.length;i++)ko(n.producerNode[i],n.producerIndexOfThis[i]);let t=n.liveConsumerNode.length-1;if(n.liveConsumerNode[e]=n.liveConsumerNode[t],n.liveConsumerIndexOfThis[e]=n.liveConsumerIndexOfThis[t],n.liveConsumerNode.length--,n.liveConsumerIndexOfThis.length--,e<n.liveConsumerNode.length){let i=n.liveConsumerIndexOfThis[e],r=n.liveConsumerNode[e];Uo(r),r.producerIndexOfThis[i]=e}}function Os(n){return n.consumerIsAlwaysLive||(n?.liveConsumerNode?.length??0)>0}function Uo(n){n.producerNode??=[],n.producerIndexOfThis??=[],n.producerLastReadVersion??=[]}function Yf(n){n.liveConsumerNode??=[],n.liveConsumerIndexOfThis??=[]}function Zf(n){return n.producerNode!==void 0}function xl(n){let e=Object.create($y);e.computation=n;let t=()=>{if(jf(e),gl(e),e.value===Fo)throw e.error;return e.value};return t[Hn]=e,t}var pl=Symbol("UNSET"),ml=Symbol("COMPUTING"),Fo=Symbol("ERRORED"),$y=Ct(xt({},Fs),{value:pl,dirty:!0,error:null,equal:Gf,producerMustRecompute(n){return n.value===pl||n.value===ml},producerRecomputeValue(n){if(n.value===ml)throw new Error("Detected cycle in computations.");let e=n.value;n.value=ml;let t=Lo(n),i;try{i=n.computation()}catch(r){i=Fo,n.error=r}finally{vl(n,t)}if(e!==pl&&e!==Fo&&i!==Fo&&n.equal(e,i)){n.value=e;return}n.value=i,n.version++}});function qy(){throw new Error}var Jf=qy;function Kf(){Jf()}function Qf(n){Jf=n}var Xy=null;function ep(n){let e=Object.create(np);e.value=n;let t=()=>(gl(e),e.value);return t[Hn]=e,t}function Ml(n,e){qf()||Kf(),n.equal(n.value,e)||(n.value=e,Yy(n))}function tp(n,e){qf()||Kf(),Ml(n,e(n.value))}var np=Ct(xt({},Fs),{equal:Gf,value:void 0});function Yy(n){n.version++,Wy(),$f(n),Xy?.()}function Jt(n){return typeof n=="function"}function Vo(n){let t=n(i=>{Error.call(i),i.stack=new Error().stack});return t.prototype=Object.create(Error.prototype),t.prototype.constructor=t,t}var Bo=Vo(n=>function(t){n(this),this.message=t?`${t.length} errors occurred during unsubscription:
${t.map((i,r)=>`${r+1}) ${i.toString()}`).join(`
  `)}`:"",this.name="UnsubscriptionError",this.errors=t});function Ls(n,e){if(n){let t=n.indexOf(e);0<=t&&n.splice(t,1)}}var Xt=class n{constructor(e){this.initialTeardown=e,this.closed=!1,this._parentage=null,this._finalizers=null}unsubscribe(){let e;if(!this.closed){this.closed=!0;let{_parentage:t}=this;if(t)if(this._parentage=null,Array.isArray(t))for(let s of t)s.remove(this);else t.remove(this);let{initialTeardown:i}=this;if(Jt(i))try{i()}catch(s){e=s instanceof Bo?s.errors:[s]}let{_finalizers:r}=this;if(r){this._finalizers=null;for(let s of r)try{ip(s)}catch(o){e=e??[],o instanceof Bo?e=[...e,...o.errors]:e.push(o)}}if(e)throw new Bo(e)}}add(e){var t;if(e&&e!==this)if(this.closed)ip(e);else{if(e instanceof n){if(e.closed||e._hasParent(this))return;e._addParent(this)}(this._finalizers=(t=this._finalizers)!==null&&t!==void 0?t:[]).push(e)}}_hasParent(e){let{_parentage:t}=this;return t===e||Array.isArray(t)&&t.includes(e)}_addParent(e){let{_parentage:t}=this;this._parentage=Array.isArray(t)?(t.push(e),t):t?[t,e]:e}_removeParent(e){let{_parentage:t}=this;t===e?this._parentage=null:Array.isArray(t)&&Ls(t,e)}remove(e){let{_finalizers:t}=this;t&&Ls(t,e),e instanceof n&&e._removeParent(this)}};Xt.EMPTY=(()=>{let n=new Xt;return n.closed=!0,n})();var bl=Xt.EMPTY;function zo(n){return n instanceof Xt||n&&"closed"in n&&Jt(n.remove)&&Jt(n.add)&&Jt(n.unsubscribe)}function ip(n){Jt(n)?n():n.unsubscribe()}var Dn={onUnhandledError:null,onStoppedNotification:null,Promise:void 0,useDeprecatedSynchronousErrorHandling:!1,useDeprecatedNextContext:!1};var Ar={setTimeout(n,e,...t){let{delegate:i}=Ar;return i?.setTimeout?i.setTimeout(n,e,...t):setTimeout(n,e,...t)},clearTimeout(n){let{delegate:e}=Ar;return(e?.clearTimeout||clearTimeout)(n)},delegate:void 0};function rp(n){Ar.setTimeout(()=>{let{onUnhandledError:e}=Dn;if(e)e(n);else throw n})}function wl(){}var sp=El("C",void 0,void 0);function op(n){return El("E",void 0,n)}function ap(n){return El("N",n,void 0)}function El(n,e,t){return{kind:n,value:e,error:t}}var Xi=null;function Ir(n){if(Dn.useDeprecatedSynchronousErrorHandling){let e=!Xi;if(e&&(Xi={errorThrown:!1,error:null}),n(),e){let{errorThrown:t,error:i}=Xi;if(Xi=null,t)throw i}}else n()}function cp(n){Dn.useDeprecatedSynchronousErrorHandling&&Xi&&(Xi.errorThrown=!0,Xi.error=n)}var Yi=class extends Xt{constructor(e){super(),this.isStopped=!1,e?(this.destination=e,zo(e)&&e.add(this)):this.destination=Ky}static create(e,t,i){return new Rr(e,t,i)}next(e){this.isStopped?Cl(ap(e),this):this._next(e)}error(e){this.isStopped?Cl(op(e),this):(this.isStopped=!0,this._error(e))}complete(){this.isStopped?Cl(sp,this):(this.isStopped=!0,this._complete())}unsubscribe(){this.closed||(this.isStopped=!0,super.unsubscribe(),this.destination=null)}_next(e){this.destination.next(e)}_error(e){try{this.destination.error(e)}finally{this.unsubscribe()}}_complete(){try{this.destination.complete()}finally{this.unsubscribe()}}},Zy=Function.prototype.bind;function Sl(n,e){return Zy.call(n,e)}var Dl=class{constructor(e){this.partialObserver=e}next(e){let{partialObserver:t}=this;if(t.next)try{t.next(e)}catch(i){Ho(i)}}error(e){let{partialObserver:t}=this;if(t.error)try{t.error(e)}catch(i){Ho(i)}else Ho(e)}complete(){let{partialObserver:e}=this;if(e.complete)try{e.complete()}catch(t){Ho(t)}}},Rr=class extends Yi{constructor(e,t,i){super();let r;if(Jt(e)||!e)r={next:e??void 0,error:t??void 0,complete:i??void 0};else{let s;this&&Dn.useDeprecatedNextContext?(s=Object.create(e),s.unsubscribe=()=>this.unsubscribe(),r={next:e.next&&Sl(e.next,s),error:e.error&&Sl(e.error,s),complete:e.complete&&Sl(e.complete,s)}):r=e}this.destination=new Dl(r)}};function Ho(n){Dn.useDeprecatedSynchronousErrorHandling?cp(n):rp(n)}function Jy(n){throw n}function Cl(n,e){let{onStoppedNotification:t}=Dn;t&&Ar.setTimeout(()=>t(n,e))}var Ky={closed:!0,next:wl,error:Jy,complete:wl};var lp=typeof Symbol=="function"&&Symbol.observable||"@@observable";function up(n){return n}function dp(n){return n.length===0?up:n.length===1?n[0]:function(t){return n.reduce((i,r)=>r(i),t)}}var Tl=(()=>{class n{constructor(t){t&&(this._subscribe=t)}lift(t){let i=new n;return i.source=this,i.operator=t,i}subscribe(t,i,r){let s=e_(t)?t:new Rr(t,i,r);return Ir(()=>{let{operator:o,source:a}=this;s.add(o?o.call(s,a):a?this._subscribe(s):this._trySubscribe(s))}),s}_trySubscribe(t){try{return this._subscribe(t)}catch(i){t.error(i)}}forEach(t,i){return i=hp(i),new i((r,s)=>{let o=new Rr({next:a=>{try{t(a)}catch(c){s(c),o.unsubscribe()}},error:s,complete:r});this.subscribe(o)})}_subscribe(t){var i;return(i=this.source)===null||i===void 0?void 0:i.subscribe(t)}[lp](){return this}pipe(...t){return dp(t)(this)}toPromise(t){return t=hp(t),new t((i,r)=>{let s;this.subscribe(o=>s=o,o=>r(o),()=>i(s))})}}return n.create=e=>new n(e),n})();function hp(n){var e;return(e=n??Dn.Promise)!==null&&e!==void 0?e:Promise}function Qy(n){return n&&Jt(n.next)&&Jt(n.error)&&Jt(n.complete)}function e_(n){return n&&n instanceof Yi||Qy(n)&&zo(n)}function t_(n){return Jt(n?.lift)}function fp(n){return e=>{if(t_(e))return e.lift(function(t){try{return n(t,this)}catch(i){this.error(i)}});throw new TypeError("Unable to lift unknown Observable type")}}function pp(n,e,t,i,r){return new Al(n,e,t,i,r)}var Al=class extends Yi{constructor(e,t,i,r,s,o){super(e),this.onFinalize=s,this.shouldUnsubscribe=o,this._next=t?function(a){try{t(a)}catch(c){e.error(c)}}:super._next,this._error=r?function(a){try{r(a)}catch(c){e.error(c)}finally{this.unsubscribe()}}:super._error,this._complete=i?function(){try{i()}catch(a){e.error(a)}finally{this.unsubscribe()}}:super._complete}unsubscribe(){var e;if(!this.shouldUnsubscribe||this.shouldUnsubscribe()){let{closed:t}=this;super.unsubscribe(),!t&&((e=this.onFinalize)===null||e===void 0||e.call(this))}}};var mp=Vo(n=>function(){n(this),this.name="ObjectUnsubscribedError",this.message="object unsubscribed"});var Ci=(()=>{class n extends Tl{constructor(){super(),this.closed=!1,this.currentObservers=null,this.observers=[],this.isStopped=!1,this.hasError=!1,this.thrownError=null}lift(t){let i=new Go(this,this);return i.operator=t,i}_throwIfClosed(){if(this.closed)throw new mp}next(t){Ir(()=>{if(this._throwIfClosed(),!this.isStopped){this.currentObservers||(this.currentObservers=Array.from(this.observers));for(let i of this.currentObservers)i.next(t)}})}error(t){Ir(()=>{if(this._throwIfClosed(),!this.isStopped){this.hasError=this.isStopped=!0,this.thrownError=t;let{observers:i}=this;for(;i.length;)i.shift().error(t)}})}complete(){Ir(()=>{if(this._throwIfClosed(),!this.isStopped){this.isStopped=!0;let{observers:t}=this;for(;t.length;)t.shift().complete()}})}unsubscribe(){this.isStopped=this.closed=!0,this.observers=this.currentObservers=null}get observed(){var t;return((t=this.observers)===null||t===void 0?void 0:t.length)>0}_trySubscribe(t){return this._throwIfClosed(),super._trySubscribe(t)}_subscribe(t){return this._throwIfClosed(),this._checkFinalizedStatuses(t),this._innerSubscribe(t)}_innerSubscribe(t){let{hasError:i,isStopped:r,observers:s}=this;return i||r?bl:(this.currentObservers=null,s.push(t),new Xt(()=>{this.currentObservers=null,Ls(s,t)}))}_checkFinalizedStatuses(t){let{hasError:i,thrownError:r,isStopped:s}=this;i?t.error(r):s&&t.complete()}asObservable(){let t=new Tl;return t.source=this,t}}return n.create=(e,t)=>new Go(e,t),n})(),Go=class extends Ci{constructor(e,t){super(),this.destination=e,this.source=t}next(e){var t,i;(i=(t=this.destination)===null||t===void 0?void 0:t.next)===null||i===void 0||i.call(t,e)}error(e){var t,i;(i=(t=this.destination)===null||t===void 0?void 0:t.error)===null||i===void 0||i.call(t,e)}complete(){var e,t;(t=(e=this.destination)===null||e===void 0?void 0:e.complete)===null||t===void 0||t.call(e)}_subscribe(e){var t,i;return(i=(t=this.source)===null||t===void 0?void 0:t.subscribe(e))!==null&&i!==void 0?i:bl}};var ks=class extends Ci{constructor(e){super(),this._value=e}get value(){return this.getValue()}_subscribe(e){let t=super._subscribe(e);return!t.closed&&e.next(this._value),t}getValue(){let{hasError:e,thrownError:t,_value:i}=this;if(e)throw t;return this._throwIfClosed(),i}next(e){super.next(this._value=e)}};function Il(n,e){return fp((t,i)=>{let r=0;t.subscribe(pp(i,s=>{i.next(n.call(e,s,r++))}))})}var im="https://g.co/ng/security#xss",He=class extends Error{constructor(e,t){super(Bu(e,t)),this.code=e}};function Bu(n,e){return`${`NG0${Math.abs(n)}`}${e?": "+e:""}`}function ba(n){return{toString:n}.toString()}var Wo="__parameters__";function n_(n){return function(...t){if(n){let i=n(...t);for(let r in i)this[r]=i[r]}}}function rm(n,e,t){return ba(()=>{let i=n_(e);function r(...s){if(this instanceof r)return i.apply(this,s),this;let o=new r(...s);return a.annotation=o,a;function a(c,l,u){let d=c.hasOwnProperty(Wo)?c[Wo]:Object.defineProperty(c,Wo,{value:[]})[Wo];for(;d.length<=u;)d.push(null);return(d[u]=d[u]||[]).push(o),c}}return t&&(r.prototype=Object.create(t.prototype)),r.prototype.ngMetadataName=n,r.annotationCls=r,r})}var Us=globalThis;function lt(n){for(let e in n)if(n[e]===lt)return e;throw Error("Could not find renamed property on target object.")}function an(n){if(typeof n=="string")return n;if(Array.isArray(n))return"["+n.map(an).join(", ")+"]";if(n==null)return""+n;if(n.overriddenName)return`${n.overriddenName}`;if(n.name)return`${n.name}`;let e=n.toString();if(e==null)return""+e;let t=e.indexOf(`
`);return t===-1?e:e.substring(0,t)}function gp(n,e){return n==null||n===""?e===null?"":e:e==null||e===""?n:n+" "+e}var i_=lt({__forward_ref__:lt});function zu(n){return n.__forward_ref__=zu,n.toString=function(){return an(this())},n}function An(n){return r_(n)?n():n}function r_(n){return typeof n=="function"&&n.hasOwnProperty(i_)&&n.__forward_ref__===zu}function pt(n){return{token:n.token,providedIn:n.providedIn||null,factory:n.factory,value:void 0}}function Yr(n){return{providers:n.providers||[],imports:n.imports||[]}}function Hu(n){return vp(n,sm)||vp(n,om)}function vp(n,e){return n.hasOwnProperty(e)?n[e]:null}function s_(n){let e=n&&(n[sm]||n[om]);return e||null}function yp(n){return n&&(n.hasOwnProperty(_p)||n.hasOwnProperty(o_))?n[_p]:null}var sm=lt({\u0275prov:lt}),_p=lt({\u0275inj:lt}),om=lt({ngInjectableDef:lt}),o_=lt({ngInjectorDef:lt}),Je=class{constructor(e,t){this._desc=e,this.ngMetadataName="InjectionToken",this.\u0275prov=void 0,typeof t=="number"?this.__NG_ELEMENT_ID__=t:t!==void 0&&(this.\u0275prov=pt({token:this,providedIn:t.providedIn||"root",factory:t.factory}))}get multi(){return this}toString(){return`InjectionToken ${this._desc}`}};function am(n){return n&&!!n.\u0275providers}var a_=lt({\u0275cmp:lt}),c_=lt({\u0275dir:lt}),l_=lt({\u0275pipe:lt});var xp=lt({\u0275fac:lt}),zs=lt({__NG_ELEMENT_ID__:lt}),Mp=lt({__NG_ENV_ID__:lt});function wa(n){return typeof n=="string"?n:n==null?"":String(n)}function u_(n){return typeof n=="function"?n.name||n.toString():typeof n=="object"&&n!=null&&typeof n.type=="function"?n.type.name||n.type.toString():wa(n)}function d_(n,e){let t=e?`. Dependency path: ${e.join(" > ")} > ${n}`:"";throw new He(-200,n)}function Gu(n,e){throw new He(-201,!1)}var je=function(n){return n[n.Default=0]="Default",n[n.Host=1]="Host",n[n.Self=2]="Self",n[n.SkipSelf=4]="SkipSelf",n[n.Optional=8]="Optional",n}(je||{}),Wl;function cm(){return Wl}function vn(n){let e=Wl;return Wl=n,e}function lm(n,e,t){let i=Hu(n);if(i&&i.providedIn=="root")return i.value===void 0?i.value=i.factory():i.value;if(t&je.Optional)return null;if(e!==void 0)return e;Gu(n,"Injector")}var h_={},Hs=h_,jl="__NG_DI_FLAG__",Qo="ngTempTokenPath",f_="ngTokenPath",p_=/\n/gm,m_="\u0275",bp="__source",Lr;function g_(){return Lr}function Pr(n){let e=Lr;return Lr=n,e}function v_(n,e=je.Default){if(Lr===void 0)throw new He(-203,!1);return Lr===null?lm(n,void 0,e):Lr.get(n,e&je.Optional?null:void 0,e)}function ct(n,e=je.Default){return(cm()||v_)(An(n),e)}function ke(n,e=je.Default){return ct(n,Ea(e))}function Ea(n){return typeof n>"u"||typeof n=="number"?n:0|(n.optional&&8)|(n.host&&1)|(n.self&&2)|(n.skipSelf&&4)}function $l(n){let e=[];for(let t=0;t<n.length;t++){let i=An(n[t]);if(Array.isArray(i)){if(i.length===0)throw new He(900,!1);let r,s=je.Default;for(let o=0;o<i.length;o++){let a=i[o],c=y_(a);typeof c=="number"?c===-1?r=a.token:s|=c:r=a}e.push(ct(r,s))}else e.push(ct(i))}return e}function um(n,e){return n[jl]=e,n.prototype[jl]=e,n}function y_(n){return n[jl]}function __(n,e,t,i){let r=n[Qo];throw e[bp]&&r.unshift(e[bp]),n.message=x_(`
`+n.message,r,t,i),n[f_]=r,n[Qo]=null,n}function x_(n,e,t,i=null){n=n&&n.charAt(0)===`
`&&n.charAt(1)==m_?n.slice(2):n;let r=an(e);if(Array.isArray(e))r=e.map(an).join(" -> ");else if(typeof e=="object"){let s=[];for(let o in e)if(e.hasOwnProperty(o)){let a=e[o];s.push(o+":"+(typeof a=="string"?JSON.stringify(a):an(a)))}r=`{${s.join(", ")}}`}return`${t}${i?"("+i+")":""}[${r}]: ${n.replace(p_,`
  `)}`}var dm=um(rm("Optional"),8);var M_=um(rm("SkipSelf"),4);function Ur(n,e){let t=n.hasOwnProperty(xp);return t?n[xp]:null}function b_(n,e,t){if(n.length!==e.length)return!1;for(let i=0;i<n.length;i++){let r=n[i],s=e[i];if(t&&(r=t(r),s=t(s)),s!==r)return!1}return!0}function w_(n){return n.flat(Number.POSITIVE_INFINITY)}function Wu(n,e){n.forEach(t=>Array.isArray(t)?Wu(t,e):e(t))}function hm(n,e,t){e>=n.length?n.push(t):n.splice(e,0,t)}function ea(n,e){return e>=n.length-1?n.pop():n.splice(e,1)[0]}function E_(n,e,t,i){let r=n.length;if(r==e)n.push(t,i);else if(r===1)n.push(i,n[0]),n[0]=t;else{for(r--,n.push(n[r-1],n[r]);r>e;){let s=r-2;n[r]=n[s],r--}n[e]=t,n[e+1]=i}}function S_(n,e,t){let i=eo(n,e);return i>=0?n[i|1]=t:(i=~i,E_(n,i,e,t)),i}function Rl(n,e){let t=eo(n,e);if(t>=0)return n[t|1]}function eo(n,e){return C_(n,e,1)}function C_(n,e,t){let i=0,r=n.length>>t;for(;r!==i;){let s=i+(r-i>>1),o=n[s<<t];if(e===o)return s<<t;o>e?r=s:i=s+1}return~(r<<t)}var Gs={},yn=[],Ws=new Je(""),fm=new Je("",-1),pm=new Je(""),ta=class{get(e,t=Hs){if(t===Hs){let i=new Error(`NullInjectorError: No provider for ${an(e)}!`);throw i.name="NullInjectorError",i}return t}},mm=function(n){return n[n.OnPush=0]="OnPush",n[n.Default=1]="Default",n}(mm||{}),jn=function(n){return n[n.Emulated=0]="Emulated",n[n.None=2]="None",n[n.ShadowDom=3]="ShadowDom",n}(jn||{}),Ti=function(n){return n[n.None=0]="None",n[n.SignalBased=1]="SignalBased",n[n.HasDecoratorInputTransform=2]="HasDecoratorInputTransform",n}(Ti||{});function D_(n,e,t){let i=n.length;for(;;){let r=n.indexOf(e,t);if(r===-1)return r;if(r===0||n.charCodeAt(r-1)<=32){let s=e.length;if(r+s===i||n.charCodeAt(r+s)<=32)return r}t=r+1}}function ql(n,e,t){let i=0;for(;i<t.length;){let r=t[i];if(typeof r=="number"){if(r!==0)break;i++;let s=t[i++],o=t[i++],a=t[i++];n.setAttribute(e,o,a,s)}else{let s=r,o=t[++i];A_(s)?n.setProperty(e,s,o):n.setAttribute(e,s,o),i++}}return i}function T_(n){return n===3||n===4||n===6}function A_(n){return n.charCodeAt(0)===64}function ju(n,e){if(!(e===null||e.length===0))if(n===null||n.length===0)n=e.slice();else{let t=-1;for(let i=0;i<e.length;i++){let r=e[i];typeof r=="number"?t=r:t===0||(t===-1||t===2?wp(n,t,r,null,e[++i]):wp(n,t,r,null,null))}}return n}function wp(n,e,t,i,r){let s=0,o=n.length;if(e===-1)o=-1;else for(;s<n.length;){let a=n[s++];if(typeof a=="number"){if(a===e){o=-1;break}else if(a>e){o=s-1;break}}}for(;s<n.length;){let a=n[s];if(typeof a=="number")break;if(a===t){if(i===null){r!==null&&(n[s+1]=r);return}else if(i===n[s+1]){n[s+2]=r;return}}s++,i!==null&&s++,r!==null&&s++}o!==-1&&(n.splice(o,0,e),s=o+1),n.splice(s++,0,t),i!==null&&n.splice(s++,0,i),r!==null&&n.splice(s++,0,r)}var gm="ng-template";function I_(n,e,t,i){let r=0;if(i){for(;r<e.length&&typeof e[r]=="string";r+=2)if(e[r]==="class"&&D_(e[r+1].toLowerCase(),t,0)!==-1)return!0}else if($u(n))return!1;if(r=e.indexOf(1,r),r>-1){let s;for(;++r<e.length&&typeof(s=e[r])=="string";)if(s.toLowerCase()===t)return!0}return!1}function $u(n){return n.type===4&&n.value!==gm}function R_(n,e,t){let i=n.type===4&&!t?gm:n.value;return e===i}function P_(n,e,t){let i=4,r=n.attrs,s=r!==null?F_(r):0,o=!1;for(let a=0;a<e.length;a++){let c=e[a];if(typeof c=="number"){if(!o&&!Tn(i)&&!Tn(c))return!1;if(o&&Tn(c))continue;o=!1,i=c|i&1;continue}if(!o)if(i&4){if(i=2|i&1,c!==""&&!R_(n,c,t)||c===""&&e.length===1){if(Tn(i))return!1;o=!0}}else if(i&8){if(r===null||!I_(n,r,c,t)){if(Tn(i))return!1;o=!0}}else{let l=e[++a],u=N_(c,r,$u(n),t);if(u===-1){if(Tn(i))return!1;o=!0;continue}if(l!==""){let d;if(u>s?d="":d=r[u+1].toLowerCase(),i&2&&l!==d){if(Tn(i))return!1;o=!0}}}}return Tn(i)||o}function Tn(n){return(n&1)===0}function N_(n,e,t,i){if(e===null)return-1;let r=0;if(i||!t){let s=!1;for(;r<e.length;){let o=e[r];if(o===n)return r;if(o===3||o===6)s=!0;else if(o===1||o===2){let a=e[++r];for(;typeof a=="string";)a=e[++r];continue}else{if(o===4)break;if(o===0){r+=4;continue}}r+=s?1:2}return-1}else return L_(e,n)}function O_(n,e,t=!1){for(let i=0;i<e.length;i++)if(P_(n,e[i],t))return!0;return!1}function F_(n){for(let e=0;e<n.length;e++){let t=n[e];if(T_(t))return e}return n.length}function L_(n,e){let t=n.indexOf(4);if(t>-1)for(t++;t<n.length;){let i=n[t];if(typeof i=="number")return-1;if(i===e)return t;t++}return-1}function Ep(n,e){return n?":not("+e.trim()+")":e}function k_(n){let e=n[0],t=1,i=2,r="",s=!1;for(;t<n.length;){let o=n[t];if(typeof o=="string")if(i&2){let a=n[++t];r+="["+o+(a.length>0?'="'+a+'"':"")+"]"}else i&8?r+="."+o:i&4&&(r+=" "+o);else r!==""&&!Tn(o)&&(e+=Ep(s,r),r=""),i=o,s=s||!Tn(i);t++}return r!==""&&(e+=Ep(s,r)),e}function U_(n){return n.map(k_).join(",")}function V_(n){let e=[],t=[],i=1,r=2;for(;i<n.length;){let s=n[i];if(typeof s=="string")r===2?s!==""&&e.push(s,n[++i]):r===8&&t.push(s);else{if(!Tn(r))break;r=s}i++}return{attrs:e,classes:t}}function Dt(n){return ba(()=>{let e=xm(n),t=Ct(xt({},e),{decls:n.decls,vars:n.vars,template:n.template,consts:n.consts||null,ngContentSelectors:n.ngContentSelectors,onPush:n.changeDetection===mm.OnPush,directiveDefs:null,pipeDefs:null,dependencies:e.standalone&&n.dependencies||null,getStandaloneInjector:null,signals:n.signals??!1,data:n.data||{},encapsulation:n.encapsulation||jn.Emulated,styles:n.styles||yn,_:null,schemas:n.schemas||null,tView:null,id:""});Mm(t);let i=n.dependencies;return t.directiveDefs=Cp(i,!1),t.pipeDefs=Cp(i,!0),t.id=G_(t),t})}function B_(n){return Vr(n)||ym(n)}function z_(n){return n!==null}function Zr(n){return ba(()=>({type:n.type,bootstrap:n.bootstrap||yn,declarations:n.declarations||yn,imports:n.imports||yn,exports:n.exports||yn,transitiveCompileScopes:null,schemas:n.schemas||null,id:n.id||null}))}function Sp(n,e){if(n==null)return Gs;let t={};for(let i in n)if(n.hasOwnProperty(i)){let r=n[i],s,o,a=Ti.None;Array.isArray(r)?(a=r[0],s=r[1],o=r[2]??s):(s=r,o=r),e?(t[s]=a!==Ti.None?[i,a]:i,e[s]=o):t[s]=i}return t}function Sa(n){return ba(()=>{let e=xm(n);return Mm(e),e})}function vm(n){return{type:n.type,name:n.name,factory:null,pure:n.pure!==!1,standalone:n.standalone===!0,onDestroy:n.type.prototype.ngOnDestroy||null}}function Vr(n){return n[a_]||null}function ym(n){return n[c_]||null}function _m(n){return n[l_]||null}function H_(n){let e=Vr(n)||ym(n)||_m(n);return e!==null?e.standalone:!1}function xm(n){let e={};return{type:n.type,providersResolver:null,factory:null,hostBindings:n.hostBindings||null,hostVars:n.hostVars||0,hostAttrs:n.hostAttrs||null,contentQueries:n.contentQueries||null,declaredInputs:e,inputTransforms:null,inputConfig:n.inputs||Gs,exportAs:n.exportAs||null,standalone:n.standalone===!0,signals:n.signals===!0,selectors:n.selectors||yn,viewQuery:n.viewQuery||null,features:n.features||null,setInput:null,findHostDirectiveDefs:null,hostDirectives:null,inputs:Sp(n.inputs,e),outputs:Sp(n.outputs),debugInfo:null}}function Mm(n){n.features?.forEach(e=>e(n))}function Cp(n,e){if(!n)return null;let t=e?_m:B_;return()=>(typeof n=="function"?n():n).map(i=>t(i)).filter(z_)}function G_(n){let e=0,t=[n.selectors,n.ngContentSelectors,n.hostVars,n.hostAttrs,n.consts,n.vars,n.decls,n.encapsulation,n.standalone,n.signals,n.exportAs,JSON.stringify(n.inputs),JSON.stringify(n.outputs),Object.getOwnPropertyNames(n.type.prototype),!!n.contentQueries,!!n.viewQuery].join("|");for(let r of t)e=Math.imul(31,e)+r.charCodeAt(0)<<0;return e+=2147483648,"c"+e}function bm(n){return{\u0275providers:n}}function W_(...n){return{\u0275providers:wm(!0,n),\u0275fromNgModule:!0}}function wm(n,...e){let t=[],i=new Set,r,s=o=>{t.push(o)};return Wu(e,o=>{let a=o;Xl(a,s,[],i)&&(r||=[],r.push(a))}),r!==void 0&&Em(r,s),t}function Em(n,e){for(let t=0;t<n.length;t++){let{ngModule:i,providers:r}=n[t];qu(r,s=>{e(s,i)})}}function Xl(n,e,t,i){if(n=An(n),!n)return!1;let r=null,s=yp(n),o=!s&&Vr(n);if(!s&&!o){let c=n.ngModule;if(s=yp(c),s)r=c;else return!1}else{if(o&&!o.standalone)return!1;r=n}let a=i.has(r);if(o){if(a)return!1;if(i.add(r),o.dependencies){let c=typeof o.dependencies=="function"?o.dependencies():o.dependencies;for(let l of c)Xl(l,e,t,i)}}else if(s){if(s.imports!=null&&!a){i.add(r);let l;try{Wu(s.imports,u=>{Xl(u,e,t,i)&&(l||=[],l.push(u))})}finally{}l!==void 0&&Em(l,e)}if(!a){let l=Ur(r)||(()=>new r);e({provide:r,useFactory:l,deps:yn},r),e({provide:pm,useValue:r,multi:!0},r),e({provide:Ws,useValue:()=>ct(r),multi:!0},r)}let c=s.providers;if(c!=null&&!a){let l=n;qu(c,u=>{e(u,l)})}}else return!1;return r!==n&&n.providers!==void 0}function qu(n,e){for(let t of n)am(t)&&(t=t.\u0275providers),Array.isArray(t)?qu(t,e):e(t)}var j_=lt({provide:String,useValue:lt});function Sm(n){return n!==null&&typeof n=="object"&&j_ in n}function $_(n){return!!(n&&n.useExisting)}function q_(n){return!!(n&&n.useFactory)}function Yl(n){return typeof n=="function"}var Ca=new Je(""),qo={},X_={},Pl;function Xu(){return Pl===void 0&&(Pl=new ta),Pl}var Ai=class{},na=class extends Ai{get destroyed(){return this._destroyed}constructor(e,t,i,r){super(),this.parent=t,this.source=i,this.scopes=r,this.records=new Map,this._ngOnDestroyHooks=new Set,this._onDestroyHooks=[],this._destroyed=!1,Jl(e,o=>this.processProvider(o)),this.records.set(fm,Nr(void 0,this)),r.has("environment")&&this.records.set(Ai,Nr(void 0,this));let s=this.records.get(Ca);s!=null&&typeof s.value=="string"&&this.scopes.add(s.value),this.injectorDefTypes=new Set(this.get(pm,yn,je.Self))}destroy(){this.assertNotDestroyed(),this._destroyed=!0;let e=$e(null);try{for(let i of this._ngOnDestroyHooks)i.ngOnDestroy();let t=this._onDestroyHooks;this._onDestroyHooks=[];for(let i of t)i()}finally{this.records.clear(),this._ngOnDestroyHooks.clear(),this.injectorDefTypes.clear(),$e(e)}}onDestroy(e){return this.assertNotDestroyed(),this._onDestroyHooks.push(e),()=>this.removeOnDestroy(e)}runInContext(e){this.assertNotDestroyed();let t=Pr(this),i=vn(void 0),r;try{return e()}finally{Pr(t),vn(i)}}get(e,t=Hs,i=je.Default){if(this.assertNotDestroyed(),e.hasOwnProperty(Mp))return e[Mp](this);i=Ea(i);let r,s=Pr(this),o=vn(void 0);try{if(!(i&je.SkipSelf)){let c=this.records.get(e);if(c===void 0){let l=ex(e)&&Hu(e);l&&this.injectableDefInScope(l)?c=Nr(Zl(e),qo):c=null,this.records.set(e,c)}if(c!=null)return this.hydrate(e,c)}let a=i&je.Self?Xu():this.parent;return t=i&je.Optional&&t===Hs?null:t,a.get(e,t)}catch(a){if(a.name==="NullInjectorError"){if((a[Qo]=a[Qo]||[]).unshift(an(e)),s)throw a;return __(a,e,"R3InjectorError",this.source)}else throw a}finally{vn(o),Pr(s)}}resolveInjectorInitializers(){let e=$e(null),t=Pr(this),i=vn(void 0),r;try{let s=this.get(Ws,yn,je.Self);for(let o of s)o()}finally{Pr(t),vn(i),$e(e)}}toString(){let e=[],t=this.records;for(let i of t.keys())e.push(an(i));return`R3Injector[${e.join(", ")}]`}assertNotDestroyed(){if(this._destroyed)throw new He(205,!1)}processProvider(e){e=An(e);let t=Yl(e)?e:An(e&&e.provide),i=Z_(e);if(!Yl(e)&&e.multi===!0){let r=this.records.get(t);r||(r=Nr(void 0,qo,!0),r.factory=()=>$l(r.multi),this.records.set(t,r)),t=e,r.multi.push(e)}this.records.set(t,i)}hydrate(e,t){let i=$e(null);try{return t.value===qo&&(t.value=X_,t.value=t.factory()),typeof t.value=="object"&&t.value&&Q_(t.value)&&this._ngOnDestroyHooks.add(t.value),t.value}finally{$e(i)}}injectableDefInScope(e){if(!e.providedIn)return!1;let t=An(e.providedIn);return typeof t=="string"?t==="any"||this.scopes.has(t):this.injectorDefTypes.has(t)}removeOnDestroy(e){let t=this._onDestroyHooks.indexOf(e);t!==-1&&this._onDestroyHooks.splice(t,1)}};function Zl(n){let e=Hu(n),t=e!==null?e.factory:Ur(n);if(t!==null)return t;if(n instanceof Je)throw new He(204,!1);if(n instanceof Function)return Y_(n);throw new He(204,!1)}function Y_(n){if(n.length>0)throw new He(204,!1);let t=s_(n);return t!==null?()=>t.factory(n):()=>new n}function Z_(n){if(Sm(n))return Nr(void 0,n.useValue);{let e=J_(n);return Nr(e,qo)}}function J_(n,e,t){let i;if(Yl(n)){let r=An(n);return Ur(r)||Zl(r)}else if(Sm(n))i=()=>An(n.useValue);else if(q_(n))i=()=>n.useFactory(...$l(n.deps||[]));else if($_(n))i=()=>ct(An(n.useExisting));else{let r=An(n&&(n.useClass||n.provide));if(K_(n))i=()=>new r(...$l(n.deps));else return Ur(r)||Zl(r)}return i}function Nr(n,e,t=!1){return{factory:n,value:e,multi:t?[]:void 0}}function K_(n){return!!n.deps}function Q_(n){return n!==null&&typeof n=="object"&&typeof n.ngOnDestroy=="function"}function ex(n){return typeof n=="function"||typeof n=="object"&&n instanceof Je}function Jl(n,e){for(let t of n)Array.isArray(t)?Jl(t,e):t&&am(t)?Jl(t.\u0275providers,e):e(t)}function tx(){return cm()!==void 0||g_()!=null}function nx(n){return typeof n=="function"}var ai=0,Re=1,Te=2,Ht=3,Rn=4,Pn=5,js=6,ia=7,Bt=8,Br=9,$n=10,Gt=11,$s=12,Dp=13,Jr=14,qn=15,Qi=16,Or=17,ri=18,Da=19,Cm=20,Di=21,Nl=22,_n=23,cn=25,Dm=1;var er=7,ra=8,zr=9,zt=10,sa=function(n){return n[n.None=0]="None",n[n.HasTransplantedViews=2]="HasTransplantedViews",n}(sa||{});function Ji(n){return Array.isArray(n)&&typeof n[Dm]=="object"}function ci(n){return Array.isArray(n)&&n[Dm]===!0}function Tm(n){return(n.flags&4)!==0}function Yu(n){return n.componentOffset>-1}function Zu(n){return(n.flags&1)===1}function to(n){return!!n.template}function Kl(n){return(n[Te]&512)!==0}var Ql=class{constructor(e,t,i){this.previousValue=e,this.currentValue=t,this.firstChange=i}isFirstChange(){return this.firstChange}};function Am(n,e,t,i){e!==null?e.applyValueToInputSignal(e,i):n[t]=i}function Ju(){return Im}function Im(n){return n.type.prototype.ngOnChanges&&(n.setInput=rx),ix}Ju.ngInherit=!0;function ix(){let n=Pm(this),e=n?.current;if(e){let t=n.previous;if(t===Gs)n.previous=e;else for(let i in e)t[i]=e[i];n.current=null,this.ngOnChanges(e)}}function rx(n,e,t,i,r){let s=this.declaredInputs[i],o=Pm(n)||sx(n,{previous:Gs,current:null}),a=o.current||(o.current={}),c=o.previous,l=c[s];a[s]=new Ql(l&&l.currentValue,t,c===Gs),Am(n,e,r,t)}var Rm="__ngSimpleChanges__";function Pm(n){return n[Rm]||null}function sx(n,e){return n[Rm]=e}var Tp=null;var Gn=function(n,e,t){Tp?.(n,e,t)},Nm="svg",ox="math";function Xn(n){for(;Array.isArray(n);)n=n[ai];return n}function Om(n,e){return Xn(e[n])}function xn(n,e){return Xn(e[n.index])}function Ku(n,e){return n.data[e]}function ax(n,e){return n[e]}function Kr(n,e){let t=e[n];return Ji(t)?t:t[ai]}function Qu(n){return(n[Te]&128)===128}function cx(n){return ci(n[Ht])}function Hr(n,e){return e==null?null:n[e]}function Fm(n){n[Or]=0}function Lm(n){n[Te]&1024||(n[Te]|=1024,Qu(n)&&Aa(n))}function lx(n,e){for(;n>0;)e=e[Jr],n--;return e}function Ta(n){return!!(n[Te]&9216||n[_n]?.dirty)}function eu(n){n[$n].changeDetectionScheduler?.notify(8),n[Te]&64&&(n[Te]|=1024),Ta(n)&&Aa(n)}function Aa(n){n[$n].changeDetectionScheduler?.notify(0);let e=tr(n);for(;e!==null&&!(e[Te]&8192||(e[Te]|=8192,!Qu(e)));)e=tr(e)}function km(n,e){if((n[Te]&256)===256)throw new He(911,!1);n[Di]===null&&(n[Di]=[]),n[Di].push(e)}function ux(n,e){if(n[Di]===null)return;let t=n[Di].indexOf(e);t!==-1&&n[Di].splice(t,1)}function tr(n){let e=n[Ht];return ci(e)?e[Ht]:e}var Ue={lFrame:$m(null),bindingsEnabled:!0,skipHydrationRootTNode:null};var Um=!1;function dx(){return Ue.lFrame.elementDepthCount}function hx(){Ue.lFrame.elementDepthCount++}function fx(){Ue.lFrame.elementDepthCount--}function Vm(){return Ue.bindingsEnabled}function px(){return Ue.skipHydrationRootTNode!==null}function mx(n){return Ue.skipHydrationRootTNode===n}function gx(){Ue.skipHydrationRootTNode=null}function st(){return Ue.lFrame.lView}function Mn(){return Ue.lFrame.tView}function Nn(n){return Ue.lFrame.contextLView=n,n[Bt]}function On(n){return Ue.lFrame.contextLView=null,n}function Yn(){let n=Bm();for(;n!==null&&n.type===64;)n=n.parent;return n}function Bm(){return Ue.lFrame.currentTNode}function vx(){let n=Ue.lFrame,e=n.currentTNode;return n.isParent?e:e.parent}function no(n,e){let t=Ue.lFrame;t.currentTNode=n,t.isParent=e}function zm(){return Ue.lFrame.isParent}function yx(){Ue.lFrame.isParent=!1}function Hm(){return Um}function Ap(n){Um=n}function Gm(){let n=Ue.lFrame,e=n.bindingRootIndex;return e===-1&&(e=n.bindingRootIndex=n.tView.bindingStartIndex),e}function _x(n){return Ue.lFrame.bindingIndex=n}function io(){return Ue.lFrame.bindingIndex++}function xx(n){let e=Ue.lFrame,t=e.bindingIndex;return e.bindingIndex=e.bindingIndex+n,t}function Mx(){return Ue.lFrame.inI18n}function bx(n,e){let t=Ue.lFrame;t.bindingIndex=t.bindingRootIndex=n,tu(e)}function wx(){return Ue.lFrame.currentDirectiveIndex}function tu(n){Ue.lFrame.currentDirectiveIndex=n}function Ex(n){let e=Ue.lFrame.currentDirectiveIndex;return e===-1?null:n[e]}function Sx(){return Ue.lFrame.currentQueryIndex}function ed(n){Ue.lFrame.currentQueryIndex=n}function Cx(n){let e=n[Re];return e.type===2?e.declTNode:e.type===1?n[Pn]:null}function Wm(n,e,t){if(t&je.SkipSelf){let r=e,s=n;for(;r=r.parent,r===null&&!(t&je.Host);)if(r=Cx(s),r===null||(s=s[Jr],r.type&10))break;if(r===null)return!1;e=r,n=s}let i=Ue.lFrame=jm();return i.currentTNode=e,i.lView=n,!0}function td(n){let e=jm(),t=n[Re];Ue.lFrame=e,e.currentTNode=t.firstChild,e.lView=n,e.tView=t,e.contextLView=n,e.bindingIndex=t.bindingStartIndex,e.inI18n=!1}function jm(){let n=Ue.lFrame,e=n===null?null:n.child;return e===null?$m(n):e}function $m(n){let e={currentTNode:null,isParent:!0,lView:null,tView:null,selectedIndex:-1,contextLView:null,elementDepthCount:0,currentNamespace:null,currentDirectiveIndex:-1,bindingRootIndex:-1,bindingIndex:-1,currentQueryIndex:0,parent:n,child:null,inI18n:!1};return n!==null&&(n.child=e),e}function qm(){let n=Ue.lFrame;return Ue.lFrame=n.parent,n.currentTNode=null,n.lView=null,n}var Xm=qm;function nd(){let n=qm();n.isParent=!0,n.tView=null,n.selectedIndex=-1,n.contextLView=null,n.elementDepthCount=0,n.currentDirectiveIndex=-1,n.currentNamespace=null,n.bindingRootIndex=-1,n.bindingIndex=-1,n.currentQueryIndex=0}function Dx(n){return(Ue.lFrame.contextLView=lx(n,Ue.lFrame.contextLView))[Bt]}function or(){return Ue.lFrame.selectedIndex}function nr(n){Ue.lFrame.selectedIndex=n}function Ym(){let n=Ue.lFrame;return Ku(n.tView,n.selectedIndex)}function li(){Ue.lFrame.currentNamespace=Nm}function Ia(){Tx()}function Tx(){Ue.lFrame.currentNamespace=null}function Ax(){return Ue.lFrame.currentNamespace}var Zm=!0;function id(){return Zm}function rd(n){Zm=n}function Ix(n,e,t){let{ngOnChanges:i,ngOnInit:r,ngDoCheck:s}=e.type.prototype;if(i){let o=Im(e);(t.preOrderHooks??=[]).push(n,o),(t.preOrderCheckHooks??=[]).push(n,o)}r&&(t.preOrderHooks??=[]).push(0-n,r),s&&((t.preOrderHooks??=[]).push(n,s),(t.preOrderCheckHooks??=[]).push(n,s))}function sd(n,e){for(let t=e.directiveStart,i=e.directiveEnd;t<i;t++){let s=n.data[t].type.prototype,{ngAfterContentInit:o,ngAfterContentChecked:a,ngAfterViewInit:c,ngAfterViewChecked:l,ngOnDestroy:u}=s;o&&(n.contentHooks??=[]).push(-t,o),a&&((n.contentHooks??=[]).push(t,a),(n.contentCheckHooks??=[]).push(t,a)),c&&(n.viewHooks??=[]).push(-t,c),l&&((n.viewHooks??=[]).push(t,l),(n.viewCheckHooks??=[]).push(t,l)),u!=null&&(n.destroyHooks??=[]).push(t,u)}}function Xo(n,e,t){Jm(n,e,3,t)}function Yo(n,e,t,i){(n[Te]&3)===t&&Jm(n,e,t,i)}function Ol(n,e){let t=n[Te];(t&3)===e&&(t&=16383,t+=1,n[Te]=t)}function Jm(n,e,t,i){let r=i!==void 0?n[Or]&65535:0,s=i??-1,o=e.length-1,a=0;for(let c=r;c<o;c++)if(typeof e[c+1]=="number"){if(a=e[c],i!=null&&a>=i)break}else e[c]<0&&(n[Or]+=65536),(a<s||s==-1)&&(Rx(n,t,e,c),n[Or]=(n[Or]&4294901760)+c+2),c++}function Ip(n,e){Gn(4,n,e);let t=$e(null);try{e.call(n)}finally{$e(t),Gn(5,n,e)}}function Rx(n,e,t,i){let r=t[i]<0,s=t[i+1],o=r?-t[i]:t[i],a=n[o];r?n[Te]>>14<n[Or]>>16&&(n[Te]&3)===e&&(n[Te]+=16384,Ip(a,s)):Ip(a,s)}var kr=-1,qs=class{constructor(e,t,i){this.factory=e,this.resolving=!1,this.canSeeViewProviders=t,this.injectImpl=i}};function Px(n){return n instanceof qs}function Nx(n){return(n.flags&8)!==0}function Ox(n){return(n.flags&16)!==0}var Fl={},nu=class{constructor(e,t){this.injector=e,this.parentInjector=t}get(e,t,i){i=Ea(i);let r=this.injector.get(e,Fl,i);return r!==Fl||t===Fl?r:this.parentInjector.get(e,t,i)}};function Km(n){return n!==kr}function oa(n){return n&32767}function Fx(n){return n>>16}function aa(n,e){let t=Fx(n),i=e;for(;t>0;)i=i[Jr],t--;return i}var iu=!0;function ca(n){let e=iu;return iu=n,e}var Lx=256,Qm=Lx-1,eg=5,kx=0,Wn={};function Ux(n,e,t){let i;typeof t=="string"?i=t.charCodeAt(0)||0:t.hasOwnProperty(zs)&&(i=t[zs]),i==null&&(i=t[zs]=kx++);let r=i&Qm,s=1<<r;e.data[n+(r>>eg)]|=s}function tg(n,e){let t=ng(n,e);if(t!==-1)return t;let i=e[Re];i.firstCreatePass&&(n.injectorIndex=e.length,Ll(i.data,n),Ll(e,null),Ll(i.blueprint,null));let r=od(n,e),s=n.injectorIndex;if(Km(r)){let o=oa(r),a=aa(r,e),c=a[Re].data;for(let l=0;l<8;l++)e[s+l]=a[o+l]|c[o+l]}return e[s+8]=r,s}function Ll(n,e){n.push(0,0,0,0,0,0,0,0,e)}function ng(n,e){return n.injectorIndex===-1||n.parent&&n.parent.injectorIndex===n.injectorIndex||e[n.injectorIndex+8]===null?-1:n.injectorIndex}function od(n,e){if(n.parent&&n.parent.injectorIndex!==-1)return n.parent.injectorIndex;let t=0,i=null,r=e;for(;r!==null;){if(i=ag(r),i===null)return kr;if(t++,r=r[Jr],i.injectorIndex!==-1)return i.injectorIndex|t<<16}return kr}function Vx(n,e,t){Ux(n,e,t)}function ig(n,e,t){if(t&je.Optional||n!==void 0)return n;Gu(e,"NodeInjector")}function rg(n,e,t,i){if(t&je.Optional&&i===void 0&&(i=null),!(t&(je.Self|je.Host))){let r=n[Br],s=vn(void 0);try{return r?r.get(e,i,t&je.Optional):lm(e,i,t&je.Optional)}finally{vn(s)}}return ig(i,e,t)}function sg(n,e,t,i=je.Default,r){if(n!==null){if(e[Te]&2048&&!(i&je.Self)){let o=Gx(n,e,t,i,Wn);if(o!==Wn)return o}let s=og(n,e,t,i,Wn);if(s!==Wn)return s}return rg(e,t,i,r)}function og(n,e,t,i,r){let s=zx(t);if(typeof s=="function"){if(!Wm(e,n,i))return i&je.Host?ig(r,t,i):rg(e,t,i,r);try{let o;if(o=s(i),o==null&&!(i&je.Optional))Gu(t);else return o}finally{Xm()}}else if(typeof s=="number"){let o=null,a=ng(n,e),c=kr,l=i&je.Host?e[qn][Pn]:null;for((a===-1||i&je.SkipSelf)&&(c=a===-1?od(n,e):e[a+8],c===kr||!Pp(i,!1)?a=-1:(o=e[Re],a=oa(c),e=aa(c,e)));a!==-1;){let u=e[Re];if(Rp(s,a,u.data)){let d=Bx(a,e,t,o,i,l);if(d!==Wn)return d}c=e[a+8],c!==kr&&Pp(i,e[Re].data[a+8]===l)&&Rp(s,a,e)?(o=u,a=oa(c),e=aa(c,e)):a=-1}}return r}function Bx(n,e,t,i,r,s){let o=e[Re],a=o.data[n+8],c=i==null?Yu(a)&&iu:i!=o&&(a.type&3)!==0,l=r&je.Host&&s===a,u=Zo(a,o,t,c,l);return u!==null?Gr(e,o,u,a):Wn}function Zo(n,e,t,i,r){let s=n.providerIndexes,o=e.data,a=s&1048575,c=n.directiveStart,l=n.directiveEnd,u=s>>20,d=i?a:a+u,h=r?a+u:l;for(let f=d;f<h;f++){let g=o[f];if(f<c&&t===g||f>=c&&g.type===t)return f}if(r){let f=o[c];if(f&&to(f)&&f.type===t)return c}return null}function Gr(n,e,t,i){let r=n[t],s=e.data;if(Px(r)){let o=r;o.resolving&&d_(u_(s[t]));let a=ca(o.canSeeViewProviders);o.resolving=!0;let c,l=o.injectImpl?vn(o.injectImpl):null,u=Wm(n,i,je.Default);try{r=n[t]=o.factory(void 0,s,n,i),e.firstCreatePass&&t>=i.directiveStart&&Ix(t,s[t],e)}finally{l!==null&&vn(l),ca(a),o.resolving=!1,Xm()}}return r}function zx(n){if(typeof n=="string")return n.charCodeAt(0)||0;let e=n.hasOwnProperty(zs)?n[zs]:void 0;return typeof e=="number"?e>=0?e&Qm:Hx:e}function Rp(n,e,t){let i=1<<n;return!!(t[e+(n>>eg)]&i)}function Pp(n,e){return!(n&je.Self)&&!(n&je.Host&&e)}var Ki=class{constructor(e,t){this._tNode=e,this._lView=t}get(e,t,i){return sg(this._tNode,this._lView,e,Ea(i),t)}};function Hx(){return new Ki(Yn(),st())}function Gx(n,e,t,i,r){let s=n,o=e;for(;s!==null&&o!==null&&o[Te]&2048&&!(o[Te]&512);){let a=og(s,o,t,i|je.Self,Wn);if(a!==Wn)return a;let c=s.parent;if(!c){let l=o[Cm];if(l){let u=l.get(t,Wn,i);if(u!==Wn)return u}c=ag(o),o=o[Jr]}s=c}return r}function ag(n){let e=n[Re],t=e.type;return t===2?e.declTNode:t===1?n[Pn]:null}function Np(n,e=null,t=null,i){let r=Wx(n,e,t,i);return r.resolveInjectorInitializers(),r}function Wx(n,e=null,t=null,i,r=new Set){let s=[t||yn,W_(n)];return i=i||(typeof n=="object"?void 0:an(n)),new na(s,e||Xu(),i||null,r)}var Wr=class n{static{this.THROW_IF_NOT_FOUND=Hs}static{this.NULL=new ta}static create(e,t){if(Array.isArray(e))return Np({name:""},t,e,"");{let i=e.name??"";return Np({name:i},e.parent,e.providers,i)}}static{this.\u0275prov=pt({token:n,providedIn:"any",factory:()=>ct(fm)})}static{this.__NG_ELEMENT_ID__=-1}};var jx=new Je("");jx.__NG_ELEMENT_ID__=n=>{let e=Yn();if(e===null)throw new He(204,!1);if(e.type&2)return e.value;if(n&je.Optional)return null;throw new He(204,!1)};var $x="ngOriginalError";function kl(n){return n[$x]}var cg=!0,lg=(()=>{class n{static{this.__NG_ELEMENT_ID__=qx}static{this.__NG_ENV_ID__=t=>t}}return n})(),ru=class extends lg{constructor(e){super(),this._lView=e}onDestroy(e){return km(this._lView,e),()=>ux(this._lView,e)}};function qx(){return new ru(st())}var Ra=(()=>{class n{constructor(){this.taskId=0,this.pendingTasks=new Set,this.hasPendingTasks=new ks(!1)}get _hasPendingTasks(){return this.hasPendingTasks.value}add(){this._hasPendingTasks||this.hasPendingTasks.next(!0);let t=this.taskId++;return this.pendingTasks.add(t),t}remove(t){this.pendingTasks.delete(t),this.pendingTasks.size===0&&this._hasPendingTasks&&this.hasPendingTasks.next(!1)}ngOnDestroy(){this.pendingTasks.clear(),this._hasPendingTasks&&this.hasPendingTasks.next(!1)}static{this.\u0275prov=pt({token:n,providedIn:"root",factory:()=>new n})}}return n})();var su=class extends Ci{constructor(e=!1){super(),this.destroyRef=void 0,this.pendingTasks=void 0,this.__isAsync=e,tx()&&(this.destroyRef=ke(lg,{optional:!0})??void 0,this.pendingTasks=ke(Ra,{optional:!0})??void 0)}emit(e){let t=$e(null);try{super.next(e)}finally{$e(t)}}subscribe(e,t,i){let r=e,s=t||(()=>null),o=i;if(e&&typeof e=="object"){let c=e;r=c.next?.bind(c),s=c.error?.bind(c),o=c.complete?.bind(c)}this.__isAsync&&(s=this.wrapInTimeout(s),r&&(r=this.wrapInTimeout(r)),o&&(o=this.wrapInTimeout(o)));let a=super.subscribe({next:r,error:s,complete:o});return e instanceof Xt&&e.add(a),a}wrapInTimeout(e){return t=>{let i=this.pendingTasks?.add();setTimeout(()=>{e(t),i!==void 0&&this.pendingTasks?.remove(i)})}}},In=su;function la(...n){}function ug(n){let e,t;function i(){n=la;try{t!==void 0&&typeof cancelAnimationFrame=="function"&&cancelAnimationFrame(t),e!==void 0&&clearTimeout(e)}catch{}}return e=setTimeout(()=>{n(),i()}),typeof requestAnimationFrame=="function"&&(t=requestAnimationFrame(()=>{n(),i()})),()=>i()}function Op(n){return queueMicrotask(()=>n()),()=>{n=la}}var ad="isAngularZone",ua=ad+"_ID",Xx=0,rt=class n{constructor(e){this.hasPendingMacrotasks=!1,this.hasPendingMicrotasks=!1,this.isStable=!0,this.onUnstable=new In(!1),this.onMicrotaskEmpty=new In(!1),this.onStable=new In(!1),this.onError=new In(!1);let{enableLongStackTrace:t=!1,shouldCoalesceEventChangeDetection:i=!1,shouldCoalesceRunChangeDetection:r=!1,scheduleInRootZone:s=cg}=e;if(typeof Zone>"u")throw new He(908,!1);Zone.assertZonePatched();let o=this;o._nesting=0,o._outer=o._inner=Zone.current,Zone.TaskTrackingZoneSpec&&(o._inner=o._inner.fork(new Zone.TaskTrackingZoneSpec)),t&&Zone.longStackTraceZoneSpec&&(o._inner=o._inner.fork(Zone.longStackTraceZoneSpec)),o.shouldCoalesceEventChangeDetection=!r&&i,o.shouldCoalesceRunChangeDetection=r,o.callbackScheduled=!1,o.scheduleInRootZone=s,Jx(o)}static isInAngularZone(){return typeof Zone<"u"&&Zone.current.get(ad)===!0}static assertInAngularZone(){if(!n.isInAngularZone())throw new He(909,!1)}static assertNotInAngularZone(){if(n.isInAngularZone())throw new He(909,!1)}run(e,t,i){return this._inner.run(e,t,i)}runTask(e,t,i,r){let s=this._inner,o=s.scheduleEventTask("NgZoneEvent: "+r,e,Yx,la,la);try{return s.runTask(o,t,i)}finally{s.cancelTask(o)}}runGuarded(e,t,i){return this._inner.runGuarded(e,t,i)}runOutsideAngular(e){return this._outer.run(e)}},Yx={};function cd(n){if(n._nesting==0&&!n.hasPendingMicrotasks&&!n.isStable)try{n._nesting++,n.onMicrotaskEmpty.emit(null)}finally{if(n._nesting--,!n.hasPendingMicrotasks)try{n.runOutsideAngular(()=>n.onStable.emit(null))}finally{n.isStable=!0}}}function Zx(n){if(n.isCheckStableRunning||n.callbackScheduled)return;n.callbackScheduled=!0;function e(){ug(()=>{n.callbackScheduled=!1,ou(n),n.isCheckStableRunning=!0,cd(n),n.isCheckStableRunning=!1})}n.scheduleInRootZone?Zone.root.run(()=>{e()}):n._outer.run(()=>{e()}),ou(n)}function Jx(n){let e=()=>{Zx(n)},t=Xx++;n._inner=n._inner.fork({name:"angular",properties:{[ad]:!0,[ua]:t,[ua+t]:!0},onInvokeTask:(i,r,s,o,a,c)=>{if(Kx(c))return i.invokeTask(s,o,a,c);try{return Fp(n),i.invokeTask(s,o,a,c)}finally{(n.shouldCoalesceEventChangeDetection&&o.type==="eventTask"||n.shouldCoalesceRunChangeDetection)&&e(),Lp(n)}},onInvoke:(i,r,s,o,a,c,l)=>{try{return Fp(n),i.invoke(s,o,a,c,l)}finally{n.shouldCoalesceRunChangeDetection&&!n.callbackScheduled&&!Qx(c)&&e(),Lp(n)}},onHasTask:(i,r,s,o)=>{i.hasTask(s,o),r===s&&(o.change=="microTask"?(n._hasPendingMicrotasks=o.microTask,ou(n),cd(n)):o.change=="macroTask"&&(n.hasPendingMacrotasks=o.macroTask))},onHandleError:(i,r,s,o)=>(i.handleError(s,o),n.runOutsideAngular(()=>n.onError.emit(o)),!1)})}function ou(n){n._hasPendingMicrotasks||(n.shouldCoalesceEventChangeDetection||n.shouldCoalesceRunChangeDetection)&&n.callbackScheduled===!0?n.hasPendingMicrotasks=!0:n.hasPendingMicrotasks=!1}function Fp(n){n._nesting++,n.isStable&&(n.isStable=!1,n.onUnstable.emit(null))}function Lp(n){n._nesting--,cd(n)}var au=class{constructor(){this.hasPendingMicrotasks=!1,this.hasPendingMacrotasks=!1,this.isStable=!0,this.onUnstable=new In,this.onMicrotaskEmpty=new In,this.onStable=new In,this.onError=new In}run(e,t,i){return e.apply(t,i)}runGuarded(e,t,i){return e.apply(t,i)}runOutsideAngular(e){return e()}runTask(e,t,i,r){return e.apply(t,i)}};function Kx(n){return dg(n,"__ignore_ng_zone__")}function Qx(n){return dg(n,"__scheduler_tick__")}function dg(n,e){return!Array.isArray(n)||n.length!==1?!1:n[0]?.data?.[e]===!0}var si=class{constructor(){this._console=console}handleError(e){let t=this._findOriginalError(e);this._console.error("ERROR",e),t&&this._console.error("ORIGINAL ERROR",t)}_findOriginalError(e){let t=e&&kl(e);for(;t&&kl(t);)t=kl(t);return t||null}},eM=new Je("",{providedIn:"root",factory:()=>{let n=ke(rt),e=ke(si);return t=>n.runOutsideAngular(()=>e.handleError(t))}});function tM(){return Qr(Yn(),st())}function Qr(n,e){return new ar(xn(n,e))}var ar=(()=>{class n{constructor(t){this.nativeElement=t}static{this.__NG_ELEMENT_ID__=tM}}return n})();function nM(n){return n instanceof ar?n.nativeElement:n}function iM(){return this._results[Symbol.iterator]()}var cu=class n{get changes(){return this._changes??=new In}constructor(e=!1){this._emitDistinctChangesOnly=e,this.dirty=!0,this._onDirty=void 0,this._results=[],this._changesDetected=!1,this._changes=void 0,this.length=0,this.first=void 0,this.last=void 0;let t=n.prototype;t[Symbol.iterator]||(t[Symbol.iterator]=iM)}get(e){return this._results[e]}map(e){return this._results.map(e)}filter(e){return this._results.filter(e)}find(e){return this._results.find(e)}reduce(e,t){return this._results.reduce(e,t)}forEach(e){this._results.forEach(e)}some(e){return this._results.some(e)}toArray(){return this._results.slice()}toString(){return this._results.toString()}reset(e,t){this.dirty=!1;let i=w_(e);(this._changesDetected=!b_(this._results,i,t))&&(this._results=i,this.length=i.length,this.last=i[this.length-1],this.first=i[0])}notifyOnChanges(){this._changes!==void 0&&(this._changesDetected||!this._emitDistinctChangesOnly)&&this._changes.emit(this)}onDirty(e){this._onDirty=e}setDirty(){this.dirty=!0,this._onDirty?.()}destroy(){this._changes!==void 0&&(this._changes.complete(),this._changes.unsubscribe())}};function hg(n){return(n.flags&128)===128}var fg=new Map,rM=0;function sM(){return rM++}function oM(n){fg.set(n[Da],n)}function lu(n){fg.delete(n[Da])}var kp="__ngContext__";function ir(n,e){Ji(e)?(n[kp]=e[Da],oM(e)):n[kp]=e}function pg(n){return gg(n[$s])}function mg(n){return gg(n[Rn])}function gg(n){for(;n!==null&&!ci(n);)n=n[Rn];return n}var uu;function vg(n){uu=n}function aM(){if(uu!==void 0)return uu;if(typeof document<"u")return document;throw new He(210,!1)}var ld=new Je("",{providedIn:"root",factory:()=>cM}),cM="ng",ud=new Je(""),es=new Je("",{providedIn:"platform",factory:()=>"unknown"});var dd=new Je("",{providedIn:"root",factory:()=>aM().body?.querySelector("[ngCspNonce]")?.getAttribute("ngCspNonce")||null});var lM="h",uM="b";var dM=()=>null;function hd(n,e,t=!1){return dM(n,e,t)}var yg=!1,hM=new Je("",{providedIn:"root",factory:()=>yg});var da=class{constructor(e){this.changingThisBreaksApplicationSecurity=e}toString(){return`SafeValue must use [property]=binding: ${this.changingThisBreaksApplicationSecurity} (see ${im})`}};function Pa(n){return n instanceof da?n.changingThisBreaksApplicationSecurity:n}function _g(n,e){let t=fM(n);if(t!=null&&t!==e){if(t==="ResourceURL"&&e==="URL")return!0;throw new Error(`Required a safe ${e}, got a ${t} (see ${im})`)}return t===e}function fM(n){return n instanceof da&&n.getTypeName()||null}var pM=/^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:\/?#]*(?:[\/?#]|$))/i;function xg(n){return n=String(n),n.match(pM)?n:"unsafe:"+n}var fd=function(n){return n[n.NONE=0]="NONE",n[n.HTML=1]="HTML",n[n.STYLE=2]="STYLE",n[n.SCRIPT=3]="SCRIPT",n[n.URL=4]="URL",n[n.RESOURCE_URL=5]="RESOURCE_URL",n}(fd||{});function Zn(n){let e=mM();return e?e.sanitize(fd.URL,n)||"":_g(n,"URL")?Pa(n):xg(wa(n))}function mM(){let n=st();return n&&n[$n].sanitizer}function Mg(n){return n.ownerDocument.defaultView}function bg(n){return n.ownerDocument}var oi=function(n){return n[n.Important=1]="Important",n[n.DashCase=2]="DashCase",n}(oi||{}),gM;function pd(n,e){return gM(n,e)}function Fr(n,e,t,i,r){if(i!=null){let s,o=!1;ci(i)?s=i:Ji(i)&&(o=!0,i=i[ai]);let a=Xn(i);n===0&&t!==null?r==null?Cg(e,t,a):ha(e,t,a,r||null,!0):n===1&&t!==null?ha(e,t,a,r||null,!0):n===2?RM(e,a,o):n===3&&e.destroyNode(a),s!=null&&NM(e,n,s,t,r)}}function vM(n,e){return n.createText(e)}function yM(n,e,t){n.setValue(e,t)}function wg(n,e,t){return n.createElement(e,t)}function _M(n,e){Eg(n,e),e[ai]=null,e[Pn]=null}function xM(n,e,t,i,r,s){i[ai]=r,i[Pn]=e,Oa(n,i,t,1,r,s)}function Eg(n,e){e[$n].changeDetectionScheduler?.notify(9),Oa(n,e,e[Gt],2,null,null)}function MM(n){let e=n[$s];if(!e)return Ul(n[Re],n);for(;e;){let t=null;if(Ji(e))t=e[$s];else{let i=e[zt];i&&(t=i)}if(!t){for(;e&&!e[Rn]&&e!==n;)Ji(e)&&Ul(e[Re],e),e=e[Ht];e===null&&(e=n),Ji(e)&&Ul(e[Re],e),t=e&&e[Rn]}e=t}}function bM(n,e,t,i){let r=zt+i,s=t.length;i>0&&(t[r-1][Rn]=e),i<s-zt?(e[Rn]=t[r],hm(t,zt+i,e)):(t.push(e),e[Rn]=null),e[Ht]=t;let o=e[Qi];o!==null&&t!==o&&Sg(o,e);let a=e[ri];a!==null&&a.insertView(n),eu(e),e[Te]|=128}function Sg(n,e){let t=n[zr],i=e[Ht];if(Ji(i))n[Te]|=sa.HasTransplantedViews;else{let r=i[Ht][qn];e[qn]!==r&&(n[Te]|=sa.HasTransplantedViews)}t===null?n[zr]=[e]:t.push(e)}function md(n,e){let t=n[zr],i=t.indexOf(e);t.splice(i,1)}function Xs(n,e){if(n.length<=zt)return;let t=zt+e,i=n[t];if(i){let r=i[Qi];r!==null&&r!==n&&md(r,i),e>0&&(n[t-1][Rn]=i[Rn]);let s=ea(n,zt+e);_M(i[Re],i);let o=s[ri];o!==null&&o.detachView(s[Re]),i[Ht]=null,i[Rn]=null,i[Te]&=-129}return i}function Na(n,e){if(!(e[Te]&256)){let t=e[Gt];t.destroyNode&&Oa(n,e,t,3,null,null),MM(e)}}function Ul(n,e){if(e[Te]&256)return;let t=$e(null);try{e[Te]&=-129,e[Te]|=256,e[_n]&&_l(e[_n]),EM(n,e),wM(n,e),e[Re].type===1&&e[Gt].destroy();let i=e[Qi];if(i!==null&&ci(e[Ht])){i!==e[Ht]&&md(i,e);let r=e[ri];r!==null&&r.detachView(n)}lu(e)}finally{$e(t)}}function wM(n,e){let t=n.cleanup,i=e[ia];if(t!==null)for(let s=0;s<t.length-1;s+=2)if(typeof t[s]=="string"){let o=t[s+3];o>=0?i[o]():i[-o].unsubscribe(),s+=2}else{let o=i[t[s+1]];t[s].call(o)}i!==null&&(e[ia]=null);let r=e[Di];if(r!==null){e[Di]=null;for(let s=0;s<r.length;s++){let o=r[s];o()}}}function EM(n,e){let t;if(n!=null&&(t=n.destroyHooks)!=null)for(let i=0;i<t.length;i+=2){let r=e[t[i]];if(!(r instanceof qs)){let s=t[i+1];if(Array.isArray(s))for(let o=0;o<s.length;o+=2){let a=r[s[o]],c=s[o+1];Gn(4,a,c);try{c.call(a)}finally{Gn(5,a,c)}}else{Gn(4,r,s);try{s.call(r)}finally{Gn(5,r,s)}}}}}function SM(n,e,t){return CM(n,e.parent,t)}function CM(n,e,t){let i=e;for(;i!==null&&i.type&168;)e=i,i=e.parent;if(i===null)return t[ai];{let{componentOffset:r}=i;if(r>-1){let{encapsulation:s}=n.data[i.directiveStart+r];if(s===jn.None||s===jn.Emulated)return null}return xn(i,t)}}function ha(n,e,t,i,r){n.insertBefore(e,t,i,r)}function Cg(n,e,t){n.appendChild(e,t)}function Up(n,e,t,i,r){i!==null?ha(n,e,t,i,r):Cg(n,e,t)}function Dg(n,e){return n.parentNode(e)}function DM(n,e){return n.nextSibling(e)}function TM(n,e,t){return IM(n,e,t)}function AM(n,e,t){return n.type&40?xn(n,t):null}var IM=AM,Vp;function gd(n,e,t,i){let r=SM(n,i,e),s=e[Gt],o=i.parent||e[Pn],a=TM(o,i,e);if(r!=null)if(Array.isArray(t))for(let c=0;c<t.length;c++)Up(s,r,t[c],a,!1);else Up(s,r,t,a,!1);Vp!==void 0&&Vp(s,i,e,t,r)}function Vs(n,e){if(e!==null){let t=e.type;if(t&3)return xn(e,n);if(t&4)return du(-1,n[e.index]);if(t&8){let i=e.child;if(i!==null)return Vs(n,i);{let r=n[e.index];return ci(r)?du(-1,r):Xn(r)}}else{if(t&128)return Vs(n,e.next);if(t&32)return pd(e,n)()||Xn(n[e.index]);{let i=Tg(n,e);if(i!==null){if(Array.isArray(i))return i[0];let r=tr(n[qn]);return Vs(r,i)}else return Vs(n,e.next)}}}return null}function Tg(n,e){if(e!==null){let i=n[qn][Pn],r=e.projection;return i.projection[r]}return null}function du(n,e){let t=zt+n+1;if(t<e.length){let i=e[t],r=i[Re].firstChild;if(r!==null)return Vs(i,r)}return e[er]}function RM(n,e,t){n.removeChild(null,e,t)}function vd(n,e,t,i,r,s,o){for(;t!=null;){if(t.type===128){t=t.next;continue}let a=i[t.index],c=t.type;if(o&&e===0&&(a&&ir(Xn(a),i),t.flags|=2),(t.flags&32)!==32)if(c&8)vd(n,e,t.child,i,r,s,!1),Fr(e,n,r,a,s);else if(c&32){let l=pd(t,i),u;for(;u=l();)Fr(e,n,r,u,s);Fr(e,n,r,a,s)}else c&16?PM(n,e,i,t,r,s):Fr(e,n,r,a,s);t=o?t.projectionNext:t.next}}function Oa(n,e,t,i,r,s){vd(t,i,n.firstChild,e,r,s,!1)}function PM(n,e,t,i,r,s){let o=t[qn],c=o[Pn].projection[i.projection];if(Array.isArray(c))for(let l=0;l<c.length;l++){let u=c[l];Fr(e,n,r,u,s)}else{let l=c,u=o[Ht];hg(i)&&(l.flags|=128),vd(n,e,l,u,r,s,!0)}}function NM(n,e,t,i,r){let s=t[er],o=Xn(t);s!==o&&Fr(e,n,i,s,r);for(let a=zt;a<t.length;a++){let c=t[a];Oa(c[Re],c,n,e,i,s)}}function OM(n,e,t,i,r){if(e)r?n.addClass(t,i):n.removeClass(t,i);else{let s=i.indexOf("-")===-1?void 0:oi.DashCase;r==null?n.removeStyle(t,i,s):(typeof r=="string"&&r.endsWith("!important")&&(r=r.slice(0,-10),s|=oi.Important),n.setStyle(t,i,r,s))}}function FM(n,e,t){n.setAttribute(e,"style",t)}function Ag(n,e,t){t===""?n.removeAttribute(e,"class"):n.setAttribute(e,"class",t)}function Ig(n,e,t){let{mergedAttrs:i,classes:r,styles:s}=t;i!==null&&ql(n,e,i),r!==null&&Ag(n,e,r),s!==null&&FM(n,e,s)}var ui={};function ye(n=1){Rg(Mn(),st(),or()+n,!1)}function Rg(n,e,t,i){if(!i)if((e[Te]&3)===3){let s=n.preOrderCheckHooks;s!==null&&Xo(e,s,t)}else{let s=n.preOrderHooks;s!==null&&Yo(e,s,0,t)}nr(t)}function Jn(n,e=je.Default){let t=st();if(t===null)return ct(n,e);let i=Yn();return sg(i,t,An(n),e)}function Pg(n,e,t,i,r,s){let o=$e(null);try{let a=null;r&Ti.SignalBased&&(a=e[i][Hn]),a!==null&&a.transformFn!==void 0&&(s=a.transformFn(s)),r&Ti.HasDecoratorInputTransform&&(s=n.inputTransforms[i].call(e,s)),n.setInput!==null?n.setInput(e,a,s,t,i):Am(e,a,i,s)}finally{$e(o)}}function LM(n,e){let t=n.hostBindingOpCodes;if(t!==null)try{for(let i=0;i<t.length;i++){let r=t[i];if(r<0)nr(~r);else{let s=r,o=t[++i],a=t[++i];bx(o,s);let c=e[s];a(2,c)}}}finally{nr(-1)}}function Fa(n,e,t,i,r,s,o,a,c,l,u){let d=e.blueprint.slice();return d[ai]=r,d[Te]=i|4|128|8|64,(l!==null||n&&n[Te]&2048)&&(d[Te]|=2048),Fm(d),d[Ht]=d[Jr]=n,d[Bt]=t,d[$n]=o||n&&n[$n],d[Gt]=a||n&&n[Gt],d[Br]=c||n&&n[Br]||null,d[Pn]=s,d[Da]=sM(),d[js]=u,d[Cm]=l,d[qn]=e.type==2?n[qn]:d,d}function La(n,e,t,i,r){let s=n.data[e];if(s===null)s=kM(n,e,t,i,r),Mx()&&(s.flags|=32);else if(s.type&64){s.type=t,s.value=i,s.attrs=r;let o=vx();s.injectorIndex=o===null?-1:o.injectorIndex}return no(s,!0),s}function kM(n,e,t,i,r){let s=Bm(),o=zm(),a=o?s:s&&s.parent,c=n.data[e]=GM(n,a,t,e,i,r);return n.firstChild===null&&(n.firstChild=c),s!==null&&(o?s.child==null&&c.parent!==null&&(s.child=c):s.next===null&&(s.next=c,c.prev=s)),c}function Ng(n,e,t,i){if(t===0)return-1;let r=e.length;for(let s=0;s<t;s++)e.push(i),n.blueprint.push(i),n.data.push(null);return r}function Og(n,e,t,i,r){let s=or(),o=i&2;try{nr(-1),o&&e.length>cn&&Rg(n,e,cn,!1),Gn(o?2:0,r),t(i,r)}finally{nr(s),Gn(o?3:1,r)}}function Fg(n,e,t){if(Tm(e)){let i=$e(null);try{let r=e.directiveStart,s=e.directiveEnd;for(let o=r;o<s;o++){let a=n.data[o];if(a.contentQueries){let c=t[o];a.contentQueries(1,c,o)}}}finally{$e(i)}}}function Lg(n,e,t){Vm()&&(ZM(n,e,t,xn(t,e)),(t.flags&64)===64&&zg(n,e,t))}function kg(n,e,t=xn){let i=e.localNames;if(i!==null){let r=e.index+1;for(let s=0;s<i.length;s+=2){let o=i[s+1],a=o===-1?t(e,n):n[o];n[r++]=a}}}function Ug(n){let e=n.tView;return e===null||e.incompleteFirstPass?n.tView=yd(1,null,n.template,n.decls,n.vars,n.directiveDefs,n.pipeDefs,n.viewQuery,n.schemas,n.consts,n.id):e}function yd(n,e,t,i,r,s,o,a,c,l,u){let d=cn+i,h=d+r,f=UM(d,h),g=typeof l=="function"?l():l;return f[Re]={type:n,blueprint:f,template:t,queries:null,viewQuery:a,declTNode:e,data:f.slice().fill(null,d),bindingStartIndex:d,expandoStartIndex:h,hostBindingOpCodes:null,firstCreatePass:!0,firstUpdatePass:!0,staticViewQueries:!1,staticContentQueries:!1,preOrderHooks:null,preOrderCheckHooks:null,contentHooks:null,contentCheckHooks:null,viewHooks:null,viewCheckHooks:null,destroyHooks:null,cleanup:null,contentQueries:null,components:null,directiveRegistry:typeof s=="function"?s():s,pipeRegistry:typeof o=="function"?o():o,firstChild:null,schemas:c,consts:g,incompleteFirstPass:!1,ssrId:u}}function UM(n,e){let t=[];for(let i=0;i<e;i++)t.push(i<n?null:ui);return t}function VM(n,e,t,i){let s=i.get(hM,yg)||t===jn.ShadowDom,o=n.selectRootElement(e,s);return BM(o),o}function BM(n){zM(n)}var zM=()=>null;function HM(n,e,t,i){let r=Wg(e);r.push(t),n.firstCreatePass&&jg(n).push(i,r.length-1)}function GM(n,e,t,i,r,s){let o=e?e.injectorIndex:-1,a=0;return px()&&(a|=128),{type:t,index:i,insertBeforeIndex:null,injectorIndex:o,directiveStart:-1,directiveEnd:-1,directiveStylingLast:-1,componentOffset:-1,propertyBindings:null,flags:a,providerIndexes:0,value:r,attrs:s,mergedAttrs:null,localNames:null,initialInputs:void 0,inputs:null,outputs:null,tView:null,next:null,prev:null,projectionNext:null,child:null,parent:e,projection:null,styles:null,stylesWithoutHost:null,residualStyles:void 0,classes:null,classesWithoutHost:null,residualClasses:void 0,classBindings:0,styleBindings:0}}function Bp(n,e,t,i,r){for(let s in e){if(!e.hasOwnProperty(s))continue;let o=e[s];if(o===void 0)continue;i??={};let a,c=Ti.None;Array.isArray(o)?(a=o[0],c=o[1]):a=o;let l=s;if(r!==null){if(!r.hasOwnProperty(s))continue;l=r[s]}n===0?zp(i,t,l,a,c):zp(i,t,l,a)}return i}function zp(n,e,t,i,r){let s;n.hasOwnProperty(t)?(s=n[t]).push(e,i):s=n[t]=[e,i],r!==void 0&&s.push(r)}function WM(n,e,t){let i=e.directiveStart,r=e.directiveEnd,s=n.data,o=e.attrs,a=[],c=null,l=null;for(let u=i;u<r;u++){let d=s[u],h=t?t.get(d):null,f=h?h.inputs:null,g=h?h.outputs:null;c=Bp(0,d.inputs,u,c,f),l=Bp(1,d.outputs,u,l,g);let v=c!==null&&o!==null&&!$u(e)?ab(c,u,o):null;a.push(v)}c!==null&&(c.hasOwnProperty("class")&&(e.flags|=8),c.hasOwnProperty("style")&&(e.flags|=16)),e.initialInputs=a,e.inputs=c,e.outputs=l}function jM(n){return n==="class"?"className":n==="for"?"htmlFor":n==="formaction"?"formAction":n==="innerHtml"?"innerHTML":n==="readonly"?"readOnly":n==="tabindex"?"tabIndex":n}function $M(n,e,t,i,r,s,o,a){let c=xn(e,t),l=e.inputs,u;!a&&l!=null&&(u=l[i])?(_d(n,t,u,i,r),Yu(e)&&qM(t,e.index)):e.type&3?(i=jM(i),r=o!=null?o(r,e.value||"",i):r,s.setProperty(c,i,r)):e.type&12}function qM(n,e){let t=Kr(e,n);t[Te]&16||(t[Te]|=64)}function Vg(n,e,t,i){if(Vm()){let r=i===null?null:{"":-1},s=KM(n,t),o,a;s===null?o=a=null:[o,a]=s,o!==null&&Bg(n,e,t,o,r,a),r&&QM(t,i,r)}t.mergedAttrs=ju(t.mergedAttrs,t.attrs)}function Bg(n,e,t,i,r,s){for(let l=0;l<i.length;l++)Vx(tg(t,e),n,i[l].type);tb(t,n.data.length,i.length);for(let l=0;l<i.length;l++){let u=i[l];u.providersResolver&&u.providersResolver(u)}let o=!1,a=!1,c=Ng(n,e,i.length,null);for(let l=0;l<i.length;l++){let u=i[l];t.mergedAttrs=ju(t.mergedAttrs,u.hostAttrs),nb(n,t,e,c,u),eb(c,u,r),u.contentQueries!==null&&(t.flags|=4),(u.hostBindings!==null||u.hostAttrs!==null||u.hostVars!==0)&&(t.flags|=64);let d=u.type.prototype;!o&&(d.ngOnChanges||d.ngOnInit||d.ngDoCheck)&&((n.preOrderHooks??=[]).push(t.index),o=!0),!a&&(d.ngOnChanges||d.ngDoCheck)&&((n.preOrderCheckHooks??=[]).push(t.index),a=!0),c++}WM(n,t,s)}function XM(n,e,t,i,r){let s=r.hostBindings;if(s){let o=n.hostBindingOpCodes;o===null&&(o=n.hostBindingOpCodes=[]);let a=~e.index;YM(o)!=a&&o.push(a),o.push(t,i,s)}}function YM(n){let e=n.length;for(;e>0;){let t=n[--e];if(typeof t=="number"&&t<0)return t}return 0}function ZM(n,e,t,i){let r=t.directiveStart,s=t.directiveEnd;Yu(t)&&ib(e,t,n.data[r+t.componentOffset]),n.firstCreatePass||tg(t,e),ir(i,e);let o=t.initialInputs;for(let a=r;a<s;a++){let c=n.data[a],l=Gr(e,n,a,t);if(ir(l,e),o!==null&&ob(e,a-r,l,c,t,o),to(c)){let u=Kr(t.index,e);u[Bt]=Gr(e,n,a,t)}}}function zg(n,e,t){let i=t.directiveStart,r=t.directiveEnd,s=t.index,o=wx();try{nr(s);for(let a=i;a<r;a++){let c=n.data[a],l=e[a];tu(a),(c.hostBindings!==null||c.hostVars!==0||c.hostAttrs!==null)&&JM(c,l)}}finally{nr(-1),tu(o)}}function JM(n,e){n.hostBindings!==null&&n.hostBindings(1,e)}function KM(n,e){let t=n.directiveRegistry,i=null,r=null;if(t)for(let s=0;s<t.length;s++){let o=t[s];if(O_(e,o.selectors,!1))if(i||(i=[]),to(o))if(o.findHostDirectiveDefs!==null){let a=[];r=r||new Map,o.findHostDirectiveDefs(o,a,r),i.unshift(...a,o);let c=a.length;hu(n,e,c)}else i.unshift(o),hu(n,e,0);else r=r||new Map,o.findHostDirectiveDefs?.(o,i,r),i.push(o)}return i===null?null:[i,r]}function hu(n,e,t){e.componentOffset=t,(n.components??=[]).push(e.index)}function QM(n,e,t){if(e){let i=n.localNames=[];for(let r=0;r<e.length;r+=2){let s=t[e[r+1]];if(s==null)throw new He(-301,!1);i.push(e[r],s)}}}function eb(n,e,t){if(t){if(e.exportAs)for(let i=0;i<e.exportAs.length;i++)t[e.exportAs[i]]=n;to(e)&&(t[""]=n)}}function tb(n,e,t){n.flags|=1,n.directiveStart=e,n.directiveEnd=e+t,n.providerIndexes=e}function nb(n,e,t,i,r){n.data[i]=r;let s=r.factory||(r.factory=Ur(r.type,!0)),o=new qs(s,to(r),Jn);n.blueprint[i]=o,t[i]=o,XM(n,e,i,Ng(n,t,r.hostVars,ui),r)}function ib(n,e,t){let i=xn(e,n),r=Ug(t),s=n[$n].rendererFactory,o=16;t.signals?o=4096:t.onPush&&(o=64);let a=ka(n,Fa(n,r,null,o,i,e,null,s.createRenderer(i,t),null,null,null));n[e.index]=a}function rb(n,e,t,i,r,s){let o=xn(n,e);sb(e[Gt],o,s,n.value,t,i,r)}function sb(n,e,t,i,r,s,o){if(s==null)n.removeAttribute(e,r,t);else{let a=o==null?wa(s):o(s,i||"",r);n.setAttribute(e,r,a,t)}}function ob(n,e,t,i,r,s){let o=s[e];if(o!==null)for(let a=0;a<o.length;){let c=o[a++],l=o[a++],u=o[a++],d=o[a++];Pg(i,t,c,l,u,d)}}function ab(n,e,t){let i=null,r=0;for(;r<t.length;){let s=t[r];if(s===0){r+=4;continue}else if(s===5){r+=2;continue}if(typeof s=="number")break;if(n.hasOwnProperty(s)){i===null&&(i=[]);let o=n[s];for(let a=0;a<o.length;a+=3)if(o[a]===e){i.push(s,o[a+1],o[a+2],t[r+1]);break}}r+=2}return i}function Hg(n,e,t,i){return[n,!0,0,e,null,i,null,t,null,null]}function Gg(n,e){let t=n.contentQueries;if(t!==null){let i=$e(null);try{for(let r=0;r<t.length;r+=2){let s=t[r],o=t[r+1];if(o!==-1){let a=n.data[o];ed(s),a.contentQueries(2,e[o],o)}}}finally{$e(i)}}}function ka(n,e){return n[$s]?n[Dp][Rn]=e:n[$s]=e,n[Dp]=e,e}function fu(n,e,t){ed(0);let i=$e(null);try{e(n,t)}finally{$e(i)}}function Wg(n){return n[ia]??=[]}function jg(n){return n.cleanup??=[]}function $g(n,e){let t=n[Br],i=t?t.get(si,null):null;i&&i.handleError(e)}function _d(n,e,t,i,r){for(let s=0;s<t.length;){let o=t[s++],a=t[s++],c=t[s++],l=e[o],u=n.data[o];Pg(u,l,i,a,c,r)}}function cb(n,e,t){let i=Om(e,n);yM(n[Gt],i,t)}function lb(n,e){let t=Kr(e,n),i=t[Re];ub(i,t);let r=t[ai];r!==null&&t[js]===null&&(t[js]=hd(r,t[Br])),xd(i,t,t[Bt])}function ub(n,e){for(let t=e.length;t<n.blueprint.length;t++)e.push(n.blueprint[t])}function xd(n,e,t){td(e);try{let i=n.viewQuery;i!==null&&fu(1,i,t);let r=n.template;r!==null&&Og(n,e,r,1,t),n.firstCreatePass&&(n.firstCreatePass=!1),e[ri]?.finishViewCreation(n),n.staticContentQueries&&Gg(n,e),n.staticViewQueries&&fu(2,n.viewQuery,t);let s=n.components;s!==null&&db(e,s)}catch(i){throw n.firstCreatePass&&(n.incompleteFirstPass=!0,n.firstCreatePass=!1),i}finally{e[Te]&=-5,nd()}}function db(n,e){for(let t=0;t<e.length;t++)lb(n,e[t])}function Ua(n,e,t,i){let r=$e(null);try{let s=e.tView,a=n[Te]&4096?4096:16,c=Fa(n,s,t,a,null,e,null,null,i?.injector??null,i?.embeddedViewInjector??null,i?.dehydratedView??null),l=n[e.index];c[Qi]=l;let u=n[ri];return u!==null&&(c[ri]=u.createEmbeddedView(s)),xd(s,c,t),c}finally{$e(r)}}function qg(n,e){let t=zt+e;if(t<n.length)return n[t]}function Ys(n,e){return!e||e.firstChild===null||hg(n)}function Va(n,e,t,i=!0){let r=e[Re];if(bM(r,e,n,t),i){let o=du(t,n),a=e[Gt],c=Dg(a,n[er]);c!==null&&xM(r,n[Pn],a,e,c,o)}let s=e[js];s!==null&&s.firstChild!==null&&(s.firstChild=null)}function Xg(n,e){let t=Xs(n,e);return t!==void 0&&Na(t[Re],t),t}function fa(n,e,t,i,r=!1){for(;t!==null;){if(t.type===128){t=r?t.projectionNext:t.next;continue}let s=e[t.index];s!==null&&i.push(Xn(s)),ci(s)&&hb(s,i);let o=t.type;if(o&8)fa(n,e,t.child,i);else if(o&32){let a=pd(t,e),c;for(;c=a();)i.push(c)}else if(o&16){let a=Tg(e,t);if(Array.isArray(a))i.push(...a);else{let c=tr(e[qn]);fa(c[Re],c,a,i,!0)}}t=r?t.projectionNext:t.next}return i}function hb(n,e){for(let t=zt;t<n.length;t++){let i=n[t],r=i[Re].firstChild;r!==null&&fa(i[Re],i,r,e)}n[er]!==n[ai]&&e.push(n[er])}var Yg=[];function fb(n){return n[_n]??pb(n)}function pb(n){let e=Yg.pop()??Object.create(gb);return e.lView=n,e}function mb(n){n.lView[_n]!==n&&(n.lView=null,Yg.push(n))}var gb=Ct(xt({},Fs),{consumerIsAlwaysLive:!0,consumerMarkedDirty:n=>{Aa(n.lView)},consumerOnSignalRead(){this.lView[_n]=this}});function vb(n){let e=n[_n]??Object.create(yb);return e.lView=n,e}var yb=Ct(xt({},Fs),{consumerIsAlwaysLive:!0,consumerMarkedDirty:n=>{let e=tr(n.lView);for(;e&&!Zg(e[Re]);)e=tr(e);e&&Lm(e)},consumerOnSignalRead(){this.lView[_n]=this}});function Zg(n){return n.type!==2}var _b=100;function Jg(n,e=!0,t=0){let i=n[$n],r=i.rendererFactory,s=!1;s||r.begin?.();try{xb(n,t)}catch(o){throw e&&$g(n,o),o}finally{s||(r.end?.(),i.inlineEffectRunner?.flush())}}function xb(n,e){let t=Hm();try{Ap(!0),pu(n,e);let i=0;for(;Ta(n);){if(i===_b)throw new He(103,!1);i++,pu(n,1)}}finally{Ap(t)}}function Mb(n,e,t,i){let r=e[Te];if((r&256)===256)return;let s=!1,o=!1;!s&&e[$n].inlineEffectRunner?.flush(),td(e);let a=!0,c=null,l=null;s||(Zg(n)?(l=fb(e),c=Lo(l)):Wf()===null?(a=!1,l=vb(e),c=Lo(l)):e[_n]&&(_l(e[_n]),e[_n]=null));try{Fm(e),_x(n.bindingStartIndex),t!==null&&Og(n,e,t,2,i);let u=(r&3)===3;if(!s)if(u){let f=n.preOrderCheckHooks;f!==null&&Xo(e,f,null)}else{let f=n.preOrderHooks;f!==null&&Yo(e,f,0,null),Ol(e,0)}if(o||bb(e),Kg(e,0),n.contentQueries!==null&&Gg(n,e),!s)if(u){let f=n.contentCheckHooks;f!==null&&Xo(e,f)}else{let f=n.contentHooks;f!==null&&Yo(e,f,1),Ol(e,1)}LM(n,e);let d=n.components;d!==null&&ev(e,d,0);let h=n.viewQuery;if(h!==null&&fu(2,h,i),!s)if(u){let f=n.viewCheckHooks;f!==null&&Xo(e,f)}else{let f=n.viewHooks;f!==null&&Yo(e,f,2),Ol(e,2)}if(n.firstUpdatePass===!0&&(n.firstUpdatePass=!1),e[Nl]){for(let f of e[Nl])f();e[Nl]=null}s||(e[Te]&=-73)}catch(u){throw s||Aa(e),u}finally{l!==null&&(vl(l,c),a&&mb(l)),nd()}}function Kg(n,e){for(let t=pg(n);t!==null;t=mg(t))for(let i=zt;i<t.length;i++){let r=t[i];Qg(r,e)}}function bb(n){for(let e=pg(n);e!==null;e=mg(e)){if(!(e[Te]&sa.HasTransplantedViews))continue;let t=e[zr];for(let i=0;i<t.length;i++){let r=t[i];Lm(r)}}}function wb(n,e,t){let i=Kr(e,n);Qg(i,t)}function Qg(n,e){Qu(n)&&pu(n,e)}function pu(n,e){let i=n[Re],r=n[Te],s=n[_n],o=!!(e===0&&r&16);if(o||=!!(r&64&&e===0),o||=!!(r&1024),o||=!!(s?.dirty&&yl(s)),o||=!1,s&&(s.dirty=!1),n[Te]&=-9217,o)Mb(i,n,i.template,n[Bt]);else if(r&8192){Kg(n,1);let a=i.components;a!==null&&ev(n,a,1)}}function ev(n,e,t){for(let i=0;i<e.length;i++)wb(n,e[i],t)}function Md(n,e){let t=Hm()?64:1088;for(n[$n].changeDetectionScheduler?.notify(e);n;){n[Te]|=t;let i=tr(n);if(Kl(n)&&!i)return n;n=i}return null}var Zs=class{get rootNodes(){let e=this._lView,t=e[Re];return fa(t,e,t.firstChild,[])}constructor(e,t,i=!0){this._lView=e,this._cdRefInjectingView=t,this.notifyErrorHandler=i,this._appRef=null,this._attachedToViewContainer=!1}get context(){return this._lView[Bt]}set context(e){this._lView[Bt]=e}get destroyed(){return(this._lView[Te]&256)===256}destroy(){if(this._appRef)this._appRef.detachView(this);else if(this._attachedToViewContainer){let e=this._lView[Ht];if(ci(e)){let t=e[ra],i=t?t.indexOf(this):-1;i>-1&&(Xs(e,i),ea(t,i))}this._attachedToViewContainer=!1}Na(this._lView[Re],this._lView)}onDestroy(e){km(this._lView,e)}markForCheck(){Md(this._cdRefInjectingView||this._lView,4)}detach(){this._lView[Te]&=-129}reattach(){eu(this._lView),this._lView[Te]|=128}detectChanges(){this._lView[Te]|=1024,Jg(this._lView,this.notifyErrorHandler)}checkNoChanges(){}attachToViewContainerRef(){if(this._appRef)throw new He(902,!1);this._attachedToViewContainer=!0}detachFromAppRef(){this._appRef=null;let e=Kl(this._lView),t=this._lView[Qi];t!==null&&!e&&md(t,this._lView),Eg(this._lView[Re],this._lView)}attachToAppRef(e){if(this._attachedToViewContainer)throw new He(902,!1);this._appRef=e;let t=Kl(this._lView),i=this._lView[Qi];i!==null&&!t&&Sg(i,this._lView),eu(this._lView)}},rr=(()=>{class n{static{this.__NG_ELEMENT_ID__=Cb}}return n})(),Eb=rr,Sb=class extends Eb{constructor(e,t,i){super(),this._declarationLView=e,this._declarationTContainer=t,this.elementRef=i}get ssrId(){return this._declarationTContainer.tView?.ssrId||null}createEmbeddedView(e,t){return this.createEmbeddedViewImpl(e,t)}createEmbeddedViewImpl(e,t,i){let r=Ua(this._declarationLView,this._declarationTContainer,e,{embeddedViewInjector:t,dehydratedView:i});return new Zs(r)}};function Cb(){return bd(Yn(),st())}function bd(n,e){return n.type&4?new Sb(e,n,Qr(n,e)):null}var nP=new RegExp(`^(\\d+)*(${uM}|${lM})*(.*)`);var Db=()=>null;function Js(n,e){return Db(n,e)}var jr=class{},Ba=new Je("",{providedIn:"root",factory:()=>!1});var tv=new Je(""),nv=new Je(""),mu=class{},pa=class{};function Tb(n){let e=Error(`No component factory found for ${an(n)}.`);return e[Ab]=n,e}var Ab="ngComponent";var gu=class{resolveComponentFactory(e){throw Tb(e)}},Ks=class{static{this.NULL=new gu}},$r=class{};var Ib=(()=>{class n{static{this.\u0275prov=pt({token:n,providedIn:"root",factory:()=>null})}}return n})();function vu(n,e,t){let i=t?n.styles:null,r=t?n.classes:null,s=0;if(e!==null)for(let o=0;o<e.length;o++){let a=e[o];if(typeof a=="number")s=a;else if(s==1)r=gp(r,a);else if(s==2){let c=a,l=e[++o];i=gp(i,c+": "+l+";")}}t?n.styles=i:n.stylesWithoutHost=i,t?n.classes=r:n.classesWithoutHost=r}var yu=class extends Ks{constructor(e){super(),this.ngModule=e}resolveComponentFactory(e){let t=Vr(e);return new ma(t,this.ngModule)}};function Hp(n,e){let t=[];for(let i in n){if(!n.hasOwnProperty(i))continue;let r=n[i];if(r===void 0)continue;let s=Array.isArray(r),o=s?r[0]:r,a=s?r[1]:Ti.None;e?t.push({propName:o,templateName:i,isSignal:(a&Ti.SignalBased)!==0}):t.push({propName:o,templateName:i})}return t}function Rb(n){let e=n.toLowerCase();return e==="svg"?Nm:e==="math"?ox:null}var ma=class extends pa{get inputs(){let e=this.componentDef,t=e.inputTransforms,i=Hp(e.inputs,!0);if(t!==null)for(let r of i)t.hasOwnProperty(r.propName)&&(r.transform=t[r.propName]);return i}get outputs(){return Hp(this.componentDef.outputs,!1)}constructor(e,t){super(),this.componentDef=e,this.ngModule=t,this.componentType=e.type,this.selector=U_(e.selectors),this.ngContentSelectors=e.ngContentSelectors?e.ngContentSelectors:[],this.isBoundToModule=!!t}create(e,t,i,r){let s=$e(null);try{r=r||this.ngModule;let o=r instanceof Ai?r:r?.injector;o&&this.componentDef.getStandaloneInjector!==null&&(o=this.componentDef.getStandaloneInjector(o)||o);let a=o?new nu(e,o):e,c=a.get($r,null);if(c===null)throw new He(407,!1);let l=a.get(Ib,null),u=a.get(jr,null),d={rendererFactory:c,sanitizer:l,inlineEffectRunner:null,changeDetectionScheduler:u},h=c.createRenderer(null,this.componentDef),f=this.componentDef.selectors[0][0]||"div",g=i?VM(h,i,this.componentDef.encapsulation,a):wg(h,f,Rb(f)),v=512;this.componentDef.signals?v|=4096:this.componentDef.onPush||(v|=16);let m=null;g!==null&&(m=hd(g,a,!0));let p=yd(0,null,null,1,0,null,null,null,null,null,null),b=Fa(null,p,null,v,null,null,d,h,a,null,m);td(b);let M,E,O=null;try{let C=this.componentDef,D,F=null;C.findHostDirectiveDefs?(D=[],F=new Map,C.findHostDirectiveDefs(C,D,F),D.push(C)):D=[C];let w=Pb(b,g);O=Nb(w,g,C,D,b,d,h),E=Ku(p,cn),g&&Lb(h,C,g,i),t!==void 0&&kb(E,this.ngContentSelectors,t),M=Fb(O,C,D,F,b,[Ub]),xd(p,b,null)}catch(C){throw O!==null&&lu(O),lu(b),C}finally{nd()}return new _u(this.componentType,M,Qr(E,b),b,E)}finally{$e(s)}}},_u=class extends mu{constructor(e,t,i,r,s){super(),this.location=i,this._rootLView=r,this._tNode=s,this.previousInputValues=null,this.instance=t,this.hostView=this.changeDetectorRef=new Zs(r,void 0,!1),this.componentType=e}setInput(e,t){let i=this._tNode.inputs,r;if(i!==null&&(r=i[e])){if(this.previousInputValues??=new Map,this.previousInputValues.has(e)&&Object.is(this.previousInputValues.get(e),t))return;let s=this._rootLView;_d(s[Re],s,r,e,t),this.previousInputValues.set(e,t);let o=Kr(this._tNode.index,s);Md(o,1)}}get injector(){return new Ki(this._tNode,this._rootLView)}destroy(){this.hostView.destroy()}onDestroy(e){this.hostView.onDestroy(e)}};function Pb(n,e){let t=n[Re],i=cn;return n[i]=e,La(t,i,2,"#host",null)}function Nb(n,e,t,i,r,s,o){let a=r[Re];Ob(i,n,e,o);let c=null;e!==null&&(c=hd(e,r[Br]));let l=s.rendererFactory.createRenderer(e,t),u=16;t.signals?u=4096:t.onPush&&(u=64);let d=Fa(r,Ug(t),null,u,r[n.index],n,s,l,null,null,c);return a.firstCreatePass&&hu(a,n,i.length-1),ka(r,d),r[n.index]=d}function Ob(n,e,t,i){for(let r of n)e.mergedAttrs=ju(e.mergedAttrs,r.hostAttrs);e.mergedAttrs!==null&&(vu(e,e.mergedAttrs,!0),t!==null&&Ig(i,t,e))}function Fb(n,e,t,i,r,s){let o=Yn(),a=r[Re],c=xn(o,r);Bg(a,r,o,t,null,i);for(let u=0;u<t.length;u++){let d=o.directiveStart+u,h=Gr(r,a,d,o);ir(h,r)}zg(a,r,o),c&&ir(c,r);let l=Gr(r,a,o.directiveStart+o.componentOffset,o);if(n[Bt]=r[Bt]=l,s!==null)for(let u of s)u(l,e);return Fg(a,o,r),l}function Lb(n,e,t,i){if(i)ql(n,t,["ng-version","18.2.14"]);else{let{attrs:r,classes:s}=V_(e.selectors[0]);r&&ql(n,t,r),s&&s.length>0&&Ag(n,t,s.join(" "))}}function kb(n,e,t){let i=n.projection=[];for(let r=0;r<e.length;r++){let s=t[r];i.push(s!=null?Array.from(s):null)}}function Ub(){let n=Yn();sd(st()[Re],n)}var ts=(()=>{class n{static{this.__NG_ELEMENT_ID__=Vb}}return n})();function Vb(){let n=Yn();return rv(n,st())}var Bb=ts,iv=class extends Bb{constructor(e,t,i){super(),this._lContainer=e,this._hostTNode=t,this._hostLView=i}get element(){return Qr(this._hostTNode,this._hostLView)}get injector(){return new Ki(this._hostTNode,this._hostLView)}get parentInjector(){let e=od(this._hostTNode,this._hostLView);if(Km(e)){let t=aa(e,this._hostLView),i=oa(e),r=t[Re].data[i+8];return new Ki(r,t)}else return new Ki(null,this._hostLView)}clear(){for(;this.length>0;)this.remove(this.length-1)}get(e){let t=Gp(this._lContainer);return t!==null&&t[e]||null}get length(){return this._lContainer.length-zt}createEmbeddedView(e,t,i){let r,s;typeof i=="number"?r=i:i!=null&&(r=i.index,s=i.injector);let o=Js(this._lContainer,e.ssrId),a=e.createEmbeddedViewImpl(t||{},s,o);return this.insertImpl(a,r,Ys(this._hostTNode,o)),a}createComponent(e,t,i,r,s){let o=e&&!nx(e),a;if(o)a=t;else{let g=t||{};a=g.index,i=g.injector,r=g.projectableNodes,s=g.environmentInjector||g.ngModuleRef}let c=o?e:new ma(Vr(e)),l=i||this.parentInjector;if(!s&&c.ngModule==null){let v=(o?l:this.parentInjector).get(Ai,null);v&&(s=v)}let u=Vr(c.componentType??{}),d=Js(this._lContainer,u?.id??null),h=d?.firstChild??null,f=c.create(l,r,h,s);return this.insertImpl(f.hostView,a,Ys(this._hostTNode,d)),f}insert(e,t){return this.insertImpl(e,t,!0)}insertImpl(e,t,i){let r=e._lView;if(cx(r)){let a=this.indexOf(e);if(a!==-1)this.detach(a);else{let c=r[Ht],l=new iv(c,c[Pn],c[Ht]);l.detach(l.indexOf(e))}}let s=this._adjustIndex(t),o=this._lContainer;return Va(o,r,s,i),e.attachToViewContainerRef(),hm(Vl(o),s,e),e}move(e,t){return this.insert(e,t)}indexOf(e){let t=Gp(this._lContainer);return t!==null?t.indexOf(e):-1}remove(e){let t=this._adjustIndex(e,-1),i=Xs(this._lContainer,t);i&&(ea(Vl(this._lContainer),t),Na(i[Re],i))}detach(e){let t=this._adjustIndex(e,-1),i=Xs(this._lContainer,t);return i&&ea(Vl(this._lContainer),t)!=null?new Zs(i):null}_adjustIndex(e,t=0){return e??this.length+t}};function Gp(n){return n[ra]}function Vl(n){return n[ra]||(n[ra]=[])}function rv(n,e){let t,i=e[n.index];return ci(i)?t=i:(t=Hg(i,e,null,n),e[n.index]=t,ka(e,t)),Hb(t,e,n,i),new iv(t,n,e)}function zb(n,e){let t=n[Gt],i=t.createComment(""),r=xn(e,n),s=Dg(t,r);return ha(t,s,i,DM(t,r),!1),i}var Hb=jb,Gb=()=>!1;function Wb(n,e,t){return Gb(n,e,t)}function jb(n,e,t,i){if(n[er])return;let r;t.type&8?r=Xn(i):r=zb(e,t),n[er]=r}var xu=class n{constructor(e){this.queryList=e,this.matches=null}clone(){return new n(this.queryList)}setDirty(){this.queryList.setDirty()}},Mu=class n{constructor(e=[]){this.queries=e}createEmbeddedView(e){let t=e.queries;if(t!==null){let i=e.contentQueries!==null?e.contentQueries[0]:t.length,r=[];for(let s=0;s<i;s++){let o=t.getByIndex(s),a=this.queries[o.indexInDeclarationView];r.push(a.clone())}return new n(r)}return null}insertView(e){this.dirtyQueriesWithMatches(e)}detachView(e){this.dirtyQueriesWithMatches(e)}finishViewCreation(e){this.dirtyQueriesWithMatches(e)}dirtyQueriesWithMatches(e){for(let t=0;t<this.queries.length;t++)av(e,t).matches!==null&&this.queries[t].setDirty()}},bu=class{constructor(e,t,i=null){this.flags=t,this.read=i,typeof e=="string"?this.predicate=Kb(e):this.predicate=e}},wu=class n{constructor(e=[]){this.queries=e}elementStart(e,t){for(let i=0;i<this.queries.length;i++)this.queries[i].elementStart(e,t)}elementEnd(e){for(let t=0;t<this.queries.length;t++)this.queries[t].elementEnd(e)}embeddedTView(e){let t=null;for(let i=0;i<this.length;i++){let r=t!==null?t.length:0,s=this.getByIndex(i).embeddedTView(e,r);s&&(s.indexInDeclarationView=i,t!==null?t.push(s):t=[s])}return t!==null?new n(t):null}template(e,t){for(let i=0;i<this.queries.length;i++)this.queries[i].template(e,t)}getByIndex(e){return this.queries[e]}get length(){return this.queries.length}track(e){this.queries.push(e)}},Eu=class n{constructor(e,t=-1){this.metadata=e,this.matches=null,this.indexInDeclarationView=-1,this.crossesNgTemplate=!1,this._appliesToNextNode=!0,this._declarationNodeIndex=t}elementStart(e,t){this.isApplyingToNode(t)&&this.matchTNode(e,t)}elementEnd(e){this._declarationNodeIndex===e.index&&(this._appliesToNextNode=!1)}template(e,t){this.elementStart(e,t)}embeddedTView(e,t){return this.isApplyingToNode(e)?(this.crossesNgTemplate=!0,this.addMatch(-e.index,t),new n(this.metadata)):null}isApplyingToNode(e){if(this._appliesToNextNode&&(this.metadata.flags&1)!==1){let t=this._declarationNodeIndex,i=e.parent;for(;i!==null&&i.type&8&&i.index!==t;)i=i.parent;return t===(i!==null?i.index:-1)}return this._appliesToNextNode}matchTNode(e,t){let i=this.metadata.predicate;if(Array.isArray(i))for(let r=0;r<i.length;r++){let s=i[r];this.matchTNodeWithReadOption(e,t,$b(t,s)),this.matchTNodeWithReadOption(e,t,Zo(t,e,s,!1,!1))}else i===rr?t.type&4&&this.matchTNodeWithReadOption(e,t,-1):this.matchTNodeWithReadOption(e,t,Zo(t,e,i,!1,!1))}matchTNodeWithReadOption(e,t,i){if(i!==null){let r=this.metadata.read;if(r!==null)if(r===ar||r===ts||r===rr&&t.type&4)this.addMatch(t.index,-2);else{let s=Zo(t,e,r,!1,!1);s!==null&&this.addMatch(t.index,s)}else this.addMatch(t.index,i)}}addMatch(e,t){this.matches===null?this.matches=[e,t]:this.matches.push(e,t)}};function $b(n,e){let t=n.localNames;if(t!==null){for(let i=0;i<t.length;i+=2)if(t[i]===e)return t[i+1]}return null}function qb(n,e){return n.type&11?Qr(n,e):n.type&4?bd(n,e):null}function Xb(n,e,t,i){return t===-1?qb(e,n):t===-2?Yb(n,e,i):Gr(n,n[Re],t,e)}function Yb(n,e,t){if(t===ar)return Qr(e,n);if(t===rr)return bd(e,n);if(t===ts)return rv(e,n)}function sv(n,e,t,i){let r=e[ri].queries[i];if(r.matches===null){let s=n.data,o=t.matches,a=[];for(let c=0;o!==null&&c<o.length;c+=2){let l=o[c];if(l<0)a.push(null);else{let u=s[l];a.push(Xb(e,u,o[c+1],t.metadata.read))}}r.matches=a}return r.matches}function Su(n,e,t,i){let r=n.queries.getByIndex(t),s=r.matches;if(s!==null){let o=sv(n,e,r,t);for(let a=0;a<s.length;a+=2){let c=s[a];if(c>0)i.push(o[a/2]);else{let l=s[a+1],u=e[-c];for(let d=zt;d<u.length;d++){let h=u[d];h[Qi]===h[Ht]&&Su(h[Re],h,l,i)}if(u[zr]!==null){let d=u[zr];for(let h=0;h<d.length;h++){let f=d[h];Su(f[Re],f,l,i)}}}}}return i}function ov(n,e){return n[ri].queries[e].queryList}function Zb(n,e,t){let i=new cu((t&4)===4);return HM(n,e,i,i.destroy),(e[ri]??=new Mu).queries.push(new xu(i))-1}function Jb(n,e,t){let i=Mn();return i.firstCreatePass&&(Qb(i,new bu(n,e,t),-1),(e&2)===2&&(i.staticViewQueries=!0)),Zb(i,st(),e)}function Kb(n){return n.split(",").map(e=>e.trim())}function Qb(n,e,t){n.queries===null&&(n.queries=new wu),n.queries.track(new Eu(e,t))}function av(n,e){return n.queries.getByIndex(e)}function ew(n,e){let t=n[Re],i=av(t,e);return i.crossesNgTemplate?Su(t,n,e,[]):sv(t,n,i,e)}var Wp=new Set;function cr(n){Wp.has(n)||(Wp.add(n),performance?.mark?.("mark_feature_usage",{detail:{feature:n}}))}function yt(n,e){cr("NgSignals");let t=ep(n),i=t[Hn];return e?.equal&&(i.equal=e.equal),t.set=r=>Ml(i,r),t.update=r=>tp(i,r),t.asReadonly=tw.bind(t),t}function tw(){let n=this[Hn];if(n.readonlyFn===void 0){let e=()=>this();e[Hn]=n,n.readonlyFn=e}return n.readonlyFn}function cv(n,e){let t,i=xl(()=>{t._dirtyCounter();let r=sw(t,n);if(e&&r===void 0)throw new He(-951,!1);return r});return t=i[Hn],t._dirtyCounter=yt(0),t._flatValue=void 0,i}function nw(){return cv(!0,!1)}function iw(){return cv(!0,!0)}function rw(n,e){let t=n[Hn];t._lView=st(),t._queryIndex=e,t._queryList=ov(t._lView,e),t._queryList.onDirty(()=>t._dirtyCounter.update(i=>i+1))}function sw(n,e){let t=n._lView,i=n._queryIndex;if(t===void 0||i===void 0||t[Te]&4)return e?void 0:yn;let r=ov(t,i),s=ew(t,i);return r.reset(s,nM),e?r.first:r._changesDetected||n._flatValue===void 0?n._flatValue=r.toArray():n._flatValue}function jp(n,e){return nw()}function ow(n,e){return iw()}var kt=(jp.required=ow,jp);var qr=class{};var ga=class extends qr{constructor(e){super(),this.componentFactoryResolver=new yu(this),this.instance=null;let t=new na([...e.providers,{provide:qr,useValue:this},{provide:Ks,useValue:this.componentFactoryResolver}],e.parent||Xu(),e.debugName,new Set(["environment"]));this.injector=t,e.runEnvironmentInitializers&&t.resolveInjectorInitializers()}destroy(){this.injector.destroy()}onDestroy(e){this.injector.onDestroy(e)}};function aw(n,e,t=null){return new ga({providers:n,parent:e,debugName:t,runEnvironmentInitializers:!0}).injector}function lv(n){return lw(n)?Array.isArray(n)||!(n instanceof Map)&&Symbol.iterator in n:!1}function cw(n,e){if(Array.isArray(n))for(let t=0;t<n.length;t++)e(n[t]);else{let t=n[Symbol.iterator](),i;for(;!(i=t.next()).done;)e(i.value)}}function lw(n){return n!==null&&(typeof n=="function"||typeof n=="object")}function uv(n,e,t){return n[e]=t}function uw(n,e){return n[e]}function Ii(n,e,t){let i=n[e];return Object.is(i,t)?!1:(n[e]=t,!0)}function dw(n,e,t,i){let r=Ii(n,e,t);return Ii(n,e+1,i)||r}function hw(n){return(n.flags&32)===32}function fw(n,e,t,i,r,s,o,a,c){let l=e.consts,u=La(e,n,4,o||null,a||null);Vg(e,t,u,Hr(l,c)),sd(e,u);let d=u.tView=yd(2,u,i,r,s,e.directiveRegistry,e.pipeRegistry,null,e.schemas,l,null);return e.queries!==null&&(e.queries.template(e,u),d.queries=e.queries.embeddedTView(u)),u}function Cu(n,e,t,i,r,s,o,a,c,l){let u=t+cn,d=e.firstCreatePass?fw(u,e,n,i,r,s,o,a,c):e.data[u];no(d,!1);let h=pw(e,n,d,t);id()&&gd(e,n,h,d),ir(h,n);let f=Hg(h,n,h,d);return n[u]=f,ka(n,f),Wb(f,d,n),Zu(d)&&Lg(e,n,d),c!=null&&kg(n,d,l),d}function bn(n,e,t,i,r,s,o,a){let c=st(),l=Mn(),u=Hr(l.consts,s);return Cu(c,l,n,e,t,i,r,u,o,a),bn}var pw=mw;function mw(n,e,t,i){return rd(!0),e[Gt].createComment("")}var Bs=function(n){return n[n.EarlyRead=0]="EarlyRead",n[n.Write=1]="Write",n[n.MixedReadWrite=2]="MixedReadWrite",n[n.Read=3]="Read",n}(Bs||{}),gw=(()=>{class n{constructor(){this.impl=null}execute(){this.impl?.execute()}static{this.\u0275prov=pt({token:n,providedIn:"root",factory:()=>new n})}}return n})(),$p=class n{constructor(){this.ngZone=ke(rt),this.scheduler=ke(jr),this.errorHandler=ke(si,{optional:!0}),this.sequences=new Set,this.deferredRegistrations=new Set,this.executing=!1}static{this.PHASES=[Bs.EarlyRead,Bs.Write,Bs.MixedReadWrite,Bs.Read]}execute(){this.executing=!0;for(let e of n.PHASES)for(let t of this.sequences)if(!(t.erroredOrDestroyed||!t.hooks[e]))try{t.pipelinedValue=this.ngZone.runOutsideAngular(()=>t.hooks[e](t.pipelinedValue))}catch(i){t.erroredOrDestroyed=!0,this.errorHandler?.handleError(i)}this.executing=!1;for(let e of this.sequences)e.afterRun(),e.once&&(this.sequences.delete(e),e.destroy());for(let e of this.deferredRegistrations)this.sequences.add(e);this.deferredRegistrations.size>0&&this.scheduler.notify(7),this.deferredRegistrations.clear()}register(e){this.executing?this.deferredRegistrations.add(e):(this.sequences.add(e),this.scheduler.notify(6))}unregister(e){this.executing&&this.sequences.has(e)?(e.erroredOrDestroyed=!0,e.pipelinedValue=void 0,e.once=!0):(this.sequences.delete(e),this.deferredRegistrations.delete(e))}static{this.\u0275prov=pt({token:n,providedIn:"root",factory:()=>new n})}};function za(n,e,t,i){let r=st(),s=io();if(Ii(r,s,e)){let o=Mn(),a=Ym();rb(a,r,n,e,t,i)}return za}function vw(n,e,t,i){return Ii(n,io(),t)?e+wa(t)+i:ui}function jo(n,e){return n<<17|e<<2}function sr(n){return n>>17&32767}function yw(n){return(n&2)==2}function _w(n,e){return n&131071|e<<17}function Du(n){return n|2}function Xr(n){return(n&131068)>>2}function Bl(n,e){return n&-131069|e<<2}function xw(n){return(n&1)===1}function Tu(n){return n|1}function Mw(n,e,t,i,r,s){let o=s?e.classBindings:e.styleBindings,a=sr(o),c=Xr(o);n[i]=t;let l=!1,u;if(Array.isArray(t)){let d=t;u=d[1],(u===null||eo(d,u)>0)&&(l=!0)}else u=t;if(r)if(c!==0){let h=sr(n[a+1]);n[i+1]=jo(h,a),h!==0&&(n[h+1]=Bl(n[h+1],i)),n[a+1]=_w(n[a+1],i)}else n[i+1]=jo(a,0),a!==0&&(n[a+1]=Bl(n[a+1],i)),a=i;else n[i+1]=jo(c,0),a===0?a=i:n[c+1]=Bl(n[c+1],i),c=i;l&&(n[i+1]=Du(n[i+1])),qp(n,u,i,!0),qp(n,u,i,!1),bw(e,u,n,i,s),o=jo(a,c),s?e.classBindings=o:e.styleBindings=o}function bw(n,e,t,i,r){let s=r?n.residualClasses:n.residualStyles;s!=null&&typeof e=="string"&&eo(s,e)>=0&&(t[i+1]=Tu(t[i+1]))}function qp(n,e,t,i){let r=n[t+1],s=e===null,o=i?sr(r):Xr(r),a=!1;for(;o!==0&&(a===!1||s);){let c=n[o],l=n[o+1];ww(c,e)&&(a=!0,n[o+1]=i?Tu(l):Du(l)),o=i?sr(l):Xr(l)}a&&(n[t+1]=i?Du(r):Tu(r))}function ww(n,e){return n===null||e==null||(Array.isArray(n)?n[1]:n)===e?!0:Array.isArray(n)&&typeof e=="string"?eo(n,e)>=0:!1}function Wt(n,e,t){let i=st(),r=io();if(Ii(i,r,e)){let s=Mn(),o=Ym();$M(s,o,i,n,e,i[Gt],t,!1)}return Wt}function Xp(n,e,t,i,r){let s=e.inputs,o=r?"class":"style";_d(n,t,s[o],o,i)}function ln(n,e,t){return dv(n,e,t,!1),ln}function Kt(n,e){return dv(n,e,null,!0),Kt}function dv(n,e,t,i){let r=st(),s=Mn(),o=xx(2);if(s.firstUpdatePass&&Sw(s,n,o,i),e!==ui&&Ii(r,o,e)){let a=s.data[or()];Iw(s,a,r,r[Gt],n,r[o+1]=Rw(e,t),i,o)}}function Ew(n,e){return e>=n.expandoStartIndex}function Sw(n,e,t,i){let r=n.data;if(r[t+1]===null){let s=r[or()],o=Ew(n,t);Pw(s,i)&&e===null&&!o&&(e=!1),e=Cw(r,s,e,i),Mw(r,s,e,t,o,i)}}function Cw(n,e,t,i){let r=Ex(n),s=i?e.residualClasses:e.residualStyles;if(r===null)(i?e.classBindings:e.styleBindings)===0&&(t=zl(null,n,e,t,i),t=Qs(t,e.attrs,i),s=null);else{let o=e.directiveStylingLast;if(o===-1||n[o]!==r)if(t=zl(r,n,e,t,i),s===null){let c=Dw(n,e,i);c!==void 0&&Array.isArray(c)&&(c=zl(null,n,e,c[1],i),c=Qs(c,e.attrs,i),Tw(n,e,i,c))}else s=Aw(n,e,i)}return s!==void 0&&(i?e.residualClasses=s:e.residualStyles=s),t}function Dw(n,e,t){let i=t?e.classBindings:e.styleBindings;if(Xr(i)!==0)return n[sr(i)]}function Tw(n,e,t,i){let r=t?e.classBindings:e.styleBindings;n[sr(r)]=i}function Aw(n,e,t){let i,r=e.directiveEnd;for(let s=1+e.directiveStylingLast;s<r;s++){let o=n[s].hostAttrs;i=Qs(i,o,t)}return Qs(i,e.attrs,t)}function zl(n,e,t,i,r){let s=null,o=t.directiveEnd,a=t.directiveStylingLast;for(a===-1?a=t.directiveStart:a++;a<o&&(s=e[a],i=Qs(i,s.hostAttrs,r),s!==n);)a++;return n!==null&&(t.directiveStylingLast=a),i}function Qs(n,e,t){let i=t?1:2,r=-1;if(e!==null)for(let s=0;s<e.length;s++){let o=e[s];typeof o=="number"?r=o:r===i&&(Array.isArray(n)||(n=n===void 0?[]:["",n]),S_(n,o,t?!0:e[++s]))}return n===void 0?null:n}function Iw(n,e,t,i,r,s,o,a){if(!(e.type&3))return;let c=n.data,l=c[a+1],u=xw(l)?Yp(c,e,t,r,Xr(l),o):void 0;if(!va(u)){va(s)||yw(l)&&(s=Yp(c,null,t,r,a,o));let d=Om(or(),t);OM(i,o,d,r,s)}}function Yp(n,e,t,i,r,s){let o=e===null,a;for(;r>0;){let c=n[r],l=Array.isArray(c),u=l?c[1]:c,d=u===null,h=t[r+1];h===ui&&(h=d?yn:void 0);let f=d?Rl(h,i):u===i?h:void 0;if(l&&!va(f)&&(f=Rl(c,i)),va(f)&&(a=f,o))return a;let g=n[r+1];r=o?sr(g):Xr(g)}if(e!==null){let c=s?e.residualClasses:e.residualStyles;c!=null&&(a=Rl(c,i))}return a}function va(n){return n!==void 0}function Rw(n,e){return n==null||n===""||(typeof e=="string"?n=n+e:typeof n=="object"&&(n=an(Pa(n)))),n}function Pw(n,e){return(n.flags&(e?8:16))!==0}var Au=class{destroy(e){}updateValue(e,t){}swap(e,t){let i=Math.min(e,t),r=Math.max(e,t),s=this.detach(r);if(r-i>1){let o=this.detach(i);this.attach(i,s),this.attach(r,o)}else this.attach(i,s)}move(e,t){this.attach(t,this.detach(e))}};function Hl(n,e,t,i,r){return n===t&&Object.is(e,i)?1:Object.is(r(n,e),r(t,i))?-1:0}function Nw(n,e,t){let i,r,s=0,o=n.length-1,a=void 0;if(Array.isArray(e)){let c=e.length-1;for(;s<=o&&s<=c;){let l=n.at(s),u=e[s],d=Hl(s,l,s,u,t);if(d!==0){d<0&&n.updateValue(s,u),s++;continue}let h=n.at(o),f=e[c],g=Hl(o,h,c,f,t);if(g!==0){g<0&&n.updateValue(o,f),o--,c--;continue}let v=t(s,l),m=t(o,h),p=t(s,u);if(Object.is(p,m)){let b=t(c,f);Object.is(b,v)?(n.swap(s,o),n.updateValue(o,f),c--,o--):n.move(o,s),n.updateValue(s,u),s++;continue}if(i??=new ya,r??=Jp(n,s,o,t),Iu(n,i,s,p))n.updateValue(s,u),s++,o++;else if(r.has(p))i.set(v,n.detach(s)),o--;else{let b=n.create(s,e[s]);n.attach(s,b),s++,o++}}for(;s<=c;)Zp(n,i,t,s,e[s]),s++}else if(e!=null){let c=e[Symbol.iterator](),l=c.next();for(;!l.done&&s<=o;){let u=n.at(s),d=l.value,h=Hl(s,u,s,d,t);if(h!==0)h<0&&n.updateValue(s,d),s++,l=c.next();else{i??=new ya,r??=Jp(n,s,o,t);let f=t(s,d);if(Iu(n,i,s,f))n.updateValue(s,d),s++,o++,l=c.next();else if(!r.has(f))n.attach(s,n.create(s,d)),s++,o++,l=c.next();else{let g=t(s,u);i.set(g,n.detach(s)),o--}}}for(;!l.done;)Zp(n,i,t,n.length,l.value),l=c.next()}for(;s<=o;)n.destroy(n.detach(o--));i?.forEach(c=>{n.destroy(c)})}function Iu(n,e,t,i){return e!==void 0&&e.has(i)?(n.attach(t,e.get(i)),e.delete(i),!0):!1}function Zp(n,e,t,i,r){if(Iu(n,e,i,t(i,r)))n.updateValue(i,r);else{let s=n.create(i,r);n.attach(i,s)}}function Jp(n,e,t,i){let r=new Set;for(let s=e;s<=t;s++)r.add(i(s,n.at(s)));return r}var ya=class{constructor(){this.kvMap=new Map,this._vMap=void 0}has(e){return this.kvMap.has(e)}delete(e){if(!this.has(e))return!1;let t=this.kvMap.get(e);return this._vMap!==void 0&&this._vMap.has(t)?(this.kvMap.set(e,this._vMap.get(t)),this._vMap.delete(t)):this.kvMap.delete(e),!0}get(e){return this.kvMap.get(e)}set(e,t){if(this.kvMap.has(e)){let i=this.kvMap.get(e);this._vMap===void 0&&(this._vMap=new Map);let r=this._vMap;for(;r.has(i);)i=r.get(i);r.set(i,t)}else this.kvMap.set(e,t)}forEach(e){for(let[t,i]of this.kvMap)if(e(i,t),this._vMap!==void 0){let r=this._vMap;for(;r.has(i);)i=r.get(i),e(i,t)}}};function Ha(n,e){cr("NgControlFlow");let t=st(),i=io(),r=t[i]!==ui?t[i]:-1,s=r!==-1?_a(t,cn+r):void 0,o=0;if(Ii(t,i,n)){let a=$e(null);try{if(s!==void 0&&Xg(s,o),n!==-1){let c=cn+n,l=_a(t,c),u=Ou(t[Re],c),d=Js(l,u.tView.ssrId),h=Ua(t,u,e,{dehydratedView:d});Va(l,h,o,Ys(u,d))}}finally{$e(a)}}else if(s!==void 0){let a=qg(s,o);a!==void 0&&(a[Bt]=e)}}var Ru=class{constructor(e,t,i){this.lContainer=e,this.$implicit=t,this.$index=i}get $count(){return this.lContainer.length-zt}};function ro(n){return n}var Pu=class{constructor(e,t,i){this.hasEmptyBlock=e,this.trackByFn=t,this.liveCollection=i}};function un(n,e,t,i,r,s,o,a,c,l,u,d,h){cr("NgControlFlow");let f=st(),g=Mn(),v=c!==void 0,m=st(),p=a?o.bind(m[qn][Bt]):o,b=new Pu(v,p);m[cn+n]=b,Cu(f,g,n+1,e,t,i,r,Hr(g.consts,s)),v&&Cu(f,g,n+2,c,l,u,d,Hr(g.consts,h))}var Nu=class extends Au{constructor(e,t,i){super(),this.lContainer=e,this.hostLView=t,this.templateTNode=i,this.operationsCounter=void 0,this.needsIndexUpdate=!1}get length(){return this.lContainer.length-zt}at(e){return this.getLView(e)[Bt].$implicit}attach(e,t){let i=t[js];this.needsIndexUpdate||=e!==this.length,Va(this.lContainer,t,e,Ys(this.templateTNode,i))}detach(e){return this.needsIndexUpdate||=e!==this.length-1,Ow(this.lContainer,e)}create(e,t){let i=Js(this.lContainer,this.templateTNode.tView.ssrId),r=Ua(this.hostLView,this.templateTNode,new Ru(this.lContainer,t,e),{dehydratedView:i});return this.operationsCounter?.recordCreate(),r}destroy(e){Na(e[Re],e),this.operationsCounter?.recordDestroy()}updateValue(e,t){this.getLView(e)[Bt].$implicit=t}reset(){this.needsIndexUpdate=!1,this.operationsCounter?.reset()}updateIndexes(){if(this.needsIndexUpdate)for(let e=0;e<this.length;e++)this.getLView(e)[Bt].$index=e}getLView(e){return Fw(this.lContainer,e)}};function dn(n){let e=$e(null),t=or();try{let i=st(),r=i[Re],s=i[t],o=t+1,a=_a(i,o);if(s.liveCollection===void 0){let l=Ou(r,o);s.liveCollection=new Nu(a,i,l)}else s.liveCollection.reset();let c=s.liveCollection;if(Nw(c,n,s.trackByFn),c.updateIndexes(),s.hasEmptyBlock){let l=io(),u=c.length===0;if(Ii(i,l,u)){let d=t+2,h=_a(i,d);if(u){let f=Ou(r,d),g=Js(h,f.tView.ssrId),v=Ua(i,f,void 0,{dehydratedView:g});Va(h,v,0,Ys(f,g))}else Xg(h,0)}}}finally{$e(e)}}function _a(n,e){return n[e]}function Ow(n,e){return Xs(n,e)}function Fw(n,e){return qg(n,e)}function Ou(n,e){return Ku(n,e)}function Lw(n,e,t,i,r,s){let o=e.consts,a=Hr(o,r),c=La(e,n,2,i,a);return Vg(e,t,c,Hr(o,s)),c.attrs!==null&&vu(c,c.attrs,!1),c.mergedAttrs!==null&&vu(c,c.mergedAttrs,!0),e.queries!==null&&e.queries.elementStart(e,c),c}function H(n,e,t,i){let r=st(),s=Mn(),o=cn+n,a=r[Gt],c=s.firstCreatePass?Lw(o,s,r,e,t,i):s.data[o],l=kw(s,r,c,a,e,n);r[o]=l;let u=Zu(c);return no(c,!0),Ig(a,l,c),!hw(c)&&id()&&gd(s,r,l,c),dx()===0&&ir(l,r),hx(),u&&(Lg(s,r,c),Fg(s,c,r)),i!==null&&kg(r,c),H}function J(){let n=Yn();zm()?yx():(n=n.parent,no(n,!1));let e=n;mx(e)&&gx(),fx();let t=Mn();return t.firstCreatePass&&(sd(t,n),Tm(n)&&t.queries.elementEnd(n)),e.classesWithoutHost!=null&&Nx(e)&&Xp(t,e,st(),e.classesWithoutHost,!0),e.stylesWithoutHost!=null&&Ox(e)&&Xp(t,e,st(),e.stylesWithoutHost,!1),J}function Fe(n,e,t,i){return H(n,e,t,i),J(),Fe}var kw=(n,e,t,i,r,s)=>(rd(!0),wg(i,r,Ax()));function di(){return st()}var Zi=void 0;function Uw(n){let e=n,t=Math.floor(Math.abs(n)),i=n.toString().replace(/^[^.]*\.?/,"").length;return t===1&&i===0?1:5}var Vw=["en",[["a","p"],["AM","PM"],Zi],[["AM","PM"],Zi,Zi],[["S","M","T","W","T","F","S"],["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],["Su","Mo","Tu","We","Th","Fr","Sa"]],Zi,[["J","F","M","A","M","J","J","A","S","O","N","D"],["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],["January","February","March","April","May","June","July","August","September","October","November","December"]],Zi,[["B","A"],["BC","AD"],["Before Christ","Anno Domini"]],0,[6,0],["M/d/yy","MMM d, y","MMMM d, y","EEEE, MMMM d, y"],["h:mm a","h:mm:ss a","h:mm:ss a z","h:mm:ss a zzzz"],["{1}, {0}",Zi,"{1} 'at' {0}",Zi],[".",",",";","%","+","-","E","\xD7","\u2030","\u221E","NaN",":"],["#,##0.###","#,##0%","\xA4#,##0.00","#E0"],"USD","$","US Dollar",{},"ltr",Uw],Gl={};function wd(n){let e=Bw(n),t=Kp(e);if(t)return t;let i=e.split("-")[0];if(t=Kp(i),t)return t;if(i==="en")return Vw;throw new He(701,!1)}function Kp(n){return n in Gl||(Gl[n]=Us.ng&&Us.ng.common&&Us.ng.common.locales&&Us.ng.common.locales[n]),Gl[n]}var ns=function(n){return n[n.LocaleId=0]="LocaleId",n[n.DayPeriodsFormat=1]="DayPeriodsFormat",n[n.DayPeriodsStandalone=2]="DayPeriodsStandalone",n[n.DaysFormat=3]="DaysFormat",n[n.DaysStandalone=4]="DaysStandalone",n[n.MonthsFormat=5]="MonthsFormat",n[n.MonthsStandalone=6]="MonthsStandalone",n[n.Eras=7]="Eras",n[n.FirstDayOfWeek=8]="FirstDayOfWeek",n[n.WeekendRange=9]="WeekendRange",n[n.DateFormat=10]="DateFormat",n[n.TimeFormat=11]="TimeFormat",n[n.DateTimeFormat=12]="DateTimeFormat",n[n.NumberSymbols=13]="NumberSymbols",n[n.NumberFormats=14]="NumberFormats",n[n.CurrencyCode=15]="CurrencyCode",n[n.CurrencySymbol=16]="CurrencySymbol",n[n.CurrencyName=17]="CurrencyName",n[n.Currencies=18]="Currencies",n[n.Directionality=19]="Directionality",n[n.PluralCase=20]="PluralCase",n[n.ExtraData=21]="ExtraData",n}(ns||{});function Bw(n){return n.toLowerCase().replace(/_/g,"-")}var xa="en-US";var zw=xa;function Hw(n){typeof n=="string"&&(zw=n.toLowerCase().replace(/_/g,"-"))}var Gw=(n,e,t)=>{};function Nt(n,e,t,i){let r=st(),s=Mn(),o=Yn();return jw(s,r,r[Gt],o,n,e,i),Nt}function Ww(n,e,t,i){let r=n.cleanup;if(r!=null)for(let s=0;s<r.length-1;s+=2){let o=r[s];if(o===t&&r[s+1]===i){let a=e[ia],c=r[s+2];return a.length>c?a[c]:null}typeof o=="string"&&(s+=2)}return null}function jw(n,e,t,i,r,s,o){let a=Zu(i),l=n.firstCreatePass&&jg(n),u=e[Bt],d=Wg(e),h=!0;if(i.type&3||o){let v=xn(i,e),m=o?o(v):v,p=d.length,b=o?E=>o(Xn(E[i.index])):i.index,M=null;if(!o&&a&&(M=Ww(n,e,r,i.index)),M!==null){let E=M.__ngLastListenerFn__||M;E.__ngNextListenerFn__=s,M.__ngLastListenerFn__=s,h=!1}else{s=em(i,e,u,s),Gw(v,r,s);let E=t.listen(m,r,s);d.push(s,E),l&&l.push(r,b,p,p+1)}}else s=em(i,e,u,s);let f=i.outputs,g;if(h&&f!==null&&(g=f[r])){let v=g.length;if(v)for(let m=0;m<v;m+=2){let p=g[m],b=g[m+1],O=e[p][b].subscribe(s),C=d.length;d.push(s,O),l&&l.push(r,i.index,C,-(C+1))}}}function Qp(n,e,t,i){let r=$e(null);try{return Gn(6,e,t),t(i)!==!1}catch(s){return $g(n,s),!1}finally{Gn(7,e,t),$e(r)}}function em(n,e,t,i){return function r(s){if(s===Function)return i;let o=n.componentOffset>-1?Kr(n.index,e):e;Md(o,5);let a=Qp(e,t,i,s),c=r.__ngNextListenerFn__;for(;c;)a=Qp(e,t,c,s)&&a,c=c.__ngNextListenerFn__;return a}}function Qt(n=1){return Dx(n)}function Ut(n,e,t,i){rw(n,Jb(e,t,i))}function Kn(n=1){ed(Sx()+n)}function $w(n,e,t,i){t>=n.data.length&&(n.data[t]=null,n.blueprint[t]=null),e[t]=i}function te(n,e=""){let t=st(),i=Mn(),r=n+cn,s=i.firstCreatePass?La(i,r,1,e,null):i.data[r],o=qw(i,t,s,e,n);t[r]=o,id()&&gd(i,t,o,s),no(s,!1)}var qw=(n,e,t,i,r)=>(rd(!0),vM(e[Gt],i));function ut(n){return Vt("",n,""),ut}function Vt(n,e,t){let i=st(),r=vw(i,n,e,t);return r!==ui&&cb(i,or(),r),Vt}var Xw=(()=>{class n{constructor(t){this._injector=t,this.cachedInjectors=new Map}getOrCreateStandaloneInjector(t){if(!t.standalone)return null;if(!this.cachedInjectors.has(t)){let i=wm(!1,t.type),r=i.length>0?aw([i],this._injector,`Standalone[${t.type.name}]`):null;this.cachedInjectors.set(t,r)}return this.cachedInjectors.get(t)}ngOnDestroy(){try{for(let t of this.cachedInjectors.values())t!==null&&t.destroy()}finally{this.cachedInjectors.clear()}}static{this.\u0275prov=pt({token:n,providedIn:"environment",factory:()=>new n(ct(Ai))})}}return n})();function Tt(n){cr("NgStandalone"),n.getStandaloneInjector=e=>e.get(Xw).getOrCreateStandaloneInjector(n)}function hv(n,e,t){let i=Gm()+n,r=st();return r[i]===ui?uv(r,i,t?e.call(t):e()):uw(r,i)}function Yw(n,e){let t=n[e];return t===ui?void 0:t}function Zw(n,e,t,i,r,s,o){let a=e+t;return dw(n,a,r,s)?uv(n,a+2,o?i.call(o,r,s):i(r,s)):Yw(n,a+2)}function fv(n,e){let t=Mn(),i,r=n+cn;t.firstCreatePass?(i=Jw(e,t.pipeRegistry),t.data[r]=i,i.onDestroy&&(t.destroyHooks??=[]).push(r,i.onDestroy)):i=t.data[r];let s=i.factory||(i.factory=Ur(i.type,!0)),o,a=vn(Jn);try{let c=ca(!1),l=s();return ca(c),$w(t,st(),r,l),l}finally{vn(a)}}function Jw(n,e){if(e)for(let t=e.length-1;t>=0;t--){let i=e[t];if(n===i.name)return i}}function pv(n,e,t,i){let r=n+cn,s=st(),o=ax(s,r);return Kw(s,r)?Zw(s,Gm(),e,o.transform,t,i,o):o.transform(t,i)}function Kw(n,e){return n[Re].data[e].pure}var mv=new Je("");function Ga(n){return!!n&&typeof n.then=="function"}function gv(n){return!!n&&typeof n.subscribe=="function"}var Qw=new Je(""),vv=(()=>{class n{constructor(){this.initialized=!1,this.done=!1,this.donePromise=new Promise((t,i)=>{this.resolve=t,this.reject=i}),this.appInits=ke(Qw,{optional:!0})??[]}runInitializers(){if(this.initialized)return;let t=[];for(let r of this.appInits){let s=r();if(Ga(s))t.push(s);else if(gv(s)){let o=new Promise((a,c)=>{s.subscribe({complete:a,error:c})});t.push(o)}}let i=()=>{this.done=!0,this.resolve()};Promise.all(t).then(()=>{i()}).catch(r=>{this.reject(r)}),t.length===0&&i(),this.initialized=!0}static{this.\u0275fac=function(i){return new(i||n)}}static{this.\u0275prov=pt({token:n,factory:n.\u0275fac,providedIn:"root"})}}return n})(),eE=new Je("");function tE(){Qf(()=>{throw new He(600,!1)})}function nE(n){return n.isBoundToModule}var iE=10;function rE(n,e,t){try{let i=t();return Ga(i)?i.catch(r=>{throw e.runOutsideAngular(()=>n.handleError(r)),r}):i}catch(i){throw e.runOutsideAngular(()=>n.handleError(i)),i}}var so=(()=>{class n{constructor(){this._bootstrapListeners=[],this._runningTick=!1,this._destroyed=!1,this._destroyListeners=[],this._views=[],this.internalErrorHandler=ke(eM),this.afterRenderManager=ke(gw),this.zonelessEnabled=ke(Ba),this.dirtyFlags=0,this.deferredDirtyFlags=0,this.externalTestViews=new Set,this.beforeRender=new Ci,this.afterTick=new Ci,this.componentTypes=[],this.components=[],this.isStable=ke(Ra).hasPendingTasks.pipe(Il(t=>!t)),this._injector=ke(Ai)}get allViews(){return[...this.externalTestViews.keys(),...this._views]}get destroyed(){return this._destroyed}whenStable(){let t;return new Promise(i=>{t=this.isStable.subscribe({next:r=>{r&&i()}})}).finally(()=>{t.unsubscribe()})}get injector(){return this._injector}bootstrap(t,i){let r=t instanceof pa;if(!this._injector.get(vv).done){let h=!r&&H_(t),f=!1;throw new He(405,f)}let o;r?o=t:o=this._injector.get(Ks).resolveComponentFactory(t),this.componentTypes.push(o.componentType);let a=nE(o)?void 0:this._injector.get(qr),c=i||o.selector,l=o.create(Wr.NULL,[],c,a),u=l.location.nativeElement,d=l.injector.get(mv,null);return d?.registerApplication(u),l.onDestroy(()=>{this.detachView(l.hostView),Jo(this.components,l),d?.unregisterApplication(u)}),this._loadComponent(l),l}tick(){this.zonelessEnabled||(this.dirtyFlags|=1),this._tick()}_tick(){if(this._runningTick)throw new He(101,!1);let t=$e(null);try{this._runningTick=!0,this.synchronize()}catch(i){this.internalErrorHandler(i)}finally{this._runningTick=!1,$e(t),this.afterTick.next()}}synchronize(){let t=null;this._injector.destroyed||(t=this._injector.get($r,null,{optional:!0})),this.dirtyFlags|=this.deferredDirtyFlags,this.deferredDirtyFlags=0;let i=0;for(;this.dirtyFlags!==0&&i++<iE;)this.synchronizeOnce(t)}synchronizeOnce(t){if(this.dirtyFlags|=this.deferredDirtyFlags,this.deferredDirtyFlags=0,this.dirtyFlags&7){let i=!!(this.dirtyFlags&1);this.dirtyFlags&=-8,this.dirtyFlags|=8,this.beforeRender.next(i);for(let{_lView:r,notifyErrorHandler:s}of this._views)sE(r,s,i,this.zonelessEnabled);if(this.dirtyFlags&=-5,this.syncDirtyFlagsWithViews(),this.dirtyFlags&7)return}else t?.begin?.(),t?.end?.();this.dirtyFlags&8&&(this.dirtyFlags&=-9,this.afterRenderManager.execute()),this.syncDirtyFlagsWithViews()}syncDirtyFlagsWithViews(){if(this.allViews.some(({_lView:t})=>Ta(t))){this.dirtyFlags|=2;return}else this.dirtyFlags&=-8}attachView(t){let i=t;this._views.push(i),i.attachToAppRef(this)}detachView(t){let i=t;Jo(this._views,i),i.detachFromAppRef()}_loadComponent(t){this.attachView(t.hostView),this.tick(),this.components.push(t);let i=this._injector.get(eE,[]);[...this._bootstrapListeners,...i].forEach(r=>r(t))}ngOnDestroy(){if(!this._destroyed)try{this._destroyListeners.forEach(t=>t()),this._views.slice().forEach(t=>t.destroy())}finally{this._destroyed=!0,this._views=[],this._bootstrapListeners=[],this._destroyListeners=[]}}onDestroy(t){return this._destroyListeners.push(t),()=>Jo(this._destroyListeners,t)}destroy(){if(this._destroyed)throw new He(406,!1);let t=this._injector;t.destroy&&!t.destroyed&&t.destroy()}get viewCount(){return this._views.length}warnIfDestroyed(){}static{this.\u0275fac=function(i){return new(i||n)}}static{this.\u0275prov=pt({token:n,factory:n.\u0275fac,providedIn:"root"})}}return n})();function Jo(n,e){let t=n.indexOf(e);t>-1&&n.splice(t,1)}function sE(n,e,t,i){if(!t&&!Ta(n))return;Jg(n,e,t&&!i?0:1)}var oE=(()=>{class n{constructor(){this.zone=ke(rt),this.changeDetectionScheduler=ke(jr),this.applicationRef=ke(so)}initialize(){this._onMicrotaskEmptySubscription||(this._onMicrotaskEmptySubscription=this.zone.onMicrotaskEmpty.subscribe({next:()=>{this.changeDetectionScheduler.runningTick||this.zone.run(()=>{this.applicationRef.tick()})}}))}ngOnDestroy(){this._onMicrotaskEmptySubscription?.unsubscribe()}static{this.\u0275fac=function(i){return new(i||n)}}static{this.\u0275prov=pt({token:n,factory:n.\u0275fac,providedIn:"root"})}}return n})(),aE=new Je("",{factory:()=>!1});function yv({ngZoneFactory:n,ignoreChangesOutsideZone:e,scheduleInRootZone:t}){return n??=()=>new rt(Ct(xt({},xv()),{scheduleInRootZone:t})),[{provide:rt,useFactory:n},{provide:Ws,multi:!0,useFactory:()=>{let i=ke(oE,{optional:!0});return()=>i.initialize()}},{provide:Ws,multi:!0,useFactory:()=>{let i=ke(cE);return()=>{i.initialize()}}},e===!0?{provide:tv,useValue:!0}:[],{provide:nv,useValue:t??cg}]}function _v(n){let e=n?.ignoreChangesOutsideZone,t=n?.scheduleInRootZone,i=yv({ngZoneFactory:()=>{let r=xv(n);return r.scheduleInRootZone=t,r.shouldCoalesceEventChangeDetection&&cr("NgZone_CoalesceEvent"),new rt(r)},ignoreChangesOutsideZone:e,scheduleInRootZone:t});return bm([{provide:aE,useValue:!0},{provide:Ba,useValue:!1},i])}function xv(n){return{enableLongStackTrace:!1,shouldCoalesceEventChangeDetection:n?.eventCoalescing??!1,shouldCoalesceRunChangeDetection:n?.runCoalescing??!1}}var cE=(()=>{class n{constructor(){this.subscription=new Xt,this.initialized=!1,this.zone=ke(rt),this.pendingTasks=ke(Ra)}initialize(){if(this.initialized)return;this.initialized=!0;let t=null;!this.zone.isStable&&!this.zone.hasPendingMacrotasks&&!this.zone.hasPendingMicrotasks&&(t=this.pendingTasks.add()),this.zone.runOutsideAngular(()=>{this.subscription.add(this.zone.onStable.subscribe(()=>{rt.assertNotInAngularZone(),queueMicrotask(()=>{t!==null&&!this.zone.hasPendingMacrotasks&&!this.zone.hasPendingMicrotasks&&(this.pendingTasks.remove(t),t=null)})}))}),this.subscription.add(this.zone.onUnstable.subscribe(()=>{rt.assertInAngularZone(),t??=this.pendingTasks.add()}))}ngOnDestroy(){this.subscription.unsubscribe()}static{this.\u0275fac=function(i){return new(i||n)}}static{this.\u0275prov=pt({token:n,factory:n.\u0275fac,providedIn:"root"})}}return n})();var lE=(()=>{class n{constructor(){this.appRef=ke(so),this.taskService=ke(Ra),this.ngZone=ke(rt),this.zonelessEnabled=ke(Ba),this.disableScheduling=ke(tv,{optional:!0})??!1,this.zoneIsDefined=typeof Zone<"u"&&!!Zone.root.run,this.schedulerTickApplyArgs=[{data:{__scheduler_tick__:!0}}],this.subscriptions=new Xt,this.angularZoneId=this.zoneIsDefined?this.ngZone._inner?.get(ua):null,this.scheduleInRootZone=!this.zonelessEnabled&&this.zoneIsDefined&&(ke(nv,{optional:!0})??!1),this.cancelScheduledCallback=null,this.useMicrotaskScheduler=!1,this.runningTick=!1,this.pendingRenderTaskId=null,this.subscriptions.add(this.appRef.afterTick.subscribe(()=>{this.runningTick||this.cleanup()})),this.subscriptions.add(this.ngZone.onUnstable.subscribe(()=>{this.runningTick||this.cleanup()})),this.disableScheduling||=!this.zonelessEnabled&&(this.ngZone instanceof au||!this.zoneIsDefined)}notify(t){if(!this.zonelessEnabled&&t===5)return;switch(t){case 0:{this.appRef.dirtyFlags|=2;break}case 3:case 2:case 4:case 5:case 1:{this.appRef.dirtyFlags|=4;break}case 7:{this.appRef.deferredDirtyFlags|=8;break}case 9:case 8:case 6:case 10:default:this.appRef.dirtyFlags|=8}if(!this.shouldScheduleTick())return;let i=this.useMicrotaskScheduler?Op:ug;this.pendingRenderTaskId=this.taskService.add(),this.scheduleInRootZone?this.cancelScheduledCallback=Zone.root.run(()=>i(()=>this.tick())):this.cancelScheduledCallback=this.ngZone.runOutsideAngular(()=>i(()=>this.tick()))}shouldScheduleTick(){return!(this.disableScheduling||this.pendingRenderTaskId!==null||this.runningTick||this.appRef._runningTick||!this.zonelessEnabled&&this.zoneIsDefined&&Zone.current.get(ua+this.angularZoneId))}tick(){if(this.runningTick||this.appRef.destroyed)return;!this.zonelessEnabled&&this.appRef.dirtyFlags&7&&(this.appRef.dirtyFlags|=1);let t=this.taskService.add();try{this.ngZone.run(()=>{this.runningTick=!0,this.appRef._tick()},void 0,this.schedulerTickApplyArgs)}catch(i){throw this.taskService.remove(t),i}finally{this.cleanup()}this.useMicrotaskScheduler=!0,Op(()=>{this.useMicrotaskScheduler=!1,this.taskService.remove(t)})}ngOnDestroy(){this.subscriptions.unsubscribe(),this.cleanup()}cleanup(){if(this.runningTick=!1,this.cancelScheduledCallback?.(),this.cancelScheduledCallback=null,this.pendingRenderTaskId!==null){let t=this.pendingRenderTaskId;this.pendingRenderTaskId=null,this.taskService.remove(t)}}static{this.\u0275fac=function(i){return new(i||n)}}static{this.\u0275prov=pt({token:n,factory:n.\u0275fac,providedIn:"root"})}}return n})();function uE(){return typeof $localize<"u"&&$localize.locale||xa}var Wa=new Je("",{providedIn:"root",factory:()=>ke(Wa,je.Optional|je.SkipSelf)||uE()});var Fu=new Je("");function $o(n){return!n.moduleRef}function dE(n){let e=$o(n)?n.r3Injector:n.moduleRef.injector,t=e.get(rt);return t.run(()=>{$o(n)?n.r3Injector.resolveInjectorInitializers():n.moduleRef.resolveInjectorInitializers();let i=e.get(si,null),r;if(t.runOutsideAngular(()=>{r=t.onError.subscribe({next:s=>{i.handleError(s)}})}),$o(n)){let s=()=>e.destroy(),o=n.platformInjector.get(Fu);o.add(s),e.onDestroy(()=>{r.unsubscribe(),o.delete(s)})}else{let s=()=>n.moduleRef.destroy(),o=n.platformInjector.get(Fu);o.add(s),n.moduleRef.onDestroy(()=>{Jo(n.allPlatformModules,n.moduleRef),r.unsubscribe(),o.delete(s)})}return rE(i,t,()=>{let s=e.get(vv);return s.runInitializers(),s.donePromise.then(()=>{let o=e.get(Wa,xa);if(Hw(o||xa),$o(n)){let a=e.get(so);return n.rootComponent!==void 0&&a.bootstrap(n.rootComponent),a}else return hE(n.moduleRef,n.allPlatformModules),n.moduleRef})})})}function hE(n,e){let t=n.injector.get(so);if(n._bootstrapComponents.length>0)n._bootstrapComponents.forEach(i=>t.bootstrap(i));else if(n.instance.ngDoBootstrap)n.instance.ngDoBootstrap(t);else throw new He(-403,!1);e.push(n)}var Ko=null,Mv=new Je("");function fE(n=[],e){return Wr.create({name:e,providers:[{provide:Ca,useValue:"platform"},{provide:Fu,useValue:new Set([()=>Ko=null])},...n]})}function pE(n=[]){if(Ko)return Ko;let e=fE(n);return e.get(Mv,!1)||(Ko=e),tE(),mE(e),e}function mE(n){n.get(ud,null)?.forEach(t=>t())}var Lu=class{constructor(){}supports(e){return lv(e)}create(e){return new ku(e)}},gE=(n,e)=>e,ku=class{constructor(e){this.length=0,this._linkedRecords=null,this._unlinkedRecords=null,this._previousItHead=null,this._itHead=null,this._itTail=null,this._additionsHead=null,this._additionsTail=null,this._movesHead=null,this._movesTail=null,this._removalsHead=null,this._removalsTail=null,this._identityChangesHead=null,this._identityChangesTail=null,this._trackByFn=e||gE}forEachItem(e){let t;for(t=this._itHead;t!==null;t=t._next)e(t)}forEachOperation(e){let t=this._itHead,i=this._removalsHead,r=0,s=null;for(;t||i;){let o=!i||t&&t.currentIndex<tm(i,r,s)?t:i,a=tm(o,r,s),c=o.currentIndex;if(o===i)r--,i=i._nextRemoved;else if(t=t._next,o.previousIndex==null)r++;else{s||(s=[]);let l=a-r,u=c-r;if(l!=u){for(let h=0;h<l;h++){let f=h<s.length?s[h]:s[h]=0,g=f+h;u<=g&&g<l&&(s[h]=f+1)}let d=o.previousIndex;s[d]=u-l}}a!==c&&e(o,a,c)}}forEachPreviousItem(e){let t;for(t=this._previousItHead;t!==null;t=t._nextPrevious)e(t)}forEachAddedItem(e){let t;for(t=this._additionsHead;t!==null;t=t._nextAdded)e(t)}forEachMovedItem(e){let t;for(t=this._movesHead;t!==null;t=t._nextMoved)e(t)}forEachRemovedItem(e){let t;for(t=this._removalsHead;t!==null;t=t._nextRemoved)e(t)}forEachIdentityChange(e){let t;for(t=this._identityChangesHead;t!==null;t=t._nextIdentityChange)e(t)}diff(e){if(e==null&&(e=[]),!lv(e))throw new He(900,!1);return this.check(e)?this:null}onDestroy(){}check(e){this._reset();let t=this._itHead,i=!1,r,s,o;if(Array.isArray(e)){this.length=e.length;for(let a=0;a<this.length;a++)s=e[a],o=this._trackByFn(a,s),t===null||!Object.is(t.trackById,o)?(t=this._mismatch(t,s,o,a),i=!0):(i&&(t=this._verifyReinsertion(t,s,o,a)),Object.is(t.item,s)||this._addIdentityChange(t,s)),t=t._next}else r=0,cw(e,a=>{o=this._trackByFn(r,a),t===null||!Object.is(t.trackById,o)?(t=this._mismatch(t,a,o,r),i=!0):(i&&(t=this._verifyReinsertion(t,a,o,r)),Object.is(t.item,a)||this._addIdentityChange(t,a)),t=t._next,r++}),this.length=r;return this._truncate(t),this.collection=e,this.isDirty}get isDirty(){return this._additionsHead!==null||this._movesHead!==null||this._removalsHead!==null||this._identityChangesHead!==null}_reset(){if(this.isDirty){let e;for(e=this._previousItHead=this._itHead;e!==null;e=e._next)e._nextPrevious=e._next;for(e=this._additionsHead;e!==null;e=e._nextAdded)e.previousIndex=e.currentIndex;for(this._additionsHead=this._additionsTail=null,e=this._movesHead;e!==null;e=e._nextMoved)e.previousIndex=e.currentIndex;this._movesHead=this._movesTail=null,this._removalsHead=this._removalsTail=null,this._identityChangesHead=this._identityChangesTail=null}}_mismatch(e,t,i,r){let s;return e===null?s=this._itTail:(s=e._prev,this._remove(e)),e=this._unlinkedRecords===null?null:this._unlinkedRecords.get(i,null),e!==null?(Object.is(e.item,t)||this._addIdentityChange(e,t),this._reinsertAfter(e,s,r)):(e=this._linkedRecords===null?null:this._linkedRecords.get(i,r),e!==null?(Object.is(e.item,t)||this._addIdentityChange(e,t),this._moveAfter(e,s,r)):e=this._addAfter(new Uu(t,i),s,r)),e}_verifyReinsertion(e,t,i,r){let s=this._unlinkedRecords===null?null:this._unlinkedRecords.get(i,null);return s!==null?e=this._reinsertAfter(s,e._prev,r):e.currentIndex!=r&&(e.currentIndex=r,this._addToMoves(e,r)),e}_truncate(e){for(;e!==null;){let t=e._next;this._addToRemovals(this._unlink(e)),e=t}this._unlinkedRecords!==null&&this._unlinkedRecords.clear(),this._additionsTail!==null&&(this._additionsTail._nextAdded=null),this._movesTail!==null&&(this._movesTail._nextMoved=null),this._itTail!==null&&(this._itTail._next=null),this._removalsTail!==null&&(this._removalsTail._nextRemoved=null),this._identityChangesTail!==null&&(this._identityChangesTail._nextIdentityChange=null)}_reinsertAfter(e,t,i){this._unlinkedRecords!==null&&this._unlinkedRecords.remove(e);let r=e._prevRemoved,s=e._nextRemoved;return r===null?this._removalsHead=s:r._nextRemoved=s,s===null?this._removalsTail=r:s._prevRemoved=r,this._insertAfter(e,t,i),this._addToMoves(e,i),e}_moveAfter(e,t,i){return this._unlink(e),this._insertAfter(e,t,i),this._addToMoves(e,i),e}_addAfter(e,t,i){return this._insertAfter(e,t,i),this._additionsTail===null?this._additionsTail=this._additionsHead=e:this._additionsTail=this._additionsTail._nextAdded=e,e}_insertAfter(e,t,i){let r=t===null?this._itHead:t._next;return e._next=r,e._prev=t,r===null?this._itTail=e:r._prev=e,t===null?this._itHead=e:t._next=e,this._linkedRecords===null&&(this._linkedRecords=new Ma),this._linkedRecords.put(e),e.currentIndex=i,e}_remove(e){return this._addToRemovals(this._unlink(e))}_unlink(e){this._linkedRecords!==null&&this._linkedRecords.remove(e);let t=e._prev,i=e._next;return t===null?this._itHead=i:t._next=i,i===null?this._itTail=t:i._prev=t,e}_addToMoves(e,t){return e.previousIndex===t||(this._movesTail===null?this._movesTail=this._movesHead=e:this._movesTail=this._movesTail._nextMoved=e),e}_addToRemovals(e){return this._unlinkedRecords===null&&(this._unlinkedRecords=new Ma),this._unlinkedRecords.put(e),e.currentIndex=null,e._nextRemoved=null,this._removalsTail===null?(this._removalsTail=this._removalsHead=e,e._prevRemoved=null):(e._prevRemoved=this._removalsTail,this._removalsTail=this._removalsTail._nextRemoved=e),e}_addIdentityChange(e,t){return e.item=t,this._identityChangesTail===null?this._identityChangesTail=this._identityChangesHead=e:this._identityChangesTail=this._identityChangesTail._nextIdentityChange=e,e}},Uu=class{constructor(e,t){this.item=e,this.trackById=t,this.currentIndex=null,this.previousIndex=null,this._nextPrevious=null,this._prev=null,this._next=null,this._prevDup=null,this._nextDup=null,this._prevRemoved=null,this._nextRemoved=null,this._nextAdded=null,this._nextMoved=null,this._nextIdentityChange=null}},Vu=class{constructor(){this._head=null,this._tail=null}add(e){this._head===null?(this._head=this._tail=e,e._nextDup=null,e._prevDup=null):(this._tail._nextDup=e,e._prevDup=this._tail,e._nextDup=null,this._tail=e)}get(e,t){let i;for(i=this._head;i!==null;i=i._nextDup)if((t===null||t<=i.currentIndex)&&Object.is(i.trackById,e))return i;return null}remove(e){let t=e._prevDup,i=e._nextDup;return t===null?this._head=i:t._nextDup=i,i===null?this._tail=t:i._prevDup=t,this._head===null}},Ma=class{constructor(){this.map=new Map}put(e){let t=e.trackById,i=this.map.get(t);i||(i=new Vu,this.map.set(t,i)),i.add(e)}get(e,t){let i=e,r=this.map.get(i);return r?r.get(e,t):null}remove(e){let t=e.trackById;return this.map.get(t).remove(e)&&this.map.delete(t),e}get isEmpty(){return this.map.size===0}clear(){this.map.clear()}};function tm(n,e,t){let i=n.previousIndex;if(i===null)return i;let r=0;return t&&i<t.length&&(r=t[i]),i+e+r}function nm(){return new Ed([new Lu])}var Ed=(()=>{class n{static{this.\u0275prov=pt({token:n,providedIn:"root",factory:nm})}constructor(t){this.factories=t}static create(t,i){if(i!=null){let r=i.factories.slice();t=t.concat(r)}return new n(t)}static extend(t){return{provide:n,useFactory:i=>n.create(t,i||nm()),deps:[[n,new M_,new dm]]}}find(t){let i=this.factories.find(r=>r.supports(t));if(i!=null)return i;throw new He(901,!1)}}return n})();function bv(n){let{rootComponent:e,appProviders:t,platformProviders:i,platformRef:r}=n;try{let s=r?.injector??pE(i);if(s.get(Mv,!1)===!0&&!n.platformRef)throw new He(401,!1);let o=[yv({}),{provide:jr,useExisting:lE},...t||[]],a=new ga({providers:o,parent:s,debugName:"",runEnvironmentInitializers:!1});return dE({r3Injector:a.injector,platformInjector:s,rootComponent:e})}catch(s){return Promise.reject(s)}}function Sd(n,e){cr("NgSignals");let t=xl(n);return e?.equal&&(t[Hn].equal=e.equal),t}var Av=null;function Id(){return Av}function Iv(n){Av??=n}var ja=class{};var Ri=new Je("");var Rv=function(n){return n[n.Decimal=0]="Decimal",n[n.Percent=1]="Percent",n[n.Currency=2]="Currency",n[n.Scientific=3]="Scientific",n}(Rv||{});var hi={Decimal:0,Group:1,List:2,PercentSign:3,PlusSign:4,MinusSign:5,Exponential:6,SuperscriptingExponent:7,PerMille:8,Infinity:9,NaN:10,TimeSeparator:11,CurrencyDecimal:12,CurrencyGroup:13};function oo(n,e){let t=wd(n),i=t[ns.NumberSymbols][e];if(typeof i>"u"){if(e===hi.CurrencyDecimal)return t[ns.NumberSymbols][hi.Decimal];if(e===hi.CurrencyGroup)return t[ns.NumberSymbols][hi.Group]}return i}function _E(n,e){return wd(n)[ns.NumberFormats][e]}var xE=/^(\d+)?\.((\d+)(-(\d+))?)?$/,wv=22,$a=".",ao="0",ME=";",bE=",",Cd="#";function wE(n,e,t,i,r,s,o=!1){let a="",c=!1;if(!isFinite(n))a=oo(t,hi.Infinity);else{let l=DE(n);o&&(l=CE(l));let u=e.minInt,d=e.minFrac,h=e.maxFrac;if(s){let b=s.match(xE);if(b===null)throw new Error(`${s} is not a valid digit info`);let M=b[1],E=b[3],O=b[5];M!=null&&(u=Dd(M)),E!=null&&(d=Dd(E)),O!=null?h=Dd(O):E!=null&&d>h&&(h=d)}TE(l,d,h);let f=l.digits,g=l.integerLen,v=l.exponent,m=[];for(c=f.every(b=>!b);g<u;g++)f.unshift(0);for(;g<0;g++)f.unshift(0);g>0?m=f.splice(g,f.length):(m=f,f=[0]);let p=[];for(f.length>=e.lgSize&&p.unshift(f.splice(-e.lgSize,f.length).join(""));f.length>e.gSize;)p.unshift(f.splice(-e.gSize,f.length).join(""));f.length&&p.unshift(f.join("")),a=p.join(oo(t,i)),m.length&&(a+=oo(t,r)+m.join("")),v&&(a+=oo(t,hi.Exponential)+"+"+v)}return n<0&&!c?a=e.negPre+a+e.negSuf:a=e.posPre+a+e.posSuf,a}function EE(n,e,t){let i=_E(e,Rv.Decimal),r=SE(i,oo(e,hi.MinusSign));return wE(n,r,e,hi.Group,hi.Decimal,t)}function SE(n,e="-"){let t={minInt:1,minFrac:0,maxFrac:0,posPre:"",posSuf:"",negPre:"",negSuf:"",gSize:0,lgSize:0},i=n.split(ME),r=i[0],s=i[1],o=r.indexOf($a)!==-1?r.split($a):[r.substring(0,r.lastIndexOf(ao)+1),r.substring(r.lastIndexOf(ao)+1)],a=o[0],c=o[1]||"";t.posPre=a.substring(0,a.indexOf(Cd));for(let u=0;u<c.length;u++){let d=c.charAt(u);d===ao?t.minFrac=t.maxFrac=u+1:d===Cd?t.maxFrac=u+1:t.posSuf+=d}let l=a.split(bE);if(t.gSize=l[1]?l[1].length:0,t.lgSize=l[2]||l[1]?(l[2]||l[1]).length:0,s){let u=r.length-t.posPre.length-t.posSuf.length,d=s.indexOf(Cd);t.negPre=s.substring(0,d).replace(/'/g,""),t.negSuf=s.slice(d+u).replace(/'/g,"")}else t.negPre=e+t.posPre,t.negSuf=t.posSuf;return t}function CE(n){if(n.digits[0]===0)return n;let e=n.digits.length-n.integerLen;return n.exponent?n.exponent+=2:(e===0?n.digits.push(0,0):e===1&&n.digits.push(0),n.integerLen+=2),n}function DE(n){let e=Math.abs(n)+"",t=0,i,r,s,o,a;for((r=e.indexOf($a))>-1&&(e=e.replace($a,"")),(s=e.search(/e/i))>0?(r<0&&(r=s),r+=+e.slice(s+1),e=e.substring(0,s)):r<0&&(r=e.length),s=0;e.charAt(s)===ao;s++);if(s===(a=e.length))i=[0],r=1;else{for(a--;e.charAt(a)===ao;)a--;for(r-=s,i=[],o=0;s<=a;s++,o++)i[o]=Number(e.charAt(s))}return r>wv&&(i=i.splice(0,wv-1),t=r-1,r=1),{digits:i,exponent:t,integerLen:r}}function TE(n,e,t){if(e>t)throw new Error(`The minimum number of digits after fraction (${e}) is higher than the maximum (${t}).`);let i=n.digits,r=i.length-n.integerLen,s=Math.min(Math.max(e,r),t),o=s+n.integerLen,a=i[o];if(o>0){i.splice(Math.max(n.integerLen,o));for(let d=o;d<i.length;d++)i[d]=0}else{r=Math.max(0,r),n.integerLen=1,i.length=Math.max(1,o=s+1),i[0]=0;for(let d=1;d<o;d++)i[d]=0}if(a>=5)if(o-1<0){for(let d=0;d>o;d--)i.unshift(0),n.integerLen++;i.unshift(1),n.integerLen++}else i[o-1]++;for(;r<Math.max(0,s);r++)i.push(0);let c=s!==0,l=e+n.integerLen,u=i.reduceRight(function(d,h,f,g){return h=h+d,g[f]=h<10?h:h-10,c&&(g[f]===0&&f>=l?g.pop():c=!1),h>=10?1:0},0);u&&(i.unshift(u),n.integerLen++)}function Dd(n){let e=parseInt(n);if(isNaN(e))throw new Error("Invalid integer literal when parsing "+n);return e}function Pv(n,e){e=encodeURIComponent(e);for(let t of n.split(";")){let i=t.indexOf("="),[r,s]=i==-1?[t,""]:[t.slice(0,i),t.slice(i+1)];if(r.trim()===e)return decodeURIComponent(s)}return null}var Td=class{constructor(e,t,i,r){this.$implicit=e,this.ngForOf=t,this.index=i,this.count=r}get first(){return this.index===0}get last(){return this.index===this.count-1}get even(){return this.index%2===0}get odd(){return!this.even}},Nv=(()=>{class n{set ngForOf(t){this._ngForOf=t,this._ngForOfDirty=!0}set ngForTrackBy(t){this._trackByFn=t}get ngForTrackBy(){return this._trackByFn}constructor(t,i,r){this._viewContainer=t,this._template=i,this._differs=r,this._ngForOf=null,this._ngForOfDirty=!0,this._differ=null}set ngForTemplate(t){t&&(this._template=t)}ngDoCheck(){if(this._ngForOfDirty){this._ngForOfDirty=!1;let t=this._ngForOf;if(!this._differ&&t)if(0)try{}catch{}else this._differ=this._differs.find(t).create(this.ngForTrackBy)}if(this._differ){let t=this._differ.diff(this._ngForOf);t&&this._applyChanges(t)}}_applyChanges(t){let i=this._viewContainer;t.forEachOperation((r,s,o)=>{if(r.previousIndex==null)i.createEmbeddedView(this._template,new Td(r.item,this._ngForOf,-1,-1),o===null?void 0:o);else if(o==null)i.remove(s===null?void 0:s);else if(s!==null){let a=i.get(s);i.move(a,o),Ev(a,r)}});for(let r=0,s=i.length;r<s;r++){let a=i.get(r).context;a.index=r,a.count=s,a.ngForOf=this._ngForOf}t.forEachIdentityChange(r=>{let s=i.get(r.currentIndex);Ev(s,r)})}static ngTemplateContextGuard(t,i){return!0}static{this.\u0275fac=function(i){return new(i||n)(Jn(ts),Jn(rr),Jn(Ed))}}static{this.\u0275dir=Sa({type:n,selectors:[["","ngFor","","ngForOf",""]],inputs:{ngForOf:"ngForOf",ngForTrackBy:"ngForTrackBy",ngForTemplate:"ngForTemplate"},standalone:!0})}}return n})();function Ev(n,e){n.context.$implicit=e.item}var Ov=(()=>{class n{constructor(t,i){this._viewContainer=t,this._context=new Ad,this._thenTemplateRef=null,this._elseTemplateRef=null,this._thenViewRef=null,this._elseViewRef=null,this._thenTemplateRef=i}set ngIf(t){this._context.$implicit=this._context.ngIf=t,this._updateView()}set ngIfThen(t){Sv("ngIfThen",t),this._thenTemplateRef=t,this._thenViewRef=null,this._updateView()}set ngIfElse(t){Sv("ngIfElse",t),this._elseTemplateRef=t,this._elseViewRef=null,this._updateView()}_updateView(){this._context.$implicit?this._thenViewRef||(this._viewContainer.clear(),this._elseViewRef=null,this._thenTemplateRef&&(this._thenViewRef=this._viewContainer.createEmbeddedView(this._thenTemplateRef,this._context))):this._elseViewRef||(this._viewContainer.clear(),this._thenViewRef=null,this._elseTemplateRef&&(this._elseViewRef=this._viewContainer.createEmbeddedView(this._elseTemplateRef,this._context)))}static ngTemplateContextGuard(t,i){return!0}static{this.\u0275fac=function(i){return new(i||n)(Jn(ts),Jn(rr))}}static{this.\u0275dir=Sa({type:n,selectors:[["","ngIf",""]],inputs:{ngIf:"ngIf",ngIfThen:"ngIfThen",ngIfElse:"ngIfElse"},standalone:!0})}}return n})(),Ad=class{constructor(){this.$implicit=null,this.ngIf=null}};function Sv(n,e){if(!!!(!e||e.createEmbeddedView))throw new Error(`${n} must be a TemplateRef, but received '${an(e)}'.`)}function AE(n,e){return new He(2100,!1)}var Fv=(()=>{class n{constructor(t){this._locale=t}transform(t,i,r){if(!IE(t))return null;r||=this._locale;try{let s=RE(t);return EE(s,r,i)}catch(s){throw AE(n,s.message)}}static{this.\u0275fac=function(i){return new(i||n)(Jn(Wa,16))}}static{this.\u0275pipe=vm({name:"number",type:n,pure:!0,standalone:!0})}}return n})();function IE(n){return!(n==null||n===""||n!==n)}function RE(n){if(typeof n=="string"&&!isNaN(Number(n)-parseFloat(n)))return Number(n);if(typeof n!="number")throw new Error(`${n} is not a number`);return n}var co=(()=>{class n{static{this.\u0275fac=function(i){return new(i||n)}}static{this.\u0275mod=Zr({type:n})}static{this.\u0275inj=Yr({})}}return n})(),Lv="browser",PE="server";function Rd(n){return n===PE}var qa=class{};var Od=class extends ja{constructor(){super(...arguments),this.supportsDOMEvents=!0}},Fd=class n extends Od{static makeCurrent(){Iv(new n)}onAndCancel(e,t,i){return e.addEventListener(t,i),()=>{e.removeEventListener(t,i)}}dispatchEvent(e,t){e.dispatchEvent(t)}remove(e){e.remove()}createElement(e,t){return t=t||this.getDefaultDocument(),t.createElement(e)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(e){return e.nodeType===Node.ELEMENT_NODE}isShadowRoot(e){return e instanceof DocumentFragment}getGlobalEventTarget(e,t){return t==="window"?window:t==="document"?e:t==="body"?e.body:null}getBaseHref(e){let t=FE();return t==null?null:LE(t)}resetBaseElement(){lo=null}getUserAgent(){return window.navigator.userAgent}getCookie(e){return Pv(document.cookie,e)}},lo=null;function FE(){return lo=lo||document.querySelector("base"),lo?lo.getAttribute("href"):null}function LE(n){return new URL(n,document.baseURI).pathname}var kE=(()=>{class n{build(){return new XMLHttpRequest}static{this.\u0275fac=function(i){return new(i||n)}}static{this.\u0275prov=pt({token:n,factory:n.\u0275fac})}}return n})(),Ld=new Je(""),Bv=(()=>{class n{constructor(t,i){this._zone=i,this._eventNameToPlugin=new Map,t.forEach(r=>{r.manager=this}),this._plugins=t.slice().reverse()}addEventListener(t,i,r){return this._findPluginFor(i).addEventListener(t,i,r)}getZone(){return this._zone}_findPluginFor(t){let i=this._eventNameToPlugin.get(t);if(i)return i;if(i=this._plugins.find(s=>s.supports(t)),!i)throw new He(5101,!1);return this._eventNameToPlugin.set(t,i),i}static{this.\u0275fac=function(i){return new(i||n)(ct(Ld),ct(rt))}}static{this.\u0275prov=pt({token:n,factory:n.\u0275fac})}}return n})(),Xa=class{constructor(e){this._doc=e}},Pd="ng-app-id",zv=(()=>{class n{constructor(t,i,r,s={}){this.doc=t,this.appId=i,this.nonce=r,this.platformId=s,this.styleRef=new Map,this.hostNodes=new Set,this.styleNodesInDOM=this.collectServerRenderedStyles(),this.platformIsServer=Rd(s),this.resetHostNodes()}addStyles(t){for(let i of t)this.changeUsageCount(i,1)===1&&this.onStyleAdded(i)}removeStyles(t){for(let i of t)this.changeUsageCount(i,-1)<=0&&this.onStyleRemoved(i)}ngOnDestroy(){let t=this.styleNodesInDOM;t&&(t.forEach(i=>i.remove()),t.clear());for(let i of this.getAllStyles())this.onStyleRemoved(i);this.resetHostNodes()}addHost(t){this.hostNodes.add(t);for(let i of this.getAllStyles())this.addStyleToHost(t,i)}removeHost(t){this.hostNodes.delete(t)}getAllStyles(){return this.styleRef.keys()}onStyleAdded(t){for(let i of this.hostNodes)this.addStyleToHost(i,t)}onStyleRemoved(t){let i=this.styleRef;i.get(t)?.elements?.forEach(r=>r.remove()),i.delete(t)}collectServerRenderedStyles(){let t=this.doc.head?.querySelectorAll(`style[${Pd}="${this.appId}"]`);if(t?.length){let i=new Map;return t.forEach(r=>{r.textContent!=null&&i.set(r.textContent,r)}),i}return null}changeUsageCount(t,i){let r=this.styleRef;if(r.has(t)){let s=r.get(t);return s.usage+=i,s.usage}return r.set(t,{usage:i,elements:[]}),i}getStyleElement(t,i){let r=this.styleNodesInDOM,s=r?.get(i);if(s?.parentNode===t)return r.delete(i),s.removeAttribute(Pd),s;{let o=this.doc.createElement("style");return this.nonce&&o.setAttribute("nonce",this.nonce),o.textContent=i,this.platformIsServer&&o.setAttribute(Pd,this.appId),t.appendChild(o),o}}addStyleToHost(t,i){let r=this.getStyleElement(t,i),s=this.styleRef,o=s.get(i)?.elements;o?o.push(r):s.set(i,{elements:[r],usage:1})}resetHostNodes(){let t=this.hostNodes;t.clear(),t.add(this.doc.head)}static{this.\u0275fac=function(i){return new(i||n)(ct(Ri),ct(ld),ct(dd,8),ct(es))}}static{this.\u0275prov=pt({token:n,factory:n.\u0275fac})}}return n})(),Nd={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/",math:"http://www.w3.org/1998/Math/MathML"},Ud=/%COMP%/g,Hv="%COMP%",UE=`_nghost-${Hv}`,VE=`_ngcontent-${Hv}`,BE=!0,zE=new Je("",{providedIn:"root",factory:()=>BE});function HE(n){return VE.replace(Ud,n)}function GE(n){return UE.replace(Ud,n)}function Gv(n,e){return e.map(t=>t.replace(Ud,n))}var kv=(()=>{class n{constructor(t,i,r,s,o,a,c,l=null){this.eventManager=t,this.sharedStylesHost=i,this.appId=r,this.removeStylesOnCompDestroy=s,this.doc=o,this.platformId=a,this.ngZone=c,this.nonce=l,this.rendererByCompId=new Map,this.platformIsServer=Rd(a),this.defaultRenderer=new uo(t,o,c,this.platformIsServer)}createRenderer(t,i){if(!t||!i)return this.defaultRenderer;this.platformIsServer&&i.encapsulation===jn.ShadowDom&&(i=Ct(xt({},i),{encapsulation:jn.Emulated}));let r=this.getOrCreateRenderer(t,i);return r instanceof Ya?r.applyToHost(t):r instanceof ho&&r.applyStyles(),r}getOrCreateRenderer(t,i){let r=this.rendererByCompId,s=r.get(i.id);if(!s){let o=this.doc,a=this.ngZone,c=this.eventManager,l=this.sharedStylesHost,u=this.removeStylesOnCompDestroy,d=this.platformIsServer;switch(i.encapsulation){case jn.Emulated:s=new Ya(c,l,i,this.appId,u,o,a,d);break;case jn.ShadowDom:return new kd(c,l,t,i,o,a,this.nonce,d);default:s=new ho(c,l,i,u,o,a,d);break}r.set(i.id,s)}return s}ngOnDestroy(){this.rendererByCompId.clear()}static{this.\u0275fac=function(i){return new(i||n)(ct(Bv),ct(zv),ct(ld),ct(zE),ct(Ri),ct(es),ct(rt),ct(dd))}}static{this.\u0275prov=pt({token:n,factory:n.\u0275fac})}}return n})(),uo=class{constructor(e,t,i,r){this.eventManager=e,this.doc=t,this.ngZone=i,this.platformIsServer=r,this.data=Object.create(null),this.throwOnSyntheticProps=!0,this.destroyNode=null}destroy(){}createElement(e,t){return t?this.doc.createElementNS(Nd[t]||t,e):this.doc.createElement(e)}createComment(e){return this.doc.createComment(e)}createText(e){return this.doc.createTextNode(e)}appendChild(e,t){(Uv(e)?e.content:e).appendChild(t)}insertBefore(e,t,i){e&&(Uv(e)?e.content:e).insertBefore(t,i)}removeChild(e,t){t.remove()}selectRootElement(e,t){let i=typeof e=="string"?this.doc.querySelector(e):e;if(!i)throw new He(-5104,!1);return t||(i.textContent=""),i}parentNode(e){return e.parentNode}nextSibling(e){return e.nextSibling}setAttribute(e,t,i,r){if(r){t=r+":"+t;let s=Nd[r];s?e.setAttributeNS(s,t,i):e.setAttribute(t,i)}else e.setAttribute(t,i)}removeAttribute(e,t,i){if(i){let r=Nd[i];r?e.removeAttributeNS(r,t):e.removeAttribute(`${i}:${t}`)}else e.removeAttribute(t)}addClass(e,t){e.classList.add(t)}removeClass(e,t){e.classList.remove(t)}setStyle(e,t,i,r){r&(oi.DashCase|oi.Important)?e.style.setProperty(t,i,r&oi.Important?"important":""):e.style[t]=i}removeStyle(e,t,i){i&oi.DashCase?e.style.removeProperty(t):e.style[t]=""}setProperty(e,t,i){e!=null&&(e[t]=i)}setValue(e,t){e.nodeValue=t}listen(e,t,i){if(typeof e=="string"&&(e=Id().getGlobalEventTarget(this.doc,e),!e))throw new Error(`Unsupported event target ${e} for event ${t}`);return this.eventManager.addEventListener(e,t,this.decoratePreventDefault(i))}decoratePreventDefault(e){return t=>{if(t==="__ngUnwrap__")return e;(this.platformIsServer?this.ngZone.runGuarded(()=>e(t)):e(t))===!1&&t.preventDefault()}}};function Uv(n){return n.tagName==="TEMPLATE"&&n.content!==void 0}var kd=class extends uo{constructor(e,t,i,r,s,o,a,c){super(e,s,o,c),this.sharedStylesHost=t,this.hostEl=i,this.shadowRoot=i.attachShadow({mode:"open"}),this.sharedStylesHost.addHost(this.shadowRoot);let l=Gv(r.id,r.styles);for(let u of l){let d=document.createElement("style");a&&d.setAttribute("nonce",a),d.textContent=u,this.shadowRoot.appendChild(d)}}nodeOrShadowRoot(e){return e===this.hostEl?this.shadowRoot:e}appendChild(e,t){return super.appendChild(this.nodeOrShadowRoot(e),t)}insertBefore(e,t,i){return super.insertBefore(this.nodeOrShadowRoot(e),t,i)}removeChild(e,t){return super.removeChild(null,t)}parentNode(e){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(e)))}destroy(){this.sharedStylesHost.removeHost(this.shadowRoot)}},ho=class extends uo{constructor(e,t,i,r,s,o,a,c){super(e,s,o,a),this.sharedStylesHost=t,this.removeStylesOnCompDestroy=r,this.styles=c?Gv(c,i.styles):i.styles}applyStyles(){this.sharedStylesHost.addStyles(this.styles)}destroy(){this.removeStylesOnCompDestroy&&this.sharedStylesHost.removeStyles(this.styles)}},Ya=class extends ho{constructor(e,t,i,r,s,o,a,c){let l=r+"-"+i.id;super(e,t,i,s,o,a,c,l),this.contentAttr=HE(l),this.hostAttr=GE(l)}applyToHost(e){this.applyStyles(),this.setAttribute(e,this.hostAttr,"")}createElement(e,t){let i=super.createElement(e,t);return super.setAttribute(i,this.contentAttr,""),i}},WE=(()=>{class n extends Xa{constructor(t){super(t)}supports(t){return!0}addEventListener(t,i,r){return t.addEventListener(i,r,!1),()=>this.removeEventListener(t,i,r)}removeEventListener(t,i,r){return t.removeEventListener(i,r)}static{this.\u0275fac=function(i){return new(i||n)(ct(Ri))}}static{this.\u0275prov=pt({token:n,factory:n.\u0275fac})}}return n})(),Vv=["alt","control","meta","shift"],jE={"\b":"Backspace","	":"Tab","\x7F":"Delete","\x1B":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},$E={alt:n=>n.altKey,control:n=>n.ctrlKey,meta:n=>n.metaKey,shift:n=>n.shiftKey},qE=(()=>{class n extends Xa{constructor(t){super(t)}supports(t){return n.parseEventName(t)!=null}addEventListener(t,i,r){let s=n.parseEventName(i),o=n.eventCallback(s.fullKey,r,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>Id().onAndCancel(t,s.domEventName,o))}static parseEventName(t){let i=t.toLowerCase().split("."),r=i.shift();if(i.length===0||!(r==="keydown"||r==="keyup"))return null;let s=n._normalizeKey(i.pop()),o="",a=i.indexOf("code");if(a>-1&&(i.splice(a,1),o="code."),Vv.forEach(l=>{let u=i.indexOf(l);u>-1&&(i.splice(u,1),o+=l+".")}),o+=s,i.length!=0||s.length===0)return null;let c={};return c.domEventName=r,c.fullKey=o,c}static matchEventFullKeyCode(t,i){let r=jE[t.key]||t.key,s="";return i.indexOf("code.")>-1&&(r=t.code,s="code."),r==null||!r?!1:(r=r.toLowerCase(),r===" "?r="space":r==="."&&(r="dot"),Vv.forEach(o=>{if(o!==r){let a=$E[o];a(t)&&(s+=o+".")}}),s+=r,s===i)}static eventCallback(t,i,r){return s=>{n.matchEventFullKeyCode(s,t)&&r.runGuarded(()=>i(s))}}static _normalizeKey(t){return t==="esc"?"escape":t}static{this.\u0275fac=function(i){return new(i||n)(ct(Ri))}}static{this.\u0275prov=pt({token:n,factory:n.\u0275fac})}}return n})();function Wv(n,e,t){return bv(xt({rootComponent:n,platformRef:t?.platformRef},XE(e)))}function XE(n){return{appProviders:[...QE,...n?.providers??[]],platformProviders:KE}}function YE(){Fd.makeCurrent()}function ZE(){return new si}function JE(){return vg(document),document}var KE=[{provide:es,useValue:Lv},{provide:ud,useValue:YE,multi:!0},{provide:Ri,useFactory:JE,deps:[]}];var QE=[{provide:Ca,useValue:"root"},{provide:si,useFactory:ZE,deps:[]},{provide:Ld,useClass:WE,multi:!0,deps:[Ri,rt,es]},{provide:Ld,useClass:qE,multi:!0,deps:[Ri]},kv,zv,Bv,{provide:$r,useExisting:kv},{provide:qa,useClass:kE,deps:[]},[]];function jv(n,e,t){let i={lens:`<radialGradient id="g"><stop offset="0%" stop-color="${e}" stop-opacity=".9"/><stop offset="60%" stop-color="${n}" stop-opacity=".3"/><stop offset="100%" stop-color="#0a0908"/></radialGradient><circle cx="400" cy="300" r="280" fill="url(%23g)"/><circle cx="400" cy="300" r="140" fill="none" stroke="${e}" stroke-opacity=".4" stroke-width="1"/><circle cx="400" cy="300" r="220" fill="none" stroke="${n}" stroke-opacity=".3" stroke-width="1"/>`,grid:`<linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="${n}" stop-opacity=".7"/><stop offset="100%" stop-color="${e}" stop-opacity=".3"/></linearGradient><rect width="800" height="600" fill="url(%23g)"/><g stroke="%23f5efe6" stroke-opacity=".15"><path d="M0,150 L800,150 M0,300 L800,300 M0,450 L800,450 M200,0 L200,600 M400,0 L400,600 M600,0 L600,600"/></g>`,bars:`<linearGradient id="g" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="${n}"/><stop offset="100%" stop-color="${e}"/></linearGradient><rect width="800" height="600" fill="%230a0908"/><rect x="100" y="100" width="60" height="400" fill="url(%23g)" opacity=".8"/><rect x="200" y="180" width="60" height="320" fill="url(%23g)" opacity=".6"/><rect x="300" y="80" width="60" height="420" fill="url(%23g)" opacity=".9"/><rect x="400" y="220" width="60" height="280" fill="url(%23g)" opacity=".5"/><rect x="500" y="140" width="60" height="360" fill="url(%23g)" opacity=".7"/><rect x="600" y="260" width="60" height="240" fill="url(%23g)" opacity=".4"/>`,wave:`<linearGradient id="g" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="${n}"/><stop offset="100%" stop-color="${e}"/></linearGradient><rect width="800" height="600" fill="%230a0908"/><path d="M0,300 Q200,200 400,300 T800,300" stroke="url(%23g)" stroke-width="3" fill="none" opacity=".8"/><path d="M0,350 Q200,250 400,350 T800,350" stroke="${e}" stroke-width="2" fill="none" opacity=".5"/><path d="M0,250 Q200,150 400,250 T800,250" stroke="${n}" stroke-width="2" fill="none" opacity=".5"/>`,frame:`<rect width="800" height="600" fill="%230a0908"/><rect x="80" y="60" width="640" height="480" fill="none" stroke="${n}" stroke-width="2" opacity=".7"/><rect x="120" y="100" width="560" height="400" fill="${e}" fill-opacity=".15"/><circle cx="400" cy="300" r="80" fill="${n}" fill-opacity=".4"/>`,strip:`<rect width="800" height="600" fill="%231a1917"/><g fill="${n}" fill-opacity=".6">${[...Array(8)].map((s,o)=>`<rect x="${o*100+20}" y="50" width="60" height="30"/><rect x="${o*100+20}" y="520" width="60" height="30"/>`).join("")}</g><rect x="20" y="120" width="760" height="360" fill="${e}" fill-opacity=".3"/>`,blur:`<radialGradient id="g" cx="30%" cy="40%"><stop offset="0%" stop-color="${n}" stop-opacity=".9"/><stop offset="100%" stop-color="%230a0908"/></radialGradient><radialGradient id="g2" cx="70%" cy="70%"><stop offset="0%" stop-color="${e}" stop-opacity=".6"/><stop offset="100%" stop-color="%230a0908" stop-opacity="0"/></radialGradient><rect width="800" height="600" fill="url(%23g)"/><rect width="800" height="600" fill="url(%23g2)"/>`};return`data:image/svg+xml;utf8,${`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice">${i[t]??i.lens}</svg>`}`}var $v=[{num:"01",label:"Skills",href:"#skills"},{num:"02",label:"Experience",href:"#experience"},{num:"03",label:"Work",href:"#work"},{num:"04",label:"Contact",href:"#contact"}],lr=[{num:"C / 01",title:"Cinematography",desc:"Framing the ordinary until it resists being ordinary. Handheld energy or locked-off patience \u2014 whichever the story earns.",tools:["Sony FX6","RED Komodo","Alexa Mini","DJI Ronin"]},{num:"C / 02",title:"Editing",desc:"Finding the cut that breathes. Rhythm before rules, emotion before montage tricks.",tools:["Premiere Pro","DaVinci Resolve","Final Cut"]},{num:"C / 03",title:"VFX & Comp",desc:"Invisible fixes and impossible frames. Keying, rotoscope, motion tracking, clean-plating, beauty work.",tools:["After Effects","Nuke","Mocha","Photoshop"]},{num:"C / 04",title:"Colour",desc:"Grading is the second script. Look development, LUTs, match-grade across scenes and cameras.",tools:["DaVinci","Lumetri","Baselight"]},{num:"C / 05",title:"AI Integrations",desc:"Using generative tools as a brush, not a crutch \u2014 extending plates, concepting looks, and accelerating pre-viz.",tools:["Runway","Kling","Midjourney","Sora"]},{num:"C / 06",title:"Direction",desc:"Translating a brief into a frame. Working with talent, sound, and production design until it all rhymes.",tools:["Storyboarding","Shot-listing","Pre-viz"]}],qv=[{year:"2023-24(oct)",role:"Cinematographer / Editor / VFX Artist",place:"EIPI MEDIA",placeDetail:"End-to-end production for digital-first brand experiences.",location:"Mumbai",reveal:"Spearheaded technical production pipelines, bridging the gap between raw cinematography and VFX-heavy final edits for 20+ brands."},{year:"2024(dec)-2025(july)",role:"Editor and vfx artist",place:"TVA",placeDetail:"Post-production lead for narrative and stylised content.",location:"Mumbai",reveal:"Managed complex multi-camera edits and integrated high-end VFX/compositing to elevate digital and television spots."},{year:"2025(aug-nov)",role:"Cinematographer and editor",place:"Goldcoast films",placeDetail:"Crafting cinematic visuals and pacing for high-end digital campaigns.",location:"Mumbai / Global",reveal:"Led the visual storytelling on commercial sets and final post-production, ensuring a premium brand aesthetic across all deliverables."},{year:"Freelance / Ongoing",role:"Contract Editor",place:"Abstract dxb",placeDetail:"International creative collaborations.",location:"Dubai / Remote",reveal:"Delivering tailored editing solutions for international agencies, focusing on premium lifestyle and brand content with a fast turnaround."}],Za=[{title:"Nestasia Kitchen",cat:"cine",brand:"Nestasia",img:"/assets/logos/cine/01_nestasia/nestasia-kitchen.jpg",video:"/assets/logos/cine/01_nestasia/NESTASIA-X-SANYA_SCRIPT-3-(HORIZONTAL)_HR.mp4"},{title:"VK Magic Tricks",cat:"cine",brand:"Ocean",img:"/assets/logos/cine/02_ocean/virat-magic.jpg",video:"/assets/logos/cine/02_ocean/VK-&-Rohit_MAGIC-TRICKS_11.27.2023.mp4"},{title:"Mira Edit",cat:"cine",brand:"Orion",img:"/assets/logos/cine/03_orion/orion-mira.jpg",video:"/assets/logos/cine/03_orion/ORION-x-MIRA-EDIT_11.01.2023_40-SEC_HORIZONTAL_HR.mp4"},{title:"Nestasia Room",cat:"cine",brand:"Nestasia",img:"/assets/logos/cine/01_nestasia/nestasia-room.jpg",video:"/assets/logos/cine/01_nestasia/NESTASIA-X-SANYA_SCRIPT-2-(HORIZONTAL)_HR_1.mp4"},{title:"VK Clone",cat:"cine",brand:"Ocean",img:"/assets/logos/cine/02_ocean/virat-clone.jpg",video:"/assets/logos/cine/02_ocean/VK-x-Clone_30.0_Horizontal.mp4",imgPosition:"80% center"},{title:"Neha x Angad",cat:"cine",brand:"Giva",img:"/assets/logos/cine/04_giva/neha-giva.jpg",video:"/assets/logos/cine/04_giva/NEHA-X-ANGAD_01.15.2024_TRAILER.mp4",imgPosition:"70% center"},{title:"Kapil Sharma",cat:"cine",brand:"HDFC Payzapp",img:"/assets/logos/cine/08_hdfc/hdfc-kapil.jpg",video:"/assets/logos/cine/08_hdfc/HDFC-Payzapp-x-Kapil-Sharma---Bill-Payments---11.01.2024_HR.mp4"},{title:"Black Bag",cat:"cine",brand:"Zouk",img:"/assets/logos/cine/09_zouk/zouk-black.png",video:"/assets/logos/cine/09_zouk/ZOUK-X-V5_-BLACK-BAG-25.2_HR.mp4"},{title:"KL Purpose",cat:"cine",brand:"Hyugalife",img:"/assets/logos/cine/05_hyugalife/hyugalife.jpg",video:"/assets/logos/cine/05_hyugalife/KL-x-Purpose_11.08.2023.mp4"},{title:"Tiger Shroff",cat:"cine",brand:"HDFC Payzapp",img:"/assets/logos/cine/08_hdfc/hdfc-tiger.jpg",video:"/assets/logos/cine/08_hdfc/HDFC-Payzapp-x-Tiger-Shroff_12.15.2023.mp4"},{title:"Footwear",cat:"cine",brand:"Zouk",img:"/assets/logos/cine/09_zouk/zouk-footwear.jpg",video:"/assets/logos/cine/09_zouk/ZOUK-x-V11_FOOTWEAR-FUNCTIONALITY_24.0_HR.mp4"},{title:"Awez",cat:"cine",brand:"Indigo",img:"/assets/logos/cine/06_indigo/indigo-awez.jpg",video:"/assets/logos/cine/06_indigo/INDIGOxAWEZ_2.1.mp4"},{title:"Combine Montage",cat:"cine",brand:"Virsa",img:"/assets/logos/cine/07_virsa/virsa-3.jpg",video:"/assets/logos/cine/07_virsa/VIRSA_combine-montage_V1_24.07.2024_HR.mp4"},{title:"Stopmotion",cat:"cine",brand:"Zouk",img:"/assets/logos/cine/09_zouk/zouk-stopmotion.png",video:"/assets/logos/cine/09_zouk/Zouk-x-V6_UNISEX-STOPMOTION_24.0_HR.mp4"},{title:"Coffee",cat:"edit",brand:"Plum",img:"/assets/logos/edit/01_plum/plum-kalyani.png",video:"/assets/logos/edit/01_plum/Plum-coffee_14.04.26.mp4"},{title:"Working Women",cat:"edit",brand:"Zouk",img:"/assets/logos/edit/03_zouk/sara-zouk1.jpg",video:"/assets/logos/edit/03_zouk/VIDEO-5-ZOUK-x-WORKING-WOMEN_-07.17.2023.mp4"},{title:"Campus Vedika",cat:"edit",brand:"Campus",img:"/assets/logos/edit/09_campus/campus-vedika.jpg",video:"/assets/logos/edit/09_campus/CAMPUS-x-VEDIKA_12.26.2023_HR.mp4"},{title:"Prateek Liberty",cat:"edit",brand:"Liberty",img:"/assets/logos/edit/04_liberty/liberty-prateek.png",video:"/assets/logos/edit/04_liberty/PRATEEK-LIBERTY_27.11.25.mp4"},{title:"Timely Reminders",cat:"edit",brand:"Mobikwik",img:"/assets/logos/edit/02_mobikwik/manoj-mobikwik.jpg",video:"/assets/logos/edit/02_mobikwik/MB-x-MOBIKWIK-_TIMELY-REMINDERS_09.08.2023_v2.mp4"},{title:"Sara Bags",cat:"edit",brand:"Zouk",img:"/assets/logos/edit/03_zouk/zouk-sara.jpg",video:"/assets/logos/edit/03_zouk/VIDEO-14-ZOUK-x-SARA-POSING-WITH-DIFFERENT-BAGS_07.17.2023.mp4"},{title:"Campus Vyomesh",cat:"edit",brand:"Campus",img:"/assets/logos/edit/09_campus/campus-vyomesh.jpg",video:"/assets/logos/edit/09_campus/vyomesh-x-campus_01.15.2024_HR.mp4"},{title:"Prateek Snitch",cat:"edit",brand:"Snitch",img:"/assets/logos/edit/06_snitch-prateek/snitch-prateek.png",video:"/assets/logos/edit/06_snitch-prateek/PRATEEK-X-SNITCH_28.1.mp4"},{title:"Scott Siwet",cat:"edit",brand:"Scott",img:"/assets/logos/edit/05_scott-siwet/scott-siwet.png",video:"/assets/logos/edit/05_scott-siwet/SCOTT-Siwet_02.12.25.mp4"},{title:"Shankara KK",cat:"edit",brand:"Shankara",img:"/assets/logos/edit/07_shankara/shankara.jpg",video:"/assets/logos/edit/07_shankara/KK-x-Shankara_script-B_11.16.2023.mp4"},{title:"Luna Beauty",cat:"edit",brand:"Luna",img:"/assets/logos/edit/08_luna-beauty/luna-beauty.png",video:"/assets/logos/edit/08_luna-beauty/luna-beauty.mp4"},{title:"Divyenndu",cat:"edit",brand:"HK Vitals",img:"/assets/logos/edit/10_hk-vitals/hk-vitals-divyendu.jpg",video:"/assets/logos/edit/10_hk-vitals/HK-Vitals-x-Divyenndu_VERTICAL_23.05.2024.mp4"},{title:"Aishwarya",cat:"edit",brand:"Cove & Lane",img:"/assets/logos/edit/11_cove-&-lane/cove-&-lane.png",video:"/assets/logos/edit/11_cove-&-lane/Cove-&-Lane-x-Aishwarya_26.0.mp4"},{title:"Aparshakti",cat:"edit",brand:"Ludic",img:"/assets/logos/edit/12_ludic/ludic-aparshakti.jpg",video:"/assets/logos/edit/12_ludic/LUDIC-x-APARSHAKTI_09.02.2024_HR.mp4"},{title:"Maggie",cat:"edit",brand:"APD",img:"/assets/logos/edit/13_apd-devang/apd-maggie.png",video:"/assets/logos/edit/13_apd-devang/APD-MAGGIE_29.10.25.mp4"},{title:"Giant Fruit",cat:"vfx",brand:"Ocean",img:"/assets/logos/vfx/01_ocean/ocean-fruit1.png",video:"/assets/logos/vfx/01_ocean/Virat-X-Giant_fruit.mp4"},{title:"Bread Range",cat:"vfx",brand:"Bakers Dozen",img:"/assets/logos/vfx/03_bakers-dozen/bakers-clone.jpg",video:"/assets/logos/vfx/03_bakers-dozen/BAKERS-DOZEN-x-SOHA_BREAD-RANGE.mp4"},{title:"Realme Riya",cat:"vfx",brand:"Realme",img:"/assets/logos/vfx/08_realme/realme-riya.png",video:"/assets/logos/vfx/08_realme/REALME-x-RIYA.mp4"},{title:"Pantaloons Study",cat:"vfx",brand:"Case Study",img:"/assets/logos/vfx/02_case-study/PANTALOONS-casestudy.png",video:"/assets/logos/vfx/02_case-study/Pantaloons-casestudy.mp4"},{title:"Flash Gordon",cat:"vfx",brand:"Ocean",img:"/assets/logos/vfx/01_ocean/ocean-flash1.png",video:"/assets/logos/vfx/01_ocean/Virat-x-ED_flash_gordon.mp4"},{title:"Cake Range",cat:"vfx",brand:"Bakers Dozen",img:"/assets/logos/vfx/03_bakers-dozen/bakers-queen.jpg",video:"/assets/logos/vfx/03_bakers-dozen/BAKERS-DOZEN-x-SOHA_CAKE-RANGE.mp4"},{title:"Realme Varun",cat:"vfx",brand:"Realme",img:"/assets/logos/vfx/08_realme/realme-varun.jpg",video:"/assets/logos/vfx/08_realme/REALME-x-VARUN-SHARMA.mp4"},{title:"Styleup AI Study",cat:"vfx",brand:"Case Study",img:"/assets/logos/vfx/02_case-study/AI-casestudy-.png",video:"/assets/logos/vfx/02_case-study/Styleup-AI-Case-Study_04.03.25.mp4"},{title:"House of Myntra",cat:"vfx",brand:"Myntra",img:"/assets/logos/vfx/04_myntra/house-of-myntra.png",video:"/assets/logos/vfx/04_myntra/House-of-Myntra_1.mp4"},{title:"Neha Dhupia",cat:"vfx",brand:"HDFC",img:"/assets/logos/vfx/05_hdfc/hdfc-neha.png",video:"/assets/logos/vfx/05_hdfc/HDFC-x-Neha-Dhupia_11.10.2023.mp4"},{title:"Tamannaah",cat:"vfx",brand:"Kamiliant",img:"/assets/logos/vfx/06_kamiliant/kamiliant-tammanah.jpg",video:"/assets/logos/vfx/06_kamiliant/Kamiliant-x-Tamannaah_independence-day_10.1.mp4"},{title:"Ubon Dhruv",cat:"vfx",brand:"Ubon",img:"/assets/logos/vfx/07_ubon/ubon-charging.png",video:"/assets/logos/vfx/07_ubon/Ubon-x-Dhruv.mp4"},{title:"Trunativ Peach",cat:"vfx",brand:"Trunative",img:"/assets/logos/vfx/09_trunative/trunative-hologram.jpg",video:"/assets/logos/vfx/09_trunative/TRUNATIVxPEACH.mp4"},{title:"Afterglow",cat:"ai",brand:"Raymond",img:jv("%23e0a96d","%23d4472a","blur")},{title:"Loop the Real",cat:"ai",brand:"Asian Paints",img:jv("%23d4472a","%23f5efe6","frame")}],Xv=[{value:"all",label:"All"},{value:"cine",label:"Cinematography"},{value:"edit",label:"Editing"},{value:"vfx",label:"VFX"},{value:"ai",label:"AI Integrations"}],Yv={cine:"Cinematography",edit:"Editing",vfx:"VFX",ai:"AI"};var eS=(n,e)=>e.href;function tS(n,e){if(n&1){let t=di();H(0,"a",4),Nt("click",function(r){let s=Nn(t).$implicit,o=Qt();return On(o.scrollTo(r,s.href))}),te(1),J()}if(n&2){let t=e.$implicit;Wt("href",t.href,Zn),za("data-num",t.num),ye(),Vt(" ",t.label," ")}}var Zv=(()=>{class n{constructor(){this.zone=ke(rt),this.navLinks=$v,this.scrolled=yt(!1),this.time=yt("\u2014")}ngOnInit(){this.tickClock(),this.zone.runOutsideAngular(()=>{this.clockInterval=window.setInterval(()=>{this.zone.run(()=>this.tickClock())},1e3)})}ngAfterViewInit(){this.onScroll()}onScroll(){this.scrolled.set(window.scrollY>40)}scrollTo(t,i){t.preventDefault();let r=document.querySelector(i);r&&r.scrollIntoView({behavior:"smooth"})}tickClock(){let t=new Date,i=String(t.getHours()).padStart(2,"0"),r=String(t.getMinutes()).padStart(2,"0"),s=String(t.getSeconds()).padStart(2,"0");this.time.set(`MUM ${i}:${r}:${s}`)}ngOnDestroy(){this.clockInterval&&window.clearInterval(this.clockInterval)}static{this.\u0275fac=function(i){return new(i||n)}}static{this.\u0275cmp=Dt({type:n,selectors:[["app-navbar"]],hostBindings:function(i,r){i&1&&Nt("scroll",function(){return r.onScroll()},!1,Mg)},standalone:!0,features:[Tt],decls:10,vars:3,consts:[["href","#hero",1,"nav-logo",3,"click"],[1,"nav-links"],[3,"href"],[1,"nav-time"],[3,"click","href"]],template:function(i,r){i&1&&(H(0,"nav")(1,"a",0),Nt("click",function(o){return r.scrollTo(o,"#hero")}),te(2," Rishabh Sahu"),H(3,"sup"),te(4,"*"),J()(),H(5,"div",1),un(6,tS,2,3,"a",2,eS),J(),H(8,"div",3),te(9),J()()),i&2&&(Kt("scrolled",r.scrolled()),ye(6),dn(r.navLinks),ye(3),ut(r.time()))},styles:['nav[_ngcontent-%COMP%]{position:fixed;top:0;left:0;right:0;z-index:100;display:flex;justify-content:space-between;align-items:center;padding:1.25rem 2.5rem;background:#0a090866;backdrop-filter:blur(12px);-webkit-backdrop-filter:blur(12px);border-bottom:1px solid transparent;transition:background .4s var(--ease),border-color .4s,padding .4s}nav.scrolled[_ngcontent-%COMP%]{background:#0a0908d9;border-bottom-color:var(--line);padding:.9rem 2.5rem}.nav-logo[_ngcontent-%COMP%]{font-family:Fraunces,serif;font-weight:500;font-style:italic;font-size:1.4rem;letter-spacing:-.02em;color:var(--ink)}.nav-logo[_ngcontent-%COMP%]   sup[_ngcontent-%COMP%]{color:var(--accent)}.nav-links[_ngcontent-%COMP%]{display:flex;gap:2.5rem;align-items:center}.nav-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{font-family:JetBrains Mono,monospace;font-size:11px;letter-spacing:.25em;text-transform:uppercase;position:relative;padding:4px 0}.nav-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:before{content:attr(data-num);font-size:8px;color:var(--dim);margin-right:6px;vertical-align:top}.nav-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:after{content:"";position:absolute;bottom:0;left:0;width:0;height:1px;background:var(--ink);transition:width .4s var(--ease)}.nav-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover:after{width:100%}.nav-time[_ngcontent-%COMP%]{font-family:JetBrains Mono,monospace;font-size:10px;color:var(--dim);letter-spacing:.2em}@media (max-width: 900px){nav[_ngcontent-%COMP%]{padding:.8rem 1.25rem;background:#0a0908f2}.nav-logo[_ngcontent-%COMP%]{font-size:1.2rem}.nav-links[_ngcontent-%COMP%]{position:fixed!important;bottom:0!important;left:0!important;right:0!important;width:100%!important;height:70px!important;background:#0a0908!important;border-top:1px solid var(--line)!important;display:flex!important;align-items:center!important;justify-content:space-around!important;padding:0 1rem!important;z-index:9999!important;margin:0!important}.nav-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{font-size:9px;padding:10px 5px}.nav-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:before{display:none}.nav-time[_ngcontent-%COMP%]{display:none}}'],changeDetection:0})}}return n})();var Jv=(()=>{class n{constructor(){this.done=yt(!1),this.progress=yt(0),this.currentPreview=yt(0),this.currentFrame=yt(0),this.remainingSeconds=yt(2)}ngAfterViewInit(){let s=Date.now(),o=()=>{let c=Date.now()-s,l=Math.min(c/2e3*100,100);this.progress.set(l),this.currentFrame.set(Math.floor(l/100*24613)),this.currentPreview.set(Math.floor(l/100*50)),this.remainingSeconds.set(Math.max(0,Math.ceil((2e3-c)/1e3))),l>=100&&(this.interval&&window.clearInterval(this.interval),this.finish())},a=()=>{this.interval=window.setInterval(o,30)};document.readyState==="complete"?a():window.addEventListener("load",a,{once:!0})}forceFinish(){this.interval&&window.clearInterval(this.interval),this.progress.set(100),this.finish()}finish(){this.timeout=window.setTimeout(()=>{this.done.set(!0),window.dispatchEvent(new CustomEvent("loader:done"))},500)}ngOnDestroy(){this.interval&&window.clearInterval(this.interval),this.timeout&&window.clearTimeout(this.timeout)}static{this.\u0275fac=function(i){return new(i||n)}}static{this.\u0275cmp=Dt({type:n,selectors:[["app-loader"]],standalone:!0,features:[Tt],decls:23,vars:11,consts:[[1,"loader"],[1,"render-modal"],[1,"render-header"],[1,"render-body"],[1,"render-text"],[1,"progress-track"],[1,"progress-fill"],[1,"render-details"],["width","10","height","10","viewBox","0 0 24 24","fill","none","stroke","currentColor","stroke-width","2"],["d","M9 18l6-6-6-6"],[1,"render-actions"],[1,"btn-cancel",3,"click"]],template:function(i,r){i&1&&(H(0,"div",0)(1,"div",1)(2,"div",2)(3,"span"),te(4),fv(5,"number"),J()(),H(6,"div",3)(7,"p",4),te(8),J(),H(9,"div",5),Fe(10,"div",6),J(),H(11,"p",4),te(12),J(),H(13,"p",4),te(14),J(),H(15,"div",7),li(),H(16,"svg",8),Fe(17,"path",9),J(),Ia(),H(18,"span"),te(19,"Render details"),J()(),H(20,"div",10)(21,"button",11),Nt("click",function(){return r.forceFinish()}),te(22,"Cancel"),J()()()()()),i&2&&(Kt("done",r.done()),ye(4),Vt("Rendering : ",pv(5,8,r.progress(),"1.2-2"),"%"),ye(4),Vt("Rendering ",r.currentPreview()," of 50 video previews"),ye(2),ln("width",r.progress(),"%"),ye(2),Vt("Rendering frame ",r.currentFrame()," of 24613"),ye(2),Vt("Estimated time remaining: 00:00:0",r.remainingSeconds(),""))},dependencies:[Fv],styles:[".loader[_ngcontent-%COMP%]{position:fixed;inset:0;background:#181818;z-index:10001;display:flex;justify-content:center;align-items:center;transition:opacity .5s ease,visibility .5s;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif}.loader.done[_ngcontent-%COMP%]{opacity:0;visibility:hidden}.render-modal[_ngcontent-%COMP%]{width:420px;background:#252525;border-radius:6px;box-shadow:0 10px 40px #00000080;overflow:hidden;color:#e0e0e0;border:1px solid #333}.render-header[_ngcontent-%COMP%]{background:#333;padding:10px 16px;text-align:center;font-size:13px;font-weight:600;color:#d1d1d1;border-bottom:1px solid #1a1a1a}.render-body[_ngcontent-%COMP%]{padding:24px}.render-text[_ngcontent-%COMP%]{font-size:13px;margin:0 0 10px;color:silver}.progress-track[_ngcontent-%COMP%]{height:6px;background:#151515;border-radius:3px;margin:16px 0 20px;overflow:hidden;box-shadow:inset 0 1px 2px #00000080}.progress-fill[_ngcontent-%COMP%]{height:100%;background:linear-gradient(90deg,var(--accent),var(--amber));border-radius:3px;transition:width .05s linear;box-shadow:0 0 10px #d4472a66}.render-details[_ngcontent-%COMP%]{display:flex;align-items:center;gap:6px;font-size:13px;color:#d1d1d1;margin-top:24px;cursor:pointer;font-weight:500}.render-details[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{opacity:.7}.render-actions[_ngcontent-%COMP%]{display:flex;justify-content:flex-end;margin-top:20px}.btn-cancel[_ngcontent-%COMP%]{background:transparent;color:#e0e0e0;border:1px solid #555;padding:6px 20px;border-radius:16px;font-size:13px;cursor:pointer;transition:background .2s}.btn-cancel[_ngcontent-%COMP%]:hover{background:#333}"],changeDetection:0})}}return n})();var nS=["dot"],iS=["ring"],rS=["label"],Kv=(()=>{class n{constructor(){this.zone=ke(rt),this.dot=kt.required("dot"),this.ring=kt.required("ring"),this.label=kt.required("label"),this.rx=0,this.ry=0,this.mx=0,this.my=0,this.isFast=!1,this.listeners=[],this.hoverTargets=null}ngAfterViewInit(){if(window.matchMedia("(max-width: 900px)").matches){[this.dot,this.ring,this.label].forEach(t=>{t().nativeElement.style.display="none"});return}this.zone.runOutsideAngular(()=>{let t=r=>{this.mx=r.clientX,this.my=r.clientY;let s=this.dot().nativeElement,o=this.label().nativeElement,a=this.ring().nativeElement;s.style.transform=`translate3d(${this.mx}px, ${this.my}px, 0)`,o.style.transform=`translate3d(${this.mx}px, ${this.my}px, 0)`,this.isFast&&(this.rx=this.mx,this.ry=this.my,a.style.transform=`translate3d(${this.rx}px, ${this.ry}px, 0)`)};window.addEventListener("mousemove",t),this.listeners.push(()=>window.removeEventListener("mousemove",t));let i=()=>{if(!this.isFast){this.rx+=(this.mx-this.rx)*.15,this.ry+=(this.my-this.ry)*.15;let r=this.ring().nativeElement;r.style.transform=`translate3d(${this.rx}px, ${this.ry}px, 0)`}this.rafId=requestAnimationFrame(i)};this.rafId=requestAnimationFrame(i),this.attachHoverListeners(),this.mutationObserver=new MutationObserver(()=>this.attachHoverListeners()),this.mutationObserver.observe(document.body,{childList:!0,subtree:!0})})}attachHoverListeners(){let t=this.dot().nativeElement,i=this.ring().nativeElement,r=this.label().nativeElement;document.querySelectorAll("a, button, .gallery-item, .exp-row, .brand-cell, .nle-timeline").forEach(s=>{if(s.dataset.cursorAttached)return;s.dataset.cursorAttached="1";let o=s.classList.contains("nle-timeline");s.addEventListener("mouseenter",()=>{if(o&&(this.isFast=!0,t.style.opacity="0",r.textContent="PREVIEW",r.classList.add("show")),t.classList.add("hover"),i.classList.add("hover"),!o){let a=s.dataset.cursor;a&&(r.textContent=a,r.classList.add("show"))}}),s.addEventListener("mouseleave",()=>{o&&(this.isFast=!1,t.style.opacity="1"),t.classList.remove("hover"),i.classList.remove("hover"),r.classList.remove("show")})})}ngOnDestroy(){this.rafId&&cancelAnimationFrame(this.rafId),this.listeners.forEach(t=>t()),this.mutationObserver?.disconnect()}static{this.\u0275fac=function(i){return new(i||n)}}static{this.\u0275cmp=Dt({type:n,selectors:[["app-cursor"]],viewQuery:function(i,r){i&1&&(Ut(r.dot,nS,5),Ut(r.ring,iS,5),Ut(r.label,rS,5)),i&2&&Kn(3)},standalone:!0,features:[Tt],decls:6,vars:0,consts:[["dot",""],["ring",""],["label",""],[1,"cursor"],[1,"cursor-ring"],[1,"cursor-label"]],template:function(i,r){i&1&&Fe(0,"div",3,0)(2,"div",4,1)(4,"div",5,2)},styles:[".cursor[_ngcontent-%COMP%]{position:fixed;top:0;left:0;width:8px;height:8px;border-radius:50%;background:var(--ink);pointer-events:none;z-index:100000;margin-left:-4px;margin-top:-4px;transition:width .3s var(--ease),height .3s var(--ease),background .3s var(--ease),opacity .2s;mix-blend-mode:difference}.cursor.hover[_ngcontent-%COMP%]{width:0;height:0}.cursor-ring[_ngcontent-%COMP%]{position:fixed;top:0;left:0;width:40px;height:40px;border-radius:50%;border:1px solid var(--ink);pointer-events:none;z-index:99999;margin-left:-20px;margin-top:-20px;transition:width .4s var(--ease),height .4s var(--ease),border-color .3s;mix-blend-mode:difference}.cursor-ring.hover[_ngcontent-%COMP%]{width:80px;height:80px;border-color:var(--accent)}.cursor-ring.drag[_ngcontent-%COMP%]{width:100px;height:100px;border-color:var(--amber)}.cursor-label[_ngcontent-%COMP%]{position:fixed;pointer-events:none;z-index:99999;font-family:JetBrains Mono,monospace;font-size:10px;letter-spacing:.2em;color:var(--ink);text-transform:uppercase;transform:translate3d(20px,20px,0);opacity:0;transition:opacity .3s;mix-blend-mode:difference}.cursor-label.show[_ngcontent-%COMP%]{opacity:1}"],changeDetection:0})}}return n})();var wf="168";var sS=0,Qv=1,oS=2;var iy=1,aS=2,yi=3,Hi=0,nn=1,xi=2,Bi=0,bs=1,e0=2,t0=3,n0=4,cS=5,vr=100,lS=101,uS=102,dS=103,hS=104,fS=200,pS=201,mS=202,gS=203,mh=204,gh=205,vS=206,yS=207,_S=208,xS=209,MS=210,bS=211,wS=212,ES=213,SS=214,CS=0,DS=1,TS=2,Dc=3,AS=4,IS=5,RS=6,PS=7,ry=0,NS=1,OS=2,zi=0,FS=1,LS=2,kS=3,US=4,VS=5,BS=6,zS=7;var i0=300,Cs=301,Ds=302,vh=303,yh=304,al=306,_h=1e3,_r=1001,xh=1002,En=1003,HS=1004;var Ja=1005;var Un=1006,Vd=1007;var xr=1008;var wi=1009,sy=1010,oy=1011,wo=1012,Ef=1013,Mr=1014,Mi=1015,To=1016,Sf=1017,Cf=1018,Ts=1020,ay=35902,cy=1021,ly=1022,Vn=1023,uy=1024,dy=1025,ws=1026,As=1027,hy=1028,Df=1029,fy=1030,Tf=1031;var Af=1033,bc=33776,wc=33777,Ec=33778,Sc=33779,Mh=35840,bh=35841,wh=35842,Eh=35843,Sh=36196,Ch=37492,Dh=37496,Th=37808,Ah=37809,Ih=37810,Rh=37811,Ph=37812,Nh=37813,Oh=37814,Fh=37815,Lh=37816,kh=37817,Uh=37818,Vh=37819,Bh=37820,zh=37821,Cc=36492,Hh=36494,Gh=36495,py=36283,Wh=36284,jh=36285,$h=36286;var Tc=2300,qh=2301,Bd=2302,r0=2400,s0=2401,o0=2402;var GS=3200,WS=3201;var my=0,jS=1,Ui="",Qn="srgb",$i="srgb-linear",If="display-p3",cl="display-p3-linear",Ac="linear",dt="srgb",Ic="rec709",Rc="p3";var is=7680;var a0=519,$S=512,qS=513,XS=514,gy=515,YS=516,ZS=517,JS=518,KS=519,c0=35044;var l0="300 es",bi=2e3,Pc=2001,Gi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let r=this._listeners[e];if(r!==void 0){let s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let i=this._listeners[e.type];if(i!==void 0){e.target=this;let r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}},jt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var zd=Math.PI/180,Xh=180/Math.PI;function Ao(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(jt[n&255]+jt[n>>8&255]+jt[n>>16&255]+jt[n>>24&255]+"-"+jt[e&255]+jt[e>>8&255]+"-"+jt[e>>16&15|64]+jt[e>>24&255]+"-"+jt[t&63|128]+jt[t>>8&255]+"-"+jt[t>>16&255]+jt[t>>24&255]+jt[i&255]+jt[i>>8&255]+jt[i>>16&255]+jt[i>>24&255]).toLowerCase()}function tn(n,e,t){return Math.max(e,Math.min(t,n))}function QS(n,e){return(n%e+e)%e}function Hd(n,e,t){return(1-t)*n+t*e}function fo(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function en(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var Ge=class n{constructor(e=0,t=0){n.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(tn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Be=class n{constructor(e,t,i,r,s,o,a,c,l){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,c,l)}set(e,t,i,r,s,o,a,c,l){let u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=c,u[6]=i,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],c=i[6],l=i[1],u=i[4],d=i[7],h=i[2],f=i[5],g=i[8],v=r[0],m=r[3],p=r[6],b=r[1],M=r[4],E=r[7],O=r[2],C=r[5],D=r[8];return s[0]=o*v+a*b+c*O,s[3]=o*m+a*M+c*C,s[6]=o*p+a*E+c*D,s[1]=l*v+u*b+d*O,s[4]=l*m+u*M+d*C,s[7]=l*p+u*E+d*D,s[2]=h*v+f*b+g*O,s[5]=h*m+f*M+g*C,s[8]=h*p+f*E+g*D,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8];return t*o*u-t*a*l-i*s*u+i*a*c+r*s*l-r*o*c}invert(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],d=u*o-a*l,h=a*c-u*s,f=l*s-o*c,g=t*d+i*h+r*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/g;return e[0]=d*v,e[1]=(r*l-u*i)*v,e[2]=(a*i-r*o)*v,e[3]=h*v,e[4]=(u*t-r*c)*v,e[5]=(r*s-a*t)*v,e[6]=f*v,e[7]=(i*c-l*t)*v,e[8]=(o*t-i*s)*v,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){let c=Math.cos(s),l=Math.sin(s);return this.set(i*c,i*l,-i*(c*o+l*a)+o+e,-r*l,r*c,-r*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Gd.makeScale(e,t)),this}rotate(e){return this.premultiply(Gd.makeRotation(-e)),this}translate(e,t){return this.premultiply(Gd.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Gd=new Be;function vy(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Nc(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function eC(){let n=Nc("canvas");return n.style.display="block",n}var u0={};function Mo(n){n in u0||(u0[n]=!0,console.warn(n))}function tC(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}var d0=new Be().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),h0=new Be().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),po={[$i]:{transfer:Ac,primaries:Ic,luminanceCoefficients:[.2126,.7152,.0722],toReference:n=>n,fromReference:n=>n},[Qn]:{transfer:dt,primaries:Ic,luminanceCoefficients:[.2126,.7152,.0722],toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[cl]:{transfer:Ac,primaries:Rc,luminanceCoefficients:[.2289,.6917,.0793],toReference:n=>n.applyMatrix3(h0),fromReference:n=>n.applyMatrix3(d0)},[If]:{transfer:dt,primaries:Rc,luminanceCoefficients:[.2289,.6917,.0793],toReference:n=>n.convertSRGBToLinear().applyMatrix3(h0),fromReference:n=>n.applyMatrix3(d0).convertLinearToSRGB()}},nC=new Set([$i,cl]),nt={enabled:!0,_workingColorSpace:$i,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!nC.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;let i=po[e].toReference,r=po[t].fromReference;return r(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return po[n].primaries},getTransfer:function(n){return n===Ui?Ac:po[n].transfer},getLuminanceCoefficients:function(n,e=this._workingColorSpace){return n.fromArray(po[e].luminanceCoefficients)}};function Es(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Wd(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var rs,Yh=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{rs===void 0&&(rs=Nc("canvas")),rs.width=e.width,rs.height=e.height;let i=rs.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=rs}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Nc("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Es(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Es(t[i]/255)*255):t[i]=Es(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},iC=0,Oc=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:iC++}),this.uuid=Ao(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(jd(r[o].image)):s.push(jd(r[o]))}else s=jd(r);i.url=s}return t||(e.images[this.uuid]=i),i}};function jd(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Yh.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var rC=0,Dr=(()=>{class n extends Gi{constructor(t=n.DEFAULT_IMAGE,i=n.DEFAULT_MAPPING,r=_r,s=_r,o=Un,a=xr,c=Vn,l=wi,u=n.DEFAULT_ANISOTROPY,d=Ui){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:rC++}),this.uuid=Ao(),this.name="",this.source=new Oc(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=s,this.magFilter=o,this.minFilter=a,this.anisotropy=u,this.format=c,this.internalFormat=null,this.type=l,this.offset=new Ge(0,0),this.repeat=new Ge(1,1),this.center=new Ge(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Be,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(t.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==i0)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case _h:t.x=t.x-Math.floor(t.x);break;case _r:t.x=t.x<0?0:1;break;case xh:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case _h:t.y=t.y-Math.floor(t.y);break;case _r:t.y=t.y<0?0:1;break;case xh:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}return n.DEFAULT_IMAGE=null,n.DEFAULT_MAPPING=i0,n.DEFAULT_ANISOTROPY=1,n})(),ht=class n{constructor(e=0,t=0,i=0,r=1){n.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s,c=e.elements,l=c[0],u=c[4],d=c[8],h=c[1],f=c[5],g=c[9],v=c[2],m=c[6],p=c[10];if(Math.abs(u-h)<.01&&Math.abs(d-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+v)<.1&&Math.abs(g+m)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let M=(l+1)/2,E=(f+1)/2,O=(p+1)/2,C=(u+h)/4,D=(d+v)/4,F=(g+m)/4;return M>E&&M>O?M<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(M),r=C/i,s=D/i):E>O?E<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(E),i=C/r,s=F/r):O<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(O),i=D/s,r=F/s),this.set(i,r,s,t),this}let b=Math.sqrt((m-g)*(m-g)+(d-v)*(d-v)+(h-u)*(h-u));return Math.abs(b)<.001&&(b=1),this.x=(m-g)/b,this.y=(d-v)/b,this.z=(h-u)/b,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Zh=class extends Gi{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new ht(0,0,e,t),this.scissorTest=!1,this.viewport=new ht(0,0,e,t);let r={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Un,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);let s=new Dr(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];let o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new Oc(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ei=class extends Zh{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},Fc=class extends Dr{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=En,this.minFilter=En,this.wrapR=_r,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Jh=class extends Dr{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=En,this.minFilter=En,this.wrapR=_r,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Wi=class{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let c=i[r+0],l=i[r+1],u=i[r+2],d=i[r+3],h=s[o+0],f=s[o+1],g=s[o+2],v=s[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=d;return}if(a===1){e[t+0]=h,e[t+1]=f,e[t+2]=g,e[t+3]=v;return}if(d!==v||c!==h||l!==f||u!==g){let m=1-a,p=c*h+l*f+u*g+d*v,b=p>=0?1:-1,M=1-p*p;if(M>Number.EPSILON){let O=Math.sqrt(M),C=Math.atan2(O,p*b);m=Math.sin(m*C)/O,a=Math.sin(a*C)/O}let E=a*b;if(c=c*m+h*E,l=l*m+f*E,u=u*m+g*E,d=d*m+v*E,m===1-a){let O=1/Math.sqrt(c*c+l*l+u*u+d*d);c*=O,l*=O,u*=O,d*=O}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,r,s,o){let a=i[r],c=i[r+1],l=i[r+2],u=i[r+3],d=s[o],h=s[o+1],f=s[o+2],g=s[o+3];return e[t]=a*g+u*d+c*f-l*h,e[t+1]=c*g+u*h+l*d-a*f,e[t+2]=l*g+u*f+a*h-c*d,e[t+3]=u*g-a*d-c*h-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(i/2),u=a(r/2),d=a(s/2),h=c(i/2),f=c(r/2),g=c(s/2);switch(o){case"XYZ":this._x=h*u*d+l*f*g,this._y=l*f*d-h*u*g,this._z=l*u*g+h*f*d,this._w=l*u*d-h*f*g;break;case"YXZ":this._x=h*u*d+l*f*g,this._y=l*f*d-h*u*g,this._z=l*u*g-h*f*d,this._w=l*u*d+h*f*g;break;case"ZXY":this._x=h*u*d-l*f*g,this._y=l*f*d+h*u*g,this._z=l*u*g+h*f*d,this._w=l*u*d-h*f*g;break;case"ZYX":this._x=h*u*d-l*f*g,this._y=l*f*d+h*u*g,this._z=l*u*g-h*f*d,this._w=l*u*d+h*f*g;break;case"YZX":this._x=h*u*d+l*f*g,this._y=l*f*d+h*u*g,this._z=l*u*g-h*f*d,this._w=l*u*d-h*f*g;break;case"XZY":this._x=h*u*d-l*f*g,this._y=l*f*d-h*u*g,this._z=l*u*g+h*f*d,this._w=l*u*d+h*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],c=t[9],l=t[2],u=t[6],d=t[10],h=i+a+d;if(h>0){let f=.5/Math.sqrt(h+1);this._w=.25/f,this._x=(u-c)*f,this._y=(s-l)*f,this._z=(o-r)*f}else if(i>a&&i>d){let f=2*Math.sqrt(1+i-a-d);this._w=(u-c)/f,this._x=.25*f,this._y=(r+o)/f,this._z=(s+l)/f}else if(a>d){let f=2*Math.sqrt(1+a-i-d);this._w=(s-l)/f,this._x=(r+o)/f,this._y=.25*f,this._z=(c+u)/f}else{let f=2*Math.sqrt(1+d-i-a);this._w=(o-r)/f,this._x=(s+l)/f,this._y=(c+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(tn(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,c=t._y,l=t._z,u=t._w;return this._x=i*u+o*a+r*l-s*c,this._y=r*u+o*c+s*a-i*l,this._z=s*u+o*l+i*c-r*a,this._w=o*u-i*a-r*c-s*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let i=this._x,r=this._y,s=this._z,o=this._w,a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;let c=1-a*a;if(c<=Number.EPSILON){let f=1-t;return this._w=f*o+t*this._w,this._x=f*i+t*this._x,this._y=f*r+t*this._y,this._z=f*s+t*this._z,this.normalize(),this}let l=Math.sqrt(c),u=Math.atan2(l,a),d=Math.sin((1-t)*u)/l,h=Math.sin(t*u)/l;return this._w=o*d+this._w*h,this._x=i*d+this._x*h,this._y=r*d+this._y*h,this._z=s*d+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},P=class n{constructor(e=0,t=0,i=0){n.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(f0.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(f0.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){let t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*r-a*i),u=2*(a*t-s*r),d=2*(s*i-o*t);return this.x=t+c*l+o*d-a*u,this.y=i+c*u+a*l-s*d,this.z=r+c*d+s*u-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,c=t.z;return this.x=r*c-s*a,this.y=s*o-i*c,this.z=i*a-r*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return $d.copy(this).projectOnVector(e),this.sub($d)}reflect(e){return this.sub($d.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(tn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},$d=new P,f0=new Wi,br=class{constructor(e=new P(1/0,1/0,1/0),t=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Fn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Fn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=Fn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Fn):Fn.fromBufferAttribute(s,o),Fn.applyMatrix4(e.matrixWorld),this.expandByPoint(Fn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ka.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ka.copy(i.boundingBox)),Ka.applyMatrix4(e.matrixWorld),this.union(Ka)}let r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Fn),Fn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(mo),Qa.subVectors(this.max,mo),ss.subVectors(e.a,mo),os.subVectors(e.b,mo),as.subVectors(e.c,mo),Pi.subVectors(os,ss),Ni.subVectors(as,os),ur.subVectors(ss,as);let t=[0,-Pi.z,Pi.y,0,-Ni.z,Ni.y,0,-ur.z,ur.y,Pi.z,0,-Pi.x,Ni.z,0,-Ni.x,ur.z,0,-ur.x,-Pi.y,Pi.x,0,-Ni.y,Ni.x,0,-ur.y,ur.x,0];return!qd(t,ss,os,as,Qa)||(t=[1,0,0,0,1,0,0,0,1],!qd(t,ss,os,as,Qa))?!1:(ec.crossVectors(Pi,Ni),t=[ec.x,ec.y,ec.z],qd(t,ss,os,as,Qa))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Fn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Fn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(fi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),fi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),fi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),fi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),fi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),fi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),fi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),fi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(fi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},fi=[new P,new P,new P,new P,new P,new P,new P,new P],Fn=new P,Ka=new br,ss=new P,os=new P,as=new P,Pi=new P,Ni=new P,ur=new P,mo=new P,Qa=new P,ec=new P,dr=new P;function qd(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){dr.fromArray(n,s);let a=r.x*Math.abs(dr.x)+r.y*Math.abs(dr.y)+r.z*Math.abs(dr.z),c=e.dot(dr),l=t.dot(dr),u=i.dot(dr);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}var sC=new br,go=new P,Xd=new P,Is=class{constructor(e=new P,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):sC.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;go.subVectors(e,this.center);let t=go.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(go,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Xd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(go.copy(e.center).add(Xd)),this.expandByPoint(go.copy(e.center).sub(Xd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},pi=new P,Yd=new P,tc=new P,Oi=new P,Zd=new P,nc=new P,Jd=new P,Lc=class{constructor(e=new P,t=new P(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,pi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=pi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(pi.copy(this.origin).addScaledVector(this.direction,t),pi.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Yd.copy(e).add(t).multiplyScalar(.5),tc.copy(t).sub(e).normalize(),Oi.copy(this.origin).sub(Yd);let s=e.distanceTo(t)*.5,o=-this.direction.dot(tc),a=Oi.dot(this.direction),c=-Oi.dot(tc),l=Oi.lengthSq(),u=Math.abs(1-o*o),d,h,f,g;if(u>0)if(d=o*c-a,h=o*a-c,g=s*u,d>=0)if(h>=-g)if(h<=g){let v=1/u;d*=v,h*=v,f=d*(d+o*h+2*a)+h*(o*d+h+2*c)+l}else h=s,d=Math.max(0,-(o*h+a)),f=-d*d+h*(h+2*c)+l;else h=-s,d=Math.max(0,-(o*h+a)),f=-d*d+h*(h+2*c)+l;else h<=-g?(d=Math.max(0,-(-o*s+a)),h=d>0?-s:Math.min(Math.max(-s,-c),s),f=-d*d+h*(h+2*c)+l):h<=g?(d=0,h=Math.min(Math.max(-s,-c),s),f=h*(h+2*c)+l):(d=Math.max(0,-(o*s+a)),h=d>0?s:Math.min(Math.max(-s,-c),s),f=-d*d+h*(h+2*c)+l);else h=o>0?-s:s,d=Math.max(0,-(o*h+a)),f=-d*d+h*(h+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(Yd).addScaledVector(tc,h),f}intersectSphere(e,t){pi.subVectors(e.center,this.origin);let i=pi.dot(this.direction),r=pi.dot(pi)-i*i,s=e.radius*e.radius;if(r>s)return null;let o=Math.sqrt(s-r),a=i-o,c=i+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,c,l=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return l>=0?(i=(e.min.x-h.x)*l,r=(e.max.x-h.x)*l):(i=(e.max.x-h.x)*l,r=(e.min.x-h.x)*l),u>=0?(s=(e.min.y-h.y)*u,o=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,o=(e.min.y-h.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),d>=0?(a=(e.min.z-h.z)*d,c=(e.max.z-h.z)*d):(a=(e.max.z-h.z)*d,c=(e.min.z-h.z)*d),i>c||a>r)||((a>i||i!==i)&&(i=a),(c<r||r!==r)&&(r=c),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,pi)!==null}intersectTriangle(e,t,i,r,s){Zd.subVectors(t,e),nc.subVectors(i,e),Jd.crossVectors(Zd,nc);let o=this.direction.dot(Jd),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Oi.subVectors(this.origin,e);let c=a*this.direction.dot(nc.crossVectors(Oi,nc));if(c<0)return null;let l=a*this.direction.dot(Zd.cross(Oi));if(l<0||c+l>o)return null;let u=-a*Oi.dot(Jd);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},_t=class n{constructor(e,t,i,r,s,o,a,c,l,u,d,h,f,g,v,m){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,c,l,u,d,h,f,g,v,m)}set(e,t,i,r,s,o,a,c,l,u,d,h,f,g,v,m){let p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=r,p[1]=s,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=u,p[10]=d,p[14]=h,p[3]=f,p[7]=g,p[11]=v,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,i=e.elements,r=1/cs.setFromMatrixColumn(e,0).length(),s=1/cs.setFromMatrixColumn(e,1).length(),o=1/cs.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),c=Math.cos(r),l=Math.sin(r),u=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){let h=o*u,f=o*d,g=a*u,v=a*d;t[0]=c*u,t[4]=-c*d,t[8]=l,t[1]=f+g*l,t[5]=h-v*l,t[9]=-a*c,t[2]=v-h*l,t[6]=g+f*l,t[10]=o*c}else if(e.order==="YXZ"){let h=c*u,f=c*d,g=l*u,v=l*d;t[0]=h+v*a,t[4]=g*a-f,t[8]=o*l,t[1]=o*d,t[5]=o*u,t[9]=-a,t[2]=f*a-g,t[6]=v+h*a,t[10]=o*c}else if(e.order==="ZXY"){let h=c*u,f=c*d,g=l*u,v=l*d;t[0]=h-v*a,t[4]=-o*d,t[8]=g+f*a,t[1]=f+g*a,t[5]=o*u,t[9]=v-h*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){let h=o*u,f=o*d,g=a*u,v=a*d;t[0]=c*u,t[4]=g*l-f,t[8]=h*l+v,t[1]=c*d,t[5]=v*l+h,t[9]=f*l-g,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){let h=o*c,f=o*l,g=a*c,v=a*l;t[0]=c*u,t[4]=v-h*d,t[8]=g*d+f,t[1]=d,t[5]=o*u,t[9]=-a*u,t[2]=-l*u,t[6]=f*d+g,t[10]=h-v*d}else if(e.order==="XZY"){let h=o*c,f=o*l,g=a*c,v=a*l;t[0]=c*u,t[4]=-d,t[8]=l*u,t[1]=h*d+v,t[5]=o*u,t[9]=f*d-g,t[2]=g*d-f,t[6]=a*u,t[10]=v*d+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(oC,e,aC)}lookAt(e,t,i){let r=this.elements;return fn.subVectors(e,t),fn.lengthSq()===0&&(fn.z=1),fn.normalize(),Fi.crossVectors(i,fn),Fi.lengthSq()===0&&(Math.abs(i.z)===1?fn.x+=1e-4:fn.z+=1e-4,fn.normalize(),Fi.crossVectors(i,fn)),Fi.normalize(),ic.crossVectors(fn,Fi),r[0]=Fi.x,r[4]=ic.x,r[8]=fn.x,r[1]=Fi.y,r[5]=ic.y,r[9]=fn.y,r[2]=Fi.z,r[6]=ic.z,r[10]=fn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],c=i[8],l=i[12],u=i[1],d=i[5],h=i[9],f=i[13],g=i[2],v=i[6],m=i[10],p=i[14],b=i[3],M=i[7],E=i[11],O=i[15],C=r[0],D=r[4],F=r[8],w=r[12],_=r[1],A=r[5],z=r[9],V=r[13],Y=r[2],X=r[6],W=r[10],K=r[14],B=r[3],le=r[7],fe=r[11],_e=r[15];return s[0]=o*C+a*_+c*Y+l*B,s[4]=o*D+a*A+c*X+l*le,s[8]=o*F+a*z+c*W+l*fe,s[12]=o*w+a*V+c*K+l*_e,s[1]=u*C+d*_+h*Y+f*B,s[5]=u*D+d*A+h*X+f*le,s[9]=u*F+d*z+h*W+f*fe,s[13]=u*w+d*V+h*K+f*_e,s[2]=g*C+v*_+m*Y+p*B,s[6]=g*D+v*A+m*X+p*le,s[10]=g*F+v*z+m*W+p*fe,s[14]=g*w+v*V+m*K+p*_e,s[3]=b*C+M*_+E*Y+O*B,s[7]=b*D+M*A+E*X+O*le,s[11]=b*F+M*z+E*W+O*fe,s[15]=b*w+M*V+E*K+O*_e,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],c=e[9],l=e[13],u=e[2],d=e[6],h=e[10],f=e[14],g=e[3],v=e[7],m=e[11],p=e[15];return g*(+s*c*d-r*l*d-s*a*h+i*l*h+r*a*f-i*c*f)+v*(+t*c*f-t*l*h+s*o*h-r*o*f+r*l*u-s*c*u)+m*(+t*l*d-t*a*f-s*o*d+i*o*f+s*a*u-i*l*u)+p*(-r*a*u-t*c*d+t*a*h+r*o*d-i*o*h+i*c*u)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],d=e[9],h=e[10],f=e[11],g=e[12],v=e[13],m=e[14],p=e[15],b=d*m*l-v*h*l+v*c*f-a*m*f-d*c*p+a*h*p,M=g*h*l-u*m*l-g*c*f+o*m*f+u*c*p-o*h*p,E=u*v*l-g*d*l+g*a*f-o*v*f-u*a*p+o*d*p,O=g*d*c-u*v*c-g*a*h+o*v*h+u*a*m-o*d*m,C=t*b+i*M+r*E+s*O;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let D=1/C;return e[0]=b*D,e[1]=(v*h*s-d*m*s-v*r*f+i*m*f+d*r*p-i*h*p)*D,e[2]=(a*m*s-v*c*s+v*r*l-i*m*l-a*r*p+i*c*p)*D,e[3]=(d*c*s-a*h*s-d*r*l+i*h*l+a*r*f-i*c*f)*D,e[4]=M*D,e[5]=(u*m*s-g*h*s+g*r*f-t*m*f-u*r*p+t*h*p)*D,e[6]=(g*c*s-o*m*s-g*r*l+t*m*l+o*r*p-t*c*p)*D,e[7]=(o*h*s-u*c*s+u*r*l-t*h*l-o*r*f+t*c*f)*D,e[8]=E*D,e[9]=(g*d*s-u*v*s-g*i*f+t*v*f+u*i*p-t*d*p)*D,e[10]=(o*v*s-g*a*s+g*i*l-t*v*l-o*i*p+t*a*p)*D,e[11]=(u*a*s-o*d*s-u*i*l+t*d*l+o*i*f-t*a*f)*D,e[12]=O*D,e[13]=(u*v*r-g*d*r+g*i*h-t*v*h-u*i*m+t*d*m)*D,e[14]=(g*a*r-o*v*r-g*i*c+t*v*c+o*i*m-t*a*m)*D,e[15]=(o*d*r-u*a*r+u*i*c-t*d*c-o*i*h+t*a*h)*D,this}scale(e){let t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,c=e.z,l=s*o,u=s*a;return this.set(l*o+i,l*a-r*c,l*c+r*a,0,l*a+r*c,u*a+i,u*c-r*o,0,l*c-r*a,u*c+r*o,s*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){let r=this.elements,s=t._x,o=t._y,a=t._z,c=t._w,l=s+s,u=o+o,d=a+a,h=s*l,f=s*u,g=s*d,v=o*u,m=o*d,p=a*d,b=c*l,M=c*u,E=c*d,O=i.x,C=i.y,D=i.z;return r[0]=(1-(v+p))*O,r[1]=(f+E)*O,r[2]=(g-M)*O,r[3]=0,r[4]=(f-E)*C,r[5]=(1-(h+p))*C,r[6]=(m+b)*C,r[7]=0,r[8]=(g+M)*D,r[9]=(m-b)*D,r[10]=(1-(h+v))*D,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){let r=this.elements,s=cs.set(r[0],r[1],r[2]).length(),o=cs.set(r[4],r[5],r[6]).length(),a=cs.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Ln.copy(this);let l=1/s,u=1/o,d=1/a;return Ln.elements[0]*=l,Ln.elements[1]*=l,Ln.elements[2]*=l,Ln.elements[4]*=u,Ln.elements[5]*=u,Ln.elements[6]*=u,Ln.elements[8]*=d,Ln.elements[9]*=d,Ln.elements[10]*=d,t.setFromRotationMatrix(Ln),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o,a=bi){let c=this.elements,l=2*s/(t-e),u=2*s/(i-r),d=(t+e)/(t-e),h=(i+r)/(i-r),f,g;if(a===bi)f=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===Pc)f=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=h,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=bi){let c=this.elements,l=1/(t-e),u=1/(i-r),d=1/(o-s),h=(t+e)*l,f=(i+r)*u,g,v;if(a===bi)g=(o+s)*d,v=-2*d;else if(a===Pc)g=s*d,v=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-h,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=v,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},cs=new P,Ln=new _t,oC=new P(0,0,0),aC=new P(1,1,1),Fi=new P,ic=new P,fn=new P,p0=new _t,m0=new Wi,wr=(()=>{class n{constructor(t=0,i=0,r=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=r,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,r,s=this._order){return this._x=t,this._y=i,this._z=r,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,r=!0){let s=t.elements,o=s[0],a=s[4],c=s[8],l=s[1],u=s[5],d=s[9],h=s[2],f=s[6],g=s[10];switch(i){case"XYZ":this._y=Math.asin(tn(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-d,g),this._z=Math.atan2(-a,o)):(this._x=Math.atan2(f,u),this._z=0);break;case"YXZ":this._x=Math.asin(-tn(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(c,g),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-h,o),this._z=0);break;case"ZXY":this._x=Math.asin(tn(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,g),this._z=Math.atan2(-a,u)):(this._y=0,this._z=Math.atan2(l,o));break;case"ZYX":this._y=Math.asin(-tn(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,g),this._z=Math.atan2(l,o)):(this._x=0,this._z=Math.atan2(-a,u));break;case"YZX":this._z=Math.asin(tn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,u),this._y=Math.atan2(-h,o)):(this._x=0,this._y=Math.atan2(c,g));break;case"XZY":this._z=Math.asin(-tn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,u),this._y=Math.atan2(c,o)):(this._x=Math.atan2(-d,g),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,r){return p0.makeRotationFromQuaternion(t),this.setFromRotationMatrix(p0,i,r)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return m0.setFromEuler(this),this.setFromQuaternion(m0,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}return n.DEFAULT_ORDER="XYZ",n})(),kc=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},cC=0,g0=new P,ls=new Wi,mi=new _t,rc=new P,vo=new P,lC=new P,uC=new Wi,v0=new P(1,0,0),y0=new P(0,1,0),_0=new P(0,0,1),x0={type:"added"},dC={type:"removed"},us={type:"childadded",child:null},Kd={type:"childremoved",child:null},ti=(()=>{class n extends Gi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:cC++}),this.uuid=Ao(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let t=new P,i=new wr,r=new Wi,s=new P(1,1,1);function o(){r.setFromEuler(i,!1)}function a(){i.setFromQuaternion(r,void 0,!1)}i._onChange(o),r._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new _t},normalMatrix:{value:new Be}}),this.matrix=new _t,this.matrixWorld=new _t,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new kc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return ls.setFromAxisAngle(t,i),this.quaternion.multiply(ls),this}rotateOnWorldAxis(t,i){return ls.setFromAxisAngle(t,i),this.quaternion.premultiply(ls),this}rotateX(t){return this.rotateOnAxis(v0,t)}rotateY(t){return this.rotateOnAxis(y0,t)}rotateZ(t){return this.rotateOnAxis(_0,t)}translateOnAxis(t,i){return g0.copy(t).applyQuaternion(this.quaternion),this.position.add(g0.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(v0,t)}translateY(t){return this.translateOnAxis(y0,t)}translateZ(t){return this.translateOnAxis(_0,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(mi.copy(this.matrixWorld).invert())}lookAt(t,i,r){t.isVector3?rc.copy(t):rc.set(t,i,r);let s=this.parent;this.updateWorldMatrix(!0,!1),vo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?mi.lookAt(vo,rc,this.up):mi.lookAt(rc,vo,this.up),this.quaternion.setFromRotationMatrix(mi),s&&(mi.extractRotation(s.matrixWorld),ls.setFromRotationMatrix(mi),this.quaternion.premultiply(ls.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(x0),us.child=t,this.dispatchEvent(us),us.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}let i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(dC),Kd.child=t,this.dispatchEvent(Kd),Kd.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),mi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),mi.multiply(t.parent.matrixWorld)),t.applyMatrix4(mi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(x0),us.child=t,this.dispatchEvent(us),us.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let r=0,s=this.children.length;r<s;r++){let a=this.children[r].getObjectByProperty(t,i);if(a!==void 0)return a}}getObjectsByProperty(t,i,r=[]){this[t]===i&&r.push(this);let s=this.children;for(let o=0,a=s.length;o<a;o++)s[o].getObjectsByProperty(t,i,r);return r}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(vo,t,lC),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(vo,uC,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);let i=this.children;for(let r=0,s=i.length;r<s;r++)i[r].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let i=this.children;for(let r=0,s=i.length;r<s;r++)i[r].traverseVisible(t)}traverseAncestors(t){let i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let i=this.children;for(let r=0,s=i.length;r<s;r++)i[r].updateMatrixWorld(t)}updateWorldMatrix(t,i){let r=this.parent;if(t===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){let s=this.children;for(let o=0,a=s.length;o<a;o++)s[o].updateWorldMatrix(!1,!0)}}toJSON(t){let i=t===void 0||typeof t=="string",r={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(c=>({boxInitialized:c.boxInitialized,boxMin:c.box.min.toArray(),boxMax:c.box.max.toArray(),sphereInitialized:c.sphereInitialized,sphereRadius:c.sphere.radius,sphereCenter:c.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function o(c,l){return c[l.uuid]===void 0&&(c[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=o(t.geometries,this.geometry);let c=this.geometry.parameters;if(c!==void 0&&c.shapes!==void 0){let l=c.shapes;if(Array.isArray(l))for(let u=0,d=l.length;u<d;u++){let h=l[u];o(t.shapes,h)}else o(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let c=[];for(let l=0,u=this.material.length;l<u;l++)c.push(o(t.materials,this.material[l]));s.material=c}else s.material=o(t.materials,this.material);if(this.children.length>0){s.children=[];for(let c=0;c<this.children.length;c++)s.children.push(this.children[c].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let c=0;c<this.animations.length;c++){let l=this.animations[c];s.animations.push(o(t.animations,l))}}if(i){let c=a(t.geometries),l=a(t.materials),u=a(t.textures),d=a(t.images),h=a(t.shapes),f=a(t.skeletons),g=a(t.animations),v=a(t.nodes);c.length>0&&(r.geometries=c),l.length>0&&(r.materials=l),u.length>0&&(r.textures=u),d.length>0&&(r.images=d),h.length>0&&(r.shapes=h),f.length>0&&(r.skeletons=f),g.length>0&&(r.animations=g),v.length>0&&(r.nodes=v)}return r.object=s,r;function a(c){let l=[];for(let u in c){let d=c[u];delete d.metadata,l.push(d)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let r=0;r<t.children.length;r++){let s=t.children[r];this.add(s.clone())}return this}}return n.DEFAULT_UP=new P(0,1,0),n.DEFAULT_MATRIX_AUTO_UPDATE=!0,n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0,n})(),kn=new P,gi=new P,Qd=new P,vi=new P,ds=new P,hs=new P,M0=new P,eh=new P,th=new P,nh=new P,xs=class n{constructor(e=new P,t=new P,i=new P){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),kn.subVectors(e,t),r.cross(kn);let s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){kn.subVectors(r,t),gi.subVectors(i,t),Qd.subVectors(e,t);let o=kn.dot(kn),a=kn.dot(gi),c=kn.dot(Qd),l=gi.dot(gi),u=gi.dot(Qd),d=o*l-a*a;if(d===0)return s.set(0,0,0),null;let h=1/d,f=(l*c-a*u)*h,g=(o*u-a*c)*h;return s.set(1-f-g,g,f)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,vi)===null?!1:vi.x>=0&&vi.y>=0&&vi.x+vi.y<=1}static getInterpolation(e,t,i,r,s,o,a,c){return this.getBarycoord(e,t,i,r,vi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,vi.x),c.addScaledVector(o,vi.y),c.addScaledVector(a,vi.z),c)}static isFrontFacing(e,t,i,r){return kn.subVectors(i,t),gi.subVectors(e,t),kn.cross(gi).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return kn.subVectors(this.c,this.b),gi.subVectors(this.a,this.b),kn.cross(gi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return n.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,r=this.b,s=this.c,o,a;ds.subVectors(r,i),hs.subVectors(s,i),eh.subVectors(e,i);let c=ds.dot(eh),l=hs.dot(eh);if(c<=0&&l<=0)return t.copy(i);th.subVectors(e,r);let u=ds.dot(th),d=hs.dot(th);if(u>=0&&d<=u)return t.copy(r);let h=c*d-u*l;if(h<=0&&c>=0&&u<=0)return o=c/(c-u),t.copy(i).addScaledVector(ds,o);nh.subVectors(e,s);let f=ds.dot(nh),g=hs.dot(nh);if(g>=0&&f<=g)return t.copy(s);let v=f*l-c*g;if(v<=0&&l>=0&&g<=0)return a=l/(l-g),t.copy(i).addScaledVector(hs,a);let m=u*g-f*d;if(m<=0&&d-u>=0&&f-g>=0)return M0.subVectors(s,r),a=(d-u)/(d-u+(f-g)),t.copy(r).addScaledVector(M0,a);let p=1/(m+v+h);return o=v*p,a=h*p,t.copy(i).addScaledVector(ds,o).addScaledVector(hs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},yy={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Li={h:0,s:0,l:0},sc={h:0,s:0,l:0};function ih(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var qe=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Qn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,nt.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=nt.workingColorSpace){return this.r=e,this.g=t,this.b=i,nt.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=nt.workingColorSpace){if(e=QS(e,1),t=tn(t,0,1),i=tn(i,0,1),t===0)this.r=this.g=this.b=i;else{let s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=ih(o,s,e+1/3),this.g=ih(o,s,e),this.b=ih(o,s,e-1/3)}return nt.toWorkingColorSpace(this,r),this}setStyle(e,t=Qn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Qn){let i=yy[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Es(e.r),this.g=Es(e.g),this.b=Es(e.b),this}copyLinearToSRGB(e){return this.r=Wd(e.r),this.g=Wd(e.g),this.b=Wd(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Qn){return nt.fromWorkingColorSpace($t.copy(this),e),Math.round(tn($t.r*255,0,255))*65536+Math.round(tn($t.g*255,0,255))*256+Math.round(tn($t.b*255,0,255))}getHexString(e=Qn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=nt.workingColorSpace){nt.fromWorkingColorSpace($t.copy(this),t);let i=$t.r,r=$t.g,s=$t.b,o=Math.max(i,r,s),a=Math.min(i,r,s),c,l,u=(a+o)/2;if(a===o)c=0,l=0;else{let d=o-a;switch(l=u<=.5?d/(o+a):d/(2-o-a),o){case i:c=(r-s)/d+(r<s?6:0);break;case r:c=(s-i)/d+2;break;case s:c=(i-r)/d+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=nt.workingColorSpace){return nt.fromWorkingColorSpace($t.copy(this),t),e.r=$t.r,e.g=$t.g,e.b=$t.b,e}getStyle(e=Qn){nt.fromWorkingColorSpace($t.copy(this),e);let t=$t.r,i=$t.g,r=$t.b;return e!==Qn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(Li),this.setHSL(Li.h+e,Li.s+t,Li.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Li),e.getHSL(sc);let i=Hd(Li.h,sc.h,t),r=Hd(Li.s,sc.s,t),s=Hd(Li.l,sc.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},$t=new qe;qe.NAMES=yy;var hC=0,ji=class extends Gi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:hC++}),this.uuid=Ao(),this.name="",this.type="Material",this.blending=bs,this.side=Hi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=mh,this.blendDst=gh,this.blendEquation=vr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new qe(0,0,0),this.blendAlpha=0,this.depthFunc=Dc,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=a0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=is,this.stencilZFail=is,this.stencilZPass=is,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==bs&&(i.blending=this.blending),this.side!==Hi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==mh&&(i.blendSrc=this.blendSrc),this.blendDst!==gh&&(i.blendDst=this.blendDst),this.blendEquation!==vr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Dc&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==a0&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==is&&(i.stencilFail=this.stencilFail),this.stencilZFail!==is&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==is&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){let o=[];for(let a in s){let c=s[a];delete c.metadata,o.push(c)}return o}if(t){let s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},Uc=class extends ji{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new qe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new wr,this.combine=ry,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var At=new P,oc=new Ge,rn=class{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=c0,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Mi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Mo("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)oc.fromBufferAttribute(this,t),oc.applyMatrix3(e),this.setXY(t,oc.x,oc.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)At.fromBufferAttribute(this,t),At.applyMatrix3(e),this.setXYZ(t,At.x,At.y,At.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)At.fromBufferAttribute(this,t),At.applyMatrix4(e),this.setXYZ(t,At.x,At.y,At.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)At.fromBufferAttribute(this,t),At.applyNormalMatrix(e),this.setXYZ(t,At.x,At.y,At.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)At.fromBufferAttribute(this,t),At.transformDirection(e),this.setXYZ(t,At.x,At.y,At.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=fo(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=en(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=fo(t,this.array)),t}setX(e,t){return this.normalized&&(t=en(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=fo(t,this.array)),t}setY(e,t){return this.normalized&&(t=en(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=fo(t,this.array)),t}setZ(e,t){return this.normalized&&(t=en(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=fo(t,this.array)),t}setW(e,t){return this.normalized&&(t=en(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=en(t,this.array),i=en(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=en(t,this.array),i=en(i,this.array),r=en(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=en(t,this.array),i=en(i,this.array),r=en(r,this.array),s=en(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==c0&&(e.usage=this.usage),e}};var Vc=class extends rn{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var Bc=class extends rn{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var Zt=class extends rn{constructor(e,t,i){super(new Float32Array(e),t,i)}},fC=0,wn=new _t,rh=new ti,fs=new P,pn=new br,yo=new br,Ot=new P,Sn=class n extends Gi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:fC++}),this.uuid=Ao(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(vy(e)?Bc:Vc)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let s=new Be().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return wn.makeRotationFromQuaternion(e),this.applyMatrix4(wn),this}rotateX(e){return wn.makeRotationX(e),this.applyMatrix4(wn),this}rotateY(e){return wn.makeRotationY(e),this.applyMatrix4(wn),this}rotateZ(e){return wn.makeRotationZ(e),this.applyMatrix4(wn),this}translate(e,t,i){return wn.makeTranslation(e,t,i),this.applyMatrix4(wn),this}scale(e,t,i){return wn.makeScale(e,t,i),this.applyMatrix4(wn),this}lookAt(e){return rh.lookAt(e),rh.updateMatrix(),this.applyMatrix4(rh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(fs).negate(),this.translate(fs.x,fs.y,fs.z),this}setFromPoints(e){let t=[];for(let i=0,r=e.length;i<r;i++){let s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Zt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new br);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){let s=t[i];pn.setFromBufferAttribute(s),this.morphTargetsRelative?(Ot.addVectors(this.boundingBox.min,pn.min),this.boundingBox.expandByPoint(Ot),Ot.addVectors(this.boundingBox.max,pn.max),this.boundingBox.expandByPoint(Ot)):(this.boundingBox.expandByPoint(pn.min),this.boundingBox.expandByPoint(pn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Is);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(e){let i=this.boundingSphere.center;if(pn.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){let a=t[s];yo.setFromBufferAttribute(a),this.morphTargetsRelative?(Ot.addVectors(pn.min,yo.min),pn.expandByPoint(Ot),Ot.addVectors(pn.max,yo.max),pn.expandByPoint(Ot)):(pn.expandByPoint(yo.min),pn.expandByPoint(yo.max))}pn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Ot.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Ot));if(t)for(let s=0,o=t.length;s<o;s++){let a=t[s],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)Ot.fromBufferAttribute(a,l),c&&(fs.fromBufferAttribute(e,l),Ot.add(fs)),r=Math.max(r,i.distanceToSquared(Ot))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new rn(new Float32Array(4*i.count),4));let o=this.getAttribute("tangent"),a=[],c=[];for(let F=0;F<i.count;F++)a[F]=new P,c[F]=new P;let l=new P,u=new P,d=new P,h=new Ge,f=new Ge,g=new Ge,v=new P,m=new P;function p(F,w,_){l.fromBufferAttribute(i,F),u.fromBufferAttribute(i,w),d.fromBufferAttribute(i,_),h.fromBufferAttribute(s,F),f.fromBufferAttribute(s,w),g.fromBufferAttribute(s,_),u.sub(l),d.sub(l),f.sub(h),g.sub(h);let A=1/(f.x*g.y-g.x*f.y);isFinite(A)&&(v.copy(u).multiplyScalar(g.y).addScaledVector(d,-f.y).multiplyScalar(A),m.copy(d).multiplyScalar(f.x).addScaledVector(u,-g.x).multiplyScalar(A),a[F].add(v),a[w].add(v),a[_].add(v),c[F].add(m),c[w].add(m),c[_].add(m))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let F=0,w=b.length;F<w;++F){let _=b[F],A=_.start,z=_.count;for(let V=A,Y=A+z;V<Y;V+=3)p(e.getX(V+0),e.getX(V+1),e.getX(V+2))}let M=new P,E=new P,O=new P,C=new P;function D(F){O.fromBufferAttribute(r,F),C.copy(O);let w=a[F];M.copy(w),M.sub(O.multiplyScalar(O.dot(w))).normalize(),E.crossVectors(C,w);let A=E.dot(c[F])<0?-1:1;o.setXYZW(F,M.x,M.y,M.z,A)}for(let F=0,w=b.length;F<w;++F){let _=b[F],A=_.start,z=_.count;for(let V=A,Y=A+z;V<Y;V+=3)D(e.getX(V+0)),D(e.getX(V+1)),D(e.getX(V+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new rn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,f=i.count;h<f;h++)i.setXYZ(h,0,0,0);let r=new P,s=new P,o=new P,a=new P,c=new P,l=new P,u=new P,d=new P;if(e)for(let h=0,f=e.count;h<f;h+=3){let g=e.getX(h+0),v=e.getX(h+1),m=e.getX(h+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,v),o.fromBufferAttribute(t,m),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),a.fromBufferAttribute(i,g),c.fromBufferAttribute(i,v),l.fromBufferAttribute(i,m),a.add(u),c.add(u),l.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(v,c.x,c.y,c.z),i.setXYZ(m,l.x,l.y,l.z)}else for(let h=0,f=t.count;h<f;h+=3)r.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Ot.fromBufferAttribute(e,t),Ot.normalize(),e.setXYZ(t,Ot.x,Ot.y,Ot.z)}toNonIndexed(){function e(a,c){let l=a.array,u=a.itemSize,d=a.normalized,h=new l.constructor(c.length*u),f=0,g=0;for(let v=0,m=c.length;v<m;v++){a.isInterleavedBufferAttribute?f=c[v]*a.data.stride+a.offset:f=c[v]*u;for(let p=0;p<u;p++)h[g++]=l[f++]}return new rn(h,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,r=this.attributes;for(let a in r){let c=r[a],l=e(c,i);t.setAttribute(a,l)}let s=this.morphAttributes;for(let a in s){let c=[],l=s[a];for(let u=0,d=l.length;u<d;u++){let h=l[u],f=e(h,i);c.push(f)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let c in i){let l=i[c];e.data.attributes[c]=l.toJSON(e.data)}let r={},s=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],u=[];for(let d=0,h=l.length;d<h;d++){let f=l[d];u.push(f.toJSON(e.data))}u.length>0&&(r[c]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone(t));let r=e.attributes;for(let l in r){let u=r[l];this.setAttribute(l,u.clone(t))}let s=e.morphAttributes;for(let l in s){let u=[],d=s[l];for(let h=0,f=d.length;h<f;h++)u.push(d[h].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let l=0,u=o.length;l<u;l++){let d=o[l];this.addGroup(d.start,d.count,d.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},b0=new _t,hr=new Lc,ac=new Is,w0=new P,ps=new P,ms=new P,gs=new P,sh=new P,cc=new P,lc=new Ge,uc=new Ge,dc=new Ge,E0=new P,S0=new P,C0=new P,hc=new P,fc=new P,mn=class extends ti{constructor(e=new Sn,t=new Uc){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){let i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);let a=this.morphTargetInfluences;if(s&&a){cc.set(0,0,0);for(let c=0,l=s.length;c<l;c++){let u=a[c],d=s[c];u!==0&&(sh.fromBufferAttribute(d,e),o?cc.addScaledVector(sh,u):cc.addScaledVector(sh.sub(t),u))}t.add(cc)}return t}raycast(e,t){let i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ac.copy(i.boundingSphere),ac.applyMatrix4(s),hr.copy(e.ray).recast(e.near),!(ac.containsPoint(hr.origin)===!1&&(hr.intersectSphere(ac,w0)===null||hr.origin.distanceToSquared(w0)>(e.far-e.near)**2))&&(b0.copy(s).invert(),hr.copy(e.ray).applyMatrix4(b0),!(i.boundingBox!==null&&hr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,hr)))}_computeIntersections(e,t,i){let r,s=this.geometry,o=this.material,a=s.index,c=s.attributes.position,l=s.attributes.uv,u=s.attributes.uv1,d=s.attributes.normal,h=s.groups,f=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,v=h.length;g<v;g++){let m=h[g],p=o[m.materialIndex],b=Math.max(m.start,f.start),M=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let E=b,O=M;E<O;E+=3){let C=a.getX(E),D=a.getX(E+1),F=a.getX(E+2);r=pc(this,p,e,i,l,u,d,C,D,F),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{let g=Math.max(0,f.start),v=Math.min(a.count,f.start+f.count);for(let m=g,p=v;m<p;m+=3){let b=a.getX(m),M=a.getX(m+1),E=a.getX(m+2);r=pc(this,o,e,i,l,u,d,b,M,E),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,v=h.length;g<v;g++){let m=h[g],p=o[m.materialIndex],b=Math.max(m.start,f.start),M=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let E=b,O=M;E<O;E+=3){let C=E,D=E+1,F=E+2;r=pc(this,p,e,i,l,u,d,C,D,F),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{let g=Math.max(0,f.start),v=Math.min(c.count,f.start+f.count);for(let m=g,p=v;m<p;m+=3){let b=m,M=m+1,E=m+2;r=pc(this,o,e,i,l,u,d,b,M,E),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}};function pC(n,e,t,i,r,s,o,a){let c;if(e.side===nn?c=i.intersectTriangle(o,s,r,!0,a):c=i.intersectTriangle(r,s,o,e.side===Hi,a),c===null)return null;fc.copy(a),fc.applyMatrix4(n.matrixWorld);let l=t.ray.origin.distanceTo(fc);return l<t.near||l>t.far?null:{distance:l,point:fc.clone(),object:n}}function pc(n,e,t,i,r,s,o,a,c,l){n.getVertexPosition(a,ps),n.getVertexPosition(c,ms),n.getVertexPosition(l,gs);let u=pC(n,e,t,i,ps,ms,gs,hc);if(u){r&&(lc.fromBufferAttribute(r,a),uc.fromBufferAttribute(r,c),dc.fromBufferAttribute(r,l),u.uv=xs.getInterpolation(hc,ps,ms,gs,lc,uc,dc,new Ge)),s&&(lc.fromBufferAttribute(s,a),uc.fromBufferAttribute(s,c),dc.fromBufferAttribute(s,l),u.uv1=xs.getInterpolation(hc,ps,ms,gs,lc,uc,dc,new Ge)),o&&(E0.fromBufferAttribute(o,a),S0.fromBufferAttribute(o,c),C0.fromBufferAttribute(o,l),u.normal=xs.getInterpolation(hc,ps,ms,gs,E0,S0,C0,new P),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));let d={a,b:c,c:l,normal:new P,materialIndex:0};xs.getNormal(ps,ms,gs,d.normal),u.face=d}return u}var Er=class n extends Sn{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};let a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);let c=[],l=[],u=[],d=[],h=0,f=0;g("z","y","x",-1,-1,i,t,e,o,s,0),g("z","y","x",1,-1,i,t,-e,o,s,1),g("x","z","y",1,1,e,i,t,r,o,2),g("x","z","y",1,-1,e,i,-t,r,o,3),g("x","y","z",1,-1,e,t,i,r,s,4),g("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(c),this.setAttribute("position",new Zt(l,3)),this.setAttribute("normal",new Zt(u,3)),this.setAttribute("uv",new Zt(d,2));function g(v,m,p,b,M,E,O,C,D,F,w){let _=E/D,A=O/F,z=E/2,V=O/2,Y=C/2,X=D+1,W=F+1,K=0,B=0,le=new P;for(let fe=0;fe<W;fe++){let _e=fe*A-V;for(let Xe=0;Xe<X;Xe++){let ot=Xe*_-z;le[v]=ot*b,le[m]=_e*M,le[p]=Y,l.push(le.x,le.y,le.z),le[v]=0,le[m]=0,le[p]=C>0?1:-1,u.push(le.x,le.y,le.z),d.push(Xe/D),d.push(1-fe/F),K+=1}}for(let fe=0;fe<F;fe++)for(let _e=0;_e<D;_e++){let Xe=h+_e+X*fe,ot=h+_e+X*(fe+1),G=h+(_e+1)+X*(fe+1),ee=h+(_e+1)+X*fe;c.push(Xe,ot,ee),c.push(ot,G,ee),B+=6}a.addGroup(f,B,w),f+=B,h+=K}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function Rs(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function Yt(n){let e={};for(let t=0;t<n.length;t++){let i=Rs(n[t]);for(let r in i)e[r]=i[r]}return e}function mC(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function _y(n){let e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:nt.workingColorSpace}var gC={clone:Rs,merge:Yt},vC=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,yC=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,ni=class extends ji{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=vC,this.fragmentShader=yC,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Rs(e.uniforms),this.uniformsGroups=mC(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let r in this.uniforms){let o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}},zc=class extends ti{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new _t,this.projectionMatrix=new _t,this.projectionMatrixInverse=new _t,this.coordinateSystem=bi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},ki=new P,D0=new Ge,T0=new Ge,qt=class extends zc{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Xh*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(zd*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Xh*2*Math.atan(Math.tan(zd*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){ki.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ki.x,ki.y).multiplyScalar(-e/ki.z),ki.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ki.x,ki.y).multiplyScalar(-e/ki.z)}getViewSize(e,t){return this.getViewBounds(e,D0,T0),t.subVectors(T0,D0)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(zd*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;s+=o.offsetX*r/c,t-=o.offsetY*i/l,r*=o.width/c,i*=o.height/l}let a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},vs=-90,ys=1,Kh=class extends ti{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new qt(vs,ys,e,t);r.layers=this.layers,this.add(r);let s=new qt(vs,ys,e,t);s.layers=this.layers,this.add(s);let o=new qt(vs,ys,e,t);o.layers=this.layers,this.add(o);let a=new qt(vs,ys,e,t);a.layers=this.layers,this.add(a);let c=new qt(vs,ys,e,t);c.layers=this.layers,this.add(c);let l=new qt(vs,ys,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,c]=t;for(let l of t)this.remove(l);if(e===bi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Pc)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,o,a,c,l,u]=this.children,d=e.getRenderTarget(),h=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,o),e.setRenderTarget(i,2,r),e.render(t,a),e.setRenderTarget(i,3,r),e.render(t,c),e.setRenderTarget(i,4,r),e.render(t,l),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,r),e.render(t,u),e.setRenderTarget(d,h,f),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},Hc=class extends Dr{constructor(e,t,i,r,s,o,a,c,l,u){e=e!==void 0?e:[],t=t!==void 0?t:Cs,super(e,t,i,r,s,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Qh=class extends Ei{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Hc(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Un}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Er(5,5,5),s=new ni({name:"CubemapFromEquirect",uniforms:Rs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:nn,blending:Bi});s.uniforms.tEquirect.value=t;let o=new mn(r,s),a=t.minFilter;return t.minFilter===xr&&(t.minFilter=Un),new Kh(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,r){let s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}},oh=new P,_C=new P,xC=new Be,_i=class{constructor(e=new P(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let r=oh.subVectors(i,t).cross(_C.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let i=e.delta(oh),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||xC.getNormalMatrix(e),r=this.coplanarPoint(oh).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},fr=new Is,mc=new P,Eo=class{constructor(e=new _i,t=new _i,i=new _i,r=new _i,s=new _i,o=new _i){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=bi){let i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],c=r[3],l=r[4],u=r[5],d=r[6],h=r[7],f=r[8],g=r[9],v=r[10],m=r[11],p=r[12],b=r[13],M=r[14],E=r[15];if(i[0].setComponents(c-s,h-l,m-f,E-p).normalize(),i[1].setComponents(c+s,h+l,m+f,E+p).normalize(),i[2].setComponents(c+o,h+u,m+g,E+b).normalize(),i[3].setComponents(c-o,h-u,m-g,E-b).normalize(),i[4].setComponents(c-a,h-d,m-v,E-M).normalize(),t===bi)i[5].setComponents(c+a,h+d,m+v,E+M).normalize();else if(t===Pc)i[5].setComponents(a,d,v,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),fr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),fr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(fr)}intersectsSprite(e){return fr.center.set(0,0,0),fr.radius=.7071067811865476,fr.applyMatrix4(e.matrixWorld),this.intersectsSphere(fr)}intersectsSphere(e){let t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let r=t[i];if(mc.x=r.normal.x>0?e.max.x:e.min.x,mc.y=r.normal.y>0?e.max.y:e.min.y,mc.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(mc)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function xy(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function MC(n){let e=new WeakMap;function t(a,c){let l=a.array,u=a.usage,d=l.byteLength,h=n.createBuffer();n.bindBuffer(c,h),n.bufferData(c,l,u),a.onUploadCallback();let f;if(l instanceof Float32Array)f=n.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=n.SHORT;else if(l instanceof Uint32Array)f=n.UNSIGNED_INT;else if(l instanceof Int32Array)f=n.INT;else if(l instanceof Int8Array)f=n.BYTE;else if(l instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:h,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,c,l){let u=c.array,d=c._updateRange,h=c.updateRanges;if(n.bindBuffer(l,a),d.count===-1&&h.length===0&&n.bufferSubData(l,0,u),h.length!==0){for(let f=0,g=h.length;f<g;f++){let v=h[f];n.bufferSubData(l,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}c.clearUpdateRanges()}d.count!==-1&&(n.bufferSubData(l,d.offset*u.BYTES_PER_ELEMENT,u,d.offset,d.count),d.count=-1),c.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=e.get(a);c&&(n.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,a,c),l.version=a.version}}return{get:r,remove:s,update:o}}var Gc=class n extends Sn{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};let s=e/2,o=t/2,a=Math.floor(i),c=Math.floor(r),l=a+1,u=c+1,d=e/a,h=t/c,f=[],g=[],v=[],m=[];for(let p=0;p<u;p++){let b=p*h-o;for(let M=0;M<l;M++){let E=M*d-s;g.push(E,-b,0),v.push(0,0,1),m.push(M/a),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let b=0;b<a;b++){let M=b+l*p,E=b+l*(p+1),O=b+1+l*(p+1),C=b+1+l*p;f.push(M,E,C),f.push(E,O,C)}this.setIndex(f),this.setAttribute("position",new Zt(g,3)),this.setAttribute("normal",new Zt(v,3)),this.setAttribute("uv",new Zt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}},bC=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,wC=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,EC=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,SC=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,CC=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,DC=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,TC=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,AC=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,IC=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,RC=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,PC=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,NC=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,OC=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,FC=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,LC=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,kC=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,UC=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,VC=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,BC=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,zC=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,HC=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,GC=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,WC=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,jC=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,$C=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,qC=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,XC=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,YC=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ZC=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,JC=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,KC="gl_FragColor = linearToOutputTexel( gl_FragColor );",QC=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,eD=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,tD=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,nD=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,iD=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,rD=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,sD=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,oD=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,aD=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,cD=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,lD=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,uD=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,dD=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,hD=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,fD=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,pD=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,mD=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,gD=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,vD=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,yD=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,_D=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,xD=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,MD=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,bD=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,wD=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ED=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,SD=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,CD=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,DD=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,TD=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,AD=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ID=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,RD=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,PD=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ND=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,OD=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,FD=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,LD=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,kD=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,UD=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,VD=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,BD=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,zD=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,HD=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,GD=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,WD=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,jD=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,$D=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,qD=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,XD=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,YD=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ZD=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,JD=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,KD=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,QD=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,e1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,t1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,n1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,i1=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,r1=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,s1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,o1=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,a1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,c1=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,l1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,u1=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,d1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,h1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,f1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,p1=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,m1=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,g1=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,v1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,y1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,_1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,x1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,M1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,b1=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,w1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,E1=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,S1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,C1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,D1=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,T1=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,A1=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,I1=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,R1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,P1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,N1=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,O1=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,F1=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,L1=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,k1=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,U1=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,V1=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,B1=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,z1=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,H1=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,G1=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,W1=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,j1=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,$1=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,q1=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,X1=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Y1=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Z1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,J1=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,K1=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Q1=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,eT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ve={alphahash_fragment:bC,alphahash_pars_fragment:wC,alphamap_fragment:EC,alphamap_pars_fragment:SC,alphatest_fragment:CC,alphatest_pars_fragment:DC,aomap_fragment:TC,aomap_pars_fragment:AC,batching_pars_vertex:IC,batching_vertex:RC,begin_vertex:PC,beginnormal_vertex:NC,bsdfs:OC,iridescence_fragment:FC,bumpmap_pars_fragment:LC,clipping_planes_fragment:kC,clipping_planes_pars_fragment:UC,clipping_planes_pars_vertex:VC,clipping_planes_vertex:BC,color_fragment:zC,color_pars_fragment:HC,color_pars_vertex:GC,color_vertex:WC,common:jC,cube_uv_reflection_fragment:$C,defaultnormal_vertex:qC,displacementmap_pars_vertex:XC,displacementmap_vertex:YC,emissivemap_fragment:ZC,emissivemap_pars_fragment:JC,colorspace_fragment:KC,colorspace_pars_fragment:QC,envmap_fragment:eD,envmap_common_pars_fragment:tD,envmap_pars_fragment:nD,envmap_pars_vertex:iD,envmap_physical_pars_fragment:pD,envmap_vertex:rD,fog_vertex:sD,fog_pars_vertex:oD,fog_fragment:aD,fog_pars_fragment:cD,gradientmap_pars_fragment:lD,lightmap_pars_fragment:uD,lights_lambert_fragment:dD,lights_lambert_pars_fragment:hD,lights_pars_begin:fD,lights_toon_fragment:mD,lights_toon_pars_fragment:gD,lights_phong_fragment:vD,lights_phong_pars_fragment:yD,lights_physical_fragment:_D,lights_physical_pars_fragment:xD,lights_fragment_begin:MD,lights_fragment_maps:bD,lights_fragment_end:wD,logdepthbuf_fragment:ED,logdepthbuf_pars_fragment:SD,logdepthbuf_pars_vertex:CD,logdepthbuf_vertex:DD,map_fragment:TD,map_pars_fragment:AD,map_particle_fragment:ID,map_particle_pars_fragment:RD,metalnessmap_fragment:PD,metalnessmap_pars_fragment:ND,morphinstance_vertex:OD,morphcolor_vertex:FD,morphnormal_vertex:LD,morphtarget_pars_vertex:kD,morphtarget_vertex:UD,normal_fragment_begin:VD,normal_fragment_maps:BD,normal_pars_fragment:zD,normal_pars_vertex:HD,normal_vertex:GD,normalmap_pars_fragment:WD,clearcoat_normal_fragment_begin:jD,clearcoat_normal_fragment_maps:$D,clearcoat_pars_fragment:qD,iridescence_pars_fragment:XD,opaque_fragment:YD,packing:ZD,premultiplied_alpha_fragment:JD,project_vertex:KD,dithering_fragment:QD,dithering_pars_fragment:e1,roughnessmap_fragment:t1,roughnessmap_pars_fragment:n1,shadowmap_pars_fragment:i1,shadowmap_pars_vertex:r1,shadowmap_vertex:s1,shadowmask_pars_fragment:o1,skinbase_vertex:a1,skinning_pars_vertex:c1,skinning_vertex:l1,skinnormal_vertex:u1,specularmap_fragment:d1,specularmap_pars_fragment:h1,tonemapping_fragment:f1,tonemapping_pars_fragment:p1,transmission_fragment:m1,transmission_pars_fragment:g1,uv_pars_fragment:v1,uv_pars_vertex:y1,uv_vertex:_1,worldpos_vertex:x1,background_vert:M1,background_frag:b1,backgroundCube_vert:w1,backgroundCube_frag:E1,cube_vert:S1,cube_frag:C1,depth_vert:D1,depth_frag:T1,distanceRGBA_vert:A1,distanceRGBA_frag:I1,equirect_vert:R1,equirect_frag:P1,linedashed_vert:N1,linedashed_frag:O1,meshbasic_vert:F1,meshbasic_frag:L1,meshlambert_vert:k1,meshlambert_frag:U1,meshmatcap_vert:V1,meshmatcap_frag:B1,meshnormal_vert:z1,meshnormal_frag:H1,meshphong_vert:G1,meshphong_frag:W1,meshphysical_vert:j1,meshphysical_frag:$1,meshtoon_vert:q1,meshtoon_frag:X1,points_vert:Y1,points_frag:Z1,shadow_vert:J1,shadow_frag:K1,sprite_vert:Q1,sprite_frag:eT},oe={common:{diffuse:{value:new qe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Be},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Be}},envmap:{envMap:{value:null},envMapRotation:{value:new Be},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Be}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Be}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Be},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Be},normalScale:{value:new Ge(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Be},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Be}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Be}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Be}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new qe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new qe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0},uvTransform:{value:new Be}},sprite:{diffuse:{value:new qe(16777215)},opacity:{value:1},center:{value:new Ge(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Be},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0}}},ei={basic:{uniforms:Yt([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.fog]),vertexShader:Ve.meshbasic_vert,fragmentShader:Ve.meshbasic_frag},lambert:{uniforms:Yt([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,oe.lights,{emissive:{value:new qe(0)}}]),vertexShader:Ve.meshlambert_vert,fragmentShader:Ve.meshlambert_frag},phong:{uniforms:Yt([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,oe.lights,{emissive:{value:new qe(0)},specular:{value:new qe(1118481)},shininess:{value:30}}]),vertexShader:Ve.meshphong_vert,fragmentShader:Ve.meshphong_frag},standard:{uniforms:Yt([oe.common,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.roughnessmap,oe.metalnessmap,oe.fog,oe.lights,{emissive:{value:new qe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag},toon:{uniforms:Yt([oe.common,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.gradientmap,oe.fog,oe.lights,{emissive:{value:new qe(0)}}]),vertexShader:Ve.meshtoon_vert,fragmentShader:Ve.meshtoon_frag},matcap:{uniforms:Yt([oe.common,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,{matcap:{value:null}}]),vertexShader:Ve.meshmatcap_vert,fragmentShader:Ve.meshmatcap_frag},points:{uniforms:Yt([oe.points,oe.fog]),vertexShader:Ve.points_vert,fragmentShader:Ve.points_frag},dashed:{uniforms:Yt([oe.common,oe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ve.linedashed_vert,fragmentShader:Ve.linedashed_frag},depth:{uniforms:Yt([oe.common,oe.displacementmap]),vertexShader:Ve.depth_vert,fragmentShader:Ve.depth_frag},normal:{uniforms:Yt([oe.common,oe.bumpmap,oe.normalmap,oe.displacementmap,{opacity:{value:1}}]),vertexShader:Ve.meshnormal_vert,fragmentShader:Ve.meshnormal_frag},sprite:{uniforms:Yt([oe.sprite,oe.fog]),vertexShader:Ve.sprite_vert,fragmentShader:Ve.sprite_frag},background:{uniforms:{uvTransform:{value:new Be},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ve.background_vert,fragmentShader:Ve.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Be}},vertexShader:Ve.backgroundCube_vert,fragmentShader:Ve.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ve.cube_vert,fragmentShader:Ve.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ve.equirect_vert,fragmentShader:Ve.equirect_frag},distanceRGBA:{uniforms:Yt([oe.common,oe.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ve.distanceRGBA_vert,fragmentShader:Ve.distanceRGBA_frag},shadow:{uniforms:Yt([oe.lights,oe.fog,{color:{value:new qe(0)},opacity:{value:1}}]),vertexShader:Ve.shadow_vert,fragmentShader:Ve.shadow_frag}};ei.physical={uniforms:Yt([ei.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Be},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Be},clearcoatNormalScale:{value:new Ge(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Be},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Be},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Be},sheen:{value:0},sheenColor:{value:new qe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Be},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Be},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Be},transmissionSamplerSize:{value:new Ge},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Be},attenuationDistance:{value:0},attenuationColor:{value:new qe(0)},specularColor:{value:new qe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Be},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Be},anisotropyVector:{value:new Ge},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Be}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag};var gc={r:0,b:0,g:0},pr=new wr,tT=new _t;function nT(n,e,t,i,r,s,o){let a=new qe(0),c=s===!0?0:1,l,u,d=null,h=0,f=null;function g(b){let M=b.isScene===!0?b.background:null;return M&&M.isTexture&&(M=(b.backgroundBlurriness>0?t:e).get(M)),M}function v(b){let M=!1,E=g(b);E===null?p(a,c):E&&E.isColor&&(p(E,1),M=!0);let O=n.xr.getEnvironmentBlendMode();O==="additive"?i.buffers.color.setClear(0,0,0,1,o):O==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||M)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(b,M){let E=g(M);E&&(E.isCubeTexture||E.mapping===al)?(u===void 0&&(u=new mn(new Er(1,1,1),new ni({name:"BackgroundCubeMaterial",uniforms:Rs(ei.backgroundCube.uniforms),vertexShader:ei.backgroundCube.vertexShader,fragmentShader:ei.backgroundCube.fragmentShader,side:nn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(O,C,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),pr.copy(M.backgroundRotation),pr.x*=-1,pr.y*=-1,pr.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(pr.y*=-1,pr.z*=-1),u.material.uniforms.envMap.value=E,u.material.uniforms.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(tT.makeRotationFromEuler(pr)),u.material.toneMapped=nt.getTransfer(E.colorSpace)!==dt,(d!==E||h!==E.version||f!==n.toneMapping)&&(u.material.needsUpdate=!0,d=E,h=E.version,f=n.toneMapping),u.layers.enableAll(),b.unshift(u,u.geometry,u.material,0,0,null)):E&&E.isTexture&&(l===void 0&&(l=new mn(new Gc(2,2),new ni({name:"BackgroundMaterial",uniforms:Rs(ei.background.uniforms),vertexShader:ei.background.vertexShader,fragmentShader:ei.background.fragmentShader,side:Hi,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=E,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.toneMapped=nt.getTransfer(E.colorSpace)!==dt,E.matrixAutoUpdate===!0&&E.updateMatrix(),l.material.uniforms.uvTransform.value.copy(E.matrix),(d!==E||h!==E.version||f!==n.toneMapping)&&(l.material.needsUpdate=!0,d=E,h=E.version,f=n.toneMapping),l.layers.enableAll(),b.unshift(l,l.geometry,l.material,0,0,null))}function p(b,M){b.getRGB(gc,_y(n)),i.buffers.color.setClear(gc.r,gc.g,gc.b,M,o)}return{getClearColor:function(){return a},setClearColor:function(b,M=1){a.set(b),c=M,p(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(b){c=b,p(a,c)},render:v,addToRenderList:m}}function iT(n,e){let t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=h(null),s=r,o=!1;function a(_,A,z,V,Y){let X=!1,W=d(V,z,A);s!==W&&(s=W,l(s.object)),X=f(_,V,z,Y),X&&g(_,V,z,Y),Y!==null&&e.update(Y,n.ELEMENT_ARRAY_BUFFER),(X||o)&&(o=!1,E(_,A,z,V),Y!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(Y).buffer))}function c(){return n.createVertexArray()}function l(_){return n.bindVertexArray(_)}function u(_){return n.deleteVertexArray(_)}function d(_,A,z){let V=z.wireframe===!0,Y=i[_.id];Y===void 0&&(Y={},i[_.id]=Y);let X=Y[A.id];X===void 0&&(X={},Y[A.id]=X);let W=X[V];return W===void 0&&(W=h(c()),X[V]=W),W}function h(_){let A=[],z=[],V=[];for(let Y=0;Y<t;Y++)A[Y]=0,z[Y]=0,V[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:A,enabledAttributes:z,attributeDivisors:V,object:_,attributes:{},index:null}}function f(_,A,z,V){let Y=s.attributes,X=A.attributes,W=0,K=z.getAttributes();for(let B in K)if(K[B].location>=0){let fe=Y[B],_e=X[B];if(_e===void 0&&(B==="instanceMatrix"&&_.instanceMatrix&&(_e=_.instanceMatrix),B==="instanceColor"&&_.instanceColor&&(_e=_.instanceColor)),fe===void 0||fe.attribute!==_e||_e&&fe.data!==_e.data)return!0;W++}return s.attributesNum!==W||s.index!==V}function g(_,A,z,V){let Y={},X=A.attributes,W=0,K=z.getAttributes();for(let B in K)if(K[B].location>=0){let fe=X[B];fe===void 0&&(B==="instanceMatrix"&&_.instanceMatrix&&(fe=_.instanceMatrix),B==="instanceColor"&&_.instanceColor&&(fe=_.instanceColor));let _e={};_e.attribute=fe,fe&&fe.data&&(_e.data=fe.data),Y[B]=_e,W++}s.attributes=Y,s.attributesNum=W,s.index=V}function v(){let _=s.newAttributes;for(let A=0,z=_.length;A<z;A++)_[A]=0}function m(_){p(_,0)}function p(_,A){let z=s.newAttributes,V=s.enabledAttributes,Y=s.attributeDivisors;z[_]=1,V[_]===0&&(n.enableVertexAttribArray(_),V[_]=1),Y[_]!==A&&(n.vertexAttribDivisor(_,A),Y[_]=A)}function b(){let _=s.newAttributes,A=s.enabledAttributes;for(let z=0,V=A.length;z<V;z++)A[z]!==_[z]&&(n.disableVertexAttribArray(z),A[z]=0)}function M(_,A,z,V,Y,X,W){W===!0?n.vertexAttribIPointer(_,A,z,Y,X):n.vertexAttribPointer(_,A,z,V,Y,X)}function E(_,A,z,V){v();let Y=V.attributes,X=z.getAttributes(),W=A.defaultAttributeValues;for(let K in X){let B=X[K];if(B.location>=0){let le=Y[K];if(le===void 0&&(K==="instanceMatrix"&&_.instanceMatrix&&(le=_.instanceMatrix),K==="instanceColor"&&_.instanceColor&&(le=_.instanceColor)),le!==void 0){let fe=le.normalized,_e=le.itemSize,Xe=e.get(le);if(Xe===void 0)continue;let ot=Xe.buffer,G=Xe.type,ee=Xe.bytesPerElement,ve=G===n.INT||G===n.UNSIGNED_INT||le.gpuType===Ef;if(le.isInterleavedBufferAttribute){let de=le.data,Ce=de.stride,Ne=le.offset;if(de.isInstancedInterleavedBuffer){for(let We=0;We<B.locationSize;We++)p(B.location+We,de.meshPerAttribute);_.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let We=0;We<B.locationSize;We++)m(B.location+We);n.bindBuffer(n.ARRAY_BUFFER,ot);for(let We=0;We<B.locationSize;We++)M(B.location+We,_e/B.locationSize,G,fe,Ce*ee,(Ne+_e/B.locationSize*We)*ee,ve)}else{if(le.isInstancedBufferAttribute){for(let de=0;de<B.locationSize;de++)p(B.location+de,le.meshPerAttribute);_.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let de=0;de<B.locationSize;de++)m(B.location+de);n.bindBuffer(n.ARRAY_BUFFER,ot);for(let de=0;de<B.locationSize;de++)M(B.location+de,_e/B.locationSize,G,fe,_e*ee,_e/B.locationSize*de*ee,ve)}}else if(W!==void 0){let fe=W[K];if(fe!==void 0)switch(fe.length){case 2:n.vertexAttrib2fv(B.location,fe);break;case 3:n.vertexAttrib3fv(B.location,fe);break;case 4:n.vertexAttrib4fv(B.location,fe);break;default:n.vertexAttrib1fv(B.location,fe)}}}}b()}function O(){F();for(let _ in i){let A=i[_];for(let z in A){let V=A[z];for(let Y in V)u(V[Y].object),delete V[Y];delete A[z]}delete i[_]}}function C(_){if(i[_.id]===void 0)return;let A=i[_.id];for(let z in A){let V=A[z];for(let Y in V)u(V[Y].object),delete V[Y];delete A[z]}delete i[_.id]}function D(_){for(let A in i){let z=i[A];if(z[_.id]===void 0)continue;let V=z[_.id];for(let Y in V)u(V[Y].object),delete V[Y];delete z[_.id]}}function F(){w(),o=!0,s!==r&&(s=r,l(s.object))}function w(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:F,resetDefaultState:w,dispose:O,releaseStatesOfGeometry:C,releaseStatesOfProgram:D,initAttributes:v,enableAttribute:m,disableUnusedAttributes:b}}function rT(n,e,t){let i;function r(l){i=l}function s(l,u){n.drawArrays(i,l,u),t.update(u,i,1)}function o(l,u,d){d!==0&&(n.drawArraysInstanced(i,l,u,d),t.update(u,i,d))}function a(l,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,u,0,d);let f=0;for(let g=0;g<d;g++)f+=u[g];t.update(f,i,1)}function c(l,u,d,h){if(d===0)return;let f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<l.length;g++)o(l[g],u[g],h[g]);else{f.multiDrawArraysInstancedWEBGL(i,l,0,u,0,h,0,d);let g=0;for(let v=0;v<d;v++)g+=u[v];for(let v=0;v<h.length;v++)t.update(g,i,h[v])}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function sT(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){let C=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(C){return!(C!==Vn&&i.convert(C)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(C){let D=C===To&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==wi&&i.convert(C)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==Mi&&!D)}function c(C){if(C==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp",u=c(l);u!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);let d=t.logarithmicDepthBuffer===!0,h=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),f=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_TEXTURE_SIZE),v=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),m=n.getParameter(n.MAX_VERTEX_ATTRIBS),p=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),b=n.getParameter(n.MAX_VARYING_VECTORS),M=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),E=f>0,O=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:d,maxTextures:h,maxVertexTextures:f,maxTextureSize:g,maxCubemapSize:v,maxAttributes:m,maxVertexUniforms:p,maxVaryings:b,maxFragmentUniforms:M,vertexTextures:E,maxSamples:O}}function oT(n){let e=this,t=null,i=0,r=!1,s=!1,o=new _i,a=new Be,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){let f=d.length!==0||h||i!==0||r;return r=h,i=d.length,f},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,h){t=u(d,h,0)},this.setState=function(d,h,f){let g=d.clippingPlanes,v=d.clipIntersection,m=d.clipShadows,p=n.get(d);if(!r||g===null||g.length===0||s&&!m)s?u(null):l();else{let b=s?0:i,M=b*4,E=p.clippingState||null;c.value=E,E=u(g,h,M,f);for(let O=0;O!==M;++O)E[O]=t[O];p.clippingState=E,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=b}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(d,h,f,g){let v=d!==null?d.length:0,m=null;if(v!==0){if(m=c.value,g!==!0||m===null){let p=f+v*4,b=h.matrixWorldInverse;a.getNormalMatrix(b),(m===null||m.length<p)&&(m=new Float32Array(p));for(let M=0,E=f;M!==v;++M,E+=4)o.copy(d[M]).applyMatrix4(b,a),o.normal.toArray(m,E),m[E+3]=o.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}function aT(n){let e=new WeakMap;function t(o,a){return a===vh?o.mapping=Cs:a===yh&&(o.mapping=Ds),o}function i(o){if(o&&o.isTexture){let a=o.mapping;if(a===vh||a===yh)if(e.has(o)){let c=e.get(o).texture;return t(c,o.mapping)}else{let c=o.image;if(c&&c.height>0){let l=new Qh(c.height);return l.fromEquirectangularTexture(n,o),e.set(o,l),o.addEventListener("dispose",r),t(l.texture,o.mapping)}else return null}}return o}function r(o){let a=o.target;a.removeEventListener("dispose",r);let c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}var Wc=class extends zc{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2,s=i-e,o=i+e,a=r+t,c=r-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,o=s+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Ms=4,A0=[.125,.215,.35,.446,.526,.582],yr=20,ah=new Wc,I0=new qe,ch=null,lh=0,uh=0,dh=!1,gr=(1+Math.sqrt(5))/2,_s=1/gr,R0=[new P(-gr,_s,0),new P(gr,_s,0),new P(-_s,0,gr),new P(_s,0,gr),new P(0,gr,-_s),new P(0,gr,_s),new P(-1,1,-1),new P(1,1,-1),new P(-1,1,1),new P(1,1,1)],jc=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){ch=this._renderer.getRenderTarget(),lh=this._renderer.getActiveCubeFace(),uh=this._renderer.getActiveMipmapLevel(),dh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=O0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=N0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ch,lh,uh),this._renderer.xr.enabled=dh,e.scissorTest=!1,vc(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Cs||e.mapping===Ds?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ch=this._renderer.getRenderTarget(),lh=this._renderer.getActiveCubeFace(),uh=this._renderer.getActiveMipmapLevel(),dh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Un,minFilter:Un,generateMipmaps:!1,type:To,format:Vn,colorSpace:$i,depthBuffer:!1},r=P0(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=P0(e,t,i);let{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=cT(s)),this._blurMaterial=lT(s,e,t)}return r}_compileMaterial(e){let t=new mn(this._lodPlanes[0],e);this._renderer.compile(t,ah)}_sceneToCubeUV(e,t,i,r){let a=new qt(90,1,t,i),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,h=u.toneMapping;u.getClearColor(I0),u.toneMapping=zi,u.autoClear=!1;let f=new Uc({name:"PMREM.Background",side:nn,depthWrite:!1,depthTest:!1}),g=new mn(new Er,f),v=!1,m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,v=!0):(f.color.copy(I0),v=!0);for(let p=0;p<6;p++){let b=p%3;b===0?(a.up.set(0,c[p],0),a.lookAt(l[p],0,0)):b===1?(a.up.set(0,0,c[p]),a.lookAt(0,l[p],0)):(a.up.set(0,c[p],0),a.lookAt(0,0,l[p]));let M=this._cubeSize;vc(r,b*M,p>2?M:0,M,M),u.setRenderTarget(r),v&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=h,u.autoClear=d,e.background=m}_textureToCubeUV(e,t){let i=this._renderer,r=e.mapping===Cs||e.mapping===Ds;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=O0()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=N0());let s=r?this._cubemapMaterial:this._equirectMaterial,o=new mn(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;let c=this._cubeSize;vc(t,0,0,3*c,2*c),i.setRenderTarget(t),i.render(o,ah)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;let r=this._lodPlanes.length;for(let s=1;s<r;s++){let o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=R0[(r-s-1)%R0.length];this._blur(e,s-1,s,o,a)}t.autoClear=i}_blur(e,t,i,r,s){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){let c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,d=new mn(this._lodPlanes[r],l),h=l.uniforms,f=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*yr-1),v=s/g,m=isFinite(s)?1+Math.floor(u*v):yr;m>yr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${yr}`);let p=[],b=0;for(let D=0;D<yr;++D){let F=D/v,w=Math.exp(-F*F/2);p.push(w),D===0?b+=w:D<m&&(b+=2*w)}for(let D=0;D<p.length;D++)p[D]=p[D]/b;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=p,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);let{_lodMax:M}=this;h.dTheta.value=g,h.mipInt.value=M-i;let E=this._sizeLods[r],O=3*E*(r>M-Ms?r-M+Ms:0),C=4*(this._cubeSize-E);vc(t,O,C,3*E,2*E),c.setRenderTarget(t),c.render(d,ah)}};function cT(n){let e=[],t=[],i=[],r=n,s=n-Ms+1+A0.length;for(let o=0;o<s;o++){let a=Math.pow(2,r);t.push(a);let c=1/a;o>n-Ms?c=A0[o-n+Ms-1]:o===0&&(c=0),i.push(c);let l=1/(a-2),u=-l,d=1+l,h=[u,u,d,u,d,d,u,u,d,d,u,d],f=6,g=6,v=3,m=2,p=1,b=new Float32Array(v*g*f),M=new Float32Array(m*g*f),E=new Float32Array(p*g*f);for(let C=0;C<f;C++){let D=C%3*2/3-1,F=C>2?0:-1,w=[D,F,0,D+2/3,F,0,D+2/3,F+1,0,D,F,0,D+2/3,F+1,0,D,F+1,0];b.set(w,v*g*C),M.set(h,m*g*C);let _=[C,C,C,C,C,C];E.set(_,p*g*C)}let O=new Sn;O.setAttribute("position",new rn(b,v)),O.setAttribute("uv",new rn(M,m)),O.setAttribute("faceIndex",new rn(E,p)),e.push(O),r>Ms&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function P0(n,e,t){let i=new Ei(n,e,t);return i.texture.mapping=al,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function vc(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function lT(n,e,t){let i=new Float32Array(yr),r=new P(0,1,0);return new ni({name:"SphericalGaussianBlur",defines:{n:yr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Rf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Bi,depthTest:!1,depthWrite:!1})}function N0(){return new ni({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Rf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Bi,depthTest:!1,depthWrite:!1})}function O0(){return new ni({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Rf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Bi,depthTest:!1,depthWrite:!1})}function Rf(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function uT(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){let c=a.mapping,l=c===vh||c===yh,u=c===Cs||c===Ds;if(l||u){let d=e.get(a),h=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==h)return t===null&&(t=new jc(n)),d=l?t.fromEquirectangular(a,d):t.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),d.texture;if(d!==void 0)return d.texture;{let f=a.image;return l&&f&&f.height>0||u&&f&&r(f)?(t===null&&(t=new jc(n)),d=l?t.fromEquirectangular(a):t.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),a.addEventListener("dispose",s),d.texture):null}}}return a}function r(a){let c=0,l=6;for(let u=0;u<l;u++)a[u]!==void 0&&c++;return c===l}function s(a){let c=a.target;c.removeEventListener("dispose",s);let l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function dT(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let r=t(i);return r===null&&Mo("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function hT(n,e,t,i){let r={},s=new WeakMap;function o(d){let h=d.target;h.index!==null&&e.remove(h.index);for(let g in h.attributes)e.remove(h.attributes[g]);for(let g in h.morphAttributes){let v=h.morphAttributes[g];for(let m=0,p=v.length;m<p;m++)e.remove(v[m])}h.removeEventListener("dispose",o),delete r[h.id];let f=s.get(h);f&&(e.remove(f),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(d,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,t.memory.geometries++),h}function c(d){let h=d.attributes;for(let g in h)e.update(h[g],n.ARRAY_BUFFER);let f=d.morphAttributes;for(let g in f){let v=f[g];for(let m=0,p=v.length;m<p;m++)e.update(v[m],n.ARRAY_BUFFER)}}function l(d){let h=[],f=d.index,g=d.attributes.position,v=0;if(f!==null){let b=f.array;v=f.version;for(let M=0,E=b.length;M<E;M+=3){let O=b[M+0],C=b[M+1],D=b[M+2];h.push(O,C,C,D,D,O)}}else if(g!==void 0){let b=g.array;v=g.version;for(let M=0,E=b.length/3-1;M<E;M+=3){let O=M+0,C=M+1,D=M+2;h.push(O,C,C,D,D,O)}}else return;let m=new(vy(h)?Bc:Vc)(h,1);m.version=v;let p=s.get(d);p&&e.remove(p),s.set(d,m)}function u(d){let h=s.get(d);if(h){let f=d.index;f!==null&&h.version<f.version&&l(d)}else l(d);return s.get(d)}return{get:a,update:c,getWireframeAttribute:u}}function fT(n,e,t){let i;function r(h){i=h}let s,o;function a(h){s=h.type,o=h.bytesPerElement}function c(h,f){n.drawElements(i,f,s,h*o),t.update(f,i,1)}function l(h,f,g){g!==0&&(n.drawElementsInstanced(i,f,s,h*o,g),t.update(f,i,g))}function u(h,f,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,s,h,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];t.update(m,i,1)}function d(h,f,g,v){if(g===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<h.length;p++)l(h[p]/o,f[p],v[p]);else{m.multiDrawElementsInstancedWEBGL(i,f,0,s,h,0,v,0,g);let p=0;for(let b=0;b<g;b++)p+=f[b];for(let b=0;b<v.length;b++)t.update(p,i,v[b])}}this.setMode=r,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function pT(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function mT(n,e,t){let i=new WeakMap,r=new ht;function s(o,a,c){let l=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=u!==void 0?u.length:0,h=i.get(a);if(h===void 0||h.count!==d){let _=function(){F.dispose(),i.delete(a),a.removeEventListener("dispose",_)};var f=_;h!==void 0&&h.texture.dispose();let g=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],b=a.morphAttributes.normal||[],M=a.morphAttributes.color||[],E=0;g===!0&&(E=1),v===!0&&(E=2),m===!0&&(E=3);let O=a.attributes.position.count*E,C=1;O>e.maxTextureSize&&(C=Math.ceil(O/e.maxTextureSize),O=e.maxTextureSize);let D=new Float32Array(O*C*4*d),F=new Fc(D,O,C,d);F.type=Mi,F.needsUpdate=!0;let w=E*4;for(let A=0;A<d;A++){let z=p[A],V=b[A],Y=M[A],X=O*C*4*A;for(let W=0;W<z.count;W++){let K=W*w;g===!0&&(r.fromBufferAttribute(z,W),D[X+K+0]=r.x,D[X+K+1]=r.y,D[X+K+2]=r.z,D[X+K+3]=0),v===!0&&(r.fromBufferAttribute(V,W),D[X+K+4]=r.x,D[X+K+5]=r.y,D[X+K+6]=r.z,D[X+K+7]=0),m===!0&&(r.fromBufferAttribute(Y,W),D[X+K+8]=r.x,D[X+K+9]=r.y,D[X+K+10]=r.z,D[X+K+11]=Y.itemSize===4?r.w:1)}}h={count:d,texture:F,size:new Ge(O,C)},i.set(a,h),a.addEventListener("dispose",_)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let g=0;for(let m=0;m<l.length;m++)g+=l[m];let v=a.morphTargetsRelative?1:1-g;c.getUniforms().setValue(n,"morphTargetBaseInfluence",v),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",h.texture,t),c.getUniforms().setValue(n,"morphTargetsTextureSize",h.size)}return{update:s}}function gT(n,e,t,i){let r=new WeakMap;function s(c){let l=i.render.frame,u=c.geometry,d=e.get(c,u);if(r.get(d)!==l&&(e.update(d),r.set(d,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),r.get(c)!==l&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,l))),c.isSkinnedMesh){let h=c.skeleton;r.get(h)!==l&&(h.update(),r.set(h,l))}return d}function o(){r=new WeakMap}function a(c){let l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:s,dispose:o}}var $c=class extends Dr{constructor(e,t,i,r,s,o,a,c,l,u=ws){if(u!==ws&&u!==As)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===ws&&(i=Mr),i===void 0&&u===As&&(i=Ts),super(null,r,s,o,a,c,u,i,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:En,this.minFilter=c!==void 0?c:En,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},My=new Dr,F0=new $c(1,1),by=new Fc,wy=new Jh,Ey=new Hc,L0=[],k0=[],U0=new Float32Array(16),V0=new Float32Array(9),B0=new Float32Array(4);function Ns(n,e,t){let i=n[0];if(i<=0||i>0)return n;let r=e*t,s=L0[r];if(s===void 0&&(s=new Float32Array(r),L0[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function Rt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Pt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function ll(n,e){let t=k0[e];t===void 0&&(t=new Int32Array(e),k0[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function vT(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function yT(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Rt(t,e))return;n.uniform2fv(this.addr,e),Pt(t,e)}}function _T(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Rt(t,e))return;n.uniform3fv(this.addr,e),Pt(t,e)}}function xT(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Rt(t,e))return;n.uniform4fv(this.addr,e),Pt(t,e)}}function MT(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Rt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Pt(t,e)}else{if(Rt(t,i))return;B0.set(i),n.uniformMatrix2fv(this.addr,!1,B0),Pt(t,i)}}function bT(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Rt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Pt(t,e)}else{if(Rt(t,i))return;V0.set(i),n.uniformMatrix3fv(this.addr,!1,V0),Pt(t,i)}}function wT(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Rt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Pt(t,e)}else{if(Rt(t,i))return;U0.set(i),n.uniformMatrix4fv(this.addr,!1,U0),Pt(t,i)}}function ET(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function ST(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Rt(t,e))return;n.uniform2iv(this.addr,e),Pt(t,e)}}function CT(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Rt(t,e))return;n.uniform3iv(this.addr,e),Pt(t,e)}}function DT(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Rt(t,e))return;n.uniform4iv(this.addr,e),Pt(t,e)}}function TT(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function AT(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Rt(t,e))return;n.uniform2uiv(this.addr,e),Pt(t,e)}}function IT(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Rt(t,e))return;n.uniform3uiv(this.addr,e),Pt(t,e)}}function RT(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Rt(t,e))return;n.uniform4uiv(this.addr,e),Pt(t,e)}}function PT(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(F0.compareFunction=gy,s=F0):s=My,t.setTexture2D(e||s,r)}function NT(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||wy,r)}function OT(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||Ey,r)}function FT(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||by,r)}function LT(n){switch(n){case 5126:return vT;case 35664:return yT;case 35665:return _T;case 35666:return xT;case 35674:return MT;case 35675:return bT;case 35676:return wT;case 5124:case 35670:return ET;case 35667:case 35671:return ST;case 35668:case 35672:return CT;case 35669:case 35673:return DT;case 5125:return TT;case 36294:return AT;case 36295:return IT;case 36296:return RT;case 35678:case 36198:case 36298:case 36306:case 35682:return PT;case 35679:case 36299:case 36307:return NT;case 35680:case 36300:case 36308:case 36293:return OT;case 36289:case 36303:case 36311:case 36292:return FT}}function kT(n,e){n.uniform1fv(this.addr,e)}function UT(n,e){let t=Ns(e,this.size,2);n.uniform2fv(this.addr,t)}function VT(n,e){let t=Ns(e,this.size,3);n.uniform3fv(this.addr,t)}function BT(n,e){let t=Ns(e,this.size,4);n.uniform4fv(this.addr,t)}function zT(n,e){let t=Ns(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function HT(n,e){let t=Ns(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function GT(n,e){let t=Ns(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function WT(n,e){n.uniform1iv(this.addr,e)}function jT(n,e){n.uniform2iv(this.addr,e)}function $T(n,e){n.uniform3iv(this.addr,e)}function qT(n,e){n.uniform4iv(this.addr,e)}function XT(n,e){n.uniform1uiv(this.addr,e)}function YT(n,e){n.uniform2uiv(this.addr,e)}function ZT(n,e){n.uniform3uiv(this.addr,e)}function JT(n,e){n.uniform4uiv(this.addr,e)}function KT(n,e,t){let i=this.cache,r=e.length,s=ll(t,r);Rt(i,s)||(n.uniform1iv(this.addr,s),Pt(i,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||My,s[o])}function QT(n,e,t){let i=this.cache,r=e.length,s=ll(t,r);Rt(i,s)||(n.uniform1iv(this.addr,s),Pt(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||wy,s[o])}function eA(n,e,t){let i=this.cache,r=e.length,s=ll(t,r);Rt(i,s)||(n.uniform1iv(this.addr,s),Pt(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||Ey,s[o])}function tA(n,e,t){let i=this.cache,r=e.length,s=ll(t,r);Rt(i,s)||(n.uniform1iv(this.addr,s),Pt(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||by,s[o])}function nA(n){switch(n){case 5126:return kT;case 35664:return UT;case 35665:return VT;case 35666:return BT;case 35674:return zT;case 35675:return HT;case 35676:return GT;case 5124:case 35670:return WT;case 35667:case 35671:return jT;case 35668:case 35672:return $T;case 35669:case 35673:return qT;case 5125:return XT;case 36294:return YT;case 36295:return ZT;case 36296:return JT;case 35678:case 36198:case 36298:case 36306:case 35682:return KT;case 35679:case 36299:case 36307:return QT;case 35680:case 36300:case 36308:case 36293:return eA;case 36289:case 36303:case 36311:case 36292:return tA}}var ef=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=LT(t.type)}},tf=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=nA(t.type)}},nf=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let r=this.seq;for(let s=0,o=r.length;s!==o;++s){let a=r[s];a.setValue(e,t[a.id],i)}}},hh=/(\w+)(\])?(\[|\.)?/g;function z0(n,e){n.seq.push(e),n.map[e.id]=e}function iA(n,e,t){let i=n.name,r=i.length;for(hh.lastIndex=0;;){let s=hh.exec(i),o=hh.lastIndex,a=s[1],c=s[2]==="]",l=s[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===r){z0(t,l===void 0?new ef(a,n,e):new tf(a,n,e));break}else{let d=t.map[a];d===void 0&&(d=new nf(a),z0(t,d)),t=d}}}var Ss=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){let s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);iA(s,o,this)}}setValue(e,t,i,r){let s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){let r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){let a=t[s],c=i[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,r)}}static seqWithValue(e,t){let i=[];for(let r=0,s=e.length;r!==s;++r){let o=e[r];o.id in t&&i.push(o)}return i}};function H0(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var rA=37297,sA=0;function oA(n,e){let t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){let a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}function aA(n){let e=nt.getPrimaries(nt.workingColorSpace),t=nt.getPrimaries(n),i;switch(e===t?i="":e===Rc&&t===Ic?i="LinearDisplayP3ToLinearSRGB":e===Ic&&t===Rc&&(i="LinearSRGBToLinearDisplayP3"),n){case $i:case cl:return[i,"LinearTransferOETF"];case Qn:case If:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function G0(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";let s=/ERROR: 0:(\d+)/.exec(r);if(s){let o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+oA(n.getShaderSource(e),o)}else return r}function cA(n,e){let t=aA(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function lA(n,e){let t;switch(e){case FS:t="Linear";break;case LS:t="Reinhard";break;case kS:t="Cineon";break;case US:t="ACESFilmic";break;case BS:t="AgX";break;case zS:t="Neutral";break;case VS:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var yc=new P;function uA(){nt.getLuminanceCoefficients(yc);let n=yc.x.toFixed(4),e=yc.y.toFixed(4),t=yc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function dA(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(xo).join(`
`)}function hA(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function fA(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){let s=n.getActiveAttrib(e,r),o=s.name,a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function xo(n){return n!==""}function W0(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function j0(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var pA=/^[ \t]*#include +<([\w\d./]+)>/gm;function rf(n){return n.replace(pA,gA)}var mA=new Map;function gA(n,e){let t=Ve[e];if(t===void 0){let i=mA.get(e);if(i!==void 0)t=Ve[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return rf(t)}var vA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function $0(n){return n.replace(vA,yA)}function yA(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function q0(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function _A(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===iy?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===aS?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===yi&&(e="SHADOWMAP_TYPE_VSM"),e}function xA(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Cs:case Ds:e="ENVMAP_TYPE_CUBE";break;case al:e="ENVMAP_TYPE_CUBE_UV";break}return e}function MA(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Ds:e="ENVMAP_MODE_REFRACTION";break}return e}function bA(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case ry:e="ENVMAP_BLENDING_MULTIPLY";break;case NS:e="ENVMAP_BLENDING_MIX";break;case OS:e="ENVMAP_BLENDING_ADD";break}return e}function wA(n){let e=n.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function EA(n,e,t,i){let r=n.getContext(),s=t.defines,o=t.vertexShader,a=t.fragmentShader,c=_A(t),l=xA(t),u=MA(t),d=bA(t),h=wA(t),f=dA(t),g=hA(s),v=r.createProgram(),m,p,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(xo).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(xo).join(`
`),p.length>0&&(p+=`
`)):(m=[q0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(xo).join(`
`),p=[q0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==zi?"#define TONE_MAPPING":"",t.toneMapping!==zi?Ve.tonemapping_pars_fragment:"",t.toneMapping!==zi?lA("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ve.colorspace_pars_fragment,cA("linearToOutputTexel",t.outputColorSpace),uA(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(xo).join(`
`)),o=rf(o),o=W0(o,t),o=j0(o,t),a=rf(a),a=W0(a,t),a=j0(a,t),o=$0(o),a=$0(a),t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===l0?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===l0?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let M=b+m+o,E=b+p+a,O=H0(r,r.VERTEX_SHADER,M),C=H0(r,r.FRAGMENT_SHADER,E);r.attachShader(v,O),r.attachShader(v,C),t.index0AttributeName!==void 0?r.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(v,0,"position"),r.linkProgram(v);function D(A){if(n.debug.checkShaderErrors){let z=r.getProgramInfoLog(v).trim(),V=r.getShaderInfoLog(O).trim(),Y=r.getShaderInfoLog(C).trim(),X=!0,W=!0;if(r.getProgramParameter(v,r.LINK_STATUS)===!1)if(X=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,v,O,C);else{let K=G0(r,O,"vertex"),B=G0(r,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(v,r.VALIDATE_STATUS)+`

Material Name: `+A.name+`
Material Type: `+A.type+`

Program Info Log: `+z+`
`+K+`
`+B)}else z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",z):(V===""||Y==="")&&(W=!1);W&&(A.diagnostics={runnable:X,programLog:z,vertexShader:{log:V,prefix:m},fragmentShader:{log:Y,prefix:p}})}r.deleteShader(O),r.deleteShader(C),F=new Ss(r,v),w=fA(r,v)}let F;this.getUniforms=function(){return F===void 0&&D(this),F};let w;this.getAttributes=function(){return w===void 0&&D(this),w};let _=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return _===!1&&(_=r.getProgramParameter(v,rA)),_},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=sA++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=O,this.fragmentShader=C,this}var SA=0,sf=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new of(e),t.set(e,i)),i}},of=class{constructor(e){this.id=SA++,this.code=e,this.usedTimes=0}};function CA(n,e,t,i,r,s,o){let a=new kc,c=new sf,l=new Set,u=[],d=r.logarithmicDepthBuffer,h=r.vertexTextures,f=r.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(w){return l.add(w),w===0?"uv":`uv${w}`}function m(w,_,A,z,V){let Y=z.fog,X=V.geometry,W=w.isMeshStandardMaterial?z.environment:null,K=(w.isMeshStandardMaterial?t:e).get(w.envMap||W),B=K&&K.mapping===al?K.image.height:null,le=g[w.type];w.precision!==null&&(f=r.getMaxPrecision(w.precision),f!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",f,"instead."));let fe=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,_e=fe!==void 0?fe.length:0,Xe=0;X.morphAttributes.position!==void 0&&(Xe=1),X.morphAttributes.normal!==void 0&&(Xe=2),X.morphAttributes.color!==void 0&&(Xe=3);let ot,G,ee,ve;if(le){let Ke=ei[le];ot=Ke.vertexShader,G=Ke.fragmentShader}else ot=w.vertexShader,G=w.fragmentShader,c.update(w),ee=c.getVertexShaderID(w),ve=c.getFragmentShaderID(w);let de=n.getRenderTarget(),Ce=V.isInstancedMesh===!0,Ne=V.isBatchedMesh===!0,We=!!w.map,mt=!!w.matcap,T=!!K,bt=!!w.aoMap,it=!!w.lightMap,at=!!w.bumpMap,be=!!w.normalMap,wt=!!w.displacementMap,Ie=!!w.emissiveMap,Oe=!!w.metalnessMap,S=!!w.roughnessMap,y=w.anisotropy>0,U=w.clearcoat>0,q=w.dispersion>0,Q=w.iridescence>0,Z=w.sheen>0,we=w.transmission>0,ae=y&&!!w.anisotropyMap,he=U&&!!w.clearcoatMap,Le=U&&!!w.clearcoatNormalMap,ne=U&&!!w.clearcoatRoughnessMap,ue=Q&&!!w.iridescenceMap,Ye=Q&&!!w.iridescenceThicknessMap,Ae=Z&&!!w.sheenColorMap,pe=Z&&!!w.sheenRoughnessMap,Pe=!!w.specularMap,ze=!!w.specularColorMap,ft=!!w.specularIntensityMap,I=we&&!!w.transmissionMap,ie=we&&!!w.thicknessMap,j=!!w.gradientMap,$=!!w.alphaMap,se=w.alphaTest>0,Ee=!!w.alphaHash,Ze=!!w.extensions,Et=zi;w.toneMapped&&(de===null||de.isXRRenderTarget===!0)&&(Et=n.toneMapping);let Ft={shaderID:le,shaderType:w.type,shaderName:w.name,vertexShader:ot,fragmentShader:G,defines:w.defines,customVertexShaderID:ee,customFragmentShaderID:ve,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:f,batching:Ne,batchingColor:Ne&&V._colorsTexture!==null,instancing:Ce,instancingColor:Ce&&V.instanceColor!==null,instancingMorph:Ce&&V.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:de===null?n.outputColorSpace:de.isXRRenderTarget===!0?de.texture.colorSpace:$i,alphaToCoverage:!!w.alphaToCoverage,map:We,matcap:mt,envMap:T,envMapMode:T&&K.mapping,envMapCubeUVHeight:B,aoMap:bt,lightMap:it,bumpMap:at,normalMap:be,displacementMap:h&&wt,emissiveMap:Ie,normalMapObjectSpace:be&&w.normalMapType===jS,normalMapTangentSpace:be&&w.normalMapType===my,metalnessMap:Oe,roughnessMap:S,anisotropy:y,anisotropyMap:ae,clearcoat:U,clearcoatMap:he,clearcoatNormalMap:Le,clearcoatRoughnessMap:ne,dispersion:q,iridescence:Q,iridescenceMap:ue,iridescenceThicknessMap:Ye,sheen:Z,sheenColorMap:Ae,sheenRoughnessMap:pe,specularMap:Pe,specularColorMap:ze,specularIntensityMap:ft,transmission:we,transmissionMap:I,thicknessMap:ie,gradientMap:j,opaque:w.transparent===!1&&w.blending===bs&&w.alphaToCoverage===!1,alphaMap:$,alphaTest:se,alphaHash:Ee,combine:w.combine,mapUv:We&&v(w.map.channel),aoMapUv:bt&&v(w.aoMap.channel),lightMapUv:it&&v(w.lightMap.channel),bumpMapUv:at&&v(w.bumpMap.channel),normalMapUv:be&&v(w.normalMap.channel),displacementMapUv:wt&&v(w.displacementMap.channel),emissiveMapUv:Ie&&v(w.emissiveMap.channel),metalnessMapUv:Oe&&v(w.metalnessMap.channel),roughnessMapUv:S&&v(w.roughnessMap.channel),anisotropyMapUv:ae&&v(w.anisotropyMap.channel),clearcoatMapUv:he&&v(w.clearcoatMap.channel),clearcoatNormalMapUv:Le&&v(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ne&&v(w.clearcoatRoughnessMap.channel),iridescenceMapUv:ue&&v(w.iridescenceMap.channel),iridescenceThicknessMapUv:Ye&&v(w.iridescenceThicknessMap.channel),sheenColorMapUv:Ae&&v(w.sheenColorMap.channel),sheenRoughnessMapUv:pe&&v(w.sheenRoughnessMap.channel),specularMapUv:Pe&&v(w.specularMap.channel),specularColorMapUv:ze&&v(w.specularColorMap.channel),specularIntensityMapUv:ft&&v(w.specularIntensityMap.channel),transmissionMapUv:I&&v(w.transmissionMap.channel),thicknessMapUv:ie&&v(w.thicknessMap.channel),alphaMapUv:$&&v(w.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&(be||y),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,pointsUvs:V.isPoints===!0&&!!X.attributes.uv&&(We||$),fog:!!Y,useFog:w.fog===!0,fogExp2:!!Y&&Y.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:V.isSkinnedMesh===!0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:_e,morphTextureStride:Xe,numDirLights:_.directional.length,numPointLights:_.point.length,numSpotLights:_.spot.length,numSpotLightMaps:_.spotLightMap.length,numRectAreaLights:_.rectArea.length,numHemiLights:_.hemi.length,numDirLightShadows:_.directionalShadowMap.length,numPointLightShadows:_.pointShadowMap.length,numSpotLightShadows:_.spotShadowMap.length,numSpotLightShadowsWithMaps:_.numSpotLightShadowsWithMaps,numLightProbes:_.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:w.dithering,shadowMapEnabled:n.shadowMap.enabled&&A.length>0,shadowMapType:n.shadowMap.type,toneMapping:Et,decodeVideoTexture:We&&w.map.isVideoTexture===!0&&nt.getTransfer(w.map.colorSpace)===dt,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===xi,flipSided:w.side===nn,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:Ze&&w.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ze&&w.extensions.multiDraw===!0||Ne)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return Ft.vertexUv1s=l.has(1),Ft.vertexUv2s=l.has(2),Ft.vertexUv3s=l.has(3),l.clear(),Ft}function p(w){let _=[];if(w.shaderID?_.push(w.shaderID):(_.push(w.customVertexShaderID),_.push(w.customFragmentShaderID)),w.defines!==void 0)for(let A in w.defines)_.push(A),_.push(w.defines[A]);return w.isRawShaderMaterial===!1&&(b(_,w),M(_,w),_.push(n.outputColorSpace)),_.push(w.customProgramCacheKey),_.join()}function b(w,_){w.push(_.precision),w.push(_.outputColorSpace),w.push(_.envMapMode),w.push(_.envMapCubeUVHeight),w.push(_.mapUv),w.push(_.alphaMapUv),w.push(_.lightMapUv),w.push(_.aoMapUv),w.push(_.bumpMapUv),w.push(_.normalMapUv),w.push(_.displacementMapUv),w.push(_.emissiveMapUv),w.push(_.metalnessMapUv),w.push(_.roughnessMapUv),w.push(_.anisotropyMapUv),w.push(_.clearcoatMapUv),w.push(_.clearcoatNormalMapUv),w.push(_.clearcoatRoughnessMapUv),w.push(_.iridescenceMapUv),w.push(_.iridescenceThicknessMapUv),w.push(_.sheenColorMapUv),w.push(_.sheenRoughnessMapUv),w.push(_.specularMapUv),w.push(_.specularColorMapUv),w.push(_.specularIntensityMapUv),w.push(_.transmissionMapUv),w.push(_.thicknessMapUv),w.push(_.combine),w.push(_.fogExp2),w.push(_.sizeAttenuation),w.push(_.morphTargetsCount),w.push(_.morphAttributeCount),w.push(_.numDirLights),w.push(_.numPointLights),w.push(_.numSpotLights),w.push(_.numSpotLightMaps),w.push(_.numHemiLights),w.push(_.numRectAreaLights),w.push(_.numDirLightShadows),w.push(_.numPointLightShadows),w.push(_.numSpotLightShadows),w.push(_.numSpotLightShadowsWithMaps),w.push(_.numLightProbes),w.push(_.shadowMapType),w.push(_.toneMapping),w.push(_.numClippingPlanes),w.push(_.numClipIntersection),w.push(_.depthPacking)}function M(w,_){a.disableAll(),_.supportsVertexTextures&&a.enable(0),_.instancing&&a.enable(1),_.instancingColor&&a.enable(2),_.instancingMorph&&a.enable(3),_.matcap&&a.enable(4),_.envMap&&a.enable(5),_.normalMapObjectSpace&&a.enable(6),_.normalMapTangentSpace&&a.enable(7),_.clearcoat&&a.enable(8),_.iridescence&&a.enable(9),_.alphaTest&&a.enable(10),_.vertexColors&&a.enable(11),_.vertexAlphas&&a.enable(12),_.vertexUv1s&&a.enable(13),_.vertexUv2s&&a.enable(14),_.vertexUv3s&&a.enable(15),_.vertexTangents&&a.enable(16),_.anisotropy&&a.enable(17),_.alphaHash&&a.enable(18),_.batching&&a.enable(19),_.dispersion&&a.enable(20),_.batchingColor&&a.enable(21),w.push(a.mask),a.disableAll(),_.fog&&a.enable(0),_.useFog&&a.enable(1),_.flatShading&&a.enable(2),_.logarithmicDepthBuffer&&a.enable(3),_.skinning&&a.enable(4),_.morphTargets&&a.enable(5),_.morphNormals&&a.enable(6),_.morphColors&&a.enable(7),_.premultipliedAlpha&&a.enable(8),_.shadowMapEnabled&&a.enable(9),_.doubleSided&&a.enable(10),_.flipSided&&a.enable(11),_.useDepthPacking&&a.enable(12),_.dithering&&a.enable(13),_.transmission&&a.enable(14),_.sheen&&a.enable(15),_.opaque&&a.enable(16),_.pointsUvs&&a.enable(17),_.decodeVideoTexture&&a.enable(18),_.alphaToCoverage&&a.enable(19),w.push(a.mask)}function E(w){let _=g[w.type],A;if(_){let z=ei[_];A=gC.clone(z.uniforms)}else A=w.uniforms;return A}function O(w,_){let A;for(let z=0,V=u.length;z<V;z++){let Y=u[z];if(Y.cacheKey===_){A=Y,++A.usedTimes;break}}return A===void 0&&(A=new EA(n,_,w,s),u.push(A)),A}function C(w){if(--w.usedTimes===0){let _=u.indexOf(w);u[_]=u[u.length-1],u.pop(),w.destroy()}}function D(w){c.remove(w)}function F(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:E,acquireProgram:O,releaseProgram:C,releaseShaderCache:D,programs:u,dispose:F}}function DA(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function r(o,a,c){n.get(o)[a]=c}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function TA(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function X0(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Y0(){let n=[],e=0,t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(d,h,f,g,v,m){let p=n[e];return p===void 0?(p={id:d.id,object:d,geometry:h,material:f,groupOrder:g,renderOrder:d.renderOrder,z:v,group:m},n[e]=p):(p.id=d.id,p.object=d,p.geometry=h,p.material=f,p.groupOrder=g,p.renderOrder=d.renderOrder,p.z=v,p.group=m),e++,p}function a(d,h,f,g,v,m){let p=o(d,h,f,g,v,m);f.transmission>0?i.push(p):f.transparent===!0?r.push(p):t.push(p)}function c(d,h,f,g,v,m){let p=o(d,h,f,g,v,m);f.transmission>0?i.unshift(p):f.transparent===!0?r.unshift(p):t.unshift(p)}function l(d,h){t.length>1&&t.sort(d||TA),i.length>1&&i.sort(h||X0),r.length>1&&r.sort(h||X0)}function u(){for(let d=e,h=n.length;d<h;d++){let f=n[d];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:c,finish:u,sort:l}}function AA(){let n=new WeakMap;function e(i,r){let s=n.get(i),o;return s===void 0?(o=new Y0,n.set(i,[o])):r>=s.length?(o=new Y0,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function IA(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new P,color:new qe};break;case"SpotLight":t={position:new P,direction:new P,color:new qe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new P,color:new qe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new P,skyColor:new qe,groundColor:new qe};break;case"RectAreaLight":t={color:new qe,position:new P,halfWidth:new P,halfHeight:new P};break}return n[e.id]=t,t}}}function RA(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ge};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ge};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ge,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var PA=0;function NA(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function OA(n){let e=new IA,t=RA(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new P);let r=new P,s=new _t,o=new _t;function a(l){let u=0,d=0,h=0;for(let w=0;w<9;w++)i.probe[w].set(0,0,0);let f=0,g=0,v=0,m=0,p=0,b=0,M=0,E=0,O=0,C=0,D=0;l.sort(NA);for(let w=0,_=l.length;w<_;w++){let A=l[w],z=A.color,V=A.intensity,Y=A.distance,X=A.shadow&&A.shadow.map?A.shadow.map.texture:null;if(A.isAmbientLight)u+=z.r*V,d+=z.g*V,h+=z.b*V;else if(A.isLightProbe){for(let W=0;W<9;W++)i.probe[W].addScaledVector(A.sh.coefficients[W],V);D++}else if(A.isDirectionalLight){let W=e.get(A);if(W.color.copy(A.color).multiplyScalar(A.intensity),A.castShadow){let K=A.shadow,B=t.get(A);B.shadowIntensity=K.intensity,B.shadowBias=K.bias,B.shadowNormalBias=K.normalBias,B.shadowRadius=K.radius,B.shadowMapSize=K.mapSize,i.directionalShadow[f]=B,i.directionalShadowMap[f]=X,i.directionalShadowMatrix[f]=A.shadow.matrix,b++}i.directional[f]=W,f++}else if(A.isSpotLight){let W=e.get(A);W.position.setFromMatrixPosition(A.matrixWorld),W.color.copy(z).multiplyScalar(V),W.distance=Y,W.coneCos=Math.cos(A.angle),W.penumbraCos=Math.cos(A.angle*(1-A.penumbra)),W.decay=A.decay,i.spot[v]=W;let K=A.shadow;if(A.map&&(i.spotLightMap[O]=A.map,O++,K.updateMatrices(A),A.castShadow&&C++),i.spotLightMatrix[v]=K.matrix,A.castShadow){let B=t.get(A);B.shadowIntensity=K.intensity,B.shadowBias=K.bias,B.shadowNormalBias=K.normalBias,B.shadowRadius=K.radius,B.shadowMapSize=K.mapSize,i.spotShadow[v]=B,i.spotShadowMap[v]=X,E++}v++}else if(A.isRectAreaLight){let W=e.get(A);W.color.copy(z).multiplyScalar(V),W.halfWidth.set(A.width*.5,0,0),W.halfHeight.set(0,A.height*.5,0),i.rectArea[m]=W,m++}else if(A.isPointLight){let W=e.get(A);if(W.color.copy(A.color).multiplyScalar(A.intensity),W.distance=A.distance,W.decay=A.decay,A.castShadow){let K=A.shadow,B=t.get(A);B.shadowIntensity=K.intensity,B.shadowBias=K.bias,B.shadowNormalBias=K.normalBias,B.shadowRadius=K.radius,B.shadowMapSize=K.mapSize,B.shadowCameraNear=K.camera.near,B.shadowCameraFar=K.camera.far,i.pointShadow[g]=B,i.pointShadowMap[g]=X,i.pointShadowMatrix[g]=A.shadow.matrix,M++}i.point[g]=W,g++}else if(A.isHemisphereLight){let W=e.get(A);W.skyColor.copy(A.color).multiplyScalar(V),W.groundColor.copy(A.groundColor).multiplyScalar(V),i.hemi[p]=W,p++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=oe.LTC_FLOAT_1,i.rectAreaLTC2=oe.LTC_FLOAT_2):(i.rectAreaLTC1=oe.LTC_HALF_1,i.rectAreaLTC2=oe.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=d,i.ambient[2]=h;let F=i.hash;(F.directionalLength!==f||F.pointLength!==g||F.spotLength!==v||F.rectAreaLength!==m||F.hemiLength!==p||F.numDirectionalShadows!==b||F.numPointShadows!==M||F.numSpotShadows!==E||F.numSpotMaps!==O||F.numLightProbes!==D)&&(i.directional.length=f,i.spot.length=v,i.rectArea.length=m,i.point.length=g,i.hemi.length=p,i.directionalShadow.length=b,i.directionalShadowMap.length=b,i.pointShadow.length=M,i.pointShadowMap.length=M,i.spotShadow.length=E,i.spotShadowMap.length=E,i.directionalShadowMatrix.length=b,i.pointShadowMatrix.length=M,i.spotLightMatrix.length=E+O-C,i.spotLightMap.length=O,i.numSpotLightShadowsWithMaps=C,i.numLightProbes=D,F.directionalLength=f,F.pointLength=g,F.spotLength=v,F.rectAreaLength=m,F.hemiLength=p,F.numDirectionalShadows=b,F.numPointShadows=M,F.numSpotShadows=E,F.numSpotMaps=O,F.numLightProbes=D,i.version=PA++)}function c(l,u){let d=0,h=0,f=0,g=0,v=0,m=u.matrixWorldInverse;for(let p=0,b=l.length;p<b;p++){let M=l[p];if(M.isDirectionalLight){let E=i.directional[d];E.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(m),d++}else if(M.isSpotLight){let E=i.spot[f];E.position.setFromMatrixPosition(M.matrixWorld),E.position.applyMatrix4(m),E.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(m),f++}else if(M.isRectAreaLight){let E=i.rectArea[g];E.position.setFromMatrixPosition(M.matrixWorld),E.position.applyMatrix4(m),o.identity(),s.copy(M.matrixWorld),s.premultiply(m),o.extractRotation(s),E.halfWidth.set(M.width*.5,0,0),E.halfHeight.set(0,M.height*.5,0),E.halfWidth.applyMatrix4(o),E.halfHeight.applyMatrix4(o),g++}else if(M.isPointLight){let E=i.point[h];E.position.setFromMatrixPosition(M.matrixWorld),E.position.applyMatrix4(m),h++}else if(M.isHemisphereLight){let E=i.hemi[v];E.direction.setFromMatrixPosition(M.matrixWorld),E.direction.transformDirection(m),v++}}}return{setup:a,setupView:c,state:i}}function Z0(n){let e=new OA(n),t=[],i=[];function r(u){l.camera=u,t.length=0,i.length=0}function s(u){t.push(u)}function o(u){i.push(u)}function a(){e.setup(t)}function c(u){e.setupView(t,u)}let l={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:l,setupLights:a,setupLightsView:c,pushLight:s,pushShadow:o}}function FA(n){let e=new WeakMap;function t(r,s=0){let o=e.get(r),a;return o===void 0?(a=new Z0(n),e.set(r,[a])):s>=o.length?(a=new Z0(n),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:t,dispose:i}}var af=class extends ji{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=GS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},cf=class extends ji{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},LA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,kA=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function UA(n,e,t){let i=new Eo,r=new Ge,s=new Ge,o=new ht,a=new af({depthPacking:WS}),c=new cf,l={},u=t.maxTextureSize,d={[Hi]:nn,[nn]:Hi,[xi]:xi},h=new ni({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ge},radius:{value:4}},vertexShader:LA,fragmentShader:kA}),f=h.clone();f.defines.HORIZONTAL_PASS=1;let g=new Sn;g.setAttribute("position",new rn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new mn(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=iy;let p=this.type;this.render=function(C,D,F){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||C.length===0)return;let w=n.getRenderTarget(),_=n.getActiveCubeFace(),A=n.getActiveMipmapLevel(),z=n.state;z.setBlending(Bi),z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);let V=p!==yi&&this.type===yi,Y=p===yi&&this.type!==yi;for(let X=0,W=C.length;X<W;X++){let K=C[X],B=K.shadow;if(B===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;r.copy(B.mapSize);let le=B.getFrameExtents();if(r.multiply(le),s.copy(B.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/le.x),r.x=s.x*le.x,B.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/le.y),r.y=s.y*le.y,B.mapSize.y=s.y)),B.map===null||V===!0||Y===!0){let _e=this.type!==yi?{minFilter:En,magFilter:En}:{};B.map!==null&&B.map.dispose(),B.map=new Ei(r.x,r.y,_e),B.map.texture.name=K.name+".shadowMap",B.camera.updateProjectionMatrix()}n.setRenderTarget(B.map),n.clear();let fe=B.getViewportCount();for(let _e=0;_e<fe;_e++){let Xe=B.getViewport(_e);o.set(s.x*Xe.x,s.y*Xe.y,s.x*Xe.z,s.y*Xe.w),z.viewport(o),B.updateMatrices(K,_e),i=B.getFrustum(),E(D,F,B.camera,K,this.type)}B.isPointLightShadow!==!0&&this.type===yi&&b(B,F),B.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(w,_,A)};function b(C,D){let F=e.update(v);h.defines.VSM_SAMPLES!==C.blurSamples&&(h.defines.VSM_SAMPLES=C.blurSamples,f.defines.VSM_SAMPLES=C.blurSamples,h.needsUpdate=!0,f.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new Ei(r.x,r.y)),h.uniforms.shadow_pass.value=C.map.texture,h.uniforms.resolution.value=C.mapSize,h.uniforms.radius.value=C.radius,n.setRenderTarget(C.mapPass),n.clear(),n.renderBufferDirect(D,null,F,h,v,null),f.uniforms.shadow_pass.value=C.mapPass.texture,f.uniforms.resolution.value=C.mapSize,f.uniforms.radius.value=C.radius,n.setRenderTarget(C.map),n.clear(),n.renderBufferDirect(D,null,F,f,v,null)}function M(C,D,F,w){let _=null,A=F.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(A!==void 0)_=A;else if(_=F.isPointLight===!0?c:a,n.localClippingEnabled&&D.clipShadows===!0&&Array.isArray(D.clippingPlanes)&&D.clippingPlanes.length!==0||D.displacementMap&&D.displacementScale!==0||D.alphaMap&&D.alphaTest>0||D.map&&D.alphaTest>0){let z=_.uuid,V=D.uuid,Y=l[z];Y===void 0&&(Y={},l[z]=Y);let X=Y[V];X===void 0&&(X=_.clone(),Y[V]=X,D.addEventListener("dispose",O)),_=X}if(_.visible=D.visible,_.wireframe=D.wireframe,w===yi?_.side=D.shadowSide!==null?D.shadowSide:D.side:_.side=D.shadowSide!==null?D.shadowSide:d[D.side],_.alphaMap=D.alphaMap,_.alphaTest=D.alphaTest,_.map=D.map,_.clipShadows=D.clipShadows,_.clippingPlanes=D.clippingPlanes,_.clipIntersection=D.clipIntersection,_.displacementMap=D.displacementMap,_.displacementScale=D.displacementScale,_.displacementBias=D.displacementBias,_.wireframeLinewidth=D.wireframeLinewidth,_.linewidth=D.linewidth,F.isPointLight===!0&&_.isMeshDistanceMaterial===!0){let z=n.properties.get(_);z.light=F}return _}function E(C,D,F,w,_){if(C.visible===!1)return;if(C.layers.test(D.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&_===yi)&&(!C.frustumCulled||i.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,C.matrixWorld);let V=e.update(C),Y=C.material;if(Array.isArray(Y)){let X=V.groups;for(let W=0,K=X.length;W<K;W++){let B=X[W],le=Y[B.materialIndex];if(le&&le.visible){let fe=M(C,le,w,_);C.onBeforeShadow(n,C,D,F,V,fe,B),n.renderBufferDirect(F,null,V,fe,C,B),C.onAfterShadow(n,C,D,F,V,fe,B)}}}else if(Y.visible){let X=M(C,Y,w,_);C.onBeforeShadow(n,C,D,F,V,X,null),n.renderBufferDirect(F,null,V,X,C,null),C.onAfterShadow(n,C,D,F,V,X,null)}}let z=C.children;for(let V=0,Y=z.length;V<Y;V++)E(z[V],D,F,w,_)}function O(C){C.target.removeEventListener("dispose",O);for(let F in l){let w=l[F],_=C.target.uuid;_ in w&&(w[_].dispose(),delete w[_])}}}function VA(n){function e(){let I=!1,ie=new ht,j=null,$=new ht(0,0,0,0);return{setMask:function(se){j!==se&&!I&&(n.colorMask(se,se,se,se),j=se)},setLocked:function(se){I=se},setClear:function(se,Ee,Ze,Et,Ft){Ft===!0&&(se*=Et,Ee*=Et,Ze*=Et),ie.set(se,Ee,Ze,Et),$.equals(ie)===!1&&(n.clearColor(se,Ee,Ze,Et),$.copy(ie))},reset:function(){I=!1,j=null,$.set(-1,0,0,0)}}}function t(){let I=!1,ie=null,j=null,$=null;return{setTest:function(se){se?ve(n.DEPTH_TEST):de(n.DEPTH_TEST)},setMask:function(se){ie!==se&&!I&&(n.depthMask(se),ie=se)},setFunc:function(se){if(j!==se){switch(se){case CS:n.depthFunc(n.NEVER);break;case DS:n.depthFunc(n.ALWAYS);break;case TS:n.depthFunc(n.LESS);break;case Dc:n.depthFunc(n.LEQUAL);break;case AS:n.depthFunc(n.EQUAL);break;case IS:n.depthFunc(n.GEQUAL);break;case RS:n.depthFunc(n.GREATER);break;case PS:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}j=se}},setLocked:function(se){I=se},setClear:function(se){$!==se&&(n.clearDepth(se),$=se)},reset:function(){I=!1,ie=null,j=null,$=null}}}function i(){let I=!1,ie=null,j=null,$=null,se=null,Ee=null,Ze=null,Et=null,Ft=null;return{setTest:function(Ke){I||(Ke?ve(n.STENCIL_TEST):de(n.STENCIL_TEST))},setMask:function(Ke){ie!==Ke&&!I&&(n.stencilMask(Ke),ie=Ke)},setFunc:function(Ke,ii,zn){(j!==Ke||$!==ii||se!==zn)&&(n.stencilFunc(Ke,ii,zn),j=Ke,$=ii,se=zn)},setOp:function(Ke,ii,zn){(Ee!==Ke||Ze!==ii||Et!==zn)&&(n.stencilOp(Ke,ii,zn),Ee=Ke,Ze=ii,Et=zn)},setLocked:function(Ke){I=Ke},setClear:function(Ke){Ft!==Ke&&(n.clearStencil(Ke),Ft=Ke)},reset:function(){I=!1,ie=null,j=null,$=null,se=null,Ee=null,Ze=null,Et=null,Ft=null}}}let r=new e,s=new t,o=new i,a=new WeakMap,c=new WeakMap,l={},u={},d=new WeakMap,h=[],f=null,g=!1,v=null,m=null,p=null,b=null,M=null,E=null,O=null,C=new qe(0,0,0),D=0,F=!1,w=null,_=null,A=null,z=null,V=null,Y=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),X=!1,W=0,K=n.getParameter(n.VERSION);K.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(K)[1]),X=W>=1):K.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(K)[1]),X=W>=2);let B=null,le={},fe=n.getParameter(n.SCISSOR_BOX),_e=n.getParameter(n.VIEWPORT),Xe=new ht().fromArray(fe),ot=new ht().fromArray(_e);function G(I,ie,j,$){let se=new Uint8Array(4),Ee=n.createTexture();n.bindTexture(I,Ee),n.texParameteri(I,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(I,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ze=0;Ze<j;Ze++)I===n.TEXTURE_3D||I===n.TEXTURE_2D_ARRAY?n.texImage3D(ie,0,n.RGBA,1,1,$,0,n.RGBA,n.UNSIGNED_BYTE,se):n.texImage2D(ie+Ze,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,se);return Ee}let ee={};ee[n.TEXTURE_2D]=G(n.TEXTURE_2D,n.TEXTURE_2D,1),ee[n.TEXTURE_CUBE_MAP]=G(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),ee[n.TEXTURE_2D_ARRAY]=G(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),ee[n.TEXTURE_3D]=G(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),o.setClear(0),ve(n.DEPTH_TEST),s.setFunc(Dc),at(!1),be(Qv),ve(n.CULL_FACE),bt(Bi);function ve(I){l[I]!==!0&&(n.enable(I),l[I]=!0)}function de(I){l[I]!==!1&&(n.disable(I),l[I]=!1)}function Ce(I,ie){return u[I]!==ie?(n.bindFramebuffer(I,ie),u[I]=ie,I===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=ie),I===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=ie),!0):!1}function Ne(I,ie){let j=h,$=!1;if(I){j=d.get(ie),j===void 0&&(j=[],d.set(ie,j));let se=I.textures;if(j.length!==se.length||j[0]!==n.COLOR_ATTACHMENT0){for(let Ee=0,Ze=se.length;Ee<Ze;Ee++)j[Ee]=n.COLOR_ATTACHMENT0+Ee;j.length=se.length,$=!0}}else j[0]!==n.BACK&&(j[0]=n.BACK,$=!0);$&&n.drawBuffers(j)}function We(I){return f!==I?(n.useProgram(I),f=I,!0):!1}let mt={[vr]:n.FUNC_ADD,[lS]:n.FUNC_SUBTRACT,[uS]:n.FUNC_REVERSE_SUBTRACT};mt[dS]=n.MIN,mt[hS]=n.MAX;let T={[fS]:n.ZERO,[pS]:n.ONE,[mS]:n.SRC_COLOR,[mh]:n.SRC_ALPHA,[MS]:n.SRC_ALPHA_SATURATE,[_S]:n.DST_COLOR,[vS]:n.DST_ALPHA,[gS]:n.ONE_MINUS_SRC_COLOR,[gh]:n.ONE_MINUS_SRC_ALPHA,[xS]:n.ONE_MINUS_DST_COLOR,[yS]:n.ONE_MINUS_DST_ALPHA,[bS]:n.CONSTANT_COLOR,[wS]:n.ONE_MINUS_CONSTANT_COLOR,[ES]:n.CONSTANT_ALPHA,[SS]:n.ONE_MINUS_CONSTANT_ALPHA};function bt(I,ie,j,$,se,Ee,Ze,Et,Ft,Ke){if(I===Bi){g===!0&&(de(n.BLEND),g=!1);return}if(g===!1&&(ve(n.BLEND),g=!0),I!==cS){if(I!==v||Ke!==F){if((m!==vr||M!==vr)&&(n.blendEquation(n.FUNC_ADD),m=vr,M=vr),Ke)switch(I){case bs:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case e0:n.blendFunc(n.ONE,n.ONE);break;case t0:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case n0:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case bs:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case e0:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case t0:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case n0:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}p=null,b=null,E=null,O=null,C.set(0,0,0),D=0,v=I,F=Ke}return}se=se||ie,Ee=Ee||j,Ze=Ze||$,(ie!==m||se!==M)&&(n.blendEquationSeparate(mt[ie],mt[se]),m=ie,M=se),(j!==p||$!==b||Ee!==E||Ze!==O)&&(n.blendFuncSeparate(T[j],T[$],T[Ee],T[Ze]),p=j,b=$,E=Ee,O=Ze),(Et.equals(C)===!1||Ft!==D)&&(n.blendColor(Et.r,Et.g,Et.b,Ft),C.copy(Et),D=Ft),v=I,F=!1}function it(I,ie){I.side===xi?de(n.CULL_FACE):ve(n.CULL_FACE);let j=I.side===nn;ie&&(j=!j),at(j),I.blending===bs&&I.transparent===!1?bt(Bi):bt(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),s.setFunc(I.depthFunc),s.setTest(I.depthTest),s.setMask(I.depthWrite),r.setMask(I.colorWrite);let $=I.stencilWrite;o.setTest($),$&&(o.setMask(I.stencilWriteMask),o.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),o.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),Ie(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?ve(n.SAMPLE_ALPHA_TO_COVERAGE):de(n.SAMPLE_ALPHA_TO_COVERAGE)}function at(I){w!==I&&(I?n.frontFace(n.CW):n.frontFace(n.CCW),w=I)}function be(I){I!==sS?(ve(n.CULL_FACE),I!==_&&(I===Qv?n.cullFace(n.BACK):I===oS?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):de(n.CULL_FACE),_=I}function wt(I){I!==A&&(X&&n.lineWidth(I),A=I)}function Ie(I,ie,j){I?(ve(n.POLYGON_OFFSET_FILL),(z!==ie||V!==j)&&(n.polygonOffset(ie,j),z=ie,V=j)):de(n.POLYGON_OFFSET_FILL)}function Oe(I){I?ve(n.SCISSOR_TEST):de(n.SCISSOR_TEST)}function S(I){I===void 0&&(I=n.TEXTURE0+Y-1),B!==I&&(n.activeTexture(I),B=I)}function y(I,ie,j){j===void 0&&(B===null?j=n.TEXTURE0+Y-1:j=B);let $=le[j];$===void 0&&($={type:void 0,texture:void 0},le[j]=$),($.type!==I||$.texture!==ie)&&(B!==j&&(n.activeTexture(j),B=j),n.bindTexture(I,ie||ee[I]),$.type=I,$.texture=ie)}function U(){let I=le[B];I!==void 0&&I.type!==void 0&&(n.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function q(){try{n.compressedTexImage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Q(){try{n.compressedTexImage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Z(){try{n.texSubImage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function we(){try{n.texSubImage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ae(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function he(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Le(){try{n.texStorage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ne(){try{n.texStorage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ue(){try{n.texImage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ye(){try{n.texImage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ae(I){Xe.equals(I)===!1&&(n.scissor(I.x,I.y,I.z,I.w),Xe.copy(I))}function pe(I){ot.equals(I)===!1&&(n.viewport(I.x,I.y,I.z,I.w),ot.copy(I))}function Pe(I,ie){let j=c.get(ie);j===void 0&&(j=new WeakMap,c.set(ie,j));let $=j.get(I);$===void 0&&($=n.getUniformBlockIndex(ie,I.name),j.set(I,$))}function ze(I,ie){let $=c.get(ie).get(I);a.get(ie)!==$&&(n.uniformBlockBinding(ie,$,I.__bindingPointIndex),a.set(ie,$))}function ft(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),l={},B=null,le={},u={},d=new WeakMap,h=[],f=null,g=!1,v=null,m=null,p=null,b=null,M=null,E=null,O=null,C=new qe(0,0,0),D=0,F=!1,w=null,_=null,A=null,z=null,V=null,Xe.set(0,0,n.canvas.width,n.canvas.height),ot.set(0,0,n.canvas.width,n.canvas.height),r.reset(),s.reset(),o.reset()}return{buffers:{color:r,depth:s,stencil:o},enable:ve,disable:de,bindFramebuffer:Ce,drawBuffers:Ne,useProgram:We,setBlending:bt,setMaterial:it,setFlipSided:at,setCullFace:be,setLineWidth:wt,setPolygonOffset:Ie,setScissorTest:Oe,activeTexture:S,bindTexture:y,unbindTexture:U,compressedTexImage2D:q,compressedTexImage3D:Q,texImage2D:ue,texImage3D:Ye,updateUBOMapping:Pe,uniformBlockBinding:ze,texStorage2D:Le,texStorage3D:ne,texSubImage2D:Z,texSubImage3D:we,compressedTexSubImage2D:ae,compressedTexSubImage3D:he,scissor:Ae,viewport:pe,reset:ft}}function J0(n,e,t,i){let r=BA(i);switch(t){case cy:return n*e;case uy:return n*e;case dy:return n*e*2;case hy:return n*e/r.components*r.byteLength;case Df:return n*e/r.components*r.byteLength;case fy:return n*e*2/r.components*r.byteLength;case Tf:return n*e*2/r.components*r.byteLength;case ly:return n*e*3/r.components*r.byteLength;case Vn:return n*e*4/r.components*r.byteLength;case Af:return n*e*4/r.components*r.byteLength;case bc:case wc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Ec:case Sc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case bh:case Eh:return Math.max(n,16)*Math.max(e,8)/4;case Mh:case wh:return Math.max(n,8)*Math.max(e,8)/2;case Sh:case Ch:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Dh:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Th:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Ah:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Ih:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Rh:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Ph:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Nh:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Oh:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Fh:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Lh:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case kh:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Uh:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Vh:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Bh:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case zh:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Cc:case Hh:case Gh:return Math.ceil(n/4)*Math.ceil(e/4)*16;case py:case Wh:return Math.ceil(n/4)*Math.ceil(e/4)*8;case jh:case $h:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function BA(n){switch(n){case wi:case sy:return{byteLength:1,components:1};case wo:case oy:case To:return{byteLength:2,components:1};case Sf:case Cf:return{byteLength:2,components:4};case Mr:case Ef:case Mi:return{byteLength:4,components:1};case ay:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function zA(n,e,t,i,r,s,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Ge,u=new WeakMap,d,h=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(S,y){return f?new OffscreenCanvas(S,y):Nc("canvas")}function v(S,y,U){let q=1,Q=Oe(S);if((Q.width>U||Q.height>U)&&(q=U/Math.max(Q.width,Q.height)),q<1)if(typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&S instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&S instanceof ImageBitmap||typeof VideoFrame<"u"&&S instanceof VideoFrame){let Z=Math.floor(q*Q.width),we=Math.floor(q*Q.height);d===void 0&&(d=g(Z,we));let ae=y?g(Z,we):d;return ae.width=Z,ae.height=we,ae.getContext("2d").drawImage(S,0,0,Z,we),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+Z+"x"+we+")."),ae}else return"data"in S&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),S;return S}function m(S){return S.generateMipmaps&&S.minFilter!==En&&S.minFilter!==Un}function p(S){n.generateMipmap(S)}function b(S,y,U,q,Q=!1){if(S!==null){if(n[S]!==void 0)return n[S];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+S+"'")}let Z=y;if(y===n.RED&&(U===n.FLOAT&&(Z=n.R32F),U===n.HALF_FLOAT&&(Z=n.R16F),U===n.UNSIGNED_BYTE&&(Z=n.R8)),y===n.RED_INTEGER&&(U===n.UNSIGNED_BYTE&&(Z=n.R8UI),U===n.UNSIGNED_SHORT&&(Z=n.R16UI),U===n.UNSIGNED_INT&&(Z=n.R32UI),U===n.BYTE&&(Z=n.R8I),U===n.SHORT&&(Z=n.R16I),U===n.INT&&(Z=n.R32I)),y===n.RG&&(U===n.FLOAT&&(Z=n.RG32F),U===n.HALF_FLOAT&&(Z=n.RG16F),U===n.UNSIGNED_BYTE&&(Z=n.RG8)),y===n.RG_INTEGER&&(U===n.UNSIGNED_BYTE&&(Z=n.RG8UI),U===n.UNSIGNED_SHORT&&(Z=n.RG16UI),U===n.UNSIGNED_INT&&(Z=n.RG32UI),U===n.BYTE&&(Z=n.RG8I),U===n.SHORT&&(Z=n.RG16I),U===n.INT&&(Z=n.RG32I)),y===n.RGB&&U===n.UNSIGNED_INT_5_9_9_9_REV&&(Z=n.RGB9_E5),y===n.RGBA){let we=Q?Ac:nt.getTransfer(q);U===n.FLOAT&&(Z=n.RGBA32F),U===n.HALF_FLOAT&&(Z=n.RGBA16F),U===n.UNSIGNED_BYTE&&(Z=we===dt?n.SRGB8_ALPHA8:n.RGBA8),U===n.UNSIGNED_SHORT_4_4_4_4&&(Z=n.RGBA4),U===n.UNSIGNED_SHORT_5_5_5_1&&(Z=n.RGB5_A1)}return(Z===n.R16F||Z===n.R32F||Z===n.RG16F||Z===n.RG32F||Z===n.RGBA16F||Z===n.RGBA32F)&&e.get("EXT_color_buffer_float"),Z}function M(S,y){let U;return S?y===null||y===Mr||y===Ts?U=n.DEPTH24_STENCIL8:y===Mi?U=n.DEPTH32F_STENCIL8:y===wo&&(U=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===Mr||y===Ts?U=n.DEPTH_COMPONENT24:y===Mi?U=n.DEPTH_COMPONENT32F:y===wo&&(U=n.DEPTH_COMPONENT16),U}function E(S,y){return m(S)===!0||S.isFramebufferTexture&&S.minFilter!==En&&S.minFilter!==Un?Math.log2(Math.max(y.width,y.height))+1:S.mipmaps!==void 0&&S.mipmaps.length>0?S.mipmaps.length:S.isCompressedTexture&&Array.isArray(S.image)?y.mipmaps.length:1}function O(S){let y=S.target;y.removeEventListener("dispose",O),D(y),y.isVideoTexture&&u.delete(y)}function C(S){let y=S.target;y.removeEventListener("dispose",C),w(y)}function D(S){let y=i.get(S);if(y.__webglInit===void 0)return;let U=S.source,q=h.get(U);if(q){let Q=q[y.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&F(S),Object.keys(q).length===0&&h.delete(U)}i.remove(S)}function F(S){let y=i.get(S);n.deleteTexture(y.__webglTexture);let U=S.source,q=h.get(U);delete q[y.__cacheKey],o.memory.textures--}function w(S){let y=i.get(S);if(S.depthTexture&&S.depthTexture.dispose(),S.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(y.__webglFramebuffer[q]))for(let Q=0;Q<y.__webglFramebuffer[q].length;Q++)n.deleteFramebuffer(y.__webglFramebuffer[q][Q]);else n.deleteFramebuffer(y.__webglFramebuffer[q]);y.__webglDepthbuffer&&n.deleteRenderbuffer(y.__webglDepthbuffer[q])}else{if(Array.isArray(y.__webglFramebuffer))for(let q=0;q<y.__webglFramebuffer.length;q++)n.deleteFramebuffer(y.__webglFramebuffer[q]);else n.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&n.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&n.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let q=0;q<y.__webglColorRenderbuffer.length;q++)y.__webglColorRenderbuffer[q]&&n.deleteRenderbuffer(y.__webglColorRenderbuffer[q]);y.__webglDepthRenderbuffer&&n.deleteRenderbuffer(y.__webglDepthRenderbuffer)}let U=S.textures;for(let q=0,Q=U.length;q<Q;q++){let Z=i.get(U[q]);Z.__webglTexture&&(n.deleteTexture(Z.__webglTexture),o.memory.textures--),i.remove(U[q])}i.remove(S)}let _=0;function A(){_=0}function z(){let S=_;return S>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+S+" texture units while this GPU supports only "+r.maxTextures),_+=1,S}function V(S){let y=[];return y.push(S.wrapS),y.push(S.wrapT),y.push(S.wrapR||0),y.push(S.magFilter),y.push(S.minFilter),y.push(S.anisotropy),y.push(S.internalFormat),y.push(S.format),y.push(S.type),y.push(S.generateMipmaps),y.push(S.premultiplyAlpha),y.push(S.flipY),y.push(S.unpackAlignment),y.push(S.colorSpace),y.join()}function Y(S,y){let U=i.get(S);if(S.isVideoTexture&&wt(S),S.isRenderTargetTexture===!1&&S.version>0&&U.__version!==S.version){let q=S.image;if(q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ot(U,S,y);return}}t.bindTexture(n.TEXTURE_2D,U.__webglTexture,n.TEXTURE0+y)}function X(S,y){let U=i.get(S);if(S.version>0&&U.__version!==S.version){ot(U,S,y);return}t.bindTexture(n.TEXTURE_2D_ARRAY,U.__webglTexture,n.TEXTURE0+y)}function W(S,y){let U=i.get(S);if(S.version>0&&U.__version!==S.version){ot(U,S,y);return}t.bindTexture(n.TEXTURE_3D,U.__webglTexture,n.TEXTURE0+y)}function K(S,y){let U=i.get(S);if(S.version>0&&U.__version!==S.version){G(U,S,y);return}t.bindTexture(n.TEXTURE_CUBE_MAP,U.__webglTexture,n.TEXTURE0+y)}let B={[_h]:n.REPEAT,[_r]:n.CLAMP_TO_EDGE,[xh]:n.MIRRORED_REPEAT},le={[En]:n.NEAREST,[HS]:n.NEAREST_MIPMAP_NEAREST,[Ja]:n.NEAREST_MIPMAP_LINEAR,[Un]:n.LINEAR,[Vd]:n.LINEAR_MIPMAP_NEAREST,[xr]:n.LINEAR_MIPMAP_LINEAR},fe={[$S]:n.NEVER,[KS]:n.ALWAYS,[qS]:n.LESS,[gy]:n.LEQUAL,[XS]:n.EQUAL,[JS]:n.GEQUAL,[YS]:n.GREATER,[ZS]:n.NOTEQUAL};function _e(S,y){if(y.type===Mi&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===Un||y.magFilter===Vd||y.magFilter===Ja||y.magFilter===xr||y.minFilter===Un||y.minFilter===Vd||y.minFilter===Ja||y.minFilter===xr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(S,n.TEXTURE_WRAP_S,B[y.wrapS]),n.texParameteri(S,n.TEXTURE_WRAP_T,B[y.wrapT]),(S===n.TEXTURE_3D||S===n.TEXTURE_2D_ARRAY)&&n.texParameteri(S,n.TEXTURE_WRAP_R,B[y.wrapR]),n.texParameteri(S,n.TEXTURE_MAG_FILTER,le[y.magFilter]),n.texParameteri(S,n.TEXTURE_MIN_FILTER,le[y.minFilter]),y.compareFunction&&(n.texParameteri(S,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(S,n.TEXTURE_COMPARE_FUNC,fe[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===En||y.minFilter!==Ja&&y.minFilter!==xr||y.type===Mi&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||i.get(y).__currentAnisotropy){let U=e.get("EXT_texture_filter_anisotropic");n.texParameterf(S,U.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,r.getMaxAnisotropy())),i.get(y).__currentAnisotropy=y.anisotropy}}}function Xe(S,y){let U=!1;S.__webglInit===void 0&&(S.__webglInit=!0,y.addEventListener("dispose",O));let q=y.source,Q=h.get(q);Q===void 0&&(Q={},h.set(q,Q));let Z=V(y);if(Z!==S.__cacheKey){Q[Z]===void 0&&(Q[Z]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,U=!0),Q[Z].usedTimes++;let we=Q[S.__cacheKey];we!==void 0&&(Q[S.__cacheKey].usedTimes--,we.usedTimes===0&&F(y)),S.__cacheKey=Z,S.__webglTexture=Q[Z].texture}return U}function ot(S,y,U){let q=n.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(q=n.TEXTURE_2D_ARRAY),y.isData3DTexture&&(q=n.TEXTURE_3D);let Q=Xe(S,y),Z=y.source;t.bindTexture(q,S.__webglTexture,n.TEXTURE0+U);let we=i.get(Z);if(Z.version!==we.__version||Q===!0){t.activeTexture(n.TEXTURE0+U);let ae=nt.getPrimaries(nt.workingColorSpace),he=y.colorSpace===Ui?null:nt.getPrimaries(y.colorSpace),Le=y.colorSpace===Ui||ae===he?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,y.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Le);let ne=v(y.image,!1,r.maxTextureSize);ne=Ie(y,ne);let ue=s.convert(y.format,y.colorSpace),Ye=s.convert(y.type),Ae=b(y.internalFormat,ue,Ye,y.colorSpace,y.isVideoTexture);_e(q,y);let pe,Pe=y.mipmaps,ze=y.isVideoTexture!==!0,ft=we.__version===void 0||Q===!0,I=Z.dataReady,ie=E(y,ne);if(y.isDepthTexture)Ae=M(y.format===As,y.type),ft&&(ze?t.texStorage2D(n.TEXTURE_2D,1,Ae,ne.width,ne.height):t.texImage2D(n.TEXTURE_2D,0,Ae,ne.width,ne.height,0,ue,Ye,null));else if(y.isDataTexture)if(Pe.length>0){ze&&ft&&t.texStorage2D(n.TEXTURE_2D,ie,Ae,Pe[0].width,Pe[0].height);for(let j=0,$=Pe.length;j<$;j++)pe=Pe[j],ze?I&&t.texSubImage2D(n.TEXTURE_2D,j,0,0,pe.width,pe.height,ue,Ye,pe.data):t.texImage2D(n.TEXTURE_2D,j,Ae,pe.width,pe.height,0,ue,Ye,pe.data);y.generateMipmaps=!1}else ze?(ft&&t.texStorage2D(n.TEXTURE_2D,ie,Ae,ne.width,ne.height),I&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ne.width,ne.height,ue,Ye,ne.data)):t.texImage2D(n.TEXTURE_2D,0,Ae,ne.width,ne.height,0,ue,Ye,ne.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){ze&&ft&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ie,Ae,Pe[0].width,Pe[0].height,ne.depth);for(let j=0,$=Pe.length;j<$;j++)if(pe=Pe[j],y.format!==Vn)if(ue!==null)if(ze){if(I)if(y.layerUpdates.size>0){let se=J0(pe.width,pe.height,y.format,y.type);for(let Ee of y.layerUpdates){let Ze=pe.data.subarray(Ee*se/pe.data.BYTES_PER_ELEMENT,(Ee+1)*se/pe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,j,0,0,Ee,pe.width,pe.height,1,ue,Ze,0,0)}y.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,j,0,0,0,pe.width,pe.height,ne.depth,ue,pe.data,0,0)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,j,Ae,pe.width,pe.height,ne.depth,0,pe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ze?I&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,j,0,0,0,pe.width,pe.height,ne.depth,ue,Ye,pe.data):t.texImage3D(n.TEXTURE_2D_ARRAY,j,Ae,pe.width,pe.height,ne.depth,0,ue,Ye,pe.data)}else{ze&&ft&&t.texStorage2D(n.TEXTURE_2D,ie,Ae,Pe[0].width,Pe[0].height);for(let j=0,$=Pe.length;j<$;j++)pe=Pe[j],y.format!==Vn?ue!==null?ze?I&&t.compressedTexSubImage2D(n.TEXTURE_2D,j,0,0,pe.width,pe.height,ue,pe.data):t.compressedTexImage2D(n.TEXTURE_2D,j,Ae,pe.width,pe.height,0,pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ze?I&&t.texSubImage2D(n.TEXTURE_2D,j,0,0,pe.width,pe.height,ue,Ye,pe.data):t.texImage2D(n.TEXTURE_2D,j,Ae,pe.width,pe.height,0,ue,Ye,pe.data)}else if(y.isDataArrayTexture)if(ze){if(ft&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ie,Ae,ne.width,ne.height,ne.depth),I)if(y.layerUpdates.size>0){let j=J0(ne.width,ne.height,y.format,y.type);for(let $ of y.layerUpdates){let se=ne.data.subarray($*j/ne.data.BYTES_PER_ELEMENT,($+1)*j/ne.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,$,ne.width,ne.height,1,ue,Ye,se)}y.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ne.width,ne.height,ne.depth,ue,Ye,ne.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Ae,ne.width,ne.height,ne.depth,0,ue,Ye,ne.data);else if(y.isData3DTexture)ze?(ft&&t.texStorage3D(n.TEXTURE_3D,ie,Ae,ne.width,ne.height,ne.depth),I&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ne.width,ne.height,ne.depth,ue,Ye,ne.data)):t.texImage3D(n.TEXTURE_3D,0,Ae,ne.width,ne.height,ne.depth,0,ue,Ye,ne.data);else if(y.isFramebufferTexture){if(ft)if(ze)t.texStorage2D(n.TEXTURE_2D,ie,Ae,ne.width,ne.height);else{let j=ne.width,$=ne.height;for(let se=0;se<ie;se++)t.texImage2D(n.TEXTURE_2D,se,Ae,j,$,0,ue,Ye,null),j>>=1,$>>=1}}else if(Pe.length>0){if(ze&&ft){let j=Oe(Pe[0]);t.texStorage2D(n.TEXTURE_2D,ie,Ae,j.width,j.height)}for(let j=0,$=Pe.length;j<$;j++)pe=Pe[j],ze?I&&t.texSubImage2D(n.TEXTURE_2D,j,0,0,ue,Ye,pe):t.texImage2D(n.TEXTURE_2D,j,Ae,ue,Ye,pe);y.generateMipmaps=!1}else if(ze){if(ft){let j=Oe(ne);t.texStorage2D(n.TEXTURE_2D,ie,Ae,j.width,j.height)}I&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ue,Ye,ne)}else t.texImage2D(n.TEXTURE_2D,0,Ae,ue,Ye,ne);m(y)&&p(q),we.__version=Z.version,y.onUpdate&&y.onUpdate(y)}S.__version=y.version}function G(S,y,U){if(y.image.length!==6)return;let q=Xe(S,y),Q=y.source;t.bindTexture(n.TEXTURE_CUBE_MAP,S.__webglTexture,n.TEXTURE0+U);let Z=i.get(Q);if(Q.version!==Z.__version||q===!0){t.activeTexture(n.TEXTURE0+U);let we=nt.getPrimaries(nt.workingColorSpace),ae=y.colorSpace===Ui?null:nt.getPrimaries(y.colorSpace),he=y.colorSpace===Ui||we===ae?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,y.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,he);let Le=y.isCompressedTexture||y.image[0].isCompressedTexture,ne=y.image[0]&&y.image[0].isDataTexture,ue=[];for(let $=0;$<6;$++)!Le&&!ne?ue[$]=v(y.image[$],!0,r.maxCubemapSize):ue[$]=ne?y.image[$].image:y.image[$],ue[$]=Ie(y,ue[$]);let Ye=ue[0],Ae=s.convert(y.format,y.colorSpace),pe=s.convert(y.type),Pe=b(y.internalFormat,Ae,pe,y.colorSpace),ze=y.isVideoTexture!==!0,ft=Z.__version===void 0||q===!0,I=Q.dataReady,ie=E(y,Ye);_e(n.TEXTURE_CUBE_MAP,y);let j;if(Le){ze&&ft&&t.texStorage2D(n.TEXTURE_CUBE_MAP,ie,Pe,Ye.width,Ye.height);for(let $=0;$<6;$++){j=ue[$].mipmaps;for(let se=0;se<j.length;se++){let Ee=j[se];y.format!==Vn?Ae!==null?ze?I&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,se,0,0,Ee.width,Ee.height,Ae,Ee.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,se,Pe,Ee.width,Ee.height,0,Ee.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ze?I&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,se,0,0,Ee.width,Ee.height,Ae,pe,Ee.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,se,Pe,Ee.width,Ee.height,0,Ae,pe,Ee.data)}}}else{if(j=y.mipmaps,ze&&ft){j.length>0&&ie++;let $=Oe(ue[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,ie,Pe,$.width,$.height)}for(let $=0;$<6;$++)if(ne){ze?I&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,ue[$].width,ue[$].height,Ae,pe,ue[$].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,Pe,ue[$].width,ue[$].height,0,Ae,pe,ue[$].data);for(let se=0;se<j.length;se++){let Ze=j[se].image[$].image;ze?I&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,se+1,0,0,Ze.width,Ze.height,Ae,pe,Ze.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,se+1,Pe,Ze.width,Ze.height,0,Ae,pe,Ze.data)}}else{ze?I&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,Ae,pe,ue[$]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,Pe,Ae,pe,ue[$]);for(let se=0;se<j.length;se++){let Ee=j[se];ze?I&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,se+1,0,0,Ae,pe,Ee.image[$]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,se+1,Pe,Ae,pe,Ee.image[$])}}}m(y)&&p(n.TEXTURE_CUBE_MAP),Z.__version=Q.version,y.onUpdate&&y.onUpdate(y)}S.__version=y.version}function ee(S,y,U,q,Q,Z){let we=s.convert(U.format,U.colorSpace),ae=s.convert(U.type),he=b(U.internalFormat,we,ae,U.colorSpace);if(!i.get(y).__hasExternalTextures){let ne=Math.max(1,y.width>>Z),ue=Math.max(1,y.height>>Z);Q===n.TEXTURE_3D||Q===n.TEXTURE_2D_ARRAY?t.texImage3D(Q,Z,he,ne,ue,y.depth,0,we,ae,null):t.texImage2D(Q,Z,he,ne,ue,0,we,ae,null)}t.bindFramebuffer(n.FRAMEBUFFER,S),be(y)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,q,Q,i.get(U).__webglTexture,0,at(y)):(Q===n.TEXTURE_2D||Q>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,q,Q,i.get(U).__webglTexture,Z),t.bindFramebuffer(n.FRAMEBUFFER,null)}function ve(S,y,U){if(n.bindRenderbuffer(n.RENDERBUFFER,S),y.depthBuffer){let q=y.depthTexture,Q=q&&q.isDepthTexture?q.type:null,Z=M(y.stencilBuffer,Q),we=y.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ae=at(y);be(y)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ae,Z,y.width,y.height):U?n.renderbufferStorageMultisample(n.RENDERBUFFER,ae,Z,y.width,y.height):n.renderbufferStorage(n.RENDERBUFFER,Z,y.width,y.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,we,n.RENDERBUFFER,S)}else{let q=y.textures;for(let Q=0;Q<q.length;Q++){let Z=q[Q],we=s.convert(Z.format,Z.colorSpace),ae=s.convert(Z.type),he=b(Z.internalFormat,we,ae,Z.colorSpace),Le=at(y);U&&be(y)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Le,he,y.width,y.height):be(y)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Le,he,y.width,y.height):n.renderbufferStorage(n.RENDERBUFFER,he,y.width,y.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function de(S,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,S),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(y.depthTexture).__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),Y(y.depthTexture,0);let q=i.get(y.depthTexture).__webglTexture,Q=at(y);if(y.depthTexture.format===ws)be(y)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,q,0,Q):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,q,0);else if(y.depthTexture.format===As)be(y)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,q,0,Q):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,q,0);else throw new Error("Unknown depthTexture format")}function Ce(S){let y=i.get(S),U=S.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==S.depthTexture){let q=S.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),q){let Q=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,q.removeEventListener("dispose",Q)};q.addEventListener("dispose",Q),y.__depthDisposeCallback=Q}y.__boundDepthTexture=q}if(S.depthTexture&&!y.__autoAllocateDepthBuffer){if(U)throw new Error("target.depthTexture not supported in Cube render targets");de(y.__webglFramebuffer,S)}else if(U){y.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(t.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer[q]),y.__webglDepthbuffer[q]===void 0)y.__webglDepthbuffer[q]=n.createRenderbuffer(),ve(y.__webglDepthbuffer[q],S,!1);else{let Q=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Z=y.__webglDepthbuffer[q];n.bindRenderbuffer(n.RENDERBUFFER,Z),n.framebufferRenderbuffer(n.FRAMEBUFFER,Q,n.RENDERBUFFER,Z)}}else if(t.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=n.createRenderbuffer(),ve(y.__webglDepthbuffer,S,!1);else{let q=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Q=y.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,Q),n.framebufferRenderbuffer(n.FRAMEBUFFER,q,n.RENDERBUFFER,Q)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ne(S,y,U){let q=i.get(S);y!==void 0&&ee(q.__webglFramebuffer,S,S.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),U!==void 0&&Ce(S)}function We(S){let y=S.texture,U=i.get(S),q=i.get(y);S.addEventListener("dispose",C);let Q=S.textures,Z=S.isWebGLCubeRenderTarget===!0,we=Q.length>1;if(we||(q.__webglTexture===void 0&&(q.__webglTexture=n.createTexture()),q.__version=y.version,o.memory.textures++),Z){U.__webglFramebuffer=[];for(let ae=0;ae<6;ae++)if(y.mipmaps&&y.mipmaps.length>0){U.__webglFramebuffer[ae]=[];for(let he=0;he<y.mipmaps.length;he++)U.__webglFramebuffer[ae][he]=n.createFramebuffer()}else U.__webglFramebuffer[ae]=n.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){U.__webglFramebuffer=[];for(let ae=0;ae<y.mipmaps.length;ae++)U.__webglFramebuffer[ae]=n.createFramebuffer()}else U.__webglFramebuffer=n.createFramebuffer();if(we)for(let ae=0,he=Q.length;ae<he;ae++){let Le=i.get(Q[ae]);Le.__webglTexture===void 0&&(Le.__webglTexture=n.createTexture(),o.memory.textures++)}if(S.samples>0&&be(S)===!1){U.__webglMultisampledFramebuffer=n.createFramebuffer(),U.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,U.__webglMultisampledFramebuffer);for(let ae=0;ae<Q.length;ae++){let he=Q[ae];U.__webglColorRenderbuffer[ae]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,U.__webglColorRenderbuffer[ae]);let Le=s.convert(he.format,he.colorSpace),ne=s.convert(he.type),ue=b(he.internalFormat,Le,ne,he.colorSpace,S.isXRRenderTarget===!0),Ye=at(S);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ye,ue,S.width,S.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ae,n.RENDERBUFFER,U.__webglColorRenderbuffer[ae])}n.bindRenderbuffer(n.RENDERBUFFER,null),S.depthBuffer&&(U.__webglDepthRenderbuffer=n.createRenderbuffer(),ve(U.__webglDepthRenderbuffer,S,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(Z){t.bindTexture(n.TEXTURE_CUBE_MAP,q.__webglTexture),_e(n.TEXTURE_CUBE_MAP,y);for(let ae=0;ae<6;ae++)if(y.mipmaps&&y.mipmaps.length>0)for(let he=0;he<y.mipmaps.length;he++)ee(U.__webglFramebuffer[ae][he],S,y,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,he);else ee(U.__webglFramebuffer[ae],S,y,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0);m(y)&&p(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(we){for(let ae=0,he=Q.length;ae<he;ae++){let Le=Q[ae],ne=i.get(Le);t.bindTexture(n.TEXTURE_2D,ne.__webglTexture),_e(n.TEXTURE_2D,Le),ee(U.__webglFramebuffer,S,Le,n.COLOR_ATTACHMENT0+ae,n.TEXTURE_2D,0),m(Le)&&p(n.TEXTURE_2D)}t.unbindTexture()}else{let ae=n.TEXTURE_2D;if((S.isWebGL3DRenderTarget||S.isWebGLArrayRenderTarget)&&(ae=S.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ae,q.__webglTexture),_e(ae,y),y.mipmaps&&y.mipmaps.length>0)for(let he=0;he<y.mipmaps.length;he++)ee(U.__webglFramebuffer[he],S,y,n.COLOR_ATTACHMENT0,ae,he);else ee(U.__webglFramebuffer,S,y,n.COLOR_ATTACHMENT0,ae,0);m(y)&&p(ae),t.unbindTexture()}S.depthBuffer&&Ce(S)}function mt(S){let y=S.textures;for(let U=0,q=y.length;U<q;U++){let Q=y[U];if(m(Q)){let Z=S.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,we=i.get(Q).__webglTexture;t.bindTexture(Z,we),p(Z),t.unbindTexture()}}}let T=[],bt=[];function it(S){if(S.samples>0){if(be(S)===!1){let y=S.textures,U=S.width,q=S.height,Q=n.COLOR_BUFFER_BIT,Z=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,we=i.get(S),ae=y.length>1;if(ae)for(let he=0;he<y.length;he++)t.bindFramebuffer(n.FRAMEBUFFER,we.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+he,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,we.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+he,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,we.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,we.__webglFramebuffer);for(let he=0;he<y.length;he++){if(S.resolveDepthBuffer&&(S.depthBuffer&&(Q|=n.DEPTH_BUFFER_BIT),S.stencilBuffer&&S.resolveStencilBuffer&&(Q|=n.STENCIL_BUFFER_BIT)),ae){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,we.__webglColorRenderbuffer[he]);let Le=i.get(y[he]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Le,0)}n.blitFramebuffer(0,0,U,q,0,0,U,q,Q,n.NEAREST),c===!0&&(T.length=0,bt.length=0,T.push(n.COLOR_ATTACHMENT0+he),S.depthBuffer&&S.resolveDepthBuffer===!1&&(T.push(Z),bt.push(Z),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,bt)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,T))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ae)for(let he=0;he<y.length;he++){t.bindFramebuffer(n.FRAMEBUFFER,we.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+he,n.RENDERBUFFER,we.__webglColorRenderbuffer[he]);let Le=i.get(y[he]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,we.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+he,n.TEXTURE_2D,Le,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,we.__webglMultisampledFramebuffer)}else if(S.depthBuffer&&S.resolveDepthBuffer===!1&&c){let y=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[y])}}}function at(S){return Math.min(r.maxSamples,S.samples)}function be(S){let y=i.get(S);return S.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function wt(S){let y=o.render.frame;u.get(S)!==y&&(u.set(S,y),S.update())}function Ie(S,y){let U=S.colorSpace,q=S.format,Q=S.type;return S.isCompressedTexture===!0||S.isVideoTexture===!0||U!==$i&&U!==Ui&&(nt.getTransfer(U)===dt?(q!==Vn||Q!==wi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",U)),y}function Oe(S){return typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement?(l.width=S.naturalWidth||S.width,l.height=S.naturalHeight||S.height):typeof VideoFrame<"u"&&S instanceof VideoFrame?(l.width=S.displayWidth,l.height=S.displayHeight):(l.width=S.width,l.height=S.height),l}this.allocateTextureUnit=z,this.resetTextureUnits=A,this.setTexture2D=Y,this.setTexture2DArray=X,this.setTexture3D=W,this.setTextureCube=K,this.rebindTextures=Ne,this.setupRenderTarget=We,this.updateRenderTargetMipmap=mt,this.updateMultisampleRenderTarget=it,this.setupDepthRenderbuffer=Ce,this.setupFrameBufferTexture=ee,this.useMultisampledRTT=be}function HA(n,e){function t(i,r=Ui){let s,o=nt.getTransfer(r);if(i===wi)return n.UNSIGNED_BYTE;if(i===Sf)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Cf)return n.UNSIGNED_SHORT_5_5_5_1;if(i===ay)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===sy)return n.BYTE;if(i===oy)return n.SHORT;if(i===wo)return n.UNSIGNED_SHORT;if(i===Ef)return n.INT;if(i===Mr)return n.UNSIGNED_INT;if(i===Mi)return n.FLOAT;if(i===To)return n.HALF_FLOAT;if(i===cy)return n.ALPHA;if(i===ly)return n.RGB;if(i===Vn)return n.RGBA;if(i===uy)return n.LUMINANCE;if(i===dy)return n.LUMINANCE_ALPHA;if(i===ws)return n.DEPTH_COMPONENT;if(i===As)return n.DEPTH_STENCIL;if(i===hy)return n.RED;if(i===Df)return n.RED_INTEGER;if(i===fy)return n.RG;if(i===Tf)return n.RG_INTEGER;if(i===Af)return n.RGBA_INTEGER;if(i===bc||i===wc||i===Ec||i===Sc)if(o===dt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===bc)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===wc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Ec)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Sc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===bc)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===wc)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Ec)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Sc)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Mh||i===bh||i===wh||i===Eh)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Mh)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===bh)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===wh)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Eh)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Sh||i===Ch||i===Dh)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Sh||i===Ch)return o===dt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Dh)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Th||i===Ah||i===Ih||i===Rh||i===Ph||i===Nh||i===Oh||i===Fh||i===Lh||i===kh||i===Uh||i===Vh||i===Bh||i===zh)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Th)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Ah)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Ih)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Rh)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Ph)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Nh)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Oh)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Fh)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Lh)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===kh)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Uh)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Vh)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Bh)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===zh)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Cc||i===Hh||i===Gh)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Cc)return o===dt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Hh)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Gh)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===py||i===Wh||i===jh||i===$h)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Cc)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Wh)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===jh)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===$h)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ts?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}var lf=class extends qt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},Vi=class extends ti{constructor(){super(),this.isGroup=!0,this.type="Group"}},GA={type:"move"},bo=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Vi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Vi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Vi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(let v of e.hand.values()){let m=t.getJointPose(v,i),p=this._getHandJoint(l,v);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let u=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],h=u.position.distanceTo(d.position),f=.02,g=.005;l.inputState.pinching&&h>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&h<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(GA)))}return a!==null&&(a.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new Vi;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},WA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,jA=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,uf=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){let r=new Dr,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new ni({vertexShader:WA,fragmentShader:jA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new mn(new Gc(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},df=class extends Gi{constructor(e,t){super();let i=this,r=null,s=1,o=null,a="local-floor",c=1,l=null,u=null,d=null,h=null,f=null,g=null,v=new uf,m=t.getContextAttributes(),p=null,b=null,M=[],E=[],O=new Ge,C=null,D=new qt;D.layers.enable(1),D.viewport=new ht;let F=new qt;F.layers.enable(2),F.viewport=new ht;let w=[D,F],_=new lf;_.layers.enable(1),_.layers.enable(2);let A=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(G){let ee=M[G];return ee===void 0&&(ee=new bo,M[G]=ee),ee.getTargetRaySpace()},this.getControllerGrip=function(G){let ee=M[G];return ee===void 0&&(ee=new bo,M[G]=ee),ee.getGripSpace()},this.getHand=function(G){let ee=M[G];return ee===void 0&&(ee=new bo,M[G]=ee),ee.getHandSpace()};function V(G){let ee=E.indexOf(G.inputSource);if(ee===-1)return;let ve=M[ee];ve!==void 0&&(ve.update(G.inputSource,G.frame,l||o),ve.dispatchEvent({type:G.type,data:G.inputSource}))}function Y(){r.removeEventListener("select",V),r.removeEventListener("selectstart",V),r.removeEventListener("selectend",V),r.removeEventListener("squeeze",V),r.removeEventListener("squeezestart",V),r.removeEventListener("squeezeend",V),r.removeEventListener("end",Y),r.removeEventListener("inputsourceschange",X);for(let G=0;G<M.length;G++){let ee=E[G];ee!==null&&(E[G]=null,M[G].disconnect(ee))}A=null,z=null,v.reset(),e.setRenderTarget(p),f=null,h=null,d=null,r=null,b=null,ot.stop(),i.isPresenting=!1,e.setPixelRatio(C),e.setSize(O.width,O.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(G){s=G,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(G){a=G,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(G){l=G},this.getBaseLayer=function(){return h!==null?h:f},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=function(G){return Po(this,null,function*(){if(r=G,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",V),r.addEventListener("selectstart",V),r.addEventListener("selectend",V),r.addEventListener("squeeze",V),r.addEventListener("squeezestart",V),r.addEventListener("squeezeend",V),r.addEventListener("end",Y),r.addEventListener("inputsourceschange",X),m.xrCompatible!==!0&&(yield t.makeXRCompatible()),C=e.getPixelRatio(),e.getSize(O),r.renderState.layers===void 0){let ee={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(r,t,ee),r.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),b=new Ei(f.framebufferWidth,f.framebufferHeight,{format:Vn,type:wi,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let ee=null,ve=null,de=null;m.depth&&(de=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ee=m.stencil?As:ws,ve=m.stencil?Ts:Mr);let Ce={colorFormat:t.RGBA8,depthFormat:de,scaleFactor:s};d=new XRWebGLBinding(r,t),h=d.createProjectionLayer(Ce),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),b=new Ei(h.textureWidth,h.textureHeight,{format:Vn,type:wi,depthTexture:new $c(h.textureWidth,h.textureHeight,ve,void 0,void 0,void 0,void 0,void 0,void 0,ee),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=yield r.requestReferenceSpace(a),ot.setContext(r),ot.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}})},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function X(G){for(let ee=0;ee<G.removed.length;ee++){let ve=G.removed[ee],de=E.indexOf(ve);de>=0&&(E[de]=null,M[de].disconnect(ve))}for(let ee=0;ee<G.added.length;ee++){let ve=G.added[ee],de=E.indexOf(ve);if(de===-1){for(let Ne=0;Ne<M.length;Ne++)if(Ne>=E.length){E.push(ve),de=Ne;break}else if(E[Ne]===null){E[Ne]=ve,de=Ne;break}if(de===-1)break}let Ce=M[de];Ce&&Ce.connect(ve)}}let W=new P,K=new P;function B(G,ee,ve){W.setFromMatrixPosition(ee.matrixWorld),K.setFromMatrixPosition(ve.matrixWorld);let de=W.distanceTo(K),Ce=ee.projectionMatrix.elements,Ne=ve.projectionMatrix.elements,We=Ce[14]/(Ce[10]-1),mt=Ce[14]/(Ce[10]+1),T=(Ce[9]+1)/Ce[5],bt=(Ce[9]-1)/Ce[5],it=(Ce[8]-1)/Ce[0],at=(Ne[8]+1)/Ne[0],be=We*it,wt=We*at,Ie=de/(-it+at),Oe=Ie*-it;if(ee.matrixWorld.decompose(G.position,G.quaternion,G.scale),G.translateX(Oe),G.translateZ(Ie),G.matrixWorld.compose(G.position,G.quaternion,G.scale),G.matrixWorldInverse.copy(G.matrixWorld).invert(),Ce[10]===-1)G.projectionMatrix.copy(ee.projectionMatrix),G.projectionMatrixInverse.copy(ee.projectionMatrixInverse);else{let S=We+Ie,y=mt+Ie,U=be-Oe,q=wt+(de-Oe),Q=T*mt/y*S,Z=bt*mt/y*S;G.projectionMatrix.makePerspective(U,q,Q,Z,S,y),G.projectionMatrixInverse.copy(G.projectionMatrix).invert()}}function le(G,ee){ee===null?G.matrixWorld.copy(G.matrix):G.matrixWorld.multiplyMatrices(ee.matrixWorld,G.matrix),G.matrixWorldInverse.copy(G.matrixWorld).invert()}this.updateCamera=function(G){if(r===null)return;let ee=G.near,ve=G.far;v.texture!==null&&(v.depthNear>0&&(ee=v.depthNear),v.depthFar>0&&(ve=v.depthFar)),_.near=F.near=D.near=ee,_.far=F.far=D.far=ve,(A!==_.near||z!==_.far)&&(r.updateRenderState({depthNear:_.near,depthFar:_.far}),A=_.near,z=_.far);let de=G.parent,Ce=_.cameras;le(_,de);for(let Ne=0;Ne<Ce.length;Ne++)le(Ce[Ne],de);Ce.length===2?B(_,D,F):_.projectionMatrix.copy(D.projectionMatrix),fe(G,_,de)};function fe(G,ee,ve){ve===null?G.matrix.copy(ee.matrixWorld):(G.matrix.copy(ve.matrixWorld),G.matrix.invert(),G.matrix.multiply(ee.matrixWorld)),G.matrix.decompose(G.position,G.quaternion,G.scale),G.updateMatrixWorld(!0),G.projectionMatrix.copy(ee.projectionMatrix),G.projectionMatrixInverse.copy(ee.projectionMatrixInverse),G.isPerspectiveCamera&&(G.fov=Xh*2*Math.atan(1/G.projectionMatrix.elements[5]),G.zoom=1)}this.getCamera=function(){return _},this.getFoveation=function(){if(!(h===null&&f===null))return c},this.setFoveation=function(G){c=G,h!==null&&(h.fixedFoveation=G),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=G)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(_)};let _e=null;function Xe(G,ee){if(u=ee.getViewerPose(l||o),g=ee,u!==null){let ve=u.views;f!==null&&(e.setRenderTargetFramebuffer(b,f.framebuffer),e.setRenderTarget(b));let de=!1;ve.length!==_.cameras.length&&(_.cameras.length=0,de=!0);for(let Ne=0;Ne<ve.length;Ne++){let We=ve[Ne],mt=null;if(f!==null)mt=f.getViewport(We);else{let bt=d.getViewSubImage(h,We);mt=bt.viewport,Ne===0&&(e.setRenderTargetTextures(b,bt.colorTexture,h.ignoreDepthValues?void 0:bt.depthStencilTexture),e.setRenderTarget(b))}let T=w[Ne];T===void 0&&(T=new qt,T.layers.enable(Ne),T.viewport=new ht,w[Ne]=T),T.matrix.fromArray(We.transform.matrix),T.matrix.decompose(T.position,T.quaternion,T.scale),T.projectionMatrix.fromArray(We.projectionMatrix),T.projectionMatrixInverse.copy(T.projectionMatrix).invert(),T.viewport.set(mt.x,mt.y,mt.width,mt.height),Ne===0&&(_.matrix.copy(T.matrix),_.matrix.decompose(_.position,_.quaternion,_.scale)),de===!0&&_.cameras.push(T)}let Ce=r.enabledFeatures;if(Ce&&Ce.includes("depth-sensing")){let Ne=d.getDepthInformation(ve[0]);Ne&&Ne.isValid&&Ne.texture&&v.init(e,Ne,r.renderState)}}for(let ve=0;ve<M.length;ve++){let de=E[ve],Ce=M[ve];de!==null&&Ce!==void 0&&Ce.update(de,ee,l||o)}_e&&_e(G,ee),ee.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ee}),g=null}let ot=new xy;ot.setAnimationLoop(Xe),this.setAnimationLoop=function(G){_e=G},this.dispose=function(){}}},mr=new wr,$A=new _t;function qA(n,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,_y(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function r(m,p,b,M,E){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),d(m,p)):p.isMeshPhongMaterial?(s(m,p),u(m,p)):p.isMeshStandardMaterial?(s(m,p),h(m,p),p.isMeshPhysicalMaterial&&f(m,p,E)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),v(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?c(m,p,b,M):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===nn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===nn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let b=e.get(p),M=b.envMap,E=b.envMapRotation;M&&(m.envMap.value=M,mr.copy(E),mr.x*=-1,mr.y*=-1,mr.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(mr.y*=-1,mr.z*=-1),m.envMapRotation.value.setFromMatrix4($A.makeRotationFromEuler(mr)),m.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,b,M){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*b,m.scale.value=M*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function h(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,b){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===nn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=b.texture,m.transmissionSamplerSize.value.set(b.width,b.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function v(m,p){let b=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(b.matrixWorld),m.nearDistance.value=b.shadow.camera.near,m.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function XA(n,e,t,i){let r={},s={},o=[],a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(b,M){let E=M.program;i.uniformBlockBinding(b,E)}function l(b,M){let E=r[b.id];E===void 0&&(g(b),E=u(b),r[b.id]=E,b.addEventListener("dispose",m));let O=M.program;i.updateUBOMapping(b,O);let C=e.render.frame;s[b.id]!==C&&(h(b),s[b.id]=C)}function u(b){let M=d();b.__bindingPointIndex=M;let E=n.createBuffer(),O=b.__size,C=b.usage;return n.bindBuffer(n.UNIFORM_BUFFER,E),n.bufferData(n.UNIFORM_BUFFER,O,C),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,M,E),E}function d(){for(let b=0;b<a;b++)if(o.indexOf(b)===-1)return o.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(b){let M=r[b.id],E=b.uniforms,O=b.__cache;n.bindBuffer(n.UNIFORM_BUFFER,M);for(let C=0,D=E.length;C<D;C++){let F=Array.isArray(E[C])?E[C]:[E[C]];for(let w=0,_=F.length;w<_;w++){let A=F[w];if(f(A,C,w,O)===!0){let z=A.__offset,V=Array.isArray(A.value)?A.value:[A.value],Y=0;for(let X=0;X<V.length;X++){let W=V[X],K=v(W);typeof W=="number"||typeof W=="boolean"?(A.__data[0]=W,n.bufferSubData(n.UNIFORM_BUFFER,z+Y,A.__data)):W.isMatrix3?(A.__data[0]=W.elements[0],A.__data[1]=W.elements[1],A.__data[2]=W.elements[2],A.__data[3]=0,A.__data[4]=W.elements[3],A.__data[5]=W.elements[4],A.__data[6]=W.elements[5],A.__data[7]=0,A.__data[8]=W.elements[6],A.__data[9]=W.elements[7],A.__data[10]=W.elements[8],A.__data[11]=0):(W.toArray(A.__data,Y),Y+=K.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,z,A.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function f(b,M,E,O){let C=b.value,D=M+"_"+E;if(O[D]===void 0)return typeof C=="number"||typeof C=="boolean"?O[D]=C:O[D]=C.clone(),!0;{let F=O[D];if(typeof C=="number"||typeof C=="boolean"){if(F!==C)return O[D]=C,!0}else if(F.equals(C)===!1)return F.copy(C),!0}return!1}function g(b){let M=b.uniforms,E=0,O=16;for(let D=0,F=M.length;D<F;D++){let w=Array.isArray(M[D])?M[D]:[M[D]];for(let _=0,A=w.length;_<A;_++){let z=w[_],V=Array.isArray(z.value)?z.value:[z.value];for(let Y=0,X=V.length;Y<X;Y++){let W=V[Y],K=v(W),B=E%O,le=B%K.boundary,fe=B+le;E+=le,fe!==0&&O-fe<K.storage&&(E+=O-fe),z.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=E,E+=K.storage}}}let C=E%O;return C>0&&(E+=O-C),b.__size=E,b.__cache={},this}function v(b){let M={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(M.boundary=4,M.storage=4):b.isVector2?(M.boundary=8,M.storage=8):b.isVector3||b.isColor?(M.boundary=16,M.storage=12):b.isVector4?(M.boundary=16,M.storage=16):b.isMatrix3?(M.boundary=48,M.storage=48):b.isMatrix4?(M.boundary=64,M.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),M}function m(b){let M=b.target;M.removeEventListener("dispose",m);let E=o.indexOf(M.__bindingPointIndex);o.splice(E,1),n.deleteBuffer(r[M.id]),delete r[M.id],delete s[M.id]}function p(){for(let b in r)n.deleteBuffer(r[b]);o=[],r={},s={}}return{bind:c,update:l,dispose:p}}var qc=class{constructor(e={}){let{canvas:t=eC(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let h;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");h=i.getContextAttributes().alpha}else h=o;let f=new Uint32Array(4),g=new Int32Array(4),v=null,m=null,p=[],b=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Qn,this.toneMapping=zi,this.toneMappingExposure=1;let M=this,E=!1,O=0,C=0,D=null,F=-1,w=null,_=new ht,A=new ht,z=null,V=new qe(0),Y=0,X=t.width,W=t.height,K=1,B=null,le=null,fe=new ht(0,0,X,W),_e=new ht(0,0,X,W),Xe=!1,ot=new Eo,G=!1,ee=!1,ve=new _t,de=new P,Ce=new ht,Ne={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},We=!1;function mt(){return D===null?K:1}let T=i;function bt(x,R){return t.getContext(x,R)}try{let x={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${wf}`),t.addEventListener("webglcontextlost",j,!1),t.addEventListener("webglcontextrestored",$,!1),t.addEventListener("webglcontextcreationerror",se,!1),T===null){let R="webgl2";if(T=bt(R,x),T===null)throw bt(R)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(x){throw console.error("THREE.WebGLRenderer: "+x.message),x}let it,at,be,wt,Ie,Oe,S,y,U,q,Q,Z,we,ae,he,Le,ne,ue,Ye,Ae,pe,Pe,ze,ft;function I(){it=new dT(T),it.init(),Pe=new HA(T,it),at=new sT(T,it,e,Pe),be=new VA(T),wt=new pT(T),Ie=new DA,Oe=new zA(T,it,be,Ie,at,Pe,wt),S=new aT(M),y=new uT(M),U=new MC(T),ze=new iT(T,U),q=new hT(T,U,wt,ze),Q=new gT(T,q,U,wt),Ye=new mT(T,at,Oe),Le=new oT(Ie),Z=new CA(M,S,y,it,at,ze,Le),we=new qA(M,Ie),ae=new AA,he=new FA(it),ue=new nT(M,S,y,be,Q,h,c),ne=new UA(M,Q,at),ft=new XA(T,wt,at,be),Ae=new rT(T,it,wt),pe=new fT(T,it,wt),wt.programs=Z.programs,M.capabilities=at,M.extensions=it,M.properties=Ie,M.renderLists=ae,M.shadowMap=ne,M.state=be,M.info=wt}I();let ie=new df(M,T);this.xr=ie,this.getContext=function(){return T},this.getContextAttributes=function(){return T.getContextAttributes()},this.forceContextLoss=function(){let x=it.get("WEBGL_lose_context");x&&x.loseContext()},this.forceContextRestore=function(){let x=it.get("WEBGL_lose_context");x&&x.restoreContext()},this.getPixelRatio=function(){return K},this.setPixelRatio=function(x){x!==void 0&&(K=x,this.setSize(X,W,!1))},this.getSize=function(x){return x.set(X,W)},this.setSize=function(x,R,L=!0){if(ie.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}X=x,W=R,t.width=Math.floor(x*K),t.height=Math.floor(R*K),L===!0&&(t.style.width=x+"px",t.style.height=R+"px"),this.setViewport(0,0,x,R)},this.getDrawingBufferSize=function(x){return x.set(X*K,W*K).floor()},this.setDrawingBufferSize=function(x,R,L){X=x,W=R,K=L,t.width=Math.floor(x*L),t.height=Math.floor(R*L),this.setViewport(0,0,x,R)},this.getCurrentViewport=function(x){return x.copy(_)},this.getViewport=function(x){return x.copy(fe)},this.setViewport=function(x,R,L,k){x.isVector4?fe.set(x.x,x.y,x.z,x.w):fe.set(x,R,L,k),be.viewport(_.copy(fe).multiplyScalar(K).round())},this.getScissor=function(x){return x.copy(_e)},this.setScissor=function(x,R,L,k){x.isVector4?_e.set(x.x,x.y,x.z,x.w):_e.set(x,R,L,k),be.scissor(A.copy(_e).multiplyScalar(K).round())},this.getScissorTest=function(){return Xe},this.setScissorTest=function(x){be.setScissorTest(Xe=x)},this.setOpaqueSort=function(x){B=x},this.setTransparentSort=function(x){le=x},this.getClearColor=function(x){return x.copy(ue.getClearColor())},this.setClearColor=function(){ue.setClearColor.apply(ue,arguments)},this.getClearAlpha=function(){return ue.getClearAlpha()},this.setClearAlpha=function(){ue.setClearAlpha.apply(ue,arguments)},this.clear=function(x=!0,R=!0,L=!0){let k=0;if(x){let N=!1;if(D!==null){let re=D.texture.format;N=re===Af||re===Tf||re===Df}if(N){let re=D.texture.type,ce=re===wi||re===Mr||re===wo||re===Ts||re===Sf||re===Cf,me=ue.getClearColor(),ge=ue.getClearAlpha(),Se=me.r,De=me.g,xe=me.b;ce?(f[0]=Se,f[1]=De,f[2]=xe,f[3]=ge,T.clearBufferuiv(T.COLOR,0,f)):(g[0]=Se,g[1]=De,g[2]=xe,g[3]=ge,T.clearBufferiv(T.COLOR,0,g))}else k|=T.COLOR_BUFFER_BIT}R&&(k|=T.DEPTH_BUFFER_BIT),L&&(k|=T.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),T.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",j,!1),t.removeEventListener("webglcontextrestored",$,!1),t.removeEventListener("webglcontextcreationerror",se,!1),ae.dispose(),he.dispose(),Ie.dispose(),S.dispose(),y.dispose(),Q.dispose(),ze.dispose(),ft.dispose(),Z.dispose(),ie.dispose(),ie.removeEventListener("sessionstart",zn),ie.removeEventListener("sessionend",Of),qi.stop()};function j(x){x.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function $(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;let x=wt.autoReset,R=ne.enabled,L=ne.autoUpdate,k=ne.needsUpdate,N=ne.type;I(),wt.autoReset=x,ne.enabled=R,ne.autoUpdate=L,ne.needsUpdate=k,ne.type=N}function se(x){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",x.statusMessage)}function Ee(x){let R=x.target;R.removeEventListener("dispose",Ee),Ze(R)}function Ze(x){Et(x),Ie.remove(x)}function Et(x){let R=Ie.get(x).programs;R!==void 0&&(R.forEach(function(L){Z.releaseProgram(L)}),x.isShaderMaterial&&Z.releaseShaderCache(x))}this.renderBufferDirect=function(x,R,L,k,N,re){R===null&&(R=Ne);let ce=N.isMesh&&N.matrixWorld.determinant()<0,me=Fy(x,R,L,k,N);be.setMaterial(k,ce);let ge=L.index,Se=1;if(k.wireframe===!0){if(ge=q.getWireframeAttribute(L),ge===void 0)return;Se=2}let De=L.drawRange,xe=L.attributes.position,Qe=De.start*Se,gt=(De.start+De.count)*Se;re!==null&&(Qe=Math.max(Qe,re.start*Se),gt=Math.min(gt,(re.start+re.count)*Se)),ge!==null?(Qe=Math.max(Qe,0),gt=Math.min(gt,ge.count)):xe!=null&&(Qe=Math.max(Qe,0),gt=Math.min(gt,xe.count));let vt=gt-Qe;if(vt<0||vt===1/0)return;ze.setup(N,k,me,L,ge);let sn,et=Ae;if(ge!==null&&(sn=U.get(ge),et=pe,et.setIndex(sn)),N.isMesh)k.wireframe===!0?(be.setLineWidth(k.wireframeLinewidth*mt()),et.setMode(T.LINES)):et.setMode(T.TRIANGLES);else if(N.isLine){let Me=k.linewidth;Me===void 0&&(Me=1),be.setLineWidth(Me*mt()),N.isLineSegments?et.setMode(T.LINES):N.isLineLoop?et.setMode(T.LINE_LOOP):et.setMode(T.LINE_STRIP)}else N.isPoints?et.setMode(T.POINTS):N.isSprite&&et.setMode(T.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)et.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(it.get("WEBGL_multi_draw"))et.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{let Me=N._multiDrawStarts,Lt=N._multiDrawCounts,tt=N._multiDrawCount,Cn=ge?U.get(ge).bytesPerElement:1,Tr=Ie.get(k).currentProgram.getUniforms();for(let on=0;on<tt;on++)Tr.setValue(T,"_gl_DrawID",on),et.render(Me[on]/Cn,Lt[on])}else if(N.isInstancedMesh)et.renderInstances(Qe,vt,N.count);else if(L.isInstancedBufferGeometry){let Me=L._maxInstanceCount!==void 0?L._maxInstanceCount:1/0,Lt=Math.min(L.instanceCount,Me);et.renderInstances(Qe,vt,Lt)}else et.render(Qe,vt)};function Ft(x,R,L){x.transparent===!0&&x.side===xi&&x.forceSinglePass===!1?(x.side=nn,x.needsUpdate=!0,Ro(x,R,L),x.side=Hi,x.needsUpdate=!0,Ro(x,R,L),x.side=xi):Ro(x,R,L)}this.compile=function(x,R,L=null){L===null&&(L=x),m=he.get(L),m.init(R),b.push(m),L.traverseVisible(function(N){N.isLight&&N.layers.test(R.layers)&&(m.pushLight(N),N.castShadow&&m.pushShadow(N))}),x!==L&&x.traverseVisible(function(N){N.isLight&&N.layers.test(R.layers)&&(m.pushLight(N),N.castShadow&&m.pushShadow(N))}),m.setupLights();let k=new Set;return x.traverse(function(N){let re=N.material;if(re)if(Array.isArray(re))for(let ce=0;ce<re.length;ce++){let me=re[ce];Ft(me,L,N),k.add(me)}else Ft(re,L,N),k.add(re)}),b.pop(),m=null,k},this.compileAsync=function(x,R,L=null){let k=this.compile(x,R,L);return new Promise(N=>{function re(){if(k.forEach(function(ce){Ie.get(ce).currentProgram.isReady()&&k.delete(ce)}),k.size===0){N(x);return}setTimeout(re,10)}it.get("KHR_parallel_shader_compile")!==null?re():setTimeout(re,10)})};let Ke=null;function ii(x){Ke&&Ke(x)}function zn(){qi.stop()}function Of(){qi.start()}let qi=new xy;qi.setAnimationLoop(ii),typeof self<"u"&&qi.setContext(self),this.setAnimationLoop=function(x){Ke=x,ie.setAnimationLoop(x),x===null?qi.stop():qi.start()},ie.addEventListener("sessionstart",zn),ie.addEventListener("sessionend",Of),this.render=function(x,R){if(R!==void 0&&R.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;if(x.matrixWorldAutoUpdate===!0&&x.updateMatrixWorld(),R.parent===null&&R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),ie.enabled===!0&&ie.isPresenting===!0&&(ie.cameraAutoUpdate===!0&&ie.updateCamera(R),R=ie.getCamera()),x.isScene===!0&&x.onBeforeRender(M,x,R,D),m=he.get(x,b.length),m.init(R),b.push(m),ve.multiplyMatrices(R.projectionMatrix,R.matrixWorldInverse),ot.setFromProjectionMatrix(ve),ee=this.localClippingEnabled,G=Le.init(this.clippingPlanes,ee),v=ae.get(x,p.length),v.init(),p.push(v),ie.enabled===!0&&ie.isPresenting===!0){let re=M.xr.getDepthSensingMesh();re!==null&&ul(re,R,-1/0,M.sortObjects)}ul(x,R,0,M.sortObjects),v.finish(),M.sortObjects===!0&&v.sort(B,le),We=ie.enabled===!1||ie.isPresenting===!1||ie.hasDepthSensing()===!1,We&&ue.addToRenderList(v,x),this.info.render.frame++,G===!0&&Le.beginShadows();let L=m.state.shadowsArray;ne.render(L,x,R),G===!0&&Le.endShadows(),this.info.autoReset===!0&&this.info.reset();let k=v.opaque,N=v.transmissive;if(m.setupLights(),R.isArrayCamera){let re=R.cameras;if(N.length>0)for(let ce=0,me=re.length;ce<me;ce++){let ge=re[ce];Lf(k,N,x,ge)}We&&ue.render(x);for(let ce=0,me=re.length;ce<me;ce++){let ge=re[ce];Ff(v,x,ge,ge.viewport)}}else N.length>0&&Lf(k,N,x,R),We&&ue.render(x),Ff(v,x,R);D!==null&&(Oe.updateMultisampleRenderTarget(D),Oe.updateRenderTargetMipmap(D)),x.isScene===!0&&x.onAfterRender(M,x,R),ze.resetDefaultState(),F=-1,w=null,b.pop(),b.length>0?(m=b[b.length-1],G===!0&&Le.setGlobalState(M.clippingPlanes,m.state.camera)):m=null,p.pop(),p.length>0?v=p[p.length-1]:v=null};function ul(x,R,L,k){if(x.visible===!1)return;if(x.layers.test(R.layers)){if(x.isGroup)L=x.renderOrder;else if(x.isLOD)x.autoUpdate===!0&&x.update(R);else if(x.isLight)m.pushLight(x),x.castShadow&&m.pushShadow(x);else if(x.isSprite){if(!x.frustumCulled||ot.intersectsSprite(x)){k&&Ce.setFromMatrixPosition(x.matrixWorld).applyMatrix4(ve);let ce=Q.update(x),me=x.material;me.visible&&v.push(x,ce,me,L,Ce.z,null)}}else if((x.isMesh||x.isLine||x.isPoints)&&(!x.frustumCulled||ot.intersectsObject(x))){let ce=Q.update(x),me=x.material;if(k&&(x.boundingSphere!==void 0?(x.boundingSphere===null&&x.computeBoundingSphere(),Ce.copy(x.boundingSphere.center)):(ce.boundingSphere===null&&ce.computeBoundingSphere(),Ce.copy(ce.boundingSphere.center)),Ce.applyMatrix4(x.matrixWorld).applyMatrix4(ve)),Array.isArray(me)){let ge=ce.groups;for(let Se=0,De=ge.length;Se<De;Se++){let xe=ge[Se],Qe=me[xe.materialIndex];Qe&&Qe.visible&&v.push(x,ce,Qe,L,Ce.z,xe)}}else me.visible&&v.push(x,ce,me,L,Ce.z,null)}}let re=x.children;for(let ce=0,me=re.length;ce<me;ce++)ul(re[ce],R,L,k)}function Ff(x,R,L,k){let N=x.opaque,re=x.transmissive,ce=x.transparent;m.setupLightsView(L),G===!0&&Le.setGlobalState(M.clippingPlanes,L),k&&be.viewport(_.copy(k)),N.length>0&&Io(N,R,L),re.length>0&&Io(re,R,L),ce.length>0&&Io(ce,R,L),be.buffers.depth.setTest(!0),be.buffers.depth.setMask(!0),be.buffers.color.setMask(!0),be.setPolygonOffset(!1)}function Lf(x,R,L,k){if((L.isScene===!0?L.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[k.id]===void 0&&(m.state.transmissionRenderTarget[k.id]=new Ei(1,1,{generateMipmaps:!0,type:it.has("EXT_color_buffer_half_float")||it.has("EXT_color_buffer_float")?To:wi,minFilter:xr,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:nt.workingColorSpace}));let re=m.state.transmissionRenderTarget[k.id],ce=k.viewport||_;re.setSize(ce.z,ce.w);let me=M.getRenderTarget();M.setRenderTarget(re),M.getClearColor(V),Y=M.getClearAlpha(),Y<1&&M.setClearColor(16777215,.5),M.clear(),We&&ue.render(L);let ge=M.toneMapping;M.toneMapping=zi;let Se=k.viewport;if(k.viewport!==void 0&&(k.viewport=void 0),m.setupLightsView(k),G===!0&&Le.setGlobalState(M.clippingPlanes,k),Io(x,L,k),Oe.updateMultisampleRenderTarget(re),Oe.updateRenderTargetMipmap(re),it.has("WEBGL_multisampled_render_to_texture")===!1){let De=!1;for(let xe=0,Qe=R.length;xe<Qe;xe++){let gt=R[xe],vt=gt.object,sn=gt.geometry,et=gt.material,Me=gt.group;if(et.side===xi&&vt.layers.test(k.layers)){let Lt=et.side;et.side=nn,et.needsUpdate=!0,kf(vt,L,k,sn,et,Me),et.side=Lt,et.needsUpdate=!0,De=!0}}De===!0&&(Oe.updateMultisampleRenderTarget(re),Oe.updateRenderTargetMipmap(re))}M.setRenderTarget(me),M.setClearColor(V,Y),Se!==void 0&&(k.viewport=Se),M.toneMapping=ge}function Io(x,R,L){let k=R.isScene===!0?R.overrideMaterial:null;for(let N=0,re=x.length;N<re;N++){let ce=x[N],me=ce.object,ge=ce.geometry,Se=k===null?ce.material:k,De=ce.group;me.layers.test(L.layers)&&kf(me,R,L,ge,Se,De)}}function kf(x,R,L,k,N,re){x.onBeforeRender(M,R,L,k,N,re),x.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,x.matrixWorld),x.normalMatrix.getNormalMatrix(x.modelViewMatrix),N.onBeforeRender(M,R,L,k,x,re),N.transparent===!0&&N.side===xi&&N.forceSinglePass===!1?(N.side=nn,N.needsUpdate=!0,M.renderBufferDirect(L,R,k,N,x,re),N.side=Hi,N.needsUpdate=!0,M.renderBufferDirect(L,R,k,N,x,re),N.side=xi):M.renderBufferDirect(L,R,k,N,x,re),x.onAfterRender(M,R,L,k,N,re)}function Ro(x,R,L){R.isScene!==!0&&(R=Ne);let k=Ie.get(x),N=m.state.lights,re=m.state.shadowsArray,ce=N.state.version,me=Z.getParameters(x,N.state,re,R,L),ge=Z.getProgramCacheKey(me),Se=k.programs;k.environment=x.isMeshStandardMaterial?R.environment:null,k.fog=R.fog,k.envMap=(x.isMeshStandardMaterial?y:S).get(x.envMap||k.environment),k.envMapRotation=k.environment!==null&&x.envMap===null?R.environmentRotation:x.envMapRotation,Se===void 0&&(x.addEventListener("dispose",Ee),Se=new Map,k.programs=Se);let De=Se.get(ge);if(De!==void 0){if(k.currentProgram===De&&k.lightsStateVersion===ce)return Vf(x,me),De}else me.uniforms=Z.getUniforms(x),x.onBeforeCompile(me,M),De=Z.acquireProgram(me,ge),Se.set(ge,De),k.uniforms=me.uniforms;let xe=k.uniforms;return(!x.isShaderMaterial&&!x.isRawShaderMaterial||x.clipping===!0)&&(xe.clippingPlanes=Le.uniform),Vf(x,me),k.needsLights=ky(x),k.lightsStateVersion=ce,k.needsLights&&(xe.ambientLightColor.value=N.state.ambient,xe.lightProbe.value=N.state.probe,xe.directionalLights.value=N.state.directional,xe.directionalLightShadows.value=N.state.directionalShadow,xe.spotLights.value=N.state.spot,xe.spotLightShadows.value=N.state.spotShadow,xe.rectAreaLights.value=N.state.rectArea,xe.ltc_1.value=N.state.rectAreaLTC1,xe.ltc_2.value=N.state.rectAreaLTC2,xe.pointLights.value=N.state.point,xe.pointLightShadows.value=N.state.pointShadow,xe.hemisphereLights.value=N.state.hemi,xe.directionalShadowMap.value=N.state.directionalShadowMap,xe.directionalShadowMatrix.value=N.state.directionalShadowMatrix,xe.spotShadowMap.value=N.state.spotShadowMap,xe.spotLightMatrix.value=N.state.spotLightMatrix,xe.spotLightMap.value=N.state.spotLightMap,xe.pointShadowMap.value=N.state.pointShadowMap,xe.pointShadowMatrix.value=N.state.pointShadowMatrix),k.currentProgram=De,k.uniformsList=null,De}function Uf(x){if(x.uniformsList===null){let R=x.currentProgram.getUniforms();x.uniformsList=Ss.seqWithValue(R.seq,x.uniforms)}return x.uniformsList}function Vf(x,R){let L=Ie.get(x);L.outputColorSpace=R.outputColorSpace,L.batching=R.batching,L.batchingColor=R.batchingColor,L.instancing=R.instancing,L.instancingColor=R.instancingColor,L.instancingMorph=R.instancingMorph,L.skinning=R.skinning,L.morphTargets=R.morphTargets,L.morphNormals=R.morphNormals,L.morphColors=R.morphColors,L.morphTargetsCount=R.morphTargetsCount,L.numClippingPlanes=R.numClippingPlanes,L.numIntersection=R.numClipIntersection,L.vertexAlphas=R.vertexAlphas,L.vertexTangents=R.vertexTangents,L.toneMapping=R.toneMapping}function Fy(x,R,L,k,N){R.isScene!==!0&&(R=Ne),Oe.resetTextureUnits();let re=R.fog,ce=k.isMeshStandardMaterial?R.environment:null,me=D===null?M.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:$i,ge=(k.isMeshStandardMaterial?y:S).get(k.envMap||ce),Se=k.vertexColors===!0&&!!L.attributes.color&&L.attributes.color.itemSize===4,De=!!L.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),xe=!!L.morphAttributes.position,Qe=!!L.morphAttributes.normal,gt=!!L.morphAttributes.color,vt=zi;k.toneMapped&&(D===null||D.isXRRenderTarget===!0)&&(vt=M.toneMapping);let sn=L.morphAttributes.position||L.morphAttributes.normal||L.morphAttributes.color,et=sn!==void 0?sn.length:0,Me=Ie.get(k),Lt=m.state.lights;if(G===!0&&(ee===!0||x!==w)){let gn=x===w&&k.id===F;Le.setState(k,x,gn)}let tt=!1;k.version===Me.__version?(Me.needsLights&&Me.lightsStateVersion!==Lt.state.version||Me.outputColorSpace!==me||N.isBatchedMesh&&Me.batching===!1||!N.isBatchedMesh&&Me.batching===!0||N.isBatchedMesh&&Me.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&Me.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&Me.instancing===!1||!N.isInstancedMesh&&Me.instancing===!0||N.isSkinnedMesh&&Me.skinning===!1||!N.isSkinnedMesh&&Me.skinning===!0||N.isInstancedMesh&&Me.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&Me.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&Me.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&Me.instancingMorph===!1&&N.morphTexture!==null||Me.envMap!==ge||k.fog===!0&&Me.fog!==re||Me.numClippingPlanes!==void 0&&(Me.numClippingPlanes!==Le.numPlanes||Me.numIntersection!==Le.numIntersection)||Me.vertexAlphas!==Se||Me.vertexTangents!==De||Me.morphTargets!==xe||Me.morphNormals!==Qe||Me.morphColors!==gt||Me.toneMapping!==vt||Me.morphTargetsCount!==et)&&(tt=!0):(tt=!0,Me.__version=k.version);let Cn=Me.currentProgram;tt===!0&&(Cn=Ro(k,R,N));let Tr=!1,on=!1,dl=!1,St=Cn.getUniforms(),Si=Me.uniforms;if(be.useProgram(Cn.program)&&(Tr=!0,on=!0,dl=!0),k.id!==F&&(F=k.id,on=!0),Tr||w!==x){St.setValue(T,"projectionMatrix",x.projectionMatrix),St.setValue(T,"viewMatrix",x.matrixWorldInverse);let gn=St.map.cameraPosition;gn!==void 0&&gn.setValue(T,de.setFromMatrixPosition(x.matrixWorld)),at.logarithmicDepthBuffer&&St.setValue(T,"logDepthBufFC",2/(Math.log(x.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&St.setValue(T,"isOrthographic",x.isOrthographicCamera===!0),w!==x&&(w=x,on=!0,dl=!0)}if(N.isSkinnedMesh){St.setOptional(T,N,"bindMatrix"),St.setOptional(T,N,"bindMatrixInverse");let gn=N.skeleton;gn&&(gn.boneTexture===null&&gn.computeBoneTexture(),St.setValue(T,"boneTexture",gn.boneTexture,Oe))}N.isBatchedMesh&&(St.setOptional(T,N,"batchingTexture"),St.setValue(T,"batchingTexture",N._matricesTexture,Oe),St.setOptional(T,N,"batchingIdTexture"),St.setValue(T,"batchingIdTexture",N._indirectTexture,Oe),St.setOptional(T,N,"batchingColorTexture"),N._colorsTexture!==null&&St.setValue(T,"batchingColorTexture",N._colorsTexture,Oe));let hl=L.morphAttributes;if((hl.position!==void 0||hl.normal!==void 0||hl.color!==void 0)&&Ye.update(N,L,Cn),(on||Me.receiveShadow!==N.receiveShadow)&&(Me.receiveShadow=N.receiveShadow,St.setValue(T,"receiveShadow",N.receiveShadow)),k.isMeshGouraudMaterial&&k.envMap!==null&&(Si.envMap.value=ge,Si.flipEnvMap.value=ge.isCubeTexture&&ge.isRenderTargetTexture===!1?-1:1),k.isMeshStandardMaterial&&k.envMap===null&&R.environment!==null&&(Si.envMapIntensity.value=R.environmentIntensity),on&&(St.setValue(T,"toneMappingExposure",M.toneMappingExposure),Me.needsLights&&Ly(Si,dl),re&&k.fog===!0&&we.refreshFogUniforms(Si,re),we.refreshMaterialUniforms(Si,k,K,W,m.state.transmissionRenderTarget[x.id]),Ss.upload(T,Uf(Me),Si,Oe)),k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(Ss.upload(T,Uf(Me),Si,Oe),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&St.setValue(T,"center",N.center),St.setValue(T,"modelViewMatrix",N.modelViewMatrix),St.setValue(T,"normalMatrix",N.normalMatrix),St.setValue(T,"modelMatrix",N.matrixWorld),k.isShaderMaterial||k.isRawShaderMaterial){let gn=k.uniformsGroups;for(let fl=0,Uy=gn.length;fl<Uy;fl++){let Bf=gn[fl];ft.update(Bf,Cn),ft.bind(Bf,Cn)}}return Cn}function Ly(x,R){x.ambientLightColor.needsUpdate=R,x.lightProbe.needsUpdate=R,x.directionalLights.needsUpdate=R,x.directionalLightShadows.needsUpdate=R,x.pointLights.needsUpdate=R,x.pointLightShadows.needsUpdate=R,x.spotLights.needsUpdate=R,x.spotLightShadows.needsUpdate=R,x.rectAreaLights.needsUpdate=R,x.hemisphereLights.needsUpdate=R}function ky(x){return x.isMeshLambertMaterial||x.isMeshToonMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isShadowMaterial||x.isShaderMaterial&&x.lights===!0}this.getActiveCubeFace=function(){return O},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return D},this.setRenderTargetTextures=function(x,R,L){Ie.get(x.texture).__webglTexture=R,Ie.get(x.depthTexture).__webglTexture=L;let k=Ie.get(x);k.__hasExternalTextures=!0,k.__autoAllocateDepthBuffer=L===void 0,k.__autoAllocateDepthBuffer||it.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),k.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(x,R){let L=Ie.get(x);L.__webglFramebuffer=R,L.__useDefaultFramebuffer=R===void 0},this.setRenderTarget=function(x,R=0,L=0){D=x,O=R,C=L;let k=!0,N=null,re=!1,ce=!1;if(x){let ge=Ie.get(x);if(ge.__useDefaultFramebuffer!==void 0)be.bindFramebuffer(T.FRAMEBUFFER,null),k=!1;else if(ge.__webglFramebuffer===void 0)Oe.setupRenderTarget(x);else if(ge.__hasExternalTextures)Oe.rebindTextures(x,Ie.get(x.texture).__webglTexture,Ie.get(x.depthTexture).__webglTexture);else if(x.depthBuffer){let xe=x.depthTexture;if(ge.__boundDepthTexture!==xe){if(xe!==null&&Ie.has(xe)&&(x.width!==xe.image.width||x.height!==xe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Oe.setupDepthRenderbuffer(x)}}let Se=x.texture;(Se.isData3DTexture||Se.isDataArrayTexture||Se.isCompressedArrayTexture)&&(ce=!0);let De=Ie.get(x).__webglFramebuffer;x.isWebGLCubeRenderTarget?(Array.isArray(De[R])?N=De[R][L]:N=De[R],re=!0):x.samples>0&&Oe.useMultisampledRTT(x)===!1?N=Ie.get(x).__webglMultisampledFramebuffer:Array.isArray(De)?N=De[L]:N=De,_.copy(x.viewport),A.copy(x.scissor),z=x.scissorTest}else _.copy(fe).multiplyScalar(K).floor(),A.copy(_e).multiplyScalar(K).floor(),z=Xe;if(be.bindFramebuffer(T.FRAMEBUFFER,N)&&k&&be.drawBuffers(x,N),be.viewport(_),be.scissor(A),be.setScissorTest(z),re){let ge=Ie.get(x.texture);T.framebufferTexture2D(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_CUBE_MAP_POSITIVE_X+R,ge.__webglTexture,L)}else if(ce){let ge=Ie.get(x.texture),Se=R||0;T.framebufferTextureLayer(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0,ge.__webglTexture,L||0,Se)}F=-1},this.readRenderTargetPixels=function(x,R,L,k,N,re,ce){if(!(x&&x.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let me=Ie.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&ce!==void 0&&(me=me[ce]),me){be.bindFramebuffer(T.FRAMEBUFFER,me);try{let ge=x.texture,Se=ge.format,De=ge.type;if(!at.textureFormatReadable(Se)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!at.textureTypeReadable(De)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}R>=0&&R<=x.width-k&&L>=0&&L<=x.height-N&&T.readPixels(R,L,k,N,Pe.convert(Se),Pe.convert(De),re)}finally{let ge=D!==null?Ie.get(D).__webglFramebuffer:null;be.bindFramebuffer(T.FRAMEBUFFER,ge)}}},this.readRenderTargetPixelsAsync=function(x,R,L,k,N,re,ce){return Po(this,null,function*(){if(!(x&&x.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let me=Ie.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&ce!==void 0&&(me=me[ce]),me){be.bindFramebuffer(T.FRAMEBUFFER,me);try{let ge=x.texture,Se=ge.format,De=ge.type;if(!at.textureFormatReadable(Se))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!at.textureTypeReadable(De))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(R>=0&&R<=x.width-k&&L>=0&&L<=x.height-N){let xe=T.createBuffer();T.bindBuffer(T.PIXEL_PACK_BUFFER,xe),T.bufferData(T.PIXEL_PACK_BUFFER,re.byteLength,T.STREAM_READ),T.readPixels(R,L,k,N,Pe.convert(Se),Pe.convert(De),0),T.flush();let Qe=T.fenceSync(T.SYNC_GPU_COMMANDS_COMPLETE,0);yield tC(T,Qe,4);try{T.bindBuffer(T.PIXEL_PACK_BUFFER,xe),T.getBufferSubData(T.PIXEL_PACK_BUFFER,0,re)}finally{T.deleteBuffer(xe),T.deleteSync(Qe)}return re}}finally{let ge=D!==null?Ie.get(D).__webglFramebuffer:null;be.bindFramebuffer(T.FRAMEBUFFER,ge)}}})},this.copyFramebufferToTexture=function(x,R=null,L=0){x.isTexture!==!0&&(Mo("WebGLRenderer: copyFramebufferToTexture function signature has changed."),R=arguments[0]||null,x=arguments[1]);let k=Math.pow(2,-L),N=Math.floor(x.image.width*k),re=Math.floor(x.image.height*k),ce=R!==null?R.x:0,me=R!==null?R.y:0;Oe.setTexture2D(x,0),T.copyTexSubImage2D(T.TEXTURE_2D,L,0,0,ce,me,N,re),be.unbindTexture()},this.copyTextureToTexture=function(x,R,L=null,k=null,N=0){x.isTexture!==!0&&(Mo("WebGLRenderer: copyTextureToTexture function signature has changed."),k=arguments[0]||null,x=arguments[1],R=arguments[2],N=arguments[3]||0,L=null);let re,ce,me,ge,Se,De;L!==null?(re=L.max.x-L.min.x,ce=L.max.y-L.min.y,me=L.min.x,ge=L.min.y):(re=x.image.width,ce=x.image.height,me=0,ge=0),k!==null?(Se=k.x,De=k.y):(Se=0,De=0);let xe=Pe.convert(R.format),Qe=Pe.convert(R.type);Oe.setTexture2D(R,0),T.pixelStorei(T.UNPACK_FLIP_Y_WEBGL,R.flipY),T.pixelStorei(T.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),T.pixelStorei(T.UNPACK_ALIGNMENT,R.unpackAlignment);let gt=T.getParameter(T.UNPACK_ROW_LENGTH),vt=T.getParameter(T.UNPACK_IMAGE_HEIGHT),sn=T.getParameter(T.UNPACK_SKIP_PIXELS),et=T.getParameter(T.UNPACK_SKIP_ROWS),Me=T.getParameter(T.UNPACK_SKIP_IMAGES),Lt=x.isCompressedTexture?x.mipmaps[N]:x.image;T.pixelStorei(T.UNPACK_ROW_LENGTH,Lt.width),T.pixelStorei(T.UNPACK_IMAGE_HEIGHT,Lt.height),T.pixelStorei(T.UNPACK_SKIP_PIXELS,me),T.pixelStorei(T.UNPACK_SKIP_ROWS,ge),x.isDataTexture?T.texSubImage2D(T.TEXTURE_2D,N,Se,De,re,ce,xe,Qe,Lt.data):x.isCompressedTexture?T.compressedTexSubImage2D(T.TEXTURE_2D,N,Se,De,Lt.width,Lt.height,xe,Lt.data):T.texSubImage2D(T.TEXTURE_2D,N,Se,De,re,ce,xe,Qe,Lt),T.pixelStorei(T.UNPACK_ROW_LENGTH,gt),T.pixelStorei(T.UNPACK_IMAGE_HEIGHT,vt),T.pixelStorei(T.UNPACK_SKIP_PIXELS,sn),T.pixelStorei(T.UNPACK_SKIP_ROWS,et),T.pixelStorei(T.UNPACK_SKIP_IMAGES,Me),N===0&&R.generateMipmaps&&T.generateMipmap(T.TEXTURE_2D),be.unbindTexture()},this.copyTextureToTexture3D=function(x,R,L=null,k=null,N=0){x.isTexture!==!0&&(Mo("WebGLRenderer: copyTextureToTexture3D function signature has changed."),L=arguments[0]||null,k=arguments[1]||null,x=arguments[2],R=arguments[3],N=arguments[4]||0);let re,ce,me,ge,Se,De,xe,Qe,gt,vt=x.isCompressedTexture?x.mipmaps[N]:x.image;L!==null?(re=L.max.x-L.min.x,ce=L.max.y-L.min.y,me=L.max.z-L.min.z,ge=L.min.x,Se=L.min.y,De=L.min.z):(re=vt.width,ce=vt.height,me=vt.depth,ge=0,Se=0,De=0),k!==null?(xe=k.x,Qe=k.y,gt=k.z):(xe=0,Qe=0,gt=0);let sn=Pe.convert(R.format),et=Pe.convert(R.type),Me;if(R.isData3DTexture)Oe.setTexture3D(R,0),Me=T.TEXTURE_3D;else if(R.isDataArrayTexture||R.isCompressedArrayTexture)Oe.setTexture2DArray(R,0),Me=T.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}T.pixelStorei(T.UNPACK_FLIP_Y_WEBGL,R.flipY),T.pixelStorei(T.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),T.pixelStorei(T.UNPACK_ALIGNMENT,R.unpackAlignment);let Lt=T.getParameter(T.UNPACK_ROW_LENGTH),tt=T.getParameter(T.UNPACK_IMAGE_HEIGHT),Cn=T.getParameter(T.UNPACK_SKIP_PIXELS),Tr=T.getParameter(T.UNPACK_SKIP_ROWS),on=T.getParameter(T.UNPACK_SKIP_IMAGES);T.pixelStorei(T.UNPACK_ROW_LENGTH,vt.width),T.pixelStorei(T.UNPACK_IMAGE_HEIGHT,vt.height),T.pixelStorei(T.UNPACK_SKIP_PIXELS,ge),T.pixelStorei(T.UNPACK_SKIP_ROWS,Se),T.pixelStorei(T.UNPACK_SKIP_IMAGES,De),x.isDataTexture||x.isData3DTexture?T.texSubImage3D(Me,N,xe,Qe,gt,re,ce,me,sn,et,vt.data):R.isCompressedArrayTexture?T.compressedTexSubImage3D(Me,N,xe,Qe,gt,re,ce,me,sn,vt.data):T.texSubImage3D(Me,N,xe,Qe,gt,re,ce,me,sn,et,vt),T.pixelStorei(T.UNPACK_ROW_LENGTH,Lt),T.pixelStorei(T.UNPACK_IMAGE_HEIGHT,tt),T.pixelStorei(T.UNPACK_SKIP_PIXELS,Cn),T.pixelStorei(T.UNPACK_SKIP_ROWS,Tr),T.pixelStorei(T.UNPACK_SKIP_IMAGES,on),N===0&&R.generateMipmaps&&T.generateMipmap(Me),be.unbindTexture()},this.initRenderTarget=function(x){Ie.get(x).__webglFramebuffer===void 0&&Oe.setupRenderTarget(x)},this.initTexture=function(x){x.isCubeTexture?Oe.setTextureCube(x,0):x.isData3DTexture?Oe.setTexture3D(x,0):x.isDataArrayTexture||x.isCompressedArrayTexture?Oe.setTexture2DArray(x,0):Oe.setTexture2D(x,0),be.unbindTexture()},this.resetState=function(){O=0,C=0,D=null,be.reset(),ze.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return bi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=e===If?"display-p3":"srgb",t.unpackColorSpace=nt.workingColorSpace===cl?"display-p3":"srgb"}};var Xc=class n{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new qe(e),this.near=t,this.far=i}clone(){return new n(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Yc=class extends ti{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new wr,this.environmentIntensity=1,this.environmentRotation=new wr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}};var So=class extends ji{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new qe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},K0=new _t,hf=new Lc,_c=new Is,xc=new P,Zc=class extends ti{constructor(e=new Sn,t=new So){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),_c.copy(i.boundingSphere),_c.applyMatrix4(r),_c.radius+=s,e.ray.intersectsSphere(_c)===!1)return;K0.copy(r).invert(),hf.copy(e.ray).applyMatrix4(K0);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=i.index,d=i.attributes.position;if(l!==null){let h=Math.max(0,o.start),f=Math.min(l.count,o.start+o.count);for(let g=h,v=f;g<v;g++){let m=l.getX(g);xc.fromBufferAttribute(d,m),Q0(xc,m,c,r,e,t,this)}}else{let h=Math.max(0,o.start),f=Math.min(d.count,o.start+o.count);for(let g=h,v=f;g<v;g++)xc.fromBufferAttribute(d,g),Q0(xc,g,c,r,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}};function Q0(n,e,t,i,r,s,o){let a=hf.distanceSqToPoint(n);if(a<t){let c=new P;hf.closestPointToPoint(n,c),c.applyMatrix4(i);let l=r.ray.origin.distanceTo(c);if(l<r.near||l>r.far)return;s.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,object:o})}}var Co=class n extends Sn{constructor(e=[],t=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:r};let s=[],o=[];a(r),l(i),u(),this.setAttribute("position",new Zt(s,3)),this.setAttribute("normal",new Zt(s.slice(),3)),this.setAttribute("uv",new Zt(o,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function a(b){let M=new P,E=new P,O=new P;for(let C=0;C<t.length;C+=3)f(t[C+0],M),f(t[C+1],E),f(t[C+2],O),c(M,E,O,b)}function c(b,M,E,O){let C=O+1,D=[];for(let F=0;F<=C;F++){D[F]=[];let w=b.clone().lerp(E,F/C),_=M.clone().lerp(E,F/C),A=C-F;for(let z=0;z<=A;z++)z===0&&F===C?D[F][z]=w:D[F][z]=w.clone().lerp(_,z/A)}for(let F=0;F<C;F++)for(let w=0;w<2*(C-F)-1;w++){let _=Math.floor(w/2);w%2===0?(h(D[F][_+1]),h(D[F+1][_]),h(D[F][_])):(h(D[F][_+1]),h(D[F+1][_+1]),h(D[F+1][_]))}}function l(b){let M=new P;for(let E=0;E<s.length;E+=3)M.x=s[E+0],M.y=s[E+1],M.z=s[E+2],M.normalize().multiplyScalar(b),s[E+0]=M.x,s[E+1]=M.y,s[E+2]=M.z}function u(){let b=new P;for(let M=0;M<s.length;M+=3){b.x=s[M+0],b.y=s[M+1],b.z=s[M+2];let E=m(b)/2/Math.PI+.5,O=p(b)/Math.PI+.5;o.push(E,1-O)}g(),d()}function d(){for(let b=0;b<o.length;b+=6){let M=o[b+0],E=o[b+2],O=o[b+4],C=Math.max(M,E,O),D=Math.min(M,E,O);C>.9&&D<.1&&(M<.2&&(o[b+0]+=1),E<.2&&(o[b+2]+=1),O<.2&&(o[b+4]+=1))}}function h(b){s.push(b.x,b.y,b.z)}function f(b,M){let E=b*3;M.x=e[E+0],M.y=e[E+1],M.z=e[E+2]}function g(){let b=new P,M=new P,E=new P,O=new P,C=new Ge,D=new Ge,F=new Ge;for(let w=0,_=0;w<s.length;w+=9,_+=6){b.set(s[w+0],s[w+1],s[w+2]),M.set(s[w+3],s[w+4],s[w+5]),E.set(s[w+6],s[w+7],s[w+8]),C.set(o[_+0],o[_+1]),D.set(o[_+2],o[_+3]),F.set(o[_+4],o[_+5]),O.copy(b).add(M).add(E).divideScalar(3);let A=m(O);v(C,_+0,b,A),v(D,_+2,M,A),v(F,_+4,E,A)}}function v(b,M,E,O){O<0&&b.x===1&&(o[M]=b.x-1),E.x===0&&E.z===0&&(o[M]=O/2/Math.PI+.5)}function m(b){return Math.atan2(b.z,-b.x)}function p(b){return Math.atan2(-b.y,Math.sqrt(b.x*b.x+b.z*b.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.vertices,e.indices,e.radius,e.details)}};var Jc=class n extends Co{constructor(e=1,t=0){let i=(1+Math.sqrt(5))/2,r=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}},Kc=class n extends Co{constructor(e=1,t=0){let i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],r=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,r,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}};var Qc=class n extends Co{constructor(e=1,t=0){let i=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],r=[2,1,0,0,3,2,1,3,0,2,3,1];super(i,r,e,t),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}},el=class n extends Sn{constructor(e=1,t=.4,i=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:r,arc:s},i=Math.floor(i),r=Math.floor(r);let o=[],a=[],c=[],l=[],u=new P,d=new P,h=new P;for(let f=0;f<=i;f++)for(let g=0;g<=r;g++){let v=g/r*s,m=f/i*Math.PI*2;d.x=(e+t*Math.cos(m))*Math.cos(v),d.y=(e+t*Math.cos(m))*Math.sin(v),d.z=t*Math.sin(m),a.push(d.x,d.y,d.z),u.x=e*Math.cos(v),u.y=e*Math.sin(v),h.subVectors(d,u).normalize(),c.push(h.x,h.y,h.z),l.push(g/r),l.push(f/i)}for(let f=1;f<=i;f++)for(let g=1;g<=r;g++){let v=(r+1)*f+g-1,m=(r+1)*(f-1)+g-1,p=(r+1)*(f-1)+g,b=(r+1)*f+g;o.push(v,m,b),o.push(m,p,b)}this.setIndex(o),this.setAttribute("position",new Zt(a,3)),this.setAttribute("normal",new Zt(c,3)),this.setAttribute("uv",new Zt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var tl=class extends ji{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new qe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new qe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=my,this.normalScale=new Ge(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new wr,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};function Mc(n,e,t){return!n||!t&&n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function YA(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}var Ps=class{constructor(e,t,i,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,r=t[i],s=t[i-1];n:{e:{let o;t:{i:if(!(e<r)){for(let a=i+2;;){if(r===void 0){if(e<s)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(s=r,r=t[++i],e<r)break e}o=t.length;break t}if(!(e>=s)){let a=t[1];e<a&&(i=2,s=a);for(let c=i-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===c)break;if(r=s,s=t[--i-1],e>=s)break e}o=i,i=0;break t}break n}for(;i<o;){let a=i+o>>>1;e<t[a]?o=a:i=a+1}if(r=t[i],s=t[i-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,s,r)}return this.interpolate_(i,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,r=this.valueSize,s=e*r;for(let o=0;o!==r;++o)t[o]=i[s+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},ff=class extends Ps{constructor(e,t,i,r){super(e,t,i,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:r0,endingEnd:r0}}intervalChanged_(e,t,i){let r=this.parameterPositions,s=e-2,o=e+1,a=r[s],c=r[o];if(a===void 0)switch(this.getSettings_().endingStart){case s0:s=e,a=2*t-i;break;case o0:s=r.length-2,a=t+r[s]-r[s+1];break;default:s=e,a=i}if(c===void 0)switch(this.getSettings_().endingEnd){case s0:o=e,c=2*i-t;break;case o0:o=1,c=i+r[1]-r[0];break;default:o=e-1,c=t}let l=(i-t)*.5,u=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-i),this._offsetPrev=s*u,this._offsetNext=o*u}interpolate_(e,t,i,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,u=this._offsetPrev,d=this._offsetNext,h=this._weightPrev,f=this._weightNext,g=(i-t)/(r-t),v=g*g,m=v*g,p=-h*m+2*h*v-h*g,b=(1+h)*m+(-1.5-2*h)*v+(-.5+h)*g+1,M=(-1-f)*m+(1.5+f)*v+.5*g,E=f*m-f*v;for(let O=0;O!==a;++O)s[O]=p*o[u+O]+b*o[l+O]+M*o[c+O]+E*o[d+O];return s}},pf=class extends Ps{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,u=(i-t)/(r-t),d=1-u;for(let h=0;h!==a;++h)s[h]=o[l+h]*d+o[c+h]*u;return s}},mf=class extends Ps{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e){return this.copySampleValue_(e-1)}},Bn=class{constructor(e,t,i,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Mc(t,this.TimeBufferType),this.values=Mc(i,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Mc(e.times,Array),values:Mc(e.values,Array)};let r=e.getInterpolation();r!==e.DefaultInterpolation&&(i.interpolation=r)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new mf(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new pf(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new ff(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Tc:t=this.InterpolantFactoryMethodDiscrete;break;case qh:t=this.InterpolantFactoryMethodLinear;break;case Bd:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Tc;case this.InterpolantFactoryMethodLinear:return qh;case this.InterpolantFactoryMethodSmooth:return Bd}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]*=e}return this}trim(e,t){let i=this.times,r=i.length,s=0,o=r-1;for(;s!==r&&i[s]<e;)++s;for(;o!==-1&&i[o]>t;)--o;if(++o,s!==0||o!==r){s>=o&&(o=Math.max(o,1),s=o-1);let a=this.getValueSize();this.times=i.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,r=this.values,s=i.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){let c=i[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(r!==void 0&&YA(r))for(let a=0,c=r.length;a!==c;++a){let l=r[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),r=this.getInterpolation()===Bd,s=e.length-1,o=1;for(let a=1;a<s;++a){let c=!1,l=e[a],u=e[a+1];if(l!==u&&(a!==1||l!==e[0]))if(r)c=!0;else{let d=a*i,h=d-i,f=d+i;for(let g=0;g!==i;++g){let v=t[d+g];if(v!==t[h+g]||v!==t[f+g]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];let d=a*i,h=o*i;for(let f=0;f!==i;++f)t[h+f]=t[d+f]}++o}}if(s>0){e[o]=e[s];for(let a=s*i,c=o*i,l=0;l!==i;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,r=new i(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}};Bn.prototype.TimeBufferType=Float32Array;Bn.prototype.ValueBufferType=Float32Array;Bn.prototype.DefaultInterpolation=qh;var Sr=class extends Bn{constructor(e,t,i){super(e,t,i)}};Sr.prototype.ValueTypeName="bool";Sr.prototype.ValueBufferType=Array;Sr.prototype.DefaultInterpolation=Tc;Sr.prototype.InterpolantFactoryMethodLinear=void 0;Sr.prototype.InterpolantFactoryMethodSmooth=void 0;var gf=class extends Bn{};gf.prototype.ValueTypeName="color";var vf=class extends Bn{};vf.prototype.ValueTypeName="number";var yf=class extends Ps{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(i-t)/(r-t),l=e*a;for(let u=l+a;l!==u;l+=4)Wi.slerpFlat(s,0,o,l-a,o,l,c);return s}},nl=class extends Bn{InterpolantFactoryMethodLinear(e){return new yf(this.times,this.values,this.getValueSize(),e)}};nl.prototype.ValueTypeName="quaternion";nl.prototype.InterpolantFactoryMethodSmooth=void 0;var Cr=class extends Bn{constructor(e,t,i){super(e,t,i)}};Cr.prototype.ValueTypeName="string";Cr.prototype.ValueBufferType=Array;Cr.prototype.DefaultInterpolation=Tc;Cr.prototype.InterpolantFactoryMethodLinear=void 0;Cr.prototype.InterpolantFactoryMethodSmooth=void 0;var _f=class extends Bn{};_f.prototype.ValueTypeName="vector";var Do=class extends ti{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new qe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}};var fh=new _t,ey=new P,ty=new P,il=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ge(512,512),this.map=null,this.mapPass=null,this.matrix=new _t,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Eo,this._frameExtents=new Ge(1,1),this._viewportCount=1,this._viewports=[new ht(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,i=this.matrix;ey.setFromMatrixPosition(e.matrixWorld),t.position.copy(ey),ty.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(ty),t.updateMatrixWorld(),fh.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(fh),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(fh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};var ny=new _t,_o=new P,ph=new P,xf=class extends il{constructor(){super(new qt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ge(4,2),this._viewportCount=6,this._viewports=[new ht(2,1,1,1),new ht(0,1,1,1),new ht(3,1,1,1),new ht(1,1,1,1),new ht(3,0,1,1),new ht(1,0,1,1)],this._cubeDirections=[new P(1,0,0),new P(-1,0,0),new P(0,0,1),new P(0,0,-1),new P(0,1,0),new P(0,-1,0)],this._cubeUps=[new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,0,1),new P(0,0,-1)]}updateMatrices(e,t=0){let i=this.camera,r=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),_o.setFromMatrixPosition(e.matrixWorld),i.position.copy(_o),ph.copy(i.position),ph.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(ph),i.updateMatrixWorld(),r.makeTranslation(-_o.x,-_o.y,-_o.z),ny.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ny)}},rl=class extends Do{constructor(e,t,i=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new xf}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},Mf=class extends il{constructor(){super(new Wc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},sl=class extends Do{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ti.DEFAULT_UP),this.updateMatrix(),this.target=new ti,this.shadow=new Mf}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},ol=class extends Do{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}};var Pf="\\[\\]\\.:\\/",ZA=new RegExp("["+Pf+"]","g"),Nf="[^"+Pf+"]",JA="[^"+Pf.replace("\\.","")+"]",KA=/((?:WC+[\/:])*)/.source.replace("WC",Nf),QA=/(WCOD+)?/.source.replace("WCOD",JA),eI=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Nf),tI=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Nf),nI=new RegExp("^"+KA+QA+eI+tI+"$"),iI=["material","materials","bones","map"],bf=class{constructor(e,t,i){let r=i||Mt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,r=this._bindings[i];r!==void 0&&r.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=i.length;r!==s;++r)i[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},Mt=(()=>{class n{constructor(t,i,r){this.path=i,this.parsedPath=r||n.parseTrackName(i),this.node=n.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,i,r){return t&&t.isAnimationObjectGroup?new n.Composite(t,i,r):new n(t,i,r)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(ZA,"")}static parseTrackName(t){let i=nI.exec(t);if(i===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let r={nodeName:i[2],objectName:i[3],objectIndex:i[4],propertyName:i[5],propertyIndex:i[6]},s=r.nodeName&&r.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let o=r.nodeName.substring(s+1);iI.indexOf(o)!==-1&&(r.nodeName=r.nodeName.substring(0,s),r.objectName=o)}if(r.propertyName===null||r.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return r}static findNode(t,i){if(i===void 0||i===""||i==="."||i===-1||i===t.name||i===t.uuid)return t;if(t.skeleton){let r=t.skeleton.getBoneByName(i);if(r!==void 0)return r}if(t.children){let r=function(o){for(let a=0;a<o.length;a++){let c=o[a];if(c.name===i||c.uuid===i)return c;let l=r(c.children);if(l)return l}return null},s=r(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,i){t[i]=this.targetObject[this.propertyName]}_getValue_array(t,i){let r=this.resolvedProperty;for(let s=0,o=r.length;s!==o;++s)t[i++]=r[s]}_getValue_arrayElement(t,i){t[i]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,i){this.resolvedProperty.toArray(t,i)}_setValue_direct(t,i){this.targetObject[this.propertyName]=t[i]}_setValue_direct_setNeedsUpdate(t,i){this.targetObject[this.propertyName]=t[i],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,i){this.targetObject[this.propertyName]=t[i],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,i){let r=this.resolvedProperty;for(let s=0,o=r.length;s!==o;++s)r[s]=t[i++]}_setValue_array_setNeedsUpdate(t,i){let r=this.resolvedProperty;for(let s=0,o=r.length;s!==o;++s)r[s]=t[i++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,i){let r=this.resolvedProperty;for(let s=0,o=r.length;s!==o;++s)r[s]=t[i++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,i){this.resolvedProperty[this.propertyIndex]=t[i]}_setValue_arrayElement_setNeedsUpdate(t,i){this.resolvedProperty[this.propertyIndex]=t[i],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,i){this.resolvedProperty[this.propertyIndex]=t[i],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,i){this.resolvedProperty.fromArray(t,i)}_setValue_fromArray_setNeedsUpdate(t,i){this.resolvedProperty.fromArray(t,i),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,i){this.resolvedProperty.fromArray(t,i),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,i){this.bind(),this.getValue(t,i)}_setValue_unbound(t,i){this.bind(),this.setValue(t,i)}bind(){let t=this.node,i=this.parsedPath,r=i.objectName,s=i.propertyName,o=i.propertyIndex;if(t||(t=n.findNode(this.rootNode,i.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(r){let u=i.objectIndex;switch(r){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let d=0;d<t.length;d++)if(t[d].name===u){u=d;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[r]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[r]}if(u!==void 0){if(t[u]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[u]}}let a=t[s];if(a===void 0){let u=i.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+u+"."+s+" but it wasn't found.",t);return}let c=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?c=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(c=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(o!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[o]!==void 0&&(o=t.morphTargetDictionary[o])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=o}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][c]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}return n.Composite=bf,n})();Mt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Mt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Mt.prototype.GetterByBindingType=[Mt.prototype._getValue_direct,Mt.prototype._getValue_array,Mt.prototype._getValue_arrayElement,Mt.prototype._getValue_toArray];Mt.prototype.SetterByBindingTypeAndVersioning=[[Mt.prototype._setValue_direct,Mt.prototype._setValue_direct_setNeedsUpdate,Mt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Mt.prototype._setValue_array,Mt.prototype._setValue_array_setNeedsUpdate,Mt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Mt.prototype._setValue_arrayElement,Mt.prototype._setValue_arrayElement_setNeedsUpdate,Mt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Mt.prototype._setValue_fromArray,Mt.prototype._setValue_fromArray_setNeedsUpdate,Mt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var gN=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:wf}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=wf);var sI=["canvas"],Sy=(()=>{class n{constructor(){this.zone=ke(rt),this.canvasRef=kt.required("canvas"),this.shards=[],this.rafId=0,this.mx=0,this.my=0,this.scrollY=0,this.listeners=[]}ngAfterViewInit(){this.zone.runOutsideAngular(()=>this.init())}init(){let t=this.canvasRef().nativeElement;this.renderer=new qc({canvas:t,antialias:!0,alpha:!0}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,1.5)),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.setClearColor(0,0),this.scene=new Yc,this.scene.fog=new Xc(657672,8,30),this.camera=new qt(50,window.innerWidth/window.innerHeight,.1,100),this.camera.position.z=10,this.scene.add(new ol(16777215,.25));let i=new sl(14723437,1.2);i.position.set(5,4,6),this.scene.add(i);let r=new rl(13911850,2.5,25);r.position.set(-6,-2,4),this.scene.add(r),this.group=new Vi,this.scene.add(this.group);let s=[new Kc(.4,0),new Jc(.35,0),new el(.35,.05,8,24),new Er(.7,.1,.5),new Qc(.45,0)];for(let v=0;v<24;v++){let m=s[v%s.length],p=new tl({color:v%3===0?13911850:v%3===1?14723437:16117734,metalness:.7,roughness:.3,flatShading:!0,transparent:!0,opacity:.85}),b=new mn(m,p);b.position.set((Math.random()-.5)*20,(Math.random()-.5)*14,(Math.random()-.5)*12-3),b.rotation.set(Math.random()*Math.PI,Math.random()*Math.PI,Math.random()*Math.PI),b.userData={rx:(Math.random()-.5)*.003,ry:(Math.random()-.5)*.004,rz:(Math.random()-.5)*.002,baseY:b.position.y,phase:Math.random()*Math.PI*2,scale:.6+Math.random()*.8},b.scale.setScalar(b.userData.scale),this.group.add(b),this.shards.push(b)}let o=new Sn,a=400,c=new Float32Array(a*3);for(let v=0;v<a;v++)c[v*3]=(Math.random()-.5)*30,c[v*3+1]=(Math.random()-.5)*20,c[v*3+2]=(Math.random()-.5)*15;o.setAttribute("position",new rn(c,3));let l=new So({color:14723437,size:.03,transparent:!0,opacity:.6,sizeAttenuation:!0});this.dust=new Zc(o,l),this.scene.add(this.dust);let u=v=>{this.mx=v.clientX/window.innerWidth-.5,this.my=v.clientY/window.innerHeight-.5},d=()=>{this.scrollY=window.scrollY},h=()=>{!this.camera||!this.renderer||(this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(window.innerWidth,window.innerHeight))};window.addEventListener("mousemove",u),window.addEventListener("scroll",d,{passive:!0}),window.addEventListener("resize",h),this.listeners.push(()=>window.removeEventListener("mousemove",u),()=>window.removeEventListener("scroll",d),()=>window.removeEventListener("resize",h));let f=performance.now(),g=()=>{if(!this.renderer||!this.scene||!this.camera||!this.group)return;let v=(performance.now()-f)/1e3;this.group.rotation.y=this.scrollY*4e-4,this.group.position.y=this.scrollY*.001,this.camera.position.x+=(this.mx*1.5-this.camera.position.x)*.04,this.camera.position.y+=(-this.my*1-this.camera.position.y)*.04,this.camera.lookAt(0,0,0),this.shards.forEach(m=>{m.rotation.x+=m.userData.rx,m.rotation.y+=m.userData.ry,m.rotation.z+=m.userData.rz,m.position.y=m.userData.baseY+Math.sin(v*.5+m.userData.phase)*.3}),this.dust&&(this.dust.rotation.y=v*.02),this.renderer.render(this.scene,this.camera),this.rafId=requestAnimationFrame(g)};this.rafId=requestAnimationFrame(g)}ngOnDestroy(){this.rafId&&cancelAnimationFrame(this.rafId),this.listeners.forEach(t=>t()),this.shards.forEach(t=>{t.geometry.dispose(),t.material.dispose()}),this.dust?.geometry.dispose(),this.dust?.material?.dispose(),this.renderer?.dispose()}static{this.\u0275fac=function(i){return new(i||n)}}static{this.\u0275cmp=Dt({type:n,selectors:[["app-three-scene"]],viewQuery:function(i,r){i&1&&Ut(r.canvasRef,sI,5),i&2&&Kn()},standalone:!0,features:[Tt],decls:2,vars:0,consts:[["canvas",""],[1,"bg3d"]],template:function(i,r){i&1&&Fe(0,"canvas",1,0)},styles:["[_nghost-%COMP%]{display:contents}.bg3d[_ngcontent-%COMP%]{position:fixed;inset:0;z-index:0;pointer-events:none;opacity:.55}"],changeDetection:0})}}return n})();var oI=["heroVideo"],aI=["line1"],cI=["line2"],lI=["scriptLine"],uI=["catchphrase"],Cy=(()=>{class n{constructor(){this.heroVideo=kt.required("heroVideo"),this.line1=kt.required("line1"),this.line2=kt.required("line2"),this.scriptLine=kt.required("scriptLine"),this.catchphrase=kt.required("catchphrase")}ngAfterViewInit(){let t=this.heroVideo().nativeElement;t.muted=!0,t.autoplay=!1,t.pause(),t.load();let i=!1,r=!1,s=()=>{!i||!r||(t.currentTime=0,t.play().catch(()=>{}))};t.readyState>=2?i=!0:t.addEventListener("loadeddata",()=>{i=!0,s()},{once:!0}),document.querySelector("app-loader .loader")?.classList.contains("done")?(r=!0,s()):window.addEventListener("loader:done",()=>{r=!0,s()},{once:!0}),this.initTitleReveal()}initTitleReveal(){let t=[this.scriptLine().nativeElement,this.line1().nativeElement,this.line2().nativeElement,this.catchphrase().nativeElement];t.forEach((r,s)=>{r.style.transform="translateY(110%) rotate(2deg)",r.style.display="inline-block",r.style.opacity="0",r.style.transition=`transform 1.2s ${s*.15+2.8}s var(--ease), opacity 1.2s ${s*.15+2.8}s var(--ease)`});let i=()=>{setTimeout(()=>t.forEach(r=>{r.style.transform="translateY(0) rotate(0)",r.style.opacity="1"}),2400)};document.readyState==="complete"?i():window.addEventListener("load",i,{once:!0})}static{this.\u0275fac=function(i){return new(i||n)}}static{this.\u0275cmp=Dt({type:n,selectors:[["app-hero"]],viewQuery:function(i,r){i&1&&(Ut(r.heroVideo,oI,5),Ut(r.line1,aI,5),Ut(r.line2,cI,5),Ut(r.scriptLine,lI,5),Ut(r.catchphrase,uI,5)),i&2&&Kn(5)},standalone:!0,features:[Tt],decls:54,vars:0,consts:[["heroVideo",""],["scriptLine",""],["line1",""],["line2",""],["catchphrase",""],["id","hero",1,"hero"],["autoplay","","muted","","playsinline","","aria-hidden","true",1,"hero-bg"],["src","assets/logos/studio-bg-final.mp4","type","video/mp4"],[1,"hero-overlay"],[1,"hero-content"],[1,"hero-intro-script"],[1,"hero-title"],[1,"line"],[1,"accent"],[1,"hero-mid"],[1,"hero-catchphrase"],[1,"italic"],[1,"hero-bottom"],[1,"hero-bottom-left"],[1,"hero-desc"],[1,"hero-education-box"],[1,"education-header"],[1,"hero-background"],[1,"bg-item"],[1,"bg-label"],[1,"bg-title"],[1,"hero-scroll"],["width","12","height","20","viewBox","0 0 12 20","fill","none"],["d","M6 1V19M6 19L1 14M6 19L11 14","stroke","currentColor"]],template:function(i,r){i&1&&(H(0,"section",5)(1,"video",6,0),Fe(3,"source",7),J(),Fe(4,"div",8),H(5,"div",9)(6,"div",10)(7,"span",null,1),te(9,"Hey I'm"),J()(),H(10,"h1",11)(11,"span",12)(12,"span",null,2),te(14,"Rishabh"),J()(),H(15,"span",12)(16,"span",13,3),te(18,"Sahu"),J()()(),H(19,"div",14)(20,"p",15,4),te(22," Frames that "),H(23,"span",16),te(24,"linger"),J(),te(25," \u2014 stories that "),H(26,"span",13),te(27,"cut."),J()()(),H(28,"div",17)(29,"div",18)(30,"p",19)(31,"b"),te(32,"Visual Artist | Editor | Cinematographer"),J(),Fe(33,"br"),te(34," Bringing 3+ years of hands-on experience in editing, cinematography, VFX, and colour grading, I've worked on many DVCs, lifestyle reels, and travel content for leading brands, integrating AI to elevate both efficiency and creative output. "),J(),H(35,"div",20)(36,"span",21),te(37,"Education"),J(),H(38,"div",22)(39,"div",23)(40,"span",24),te(41,"2020 \u2014 2022"),J(),H(42,"div",25),te(43,"Bachelor of arts in multimedia and mass communication \u2014 St. Andrew's College"),J()(),H(44,"div",23)(45,"span",24),te(46,"2021 \u2014 2022"),J(),H(47,"div",25),te(48,"Filmmaking Diploma \u2014 FX School"),J()()()()(),H(49,"div",26)(50,"span"),te(51,"Scroll"),J(),li(),H(52,"svg",27),Fe(53,"path",28),J()()()()())},styles:['[_nghost-%COMP%]{display:block}.hero[_ngcontent-%COMP%]{min-height:100vh;position:relative;z-index:1;display:flex;align-items:flex-end;padding:7rem 2.5rem 3rem;overflow:hidden}.hero-bg[_ngcontent-%COMP%]{position:absolute;inset:0;width:100%;height:100%;object-fit:contain;object-position:center top;transform:scale(.88) translate(8%,4%);transform-origin:center top;z-index:0}.hero-overlay[_ngcontent-%COMP%]{position:absolute;inset:0;z-index:2;background:linear-gradient(180deg,#0a09084d,#0a09081a 40%,#0a0908e6);pointer-events:none}.hero-content[_ngcontent-%COMP%]{position:relative;z-index:4;width:100%;max-width:1600px;margin:0 auto}.hero-kicker[_ngcontent-%COMP%]{display:flex;align-items:center;gap:1rem;margin-bottom:4rem;font-family:JetBrains Mono,monospace;font-size:11px;color:#fff;letter-spacing:.4em;text-transform:uppercase}.hero-kicker[_ngcontent-%COMP%]   .accent[_ngcontent-%COMP%]{color:var(--ink)}.hero-kicker[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%]{width:6px;height:6px;border-radius:50%;background:var(--accent);animation:_ngcontent-%COMP%_pulse 2s ease-in-out infinite}@keyframes _ngcontent-%COMP%_pulse{0%,to{opacity:1}50%{opacity:.3}}.hero-intro-script[_ngcontent-%COMP%]{font-family:Allison,cursive;font-size:clamp(3rem,8vw,5.5rem);color:var(--amber);line-height:1;margin-bottom:-1.5rem;margin-left:-.5rem;position:relative;z-index:5;transform-origin:left bottom;rotate:-2deg}.hero-title[_ngcontent-%COMP%]{font-family:Fraunces,serif;font-weight:700;font-size:clamp(3rem,10.5vw,9rem);line-height:.85;letter-spacing:-.06em;text-transform:uppercase;margin-left:-.05em}.hero-title[_ngcontent-%COMP%]   .line[_ngcontent-%COMP%]{display:block;overflow:visible}.hero-title[_ngcontent-%COMP%]   .line[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]{display:inline-block}.hero-title[_ngcontent-%COMP%]   .accent[_ngcontent-%COMP%]{color:var(--ink);-webkit-text-stroke:1px var(--dim);color:transparent}.hero-mid[_ngcontent-%COMP%]{margin-top:2rem;max-width:800px}.hero-catchphrase[_ngcontent-%COMP%]{font-size:clamp(1rem,2.5vw,2rem);line-height:1.2;color:var(--dim);font-weight:300;letter-spacing:-.02em}.hero-catchphrase[_ngcontent-%COMP%]   .italic[_ngcontent-%COMP%]{font-style:italic;color:var(--amber)}.hero-catchphrase[_ngcontent-%COMP%]   .accent[_ngcontent-%COMP%]{color:var(--accent);font-style:italic}.hero-bottom[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:flex-end;margin-top:2rem;gap:3rem;flex-wrap:wrap}.hero-bottom-left[_ngcontent-%COMP%]{flex:1;max-width:600px}.hero-desc[_ngcontent-%COMP%]{font-size:clamp(1rem,1.5vw,1.25rem);line-height:1.6;color:var(--dim);margin-bottom:3.5rem}.hero-desc[_ngcontent-%COMP%]   b[_ngcontent-%COMP%]{color:var(--ink);font-weight:500}.hero-education-box[_ngcontent-%COMP%]{background:#f5efe608;backdrop-filter:blur(20px);border:1px solid rgba(245,239,230,.08);border-radius:12px;padding:1.5rem 2rem;max-width:580px;position:relative;overflow:hidden}.hero-education-box[_ngcontent-%COMP%]:before{content:"";position:absolute;inset:0;background:linear-gradient(135deg,rgba(255,255,255,.03) 0%,transparent 100%);pointer-events:none}.education-header[_ngcontent-%COMP%]{display:block;font-family:JetBrains Mono,monospace;font-size:10px;letter-spacing:.3em;text-transform:uppercase;color:var(--dim);margin-bottom:1.5rem;border-bottom:1px solid rgba(255,255,255,.05);padding-bottom:.75rem}.hero-background[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:1.5rem}.bg-item[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:.25rem}.bg-label[_ngcontent-%COMP%]{font-family:JetBrains Mono,monospace;font-size:8px;letter-spacing:.2em;text-transform:uppercase;color:var(--amber);opacity:.8}.bg-title[_ngcontent-%COMP%]{font-family:Fraunces,serif;font-size:clamp(.9rem,1.2vw,1.05rem);font-weight:300;color:var(--ink);line-height:1.4;letter-spacing:-.01em}.hero-scroll[_ngcontent-%COMP%]{display:flex;align-items:center;gap:1rem;font-family:JetBrains Mono,monospace;font-size:10px;letter-spacing:.3em;text-transform:uppercase;color:var(--dim)}.hero-scroll[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_scrollDown 2s ease-in-out infinite}@keyframes _ngcontent-%COMP%_scrollDown{0%,to{transform:translateY(0);opacity:1}50%{transform:translateY(8px);opacity:.4}}@media (max-width: 900px){.hero[_ngcontent-%COMP%]{padding:6rem 1.25rem 3rem;align-items:center;text-align:center}.hero-content[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center}.hero-kicker[_ngcontent-%COMP%]{justify-content:center;margin-bottom:2rem}.hero-intro-script[_ngcontent-%COMP%]{font-size:2.2rem;margin-bottom:2rem;rotate:0deg;margin-left:0}.hero-title[_ngcontent-%COMP%]{font-size:clamp(2.8rem,15vw,4.5rem);line-height:.9}.hero-mid[_ngcontent-%COMP%]{text-align:center;width:100%}.hero-catchphrase[_ngcontent-%COMP%]{font-size:1.25rem;margin-top:1.5rem;text-align:center}.hero-bottom[_ngcontent-%COMP%]{margin-top:1.5rem;flex-direction:column;align-items:center;justify-content:center}.hero-bottom-left[_ngcontent-%COMP%]{width:100%;display:flex;flex-direction:column;align-items:center}.hero-desc[_ngcontent-%COMP%]{text-align:center;margin-bottom:3rem}.hero-education-box[_ngcontent-%COMP%]{margin:0 auto;text-align:center;width:100%;padding:1.5rem}.education-header[_ngcontent-%COMP%]{margin-bottom:1.5rem}.hero-background[_ngcontent-%COMP%]{align-items:center;gap:1.5rem}}'],changeDetection:0})}}return n})();var dI=["timeline"],hI=["playhead"],fI=()=>[0,1,2,3,4,5,6,7,8,9];function pI(n,e){if(n&1&&(H(0,"div",32),te(1),J()),n&2){let t=e.$implicit;ye(),Vt(" 00:0",t,":00:00 ")}}function mI(n,e){if(n&1){let t=di();H(0,"div",39),Nt("mouseenter",function(){let r=Nn(t).$implicit,s=Qt(2);return On(s.activeSkill.set(r))}),H(1,"div",40)(2,"div",41),te(3),J(),Fe(4,"div",42),J()()}if(n&2){let t=e.$implicit,i=Qt(2);ln("width",t.width)("flex","0 0 "+t.width)("margin-left",t.marginLeft||"0"),Kt("active",i.activeSkill()===t),ye(3),ut(t.title)}}function gI(n,e){if(n&1&&(H(0,"div",33)(1,"div",34)(2,"div",35),te(3),J(),H(4,"div",36)(5,"span"),te(6,"M"),J(),H(7,"span"),te(8,"S"),J()()(),H(9,"div",37),bn(10,mI,5,9,"div",38),J()()),n&2){let t=e.$implicit;ye(3),ut(t.id),ye(6),ln("justify-content",t.justifyContent||"flex-start")("gap",t.gap||"1rem"),ye(),Wt("ngForOf",t.skills)}}function vI(n,e){if(n&1&&(H(0,"span",45),te(1),J()),n&2){let t=e.$implicit;ye(),ut(t)}}function yI(n,e){if(n&1&&(H(0,"div",43)(1,"div",29),te(2,"Clip Toolkit:"),J(),bn(3,vI,2,1,"span",44),J()),n&2){let t,i=Qt();ye(3),Wt("ngForOf",(t=i.activeSkill())==null?null:t.tools)}}function _I(n,e){if(n&1&&Fe(0,"img",46),n&2){let t=e.$implicit;Wt("src",t.icon,Zn)("alt",t.name)("title",t.name)}}var Dy=(()=>{class n{constructor(){this.zone=ke(rt),this.timeline=kt.required("timeline"),this.playhead=kt.required("playhead"),this.skills=lr,this.activeSkill=yt(null),this.displayTools=[{name:"After Effects",icon:"assets/logos/ae.png"},{name:"Premiere Pro",icon:"assets/logos/pr.png"},{name:"Photoshop",icon:"assets/logos/ps.png"},{name:"DaVinci Resolve",icon:"assets/logos/dr.png"}],this.tracks=[{id:"V1 Visuals",justifyContent:"center",gap:"1.5rem",skills:[Ct(xt({},lr[1]),{tools:["Premiere Pro","DaVinci Resolve","After Effects","Photoshop"],width:"220px"}),Ct(xt({},lr[2]),{title:"VFX",tools:["After Effects","Mocha"],width:"200px"})]},{id:"V2 Post",justifyContent:"flex-start",gap:"8px",skills:[Ct(xt({},lr[0]),{tools:["Sony FX3","Sony A7S III"],width:"280px"}),Ct(xt({},lr[3]),{tools:["DaVinci Resolve","Lightroom"],width:"160px"}),Ct(xt({},lr[4]),{width:"190px"})]}]}ngAfterViewInit(){this.zone.runOutsideAngular(()=>{let t=this.timeline().nativeElement,i=this.playhead().nativeElement,r=s=>{let o=t.getBoundingClientRect(),a=s.clientX-o.left;i.style.transform=`translate3d(${a}px, 0, 0)`};t.addEventListener("mousemove",r),this.listener=()=>t.removeEventListener("mousemove",r)})}ngOnDestroy(){this.listener?.()}static{this.\u0275fac=function(i){return new(i||n)}}static{this.\u0275cmp=Dt({type:n,selectors:[["app-skills"]],viewQuery:function(i,r){i&1&&(Ut(r.timeline,dI,5),Ut(r.playhead,hI,5)),i&2&&Kn(2)},standalone:!0,features:[Tt],decls:45,vars:11,consts:[["timeline",""],["playhead",""],["id","skills",1,"craft"],[1,"section-head"],[1,"section-num"],[1,"section-title"],[1,"section-num","end"],[1,"nle-layout"],[1,"nle-timeline",3,"mouseleave"],[1,"playhead"],[1,"timeline-ruler"],["class","ruler-mark",4,"ngFor","ngForOf"],[1,"timeline-ruler-spacer",2,"height","1px","background","rgba(245, 239, 230, 0.05)"],[1,"timeline-tracks"],["class","track-row",4,"ngFor","ngForOf"],[1,"nle-monitor"],[1,"monitor-screen"],[1,"monitor-glass"],[1,"monitor-overlay"],[1,"timecode"],[1,"rec-dot"],[1,"monitor-content"],[1,"content-header"],[1,"type-tag"],[1,"monitor-title"],[1,"monitor-desc"],[1,"monitor-footer"],["class","monitor-tools",4,"ngIf"],[1,"master-tools"],[1,"tool-label"],[1,"master-icons"],[3,"src","alt","title",4,"ngFor","ngForOf"],[1,"ruler-mark"],[1,"track-row"],[1,"track-header"],[1,"track-id"],[1,"track-controls"],[1,"track-content"],["class","clip",3,"width","flex","marginLeft","active","mouseenter",4,"ngFor","ngForOf"],[1,"clip",3,"mouseenter"],[1,"clip-inner"],[1,"clip-label"],[1,"clip-wave"],[1,"monitor-tools"],["class","tool-tag",4,"ngFor","ngForOf"],[1,"tool-tag"],[3,"src","alt","title"]],template:function(i,r){if(i&1){let s=di();H(0,"section",2)(1,"div",3)(2,"div")(3,"div",4),te(4,"\u2014 01 / Skills"),J(),H(5,"h2",5),te(6,"Skills in "),H(7,"em"),te(8,"nutshell."),J()()(),H(9,"div",6),te(10,"Six years"),Fe(11,"br"),te(12,"hands-on"),J()(),H(13,"div",7)(14,"div",8,0),Nt("mouseleave",function(){return Nn(s),On(r.activeSkill.set(null))}),Fe(16,"div",9,1),H(18,"div",10),bn(19,pI,2,1,"div",11),J(),Fe(20,"div",12),H(21,"div",13),bn(22,gI,11,6,"div",14),J()(),H(23,"div",15)(24,"div",16),Fe(25,"div",17),H(26,"div",18)(27,"div",19),te(28),J(),Fe(29,"div",20),J(),H(30,"div",21)(31,"div",22)(32,"span",23),te(33),J(),H(34,"h3",24),te(35),J()(),H(36,"p",25),te(37),J(),H(38,"div",26),bn(39,yI,4,1,"div",27),H(40,"div",28)(41,"div",29),te(42,"Master Gear:"),J(),H(43,"div",30),bn(44,_I,1,3,"img",31),J()()()()()()()()}if(i&2){let s,o,a;ye(19),Wt("ngForOf",hv(10,fI)),ye(3),Wt("ngForOf",r.tracks),ye(6),Vt("00:00:",r.activeSkill()&&(s=(s=r.activeSkill())==null||s.num==null||(s=s.num.split("/"))==null||s[1]==null?null:s[1].trim())!==null&&s!==void 0?s:"00",":24"),ye(2),Kt("active",r.activeSkill()),ye(3),ut(r.activeSkill()?"Source":"No Signal"),ye(2),ut((o=(o=r.activeSkill())==null?null:o.title)!==null&&o!==void 0?o:"Select a clip"),ye(2),ut(r.activeSkill()?(a=r.activeSkill())==null?null:a.desc:"Hover over the timeline tracks to preview cinematic skills and specialized toolkits."),ye(2),Wt("ngIf",r.activeSkill()),ye(5),Wt("ngForOf",r.displayTools)}},dependencies:[co,Nv,Ov],styles:['[_nghost-%COMP%]{display:block}.craft[_ngcontent-%COMP%]{background:var(--bg)}.section-head[_ngcontent-%COMP%]   .end[_ngcontent-%COMP%]{text-align:right}.section-head[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin-top:1rem}.nle-layout[_ngcontent-%COMP%]{display:flex;gap:2rem;align-items:stretch;margin-bottom:4rem}.nle-monitor[_ngcontent-%COMP%]{position:relative;width:450px;flex-shrink:0;padding:1px;background:linear-gradient(135deg,rgba(245,239,230,.1) 0%,transparent 100%);border-radius:12px;overflow:hidden;display:flex;flex-direction:column}.monitor-screen[_ngcontent-%COMP%]{background:#0d0c0b;border-radius:11px;min-height:180px;flex:1;padding:2.5rem;position:relative;display:flex;flex-direction:column;justify-content:center;overflow:hidden}.monitor-glass[_ngcontent-%COMP%]{position:absolute;inset:0;background:radial-gradient(circle at 70% 30%,rgba(0,255,255,.03) 0%,transparent 50%);border-radius:inherit;pointer-events:none}.monitor-overlay[_ngcontent-%COMP%]{position:absolute;top:1.5rem;left:1.5rem;right:1.5rem;display:flex;justify-content:space-between;align-items:center;font-family:JetBrains Mono,monospace;font-size:11px;letter-spacing:.1em;color:var(--dim)}.rec-dot[_ngcontent-%COMP%]{width:8px;height:8px;background:var(--accent);border-radius:50%;box-shadow:0 0 10px var(--accent)}.monitor-content[_ngcontent-%COMP%]{opacity:.3;transition:all .5s var(--ease);transform:translateY(10px)}.monitor-content.active[_ngcontent-%COMP%]{opacity:1;transform:translateY(0)}.content-header[_ngcontent-%COMP%]{margin-bottom:1.5rem}.content-header[_ngcontent-%COMP%]   .type-tag[_ngcontent-%COMP%]{font-family:JetBrains Mono,monospace;font-size:10px;text-transform:uppercase;color:var(--amber);margin-bottom:.5rem;display:block}.monitor-title[_ngcontent-%COMP%]{font-family:Fraunces,serif;font-size:clamp(1.8rem,3.5vw,2.8rem);font-weight:300;letter-spacing:-.02em}.monitor-desc[_ngcontent-%COMP%]{max-width:700px;color:var(--dim);line-height:1.7;font-size:1rem;margin-bottom:1.5rem}.monitor-footer[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:flex-end;gap:2rem;padding-top:2rem;border-top:1px solid rgba(245,239,230,.05)}.tool-label[_ngcontent-%COMP%]{font-family:JetBrains Mono,monospace;font-size:10px;text-transform:uppercase;color:#444;margin-bottom:.75rem}.monitor-tools[_ngcontent-%COMP%]{flex:1;display:flex;flex-wrap:wrap;gap:.6rem}.monitor-tools[_ngcontent-%COMP%]   .tool-tag[_ngcontent-%COMP%]{background:#f5efe60d;border:1px solid rgba(245,239,230,.1);color:var(--ink);padding:.4rem .8rem;border-radius:4px;font-size:.85rem;font-family:JetBrains Mono,monospace}.master-tools[_ngcontent-%COMP%]{text-align:right}.master-icons[_ngcontent-%COMP%]{display:flex;gap:1rem}.master-icons[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:32px;height:32px;object-fit:contain;filter:grayscale(1) opacity(.4);transition:all .5s var(--ease)}.master-icons[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:hover{filter:grayscale(0) opacity(1)}.nle-timeline[_ngcontent-%COMP%]{flex:1;background:var(--line);border:1px solid rgba(245,239,230,.05);border-radius:8px;padding:15px 0 0;overflow:hidden;position:relative}.timeline-ruler[_ngcontent-%COMP%]{height:35px;background:#12110f;border-bottom:1px solid rgba(245,239,230,.1);display:flex;align-items:center;padding:0 0 0 140px;position:relative;z-index:5}.timeline-ruler[_ngcontent-%COMP%]   .ruler-mark[_ngcontent-%COMP%]{flex:1;font-family:JetBrains Mono,monospace;font-size:9px;color:#444;border-left:1px solid #333;padding-left:.5rem;height:100%;display:flex;align-items:center}.timeline-tracks[_ngcontent-%COMP%]{position:relative;padding:1rem 0;background:#0a0908;z-index:1}.playhead[_ngcontent-%COMP%]{position:absolute;top:0;bottom:0;left:0;width:2px;background:#ff4500;z-index:100;pointer-events:none;box-shadow:0 0 15px #ff450080;will-change:transform}.playhead[_ngcontent-%COMP%]:before{content:"";position:absolute;top:0;left:-7px;width:16px;height:16px;background:#ff4500;clip-path:polygon(0 0,100% 0,50% 100%);z-index:101}.track-row[_ngcontent-%COMP%]{display:flex;align-items:center;height:70px;border-bottom:1px solid rgba(0,0,0,.2)}.track-row[_ngcontent-%COMP%]:last-child{border-bottom:none}.track-header[_ngcontent-%COMP%]{width:140px;height:100%;background:#1a1917;border-right:1px solid rgba(0,0,0,.4);padding:0 1rem;display:flex;flex-direction:column;justify-content:center}.track-header[_ngcontent-%COMP%]   .track-id[_ngcontent-%COMP%]{font-family:JetBrains Mono,monospace;font-size:11px;color:var(--dim);margin-bottom:.5rem}.track-header[_ngcontent-%COMP%]   .track-controls[_ngcontent-%COMP%]{display:flex;gap:.4rem}.track-header[_ngcontent-%COMP%]   .track-controls[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:9px;width:14px;height:14px;border:1px solid #333;display:flex;align-items:center;justify-content:center;border-radius:2px;color:#666}.track-content[_ngcontent-%COMP%]{flex:1;display:flex;gap:1rem;padding:0 1rem}.clip[_ngcontent-%COMP%]{height:44px;background:#e0a96d26;border:1px solid rgba(224,169,109,.3);border-radius:4px;cursor:pointer;transition:all .3s var(--ease);position:relative;overflow:hidden}.clip[_ngcontent-%COMP%]   .clip-inner[_ngcontent-%COMP%]{padding:0 .8rem;height:100%;display:flex;align-items:center;justify-content:space-between}.clip[_ngcontent-%COMP%]   .clip-label[_ngcontent-%COMP%]{font-family:JetBrains Mono,monospace;font-size:11px;color:var(--ink);white-space:nowrap}.clip[_ngcontent-%COMP%]   .clip-wave[_ngcontent-%COMP%]{height:50%;width:60px;background:repeating-linear-gradient(90deg,transparent 0,transparent 2px,rgba(224,169,109,.2) 2px,rgba(224,169,109,.2) 4px)}.clip.active[_ngcontent-%COMP%]{background:#e0a96d66;border-color:var(--amber);box-shadow:0 0 15px #e0a96d33;transform:scale(1.02)}.track-row[_ngcontent-%COMP%]:nth-child(2)   .clip[_ngcontent-%COMP%]{background:#00ffff1a;border-color:#00ffff4d}.track-row[_ngcontent-%COMP%]:nth-child(2)   .clip[_ngcontent-%COMP%]   .clip-wave[_ngcontent-%COMP%]{background:repeating-linear-gradient(90deg,transparent 0,transparent 2px,rgba(0,255,255,.2) 2px,rgba(0,255,255,.2) 4px)}.track-row[_ngcontent-%COMP%]:nth-child(2)   .clip.active[_ngcontent-%COMP%]{background:#00ffff4d;border-color:#0ff}.track-row[_ngcontent-%COMP%]:nth-child(3)   .clip[_ngcontent-%COMP%]{background:#8a2be226;border-color:#8a2be24d}.track-row[_ngcontent-%COMP%]:nth-child(3)   .clip[_ngcontent-%COMP%]   .clip-wave[_ngcontent-%COMP%]{background:repeating-linear-gradient(90deg,transparent 0,transparent 2px,rgba(138,43,226,.2) 2px,rgba(138,43,226,.2) 4px)}.track-row[_ngcontent-%COMP%]:nth-child(3)   .clip.active[_ngcontent-%COMP%]{background:#8a2be24d;border-color:#8a2be2}@media (max-width: 1024px){.nle-layout[_ngcontent-%COMP%]{flex-direction:column-reverse}.nle-monitor[_ngcontent-%COMP%]{width:100%;margin-bottom:2rem}}@media (max-width: 900px){.nle-timeline[_ngcontent-%COMP%]{overflow-x:auto;-webkit-overflow-scrolling:touch;padding-bottom:1rem}.timeline-ruler[_ngcontent-%COMP%], .timeline-tracks[_ngcontent-%COMP%]{min-width:800px}.timeline-ruler[_ngcontent-%COMP%]{padding-left:80px}.track-header[_ngcontent-%COMP%]{width:80px}.track-header[_ngcontent-%COMP%]   .track-controls[_ngcontent-%COMP%], .clip-wave[_ngcontent-%COMP%]{display:none}.monitor-screen[_ngcontent-%COMP%]{padding:1.5rem}.monitor-title[_ngcontent-%COMP%]{font-size:2rem}}@media (max-width: 600px){.section-head[_ngcontent-%COMP%]{flex-direction:column;gap:1rem}.section-head[_ngcontent-%COMP%]   .end[_ngcontent-%COMP%]{text-align:left}}'],changeDetection:0})}}return n})();var xI=(n,e)=>e.year;function MI(n,e){if(n&1&&(H(0,"div",6)(1,"div",7),te(2),J(),H(3,"div",8),Fe(4,"div",9),J(),H(5,"div",10),te(6),J(),H(7,"div",11),te(8),H(9,"small"),te(10),J()(),H(11,"div",12),te(12),J(),H(13,"div",13),te(14),J()()),n&2){let t=e.$implicit;ye(2),ut(t.year),ye(4),ut(t.role),ye(2),Vt(" ",t.place," "),ye(2),ut(t.placeDetail),ye(2),ut(t.location),ye(2),ut(t.reveal)}}var Ty=(()=>{class n{constructor(){this.experiences=qv}static{this.\u0275fac=function(i){return new(i||n)}}static{this.\u0275cmp=Dt({type:n,selectors:[["app-experience"]],standalone:!0,features:[Tt],decls:17,vars:0,consts:[["id","experience"],[1,"section-head"],[1,"section-num"],[1,"section-title"],[1,"section-num","end"],[1,"exp-list"],[1,"exp-row"],[1,"exp-year"],[1,"exp-dot-col"],[1,"exp-dot"],[1,"exp-role"],[1,"exp-place"],[1,"exp-loc"],[1,"exp-reveal"]],template:function(i,r){i&1&&(H(0,"section",0)(1,"div",1)(2,"div")(3,"div",2),te(4,"\u2014 02 / Experience"),J(),H(5,"h2",3),te(6,"Rooms I've "),H(7,"em"),te(8,"worked"),J(),te(9," in."),J()(),H(10,"div",4),te(11,"Four"),Fe(12,"br"),te(13,"chapters"),J()(),H(14,"div",5),un(15,MI,15,6,"div",6,xI),J()()),i&2&&(ye(15),dn(r.experiences))},styles:['[_nghost-%COMP%]{display:block}.section-head[_ngcontent-%COMP%]   .end[_ngcontent-%COMP%]{text-align:right}.section-head[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin-top:1rem}.exp-list[_ngcontent-%COMP%]{display:flex;flex-direction:column;position:relative;padding-left:2rem}.exp-list[_ngcontent-%COMP%]:before{content:"";position:absolute;left:196px;top:5rem;bottom:5rem;width:1px;background:linear-gradient(180deg,transparent,var(--accent) 5%,var(--accent) 95%,transparent);opacity:.6;z-index:1}.exp-row[_ngcontent-%COMP%]{display:grid;grid-template-columns:120px 40px 1.5fr 2fr 140px;gap:1.5rem;padding:2.5rem 0;border-top:1px solid var(--line);align-items:center;position:relative;transition:all .5s var(--ease)}.exp-row[_ngcontent-%COMP%]:hover{padding-left:1rem;background:#f5efe605}.exp-row[_ngcontent-%COMP%]:hover   .exp-dot[_ngcontent-%COMP%]{background:var(--ink);box-shadow:0 0 20px var(--accent),0 0 40px var(--accent);transform:scale(1.3)}.exp-dot-col[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;position:relative;z-index:2}.exp-dot[_ngcontent-%COMP%]{width:10px;height:10px;border-radius:50%;background:var(--accent);border:2px solid var(--ink);box-shadow:0 0 10px var(--accent);transition:all .4s var(--ease);position:relative}.exp-dot[_ngcontent-%COMP%]:after{content:"";position:absolute;inset:-10px;border-radius:50%;background:var(--accent);opacity:.15;animation:_ngcontent-%COMP%_pulseDot 3s infinite}@keyframes _ngcontent-%COMP%_pulseDot{0%{transform:scale(1);opacity:.2}50%{transform:scale(1.8);opacity:0}to{transform:scale(1);opacity:.2}}.exp-year[_ngcontent-%COMP%]{font-family:JetBrains Mono,monospace;font-size:10px;color:var(--dim);letter-spacing:.1em;text-transform:uppercase}.exp-role[_ngcontent-%COMP%]{font-family:Fraunces,serif;font-weight:300;font-style:italic;font-size:1.6rem;letter-spacing:-.01em;color:var(--ink)}.exp-place[_ngcontent-%COMP%]{font-family:Fraunces,serif;font-weight:400;font-size:1.1rem;color:var(--dim)}.exp-place[_ngcontent-%COMP%]   small[_ngcontent-%COMP%]{display:block;color:var(--accent);font-size:.8rem;margin-top:.4rem;letter-spacing:.05em;text-transform:uppercase}.exp-loc[_ngcontent-%COMP%]{font-family:JetBrains Mono,monospace;font-size:9px;color:var(--dim);letter-spacing:.2em;text-transform:uppercase;text-align:right}.exp-reveal[_ngcontent-%COMP%]{grid-column:3/5;max-height:0;opacity:0;overflow:hidden;transition:all .6s var(--ease);color:var(--dim);font-size:.9rem;line-height:1.7}.exp-row[_ngcontent-%COMP%]:hover   .exp-reveal[_ngcontent-%COMP%]{max-height:200px;opacity:1;padding-top:1.5rem}@media (max-width: 1000px){.exp-list[_ngcontent-%COMP%]:before{display:none}.exp-row[_ngcontent-%COMP%]{grid-template-columns:1fr;gap:1rem;padding:2rem 0}.exp-dot-col[_ngcontent-%COMP%]{display:none}.exp-year[_ngcontent-%COMP%]{order:1}.exp-role[_ngcontent-%COMP%]{order:2;font-size:1.4rem}.exp-place[_ngcontent-%COMP%]{order:3}.exp-loc[_ngcontent-%COMP%]{order:4;text-align:left}.exp-reveal[_ngcontent-%COMP%]{order:5;grid-column:1}}'],changeDetection:0})}}return n})();var bI=["track"],wI=(n,e)=>e.value,EI=(n,e)=>e.title;function SI(n,e){if(n&1){let t=di();H(0,"button",16),Nt("click",function(){let r=Nn(t).$implicit,s=Qt();return On(s.setFilter(r.value))}),te(1),J()}if(n&2){let t=e.$implicit,i=Qt();Kt("active",i.activeFilter()===t.value),ye(),Vt(" ",t.label," ")}}function CI(n,e){if(n&1){let t=di();H(0,"div",17),Nt("click",function(){let r=Nn(t),s=r.$implicit,o=r.$index,a=Qt();return On(a.onItemClick(s,o))}),H(1,"div",18)(2,"div",19),te(3),J(),Fe(4,"img",20)(5,"div",21),J(),H(6,"div",22)(7,"div")(8,"div",23)(9,"em"),te(10),J()(),H(11,"div",24),te(12),J()(),H(13,"div",25),te(14),J()()()}if(n&2){let t=e.$implicit,i=e.$index,r=Qt();ln("transform",r.getTransform(i))("z-index",r.getZIndex(i))("opacity",r.getOpacity(i)),Kt("active",i===r.activeIndex()),ye(3),Vt("P \u2014 ",r.paddedIndex(i),""),ye(),ln("object-position",t.imgPosition||"center"),Wt("src",t.img,Zn),ye(),ln("opacity",i===r.activeIndex()?0:.5),ye(),ln("opacity",i===r.activeIndex()?1:0),ye(4),ut(t.title),ye(2),ut(t.brand),ye(2),ut(r.categoryLabel(t.cat))}}function DI(n,e){n&1&&Fe(0,"span",33)}function TI(n,e){n&1&&Fe(0,"span",33)}function AI(n,e){if(n&1){let t=di();H(0,"div",26),Nt("click",function(){Nn(t);let r=Qt();return On(r.closeProject())}),H(1,"button",27),Nt("click",function(r){return Nn(t),Qt().closeProject(),On(r.stopPropagation())}),li(),H(2,"svg",28),Fe(3,"path",29),J()(),Ia(),H(4,"div",30),Nt("click",function(r){return Nn(t),On(r.stopPropagation())}),Fe(5,"div",31),H(6,"div",32),un(7,DI,1,0,"span",33,ro),J(),H(9,"div",34),Fe(10,"video",35)(11,"div",36)(12,"div",37)(13,"span",38)(14,"span",39)(15,"span",40)(16,"span",41)(17,"div",42)(18,"div",43),H(19,"div",44),Fe(20,"span",45),J()(),H(21,"div",46),un(22,TI,1,0,"span",33,ro),J()()()}if(n&2){let t=e,i=Qt();ye(7),dn(i.playerPerfs),ye(3),Wt("poster",t.img,Zn)("src",t.video||"/assets/logos/studio-bg.mp4",Zn),ye(12),dn(i.playerPerfs)}}var Ay=(()=>{class n{constructor(){this.zone=ke(rt),this.track=kt.required("track"),this.filters=Xv,this.activeFilter=yt("all"),this.activeIndex=yt(0),this.dragging=yt(!1),this.isMobile=yt(!1),this.selected=yt(null),this.selectedIndex=yt(0),this.perfs=Array.from({length:24}),this.playerPerfs=Array.from({length:32}),this.shuffledAllProjects=(()=>{let t=Za.filter(s=>s.cat==="ai");return[...[...Za.filter(s=>s.cat!=="ai")].sort(()=>Math.random()-.5),...t]})(),this.visibleProjects=Sd(()=>{let t=this.activeFilter();return t==="all"?this.shuffledAllProjects:Za.filter(i=>i.cat===t)}),this.cleanups=[]}openProject(t,i){this.selected.set(t),this.selectedIndex.set(i),document.body.style.overflow="hidden"}onItemClick(t,i){i===this.activeIndex()?this.openProject(t,i):this.activeIndex.set(i)}closeProject(){this.selected.set(null),document.body.style.overflow=""}onEscape(){this.selected()&&this.closeProject()}roleFor(t){switch(t){case"cine":return"Cinematographer";case"edit":return"Editor";case"vfx":return"VFX Artist";case"ai":return"AI Integration"}}setFilter(t){this.activeFilter.set(t),this.activeIndex.set(0),queueMicrotask(()=>{let i=this.track().nativeElement.parentElement;if(i){let r=i.getBoundingClientRect().top+window.scrollY-80;window.scrollTo({top:r,behavior:"smooth"})}})}getTransform(t){let i=t-this.activeIndex();if(i===0)return"translateX(-50%) translateZ(0px) rotateY(0deg) scale(1)";let r=Math.sign(i),s=Math.abs(i),o=this.isMobile(),a=o?120:180,c=o?40:70,l=o?50:80,u=o?-150:-250,d=o?25:35,h=r*(a+s*c),f=u-s*l,g=r*-d;return`translateX(calc(-50% + ${h}px)) translateZ(${f}px) rotateY(${g}deg) scale(0.9)`}getZIndex(t){return 100-Math.abs(t-this.activeIndex())}getOpacity(t){return Math.abs(t-this.activeIndex())>4?0:1}categoryLabel(t){return Yv[t]??t}paddedIndex(t){return String(t+1).padStart(2,"0")}ngAfterViewInit(){let t=()=>{this.isMobile.set(window.innerWidth<=768)};t(),window.addEventListener("resize",t),this.cleanups.push(()=>window.removeEventListener("resize",t)),this.zone.runOutsideAngular(()=>{let i=this.track().nativeElement.parentElement,r=!1,s=l=>{if(l.preventDefault(),r)return;let u=this.activeIndex();l.deltaY>0&&u<this.visibleProjects().length-1?(r=!0,this.zone.run(()=>this.activeIndex.set(u+1)),setTimeout(()=>r=!1,400)):l.deltaY<0&&u>0&&(r=!0,this.zone.run(()=>this.activeIndex.set(u-1)),setTimeout(()=>r=!1,400))};i.addEventListener("wheel",s,{passive:!1}),this.cleanups.push(()=>i.removeEventListener("wheel",s));let o=0,a=l=>{o=l.touches[0].clientX},c=l=>{let u=l.changedTouches[0].clientX,d=this.activeIndex();o-u>50&&d<this.visibleProjects().length-1?this.zone.run(()=>this.activeIndex.set(d+1)):o-u<-50&&d>0&&this.zone.run(()=>this.activeIndex.set(d-1))};i.addEventListener("touchstart",a,{passive:!0}),i.addEventListener("touchend",c),this.cleanups.push(()=>i.removeEventListener("touchstart",a),()=>i.removeEventListener("touchend",c))})}ngOnDestroy(){this.cleanups.forEach(t=>t())}static{this.\u0275fac=function(i){return new(i||n)}}static{this.\u0275cmp=Dt({type:n,selectors:[["app-work"]],viewQuery:function(i,r){i&1&&Ut(r.track,bI,5),i&2&&Kn()},hostBindings:function(i,r){i&1&&Nt("keydown.escape",function(){return r.onEscape()},!1,bg)},standalone:!0,features:[Tt],decls:28,vars:3,consts:[["track",""],["id","work",1,"work"],[1,"work-head"],[1,"section-head"],[1,"section-num"],[1,"section-title"],[1,"section-num","end"],[1,"gallery-filters"],[1,"gallery-filter",3,"active"],[1,"gallery-wrap","cover-flow-wrap"],[1,"cover-flow-bg"],[1,"cover-flow-overlay"],[1,"gallery-track","cover-flow-track"],[1,"gallery-item","cover-flow-item",3,"active","transform","zIndex","opacity"],[1,"drag-hint"],[1,"project-modal"],[1,"gallery-filter",3,"click"],[1,"gallery-item","cover-flow-item",3,"click"],[1,"gallery-item-inner"],[1,"gallery-item-num"],[1,"gallery-item-visual",2,"object-fit","cover","width","100%","height","100%","position","absolute","inset","0",3,"src"],[1,"gallery-item-shine"],[1,"gallery-item-meta"],[1,"gallery-item-title"],[1,"gallery-item-tag","brand"],[1,"gallery-item-tag"],[1,"project-modal",3,"click"],["type","button","aria-label","Close",1,"modal-close",3,"click"],["width","20","height","20","viewBox","0 0 24 24","fill","none","stroke","currentColor","stroke-width","2"],["d","M18 6 6 18M6 6l12 12"],[1,"modal-player",3,"click"],[1,"player-glow"],[1,"player-strip","top"],[1,"perf"],[1,"player-viewport"],["controls","","autoplay","","playsinline","",3,"poster","src"],[1,"player-grain"],[1,"player-vignette"],[1,"bracket","tl"],[1,"bracket","tr"],[1,"bracket","bl"],[1,"bracket","br"],[1,"letterbox","top"],[1,"letterbox","bottom"],[1,"rec-badge"],[1,"rec-dot"],[1,"player-strip","bottom"]],template:function(i,r){if(i&1&&(H(0,"section",1)(1,"div",2)(2,"div",3)(3,"div")(4,"div",4),te(5,"\u2014 03 / Selected Work"),J(),H(6,"h2",5),te(7,"The "),H(8,"em"),te(9,"reel"),J(),te(10,", fragmented."),J()(),H(11,"div",6),te(12,"250+"),Fe(13,"br"),te(14,"projects delivered"),J()()(),H(15,"div",7),un(16,SI,2,3,"button",8,wI),J(),H(18,"div",9),Fe(19,"div",10)(20,"div",11),H(21,"div",12,0),un(23,CI,15,19,"div",13,EI),J()(),H(25,"div",14),te(26,"\u2190 Drag / scroll to explore \u2192"),J()(),bn(27,AI,24,2,"div",15)),i&2){let s;ye(16),dn(r.filters),ye(3),ln("background-image",r.visibleProjects()[r.activeIndex()]?"url("+r.visibleProjects()[r.activeIndex()].img+")":"none"),ye(4),dn(r.visibleProjects()),ye(4),Ha((s=r.selected())?27:-1,s)}},styles:['@charset "UTF-8";[_nghost-%COMP%]{display:block}.work[_ngcontent-%COMP%]{padding:3.5rem 0 1.5rem;min-height:100vh;height:auto;display:flex;flex-direction:column;overflow:visible;background:var(--bg);position:relative;z-index:2}.work-head[_ngcontent-%COMP%]{padding:0 2.5rem;margin-bottom:1.25rem}.section-head[_ngcontent-%COMP%]{border:none;padding:0;margin-bottom:0}.section-head[_ngcontent-%COMP%]   .end[_ngcontent-%COMP%]{text-align:right}.section-head[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin-top:.5rem;font-size:clamp(2rem,4.5vw,3.5rem)}.gallery-filters[_ngcontent-%COMP%]{display:flex;gap:.5rem;padding:0 2.5rem;margin-bottom:1rem;flex-wrap:wrap}.gallery-filter[_ngcontent-%COMP%]{padding:.5rem 1.25rem;border:1px solid var(--line);font-family:JetBrains Mono,monospace;font-size:10px;letter-spacing:.2em;text-transform:uppercase;color:var(--dim);transition:all .3s var(--ease)}.gallery-filter[_ngcontent-%COMP%]:hover{border-color:var(--ink);color:var(--ink)}.gallery-filter.active[_ngcontent-%COMP%]{border-color:var(--accent);color:var(--accent)}.cover-flow-wrap[_ngcontent-%COMP%]{position:relative;height:75vh;min-height:500px;max-height:800px;overflow:hidden;perspective:1200px;background:var(--bg);width:100%;margin-top:1rem}.cover-flow-bg[_ngcontent-%COMP%]{position:absolute;inset:-10%;background-size:cover;background-position:center;filter:blur(40px) brightness(.4);transition:background-image .6s var(--ease);z-index:0}.cover-flow-overlay[_ngcontent-%COMP%]{position:absolute;inset:0;background:radial-gradient(circle at center,transparent 0%,var(--bg) 80%);z-index:1}.cover-flow-track[_ngcontent-%COMP%]{position:relative;height:100%;width:100%;padding:0!important;transform-style:preserve-3d;z-index:2}.cover-flow-item[_ngcontent-%COMP%]{position:absolute;top:10%;bottom:10%;left:50%;width:clamp(280px,35vw,420px);transition:transform .6s cubic-bezier(.2,.8,.2,1),opacity .6s cubic-bezier(.2,.8,.2,1);will-change:transform,opacity;transform-style:preserve-3d;cursor:pointer;display:flex;flex-direction:column}.gallery-item-inner[_ngcontent-%COMP%]{flex:1;min-height:0;width:100%;position:relative;overflow:hidden;background:var(--line);transform-style:preserve-3d;transition:transform .4s var(--ease),box-shadow .4s var(--ease)}.gallery-item-inner[_ngcontent-%COMP%]:before{content:"";position:absolute;inset:0;z-index:2;background:linear-gradient(180deg,transparent 60%,rgba(10,9,8,.75) 100%);pointer-events:none}.gallery-item[_ngcontent-%COMP%]:hover   .gallery-item-inner[_ngcontent-%COMP%]{box-shadow:0 40px 80px #0009,0 0 0 1px #d4472a4d}.gallery-item-visual[_ngcontent-%COMP%]{position:absolute;inset:0;background-size:cover;background-position:center;transition:transform 1s var(--ease),filter .6s;filter:contrast(1.05)}.gallery-item[_ngcontent-%COMP%]:hover   .gallery-item-visual[_ngcontent-%COMP%]{transform:scale(1.05);filter:contrast(1.15) brightness(1.05)}.gallery-item-shine[_ngcontent-%COMP%]{position:absolute;inset:0;z-index:3;pointer-events:none;background:linear-gradient(105deg,transparent 40%,rgba(224,169,109,.18) 50%,transparent 60%);opacity:0;transition:opacity .4s;mix-blend-mode:screen}.gallery-item[_ngcontent-%COMP%]:hover   .gallery-item-shine[_ngcontent-%COMP%]{opacity:1}.gallery-item-num[_ngcontent-%COMP%]{position:absolute;top:1rem;left:1rem;z-index:3;font-family:JetBrains Mono,monospace;font-size:10px;color:var(--ink);letter-spacing:.2em;mix-blend-mode:difference}.gallery-item-meta[_ngcontent-%COMP%]{padding:.75rem 0 0;min-height:64px;display:flex;justify-content:space-between;align-items:flex-start;gap:1rem}.gallery-item-title[_ngcontent-%COMP%]{font-family:Fraunces,serif;font-weight:400;font-size:1.1rem;letter-spacing:-.01em}.gallery-item-title[_ngcontent-%COMP%]   em[_ngcontent-%COMP%]{font-style:italic;color:var(--amber)}.gallery-item-tag[_ngcontent-%COMP%]{font-family:JetBrains Mono,monospace;font-size:10px;color:var(--dim);letter-spacing:.2em;text-transform:uppercase;white-space:nowrap}.gallery-item-tag.brand[_ngcontent-%COMP%]{margin-top:.4rem}.drag-hint[_ngcontent-%COMP%]{text-align:center;padding:.75rem;font-family:JetBrains Mono,monospace;font-size:10px;color:var(--dim);letter-spacing:.3em;text-transform:uppercase}.gallery-item[_ngcontent-%COMP%]{cursor:pointer}@media (max-width: 900px){.work[_ngcontent-%COMP%]{height:auto;padding:5rem 0}.work-head[_ngcontent-%COMP%], .gallery-filters[_ngcontent-%COMP%], .gallery-track[_ngcontent-%COMP%]{padding-left:1.25rem;padding-right:1.25rem}.gallery-track[_ngcontent-%COMP%]{gap:1rem}.gallery-item[_ngcontent-%COMP%]{width:85vw}}@media (max-width: 600px){.section-head[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:2.5rem}.gallery-filters[_ngcontent-%COMP%]{gap:.25rem}.gallery-filter[_ngcontent-%COMP%]{padding:.4rem .8rem;font-size:8px}}.project-modal[_ngcontent-%COMP%]{position:fixed;inset:0;z-index:9000;display:flex;align-items:center;justify-content:center;padding:3rem;background:#050403cc;backdrop-filter:blur(18px) saturate(1.1);-webkit-backdrop-filter:blur(18px) saturate(1.1);animation:_ngcontent-%COMP%_backdropIn .4s var(--ease)}@keyframes _ngcontent-%COMP%_backdropIn{0%{opacity:0}to{opacity:1}}.modal-player[_ngcontent-%COMP%]{position:relative;width:min(1100px,92vw);max-height:90vh;display:flex;flex-direction:column;animation:_ngcontent-%COMP%_playerIn .7s cubic-bezier(.2,.9,.3,1.2)}@keyframes _ngcontent-%COMP%_playerIn{0%{opacity:0;transform:scale(.85);filter:blur(12px)}60%{opacity:1;filter:blur(0)}to{opacity:1;transform:scale(1);filter:blur(0)}}.player-glow[_ngcontent-%COMP%]{position:absolute;inset:-60px;border-radius:24px;background:radial-gradient(ellipse at center,rgba(212,71,42,.25),transparent 60%);filter:blur(40px);pointer-events:none;z-index:-1;animation:_ngcontent-%COMP%_glowPulse 4s ease-in-out infinite}@keyframes _ngcontent-%COMP%_glowPulse{0%,to{opacity:.8;transform:scale(1)}50%{opacity:1;transform:scale(1.04)}}.player-strip[_ngcontent-%COMP%]{display:flex;justify-content:space-between;height:24px;padding:0 6px;background:linear-gradient(180deg,#000,#080706);border-left:1px solid rgba(255,255,255,.05);border-right:1px solid rgba(255,255,255,.05);flex-shrink:0;overflow:hidden}.player-strip.top[_ngcontent-%COMP%]{border-top:1px solid rgba(255,255,255,.05);border-radius:6px 6px 0 0}.player-strip.bottom[_ngcontent-%COMP%]{border-bottom:1px solid rgba(255,255,255,.05);border-radius:0 0 6px 6px}.player-strip[_ngcontent-%COMP%]   .perf[_ngcontent-%COMP%]{width:18px;height:12px;background:#050403;border-radius:2px;border:1px solid rgba(255,255,255,.04);align-self:center;animation:_ngcontent-%COMP%_perfSlideModal 1.6s linear infinite}@keyframes _ngcontent-%COMP%_perfSlideModal{0%{opacity:.35;transform:translate(-5px)}50%{opacity:1}to{opacity:.35;transform:translate(5px)}}.player-viewport[_ngcontent-%COMP%]{position:relative;aspect-ratio:16/9;max-height:76vh;background:#000;overflow:hidden;border-left:1px solid rgba(212,71,42,.15);border-right:1px solid rgba(212,71,42,.15)}.player-viewport[_ngcontent-%COMP%]   video[_ngcontent-%COMP%]{width:100%;height:100%;display:block;object-fit:contain;background:#000}.player-grain[_ngcontent-%COMP%]{position:absolute;inset:-40%;opacity:.08;pointer-events:none;mix-blend-mode:overlay;background-image:repeating-radial-gradient(circle at 20% 30%,#fff9 0,#fff0 2px),repeating-radial-gradient(circle at 70% 80%,#ffffff80 0,#fff0 2px);animation:_ngcontent-%COMP%_playerGrain .7s steps(6) infinite;z-index:2}@keyframes _ngcontent-%COMP%_playerGrain{0%{transform:translate(0)}25%{transform:translate(-3%,2%)}50%{transform:translate(2%,-3%)}75%{transform:translate(-2%,3%)}to{transform:translate(0)}}.player-vignette[_ngcontent-%COMP%]{position:absolute;inset:0;pointer-events:none;background:radial-gradient(ellipse at center,transparent 55%,rgba(0,0,0,.55) 100%);z-index:2}.bracket[_ngcontent-%COMP%]{position:absolute;width:28px;height:28px;border-color:var(--accent);border-style:solid;pointer-events:none;z-index:3;opacity:0;animation:_ngcontent-%COMP%_bracketIn .5s .4s var(--ease) forwards;filter:drop-shadow(0 0 6px rgba(212,71,42,.6))}.bracket.tl[_ngcontent-%COMP%]{top:12px;left:12px;border-width:2px 0 0 2px}.bracket.tr[_ngcontent-%COMP%]{top:12px;right:12px;border-width:2px 2px 0 0}.bracket.bl[_ngcontent-%COMP%]{bottom:12px;left:12px;border-width:0 0 2px 2px}.bracket.br[_ngcontent-%COMP%]{bottom:12px;right:12px;border-width:0 2px 2px 0}@keyframes _ngcontent-%COMP%_bracketIn{0%{opacity:0;transform:scale(1.6)}to{opacity:.9;transform:scale(1)}}.letterbox[_ngcontent-%COMP%]{position:absolute;left:0;right:0;height:50%;background:#000;pointer-events:none;z-index:4}.letterbox.top[_ngcontent-%COMP%]{top:0;animation:_ngcontent-%COMP%_letterboxTop .9s .1s cubic-bezier(.7,0,.2,1) forwards}.letterbox.bottom[_ngcontent-%COMP%]{bottom:0;animation:_ngcontent-%COMP%_letterboxBottom .9s .1s cubic-bezier(.7,0,.2,1) forwards}@keyframes _ngcontent-%COMP%_letterboxTop{0%{transform:translateY(0)}to{transform:translateY(-100%)}}@keyframes _ngcontent-%COMP%_letterboxBottom{0%{transform:translateY(0)}to{transform:translateY(100%)}}.rec-badge[_ngcontent-%COMP%]{position:absolute;top:20px;left:20px;z-index:5;display:flex;align-items:center;gap:.5rem;padding:6px 10px;background:#0a090899;border-radius:20px;backdrop-filter:blur(6px);opacity:0;animation:_ngcontent-%COMP%_fadeIn .5s .7s var(--ease) forwards}.rec-badge[_ngcontent-%COMP%]   .rec-dot[_ngcontent-%COMP%]{width:8px;height:8px;border-radius:50%;background:var(--accent);box-shadow:0 0 10px var(--accent);animation:_ngcontent-%COMP%_recPulse 1.2s ease-in-out infinite}@keyframes _ngcontent-%COMP%_recPulse{0%,to{opacity:1;transform:scale(1)}50%{opacity:.4;transform:scale(.75)}}.modal-close[_ngcontent-%COMP%]{position:absolute;top:1.25rem;right:1.25rem;z-index:9010;width:48px;height:48px;border-radius:50%;background:#0a0908b3;border:1px solid rgba(212,71,42,.3);backdrop-filter:blur(8px);box-shadow:0 0 20px #d4472a26;color:var(--ink);cursor:pointer;display:flex;align-items:center;justify-content:center;transition:all .3s var(--ease);animation:_ngcontent-%COMP%_fadeIn .5s .6s var(--ease) backwards}.modal-close[_ngcontent-%COMP%]:before{content:"";position:absolute;inset:-4px;border-radius:50%;border:1px solid rgba(212,71,42,.25);animation:_ngcontent-%COMP%_closeRing 2s ease-in-out infinite}.modal-close[_ngcontent-%COMP%]:hover{border-color:var(--accent);color:var(--accent);background:#0a0908e6;transform:rotate(90deg) scale(1.08);box-shadow:0 0 30px #d4472a59}@keyframes _ngcontent-%COMP%_closeRing{0%,to{transform:scale(1);opacity:.8}50%{transform:scale(1.15);opacity:.2}}@keyframes _ngcontent-%COMP%_fadeIn{0%{opacity:0}to{opacity:1}}@media (max-width: 820px){.project-modal[_ngcontent-%COMP%]{padding:1rem}.modal-close[_ngcontent-%COMP%]{top:.75rem;right:.75rem;width:38px;height:38px}}'],changeDetection:0})}}return n})();var II={"[class.ng-untouched]":"isUntouched","[class.ng-touched]":"isTouched","[class.ng-pristine]":"isPristine","[class.ng-dirty]":"isDirty","[class.ng-valid]":"isValid","[class.ng-invalid]":"isInvalid","[class.ng-pending]":"isPending"},nO=Ct(xt({},II),{"[class.ng-submitted]":"isSubmitted"});var RI=new Je("CallSetDisabledState",{providedIn:"root",factory:()=>Iy}),Iy="always";var PI=(()=>{class n{static{this.\u0275fac=function(i){return new(i||n)}}static{this.\u0275mod=Zr({type:n})}static{this.\u0275inj=Yr({})}}return n})();var Ry=(()=>{class n{static withConfig(t){return{ngModule:n,providers:[{provide:RI,useValue:t.callSetDisabledState??Iy}]}}static{this.\u0275fac=function(i){return new(i||n)}}static{this.\u0275mod=Zr({type:n})}static{this.\u0275inj=Yr({imports:[PI]})}}return n})();var NI=(n,e)=>e.type;function OI(n,e){n&1&&(li(),H(0,"svg",12),Fe(1,"path",17)(2,"polyline",18),J())}function FI(n,e){n&1&&(li(),H(0,"svg",13),Fe(1,"path",19)(2,"circle",20),J())}function LI(n,e){if(n&1&&(H(0,"a",10)(1,"div",11),bn(2,OI,3,0,":svg:svg",12)(3,FI,3,0,":svg:svg",13),J(),H(4,"div",14)(5,"span",15),te(6),J(),H(7,"span",16),te(8),J()()()),n&2){let t,i=e.$implicit;Wt("href",i.href,Zn),ye(2),Ha((t=i.type)==="email"?2:t==="linkedin"?3:-1),ye(4),ut(i.label),ye(2),ut(i.value)}}var Py=(()=>{class n{constructor(){this.submitted=yt(!1),this.formData={name:"",email:"",subject:"",message:""},this.channels=[{type:"email",label:"email",value:"riishabh20@gmail.com",href:"mailto:riishabh20@gmail.com"},{type:"linkedin",label:"linkedin",value:"Rishabh Sahu",href:"https://www.linkedin.com/in/rishabh-sahu-6a782a249?utm_source=share_via&utm_content=profile&utm_medium=member_ios"}]}onSubmit(){console.log("Form Submit:",this.formData),setTimeout(()=>{this.submitted.set(!0),this.formData.name="",this.formData.email="",this.formData.subject="",this.formData.message=""},800)}static{this.\u0275fac=function(i){return new(i||n)}}static{this.\u0275cmp=Dt({type:n,selectors:[["app-contact"]],standalone:!0,features:[Tt],decls:18,vars:0,consts:[["id","contact",1,"contact"],[1,"contact-inner"],[1,"contact-grid"],[1,"contact-info"],[1,"contact-title"],[1,"gradient-text"],[1,"contact-meta"],[1,"sub-title"],[1,"contact-desc"],[1,"channel-list"],["target","_blank",1,"channel-card",3,"href"],[1,"channel-icon"],["width","18","height","18","viewBox","0 0 24 24","fill","none","stroke","currentColor","stroke-width","2"],["width","18","height","18","viewBox","0 0 24 24","fill","currentColor"],[1,"channel-content"],[1,"channel-label"],[1,"channel-value"],["d","M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"],["points","22,6 12,13 2,6"],["d","M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"],["cx","4","cy","4","r","2"]],template:function(i,r){i&1&&(H(0,"section",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"h1",4),te(5,"Let's "),H(6,"span",5),te(7,"work"),J(),Fe(8,"br"),te(9,"together"),J(),H(10,"div",6)(11,"h2",7),te(12,"Get in touch"),J(),H(13,"p",8),te(14," I'm currently open to new opportunities \u2014 full time, freelance, or interesting collaborations. Drop a message and I'll get back to you within 24 hours. "),J()(),H(15,"div",9),un(16,LI,9,4,"a",10,NI),J()()()()()),i&2&&(ye(16),dn(r.channels))},dependencies:[co,Ry],styles:["[_nghost-%COMP%]{display:block}.contact[_ngcontent-%COMP%]{padding:5rem 2.5rem 3rem;background:var(--bg);min-height:100vh;height:100vh;display:flex;align-items:center;position:relative;overflow:hidden}.contact-inner[_ngcontent-%COMP%]{max-width:1400px;width:100%;margin:0 auto;position:relative;z-index:2}.contact-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 1.2fr;gap:4rem;align-items:start}.contact-title[_ngcontent-%COMP%]{font-family:Fraunces,serif;font-weight:300;font-size:clamp(2.5rem,5vw,4.5rem);line-height:1;letter-spacing:-.04em;margin-bottom:1.75rem;color:var(--ink)}.contact-title[_ngcontent-%COMP%]   .gradient-text[_ngcontent-%COMP%]{background:linear-gradient(90deg,var(--accent),var(--amber));-webkit-background-clip:text;-webkit-text-fill-color:transparent;font-style:italic}.contact-meta[_ngcontent-%COMP%]{margin-bottom:1.75rem}.contact-meta[_ngcontent-%COMP%]   .sub-title[_ngcontent-%COMP%]{font-family:Fraunces,serif;font-weight:400;font-size:1.35rem;margin-bottom:.6rem;color:var(--ink)}.contact-meta[_ngcontent-%COMP%]   .contact-desc[_ngcontent-%COMP%]{font-size:.95rem;color:var(--dim);line-height:1.5;max-width:500px}.channel-list[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:.6rem}.channel-card[_ngcontent-%COMP%]{display:flex;align-items:center;gap:1rem;padding:.75rem 1rem;background:#f5efe605;border:1px solid rgba(245,239,230,.05);border-radius:16px;backdrop-filter:blur(10px);transition:all .4s var(--ease);text-decoration:none}.channel-card[_ngcontent-%COMP%]:hover{background:#f5efe60d;border-color:var(--accent);transform:translate(10px)}.channel-card[_ngcontent-%COMP%]:hover   .channel-icon[_ngcontent-%COMP%]{color:var(--accent);background:#ffffff0d}.channel-icon[_ngcontent-%COMP%]{width:40px;height:40px;padding:10px;background:#ffffff08;border-radius:14px;color:var(--accent);transition:all .4s var(--ease);display:flex;align-items:center;justify-content:center}.channel-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{width:18px;height:18px;display:block;stroke:var(--accent);fill:transparent}.channel-icon[_ngcontent-%COMP%]   svg[fill=currentColor][_ngcontent-%COMP%]{fill:var(--accent);stroke:none}.channel-content[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:.2rem}.channel-label[_ngcontent-%COMP%]{font-family:JetBrains Mono,monospace;font-size:9px;letter-spacing:.2em;text-transform:uppercase;color:var(--dim)}.channel-value[_ngcontent-%COMP%]{font-family:Fraunces,serif;font-size:.95rem;color:var(--ink)}.contact-form-container[_ngcontent-%COMP%]{position:relative;padding-top:.25rem}.contact-form[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:1rem}.form-row[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 1fr;gap:1rem}.form-group[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:.4rem}.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{font-family:JetBrains Mono,monospace;font-size:9px;letter-spacing:.2em;text-transform:uppercase;color:var(--dim)}.form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .form-group[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]{background:#f5efe605;border:1px solid rgba(245,239,230,.08);border-radius:10px;padding:.65rem .9rem;color:var(--ink);font-family:inherit;font-size:.95rem;transition:all .3s}.form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder, .form-group[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]::placeholder{color:#f5efe626}.form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, .form-group[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus{outline:none;border-color:var(--accent);background:#f5efe60a;box-shadow:0 0 15px #d4472a1a}.form-group[_ngcontent-%COMP%]   input.ng-invalid.ng-touched[_ngcontent-%COMP%], .form-group[_ngcontent-%COMP%]   textarea.ng-invalid.ng-touched[_ngcontent-%COMP%]{border-color:#d4472a80}.submit-btn[_ngcontent-%COMP%]{margin-top:.25rem;align-self:flex-start;padding:.8rem 1.6rem;background:linear-gradient(90deg,var(--accent),var(--amber));color:#000;border:none;border-radius:12px;font-family:JetBrains Mono,monospace;font-size:11px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;display:flex;align-items:center;gap:.75rem;cursor:pointer;transition:all .4s var(--ease)}.submit-btn[_ngcontent-%COMP%]:hover:not(:disabled){transform:translateY(-3px);box-shadow:0 10px 25px #d4472a33}.submit-btn[_ngcontent-%COMP%]:disabled{opacity:.4;cursor:not-allowed}.success-message[_ngcontent-%COMP%]{padding:3rem;background:#f5efe605;border:1px solid var(--accent);border-radius:20px;text-align:center;backdrop-filter:blur(10px);animation:_ngcontent-%COMP%_fadeIn .6s var(--ease)}.success-message[_ngcontent-%COMP%]   .success-icon[_ngcontent-%COMP%]{width:50px;height:50px;background:var(--accent);color:#fff;border-radius:50%;font-size:1.5rem;line-height:50px;margin:0 auto 1.5rem}.success-message[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-family:Fraunces,serif;font-size:1.8rem;margin-bottom:.8rem}.success-message[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:var(--dim);margin-bottom:1.5rem}.reset-btn[_ngcontent-%COMP%]{background:transparent;border:1px solid var(--dim);color:var(--dim);padding:.6rem 1.2rem;border-radius:8px;cursor:pointer;transition:all .3s}.reset-btn[_ngcontent-%COMP%]:hover{border-color:var(--ink);color:var(--ink)}@keyframes _ngcontent-%COMP%_fadeIn{0%{opacity:0;transform:translateY(15px)}to{opacity:1;transform:translateY(0)}}.form-decoration[_ngcontent-%COMP%]{position:absolute;top:50%;right:-5%;width:12px;height:12px;background:var(--accent);border-radius:50%;box-shadow:0 0 15px var(--accent),0 0 30px var(--accent);pointer-events:none;z-index:1}@media (max-width: 1100px){.contact-grid[_ngcontent-%COMP%]{grid-template-columns:1fr;gap:5rem}.contact-title[_ngcontent-%COMP%]{margin-bottom:3rem}}@media (max-width: 600px){.form-row[_ngcontent-%COMP%]{grid-template-columns:1fr}.contact[_ngcontent-%COMP%]{padding:6rem 1.25rem}}"],changeDetection:0})}}return n})();function kI(n,e){if(n&1&&(H(0,"span"),te(1),J()),n&2){let t=e.$implicit;Kt("sep",t.sep),ye(),ut(t.text)}}var Ny=(()=>{class n{constructor(){this.marqueeItems=[{text:"Cinematography",sep:!1},{text:"\u2726",sep:!0},{text:"Editing",sep:!1},{text:"\u2726",sep:!0},{text:"Visual Effects",sep:!1},{text:"\u2726",sep:!0},{text:"Colour",sep:!1},{text:"\u2726",sep:!0},{text:"Direction",sep:!1},{text:"\u2726",sep:!0},{text:"Cinematography",sep:!1},{text:"\u2726",sep:!0},{text:"Editing",sep:!1},{text:"\u2726",sep:!0},{text:"Visual Effects",sep:!1},{text:"\u2726",sep:!0},{text:"Colour",sep:!1},{text:"\u2726",sep:!0},{text:"Direction",sep:!1},{text:"\u2726",sep:!0}]}static{this.\u0275fac=function(i){return new(i||n)}}static{this.\u0275cmp=Dt({type:n,selectors:[["app-root"]],standalone:!0,features:[Tt],decls:23,vars:0,consts:[[1,"grain"],[1,"vignette"],[1,"marquee"],[1,"marquee-track"],[3,"sep"]],template:function(i,r){i&1&&(Fe(0,"div",0)(1,"div",1)(2,"app-three-scene")(3,"app-loader")(4,"app-cursor")(5,"app-navbar"),H(6,"main"),Fe(7,"app-hero"),H(8,"div",2)(9,"div",3),un(10,kI,2,3,"span",4,ro),J()(),Fe(12,"app-skills")(13,"app-experience")(14,"app-work")(15,"app-contact"),H(16,"footer")(17,"span"),te(18,"\xA9 2026 Rishabh Sahu \u2014 Made in Mumbai"),J(),H(19,"span"),te(20,"19.0760\xB0 N / 72.8777\xB0 E"),J(),H(21,"span"),te(22,"Built with craft, not templates"),J()()()),i&2&&(ye(10),dn(r.marqueeItems))},dependencies:[Zv,Jv,Kv,Sy,Cy,Dy,Ty,Ay,Py],styles:["[_nghost-%COMP%]{display:block}main[_ngcontent-%COMP%]{display:block}.marquee[_ngcontent-%COMP%]{border-top:1px solid var(--line);border-bottom:1px solid var(--line);overflow:hidden;padding:1.5rem 0;background:var(--bg);position:relative;z-index:2}.marquee-track[_ngcontent-%COMP%]{display:flex;gap:4rem;white-space:nowrap;animation:_ngcontent-%COMP%_marquee 40s linear infinite;width:max-content}@keyframes _ngcontent-%COMP%_marquee{to{transform:translate(-50%)}}.marquee[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-family:Fraunces,serif;font-size:1.8rem;font-weight:300;font-style:italic;color:var(--dim)}.marquee[_ngcontent-%COMP%]   span.sep[_ngcontent-%COMP%]{color:var(--accent);font-style:normal}footer[_ngcontent-%COMP%]{padding:2.5rem;border-top:1px solid var(--line);display:flex;justify-content:space-between;align-items:center;font-family:JetBrains Mono,monospace;font-size:10px;color:var(--dim);letter-spacing:.25em;text-transform:uppercase;flex-wrap:wrap;gap:1rem;position:relative;z-index:2;background:var(--bg)}"],changeDetection:0})}}return n})();var Oy={providers:[_v({eventCoalescing:!0})]};"scrollRestoration"in history&&(history.scrollRestoration="manual");window.scrollTo(0,0);Wv(Ny,Oy).catch(n=>console.error(n));
