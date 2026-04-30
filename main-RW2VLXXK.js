var gx=Object.defineProperty,vx=Object.defineProperties;var yx=Object.getOwnPropertyDescriptors;var Gp=Object.getOwnPropertySymbols;var _x=Object.prototype.hasOwnProperty,xx=Object.prototype.propertyIsEnumerable;var Wp=(n,e,t)=>e in n?gx(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,it=(n,e)=>{for(var t in e||={})_x.call(e,t)&&Wp(n,t,e[t]);if(Gp)for(var t of Gp(e))xx.call(e,t)&&Wp(n,t,e[t]);return n},ut=(n,e)=>vx(n,yx(e));var aa=(n,e,t)=>new Promise((i,r)=>{var s=c=>{try{a(t.next(c))}catch(l){r(l)}},o=c=>{try{a(t.throw(c))}catch(l){r(l)}},a=c=>c.done?i(c.value):Promise.resolve(c.value).then(s,o);a((t=t.apply(n,e)).next())});function jp(n,e){return Object.is(n,e)}var Ot=null,ca=!1,la=1,On=Symbol("SIGNAL");function Ge(n){let e=Ot;return Ot=n,e}function $p(){return Ot}var ro={version:0,lastCleanEpoch:0,dirty:!1,producerNode:void 0,producerLastReadVersion:void 0,producerIndexOfThis:void 0,nextProducerIndex:0,liveConsumerNode:void 0,liveConsumerIndexOfThis:void 0,consumerAllowSignalWrites:!1,consumerIsAlwaysLive:!1,producerMustRecompute:()=>!1,producerRecomputeValue:()=>{},consumerMarkedDirty:()=>{},consumerOnSignalRead:()=>{}};function uu(n){if(ca)throw new Error("");if(Ot===null)return;Ot.consumerOnSignalRead(n);let e=Ot.nextProducerIndex++;if(ha(Ot),e<Ot.producerNode.length&&Ot.producerNode[e]!==n&&io(Ot)){let t=Ot.producerNode[e];fa(t,Ot.producerIndexOfThis[e])}Ot.producerNode[e]!==n&&(Ot.producerNode[e]=n,Ot.producerIndexOfThis[e]=io(Ot)?Zp(n,Ot,e):0),Ot.producerLastReadVersion[e]=n.version}function Mx(){la++}function qp(n){if(!(io(n)&&!n.dirty)&&!(!n.dirty&&n.lastCleanEpoch===la)){if(!n.producerMustRecompute(n)&&!fu(n)){n.dirty=!1,n.lastCleanEpoch=la;return}n.producerRecomputeValue(n),n.dirty=!1,n.lastCleanEpoch=la}}function Xp(n){if(n.liveConsumerNode===void 0)return;let e=ca;ca=!0;try{for(let t of n.liveConsumerNode)t.dirty||bx(t)}finally{ca=e}}function Yp(){return Ot?.consumerAllowSignalWrites!==!1}function bx(n){n.dirty=!0,Xp(n),n.consumerMarkedDirty?.(n)}function da(n){return n&&(n.nextProducerIndex=0),Ge(n)}function du(n,e){if(Ge(e),!(!n||n.producerNode===void 0||n.producerIndexOfThis===void 0||n.producerLastReadVersion===void 0)){if(io(n))for(let t=n.nextProducerIndex;t<n.producerNode.length;t++)fa(n.producerNode[t],n.producerIndexOfThis[t]);for(;n.producerNode.length>n.nextProducerIndex;)n.producerNode.pop(),n.producerLastReadVersion.pop(),n.producerIndexOfThis.pop()}}function fu(n){ha(n);for(let e=0;e<n.producerNode.length;e++){let t=n.producerNode[e],i=n.producerLastReadVersion[e];if(i!==t.version||(qp(t),i!==t.version))return!0}return!1}function hu(n){if(ha(n),io(n))for(let e=0;e<n.producerNode.length;e++)fa(n.producerNode[e],n.producerIndexOfThis[e]);n.producerNode.length=n.producerLastReadVersion.length=n.producerIndexOfThis.length=0,n.liveConsumerNode&&(n.liveConsumerNode.length=n.liveConsumerIndexOfThis.length=0)}function Zp(n,e,t){if(Jp(n),n.liveConsumerNode.length===0&&Kp(n))for(let i=0;i<n.producerNode.length;i++)n.producerIndexOfThis[i]=Zp(n.producerNode[i],n,i);return n.liveConsumerIndexOfThis.push(t),n.liveConsumerNode.push(e)-1}function fa(n,e){if(Jp(n),n.liveConsumerNode.length===1&&Kp(n))for(let i=0;i<n.producerNode.length;i++)fa(n.producerNode[i],n.producerIndexOfThis[i]);let t=n.liveConsumerNode.length-1;if(n.liveConsumerNode[e]=n.liveConsumerNode[t],n.liveConsumerIndexOfThis[e]=n.liveConsumerIndexOfThis[t],n.liveConsumerNode.length--,n.liveConsumerIndexOfThis.length--,e<n.liveConsumerNode.length){let i=n.liveConsumerIndexOfThis[e],r=n.liveConsumerNode[e];ha(r),r.producerIndexOfThis[i]=e}}function io(n){return n.consumerIsAlwaysLive||(n?.liveConsumerNode?.length??0)>0}function ha(n){n.producerNode??=[],n.producerIndexOfThis??=[],n.producerLastReadVersion??=[]}function Jp(n){n.liveConsumerNode??=[],n.liveConsumerIndexOfThis??=[]}function Kp(n){return n.producerNode!==void 0}function pu(n){let e=Object.create(wx);e.computation=n;let t=()=>{if(qp(e),uu(e),e.value===ua)throw e.error;return e.value};return t[On]=e,t}var cu=Symbol("UNSET"),lu=Symbol("COMPUTING"),ua=Symbol("ERRORED"),wx=ut(it({},ro),{value:cu,dirty:!0,error:null,equal:jp,producerMustRecompute(n){return n.value===cu||n.value===lu},producerRecomputeValue(n){if(n.value===lu)throw new Error("Detected cycle in computations.");let e=n.value;n.value=lu;let t=da(n),i;try{i=n.computation()}catch(r){i=ua,n.error=r}finally{du(n,t)}if(e!==cu&&e!==ua&&i!==ua&&n.equal(e,i)){n.value=e;return}n.value=i,n.version++}});function Ex(){throw new Error}var Qp=Ex;function em(){Qp()}function tm(n){Qp=n}var Sx=null;function nm(n){let e=Object.create(rm);e.value=n;let t=()=>(uu(e),e.value);return t[On]=e,t}function mu(n,e){Yp()||em(),n.equal(n.value,e)||(n.value=e,Cx(n))}function im(n,e){Yp()||em(),mu(n,e(n.value))}var rm=ut(it({},ro),{equal:jp,value:void 0});function Cx(n){n.version++,Mx(),Xp(n),Sx?.()}function rt(n){return typeof n=="function"}function pa(n){let t=n(i=>{Error.call(i),i.stack=new Error().stack});return t.prototype=Object.create(Error.prototype),t.prototype.constructor=t,t}var ma=pa(n=>function(t){n(this),this.message=t?`${t.length} errors occurred during unsubscription:
${t.map((i,r)=>`${r+1}) ${i.toString()}`).join(`
  `)}`:"",this.name="UnsubscriptionError",this.errors=t});function so(n,e){if(n){let t=n.indexOf(e);0<=t&&n.splice(t,1)}}var nn=class n{constructor(e){this.initialTeardown=e,this.closed=!1,this._parentage=null,this._finalizers=null}unsubscribe(){let e;if(!this.closed){this.closed=!0;let{_parentage:t}=this;if(t)if(this._parentage=null,Array.isArray(t))for(let s of t)s.remove(this);else t.remove(this);let{initialTeardown:i}=this;if(rt(i))try{i()}catch(s){e=s instanceof ma?s.errors:[s]}let{_finalizers:r}=this;if(r){this._finalizers=null;for(let s of r)try{sm(s)}catch(o){e=e??[],o instanceof ma?e=[...e,...o.errors]:e.push(o)}}if(e)throw new ma(e)}}add(e){var t;if(e&&e!==this)if(this.closed)sm(e);else{if(e instanceof n){if(e.closed||e._hasParent(this))return;e._addParent(this)}(this._finalizers=(t=this._finalizers)!==null&&t!==void 0?t:[]).push(e)}}_hasParent(e){let{_parentage:t}=this;return t===e||Array.isArray(t)&&t.includes(e)}_addParent(e){let{_parentage:t}=this;this._parentage=Array.isArray(t)?(t.push(e),t):t?[t,e]:e}_removeParent(e){let{_parentage:t}=this;t===e?this._parentage=null:Array.isArray(t)&&so(t,e)}remove(e){let{_finalizers:t}=this;t&&so(t,e),e instanceof n&&e._removeParent(this)}};nn.EMPTY=(()=>{let n=new nn;return n.closed=!0,n})();var gu=nn.EMPTY;function ga(n){return n instanceof nn||n&&"closed"in n&&rt(n.remove)&&rt(n.add)&&rt(n.unsubscribe)}function sm(n){rt(n)?n():n.unsubscribe()}var Fn={onUnhandledError:null,onStoppedNotification:null,Promise:void 0,useDeprecatedSynchronousErrorHandling:!1,useDeprecatedNextContext:!1};var Hr={setTimeout(n,e,...t){let{delegate:i}=Hr;return i?.setTimeout?i.setTimeout(n,e,...t):setTimeout(n,e,...t)},clearTimeout(n){let{delegate:e}=Hr;return(e?.clearTimeout||clearTimeout)(n)},delegate:void 0};function va(n){Hr.setTimeout(()=>{let{onUnhandledError:e}=Fn;if(e)e(n);else throw n})}function vu(){}var om=yu("C",void 0,void 0);function am(n){return yu("E",void 0,n)}function cm(n){return yu("N",n,void 0)}function yu(n,e,t){return{kind:n,value:e,error:t}}var ir=null;function Gr(n){if(Fn.useDeprecatedSynchronousErrorHandling){let e=!ir;if(e&&(ir={errorThrown:!1,error:null}),n(),e){let{errorThrown:t,error:i}=ir;if(ir=null,t)throw i}}else n()}function lm(n){Fn.useDeprecatedSynchronousErrorHandling&&ir&&(ir.errorThrown=!0,ir.error=n)}var rr=class extends nn{constructor(e){super(),this.isStopped=!1,e?(this.destination=e,ga(e)&&e.add(this)):this.destination=Ax}static create(e,t,i){return new Wr(e,t,i)}next(e){this.isStopped?xu(cm(e),this):this._next(e)}error(e){this.isStopped?xu(am(e),this):(this.isStopped=!0,this._error(e))}complete(){this.isStopped?xu(om,this):(this.isStopped=!0,this._complete())}unsubscribe(){this.closed||(this.isStopped=!0,super.unsubscribe(),this.destination=null)}_next(e){this.destination.next(e)}_error(e){try{this.destination.error(e)}finally{this.unsubscribe()}}_complete(){try{this.destination.complete()}finally{this.unsubscribe()}}},Dx=Function.prototype.bind;function _u(n,e){return Dx.call(n,e)}var Mu=class{constructor(e){this.partialObserver=e}next(e){let{partialObserver:t}=this;if(t.next)try{t.next(e)}catch(i){ya(i)}}error(e){let{partialObserver:t}=this;if(t.error)try{t.error(e)}catch(i){ya(i)}else ya(e)}complete(){let{partialObserver:e}=this;if(e.complete)try{e.complete()}catch(t){ya(t)}}},Wr=class extends rr{constructor(e,t,i){super();let r;if(rt(e)||!e)r={next:e??void 0,error:t??void 0,complete:i??void 0};else{let s;this&&Fn.useDeprecatedNextContext?(s=Object.create(e),s.unsubscribe=()=>this.unsubscribe(),r={next:e.next&&_u(e.next,s),error:e.error&&_u(e.error,s),complete:e.complete&&_u(e.complete,s)}):r=e}this.destination=new Mu(r)}};function ya(n){Fn.useDeprecatedSynchronousErrorHandling?lm(n):va(n)}function Tx(n){throw n}function xu(n,e){let{onStoppedNotification:t}=Fn;t&&Hr.setTimeout(()=>t(n,e))}var Ax={closed:!0,next:vu,error:Tx,complete:vu};var jr=typeof Symbol=="function"&&Symbol.observable||"@@observable";function um(n){return n}function dm(n){return n.length===0?um:n.length===1?n[0]:function(t){return n.reduce((i,r)=>r(i),t)}}var Vt=(()=>{class n{constructor(t){t&&(this._subscribe=t)}lift(t){let i=new n;return i.source=this,i.operator=t,i}subscribe(t,i,r){let s=Px(t)?t:new Wr(t,i,r);return Gr(()=>{let{operator:o,source:a}=this;s.add(o?o.call(s,a):a?this._subscribe(s):this._trySubscribe(s))}),s}_trySubscribe(t){try{return this._subscribe(t)}catch(i){t.error(i)}}forEach(t,i){return i=fm(i),new i((r,s)=>{let o=new Wr({next:a=>{try{t(a)}catch(c){s(c),o.unsubscribe()}},error:s,complete:r});this.subscribe(o)})}_subscribe(t){var i;return(i=this.source)===null||i===void 0?void 0:i.subscribe(t)}[jr](){return this}pipe(...t){return dm(t)(this)}toPromise(t){return t=fm(t),new t((i,r)=>{let s;this.subscribe(o=>s=o,o=>r(o),()=>i(s))})}}return n.create=e=>new n(e),n})();function fm(n){var e;return(e=n??Fn.Promise)!==null&&e!==void 0?e:Promise}function Ix(n){return n&&rt(n.next)&&rt(n.error)&&rt(n.complete)}function Px(n){return n&&n instanceof rr||Ix(n)&&ga(n)}function Rx(n){return rt(n?.lift)}function $r(n){return e=>{if(Rx(e))return e.lift(function(t){try{return n(t,this)}catch(i){this.error(i)}});throw new TypeError("Unable to lift unknown Observable type")}}function qr(n,e,t,i,r){return new bu(n,e,t,i,r)}var bu=class extends rr{constructor(e,t,i,r,s,o){super(e),this.onFinalize=s,this.shouldUnsubscribe=o,this._next=t?function(a){try{t(a)}catch(c){e.error(c)}}:super._next,this._error=r?function(a){try{r(a)}catch(c){e.error(c)}finally{this.unsubscribe()}}:super._error,this._complete=i?function(){try{i()}catch(a){e.error(a)}finally{this.unsubscribe()}}:super._complete}unsubscribe(){var e;if(!this.shouldUnsubscribe||this.shouldUnsubscribe()){let{closed:t}=this;super.unsubscribe(),!t&&((e=this.onFinalize)===null||e===void 0||e.call(this))}}};var hm=pa(n=>function(){n(this),this.name="ObjectUnsubscribedError",this.message="object unsubscribed"});var qn=(()=>{class n extends Vt{constructor(){super(),this.closed=!1,this.currentObservers=null,this.observers=[],this.isStopped=!1,this.hasError=!1,this.thrownError=null}lift(t){let i=new _a(this,this);return i.operator=t,i}_throwIfClosed(){if(this.closed)throw new hm}next(t){Gr(()=>{if(this._throwIfClosed(),!this.isStopped){this.currentObservers||(this.currentObservers=Array.from(this.observers));for(let i of this.currentObservers)i.next(t)}})}error(t){Gr(()=>{if(this._throwIfClosed(),!this.isStopped){this.hasError=this.isStopped=!0,this.thrownError=t;let{observers:i}=this;for(;i.length;)i.shift().error(t)}})}complete(){Gr(()=>{if(this._throwIfClosed(),!this.isStopped){this.isStopped=!0;let{observers:t}=this;for(;t.length;)t.shift().complete()}})}unsubscribe(){this.isStopped=this.closed=!0,this.observers=this.currentObservers=null}get observed(){var t;return((t=this.observers)===null||t===void 0?void 0:t.length)>0}_trySubscribe(t){return this._throwIfClosed(),super._trySubscribe(t)}_subscribe(t){return this._throwIfClosed(),this._checkFinalizedStatuses(t),this._innerSubscribe(t)}_innerSubscribe(t){let{hasError:i,isStopped:r,observers:s}=this;return i||r?gu:(this.currentObservers=null,s.push(t),new nn(()=>{this.currentObservers=null,so(s,t)}))}_checkFinalizedStatuses(t){let{hasError:i,thrownError:r,isStopped:s}=this;i?t.error(r):s&&t.complete()}asObservable(){let t=new Vt;return t.source=this,t}}return n.create=(e,t)=>new _a(e,t),n})(),_a=class extends qn{constructor(e,t){super(),this.destination=e,this.source=t}next(e){var t,i;(i=(t=this.destination)===null||t===void 0?void 0:t.next)===null||i===void 0||i.call(t,e)}error(e){var t,i;(i=(t=this.destination)===null||t===void 0?void 0:t.error)===null||i===void 0||i.call(t,e)}complete(){var e,t;(t=(e=this.destination)===null||e===void 0?void 0:e.complete)===null||t===void 0||t.call(e)}_subscribe(e){var t,i;return(i=(t=this.source)===null||t===void 0?void 0:t.subscribe(e))!==null&&i!==void 0?i:gu}};var oo=class extends qn{constructor(e){super(),this._value=e}get value(){return this.getValue()}_subscribe(e){let t=super._subscribe(e);return!t.closed&&e.next(this._value),t}getValue(){let{hasError:e,thrownError:t,_value:i}=this;if(e)throw t;return this._throwIfClosed(),i}next(e){super.next(this._value=e)}};function Nx(n){return n[n.length-1]}function pm(n){return rt(Nx(n))?n.pop():void 0}function gm(n,e,t,i){function r(s){return s instanceof t?s:new t(function(o){o(s)})}return new(t||(t=Promise))(function(s,o){function a(u){try{l(i.next(u))}catch(d){o(d)}}function c(u){try{l(i.throw(u))}catch(d){o(d)}}function l(u){u.done?s(u.value):r(u.value).then(a,c)}l((i=i.apply(n,e||[])).next())})}function mm(n){var e=typeof Symbol=="function"&&Symbol.iterator,t=e&&n[e],i=0;if(t)return t.call(n);if(n&&typeof n.length=="number")return{next:function(){return n&&i>=n.length&&(n=void 0),{value:n&&n[i++],done:!n}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}function sr(n){return this instanceof sr?(this.v=n,this):new sr(n)}function vm(n,e,t){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var i=t.apply(n,e||[]),r,s=[];return r=Object.create((typeof AsyncIterator=="function"?AsyncIterator:Object).prototype),a("next"),a("throw"),a("return",o),r[Symbol.asyncIterator]=function(){return this},r;function o(h){return function(g){return Promise.resolve(g).then(h,d)}}function a(h,g){i[h]&&(r[h]=function(v){return new Promise(function(m,p){s.push([h,v,m,p])>1||c(h,v)})},g&&(r[h]=g(r[h])))}function c(h,g){try{l(i[h](g))}catch(v){f(s[0][3],v)}}function l(h){h.value instanceof sr?Promise.resolve(h.value.v).then(u,d):f(s[0][2],h)}function u(h){c("next",h)}function d(h){c("throw",h)}function f(h,g){h(g),s.shift(),s.length&&c(s[0][0],s[0][1])}}function ym(n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var e=n[Symbol.asyncIterator],t;return e?e.call(n):(n=typeof mm=="function"?mm(n):n[Symbol.iterator](),t={},i("next"),i("throw"),i("return"),t[Symbol.asyncIterator]=function(){return this},t);function i(s){t[s]=n[s]&&function(o){return new Promise(function(a,c){o=n[s](o),r(a,c,o.done,o.value)})}}function r(s,o,a,c){Promise.resolve(c).then(function(l){s({value:l,done:a})},o)}}var xa=n=>n&&typeof n.length=="number"&&typeof n!="function";function Ma(n){return rt(n?.then)}function ba(n){return rt(n[jr])}function wa(n){return Symbol.asyncIterator&&rt(n?.[Symbol.asyncIterator])}function Ea(n){return new TypeError(`You provided ${n!==null&&typeof n=="object"?"an invalid object":`'${n}'`} where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.`)}function Ox(){return typeof Symbol!="function"||!Symbol.iterator?"@@iterator":Symbol.iterator}var Sa=Ox();function Ca(n){return rt(n?.[Sa])}function Da(n){return vm(this,arguments,function*(){let t=n.getReader();try{for(;;){let{value:i,done:r}=yield sr(t.read());if(r)return yield sr(void 0);yield yield sr(i)}}finally{t.releaseLock()}})}function Ta(n){return rt(n?.getReader)}function Ii(n){if(n instanceof Vt)return n;if(n!=null){if(ba(n))return Fx(n);if(xa(n))return Lx(n);if(Ma(n))return kx(n);if(wa(n))return _m(n);if(Ca(n))return Ux(n);if(Ta(n))return Vx(n)}throw Ea(n)}function Fx(n){return new Vt(e=>{let t=n[jr]();if(rt(t.subscribe))return t.subscribe(e);throw new TypeError("Provided object does not correctly implement Symbol.observable")})}function Lx(n){return new Vt(e=>{for(let t=0;t<n.length&&!e.closed;t++)e.next(n[t]);e.complete()})}function kx(n){return new Vt(e=>{n.then(t=>{e.closed||(e.next(t),e.complete())},t=>e.error(t)).then(null,va)})}function Ux(n){return new Vt(e=>{for(let t of n)if(e.next(t),e.closed)return;e.complete()})}function _m(n){return new Vt(e=>{Bx(n,e).catch(t=>e.error(t))})}function Vx(n){return _m(Da(n))}function Bx(n,e){var t,i,r,s;return gm(this,void 0,void 0,function*(){try{for(t=ym(n);i=yield t.next(),!i.done;){let o=i.value;if(e.next(o),e.closed)return}}catch(o){r={error:o}}finally{try{i&&!i.done&&(s=t.return)&&(yield s.call(t))}finally{if(r)throw r.error}}e.complete()})}function Xn(n,e,t,i=0,r=!1){let s=e.schedule(function(){t(),r?n.add(this.schedule(null,i)):this.unsubscribe()},i);if(n.add(s),!r)return s}function Aa(n,e=0){return $r((t,i)=>{t.subscribe(qr(i,r=>Xn(i,n,()=>i.next(r),e),()=>Xn(i,n,()=>i.complete(),e),r=>Xn(i,n,()=>i.error(r),e)))})}function Ia(n,e=0){return $r((t,i)=>{i.add(n.schedule(()=>t.subscribe(i),e))})}function xm(n,e){return Ii(n).pipe(Ia(e),Aa(e))}function Mm(n,e){return Ii(n).pipe(Ia(e),Aa(e))}function bm(n,e){return new Vt(t=>{let i=0;return e.schedule(function(){i===n.length?t.complete():(t.next(n[i++]),t.closed||this.schedule())})})}function wm(n,e){return new Vt(t=>{let i;return Xn(t,e,()=>{i=n[Sa](),Xn(t,e,()=>{let r,s;try{({value:r,done:s}=i.next())}catch(o){t.error(o);return}s?t.complete():t.next(r)},0,!0)}),()=>rt(i?.return)&&i.return()})}function Pa(n,e){if(!n)throw new Error("Iterable cannot be null");return new Vt(t=>{Xn(t,e,()=>{let i=n[Symbol.asyncIterator]();Xn(t,e,()=>{i.next().then(r=>{r.done?t.complete():t.next(r.value)})},0,!0)})})}function Em(n,e){return Pa(Da(n),e)}function Sm(n,e){if(n!=null){if(ba(n))return xm(n,e);if(xa(n))return bm(n,e);if(Ma(n))return Mm(n,e);if(wa(n))return Pa(n,e);if(Ca(n))return wm(n,e);if(Ta(n))return Em(n,e)}throw Ea(n)}function wu(n,e){return e?Sm(n,e):Ii(n)}function or(n,e){return $r((t,i)=>{let r=0;t.subscribe(qr(i,s=>{i.next(n.call(e,s,r++))}))})}var{isArray:zx}=Array;function Hx(n,e){return zx(e)?n(...e):n(e)}function Cm(n){return or(e=>Hx(n,e))}var{isArray:Gx}=Array,{getPrototypeOf:Wx,prototype:jx,keys:$x}=Object;function Dm(n){if(n.length===1){let e=n[0];if(Gx(e))return{args:e,keys:null};if(qx(e)){let t=$x(e);return{args:t.map(i=>e[i]),keys:t}}}return{args:n,keys:null}}function qx(n){return n&&typeof n=="object"&&Wx(n)===jx}function Tm(n,e){return n.reduce((t,i,r)=>(t[i]=e[r],t),{})}function Eu(...n){let e=pm(n),{args:t,keys:i}=Dm(n),r=new Vt(s=>{let{length:o}=t;if(!o){s.complete();return}let a=new Array(o),c=o,l=o;for(let u=0;u<o;u++){let d=!1;Ii(t[u]).subscribe(qr(s,f=>{d||(d=!0,l--),a[u]=f},()=>c--,void 0,()=>{(!c||!d)&&(l||s.next(i?Tm(i,a):a),s.complete())}))}});return e?r.pipe(Cm(e)):r}var mg="https://g.co/ng/security#xss",Ve=class extends Error{constructor(e,t){super(Ud(e,t)),this.code=e}};function Ud(n,e){return`${`NG0${Math.abs(n)}`}${e?": "+e:""}`}function Mo(n){return{toString:n}.toString()}var Ra="__parameters__";function Xx(n){return function(...t){if(n){let i=n(...t);for(let r in i)this[r]=i[r]}}}function gg(n,e,t){return Mo(()=>{let i=Xx(e);function r(...s){if(this instanceof r)return i.apply(this,s),this;let o=new r(...s);return a.annotation=o,a;function a(c,l,u){let d=c.hasOwnProperty(Ra)?c[Ra]:Object.defineProperty(c,Ra,{value:[]})[Ra];for(;d.length<=u;)d.push(null);return(d[u]=d[u]||[]).push(o),c}}return t&&(r.prototype=Object.create(t.prototype)),r.prototype.ngMetadataName=n,r.annotationCls=r,r})}function pt(n){for(let e in n)if(n[e]===pt)return e;throw Error("Could not find renamed property on target object.")}function Yx(n,e){for(let t in e)e.hasOwnProperty(t)&&!n.hasOwnProperty(t)&&(n[t]=e[t])}function _n(n){if(typeof n=="string")return n;if(Array.isArray(n))return"["+n.map(_n).join(", ")+"]";if(n==null)return""+n;if(n.overriddenName)return`${n.overriddenName}`;if(n.name)return`${n.name}`;let e=n.toString();if(e==null)return""+e;let t=e.indexOf(`
`);return t===-1?e:e.substring(0,t)}function Am(n,e){return n==null||n===""?e===null?"":e:e==null||e===""?n:n+" "+e}var Zx=pt({__forward_ref__:pt});function yr(n){return n.__forward_ref__=yr,n.toString=function(){return _n(this())},n}function rn(n){return vg(n)?n():n}function vg(n){return typeof n=="function"&&n.hasOwnProperty(Zx)&&n.__forward_ref__===yr}function yt(n){return{token:n.token,providedIn:n.providedIn||null,factory:n.factory,value:void 0}}function fs(n){return{providers:n.providers||[],imports:n.imports||[]}}function Vd(n){return Im(n,yg)||Im(n,_g)}function Im(n,e){return n.hasOwnProperty(e)?n[e]:null}function Jx(n){let e=n&&(n[yg]||n[_g]);return e||null}function Pm(n){return n&&(n.hasOwnProperty(Rm)||n.hasOwnProperty(Kx))?n[Rm]:null}var yg=pt({\u0275prov:pt}),Rm=pt({\u0275inj:pt}),_g=pt({ngInjectableDef:pt}),Kx=pt({ngInjectorDef:pt}),qe=class{constructor(e,t){this._desc=e,this.ngMetadataName="InjectionToken",this.\u0275prov=void 0,typeof t=="number"?this.__NG_ELEMENT_ID__=t:t!==void 0&&(this.\u0275prov=yt({token:this,providedIn:t.providedIn||"root",factory:t.factory}))}get multi(){return this}toString(){return`InjectionToken ${this._desc}`}};function xg(n){return n&&!!n.\u0275providers}var Qx=pt({\u0275cmp:pt}),eM=pt({\u0275dir:pt}),tM=pt({\u0275pipe:pt});var Ha=pt({\u0275fac:pt}),lo=pt({__NG_ELEMENT_ID__:pt}),Nm=pt({__NG_ENV_ID__:pt});function fc(n){return typeof n=="string"?n:n==null?"":String(n)}function nM(n){return typeof n=="function"?n.name||n.toString():typeof n=="object"&&n!=null&&typeof n.type=="function"?n.type.name||n.type.toString():fc(n)}function iM(n,e){let t=e?`. Dependency path: ${e.join(" > ")} > ${n}`:"";throw new Ve(-200,n)}function Bd(n,e){throw new Ve(-201,!1)}var $e=function(n){return n[n.Default=0]="Default",n[n.Host=1]="Host",n[n.Self=2]="Self",n[n.SkipSelf=4]="SkipSelf",n[n.Optional=8]="Optional",n}($e||{}),Vu;function Mg(){return Vu}function Yn(n){let e=Vu;return Vu=n,e}function bg(n,e,t){let i=Vd(n);if(i&&i.providedIn=="root")return i.value===void 0?i.value=i.factory():i.value;if(t&$e.Optional)return null;if(e!==void 0)return e;Bd(n,"Injector")}var rM={},uo=rM,Bu="__NG_DI_FLAG__",Ga="ngTempTokenPath",sM="ngTokenPath",oM=/\n/gm,aM="\u0275",Om="__source",Kr;function cM(){return Kr}function Xr(n){let e=Kr;return Kr=n,e}function lM(n,e=$e.Default){if(Kr===void 0)throw new Ve(-203,!1);return Kr===null?bg(n,void 0,e):Kr.get(n,e&$e.Optional?null:void 0,e)}function dt(n,e=$e.Default){return(Mg()||lM)(rn(n),e)}function Ue(n,e=$e.Default){return dt(n,hc(e))}function hc(n){return typeof n>"u"||typeof n=="number"?n:0|(n.optional&&8)|(n.host&&1)|(n.self&&2)|(n.skipSelf&&4)}function zu(n){let e=[];for(let t=0;t<n.length;t++){let i=rn(n[t]);if(Array.isArray(i)){if(i.length===0)throw new Ve(900,!1);let r,s=$e.Default;for(let o=0;o<i.length;o++){let a=i[o],c=uM(a);typeof c=="number"?c===-1?r=a.token:s|=c:r=a}e.push(dt(r,s))}else e.push(dt(i))}return e}function wg(n,e){return n[Bu]=e,n.prototype[Bu]=e,n}function uM(n){return n[Bu]}function dM(n,e,t,i){let r=n[Ga];throw e[Om]&&r.unshift(e[Om]),n.message=fM(`
`+n.message,r,t,i),n[sM]=r,n[Ga]=null,n}function fM(n,e,t,i=null){n=n&&n.charAt(0)===`
`&&n.charAt(1)==aM?n.slice(2):n;let r=_n(e);if(Array.isArray(e))r=e.map(_n).join(" -> ");else if(typeof e=="object"){let s=[];for(let o in e)if(e.hasOwnProperty(o)){let a=e[o];s.push(o+":"+(typeof a=="string"?JSON.stringify(a):_n(a)))}r=`{${s.join(", ")}}`}return`${t}${i?"("+i+")":""}[${r}]: ${n.replace(oM,`
  `)}`}var Eg=wg(gg("Optional"),8);var hM=wg(gg("SkipSelf"),4);function es(n,e){let t=n.hasOwnProperty(Ha);return t?n[Ha]:null}function pM(n,e,t){if(n.length!==e.length)return!1;for(let i=0;i<n.length;i++){let r=n[i],s=e[i];if(t&&(r=t(r),s=t(s)),s!==r)return!1}return!0}function mM(n){return n.flat(Number.POSITIVE_INFINITY)}function zd(n,e){n.forEach(t=>Array.isArray(t)?zd(t,e):e(t))}function Sg(n,e,t){e>=n.length?n.push(t):n.splice(e,0,t)}function Wa(n,e){return e>=n.length-1?n.pop():n.splice(e,1)[0]}function gM(n,e,t,i){let r=n.length;if(r==e)n.push(t,i);else if(r===1)n.push(i,n[0]),n[0]=t;else{for(r--,n.push(n[r-1],n[r]);r>e;){let s=r-2;n[r]=n[s],r--}n[e]=t,n[e+1]=i}}function vM(n,e,t){let i=bo(n,e);return i>=0?n[i|1]=t:(i=~i,gM(n,i,e,t)),i}function Su(n,e){let t=bo(n,e);if(t>=0)return n[t|1]}function bo(n,e){return yM(n,e,1)}function yM(n,e,t){let i=0,r=n.length>>t;for(;r!==i;){let s=i+(r-i>>1),o=n[s<<t];if(e===o)return s<<t;o>e?r=s:i=s+1}return~(r<<t)}var ts={},yn=[],fo=new qe(""),Cg=new qe("",-1),Dg=new qe(""),ja=class{get(e,t=uo){if(t===uo){let i=new Error(`NullInjectorError: No provider for ${_n(e)}!`);throw i.name="NullInjectorError",i}return t}},Tg=function(n){return n[n.OnPush=0]="OnPush",n[n.Default=1]="Default",n}(Tg||{}),Kn=function(n){return n[n.Emulated=0]="Emulated",n[n.None=2]="None",n[n.ShadowDom=3]="ShadowDom",n}(Kn||{}),Ni=function(n){return n[n.None=0]="None",n[n.SignalBased=1]="SignalBased",n[n.HasDecoratorInputTransform=2]="HasDecoratorInputTransform",n}(Ni||{});function _M(n,e,t){let i=n.length;for(;;){let r=n.indexOf(e,t);if(r===-1)return r;if(r===0||n.charCodeAt(r-1)<=32){let s=e.length;if(r+s===i||n.charCodeAt(r+s)<=32)return r}t=r+1}}function Hu(n,e,t){let i=0;for(;i<t.length;){let r=t[i];if(typeof r=="number"){if(r!==0)break;i++;let s=t[i++],o=t[i++],a=t[i++];n.setAttribute(e,o,a,s)}else{let s=r,o=t[++i];MM(s)?n.setProperty(e,s,o):n.setAttribute(e,s,o),i++}}return i}function xM(n){return n===3||n===4||n===6}function MM(n){return n.charCodeAt(0)===64}function ho(n,e){if(!(e===null||e.length===0))if(n===null||n.length===0)n=e.slice();else{let t=-1;for(let i=0;i<e.length;i++){let r=e[i];typeof r=="number"?t=r:t===0||(t===-1||t===2?Fm(n,t,r,null,e[++i]):Fm(n,t,r,null,null))}}return n}function Fm(n,e,t,i,r){let s=0,o=n.length;if(e===-1)o=-1;else for(;s<n.length;){let a=n[s++];if(typeof a=="number"){if(a===e){o=-1;break}else if(a>e){o=s-1;break}}}for(;s<n.length;){let a=n[s];if(typeof a=="number")break;if(a===t){if(i===null){r!==null&&(n[s+1]=r);return}else if(i===n[s+1]){n[s+2]=r;return}}s++,i!==null&&s++,r!==null&&s++}o!==-1&&(n.splice(o,0,e),s=o+1),n.splice(s++,0,t),i!==null&&n.splice(s++,0,i),r!==null&&n.splice(s++,0,r)}var Ag="ng-template";function bM(n,e,t,i){let r=0;if(i){for(;r<e.length&&typeof e[r]=="string";r+=2)if(e[r]==="class"&&_M(e[r+1].toLowerCase(),t,0)!==-1)return!0}else if(Hd(n))return!1;if(r=e.indexOf(1,r),r>-1){let s;for(;++r<e.length&&typeof(s=e[r])=="string";)if(s.toLowerCase()===t)return!0}return!1}function Hd(n){return n.type===4&&n.value!==Ag}function wM(n,e,t){let i=n.type===4&&!t?Ag:n.value;return e===i}function EM(n,e,t){let i=4,r=n.attrs,s=r!==null?DM(r):0,o=!1;for(let a=0;a<e.length;a++){let c=e[a];if(typeof c=="number"){if(!o&&!Ln(i)&&!Ln(c))return!1;if(o&&Ln(c))continue;o=!1,i=c|i&1;continue}if(!o)if(i&4){if(i=2|i&1,c!==""&&!wM(n,c,t)||c===""&&e.length===1){if(Ln(i))return!1;o=!0}}else if(i&8){if(r===null||!bM(n,r,c,t)){if(Ln(i))return!1;o=!0}}else{let l=e[++a],u=SM(c,r,Hd(n),t);if(u===-1){if(Ln(i))return!1;o=!0;continue}if(l!==""){let d;if(u>s?d="":d=r[u+1].toLowerCase(),i&2&&l!==d){if(Ln(i))return!1;o=!0}}}}return Ln(i)||o}function Ln(n){return(n&1)===0}function SM(n,e,t,i){if(e===null)return-1;let r=0;if(i||!t){let s=!1;for(;r<e.length;){let o=e[r];if(o===n)return r;if(o===3||o===6)s=!0;else if(o===1||o===2){let a=e[++r];for(;typeof a=="string";)a=e[++r];continue}else{if(o===4)break;if(o===0){r+=4;continue}}r+=s?1:2}return-1}else return TM(e,n)}function CM(n,e,t=!1){for(let i=0;i<e.length;i++)if(EM(n,e[i],t))return!0;return!1}function DM(n){for(let e=0;e<n.length;e++){let t=n[e];if(xM(t))return e}return n.length}function TM(n,e){let t=n.indexOf(4);if(t>-1)for(t++;t<n.length;){let i=n[t];if(typeof i=="number")return-1;if(i===e)return t;t++}return-1}function Lm(n,e){return n?":not("+e.trim()+")":e}function AM(n){let e=n[0],t=1,i=2,r="",s=!1;for(;t<n.length;){let o=n[t];if(typeof o=="string")if(i&2){let a=n[++t];r+="["+o+(a.length>0?'="'+a+'"':"")+"]"}else i&8?r+="."+o:i&4&&(r+=" "+o);else r!==""&&!Ln(o)&&(e+=Lm(s,r),r=""),i=o,s=s||!Ln(i);t++}return r!==""&&(e+=Lm(s,r)),e}function IM(n){return n.map(AM).join(",")}function PM(n){let e=[],t=[],i=1,r=2;for(;i<n.length;){let s=n[i];if(typeof s=="string")r===2?s!==""&&e.push(s,n[++i]):r===8&&t.push(s);else{if(!Ln(r))break;r=s}i++}return{attrs:e,classes:t}}function Pt(n){return Mo(()=>{let e=Rg(n),t=ut(it({},e),{decls:n.decls,vars:n.vars,template:n.template,consts:n.consts||null,ngContentSelectors:n.ngContentSelectors,onPush:n.changeDetection===Tg.OnPush,directiveDefs:null,pipeDefs:null,dependencies:e.standalone&&n.dependencies||null,getStandaloneInjector:null,signals:n.signals??!1,data:n.data||{},encapsulation:n.encapsulation||Kn.Emulated,styles:n.styles||yn,_:null,schemas:n.schemas||null,tView:null,id:""});Ng(t);let i=n.dependencies;return t.directiveDefs=Um(i,!1),t.pipeDefs=Um(i,!0),t.id=FM(t),t})}function RM(n){return ns(n)||Ig(n)}function NM(n){return n!==null}function hs(n){return Mo(()=>({type:n.type,bootstrap:n.bootstrap||yn,declarations:n.declarations||yn,imports:n.imports||yn,exports:n.exports||yn,transitiveCompileScopes:null,schemas:n.schemas||null,id:n.id||null}))}function km(n,e){if(n==null)return ts;let t={};for(let i in n)if(n.hasOwnProperty(i)){let r=n[i],s,o,a=Ni.None;Array.isArray(r)?(a=r[0],s=r[1],o=r[2]??s):(s=r,o=r),e?(t[s]=a!==Ni.None?[i,a]:i,e[s]=o):t[s]=i}return t}function ln(n){return Mo(()=>{let e=Rg(n);return Ng(e),e})}function ns(n){return n[Qx]||null}function Ig(n){return n[eM]||null}function Pg(n){return n[tM]||null}function OM(n){let e=ns(n)||Ig(n)||Pg(n);return e!==null?e.standalone:!1}function Rg(n){let e={};return{type:n.type,providersResolver:null,factory:null,hostBindings:n.hostBindings||null,hostVars:n.hostVars||0,hostAttrs:n.hostAttrs||null,contentQueries:n.contentQueries||null,declaredInputs:e,inputTransforms:null,inputConfig:n.inputs||ts,exportAs:n.exportAs||null,standalone:n.standalone===!0,signals:n.signals===!0,selectors:n.selectors||yn,viewQuery:n.viewQuery||null,features:n.features||null,setInput:null,findHostDirectiveDefs:null,hostDirectives:null,inputs:km(n.inputs,e),outputs:km(n.outputs),debugInfo:null}}function Ng(n){n.features?.forEach(e=>e(n))}function Um(n,e){if(!n)return null;let t=e?Pg:RM;return()=>(typeof n=="function"?n():n).map(i=>t(i)).filter(NM)}function FM(n){let e=0,t=[n.selectors,n.ngContentSelectors,n.hostVars,n.hostAttrs,n.consts,n.vars,n.decls,n.encapsulation,n.standalone,n.signals,n.exportAs,JSON.stringify(n.inputs),JSON.stringify(n.outputs),Object.getOwnPropertyNames(n.type.prototype),!!n.contentQueries,!!n.viewQuery].join("|");for(let r of t)e=Math.imul(31,e)+r.charCodeAt(0)<<0;return e+=2147483648,"c"+e}function Og(n){return{\u0275providers:n}}function LM(...n){return{\u0275providers:Fg(!0,n),\u0275fromNgModule:!0}}function Fg(n,...e){let t=[],i=new Set,r,s=o=>{t.push(o)};return zd(e,o=>{let a=o;Gu(a,s,[],i)&&(r||=[],r.push(a))}),r!==void 0&&Lg(r,s),t}function Lg(n,e){for(let t=0;t<n.length;t++){let{ngModule:i,providers:r}=n[t];Gd(r,s=>{e(s,i)})}}function Gu(n,e,t,i){if(n=rn(n),!n)return!1;let r=null,s=Pm(n),o=!s&&ns(n);if(!s&&!o){let c=n.ngModule;if(s=Pm(c),s)r=c;else return!1}else{if(o&&!o.standalone)return!1;r=n}let a=i.has(r);if(o){if(a)return!1;if(i.add(r),o.dependencies){let c=typeof o.dependencies=="function"?o.dependencies():o.dependencies;for(let l of c)Gu(l,e,t,i)}}else if(s){if(s.imports!=null&&!a){i.add(r);let l;try{zd(s.imports,u=>{Gu(u,e,t,i)&&(l||=[],l.push(u))})}finally{}l!==void 0&&Lg(l,e)}if(!a){let l=es(r)||(()=>new r);e({provide:r,useFactory:l,deps:yn},r),e({provide:Dg,useValue:r,multi:!0},r),e({provide:fo,useValue:()=>dt(r),multi:!0},r)}let c=s.providers;if(c!=null&&!a){let l=n;Gd(c,u=>{e(u,l)})}}else return!1;return r!==n&&n.providers!==void 0}function Gd(n,e){for(let t of n)xg(t)&&(t=t.\u0275providers),Array.isArray(t)?Gd(t,e):e(t)}var kM=pt({provide:String,useValue:pt});function kg(n){return n!==null&&typeof n=="object"&&kM in n}function UM(n){return!!(n&&n.useExisting)}function VM(n){return!!(n&&n.useFactory)}function is(n){return typeof n=="function"}function BM(n){return!!n.useClass}var pc=new qe(""),La={},zM={},Cu;function Wd(){return Cu===void 0&&(Cu=new ja),Cu}var Oi=class{},$a=class extends Oi{get destroyed(){return this._destroyed}constructor(e,t,i,r){super(),this.parent=t,this.source=i,this.scopes=r,this.records=new Map,this._ngOnDestroyHooks=new Set,this._onDestroyHooks=[],this._destroyed=!1,ju(e,o=>this.processProvider(o)),this.records.set(Cg,Yr(void 0,this)),r.has("environment")&&this.records.set(Oi,Yr(void 0,this));let s=this.records.get(pc);s!=null&&typeof s.value=="string"&&this.scopes.add(s.value),this.injectorDefTypes=new Set(this.get(Dg,yn,$e.Self))}destroy(){this.assertNotDestroyed(),this._destroyed=!0;let e=Ge(null);try{for(let i of this._ngOnDestroyHooks)i.ngOnDestroy();let t=this._onDestroyHooks;this._onDestroyHooks=[];for(let i of t)i()}finally{this.records.clear(),this._ngOnDestroyHooks.clear(),this.injectorDefTypes.clear(),Ge(e)}}onDestroy(e){return this.assertNotDestroyed(),this._onDestroyHooks.push(e),()=>this.removeOnDestroy(e)}runInContext(e){this.assertNotDestroyed();let t=Xr(this),i=Yn(void 0),r;try{return e()}finally{Xr(t),Yn(i)}}get(e,t=uo,i=$e.Default){if(this.assertNotDestroyed(),e.hasOwnProperty(Nm))return e[Nm](this);i=hc(i);let r,s=Xr(this),o=Yn(void 0);try{if(!(i&$e.SkipSelf)){let c=this.records.get(e);if(c===void 0){let l=$M(e)&&Vd(e);l&&this.injectableDefInScope(l)?c=Yr(Wu(e),La):c=null,this.records.set(e,c)}if(c!=null)return this.hydrate(e,c)}let a=i&$e.Self?Wd():this.parent;return t=i&$e.Optional&&t===uo?null:t,a.get(e,t)}catch(a){if(a.name==="NullInjectorError"){if((a[Ga]=a[Ga]||[]).unshift(_n(e)),s)throw a;return dM(a,e,"R3InjectorError",this.source)}else throw a}finally{Yn(o),Xr(s)}}resolveInjectorInitializers(){let e=Ge(null),t=Xr(this),i=Yn(void 0),r;try{let s=this.get(fo,yn,$e.Self);for(let o of s)o()}finally{Xr(t),Yn(i),Ge(e)}}toString(){let e=[],t=this.records;for(let i of t.keys())e.push(_n(i));return`R3Injector[${e.join(", ")}]`}assertNotDestroyed(){if(this._destroyed)throw new Ve(205,!1)}processProvider(e){e=rn(e);let t=is(e)?e:rn(e&&e.provide),i=GM(e);if(!is(e)&&e.multi===!0){let r=this.records.get(t);r||(r=Yr(void 0,La,!0),r.factory=()=>zu(r.multi),this.records.set(t,r)),t=e,r.multi.push(e)}this.records.set(t,i)}hydrate(e,t){let i=Ge(null);try{return t.value===La&&(t.value=zM,t.value=t.factory()),typeof t.value=="object"&&t.value&&jM(t.value)&&this._ngOnDestroyHooks.add(t.value),t.value}finally{Ge(i)}}injectableDefInScope(e){if(!e.providedIn)return!1;let t=rn(e.providedIn);return typeof t=="string"?t==="any"||this.scopes.has(t):this.injectorDefTypes.has(t)}removeOnDestroy(e){let t=this._onDestroyHooks.indexOf(e);t!==-1&&this._onDestroyHooks.splice(t,1)}};function Wu(n){let e=Vd(n),t=e!==null?e.factory:es(n);if(t!==null)return t;if(n instanceof qe)throw new Ve(204,!1);if(n instanceof Function)return HM(n);throw new Ve(204,!1)}function HM(n){if(n.length>0)throw new Ve(204,!1);let t=Jx(n);return t!==null?()=>t.factory(n):()=>new n}function GM(n){if(kg(n))return Yr(void 0,n.useValue);{let e=Ug(n);return Yr(e,La)}}function Ug(n,e,t){let i;if(is(n)){let r=rn(n);return es(r)||Wu(r)}else if(kg(n))i=()=>rn(n.useValue);else if(VM(n))i=()=>n.useFactory(...zu(n.deps||[]));else if(UM(n))i=()=>dt(rn(n.useExisting));else{let r=rn(n&&(n.useClass||n.provide));if(WM(n))i=()=>new r(...zu(n.deps));else return es(r)||Wu(r)}return i}function Yr(n,e,t=!1){return{factory:n,value:e,multi:t?[]:void 0}}function WM(n){return!!n.deps}function jM(n){return n!==null&&typeof n=="object"&&typeof n.ngOnDestroy=="function"}function $M(n){return typeof n=="function"||typeof n=="object"&&n instanceof qe}function ju(n,e){for(let t of n)Array.isArray(t)?ju(t,e):t&&xg(t)?ju(t.\u0275providers,e):e(t)}function qM(){return Mg()!==void 0||cM()!=null}function XM(n){return typeof n=="function"}var di=0,Re=1,Ae=2,Jt=3,kn=4,Vn=5,po=6,qa=7,Yt=8,rs=9,Qn=10,Ft=11,mo=12,Vm=13,ps=14,Un=15,cr=16,Zr=17,ci=18,mc=19,Vg=20,Pi=21,Du=22,Cn=23,Dn=25,Bg=1;var lr=7,Xa=8,ss=9,Zt=10,Ya=function(n){return n[n.None=0]="None",n[n.HasTransplantedViews=2]="HasTransplantedViews",n}(Ya||{});function Ri(n){return Array.isArray(n)&&typeof n[Bg]=="object"}function fi(n){return Array.isArray(n)&&n[Bg]===!0}function zg(n){return(n.flags&4)!==0}function gc(n){return n.componentOffset>-1}function jd(n){return(n.flags&1)===1}function Fi(n){return!!n.template}function $u(n){return(n[Ae]&512)!==0}var qu=class{constructor(e,t,i){this.previousValue=e,this.currentValue=t,this.firstChange=i}isFirstChange(){return this.firstChange}};function Hg(n,e,t,i){e!==null?e.applyValueToInputSignal(e,i):n[t]=i}function wo(){return Gg}function Gg(n){return n.type.prototype.ngOnChanges&&(n.setInput=ZM),YM}wo.ngInherit=!0;function YM(){let n=jg(this),e=n?.current;if(e){let t=n.previous;if(t===ts)n.previous=e;else for(let i in e)t[i]=e[i];n.current=null,this.ngOnChanges(e)}}function ZM(n,e,t,i,r){let s=this.declaredInputs[i],o=jg(n)||JM(n,{previous:ts,current:null}),a=o.current||(o.current={}),c=o.previous,l=c[s];a[s]=new qu(l&&l.currentValue,t,c===ts),Hg(n,e,r,t)}var Wg="__ngSimpleChanges__";function jg(n){return n[Wg]||null}function JM(n,e){return n[Wg]=e}var Bm=null;var Zn=function(n,e,t){Bm?.(n,e,t)},$g="svg",KM="math";function ei(n){for(;Array.isArray(n);)n=n[di];return n}function qg(n,e){return ei(e[n])}function Tn(n,e){return ei(e[n.index])}function $d(n,e){return n.data[e]}function QM(n,e){return n[e]}function Li(n,e){let t=e[n];return Ri(t)?t:t[di]}function qd(n){return(n[Ae]&128)===128}function eb(n){return fi(n[Jt])}function os(n,e){return e==null?null:n[e]}function Xg(n){n[Zr]=0}function Yg(n){n[Ae]&1024||(n[Ae]|=1024,qd(n)&&yc(n))}function tb(n,e){for(;n>0;)e=e[ps],n--;return e}function vc(n){return!!(n[Ae]&9216||n[Cn]?.dirty)}function Xu(n){n[Qn].changeDetectionScheduler?.notify(8),n[Ae]&64&&(n[Ae]|=1024),vc(n)&&yc(n)}function yc(n){n[Qn].changeDetectionScheduler?.notify(0);let e=ur(n);for(;e!==null&&!(e[Ae]&8192||(e[Ae]|=8192,!qd(e)));)e=ur(e)}function Zg(n,e){if((n[Ae]&256)===256)throw new Ve(911,!1);n[Pi]===null&&(n[Pi]=[]),n[Pi].push(e)}function nb(n,e){if(n[Pi]===null)return;let t=n[Pi].indexOf(e);t!==-1&&n[Pi].splice(t,1)}function ur(n){let e=n[Jt];return fi(e)?e[Jt]:e}var Le={lFrame:r0(null),bindingsEnabled:!0,skipHydrationRootTNode:null};var Jg=!1;function ib(){return Le.lFrame.elementDepthCount}function rb(){Le.lFrame.elementDepthCount++}function sb(){Le.lFrame.elementDepthCount--}function Kg(){return Le.bindingsEnabled}function ob(){return Le.skipHydrationRootTNode!==null}function ab(n){return Le.skipHydrationRootTNode===n}function cb(){Le.skipHydrationRootTNode=null}function Ke(){return Le.lFrame.lView}function on(){return Le.lFrame.tView}function Bt(n){return Le.lFrame.contextLView=n,n[Yt]}function zt(n){return Le.lFrame.contextLView=null,n}function un(){let n=Qg();for(;n!==null&&n.type===64;)n=n.parent;return n}function Qg(){return Le.lFrame.currentTNode}function lb(){let n=Le.lFrame,e=n.currentTNode;return n.isParent?e:e.parent}function Eo(n,e){let t=Le.lFrame;t.currentTNode=n,t.isParent=e}function e0(){return Le.lFrame.isParent}function ub(){Le.lFrame.isParent=!1}function db(){return Le.lFrame.contextLView}function t0(){return Jg}function zm(n){Jg=n}function fb(){let n=Le.lFrame,e=n.bindingRootIndex;return e===-1&&(e=n.bindingRootIndex=n.tView.bindingStartIndex),e}function hb(n){return Le.lFrame.bindingIndex=n}function ms(){return Le.lFrame.bindingIndex++}function pb(n){let e=Le.lFrame,t=e.bindingIndex;return e.bindingIndex=e.bindingIndex+n,t}function mb(){return Le.lFrame.inI18n}function gb(n,e){let t=Le.lFrame;t.bindingIndex=t.bindingRootIndex=n,Yu(e)}function vb(){return Le.lFrame.currentDirectiveIndex}function Yu(n){Le.lFrame.currentDirectiveIndex=n}function yb(n){let e=Le.lFrame.currentDirectiveIndex;return e===-1?null:n[e]}function _b(){return Le.lFrame.currentQueryIndex}function Xd(n){Le.lFrame.currentQueryIndex=n}function xb(n){let e=n[Re];return e.type===2?e.declTNode:e.type===1?n[Vn]:null}function n0(n,e,t){if(t&$e.SkipSelf){let r=e,s=n;for(;r=r.parent,r===null&&!(t&$e.Host);)if(r=xb(s),r===null||(s=s[ps],r.type&10))break;if(r===null)return!1;e=r,n=s}let i=Le.lFrame=i0();return i.currentTNode=e,i.lView=n,!0}function Yd(n){let e=i0(),t=n[Re];Le.lFrame=e,e.currentTNode=t.firstChild,e.lView=n,e.tView=t,e.contextLView=n,e.bindingIndex=t.bindingStartIndex,e.inI18n=!1}function i0(){let n=Le.lFrame,e=n===null?null:n.child;return e===null?r0(n):e}function r0(n){let e={currentTNode:null,isParent:!0,lView:null,tView:null,selectedIndex:-1,contextLView:null,elementDepthCount:0,currentNamespace:null,currentDirectiveIndex:-1,bindingRootIndex:-1,bindingIndex:-1,currentQueryIndex:0,parent:n,child:null,inI18n:!1};return n!==null&&(n.child=e),e}function s0(){let n=Le.lFrame;return Le.lFrame=n.parent,n.currentTNode=null,n.lView=null,n}var o0=s0;function Zd(){let n=s0();n.isParent=!0,n.tView=null,n.selectedIndex=-1,n.contextLView=null,n.elementDepthCount=0,n.currentDirectiveIndex=-1,n.currentNamespace=null,n.bindingRootIndex=-1,n.bindingIndex=-1,n.currentQueryIndex=0}function Mb(n){return(Le.lFrame.contextLView=tb(n,Le.lFrame.contextLView))[Yt]}function _r(){return Le.lFrame.selectedIndex}function dr(n){Le.lFrame.selectedIndex=n}function Jd(){let n=Le.lFrame;return $d(n.tView,n.selectedIndex)}function ki(){Le.lFrame.currentNamespace=$g}function a0(){bb()}function bb(){Le.lFrame.currentNamespace=null}function wb(){return Le.lFrame.currentNamespace}var c0=!0;function Kd(){return c0}function Qd(n){c0=n}function Eb(n,e,t){let{ngOnChanges:i,ngOnInit:r,ngDoCheck:s}=e.type.prototype;if(i){let o=Gg(e);(t.preOrderHooks??=[]).push(n,o),(t.preOrderCheckHooks??=[]).push(n,o)}r&&(t.preOrderHooks??=[]).push(0-n,r),s&&((t.preOrderHooks??=[]).push(n,s),(t.preOrderCheckHooks??=[]).push(n,s))}function ef(n,e){for(let t=e.directiveStart,i=e.directiveEnd;t<i;t++){let s=n.data[t].type.prototype,{ngAfterContentInit:o,ngAfterContentChecked:a,ngAfterViewInit:c,ngAfterViewChecked:l,ngOnDestroy:u}=s;o&&(n.contentHooks??=[]).push(-t,o),a&&((n.contentHooks??=[]).push(t,a),(n.contentCheckHooks??=[]).push(t,a)),c&&(n.viewHooks??=[]).push(-t,c),l&&((n.viewHooks??=[]).push(t,l),(n.viewCheckHooks??=[]).push(t,l)),u!=null&&(n.destroyHooks??=[]).push(t,u)}}function ka(n,e,t){l0(n,e,3,t)}function Ua(n,e,t,i){(n[Ae]&3)===t&&l0(n,e,t,i)}function Tu(n,e){let t=n[Ae];(t&3)===e&&(t&=16383,t+=1,n[Ae]=t)}function l0(n,e,t,i){let r=i!==void 0?n[Zr]&65535:0,s=i??-1,o=e.length-1,a=0;for(let c=r;c<o;c++)if(typeof e[c+1]=="number"){if(a=e[c],i!=null&&a>=i)break}else e[c]<0&&(n[Zr]+=65536),(a<s||s==-1)&&(Sb(n,t,e,c),n[Zr]=(n[Zr]&4294901760)+c+2),c++}function Hm(n,e){Zn(4,n,e);let t=Ge(null);try{e.call(n)}finally{Ge(t),Zn(5,n,e)}}function Sb(n,e,t,i){let r=t[i]<0,s=t[i+1],o=r?-t[i]:t[i],a=n[o];r?n[Ae]>>14<n[Zr]>>16&&(n[Ae]&3)===e&&(n[Ae]+=16384,Hm(a,s)):Hm(a,s)}var Qr=-1,fr=class{constructor(e,t,i){this.factory=e,this.resolving=!1,this.canSeeViewProviders=t,this.injectImpl=i}};function Cb(n){return n instanceof fr}function Db(n){return(n.flags&8)!==0}function Tb(n){return(n.flags&16)!==0}var Au={},Zu=class{constructor(e,t){this.injector=e,this.parentInjector=t}get(e,t,i){i=hc(i);let r=this.injector.get(e,Au,i);return r!==Au||t===Au?r:this.parentInjector.get(e,t,i)}};function u0(n){return n!==Qr}function Za(n){return n&32767}function Ab(n){return n>>16}function Ja(n,e){let t=Ab(n),i=e;for(;t>0;)i=i[ps],t--;return i}var Ju=!0;function Gm(n){let e=Ju;return Ju=n,e}var Ib=256,d0=Ib-1,f0=5,Pb=0,Jn={};function Rb(n,e,t){let i;typeof t=="string"?i=t.charCodeAt(0)||0:t.hasOwnProperty(lo)&&(i=t[lo]),i==null&&(i=t[lo]=Pb++);let r=i&d0,s=1<<r;e.data[n+(r>>f0)]|=s}function Ka(n,e){let t=h0(n,e);if(t!==-1)return t;let i=e[Re];i.firstCreatePass&&(n.injectorIndex=e.length,Iu(i.data,n),Iu(e,null),Iu(i.blueprint,null));let r=tf(n,e),s=n.injectorIndex;if(u0(r)){let o=Za(r),a=Ja(r,e),c=a[Re].data;for(let l=0;l<8;l++)e[s+l]=a[o+l]|c[o+l]}return e[s+8]=r,s}function Iu(n,e){n.push(0,0,0,0,0,0,0,0,e)}function h0(n,e){return n.injectorIndex===-1||n.parent&&n.parent.injectorIndex===n.injectorIndex||e[n.injectorIndex+8]===null?-1:n.injectorIndex}function tf(n,e){if(n.parent&&n.parent.injectorIndex!==-1)return n.parent.injectorIndex;let t=0,i=null,r=e;for(;r!==null;){if(i=y0(r),i===null)return Qr;if(t++,r=r[ps],i.injectorIndex!==-1)return i.injectorIndex|t<<16}return Qr}function Ku(n,e,t){Rb(n,e,t)}function p0(n,e,t){if(t&$e.Optional||n!==void 0)return n;Bd(e,"NodeInjector")}function m0(n,e,t,i){if(t&$e.Optional&&i===void 0&&(i=null),!(t&($e.Self|$e.Host))){let r=n[rs],s=Yn(void 0);try{return r?r.get(e,i,t&$e.Optional):bg(e,i,t&$e.Optional)}finally{Yn(s)}}return p0(i,e,t)}function g0(n,e,t,i=$e.Default,r){if(n!==null){if(e[Ae]&2048&&!(i&$e.Self)){let o=Lb(n,e,t,i,Jn);if(o!==Jn)return o}let s=v0(n,e,t,i,Jn);if(s!==Jn)return s}return m0(e,t,i,r)}function v0(n,e,t,i,r){let s=Ob(t);if(typeof s=="function"){if(!n0(e,n,i))return i&$e.Host?p0(r,t,i):m0(e,t,i,r);try{let o;if(o=s(i),o==null&&!(i&$e.Optional))Bd(t);else return o}finally{o0()}}else if(typeof s=="number"){let o=null,a=h0(n,e),c=Qr,l=i&$e.Host?e[Un][Vn]:null;for((a===-1||i&$e.SkipSelf)&&(c=a===-1?tf(n,e):e[a+8],c===Qr||!jm(i,!1)?a=-1:(o=e[Re],a=Za(c),e=Ja(c,e)));a!==-1;){let u=e[Re];if(Wm(s,a,u.data)){let d=Nb(a,e,t,o,i,l);if(d!==Jn)return d}c=e[a+8],c!==Qr&&jm(i,e[Re].data[a+8]===l)&&Wm(s,a,e)?(o=u,a=Za(c),e=Ja(c,e)):a=-1}}return r}function Nb(n,e,t,i,r,s){let o=e[Re],a=o.data[n+8],c=i==null?gc(a)&&Ju:i!=o&&(a.type&3)!==0,l=r&$e.Host&&s===a,u=Va(a,o,t,c,l);return u!==null?hr(e,o,u,a):Jn}function Va(n,e,t,i,r){let s=n.providerIndexes,o=e.data,a=s&1048575,c=n.directiveStart,l=n.directiveEnd,u=s>>20,d=i?a:a+u,f=r?a+u:l;for(let h=d;h<f;h++){let g=o[h];if(h<c&&t===g||h>=c&&g.type===t)return h}if(r){let h=o[c];if(h&&Fi(h)&&h.type===t)return c}return null}function hr(n,e,t,i){let r=n[t],s=e.data;if(Cb(r)){let o=r;o.resolving&&iM(nM(s[t]));let a=Gm(o.canSeeViewProviders);o.resolving=!0;let c,l=o.injectImpl?Yn(o.injectImpl):null,u=n0(n,i,$e.Default);try{r=n[t]=o.factory(void 0,s,n,i),e.firstCreatePass&&t>=i.directiveStart&&Eb(t,s[t],e)}finally{l!==null&&Yn(l),Gm(a),o.resolving=!1,o0()}}return r}function Ob(n){if(typeof n=="string")return n.charCodeAt(0)||0;let e=n.hasOwnProperty(lo)?n[lo]:void 0;return typeof e=="number"?e>=0?e&d0:Fb:e}function Wm(n,e,t){let i=1<<n;return!!(t[e+(n>>f0)]&i)}function jm(n,e){return!(n&$e.Self)&&!(n&$e.Host&&e)}var ar=class{constructor(e,t){this._tNode=e,this._lView=t}get(e,t,i){return g0(this._tNode,this._lView,e,hc(i),t)}};function Fb(){return new ar(un(),Ke())}function nf(n){return Mo(()=>{let e=n.prototype.constructor,t=e[Ha]||Qu(e),i=Object.prototype,r=Object.getPrototypeOf(n.prototype).constructor;for(;r&&r!==i;){let s=r[Ha]||Qu(r);if(s&&s!==t)return s;r=Object.getPrototypeOf(r)}return s=>new s})}function Qu(n){return vg(n)?()=>{let e=Qu(rn(n));return e&&e()}:es(n)}function Lb(n,e,t,i,r){let s=n,o=e;for(;s!==null&&o!==null&&o[Ae]&2048&&!(o[Ae]&512);){let a=v0(s,o,t,i|$e.Self,Jn);if(a!==Jn)return a;let c=s.parent;if(!c){let l=o[Vg];if(l){let u=l.get(t,Jn,i);if(u!==Jn)return u}c=y0(o),o=o[ps]}s=c}return r}function y0(n){let e=n[Re],t=e.type;return t===2?e.declTNode:t===1?n[Vn]:null}function $m(n,e=null,t=null,i){let r=kb(n,e,t,i);return r.resolveInjectorInitializers(),r}function kb(n,e=null,t=null,i,r=new Set){let s=[t||yn,LM(n)];return i=i||(typeof n=="object"?void 0:_n(n)),new $a(s,e||Wd(),i||null,r)}var as=class n{static{this.THROW_IF_NOT_FOUND=uo}static{this.NULL=new ja}static create(e,t){if(Array.isArray(e))return $m({name:""},t,e,"");{let i=e.name??"";return $m({name:i},e.parent,e.providers,i)}}static{this.\u0275prov=yt({token:n,providedIn:"any",factory:()=>dt(Cg)})}static{this.__NG_ELEMENT_ID__=-1}};var Ub=new qe("");Ub.__NG_ELEMENT_ID__=n=>{let e=un();if(e===null)throw new Ve(204,!1);if(e.type&2)return e.value;if(n&$e.Optional)return null;throw new Ve(204,!1)};var Vb="ngOriginalError";function Pu(n){return n[Vb]}var _0=!0,x0=(()=>{class n{static{this.__NG_ELEMENT_ID__=Bb}static{this.__NG_ENV_ID__=t=>t}}return n})(),ed=class extends x0{constructor(e){super(),this._lView=e}onDestroy(e){return Zg(this._lView,e),()=>nb(this._lView,e)}};function Bb(){return new ed(Ke())}var _c=(()=>{class n{constructor(){this.taskId=0,this.pendingTasks=new Set,this.hasPendingTasks=new oo(!1)}get _hasPendingTasks(){return this.hasPendingTasks.value}add(){this._hasPendingTasks||this.hasPendingTasks.next(!0);let t=this.taskId++;return this.pendingTasks.add(t),t}remove(t){this.pendingTasks.delete(t),this.pendingTasks.size===0&&this._hasPendingTasks&&this.hasPendingTasks.next(!1)}ngOnDestroy(){this.pendingTasks.clear(),this._hasPendingTasks&&this.hasPendingTasks.next(!1)}static{this.\u0275prov=yt({token:n,providedIn:"root",factory:()=>new n})}}return n})();var td=class extends qn{constructor(e=!1){super(),this.destroyRef=void 0,this.pendingTasks=void 0,this.__isAsync=e,qM()&&(this.destroyRef=Ue(x0,{optional:!0})??void 0,this.pendingTasks=Ue(_c,{optional:!0})??void 0)}emit(e){let t=Ge(null);try{super.next(e)}finally{Ge(t)}}subscribe(e,t,i){let r=e,s=t||(()=>null),o=i;if(e&&typeof e=="object"){let c=e;r=c.next?.bind(c),s=c.error?.bind(c),o=c.complete?.bind(c)}this.__isAsync&&(s=this.wrapInTimeout(s),r&&(r=this.wrapInTimeout(r)),o&&(o=this.wrapInTimeout(o)));let a=super.subscribe({next:r,error:s,complete:o});return e instanceof nn&&e.add(a),a}wrapInTimeout(e){return t=>{let i=this.pendingTasks?.add();setTimeout(()=>{e(t),i!==void 0&&this.pendingTasks?.remove(i)})}}},sn=td;function Qa(...n){}function M0(n){let e,t;function i(){n=Qa;try{t!==void 0&&typeof cancelAnimationFrame=="function"&&cancelAnimationFrame(t),e!==void 0&&clearTimeout(e)}catch{}}return e=setTimeout(()=>{n(),i()}),typeof requestAnimationFrame=="function"&&(t=requestAnimationFrame(()=>{n(),i()})),()=>i()}function qm(n){return queueMicrotask(()=>n()),()=>{n=Qa}}var rf="isAngularZone",ec=rf+"_ID",zb=0,at=class n{constructor(e){this.hasPendingMacrotasks=!1,this.hasPendingMicrotasks=!1,this.isStable=!0,this.onUnstable=new sn(!1),this.onMicrotaskEmpty=new sn(!1),this.onStable=new sn(!1),this.onError=new sn(!1);let{enableLongStackTrace:t=!1,shouldCoalesceEventChangeDetection:i=!1,shouldCoalesceRunChangeDetection:r=!1,scheduleInRootZone:s=_0}=e;if(typeof Zone>"u")throw new Ve(908,!1);Zone.assertZonePatched();let o=this;o._nesting=0,o._outer=o._inner=Zone.current,Zone.TaskTrackingZoneSpec&&(o._inner=o._inner.fork(new Zone.TaskTrackingZoneSpec)),t&&Zone.longStackTraceZoneSpec&&(o._inner=o._inner.fork(Zone.longStackTraceZoneSpec)),o.shouldCoalesceEventChangeDetection=!r&&i,o.shouldCoalesceRunChangeDetection=r,o.callbackScheduled=!1,o.scheduleInRootZone=s,Wb(o)}static isInAngularZone(){return typeof Zone<"u"&&Zone.current.get(rf)===!0}static assertInAngularZone(){if(!n.isInAngularZone())throw new Ve(909,!1)}static assertNotInAngularZone(){if(n.isInAngularZone())throw new Ve(909,!1)}run(e,t,i){return this._inner.run(e,t,i)}runTask(e,t,i,r){let s=this._inner,o=s.scheduleEventTask("NgZoneEvent: "+r,e,Hb,Qa,Qa);try{return s.runTask(o,t,i)}finally{s.cancelTask(o)}}runGuarded(e,t,i){return this._inner.runGuarded(e,t,i)}runOutsideAngular(e){return this._outer.run(e)}},Hb={};function sf(n){if(n._nesting==0&&!n.hasPendingMicrotasks&&!n.isStable)try{n._nesting++,n.onMicrotaskEmpty.emit(null)}finally{if(n._nesting--,!n.hasPendingMicrotasks)try{n.runOutsideAngular(()=>n.onStable.emit(null))}finally{n.isStable=!0}}}function Gb(n){if(n.isCheckStableRunning||n.callbackScheduled)return;n.callbackScheduled=!0;function e(){M0(()=>{n.callbackScheduled=!1,nd(n),n.isCheckStableRunning=!0,sf(n),n.isCheckStableRunning=!1})}n.scheduleInRootZone?Zone.root.run(()=>{e()}):n._outer.run(()=>{e()}),nd(n)}function Wb(n){let e=()=>{Gb(n)},t=zb++;n._inner=n._inner.fork({name:"angular",properties:{[rf]:!0,[ec]:t,[ec+t]:!0},onInvokeTask:(i,r,s,o,a,c)=>{if(jb(c))return i.invokeTask(s,o,a,c);try{return Xm(n),i.invokeTask(s,o,a,c)}finally{(n.shouldCoalesceEventChangeDetection&&o.type==="eventTask"||n.shouldCoalesceRunChangeDetection)&&e(),Ym(n)}},onInvoke:(i,r,s,o,a,c,l)=>{try{return Xm(n),i.invoke(s,o,a,c,l)}finally{n.shouldCoalesceRunChangeDetection&&!n.callbackScheduled&&!$b(c)&&e(),Ym(n)}},onHasTask:(i,r,s,o)=>{i.hasTask(s,o),r===s&&(o.change=="microTask"?(n._hasPendingMicrotasks=o.microTask,nd(n),sf(n)):o.change=="macroTask"&&(n.hasPendingMacrotasks=o.macroTask))},onHandleError:(i,r,s,o)=>(i.handleError(s,o),n.runOutsideAngular(()=>n.onError.emit(o)),!1)})}function nd(n){n._hasPendingMicrotasks||(n.shouldCoalesceEventChangeDetection||n.shouldCoalesceRunChangeDetection)&&n.callbackScheduled===!0?n.hasPendingMicrotasks=!0:n.hasPendingMicrotasks=!1}function Xm(n){n._nesting++,n.isStable&&(n.isStable=!1,n.onUnstable.emit(null))}function Ym(n){n._nesting--,sf(n)}var id=class{constructor(){this.hasPendingMicrotasks=!1,this.hasPendingMacrotasks=!1,this.isStable=!0,this.onUnstable=new sn,this.onMicrotaskEmpty=new sn,this.onStable=new sn,this.onError=new sn}run(e,t,i){return e.apply(t,i)}runGuarded(e,t,i){return e.apply(t,i)}runOutsideAngular(e){return e()}runTask(e,t,i,r){return e.apply(t,i)}};function jb(n){return b0(n,"__ignore_ng_zone__")}function $b(n){return b0(n,"__scheduler_tick__")}function b0(n,e){return!Array.isArray(n)||n.length!==1?!1:n[0]?.data?.[e]===!0}var li=class{constructor(){this._console=console}handleError(e){let t=this._findOriginalError(e);this._console.error("ERROR",e),t&&this._console.error("ORIGINAL ERROR",t)}_findOriginalError(e){let t=e&&Pu(e);for(;t&&Pu(t);)t=Pu(t);return t||null}},qb=new qe("",{providedIn:"root",factory:()=>{let n=Ue(at),e=Ue(li);return t=>n.runOutsideAngular(()=>e.handleError(t))}});function Xb(){return gs(un(),Ke())}function gs(n,e){return new hi(Tn(n,e))}var hi=(()=>{class n{constructor(t){this.nativeElement=t}static{this.__NG_ELEMENT_ID__=Xb}}return n})();function Yb(n){return n instanceof hi?n.nativeElement:n}function Zb(){return this._results[Symbol.iterator]()}var rd=class n{get changes(){return this._changes??=new sn}constructor(e=!1){this._emitDistinctChangesOnly=e,this.dirty=!0,this._onDirty=void 0,this._results=[],this._changesDetected=!1,this._changes=void 0,this.length=0,this.first=void 0,this.last=void 0;let t=n.prototype;t[Symbol.iterator]||(t[Symbol.iterator]=Zb)}get(e){return this._results[e]}map(e){return this._results.map(e)}filter(e){return this._results.filter(e)}find(e){return this._results.find(e)}reduce(e,t){return this._results.reduce(e,t)}forEach(e){this._results.forEach(e)}some(e){return this._results.some(e)}toArray(){return this._results.slice()}toString(){return this._results.toString()}reset(e,t){this.dirty=!1;let i=mM(e);(this._changesDetected=!pM(this._results,i,t))&&(this._results=i,this.length=i.length,this.last=i[this.length-1],this.first=i[0])}notifyOnChanges(){this._changes!==void 0&&(this._changesDetected||!this._emitDistinctChangesOnly)&&this._changes.emit(this)}onDirty(e){this._onDirty=e}setDirty(){this.dirty=!0,this._onDirty?.()}destroy(){this._changes!==void 0&&(this._changes.complete(),this._changes.unsubscribe())}};function w0(n){return(n.flags&128)===128}var E0=new Map,Jb=0;function Kb(){return Jb++}function Qb(n){E0.set(n[mc],n)}function sd(n){E0.delete(n[mc])}var Zm="__ngContext__";function pr(n,e){Ri(e)?(n[Zm]=e[mc],Qb(e)):n[Zm]=e}function S0(n){return D0(n[mo])}function C0(n){return D0(n[kn])}function D0(n){for(;n!==null&&!fi(n);)n=n[kn];return n}var od;function T0(n){od=n}function ew(){if(od!==void 0)return od;if(typeof document<"u")return document;throw new Ve(210,!1)}var of=new qe("",{providedIn:"root",factory:()=>tw}),tw="ng",af=new qe(""),vs=new qe("",{providedIn:"platform",factory:()=>"unknown"});var cf=new qe("",{providedIn:"root",factory:()=>ew().body?.querySelector("[ngCspNonce]")?.getAttribute("ngCspNonce")||null});var nw="h",iw="b";var rw=()=>null;function lf(n,e,t=!1){return rw(n,e,t)}var A0=!1,sw=new qe("",{providedIn:"root",factory:()=>A0});var tc=class{constructor(e){this.changingThisBreaksApplicationSecurity=e}toString(){return`SafeValue must use [property]=binding: ${this.changingThisBreaksApplicationSecurity} (see ${mg})`}};function xc(n){return n instanceof tc?n.changingThisBreaksApplicationSecurity:n}function I0(n,e){let t=ow(n);if(t!=null&&t!==e){if(t==="ResourceURL"&&e==="URL")return!0;throw new Error(`Required a safe ${e}, got a ${t} (see ${mg})`)}return t===e}function ow(n){return n instanceof tc&&n.getTypeName()||null}var aw=/^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:\/?#]*(?:[\/?#]|$))/i;function P0(n){return n=String(n),n.match(aw)?n:"unsafe:"+n}var uf=function(n){return n[n.NONE=0]="NONE",n[n.HTML=1]="HTML",n[n.STYLE=2]="STYLE",n[n.SCRIPT=3]="SCRIPT",n[n.URL=4]="URL",n[n.RESOURCE_URL=5]="RESOURCE_URL",n}(uf||{});function pi(n){let e=cw();return e?e.sanitize(uf.URL,n)||"":I0(n,"URL")?xc(n):P0(fc(n))}function cw(){let n=Ke();return n&&n[Qn].sanitizer}function R0(n){return n.ownerDocument.defaultView}function N0(n){return n.ownerDocument}var ui=function(n){return n[n.Important=1]="Important",n[n.DashCase=2]="DashCase",n}(ui||{}),lw;function df(n,e){return lw(n,e)}function Jr(n,e,t,i,r){if(i!=null){let s,o=!1;fi(i)?s=i:Ri(i)&&(o=!0,i=i[di]);let a=ei(i);n===0&&t!==null?r==null?k0(e,t,a):nc(e,t,a,r||null,!0):n===1&&t!==null?nc(e,t,a,r||null,!0):n===2?Ew(e,a,o):n===3&&e.destroyNode(a),s!=null&&Cw(e,n,s,t,r)}}function uw(n,e){return n.createText(e)}function dw(n,e,t){n.setValue(e,t)}function O0(n,e,t){return n.createElement(e,t)}function fw(n,e){F0(n,e),e[di]=null,e[Vn]=null}function hw(n,e,t,i,r,s){i[di]=r,i[Vn]=e,bc(n,i,t,1,r,s)}function F0(n,e){e[Qn].changeDetectionScheduler?.notify(9),bc(n,e,e[Ft],2,null,null)}function pw(n){let e=n[mo];if(!e)return Ru(n[Re],n);for(;e;){let t=null;if(Ri(e))t=e[mo];else{let i=e[Zt];i&&(t=i)}if(!t){for(;e&&!e[kn]&&e!==n;)Ri(e)&&Ru(e[Re],e),e=e[Jt];e===null&&(e=n),Ri(e)&&Ru(e[Re],e),t=e&&e[kn]}e=t}}function mw(n,e,t,i){let r=Zt+i,s=t.length;i>0&&(t[r-1][kn]=e),i<s-Zt?(e[kn]=t[r],Sg(t,Zt+i,e)):(t.push(e),e[kn]=null),e[Jt]=t;let o=e[cr];o!==null&&t!==o&&L0(o,e);let a=e[ci];a!==null&&a.insertView(n),Xu(e),e[Ae]|=128}function L0(n,e){let t=n[ss],i=e[Jt];if(Ri(i))n[Ae]|=Ya.HasTransplantedViews;else{let r=i[Jt][Un];e[Un]!==r&&(n[Ae]|=Ya.HasTransplantedViews)}t===null?n[ss]=[e]:t.push(e)}function ff(n,e){let t=n[ss],i=t.indexOf(e);t.splice(i,1)}function go(n,e){if(n.length<=Zt)return;let t=Zt+e,i=n[t];if(i){let r=i[cr];r!==null&&r!==n&&ff(r,i),e>0&&(n[t-1][kn]=i[kn]);let s=Wa(n,Zt+e);fw(i[Re],i);let o=s[ci];o!==null&&o.detachView(s[Re]),i[Jt]=null,i[kn]=null,i[Ae]&=-129}return i}function Mc(n,e){if(!(e[Ae]&256)){let t=e[Ft];t.destroyNode&&bc(n,e,t,3,null,null),pw(e)}}function Ru(n,e){if(e[Ae]&256)return;let t=Ge(null);try{e[Ae]&=-129,e[Ae]|=256,e[Cn]&&hu(e[Cn]),vw(n,e),gw(n,e),e[Re].type===1&&e[Ft].destroy();let i=e[cr];if(i!==null&&fi(e[Jt])){i!==e[Jt]&&ff(i,e);let r=e[ci];r!==null&&r.detachView(n)}sd(e)}finally{Ge(t)}}function gw(n,e){let t=n.cleanup,i=e[qa];if(t!==null)for(let s=0;s<t.length-1;s+=2)if(typeof t[s]=="string"){let o=t[s+3];o>=0?i[o]():i[-o].unsubscribe(),s+=2}else{let o=i[t[s+1]];t[s].call(o)}i!==null&&(e[qa]=null);let r=e[Pi];if(r!==null){e[Pi]=null;for(let s=0;s<r.length;s++){let o=r[s];o()}}}function vw(n,e){let t;if(n!=null&&(t=n.destroyHooks)!=null)for(let i=0;i<t.length;i+=2){let r=e[t[i]];if(!(r instanceof fr)){let s=t[i+1];if(Array.isArray(s))for(let o=0;o<s.length;o+=2){let a=r[s[o]],c=s[o+1];Zn(4,a,c);try{c.call(a)}finally{Zn(5,a,c)}}else{Zn(4,r,s);try{s.call(r)}finally{Zn(5,r,s)}}}}}function yw(n,e,t){return _w(n,e.parent,t)}function _w(n,e,t){let i=e;for(;i!==null&&i.type&168;)e=i,i=e.parent;if(i===null)return t[di];{let{componentOffset:r}=i;if(r>-1){let{encapsulation:s}=n.data[i.directiveStart+r];if(s===Kn.None||s===Kn.Emulated)return null}return Tn(i,t)}}function nc(n,e,t,i,r){n.insertBefore(e,t,i,r)}function k0(n,e,t){n.appendChild(e,t)}function Jm(n,e,t,i,r){i!==null?nc(n,e,t,i,r):k0(n,e,t)}function U0(n,e){return n.parentNode(e)}function xw(n,e){return n.nextSibling(e)}function Mw(n,e,t){return ww(n,e,t)}function bw(n,e,t){return n.type&40?Tn(n,t):null}var ww=bw,Km;function hf(n,e,t,i){let r=yw(n,i,e),s=e[Ft],o=i.parent||e[Vn],a=Mw(o,i,e);if(r!=null)if(Array.isArray(t))for(let c=0;c<t.length;c++)Jm(s,r,t[c],a,!1);else Jm(s,r,t,a,!1);Km!==void 0&&Km(s,i,e,t,r)}function ao(n,e){if(e!==null){let t=e.type;if(t&3)return Tn(e,n);if(t&4)return ad(-1,n[e.index]);if(t&8){let i=e.child;if(i!==null)return ao(n,i);{let r=n[e.index];return fi(r)?ad(-1,r):ei(r)}}else{if(t&128)return ao(n,e.next);if(t&32)return df(e,n)()||ei(n[e.index]);{let i=V0(n,e);if(i!==null){if(Array.isArray(i))return i[0];let r=ur(n[Un]);return ao(r,i)}else return ao(n,e.next)}}}return null}function V0(n,e){if(e!==null){let i=n[Un][Vn],r=e.projection;return i.projection[r]}return null}function ad(n,e){let t=Zt+n+1;if(t<e.length){let i=e[t],r=i[Re].firstChild;if(r!==null)return ao(i,r)}return e[lr]}function Ew(n,e,t){n.removeChild(null,e,t)}function pf(n,e,t,i,r,s,o){for(;t!=null;){if(t.type===128){t=t.next;continue}let a=i[t.index],c=t.type;if(o&&e===0&&(a&&pr(ei(a),i),t.flags|=2),(t.flags&32)!==32)if(c&8)pf(n,e,t.child,i,r,s,!1),Jr(e,n,r,a,s);else if(c&32){let l=df(t,i),u;for(;u=l();)Jr(e,n,r,u,s);Jr(e,n,r,a,s)}else c&16?Sw(n,e,i,t,r,s):Jr(e,n,r,a,s);t=o?t.projectionNext:t.next}}function bc(n,e,t,i,r,s){pf(t,i,n.firstChild,e,r,s,!1)}function Sw(n,e,t,i,r,s){let o=t[Un],c=o[Vn].projection[i.projection];if(Array.isArray(c))for(let l=0;l<c.length;l++){let u=c[l];Jr(e,n,r,u,s)}else{let l=c,u=o[Jt];w0(i)&&(l.flags|=128),pf(n,e,l,u,r,s,!0)}}function Cw(n,e,t,i,r){let s=t[lr],o=ei(t);s!==o&&Jr(e,n,i,s,r);for(let a=Zt;a<t.length;a++){let c=t[a];bc(c[Re],c,n,e,i,s)}}function Dw(n,e,t,i,r){if(e)r?n.addClass(t,i):n.removeClass(t,i);else{let s=i.indexOf("-")===-1?void 0:ui.DashCase;r==null?n.removeStyle(t,i,s):(typeof r=="string"&&r.endsWith("!important")&&(r=r.slice(0,-10),s|=ui.Important),n.setStyle(t,i,r,s))}}function Tw(n,e,t){n.setAttribute(e,"style",t)}function B0(n,e,t){t===""?n.removeAttribute(e,"class"):n.setAttribute(e,"class",t)}function z0(n,e,t){let{mergedAttrs:i,classes:r,styles:s}=t;i!==null&&Hu(n,e,i),r!==null&&B0(n,e,r),s!==null&&Tw(n,e,s)}var Ui={};function he(n=1){H0(on(),Ke(),_r()+n,!1)}function H0(n,e,t,i){if(!i)if((e[Ae]&3)===3){let s=n.preOrderCheckHooks;s!==null&&ka(e,s,t)}else{let s=n.preOrderHooks;s!==null&&Ua(e,s,0,t)}dr(t)}function ht(n,e=$e.Default){let t=Ke();if(t===null)return dt(n,e);let i=un();return g0(i,t,rn(n),e)}function G0(n,e,t,i,r,s){let o=Ge(null);try{let a=null;r&Ni.SignalBased&&(a=e[i][On]),a!==null&&a.transformFn!==void 0&&(s=a.transformFn(s)),r&Ni.HasDecoratorInputTransform&&(s=n.inputTransforms[i].call(e,s)),n.setInput!==null?n.setInput(e,a,s,t,i):Hg(e,a,i,s)}finally{Ge(o)}}function Aw(n,e){let t=n.hostBindingOpCodes;if(t!==null)try{for(let i=0;i<t.length;i++){let r=t[i];if(r<0)dr(~r);else{let s=r,o=t[++i],a=t[++i];gb(o,s);let c=e[s];a(2,c)}}}finally{dr(-1)}}function wc(n,e,t,i,r,s,o,a,c,l,u){let d=e.blueprint.slice();return d[di]=r,d[Ae]=i|4|128|8|64,(l!==null||n&&n[Ae]&2048)&&(d[Ae]|=2048),Xg(d),d[Jt]=d[ps]=n,d[Yt]=t,d[Qn]=o||n&&n[Qn],d[Ft]=a||n&&n[Ft],d[rs]=c||n&&n[rs]||null,d[Vn]=s,d[mc]=Kb(),d[po]=u,d[Vg]=l,d[Un]=e.type==2?n[Un]:d,d}function Ec(n,e,t,i,r){let s=n.data[e];if(s===null)s=Iw(n,e,t,i,r),mb()&&(s.flags|=32);else if(s.type&64){s.type=t,s.value=i,s.attrs=r;let o=lb();s.injectorIndex=o===null?-1:o.injectorIndex}return Eo(s,!0),s}function Iw(n,e,t,i,r){let s=Qg(),o=e0(),a=o?s:s&&s.parent,c=n.data[e]=Lw(n,a,t,e,i,r);return n.firstChild===null&&(n.firstChild=c),s!==null&&(o?s.child==null&&c.parent!==null&&(s.child=c):s.next===null&&(s.next=c,c.prev=s)),c}function W0(n,e,t,i){if(t===0)return-1;let r=e.length;for(let s=0;s<t;s++)e.push(i),n.blueprint.push(i),n.data.push(null);return r}function j0(n,e,t,i,r){let s=_r(),o=i&2;try{dr(-1),o&&e.length>Dn&&H0(n,e,Dn,!1),Zn(o?2:0,r),t(i,r)}finally{dr(s),Zn(o?3:1,r)}}function $0(n,e,t){if(zg(e)){let i=Ge(null);try{let r=e.directiveStart,s=e.directiveEnd;for(let o=r;o<s;o++){let a=n.data[o];if(a.contentQueries){let c=t[o];a.contentQueries(1,c,o)}}}finally{Ge(i)}}}function q0(n,e,t){Kg()&&(Hw(n,e,t,Tn(t,e)),(t.flags&64)===64&&Q0(n,e,t))}function X0(n,e,t=Tn){let i=e.localNames;if(i!==null){let r=e.index+1;for(let s=0;s<i.length;s+=2){let o=i[s+1],a=o===-1?t(e,n):n[o];n[r++]=a}}}function Y0(n){let e=n.tView;return e===null||e.incompleteFirstPass?n.tView=mf(1,null,n.template,n.decls,n.vars,n.directiveDefs,n.pipeDefs,n.viewQuery,n.schemas,n.consts,n.id):e}function mf(n,e,t,i,r,s,o,a,c,l,u){let d=Dn+i,f=d+r,h=Pw(d,f),g=typeof l=="function"?l():l;return h[Re]={type:n,blueprint:h,template:t,queries:null,viewQuery:a,declTNode:e,data:h.slice().fill(null,d),bindingStartIndex:d,expandoStartIndex:f,hostBindingOpCodes:null,firstCreatePass:!0,firstUpdatePass:!0,staticViewQueries:!1,staticContentQueries:!1,preOrderHooks:null,preOrderCheckHooks:null,contentHooks:null,contentCheckHooks:null,viewHooks:null,viewCheckHooks:null,destroyHooks:null,cleanup:null,contentQueries:null,components:null,directiveRegistry:typeof s=="function"?s():s,pipeRegistry:typeof o=="function"?o():o,firstChild:null,schemas:c,consts:g,incompleteFirstPass:!1,ssrId:u}}function Pw(n,e){let t=[];for(let i=0;i<e;i++)t.push(i<n?null:Ui);return t}function Rw(n,e,t,i){let s=i.get(sw,A0)||t===Kn.ShadowDom,o=n.selectRootElement(e,s);return Nw(o),o}function Nw(n){Ow(n)}var Ow=()=>null;function Fw(n,e,t,i){let r=nv(e);r.push(t),n.firstCreatePass&&iv(n).push(i,r.length-1)}function Lw(n,e,t,i,r,s){let o=e?e.injectorIndex:-1,a=0;return ob()&&(a|=128),{type:t,index:i,insertBeforeIndex:null,injectorIndex:o,directiveStart:-1,directiveEnd:-1,directiveStylingLast:-1,componentOffset:-1,propertyBindings:null,flags:a,providerIndexes:0,value:r,attrs:s,mergedAttrs:null,localNames:null,initialInputs:void 0,inputs:null,outputs:null,tView:null,next:null,prev:null,projectionNext:null,child:null,parent:e,projection:null,styles:null,stylesWithoutHost:null,residualStyles:void 0,classes:null,classesWithoutHost:null,residualClasses:void 0,classBindings:0,styleBindings:0}}function Qm(n,e,t,i,r){for(let s in e){if(!e.hasOwnProperty(s))continue;let o=e[s];if(o===void 0)continue;i??={};let a,c=Ni.None;Array.isArray(o)?(a=o[0],c=o[1]):a=o;let l=s;if(r!==null){if(!r.hasOwnProperty(s))continue;l=r[s]}n===0?eg(i,t,l,a,c):eg(i,t,l,a)}return i}function eg(n,e,t,i,r){let s;n.hasOwnProperty(t)?(s=n[t]).push(e,i):s=n[t]=[e,i],r!==void 0&&s.push(r)}function kw(n,e,t){let i=e.directiveStart,r=e.directiveEnd,s=n.data,o=e.attrs,a=[],c=null,l=null;for(let u=i;u<r;u++){let d=s[u],f=t?t.get(d):null,h=f?f.inputs:null,g=f?f.outputs:null;c=Qm(0,d.inputs,u,c,h),l=Qm(1,d.outputs,u,l,g);let v=c!==null&&o!==null&&!Hd(e)?Qw(c,u,o):null;a.push(v)}c!==null&&(c.hasOwnProperty("class")&&(e.flags|=8),c.hasOwnProperty("style")&&(e.flags|=16)),e.initialInputs=a,e.inputs=c,e.outputs=l}function Uw(n){return n==="class"?"className":n==="for"?"htmlFor":n==="formaction"?"formAction":n==="innerHtml"?"innerHTML":n==="readonly"?"readOnly":n==="tabindex"?"tabIndex":n}function Z0(n,e,t,i,r,s,o,a){let c=Tn(e,t),l=e.inputs,u;!a&&l!=null&&(u=l[i])?(gf(n,t,u,i,r),gc(e)&&Vw(t,e.index)):e.type&3?(i=Uw(i),r=o!=null?o(r,e.value||"",i):r,s.setProperty(c,i,r)):e.type&12}function Vw(n,e){let t=Li(e,n);t[Ae]&16||(t[Ae]|=64)}function J0(n,e,t,i){if(Kg()){let r=i===null?null:{"":-1},s=Ww(n,t),o,a;s===null?o=a=null:[o,a]=s,o!==null&&K0(n,e,t,o,r,a),r&&jw(t,i,r)}t.mergedAttrs=ho(t.mergedAttrs,t.attrs)}function K0(n,e,t,i,r,s){for(let l=0;l<i.length;l++)Ku(Ka(t,e),n,i[l].type);qw(t,n.data.length,i.length);for(let l=0;l<i.length;l++){let u=i[l];u.providersResolver&&u.providersResolver(u)}let o=!1,a=!1,c=W0(n,e,i.length,null);for(let l=0;l<i.length;l++){let u=i[l];t.mergedAttrs=ho(t.mergedAttrs,u.hostAttrs),Xw(n,t,e,c,u),$w(c,u,r),u.contentQueries!==null&&(t.flags|=4),(u.hostBindings!==null||u.hostAttrs!==null||u.hostVars!==0)&&(t.flags|=64);let d=u.type.prototype;!o&&(d.ngOnChanges||d.ngOnInit||d.ngDoCheck)&&((n.preOrderHooks??=[]).push(t.index),o=!0),!a&&(d.ngOnChanges||d.ngDoCheck)&&((n.preOrderCheckHooks??=[]).push(t.index),a=!0),c++}kw(n,t,s)}function Bw(n,e,t,i,r){let s=r.hostBindings;if(s){let o=n.hostBindingOpCodes;o===null&&(o=n.hostBindingOpCodes=[]);let a=~e.index;zw(o)!=a&&o.push(a),o.push(t,i,s)}}function zw(n){let e=n.length;for(;e>0;){let t=n[--e];if(typeof t=="number"&&t<0)return t}return 0}function Hw(n,e,t,i){let r=t.directiveStart,s=t.directiveEnd;gc(t)&&Yw(e,t,n.data[r+t.componentOffset]),n.firstCreatePass||Ka(t,e),pr(i,e);let o=t.initialInputs;for(let a=r;a<s;a++){let c=n.data[a],l=hr(e,n,a,t);if(pr(l,e),o!==null&&Kw(e,a-r,l,c,t,o),Fi(c)){let u=Li(t.index,e);u[Yt]=hr(e,n,a,t)}}}function Q0(n,e,t){let i=t.directiveStart,r=t.directiveEnd,s=t.index,o=vb();try{dr(s);for(let a=i;a<r;a++){let c=n.data[a],l=e[a];Yu(a),(c.hostBindings!==null||c.hostVars!==0||c.hostAttrs!==null)&&Gw(c,l)}}finally{dr(-1),Yu(o)}}function Gw(n,e){n.hostBindings!==null&&n.hostBindings(1,e)}function Ww(n,e){let t=n.directiveRegistry,i=null,r=null;if(t)for(let s=0;s<t.length;s++){let o=t[s];if(CM(e,o.selectors,!1))if(i||(i=[]),Fi(o))if(o.findHostDirectiveDefs!==null){let a=[];r=r||new Map,o.findHostDirectiveDefs(o,a,r),i.unshift(...a,o);let c=a.length;cd(n,e,c)}else i.unshift(o),cd(n,e,0);else r=r||new Map,o.findHostDirectiveDefs?.(o,i,r),i.push(o)}return i===null?null:[i,r]}function cd(n,e,t){e.componentOffset=t,(n.components??=[]).push(e.index)}function jw(n,e,t){if(e){let i=n.localNames=[];for(let r=0;r<e.length;r+=2){let s=t[e[r+1]];if(s==null)throw new Ve(-301,!1);i.push(e[r],s)}}}function $w(n,e,t){if(t){if(e.exportAs)for(let i=0;i<e.exportAs.length;i++)t[e.exportAs[i]]=n;Fi(e)&&(t[""]=n)}}function qw(n,e,t){n.flags|=1,n.directiveStart=e,n.directiveEnd=e+t,n.providerIndexes=e}function Xw(n,e,t,i,r){n.data[i]=r;let s=r.factory||(r.factory=es(r.type,!0)),o=new fr(s,Fi(r),ht);n.blueprint[i]=o,t[i]=o,Bw(n,e,i,W0(n,t,r.hostVars,Ui),r)}function Yw(n,e,t){let i=Tn(e,n),r=Y0(t),s=n[Qn].rendererFactory,o=16;t.signals?o=4096:t.onPush&&(o=64);let a=Sc(n,wc(n,r,null,o,i,e,null,s.createRenderer(i,t),null,null,null));n[e.index]=a}function Zw(n,e,t,i,r,s){let o=Tn(n,e);Jw(e[Ft],o,s,n.value,t,i,r)}function Jw(n,e,t,i,r,s,o){if(s==null)n.removeAttribute(e,r,t);else{let a=o==null?fc(s):o(s,i||"",r);n.setAttribute(e,r,a,t)}}function Kw(n,e,t,i,r,s){let o=s[e];if(o!==null)for(let a=0;a<o.length;){let c=o[a++],l=o[a++],u=o[a++],d=o[a++];G0(i,t,c,l,u,d)}}function Qw(n,e,t){let i=null,r=0;for(;r<t.length;){let s=t[r];if(s===0){r+=4;continue}else if(s===5){r+=2;continue}if(typeof s=="number")break;if(n.hasOwnProperty(s)){i===null&&(i=[]);let o=n[s];for(let a=0;a<o.length;a+=3)if(o[a]===e){i.push(s,o[a+1],o[a+2],t[r+1]);break}}r+=2}return i}function ev(n,e,t,i){return[n,!0,0,e,null,i,null,t,null,null]}function tv(n,e){let t=n.contentQueries;if(t!==null){let i=Ge(null);try{for(let r=0;r<t.length;r+=2){let s=t[r],o=t[r+1];if(o!==-1){let a=n.data[o];Xd(s),a.contentQueries(2,e[o],o)}}}finally{Ge(i)}}}function Sc(n,e){return n[mo]?n[Vm][kn]=e:n[mo]=e,n[Vm]=e,e}function ld(n,e,t){Xd(0);let i=Ge(null);try{e(n,t)}finally{Ge(i)}}function nv(n){return n[qa]??=[]}function iv(n){return n.cleanup??=[]}function rv(n,e){let t=n[rs],i=t?t.get(li,null):null;i&&i.handleError(e)}function gf(n,e,t,i,r){for(let s=0;s<t.length;){let o=t[s++],a=t[s++],c=t[s++],l=e[o],u=n.data[o];G0(u,l,i,a,c,r)}}function eE(n,e,t){let i=qg(e,n);dw(n[Ft],i,t)}function tE(n,e){let t=Li(e,n),i=t[Re];nE(i,t);let r=t[di];r!==null&&t[po]===null&&(t[po]=lf(r,t[rs])),vf(i,t,t[Yt])}function nE(n,e){for(let t=e.length;t<n.blueprint.length;t++)e.push(n.blueprint[t])}function vf(n,e,t){Yd(e);try{let i=n.viewQuery;i!==null&&ld(1,i,t);let r=n.template;r!==null&&j0(n,e,r,1,t),n.firstCreatePass&&(n.firstCreatePass=!1),e[ci]?.finishViewCreation(n),n.staticContentQueries&&tv(n,e),n.staticViewQueries&&ld(2,n.viewQuery,t);let s=n.components;s!==null&&iE(e,s)}catch(i){throw n.firstCreatePass&&(n.incompleteFirstPass=!0,n.firstCreatePass=!1),i}finally{e[Ae]&=-5,Zd()}}function iE(n,e){for(let t=0;t<e.length;t++)tE(n,e[t])}function Cc(n,e,t,i){let r=Ge(null);try{let s=e.tView,a=n[Ae]&4096?4096:16,c=wc(n,s,t,a,null,e,null,null,i?.injector??null,i?.embeddedViewInjector??null,i?.dehydratedView??null),l=n[e.index];c[cr]=l;let u=n[ci];return u!==null&&(c[ci]=u.createEmbeddedView(s)),vf(s,c,t),c}finally{Ge(r)}}function sv(n,e){let t=Zt+e;if(t<n.length)return n[t]}function vo(n,e){return!e||e.firstChild===null||w0(n)}function Dc(n,e,t,i=!0){let r=e[Re];if(mw(r,e,n,t),i){let o=ad(t,n),a=e[Ft],c=U0(a,n[lr]);c!==null&&hw(r,n[Vn],a,e,c,o)}let s=e[po];s!==null&&s.firstChild!==null&&(s.firstChild=null)}function ov(n,e){let t=go(n,e);return t!==void 0&&Mc(t[Re],t),t}function ic(n,e,t,i,r=!1){for(;t!==null;){if(t.type===128){t=r?t.projectionNext:t.next;continue}let s=e[t.index];s!==null&&i.push(ei(s)),fi(s)&&rE(s,i);let o=t.type;if(o&8)ic(n,e,t.child,i);else if(o&32){let a=df(t,e),c;for(;c=a();)i.push(c)}else if(o&16){let a=V0(e,t);if(Array.isArray(a))i.push(...a);else{let c=ur(e[Un]);ic(c[Re],c,a,i,!0)}}t=r?t.projectionNext:t.next}return i}function rE(n,e){for(let t=Zt;t<n.length;t++){let i=n[t],r=i[Re].firstChild;r!==null&&ic(i[Re],i,r,e)}n[lr]!==n[di]&&e.push(n[lr])}var av=[];function sE(n){return n[Cn]??oE(n)}function oE(n){let e=av.pop()??Object.create(cE);return e.lView=n,e}function aE(n){n.lView[Cn]!==n&&(n.lView=null,av.push(n))}var cE=ut(it({},ro),{consumerIsAlwaysLive:!0,consumerMarkedDirty:n=>{yc(n.lView)},consumerOnSignalRead(){this.lView[Cn]=this}});function lE(n){let e=n[Cn]??Object.create(uE);return e.lView=n,e}var uE=ut(it({},ro),{consumerIsAlwaysLive:!0,consumerMarkedDirty:n=>{let e=ur(n.lView);for(;e&&!cv(e[Re]);)e=ur(e);e&&Yg(e)},consumerOnSignalRead(){this.lView[Cn]=this}});function cv(n){return n.type!==2}var dE=100;function lv(n,e=!0,t=0){let i=n[Qn],r=i.rendererFactory,s=!1;s||r.begin?.();try{fE(n,t)}catch(o){throw e&&rv(n,o),o}finally{s||(r.end?.(),i.inlineEffectRunner?.flush())}}function fE(n,e){let t=t0();try{zm(!0),ud(n,e);let i=0;for(;vc(n);){if(i===dE)throw new Ve(103,!1);i++,ud(n,1)}}finally{zm(t)}}function hE(n,e,t,i){let r=e[Ae];if((r&256)===256)return;let s=!1,o=!1;!s&&e[Qn].inlineEffectRunner?.flush(),Yd(e);let a=!0,c=null,l=null;s||(cv(n)?(l=sE(e),c=da(l)):$p()===null?(a=!1,l=lE(e),c=da(l)):e[Cn]&&(hu(e[Cn]),e[Cn]=null));try{Xg(e),hb(n.bindingStartIndex),t!==null&&j0(n,e,t,2,i);let u=(r&3)===3;if(!s)if(u){let h=n.preOrderCheckHooks;h!==null&&ka(e,h,null)}else{let h=n.preOrderHooks;h!==null&&Ua(e,h,0,null),Tu(e,0)}if(o||pE(e),uv(e,0),n.contentQueries!==null&&tv(n,e),!s)if(u){let h=n.contentCheckHooks;h!==null&&ka(e,h)}else{let h=n.contentHooks;h!==null&&Ua(e,h,1),Tu(e,1)}Aw(n,e);let d=n.components;d!==null&&fv(e,d,0);let f=n.viewQuery;if(f!==null&&ld(2,f,i),!s)if(u){let h=n.viewCheckHooks;h!==null&&ka(e,h)}else{let h=n.viewHooks;h!==null&&Ua(e,h,2),Tu(e,2)}if(n.firstUpdatePass===!0&&(n.firstUpdatePass=!1),e[Du]){for(let h of e[Du])h();e[Du]=null}s||(e[Ae]&=-73)}catch(u){throw s||yc(e),u}finally{l!==null&&(du(l,c),a&&aE(l)),Zd()}}function uv(n,e){for(let t=S0(n);t!==null;t=C0(t))for(let i=Zt;i<t.length;i++){let r=t[i];dv(r,e)}}function pE(n){for(let e=S0(n);e!==null;e=C0(e)){if(!(e[Ae]&Ya.HasTransplantedViews))continue;let t=e[ss];for(let i=0;i<t.length;i++){let r=t[i];Yg(r)}}}function mE(n,e,t){let i=Li(e,n);dv(i,t)}function dv(n,e){qd(n)&&ud(n,e)}function ud(n,e){let i=n[Re],r=n[Ae],s=n[Cn],o=!!(e===0&&r&16);if(o||=!!(r&64&&e===0),o||=!!(r&1024),o||=!!(s?.dirty&&fu(s)),o||=!1,s&&(s.dirty=!1),n[Ae]&=-9217,o)hE(i,n,i.template,n[Yt]);else if(r&8192){uv(n,1);let a=i.components;a!==null&&fv(n,a,1)}}function fv(n,e,t){for(let i=0;i<e.length;i++)mE(n,e[i],t)}function yf(n,e){let t=t0()?64:1088;for(n[Qn].changeDetectionScheduler?.notify(e);n;){n[Ae]|=t;let i=ur(n);if($u(n)&&!i)return n;n=i}return null}var mr=class{get rootNodes(){let e=this._lView,t=e[Re];return ic(t,e,t.firstChild,[])}constructor(e,t,i=!0){this._lView=e,this._cdRefInjectingView=t,this.notifyErrorHandler=i,this._appRef=null,this._attachedToViewContainer=!1}get context(){return this._lView[Yt]}set context(e){this._lView[Yt]=e}get destroyed(){return(this._lView[Ae]&256)===256}destroy(){if(this._appRef)this._appRef.detachView(this);else if(this._attachedToViewContainer){let e=this._lView[Jt];if(fi(e)){let t=e[Xa],i=t?t.indexOf(this):-1;i>-1&&(go(e,i),Wa(t,i))}this._attachedToViewContainer=!1}Mc(this._lView[Re],this._lView)}onDestroy(e){Zg(this._lView,e)}markForCheck(){yf(this._cdRefInjectingView||this._lView,4)}detach(){this._lView[Ae]&=-129}reattach(){Xu(this._lView),this._lView[Ae]|=128}detectChanges(){this._lView[Ae]|=1024,lv(this._lView,this.notifyErrorHandler)}checkNoChanges(){}attachToViewContainerRef(){if(this._appRef)throw new Ve(902,!1);this._attachedToViewContainer=!0}detachFromAppRef(){this._appRef=null;let e=$u(this._lView),t=this._lView[cr];t!==null&&!e&&ff(t,this._lView),F0(this._lView[Re],this._lView)}attachToAppRef(e){if(this._attachedToViewContainer)throw new Ve(902,!1);this._appRef=e;let t=$u(this._lView),i=this._lView[cr];i!==null&&!t&&L0(i,this._lView),Xu(this._lView)}},gr=(()=>{class n{static{this.__NG_ELEMENT_ID__=yE}}return n})(),gE=gr,vE=class extends gE{constructor(e,t,i){super(),this._declarationLView=e,this._declarationTContainer=t,this.elementRef=i}get ssrId(){return this._declarationTContainer.tView?.ssrId||null}createEmbeddedView(e,t){return this.createEmbeddedViewImpl(e,t)}createEmbeddedViewImpl(e,t,i){let r=Cc(this._declarationLView,this._declarationTContainer,e,{embeddedViewInjector:t,dehydratedView:i});return new mr(r)}};function yE(){return _f(un(),Ke())}function _f(n,e){return n.type&4?new vE(e,n,gs(n,e)):null}var iF=new RegExp(`^(\\d+)*(${iw}|${nw})*(.*)`);var _E=()=>null;function yo(n,e){return _E(n,e)}var cs=class{},Tc=new qe("",{providedIn:"root",factory:()=>!1});var hv=new qe(""),pv=new qe(""),dd=class{},rc=class{};function xE(n){let e=Error(`No component factory found for ${_n(n)}.`);return e[ME]=n,e}var ME="ngComponent";var fd=class{resolveComponentFactory(e){throw xE(e)}},_o=class{static{this.NULL=new fd}},ls=class{},So=(()=>{class n{constructor(){this.destroyNode=null}static{this.__NG_ELEMENT_ID__=()=>bE()}}return n})();function bE(){let n=Ke(),e=un(),t=Li(e.index,n);return(Ri(t)?t:n)[Ft]}var wE=(()=>{class n{static{this.\u0275prov=yt({token:n,providedIn:"root",factory:()=>null})}}return n})();function hd(n,e,t){let i=t?n.styles:null,r=t?n.classes:null,s=0;if(e!==null)for(let o=0;o<e.length;o++){let a=e[o];if(typeof a=="number")s=a;else if(s==1)r=Am(r,a);else if(s==2){let c=a,l=e[++o];i=Am(i,c+": "+l+";")}}t?n.styles=i:n.stylesWithoutHost=i,t?n.classes=r:n.classesWithoutHost=r}var pd=class extends _o{constructor(e){super(),this.ngModule=e}resolveComponentFactory(e){let t=ns(e);return new sc(t,this.ngModule)}};function tg(n,e){let t=[];for(let i in n){if(!n.hasOwnProperty(i))continue;let r=n[i];if(r===void 0)continue;let s=Array.isArray(r),o=s?r[0]:r,a=s?r[1]:Ni.None;e?t.push({propName:o,templateName:i,isSignal:(a&Ni.SignalBased)!==0}):t.push({propName:o,templateName:i})}return t}function EE(n){let e=n.toLowerCase();return e==="svg"?$g:e==="math"?KM:null}var sc=class extends rc{get inputs(){let e=this.componentDef,t=e.inputTransforms,i=tg(e.inputs,!0);if(t!==null)for(let r of i)t.hasOwnProperty(r.propName)&&(r.transform=t[r.propName]);return i}get outputs(){return tg(this.componentDef.outputs,!1)}constructor(e,t){super(),this.componentDef=e,this.ngModule=t,this.componentType=e.type,this.selector=IM(e.selectors),this.ngContentSelectors=e.ngContentSelectors?e.ngContentSelectors:[],this.isBoundToModule=!!t}create(e,t,i,r){let s=Ge(null);try{r=r||this.ngModule;let o=r instanceof Oi?r:r?.injector;o&&this.componentDef.getStandaloneInjector!==null&&(o=this.componentDef.getStandaloneInjector(o)||o);let a=o?new Zu(e,o):e,c=a.get(ls,null);if(c===null)throw new Ve(407,!1);let l=a.get(wE,null),u=a.get(cs,null),d={rendererFactory:c,sanitizer:l,inlineEffectRunner:null,changeDetectionScheduler:u},f=c.createRenderer(null,this.componentDef),h=this.componentDef.selectors[0][0]||"div",g=i?Rw(f,i,this.componentDef.encapsulation,a):O0(f,h,EE(h)),v=512;this.componentDef.signals?v|=4096:this.componentDef.onPush||(v|=16);let m=null;g!==null&&(m=lf(g,a,!0));let p=mf(0,null,null,1,0,null,null,null,null,null,null),b=wc(null,p,null,v,null,null,d,f,a,null,m);Yd(b);let M,E,F=null;try{let C=this.componentDef,D,O=null;C.findHostDirectiveDefs?(D=[],O=new Map,C.findHostDirectiveDefs(C,D,O),D.push(C)):D=[C];let w=SE(b,g);F=CE(w,g,C,D,b,d,f),E=$d(p,Dn),g&&AE(f,C,g,i),t!==void 0&&IE(E,this.ngContentSelectors,t),M=TE(F,C,D,O,b,[PE]),vf(p,b,null)}catch(C){throw F!==null&&sd(F),sd(b),C}finally{Zd()}return new md(this.componentType,M,gs(E,b),b,E)}finally{Ge(s)}}},md=class extends dd{constructor(e,t,i,r,s){super(),this.location=i,this._rootLView=r,this._tNode=s,this.previousInputValues=null,this.instance=t,this.hostView=this.changeDetectorRef=new mr(r,void 0,!1),this.componentType=e}setInput(e,t){let i=this._tNode.inputs,r;if(i!==null&&(r=i[e])){if(this.previousInputValues??=new Map,this.previousInputValues.has(e)&&Object.is(this.previousInputValues.get(e),t))return;let s=this._rootLView;gf(s[Re],s,r,e,t),this.previousInputValues.set(e,t);let o=Li(this._tNode.index,s);yf(o,1)}}get injector(){return new ar(this._tNode,this._rootLView)}destroy(){this.hostView.destroy()}onDestroy(e){this.hostView.onDestroy(e)}};function SE(n,e){let t=n[Re],i=Dn;return n[i]=e,Ec(t,i,2,"#host",null)}function CE(n,e,t,i,r,s,o){let a=r[Re];DE(i,n,e,o);let c=null;e!==null&&(c=lf(e,r[rs]));let l=s.rendererFactory.createRenderer(e,t),u=16;t.signals?u=4096:t.onPush&&(u=64);let d=wc(r,Y0(t),null,u,r[n.index],n,s,l,null,null,c);return a.firstCreatePass&&cd(a,n,i.length-1),Sc(r,d),r[n.index]=d}function DE(n,e,t,i){for(let r of n)e.mergedAttrs=ho(e.mergedAttrs,r.hostAttrs);e.mergedAttrs!==null&&(hd(e,e.mergedAttrs,!0),t!==null&&z0(i,t,e))}function TE(n,e,t,i,r,s){let o=un(),a=r[Re],c=Tn(o,r);K0(a,r,o,t,null,i);for(let u=0;u<t.length;u++){let d=o.directiveStart+u,f=hr(r,a,d,o);pr(f,r)}Q0(a,r,o),c&&pr(c,r);let l=hr(r,a,o.directiveStart+o.componentOffset,o);if(n[Yt]=r[Yt]=l,s!==null)for(let u of s)u(l,e);return $0(a,o,r),l}function AE(n,e,t,i){if(i)Hu(n,t,["ng-version","18.2.14"]);else{let{attrs:r,classes:s}=PM(e.selectors[0]);r&&Hu(n,t,r),s&&s.length>0&&B0(n,t,s.join(" "))}}function IE(n,e,t){let i=n.projection=[];for(let r=0;r<e.length;r++){let s=t[r];i.push(s!=null?Array.from(s):null)}}function PE(){let n=un();ef(Ke()[Re],n)}var ys=(()=>{class n{static{this.__NG_ELEMENT_ID__=RE}}return n})();function RE(){let n=un();return gv(n,Ke())}var NE=ys,mv=class extends NE{constructor(e,t,i){super(),this._lContainer=e,this._hostTNode=t,this._hostLView=i}get element(){return gs(this._hostTNode,this._hostLView)}get injector(){return new ar(this._hostTNode,this._hostLView)}get parentInjector(){let e=tf(this._hostTNode,this._hostLView);if(u0(e)){let t=Ja(e,this._hostLView),i=Za(e),r=t[Re].data[i+8];return new ar(r,t)}else return new ar(null,this._hostLView)}clear(){for(;this.length>0;)this.remove(this.length-1)}get(e){let t=ng(this._lContainer);return t!==null&&t[e]||null}get length(){return this._lContainer.length-Zt}createEmbeddedView(e,t,i){let r,s;typeof i=="number"?r=i:i!=null&&(r=i.index,s=i.injector);let o=yo(this._lContainer,e.ssrId),a=e.createEmbeddedViewImpl(t||{},s,o);return this.insertImpl(a,r,vo(this._hostTNode,o)),a}createComponent(e,t,i,r,s){let o=e&&!XM(e),a;if(o)a=t;else{let g=t||{};a=g.index,i=g.injector,r=g.projectableNodes,s=g.environmentInjector||g.ngModuleRef}let c=o?e:new sc(ns(e)),l=i||this.parentInjector;if(!s&&c.ngModule==null){let v=(o?l:this.parentInjector).get(Oi,null);v&&(s=v)}let u=ns(c.componentType??{}),d=yo(this._lContainer,u?.id??null),f=d?.firstChild??null,h=c.create(l,r,f,s);return this.insertImpl(h.hostView,a,vo(this._hostTNode,d)),h}insert(e,t){return this.insertImpl(e,t,!0)}insertImpl(e,t,i){let r=e._lView;if(eb(r)){let a=this.indexOf(e);if(a!==-1)this.detach(a);else{let c=r[Jt],l=new mv(c,c[Vn],c[Jt]);l.detach(l.indexOf(e))}}let s=this._adjustIndex(t),o=this._lContainer;return Dc(o,r,s,i),e.attachToViewContainerRef(),Sg(Nu(o),s,e),e}move(e,t){return this.insert(e,t)}indexOf(e){let t=ng(this._lContainer);return t!==null?t.indexOf(e):-1}remove(e){let t=this._adjustIndex(e,-1),i=go(this._lContainer,t);i&&(Wa(Nu(this._lContainer),t),Mc(i[Re],i))}detach(e){let t=this._adjustIndex(e,-1),i=go(this._lContainer,t);return i&&Wa(Nu(this._lContainer),t)!=null?new mr(i):null}_adjustIndex(e,t=0){return e??this.length+t}};function ng(n){return n[Xa]}function Nu(n){return n[Xa]||(n[Xa]=[])}function gv(n,e){let t,i=e[n.index];return fi(i)?t=i:(t=ev(i,e,null,n),e[n.index]=t,Sc(e,t)),FE(t,e,n,i),new mv(t,n,e)}function OE(n,e){let t=n[Ft],i=t.createComment(""),r=Tn(e,n),s=U0(t,r);return nc(t,s,i,xw(t,r),!1),i}var FE=UE,LE=()=>!1;function kE(n,e,t){return LE(n,e,t)}function UE(n,e,t,i){if(n[lr])return;let r;t.type&8?r=ei(i):r=OE(e,t),n[lr]=r}var gd=class n{constructor(e){this.queryList=e,this.matches=null}clone(){return new n(this.queryList)}setDirty(){this.queryList.setDirty()}},vd=class n{constructor(e=[]){this.queries=e}createEmbeddedView(e){let t=e.queries;if(t!==null){let i=e.contentQueries!==null?e.contentQueries[0]:t.length,r=[];for(let s=0;s<i;s++){let o=t.getByIndex(s),a=this.queries[o.indexInDeclarationView];r.push(a.clone())}return new n(r)}return null}insertView(e){this.dirtyQueriesWithMatches(e)}detachView(e){this.dirtyQueriesWithMatches(e)}finishViewCreation(e){this.dirtyQueriesWithMatches(e)}dirtyQueriesWithMatches(e){for(let t=0;t<this.queries.length;t++)_v(e,t).matches!==null&&this.queries[t].setDirty()}},yd=class{constructor(e,t,i=null){this.flags=t,this.read=i,typeof e=="string"?this.predicate=jE(e):this.predicate=e}},_d=class n{constructor(e=[]){this.queries=e}elementStart(e,t){for(let i=0;i<this.queries.length;i++)this.queries[i].elementStart(e,t)}elementEnd(e){for(let t=0;t<this.queries.length;t++)this.queries[t].elementEnd(e)}embeddedTView(e){let t=null;for(let i=0;i<this.length;i++){let r=t!==null?t.length:0,s=this.getByIndex(i).embeddedTView(e,r);s&&(s.indexInDeclarationView=i,t!==null?t.push(s):t=[s])}return t!==null?new n(t):null}template(e,t){for(let i=0;i<this.queries.length;i++)this.queries[i].template(e,t)}getByIndex(e){return this.queries[e]}get length(){return this.queries.length}track(e){this.queries.push(e)}},xd=class n{constructor(e,t=-1){this.metadata=e,this.matches=null,this.indexInDeclarationView=-1,this.crossesNgTemplate=!1,this._appliesToNextNode=!0,this._declarationNodeIndex=t}elementStart(e,t){this.isApplyingToNode(t)&&this.matchTNode(e,t)}elementEnd(e){this._declarationNodeIndex===e.index&&(this._appliesToNextNode=!1)}template(e,t){this.elementStart(e,t)}embeddedTView(e,t){return this.isApplyingToNode(e)?(this.crossesNgTemplate=!0,this.addMatch(-e.index,t),new n(this.metadata)):null}isApplyingToNode(e){if(this._appliesToNextNode&&(this.metadata.flags&1)!==1){let t=this._declarationNodeIndex,i=e.parent;for(;i!==null&&i.type&8&&i.index!==t;)i=i.parent;return t===(i!==null?i.index:-1)}return this._appliesToNextNode}matchTNode(e,t){let i=this.metadata.predicate;if(Array.isArray(i))for(let r=0;r<i.length;r++){let s=i[r];this.matchTNodeWithReadOption(e,t,VE(t,s)),this.matchTNodeWithReadOption(e,t,Va(t,e,s,!1,!1))}else i===gr?t.type&4&&this.matchTNodeWithReadOption(e,t,-1):this.matchTNodeWithReadOption(e,t,Va(t,e,i,!1,!1))}matchTNodeWithReadOption(e,t,i){if(i!==null){let r=this.metadata.read;if(r!==null)if(r===hi||r===ys||r===gr&&t.type&4)this.addMatch(t.index,-2);else{let s=Va(t,e,r,!1,!1);s!==null&&this.addMatch(t.index,s)}else this.addMatch(t.index,i)}}addMatch(e,t){this.matches===null?this.matches=[e,t]:this.matches.push(e,t)}};function VE(n,e){let t=n.localNames;if(t!==null){for(let i=0;i<t.length;i+=2)if(t[i]===e)return t[i+1]}return null}function BE(n,e){return n.type&11?gs(n,e):n.type&4?_f(n,e):null}function zE(n,e,t,i){return t===-1?BE(e,n):t===-2?HE(n,e,i):hr(n,n[Re],t,e)}function HE(n,e,t){if(t===hi)return gs(e,n);if(t===gr)return _f(e,n);if(t===ys)return gv(e,n)}function vv(n,e,t,i){let r=e[ci].queries[i];if(r.matches===null){let s=n.data,o=t.matches,a=[];for(let c=0;o!==null&&c<o.length;c+=2){let l=o[c];if(l<0)a.push(null);else{let u=s[l];a.push(zE(e,u,o[c+1],t.metadata.read))}}r.matches=a}return r.matches}function Md(n,e,t,i){let r=n.queries.getByIndex(t),s=r.matches;if(s!==null){let o=vv(n,e,r,t);for(let a=0;a<s.length;a+=2){let c=s[a];if(c>0)i.push(o[a/2]);else{let l=s[a+1],u=e[-c];for(let d=Zt;d<u.length;d++){let f=u[d];f[cr]===f[Jt]&&Md(f[Re],f,l,i)}if(u[ss]!==null){let d=u[ss];for(let f=0;f<d.length;f++){let h=d[f];Md(h[Re],h,l,i)}}}}}return i}function yv(n,e){return n[ci].queries[e].queryList}function GE(n,e,t){let i=new rd((t&4)===4);return Fw(n,e,i,i.destroy),(e[ci]??=new vd).queries.push(new gd(i))-1}function WE(n,e,t){let i=on();return i.firstCreatePass&&($E(i,new yd(n,e,t),-1),(e&2)===2&&(i.staticViewQueries=!0)),GE(i,Ke(),e)}function jE(n){return n.split(",").map(e=>e.trim())}function $E(n,e,t){n.queries===null&&(n.queries=new _d),n.queries.track(new xd(e,t))}function _v(n,e){return n.queries.getByIndex(e)}function qE(n,e){let t=n[Re],i=_v(t,e);return i.crossesNgTemplate?Md(t,n,e,[]):vv(t,n,i,e)}var ig=new Set;function xr(n){ig.has(n)||(ig.add(n),performance?.mark?.("mark_feature_usage",{detail:{feature:n}}))}function XE(n){return typeof n=="function"&&n[On]!==void 0}function bt(n,e){xr("NgSignals");let t=nm(n),i=t[On];return e?.equal&&(i.equal=e.equal),t.set=r=>mu(i,r),t.update=r=>im(i,r),t.asReadonly=YE.bind(t),t}function YE(){let n=this[On];if(n.readonlyFn===void 0){let e=()=>this();e[On]=n,n.readonlyFn=e}return n.readonlyFn}function xv(n){return XE(n)&&typeof n.set=="function"}function Mv(n,e){let t,i=pu(()=>{t._dirtyCounter();let r=QE(t,n);if(e&&r===void 0)throw new Ve(-951,!1);return r});return t=i[On],t._dirtyCounter=bt(0),t._flatValue=void 0,i}function ZE(){return Mv(!0,!1)}function JE(){return Mv(!0,!0)}function KE(n,e){let t=n[On];t._lView=Ke(),t._queryIndex=e,t._queryList=yv(t._lView,e),t._queryList.onDirty(()=>t._dirtyCounter.update(i=>i+1))}function QE(n,e){let t=n._lView,i=n._queryIndex;if(t===void 0||i===void 0||t[Ae]&4)return e?void 0:yn;let r=yv(t,i),s=qE(t,i);return r.reset(s,Yb),e?r.first:r._changesDetected||n._flatValue===void 0?n._flatValue=r.toArray():n._flatValue}function rg(n,e){return ZE()}function eS(n,e){return JE()}var qt=(rg.required=eS,rg);function tS(n){return Object.getPrototypeOf(n.prototype).constructor}function mi(n){let e=tS(n.type),t=!0,i=[n];for(;e;){let r;if(Fi(n))r=e.\u0275cmp||e.\u0275dir;else{if(e.\u0275cmp)throw new Ve(903,!1);r=e.\u0275dir}if(r){if(t){i.push(r);let o=n;o.inputs=Na(n.inputs),o.inputTransforms=Na(n.inputTransforms),o.declaredInputs=Na(n.declaredInputs),o.outputs=Na(n.outputs);let a=r.hostBindings;a&&oS(n,a);let c=r.viewQuery,l=r.contentQueries;if(c&&rS(n,c),l&&sS(n,l),nS(n,r),Yx(n.outputs,r.outputs),Fi(r)&&r.data.animation){let u=n.data;u.animation=(u.animation||[]).concat(r.data.animation)}}let s=r.features;if(s)for(let o=0;o<s.length;o++){let a=s[o];a&&a.ngInherit&&a(n),a===mi&&(t=!1)}}e=Object.getPrototypeOf(e)}iS(i)}function nS(n,e){for(let t in e.inputs){if(!e.inputs.hasOwnProperty(t)||n.inputs.hasOwnProperty(t))continue;let i=e.inputs[t];if(i!==void 0&&(n.inputs[t]=i,n.declaredInputs[t]=e.declaredInputs[t],e.inputTransforms!==null)){let r=Array.isArray(i)?i[0]:i;if(!e.inputTransforms.hasOwnProperty(r))continue;n.inputTransforms??={},n.inputTransforms[r]=e.inputTransforms[r]}}}function iS(n){let e=0,t=null;for(let i=n.length-1;i>=0;i--){let r=n[i];r.hostVars=e+=r.hostVars,r.hostAttrs=ho(r.hostAttrs,t=ho(t,r.hostAttrs))}}function Na(n){return n===ts?{}:n===yn?[]:n}function rS(n,e){let t=n.viewQuery;t?n.viewQuery=(i,r)=>{e(i,r),t(i,r)}:n.viewQuery=e}function sS(n,e){let t=n.contentQueries;t?n.contentQueries=(i,r,s)=>{e(i,r,s),t(i,r,s)}:n.contentQueries=e}function oS(n,e){let t=n.hostBindings;t?n.hostBindings=(i,r)=>{e(i,r),t(i,r)}:n.hostBindings=e}var us=class{};var oc=class extends us{constructor(e){super(),this.componentFactoryResolver=new pd(this),this.instance=null;let t=new $a([...e.providers,{provide:us,useValue:this},{provide:_o,useValue:this.componentFactoryResolver}],e.parent||Wd(),e.debugName,new Set(["environment"]));this.injector=t,e.runEnvironmentInitializers&&t.resolveInjectorInitializers()}destroy(){this.injector.destroy()}onDestroy(e){this.injector.onDestroy(e)}};function aS(n,e,t=null){return new oc({providers:n,parent:e,debugName:t,runEnvironmentInitializers:!0}).injector}function bv(n){return lS(n)?Array.isArray(n)||!(n instanceof Map)&&Symbol.iterator in n:!1}function cS(n,e){if(Array.isArray(n))for(let t=0;t<n.length;t++)e(n[t]);else{let t=n[Symbol.iterator](),i;for(;!(i=t.next()).done;)e(i.value)}}function lS(n){return n!==null&&(typeof n=="function"||typeof n=="object")}function uS(n,e,t){return n[e]=t}function dS(n,e){return n[e]}function Mr(n,e,t){let i=n[e];return Object.is(i,t)?!1:(n[e]=t,!0)}function fS(n){return(n.flags&32)===32}function hS(n,e,t,i,r,s,o,a,c){let l=e.consts,u=Ec(e,n,4,o||null,a||null);J0(e,t,u,os(l,c)),ef(e,u);let d=u.tView=mf(2,u,i,r,s,e.directiveRegistry,e.pipeRegistry,null,e.schemas,l,null);return e.queries!==null&&(e.queries.template(e,u),d.queries=e.queries.embeddedTView(u)),u}function bd(n,e,t,i,r,s,o,a,c,l){let u=t+Dn,d=e.firstCreatePass?hS(u,e,n,i,r,s,o,a,c):e.data[u];Eo(d,!1);let f=pS(e,n,d,t);Kd()&&hf(e,n,f,d),pr(f,n);let h=ev(f,n,f,d);return n[u]=h,Sc(n,h),kE(h,d,n),jd(d)&&q0(e,n,d),c!=null&&X0(n,d,l),d}function xn(n,e,t,i,r,s,o,a){let c=Ke(),l=on(),u=os(l.consts,s);return bd(c,l,n,e,t,i,r,u,o,a),xn}var pS=mS;function mS(n,e,t,i){return Qd(!0),e[Ft].createComment("")}var co=function(n){return n[n.EarlyRead=0]="EarlyRead",n[n.Write=1]="Write",n[n.MixedReadWrite=2]="MixedReadWrite",n[n.Read=3]="Read",n}(co||{}),gS=(()=>{class n{constructor(){this.impl=null}execute(){this.impl?.execute()}static{this.\u0275prov=yt({token:n,providedIn:"root",factory:()=>new n})}}return n})(),sg=class n{constructor(){this.ngZone=Ue(at),this.scheduler=Ue(cs),this.errorHandler=Ue(li,{optional:!0}),this.sequences=new Set,this.deferredRegistrations=new Set,this.executing=!1}static{this.PHASES=[co.EarlyRead,co.Write,co.MixedReadWrite,co.Read]}execute(){this.executing=!0;for(let e of n.PHASES)for(let t of this.sequences)if(!(t.erroredOrDestroyed||!t.hooks[e]))try{t.pipelinedValue=this.ngZone.runOutsideAngular(()=>t.hooks[e](t.pipelinedValue))}catch(i){t.erroredOrDestroyed=!0,this.errorHandler?.handleError(i)}this.executing=!1;for(let e of this.sequences)e.afterRun(),e.once&&(this.sequences.delete(e),e.destroy());for(let e of this.deferredRegistrations)this.sequences.add(e);this.deferredRegistrations.size>0&&this.scheduler.notify(7),this.deferredRegistrations.clear()}register(e){this.executing?this.deferredRegistrations.add(e):(this.sequences.add(e),this.scheduler.notify(6))}unregister(e){this.executing&&this.sequences.has(e)?(e.erroredOrDestroyed=!0,e.pipelinedValue=void 0,e.once=!0):(this.sequences.delete(e),this.deferredRegistrations.delete(e))}static{this.\u0275prov=yt({token:n,providedIn:"root",factory:()=>new n})}};function Co(n,e,t,i){let r=Ke(),s=ms();if(Mr(r,s,e)){let o=on(),a=Jd();Zw(a,r,n,e,t,i)}return Co}function vS(n,e,t,i){return Mr(n,ms(),t)?e+fc(t)+i:Ui}function Oa(n,e){return n<<17|e<<2}function vr(n){return n>>17&32767}function yS(n){return(n&2)==2}function _S(n,e){return n&131071|e<<17}function wd(n){return n|2}function ds(n){return(n&131068)>>2}function Ou(n,e){return n&-131069|e<<2}function xS(n){return(n&1)===1}function Ed(n){return n|1}function MS(n,e,t,i,r,s){let o=s?e.classBindings:e.styleBindings,a=vr(o),c=ds(o);n[i]=t;let l=!1,u;if(Array.isArray(t)){let d=t;u=d[1],(u===null||bo(d,u)>0)&&(l=!0)}else u=t;if(r)if(c!==0){let f=vr(n[a+1]);n[i+1]=Oa(f,a),f!==0&&(n[f+1]=Ou(n[f+1],i)),n[a+1]=_S(n[a+1],i)}else n[i+1]=Oa(a,0),a!==0&&(n[a+1]=Ou(n[a+1],i)),a=i;else n[i+1]=Oa(c,0),a===0?a=i:n[c+1]=Ou(n[c+1],i),c=i;l&&(n[i+1]=wd(n[i+1])),og(n,u,i,!0),og(n,u,i,!1),bS(e,u,n,i,s),o=Oa(a,c),s?e.classBindings=o:e.styleBindings=o}function bS(n,e,t,i,r){let s=r?n.residualClasses:n.residualStyles;s!=null&&typeof e=="string"&&bo(s,e)>=0&&(t[i+1]=Ed(t[i+1]))}function og(n,e,t,i){let r=n[t+1],s=e===null,o=i?vr(r):ds(r),a=!1;for(;o!==0&&(a===!1||s);){let c=n[o],l=n[o+1];wS(c,e)&&(a=!0,n[o+1]=i?Ed(l):wd(l)),o=i?vr(l):ds(l)}a&&(n[t+1]=i?wd(r):Ed(r))}function wS(n,e){return n===null||e==null||(Array.isArray(n)?n[1]:n)===e?!0:Array.isArray(n)&&typeof e=="string"?bo(n,e)>=0:!1}function Kt(n,e,t){let i=Ke(),r=ms();if(Mr(i,r,e)){let s=on(),o=Jd();Z0(s,o,i,n,e,i[Ft],t,!1)}return Kt}function ag(n,e,t,i,r){let s=e.inputs,o=r?"class":"style";gf(n,t,s[o],o,i)}function Ac(n,e,t){return wv(n,e,t,!1),Ac}function Lt(n,e){return wv(n,e,null,!0),Lt}function wv(n,e,t,i){let r=Ke(),s=on(),o=pb(2);if(s.firstUpdatePass&&SS(s,n,o,i),e!==Ui&&Mr(r,o,e)){let a=s.data[_r()];IS(s,a,r,r[Ft],n,r[o+1]=PS(e,t),i,o)}}function ES(n,e){return e>=n.expandoStartIndex}function SS(n,e,t,i){let r=n.data;if(r[t+1]===null){let s=r[_r()],o=ES(n,t);RS(s,i)&&e===null&&!o&&(e=!1),e=CS(r,s,e,i),MS(r,s,e,t,o,i)}}function CS(n,e,t,i){let r=yb(n),s=i?e.residualClasses:e.residualStyles;if(r===null)(i?e.classBindings:e.styleBindings)===0&&(t=Fu(null,n,e,t,i),t=xo(t,e.attrs,i),s=null);else{let o=e.directiveStylingLast;if(o===-1||n[o]!==r)if(t=Fu(r,n,e,t,i),s===null){let c=DS(n,e,i);c!==void 0&&Array.isArray(c)&&(c=Fu(null,n,e,c[1],i),c=xo(c,e.attrs,i),TS(n,e,i,c))}else s=AS(n,e,i)}return s!==void 0&&(i?e.residualClasses=s:e.residualStyles=s),t}function DS(n,e,t){let i=t?e.classBindings:e.styleBindings;if(ds(i)!==0)return n[vr(i)]}function TS(n,e,t,i){let r=t?e.classBindings:e.styleBindings;n[vr(r)]=i}function AS(n,e,t){let i,r=e.directiveEnd;for(let s=1+e.directiveStylingLast;s<r;s++){let o=n[s].hostAttrs;i=xo(i,o,t)}return xo(i,e.attrs,t)}function Fu(n,e,t,i,r){let s=null,o=t.directiveEnd,a=t.directiveStylingLast;for(a===-1?a=t.directiveStart:a++;a<o&&(s=e[a],i=xo(i,s.hostAttrs,r),s!==n);)a++;return n!==null&&(t.directiveStylingLast=a),i}function xo(n,e,t){let i=t?1:2,r=-1;if(e!==null)for(let s=0;s<e.length;s++){let o=e[s];typeof o=="number"?r=o:r===i&&(Array.isArray(n)||(n=n===void 0?[]:["",n]),vM(n,o,t?!0:e[++s]))}return n===void 0?null:n}function IS(n,e,t,i,r,s,o,a){if(!(e.type&3))return;let c=n.data,l=c[a+1],u=xS(l)?cg(c,e,t,r,ds(l),o):void 0;if(!ac(u)){ac(s)||yS(l)&&(s=cg(c,null,t,r,a,o));let d=qg(_r(),t);Dw(i,o,d,r,s)}}function cg(n,e,t,i,r,s){let o=e===null,a;for(;r>0;){let c=n[r],l=Array.isArray(c),u=l?c[1]:c,d=u===null,f=t[r+1];f===Ui&&(f=d?yn:void 0);let h=d?Su(f,i):u===i?f:void 0;if(l&&!ac(h)&&(h=Su(c,i)),ac(h)&&(a=h,o))return a;let g=n[r+1];r=o?vr(g):ds(g)}if(e!==null){let c=s?e.residualClasses:e.residualStyles;c!=null&&(a=Su(c,i))}return a}function ac(n){return n!==void 0}function PS(n,e){return n==null||n===""||(typeof e=="string"?n=n+e:typeof n=="object"&&(n=_n(xc(n)))),n}function RS(n,e){return(n.flags&(e?8:16))!==0}var Sd=class{destroy(e){}updateValue(e,t){}swap(e,t){let i=Math.min(e,t),r=Math.max(e,t),s=this.detach(r);if(r-i>1){let o=this.detach(i);this.attach(i,s),this.attach(r,o)}else this.attach(i,s)}move(e,t){this.attach(t,this.detach(e))}};function Lu(n,e,t,i,r){return n===t&&Object.is(e,i)?1:Object.is(r(n,e),r(t,i))?-1:0}function NS(n,e,t){let i,r,s=0,o=n.length-1,a=void 0;if(Array.isArray(e)){let c=e.length-1;for(;s<=o&&s<=c;){let l=n.at(s),u=e[s],d=Lu(s,l,s,u,t);if(d!==0){d<0&&n.updateValue(s,u),s++;continue}let f=n.at(o),h=e[c],g=Lu(o,f,c,h,t);if(g!==0){g<0&&n.updateValue(o,h),o--,c--;continue}let v=t(s,l),m=t(o,f),p=t(s,u);if(Object.is(p,m)){let b=t(c,h);Object.is(b,v)?(n.swap(s,o),n.updateValue(o,h),c--,o--):n.move(o,s),n.updateValue(s,u),s++;continue}if(i??=new cc,r??=ug(n,s,o,t),Cd(n,i,s,p))n.updateValue(s,u),s++,o++;else if(r.has(p))i.set(v,n.detach(s)),o--;else{let b=n.create(s,e[s]);n.attach(s,b),s++,o++}}for(;s<=c;)lg(n,i,t,s,e[s]),s++}else if(e!=null){let c=e[Symbol.iterator](),l=c.next();for(;!l.done&&s<=o;){let u=n.at(s),d=l.value,f=Lu(s,u,s,d,t);if(f!==0)f<0&&n.updateValue(s,d),s++,l=c.next();else{i??=new cc,r??=ug(n,s,o,t);let h=t(s,d);if(Cd(n,i,s,h))n.updateValue(s,d),s++,o++,l=c.next();else if(!r.has(h))n.attach(s,n.create(s,d)),s++,o++,l=c.next();else{let g=t(s,u);i.set(g,n.detach(s)),o--}}}for(;!l.done;)lg(n,i,t,n.length,l.value),l=c.next()}for(;s<=o;)n.destroy(n.detach(o--));i?.forEach(c=>{n.destroy(c)})}function Cd(n,e,t,i){return e!==void 0&&e.has(i)?(n.attach(t,e.get(i)),e.delete(i),!0):!1}function lg(n,e,t,i,r){if(Cd(n,e,i,t(i,r)))n.updateValue(i,r);else{let s=n.create(i,r);n.attach(i,s)}}function ug(n,e,t,i){let r=new Set;for(let s=e;s<=t;s++)r.add(i(s,n.at(s)));return r}var cc=class{constructor(){this.kvMap=new Map,this._vMap=void 0}has(e){return this.kvMap.has(e)}delete(e){if(!this.has(e))return!1;let t=this.kvMap.get(e);return this._vMap!==void 0&&this._vMap.has(t)?(this.kvMap.set(e,this._vMap.get(t)),this._vMap.delete(t)):this.kvMap.delete(e),!0}get(e){return this.kvMap.get(e)}set(e,t){if(this.kvMap.has(e)){let i=this.kvMap.get(e);this._vMap===void 0&&(this._vMap=new Map);let r=this._vMap;for(;r.has(i);)i=r.get(i);r.set(i,t)}else this.kvMap.set(e,t)}forEach(e){for(let[t,i]of this.kvMap)if(e(i,t),this._vMap!==void 0){let r=this._vMap;for(;r.has(i);)i=r.get(i),e(i,t)}}};function Do(n,e){xr("NgControlFlow");let t=Ke(),i=ms(),r=t[i]!==Ui?t[i]:-1,s=r!==-1?lc(t,Dn+r):void 0,o=0;if(Mr(t,i,n)){let a=Ge(null);try{if(s!==void 0&&ov(s,o),n!==-1){let c=Dn+n,l=lc(t,c),u=Id(t[Re],c),d=yo(l,u.tView.ssrId),f=Cc(t,u,e,{dehydratedView:d});Dc(l,f,o,vo(u,d))}}finally{Ge(a)}}else if(s!==void 0){let a=sv(s,o);a!==void 0&&(a[Yt]=e)}}var Dd=class{constructor(e,t,i){this.lContainer=e,this.$implicit=t,this.$index=i}get $count(){return this.lContainer.length-Zt}};function ti(n){return n}var Td=class{constructor(e,t,i){this.hasEmptyBlock=e,this.trackByFn=t,this.liveCollection=i}};function Ht(n,e,t,i,r,s,o,a,c,l,u,d,f){xr("NgControlFlow");let h=Ke(),g=on(),v=c!==void 0,m=Ke(),p=a?o.bind(m[Un][Yt]):o,b=new Td(v,p);m[Dn+n]=b,bd(h,g,n+1,e,t,i,r,os(g.consts,s)),v&&bd(h,g,n+2,c,l,u,d,os(g.consts,f))}var Ad=class extends Sd{constructor(e,t,i){super(),this.lContainer=e,this.hostLView=t,this.templateTNode=i,this.operationsCounter=void 0,this.needsIndexUpdate=!1}get length(){return this.lContainer.length-Zt}at(e){return this.getLView(e)[Yt].$implicit}attach(e,t){let i=t[po];this.needsIndexUpdate||=e!==this.length,Dc(this.lContainer,t,e,vo(this.templateTNode,i))}detach(e){return this.needsIndexUpdate||=e!==this.length-1,OS(this.lContainer,e)}create(e,t){let i=yo(this.lContainer,this.templateTNode.tView.ssrId),r=Cc(this.hostLView,this.templateTNode,new Dd(this.lContainer,t,e),{dehydratedView:i});return this.operationsCounter?.recordCreate(),r}destroy(e){Mc(e[Re],e),this.operationsCounter?.recordDestroy()}updateValue(e,t){this.getLView(e)[Yt].$implicit=t}reset(){this.needsIndexUpdate=!1,this.operationsCounter?.reset()}updateIndexes(){if(this.needsIndexUpdate)for(let e=0;e<this.length;e++)this.getLView(e)[Yt].$index=e}getLView(e){return FS(this.lContainer,e)}};function Gt(n){let e=Ge(null),t=_r();try{let i=Ke(),r=i[Re],s=i[t],o=t+1,a=lc(i,o);if(s.liveCollection===void 0){let l=Id(r,o);s.liveCollection=new Ad(a,i,l)}else s.liveCollection.reset();let c=s.liveCollection;if(NS(c,n,s.trackByFn),c.updateIndexes(),s.hasEmptyBlock){let l=ms(),u=c.length===0;if(Mr(i,l,u)){let d=t+2,f=lc(i,d);if(u){let h=Id(r,d),g=yo(f,h.tView.ssrId),v=Cc(i,h,void 0,{dehydratedView:g});Dc(f,v,0,vo(h,g))}else ov(f,0)}}}finally{Ge(e)}}function lc(n,e){return n[e]}function OS(n,e){return go(n,e)}function FS(n,e){return sv(n,e)}function Id(n,e){return $d(n,e)}function LS(n,e,t,i,r,s){let o=e.consts,a=os(o,r),c=Ec(e,n,2,i,a);return J0(e,t,c,os(o,s)),c.attrs!==null&&hd(c,c.attrs,!1),c.mergedAttrs!==null&&hd(c,c.mergedAttrs,!0),e.queries!==null&&e.queries.elementStart(e,c),c}function L(n,e,t,i){let r=Ke(),s=on(),o=Dn+n,a=r[Ft],c=s.firstCreatePass?LS(o,s,r,e,t,i):s.data[o],l=kS(s,r,c,a,e,n);r[o]=l;let u=jd(c);return Eo(c,!0),z0(a,l,c),!fS(c)&&Kd()&&hf(s,r,l,c),ib()===0&&pr(l,r),rb(),u&&(q0(s,r,c),$0(s,c,r)),i!==null&&X0(r,c),L}function V(){let n=un();e0()?ub():(n=n.parent,Eo(n,!1));let e=n;ab(e)&&cb(),sb();let t=on();return t.firstCreatePass&&(ef(t,n),zg(n)&&t.queries.elementEnd(n)),e.classesWithoutHost!=null&&Db(e)&&ag(t,e,Ke(),e.classesWithoutHost,!0),e.stylesWithoutHost!=null&&Tb(e)&&ag(t,e,Ke(),e.stylesWithoutHost,!1),V}function Ee(n,e,t,i){return L(n,e,t,i),V(),Ee}var kS=(n,e,t,i,r,s)=>(Qd(!0),O0(i,r,wb()));function An(){return Ke()}var uc="en-US";var US=uc;function VS(n){typeof n=="string"&&(US=n.toLowerCase().replace(/_/g,"-"))}var BS=(n,e,t)=>{};function St(n,e,t,i){let r=Ke(),s=on(),o=un();return Ev(s,r,r[Ft],o,n,e,i),St}function zS(n,e,t,i){let r=n.cleanup;if(r!=null)for(let s=0;s<r.length-1;s+=2){let o=r[s];if(o===t&&r[s+1]===i){let a=e[qa],c=r[s+2];return a.length>c?a[c]:null}typeof o=="string"&&(s+=2)}return null}function Ev(n,e,t,i,r,s,o){let a=jd(i),l=n.firstCreatePass&&iv(n),u=e[Yt],d=nv(e),f=!0;if(i.type&3||o){let v=Tn(i,e),m=o?o(v):v,p=d.length,b=o?E=>o(ei(E[i.index])):i.index,M=null;if(!o&&a&&(M=zS(n,e,r,i.index)),M!==null){let E=M.__ngLastListenerFn__||M;E.__ngNextListenerFn__=s,M.__ngLastListenerFn__=s,f=!1}else{s=fg(i,e,u,s),BS(v,r,s);let E=t.listen(m,r,s);d.push(s,E),l&&l.push(r,b,p,p+1)}}else s=fg(i,e,u,s);let h=i.outputs,g;if(f&&h!==null&&(g=h[r])){let v=g.length;if(v)for(let m=0;m<v;m+=2){let p=g[m],b=g[m+1],F=e[p][b].subscribe(s),C=d.length;d.push(s,F),l&&l.push(r,i.index,C,-(C+1))}}}function dg(n,e,t,i){let r=Ge(null);try{return Zn(6,e,t),t(i)!==!1}catch(s){return rv(n,s),!1}finally{Zn(7,e,t),Ge(r)}}function fg(n,e,t,i){return function r(s){if(s===Function)return i;let o=n.componentOffset>-1?Li(n.index,e):e;yf(o,5);let a=dg(e,t,i,s),c=r.__ngNextListenerFn__;for(;c;)a=dg(e,t,c,s)&&a,c=c.__ngNextListenerFn__;return a}}function wt(n=1){return Mb(n)}function Xt(n,e,t,i){KE(n,WE(e,t,i))}function ni(n=1){Xd(_b()+n)}function Sv(n){let e=db();return QM(e,Dn+n)}function W(n,e=""){let t=Ke(),i=on(),r=n+Dn,s=i.firstCreatePass?Ec(i,r,1,e,null):i.data[r],o=HS(i,t,s,e,n);t[r]=o,Kd()&&hf(i,t,o,s),Eo(s,!1)}var HS=(n,e,t,i,r)=>(Qd(!0),uw(e[Ft],i));function ft(n){return dn("",n,""),ft}function dn(n,e,t){let i=Ke(),r=vS(i,n,e,t);return r!==Ui&&eE(i,_r(),r),dn}function _s(n,e,t){xv(e)&&(e=e());let i=Ke(),r=ms();if(Mr(i,r,e)){let s=on(),o=Jd();Z0(s,o,i,n,e,i[Ft],t,!1)}return _s}function To(n,e){let t=xv(n);return t&&n.set(e),t}function xs(n,e){let t=Ke(),i=on(),r=un();return Ev(i,t,t[Ft],r,n,e),xs}function GS(n,e,t){let i=on();if(i.firstCreatePass){let r=Fi(n);Pd(t,i.data,i.blueprint,r,!0),Pd(e,i.data,i.blueprint,r,!1)}}function Pd(n,e,t,i,r){if(n=rn(n),Array.isArray(n))for(let s=0;s<n.length;s++)Pd(n[s],e,t,i,r);else{let s=on(),o=Ke(),a=un(),c=is(n)?n:rn(n.provide),l=Ug(n),u=a.providerIndexes&1048575,d=a.directiveStart,f=a.providerIndexes>>20;if(is(n)||!n.multi){let h=new fr(l,r,ht),g=Uu(c,e,r?u:u+f,d);g===-1?(Ku(Ka(a,o),s,c),ku(s,n,e.length),e.push(c),a.directiveStart++,a.directiveEnd++,r&&(a.providerIndexes+=1048576),t.push(h),o.push(h)):(t[g]=h,o[g]=h)}else{let h=Uu(c,e,u+f,d),g=Uu(c,e,u,u+f),v=h>=0&&t[h],m=g>=0&&t[g];if(r&&!m||!r&&!v){Ku(Ka(a,o),s,c);let p=$S(r?jS:WS,t.length,r,i,l);!r&&m&&(t[g].providerFactory=p),ku(s,n,e.length,0),e.push(c),a.directiveStart++,a.directiveEnd++,r&&(a.providerIndexes+=1048576),t.push(p),o.push(p)}else{let p=Cv(t[r?g:h],l,!r&&i);ku(s,n,h>-1?h:g,p)}!r&&i&&m&&t[g].componentProviders++}}}function ku(n,e,t,i){let r=is(e),s=BM(e);if(r||s){let c=(s?rn(e.useClass):e).prototype.ngOnDestroy;if(c){let l=n.destroyHooks||(n.destroyHooks=[]);if(!r&&e.multi){let u=l.indexOf(t);u===-1?l.push(t,[i,c]):l[u+1].push(i,c)}else l.push(t,c)}}}function Cv(n,e,t){return t&&n.componentProviders++,n.multi.push(e)-1}function Uu(n,e,t,i){for(let r=t;r<i;r++)if(e[r]===n)return r;return-1}function WS(n,e,t,i){return Rd(this.multi,[])}function jS(n,e,t,i){let r=this.multi,s;if(this.providerFactory){let o=this.providerFactory.componentProviders,a=hr(t,t[Re],this.providerFactory.index,i);s=a.slice(0,o),Rd(r,s);for(let c=o;c<a.length;c++)s.push(a[c])}else s=[],Rd(r,s);return s}function Rd(n,e){for(let t=0;t<n.length;t++){let i=n[t];e.push(i())}return e}function $S(n,e,t,i,r){let s=new fr(n,t,ht);return s.multi=[],s.index=e,s.componentProviders=0,Cv(s,r,i&&!t),s}function Ao(n,e=[]){return t=>{t.providersResolver=(i,r)=>GS(i,r?r(n):n,e)}}var qS=(()=>{class n{constructor(t){this._injector=t,this.cachedInjectors=new Map}getOrCreateStandaloneInjector(t){if(!t.standalone)return null;if(!this.cachedInjectors.has(t)){let i=Fg(!1,t.type),r=i.length>0?aS([i],this._injector,`Standalone[${t.type.name}]`):null;this.cachedInjectors.set(t,r)}return this.cachedInjectors.get(t)}ngOnDestroy(){try{for(let t of this.cachedInjectors.values())t!==null&&t.destroy()}finally{this.cachedInjectors.clear()}}static{this.\u0275prov=yt({token:n,providedIn:"environment",factory:()=>new n(dt(Oi))})}}return n})();function Rt(n){xr("NgStandalone"),n.getStandaloneInjector=e=>e.get(qS).getOrCreateStandaloneInjector(n)}function Dv(n,e,t){let i=fb()+n,r=Ke();return r[i]===Ui?uS(r,i,t?e.call(t):e()):dS(r,i)}var Tv=new qe("");function Io(n){return!!n&&typeof n.then=="function"}function Av(n){return!!n&&typeof n.subscribe=="function"}var XS=new qe(""),Iv=(()=>{class n{constructor(){this.initialized=!1,this.done=!1,this.donePromise=new Promise((t,i)=>{this.resolve=t,this.reject=i}),this.appInits=Ue(XS,{optional:!0})??[]}runInitializers(){if(this.initialized)return;let t=[];for(let r of this.appInits){let s=r();if(Io(s))t.push(s);else if(Av(s)){let o=new Promise((a,c)=>{s.subscribe({complete:a,error:c})});t.push(o)}}let i=()=>{this.done=!0,this.resolve()};Promise.all(t).then(()=>{i()}).catch(r=>{this.reject(r)}),t.length===0&&i(),this.initialized=!0}static{this.\u0275fac=function(i){return new(i||n)}}static{this.\u0275prov=yt({token:n,factory:n.\u0275fac,providedIn:"root"})}}return n})(),YS=new qe("");function ZS(){tm(()=>{throw new Ve(600,!1)})}function JS(n){return n.isBoundToModule}var KS=10;function QS(n,e,t){try{let i=t();return Io(i)?i.catch(r=>{throw e.runOutsideAngular(()=>n.handleError(r)),r}):i}catch(i){throw e.runOutsideAngular(()=>n.handleError(i)),i}}var Po=(()=>{class n{constructor(){this._bootstrapListeners=[],this._runningTick=!1,this._destroyed=!1,this._destroyListeners=[],this._views=[],this.internalErrorHandler=Ue(qb),this.afterRenderManager=Ue(gS),this.zonelessEnabled=Ue(Tc),this.dirtyFlags=0,this.deferredDirtyFlags=0,this.externalTestViews=new Set,this.beforeRender=new qn,this.afterTick=new qn,this.componentTypes=[],this.components=[],this.isStable=Ue(_c).hasPendingTasks.pipe(or(t=>!t)),this._injector=Ue(Oi)}get allViews(){return[...this.externalTestViews.keys(),...this._views]}get destroyed(){return this._destroyed}whenStable(){let t;return new Promise(i=>{t=this.isStable.subscribe({next:r=>{r&&i()}})}).finally(()=>{t.unsubscribe()})}get injector(){return this._injector}bootstrap(t,i){let r=t instanceof rc;if(!this._injector.get(Iv).done){let f=!r&&OM(t),h=!1;throw new Ve(405,h)}let o;r?o=t:o=this._injector.get(_o).resolveComponentFactory(t),this.componentTypes.push(o.componentType);let a=JS(o)?void 0:this._injector.get(us),c=i||o.selector,l=o.create(as.NULL,[],c,a),u=l.location.nativeElement,d=l.injector.get(Tv,null);return d?.registerApplication(u),l.onDestroy(()=>{this.detachView(l.hostView),Ba(this.components,l),d?.unregisterApplication(u)}),this._loadComponent(l),l}tick(){this.zonelessEnabled||(this.dirtyFlags|=1),this._tick()}_tick(){if(this._runningTick)throw new Ve(101,!1);let t=Ge(null);try{this._runningTick=!0,this.synchronize()}catch(i){this.internalErrorHandler(i)}finally{this._runningTick=!1,Ge(t),this.afterTick.next()}}synchronize(){let t=null;this._injector.destroyed||(t=this._injector.get(ls,null,{optional:!0})),this.dirtyFlags|=this.deferredDirtyFlags,this.deferredDirtyFlags=0;let i=0;for(;this.dirtyFlags!==0&&i++<KS;)this.synchronizeOnce(t)}synchronizeOnce(t){if(this.dirtyFlags|=this.deferredDirtyFlags,this.deferredDirtyFlags=0,this.dirtyFlags&7){let i=!!(this.dirtyFlags&1);this.dirtyFlags&=-8,this.dirtyFlags|=8,this.beforeRender.next(i);for(let{_lView:r,notifyErrorHandler:s}of this._views)eC(r,s,i,this.zonelessEnabled);if(this.dirtyFlags&=-5,this.syncDirtyFlagsWithViews(),this.dirtyFlags&7)return}else t?.begin?.(),t?.end?.();this.dirtyFlags&8&&(this.dirtyFlags&=-9,this.afterRenderManager.execute()),this.syncDirtyFlagsWithViews()}syncDirtyFlagsWithViews(){if(this.allViews.some(({_lView:t})=>vc(t))){this.dirtyFlags|=2;return}else this.dirtyFlags&=-8}attachView(t){let i=t;this._views.push(i),i.attachToAppRef(this)}detachView(t){let i=t;Ba(this._views,i),i.detachFromAppRef()}_loadComponent(t){this.attachView(t.hostView),this.tick(),this.components.push(t);let i=this._injector.get(YS,[]);[...this._bootstrapListeners,...i].forEach(r=>r(t))}ngOnDestroy(){if(!this._destroyed)try{this._destroyListeners.forEach(t=>t()),this._views.slice().forEach(t=>t.destroy())}finally{this._destroyed=!0,this._views=[],this._bootstrapListeners=[],this._destroyListeners=[]}}onDestroy(t){return this._destroyListeners.push(t),()=>Ba(this._destroyListeners,t)}destroy(){if(this._destroyed)throw new Ve(406,!1);let t=this._injector;t.destroy&&!t.destroyed&&t.destroy()}get viewCount(){return this._views.length}warnIfDestroyed(){}static{this.\u0275fac=function(i){return new(i||n)}}static{this.\u0275prov=yt({token:n,factory:n.\u0275fac,providedIn:"root"})}}return n})();function Ba(n,e){let t=n.indexOf(e);t>-1&&n.splice(t,1)}function eC(n,e,t,i){if(!t&&!vc(n))return;lv(n,e,t&&!i?0:1)}var tC=(()=>{class n{constructor(){this.zone=Ue(at),this.changeDetectionScheduler=Ue(cs),this.applicationRef=Ue(Po)}initialize(){this._onMicrotaskEmptySubscription||(this._onMicrotaskEmptySubscription=this.zone.onMicrotaskEmpty.subscribe({next:()=>{this.changeDetectionScheduler.runningTick||this.zone.run(()=>{this.applicationRef.tick()})}}))}ngOnDestroy(){this._onMicrotaskEmptySubscription?.unsubscribe()}static{this.\u0275fac=function(i){return new(i||n)}}static{this.\u0275prov=yt({token:n,factory:n.\u0275fac,providedIn:"root"})}}return n})(),nC=new qe("",{factory:()=>!1});function Pv({ngZoneFactory:n,ignoreChangesOutsideZone:e,scheduleInRootZone:t}){return n??=()=>new at(ut(it({},Nv()),{scheduleInRootZone:t})),[{provide:at,useFactory:n},{provide:fo,multi:!0,useFactory:()=>{let i=Ue(tC,{optional:!0});return()=>i.initialize()}},{provide:fo,multi:!0,useFactory:()=>{let i=Ue(iC);return()=>{i.initialize()}}},e===!0?{provide:hv,useValue:!0}:[],{provide:pv,useValue:t??_0}]}function Rv(n){let e=n?.ignoreChangesOutsideZone,t=n?.scheduleInRootZone,i=Pv({ngZoneFactory:()=>{let r=Nv(n);return r.scheduleInRootZone=t,r.shouldCoalesceEventChangeDetection&&xr("NgZone_CoalesceEvent"),new at(r)},ignoreChangesOutsideZone:e,scheduleInRootZone:t});return Og([{provide:nC,useValue:!0},{provide:Tc,useValue:!1},i])}function Nv(n){return{enableLongStackTrace:!1,shouldCoalesceEventChangeDetection:n?.eventCoalescing??!1,shouldCoalesceRunChangeDetection:n?.runCoalescing??!1}}var iC=(()=>{class n{constructor(){this.subscription=new nn,this.initialized=!1,this.zone=Ue(at),this.pendingTasks=Ue(_c)}initialize(){if(this.initialized)return;this.initialized=!0;let t=null;!this.zone.isStable&&!this.zone.hasPendingMacrotasks&&!this.zone.hasPendingMicrotasks&&(t=this.pendingTasks.add()),this.zone.runOutsideAngular(()=>{this.subscription.add(this.zone.onStable.subscribe(()=>{at.assertNotInAngularZone(),queueMicrotask(()=>{t!==null&&!this.zone.hasPendingMacrotasks&&!this.zone.hasPendingMicrotasks&&(this.pendingTasks.remove(t),t=null)})}))}),this.subscription.add(this.zone.onUnstable.subscribe(()=>{at.assertInAngularZone(),t??=this.pendingTasks.add()}))}ngOnDestroy(){this.subscription.unsubscribe()}static{this.\u0275fac=function(i){return new(i||n)}}static{this.\u0275prov=yt({token:n,factory:n.\u0275fac,providedIn:"root"})}}return n})();var rC=(()=>{class n{constructor(){this.appRef=Ue(Po),this.taskService=Ue(_c),this.ngZone=Ue(at),this.zonelessEnabled=Ue(Tc),this.disableScheduling=Ue(hv,{optional:!0})??!1,this.zoneIsDefined=typeof Zone<"u"&&!!Zone.root.run,this.schedulerTickApplyArgs=[{data:{__scheduler_tick__:!0}}],this.subscriptions=new nn,this.angularZoneId=this.zoneIsDefined?this.ngZone._inner?.get(ec):null,this.scheduleInRootZone=!this.zonelessEnabled&&this.zoneIsDefined&&(Ue(pv,{optional:!0})??!1),this.cancelScheduledCallback=null,this.useMicrotaskScheduler=!1,this.runningTick=!1,this.pendingRenderTaskId=null,this.subscriptions.add(this.appRef.afterTick.subscribe(()=>{this.runningTick||this.cleanup()})),this.subscriptions.add(this.ngZone.onUnstable.subscribe(()=>{this.runningTick||this.cleanup()})),this.disableScheduling||=!this.zonelessEnabled&&(this.ngZone instanceof id||!this.zoneIsDefined)}notify(t){if(!this.zonelessEnabled&&t===5)return;switch(t){case 0:{this.appRef.dirtyFlags|=2;break}case 3:case 2:case 4:case 5:case 1:{this.appRef.dirtyFlags|=4;break}case 7:{this.appRef.deferredDirtyFlags|=8;break}case 9:case 8:case 6:case 10:default:this.appRef.dirtyFlags|=8}if(!this.shouldScheduleTick())return;let i=this.useMicrotaskScheduler?qm:M0;this.pendingRenderTaskId=this.taskService.add(),this.scheduleInRootZone?this.cancelScheduledCallback=Zone.root.run(()=>i(()=>this.tick())):this.cancelScheduledCallback=this.ngZone.runOutsideAngular(()=>i(()=>this.tick()))}shouldScheduleTick(){return!(this.disableScheduling||this.pendingRenderTaskId!==null||this.runningTick||this.appRef._runningTick||!this.zonelessEnabled&&this.zoneIsDefined&&Zone.current.get(ec+this.angularZoneId))}tick(){if(this.runningTick||this.appRef.destroyed)return;!this.zonelessEnabled&&this.appRef.dirtyFlags&7&&(this.appRef.dirtyFlags|=1);let t=this.taskService.add();try{this.ngZone.run(()=>{this.runningTick=!0,this.appRef._tick()},void 0,this.schedulerTickApplyArgs)}catch(i){throw this.taskService.remove(t),i}finally{this.cleanup()}this.useMicrotaskScheduler=!0,qm(()=>{this.useMicrotaskScheduler=!1,this.taskService.remove(t)})}ngOnDestroy(){this.subscriptions.unsubscribe(),this.cleanup()}cleanup(){if(this.runningTick=!1,this.cancelScheduledCallback?.(),this.cancelScheduledCallback=null,this.pendingRenderTaskId!==null){let t=this.pendingRenderTaskId;this.pendingRenderTaskId=null,this.taskService.remove(t)}}static{this.\u0275fac=function(i){return new(i||n)}}static{this.\u0275prov=yt({token:n,factory:n.\u0275fac,providedIn:"root"})}}return n})();function sC(){return typeof $localize<"u"&&$localize.locale||uc}var xf=new qe("",{providedIn:"root",factory:()=>Ue(xf,$e.Optional|$e.SkipSelf)||sC()});var Nd=new qe("");function Fa(n){return!n.moduleRef}function oC(n){let e=Fa(n)?n.r3Injector:n.moduleRef.injector,t=e.get(at);return t.run(()=>{Fa(n)?n.r3Injector.resolveInjectorInitializers():n.moduleRef.resolveInjectorInitializers();let i=e.get(li,null),r;if(t.runOutsideAngular(()=>{r=t.onError.subscribe({next:s=>{i.handleError(s)}})}),Fa(n)){let s=()=>e.destroy(),o=n.platformInjector.get(Nd);o.add(s),e.onDestroy(()=>{r.unsubscribe(),o.delete(s)})}else{let s=()=>n.moduleRef.destroy(),o=n.platformInjector.get(Nd);o.add(s),n.moduleRef.onDestroy(()=>{Ba(n.allPlatformModules,n.moduleRef),r.unsubscribe(),o.delete(s)})}return QS(i,t,()=>{let s=e.get(Iv);return s.runInitializers(),s.donePromise.then(()=>{let o=e.get(xf,uc);if(VS(o||uc),Fa(n)){let a=e.get(Po);return n.rootComponent!==void 0&&a.bootstrap(n.rootComponent),a}else return aC(n.moduleRef,n.allPlatformModules),n.moduleRef})})})}function aC(n,e){let t=n.injector.get(Po);if(n._bootstrapComponents.length>0)n._bootstrapComponents.forEach(i=>t.bootstrap(i));else if(n.instance.ngDoBootstrap)n.instance.ngDoBootstrap(t);else throw new Ve(-403,!1);e.push(n)}var za=null,Ov=new qe("");function cC(n=[],e){return as.create({name:e,providers:[{provide:pc,useValue:"platform"},{provide:Nd,useValue:new Set([()=>za=null])},...n]})}function lC(n=[]){if(za)return za;let e=cC(n);return e.get(Ov,!1)||(za=e),ZS(),uC(e),e}function uC(n){n.get(af,null)?.forEach(t=>t())}var Ic=(()=>{class n{static{this.__NG_ELEMENT_ID__=dC}}return n})();function dC(n){return fC(un(),Ke(),(n&16)===16)}function fC(n,e,t){if(gc(n)&&!t){let i=Li(n.index,e);return new mr(i,i)}else if(n.type&175){let i=e[Un];return new mr(i,e)}return null}var Od=class{constructor(){}supports(e){return bv(e)}create(e){return new Fd(e)}},hC=(n,e)=>e,Fd=class{constructor(e){this.length=0,this._linkedRecords=null,this._unlinkedRecords=null,this._previousItHead=null,this._itHead=null,this._itTail=null,this._additionsHead=null,this._additionsTail=null,this._movesHead=null,this._movesTail=null,this._removalsHead=null,this._removalsTail=null,this._identityChangesHead=null,this._identityChangesTail=null,this._trackByFn=e||hC}forEachItem(e){let t;for(t=this._itHead;t!==null;t=t._next)e(t)}forEachOperation(e){let t=this._itHead,i=this._removalsHead,r=0,s=null;for(;t||i;){let o=!i||t&&t.currentIndex<hg(i,r,s)?t:i,a=hg(o,r,s),c=o.currentIndex;if(o===i)r--,i=i._nextRemoved;else if(t=t._next,o.previousIndex==null)r++;else{s||(s=[]);let l=a-r,u=c-r;if(l!=u){for(let f=0;f<l;f++){let h=f<s.length?s[f]:s[f]=0,g=h+f;u<=g&&g<l&&(s[f]=h+1)}let d=o.previousIndex;s[d]=u-l}}a!==c&&e(o,a,c)}}forEachPreviousItem(e){let t;for(t=this._previousItHead;t!==null;t=t._nextPrevious)e(t)}forEachAddedItem(e){let t;for(t=this._additionsHead;t!==null;t=t._nextAdded)e(t)}forEachMovedItem(e){let t;for(t=this._movesHead;t!==null;t=t._nextMoved)e(t)}forEachRemovedItem(e){let t;for(t=this._removalsHead;t!==null;t=t._nextRemoved)e(t)}forEachIdentityChange(e){let t;for(t=this._identityChangesHead;t!==null;t=t._nextIdentityChange)e(t)}diff(e){if(e==null&&(e=[]),!bv(e))throw new Ve(900,!1);return this.check(e)?this:null}onDestroy(){}check(e){this._reset();let t=this._itHead,i=!1,r,s,o;if(Array.isArray(e)){this.length=e.length;for(let a=0;a<this.length;a++)s=e[a],o=this._trackByFn(a,s),t===null||!Object.is(t.trackById,o)?(t=this._mismatch(t,s,o,a),i=!0):(i&&(t=this._verifyReinsertion(t,s,o,a)),Object.is(t.item,s)||this._addIdentityChange(t,s)),t=t._next}else r=0,cS(e,a=>{o=this._trackByFn(r,a),t===null||!Object.is(t.trackById,o)?(t=this._mismatch(t,a,o,r),i=!0):(i&&(t=this._verifyReinsertion(t,a,o,r)),Object.is(t.item,a)||this._addIdentityChange(t,a)),t=t._next,r++}),this.length=r;return this._truncate(t),this.collection=e,this.isDirty}get isDirty(){return this._additionsHead!==null||this._movesHead!==null||this._removalsHead!==null||this._identityChangesHead!==null}_reset(){if(this.isDirty){let e;for(e=this._previousItHead=this._itHead;e!==null;e=e._next)e._nextPrevious=e._next;for(e=this._additionsHead;e!==null;e=e._nextAdded)e.previousIndex=e.currentIndex;for(this._additionsHead=this._additionsTail=null,e=this._movesHead;e!==null;e=e._nextMoved)e.previousIndex=e.currentIndex;this._movesHead=this._movesTail=null,this._removalsHead=this._removalsTail=null,this._identityChangesHead=this._identityChangesTail=null}}_mismatch(e,t,i,r){let s;return e===null?s=this._itTail:(s=e._prev,this._remove(e)),e=this._unlinkedRecords===null?null:this._unlinkedRecords.get(i,null),e!==null?(Object.is(e.item,t)||this._addIdentityChange(e,t),this._reinsertAfter(e,s,r)):(e=this._linkedRecords===null?null:this._linkedRecords.get(i,r),e!==null?(Object.is(e.item,t)||this._addIdentityChange(e,t),this._moveAfter(e,s,r)):e=this._addAfter(new Ld(t,i),s,r)),e}_verifyReinsertion(e,t,i,r){let s=this._unlinkedRecords===null?null:this._unlinkedRecords.get(i,null);return s!==null?e=this._reinsertAfter(s,e._prev,r):e.currentIndex!=r&&(e.currentIndex=r,this._addToMoves(e,r)),e}_truncate(e){for(;e!==null;){let t=e._next;this._addToRemovals(this._unlink(e)),e=t}this._unlinkedRecords!==null&&this._unlinkedRecords.clear(),this._additionsTail!==null&&(this._additionsTail._nextAdded=null),this._movesTail!==null&&(this._movesTail._nextMoved=null),this._itTail!==null&&(this._itTail._next=null),this._removalsTail!==null&&(this._removalsTail._nextRemoved=null),this._identityChangesTail!==null&&(this._identityChangesTail._nextIdentityChange=null)}_reinsertAfter(e,t,i){this._unlinkedRecords!==null&&this._unlinkedRecords.remove(e);let r=e._prevRemoved,s=e._nextRemoved;return r===null?this._removalsHead=s:r._nextRemoved=s,s===null?this._removalsTail=r:s._prevRemoved=r,this._insertAfter(e,t,i),this._addToMoves(e,i),e}_moveAfter(e,t,i){return this._unlink(e),this._insertAfter(e,t,i),this._addToMoves(e,i),e}_addAfter(e,t,i){return this._insertAfter(e,t,i),this._additionsTail===null?this._additionsTail=this._additionsHead=e:this._additionsTail=this._additionsTail._nextAdded=e,e}_insertAfter(e,t,i){let r=t===null?this._itHead:t._next;return e._next=r,e._prev=t,r===null?this._itTail=e:r._prev=e,t===null?this._itHead=e:t._next=e,this._linkedRecords===null&&(this._linkedRecords=new dc),this._linkedRecords.put(e),e.currentIndex=i,e}_remove(e){return this._addToRemovals(this._unlink(e))}_unlink(e){this._linkedRecords!==null&&this._linkedRecords.remove(e);let t=e._prev,i=e._next;return t===null?this._itHead=i:t._next=i,i===null?this._itTail=t:i._prev=t,e}_addToMoves(e,t){return e.previousIndex===t||(this._movesTail===null?this._movesTail=this._movesHead=e:this._movesTail=this._movesTail._nextMoved=e),e}_addToRemovals(e){return this._unlinkedRecords===null&&(this._unlinkedRecords=new dc),this._unlinkedRecords.put(e),e.currentIndex=null,e._nextRemoved=null,this._removalsTail===null?(this._removalsTail=this._removalsHead=e,e._prevRemoved=null):(e._prevRemoved=this._removalsTail,this._removalsTail=this._removalsTail._nextRemoved=e),e}_addIdentityChange(e,t){return e.item=t,this._identityChangesTail===null?this._identityChangesTail=this._identityChangesHead=e:this._identityChangesTail=this._identityChangesTail._nextIdentityChange=e,e}},Ld=class{constructor(e,t){this.item=e,this.trackById=t,this.currentIndex=null,this.previousIndex=null,this._nextPrevious=null,this._prev=null,this._next=null,this._prevDup=null,this._nextDup=null,this._prevRemoved=null,this._nextRemoved=null,this._nextAdded=null,this._nextMoved=null,this._nextIdentityChange=null}},kd=class{constructor(){this._head=null,this._tail=null}add(e){this._head===null?(this._head=this._tail=e,e._nextDup=null,e._prevDup=null):(this._tail._nextDup=e,e._prevDup=this._tail,e._nextDup=null,this._tail=e)}get(e,t){let i;for(i=this._head;i!==null;i=i._nextDup)if((t===null||t<=i.currentIndex)&&Object.is(i.trackById,e))return i;return null}remove(e){let t=e._prevDup,i=e._nextDup;return t===null?this._head=i:t._nextDup=i,i===null?this._tail=t:i._prevDup=t,this._head===null}},dc=class{constructor(){this.map=new Map}put(e){let t=e.trackById,i=this.map.get(t);i||(i=new kd,this.map.set(t,i)),i.add(e)}get(e,t){let i=e,r=this.map.get(i);return r?r.get(e,t):null}remove(e){let t=e.trackById;return this.map.get(t).remove(e)&&this.map.delete(t),e}get isEmpty(){return this.map.size===0}clear(){this.map.clear()}};function hg(n,e,t){let i=n.previousIndex;if(i===null)return i;let r=0;return t&&i<t.length&&(r=t[i]),i+e+r}function pg(){return new Mf([new Od])}var Mf=(()=>{class n{static{this.\u0275prov=yt({token:n,providedIn:"root",factory:pg})}constructor(t){this.factories=t}static create(t,i){if(i!=null){let r=i.factories.slice();t=t.concat(r)}return new n(t)}static extend(t){return{provide:n,useFactory:i=>n.create(t,i||pg()),deps:[[n,new hM,new Eg]]}}find(t){let i=this.factories.find(r=>r.supports(t));if(i!=null)return i;throw new Ve(901,!1)}}return n})();function Fv(n){let{rootComponent:e,appProviders:t,platformProviders:i,platformRef:r}=n;try{let s=r?.injector??lC(i);if(s.get(Ov,!1)===!0&&!n.platformRef)throw new Ve(401,!1);let o=[Pv({}),{provide:cs,useExisting:rC},...t||[]],a=new oc({providers:o,parent:s,debugName:"",runEnvironmentInitializers:!1});return oC({r3Injector:a.injector,platformInjector:s,rootComponent:e})}catch(s){return Promise.reject(s)}}function Pc(n){return typeof n=="boolean"?n:n!=null&&n!=="false"}function br(n,e){xr("NgSignals");let t=pu(n);return e?.equal&&(t[On].equal=e.equal),t}function gi(n){let e=Ge(null);try{return n()}finally{Ge(e)}}var Vv=null;function Ms(){return Vv}function Bv(n){Vv??=n}var Rc=class{};var Vi=new qe("");function zv(n,e){e=encodeURIComponent(e);for(let t of n.split(";")){let i=t.indexOf("="),[r,s]=i==-1?[t,""]:[t.slice(0,i),t.slice(i+1)];if(r.trim()===e)return decodeURIComponent(s)}return null}var bf=class{constructor(e,t,i,r){this.$implicit=e,this.ngForOf=t,this.index=i,this.count=r}get first(){return this.index===0}get last(){return this.index===this.count-1}get even(){return this.index%2===0}get odd(){return!this.even}},Hv=(()=>{class n{set ngForOf(t){this._ngForOf=t,this._ngForOfDirty=!0}set ngForTrackBy(t){this._trackByFn=t}get ngForTrackBy(){return this._trackByFn}constructor(t,i,r){this._viewContainer=t,this._template=i,this._differs=r,this._ngForOf=null,this._ngForOfDirty=!0,this._differ=null}set ngForTemplate(t){t&&(this._template=t)}ngDoCheck(){if(this._ngForOfDirty){this._ngForOfDirty=!1;let t=this._ngForOf;if(!this._differ&&t)if(0)try{}catch{}else this._differ=this._differs.find(t).create(this.ngForTrackBy)}if(this._differ){let t=this._differ.diff(this._ngForOf);t&&this._applyChanges(t)}}_applyChanges(t){let i=this._viewContainer;t.forEachOperation((r,s,o)=>{if(r.previousIndex==null)i.createEmbeddedView(this._template,new bf(r.item,this._ngForOf,-1,-1),o===null?void 0:o);else if(o==null)i.remove(s===null?void 0:s);else if(s!==null){let a=i.get(s);i.move(a,o),Lv(a,r)}});for(let r=0,s=i.length;r<s;r++){let a=i.get(r).context;a.index=r,a.count=s,a.ngForOf=this._ngForOf}t.forEachIdentityChange(r=>{let s=i.get(r.currentIndex);Lv(s,r)})}static ngTemplateContextGuard(t,i){return!0}static{this.\u0275fac=function(i){return new(i||n)(ht(ys),ht(gr),ht(Mf))}}static{this.\u0275dir=ln({type:n,selectors:[["","ngFor","","ngForOf",""]],inputs:{ngForOf:"ngForOf",ngForTrackBy:"ngForTrackBy",ngForTemplate:"ngForTemplate"},standalone:!0})}}return n})();function Lv(n,e){n.context.$implicit=e.item}var Gv=(()=>{class n{constructor(t,i){this._viewContainer=t,this._context=new wf,this._thenTemplateRef=null,this._elseTemplateRef=null,this._thenViewRef=null,this._elseViewRef=null,this._thenTemplateRef=i}set ngIf(t){this._context.$implicit=this._context.ngIf=t,this._updateView()}set ngIfThen(t){kv("ngIfThen",t),this._thenTemplateRef=t,this._thenViewRef=null,this._updateView()}set ngIfElse(t){kv("ngIfElse",t),this._elseTemplateRef=t,this._elseViewRef=null,this._updateView()}_updateView(){this._context.$implicit?this._thenViewRef||(this._viewContainer.clear(),this._elseViewRef=null,this._thenTemplateRef&&(this._thenViewRef=this._viewContainer.createEmbeddedView(this._thenTemplateRef,this._context))):this._elseViewRef||(this._viewContainer.clear(),this._thenViewRef=null,this._elseTemplateRef&&(this._elseViewRef=this._viewContainer.createEmbeddedView(this._elseTemplateRef,this._context)))}static ngTemplateContextGuard(t,i){return!0}static{this.\u0275fac=function(i){return new(i||n)(ht(ys),ht(gr))}}static{this.\u0275dir=ln({type:n,selectors:[["","ngIf",""]],inputs:{ngIf:"ngIf",ngIfThen:"ngIfThen",ngIfElse:"ngIfElse"},standalone:!0})}}return n})(),wf=class{constructor(){this.$implicit=null,this.ngIf=null}};function kv(n,e){if(!!!(!e||e.createEmbeddedView))throw new Error(`${n} must be a TemplateRef, but received '${_n(e)}'.`)}var Ro=(()=>{class n{static{this.\u0275fac=function(i){return new(i||n)}}static{this.\u0275mod=hs({type:n})}static{this.\u0275inj=fs({})}}return n})(),Wv="browser",pC="server";function Ef(n){return n===pC}var Nc=class{};var Df=class extends Rc{constructor(){super(...arguments),this.supportsDOMEvents=!0}},Tf=class n extends Df{static makeCurrent(){Bv(new n)}onAndCancel(e,t,i){return e.addEventListener(t,i),()=>{e.removeEventListener(t,i)}}dispatchEvent(e,t){e.dispatchEvent(t)}remove(e){e.remove()}createElement(e,t){return t=t||this.getDefaultDocument(),t.createElement(e)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(e){return e.nodeType===Node.ELEMENT_NODE}isShadowRoot(e){return e instanceof DocumentFragment}getGlobalEventTarget(e,t){return t==="window"?window:t==="document"?e:t==="body"?e.body:null}getBaseHref(e){let t=vC();return t==null?null:yC(t)}resetBaseElement(){No=null}getUserAgent(){return window.navigator.userAgent}getCookie(e){return zv(document.cookie,e)}},No=null;function vC(){return No=No||document.querySelector("base"),No?No.getAttribute("href"):null}function yC(n){return new URL(n,document.baseURI).pathname}var _C=(()=>{class n{build(){return new XMLHttpRequest}static{this.\u0275fac=function(i){return new(i||n)}}static{this.\u0275prov=yt({token:n,factory:n.\u0275fac})}}return n})(),Af=new qe(""),Xv=(()=>{class n{constructor(t,i){this._zone=i,this._eventNameToPlugin=new Map,t.forEach(r=>{r.manager=this}),this._plugins=t.slice().reverse()}addEventListener(t,i,r){return this._findPluginFor(i).addEventListener(t,i,r)}getZone(){return this._zone}_findPluginFor(t){let i=this._eventNameToPlugin.get(t);if(i)return i;if(i=this._plugins.find(s=>s.supports(t)),!i)throw new Ve(5101,!1);return this._eventNameToPlugin.set(t,i),i}static{this.\u0275fac=function(i){return new(i||n)(dt(Af),dt(at))}}static{this.\u0275prov=yt({token:n,factory:n.\u0275fac})}}return n})(),Oc=class{constructor(e){this._doc=e}},Sf="ng-app-id",Yv=(()=>{class n{constructor(t,i,r,s={}){this.doc=t,this.appId=i,this.nonce=r,this.platformId=s,this.styleRef=new Map,this.hostNodes=new Set,this.styleNodesInDOM=this.collectServerRenderedStyles(),this.platformIsServer=Ef(s),this.resetHostNodes()}addStyles(t){for(let i of t)this.changeUsageCount(i,1)===1&&this.onStyleAdded(i)}removeStyles(t){for(let i of t)this.changeUsageCount(i,-1)<=0&&this.onStyleRemoved(i)}ngOnDestroy(){let t=this.styleNodesInDOM;t&&(t.forEach(i=>i.remove()),t.clear());for(let i of this.getAllStyles())this.onStyleRemoved(i);this.resetHostNodes()}addHost(t){this.hostNodes.add(t);for(let i of this.getAllStyles())this.addStyleToHost(t,i)}removeHost(t){this.hostNodes.delete(t)}getAllStyles(){return this.styleRef.keys()}onStyleAdded(t){for(let i of this.hostNodes)this.addStyleToHost(i,t)}onStyleRemoved(t){let i=this.styleRef;i.get(t)?.elements?.forEach(r=>r.remove()),i.delete(t)}collectServerRenderedStyles(){let t=this.doc.head?.querySelectorAll(`style[${Sf}="${this.appId}"]`);if(t?.length){let i=new Map;return t.forEach(r=>{r.textContent!=null&&i.set(r.textContent,r)}),i}return null}changeUsageCount(t,i){let r=this.styleRef;if(r.has(t)){let s=r.get(t);return s.usage+=i,s.usage}return r.set(t,{usage:i,elements:[]}),i}getStyleElement(t,i){let r=this.styleNodesInDOM,s=r?.get(i);if(s?.parentNode===t)return r.delete(i),s.removeAttribute(Sf),s;{let o=this.doc.createElement("style");return this.nonce&&o.setAttribute("nonce",this.nonce),o.textContent=i,this.platformIsServer&&o.setAttribute(Sf,this.appId),t.appendChild(o),o}}addStyleToHost(t,i){let r=this.getStyleElement(t,i),s=this.styleRef,o=s.get(i)?.elements;o?o.push(r):s.set(i,{elements:[r],usage:1})}resetHostNodes(){let t=this.hostNodes;t.clear(),t.add(this.doc.head)}static{this.\u0275fac=function(i){return new(i||n)(dt(Vi),dt(of),dt(cf,8),dt(vs))}}static{this.\u0275prov=yt({token:n,factory:n.\u0275fac})}}return n})(),Cf={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/",math:"http://www.w3.org/1998/Math/MathML"},Pf=/%COMP%/g,Zv="%COMP%",xC=`_nghost-${Zv}`,MC=`_ngcontent-${Zv}`,bC=!0,wC=new qe("",{providedIn:"root",factory:()=>bC});function EC(n){return MC.replace(Pf,n)}function SC(n){return xC.replace(Pf,n)}function Jv(n,e){return e.map(t=>t.replace(Pf,n))}var jv=(()=>{class n{constructor(t,i,r,s,o,a,c,l=null){this.eventManager=t,this.sharedStylesHost=i,this.appId=r,this.removeStylesOnCompDestroy=s,this.doc=o,this.platformId=a,this.ngZone=c,this.nonce=l,this.rendererByCompId=new Map,this.platformIsServer=Ef(a),this.defaultRenderer=new Oo(t,o,c,this.platformIsServer)}createRenderer(t,i){if(!t||!i)return this.defaultRenderer;this.platformIsServer&&i.encapsulation===Kn.ShadowDom&&(i=ut(it({},i),{encapsulation:Kn.Emulated}));let r=this.getOrCreateRenderer(t,i);return r instanceof Fc?r.applyToHost(t):r instanceof Fo&&r.applyStyles(),r}getOrCreateRenderer(t,i){let r=this.rendererByCompId,s=r.get(i.id);if(!s){let o=this.doc,a=this.ngZone,c=this.eventManager,l=this.sharedStylesHost,u=this.removeStylesOnCompDestroy,d=this.platformIsServer;switch(i.encapsulation){case Kn.Emulated:s=new Fc(c,l,i,this.appId,u,o,a,d);break;case Kn.ShadowDom:return new If(c,l,t,i,o,a,this.nonce,d);default:s=new Fo(c,l,i,u,o,a,d);break}r.set(i.id,s)}return s}ngOnDestroy(){this.rendererByCompId.clear()}static{this.\u0275fac=function(i){return new(i||n)(dt(Xv),dt(Yv),dt(of),dt(wC),dt(Vi),dt(vs),dt(at),dt(cf))}}static{this.\u0275prov=yt({token:n,factory:n.\u0275fac})}}return n})(),Oo=class{constructor(e,t,i,r){this.eventManager=e,this.doc=t,this.ngZone=i,this.platformIsServer=r,this.data=Object.create(null),this.throwOnSyntheticProps=!0,this.destroyNode=null}destroy(){}createElement(e,t){return t?this.doc.createElementNS(Cf[t]||t,e):this.doc.createElement(e)}createComment(e){return this.doc.createComment(e)}createText(e){return this.doc.createTextNode(e)}appendChild(e,t){($v(e)?e.content:e).appendChild(t)}insertBefore(e,t,i){e&&($v(e)?e.content:e).insertBefore(t,i)}removeChild(e,t){t.remove()}selectRootElement(e,t){let i=typeof e=="string"?this.doc.querySelector(e):e;if(!i)throw new Ve(-5104,!1);return t||(i.textContent=""),i}parentNode(e){return e.parentNode}nextSibling(e){return e.nextSibling}setAttribute(e,t,i,r){if(r){t=r+":"+t;let s=Cf[r];s?e.setAttributeNS(s,t,i):e.setAttribute(t,i)}else e.setAttribute(t,i)}removeAttribute(e,t,i){if(i){let r=Cf[i];r?e.removeAttributeNS(r,t):e.removeAttribute(`${i}:${t}`)}else e.removeAttribute(t)}addClass(e,t){e.classList.add(t)}removeClass(e,t){e.classList.remove(t)}setStyle(e,t,i,r){r&(ui.DashCase|ui.Important)?e.style.setProperty(t,i,r&ui.Important?"important":""):e.style[t]=i}removeStyle(e,t,i){i&ui.DashCase?e.style.removeProperty(t):e.style[t]=""}setProperty(e,t,i){e!=null&&(e[t]=i)}setValue(e,t){e.nodeValue=t}listen(e,t,i){if(typeof e=="string"&&(e=Ms().getGlobalEventTarget(this.doc,e),!e))throw new Error(`Unsupported event target ${e} for event ${t}`);return this.eventManager.addEventListener(e,t,this.decoratePreventDefault(i))}decoratePreventDefault(e){return t=>{if(t==="__ngUnwrap__")return e;(this.platformIsServer?this.ngZone.runGuarded(()=>e(t)):e(t))===!1&&t.preventDefault()}}};function $v(n){return n.tagName==="TEMPLATE"&&n.content!==void 0}var If=class extends Oo{constructor(e,t,i,r,s,o,a,c){super(e,s,o,c),this.sharedStylesHost=t,this.hostEl=i,this.shadowRoot=i.attachShadow({mode:"open"}),this.sharedStylesHost.addHost(this.shadowRoot);let l=Jv(r.id,r.styles);for(let u of l){let d=document.createElement("style");a&&d.setAttribute("nonce",a),d.textContent=u,this.shadowRoot.appendChild(d)}}nodeOrShadowRoot(e){return e===this.hostEl?this.shadowRoot:e}appendChild(e,t){return super.appendChild(this.nodeOrShadowRoot(e),t)}insertBefore(e,t,i){return super.insertBefore(this.nodeOrShadowRoot(e),t,i)}removeChild(e,t){return super.removeChild(null,t)}parentNode(e){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(e)))}destroy(){this.sharedStylesHost.removeHost(this.shadowRoot)}},Fo=class extends Oo{constructor(e,t,i,r,s,o,a,c){super(e,s,o,a),this.sharedStylesHost=t,this.removeStylesOnCompDestroy=r,this.styles=c?Jv(c,i.styles):i.styles}applyStyles(){this.sharedStylesHost.addStyles(this.styles)}destroy(){this.removeStylesOnCompDestroy&&this.sharedStylesHost.removeStyles(this.styles)}},Fc=class extends Fo{constructor(e,t,i,r,s,o,a,c){let l=r+"-"+i.id;super(e,t,i,s,o,a,c,l),this.contentAttr=EC(l),this.hostAttr=SC(l)}applyToHost(e){this.applyStyles(),this.setAttribute(e,this.hostAttr,"")}createElement(e,t){let i=super.createElement(e,t);return super.setAttribute(i,this.contentAttr,""),i}},CC=(()=>{class n extends Oc{constructor(t){super(t)}supports(t){return!0}addEventListener(t,i,r){return t.addEventListener(i,r,!1),()=>this.removeEventListener(t,i,r)}removeEventListener(t,i,r){return t.removeEventListener(i,r)}static{this.\u0275fac=function(i){return new(i||n)(dt(Vi))}}static{this.\u0275prov=yt({token:n,factory:n.\u0275fac})}}return n})(),qv=["alt","control","meta","shift"],DC={"\b":"Backspace","	":"Tab","\x7F":"Delete","\x1B":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},TC={alt:n=>n.altKey,control:n=>n.ctrlKey,meta:n=>n.metaKey,shift:n=>n.shiftKey},AC=(()=>{class n extends Oc{constructor(t){super(t)}supports(t){return n.parseEventName(t)!=null}addEventListener(t,i,r){let s=n.parseEventName(i),o=n.eventCallback(s.fullKey,r,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>Ms().onAndCancel(t,s.domEventName,o))}static parseEventName(t){let i=t.toLowerCase().split("."),r=i.shift();if(i.length===0||!(r==="keydown"||r==="keyup"))return null;let s=n._normalizeKey(i.pop()),o="",a=i.indexOf("code");if(a>-1&&(i.splice(a,1),o="code."),qv.forEach(l=>{let u=i.indexOf(l);u>-1&&(i.splice(u,1),o+=l+".")}),o+=s,i.length!=0||s.length===0)return null;let c={};return c.domEventName=r,c.fullKey=o,c}static matchEventFullKeyCode(t,i){let r=DC[t.key]||t.key,s="";return i.indexOf("code.")>-1&&(r=t.code,s="code."),r==null||!r?!1:(r=r.toLowerCase(),r===" "?r="space":r==="."&&(r="dot"),qv.forEach(o=>{if(o!==r){let a=TC[o];a(t)&&(s+=o+".")}}),s+=r,s===i)}static eventCallback(t,i,r){return s=>{n.matchEventFullKeyCode(s,t)&&r.runGuarded(()=>i(s))}}static _normalizeKey(t){return t==="esc"?"escape":t}static{this.\u0275fac=function(i){return new(i||n)(dt(Vi))}}static{this.\u0275prov=yt({token:n,factory:n.\u0275fac})}}return n})();function Kv(n,e,t){return Fv(it({rootComponent:n,platformRef:t?.platformRef},IC(e)))}function IC(n){return{appProviders:[...FC,...n?.providers??[]],platformProviders:OC}}function PC(){Tf.makeCurrent()}function RC(){return new li}function NC(){return T0(document),document}var OC=[{provide:vs,useValue:Wv},{provide:af,useValue:PC,multi:!0},{provide:Vi,useFactory:NC,deps:[]}];var FC=[{provide:pc,useValue:"root"},{provide:li,useFactory:RC,deps:[]},{provide:Af,useClass:CC,multi:!0,deps:[Vi,at,vs]},{provide:Af,useClass:AC,multi:!0,deps:[Vi]},jv,Yv,Xv,{provide:ls,useExisting:jv},{provide:Nc,useClass:_C,deps:[]},[]];function Qv(n,e,t){let i={lens:`<radialGradient id="g"><stop offset="0%" stop-color="${e}" stop-opacity=".9"/><stop offset="60%" stop-color="${n}" stop-opacity=".3"/><stop offset="100%" stop-color="#0a0908"/></radialGradient><circle cx="400" cy="300" r="280" fill="url(%23g)"/><circle cx="400" cy="300" r="140" fill="none" stroke="${e}" stroke-opacity=".4" stroke-width="1"/><circle cx="400" cy="300" r="220" fill="none" stroke="${n}" stroke-opacity=".3" stroke-width="1"/>`,grid:`<linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="${n}" stop-opacity=".7"/><stop offset="100%" stop-color="${e}" stop-opacity=".3"/></linearGradient><rect width="800" height="600" fill="url(%23g)"/><g stroke="%23f5efe6" stroke-opacity=".15"><path d="M0,150 L800,150 M0,300 L800,300 M0,450 L800,450 M200,0 L200,600 M400,0 L400,600 M600,0 L600,600"/></g>`,bars:`<linearGradient id="g" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="${n}"/><stop offset="100%" stop-color="${e}"/></linearGradient><rect width="800" height="600" fill="%230a0908"/><rect x="100" y="100" width="60" height="400" fill="url(%23g)" opacity=".8"/><rect x="200" y="180" width="60" height="320" fill="url(%23g)" opacity=".6"/><rect x="300" y="80" width="60" height="420" fill="url(%23g)" opacity=".9"/><rect x="400" y="220" width="60" height="280" fill="url(%23g)" opacity=".5"/><rect x="500" y="140" width="60" height="360" fill="url(%23g)" opacity=".7"/><rect x="600" y="260" width="60" height="240" fill="url(%23g)" opacity=".4"/>`,wave:`<linearGradient id="g" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="${n}"/><stop offset="100%" stop-color="${e}"/></linearGradient><rect width="800" height="600" fill="%230a0908"/><path d="M0,300 Q200,200 400,300 T800,300" stroke="url(%23g)" stroke-width="3" fill="none" opacity=".8"/><path d="M0,350 Q200,250 400,350 T800,350" stroke="${e}" stroke-width="2" fill="none" opacity=".5"/><path d="M0,250 Q200,150 400,250 T800,250" stroke="${n}" stroke-width="2" fill="none" opacity=".5"/>`,frame:`<rect width="800" height="600" fill="%230a0908"/><rect x="80" y="60" width="640" height="480" fill="none" stroke="${n}" stroke-width="2" opacity=".7"/><rect x="120" y="100" width="560" height="400" fill="${e}" fill-opacity=".15"/><circle cx="400" cy="300" r="80" fill="${n}" fill-opacity=".4"/>`,strip:`<rect width="800" height="600" fill="%231a1917"/><g fill="${n}" fill-opacity=".6">${[...Array(8)].map((s,o)=>`<rect x="${o*100+20}" y="50" width="60" height="30"/><rect x="${o*100+20}" y="520" width="60" height="30"/>`).join("")}</g><rect x="20" y="120" width="760" height="360" fill="${e}" fill-opacity=".3"/>`,blur:`<radialGradient id="g" cx="30%" cy="40%"><stop offset="0%" stop-color="${n}" stop-opacity=".9"/><stop offset="100%" stop-color="%230a0908"/></radialGradient><radialGradient id="g2" cx="70%" cy="70%"><stop offset="0%" stop-color="${e}" stop-opacity=".6"/><stop offset="100%" stop-color="%230a0908" stop-opacity="0"/></radialGradient><rect width="800" height="600" fill="url(%23g)"/><rect width="800" height="600" fill="url(%23g2)"/>`};return`data:image/svg+xml;utf8,${`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice">${i[t]??i.lens}</svg>`}`}var ey=[{num:"01",label:"Skills",href:"#skills"},{num:"02",label:"Experience",href:"#experience"},{num:"03",label:"Work",href:"#work"},{num:"04",label:"Contact",href:"#contact"}],Bi=[{num:"C / 01",title:"Cinematography",desc:"Framing the ordinary until it resists being ordinary. Handheld energy or locked-off patience \u2014 whichever the story earns.",tools:["Sony FX6","RED Komodo","Alexa Mini","DJI Ronin"]},{num:"C / 02",title:"Editing",desc:"Finding the cut that breathes. Rhythm before rules, emotion before montage tricks.",tools:["Premiere Pro","DaVinci Resolve","Final Cut"]},{num:"C / 03",title:"VFX & Comp",desc:"Invisible fixes and impossible frames. Keying, rotoscope, motion tracking, clean-plating, beauty work.",tools:["After Effects","Nuke","Mocha","Photoshop"]},{num:"C / 04",title:"Colour",desc:"Grading is the second script. Look development, LUTs, match-grade across scenes and cameras.",tools:["DaVinci","Lumetri","Baselight"]},{num:"C / 05",title:"AI Integrations",desc:"Using generative tools as a brush, not a crutch \u2014 extending plates, concepting looks, and accelerating pre-viz.",tools:["Runway","Kling","Midjourney","Sora"]},{num:"C / 06",title:"Direction",desc:"Translating a brief into a frame. Working with talent, sound, and production design until it all rhymes.",tools:["Storyboarding","Shot-listing","Pre-viz"]}],ty=[{year:"2023-24(oct)",role:"Cinematographer / Editor / VFX Artist",place:"EIPI MEDIA",placeDetail:"End-to-end production for digital-first brand experiences.",location:"Mumbai",reveal:"Spearheaded technical production pipelines, bridging the gap between raw cinematography and VFX-heavy final edits for 20+ brands."},{year:"2024(dec)-2025(july)",role:"Editor and vfx artist",place:"TVA",placeDetail:"Post-production lead for narrative and stylised content.",location:"Mumbai",reveal:"Managed complex multi-camera edits and integrated high-end VFX/compositing to elevate digital and television spots."},{year:"2025(aug-nov)",role:"Cinematographer and editor",place:"Goldcoast films",placeDetail:"Crafting cinematic visuals and pacing for high-end digital campaigns.",location:"Mumbai / Global",reveal:"Led the visual storytelling on commercial sets and final post-production, ensuring a premium brand aesthetic across all deliverables."},{year:"Freelance / Ongoing",role:"Contract Editor",place:"Abstract dxb",placeDetail:"International creative collaborations.",location:"Dubai / Remote",reveal:"Delivering tailored editing solutions for international agencies, focusing on premium lifestyle and brand content with a fast turnaround."}],Rf=[{title:"Nestasia Kitchen",cat:"cine",brand:"Nestasia",img:"assets/logos/cine/01_nestasia/nestasia kitchen.jpg",video:"assets/logos/cine/01_nestasia/NESTASIA X SANYA_SCRIPT 3 (HORIZONTAL)_HR.mp4"},{title:"VK Magic Tricks",cat:"cine",brand:"Ocean",img:"assets/logos/cine/02_ocean/virat magic.jpg",video:"assets/logos/cine/02_ocean/VK & Rohit_MAGIC TRICKS_11.27.2023.mp4"},{title:"Mira Edit",cat:"cine",brand:"Orion",img:"assets/logos/cine/03_orion/orion mira.jpg",video:"assets/logos/cine/03_orion/ORION x MIRA EDIT_11.01.2023_40 SEC_HORIZONTAL_HR.mp4"},{title:"Nestasia Room",cat:"cine",brand:"Nestasia",img:"assets/logos/cine/01_nestasia/nestasia room.jpg",video:"assets/logos/cine/01_nestasia/NESTASIA X SANYA_SCRIPT 2 (HORIZONTAL)_HR_1.mp4"},{title:"VK Clone",cat:"cine",brand:"Ocean",img:"assets/logos/cine/02_ocean/virat clone.jpg",video:"assets/logos/cine/02_ocean/VK x Clone_30.0_Horizontal.mp4",imgPosition:"80% center"},{title:"Neha x Angad",cat:"cine",brand:"Giva",img:"assets/logos/cine/04_giva/neha giva.jpg",video:"assets/logos/cine/04_giva/NEHA X ANGAD_01.15.2024_TRAILER.mp4",imgPosition:"70% center"},{title:"Kapil Sharma",cat:"cine",brand:"HDFC Payzapp",img:"assets/logos/cine/08_hdfc/hdfc kapil.jpg",video:"assets/logos/cine/08_hdfc/HDFC Payzapp x Kapil Sharma - Bill Payments - 11.01.2024_HR.mp4"},{title:"Black Bag",cat:"cine",brand:"Zouk",img:"assets/logos/cine/09_zouk/zouk black.png",video:"assets/logos/cine/09_zouk/ZOUK X V5_ BLACK BAG 25.2_HR.mp4"},{title:"KL Purpose",cat:"cine",brand:"Hyugalife",img:"assets/logos/cine/05_hyugalife/hyugalife.jpg",video:"assets/logos/cine/05_hyugalife/KL x Purpose_11.08.2023.mp4"},{title:"Tiger Shroff",cat:"cine",brand:"HDFC Payzapp",img:"assets/logos/cine/08_hdfc/hdfc tiger.jpg",video:"assets/logos/cine/08_hdfc/HDFC Payzapp x Tiger Shroff_12.15.2023.mp4"},{title:"Footwear",cat:"cine",brand:"Zouk",img:"assets/logos/cine/09_zouk/zouk footwear.jpg",video:"assets/logos/cine/09_zouk/ZOUK x V11_FOOTWEAR FUNCTIONALITY_24.0_HR.mp4"},{title:"Awez",cat:"cine",brand:"Indigo",img:"assets/logos/cine/06_indigo/indigo awez.jpg",video:"assets/logos/cine/06_indigo/INDIGOxAWEZ_2.1.mp4"},{title:"Combine Montage",cat:"cine",brand:"Virsa",img:"assets/logos/cine/07_virsa/virsa 3.jpg",video:"assets/logos/cine/07_virsa/VIRSA_combine montage_V1_24.07.2024_HR.mp4"},{title:"Stopmotion",cat:"cine",brand:"Zouk",img:"assets/logos/cine/09_zouk/zouk stopmotion.png",video:"assets/logos/cine/09_zouk/Zouk x V6_UNISEX STOPMOTION_24.0_HR.mp4"},{title:"Coffee",cat:"edit",brand:"Plum",img:"assets/logos/edit/01_plum/plum kalyani.png",video:"assets/logos/edit/01_plum/Plum coffee_14.04.26.mp4"},{title:"Working Women",cat:"edit",brand:"Zouk",img:"assets/logos/edit/03_zouk/sara zouk1.jpg",video:"assets/logos/edit/03_zouk/VIDEO 5 ZOUK x WORKING WOMEN_ 07.17.2023.mp4"},{title:"Campus Vedika",cat:"edit",brand:"Campus",img:"assets/logos/edit/09_campus/campus vedika.jpg",video:"assets/logos/edit/09_campus/CAMPUS x VEDIKA_12.26.2023_HR.mp4"},{title:"Prateek Liberty",cat:"edit",brand:"Liberty",img:"assets/logos/edit/04_liberty/liberty prateek.png",video:"assets/logos/edit/04_liberty/PRATEEK LIBERTY_27.11.25.mp4"},{title:"Timely Reminders",cat:"edit",brand:"Mobikwik",img:"assets/logos/edit/02_mobikwik/manoj mobikwik.jpg",video:"assets/logos/edit/02_mobikwik/MB x MOBIKWIK _TIMELY REMINDERS_09.08.2023_v2.mp4"},{title:"Sara Bags",cat:"edit",brand:"Zouk",img:"assets/logos/edit/03_zouk/zouk sara.jpg",video:"assets/logos/edit/03_zouk/VIDEO 14 ZOUK x SARA POSING WITH DIFFERENT BAGS_07.17.2023.mp4"},{title:"Campus Vyomesh",cat:"edit",brand:"Campus",img:"assets/logos/edit/09_campus/campus vyomesh.jpg",video:"assets/logos/edit/09_campus/vyomesh x campus_01.15.2024_HR.mp4"},{title:"Prateek Snitch",cat:"edit",brand:"Snitch",img:"assets/logos/edit/06_snitch prateek/snitch prateek.png",video:"assets/logos/edit/06_snitch prateek/PRATEEK X SNITCH_28.1.mp4"},{title:"Scott Siwet",cat:"edit",brand:"Scott",img:"assets/logos/edit/05_scott siwet/scott siwet.png",video:"assets/logos/edit/05_scott siwet/SCOTT Siwet_02.12.25.mp4"},{title:"Shankara KK",cat:"edit",brand:"Shankara",img:"assets/logos/edit/07_shankara/shankara.jpg",video:"assets/logos/edit/07_shankara/KK x Shankara_script B_11.16.2023.mp4"},{title:"Luna Beauty",cat:"edit",brand:"Luna",img:"assets/logos/edit/08_luna beauty/luna beauty.png",video:"assets/logos/edit/08_luna beauty/luna beauty.mp4"},{title:"Divyenndu",cat:"edit",brand:"HK Vitals",img:"assets/logos/edit/10_hk vitals/hk vitals divyendu.jpg",video:"assets/logos/edit/10_hk vitals/HK Vitals x Divyenndu_VERTICAL_23.05.2024.mp4"},{title:"Aishwarya",cat:"edit",brand:"Cove & Lane",img:"assets/logos/edit/11_cove & lane/cove & lane.png",video:"assets/logos/edit/11_cove & lane/Cove & Lane x Aishwarya_26.0.mp4"},{title:"Aparshakti",cat:"edit",brand:"Ludic",img:"assets/logos/edit/12_ludic/ludic aparshakti.jpg",video:"assets/logos/edit/12_ludic/LUDIC x APARSHAKTI_09.02.2024_HR.mp4"},{title:"Maggie",cat:"edit",brand:"APD",img:"assets/logos/edit/13_apd devang/apd maggie.png",video:"assets/logos/edit/13_apd devang/APD MAGGIE_29.10.25.mp4"},{title:"Giant Fruit",cat:"vfx",brand:"Ocean",img:"assets/logos/vfx/01_ocean/ocean fruit1.png",video:"assets/logos/vfx/01_ocean/Virat X Giant_fruit.mp4"},{title:"Bread Range",cat:"vfx",brand:"Bakers Dozen",img:"assets/logos/vfx/03_bakers dozen/bakers clone.jpg",video:"assets/logos/vfx/03_bakers dozen/BAKERS DOZEN x SOHA_BREAD RANGE.mp4"},{title:"Realme Riya",cat:"vfx",brand:"Realme",img:"assets/logos/vfx/08_realme/realme riya.png",video:"assets/logos/vfx/08_realme/REALME x RIYA.mp4"},{title:"Pantaloons Study",cat:"vfx",brand:"Case Study",img:"assets/logos/vfx/02_case study/PANTALOONS casestudy.png",video:"assets/logos/vfx/02_case study/Pantaloons casestudy.mp4"},{title:"Flash Gordon",cat:"vfx",brand:"Ocean",img:"assets/logos/vfx/01_ocean/ocean flash1.png",video:"assets/logos/vfx/01_ocean/Virat x ED_flash_gordon.mp4"},{title:"Cake Range",cat:"vfx",brand:"Bakers Dozen",img:"assets/logos/vfx/03_bakers dozen/bakers queen.jpg",video:"assets/logos/vfx/03_bakers dozen/BAKERS DOZEN x SOHA_CAKE RANGE.mp4"},{title:"Realme Varun",cat:"vfx",brand:"Realme",img:"assets/logos/vfx/08_realme/realme varun.jpg",video:"assets/logos/vfx/08_realme/REALME x VARUN SHARMA.mp4"},{title:"Styleup AI Study",cat:"vfx",brand:"Case Study",img:"assets/logos/vfx/02_case study/AI casestudy .png",video:"assets/logos/vfx/02_case study/Styleup AI Case Study_04.03.25.mp4"},{title:"House of Myntra",cat:"vfx",brand:"Myntra",img:"assets/logos/vfx/04_myntra/house of myntra.png",video:"assets/logos/vfx/04_myntra/House of Myntra_1.mp4"},{title:"Neha Dhupia",cat:"vfx",brand:"HDFC",img:"assets/logos/vfx/05_hdfc/hdfc neha.png",video:"assets/logos/vfx/05_hdfc/HDFC x Neha Dhupia_11.10.2023.mp4"},{title:"Tamannaah",cat:"vfx",brand:"Kamiliant",img:"assets/logos/vfx/06_kamiliant/kamiliant tammanah.jpg",video:"assets/logos/vfx/06_kamiliant/Kamiliant x Tamannaah_independence day_10.1.mp4"},{title:"Ubon Dhruv",cat:"vfx",brand:"Ubon",img:"assets/logos/vfx/07_ubon/ubon charging.png",video:"assets/logos/vfx/07_ubon/Ubon x Dhruv.mp4"},{title:"Trunativ Peach",cat:"vfx",brand:"Trunative",img:"assets/logos/vfx/09_trunative/trunative hologram.jpg",video:"assets/logos/vfx/09_trunative/TRUNATIVxPEACH.mp4"},{title:"Afterglow",cat:"ai",brand:"Raymond",img:Qv("%23e0a96d","%23d4472a","blur")},{title:"Loop the Real",cat:"ai",brand:"Asian Paints",img:Qv("%23d4472a","%23f5efe6","frame")}],ny=[{value:"all",label:"All"},{value:"cine",label:"Cinematography"},{value:"edit",label:"Editing"},{value:"vfx",label:"VFX"},{value:"ai",label:"AI Integrations"}],iy={cine:"Cinematography",edit:"Editing",vfx:"VFX",ai:"AI"};var LC=(n,e)=>e.href;function kC(n,e){if(n&1){let t=An();L(0,"a",4),St("click",function(r){let s=Bt(t).$implicit,o=wt();return zt(o.scrollTo(r,s.href))}),W(1),V()}if(n&2){let t=e.$implicit;Kt("href",t.href,pi),Co("data-num",t.num),he(),dn(" ",t.label," ")}}var ry=(()=>{class n{constructor(){this.zone=Ue(at),this.navLinks=ey,this.scrolled=bt(!1),this.time=bt("\u2014")}ngOnInit(){this.tickClock(),this.zone.runOutsideAngular(()=>{this.clockInterval=window.setInterval(()=>{this.zone.run(()=>this.tickClock())},1e3)})}ngAfterViewInit(){this.onScroll()}onScroll(){this.scrolled.set(window.scrollY>40)}scrollTo(t,i){t.preventDefault();let r=document.querySelector(i);r&&r.scrollIntoView({behavior:"smooth"})}tickClock(){let t=new Date,i=String(t.getHours()).padStart(2,"0"),r=String(t.getMinutes()).padStart(2,"0"),s=String(t.getSeconds()).padStart(2,"0");this.time.set(`MUM ${i}:${r}:${s}`)}ngOnDestroy(){this.clockInterval&&window.clearInterval(this.clockInterval)}static{this.\u0275fac=function(i){return new(i||n)}}static{this.\u0275cmp=Pt({type:n,selectors:[["app-navbar"]],hostBindings:function(i,r){i&1&&St("scroll",function(){return r.onScroll()},!1,R0)},standalone:!0,features:[Rt],decls:10,vars:3,consts:[["href","#hero",1,"nav-logo",3,"click"],[1,"nav-links"],[3,"href"],[1,"nav-time"],[3,"click","href"]],template:function(i,r){i&1&&(L(0,"nav")(1,"a",0),St("click",function(o){return r.scrollTo(o,"#hero")}),W(2," Rishabh Sahu"),L(3,"sup"),W(4,"*"),V()(),L(5,"div",1),Ht(6,kC,2,3,"a",2,LC),V(),L(8,"div",3),W(9),V()()),i&2&&(Lt("scrolled",r.scrolled()),he(6),Gt(r.navLinks),he(3),ft(r.time()))},styles:['nav[_ngcontent-%COMP%]{position:fixed;top:0;left:0;right:0;z-index:100;display:flex;justify-content:space-between;align-items:center;padding:1.25rem 2.5rem;background:#0a090866;backdrop-filter:blur(12px);-webkit-backdrop-filter:blur(12px);border-bottom:1px solid transparent;transition:background .4s var(--ease),border-color .4s,padding .4s}nav.scrolled[_ngcontent-%COMP%]{background:#0a0908d9;border-bottom-color:var(--line);padding:.9rem 2.5rem}.nav-logo[_ngcontent-%COMP%]{font-family:Fraunces,serif;font-weight:500;font-style:italic;font-size:1.4rem;letter-spacing:-.02em;color:var(--ink)}.nav-logo[_ngcontent-%COMP%]   sup[_ngcontent-%COMP%]{color:var(--accent)}.nav-links[_ngcontent-%COMP%]{display:flex;gap:2.5rem;align-items:center}.nav-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{font-family:JetBrains Mono,monospace;font-size:11px;letter-spacing:.25em;text-transform:uppercase;position:relative;padding:4px 0}.nav-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:before{content:attr(data-num);font-size:8px;color:var(--dim);margin-right:6px;vertical-align:top}.nav-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:after{content:"";position:absolute;bottom:0;left:0;width:0;height:1px;background:var(--ink);transition:width .4s var(--ease)}.nav-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover:after{width:100%}.nav-time[_ngcontent-%COMP%]{font-family:JetBrains Mono,monospace;font-size:10px;color:var(--dim);letter-spacing:.2em}@media (max-width: 900px){nav[_ngcontent-%COMP%]{padding:1rem 1.25rem}.nav-logo[_ngcontent-%COMP%]{font-size:1.05rem}.nav-links[_ngcontent-%COMP%]{gap:1.2rem}.nav-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:before{display:none}.nav-time[_ngcontent-%COMP%]{display:none}}'],changeDetection:0})}}return n})();function UC(n,e){n&1&&Ee(0,"span",9)}function VC(n,e){if(n&1&&Ee(0,"span",31),n&2){let t=e.$index;Lt("white",t%2===0)}}function BC(n,e){if(n&1&&Ee(0,"span",31),n&2){let t=e.$index;Lt("white",t%2===0)}}function zC(n,e){n&1&&Ee(0,"span",9)}var sy=(()=>{class n{constructor(){this.armStripes=Array.from({length:12}),this.bodyStripes=Array.from({length:12}),this.perfs=Array.from({length:28}),this.done=bt(!1),this.clapping=bt(!1),this.timecode=bt("00:00:00:00"),this.dateStr=(()=>{let t=new Date,i=r=>String(r).padStart(2,"0");return`${i(t.getDate())}.${i(t.getMonth()+1)}.${t.getFullYear()}`})()}ngAfterViewInit(){let t=Date.now();this.tcInterval=window.setInterval(()=>{let r=Date.now()-t,s=Math.floor(r/36e5)%24,o=Math.floor(r/6e4)%60,a=Math.floor(r/1e3)%60,c=Math.floor(r%1e3/1e3*24),l=u=>String(u).padStart(2,"0");this.timecode.set(`${l(s)}:${l(o)}:${l(a)}:${l(c)}`)},41);let i=()=>{this.clapTimeout=window.setTimeout(()=>this.clapping.set(!0),2e3),this.timeout=window.setTimeout(()=>{this.done.set(!0),window.dispatchEvent(new CustomEvent("loader:done"))},3150)};document.readyState==="complete"?i():window.addEventListener("load",i,{once:!0})}ngOnDestroy(){this.tcInterval&&window.clearInterval(this.tcInterval),this.timeout&&window.clearTimeout(this.timeout),this.clapTimeout&&window.clearTimeout(this.clapTimeout)}static{this.\u0275fac=function(i){return new(i||n)}}static{this.\u0275cmp=Pt({type:n,selectors:[["app-loader"]],standalone:!0,features:[Rt],decls:88,vars:8,consts:[[1,"loader"],[1,"loader-grain"],[1,"loader-scan"],[1,"slate-bar"],[1,"slate-left"],[1,"rec-dot"],[1,"sep"],[1,"slate-right"],[1,"film-strip","top"],[1,"perf"],[1,"loader-content"],[1,"clapper"],[1,"clapper-arm"],[1,"arm-stripes"],[1,"stripe",3,"white"],[1,"arm-hinge"],[1,"clapper-body"],[1,"body-stripes"],[1,"slate-face"],[1,"slate-header"],[1,"sep-line"],[1,"slate-title"],[1,"title-main"],[1,"title-sub"],[1,"slate-grid"],[1,"cell"],[1,"k"],[1,"v"],[1,"slate-footer"],[1,"pulse"],[1,"film-strip","bottom"],[1,"stripe"]],template:function(i,r){i&1&&(L(0,"div",0),Ee(1,"div",1)(2,"div",2),L(3,"div",3)(4,"div",4),Ee(5,"span",5),L(6,"span"),W(7,"REC"),V(),L(8,"span",6),W(9,"/"),V(),L(10,"span"),W(11),V()(),L(12,"div",7)(13,"span"),W(14,"SCENE 01"),V(),L(15,"span",6),W(16,"/"),V(),L(17,"span"),W(18,"TAKE 01"),V(),L(19,"span",6),W(20,"/"),V(),L(21,"span"),W(22,"MUMBAI \xB7 IN"),V()()(),L(23,"div",8),Ht(24,UC,1,0,"span",9,ti),V(),L(26,"div",10)(27,"div",11)(28,"div",12)(29,"div",13),Ht(30,VC,1,2,"span",14,ti),V(),Ee(32,"div",15),V(),L(33,"div",16)(34,"div",17),Ht(35,BC,1,2,"span",14,ti),V(),L(37,"div",18)(38,"div",19)(39,"span"),W(40,"PRODUCTION"),V(),Ee(41,"span",20),L(42,"span"),W(43,"REEL 2026"),V()(),L(44,"div",21)(45,"span",22),W(46,"Rishabh"),V(),L(47,"span",23),W(48,"SAHU"),V()(),L(49,"div",24)(50,"div",25)(51,"span",26),W(52,"DIR"),V(),L(53,"span",27),W(54,"R. SAHU"),V()(),L(55,"div",25)(56,"span",26),W(57,"CAM"),V(),L(58,"span",27),W(59,"A"),V()(),L(60,"div",25)(61,"span",26),W(62,"ROLL"),V(),L(63,"span",27),W(64,"001"),V()(),L(65,"div",25)(66,"span",26),W(67,"SCENE"),V(),L(68,"span",27),W(69,"01"),V()(),L(70,"div",25)(71,"span",26),W(72,"TAKE"),V(),L(73,"span",27),W(74,"01"),V()(),L(75,"div",25)(76,"span",26),W(77,"FPS"),V(),L(78,"span",27),W(79,"24"),V()()(),L(80,"div",28)(81,"span"),W(82),V(),L(83,"span",29),W(84,"\u25CF SYNC"),V()()()()()(),L(85,"div",30),Ht(86,zC,1,0,"span",9,ti),V()()),i&2&&(Lt("done",r.done())("clapping",r.clapping()),he(11),ft(r.timecode()),he(13),Gt(r.perfs),he(3),Lt("clap",r.clapping()),he(3),Gt(r.armStripes),he(5),Gt(r.bodyStripes),he(47),dn("DATE \xB7 ",r.dateStr,""),he(4),Gt(r.perfs))},styles:[".loader[_ngcontent-%COMP%]{position:fixed;inset:0;background:radial-gradient(ellipse at center,#15110e,#0a0908 70%,#000);z-index:10001;display:flex;flex-direction:column;justify-content:space-between;padding:1.5rem 2rem;overflow:hidden;transition:opacity .9s var(--ease),visibility .9s}.loader.done[_ngcontent-%COMP%]{opacity:0;visibility:hidden}.loader-grain[_ngcontent-%COMP%]{position:absolute;inset:-50%;opacity:.08;pointer-events:none;mix-blend-mode:overlay;background-image:repeating-radial-gradient(circle at 20% 30%,#fff9 0,#fff0 2px),repeating-radial-gradient(circle at 70% 80%,#ffffff80 0,#fff0 2px);animation:_ngcontent-%COMP%_grainShift .7s steps(6) infinite}@keyframes _ngcontent-%COMP%_grainShift{0%{transform:translate(0)}20%{transform:translate(-4%,2%)}40%{transform:translate(3%,-3%)}60%{transform:translate(-2%,4%)}80%{transform:translate(4%,1%)}to{transform:translate(0)}}.loader-scan[_ngcontent-%COMP%]{position:absolute;inset:0;pointer-events:none;background:repeating-linear-gradient(to bottom,transparent 0,transparent 3px,rgba(255,255,255,.015) 3px,rgba(255,255,255,.015) 4px);mix-blend-mode:overlay}.slate-bar[_ngcontent-%COMP%]{position:relative;z-index:3;display:flex;justify-content:space-between;font-family:JetBrains Mono,monospace;font-size:10px;letter-spacing:.3em;color:var(--dim);text-transform:uppercase}.slate-bar[_ngcontent-%COMP%]   .slate-left[_ngcontent-%COMP%], .slate-bar[_ngcontent-%COMP%]   .slate-right[_ngcontent-%COMP%]{display:flex;align-items:center;gap:.75rem}.slate-bar[_ngcontent-%COMP%]   .sep[_ngcontent-%COMP%]{color:#ffffff26}.rec-dot[_ngcontent-%COMP%]{width:8px;height:8px;border-radius:50%;background:var(--accent);box-shadow:0 0 10px var(--accent);animation:_ngcontent-%COMP%_recPulse 1.2s ease-in-out infinite}@keyframes _ngcontent-%COMP%_recPulse{0%,to{opacity:1;transform:scale(1)}50%{opacity:.35;transform:scale(.85)}}.film-strip[_ngcontent-%COMP%]{position:relative;z-index:2;display:flex;justify-content:space-between;height:22px;padding:0 4px;background:linear-gradient(180deg,transparent,rgba(0,0,0,.6));overflow:hidden}.film-strip.bottom[_ngcontent-%COMP%]{background:linear-gradient(0deg,transparent,rgba(0,0,0,.6))}.film-strip[_ngcontent-%COMP%]   .perf[_ngcontent-%COMP%]{width:22px;height:12px;background:#000;border-radius:2px;border:1px solid rgba(255,255,255,.06);align-self:center;animation:_ngcontent-%COMP%_perfSlide 1.4s linear infinite}@keyframes _ngcontent-%COMP%_perfSlide{0%{opacity:.3;transform:translate(-6px)}50%{opacity:1}to{opacity:.3;transform:translate(6px)}}.loader-content[_ngcontent-%COMP%]{position:relative;z-index:3;flex:1;display:flex;flex-direction:column;justify-content:center;align-items:center;gap:2rem;text-align:center}.clapper[_ngcontent-%COMP%]{--board-w: min(560px, 80vw);position:relative;width:var(--board-w);perspective:1200px;animation:_ngcontent-%COMP%_boardIn .9s .2s var(--ease) both;transform-origin:center center}.clapper.clap[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_boardShake .4s ease-out,_ngcontent-%COMP%_boardClose .7s .45s cubic-bezier(.7,0,.3,1) forwards}@keyframes _ngcontent-%COMP%_boardClose{0%{transform:translateY(0) scale(1) rotate(0);filter:blur(0);opacity:1}40%{transform:translateY(-4px) scale(1.08) rotate(-1deg);filter:blur(0);opacity:1}to{transform:translateY(-40px) scale(.6) rotate(2deg);filter:blur(8px);opacity:0}}@keyframes _ngcontent-%COMP%_boardIn{0%{opacity:0;transform:translateY(24px) scale(.92) rotateX(6deg)}to{opacity:1;transform:translateY(0) scale(1) rotateX(0)}}@keyframes _ngcontent-%COMP%_boardShake{0%{transform:translate(0) rotate(0)}20%{transform:translate(-6px,2px) rotate(-.6deg)}40%{transform:translate(5px,-2px) rotate(.5deg)}60%{transform:translate(-3px,1px) rotate(-.3deg)}80%{transform:translate(2px) rotate(.2deg)}to{transform:translate(0) rotate(0)}}.clapper-arm[_ngcontent-%COMP%]{position:relative;height:56px;margin-bottom:-6px;transform-origin:12px 100%;transform:rotate(-28deg);animation:_ngcontent-%COMP%_armHold 2s var(--ease) forwards;z-index:2}.clapper.clap[_ngcontent-%COMP%]   .clapper-arm[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_armClap .45s cubic-bezier(.75,0,.2,1) forwards}@keyframes _ngcontent-%COMP%_armHold{0%{transform:rotate(-34deg)}60%{transform:rotate(-26deg)}to{transform:rotate(-28deg)}}@keyframes _ngcontent-%COMP%_armClap{0%{transform:rotate(-28deg)}55%{transform:rotate(4deg)}72%{transform:rotate(-2deg)}88%{transform:rotate(1deg)}to{transform:rotate(0)}}.arm-stripes[_ngcontent-%COMP%]{display:flex;height:100%;width:100%;background:#0f0d0b;border:1px solid rgba(255,255,255,.08);border-radius:3px 3px 0 0;overflow:hidden;box-shadow:0 4px 12px #0006}.arm-stripes[_ngcontent-%COMP%]   .stripe[_ngcontent-%COMP%]{flex:1;background:#0b0a09;transform:skew(-22deg);margin:0 -1px}.arm-stripes[_ngcontent-%COMP%]   .stripe.white[_ngcontent-%COMP%]{background:linear-gradient(180deg,#f5efe6,#cfc9c0)}.arm-hinge[_ngcontent-%COMP%]{position:absolute;left:-6px;bottom:-4px;width:18px;height:18px;border-radius:50%;background:radial-gradient(circle at 35% 35%,#888,#222 70%);border:1px solid rgba(0,0,0,.6);box-shadow:0 0 8px #0009;z-index:3}.clapper-body[_ngcontent-%COMP%]{position:relative;border-radius:4px;background:linear-gradient(180deg,#151210,#0a0807);border:1px solid rgba(255,255,255,.08);box-shadow:0 20px 60px #0009,inset 0 1px #ffffff0d;overflow:hidden}.body-stripes[_ngcontent-%COMP%]{display:flex;height:28px}.body-stripes[_ngcontent-%COMP%]   .stripe[_ngcontent-%COMP%]{flex:1;background:#0b0a09;transform:skew(-22deg);margin:0 -1px}.body-stripes[_ngcontent-%COMP%]   .stripe.white[_ngcontent-%COMP%]{background:linear-gradient(180deg,#f5efe6,#cfc9c0)}.slate-face[_ngcontent-%COMP%]{padding:1.25rem 1.5rem 1.1rem;display:flex;flex-direction:column;gap:.9rem;background:radial-gradient(ellipse at 30% 0%,rgba(212,71,42,.08),transparent 60%),linear-gradient(180deg,#141110,#0a0807)}.slate-header[_ngcontent-%COMP%]{display:flex;align-items:center;gap:.75rem;font-family:JetBrains Mono,monospace;font-size:9px;letter-spacing:.35em;text-transform:uppercase;color:var(--dim)}.slate-header[_ngcontent-%COMP%]   .sep-line[_ngcontent-%COMP%]{flex:1;height:1px;background:linear-gradient(90deg,transparent,rgba(245,239,230,.25),transparent)}.slate-title[_ngcontent-%COMP%]{display:flex;align-items:baseline;justify-content:center;gap:.6rem;font-family:Fraunces,serif;line-height:.95;letter-spacing:-.03em}.slate-title[_ngcontent-%COMP%]   .title-main[_ngcontent-%COMP%]{font-size:clamp(2.2rem,5.5vw,3.6rem);font-style:italic;font-weight:400;background:linear-gradient(90deg,#f5efe6,#d4b896);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;text-shadow:0 0 30px rgba(245,239,230,.1)}.slate-title[_ngcontent-%COMP%]   .title-sub[_ngcontent-%COMP%]{font-size:clamp(1.6rem,4vw,2.6rem);font-weight:600;letter-spacing:.1em;color:transparent;-webkit-text-stroke:1px var(--accent);text-transform:uppercase}.slate-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(3,1fr);gap:.5rem 1.25rem;padding:.65rem .25rem;border-top:1px dashed rgba(255,255,255,.08);border-bottom:1px dashed rgba(255,255,255,.08)}.slate-grid[_ngcontent-%COMP%]   .cell[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:baseline;font-family:JetBrains Mono,monospace}.slate-grid[_ngcontent-%COMP%]   .cell[_ngcontent-%COMP%]   .k[_ngcontent-%COMP%]{font-size:8px;letter-spacing:.3em;text-transform:uppercase;color:var(--dim)}.slate-grid[_ngcontent-%COMP%]   .cell[_ngcontent-%COMP%]   .v[_ngcontent-%COMP%]{font-size:12px;font-weight:700;color:var(--ink);letter-spacing:.1em}.slate-footer[_ngcontent-%COMP%]{display:flex;justify-content:space-between;font-family:JetBrains Mono,monospace;font-size:9px;letter-spacing:.3em;text-transform:uppercase;color:var(--dim)}.slate-footer[_ngcontent-%COMP%]   .pulse[_ngcontent-%COMP%]{color:var(--accent);animation:_ngcontent-%COMP%_recPulse 1.4s ease-in-out infinite}.reel-progress[_ngcontent-%COMP%]{width:min(560px,80vw);opacity:0;animation:_ngcontent-%COMP%_fadeUp .9s 1s var(--ease) forwards}.reel-track[_ngcontent-%COMP%]{position:relative;height:6px;background:#f5efe614;border-radius:1px;overflow:hidden}.reel-fill[_ngcontent-%COMP%]{height:100%;background:linear-gradient(90deg,var(--accent),var(--amber));box-shadow:0 0 14px #d4472a80;transition:width .12s linear}.reel-ticks[_ngcontent-%COMP%]{position:absolute;inset:0;display:flex;justify-content:space-between;pointer-events:none}.reel-ticks[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{width:1px;height:100%;background:#0006}.reel-meta[_ngcontent-%COMP%]{margin-top:.75rem;display:flex;justify-content:space-between;align-items:center;gap:1rem;font-family:JetBrains Mono,monospace;font-size:10px;letter-spacing:.3em;text-transform:uppercase;color:var(--dim)}.reel-meta[_ngcontent-%COMP%]   .tagline[_ngcontent-%COMP%]{font-family:Fraunces,serif;font-style:italic;font-size:.78rem;letter-spacing:0;color:#f5efe68c;text-transform:none}.reel-meta[_ngcontent-%COMP%]   .pct[_ngcontent-%COMP%]{color:var(--accent);font-weight:700}@keyframes _ngcontent-%COMP%_fadeUp{0%{opacity:0;transform:translateY(8px)}to{opacity:1;transform:translateY(0)}}@media (max-width: 700px){.slate-bar[_ngcontent-%COMP%]{font-size:8px;gap:.5rem;flex-wrap:wrap}.slate-bar[_ngcontent-%COMP%]   .sep[_ngcontent-%COMP%]{display:none}.film-strip[_ngcontent-%COMP%]   .perf[_ngcontent-%COMP%]{width:14px}.slate-grid[_ngcontent-%COMP%]{grid-template-columns:repeat(2,1fr)}.reel-meta[_ngcontent-%COMP%]   .tagline[_ngcontent-%COMP%]{display:none}}"],changeDetection:0})}}return n})();var HC=["dot"],GC=["ring"],WC=["label"],oy=(()=>{class n{constructor(){this.zone=Ue(at),this.dot=qt.required("dot"),this.ring=qt.required("ring"),this.label=qt.required("label"),this.rx=0,this.ry=0,this.mx=0,this.my=0,this.isFast=!1,this.listeners=[],this.hoverTargets=null}ngAfterViewInit(){if(window.matchMedia("(max-width: 900px)").matches){[this.dot,this.ring,this.label].forEach(t=>{t().nativeElement.style.display="none"});return}this.zone.runOutsideAngular(()=>{let t=r=>{this.mx=r.clientX,this.my=r.clientY;let s=this.dot().nativeElement,o=this.label().nativeElement,a=this.ring().nativeElement;s.style.transform=`translate3d(${this.mx}px, ${this.my}px, 0)`,o.style.transform=`translate3d(${this.mx}px, ${this.my}px, 0)`,this.isFast&&(this.rx=this.mx,this.ry=this.my,a.style.transform=`translate3d(${this.rx}px, ${this.ry}px, 0)`)};window.addEventListener("mousemove",t),this.listeners.push(()=>window.removeEventListener("mousemove",t));let i=()=>{if(!this.isFast){this.rx+=(this.mx-this.rx)*.15,this.ry+=(this.my-this.ry)*.15;let r=this.ring().nativeElement;r.style.transform=`translate3d(${this.rx}px, ${this.ry}px, 0)`}this.rafId=requestAnimationFrame(i)};this.rafId=requestAnimationFrame(i),this.attachHoverListeners(),this.mutationObserver=new MutationObserver(()=>this.attachHoverListeners()),this.mutationObserver.observe(document.body,{childList:!0,subtree:!0})})}attachHoverListeners(){let t=this.dot().nativeElement,i=this.ring().nativeElement,r=this.label().nativeElement;document.querySelectorAll("a, button, .gallery-item, .exp-row, .brand-cell, .nle-timeline").forEach(s=>{if(s.dataset.cursorAttached)return;s.dataset.cursorAttached="1";let o=s.classList.contains("nle-timeline");s.addEventListener("mouseenter",()=>{if(o&&(this.isFast=!0,t.style.opacity="0",r.textContent="PREVIEW",r.classList.add("show")),t.classList.add("hover"),i.classList.add("hover"),!o){let a=s.dataset.cursor;a&&(r.textContent=a,r.classList.add("show"))}}),s.addEventListener("mouseleave",()=>{o&&(this.isFast=!1,t.style.opacity="1"),t.classList.remove("hover"),i.classList.remove("hover"),r.classList.remove("show")})})}ngOnDestroy(){this.rafId&&cancelAnimationFrame(this.rafId),this.listeners.forEach(t=>t()),this.mutationObserver?.disconnect()}static{this.\u0275fac=function(i){return new(i||n)}}static{this.\u0275cmp=Pt({type:n,selectors:[["app-cursor"]],viewQuery:function(i,r){i&1&&(Xt(r.dot,HC,5),Xt(r.ring,GC,5),Xt(r.label,WC,5)),i&2&&ni(3)},standalone:!0,features:[Rt],decls:6,vars:0,consts:[["dot",""],["ring",""],["label",""],[1,"cursor"],[1,"cursor-ring"],[1,"cursor-label"]],template:function(i,r){i&1&&Ee(0,"div",3,0)(2,"div",4,1)(4,"div",5,2)},styles:[".cursor[_ngcontent-%COMP%]{position:fixed;top:0;left:0;width:8px;height:8px;border-radius:50%;background:var(--ink);pointer-events:none;z-index:100000;margin-left:-4px;margin-top:-4px;transition:width .3s var(--ease),height .3s var(--ease),background .3s var(--ease),opacity .2s;mix-blend-mode:difference}.cursor.hover[_ngcontent-%COMP%]{width:0;height:0}.cursor-ring[_ngcontent-%COMP%]{position:fixed;top:0;left:0;width:40px;height:40px;border-radius:50%;border:1px solid var(--ink);pointer-events:none;z-index:99999;margin-left:-20px;margin-top:-20px;transition:width .4s var(--ease),height .4s var(--ease),border-color .3s;mix-blend-mode:difference}.cursor-ring.hover[_ngcontent-%COMP%]{width:80px;height:80px;border-color:var(--accent)}.cursor-ring.drag[_ngcontent-%COMP%]{width:100px;height:100px;border-color:var(--amber)}.cursor-label[_ngcontent-%COMP%]{position:fixed;pointer-events:none;z-index:99999;font-family:JetBrains Mono,monospace;font-size:10px;letter-spacing:.2em;color:var(--ink);text-transform:uppercase;transform:translate3d(20px,20px,0);opacity:0;transition:opacity .3s;mix-blend-mode:difference}.cursor-label.show[_ngcontent-%COMP%]{opacity:1}"],changeDetection:0})}}return n})();var gp="168";var jC=0,ay=1,$C=2;var d_=1,qC=2,bi=3,Ji=0,pn=1,Ei=2,Yi=0,zs=1,cy=2,ly=3,uy=4,XC=5,Ir=100,YC=101,ZC=102,JC=103,KC=104,QC=200,e1=201,t1=202,n1=203,lh=204,uh=205,i1=206,r1=207,s1=208,o1=209,a1=210,c1=211,l1=212,u1=213,d1=214,f1=0,h1=1,p1=2,fl=3,m1=4,g1=5,v1=6,y1=7,f_=0,_1=1,x1=2,Zi=0,M1=1,b1=2,w1=3,E1=4,S1=5,C1=6,D1=7;var dy=300,js=301,$s=302,dh=303,fh=304,$l=306,hh=1e3,Rr=1001,ph=1002,Pn=1003,T1=1004;var Lc=1005;var Gn=1006,Nf=1007;var Nr=1008;var Di=1009,h_=1010,p_=1011,$o=1012,vp=1013,Or=1014,Si=1015,Jo=1016,yp=1017,_p=1018,qs=1020,m_=35902,g_=1021,v_=1022,Wn=1023,y_=1024,__=1025,Hs=1026,Xs=1027,x_=1028,xp=1029,M_=1030,Mp=1031;var bp=1033,al=33776,cl=33777,ll=33778,ul=33779,mh=35840,gh=35841,vh=35842,yh=35843,_h=36196,xh=37492,Mh=37496,bh=37808,wh=37809,Eh=37810,Sh=37811,Ch=37812,Dh=37813,Th=37814,Ah=37815,Ih=37816,Ph=37817,Rh=37818,Nh=37819,Oh=37820,Fh=37821,dl=36492,Lh=36494,kh=36495,b_=36283,Uh=36284,Vh=36285,Bh=36286;var hl=2300,zh=2301,Of=2302,fy=2400,hy=2401,py=2402;var A1=3200,I1=3201;var w_=0,P1=1,qi="",ii="srgb",tr="srgb-linear",wp="display-p3",ql="display-p3-linear",pl="linear",mt="srgb",ml="rec709",gl="p3";var bs=7680;var my=519,R1=512,N1=513,O1=514,E_=515,F1=516,L1=517,k1=518,U1=519,gy=35044;var vy="300 es",Ci=2e3,vl=2001,Ki=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let r=this._listeners[e];if(r!==void 0){let s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let i=this._listeners[e.type];if(i!==void 0){e.target=this;let r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}},Qt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Ff=Math.PI/180,Hh=180/Math.PI;function Ko(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Qt[n&255]+Qt[n>>8&255]+Qt[n>>16&255]+Qt[n>>24&255]+"-"+Qt[e&255]+Qt[e>>8&255]+"-"+Qt[e>>16&15|64]+Qt[e>>24&255]+"-"+Qt[t&63|128]+Qt[t>>8&255]+"-"+Qt[t>>16&255]+Qt[t>>24&255]+Qt[i&255]+Qt[i>>8&255]+Qt[i>>16&255]+Qt[i>>24&255]).toLowerCase()}function hn(n,e,t){return Math.max(e,Math.min(t,n))}function V1(n,e){return(n%e+e)%e}function Lf(n,e,t){return(1-t)*n+t*e}function Lo(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function fn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var We=class n{constructor(e=0,t=0){n.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(hn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},ze=class n{constructor(e,t,i,r,s,o,a,c,l){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,c,l)}set(e,t,i,r,s,o,a,c,l){let u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=c,u[6]=i,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],c=i[6],l=i[1],u=i[4],d=i[7],f=i[2],h=i[5],g=i[8],v=r[0],m=r[3],p=r[6],b=r[1],M=r[4],E=r[7],F=r[2],C=r[5],D=r[8];return s[0]=o*v+a*b+c*F,s[3]=o*m+a*M+c*C,s[6]=o*p+a*E+c*D,s[1]=l*v+u*b+d*F,s[4]=l*m+u*M+d*C,s[7]=l*p+u*E+d*D,s[2]=f*v+h*b+g*F,s[5]=f*m+h*M+g*C,s[8]=f*p+h*E+g*D,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8];return t*o*u-t*a*l-i*s*u+i*a*c+r*s*l-r*o*c}invert(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],d=u*o-a*l,f=a*c-u*s,h=l*s-o*c,g=t*d+i*f+r*h;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/g;return e[0]=d*v,e[1]=(r*l-u*i)*v,e[2]=(a*i-r*o)*v,e[3]=f*v,e[4]=(u*t-r*c)*v,e[5]=(r*s-a*t)*v,e[6]=h*v,e[7]=(i*c-l*t)*v,e[8]=(o*t-i*s)*v,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){let c=Math.cos(s),l=Math.sin(s);return this.set(i*c,i*l,-i*(c*o+l*a)+o+e,-r*l,r*c,-r*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(kf.makeScale(e,t)),this}rotate(e){return this.premultiply(kf.makeRotation(-e)),this}translate(e,t){return this.premultiply(kf.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},kf=new ze;function S_(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function yl(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function B1(){let n=yl("canvas");return n.style.display="block",n}var yy={};function Wo(n){n in yy||(yy[n]=!0,console.warn(n))}function z1(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}var _y=new ze().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),xy=new ze().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),ko={[tr]:{transfer:pl,primaries:ml,luminanceCoefficients:[.2126,.7152,.0722],toReference:n=>n,fromReference:n=>n},[ii]:{transfer:mt,primaries:ml,luminanceCoefficients:[.2126,.7152,.0722],toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[ql]:{transfer:pl,primaries:gl,luminanceCoefficients:[.2289,.6917,.0793],toReference:n=>n.applyMatrix3(xy),fromReference:n=>n.applyMatrix3(_y)},[wp]:{transfer:mt,primaries:gl,luminanceCoefficients:[.2289,.6917,.0793],toReference:n=>n.convertSRGBToLinear().applyMatrix3(xy),fromReference:n=>n.applyMatrix3(_y).convertLinearToSRGB()}},H1=new Set([tr,ql]),st={enabled:!0,_workingColorSpace:tr,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!H1.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;let i=ko[e].toReference,r=ko[t].fromReference;return r(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return ko[n].primaries},getTransfer:function(n){return n===qi?pl:ko[n].transfer},getLuminanceCoefficients:function(n,e=this._workingColorSpace){return n.fromArray(ko[e].luminanceCoefficients)}};function Gs(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Uf(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var ws,Gh=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ws===void 0&&(ws=yl("canvas")),ws.width=e.width,ws.height=e.height;let i=ws.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=ws}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=yl("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Gs(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Gs(t[i]/255)*255):t[i]=Gs(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},G1=0,_l=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:G1++}),this.uuid=Ko(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Vf(r[o].image)):s.push(Vf(r[o]))}else s=Vf(r);i.url=s}return t||(e.images[this.uuid]=i),i}};function Vf(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Gh.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var W1=0,Br=(()=>{class n extends Ki{constructor(t=n.DEFAULT_IMAGE,i=n.DEFAULT_MAPPING,r=Rr,s=Rr,o=Gn,a=Nr,c=Wn,l=Di,u=n.DEFAULT_ANISOTROPY,d=qi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:W1++}),this.uuid=Ko(),this.name="",this.source=new _l(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=s,this.magFilter=o,this.minFilter=a,this.anisotropy=u,this.format=c,this.internalFormat=null,this.type=l,this.offset=new We(0,0),this.repeat=new We(1,1),this.center=new We(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ze,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(t.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==dy)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case hh:t.x=t.x-Math.floor(t.x);break;case Rr:t.x=t.x<0?0:1;break;case ph:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case hh:t.y=t.y-Math.floor(t.y);break;case Rr:t.y=t.y<0?0:1;break;case ph:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}return n.DEFAULT_IMAGE=null,n.DEFAULT_MAPPING=dy,n.DEFAULT_ANISOTROPY=1,n})(),gt=class n{constructor(e=0,t=0,i=0,r=1){n.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s,c=e.elements,l=c[0],u=c[4],d=c[8],f=c[1],h=c[5],g=c[9],v=c[2],m=c[6],p=c[10];if(Math.abs(u-f)<.01&&Math.abs(d-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(d+v)<.1&&Math.abs(g+m)<.1&&Math.abs(l+h+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let M=(l+1)/2,E=(h+1)/2,F=(p+1)/2,C=(u+f)/4,D=(d+v)/4,O=(g+m)/4;return M>E&&M>F?M<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(M),r=C/i,s=D/i):E>F?E<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(E),i=C/r,s=O/r):F<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(F),i=D/s,r=O/s),this.set(i,r,s,t),this}let b=Math.sqrt((m-g)*(m-g)+(d-v)*(d-v)+(f-u)*(f-u));return Math.abs(b)<.001&&(b=1),this.x=(m-g)/b,this.y=(d-v)/b,this.z=(f-u)/b,this.w=Math.acos((l+h+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Wh=class extends Ki{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new gt(0,0,e,t),this.scissorTest=!1,this.viewport=new gt(0,0,e,t);let r={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Gn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);let s=new Br(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];let o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new _l(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ti=class extends Wh{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},xl=class extends Br{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Pn,this.minFilter=Pn,this.wrapR=Rr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var jh=class extends Br{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Pn,this.minFilter=Pn,this.wrapR=Rr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Qi=class{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let c=i[r+0],l=i[r+1],u=i[r+2],d=i[r+3],f=s[o+0],h=s[o+1],g=s[o+2],v=s[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=d;return}if(a===1){e[t+0]=f,e[t+1]=h,e[t+2]=g,e[t+3]=v;return}if(d!==v||c!==f||l!==h||u!==g){let m=1-a,p=c*f+l*h+u*g+d*v,b=p>=0?1:-1,M=1-p*p;if(M>Number.EPSILON){let F=Math.sqrt(M),C=Math.atan2(F,p*b);m=Math.sin(m*C)/F,a=Math.sin(a*C)/F}let E=a*b;if(c=c*m+f*E,l=l*m+h*E,u=u*m+g*E,d=d*m+v*E,m===1-a){let F=1/Math.sqrt(c*c+l*l+u*u+d*d);c*=F,l*=F,u*=F,d*=F}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,r,s,o){let a=i[r],c=i[r+1],l=i[r+2],u=i[r+3],d=s[o],f=s[o+1],h=s[o+2],g=s[o+3];return e[t]=a*g+u*d+c*h-l*f,e[t+1]=c*g+u*f+l*d-a*h,e[t+2]=l*g+u*h+a*f-c*d,e[t+3]=u*g-a*d-c*f-l*h,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(i/2),u=a(r/2),d=a(s/2),f=c(i/2),h=c(r/2),g=c(s/2);switch(o){case"XYZ":this._x=f*u*d+l*h*g,this._y=l*h*d-f*u*g,this._z=l*u*g+f*h*d,this._w=l*u*d-f*h*g;break;case"YXZ":this._x=f*u*d+l*h*g,this._y=l*h*d-f*u*g,this._z=l*u*g-f*h*d,this._w=l*u*d+f*h*g;break;case"ZXY":this._x=f*u*d-l*h*g,this._y=l*h*d+f*u*g,this._z=l*u*g+f*h*d,this._w=l*u*d-f*h*g;break;case"ZYX":this._x=f*u*d-l*h*g,this._y=l*h*d+f*u*g,this._z=l*u*g-f*h*d,this._w=l*u*d+f*h*g;break;case"YZX":this._x=f*u*d+l*h*g,this._y=l*h*d+f*u*g,this._z=l*u*g-f*h*d,this._w=l*u*d-f*h*g;break;case"XZY":this._x=f*u*d-l*h*g,this._y=l*h*d-f*u*g,this._z=l*u*g+f*h*d,this._w=l*u*d+f*h*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],c=t[9],l=t[2],u=t[6],d=t[10],f=i+a+d;if(f>0){let h=.5/Math.sqrt(f+1);this._w=.25/h,this._x=(u-c)*h,this._y=(s-l)*h,this._z=(o-r)*h}else if(i>a&&i>d){let h=2*Math.sqrt(1+i-a-d);this._w=(u-c)/h,this._x=.25*h,this._y=(r+o)/h,this._z=(s+l)/h}else if(a>d){let h=2*Math.sqrt(1+a-i-d);this._w=(s-l)/h,this._x=(r+o)/h,this._y=.25*h,this._z=(c+u)/h}else{let h=2*Math.sqrt(1+d-i-a);this._w=(o-r)/h,this._x=(s+l)/h,this._y=(c+u)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(hn(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,c=t._y,l=t._z,u=t._w;return this._x=i*u+o*a+r*l-s*c,this._y=r*u+o*c+s*a-i*l,this._z=s*u+o*l+i*c-r*a,this._w=o*u-i*a-r*c-s*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let i=this._x,r=this._y,s=this._z,o=this._w,a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;let c=1-a*a;if(c<=Number.EPSILON){let h=1-t;return this._w=h*o+t*this._w,this._x=h*i+t*this._x,this._y=h*r+t*this._y,this._z=h*s+t*this._z,this.normalize(),this}let l=Math.sqrt(c),u=Math.atan2(l,a),d=Math.sin((1-t)*u)/l,f=Math.sin(t*u)/l;return this._w=o*d+this._w*f,this._x=i*d+this._x*f,this._y=r*d+this._y*f,this._z=s*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},R=class n{constructor(e=0,t=0,i=0){n.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(My.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(My.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){let t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*r-a*i),u=2*(a*t-s*r),d=2*(s*i-o*t);return this.x=t+c*l+o*d-a*u,this.y=i+c*u+a*l-s*d,this.z=r+c*d+s*u-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,c=t.z;return this.x=r*c-s*a,this.y=s*o-i*c,this.z=i*a-r*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Bf.copy(this).projectOnVector(e),this.sub(Bf)}reflect(e){return this.sub(Bf.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(hn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Bf=new R,My=new Qi,Fr=class{constructor(e=new R(1/0,1/0,1/0),t=new R(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Bn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Bn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=Bn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Bn):Bn.fromBufferAttribute(s,o),Bn.applyMatrix4(e.matrixWorld),this.expandByPoint(Bn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),kc.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),kc.copy(i.boundingBox)),kc.applyMatrix4(e.matrixWorld),this.union(kc)}let r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Bn),Bn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Uo),Uc.subVectors(this.max,Uo),Es.subVectors(e.a,Uo),Ss.subVectors(e.b,Uo),Cs.subVectors(e.c,Uo),zi.subVectors(Ss,Es),Hi.subVectors(Cs,Ss),wr.subVectors(Es,Cs);let t=[0,-zi.z,zi.y,0,-Hi.z,Hi.y,0,-wr.z,wr.y,zi.z,0,-zi.x,Hi.z,0,-Hi.x,wr.z,0,-wr.x,-zi.y,zi.x,0,-Hi.y,Hi.x,0,-wr.y,wr.x,0];return!zf(t,Es,Ss,Cs,Uc)||(t=[1,0,0,0,1,0,0,0,1],!zf(t,Es,Ss,Cs,Uc))?!1:(Vc.crossVectors(zi,Hi),t=[Vc.x,Vc.y,Vc.z],zf(t,Es,Ss,Cs,Uc))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Bn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Bn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(vi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),vi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),vi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),vi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),vi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),vi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),vi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),vi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(vi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},vi=[new R,new R,new R,new R,new R,new R,new R,new R],Bn=new R,kc=new Fr,Es=new R,Ss=new R,Cs=new R,zi=new R,Hi=new R,wr=new R,Uo=new R,Uc=new R,Vc=new R,Er=new R;function zf(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){Er.fromArray(n,s);let a=r.x*Math.abs(Er.x)+r.y*Math.abs(Er.y)+r.z*Math.abs(Er.z),c=e.dot(Er),l=t.dot(Er),u=i.dot(Er);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}var j1=new Fr,Vo=new R,Hf=new R,Ys=class{constructor(e=new R,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):j1.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Vo.subVectors(e,this.center);let t=Vo.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Vo,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Hf.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Vo.copy(e.center).add(Hf)),this.expandByPoint(Vo.copy(e.center).sub(Hf))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},yi=new R,Gf=new R,Bc=new R,Gi=new R,Wf=new R,zc=new R,jf=new R,Ml=class{constructor(e=new R,t=new R(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,yi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=yi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(yi.copy(this.origin).addScaledVector(this.direction,t),yi.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Gf.copy(e).add(t).multiplyScalar(.5),Bc.copy(t).sub(e).normalize(),Gi.copy(this.origin).sub(Gf);let s=e.distanceTo(t)*.5,o=-this.direction.dot(Bc),a=Gi.dot(this.direction),c=-Gi.dot(Bc),l=Gi.lengthSq(),u=Math.abs(1-o*o),d,f,h,g;if(u>0)if(d=o*c-a,f=o*a-c,g=s*u,d>=0)if(f>=-g)if(f<=g){let v=1/u;d*=v,f*=v,h=d*(d+o*f+2*a)+f*(o*d+f+2*c)+l}else f=s,d=Math.max(0,-(o*f+a)),h=-d*d+f*(f+2*c)+l;else f=-s,d=Math.max(0,-(o*f+a)),h=-d*d+f*(f+2*c)+l;else f<=-g?(d=Math.max(0,-(-o*s+a)),f=d>0?-s:Math.min(Math.max(-s,-c),s),h=-d*d+f*(f+2*c)+l):f<=g?(d=0,f=Math.min(Math.max(-s,-c),s),h=f*(f+2*c)+l):(d=Math.max(0,-(o*s+a)),f=d>0?s:Math.min(Math.max(-s,-c),s),h=-d*d+f*(f+2*c)+l);else f=o>0?-s:s,d=Math.max(0,-(o*f+a)),h=-d*d+f*(f+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(Gf).addScaledVector(Bc,f),h}intersectSphere(e,t){yi.subVectors(e.center,this.origin);let i=yi.dot(this.direction),r=yi.dot(yi)-i*i,s=e.radius*e.radius;if(r>s)return null;let o=Math.sqrt(s-r),a=i-o,c=i+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,c,l=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,f=this.origin;return l>=0?(i=(e.min.x-f.x)*l,r=(e.max.x-f.x)*l):(i=(e.max.x-f.x)*l,r=(e.min.x-f.x)*l),u>=0?(s=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),d>=0?(a=(e.min.z-f.z)*d,c=(e.max.z-f.z)*d):(a=(e.max.z-f.z)*d,c=(e.min.z-f.z)*d),i>c||a>r)||((a>i||i!==i)&&(i=a),(c<r||r!==r)&&(r=c),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,yi)!==null}intersectTriangle(e,t,i,r,s){Wf.subVectors(t,e),zc.subVectors(i,e),jf.crossVectors(Wf,zc);let o=this.direction.dot(jf),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Gi.subVectors(this.origin,e);let c=a*this.direction.dot(zc.crossVectors(Gi,zc));if(c<0)return null;let l=a*this.direction.dot(Wf.cross(Gi));if(l<0||c+l>o)return null;let u=-a*Gi.dot(jf);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Et=class n{constructor(e,t,i,r,s,o,a,c,l,u,d,f,h,g,v,m){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,c,l,u,d,f,h,g,v,m)}set(e,t,i,r,s,o,a,c,l,u,d,f,h,g,v,m){let p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=r,p[1]=s,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=u,p[10]=d,p[14]=f,p[3]=h,p[7]=g,p[11]=v,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,i=e.elements,r=1/Ds.setFromMatrixColumn(e,0).length(),s=1/Ds.setFromMatrixColumn(e,1).length(),o=1/Ds.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),c=Math.cos(r),l=Math.sin(r),u=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){let f=o*u,h=o*d,g=a*u,v=a*d;t[0]=c*u,t[4]=-c*d,t[8]=l,t[1]=h+g*l,t[5]=f-v*l,t[9]=-a*c,t[2]=v-f*l,t[6]=g+h*l,t[10]=o*c}else if(e.order==="YXZ"){let f=c*u,h=c*d,g=l*u,v=l*d;t[0]=f+v*a,t[4]=g*a-h,t[8]=o*l,t[1]=o*d,t[5]=o*u,t[9]=-a,t[2]=h*a-g,t[6]=v+f*a,t[10]=o*c}else if(e.order==="ZXY"){let f=c*u,h=c*d,g=l*u,v=l*d;t[0]=f-v*a,t[4]=-o*d,t[8]=g+h*a,t[1]=h+g*a,t[5]=o*u,t[9]=v-f*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){let f=o*u,h=o*d,g=a*u,v=a*d;t[0]=c*u,t[4]=g*l-h,t[8]=f*l+v,t[1]=c*d,t[5]=v*l+f,t[9]=h*l-g,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){let f=o*c,h=o*l,g=a*c,v=a*l;t[0]=c*u,t[4]=v-f*d,t[8]=g*d+h,t[1]=d,t[5]=o*u,t[9]=-a*u,t[2]=-l*u,t[6]=h*d+g,t[10]=f-v*d}else if(e.order==="XZY"){let f=o*c,h=o*l,g=a*c,v=a*l;t[0]=c*u,t[4]=-d,t[8]=l*u,t[1]=f*d+v,t[5]=o*u,t[9]=h*d-g,t[2]=g*d-h,t[6]=a*u,t[10]=v*d+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose($1,e,q1)}lookAt(e,t,i){let r=this.elements;return bn.subVectors(e,t),bn.lengthSq()===0&&(bn.z=1),bn.normalize(),Wi.crossVectors(i,bn),Wi.lengthSq()===0&&(Math.abs(i.z)===1?bn.x+=1e-4:bn.z+=1e-4,bn.normalize(),Wi.crossVectors(i,bn)),Wi.normalize(),Hc.crossVectors(bn,Wi),r[0]=Wi.x,r[4]=Hc.x,r[8]=bn.x,r[1]=Wi.y,r[5]=Hc.y,r[9]=bn.y,r[2]=Wi.z,r[6]=Hc.z,r[10]=bn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],c=i[8],l=i[12],u=i[1],d=i[5],f=i[9],h=i[13],g=i[2],v=i[6],m=i[10],p=i[14],b=i[3],M=i[7],E=i[11],F=i[15],C=r[0],D=r[4],O=r[8],w=r[12],_=r[1],A=r[5],G=r[9],z=r[13],J=r[2],Z=r[6],$=r[10],Q=r[14],H=r[3],le=r[7],pe=r[11],_e=r[15];return s[0]=o*C+a*_+c*J+l*H,s[4]=o*D+a*A+c*Z+l*le,s[8]=o*O+a*G+c*$+l*pe,s[12]=o*w+a*z+c*Q+l*_e,s[1]=u*C+d*_+f*J+h*H,s[5]=u*D+d*A+f*Z+h*le,s[9]=u*O+d*G+f*$+h*pe,s[13]=u*w+d*z+f*Q+h*_e,s[2]=g*C+v*_+m*J+p*H,s[6]=g*D+v*A+m*Z+p*le,s[10]=g*O+v*G+m*$+p*pe,s[14]=g*w+v*z+m*Q+p*_e,s[3]=b*C+M*_+E*J+F*H,s[7]=b*D+M*A+E*Z+F*le,s[11]=b*O+M*G+E*$+F*pe,s[15]=b*w+M*z+E*Q+F*_e,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],c=e[9],l=e[13],u=e[2],d=e[6],f=e[10],h=e[14],g=e[3],v=e[7],m=e[11],p=e[15];return g*(+s*c*d-r*l*d-s*a*f+i*l*f+r*a*h-i*c*h)+v*(+t*c*h-t*l*f+s*o*f-r*o*h+r*l*u-s*c*u)+m*(+t*l*d-t*a*h-s*o*d+i*o*h+s*a*u-i*l*u)+p*(-r*a*u-t*c*d+t*a*f+r*o*d-i*o*f+i*c*u)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],d=e[9],f=e[10],h=e[11],g=e[12],v=e[13],m=e[14],p=e[15],b=d*m*l-v*f*l+v*c*h-a*m*h-d*c*p+a*f*p,M=g*f*l-u*m*l-g*c*h+o*m*h+u*c*p-o*f*p,E=u*v*l-g*d*l+g*a*h-o*v*h-u*a*p+o*d*p,F=g*d*c-u*v*c-g*a*f+o*v*f+u*a*m-o*d*m,C=t*b+i*M+r*E+s*F;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let D=1/C;return e[0]=b*D,e[1]=(v*f*s-d*m*s-v*r*h+i*m*h+d*r*p-i*f*p)*D,e[2]=(a*m*s-v*c*s+v*r*l-i*m*l-a*r*p+i*c*p)*D,e[3]=(d*c*s-a*f*s-d*r*l+i*f*l+a*r*h-i*c*h)*D,e[4]=M*D,e[5]=(u*m*s-g*f*s+g*r*h-t*m*h-u*r*p+t*f*p)*D,e[6]=(g*c*s-o*m*s-g*r*l+t*m*l+o*r*p-t*c*p)*D,e[7]=(o*f*s-u*c*s+u*r*l-t*f*l-o*r*h+t*c*h)*D,e[8]=E*D,e[9]=(g*d*s-u*v*s-g*i*h+t*v*h+u*i*p-t*d*p)*D,e[10]=(o*v*s-g*a*s+g*i*l-t*v*l-o*i*p+t*a*p)*D,e[11]=(u*a*s-o*d*s-u*i*l+t*d*l+o*i*h-t*a*h)*D,e[12]=F*D,e[13]=(u*v*r-g*d*r+g*i*f-t*v*f-u*i*m+t*d*m)*D,e[14]=(g*a*r-o*v*r-g*i*c+t*v*c+o*i*m-t*a*m)*D,e[15]=(o*d*r-u*a*r+u*i*c-t*d*c-o*i*f+t*a*f)*D,this}scale(e){let t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,c=e.z,l=s*o,u=s*a;return this.set(l*o+i,l*a-r*c,l*c+r*a,0,l*a+r*c,u*a+i,u*c-r*o,0,l*c-r*a,u*c+r*o,s*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){let r=this.elements,s=t._x,o=t._y,a=t._z,c=t._w,l=s+s,u=o+o,d=a+a,f=s*l,h=s*u,g=s*d,v=o*u,m=o*d,p=a*d,b=c*l,M=c*u,E=c*d,F=i.x,C=i.y,D=i.z;return r[0]=(1-(v+p))*F,r[1]=(h+E)*F,r[2]=(g-M)*F,r[3]=0,r[4]=(h-E)*C,r[5]=(1-(f+p))*C,r[6]=(m+b)*C,r[7]=0,r[8]=(g+M)*D,r[9]=(m-b)*D,r[10]=(1-(f+v))*D,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){let r=this.elements,s=Ds.set(r[0],r[1],r[2]).length(),o=Ds.set(r[4],r[5],r[6]).length(),a=Ds.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],zn.copy(this);let l=1/s,u=1/o,d=1/a;return zn.elements[0]*=l,zn.elements[1]*=l,zn.elements[2]*=l,zn.elements[4]*=u,zn.elements[5]*=u,zn.elements[6]*=u,zn.elements[8]*=d,zn.elements[9]*=d,zn.elements[10]*=d,t.setFromRotationMatrix(zn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o,a=Ci){let c=this.elements,l=2*s/(t-e),u=2*s/(i-r),d=(t+e)/(t-e),f=(i+r)/(i-r),h,g;if(a===Ci)h=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===vl)h=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=h,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=Ci){let c=this.elements,l=1/(t-e),u=1/(i-r),d=1/(o-s),f=(t+e)*l,h=(i+r)*u,g,v;if(a===Ci)g=(o+s)*d,v=-2*d;else if(a===vl)g=s*d,v=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-f,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-h,c[2]=0,c[6]=0,c[10]=v,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},Ds=new R,zn=new Et,$1=new R(0,0,0),q1=new R(1,1,1),Wi=new R,Hc=new R,bn=new R,by=new Et,wy=new Qi,Lr=(()=>{class n{constructor(t=0,i=0,r=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=r,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,r,s=this._order){return this._x=t,this._y=i,this._z=r,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,r=!0){let s=t.elements,o=s[0],a=s[4],c=s[8],l=s[1],u=s[5],d=s[9],f=s[2],h=s[6],g=s[10];switch(i){case"XYZ":this._y=Math.asin(hn(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-d,g),this._z=Math.atan2(-a,o)):(this._x=Math.atan2(h,u),this._z=0);break;case"YXZ":this._x=Math.asin(-hn(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(c,g),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-f,o),this._z=0);break;case"ZXY":this._x=Math.asin(hn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,g),this._z=Math.atan2(-a,u)):(this._y=0,this._z=Math.atan2(l,o));break;case"ZYX":this._y=Math.asin(-hn(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,g),this._z=Math.atan2(l,o)):(this._x=0,this._z=Math.atan2(-a,u));break;case"YZX":this._z=Math.asin(hn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,u),this._y=Math.atan2(-f,o)):(this._x=0,this._y=Math.atan2(c,g));break;case"XZY":this._z=Math.asin(-hn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,u),this._y=Math.atan2(c,o)):(this._x=Math.atan2(-d,g),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,r){return by.makeRotationFromQuaternion(t),this.setFromRotationMatrix(by,i,r)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return wy.setFromEuler(this),this.setFromQuaternion(wy,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}return n.DEFAULT_ORDER="XYZ",n})(),bl=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},X1=0,Ey=new R,Ts=new Qi,_i=new Et,Gc=new R,Bo=new R,Y1=new R,Z1=new Qi,Sy=new R(1,0,0),Cy=new R(0,1,0),Dy=new R(0,0,1),Ty={type:"added"},J1={type:"removed"},As={type:"childadded",child:null},$f={type:"childremoved",child:null},si=(()=>{class n extends Ki{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:X1++}),this.uuid=Ko(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let t=new R,i=new Lr,r=new Qi,s=new R(1,1,1);function o(){r.setFromEuler(i,!1)}function a(){i.setFromQuaternion(r,void 0,!1)}i._onChange(o),r._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Et},normalMatrix:{value:new ze}}),this.matrix=new Et,this.matrixWorld=new Et,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new bl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return Ts.setFromAxisAngle(t,i),this.quaternion.multiply(Ts),this}rotateOnWorldAxis(t,i){return Ts.setFromAxisAngle(t,i),this.quaternion.premultiply(Ts),this}rotateX(t){return this.rotateOnAxis(Sy,t)}rotateY(t){return this.rotateOnAxis(Cy,t)}rotateZ(t){return this.rotateOnAxis(Dy,t)}translateOnAxis(t,i){return Ey.copy(t).applyQuaternion(this.quaternion),this.position.add(Ey.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(Sy,t)}translateY(t){return this.translateOnAxis(Cy,t)}translateZ(t){return this.translateOnAxis(Dy,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(_i.copy(this.matrixWorld).invert())}lookAt(t,i,r){t.isVector3?Gc.copy(t):Gc.set(t,i,r);let s=this.parent;this.updateWorldMatrix(!0,!1),Bo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?_i.lookAt(Bo,Gc,this.up):_i.lookAt(Gc,Bo,this.up),this.quaternion.setFromRotationMatrix(_i),s&&(_i.extractRotation(s.matrixWorld),Ts.setFromRotationMatrix(_i),this.quaternion.premultiply(Ts.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Ty),As.child=t,this.dispatchEvent(As),As.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}let i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(J1),$f.child=t,this.dispatchEvent($f),$f.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),_i.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),_i.multiply(t.parent.matrixWorld)),t.applyMatrix4(_i),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Ty),As.child=t,this.dispatchEvent(As),As.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let r=0,s=this.children.length;r<s;r++){let a=this.children[r].getObjectByProperty(t,i);if(a!==void 0)return a}}getObjectsByProperty(t,i,r=[]){this[t]===i&&r.push(this);let s=this.children;for(let o=0,a=s.length;o<a;o++)s[o].getObjectsByProperty(t,i,r);return r}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Bo,t,Y1),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Bo,Z1,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);let i=this.children;for(let r=0,s=i.length;r<s;r++)i[r].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let i=this.children;for(let r=0,s=i.length;r<s;r++)i[r].traverseVisible(t)}traverseAncestors(t){let i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let i=this.children;for(let r=0,s=i.length;r<s;r++)i[r].updateMatrixWorld(t)}updateWorldMatrix(t,i){let r=this.parent;if(t===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){let s=this.children;for(let o=0,a=s.length;o<a;o++)s[o].updateWorldMatrix(!1,!0)}}toJSON(t){let i=t===void 0||typeof t=="string",r={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(c=>({boxInitialized:c.boxInitialized,boxMin:c.box.min.toArray(),boxMax:c.box.max.toArray(),sphereInitialized:c.sphereInitialized,sphereRadius:c.sphere.radius,sphereCenter:c.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function o(c,l){return c[l.uuid]===void 0&&(c[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=o(t.geometries,this.geometry);let c=this.geometry.parameters;if(c!==void 0&&c.shapes!==void 0){let l=c.shapes;if(Array.isArray(l))for(let u=0,d=l.length;u<d;u++){let f=l[u];o(t.shapes,f)}else o(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let c=[];for(let l=0,u=this.material.length;l<u;l++)c.push(o(t.materials,this.material[l]));s.material=c}else s.material=o(t.materials,this.material);if(this.children.length>0){s.children=[];for(let c=0;c<this.children.length;c++)s.children.push(this.children[c].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let c=0;c<this.animations.length;c++){let l=this.animations[c];s.animations.push(o(t.animations,l))}}if(i){let c=a(t.geometries),l=a(t.materials),u=a(t.textures),d=a(t.images),f=a(t.shapes),h=a(t.skeletons),g=a(t.animations),v=a(t.nodes);c.length>0&&(r.geometries=c),l.length>0&&(r.materials=l),u.length>0&&(r.textures=u),d.length>0&&(r.images=d),f.length>0&&(r.shapes=f),h.length>0&&(r.skeletons=h),g.length>0&&(r.animations=g),v.length>0&&(r.nodes=v)}return r.object=s,r;function a(c){let l=[];for(let u in c){let d=c[u];delete d.metadata,l.push(d)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let r=0;r<t.children.length;r++){let s=t.children[r];this.add(s.clone())}return this}}return n.DEFAULT_UP=new R(0,1,0),n.DEFAULT_MATRIX_AUTO_UPDATE=!0,n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0,n})(),Hn=new R,xi=new R,qf=new R,Mi=new R,Is=new R,Ps=new R,Ay=new R,Xf=new R,Yf=new R,Zf=new R,Vs=class n{constructor(e=new R,t=new R,i=new R){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),Hn.subVectors(e,t),r.cross(Hn);let s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){Hn.subVectors(r,t),xi.subVectors(i,t),qf.subVectors(e,t);let o=Hn.dot(Hn),a=Hn.dot(xi),c=Hn.dot(qf),l=xi.dot(xi),u=xi.dot(qf),d=o*l-a*a;if(d===0)return s.set(0,0,0),null;let f=1/d,h=(l*c-a*u)*f,g=(o*u-a*c)*f;return s.set(1-h-g,g,h)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Mi)===null?!1:Mi.x>=0&&Mi.y>=0&&Mi.x+Mi.y<=1}static getInterpolation(e,t,i,r,s,o,a,c){return this.getBarycoord(e,t,i,r,Mi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,Mi.x),c.addScaledVector(o,Mi.y),c.addScaledVector(a,Mi.z),c)}static isFrontFacing(e,t,i,r){return Hn.subVectors(i,t),xi.subVectors(e,t),Hn.cross(xi).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Hn.subVectors(this.c,this.b),xi.subVectors(this.a,this.b),Hn.cross(xi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return n.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,r=this.b,s=this.c,o,a;Is.subVectors(r,i),Ps.subVectors(s,i),Xf.subVectors(e,i);let c=Is.dot(Xf),l=Ps.dot(Xf);if(c<=0&&l<=0)return t.copy(i);Yf.subVectors(e,r);let u=Is.dot(Yf),d=Ps.dot(Yf);if(u>=0&&d<=u)return t.copy(r);let f=c*d-u*l;if(f<=0&&c>=0&&u<=0)return o=c/(c-u),t.copy(i).addScaledVector(Is,o);Zf.subVectors(e,s);let h=Is.dot(Zf),g=Ps.dot(Zf);if(g>=0&&h<=g)return t.copy(s);let v=h*l-c*g;if(v<=0&&l>=0&&g<=0)return a=l/(l-g),t.copy(i).addScaledVector(Ps,a);let m=u*g-h*d;if(m<=0&&d-u>=0&&h-g>=0)return Ay.subVectors(s,r),a=(d-u)/(d-u+(h-g)),t.copy(r).addScaledVector(Ay,a);let p=1/(m+v+f);return o=v*p,a=f*p,t.copy(i).addScaledVector(Is,o).addScaledVector(Ps,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},C_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ji={h:0,s:0,l:0},Wc={h:0,s:0,l:0};function Jf(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var Xe=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ii){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,st.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=st.workingColorSpace){return this.r=e,this.g=t,this.b=i,st.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=st.workingColorSpace){if(e=V1(e,1),t=hn(t,0,1),i=hn(i,0,1),t===0)this.r=this.g=this.b=i;else{let s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=Jf(o,s,e+1/3),this.g=Jf(o,s,e),this.b=Jf(o,s,e-1/3)}return st.toWorkingColorSpace(this,r),this}setStyle(e,t=ii){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ii){let i=C_[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Gs(e.r),this.g=Gs(e.g),this.b=Gs(e.b),this}copyLinearToSRGB(e){return this.r=Uf(e.r),this.g=Uf(e.g),this.b=Uf(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ii){return st.fromWorkingColorSpace(en.copy(this),e),Math.round(hn(en.r*255,0,255))*65536+Math.round(hn(en.g*255,0,255))*256+Math.round(hn(en.b*255,0,255))}getHexString(e=ii){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=st.workingColorSpace){st.fromWorkingColorSpace(en.copy(this),t);let i=en.r,r=en.g,s=en.b,o=Math.max(i,r,s),a=Math.min(i,r,s),c,l,u=(a+o)/2;if(a===o)c=0,l=0;else{let d=o-a;switch(l=u<=.5?d/(o+a):d/(2-o-a),o){case i:c=(r-s)/d+(r<s?6:0);break;case r:c=(s-i)/d+2;break;case s:c=(i-r)/d+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=st.workingColorSpace){return st.fromWorkingColorSpace(en.copy(this),t),e.r=en.r,e.g=en.g,e.b=en.b,e}getStyle(e=ii){st.fromWorkingColorSpace(en.copy(this),e);let t=en.r,i=en.g,r=en.b;return e!==ii?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(ji),this.setHSL(ji.h+e,ji.s+t,ji.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(ji),e.getHSL(Wc);let i=Lf(ji.h,Wc.h,t),r=Lf(ji.s,Wc.s,t),s=Lf(ji.l,Wc.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},en=new Xe;Xe.NAMES=C_;var K1=0,er=class extends Ki{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:K1++}),this.uuid=Ko(),this.name="",this.type="Material",this.blending=zs,this.side=Ji,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=lh,this.blendDst=uh,this.blendEquation=Ir,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Xe(0,0,0),this.blendAlpha=0,this.depthFunc=fl,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=my,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=bs,this.stencilZFail=bs,this.stencilZPass=bs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==zs&&(i.blending=this.blending),this.side!==Ji&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==lh&&(i.blendSrc=this.blendSrc),this.blendDst!==uh&&(i.blendDst=this.blendDst),this.blendEquation!==Ir&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==fl&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==my&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==bs&&(i.stencilFail=this.stencilFail),this.stencilZFail!==bs&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==bs&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){let o=[];for(let a in s){let c=s[a];delete c.metadata,o.push(c)}return o}if(t){let s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},wl=class extends er{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Xe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Lr,this.combine=f_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var Nt=new R,jc=new We,mn=class{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=gy,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Si,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Wo("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)jc.fromBufferAttribute(this,t),jc.applyMatrix3(e),this.setXY(t,jc.x,jc.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Nt.fromBufferAttribute(this,t),Nt.applyMatrix3(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Nt.fromBufferAttribute(this,t),Nt.applyMatrix4(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Nt.fromBufferAttribute(this,t),Nt.applyNormalMatrix(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Nt.fromBufferAttribute(this,t),Nt.transformDirection(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Lo(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=fn(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Lo(t,this.array)),t}setX(e,t){return this.normalized&&(t=fn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Lo(t,this.array)),t}setY(e,t){return this.normalized&&(t=fn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Lo(t,this.array)),t}setZ(e,t){return this.normalized&&(t=fn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Lo(t,this.array)),t}setW(e,t){return this.normalized&&(t=fn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=fn(t,this.array),i=fn(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=fn(t,this.array),i=fn(i,this.array),r=fn(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=fn(t,this.array),i=fn(i,this.array),r=fn(r,this.array),s=fn(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==gy&&(e.usage=this.usage),e}};var El=class extends mn{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var Sl=class extends mn{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var cn=class extends mn{constructor(e,t,i){super(new Float32Array(e),t,i)}},Q1=0,In=new Et,Kf=new si,Rs=new R,wn=new Fr,zo=new Fr,Wt=new R,Rn=class n extends Ki{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Q1++}),this.uuid=Ko(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(S_(e)?Sl:El)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let s=new ze().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return In.makeRotationFromQuaternion(e),this.applyMatrix4(In),this}rotateX(e){return In.makeRotationX(e),this.applyMatrix4(In),this}rotateY(e){return In.makeRotationY(e),this.applyMatrix4(In),this}rotateZ(e){return In.makeRotationZ(e),this.applyMatrix4(In),this}translate(e,t,i){return In.makeTranslation(e,t,i),this.applyMatrix4(In),this}scale(e,t,i){return In.makeScale(e,t,i),this.applyMatrix4(In),this}lookAt(e){return Kf.lookAt(e),Kf.updateMatrix(),this.applyMatrix4(Kf.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Rs).negate(),this.translate(Rs.x,Rs.y,Rs.z),this}setFromPoints(e){let t=[];for(let i=0,r=e.length;i<r;i++){let s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new cn(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Fr);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){let s=t[i];wn.setFromBufferAttribute(s),this.morphTargetsRelative?(Wt.addVectors(this.boundingBox.min,wn.min),this.boundingBox.expandByPoint(Wt),Wt.addVectors(this.boundingBox.max,wn.max),this.boundingBox.expandByPoint(Wt)):(this.boundingBox.expandByPoint(wn.min),this.boundingBox.expandByPoint(wn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ys);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new R,1/0);return}if(e){let i=this.boundingSphere.center;if(wn.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){let a=t[s];zo.setFromBufferAttribute(a),this.morphTargetsRelative?(Wt.addVectors(wn.min,zo.min),wn.expandByPoint(Wt),Wt.addVectors(wn.max,zo.max),wn.expandByPoint(Wt)):(wn.expandByPoint(zo.min),wn.expandByPoint(zo.max))}wn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Wt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Wt));if(t)for(let s=0,o=t.length;s<o;s++){let a=t[s],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)Wt.fromBufferAttribute(a,l),c&&(Rs.fromBufferAttribute(e,l),Wt.add(Rs)),r=Math.max(r,i.distanceToSquared(Wt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new mn(new Float32Array(4*i.count),4));let o=this.getAttribute("tangent"),a=[],c=[];for(let O=0;O<i.count;O++)a[O]=new R,c[O]=new R;let l=new R,u=new R,d=new R,f=new We,h=new We,g=new We,v=new R,m=new R;function p(O,w,_){l.fromBufferAttribute(i,O),u.fromBufferAttribute(i,w),d.fromBufferAttribute(i,_),f.fromBufferAttribute(s,O),h.fromBufferAttribute(s,w),g.fromBufferAttribute(s,_),u.sub(l),d.sub(l),h.sub(f),g.sub(f);let A=1/(h.x*g.y-g.x*h.y);isFinite(A)&&(v.copy(u).multiplyScalar(g.y).addScaledVector(d,-h.y).multiplyScalar(A),m.copy(d).multiplyScalar(h.x).addScaledVector(u,-g.x).multiplyScalar(A),a[O].add(v),a[w].add(v),a[_].add(v),c[O].add(m),c[w].add(m),c[_].add(m))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let O=0,w=b.length;O<w;++O){let _=b[O],A=_.start,G=_.count;for(let z=A,J=A+G;z<J;z+=3)p(e.getX(z+0),e.getX(z+1),e.getX(z+2))}let M=new R,E=new R,F=new R,C=new R;function D(O){F.fromBufferAttribute(r,O),C.copy(F);let w=a[O];M.copy(w),M.sub(F.multiplyScalar(F.dot(w))).normalize(),E.crossVectors(C,w);let A=E.dot(c[O])<0?-1:1;o.setXYZW(O,M.x,M.y,M.z,A)}for(let O=0,w=b.length;O<w;++O){let _=b[O],A=_.start,G=_.count;for(let z=A,J=A+G;z<J;z+=3)D(e.getX(z+0)),D(e.getX(z+1)),D(e.getX(z+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new mn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,h=i.count;f<h;f++)i.setXYZ(f,0,0,0);let r=new R,s=new R,o=new R,a=new R,c=new R,l=new R,u=new R,d=new R;if(e)for(let f=0,h=e.count;f<h;f+=3){let g=e.getX(f+0),v=e.getX(f+1),m=e.getX(f+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,v),o.fromBufferAttribute(t,m),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),a.fromBufferAttribute(i,g),c.fromBufferAttribute(i,v),l.fromBufferAttribute(i,m),a.add(u),c.add(u),l.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(v,c.x,c.y,c.z),i.setXYZ(m,l.x,l.y,l.z)}else for(let f=0,h=t.count;f<h;f+=3)r.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Wt.fromBufferAttribute(e,t),Wt.normalize(),e.setXYZ(t,Wt.x,Wt.y,Wt.z)}toNonIndexed(){function e(a,c){let l=a.array,u=a.itemSize,d=a.normalized,f=new l.constructor(c.length*u),h=0,g=0;for(let v=0,m=c.length;v<m;v++){a.isInterleavedBufferAttribute?h=c[v]*a.data.stride+a.offset:h=c[v]*u;for(let p=0;p<u;p++)f[g++]=l[h++]}return new mn(f,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,r=this.attributes;for(let a in r){let c=r[a],l=e(c,i);t.setAttribute(a,l)}let s=this.morphAttributes;for(let a in s){let c=[],l=s[a];for(let u=0,d=l.length;u<d;u++){let f=l[u],h=e(f,i);c.push(h)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let c in i){let l=i[c];e.data.attributes[c]=l.toJSON(e.data)}let r={},s=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],u=[];for(let d=0,f=l.length;d<f;d++){let h=l[d];u.push(h.toJSON(e.data))}u.length>0&&(r[c]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone(t));let r=e.attributes;for(let l in r){let u=r[l];this.setAttribute(l,u.clone(t))}let s=e.morphAttributes;for(let l in s){let u=[],d=s[l];for(let f=0,h=d.length;f<h;f++)u.push(d[f].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let l=0,u=o.length;l<u;l++){let d=o[l];this.addGroup(d.start,d.count,d.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Iy=new Et,Sr=new Ml,$c=new Ys,Py=new R,Ns=new R,Os=new R,Fs=new R,Qf=new R,qc=new R,Xc=new We,Yc=new We,Zc=new We,Ry=new R,Ny=new R,Oy=new R,Jc=new R,Kc=new R,En=class extends si{constructor(e=new Rn,t=new wl){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){let i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);let a=this.morphTargetInfluences;if(s&&a){qc.set(0,0,0);for(let c=0,l=s.length;c<l;c++){let u=a[c],d=s[c];u!==0&&(Qf.fromBufferAttribute(d,e),o?qc.addScaledVector(Qf,u):qc.addScaledVector(Qf.sub(t),u))}t.add(qc)}return t}raycast(e,t){let i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),$c.copy(i.boundingSphere),$c.applyMatrix4(s),Sr.copy(e.ray).recast(e.near),!($c.containsPoint(Sr.origin)===!1&&(Sr.intersectSphere($c,Py)===null||Sr.origin.distanceToSquared(Py)>(e.far-e.near)**2))&&(Iy.copy(s).invert(),Sr.copy(e.ray).applyMatrix4(Iy),!(i.boundingBox!==null&&Sr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Sr)))}_computeIntersections(e,t,i){let r,s=this.geometry,o=this.material,a=s.index,c=s.attributes.position,l=s.attributes.uv,u=s.attributes.uv1,d=s.attributes.normal,f=s.groups,h=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,v=f.length;g<v;g++){let m=f[g],p=o[m.materialIndex],b=Math.max(m.start,h.start),M=Math.min(a.count,Math.min(m.start+m.count,h.start+h.count));for(let E=b,F=M;E<F;E+=3){let C=a.getX(E),D=a.getX(E+1),O=a.getX(E+2);r=Qc(this,p,e,i,l,u,d,C,D,O),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{let g=Math.max(0,h.start),v=Math.min(a.count,h.start+h.count);for(let m=g,p=v;m<p;m+=3){let b=a.getX(m),M=a.getX(m+1),E=a.getX(m+2);r=Qc(this,o,e,i,l,u,d,b,M,E),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,v=f.length;g<v;g++){let m=f[g],p=o[m.materialIndex],b=Math.max(m.start,h.start),M=Math.min(c.count,Math.min(m.start+m.count,h.start+h.count));for(let E=b,F=M;E<F;E+=3){let C=E,D=E+1,O=E+2;r=Qc(this,p,e,i,l,u,d,C,D,O),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{let g=Math.max(0,h.start),v=Math.min(c.count,h.start+h.count);for(let m=g,p=v;m<p;m+=3){let b=m,M=m+1,E=m+2;r=Qc(this,o,e,i,l,u,d,b,M,E),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}};function eD(n,e,t,i,r,s,o,a){let c;if(e.side===pn?c=i.intersectTriangle(o,s,r,!0,a):c=i.intersectTriangle(r,s,o,e.side===Ji,a),c===null)return null;Kc.copy(a),Kc.applyMatrix4(n.matrixWorld);let l=t.ray.origin.distanceTo(Kc);return l<t.near||l>t.far?null:{distance:l,point:Kc.clone(),object:n}}function Qc(n,e,t,i,r,s,o,a,c,l){n.getVertexPosition(a,Ns),n.getVertexPosition(c,Os),n.getVertexPosition(l,Fs);let u=eD(n,e,t,i,Ns,Os,Fs,Jc);if(u){r&&(Xc.fromBufferAttribute(r,a),Yc.fromBufferAttribute(r,c),Zc.fromBufferAttribute(r,l),u.uv=Vs.getInterpolation(Jc,Ns,Os,Fs,Xc,Yc,Zc,new We)),s&&(Xc.fromBufferAttribute(s,a),Yc.fromBufferAttribute(s,c),Zc.fromBufferAttribute(s,l),u.uv1=Vs.getInterpolation(Jc,Ns,Os,Fs,Xc,Yc,Zc,new We)),o&&(Ry.fromBufferAttribute(o,a),Ny.fromBufferAttribute(o,c),Oy.fromBufferAttribute(o,l),u.normal=Vs.getInterpolation(Jc,Ns,Os,Fs,Ry,Ny,Oy,new R),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));let d={a,b:c,c:l,normal:new R,materialIndex:0};Vs.getNormal(Ns,Os,Fs,d.normal),u.face=d}return u}var kr=class n extends Rn{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};let a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);let c=[],l=[],u=[],d=[],f=0,h=0;g("z","y","x",-1,-1,i,t,e,o,s,0),g("z","y","x",1,-1,i,t,-e,o,s,1),g("x","z","y",1,1,e,i,t,r,o,2),g("x","z","y",1,-1,e,i,-t,r,o,3),g("x","y","z",1,-1,e,t,i,r,s,4),g("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(c),this.setAttribute("position",new cn(l,3)),this.setAttribute("normal",new cn(u,3)),this.setAttribute("uv",new cn(d,2));function g(v,m,p,b,M,E,F,C,D,O,w){let _=E/D,A=F/O,G=E/2,z=F/2,J=C/2,Z=D+1,$=O+1,Q=0,H=0,le=new R;for(let pe=0;pe<$;pe++){let _e=pe*A-z;for(let Ye=0;Ye<Z;Ye++){let ct=Ye*_-G;le[v]=ct*b,le[m]=_e*M,le[p]=J,l.push(le.x,le.y,le.z),le[v]=0,le[m]=0,le[p]=C>0?1:-1,u.push(le.x,le.y,le.z),d.push(Ye/D),d.push(1-pe/O),Q+=1}}for(let pe=0;pe<O;pe++)for(let _e=0;_e<D;_e++){let Ye=f+_e+Z*pe,ct=f+_e+Z*(pe+1),j=f+(_e+1)+Z*(pe+1),te=f+(_e+1)+Z*pe;c.push(Ye,ct,te),c.push(ct,j,te),H+=6}a.addGroup(h,H,w),h+=H,f+=Q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function Zs(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function an(n){let e={};for(let t=0;t<n.length;t++){let i=Zs(n[t]);for(let r in i)e[r]=i[r]}return e}function tD(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function D_(n){let e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:st.workingColorSpace}var nD={clone:Zs,merge:an},iD=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,rD=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,oi=class extends er{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=iD,this.fragmentShader=rD,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Zs(e.uniforms),this.uniformsGroups=tD(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let r in this.uniforms){let o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}},Cl=class extends si{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Et,this.projectionMatrix=new Et,this.projectionMatrixInverse=new Et,this.coordinateSystem=Ci}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},$i=new R,Fy=new We,Ly=new We,tn=class extends Cl{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Hh*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Ff*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Hh*2*Math.atan(Math.tan(Ff*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){$i.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set($i.x,$i.y).multiplyScalar(-e/$i.z),$i.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set($i.x,$i.y).multiplyScalar(-e/$i.z)}getViewSize(e,t){return this.getViewBounds(e,Fy,Ly),t.subVectors(Ly,Fy)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Ff*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;s+=o.offsetX*r/c,t-=o.offsetY*i/l,r*=o.width/c,i*=o.height/l}let a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Ls=-90,ks=1,$h=class extends si{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new tn(Ls,ks,e,t);r.layers=this.layers,this.add(r);let s=new tn(Ls,ks,e,t);s.layers=this.layers,this.add(s);let o=new tn(Ls,ks,e,t);o.layers=this.layers,this.add(o);let a=new tn(Ls,ks,e,t);a.layers=this.layers,this.add(a);let c=new tn(Ls,ks,e,t);c.layers=this.layers,this.add(c);let l=new tn(Ls,ks,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,c]=t;for(let l of t)this.remove(l);if(e===Ci)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===vl)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,o,a,c,l,u]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),h=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,o),e.setRenderTarget(i,2,r),e.render(t,a),e.setRenderTarget(i,3,r),e.render(t,c),e.setRenderTarget(i,4,r),e.render(t,l),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,r),e.render(t,u),e.setRenderTarget(d,f,h),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},Dl=class extends Br{constructor(e,t,i,r,s,o,a,c,l,u){e=e!==void 0?e:[],t=t!==void 0?t:js,super(e,t,i,r,s,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},qh=class extends Ti{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Dl(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Gn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new kr(5,5,5),s=new oi({name:"CubemapFromEquirect",uniforms:Zs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:pn,blending:Yi});s.uniforms.tEquirect.value=t;let o=new En(r,s),a=t.minFilter;return t.minFilter===Nr&&(t.minFilter=Gn),new $h(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,r){let s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}},eh=new R,sD=new R,oD=new ze,wi=class{constructor(e=new R(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let r=eh.subVectors(i,t).cross(sD.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let i=e.delta(eh),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||oD.getNormalMatrix(e),r=this.coplanarPoint(eh).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Cr=new Ys,el=new R,qo=class{constructor(e=new wi,t=new wi,i=new wi,r=new wi,s=new wi,o=new wi){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Ci){let i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],c=r[3],l=r[4],u=r[5],d=r[6],f=r[7],h=r[8],g=r[9],v=r[10],m=r[11],p=r[12],b=r[13],M=r[14],E=r[15];if(i[0].setComponents(c-s,f-l,m-h,E-p).normalize(),i[1].setComponents(c+s,f+l,m+h,E+p).normalize(),i[2].setComponents(c+o,f+u,m+g,E+b).normalize(),i[3].setComponents(c-o,f-u,m-g,E-b).normalize(),i[4].setComponents(c-a,f-d,m-v,E-M).normalize(),t===Ci)i[5].setComponents(c+a,f+d,m+v,E+M).normalize();else if(t===vl)i[5].setComponents(a,d,v,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Cr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Cr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Cr)}intersectsSprite(e){return Cr.center.set(0,0,0),Cr.radius=.7071067811865476,Cr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Cr)}intersectsSphere(e){let t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let r=t[i];if(el.x=r.normal.x>0?e.max.x:e.min.x,el.y=r.normal.y>0?e.max.y:e.min.y,el.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(el)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function T_(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function aD(n){let e=new WeakMap;function t(a,c){let l=a.array,u=a.usage,d=l.byteLength,f=n.createBuffer();n.bindBuffer(c,f),n.bufferData(c,l,u),a.onUploadCallback();let h;if(l instanceof Float32Array)h=n.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?h=n.HALF_FLOAT:h=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)h=n.SHORT;else if(l instanceof Uint32Array)h=n.UNSIGNED_INT;else if(l instanceof Int32Array)h=n.INT;else if(l instanceof Int8Array)h=n.BYTE;else if(l instanceof Uint8Array)h=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)h=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:h,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,c,l){let u=c.array,d=c._updateRange,f=c.updateRanges;if(n.bindBuffer(l,a),d.count===-1&&f.length===0&&n.bufferSubData(l,0,u),f.length!==0){for(let h=0,g=f.length;h<g;h++){let v=f[h];n.bufferSubData(l,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}c.clearUpdateRanges()}d.count!==-1&&(n.bufferSubData(l,d.offset*u.BYTES_PER_ELEMENT,u,d.offset,d.count),d.count=-1),c.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=e.get(a);c&&(n.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,a,c),l.version=a.version}}return{get:r,remove:s,update:o}}var Tl=class n extends Rn{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};let s=e/2,o=t/2,a=Math.floor(i),c=Math.floor(r),l=a+1,u=c+1,d=e/a,f=t/c,h=[],g=[],v=[],m=[];for(let p=0;p<u;p++){let b=p*f-o;for(let M=0;M<l;M++){let E=M*d-s;g.push(E,-b,0),v.push(0,0,1),m.push(M/a),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let b=0;b<a;b++){let M=b+l*p,E=b+l*(p+1),F=b+1+l*(p+1),C=b+1+l*p;h.push(M,E,C),h.push(E,F,C)}this.setIndex(h),this.setAttribute("position",new cn(g,3)),this.setAttribute("normal",new cn(v,3)),this.setAttribute("uv",new cn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}},cD=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,lD=`#ifdef USE_ALPHAHASH
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
#endif`,uD=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,dD=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,fD=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,hD=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,pD=`#ifdef USE_AOMAP
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
#endif`,mD=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,gD=`#ifdef USE_BATCHING
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
#endif`,vD=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,yD=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,_D=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,xD=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,MD=`#ifdef USE_IRIDESCENCE
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
#endif`,bD=`#ifdef USE_BUMPMAP
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
#endif`,wD=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,ED=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,SD=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,CD=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,DD=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,TD=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,AD=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,ID=`#if defined( USE_COLOR_ALPHA )
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
#endif`,PD=`#define PI 3.141592653589793
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
} // validated`,RD=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,ND=`vec3 transformedNormal = objectNormal;
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
#endif`,OD=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,FD=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,LD=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,kD=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,UD="gl_FragColor = linearToOutputTexel( gl_FragColor );",VD=`
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
}`,BD=`#ifdef USE_ENVMAP
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
#endif`,zD=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,HD=`#ifdef USE_ENVMAP
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
#endif`,GD=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,WD=`#ifdef USE_ENVMAP
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
#endif`,jD=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,$D=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,qD=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,XD=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,YD=`#ifdef USE_GRADIENTMAP
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
}`,ZD=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,JD=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,KD=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,QD=`uniform bool receiveShadow;
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
#endif`,eT=`#ifdef USE_ENVMAP
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
#endif`,tT=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,nT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,iT=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,rT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,sT=`PhysicalMaterial material;
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
#endif`,oT=`struct PhysicalMaterial {
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
}`,aT=`
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
#endif`,cT=`#if defined( RE_IndirectDiffuse )
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
#endif`,lT=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,uT=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,dT=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,fT=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,hT=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,pT=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,mT=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,gT=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,vT=`#if defined( USE_POINTS_UV )
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
#endif`,yT=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,_T=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,xT=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,MT=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,bT=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,wT=`#ifdef USE_MORPHTARGETS
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
#endif`,ET=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ST=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,CT=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,DT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,TT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,AT=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,IT=`#ifdef USE_NORMALMAP
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
#endif`,PT=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,RT=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,NT=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,OT=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,FT=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,LT=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,kT=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,UT=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,VT=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,BT=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,zT=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,HT=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,GT=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,WT=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,jT=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,$T=`float getShadowMask() {
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
}`,qT=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,XT=`#ifdef USE_SKINNING
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
#endif`,YT=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ZT=`#ifdef USE_SKINNING
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
#endif`,JT=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,KT=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,QT=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,eA=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,tA=`#ifdef USE_TRANSMISSION
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
#endif`,nA=`#ifdef USE_TRANSMISSION
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
#endif`,iA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,rA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,sA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,oA=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,aA=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,cA=`uniform sampler2D t2D;
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
}`,lA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,uA=`#ifdef ENVMAP_TYPE_CUBE
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
}`,dA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,fA=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hA=`#include <common>
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
}`,pA=`#if DEPTH_PACKING == 3200
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
}`,mA=`#define DISTANCE
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
}`,gA=`#define DISTANCE
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
}`,vA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,yA=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_A=`uniform float scale;
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
}`,xA=`uniform vec3 diffuse;
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
}`,MA=`#include <common>
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
}`,bA=`uniform vec3 diffuse;
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
}`,wA=`#define LAMBERT
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
}`,EA=`#define LAMBERT
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
}`,SA=`#define MATCAP
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
}`,CA=`#define MATCAP
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
}`,DA=`#define NORMAL
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
}`,TA=`#define NORMAL
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
}`,AA=`#define PHONG
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
}`,IA=`#define PHONG
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
}`,PA=`#define STANDARD
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
}`,RA=`#define STANDARD
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
}`,NA=`#define TOON
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
}`,OA=`#define TOON
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
}`,FA=`uniform float size;
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
}`,LA=`uniform vec3 diffuse;
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
}`,kA=`#include <common>
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
}`,UA=`uniform vec3 color;
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
}`,VA=`uniform float rotation;
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
}`,BA=`uniform vec3 diffuse;
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
}`,Be={alphahash_fragment:cD,alphahash_pars_fragment:lD,alphamap_fragment:uD,alphamap_pars_fragment:dD,alphatest_fragment:fD,alphatest_pars_fragment:hD,aomap_fragment:pD,aomap_pars_fragment:mD,batching_pars_vertex:gD,batching_vertex:vD,begin_vertex:yD,beginnormal_vertex:_D,bsdfs:xD,iridescence_fragment:MD,bumpmap_pars_fragment:bD,clipping_planes_fragment:wD,clipping_planes_pars_fragment:ED,clipping_planes_pars_vertex:SD,clipping_planes_vertex:CD,color_fragment:DD,color_pars_fragment:TD,color_pars_vertex:AD,color_vertex:ID,common:PD,cube_uv_reflection_fragment:RD,defaultnormal_vertex:ND,displacementmap_pars_vertex:OD,displacementmap_vertex:FD,emissivemap_fragment:LD,emissivemap_pars_fragment:kD,colorspace_fragment:UD,colorspace_pars_fragment:VD,envmap_fragment:BD,envmap_common_pars_fragment:zD,envmap_pars_fragment:HD,envmap_pars_vertex:GD,envmap_physical_pars_fragment:eT,envmap_vertex:WD,fog_vertex:jD,fog_pars_vertex:$D,fog_fragment:qD,fog_pars_fragment:XD,gradientmap_pars_fragment:YD,lightmap_pars_fragment:ZD,lights_lambert_fragment:JD,lights_lambert_pars_fragment:KD,lights_pars_begin:QD,lights_toon_fragment:tT,lights_toon_pars_fragment:nT,lights_phong_fragment:iT,lights_phong_pars_fragment:rT,lights_physical_fragment:sT,lights_physical_pars_fragment:oT,lights_fragment_begin:aT,lights_fragment_maps:cT,lights_fragment_end:lT,logdepthbuf_fragment:uT,logdepthbuf_pars_fragment:dT,logdepthbuf_pars_vertex:fT,logdepthbuf_vertex:hT,map_fragment:pT,map_pars_fragment:mT,map_particle_fragment:gT,map_particle_pars_fragment:vT,metalnessmap_fragment:yT,metalnessmap_pars_fragment:_T,morphinstance_vertex:xT,morphcolor_vertex:MT,morphnormal_vertex:bT,morphtarget_pars_vertex:wT,morphtarget_vertex:ET,normal_fragment_begin:ST,normal_fragment_maps:CT,normal_pars_fragment:DT,normal_pars_vertex:TT,normal_vertex:AT,normalmap_pars_fragment:IT,clearcoat_normal_fragment_begin:PT,clearcoat_normal_fragment_maps:RT,clearcoat_pars_fragment:NT,iridescence_pars_fragment:OT,opaque_fragment:FT,packing:LT,premultiplied_alpha_fragment:kT,project_vertex:UT,dithering_fragment:VT,dithering_pars_fragment:BT,roughnessmap_fragment:zT,roughnessmap_pars_fragment:HT,shadowmap_pars_fragment:GT,shadowmap_pars_vertex:WT,shadowmap_vertex:jT,shadowmask_pars_fragment:$T,skinbase_vertex:qT,skinning_pars_vertex:XT,skinning_vertex:YT,skinnormal_vertex:ZT,specularmap_fragment:JT,specularmap_pars_fragment:KT,tonemapping_fragment:QT,tonemapping_pars_fragment:eA,transmission_fragment:tA,transmission_pars_fragment:nA,uv_pars_fragment:iA,uv_pars_vertex:rA,uv_vertex:sA,worldpos_vertex:oA,background_vert:aA,background_frag:cA,backgroundCube_vert:lA,backgroundCube_frag:uA,cube_vert:dA,cube_frag:fA,depth_vert:hA,depth_frag:pA,distanceRGBA_vert:mA,distanceRGBA_frag:gA,equirect_vert:vA,equirect_frag:yA,linedashed_vert:_A,linedashed_frag:xA,meshbasic_vert:MA,meshbasic_frag:bA,meshlambert_vert:wA,meshlambert_frag:EA,meshmatcap_vert:SA,meshmatcap_frag:CA,meshnormal_vert:DA,meshnormal_frag:TA,meshphong_vert:AA,meshphong_frag:IA,meshphysical_vert:PA,meshphysical_frag:RA,meshtoon_vert:NA,meshtoon_frag:OA,points_vert:FA,points_frag:LA,shadow_vert:kA,shadow_frag:UA,sprite_vert:VA,sprite_frag:BA},oe={common:{diffuse:{value:new Xe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ze},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ze}},envmap:{envMap:{value:null},envMapRotation:{value:new ze},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ze}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ze}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ze},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ze},normalScale:{value:new We(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ze},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ze}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ze}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ze}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Xe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Xe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0},uvTransform:{value:new ze}},sprite:{diffuse:{value:new Xe(16777215)},opacity:{value:1},center:{value:new We(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ze},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0}}},ri={basic:{uniforms:an([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.fog]),vertexShader:Be.meshbasic_vert,fragmentShader:Be.meshbasic_frag},lambert:{uniforms:an([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,oe.lights,{emissive:{value:new Xe(0)}}]),vertexShader:Be.meshlambert_vert,fragmentShader:Be.meshlambert_frag},phong:{uniforms:an([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,oe.lights,{emissive:{value:new Xe(0)},specular:{value:new Xe(1118481)},shininess:{value:30}}]),vertexShader:Be.meshphong_vert,fragmentShader:Be.meshphong_frag},standard:{uniforms:an([oe.common,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.roughnessmap,oe.metalnessmap,oe.fog,oe.lights,{emissive:{value:new Xe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Be.meshphysical_vert,fragmentShader:Be.meshphysical_frag},toon:{uniforms:an([oe.common,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.gradientmap,oe.fog,oe.lights,{emissive:{value:new Xe(0)}}]),vertexShader:Be.meshtoon_vert,fragmentShader:Be.meshtoon_frag},matcap:{uniforms:an([oe.common,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,{matcap:{value:null}}]),vertexShader:Be.meshmatcap_vert,fragmentShader:Be.meshmatcap_frag},points:{uniforms:an([oe.points,oe.fog]),vertexShader:Be.points_vert,fragmentShader:Be.points_frag},dashed:{uniforms:an([oe.common,oe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Be.linedashed_vert,fragmentShader:Be.linedashed_frag},depth:{uniforms:an([oe.common,oe.displacementmap]),vertexShader:Be.depth_vert,fragmentShader:Be.depth_frag},normal:{uniforms:an([oe.common,oe.bumpmap,oe.normalmap,oe.displacementmap,{opacity:{value:1}}]),vertexShader:Be.meshnormal_vert,fragmentShader:Be.meshnormal_frag},sprite:{uniforms:an([oe.sprite,oe.fog]),vertexShader:Be.sprite_vert,fragmentShader:Be.sprite_frag},background:{uniforms:{uvTransform:{value:new ze},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Be.background_vert,fragmentShader:Be.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ze}},vertexShader:Be.backgroundCube_vert,fragmentShader:Be.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Be.cube_vert,fragmentShader:Be.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Be.equirect_vert,fragmentShader:Be.equirect_frag},distanceRGBA:{uniforms:an([oe.common,oe.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Be.distanceRGBA_vert,fragmentShader:Be.distanceRGBA_frag},shadow:{uniforms:an([oe.lights,oe.fog,{color:{value:new Xe(0)},opacity:{value:1}}]),vertexShader:Be.shadow_vert,fragmentShader:Be.shadow_frag}};ri.physical={uniforms:an([ri.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ze},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ze},clearcoatNormalScale:{value:new We(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ze},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ze},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ze},sheen:{value:0},sheenColor:{value:new Xe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ze},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ze},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ze},transmissionSamplerSize:{value:new We},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ze},attenuationDistance:{value:0},attenuationColor:{value:new Xe(0)},specularColor:{value:new Xe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ze},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ze},anisotropyVector:{value:new We},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ze}}]),vertexShader:Be.meshphysical_vert,fragmentShader:Be.meshphysical_frag};var tl={r:0,b:0,g:0},Dr=new Lr,zA=new Et;function HA(n,e,t,i,r,s,o){let a=new Xe(0),c=s===!0?0:1,l,u,d=null,f=0,h=null;function g(b){let M=b.isScene===!0?b.background:null;return M&&M.isTexture&&(M=(b.backgroundBlurriness>0?t:e).get(M)),M}function v(b){let M=!1,E=g(b);E===null?p(a,c):E&&E.isColor&&(p(E,1),M=!0);let F=n.xr.getEnvironmentBlendMode();F==="additive"?i.buffers.color.setClear(0,0,0,1,o):F==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||M)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(b,M){let E=g(M);E&&(E.isCubeTexture||E.mapping===$l)?(u===void 0&&(u=new En(new kr(1,1,1),new oi({name:"BackgroundCubeMaterial",uniforms:Zs(ri.backgroundCube.uniforms),vertexShader:ri.backgroundCube.vertexShader,fragmentShader:ri.backgroundCube.fragmentShader,side:pn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(F,C,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),Dr.copy(M.backgroundRotation),Dr.x*=-1,Dr.y*=-1,Dr.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(Dr.y*=-1,Dr.z*=-1),u.material.uniforms.envMap.value=E,u.material.uniforms.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(zA.makeRotationFromEuler(Dr)),u.material.toneMapped=st.getTransfer(E.colorSpace)!==mt,(d!==E||f!==E.version||h!==n.toneMapping)&&(u.material.needsUpdate=!0,d=E,f=E.version,h=n.toneMapping),u.layers.enableAll(),b.unshift(u,u.geometry,u.material,0,0,null)):E&&E.isTexture&&(l===void 0&&(l=new En(new Tl(2,2),new oi({name:"BackgroundMaterial",uniforms:Zs(ri.background.uniforms),vertexShader:ri.background.vertexShader,fragmentShader:ri.background.fragmentShader,side:Ji,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=E,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.toneMapped=st.getTransfer(E.colorSpace)!==mt,E.matrixAutoUpdate===!0&&E.updateMatrix(),l.material.uniforms.uvTransform.value.copy(E.matrix),(d!==E||f!==E.version||h!==n.toneMapping)&&(l.material.needsUpdate=!0,d=E,f=E.version,h=n.toneMapping),l.layers.enableAll(),b.unshift(l,l.geometry,l.material,0,0,null))}function p(b,M){b.getRGB(tl,D_(n)),i.buffers.color.setClear(tl.r,tl.g,tl.b,M,o)}return{getClearColor:function(){return a},setClearColor:function(b,M=1){a.set(b),c=M,p(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(b){c=b,p(a,c)},render:v,addToRenderList:m}}function GA(n,e){let t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=f(null),s=r,o=!1;function a(_,A,G,z,J){let Z=!1,$=d(z,G,A);s!==$&&(s=$,l(s.object)),Z=h(_,z,G,J),Z&&g(_,z,G,J),J!==null&&e.update(J,n.ELEMENT_ARRAY_BUFFER),(Z||o)&&(o=!1,E(_,A,G,z),J!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(J).buffer))}function c(){return n.createVertexArray()}function l(_){return n.bindVertexArray(_)}function u(_){return n.deleteVertexArray(_)}function d(_,A,G){let z=G.wireframe===!0,J=i[_.id];J===void 0&&(J={},i[_.id]=J);let Z=J[A.id];Z===void 0&&(Z={},J[A.id]=Z);let $=Z[z];return $===void 0&&($=f(c()),Z[z]=$),$}function f(_){let A=[],G=[],z=[];for(let J=0;J<t;J++)A[J]=0,G[J]=0,z[J]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:A,enabledAttributes:G,attributeDivisors:z,object:_,attributes:{},index:null}}function h(_,A,G,z){let J=s.attributes,Z=A.attributes,$=0,Q=G.getAttributes();for(let H in Q)if(Q[H].location>=0){let pe=J[H],_e=Z[H];if(_e===void 0&&(H==="instanceMatrix"&&_.instanceMatrix&&(_e=_.instanceMatrix),H==="instanceColor"&&_.instanceColor&&(_e=_.instanceColor)),pe===void 0||pe.attribute!==_e||_e&&pe.data!==_e.data)return!0;$++}return s.attributesNum!==$||s.index!==z}function g(_,A,G,z){let J={},Z=A.attributes,$=0,Q=G.getAttributes();for(let H in Q)if(Q[H].location>=0){let pe=Z[H];pe===void 0&&(H==="instanceMatrix"&&_.instanceMatrix&&(pe=_.instanceMatrix),H==="instanceColor"&&_.instanceColor&&(pe=_.instanceColor));let _e={};_e.attribute=pe,pe&&pe.data&&(_e.data=pe.data),J[H]=_e,$++}s.attributes=J,s.attributesNum=$,s.index=z}function v(){let _=s.newAttributes;for(let A=0,G=_.length;A<G;A++)_[A]=0}function m(_){p(_,0)}function p(_,A){let G=s.newAttributes,z=s.enabledAttributes,J=s.attributeDivisors;G[_]=1,z[_]===0&&(n.enableVertexAttribArray(_),z[_]=1),J[_]!==A&&(n.vertexAttribDivisor(_,A),J[_]=A)}function b(){let _=s.newAttributes,A=s.enabledAttributes;for(let G=0,z=A.length;G<z;G++)A[G]!==_[G]&&(n.disableVertexAttribArray(G),A[G]=0)}function M(_,A,G,z,J,Z,$){$===!0?n.vertexAttribIPointer(_,A,G,J,Z):n.vertexAttribPointer(_,A,G,z,J,Z)}function E(_,A,G,z){v();let J=z.attributes,Z=G.getAttributes(),$=A.defaultAttributeValues;for(let Q in Z){let H=Z[Q];if(H.location>=0){let le=J[Q];if(le===void 0&&(Q==="instanceMatrix"&&_.instanceMatrix&&(le=_.instanceMatrix),Q==="instanceColor"&&_.instanceColor&&(le=_.instanceColor)),le!==void 0){let pe=le.normalized,_e=le.itemSize,Ye=e.get(le);if(Ye===void 0)continue;let ct=Ye.buffer,j=Ye.type,te=Ye.bytesPerElement,ye=j===n.INT||j===n.UNSIGNED_INT||le.gpuType===vp;if(le.isInterleavedBufferAttribute){let de=le.data,De=de.stride,Oe=le.offset;if(de.isInstancedInterleavedBuffer){for(let je=0;je<H.locationSize;je++)p(H.location+je,de.meshPerAttribute);_.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let je=0;je<H.locationSize;je++)m(H.location+je);n.bindBuffer(n.ARRAY_BUFFER,ct);for(let je=0;je<H.locationSize;je++)M(H.location+je,_e/H.locationSize,j,pe,De*te,(Oe+_e/H.locationSize*je)*te,ye)}else{if(le.isInstancedBufferAttribute){for(let de=0;de<H.locationSize;de++)p(H.location+de,le.meshPerAttribute);_.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let de=0;de<H.locationSize;de++)m(H.location+de);n.bindBuffer(n.ARRAY_BUFFER,ct);for(let de=0;de<H.locationSize;de++)M(H.location+de,_e/H.locationSize,j,pe,_e*te,_e/H.locationSize*de*te,ye)}}else if($!==void 0){let pe=$[Q];if(pe!==void 0)switch(pe.length){case 2:n.vertexAttrib2fv(H.location,pe);break;case 3:n.vertexAttrib3fv(H.location,pe);break;case 4:n.vertexAttrib4fv(H.location,pe);break;default:n.vertexAttrib1fv(H.location,pe)}}}}b()}function F(){O();for(let _ in i){let A=i[_];for(let G in A){let z=A[G];for(let J in z)u(z[J].object),delete z[J];delete A[G]}delete i[_]}}function C(_){if(i[_.id]===void 0)return;let A=i[_.id];for(let G in A){let z=A[G];for(let J in z)u(z[J].object),delete z[J];delete A[G]}delete i[_.id]}function D(_){for(let A in i){let G=i[A];if(G[_.id]===void 0)continue;let z=G[_.id];for(let J in z)u(z[J].object),delete z[J];delete G[_.id]}}function O(){w(),o=!0,s!==r&&(s=r,l(s.object))}function w(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:O,resetDefaultState:w,dispose:F,releaseStatesOfGeometry:C,releaseStatesOfProgram:D,initAttributes:v,enableAttribute:m,disableUnusedAttributes:b}}function WA(n,e,t){let i;function r(l){i=l}function s(l,u){n.drawArrays(i,l,u),t.update(u,i,1)}function o(l,u,d){d!==0&&(n.drawArraysInstanced(i,l,u,d),t.update(u,i,d))}function a(l,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,u,0,d);let h=0;for(let g=0;g<d;g++)h+=u[g];t.update(h,i,1)}function c(l,u,d,f){if(d===0)return;let h=e.get("WEBGL_multi_draw");if(h===null)for(let g=0;g<l.length;g++)o(l[g],u[g],f[g]);else{h.multiDrawArraysInstancedWEBGL(i,l,0,u,0,f,0,d);let g=0;for(let v=0;v<d;v++)g+=u[v];for(let v=0;v<f.length;v++)t.update(g,i,f[v])}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function jA(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){let C=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(C){return!(C!==Wn&&i.convert(C)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(C){let D=C===Jo&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==Di&&i.convert(C)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==Si&&!D)}function c(C){if(C==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp",u=c(l);u!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);let d=t.logarithmicDepthBuffer===!0,f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),h=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_TEXTURE_SIZE),v=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),m=n.getParameter(n.MAX_VERTEX_ATTRIBS),p=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),b=n.getParameter(n.MAX_VARYING_VECTORS),M=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),E=h>0,F=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:d,maxTextures:f,maxVertexTextures:h,maxTextureSize:g,maxCubemapSize:v,maxAttributes:m,maxVertexUniforms:p,maxVaryings:b,maxFragmentUniforms:M,vertexTextures:E,maxSamples:F}}function $A(n){let e=this,t=null,i=0,r=!1,s=!1,o=new wi,a=new ze,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){let h=d.length!==0||f||i!==0||r;return r=f,i=d.length,h},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,f){t=u(d,f,0)},this.setState=function(d,f,h){let g=d.clippingPlanes,v=d.clipIntersection,m=d.clipShadows,p=n.get(d);if(!r||g===null||g.length===0||s&&!m)s?u(null):l();else{let b=s?0:i,M=b*4,E=p.clippingState||null;c.value=E,E=u(g,f,M,h);for(let F=0;F!==M;++F)E[F]=t[F];p.clippingState=E,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=b}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(d,f,h,g){let v=d!==null?d.length:0,m=null;if(v!==0){if(m=c.value,g!==!0||m===null){let p=h+v*4,b=f.matrixWorldInverse;a.getNormalMatrix(b),(m===null||m.length<p)&&(m=new Float32Array(p));for(let M=0,E=h;M!==v;++M,E+=4)o.copy(d[M]).applyMatrix4(b,a),o.normal.toArray(m,E),m[E+3]=o.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}function qA(n){let e=new WeakMap;function t(o,a){return a===dh?o.mapping=js:a===fh&&(o.mapping=$s),o}function i(o){if(o&&o.isTexture){let a=o.mapping;if(a===dh||a===fh)if(e.has(o)){let c=e.get(o).texture;return t(c,o.mapping)}else{let c=o.image;if(c&&c.height>0){let l=new qh(c.height);return l.fromEquirectangularTexture(n,o),e.set(o,l),o.addEventListener("dispose",r),t(l.texture,o.mapping)}else return null}}return o}function r(o){let a=o.target;a.removeEventListener("dispose",r);let c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}var Al=class extends Cl{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2,s=i-e,o=i+e,a=r+t,c=r-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,o=s+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Bs=4,ky=[.125,.215,.35,.446,.526,.582],Pr=20,th=new Al,Uy=new Xe,nh=null,ih=0,rh=0,sh=!1,Ar=(1+Math.sqrt(5))/2,Us=1/Ar,Vy=[new R(-Ar,Us,0),new R(Ar,Us,0),new R(-Us,0,Ar),new R(Us,0,Ar),new R(0,Ar,-Us),new R(0,Ar,Us),new R(-1,1,-1),new R(1,1,-1),new R(-1,1,1),new R(1,1,1)],Il=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){nh=this._renderer.getRenderTarget(),ih=this._renderer.getActiveCubeFace(),rh=this._renderer.getActiveMipmapLevel(),sh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Hy(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=zy(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(nh,ih,rh),this._renderer.xr.enabled=sh,e.scissorTest=!1,nl(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===js||e.mapping===$s?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),nh=this._renderer.getRenderTarget(),ih=this._renderer.getActiveCubeFace(),rh=this._renderer.getActiveMipmapLevel(),sh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Gn,minFilter:Gn,generateMipmaps:!1,type:Jo,format:Wn,colorSpace:tr,depthBuffer:!1},r=By(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=By(e,t,i);let{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=XA(s)),this._blurMaterial=YA(s,e,t)}return r}_compileMaterial(e){let t=new En(this._lodPlanes[0],e);this._renderer.compile(t,th)}_sceneToCubeUV(e,t,i,r){let a=new tn(90,1,t,i),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(Uy),u.toneMapping=Zi,u.autoClear=!1;let h=new wl({name:"PMREM.Background",side:pn,depthWrite:!1,depthTest:!1}),g=new En(new kr,h),v=!1,m=e.background;m?m.isColor&&(h.color.copy(m),e.background=null,v=!0):(h.color.copy(Uy),v=!0);for(let p=0;p<6;p++){let b=p%3;b===0?(a.up.set(0,c[p],0),a.lookAt(l[p],0,0)):b===1?(a.up.set(0,0,c[p]),a.lookAt(0,l[p],0)):(a.up.set(0,c[p],0),a.lookAt(0,0,l[p]));let M=this._cubeSize;nl(r,b*M,p>2?M:0,M,M),u.setRenderTarget(r),v&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=f,u.autoClear=d,e.background=m}_textureToCubeUV(e,t){let i=this._renderer,r=e.mapping===js||e.mapping===$s;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Hy()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=zy());let s=r?this._cubemapMaterial:this._equirectMaterial,o=new En(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;let c=this._cubeSize;nl(t,0,0,3*c,2*c),i.setRenderTarget(t),i.render(o,th)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;let r=this._lodPlanes.length;for(let s=1;s<r;s++){let o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Vy[(r-s-1)%Vy.length];this._blur(e,s-1,s,o,a)}t.autoClear=i}_blur(e,t,i,r,s){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){let c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,d=new En(this._lodPlanes[r],l),f=l.uniforms,h=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*h):2*Math.PI/(2*Pr-1),v=s/g,m=isFinite(s)?1+Math.floor(u*v):Pr;m>Pr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Pr}`);let p=[],b=0;for(let D=0;D<Pr;++D){let O=D/v,w=Math.exp(-O*O/2);p.push(w),D===0?b+=w:D<m&&(b+=2*w)}for(let D=0;D<p.length;D++)p[D]=p[D]/b;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);let{_lodMax:M}=this;f.dTheta.value=g,f.mipInt.value=M-i;let E=this._sizeLods[r],F=3*E*(r>M-Bs?r-M+Bs:0),C=4*(this._cubeSize-E);nl(t,F,C,3*E,2*E),c.setRenderTarget(t),c.render(d,th)}};function XA(n){let e=[],t=[],i=[],r=n,s=n-Bs+1+ky.length;for(let o=0;o<s;o++){let a=Math.pow(2,r);t.push(a);let c=1/a;o>n-Bs?c=ky[o-n+Bs-1]:o===0&&(c=0),i.push(c);let l=1/(a-2),u=-l,d=1+l,f=[u,u,d,u,d,d,u,u,d,d,u,d],h=6,g=6,v=3,m=2,p=1,b=new Float32Array(v*g*h),M=new Float32Array(m*g*h),E=new Float32Array(p*g*h);for(let C=0;C<h;C++){let D=C%3*2/3-1,O=C>2?0:-1,w=[D,O,0,D+2/3,O,0,D+2/3,O+1,0,D,O,0,D+2/3,O+1,0,D,O+1,0];b.set(w,v*g*C),M.set(f,m*g*C);let _=[C,C,C,C,C,C];E.set(_,p*g*C)}let F=new Rn;F.setAttribute("position",new mn(b,v)),F.setAttribute("uv",new mn(M,m)),F.setAttribute("faceIndex",new mn(E,p)),e.push(F),r>Bs&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function By(n,e,t){let i=new Ti(n,e,t);return i.texture.mapping=$l,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function nl(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function YA(n,e,t){let i=new Float32Array(Pr),r=new R(0,1,0);return new oi({name:"SphericalGaussianBlur",defines:{n:Pr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Ep(),fragmentShader:`

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
		`,blending:Yi,depthTest:!1,depthWrite:!1})}function zy(){return new oi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ep(),fragmentShader:`

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
		`,blending:Yi,depthTest:!1,depthWrite:!1})}function Hy(){return new oi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ep(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Yi,depthTest:!1,depthWrite:!1})}function Ep(){return`

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
	`}function ZA(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){let c=a.mapping,l=c===dh||c===fh,u=c===js||c===$s;if(l||u){let d=e.get(a),f=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new Il(n)),d=l?t.fromEquirectangular(a,d):t.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),d.texture;if(d!==void 0)return d.texture;{let h=a.image;return l&&h&&h.height>0||u&&h&&r(h)?(t===null&&(t=new Il(n)),d=l?t.fromEquirectangular(a):t.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),a.addEventListener("dispose",s),d.texture):null}}}return a}function r(a){let c=0,l=6;for(let u=0;u<l;u++)a[u]!==void 0&&c++;return c===l}function s(a){let c=a.target;c.removeEventListener("dispose",s);let l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function JA(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let r=t(i);return r===null&&Wo("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function KA(n,e,t,i){let r={},s=new WeakMap;function o(d){let f=d.target;f.index!==null&&e.remove(f.index);for(let g in f.attributes)e.remove(f.attributes[g]);for(let g in f.morphAttributes){let v=f.morphAttributes[g];for(let m=0,p=v.length;m<p;m++)e.remove(v[m])}f.removeEventListener("dispose",o),delete r[f.id];let h=s.get(f);h&&(e.remove(h),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(d,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,t.memory.geometries++),f}function c(d){let f=d.attributes;for(let g in f)e.update(f[g],n.ARRAY_BUFFER);let h=d.morphAttributes;for(let g in h){let v=h[g];for(let m=0,p=v.length;m<p;m++)e.update(v[m],n.ARRAY_BUFFER)}}function l(d){let f=[],h=d.index,g=d.attributes.position,v=0;if(h!==null){let b=h.array;v=h.version;for(let M=0,E=b.length;M<E;M+=3){let F=b[M+0],C=b[M+1],D=b[M+2];f.push(F,C,C,D,D,F)}}else if(g!==void 0){let b=g.array;v=g.version;for(let M=0,E=b.length/3-1;M<E;M+=3){let F=M+0,C=M+1,D=M+2;f.push(F,C,C,D,D,F)}}else return;let m=new(S_(f)?Sl:El)(f,1);m.version=v;let p=s.get(d);p&&e.remove(p),s.set(d,m)}function u(d){let f=s.get(d);if(f){let h=d.index;h!==null&&f.version<h.version&&l(d)}else l(d);return s.get(d)}return{get:a,update:c,getWireframeAttribute:u}}function QA(n,e,t){let i;function r(f){i=f}let s,o;function a(f){s=f.type,o=f.bytesPerElement}function c(f,h){n.drawElements(i,h,s,f*o),t.update(h,i,1)}function l(f,h,g){g!==0&&(n.drawElementsInstanced(i,h,s,f*o,g),t.update(h,i,g))}function u(f,h,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,h,0,s,f,0,g);let m=0;for(let p=0;p<g;p++)m+=h[p];t.update(m,i,1)}function d(f,h,g,v){if(g===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<f.length;p++)l(f[p]/o,h[p],v[p]);else{m.multiDrawElementsInstancedWEBGL(i,h,0,s,f,0,v,0,g);let p=0;for(let b=0;b<g;b++)p+=h[b];for(let b=0;b<v.length;b++)t.update(p,i,v[b])}}this.setMode=r,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function eI(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function tI(n,e,t){let i=new WeakMap,r=new gt;function s(o,a,c){let l=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=u!==void 0?u.length:0,f=i.get(a);if(f===void 0||f.count!==d){let _=function(){O.dispose(),i.delete(a),a.removeEventListener("dispose",_)};var h=_;f!==void 0&&f.texture.dispose();let g=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],b=a.morphAttributes.normal||[],M=a.morphAttributes.color||[],E=0;g===!0&&(E=1),v===!0&&(E=2),m===!0&&(E=3);let F=a.attributes.position.count*E,C=1;F>e.maxTextureSize&&(C=Math.ceil(F/e.maxTextureSize),F=e.maxTextureSize);let D=new Float32Array(F*C*4*d),O=new xl(D,F,C,d);O.type=Si,O.needsUpdate=!0;let w=E*4;for(let A=0;A<d;A++){let G=p[A],z=b[A],J=M[A],Z=F*C*4*A;for(let $=0;$<G.count;$++){let Q=$*w;g===!0&&(r.fromBufferAttribute(G,$),D[Z+Q+0]=r.x,D[Z+Q+1]=r.y,D[Z+Q+2]=r.z,D[Z+Q+3]=0),v===!0&&(r.fromBufferAttribute(z,$),D[Z+Q+4]=r.x,D[Z+Q+5]=r.y,D[Z+Q+6]=r.z,D[Z+Q+7]=0),m===!0&&(r.fromBufferAttribute(J,$),D[Z+Q+8]=r.x,D[Z+Q+9]=r.y,D[Z+Q+10]=r.z,D[Z+Q+11]=J.itemSize===4?r.w:1)}}f={count:d,texture:O,size:new We(F,C)},i.set(a,f),a.addEventListener("dispose",_)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let g=0;for(let m=0;m<l.length;m++)g+=l[m];let v=a.morphTargetsRelative?1:1-g;c.getUniforms().setValue(n,"morphTargetBaseInfluence",v),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",f.texture,t),c.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:s}}function nI(n,e,t,i){let r=new WeakMap;function s(c){let l=i.render.frame,u=c.geometry,d=e.get(c,u);if(r.get(d)!==l&&(e.update(d),r.set(d,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),r.get(c)!==l&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,l))),c.isSkinnedMesh){let f=c.skeleton;r.get(f)!==l&&(f.update(),r.set(f,l))}return d}function o(){r=new WeakMap}function a(c){let l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:s,dispose:o}}var Pl=class extends Br{constructor(e,t,i,r,s,o,a,c,l,u=Hs){if(u!==Hs&&u!==Xs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===Hs&&(i=Or),i===void 0&&u===Xs&&(i=qs),super(null,r,s,o,a,c,u,i,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Pn,this.minFilter=c!==void 0?c:Pn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},A_=new Br,Gy=new Pl(1,1),I_=new xl,P_=new jh,R_=new Dl,Wy=[],jy=[],$y=new Float32Array(16),qy=new Float32Array(9),Xy=new Float32Array(4);function Ks(n,e,t){let i=n[0];if(i<=0||i>0)return n;let r=e*t,s=Wy[r];if(s===void 0&&(s=new Float32Array(r),Wy[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function kt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Ut(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Xl(n,e){let t=jy[e];t===void 0&&(t=new Int32Array(e),jy[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function iI(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function rI(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(kt(t,e))return;n.uniform2fv(this.addr,e),Ut(t,e)}}function sI(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(kt(t,e))return;n.uniform3fv(this.addr,e),Ut(t,e)}}function oI(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(kt(t,e))return;n.uniform4fv(this.addr,e),Ut(t,e)}}function aI(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(kt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Ut(t,e)}else{if(kt(t,i))return;Xy.set(i),n.uniformMatrix2fv(this.addr,!1,Xy),Ut(t,i)}}function cI(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(kt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Ut(t,e)}else{if(kt(t,i))return;qy.set(i),n.uniformMatrix3fv(this.addr,!1,qy),Ut(t,i)}}function lI(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(kt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Ut(t,e)}else{if(kt(t,i))return;$y.set(i),n.uniformMatrix4fv(this.addr,!1,$y),Ut(t,i)}}function uI(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function dI(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(kt(t,e))return;n.uniform2iv(this.addr,e),Ut(t,e)}}function fI(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(kt(t,e))return;n.uniform3iv(this.addr,e),Ut(t,e)}}function hI(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(kt(t,e))return;n.uniform4iv(this.addr,e),Ut(t,e)}}function pI(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function mI(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(kt(t,e))return;n.uniform2uiv(this.addr,e),Ut(t,e)}}function gI(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(kt(t,e))return;n.uniform3uiv(this.addr,e),Ut(t,e)}}function vI(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(kt(t,e))return;n.uniform4uiv(this.addr,e),Ut(t,e)}}function yI(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(Gy.compareFunction=E_,s=Gy):s=A_,t.setTexture2D(e||s,r)}function _I(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||P_,r)}function xI(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||R_,r)}function MI(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||I_,r)}function bI(n){switch(n){case 5126:return iI;case 35664:return rI;case 35665:return sI;case 35666:return oI;case 35674:return aI;case 35675:return cI;case 35676:return lI;case 5124:case 35670:return uI;case 35667:case 35671:return dI;case 35668:case 35672:return fI;case 35669:case 35673:return hI;case 5125:return pI;case 36294:return mI;case 36295:return gI;case 36296:return vI;case 35678:case 36198:case 36298:case 36306:case 35682:return yI;case 35679:case 36299:case 36307:return _I;case 35680:case 36300:case 36308:case 36293:return xI;case 36289:case 36303:case 36311:case 36292:return MI}}function wI(n,e){n.uniform1fv(this.addr,e)}function EI(n,e){let t=Ks(e,this.size,2);n.uniform2fv(this.addr,t)}function SI(n,e){let t=Ks(e,this.size,3);n.uniform3fv(this.addr,t)}function CI(n,e){let t=Ks(e,this.size,4);n.uniform4fv(this.addr,t)}function DI(n,e){let t=Ks(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function TI(n,e){let t=Ks(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function AI(n,e){let t=Ks(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function II(n,e){n.uniform1iv(this.addr,e)}function PI(n,e){n.uniform2iv(this.addr,e)}function RI(n,e){n.uniform3iv(this.addr,e)}function NI(n,e){n.uniform4iv(this.addr,e)}function OI(n,e){n.uniform1uiv(this.addr,e)}function FI(n,e){n.uniform2uiv(this.addr,e)}function LI(n,e){n.uniform3uiv(this.addr,e)}function kI(n,e){n.uniform4uiv(this.addr,e)}function UI(n,e,t){let i=this.cache,r=e.length,s=Xl(t,r);kt(i,s)||(n.uniform1iv(this.addr,s),Ut(i,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||A_,s[o])}function VI(n,e,t){let i=this.cache,r=e.length,s=Xl(t,r);kt(i,s)||(n.uniform1iv(this.addr,s),Ut(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||P_,s[o])}function BI(n,e,t){let i=this.cache,r=e.length,s=Xl(t,r);kt(i,s)||(n.uniform1iv(this.addr,s),Ut(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||R_,s[o])}function zI(n,e,t){let i=this.cache,r=e.length,s=Xl(t,r);kt(i,s)||(n.uniform1iv(this.addr,s),Ut(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||I_,s[o])}function HI(n){switch(n){case 5126:return wI;case 35664:return EI;case 35665:return SI;case 35666:return CI;case 35674:return DI;case 35675:return TI;case 35676:return AI;case 5124:case 35670:return II;case 35667:case 35671:return PI;case 35668:case 35672:return RI;case 35669:case 35673:return NI;case 5125:return OI;case 36294:return FI;case 36295:return LI;case 36296:return kI;case 35678:case 36198:case 36298:case 36306:case 35682:return UI;case 35679:case 36299:case 36307:return VI;case 35680:case 36300:case 36308:case 36293:return BI;case 36289:case 36303:case 36311:case 36292:return zI}}var Xh=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=bI(t.type)}},Yh=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=HI(t.type)}},Zh=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let r=this.seq;for(let s=0,o=r.length;s!==o;++s){let a=r[s];a.setValue(e,t[a.id],i)}}},oh=/(\w+)(\])?(\[|\.)?/g;function Yy(n,e){n.seq.push(e),n.map[e.id]=e}function GI(n,e,t){let i=n.name,r=i.length;for(oh.lastIndex=0;;){let s=oh.exec(i),o=oh.lastIndex,a=s[1],c=s[2]==="]",l=s[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===r){Yy(t,l===void 0?new Xh(a,n,e):new Yh(a,n,e));break}else{let d=t.map[a];d===void 0&&(d=new Zh(a),Yy(t,d)),t=d}}}var Ws=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){let s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);GI(s,o,this)}}setValue(e,t,i,r){let s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){let r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){let a=t[s],c=i[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,r)}}static seqWithValue(e,t){let i=[];for(let r=0,s=e.length;r!==s;++r){let o=e[r];o.id in t&&i.push(o)}return i}};function Zy(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var WI=37297,jI=0;function $I(n,e){let t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){let a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}function qI(n){let e=st.getPrimaries(st.workingColorSpace),t=st.getPrimaries(n),i;switch(e===t?i="":e===gl&&t===ml?i="LinearDisplayP3ToLinearSRGB":e===ml&&t===gl&&(i="LinearSRGBToLinearDisplayP3"),n){case tr:case ql:return[i,"LinearTransferOETF"];case ii:case wp:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function Jy(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";let s=/ERROR: 0:(\d+)/.exec(r);if(s){let o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+$I(n.getShaderSource(e),o)}else return r}function XI(n,e){let t=qI(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function YI(n,e){let t;switch(e){case M1:t="Linear";break;case b1:t="Reinhard";break;case w1:t="Cineon";break;case E1:t="ACESFilmic";break;case C1:t="AgX";break;case D1:t="Neutral";break;case S1:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var il=new R;function ZI(){st.getLuminanceCoefficients(il);let n=il.x.toFixed(4),e=il.y.toFixed(4),t=il.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function JI(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Go).join(`
`)}function KI(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function QI(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){let s=n.getActiveAttrib(e,r),o=s.name,a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Go(n){return n!==""}function Ky(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Qy(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var eP=/^[ \t]*#include +<([\w\d./]+)>/gm;function Jh(n){return n.replace(eP,nP)}var tP=new Map;function nP(n,e){let t=Be[e];if(t===void 0){let i=tP.get(e);if(i!==void 0)t=Be[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Jh(t)}var iP=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function e_(n){return n.replace(iP,rP)}function rP(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function t_(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}function sP(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===d_?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===qC?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===bi&&(e="SHADOWMAP_TYPE_VSM"),e}function oP(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case js:case $s:e="ENVMAP_TYPE_CUBE";break;case $l:e="ENVMAP_TYPE_CUBE_UV";break}return e}function aP(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case $s:e="ENVMAP_MODE_REFRACTION";break}return e}function cP(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case f_:e="ENVMAP_BLENDING_MULTIPLY";break;case _1:e="ENVMAP_BLENDING_MIX";break;case x1:e="ENVMAP_BLENDING_ADD";break}return e}function lP(n){let e=n.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function uP(n,e,t,i){let r=n.getContext(),s=t.defines,o=t.vertexShader,a=t.fragmentShader,c=sP(t),l=oP(t),u=aP(t),d=cP(t),f=lP(t),h=JI(t),g=KI(s),v=r.createProgram(),m,p,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Go).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Go).join(`
`),p.length>0&&(p+=`
`)):(m=[t_(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Go).join(`
`),p=[t_(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Zi?"#define TONE_MAPPING":"",t.toneMapping!==Zi?Be.tonemapping_pars_fragment:"",t.toneMapping!==Zi?YI("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Be.colorspace_pars_fragment,XI("linearToOutputTexel",t.outputColorSpace),ZI(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Go).join(`
`)),o=Jh(o),o=Ky(o,t),o=Qy(o,t),a=Jh(a),a=Ky(a,t),a=Qy(a,t),o=e_(o),a=e_(a),t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,m=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===vy?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===vy?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let M=b+m+o,E=b+p+a,F=Zy(r,r.VERTEX_SHADER,M),C=Zy(r,r.FRAGMENT_SHADER,E);r.attachShader(v,F),r.attachShader(v,C),t.index0AttributeName!==void 0?r.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(v,0,"position"),r.linkProgram(v);function D(A){if(n.debug.checkShaderErrors){let G=r.getProgramInfoLog(v).trim(),z=r.getShaderInfoLog(F).trim(),J=r.getShaderInfoLog(C).trim(),Z=!0,$=!0;if(r.getProgramParameter(v,r.LINK_STATUS)===!1)if(Z=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,v,F,C);else{let Q=Jy(r,F,"vertex"),H=Jy(r,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(v,r.VALIDATE_STATUS)+`

Material Name: `+A.name+`
Material Type: `+A.type+`

Program Info Log: `+G+`
`+Q+`
`+H)}else G!==""?console.warn("THREE.WebGLProgram: Program Info Log:",G):(z===""||J==="")&&($=!1);$&&(A.diagnostics={runnable:Z,programLog:G,vertexShader:{log:z,prefix:m},fragmentShader:{log:J,prefix:p}})}r.deleteShader(F),r.deleteShader(C),O=new Ws(r,v),w=QI(r,v)}let O;this.getUniforms=function(){return O===void 0&&D(this),O};let w;this.getAttributes=function(){return w===void 0&&D(this),w};let _=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return _===!1&&(_=r.getProgramParameter(v,WI)),_},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=jI++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=F,this.fragmentShader=C,this}var dP=0,Kh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new Qh(e),t.set(e,i)),i}},Qh=class{constructor(e){this.id=dP++,this.code=e,this.usedTimes=0}};function fP(n,e,t,i,r,s,o){let a=new bl,c=new Kh,l=new Set,u=[],d=r.logarithmicDepthBuffer,f=r.vertexTextures,h=r.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(w){return l.add(w),w===0?"uv":`uv${w}`}function m(w,_,A,G,z){let J=G.fog,Z=z.geometry,$=w.isMeshStandardMaterial?G.environment:null,Q=(w.isMeshStandardMaterial?t:e).get(w.envMap||$),H=Q&&Q.mapping===$l?Q.image.height:null,le=g[w.type];w.precision!==null&&(h=r.getMaxPrecision(w.precision),h!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",h,"instead."));let pe=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,_e=pe!==void 0?pe.length:0,Ye=0;Z.morphAttributes.position!==void 0&&(Ye=1),Z.morphAttributes.normal!==void 0&&(Ye=2),Z.morphAttributes.color!==void 0&&(Ye=3);let ct,j,te,ye;if(le){let Qe=ri[le];ct=Qe.vertexShader,j=Qe.fragmentShader}else ct=w.vertexShader,j=w.fragmentShader,c.update(w),te=c.getVertexShaderID(w),ye=c.getFragmentShaderID(w);let de=n.getRenderTarget(),De=z.isInstancedMesh===!0,Oe=z.isBatchedMesh===!0,je=!!w.map,_t=!!w.matcap,T=!!Q,Dt=!!w.aoMap,ot=!!w.lightMap,lt=!!w.bumpMap,be=!!w.normalMap,Tt=!!w.displacementMap,Pe=!!w.emissiveMap,Fe=!!w.metalnessMap,S=!!w.roughnessMap,y=w.anisotropy>0,B=w.clearcoat>0,Y=w.dispersion>0,ee=w.iridescence>0,K=w.sheen>0,we=w.transmission>0,ae=y&&!!w.anisotropyMap,fe=B&&!!w.clearcoatMap,ke=B&&!!w.clearcoatNormalMap,ne=B&&!!w.clearcoatRoughnessMap,ue=ee&&!!w.iridescenceMap,Ze=ee&&!!w.iridescenceThicknessMap,Ie=K&&!!w.sheenColorMap,me=K&&!!w.sheenRoughnessMap,Ne=!!w.specularMap,He=!!w.specularColorMap,vt=!!w.specularIntensityMap,I=we&&!!w.transmissionMap,ie=we&&!!w.thicknessMap,q=!!w.gradientMap,X=!!w.alphaMap,se=w.alphaTest>0,Se=!!w.alphaHash,Je=!!w.extensions,At=Zi;w.toneMapped&&(de===null||de.isXRRenderTarget===!0)&&(At=n.toneMapping);let jt={shaderID:le,shaderType:w.type,shaderName:w.name,vertexShader:ct,fragmentShader:j,defines:w.defines,customVertexShaderID:te,customFragmentShaderID:ye,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:h,batching:Oe,batchingColor:Oe&&z._colorsTexture!==null,instancing:De,instancingColor:De&&z.instanceColor!==null,instancingMorph:De&&z.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:de===null?n.outputColorSpace:de.isXRRenderTarget===!0?de.texture.colorSpace:tr,alphaToCoverage:!!w.alphaToCoverage,map:je,matcap:_t,envMap:T,envMapMode:T&&Q.mapping,envMapCubeUVHeight:H,aoMap:Dt,lightMap:ot,bumpMap:lt,normalMap:be,displacementMap:f&&Tt,emissiveMap:Pe,normalMapObjectSpace:be&&w.normalMapType===P1,normalMapTangentSpace:be&&w.normalMapType===w_,metalnessMap:Fe,roughnessMap:S,anisotropy:y,anisotropyMap:ae,clearcoat:B,clearcoatMap:fe,clearcoatNormalMap:ke,clearcoatRoughnessMap:ne,dispersion:Y,iridescence:ee,iridescenceMap:ue,iridescenceThicknessMap:Ze,sheen:K,sheenColorMap:Ie,sheenRoughnessMap:me,specularMap:Ne,specularColorMap:He,specularIntensityMap:vt,transmission:we,transmissionMap:I,thicknessMap:ie,gradientMap:q,opaque:w.transparent===!1&&w.blending===zs&&w.alphaToCoverage===!1,alphaMap:X,alphaTest:se,alphaHash:Se,combine:w.combine,mapUv:je&&v(w.map.channel),aoMapUv:Dt&&v(w.aoMap.channel),lightMapUv:ot&&v(w.lightMap.channel),bumpMapUv:lt&&v(w.bumpMap.channel),normalMapUv:be&&v(w.normalMap.channel),displacementMapUv:Tt&&v(w.displacementMap.channel),emissiveMapUv:Pe&&v(w.emissiveMap.channel),metalnessMapUv:Fe&&v(w.metalnessMap.channel),roughnessMapUv:S&&v(w.roughnessMap.channel),anisotropyMapUv:ae&&v(w.anisotropyMap.channel),clearcoatMapUv:fe&&v(w.clearcoatMap.channel),clearcoatNormalMapUv:ke&&v(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ne&&v(w.clearcoatRoughnessMap.channel),iridescenceMapUv:ue&&v(w.iridescenceMap.channel),iridescenceThicknessMapUv:Ze&&v(w.iridescenceThicknessMap.channel),sheenColorMapUv:Ie&&v(w.sheenColorMap.channel),sheenRoughnessMapUv:me&&v(w.sheenRoughnessMap.channel),specularMapUv:Ne&&v(w.specularMap.channel),specularColorMapUv:He&&v(w.specularColorMap.channel),specularIntensityMapUv:vt&&v(w.specularIntensityMap.channel),transmissionMapUv:I&&v(w.transmissionMap.channel),thicknessMapUv:ie&&v(w.thicknessMap.channel),alphaMapUv:X&&v(w.alphaMap.channel),vertexTangents:!!Z.attributes.tangent&&(be||y),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!Z.attributes.uv&&(je||X),fog:!!J,useFog:w.fog===!0,fogExp2:!!J&&J.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:z.isSkinnedMesh===!0,morphTargets:Z.morphAttributes.position!==void 0,morphNormals:Z.morphAttributes.normal!==void 0,morphColors:Z.morphAttributes.color!==void 0,morphTargetsCount:_e,morphTextureStride:Ye,numDirLights:_.directional.length,numPointLights:_.point.length,numSpotLights:_.spot.length,numSpotLightMaps:_.spotLightMap.length,numRectAreaLights:_.rectArea.length,numHemiLights:_.hemi.length,numDirLightShadows:_.directionalShadowMap.length,numPointLightShadows:_.pointShadowMap.length,numSpotLightShadows:_.spotShadowMap.length,numSpotLightShadowsWithMaps:_.numSpotLightShadowsWithMaps,numLightProbes:_.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:w.dithering,shadowMapEnabled:n.shadowMap.enabled&&A.length>0,shadowMapType:n.shadowMap.type,toneMapping:At,decodeVideoTexture:je&&w.map.isVideoTexture===!0&&st.getTransfer(w.map.colorSpace)===mt,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===Ei,flipSided:w.side===pn,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:Je&&w.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Je&&w.extensions.multiDraw===!0||Oe)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return jt.vertexUv1s=l.has(1),jt.vertexUv2s=l.has(2),jt.vertexUv3s=l.has(3),l.clear(),jt}function p(w){let _=[];if(w.shaderID?_.push(w.shaderID):(_.push(w.customVertexShaderID),_.push(w.customFragmentShaderID)),w.defines!==void 0)for(let A in w.defines)_.push(A),_.push(w.defines[A]);return w.isRawShaderMaterial===!1&&(b(_,w),M(_,w),_.push(n.outputColorSpace)),_.push(w.customProgramCacheKey),_.join()}function b(w,_){w.push(_.precision),w.push(_.outputColorSpace),w.push(_.envMapMode),w.push(_.envMapCubeUVHeight),w.push(_.mapUv),w.push(_.alphaMapUv),w.push(_.lightMapUv),w.push(_.aoMapUv),w.push(_.bumpMapUv),w.push(_.normalMapUv),w.push(_.displacementMapUv),w.push(_.emissiveMapUv),w.push(_.metalnessMapUv),w.push(_.roughnessMapUv),w.push(_.anisotropyMapUv),w.push(_.clearcoatMapUv),w.push(_.clearcoatNormalMapUv),w.push(_.clearcoatRoughnessMapUv),w.push(_.iridescenceMapUv),w.push(_.iridescenceThicknessMapUv),w.push(_.sheenColorMapUv),w.push(_.sheenRoughnessMapUv),w.push(_.specularMapUv),w.push(_.specularColorMapUv),w.push(_.specularIntensityMapUv),w.push(_.transmissionMapUv),w.push(_.thicknessMapUv),w.push(_.combine),w.push(_.fogExp2),w.push(_.sizeAttenuation),w.push(_.morphTargetsCount),w.push(_.morphAttributeCount),w.push(_.numDirLights),w.push(_.numPointLights),w.push(_.numSpotLights),w.push(_.numSpotLightMaps),w.push(_.numHemiLights),w.push(_.numRectAreaLights),w.push(_.numDirLightShadows),w.push(_.numPointLightShadows),w.push(_.numSpotLightShadows),w.push(_.numSpotLightShadowsWithMaps),w.push(_.numLightProbes),w.push(_.shadowMapType),w.push(_.toneMapping),w.push(_.numClippingPlanes),w.push(_.numClipIntersection),w.push(_.depthPacking)}function M(w,_){a.disableAll(),_.supportsVertexTextures&&a.enable(0),_.instancing&&a.enable(1),_.instancingColor&&a.enable(2),_.instancingMorph&&a.enable(3),_.matcap&&a.enable(4),_.envMap&&a.enable(5),_.normalMapObjectSpace&&a.enable(6),_.normalMapTangentSpace&&a.enable(7),_.clearcoat&&a.enable(8),_.iridescence&&a.enable(9),_.alphaTest&&a.enable(10),_.vertexColors&&a.enable(11),_.vertexAlphas&&a.enable(12),_.vertexUv1s&&a.enable(13),_.vertexUv2s&&a.enable(14),_.vertexUv3s&&a.enable(15),_.vertexTangents&&a.enable(16),_.anisotropy&&a.enable(17),_.alphaHash&&a.enable(18),_.batching&&a.enable(19),_.dispersion&&a.enable(20),_.batchingColor&&a.enable(21),w.push(a.mask),a.disableAll(),_.fog&&a.enable(0),_.useFog&&a.enable(1),_.flatShading&&a.enable(2),_.logarithmicDepthBuffer&&a.enable(3),_.skinning&&a.enable(4),_.morphTargets&&a.enable(5),_.morphNormals&&a.enable(6),_.morphColors&&a.enable(7),_.premultipliedAlpha&&a.enable(8),_.shadowMapEnabled&&a.enable(9),_.doubleSided&&a.enable(10),_.flipSided&&a.enable(11),_.useDepthPacking&&a.enable(12),_.dithering&&a.enable(13),_.transmission&&a.enable(14),_.sheen&&a.enable(15),_.opaque&&a.enable(16),_.pointsUvs&&a.enable(17),_.decodeVideoTexture&&a.enable(18),_.alphaToCoverage&&a.enable(19),w.push(a.mask)}function E(w){let _=g[w.type],A;if(_){let G=ri[_];A=nD.clone(G.uniforms)}else A=w.uniforms;return A}function F(w,_){let A;for(let G=0,z=u.length;G<z;G++){let J=u[G];if(J.cacheKey===_){A=J,++A.usedTimes;break}}return A===void 0&&(A=new uP(n,_,w,s),u.push(A)),A}function C(w){if(--w.usedTimes===0){let _=u.indexOf(w);u[_]=u[u.length-1],u.pop(),w.destroy()}}function D(w){c.remove(w)}function O(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:E,acquireProgram:F,releaseProgram:C,releaseShaderCache:D,programs:u,dispose:O}}function hP(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function r(o,a,c){n.get(o)[a]=c}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function pP(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function n_(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function i_(){let n=[],e=0,t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(d,f,h,g,v,m){let p=n[e];return p===void 0?(p={id:d.id,object:d,geometry:f,material:h,groupOrder:g,renderOrder:d.renderOrder,z:v,group:m},n[e]=p):(p.id=d.id,p.object=d,p.geometry=f,p.material=h,p.groupOrder=g,p.renderOrder=d.renderOrder,p.z=v,p.group=m),e++,p}function a(d,f,h,g,v,m){let p=o(d,f,h,g,v,m);h.transmission>0?i.push(p):h.transparent===!0?r.push(p):t.push(p)}function c(d,f,h,g,v,m){let p=o(d,f,h,g,v,m);h.transmission>0?i.unshift(p):h.transparent===!0?r.unshift(p):t.unshift(p)}function l(d,f){t.length>1&&t.sort(d||pP),i.length>1&&i.sort(f||n_),r.length>1&&r.sort(f||n_)}function u(){for(let d=e,f=n.length;d<f;d++){let h=n[d];if(h.id===null)break;h.id=null,h.object=null,h.geometry=null,h.material=null,h.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:c,finish:u,sort:l}}function mP(){let n=new WeakMap;function e(i,r){let s=n.get(i),o;return s===void 0?(o=new i_,n.set(i,[o])):r>=s.length?(o=new i_,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function gP(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new R,color:new Xe};break;case"SpotLight":t={position:new R,direction:new R,color:new Xe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new R,color:new Xe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new R,skyColor:new Xe,groundColor:new Xe};break;case"RectAreaLight":t={color:new Xe,position:new R,halfWidth:new R,halfHeight:new R};break}return n[e.id]=t,t}}}function vP(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new We};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new We};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new We,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var yP=0;function _P(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function xP(n){let e=new gP,t=vP(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new R);let r=new R,s=new Et,o=new Et;function a(l){let u=0,d=0,f=0;for(let w=0;w<9;w++)i.probe[w].set(0,0,0);let h=0,g=0,v=0,m=0,p=0,b=0,M=0,E=0,F=0,C=0,D=0;l.sort(_P);for(let w=0,_=l.length;w<_;w++){let A=l[w],G=A.color,z=A.intensity,J=A.distance,Z=A.shadow&&A.shadow.map?A.shadow.map.texture:null;if(A.isAmbientLight)u+=G.r*z,d+=G.g*z,f+=G.b*z;else if(A.isLightProbe){for(let $=0;$<9;$++)i.probe[$].addScaledVector(A.sh.coefficients[$],z);D++}else if(A.isDirectionalLight){let $=e.get(A);if($.color.copy(A.color).multiplyScalar(A.intensity),A.castShadow){let Q=A.shadow,H=t.get(A);H.shadowIntensity=Q.intensity,H.shadowBias=Q.bias,H.shadowNormalBias=Q.normalBias,H.shadowRadius=Q.radius,H.shadowMapSize=Q.mapSize,i.directionalShadow[h]=H,i.directionalShadowMap[h]=Z,i.directionalShadowMatrix[h]=A.shadow.matrix,b++}i.directional[h]=$,h++}else if(A.isSpotLight){let $=e.get(A);$.position.setFromMatrixPosition(A.matrixWorld),$.color.copy(G).multiplyScalar(z),$.distance=J,$.coneCos=Math.cos(A.angle),$.penumbraCos=Math.cos(A.angle*(1-A.penumbra)),$.decay=A.decay,i.spot[v]=$;let Q=A.shadow;if(A.map&&(i.spotLightMap[F]=A.map,F++,Q.updateMatrices(A),A.castShadow&&C++),i.spotLightMatrix[v]=Q.matrix,A.castShadow){let H=t.get(A);H.shadowIntensity=Q.intensity,H.shadowBias=Q.bias,H.shadowNormalBias=Q.normalBias,H.shadowRadius=Q.radius,H.shadowMapSize=Q.mapSize,i.spotShadow[v]=H,i.spotShadowMap[v]=Z,E++}v++}else if(A.isRectAreaLight){let $=e.get(A);$.color.copy(G).multiplyScalar(z),$.halfWidth.set(A.width*.5,0,0),$.halfHeight.set(0,A.height*.5,0),i.rectArea[m]=$,m++}else if(A.isPointLight){let $=e.get(A);if($.color.copy(A.color).multiplyScalar(A.intensity),$.distance=A.distance,$.decay=A.decay,A.castShadow){let Q=A.shadow,H=t.get(A);H.shadowIntensity=Q.intensity,H.shadowBias=Q.bias,H.shadowNormalBias=Q.normalBias,H.shadowRadius=Q.radius,H.shadowMapSize=Q.mapSize,H.shadowCameraNear=Q.camera.near,H.shadowCameraFar=Q.camera.far,i.pointShadow[g]=H,i.pointShadowMap[g]=Z,i.pointShadowMatrix[g]=A.shadow.matrix,M++}i.point[g]=$,g++}else if(A.isHemisphereLight){let $=e.get(A);$.skyColor.copy(A.color).multiplyScalar(z),$.groundColor.copy(A.groundColor).multiplyScalar(z),i.hemi[p]=$,p++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=oe.LTC_FLOAT_1,i.rectAreaLTC2=oe.LTC_FLOAT_2):(i.rectAreaLTC1=oe.LTC_HALF_1,i.rectAreaLTC2=oe.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=d,i.ambient[2]=f;let O=i.hash;(O.directionalLength!==h||O.pointLength!==g||O.spotLength!==v||O.rectAreaLength!==m||O.hemiLength!==p||O.numDirectionalShadows!==b||O.numPointShadows!==M||O.numSpotShadows!==E||O.numSpotMaps!==F||O.numLightProbes!==D)&&(i.directional.length=h,i.spot.length=v,i.rectArea.length=m,i.point.length=g,i.hemi.length=p,i.directionalShadow.length=b,i.directionalShadowMap.length=b,i.pointShadow.length=M,i.pointShadowMap.length=M,i.spotShadow.length=E,i.spotShadowMap.length=E,i.directionalShadowMatrix.length=b,i.pointShadowMatrix.length=M,i.spotLightMatrix.length=E+F-C,i.spotLightMap.length=F,i.numSpotLightShadowsWithMaps=C,i.numLightProbes=D,O.directionalLength=h,O.pointLength=g,O.spotLength=v,O.rectAreaLength=m,O.hemiLength=p,O.numDirectionalShadows=b,O.numPointShadows=M,O.numSpotShadows=E,O.numSpotMaps=F,O.numLightProbes=D,i.version=yP++)}function c(l,u){let d=0,f=0,h=0,g=0,v=0,m=u.matrixWorldInverse;for(let p=0,b=l.length;p<b;p++){let M=l[p];if(M.isDirectionalLight){let E=i.directional[d];E.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(m),d++}else if(M.isSpotLight){let E=i.spot[h];E.position.setFromMatrixPosition(M.matrixWorld),E.position.applyMatrix4(m),E.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(m),h++}else if(M.isRectAreaLight){let E=i.rectArea[g];E.position.setFromMatrixPosition(M.matrixWorld),E.position.applyMatrix4(m),o.identity(),s.copy(M.matrixWorld),s.premultiply(m),o.extractRotation(s),E.halfWidth.set(M.width*.5,0,0),E.halfHeight.set(0,M.height*.5,0),E.halfWidth.applyMatrix4(o),E.halfHeight.applyMatrix4(o),g++}else if(M.isPointLight){let E=i.point[f];E.position.setFromMatrixPosition(M.matrixWorld),E.position.applyMatrix4(m),f++}else if(M.isHemisphereLight){let E=i.hemi[v];E.direction.setFromMatrixPosition(M.matrixWorld),E.direction.transformDirection(m),v++}}}return{setup:a,setupView:c,state:i}}function r_(n){let e=new xP(n),t=[],i=[];function r(u){l.camera=u,t.length=0,i.length=0}function s(u){t.push(u)}function o(u){i.push(u)}function a(){e.setup(t)}function c(u){e.setupView(t,u)}let l={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:l,setupLights:a,setupLightsView:c,pushLight:s,pushShadow:o}}function MP(n){let e=new WeakMap;function t(r,s=0){let o=e.get(r),a;return o===void 0?(a=new r_(n),e.set(r,[a])):s>=o.length?(a=new r_(n),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:t,dispose:i}}var ep=class extends er{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=A1,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},tp=class extends er{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},bP=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,wP=`uniform sampler2D shadow_pass;
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
}`;function EP(n,e,t){let i=new qo,r=new We,s=new We,o=new gt,a=new ep({depthPacking:I1}),c=new tp,l={},u=t.maxTextureSize,d={[Ji]:pn,[pn]:Ji,[Ei]:Ei},f=new oi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new We},radius:{value:4}},vertexShader:bP,fragmentShader:wP}),h=f.clone();h.defines.HORIZONTAL_PASS=1;let g=new Rn;g.setAttribute("position",new mn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new En(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=d_;let p=this.type;this.render=function(C,D,O){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||C.length===0)return;let w=n.getRenderTarget(),_=n.getActiveCubeFace(),A=n.getActiveMipmapLevel(),G=n.state;G.setBlending(Yi),G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);let z=p!==bi&&this.type===bi,J=p===bi&&this.type!==bi;for(let Z=0,$=C.length;Z<$;Z++){let Q=C[Z],H=Q.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",Q,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;r.copy(H.mapSize);let le=H.getFrameExtents();if(r.multiply(le),s.copy(H.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/le.x),r.x=s.x*le.x,H.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/le.y),r.y=s.y*le.y,H.mapSize.y=s.y)),H.map===null||z===!0||J===!0){let _e=this.type!==bi?{minFilter:Pn,magFilter:Pn}:{};H.map!==null&&H.map.dispose(),H.map=new Ti(r.x,r.y,_e),H.map.texture.name=Q.name+".shadowMap",H.camera.updateProjectionMatrix()}n.setRenderTarget(H.map),n.clear();let pe=H.getViewportCount();for(let _e=0;_e<pe;_e++){let Ye=H.getViewport(_e);o.set(s.x*Ye.x,s.y*Ye.y,s.x*Ye.z,s.y*Ye.w),G.viewport(o),H.updateMatrices(Q,_e),i=H.getFrustum(),E(D,O,H.camera,Q,this.type)}H.isPointLightShadow!==!0&&this.type===bi&&b(H,O),H.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(w,_,A)};function b(C,D){let O=e.update(v);f.defines.VSM_SAMPLES!==C.blurSamples&&(f.defines.VSM_SAMPLES=C.blurSamples,h.defines.VSM_SAMPLES=C.blurSamples,f.needsUpdate=!0,h.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new Ti(r.x,r.y)),f.uniforms.shadow_pass.value=C.map.texture,f.uniforms.resolution.value=C.mapSize,f.uniforms.radius.value=C.radius,n.setRenderTarget(C.mapPass),n.clear(),n.renderBufferDirect(D,null,O,f,v,null),h.uniforms.shadow_pass.value=C.mapPass.texture,h.uniforms.resolution.value=C.mapSize,h.uniforms.radius.value=C.radius,n.setRenderTarget(C.map),n.clear(),n.renderBufferDirect(D,null,O,h,v,null)}function M(C,D,O,w){let _=null,A=O.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(A!==void 0)_=A;else if(_=O.isPointLight===!0?c:a,n.localClippingEnabled&&D.clipShadows===!0&&Array.isArray(D.clippingPlanes)&&D.clippingPlanes.length!==0||D.displacementMap&&D.displacementScale!==0||D.alphaMap&&D.alphaTest>0||D.map&&D.alphaTest>0){let G=_.uuid,z=D.uuid,J=l[G];J===void 0&&(J={},l[G]=J);let Z=J[z];Z===void 0&&(Z=_.clone(),J[z]=Z,D.addEventListener("dispose",F)),_=Z}if(_.visible=D.visible,_.wireframe=D.wireframe,w===bi?_.side=D.shadowSide!==null?D.shadowSide:D.side:_.side=D.shadowSide!==null?D.shadowSide:d[D.side],_.alphaMap=D.alphaMap,_.alphaTest=D.alphaTest,_.map=D.map,_.clipShadows=D.clipShadows,_.clippingPlanes=D.clippingPlanes,_.clipIntersection=D.clipIntersection,_.displacementMap=D.displacementMap,_.displacementScale=D.displacementScale,_.displacementBias=D.displacementBias,_.wireframeLinewidth=D.wireframeLinewidth,_.linewidth=D.linewidth,O.isPointLight===!0&&_.isMeshDistanceMaterial===!0){let G=n.properties.get(_);G.light=O}return _}function E(C,D,O,w,_){if(C.visible===!1)return;if(C.layers.test(D.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&_===bi)&&(!C.frustumCulled||i.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,C.matrixWorld);let z=e.update(C),J=C.material;if(Array.isArray(J)){let Z=z.groups;for(let $=0,Q=Z.length;$<Q;$++){let H=Z[$],le=J[H.materialIndex];if(le&&le.visible){let pe=M(C,le,w,_);C.onBeforeShadow(n,C,D,O,z,pe,H),n.renderBufferDirect(O,null,z,pe,C,H),C.onAfterShadow(n,C,D,O,z,pe,H)}}}else if(J.visible){let Z=M(C,J,w,_);C.onBeforeShadow(n,C,D,O,z,Z,null),n.renderBufferDirect(O,null,z,Z,C,null),C.onAfterShadow(n,C,D,O,z,Z,null)}}let G=C.children;for(let z=0,J=G.length;z<J;z++)E(G[z],D,O,w,_)}function F(C){C.target.removeEventListener("dispose",F);for(let O in l){let w=l[O],_=C.target.uuid;_ in w&&(w[_].dispose(),delete w[_])}}}function SP(n){function e(){let I=!1,ie=new gt,q=null,X=new gt(0,0,0,0);return{setMask:function(se){q!==se&&!I&&(n.colorMask(se,se,se,se),q=se)},setLocked:function(se){I=se},setClear:function(se,Se,Je,At,jt){jt===!0&&(se*=At,Se*=At,Je*=At),ie.set(se,Se,Je,At),X.equals(ie)===!1&&(n.clearColor(se,Se,Je,At),X.copy(ie))},reset:function(){I=!1,q=null,X.set(-1,0,0,0)}}}function t(){let I=!1,ie=null,q=null,X=null;return{setTest:function(se){se?ye(n.DEPTH_TEST):de(n.DEPTH_TEST)},setMask:function(se){ie!==se&&!I&&(n.depthMask(se),ie=se)},setFunc:function(se){if(q!==se){switch(se){case f1:n.depthFunc(n.NEVER);break;case h1:n.depthFunc(n.ALWAYS);break;case p1:n.depthFunc(n.LESS);break;case fl:n.depthFunc(n.LEQUAL);break;case m1:n.depthFunc(n.EQUAL);break;case g1:n.depthFunc(n.GEQUAL);break;case v1:n.depthFunc(n.GREATER);break;case y1:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}q=se}},setLocked:function(se){I=se},setClear:function(se){X!==se&&(n.clearDepth(se),X=se)},reset:function(){I=!1,ie=null,q=null,X=null}}}function i(){let I=!1,ie=null,q=null,X=null,se=null,Se=null,Je=null,At=null,jt=null;return{setTest:function(Qe){I||(Qe?ye(n.STENCIL_TEST):de(n.STENCIL_TEST))},setMask:function(Qe){ie!==Qe&&!I&&(n.stencilMask(Qe),ie=Qe)},setFunc:function(Qe,ai,$n){(q!==Qe||X!==ai||se!==$n)&&(n.stencilFunc(Qe,ai,$n),q=Qe,X=ai,se=$n)},setOp:function(Qe,ai,$n){(Se!==Qe||Je!==ai||At!==$n)&&(n.stencilOp(Qe,ai,$n),Se=Qe,Je=ai,At=$n)},setLocked:function(Qe){I=Qe},setClear:function(Qe){jt!==Qe&&(n.clearStencil(Qe),jt=Qe)},reset:function(){I=!1,ie=null,q=null,X=null,se=null,Se=null,Je=null,At=null,jt=null}}}let r=new e,s=new t,o=new i,a=new WeakMap,c=new WeakMap,l={},u={},d=new WeakMap,f=[],h=null,g=!1,v=null,m=null,p=null,b=null,M=null,E=null,F=null,C=new Xe(0,0,0),D=0,O=!1,w=null,_=null,A=null,G=null,z=null,J=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),Z=!1,$=0,Q=n.getParameter(n.VERSION);Q.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(Q)[1]),Z=$>=1):Q.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(Q)[1]),Z=$>=2);let H=null,le={},pe=n.getParameter(n.SCISSOR_BOX),_e=n.getParameter(n.VIEWPORT),Ye=new gt().fromArray(pe),ct=new gt().fromArray(_e);function j(I,ie,q,X){let se=new Uint8Array(4),Se=n.createTexture();n.bindTexture(I,Se),n.texParameteri(I,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(I,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Je=0;Je<q;Je++)I===n.TEXTURE_3D||I===n.TEXTURE_2D_ARRAY?n.texImage3D(ie,0,n.RGBA,1,1,X,0,n.RGBA,n.UNSIGNED_BYTE,se):n.texImage2D(ie+Je,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,se);return Se}let te={};te[n.TEXTURE_2D]=j(n.TEXTURE_2D,n.TEXTURE_2D,1),te[n.TEXTURE_CUBE_MAP]=j(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),te[n.TEXTURE_2D_ARRAY]=j(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),te[n.TEXTURE_3D]=j(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),o.setClear(0),ye(n.DEPTH_TEST),s.setFunc(fl),lt(!1),be(ay),ye(n.CULL_FACE),Dt(Yi);function ye(I){l[I]!==!0&&(n.enable(I),l[I]=!0)}function de(I){l[I]!==!1&&(n.disable(I),l[I]=!1)}function De(I,ie){return u[I]!==ie?(n.bindFramebuffer(I,ie),u[I]=ie,I===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=ie),I===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=ie),!0):!1}function Oe(I,ie){let q=f,X=!1;if(I){q=d.get(ie),q===void 0&&(q=[],d.set(ie,q));let se=I.textures;if(q.length!==se.length||q[0]!==n.COLOR_ATTACHMENT0){for(let Se=0,Je=se.length;Se<Je;Se++)q[Se]=n.COLOR_ATTACHMENT0+Se;q.length=se.length,X=!0}}else q[0]!==n.BACK&&(q[0]=n.BACK,X=!0);X&&n.drawBuffers(q)}function je(I){return h!==I?(n.useProgram(I),h=I,!0):!1}let _t={[Ir]:n.FUNC_ADD,[YC]:n.FUNC_SUBTRACT,[ZC]:n.FUNC_REVERSE_SUBTRACT};_t[JC]=n.MIN,_t[KC]=n.MAX;let T={[QC]:n.ZERO,[e1]:n.ONE,[t1]:n.SRC_COLOR,[lh]:n.SRC_ALPHA,[a1]:n.SRC_ALPHA_SATURATE,[s1]:n.DST_COLOR,[i1]:n.DST_ALPHA,[n1]:n.ONE_MINUS_SRC_COLOR,[uh]:n.ONE_MINUS_SRC_ALPHA,[o1]:n.ONE_MINUS_DST_COLOR,[r1]:n.ONE_MINUS_DST_ALPHA,[c1]:n.CONSTANT_COLOR,[l1]:n.ONE_MINUS_CONSTANT_COLOR,[u1]:n.CONSTANT_ALPHA,[d1]:n.ONE_MINUS_CONSTANT_ALPHA};function Dt(I,ie,q,X,se,Se,Je,At,jt,Qe){if(I===Yi){g===!0&&(de(n.BLEND),g=!1);return}if(g===!1&&(ye(n.BLEND),g=!0),I!==XC){if(I!==v||Qe!==O){if((m!==Ir||M!==Ir)&&(n.blendEquation(n.FUNC_ADD),m=Ir,M=Ir),Qe)switch(I){case zs:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case cy:n.blendFunc(n.ONE,n.ONE);break;case ly:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case uy:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case zs:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case cy:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case ly:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case uy:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}p=null,b=null,E=null,F=null,C.set(0,0,0),D=0,v=I,O=Qe}return}se=se||ie,Se=Se||q,Je=Je||X,(ie!==m||se!==M)&&(n.blendEquationSeparate(_t[ie],_t[se]),m=ie,M=se),(q!==p||X!==b||Se!==E||Je!==F)&&(n.blendFuncSeparate(T[q],T[X],T[Se],T[Je]),p=q,b=X,E=Se,F=Je),(At.equals(C)===!1||jt!==D)&&(n.blendColor(At.r,At.g,At.b,jt),C.copy(At),D=jt),v=I,O=!1}function ot(I,ie){I.side===Ei?de(n.CULL_FACE):ye(n.CULL_FACE);let q=I.side===pn;ie&&(q=!q),lt(q),I.blending===zs&&I.transparent===!1?Dt(Yi):Dt(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),s.setFunc(I.depthFunc),s.setTest(I.depthTest),s.setMask(I.depthWrite),r.setMask(I.colorWrite);let X=I.stencilWrite;o.setTest(X),X&&(o.setMask(I.stencilWriteMask),o.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),o.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),Pe(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?ye(n.SAMPLE_ALPHA_TO_COVERAGE):de(n.SAMPLE_ALPHA_TO_COVERAGE)}function lt(I){w!==I&&(I?n.frontFace(n.CW):n.frontFace(n.CCW),w=I)}function be(I){I!==jC?(ye(n.CULL_FACE),I!==_&&(I===ay?n.cullFace(n.BACK):I===$C?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):de(n.CULL_FACE),_=I}function Tt(I){I!==A&&(Z&&n.lineWidth(I),A=I)}function Pe(I,ie,q){I?(ye(n.POLYGON_OFFSET_FILL),(G!==ie||z!==q)&&(n.polygonOffset(ie,q),G=ie,z=q)):de(n.POLYGON_OFFSET_FILL)}function Fe(I){I?ye(n.SCISSOR_TEST):de(n.SCISSOR_TEST)}function S(I){I===void 0&&(I=n.TEXTURE0+J-1),H!==I&&(n.activeTexture(I),H=I)}function y(I,ie,q){q===void 0&&(H===null?q=n.TEXTURE0+J-1:q=H);let X=le[q];X===void 0&&(X={type:void 0,texture:void 0},le[q]=X),(X.type!==I||X.texture!==ie)&&(H!==q&&(n.activeTexture(q),H=q),n.bindTexture(I,ie||te[I]),X.type=I,X.texture=ie)}function B(){let I=le[H];I!==void 0&&I.type!==void 0&&(n.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function Y(){try{n.compressedTexImage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ee(){try{n.compressedTexImage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function K(){try{n.texSubImage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function we(){try{n.texSubImage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ae(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function fe(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ke(){try{n.texStorage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ne(){try{n.texStorage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ue(){try{n.texImage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ze(){try{n.texImage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ie(I){Ye.equals(I)===!1&&(n.scissor(I.x,I.y,I.z,I.w),Ye.copy(I))}function me(I){ct.equals(I)===!1&&(n.viewport(I.x,I.y,I.z,I.w),ct.copy(I))}function Ne(I,ie){let q=c.get(ie);q===void 0&&(q=new WeakMap,c.set(ie,q));let X=q.get(I);X===void 0&&(X=n.getUniformBlockIndex(ie,I.name),q.set(I,X))}function He(I,ie){let X=c.get(ie).get(I);a.get(ie)!==X&&(n.uniformBlockBinding(ie,X,I.__bindingPointIndex),a.set(ie,X))}function vt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),l={},H=null,le={},u={},d=new WeakMap,f=[],h=null,g=!1,v=null,m=null,p=null,b=null,M=null,E=null,F=null,C=new Xe(0,0,0),D=0,O=!1,w=null,_=null,A=null,G=null,z=null,Ye.set(0,0,n.canvas.width,n.canvas.height),ct.set(0,0,n.canvas.width,n.canvas.height),r.reset(),s.reset(),o.reset()}return{buffers:{color:r,depth:s,stencil:o},enable:ye,disable:de,bindFramebuffer:De,drawBuffers:Oe,useProgram:je,setBlending:Dt,setMaterial:ot,setFlipSided:lt,setCullFace:be,setLineWidth:Tt,setPolygonOffset:Pe,setScissorTest:Fe,activeTexture:S,bindTexture:y,unbindTexture:B,compressedTexImage2D:Y,compressedTexImage3D:ee,texImage2D:ue,texImage3D:Ze,updateUBOMapping:Ne,uniformBlockBinding:He,texStorage2D:ke,texStorage3D:ne,texSubImage2D:K,texSubImage3D:we,compressedTexSubImage2D:ae,compressedTexSubImage3D:fe,scissor:Ie,viewport:me,reset:vt}}function s_(n,e,t,i){let r=CP(i);switch(t){case g_:return n*e;case y_:return n*e;case __:return n*e*2;case x_:return n*e/r.components*r.byteLength;case xp:return n*e/r.components*r.byteLength;case M_:return n*e*2/r.components*r.byteLength;case Mp:return n*e*2/r.components*r.byteLength;case v_:return n*e*3/r.components*r.byteLength;case Wn:return n*e*4/r.components*r.byteLength;case bp:return n*e*4/r.components*r.byteLength;case al:case cl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case ll:case ul:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case gh:case yh:return Math.max(n,16)*Math.max(e,8)/4;case mh:case vh:return Math.max(n,8)*Math.max(e,8)/2;case _h:case xh:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Mh:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case bh:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case wh:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Eh:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Sh:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Ch:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Dh:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Th:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Ah:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Ih:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Ph:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Rh:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Nh:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Oh:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Fh:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case dl:case Lh:case kh:return Math.ceil(n/4)*Math.ceil(e/4)*16;case b_:case Uh:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Vh:case Bh:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function CP(n){switch(n){case Di:case h_:return{byteLength:1,components:1};case $o:case p_:case Jo:return{byteLength:2,components:1};case yp:case _p:return{byteLength:2,components:4};case Or:case vp:case Si:return{byteLength:4,components:1};case m_:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function DP(n,e,t,i,r,s,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new We,u=new WeakMap,d,f=new WeakMap,h=!1;try{h=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(S,y){return h?new OffscreenCanvas(S,y):yl("canvas")}function v(S,y,B){let Y=1,ee=Fe(S);if((ee.width>B||ee.height>B)&&(Y=B/Math.max(ee.width,ee.height)),Y<1)if(typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&S instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&S instanceof ImageBitmap||typeof VideoFrame<"u"&&S instanceof VideoFrame){let K=Math.floor(Y*ee.width),we=Math.floor(Y*ee.height);d===void 0&&(d=g(K,we));let ae=y?g(K,we):d;return ae.width=K,ae.height=we,ae.getContext("2d").drawImage(S,0,0,K,we),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ee.width+"x"+ee.height+") to ("+K+"x"+we+")."),ae}else return"data"in S&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ee.width+"x"+ee.height+")."),S;return S}function m(S){return S.generateMipmaps&&S.minFilter!==Pn&&S.minFilter!==Gn}function p(S){n.generateMipmap(S)}function b(S,y,B,Y,ee=!1){if(S!==null){if(n[S]!==void 0)return n[S];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+S+"'")}let K=y;if(y===n.RED&&(B===n.FLOAT&&(K=n.R32F),B===n.HALF_FLOAT&&(K=n.R16F),B===n.UNSIGNED_BYTE&&(K=n.R8)),y===n.RED_INTEGER&&(B===n.UNSIGNED_BYTE&&(K=n.R8UI),B===n.UNSIGNED_SHORT&&(K=n.R16UI),B===n.UNSIGNED_INT&&(K=n.R32UI),B===n.BYTE&&(K=n.R8I),B===n.SHORT&&(K=n.R16I),B===n.INT&&(K=n.R32I)),y===n.RG&&(B===n.FLOAT&&(K=n.RG32F),B===n.HALF_FLOAT&&(K=n.RG16F),B===n.UNSIGNED_BYTE&&(K=n.RG8)),y===n.RG_INTEGER&&(B===n.UNSIGNED_BYTE&&(K=n.RG8UI),B===n.UNSIGNED_SHORT&&(K=n.RG16UI),B===n.UNSIGNED_INT&&(K=n.RG32UI),B===n.BYTE&&(K=n.RG8I),B===n.SHORT&&(K=n.RG16I),B===n.INT&&(K=n.RG32I)),y===n.RGB&&B===n.UNSIGNED_INT_5_9_9_9_REV&&(K=n.RGB9_E5),y===n.RGBA){let we=ee?pl:st.getTransfer(Y);B===n.FLOAT&&(K=n.RGBA32F),B===n.HALF_FLOAT&&(K=n.RGBA16F),B===n.UNSIGNED_BYTE&&(K=we===mt?n.SRGB8_ALPHA8:n.RGBA8),B===n.UNSIGNED_SHORT_4_4_4_4&&(K=n.RGBA4),B===n.UNSIGNED_SHORT_5_5_5_1&&(K=n.RGB5_A1)}return(K===n.R16F||K===n.R32F||K===n.RG16F||K===n.RG32F||K===n.RGBA16F||K===n.RGBA32F)&&e.get("EXT_color_buffer_float"),K}function M(S,y){let B;return S?y===null||y===Or||y===qs?B=n.DEPTH24_STENCIL8:y===Si?B=n.DEPTH32F_STENCIL8:y===$o&&(B=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===Or||y===qs?B=n.DEPTH_COMPONENT24:y===Si?B=n.DEPTH_COMPONENT32F:y===$o&&(B=n.DEPTH_COMPONENT16),B}function E(S,y){return m(S)===!0||S.isFramebufferTexture&&S.minFilter!==Pn&&S.minFilter!==Gn?Math.log2(Math.max(y.width,y.height))+1:S.mipmaps!==void 0&&S.mipmaps.length>0?S.mipmaps.length:S.isCompressedTexture&&Array.isArray(S.image)?y.mipmaps.length:1}function F(S){let y=S.target;y.removeEventListener("dispose",F),D(y),y.isVideoTexture&&u.delete(y)}function C(S){let y=S.target;y.removeEventListener("dispose",C),w(y)}function D(S){let y=i.get(S);if(y.__webglInit===void 0)return;let B=S.source,Y=f.get(B);if(Y){let ee=Y[y.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&O(S),Object.keys(Y).length===0&&f.delete(B)}i.remove(S)}function O(S){let y=i.get(S);n.deleteTexture(y.__webglTexture);let B=S.source,Y=f.get(B);delete Y[y.__cacheKey],o.memory.textures--}function w(S){let y=i.get(S);if(S.depthTexture&&S.depthTexture.dispose(),S.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(y.__webglFramebuffer[Y]))for(let ee=0;ee<y.__webglFramebuffer[Y].length;ee++)n.deleteFramebuffer(y.__webglFramebuffer[Y][ee]);else n.deleteFramebuffer(y.__webglFramebuffer[Y]);y.__webglDepthbuffer&&n.deleteRenderbuffer(y.__webglDepthbuffer[Y])}else{if(Array.isArray(y.__webglFramebuffer))for(let Y=0;Y<y.__webglFramebuffer.length;Y++)n.deleteFramebuffer(y.__webglFramebuffer[Y]);else n.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&n.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&n.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let Y=0;Y<y.__webglColorRenderbuffer.length;Y++)y.__webglColorRenderbuffer[Y]&&n.deleteRenderbuffer(y.__webglColorRenderbuffer[Y]);y.__webglDepthRenderbuffer&&n.deleteRenderbuffer(y.__webglDepthRenderbuffer)}let B=S.textures;for(let Y=0,ee=B.length;Y<ee;Y++){let K=i.get(B[Y]);K.__webglTexture&&(n.deleteTexture(K.__webglTexture),o.memory.textures--),i.remove(B[Y])}i.remove(S)}let _=0;function A(){_=0}function G(){let S=_;return S>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+S+" texture units while this GPU supports only "+r.maxTextures),_+=1,S}function z(S){let y=[];return y.push(S.wrapS),y.push(S.wrapT),y.push(S.wrapR||0),y.push(S.magFilter),y.push(S.minFilter),y.push(S.anisotropy),y.push(S.internalFormat),y.push(S.format),y.push(S.type),y.push(S.generateMipmaps),y.push(S.premultiplyAlpha),y.push(S.flipY),y.push(S.unpackAlignment),y.push(S.colorSpace),y.join()}function J(S,y){let B=i.get(S);if(S.isVideoTexture&&Tt(S),S.isRenderTargetTexture===!1&&S.version>0&&B.__version!==S.version){let Y=S.image;if(Y===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ct(B,S,y);return}}t.bindTexture(n.TEXTURE_2D,B.__webglTexture,n.TEXTURE0+y)}function Z(S,y){let B=i.get(S);if(S.version>0&&B.__version!==S.version){ct(B,S,y);return}t.bindTexture(n.TEXTURE_2D_ARRAY,B.__webglTexture,n.TEXTURE0+y)}function $(S,y){let B=i.get(S);if(S.version>0&&B.__version!==S.version){ct(B,S,y);return}t.bindTexture(n.TEXTURE_3D,B.__webglTexture,n.TEXTURE0+y)}function Q(S,y){let B=i.get(S);if(S.version>0&&B.__version!==S.version){j(B,S,y);return}t.bindTexture(n.TEXTURE_CUBE_MAP,B.__webglTexture,n.TEXTURE0+y)}let H={[hh]:n.REPEAT,[Rr]:n.CLAMP_TO_EDGE,[ph]:n.MIRRORED_REPEAT},le={[Pn]:n.NEAREST,[T1]:n.NEAREST_MIPMAP_NEAREST,[Lc]:n.NEAREST_MIPMAP_LINEAR,[Gn]:n.LINEAR,[Nf]:n.LINEAR_MIPMAP_NEAREST,[Nr]:n.LINEAR_MIPMAP_LINEAR},pe={[R1]:n.NEVER,[U1]:n.ALWAYS,[N1]:n.LESS,[E_]:n.LEQUAL,[O1]:n.EQUAL,[k1]:n.GEQUAL,[F1]:n.GREATER,[L1]:n.NOTEQUAL};function _e(S,y){if(y.type===Si&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===Gn||y.magFilter===Nf||y.magFilter===Lc||y.magFilter===Nr||y.minFilter===Gn||y.minFilter===Nf||y.minFilter===Lc||y.minFilter===Nr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(S,n.TEXTURE_WRAP_S,H[y.wrapS]),n.texParameteri(S,n.TEXTURE_WRAP_T,H[y.wrapT]),(S===n.TEXTURE_3D||S===n.TEXTURE_2D_ARRAY)&&n.texParameteri(S,n.TEXTURE_WRAP_R,H[y.wrapR]),n.texParameteri(S,n.TEXTURE_MAG_FILTER,le[y.magFilter]),n.texParameteri(S,n.TEXTURE_MIN_FILTER,le[y.minFilter]),y.compareFunction&&(n.texParameteri(S,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(S,n.TEXTURE_COMPARE_FUNC,pe[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===Pn||y.minFilter!==Lc&&y.minFilter!==Nr||y.type===Si&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||i.get(y).__currentAnisotropy){let B=e.get("EXT_texture_filter_anisotropic");n.texParameterf(S,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,r.getMaxAnisotropy())),i.get(y).__currentAnisotropy=y.anisotropy}}}function Ye(S,y){let B=!1;S.__webglInit===void 0&&(S.__webglInit=!0,y.addEventListener("dispose",F));let Y=y.source,ee=f.get(Y);ee===void 0&&(ee={},f.set(Y,ee));let K=z(y);if(K!==S.__cacheKey){ee[K]===void 0&&(ee[K]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,B=!0),ee[K].usedTimes++;let we=ee[S.__cacheKey];we!==void 0&&(ee[S.__cacheKey].usedTimes--,we.usedTimes===0&&O(y)),S.__cacheKey=K,S.__webglTexture=ee[K].texture}return B}function ct(S,y,B){let Y=n.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(Y=n.TEXTURE_2D_ARRAY),y.isData3DTexture&&(Y=n.TEXTURE_3D);let ee=Ye(S,y),K=y.source;t.bindTexture(Y,S.__webglTexture,n.TEXTURE0+B);let we=i.get(K);if(K.version!==we.__version||ee===!0){t.activeTexture(n.TEXTURE0+B);let ae=st.getPrimaries(st.workingColorSpace),fe=y.colorSpace===qi?null:st.getPrimaries(y.colorSpace),ke=y.colorSpace===qi||ae===fe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,y.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ke);let ne=v(y.image,!1,r.maxTextureSize);ne=Pe(y,ne);let ue=s.convert(y.format,y.colorSpace),Ze=s.convert(y.type),Ie=b(y.internalFormat,ue,Ze,y.colorSpace,y.isVideoTexture);_e(Y,y);let me,Ne=y.mipmaps,He=y.isVideoTexture!==!0,vt=we.__version===void 0||ee===!0,I=K.dataReady,ie=E(y,ne);if(y.isDepthTexture)Ie=M(y.format===Xs,y.type),vt&&(He?t.texStorage2D(n.TEXTURE_2D,1,Ie,ne.width,ne.height):t.texImage2D(n.TEXTURE_2D,0,Ie,ne.width,ne.height,0,ue,Ze,null));else if(y.isDataTexture)if(Ne.length>0){He&&vt&&t.texStorage2D(n.TEXTURE_2D,ie,Ie,Ne[0].width,Ne[0].height);for(let q=0,X=Ne.length;q<X;q++)me=Ne[q],He?I&&t.texSubImage2D(n.TEXTURE_2D,q,0,0,me.width,me.height,ue,Ze,me.data):t.texImage2D(n.TEXTURE_2D,q,Ie,me.width,me.height,0,ue,Ze,me.data);y.generateMipmaps=!1}else He?(vt&&t.texStorage2D(n.TEXTURE_2D,ie,Ie,ne.width,ne.height),I&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ne.width,ne.height,ue,Ze,ne.data)):t.texImage2D(n.TEXTURE_2D,0,Ie,ne.width,ne.height,0,ue,Ze,ne.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){He&&vt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ie,Ie,Ne[0].width,Ne[0].height,ne.depth);for(let q=0,X=Ne.length;q<X;q++)if(me=Ne[q],y.format!==Wn)if(ue!==null)if(He){if(I)if(y.layerUpdates.size>0){let se=s_(me.width,me.height,y.format,y.type);for(let Se of y.layerUpdates){let Je=me.data.subarray(Se*se/me.data.BYTES_PER_ELEMENT,(Se+1)*se/me.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,q,0,0,Se,me.width,me.height,1,ue,Je,0,0)}y.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,q,0,0,0,me.width,me.height,ne.depth,ue,me.data,0,0)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,q,Ie,me.width,me.height,ne.depth,0,me.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else He?I&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,q,0,0,0,me.width,me.height,ne.depth,ue,Ze,me.data):t.texImage3D(n.TEXTURE_2D_ARRAY,q,Ie,me.width,me.height,ne.depth,0,ue,Ze,me.data)}else{He&&vt&&t.texStorage2D(n.TEXTURE_2D,ie,Ie,Ne[0].width,Ne[0].height);for(let q=0,X=Ne.length;q<X;q++)me=Ne[q],y.format!==Wn?ue!==null?He?I&&t.compressedTexSubImage2D(n.TEXTURE_2D,q,0,0,me.width,me.height,ue,me.data):t.compressedTexImage2D(n.TEXTURE_2D,q,Ie,me.width,me.height,0,me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):He?I&&t.texSubImage2D(n.TEXTURE_2D,q,0,0,me.width,me.height,ue,Ze,me.data):t.texImage2D(n.TEXTURE_2D,q,Ie,me.width,me.height,0,ue,Ze,me.data)}else if(y.isDataArrayTexture)if(He){if(vt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ie,Ie,ne.width,ne.height,ne.depth),I)if(y.layerUpdates.size>0){let q=s_(ne.width,ne.height,y.format,y.type);for(let X of y.layerUpdates){let se=ne.data.subarray(X*q/ne.data.BYTES_PER_ELEMENT,(X+1)*q/ne.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,X,ne.width,ne.height,1,ue,Ze,se)}y.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ne.width,ne.height,ne.depth,ue,Ze,ne.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Ie,ne.width,ne.height,ne.depth,0,ue,Ze,ne.data);else if(y.isData3DTexture)He?(vt&&t.texStorage3D(n.TEXTURE_3D,ie,Ie,ne.width,ne.height,ne.depth),I&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ne.width,ne.height,ne.depth,ue,Ze,ne.data)):t.texImage3D(n.TEXTURE_3D,0,Ie,ne.width,ne.height,ne.depth,0,ue,Ze,ne.data);else if(y.isFramebufferTexture){if(vt)if(He)t.texStorage2D(n.TEXTURE_2D,ie,Ie,ne.width,ne.height);else{let q=ne.width,X=ne.height;for(let se=0;se<ie;se++)t.texImage2D(n.TEXTURE_2D,se,Ie,q,X,0,ue,Ze,null),q>>=1,X>>=1}}else if(Ne.length>0){if(He&&vt){let q=Fe(Ne[0]);t.texStorage2D(n.TEXTURE_2D,ie,Ie,q.width,q.height)}for(let q=0,X=Ne.length;q<X;q++)me=Ne[q],He?I&&t.texSubImage2D(n.TEXTURE_2D,q,0,0,ue,Ze,me):t.texImage2D(n.TEXTURE_2D,q,Ie,ue,Ze,me);y.generateMipmaps=!1}else if(He){if(vt){let q=Fe(ne);t.texStorage2D(n.TEXTURE_2D,ie,Ie,q.width,q.height)}I&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ue,Ze,ne)}else t.texImage2D(n.TEXTURE_2D,0,Ie,ue,Ze,ne);m(y)&&p(Y),we.__version=K.version,y.onUpdate&&y.onUpdate(y)}S.__version=y.version}function j(S,y,B){if(y.image.length!==6)return;let Y=Ye(S,y),ee=y.source;t.bindTexture(n.TEXTURE_CUBE_MAP,S.__webglTexture,n.TEXTURE0+B);let K=i.get(ee);if(ee.version!==K.__version||Y===!0){t.activeTexture(n.TEXTURE0+B);let we=st.getPrimaries(st.workingColorSpace),ae=y.colorSpace===qi?null:st.getPrimaries(y.colorSpace),fe=y.colorSpace===qi||we===ae?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,y.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,fe);let ke=y.isCompressedTexture||y.image[0].isCompressedTexture,ne=y.image[0]&&y.image[0].isDataTexture,ue=[];for(let X=0;X<6;X++)!ke&&!ne?ue[X]=v(y.image[X],!0,r.maxCubemapSize):ue[X]=ne?y.image[X].image:y.image[X],ue[X]=Pe(y,ue[X]);let Ze=ue[0],Ie=s.convert(y.format,y.colorSpace),me=s.convert(y.type),Ne=b(y.internalFormat,Ie,me,y.colorSpace),He=y.isVideoTexture!==!0,vt=K.__version===void 0||Y===!0,I=ee.dataReady,ie=E(y,Ze);_e(n.TEXTURE_CUBE_MAP,y);let q;if(ke){He&&vt&&t.texStorage2D(n.TEXTURE_CUBE_MAP,ie,Ne,Ze.width,Ze.height);for(let X=0;X<6;X++){q=ue[X].mipmaps;for(let se=0;se<q.length;se++){let Se=q[se];y.format!==Wn?Ie!==null?He?I&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,se,0,0,Se.width,Se.height,Ie,Se.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,se,Ne,Se.width,Se.height,0,Se.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):He?I&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,se,0,0,Se.width,Se.height,Ie,me,Se.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,se,Ne,Se.width,Se.height,0,Ie,me,Se.data)}}}else{if(q=y.mipmaps,He&&vt){q.length>0&&ie++;let X=Fe(ue[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,ie,Ne,X.width,X.height)}for(let X=0;X<6;X++)if(ne){He?I&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,0,0,ue[X].width,ue[X].height,Ie,me,ue[X].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,Ne,ue[X].width,ue[X].height,0,Ie,me,ue[X].data);for(let se=0;se<q.length;se++){let Je=q[se].image[X].image;He?I&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,se+1,0,0,Je.width,Je.height,Ie,me,Je.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,se+1,Ne,Je.width,Je.height,0,Ie,me,Je.data)}}else{He?I&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,0,0,Ie,me,ue[X]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,Ne,Ie,me,ue[X]);for(let se=0;se<q.length;se++){let Se=q[se];He?I&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,se+1,0,0,Ie,me,Se.image[X]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,se+1,Ne,Ie,me,Se.image[X])}}}m(y)&&p(n.TEXTURE_CUBE_MAP),K.__version=ee.version,y.onUpdate&&y.onUpdate(y)}S.__version=y.version}function te(S,y,B,Y,ee,K){let we=s.convert(B.format,B.colorSpace),ae=s.convert(B.type),fe=b(B.internalFormat,we,ae,B.colorSpace);if(!i.get(y).__hasExternalTextures){let ne=Math.max(1,y.width>>K),ue=Math.max(1,y.height>>K);ee===n.TEXTURE_3D||ee===n.TEXTURE_2D_ARRAY?t.texImage3D(ee,K,fe,ne,ue,y.depth,0,we,ae,null):t.texImage2D(ee,K,fe,ne,ue,0,we,ae,null)}t.bindFramebuffer(n.FRAMEBUFFER,S),be(y)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Y,ee,i.get(B).__webglTexture,0,lt(y)):(ee===n.TEXTURE_2D||ee>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ee<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,Y,ee,i.get(B).__webglTexture,K),t.bindFramebuffer(n.FRAMEBUFFER,null)}function ye(S,y,B){if(n.bindRenderbuffer(n.RENDERBUFFER,S),y.depthBuffer){let Y=y.depthTexture,ee=Y&&Y.isDepthTexture?Y.type:null,K=M(y.stencilBuffer,ee),we=y.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ae=lt(y);be(y)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ae,K,y.width,y.height):B?n.renderbufferStorageMultisample(n.RENDERBUFFER,ae,K,y.width,y.height):n.renderbufferStorage(n.RENDERBUFFER,K,y.width,y.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,we,n.RENDERBUFFER,S)}else{let Y=y.textures;for(let ee=0;ee<Y.length;ee++){let K=Y[ee],we=s.convert(K.format,K.colorSpace),ae=s.convert(K.type),fe=b(K.internalFormat,we,ae,K.colorSpace),ke=lt(y);B&&be(y)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,ke,fe,y.width,y.height):be(y)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ke,fe,y.width,y.height):n.renderbufferStorage(n.RENDERBUFFER,fe,y.width,y.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function de(S,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,S),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(y.depthTexture).__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),J(y.depthTexture,0);let Y=i.get(y.depthTexture).__webglTexture,ee=lt(y);if(y.depthTexture.format===Hs)be(y)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Y,0,ee):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Y,0);else if(y.depthTexture.format===Xs)be(y)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Y,0,ee):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Y,0);else throw new Error("Unknown depthTexture format")}function De(S){let y=i.get(S),B=S.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==S.depthTexture){let Y=S.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),Y){let ee=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,Y.removeEventListener("dispose",ee)};Y.addEventListener("dispose",ee),y.__depthDisposeCallback=ee}y.__boundDepthTexture=Y}if(S.depthTexture&&!y.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");de(y.__webglFramebuffer,S)}else if(B){y.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(t.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer[Y]),y.__webglDepthbuffer[Y]===void 0)y.__webglDepthbuffer[Y]=n.createRenderbuffer(),ye(y.__webglDepthbuffer[Y],S,!1);else{let ee=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,K=y.__webglDepthbuffer[Y];n.bindRenderbuffer(n.RENDERBUFFER,K),n.framebufferRenderbuffer(n.FRAMEBUFFER,ee,n.RENDERBUFFER,K)}}else if(t.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=n.createRenderbuffer(),ye(y.__webglDepthbuffer,S,!1);else{let Y=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ee=y.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,ee),n.framebufferRenderbuffer(n.FRAMEBUFFER,Y,n.RENDERBUFFER,ee)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function Oe(S,y,B){let Y=i.get(S);y!==void 0&&te(Y.__webglFramebuffer,S,S.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),B!==void 0&&De(S)}function je(S){let y=S.texture,B=i.get(S),Y=i.get(y);S.addEventListener("dispose",C);let ee=S.textures,K=S.isWebGLCubeRenderTarget===!0,we=ee.length>1;if(we||(Y.__webglTexture===void 0&&(Y.__webglTexture=n.createTexture()),Y.__version=y.version,o.memory.textures++),K){B.__webglFramebuffer=[];for(let ae=0;ae<6;ae++)if(y.mipmaps&&y.mipmaps.length>0){B.__webglFramebuffer[ae]=[];for(let fe=0;fe<y.mipmaps.length;fe++)B.__webglFramebuffer[ae][fe]=n.createFramebuffer()}else B.__webglFramebuffer[ae]=n.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){B.__webglFramebuffer=[];for(let ae=0;ae<y.mipmaps.length;ae++)B.__webglFramebuffer[ae]=n.createFramebuffer()}else B.__webglFramebuffer=n.createFramebuffer();if(we)for(let ae=0,fe=ee.length;ae<fe;ae++){let ke=i.get(ee[ae]);ke.__webglTexture===void 0&&(ke.__webglTexture=n.createTexture(),o.memory.textures++)}if(S.samples>0&&be(S)===!1){B.__webglMultisampledFramebuffer=n.createFramebuffer(),B.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let ae=0;ae<ee.length;ae++){let fe=ee[ae];B.__webglColorRenderbuffer[ae]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,B.__webglColorRenderbuffer[ae]);let ke=s.convert(fe.format,fe.colorSpace),ne=s.convert(fe.type),ue=b(fe.internalFormat,ke,ne,fe.colorSpace,S.isXRRenderTarget===!0),Ze=lt(S);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ze,ue,S.width,S.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ae,n.RENDERBUFFER,B.__webglColorRenderbuffer[ae])}n.bindRenderbuffer(n.RENDERBUFFER,null),S.depthBuffer&&(B.__webglDepthRenderbuffer=n.createRenderbuffer(),ye(B.__webglDepthRenderbuffer,S,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(K){t.bindTexture(n.TEXTURE_CUBE_MAP,Y.__webglTexture),_e(n.TEXTURE_CUBE_MAP,y);for(let ae=0;ae<6;ae++)if(y.mipmaps&&y.mipmaps.length>0)for(let fe=0;fe<y.mipmaps.length;fe++)te(B.__webglFramebuffer[ae][fe],S,y,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,fe);else te(B.__webglFramebuffer[ae],S,y,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0);m(y)&&p(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(we){for(let ae=0,fe=ee.length;ae<fe;ae++){let ke=ee[ae],ne=i.get(ke);t.bindTexture(n.TEXTURE_2D,ne.__webglTexture),_e(n.TEXTURE_2D,ke),te(B.__webglFramebuffer,S,ke,n.COLOR_ATTACHMENT0+ae,n.TEXTURE_2D,0),m(ke)&&p(n.TEXTURE_2D)}t.unbindTexture()}else{let ae=n.TEXTURE_2D;if((S.isWebGL3DRenderTarget||S.isWebGLArrayRenderTarget)&&(ae=S.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ae,Y.__webglTexture),_e(ae,y),y.mipmaps&&y.mipmaps.length>0)for(let fe=0;fe<y.mipmaps.length;fe++)te(B.__webglFramebuffer[fe],S,y,n.COLOR_ATTACHMENT0,ae,fe);else te(B.__webglFramebuffer,S,y,n.COLOR_ATTACHMENT0,ae,0);m(y)&&p(ae),t.unbindTexture()}S.depthBuffer&&De(S)}function _t(S){let y=S.textures;for(let B=0,Y=y.length;B<Y;B++){let ee=y[B];if(m(ee)){let K=S.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,we=i.get(ee).__webglTexture;t.bindTexture(K,we),p(K),t.unbindTexture()}}}let T=[],Dt=[];function ot(S){if(S.samples>0){if(be(S)===!1){let y=S.textures,B=S.width,Y=S.height,ee=n.COLOR_BUFFER_BIT,K=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,we=i.get(S),ae=y.length>1;if(ae)for(let fe=0;fe<y.length;fe++)t.bindFramebuffer(n.FRAMEBUFFER,we.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+fe,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,we.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+fe,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,we.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,we.__webglFramebuffer);for(let fe=0;fe<y.length;fe++){if(S.resolveDepthBuffer&&(S.depthBuffer&&(ee|=n.DEPTH_BUFFER_BIT),S.stencilBuffer&&S.resolveStencilBuffer&&(ee|=n.STENCIL_BUFFER_BIT)),ae){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,we.__webglColorRenderbuffer[fe]);let ke=i.get(y[fe]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,ke,0)}n.blitFramebuffer(0,0,B,Y,0,0,B,Y,ee,n.NEAREST),c===!0&&(T.length=0,Dt.length=0,T.push(n.COLOR_ATTACHMENT0+fe),S.depthBuffer&&S.resolveDepthBuffer===!1&&(T.push(K),Dt.push(K),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,Dt)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,T))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ae)for(let fe=0;fe<y.length;fe++){t.bindFramebuffer(n.FRAMEBUFFER,we.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+fe,n.RENDERBUFFER,we.__webglColorRenderbuffer[fe]);let ke=i.get(y[fe]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,we.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+fe,n.TEXTURE_2D,ke,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,we.__webglMultisampledFramebuffer)}else if(S.depthBuffer&&S.resolveDepthBuffer===!1&&c){let y=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[y])}}}function lt(S){return Math.min(r.maxSamples,S.samples)}function be(S){let y=i.get(S);return S.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function Tt(S){let y=o.render.frame;u.get(S)!==y&&(u.set(S,y),S.update())}function Pe(S,y){let B=S.colorSpace,Y=S.format,ee=S.type;return S.isCompressedTexture===!0||S.isVideoTexture===!0||B!==tr&&B!==qi&&(st.getTransfer(B)===mt?(Y!==Wn||ee!==Di)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),y}function Fe(S){return typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement?(l.width=S.naturalWidth||S.width,l.height=S.naturalHeight||S.height):typeof VideoFrame<"u"&&S instanceof VideoFrame?(l.width=S.displayWidth,l.height=S.displayHeight):(l.width=S.width,l.height=S.height),l}this.allocateTextureUnit=G,this.resetTextureUnits=A,this.setTexture2D=J,this.setTexture2DArray=Z,this.setTexture3D=$,this.setTextureCube=Q,this.rebindTextures=Oe,this.setupRenderTarget=je,this.updateRenderTargetMipmap=_t,this.updateMultisampleRenderTarget=ot,this.setupDepthRenderbuffer=De,this.setupFrameBufferTexture=te,this.useMultisampledRTT=be}function TP(n,e){function t(i,r=qi){let s,o=st.getTransfer(r);if(i===Di)return n.UNSIGNED_BYTE;if(i===yp)return n.UNSIGNED_SHORT_4_4_4_4;if(i===_p)return n.UNSIGNED_SHORT_5_5_5_1;if(i===m_)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===h_)return n.BYTE;if(i===p_)return n.SHORT;if(i===$o)return n.UNSIGNED_SHORT;if(i===vp)return n.INT;if(i===Or)return n.UNSIGNED_INT;if(i===Si)return n.FLOAT;if(i===Jo)return n.HALF_FLOAT;if(i===g_)return n.ALPHA;if(i===v_)return n.RGB;if(i===Wn)return n.RGBA;if(i===y_)return n.LUMINANCE;if(i===__)return n.LUMINANCE_ALPHA;if(i===Hs)return n.DEPTH_COMPONENT;if(i===Xs)return n.DEPTH_STENCIL;if(i===x_)return n.RED;if(i===xp)return n.RED_INTEGER;if(i===M_)return n.RG;if(i===Mp)return n.RG_INTEGER;if(i===bp)return n.RGBA_INTEGER;if(i===al||i===cl||i===ll||i===ul)if(o===mt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===al)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===cl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===ll)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===ul)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===al)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===cl)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===ll)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===ul)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===mh||i===gh||i===vh||i===yh)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===mh)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===gh)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===vh)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===yh)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===_h||i===xh||i===Mh)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===_h||i===xh)return o===mt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Mh)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===bh||i===wh||i===Eh||i===Sh||i===Ch||i===Dh||i===Th||i===Ah||i===Ih||i===Ph||i===Rh||i===Nh||i===Oh||i===Fh)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===bh)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===wh)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Eh)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Sh)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Ch)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Dh)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Th)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Ah)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Ih)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Ph)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Rh)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Nh)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Oh)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Fh)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===dl||i===Lh||i===kh)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===dl)return o===mt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Lh)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===kh)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===b_||i===Uh||i===Vh||i===Bh)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===dl)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Uh)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Vh)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Bh)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===qs?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}var np=class extends tn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},Xi=class extends si{constructor(){super(),this.isGroup=!0,this.type="Group"}},AP={type:"move"},jo=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Xi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Xi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Xi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(let v of e.hand.values()){let m=t.getJointPose(v,i),p=this._getHandJoint(l,v);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let u=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],f=u.position.distanceTo(d.position),h=.02,g=.005;l.inputState.pinching&&f>h+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&f<=h-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(AP)))}return a!==null&&(a.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new Xi;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},IP=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,PP=`
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

}`,ip=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){let r=new Br,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new oi({vertexShader:IP,fragmentShader:PP,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new En(new Tl(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},rp=class extends Ki{constructor(e,t){super();let i=this,r=null,s=1,o=null,a="local-floor",c=1,l=null,u=null,d=null,f=null,h=null,g=null,v=new ip,m=t.getContextAttributes(),p=null,b=null,M=[],E=[],F=new We,C=null,D=new tn;D.layers.enable(1),D.viewport=new gt;let O=new tn;O.layers.enable(2),O.viewport=new gt;let w=[D,O],_=new np;_.layers.enable(1),_.layers.enable(2);let A=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let te=M[j];return te===void 0&&(te=new jo,M[j]=te),te.getTargetRaySpace()},this.getControllerGrip=function(j){let te=M[j];return te===void 0&&(te=new jo,M[j]=te),te.getGripSpace()},this.getHand=function(j){let te=M[j];return te===void 0&&(te=new jo,M[j]=te),te.getHandSpace()};function z(j){let te=E.indexOf(j.inputSource);if(te===-1)return;let ye=M[te];ye!==void 0&&(ye.update(j.inputSource,j.frame,l||o),ye.dispatchEvent({type:j.type,data:j.inputSource}))}function J(){r.removeEventListener("select",z),r.removeEventListener("selectstart",z),r.removeEventListener("selectend",z),r.removeEventListener("squeeze",z),r.removeEventListener("squeezestart",z),r.removeEventListener("squeezeend",z),r.removeEventListener("end",J),r.removeEventListener("inputsourceschange",Z);for(let j=0;j<M.length;j++){let te=E[j];te!==null&&(E[j]=null,M[j].disconnect(te))}A=null,G=null,v.reset(),e.setRenderTarget(p),h=null,f=null,d=null,r=null,b=null,ct.stop(),i.isPresenting=!1,e.setPixelRatio(C),e.setSize(F.width,F.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){s=j,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){a=j,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(j){l=j},this.getBaseLayer=function(){return f!==null?f:h},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=function(j){return aa(this,null,function*(){if(r=j,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",z),r.addEventListener("selectstart",z),r.addEventListener("selectend",z),r.addEventListener("squeeze",z),r.addEventListener("squeezestart",z),r.addEventListener("squeezeend",z),r.addEventListener("end",J),r.addEventListener("inputsourceschange",Z),m.xrCompatible!==!0&&(yield t.makeXRCompatible()),C=e.getPixelRatio(),e.getSize(F),r.renderState.layers===void 0){let te={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};h=new XRWebGLLayer(r,t,te),r.updateRenderState({baseLayer:h}),e.setPixelRatio(1),e.setSize(h.framebufferWidth,h.framebufferHeight,!1),b=new Ti(h.framebufferWidth,h.framebufferHeight,{format:Wn,type:Di,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let te=null,ye=null,de=null;m.depth&&(de=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,te=m.stencil?Xs:Hs,ye=m.stencil?qs:Or);let De={colorFormat:t.RGBA8,depthFormat:de,scaleFactor:s};d=new XRWebGLBinding(r,t),f=d.createProjectionLayer(De),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),b=new Ti(f.textureWidth,f.textureHeight,{format:Wn,type:Di,depthTexture:new Pl(f.textureWidth,f.textureHeight,ye,void 0,void 0,void 0,void 0,void 0,void 0,te),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=yield r.requestReferenceSpace(a),ct.setContext(r),ct.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}})},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function Z(j){for(let te=0;te<j.removed.length;te++){let ye=j.removed[te],de=E.indexOf(ye);de>=0&&(E[de]=null,M[de].disconnect(ye))}for(let te=0;te<j.added.length;te++){let ye=j.added[te],de=E.indexOf(ye);if(de===-1){for(let Oe=0;Oe<M.length;Oe++)if(Oe>=E.length){E.push(ye),de=Oe;break}else if(E[Oe]===null){E[Oe]=ye,de=Oe;break}if(de===-1)break}let De=M[de];De&&De.connect(ye)}}let $=new R,Q=new R;function H(j,te,ye){$.setFromMatrixPosition(te.matrixWorld),Q.setFromMatrixPosition(ye.matrixWorld);let de=$.distanceTo(Q),De=te.projectionMatrix.elements,Oe=ye.projectionMatrix.elements,je=De[14]/(De[10]-1),_t=De[14]/(De[10]+1),T=(De[9]+1)/De[5],Dt=(De[9]-1)/De[5],ot=(De[8]-1)/De[0],lt=(Oe[8]+1)/Oe[0],be=je*ot,Tt=je*lt,Pe=de/(-ot+lt),Fe=Pe*-ot;if(te.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(Fe),j.translateZ(Pe),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),De[10]===-1)j.projectionMatrix.copy(te.projectionMatrix),j.projectionMatrixInverse.copy(te.projectionMatrixInverse);else{let S=je+Pe,y=_t+Pe,B=be-Fe,Y=Tt+(de-Fe),ee=T*_t/y*S,K=Dt*_t/y*S;j.projectionMatrix.makePerspective(B,Y,ee,K,S,y),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function le(j,te){te===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(te.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(r===null)return;let te=j.near,ye=j.far;v.texture!==null&&(v.depthNear>0&&(te=v.depthNear),v.depthFar>0&&(ye=v.depthFar)),_.near=O.near=D.near=te,_.far=O.far=D.far=ye,(A!==_.near||G!==_.far)&&(r.updateRenderState({depthNear:_.near,depthFar:_.far}),A=_.near,G=_.far);let de=j.parent,De=_.cameras;le(_,de);for(let Oe=0;Oe<De.length;Oe++)le(De[Oe],de);De.length===2?H(_,D,O):_.projectionMatrix.copy(D.projectionMatrix),pe(j,_,de)};function pe(j,te,ye){ye===null?j.matrix.copy(te.matrixWorld):(j.matrix.copy(ye.matrixWorld),j.matrix.invert(),j.matrix.multiply(te.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(te.projectionMatrix),j.projectionMatrixInverse.copy(te.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=Hh*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return _},this.getFoveation=function(){if(!(f===null&&h===null))return c},this.setFoveation=function(j){c=j,f!==null&&(f.fixedFoveation=j),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=j)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(_)};let _e=null;function Ye(j,te){if(u=te.getViewerPose(l||o),g=te,u!==null){let ye=u.views;h!==null&&(e.setRenderTargetFramebuffer(b,h.framebuffer),e.setRenderTarget(b));let de=!1;ye.length!==_.cameras.length&&(_.cameras.length=0,de=!0);for(let Oe=0;Oe<ye.length;Oe++){let je=ye[Oe],_t=null;if(h!==null)_t=h.getViewport(je);else{let Dt=d.getViewSubImage(f,je);_t=Dt.viewport,Oe===0&&(e.setRenderTargetTextures(b,Dt.colorTexture,f.ignoreDepthValues?void 0:Dt.depthStencilTexture),e.setRenderTarget(b))}let T=w[Oe];T===void 0&&(T=new tn,T.layers.enable(Oe),T.viewport=new gt,w[Oe]=T),T.matrix.fromArray(je.transform.matrix),T.matrix.decompose(T.position,T.quaternion,T.scale),T.projectionMatrix.fromArray(je.projectionMatrix),T.projectionMatrixInverse.copy(T.projectionMatrix).invert(),T.viewport.set(_t.x,_t.y,_t.width,_t.height),Oe===0&&(_.matrix.copy(T.matrix),_.matrix.decompose(_.position,_.quaternion,_.scale)),de===!0&&_.cameras.push(T)}let De=r.enabledFeatures;if(De&&De.includes("depth-sensing")){let Oe=d.getDepthInformation(ye[0]);Oe&&Oe.isValid&&Oe.texture&&v.init(e,Oe,r.renderState)}}for(let ye=0;ye<M.length;ye++){let de=E[ye],De=M[ye];de!==null&&De!==void 0&&De.update(de,te,l||o)}_e&&_e(j,te),te.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:te}),g=null}let ct=new T_;ct.setAnimationLoop(Ye),this.setAnimationLoop=function(j){_e=j},this.dispose=function(){}}},Tr=new Lr,RP=new Et;function NP(n,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,D_(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function r(m,p,b,M,E){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),d(m,p)):p.isMeshPhongMaterial?(s(m,p),u(m,p)):p.isMeshStandardMaterial?(s(m,p),f(m,p),p.isMeshPhysicalMaterial&&h(m,p,E)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),v(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?c(m,p,b,M):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===pn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===pn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let b=e.get(p),M=b.envMap,E=b.envMapRotation;M&&(m.envMap.value=M,Tr.copy(E),Tr.x*=-1,Tr.y*=-1,Tr.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Tr.y*=-1,Tr.z*=-1),m.envMapRotation.value.setFromMatrix4(RP.makeRotationFromEuler(Tr)),m.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,b,M){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*b,m.scale.value=M*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function h(m,p,b){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===pn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=b.texture,m.transmissionSamplerSize.value.set(b.width,b.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function v(m,p){let b=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(b.matrixWorld),m.nearDistance.value=b.shadow.camera.near,m.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function OP(n,e,t,i){let r={},s={},o=[],a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(b,M){let E=M.program;i.uniformBlockBinding(b,E)}function l(b,M){let E=r[b.id];E===void 0&&(g(b),E=u(b),r[b.id]=E,b.addEventListener("dispose",m));let F=M.program;i.updateUBOMapping(b,F);let C=e.render.frame;s[b.id]!==C&&(f(b),s[b.id]=C)}function u(b){let M=d();b.__bindingPointIndex=M;let E=n.createBuffer(),F=b.__size,C=b.usage;return n.bindBuffer(n.UNIFORM_BUFFER,E),n.bufferData(n.UNIFORM_BUFFER,F,C),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,M,E),E}function d(){for(let b=0;b<a;b++)if(o.indexOf(b)===-1)return o.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(b){let M=r[b.id],E=b.uniforms,F=b.__cache;n.bindBuffer(n.UNIFORM_BUFFER,M);for(let C=0,D=E.length;C<D;C++){let O=Array.isArray(E[C])?E[C]:[E[C]];for(let w=0,_=O.length;w<_;w++){let A=O[w];if(h(A,C,w,F)===!0){let G=A.__offset,z=Array.isArray(A.value)?A.value:[A.value],J=0;for(let Z=0;Z<z.length;Z++){let $=z[Z],Q=v($);typeof $=="number"||typeof $=="boolean"?(A.__data[0]=$,n.bufferSubData(n.UNIFORM_BUFFER,G+J,A.__data)):$.isMatrix3?(A.__data[0]=$.elements[0],A.__data[1]=$.elements[1],A.__data[2]=$.elements[2],A.__data[3]=0,A.__data[4]=$.elements[3],A.__data[5]=$.elements[4],A.__data[6]=$.elements[5],A.__data[7]=0,A.__data[8]=$.elements[6],A.__data[9]=$.elements[7],A.__data[10]=$.elements[8],A.__data[11]=0):($.toArray(A.__data,J),J+=Q.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,G,A.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function h(b,M,E,F){let C=b.value,D=M+"_"+E;if(F[D]===void 0)return typeof C=="number"||typeof C=="boolean"?F[D]=C:F[D]=C.clone(),!0;{let O=F[D];if(typeof C=="number"||typeof C=="boolean"){if(O!==C)return F[D]=C,!0}else if(O.equals(C)===!1)return O.copy(C),!0}return!1}function g(b){let M=b.uniforms,E=0,F=16;for(let D=0,O=M.length;D<O;D++){let w=Array.isArray(M[D])?M[D]:[M[D]];for(let _=0,A=w.length;_<A;_++){let G=w[_],z=Array.isArray(G.value)?G.value:[G.value];for(let J=0,Z=z.length;J<Z;J++){let $=z[J],Q=v($),H=E%F,le=H%Q.boundary,pe=H+le;E+=le,pe!==0&&F-pe<Q.storage&&(E+=F-pe),G.__data=new Float32Array(Q.storage/Float32Array.BYTES_PER_ELEMENT),G.__offset=E,E+=Q.storage}}}let C=E%F;return C>0&&(E+=F-C),b.__size=E,b.__cache={},this}function v(b){let M={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(M.boundary=4,M.storage=4):b.isVector2?(M.boundary=8,M.storage=8):b.isVector3||b.isColor?(M.boundary=16,M.storage=12):b.isVector4?(M.boundary=16,M.storage=16):b.isMatrix3?(M.boundary=48,M.storage=48):b.isMatrix4?(M.boundary=64,M.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),M}function m(b){let M=b.target;M.removeEventListener("dispose",m);let E=o.indexOf(M.__bindingPointIndex);o.splice(E,1),n.deleteBuffer(r[M.id]),delete r[M.id],delete s[M.id]}function p(){for(let b in r)n.deleteBuffer(r[b]);o=[],r={},s={}}return{bind:c,update:l,dispose:p}}var Rl=class{constructor(e={}){let{canvas:t=B1(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let f;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=o;let h=new Uint32Array(4),g=new Int32Array(4),v=null,m=null,p=[],b=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ii,this.toneMapping=Zi,this.toneMappingExposure=1;let M=this,E=!1,F=0,C=0,D=null,O=-1,w=null,_=new gt,A=new gt,G=null,z=new Xe(0),J=0,Z=t.width,$=t.height,Q=1,H=null,le=null,pe=new gt(0,0,Z,$),_e=new gt(0,0,Z,$),Ye=!1,ct=new qo,j=!1,te=!1,ye=new Et,de=new R,De=new gt,Oe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},je=!1;function _t(){return D===null?Q:1}let T=i;function Dt(x,P){return t.getContext(x,P)}try{let x={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${gp}`),t.addEventListener("webglcontextlost",q,!1),t.addEventListener("webglcontextrestored",X,!1),t.addEventListener("webglcontextcreationerror",se,!1),T===null){let P="webgl2";if(T=Dt(P,x),T===null)throw Dt(P)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(x){throw console.error("THREE.WebGLRenderer: "+x.message),x}let ot,lt,be,Tt,Pe,Fe,S,y,B,Y,ee,K,we,ae,fe,ke,ne,ue,Ze,Ie,me,Ne,He,vt;function I(){ot=new JA(T),ot.init(),Ne=new TP(T,ot),lt=new jA(T,ot,e,Ne),be=new SP(T),Tt=new eI(T),Pe=new hP,Fe=new DP(T,ot,be,Pe,lt,Ne,Tt),S=new qA(M),y=new ZA(M),B=new aD(T),He=new GA(T,B),Y=new KA(T,B,Tt,He),ee=new nI(T,Y,B,Tt),Ze=new tI(T,lt,Fe),ke=new $A(Pe),K=new fP(M,S,y,ot,lt,He,ke),we=new NP(M,Pe),ae=new mP,fe=new MP(ot),ue=new HA(M,S,y,be,ee,f,c),ne=new EP(M,ee,lt),vt=new OP(T,Tt,lt,be),Ie=new WA(T,ot,Tt),me=new QA(T,ot,Tt),Tt.programs=K.programs,M.capabilities=lt,M.extensions=ot,M.properties=Pe,M.renderLists=ae,M.shadowMap=ne,M.state=be,M.info=Tt}I();let ie=new rp(M,T);this.xr=ie,this.getContext=function(){return T},this.getContextAttributes=function(){return T.getContextAttributes()},this.forceContextLoss=function(){let x=ot.get("WEBGL_lose_context");x&&x.loseContext()},this.forceContextRestore=function(){let x=ot.get("WEBGL_lose_context");x&&x.restoreContext()},this.getPixelRatio=function(){return Q},this.setPixelRatio=function(x){x!==void 0&&(Q=x,this.setSize(Z,$,!1))},this.getSize=function(x){return x.set(Z,$)},this.setSize=function(x,P,k=!0){if(ie.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Z=x,$=P,t.width=Math.floor(x*Q),t.height=Math.floor(P*Q),k===!0&&(t.style.width=x+"px",t.style.height=P+"px"),this.setViewport(0,0,x,P)},this.getDrawingBufferSize=function(x){return x.set(Z*Q,$*Q).floor()},this.setDrawingBufferSize=function(x,P,k){Z=x,$=P,Q=k,t.width=Math.floor(x*k),t.height=Math.floor(P*k),this.setViewport(0,0,x,P)},this.getCurrentViewport=function(x){return x.copy(_)},this.getViewport=function(x){return x.copy(pe)},this.setViewport=function(x,P,k,U){x.isVector4?pe.set(x.x,x.y,x.z,x.w):pe.set(x,P,k,U),be.viewport(_.copy(pe).multiplyScalar(Q).round())},this.getScissor=function(x){return x.copy(_e)},this.setScissor=function(x,P,k,U){x.isVector4?_e.set(x.x,x.y,x.z,x.w):_e.set(x,P,k,U),be.scissor(A.copy(_e).multiplyScalar(Q).round())},this.getScissorTest=function(){return Ye},this.setScissorTest=function(x){be.setScissorTest(Ye=x)},this.setOpaqueSort=function(x){H=x},this.setTransparentSort=function(x){le=x},this.getClearColor=function(x){return x.copy(ue.getClearColor())},this.setClearColor=function(){ue.setClearColor.apply(ue,arguments)},this.getClearAlpha=function(){return ue.getClearAlpha()},this.setClearAlpha=function(){ue.setClearAlpha.apply(ue,arguments)},this.clear=function(x=!0,P=!0,k=!0){let U=0;if(x){let N=!1;if(D!==null){let re=D.texture.format;N=re===bp||re===Mp||re===xp}if(N){let re=D.texture.type,ce=re===Di||re===Or||re===$o||re===qs||re===yp||re===_p,ge=ue.getClearColor(),ve=ue.getClearAlpha(),Ce=ge.r,Te=ge.g,xe=ge.b;ce?(h[0]=Ce,h[1]=Te,h[2]=xe,h[3]=ve,T.clearBufferuiv(T.COLOR,0,h)):(g[0]=Ce,g[1]=Te,g[2]=xe,g[3]=ve,T.clearBufferiv(T.COLOR,0,g))}else U|=T.COLOR_BUFFER_BIT}P&&(U|=T.DEPTH_BUFFER_BIT),k&&(U|=T.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),T.clear(U)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",q,!1),t.removeEventListener("webglcontextrestored",X,!1),t.removeEventListener("webglcontextcreationerror",se,!1),ae.dispose(),fe.dispose(),Pe.dispose(),S.dispose(),y.dispose(),ee.dispose(),He.dispose(),vt.dispose(),K.dispose(),ie.dispose(),ie.removeEventListener("sessionstart",$n),ie.removeEventListener("sessionend",Lp),nr.stop()};function q(x){x.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function X(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;let x=Tt.autoReset,P=ne.enabled,k=ne.autoUpdate,U=ne.needsUpdate,N=ne.type;I(),Tt.autoReset=x,ne.enabled=P,ne.autoUpdate=k,ne.needsUpdate=U,ne.type=N}function se(x){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",x.statusMessage)}function Se(x){let P=x.target;P.removeEventListener("dispose",Se),Je(P)}function Je(x){At(x),Pe.remove(x)}function At(x){let P=Pe.get(x).programs;P!==void 0&&(P.forEach(function(k){K.releaseProgram(k)}),x.isShaderMaterial&&K.releaseShaderCache(x))}this.renderBufferDirect=function(x,P,k,U,N,re){P===null&&(P=Oe);let ce=N.isMesh&&N.matrixWorld.determinant()<0,ge=fx(x,P,k,U,N);be.setMaterial(U,ce);let ve=k.index,Ce=1;if(U.wireframe===!0){if(ve=Y.getWireframeAttribute(k),ve===void 0)return;Ce=2}let Te=k.drawRange,xe=k.attributes.position,et=Te.start*Ce,xt=(Te.start+Te.count)*Ce;re!==null&&(et=Math.max(et,re.start*Ce),xt=Math.min(xt,(re.start+re.count)*Ce)),ve!==null?(et=Math.max(et,0),xt=Math.min(xt,ve.count)):xe!=null&&(et=Math.max(et,0),xt=Math.min(xt,xe.count));let Mt=xt-et;if(Mt<0||Mt===1/0)return;He.setup(N,U,ge,k,ve);let gn,tt=Ie;if(ve!==null&&(gn=B.get(ve),tt=me,tt.setIndex(gn)),N.isMesh)U.wireframe===!0?(be.setLineWidth(U.wireframeLinewidth*_t()),tt.setMode(T.LINES)):tt.setMode(T.TRIANGLES);else if(N.isLine){let Me=U.linewidth;Me===void 0&&(Me=1),be.setLineWidth(Me*_t()),N.isLineSegments?tt.setMode(T.LINES):N.isLineLoop?tt.setMode(T.LINE_LOOP):tt.setMode(T.LINE_STRIP)}else N.isPoints?tt.setMode(T.POINTS):N.isSprite&&tt.setMode(T.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)tt.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(ot.get("WEBGL_multi_draw"))tt.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{let Me=N._multiDrawStarts,$t=N._multiDrawCounts,nt=N._multiDrawCount,Nn=ve?B.get(ve).bytesPerElement:1,zr=Pe.get(U).currentProgram.getUniforms();for(let vn=0;vn<nt;vn++)zr.setValue(T,"_gl_DrawID",vn),tt.render(Me[vn]/Nn,$t[vn])}else if(N.isInstancedMesh)tt.renderInstances(et,Mt,N.count);else if(k.isInstancedBufferGeometry){let Me=k._maxInstanceCount!==void 0?k._maxInstanceCount:1/0,$t=Math.min(k.instanceCount,Me);tt.renderInstances(et,Mt,$t)}else tt.render(et,Mt)};function jt(x,P,k){x.transparent===!0&&x.side===Ei&&x.forceSinglePass===!1?(x.side=pn,x.needsUpdate=!0,oa(x,P,k),x.side=Ji,x.needsUpdate=!0,oa(x,P,k),x.side=Ei):oa(x,P,k)}this.compile=function(x,P,k=null){k===null&&(k=x),m=fe.get(k),m.init(P),b.push(m),k.traverseVisible(function(N){N.isLight&&N.layers.test(P.layers)&&(m.pushLight(N),N.castShadow&&m.pushShadow(N))}),x!==k&&x.traverseVisible(function(N){N.isLight&&N.layers.test(P.layers)&&(m.pushLight(N),N.castShadow&&m.pushShadow(N))}),m.setupLights();let U=new Set;return x.traverse(function(N){let re=N.material;if(re)if(Array.isArray(re))for(let ce=0;ce<re.length;ce++){let ge=re[ce];jt(ge,k,N),U.add(ge)}else jt(re,k,N),U.add(re)}),b.pop(),m=null,U},this.compileAsync=function(x,P,k=null){let U=this.compile(x,P,k);return new Promise(N=>{function re(){if(U.forEach(function(ce){Pe.get(ce).currentProgram.isReady()&&U.delete(ce)}),U.size===0){N(x);return}setTimeout(re,10)}ot.get("KHR_parallel_shader_compile")!==null?re():setTimeout(re,10)})};let Qe=null;function ai(x){Qe&&Qe(x)}function $n(){nr.stop()}function Lp(){nr.start()}let nr=new T_;nr.setAnimationLoop(ai),typeof self<"u"&&nr.setContext(self),this.setAnimationLoop=function(x){Qe=x,ie.setAnimationLoop(x),x===null?nr.stop():nr.start()},ie.addEventListener("sessionstart",$n),ie.addEventListener("sessionend",Lp),this.render=function(x,P){if(P!==void 0&&P.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;if(x.matrixWorldAutoUpdate===!0&&x.updateMatrixWorld(),P.parent===null&&P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),ie.enabled===!0&&ie.isPresenting===!0&&(ie.cameraAutoUpdate===!0&&ie.updateCamera(P),P=ie.getCamera()),x.isScene===!0&&x.onBeforeRender(M,x,P,D),m=fe.get(x,b.length),m.init(P),b.push(m),ye.multiplyMatrices(P.projectionMatrix,P.matrixWorldInverse),ct.setFromProjectionMatrix(ye),te=this.localClippingEnabled,j=ke.init(this.clippingPlanes,te),v=ae.get(x,p.length),v.init(),p.push(v),ie.enabled===!0&&ie.isPresenting===!0){let re=M.xr.getDepthSensingMesh();re!==null&&ru(re,P,-1/0,M.sortObjects)}ru(x,P,0,M.sortObjects),v.finish(),M.sortObjects===!0&&v.sort(H,le),je=ie.enabled===!1||ie.isPresenting===!1||ie.hasDepthSensing()===!1,je&&ue.addToRenderList(v,x),this.info.render.frame++,j===!0&&ke.beginShadows();let k=m.state.shadowsArray;ne.render(k,x,P),j===!0&&ke.endShadows(),this.info.autoReset===!0&&this.info.reset();let U=v.opaque,N=v.transmissive;if(m.setupLights(),P.isArrayCamera){let re=P.cameras;if(N.length>0)for(let ce=0,ge=re.length;ce<ge;ce++){let ve=re[ce];Up(U,N,x,ve)}je&&ue.render(x);for(let ce=0,ge=re.length;ce<ge;ce++){let ve=re[ce];kp(v,x,ve,ve.viewport)}}else N.length>0&&Up(U,N,x,P),je&&ue.render(x),kp(v,x,P);D!==null&&(Fe.updateMultisampleRenderTarget(D),Fe.updateRenderTargetMipmap(D)),x.isScene===!0&&x.onAfterRender(M,x,P),He.resetDefaultState(),O=-1,w=null,b.pop(),b.length>0?(m=b[b.length-1],j===!0&&ke.setGlobalState(M.clippingPlanes,m.state.camera)):m=null,p.pop(),p.length>0?v=p[p.length-1]:v=null};function ru(x,P,k,U){if(x.visible===!1)return;if(x.layers.test(P.layers)){if(x.isGroup)k=x.renderOrder;else if(x.isLOD)x.autoUpdate===!0&&x.update(P);else if(x.isLight)m.pushLight(x),x.castShadow&&m.pushShadow(x);else if(x.isSprite){if(!x.frustumCulled||ct.intersectsSprite(x)){U&&De.setFromMatrixPosition(x.matrixWorld).applyMatrix4(ye);let ce=ee.update(x),ge=x.material;ge.visible&&v.push(x,ce,ge,k,De.z,null)}}else if((x.isMesh||x.isLine||x.isPoints)&&(!x.frustumCulled||ct.intersectsObject(x))){let ce=ee.update(x),ge=x.material;if(U&&(x.boundingSphere!==void 0?(x.boundingSphere===null&&x.computeBoundingSphere(),De.copy(x.boundingSphere.center)):(ce.boundingSphere===null&&ce.computeBoundingSphere(),De.copy(ce.boundingSphere.center)),De.applyMatrix4(x.matrixWorld).applyMatrix4(ye)),Array.isArray(ge)){let ve=ce.groups;for(let Ce=0,Te=ve.length;Ce<Te;Ce++){let xe=ve[Ce],et=ge[xe.materialIndex];et&&et.visible&&v.push(x,ce,et,k,De.z,xe)}}else ge.visible&&v.push(x,ce,ge,k,De.z,null)}}let re=x.children;for(let ce=0,ge=re.length;ce<ge;ce++)ru(re[ce],P,k,U)}function kp(x,P,k,U){let N=x.opaque,re=x.transmissive,ce=x.transparent;m.setupLightsView(k),j===!0&&ke.setGlobalState(M.clippingPlanes,k),U&&be.viewport(_.copy(U)),N.length>0&&sa(N,P,k),re.length>0&&sa(re,P,k),ce.length>0&&sa(ce,P,k),be.buffers.depth.setTest(!0),be.buffers.depth.setMask(!0),be.buffers.color.setMask(!0),be.setPolygonOffset(!1)}function Up(x,P,k,U){if((k.isScene===!0?k.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[U.id]===void 0&&(m.state.transmissionRenderTarget[U.id]=new Ti(1,1,{generateMipmaps:!0,type:ot.has("EXT_color_buffer_half_float")||ot.has("EXT_color_buffer_float")?Jo:Di,minFilter:Nr,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:st.workingColorSpace}));let re=m.state.transmissionRenderTarget[U.id],ce=U.viewport||_;re.setSize(ce.z,ce.w);let ge=M.getRenderTarget();M.setRenderTarget(re),M.getClearColor(z),J=M.getClearAlpha(),J<1&&M.setClearColor(16777215,.5),M.clear(),je&&ue.render(k);let ve=M.toneMapping;M.toneMapping=Zi;let Ce=U.viewport;if(U.viewport!==void 0&&(U.viewport=void 0),m.setupLightsView(U),j===!0&&ke.setGlobalState(M.clippingPlanes,U),sa(x,k,U),Fe.updateMultisampleRenderTarget(re),Fe.updateRenderTargetMipmap(re),ot.has("WEBGL_multisampled_render_to_texture")===!1){let Te=!1;for(let xe=0,et=P.length;xe<et;xe++){let xt=P[xe],Mt=xt.object,gn=xt.geometry,tt=xt.material,Me=xt.group;if(tt.side===Ei&&Mt.layers.test(U.layers)){let $t=tt.side;tt.side=pn,tt.needsUpdate=!0,Vp(Mt,k,U,gn,tt,Me),tt.side=$t,tt.needsUpdate=!0,Te=!0}}Te===!0&&(Fe.updateMultisampleRenderTarget(re),Fe.updateRenderTargetMipmap(re))}M.setRenderTarget(ge),M.setClearColor(z,J),Ce!==void 0&&(U.viewport=Ce),M.toneMapping=ve}function sa(x,P,k){let U=P.isScene===!0?P.overrideMaterial:null;for(let N=0,re=x.length;N<re;N++){let ce=x[N],ge=ce.object,ve=ce.geometry,Ce=U===null?ce.material:U,Te=ce.group;ge.layers.test(k.layers)&&Vp(ge,P,k,ve,Ce,Te)}}function Vp(x,P,k,U,N,re){x.onBeforeRender(M,P,k,U,N,re),x.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,x.matrixWorld),x.normalMatrix.getNormalMatrix(x.modelViewMatrix),N.onBeforeRender(M,P,k,U,x,re),N.transparent===!0&&N.side===Ei&&N.forceSinglePass===!1?(N.side=pn,N.needsUpdate=!0,M.renderBufferDirect(k,P,U,N,x,re),N.side=Ji,N.needsUpdate=!0,M.renderBufferDirect(k,P,U,N,x,re),N.side=Ei):M.renderBufferDirect(k,P,U,N,x,re),x.onAfterRender(M,P,k,U,N,re)}function oa(x,P,k){P.isScene!==!0&&(P=Oe);let U=Pe.get(x),N=m.state.lights,re=m.state.shadowsArray,ce=N.state.version,ge=K.getParameters(x,N.state,re,P,k),ve=K.getProgramCacheKey(ge),Ce=U.programs;U.environment=x.isMeshStandardMaterial?P.environment:null,U.fog=P.fog,U.envMap=(x.isMeshStandardMaterial?y:S).get(x.envMap||U.environment),U.envMapRotation=U.environment!==null&&x.envMap===null?P.environmentRotation:x.envMapRotation,Ce===void 0&&(x.addEventListener("dispose",Se),Ce=new Map,U.programs=Ce);let Te=Ce.get(ve);if(Te!==void 0){if(U.currentProgram===Te&&U.lightsStateVersion===ce)return zp(x,ge),Te}else ge.uniforms=K.getUniforms(x),x.onBeforeCompile(ge,M),Te=K.acquireProgram(ge,ve),Ce.set(ve,Te),U.uniforms=ge.uniforms;let xe=U.uniforms;return(!x.isShaderMaterial&&!x.isRawShaderMaterial||x.clipping===!0)&&(xe.clippingPlanes=ke.uniform),zp(x,ge),U.needsLights=px(x),U.lightsStateVersion=ce,U.needsLights&&(xe.ambientLightColor.value=N.state.ambient,xe.lightProbe.value=N.state.probe,xe.directionalLights.value=N.state.directional,xe.directionalLightShadows.value=N.state.directionalShadow,xe.spotLights.value=N.state.spot,xe.spotLightShadows.value=N.state.spotShadow,xe.rectAreaLights.value=N.state.rectArea,xe.ltc_1.value=N.state.rectAreaLTC1,xe.ltc_2.value=N.state.rectAreaLTC2,xe.pointLights.value=N.state.point,xe.pointLightShadows.value=N.state.pointShadow,xe.hemisphereLights.value=N.state.hemi,xe.directionalShadowMap.value=N.state.directionalShadowMap,xe.directionalShadowMatrix.value=N.state.directionalShadowMatrix,xe.spotShadowMap.value=N.state.spotShadowMap,xe.spotLightMatrix.value=N.state.spotLightMatrix,xe.spotLightMap.value=N.state.spotLightMap,xe.pointShadowMap.value=N.state.pointShadowMap,xe.pointShadowMatrix.value=N.state.pointShadowMatrix),U.currentProgram=Te,U.uniformsList=null,Te}function Bp(x){if(x.uniformsList===null){let P=x.currentProgram.getUniforms();x.uniformsList=Ws.seqWithValue(P.seq,x.uniforms)}return x.uniformsList}function zp(x,P){let k=Pe.get(x);k.outputColorSpace=P.outputColorSpace,k.batching=P.batching,k.batchingColor=P.batchingColor,k.instancing=P.instancing,k.instancingColor=P.instancingColor,k.instancingMorph=P.instancingMorph,k.skinning=P.skinning,k.morphTargets=P.morphTargets,k.morphNormals=P.morphNormals,k.morphColors=P.morphColors,k.morphTargetsCount=P.morphTargetsCount,k.numClippingPlanes=P.numClippingPlanes,k.numIntersection=P.numClipIntersection,k.vertexAlphas=P.vertexAlphas,k.vertexTangents=P.vertexTangents,k.toneMapping=P.toneMapping}function fx(x,P,k,U,N){P.isScene!==!0&&(P=Oe),Fe.resetTextureUnits();let re=P.fog,ce=U.isMeshStandardMaterial?P.environment:null,ge=D===null?M.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:tr,ve=(U.isMeshStandardMaterial?y:S).get(U.envMap||ce),Ce=U.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,Te=!!k.attributes.tangent&&(!!U.normalMap||U.anisotropy>0),xe=!!k.morphAttributes.position,et=!!k.morphAttributes.normal,xt=!!k.morphAttributes.color,Mt=Zi;U.toneMapped&&(D===null||D.isXRRenderTarget===!0)&&(Mt=M.toneMapping);let gn=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,tt=gn!==void 0?gn.length:0,Me=Pe.get(U),$t=m.state.lights;if(j===!0&&(te===!0||x!==w)){let Sn=x===w&&U.id===O;ke.setState(U,x,Sn)}let nt=!1;U.version===Me.__version?(Me.needsLights&&Me.lightsStateVersion!==$t.state.version||Me.outputColorSpace!==ge||N.isBatchedMesh&&Me.batching===!1||!N.isBatchedMesh&&Me.batching===!0||N.isBatchedMesh&&Me.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&Me.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&Me.instancing===!1||!N.isInstancedMesh&&Me.instancing===!0||N.isSkinnedMesh&&Me.skinning===!1||!N.isSkinnedMesh&&Me.skinning===!0||N.isInstancedMesh&&Me.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&Me.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&Me.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&Me.instancingMorph===!1&&N.morphTexture!==null||Me.envMap!==ve||U.fog===!0&&Me.fog!==re||Me.numClippingPlanes!==void 0&&(Me.numClippingPlanes!==ke.numPlanes||Me.numIntersection!==ke.numIntersection)||Me.vertexAlphas!==Ce||Me.vertexTangents!==Te||Me.morphTargets!==xe||Me.morphNormals!==et||Me.morphColors!==xt||Me.toneMapping!==Mt||Me.morphTargetsCount!==tt)&&(nt=!0):(nt=!0,Me.__version=U.version);let Nn=Me.currentProgram;nt===!0&&(Nn=oa(U,P,N));let zr=!1,vn=!1,su=!1,It=Nn.getUniforms(),Ai=Me.uniforms;if(be.useProgram(Nn.program)&&(zr=!0,vn=!0,su=!0),U.id!==O&&(O=U.id,vn=!0),zr||w!==x){It.setValue(T,"projectionMatrix",x.projectionMatrix),It.setValue(T,"viewMatrix",x.matrixWorldInverse);let Sn=It.map.cameraPosition;Sn!==void 0&&Sn.setValue(T,de.setFromMatrixPosition(x.matrixWorld)),lt.logarithmicDepthBuffer&&It.setValue(T,"logDepthBufFC",2/(Math.log(x.far+1)/Math.LN2)),(U.isMeshPhongMaterial||U.isMeshToonMaterial||U.isMeshLambertMaterial||U.isMeshBasicMaterial||U.isMeshStandardMaterial||U.isShaderMaterial)&&It.setValue(T,"isOrthographic",x.isOrthographicCamera===!0),w!==x&&(w=x,vn=!0,su=!0)}if(N.isSkinnedMesh){It.setOptional(T,N,"bindMatrix"),It.setOptional(T,N,"bindMatrixInverse");let Sn=N.skeleton;Sn&&(Sn.boneTexture===null&&Sn.computeBoneTexture(),It.setValue(T,"boneTexture",Sn.boneTexture,Fe))}N.isBatchedMesh&&(It.setOptional(T,N,"batchingTexture"),It.setValue(T,"batchingTexture",N._matricesTexture,Fe),It.setOptional(T,N,"batchingIdTexture"),It.setValue(T,"batchingIdTexture",N._indirectTexture,Fe),It.setOptional(T,N,"batchingColorTexture"),N._colorsTexture!==null&&It.setValue(T,"batchingColorTexture",N._colorsTexture,Fe));let ou=k.morphAttributes;if((ou.position!==void 0||ou.normal!==void 0||ou.color!==void 0)&&Ze.update(N,k,Nn),(vn||Me.receiveShadow!==N.receiveShadow)&&(Me.receiveShadow=N.receiveShadow,It.setValue(T,"receiveShadow",N.receiveShadow)),U.isMeshGouraudMaterial&&U.envMap!==null&&(Ai.envMap.value=ve,Ai.flipEnvMap.value=ve.isCubeTexture&&ve.isRenderTargetTexture===!1?-1:1),U.isMeshStandardMaterial&&U.envMap===null&&P.environment!==null&&(Ai.envMapIntensity.value=P.environmentIntensity),vn&&(It.setValue(T,"toneMappingExposure",M.toneMappingExposure),Me.needsLights&&hx(Ai,su),re&&U.fog===!0&&we.refreshFogUniforms(Ai,re),we.refreshMaterialUniforms(Ai,U,Q,$,m.state.transmissionRenderTarget[x.id]),Ws.upload(T,Bp(Me),Ai,Fe)),U.isShaderMaterial&&U.uniformsNeedUpdate===!0&&(Ws.upload(T,Bp(Me),Ai,Fe),U.uniformsNeedUpdate=!1),U.isSpriteMaterial&&It.setValue(T,"center",N.center),It.setValue(T,"modelViewMatrix",N.modelViewMatrix),It.setValue(T,"normalMatrix",N.normalMatrix),It.setValue(T,"modelMatrix",N.matrixWorld),U.isShaderMaterial||U.isRawShaderMaterial){let Sn=U.uniformsGroups;for(let au=0,mx=Sn.length;au<mx;au++){let Hp=Sn[au];vt.update(Hp,Nn),vt.bind(Hp,Nn)}}return Nn}function hx(x,P){x.ambientLightColor.needsUpdate=P,x.lightProbe.needsUpdate=P,x.directionalLights.needsUpdate=P,x.directionalLightShadows.needsUpdate=P,x.pointLights.needsUpdate=P,x.pointLightShadows.needsUpdate=P,x.spotLights.needsUpdate=P,x.spotLightShadows.needsUpdate=P,x.rectAreaLights.needsUpdate=P,x.hemisphereLights.needsUpdate=P}function px(x){return x.isMeshLambertMaterial||x.isMeshToonMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isShadowMaterial||x.isShaderMaterial&&x.lights===!0}this.getActiveCubeFace=function(){return F},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return D},this.setRenderTargetTextures=function(x,P,k){Pe.get(x.texture).__webglTexture=P,Pe.get(x.depthTexture).__webglTexture=k;let U=Pe.get(x);U.__hasExternalTextures=!0,U.__autoAllocateDepthBuffer=k===void 0,U.__autoAllocateDepthBuffer||ot.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),U.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(x,P){let k=Pe.get(x);k.__webglFramebuffer=P,k.__useDefaultFramebuffer=P===void 0},this.setRenderTarget=function(x,P=0,k=0){D=x,F=P,C=k;let U=!0,N=null,re=!1,ce=!1;if(x){let ve=Pe.get(x);if(ve.__useDefaultFramebuffer!==void 0)be.bindFramebuffer(T.FRAMEBUFFER,null),U=!1;else if(ve.__webglFramebuffer===void 0)Fe.setupRenderTarget(x);else if(ve.__hasExternalTextures)Fe.rebindTextures(x,Pe.get(x.texture).__webglTexture,Pe.get(x.depthTexture).__webglTexture);else if(x.depthBuffer){let xe=x.depthTexture;if(ve.__boundDepthTexture!==xe){if(xe!==null&&Pe.has(xe)&&(x.width!==xe.image.width||x.height!==xe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Fe.setupDepthRenderbuffer(x)}}let Ce=x.texture;(Ce.isData3DTexture||Ce.isDataArrayTexture||Ce.isCompressedArrayTexture)&&(ce=!0);let Te=Pe.get(x).__webglFramebuffer;x.isWebGLCubeRenderTarget?(Array.isArray(Te[P])?N=Te[P][k]:N=Te[P],re=!0):x.samples>0&&Fe.useMultisampledRTT(x)===!1?N=Pe.get(x).__webglMultisampledFramebuffer:Array.isArray(Te)?N=Te[k]:N=Te,_.copy(x.viewport),A.copy(x.scissor),G=x.scissorTest}else _.copy(pe).multiplyScalar(Q).floor(),A.copy(_e).multiplyScalar(Q).floor(),G=Ye;if(be.bindFramebuffer(T.FRAMEBUFFER,N)&&U&&be.drawBuffers(x,N),be.viewport(_),be.scissor(A),be.setScissorTest(G),re){let ve=Pe.get(x.texture);T.framebufferTexture2D(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_CUBE_MAP_POSITIVE_X+P,ve.__webglTexture,k)}else if(ce){let ve=Pe.get(x.texture),Ce=P||0;T.framebufferTextureLayer(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0,ve.__webglTexture,k||0,Ce)}O=-1},this.readRenderTargetPixels=function(x,P,k,U,N,re,ce){if(!(x&&x.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ge=Pe.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&ce!==void 0&&(ge=ge[ce]),ge){be.bindFramebuffer(T.FRAMEBUFFER,ge);try{let ve=x.texture,Ce=ve.format,Te=ve.type;if(!lt.textureFormatReadable(Ce)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!lt.textureTypeReadable(Te)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}P>=0&&P<=x.width-U&&k>=0&&k<=x.height-N&&T.readPixels(P,k,U,N,Ne.convert(Ce),Ne.convert(Te),re)}finally{let ve=D!==null?Pe.get(D).__webglFramebuffer:null;be.bindFramebuffer(T.FRAMEBUFFER,ve)}}},this.readRenderTargetPixelsAsync=function(x,P,k,U,N,re,ce){return aa(this,null,function*(){if(!(x&&x.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ge=Pe.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&ce!==void 0&&(ge=ge[ce]),ge){be.bindFramebuffer(T.FRAMEBUFFER,ge);try{let ve=x.texture,Ce=ve.format,Te=ve.type;if(!lt.textureFormatReadable(Ce))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!lt.textureTypeReadable(Te))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(P>=0&&P<=x.width-U&&k>=0&&k<=x.height-N){let xe=T.createBuffer();T.bindBuffer(T.PIXEL_PACK_BUFFER,xe),T.bufferData(T.PIXEL_PACK_BUFFER,re.byteLength,T.STREAM_READ),T.readPixels(P,k,U,N,Ne.convert(Ce),Ne.convert(Te),0),T.flush();let et=T.fenceSync(T.SYNC_GPU_COMMANDS_COMPLETE,0);yield z1(T,et,4);try{T.bindBuffer(T.PIXEL_PACK_BUFFER,xe),T.getBufferSubData(T.PIXEL_PACK_BUFFER,0,re)}finally{T.deleteBuffer(xe),T.deleteSync(et)}return re}}finally{let ve=D!==null?Pe.get(D).__webglFramebuffer:null;be.bindFramebuffer(T.FRAMEBUFFER,ve)}}})},this.copyFramebufferToTexture=function(x,P=null,k=0){x.isTexture!==!0&&(Wo("WebGLRenderer: copyFramebufferToTexture function signature has changed."),P=arguments[0]||null,x=arguments[1]);let U=Math.pow(2,-k),N=Math.floor(x.image.width*U),re=Math.floor(x.image.height*U),ce=P!==null?P.x:0,ge=P!==null?P.y:0;Fe.setTexture2D(x,0),T.copyTexSubImage2D(T.TEXTURE_2D,k,0,0,ce,ge,N,re),be.unbindTexture()},this.copyTextureToTexture=function(x,P,k=null,U=null,N=0){x.isTexture!==!0&&(Wo("WebGLRenderer: copyTextureToTexture function signature has changed."),U=arguments[0]||null,x=arguments[1],P=arguments[2],N=arguments[3]||0,k=null);let re,ce,ge,ve,Ce,Te;k!==null?(re=k.max.x-k.min.x,ce=k.max.y-k.min.y,ge=k.min.x,ve=k.min.y):(re=x.image.width,ce=x.image.height,ge=0,ve=0),U!==null?(Ce=U.x,Te=U.y):(Ce=0,Te=0);let xe=Ne.convert(P.format),et=Ne.convert(P.type);Fe.setTexture2D(P,0),T.pixelStorei(T.UNPACK_FLIP_Y_WEBGL,P.flipY),T.pixelStorei(T.UNPACK_PREMULTIPLY_ALPHA_WEBGL,P.premultiplyAlpha),T.pixelStorei(T.UNPACK_ALIGNMENT,P.unpackAlignment);let xt=T.getParameter(T.UNPACK_ROW_LENGTH),Mt=T.getParameter(T.UNPACK_IMAGE_HEIGHT),gn=T.getParameter(T.UNPACK_SKIP_PIXELS),tt=T.getParameter(T.UNPACK_SKIP_ROWS),Me=T.getParameter(T.UNPACK_SKIP_IMAGES),$t=x.isCompressedTexture?x.mipmaps[N]:x.image;T.pixelStorei(T.UNPACK_ROW_LENGTH,$t.width),T.pixelStorei(T.UNPACK_IMAGE_HEIGHT,$t.height),T.pixelStorei(T.UNPACK_SKIP_PIXELS,ge),T.pixelStorei(T.UNPACK_SKIP_ROWS,ve),x.isDataTexture?T.texSubImage2D(T.TEXTURE_2D,N,Ce,Te,re,ce,xe,et,$t.data):x.isCompressedTexture?T.compressedTexSubImage2D(T.TEXTURE_2D,N,Ce,Te,$t.width,$t.height,xe,$t.data):T.texSubImage2D(T.TEXTURE_2D,N,Ce,Te,re,ce,xe,et,$t),T.pixelStorei(T.UNPACK_ROW_LENGTH,xt),T.pixelStorei(T.UNPACK_IMAGE_HEIGHT,Mt),T.pixelStorei(T.UNPACK_SKIP_PIXELS,gn),T.pixelStorei(T.UNPACK_SKIP_ROWS,tt),T.pixelStorei(T.UNPACK_SKIP_IMAGES,Me),N===0&&P.generateMipmaps&&T.generateMipmap(T.TEXTURE_2D),be.unbindTexture()},this.copyTextureToTexture3D=function(x,P,k=null,U=null,N=0){x.isTexture!==!0&&(Wo("WebGLRenderer: copyTextureToTexture3D function signature has changed."),k=arguments[0]||null,U=arguments[1]||null,x=arguments[2],P=arguments[3],N=arguments[4]||0);let re,ce,ge,ve,Ce,Te,xe,et,xt,Mt=x.isCompressedTexture?x.mipmaps[N]:x.image;k!==null?(re=k.max.x-k.min.x,ce=k.max.y-k.min.y,ge=k.max.z-k.min.z,ve=k.min.x,Ce=k.min.y,Te=k.min.z):(re=Mt.width,ce=Mt.height,ge=Mt.depth,ve=0,Ce=0,Te=0),U!==null?(xe=U.x,et=U.y,xt=U.z):(xe=0,et=0,xt=0);let gn=Ne.convert(P.format),tt=Ne.convert(P.type),Me;if(P.isData3DTexture)Fe.setTexture3D(P,0),Me=T.TEXTURE_3D;else if(P.isDataArrayTexture||P.isCompressedArrayTexture)Fe.setTexture2DArray(P,0),Me=T.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}T.pixelStorei(T.UNPACK_FLIP_Y_WEBGL,P.flipY),T.pixelStorei(T.UNPACK_PREMULTIPLY_ALPHA_WEBGL,P.premultiplyAlpha),T.pixelStorei(T.UNPACK_ALIGNMENT,P.unpackAlignment);let $t=T.getParameter(T.UNPACK_ROW_LENGTH),nt=T.getParameter(T.UNPACK_IMAGE_HEIGHT),Nn=T.getParameter(T.UNPACK_SKIP_PIXELS),zr=T.getParameter(T.UNPACK_SKIP_ROWS),vn=T.getParameter(T.UNPACK_SKIP_IMAGES);T.pixelStorei(T.UNPACK_ROW_LENGTH,Mt.width),T.pixelStorei(T.UNPACK_IMAGE_HEIGHT,Mt.height),T.pixelStorei(T.UNPACK_SKIP_PIXELS,ve),T.pixelStorei(T.UNPACK_SKIP_ROWS,Ce),T.pixelStorei(T.UNPACK_SKIP_IMAGES,Te),x.isDataTexture||x.isData3DTexture?T.texSubImage3D(Me,N,xe,et,xt,re,ce,ge,gn,tt,Mt.data):P.isCompressedArrayTexture?T.compressedTexSubImage3D(Me,N,xe,et,xt,re,ce,ge,gn,Mt.data):T.texSubImage3D(Me,N,xe,et,xt,re,ce,ge,gn,tt,Mt),T.pixelStorei(T.UNPACK_ROW_LENGTH,$t),T.pixelStorei(T.UNPACK_IMAGE_HEIGHT,nt),T.pixelStorei(T.UNPACK_SKIP_PIXELS,Nn),T.pixelStorei(T.UNPACK_SKIP_ROWS,zr),T.pixelStorei(T.UNPACK_SKIP_IMAGES,vn),N===0&&P.generateMipmaps&&T.generateMipmap(Me),be.unbindTexture()},this.initRenderTarget=function(x){Pe.get(x).__webglFramebuffer===void 0&&Fe.setupRenderTarget(x)},this.initTexture=function(x){x.isCubeTexture?Fe.setTextureCube(x,0):x.isData3DTexture?Fe.setTexture3D(x,0):x.isDataArrayTexture||x.isCompressedArrayTexture?Fe.setTexture2DArray(x,0):Fe.setTexture2D(x,0),be.unbindTexture()},this.resetState=function(){F=0,C=0,D=null,be.reset(),He.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ci}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=e===wp?"display-p3":"srgb",t.unpackColorSpace=st.workingColorSpace===ql?"display-p3":"srgb"}};var Nl=class n{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new Xe(e),this.near=t,this.far=i}clone(){return new n(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Ol=class extends si{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Lr,this.environmentIntensity=1,this.environmentRotation=new Lr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}};var Xo=class extends er{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Xe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},o_=new Et,sp=new Ml,rl=new Ys,sl=new R,Fl=class extends si{constructor(e=new Rn,t=new Xo){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),rl.copy(i.boundingSphere),rl.applyMatrix4(r),rl.radius+=s,e.ray.intersectsSphere(rl)===!1)return;o_.copy(r).invert(),sp.copy(e.ray).applyMatrix4(o_);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=i.index,d=i.attributes.position;if(l!==null){let f=Math.max(0,o.start),h=Math.min(l.count,o.start+o.count);for(let g=f,v=h;g<v;g++){let m=l.getX(g);sl.fromBufferAttribute(d,m),a_(sl,m,c,r,e,t,this)}}else{let f=Math.max(0,o.start),h=Math.min(d.count,o.start+o.count);for(let g=f,v=h;g<v;g++)sl.fromBufferAttribute(d,g),a_(sl,g,c,r,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}};function a_(n,e,t,i,r,s,o){let a=sp.distanceSqToPoint(n);if(a<t){let c=new R;sp.closestPointToPoint(n,c),c.applyMatrix4(i);let l=r.ray.origin.distanceTo(c);if(l<r.near||l>r.far)return;s.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,object:o})}}var Yo=class n extends Rn{constructor(e=[],t=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:r};let s=[],o=[];a(r),l(i),u(),this.setAttribute("position",new cn(s,3)),this.setAttribute("normal",new cn(s.slice(),3)),this.setAttribute("uv",new cn(o,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function a(b){let M=new R,E=new R,F=new R;for(let C=0;C<t.length;C+=3)h(t[C+0],M),h(t[C+1],E),h(t[C+2],F),c(M,E,F,b)}function c(b,M,E,F){let C=F+1,D=[];for(let O=0;O<=C;O++){D[O]=[];let w=b.clone().lerp(E,O/C),_=M.clone().lerp(E,O/C),A=C-O;for(let G=0;G<=A;G++)G===0&&O===C?D[O][G]=w:D[O][G]=w.clone().lerp(_,G/A)}for(let O=0;O<C;O++)for(let w=0;w<2*(C-O)-1;w++){let _=Math.floor(w/2);w%2===0?(f(D[O][_+1]),f(D[O+1][_]),f(D[O][_])):(f(D[O][_+1]),f(D[O+1][_+1]),f(D[O+1][_]))}}function l(b){let M=new R;for(let E=0;E<s.length;E+=3)M.x=s[E+0],M.y=s[E+1],M.z=s[E+2],M.normalize().multiplyScalar(b),s[E+0]=M.x,s[E+1]=M.y,s[E+2]=M.z}function u(){let b=new R;for(let M=0;M<s.length;M+=3){b.x=s[M+0],b.y=s[M+1],b.z=s[M+2];let E=m(b)/2/Math.PI+.5,F=p(b)/Math.PI+.5;o.push(E,1-F)}g(),d()}function d(){for(let b=0;b<o.length;b+=6){let M=o[b+0],E=o[b+2],F=o[b+4],C=Math.max(M,E,F),D=Math.min(M,E,F);C>.9&&D<.1&&(M<.2&&(o[b+0]+=1),E<.2&&(o[b+2]+=1),F<.2&&(o[b+4]+=1))}}function f(b){s.push(b.x,b.y,b.z)}function h(b,M){let E=b*3;M.x=e[E+0],M.y=e[E+1],M.z=e[E+2]}function g(){let b=new R,M=new R,E=new R,F=new R,C=new We,D=new We,O=new We;for(let w=0,_=0;w<s.length;w+=9,_+=6){b.set(s[w+0],s[w+1],s[w+2]),M.set(s[w+3],s[w+4],s[w+5]),E.set(s[w+6],s[w+7],s[w+8]),C.set(o[_+0],o[_+1]),D.set(o[_+2],o[_+3]),O.set(o[_+4],o[_+5]),F.copy(b).add(M).add(E).divideScalar(3);let A=m(F);v(C,_+0,b,A),v(D,_+2,M,A),v(O,_+4,E,A)}}function v(b,M,E,F){F<0&&b.x===1&&(o[M]=b.x-1),E.x===0&&E.z===0&&(o[M]=F/2/Math.PI+.5)}function m(b){return Math.atan2(b.z,-b.x)}function p(b){return Math.atan2(-b.y,Math.sqrt(b.x*b.x+b.z*b.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.vertices,e.indices,e.radius,e.details)}};var Ll=class n extends Yo{constructor(e=1,t=0){let i=(1+Math.sqrt(5))/2,r=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}},kl=class n extends Yo{constructor(e=1,t=0){let i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],r=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,r,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}};var Ul=class n extends Yo{constructor(e=1,t=0){let i=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],r=[2,1,0,0,3,2,1,3,0,2,3,1];super(i,r,e,t),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}},Vl=class n extends Rn{constructor(e=1,t=.4,i=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:r,arc:s},i=Math.floor(i),r=Math.floor(r);let o=[],a=[],c=[],l=[],u=new R,d=new R,f=new R;for(let h=0;h<=i;h++)for(let g=0;g<=r;g++){let v=g/r*s,m=h/i*Math.PI*2;d.x=(e+t*Math.cos(m))*Math.cos(v),d.y=(e+t*Math.cos(m))*Math.sin(v),d.z=t*Math.sin(m),a.push(d.x,d.y,d.z),u.x=e*Math.cos(v),u.y=e*Math.sin(v),f.subVectors(d,u).normalize(),c.push(f.x,f.y,f.z),l.push(g/r),l.push(h/i)}for(let h=1;h<=i;h++)for(let g=1;g<=r;g++){let v=(r+1)*h+g-1,m=(r+1)*(h-1)+g-1,p=(r+1)*(h-1)+g,b=(r+1)*h+g;o.push(v,m,b),o.push(m,p,b)}this.setIndex(o),this.setAttribute("position",new cn(a,3)),this.setAttribute("normal",new cn(c,3)),this.setAttribute("uv",new cn(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var Bl=class extends er{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Xe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Xe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=w_,this.normalScale=new We(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Lr,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};function ol(n,e,t){return!n||!t&&n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function FP(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}var Js=class{constructor(e,t,i,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,r=t[i],s=t[i-1];n:{e:{let o;t:{i:if(!(e<r)){for(let a=i+2;;){if(r===void 0){if(e<s)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(s=r,r=t[++i],e<r)break e}o=t.length;break t}if(!(e>=s)){let a=t[1];e<a&&(i=2,s=a);for(let c=i-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===c)break;if(r=s,s=t[--i-1],e>=s)break e}o=i,i=0;break t}break n}for(;i<o;){let a=i+o>>>1;e<t[a]?o=a:i=a+1}if(r=t[i],s=t[i-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,s,r)}return this.interpolate_(i,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,r=this.valueSize,s=e*r;for(let o=0;o!==r;++o)t[o]=i[s+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},op=class extends Js{constructor(e,t,i,r){super(e,t,i,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:fy,endingEnd:fy}}intervalChanged_(e,t,i){let r=this.parameterPositions,s=e-2,o=e+1,a=r[s],c=r[o];if(a===void 0)switch(this.getSettings_().endingStart){case hy:s=e,a=2*t-i;break;case py:s=r.length-2,a=t+r[s]-r[s+1];break;default:s=e,a=i}if(c===void 0)switch(this.getSettings_().endingEnd){case hy:o=e,c=2*i-t;break;case py:o=1,c=i+r[1]-r[0];break;default:o=e-1,c=t}let l=(i-t)*.5,u=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-i),this._offsetPrev=s*u,this._offsetNext=o*u}interpolate_(e,t,i,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,u=this._offsetPrev,d=this._offsetNext,f=this._weightPrev,h=this._weightNext,g=(i-t)/(r-t),v=g*g,m=v*g,p=-f*m+2*f*v-f*g,b=(1+f)*m+(-1.5-2*f)*v+(-.5+f)*g+1,M=(-1-h)*m+(1.5+h)*v+.5*g,E=h*m-h*v;for(let F=0;F!==a;++F)s[F]=p*o[u+F]+b*o[l+F]+M*o[c+F]+E*o[d+F];return s}},ap=class extends Js{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,u=(i-t)/(r-t),d=1-u;for(let f=0;f!==a;++f)s[f]=o[l+f]*d+o[c+f]*u;return s}},cp=class extends Js{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e){return this.copySampleValue_(e-1)}},jn=class{constructor(e,t,i,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=ol(t,this.TimeBufferType),this.values=ol(i,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:ol(e.times,Array),values:ol(e.values,Array)};let r=e.getInterpolation();r!==e.DefaultInterpolation&&(i.interpolation=r)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new cp(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new ap(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new op(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case hl:t=this.InterpolantFactoryMethodDiscrete;break;case zh:t=this.InterpolantFactoryMethodLinear;break;case Of:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return hl;case this.InterpolantFactoryMethodLinear:return zh;case this.InterpolantFactoryMethodSmooth:return Of}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]*=e}return this}trim(e,t){let i=this.times,r=i.length,s=0,o=r-1;for(;s!==r&&i[s]<e;)++s;for(;o!==-1&&i[o]>t;)--o;if(++o,s!==0||o!==r){s>=o&&(o=Math.max(o,1),s=o-1);let a=this.getValueSize();this.times=i.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,r=this.values,s=i.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){let c=i[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(r!==void 0&&FP(r))for(let a=0,c=r.length;a!==c;++a){let l=r[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),r=this.getInterpolation()===Of,s=e.length-1,o=1;for(let a=1;a<s;++a){let c=!1,l=e[a],u=e[a+1];if(l!==u&&(a!==1||l!==e[0]))if(r)c=!0;else{let d=a*i,f=d-i,h=d+i;for(let g=0;g!==i;++g){let v=t[d+g];if(v!==t[f+g]||v!==t[h+g]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];let d=a*i,f=o*i;for(let h=0;h!==i;++h)t[f+h]=t[d+h]}++o}}if(s>0){e[o]=e[s];for(let a=s*i,c=o*i,l=0;l!==i;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,r=new i(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}};jn.prototype.TimeBufferType=Float32Array;jn.prototype.ValueBufferType=Float32Array;jn.prototype.DefaultInterpolation=zh;var Ur=class extends jn{constructor(e,t,i){super(e,t,i)}};Ur.prototype.ValueTypeName="bool";Ur.prototype.ValueBufferType=Array;Ur.prototype.DefaultInterpolation=hl;Ur.prototype.InterpolantFactoryMethodLinear=void 0;Ur.prototype.InterpolantFactoryMethodSmooth=void 0;var lp=class extends jn{};lp.prototype.ValueTypeName="color";var up=class extends jn{};up.prototype.ValueTypeName="number";var dp=class extends Js{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(i-t)/(r-t),l=e*a;for(let u=l+a;l!==u;l+=4)Qi.slerpFlat(s,0,o,l-a,o,l,c);return s}},zl=class extends jn{InterpolantFactoryMethodLinear(e){return new dp(this.times,this.values,this.getValueSize(),e)}};zl.prototype.ValueTypeName="quaternion";zl.prototype.InterpolantFactoryMethodSmooth=void 0;var Vr=class extends jn{constructor(e,t,i){super(e,t,i)}};Vr.prototype.ValueTypeName="string";Vr.prototype.ValueBufferType=Array;Vr.prototype.DefaultInterpolation=hl;Vr.prototype.InterpolantFactoryMethodLinear=void 0;Vr.prototype.InterpolantFactoryMethodSmooth=void 0;var fp=class extends jn{};fp.prototype.ValueTypeName="vector";var Zo=class extends si{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Xe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}};var ah=new Et,c_=new R,l_=new R,Hl=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new We(512,512),this.map=null,this.mapPass=null,this.matrix=new Et,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new qo,this._frameExtents=new We(1,1),this._viewportCount=1,this._viewports=[new gt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,i=this.matrix;c_.setFromMatrixPosition(e.matrixWorld),t.position.copy(c_),l_.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(l_),t.updateMatrixWorld(),ah.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ah),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(ah)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};var u_=new Et,Ho=new R,ch=new R,hp=class extends Hl{constructor(){super(new tn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new We(4,2),this._viewportCount=6,this._viewports=[new gt(2,1,1,1),new gt(0,1,1,1),new gt(3,1,1,1),new gt(1,1,1,1),new gt(3,0,1,1),new gt(1,0,1,1)],this._cubeDirections=[new R(1,0,0),new R(-1,0,0),new R(0,0,1),new R(0,0,-1),new R(0,1,0),new R(0,-1,0)],this._cubeUps=[new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,0,1),new R(0,0,-1)]}updateMatrices(e,t=0){let i=this.camera,r=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),Ho.setFromMatrixPosition(e.matrixWorld),i.position.copy(Ho),ch.copy(i.position),ch.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(ch),i.updateMatrixWorld(),r.makeTranslation(-Ho.x,-Ho.y,-Ho.z),u_.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(u_)}},Gl=class extends Zo{constructor(e,t,i=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new hp}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},pp=class extends Hl{constructor(){super(new Al(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Wl=class extends Zo{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(si.DEFAULT_UP),this.updateMatrix(),this.target=new si,this.shadow=new pp}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},jl=class extends Zo{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}};var Sp="\\[\\]\\.:\\/",LP=new RegExp("["+Sp+"]","g"),Cp="[^"+Sp+"]",kP="[^"+Sp.replace("\\.","")+"]",UP=/((?:WC+[\/:])*)/.source.replace("WC",Cp),VP=/(WCOD+)?/.source.replace("WCOD",kP),BP=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Cp),zP=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Cp),HP=new RegExp("^"+UP+VP+BP+zP+"$"),GP=["material","materials","bones","map"],mp=class{constructor(e,t,i){let r=i||Ct.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,r=this._bindings[i];r!==void 0&&r.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=i.length;r!==s;++r)i[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},Ct=(()=>{class n{constructor(t,i,r){this.path=i,this.parsedPath=r||n.parseTrackName(i),this.node=n.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,i,r){return t&&t.isAnimationObjectGroup?new n.Composite(t,i,r):new n(t,i,r)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(LP,"")}static parseTrackName(t){let i=HP.exec(t);if(i===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let r={nodeName:i[2],objectName:i[3],objectIndex:i[4],propertyName:i[5],propertyIndex:i[6]},s=r.nodeName&&r.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let o=r.nodeName.substring(s+1);GP.indexOf(o)!==-1&&(r.nodeName=r.nodeName.substring(0,s),r.objectName=o)}if(r.propertyName===null||r.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return r}static findNode(t,i){if(i===void 0||i===""||i==="."||i===-1||i===t.name||i===t.uuid)return t;if(t.skeleton){let r=t.skeleton.getBoneByName(i);if(r!==void 0)return r}if(t.children){let r=function(o){for(let a=0;a<o.length;a++){let c=o[a];if(c.name===i||c.uuid===i)return c;let l=r(c.children);if(l)return l}return null},s=r(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,i){t[i]=this.targetObject[this.propertyName]}_getValue_array(t,i){let r=this.resolvedProperty;for(let s=0,o=r.length;s!==o;++s)t[i++]=r[s]}_getValue_arrayElement(t,i){t[i]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,i){this.resolvedProperty.toArray(t,i)}_setValue_direct(t,i){this.targetObject[this.propertyName]=t[i]}_setValue_direct_setNeedsUpdate(t,i){this.targetObject[this.propertyName]=t[i],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,i){this.targetObject[this.propertyName]=t[i],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,i){let r=this.resolvedProperty;for(let s=0,o=r.length;s!==o;++s)r[s]=t[i++]}_setValue_array_setNeedsUpdate(t,i){let r=this.resolvedProperty;for(let s=0,o=r.length;s!==o;++s)r[s]=t[i++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,i){let r=this.resolvedProperty;for(let s=0,o=r.length;s!==o;++s)r[s]=t[i++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,i){this.resolvedProperty[this.propertyIndex]=t[i]}_setValue_arrayElement_setNeedsUpdate(t,i){this.resolvedProperty[this.propertyIndex]=t[i],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,i){this.resolvedProperty[this.propertyIndex]=t[i],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,i){this.resolvedProperty.fromArray(t,i)}_setValue_fromArray_setNeedsUpdate(t,i){this.resolvedProperty.fromArray(t,i),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,i){this.resolvedProperty.fromArray(t,i),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,i){this.bind(),this.getValue(t,i)}_setValue_unbound(t,i){this.bind(),this.setValue(t,i)}bind(){let t=this.node,i=this.parsedPath,r=i.objectName,s=i.propertyName,o=i.propertyIndex;if(t||(t=n.findNode(this.rootNode,i.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(r){let u=i.objectIndex;switch(r){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let d=0;d<t.length;d++)if(t[d].name===u){u=d;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[r]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[r]}if(u!==void 0){if(t[u]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[u]}}let a=t[s];if(a===void 0){let u=i.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+u+"."+s+" but it wasn't found.",t);return}let c=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?c=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(c=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(o!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[o]!==void 0&&(o=t.morphTargetDictionary[o])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=o}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][c]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}return n.Composite=mp,n})();Ct.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ct.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ct.prototype.GetterByBindingType=[Ct.prototype._getValue_direct,Ct.prototype._getValue_array,Ct.prototype._getValue_arrayElement,Ct.prototype._getValue_toArray];Ct.prototype.SetterByBindingTypeAndVersioning=[[Ct.prototype._setValue_direct,Ct.prototype._setValue_direct_setNeedsUpdate,Ct.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ct.prototype._setValue_array,Ct.prototype._setValue_array_setNeedsUpdate,Ct.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ct.prototype._setValue_arrayElement,Ct.prototype._setValue_arrayElement_setNeedsUpdate,Ct.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ct.prototype._setValue_fromArray,Ct.prototype._setValue_fromArray_setNeedsUpdate,Ct.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var xL=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:gp}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=gp);var jP=["canvas"],N_=(()=>{class n{constructor(){this.zone=Ue(at),this.canvasRef=qt.required("canvas"),this.shards=[],this.rafId=0,this.mx=0,this.my=0,this.scrollY=0,this.listeners=[]}ngAfterViewInit(){this.zone.runOutsideAngular(()=>this.init())}init(){let t=this.canvasRef().nativeElement;this.renderer=new Rl({canvas:t,antialias:!0,alpha:!0}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,1.5)),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.setClearColor(0,0),this.scene=new Ol,this.scene.fog=new Nl(657672,8,30),this.camera=new tn(50,window.innerWidth/window.innerHeight,.1,100),this.camera.position.z=10,this.scene.add(new jl(16777215,.25));let i=new Wl(14723437,1.2);i.position.set(5,4,6),this.scene.add(i);let r=new Gl(13911850,2.5,25);r.position.set(-6,-2,4),this.scene.add(r),this.group=new Xi,this.scene.add(this.group);let s=[new kl(.4,0),new Ll(.35,0),new Vl(.35,.05,8,24),new kr(.7,.1,.5),new Ul(.45,0)];for(let v=0;v<24;v++){let m=s[v%s.length],p=new Bl({color:v%3===0?13911850:v%3===1?14723437:16117734,metalness:.7,roughness:.3,flatShading:!0,transparent:!0,opacity:.85}),b=new En(m,p);b.position.set((Math.random()-.5)*20,(Math.random()-.5)*14,(Math.random()-.5)*12-3),b.rotation.set(Math.random()*Math.PI,Math.random()*Math.PI,Math.random()*Math.PI),b.userData={rx:(Math.random()-.5)*.003,ry:(Math.random()-.5)*.004,rz:(Math.random()-.5)*.002,baseY:b.position.y,phase:Math.random()*Math.PI*2,scale:.6+Math.random()*.8},b.scale.setScalar(b.userData.scale),this.group.add(b),this.shards.push(b)}let o=new Rn,a=400,c=new Float32Array(a*3);for(let v=0;v<a;v++)c[v*3]=(Math.random()-.5)*30,c[v*3+1]=(Math.random()-.5)*20,c[v*3+2]=(Math.random()-.5)*15;o.setAttribute("position",new mn(c,3));let l=new Xo({color:14723437,size:.03,transparent:!0,opacity:.6,sizeAttenuation:!0});this.dust=new Fl(o,l),this.scene.add(this.dust);let u=v=>{this.mx=v.clientX/window.innerWidth-.5,this.my=v.clientY/window.innerHeight-.5},d=()=>{this.scrollY=window.scrollY},f=()=>{!this.camera||!this.renderer||(this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(window.innerWidth,window.innerHeight))};window.addEventListener("mousemove",u),window.addEventListener("scroll",d,{passive:!0}),window.addEventListener("resize",f),this.listeners.push(()=>window.removeEventListener("mousemove",u),()=>window.removeEventListener("scroll",d),()=>window.removeEventListener("resize",f));let h=performance.now(),g=()=>{if(!this.renderer||!this.scene||!this.camera||!this.group)return;let v=(performance.now()-h)/1e3;this.group.rotation.y=this.scrollY*4e-4,this.group.position.y=this.scrollY*.001,this.camera.position.x+=(this.mx*1.5-this.camera.position.x)*.04,this.camera.position.y+=(-this.my*1-this.camera.position.y)*.04,this.camera.lookAt(0,0,0),this.shards.forEach(m=>{m.rotation.x+=m.userData.rx,m.rotation.y+=m.userData.ry,m.rotation.z+=m.userData.rz,m.position.y=m.userData.baseY+Math.sin(v*.5+m.userData.phase)*.3}),this.dust&&(this.dust.rotation.y=v*.02),this.renderer.render(this.scene,this.camera),this.rafId=requestAnimationFrame(g)};this.rafId=requestAnimationFrame(g)}ngOnDestroy(){this.rafId&&cancelAnimationFrame(this.rafId),this.listeners.forEach(t=>t()),this.shards.forEach(t=>{t.geometry.dispose(),t.material.dispose()}),this.dust?.geometry.dispose(),this.dust?.material?.dispose(),this.renderer?.dispose()}static{this.\u0275fac=function(i){return new(i||n)}}static{this.\u0275cmp=Pt({type:n,selectors:[["app-three-scene"]],viewQuery:function(i,r){i&1&&Xt(r.canvasRef,jP,5),i&2&&ni()},standalone:!0,features:[Rt],decls:2,vars:0,consts:[["canvas",""],[1,"bg3d"]],template:function(i,r){i&1&&Ee(0,"canvas",1,0)},styles:["[_nghost-%COMP%]{display:contents}.bg3d[_ngcontent-%COMP%]{position:fixed;inset:0;z-index:0;pointer-events:none;opacity:.55}"],changeDetection:0})}}return n})();var $P=["heroVideo"],qP=["line1"],XP=["line2"],YP=["scriptLine"],ZP=["catchphrase"],O_=(()=>{class n{constructor(){this.heroVideo=qt.required("heroVideo"),this.line1=qt.required("line1"),this.line2=qt.required("line2"),this.scriptLine=qt.required("scriptLine"),this.catchphrase=qt.required("catchphrase")}ngAfterViewInit(){let t=this.heroVideo().nativeElement;t.muted=!0,t.autoplay=!1,t.pause(),t.load();let i=!1,r=!1,s=()=>{!i||!r||(t.currentTime=0,t.play().catch(()=>{}))};t.readyState>=2?i=!0:t.addEventListener("loadeddata",()=>{i=!0,s()},{once:!0}),document.querySelector("app-loader .loader")?.classList.contains("done")?(r=!0,s()):window.addEventListener("loader:done",()=>{r=!0,s()},{once:!0}),this.initTitleReveal()}initTitleReveal(){let t=[this.scriptLine().nativeElement,this.line1().nativeElement,this.line2().nativeElement,this.catchphrase().nativeElement];t.forEach((r,s)=>{r.style.transform="translateY(110%) rotate(2deg)",r.style.display="inline-block",r.style.opacity="0",r.style.transition=`transform 1.2s ${s*.15+2.8}s var(--ease), opacity 1.2s ${s*.15+2.8}s var(--ease)`});let i=()=>{setTimeout(()=>t.forEach(r=>{r.style.transform="translateY(0) rotate(0)",r.style.opacity="1"}),2400)};document.readyState==="complete"?i():window.addEventListener("load",i,{once:!0})}static{this.\u0275fac=function(i){return new(i||n)}}static{this.\u0275cmp=Pt({type:n,selectors:[["app-hero"]],viewQuery:function(i,r){i&1&&(Xt(r.heroVideo,$P,5),Xt(r.line1,qP,5),Xt(r.line2,XP,5),Xt(r.scriptLine,YP,5),Xt(r.catchphrase,ZP,5)),i&2&&ni(5)},standalone:!0,features:[Rt],decls:54,vars:0,consts:[["heroVideo",""],["scriptLine",""],["line1",""],["line2",""],["catchphrase",""],["id","hero",1,"hero"],["autoplay","","muted","","playsinline","","aria-hidden","true",1,"hero-bg"],["src","assets/logos/studio-bg-final.mp4","type","video/mp4"],[1,"hero-overlay"],[1,"hero-content"],[1,"hero-intro-script"],[1,"hero-title"],[1,"line"],[1,"accent"],[1,"hero-mid"],[1,"hero-catchphrase"],[1,"italic"],[1,"hero-bottom"],[1,"hero-bottom-left"],[1,"hero-desc"],[1,"hero-education-box"],[1,"education-header"],[1,"hero-background"],[1,"bg-item"],[1,"bg-label"],[1,"bg-title"],[1,"hero-scroll"],["width","12","height","20","viewBox","0 0 12 20","fill","none"],["d","M6 1V19M6 19L1 14M6 19L11 14","stroke","currentColor"]],template:function(i,r){i&1&&(L(0,"section",5)(1,"video",6,0),Ee(3,"source",7),V(),Ee(4,"div",8),L(5,"div",9)(6,"div",10)(7,"span",null,1),W(9,"Hey I'm"),V()(),L(10,"h1",11)(11,"span",12)(12,"span",null,2),W(14,"Rishabh"),V()(),L(15,"span",12)(16,"span",13,3),W(18,"Sahu"),V()()(),L(19,"div",14)(20,"p",15,4),W(22," Frames that "),L(23,"span",16),W(24,"linger"),V(),W(25," \u2014 stories that "),L(26,"span",13),W(27,"cut."),V()()(),L(28,"div",17)(29,"div",18)(30,"p",19)(31,"b"),W(32,"Visual Artist | Editor | Cinematographer"),V(),Ee(33,"br"),W(34," Bringing 3+ years of hands-on experience in editing, cinematography, VFX, and colour grading, I've worked on many DVCs, lifestyle reels, and travel content for leading brands, integrating AI to elevate both efficiency and creative output. "),V(),L(35,"div",20)(36,"span",21),W(37,"Education"),V(),L(38,"div",22)(39,"div",23)(40,"span",24),W(41,"2020 \u2014 2022"),V(),L(42,"div",25),W(43,"Bachelor of arts in multimedia and mass communication \u2014 St. Andrew's College"),V()(),L(44,"div",23)(45,"span",24),W(46,"2021 \u2014 2022"),V(),L(47,"div",25),W(48,"Filmmaking Diploma \u2014 FX School"),V()()()()(),L(49,"div",26)(50,"span"),W(51,"Scroll"),V(),ki(),L(52,"svg",27),Ee(53,"path",28),V()()()()())},styles:['[_nghost-%COMP%]{display:block}.hero[_ngcontent-%COMP%]{min-height:100vh;position:relative;z-index:1;display:flex;align-items:flex-end;padding:7rem 2.5rem 3rem;overflow:hidden}.hero-bg[_ngcontent-%COMP%]{position:absolute;inset:0;width:100%;height:100%;object-fit:contain;object-position:center top;transform:scale(.88) translate(8%,4%);transform-origin:center top;z-index:0}.hero-overlay[_ngcontent-%COMP%]{position:absolute;inset:0;z-index:2;background:linear-gradient(180deg,#0a09084d,#0a09081a 40%,#0a0908e6);pointer-events:none}.hero-content[_ngcontent-%COMP%]{position:relative;z-index:4;width:100%;max-width:1600px;margin:0 auto}.hero-kicker[_ngcontent-%COMP%]{display:flex;align-items:center;gap:1rem;margin-bottom:4rem;font-family:JetBrains Mono,monospace;font-size:11px;color:#fff;letter-spacing:.4em;text-transform:uppercase}.hero-kicker[_ngcontent-%COMP%]   .accent[_ngcontent-%COMP%]{color:var(--ink)}.hero-kicker[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%]{width:6px;height:6px;border-radius:50%;background:var(--accent);animation:_ngcontent-%COMP%_pulse 2s ease-in-out infinite}@keyframes _ngcontent-%COMP%_pulse{0%,to{opacity:1}50%{opacity:.3}}.hero-intro-script[_ngcontent-%COMP%]{font-family:Allison,cursive;font-size:clamp(3rem,8vw,5.5rem);color:var(--amber);line-height:1;margin-bottom:-1.5rem;margin-left:-.5rem;position:relative;z-index:5;transform-origin:left bottom;rotate:-2deg}.hero-title[_ngcontent-%COMP%]{font-family:Fraunces,serif;font-weight:700;font-size:clamp(3rem,10.5vw,9rem);line-height:.85;letter-spacing:-.06em;text-transform:uppercase;margin-left:-.05em}.hero-title[_ngcontent-%COMP%]   .line[_ngcontent-%COMP%]{display:block;overflow:visible}.hero-title[_ngcontent-%COMP%]   .line[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]{display:inline-block}.hero-title[_ngcontent-%COMP%]   .accent[_ngcontent-%COMP%]{color:var(--ink);-webkit-text-stroke:1px var(--dim);color:transparent}.hero-mid[_ngcontent-%COMP%]{margin-top:2rem;max-width:800px}.hero-catchphrase[_ngcontent-%COMP%]{font-size:clamp(1rem,2.5vw,2rem);line-height:1.2;color:var(--dim);font-weight:300;letter-spacing:-.02em}.hero-catchphrase[_ngcontent-%COMP%]   .italic[_ngcontent-%COMP%]{font-style:italic;color:var(--amber)}.hero-catchphrase[_ngcontent-%COMP%]   .accent[_ngcontent-%COMP%]{color:var(--accent);font-style:italic}.hero-bottom[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:flex-end;margin-top:2rem;gap:3rem;flex-wrap:wrap}.hero-bottom-left[_ngcontent-%COMP%]{flex:1;max-width:600px}.hero-desc[_ngcontent-%COMP%]{font-size:clamp(1rem,1.5vw,1.25rem);line-height:1.6;color:var(--dim);margin-bottom:3.5rem}.hero-desc[_ngcontent-%COMP%]   b[_ngcontent-%COMP%]{color:var(--ink);font-weight:500}.hero-education-box[_ngcontent-%COMP%]{background:#f5efe608;backdrop-filter:blur(20px);border:1px solid rgba(245,239,230,.08);border-radius:12px;padding:1.5rem 2rem;max-width:580px;position:relative;overflow:hidden}.hero-education-box[_ngcontent-%COMP%]:before{content:"";position:absolute;inset:0;background:linear-gradient(135deg,rgba(255,255,255,.03) 0%,transparent 100%);pointer-events:none}.education-header[_ngcontent-%COMP%]{display:block;font-family:JetBrains Mono,monospace;font-size:10px;letter-spacing:.3em;text-transform:uppercase;color:var(--dim);margin-bottom:1.5rem;border-bottom:1px solid rgba(255,255,255,.05);padding-bottom:.75rem}.hero-background[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:1.5rem}.bg-item[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:.25rem}.bg-label[_ngcontent-%COMP%]{font-family:JetBrains Mono,monospace;font-size:8px;letter-spacing:.2em;text-transform:uppercase;color:var(--amber);opacity:.8}.bg-title[_ngcontent-%COMP%]{font-family:Fraunces,serif;font-size:clamp(.9rem,1.2vw,1.05rem);font-weight:300;color:var(--ink);line-height:1.4;letter-spacing:-.01em}.hero-scroll[_ngcontent-%COMP%]{display:flex;align-items:center;gap:1rem;font-family:JetBrains Mono,monospace;font-size:10px;letter-spacing:.3em;text-transform:uppercase;color:var(--dim)}.hero-scroll[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_scrollDown 2s ease-in-out infinite}@keyframes _ngcontent-%COMP%_scrollDown{0%,to{transform:translateY(0);opacity:1}50%{transform:translateY(8px);opacity:.4}}@media (max-width: 900px){.hero[_ngcontent-%COMP%]{padding:6rem 1.25rem 3rem;align-items:center;text-align:center}.hero-content[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center}.hero-kicker[_ngcontent-%COMP%]{justify-content:center;margin-bottom:2rem}.hero-intro-script[_ngcontent-%COMP%]{font-size:3rem;margin-bottom:-.5rem;rotate:0deg;margin-left:0}.hero-title[_ngcontent-%COMP%]{font-size:clamp(3.5rem,18vw,6rem);line-height:.9}.hero-catchphrase[_ngcontent-%COMP%]{font-size:1.25rem;margin-top:1.5rem}.hero-bottom[_ngcontent-%COMP%]{margin-top:1.5rem;justify-content:center}.hero-desc[_ngcontent-%COMP%]{text-align:center;margin-bottom:3rem}.hero-education-box[_ngcontent-%COMP%]{margin:0 auto;text-align:center;width:100%;padding:1.5rem}.education-header[_ngcontent-%COMP%]{margin-bottom:1.5rem}.hero-background[_ngcontent-%COMP%]{align-items:center;gap:1.5rem}}'],changeDetection:0})}}return n})();var JP=["timeline"],KP=["playhead"],QP=()=>[0,1,2,3,4,5,6,7,8,9];function eR(n,e){if(n&1&&(L(0,"div",32),W(1),V()),n&2){let t=e.$implicit;he(),dn(" 00:0",t,":00:00 ")}}function tR(n,e){if(n&1){let t=An();L(0,"div",39),St("mouseenter",function(){let r=Bt(t).$implicit,s=wt(2);return zt(s.activeSkill.set(r))}),L(1,"div",40)(2,"div",41),W(3),V(),Ee(4,"div",42),V()()}if(n&2){let t=e.$implicit,i=wt(2);Lt("active",i.activeSkill()===t),he(3),ft(t.title)}}function nR(n,e){if(n&1&&(L(0,"div",33)(1,"div",34)(2,"div",35),W(3),V(),L(4,"div",36)(5,"span"),W(6,"M"),V(),L(7,"span"),W(8,"S"),V()()(),L(9,"div",37),xn(10,tR,5,3,"div",38),V()()),n&2){let t=e.$implicit;he(3),ft(t.id),he(7),Kt("ngForOf",t.skills)}}function iR(n,e){if(n&1&&(L(0,"span",45),W(1),V()),n&2){let t=e.$implicit;he(),ft(t)}}function rR(n,e){if(n&1&&(L(0,"div",43)(1,"div",29),W(2,"Clip Toolkit:"),V(),xn(3,iR,2,1,"span",44),V()),n&2){let t,i=wt();he(3),Kt("ngForOf",(t=i.activeSkill())==null?null:t.tools)}}function sR(n,e){if(n&1&&Ee(0,"img",46),n&2){let t=e.$implicit;Kt("src",t.icon,pi)("alt",t.name)("title",t.name)}}var F_=(()=>{class n{constructor(){this.zone=Ue(at),this.timeline=qt.required("timeline"),this.playhead=qt.required("playhead"),this.skills=Bi,this.activeSkill=bt(null),this.displayTools=[{name:"After Effects",icon:"assets/logos/ae.png"},{name:"Premiere Pro",icon:"assets/logos/pr.png"},{name:"Photoshop",icon:"assets/logos/ps.png"},{name:"DaVinci Resolve",icon:"assets/logos/dr.png"}],this.tracks=[{id:"V1 Visuals",skills:[ut(it({},Bi[0]),{tools:["Sony FX3","Sony A7S III"]}),Bi[5]]},{id:"V2 Post",skills:[ut(it({},Bi[1]),{tools:["Premiere Pro","DaVinci Resolve","After Effects","Photoshop"]}),ut(it({},Bi[3]),{tools:["DaVinci Resolve","Lightroom"]})]},{id:"V3 Tech",skills:[ut(it({},Bi[2]),{title:"VFX",tools:["After Effects","Mocha"]}),Bi[4]]}]}ngAfterViewInit(){this.zone.runOutsideAngular(()=>{let t=this.timeline().nativeElement,i=this.playhead().nativeElement,r=s=>{let o=t.getBoundingClientRect(),a=s.clientX-o.left;i.style.transform=`translate3d(${a}px, 0, 0)`};t.addEventListener("mousemove",r),this.listener=()=>t.removeEventListener("mousemove",r)})}ngOnDestroy(){this.listener?.()}static{this.\u0275fac=function(i){return new(i||n)}}static{this.\u0275cmp=Pt({type:n,selectors:[["app-skills"]],viewQuery:function(i,r){i&1&&(Xt(r.timeline,JP,5),Xt(r.playhead,KP,5)),i&2&&ni(2)},standalone:!0,features:[Rt],decls:45,vars:11,consts:[["timeline",""],["playhead",""],["id","skills",1,"craft"],[1,"section-head"],[1,"section-num"],[1,"section-title"],[1,"section-num","end"],[1,"nle-layout"],[1,"nle-timeline",3,"mouseleave"],[1,"playhead"],[1,"timeline-ruler"],["class","ruler-mark",4,"ngFor","ngForOf"],[1,"timeline-ruler-spacer",2,"height","1px","background","rgba(245, 239, 230, 0.05)"],[1,"timeline-tracks"],["class","track-row",4,"ngFor","ngForOf"],[1,"nle-monitor"],[1,"monitor-screen"],[1,"monitor-glass"],[1,"monitor-overlay"],[1,"timecode"],[1,"rec-dot"],[1,"monitor-content"],[1,"content-header"],[1,"type-tag"],[1,"monitor-title"],[1,"monitor-desc"],[1,"monitor-footer"],["class","monitor-tools",4,"ngIf"],[1,"master-tools"],[1,"tool-label"],[1,"master-icons"],[3,"src","alt","title",4,"ngFor","ngForOf"],[1,"ruler-mark"],[1,"track-row"],[1,"track-header"],[1,"track-id"],[1,"track-controls"],[1,"track-content"],["class","clip",3,"active","mouseenter",4,"ngFor","ngForOf"],[1,"clip",3,"mouseenter"],[1,"clip-inner"],[1,"clip-label"],[1,"clip-wave"],[1,"monitor-tools"],["class","tool-tag",4,"ngFor","ngForOf"],[1,"tool-tag"],[3,"src","alt","title"]],template:function(i,r){if(i&1){let s=An();L(0,"section",2)(1,"div",3)(2,"div")(3,"div",4),W(4,"\u2014 01 / Skills"),V(),L(5,"h2",5),W(6,"Skills in "),L(7,"em"),W(8,"nutshell."),V()()(),L(9,"div",6),W(10,"Six years"),Ee(11,"br"),W(12,"hands-on"),V()(),L(13,"div",7)(14,"div",8,0),St("mouseleave",function(){return Bt(s),zt(r.activeSkill.set(null))}),Ee(16,"div",9,1),L(18,"div",10),xn(19,eR,2,1,"div",11),V(),Ee(20,"div",12),L(21,"div",13),xn(22,nR,11,2,"div",14),V()(),L(23,"div",15)(24,"div",16),Ee(25,"div",17),L(26,"div",18)(27,"div",19),W(28),V(),Ee(29,"div",20),V(),L(30,"div",21)(31,"div",22)(32,"span",23),W(33),V(),L(34,"h3",24),W(35),V()(),L(36,"p",25),W(37),V(),L(38,"div",26),xn(39,rR,4,1,"div",27),L(40,"div",28)(41,"div",29),W(42,"Master Gear:"),V(),L(43,"div",30),xn(44,sR,1,3,"img",31),V()()()()()()()()}if(i&2){let s,o,a;he(19),Kt("ngForOf",Dv(10,QP)),he(3),Kt("ngForOf",r.tracks),he(6),dn("00:00:",r.activeSkill()&&(s=(s=r.activeSkill())==null||s.num==null||(s=s.num.split("/"))==null||s[1]==null?null:s[1].trim())!==null&&s!==void 0?s:"00",":24"),he(2),Lt("active",r.activeSkill()),he(3),ft(r.activeSkill()?"Source":"No Signal"),he(2),ft((o=(o=r.activeSkill())==null?null:o.title)!==null&&o!==void 0?o:"Select a clip"),he(2),ft(r.activeSkill()?(a=r.activeSkill())==null?null:a.desc:"Hover over the timeline tracks to preview cinematic skills and specialized toolkits."),he(2),Kt("ngIf",r.activeSkill()),he(5),Kt("ngForOf",r.displayTools)}},dependencies:[Ro,Hv,Gv],styles:['[_nghost-%COMP%]{display:block}.craft[_ngcontent-%COMP%]{background:var(--bg)}.section-head[_ngcontent-%COMP%]   .end[_ngcontent-%COMP%]{text-align:right}.section-head[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin-top:1rem}.nle-layout[_ngcontent-%COMP%]{display:flex;gap:2rem;align-items:stretch;margin-bottom:4rem}.nle-monitor[_ngcontent-%COMP%]{position:relative;width:450px;flex-shrink:0;padding:1px;background:linear-gradient(135deg,rgba(245,239,230,.1) 0%,transparent 100%);border-radius:12px;overflow:hidden;display:flex;flex-direction:column}.monitor-screen[_ngcontent-%COMP%]{background:#0d0c0b;border-radius:11px;min-height:180px;flex:1;padding:2.5rem;position:relative;display:flex;flex-direction:column;justify-content:center;overflow:hidden}.monitor-glass[_ngcontent-%COMP%]{position:absolute;inset:0;background:radial-gradient(circle at 70% 30%,rgba(0,255,255,.03) 0%,transparent 50%);border-radius:inherit;pointer-events:none}.monitor-overlay[_ngcontent-%COMP%]{position:absolute;top:1.5rem;left:1.5rem;right:1.5rem;display:flex;justify-content:space-between;align-items:center;font-family:JetBrains Mono,monospace;font-size:11px;letter-spacing:.1em;color:var(--dim)}.rec-dot[_ngcontent-%COMP%]{width:8px;height:8px;background:var(--accent);border-radius:50%;box-shadow:0 0 10px var(--accent)}.monitor-content[_ngcontent-%COMP%]{opacity:.3;transition:all .5s var(--ease);transform:translateY(10px)}.monitor-content.active[_ngcontent-%COMP%]{opacity:1;transform:translateY(0)}.content-header[_ngcontent-%COMP%]{margin-bottom:1.5rem}.content-header[_ngcontent-%COMP%]   .type-tag[_ngcontent-%COMP%]{font-family:JetBrains Mono,monospace;font-size:10px;text-transform:uppercase;color:var(--amber);margin-bottom:.5rem;display:block}.monitor-title[_ngcontent-%COMP%]{font-family:Fraunces,serif;font-size:clamp(1.8rem,3.5vw,2.8rem);font-weight:300;letter-spacing:-.02em}.monitor-desc[_ngcontent-%COMP%]{max-width:700px;color:var(--dim);line-height:1.7;font-size:1rem;margin-bottom:1.5rem}.monitor-footer[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:flex-end;gap:2rem;padding-top:2rem;border-top:1px solid rgba(245,239,230,.05)}.tool-label[_ngcontent-%COMP%]{font-family:JetBrains Mono,monospace;font-size:10px;text-transform:uppercase;color:#444;margin-bottom:.75rem}.monitor-tools[_ngcontent-%COMP%]{flex:1;display:flex;flex-wrap:wrap;gap:.6rem}.monitor-tools[_ngcontent-%COMP%]   .tool-tag[_ngcontent-%COMP%]{background:#f5efe60d;border:1px solid rgba(245,239,230,.1);color:var(--ink);padding:.4rem .8rem;border-radius:4px;font-size:.85rem;font-family:JetBrains Mono,monospace}.master-tools[_ngcontent-%COMP%]{text-align:right}.master-icons[_ngcontent-%COMP%]{display:flex;gap:1rem}.master-icons[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:32px;height:32px;object-fit:contain;filter:grayscale(1) opacity(.4);transition:all .5s var(--ease)}.master-icons[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:hover{filter:grayscale(0) opacity(1)}.nle-timeline[_ngcontent-%COMP%]{flex:1;background:var(--line);border:1px solid rgba(245,239,230,.05);border-radius:8px;padding:15px 0 0;overflow:visible;position:relative}.timeline-ruler[_ngcontent-%COMP%]{height:35px;background:#12110f;border-bottom:1px solid rgba(245,239,230,.1);display:flex;align-items:center;padding:0 0 0 140px;position:relative;z-index:5}.timeline-ruler[_ngcontent-%COMP%]   .ruler-mark[_ngcontent-%COMP%]{flex:1;font-family:JetBrains Mono,monospace;font-size:9px;color:#444;border-left:1px solid #333;padding-left:.5rem;height:100%;display:flex;align-items:center}.timeline-tracks[_ngcontent-%COMP%]{position:relative;padding:1rem 0;background:#0a0908;z-index:1}.playhead[_ngcontent-%COMP%]{position:absolute;top:0;bottom:0;left:0;width:2px;background:#ff4500;z-index:100;pointer-events:none;box-shadow:0 0 15px #ff450080;will-change:transform}.playhead[_ngcontent-%COMP%]:before{content:"";position:absolute;top:0;left:-7px;width:16px;height:16px;background:#ff4500;clip-path:polygon(0 0,100% 0,50% 100%);z-index:101}.track-row[_ngcontent-%COMP%]{display:flex;align-items:center;height:70px;border-bottom:1px solid rgba(0,0,0,.2)}.track-row[_ngcontent-%COMP%]:last-child{border-bottom:none}.track-header[_ngcontent-%COMP%]{width:140px;height:100%;background:#1a1917;border-right:1px solid rgba(0,0,0,.4);padding:0 1rem;display:flex;flex-direction:column;justify-content:center}.track-header[_ngcontent-%COMP%]   .track-id[_ngcontent-%COMP%]{font-family:JetBrains Mono,monospace;font-size:11px;color:var(--dim);margin-bottom:.5rem}.track-header[_ngcontent-%COMP%]   .track-controls[_ngcontent-%COMP%]{display:flex;gap:.4rem}.track-header[_ngcontent-%COMP%]   .track-controls[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:9px;width:14px;height:14px;border:1px solid #333;display:flex;align-items:center;justify-content:center;border-radius:2px;color:#666}.track-content[_ngcontent-%COMP%]{flex:1;display:flex;gap:1rem;padding:0 1rem}.clip[_ngcontent-%COMP%]{flex:1;max-width:300px;height:44px;background:#e0a96d26;border:1px solid rgba(224,169,109,.3);border-radius:4px;cursor:pointer;transition:all .3s var(--ease);position:relative;overflow:hidden}.clip[_ngcontent-%COMP%]   .clip-inner[_ngcontent-%COMP%]{padding:0 .8rem;height:100%;display:flex;align-items:center;justify-content:space-between}.clip[_ngcontent-%COMP%]   .clip-label[_ngcontent-%COMP%]{font-family:JetBrains Mono,monospace;font-size:11px;color:var(--ink);white-space:nowrap}.clip[_ngcontent-%COMP%]   .clip-wave[_ngcontent-%COMP%]{height:50%;width:60px;background:repeating-linear-gradient(90deg,transparent 0,transparent 2px,rgba(224,169,109,.2) 2px,rgba(224,169,109,.2) 4px)}.clip.active[_ngcontent-%COMP%]{background:#e0a96d66;border-color:var(--amber);box-shadow:0 0 15px #e0a96d33;transform:scale(1.02)}.track-row[_ngcontent-%COMP%]:nth-child(2)   .clip[_ngcontent-%COMP%]{background:#00ffff1a;border-color:#00ffff4d}.track-row[_ngcontent-%COMP%]:nth-child(2)   .clip[_ngcontent-%COMP%]   .clip-wave[_ngcontent-%COMP%]{background:repeating-linear-gradient(90deg,transparent 0,transparent 2px,rgba(0,255,255,.2) 2px,rgba(0,255,255,.2) 4px)}.track-row[_ngcontent-%COMP%]:nth-child(2)   .clip.active[_ngcontent-%COMP%]{background:#00ffff4d;border-color:#0ff}.track-row[_ngcontent-%COMP%]:nth-child(3)   .clip[_ngcontent-%COMP%]{background:#8a2be226;border-color:#8a2be24d}.track-row[_ngcontent-%COMP%]:nth-child(3)   .clip[_ngcontent-%COMP%]   .clip-wave[_ngcontent-%COMP%]{background:repeating-linear-gradient(90deg,transparent 0,transparent 2px,rgba(138,43,226,.2) 2px,rgba(138,43,226,.2) 4px)}.track-row[_ngcontent-%COMP%]:nth-child(3)   .clip.active[_ngcontent-%COMP%]{background:#8a2be24d;border-color:#8a2be2}@media (max-width: 1024px){.nle-layout[_ngcontent-%COMP%]{flex-direction:column-reverse}.nle-monitor[_ngcontent-%COMP%]{width:100%;margin-bottom:2rem}}@media (max-width: 900px){.timeline-ruler[_ngcontent-%COMP%]{padding-left:80px}.track-header[_ngcontent-%COMP%]{width:80px}.track-header[_ngcontent-%COMP%]   .track-controls[_ngcontent-%COMP%], .clip-wave[_ngcontent-%COMP%]{display:none}}'],changeDetection:0})}}return n})();var oR=(n,e)=>e.year;function aR(n,e){if(n&1&&(L(0,"div",6)(1,"div",7),W(2),V(),L(3,"div",8),Ee(4,"div",9),V(),L(5,"div",10),W(6),V(),L(7,"div",11),W(8),L(9,"small"),W(10),V()(),L(11,"div",12),W(12),V(),L(13,"div",13),W(14),V()()),n&2){let t=e.$implicit;he(2),ft(t.year),he(4),ft(t.role),he(2),dn(" ",t.place," "),he(2),ft(t.placeDetail),he(2),ft(t.location),he(2),ft(t.reveal)}}var L_=(()=>{class n{constructor(){this.experiences=ty}static{this.\u0275fac=function(i){return new(i||n)}}static{this.\u0275cmp=Pt({type:n,selectors:[["app-experience"]],standalone:!0,features:[Rt],decls:17,vars:0,consts:[["id","experience"],[1,"section-head"],[1,"section-num"],[1,"section-title"],[1,"section-num","end"],[1,"exp-list"],[1,"exp-row"],[1,"exp-year"],[1,"exp-dot-col"],[1,"exp-dot"],[1,"exp-role"],[1,"exp-place"],[1,"exp-loc"],[1,"exp-reveal"]],template:function(i,r){i&1&&(L(0,"section",0)(1,"div",1)(2,"div")(3,"div",2),W(4,"\u2014 02 / Experience"),V(),L(5,"h2",3),W(6,"Rooms I've "),L(7,"em"),W(8,"worked"),V(),W(9," in."),V()(),L(10,"div",4),W(11,"Four"),Ee(12,"br"),W(13,"chapters"),V()(),L(14,"div",5),Ht(15,aR,15,6,"div",6,oR),V()()),i&2&&(he(15),Gt(r.experiences))},styles:['[_nghost-%COMP%]{display:block}.section-head[_ngcontent-%COMP%]   .end[_ngcontent-%COMP%]{text-align:right}.section-head[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin-top:1rem}.exp-list[_ngcontent-%COMP%]{display:flex;flex-direction:column;position:relative;padding-left:2rem}.exp-list[_ngcontent-%COMP%]:before{content:"";position:absolute;left:196px;top:5rem;bottom:5rem;width:1px;background:linear-gradient(180deg,transparent,var(--accent) 5%,var(--accent) 95%,transparent);opacity:.6;z-index:1}.exp-row[_ngcontent-%COMP%]{display:grid;grid-template-columns:120px 40px 1.5fr 2fr 140px;gap:1.5rem;padding:2.5rem 0;border-top:1px solid var(--line);align-items:center;position:relative;transition:all .5s var(--ease)}.exp-row[_ngcontent-%COMP%]:hover{padding-left:1rem;background:#f5efe605}.exp-row[_ngcontent-%COMP%]:hover   .exp-dot[_ngcontent-%COMP%]{background:var(--ink);box-shadow:0 0 20px var(--accent),0 0 40px var(--accent);transform:scale(1.3)}.exp-dot-col[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;position:relative;z-index:2}.exp-dot[_ngcontent-%COMP%]{width:10px;height:10px;border-radius:50%;background:var(--accent);border:2px solid var(--ink);box-shadow:0 0 10px var(--accent);transition:all .4s var(--ease);position:relative}.exp-dot[_ngcontent-%COMP%]:after{content:"";position:absolute;inset:-10px;border-radius:50%;background:var(--accent);opacity:.15;animation:_ngcontent-%COMP%_pulseDot 3s infinite}@keyframes _ngcontent-%COMP%_pulseDot{0%{transform:scale(1);opacity:.2}50%{transform:scale(1.8);opacity:0}to{transform:scale(1);opacity:.2}}.exp-year[_ngcontent-%COMP%]{font-family:JetBrains Mono,monospace;font-size:10px;color:var(--dim);letter-spacing:.1em;text-transform:uppercase}.exp-role[_ngcontent-%COMP%]{font-family:Fraunces,serif;font-weight:300;font-style:italic;font-size:1.6rem;letter-spacing:-.01em;color:var(--ink)}.exp-place[_ngcontent-%COMP%]{font-family:Fraunces,serif;font-weight:400;font-size:1.1rem;color:var(--dim)}.exp-place[_ngcontent-%COMP%]   small[_ngcontent-%COMP%]{display:block;color:var(--accent);font-size:.8rem;margin-top:.4rem;letter-spacing:.05em;text-transform:uppercase}.exp-loc[_ngcontent-%COMP%]{font-family:JetBrains Mono,monospace;font-size:9px;color:var(--dim);letter-spacing:.2em;text-transform:uppercase;text-align:right}.exp-reveal[_ngcontent-%COMP%]{grid-column:3/5;max-height:0;opacity:0;overflow:hidden;transition:all .6s var(--ease);color:var(--dim);font-size:.9rem;line-height:1.7}.exp-row[_ngcontent-%COMP%]:hover   .exp-reveal[_ngcontent-%COMP%]{max-height:200px;opacity:1;padding-top:1.5rem}@media (max-width: 1000px){.exp-list[_ngcontent-%COMP%]:before{display:none}.exp-row[_ngcontent-%COMP%]{grid-template-columns:1fr;gap:1rem;padding:2rem 0}.exp-dot-col[_ngcontent-%COMP%]{display:none}.exp-year[_ngcontent-%COMP%]{order:1}.exp-role[_ngcontent-%COMP%]{order:2;font-size:1.4rem}.exp-place[_ngcontent-%COMP%]{order:3}.exp-loc[_ngcontent-%COMP%]{order:4;text-align:left}.exp-reveal[_ngcontent-%COMP%]{order:5;grid-column:1}}'],changeDetection:0})}}return n})();var cR=["track"],lR=(n,e)=>e.value,uR=(n,e)=>e.title;function dR(n,e){if(n&1){let t=An();L(0,"button",14),St("click",function(){let r=Bt(t).$implicit,s=wt();return zt(s.setFilter(r.value))}),W(1),V()}if(n&2){let t=e.$implicit,i=wt();Lt("active",i.activeFilter()===t.value),he(),dn(" ",t.label," ")}}function fR(n,e){if(n&1){let t=An();L(0,"div",15),St("click",function(){let r=Bt(t),s=r.$implicit,o=r.$index,a=wt();return zt(a.openProject(s,o))}),L(1,"div",16)(2,"div",17),W(3),V(),Ee(4,"div",18)(5,"div",19),V(),L(6,"div",20)(7,"div")(8,"div",21)(9,"em"),W(10),V()(),L(11,"div",22),W(12),V()(),L(13,"div",23),W(14),V()()()}if(n&2){let t=e.$implicit,i=e.$index,r=wt();he(3),dn("P \u2014 ",r.paddedIndex(i),""),he(),Ac("background-image",'url("'+t.img+'")')("background-position",t.imgPosition||"center"),he(6),ft(t.title),he(2),ft(t.brand),he(2),ft(r.categoryLabel(t.cat))}}function hR(n,e){n&1&&Ee(0,"span",31)}function pR(n,e){n&1&&Ee(0,"span",31)}function mR(n,e){if(n&1){let t=An();L(0,"div",24),St("click",function(){Bt(t);let r=wt();return zt(r.closeProject())}),L(1,"button",25),St("click",function(r){return Bt(t),wt().closeProject(),zt(r.stopPropagation())}),ki(),L(2,"svg",26),Ee(3,"path",27),V()(),a0(),L(4,"div",28),St("click",function(r){return Bt(t),zt(r.stopPropagation())}),Ee(5,"div",29),L(6,"div",30),Ht(7,hR,1,0,"span",31,ti),V(),L(9,"div",32),Ee(10,"video",33)(11,"div",34)(12,"div",35)(13,"span",36)(14,"span",37)(15,"span",38)(16,"span",39)(17,"div",40)(18,"div",41),L(19,"div",42),Ee(20,"span",43),V()(),L(21,"div",44),Ht(22,pR,1,0,"span",31,ti),V()()()}if(n&2){let t=e,i=wt();he(7),Gt(i.playerPerfs),he(3),Kt("poster",t.img,pi)("src",t.video||"assets/logos/studio-bg.mp4",pi),he(12),Gt(i.playerPerfs)}}var k_=(()=>{class n{constructor(){this.zone=Ue(at),this.track=qt.required("track"),this.filters=ny,this.activeFilter=bt("all"),this.dragging=bt(!1),this.selected=bt(null),this.selectedIndex=bt(0),this.perfs=Array.from({length:24}),this.playerPerfs=Array.from({length:32}),this.visibleProjects=br(()=>{let t=this.activeFilter();return t==="all"?Rf:Rf.filter(i=>i.cat===t)}),this.current=0,this.isDown=!1,this.startX=0,this.startPos=0,this.cleanups=[]}openProject(t,i){this.dragging()||(this.selected.set(t),this.selectedIndex.set(i),document.body.style.overflow="hidden")}closeProject(){this.selected.set(null),document.body.style.overflow=""}onEscape(){this.selected()&&this.closeProject()}roleFor(t){switch(t){case"cine":return"Cinematographer";case"edit":return"Editor";case"vfx":return"VFX Artist";case"ai":return"AI Integration"}}setFilter(t){this.activeFilter.set(t),this.current=0,queueMicrotask(()=>{let i=this.track().nativeElement;i.style.transform="translateX(0)"})}categoryLabel(t){return iy[t]??t}paddedIndex(t){return String(t+1).padStart(2,"0")}ngAfterViewInit(){this.zone.runOutsideAngular(()=>{this.attachDrag(),window.matchMedia("(max-width: 900px)").matches||this.attachTilt()})}attachDrag(){let t=this.track().nativeElement,i=t.parentElement,r=document.querySelector(".cursor-ring"),s=()=>{t.style.transform=`translateX(${this.current}px)`},o=u=>{this.isDown=!0,this.zone.run(()=>this.dragging.set(!0)),r?.classList.add("drag"),this.startX="touches"in u?u.touches[0].clientX:u.clientX,this.startPos=this.current},a=u=>{if(!this.isDown)return;let d="touches"in u?u.touches[0].clientX:u.clientX;this.current=this.startPos+(d-this.startX);let f=-(t.scrollWidth-t.clientWidth);this.current=Math.max(f,Math.min(0,this.current)),s()},c=()=>{this.isDown=!1,this.zone.run(()=>this.dragging.set(!1)),r?.classList.remove("drag")};t.addEventListener("mousedown",o),t.addEventListener("mousemove",a),window.addEventListener("mouseup",c),t.addEventListener("touchstart",o,{passive:!0}),t.addEventListener("touchmove",a,{passive:!0}),t.addEventListener("touchend",c);let l=u=>{let d=-(t.scrollWidth-t.clientWidth);this.current-=u.deltaY,this.current=Math.max(d,Math.min(0,this.current)),s(),u.preventDefault()};i.addEventListener("wheel",l,{passive:!1}),this.cleanups.push(()=>t.removeEventListener("mousedown",o),()=>t.removeEventListener("mousemove",a),()=>window.removeEventListener("mouseup",c),()=>t.removeEventListener("touchstart",o),()=>t.removeEventListener("touchmove",a),()=>t.removeEventListener("touchend",c),()=>i.removeEventListener("wheel",l))}attachTilt(){let t=i=>{this.track().nativeElement.classList.contains("dragging")||document.querySelectorAll(".gallery-item-inner").forEach(s=>{let o=s.getBoundingClientRect();if(o.width===0)return;let a=o.left+o.width/2,c=o.top+o.height/2,l=(i.clientX-a)/o.width,u=(i.clientY-c)/o.height;if(Math.hypot(l,u)<1){let f=l*12,h=-u*8;s.style.transform=`perspective(1000px) rotateY(${f}deg) rotateX(${h}deg) translateZ(10px)`}else s.style.transform=""})};document.addEventListener("mousemove",t),this.cleanups.push(()=>document.removeEventListener("mousemove",t))}ngOnDestroy(){this.cleanups.forEach(t=>t())}static{this.\u0275fac=function(i){return new(i||n)}}static{this.\u0275cmp=Pt({type:n,selectors:[["app-work"]],viewQuery:function(i,r){i&1&&Xt(r.track,cR,5),i&2&&ni()},hostBindings:function(i,r){i&1&&St("keydown.escape",function(){return r.onEscape()},!1,N0)},standalone:!0,features:[Rt],decls:26,vars:3,consts:[["track",""],["id","work",1,"work"],[1,"work-head"],[1,"section-head"],[1,"section-num"],[1,"section-title"],[1,"section-num","end"],[1,"gallery-filters"],[1,"gallery-filter",3,"active"],[1,"gallery-wrap"],[1,"gallery-track"],["data-cursor","View",1,"gallery-item"],[1,"drag-hint"],[1,"project-modal"],[1,"gallery-filter",3,"click"],["data-cursor","View",1,"gallery-item",3,"click"],[1,"gallery-item-inner"],[1,"gallery-item-num"],[1,"gallery-item-visual"],[1,"gallery-item-shine"],[1,"gallery-item-meta"],[1,"gallery-item-title"],[1,"gallery-item-tag","brand"],[1,"gallery-item-tag"],[1,"project-modal",3,"click"],["type","button","aria-label","Close",1,"modal-close",3,"click"],["width","20","height","20","viewBox","0 0 24 24","fill","none","stroke","currentColor","stroke-width","2"],["d","M18 6 6 18M6 6l12 12"],[1,"modal-player",3,"click"],[1,"player-glow"],[1,"player-strip","top"],[1,"perf"],[1,"player-viewport"],["controls","","autoplay","","playsinline","",3,"poster","src"],[1,"player-grain"],[1,"player-vignette"],[1,"bracket","tl"],[1,"bracket","tr"],[1,"bracket","bl"],[1,"bracket","br"],[1,"letterbox","top"],[1,"letterbox","bottom"],[1,"rec-badge"],[1,"rec-dot"],[1,"player-strip","bottom"]],template:function(i,r){if(i&1&&(L(0,"section",1)(1,"div",2)(2,"div",3)(3,"div")(4,"div",4),W(5,"\u2014 03 / Selected Work"),V(),L(6,"h2",5),W(7,"The "),L(8,"em"),W(9,"reel"),V(),W(10,", fragmented."),V()(),L(11,"div",6),W(12,"250+"),Ee(13,"br"),W(14,"projects delivered"),V()()(),L(15,"div",7),Ht(16,dR,2,3,"button",8,lR),V(),L(18,"div",9)(19,"div",10,0),Ht(21,fR,15,8,"div",11,uR),V()(),L(23,"div",12),W(24,"\u2190 Drag / scroll to explore \u2192"),V()(),xn(25,mR,24,2,"div",13)),i&2){let s;he(16),Gt(r.filters),he(3),Lt("dragging",r.dragging()),he(2),Gt(r.visibleProjects()),he(4),Do((s=r.selected())?25:-1,s)}},styles:['@charset "UTF-8";[_nghost-%COMP%]{display:block}.work[_ngcontent-%COMP%]{padding:3.5rem 0 1.5rem;min-height:100vh;height:100vh;display:flex;flex-direction:column;overflow:hidden}.work-head[_ngcontent-%COMP%]{padding:0 2.5rem;margin-bottom:1.25rem}.section-head[_ngcontent-%COMP%]{border:none;padding:0;margin-bottom:0}.section-head[_ngcontent-%COMP%]   .end[_ngcontent-%COMP%]{text-align:right}.section-head[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin-top:.5rem;font-size:clamp(2rem,4.5vw,3.5rem)}.gallery-filters[_ngcontent-%COMP%]{display:flex;gap:.5rem;padding:0 2.5rem;margin-bottom:1rem;flex-wrap:wrap}.gallery-filter[_ngcontent-%COMP%]{padding:.5rem 1.25rem;border:1px solid var(--line);font-family:JetBrains Mono,monospace;font-size:10px;letter-spacing:.2em;text-transform:uppercase;color:var(--dim);transition:all .3s var(--ease)}.gallery-filter[_ngcontent-%COMP%]:hover{border-color:var(--ink);color:var(--ink)}.gallery-filter.active[_ngcontent-%COMP%]{border-color:var(--accent);color:var(--accent)}.gallery-wrap[_ngcontent-%COMP%]{position:relative;flex:1;min-height:0;overflow:hidden;perspective:1200px}.gallery-track[_ngcontent-%COMP%]{display:flex;gap:2rem;padding:0 2.5rem;height:100%;cursor:grab;will-change:transform;align-items:stretch}.gallery-track.dragging[_ngcontent-%COMP%]{cursor:grabbing}.gallery-item[_ngcontent-%COMP%]{flex:0 0 auto;width:clamp(260px,22vw,340px);height:100%;position:relative;transition:transform .6s var(--ease);transform-style:preserve-3d;will-change:transform;display:flex;flex-direction:column}.gallery-item-inner[_ngcontent-%COMP%]{flex:1;min-height:0;width:100%;position:relative;overflow:hidden;background:var(--line);transform-style:preserve-3d;transition:transform .4s var(--ease),box-shadow .4s var(--ease)}.gallery-item-inner[_ngcontent-%COMP%]:before{content:"";position:absolute;inset:0;z-index:2;background:linear-gradient(180deg,transparent 60%,rgba(10,9,8,.75) 100%);pointer-events:none}.gallery-item[_ngcontent-%COMP%]:hover   .gallery-item-inner[_ngcontent-%COMP%]{box-shadow:0 40px 80px #0009,0 0 0 1px #d4472a4d}.gallery-item-visual[_ngcontent-%COMP%]{position:absolute;inset:0;background-size:cover;background-position:center;transition:transform 1s var(--ease),filter .6s;filter:contrast(1.05)}.gallery-item[_ngcontent-%COMP%]:hover   .gallery-item-visual[_ngcontent-%COMP%]{transform:scale(1.05);filter:contrast(1.15) brightness(1.05)}.gallery-item-shine[_ngcontent-%COMP%]{position:absolute;inset:0;z-index:3;pointer-events:none;background:linear-gradient(105deg,transparent 40%,rgba(224,169,109,.18) 50%,transparent 60%);opacity:0;transition:opacity .4s;mix-blend-mode:screen}.gallery-item[_ngcontent-%COMP%]:hover   .gallery-item-shine[_ngcontent-%COMP%]{opacity:1}.gallery-item-num[_ngcontent-%COMP%]{position:absolute;top:1rem;left:1rem;z-index:3;font-family:JetBrains Mono,monospace;font-size:10px;color:var(--ink);letter-spacing:.2em;mix-blend-mode:difference}.gallery-item-meta[_ngcontent-%COMP%]{padding:.75rem 0 0;min-height:64px;display:flex;justify-content:space-between;align-items:flex-start;gap:1rem}.gallery-item-title[_ngcontent-%COMP%]{font-family:Fraunces,serif;font-weight:400;font-size:1.1rem;letter-spacing:-.01em}.gallery-item-title[_ngcontent-%COMP%]   em[_ngcontent-%COMP%]{font-style:italic;color:var(--amber)}.gallery-item-tag[_ngcontent-%COMP%]{font-family:JetBrains Mono,monospace;font-size:10px;color:var(--dim);letter-spacing:.2em;text-transform:uppercase;white-space:nowrap}.gallery-item-tag.brand[_ngcontent-%COMP%]{margin-top:.4rem}.drag-hint[_ngcontent-%COMP%]{text-align:center;padding:.75rem;font-family:JetBrains Mono,monospace;font-size:10px;color:var(--dim);letter-spacing:.3em;text-transform:uppercase}.gallery-item[_ngcontent-%COMP%]{cursor:pointer}@media (max-width: 900px){.work-head[_ngcontent-%COMP%], .gallery-filters[_ngcontent-%COMP%], .gallery-track[_ngcontent-%COMP%]{padding-left:1.25rem;padding-right:1.25rem}.gallery-track[_ngcontent-%COMP%]{gap:1rem}}.project-modal[_ngcontent-%COMP%]{position:fixed;inset:0;z-index:9000;display:flex;align-items:center;justify-content:center;padding:3rem;background:#050403cc;backdrop-filter:blur(18px) saturate(1.1);-webkit-backdrop-filter:blur(18px) saturate(1.1);animation:_ngcontent-%COMP%_backdropIn .4s var(--ease)}@keyframes _ngcontent-%COMP%_backdropIn{0%{opacity:0}to{opacity:1}}.modal-player[_ngcontent-%COMP%]{position:relative;width:min(1100px,92vw);max-height:90vh;display:flex;flex-direction:column;animation:_ngcontent-%COMP%_playerIn .7s cubic-bezier(.2,.9,.3,1.2)}@keyframes _ngcontent-%COMP%_playerIn{0%{opacity:0;transform:scale(.85);filter:blur(12px)}60%{opacity:1;filter:blur(0)}to{opacity:1;transform:scale(1);filter:blur(0)}}.player-glow[_ngcontent-%COMP%]{position:absolute;inset:-60px;border-radius:24px;background:radial-gradient(ellipse at center,rgba(212,71,42,.25),transparent 60%);filter:blur(40px);pointer-events:none;z-index:-1;animation:_ngcontent-%COMP%_glowPulse 4s ease-in-out infinite}@keyframes _ngcontent-%COMP%_glowPulse{0%,to{opacity:.8;transform:scale(1)}50%{opacity:1;transform:scale(1.04)}}.player-strip[_ngcontent-%COMP%]{display:flex;justify-content:space-between;height:24px;padding:0 6px;background:linear-gradient(180deg,#000,#080706);border-left:1px solid rgba(255,255,255,.05);border-right:1px solid rgba(255,255,255,.05);flex-shrink:0;overflow:hidden}.player-strip.top[_ngcontent-%COMP%]{border-top:1px solid rgba(255,255,255,.05);border-radius:6px 6px 0 0}.player-strip.bottom[_ngcontent-%COMP%]{border-bottom:1px solid rgba(255,255,255,.05);border-radius:0 0 6px 6px}.player-strip[_ngcontent-%COMP%]   .perf[_ngcontent-%COMP%]{width:18px;height:12px;background:#050403;border-radius:2px;border:1px solid rgba(255,255,255,.04);align-self:center;animation:_ngcontent-%COMP%_perfSlideModal 1.6s linear infinite}@keyframes _ngcontent-%COMP%_perfSlideModal{0%{opacity:.35;transform:translate(-5px)}50%{opacity:1}to{opacity:.35;transform:translate(5px)}}.player-viewport[_ngcontent-%COMP%]{position:relative;aspect-ratio:16/9;max-height:76vh;background:#000;overflow:hidden;border-left:1px solid rgba(212,71,42,.15);border-right:1px solid rgba(212,71,42,.15)}.player-viewport[_ngcontent-%COMP%]   video[_ngcontent-%COMP%]{width:100%;height:100%;display:block;object-fit:contain;background:#000}.player-grain[_ngcontent-%COMP%]{position:absolute;inset:-40%;opacity:.08;pointer-events:none;mix-blend-mode:overlay;background-image:repeating-radial-gradient(circle at 20% 30%,#fff9 0,#fff0 2px),repeating-radial-gradient(circle at 70% 80%,#ffffff80 0,#fff0 2px);animation:_ngcontent-%COMP%_playerGrain .7s steps(6) infinite;z-index:2}@keyframes _ngcontent-%COMP%_playerGrain{0%{transform:translate(0)}25%{transform:translate(-3%,2%)}50%{transform:translate(2%,-3%)}75%{transform:translate(-2%,3%)}to{transform:translate(0)}}.player-vignette[_ngcontent-%COMP%]{position:absolute;inset:0;pointer-events:none;background:radial-gradient(ellipse at center,transparent 55%,rgba(0,0,0,.55) 100%);z-index:2}.bracket[_ngcontent-%COMP%]{position:absolute;width:28px;height:28px;border-color:var(--accent);border-style:solid;pointer-events:none;z-index:3;opacity:0;animation:_ngcontent-%COMP%_bracketIn .5s .4s var(--ease) forwards;filter:drop-shadow(0 0 6px rgba(212,71,42,.6))}.bracket.tl[_ngcontent-%COMP%]{top:12px;left:12px;border-width:2px 0 0 2px}.bracket.tr[_ngcontent-%COMP%]{top:12px;right:12px;border-width:2px 2px 0 0}.bracket.bl[_ngcontent-%COMP%]{bottom:12px;left:12px;border-width:0 0 2px 2px}.bracket.br[_ngcontent-%COMP%]{bottom:12px;right:12px;border-width:0 2px 2px 0}@keyframes _ngcontent-%COMP%_bracketIn{0%{opacity:0;transform:scale(1.6)}to{opacity:.9;transform:scale(1)}}.letterbox[_ngcontent-%COMP%]{position:absolute;left:0;right:0;height:50%;background:#000;pointer-events:none;z-index:4}.letterbox.top[_ngcontent-%COMP%]{top:0;animation:_ngcontent-%COMP%_letterboxTop .9s .1s cubic-bezier(.7,0,.2,1) forwards}.letterbox.bottom[_ngcontent-%COMP%]{bottom:0;animation:_ngcontent-%COMP%_letterboxBottom .9s .1s cubic-bezier(.7,0,.2,1) forwards}@keyframes _ngcontent-%COMP%_letterboxTop{0%{transform:translateY(0)}to{transform:translateY(-100%)}}@keyframes _ngcontent-%COMP%_letterboxBottom{0%{transform:translateY(0)}to{transform:translateY(100%)}}.rec-badge[_ngcontent-%COMP%]{position:absolute;top:20px;left:20px;z-index:5;display:flex;align-items:center;gap:.5rem;padding:6px 10px;background:#0a090899;border-radius:20px;backdrop-filter:blur(6px);opacity:0;animation:_ngcontent-%COMP%_fadeIn .5s .7s var(--ease) forwards}.rec-badge[_ngcontent-%COMP%]   .rec-dot[_ngcontent-%COMP%]{width:8px;height:8px;border-radius:50%;background:var(--accent);box-shadow:0 0 10px var(--accent);animation:_ngcontent-%COMP%_recPulse 1.2s ease-in-out infinite}@keyframes _ngcontent-%COMP%_recPulse{0%,to{opacity:1;transform:scale(1)}50%{opacity:.4;transform:scale(.75)}}.modal-close[_ngcontent-%COMP%]{position:absolute;top:1.25rem;right:1.25rem;z-index:9010;width:48px;height:48px;border-radius:50%;background:#0a0908b3;border:1px solid rgba(212,71,42,.3);backdrop-filter:blur(8px);box-shadow:0 0 20px #d4472a26;color:var(--ink);cursor:pointer;display:flex;align-items:center;justify-content:center;transition:all .3s var(--ease);animation:_ngcontent-%COMP%_fadeIn .5s .6s var(--ease) backwards}.modal-close[_ngcontent-%COMP%]:before{content:"";position:absolute;inset:-4px;border-radius:50%;border:1px solid rgba(212,71,42,.25);animation:_ngcontent-%COMP%_closeRing 2s ease-in-out infinite}.modal-close[_ngcontent-%COMP%]:hover{border-color:var(--accent);color:var(--accent);background:#0a0908e6;transform:rotate(90deg) scale(1.08);box-shadow:0 0 30px #d4472a59}@keyframes _ngcontent-%COMP%_closeRing{0%,to{transform:scale(1);opacity:.8}50%{transform:scale(1.15);opacity:.2}}@keyframes _ngcontent-%COMP%_fadeIn{0%{opacity:0}to{opacity:1}}@media (max-width: 820px){.project-modal[_ngcontent-%COMP%]{padding:1rem}.modal-close[_ngcontent-%COMP%]{top:.75rem;right:.75rem;width:38px;height:38px}}'],changeDetection:0})}}return n})();var $_=(()=>{class n{constructor(t,i){this._renderer=t,this._elementRef=i,this.onChange=r=>{},this.onTouched=()=>{}}setProperty(t,i){this._renderer.setProperty(this._elementRef.nativeElement,t,i)}registerOnTouched(t){this.onTouched=t}registerOnChange(t){this.onChange=t}setDisabledState(t){this.setProperty("disabled",t)}static{this.\u0275fac=function(i){return new(i||n)(ht(So),ht(hi))}}static{this.\u0275dir=ln({type:n})}}return n})(),gR=(()=>{class n extends $_{static{this.\u0275fac=(()=>{let t;return function(r){return(t||(t=nf(n)))(r||n)}})()}static{this.\u0275dir=ln({type:n,features:[mi]})}}return n})(),q_=new qe("");var vR={provide:q_,useExisting:yr(()=>nu),multi:!0};function yR(){let n=Ms()?Ms().getUserAgent():"";return/android (\d+)/.test(n.toLowerCase())}var _R=new qe(""),nu=(()=>{class n extends $_{constructor(t,i,r){super(t,i),this._compositionMode=r,this._composing=!1,this._compositionMode==null&&(this._compositionMode=!yR())}writeValue(t){let i=t??"";this.setProperty("value",i)}_handleInput(t){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(t)}_compositionStart(){this._composing=!0}_compositionEnd(t){this._composing=!1,this._compositionMode&&this.onChange(t)}static{this.\u0275fac=function(i){return new(i||n)(ht(So),ht(hi),ht(_R,8))}}static{this.\u0275dir=ln({type:n,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(i,r){i&1&&St("input",function(o){return r._handleInput(o.target.value)})("blur",function(){return r.onTouched()})("compositionstart",function(){return r._compositionStart()})("compositionend",function(o){return r._compositionEnd(o.target.value)})},features:[Ao([vR]),mi]})}}return n})();function xR(n){return n==null||(typeof n=="string"||Array.isArray(n))&&n.length===0}var Tp=new qe(""),X_=new qe("");function MR(n){return xR(n.value)?{required:!0}:null}function U_(n){return null}function Y_(n){return n!=null}function Z_(n){return Io(n)?wu(n):n}function J_(n){let e={};return n.forEach(t=>{e=t!=null?it(it({},e),t):e}),Object.keys(e).length===0?null:e}function K_(n,e){return e.map(t=>t(n))}function bR(n){return!n.validate}function Q_(n){return n.map(e=>bR(e)?e:t=>e.validate(t))}function wR(n){if(!n)return null;let e=n.filter(Y_);return e.length==0?null:function(t){return J_(K_(t,e))}}function Ap(n){return n!=null?wR(Q_(n)):null}function ER(n){if(!n)return null;let e=n.filter(Y_);return e.length==0?null:function(t){let i=K_(t,e).map(Z_);return Eu(i).pipe(or(J_))}}function Ip(n){return n!=null?ER(Q_(n)):null}function V_(n,e){return n===null?[e]:Array.isArray(n)?[...n,e]:[n,e]}function SR(n){return n._rawValidators}function CR(n){return n._rawAsyncValidators}function Dp(n){return n?Array.isArray(n)?n:[n]:[]}function Zl(n,e){return Array.isArray(n)?n.includes(e):n===e}function B_(n,e){let t=Dp(e);return Dp(n).forEach(r=>{Zl(t,r)||t.push(r)}),t}function z_(n,e){return Dp(e).filter(t=>!Zl(n,t))}var Jl=class{constructor(){this._rawValidators=[],this._rawAsyncValidators=[],this._onDestroyCallbacks=[]}get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_setValidators(e){this._rawValidators=e||[],this._composedValidatorFn=Ap(this._rawValidators)}_setAsyncValidators(e){this._rawAsyncValidators=e||[],this._composedAsyncValidatorFn=Ip(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_registerOnDestroy(e){this._onDestroyCallbacks.push(e)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(e=>e()),this._onDestroyCallbacks=[]}reset(e=void 0){this.control&&this.control.reset(e)}hasError(e,t){return this.control?this.control.hasError(e,t):!1}getError(e,t){return this.control?this.control.getError(e,t):null}},to=class extends Jl{get formDirective(){return null}get path(){return null}},ra=class extends Jl{constructor(){super(...arguments),this._parent=null,this.name=null,this.valueAccessor=null}},Kl=class{constructor(e){this._cd=e}get isTouched(){return this._cd?.control?._touched?.(),!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return this._cd?.control?._pristine?.(),!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return this._cd?.control?._status?.(),!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return this._cd?._submitted?.(),!!this._cd?.submitted}},DR={"[class.ng-untouched]":"isUntouched","[class.ng-touched]":"isTouched","[class.ng-pristine]":"isPristine","[class.ng-dirty]":"isDirty","[class.ng-valid]":"isValid","[class.ng-invalid]":"isInvalid","[class.ng-pending]":"isPending"},ok=ut(it({},DR),{"[class.ng-submitted]":"isSubmitted"}),ex=(()=>{class n extends Kl{constructor(t){super(t)}static{this.\u0275fac=function(i){return new(i||n)(ht(ra,2))}}static{this.\u0275dir=ln({type:n,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(i,r){i&2&&Lt("ng-untouched",r.isUntouched)("ng-touched",r.isTouched)("ng-pristine",r.isPristine)("ng-dirty",r.isDirty)("ng-valid",r.isValid)("ng-invalid",r.isInvalid)("ng-pending",r.isPending)},features:[mi]})}}return n})(),tx=(()=>{class n extends Kl{constructor(t){super(t)}static{this.\u0275fac=function(i){return new(i||n)(ht(to,10))}}static{this.\u0275dir=ln({type:n,selectors:[["","formGroupName",""],["","formArrayName",""],["","ngModelGroup",""],["","formGroup",""],["form",3,"ngNoForm",""],["","ngForm",""]],hostVars:16,hostBindings:function(i,r){i&2&&Lt("ng-untouched",r.isUntouched)("ng-touched",r.isTouched)("ng-pristine",r.isPristine)("ng-dirty",r.isDirty)("ng-valid",r.isValid)("ng-invalid",r.isInvalid)("ng-pending",r.isPending)("ng-submitted",r.isSubmitted)},features:[mi]})}}return n})();var Qo="VALID",Yl="INVALID",Qs="PENDING",ea="DISABLED",no=class{},Ql=class extends no{constructor(e,t){super(),this.value=e,this.source=t}},na=class extends no{constructor(e,t){super(),this.pristine=e,this.source=t}},ia=class extends no{constructor(e,t){super(),this.touched=e,this.source=t}},eo=class extends no{constructor(e,t){super(),this.status=e,this.source=t}};function nx(n){return(iu(n)?n.validators:n)||null}function TR(n){return Array.isArray(n)?Ap(n):n||null}function ix(n,e){return(iu(e)?e.asyncValidators:n)||null}function AR(n){return Array.isArray(n)?Ip(n):n||null}function iu(n){return n!=null&&!Array.isArray(n)&&typeof n=="object"}function IR(n,e,t){let i=n.controls;if(!(e?Object.keys(i):i).length)throw new Ve(1e3,"");if(!i[t])throw new Ve(1001,"")}function PR(n,e,t){n._forEachChild((i,r)=>{if(t[r]===void 0)throw new Ve(1002,"")})}var eu=class{constructor(e,t){this._pendingDirty=!1,this._hasOwnPendingAsyncValidator=null,this._pendingTouched=!1,this._onCollectionChange=()=>{},this._parent=null,this._status=br(()=>this.statusReactive()),this.statusReactive=bt(void 0),this._pristine=br(()=>this.pristineReactive()),this.pristineReactive=bt(!0),this._touched=br(()=>this.touchedReactive()),this.touchedReactive=bt(!1),this._events=new qn,this.events=this._events.asObservable(),this._onDisabledChange=[],this._assignValidators(e),this._assignAsyncValidators(t)}get validator(){return this._composedValidatorFn}set validator(e){this._rawValidators=this._composedValidatorFn=e}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(e){this._rawAsyncValidators=this._composedAsyncValidatorFn=e}get parent(){return this._parent}get status(){return gi(this.statusReactive)}set status(e){gi(()=>this.statusReactive.set(e))}get valid(){return this.status===Qo}get invalid(){return this.status===Yl}get pending(){return this.status==Qs}get disabled(){return this.status===ea}get enabled(){return this.status!==ea}get pristine(){return gi(this.pristineReactive)}set pristine(e){gi(()=>this.pristineReactive.set(e))}get dirty(){return!this.pristine}get touched(){return gi(this.touchedReactive)}set touched(e){gi(()=>this.touchedReactive.set(e))}get untouched(){return!this.touched}get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(e){this._assignValidators(e)}setAsyncValidators(e){this._assignAsyncValidators(e)}addValidators(e){this.setValidators(B_(e,this._rawValidators))}addAsyncValidators(e){this.setAsyncValidators(B_(e,this._rawAsyncValidators))}removeValidators(e){this.setValidators(z_(e,this._rawValidators))}removeAsyncValidators(e){this.setAsyncValidators(z_(e,this._rawAsyncValidators))}hasValidator(e){return Zl(this._rawValidators,e)}hasAsyncValidator(e){return Zl(this._rawAsyncValidators,e)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(e={}){let t=this.touched===!1;this.touched=!0;let i=e.sourceControl??this;this._parent&&!e.onlySelf&&this._parent.markAsTouched(ut(it({},e),{sourceControl:i})),t&&e.emitEvent!==!1&&this._events.next(new ia(!0,i))}markAllAsTouched(e={}){this.markAsTouched({onlySelf:!0,emitEvent:e.emitEvent,sourceControl:this}),this._forEachChild(t=>t.markAllAsTouched(e))}markAsUntouched(e={}){let t=this.touched===!0;this.touched=!1,this._pendingTouched=!1;let i=e.sourceControl??this;this._forEachChild(r=>{r.markAsUntouched({onlySelf:!0,emitEvent:e.emitEvent,sourceControl:i})}),this._parent&&!e.onlySelf&&this._parent._updateTouched(e,i),t&&e.emitEvent!==!1&&this._events.next(new ia(!1,i))}markAsDirty(e={}){let t=this.pristine===!0;this.pristine=!1;let i=e.sourceControl??this;this._parent&&!e.onlySelf&&this._parent.markAsDirty(ut(it({},e),{sourceControl:i})),t&&e.emitEvent!==!1&&this._events.next(new na(!1,i))}markAsPristine(e={}){let t=this.pristine===!1;this.pristine=!0,this._pendingDirty=!1;let i=e.sourceControl??this;this._forEachChild(r=>{r.markAsPristine({onlySelf:!0,emitEvent:e.emitEvent})}),this._parent&&!e.onlySelf&&this._parent._updatePristine(e,i),t&&e.emitEvent!==!1&&this._events.next(new na(!0,i))}markAsPending(e={}){this.status=Qs;let t=e.sourceControl??this;e.emitEvent!==!1&&(this._events.next(new eo(this.status,t)),this.statusChanges.emit(this.status)),this._parent&&!e.onlySelf&&this._parent.markAsPending(ut(it({},e),{sourceControl:t}))}disable(e={}){let t=this._parentMarkedDirty(e.onlySelf);this.status=ea,this.errors=null,this._forEachChild(r=>{r.disable(ut(it({},e),{onlySelf:!0}))}),this._updateValue();let i=e.sourceControl??this;e.emitEvent!==!1&&(this._events.next(new Ql(this.value,i)),this._events.next(new eo(this.status,i)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(ut(it({},e),{skipPristineCheck:t}),this),this._onDisabledChange.forEach(r=>r(!0))}enable(e={}){let t=this._parentMarkedDirty(e.onlySelf);this.status=Qo,this._forEachChild(i=>{i.enable(ut(it({},e),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent}),this._updateAncestors(ut(it({},e),{skipPristineCheck:t}),this),this._onDisabledChange.forEach(i=>i(!1))}_updateAncestors(e,t){this._parent&&!e.onlySelf&&(this._parent.updateValueAndValidity(e),e.skipPristineCheck||this._parent._updatePristine({},t),this._parent._updateTouched({},t))}setParent(e){this._parent=e}getRawValue(){return this.value}updateValueAndValidity(e={}){if(this._setInitialStatus(),this._updateValue(),this.enabled){let i=this._cancelExistingSubscription();this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===Qo||this.status===Qs)&&this._runAsyncValidator(i,e.emitEvent)}let t=e.sourceControl??this;e.emitEvent!==!1&&(this._events.next(new Ql(this.value,t)),this._events.next(new eo(this.status,t)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!e.onlySelf&&this._parent.updateValueAndValidity(ut(it({},e),{sourceControl:t}))}_updateTreeValidity(e={emitEvent:!0}){this._forEachChild(t=>t._updateTreeValidity(e)),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?ea:Qo}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(e,t){if(this.asyncValidator){this.status=Qs,this._hasOwnPendingAsyncValidator={emitEvent:t!==!1};let i=Z_(this.asyncValidator(this));this._asyncValidationSubscription=i.subscribe(r=>{this._hasOwnPendingAsyncValidator=null,this.setErrors(r,{emitEvent:t,shouldHaveEmitted:e})})}}_cancelExistingSubscription(){if(this._asyncValidationSubscription){this._asyncValidationSubscription.unsubscribe();let e=this._hasOwnPendingAsyncValidator?.emitEvent??!1;return this._hasOwnPendingAsyncValidator=null,e}return!1}setErrors(e,t={}){this.errors=e,this._updateControlsErrors(t.emitEvent!==!1,this,t.shouldHaveEmitted)}get(e){let t=e;return t==null||(Array.isArray(t)||(t=t.split(".")),t.length===0)?null:t.reduce((i,r)=>i&&i._find(r),this)}getError(e,t){let i=t?this.get(t):this;return i&&i.errors?i.errors[e]:null}hasError(e,t){return!!this.getError(e,t)}get root(){let e=this;for(;e._parent;)e=e._parent;return e}_updateControlsErrors(e,t,i){this.status=this._calculateStatus(),e&&this.statusChanges.emit(this.status),(e||i)&&this._events.next(new eo(this.status,t)),this._parent&&this._parent._updateControlsErrors(e,t,i)}_initObservables(){this.valueChanges=new sn,this.statusChanges=new sn}_calculateStatus(){return this._allControlsDisabled()?ea:this.errors?Yl:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(Qs)?Qs:this._anyControlsHaveStatus(Yl)?Yl:Qo}_anyControlsHaveStatus(e){return this._anyControls(t=>t.status===e)}_anyControlsDirty(){return this._anyControls(e=>e.dirty)}_anyControlsTouched(){return this._anyControls(e=>e.touched)}_updatePristine(e,t){let i=!this._anyControlsDirty(),r=this.pristine!==i;this.pristine=i,this._parent&&!e.onlySelf&&this._parent._updatePristine(e,t),r&&this._events.next(new na(this.pristine,t))}_updateTouched(e={},t){this.touched=this._anyControlsTouched(),this._events.next(new ia(this.touched,t)),this._parent&&!e.onlySelf&&this._parent._updateTouched(e,t)}_registerOnCollectionChange(e){this._onCollectionChange=e}_setUpdateStrategy(e){iu(e)&&e.updateOn!=null&&(this._updateOn=e.updateOn)}_parentMarkedDirty(e){let t=this._parent&&this._parent.dirty;return!e&&!!t&&!this._parent._anyControlsDirty()}_find(e){return null}_assignValidators(e){this._rawValidators=Array.isArray(e)?e.slice():e,this._composedValidatorFn=TR(this._rawValidators)}_assignAsyncValidators(e){this._rawAsyncValidators=Array.isArray(e)?e.slice():e,this._composedAsyncValidatorFn=AR(this._rawAsyncValidators)}},tu=class extends eu{constructor(e,t,i){super(nx(t),ix(i,t)),this.controls=e,this._initObservables(),this._setUpdateStrategy(t),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}registerControl(e,t){return this.controls[e]?this.controls[e]:(this.controls[e]=t,t.setParent(this),t._registerOnCollectionChange(this._onCollectionChange),t)}addControl(e,t,i={}){this.registerControl(e,t),this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange()}removeControl(e,t={}){this.controls[e]&&this.controls[e]._registerOnCollectionChange(()=>{}),delete this.controls[e],this.updateValueAndValidity({emitEvent:t.emitEvent}),this._onCollectionChange()}setControl(e,t,i={}){this.controls[e]&&this.controls[e]._registerOnCollectionChange(()=>{}),delete this.controls[e],t&&this.registerControl(e,t),this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange()}contains(e){return this.controls.hasOwnProperty(e)&&this.controls[e].enabled}setValue(e,t={}){PR(this,!0,e),Object.keys(e).forEach(i=>{IR(this,!0,i),this.controls[i].setValue(e[i],{onlySelf:!0,emitEvent:t.emitEvent})}),this.updateValueAndValidity(t)}patchValue(e,t={}){e!=null&&(Object.keys(e).forEach(i=>{let r=this.controls[i];r&&r.patchValue(e[i],{onlySelf:!0,emitEvent:t.emitEvent})}),this.updateValueAndValidity(t))}reset(e={},t={}){this._forEachChild((i,r)=>{i.reset(e?e[r]:null,{onlySelf:!0,emitEvent:t.emitEvent})}),this._updatePristine(t,this),this._updateTouched(t,this),this.updateValueAndValidity(t)}getRawValue(){return this._reduceChildren({},(e,t,i)=>(e[i]=t.getRawValue(),e))}_syncPendingControls(){let e=this._reduceChildren(!1,(t,i)=>i._syncPendingControls()?!0:t);return e&&this.updateValueAndValidity({onlySelf:!0}),e}_forEachChild(e){Object.keys(this.controls).forEach(t=>{let i=this.controls[t];i&&e(i,t)})}_setUpControls(){this._forEachChild(e=>{e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(e){for(let[t,i]of Object.entries(this.controls))if(this.contains(t)&&e(i))return!0;return!1}_reduceValue(){let e={};return this._reduceChildren(e,(t,i,r)=>((i.enabled||this.disabled)&&(t[r]=i.value),t))}_reduceChildren(e,t){let i=e;return this._forEachChild((r,s)=>{i=t(i,r,s)}),i}_allControlsDisabled(){for(let e of Object.keys(this.controls))if(this.controls[e].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(e){return this.controls.hasOwnProperty(e)?this.controls[e]:null}};var Pp=new qe("CallSetDisabledState",{providedIn:"root",factory:()=>Rp}),Rp="always";function RR(n,e){return[...e.path,n]}function rx(n,e,t=Rp){sx(n,e),e.valueAccessor.writeValue(n.value),(n.disabled||t==="always")&&e.valueAccessor.setDisabledState?.(n.disabled),OR(n,e),LR(n,e),FR(n,e),NR(n,e)}function H_(n,e){n.forEach(t=>{t.registerOnValidatorChange&&t.registerOnValidatorChange(e)})}function NR(n,e){if(e.valueAccessor.setDisabledState){let t=i=>{e.valueAccessor.setDisabledState(i)};n.registerOnDisabledChange(t),e._registerOnDestroy(()=>{n._unregisterOnDisabledChange(t)})}}function sx(n,e){let t=SR(n);e.validator!==null?n.setValidators(V_(t,e.validator)):typeof t=="function"&&n.setValidators([t]);let i=CR(n);e.asyncValidator!==null?n.setAsyncValidators(V_(i,e.asyncValidator)):typeof i=="function"&&n.setAsyncValidators([i]);let r=()=>n.updateValueAndValidity();H_(e._rawValidators,r),H_(e._rawAsyncValidators,r)}function OR(n,e){e.valueAccessor.registerOnChange(t=>{n._pendingValue=t,n._pendingChange=!0,n._pendingDirty=!0,n.updateOn==="change"&&ox(n,e)})}function FR(n,e){e.valueAccessor.registerOnTouched(()=>{n._pendingTouched=!0,n.updateOn==="blur"&&n._pendingChange&&ox(n,e),n.updateOn!=="submit"&&n.markAsTouched()})}function ox(n,e){n._pendingDirty&&n.markAsDirty(),n.setValue(n._pendingValue,{emitModelToViewChange:!1}),e.viewToModelUpdate(n._pendingValue),n._pendingChange=!1}function LR(n,e){let t=(i,r)=>{e.valueAccessor.writeValue(i),r&&e.viewToModelUpdate(i)};n.registerOnChange(t),e._registerOnDestroy(()=>{n._unregisterOnChange(t)})}function kR(n,e){n==null,sx(n,e)}function UR(n,e){if(!n.hasOwnProperty("model"))return!1;let t=n.model;return t.isFirstChange()?!0:!Object.is(e,t.currentValue)}function VR(n){return Object.getPrototypeOf(n.constructor)===gR}function BR(n,e){n._syncPendingControls(),e.forEach(t=>{let i=t.control;i.updateOn==="submit"&&i._pendingChange&&(t.viewToModelUpdate(i._pendingValue),i._pendingChange=!1)})}function zR(n,e){if(!e)return null;Array.isArray(e);let t,i,r;return e.forEach(s=>{s.constructor===nu?t=s:VR(s)?i=s:r=s}),r||i||t||null}var HR={provide:to,useExisting:yr(()=>Np)},ta=Promise.resolve(),Np=(()=>{class n extends to{get submitted(){return gi(this.submittedReactive)}constructor(t,i,r){super(),this.callSetDisabledState=r,this._submitted=br(()=>this.submittedReactive()),this.submittedReactive=bt(!1),this._directives=new Set,this.ngSubmit=new sn,this.form=new tu({},Ap(t),Ip(i))}ngAfterViewInit(){this._setUpdateStrategy()}get formDirective(){return this}get control(){return this.form}get path(){return[]}get controls(){return this.form.controls}addControl(t){ta.then(()=>{let i=this._findContainer(t.path);t.control=i.registerControl(t.name,t.control),rx(t.control,t,this.callSetDisabledState),t.control.updateValueAndValidity({emitEvent:!1}),this._directives.add(t)})}getControl(t){return this.form.get(t.path)}removeControl(t){ta.then(()=>{let i=this._findContainer(t.path);i&&i.removeControl(t.name),this._directives.delete(t)})}addFormGroup(t){ta.then(()=>{let i=this._findContainer(t.path),r=new tu({});kR(r,t),i.registerControl(t.name,r),r.updateValueAndValidity({emitEvent:!1})})}removeFormGroup(t){ta.then(()=>{let i=this._findContainer(t.path);i&&i.removeControl(t.name)})}getFormGroup(t){return this.form.get(t.path)}updateModel(t,i){ta.then(()=>{this.form.get(t.path).setValue(i)})}setValue(t){this.control.setValue(t)}onSubmit(t){return this.submittedReactive.set(!0),BR(this.form,this._directives),this.ngSubmit.emit(t),t?.target?.method==="dialog"}onReset(){this.resetForm()}resetForm(t=void 0){this.form.reset(t),this.submittedReactive.set(!1)}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.form._updateOn=this.options.updateOn)}_findContainer(t){return t.pop(),t.length?this.form.get(t):this.form}static{this.\u0275fac=function(i){return new(i||n)(ht(Tp,10),ht(X_,10),ht(Pp,8))}}static{this.\u0275dir=ln({type:n,selectors:[["form",3,"ngNoForm","",3,"formGroup",""],["ng-form"],["","ngForm",""]],hostBindings:function(i,r){i&1&&St("submit",function(o){return r.onSubmit(o)})("reset",function(){return r.onReset()})},inputs:{options:[0,"ngFormOptions","options"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],features:[Ao([HR]),mi]})}}return n})();function G_(n,e){let t=n.indexOf(e);t>-1&&n.splice(t,1)}function W_(n){return typeof n=="object"&&n!==null&&Object.keys(n).length===2&&"value"in n&&"disabled"in n}var GR=class extends eu{constructor(e=null,t,i){super(nx(t),ix(i,t)),this.defaultValue=null,this._onChange=[],this._pendingChange=!1,this._applyFormState(e),this._setUpdateStrategy(t),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),iu(t)&&(t.nonNullable||t.initialValueIsDefault)&&(W_(e)?this.defaultValue=e.value:this.defaultValue=e)}setValue(e,t={}){this.value=this._pendingValue=e,this._onChange.length&&t.emitModelToViewChange!==!1&&this._onChange.forEach(i=>i(this.value,t.emitViewToModelChange!==!1)),this.updateValueAndValidity(t)}patchValue(e,t={}){this.setValue(e,t)}reset(e=this.defaultValue,t={}){this._applyFormState(e),this.markAsPristine(t),this.markAsUntouched(t),this.setValue(this.value,t),this._pendingChange=!1}_updateValue(){}_anyControls(e){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(e){this._onChange.push(e)}_unregisterOnChange(e){G_(this._onChange,e)}registerOnDisabledChange(e){this._onDisabledChange.push(e)}_unregisterOnDisabledChange(e){G_(this._onDisabledChange,e)}_forEachChild(e){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(e){W_(e)?(this.value=this._pendingValue=e.value,e.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=e}};var WR={provide:ra,useExisting:yr(()=>Op)},j_=Promise.resolve(),Op=(()=>{class n extends ra{constructor(t,i,r,s,o,a){super(),this._changeDetectorRef=o,this.callSetDisabledState=a,this.control=new GR,this._registered=!1,this.name="",this.update=new sn,this._parent=t,this._setValidators(i),this._setAsyncValidators(r),this.valueAccessor=zR(this,s)}ngOnChanges(t){if(this._checkForErrors(),!this._registered||"name"in t){if(this._registered&&(this._checkName(),this.formDirective)){let i=t.name.previousValue;this.formDirective.removeControl({name:i,path:this._getPath(i)})}this._setUpControl()}"isDisabled"in t&&this._updateDisabled(t),UR(t,this.viewModel)&&(this._updateValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}get path(){return this._getPath(this.name)}get formDirective(){return this._parent?this._parent.formDirective:null}viewToModelUpdate(t){this.viewModel=t,this.update.emit(t)}_setUpControl(){this._setUpdateStrategy(),this._isStandalone()?this._setUpStandalone():this.formDirective.addControl(this),this._registered=!0}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.control._updateOn=this.options.updateOn)}_isStandalone(){return!this._parent||!!(this.options&&this.options.standalone)}_setUpStandalone(){rx(this.control,this,this.callSetDisabledState),this.control.updateValueAndValidity({emitEvent:!1})}_checkForErrors(){this._isStandalone()||this._checkParentType(),this._checkName()}_checkParentType(){}_checkName(){this.options&&this.options.name&&(this.name=this.options.name),!this._isStandalone()&&this.name}_updateValue(t){j_.then(()=>{this.control.setValue(t,{emitViewToModelChange:!1}),this._changeDetectorRef?.markForCheck()})}_updateDisabled(t){let i=t.isDisabled.currentValue,r=i!==0&&Pc(i);j_.then(()=>{r&&!this.control.disabled?this.control.disable():!r&&this.control.disabled&&this.control.enable(),this._changeDetectorRef?.markForCheck()})}_getPath(t){return this._parent?RR(t,this._parent):[t]}static{this.\u0275fac=function(i){return new(i||n)(ht(to,9),ht(Tp,10),ht(X_,10),ht(q_,10),ht(Ic,8),ht(Pp,8))}}static{this.\u0275dir=ln({type:n,selectors:[["","ngModel","",3,"formControlName","",3,"formControl",""]],inputs:{name:"name",isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"],options:[0,"ngModelOptions","options"]},outputs:{update:"ngModelChange"},exportAs:["ngModel"],features:[Ao([WR]),mi,wo]})}}return n})(),ax=(()=>{class n{static{this.\u0275fac=function(i){return new(i||n)}}static{this.\u0275dir=ln({type:n,selectors:[["form",3,"ngNoForm","",3,"ngNativeValidate",""]],hostAttrs:["novalidate",""]})}}return n})();var jR=(()=>{class n{constructor(){this._validator=U_}ngOnChanges(t){if(this.inputName in t){let i=this.normalizeInput(t[this.inputName].currentValue);this._enabled=this.enabled(i),this._validator=this._enabled?this.createValidator(i):U_,this._onChange&&this._onChange()}}validate(t){return this._validator(t)}registerOnValidatorChange(t){this._onChange=t}enabled(t){return t!=null}static{this.\u0275fac=function(i){return new(i||n)}}static{this.\u0275dir=ln({type:n,features:[wo]})}}return n})();var $R={provide:Tp,useExisting:yr(()=>Fp),multi:!0};var Fp=(()=>{class n extends jR{constructor(){super(...arguments),this.inputName="required",this.normalizeInput=Pc,this.createValidator=t=>MR}enabled(t){return t}static{this.\u0275fac=(()=>{let t;return function(r){return(t||(t=nf(n)))(r||n)}})()}static{this.\u0275dir=ln({type:n,selectors:[["","required","","formControlName","",3,"type","checkbox"],["","required","","formControl","",3,"type","checkbox"],["","required","","ngModel","",3,"type","checkbox"]],hostVars:1,hostBindings:function(i,r){i&2&&Co("required",r._enabled?"":null)},inputs:{required:"required"},features:[Ao([$R]),mi]})}}return n})();var qR=(()=>{class n{static{this.\u0275fac=function(i){return new(i||n)}}static{this.\u0275mod=hs({type:n})}static{this.\u0275inj=fs({})}}return n})();var cx=(()=>{class n{static withConfig(t){return{ngModule:n,providers:[{provide:Pp,useValue:t.callSetDisabledState??Rp}]}}static{this.\u0275fac=function(i){return new(i||n)}}static{this.\u0275mod=hs({type:n})}static{this.\u0275inj=fs({imports:[qR]})}}return n})();var YR=(n,e)=>e.type;function ZR(n,e){n&1&&(ki(),L(0,"svg",17),Ee(1,"path",22)(2,"polyline",23),V())}function JR(n,e){n&1&&(ki(),L(0,"svg",18),Ee(1,"path",24)(2,"circle",25),V())}function KR(n,e){if(n&1&&(L(0,"a",11)(1,"div",16),xn(2,ZR,3,0,":svg:svg",17)(3,JR,3,0,":svg:svg",18),V(),L(4,"div",19)(5,"span",20),W(6),V(),L(7,"span",21),W(8),V()()()),n&2){let t,i=e.$implicit;Kt("href",i.href,pi),he(2),Do((t=i.type)==="email"?2:t==="linkedin"?3:-1),he(4),ft(i.label),he(2),ft(i.value)}}function QR(n,e){if(n&1){let t=An();L(0,"form",26,0),St("ngSubmit",function(){Bt(t);let r=wt();return zt(r.onSubmit())}),L(2,"div",27)(3,"div",28)(4,"label"),W(5,"your name"),V(),L(6,"input",29),xs("ngModelChange",function(r){Bt(t);let s=wt();return To(s.formData.name,r)||(s.formData.name=r),zt(r)}),V()(),L(7,"div",28)(8,"label"),W(9,"your email"),V(),L(10,"input",30),xs("ngModelChange",function(r){Bt(t);let s=wt();return To(s.formData.email,r)||(s.formData.email=r),zt(r)}),V()()(),L(11,"div",28)(12,"label"),W(13,"subject"),V(),L(14,"input",31),xs("ngModelChange",function(r){Bt(t);let s=wt();return To(s.formData.subject,r)||(s.formData.subject=r),zt(r)}),V()(),L(15,"div",28)(16,"label"),W(17,"message"),V(),L(18,"textarea",32),xs("ngModelChange",function(r){Bt(t);let s=wt();return To(s.formData.message,r)||(s.formData.message=r),zt(r)}),V()(),L(19,"button",33)(20,"span"),W(21,"send message"),V(),ki(),L(22,"svg",34),Ee(23,"path",35),V()()()}if(n&2){let t=Sv(1),i=wt();he(6),_s("ngModel",i.formData.name),he(4),_s("ngModel",i.formData.email),he(4),_s("ngModel",i.formData.subject),he(4),_s("ngModel",i.formData.message),he(),Kt("disabled",!t.valid)}}function eN(n,e){if(n&1){let t=An();L(0,"div",14)(1,"div",36),W(2,"\u2713"),V(),L(3,"h3"),W(4,"Message Sent."),V(),L(5,"p"),W(6,"Thanks for reaching out. I'll get back to you shortly."),V(),L(7,"button",37),St("click",function(){Bt(t);let r=wt();return zt(r.submitted.set(!1))}),W(8,"Send another"),V()()}}var lx=(()=>{class n{constructor(){this.submitted=bt(!1),this.formData={name:"",email:"",subject:"",message:""},this.channels=[{type:"email",label:"email",value:"riishabh20@gmail.com",href:"mailto:riishabh20@gmail.com"},{type:"linkedin",label:"linkedin",value:"Rishabh Sahu",href:"https://www.linkedin.com/in/rishabh-sahu-6a782a249?utm_source=share_via&utm_content=profile&utm_medium=member_ios"}]}onSubmit(){console.log("Form Submit:",this.formData),setTimeout(()=>{this.submitted.set(!0),this.formData.name="",this.formData.email="",this.formData.subject="",this.formData.message=""},800)}static{this.\u0275fac=function(i){return new(i||n)}}static{this.\u0275cmp=Pt({type:n,selectors:[["app-contact"]],standalone:!0,features:[Rt],decls:22,vars:1,consts:[["contactForm","ngForm"],["id","contact",1,"contact"],[1,"contact-inner"],[1,"contact-grid"],[1,"contact-info"],[1,"contact-title"],[1,"gradient-text"],[1,"contact-meta"],[1,"sub-title"],[1,"contact-desc"],[1,"channel-list"],["target","_blank",1,"channel-card",3,"href"],[1,"contact-form-container"],[1,"contact-form"],[1,"success-message"],[1,"form-decoration"],[1,"channel-icon"],["width","18","height","18","viewBox","0 0 24 24","fill","none","stroke","currentColor","stroke-width","2"],["width","18","height","18","viewBox","0 0 24 24","fill","currentColor"],[1,"channel-content"],[1,"channel-label"],[1,"channel-value"],["d","M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"],["points","22,6 12,13 2,6"],["d","M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"],["cx","4","cy","4","r","2"],[1,"contact-form",3,"ngSubmit"],[1,"form-row"],[1,"form-group"],["type","text","name","name","placeholder","Rishabh Sahu","required","",3,"ngModelChange","ngModel"],["type","email","name","email","placeholder","riishabh20@gmail.com","required","",3,"ngModelChange","ngModel"],["type","text","name","subject","placeholder","Project Collaboration / VFX Query","required","",3,"ngModelChange","ngModel"],["name","message","rows","3","placeholder","Tell me about the project...","required","",3,"ngModelChange","ngModel"],["type","submit",1,"submit-btn",3,"disabled"],["width","20","height","20","viewBox","0 0 24 24","fill","none","stroke","currentColor","stroke-width","2"],["d","M5 12h14m-7-7 7 7-7 7"],[1,"success-icon"],[1,"reset-btn",3,"click"]],template:function(i,r){i&1&&(L(0,"section",1)(1,"div",2)(2,"div",3)(3,"div",4)(4,"h1",5),W(5,"Let's "),L(6,"span",6),W(7,"work"),V(),Ee(8,"br"),W(9,"together"),V(),L(10,"div",7)(11,"h2",8),W(12,"Get in touch"),V(),L(13,"p",9),W(14," I'm currently open to new opportunities \u2014 full time, freelance, or interesting collaborations. Drop a message and I'll get back to you within 24 hours. "),V()(),L(15,"div",10),Ht(16,KR,9,4,"a",11,YR),V()(),L(18,"div",12),xn(19,QR,24,5,"form",13)(20,eN,9,0,"div",14),Ee(21,"div",15),V()()()()),i&2&&(he(16),Gt(r.channels),he(3),Do(r.submitted()?20:19))},dependencies:[Ro,cx,ax,nu,ex,tx,Fp,Op,Np],styles:["[_nghost-%COMP%]{display:block}.contact[_ngcontent-%COMP%]{padding:5rem 2.5rem 3rem;background:var(--bg);min-height:100vh;height:100vh;display:flex;align-items:center;position:relative;overflow:hidden}.contact-inner[_ngcontent-%COMP%]{max-width:1400px;width:100%;margin:0 auto;position:relative;z-index:2}.contact-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 1.2fr;gap:4rem;align-items:start}.contact-title[_ngcontent-%COMP%]{font-family:Fraunces,serif;font-weight:300;font-size:clamp(2.5rem,5vw,4.5rem);line-height:1;letter-spacing:-.04em;margin-bottom:1.75rem;color:var(--ink)}.contact-title[_ngcontent-%COMP%]   .gradient-text[_ngcontent-%COMP%]{background:linear-gradient(90deg,var(--accent),var(--amber));-webkit-background-clip:text;-webkit-text-fill-color:transparent;font-style:italic}.contact-meta[_ngcontent-%COMP%]{margin-bottom:1.75rem}.contact-meta[_ngcontent-%COMP%]   .sub-title[_ngcontent-%COMP%]{font-family:Fraunces,serif;font-weight:400;font-size:1.35rem;margin-bottom:.6rem;color:var(--ink)}.contact-meta[_ngcontent-%COMP%]   .contact-desc[_ngcontent-%COMP%]{font-size:.95rem;color:var(--dim);line-height:1.5;max-width:500px}.channel-list[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:.6rem}.channel-card[_ngcontent-%COMP%]{display:flex;align-items:center;gap:1rem;padding:.75rem 1rem;background:#f5efe605;border:1px solid rgba(245,239,230,.05);border-radius:16px;backdrop-filter:blur(10px);transition:all .4s var(--ease);text-decoration:none}.channel-card[_ngcontent-%COMP%]:hover{background:#f5efe60d;border-color:var(--accent);transform:translate(10px)}.channel-card[_ngcontent-%COMP%]:hover   .channel-icon[_ngcontent-%COMP%]{color:var(--accent);background:#ffffff0d}.channel-icon[_ngcontent-%COMP%]{width:40px;height:40px;padding:10px;background:#ffffff08;border-radius:14px;color:var(--accent);transition:all .4s var(--ease);display:flex;align-items:center;justify-content:center}.channel-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{width:18px;height:18px;display:block;stroke:var(--accent);fill:transparent}.channel-icon[_ngcontent-%COMP%]   svg[fill=currentColor][_ngcontent-%COMP%]{fill:var(--accent);stroke:none}.channel-content[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:.2rem}.channel-label[_ngcontent-%COMP%]{font-family:JetBrains Mono,monospace;font-size:9px;letter-spacing:.2em;text-transform:uppercase;color:var(--dim)}.channel-value[_ngcontent-%COMP%]{font-family:Fraunces,serif;font-size:.95rem;color:var(--ink)}.contact-form-container[_ngcontent-%COMP%]{position:relative;padding-top:.25rem}.contact-form[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:1rem}.form-row[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 1fr;gap:1rem}.form-group[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:.4rem}.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{font-family:JetBrains Mono,monospace;font-size:9px;letter-spacing:.2em;text-transform:uppercase;color:var(--dim)}.form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .form-group[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]{background:#f5efe605;border:1px solid rgba(245,239,230,.08);border-radius:10px;padding:.65rem .9rem;color:var(--ink);font-family:inherit;font-size:.95rem;transition:all .3s}.form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder, .form-group[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]::placeholder{color:#f5efe626}.form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, .form-group[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus{outline:none;border-color:var(--accent);background:#f5efe60a;box-shadow:0 0 15px #d4472a1a}.form-group[_ngcontent-%COMP%]   input.ng-invalid.ng-touched[_ngcontent-%COMP%], .form-group[_ngcontent-%COMP%]   textarea.ng-invalid.ng-touched[_ngcontent-%COMP%]{border-color:#d4472a80}.submit-btn[_ngcontent-%COMP%]{margin-top:.25rem;align-self:flex-start;padding:.8rem 1.6rem;background:linear-gradient(90deg,var(--accent),var(--amber));color:#000;border:none;border-radius:12px;font-family:JetBrains Mono,monospace;font-size:11px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;display:flex;align-items:center;gap:.75rem;cursor:pointer;transition:all .4s var(--ease)}.submit-btn[_ngcontent-%COMP%]:hover:not(:disabled){transform:translateY(-3px);box-shadow:0 10px 25px #d4472a33}.submit-btn[_ngcontent-%COMP%]:disabled{opacity:.4;cursor:not-allowed}.success-message[_ngcontent-%COMP%]{padding:3rem;background:#f5efe605;border:1px solid var(--accent);border-radius:20px;text-align:center;backdrop-filter:blur(10px);animation:_ngcontent-%COMP%_fadeIn .6s var(--ease)}.success-message[_ngcontent-%COMP%]   .success-icon[_ngcontent-%COMP%]{width:50px;height:50px;background:var(--accent);color:#fff;border-radius:50%;font-size:1.5rem;line-height:50px;margin:0 auto 1.5rem}.success-message[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-family:Fraunces,serif;font-size:1.8rem;margin-bottom:.8rem}.success-message[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:var(--dim);margin-bottom:1.5rem}.reset-btn[_ngcontent-%COMP%]{background:transparent;border:1px solid var(--dim);color:var(--dim);padding:.6rem 1.2rem;border-radius:8px;cursor:pointer;transition:all .3s}.reset-btn[_ngcontent-%COMP%]:hover{border-color:var(--ink);color:var(--ink)}@keyframes _ngcontent-%COMP%_fadeIn{0%{opacity:0;transform:translateY(15px)}to{opacity:1;transform:translateY(0)}}.form-decoration[_ngcontent-%COMP%]{position:absolute;top:50%;right:-5%;width:12px;height:12px;background:var(--accent);border-radius:50%;box-shadow:0 0 15px var(--accent),0 0 30px var(--accent);pointer-events:none;z-index:1}@media (max-width: 1100px){.contact-grid[_ngcontent-%COMP%]{grid-template-columns:1fr;gap:5rem}.contact-title[_ngcontent-%COMP%]{margin-bottom:3rem}}@media (max-width: 600px){.form-row[_ngcontent-%COMP%]{grid-template-columns:1fr}.contact[_ngcontent-%COMP%]{padding:6rem 1.25rem}}"],changeDetection:0})}}return n})();function tN(n,e){if(n&1&&(L(0,"span"),W(1),V()),n&2){let t=e.$implicit;Lt("sep",t.sep),he(),ft(t.text)}}var ux=(()=>{class n{constructor(){this.marqueeItems=[{text:"Cinematography",sep:!1},{text:"\u2726",sep:!0},{text:"Editing",sep:!1},{text:"\u2726",sep:!0},{text:"Visual Effects",sep:!1},{text:"\u2726",sep:!0},{text:"Colour",sep:!1},{text:"\u2726",sep:!0},{text:"Direction",sep:!1},{text:"\u2726",sep:!0},{text:"Cinematography",sep:!1},{text:"\u2726",sep:!0},{text:"Editing",sep:!1},{text:"\u2726",sep:!0},{text:"Visual Effects",sep:!1},{text:"\u2726",sep:!0},{text:"Colour",sep:!1},{text:"\u2726",sep:!0},{text:"Direction",sep:!1},{text:"\u2726",sep:!0}]}static{this.\u0275fac=function(i){return new(i||n)}}static{this.\u0275cmp=Pt({type:n,selectors:[["app-root"]],standalone:!0,features:[Rt],decls:23,vars:0,consts:[[1,"grain"],[1,"vignette"],[1,"marquee"],[1,"marquee-track"],[3,"sep"]],template:function(i,r){i&1&&(Ee(0,"div",0)(1,"div",1)(2,"app-three-scene")(3,"app-loader")(4,"app-cursor")(5,"app-navbar"),L(6,"main"),Ee(7,"app-hero"),L(8,"div",2)(9,"div",3),Ht(10,tN,2,3,"span",4,ti),V()(),Ee(12,"app-skills")(13,"app-experience")(14,"app-work")(15,"app-contact"),L(16,"footer")(17,"span"),W(18,"\xA9 2026 Rishabh Sahu \u2014 Made in Mumbai"),V(),L(19,"span"),W(20,"19.0760\xB0 N / 72.8777\xB0 E"),V(),L(21,"span"),W(22,"Built with craft, not templates"),V()()()),i&2&&(he(10),Gt(r.marqueeItems))},dependencies:[ry,sy,oy,N_,O_,F_,L_,k_,lx],styles:["[_nghost-%COMP%]{display:block}main[_ngcontent-%COMP%]{display:block}.marquee[_ngcontent-%COMP%]{border-top:1px solid var(--line);border-bottom:1px solid var(--line);overflow:hidden;padding:1.5rem 0;background:var(--bg);position:relative;z-index:2}.marquee-track[_ngcontent-%COMP%]{display:flex;gap:4rem;white-space:nowrap;animation:_ngcontent-%COMP%_marquee 40s linear infinite;width:max-content}@keyframes _ngcontent-%COMP%_marquee{to{transform:translate(-50%)}}.marquee[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-family:Fraunces,serif;font-size:1.8rem;font-weight:300;font-style:italic;color:var(--dim)}.marquee[_ngcontent-%COMP%]   span.sep[_ngcontent-%COMP%]{color:var(--accent);font-style:normal}footer[_ngcontent-%COMP%]{padding:2.5rem;border-top:1px solid var(--line);display:flex;justify-content:space-between;align-items:center;font-family:JetBrains Mono,monospace;font-size:10px;color:var(--dim);letter-spacing:.25em;text-transform:uppercase;flex-wrap:wrap;gap:1rem;position:relative;z-index:2;background:var(--bg)}"],changeDetection:0})}}return n})();var dx={providers:[Rv({eventCoalescing:!0})]};"scrollRestoration"in history&&(history.scrollRestoration="manual");window.scrollTo(0,0);Kv(ux,dx).catch(n=>console.error(n));
