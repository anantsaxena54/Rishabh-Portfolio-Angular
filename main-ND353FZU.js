var _y=Object.defineProperty,xy=Object.defineProperties;var My=Object.getOwnPropertyDescriptors;var Tf=Object.getOwnPropertySymbols;var by=Object.prototype.hasOwnProperty,wy=Object.prototype.propertyIsEnumerable;var Af=(n,e,t)=>e in n?_y(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,_t=(n,e)=>{for(var t in e||={})by.call(e,t)&&Af(n,t,e[t]);if(Tf)for(var t of Tf(e))wy.call(e,t)&&Af(n,t,e[t]);return n},St=(n,e)=>xy(n,My(e));var Co=(n,e,t)=>new Promise((i,r)=>{var s=c=>{try{a(t.next(c))}catch(l){r(l)}},o=c=>{try{a(t.throw(c))}catch(l){r(l)}},a=c=>c.done?i(c.value):Promise.resolve(c.value).then(s,o);a((t=t.apply(n,e)).next())});function If(n,e){return Object.is(n,e)}var At=null,Do=!1,To=1,Bn=Symbol("SIGNAL");function $e(n){let e=At;return At=n,e}function Pf(){return At}var Rs={version:0,lastCleanEpoch:0,dirty:!1,producerNode:void 0,producerLastReadVersion:void 0,producerIndexOfThis:void 0,nextProducerIndex:0,liveConsumerNode:void 0,liveConsumerIndexOfThis:void 0,consumerAllowSignalWrites:!1,consumerIsAlwaysLive:!1,producerMustRecompute:()=>!1,producerRecomputeValue:()=>{},consumerMarkedDirty:()=>{},consumerOnSignalRead:()=>{}};function ol(n){if(Do)throw new Error("");if(At===null)return;At.consumerOnSignalRead(n);let e=At.nextProducerIndex++;if(Ro(At),e<At.producerNode.length&&At.producerNode[e]!==n&&Ps(At)){let t=At.producerNode[e];Po(t,At.producerIndexOfThis[e])}At.producerNode[e]!==n&&(At.producerNode[e]=n,At.producerIndexOfThis[e]=Ps(At)?Lf(n,At,e):0),At.producerLastReadVersion[e]=n.version}function Ey(){To++}function Rf(n){if(!(Ps(n)&&!n.dirty)&&!(!n.dirty&&n.lastCleanEpoch===To)){if(!n.producerMustRecompute(n)&&!cl(n)){n.dirty=!1,n.lastCleanEpoch=To;return}n.producerRecomputeValue(n),n.dirty=!1,n.lastCleanEpoch=To}}function Nf(n){if(n.liveConsumerNode===void 0)return;let e=Do;Do=!0;try{for(let t of n.liveConsumerNode)t.dirty||Sy(t)}finally{Do=e}}function Of(){return At?.consumerAllowSignalWrites!==!1}function Sy(n){n.dirty=!0,Nf(n),n.consumerMarkedDirty?.(n)}function Io(n){return n&&(n.nextProducerIndex=0),$e(n)}function al(n,e){if($e(e),!(!n||n.producerNode===void 0||n.producerIndexOfThis===void 0||n.producerLastReadVersion===void 0)){if(Ps(n))for(let t=n.nextProducerIndex;t<n.producerNode.length;t++)Po(n.producerNode[t],n.producerIndexOfThis[t]);for(;n.producerNode.length>n.nextProducerIndex;)n.producerNode.pop(),n.producerLastReadVersion.pop(),n.producerIndexOfThis.pop()}}function cl(n){Ro(n);for(let e=0;e<n.producerNode.length;e++){let t=n.producerNode[e],i=n.producerLastReadVersion[e];if(i!==t.version||(Rf(t),i!==t.version))return!0}return!1}function ll(n){if(Ro(n),Ps(n))for(let e=0;e<n.producerNode.length;e++)Po(n.producerNode[e],n.producerIndexOfThis[e]);n.producerNode.length=n.producerLastReadVersion.length=n.producerIndexOfThis.length=0,n.liveConsumerNode&&(n.liveConsumerNode.length=n.liveConsumerIndexOfThis.length=0)}function Lf(n,e,t){if(Ff(n),n.liveConsumerNode.length===0&&kf(n))for(let i=0;i<n.producerNode.length;i++)n.producerIndexOfThis[i]=Lf(n.producerNode[i],n,i);return n.liveConsumerIndexOfThis.push(t),n.liveConsumerNode.push(e)-1}function Po(n,e){if(Ff(n),n.liveConsumerNode.length===1&&kf(n))for(let i=0;i<n.producerNode.length;i++)Po(n.producerNode[i],n.producerIndexOfThis[i]);let t=n.liveConsumerNode.length-1;if(n.liveConsumerNode[e]=n.liveConsumerNode[t],n.liveConsumerIndexOfThis[e]=n.liveConsumerIndexOfThis[t],n.liveConsumerNode.length--,n.liveConsumerIndexOfThis.length--,e<n.liveConsumerNode.length){let i=n.liveConsumerIndexOfThis[e],r=n.liveConsumerNode[e];Ro(r),r.producerIndexOfThis[i]=e}}function Ps(n){return n.consumerIsAlwaysLive||(n?.liveConsumerNode?.length??0)>0}function Ro(n){n.producerNode??=[],n.producerIndexOfThis??=[],n.producerLastReadVersion??=[]}function Ff(n){n.liveConsumerNode??=[],n.liveConsumerIndexOfThis??=[]}function kf(n){return n.producerNode!==void 0}function ul(n){let e=Object.create(Cy);e.computation=n;let t=()=>{if(Rf(e),ol(e),e.value===Ao)throw e.error;return e.value};return t[Bn]=e,t}var rl=Symbol("UNSET"),sl=Symbol("COMPUTING"),Ao=Symbol("ERRORED"),Cy=St(_t({},Rs),{value:rl,dirty:!0,error:null,equal:If,producerMustRecompute(n){return n.value===rl||n.value===sl},producerRecomputeValue(n){if(n.value===sl)throw new Error("Detected cycle in computations.");let e=n.value;n.value=sl;let t=Io(n),i;try{i=n.computation()}catch(r){i=Ao,n.error=r}finally{al(n,t)}if(e!==rl&&e!==Ao&&i!==Ao&&n.equal(e,i)){n.value=e;return}n.value=i,n.version++}});function Dy(){throw new Error}var Uf=Dy;function Vf(){Uf()}function Bf(n){Uf=n}var Ty=null;function zf(n){let e=Object.create(Gf);e.value=n;let t=()=>(ol(e),e.value);return t[Bn]=e,t}function dl(n,e){Of()||Vf(),n.equal(n.value,e)||(n.value=e,Ay(n))}function Hf(n,e){Of()||Vf(),dl(n,e(n.value))}var Gf=St(_t({},Rs),{equal:If,value:void 0});function Ay(n){n.version++,Ey(),Nf(n),Ty?.()}function Qt(n){return typeof n=="function"}function No(n){let t=n(i=>{Error.call(i),i.stack=new Error().stack});return t.prototype=Object.create(Error.prototype),t.prototype.constructor=t,t}var Oo=No(n=>function(t){n(this),this.message=t?`${t.length} errors occurred during unsubscription:
${t.map((i,r)=>`${r+1}) ${i.toString()}`).join(`
  `)}`:"",this.name="UnsubscriptionError",this.errors=t});function Ns(n,e){if(n){let t=n.indexOf(e);0<=t&&n.splice(t,1)}}var Zt=class n{constructor(e){this.initialTeardown=e,this.closed=!1,this._parentage=null,this._finalizers=null}unsubscribe(){let e;if(!this.closed){this.closed=!0;let{_parentage:t}=this;if(t)if(this._parentage=null,Array.isArray(t))for(let s of t)s.remove(this);else t.remove(this);let{initialTeardown:i}=this;if(Qt(i))try{i()}catch(s){e=s instanceof Oo?s.errors:[s]}let{_finalizers:r}=this;if(r){this._finalizers=null;for(let s of r)try{Wf(s)}catch(o){e=e??[],o instanceof Oo?e=[...e,...o.errors]:e.push(o)}}if(e)throw new Oo(e)}}add(e){var t;if(e&&e!==this)if(this.closed)Wf(e);else{if(e instanceof n){if(e.closed||e._hasParent(this))return;e._addParent(this)}(this._finalizers=(t=this._finalizers)!==null&&t!==void 0?t:[]).push(e)}}_hasParent(e){let{_parentage:t}=this;return t===e||Array.isArray(t)&&t.includes(e)}_addParent(e){let{_parentage:t}=this;this._parentage=Array.isArray(t)?(t.push(e),t):t?[t,e]:e}_removeParent(e){let{_parentage:t}=this;t===e?this._parentage=null:Array.isArray(t)&&Ns(t,e)}remove(e){let{_finalizers:t}=this;t&&Ns(t,e),e instanceof n&&e._removeParent(this)}};Zt.EMPTY=(()=>{let n=new Zt;return n.closed=!0,n})();var hl=Zt.EMPTY;function Lo(n){return n instanceof Zt||n&&"closed"in n&&Qt(n.remove)&&Qt(n.add)&&Qt(n.unsubscribe)}function Wf(n){Qt(n)?n():n.unsubscribe()}var wn={onUnhandledError:null,onStoppedNotification:null,Promise:void 0,useDeprecatedSynchronousErrorHandling:!1,useDeprecatedNextContext:!1};var Dr={setTimeout(n,e,...t){let{delegate:i}=Dr;return i?.setTimeout?i.setTimeout(n,e,...t):setTimeout(n,e,...t)},clearTimeout(n){let{delegate:e}=Dr;return(e?.clearTimeout||clearTimeout)(n)},delegate:void 0};function jf(n){Dr.setTimeout(()=>{let{onUnhandledError:e}=wn;if(e)e(n);else throw n})}function fl(){}var $f=pl("C",void 0,void 0);function qf(n){return pl("E",void 0,n)}function Xf(n){return pl("N",n,void 0)}function pl(n,e,t){return{kind:n,value:e,error:t}}var ji=null;function Tr(n){if(wn.useDeprecatedSynchronousErrorHandling){let e=!ji;if(e&&(ji={errorThrown:!1,error:null}),n(),e){let{errorThrown:t,error:i}=ji;if(ji=null,t)throw i}}else n()}function Yf(n){wn.useDeprecatedSynchronousErrorHandling&&ji&&(ji.errorThrown=!0,ji.error=n)}var $i=class extends Zt{constructor(e){super(),this.isStopped=!1,e?(this.destination=e,Lo(e)&&e.add(this)):this.destination=Ry}static create(e,t,i){return new Ar(e,t,i)}next(e){this.isStopped?gl(Xf(e),this):this._next(e)}error(e){this.isStopped?gl(qf(e),this):(this.isStopped=!0,this._error(e))}complete(){this.isStopped?gl($f,this):(this.isStopped=!0,this._complete())}unsubscribe(){this.closed||(this.isStopped=!0,super.unsubscribe(),this.destination=null)}_next(e){this.destination.next(e)}_error(e){try{this.destination.error(e)}finally{this.unsubscribe()}}_complete(){try{this.destination.complete()}finally{this.unsubscribe()}}},Iy=Function.prototype.bind;function ml(n,e){return Iy.call(n,e)}var vl=class{constructor(e){this.partialObserver=e}next(e){let{partialObserver:t}=this;if(t.next)try{t.next(e)}catch(i){Fo(i)}}error(e){let{partialObserver:t}=this;if(t.error)try{t.error(e)}catch(i){Fo(i)}else Fo(e)}complete(){let{partialObserver:e}=this;if(e.complete)try{e.complete()}catch(t){Fo(t)}}},Ar=class extends $i{constructor(e,t,i){super();let r;if(Qt(e)||!e)r={next:e??void 0,error:t??void 0,complete:i??void 0};else{let s;this&&wn.useDeprecatedNextContext?(s=Object.create(e),s.unsubscribe=()=>this.unsubscribe(),r={next:e.next&&ml(e.next,s),error:e.error&&ml(e.error,s),complete:e.complete&&ml(e.complete,s)}):r=e}this.destination=new vl(r)}};function Fo(n){wn.useDeprecatedSynchronousErrorHandling?Yf(n):jf(n)}function Py(n){throw n}function gl(n,e){let{onStoppedNotification:t}=wn;t&&Dr.setTimeout(()=>t(n,e))}var Ry={closed:!0,next:fl,error:Py,complete:fl};var Zf=typeof Symbol=="function"&&Symbol.observable||"@@observable";function Jf(n){return n}function Kf(n){return n.length===0?Jf:n.length===1?n[0]:function(t){return n.reduce((i,r)=>r(i),t)}}var yl=(()=>{class n{constructor(t){t&&(this._subscribe=t)}lift(t){let i=new n;return i.source=this,i.operator=t,i}subscribe(t,i,r){let s=Oy(t)?t:new Ar(t,i,r);return Tr(()=>{let{operator:o,source:a}=this;s.add(o?o.call(s,a):a?this._subscribe(s):this._trySubscribe(s))}),s}_trySubscribe(t){try{return this._subscribe(t)}catch(i){t.error(i)}}forEach(t,i){return i=Qf(i),new i((r,s)=>{let o=new Ar({next:a=>{try{t(a)}catch(c){s(c),o.unsubscribe()}},error:s,complete:r});this.subscribe(o)})}_subscribe(t){var i;return(i=this.source)===null||i===void 0?void 0:i.subscribe(t)}[Zf](){return this}pipe(...t){return Kf(t)(this)}toPromise(t){return t=Qf(t),new t((i,r)=>{let s;this.subscribe(o=>s=o,o=>r(o),()=>i(s))})}}return n.create=e=>new n(e),n})();function Qf(n){var e;return(e=n??wn.Promise)!==null&&e!==void 0?e:Promise}function Ny(n){return n&&Qt(n.next)&&Qt(n.error)&&Qt(n.complete)}function Oy(n){return n&&n instanceof $i||Ny(n)&&Lo(n)}function Ly(n){return Qt(n?.lift)}function ep(n){return e=>{if(Ly(e))return e.lift(function(t){try{return n(t,this)}catch(i){this.error(i)}});throw new TypeError("Unable to lift unknown Observable type")}}function tp(n,e,t,i,r){return new _l(n,e,t,i,r)}var _l=class extends $i{constructor(e,t,i,r,s,o){super(e),this.onFinalize=s,this.shouldUnsubscribe=o,this._next=t?function(a){try{t(a)}catch(c){e.error(c)}}:super._next,this._error=r?function(a){try{r(a)}catch(c){e.error(c)}finally{this.unsubscribe()}}:super._error,this._complete=i?function(){try{i()}catch(a){e.error(a)}finally{this.unsubscribe()}}:super._complete}unsubscribe(){var e;if(!this.shouldUnsubscribe||this.shouldUnsubscribe()){let{closed:t}=this;super.unsubscribe(),!t&&((e=this.onFinalize)===null||e===void 0||e.call(this))}}};var np=No(n=>function(){n(this),this.name="ObjectUnsubscribedError",this.message="object unsubscribed"});var bi=(()=>{class n extends yl{constructor(){super(),this.closed=!1,this.currentObservers=null,this.observers=[],this.isStopped=!1,this.hasError=!1,this.thrownError=null}lift(t){let i=new ko(this,this);return i.operator=t,i}_throwIfClosed(){if(this.closed)throw new np}next(t){Tr(()=>{if(this._throwIfClosed(),!this.isStopped){this.currentObservers||(this.currentObservers=Array.from(this.observers));for(let i of this.currentObservers)i.next(t)}})}error(t){Tr(()=>{if(this._throwIfClosed(),!this.isStopped){this.hasError=this.isStopped=!0,this.thrownError=t;let{observers:i}=this;for(;i.length;)i.shift().error(t)}})}complete(){Tr(()=>{if(this._throwIfClosed(),!this.isStopped){this.isStopped=!0;let{observers:t}=this;for(;t.length;)t.shift().complete()}})}unsubscribe(){this.isStopped=this.closed=!0,this.observers=this.currentObservers=null}get observed(){var t;return((t=this.observers)===null||t===void 0?void 0:t.length)>0}_trySubscribe(t){return this._throwIfClosed(),super._trySubscribe(t)}_subscribe(t){return this._throwIfClosed(),this._checkFinalizedStatuses(t),this._innerSubscribe(t)}_innerSubscribe(t){let{hasError:i,isStopped:r,observers:s}=this;return i||r?hl:(this.currentObservers=null,s.push(t),new Zt(()=>{this.currentObservers=null,Ns(s,t)}))}_checkFinalizedStatuses(t){let{hasError:i,thrownError:r,isStopped:s}=this;i?t.error(r):s&&t.complete()}asObservable(){let t=new yl;return t.source=this,t}}return n.create=(e,t)=>new ko(e,t),n})(),ko=class extends bi{constructor(e,t){super(),this.destination=e,this.source=t}next(e){var t,i;(i=(t=this.destination)===null||t===void 0?void 0:t.next)===null||i===void 0||i.call(t,e)}error(e){var t,i;(i=(t=this.destination)===null||t===void 0?void 0:t.error)===null||i===void 0||i.call(t,e)}complete(){var e,t;(t=(e=this.destination)===null||e===void 0?void 0:e.complete)===null||t===void 0||t.call(e)}_subscribe(e){var t,i;return(i=(t=this.source)===null||t===void 0?void 0:t.subscribe(e))!==null&&i!==void 0?i:hl}};var Os=class extends bi{constructor(e){super(),this._value=e}get value(){return this.getValue()}_subscribe(e){let t=super._subscribe(e);return!t.closed&&e.next(this._value),t}getValue(){let{hasError:e,thrownError:t,_value:i}=this;if(e)throw t;return this._throwIfClosed(),i}next(e){super.next(this._value=e)}};function xl(n,e){return ep((t,i)=>{let r=0;t.subscribe(tp(i,s=>{i.next(n.call(e,s,r++))}))})}var Wp="https://g.co/ng/security#xss",je=class extends Error{constructor(e,t){super(Au(e,t)),this.code=e}};function Au(n,e){return`${`NG0${Math.abs(n)}`}${e?": "+e:""}`}function ma(n){return{toString:n}.toString()}var Uo="__parameters__";function Fy(n){return function(...t){if(n){let i=n(...t);for(let r in i)this[r]=i[r]}}}function jp(n,e,t){return ma(()=>{let i=Fy(e);function r(...s){if(this instanceof r)return i.apply(this,s),this;let o=new r(...s);return a.annotation=o,a;function a(c,l,u){let d=c.hasOwnProperty(Uo)?c[Uo]:Object.defineProperty(c,Uo,{value:[]})[Uo];for(;d.length<=u;)d.push(null);return(d[u]=d[u]||[]).push(o),c}}return t&&(r.prototype=Object.create(t.prototype)),r.prototype.ngMetadataName=n,r.annotationCls=r,r})}function ut(n){for(let e in n)if(n[e]===ut)return e;throw Error("Could not find renamed property on target object.")}function ln(n){if(typeof n=="string")return n;if(Array.isArray(n))return"["+n.map(ln).join(", ")+"]";if(n==null)return""+n;if(n.overriddenName)return`${n.overriddenName}`;if(n.name)return`${n.name}`;let e=n.toString();if(e==null)return""+e;let t=e.indexOf(`
`);return t===-1?e:e.substring(0,t)}function ip(n,e){return n==null||n===""?e===null?"":e:e==null||e===""?n:n+" "+e}var ky=ut({__forward_ref__:ut});function Iu(n){return n.__forward_ref__=Iu,n.toString=function(){return ln(this())},n}function Sn(n){return Uy(n)?n():n}function Uy(n){return typeof n=="function"&&n.hasOwnProperty(ky)&&n.__forward_ref__===Iu}function pt(n){return{token:n.token,providedIn:n.providedIn||null,factory:n.factory,value:void 0}}function $r(n){return{providers:n.providers||[],imports:n.imports||[]}}function Pu(n){return rp(n,$p)||rp(n,qp)}function rp(n,e){return n.hasOwnProperty(e)?n[e]:null}function Vy(n){let e=n&&(n[$p]||n[qp]);return e||null}function sp(n){return n&&(n.hasOwnProperty(op)||n.hasOwnProperty(By))?n[op]:null}var $p=ut({\u0275prov:ut}),op=ut({\u0275inj:ut}),qp=ut({ngInjectableDef:ut}),By=ut({ngInjectorDef:ut}),Je=class{constructor(e,t){this._desc=e,this.ngMetadataName="InjectionToken",this.\u0275prov=void 0,typeof t=="number"?this.__NG_ELEMENT_ID__=t:t!==void 0&&(this.\u0275prov=pt({token:this,providedIn:t.providedIn||"root",factory:t.factory}))}get multi(){return this}toString(){return`InjectionToken ${this._desc}`}};function Xp(n){return n&&!!n.\u0275providers}var zy=ut({\u0275cmp:ut}),Hy=ut({\u0275dir:ut}),Gy=ut({\u0275pipe:ut});var ap=ut({\u0275fac:ut}),ks=ut({__NG_ELEMENT_ID__:ut}),cp=ut({__NG_ENV_ID__:ut});function ga(n){return typeof n=="string"?n:n==null?"":String(n)}function Wy(n){return typeof n=="function"?n.name||n.toString():typeof n=="object"&&n!=null&&typeof n.type=="function"?n.type.name||n.type.toString():ga(n)}function jy(n,e){let t=e?`. Dependency path: ${e.join(" > ")} > ${n}`:"";throw new je(-200,n)}function Ru(n,e){throw new je(-201,!1)}var We=function(n){return n[n.Default=0]="Default",n[n.Host=1]="Host",n[n.Self=2]="Self",n[n.SkipSelf=4]="SkipSelf",n[n.Optional=8]="Optional",n}(We||{}),Nl;function Yp(){return Nl}function zn(n){let e=Nl;return Nl=n,e}function Zp(n,e,t){let i=Pu(n);if(i&&i.providedIn=="root")return i.value===void 0?i.value=i.factory():i.value;if(t&We.Optional)return null;if(e!==void 0)return e;Ru(n,"Injector")}var $y={},Us=$y,Ol="__NG_DI_FLAG__",qo="ngTempTokenPath",qy="ngTokenPath",Xy=/\n/gm,Yy="\u0275",lp="__source",Or;function Zy(){return Or}function Ir(n){let e=Or;return Or=n,e}function Jy(n,e=We.Default){if(Or===void 0)throw new je(-203,!1);return Or===null?Zp(n,void 0,e):Or.get(n,e&We.Optional?null:void 0,e)}function at(n,e=We.Default){return(Yp()||Jy)(Sn(n),e)}function ke(n,e=We.Default){return at(n,va(e))}function va(n){return typeof n>"u"||typeof n=="number"?n:0|(n.optional&&8)|(n.host&&1)|(n.self&&2)|(n.skipSelf&&4)}function Ll(n){let e=[];for(let t=0;t<n.length;t++){let i=Sn(n[t]);if(Array.isArray(i)){if(i.length===0)throw new je(900,!1);let r,s=We.Default;for(let o=0;o<i.length;o++){let a=i[o],c=Ky(a);typeof c=="number"?c===-1?r=a.token:s|=c:r=a}e.push(at(r,s))}else e.push(at(i))}return e}function Jp(n,e){return n[Ol]=e,n.prototype[Ol]=e,n}function Ky(n){return n[Ol]}function Qy(n,e,t,i){let r=n[qo];throw e[lp]&&r.unshift(e[lp]),n.message=e_(`
`+n.message,r,t,i),n[qy]=r,n[qo]=null,n}function e_(n,e,t,i=null){n=n&&n.charAt(0)===`
`&&n.charAt(1)==Yy?n.slice(2):n;let r=ln(e);if(Array.isArray(e))r=e.map(ln).join(" -> ");else if(typeof e=="object"){let s=[];for(let o in e)if(e.hasOwnProperty(o)){let a=e[o];s.push(o+":"+(typeof a=="string"?JSON.stringify(a):ln(a)))}r=`{${s.join(", ")}}`}return`${t}${i?"("+i+")":""}[${r}]: ${n.replace(Xy,`
  `)}`}var Kp=Jp(jp("Optional"),8);var t_=Jp(jp("SkipSelf"),4);function Vs(n,e){let t=n.hasOwnProperty(ap);return t?n[ap]:null}function n_(n,e,t){if(n.length!==e.length)return!1;for(let i=0;i<n.length;i++){let r=n[i],s=e[i];if(t&&(r=t(r),s=t(s)),s!==r)return!1}return!0}function i_(n){return n.flat(Number.POSITIVE_INFINITY)}function Nu(n,e){n.forEach(t=>Array.isArray(t)?Nu(t,e):e(t))}function Qp(n,e,t){e>=n.length?n.push(t):n.splice(e,0,t)}function Xo(n,e){return e>=n.length-1?n.pop():n.splice(e,1)[0]}function r_(n,e,t,i){let r=n.length;if(r==e)n.push(t,i);else if(r===1)n.push(i,n[0]),n[0]=t;else{for(r--,n.push(n[r-1],n[r]);r>e;){let s=r-2;n[r]=n[s],r--}n[e]=t,n[e+1]=i}}function s_(n,e,t){let i=Js(n,e);return i>=0?n[i|1]=t:(i=~i,r_(n,i,e,t)),i}function Ml(n,e){let t=Js(n,e);if(t>=0)return n[t|1]}function Js(n,e){return o_(n,e,1)}function o_(n,e,t){let i=0,r=n.length>>t;for(;r!==i;){let s=i+(r-i>>1),o=n[s<<t];if(e===o)return s<<t;o>e?r=s:i=s+1}return~(r<<t)}var Bs={},mn=[],zs=new Je(""),em=new Je("",-1),tm=new Je(""),Yo=class{get(e,t=Us){if(t===Us){let i=new Error(`NullInjectorError: No provider for ${ln(e)}!`);throw i.name="NullInjectorError",i}return t}},nm=function(n){return n[n.OnPush=0]="OnPush",n[n.Default=1]="Default",n}(nm||{}),Wn=function(n){return n[n.Emulated=0]="Emulated",n[n.None=2]="None",n[n.ShadowDom=3]="ShadowDom",n}(Wn||{}),Ei=function(n){return n[n.None=0]="None",n[n.SignalBased=1]="SignalBased",n[n.HasDecoratorInputTransform=2]="HasDecoratorInputTransform",n}(Ei||{});function a_(n,e,t){let i=n.length;for(;;){let r=n.indexOf(e,t);if(r===-1)return r;if(r===0||n.charCodeAt(r-1)<=32){let s=e.length;if(r+s===i||n.charCodeAt(r+s)<=32)return r}t=r+1}}function Fl(n,e,t){let i=0;for(;i<t.length;){let r=t[i];if(typeof r=="number"){if(r!==0)break;i++;let s=t[i++],o=t[i++],a=t[i++];n.setAttribute(e,o,a,s)}else{let s=r,o=t[++i];l_(s)?n.setProperty(e,s,o):n.setAttribute(e,s,o),i++}}return i}function c_(n){return n===3||n===4||n===6}function l_(n){return n.charCodeAt(0)===64}function Ou(n,e){if(!(e===null||e.length===0))if(n===null||n.length===0)n=e.slice();else{let t=-1;for(let i=0;i<e.length;i++){let r=e[i];typeof r=="number"?t=r:t===0||(t===-1||t===2?up(n,t,r,null,e[++i]):up(n,t,r,null,null))}}return n}function up(n,e,t,i,r){let s=0,o=n.length;if(e===-1)o=-1;else for(;s<n.length;){let a=n[s++];if(typeof a=="number"){if(a===e){o=-1;break}else if(a>e){o=s-1;break}}}for(;s<n.length;){let a=n[s];if(typeof a=="number")break;if(a===t){if(i===null){r!==null&&(n[s+1]=r);return}else if(i===n[s+1]){n[s+2]=r;return}}s++,i!==null&&s++,r!==null&&s++}o!==-1&&(n.splice(o,0,e),s=o+1),n.splice(s++,0,t),i!==null&&n.splice(s++,0,i),r!==null&&n.splice(s++,0,r)}var im="ng-template";function u_(n,e,t,i){let r=0;if(i){for(;r<e.length&&typeof e[r]=="string";r+=2)if(e[r]==="class"&&a_(e[r+1].toLowerCase(),t,0)!==-1)return!0}else if(Lu(n))return!1;if(r=e.indexOf(1,r),r>-1){let s;for(;++r<e.length&&typeof(s=e[r])=="string";)if(s.toLowerCase()===t)return!0}return!1}function Lu(n){return n.type===4&&n.value!==im}function d_(n,e,t){let i=n.type===4&&!t?im:n.value;return e===i}function h_(n,e,t){let i=4,r=n.attrs,s=r!==null?m_(r):0,o=!1;for(let a=0;a<e.length;a++){let c=e[a];if(typeof c=="number"){if(!o&&!En(i)&&!En(c))return!1;if(o&&En(c))continue;o=!1,i=c|i&1;continue}if(!o)if(i&4){if(i=2|i&1,c!==""&&!d_(n,c,t)||c===""&&e.length===1){if(En(i))return!1;o=!0}}else if(i&8){if(r===null||!u_(n,r,c,t)){if(En(i))return!1;o=!0}}else{let l=e[++a],u=f_(c,r,Lu(n),t);if(u===-1){if(En(i))return!1;o=!0;continue}if(l!==""){let d;if(u>s?d="":d=r[u+1].toLowerCase(),i&2&&l!==d){if(En(i))return!1;o=!0}}}}return En(i)||o}function En(n){return(n&1)===0}function f_(n,e,t,i){if(e===null)return-1;let r=0;if(i||!t){let s=!1;for(;r<e.length;){let o=e[r];if(o===n)return r;if(o===3||o===6)s=!0;else if(o===1||o===2){let a=e[++r];for(;typeof a=="string";)a=e[++r];continue}else{if(o===4)break;if(o===0){r+=4;continue}}r+=s?1:2}return-1}else return g_(e,n)}function p_(n,e,t=!1){for(let i=0;i<e.length;i++)if(h_(n,e[i],t))return!0;return!1}function m_(n){for(let e=0;e<n.length;e++){let t=n[e];if(c_(t))return e}return n.length}function g_(n,e){let t=n.indexOf(4);if(t>-1)for(t++;t<n.length;){let i=n[t];if(typeof i=="number")return-1;if(i===e)return t;t++}return-1}function dp(n,e){return n?":not("+e.trim()+")":e}function v_(n){let e=n[0],t=1,i=2,r="",s=!1;for(;t<n.length;){let o=n[t];if(typeof o=="string")if(i&2){let a=n[++t];r+="["+o+(a.length>0?'="'+a+'"':"")+"]"}else i&8?r+="."+o:i&4&&(r+=" "+o);else r!==""&&!En(o)&&(e+=dp(s,r),r=""),i=o,s=s||!En(i);t++}return r!==""&&(e+=dp(s,r)),e}function y_(n){return n.map(v_).join(",")}function __(n){let e=[],t=[],i=1,r=2;for(;i<n.length;){let s=n[i];if(typeof s=="string")r===2?s!==""&&e.push(s,n[++i]):r===8&&t.push(s);else{if(!En(r))break;r=s}i++}return{attrs:e,classes:t}}function Ct(n){return ma(()=>{let e=om(n),t=St(_t({},e),{decls:n.decls,vars:n.vars,template:n.template,consts:n.consts||null,ngContentSelectors:n.ngContentSelectors,onPush:n.changeDetection===nm.OnPush,directiveDefs:null,pipeDefs:null,dependencies:e.standalone&&n.dependencies||null,getStandaloneInjector:null,signals:n.signals??!1,data:n.data||{},encapsulation:n.encapsulation||Wn.Emulated,styles:n.styles||mn,_:null,schemas:n.schemas||null,tView:null,id:""});am(t);let i=n.dependencies;return t.directiveDefs=fp(i,!1),t.pipeDefs=fp(i,!0),t.id=w_(t),t})}function x_(n){return Fr(n)||rm(n)}function M_(n){return n!==null}function qr(n){return ma(()=>({type:n.type,bootstrap:n.bootstrap||mn,declarations:n.declarations||mn,imports:n.imports||mn,exports:n.exports||mn,transitiveCompileScopes:null,schemas:n.schemas||null,id:n.id||null}))}function hp(n,e){if(n==null)return Bs;let t={};for(let i in n)if(n.hasOwnProperty(i)){let r=n[i],s,o,a=Ei.None;Array.isArray(r)?(a=r[0],s=r[1],o=r[2]??s):(s=r,o=r),e?(t[s]=a!==Ei.None?[i,a]:i,e[s]=o):t[s]=i}return t}function ya(n){return ma(()=>{let e=om(n);return am(e),e})}function Fr(n){return n[zy]||null}function rm(n){return n[Hy]||null}function sm(n){return n[Gy]||null}function b_(n){let e=Fr(n)||rm(n)||sm(n);return e!==null?e.standalone:!1}function om(n){let e={};return{type:n.type,providersResolver:null,factory:null,hostBindings:n.hostBindings||null,hostVars:n.hostVars||0,hostAttrs:n.hostAttrs||null,contentQueries:n.contentQueries||null,declaredInputs:e,inputTransforms:null,inputConfig:n.inputs||Bs,exportAs:n.exportAs||null,standalone:n.standalone===!0,signals:n.signals===!0,selectors:n.selectors||mn,viewQuery:n.viewQuery||null,features:n.features||null,setInput:null,findHostDirectiveDefs:null,hostDirectives:null,inputs:hp(n.inputs,e),outputs:hp(n.outputs),debugInfo:null}}function am(n){n.features?.forEach(e=>e(n))}function fp(n,e){if(!n)return null;let t=e?sm:x_;return()=>(typeof n=="function"?n():n).map(i=>t(i)).filter(M_)}function w_(n){let e=0,t=[n.selectors,n.ngContentSelectors,n.hostVars,n.hostAttrs,n.consts,n.vars,n.decls,n.encapsulation,n.standalone,n.signals,n.exportAs,JSON.stringify(n.inputs),JSON.stringify(n.outputs),Object.getOwnPropertyNames(n.type.prototype),!!n.contentQueries,!!n.viewQuery].join("|");for(let r of t)e=Math.imul(31,e)+r.charCodeAt(0)<<0;return e+=2147483648,"c"+e}function cm(n){return{\u0275providers:n}}function E_(...n){return{\u0275providers:lm(!0,n),\u0275fromNgModule:!0}}function lm(n,...e){let t=[],i=new Set,r,s=o=>{t.push(o)};return Nu(e,o=>{let a=o;kl(a,s,[],i)&&(r||=[],r.push(a))}),r!==void 0&&um(r,s),t}function um(n,e){for(let t=0;t<n.length;t++){let{ngModule:i,providers:r}=n[t];Fu(r,s=>{e(s,i)})}}function kl(n,e,t,i){if(n=Sn(n),!n)return!1;let r=null,s=sp(n),o=!s&&Fr(n);if(!s&&!o){let c=n.ngModule;if(s=sp(c),s)r=c;else return!1}else{if(o&&!o.standalone)return!1;r=n}let a=i.has(r);if(o){if(a)return!1;if(i.add(r),o.dependencies){let c=typeof o.dependencies=="function"?o.dependencies():o.dependencies;for(let l of c)kl(l,e,t,i)}}else if(s){if(s.imports!=null&&!a){i.add(r);let l;try{Nu(s.imports,u=>{kl(u,e,t,i)&&(l||=[],l.push(u))})}finally{}l!==void 0&&um(l,e)}if(!a){let l=Vs(r)||(()=>new r);e({provide:r,useFactory:l,deps:mn},r),e({provide:tm,useValue:r,multi:!0},r),e({provide:zs,useValue:()=>at(r),multi:!0},r)}let c=s.providers;if(c!=null&&!a){let l=n;Fu(c,u=>{e(u,l)})}}else return!1;return r!==n&&n.providers!==void 0}function Fu(n,e){for(let t of n)Xp(t)&&(t=t.\u0275providers),Array.isArray(t)?Fu(t,e):e(t)}var S_=ut({provide:String,useValue:ut});function dm(n){return n!==null&&typeof n=="object"&&S_ in n}function C_(n){return!!(n&&n.useExisting)}function D_(n){return!!(n&&n.useFactory)}function Ul(n){return typeof n=="function"}var _a=new Je(""),zo={},T_={},bl;function ku(){return bl===void 0&&(bl=new Yo),bl}var Si=class{},Zo=class extends Si{get destroyed(){return this._destroyed}constructor(e,t,i,r){super(),this.parent=t,this.source=i,this.scopes=r,this.records=new Map,this._ngOnDestroyHooks=new Set,this._onDestroyHooks=[],this._destroyed=!1,Bl(e,o=>this.processProvider(o)),this.records.set(em,Pr(void 0,this)),r.has("environment")&&this.records.set(Si,Pr(void 0,this));let s=this.records.get(_a);s!=null&&typeof s.value=="string"&&this.scopes.add(s.value),this.injectorDefTypes=new Set(this.get(tm,mn,We.Self))}destroy(){this.assertNotDestroyed(),this._destroyed=!0;let e=$e(null);try{for(let i of this._ngOnDestroyHooks)i.ngOnDestroy();let t=this._onDestroyHooks;this._onDestroyHooks=[];for(let i of t)i()}finally{this.records.clear(),this._ngOnDestroyHooks.clear(),this.injectorDefTypes.clear(),$e(e)}}onDestroy(e){return this.assertNotDestroyed(),this._onDestroyHooks.push(e),()=>this.removeOnDestroy(e)}runInContext(e){this.assertNotDestroyed();let t=Ir(this),i=zn(void 0),r;try{return e()}finally{Ir(t),zn(i)}}get(e,t=Us,i=We.Default){if(this.assertNotDestroyed(),e.hasOwnProperty(cp))return e[cp](this);i=va(i);let r,s=Ir(this),o=zn(void 0);try{if(!(i&We.SkipSelf)){let c=this.records.get(e);if(c===void 0){let l=O_(e)&&Pu(e);l&&this.injectableDefInScope(l)?c=Pr(Vl(e),zo):c=null,this.records.set(e,c)}if(c!=null)return this.hydrate(e,c)}let a=i&We.Self?ku():this.parent;return t=i&We.Optional&&t===Us?null:t,a.get(e,t)}catch(a){if(a.name==="NullInjectorError"){if((a[qo]=a[qo]||[]).unshift(ln(e)),s)throw a;return Qy(a,e,"R3InjectorError",this.source)}else throw a}finally{zn(o),Ir(s)}}resolveInjectorInitializers(){let e=$e(null),t=Ir(this),i=zn(void 0),r;try{let s=this.get(zs,mn,We.Self);for(let o of s)o()}finally{Ir(t),zn(i),$e(e)}}toString(){let e=[],t=this.records;for(let i of t.keys())e.push(ln(i));return`R3Injector[${e.join(", ")}]`}assertNotDestroyed(){if(this._destroyed)throw new je(205,!1)}processProvider(e){e=Sn(e);let t=Ul(e)?e:Sn(e&&e.provide),i=I_(e);if(!Ul(e)&&e.multi===!0){let r=this.records.get(t);r||(r=Pr(void 0,zo,!0),r.factory=()=>Ll(r.multi),this.records.set(t,r)),t=e,r.multi.push(e)}this.records.set(t,i)}hydrate(e,t){let i=$e(null);try{return t.value===zo&&(t.value=T_,t.value=t.factory()),typeof t.value=="object"&&t.value&&N_(t.value)&&this._ngOnDestroyHooks.add(t.value),t.value}finally{$e(i)}}injectableDefInScope(e){if(!e.providedIn)return!1;let t=Sn(e.providedIn);return typeof t=="string"?t==="any"||this.scopes.has(t):this.injectorDefTypes.has(t)}removeOnDestroy(e){let t=this._onDestroyHooks.indexOf(e);t!==-1&&this._onDestroyHooks.splice(t,1)}};function Vl(n){let e=Pu(n),t=e!==null?e.factory:Vs(n);if(t!==null)return t;if(n instanceof Je)throw new je(204,!1);if(n instanceof Function)return A_(n);throw new je(204,!1)}function A_(n){if(n.length>0)throw new je(204,!1);let t=Vy(n);return t!==null?()=>t.factory(n):()=>new n}function I_(n){if(dm(n))return Pr(void 0,n.useValue);{let e=P_(n);return Pr(e,zo)}}function P_(n,e,t){let i;if(Ul(n)){let r=Sn(n);return Vs(r)||Vl(r)}else if(dm(n))i=()=>Sn(n.useValue);else if(D_(n))i=()=>n.useFactory(...Ll(n.deps||[]));else if(C_(n))i=()=>at(Sn(n.useExisting));else{let r=Sn(n&&(n.useClass||n.provide));if(R_(n))i=()=>new r(...Ll(n.deps));else return Vs(r)||Vl(r)}return i}function Pr(n,e,t=!1){return{factory:n,value:e,multi:t?[]:void 0}}function R_(n){return!!n.deps}function N_(n){return n!==null&&typeof n=="object"&&typeof n.ngOnDestroy=="function"}function O_(n){return typeof n=="function"||typeof n=="object"&&n instanceof Je}function Bl(n,e){for(let t of n)Array.isArray(t)?Bl(t,e):t&&Xp(t)?Bl(t.\u0275providers,e):e(t)}function L_(){return Yp()!==void 0||Zy()!=null}function F_(n){return typeof n=="function"}var oi=0,Ne=1,Ae=2,Gt=3,Dn=4,An=5,Hs=6,Jo=7,zt=8,kr=9,jn=10,Wt=11,Gs=12,pp=13,Xr=14,$n=15,Yi=16,Rr=17,ii=18,xa=19,hm=20,wi=21,wl=22,gn=23,Tn=25,fm=1;var Zi=7,Ko=8,Ur=9,Ht=10,Qo=function(n){return n[n.None=0]="None",n[n.HasTransplantedViews=2]="HasTransplantedViews",n}(Qo||{});function qi(n){return Array.isArray(n)&&typeof n[fm]=="object"}function ai(n){return Array.isArray(n)&&n[fm]===!0}function pm(n){return(n.flags&4)!==0}function Uu(n){return n.componentOffset>-1}function Vu(n){return(n.flags&1)===1}function Ks(n){return!!n.template}function zl(n){return(n[Ae]&512)!==0}var Hl=class{constructor(e,t,i){this.previousValue=e,this.currentValue=t,this.firstChange=i}isFirstChange(){return this.firstChange}};function mm(n,e,t,i){e!==null?e.applyValueToInputSignal(e,i):n[t]=i}function Bu(){return gm}function gm(n){return n.type.prototype.ngOnChanges&&(n.setInput=U_),k_}Bu.ngInherit=!0;function k_(){let n=ym(this),e=n?.current;if(e){let t=n.previous;if(t===Bs)n.previous=e;else for(let i in e)t[i]=e[i];n.current=null,this.ngOnChanges(e)}}function U_(n,e,t,i,r){let s=this.declaredInputs[i],o=ym(n)||V_(n,{previous:Bs,current:null}),a=o.current||(o.current={}),c=o.previous,l=c[s];a[s]=new Hl(l&&l.currentValue,t,c===Bs),mm(n,e,r,t)}var vm="__ngSimpleChanges__";function ym(n){return n[vm]||null}function V_(n,e){return n[vm]=e}var mp=null;var Hn=function(n,e,t){mp?.(n,e,t)},_m="svg",B_="math";function qn(n){for(;Array.isArray(n);)n=n[oi];return n}function xm(n,e){return qn(e[n])}function vn(n,e){return qn(e[n.index])}function zu(n,e){return n.data[e]}function Yr(n,e){let t=e[n];return qi(t)?t:t[oi]}function Hu(n){return(n[Ae]&128)===128}function z_(n){return ai(n[Gt])}function Vr(n,e){return e==null?null:n[e]}function Mm(n){n[Rr]=0}function bm(n){n[Ae]&1024||(n[Ae]|=1024,Hu(n)&&ba(n))}function H_(n,e){for(;n>0;)e=e[Xr],n--;return e}function Ma(n){return!!(n[Ae]&9216||n[gn]?.dirty)}function Gl(n){n[jn].changeDetectionScheduler?.notify(8),n[Ae]&64&&(n[Ae]|=1024),Ma(n)&&ba(n)}function ba(n){n[jn].changeDetectionScheduler?.notify(0);let e=Ji(n);for(;e!==null&&!(e[Ae]&8192||(e[Ae]|=8192,!Hu(e)));)e=Ji(e)}function wm(n,e){if((n[Ae]&256)===256)throw new je(911,!1);n[wi]===null&&(n[wi]=[]),n[wi].push(e)}function G_(n,e){if(n[wi]===null)return;let t=n[wi].indexOf(e);t!==-1&&n[wi].splice(t,1)}function Ji(n){let e=n[Gt];return ai(e)?e[Gt]:e}var Ue={lFrame:Pm(null),bindingsEnabled:!0,skipHydrationRootTNode:null};var Em=!1;function W_(){return Ue.lFrame.elementDepthCount}function j_(){Ue.lFrame.elementDepthCount++}function $_(){Ue.lFrame.elementDepthCount--}function Sm(){return Ue.bindingsEnabled}function q_(){return Ue.skipHydrationRootTNode!==null}function X_(n){return Ue.skipHydrationRootTNode===n}function Y_(){Ue.skipHydrationRootTNode=null}function ct(){return Ue.lFrame.lView}function In(){return Ue.lFrame.tView}function Pn(n){return Ue.lFrame.contextLView=n,n[zt]}function Rn(n){return Ue.lFrame.contextLView=null,n}function Xn(){let n=Cm();for(;n!==null&&n.type===64;)n=n.parent;return n}function Cm(){return Ue.lFrame.currentTNode}function Z_(){let n=Ue.lFrame,e=n.currentTNode;return n.isParent?e:e.parent}function Qs(n,e){let t=Ue.lFrame;t.currentTNode=n,t.isParent=e}function Dm(){return Ue.lFrame.isParent}function J_(){Ue.lFrame.isParent=!1}function Tm(){return Em}function gp(n){Em=n}function K_(){let n=Ue.lFrame,e=n.bindingRootIndex;return e===-1&&(e=n.bindingRootIndex=n.tView.bindingStartIndex),e}function Q_(n){return Ue.lFrame.bindingIndex=n}function eo(){return Ue.lFrame.bindingIndex++}function ex(n){let e=Ue.lFrame,t=e.bindingIndex;return e.bindingIndex=e.bindingIndex+n,t}function tx(){return Ue.lFrame.inI18n}function nx(n,e){let t=Ue.lFrame;t.bindingIndex=t.bindingRootIndex=n,Wl(e)}function ix(){return Ue.lFrame.currentDirectiveIndex}function Wl(n){Ue.lFrame.currentDirectiveIndex=n}function rx(n){let e=Ue.lFrame.currentDirectiveIndex;return e===-1?null:n[e]}function sx(){return Ue.lFrame.currentQueryIndex}function Gu(n){Ue.lFrame.currentQueryIndex=n}function ox(n){let e=n[Ne];return e.type===2?e.declTNode:e.type===1?n[An]:null}function Am(n,e,t){if(t&We.SkipSelf){let r=e,s=n;for(;r=r.parent,r===null&&!(t&We.Host);)if(r=ox(s),r===null||(s=s[Xr],r.type&10))break;if(r===null)return!1;e=r,n=s}let i=Ue.lFrame=Im();return i.currentTNode=e,i.lView=n,!0}function Wu(n){let e=Im(),t=n[Ne];Ue.lFrame=e,e.currentTNode=t.firstChild,e.lView=n,e.tView=t,e.contextLView=n,e.bindingIndex=t.bindingStartIndex,e.inI18n=!1}function Im(){let n=Ue.lFrame,e=n===null?null:n.child;return e===null?Pm(n):e}function Pm(n){let e={currentTNode:null,isParent:!0,lView:null,tView:null,selectedIndex:-1,contextLView:null,elementDepthCount:0,currentNamespace:null,currentDirectiveIndex:-1,bindingRootIndex:-1,bindingIndex:-1,currentQueryIndex:0,parent:n,child:null,inI18n:!1};return n!==null&&(n.child=e),e}function Rm(){let n=Ue.lFrame;return Ue.lFrame=n.parent,n.currentTNode=null,n.lView=null,n}var Nm=Rm;function ju(){let n=Rm();n.isParent=!0,n.tView=null,n.selectedIndex=-1,n.contextLView=null,n.elementDepthCount=0,n.currentDirectiveIndex=-1,n.currentNamespace=null,n.bindingRootIndex=-1,n.bindingIndex=-1,n.currentQueryIndex=0}function ax(n){return(Ue.lFrame.contextLView=H_(n,Ue.lFrame.contextLView))[zt]}function nr(){return Ue.lFrame.selectedIndex}function Ki(n){Ue.lFrame.selectedIndex=n}function Om(){let n=Ue.lFrame;return zu(n.tView,n.selectedIndex)}function ir(){Ue.lFrame.currentNamespace=_m}function Lm(){cx()}function cx(){Ue.lFrame.currentNamespace=null}function lx(){return Ue.lFrame.currentNamespace}var Fm=!0;function $u(){return Fm}function qu(n){Fm=n}function ux(n,e,t){let{ngOnChanges:i,ngOnInit:r,ngDoCheck:s}=e.type.prototype;if(i){let o=gm(e);(t.preOrderHooks??=[]).push(n,o),(t.preOrderCheckHooks??=[]).push(n,o)}r&&(t.preOrderHooks??=[]).push(0-n,r),s&&((t.preOrderHooks??=[]).push(n,s),(t.preOrderCheckHooks??=[]).push(n,s))}function Xu(n,e){for(let t=e.directiveStart,i=e.directiveEnd;t<i;t++){let s=n.data[t].type.prototype,{ngAfterContentInit:o,ngAfterContentChecked:a,ngAfterViewInit:c,ngAfterViewChecked:l,ngOnDestroy:u}=s;o&&(n.contentHooks??=[]).push(-t,o),a&&((n.contentHooks??=[]).push(t,a),(n.contentCheckHooks??=[]).push(t,a)),c&&(n.viewHooks??=[]).push(-t,c),l&&((n.viewHooks??=[]).push(t,l),(n.viewCheckHooks??=[]).push(t,l)),u!=null&&(n.destroyHooks??=[]).push(t,u)}}function Ho(n,e,t){km(n,e,3,t)}function Go(n,e,t,i){(n[Ae]&3)===t&&km(n,e,t,i)}function El(n,e){let t=n[Ae];(t&3)===e&&(t&=16383,t+=1,n[Ae]=t)}function km(n,e,t,i){let r=i!==void 0?n[Rr]&65535:0,s=i??-1,o=e.length-1,a=0;for(let c=r;c<o;c++)if(typeof e[c+1]=="number"){if(a=e[c],i!=null&&a>=i)break}else e[c]<0&&(n[Rr]+=65536),(a<s||s==-1)&&(dx(n,t,e,c),n[Rr]=(n[Rr]&4294901760)+c+2),c++}function vp(n,e){Hn(4,n,e);let t=$e(null);try{e.call(n)}finally{$e(t),Hn(5,n,e)}}function dx(n,e,t,i){let r=t[i]<0,s=t[i+1],o=r?-t[i]:t[i],a=n[o];r?n[Ae]>>14<n[Rr]>>16&&(n[Ae]&3)===e&&(n[Ae]+=16384,vp(a,s)):vp(a,s)}var Lr=-1,Ws=class{constructor(e,t,i){this.factory=e,this.resolving=!1,this.canSeeViewProviders=t,this.injectImpl=i}};function hx(n){return n instanceof Ws}function fx(n){return(n.flags&8)!==0}function px(n){return(n.flags&16)!==0}var Sl={},jl=class{constructor(e,t){this.injector=e,this.parentInjector=t}get(e,t,i){i=va(i);let r=this.injector.get(e,Sl,i);return r!==Sl||t===Sl?r:this.parentInjector.get(e,t,i)}};function Um(n){return n!==Lr}function ea(n){return n&32767}function mx(n){return n>>16}function ta(n,e){let t=mx(n),i=e;for(;t>0;)i=i[Xr],t--;return i}var $l=!0;function yp(n){let e=$l;return $l=n,e}var gx=256,Vm=gx-1,Bm=5,vx=0,Gn={};function yx(n,e,t){let i;typeof t=="string"?i=t.charCodeAt(0)||0:t.hasOwnProperty(ks)&&(i=t[ks]),i==null&&(i=t[ks]=vx++);let r=i&Vm,s=1<<r;e.data[n+(r>>Bm)]|=s}function zm(n,e){let t=Hm(n,e);if(t!==-1)return t;let i=e[Ne];i.firstCreatePass&&(n.injectorIndex=e.length,Cl(i.data,n),Cl(e,null),Cl(i.blueprint,null));let r=Yu(n,e),s=n.injectorIndex;if(Um(r)){let o=ea(r),a=ta(r,e),c=a[Ne].data;for(let l=0;l<8;l++)e[s+l]=a[o+l]|c[o+l]}return e[s+8]=r,s}function Cl(n,e){n.push(0,0,0,0,0,0,0,0,e)}function Hm(n,e){return n.injectorIndex===-1||n.parent&&n.parent.injectorIndex===n.injectorIndex||e[n.injectorIndex+8]===null?-1:n.injectorIndex}function Yu(n,e){if(n.parent&&n.parent.injectorIndex!==-1)return n.parent.injectorIndex;let t=0,i=null,r=e;for(;r!==null;){if(i=qm(r),i===null)return Lr;if(t++,r=r[Xr],i.injectorIndex!==-1)return i.injectorIndex|t<<16}return Lr}function _x(n,e,t){yx(n,e,t)}function Gm(n,e,t){if(t&We.Optional||n!==void 0)return n;Ru(e,"NodeInjector")}function Wm(n,e,t,i){if(t&We.Optional&&i===void 0&&(i=null),!(t&(We.Self|We.Host))){let r=n[kr],s=zn(void 0);try{return r?r.get(e,i,t&We.Optional):Zp(e,i,t&We.Optional)}finally{zn(s)}}return Gm(i,e,t)}function jm(n,e,t,i=We.Default,r){if(n!==null){if(e[Ae]&2048&&!(i&We.Self)){let o=wx(n,e,t,i,Gn);if(o!==Gn)return o}let s=$m(n,e,t,i,Gn);if(s!==Gn)return s}return Wm(e,t,i,r)}function $m(n,e,t,i,r){let s=Mx(t);if(typeof s=="function"){if(!Am(e,n,i))return i&We.Host?Gm(r,t,i):Wm(e,t,i,r);try{let o;if(o=s(i),o==null&&!(i&We.Optional))Ru(t);else return o}finally{Nm()}}else if(typeof s=="number"){let o=null,a=Hm(n,e),c=Lr,l=i&We.Host?e[$n][An]:null;for((a===-1||i&We.SkipSelf)&&(c=a===-1?Yu(n,e):e[a+8],c===Lr||!xp(i,!1)?a=-1:(o=e[Ne],a=ea(c),e=ta(c,e)));a!==-1;){let u=e[Ne];if(_p(s,a,u.data)){let d=xx(a,e,t,o,i,l);if(d!==Gn)return d}c=e[a+8],c!==Lr&&xp(i,e[Ne].data[a+8]===l)&&_p(s,a,e)?(o=u,a=ea(c),e=ta(c,e)):a=-1}}return r}function xx(n,e,t,i,r,s){let o=e[Ne],a=o.data[n+8],c=i==null?Uu(a)&&$l:i!=o&&(a.type&3)!==0,l=r&We.Host&&s===a,u=Wo(a,o,t,c,l);return u!==null?Br(e,o,u,a):Gn}function Wo(n,e,t,i,r){let s=n.providerIndexes,o=e.data,a=s&1048575,c=n.directiveStart,l=n.directiveEnd,u=s>>20,d=i?a:a+u,h=r?a+u:l;for(let f=d;f<h;f++){let g=o[f];if(f<c&&t===g||f>=c&&g.type===t)return f}if(r){let f=o[c];if(f&&Ks(f)&&f.type===t)return c}return null}function Br(n,e,t,i){let r=n[t],s=e.data;if(hx(r)){let o=r;o.resolving&&jy(Wy(s[t]));let a=yp(o.canSeeViewProviders);o.resolving=!0;let c,l=o.injectImpl?zn(o.injectImpl):null,u=Am(n,i,We.Default);try{r=n[t]=o.factory(void 0,s,n,i),e.firstCreatePass&&t>=i.directiveStart&&ux(t,s[t],e)}finally{l!==null&&zn(l),yp(a),o.resolving=!1,Nm()}}return r}function Mx(n){if(typeof n=="string")return n.charCodeAt(0)||0;let e=n.hasOwnProperty(ks)?n[ks]:void 0;return typeof e=="number"?e>=0?e&Vm:bx:e}function _p(n,e,t){let i=1<<n;return!!(t[e+(n>>Bm)]&i)}function xp(n,e){return!(n&We.Self)&&!(n&We.Host&&e)}var Xi=class{constructor(e,t){this._tNode=e,this._lView=t}get(e,t,i){return jm(this._tNode,this._lView,e,va(i),t)}};function bx(){return new Xi(Xn(),ct())}function wx(n,e,t,i,r){let s=n,o=e;for(;s!==null&&o!==null&&o[Ae]&2048&&!(o[Ae]&512);){let a=$m(s,o,t,i|We.Self,Gn);if(a!==Gn)return a;let c=s.parent;if(!c){let l=o[hm];if(l){let u=l.get(t,Gn,i);if(u!==Gn)return u}c=qm(o),o=o[Xr]}s=c}return r}function qm(n){let e=n[Ne],t=e.type;return t===2?e.declTNode:t===1?n[An]:null}function Mp(n,e=null,t=null,i){let r=Ex(n,e,t,i);return r.resolveInjectorInitializers(),r}function Ex(n,e=null,t=null,i,r=new Set){let s=[t||mn,E_(n)];return i=i||(typeof n=="object"?void 0:ln(n)),new Zo(s,e||ku(),i||null,r)}var zr=class n{static{this.THROW_IF_NOT_FOUND=Us}static{this.NULL=new Yo}static create(e,t){if(Array.isArray(e))return Mp({name:""},t,e,"");{let i=e.name??"";return Mp({name:i},e.parent,e.providers,i)}}static{this.\u0275prov=pt({token:n,providedIn:"any",factory:()=>at(em)})}static{this.__NG_ELEMENT_ID__=-1}};var Sx=new Je("");Sx.__NG_ELEMENT_ID__=n=>{let e=Xn();if(e===null)throw new je(204,!1);if(e.type&2)return e.value;if(n&We.Optional)return null;throw new je(204,!1)};var Cx="ngOriginalError";function Dl(n){return n[Cx]}var Xm=!0,Ym=(()=>{class n{static{this.__NG_ELEMENT_ID__=Dx}static{this.__NG_ENV_ID__=t=>t}}return n})(),ql=class extends Ym{constructor(e){super(),this._lView=e}onDestroy(e){return wm(this._lView,e),()=>G_(this._lView,e)}};function Dx(){return new ql(ct())}var wa=(()=>{class n{constructor(){this.taskId=0,this.pendingTasks=new Set,this.hasPendingTasks=new Os(!1)}get _hasPendingTasks(){return this.hasPendingTasks.value}add(){this._hasPendingTasks||this.hasPendingTasks.next(!0);let t=this.taskId++;return this.pendingTasks.add(t),t}remove(t){this.pendingTasks.delete(t),this.pendingTasks.size===0&&this._hasPendingTasks&&this.hasPendingTasks.next(!1)}ngOnDestroy(){this.pendingTasks.clear(),this._hasPendingTasks&&this.hasPendingTasks.next(!1)}static{this.\u0275prov=pt({token:n,providedIn:"root",factory:()=>new n})}}return n})();var Xl=class extends bi{constructor(e=!1){super(),this.destroyRef=void 0,this.pendingTasks=void 0,this.__isAsync=e,L_()&&(this.destroyRef=ke(Ym,{optional:!0})??void 0,this.pendingTasks=ke(wa,{optional:!0})??void 0)}emit(e){let t=$e(null);try{super.next(e)}finally{$e(t)}}subscribe(e,t,i){let r=e,s=t||(()=>null),o=i;if(e&&typeof e=="object"){let c=e;r=c.next?.bind(c),s=c.error?.bind(c),o=c.complete?.bind(c)}this.__isAsync&&(s=this.wrapInTimeout(s),r&&(r=this.wrapInTimeout(r)),o&&(o=this.wrapInTimeout(o)));let a=super.subscribe({next:r,error:s,complete:o});return e instanceof Zt&&e.add(a),a}wrapInTimeout(e){return t=>{let i=this.pendingTasks?.add();setTimeout(()=>{e(t),i!==void 0&&this.pendingTasks?.remove(i)})}}},Cn=Xl;function na(...n){}function Zm(n){let e,t;function i(){n=na;try{t!==void 0&&typeof cancelAnimationFrame=="function"&&cancelAnimationFrame(t),e!==void 0&&clearTimeout(e)}catch{}}return e=setTimeout(()=>{n(),i()}),typeof requestAnimationFrame=="function"&&(t=requestAnimationFrame(()=>{n(),i()})),()=>i()}function bp(n){return queueMicrotask(()=>n()),()=>{n=na}}var Zu="isAngularZone",ia=Zu+"_ID",Tx=0,rt=class n{constructor(e){this.hasPendingMacrotasks=!1,this.hasPendingMicrotasks=!1,this.isStable=!0,this.onUnstable=new Cn(!1),this.onMicrotaskEmpty=new Cn(!1),this.onStable=new Cn(!1),this.onError=new Cn(!1);let{enableLongStackTrace:t=!1,shouldCoalesceEventChangeDetection:i=!1,shouldCoalesceRunChangeDetection:r=!1,scheduleInRootZone:s=Xm}=e;if(typeof Zone>"u")throw new je(908,!1);Zone.assertZonePatched();let o=this;o._nesting=0,o._outer=o._inner=Zone.current,Zone.TaskTrackingZoneSpec&&(o._inner=o._inner.fork(new Zone.TaskTrackingZoneSpec)),t&&Zone.longStackTraceZoneSpec&&(o._inner=o._inner.fork(Zone.longStackTraceZoneSpec)),o.shouldCoalesceEventChangeDetection=!r&&i,o.shouldCoalesceRunChangeDetection=r,o.callbackScheduled=!1,o.scheduleInRootZone=s,Px(o)}static isInAngularZone(){return typeof Zone<"u"&&Zone.current.get(Zu)===!0}static assertInAngularZone(){if(!n.isInAngularZone())throw new je(909,!1)}static assertNotInAngularZone(){if(n.isInAngularZone())throw new je(909,!1)}run(e,t,i){return this._inner.run(e,t,i)}runTask(e,t,i,r){let s=this._inner,o=s.scheduleEventTask("NgZoneEvent: "+r,e,Ax,na,na);try{return s.runTask(o,t,i)}finally{s.cancelTask(o)}}runGuarded(e,t,i){return this._inner.runGuarded(e,t,i)}runOutsideAngular(e){return this._outer.run(e)}},Ax={};function Ju(n){if(n._nesting==0&&!n.hasPendingMicrotasks&&!n.isStable)try{n._nesting++,n.onMicrotaskEmpty.emit(null)}finally{if(n._nesting--,!n.hasPendingMicrotasks)try{n.runOutsideAngular(()=>n.onStable.emit(null))}finally{n.isStable=!0}}}function Ix(n){if(n.isCheckStableRunning||n.callbackScheduled)return;n.callbackScheduled=!0;function e(){Zm(()=>{n.callbackScheduled=!1,Yl(n),n.isCheckStableRunning=!0,Ju(n),n.isCheckStableRunning=!1})}n.scheduleInRootZone?Zone.root.run(()=>{e()}):n._outer.run(()=>{e()}),Yl(n)}function Px(n){let e=()=>{Ix(n)},t=Tx++;n._inner=n._inner.fork({name:"angular",properties:{[Zu]:!0,[ia]:t,[ia+t]:!0},onInvokeTask:(i,r,s,o,a,c)=>{if(Rx(c))return i.invokeTask(s,o,a,c);try{return wp(n),i.invokeTask(s,o,a,c)}finally{(n.shouldCoalesceEventChangeDetection&&o.type==="eventTask"||n.shouldCoalesceRunChangeDetection)&&e(),Ep(n)}},onInvoke:(i,r,s,o,a,c,l)=>{try{return wp(n),i.invoke(s,o,a,c,l)}finally{n.shouldCoalesceRunChangeDetection&&!n.callbackScheduled&&!Nx(c)&&e(),Ep(n)}},onHasTask:(i,r,s,o)=>{i.hasTask(s,o),r===s&&(o.change=="microTask"?(n._hasPendingMicrotasks=o.microTask,Yl(n),Ju(n)):o.change=="macroTask"&&(n.hasPendingMacrotasks=o.macroTask))},onHandleError:(i,r,s,o)=>(i.handleError(s,o),n.runOutsideAngular(()=>n.onError.emit(o)),!1)})}function Yl(n){n._hasPendingMicrotasks||(n.shouldCoalesceEventChangeDetection||n.shouldCoalesceRunChangeDetection)&&n.callbackScheduled===!0?n.hasPendingMicrotasks=!0:n.hasPendingMicrotasks=!1}function wp(n){n._nesting++,n.isStable&&(n.isStable=!1,n.onUnstable.emit(null))}function Ep(n){n._nesting--,Ju(n)}var Zl=class{constructor(){this.hasPendingMicrotasks=!1,this.hasPendingMacrotasks=!1,this.isStable=!0,this.onUnstable=new Cn,this.onMicrotaskEmpty=new Cn,this.onStable=new Cn,this.onError=new Cn}run(e,t,i){return e.apply(t,i)}runGuarded(e,t,i){return e.apply(t,i)}runOutsideAngular(e){return e()}runTask(e,t,i,r){return e.apply(t,i)}};function Rx(n){return Jm(n,"__ignore_ng_zone__")}function Nx(n){return Jm(n,"__scheduler_tick__")}function Jm(n,e){return!Array.isArray(n)||n.length!==1?!1:n[0]?.data?.[e]===!0}var ri=class{constructor(){this._console=console}handleError(e){let t=this._findOriginalError(e);this._console.error("ERROR",e),t&&this._console.error("ORIGINAL ERROR",t)}_findOriginalError(e){let t=e&&Dl(e);for(;t&&Dl(t);)t=Dl(t);return t||null}},Ox=new Je("",{providedIn:"root",factory:()=>{let n=ke(rt),e=ke(ri);return t=>n.runOutsideAngular(()=>e.handleError(t))}});function Lx(){return Zr(Xn(),ct())}function Zr(n,e){return new rr(vn(n,e))}var rr=(()=>{class n{constructor(t){this.nativeElement=t}static{this.__NG_ELEMENT_ID__=Lx}}return n})();function Fx(n){return n instanceof rr?n.nativeElement:n}function kx(){return this._results[Symbol.iterator]()}var Jl=class n{get changes(){return this._changes??=new Cn}constructor(e=!1){this._emitDistinctChangesOnly=e,this.dirty=!0,this._onDirty=void 0,this._results=[],this._changesDetected=!1,this._changes=void 0,this.length=0,this.first=void 0,this.last=void 0;let t=n.prototype;t[Symbol.iterator]||(t[Symbol.iterator]=kx)}get(e){return this._results[e]}map(e){return this._results.map(e)}filter(e){return this._results.filter(e)}find(e){return this._results.find(e)}reduce(e,t){return this._results.reduce(e,t)}forEach(e){this._results.forEach(e)}some(e){return this._results.some(e)}toArray(){return this._results.slice()}toString(){return this._results.toString()}reset(e,t){this.dirty=!1;let i=i_(e);(this._changesDetected=!n_(this._results,i,t))&&(this._results=i,this.length=i.length,this.last=i[this.length-1],this.first=i[0])}notifyOnChanges(){this._changes!==void 0&&(this._changesDetected||!this._emitDistinctChangesOnly)&&this._changes.emit(this)}onDirty(e){this._onDirty=e}setDirty(){this.dirty=!0,this._onDirty?.()}destroy(){this._changes!==void 0&&(this._changes.complete(),this._changes.unsubscribe())}};function Km(n){return(n.flags&128)===128}var Qm=new Map,Ux=0;function Vx(){return Ux++}function Bx(n){Qm.set(n[xa],n)}function Kl(n){Qm.delete(n[xa])}var Sp="__ngContext__";function Qi(n,e){qi(e)?(n[Sp]=e[xa],Bx(e)):n[Sp]=e}function eg(n){return ng(n[Gs])}function tg(n){return ng(n[Dn])}function ng(n){for(;n!==null&&!ai(n);)n=n[Dn];return n}var Ql;function ig(n){Ql=n}function zx(){if(Ql!==void 0)return Ql;if(typeof document<"u")return document;throw new je(210,!1)}var Ku=new Je("",{providedIn:"root",factory:()=>Hx}),Hx="ng",Qu=new Je(""),Jr=new Je("",{providedIn:"platform",factory:()=>"unknown"});var ed=new Je("",{providedIn:"root",factory:()=>zx().body?.querySelector("[ngCspNonce]")?.getAttribute("ngCspNonce")||null});var Gx="h",Wx="b";var jx=()=>null;function td(n,e,t=!1){return jx(n,e,t)}var rg=!1,$x=new Je("",{providedIn:"root",factory:()=>rg});var ra=class{constructor(e){this.changingThisBreaksApplicationSecurity=e}toString(){return`SafeValue must use [property]=binding: ${this.changingThisBreaksApplicationSecurity} (see ${Wp})`}};function Ea(n){return n instanceof ra?n.changingThisBreaksApplicationSecurity:n}function sg(n,e){let t=qx(n);if(t!=null&&t!==e){if(t==="ResourceURL"&&e==="URL")return!0;throw new Error(`Required a safe ${e}, got a ${t} (see ${Wp})`)}return t===e}function qx(n){return n instanceof ra&&n.getTypeName()||null}var Xx=/^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:\/?#]*(?:[\/?#]|$))/i;function og(n){return n=String(n),n.match(Xx)?n:"unsafe:"+n}var nd=function(n){return n[n.NONE=0]="NONE",n[n.HTML=1]="HTML",n[n.STYLE=2]="STYLE",n[n.SCRIPT=3]="SCRIPT",n[n.URL=4]="URL",n[n.RESOURCE_URL=5]="RESOURCE_URL",n}(nd||{});function Yn(n){let e=Yx();return e?e.sanitize(nd.URL,n)||"":sg(n,"URL")?Ea(n):og(ga(n))}function Yx(){let n=ct();return n&&n[jn].sanitizer}function ag(n){return n.ownerDocument.defaultView}function cg(n){return n.ownerDocument}var si=function(n){return n[n.Important=1]="Important",n[n.DashCase=2]="DashCase",n}(si||{}),Zx;function id(n,e){return Zx(n,e)}function Nr(n,e,t,i,r){if(i!=null){let s,o=!1;ai(i)?s=i:qi(i)&&(o=!0,i=i[oi]);let a=qn(i);n===0&&t!==null?r==null?hg(e,t,a):sa(e,t,a,r||null,!0):n===1&&t!==null?sa(e,t,a,r||null,!0):n===2?dM(e,a,o):n===3&&e.destroyNode(a),s!=null&&fM(e,n,s,t,r)}}function Jx(n,e){return n.createText(e)}function Kx(n,e,t){n.setValue(e,t)}function lg(n,e,t){return n.createElement(e,t)}function Qx(n,e){ug(n,e),e[oi]=null,e[An]=null}function eM(n,e,t,i,r,s){i[oi]=r,i[An]=e,Ca(n,i,t,1,r,s)}function ug(n,e){e[jn].changeDetectionScheduler?.notify(9),Ca(n,e,e[Wt],2,null,null)}function tM(n){let e=n[Gs];if(!e)return Tl(n[Ne],n);for(;e;){let t=null;if(qi(e))t=e[Gs];else{let i=e[Ht];i&&(t=i)}if(!t){for(;e&&!e[Dn]&&e!==n;)qi(e)&&Tl(e[Ne],e),e=e[Gt];e===null&&(e=n),qi(e)&&Tl(e[Ne],e),t=e&&e[Dn]}e=t}}function nM(n,e,t,i){let r=Ht+i,s=t.length;i>0&&(t[r-1][Dn]=e),i<s-Ht?(e[Dn]=t[r],Qp(t,Ht+i,e)):(t.push(e),e[Dn]=null),e[Gt]=t;let o=e[Yi];o!==null&&t!==o&&dg(o,e);let a=e[ii];a!==null&&a.insertView(n),Gl(e),e[Ae]|=128}function dg(n,e){let t=n[Ur],i=e[Gt];if(qi(i))n[Ae]|=Qo.HasTransplantedViews;else{let r=i[Gt][$n];e[$n]!==r&&(n[Ae]|=Qo.HasTransplantedViews)}t===null?n[Ur]=[e]:t.push(e)}function rd(n,e){let t=n[Ur],i=t.indexOf(e);t.splice(i,1)}function js(n,e){if(n.length<=Ht)return;let t=Ht+e,i=n[t];if(i){let r=i[Yi];r!==null&&r!==n&&rd(r,i),e>0&&(n[t-1][Dn]=i[Dn]);let s=Xo(n,Ht+e);Qx(i[Ne],i);let o=s[ii];o!==null&&o.detachView(s[Ne]),i[Gt]=null,i[Dn]=null,i[Ae]&=-129}return i}function Sa(n,e){if(!(e[Ae]&256)){let t=e[Wt];t.destroyNode&&Ca(n,e,t,3,null,null),tM(e)}}function Tl(n,e){if(e[Ae]&256)return;let t=$e(null);try{e[Ae]&=-129,e[Ae]|=256,e[gn]&&ll(e[gn]),rM(n,e),iM(n,e),e[Ne].type===1&&e[Wt].destroy();let i=e[Yi];if(i!==null&&ai(e[Gt])){i!==e[Gt]&&rd(i,e);let r=e[ii];r!==null&&r.detachView(n)}Kl(e)}finally{$e(t)}}function iM(n,e){let t=n.cleanup,i=e[Jo];if(t!==null)for(let s=0;s<t.length-1;s+=2)if(typeof t[s]=="string"){let o=t[s+3];o>=0?i[o]():i[-o].unsubscribe(),s+=2}else{let o=i[t[s+1]];t[s].call(o)}i!==null&&(e[Jo]=null);let r=e[wi];if(r!==null){e[wi]=null;for(let s=0;s<r.length;s++){let o=r[s];o()}}}function rM(n,e){let t;if(n!=null&&(t=n.destroyHooks)!=null)for(let i=0;i<t.length;i+=2){let r=e[t[i]];if(!(r instanceof Ws)){let s=t[i+1];if(Array.isArray(s))for(let o=0;o<s.length;o+=2){let a=r[s[o]],c=s[o+1];Hn(4,a,c);try{c.call(a)}finally{Hn(5,a,c)}}else{Hn(4,r,s);try{s.call(r)}finally{Hn(5,r,s)}}}}}function sM(n,e,t){return oM(n,e.parent,t)}function oM(n,e,t){let i=e;for(;i!==null&&i.type&168;)e=i,i=e.parent;if(i===null)return t[oi];{let{componentOffset:r}=i;if(r>-1){let{encapsulation:s}=n.data[i.directiveStart+r];if(s===Wn.None||s===Wn.Emulated)return null}return vn(i,t)}}function sa(n,e,t,i,r){n.insertBefore(e,t,i,r)}function hg(n,e,t){n.appendChild(e,t)}function Cp(n,e,t,i,r){i!==null?sa(n,e,t,i,r):hg(n,e,t)}function fg(n,e){return n.parentNode(e)}function aM(n,e){return n.nextSibling(e)}function cM(n,e,t){return uM(n,e,t)}function lM(n,e,t){return n.type&40?vn(n,t):null}var uM=lM,Dp;function sd(n,e,t,i){let r=sM(n,i,e),s=e[Wt],o=i.parent||e[An],a=cM(o,i,e);if(r!=null)if(Array.isArray(t))for(let c=0;c<t.length;c++)Cp(s,r,t[c],a,!1);else Cp(s,r,t,a,!1);Dp!==void 0&&Dp(s,i,e,t,r)}function Ls(n,e){if(e!==null){let t=e.type;if(t&3)return vn(e,n);if(t&4)return eu(-1,n[e.index]);if(t&8){let i=e.child;if(i!==null)return Ls(n,i);{let r=n[e.index];return ai(r)?eu(-1,r):qn(r)}}else{if(t&128)return Ls(n,e.next);if(t&32)return id(e,n)()||qn(n[e.index]);{let i=pg(n,e);if(i!==null){if(Array.isArray(i))return i[0];let r=Ji(n[$n]);return Ls(r,i)}else return Ls(n,e.next)}}}return null}function pg(n,e){if(e!==null){let i=n[$n][An],r=e.projection;return i.projection[r]}return null}function eu(n,e){let t=Ht+n+1;if(t<e.length){let i=e[t],r=i[Ne].firstChild;if(r!==null)return Ls(i,r)}return e[Zi]}function dM(n,e,t){n.removeChild(null,e,t)}function od(n,e,t,i,r,s,o){for(;t!=null;){if(t.type===128){t=t.next;continue}let a=i[t.index],c=t.type;if(o&&e===0&&(a&&Qi(qn(a),i),t.flags|=2),(t.flags&32)!==32)if(c&8)od(n,e,t.child,i,r,s,!1),Nr(e,n,r,a,s);else if(c&32){let l=id(t,i),u;for(;u=l();)Nr(e,n,r,u,s);Nr(e,n,r,a,s)}else c&16?hM(n,e,i,t,r,s):Nr(e,n,r,a,s);t=o?t.projectionNext:t.next}}function Ca(n,e,t,i,r,s){od(t,i,n.firstChild,e,r,s,!1)}function hM(n,e,t,i,r,s){let o=t[$n],c=o[An].projection[i.projection];if(Array.isArray(c))for(let l=0;l<c.length;l++){let u=c[l];Nr(e,n,r,u,s)}else{let l=c,u=o[Gt];Km(i)&&(l.flags|=128),od(n,e,l,u,r,s,!0)}}function fM(n,e,t,i,r){let s=t[Zi],o=qn(t);s!==o&&Nr(e,n,i,s,r);for(let a=Ht;a<t.length;a++){let c=t[a];Ca(c[Ne],c,n,e,i,s)}}function pM(n,e,t,i,r){if(e)r?n.addClass(t,i):n.removeClass(t,i);else{let s=i.indexOf("-")===-1?void 0:si.DashCase;r==null?n.removeStyle(t,i,s):(typeof r=="string"&&r.endsWith("!important")&&(r=r.slice(0,-10),s|=si.Important),n.setStyle(t,i,r,s))}}function mM(n,e,t){n.setAttribute(e,"style",t)}function mg(n,e,t){t===""?n.removeAttribute(e,"class"):n.setAttribute(e,"class",t)}function gg(n,e,t){let{mergedAttrs:i,classes:r,styles:s}=t;i!==null&&Fl(n,e,i),r!==null&&mg(n,e,r),s!==null&&mM(n,e,s)}var Ci={};function ye(n=1){vg(In(),ct(),nr()+n,!1)}function vg(n,e,t,i){if(!i)if((e[Ae]&3)===3){let s=n.preOrderCheckHooks;s!==null&&Ho(e,s,t)}else{let s=n.preOrderHooks;s!==null&&Go(e,s,0,t)}Ki(t)}function Di(n,e=We.Default){let t=ct();if(t===null)return at(n,e);let i=Xn();return jm(i,t,Sn(n),e)}function yg(n,e,t,i,r,s){let o=$e(null);try{let a=null;r&Ei.SignalBased&&(a=e[i][Bn]),a!==null&&a.transformFn!==void 0&&(s=a.transformFn(s)),r&Ei.HasDecoratorInputTransform&&(s=n.inputTransforms[i].call(e,s)),n.setInput!==null?n.setInput(e,a,s,t,i):mm(e,a,i,s)}finally{$e(o)}}function gM(n,e){let t=n.hostBindingOpCodes;if(t!==null)try{for(let i=0;i<t.length;i++){let r=t[i];if(r<0)Ki(~r);else{let s=r,o=t[++i],a=t[++i];nx(o,s);let c=e[s];a(2,c)}}}finally{Ki(-1)}}function Da(n,e,t,i,r,s,o,a,c,l,u){let d=e.blueprint.slice();return d[oi]=r,d[Ae]=i|4|128|8|64,(l!==null||n&&n[Ae]&2048)&&(d[Ae]|=2048),Mm(d),d[Gt]=d[Xr]=n,d[zt]=t,d[jn]=o||n&&n[jn],d[Wt]=a||n&&n[Wt],d[kr]=c||n&&n[kr]||null,d[An]=s,d[xa]=Vx(),d[Hs]=u,d[hm]=l,d[$n]=e.type==2?n[$n]:d,d}function Ta(n,e,t,i,r){let s=n.data[e];if(s===null)s=vM(n,e,t,i,r),tx()&&(s.flags|=32);else if(s.type&64){s.type=t,s.value=i,s.attrs=r;let o=Z_();s.injectorIndex=o===null?-1:o.injectorIndex}return Qs(s,!0),s}function vM(n,e,t,i,r){let s=Cm(),o=Dm(),a=o?s:s&&s.parent,c=n.data[e]=wM(n,a,t,e,i,r);return n.firstChild===null&&(n.firstChild=c),s!==null&&(o?s.child==null&&c.parent!==null&&(s.child=c):s.next===null&&(s.next=c,c.prev=s)),c}function _g(n,e,t,i){if(t===0)return-1;let r=e.length;for(let s=0;s<t;s++)e.push(i),n.blueprint.push(i),n.data.push(null);return r}function xg(n,e,t,i,r){let s=nr(),o=i&2;try{Ki(-1),o&&e.length>Tn&&vg(n,e,Tn,!1),Hn(o?2:0,r),t(i,r)}finally{Ki(s),Hn(o?3:1,r)}}function Mg(n,e,t){if(pm(e)){let i=$e(null);try{let r=e.directiveStart,s=e.directiveEnd;for(let o=r;o<s;o++){let a=n.data[o];if(a.contentQueries){let c=t[o];a.contentQueries(1,c,o)}}}finally{$e(i)}}}function bg(n,e,t){Sm()&&(IM(n,e,t,vn(t,e)),(t.flags&64)===64&&Dg(n,e,t))}function wg(n,e,t=vn){let i=e.localNames;if(i!==null){let r=e.index+1;for(let s=0;s<i.length;s+=2){let o=i[s+1],a=o===-1?t(e,n):n[o];n[r++]=a}}}function Eg(n){let e=n.tView;return e===null||e.incompleteFirstPass?n.tView=ad(1,null,n.template,n.decls,n.vars,n.directiveDefs,n.pipeDefs,n.viewQuery,n.schemas,n.consts,n.id):e}function ad(n,e,t,i,r,s,o,a,c,l,u){let d=Tn+i,h=d+r,f=yM(d,h),g=typeof l=="function"?l():l;return f[Ne]={type:n,blueprint:f,template:t,queries:null,viewQuery:a,declTNode:e,data:f.slice().fill(null,d),bindingStartIndex:d,expandoStartIndex:h,hostBindingOpCodes:null,firstCreatePass:!0,firstUpdatePass:!0,staticViewQueries:!1,staticContentQueries:!1,preOrderHooks:null,preOrderCheckHooks:null,contentHooks:null,contentCheckHooks:null,viewHooks:null,viewCheckHooks:null,destroyHooks:null,cleanup:null,contentQueries:null,components:null,directiveRegistry:typeof s=="function"?s():s,pipeRegistry:typeof o=="function"?o():o,firstChild:null,schemas:c,consts:g,incompleteFirstPass:!1,ssrId:u}}function yM(n,e){let t=[];for(let i=0;i<e;i++)t.push(i<n?null:Ci);return t}function _M(n,e,t,i){let s=i.get($x,rg)||t===Wn.ShadowDom,o=n.selectRootElement(e,s);return xM(o),o}function xM(n){MM(n)}var MM=()=>null;function bM(n,e,t,i){let r=Ig(e);r.push(t),n.firstCreatePass&&Pg(n).push(i,r.length-1)}function wM(n,e,t,i,r,s){let o=e?e.injectorIndex:-1,a=0;return q_()&&(a|=128),{type:t,index:i,insertBeforeIndex:null,injectorIndex:o,directiveStart:-1,directiveEnd:-1,directiveStylingLast:-1,componentOffset:-1,propertyBindings:null,flags:a,providerIndexes:0,value:r,attrs:s,mergedAttrs:null,localNames:null,initialInputs:void 0,inputs:null,outputs:null,tView:null,next:null,prev:null,projectionNext:null,child:null,parent:e,projection:null,styles:null,stylesWithoutHost:null,residualStyles:void 0,classes:null,classesWithoutHost:null,residualClasses:void 0,classBindings:0,styleBindings:0}}function Tp(n,e,t,i,r){for(let s in e){if(!e.hasOwnProperty(s))continue;let o=e[s];if(o===void 0)continue;i??={};let a,c=Ei.None;Array.isArray(o)?(a=o[0],c=o[1]):a=o;let l=s;if(r!==null){if(!r.hasOwnProperty(s))continue;l=r[s]}n===0?Ap(i,t,l,a,c):Ap(i,t,l,a)}return i}function Ap(n,e,t,i,r){let s;n.hasOwnProperty(t)?(s=n[t]).push(e,i):s=n[t]=[e,i],r!==void 0&&s.push(r)}function EM(n,e,t){let i=e.directiveStart,r=e.directiveEnd,s=n.data,o=e.attrs,a=[],c=null,l=null;for(let u=i;u<r;u++){let d=s[u],h=t?t.get(d):null,f=h?h.inputs:null,g=h?h.outputs:null;c=Tp(0,d.inputs,u,c,f),l=Tp(1,d.outputs,u,l,g);let v=c!==null&&o!==null&&!Lu(e)?zM(c,u,o):null;a.push(v)}c!==null&&(c.hasOwnProperty("class")&&(e.flags|=8),c.hasOwnProperty("style")&&(e.flags|=16)),e.initialInputs=a,e.inputs=c,e.outputs=l}function SM(n){return n==="class"?"className":n==="for"?"htmlFor":n==="formaction"?"formAction":n==="innerHtml"?"innerHTML":n==="readonly"?"readOnly":n==="tabindex"?"tabIndex":n}function CM(n,e,t,i,r,s,o,a){let c=vn(e,t),l=e.inputs,u;!a&&l!=null&&(u=l[i])?(cd(n,t,u,i,r),Uu(e)&&DM(t,e.index)):e.type&3?(i=SM(i),r=o!=null?o(r,e.value||"",i):r,s.setProperty(c,i,r)):e.type&12}function DM(n,e){let t=Yr(e,n);t[Ae]&16||(t[Ae]|=64)}function Sg(n,e,t,i){if(Sm()){let r=i===null?null:{"":-1},s=RM(n,t),o,a;s===null?o=a=null:[o,a]=s,o!==null&&Cg(n,e,t,o,r,a),r&&NM(t,i,r)}t.mergedAttrs=Ou(t.mergedAttrs,t.attrs)}function Cg(n,e,t,i,r,s){for(let l=0;l<i.length;l++)_x(zm(t,e),n,i[l].type);LM(t,n.data.length,i.length);for(let l=0;l<i.length;l++){let u=i[l];u.providersResolver&&u.providersResolver(u)}let o=!1,a=!1,c=_g(n,e,i.length,null);for(let l=0;l<i.length;l++){let u=i[l];t.mergedAttrs=Ou(t.mergedAttrs,u.hostAttrs),FM(n,t,e,c,u),OM(c,u,r),u.contentQueries!==null&&(t.flags|=4),(u.hostBindings!==null||u.hostAttrs!==null||u.hostVars!==0)&&(t.flags|=64);let d=u.type.prototype;!o&&(d.ngOnChanges||d.ngOnInit||d.ngDoCheck)&&((n.preOrderHooks??=[]).push(t.index),o=!0),!a&&(d.ngOnChanges||d.ngDoCheck)&&((n.preOrderCheckHooks??=[]).push(t.index),a=!0),c++}EM(n,t,s)}function TM(n,e,t,i,r){let s=r.hostBindings;if(s){let o=n.hostBindingOpCodes;o===null&&(o=n.hostBindingOpCodes=[]);let a=~e.index;AM(o)!=a&&o.push(a),o.push(t,i,s)}}function AM(n){let e=n.length;for(;e>0;){let t=n[--e];if(typeof t=="number"&&t<0)return t}return 0}function IM(n,e,t,i){let r=t.directiveStart,s=t.directiveEnd;Uu(t)&&kM(e,t,n.data[r+t.componentOffset]),n.firstCreatePass||zm(t,e),Qi(i,e);let o=t.initialInputs;for(let a=r;a<s;a++){let c=n.data[a],l=Br(e,n,a,t);if(Qi(l,e),o!==null&&BM(e,a-r,l,c,t,o),Ks(c)){let u=Yr(t.index,e);u[zt]=Br(e,n,a,t)}}}function Dg(n,e,t){let i=t.directiveStart,r=t.directiveEnd,s=t.index,o=ix();try{Ki(s);for(let a=i;a<r;a++){let c=n.data[a],l=e[a];Wl(a),(c.hostBindings!==null||c.hostVars!==0||c.hostAttrs!==null)&&PM(c,l)}}finally{Ki(-1),Wl(o)}}function PM(n,e){n.hostBindings!==null&&n.hostBindings(1,e)}function RM(n,e){let t=n.directiveRegistry,i=null,r=null;if(t)for(let s=0;s<t.length;s++){let o=t[s];if(p_(e,o.selectors,!1))if(i||(i=[]),Ks(o))if(o.findHostDirectiveDefs!==null){let a=[];r=r||new Map,o.findHostDirectiveDefs(o,a,r),i.unshift(...a,o);let c=a.length;tu(n,e,c)}else i.unshift(o),tu(n,e,0);else r=r||new Map,o.findHostDirectiveDefs?.(o,i,r),i.push(o)}return i===null?null:[i,r]}function tu(n,e,t){e.componentOffset=t,(n.components??=[]).push(e.index)}function NM(n,e,t){if(e){let i=n.localNames=[];for(let r=0;r<e.length;r+=2){let s=t[e[r+1]];if(s==null)throw new je(-301,!1);i.push(e[r],s)}}}function OM(n,e,t){if(t){if(e.exportAs)for(let i=0;i<e.exportAs.length;i++)t[e.exportAs[i]]=n;Ks(e)&&(t[""]=n)}}function LM(n,e,t){n.flags|=1,n.directiveStart=e,n.directiveEnd=e+t,n.providerIndexes=e}function FM(n,e,t,i,r){n.data[i]=r;let s=r.factory||(r.factory=Vs(r.type,!0)),o=new Ws(s,Ks(r),Di);n.blueprint[i]=o,t[i]=o,TM(n,e,i,_g(n,t,r.hostVars,Ci),r)}function kM(n,e,t){let i=vn(e,n),r=Eg(t),s=n[jn].rendererFactory,o=16;t.signals?o=4096:t.onPush&&(o=64);let a=Aa(n,Da(n,r,null,o,i,e,null,s.createRenderer(i,t),null,null,null));n[e.index]=a}function UM(n,e,t,i,r,s){let o=vn(n,e);VM(e[Wt],o,s,n.value,t,i,r)}function VM(n,e,t,i,r,s,o){if(s==null)n.removeAttribute(e,r,t);else{let a=o==null?ga(s):o(s,i||"",r);n.setAttribute(e,r,a,t)}}function BM(n,e,t,i,r,s){let o=s[e];if(o!==null)for(let a=0;a<o.length;){let c=o[a++],l=o[a++],u=o[a++],d=o[a++];yg(i,t,c,l,u,d)}}function zM(n,e,t){let i=null,r=0;for(;r<t.length;){let s=t[r];if(s===0){r+=4;continue}else if(s===5){r+=2;continue}if(typeof s=="number")break;if(n.hasOwnProperty(s)){i===null&&(i=[]);let o=n[s];for(let a=0;a<o.length;a+=3)if(o[a]===e){i.push(s,o[a+1],o[a+2],t[r+1]);break}}r+=2}return i}function Tg(n,e,t,i){return[n,!0,0,e,null,i,null,t,null,null]}function Ag(n,e){let t=n.contentQueries;if(t!==null){let i=$e(null);try{for(let r=0;r<t.length;r+=2){let s=t[r],o=t[r+1];if(o!==-1){let a=n.data[o];Gu(s),a.contentQueries(2,e[o],o)}}}finally{$e(i)}}}function Aa(n,e){return n[Gs]?n[pp][Dn]=e:n[Gs]=e,n[pp]=e,e}function nu(n,e,t){Gu(0);let i=$e(null);try{e(n,t)}finally{$e(i)}}function Ig(n){return n[Jo]??=[]}function Pg(n){return n.cleanup??=[]}function Rg(n,e){let t=n[kr],i=t?t.get(ri,null):null;i&&i.handleError(e)}function cd(n,e,t,i,r){for(let s=0;s<t.length;){let o=t[s++],a=t[s++],c=t[s++],l=e[o],u=n.data[o];yg(u,l,i,a,c,r)}}function HM(n,e,t){let i=xm(e,n);Kx(n[Wt],i,t)}function GM(n,e){let t=Yr(e,n),i=t[Ne];WM(i,t);let r=t[oi];r!==null&&t[Hs]===null&&(t[Hs]=td(r,t[kr])),ld(i,t,t[zt])}function WM(n,e){for(let t=e.length;t<n.blueprint.length;t++)e.push(n.blueprint[t])}function ld(n,e,t){Wu(e);try{let i=n.viewQuery;i!==null&&nu(1,i,t);let r=n.template;r!==null&&xg(n,e,r,1,t),n.firstCreatePass&&(n.firstCreatePass=!1),e[ii]?.finishViewCreation(n),n.staticContentQueries&&Ag(n,e),n.staticViewQueries&&nu(2,n.viewQuery,t);let s=n.components;s!==null&&jM(e,s)}catch(i){throw n.firstCreatePass&&(n.incompleteFirstPass=!0,n.firstCreatePass=!1),i}finally{e[Ae]&=-5,ju()}}function jM(n,e){for(let t=0;t<e.length;t++)GM(n,e[t])}function Ia(n,e,t,i){let r=$e(null);try{let s=e.tView,a=n[Ae]&4096?4096:16,c=Da(n,s,t,a,null,e,null,null,i?.injector??null,i?.embeddedViewInjector??null,i?.dehydratedView??null),l=n[e.index];c[Yi]=l;let u=n[ii];return u!==null&&(c[ii]=u.createEmbeddedView(s)),ld(s,c,t),c}finally{$e(r)}}function Ng(n,e){let t=Ht+e;if(t<n.length)return n[t]}function $s(n,e){return!e||e.firstChild===null||Km(n)}function Pa(n,e,t,i=!0){let r=e[Ne];if(nM(r,e,n,t),i){let o=eu(t,n),a=e[Wt],c=fg(a,n[Zi]);c!==null&&eM(r,n[An],a,e,c,o)}let s=e[Hs];s!==null&&s.firstChild!==null&&(s.firstChild=null)}function Og(n,e){let t=js(n,e);return t!==void 0&&Sa(t[Ne],t),t}function oa(n,e,t,i,r=!1){for(;t!==null;){if(t.type===128){t=r?t.projectionNext:t.next;continue}let s=e[t.index];s!==null&&i.push(qn(s)),ai(s)&&$M(s,i);let o=t.type;if(o&8)oa(n,e,t.child,i);else if(o&32){let a=id(t,e),c;for(;c=a();)i.push(c)}else if(o&16){let a=pg(e,t);if(Array.isArray(a))i.push(...a);else{let c=Ji(e[$n]);oa(c[Ne],c,a,i,!0)}}t=r?t.projectionNext:t.next}return i}function $M(n,e){for(let t=Ht;t<n.length;t++){let i=n[t],r=i[Ne].firstChild;r!==null&&oa(i[Ne],i,r,e)}n[Zi]!==n[oi]&&e.push(n[Zi])}var Lg=[];function qM(n){return n[gn]??XM(n)}function XM(n){let e=Lg.pop()??Object.create(ZM);return e.lView=n,e}function YM(n){n.lView[gn]!==n&&(n.lView=null,Lg.push(n))}var ZM=St(_t({},Rs),{consumerIsAlwaysLive:!0,consumerMarkedDirty:n=>{ba(n.lView)},consumerOnSignalRead(){this.lView[gn]=this}});function JM(n){let e=n[gn]??Object.create(KM);return e.lView=n,e}var KM=St(_t({},Rs),{consumerIsAlwaysLive:!0,consumerMarkedDirty:n=>{let e=Ji(n.lView);for(;e&&!Fg(e[Ne]);)e=Ji(e);e&&bm(e)},consumerOnSignalRead(){this.lView[gn]=this}});function Fg(n){return n.type!==2}var QM=100;function kg(n,e=!0,t=0){let i=n[jn],r=i.rendererFactory,s=!1;s||r.begin?.();try{eb(n,t)}catch(o){throw e&&Rg(n,o),o}finally{s||(r.end?.(),i.inlineEffectRunner?.flush())}}function eb(n,e){let t=Tm();try{gp(!0),iu(n,e);let i=0;for(;Ma(n);){if(i===QM)throw new je(103,!1);i++,iu(n,1)}}finally{gp(t)}}function tb(n,e,t,i){let r=e[Ae];if((r&256)===256)return;let s=!1,o=!1;!s&&e[jn].inlineEffectRunner?.flush(),Wu(e);let a=!0,c=null,l=null;s||(Fg(n)?(l=qM(e),c=Io(l)):Pf()===null?(a=!1,l=JM(e),c=Io(l)):e[gn]&&(ll(e[gn]),e[gn]=null));try{Mm(e),Q_(n.bindingStartIndex),t!==null&&xg(n,e,t,2,i);let u=(r&3)===3;if(!s)if(u){let f=n.preOrderCheckHooks;f!==null&&Ho(e,f,null)}else{let f=n.preOrderHooks;f!==null&&Go(e,f,0,null),El(e,0)}if(o||nb(e),Ug(e,0),n.contentQueries!==null&&Ag(n,e),!s)if(u){let f=n.contentCheckHooks;f!==null&&Ho(e,f)}else{let f=n.contentHooks;f!==null&&Go(e,f,1),El(e,1)}gM(n,e);let d=n.components;d!==null&&Bg(e,d,0);let h=n.viewQuery;if(h!==null&&nu(2,h,i),!s)if(u){let f=n.viewCheckHooks;f!==null&&Ho(e,f)}else{let f=n.viewHooks;f!==null&&Go(e,f,2),El(e,2)}if(n.firstUpdatePass===!0&&(n.firstUpdatePass=!1),e[wl]){for(let f of e[wl])f();e[wl]=null}s||(e[Ae]&=-73)}catch(u){throw s||ba(e),u}finally{l!==null&&(al(l,c),a&&YM(l)),ju()}}function Ug(n,e){for(let t=eg(n);t!==null;t=tg(t))for(let i=Ht;i<t.length;i++){let r=t[i];Vg(r,e)}}function nb(n){for(let e=eg(n);e!==null;e=tg(e)){if(!(e[Ae]&Qo.HasTransplantedViews))continue;let t=e[Ur];for(let i=0;i<t.length;i++){let r=t[i];bm(r)}}}function ib(n,e,t){let i=Yr(e,n);Vg(i,t)}function Vg(n,e){Hu(n)&&iu(n,e)}function iu(n,e){let i=n[Ne],r=n[Ae],s=n[gn],o=!!(e===0&&r&16);if(o||=!!(r&64&&e===0),o||=!!(r&1024),o||=!!(s?.dirty&&cl(s)),o||=!1,s&&(s.dirty=!1),n[Ae]&=-9217,o)tb(i,n,i.template,n[zt]);else if(r&8192){Ug(n,1);let a=i.components;a!==null&&Bg(n,a,1)}}function Bg(n,e,t){for(let i=0;i<e.length;i++)ib(n,e[i],t)}function ud(n,e){let t=Tm()?64:1088;for(n[jn].changeDetectionScheduler?.notify(e);n;){n[Ae]|=t;let i=Ji(n);if(zl(n)&&!i)return n;n=i}return null}var qs=class{get rootNodes(){let e=this._lView,t=e[Ne];return oa(t,e,t.firstChild,[])}constructor(e,t,i=!0){this._lView=e,this._cdRefInjectingView=t,this.notifyErrorHandler=i,this._appRef=null,this._attachedToViewContainer=!1}get context(){return this._lView[zt]}set context(e){this._lView[zt]=e}get destroyed(){return(this._lView[Ae]&256)===256}destroy(){if(this._appRef)this._appRef.detachView(this);else if(this._attachedToViewContainer){let e=this._lView[Gt];if(ai(e)){let t=e[Ko],i=t?t.indexOf(this):-1;i>-1&&(js(e,i),Xo(t,i))}this._attachedToViewContainer=!1}Sa(this._lView[Ne],this._lView)}onDestroy(e){wm(this._lView,e)}markForCheck(){ud(this._cdRefInjectingView||this._lView,4)}detach(){this._lView[Ae]&=-129}reattach(){Gl(this._lView),this._lView[Ae]|=128}detectChanges(){this._lView[Ae]|=1024,kg(this._lView,this.notifyErrorHandler)}checkNoChanges(){}attachToViewContainerRef(){if(this._appRef)throw new je(902,!1);this._attachedToViewContainer=!0}detachFromAppRef(){this._appRef=null;let e=zl(this._lView),t=this._lView[Yi];t!==null&&!e&&rd(t,this._lView),ug(this._lView[Ne],this._lView)}attachToAppRef(e){if(this._attachedToViewContainer)throw new je(902,!1);this._appRef=e;let t=zl(this._lView),i=this._lView[Yi];i!==null&&!t&&dg(i,this._lView),Gl(this._lView)}},er=(()=>{class n{static{this.__NG_ELEMENT_ID__=ob}}return n})(),rb=er,sb=class extends rb{constructor(e,t,i){super(),this._declarationLView=e,this._declarationTContainer=t,this.elementRef=i}get ssrId(){return this._declarationTContainer.tView?.ssrId||null}createEmbeddedView(e,t){return this.createEmbeddedViewImpl(e,t)}createEmbeddedViewImpl(e,t,i){let r=Ia(this._declarationLView,this._declarationTContainer,e,{embeddedViewInjector:t,dehydratedView:i});return new qs(r)}};function ob(){return dd(Xn(),ct())}function dd(n,e){return n.type&4?new sb(e,n,Zr(n,e)):null}var _P=new RegExp(`^(\\d+)*(${Wx}|${Gx})*(.*)`);var ab=()=>null;function Xs(n,e){return ab(n,e)}var Hr=class{},Ra=new Je("",{providedIn:"root",factory:()=>!1});var zg=new Je(""),Hg=new Je(""),ru=class{},aa=class{};function cb(n){let e=Error(`No component factory found for ${ln(n)}.`);return e[lb]=n,e}var lb="ngComponent";var su=class{resolveComponentFactory(e){throw cb(e)}},Ys=class{static{this.NULL=new su}},Gr=class{};var ub=(()=>{class n{static{this.\u0275prov=pt({token:n,providedIn:"root",factory:()=>null})}}return n})();function ou(n,e,t){let i=t?n.styles:null,r=t?n.classes:null,s=0;if(e!==null)for(let o=0;o<e.length;o++){let a=e[o];if(typeof a=="number")s=a;else if(s==1)r=ip(r,a);else if(s==2){let c=a,l=e[++o];i=ip(i,c+": "+l+";")}}t?n.styles=i:n.stylesWithoutHost=i,t?n.classes=r:n.classesWithoutHost=r}var au=class extends Ys{constructor(e){super(),this.ngModule=e}resolveComponentFactory(e){let t=Fr(e);return new ca(t,this.ngModule)}};function Ip(n,e){let t=[];for(let i in n){if(!n.hasOwnProperty(i))continue;let r=n[i];if(r===void 0)continue;let s=Array.isArray(r),o=s?r[0]:r,a=s?r[1]:Ei.None;e?t.push({propName:o,templateName:i,isSignal:(a&Ei.SignalBased)!==0}):t.push({propName:o,templateName:i})}return t}function db(n){let e=n.toLowerCase();return e==="svg"?_m:e==="math"?B_:null}var ca=class extends aa{get inputs(){let e=this.componentDef,t=e.inputTransforms,i=Ip(e.inputs,!0);if(t!==null)for(let r of i)t.hasOwnProperty(r.propName)&&(r.transform=t[r.propName]);return i}get outputs(){return Ip(this.componentDef.outputs,!1)}constructor(e,t){super(),this.componentDef=e,this.ngModule=t,this.componentType=e.type,this.selector=y_(e.selectors),this.ngContentSelectors=e.ngContentSelectors?e.ngContentSelectors:[],this.isBoundToModule=!!t}create(e,t,i,r){let s=$e(null);try{r=r||this.ngModule;let o=r instanceof Si?r:r?.injector;o&&this.componentDef.getStandaloneInjector!==null&&(o=this.componentDef.getStandaloneInjector(o)||o);let a=o?new jl(e,o):e,c=a.get(Gr,null);if(c===null)throw new je(407,!1);let l=a.get(ub,null),u=a.get(Hr,null),d={rendererFactory:c,sanitizer:l,inlineEffectRunner:null,changeDetectionScheduler:u},h=c.createRenderer(null,this.componentDef),f=this.componentDef.selectors[0][0]||"div",g=i?_M(h,i,this.componentDef.encapsulation,a):lg(h,f,db(f)),v=512;this.componentDef.signals?v|=4096:this.componentDef.onPush||(v|=16);let m=null;g!==null&&(m=td(g,a,!0));let p=ad(0,null,null,1,0,null,null,null,null,null,null),b=Da(null,p,null,v,null,null,d,h,a,null,m);Wu(b);let M,E,L=null;try{let C=this.componentDef,D,O=null;C.findHostDirectiveDefs?(D=[],O=new Map,C.findHostDirectiveDefs(C,D,O),D.push(C)):D=[C];let w=hb(b,g);L=fb(w,g,C,D,b,d,h),E=zu(p,Tn),g&&gb(h,C,g,i),t!==void 0&&vb(E,this.ngContentSelectors,t),M=mb(L,C,D,O,b,[yb]),ld(p,b,null)}catch(C){throw L!==null&&Kl(L),Kl(b),C}finally{ju()}return new cu(this.componentType,M,Zr(E,b),b,E)}finally{$e(s)}}},cu=class extends ru{constructor(e,t,i,r,s){super(),this.location=i,this._rootLView=r,this._tNode=s,this.previousInputValues=null,this.instance=t,this.hostView=this.changeDetectorRef=new qs(r,void 0,!1),this.componentType=e}setInput(e,t){let i=this._tNode.inputs,r;if(i!==null&&(r=i[e])){if(this.previousInputValues??=new Map,this.previousInputValues.has(e)&&Object.is(this.previousInputValues.get(e),t))return;let s=this._rootLView;cd(s[Ne],s,r,e,t),this.previousInputValues.set(e,t);let o=Yr(this._tNode.index,s);ud(o,1)}}get injector(){return new Xi(this._tNode,this._rootLView)}destroy(){this.hostView.destroy()}onDestroy(e){this.hostView.onDestroy(e)}};function hb(n,e){let t=n[Ne],i=Tn;return n[i]=e,Ta(t,i,2,"#host",null)}function fb(n,e,t,i,r,s,o){let a=r[Ne];pb(i,n,e,o);let c=null;e!==null&&(c=td(e,r[kr]));let l=s.rendererFactory.createRenderer(e,t),u=16;t.signals?u=4096:t.onPush&&(u=64);let d=Da(r,Eg(t),null,u,r[n.index],n,s,l,null,null,c);return a.firstCreatePass&&tu(a,n,i.length-1),Aa(r,d),r[n.index]=d}function pb(n,e,t,i){for(let r of n)e.mergedAttrs=Ou(e.mergedAttrs,r.hostAttrs);e.mergedAttrs!==null&&(ou(e,e.mergedAttrs,!0),t!==null&&gg(i,t,e))}function mb(n,e,t,i,r,s){let o=Xn(),a=r[Ne],c=vn(o,r);Cg(a,r,o,t,null,i);for(let u=0;u<t.length;u++){let d=o.directiveStart+u,h=Br(r,a,d,o);Qi(h,r)}Dg(a,r,o),c&&Qi(c,r);let l=Br(r,a,o.directiveStart+o.componentOffset,o);if(n[zt]=r[zt]=l,s!==null)for(let u of s)u(l,e);return Mg(a,o,r),l}function gb(n,e,t,i){if(i)Fl(n,t,["ng-version","18.2.14"]);else{let{attrs:r,classes:s}=__(e.selectors[0]);r&&Fl(n,t,r),s&&s.length>0&&mg(n,t,s.join(" "))}}function vb(n,e,t){let i=n.projection=[];for(let r=0;r<e.length;r++){let s=t[r];i.push(s!=null?Array.from(s):null)}}function yb(){let n=Xn();Xu(ct()[Ne],n)}var Kr=(()=>{class n{static{this.__NG_ELEMENT_ID__=_b}}return n})();function _b(){let n=Xn();return Wg(n,ct())}var xb=Kr,Gg=class extends xb{constructor(e,t,i){super(),this._lContainer=e,this._hostTNode=t,this._hostLView=i}get element(){return Zr(this._hostTNode,this._hostLView)}get injector(){return new Xi(this._hostTNode,this._hostLView)}get parentInjector(){let e=Yu(this._hostTNode,this._hostLView);if(Um(e)){let t=ta(e,this._hostLView),i=ea(e),r=t[Ne].data[i+8];return new Xi(r,t)}else return new Xi(null,this._hostLView)}clear(){for(;this.length>0;)this.remove(this.length-1)}get(e){let t=Pp(this._lContainer);return t!==null&&t[e]||null}get length(){return this._lContainer.length-Ht}createEmbeddedView(e,t,i){let r,s;typeof i=="number"?r=i:i!=null&&(r=i.index,s=i.injector);let o=Xs(this._lContainer,e.ssrId),a=e.createEmbeddedViewImpl(t||{},s,o);return this.insertImpl(a,r,$s(this._hostTNode,o)),a}createComponent(e,t,i,r,s){let o=e&&!F_(e),a;if(o)a=t;else{let g=t||{};a=g.index,i=g.injector,r=g.projectableNodes,s=g.environmentInjector||g.ngModuleRef}let c=o?e:new ca(Fr(e)),l=i||this.parentInjector;if(!s&&c.ngModule==null){let v=(o?l:this.parentInjector).get(Si,null);v&&(s=v)}let u=Fr(c.componentType??{}),d=Xs(this._lContainer,u?.id??null),h=d?.firstChild??null,f=c.create(l,r,h,s);return this.insertImpl(f.hostView,a,$s(this._hostTNode,d)),f}insert(e,t){return this.insertImpl(e,t,!0)}insertImpl(e,t,i){let r=e._lView;if(z_(r)){let a=this.indexOf(e);if(a!==-1)this.detach(a);else{let c=r[Gt],l=new Gg(c,c[An],c[Gt]);l.detach(l.indexOf(e))}}let s=this._adjustIndex(t),o=this._lContainer;return Pa(o,r,s,i),e.attachToViewContainerRef(),Qp(Al(o),s,e),e}move(e,t){return this.insert(e,t)}indexOf(e){let t=Pp(this._lContainer);return t!==null?t.indexOf(e):-1}remove(e){let t=this._adjustIndex(e,-1),i=js(this._lContainer,t);i&&(Xo(Al(this._lContainer),t),Sa(i[Ne],i))}detach(e){let t=this._adjustIndex(e,-1),i=js(this._lContainer,t);return i&&Xo(Al(this._lContainer),t)!=null?new qs(i):null}_adjustIndex(e,t=0){return e??this.length+t}};function Pp(n){return n[Ko]}function Al(n){return n[Ko]||(n[Ko]=[])}function Wg(n,e){let t,i=e[n.index];return ai(i)?t=i:(t=Tg(i,e,null,n),e[n.index]=t,Aa(e,t)),bb(t,e,n,i),new Gg(t,n,e)}function Mb(n,e){let t=n[Wt],i=t.createComment(""),r=vn(e,n),s=fg(t,r);return sa(t,s,i,aM(t,r),!1),i}var bb=Sb,wb=()=>!1;function Eb(n,e,t){return wb(n,e,t)}function Sb(n,e,t,i){if(n[Zi])return;let r;t.type&8?r=qn(i):r=Mb(e,t),n[Zi]=r}var lu=class n{constructor(e){this.queryList=e,this.matches=null}clone(){return new n(this.queryList)}setDirty(){this.queryList.setDirty()}},uu=class n{constructor(e=[]){this.queries=e}createEmbeddedView(e){let t=e.queries;if(t!==null){let i=e.contentQueries!==null?e.contentQueries[0]:t.length,r=[];for(let s=0;s<i;s++){let o=t.getByIndex(s),a=this.queries[o.indexInDeclarationView];r.push(a.clone())}return new n(r)}return null}insertView(e){this.dirtyQueriesWithMatches(e)}detachView(e){this.dirtyQueriesWithMatches(e)}finishViewCreation(e){this.dirtyQueriesWithMatches(e)}dirtyQueriesWithMatches(e){for(let t=0;t<this.queries.length;t++)qg(e,t).matches!==null&&this.queries[t].setDirty()}},du=class{constructor(e,t,i=null){this.flags=t,this.read=i,typeof e=="string"?this.predicate=Rb(e):this.predicate=e}},hu=class n{constructor(e=[]){this.queries=e}elementStart(e,t){for(let i=0;i<this.queries.length;i++)this.queries[i].elementStart(e,t)}elementEnd(e){for(let t=0;t<this.queries.length;t++)this.queries[t].elementEnd(e)}embeddedTView(e){let t=null;for(let i=0;i<this.length;i++){let r=t!==null?t.length:0,s=this.getByIndex(i).embeddedTView(e,r);s&&(s.indexInDeclarationView=i,t!==null?t.push(s):t=[s])}return t!==null?new n(t):null}template(e,t){for(let i=0;i<this.queries.length;i++)this.queries[i].template(e,t)}getByIndex(e){return this.queries[e]}get length(){return this.queries.length}track(e){this.queries.push(e)}},fu=class n{constructor(e,t=-1){this.metadata=e,this.matches=null,this.indexInDeclarationView=-1,this.crossesNgTemplate=!1,this._appliesToNextNode=!0,this._declarationNodeIndex=t}elementStart(e,t){this.isApplyingToNode(t)&&this.matchTNode(e,t)}elementEnd(e){this._declarationNodeIndex===e.index&&(this._appliesToNextNode=!1)}template(e,t){this.elementStart(e,t)}embeddedTView(e,t){return this.isApplyingToNode(e)?(this.crossesNgTemplate=!0,this.addMatch(-e.index,t),new n(this.metadata)):null}isApplyingToNode(e){if(this._appliesToNextNode&&(this.metadata.flags&1)!==1){let t=this._declarationNodeIndex,i=e.parent;for(;i!==null&&i.type&8&&i.index!==t;)i=i.parent;return t===(i!==null?i.index:-1)}return this._appliesToNextNode}matchTNode(e,t){let i=this.metadata.predicate;if(Array.isArray(i))for(let r=0;r<i.length;r++){let s=i[r];this.matchTNodeWithReadOption(e,t,Cb(t,s)),this.matchTNodeWithReadOption(e,t,Wo(t,e,s,!1,!1))}else i===er?t.type&4&&this.matchTNodeWithReadOption(e,t,-1):this.matchTNodeWithReadOption(e,t,Wo(t,e,i,!1,!1))}matchTNodeWithReadOption(e,t,i){if(i!==null){let r=this.metadata.read;if(r!==null)if(r===rr||r===Kr||r===er&&t.type&4)this.addMatch(t.index,-2);else{let s=Wo(t,e,r,!1,!1);s!==null&&this.addMatch(t.index,s)}else this.addMatch(t.index,i)}}addMatch(e,t){this.matches===null?this.matches=[e,t]:this.matches.push(e,t)}};function Cb(n,e){let t=n.localNames;if(t!==null){for(let i=0;i<t.length;i+=2)if(t[i]===e)return t[i+1]}return null}function Db(n,e){return n.type&11?Zr(n,e):n.type&4?dd(n,e):null}function Tb(n,e,t,i){return t===-1?Db(e,n):t===-2?Ab(n,e,i):Br(n,n[Ne],t,e)}function Ab(n,e,t){if(t===rr)return Zr(e,n);if(t===er)return dd(e,n);if(t===Kr)return Wg(e,n)}function jg(n,e,t,i){let r=e[ii].queries[i];if(r.matches===null){let s=n.data,o=t.matches,a=[];for(let c=0;o!==null&&c<o.length;c+=2){let l=o[c];if(l<0)a.push(null);else{let u=s[l];a.push(Tb(e,u,o[c+1],t.metadata.read))}}r.matches=a}return r.matches}function pu(n,e,t,i){let r=n.queries.getByIndex(t),s=r.matches;if(s!==null){let o=jg(n,e,r,t);for(let a=0;a<s.length;a+=2){let c=s[a];if(c>0)i.push(o[a/2]);else{let l=s[a+1],u=e[-c];for(let d=Ht;d<u.length;d++){let h=u[d];h[Yi]===h[Gt]&&pu(h[Ne],h,l,i)}if(u[Ur]!==null){let d=u[Ur];for(let h=0;h<d.length;h++){let f=d[h];pu(f[Ne],f,l,i)}}}}}return i}function $g(n,e){return n[ii].queries[e].queryList}function Ib(n,e,t){let i=new Jl((t&4)===4);return bM(n,e,i,i.destroy),(e[ii]??=new uu).queries.push(new lu(i))-1}function Pb(n,e,t){let i=In();return i.firstCreatePass&&(Nb(i,new du(n,e,t),-1),(e&2)===2&&(i.staticViewQueries=!0)),Ib(i,ct(),e)}function Rb(n){return n.split(",").map(e=>e.trim())}function Nb(n,e,t){n.queries===null&&(n.queries=new hu),n.queries.track(new fu(e,t))}function qg(n,e){return n.queries.getByIndex(e)}function Ob(n,e){let t=n[Ne],i=qg(t,e);return i.crossesNgTemplate?pu(t,n,e,[]):jg(t,n,i,e)}var Rp=new Set;function sr(n){Rp.has(n)||(Rp.add(n),performance?.mark?.("mark_feature_usage",{detail:{feature:n}}))}function Rt(n,e){sr("NgSignals");let t=zf(n),i=t[Bn];return e?.equal&&(i.equal=e.equal),t.set=r=>dl(i,r),t.update=r=>Hf(i,r),t.asReadonly=Lb.bind(t),t}function Lb(){let n=this[Bn];if(n.readonlyFn===void 0){let e=()=>this();e[Bn]=n,n.readonlyFn=e}return n.readonlyFn}function Xg(n,e){let t,i=ul(()=>{t._dirtyCounter();let r=Vb(t,n);if(e&&r===void 0)throw new je(-951,!1);return r});return t=i[Bn],t._dirtyCounter=Rt(0),t._flatValue=void 0,i}function Fb(){return Xg(!0,!1)}function kb(){return Xg(!0,!0)}function Ub(n,e){let t=n[Bn];t._lView=ct(),t._queryIndex=e,t._queryList=$g(t._lView,e),t._queryList.onDirty(()=>t._dirtyCounter.update(i=>i+1))}function Vb(n,e){let t=n._lView,i=n._queryIndex;if(t===void 0||i===void 0||t[Ae]&4)return e?void 0:mn;let r=$g(t,i),s=Ob(t,i);return r.reset(s,Fx),e?r.first:r._changesDetected||n._flatValue===void 0?n._flatValue=r.toArray():n._flatValue}function Np(n,e){return Fb()}function Bb(n,e){return kb()}var Ut=(Np.required=Bb,Np);var Wr=class{};var la=class extends Wr{constructor(e){super(),this.componentFactoryResolver=new au(this),this.instance=null;let t=new Zo([...e.providers,{provide:Wr,useValue:this},{provide:Ys,useValue:this.componentFactoryResolver}],e.parent||ku(),e.debugName,new Set(["environment"]));this.injector=t,e.runEnvironmentInitializers&&t.resolveInjectorInitializers()}destroy(){this.injector.destroy()}onDestroy(e){this.injector.onDestroy(e)}};function zb(n,e,t=null){return new la({providers:n,parent:e,debugName:t,runEnvironmentInitializers:!0}).injector}function Yg(n){return Gb(n)?Array.isArray(n)||!(n instanceof Map)&&Symbol.iterator in n:!1}function Hb(n,e){if(Array.isArray(n))for(let t=0;t<n.length;t++)e(n[t]);else{let t=n[Symbol.iterator](),i;for(;!(i=t.next()).done;)e(i.value)}}function Gb(n){return n!==null&&(typeof n=="function"||typeof n=="object")}function Wb(n,e,t){return n[e]=t}function jb(n,e){return n[e]}function Qr(n,e,t){let i=n[e];return Object.is(i,t)?!1:(n[e]=t,!0)}function $b(n){return(n.flags&32)===32}function qb(n,e,t,i,r,s,o,a,c){let l=e.consts,u=Ta(e,n,4,o||null,a||null);Sg(e,t,u,Vr(l,c)),Xu(e,u);let d=u.tView=ad(2,u,i,r,s,e.directiveRegistry,e.pipeRegistry,null,e.schemas,l,null);return e.queries!==null&&(e.queries.template(e,u),d.queries=e.queries.embeddedTView(u)),u}function mu(n,e,t,i,r,s,o,a,c,l){let u=t+Tn,d=e.firstCreatePass?qb(u,e,n,i,r,s,o,a,c):e.data[u];Qs(d,!1);let h=Xb(e,n,d,t);$u()&&sd(e,n,h,d),Qi(h,n);let f=Tg(h,n,h,d);return n[u]=f,Aa(n,f),Eb(f,d,n),Vu(d)&&bg(e,n,d),c!=null&&wg(n,d,l),d}function yn(n,e,t,i,r,s,o,a){let c=ct(),l=In(),u=Vr(l.consts,s);return mu(c,l,n,e,t,i,r,u,o,a),yn}var Xb=Yb;function Yb(n,e,t,i){return qu(!0),e[Wt].createComment("")}var Fs=function(n){return n[n.EarlyRead=0]="EarlyRead",n[n.Write=1]="Write",n[n.MixedReadWrite=2]="MixedReadWrite",n[n.Read=3]="Read",n}(Fs||{}),Zb=(()=>{class n{constructor(){this.impl=null}execute(){this.impl?.execute()}static{this.\u0275prov=pt({token:n,providedIn:"root",factory:()=>new n})}}return n})(),Op=class n{constructor(){this.ngZone=ke(rt),this.scheduler=ke(Hr),this.errorHandler=ke(ri,{optional:!0}),this.sequences=new Set,this.deferredRegistrations=new Set,this.executing=!1}static{this.PHASES=[Fs.EarlyRead,Fs.Write,Fs.MixedReadWrite,Fs.Read]}execute(){this.executing=!0;for(let e of n.PHASES)for(let t of this.sequences)if(!(t.erroredOrDestroyed||!t.hooks[e]))try{t.pipelinedValue=this.ngZone.runOutsideAngular(()=>t.hooks[e](t.pipelinedValue))}catch(i){t.erroredOrDestroyed=!0,this.errorHandler?.handleError(i)}this.executing=!1;for(let e of this.sequences)e.afterRun(),e.once&&(this.sequences.delete(e),e.destroy());for(let e of this.deferredRegistrations)this.sequences.add(e);this.deferredRegistrations.size>0&&this.scheduler.notify(7),this.deferredRegistrations.clear()}register(e){this.executing?this.deferredRegistrations.add(e):(this.sequences.add(e),this.scheduler.notify(6))}unregister(e){this.executing&&this.sequences.has(e)?(e.erroredOrDestroyed=!0,e.pipelinedValue=void 0,e.once=!0):(this.sequences.delete(e),this.deferredRegistrations.delete(e))}static{this.\u0275prov=pt({token:n,providedIn:"root",factory:()=>new n})}};function Na(n,e,t,i){let r=ct(),s=eo();if(Qr(r,s,e)){let o=In(),a=Om();UM(a,r,n,e,t,i)}return Na}function Jb(n,e,t,i){return Qr(n,eo(),t)?e+ga(t)+i:Ci}function Vo(n,e){return n<<17|e<<2}function tr(n){return n>>17&32767}function Kb(n){return(n&2)==2}function Qb(n,e){return n&131071|e<<17}function gu(n){return n|2}function jr(n){return(n&131068)>>2}function Il(n,e){return n&-131069|e<<2}function ew(n){return(n&1)===1}function vu(n){return n|1}function tw(n,e,t,i,r,s){let o=s?e.classBindings:e.styleBindings,a=tr(o),c=jr(o);n[i]=t;let l=!1,u;if(Array.isArray(t)){let d=t;u=d[1],(u===null||Js(d,u)>0)&&(l=!0)}else u=t;if(r)if(c!==0){let h=tr(n[a+1]);n[i+1]=Vo(h,a),h!==0&&(n[h+1]=Il(n[h+1],i)),n[a+1]=Qb(n[a+1],i)}else n[i+1]=Vo(a,0),a!==0&&(n[a+1]=Il(n[a+1],i)),a=i;else n[i+1]=Vo(c,0),a===0?a=i:n[c+1]=Il(n[c+1],i),c=i;l&&(n[i+1]=gu(n[i+1])),Lp(n,u,i,!0),Lp(n,u,i,!1),nw(e,u,n,i,s),o=Vo(a,c),s?e.classBindings=o:e.styleBindings=o}function nw(n,e,t,i,r){let s=r?n.residualClasses:n.residualStyles;s!=null&&typeof e=="string"&&Js(s,e)>=0&&(t[i+1]=vu(t[i+1]))}function Lp(n,e,t,i){let r=n[t+1],s=e===null,o=i?tr(r):jr(r),a=!1;for(;o!==0&&(a===!1||s);){let c=n[o],l=n[o+1];iw(c,e)&&(a=!0,n[o+1]=i?vu(l):gu(l)),o=i?tr(l):jr(l)}a&&(n[t+1]=i?gu(r):vu(r))}function iw(n,e){return n===null||e==null||(Array.isArray(n)?n[1]:n)===e?!0:Array.isArray(n)&&typeof e=="string"?Js(n,e)>=0:!1}function jt(n,e,t){let i=ct(),r=eo();if(Qr(i,r,e)){let s=In(),o=Om();CM(s,o,i,n,e,i[Wt],t,!1)}return jt}function Fp(n,e,t,i,r){let s=e.inputs,o=r?"class":"style";cd(n,t,s[o],o,i)}function or(n,e,t){return Zg(n,e,t,!1),or}function Vt(n,e){return Zg(n,e,null,!0),Vt}function Zg(n,e,t,i){let r=ct(),s=In(),o=ex(2);if(s.firstUpdatePass&&sw(s,n,o,i),e!==Ci&&Qr(r,o,e)){let a=s.data[nr()];uw(s,a,r,r[Wt],n,r[o+1]=dw(e,t),i,o)}}function rw(n,e){return e>=n.expandoStartIndex}function sw(n,e,t,i){let r=n.data;if(r[t+1]===null){let s=r[nr()],o=rw(n,t);hw(s,i)&&e===null&&!o&&(e=!1),e=ow(r,s,e,i),tw(r,s,e,t,o,i)}}function ow(n,e,t,i){let r=rx(n),s=i?e.residualClasses:e.residualStyles;if(r===null)(i?e.classBindings:e.styleBindings)===0&&(t=Pl(null,n,e,t,i),t=Zs(t,e.attrs,i),s=null);else{let o=e.directiveStylingLast;if(o===-1||n[o]!==r)if(t=Pl(r,n,e,t,i),s===null){let c=aw(n,e,i);c!==void 0&&Array.isArray(c)&&(c=Pl(null,n,e,c[1],i),c=Zs(c,e.attrs,i),cw(n,e,i,c))}else s=lw(n,e,i)}return s!==void 0&&(i?e.residualClasses=s:e.residualStyles=s),t}function aw(n,e,t){let i=t?e.classBindings:e.styleBindings;if(jr(i)!==0)return n[tr(i)]}function cw(n,e,t,i){let r=t?e.classBindings:e.styleBindings;n[tr(r)]=i}function lw(n,e,t){let i,r=e.directiveEnd;for(let s=1+e.directiveStylingLast;s<r;s++){let o=n[s].hostAttrs;i=Zs(i,o,t)}return Zs(i,e.attrs,t)}function Pl(n,e,t,i,r){let s=null,o=t.directiveEnd,a=t.directiveStylingLast;for(a===-1?a=t.directiveStart:a++;a<o&&(s=e[a],i=Zs(i,s.hostAttrs,r),s!==n);)a++;return n!==null&&(t.directiveStylingLast=a),i}function Zs(n,e,t){let i=t?1:2,r=-1;if(e!==null)for(let s=0;s<e.length;s++){let o=e[s];typeof o=="number"?r=o:r===i&&(Array.isArray(n)||(n=n===void 0?[]:["",n]),s_(n,o,t?!0:e[++s]))}return n===void 0?null:n}function uw(n,e,t,i,r,s,o,a){if(!(e.type&3))return;let c=n.data,l=c[a+1],u=ew(l)?kp(c,e,t,r,jr(l),o):void 0;if(!ua(u)){ua(s)||Kb(l)&&(s=kp(c,null,t,r,a,o));let d=xm(nr(),t);pM(i,o,d,r,s)}}function kp(n,e,t,i,r,s){let o=e===null,a;for(;r>0;){let c=n[r],l=Array.isArray(c),u=l?c[1]:c,d=u===null,h=t[r+1];h===Ci&&(h=d?mn:void 0);let f=d?Ml(h,i):u===i?h:void 0;if(l&&!ua(f)&&(f=Ml(c,i)),ua(f)&&(a=f,o))return a;let g=n[r+1];r=o?tr(g):jr(g)}if(e!==null){let c=s?e.residualClasses:e.residualStyles;c!=null&&(a=Ml(c,i))}return a}function ua(n){return n!==void 0}function dw(n,e){return n==null||n===""||(typeof e=="string"?n=n+e:typeof n=="object"&&(n=ln(Ea(n)))),n}function hw(n,e){return(n.flags&(e?8:16))!==0}var yu=class{destroy(e){}updateValue(e,t){}swap(e,t){let i=Math.min(e,t),r=Math.max(e,t),s=this.detach(r);if(r-i>1){let o=this.detach(i);this.attach(i,s),this.attach(r,o)}else this.attach(i,s)}move(e,t){this.attach(t,this.detach(e))}};function Rl(n,e,t,i,r){return n===t&&Object.is(e,i)?1:Object.is(r(n,e),r(t,i))?-1:0}function fw(n,e,t){let i,r,s=0,o=n.length-1,a=void 0;if(Array.isArray(e)){let c=e.length-1;for(;s<=o&&s<=c;){let l=n.at(s),u=e[s],d=Rl(s,l,s,u,t);if(d!==0){d<0&&n.updateValue(s,u),s++;continue}let h=n.at(o),f=e[c],g=Rl(o,h,c,f,t);if(g!==0){g<0&&n.updateValue(o,f),o--,c--;continue}let v=t(s,l),m=t(o,h),p=t(s,u);if(Object.is(p,m)){let b=t(c,f);Object.is(b,v)?(n.swap(s,o),n.updateValue(o,f),c--,o--):n.move(o,s),n.updateValue(s,u),s++;continue}if(i??=new da,r??=Vp(n,s,o,t),_u(n,i,s,p))n.updateValue(s,u),s++,o++;else if(r.has(p))i.set(v,n.detach(s)),o--;else{let b=n.create(s,e[s]);n.attach(s,b),s++,o++}}for(;s<=c;)Up(n,i,t,s,e[s]),s++}else if(e!=null){let c=e[Symbol.iterator](),l=c.next();for(;!l.done&&s<=o;){let u=n.at(s),d=l.value,h=Rl(s,u,s,d,t);if(h!==0)h<0&&n.updateValue(s,d),s++,l=c.next();else{i??=new da,r??=Vp(n,s,o,t);let f=t(s,d);if(_u(n,i,s,f))n.updateValue(s,d),s++,o++,l=c.next();else if(!r.has(f))n.attach(s,n.create(s,d)),s++,o++,l=c.next();else{let g=t(s,u);i.set(g,n.detach(s)),o--}}}for(;!l.done;)Up(n,i,t,n.length,l.value),l=c.next()}for(;s<=o;)n.destroy(n.detach(o--));i?.forEach(c=>{n.destroy(c)})}function _u(n,e,t,i){return e!==void 0&&e.has(i)?(n.attach(t,e.get(i)),e.delete(i),!0):!1}function Up(n,e,t,i,r){if(_u(n,e,i,t(i,r)))n.updateValue(i,r);else{let s=n.create(i,r);n.attach(i,s)}}function Vp(n,e,t,i){let r=new Set;for(let s=e;s<=t;s++)r.add(i(s,n.at(s)));return r}var da=class{constructor(){this.kvMap=new Map,this._vMap=void 0}has(e){return this.kvMap.has(e)}delete(e){if(!this.has(e))return!1;let t=this.kvMap.get(e);return this._vMap!==void 0&&this._vMap.has(t)?(this.kvMap.set(e,this._vMap.get(t)),this._vMap.delete(t)):this.kvMap.delete(e),!0}get(e){return this.kvMap.get(e)}set(e,t){if(this.kvMap.has(e)){let i=this.kvMap.get(e);this._vMap===void 0&&(this._vMap=new Map);let r=this._vMap;for(;r.has(i);)i=r.get(i);r.set(i,t)}else this.kvMap.set(e,t)}forEach(e){for(let[t,i]of this.kvMap)if(e(i,t),this._vMap!==void 0){let r=this._vMap;for(;r.has(i);)i=r.get(i),e(i,t)}}};function Oa(n,e){sr("NgControlFlow");let t=ct(),i=eo(),r=t[i]!==Ci?t[i]:-1,s=r!==-1?ha(t,Tn+r):void 0,o=0;if(Qr(t,i,n)){let a=$e(null);try{if(s!==void 0&&Og(s,o),n!==-1){let c=Tn+n,l=ha(t,c),u=wu(t[Ne],c),d=Xs(l,u.tView.ssrId),h=Ia(t,u,e,{dehydratedView:d});Pa(l,h,o,$s(u,d))}}finally{$e(a)}}else if(s!==void 0){let a=Ng(s,o);a!==void 0&&(a[zt]=e)}}var xu=class{constructor(e,t,i){this.lContainer=e,this.$implicit=t,this.$index=i}get $count(){return this.lContainer.length-Ht}};function Zn(n){return n}var Mu=class{constructor(e,t,i){this.hasEmptyBlock=e,this.trackByFn=t,this.liveCollection=i}};function Nt(n,e,t,i,r,s,o,a,c,l,u,d,h){sr("NgControlFlow");let f=ct(),g=In(),v=c!==void 0,m=ct(),p=a?o.bind(m[$n][zt]):o,b=new Mu(v,p);m[Tn+n]=b,mu(f,g,n+1,e,t,i,r,Vr(g.consts,s)),v&&mu(f,g,n+2,c,l,u,d,Vr(g.consts,h))}var bu=class extends yu{constructor(e,t,i){super(),this.lContainer=e,this.hostLView=t,this.templateTNode=i,this.operationsCounter=void 0,this.needsIndexUpdate=!1}get length(){return this.lContainer.length-Ht}at(e){return this.getLView(e)[zt].$implicit}attach(e,t){let i=t[Hs];this.needsIndexUpdate||=e!==this.length,Pa(this.lContainer,t,e,$s(this.templateTNode,i))}detach(e){return this.needsIndexUpdate||=e!==this.length-1,pw(this.lContainer,e)}create(e,t){let i=Xs(this.lContainer,this.templateTNode.tView.ssrId),r=Ia(this.hostLView,this.templateTNode,new xu(this.lContainer,t,e),{dehydratedView:i});return this.operationsCounter?.recordCreate(),r}destroy(e){Sa(e[Ne],e),this.operationsCounter?.recordDestroy()}updateValue(e,t){this.getLView(e)[zt].$implicit=t}reset(){this.needsIndexUpdate=!1,this.operationsCounter?.reset()}updateIndexes(){if(this.needsIndexUpdate)for(let e=0;e<this.length;e++)this.getLView(e)[zt].$index=e}getLView(e){return mw(this.lContainer,e)}};function Ot(n){let e=$e(null),t=nr();try{let i=ct(),r=i[Ne],s=i[t],o=t+1,a=ha(i,o);if(s.liveCollection===void 0){let l=wu(r,o);s.liveCollection=new bu(a,i,l)}else s.liveCollection.reset();let c=s.liveCollection;if(fw(c,n,s.trackByFn),c.updateIndexes(),s.hasEmptyBlock){let l=eo(),u=c.length===0;if(Qr(i,l,u)){let d=t+2,h=ha(i,d);if(u){let f=wu(r,d),g=Xs(h,f.tView.ssrId),v=Ia(i,f,void 0,{dehydratedView:g});Pa(h,v,0,$s(f,g))}else Og(h,0)}}}finally{$e(e)}}function ha(n,e){return n[e]}function pw(n,e){return js(n,e)}function mw(n,e){return Ng(n,e)}function wu(n,e){return zu(n,e)}function gw(n,e,t,i,r,s){let o=e.consts,a=Vr(o,r),c=Ta(e,n,2,i,a);return Sg(e,t,c,Vr(o,s)),c.attrs!==null&&ou(c,c.attrs,!1),c.mergedAttrs!==null&&ou(c,c.mergedAttrs,!0),e.queries!==null&&e.queries.elementStart(e,c),c}function V(n,e,t,i){let r=ct(),s=In(),o=Tn+n,a=r[Wt],c=s.firstCreatePass?gw(o,s,r,e,t,i):s.data[o],l=vw(s,r,c,a,e,n);r[o]=l;let u=Vu(c);return Qs(c,!0),gg(a,l,c),!$b(c)&&$u()&&sd(s,r,l,c),W_()===0&&Qi(l,r),j_(),u&&(bg(s,r,c),Mg(s,c,r)),i!==null&&wg(r,c),V}function z(){let n=Xn();Dm()?J_():(n=n.parent,Qs(n,!1));let e=n;X_(e)&&Y_(),$_();let t=In();return t.firstCreatePass&&(Xu(t,n),pm(n)&&t.queries.elementEnd(n)),e.classesWithoutHost!=null&&fx(e)&&Fp(t,e,ct(),e.classesWithoutHost,!0),e.stylesWithoutHost!=null&&px(e)&&Fp(t,e,ct(),e.stylesWithoutHost,!1),z}function Ce(n,e,t,i){return V(n,e,t,i),z(),Ce}var vw=(n,e,t,i,r,s)=>(qu(!0),lg(i,r,lx()));function ci(){return ct()}var fa="en-US";var yw=fa;function _w(n){typeof n=="string"&&(yw=n.toLowerCase().replace(/_/g,"-"))}var xw=(n,e,t)=>{};function $t(n,e,t,i){let r=ct(),s=In(),o=Xn();return bw(s,r,r[Wt],o,n,e,i),$t}function Mw(n,e,t,i){let r=n.cleanup;if(r!=null)for(let s=0;s<r.length-1;s+=2){let o=r[s];if(o===t&&r[s+1]===i){let a=e[Jo],c=r[s+2];return a.length>c?a[c]:null}typeof o=="string"&&(s+=2)}return null}function bw(n,e,t,i,r,s,o){let a=Vu(i),l=n.firstCreatePass&&Pg(n),u=e[zt],d=Ig(e),h=!0;if(i.type&3||o){let v=vn(i,e),m=o?o(v):v,p=d.length,b=o?E=>o(qn(E[i.index])):i.index,M=null;if(!o&&a&&(M=Mw(n,e,r,i.index)),M!==null){let E=M.__ngLastListenerFn__||M;E.__ngNextListenerFn__=s,M.__ngLastListenerFn__=s,h=!1}else{s=zp(i,e,u,s),xw(v,r,s);let E=t.listen(m,r,s);d.push(s,E),l&&l.push(r,b,p,p+1)}}else s=zp(i,e,u,s);let f=i.outputs,g;if(h&&f!==null&&(g=f[r])){let v=g.length;if(v)for(let m=0;m<v;m+=2){let p=g[m],b=g[m+1],L=e[p][b].subscribe(s),C=d.length;d.push(s,L),l&&l.push(r,i.index,C,-(C+1))}}}function Bp(n,e,t,i){let r=$e(null);try{return Hn(6,e,t),t(i)!==!1}catch(s){return Rg(n,s),!1}finally{Hn(7,e,t),$e(r)}}function zp(n,e,t,i){return function r(s){if(s===Function)return i;let o=n.componentOffset>-1?Yr(n.index,e):e;ud(o,5);let a=Bp(e,t,i,s),c=r.__ngNextListenerFn__;for(;c;)a=Bp(e,t,c,s)&&a,c=c.__ngNextListenerFn__;return a}}function en(n=1){return ax(n)}function Bt(n,e,t,i){Ub(n,Pb(e,t,i))}function Jn(n=1){Gu(sx()+n)}function X(n,e=""){let t=ct(),i=In(),r=n+Tn,s=i.firstCreatePass?Ta(i,r,1,e,null):i.data[r],o=ww(i,t,s,e,n);t[r]=o,$u()&&sd(i,t,o,s),Qs(s,!1)}var ww=(n,e,t,i,r)=>(qu(!0),Jx(e[Wt],i));function lt(n){return tn("",n,""),lt}function tn(n,e,t){let i=ct(),r=Jb(i,n,e,t);return r!==Ci&&HM(i,nr(),r),tn}var Ew=(()=>{class n{constructor(t){this._injector=t,this.cachedInjectors=new Map}getOrCreateStandaloneInjector(t){if(!t.standalone)return null;if(!this.cachedInjectors.has(t)){let i=lm(!1,t.type),r=i.length>0?zb([i],this._injector,`Standalone[${t.type.name}]`):null;this.cachedInjectors.set(t,r)}return this.cachedInjectors.get(t)}ngOnDestroy(){try{for(let t of this.cachedInjectors.values())t!==null&&t.destroy()}finally{this.cachedInjectors.clear()}}static{this.\u0275prov=pt({token:n,providedIn:"environment",factory:()=>new n(at(Si))})}}return n})();function Dt(n){sr("NgStandalone"),n.getStandaloneInjector=e=>e.get(Ew).getOrCreateStandaloneInjector(n)}function Jg(n,e,t){let i=K_()+n,r=ct();return r[i]===Ci?Wb(r,i,t?e.call(t):e()):jb(r,i)}var Kg=new Je("");function La(n){return!!n&&typeof n.then=="function"}function Qg(n){return!!n&&typeof n.subscribe=="function"}var Sw=new Je(""),e0=(()=>{class n{constructor(){this.initialized=!1,this.done=!1,this.donePromise=new Promise((t,i)=>{this.resolve=t,this.reject=i}),this.appInits=ke(Sw,{optional:!0})??[]}runInitializers(){if(this.initialized)return;let t=[];for(let r of this.appInits){let s=r();if(La(s))t.push(s);else if(Qg(s)){let o=new Promise((a,c)=>{s.subscribe({complete:a,error:c})});t.push(o)}}let i=()=>{this.done=!0,this.resolve()};Promise.all(t).then(()=>{i()}).catch(r=>{this.reject(r)}),t.length===0&&i(),this.initialized=!0}static{this.\u0275fac=function(i){return new(i||n)}}static{this.\u0275prov=pt({token:n,factory:n.\u0275fac,providedIn:"root"})}}return n})(),Cw=new Je("");function Dw(){Bf(()=>{throw new je(600,!1)})}function Tw(n){return n.isBoundToModule}var Aw=10;function Iw(n,e,t){try{let i=t();return La(i)?i.catch(r=>{throw e.runOutsideAngular(()=>n.handleError(r)),r}):i}catch(i){throw e.runOutsideAngular(()=>n.handleError(i)),i}}var to=(()=>{class n{constructor(){this._bootstrapListeners=[],this._runningTick=!1,this._destroyed=!1,this._destroyListeners=[],this._views=[],this.internalErrorHandler=ke(Ox),this.afterRenderManager=ke(Zb),this.zonelessEnabled=ke(Ra),this.dirtyFlags=0,this.deferredDirtyFlags=0,this.externalTestViews=new Set,this.beforeRender=new bi,this.afterTick=new bi,this.componentTypes=[],this.components=[],this.isStable=ke(wa).hasPendingTasks.pipe(xl(t=>!t)),this._injector=ke(Si)}get allViews(){return[...this.externalTestViews.keys(),...this._views]}get destroyed(){return this._destroyed}whenStable(){let t;return new Promise(i=>{t=this.isStable.subscribe({next:r=>{r&&i()}})}).finally(()=>{t.unsubscribe()})}get injector(){return this._injector}bootstrap(t,i){let r=t instanceof aa;if(!this._injector.get(e0).done){let h=!r&&b_(t),f=!1;throw new je(405,f)}let o;r?o=t:o=this._injector.get(Ys).resolveComponentFactory(t),this.componentTypes.push(o.componentType);let a=Tw(o)?void 0:this._injector.get(Wr),c=i||o.selector,l=o.create(zr.NULL,[],c,a),u=l.location.nativeElement,d=l.injector.get(Kg,null);return d?.registerApplication(u),l.onDestroy(()=>{this.detachView(l.hostView),jo(this.components,l),d?.unregisterApplication(u)}),this._loadComponent(l),l}tick(){this.zonelessEnabled||(this.dirtyFlags|=1),this._tick()}_tick(){if(this._runningTick)throw new je(101,!1);let t=$e(null);try{this._runningTick=!0,this.synchronize()}catch(i){this.internalErrorHandler(i)}finally{this._runningTick=!1,$e(t),this.afterTick.next()}}synchronize(){let t=null;this._injector.destroyed||(t=this._injector.get(Gr,null,{optional:!0})),this.dirtyFlags|=this.deferredDirtyFlags,this.deferredDirtyFlags=0;let i=0;for(;this.dirtyFlags!==0&&i++<Aw;)this.synchronizeOnce(t)}synchronizeOnce(t){if(this.dirtyFlags|=this.deferredDirtyFlags,this.deferredDirtyFlags=0,this.dirtyFlags&7){let i=!!(this.dirtyFlags&1);this.dirtyFlags&=-8,this.dirtyFlags|=8,this.beforeRender.next(i);for(let{_lView:r,notifyErrorHandler:s}of this._views)Pw(r,s,i,this.zonelessEnabled);if(this.dirtyFlags&=-5,this.syncDirtyFlagsWithViews(),this.dirtyFlags&7)return}else t?.begin?.(),t?.end?.();this.dirtyFlags&8&&(this.dirtyFlags&=-9,this.afterRenderManager.execute()),this.syncDirtyFlagsWithViews()}syncDirtyFlagsWithViews(){if(this.allViews.some(({_lView:t})=>Ma(t))){this.dirtyFlags|=2;return}else this.dirtyFlags&=-8}attachView(t){let i=t;this._views.push(i),i.attachToAppRef(this)}detachView(t){let i=t;jo(this._views,i),i.detachFromAppRef()}_loadComponent(t){this.attachView(t.hostView),this.tick(),this.components.push(t);let i=this._injector.get(Cw,[]);[...this._bootstrapListeners,...i].forEach(r=>r(t))}ngOnDestroy(){if(!this._destroyed)try{this._destroyListeners.forEach(t=>t()),this._views.slice().forEach(t=>t.destroy())}finally{this._destroyed=!0,this._views=[],this._bootstrapListeners=[],this._destroyListeners=[]}}onDestroy(t){return this._destroyListeners.push(t),()=>jo(this._destroyListeners,t)}destroy(){if(this._destroyed)throw new je(406,!1);let t=this._injector;t.destroy&&!t.destroyed&&t.destroy()}get viewCount(){return this._views.length}warnIfDestroyed(){}static{this.\u0275fac=function(i){return new(i||n)}}static{this.\u0275prov=pt({token:n,factory:n.\u0275fac,providedIn:"root"})}}return n})();function jo(n,e){let t=n.indexOf(e);t>-1&&n.splice(t,1)}function Pw(n,e,t,i){if(!t&&!Ma(n))return;kg(n,e,t&&!i?0:1)}var Rw=(()=>{class n{constructor(){this.zone=ke(rt),this.changeDetectionScheduler=ke(Hr),this.applicationRef=ke(to)}initialize(){this._onMicrotaskEmptySubscription||(this._onMicrotaskEmptySubscription=this.zone.onMicrotaskEmpty.subscribe({next:()=>{this.changeDetectionScheduler.runningTick||this.zone.run(()=>{this.applicationRef.tick()})}}))}ngOnDestroy(){this._onMicrotaskEmptySubscription?.unsubscribe()}static{this.\u0275fac=function(i){return new(i||n)}}static{this.\u0275prov=pt({token:n,factory:n.\u0275fac,providedIn:"root"})}}return n})(),Nw=new Je("",{factory:()=>!1});function t0({ngZoneFactory:n,ignoreChangesOutsideZone:e,scheduleInRootZone:t}){return n??=()=>new rt(St(_t({},i0()),{scheduleInRootZone:t})),[{provide:rt,useFactory:n},{provide:zs,multi:!0,useFactory:()=>{let i=ke(Rw,{optional:!0});return()=>i.initialize()}},{provide:zs,multi:!0,useFactory:()=>{let i=ke(Ow);return()=>{i.initialize()}}},e===!0?{provide:zg,useValue:!0}:[],{provide:Hg,useValue:t??Xm}]}function n0(n){let e=n?.ignoreChangesOutsideZone,t=n?.scheduleInRootZone,i=t0({ngZoneFactory:()=>{let r=i0(n);return r.scheduleInRootZone=t,r.shouldCoalesceEventChangeDetection&&sr("NgZone_CoalesceEvent"),new rt(r)},ignoreChangesOutsideZone:e,scheduleInRootZone:t});return cm([{provide:Nw,useValue:!0},{provide:Ra,useValue:!1},i])}function i0(n){return{enableLongStackTrace:!1,shouldCoalesceEventChangeDetection:n?.eventCoalescing??!1,shouldCoalesceRunChangeDetection:n?.runCoalescing??!1}}var Ow=(()=>{class n{constructor(){this.subscription=new Zt,this.initialized=!1,this.zone=ke(rt),this.pendingTasks=ke(wa)}initialize(){if(this.initialized)return;this.initialized=!0;let t=null;!this.zone.isStable&&!this.zone.hasPendingMacrotasks&&!this.zone.hasPendingMicrotasks&&(t=this.pendingTasks.add()),this.zone.runOutsideAngular(()=>{this.subscription.add(this.zone.onStable.subscribe(()=>{rt.assertNotInAngularZone(),queueMicrotask(()=>{t!==null&&!this.zone.hasPendingMacrotasks&&!this.zone.hasPendingMicrotasks&&(this.pendingTasks.remove(t),t=null)})}))}),this.subscription.add(this.zone.onUnstable.subscribe(()=>{rt.assertInAngularZone(),t??=this.pendingTasks.add()}))}ngOnDestroy(){this.subscription.unsubscribe()}static{this.\u0275fac=function(i){return new(i||n)}}static{this.\u0275prov=pt({token:n,factory:n.\u0275fac,providedIn:"root"})}}return n})();var Lw=(()=>{class n{constructor(){this.appRef=ke(to),this.taskService=ke(wa),this.ngZone=ke(rt),this.zonelessEnabled=ke(Ra),this.disableScheduling=ke(zg,{optional:!0})??!1,this.zoneIsDefined=typeof Zone<"u"&&!!Zone.root.run,this.schedulerTickApplyArgs=[{data:{__scheduler_tick__:!0}}],this.subscriptions=new Zt,this.angularZoneId=this.zoneIsDefined?this.ngZone._inner?.get(ia):null,this.scheduleInRootZone=!this.zonelessEnabled&&this.zoneIsDefined&&(ke(Hg,{optional:!0})??!1),this.cancelScheduledCallback=null,this.useMicrotaskScheduler=!1,this.runningTick=!1,this.pendingRenderTaskId=null,this.subscriptions.add(this.appRef.afterTick.subscribe(()=>{this.runningTick||this.cleanup()})),this.subscriptions.add(this.ngZone.onUnstable.subscribe(()=>{this.runningTick||this.cleanup()})),this.disableScheduling||=!this.zonelessEnabled&&(this.ngZone instanceof Zl||!this.zoneIsDefined)}notify(t){if(!this.zonelessEnabled&&t===5)return;switch(t){case 0:{this.appRef.dirtyFlags|=2;break}case 3:case 2:case 4:case 5:case 1:{this.appRef.dirtyFlags|=4;break}case 7:{this.appRef.deferredDirtyFlags|=8;break}case 9:case 8:case 6:case 10:default:this.appRef.dirtyFlags|=8}if(!this.shouldScheduleTick())return;let i=this.useMicrotaskScheduler?bp:Zm;this.pendingRenderTaskId=this.taskService.add(),this.scheduleInRootZone?this.cancelScheduledCallback=Zone.root.run(()=>i(()=>this.tick())):this.cancelScheduledCallback=this.ngZone.runOutsideAngular(()=>i(()=>this.tick()))}shouldScheduleTick(){return!(this.disableScheduling||this.pendingRenderTaskId!==null||this.runningTick||this.appRef._runningTick||!this.zonelessEnabled&&this.zoneIsDefined&&Zone.current.get(ia+this.angularZoneId))}tick(){if(this.runningTick||this.appRef.destroyed)return;!this.zonelessEnabled&&this.appRef.dirtyFlags&7&&(this.appRef.dirtyFlags|=1);let t=this.taskService.add();try{this.ngZone.run(()=>{this.runningTick=!0,this.appRef._tick()},void 0,this.schedulerTickApplyArgs)}catch(i){throw this.taskService.remove(t),i}finally{this.cleanup()}this.useMicrotaskScheduler=!0,bp(()=>{this.useMicrotaskScheduler=!1,this.taskService.remove(t)})}ngOnDestroy(){this.subscriptions.unsubscribe(),this.cleanup()}cleanup(){if(this.runningTick=!1,this.cancelScheduledCallback?.(),this.cancelScheduledCallback=null,this.pendingRenderTaskId!==null){let t=this.pendingRenderTaskId;this.pendingRenderTaskId=null,this.taskService.remove(t)}}static{this.\u0275fac=function(i){return new(i||n)}}static{this.\u0275prov=pt({token:n,factory:n.\u0275fac,providedIn:"root"})}}return n})();function Fw(){return typeof $localize<"u"&&$localize.locale||fa}var hd=new Je("",{providedIn:"root",factory:()=>ke(hd,We.Optional|We.SkipSelf)||Fw()});var Eu=new Je("");function Bo(n){return!n.moduleRef}function kw(n){let e=Bo(n)?n.r3Injector:n.moduleRef.injector,t=e.get(rt);return t.run(()=>{Bo(n)?n.r3Injector.resolveInjectorInitializers():n.moduleRef.resolveInjectorInitializers();let i=e.get(ri,null),r;if(t.runOutsideAngular(()=>{r=t.onError.subscribe({next:s=>{i.handleError(s)}})}),Bo(n)){let s=()=>e.destroy(),o=n.platformInjector.get(Eu);o.add(s),e.onDestroy(()=>{r.unsubscribe(),o.delete(s)})}else{let s=()=>n.moduleRef.destroy(),o=n.platformInjector.get(Eu);o.add(s),n.moduleRef.onDestroy(()=>{jo(n.allPlatformModules,n.moduleRef),r.unsubscribe(),o.delete(s)})}return Iw(i,t,()=>{let s=e.get(e0);return s.runInitializers(),s.donePromise.then(()=>{let o=e.get(hd,fa);if(_w(o||fa),Bo(n)){let a=e.get(to);return n.rootComponent!==void 0&&a.bootstrap(n.rootComponent),a}else return Uw(n.moduleRef,n.allPlatformModules),n.moduleRef})})})}function Uw(n,e){let t=n.injector.get(to);if(n._bootstrapComponents.length>0)n._bootstrapComponents.forEach(i=>t.bootstrap(i));else if(n.instance.ngDoBootstrap)n.instance.ngDoBootstrap(t);else throw new je(-403,!1);e.push(n)}var $o=null,r0=new Je("");function Vw(n=[],e){return zr.create({name:e,providers:[{provide:_a,useValue:"platform"},{provide:Eu,useValue:new Set([()=>$o=null])},...n]})}function Bw(n=[]){if($o)return $o;let e=Vw(n);return e.get(r0,!1)||($o=e),Dw(),zw(e),e}function zw(n){n.get(Qu,null)?.forEach(t=>t())}var Su=class{constructor(){}supports(e){return Yg(e)}create(e){return new Cu(e)}},Hw=(n,e)=>e,Cu=class{constructor(e){this.length=0,this._linkedRecords=null,this._unlinkedRecords=null,this._previousItHead=null,this._itHead=null,this._itTail=null,this._additionsHead=null,this._additionsTail=null,this._movesHead=null,this._movesTail=null,this._removalsHead=null,this._removalsTail=null,this._identityChangesHead=null,this._identityChangesTail=null,this._trackByFn=e||Hw}forEachItem(e){let t;for(t=this._itHead;t!==null;t=t._next)e(t)}forEachOperation(e){let t=this._itHead,i=this._removalsHead,r=0,s=null;for(;t||i;){let o=!i||t&&t.currentIndex<Hp(i,r,s)?t:i,a=Hp(o,r,s),c=o.currentIndex;if(o===i)r--,i=i._nextRemoved;else if(t=t._next,o.previousIndex==null)r++;else{s||(s=[]);let l=a-r,u=c-r;if(l!=u){for(let h=0;h<l;h++){let f=h<s.length?s[h]:s[h]=0,g=f+h;u<=g&&g<l&&(s[h]=f+1)}let d=o.previousIndex;s[d]=u-l}}a!==c&&e(o,a,c)}}forEachPreviousItem(e){let t;for(t=this._previousItHead;t!==null;t=t._nextPrevious)e(t)}forEachAddedItem(e){let t;for(t=this._additionsHead;t!==null;t=t._nextAdded)e(t)}forEachMovedItem(e){let t;for(t=this._movesHead;t!==null;t=t._nextMoved)e(t)}forEachRemovedItem(e){let t;for(t=this._removalsHead;t!==null;t=t._nextRemoved)e(t)}forEachIdentityChange(e){let t;for(t=this._identityChangesHead;t!==null;t=t._nextIdentityChange)e(t)}diff(e){if(e==null&&(e=[]),!Yg(e))throw new je(900,!1);return this.check(e)?this:null}onDestroy(){}check(e){this._reset();let t=this._itHead,i=!1,r,s,o;if(Array.isArray(e)){this.length=e.length;for(let a=0;a<this.length;a++)s=e[a],o=this._trackByFn(a,s),t===null||!Object.is(t.trackById,o)?(t=this._mismatch(t,s,o,a),i=!0):(i&&(t=this._verifyReinsertion(t,s,o,a)),Object.is(t.item,s)||this._addIdentityChange(t,s)),t=t._next}else r=0,Hb(e,a=>{o=this._trackByFn(r,a),t===null||!Object.is(t.trackById,o)?(t=this._mismatch(t,a,o,r),i=!0):(i&&(t=this._verifyReinsertion(t,a,o,r)),Object.is(t.item,a)||this._addIdentityChange(t,a)),t=t._next,r++}),this.length=r;return this._truncate(t),this.collection=e,this.isDirty}get isDirty(){return this._additionsHead!==null||this._movesHead!==null||this._removalsHead!==null||this._identityChangesHead!==null}_reset(){if(this.isDirty){let e;for(e=this._previousItHead=this._itHead;e!==null;e=e._next)e._nextPrevious=e._next;for(e=this._additionsHead;e!==null;e=e._nextAdded)e.previousIndex=e.currentIndex;for(this._additionsHead=this._additionsTail=null,e=this._movesHead;e!==null;e=e._nextMoved)e.previousIndex=e.currentIndex;this._movesHead=this._movesTail=null,this._removalsHead=this._removalsTail=null,this._identityChangesHead=this._identityChangesTail=null}}_mismatch(e,t,i,r){let s;return e===null?s=this._itTail:(s=e._prev,this._remove(e)),e=this._unlinkedRecords===null?null:this._unlinkedRecords.get(i,null),e!==null?(Object.is(e.item,t)||this._addIdentityChange(e,t),this._reinsertAfter(e,s,r)):(e=this._linkedRecords===null?null:this._linkedRecords.get(i,r),e!==null?(Object.is(e.item,t)||this._addIdentityChange(e,t),this._moveAfter(e,s,r)):e=this._addAfter(new Du(t,i),s,r)),e}_verifyReinsertion(e,t,i,r){let s=this._unlinkedRecords===null?null:this._unlinkedRecords.get(i,null);return s!==null?e=this._reinsertAfter(s,e._prev,r):e.currentIndex!=r&&(e.currentIndex=r,this._addToMoves(e,r)),e}_truncate(e){for(;e!==null;){let t=e._next;this._addToRemovals(this._unlink(e)),e=t}this._unlinkedRecords!==null&&this._unlinkedRecords.clear(),this._additionsTail!==null&&(this._additionsTail._nextAdded=null),this._movesTail!==null&&(this._movesTail._nextMoved=null),this._itTail!==null&&(this._itTail._next=null),this._removalsTail!==null&&(this._removalsTail._nextRemoved=null),this._identityChangesTail!==null&&(this._identityChangesTail._nextIdentityChange=null)}_reinsertAfter(e,t,i){this._unlinkedRecords!==null&&this._unlinkedRecords.remove(e);let r=e._prevRemoved,s=e._nextRemoved;return r===null?this._removalsHead=s:r._nextRemoved=s,s===null?this._removalsTail=r:s._prevRemoved=r,this._insertAfter(e,t,i),this._addToMoves(e,i),e}_moveAfter(e,t,i){return this._unlink(e),this._insertAfter(e,t,i),this._addToMoves(e,i),e}_addAfter(e,t,i){return this._insertAfter(e,t,i),this._additionsTail===null?this._additionsTail=this._additionsHead=e:this._additionsTail=this._additionsTail._nextAdded=e,e}_insertAfter(e,t,i){let r=t===null?this._itHead:t._next;return e._next=r,e._prev=t,r===null?this._itTail=e:r._prev=e,t===null?this._itHead=e:t._next=e,this._linkedRecords===null&&(this._linkedRecords=new pa),this._linkedRecords.put(e),e.currentIndex=i,e}_remove(e){return this._addToRemovals(this._unlink(e))}_unlink(e){this._linkedRecords!==null&&this._linkedRecords.remove(e);let t=e._prev,i=e._next;return t===null?this._itHead=i:t._next=i,i===null?this._itTail=t:i._prev=t,e}_addToMoves(e,t){return e.previousIndex===t||(this._movesTail===null?this._movesTail=this._movesHead=e:this._movesTail=this._movesTail._nextMoved=e),e}_addToRemovals(e){return this._unlinkedRecords===null&&(this._unlinkedRecords=new pa),this._unlinkedRecords.put(e),e.currentIndex=null,e._nextRemoved=null,this._removalsTail===null?(this._removalsTail=this._removalsHead=e,e._prevRemoved=null):(e._prevRemoved=this._removalsTail,this._removalsTail=this._removalsTail._nextRemoved=e),e}_addIdentityChange(e,t){return e.item=t,this._identityChangesTail===null?this._identityChangesTail=this._identityChangesHead=e:this._identityChangesTail=this._identityChangesTail._nextIdentityChange=e,e}},Du=class{constructor(e,t){this.item=e,this.trackById=t,this.currentIndex=null,this.previousIndex=null,this._nextPrevious=null,this._prev=null,this._next=null,this._prevDup=null,this._nextDup=null,this._prevRemoved=null,this._nextRemoved=null,this._nextAdded=null,this._nextMoved=null,this._nextIdentityChange=null}},Tu=class{constructor(){this._head=null,this._tail=null}add(e){this._head===null?(this._head=this._tail=e,e._nextDup=null,e._prevDup=null):(this._tail._nextDup=e,e._prevDup=this._tail,e._nextDup=null,this._tail=e)}get(e,t){let i;for(i=this._head;i!==null;i=i._nextDup)if((t===null||t<=i.currentIndex)&&Object.is(i.trackById,e))return i;return null}remove(e){let t=e._prevDup,i=e._nextDup;return t===null?this._head=i:t._nextDup=i,i===null?this._tail=t:i._prevDup=t,this._head===null}},pa=class{constructor(){this.map=new Map}put(e){let t=e.trackById,i=this.map.get(t);i||(i=new Tu,this.map.set(t,i)),i.add(e)}get(e,t){let i=e,r=this.map.get(i);return r?r.get(e,t):null}remove(e){let t=e.trackById;return this.map.get(t).remove(e)&&this.map.delete(t),e}get isEmpty(){return this.map.size===0}clear(){this.map.clear()}};function Hp(n,e,t){let i=n.previousIndex;if(i===null)return i;let r=0;return t&&i<t.length&&(r=t[i]),i+e+r}function Gp(){return new fd([new Su])}var fd=(()=>{class n{static{this.\u0275prov=pt({token:n,providedIn:"root",factory:Gp})}constructor(t){this.factories=t}static create(t,i){if(i!=null){let r=i.factories.slice();t=t.concat(r)}return new n(t)}static extend(t){return{provide:n,useFactory:i=>n.create(t,i||Gp()),deps:[[n,new t_,new Kp]]}}find(t){let i=this.factories.find(r=>r.supports(t));if(i!=null)return i;throw new je(901,!1)}}return n})();function s0(n){let{rootComponent:e,appProviders:t,platformProviders:i,platformRef:r}=n;try{let s=r?.injector??Bw(i);if(s.get(r0,!1)===!0&&!n.platformRef)throw new je(401,!1);let o=[t0({}),{provide:Hr,useExisting:Lw},...t||[]],a=new la({providers:o,parent:s,debugName:"",runEnvironmentInitializers:!1});return kw({r3Injector:a.injector,platformInjector:s,rootComponent:e})}catch(s){return Promise.reject(s)}}function pd(n,e){sr("NgSignals");let t=ul(n);return e?.equal&&(t[Bn].equal=e.equal),t}var d0=null;function vd(){return d0}function h0(n){d0??=n}var Fa=class{};var Ti=new Je("");function f0(n,e){e=encodeURIComponent(e);for(let t of n.split(";")){let i=t.indexOf("="),[r,s]=i==-1?[t,""]:[t.slice(0,i),t.slice(i+1)];if(r.trim()===e)return decodeURIComponent(s)}return null}var md=class{constructor(e,t,i,r){this.$implicit=e,this.ngForOf=t,this.index=i,this.count=r}get first(){return this.index===0}get last(){return this.index===this.count-1}get even(){return this.index%2===0}get odd(){return!this.even}},p0=(()=>{class n{set ngForOf(t){this._ngForOf=t,this._ngForOfDirty=!0}set ngForTrackBy(t){this._trackByFn=t}get ngForTrackBy(){return this._trackByFn}constructor(t,i,r){this._viewContainer=t,this._template=i,this._differs=r,this._ngForOf=null,this._ngForOfDirty=!0,this._differ=null}set ngForTemplate(t){t&&(this._template=t)}ngDoCheck(){if(this._ngForOfDirty){this._ngForOfDirty=!1;let t=this._ngForOf;if(!this._differ&&t)if(0)try{}catch{}else this._differ=this._differs.find(t).create(this.ngForTrackBy)}if(this._differ){let t=this._differ.diff(this._ngForOf);t&&this._applyChanges(t)}}_applyChanges(t){let i=this._viewContainer;t.forEachOperation((r,s,o)=>{if(r.previousIndex==null)i.createEmbeddedView(this._template,new md(r.item,this._ngForOf,-1,-1),o===null?void 0:o);else if(o==null)i.remove(s===null?void 0:s);else if(s!==null){let a=i.get(s);i.move(a,o),o0(a,r)}});for(let r=0,s=i.length;r<s;r++){let a=i.get(r).context;a.index=r,a.count=s,a.ngForOf=this._ngForOf}t.forEachIdentityChange(r=>{let s=i.get(r.currentIndex);o0(s,r)})}static ngTemplateContextGuard(t,i){return!0}static{this.\u0275fac=function(i){return new(i||n)(Di(Kr),Di(er),Di(fd))}}static{this.\u0275dir=ya({type:n,selectors:[["","ngFor","","ngForOf",""]],inputs:{ngForOf:"ngForOf",ngForTrackBy:"ngForTrackBy",ngForTemplate:"ngForTemplate"},standalone:!0})}}return n})();function o0(n,e){n.context.$implicit=e.item}var m0=(()=>{class n{constructor(t,i){this._viewContainer=t,this._context=new gd,this._thenTemplateRef=null,this._elseTemplateRef=null,this._thenViewRef=null,this._elseViewRef=null,this._thenTemplateRef=i}set ngIf(t){this._context.$implicit=this._context.ngIf=t,this._updateView()}set ngIfThen(t){a0("ngIfThen",t),this._thenTemplateRef=t,this._thenViewRef=null,this._updateView()}set ngIfElse(t){a0("ngIfElse",t),this._elseTemplateRef=t,this._elseViewRef=null,this._updateView()}_updateView(){this._context.$implicit?this._thenViewRef||(this._viewContainer.clear(),this._elseViewRef=null,this._thenTemplateRef&&(this._thenViewRef=this._viewContainer.createEmbeddedView(this._thenTemplateRef,this._context))):this._elseViewRef||(this._viewContainer.clear(),this._thenViewRef=null,this._elseTemplateRef&&(this._elseViewRef=this._viewContainer.createEmbeddedView(this._elseTemplateRef,this._context)))}static ngTemplateContextGuard(t,i){return!0}static{this.\u0275fac=function(i){return new(i||n)(Di(Kr),Di(er))}}static{this.\u0275dir=ya({type:n,selectors:[["","ngIf",""]],inputs:{ngIf:"ngIf",ngIfThen:"ngIfThen",ngIfElse:"ngIfElse"},standalone:!0})}}return n})(),gd=class{constructor(){this.$implicit=null,this.ngIf=null}};function a0(n,e){if(!!!(!e||e.createEmbeddedView))throw new Error(`${n} must be a TemplateRef, but received '${ln(e)}'.`)}var no=(()=>{class n{static{this.\u0275fac=function(i){return new(i||n)}}static{this.\u0275mod=qr({type:n})}static{this.\u0275inj=$r({})}}return n})(),g0="browser",jw="server";function yd(n){return n===jw}var ka=class{};var Md=class extends Fa{constructor(){super(...arguments),this.supportsDOMEvents=!0}},bd=class n extends Md{static makeCurrent(){h0(new n)}onAndCancel(e,t,i){return e.addEventListener(t,i),()=>{e.removeEventListener(t,i)}}dispatchEvent(e,t){e.dispatchEvent(t)}remove(e){e.remove()}createElement(e,t){return t=t||this.getDefaultDocument(),t.createElement(e)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(e){return e.nodeType===Node.ELEMENT_NODE}isShadowRoot(e){return e instanceof DocumentFragment}getGlobalEventTarget(e,t){return t==="window"?window:t==="document"?e:t==="body"?e.body:null}getBaseHref(e){let t=Xw();return t==null?null:Yw(t)}resetBaseElement(){io=null}getUserAgent(){return window.navigator.userAgent}getCookie(e){return f0(document.cookie,e)}},io=null;function Xw(){return io=io||document.querySelector("base"),io?io.getAttribute("href"):null}function Yw(n){return new URL(n,document.baseURI).pathname}var Zw=(()=>{class n{build(){return new XMLHttpRequest}static{this.\u0275fac=function(i){return new(i||n)}}static{this.\u0275prov=pt({token:n,factory:n.\u0275fac})}}return n})(),wd=new Je(""),x0=(()=>{class n{constructor(t,i){this._zone=i,this._eventNameToPlugin=new Map,t.forEach(r=>{r.manager=this}),this._plugins=t.slice().reverse()}addEventListener(t,i,r){return this._findPluginFor(i).addEventListener(t,i,r)}getZone(){return this._zone}_findPluginFor(t){let i=this._eventNameToPlugin.get(t);if(i)return i;if(i=this._plugins.find(s=>s.supports(t)),!i)throw new je(5101,!1);return this._eventNameToPlugin.set(t,i),i}static{this.\u0275fac=function(i){return new(i||n)(at(wd),at(rt))}}static{this.\u0275prov=pt({token:n,factory:n.\u0275fac})}}return n})(),Ua=class{constructor(e){this._doc=e}},_d="ng-app-id",M0=(()=>{class n{constructor(t,i,r,s={}){this.doc=t,this.appId=i,this.nonce=r,this.platformId=s,this.styleRef=new Map,this.hostNodes=new Set,this.styleNodesInDOM=this.collectServerRenderedStyles(),this.platformIsServer=yd(s),this.resetHostNodes()}addStyles(t){for(let i of t)this.changeUsageCount(i,1)===1&&this.onStyleAdded(i)}removeStyles(t){for(let i of t)this.changeUsageCount(i,-1)<=0&&this.onStyleRemoved(i)}ngOnDestroy(){let t=this.styleNodesInDOM;t&&(t.forEach(i=>i.remove()),t.clear());for(let i of this.getAllStyles())this.onStyleRemoved(i);this.resetHostNodes()}addHost(t){this.hostNodes.add(t);for(let i of this.getAllStyles())this.addStyleToHost(t,i)}removeHost(t){this.hostNodes.delete(t)}getAllStyles(){return this.styleRef.keys()}onStyleAdded(t){for(let i of this.hostNodes)this.addStyleToHost(i,t)}onStyleRemoved(t){let i=this.styleRef;i.get(t)?.elements?.forEach(r=>r.remove()),i.delete(t)}collectServerRenderedStyles(){let t=this.doc.head?.querySelectorAll(`style[${_d}="${this.appId}"]`);if(t?.length){let i=new Map;return t.forEach(r=>{r.textContent!=null&&i.set(r.textContent,r)}),i}return null}changeUsageCount(t,i){let r=this.styleRef;if(r.has(t)){let s=r.get(t);return s.usage+=i,s.usage}return r.set(t,{usage:i,elements:[]}),i}getStyleElement(t,i){let r=this.styleNodesInDOM,s=r?.get(i);if(s?.parentNode===t)return r.delete(i),s.removeAttribute(_d),s;{let o=this.doc.createElement("style");return this.nonce&&o.setAttribute("nonce",this.nonce),o.textContent=i,this.platformIsServer&&o.setAttribute(_d,this.appId),t.appendChild(o),o}}addStyleToHost(t,i){let r=this.getStyleElement(t,i),s=this.styleRef,o=s.get(i)?.elements;o?o.push(r):s.set(i,{elements:[r],usage:1})}resetHostNodes(){let t=this.hostNodes;t.clear(),t.add(this.doc.head)}static{this.\u0275fac=function(i){return new(i||n)(at(Ti),at(Ku),at(ed,8),at(Jr))}}static{this.\u0275prov=pt({token:n,factory:n.\u0275fac})}}return n})(),xd={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/",math:"http://www.w3.org/1998/Math/MathML"},Sd=/%COMP%/g,b0="%COMP%",Jw=`_nghost-${b0}`,Kw=`_ngcontent-${b0}`,Qw=!0,eE=new Je("",{providedIn:"root",factory:()=>Qw});function tE(n){return Kw.replace(Sd,n)}function nE(n){return Jw.replace(Sd,n)}function w0(n,e){return e.map(t=>t.replace(Sd,n))}var v0=(()=>{class n{constructor(t,i,r,s,o,a,c,l=null){this.eventManager=t,this.sharedStylesHost=i,this.appId=r,this.removeStylesOnCompDestroy=s,this.doc=o,this.platformId=a,this.ngZone=c,this.nonce=l,this.rendererByCompId=new Map,this.platformIsServer=yd(a),this.defaultRenderer=new ro(t,o,c,this.platformIsServer)}createRenderer(t,i){if(!t||!i)return this.defaultRenderer;this.platformIsServer&&i.encapsulation===Wn.ShadowDom&&(i=St(_t({},i),{encapsulation:Wn.Emulated}));let r=this.getOrCreateRenderer(t,i);return r instanceof Va?r.applyToHost(t):r instanceof so&&r.applyStyles(),r}getOrCreateRenderer(t,i){let r=this.rendererByCompId,s=r.get(i.id);if(!s){let o=this.doc,a=this.ngZone,c=this.eventManager,l=this.sharedStylesHost,u=this.removeStylesOnCompDestroy,d=this.platformIsServer;switch(i.encapsulation){case Wn.Emulated:s=new Va(c,l,i,this.appId,u,o,a,d);break;case Wn.ShadowDom:return new Ed(c,l,t,i,o,a,this.nonce,d);default:s=new so(c,l,i,u,o,a,d);break}r.set(i.id,s)}return s}ngOnDestroy(){this.rendererByCompId.clear()}static{this.\u0275fac=function(i){return new(i||n)(at(x0),at(M0),at(Ku),at(eE),at(Ti),at(Jr),at(rt),at(ed))}}static{this.\u0275prov=pt({token:n,factory:n.\u0275fac})}}return n})(),ro=class{constructor(e,t,i,r){this.eventManager=e,this.doc=t,this.ngZone=i,this.platformIsServer=r,this.data=Object.create(null),this.throwOnSyntheticProps=!0,this.destroyNode=null}destroy(){}createElement(e,t){return t?this.doc.createElementNS(xd[t]||t,e):this.doc.createElement(e)}createComment(e){return this.doc.createComment(e)}createText(e){return this.doc.createTextNode(e)}appendChild(e,t){(y0(e)?e.content:e).appendChild(t)}insertBefore(e,t,i){e&&(y0(e)?e.content:e).insertBefore(t,i)}removeChild(e,t){t.remove()}selectRootElement(e,t){let i=typeof e=="string"?this.doc.querySelector(e):e;if(!i)throw new je(-5104,!1);return t||(i.textContent=""),i}parentNode(e){return e.parentNode}nextSibling(e){return e.nextSibling}setAttribute(e,t,i,r){if(r){t=r+":"+t;let s=xd[r];s?e.setAttributeNS(s,t,i):e.setAttribute(t,i)}else e.setAttribute(t,i)}removeAttribute(e,t,i){if(i){let r=xd[i];r?e.removeAttributeNS(r,t):e.removeAttribute(`${i}:${t}`)}else e.removeAttribute(t)}addClass(e,t){e.classList.add(t)}removeClass(e,t){e.classList.remove(t)}setStyle(e,t,i,r){r&(si.DashCase|si.Important)?e.style.setProperty(t,i,r&si.Important?"important":""):e.style[t]=i}removeStyle(e,t,i){i&si.DashCase?e.style.removeProperty(t):e.style[t]=""}setProperty(e,t,i){e!=null&&(e[t]=i)}setValue(e,t){e.nodeValue=t}listen(e,t,i){if(typeof e=="string"&&(e=vd().getGlobalEventTarget(this.doc,e),!e))throw new Error(`Unsupported event target ${e} for event ${t}`);return this.eventManager.addEventListener(e,t,this.decoratePreventDefault(i))}decoratePreventDefault(e){return t=>{if(t==="__ngUnwrap__")return e;(this.platformIsServer?this.ngZone.runGuarded(()=>e(t)):e(t))===!1&&t.preventDefault()}}};function y0(n){return n.tagName==="TEMPLATE"&&n.content!==void 0}var Ed=class extends ro{constructor(e,t,i,r,s,o,a,c){super(e,s,o,c),this.sharedStylesHost=t,this.hostEl=i,this.shadowRoot=i.attachShadow({mode:"open"}),this.sharedStylesHost.addHost(this.shadowRoot);let l=w0(r.id,r.styles);for(let u of l){let d=document.createElement("style");a&&d.setAttribute("nonce",a),d.textContent=u,this.shadowRoot.appendChild(d)}}nodeOrShadowRoot(e){return e===this.hostEl?this.shadowRoot:e}appendChild(e,t){return super.appendChild(this.nodeOrShadowRoot(e),t)}insertBefore(e,t,i){return super.insertBefore(this.nodeOrShadowRoot(e),t,i)}removeChild(e,t){return super.removeChild(null,t)}parentNode(e){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(e)))}destroy(){this.sharedStylesHost.removeHost(this.shadowRoot)}},so=class extends ro{constructor(e,t,i,r,s,o,a,c){super(e,s,o,a),this.sharedStylesHost=t,this.removeStylesOnCompDestroy=r,this.styles=c?w0(c,i.styles):i.styles}applyStyles(){this.sharedStylesHost.addStyles(this.styles)}destroy(){this.removeStylesOnCompDestroy&&this.sharedStylesHost.removeStyles(this.styles)}},Va=class extends so{constructor(e,t,i,r,s,o,a,c){let l=r+"-"+i.id;super(e,t,i,s,o,a,c,l),this.contentAttr=tE(l),this.hostAttr=nE(l)}applyToHost(e){this.applyStyles(),this.setAttribute(e,this.hostAttr,"")}createElement(e,t){let i=super.createElement(e,t);return super.setAttribute(i,this.contentAttr,""),i}},iE=(()=>{class n extends Ua{constructor(t){super(t)}supports(t){return!0}addEventListener(t,i,r){return t.addEventListener(i,r,!1),()=>this.removeEventListener(t,i,r)}removeEventListener(t,i,r){return t.removeEventListener(i,r)}static{this.\u0275fac=function(i){return new(i||n)(at(Ti))}}static{this.\u0275prov=pt({token:n,factory:n.\u0275fac})}}return n})(),_0=["alt","control","meta","shift"],rE={"\b":"Backspace","	":"Tab","\x7F":"Delete","\x1B":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},sE={alt:n=>n.altKey,control:n=>n.ctrlKey,meta:n=>n.metaKey,shift:n=>n.shiftKey},oE=(()=>{class n extends Ua{constructor(t){super(t)}supports(t){return n.parseEventName(t)!=null}addEventListener(t,i,r){let s=n.parseEventName(i),o=n.eventCallback(s.fullKey,r,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>vd().onAndCancel(t,s.domEventName,o))}static parseEventName(t){let i=t.toLowerCase().split("."),r=i.shift();if(i.length===0||!(r==="keydown"||r==="keyup"))return null;let s=n._normalizeKey(i.pop()),o="",a=i.indexOf("code");if(a>-1&&(i.splice(a,1),o="code."),_0.forEach(l=>{let u=i.indexOf(l);u>-1&&(i.splice(u,1),o+=l+".")}),o+=s,i.length!=0||s.length===0)return null;let c={};return c.domEventName=r,c.fullKey=o,c}static matchEventFullKeyCode(t,i){let r=rE[t.key]||t.key,s="";return i.indexOf("code.")>-1&&(r=t.code,s="code."),r==null||!r?!1:(r=r.toLowerCase(),r===" "?r="space":r==="."&&(r="dot"),_0.forEach(o=>{if(o!==r){let a=sE[o];a(t)&&(s+=o+".")}}),s+=r,s===i)}static eventCallback(t,i,r){return s=>{n.matchEventFullKeyCode(s,t)&&r.runGuarded(()=>i(s))}}static _normalizeKey(t){return t==="esc"?"escape":t}static{this.\u0275fac=function(i){return new(i||n)(at(Ti))}}static{this.\u0275prov=pt({token:n,factory:n.\u0275fac})}}return n})();function E0(n,e,t){return s0(_t({rootComponent:n,platformRef:t?.platformRef},aE(e)))}function aE(n){return{appProviders:[...hE,...n?.providers??[]],platformProviders:dE}}function cE(){bd.makeCurrent()}function lE(){return new ri}function uE(){return ig(document),document}var dE=[{provide:Jr,useValue:g0},{provide:Qu,useValue:cE,multi:!0},{provide:Ti,useFactory:uE,deps:[]}];var hE=[{provide:_a,useValue:"root"},{provide:ri,useFactory:lE,deps:[]},{provide:wd,useClass:iE,multi:!0,deps:[Ti,rt,Jr]},{provide:wd,useClass:oE,multi:!0,deps:[Ti]},v0,M0,x0,{provide:Gr,useExisting:v0},{provide:ka,useClass:Zw,deps:[]},[]];function S0(n,e,t){let i={lens:`<radialGradient id="g"><stop offset="0%" stop-color="${e}" stop-opacity=".9"/><stop offset="60%" stop-color="${n}" stop-opacity=".3"/><stop offset="100%" stop-color="#0a0908"/></radialGradient><circle cx="400" cy="300" r="280" fill="url(%23g)"/><circle cx="400" cy="300" r="140" fill="none" stroke="${e}" stroke-opacity=".4" stroke-width="1"/><circle cx="400" cy="300" r="220" fill="none" stroke="${n}" stroke-opacity=".3" stroke-width="1"/>`,grid:`<linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="${n}" stop-opacity=".7"/><stop offset="100%" stop-color="${e}" stop-opacity=".3"/></linearGradient><rect width="800" height="600" fill="url(%23g)"/><g stroke="%23f5efe6" stroke-opacity=".15"><path d="M0,150 L800,150 M0,300 L800,300 M0,450 L800,450 M200,0 L200,600 M400,0 L400,600 M600,0 L600,600"/></g>`,bars:`<linearGradient id="g" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="${n}"/><stop offset="100%" stop-color="${e}"/></linearGradient><rect width="800" height="600" fill="%230a0908"/><rect x="100" y="100" width="60" height="400" fill="url(%23g)" opacity=".8"/><rect x="200" y="180" width="60" height="320" fill="url(%23g)" opacity=".6"/><rect x="300" y="80" width="60" height="420" fill="url(%23g)" opacity=".9"/><rect x="400" y="220" width="60" height="280" fill="url(%23g)" opacity=".5"/><rect x="500" y="140" width="60" height="360" fill="url(%23g)" opacity=".7"/><rect x="600" y="260" width="60" height="240" fill="url(%23g)" opacity=".4"/>`,wave:`<linearGradient id="g" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="${n}"/><stop offset="100%" stop-color="${e}"/></linearGradient><rect width="800" height="600" fill="%230a0908"/><path d="M0,300 Q200,200 400,300 T800,300" stroke="url(%23g)" stroke-width="3" fill="none" opacity=".8"/><path d="M0,350 Q200,250 400,350 T800,350" stroke="${e}" stroke-width="2" fill="none" opacity=".5"/><path d="M0,250 Q200,150 400,250 T800,250" stroke="${n}" stroke-width="2" fill="none" opacity=".5"/>`,frame:`<rect width="800" height="600" fill="%230a0908"/><rect x="80" y="60" width="640" height="480" fill="none" stroke="${n}" stroke-width="2" opacity=".7"/><rect x="120" y="100" width="560" height="400" fill="${e}" fill-opacity=".15"/><circle cx="400" cy="300" r="80" fill="${n}" fill-opacity=".4"/>`,strip:`<rect width="800" height="600" fill="%231a1917"/><g fill="${n}" fill-opacity=".6">${[...Array(8)].map((s,o)=>`<rect x="${o*100+20}" y="50" width="60" height="30"/><rect x="${o*100+20}" y="520" width="60" height="30"/>`).join("")}</g><rect x="20" y="120" width="760" height="360" fill="${e}" fill-opacity=".3"/>`,blur:`<radialGradient id="g" cx="30%" cy="40%"><stop offset="0%" stop-color="${n}" stop-opacity=".9"/><stop offset="100%" stop-color="%230a0908"/></radialGradient><radialGradient id="g2" cx="70%" cy="70%"><stop offset="0%" stop-color="${e}" stop-opacity=".6"/><stop offset="100%" stop-color="%230a0908" stop-opacity="0"/></radialGradient><rect width="800" height="600" fill="url(%23g)"/><rect width="800" height="600" fill="url(%23g2)"/>`};return`data:image/svg+xml;utf8,${`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice">${i[t]??i.lens}</svg>`}`}var C0=[{num:"01",label:"Skills",href:"#skills"},{num:"02",label:"Experience",href:"#experience"},{num:"03",label:"Work",href:"#work"},{num:"04",label:"Contact",href:"#contact"}],ar=[{num:"C / 01",title:"Cinematography",desc:"Framing the ordinary until it resists being ordinary. Handheld energy or locked-off patience \u2014 whichever the story earns.",tools:["Sony FX6","RED Komodo","Alexa Mini","DJI Ronin"]},{num:"C / 02",title:"Editing",desc:"Finding the cut that breathes. Rhythm before rules, emotion before montage tricks.",tools:["Premiere Pro","DaVinci Resolve","Final Cut"]},{num:"C / 03",title:"VFX & Comp",desc:"Invisible fixes and impossible frames. Keying, rotoscope, motion tracking, clean-plating, beauty work.",tools:["After Effects","Nuke","Mocha","Photoshop"]},{num:"C / 04",title:"Colour",desc:"Grading is the second script. Look development, LUTs, match-grade across scenes and cameras.",tools:["DaVinci","Lumetri","Baselight"]},{num:"C / 05",title:"AI Integrations",desc:"Using generative tools as a brush, not a crutch \u2014 extending plates, concepting looks, and accelerating pre-viz.",tools:["Runway","Kling","Midjourney","Sora"]},{num:"C / 06",title:"Direction",desc:"Translating a brief into a frame. Working with talent, sound, and production design until it all rhymes.",tools:["Storyboarding","Shot-listing","Pre-viz"]}],D0=[{year:"2023-24(oct)",role:"Cinematographer / Editor / VFX Artist",place:"EIPI MEDIA",placeDetail:"End-to-end production for digital-first brand experiences.",location:"Mumbai",reveal:"Spearheaded technical production pipelines, bridging the gap between raw cinematography and VFX-heavy final edits for 20+ brands."},{year:"2024(dec)-2025(july)",role:"Editor and vfx artist",place:"TVA",placeDetail:"Post-production lead for narrative and stylised content.",location:"Mumbai",reveal:"Managed complex multi-camera edits and integrated high-end VFX/compositing to elevate digital and television spots."},{year:"2025(aug-nov)",role:"Cinematographer and editor",place:"Goldcoast films",placeDetail:"Crafting cinematic visuals and pacing for high-end digital campaigns.",location:"Mumbai / Global",reveal:"Led the visual storytelling on commercial sets and final post-production, ensuring a premium brand aesthetic across all deliverables."},{year:"Freelance / Ongoing",role:"Contract Editor",place:"Abstract dxb",placeDetail:"International creative collaborations.",location:"Dubai / Remote",reveal:"Delivering tailored editing solutions for international agencies, focusing on premium lifestyle and brand content with a fast turnaround."}],Ba=[{title:"Nestasia Kitchen",cat:"cine",brand:"Nestasia",img:"/assets/logos/cine/01_nestasia/nestasia-kitchen.jpg",video:"/assets/logos/cine/01_nestasia/NESTASIA-X-SANYA_SCRIPT-3-(HORIZONTAL)_HR.mp4"},{title:"VK Magic Tricks",cat:"cine",brand:"Ocean",img:"/assets/logos/cine/02_ocean/virat-magic.jpg",video:"/assets/logos/cine/02_ocean/VK-&-Rohit_MAGIC-TRICKS_11.27.2023.mp4"},{title:"Mira Edit",cat:"cine",brand:"Orion",img:"/assets/logos/cine/03_orion/orion-mira.jpg",video:"/assets/logos/cine/03_orion/ORION-x-MIRA-EDIT_11.01.2023_40-SEC_HORIZONTAL_HR.mp4"},{title:"Nestasia Room",cat:"cine",brand:"Nestasia",img:"/assets/logos/cine/01_nestasia/nestasia-room.jpg",video:"/assets/logos/cine/01_nestasia/NESTASIA-X-SANYA_SCRIPT-2-(HORIZONTAL)_HR_1.mp4"},{title:"VK Clone",cat:"cine",brand:"Ocean",img:"/assets/logos/cine/02_ocean/virat-clone.jpg",video:"/assets/logos/cine/02_ocean/VK-x-Clone_30.0_Horizontal.mp4",imgPosition:"80% center"},{title:"Neha x Angad",cat:"cine",brand:"Giva",img:"/assets/logos/cine/04_giva/neha-giva.jpg",video:"/assets/logos/cine/04_giva/NEHA-X-ANGAD_01.15.2024_TRAILER.mp4",imgPosition:"70% center"},{title:"Kapil Sharma",cat:"cine",brand:"HDFC Payzapp",img:"/assets/logos/cine/08_hdfc/hdfc-kapil.jpg",video:"/assets/logos/cine/08_hdfc/HDFC-Payzapp-x-Kapil-Sharma---Bill-Payments---11.01.2024_HR.mp4"},{title:"Black Bag",cat:"cine",brand:"Zouk",img:"/assets/logos/cine/09_zouk/zouk-black.png",video:"/assets/logos/cine/09_zouk/ZOUK-X-V5_-BLACK-BAG-25.2_HR.mp4"},{title:"KL Purpose",cat:"cine",brand:"Hyugalife",img:"/assets/logos/cine/05_hyugalife/hyugalife.jpg",video:"/assets/logos/cine/05_hyugalife/KL-x-Purpose_11.08.2023.mp4"},{title:"Tiger Shroff",cat:"cine",brand:"HDFC Payzapp",img:"/assets/logos/cine/08_hdfc/hdfc-tiger.jpg",video:"/assets/logos/cine/08_hdfc/HDFC-Payzapp-x-Tiger-Shroff_12.15.2023.mp4"},{title:"Footwear",cat:"cine",brand:"Zouk",img:"/assets/logos/cine/09_zouk/zouk-footwear.jpg",video:"/assets/logos/cine/09_zouk/ZOUK-x-V11_FOOTWEAR-FUNCTIONALITY_24.0_HR.mp4"},{title:"Awez",cat:"cine",brand:"Indigo",img:"/assets/logos/cine/06_indigo/indigo-awez.jpg",video:"/assets/logos/cine/06_indigo/INDIGOxAWEZ_2.1.mp4"},{title:"Combine Montage",cat:"cine",brand:"Virsa",img:"/assets/logos/cine/07_virsa/virsa-3.jpg",video:"/assets/logos/cine/07_virsa/VIRSA_combine-montage_V1_24.07.2024_HR.mp4"},{title:"Stopmotion",cat:"cine",brand:"Zouk",img:"/assets/logos/cine/09_zouk/zouk-stopmotion.png",video:"/assets/logos/cine/09_zouk/Zouk-x-V6_UNISEX-STOPMOTION_24.0_HR.mp4"},{title:"Coffee",cat:"edit",brand:"Plum",img:"/assets/logos/edit/01_plum/plum-kalyani.png",video:"/assets/logos/edit/01_plum/Plum-coffee_14.04.26.mp4"},{title:"Working Women",cat:"edit",brand:"Zouk",img:"/assets/logos/edit/03_zouk/sara-zouk1.jpg",video:"/assets/logos/edit/03_zouk/VIDEO-5-ZOUK-x-WORKING-WOMEN_-07.17.2023.mp4"},{title:"Campus Vedika",cat:"edit",brand:"Campus",img:"/assets/logos/edit/09_campus/campus-vedika.jpg",video:"/assets/logos/edit/09_campus/CAMPUS-x-VEDIKA_12.26.2023_HR.mp4"},{title:"Prateek Liberty",cat:"edit",brand:"Liberty",img:"/assets/logos/edit/04_liberty/liberty-prateek.png",video:"/assets/logos/edit/04_liberty/PRATEEK-LIBERTY_27.11.25.mp4"},{title:"Timely Reminders",cat:"edit",brand:"Mobikwik",img:"/assets/logos/edit/02_mobikwik/manoj-mobikwik.jpg",video:"/assets/logos/edit/02_mobikwik/MB-x-MOBIKWIK-_TIMELY-REMINDERS_09.08.2023_v2.mp4"},{title:"Sara Bags",cat:"edit",brand:"Zouk",img:"/assets/logos/edit/03_zouk/zouk-sara.jpg",video:"/assets/logos/edit/03_zouk/VIDEO-14-ZOUK-x-SARA-POSING-WITH-DIFFERENT-BAGS_07.17.2023.mp4"},{title:"Campus Vyomesh",cat:"edit",brand:"Campus",img:"/assets/logos/edit/09_campus/campus-vyomesh.jpg",video:"/assets/logos/edit/09_campus/vyomesh-x-campus_01.15.2024_HR.mp4"},{title:"Prateek Snitch",cat:"edit",brand:"Snitch",img:"/assets/logos/edit/06_snitch-prateek/snitch-prateek.png",video:"/assets/logos/edit/06_snitch-prateek/PRATEEK-X-SNITCH_28.1.mp4"},{title:"Scott Siwet",cat:"edit",brand:"Scott",img:"/assets/logos/edit/05_scott-siwet/scott-siwet.png",video:"/assets/logos/edit/05_scott-siwet/SCOTT-Siwet_02.12.25.mp4"},{title:"Shankara KK",cat:"edit",brand:"Shankara",img:"/assets/logos/edit/07_shankara/shankara.jpg",video:"/assets/logos/edit/07_shankara/KK-x-Shankara_script-B_11.16.2023.mp4"},{title:"Luna Beauty",cat:"edit",brand:"Luna",img:"/assets/logos/edit/08_luna-beauty/luna-beauty.png",video:"/assets/logos/edit/08_luna-beauty/luna-beauty.mp4"},{title:"Divyenndu",cat:"edit",brand:"HK Vitals",img:"/assets/logos/edit/10_hk-vitals/hk-vitals-divyendu.jpg",video:"/assets/logos/edit/10_hk-vitals/HK-Vitals-x-Divyenndu_VERTICAL_23.05.2024.mp4"},{title:"Aishwarya",cat:"edit",brand:"Cove & Lane",img:"/assets/logos/edit/11_cove-&-lane/cove-&-lane.png",video:"/assets/logos/edit/11_cove-&-lane/Cove-&-Lane-x-Aishwarya_26.0.mp4"},{title:"Aparshakti",cat:"edit",brand:"Ludic",img:"/assets/logos/edit/12_ludic/ludic-aparshakti.jpg",video:"/assets/logos/edit/12_ludic/LUDIC-x-APARSHAKTI_09.02.2024_HR.mp4"},{title:"Maggie",cat:"edit",brand:"APD",img:"/assets/logos/edit/13_apd-devang/apd-maggie.png",video:"/assets/logos/edit/13_apd-devang/APD-MAGGIE_29.10.25.mp4"},{title:"Giant Fruit",cat:"vfx",brand:"Ocean",img:"/assets/logos/vfx/01_ocean/ocean-fruit1.png",video:"/assets/logos/vfx/01_ocean/Virat-X-Giant_fruit.mp4"},{title:"Bread Range",cat:"vfx",brand:"Bakers Dozen",img:"/assets/logos/vfx/03_bakers-dozen/bakers-clone.jpg",video:"/assets/logos/vfx/03_bakers-dozen/BAKERS-DOZEN-x-SOHA_BREAD-RANGE.mp4"},{title:"Realme Riya",cat:"vfx",brand:"Realme",img:"/assets/logos/vfx/08_realme/realme-riya.png",video:"/assets/logos/vfx/08_realme/REALME-x-RIYA.mp4"},{title:"Pantaloons Study",cat:"vfx",brand:"Case Study",img:"/assets/logos/vfx/02_case-study/PANTALOONS-casestudy.png",video:"/assets/logos/vfx/02_case-study/Pantaloons-casestudy.mp4"},{title:"Flash Gordon",cat:"vfx",brand:"Ocean",img:"/assets/logos/vfx/01_ocean/ocean-flash1.png",video:"/assets/logos/vfx/01_ocean/Virat-x-ED_flash_gordon.mp4"},{title:"Cake Range",cat:"vfx",brand:"Bakers Dozen",img:"/assets/logos/vfx/03_bakers-dozen/bakers-queen.jpg",video:"/assets/logos/vfx/03_bakers-dozen/BAKERS-DOZEN-x-SOHA_CAKE-RANGE.mp4"},{title:"Realme Varun",cat:"vfx",brand:"Realme",img:"/assets/logos/vfx/08_realme/realme-varun.jpg",video:"/assets/logos/vfx/08_realme/REALME-x-VARUN-SHARMA.mp4"},{title:"Styleup AI Study",cat:"vfx",brand:"Case Study",img:"/assets/logos/vfx/02_case-study/AI-casestudy-.png",video:"/assets/logos/vfx/02_case-study/Styleup-AI-Case-Study_04.03.25.mp4"},{title:"House of Myntra",cat:"vfx",brand:"Myntra",img:"/assets/logos/vfx/04_myntra/house-of-myntra.png",video:"/assets/logos/vfx/04_myntra/House-of-Myntra_1.mp4"},{title:"Neha Dhupia",cat:"vfx",brand:"HDFC",img:"/assets/logos/vfx/05_hdfc/hdfc-neha.png",video:"/assets/logos/vfx/05_hdfc/HDFC-x-Neha-Dhupia_11.10.2023.mp4"},{title:"Tamannaah",cat:"vfx",brand:"Kamiliant",img:"/assets/logos/vfx/06_kamiliant/kamiliant-tammanah.jpg",video:"/assets/logos/vfx/06_kamiliant/Kamiliant-x-Tamannaah_independence-day_10.1.mp4"},{title:"Ubon Dhruv",cat:"vfx",brand:"Ubon",img:"/assets/logos/vfx/07_ubon/ubon-charging.png",video:"/assets/logos/vfx/07_ubon/Ubon-x-Dhruv.mp4"},{title:"Trunativ Peach",cat:"vfx",brand:"Trunative",img:"/assets/logos/vfx/09_trunative/trunative-hologram.jpg",video:"/assets/logos/vfx/09_trunative/TRUNATIVxPEACH.mp4"},{title:"Afterglow",cat:"ai",brand:"Raymond",img:S0("%23e0a96d","%23d4472a","blur")},{title:"Loop the Real",cat:"ai",brand:"Asian Paints",img:S0("%23d4472a","%23f5efe6","frame")}],T0=[{value:"all",label:"All"},{value:"cine",label:"Cinematography"},{value:"edit",label:"Editing"},{value:"vfx",label:"VFX"},{value:"ai",label:"AI Integrations"}],A0={cine:"Cinematography",edit:"Editing",vfx:"VFX",ai:"AI"};var fE=(n,e)=>e.href;function pE(n,e){if(n&1){let t=ci();V(0,"a",4),$t("click",function(r){let s=Pn(t).$implicit,o=en();return Rn(o.scrollTo(r,s.href))}),X(1),z()}if(n&2){let t=e.$implicit;jt("href",t.href,Yn),Na("data-num",t.num),ye(),tn(" ",t.label," ")}}var I0=(()=>{class n{constructor(){this.zone=ke(rt),this.navLinks=C0,this.scrolled=Rt(!1),this.time=Rt("\u2014")}ngOnInit(){this.tickClock(),this.zone.runOutsideAngular(()=>{this.clockInterval=window.setInterval(()=>{this.zone.run(()=>this.tickClock())},1e3)})}ngAfterViewInit(){this.onScroll()}onScroll(){this.scrolled.set(window.scrollY>40)}scrollTo(t,i){t.preventDefault();let r=document.querySelector(i);r&&r.scrollIntoView({behavior:"smooth"})}tickClock(){let t=new Date,i=String(t.getHours()).padStart(2,"0"),r=String(t.getMinutes()).padStart(2,"0"),s=String(t.getSeconds()).padStart(2,"0");this.time.set(`MUM ${i}:${r}:${s}`)}ngOnDestroy(){this.clockInterval&&window.clearInterval(this.clockInterval)}static{this.\u0275fac=function(i){return new(i||n)}}static{this.\u0275cmp=Ct({type:n,selectors:[["app-navbar"]],hostBindings:function(i,r){i&1&&$t("scroll",function(){return r.onScroll()},!1,ag)},standalone:!0,features:[Dt],decls:10,vars:3,consts:[["href","#hero",1,"nav-logo",3,"click"],[1,"nav-links"],[3,"href"],[1,"nav-time"],[3,"click","href"]],template:function(i,r){i&1&&(V(0,"nav")(1,"a",0),$t("click",function(o){return r.scrollTo(o,"#hero")}),X(2," Rishabh Sahu"),V(3,"sup"),X(4,"*"),z()(),V(5,"div",1),Nt(6,pE,2,3,"a",2,fE),z(),V(8,"div",3),X(9),z()()),i&2&&(Vt("scrolled",r.scrolled()),ye(6),Ot(r.navLinks),ye(3),lt(r.time()))},styles:['nav[_ngcontent-%COMP%]{position:fixed;top:0;left:0;right:0;z-index:100;display:flex;justify-content:space-between;align-items:center;padding:1.25rem 2.5rem;background:#0a090866;backdrop-filter:blur(12px);-webkit-backdrop-filter:blur(12px);border-bottom:1px solid transparent;transition:background .4s var(--ease),border-color .4s,padding .4s}nav.scrolled[_ngcontent-%COMP%]{background:#0a0908d9;border-bottom-color:var(--line);padding:.9rem 2.5rem}.nav-logo[_ngcontent-%COMP%]{font-family:Fraunces,serif;font-weight:500;font-style:italic;font-size:1.4rem;letter-spacing:-.02em;color:var(--ink)}.nav-logo[_ngcontent-%COMP%]   sup[_ngcontent-%COMP%]{color:var(--accent)}.nav-links[_ngcontent-%COMP%]{display:flex;gap:2.5rem;align-items:center}.nav-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{font-family:JetBrains Mono,monospace;font-size:11px;letter-spacing:.25em;text-transform:uppercase;position:relative;padding:4px 0}.nav-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:before{content:attr(data-num);font-size:8px;color:var(--dim);margin-right:6px;vertical-align:top}.nav-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:after{content:"";position:absolute;bottom:0;left:0;width:0;height:1px;background:var(--ink);transition:width .4s var(--ease)}.nav-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover:after{width:100%}.nav-time[_ngcontent-%COMP%]{font-family:JetBrains Mono,monospace;font-size:10px;color:var(--dim);letter-spacing:.2em}@media (max-width: 900px){nav[_ngcontent-%COMP%]{padding:.8rem 1.25rem;background:#0a0908f2}.nav-logo[_ngcontent-%COMP%]{font-size:1.2rem}.nav-links[_ngcontent-%COMP%]{position:fixed!important;bottom:0!important;left:0!important;right:0!important;width:100%!important;height:70px!important;background:#0a0908!important;border-top:1px solid var(--line)!important;display:flex!important;align-items:center!important;justify-content:space-around!important;padding:0 1rem!important;z-index:9999!important;margin:0!important}.nav-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{font-size:9px;padding:10px 5px}.nav-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:before{display:none}.nav-time[_ngcontent-%COMP%]{display:none}}'],changeDetection:0})}}return n})();function mE(n,e){n&1&&Ce(0,"span",9)}function gE(n,e){if(n&1&&Ce(0,"span",31),n&2){let t=e.$index;Vt("white",t%2===0)}}function vE(n,e){if(n&1&&Ce(0,"span",31),n&2){let t=e.$index;Vt("white",t%2===0)}}function yE(n,e){n&1&&Ce(0,"span",9)}var P0=(()=>{class n{constructor(){this.armStripes=Array.from({length:12}),this.bodyStripes=Array.from({length:12}),this.perfs=Array.from({length:28}),this.done=Rt(!1),this.clapping=Rt(!1),this.timecode=Rt("00:00:00:00"),this.dateStr=(()=>{let t=new Date,i=r=>String(r).padStart(2,"0");return`${i(t.getDate())}.${i(t.getMonth()+1)}.${t.getFullYear()}`})()}ngAfterViewInit(){let t=Date.now();this.tcInterval=window.setInterval(()=>{let r=Date.now()-t,s=Math.floor(r/36e5)%24,o=Math.floor(r/6e4)%60,a=Math.floor(r/1e3)%60,c=Math.floor(r%1e3/1e3*24),l=u=>String(u).padStart(2,"0");this.timecode.set(`${l(s)}:${l(o)}:${l(a)}:${l(c)}`)},41);let i=()=>{this.clapTimeout=window.setTimeout(()=>this.clapping.set(!0),2e3),this.timeout=window.setTimeout(()=>{this.done.set(!0),window.dispatchEvent(new CustomEvent("loader:done"))},3150)};document.readyState==="complete"?i():window.addEventListener("load",i,{once:!0})}ngOnDestroy(){this.tcInterval&&window.clearInterval(this.tcInterval),this.timeout&&window.clearTimeout(this.timeout),this.clapTimeout&&window.clearTimeout(this.clapTimeout)}static{this.\u0275fac=function(i){return new(i||n)}}static{this.\u0275cmp=Ct({type:n,selectors:[["app-loader"]],standalone:!0,features:[Dt],decls:88,vars:8,consts:[[1,"loader"],[1,"loader-grain"],[1,"loader-scan"],[1,"slate-bar"],[1,"slate-left"],[1,"rec-dot"],[1,"sep"],[1,"slate-right"],[1,"film-strip","top"],[1,"perf"],[1,"loader-content"],[1,"clapper"],[1,"clapper-arm"],[1,"arm-stripes"],[1,"stripe",3,"white"],[1,"arm-hinge"],[1,"clapper-body"],[1,"body-stripes"],[1,"slate-face"],[1,"slate-header"],[1,"sep-line"],[1,"slate-title"],[1,"title-main"],[1,"title-sub"],[1,"slate-grid"],[1,"cell"],[1,"k"],[1,"v"],[1,"slate-footer"],[1,"pulse"],[1,"film-strip","bottom"],[1,"stripe"]],template:function(i,r){i&1&&(V(0,"div",0),Ce(1,"div",1)(2,"div",2),V(3,"div",3)(4,"div",4),Ce(5,"span",5),V(6,"span"),X(7,"REC"),z(),V(8,"span",6),X(9,"/"),z(),V(10,"span"),X(11),z()(),V(12,"div",7)(13,"span"),X(14,"SCENE 01"),z(),V(15,"span",6),X(16,"/"),z(),V(17,"span"),X(18,"TAKE 01"),z(),V(19,"span",6),X(20,"/"),z(),V(21,"span"),X(22,"MUMBAI \xB7 IN"),z()()(),V(23,"div",8),Nt(24,mE,1,0,"span",9,Zn),z(),V(26,"div",10)(27,"div",11)(28,"div",12)(29,"div",13),Nt(30,gE,1,2,"span",14,Zn),z(),Ce(32,"div",15),z(),V(33,"div",16)(34,"div",17),Nt(35,vE,1,2,"span",14,Zn),z(),V(37,"div",18)(38,"div",19)(39,"span"),X(40,"PRODUCTION"),z(),Ce(41,"span",20),V(42,"span"),X(43,"REEL 2026"),z()(),V(44,"div",21)(45,"span",22),X(46,"Rishabh"),z(),V(47,"span",23),X(48,"SAHU"),z()(),V(49,"div",24)(50,"div",25)(51,"span",26),X(52,"DIR"),z(),V(53,"span",27),X(54,"R. SAHU"),z()(),V(55,"div",25)(56,"span",26),X(57,"CAM"),z(),V(58,"span",27),X(59,"A"),z()(),V(60,"div",25)(61,"span",26),X(62,"ROLL"),z(),V(63,"span",27),X(64,"001"),z()(),V(65,"div",25)(66,"span",26),X(67,"SCENE"),z(),V(68,"span",27),X(69,"01"),z()(),V(70,"div",25)(71,"span",26),X(72,"TAKE"),z(),V(73,"span",27),X(74,"01"),z()(),V(75,"div",25)(76,"span",26),X(77,"FPS"),z(),V(78,"span",27),X(79,"24"),z()()(),V(80,"div",28)(81,"span"),X(82),z(),V(83,"span",29),X(84,"\u25CF SYNC"),z()()()()()(),V(85,"div",30),Nt(86,yE,1,0,"span",9,Zn),z()()),i&2&&(Vt("done",r.done())("clapping",r.clapping()),ye(11),lt(r.timecode()),ye(13),Ot(r.perfs),ye(3),Vt("clap",r.clapping()),ye(3),Ot(r.armStripes),ye(5),Ot(r.bodyStripes),ye(47),tn("DATE \xB7 ",r.dateStr,""),ye(4),Ot(r.perfs))},styles:[".loader[_ngcontent-%COMP%]{position:fixed;inset:0;background:radial-gradient(ellipse at center,#15110e,#0a0908 70%,#000);z-index:10001;display:flex;flex-direction:column;justify-content:space-between;padding:1.5rem 2rem;overflow:hidden;transition:opacity .9s var(--ease),visibility .9s}.loader.done[_ngcontent-%COMP%]{opacity:0;visibility:hidden}.loader-grain[_ngcontent-%COMP%]{position:absolute;inset:-50%;opacity:.08;pointer-events:none;mix-blend-mode:overlay;background-image:repeating-radial-gradient(circle at 20% 30%,#fff9 0,#fff0 2px),repeating-radial-gradient(circle at 70% 80%,#ffffff80 0,#fff0 2px);animation:_ngcontent-%COMP%_grainShift .7s steps(6) infinite}@keyframes _ngcontent-%COMP%_grainShift{0%{transform:translate(0)}20%{transform:translate(-4%,2%)}40%{transform:translate(3%,-3%)}60%{transform:translate(-2%,4%)}80%{transform:translate(4%,1%)}to{transform:translate(0)}}.loader-scan[_ngcontent-%COMP%]{position:absolute;inset:0;pointer-events:none;background:repeating-linear-gradient(to bottom,transparent 0,transparent 3px,rgba(255,255,255,.015) 3px,rgba(255,255,255,.015) 4px);mix-blend-mode:overlay}.slate-bar[_ngcontent-%COMP%]{position:relative;z-index:3;display:flex;justify-content:space-between;font-family:JetBrains Mono,monospace;font-size:10px;letter-spacing:.3em;color:var(--dim);text-transform:uppercase}.slate-bar[_ngcontent-%COMP%]   .slate-left[_ngcontent-%COMP%], .slate-bar[_ngcontent-%COMP%]   .slate-right[_ngcontent-%COMP%]{display:flex;align-items:center;gap:.75rem}.slate-bar[_ngcontent-%COMP%]   .sep[_ngcontent-%COMP%]{color:#ffffff26}.rec-dot[_ngcontent-%COMP%]{width:8px;height:8px;border-radius:50%;background:var(--accent);box-shadow:0 0 10px var(--accent);animation:_ngcontent-%COMP%_recPulse 1.2s ease-in-out infinite}@keyframes _ngcontent-%COMP%_recPulse{0%,to{opacity:1;transform:scale(1)}50%{opacity:.35;transform:scale(.85)}}.film-strip[_ngcontent-%COMP%]{position:relative;z-index:2;display:flex;justify-content:space-between;height:22px;padding:0 4px;background:linear-gradient(180deg,transparent,rgba(0,0,0,.6));overflow:hidden}.film-strip.bottom[_ngcontent-%COMP%]{background:linear-gradient(0deg,transparent,rgba(0,0,0,.6))}.film-strip[_ngcontent-%COMP%]   .perf[_ngcontent-%COMP%]{width:22px;height:12px;background:#000;border-radius:2px;border:1px solid rgba(255,255,255,.06);align-self:center;animation:_ngcontent-%COMP%_perfSlide 1.4s linear infinite}@keyframes _ngcontent-%COMP%_perfSlide{0%{opacity:.3;transform:translate(-6px)}50%{opacity:1}to{opacity:.3;transform:translate(6px)}}.loader-content[_ngcontent-%COMP%]{position:relative;z-index:3;flex:1;display:flex;flex-direction:column;justify-content:center;align-items:center;gap:2rem;text-align:center}.clapper[_ngcontent-%COMP%]{--board-w: min(560px, 80vw);position:relative;width:var(--board-w);perspective:1200px;animation:_ngcontent-%COMP%_boardIn .9s .2s var(--ease) both;transform-origin:center center}.clapper.clap[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_boardShake .4s ease-out,_ngcontent-%COMP%_boardClose .7s .45s cubic-bezier(.7,0,.3,1) forwards}@keyframes _ngcontent-%COMP%_boardClose{0%{transform:translateY(0) scale(1) rotate(0);filter:blur(0);opacity:1}40%{transform:translateY(-4px) scale(1.08) rotate(-1deg);filter:blur(0);opacity:1}to{transform:translateY(-40px) scale(.6) rotate(2deg);filter:blur(8px);opacity:0}}@keyframes _ngcontent-%COMP%_boardIn{0%{opacity:0;transform:translateY(24px) scale(.92) rotateX(6deg)}to{opacity:1;transform:translateY(0) scale(1) rotateX(0)}}@keyframes _ngcontent-%COMP%_boardShake{0%{transform:translate(0) rotate(0)}20%{transform:translate(-6px,2px) rotate(-.6deg)}40%{transform:translate(5px,-2px) rotate(.5deg)}60%{transform:translate(-3px,1px) rotate(-.3deg)}80%{transform:translate(2px) rotate(.2deg)}to{transform:translate(0) rotate(0)}}.clapper-arm[_ngcontent-%COMP%]{position:relative;height:56px;margin-bottom:-6px;transform-origin:12px 100%;transform:rotate(-28deg);animation:_ngcontent-%COMP%_armHold 2s var(--ease) forwards;z-index:2}.clapper.clap[_ngcontent-%COMP%]   .clapper-arm[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_armClap .45s cubic-bezier(.75,0,.2,1) forwards}@keyframes _ngcontent-%COMP%_armHold{0%{transform:rotate(-34deg)}60%{transform:rotate(-26deg)}to{transform:rotate(-28deg)}}@keyframes _ngcontent-%COMP%_armClap{0%{transform:rotate(-28deg)}55%{transform:rotate(4deg)}72%{transform:rotate(-2deg)}88%{transform:rotate(1deg)}to{transform:rotate(0)}}.arm-stripes[_ngcontent-%COMP%]{display:flex;height:100%;width:100%;background:#0f0d0b;border:1px solid rgba(255,255,255,.08);border-radius:3px 3px 0 0;overflow:hidden;box-shadow:0 4px 12px #0006}.arm-stripes[_ngcontent-%COMP%]   .stripe[_ngcontent-%COMP%]{flex:1;background:#0b0a09;transform:skew(-22deg);margin:0 -1px}.arm-stripes[_ngcontent-%COMP%]   .stripe.white[_ngcontent-%COMP%]{background:linear-gradient(180deg,#f5efe6,#cfc9c0)}.arm-hinge[_ngcontent-%COMP%]{position:absolute;left:-6px;bottom:-4px;width:18px;height:18px;border-radius:50%;background:radial-gradient(circle at 35% 35%,#888,#222 70%);border:1px solid rgba(0,0,0,.6);box-shadow:0 0 8px #0009;z-index:3}.clapper-body[_ngcontent-%COMP%]{position:relative;border-radius:4px;background:linear-gradient(180deg,#151210,#0a0807);border:1px solid rgba(255,255,255,.08);box-shadow:0 20px 60px #0009,inset 0 1px #ffffff0d;overflow:hidden}.body-stripes[_ngcontent-%COMP%]{display:flex;height:28px}.body-stripes[_ngcontent-%COMP%]   .stripe[_ngcontent-%COMP%]{flex:1;background:#0b0a09;transform:skew(-22deg);margin:0 -1px}.body-stripes[_ngcontent-%COMP%]   .stripe.white[_ngcontent-%COMP%]{background:linear-gradient(180deg,#f5efe6,#cfc9c0)}.slate-face[_ngcontent-%COMP%]{padding:1.25rem 1.5rem 1.1rem;display:flex;flex-direction:column;gap:.9rem;background:radial-gradient(ellipse at 30% 0%,rgba(212,71,42,.08),transparent 60%),linear-gradient(180deg,#141110,#0a0807)}.slate-header[_ngcontent-%COMP%]{display:flex;align-items:center;gap:.75rem;font-family:JetBrains Mono,monospace;font-size:9px;letter-spacing:.35em;text-transform:uppercase;color:var(--dim)}.slate-header[_ngcontent-%COMP%]   .sep-line[_ngcontent-%COMP%]{flex:1;height:1px;background:linear-gradient(90deg,transparent,rgba(245,239,230,.25),transparent)}.slate-title[_ngcontent-%COMP%]{display:flex;align-items:baseline;justify-content:center;gap:.6rem;font-family:Fraunces,serif;line-height:.95;letter-spacing:-.03em}.slate-title[_ngcontent-%COMP%]   .title-main[_ngcontent-%COMP%]{font-size:clamp(2.2rem,5.5vw,3.6rem);font-style:italic;font-weight:400;background:linear-gradient(90deg,#f5efe6,#d4b896);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;text-shadow:0 0 30px rgba(245,239,230,.1)}.slate-title[_ngcontent-%COMP%]   .title-sub[_ngcontent-%COMP%]{font-size:clamp(1.6rem,4vw,2.6rem);font-weight:600;letter-spacing:.1em;color:transparent;-webkit-text-stroke:1px var(--accent);text-transform:uppercase}.slate-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(3,1fr);gap:.5rem 1.25rem;padding:.65rem .25rem;border-top:1px dashed rgba(255,255,255,.08);border-bottom:1px dashed rgba(255,255,255,.08)}.slate-grid[_ngcontent-%COMP%]   .cell[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:baseline;font-family:JetBrains Mono,monospace}.slate-grid[_ngcontent-%COMP%]   .cell[_ngcontent-%COMP%]   .k[_ngcontent-%COMP%]{font-size:8px;letter-spacing:.3em;text-transform:uppercase;color:var(--dim)}.slate-grid[_ngcontent-%COMP%]   .cell[_ngcontent-%COMP%]   .v[_ngcontent-%COMP%]{font-size:12px;font-weight:700;color:var(--ink);letter-spacing:.1em}.slate-footer[_ngcontent-%COMP%]{display:flex;justify-content:space-between;font-family:JetBrains Mono,monospace;font-size:9px;letter-spacing:.3em;text-transform:uppercase;color:var(--dim)}.slate-footer[_ngcontent-%COMP%]   .pulse[_ngcontent-%COMP%]{color:var(--accent);animation:_ngcontent-%COMP%_recPulse 1.4s ease-in-out infinite}.reel-progress[_ngcontent-%COMP%]{width:min(560px,80vw);opacity:0;animation:_ngcontent-%COMP%_fadeUp .9s 1s var(--ease) forwards}.reel-track[_ngcontent-%COMP%]{position:relative;height:6px;background:#f5efe614;border-radius:1px;overflow:hidden}.reel-fill[_ngcontent-%COMP%]{height:100%;background:linear-gradient(90deg,var(--accent),var(--amber));box-shadow:0 0 14px #d4472a80;transition:width .12s linear}.reel-ticks[_ngcontent-%COMP%]{position:absolute;inset:0;display:flex;justify-content:space-between;pointer-events:none}.reel-ticks[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{width:1px;height:100%;background:#0006}.reel-meta[_ngcontent-%COMP%]{margin-top:.75rem;display:flex;justify-content:space-between;align-items:center;gap:1rem;font-family:JetBrains Mono,monospace;font-size:10px;letter-spacing:.3em;text-transform:uppercase;color:var(--dim)}.reel-meta[_ngcontent-%COMP%]   .tagline[_ngcontent-%COMP%]{font-family:Fraunces,serif;font-style:italic;font-size:.78rem;letter-spacing:0;color:#f5efe68c;text-transform:none}.reel-meta[_ngcontent-%COMP%]   .pct[_ngcontent-%COMP%]{color:var(--accent);font-weight:700}@keyframes _ngcontent-%COMP%_fadeUp{0%{opacity:0;transform:translateY(8px)}to{opacity:1;transform:translateY(0)}}@media (max-width: 700px){.slate-bar[_ngcontent-%COMP%]{font-size:8px;gap:.5rem;flex-wrap:wrap}.slate-bar[_ngcontent-%COMP%]   .sep[_ngcontent-%COMP%]{display:none}.film-strip[_ngcontent-%COMP%]   .perf[_ngcontent-%COMP%]{width:14px}.slate-grid[_ngcontent-%COMP%]{grid-template-columns:repeat(2,1fr)}.reel-meta[_ngcontent-%COMP%]   .tagline[_ngcontent-%COMP%]{display:none}}"],changeDetection:0})}}return n})();var _E=["dot"],xE=["ring"],ME=["label"],R0=(()=>{class n{constructor(){this.zone=ke(rt),this.dot=Ut.required("dot"),this.ring=Ut.required("ring"),this.label=Ut.required("label"),this.rx=0,this.ry=0,this.mx=0,this.my=0,this.isFast=!1,this.listeners=[],this.hoverTargets=null}ngAfterViewInit(){if(window.matchMedia("(max-width: 900px)").matches){[this.dot,this.ring,this.label].forEach(t=>{t().nativeElement.style.display="none"});return}this.zone.runOutsideAngular(()=>{let t=r=>{this.mx=r.clientX,this.my=r.clientY;let s=this.dot().nativeElement,o=this.label().nativeElement,a=this.ring().nativeElement;s.style.transform=`translate3d(${this.mx}px, ${this.my}px, 0)`,o.style.transform=`translate3d(${this.mx}px, ${this.my}px, 0)`,this.isFast&&(this.rx=this.mx,this.ry=this.my,a.style.transform=`translate3d(${this.rx}px, ${this.ry}px, 0)`)};window.addEventListener("mousemove",t),this.listeners.push(()=>window.removeEventListener("mousemove",t));let i=()=>{if(!this.isFast){this.rx+=(this.mx-this.rx)*.15,this.ry+=(this.my-this.ry)*.15;let r=this.ring().nativeElement;r.style.transform=`translate3d(${this.rx}px, ${this.ry}px, 0)`}this.rafId=requestAnimationFrame(i)};this.rafId=requestAnimationFrame(i),this.attachHoverListeners(),this.mutationObserver=new MutationObserver(()=>this.attachHoverListeners()),this.mutationObserver.observe(document.body,{childList:!0,subtree:!0})})}attachHoverListeners(){let t=this.dot().nativeElement,i=this.ring().nativeElement,r=this.label().nativeElement;document.querySelectorAll("a, button, .gallery-item, .exp-row, .brand-cell, .nle-timeline").forEach(s=>{if(s.dataset.cursorAttached)return;s.dataset.cursorAttached="1";let o=s.classList.contains("nle-timeline");s.addEventListener("mouseenter",()=>{if(o&&(this.isFast=!0,t.style.opacity="0",r.textContent="PREVIEW",r.classList.add("show")),t.classList.add("hover"),i.classList.add("hover"),!o){let a=s.dataset.cursor;a&&(r.textContent=a,r.classList.add("show"))}}),s.addEventListener("mouseleave",()=>{o&&(this.isFast=!1,t.style.opacity="1"),t.classList.remove("hover"),i.classList.remove("hover"),r.classList.remove("show")})})}ngOnDestroy(){this.rafId&&cancelAnimationFrame(this.rafId),this.listeners.forEach(t=>t()),this.mutationObserver?.disconnect()}static{this.\u0275fac=function(i){return new(i||n)}}static{this.\u0275cmp=Ct({type:n,selectors:[["app-cursor"]],viewQuery:function(i,r){i&1&&(Bt(r.dot,_E,5),Bt(r.ring,xE,5),Bt(r.label,ME,5)),i&2&&Jn(3)},standalone:!0,features:[Dt],decls:6,vars:0,consts:[["dot",""],["ring",""],["label",""],[1,"cursor"],[1,"cursor-ring"],[1,"cursor-label"]],template:function(i,r){i&1&&Ce(0,"div",3,0)(2,"div",4,1)(4,"div",5,2)},styles:[".cursor[_ngcontent-%COMP%]{position:fixed;top:0;left:0;width:8px;height:8px;border-radius:50%;background:var(--ink);pointer-events:none;z-index:100000;margin-left:-4px;margin-top:-4px;transition:width .3s var(--ease),height .3s var(--ease),background .3s var(--ease),opacity .2s;mix-blend-mode:difference}.cursor.hover[_ngcontent-%COMP%]{width:0;height:0}.cursor-ring[_ngcontent-%COMP%]{position:fixed;top:0;left:0;width:40px;height:40px;border-radius:50%;border:1px solid var(--ink);pointer-events:none;z-index:99999;margin-left:-20px;margin-top:-20px;transition:width .4s var(--ease),height .4s var(--ease),border-color .3s;mix-blend-mode:difference}.cursor-ring.hover[_ngcontent-%COMP%]{width:80px;height:80px;border-color:var(--accent)}.cursor-ring.drag[_ngcontent-%COMP%]{width:100px;height:100px;border-color:var(--amber)}.cursor-label[_ngcontent-%COMP%]{position:fixed;pointer-events:none;z-index:99999;font-family:JetBrains Mono,monospace;font-size:10px;letter-spacing:.2em;color:var(--ink);text-transform:uppercase;transform:translate3d(20px,20px,0);opacity:0;transition:opacity .3s;mix-blend-mode:difference}.cursor-label.show[_ngcontent-%COMP%]{opacity:1}"],changeDetection:0})}}return n})();var uf="168";var bE=0,N0=1,wE=2;var kv=1,EE=2,pi=3,Vi=0,sn=1,gi=2,ki=0,_s=1,O0=2,L0=3,F0=4,SE=5,mr=100,CE=101,DE=102,TE=103,AE=104,IE=200,PE=201,RE=202,NE=203,nh=204,ih=205,OE=206,LE=207,FE=208,kE=209,UE=210,VE=211,BE=212,zE=213,HE=214,GE=0,WE=1,jE=2,vc=3,$E=4,qE=5,XE=6,YE=7,Uv=0,ZE=1,JE=2,Ui=0,KE=1,QE=2,eS=3,tS=4,nS=5,iS=6,rS=7;var k0=300,ws=301,Es=302,rh=303,sh=304,Jc=306,oh=1e3,vr=1001,ah=1002,xn=1003,sS=1004;var za=1005;var Fn=1006,Cd=1007;var yr=1008;var _i=1009,Vv=1010,Bv=1011,vo=1012,df=1013,_r=1014,vi=1015,bo=1016,hf=1017,ff=1018,Ss=1020,zv=35902,Hv=1021,Gv=1022,kn=1023,Wv=1024,jv=1025,xs=1026,Cs=1027,$v=1028,pf=1029,qv=1030,mf=1031;var gf=1033,hc=33776,fc=33777,pc=33778,mc=33779,ch=35840,lh=35841,uh=35842,dh=35843,hh=36196,fh=37492,ph=37496,mh=37808,gh=37809,vh=37810,yh=37811,_h=37812,xh=37813,Mh=37814,bh=37815,wh=37816,Eh=37817,Sh=37818,Ch=37819,Dh=37820,Th=37821,gc=36492,Ah=36494,Ih=36495,Xv=36283,Ph=36284,Rh=36285,Nh=36286;var yc=2300,Oh=2301,Dd=2302,U0=2400,V0=2401,B0=2402;var oS=3200,aS=3201;var Yv=0,cS=1,Li="",Kn="srgb",Gi="srgb-linear",vf="display-p3",Kc="display-p3-linear",_c="linear",dt="srgb",xc="rec709",Mc="p3";var es=7680;var z0=519,lS=512,uS=513,dS=514,Zv=515,hS=516,fS=517,pS=518,mS=519,H0=35044;var G0="300 es",yi=2e3,bc=2001,Bi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let r=this._listeners[e];if(r!==void 0){let s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let i=this._listeners[e.type];if(i!==void 0){e.target=this;let r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}},qt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Td=Math.PI/180,Lh=180/Math.PI;function wo(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(qt[n&255]+qt[n>>8&255]+qt[n>>16&255]+qt[n>>24&255]+"-"+qt[e&255]+qt[e>>8&255]+"-"+qt[e>>16&15|64]+qt[e>>24&255]+"-"+qt[t&63|128]+qt[t>>8&255]+"-"+qt[t>>16&255]+qt[t>>24&255]+qt[i&255]+qt[i>>8&255]+qt[i>>16&255]+qt[i>>24&255]).toLowerCase()}function rn(n,e,t){return Math.max(e,Math.min(t,n))}function gS(n,e){return(n%e+e)%e}function Ad(n,e,t){return(1-t)*n+t*e}function oo(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function nn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var He=class n{constructor(e=0,t=0){n.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(rn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Be=class n{constructor(e,t,i,r,s,o,a,c,l){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,c,l)}set(e,t,i,r,s,o,a,c,l){let u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=c,u[6]=i,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],c=i[6],l=i[1],u=i[4],d=i[7],h=i[2],f=i[5],g=i[8],v=r[0],m=r[3],p=r[6],b=r[1],M=r[4],E=r[7],L=r[2],C=r[5],D=r[8];return s[0]=o*v+a*b+c*L,s[3]=o*m+a*M+c*C,s[6]=o*p+a*E+c*D,s[1]=l*v+u*b+d*L,s[4]=l*m+u*M+d*C,s[7]=l*p+u*E+d*D,s[2]=h*v+f*b+g*L,s[5]=h*m+f*M+g*C,s[8]=h*p+f*E+g*D,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8];return t*o*u-t*a*l-i*s*u+i*a*c+r*s*l-r*o*c}invert(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],d=u*o-a*l,h=a*c-u*s,f=l*s-o*c,g=t*d+i*h+r*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/g;return e[0]=d*v,e[1]=(r*l-u*i)*v,e[2]=(a*i-r*o)*v,e[3]=h*v,e[4]=(u*t-r*c)*v,e[5]=(r*s-a*t)*v,e[6]=f*v,e[7]=(i*c-l*t)*v,e[8]=(o*t-i*s)*v,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){let c=Math.cos(s),l=Math.sin(s);return this.set(i*c,i*l,-i*(c*o+l*a)+o+e,-r*l,r*c,-r*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Id.makeScale(e,t)),this}rotate(e){return this.premultiply(Id.makeRotation(-e)),this}translate(e,t){return this.premultiply(Id.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Id=new Be;function Jv(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function wc(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function vS(){let n=wc("canvas");return n.style.display="block",n}var W0={};function mo(n){n in W0||(W0[n]=!0,console.warn(n))}function yS(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}var j0=new Be().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),$0=new Be().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),ao={[Gi]:{transfer:_c,primaries:xc,luminanceCoefficients:[.2126,.7152,.0722],toReference:n=>n,fromReference:n=>n},[Kn]:{transfer:dt,primaries:xc,luminanceCoefficients:[.2126,.7152,.0722],toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[Kc]:{transfer:_c,primaries:Mc,luminanceCoefficients:[.2289,.6917,.0793],toReference:n=>n.applyMatrix3($0),fromReference:n=>n.applyMatrix3(j0)},[vf]:{transfer:dt,primaries:Mc,luminanceCoefficients:[.2289,.6917,.0793],toReference:n=>n.convertSRGBToLinear().applyMatrix3($0),fromReference:n=>n.applyMatrix3(j0).convertLinearToSRGB()}},_S=new Set([Gi,Kc]),nt={enabled:!0,_workingColorSpace:Gi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!_S.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;let i=ao[e].toReference,r=ao[t].fromReference;return r(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return ao[n].primaries},getTransfer:function(n){return n===Li?_c:ao[n].transfer},getLuminanceCoefficients:function(n,e=this._workingColorSpace){return n.fromArray(ao[e].luminanceCoefficients)}};function Ms(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Pd(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var ts,Fh=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ts===void 0&&(ts=wc("canvas")),ts.width=e.width,ts.height=e.height;let i=ts.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=ts}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=wc("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Ms(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Ms(t[i]/255)*255):t[i]=Ms(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},xS=0,Ec=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:xS++}),this.uuid=wo(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Rd(r[o].image)):s.push(Rd(r[o]))}else s=Rd(r);i.url=s}return t||(e.images[this.uuid]=i),i}};function Rd(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Fh.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var MS=0,Sr=(()=>{class n extends Bi{constructor(t=n.DEFAULT_IMAGE,i=n.DEFAULT_MAPPING,r=vr,s=vr,o=Fn,a=yr,c=kn,l=_i,u=n.DEFAULT_ANISOTROPY,d=Li){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:MS++}),this.uuid=wo(),this.name="",this.source=new Ec(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=s,this.magFilter=o,this.minFilter=a,this.anisotropy=u,this.format=c,this.internalFormat=null,this.type=l,this.offset=new He(0,0),this.repeat=new He(1,1),this.center=new He(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Be,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(t.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==k0)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case oh:t.x=t.x-Math.floor(t.x);break;case vr:t.x=t.x<0?0:1;break;case ah:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case oh:t.y=t.y-Math.floor(t.y);break;case vr:t.y=t.y<0?0:1;break;case ah:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}return n.DEFAULT_IMAGE=null,n.DEFAULT_MAPPING=k0,n.DEFAULT_ANISOTROPY=1,n})(),ht=class n{constructor(e=0,t=0,i=0,r=1){n.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s,c=e.elements,l=c[0],u=c[4],d=c[8],h=c[1],f=c[5],g=c[9],v=c[2],m=c[6],p=c[10];if(Math.abs(u-h)<.01&&Math.abs(d-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+v)<.1&&Math.abs(g+m)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let M=(l+1)/2,E=(f+1)/2,L=(p+1)/2,C=(u+h)/4,D=(d+v)/4,O=(g+m)/4;return M>E&&M>L?M<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(M),r=C/i,s=D/i):E>L?E<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(E),i=C/r,s=O/r):L<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(L),i=D/s,r=O/s),this.set(i,r,s,t),this}let b=Math.sqrt((m-g)*(m-g)+(d-v)*(d-v)+(h-u)*(h-u));return Math.abs(b)<.001&&(b=1),this.x=(m-g)/b,this.y=(d-v)/b,this.z=(h-u)/b,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},kh=class extends Bi{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new ht(0,0,e,t),this.scissorTest=!1,this.viewport=new ht(0,0,e,t);let r={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Fn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);let s=new Sr(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];let o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new Ec(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},xi=class extends kh{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},Sc=class extends Sr{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=xn,this.minFilter=xn,this.wrapR=vr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Uh=class extends Sr{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=xn,this.minFilter=xn,this.wrapR=vr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var zi=class{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let c=i[r+0],l=i[r+1],u=i[r+2],d=i[r+3],h=s[o+0],f=s[o+1],g=s[o+2],v=s[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=d;return}if(a===1){e[t+0]=h,e[t+1]=f,e[t+2]=g,e[t+3]=v;return}if(d!==v||c!==h||l!==f||u!==g){let m=1-a,p=c*h+l*f+u*g+d*v,b=p>=0?1:-1,M=1-p*p;if(M>Number.EPSILON){let L=Math.sqrt(M),C=Math.atan2(L,p*b);m=Math.sin(m*C)/L,a=Math.sin(a*C)/L}let E=a*b;if(c=c*m+h*E,l=l*m+f*E,u=u*m+g*E,d=d*m+v*E,m===1-a){let L=1/Math.sqrt(c*c+l*l+u*u+d*d);c*=L,l*=L,u*=L,d*=L}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,r,s,o){let a=i[r],c=i[r+1],l=i[r+2],u=i[r+3],d=s[o],h=s[o+1],f=s[o+2],g=s[o+3];return e[t]=a*g+u*d+c*f-l*h,e[t+1]=c*g+u*h+l*d-a*f,e[t+2]=l*g+u*f+a*h-c*d,e[t+3]=u*g-a*d-c*h-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(i/2),u=a(r/2),d=a(s/2),h=c(i/2),f=c(r/2),g=c(s/2);switch(o){case"XYZ":this._x=h*u*d+l*f*g,this._y=l*f*d-h*u*g,this._z=l*u*g+h*f*d,this._w=l*u*d-h*f*g;break;case"YXZ":this._x=h*u*d+l*f*g,this._y=l*f*d-h*u*g,this._z=l*u*g-h*f*d,this._w=l*u*d+h*f*g;break;case"ZXY":this._x=h*u*d-l*f*g,this._y=l*f*d+h*u*g,this._z=l*u*g+h*f*d,this._w=l*u*d-h*f*g;break;case"ZYX":this._x=h*u*d-l*f*g,this._y=l*f*d+h*u*g,this._z=l*u*g-h*f*d,this._w=l*u*d+h*f*g;break;case"YZX":this._x=h*u*d+l*f*g,this._y=l*f*d+h*u*g,this._z=l*u*g-h*f*d,this._w=l*u*d-h*f*g;break;case"XZY":this._x=h*u*d-l*f*g,this._y=l*f*d-h*u*g,this._z=l*u*g+h*f*d,this._w=l*u*d+h*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],c=t[9],l=t[2],u=t[6],d=t[10],h=i+a+d;if(h>0){let f=.5/Math.sqrt(h+1);this._w=.25/f,this._x=(u-c)*f,this._y=(s-l)*f,this._z=(o-r)*f}else if(i>a&&i>d){let f=2*Math.sqrt(1+i-a-d);this._w=(u-c)/f,this._x=.25*f,this._y=(r+o)/f,this._z=(s+l)/f}else if(a>d){let f=2*Math.sqrt(1+a-i-d);this._w=(s-l)/f,this._x=(r+o)/f,this._y=.25*f,this._z=(c+u)/f}else{let f=2*Math.sqrt(1+d-i-a);this._w=(o-r)/f,this._x=(s+l)/f,this._y=(c+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(rn(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,c=t._y,l=t._z,u=t._w;return this._x=i*u+o*a+r*l-s*c,this._y=r*u+o*c+s*a-i*l,this._z=s*u+o*l+i*c-r*a,this._w=o*u-i*a-r*c-s*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let i=this._x,r=this._y,s=this._z,o=this._w,a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;let c=1-a*a;if(c<=Number.EPSILON){let f=1-t;return this._w=f*o+t*this._w,this._x=f*i+t*this._x,this._y=f*r+t*this._y,this._z=f*s+t*this._z,this.normalize(),this}let l=Math.sqrt(c),u=Math.atan2(l,a),d=Math.sin((1-t)*u)/l,h=Math.sin(t*u)/l;return this._w=o*d+this._w*h,this._x=i*d+this._x*h,this._y=r*d+this._y*h,this._z=s*d+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},R=class n{constructor(e=0,t=0,i=0){n.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(q0.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(q0.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){let t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*r-a*i),u=2*(a*t-s*r),d=2*(s*i-o*t);return this.x=t+c*l+o*d-a*u,this.y=i+c*u+a*l-s*d,this.z=r+c*d+s*u-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,c=t.z;return this.x=r*c-s*a,this.y=s*o-i*c,this.z=i*a-r*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Nd.copy(this).projectOnVector(e),this.sub(Nd)}reflect(e){return this.sub(Nd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(rn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Nd=new R,q0=new zi,xr=class{constructor(e=new R(1/0,1/0,1/0),t=new R(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Nn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Nn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=Nn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Nn):Nn.fromBufferAttribute(s,o),Nn.applyMatrix4(e.matrixWorld),this.expandByPoint(Nn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ha.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ha.copy(i.boundingBox)),Ha.applyMatrix4(e.matrixWorld),this.union(Ha)}let r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Nn),Nn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(co),Ga.subVectors(this.max,co),ns.subVectors(e.a,co),is.subVectors(e.b,co),rs.subVectors(e.c,co),Ai.subVectors(is,ns),Ii.subVectors(rs,is),cr.subVectors(ns,rs);let t=[0,-Ai.z,Ai.y,0,-Ii.z,Ii.y,0,-cr.z,cr.y,Ai.z,0,-Ai.x,Ii.z,0,-Ii.x,cr.z,0,-cr.x,-Ai.y,Ai.x,0,-Ii.y,Ii.x,0,-cr.y,cr.x,0];return!Od(t,ns,is,rs,Ga)||(t=[1,0,0,0,1,0,0,0,1],!Od(t,ns,is,rs,Ga))?!1:(Wa.crossVectors(Ai,Ii),t=[Wa.x,Wa.y,Wa.z],Od(t,ns,is,rs,Ga))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Nn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Nn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(li[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),li[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),li[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),li[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),li[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),li[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),li[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),li[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(li),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},li=[new R,new R,new R,new R,new R,new R,new R,new R],Nn=new R,Ha=new xr,ns=new R,is=new R,rs=new R,Ai=new R,Ii=new R,cr=new R,co=new R,Ga=new R,Wa=new R,lr=new R;function Od(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){lr.fromArray(n,s);let a=r.x*Math.abs(lr.x)+r.y*Math.abs(lr.y)+r.z*Math.abs(lr.z),c=e.dot(lr),l=t.dot(lr),u=i.dot(lr);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}var bS=new xr,lo=new R,Ld=new R,Ds=class{constructor(e=new R,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):bS.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;lo.subVectors(e,this.center);let t=lo.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(lo,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ld.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(lo.copy(e.center).add(Ld)),this.expandByPoint(lo.copy(e.center).sub(Ld))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},ui=new R,Fd=new R,ja=new R,Pi=new R,kd=new R,$a=new R,Ud=new R,Cc=class{constructor(e=new R,t=new R(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ui)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=ui.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ui.copy(this.origin).addScaledVector(this.direction,t),ui.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Fd.copy(e).add(t).multiplyScalar(.5),ja.copy(t).sub(e).normalize(),Pi.copy(this.origin).sub(Fd);let s=e.distanceTo(t)*.5,o=-this.direction.dot(ja),a=Pi.dot(this.direction),c=-Pi.dot(ja),l=Pi.lengthSq(),u=Math.abs(1-o*o),d,h,f,g;if(u>0)if(d=o*c-a,h=o*a-c,g=s*u,d>=0)if(h>=-g)if(h<=g){let v=1/u;d*=v,h*=v,f=d*(d+o*h+2*a)+h*(o*d+h+2*c)+l}else h=s,d=Math.max(0,-(o*h+a)),f=-d*d+h*(h+2*c)+l;else h=-s,d=Math.max(0,-(o*h+a)),f=-d*d+h*(h+2*c)+l;else h<=-g?(d=Math.max(0,-(-o*s+a)),h=d>0?-s:Math.min(Math.max(-s,-c),s),f=-d*d+h*(h+2*c)+l):h<=g?(d=0,h=Math.min(Math.max(-s,-c),s),f=h*(h+2*c)+l):(d=Math.max(0,-(o*s+a)),h=d>0?s:Math.min(Math.max(-s,-c),s),f=-d*d+h*(h+2*c)+l);else h=o>0?-s:s,d=Math.max(0,-(o*h+a)),f=-d*d+h*(h+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(Fd).addScaledVector(ja,h),f}intersectSphere(e,t){ui.subVectors(e.center,this.origin);let i=ui.dot(this.direction),r=ui.dot(ui)-i*i,s=e.radius*e.radius;if(r>s)return null;let o=Math.sqrt(s-r),a=i-o,c=i+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,c,l=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return l>=0?(i=(e.min.x-h.x)*l,r=(e.max.x-h.x)*l):(i=(e.max.x-h.x)*l,r=(e.min.x-h.x)*l),u>=0?(s=(e.min.y-h.y)*u,o=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,o=(e.min.y-h.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),d>=0?(a=(e.min.z-h.z)*d,c=(e.max.z-h.z)*d):(a=(e.max.z-h.z)*d,c=(e.min.z-h.z)*d),i>c||a>r)||((a>i||i!==i)&&(i=a),(c<r||r!==r)&&(r=c),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,ui)!==null}intersectTriangle(e,t,i,r,s){kd.subVectors(t,e),$a.subVectors(i,e),Ud.crossVectors(kd,$a);let o=this.direction.dot(Ud),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Pi.subVectors(this.origin,e);let c=a*this.direction.dot($a.crossVectors(Pi,$a));if(c<0)return null;let l=a*this.direction.dot(kd.cross(Pi));if(l<0||c+l>o)return null;let u=-a*Pi.dot(Ud);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},yt=class n{constructor(e,t,i,r,s,o,a,c,l,u,d,h,f,g,v,m){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,c,l,u,d,h,f,g,v,m)}set(e,t,i,r,s,o,a,c,l,u,d,h,f,g,v,m){let p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=r,p[1]=s,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=u,p[10]=d,p[14]=h,p[3]=f,p[7]=g,p[11]=v,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,i=e.elements,r=1/ss.setFromMatrixColumn(e,0).length(),s=1/ss.setFromMatrixColumn(e,1).length(),o=1/ss.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),c=Math.cos(r),l=Math.sin(r),u=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){let h=o*u,f=o*d,g=a*u,v=a*d;t[0]=c*u,t[4]=-c*d,t[8]=l,t[1]=f+g*l,t[5]=h-v*l,t[9]=-a*c,t[2]=v-h*l,t[6]=g+f*l,t[10]=o*c}else if(e.order==="YXZ"){let h=c*u,f=c*d,g=l*u,v=l*d;t[0]=h+v*a,t[4]=g*a-f,t[8]=o*l,t[1]=o*d,t[5]=o*u,t[9]=-a,t[2]=f*a-g,t[6]=v+h*a,t[10]=o*c}else if(e.order==="ZXY"){let h=c*u,f=c*d,g=l*u,v=l*d;t[0]=h-v*a,t[4]=-o*d,t[8]=g+f*a,t[1]=f+g*a,t[5]=o*u,t[9]=v-h*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){let h=o*u,f=o*d,g=a*u,v=a*d;t[0]=c*u,t[4]=g*l-f,t[8]=h*l+v,t[1]=c*d,t[5]=v*l+h,t[9]=f*l-g,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){let h=o*c,f=o*l,g=a*c,v=a*l;t[0]=c*u,t[4]=v-h*d,t[8]=g*d+f,t[1]=d,t[5]=o*u,t[9]=-a*u,t[2]=-l*u,t[6]=f*d+g,t[10]=h-v*d}else if(e.order==="XZY"){let h=o*c,f=o*l,g=a*c,v=a*l;t[0]=c*u,t[4]=-d,t[8]=l*u,t[1]=h*d+v,t[5]=o*u,t[9]=f*d-g,t[2]=g*d-f,t[6]=a*u,t[10]=v*d+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(wS,e,ES)}lookAt(e,t,i){let r=this.elements;return dn.subVectors(e,t),dn.lengthSq()===0&&(dn.z=1),dn.normalize(),Ri.crossVectors(i,dn),Ri.lengthSq()===0&&(Math.abs(i.z)===1?dn.x+=1e-4:dn.z+=1e-4,dn.normalize(),Ri.crossVectors(i,dn)),Ri.normalize(),qa.crossVectors(dn,Ri),r[0]=Ri.x,r[4]=qa.x,r[8]=dn.x,r[1]=Ri.y,r[5]=qa.y,r[9]=dn.y,r[2]=Ri.z,r[6]=qa.z,r[10]=dn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],c=i[8],l=i[12],u=i[1],d=i[5],h=i[9],f=i[13],g=i[2],v=i[6],m=i[10],p=i[14],b=i[3],M=i[7],E=i[11],L=i[15],C=r[0],D=r[4],O=r[8],w=r[12],_=r[1],A=r[5],G=r[9],B=r[13],J=r[2],Z=r[6],j=r[10],Q=r[14],H=r[3],le=r[7],fe=r[11],_e=r[15];return s[0]=o*C+a*_+c*J+l*H,s[4]=o*D+a*A+c*Z+l*le,s[8]=o*O+a*G+c*j+l*fe,s[12]=o*w+a*B+c*Q+l*_e,s[1]=u*C+d*_+h*J+f*H,s[5]=u*D+d*A+h*Z+f*le,s[9]=u*O+d*G+h*j+f*fe,s[13]=u*w+d*B+h*Q+f*_e,s[2]=g*C+v*_+m*J+p*H,s[6]=g*D+v*A+m*Z+p*le,s[10]=g*O+v*G+m*j+p*fe,s[14]=g*w+v*B+m*Q+p*_e,s[3]=b*C+M*_+E*J+L*H,s[7]=b*D+M*A+E*Z+L*le,s[11]=b*O+M*G+E*j+L*fe,s[15]=b*w+M*B+E*Q+L*_e,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],c=e[9],l=e[13],u=e[2],d=e[6],h=e[10],f=e[14],g=e[3],v=e[7],m=e[11],p=e[15];return g*(+s*c*d-r*l*d-s*a*h+i*l*h+r*a*f-i*c*f)+v*(+t*c*f-t*l*h+s*o*h-r*o*f+r*l*u-s*c*u)+m*(+t*l*d-t*a*f-s*o*d+i*o*f+s*a*u-i*l*u)+p*(-r*a*u-t*c*d+t*a*h+r*o*d-i*o*h+i*c*u)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],d=e[9],h=e[10],f=e[11],g=e[12],v=e[13],m=e[14],p=e[15],b=d*m*l-v*h*l+v*c*f-a*m*f-d*c*p+a*h*p,M=g*h*l-u*m*l-g*c*f+o*m*f+u*c*p-o*h*p,E=u*v*l-g*d*l+g*a*f-o*v*f-u*a*p+o*d*p,L=g*d*c-u*v*c-g*a*h+o*v*h+u*a*m-o*d*m,C=t*b+i*M+r*E+s*L;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let D=1/C;return e[0]=b*D,e[1]=(v*h*s-d*m*s-v*r*f+i*m*f+d*r*p-i*h*p)*D,e[2]=(a*m*s-v*c*s+v*r*l-i*m*l-a*r*p+i*c*p)*D,e[3]=(d*c*s-a*h*s-d*r*l+i*h*l+a*r*f-i*c*f)*D,e[4]=M*D,e[5]=(u*m*s-g*h*s+g*r*f-t*m*f-u*r*p+t*h*p)*D,e[6]=(g*c*s-o*m*s-g*r*l+t*m*l+o*r*p-t*c*p)*D,e[7]=(o*h*s-u*c*s+u*r*l-t*h*l-o*r*f+t*c*f)*D,e[8]=E*D,e[9]=(g*d*s-u*v*s-g*i*f+t*v*f+u*i*p-t*d*p)*D,e[10]=(o*v*s-g*a*s+g*i*l-t*v*l-o*i*p+t*a*p)*D,e[11]=(u*a*s-o*d*s-u*i*l+t*d*l+o*i*f-t*a*f)*D,e[12]=L*D,e[13]=(u*v*r-g*d*r+g*i*h-t*v*h-u*i*m+t*d*m)*D,e[14]=(g*a*r-o*v*r-g*i*c+t*v*c+o*i*m-t*a*m)*D,e[15]=(o*d*r-u*a*r+u*i*c-t*d*c-o*i*h+t*a*h)*D,this}scale(e){let t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,c=e.z,l=s*o,u=s*a;return this.set(l*o+i,l*a-r*c,l*c+r*a,0,l*a+r*c,u*a+i,u*c-r*o,0,l*c-r*a,u*c+r*o,s*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){let r=this.elements,s=t._x,o=t._y,a=t._z,c=t._w,l=s+s,u=o+o,d=a+a,h=s*l,f=s*u,g=s*d,v=o*u,m=o*d,p=a*d,b=c*l,M=c*u,E=c*d,L=i.x,C=i.y,D=i.z;return r[0]=(1-(v+p))*L,r[1]=(f+E)*L,r[2]=(g-M)*L,r[3]=0,r[4]=(f-E)*C,r[5]=(1-(h+p))*C,r[6]=(m+b)*C,r[7]=0,r[8]=(g+M)*D,r[9]=(m-b)*D,r[10]=(1-(h+v))*D,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){let r=this.elements,s=ss.set(r[0],r[1],r[2]).length(),o=ss.set(r[4],r[5],r[6]).length(),a=ss.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],On.copy(this);let l=1/s,u=1/o,d=1/a;return On.elements[0]*=l,On.elements[1]*=l,On.elements[2]*=l,On.elements[4]*=u,On.elements[5]*=u,On.elements[6]*=u,On.elements[8]*=d,On.elements[9]*=d,On.elements[10]*=d,t.setFromRotationMatrix(On),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o,a=yi){let c=this.elements,l=2*s/(t-e),u=2*s/(i-r),d=(t+e)/(t-e),h=(i+r)/(i-r),f,g;if(a===yi)f=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===bc)f=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=h,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=yi){let c=this.elements,l=1/(t-e),u=1/(i-r),d=1/(o-s),h=(t+e)*l,f=(i+r)*u,g,v;if(a===yi)g=(o+s)*d,v=-2*d;else if(a===bc)g=s*d,v=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-h,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=v,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},ss=new R,On=new yt,wS=new R(0,0,0),ES=new R(1,1,1),Ri=new R,qa=new R,dn=new R,X0=new yt,Y0=new zi,Mr=(()=>{class n{constructor(t=0,i=0,r=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=r,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,r,s=this._order){return this._x=t,this._y=i,this._z=r,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,r=!0){let s=t.elements,o=s[0],a=s[4],c=s[8],l=s[1],u=s[5],d=s[9],h=s[2],f=s[6],g=s[10];switch(i){case"XYZ":this._y=Math.asin(rn(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-d,g),this._z=Math.atan2(-a,o)):(this._x=Math.atan2(f,u),this._z=0);break;case"YXZ":this._x=Math.asin(-rn(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(c,g),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-h,o),this._z=0);break;case"ZXY":this._x=Math.asin(rn(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,g),this._z=Math.atan2(-a,u)):(this._y=0,this._z=Math.atan2(l,o));break;case"ZYX":this._y=Math.asin(-rn(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,g),this._z=Math.atan2(l,o)):(this._x=0,this._z=Math.atan2(-a,u));break;case"YZX":this._z=Math.asin(rn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,u),this._y=Math.atan2(-h,o)):(this._x=0,this._y=Math.atan2(c,g));break;case"XZY":this._z=Math.asin(-rn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,u),this._y=Math.atan2(c,o)):(this._x=Math.atan2(-d,g),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,r){return X0.makeRotationFromQuaternion(t),this.setFromRotationMatrix(X0,i,r)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return Y0.setFromEuler(this),this.setFromQuaternion(Y0,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}return n.DEFAULT_ORDER="XYZ",n})(),Dc=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},SS=0,Z0=new R,os=new zi,di=new yt,Xa=new R,uo=new R,CS=new R,DS=new zi,J0=new R(1,0,0),K0=new R(0,1,0),Q0=new R(0,0,1),ev={type:"added"},TS={type:"removed"},as={type:"childadded",child:null},Vd={type:"childremoved",child:null},ei=(()=>{class n extends Bi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:SS++}),this.uuid=wo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let t=new R,i=new Mr,r=new zi,s=new R(1,1,1);function o(){r.setFromEuler(i,!1)}function a(){i.setFromQuaternion(r,void 0,!1)}i._onChange(o),r._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new yt},normalMatrix:{value:new Be}}),this.matrix=new yt,this.matrixWorld=new yt,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Dc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return os.setFromAxisAngle(t,i),this.quaternion.multiply(os),this}rotateOnWorldAxis(t,i){return os.setFromAxisAngle(t,i),this.quaternion.premultiply(os),this}rotateX(t){return this.rotateOnAxis(J0,t)}rotateY(t){return this.rotateOnAxis(K0,t)}rotateZ(t){return this.rotateOnAxis(Q0,t)}translateOnAxis(t,i){return Z0.copy(t).applyQuaternion(this.quaternion),this.position.add(Z0.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(J0,t)}translateY(t){return this.translateOnAxis(K0,t)}translateZ(t){return this.translateOnAxis(Q0,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(di.copy(this.matrixWorld).invert())}lookAt(t,i,r){t.isVector3?Xa.copy(t):Xa.set(t,i,r);let s=this.parent;this.updateWorldMatrix(!0,!1),uo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?di.lookAt(uo,Xa,this.up):di.lookAt(Xa,uo,this.up),this.quaternion.setFromRotationMatrix(di),s&&(di.extractRotation(s.matrixWorld),os.setFromRotationMatrix(di),this.quaternion.premultiply(os.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(ev),as.child=t,this.dispatchEvent(as),as.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}let i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(TS),Vd.child=t,this.dispatchEvent(Vd),Vd.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),di.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),di.multiply(t.parent.matrixWorld)),t.applyMatrix4(di),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(ev),as.child=t,this.dispatchEvent(as),as.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let r=0,s=this.children.length;r<s;r++){let a=this.children[r].getObjectByProperty(t,i);if(a!==void 0)return a}}getObjectsByProperty(t,i,r=[]){this[t]===i&&r.push(this);let s=this.children;for(let o=0,a=s.length;o<a;o++)s[o].getObjectsByProperty(t,i,r);return r}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(uo,t,CS),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(uo,DS,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);let i=this.children;for(let r=0,s=i.length;r<s;r++)i[r].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let i=this.children;for(let r=0,s=i.length;r<s;r++)i[r].traverseVisible(t)}traverseAncestors(t){let i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let i=this.children;for(let r=0,s=i.length;r<s;r++)i[r].updateMatrixWorld(t)}updateWorldMatrix(t,i){let r=this.parent;if(t===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){let s=this.children;for(let o=0,a=s.length;o<a;o++)s[o].updateWorldMatrix(!1,!0)}}toJSON(t){let i=t===void 0||typeof t=="string",r={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(c=>({boxInitialized:c.boxInitialized,boxMin:c.box.min.toArray(),boxMax:c.box.max.toArray(),sphereInitialized:c.sphereInitialized,sphereRadius:c.sphere.radius,sphereCenter:c.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function o(c,l){return c[l.uuid]===void 0&&(c[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=o(t.geometries,this.geometry);let c=this.geometry.parameters;if(c!==void 0&&c.shapes!==void 0){let l=c.shapes;if(Array.isArray(l))for(let u=0,d=l.length;u<d;u++){let h=l[u];o(t.shapes,h)}else o(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let c=[];for(let l=0,u=this.material.length;l<u;l++)c.push(o(t.materials,this.material[l]));s.material=c}else s.material=o(t.materials,this.material);if(this.children.length>0){s.children=[];for(let c=0;c<this.children.length;c++)s.children.push(this.children[c].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let c=0;c<this.animations.length;c++){let l=this.animations[c];s.animations.push(o(t.animations,l))}}if(i){let c=a(t.geometries),l=a(t.materials),u=a(t.textures),d=a(t.images),h=a(t.shapes),f=a(t.skeletons),g=a(t.animations),v=a(t.nodes);c.length>0&&(r.geometries=c),l.length>0&&(r.materials=l),u.length>0&&(r.textures=u),d.length>0&&(r.images=d),h.length>0&&(r.shapes=h),f.length>0&&(r.skeletons=f),g.length>0&&(r.animations=g),v.length>0&&(r.nodes=v)}return r.object=s,r;function a(c){let l=[];for(let u in c){let d=c[u];delete d.metadata,l.push(d)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let r=0;r<t.children.length;r++){let s=t.children[r];this.add(s.clone())}return this}}return n.DEFAULT_UP=new R(0,1,0),n.DEFAULT_MATRIX_AUTO_UPDATE=!0,n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0,n})(),Ln=new R,hi=new R,Bd=new R,fi=new R,cs=new R,ls=new R,tv=new R,zd=new R,Hd=new R,Gd=new R,vs=class n{constructor(e=new R,t=new R,i=new R){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),Ln.subVectors(e,t),r.cross(Ln);let s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){Ln.subVectors(r,t),hi.subVectors(i,t),Bd.subVectors(e,t);let o=Ln.dot(Ln),a=Ln.dot(hi),c=Ln.dot(Bd),l=hi.dot(hi),u=hi.dot(Bd),d=o*l-a*a;if(d===0)return s.set(0,0,0),null;let h=1/d,f=(l*c-a*u)*h,g=(o*u-a*c)*h;return s.set(1-f-g,g,f)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,fi)===null?!1:fi.x>=0&&fi.y>=0&&fi.x+fi.y<=1}static getInterpolation(e,t,i,r,s,o,a,c){return this.getBarycoord(e,t,i,r,fi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,fi.x),c.addScaledVector(o,fi.y),c.addScaledVector(a,fi.z),c)}static isFrontFacing(e,t,i,r){return Ln.subVectors(i,t),hi.subVectors(e,t),Ln.cross(hi).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ln.subVectors(this.c,this.b),hi.subVectors(this.a,this.b),Ln.cross(hi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return n.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,r=this.b,s=this.c,o,a;cs.subVectors(r,i),ls.subVectors(s,i),zd.subVectors(e,i);let c=cs.dot(zd),l=ls.dot(zd);if(c<=0&&l<=0)return t.copy(i);Hd.subVectors(e,r);let u=cs.dot(Hd),d=ls.dot(Hd);if(u>=0&&d<=u)return t.copy(r);let h=c*d-u*l;if(h<=0&&c>=0&&u<=0)return o=c/(c-u),t.copy(i).addScaledVector(cs,o);Gd.subVectors(e,s);let f=cs.dot(Gd),g=ls.dot(Gd);if(g>=0&&f<=g)return t.copy(s);let v=f*l-c*g;if(v<=0&&l>=0&&g<=0)return a=l/(l-g),t.copy(i).addScaledVector(ls,a);let m=u*g-f*d;if(m<=0&&d-u>=0&&f-g>=0)return tv.subVectors(s,r),a=(d-u)/(d-u+(f-g)),t.copy(r).addScaledVector(tv,a);let p=1/(m+v+h);return o=v*p,a=h*p,t.copy(i).addScaledVector(cs,o).addScaledVector(ls,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Kv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ni={h:0,s:0,l:0},Ya={h:0,s:0,l:0};function Wd(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var qe=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Kn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,nt.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=nt.workingColorSpace){return this.r=e,this.g=t,this.b=i,nt.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=nt.workingColorSpace){if(e=gS(e,1),t=rn(t,0,1),i=rn(i,0,1),t===0)this.r=this.g=this.b=i;else{let s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=Wd(o,s,e+1/3),this.g=Wd(o,s,e),this.b=Wd(o,s,e-1/3)}return nt.toWorkingColorSpace(this,r),this}setStyle(e,t=Kn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Kn){let i=Kv[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ms(e.r),this.g=Ms(e.g),this.b=Ms(e.b),this}copyLinearToSRGB(e){return this.r=Pd(e.r),this.g=Pd(e.g),this.b=Pd(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Kn){return nt.fromWorkingColorSpace(Xt.copy(this),e),Math.round(rn(Xt.r*255,0,255))*65536+Math.round(rn(Xt.g*255,0,255))*256+Math.round(rn(Xt.b*255,0,255))}getHexString(e=Kn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=nt.workingColorSpace){nt.fromWorkingColorSpace(Xt.copy(this),t);let i=Xt.r,r=Xt.g,s=Xt.b,o=Math.max(i,r,s),a=Math.min(i,r,s),c,l,u=(a+o)/2;if(a===o)c=0,l=0;else{let d=o-a;switch(l=u<=.5?d/(o+a):d/(2-o-a),o){case i:c=(r-s)/d+(r<s?6:0);break;case r:c=(s-i)/d+2;break;case s:c=(i-r)/d+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=nt.workingColorSpace){return nt.fromWorkingColorSpace(Xt.copy(this),t),e.r=Xt.r,e.g=Xt.g,e.b=Xt.b,e}getStyle(e=Kn){nt.fromWorkingColorSpace(Xt.copy(this),e);let t=Xt.r,i=Xt.g,r=Xt.b;return e!==Kn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(Ni),this.setHSL(Ni.h+e,Ni.s+t,Ni.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Ni),e.getHSL(Ya);let i=Ad(Ni.h,Ya.h,t),r=Ad(Ni.s,Ya.s,t),s=Ad(Ni.l,Ya.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Xt=new qe;qe.NAMES=Kv;var AS=0,Hi=class extends Bi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:AS++}),this.uuid=wo(),this.name="",this.type="Material",this.blending=_s,this.side=Vi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=nh,this.blendDst=ih,this.blendEquation=mr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new qe(0,0,0),this.blendAlpha=0,this.depthFunc=vc,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=z0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=es,this.stencilZFail=es,this.stencilZPass=es,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==_s&&(i.blending=this.blending),this.side!==Vi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==nh&&(i.blendSrc=this.blendSrc),this.blendDst!==ih&&(i.blendDst=this.blendDst),this.blendEquation!==mr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==vc&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==z0&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==es&&(i.stencilFail=this.stencilFail),this.stencilZFail!==es&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==es&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){let o=[];for(let a in s){let c=s[a];delete c.metadata,o.push(c)}return o}if(t){let s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},Tc=class extends Hi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new qe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Mr,this.combine=Uv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var Tt=new R,Za=new He,on=class{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=H0,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=vi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return mo("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Za.fromBufferAttribute(this,t),Za.applyMatrix3(e),this.setXY(t,Za.x,Za.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Tt.fromBufferAttribute(this,t),Tt.applyMatrix3(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Tt.fromBufferAttribute(this,t),Tt.applyMatrix4(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Tt.fromBufferAttribute(this,t),Tt.applyNormalMatrix(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Tt.fromBufferAttribute(this,t),Tt.transformDirection(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=oo(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=nn(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=oo(t,this.array)),t}setX(e,t){return this.normalized&&(t=nn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=oo(t,this.array)),t}setY(e,t){return this.normalized&&(t=nn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=oo(t,this.array)),t}setZ(e,t){return this.normalized&&(t=nn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=oo(t,this.array)),t}setW(e,t){return this.normalized&&(t=nn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=nn(t,this.array),i=nn(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=nn(t,this.array),i=nn(i,this.array),r=nn(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=nn(t,this.array),i=nn(i,this.array),r=nn(r,this.array),s=nn(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==H0&&(e.usage=this.usage),e}};var Ac=class extends on{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var Ic=class extends on{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var Kt=class extends on{constructor(e,t,i){super(new Float32Array(e),t,i)}},IS=0,_n=new yt,jd=new ei,us=new R,hn=new xr,ho=new xr,Lt=new R,Mn=class n extends Bi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:IS++}),this.uuid=wo(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Jv(e)?Ic:Ac)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let s=new Be().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return _n.makeRotationFromQuaternion(e),this.applyMatrix4(_n),this}rotateX(e){return _n.makeRotationX(e),this.applyMatrix4(_n),this}rotateY(e){return _n.makeRotationY(e),this.applyMatrix4(_n),this}rotateZ(e){return _n.makeRotationZ(e),this.applyMatrix4(_n),this}translate(e,t,i){return _n.makeTranslation(e,t,i),this.applyMatrix4(_n),this}scale(e,t,i){return _n.makeScale(e,t,i),this.applyMatrix4(_n),this}lookAt(e){return jd.lookAt(e),jd.updateMatrix(),this.applyMatrix4(jd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(us).negate(),this.translate(us.x,us.y,us.z),this}setFromPoints(e){let t=[];for(let i=0,r=e.length;i<r;i++){let s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Kt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new xr);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){let s=t[i];hn.setFromBufferAttribute(s),this.morphTargetsRelative?(Lt.addVectors(this.boundingBox.min,hn.min),this.boundingBox.expandByPoint(Lt),Lt.addVectors(this.boundingBox.max,hn.max),this.boundingBox.expandByPoint(Lt)):(this.boundingBox.expandByPoint(hn.min),this.boundingBox.expandByPoint(hn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ds);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new R,1/0);return}if(e){let i=this.boundingSphere.center;if(hn.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){let a=t[s];ho.setFromBufferAttribute(a),this.morphTargetsRelative?(Lt.addVectors(hn.min,ho.min),hn.expandByPoint(Lt),Lt.addVectors(hn.max,ho.max),hn.expandByPoint(Lt)):(hn.expandByPoint(ho.min),hn.expandByPoint(ho.max))}hn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Lt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Lt));if(t)for(let s=0,o=t.length;s<o;s++){let a=t[s],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)Lt.fromBufferAttribute(a,l),c&&(us.fromBufferAttribute(e,l),Lt.add(us)),r=Math.max(r,i.distanceToSquared(Lt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new on(new Float32Array(4*i.count),4));let o=this.getAttribute("tangent"),a=[],c=[];for(let O=0;O<i.count;O++)a[O]=new R,c[O]=new R;let l=new R,u=new R,d=new R,h=new He,f=new He,g=new He,v=new R,m=new R;function p(O,w,_){l.fromBufferAttribute(i,O),u.fromBufferAttribute(i,w),d.fromBufferAttribute(i,_),h.fromBufferAttribute(s,O),f.fromBufferAttribute(s,w),g.fromBufferAttribute(s,_),u.sub(l),d.sub(l),f.sub(h),g.sub(h);let A=1/(f.x*g.y-g.x*f.y);isFinite(A)&&(v.copy(u).multiplyScalar(g.y).addScaledVector(d,-f.y).multiplyScalar(A),m.copy(d).multiplyScalar(f.x).addScaledVector(u,-g.x).multiplyScalar(A),a[O].add(v),a[w].add(v),a[_].add(v),c[O].add(m),c[w].add(m),c[_].add(m))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let O=0,w=b.length;O<w;++O){let _=b[O],A=_.start,G=_.count;for(let B=A,J=A+G;B<J;B+=3)p(e.getX(B+0),e.getX(B+1),e.getX(B+2))}let M=new R,E=new R,L=new R,C=new R;function D(O){L.fromBufferAttribute(r,O),C.copy(L);let w=a[O];M.copy(w),M.sub(L.multiplyScalar(L.dot(w))).normalize(),E.crossVectors(C,w);let A=E.dot(c[O])<0?-1:1;o.setXYZW(O,M.x,M.y,M.z,A)}for(let O=0,w=b.length;O<w;++O){let _=b[O],A=_.start,G=_.count;for(let B=A,J=A+G;B<J;B+=3)D(e.getX(B+0)),D(e.getX(B+1)),D(e.getX(B+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new on(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,f=i.count;h<f;h++)i.setXYZ(h,0,0,0);let r=new R,s=new R,o=new R,a=new R,c=new R,l=new R,u=new R,d=new R;if(e)for(let h=0,f=e.count;h<f;h+=3){let g=e.getX(h+0),v=e.getX(h+1),m=e.getX(h+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,v),o.fromBufferAttribute(t,m),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),a.fromBufferAttribute(i,g),c.fromBufferAttribute(i,v),l.fromBufferAttribute(i,m),a.add(u),c.add(u),l.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(v,c.x,c.y,c.z),i.setXYZ(m,l.x,l.y,l.z)}else for(let h=0,f=t.count;h<f;h+=3)r.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Lt.fromBufferAttribute(e,t),Lt.normalize(),e.setXYZ(t,Lt.x,Lt.y,Lt.z)}toNonIndexed(){function e(a,c){let l=a.array,u=a.itemSize,d=a.normalized,h=new l.constructor(c.length*u),f=0,g=0;for(let v=0,m=c.length;v<m;v++){a.isInterleavedBufferAttribute?f=c[v]*a.data.stride+a.offset:f=c[v]*u;for(let p=0;p<u;p++)h[g++]=l[f++]}return new on(h,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,r=this.attributes;for(let a in r){let c=r[a],l=e(c,i);t.setAttribute(a,l)}let s=this.morphAttributes;for(let a in s){let c=[],l=s[a];for(let u=0,d=l.length;u<d;u++){let h=l[u],f=e(h,i);c.push(f)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let c in i){let l=i[c];e.data.attributes[c]=l.toJSON(e.data)}let r={},s=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],u=[];for(let d=0,h=l.length;d<h;d++){let f=l[d];u.push(f.toJSON(e.data))}u.length>0&&(r[c]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone(t));let r=e.attributes;for(let l in r){let u=r[l];this.setAttribute(l,u.clone(t))}let s=e.morphAttributes;for(let l in s){let u=[],d=s[l];for(let h=0,f=d.length;h<f;h++)u.push(d[h].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let l=0,u=o.length;l<u;l++){let d=o[l];this.addGroup(d.start,d.count,d.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},nv=new yt,ur=new Cc,Ja=new Ds,iv=new R,ds=new R,hs=new R,fs=new R,$d=new R,Ka=new R,Qa=new He,ec=new He,tc=new He,rv=new R,sv=new R,ov=new R,nc=new R,ic=new R,fn=class extends ei{constructor(e=new Mn,t=new Tc){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){let i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);let a=this.morphTargetInfluences;if(s&&a){Ka.set(0,0,0);for(let c=0,l=s.length;c<l;c++){let u=a[c],d=s[c];u!==0&&($d.fromBufferAttribute(d,e),o?Ka.addScaledVector($d,u):Ka.addScaledVector($d.sub(t),u))}t.add(Ka)}return t}raycast(e,t){let i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ja.copy(i.boundingSphere),Ja.applyMatrix4(s),ur.copy(e.ray).recast(e.near),!(Ja.containsPoint(ur.origin)===!1&&(ur.intersectSphere(Ja,iv)===null||ur.origin.distanceToSquared(iv)>(e.far-e.near)**2))&&(nv.copy(s).invert(),ur.copy(e.ray).applyMatrix4(nv),!(i.boundingBox!==null&&ur.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,ur)))}_computeIntersections(e,t,i){let r,s=this.geometry,o=this.material,a=s.index,c=s.attributes.position,l=s.attributes.uv,u=s.attributes.uv1,d=s.attributes.normal,h=s.groups,f=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,v=h.length;g<v;g++){let m=h[g],p=o[m.materialIndex],b=Math.max(m.start,f.start),M=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let E=b,L=M;E<L;E+=3){let C=a.getX(E),D=a.getX(E+1),O=a.getX(E+2);r=rc(this,p,e,i,l,u,d,C,D,O),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{let g=Math.max(0,f.start),v=Math.min(a.count,f.start+f.count);for(let m=g,p=v;m<p;m+=3){let b=a.getX(m),M=a.getX(m+1),E=a.getX(m+2);r=rc(this,o,e,i,l,u,d,b,M,E),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,v=h.length;g<v;g++){let m=h[g],p=o[m.materialIndex],b=Math.max(m.start,f.start),M=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let E=b,L=M;E<L;E+=3){let C=E,D=E+1,O=E+2;r=rc(this,p,e,i,l,u,d,C,D,O),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{let g=Math.max(0,f.start),v=Math.min(c.count,f.start+f.count);for(let m=g,p=v;m<p;m+=3){let b=m,M=m+1,E=m+2;r=rc(this,o,e,i,l,u,d,b,M,E),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}};function PS(n,e,t,i,r,s,o,a){let c;if(e.side===sn?c=i.intersectTriangle(o,s,r,!0,a):c=i.intersectTriangle(r,s,o,e.side===Vi,a),c===null)return null;ic.copy(a),ic.applyMatrix4(n.matrixWorld);let l=t.ray.origin.distanceTo(ic);return l<t.near||l>t.far?null:{distance:l,point:ic.clone(),object:n}}function rc(n,e,t,i,r,s,o,a,c,l){n.getVertexPosition(a,ds),n.getVertexPosition(c,hs),n.getVertexPosition(l,fs);let u=PS(n,e,t,i,ds,hs,fs,nc);if(u){r&&(Qa.fromBufferAttribute(r,a),ec.fromBufferAttribute(r,c),tc.fromBufferAttribute(r,l),u.uv=vs.getInterpolation(nc,ds,hs,fs,Qa,ec,tc,new He)),s&&(Qa.fromBufferAttribute(s,a),ec.fromBufferAttribute(s,c),tc.fromBufferAttribute(s,l),u.uv1=vs.getInterpolation(nc,ds,hs,fs,Qa,ec,tc,new He)),o&&(rv.fromBufferAttribute(o,a),sv.fromBufferAttribute(o,c),ov.fromBufferAttribute(o,l),u.normal=vs.getInterpolation(nc,ds,hs,fs,rv,sv,ov,new R),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));let d={a,b:c,c:l,normal:new R,materialIndex:0};vs.getNormal(ds,hs,fs,d.normal),u.face=d}return u}var br=class n extends Mn{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};let a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);let c=[],l=[],u=[],d=[],h=0,f=0;g("z","y","x",-1,-1,i,t,e,o,s,0),g("z","y","x",1,-1,i,t,-e,o,s,1),g("x","z","y",1,1,e,i,t,r,o,2),g("x","z","y",1,-1,e,i,-t,r,o,3),g("x","y","z",1,-1,e,t,i,r,s,4),g("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(c),this.setAttribute("position",new Kt(l,3)),this.setAttribute("normal",new Kt(u,3)),this.setAttribute("uv",new Kt(d,2));function g(v,m,p,b,M,E,L,C,D,O,w){let _=E/D,A=L/O,G=E/2,B=L/2,J=C/2,Z=D+1,j=O+1,Q=0,H=0,le=new R;for(let fe=0;fe<j;fe++){let _e=fe*A-B;for(let Xe=0;Xe<Z;Xe++){let st=Xe*_-G;le[v]=st*b,le[m]=_e*M,le[p]=J,l.push(le.x,le.y,le.z),le[v]=0,le[m]=0,le[p]=C>0?1:-1,u.push(le.x,le.y,le.z),d.push(Xe/D),d.push(1-fe/O),Q+=1}}for(let fe=0;fe<O;fe++)for(let _e=0;_e<D;_e++){let Xe=h+_e+Z*fe,st=h+_e+Z*(fe+1),W=h+(_e+1)+Z*(fe+1),te=h+(_e+1)+Z*fe;c.push(Xe,st,te),c.push(st,W,te),H+=6}a.addGroup(f,H,w),f+=H,h+=Q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function Ts(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function Jt(n){let e={};for(let t=0;t<n.length;t++){let i=Ts(n[t]);for(let r in i)e[r]=i[r]}return e}function RS(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Qv(n){let e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:nt.workingColorSpace}var NS={clone:Ts,merge:Jt},OS=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,LS=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,ti=class extends Hi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=OS,this.fragmentShader=LS,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ts(e.uniforms),this.uniformsGroups=RS(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let r in this.uniforms){let o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}},Pc=class extends ei{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new yt,this.projectionMatrix=new yt,this.projectionMatrixInverse=new yt,this.coordinateSystem=yi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Oi=new R,av=new He,cv=new He,Yt=class extends Pc{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Lh*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Td*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Lh*2*Math.atan(Math.tan(Td*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Oi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Oi.x,Oi.y).multiplyScalar(-e/Oi.z),Oi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Oi.x,Oi.y).multiplyScalar(-e/Oi.z)}getViewSize(e,t){return this.getViewBounds(e,av,cv),t.subVectors(cv,av)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Td*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;s+=o.offsetX*r/c,t-=o.offsetY*i/l,r*=o.width/c,i*=o.height/l}let a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},ps=-90,ms=1,Vh=class extends ei{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new Yt(ps,ms,e,t);r.layers=this.layers,this.add(r);let s=new Yt(ps,ms,e,t);s.layers=this.layers,this.add(s);let o=new Yt(ps,ms,e,t);o.layers=this.layers,this.add(o);let a=new Yt(ps,ms,e,t);a.layers=this.layers,this.add(a);let c=new Yt(ps,ms,e,t);c.layers=this.layers,this.add(c);let l=new Yt(ps,ms,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,c]=t;for(let l of t)this.remove(l);if(e===yi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===bc)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,o,a,c,l,u]=this.children,d=e.getRenderTarget(),h=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,o),e.setRenderTarget(i,2,r),e.render(t,a),e.setRenderTarget(i,3,r),e.render(t,c),e.setRenderTarget(i,4,r),e.render(t,l),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,r),e.render(t,u),e.setRenderTarget(d,h,f),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},Rc=class extends Sr{constructor(e,t,i,r,s,o,a,c,l,u){e=e!==void 0?e:[],t=t!==void 0?t:ws,super(e,t,i,r,s,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Bh=class extends xi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Rc(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Fn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new br(5,5,5),s=new ti({name:"CubemapFromEquirect",uniforms:Ts(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:sn,blending:ki});s.uniforms.tEquirect.value=t;let o=new fn(r,s),a=t.minFilter;return t.minFilter===yr&&(t.minFilter=Fn),new Vh(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,r){let s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}},qd=new R,FS=new R,kS=new Be,mi=class{constructor(e=new R(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let r=qd.subVectors(i,t).cross(FS.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let i=e.delta(qd),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||kS.getNormalMatrix(e),r=this.coplanarPoint(qd).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},dr=new Ds,sc=new R,yo=class{constructor(e=new mi,t=new mi,i=new mi,r=new mi,s=new mi,o=new mi){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=yi){let i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],c=r[3],l=r[4],u=r[5],d=r[6],h=r[7],f=r[8],g=r[9],v=r[10],m=r[11],p=r[12],b=r[13],M=r[14],E=r[15];if(i[0].setComponents(c-s,h-l,m-f,E-p).normalize(),i[1].setComponents(c+s,h+l,m+f,E+p).normalize(),i[2].setComponents(c+o,h+u,m+g,E+b).normalize(),i[3].setComponents(c-o,h-u,m-g,E-b).normalize(),i[4].setComponents(c-a,h-d,m-v,E-M).normalize(),t===yi)i[5].setComponents(c+a,h+d,m+v,E+M).normalize();else if(t===bc)i[5].setComponents(a,d,v,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),dr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),dr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(dr)}intersectsSprite(e){return dr.center.set(0,0,0),dr.radius=.7071067811865476,dr.applyMatrix4(e.matrixWorld),this.intersectsSphere(dr)}intersectsSphere(e){let t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let r=t[i];if(sc.x=r.normal.x>0?e.max.x:e.min.x,sc.y=r.normal.y>0?e.max.y:e.min.y,sc.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(sc)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function ey(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function US(n){let e=new WeakMap;function t(a,c){let l=a.array,u=a.usage,d=l.byteLength,h=n.createBuffer();n.bindBuffer(c,h),n.bufferData(c,l,u),a.onUploadCallback();let f;if(l instanceof Float32Array)f=n.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=n.SHORT;else if(l instanceof Uint32Array)f=n.UNSIGNED_INT;else if(l instanceof Int32Array)f=n.INT;else if(l instanceof Int8Array)f=n.BYTE;else if(l instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:h,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,c,l){let u=c.array,d=c._updateRange,h=c.updateRanges;if(n.bindBuffer(l,a),d.count===-1&&h.length===0&&n.bufferSubData(l,0,u),h.length!==0){for(let f=0,g=h.length;f<g;f++){let v=h[f];n.bufferSubData(l,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}c.clearUpdateRanges()}d.count!==-1&&(n.bufferSubData(l,d.offset*u.BYTES_PER_ELEMENT,u,d.offset,d.count),d.count=-1),c.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=e.get(a);c&&(n.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,a,c),l.version=a.version}}return{get:r,remove:s,update:o}}var Nc=class n extends Mn{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};let s=e/2,o=t/2,a=Math.floor(i),c=Math.floor(r),l=a+1,u=c+1,d=e/a,h=t/c,f=[],g=[],v=[],m=[];for(let p=0;p<u;p++){let b=p*h-o;for(let M=0;M<l;M++){let E=M*d-s;g.push(E,-b,0),v.push(0,0,1),m.push(M/a),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let b=0;b<a;b++){let M=b+l*p,E=b+l*(p+1),L=b+1+l*(p+1),C=b+1+l*p;f.push(M,E,C),f.push(E,L,C)}this.setIndex(f),this.setAttribute("position",new Kt(g,3)),this.setAttribute("normal",new Kt(v,3)),this.setAttribute("uv",new Kt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}},VS=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,BS=`#ifdef USE_ALPHAHASH
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
#endif`,zS=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,HS=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,GS=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,WS=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,jS=`#ifdef USE_AOMAP
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
#endif`,$S=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,qS=`#ifdef USE_BATCHING
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
#endif`,XS=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,YS=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ZS=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,JS=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,KS=`#ifdef USE_IRIDESCENCE
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
#endif`,QS=`#ifdef USE_BUMPMAP
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
#endif`,eC=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,tC=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,nC=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,iC=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,rC=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,sC=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,oC=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,aC=`#if defined( USE_COLOR_ALPHA )
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
#endif`,cC=`#define PI 3.141592653589793
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
} // validated`,lC=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,uC=`vec3 transformedNormal = objectNormal;
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
#endif`,dC=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,hC=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,fC=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,pC=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,mC="gl_FragColor = linearToOutputTexel( gl_FragColor );",gC=`
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
}`,vC=`#ifdef USE_ENVMAP
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
#endif`,yC=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,_C=`#ifdef USE_ENVMAP
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
#endif`,xC=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,MC=`#ifdef USE_ENVMAP
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
#endif`,bC=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,wC=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,EC=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,SC=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,CC=`#ifdef USE_GRADIENTMAP
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
}`,DC=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,TC=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,AC=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,IC=`uniform bool receiveShadow;
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
#endif`,PC=`#ifdef USE_ENVMAP
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
#endif`,RC=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,NC=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,OC=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,LC=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,FC=`PhysicalMaterial material;
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
#endif`,kC=`struct PhysicalMaterial {
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
}`,UC=`
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
#endif`,VC=`#if defined( RE_IndirectDiffuse )
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
#endif`,BC=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,zC=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,HC=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,GC=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,WC=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,jC=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,$C=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,qC=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,XC=`#if defined( USE_POINTS_UV )
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
#endif`,YC=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ZC=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,JC=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,KC=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,QC=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,eD=`#ifdef USE_MORPHTARGETS
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
#endif`,tD=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,nD=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,iD=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,rD=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,sD=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,oD=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,aD=`#ifdef USE_NORMALMAP
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
#endif`,cD=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,lD=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,uD=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,dD=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,hD=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,fD=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,pD=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,mD=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,gD=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,vD=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,yD=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,_D=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,xD=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,MD=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,bD=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,wD=`float getShadowMask() {
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
}`,ED=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,SD=`#ifdef USE_SKINNING
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
#endif`,CD=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,DD=`#ifdef USE_SKINNING
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
#endif`,TD=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,AD=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ID=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,PD=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,RD=`#ifdef USE_TRANSMISSION
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
#endif`,ND=`#ifdef USE_TRANSMISSION
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
#endif`,OD=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,LD=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,FD=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,kD=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,UD=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,VD=`uniform sampler2D t2D;
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
}`,BD=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,zD=`#ifdef ENVMAP_TYPE_CUBE
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
}`,HD=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,GD=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,WD=`#include <common>
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
}`,jD=`#if DEPTH_PACKING == 3200
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
}`,$D=`#define DISTANCE
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
}`,qD=`#define DISTANCE
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
}`,XD=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,YD=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ZD=`uniform float scale;
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
}`,JD=`uniform vec3 diffuse;
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
}`,KD=`#include <common>
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
}`,QD=`uniform vec3 diffuse;
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
}`,e1=`#define LAMBERT
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
}`,t1=`#define LAMBERT
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
}`,n1=`#define MATCAP
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
}`,i1=`#define MATCAP
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
}`,r1=`#define NORMAL
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
}`,s1=`#define NORMAL
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
}`,o1=`#define PHONG
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
}`,a1=`#define PHONG
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
}`,c1=`#define STANDARD
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
}`,l1=`#define STANDARD
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
}`,u1=`#define TOON
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
}`,d1=`#define TOON
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
}`,h1=`uniform float size;
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
}`,f1=`uniform vec3 diffuse;
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
}`,p1=`#include <common>
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
}`,m1=`uniform vec3 color;
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
}`,g1=`uniform float rotation;
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
}`,v1=`uniform vec3 diffuse;
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
}`,Ve={alphahash_fragment:VS,alphahash_pars_fragment:BS,alphamap_fragment:zS,alphamap_pars_fragment:HS,alphatest_fragment:GS,alphatest_pars_fragment:WS,aomap_fragment:jS,aomap_pars_fragment:$S,batching_pars_vertex:qS,batching_vertex:XS,begin_vertex:YS,beginnormal_vertex:ZS,bsdfs:JS,iridescence_fragment:KS,bumpmap_pars_fragment:QS,clipping_planes_fragment:eC,clipping_planes_pars_fragment:tC,clipping_planes_pars_vertex:nC,clipping_planes_vertex:iC,color_fragment:rC,color_pars_fragment:sC,color_pars_vertex:oC,color_vertex:aC,common:cC,cube_uv_reflection_fragment:lC,defaultnormal_vertex:uC,displacementmap_pars_vertex:dC,displacementmap_vertex:hC,emissivemap_fragment:fC,emissivemap_pars_fragment:pC,colorspace_fragment:mC,colorspace_pars_fragment:gC,envmap_fragment:vC,envmap_common_pars_fragment:yC,envmap_pars_fragment:_C,envmap_pars_vertex:xC,envmap_physical_pars_fragment:PC,envmap_vertex:MC,fog_vertex:bC,fog_pars_vertex:wC,fog_fragment:EC,fog_pars_fragment:SC,gradientmap_pars_fragment:CC,lightmap_pars_fragment:DC,lights_lambert_fragment:TC,lights_lambert_pars_fragment:AC,lights_pars_begin:IC,lights_toon_fragment:RC,lights_toon_pars_fragment:NC,lights_phong_fragment:OC,lights_phong_pars_fragment:LC,lights_physical_fragment:FC,lights_physical_pars_fragment:kC,lights_fragment_begin:UC,lights_fragment_maps:VC,lights_fragment_end:BC,logdepthbuf_fragment:zC,logdepthbuf_pars_fragment:HC,logdepthbuf_pars_vertex:GC,logdepthbuf_vertex:WC,map_fragment:jC,map_pars_fragment:$C,map_particle_fragment:qC,map_particle_pars_fragment:XC,metalnessmap_fragment:YC,metalnessmap_pars_fragment:ZC,morphinstance_vertex:JC,morphcolor_vertex:KC,morphnormal_vertex:QC,morphtarget_pars_vertex:eD,morphtarget_vertex:tD,normal_fragment_begin:nD,normal_fragment_maps:iD,normal_pars_fragment:rD,normal_pars_vertex:sD,normal_vertex:oD,normalmap_pars_fragment:aD,clearcoat_normal_fragment_begin:cD,clearcoat_normal_fragment_maps:lD,clearcoat_pars_fragment:uD,iridescence_pars_fragment:dD,opaque_fragment:hD,packing:fD,premultiplied_alpha_fragment:pD,project_vertex:mD,dithering_fragment:gD,dithering_pars_fragment:vD,roughnessmap_fragment:yD,roughnessmap_pars_fragment:_D,shadowmap_pars_fragment:xD,shadowmap_pars_vertex:MD,shadowmap_vertex:bD,shadowmask_pars_fragment:wD,skinbase_vertex:ED,skinning_pars_vertex:SD,skinning_vertex:CD,skinnormal_vertex:DD,specularmap_fragment:TD,specularmap_pars_fragment:AD,tonemapping_fragment:ID,tonemapping_pars_fragment:PD,transmission_fragment:RD,transmission_pars_fragment:ND,uv_pars_fragment:OD,uv_pars_vertex:LD,uv_vertex:FD,worldpos_vertex:kD,background_vert:UD,background_frag:VD,backgroundCube_vert:BD,backgroundCube_frag:zD,cube_vert:HD,cube_frag:GD,depth_vert:WD,depth_frag:jD,distanceRGBA_vert:$D,distanceRGBA_frag:qD,equirect_vert:XD,equirect_frag:YD,linedashed_vert:ZD,linedashed_frag:JD,meshbasic_vert:KD,meshbasic_frag:QD,meshlambert_vert:e1,meshlambert_frag:t1,meshmatcap_vert:n1,meshmatcap_frag:i1,meshnormal_vert:r1,meshnormal_frag:s1,meshphong_vert:o1,meshphong_frag:a1,meshphysical_vert:c1,meshphysical_frag:l1,meshtoon_vert:u1,meshtoon_frag:d1,points_vert:h1,points_frag:f1,shadow_vert:p1,shadow_frag:m1,sprite_vert:g1,sprite_frag:v1},oe={common:{diffuse:{value:new qe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Be},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Be}},envmap:{envMap:{value:null},envMapRotation:{value:new Be},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Be}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Be}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Be},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Be},normalScale:{value:new He(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Be},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Be}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Be}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Be}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new qe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new qe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0},uvTransform:{value:new Be}},sprite:{diffuse:{value:new qe(16777215)},opacity:{value:1},center:{value:new He(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Be},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0}}},Qn={basic:{uniforms:Jt([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.fog]),vertexShader:Ve.meshbasic_vert,fragmentShader:Ve.meshbasic_frag},lambert:{uniforms:Jt([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,oe.lights,{emissive:{value:new qe(0)}}]),vertexShader:Ve.meshlambert_vert,fragmentShader:Ve.meshlambert_frag},phong:{uniforms:Jt([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,oe.lights,{emissive:{value:new qe(0)},specular:{value:new qe(1118481)},shininess:{value:30}}]),vertexShader:Ve.meshphong_vert,fragmentShader:Ve.meshphong_frag},standard:{uniforms:Jt([oe.common,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.roughnessmap,oe.metalnessmap,oe.fog,oe.lights,{emissive:{value:new qe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag},toon:{uniforms:Jt([oe.common,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.gradientmap,oe.fog,oe.lights,{emissive:{value:new qe(0)}}]),vertexShader:Ve.meshtoon_vert,fragmentShader:Ve.meshtoon_frag},matcap:{uniforms:Jt([oe.common,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,{matcap:{value:null}}]),vertexShader:Ve.meshmatcap_vert,fragmentShader:Ve.meshmatcap_frag},points:{uniforms:Jt([oe.points,oe.fog]),vertexShader:Ve.points_vert,fragmentShader:Ve.points_frag},dashed:{uniforms:Jt([oe.common,oe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ve.linedashed_vert,fragmentShader:Ve.linedashed_frag},depth:{uniforms:Jt([oe.common,oe.displacementmap]),vertexShader:Ve.depth_vert,fragmentShader:Ve.depth_frag},normal:{uniforms:Jt([oe.common,oe.bumpmap,oe.normalmap,oe.displacementmap,{opacity:{value:1}}]),vertexShader:Ve.meshnormal_vert,fragmentShader:Ve.meshnormal_frag},sprite:{uniforms:Jt([oe.sprite,oe.fog]),vertexShader:Ve.sprite_vert,fragmentShader:Ve.sprite_frag},background:{uniforms:{uvTransform:{value:new Be},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ve.background_vert,fragmentShader:Ve.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Be}},vertexShader:Ve.backgroundCube_vert,fragmentShader:Ve.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ve.cube_vert,fragmentShader:Ve.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ve.equirect_vert,fragmentShader:Ve.equirect_frag},distanceRGBA:{uniforms:Jt([oe.common,oe.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ve.distanceRGBA_vert,fragmentShader:Ve.distanceRGBA_frag},shadow:{uniforms:Jt([oe.lights,oe.fog,{color:{value:new qe(0)},opacity:{value:1}}]),vertexShader:Ve.shadow_vert,fragmentShader:Ve.shadow_frag}};Qn.physical={uniforms:Jt([Qn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Be},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Be},clearcoatNormalScale:{value:new He(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Be},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Be},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Be},sheen:{value:0},sheenColor:{value:new qe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Be},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Be},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Be},transmissionSamplerSize:{value:new He},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Be},attenuationDistance:{value:0},attenuationColor:{value:new qe(0)},specularColor:{value:new qe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Be},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Be},anisotropyVector:{value:new He},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Be}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag};var oc={r:0,b:0,g:0},hr=new Mr,y1=new yt;function _1(n,e,t,i,r,s,o){let a=new qe(0),c=s===!0?0:1,l,u,d=null,h=0,f=null;function g(b){let M=b.isScene===!0?b.background:null;return M&&M.isTexture&&(M=(b.backgroundBlurriness>0?t:e).get(M)),M}function v(b){let M=!1,E=g(b);E===null?p(a,c):E&&E.isColor&&(p(E,1),M=!0);let L=n.xr.getEnvironmentBlendMode();L==="additive"?i.buffers.color.setClear(0,0,0,1,o):L==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||M)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(b,M){let E=g(M);E&&(E.isCubeTexture||E.mapping===Jc)?(u===void 0&&(u=new fn(new br(1,1,1),new ti({name:"BackgroundCubeMaterial",uniforms:Ts(Qn.backgroundCube.uniforms),vertexShader:Qn.backgroundCube.vertexShader,fragmentShader:Qn.backgroundCube.fragmentShader,side:sn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(L,C,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),hr.copy(M.backgroundRotation),hr.x*=-1,hr.y*=-1,hr.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(hr.y*=-1,hr.z*=-1),u.material.uniforms.envMap.value=E,u.material.uniforms.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(y1.makeRotationFromEuler(hr)),u.material.toneMapped=nt.getTransfer(E.colorSpace)!==dt,(d!==E||h!==E.version||f!==n.toneMapping)&&(u.material.needsUpdate=!0,d=E,h=E.version,f=n.toneMapping),u.layers.enableAll(),b.unshift(u,u.geometry,u.material,0,0,null)):E&&E.isTexture&&(l===void 0&&(l=new fn(new Nc(2,2),new ti({name:"BackgroundMaterial",uniforms:Ts(Qn.background.uniforms),vertexShader:Qn.background.vertexShader,fragmentShader:Qn.background.fragmentShader,side:Vi,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=E,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.toneMapped=nt.getTransfer(E.colorSpace)!==dt,E.matrixAutoUpdate===!0&&E.updateMatrix(),l.material.uniforms.uvTransform.value.copy(E.matrix),(d!==E||h!==E.version||f!==n.toneMapping)&&(l.material.needsUpdate=!0,d=E,h=E.version,f=n.toneMapping),l.layers.enableAll(),b.unshift(l,l.geometry,l.material,0,0,null))}function p(b,M){b.getRGB(oc,Qv(n)),i.buffers.color.setClear(oc.r,oc.g,oc.b,M,o)}return{getClearColor:function(){return a},setClearColor:function(b,M=1){a.set(b),c=M,p(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(b){c=b,p(a,c)},render:v,addToRenderList:m}}function x1(n,e){let t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=h(null),s=r,o=!1;function a(_,A,G,B,J){let Z=!1,j=d(B,G,A);s!==j&&(s=j,l(s.object)),Z=f(_,B,G,J),Z&&g(_,B,G,J),J!==null&&e.update(J,n.ELEMENT_ARRAY_BUFFER),(Z||o)&&(o=!1,E(_,A,G,B),J!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(J).buffer))}function c(){return n.createVertexArray()}function l(_){return n.bindVertexArray(_)}function u(_){return n.deleteVertexArray(_)}function d(_,A,G){let B=G.wireframe===!0,J=i[_.id];J===void 0&&(J={},i[_.id]=J);let Z=J[A.id];Z===void 0&&(Z={},J[A.id]=Z);let j=Z[B];return j===void 0&&(j=h(c()),Z[B]=j),j}function h(_){let A=[],G=[],B=[];for(let J=0;J<t;J++)A[J]=0,G[J]=0,B[J]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:A,enabledAttributes:G,attributeDivisors:B,object:_,attributes:{},index:null}}function f(_,A,G,B){let J=s.attributes,Z=A.attributes,j=0,Q=G.getAttributes();for(let H in Q)if(Q[H].location>=0){let fe=J[H],_e=Z[H];if(_e===void 0&&(H==="instanceMatrix"&&_.instanceMatrix&&(_e=_.instanceMatrix),H==="instanceColor"&&_.instanceColor&&(_e=_.instanceColor)),fe===void 0||fe.attribute!==_e||_e&&fe.data!==_e.data)return!0;j++}return s.attributesNum!==j||s.index!==B}function g(_,A,G,B){let J={},Z=A.attributes,j=0,Q=G.getAttributes();for(let H in Q)if(Q[H].location>=0){let fe=Z[H];fe===void 0&&(H==="instanceMatrix"&&_.instanceMatrix&&(fe=_.instanceMatrix),H==="instanceColor"&&_.instanceColor&&(fe=_.instanceColor));let _e={};_e.attribute=fe,fe&&fe.data&&(_e.data=fe.data),J[H]=_e,j++}s.attributes=J,s.attributesNum=j,s.index=B}function v(){let _=s.newAttributes;for(let A=0,G=_.length;A<G;A++)_[A]=0}function m(_){p(_,0)}function p(_,A){let G=s.newAttributes,B=s.enabledAttributes,J=s.attributeDivisors;G[_]=1,B[_]===0&&(n.enableVertexAttribArray(_),B[_]=1),J[_]!==A&&(n.vertexAttribDivisor(_,A),J[_]=A)}function b(){let _=s.newAttributes,A=s.enabledAttributes;for(let G=0,B=A.length;G<B;G++)A[G]!==_[G]&&(n.disableVertexAttribArray(G),A[G]=0)}function M(_,A,G,B,J,Z,j){j===!0?n.vertexAttribIPointer(_,A,G,J,Z):n.vertexAttribPointer(_,A,G,B,J,Z)}function E(_,A,G,B){v();let J=B.attributes,Z=G.getAttributes(),j=A.defaultAttributeValues;for(let Q in Z){let H=Z[Q];if(H.location>=0){let le=J[Q];if(le===void 0&&(Q==="instanceMatrix"&&_.instanceMatrix&&(le=_.instanceMatrix),Q==="instanceColor"&&_.instanceColor&&(le=_.instanceColor)),le!==void 0){let fe=le.normalized,_e=le.itemSize,Xe=e.get(le);if(Xe===void 0)continue;let st=Xe.buffer,W=Xe.type,te=Xe.bytesPerElement,ve=W===n.INT||W===n.UNSIGNED_INT||le.gpuType===df;if(le.isInterleavedBufferAttribute){let de=le.data,De=de.stride,Oe=le.offset;if(de.isInstancedInterleavedBuffer){for(let Ge=0;Ge<H.locationSize;Ge++)p(H.location+Ge,de.meshPerAttribute);_.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let Ge=0;Ge<H.locationSize;Ge++)m(H.location+Ge);n.bindBuffer(n.ARRAY_BUFFER,st);for(let Ge=0;Ge<H.locationSize;Ge++)M(H.location+Ge,_e/H.locationSize,W,fe,De*te,(Oe+_e/H.locationSize*Ge)*te,ve)}else{if(le.isInstancedBufferAttribute){for(let de=0;de<H.locationSize;de++)p(H.location+de,le.meshPerAttribute);_.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let de=0;de<H.locationSize;de++)m(H.location+de);n.bindBuffer(n.ARRAY_BUFFER,st);for(let de=0;de<H.locationSize;de++)M(H.location+de,_e/H.locationSize,W,fe,_e*te,_e/H.locationSize*de*te,ve)}}else if(j!==void 0){let fe=j[Q];if(fe!==void 0)switch(fe.length){case 2:n.vertexAttrib2fv(H.location,fe);break;case 3:n.vertexAttrib3fv(H.location,fe);break;case 4:n.vertexAttrib4fv(H.location,fe);break;default:n.vertexAttrib1fv(H.location,fe)}}}}b()}function L(){O();for(let _ in i){let A=i[_];for(let G in A){let B=A[G];for(let J in B)u(B[J].object),delete B[J];delete A[G]}delete i[_]}}function C(_){if(i[_.id]===void 0)return;let A=i[_.id];for(let G in A){let B=A[G];for(let J in B)u(B[J].object),delete B[J];delete A[G]}delete i[_.id]}function D(_){for(let A in i){let G=i[A];if(G[_.id]===void 0)continue;let B=G[_.id];for(let J in B)u(B[J].object),delete B[J];delete G[_.id]}}function O(){w(),o=!0,s!==r&&(s=r,l(s.object))}function w(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:O,resetDefaultState:w,dispose:L,releaseStatesOfGeometry:C,releaseStatesOfProgram:D,initAttributes:v,enableAttribute:m,disableUnusedAttributes:b}}function M1(n,e,t){let i;function r(l){i=l}function s(l,u){n.drawArrays(i,l,u),t.update(u,i,1)}function o(l,u,d){d!==0&&(n.drawArraysInstanced(i,l,u,d),t.update(u,i,d))}function a(l,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,u,0,d);let f=0;for(let g=0;g<d;g++)f+=u[g];t.update(f,i,1)}function c(l,u,d,h){if(d===0)return;let f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<l.length;g++)o(l[g],u[g],h[g]);else{f.multiDrawArraysInstancedWEBGL(i,l,0,u,0,h,0,d);let g=0;for(let v=0;v<d;v++)g+=u[v];for(let v=0;v<h.length;v++)t.update(g,i,h[v])}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function b1(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){let C=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(C){return!(C!==kn&&i.convert(C)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(C){let D=C===bo&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==_i&&i.convert(C)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==vi&&!D)}function c(C){if(C==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp",u=c(l);u!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);let d=t.logarithmicDepthBuffer===!0,h=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),f=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_TEXTURE_SIZE),v=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),m=n.getParameter(n.MAX_VERTEX_ATTRIBS),p=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),b=n.getParameter(n.MAX_VARYING_VECTORS),M=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),E=f>0,L=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:d,maxTextures:h,maxVertexTextures:f,maxTextureSize:g,maxCubemapSize:v,maxAttributes:m,maxVertexUniforms:p,maxVaryings:b,maxFragmentUniforms:M,vertexTextures:E,maxSamples:L}}function w1(n){let e=this,t=null,i=0,r=!1,s=!1,o=new mi,a=new Be,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){let f=d.length!==0||h||i!==0||r;return r=h,i=d.length,f},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,h){t=u(d,h,0)},this.setState=function(d,h,f){let g=d.clippingPlanes,v=d.clipIntersection,m=d.clipShadows,p=n.get(d);if(!r||g===null||g.length===0||s&&!m)s?u(null):l();else{let b=s?0:i,M=b*4,E=p.clippingState||null;c.value=E,E=u(g,h,M,f);for(let L=0;L!==M;++L)E[L]=t[L];p.clippingState=E,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=b}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(d,h,f,g){let v=d!==null?d.length:0,m=null;if(v!==0){if(m=c.value,g!==!0||m===null){let p=f+v*4,b=h.matrixWorldInverse;a.getNormalMatrix(b),(m===null||m.length<p)&&(m=new Float32Array(p));for(let M=0,E=f;M!==v;++M,E+=4)o.copy(d[M]).applyMatrix4(b,a),o.normal.toArray(m,E),m[E+3]=o.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}function E1(n){let e=new WeakMap;function t(o,a){return a===rh?o.mapping=ws:a===sh&&(o.mapping=Es),o}function i(o){if(o&&o.isTexture){let a=o.mapping;if(a===rh||a===sh)if(e.has(o)){let c=e.get(o).texture;return t(c,o.mapping)}else{let c=o.image;if(c&&c.height>0){let l=new Bh(c.height);return l.fromEquirectangularTexture(n,o),e.set(o,l),o.addEventListener("dispose",r),t(l.texture,o.mapping)}else return null}}return o}function r(o){let a=o.target;a.removeEventListener("dispose",r);let c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}var Oc=class extends Pc{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2,s=i-e,o=i+e,a=r+t,c=r-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,o=s+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},ys=4,lv=[.125,.215,.35,.446,.526,.582],gr=20,Xd=new Oc,uv=new qe,Yd=null,Zd=0,Jd=0,Kd=!1,pr=(1+Math.sqrt(5))/2,gs=1/pr,dv=[new R(-pr,gs,0),new R(pr,gs,0),new R(-gs,0,pr),new R(gs,0,pr),new R(0,pr,-gs),new R(0,pr,gs),new R(-1,1,-1),new R(1,1,-1),new R(-1,1,1),new R(1,1,1)],Lc=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){Yd=this._renderer.getRenderTarget(),Zd=this._renderer.getActiveCubeFace(),Jd=this._renderer.getActiveMipmapLevel(),Kd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=pv(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=fv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Yd,Zd,Jd),this._renderer.xr.enabled=Kd,e.scissorTest=!1,ac(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ws||e.mapping===Es?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Yd=this._renderer.getRenderTarget(),Zd=this._renderer.getActiveCubeFace(),Jd=this._renderer.getActiveMipmapLevel(),Kd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Fn,minFilter:Fn,generateMipmaps:!1,type:bo,format:kn,colorSpace:Gi,depthBuffer:!1},r=hv(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=hv(e,t,i);let{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=S1(s)),this._blurMaterial=C1(s,e,t)}return r}_compileMaterial(e){let t=new fn(this._lodPlanes[0],e);this._renderer.compile(t,Xd)}_sceneToCubeUV(e,t,i,r){let a=new Yt(90,1,t,i),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,h=u.toneMapping;u.getClearColor(uv),u.toneMapping=Ui,u.autoClear=!1;let f=new Tc({name:"PMREM.Background",side:sn,depthWrite:!1,depthTest:!1}),g=new fn(new br,f),v=!1,m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,v=!0):(f.color.copy(uv),v=!0);for(let p=0;p<6;p++){let b=p%3;b===0?(a.up.set(0,c[p],0),a.lookAt(l[p],0,0)):b===1?(a.up.set(0,0,c[p]),a.lookAt(0,l[p],0)):(a.up.set(0,c[p],0),a.lookAt(0,0,l[p]));let M=this._cubeSize;ac(r,b*M,p>2?M:0,M,M),u.setRenderTarget(r),v&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=h,u.autoClear=d,e.background=m}_textureToCubeUV(e,t){let i=this._renderer,r=e.mapping===ws||e.mapping===Es;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=pv()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=fv());let s=r?this._cubemapMaterial:this._equirectMaterial,o=new fn(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;let c=this._cubeSize;ac(t,0,0,3*c,2*c),i.setRenderTarget(t),i.render(o,Xd)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;let r=this._lodPlanes.length;for(let s=1;s<r;s++){let o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=dv[(r-s-1)%dv.length];this._blur(e,s-1,s,o,a)}t.autoClear=i}_blur(e,t,i,r,s){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){let c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,d=new fn(this._lodPlanes[r],l),h=l.uniforms,f=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*gr-1),v=s/g,m=isFinite(s)?1+Math.floor(u*v):gr;m>gr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${gr}`);let p=[],b=0;for(let D=0;D<gr;++D){let O=D/v,w=Math.exp(-O*O/2);p.push(w),D===0?b+=w:D<m&&(b+=2*w)}for(let D=0;D<p.length;D++)p[D]=p[D]/b;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=p,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);let{_lodMax:M}=this;h.dTheta.value=g,h.mipInt.value=M-i;let E=this._sizeLods[r],L=3*E*(r>M-ys?r-M+ys:0),C=4*(this._cubeSize-E);ac(t,L,C,3*E,2*E),c.setRenderTarget(t),c.render(d,Xd)}};function S1(n){let e=[],t=[],i=[],r=n,s=n-ys+1+lv.length;for(let o=0;o<s;o++){let a=Math.pow(2,r);t.push(a);let c=1/a;o>n-ys?c=lv[o-n+ys-1]:o===0&&(c=0),i.push(c);let l=1/(a-2),u=-l,d=1+l,h=[u,u,d,u,d,d,u,u,d,d,u,d],f=6,g=6,v=3,m=2,p=1,b=new Float32Array(v*g*f),M=new Float32Array(m*g*f),E=new Float32Array(p*g*f);for(let C=0;C<f;C++){let D=C%3*2/3-1,O=C>2?0:-1,w=[D,O,0,D+2/3,O,0,D+2/3,O+1,0,D,O,0,D+2/3,O+1,0,D,O+1,0];b.set(w,v*g*C),M.set(h,m*g*C);let _=[C,C,C,C,C,C];E.set(_,p*g*C)}let L=new Mn;L.setAttribute("position",new on(b,v)),L.setAttribute("uv",new on(M,m)),L.setAttribute("faceIndex",new on(E,p)),e.push(L),r>ys&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function hv(n,e,t){let i=new xi(n,e,t);return i.texture.mapping=Jc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ac(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function C1(n,e,t){let i=new Float32Array(gr),r=new R(0,1,0);return new ti({name:"SphericalGaussianBlur",defines:{n:gr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:yf(),fragmentShader:`

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
		`,blending:ki,depthTest:!1,depthWrite:!1})}function fv(){return new ti({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:yf(),fragmentShader:`

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
		`,blending:ki,depthTest:!1,depthWrite:!1})}function pv(){return new ti({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:yf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ki,depthTest:!1,depthWrite:!1})}function yf(){return`

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
	`}function D1(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){let c=a.mapping,l=c===rh||c===sh,u=c===ws||c===Es;if(l||u){let d=e.get(a),h=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==h)return t===null&&(t=new Lc(n)),d=l?t.fromEquirectangular(a,d):t.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),d.texture;if(d!==void 0)return d.texture;{let f=a.image;return l&&f&&f.height>0||u&&f&&r(f)?(t===null&&(t=new Lc(n)),d=l?t.fromEquirectangular(a):t.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),a.addEventListener("dispose",s),d.texture):null}}}return a}function r(a){let c=0,l=6;for(let u=0;u<l;u++)a[u]!==void 0&&c++;return c===l}function s(a){let c=a.target;c.removeEventListener("dispose",s);let l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function T1(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let r=t(i);return r===null&&mo("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function A1(n,e,t,i){let r={},s=new WeakMap;function o(d){let h=d.target;h.index!==null&&e.remove(h.index);for(let g in h.attributes)e.remove(h.attributes[g]);for(let g in h.morphAttributes){let v=h.morphAttributes[g];for(let m=0,p=v.length;m<p;m++)e.remove(v[m])}h.removeEventListener("dispose",o),delete r[h.id];let f=s.get(h);f&&(e.remove(f),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(d,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,t.memory.geometries++),h}function c(d){let h=d.attributes;for(let g in h)e.update(h[g],n.ARRAY_BUFFER);let f=d.morphAttributes;for(let g in f){let v=f[g];for(let m=0,p=v.length;m<p;m++)e.update(v[m],n.ARRAY_BUFFER)}}function l(d){let h=[],f=d.index,g=d.attributes.position,v=0;if(f!==null){let b=f.array;v=f.version;for(let M=0,E=b.length;M<E;M+=3){let L=b[M+0],C=b[M+1],D=b[M+2];h.push(L,C,C,D,D,L)}}else if(g!==void 0){let b=g.array;v=g.version;for(let M=0,E=b.length/3-1;M<E;M+=3){let L=M+0,C=M+1,D=M+2;h.push(L,C,C,D,D,L)}}else return;let m=new(Jv(h)?Ic:Ac)(h,1);m.version=v;let p=s.get(d);p&&e.remove(p),s.set(d,m)}function u(d){let h=s.get(d);if(h){let f=d.index;f!==null&&h.version<f.version&&l(d)}else l(d);return s.get(d)}return{get:a,update:c,getWireframeAttribute:u}}function I1(n,e,t){let i;function r(h){i=h}let s,o;function a(h){s=h.type,o=h.bytesPerElement}function c(h,f){n.drawElements(i,f,s,h*o),t.update(f,i,1)}function l(h,f,g){g!==0&&(n.drawElementsInstanced(i,f,s,h*o,g),t.update(f,i,g))}function u(h,f,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,s,h,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];t.update(m,i,1)}function d(h,f,g,v){if(g===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<h.length;p++)l(h[p]/o,f[p],v[p]);else{m.multiDrawElementsInstancedWEBGL(i,f,0,s,h,0,v,0,g);let p=0;for(let b=0;b<g;b++)p+=f[b];for(let b=0;b<v.length;b++)t.update(p,i,v[b])}}this.setMode=r,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function P1(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function R1(n,e,t){let i=new WeakMap,r=new ht;function s(o,a,c){let l=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=u!==void 0?u.length:0,h=i.get(a);if(h===void 0||h.count!==d){let _=function(){O.dispose(),i.delete(a),a.removeEventListener("dispose",_)};var f=_;h!==void 0&&h.texture.dispose();let g=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],b=a.morphAttributes.normal||[],M=a.morphAttributes.color||[],E=0;g===!0&&(E=1),v===!0&&(E=2),m===!0&&(E=3);let L=a.attributes.position.count*E,C=1;L>e.maxTextureSize&&(C=Math.ceil(L/e.maxTextureSize),L=e.maxTextureSize);let D=new Float32Array(L*C*4*d),O=new Sc(D,L,C,d);O.type=vi,O.needsUpdate=!0;let w=E*4;for(let A=0;A<d;A++){let G=p[A],B=b[A],J=M[A],Z=L*C*4*A;for(let j=0;j<G.count;j++){let Q=j*w;g===!0&&(r.fromBufferAttribute(G,j),D[Z+Q+0]=r.x,D[Z+Q+1]=r.y,D[Z+Q+2]=r.z,D[Z+Q+3]=0),v===!0&&(r.fromBufferAttribute(B,j),D[Z+Q+4]=r.x,D[Z+Q+5]=r.y,D[Z+Q+6]=r.z,D[Z+Q+7]=0),m===!0&&(r.fromBufferAttribute(J,j),D[Z+Q+8]=r.x,D[Z+Q+9]=r.y,D[Z+Q+10]=r.z,D[Z+Q+11]=J.itemSize===4?r.w:1)}}h={count:d,texture:O,size:new He(L,C)},i.set(a,h),a.addEventListener("dispose",_)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let g=0;for(let m=0;m<l.length;m++)g+=l[m];let v=a.morphTargetsRelative?1:1-g;c.getUniforms().setValue(n,"morphTargetBaseInfluence",v),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",h.texture,t),c.getUniforms().setValue(n,"morphTargetsTextureSize",h.size)}return{update:s}}function N1(n,e,t,i){let r=new WeakMap;function s(c){let l=i.render.frame,u=c.geometry,d=e.get(c,u);if(r.get(d)!==l&&(e.update(d),r.set(d,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),r.get(c)!==l&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,l))),c.isSkinnedMesh){let h=c.skeleton;r.get(h)!==l&&(h.update(),r.set(h,l))}return d}function o(){r=new WeakMap}function a(c){let l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:s,dispose:o}}var Fc=class extends Sr{constructor(e,t,i,r,s,o,a,c,l,u=xs){if(u!==xs&&u!==Cs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===xs&&(i=_r),i===void 0&&u===Cs&&(i=Ss),super(null,r,s,o,a,c,u,i,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:xn,this.minFilter=c!==void 0?c:xn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},ty=new Sr,mv=new Fc(1,1),ny=new Sc,iy=new Uh,ry=new Rc,gv=[],vv=[],yv=new Float32Array(16),_v=new Float32Array(9),xv=new Float32Array(4);function Is(n,e,t){let i=n[0];if(i<=0||i>0)return n;let r=e*t,s=gv[r];if(s===void 0&&(s=new Float32Array(r),gv[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function It(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Pt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Qc(n,e){let t=vv[e];t===void 0&&(t=new Int32Array(e),vv[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function O1(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function L1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(It(t,e))return;n.uniform2fv(this.addr,e),Pt(t,e)}}function F1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(It(t,e))return;n.uniform3fv(this.addr,e),Pt(t,e)}}function k1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(It(t,e))return;n.uniform4fv(this.addr,e),Pt(t,e)}}function U1(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(It(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Pt(t,e)}else{if(It(t,i))return;xv.set(i),n.uniformMatrix2fv(this.addr,!1,xv),Pt(t,i)}}function V1(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(It(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Pt(t,e)}else{if(It(t,i))return;_v.set(i),n.uniformMatrix3fv(this.addr,!1,_v),Pt(t,i)}}function B1(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(It(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Pt(t,e)}else{if(It(t,i))return;yv.set(i),n.uniformMatrix4fv(this.addr,!1,yv),Pt(t,i)}}function z1(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function H1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(It(t,e))return;n.uniform2iv(this.addr,e),Pt(t,e)}}function G1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(It(t,e))return;n.uniform3iv(this.addr,e),Pt(t,e)}}function W1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(It(t,e))return;n.uniform4iv(this.addr,e),Pt(t,e)}}function j1(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function $1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(It(t,e))return;n.uniform2uiv(this.addr,e),Pt(t,e)}}function q1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(It(t,e))return;n.uniform3uiv(this.addr,e),Pt(t,e)}}function X1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(It(t,e))return;n.uniform4uiv(this.addr,e),Pt(t,e)}}function Y1(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(mv.compareFunction=Zv,s=mv):s=ty,t.setTexture2D(e||s,r)}function Z1(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||iy,r)}function J1(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||ry,r)}function K1(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||ny,r)}function Q1(n){switch(n){case 5126:return O1;case 35664:return L1;case 35665:return F1;case 35666:return k1;case 35674:return U1;case 35675:return V1;case 35676:return B1;case 5124:case 35670:return z1;case 35667:case 35671:return H1;case 35668:case 35672:return G1;case 35669:case 35673:return W1;case 5125:return j1;case 36294:return $1;case 36295:return q1;case 36296:return X1;case 35678:case 36198:case 36298:case 36306:case 35682:return Y1;case 35679:case 36299:case 36307:return Z1;case 35680:case 36300:case 36308:case 36293:return J1;case 36289:case 36303:case 36311:case 36292:return K1}}function eT(n,e){n.uniform1fv(this.addr,e)}function tT(n,e){let t=Is(e,this.size,2);n.uniform2fv(this.addr,t)}function nT(n,e){let t=Is(e,this.size,3);n.uniform3fv(this.addr,t)}function iT(n,e){let t=Is(e,this.size,4);n.uniform4fv(this.addr,t)}function rT(n,e){let t=Is(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function sT(n,e){let t=Is(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function oT(n,e){let t=Is(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function aT(n,e){n.uniform1iv(this.addr,e)}function cT(n,e){n.uniform2iv(this.addr,e)}function lT(n,e){n.uniform3iv(this.addr,e)}function uT(n,e){n.uniform4iv(this.addr,e)}function dT(n,e){n.uniform1uiv(this.addr,e)}function hT(n,e){n.uniform2uiv(this.addr,e)}function fT(n,e){n.uniform3uiv(this.addr,e)}function pT(n,e){n.uniform4uiv(this.addr,e)}function mT(n,e,t){let i=this.cache,r=e.length,s=Qc(t,r);It(i,s)||(n.uniform1iv(this.addr,s),Pt(i,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||ty,s[o])}function gT(n,e,t){let i=this.cache,r=e.length,s=Qc(t,r);It(i,s)||(n.uniform1iv(this.addr,s),Pt(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||iy,s[o])}function vT(n,e,t){let i=this.cache,r=e.length,s=Qc(t,r);It(i,s)||(n.uniform1iv(this.addr,s),Pt(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||ry,s[o])}function yT(n,e,t){let i=this.cache,r=e.length,s=Qc(t,r);It(i,s)||(n.uniform1iv(this.addr,s),Pt(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||ny,s[o])}function _T(n){switch(n){case 5126:return eT;case 35664:return tT;case 35665:return nT;case 35666:return iT;case 35674:return rT;case 35675:return sT;case 35676:return oT;case 5124:case 35670:return aT;case 35667:case 35671:return cT;case 35668:case 35672:return lT;case 35669:case 35673:return uT;case 5125:return dT;case 36294:return hT;case 36295:return fT;case 36296:return pT;case 35678:case 36198:case 36298:case 36306:case 35682:return mT;case 35679:case 36299:case 36307:return gT;case 35680:case 36300:case 36308:case 36293:return vT;case 36289:case 36303:case 36311:case 36292:return yT}}var zh=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Q1(t.type)}},Hh=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=_T(t.type)}},Gh=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let r=this.seq;for(let s=0,o=r.length;s!==o;++s){let a=r[s];a.setValue(e,t[a.id],i)}}},Qd=/(\w+)(\])?(\[|\.)?/g;function Mv(n,e){n.seq.push(e),n.map[e.id]=e}function xT(n,e,t){let i=n.name,r=i.length;for(Qd.lastIndex=0;;){let s=Qd.exec(i),o=Qd.lastIndex,a=s[1],c=s[2]==="]",l=s[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===r){Mv(t,l===void 0?new zh(a,n,e):new Hh(a,n,e));break}else{let d=t.map[a];d===void 0&&(d=new Gh(a),Mv(t,d)),t=d}}}var bs=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){let s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);xT(s,o,this)}}setValue(e,t,i,r){let s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){let r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){let a=t[s],c=i[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,r)}}static seqWithValue(e,t){let i=[];for(let r=0,s=e.length;r!==s;++r){let o=e[r];o.id in t&&i.push(o)}return i}};function bv(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var MT=37297,bT=0;function wT(n,e){let t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){let a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}function ET(n){let e=nt.getPrimaries(nt.workingColorSpace),t=nt.getPrimaries(n),i;switch(e===t?i="":e===Mc&&t===xc?i="LinearDisplayP3ToLinearSRGB":e===xc&&t===Mc&&(i="LinearSRGBToLinearDisplayP3"),n){case Gi:case Kc:return[i,"LinearTransferOETF"];case Kn:case vf:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function wv(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";let s=/ERROR: 0:(\d+)/.exec(r);if(s){let o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+wT(n.getShaderSource(e),o)}else return r}function ST(n,e){let t=ET(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function CT(n,e){let t;switch(e){case KE:t="Linear";break;case QE:t="Reinhard";break;case eS:t="Cineon";break;case tS:t="ACESFilmic";break;case iS:t="AgX";break;case rS:t="Neutral";break;case nS:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var cc=new R;function DT(){nt.getLuminanceCoefficients(cc);let n=cc.x.toFixed(4),e=cc.y.toFixed(4),t=cc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function TT(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(po).join(`
`)}function AT(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function IT(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){let s=n.getActiveAttrib(e,r),o=s.name,a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function po(n){return n!==""}function Ev(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Sv(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var PT=/^[ \t]*#include +<([\w\d./]+)>/gm;function Wh(n){return n.replace(PT,NT)}var RT=new Map;function NT(n,e){let t=Ve[e];if(t===void 0){let i=RT.get(e);if(i!==void 0)t=Ve[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Wh(t)}var OT=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Cv(n){return n.replace(OT,LT)}function LT(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Dv(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}function FT(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===kv?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===EE?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===pi&&(e="SHADOWMAP_TYPE_VSM"),e}function kT(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case ws:case Es:e="ENVMAP_TYPE_CUBE";break;case Jc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function UT(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Es:e="ENVMAP_MODE_REFRACTION";break}return e}function VT(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Uv:e="ENVMAP_BLENDING_MULTIPLY";break;case ZE:e="ENVMAP_BLENDING_MIX";break;case JE:e="ENVMAP_BLENDING_ADD";break}return e}function BT(n){let e=n.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function zT(n,e,t,i){let r=n.getContext(),s=t.defines,o=t.vertexShader,a=t.fragmentShader,c=FT(t),l=kT(t),u=UT(t),d=VT(t),h=BT(t),f=TT(t),g=AT(s),v=r.createProgram(),m,p,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(po).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(po).join(`
`),p.length>0&&(p+=`
`)):(m=[Dv(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(po).join(`
`),p=[Dv(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ui?"#define TONE_MAPPING":"",t.toneMapping!==Ui?Ve.tonemapping_pars_fragment:"",t.toneMapping!==Ui?CT("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ve.colorspace_pars_fragment,ST("linearToOutputTexel",t.outputColorSpace),DT(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(po).join(`
`)),o=Wh(o),o=Ev(o,t),o=Sv(o,t),a=Wh(a),a=Ev(a,t),a=Sv(a,t),o=Cv(o),a=Cv(a),t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===G0?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===G0?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let M=b+m+o,E=b+p+a,L=bv(r,r.VERTEX_SHADER,M),C=bv(r,r.FRAGMENT_SHADER,E);r.attachShader(v,L),r.attachShader(v,C),t.index0AttributeName!==void 0?r.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(v,0,"position"),r.linkProgram(v);function D(A){if(n.debug.checkShaderErrors){let G=r.getProgramInfoLog(v).trim(),B=r.getShaderInfoLog(L).trim(),J=r.getShaderInfoLog(C).trim(),Z=!0,j=!0;if(r.getProgramParameter(v,r.LINK_STATUS)===!1)if(Z=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,v,L,C);else{let Q=wv(r,L,"vertex"),H=wv(r,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(v,r.VALIDATE_STATUS)+`

Material Name: `+A.name+`
Material Type: `+A.type+`

Program Info Log: `+G+`
`+Q+`
`+H)}else G!==""?console.warn("THREE.WebGLProgram: Program Info Log:",G):(B===""||J==="")&&(j=!1);j&&(A.diagnostics={runnable:Z,programLog:G,vertexShader:{log:B,prefix:m},fragmentShader:{log:J,prefix:p}})}r.deleteShader(L),r.deleteShader(C),O=new bs(r,v),w=IT(r,v)}let O;this.getUniforms=function(){return O===void 0&&D(this),O};let w;this.getAttributes=function(){return w===void 0&&D(this),w};let _=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return _===!1&&(_=r.getProgramParameter(v,MT)),_},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=bT++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=L,this.fragmentShader=C,this}var HT=0,jh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new $h(e),t.set(e,i)),i}},$h=class{constructor(e){this.id=HT++,this.code=e,this.usedTimes=0}};function GT(n,e,t,i,r,s,o){let a=new Dc,c=new jh,l=new Set,u=[],d=r.logarithmicDepthBuffer,h=r.vertexTextures,f=r.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(w){return l.add(w),w===0?"uv":`uv${w}`}function m(w,_,A,G,B){let J=G.fog,Z=B.geometry,j=w.isMeshStandardMaterial?G.environment:null,Q=(w.isMeshStandardMaterial?t:e).get(w.envMap||j),H=Q&&Q.mapping===Jc?Q.image.height:null,le=g[w.type];w.precision!==null&&(f=r.getMaxPrecision(w.precision),f!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",f,"instead."));let fe=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,_e=fe!==void 0?fe.length:0,Xe=0;Z.morphAttributes.position!==void 0&&(Xe=1),Z.morphAttributes.normal!==void 0&&(Xe=2),Z.morphAttributes.color!==void 0&&(Xe=3);let st,W,te,ve;if(le){let Ke=Qn[le];st=Ke.vertexShader,W=Ke.fragmentShader}else st=w.vertexShader,W=w.fragmentShader,c.update(w),te=c.getVertexShaderID(w),ve=c.getFragmentShaderID(w);let de=n.getRenderTarget(),De=B.isInstancedMesh===!0,Oe=B.isBatchedMesh===!0,Ge=!!w.map,mt=!!w.matcap,T=!!Q,Mt=!!w.aoMap,it=!!w.lightMap,ot=!!w.bumpMap,be=!!w.normalMap,bt=!!w.displacementMap,Pe=!!w.emissiveMap,Le=!!w.metalnessMap,S=!!w.roughnessMap,y=w.anisotropy>0,U=w.clearcoat>0,Y=w.dispersion>0,ee=w.iridescence>0,K=w.sheen>0,we=w.transmission>0,ae=y&&!!w.anisotropyMap,he=U&&!!w.clearcoatMap,Fe=U&&!!w.clearcoatNormalMap,ne=U&&!!w.clearcoatRoughnessMap,ue=ee&&!!w.iridescenceMap,Ye=ee&&!!w.iridescenceThicknessMap,Ie=K&&!!w.sheenColorMap,pe=K&&!!w.sheenRoughnessMap,Re=!!w.specularMap,ze=!!w.specularColorMap,ft=!!w.specularIntensityMap,I=we&&!!w.transmissionMap,ie=we&&!!w.thicknessMap,$=!!w.gradientMap,q=!!w.alphaMap,se=w.alphaTest>0,Ee=!!w.alphaHash,Ze=!!w.extensions,wt=Ui;w.toneMapped&&(de===null||de.isXRRenderTarget===!0)&&(wt=n.toneMapping);let Ft={shaderID:le,shaderType:w.type,shaderName:w.name,vertexShader:st,fragmentShader:W,defines:w.defines,customVertexShaderID:te,customFragmentShaderID:ve,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:f,batching:Oe,batchingColor:Oe&&B._colorsTexture!==null,instancing:De,instancingColor:De&&B.instanceColor!==null,instancingMorph:De&&B.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:de===null?n.outputColorSpace:de.isXRRenderTarget===!0?de.texture.colorSpace:Gi,alphaToCoverage:!!w.alphaToCoverage,map:Ge,matcap:mt,envMap:T,envMapMode:T&&Q.mapping,envMapCubeUVHeight:H,aoMap:Mt,lightMap:it,bumpMap:ot,normalMap:be,displacementMap:h&&bt,emissiveMap:Pe,normalMapObjectSpace:be&&w.normalMapType===cS,normalMapTangentSpace:be&&w.normalMapType===Yv,metalnessMap:Le,roughnessMap:S,anisotropy:y,anisotropyMap:ae,clearcoat:U,clearcoatMap:he,clearcoatNormalMap:Fe,clearcoatRoughnessMap:ne,dispersion:Y,iridescence:ee,iridescenceMap:ue,iridescenceThicknessMap:Ye,sheen:K,sheenColorMap:Ie,sheenRoughnessMap:pe,specularMap:Re,specularColorMap:ze,specularIntensityMap:ft,transmission:we,transmissionMap:I,thicknessMap:ie,gradientMap:$,opaque:w.transparent===!1&&w.blending===_s&&w.alphaToCoverage===!1,alphaMap:q,alphaTest:se,alphaHash:Ee,combine:w.combine,mapUv:Ge&&v(w.map.channel),aoMapUv:Mt&&v(w.aoMap.channel),lightMapUv:it&&v(w.lightMap.channel),bumpMapUv:ot&&v(w.bumpMap.channel),normalMapUv:be&&v(w.normalMap.channel),displacementMapUv:bt&&v(w.displacementMap.channel),emissiveMapUv:Pe&&v(w.emissiveMap.channel),metalnessMapUv:Le&&v(w.metalnessMap.channel),roughnessMapUv:S&&v(w.roughnessMap.channel),anisotropyMapUv:ae&&v(w.anisotropyMap.channel),clearcoatMapUv:he&&v(w.clearcoatMap.channel),clearcoatNormalMapUv:Fe&&v(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ne&&v(w.clearcoatRoughnessMap.channel),iridescenceMapUv:ue&&v(w.iridescenceMap.channel),iridescenceThicknessMapUv:Ye&&v(w.iridescenceThicknessMap.channel),sheenColorMapUv:Ie&&v(w.sheenColorMap.channel),sheenRoughnessMapUv:pe&&v(w.sheenRoughnessMap.channel),specularMapUv:Re&&v(w.specularMap.channel),specularColorMapUv:ze&&v(w.specularColorMap.channel),specularIntensityMapUv:ft&&v(w.specularIntensityMap.channel),transmissionMapUv:I&&v(w.transmissionMap.channel),thicknessMapUv:ie&&v(w.thicknessMap.channel),alphaMapUv:q&&v(w.alphaMap.channel),vertexTangents:!!Z.attributes.tangent&&(be||y),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!Z.attributes.uv&&(Ge||q),fog:!!J,useFog:w.fog===!0,fogExp2:!!J&&J.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:B.isSkinnedMesh===!0,morphTargets:Z.morphAttributes.position!==void 0,morphNormals:Z.morphAttributes.normal!==void 0,morphColors:Z.morphAttributes.color!==void 0,morphTargetsCount:_e,morphTextureStride:Xe,numDirLights:_.directional.length,numPointLights:_.point.length,numSpotLights:_.spot.length,numSpotLightMaps:_.spotLightMap.length,numRectAreaLights:_.rectArea.length,numHemiLights:_.hemi.length,numDirLightShadows:_.directionalShadowMap.length,numPointLightShadows:_.pointShadowMap.length,numSpotLightShadows:_.spotShadowMap.length,numSpotLightShadowsWithMaps:_.numSpotLightShadowsWithMaps,numLightProbes:_.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:w.dithering,shadowMapEnabled:n.shadowMap.enabled&&A.length>0,shadowMapType:n.shadowMap.type,toneMapping:wt,decodeVideoTexture:Ge&&w.map.isVideoTexture===!0&&nt.getTransfer(w.map.colorSpace)===dt,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===gi,flipSided:w.side===sn,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:Ze&&w.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ze&&w.extensions.multiDraw===!0||Oe)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return Ft.vertexUv1s=l.has(1),Ft.vertexUv2s=l.has(2),Ft.vertexUv3s=l.has(3),l.clear(),Ft}function p(w){let _=[];if(w.shaderID?_.push(w.shaderID):(_.push(w.customVertexShaderID),_.push(w.customFragmentShaderID)),w.defines!==void 0)for(let A in w.defines)_.push(A),_.push(w.defines[A]);return w.isRawShaderMaterial===!1&&(b(_,w),M(_,w),_.push(n.outputColorSpace)),_.push(w.customProgramCacheKey),_.join()}function b(w,_){w.push(_.precision),w.push(_.outputColorSpace),w.push(_.envMapMode),w.push(_.envMapCubeUVHeight),w.push(_.mapUv),w.push(_.alphaMapUv),w.push(_.lightMapUv),w.push(_.aoMapUv),w.push(_.bumpMapUv),w.push(_.normalMapUv),w.push(_.displacementMapUv),w.push(_.emissiveMapUv),w.push(_.metalnessMapUv),w.push(_.roughnessMapUv),w.push(_.anisotropyMapUv),w.push(_.clearcoatMapUv),w.push(_.clearcoatNormalMapUv),w.push(_.clearcoatRoughnessMapUv),w.push(_.iridescenceMapUv),w.push(_.iridescenceThicknessMapUv),w.push(_.sheenColorMapUv),w.push(_.sheenRoughnessMapUv),w.push(_.specularMapUv),w.push(_.specularColorMapUv),w.push(_.specularIntensityMapUv),w.push(_.transmissionMapUv),w.push(_.thicknessMapUv),w.push(_.combine),w.push(_.fogExp2),w.push(_.sizeAttenuation),w.push(_.morphTargetsCount),w.push(_.morphAttributeCount),w.push(_.numDirLights),w.push(_.numPointLights),w.push(_.numSpotLights),w.push(_.numSpotLightMaps),w.push(_.numHemiLights),w.push(_.numRectAreaLights),w.push(_.numDirLightShadows),w.push(_.numPointLightShadows),w.push(_.numSpotLightShadows),w.push(_.numSpotLightShadowsWithMaps),w.push(_.numLightProbes),w.push(_.shadowMapType),w.push(_.toneMapping),w.push(_.numClippingPlanes),w.push(_.numClipIntersection),w.push(_.depthPacking)}function M(w,_){a.disableAll(),_.supportsVertexTextures&&a.enable(0),_.instancing&&a.enable(1),_.instancingColor&&a.enable(2),_.instancingMorph&&a.enable(3),_.matcap&&a.enable(4),_.envMap&&a.enable(5),_.normalMapObjectSpace&&a.enable(6),_.normalMapTangentSpace&&a.enable(7),_.clearcoat&&a.enable(8),_.iridescence&&a.enable(9),_.alphaTest&&a.enable(10),_.vertexColors&&a.enable(11),_.vertexAlphas&&a.enable(12),_.vertexUv1s&&a.enable(13),_.vertexUv2s&&a.enable(14),_.vertexUv3s&&a.enable(15),_.vertexTangents&&a.enable(16),_.anisotropy&&a.enable(17),_.alphaHash&&a.enable(18),_.batching&&a.enable(19),_.dispersion&&a.enable(20),_.batchingColor&&a.enable(21),w.push(a.mask),a.disableAll(),_.fog&&a.enable(0),_.useFog&&a.enable(1),_.flatShading&&a.enable(2),_.logarithmicDepthBuffer&&a.enable(3),_.skinning&&a.enable(4),_.morphTargets&&a.enable(5),_.morphNormals&&a.enable(6),_.morphColors&&a.enable(7),_.premultipliedAlpha&&a.enable(8),_.shadowMapEnabled&&a.enable(9),_.doubleSided&&a.enable(10),_.flipSided&&a.enable(11),_.useDepthPacking&&a.enable(12),_.dithering&&a.enable(13),_.transmission&&a.enable(14),_.sheen&&a.enable(15),_.opaque&&a.enable(16),_.pointsUvs&&a.enable(17),_.decodeVideoTexture&&a.enable(18),_.alphaToCoverage&&a.enable(19),w.push(a.mask)}function E(w){let _=g[w.type],A;if(_){let G=Qn[_];A=NS.clone(G.uniforms)}else A=w.uniforms;return A}function L(w,_){let A;for(let G=0,B=u.length;G<B;G++){let J=u[G];if(J.cacheKey===_){A=J,++A.usedTimes;break}}return A===void 0&&(A=new zT(n,_,w,s),u.push(A)),A}function C(w){if(--w.usedTimes===0){let _=u.indexOf(w);u[_]=u[u.length-1],u.pop(),w.destroy()}}function D(w){c.remove(w)}function O(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:E,acquireProgram:L,releaseProgram:C,releaseShaderCache:D,programs:u,dispose:O}}function WT(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function r(o,a,c){n.get(o)[a]=c}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function jT(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Tv(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Av(){let n=[],e=0,t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(d,h,f,g,v,m){let p=n[e];return p===void 0?(p={id:d.id,object:d,geometry:h,material:f,groupOrder:g,renderOrder:d.renderOrder,z:v,group:m},n[e]=p):(p.id=d.id,p.object=d,p.geometry=h,p.material=f,p.groupOrder=g,p.renderOrder=d.renderOrder,p.z=v,p.group=m),e++,p}function a(d,h,f,g,v,m){let p=o(d,h,f,g,v,m);f.transmission>0?i.push(p):f.transparent===!0?r.push(p):t.push(p)}function c(d,h,f,g,v,m){let p=o(d,h,f,g,v,m);f.transmission>0?i.unshift(p):f.transparent===!0?r.unshift(p):t.unshift(p)}function l(d,h){t.length>1&&t.sort(d||jT),i.length>1&&i.sort(h||Tv),r.length>1&&r.sort(h||Tv)}function u(){for(let d=e,h=n.length;d<h;d++){let f=n[d];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:c,finish:u,sort:l}}function $T(){let n=new WeakMap;function e(i,r){let s=n.get(i),o;return s===void 0?(o=new Av,n.set(i,[o])):r>=s.length?(o=new Av,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function qT(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new R,color:new qe};break;case"SpotLight":t={position:new R,direction:new R,color:new qe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new R,color:new qe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new R,skyColor:new qe,groundColor:new qe};break;case"RectAreaLight":t={color:new qe,position:new R,halfWidth:new R,halfHeight:new R};break}return n[e.id]=t,t}}}function XT(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var YT=0;function ZT(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function JT(n){let e=new qT,t=XT(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new R);let r=new R,s=new yt,o=new yt;function a(l){let u=0,d=0,h=0;for(let w=0;w<9;w++)i.probe[w].set(0,0,0);let f=0,g=0,v=0,m=0,p=0,b=0,M=0,E=0,L=0,C=0,D=0;l.sort(ZT);for(let w=0,_=l.length;w<_;w++){let A=l[w],G=A.color,B=A.intensity,J=A.distance,Z=A.shadow&&A.shadow.map?A.shadow.map.texture:null;if(A.isAmbientLight)u+=G.r*B,d+=G.g*B,h+=G.b*B;else if(A.isLightProbe){for(let j=0;j<9;j++)i.probe[j].addScaledVector(A.sh.coefficients[j],B);D++}else if(A.isDirectionalLight){let j=e.get(A);if(j.color.copy(A.color).multiplyScalar(A.intensity),A.castShadow){let Q=A.shadow,H=t.get(A);H.shadowIntensity=Q.intensity,H.shadowBias=Q.bias,H.shadowNormalBias=Q.normalBias,H.shadowRadius=Q.radius,H.shadowMapSize=Q.mapSize,i.directionalShadow[f]=H,i.directionalShadowMap[f]=Z,i.directionalShadowMatrix[f]=A.shadow.matrix,b++}i.directional[f]=j,f++}else if(A.isSpotLight){let j=e.get(A);j.position.setFromMatrixPosition(A.matrixWorld),j.color.copy(G).multiplyScalar(B),j.distance=J,j.coneCos=Math.cos(A.angle),j.penumbraCos=Math.cos(A.angle*(1-A.penumbra)),j.decay=A.decay,i.spot[v]=j;let Q=A.shadow;if(A.map&&(i.spotLightMap[L]=A.map,L++,Q.updateMatrices(A),A.castShadow&&C++),i.spotLightMatrix[v]=Q.matrix,A.castShadow){let H=t.get(A);H.shadowIntensity=Q.intensity,H.shadowBias=Q.bias,H.shadowNormalBias=Q.normalBias,H.shadowRadius=Q.radius,H.shadowMapSize=Q.mapSize,i.spotShadow[v]=H,i.spotShadowMap[v]=Z,E++}v++}else if(A.isRectAreaLight){let j=e.get(A);j.color.copy(G).multiplyScalar(B),j.halfWidth.set(A.width*.5,0,0),j.halfHeight.set(0,A.height*.5,0),i.rectArea[m]=j,m++}else if(A.isPointLight){let j=e.get(A);if(j.color.copy(A.color).multiplyScalar(A.intensity),j.distance=A.distance,j.decay=A.decay,A.castShadow){let Q=A.shadow,H=t.get(A);H.shadowIntensity=Q.intensity,H.shadowBias=Q.bias,H.shadowNormalBias=Q.normalBias,H.shadowRadius=Q.radius,H.shadowMapSize=Q.mapSize,H.shadowCameraNear=Q.camera.near,H.shadowCameraFar=Q.camera.far,i.pointShadow[g]=H,i.pointShadowMap[g]=Z,i.pointShadowMatrix[g]=A.shadow.matrix,M++}i.point[g]=j,g++}else if(A.isHemisphereLight){let j=e.get(A);j.skyColor.copy(A.color).multiplyScalar(B),j.groundColor.copy(A.groundColor).multiplyScalar(B),i.hemi[p]=j,p++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=oe.LTC_FLOAT_1,i.rectAreaLTC2=oe.LTC_FLOAT_2):(i.rectAreaLTC1=oe.LTC_HALF_1,i.rectAreaLTC2=oe.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=d,i.ambient[2]=h;let O=i.hash;(O.directionalLength!==f||O.pointLength!==g||O.spotLength!==v||O.rectAreaLength!==m||O.hemiLength!==p||O.numDirectionalShadows!==b||O.numPointShadows!==M||O.numSpotShadows!==E||O.numSpotMaps!==L||O.numLightProbes!==D)&&(i.directional.length=f,i.spot.length=v,i.rectArea.length=m,i.point.length=g,i.hemi.length=p,i.directionalShadow.length=b,i.directionalShadowMap.length=b,i.pointShadow.length=M,i.pointShadowMap.length=M,i.spotShadow.length=E,i.spotShadowMap.length=E,i.directionalShadowMatrix.length=b,i.pointShadowMatrix.length=M,i.spotLightMatrix.length=E+L-C,i.spotLightMap.length=L,i.numSpotLightShadowsWithMaps=C,i.numLightProbes=D,O.directionalLength=f,O.pointLength=g,O.spotLength=v,O.rectAreaLength=m,O.hemiLength=p,O.numDirectionalShadows=b,O.numPointShadows=M,O.numSpotShadows=E,O.numSpotMaps=L,O.numLightProbes=D,i.version=YT++)}function c(l,u){let d=0,h=0,f=0,g=0,v=0,m=u.matrixWorldInverse;for(let p=0,b=l.length;p<b;p++){let M=l[p];if(M.isDirectionalLight){let E=i.directional[d];E.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(m),d++}else if(M.isSpotLight){let E=i.spot[f];E.position.setFromMatrixPosition(M.matrixWorld),E.position.applyMatrix4(m),E.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(m),f++}else if(M.isRectAreaLight){let E=i.rectArea[g];E.position.setFromMatrixPosition(M.matrixWorld),E.position.applyMatrix4(m),o.identity(),s.copy(M.matrixWorld),s.premultiply(m),o.extractRotation(s),E.halfWidth.set(M.width*.5,0,0),E.halfHeight.set(0,M.height*.5,0),E.halfWidth.applyMatrix4(o),E.halfHeight.applyMatrix4(o),g++}else if(M.isPointLight){let E=i.point[h];E.position.setFromMatrixPosition(M.matrixWorld),E.position.applyMatrix4(m),h++}else if(M.isHemisphereLight){let E=i.hemi[v];E.direction.setFromMatrixPosition(M.matrixWorld),E.direction.transformDirection(m),v++}}}return{setup:a,setupView:c,state:i}}function Iv(n){let e=new JT(n),t=[],i=[];function r(u){l.camera=u,t.length=0,i.length=0}function s(u){t.push(u)}function o(u){i.push(u)}function a(){e.setup(t)}function c(u){e.setupView(t,u)}let l={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:l,setupLights:a,setupLightsView:c,pushLight:s,pushShadow:o}}function KT(n){let e=new WeakMap;function t(r,s=0){let o=e.get(r),a;return o===void 0?(a=new Iv(n),e.set(r,[a])):s>=o.length?(a=new Iv(n),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:t,dispose:i}}var qh=class extends Hi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=oS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Xh=class extends Hi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},QT=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,eA=`uniform sampler2D shadow_pass;
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
}`;function tA(n,e,t){let i=new yo,r=new He,s=new He,o=new ht,a=new qh({depthPacking:aS}),c=new Xh,l={},u=t.maxTextureSize,d={[Vi]:sn,[sn]:Vi,[gi]:gi},h=new ti({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new He},radius:{value:4}},vertexShader:QT,fragmentShader:eA}),f=h.clone();f.defines.HORIZONTAL_PASS=1;let g=new Mn;g.setAttribute("position",new on(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new fn(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=kv;let p=this.type;this.render=function(C,D,O){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||C.length===0)return;let w=n.getRenderTarget(),_=n.getActiveCubeFace(),A=n.getActiveMipmapLevel(),G=n.state;G.setBlending(ki),G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);let B=p!==pi&&this.type===pi,J=p===pi&&this.type!==pi;for(let Z=0,j=C.length;Z<j;Z++){let Q=C[Z],H=Q.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",Q,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;r.copy(H.mapSize);let le=H.getFrameExtents();if(r.multiply(le),s.copy(H.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/le.x),r.x=s.x*le.x,H.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/le.y),r.y=s.y*le.y,H.mapSize.y=s.y)),H.map===null||B===!0||J===!0){let _e=this.type!==pi?{minFilter:xn,magFilter:xn}:{};H.map!==null&&H.map.dispose(),H.map=new xi(r.x,r.y,_e),H.map.texture.name=Q.name+".shadowMap",H.camera.updateProjectionMatrix()}n.setRenderTarget(H.map),n.clear();let fe=H.getViewportCount();for(let _e=0;_e<fe;_e++){let Xe=H.getViewport(_e);o.set(s.x*Xe.x,s.y*Xe.y,s.x*Xe.z,s.y*Xe.w),G.viewport(o),H.updateMatrices(Q,_e),i=H.getFrustum(),E(D,O,H.camera,Q,this.type)}H.isPointLightShadow!==!0&&this.type===pi&&b(H,O),H.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(w,_,A)};function b(C,D){let O=e.update(v);h.defines.VSM_SAMPLES!==C.blurSamples&&(h.defines.VSM_SAMPLES=C.blurSamples,f.defines.VSM_SAMPLES=C.blurSamples,h.needsUpdate=!0,f.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new xi(r.x,r.y)),h.uniforms.shadow_pass.value=C.map.texture,h.uniforms.resolution.value=C.mapSize,h.uniforms.radius.value=C.radius,n.setRenderTarget(C.mapPass),n.clear(),n.renderBufferDirect(D,null,O,h,v,null),f.uniforms.shadow_pass.value=C.mapPass.texture,f.uniforms.resolution.value=C.mapSize,f.uniforms.radius.value=C.radius,n.setRenderTarget(C.map),n.clear(),n.renderBufferDirect(D,null,O,f,v,null)}function M(C,D,O,w){let _=null,A=O.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(A!==void 0)_=A;else if(_=O.isPointLight===!0?c:a,n.localClippingEnabled&&D.clipShadows===!0&&Array.isArray(D.clippingPlanes)&&D.clippingPlanes.length!==0||D.displacementMap&&D.displacementScale!==0||D.alphaMap&&D.alphaTest>0||D.map&&D.alphaTest>0){let G=_.uuid,B=D.uuid,J=l[G];J===void 0&&(J={},l[G]=J);let Z=J[B];Z===void 0&&(Z=_.clone(),J[B]=Z,D.addEventListener("dispose",L)),_=Z}if(_.visible=D.visible,_.wireframe=D.wireframe,w===pi?_.side=D.shadowSide!==null?D.shadowSide:D.side:_.side=D.shadowSide!==null?D.shadowSide:d[D.side],_.alphaMap=D.alphaMap,_.alphaTest=D.alphaTest,_.map=D.map,_.clipShadows=D.clipShadows,_.clippingPlanes=D.clippingPlanes,_.clipIntersection=D.clipIntersection,_.displacementMap=D.displacementMap,_.displacementScale=D.displacementScale,_.displacementBias=D.displacementBias,_.wireframeLinewidth=D.wireframeLinewidth,_.linewidth=D.linewidth,O.isPointLight===!0&&_.isMeshDistanceMaterial===!0){let G=n.properties.get(_);G.light=O}return _}function E(C,D,O,w,_){if(C.visible===!1)return;if(C.layers.test(D.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&_===pi)&&(!C.frustumCulled||i.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,C.matrixWorld);let B=e.update(C),J=C.material;if(Array.isArray(J)){let Z=B.groups;for(let j=0,Q=Z.length;j<Q;j++){let H=Z[j],le=J[H.materialIndex];if(le&&le.visible){let fe=M(C,le,w,_);C.onBeforeShadow(n,C,D,O,B,fe,H),n.renderBufferDirect(O,null,B,fe,C,H),C.onAfterShadow(n,C,D,O,B,fe,H)}}}else if(J.visible){let Z=M(C,J,w,_);C.onBeforeShadow(n,C,D,O,B,Z,null),n.renderBufferDirect(O,null,B,Z,C,null),C.onAfterShadow(n,C,D,O,B,Z,null)}}let G=C.children;for(let B=0,J=G.length;B<J;B++)E(G[B],D,O,w,_)}function L(C){C.target.removeEventListener("dispose",L);for(let O in l){let w=l[O],_=C.target.uuid;_ in w&&(w[_].dispose(),delete w[_])}}}function nA(n){function e(){let I=!1,ie=new ht,$=null,q=new ht(0,0,0,0);return{setMask:function(se){$!==se&&!I&&(n.colorMask(se,se,se,se),$=se)},setLocked:function(se){I=se},setClear:function(se,Ee,Ze,wt,Ft){Ft===!0&&(se*=wt,Ee*=wt,Ze*=wt),ie.set(se,Ee,Ze,wt),q.equals(ie)===!1&&(n.clearColor(se,Ee,Ze,wt),q.copy(ie))},reset:function(){I=!1,$=null,q.set(-1,0,0,0)}}}function t(){let I=!1,ie=null,$=null,q=null;return{setTest:function(se){se?ve(n.DEPTH_TEST):de(n.DEPTH_TEST)},setMask:function(se){ie!==se&&!I&&(n.depthMask(se),ie=se)},setFunc:function(se){if($!==se){switch(se){case GE:n.depthFunc(n.NEVER);break;case WE:n.depthFunc(n.ALWAYS);break;case jE:n.depthFunc(n.LESS);break;case vc:n.depthFunc(n.LEQUAL);break;case $E:n.depthFunc(n.EQUAL);break;case qE:n.depthFunc(n.GEQUAL);break;case XE:n.depthFunc(n.GREATER);break;case YE:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}$=se}},setLocked:function(se){I=se},setClear:function(se){q!==se&&(n.clearDepth(se),q=se)},reset:function(){I=!1,ie=null,$=null,q=null}}}function i(){let I=!1,ie=null,$=null,q=null,se=null,Ee=null,Ze=null,wt=null,Ft=null;return{setTest:function(Ke){I||(Ke?ve(n.STENCIL_TEST):de(n.STENCIL_TEST))},setMask:function(Ke){ie!==Ke&&!I&&(n.stencilMask(Ke),ie=Ke)},setFunc:function(Ke,ni,Vn){($!==Ke||q!==ni||se!==Vn)&&(n.stencilFunc(Ke,ni,Vn),$=Ke,q=ni,se=Vn)},setOp:function(Ke,ni,Vn){(Ee!==Ke||Ze!==ni||wt!==Vn)&&(n.stencilOp(Ke,ni,Vn),Ee=Ke,Ze=ni,wt=Vn)},setLocked:function(Ke){I=Ke},setClear:function(Ke){Ft!==Ke&&(n.clearStencil(Ke),Ft=Ke)},reset:function(){I=!1,ie=null,$=null,q=null,se=null,Ee=null,Ze=null,wt=null,Ft=null}}}let r=new e,s=new t,o=new i,a=new WeakMap,c=new WeakMap,l={},u={},d=new WeakMap,h=[],f=null,g=!1,v=null,m=null,p=null,b=null,M=null,E=null,L=null,C=new qe(0,0,0),D=0,O=!1,w=null,_=null,A=null,G=null,B=null,J=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),Z=!1,j=0,Q=n.getParameter(n.VERSION);Q.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(Q)[1]),Z=j>=1):Q.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(Q)[1]),Z=j>=2);let H=null,le={},fe=n.getParameter(n.SCISSOR_BOX),_e=n.getParameter(n.VIEWPORT),Xe=new ht().fromArray(fe),st=new ht().fromArray(_e);function W(I,ie,$,q){let se=new Uint8Array(4),Ee=n.createTexture();n.bindTexture(I,Ee),n.texParameteri(I,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(I,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ze=0;Ze<$;Ze++)I===n.TEXTURE_3D||I===n.TEXTURE_2D_ARRAY?n.texImage3D(ie,0,n.RGBA,1,1,q,0,n.RGBA,n.UNSIGNED_BYTE,se):n.texImage2D(ie+Ze,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,se);return Ee}let te={};te[n.TEXTURE_2D]=W(n.TEXTURE_2D,n.TEXTURE_2D,1),te[n.TEXTURE_CUBE_MAP]=W(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),te[n.TEXTURE_2D_ARRAY]=W(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),te[n.TEXTURE_3D]=W(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),o.setClear(0),ve(n.DEPTH_TEST),s.setFunc(vc),ot(!1),be(N0),ve(n.CULL_FACE),Mt(ki);function ve(I){l[I]!==!0&&(n.enable(I),l[I]=!0)}function de(I){l[I]!==!1&&(n.disable(I),l[I]=!1)}function De(I,ie){return u[I]!==ie?(n.bindFramebuffer(I,ie),u[I]=ie,I===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=ie),I===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=ie),!0):!1}function Oe(I,ie){let $=h,q=!1;if(I){$=d.get(ie),$===void 0&&($=[],d.set(ie,$));let se=I.textures;if($.length!==se.length||$[0]!==n.COLOR_ATTACHMENT0){for(let Ee=0,Ze=se.length;Ee<Ze;Ee++)$[Ee]=n.COLOR_ATTACHMENT0+Ee;$.length=se.length,q=!0}}else $[0]!==n.BACK&&($[0]=n.BACK,q=!0);q&&n.drawBuffers($)}function Ge(I){return f!==I?(n.useProgram(I),f=I,!0):!1}let mt={[mr]:n.FUNC_ADD,[CE]:n.FUNC_SUBTRACT,[DE]:n.FUNC_REVERSE_SUBTRACT};mt[TE]=n.MIN,mt[AE]=n.MAX;let T={[IE]:n.ZERO,[PE]:n.ONE,[RE]:n.SRC_COLOR,[nh]:n.SRC_ALPHA,[UE]:n.SRC_ALPHA_SATURATE,[FE]:n.DST_COLOR,[OE]:n.DST_ALPHA,[NE]:n.ONE_MINUS_SRC_COLOR,[ih]:n.ONE_MINUS_SRC_ALPHA,[kE]:n.ONE_MINUS_DST_COLOR,[LE]:n.ONE_MINUS_DST_ALPHA,[VE]:n.CONSTANT_COLOR,[BE]:n.ONE_MINUS_CONSTANT_COLOR,[zE]:n.CONSTANT_ALPHA,[HE]:n.ONE_MINUS_CONSTANT_ALPHA};function Mt(I,ie,$,q,se,Ee,Ze,wt,Ft,Ke){if(I===ki){g===!0&&(de(n.BLEND),g=!1);return}if(g===!1&&(ve(n.BLEND),g=!0),I!==SE){if(I!==v||Ke!==O){if((m!==mr||M!==mr)&&(n.blendEquation(n.FUNC_ADD),m=mr,M=mr),Ke)switch(I){case _s:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case O0:n.blendFunc(n.ONE,n.ONE);break;case L0:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case F0:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case _s:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case O0:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case L0:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case F0:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}p=null,b=null,E=null,L=null,C.set(0,0,0),D=0,v=I,O=Ke}return}se=se||ie,Ee=Ee||$,Ze=Ze||q,(ie!==m||se!==M)&&(n.blendEquationSeparate(mt[ie],mt[se]),m=ie,M=se),($!==p||q!==b||Ee!==E||Ze!==L)&&(n.blendFuncSeparate(T[$],T[q],T[Ee],T[Ze]),p=$,b=q,E=Ee,L=Ze),(wt.equals(C)===!1||Ft!==D)&&(n.blendColor(wt.r,wt.g,wt.b,Ft),C.copy(wt),D=Ft),v=I,O=!1}function it(I,ie){I.side===gi?de(n.CULL_FACE):ve(n.CULL_FACE);let $=I.side===sn;ie&&($=!$),ot($),I.blending===_s&&I.transparent===!1?Mt(ki):Mt(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),s.setFunc(I.depthFunc),s.setTest(I.depthTest),s.setMask(I.depthWrite),r.setMask(I.colorWrite);let q=I.stencilWrite;o.setTest(q),q&&(o.setMask(I.stencilWriteMask),o.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),o.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),Pe(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?ve(n.SAMPLE_ALPHA_TO_COVERAGE):de(n.SAMPLE_ALPHA_TO_COVERAGE)}function ot(I){w!==I&&(I?n.frontFace(n.CW):n.frontFace(n.CCW),w=I)}function be(I){I!==bE?(ve(n.CULL_FACE),I!==_&&(I===N0?n.cullFace(n.BACK):I===wE?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):de(n.CULL_FACE),_=I}function bt(I){I!==A&&(Z&&n.lineWidth(I),A=I)}function Pe(I,ie,$){I?(ve(n.POLYGON_OFFSET_FILL),(G!==ie||B!==$)&&(n.polygonOffset(ie,$),G=ie,B=$)):de(n.POLYGON_OFFSET_FILL)}function Le(I){I?ve(n.SCISSOR_TEST):de(n.SCISSOR_TEST)}function S(I){I===void 0&&(I=n.TEXTURE0+J-1),H!==I&&(n.activeTexture(I),H=I)}function y(I,ie,$){$===void 0&&(H===null?$=n.TEXTURE0+J-1:$=H);let q=le[$];q===void 0&&(q={type:void 0,texture:void 0},le[$]=q),(q.type!==I||q.texture!==ie)&&(H!==$&&(n.activeTexture($),H=$),n.bindTexture(I,ie||te[I]),q.type=I,q.texture=ie)}function U(){let I=le[H];I!==void 0&&I.type!==void 0&&(n.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function Y(){try{n.compressedTexImage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ee(){try{n.compressedTexImage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function K(){try{n.texSubImage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function we(){try{n.texSubImage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ae(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function he(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Fe(){try{n.texStorage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ne(){try{n.texStorage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ue(){try{n.texImage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ye(){try{n.texImage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ie(I){Xe.equals(I)===!1&&(n.scissor(I.x,I.y,I.z,I.w),Xe.copy(I))}function pe(I){st.equals(I)===!1&&(n.viewport(I.x,I.y,I.z,I.w),st.copy(I))}function Re(I,ie){let $=c.get(ie);$===void 0&&($=new WeakMap,c.set(ie,$));let q=$.get(I);q===void 0&&(q=n.getUniformBlockIndex(ie,I.name),$.set(I,q))}function ze(I,ie){let q=c.get(ie).get(I);a.get(ie)!==q&&(n.uniformBlockBinding(ie,q,I.__bindingPointIndex),a.set(ie,q))}function ft(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),l={},H=null,le={},u={},d=new WeakMap,h=[],f=null,g=!1,v=null,m=null,p=null,b=null,M=null,E=null,L=null,C=new qe(0,0,0),D=0,O=!1,w=null,_=null,A=null,G=null,B=null,Xe.set(0,0,n.canvas.width,n.canvas.height),st.set(0,0,n.canvas.width,n.canvas.height),r.reset(),s.reset(),o.reset()}return{buffers:{color:r,depth:s,stencil:o},enable:ve,disable:de,bindFramebuffer:De,drawBuffers:Oe,useProgram:Ge,setBlending:Mt,setMaterial:it,setFlipSided:ot,setCullFace:be,setLineWidth:bt,setPolygonOffset:Pe,setScissorTest:Le,activeTexture:S,bindTexture:y,unbindTexture:U,compressedTexImage2D:Y,compressedTexImage3D:ee,texImage2D:ue,texImage3D:Ye,updateUBOMapping:Re,uniformBlockBinding:ze,texStorage2D:Fe,texStorage3D:ne,texSubImage2D:K,texSubImage3D:we,compressedTexSubImage2D:ae,compressedTexSubImage3D:he,scissor:Ie,viewport:pe,reset:ft}}function Pv(n,e,t,i){let r=iA(i);switch(t){case Hv:return n*e;case Wv:return n*e;case jv:return n*e*2;case $v:return n*e/r.components*r.byteLength;case pf:return n*e/r.components*r.byteLength;case qv:return n*e*2/r.components*r.byteLength;case mf:return n*e*2/r.components*r.byteLength;case Gv:return n*e*3/r.components*r.byteLength;case kn:return n*e*4/r.components*r.byteLength;case gf:return n*e*4/r.components*r.byteLength;case hc:case fc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case pc:case mc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case lh:case dh:return Math.max(n,16)*Math.max(e,8)/4;case ch:case uh:return Math.max(n,8)*Math.max(e,8)/2;case hh:case fh:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case ph:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case mh:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case gh:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case vh:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case yh:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case _h:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case xh:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Mh:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case bh:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case wh:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Eh:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Sh:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Ch:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Dh:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Th:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case gc:case Ah:case Ih:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Xv:case Ph:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Rh:case Nh:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function iA(n){switch(n){case _i:case Vv:return{byteLength:1,components:1};case vo:case Bv:case bo:return{byteLength:2,components:1};case hf:case ff:return{byteLength:2,components:4};case _r:case df:case vi:return{byteLength:4,components:1};case zv:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function rA(n,e,t,i,r,s,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new He,u=new WeakMap,d,h=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(S,y){return f?new OffscreenCanvas(S,y):wc("canvas")}function v(S,y,U){let Y=1,ee=Le(S);if((ee.width>U||ee.height>U)&&(Y=U/Math.max(ee.width,ee.height)),Y<1)if(typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&S instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&S instanceof ImageBitmap||typeof VideoFrame<"u"&&S instanceof VideoFrame){let K=Math.floor(Y*ee.width),we=Math.floor(Y*ee.height);d===void 0&&(d=g(K,we));let ae=y?g(K,we):d;return ae.width=K,ae.height=we,ae.getContext("2d").drawImage(S,0,0,K,we),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ee.width+"x"+ee.height+") to ("+K+"x"+we+")."),ae}else return"data"in S&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ee.width+"x"+ee.height+")."),S;return S}function m(S){return S.generateMipmaps&&S.minFilter!==xn&&S.minFilter!==Fn}function p(S){n.generateMipmap(S)}function b(S,y,U,Y,ee=!1){if(S!==null){if(n[S]!==void 0)return n[S];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+S+"'")}let K=y;if(y===n.RED&&(U===n.FLOAT&&(K=n.R32F),U===n.HALF_FLOAT&&(K=n.R16F),U===n.UNSIGNED_BYTE&&(K=n.R8)),y===n.RED_INTEGER&&(U===n.UNSIGNED_BYTE&&(K=n.R8UI),U===n.UNSIGNED_SHORT&&(K=n.R16UI),U===n.UNSIGNED_INT&&(K=n.R32UI),U===n.BYTE&&(K=n.R8I),U===n.SHORT&&(K=n.R16I),U===n.INT&&(K=n.R32I)),y===n.RG&&(U===n.FLOAT&&(K=n.RG32F),U===n.HALF_FLOAT&&(K=n.RG16F),U===n.UNSIGNED_BYTE&&(K=n.RG8)),y===n.RG_INTEGER&&(U===n.UNSIGNED_BYTE&&(K=n.RG8UI),U===n.UNSIGNED_SHORT&&(K=n.RG16UI),U===n.UNSIGNED_INT&&(K=n.RG32UI),U===n.BYTE&&(K=n.RG8I),U===n.SHORT&&(K=n.RG16I),U===n.INT&&(K=n.RG32I)),y===n.RGB&&U===n.UNSIGNED_INT_5_9_9_9_REV&&(K=n.RGB9_E5),y===n.RGBA){let we=ee?_c:nt.getTransfer(Y);U===n.FLOAT&&(K=n.RGBA32F),U===n.HALF_FLOAT&&(K=n.RGBA16F),U===n.UNSIGNED_BYTE&&(K=we===dt?n.SRGB8_ALPHA8:n.RGBA8),U===n.UNSIGNED_SHORT_4_4_4_4&&(K=n.RGBA4),U===n.UNSIGNED_SHORT_5_5_5_1&&(K=n.RGB5_A1)}return(K===n.R16F||K===n.R32F||K===n.RG16F||K===n.RG32F||K===n.RGBA16F||K===n.RGBA32F)&&e.get("EXT_color_buffer_float"),K}function M(S,y){let U;return S?y===null||y===_r||y===Ss?U=n.DEPTH24_STENCIL8:y===vi?U=n.DEPTH32F_STENCIL8:y===vo&&(U=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===_r||y===Ss?U=n.DEPTH_COMPONENT24:y===vi?U=n.DEPTH_COMPONENT32F:y===vo&&(U=n.DEPTH_COMPONENT16),U}function E(S,y){return m(S)===!0||S.isFramebufferTexture&&S.minFilter!==xn&&S.minFilter!==Fn?Math.log2(Math.max(y.width,y.height))+1:S.mipmaps!==void 0&&S.mipmaps.length>0?S.mipmaps.length:S.isCompressedTexture&&Array.isArray(S.image)?y.mipmaps.length:1}function L(S){let y=S.target;y.removeEventListener("dispose",L),D(y),y.isVideoTexture&&u.delete(y)}function C(S){let y=S.target;y.removeEventListener("dispose",C),w(y)}function D(S){let y=i.get(S);if(y.__webglInit===void 0)return;let U=S.source,Y=h.get(U);if(Y){let ee=Y[y.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&O(S),Object.keys(Y).length===0&&h.delete(U)}i.remove(S)}function O(S){let y=i.get(S);n.deleteTexture(y.__webglTexture);let U=S.source,Y=h.get(U);delete Y[y.__cacheKey],o.memory.textures--}function w(S){let y=i.get(S);if(S.depthTexture&&S.depthTexture.dispose(),S.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(y.__webglFramebuffer[Y]))for(let ee=0;ee<y.__webglFramebuffer[Y].length;ee++)n.deleteFramebuffer(y.__webglFramebuffer[Y][ee]);else n.deleteFramebuffer(y.__webglFramebuffer[Y]);y.__webglDepthbuffer&&n.deleteRenderbuffer(y.__webglDepthbuffer[Y])}else{if(Array.isArray(y.__webglFramebuffer))for(let Y=0;Y<y.__webglFramebuffer.length;Y++)n.deleteFramebuffer(y.__webglFramebuffer[Y]);else n.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&n.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&n.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let Y=0;Y<y.__webglColorRenderbuffer.length;Y++)y.__webglColorRenderbuffer[Y]&&n.deleteRenderbuffer(y.__webglColorRenderbuffer[Y]);y.__webglDepthRenderbuffer&&n.deleteRenderbuffer(y.__webglDepthRenderbuffer)}let U=S.textures;for(let Y=0,ee=U.length;Y<ee;Y++){let K=i.get(U[Y]);K.__webglTexture&&(n.deleteTexture(K.__webglTexture),o.memory.textures--),i.remove(U[Y])}i.remove(S)}let _=0;function A(){_=0}function G(){let S=_;return S>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+S+" texture units while this GPU supports only "+r.maxTextures),_+=1,S}function B(S){let y=[];return y.push(S.wrapS),y.push(S.wrapT),y.push(S.wrapR||0),y.push(S.magFilter),y.push(S.minFilter),y.push(S.anisotropy),y.push(S.internalFormat),y.push(S.format),y.push(S.type),y.push(S.generateMipmaps),y.push(S.premultiplyAlpha),y.push(S.flipY),y.push(S.unpackAlignment),y.push(S.colorSpace),y.join()}function J(S,y){let U=i.get(S);if(S.isVideoTexture&&bt(S),S.isRenderTargetTexture===!1&&S.version>0&&U.__version!==S.version){let Y=S.image;if(Y===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{st(U,S,y);return}}t.bindTexture(n.TEXTURE_2D,U.__webglTexture,n.TEXTURE0+y)}function Z(S,y){let U=i.get(S);if(S.version>0&&U.__version!==S.version){st(U,S,y);return}t.bindTexture(n.TEXTURE_2D_ARRAY,U.__webglTexture,n.TEXTURE0+y)}function j(S,y){let U=i.get(S);if(S.version>0&&U.__version!==S.version){st(U,S,y);return}t.bindTexture(n.TEXTURE_3D,U.__webglTexture,n.TEXTURE0+y)}function Q(S,y){let U=i.get(S);if(S.version>0&&U.__version!==S.version){W(U,S,y);return}t.bindTexture(n.TEXTURE_CUBE_MAP,U.__webglTexture,n.TEXTURE0+y)}let H={[oh]:n.REPEAT,[vr]:n.CLAMP_TO_EDGE,[ah]:n.MIRRORED_REPEAT},le={[xn]:n.NEAREST,[sS]:n.NEAREST_MIPMAP_NEAREST,[za]:n.NEAREST_MIPMAP_LINEAR,[Fn]:n.LINEAR,[Cd]:n.LINEAR_MIPMAP_NEAREST,[yr]:n.LINEAR_MIPMAP_LINEAR},fe={[lS]:n.NEVER,[mS]:n.ALWAYS,[uS]:n.LESS,[Zv]:n.LEQUAL,[dS]:n.EQUAL,[pS]:n.GEQUAL,[hS]:n.GREATER,[fS]:n.NOTEQUAL};function _e(S,y){if(y.type===vi&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===Fn||y.magFilter===Cd||y.magFilter===za||y.magFilter===yr||y.minFilter===Fn||y.minFilter===Cd||y.minFilter===za||y.minFilter===yr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(S,n.TEXTURE_WRAP_S,H[y.wrapS]),n.texParameteri(S,n.TEXTURE_WRAP_T,H[y.wrapT]),(S===n.TEXTURE_3D||S===n.TEXTURE_2D_ARRAY)&&n.texParameteri(S,n.TEXTURE_WRAP_R,H[y.wrapR]),n.texParameteri(S,n.TEXTURE_MAG_FILTER,le[y.magFilter]),n.texParameteri(S,n.TEXTURE_MIN_FILTER,le[y.minFilter]),y.compareFunction&&(n.texParameteri(S,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(S,n.TEXTURE_COMPARE_FUNC,fe[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===xn||y.minFilter!==za&&y.minFilter!==yr||y.type===vi&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||i.get(y).__currentAnisotropy){let U=e.get("EXT_texture_filter_anisotropic");n.texParameterf(S,U.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,r.getMaxAnisotropy())),i.get(y).__currentAnisotropy=y.anisotropy}}}function Xe(S,y){let U=!1;S.__webglInit===void 0&&(S.__webglInit=!0,y.addEventListener("dispose",L));let Y=y.source,ee=h.get(Y);ee===void 0&&(ee={},h.set(Y,ee));let K=B(y);if(K!==S.__cacheKey){ee[K]===void 0&&(ee[K]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,U=!0),ee[K].usedTimes++;let we=ee[S.__cacheKey];we!==void 0&&(ee[S.__cacheKey].usedTimes--,we.usedTimes===0&&O(y)),S.__cacheKey=K,S.__webglTexture=ee[K].texture}return U}function st(S,y,U){let Y=n.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(Y=n.TEXTURE_2D_ARRAY),y.isData3DTexture&&(Y=n.TEXTURE_3D);let ee=Xe(S,y),K=y.source;t.bindTexture(Y,S.__webglTexture,n.TEXTURE0+U);let we=i.get(K);if(K.version!==we.__version||ee===!0){t.activeTexture(n.TEXTURE0+U);let ae=nt.getPrimaries(nt.workingColorSpace),he=y.colorSpace===Li?null:nt.getPrimaries(y.colorSpace),Fe=y.colorSpace===Li||ae===he?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,y.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Fe);let ne=v(y.image,!1,r.maxTextureSize);ne=Pe(y,ne);let ue=s.convert(y.format,y.colorSpace),Ye=s.convert(y.type),Ie=b(y.internalFormat,ue,Ye,y.colorSpace,y.isVideoTexture);_e(Y,y);let pe,Re=y.mipmaps,ze=y.isVideoTexture!==!0,ft=we.__version===void 0||ee===!0,I=K.dataReady,ie=E(y,ne);if(y.isDepthTexture)Ie=M(y.format===Cs,y.type),ft&&(ze?t.texStorage2D(n.TEXTURE_2D,1,Ie,ne.width,ne.height):t.texImage2D(n.TEXTURE_2D,0,Ie,ne.width,ne.height,0,ue,Ye,null));else if(y.isDataTexture)if(Re.length>0){ze&&ft&&t.texStorage2D(n.TEXTURE_2D,ie,Ie,Re[0].width,Re[0].height);for(let $=0,q=Re.length;$<q;$++)pe=Re[$],ze?I&&t.texSubImage2D(n.TEXTURE_2D,$,0,0,pe.width,pe.height,ue,Ye,pe.data):t.texImage2D(n.TEXTURE_2D,$,Ie,pe.width,pe.height,0,ue,Ye,pe.data);y.generateMipmaps=!1}else ze?(ft&&t.texStorage2D(n.TEXTURE_2D,ie,Ie,ne.width,ne.height),I&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ne.width,ne.height,ue,Ye,ne.data)):t.texImage2D(n.TEXTURE_2D,0,Ie,ne.width,ne.height,0,ue,Ye,ne.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){ze&&ft&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ie,Ie,Re[0].width,Re[0].height,ne.depth);for(let $=0,q=Re.length;$<q;$++)if(pe=Re[$],y.format!==kn)if(ue!==null)if(ze){if(I)if(y.layerUpdates.size>0){let se=Pv(pe.width,pe.height,y.format,y.type);for(let Ee of y.layerUpdates){let Ze=pe.data.subarray(Ee*se/pe.data.BYTES_PER_ELEMENT,(Ee+1)*se/pe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,$,0,0,Ee,pe.width,pe.height,1,ue,Ze,0,0)}y.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,$,0,0,0,pe.width,pe.height,ne.depth,ue,pe.data,0,0)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,$,Ie,pe.width,pe.height,ne.depth,0,pe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ze?I&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,$,0,0,0,pe.width,pe.height,ne.depth,ue,Ye,pe.data):t.texImage3D(n.TEXTURE_2D_ARRAY,$,Ie,pe.width,pe.height,ne.depth,0,ue,Ye,pe.data)}else{ze&&ft&&t.texStorage2D(n.TEXTURE_2D,ie,Ie,Re[0].width,Re[0].height);for(let $=0,q=Re.length;$<q;$++)pe=Re[$],y.format!==kn?ue!==null?ze?I&&t.compressedTexSubImage2D(n.TEXTURE_2D,$,0,0,pe.width,pe.height,ue,pe.data):t.compressedTexImage2D(n.TEXTURE_2D,$,Ie,pe.width,pe.height,0,pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ze?I&&t.texSubImage2D(n.TEXTURE_2D,$,0,0,pe.width,pe.height,ue,Ye,pe.data):t.texImage2D(n.TEXTURE_2D,$,Ie,pe.width,pe.height,0,ue,Ye,pe.data)}else if(y.isDataArrayTexture)if(ze){if(ft&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ie,Ie,ne.width,ne.height,ne.depth),I)if(y.layerUpdates.size>0){let $=Pv(ne.width,ne.height,y.format,y.type);for(let q of y.layerUpdates){let se=ne.data.subarray(q*$/ne.data.BYTES_PER_ELEMENT,(q+1)*$/ne.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,q,ne.width,ne.height,1,ue,Ye,se)}y.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ne.width,ne.height,ne.depth,ue,Ye,ne.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Ie,ne.width,ne.height,ne.depth,0,ue,Ye,ne.data);else if(y.isData3DTexture)ze?(ft&&t.texStorage3D(n.TEXTURE_3D,ie,Ie,ne.width,ne.height,ne.depth),I&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ne.width,ne.height,ne.depth,ue,Ye,ne.data)):t.texImage3D(n.TEXTURE_3D,0,Ie,ne.width,ne.height,ne.depth,0,ue,Ye,ne.data);else if(y.isFramebufferTexture){if(ft)if(ze)t.texStorage2D(n.TEXTURE_2D,ie,Ie,ne.width,ne.height);else{let $=ne.width,q=ne.height;for(let se=0;se<ie;se++)t.texImage2D(n.TEXTURE_2D,se,Ie,$,q,0,ue,Ye,null),$>>=1,q>>=1}}else if(Re.length>0){if(ze&&ft){let $=Le(Re[0]);t.texStorage2D(n.TEXTURE_2D,ie,Ie,$.width,$.height)}for(let $=0,q=Re.length;$<q;$++)pe=Re[$],ze?I&&t.texSubImage2D(n.TEXTURE_2D,$,0,0,ue,Ye,pe):t.texImage2D(n.TEXTURE_2D,$,Ie,ue,Ye,pe);y.generateMipmaps=!1}else if(ze){if(ft){let $=Le(ne);t.texStorage2D(n.TEXTURE_2D,ie,Ie,$.width,$.height)}I&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ue,Ye,ne)}else t.texImage2D(n.TEXTURE_2D,0,Ie,ue,Ye,ne);m(y)&&p(Y),we.__version=K.version,y.onUpdate&&y.onUpdate(y)}S.__version=y.version}function W(S,y,U){if(y.image.length!==6)return;let Y=Xe(S,y),ee=y.source;t.bindTexture(n.TEXTURE_CUBE_MAP,S.__webglTexture,n.TEXTURE0+U);let K=i.get(ee);if(ee.version!==K.__version||Y===!0){t.activeTexture(n.TEXTURE0+U);let we=nt.getPrimaries(nt.workingColorSpace),ae=y.colorSpace===Li?null:nt.getPrimaries(y.colorSpace),he=y.colorSpace===Li||we===ae?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,y.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,he);let Fe=y.isCompressedTexture||y.image[0].isCompressedTexture,ne=y.image[0]&&y.image[0].isDataTexture,ue=[];for(let q=0;q<6;q++)!Fe&&!ne?ue[q]=v(y.image[q],!0,r.maxCubemapSize):ue[q]=ne?y.image[q].image:y.image[q],ue[q]=Pe(y,ue[q]);let Ye=ue[0],Ie=s.convert(y.format,y.colorSpace),pe=s.convert(y.type),Re=b(y.internalFormat,Ie,pe,y.colorSpace),ze=y.isVideoTexture!==!0,ft=K.__version===void 0||Y===!0,I=ee.dataReady,ie=E(y,Ye);_e(n.TEXTURE_CUBE_MAP,y);let $;if(Fe){ze&&ft&&t.texStorage2D(n.TEXTURE_CUBE_MAP,ie,Re,Ye.width,Ye.height);for(let q=0;q<6;q++){$=ue[q].mipmaps;for(let se=0;se<$.length;se++){let Ee=$[se];y.format!==kn?Ie!==null?ze?I&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,se,0,0,Ee.width,Ee.height,Ie,Ee.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,se,Re,Ee.width,Ee.height,0,Ee.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ze?I&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,se,0,0,Ee.width,Ee.height,Ie,pe,Ee.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,se,Re,Ee.width,Ee.height,0,Ie,pe,Ee.data)}}}else{if($=y.mipmaps,ze&&ft){$.length>0&&ie++;let q=Le(ue[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,ie,Re,q.width,q.height)}for(let q=0;q<6;q++)if(ne){ze?I&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,0,0,ue[q].width,ue[q].height,Ie,pe,ue[q].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,Re,ue[q].width,ue[q].height,0,Ie,pe,ue[q].data);for(let se=0;se<$.length;se++){let Ze=$[se].image[q].image;ze?I&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,se+1,0,0,Ze.width,Ze.height,Ie,pe,Ze.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,se+1,Re,Ze.width,Ze.height,0,Ie,pe,Ze.data)}}else{ze?I&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,0,0,Ie,pe,ue[q]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,Re,Ie,pe,ue[q]);for(let se=0;se<$.length;se++){let Ee=$[se];ze?I&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,se+1,0,0,Ie,pe,Ee.image[q]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,se+1,Re,Ie,pe,Ee.image[q])}}}m(y)&&p(n.TEXTURE_CUBE_MAP),K.__version=ee.version,y.onUpdate&&y.onUpdate(y)}S.__version=y.version}function te(S,y,U,Y,ee,K){let we=s.convert(U.format,U.colorSpace),ae=s.convert(U.type),he=b(U.internalFormat,we,ae,U.colorSpace);if(!i.get(y).__hasExternalTextures){let ne=Math.max(1,y.width>>K),ue=Math.max(1,y.height>>K);ee===n.TEXTURE_3D||ee===n.TEXTURE_2D_ARRAY?t.texImage3D(ee,K,he,ne,ue,y.depth,0,we,ae,null):t.texImage2D(ee,K,he,ne,ue,0,we,ae,null)}t.bindFramebuffer(n.FRAMEBUFFER,S),be(y)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Y,ee,i.get(U).__webglTexture,0,ot(y)):(ee===n.TEXTURE_2D||ee>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ee<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,Y,ee,i.get(U).__webglTexture,K),t.bindFramebuffer(n.FRAMEBUFFER,null)}function ve(S,y,U){if(n.bindRenderbuffer(n.RENDERBUFFER,S),y.depthBuffer){let Y=y.depthTexture,ee=Y&&Y.isDepthTexture?Y.type:null,K=M(y.stencilBuffer,ee),we=y.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ae=ot(y);be(y)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ae,K,y.width,y.height):U?n.renderbufferStorageMultisample(n.RENDERBUFFER,ae,K,y.width,y.height):n.renderbufferStorage(n.RENDERBUFFER,K,y.width,y.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,we,n.RENDERBUFFER,S)}else{let Y=y.textures;for(let ee=0;ee<Y.length;ee++){let K=Y[ee],we=s.convert(K.format,K.colorSpace),ae=s.convert(K.type),he=b(K.internalFormat,we,ae,K.colorSpace),Fe=ot(y);U&&be(y)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Fe,he,y.width,y.height):be(y)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Fe,he,y.width,y.height):n.renderbufferStorage(n.RENDERBUFFER,he,y.width,y.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function de(S,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,S),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(y.depthTexture).__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),J(y.depthTexture,0);let Y=i.get(y.depthTexture).__webglTexture,ee=ot(y);if(y.depthTexture.format===xs)be(y)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Y,0,ee):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Y,0);else if(y.depthTexture.format===Cs)be(y)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Y,0,ee):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Y,0);else throw new Error("Unknown depthTexture format")}function De(S){let y=i.get(S),U=S.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==S.depthTexture){let Y=S.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),Y){let ee=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,Y.removeEventListener("dispose",ee)};Y.addEventListener("dispose",ee),y.__depthDisposeCallback=ee}y.__boundDepthTexture=Y}if(S.depthTexture&&!y.__autoAllocateDepthBuffer){if(U)throw new Error("target.depthTexture not supported in Cube render targets");de(y.__webglFramebuffer,S)}else if(U){y.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(t.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer[Y]),y.__webglDepthbuffer[Y]===void 0)y.__webglDepthbuffer[Y]=n.createRenderbuffer(),ve(y.__webglDepthbuffer[Y],S,!1);else{let ee=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,K=y.__webglDepthbuffer[Y];n.bindRenderbuffer(n.RENDERBUFFER,K),n.framebufferRenderbuffer(n.FRAMEBUFFER,ee,n.RENDERBUFFER,K)}}else if(t.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=n.createRenderbuffer(),ve(y.__webglDepthbuffer,S,!1);else{let Y=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ee=y.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,ee),n.framebufferRenderbuffer(n.FRAMEBUFFER,Y,n.RENDERBUFFER,ee)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function Oe(S,y,U){let Y=i.get(S);y!==void 0&&te(Y.__webglFramebuffer,S,S.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),U!==void 0&&De(S)}function Ge(S){let y=S.texture,U=i.get(S),Y=i.get(y);S.addEventListener("dispose",C);let ee=S.textures,K=S.isWebGLCubeRenderTarget===!0,we=ee.length>1;if(we||(Y.__webglTexture===void 0&&(Y.__webglTexture=n.createTexture()),Y.__version=y.version,o.memory.textures++),K){U.__webglFramebuffer=[];for(let ae=0;ae<6;ae++)if(y.mipmaps&&y.mipmaps.length>0){U.__webglFramebuffer[ae]=[];for(let he=0;he<y.mipmaps.length;he++)U.__webglFramebuffer[ae][he]=n.createFramebuffer()}else U.__webglFramebuffer[ae]=n.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){U.__webglFramebuffer=[];for(let ae=0;ae<y.mipmaps.length;ae++)U.__webglFramebuffer[ae]=n.createFramebuffer()}else U.__webglFramebuffer=n.createFramebuffer();if(we)for(let ae=0,he=ee.length;ae<he;ae++){let Fe=i.get(ee[ae]);Fe.__webglTexture===void 0&&(Fe.__webglTexture=n.createTexture(),o.memory.textures++)}if(S.samples>0&&be(S)===!1){U.__webglMultisampledFramebuffer=n.createFramebuffer(),U.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,U.__webglMultisampledFramebuffer);for(let ae=0;ae<ee.length;ae++){let he=ee[ae];U.__webglColorRenderbuffer[ae]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,U.__webglColorRenderbuffer[ae]);let Fe=s.convert(he.format,he.colorSpace),ne=s.convert(he.type),ue=b(he.internalFormat,Fe,ne,he.colorSpace,S.isXRRenderTarget===!0),Ye=ot(S);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ye,ue,S.width,S.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ae,n.RENDERBUFFER,U.__webglColorRenderbuffer[ae])}n.bindRenderbuffer(n.RENDERBUFFER,null),S.depthBuffer&&(U.__webglDepthRenderbuffer=n.createRenderbuffer(),ve(U.__webglDepthRenderbuffer,S,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(K){t.bindTexture(n.TEXTURE_CUBE_MAP,Y.__webglTexture),_e(n.TEXTURE_CUBE_MAP,y);for(let ae=0;ae<6;ae++)if(y.mipmaps&&y.mipmaps.length>0)for(let he=0;he<y.mipmaps.length;he++)te(U.__webglFramebuffer[ae][he],S,y,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,he);else te(U.__webglFramebuffer[ae],S,y,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0);m(y)&&p(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(we){for(let ae=0,he=ee.length;ae<he;ae++){let Fe=ee[ae],ne=i.get(Fe);t.bindTexture(n.TEXTURE_2D,ne.__webglTexture),_e(n.TEXTURE_2D,Fe),te(U.__webglFramebuffer,S,Fe,n.COLOR_ATTACHMENT0+ae,n.TEXTURE_2D,0),m(Fe)&&p(n.TEXTURE_2D)}t.unbindTexture()}else{let ae=n.TEXTURE_2D;if((S.isWebGL3DRenderTarget||S.isWebGLArrayRenderTarget)&&(ae=S.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ae,Y.__webglTexture),_e(ae,y),y.mipmaps&&y.mipmaps.length>0)for(let he=0;he<y.mipmaps.length;he++)te(U.__webglFramebuffer[he],S,y,n.COLOR_ATTACHMENT0,ae,he);else te(U.__webglFramebuffer,S,y,n.COLOR_ATTACHMENT0,ae,0);m(y)&&p(ae),t.unbindTexture()}S.depthBuffer&&De(S)}function mt(S){let y=S.textures;for(let U=0,Y=y.length;U<Y;U++){let ee=y[U];if(m(ee)){let K=S.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,we=i.get(ee).__webglTexture;t.bindTexture(K,we),p(K),t.unbindTexture()}}}let T=[],Mt=[];function it(S){if(S.samples>0){if(be(S)===!1){let y=S.textures,U=S.width,Y=S.height,ee=n.COLOR_BUFFER_BIT,K=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,we=i.get(S),ae=y.length>1;if(ae)for(let he=0;he<y.length;he++)t.bindFramebuffer(n.FRAMEBUFFER,we.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+he,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,we.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+he,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,we.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,we.__webglFramebuffer);for(let he=0;he<y.length;he++){if(S.resolveDepthBuffer&&(S.depthBuffer&&(ee|=n.DEPTH_BUFFER_BIT),S.stencilBuffer&&S.resolveStencilBuffer&&(ee|=n.STENCIL_BUFFER_BIT)),ae){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,we.__webglColorRenderbuffer[he]);let Fe=i.get(y[he]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Fe,0)}n.blitFramebuffer(0,0,U,Y,0,0,U,Y,ee,n.NEAREST),c===!0&&(T.length=0,Mt.length=0,T.push(n.COLOR_ATTACHMENT0+he),S.depthBuffer&&S.resolveDepthBuffer===!1&&(T.push(K),Mt.push(K),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,Mt)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,T))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ae)for(let he=0;he<y.length;he++){t.bindFramebuffer(n.FRAMEBUFFER,we.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+he,n.RENDERBUFFER,we.__webglColorRenderbuffer[he]);let Fe=i.get(y[he]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,we.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+he,n.TEXTURE_2D,Fe,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,we.__webglMultisampledFramebuffer)}else if(S.depthBuffer&&S.resolveDepthBuffer===!1&&c){let y=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[y])}}}function ot(S){return Math.min(r.maxSamples,S.samples)}function be(S){let y=i.get(S);return S.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function bt(S){let y=o.render.frame;u.get(S)!==y&&(u.set(S,y),S.update())}function Pe(S,y){let U=S.colorSpace,Y=S.format,ee=S.type;return S.isCompressedTexture===!0||S.isVideoTexture===!0||U!==Gi&&U!==Li&&(nt.getTransfer(U)===dt?(Y!==kn||ee!==_i)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",U)),y}function Le(S){return typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement?(l.width=S.naturalWidth||S.width,l.height=S.naturalHeight||S.height):typeof VideoFrame<"u"&&S instanceof VideoFrame?(l.width=S.displayWidth,l.height=S.displayHeight):(l.width=S.width,l.height=S.height),l}this.allocateTextureUnit=G,this.resetTextureUnits=A,this.setTexture2D=J,this.setTexture2DArray=Z,this.setTexture3D=j,this.setTextureCube=Q,this.rebindTextures=Oe,this.setupRenderTarget=Ge,this.updateRenderTargetMipmap=mt,this.updateMultisampleRenderTarget=it,this.setupDepthRenderbuffer=De,this.setupFrameBufferTexture=te,this.useMultisampledRTT=be}function sA(n,e){function t(i,r=Li){let s,o=nt.getTransfer(r);if(i===_i)return n.UNSIGNED_BYTE;if(i===hf)return n.UNSIGNED_SHORT_4_4_4_4;if(i===ff)return n.UNSIGNED_SHORT_5_5_5_1;if(i===zv)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Vv)return n.BYTE;if(i===Bv)return n.SHORT;if(i===vo)return n.UNSIGNED_SHORT;if(i===df)return n.INT;if(i===_r)return n.UNSIGNED_INT;if(i===vi)return n.FLOAT;if(i===bo)return n.HALF_FLOAT;if(i===Hv)return n.ALPHA;if(i===Gv)return n.RGB;if(i===kn)return n.RGBA;if(i===Wv)return n.LUMINANCE;if(i===jv)return n.LUMINANCE_ALPHA;if(i===xs)return n.DEPTH_COMPONENT;if(i===Cs)return n.DEPTH_STENCIL;if(i===$v)return n.RED;if(i===pf)return n.RED_INTEGER;if(i===qv)return n.RG;if(i===mf)return n.RG_INTEGER;if(i===gf)return n.RGBA_INTEGER;if(i===hc||i===fc||i===pc||i===mc)if(o===dt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===hc)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===fc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===pc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===mc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===hc)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===fc)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===pc)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===mc)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===ch||i===lh||i===uh||i===dh)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===ch)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===lh)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===uh)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===dh)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===hh||i===fh||i===ph)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===hh||i===fh)return o===dt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===ph)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===mh||i===gh||i===vh||i===yh||i===_h||i===xh||i===Mh||i===bh||i===wh||i===Eh||i===Sh||i===Ch||i===Dh||i===Th)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===mh)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===gh)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===vh)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===yh)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===_h)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===xh)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Mh)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===bh)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===wh)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Eh)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Sh)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Ch)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Dh)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Th)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===gc||i===Ah||i===Ih)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===gc)return o===dt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Ah)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Ih)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Xv||i===Ph||i===Rh||i===Nh)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===gc)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Ph)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Rh)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Nh)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ss?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}var Yh=class extends Yt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},Fi=class extends ei{constructor(){super(),this.isGroup=!0,this.type="Group"}},oA={type:"move"},go=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Fi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Fi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Fi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(let v of e.hand.values()){let m=t.getJointPose(v,i),p=this._getHandJoint(l,v);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let u=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],h=u.position.distanceTo(d.position),f=.02,g=.005;l.inputState.pinching&&h>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&h<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(oA)))}return a!==null&&(a.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new Fi;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},aA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,cA=`
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

}`,Zh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){let r=new Sr,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new ti({vertexShader:aA,fragmentShader:cA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new fn(new Nc(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Jh=class extends Bi{constructor(e,t){super();let i=this,r=null,s=1,o=null,a="local-floor",c=1,l=null,u=null,d=null,h=null,f=null,g=null,v=new Zh,m=t.getContextAttributes(),p=null,b=null,M=[],E=[],L=new He,C=null,D=new Yt;D.layers.enable(1),D.viewport=new ht;let O=new Yt;O.layers.enable(2),O.viewport=new ht;let w=[D,O],_=new Yh;_.layers.enable(1),_.layers.enable(2);let A=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let te=M[W];return te===void 0&&(te=new go,M[W]=te),te.getTargetRaySpace()},this.getControllerGrip=function(W){let te=M[W];return te===void 0&&(te=new go,M[W]=te),te.getGripSpace()},this.getHand=function(W){let te=M[W];return te===void 0&&(te=new go,M[W]=te),te.getHandSpace()};function B(W){let te=E.indexOf(W.inputSource);if(te===-1)return;let ve=M[te];ve!==void 0&&(ve.update(W.inputSource,W.frame,l||o),ve.dispatchEvent({type:W.type,data:W.inputSource}))}function J(){r.removeEventListener("select",B),r.removeEventListener("selectstart",B),r.removeEventListener("selectend",B),r.removeEventListener("squeeze",B),r.removeEventListener("squeezestart",B),r.removeEventListener("squeezeend",B),r.removeEventListener("end",J),r.removeEventListener("inputsourceschange",Z);for(let W=0;W<M.length;W++){let te=E[W];te!==null&&(E[W]=null,M[W].disconnect(te))}A=null,G=null,v.reset(),e.setRenderTarget(p),f=null,h=null,d=null,r=null,b=null,st.stop(),i.isPresenting=!1,e.setPixelRatio(C),e.setSize(L.width,L.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){s=W,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){a=W,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(W){l=W},this.getBaseLayer=function(){return h!==null?h:f},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=function(W){return Co(this,null,function*(){if(r=W,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",B),r.addEventListener("selectstart",B),r.addEventListener("selectend",B),r.addEventListener("squeeze",B),r.addEventListener("squeezestart",B),r.addEventListener("squeezeend",B),r.addEventListener("end",J),r.addEventListener("inputsourceschange",Z),m.xrCompatible!==!0&&(yield t.makeXRCompatible()),C=e.getPixelRatio(),e.getSize(L),r.renderState.layers===void 0){let te={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(r,t,te),r.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),b=new xi(f.framebufferWidth,f.framebufferHeight,{format:kn,type:_i,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let te=null,ve=null,de=null;m.depth&&(de=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,te=m.stencil?Cs:xs,ve=m.stencil?Ss:_r);let De={colorFormat:t.RGBA8,depthFormat:de,scaleFactor:s};d=new XRWebGLBinding(r,t),h=d.createProjectionLayer(De),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),b=new xi(h.textureWidth,h.textureHeight,{format:kn,type:_i,depthTexture:new Fc(h.textureWidth,h.textureHeight,ve,void 0,void 0,void 0,void 0,void 0,void 0,te),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=yield r.requestReferenceSpace(a),st.setContext(r),st.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}})},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function Z(W){for(let te=0;te<W.removed.length;te++){let ve=W.removed[te],de=E.indexOf(ve);de>=0&&(E[de]=null,M[de].disconnect(ve))}for(let te=0;te<W.added.length;te++){let ve=W.added[te],de=E.indexOf(ve);if(de===-1){for(let Oe=0;Oe<M.length;Oe++)if(Oe>=E.length){E.push(ve),de=Oe;break}else if(E[Oe]===null){E[Oe]=ve,de=Oe;break}if(de===-1)break}let De=M[de];De&&De.connect(ve)}}let j=new R,Q=new R;function H(W,te,ve){j.setFromMatrixPosition(te.matrixWorld),Q.setFromMatrixPosition(ve.matrixWorld);let de=j.distanceTo(Q),De=te.projectionMatrix.elements,Oe=ve.projectionMatrix.elements,Ge=De[14]/(De[10]-1),mt=De[14]/(De[10]+1),T=(De[9]+1)/De[5],Mt=(De[9]-1)/De[5],it=(De[8]-1)/De[0],ot=(Oe[8]+1)/Oe[0],be=Ge*it,bt=Ge*ot,Pe=de/(-it+ot),Le=Pe*-it;if(te.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(Le),W.translateZ(Pe),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert(),De[10]===-1)W.projectionMatrix.copy(te.projectionMatrix),W.projectionMatrixInverse.copy(te.projectionMatrixInverse);else{let S=Ge+Pe,y=mt+Pe,U=be-Le,Y=bt+(de-Le),ee=T*mt/y*S,K=Mt*mt/y*S;W.projectionMatrix.makePerspective(U,Y,ee,K,S,y),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}}function le(W,te){te===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(te.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(r===null)return;let te=W.near,ve=W.far;v.texture!==null&&(v.depthNear>0&&(te=v.depthNear),v.depthFar>0&&(ve=v.depthFar)),_.near=O.near=D.near=te,_.far=O.far=D.far=ve,(A!==_.near||G!==_.far)&&(r.updateRenderState({depthNear:_.near,depthFar:_.far}),A=_.near,G=_.far);let de=W.parent,De=_.cameras;le(_,de);for(let Oe=0;Oe<De.length;Oe++)le(De[Oe],de);De.length===2?H(_,D,O):_.projectionMatrix.copy(D.projectionMatrix),fe(W,_,de)};function fe(W,te,ve){ve===null?W.matrix.copy(te.matrixWorld):(W.matrix.copy(ve.matrixWorld),W.matrix.invert(),W.matrix.multiply(te.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(te.projectionMatrix),W.projectionMatrixInverse.copy(te.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=Lh*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return _},this.getFoveation=function(){if(!(h===null&&f===null))return c},this.setFoveation=function(W){c=W,h!==null&&(h.fixedFoveation=W),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=W)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(_)};let _e=null;function Xe(W,te){if(u=te.getViewerPose(l||o),g=te,u!==null){let ve=u.views;f!==null&&(e.setRenderTargetFramebuffer(b,f.framebuffer),e.setRenderTarget(b));let de=!1;ve.length!==_.cameras.length&&(_.cameras.length=0,de=!0);for(let Oe=0;Oe<ve.length;Oe++){let Ge=ve[Oe],mt=null;if(f!==null)mt=f.getViewport(Ge);else{let Mt=d.getViewSubImage(h,Ge);mt=Mt.viewport,Oe===0&&(e.setRenderTargetTextures(b,Mt.colorTexture,h.ignoreDepthValues?void 0:Mt.depthStencilTexture),e.setRenderTarget(b))}let T=w[Oe];T===void 0&&(T=new Yt,T.layers.enable(Oe),T.viewport=new ht,w[Oe]=T),T.matrix.fromArray(Ge.transform.matrix),T.matrix.decompose(T.position,T.quaternion,T.scale),T.projectionMatrix.fromArray(Ge.projectionMatrix),T.projectionMatrixInverse.copy(T.projectionMatrix).invert(),T.viewport.set(mt.x,mt.y,mt.width,mt.height),Oe===0&&(_.matrix.copy(T.matrix),_.matrix.decompose(_.position,_.quaternion,_.scale)),de===!0&&_.cameras.push(T)}let De=r.enabledFeatures;if(De&&De.includes("depth-sensing")){let Oe=d.getDepthInformation(ve[0]);Oe&&Oe.isValid&&Oe.texture&&v.init(e,Oe,r.renderState)}}for(let ve=0;ve<M.length;ve++){let de=E[ve],De=M[ve];de!==null&&De!==void 0&&De.update(de,te,l||o)}_e&&_e(W,te),te.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:te}),g=null}let st=new ey;st.setAnimationLoop(Xe),this.setAnimationLoop=function(W){_e=W},this.dispose=function(){}}},fr=new Mr,lA=new yt;function uA(n,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,Qv(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function r(m,p,b,M,E){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),d(m,p)):p.isMeshPhongMaterial?(s(m,p),u(m,p)):p.isMeshStandardMaterial?(s(m,p),h(m,p),p.isMeshPhysicalMaterial&&f(m,p,E)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),v(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?c(m,p,b,M):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===sn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===sn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let b=e.get(p),M=b.envMap,E=b.envMapRotation;M&&(m.envMap.value=M,fr.copy(E),fr.x*=-1,fr.y*=-1,fr.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(fr.y*=-1,fr.z*=-1),m.envMapRotation.value.setFromMatrix4(lA.makeRotationFromEuler(fr)),m.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,b,M){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*b,m.scale.value=M*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function h(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,b){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===sn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=b.texture,m.transmissionSamplerSize.value.set(b.width,b.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function v(m,p){let b=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(b.matrixWorld),m.nearDistance.value=b.shadow.camera.near,m.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function dA(n,e,t,i){let r={},s={},o=[],a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(b,M){let E=M.program;i.uniformBlockBinding(b,E)}function l(b,M){let E=r[b.id];E===void 0&&(g(b),E=u(b),r[b.id]=E,b.addEventListener("dispose",m));let L=M.program;i.updateUBOMapping(b,L);let C=e.render.frame;s[b.id]!==C&&(h(b),s[b.id]=C)}function u(b){let M=d();b.__bindingPointIndex=M;let E=n.createBuffer(),L=b.__size,C=b.usage;return n.bindBuffer(n.UNIFORM_BUFFER,E),n.bufferData(n.UNIFORM_BUFFER,L,C),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,M,E),E}function d(){for(let b=0;b<a;b++)if(o.indexOf(b)===-1)return o.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(b){let M=r[b.id],E=b.uniforms,L=b.__cache;n.bindBuffer(n.UNIFORM_BUFFER,M);for(let C=0,D=E.length;C<D;C++){let O=Array.isArray(E[C])?E[C]:[E[C]];for(let w=0,_=O.length;w<_;w++){let A=O[w];if(f(A,C,w,L)===!0){let G=A.__offset,B=Array.isArray(A.value)?A.value:[A.value],J=0;for(let Z=0;Z<B.length;Z++){let j=B[Z],Q=v(j);typeof j=="number"||typeof j=="boolean"?(A.__data[0]=j,n.bufferSubData(n.UNIFORM_BUFFER,G+J,A.__data)):j.isMatrix3?(A.__data[0]=j.elements[0],A.__data[1]=j.elements[1],A.__data[2]=j.elements[2],A.__data[3]=0,A.__data[4]=j.elements[3],A.__data[5]=j.elements[4],A.__data[6]=j.elements[5],A.__data[7]=0,A.__data[8]=j.elements[6],A.__data[9]=j.elements[7],A.__data[10]=j.elements[8],A.__data[11]=0):(j.toArray(A.__data,J),J+=Q.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,G,A.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function f(b,M,E,L){let C=b.value,D=M+"_"+E;if(L[D]===void 0)return typeof C=="number"||typeof C=="boolean"?L[D]=C:L[D]=C.clone(),!0;{let O=L[D];if(typeof C=="number"||typeof C=="boolean"){if(O!==C)return L[D]=C,!0}else if(O.equals(C)===!1)return O.copy(C),!0}return!1}function g(b){let M=b.uniforms,E=0,L=16;for(let D=0,O=M.length;D<O;D++){let w=Array.isArray(M[D])?M[D]:[M[D]];for(let _=0,A=w.length;_<A;_++){let G=w[_],B=Array.isArray(G.value)?G.value:[G.value];for(let J=0,Z=B.length;J<Z;J++){let j=B[J],Q=v(j),H=E%L,le=H%Q.boundary,fe=H+le;E+=le,fe!==0&&L-fe<Q.storage&&(E+=L-fe),G.__data=new Float32Array(Q.storage/Float32Array.BYTES_PER_ELEMENT),G.__offset=E,E+=Q.storage}}}let C=E%L;return C>0&&(E+=L-C),b.__size=E,b.__cache={},this}function v(b){let M={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(M.boundary=4,M.storage=4):b.isVector2?(M.boundary=8,M.storage=8):b.isVector3||b.isColor?(M.boundary=16,M.storage=12):b.isVector4?(M.boundary=16,M.storage=16):b.isMatrix3?(M.boundary=48,M.storage=48):b.isMatrix4?(M.boundary=64,M.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),M}function m(b){let M=b.target;M.removeEventListener("dispose",m);let E=o.indexOf(M.__bindingPointIndex);o.splice(E,1),n.deleteBuffer(r[M.id]),delete r[M.id],delete s[M.id]}function p(){for(let b in r)n.deleteBuffer(r[b]);o=[],r={},s={}}return{bind:c,update:l,dispose:p}}var kc=class{constructor(e={}){let{canvas:t=vS(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let h;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");h=i.getContextAttributes().alpha}else h=o;let f=new Uint32Array(4),g=new Int32Array(4),v=null,m=null,p=[],b=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Kn,this.toneMapping=Ui,this.toneMappingExposure=1;let M=this,E=!1,L=0,C=0,D=null,O=-1,w=null,_=new ht,A=new ht,G=null,B=new qe(0),J=0,Z=t.width,j=t.height,Q=1,H=null,le=null,fe=new ht(0,0,Z,j),_e=new ht(0,0,Z,j),Xe=!1,st=new yo,W=!1,te=!1,ve=new yt,de=new R,De=new ht,Oe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Ge=!1;function mt(){return D===null?Q:1}let T=i;function Mt(x,P){return t.getContext(x,P)}try{let x={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${uf}`),t.addEventListener("webglcontextlost",$,!1),t.addEventListener("webglcontextrestored",q,!1),t.addEventListener("webglcontextcreationerror",se,!1),T===null){let P="webgl2";if(T=Mt(P,x),T===null)throw Mt(P)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(x){throw console.error("THREE.WebGLRenderer: "+x.message),x}let it,ot,be,bt,Pe,Le,S,y,U,Y,ee,K,we,ae,he,Fe,ne,ue,Ye,Ie,pe,Re,ze,ft;function I(){it=new T1(T),it.init(),Re=new sA(T,it),ot=new b1(T,it,e,Re),be=new nA(T),bt=new P1(T),Pe=new WT,Le=new rA(T,it,be,Pe,ot,Re,bt),S=new E1(M),y=new D1(M),U=new US(T),ze=new x1(T,U),Y=new A1(T,U,bt,ze),ee=new N1(T,Y,U,bt),Ye=new R1(T,ot,Le),Fe=new w1(Pe),K=new GT(M,S,y,it,ot,ze,Fe),we=new uA(M,Pe),ae=new $T,he=new KT(it),ue=new _1(M,S,y,be,ee,h,c),ne=new tA(M,ee,ot),ft=new dA(T,bt,ot,be),Ie=new M1(T,it,bt),pe=new I1(T,it,bt),bt.programs=K.programs,M.capabilities=ot,M.extensions=it,M.properties=Pe,M.renderLists=ae,M.shadowMap=ne,M.state=be,M.info=bt}I();let ie=new Jh(M,T);this.xr=ie,this.getContext=function(){return T},this.getContextAttributes=function(){return T.getContextAttributes()},this.forceContextLoss=function(){let x=it.get("WEBGL_lose_context");x&&x.loseContext()},this.forceContextRestore=function(){let x=it.get("WEBGL_lose_context");x&&x.restoreContext()},this.getPixelRatio=function(){return Q},this.setPixelRatio=function(x){x!==void 0&&(Q=x,this.setSize(Z,j,!1))},this.getSize=function(x){return x.set(Z,j)},this.setSize=function(x,P,F=!0){if(ie.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Z=x,j=P,t.width=Math.floor(x*Q),t.height=Math.floor(P*Q),F===!0&&(t.style.width=x+"px",t.style.height=P+"px"),this.setViewport(0,0,x,P)},this.getDrawingBufferSize=function(x){return x.set(Z*Q,j*Q).floor()},this.setDrawingBufferSize=function(x,P,F){Z=x,j=P,Q=F,t.width=Math.floor(x*F),t.height=Math.floor(P*F),this.setViewport(0,0,x,P)},this.getCurrentViewport=function(x){return x.copy(_)},this.getViewport=function(x){return x.copy(fe)},this.setViewport=function(x,P,F,k){x.isVector4?fe.set(x.x,x.y,x.z,x.w):fe.set(x,P,F,k),be.viewport(_.copy(fe).multiplyScalar(Q).round())},this.getScissor=function(x){return x.copy(_e)},this.setScissor=function(x,P,F,k){x.isVector4?_e.set(x.x,x.y,x.z,x.w):_e.set(x,P,F,k),be.scissor(A.copy(_e).multiplyScalar(Q).round())},this.getScissorTest=function(){return Xe},this.setScissorTest=function(x){be.setScissorTest(Xe=x)},this.setOpaqueSort=function(x){H=x},this.setTransparentSort=function(x){le=x},this.getClearColor=function(x){return x.copy(ue.getClearColor())},this.setClearColor=function(){ue.setClearColor.apply(ue,arguments)},this.getClearAlpha=function(){return ue.getClearAlpha()},this.setClearAlpha=function(){ue.setClearAlpha.apply(ue,arguments)},this.clear=function(x=!0,P=!0,F=!0){let k=0;if(x){let N=!1;if(D!==null){let re=D.texture.format;N=re===gf||re===mf||re===pf}if(N){let re=D.texture.type,ce=re===_i||re===_r||re===vo||re===Ss||re===hf||re===ff,me=ue.getClearColor(),ge=ue.getClearAlpha(),Se=me.r,Te=me.g,xe=me.b;ce?(f[0]=Se,f[1]=Te,f[2]=xe,f[3]=ge,T.clearBufferuiv(T.COLOR,0,f)):(g[0]=Se,g[1]=Te,g[2]=xe,g[3]=ge,T.clearBufferiv(T.COLOR,0,g))}else k|=T.COLOR_BUFFER_BIT}P&&(k|=T.DEPTH_BUFFER_BIT),F&&(k|=T.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),T.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",$,!1),t.removeEventListener("webglcontextrestored",q,!1),t.removeEventListener("webglcontextcreationerror",se,!1),ae.dispose(),he.dispose(),Pe.dispose(),S.dispose(),y.dispose(),ee.dispose(),ze.dispose(),ft.dispose(),K.dispose(),ie.dispose(),ie.removeEventListener("sessionstart",Vn),ie.removeEventListener("sessionend",Mf),Wi.stop()};function $(x){x.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function q(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;let x=bt.autoReset,P=ne.enabled,F=ne.autoUpdate,k=ne.needsUpdate,N=ne.type;I(),bt.autoReset=x,ne.enabled=P,ne.autoUpdate=F,ne.needsUpdate=k,ne.type=N}function se(x){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",x.statusMessage)}function Ee(x){let P=x.target;P.removeEventListener("dispose",Ee),Ze(P)}function Ze(x){wt(x),Pe.remove(x)}function wt(x){let P=Pe.get(x).programs;P!==void 0&&(P.forEach(function(F){K.releaseProgram(F)}),x.isShaderMaterial&&K.releaseShaderCache(x))}this.renderBufferDirect=function(x,P,F,k,N,re){P===null&&(P=Oe);let ce=N.isMesh&&N.matrixWorld.determinant()<0,me=my(x,P,F,k,N);be.setMaterial(k,ce);let ge=F.index,Se=1;if(k.wireframe===!0){if(ge=Y.getWireframeAttribute(F),ge===void 0)return;Se=2}let Te=F.drawRange,xe=F.attributes.position,Qe=Te.start*Se,gt=(Te.start+Te.count)*Se;re!==null&&(Qe=Math.max(Qe,re.start*Se),gt=Math.min(gt,(re.start+re.count)*Se)),ge!==null?(Qe=Math.max(Qe,0),gt=Math.min(gt,ge.count)):xe!=null&&(Qe=Math.max(Qe,0),gt=Math.min(gt,xe.count));let vt=gt-Qe;if(vt<0||vt===1/0)return;ze.setup(N,k,me,F,ge);let an,et=Ie;if(ge!==null&&(an=U.get(ge),et=pe,et.setIndex(an)),N.isMesh)k.wireframe===!0?(be.setLineWidth(k.wireframeLinewidth*mt()),et.setMode(T.LINES)):et.setMode(T.TRIANGLES);else if(N.isLine){let Me=k.linewidth;Me===void 0&&(Me=1),be.setLineWidth(Me*mt()),N.isLineSegments?et.setMode(T.LINES):N.isLineLoop?et.setMode(T.LINE_LOOP):et.setMode(T.LINE_STRIP)}else N.isPoints?et.setMode(T.POINTS):N.isSprite&&et.setMode(T.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)et.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(it.get("WEBGL_multi_draw"))et.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{let Me=N._multiDrawStarts,kt=N._multiDrawCounts,tt=N._multiDrawCount,bn=ge?U.get(ge).bytesPerElement:1,Cr=Pe.get(k).currentProgram.getUniforms();for(let cn=0;cn<tt;cn++)Cr.setValue(T,"_gl_DrawID",cn),et.render(Me[cn]/bn,kt[cn])}else if(N.isInstancedMesh)et.renderInstances(Qe,vt,N.count);else if(F.isInstancedBufferGeometry){let Me=F._maxInstanceCount!==void 0?F._maxInstanceCount:1/0,kt=Math.min(F.instanceCount,Me);et.renderInstances(Qe,vt,kt)}else et.render(Qe,vt)};function Ft(x,P,F){x.transparent===!0&&x.side===gi&&x.forceSinglePass===!1?(x.side=sn,x.needsUpdate=!0,So(x,P,F),x.side=Vi,x.needsUpdate=!0,So(x,P,F),x.side=gi):So(x,P,F)}this.compile=function(x,P,F=null){F===null&&(F=x),m=he.get(F),m.init(P),b.push(m),F.traverseVisible(function(N){N.isLight&&N.layers.test(P.layers)&&(m.pushLight(N),N.castShadow&&m.pushShadow(N))}),x!==F&&x.traverseVisible(function(N){N.isLight&&N.layers.test(P.layers)&&(m.pushLight(N),N.castShadow&&m.pushShadow(N))}),m.setupLights();let k=new Set;return x.traverse(function(N){let re=N.material;if(re)if(Array.isArray(re))for(let ce=0;ce<re.length;ce++){let me=re[ce];Ft(me,F,N),k.add(me)}else Ft(re,F,N),k.add(re)}),b.pop(),m=null,k},this.compileAsync=function(x,P,F=null){let k=this.compile(x,P,F);return new Promise(N=>{function re(){if(k.forEach(function(ce){Pe.get(ce).currentProgram.isReady()&&k.delete(ce)}),k.size===0){N(x);return}setTimeout(re,10)}it.get("KHR_parallel_shader_compile")!==null?re():setTimeout(re,10)})};let Ke=null;function ni(x){Ke&&Ke(x)}function Vn(){Wi.stop()}function Mf(){Wi.start()}let Wi=new ey;Wi.setAnimationLoop(ni),typeof self<"u"&&Wi.setContext(self),this.setAnimationLoop=function(x){Ke=x,ie.setAnimationLoop(x),x===null?Wi.stop():Wi.start()},ie.addEventListener("sessionstart",Vn),ie.addEventListener("sessionend",Mf),this.render=function(x,P){if(P!==void 0&&P.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;if(x.matrixWorldAutoUpdate===!0&&x.updateMatrixWorld(),P.parent===null&&P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),ie.enabled===!0&&ie.isPresenting===!0&&(ie.cameraAutoUpdate===!0&&ie.updateCamera(P),P=ie.getCamera()),x.isScene===!0&&x.onBeforeRender(M,x,P,D),m=he.get(x,b.length),m.init(P),b.push(m),ve.multiplyMatrices(P.projectionMatrix,P.matrixWorldInverse),st.setFromProjectionMatrix(ve),te=this.localClippingEnabled,W=Fe.init(this.clippingPlanes,te),v=ae.get(x,p.length),v.init(),p.push(v),ie.enabled===!0&&ie.isPresenting===!0){let re=M.xr.getDepthSensingMesh();re!==null&&el(re,P,-1/0,M.sortObjects)}el(x,P,0,M.sortObjects),v.finish(),M.sortObjects===!0&&v.sort(H,le),Ge=ie.enabled===!1||ie.isPresenting===!1||ie.hasDepthSensing()===!1,Ge&&ue.addToRenderList(v,x),this.info.render.frame++,W===!0&&Fe.beginShadows();let F=m.state.shadowsArray;ne.render(F,x,P),W===!0&&Fe.endShadows(),this.info.autoReset===!0&&this.info.reset();let k=v.opaque,N=v.transmissive;if(m.setupLights(),P.isArrayCamera){let re=P.cameras;if(N.length>0)for(let ce=0,me=re.length;ce<me;ce++){let ge=re[ce];wf(k,N,x,ge)}Ge&&ue.render(x);for(let ce=0,me=re.length;ce<me;ce++){let ge=re[ce];bf(v,x,ge,ge.viewport)}}else N.length>0&&wf(k,N,x,P),Ge&&ue.render(x),bf(v,x,P);D!==null&&(Le.updateMultisampleRenderTarget(D),Le.updateRenderTargetMipmap(D)),x.isScene===!0&&x.onAfterRender(M,x,P),ze.resetDefaultState(),O=-1,w=null,b.pop(),b.length>0?(m=b[b.length-1],W===!0&&Fe.setGlobalState(M.clippingPlanes,m.state.camera)):m=null,p.pop(),p.length>0?v=p[p.length-1]:v=null};function el(x,P,F,k){if(x.visible===!1)return;if(x.layers.test(P.layers)){if(x.isGroup)F=x.renderOrder;else if(x.isLOD)x.autoUpdate===!0&&x.update(P);else if(x.isLight)m.pushLight(x),x.castShadow&&m.pushShadow(x);else if(x.isSprite){if(!x.frustumCulled||st.intersectsSprite(x)){k&&De.setFromMatrixPosition(x.matrixWorld).applyMatrix4(ve);let ce=ee.update(x),me=x.material;me.visible&&v.push(x,ce,me,F,De.z,null)}}else if((x.isMesh||x.isLine||x.isPoints)&&(!x.frustumCulled||st.intersectsObject(x))){let ce=ee.update(x),me=x.material;if(k&&(x.boundingSphere!==void 0?(x.boundingSphere===null&&x.computeBoundingSphere(),De.copy(x.boundingSphere.center)):(ce.boundingSphere===null&&ce.computeBoundingSphere(),De.copy(ce.boundingSphere.center)),De.applyMatrix4(x.matrixWorld).applyMatrix4(ve)),Array.isArray(me)){let ge=ce.groups;for(let Se=0,Te=ge.length;Se<Te;Se++){let xe=ge[Se],Qe=me[xe.materialIndex];Qe&&Qe.visible&&v.push(x,ce,Qe,F,De.z,xe)}}else me.visible&&v.push(x,ce,me,F,De.z,null)}}let re=x.children;for(let ce=0,me=re.length;ce<me;ce++)el(re[ce],P,F,k)}function bf(x,P,F,k){let N=x.opaque,re=x.transmissive,ce=x.transparent;m.setupLightsView(F),W===!0&&Fe.setGlobalState(M.clippingPlanes,F),k&&be.viewport(_.copy(k)),N.length>0&&Eo(N,P,F),re.length>0&&Eo(re,P,F),ce.length>0&&Eo(ce,P,F),be.buffers.depth.setTest(!0),be.buffers.depth.setMask(!0),be.buffers.color.setMask(!0),be.setPolygonOffset(!1)}function wf(x,P,F,k){if((F.isScene===!0?F.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[k.id]===void 0&&(m.state.transmissionRenderTarget[k.id]=new xi(1,1,{generateMipmaps:!0,type:it.has("EXT_color_buffer_half_float")||it.has("EXT_color_buffer_float")?bo:_i,minFilter:yr,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:nt.workingColorSpace}));let re=m.state.transmissionRenderTarget[k.id],ce=k.viewport||_;re.setSize(ce.z,ce.w);let me=M.getRenderTarget();M.setRenderTarget(re),M.getClearColor(B),J=M.getClearAlpha(),J<1&&M.setClearColor(16777215,.5),M.clear(),Ge&&ue.render(F);let ge=M.toneMapping;M.toneMapping=Ui;let Se=k.viewport;if(k.viewport!==void 0&&(k.viewport=void 0),m.setupLightsView(k),W===!0&&Fe.setGlobalState(M.clippingPlanes,k),Eo(x,F,k),Le.updateMultisampleRenderTarget(re),Le.updateRenderTargetMipmap(re),it.has("WEBGL_multisampled_render_to_texture")===!1){let Te=!1;for(let xe=0,Qe=P.length;xe<Qe;xe++){let gt=P[xe],vt=gt.object,an=gt.geometry,et=gt.material,Me=gt.group;if(et.side===gi&&vt.layers.test(k.layers)){let kt=et.side;et.side=sn,et.needsUpdate=!0,Ef(vt,F,k,an,et,Me),et.side=kt,et.needsUpdate=!0,Te=!0}}Te===!0&&(Le.updateMultisampleRenderTarget(re),Le.updateRenderTargetMipmap(re))}M.setRenderTarget(me),M.setClearColor(B,J),Se!==void 0&&(k.viewport=Se),M.toneMapping=ge}function Eo(x,P,F){let k=P.isScene===!0?P.overrideMaterial:null;for(let N=0,re=x.length;N<re;N++){let ce=x[N],me=ce.object,ge=ce.geometry,Se=k===null?ce.material:k,Te=ce.group;me.layers.test(F.layers)&&Ef(me,P,F,ge,Se,Te)}}function Ef(x,P,F,k,N,re){x.onBeforeRender(M,P,F,k,N,re),x.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,x.matrixWorld),x.normalMatrix.getNormalMatrix(x.modelViewMatrix),N.onBeforeRender(M,P,F,k,x,re),N.transparent===!0&&N.side===gi&&N.forceSinglePass===!1?(N.side=sn,N.needsUpdate=!0,M.renderBufferDirect(F,P,k,N,x,re),N.side=Vi,N.needsUpdate=!0,M.renderBufferDirect(F,P,k,N,x,re),N.side=gi):M.renderBufferDirect(F,P,k,N,x,re),x.onAfterRender(M,P,F,k,N,re)}function So(x,P,F){P.isScene!==!0&&(P=Oe);let k=Pe.get(x),N=m.state.lights,re=m.state.shadowsArray,ce=N.state.version,me=K.getParameters(x,N.state,re,P,F),ge=K.getProgramCacheKey(me),Se=k.programs;k.environment=x.isMeshStandardMaterial?P.environment:null,k.fog=P.fog,k.envMap=(x.isMeshStandardMaterial?y:S).get(x.envMap||k.environment),k.envMapRotation=k.environment!==null&&x.envMap===null?P.environmentRotation:x.envMapRotation,Se===void 0&&(x.addEventListener("dispose",Ee),Se=new Map,k.programs=Se);let Te=Se.get(ge);if(Te!==void 0){if(k.currentProgram===Te&&k.lightsStateVersion===ce)return Cf(x,me),Te}else me.uniforms=K.getUniforms(x),x.onBeforeCompile(me,M),Te=K.acquireProgram(me,ge),Se.set(ge,Te),k.uniforms=me.uniforms;let xe=k.uniforms;return(!x.isShaderMaterial&&!x.isRawShaderMaterial||x.clipping===!0)&&(xe.clippingPlanes=Fe.uniform),Cf(x,me),k.needsLights=vy(x),k.lightsStateVersion=ce,k.needsLights&&(xe.ambientLightColor.value=N.state.ambient,xe.lightProbe.value=N.state.probe,xe.directionalLights.value=N.state.directional,xe.directionalLightShadows.value=N.state.directionalShadow,xe.spotLights.value=N.state.spot,xe.spotLightShadows.value=N.state.spotShadow,xe.rectAreaLights.value=N.state.rectArea,xe.ltc_1.value=N.state.rectAreaLTC1,xe.ltc_2.value=N.state.rectAreaLTC2,xe.pointLights.value=N.state.point,xe.pointLightShadows.value=N.state.pointShadow,xe.hemisphereLights.value=N.state.hemi,xe.directionalShadowMap.value=N.state.directionalShadowMap,xe.directionalShadowMatrix.value=N.state.directionalShadowMatrix,xe.spotShadowMap.value=N.state.spotShadowMap,xe.spotLightMatrix.value=N.state.spotLightMatrix,xe.spotLightMap.value=N.state.spotLightMap,xe.pointShadowMap.value=N.state.pointShadowMap,xe.pointShadowMatrix.value=N.state.pointShadowMatrix),k.currentProgram=Te,k.uniformsList=null,Te}function Sf(x){if(x.uniformsList===null){let P=x.currentProgram.getUniforms();x.uniformsList=bs.seqWithValue(P.seq,x.uniforms)}return x.uniformsList}function Cf(x,P){let F=Pe.get(x);F.outputColorSpace=P.outputColorSpace,F.batching=P.batching,F.batchingColor=P.batchingColor,F.instancing=P.instancing,F.instancingColor=P.instancingColor,F.instancingMorph=P.instancingMorph,F.skinning=P.skinning,F.morphTargets=P.morphTargets,F.morphNormals=P.morphNormals,F.morphColors=P.morphColors,F.morphTargetsCount=P.morphTargetsCount,F.numClippingPlanes=P.numClippingPlanes,F.numIntersection=P.numClipIntersection,F.vertexAlphas=P.vertexAlphas,F.vertexTangents=P.vertexTangents,F.toneMapping=P.toneMapping}function my(x,P,F,k,N){P.isScene!==!0&&(P=Oe),Le.resetTextureUnits();let re=P.fog,ce=k.isMeshStandardMaterial?P.environment:null,me=D===null?M.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:Gi,ge=(k.isMeshStandardMaterial?y:S).get(k.envMap||ce),Se=k.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,Te=!!F.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),xe=!!F.morphAttributes.position,Qe=!!F.morphAttributes.normal,gt=!!F.morphAttributes.color,vt=Ui;k.toneMapped&&(D===null||D.isXRRenderTarget===!0)&&(vt=M.toneMapping);let an=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,et=an!==void 0?an.length:0,Me=Pe.get(k),kt=m.state.lights;if(W===!0&&(te===!0||x!==w)){let pn=x===w&&k.id===O;Fe.setState(k,x,pn)}let tt=!1;k.version===Me.__version?(Me.needsLights&&Me.lightsStateVersion!==kt.state.version||Me.outputColorSpace!==me||N.isBatchedMesh&&Me.batching===!1||!N.isBatchedMesh&&Me.batching===!0||N.isBatchedMesh&&Me.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&Me.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&Me.instancing===!1||!N.isInstancedMesh&&Me.instancing===!0||N.isSkinnedMesh&&Me.skinning===!1||!N.isSkinnedMesh&&Me.skinning===!0||N.isInstancedMesh&&Me.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&Me.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&Me.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&Me.instancingMorph===!1&&N.morphTexture!==null||Me.envMap!==ge||k.fog===!0&&Me.fog!==re||Me.numClippingPlanes!==void 0&&(Me.numClippingPlanes!==Fe.numPlanes||Me.numIntersection!==Fe.numIntersection)||Me.vertexAlphas!==Se||Me.vertexTangents!==Te||Me.morphTargets!==xe||Me.morphNormals!==Qe||Me.morphColors!==gt||Me.toneMapping!==vt||Me.morphTargetsCount!==et)&&(tt=!0):(tt=!0,Me.__version=k.version);let bn=Me.currentProgram;tt===!0&&(bn=So(k,P,N));let Cr=!1,cn=!1,tl=!1,Et=bn.getUniforms(),Mi=Me.uniforms;if(be.useProgram(bn.program)&&(Cr=!0,cn=!0,tl=!0),k.id!==O&&(O=k.id,cn=!0),Cr||w!==x){Et.setValue(T,"projectionMatrix",x.projectionMatrix),Et.setValue(T,"viewMatrix",x.matrixWorldInverse);let pn=Et.map.cameraPosition;pn!==void 0&&pn.setValue(T,de.setFromMatrixPosition(x.matrixWorld)),ot.logarithmicDepthBuffer&&Et.setValue(T,"logDepthBufFC",2/(Math.log(x.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&Et.setValue(T,"isOrthographic",x.isOrthographicCamera===!0),w!==x&&(w=x,cn=!0,tl=!0)}if(N.isSkinnedMesh){Et.setOptional(T,N,"bindMatrix"),Et.setOptional(T,N,"bindMatrixInverse");let pn=N.skeleton;pn&&(pn.boneTexture===null&&pn.computeBoneTexture(),Et.setValue(T,"boneTexture",pn.boneTexture,Le))}N.isBatchedMesh&&(Et.setOptional(T,N,"batchingTexture"),Et.setValue(T,"batchingTexture",N._matricesTexture,Le),Et.setOptional(T,N,"batchingIdTexture"),Et.setValue(T,"batchingIdTexture",N._indirectTexture,Le),Et.setOptional(T,N,"batchingColorTexture"),N._colorsTexture!==null&&Et.setValue(T,"batchingColorTexture",N._colorsTexture,Le));let nl=F.morphAttributes;if((nl.position!==void 0||nl.normal!==void 0||nl.color!==void 0)&&Ye.update(N,F,bn),(cn||Me.receiveShadow!==N.receiveShadow)&&(Me.receiveShadow=N.receiveShadow,Et.setValue(T,"receiveShadow",N.receiveShadow)),k.isMeshGouraudMaterial&&k.envMap!==null&&(Mi.envMap.value=ge,Mi.flipEnvMap.value=ge.isCubeTexture&&ge.isRenderTargetTexture===!1?-1:1),k.isMeshStandardMaterial&&k.envMap===null&&P.environment!==null&&(Mi.envMapIntensity.value=P.environmentIntensity),cn&&(Et.setValue(T,"toneMappingExposure",M.toneMappingExposure),Me.needsLights&&gy(Mi,tl),re&&k.fog===!0&&we.refreshFogUniforms(Mi,re),we.refreshMaterialUniforms(Mi,k,Q,j,m.state.transmissionRenderTarget[x.id]),bs.upload(T,Sf(Me),Mi,Le)),k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(bs.upload(T,Sf(Me),Mi,Le),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&Et.setValue(T,"center",N.center),Et.setValue(T,"modelViewMatrix",N.modelViewMatrix),Et.setValue(T,"normalMatrix",N.normalMatrix),Et.setValue(T,"modelMatrix",N.matrixWorld),k.isShaderMaterial||k.isRawShaderMaterial){let pn=k.uniformsGroups;for(let il=0,yy=pn.length;il<yy;il++){let Df=pn[il];ft.update(Df,bn),ft.bind(Df,bn)}}return bn}function gy(x,P){x.ambientLightColor.needsUpdate=P,x.lightProbe.needsUpdate=P,x.directionalLights.needsUpdate=P,x.directionalLightShadows.needsUpdate=P,x.pointLights.needsUpdate=P,x.pointLightShadows.needsUpdate=P,x.spotLights.needsUpdate=P,x.spotLightShadows.needsUpdate=P,x.rectAreaLights.needsUpdate=P,x.hemisphereLights.needsUpdate=P}function vy(x){return x.isMeshLambertMaterial||x.isMeshToonMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isShadowMaterial||x.isShaderMaterial&&x.lights===!0}this.getActiveCubeFace=function(){return L},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return D},this.setRenderTargetTextures=function(x,P,F){Pe.get(x.texture).__webglTexture=P,Pe.get(x.depthTexture).__webglTexture=F;let k=Pe.get(x);k.__hasExternalTextures=!0,k.__autoAllocateDepthBuffer=F===void 0,k.__autoAllocateDepthBuffer||it.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),k.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(x,P){let F=Pe.get(x);F.__webglFramebuffer=P,F.__useDefaultFramebuffer=P===void 0},this.setRenderTarget=function(x,P=0,F=0){D=x,L=P,C=F;let k=!0,N=null,re=!1,ce=!1;if(x){let ge=Pe.get(x);if(ge.__useDefaultFramebuffer!==void 0)be.bindFramebuffer(T.FRAMEBUFFER,null),k=!1;else if(ge.__webglFramebuffer===void 0)Le.setupRenderTarget(x);else if(ge.__hasExternalTextures)Le.rebindTextures(x,Pe.get(x.texture).__webglTexture,Pe.get(x.depthTexture).__webglTexture);else if(x.depthBuffer){let xe=x.depthTexture;if(ge.__boundDepthTexture!==xe){if(xe!==null&&Pe.has(xe)&&(x.width!==xe.image.width||x.height!==xe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Le.setupDepthRenderbuffer(x)}}let Se=x.texture;(Se.isData3DTexture||Se.isDataArrayTexture||Se.isCompressedArrayTexture)&&(ce=!0);let Te=Pe.get(x).__webglFramebuffer;x.isWebGLCubeRenderTarget?(Array.isArray(Te[P])?N=Te[P][F]:N=Te[P],re=!0):x.samples>0&&Le.useMultisampledRTT(x)===!1?N=Pe.get(x).__webglMultisampledFramebuffer:Array.isArray(Te)?N=Te[F]:N=Te,_.copy(x.viewport),A.copy(x.scissor),G=x.scissorTest}else _.copy(fe).multiplyScalar(Q).floor(),A.copy(_e).multiplyScalar(Q).floor(),G=Xe;if(be.bindFramebuffer(T.FRAMEBUFFER,N)&&k&&be.drawBuffers(x,N),be.viewport(_),be.scissor(A),be.setScissorTest(G),re){let ge=Pe.get(x.texture);T.framebufferTexture2D(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_CUBE_MAP_POSITIVE_X+P,ge.__webglTexture,F)}else if(ce){let ge=Pe.get(x.texture),Se=P||0;T.framebufferTextureLayer(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0,ge.__webglTexture,F||0,Se)}O=-1},this.readRenderTargetPixels=function(x,P,F,k,N,re,ce){if(!(x&&x.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let me=Pe.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&ce!==void 0&&(me=me[ce]),me){be.bindFramebuffer(T.FRAMEBUFFER,me);try{let ge=x.texture,Se=ge.format,Te=ge.type;if(!ot.textureFormatReadable(Se)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ot.textureTypeReadable(Te)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}P>=0&&P<=x.width-k&&F>=0&&F<=x.height-N&&T.readPixels(P,F,k,N,Re.convert(Se),Re.convert(Te),re)}finally{let ge=D!==null?Pe.get(D).__webglFramebuffer:null;be.bindFramebuffer(T.FRAMEBUFFER,ge)}}},this.readRenderTargetPixelsAsync=function(x,P,F,k,N,re,ce){return Co(this,null,function*(){if(!(x&&x.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let me=Pe.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&ce!==void 0&&(me=me[ce]),me){be.bindFramebuffer(T.FRAMEBUFFER,me);try{let ge=x.texture,Se=ge.format,Te=ge.type;if(!ot.textureFormatReadable(Se))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ot.textureTypeReadable(Te))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(P>=0&&P<=x.width-k&&F>=0&&F<=x.height-N){let xe=T.createBuffer();T.bindBuffer(T.PIXEL_PACK_BUFFER,xe),T.bufferData(T.PIXEL_PACK_BUFFER,re.byteLength,T.STREAM_READ),T.readPixels(P,F,k,N,Re.convert(Se),Re.convert(Te),0),T.flush();let Qe=T.fenceSync(T.SYNC_GPU_COMMANDS_COMPLETE,0);yield yS(T,Qe,4);try{T.bindBuffer(T.PIXEL_PACK_BUFFER,xe),T.getBufferSubData(T.PIXEL_PACK_BUFFER,0,re)}finally{T.deleteBuffer(xe),T.deleteSync(Qe)}return re}}finally{let ge=D!==null?Pe.get(D).__webglFramebuffer:null;be.bindFramebuffer(T.FRAMEBUFFER,ge)}}})},this.copyFramebufferToTexture=function(x,P=null,F=0){x.isTexture!==!0&&(mo("WebGLRenderer: copyFramebufferToTexture function signature has changed."),P=arguments[0]||null,x=arguments[1]);let k=Math.pow(2,-F),N=Math.floor(x.image.width*k),re=Math.floor(x.image.height*k),ce=P!==null?P.x:0,me=P!==null?P.y:0;Le.setTexture2D(x,0),T.copyTexSubImage2D(T.TEXTURE_2D,F,0,0,ce,me,N,re),be.unbindTexture()},this.copyTextureToTexture=function(x,P,F=null,k=null,N=0){x.isTexture!==!0&&(mo("WebGLRenderer: copyTextureToTexture function signature has changed."),k=arguments[0]||null,x=arguments[1],P=arguments[2],N=arguments[3]||0,F=null);let re,ce,me,ge,Se,Te;F!==null?(re=F.max.x-F.min.x,ce=F.max.y-F.min.y,me=F.min.x,ge=F.min.y):(re=x.image.width,ce=x.image.height,me=0,ge=0),k!==null?(Se=k.x,Te=k.y):(Se=0,Te=0);let xe=Re.convert(P.format),Qe=Re.convert(P.type);Le.setTexture2D(P,0),T.pixelStorei(T.UNPACK_FLIP_Y_WEBGL,P.flipY),T.pixelStorei(T.UNPACK_PREMULTIPLY_ALPHA_WEBGL,P.premultiplyAlpha),T.pixelStorei(T.UNPACK_ALIGNMENT,P.unpackAlignment);let gt=T.getParameter(T.UNPACK_ROW_LENGTH),vt=T.getParameter(T.UNPACK_IMAGE_HEIGHT),an=T.getParameter(T.UNPACK_SKIP_PIXELS),et=T.getParameter(T.UNPACK_SKIP_ROWS),Me=T.getParameter(T.UNPACK_SKIP_IMAGES),kt=x.isCompressedTexture?x.mipmaps[N]:x.image;T.pixelStorei(T.UNPACK_ROW_LENGTH,kt.width),T.pixelStorei(T.UNPACK_IMAGE_HEIGHT,kt.height),T.pixelStorei(T.UNPACK_SKIP_PIXELS,me),T.pixelStorei(T.UNPACK_SKIP_ROWS,ge),x.isDataTexture?T.texSubImage2D(T.TEXTURE_2D,N,Se,Te,re,ce,xe,Qe,kt.data):x.isCompressedTexture?T.compressedTexSubImage2D(T.TEXTURE_2D,N,Se,Te,kt.width,kt.height,xe,kt.data):T.texSubImage2D(T.TEXTURE_2D,N,Se,Te,re,ce,xe,Qe,kt),T.pixelStorei(T.UNPACK_ROW_LENGTH,gt),T.pixelStorei(T.UNPACK_IMAGE_HEIGHT,vt),T.pixelStorei(T.UNPACK_SKIP_PIXELS,an),T.pixelStorei(T.UNPACK_SKIP_ROWS,et),T.pixelStorei(T.UNPACK_SKIP_IMAGES,Me),N===0&&P.generateMipmaps&&T.generateMipmap(T.TEXTURE_2D),be.unbindTexture()},this.copyTextureToTexture3D=function(x,P,F=null,k=null,N=0){x.isTexture!==!0&&(mo("WebGLRenderer: copyTextureToTexture3D function signature has changed."),F=arguments[0]||null,k=arguments[1]||null,x=arguments[2],P=arguments[3],N=arguments[4]||0);let re,ce,me,ge,Se,Te,xe,Qe,gt,vt=x.isCompressedTexture?x.mipmaps[N]:x.image;F!==null?(re=F.max.x-F.min.x,ce=F.max.y-F.min.y,me=F.max.z-F.min.z,ge=F.min.x,Se=F.min.y,Te=F.min.z):(re=vt.width,ce=vt.height,me=vt.depth,ge=0,Se=0,Te=0),k!==null?(xe=k.x,Qe=k.y,gt=k.z):(xe=0,Qe=0,gt=0);let an=Re.convert(P.format),et=Re.convert(P.type),Me;if(P.isData3DTexture)Le.setTexture3D(P,0),Me=T.TEXTURE_3D;else if(P.isDataArrayTexture||P.isCompressedArrayTexture)Le.setTexture2DArray(P,0),Me=T.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}T.pixelStorei(T.UNPACK_FLIP_Y_WEBGL,P.flipY),T.pixelStorei(T.UNPACK_PREMULTIPLY_ALPHA_WEBGL,P.premultiplyAlpha),T.pixelStorei(T.UNPACK_ALIGNMENT,P.unpackAlignment);let kt=T.getParameter(T.UNPACK_ROW_LENGTH),tt=T.getParameter(T.UNPACK_IMAGE_HEIGHT),bn=T.getParameter(T.UNPACK_SKIP_PIXELS),Cr=T.getParameter(T.UNPACK_SKIP_ROWS),cn=T.getParameter(T.UNPACK_SKIP_IMAGES);T.pixelStorei(T.UNPACK_ROW_LENGTH,vt.width),T.pixelStorei(T.UNPACK_IMAGE_HEIGHT,vt.height),T.pixelStorei(T.UNPACK_SKIP_PIXELS,ge),T.pixelStorei(T.UNPACK_SKIP_ROWS,Se),T.pixelStorei(T.UNPACK_SKIP_IMAGES,Te),x.isDataTexture||x.isData3DTexture?T.texSubImage3D(Me,N,xe,Qe,gt,re,ce,me,an,et,vt.data):P.isCompressedArrayTexture?T.compressedTexSubImage3D(Me,N,xe,Qe,gt,re,ce,me,an,vt.data):T.texSubImage3D(Me,N,xe,Qe,gt,re,ce,me,an,et,vt),T.pixelStorei(T.UNPACK_ROW_LENGTH,kt),T.pixelStorei(T.UNPACK_IMAGE_HEIGHT,tt),T.pixelStorei(T.UNPACK_SKIP_PIXELS,bn),T.pixelStorei(T.UNPACK_SKIP_ROWS,Cr),T.pixelStorei(T.UNPACK_SKIP_IMAGES,cn),N===0&&P.generateMipmaps&&T.generateMipmap(Me),be.unbindTexture()},this.initRenderTarget=function(x){Pe.get(x).__webglFramebuffer===void 0&&Le.setupRenderTarget(x)},this.initTexture=function(x){x.isCubeTexture?Le.setTextureCube(x,0):x.isData3DTexture?Le.setTexture3D(x,0):x.isDataArrayTexture||x.isCompressedArrayTexture?Le.setTexture2DArray(x,0):Le.setTexture2D(x,0),be.unbindTexture()},this.resetState=function(){L=0,C=0,D=null,be.reset(),ze.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return yi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=e===vf?"display-p3":"srgb",t.unpackColorSpace=nt.workingColorSpace===Kc?"display-p3":"srgb"}};var Uc=class n{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new qe(e),this.near=t,this.far=i}clone(){return new n(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Vc=class extends ei{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Mr,this.environmentIntensity=1,this.environmentRotation=new Mr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}};var _o=class extends Hi{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new qe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Rv=new yt,Kh=new Cc,lc=new Ds,uc=new R,Bc=class extends ei{constructor(e=new Mn,t=new _o){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),lc.copy(i.boundingSphere),lc.applyMatrix4(r),lc.radius+=s,e.ray.intersectsSphere(lc)===!1)return;Rv.copy(r).invert(),Kh.copy(e.ray).applyMatrix4(Rv);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=i.index,d=i.attributes.position;if(l!==null){let h=Math.max(0,o.start),f=Math.min(l.count,o.start+o.count);for(let g=h,v=f;g<v;g++){let m=l.getX(g);uc.fromBufferAttribute(d,m),Nv(uc,m,c,r,e,t,this)}}else{let h=Math.max(0,o.start),f=Math.min(d.count,o.start+o.count);for(let g=h,v=f;g<v;g++)uc.fromBufferAttribute(d,g),Nv(uc,g,c,r,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}};function Nv(n,e,t,i,r,s,o){let a=Kh.distanceSqToPoint(n);if(a<t){let c=new R;Kh.closestPointToPoint(n,c),c.applyMatrix4(i);let l=r.ray.origin.distanceTo(c);if(l<r.near||l>r.far)return;s.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,object:o})}}var xo=class n extends Mn{constructor(e=[],t=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:r};let s=[],o=[];a(r),l(i),u(),this.setAttribute("position",new Kt(s,3)),this.setAttribute("normal",new Kt(s.slice(),3)),this.setAttribute("uv",new Kt(o,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function a(b){let M=new R,E=new R,L=new R;for(let C=0;C<t.length;C+=3)f(t[C+0],M),f(t[C+1],E),f(t[C+2],L),c(M,E,L,b)}function c(b,M,E,L){let C=L+1,D=[];for(let O=0;O<=C;O++){D[O]=[];let w=b.clone().lerp(E,O/C),_=M.clone().lerp(E,O/C),A=C-O;for(let G=0;G<=A;G++)G===0&&O===C?D[O][G]=w:D[O][G]=w.clone().lerp(_,G/A)}for(let O=0;O<C;O++)for(let w=0;w<2*(C-O)-1;w++){let _=Math.floor(w/2);w%2===0?(h(D[O][_+1]),h(D[O+1][_]),h(D[O][_])):(h(D[O][_+1]),h(D[O+1][_+1]),h(D[O+1][_]))}}function l(b){let M=new R;for(let E=0;E<s.length;E+=3)M.x=s[E+0],M.y=s[E+1],M.z=s[E+2],M.normalize().multiplyScalar(b),s[E+0]=M.x,s[E+1]=M.y,s[E+2]=M.z}function u(){let b=new R;for(let M=0;M<s.length;M+=3){b.x=s[M+0],b.y=s[M+1],b.z=s[M+2];let E=m(b)/2/Math.PI+.5,L=p(b)/Math.PI+.5;o.push(E,1-L)}g(),d()}function d(){for(let b=0;b<o.length;b+=6){let M=o[b+0],E=o[b+2],L=o[b+4],C=Math.max(M,E,L),D=Math.min(M,E,L);C>.9&&D<.1&&(M<.2&&(o[b+0]+=1),E<.2&&(o[b+2]+=1),L<.2&&(o[b+4]+=1))}}function h(b){s.push(b.x,b.y,b.z)}function f(b,M){let E=b*3;M.x=e[E+0],M.y=e[E+1],M.z=e[E+2]}function g(){let b=new R,M=new R,E=new R,L=new R,C=new He,D=new He,O=new He;for(let w=0,_=0;w<s.length;w+=9,_+=6){b.set(s[w+0],s[w+1],s[w+2]),M.set(s[w+3],s[w+4],s[w+5]),E.set(s[w+6],s[w+7],s[w+8]),C.set(o[_+0],o[_+1]),D.set(o[_+2],o[_+3]),O.set(o[_+4],o[_+5]),L.copy(b).add(M).add(E).divideScalar(3);let A=m(L);v(C,_+0,b,A),v(D,_+2,M,A),v(O,_+4,E,A)}}function v(b,M,E,L){L<0&&b.x===1&&(o[M]=b.x-1),E.x===0&&E.z===0&&(o[M]=L/2/Math.PI+.5)}function m(b){return Math.atan2(b.z,-b.x)}function p(b){return Math.atan2(-b.y,Math.sqrt(b.x*b.x+b.z*b.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.vertices,e.indices,e.radius,e.details)}};var zc=class n extends xo{constructor(e=1,t=0){let i=(1+Math.sqrt(5))/2,r=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}},Hc=class n extends xo{constructor(e=1,t=0){let i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],r=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,r,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}};var Gc=class n extends xo{constructor(e=1,t=0){let i=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],r=[2,1,0,0,3,2,1,3,0,2,3,1];super(i,r,e,t),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}},Wc=class n extends Mn{constructor(e=1,t=.4,i=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:r,arc:s},i=Math.floor(i),r=Math.floor(r);let o=[],a=[],c=[],l=[],u=new R,d=new R,h=new R;for(let f=0;f<=i;f++)for(let g=0;g<=r;g++){let v=g/r*s,m=f/i*Math.PI*2;d.x=(e+t*Math.cos(m))*Math.cos(v),d.y=(e+t*Math.cos(m))*Math.sin(v),d.z=t*Math.sin(m),a.push(d.x,d.y,d.z),u.x=e*Math.cos(v),u.y=e*Math.sin(v),h.subVectors(d,u).normalize(),c.push(h.x,h.y,h.z),l.push(g/r),l.push(f/i)}for(let f=1;f<=i;f++)for(let g=1;g<=r;g++){let v=(r+1)*f+g-1,m=(r+1)*(f-1)+g-1,p=(r+1)*(f-1)+g,b=(r+1)*f+g;o.push(v,m,b),o.push(m,p,b)}this.setIndex(o),this.setAttribute("position",new Kt(a,3)),this.setAttribute("normal",new Kt(c,3)),this.setAttribute("uv",new Kt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var jc=class extends Hi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new qe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new qe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Yv,this.normalScale=new He(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Mr,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};function dc(n,e,t){return!n||!t&&n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function hA(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}var As=class{constructor(e,t,i,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,r=t[i],s=t[i-1];n:{e:{let o;t:{i:if(!(e<r)){for(let a=i+2;;){if(r===void 0){if(e<s)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(s=r,r=t[++i],e<r)break e}o=t.length;break t}if(!(e>=s)){let a=t[1];e<a&&(i=2,s=a);for(let c=i-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===c)break;if(r=s,s=t[--i-1],e>=s)break e}o=i,i=0;break t}break n}for(;i<o;){let a=i+o>>>1;e<t[a]?o=a:i=a+1}if(r=t[i],s=t[i-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,s,r)}return this.interpolate_(i,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,r=this.valueSize,s=e*r;for(let o=0;o!==r;++o)t[o]=i[s+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Qh=class extends As{constructor(e,t,i,r){super(e,t,i,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:U0,endingEnd:U0}}intervalChanged_(e,t,i){let r=this.parameterPositions,s=e-2,o=e+1,a=r[s],c=r[o];if(a===void 0)switch(this.getSettings_().endingStart){case V0:s=e,a=2*t-i;break;case B0:s=r.length-2,a=t+r[s]-r[s+1];break;default:s=e,a=i}if(c===void 0)switch(this.getSettings_().endingEnd){case V0:o=e,c=2*i-t;break;case B0:o=1,c=i+r[1]-r[0];break;default:o=e-1,c=t}let l=(i-t)*.5,u=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-i),this._offsetPrev=s*u,this._offsetNext=o*u}interpolate_(e,t,i,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,u=this._offsetPrev,d=this._offsetNext,h=this._weightPrev,f=this._weightNext,g=(i-t)/(r-t),v=g*g,m=v*g,p=-h*m+2*h*v-h*g,b=(1+h)*m+(-1.5-2*h)*v+(-.5+h)*g+1,M=(-1-f)*m+(1.5+f)*v+.5*g,E=f*m-f*v;for(let L=0;L!==a;++L)s[L]=p*o[u+L]+b*o[l+L]+M*o[c+L]+E*o[d+L];return s}},ef=class extends As{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,u=(i-t)/(r-t),d=1-u;for(let h=0;h!==a;++h)s[h]=o[l+h]*d+o[c+h]*u;return s}},tf=class extends As{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e){return this.copySampleValue_(e-1)}},Un=class{constructor(e,t,i,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=dc(t,this.TimeBufferType),this.values=dc(i,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:dc(e.times,Array),values:dc(e.values,Array)};let r=e.getInterpolation();r!==e.DefaultInterpolation&&(i.interpolation=r)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new tf(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new ef(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Qh(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case yc:t=this.InterpolantFactoryMethodDiscrete;break;case Oh:t=this.InterpolantFactoryMethodLinear;break;case Dd:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return yc;case this.InterpolantFactoryMethodLinear:return Oh;case this.InterpolantFactoryMethodSmooth:return Dd}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]*=e}return this}trim(e,t){let i=this.times,r=i.length,s=0,o=r-1;for(;s!==r&&i[s]<e;)++s;for(;o!==-1&&i[o]>t;)--o;if(++o,s!==0||o!==r){s>=o&&(o=Math.max(o,1),s=o-1);let a=this.getValueSize();this.times=i.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,r=this.values,s=i.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){let c=i[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(r!==void 0&&hA(r))for(let a=0,c=r.length;a!==c;++a){let l=r[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),r=this.getInterpolation()===Dd,s=e.length-1,o=1;for(let a=1;a<s;++a){let c=!1,l=e[a],u=e[a+1];if(l!==u&&(a!==1||l!==e[0]))if(r)c=!0;else{let d=a*i,h=d-i,f=d+i;for(let g=0;g!==i;++g){let v=t[d+g];if(v!==t[h+g]||v!==t[f+g]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];let d=a*i,h=o*i;for(let f=0;f!==i;++f)t[h+f]=t[d+f]}++o}}if(s>0){e[o]=e[s];for(let a=s*i,c=o*i,l=0;l!==i;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,r=new i(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}};Un.prototype.TimeBufferType=Float32Array;Un.prototype.ValueBufferType=Float32Array;Un.prototype.DefaultInterpolation=Oh;var wr=class extends Un{constructor(e,t,i){super(e,t,i)}};wr.prototype.ValueTypeName="bool";wr.prototype.ValueBufferType=Array;wr.prototype.DefaultInterpolation=yc;wr.prototype.InterpolantFactoryMethodLinear=void 0;wr.prototype.InterpolantFactoryMethodSmooth=void 0;var nf=class extends Un{};nf.prototype.ValueTypeName="color";var rf=class extends Un{};rf.prototype.ValueTypeName="number";var sf=class extends As{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(i-t)/(r-t),l=e*a;for(let u=l+a;l!==u;l+=4)zi.slerpFlat(s,0,o,l-a,o,l,c);return s}},$c=class extends Un{InterpolantFactoryMethodLinear(e){return new sf(this.times,this.values,this.getValueSize(),e)}};$c.prototype.ValueTypeName="quaternion";$c.prototype.InterpolantFactoryMethodSmooth=void 0;var Er=class extends Un{constructor(e,t,i){super(e,t,i)}};Er.prototype.ValueTypeName="string";Er.prototype.ValueBufferType=Array;Er.prototype.DefaultInterpolation=yc;Er.prototype.InterpolantFactoryMethodLinear=void 0;Er.prototype.InterpolantFactoryMethodSmooth=void 0;var of=class extends Un{};of.prototype.ValueTypeName="vector";var Mo=class extends ei{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new qe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}};var eh=new yt,Ov=new R,Lv=new R,qc=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new He(512,512),this.map=null,this.mapPass=null,this.matrix=new yt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new yo,this._frameExtents=new He(1,1),this._viewportCount=1,this._viewports=[new ht(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,i=this.matrix;Ov.setFromMatrixPosition(e.matrixWorld),t.position.copy(Ov),Lv.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Lv),t.updateMatrixWorld(),eh.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(eh),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(eh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};var Fv=new yt,fo=new R,th=new R,af=class extends qc{constructor(){super(new Yt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new He(4,2),this._viewportCount=6,this._viewports=[new ht(2,1,1,1),new ht(0,1,1,1),new ht(3,1,1,1),new ht(1,1,1,1),new ht(3,0,1,1),new ht(1,0,1,1)],this._cubeDirections=[new R(1,0,0),new R(-1,0,0),new R(0,0,1),new R(0,0,-1),new R(0,1,0),new R(0,-1,0)],this._cubeUps=[new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,0,1),new R(0,0,-1)]}updateMatrices(e,t=0){let i=this.camera,r=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),fo.setFromMatrixPosition(e.matrixWorld),i.position.copy(fo),th.copy(i.position),th.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(th),i.updateMatrixWorld(),r.makeTranslation(-fo.x,-fo.y,-fo.z),Fv.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Fv)}},Xc=class extends Mo{constructor(e,t,i=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new af}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},cf=class extends qc{constructor(){super(new Oc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Yc=class extends Mo{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ei.DEFAULT_UP),this.updateMatrix(),this.target=new ei,this.shadow=new cf}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},Zc=class extends Mo{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}};var _f="\\[\\]\\.:\\/",fA=new RegExp("["+_f+"]","g"),xf="[^"+_f+"]",pA="[^"+_f.replace("\\.","")+"]",mA=/((?:WC+[\/:])*)/.source.replace("WC",xf),gA=/(WCOD+)?/.source.replace("WCOD",pA),vA=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",xf),yA=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",xf),_A=new RegExp("^"+mA+gA+vA+yA+"$"),xA=["material","materials","bones","map"],lf=class{constructor(e,t,i){let r=i||xt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,r=this._bindings[i];r!==void 0&&r.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=i.length;r!==s;++r)i[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},xt=(()=>{class n{constructor(t,i,r){this.path=i,this.parsedPath=r||n.parseTrackName(i),this.node=n.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,i,r){return t&&t.isAnimationObjectGroup?new n.Composite(t,i,r):new n(t,i,r)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(fA,"")}static parseTrackName(t){let i=_A.exec(t);if(i===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let r={nodeName:i[2],objectName:i[3],objectIndex:i[4],propertyName:i[5],propertyIndex:i[6]},s=r.nodeName&&r.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let o=r.nodeName.substring(s+1);xA.indexOf(o)!==-1&&(r.nodeName=r.nodeName.substring(0,s),r.objectName=o)}if(r.propertyName===null||r.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return r}static findNode(t,i){if(i===void 0||i===""||i==="."||i===-1||i===t.name||i===t.uuid)return t;if(t.skeleton){let r=t.skeleton.getBoneByName(i);if(r!==void 0)return r}if(t.children){let r=function(o){for(let a=0;a<o.length;a++){let c=o[a];if(c.name===i||c.uuid===i)return c;let l=r(c.children);if(l)return l}return null},s=r(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,i){t[i]=this.targetObject[this.propertyName]}_getValue_array(t,i){let r=this.resolvedProperty;for(let s=0,o=r.length;s!==o;++s)t[i++]=r[s]}_getValue_arrayElement(t,i){t[i]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,i){this.resolvedProperty.toArray(t,i)}_setValue_direct(t,i){this.targetObject[this.propertyName]=t[i]}_setValue_direct_setNeedsUpdate(t,i){this.targetObject[this.propertyName]=t[i],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,i){this.targetObject[this.propertyName]=t[i],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,i){let r=this.resolvedProperty;for(let s=0,o=r.length;s!==o;++s)r[s]=t[i++]}_setValue_array_setNeedsUpdate(t,i){let r=this.resolvedProperty;for(let s=0,o=r.length;s!==o;++s)r[s]=t[i++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,i){let r=this.resolvedProperty;for(let s=0,o=r.length;s!==o;++s)r[s]=t[i++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,i){this.resolvedProperty[this.propertyIndex]=t[i]}_setValue_arrayElement_setNeedsUpdate(t,i){this.resolvedProperty[this.propertyIndex]=t[i],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,i){this.resolvedProperty[this.propertyIndex]=t[i],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,i){this.resolvedProperty.fromArray(t,i)}_setValue_fromArray_setNeedsUpdate(t,i){this.resolvedProperty.fromArray(t,i),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,i){this.resolvedProperty.fromArray(t,i),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,i){this.bind(),this.getValue(t,i)}_setValue_unbound(t,i){this.bind(),this.setValue(t,i)}bind(){let t=this.node,i=this.parsedPath,r=i.objectName,s=i.propertyName,o=i.propertyIndex;if(t||(t=n.findNode(this.rootNode,i.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(r){let u=i.objectIndex;switch(r){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let d=0;d<t.length;d++)if(t[d].name===u){u=d;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[r]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[r]}if(u!==void 0){if(t[u]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[u]}}let a=t[s];if(a===void 0){let u=i.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+u+"."+s+" but it wasn't found.",t);return}let c=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?c=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(c=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(o!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[o]!==void 0&&(o=t.morphTargetDictionary[o])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=o}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][c]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}return n.Composite=lf,n})();xt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};xt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};xt.prototype.GetterByBindingType=[xt.prototype._getValue_direct,xt.prototype._getValue_array,xt.prototype._getValue_arrayElement,xt.prototype._getValue_toArray];xt.prototype.SetterByBindingTypeAndVersioning=[[xt.prototype._setValue_direct,xt.prototype._setValue_direct_setNeedsUpdate,xt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[xt.prototype._setValue_array,xt.prototype._setValue_array_setNeedsUpdate,xt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[xt.prototype._setValue_arrayElement,xt.prototype._setValue_arrayElement_setNeedsUpdate,xt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[xt.prototype._setValue_fromArray,xt.prototype._setValue_fromArray_setNeedsUpdate,xt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var FR=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:uf}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=uf);var bA=["canvas"],sy=(()=>{class n{constructor(){this.zone=ke(rt),this.canvasRef=Ut.required("canvas"),this.shards=[],this.rafId=0,this.mx=0,this.my=0,this.scrollY=0,this.listeners=[]}ngAfterViewInit(){this.zone.runOutsideAngular(()=>this.init())}init(){let t=this.canvasRef().nativeElement;this.renderer=new kc({canvas:t,antialias:!0,alpha:!0}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,1.5)),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.setClearColor(0,0),this.scene=new Vc,this.scene.fog=new Uc(657672,8,30),this.camera=new Yt(50,window.innerWidth/window.innerHeight,.1,100),this.camera.position.z=10,this.scene.add(new Zc(16777215,.25));let i=new Yc(14723437,1.2);i.position.set(5,4,6),this.scene.add(i);let r=new Xc(13911850,2.5,25);r.position.set(-6,-2,4),this.scene.add(r),this.group=new Fi,this.scene.add(this.group);let s=[new Hc(.4,0),new zc(.35,0),new Wc(.35,.05,8,24),new br(.7,.1,.5),new Gc(.45,0)];for(let v=0;v<24;v++){let m=s[v%s.length],p=new jc({color:v%3===0?13911850:v%3===1?14723437:16117734,metalness:.7,roughness:.3,flatShading:!0,transparent:!0,opacity:.85}),b=new fn(m,p);b.position.set((Math.random()-.5)*20,(Math.random()-.5)*14,(Math.random()-.5)*12-3),b.rotation.set(Math.random()*Math.PI,Math.random()*Math.PI,Math.random()*Math.PI),b.userData={rx:(Math.random()-.5)*.003,ry:(Math.random()-.5)*.004,rz:(Math.random()-.5)*.002,baseY:b.position.y,phase:Math.random()*Math.PI*2,scale:.6+Math.random()*.8},b.scale.setScalar(b.userData.scale),this.group.add(b),this.shards.push(b)}let o=new Mn,a=400,c=new Float32Array(a*3);for(let v=0;v<a;v++)c[v*3]=(Math.random()-.5)*30,c[v*3+1]=(Math.random()-.5)*20,c[v*3+2]=(Math.random()-.5)*15;o.setAttribute("position",new on(c,3));let l=new _o({color:14723437,size:.03,transparent:!0,opacity:.6,sizeAttenuation:!0});this.dust=new Bc(o,l),this.scene.add(this.dust);let u=v=>{this.mx=v.clientX/window.innerWidth-.5,this.my=v.clientY/window.innerHeight-.5},d=()=>{this.scrollY=window.scrollY},h=()=>{!this.camera||!this.renderer||(this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(window.innerWidth,window.innerHeight))};window.addEventListener("mousemove",u),window.addEventListener("scroll",d,{passive:!0}),window.addEventListener("resize",h),this.listeners.push(()=>window.removeEventListener("mousemove",u),()=>window.removeEventListener("scroll",d),()=>window.removeEventListener("resize",h));let f=performance.now(),g=()=>{if(!this.renderer||!this.scene||!this.camera||!this.group)return;let v=(performance.now()-f)/1e3;this.group.rotation.y=this.scrollY*4e-4,this.group.position.y=this.scrollY*.001,this.camera.position.x+=(this.mx*1.5-this.camera.position.x)*.04,this.camera.position.y+=(-this.my*1-this.camera.position.y)*.04,this.camera.lookAt(0,0,0),this.shards.forEach(m=>{m.rotation.x+=m.userData.rx,m.rotation.y+=m.userData.ry,m.rotation.z+=m.userData.rz,m.position.y=m.userData.baseY+Math.sin(v*.5+m.userData.phase)*.3}),this.dust&&(this.dust.rotation.y=v*.02),this.renderer.render(this.scene,this.camera),this.rafId=requestAnimationFrame(g)};this.rafId=requestAnimationFrame(g)}ngOnDestroy(){this.rafId&&cancelAnimationFrame(this.rafId),this.listeners.forEach(t=>t()),this.shards.forEach(t=>{t.geometry.dispose(),t.material.dispose()}),this.dust?.geometry.dispose(),this.dust?.material?.dispose(),this.renderer?.dispose()}static{this.\u0275fac=function(i){return new(i||n)}}static{this.\u0275cmp=Ct({type:n,selectors:[["app-three-scene"]],viewQuery:function(i,r){i&1&&Bt(r.canvasRef,bA,5),i&2&&Jn()},standalone:!0,features:[Dt],decls:2,vars:0,consts:[["canvas",""],[1,"bg3d"]],template:function(i,r){i&1&&Ce(0,"canvas",1,0)},styles:["[_nghost-%COMP%]{display:contents}.bg3d[_ngcontent-%COMP%]{position:fixed;inset:0;z-index:0;pointer-events:none;opacity:.55}"],changeDetection:0})}}return n})();var wA=["heroVideo"],EA=["line1"],SA=["line2"],CA=["scriptLine"],DA=["catchphrase"],oy=(()=>{class n{constructor(){this.heroVideo=Ut.required("heroVideo"),this.line1=Ut.required("line1"),this.line2=Ut.required("line2"),this.scriptLine=Ut.required("scriptLine"),this.catchphrase=Ut.required("catchphrase")}ngAfterViewInit(){let t=this.heroVideo().nativeElement;t.muted=!0,t.autoplay=!1,t.pause(),t.load();let i=!1,r=!1,s=()=>{!i||!r||(t.currentTime=0,t.play().catch(()=>{}))};t.readyState>=2?i=!0:t.addEventListener("loadeddata",()=>{i=!0,s()},{once:!0}),document.querySelector("app-loader .loader")?.classList.contains("done")?(r=!0,s()):window.addEventListener("loader:done",()=>{r=!0,s()},{once:!0}),this.initTitleReveal()}initTitleReveal(){let t=[this.scriptLine().nativeElement,this.line1().nativeElement,this.line2().nativeElement,this.catchphrase().nativeElement];t.forEach((r,s)=>{r.style.transform="translateY(110%) rotate(2deg)",r.style.display="inline-block",r.style.opacity="0",r.style.transition=`transform 1.2s ${s*.15+2.8}s var(--ease), opacity 1.2s ${s*.15+2.8}s var(--ease)`});let i=()=>{setTimeout(()=>t.forEach(r=>{r.style.transform="translateY(0) rotate(0)",r.style.opacity="1"}),2400)};document.readyState==="complete"?i():window.addEventListener("load",i,{once:!0})}static{this.\u0275fac=function(i){return new(i||n)}}static{this.\u0275cmp=Ct({type:n,selectors:[["app-hero"]],viewQuery:function(i,r){i&1&&(Bt(r.heroVideo,wA,5),Bt(r.line1,EA,5),Bt(r.line2,SA,5),Bt(r.scriptLine,CA,5),Bt(r.catchphrase,DA,5)),i&2&&Jn(5)},standalone:!0,features:[Dt],decls:54,vars:0,consts:[["heroVideo",""],["scriptLine",""],["line1",""],["line2",""],["catchphrase",""],["id","hero",1,"hero"],["autoplay","","muted","","playsinline","","aria-hidden","true",1,"hero-bg"],["src","assets/logos/studio-bg-final.mp4","type","video/mp4"],[1,"hero-overlay"],[1,"hero-content"],[1,"hero-intro-script"],[1,"hero-title"],[1,"line"],[1,"accent"],[1,"hero-mid"],[1,"hero-catchphrase"],[1,"italic"],[1,"hero-bottom"],[1,"hero-bottom-left"],[1,"hero-desc"],[1,"hero-education-box"],[1,"education-header"],[1,"hero-background"],[1,"bg-item"],[1,"bg-label"],[1,"bg-title"],[1,"hero-scroll"],["width","12","height","20","viewBox","0 0 12 20","fill","none"],["d","M6 1V19M6 19L1 14M6 19L11 14","stroke","currentColor"]],template:function(i,r){i&1&&(V(0,"section",5)(1,"video",6,0),Ce(3,"source",7),z(),Ce(4,"div",8),V(5,"div",9)(6,"div",10)(7,"span",null,1),X(9,"Hey I'm"),z()(),V(10,"h1",11)(11,"span",12)(12,"span",null,2),X(14,"Rishabh"),z()(),V(15,"span",12)(16,"span",13,3),X(18,"Sahu"),z()()(),V(19,"div",14)(20,"p",15,4),X(22," Frames that "),V(23,"span",16),X(24,"linger"),z(),X(25," \u2014 stories that "),V(26,"span",13),X(27,"cut."),z()()(),V(28,"div",17)(29,"div",18)(30,"p",19)(31,"b"),X(32,"Visual Artist | Editor | Cinematographer"),z(),Ce(33,"br"),X(34," Bringing 3+ years of hands-on experience in editing, cinematography, VFX, and colour grading, I've worked on many DVCs, lifestyle reels, and travel content for leading brands, integrating AI to elevate both efficiency and creative output. "),z(),V(35,"div",20)(36,"span",21),X(37,"Education"),z(),V(38,"div",22)(39,"div",23)(40,"span",24),X(41,"2020 \u2014 2022"),z(),V(42,"div",25),X(43,"Bachelor of arts in multimedia and mass communication \u2014 St. Andrew's College"),z()(),V(44,"div",23)(45,"span",24),X(46,"2021 \u2014 2022"),z(),V(47,"div",25),X(48,"Filmmaking Diploma \u2014 FX School"),z()()()()(),V(49,"div",26)(50,"span"),X(51,"Scroll"),z(),ir(),V(52,"svg",27),Ce(53,"path",28),z()()()()())},styles:['[_nghost-%COMP%]{display:block}.hero[_ngcontent-%COMP%]{min-height:100vh;position:relative;z-index:1;display:flex;align-items:flex-end;padding:7rem 2.5rem 3rem;overflow:hidden}.hero-bg[_ngcontent-%COMP%]{position:absolute;inset:0;width:100%;height:100%;object-fit:contain;object-position:center top;transform:scale(.88) translate(8%,4%);transform-origin:center top;z-index:0}.hero-overlay[_ngcontent-%COMP%]{position:absolute;inset:0;z-index:2;background:linear-gradient(180deg,#0a09084d,#0a09081a 40%,#0a0908e6);pointer-events:none}.hero-content[_ngcontent-%COMP%]{position:relative;z-index:4;width:100%;max-width:1600px;margin:0 auto}.hero-kicker[_ngcontent-%COMP%]{display:flex;align-items:center;gap:1rem;margin-bottom:4rem;font-family:JetBrains Mono,monospace;font-size:11px;color:#fff;letter-spacing:.4em;text-transform:uppercase}.hero-kicker[_ngcontent-%COMP%]   .accent[_ngcontent-%COMP%]{color:var(--ink)}.hero-kicker[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%]{width:6px;height:6px;border-radius:50%;background:var(--accent);animation:_ngcontent-%COMP%_pulse 2s ease-in-out infinite}@keyframes _ngcontent-%COMP%_pulse{0%,to{opacity:1}50%{opacity:.3}}.hero-intro-script[_ngcontent-%COMP%]{font-family:Allison,cursive;font-size:clamp(3rem,8vw,5.5rem);color:var(--amber);line-height:1;margin-bottom:-1.5rem;margin-left:-.5rem;position:relative;z-index:5;transform-origin:left bottom;rotate:-2deg}.hero-title[_ngcontent-%COMP%]{font-family:Fraunces,serif;font-weight:700;font-size:clamp(3rem,10.5vw,9rem);line-height:.85;letter-spacing:-.06em;text-transform:uppercase;margin-left:-.05em}.hero-title[_ngcontent-%COMP%]   .line[_ngcontent-%COMP%]{display:block;overflow:visible}.hero-title[_ngcontent-%COMP%]   .line[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]{display:inline-block}.hero-title[_ngcontent-%COMP%]   .accent[_ngcontent-%COMP%]{color:var(--ink);-webkit-text-stroke:1px var(--dim);color:transparent}.hero-mid[_ngcontent-%COMP%]{margin-top:2rem;max-width:800px}.hero-catchphrase[_ngcontent-%COMP%]{font-size:clamp(1rem,2.5vw,2rem);line-height:1.2;color:var(--dim);font-weight:300;letter-spacing:-.02em}.hero-catchphrase[_ngcontent-%COMP%]   .italic[_ngcontent-%COMP%]{font-style:italic;color:var(--amber)}.hero-catchphrase[_ngcontent-%COMP%]   .accent[_ngcontent-%COMP%]{color:var(--accent);font-style:italic}.hero-bottom[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:flex-end;margin-top:2rem;gap:3rem;flex-wrap:wrap}.hero-bottom-left[_ngcontent-%COMP%]{flex:1;max-width:600px}.hero-desc[_ngcontent-%COMP%]{font-size:clamp(1rem,1.5vw,1.25rem);line-height:1.6;color:var(--dim);margin-bottom:3.5rem}.hero-desc[_ngcontent-%COMP%]   b[_ngcontent-%COMP%]{color:var(--ink);font-weight:500}.hero-education-box[_ngcontent-%COMP%]{background:#f5efe608;backdrop-filter:blur(20px);border:1px solid rgba(245,239,230,.08);border-radius:12px;padding:1.5rem 2rem;max-width:580px;position:relative;overflow:hidden}.hero-education-box[_ngcontent-%COMP%]:before{content:"";position:absolute;inset:0;background:linear-gradient(135deg,rgba(255,255,255,.03) 0%,transparent 100%);pointer-events:none}.education-header[_ngcontent-%COMP%]{display:block;font-family:JetBrains Mono,monospace;font-size:10px;letter-spacing:.3em;text-transform:uppercase;color:var(--dim);margin-bottom:1.5rem;border-bottom:1px solid rgba(255,255,255,.05);padding-bottom:.75rem}.hero-background[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:1.5rem}.bg-item[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:.25rem}.bg-label[_ngcontent-%COMP%]{font-family:JetBrains Mono,monospace;font-size:8px;letter-spacing:.2em;text-transform:uppercase;color:var(--amber);opacity:.8}.bg-title[_ngcontent-%COMP%]{font-family:Fraunces,serif;font-size:clamp(.9rem,1.2vw,1.05rem);font-weight:300;color:var(--ink);line-height:1.4;letter-spacing:-.01em}.hero-scroll[_ngcontent-%COMP%]{display:flex;align-items:center;gap:1rem;font-family:JetBrains Mono,monospace;font-size:10px;letter-spacing:.3em;text-transform:uppercase;color:var(--dim)}.hero-scroll[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_scrollDown 2s ease-in-out infinite}@keyframes _ngcontent-%COMP%_scrollDown{0%,to{transform:translateY(0);opacity:1}50%{transform:translateY(8px);opacity:.4}}@media (max-width: 900px){.hero[_ngcontent-%COMP%]{padding:6rem 1.25rem 3rem;align-items:center;text-align:center}.hero-content[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center}.hero-kicker[_ngcontent-%COMP%]{justify-content:center;margin-bottom:2rem}.hero-intro-script[_ngcontent-%COMP%]{font-size:2.2rem;margin-bottom:2rem;rotate:0deg;margin-left:0}.hero-title[_ngcontent-%COMP%]{font-size:clamp(2.8rem,15vw,4.5rem);line-height:.9}.hero-mid[_ngcontent-%COMP%]{text-align:center;width:100%}.hero-catchphrase[_ngcontent-%COMP%]{font-size:1.25rem;margin-top:1.5rem;text-align:center}.hero-bottom[_ngcontent-%COMP%]{margin-top:1.5rem;flex-direction:column;align-items:center;justify-content:center}.hero-bottom-left[_ngcontent-%COMP%]{width:100%;display:flex;flex-direction:column;align-items:center}.hero-desc[_ngcontent-%COMP%]{text-align:center;margin-bottom:3rem}.hero-education-box[_ngcontent-%COMP%]{margin:0 auto;text-align:center;width:100%;padding:1.5rem}.education-header[_ngcontent-%COMP%]{margin-bottom:1.5rem}.hero-background[_ngcontent-%COMP%]{align-items:center;gap:1.5rem}}'],changeDetection:0})}}return n})();var TA=["timeline"],AA=["playhead"],IA=()=>[0,1,2,3,4,5,6,7,8,9];function PA(n,e){if(n&1&&(V(0,"div",32),X(1),z()),n&2){let t=e.$implicit;ye(),tn(" 00:0",t,":00:00 ")}}function RA(n,e){if(n&1){let t=ci();V(0,"div",39),$t("mouseenter",function(){let r=Pn(t).$implicit,s=en(2);return Rn(s.activeSkill.set(r))}),V(1,"div",40)(2,"div",41),X(3),z(),Ce(4,"div",42),z()()}if(n&2){let t=e.$implicit,i=en(2);or("width",t.width)("flex","0 0 "+t.width)("margin-left",t.marginLeft||"0"),Vt("active",i.activeSkill()===t),ye(3),lt(t.title)}}function NA(n,e){if(n&1&&(V(0,"div",33)(1,"div",34)(2,"div",35),X(3),z(),V(4,"div",36)(5,"span"),X(6,"M"),z(),V(7,"span"),X(8,"S"),z()()(),V(9,"div",37),yn(10,RA,5,9,"div",38),z()()),n&2){let t=e.$implicit;ye(3),lt(t.id),ye(6),or("justify-content",t.justifyContent||"flex-start")("gap",t.gap||"1rem"),ye(),jt("ngForOf",t.skills)}}function OA(n,e){if(n&1&&(V(0,"span",45),X(1),z()),n&2){let t=e.$implicit;ye(),lt(t)}}function LA(n,e){if(n&1&&(V(0,"div",43)(1,"div",29),X(2,"Clip Toolkit:"),z(),yn(3,OA,2,1,"span",44),z()),n&2){let t,i=en();ye(3),jt("ngForOf",(t=i.activeSkill())==null?null:t.tools)}}function FA(n,e){if(n&1&&Ce(0,"img",46),n&2){let t=e.$implicit;jt("src",t.icon,Yn)("alt",t.name)("title",t.name)}}var ay=(()=>{class n{constructor(){this.zone=ke(rt),this.timeline=Ut.required("timeline"),this.playhead=Ut.required("playhead"),this.skills=ar,this.activeSkill=Rt(null),this.displayTools=[{name:"After Effects",icon:"assets/logos/ae.png"},{name:"Premiere Pro",icon:"assets/logos/pr.png"},{name:"Photoshop",icon:"assets/logos/ps.png"},{name:"DaVinci Resolve",icon:"assets/logos/dr.png"}],this.tracks=[{id:"V1 Visuals",justifyContent:"center",gap:"1.5rem",skills:[St(_t({},ar[1]),{tools:["Premiere Pro","DaVinci Resolve","After Effects","Photoshop"],width:"220px"}),St(_t({},ar[2]),{title:"VFX",tools:["After Effects","Mocha"],width:"200px"})]},{id:"V2 Post",justifyContent:"flex-start",gap:"8px",skills:[St(_t({},ar[0]),{tools:["Sony FX3","Sony A7S III"],width:"280px"}),St(_t({},ar[3]),{tools:["DaVinci Resolve","Lightroom"],width:"160px"}),St(_t({},ar[4]),{width:"190px"})]}]}ngAfterViewInit(){this.zone.runOutsideAngular(()=>{let t=this.timeline().nativeElement,i=this.playhead().nativeElement,r=s=>{let o=t.getBoundingClientRect(),a=s.clientX-o.left;i.style.transform=`translate3d(${a}px, 0, 0)`};t.addEventListener("mousemove",r),this.listener=()=>t.removeEventListener("mousemove",r)})}ngOnDestroy(){this.listener?.()}static{this.\u0275fac=function(i){return new(i||n)}}static{this.\u0275cmp=Ct({type:n,selectors:[["app-skills"]],viewQuery:function(i,r){i&1&&(Bt(r.timeline,TA,5),Bt(r.playhead,AA,5)),i&2&&Jn(2)},standalone:!0,features:[Dt],decls:45,vars:11,consts:[["timeline",""],["playhead",""],["id","skills",1,"craft"],[1,"section-head"],[1,"section-num"],[1,"section-title"],[1,"section-num","end"],[1,"nle-layout"],[1,"nle-timeline",3,"mouseleave"],[1,"playhead"],[1,"timeline-ruler"],["class","ruler-mark",4,"ngFor","ngForOf"],[1,"timeline-ruler-spacer",2,"height","1px","background","rgba(245, 239, 230, 0.05)"],[1,"timeline-tracks"],["class","track-row",4,"ngFor","ngForOf"],[1,"nle-monitor"],[1,"monitor-screen"],[1,"monitor-glass"],[1,"monitor-overlay"],[1,"timecode"],[1,"rec-dot"],[1,"monitor-content"],[1,"content-header"],[1,"type-tag"],[1,"monitor-title"],[1,"monitor-desc"],[1,"monitor-footer"],["class","monitor-tools",4,"ngIf"],[1,"master-tools"],[1,"tool-label"],[1,"master-icons"],[3,"src","alt","title",4,"ngFor","ngForOf"],[1,"ruler-mark"],[1,"track-row"],[1,"track-header"],[1,"track-id"],[1,"track-controls"],[1,"track-content"],["class","clip",3,"width","flex","marginLeft","active","mouseenter",4,"ngFor","ngForOf"],[1,"clip",3,"mouseenter"],[1,"clip-inner"],[1,"clip-label"],[1,"clip-wave"],[1,"monitor-tools"],["class","tool-tag",4,"ngFor","ngForOf"],[1,"tool-tag"],[3,"src","alt","title"]],template:function(i,r){if(i&1){let s=ci();V(0,"section",2)(1,"div",3)(2,"div")(3,"div",4),X(4,"\u2014 01 / Skills"),z(),V(5,"h2",5),X(6,"Skills in "),V(7,"em"),X(8,"nutshell."),z()()(),V(9,"div",6),X(10,"Six years"),Ce(11,"br"),X(12,"hands-on"),z()(),V(13,"div",7)(14,"div",8,0),$t("mouseleave",function(){return Pn(s),Rn(r.activeSkill.set(null))}),Ce(16,"div",9,1),V(18,"div",10),yn(19,PA,2,1,"div",11),z(),Ce(20,"div",12),V(21,"div",13),yn(22,NA,11,6,"div",14),z()(),V(23,"div",15)(24,"div",16),Ce(25,"div",17),V(26,"div",18)(27,"div",19),X(28),z(),Ce(29,"div",20),z(),V(30,"div",21)(31,"div",22)(32,"span",23),X(33),z(),V(34,"h3",24),X(35),z()(),V(36,"p",25),X(37),z(),V(38,"div",26),yn(39,LA,4,1,"div",27),V(40,"div",28)(41,"div",29),X(42,"Master Gear:"),z(),V(43,"div",30),yn(44,FA,1,3,"img",31),z()()()()()()()()}if(i&2){let s,o,a;ye(19),jt("ngForOf",Jg(10,IA)),ye(3),jt("ngForOf",r.tracks),ye(6),tn("00:00:",r.activeSkill()&&(s=(s=r.activeSkill())==null||s.num==null||(s=s.num.split("/"))==null||s[1]==null?null:s[1].trim())!==null&&s!==void 0?s:"00",":24"),ye(2),Vt("active",r.activeSkill()),ye(3),lt(r.activeSkill()?"Source":"No Signal"),ye(2),lt((o=(o=r.activeSkill())==null?null:o.title)!==null&&o!==void 0?o:"Select a clip"),ye(2),lt(r.activeSkill()?(a=r.activeSkill())==null?null:a.desc:"Hover over the timeline tracks to preview cinematic skills and specialized toolkits."),ye(2),jt("ngIf",r.activeSkill()),ye(5),jt("ngForOf",r.displayTools)}},dependencies:[no,p0,m0],styles:['[_nghost-%COMP%]{display:block}.craft[_ngcontent-%COMP%]{background:var(--bg)}.section-head[_ngcontent-%COMP%]   .end[_ngcontent-%COMP%]{text-align:right}.section-head[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin-top:1rem}.nle-layout[_ngcontent-%COMP%]{display:flex;gap:2rem;align-items:stretch;margin-bottom:4rem}.nle-monitor[_ngcontent-%COMP%]{position:relative;width:450px;flex-shrink:0;padding:1px;background:linear-gradient(135deg,rgba(245,239,230,.1) 0%,transparent 100%);border-radius:12px;overflow:hidden;display:flex;flex-direction:column}.monitor-screen[_ngcontent-%COMP%]{background:#0d0c0b;border-radius:11px;min-height:180px;flex:1;padding:2.5rem;position:relative;display:flex;flex-direction:column;justify-content:center;overflow:hidden}.monitor-glass[_ngcontent-%COMP%]{position:absolute;inset:0;background:radial-gradient(circle at 70% 30%,rgba(0,255,255,.03) 0%,transparent 50%);border-radius:inherit;pointer-events:none}.monitor-overlay[_ngcontent-%COMP%]{position:absolute;top:1.5rem;left:1.5rem;right:1.5rem;display:flex;justify-content:space-between;align-items:center;font-family:JetBrains Mono,monospace;font-size:11px;letter-spacing:.1em;color:var(--dim)}.rec-dot[_ngcontent-%COMP%]{width:8px;height:8px;background:var(--accent);border-radius:50%;box-shadow:0 0 10px var(--accent)}.monitor-content[_ngcontent-%COMP%]{opacity:.3;transition:all .5s var(--ease);transform:translateY(10px)}.monitor-content.active[_ngcontent-%COMP%]{opacity:1;transform:translateY(0)}.content-header[_ngcontent-%COMP%]{margin-bottom:1.5rem}.content-header[_ngcontent-%COMP%]   .type-tag[_ngcontent-%COMP%]{font-family:JetBrains Mono,monospace;font-size:10px;text-transform:uppercase;color:var(--amber);margin-bottom:.5rem;display:block}.monitor-title[_ngcontent-%COMP%]{font-family:Fraunces,serif;font-size:clamp(1.8rem,3.5vw,2.8rem);font-weight:300;letter-spacing:-.02em}.monitor-desc[_ngcontent-%COMP%]{max-width:700px;color:var(--dim);line-height:1.7;font-size:1rem;margin-bottom:1.5rem}.monitor-footer[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:flex-end;gap:2rem;padding-top:2rem;border-top:1px solid rgba(245,239,230,.05)}.tool-label[_ngcontent-%COMP%]{font-family:JetBrains Mono,monospace;font-size:10px;text-transform:uppercase;color:#444;margin-bottom:.75rem}.monitor-tools[_ngcontent-%COMP%]{flex:1;display:flex;flex-wrap:wrap;gap:.6rem}.monitor-tools[_ngcontent-%COMP%]   .tool-tag[_ngcontent-%COMP%]{background:#f5efe60d;border:1px solid rgba(245,239,230,.1);color:var(--ink);padding:.4rem .8rem;border-radius:4px;font-size:.85rem;font-family:JetBrains Mono,monospace}.master-tools[_ngcontent-%COMP%]{text-align:right}.master-icons[_ngcontent-%COMP%]{display:flex;gap:1rem}.master-icons[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:32px;height:32px;object-fit:contain;filter:grayscale(1) opacity(.4);transition:all .5s var(--ease)}.master-icons[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:hover{filter:grayscale(0) opacity(1)}.nle-timeline[_ngcontent-%COMP%]{flex:1;background:var(--line);border:1px solid rgba(245,239,230,.05);border-radius:8px;padding:15px 0 0;overflow:hidden;position:relative}.timeline-ruler[_ngcontent-%COMP%]{height:35px;background:#12110f;border-bottom:1px solid rgba(245,239,230,.1);display:flex;align-items:center;padding:0 0 0 140px;position:relative;z-index:5}.timeline-ruler[_ngcontent-%COMP%]   .ruler-mark[_ngcontent-%COMP%]{flex:1;font-family:JetBrains Mono,monospace;font-size:9px;color:#444;border-left:1px solid #333;padding-left:.5rem;height:100%;display:flex;align-items:center}.timeline-tracks[_ngcontent-%COMP%]{position:relative;padding:1rem 0;background:#0a0908;z-index:1}.playhead[_ngcontent-%COMP%]{position:absolute;top:0;bottom:0;left:0;width:2px;background:#ff4500;z-index:100;pointer-events:none;box-shadow:0 0 15px #ff450080;will-change:transform}.playhead[_ngcontent-%COMP%]:before{content:"";position:absolute;top:0;left:-7px;width:16px;height:16px;background:#ff4500;clip-path:polygon(0 0,100% 0,50% 100%);z-index:101}.track-row[_ngcontent-%COMP%]{display:flex;align-items:center;height:70px;border-bottom:1px solid rgba(0,0,0,.2)}.track-row[_ngcontent-%COMP%]:last-child{border-bottom:none}.track-header[_ngcontent-%COMP%]{width:140px;height:100%;background:#1a1917;border-right:1px solid rgba(0,0,0,.4);padding:0 1rem;display:flex;flex-direction:column;justify-content:center}.track-header[_ngcontent-%COMP%]   .track-id[_ngcontent-%COMP%]{font-family:JetBrains Mono,monospace;font-size:11px;color:var(--dim);margin-bottom:.5rem}.track-header[_ngcontent-%COMP%]   .track-controls[_ngcontent-%COMP%]{display:flex;gap:.4rem}.track-header[_ngcontent-%COMP%]   .track-controls[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:9px;width:14px;height:14px;border:1px solid #333;display:flex;align-items:center;justify-content:center;border-radius:2px;color:#666}.track-content[_ngcontent-%COMP%]{flex:1;display:flex;gap:1rem;padding:0 1rem}.clip[_ngcontent-%COMP%]{height:44px;background:#e0a96d26;border:1px solid rgba(224,169,109,.3);border-radius:4px;cursor:pointer;transition:all .3s var(--ease);position:relative;overflow:hidden}.clip[_ngcontent-%COMP%]   .clip-inner[_ngcontent-%COMP%]{padding:0 .8rem;height:100%;display:flex;align-items:center;justify-content:space-between}.clip[_ngcontent-%COMP%]   .clip-label[_ngcontent-%COMP%]{font-family:JetBrains Mono,monospace;font-size:11px;color:var(--ink);white-space:nowrap}.clip[_ngcontent-%COMP%]   .clip-wave[_ngcontent-%COMP%]{height:50%;width:60px;background:repeating-linear-gradient(90deg,transparent 0,transparent 2px,rgba(224,169,109,.2) 2px,rgba(224,169,109,.2) 4px)}.clip.active[_ngcontent-%COMP%]{background:#e0a96d66;border-color:var(--amber);box-shadow:0 0 15px #e0a96d33;transform:scale(1.02)}.track-row[_ngcontent-%COMP%]:nth-child(2)   .clip[_ngcontent-%COMP%]{background:#00ffff1a;border-color:#00ffff4d}.track-row[_ngcontent-%COMP%]:nth-child(2)   .clip[_ngcontent-%COMP%]   .clip-wave[_ngcontent-%COMP%]{background:repeating-linear-gradient(90deg,transparent 0,transparent 2px,rgba(0,255,255,.2) 2px,rgba(0,255,255,.2) 4px)}.track-row[_ngcontent-%COMP%]:nth-child(2)   .clip.active[_ngcontent-%COMP%]{background:#00ffff4d;border-color:#0ff}.track-row[_ngcontent-%COMP%]:nth-child(3)   .clip[_ngcontent-%COMP%]{background:#8a2be226;border-color:#8a2be24d}.track-row[_ngcontent-%COMP%]:nth-child(3)   .clip[_ngcontent-%COMP%]   .clip-wave[_ngcontent-%COMP%]{background:repeating-linear-gradient(90deg,transparent 0,transparent 2px,rgba(138,43,226,.2) 2px,rgba(138,43,226,.2) 4px)}.track-row[_ngcontent-%COMP%]:nth-child(3)   .clip.active[_ngcontent-%COMP%]{background:#8a2be24d;border-color:#8a2be2}@media (max-width: 1024px){.nle-layout[_ngcontent-%COMP%]{flex-direction:column-reverse}.nle-monitor[_ngcontent-%COMP%]{width:100%;margin-bottom:2rem}}@media (max-width: 900px){.nle-timeline[_ngcontent-%COMP%]{overflow-x:auto;-webkit-overflow-scrolling:touch;padding-bottom:1rem}.timeline-ruler[_ngcontent-%COMP%], .timeline-tracks[_ngcontent-%COMP%]{min-width:800px}.timeline-ruler[_ngcontent-%COMP%]{padding-left:80px}.track-header[_ngcontent-%COMP%]{width:80px}.track-header[_ngcontent-%COMP%]   .track-controls[_ngcontent-%COMP%], .clip-wave[_ngcontent-%COMP%]{display:none}.monitor-screen[_ngcontent-%COMP%]{padding:1.5rem}.monitor-title[_ngcontent-%COMP%]{font-size:2rem}}@media (max-width: 600px){.section-head[_ngcontent-%COMP%]{flex-direction:column;gap:1rem}.section-head[_ngcontent-%COMP%]   .end[_ngcontent-%COMP%]{text-align:left}}'],changeDetection:0})}}return n})();var kA=(n,e)=>e.year;function UA(n,e){if(n&1&&(V(0,"div",6)(1,"div",7),X(2),z(),V(3,"div",8),Ce(4,"div",9),z(),V(5,"div",10),X(6),z(),V(7,"div",11),X(8),V(9,"small"),X(10),z()(),V(11,"div",12),X(12),z(),V(13,"div",13),X(14),z()()),n&2){let t=e.$implicit;ye(2),lt(t.year),ye(4),lt(t.role),ye(2),tn(" ",t.place," "),ye(2),lt(t.placeDetail),ye(2),lt(t.location),ye(2),lt(t.reveal)}}var cy=(()=>{class n{constructor(){this.experiences=D0}static{this.\u0275fac=function(i){return new(i||n)}}static{this.\u0275cmp=Ct({type:n,selectors:[["app-experience"]],standalone:!0,features:[Dt],decls:17,vars:0,consts:[["id","experience"],[1,"section-head"],[1,"section-num"],[1,"section-title"],[1,"section-num","end"],[1,"exp-list"],[1,"exp-row"],[1,"exp-year"],[1,"exp-dot-col"],[1,"exp-dot"],[1,"exp-role"],[1,"exp-place"],[1,"exp-loc"],[1,"exp-reveal"]],template:function(i,r){i&1&&(V(0,"section",0)(1,"div",1)(2,"div")(3,"div",2),X(4,"\u2014 02 / Experience"),z(),V(5,"h2",3),X(6,"Rooms I've "),V(7,"em"),X(8,"worked"),z(),X(9," in."),z()(),V(10,"div",4),X(11,"Four"),Ce(12,"br"),X(13,"chapters"),z()(),V(14,"div",5),Nt(15,UA,15,6,"div",6,kA),z()()),i&2&&(ye(15),Ot(r.experiences))},styles:['[_nghost-%COMP%]{display:block}.section-head[_ngcontent-%COMP%]   .end[_ngcontent-%COMP%]{text-align:right}.section-head[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin-top:1rem}.exp-list[_ngcontent-%COMP%]{display:flex;flex-direction:column;position:relative;padding-left:2rem}.exp-list[_ngcontent-%COMP%]:before{content:"";position:absolute;left:196px;top:5rem;bottom:5rem;width:1px;background:linear-gradient(180deg,transparent,var(--accent) 5%,var(--accent) 95%,transparent);opacity:.6;z-index:1}.exp-row[_ngcontent-%COMP%]{display:grid;grid-template-columns:120px 40px 1.5fr 2fr 140px;gap:1.5rem;padding:2.5rem 0;border-top:1px solid var(--line);align-items:center;position:relative;transition:all .5s var(--ease)}.exp-row[_ngcontent-%COMP%]:hover{padding-left:1rem;background:#f5efe605}.exp-row[_ngcontent-%COMP%]:hover   .exp-dot[_ngcontent-%COMP%]{background:var(--ink);box-shadow:0 0 20px var(--accent),0 0 40px var(--accent);transform:scale(1.3)}.exp-dot-col[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;position:relative;z-index:2}.exp-dot[_ngcontent-%COMP%]{width:10px;height:10px;border-radius:50%;background:var(--accent);border:2px solid var(--ink);box-shadow:0 0 10px var(--accent);transition:all .4s var(--ease);position:relative}.exp-dot[_ngcontent-%COMP%]:after{content:"";position:absolute;inset:-10px;border-radius:50%;background:var(--accent);opacity:.15;animation:_ngcontent-%COMP%_pulseDot 3s infinite}@keyframes _ngcontent-%COMP%_pulseDot{0%{transform:scale(1);opacity:.2}50%{transform:scale(1.8);opacity:0}to{transform:scale(1);opacity:.2}}.exp-year[_ngcontent-%COMP%]{font-family:JetBrains Mono,monospace;font-size:10px;color:var(--dim);letter-spacing:.1em;text-transform:uppercase}.exp-role[_ngcontent-%COMP%]{font-family:Fraunces,serif;font-weight:300;font-style:italic;font-size:1.6rem;letter-spacing:-.01em;color:var(--ink)}.exp-place[_ngcontent-%COMP%]{font-family:Fraunces,serif;font-weight:400;font-size:1.1rem;color:var(--dim)}.exp-place[_ngcontent-%COMP%]   small[_ngcontent-%COMP%]{display:block;color:var(--accent);font-size:.8rem;margin-top:.4rem;letter-spacing:.05em;text-transform:uppercase}.exp-loc[_ngcontent-%COMP%]{font-family:JetBrains Mono,monospace;font-size:9px;color:var(--dim);letter-spacing:.2em;text-transform:uppercase;text-align:right}.exp-reveal[_ngcontent-%COMP%]{grid-column:3/5;max-height:0;opacity:0;overflow:hidden;transition:all .6s var(--ease);color:var(--dim);font-size:.9rem;line-height:1.7}.exp-row[_ngcontent-%COMP%]:hover   .exp-reveal[_ngcontent-%COMP%]{max-height:200px;opacity:1;padding-top:1.5rem}@media (max-width: 1000px){.exp-list[_ngcontent-%COMP%]:before{display:none}.exp-row[_ngcontent-%COMP%]{grid-template-columns:1fr;gap:1rem;padding:2rem 0}.exp-dot-col[_ngcontent-%COMP%]{display:none}.exp-year[_ngcontent-%COMP%]{order:1}.exp-role[_ngcontent-%COMP%]{order:2;font-size:1.4rem}.exp-place[_ngcontent-%COMP%]{order:3}.exp-loc[_ngcontent-%COMP%]{order:4;text-align:left}.exp-reveal[_ngcontent-%COMP%]{order:5;grid-column:1}}'],changeDetection:0})}}return n})();var VA=["track"],BA=(n,e)=>e.value,zA=(n,e)=>e.title;function HA(n,e){if(n&1){let t=ci();V(0,"button",14),$t("click",function(){let r=Pn(t).$implicit,s=en();return Rn(s.setFilter(r.value))}),X(1),z()}if(n&2){let t=e.$implicit,i=en();Vt("active",i.activeFilter()===t.value),ye(),tn(" ",t.label," ")}}function GA(n,e){if(n&1){let t=ci();V(0,"div",15),$t("click",function(){let r=Pn(t),s=r.$implicit,o=r.$index,a=en();return Rn(a.openProject(s,o))}),V(1,"div",16)(2,"div",17),X(3),z(),Ce(4,"img",18)(5,"div",19),z(),V(6,"div",20)(7,"div")(8,"div",21)(9,"em"),X(10),z()(),V(11,"div",22),X(12),z()(),V(13,"div",23),X(14),z()()()}if(n&2){let t=e.$implicit,i=e.$index,r=en();ye(3),tn("P \u2014 ",r.paddedIndex(i),""),ye(),or("object-position",t.imgPosition||"center"),jt("src",t.img,Yn),ye(6),lt(t.title),ye(2),lt(t.brand),ye(2),lt(r.categoryLabel(t.cat))}}function WA(n,e){n&1&&Ce(0,"span",31)}function jA(n,e){n&1&&Ce(0,"span",31)}function $A(n,e){if(n&1){let t=ci();V(0,"div",24),$t("click",function(){Pn(t);let r=en();return Rn(r.closeProject())}),V(1,"button",25),$t("click",function(r){return Pn(t),en().closeProject(),Rn(r.stopPropagation())}),ir(),V(2,"svg",26),Ce(3,"path",27),z()(),Lm(),V(4,"div",28),$t("click",function(r){return Pn(t),Rn(r.stopPropagation())}),Ce(5,"div",29),V(6,"div",30),Nt(7,WA,1,0,"span",31,Zn),z(),V(9,"div",32),Ce(10,"video",33)(11,"div",34)(12,"div",35)(13,"span",36)(14,"span",37)(15,"span",38)(16,"span",39)(17,"div",40)(18,"div",41),V(19,"div",42),Ce(20,"span",43),z()(),V(21,"div",44),Nt(22,jA,1,0,"span",31,Zn),z()()()}if(n&2){let t=e,i=en();ye(7),Ot(i.playerPerfs),ye(3),jt("poster",t.img,Yn)("src",t.video||"/assets/logos/studio-bg.mp4",Yn),ye(12),Ot(i.playerPerfs)}}var ly=(()=>{class n{constructor(){this.zone=ke(rt),this.track=Ut.required("track"),this.filters=T0,this.activeFilter=Rt("all"),this.dragging=Rt(!1),this.selected=Rt(null),this.selectedIndex=Rt(0),this.perfs=Array.from({length:24}),this.playerPerfs=Array.from({length:32}),this.shuffledAllProjects=(()=>{let t=Ba.filter(s=>s.cat==="ai");return[...[...Ba.filter(s=>s.cat!=="ai")].sort(()=>Math.random()-.5),...t]})(),this.visibleProjects=pd(()=>{let t=this.activeFilter();return t==="all"?this.shuffledAllProjects:Ba.filter(i=>i.cat===t)}),this.current=0,this.isDown=!1,this.startX=0,this.startPos=0,this.cleanups=[]}openProject(t,i){this.dragging()||(this.selected.set(t),this.selectedIndex.set(i),document.body.style.overflow="hidden")}closeProject(){this.selected.set(null),document.body.style.overflow=""}onEscape(){this.selected()&&this.closeProject()}roleFor(t){switch(t){case"cine":return"Cinematographer";case"edit":return"Editor";case"vfx":return"VFX Artist";case"ai":return"AI Integration"}}setFilter(t){this.activeFilter.set(t),this.current=0,queueMicrotask(()=>{let i=this.track().nativeElement;i.style.transform="translateX(0)"})}categoryLabel(t){return A0[t]??t}paddedIndex(t){return String(t+1).padStart(2,"0")}ngAfterViewInit(){this.zone.runOutsideAngular(()=>{this.attachDrag(),window.matchMedia("(max-width: 900px)").matches||this.attachTilt()})}attachDrag(){let t=this.track().nativeElement,i=t.parentElement,r=document.querySelector(".cursor-ring"),s=()=>{t.style.transform=`translateX(${this.current}px)`},o=u=>{this.isDown=!0,this.zone.run(()=>this.dragging.set(!0)),r?.classList.add("drag"),this.startX="touches"in u?u.touches[0].clientX:u.clientX,this.startPos=this.current},a=u=>{if(!this.isDown)return;let d="touches"in u?u.touches[0].clientX:u.clientX;this.current=this.startPos+(d-this.startX);let h=-(t.scrollWidth-t.clientWidth);this.current=Math.max(h,Math.min(0,this.current)),s()},c=()=>{this.isDown=!1,this.zone.run(()=>this.dragging.set(!1)),r?.classList.remove("drag")};t.addEventListener("mousedown",o),t.addEventListener("mousemove",a),window.addEventListener("mouseup",c),t.addEventListener("touchstart",o,{passive:!0}),t.addEventListener("touchmove",a,{passive:!0}),t.addEventListener("touchend",c);let l=u=>{let d=-(t.scrollWidth-t.clientWidth);this.current-=u.deltaY,this.current=Math.max(d,Math.min(0,this.current)),s(),u.preventDefault()};i.addEventListener("wheel",l,{passive:!1}),this.cleanups.push(()=>t.removeEventListener("mousedown",o),()=>t.removeEventListener("mousemove",a),()=>window.removeEventListener("mouseup",c),()=>t.removeEventListener("touchstart",o),()=>t.removeEventListener("touchmove",a),()=>t.removeEventListener("touchend",c),()=>i.removeEventListener("wheel",l))}attachTilt(){let t=i=>{this.track().nativeElement.classList.contains("dragging")||document.querySelectorAll(".gallery-item-inner").forEach(s=>{let o=s.getBoundingClientRect();if(o.width===0)return;let a=o.left+o.width/2,c=o.top+o.height/2,l=(i.clientX-a)/o.width,u=(i.clientY-c)/o.height;if(Math.hypot(l,u)<1){let h=l*12,f=-u*8;s.style.transform=`perspective(1000px) rotateY(${h}deg) rotateX(${f}deg) translateZ(10px)`}else s.style.transform=""})};document.addEventListener("mousemove",t),this.cleanups.push(()=>document.removeEventListener("mousemove",t))}ngOnDestroy(){this.cleanups.forEach(t=>t())}static{this.\u0275fac=function(i){return new(i||n)}}static{this.\u0275cmp=Ct({type:n,selectors:[["app-work"]],viewQuery:function(i,r){i&1&&Bt(r.track,VA,5),i&2&&Jn()},hostBindings:function(i,r){i&1&&$t("keydown.escape",function(){return r.onEscape()},!1,cg)},standalone:!0,features:[Dt],decls:26,vars:3,consts:[["track",""],["id","work",1,"work"],[1,"work-head"],[1,"section-head"],[1,"section-num"],[1,"section-title"],[1,"section-num","end"],[1,"gallery-filters"],[1,"gallery-filter",3,"active"],[1,"gallery-wrap"],[1,"gallery-track"],["data-cursor","View",1,"gallery-item"],[1,"drag-hint"],[1,"project-modal"],[1,"gallery-filter",3,"click"],["data-cursor","View",1,"gallery-item",3,"click"],[1,"gallery-item-inner"],[1,"gallery-item-num"],[1,"gallery-item-visual",2,"object-fit","cover","width","100%","height","100%","position","absolute","inset","0",3,"src"],[1,"gallery-item-shine"],[1,"gallery-item-meta"],[1,"gallery-item-title"],[1,"gallery-item-tag","brand"],[1,"gallery-item-tag"],[1,"project-modal",3,"click"],["type","button","aria-label","Close",1,"modal-close",3,"click"],["width","20","height","20","viewBox","0 0 24 24","fill","none","stroke","currentColor","stroke-width","2"],["d","M18 6 6 18M6 6l12 12"],[1,"modal-player",3,"click"],[1,"player-glow"],[1,"player-strip","top"],[1,"perf"],[1,"player-viewport"],["controls","","autoplay","","playsinline","",3,"poster","src"],[1,"player-grain"],[1,"player-vignette"],[1,"bracket","tl"],[1,"bracket","tr"],[1,"bracket","bl"],[1,"bracket","br"],[1,"letterbox","top"],[1,"letterbox","bottom"],[1,"rec-badge"],[1,"rec-dot"],[1,"player-strip","bottom"]],template:function(i,r){if(i&1&&(V(0,"section",1)(1,"div",2)(2,"div",3)(3,"div")(4,"div",4),X(5,"\u2014 03 / Selected Work"),z(),V(6,"h2",5),X(7,"The "),V(8,"em"),X(9,"reel"),z(),X(10,", fragmented."),z()(),V(11,"div",6),X(12,"250+"),Ce(13,"br"),X(14,"projects delivered"),z()()(),V(15,"div",7),Nt(16,HA,2,3,"button",8,BA),z(),V(18,"div",9)(19,"div",10,0),Nt(21,GA,15,7,"div",11,zA),z()(),V(23,"div",12),X(24,"\u2190 Drag / scroll to explore \u2192"),z()(),yn(25,$A,24,2,"div",13)),i&2){let s;ye(16),Ot(r.filters),ye(3),Vt("dragging",r.dragging()),ye(2),Ot(r.visibleProjects()),ye(4),Oa((s=r.selected())?25:-1,s)}},styles:['@charset "UTF-8";[_nghost-%COMP%]{display:block}.work[_ngcontent-%COMP%]{padding:3.5rem 0 1.5rem;min-height:100vh;height:auto;display:flex;flex-direction:column;overflow:visible;background:var(--bg);position:relative;z-index:2}.work-head[_ngcontent-%COMP%]{padding:0 2.5rem;margin-bottom:1.25rem}.section-head[_ngcontent-%COMP%]{border:none;padding:0;margin-bottom:0}.section-head[_ngcontent-%COMP%]   .end[_ngcontent-%COMP%]{text-align:right}.section-head[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin-top:.5rem;font-size:clamp(2rem,4.5vw,3.5rem)}.gallery-filters[_ngcontent-%COMP%]{display:flex;gap:.5rem;padding:0 2.5rem;margin-bottom:1rem;flex-wrap:wrap}.gallery-filter[_ngcontent-%COMP%]{padding:.5rem 1.25rem;border:1px solid var(--line);font-family:JetBrains Mono,monospace;font-size:10px;letter-spacing:.2em;text-transform:uppercase;color:var(--dim);transition:all .3s var(--ease)}.gallery-filter[_ngcontent-%COMP%]:hover{border-color:var(--ink);color:var(--ink)}.gallery-filter.active[_ngcontent-%COMP%]{border-color:var(--accent);color:var(--accent)}.gallery-wrap[_ngcontent-%COMP%]{position:relative;min-height:600px;height:600px;overflow-x:auto;overflow-y:hidden;perspective:1200px;background:var(--bg);display:block;width:100%}.gallery-track[_ngcontent-%COMP%]{display:flex;gap:2rem;padding:0 2.5rem;height:100%;width:100%;cursor:grab;will-change:transform;align-items:stretch}.gallery-track.dragging[_ngcontent-%COMP%]{cursor:grabbing}.gallery-item[_ngcontent-%COMP%]{flex:0 0 auto;width:clamp(260px,22vw,340px);height:100%;position:relative;transition:transform .6s var(--ease);transform-style:preserve-3d;will-change:transform;display:flex;flex-direction:column}.gallery-item-inner[_ngcontent-%COMP%]{flex:1;min-height:0;width:100%;position:relative;overflow:hidden;background:var(--line);transform-style:preserve-3d;transition:transform .4s var(--ease),box-shadow .4s var(--ease)}.gallery-item-inner[_ngcontent-%COMP%]:before{content:"";position:absolute;inset:0;z-index:2;background:linear-gradient(180deg,transparent 60%,rgba(10,9,8,.75) 100%);pointer-events:none}.gallery-item[_ngcontent-%COMP%]:hover   .gallery-item-inner[_ngcontent-%COMP%]{box-shadow:0 40px 80px #0009,0 0 0 1px #d4472a4d}.gallery-item-visual[_ngcontent-%COMP%]{position:absolute;inset:0;background-size:cover;background-position:center;transition:transform 1s var(--ease),filter .6s;filter:contrast(1.05)}.gallery-item[_ngcontent-%COMP%]:hover   .gallery-item-visual[_ngcontent-%COMP%]{transform:scale(1.05);filter:contrast(1.15) brightness(1.05)}.gallery-item-shine[_ngcontent-%COMP%]{position:absolute;inset:0;z-index:3;pointer-events:none;background:linear-gradient(105deg,transparent 40%,rgba(224,169,109,.18) 50%,transparent 60%);opacity:0;transition:opacity .4s;mix-blend-mode:screen}.gallery-item[_ngcontent-%COMP%]:hover   .gallery-item-shine[_ngcontent-%COMP%]{opacity:1}.gallery-item-num[_ngcontent-%COMP%]{position:absolute;top:1rem;left:1rem;z-index:3;font-family:JetBrains Mono,monospace;font-size:10px;color:var(--ink);letter-spacing:.2em;mix-blend-mode:difference}.gallery-item-meta[_ngcontent-%COMP%]{padding:.75rem 0 0;min-height:64px;display:flex;justify-content:space-between;align-items:flex-start;gap:1rem}.gallery-item-title[_ngcontent-%COMP%]{font-family:Fraunces,serif;font-weight:400;font-size:1.1rem;letter-spacing:-.01em}.gallery-item-title[_ngcontent-%COMP%]   em[_ngcontent-%COMP%]{font-style:italic;color:var(--amber)}.gallery-item-tag[_ngcontent-%COMP%]{font-family:JetBrains Mono,monospace;font-size:10px;color:var(--dim);letter-spacing:.2em;text-transform:uppercase;white-space:nowrap}.gallery-item-tag.brand[_ngcontent-%COMP%]{margin-top:.4rem}.drag-hint[_ngcontent-%COMP%]{text-align:center;padding:.75rem;font-family:JetBrains Mono,monospace;font-size:10px;color:var(--dim);letter-spacing:.3em;text-transform:uppercase}.gallery-item[_ngcontent-%COMP%]{cursor:pointer}@media (max-width: 900px){.work[_ngcontent-%COMP%]{height:auto;padding:5rem 0}.work-head[_ngcontent-%COMP%], .gallery-filters[_ngcontent-%COMP%], .gallery-track[_ngcontent-%COMP%]{padding-left:1.25rem;padding-right:1.25rem}.gallery-track[_ngcontent-%COMP%]{gap:1rem}.gallery-item[_ngcontent-%COMP%]{width:85vw}}@media (max-width: 600px){.section-head[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:2.5rem}.gallery-filters[_ngcontent-%COMP%]{gap:.25rem}.gallery-filter[_ngcontent-%COMP%]{padding:.4rem .8rem;font-size:8px}}.project-modal[_ngcontent-%COMP%]{position:fixed;inset:0;z-index:9000;display:flex;align-items:center;justify-content:center;padding:3rem;background:#050403cc;backdrop-filter:blur(18px) saturate(1.1);-webkit-backdrop-filter:blur(18px) saturate(1.1);animation:_ngcontent-%COMP%_backdropIn .4s var(--ease)}@keyframes _ngcontent-%COMP%_backdropIn{0%{opacity:0}to{opacity:1}}.modal-player[_ngcontent-%COMP%]{position:relative;width:min(1100px,92vw);max-height:90vh;display:flex;flex-direction:column;animation:_ngcontent-%COMP%_playerIn .7s cubic-bezier(.2,.9,.3,1.2)}@keyframes _ngcontent-%COMP%_playerIn{0%{opacity:0;transform:scale(.85);filter:blur(12px)}60%{opacity:1;filter:blur(0)}to{opacity:1;transform:scale(1);filter:blur(0)}}.player-glow[_ngcontent-%COMP%]{position:absolute;inset:-60px;border-radius:24px;background:radial-gradient(ellipse at center,rgba(212,71,42,.25),transparent 60%);filter:blur(40px);pointer-events:none;z-index:-1;animation:_ngcontent-%COMP%_glowPulse 4s ease-in-out infinite}@keyframes _ngcontent-%COMP%_glowPulse{0%,to{opacity:.8;transform:scale(1)}50%{opacity:1;transform:scale(1.04)}}.player-strip[_ngcontent-%COMP%]{display:flex;justify-content:space-between;height:24px;padding:0 6px;background:linear-gradient(180deg,#000,#080706);border-left:1px solid rgba(255,255,255,.05);border-right:1px solid rgba(255,255,255,.05);flex-shrink:0;overflow:hidden}.player-strip.top[_ngcontent-%COMP%]{border-top:1px solid rgba(255,255,255,.05);border-radius:6px 6px 0 0}.player-strip.bottom[_ngcontent-%COMP%]{border-bottom:1px solid rgba(255,255,255,.05);border-radius:0 0 6px 6px}.player-strip[_ngcontent-%COMP%]   .perf[_ngcontent-%COMP%]{width:18px;height:12px;background:#050403;border-radius:2px;border:1px solid rgba(255,255,255,.04);align-self:center;animation:_ngcontent-%COMP%_perfSlideModal 1.6s linear infinite}@keyframes _ngcontent-%COMP%_perfSlideModal{0%{opacity:.35;transform:translate(-5px)}50%{opacity:1}to{opacity:.35;transform:translate(5px)}}.player-viewport[_ngcontent-%COMP%]{position:relative;aspect-ratio:16/9;max-height:76vh;background:#000;overflow:hidden;border-left:1px solid rgba(212,71,42,.15);border-right:1px solid rgba(212,71,42,.15)}.player-viewport[_ngcontent-%COMP%]   video[_ngcontent-%COMP%]{width:100%;height:100%;display:block;object-fit:contain;background:#000}.player-grain[_ngcontent-%COMP%]{position:absolute;inset:-40%;opacity:.08;pointer-events:none;mix-blend-mode:overlay;background-image:repeating-radial-gradient(circle at 20% 30%,#fff9 0,#fff0 2px),repeating-radial-gradient(circle at 70% 80%,#ffffff80 0,#fff0 2px);animation:_ngcontent-%COMP%_playerGrain .7s steps(6) infinite;z-index:2}@keyframes _ngcontent-%COMP%_playerGrain{0%{transform:translate(0)}25%{transform:translate(-3%,2%)}50%{transform:translate(2%,-3%)}75%{transform:translate(-2%,3%)}to{transform:translate(0)}}.player-vignette[_ngcontent-%COMP%]{position:absolute;inset:0;pointer-events:none;background:radial-gradient(ellipse at center,transparent 55%,rgba(0,0,0,.55) 100%);z-index:2}.bracket[_ngcontent-%COMP%]{position:absolute;width:28px;height:28px;border-color:var(--accent);border-style:solid;pointer-events:none;z-index:3;opacity:0;animation:_ngcontent-%COMP%_bracketIn .5s .4s var(--ease) forwards;filter:drop-shadow(0 0 6px rgba(212,71,42,.6))}.bracket.tl[_ngcontent-%COMP%]{top:12px;left:12px;border-width:2px 0 0 2px}.bracket.tr[_ngcontent-%COMP%]{top:12px;right:12px;border-width:2px 2px 0 0}.bracket.bl[_ngcontent-%COMP%]{bottom:12px;left:12px;border-width:0 0 2px 2px}.bracket.br[_ngcontent-%COMP%]{bottom:12px;right:12px;border-width:0 2px 2px 0}@keyframes _ngcontent-%COMP%_bracketIn{0%{opacity:0;transform:scale(1.6)}to{opacity:.9;transform:scale(1)}}.letterbox[_ngcontent-%COMP%]{position:absolute;left:0;right:0;height:50%;background:#000;pointer-events:none;z-index:4}.letterbox.top[_ngcontent-%COMP%]{top:0;animation:_ngcontent-%COMP%_letterboxTop .9s .1s cubic-bezier(.7,0,.2,1) forwards}.letterbox.bottom[_ngcontent-%COMP%]{bottom:0;animation:_ngcontent-%COMP%_letterboxBottom .9s .1s cubic-bezier(.7,0,.2,1) forwards}@keyframes _ngcontent-%COMP%_letterboxTop{0%{transform:translateY(0)}to{transform:translateY(-100%)}}@keyframes _ngcontent-%COMP%_letterboxBottom{0%{transform:translateY(0)}to{transform:translateY(100%)}}.rec-badge[_ngcontent-%COMP%]{position:absolute;top:20px;left:20px;z-index:5;display:flex;align-items:center;gap:.5rem;padding:6px 10px;background:#0a090899;border-radius:20px;backdrop-filter:blur(6px);opacity:0;animation:_ngcontent-%COMP%_fadeIn .5s .7s var(--ease) forwards}.rec-badge[_ngcontent-%COMP%]   .rec-dot[_ngcontent-%COMP%]{width:8px;height:8px;border-radius:50%;background:var(--accent);box-shadow:0 0 10px var(--accent);animation:_ngcontent-%COMP%_recPulse 1.2s ease-in-out infinite}@keyframes _ngcontent-%COMP%_recPulse{0%,to{opacity:1;transform:scale(1)}50%{opacity:.4;transform:scale(.75)}}.modal-close[_ngcontent-%COMP%]{position:absolute;top:1.25rem;right:1.25rem;z-index:9010;width:48px;height:48px;border-radius:50%;background:#0a0908b3;border:1px solid rgba(212,71,42,.3);backdrop-filter:blur(8px);box-shadow:0 0 20px #d4472a26;color:var(--ink);cursor:pointer;display:flex;align-items:center;justify-content:center;transition:all .3s var(--ease);animation:_ngcontent-%COMP%_fadeIn .5s .6s var(--ease) backwards}.modal-close[_ngcontent-%COMP%]:before{content:"";position:absolute;inset:-4px;border-radius:50%;border:1px solid rgba(212,71,42,.25);animation:_ngcontent-%COMP%_closeRing 2s ease-in-out infinite}.modal-close[_ngcontent-%COMP%]:hover{border-color:var(--accent);color:var(--accent);background:#0a0908e6;transform:rotate(90deg) scale(1.08);box-shadow:0 0 30px #d4472a59}@keyframes _ngcontent-%COMP%_closeRing{0%,to{transform:scale(1);opacity:.8}50%{transform:scale(1.15);opacity:.2}}@keyframes _ngcontent-%COMP%_fadeIn{0%{opacity:0}to{opacity:1}}@media (max-width: 820px){.project-modal[_ngcontent-%COMP%]{padding:1rem}.modal-close[_ngcontent-%COMP%]{top:.75rem;right:.75rem;width:38px;height:38px}}'],changeDetection:0})}}return n})();var qA={"[class.ng-untouched]":"isUntouched","[class.ng-touched]":"isTouched","[class.ng-pristine]":"isPristine","[class.ng-dirty]":"isDirty","[class.ng-valid]":"isValid","[class.ng-invalid]":"isInvalid","[class.ng-pending]":"isPending"},bN=St(_t({},qA),{"[class.ng-submitted]":"isSubmitted"});var XA=new Je("CallSetDisabledState",{providedIn:"root",factory:()=>uy}),uy="always";var YA=(()=>{class n{static{this.\u0275fac=function(i){return new(i||n)}}static{this.\u0275mod=qr({type:n})}static{this.\u0275inj=$r({})}}return n})();var dy=(()=>{class n{static withConfig(t){return{ngModule:n,providers:[{provide:XA,useValue:t.callSetDisabledState??uy}]}}static{this.\u0275fac=function(i){return new(i||n)}}static{this.\u0275mod=qr({type:n})}static{this.\u0275inj=$r({imports:[YA]})}}return n})();var ZA=(n,e)=>e.type;function JA(n,e){n&1&&(ir(),V(0,"svg",12),Ce(1,"path",17)(2,"polyline",18),z())}function KA(n,e){n&1&&(ir(),V(0,"svg",13),Ce(1,"path",19)(2,"circle",20),z())}function QA(n,e){if(n&1&&(V(0,"a",10)(1,"div",11),yn(2,JA,3,0,":svg:svg",12)(3,KA,3,0,":svg:svg",13),z(),V(4,"div",14)(5,"span",15),X(6),z(),V(7,"span",16),X(8),z()()()),n&2){let t,i=e.$implicit;jt("href",i.href,Yn),ye(2),Oa((t=i.type)==="email"?2:t==="linkedin"?3:-1),ye(4),lt(i.label),ye(2),lt(i.value)}}var hy=(()=>{class n{constructor(){this.submitted=Rt(!1),this.formData={name:"",email:"",subject:"",message:""},this.channels=[{type:"email",label:"email",value:"riishabh20@gmail.com",href:"mailto:riishabh20@gmail.com"},{type:"linkedin",label:"linkedin",value:"Rishabh Sahu",href:"https://www.linkedin.com/in/rishabh-sahu-6a782a249?utm_source=share_via&utm_content=profile&utm_medium=member_ios"}]}onSubmit(){console.log("Form Submit:",this.formData),setTimeout(()=>{this.submitted.set(!0),this.formData.name="",this.formData.email="",this.formData.subject="",this.formData.message=""},800)}static{this.\u0275fac=function(i){return new(i||n)}}static{this.\u0275cmp=Ct({type:n,selectors:[["app-contact"]],standalone:!0,features:[Dt],decls:18,vars:0,consts:[["id","contact",1,"contact"],[1,"contact-inner"],[1,"contact-grid"],[1,"contact-info"],[1,"contact-title"],[1,"gradient-text"],[1,"contact-meta"],[1,"sub-title"],[1,"contact-desc"],[1,"channel-list"],["target","_blank",1,"channel-card",3,"href"],[1,"channel-icon"],["width","18","height","18","viewBox","0 0 24 24","fill","none","stroke","currentColor","stroke-width","2"],["width","18","height","18","viewBox","0 0 24 24","fill","currentColor"],[1,"channel-content"],[1,"channel-label"],[1,"channel-value"],["d","M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"],["points","22,6 12,13 2,6"],["d","M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"],["cx","4","cy","4","r","2"]],template:function(i,r){i&1&&(V(0,"section",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"h1",4),X(5,"Let's "),V(6,"span",5),X(7,"work"),z(),Ce(8,"br"),X(9,"together"),z(),V(10,"div",6)(11,"h2",7),X(12,"Get in touch"),z(),V(13,"p",8),X(14," I'm currently open to new opportunities \u2014 full time, freelance, or interesting collaborations. Drop a message and I'll get back to you within 24 hours. "),z()(),V(15,"div",9),Nt(16,QA,9,4,"a",10,ZA),z()()()()()),i&2&&(ye(16),Ot(r.channels))},dependencies:[no,dy],styles:["[_nghost-%COMP%]{display:block}.contact[_ngcontent-%COMP%]{padding:5rem 2.5rem 3rem;background:var(--bg);min-height:100vh;height:100vh;display:flex;align-items:center;position:relative;overflow:hidden}.contact-inner[_ngcontent-%COMP%]{max-width:1400px;width:100%;margin:0 auto;position:relative;z-index:2}.contact-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 1.2fr;gap:4rem;align-items:start}.contact-title[_ngcontent-%COMP%]{font-family:Fraunces,serif;font-weight:300;font-size:clamp(2.5rem,5vw,4.5rem);line-height:1;letter-spacing:-.04em;margin-bottom:1.75rem;color:var(--ink)}.contact-title[_ngcontent-%COMP%]   .gradient-text[_ngcontent-%COMP%]{background:linear-gradient(90deg,var(--accent),var(--amber));-webkit-background-clip:text;-webkit-text-fill-color:transparent;font-style:italic}.contact-meta[_ngcontent-%COMP%]{margin-bottom:1.75rem}.contact-meta[_ngcontent-%COMP%]   .sub-title[_ngcontent-%COMP%]{font-family:Fraunces,serif;font-weight:400;font-size:1.35rem;margin-bottom:.6rem;color:var(--ink)}.contact-meta[_ngcontent-%COMP%]   .contact-desc[_ngcontent-%COMP%]{font-size:.95rem;color:var(--dim);line-height:1.5;max-width:500px}.channel-list[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:.6rem}.channel-card[_ngcontent-%COMP%]{display:flex;align-items:center;gap:1rem;padding:.75rem 1rem;background:#f5efe605;border:1px solid rgba(245,239,230,.05);border-radius:16px;backdrop-filter:blur(10px);transition:all .4s var(--ease);text-decoration:none}.channel-card[_ngcontent-%COMP%]:hover{background:#f5efe60d;border-color:var(--accent);transform:translate(10px)}.channel-card[_ngcontent-%COMP%]:hover   .channel-icon[_ngcontent-%COMP%]{color:var(--accent);background:#ffffff0d}.channel-icon[_ngcontent-%COMP%]{width:40px;height:40px;padding:10px;background:#ffffff08;border-radius:14px;color:var(--accent);transition:all .4s var(--ease);display:flex;align-items:center;justify-content:center}.channel-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{width:18px;height:18px;display:block;stroke:var(--accent);fill:transparent}.channel-icon[_ngcontent-%COMP%]   svg[fill=currentColor][_ngcontent-%COMP%]{fill:var(--accent);stroke:none}.channel-content[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:.2rem}.channel-label[_ngcontent-%COMP%]{font-family:JetBrains Mono,monospace;font-size:9px;letter-spacing:.2em;text-transform:uppercase;color:var(--dim)}.channel-value[_ngcontent-%COMP%]{font-family:Fraunces,serif;font-size:.95rem;color:var(--ink)}.contact-form-container[_ngcontent-%COMP%]{position:relative;padding-top:.25rem}.contact-form[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:1rem}.form-row[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 1fr;gap:1rem}.form-group[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:.4rem}.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{font-family:JetBrains Mono,monospace;font-size:9px;letter-spacing:.2em;text-transform:uppercase;color:var(--dim)}.form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .form-group[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]{background:#f5efe605;border:1px solid rgba(245,239,230,.08);border-radius:10px;padding:.65rem .9rem;color:var(--ink);font-family:inherit;font-size:.95rem;transition:all .3s}.form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder, .form-group[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]::placeholder{color:#f5efe626}.form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, .form-group[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus{outline:none;border-color:var(--accent);background:#f5efe60a;box-shadow:0 0 15px #d4472a1a}.form-group[_ngcontent-%COMP%]   input.ng-invalid.ng-touched[_ngcontent-%COMP%], .form-group[_ngcontent-%COMP%]   textarea.ng-invalid.ng-touched[_ngcontent-%COMP%]{border-color:#d4472a80}.submit-btn[_ngcontent-%COMP%]{margin-top:.25rem;align-self:flex-start;padding:.8rem 1.6rem;background:linear-gradient(90deg,var(--accent),var(--amber));color:#000;border:none;border-radius:12px;font-family:JetBrains Mono,monospace;font-size:11px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;display:flex;align-items:center;gap:.75rem;cursor:pointer;transition:all .4s var(--ease)}.submit-btn[_ngcontent-%COMP%]:hover:not(:disabled){transform:translateY(-3px);box-shadow:0 10px 25px #d4472a33}.submit-btn[_ngcontent-%COMP%]:disabled{opacity:.4;cursor:not-allowed}.success-message[_ngcontent-%COMP%]{padding:3rem;background:#f5efe605;border:1px solid var(--accent);border-radius:20px;text-align:center;backdrop-filter:blur(10px);animation:_ngcontent-%COMP%_fadeIn .6s var(--ease)}.success-message[_ngcontent-%COMP%]   .success-icon[_ngcontent-%COMP%]{width:50px;height:50px;background:var(--accent);color:#fff;border-radius:50%;font-size:1.5rem;line-height:50px;margin:0 auto 1.5rem}.success-message[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-family:Fraunces,serif;font-size:1.8rem;margin-bottom:.8rem}.success-message[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:var(--dim);margin-bottom:1.5rem}.reset-btn[_ngcontent-%COMP%]{background:transparent;border:1px solid var(--dim);color:var(--dim);padding:.6rem 1.2rem;border-radius:8px;cursor:pointer;transition:all .3s}.reset-btn[_ngcontent-%COMP%]:hover{border-color:var(--ink);color:var(--ink)}@keyframes _ngcontent-%COMP%_fadeIn{0%{opacity:0;transform:translateY(15px)}to{opacity:1;transform:translateY(0)}}.form-decoration[_ngcontent-%COMP%]{position:absolute;top:50%;right:-5%;width:12px;height:12px;background:var(--accent);border-radius:50%;box-shadow:0 0 15px var(--accent),0 0 30px var(--accent);pointer-events:none;z-index:1}@media (max-width: 1100px){.contact-grid[_ngcontent-%COMP%]{grid-template-columns:1fr;gap:5rem}.contact-title[_ngcontent-%COMP%]{margin-bottom:3rem}}@media (max-width: 600px){.form-row[_ngcontent-%COMP%]{grid-template-columns:1fr}.contact[_ngcontent-%COMP%]{padding:6rem 1.25rem}}"],changeDetection:0})}}return n})();function eI(n,e){if(n&1&&(V(0,"span"),X(1),z()),n&2){let t=e.$implicit;Vt("sep",t.sep),ye(),lt(t.text)}}var fy=(()=>{class n{constructor(){this.marqueeItems=[{text:"Cinematography",sep:!1},{text:"\u2726",sep:!0},{text:"Editing",sep:!1},{text:"\u2726",sep:!0},{text:"Visual Effects",sep:!1},{text:"\u2726",sep:!0},{text:"Colour",sep:!1},{text:"\u2726",sep:!0},{text:"Direction",sep:!1},{text:"\u2726",sep:!0},{text:"Cinematography",sep:!1},{text:"\u2726",sep:!0},{text:"Editing",sep:!1},{text:"\u2726",sep:!0},{text:"Visual Effects",sep:!1},{text:"\u2726",sep:!0},{text:"Colour",sep:!1},{text:"\u2726",sep:!0},{text:"Direction",sep:!1},{text:"\u2726",sep:!0}]}static{this.\u0275fac=function(i){return new(i||n)}}static{this.\u0275cmp=Ct({type:n,selectors:[["app-root"]],standalone:!0,features:[Dt],decls:23,vars:0,consts:[[1,"grain"],[1,"vignette"],[1,"marquee"],[1,"marquee-track"],[3,"sep"]],template:function(i,r){i&1&&(Ce(0,"div",0)(1,"div",1)(2,"app-three-scene")(3,"app-loader")(4,"app-cursor")(5,"app-navbar"),V(6,"main"),Ce(7,"app-hero"),V(8,"div",2)(9,"div",3),Nt(10,eI,2,3,"span",4,Zn),z()(),Ce(12,"app-skills")(13,"app-experience")(14,"app-work")(15,"app-contact"),V(16,"footer")(17,"span"),X(18,"\xA9 2026 Rishabh Sahu \u2014 Made in Mumbai"),z(),V(19,"span"),X(20,"19.0760\xB0 N / 72.8777\xB0 E"),z(),V(21,"span"),X(22,"Built with craft, not templates"),z()()()),i&2&&(ye(10),Ot(r.marqueeItems))},dependencies:[I0,P0,R0,sy,oy,ay,cy,ly,hy],styles:["[_nghost-%COMP%]{display:block}main[_ngcontent-%COMP%]{display:block}.marquee[_ngcontent-%COMP%]{border-top:1px solid var(--line);border-bottom:1px solid var(--line);overflow:hidden;padding:1.5rem 0;background:var(--bg);position:relative;z-index:2}.marquee-track[_ngcontent-%COMP%]{display:flex;gap:4rem;white-space:nowrap;animation:_ngcontent-%COMP%_marquee 40s linear infinite;width:max-content}@keyframes _ngcontent-%COMP%_marquee{to{transform:translate(-50%)}}.marquee[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-family:Fraunces,serif;font-size:1.8rem;font-weight:300;font-style:italic;color:var(--dim)}.marquee[_ngcontent-%COMP%]   span.sep[_ngcontent-%COMP%]{color:var(--accent);font-style:normal}footer[_ngcontent-%COMP%]{padding:2.5rem;border-top:1px solid var(--line);display:flex;justify-content:space-between;align-items:center;font-family:JetBrains Mono,monospace;font-size:10px;color:var(--dim);letter-spacing:.25em;text-transform:uppercase;flex-wrap:wrap;gap:1rem;position:relative;z-index:2;background:var(--bg)}"],changeDetection:0})}}return n})();var py={providers:[n0({eventCoalescing:!0})]};"scrollRestoration"in history&&(history.scrollRestoration="manual");window.scrollTo(0,0);E0(fy,py).catch(n=>console.error(n));
