var Yb=Object.defineProperty;var jb=(i,t,n)=>t in i?Yb(i,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):i[t]=n;var $e=(i,t,n)=>jb(i,typeof t!="symbol"?t+"":t,n);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const c of o)if(c.type==="childList")for(const u of c.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&s(u)}).observe(document,{childList:!0,subtree:!0});function n(o){const c={};return o.integrity&&(c.integrity=o.integrity),o.referrerPolicy&&(c.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?c.credentials="include":o.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(o){if(o.ep)return;o.ep=!0;const c=n(o);fetch(o.href,c)}})();function ES(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var _d={exports:{}},vl={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var nx;function Zb(){if(nx)return vl;nx=1;var i=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function n(s,o,c){var u=null;if(c!==void 0&&(u=""+c),o.key!==void 0&&(u=""+o.key),"key"in o){c={};for(var f in o)f!=="key"&&(c[f]=o[f])}else c=o;return o=c.ref,{$$typeof:i,type:s,key:u,ref:o!==void 0?o:null,props:c}}return vl.Fragment=t,vl.jsx=n,vl.jsxs=n,vl}var ix;function Kb(){return ix||(ix=1,_d.exports=Zb()),_d.exports}var zt=Kb(),xd={exports:{}},re={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ax;function Qb(){if(ax)return re;ax=1;var i=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),u=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),v=Symbol.for("react.activity"),_=Symbol.iterator;function y(F){return F===null||typeof F!="object"?null:(F=_&&F[_]||F["@@iterator"],typeof F=="function"?F:null)}var E={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},b=Object.assign,S={};function x(F,at,gt){this.props=F,this.context=at,this.refs=S,this.updater=gt||E}x.prototype.isReactComponent={},x.prototype.setState=function(F,at){if(typeof F!="object"&&typeof F!="function"&&F!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,F,at,"setState")},x.prototype.forceUpdate=function(F){this.updater.enqueueForceUpdate(this,F,"forceUpdate")};function D(){}D.prototype=x.prototype;function w(F,at,gt){this.props=F,this.context=at,this.refs=S,this.updater=gt||E}var L=w.prototype=new D;L.constructor=w,b(L,x.prototype),L.isPureReactComponent=!0;var N=Array.isArray;function B(){}var P={H:null,A:null,T:null,S:null},k=Object.prototype.hasOwnProperty;function C(F,at,gt){var At=gt.ref;return{$$typeof:i,type:F,key:at,ref:At!==void 0?At:null,props:gt}}function U(F,at){return C(F.type,at,F.props)}function H(F){return typeof F=="object"&&F!==null&&F.$$typeof===i}function $(F){var at={"=":"=0",":":"=2"};return"$"+F.replace(/[=:]/g,function(gt){return at[gt]})}var tt=/\/+/g;function ft(F,at){return typeof F=="object"&&F!==null&&F.key!=null?$(""+F.key):at.toString(36)}function ot(F){switch(F.status){case"fulfilled":return F.value;case"rejected":throw F.reason;default:switch(typeof F.status=="string"?F.then(B,B):(F.status="pending",F.then(function(at){F.status==="pending"&&(F.status="fulfilled",F.value=at)},function(at){F.status==="pending"&&(F.status="rejected",F.reason=at)})),F.status){case"fulfilled":return F.value;case"rejected":throw F.reason}}throw F}function I(F,at,gt,At,Vt){var it=typeof F;(it==="undefined"||it==="boolean")&&(F=null);var ut=!1;if(F===null)ut=!0;else switch(it){case"bigint":case"string":case"number":ut=!0;break;case"object":switch(F.$$typeof){case i:case t:ut=!0;break;case g:return ut=F._init,I(ut(F._payload),at,gt,At,Vt)}}if(ut)return Vt=Vt(F),ut=At===""?"."+ft(F,0):At,N(Vt)?(gt="",ut!=null&&(gt=ut.replace(tt,"$&/")+"/"),I(Vt,at,gt,"",function(Ht){return Ht})):Vt!=null&&(H(Vt)&&(Vt=U(Vt,gt+(Vt.key==null||F&&F.key===Vt.key?"":(""+Vt.key).replace(tt,"$&/")+"/")+ut)),at.push(Vt)),1;ut=0;var Dt=At===""?".":At+":";if(N(F))for(var Xt=0;Xt<F.length;Xt++)At=F[Xt],it=Dt+ft(At,Xt),ut+=I(At,at,gt,it,Vt);else if(Xt=y(F),typeof Xt=="function")for(F=Xt.call(F),Xt=0;!(At=F.next()).done;)At=At.value,it=Dt+ft(At,Xt++),ut+=I(At,at,gt,it,Vt);else if(it==="object"){if(typeof F.then=="function")return I(ot(F),at,gt,At,Vt);throw at=String(F),Error("Objects are not valid as a React child (found: "+(at==="[object Object]"?"object with keys {"+Object.keys(F).join(", ")+"}":at)+"). If you meant to render a collection of children, use an array instead.")}return ut}function z(F,at,gt){if(F==null)return F;var At=[],Vt=0;return I(F,At,"","",function(it){return at.call(gt,it,Vt++)}),At}function K(F){if(F._status===-1){var at=F._result;at=at(),at.then(function(gt){(F._status===0||F._status===-1)&&(F._status=1,F._result=gt)},function(gt){(F._status===0||F._status===-1)&&(F._status=2,F._result=gt)}),F._status===-1&&(F._status=0,F._result=at)}if(F._status===1)return F._result.default;throw F._result}var yt=typeof reportError=="function"?reportError:function(F){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var at=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof F=="object"&&F!==null&&typeof F.message=="string"?String(F.message):String(F),error:F});if(!window.dispatchEvent(at))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",F);return}console.error(F)},_t={map:z,forEach:function(F,at,gt){z(F,function(){at.apply(this,arguments)},gt)},count:function(F){var at=0;return z(F,function(){at++}),at},toArray:function(F){return z(F,function(at){return at})||[]},only:function(F){if(!H(F))throw Error("React.Children.only expected to receive a single React element child.");return F}};return re.Activity=v,re.Children=_t,re.Component=x,re.Fragment=n,re.Profiler=o,re.PureComponent=w,re.StrictMode=s,re.Suspense=p,re.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=P,re.__COMPILER_RUNTIME={__proto__:null,c:function(F){return P.H.useMemoCache(F)}},re.cache=function(F){return function(){return F.apply(null,arguments)}},re.cacheSignal=function(){return null},re.cloneElement=function(F,at,gt){if(F==null)throw Error("The argument must be a React element, but you passed "+F+".");var At=b({},F.props),Vt=F.key;if(at!=null)for(it in at.key!==void 0&&(Vt=""+at.key),at)!k.call(at,it)||it==="key"||it==="__self"||it==="__source"||it==="ref"&&at.ref===void 0||(At[it]=at[it]);var it=arguments.length-2;if(it===1)At.children=gt;else if(1<it){for(var ut=Array(it),Dt=0;Dt<it;Dt++)ut[Dt]=arguments[Dt+2];At.children=ut}return C(F.type,Vt,At)},re.createContext=function(F){return F={$$typeof:u,_currentValue:F,_currentValue2:F,_threadCount:0,Provider:null,Consumer:null},F.Provider=F,F.Consumer={$$typeof:c,_context:F},F},re.createElement=function(F,at,gt){var At,Vt={},it=null;if(at!=null)for(At in at.key!==void 0&&(it=""+at.key),at)k.call(at,At)&&At!=="key"&&At!=="__self"&&At!=="__source"&&(Vt[At]=at[At]);var ut=arguments.length-2;if(ut===1)Vt.children=gt;else if(1<ut){for(var Dt=Array(ut),Xt=0;Xt<ut;Xt++)Dt[Xt]=arguments[Xt+2];Vt.children=Dt}if(F&&F.defaultProps)for(At in ut=F.defaultProps,ut)Vt[At]===void 0&&(Vt[At]=ut[At]);return C(F,it,Vt)},re.createRef=function(){return{current:null}},re.forwardRef=function(F){return{$$typeof:f,render:F}},re.isValidElement=H,re.lazy=function(F){return{$$typeof:g,_payload:{_status:-1,_result:F},_init:K}},re.memo=function(F,at){return{$$typeof:d,type:F,compare:at===void 0?null:at}},re.startTransition=function(F){var at=P.T,gt={};P.T=gt;try{var At=F(),Vt=P.S;Vt!==null&&Vt(gt,At),typeof At=="object"&&At!==null&&typeof At.then=="function"&&At.then(B,yt)}catch(it){yt(it)}finally{at!==null&&gt.types!==null&&(at.types=gt.types),P.T=at}},re.unstable_useCacheRefresh=function(){return P.H.useCacheRefresh()},re.use=function(F){return P.H.use(F)},re.useActionState=function(F,at,gt){return P.H.useActionState(F,at,gt)},re.useCallback=function(F,at){return P.H.useCallback(F,at)},re.useContext=function(F){return P.H.useContext(F)},re.useDebugValue=function(){},re.useDeferredValue=function(F,at){return P.H.useDeferredValue(F,at)},re.useEffect=function(F,at){return P.H.useEffect(F,at)},re.useEffectEvent=function(F){return P.H.useEffectEvent(F)},re.useId=function(){return P.H.useId()},re.useImperativeHandle=function(F,at,gt){return P.H.useImperativeHandle(F,at,gt)},re.useInsertionEffect=function(F,at){return P.H.useInsertionEffect(F,at)},re.useLayoutEffect=function(F,at){return P.H.useLayoutEffect(F,at)},re.useMemo=function(F,at){return P.H.useMemo(F,at)},re.useOptimistic=function(F,at){return P.H.useOptimistic(F,at)},re.useReducer=function(F,at,gt){return P.H.useReducer(F,at,gt)},re.useRef=function(F){return P.H.useRef(F)},re.useState=function(F){return P.H.useState(F)},re.useSyncExternalStore=function(F,at,gt){return P.H.useSyncExternalStore(F,at,gt)},re.useTransition=function(){return P.H.useTransition()},re.version="19.2.3",re}var sx;function Pm(){return sx||(sx=1,xd.exports=Qb()),xd.exports}var Et=Pm();const Jb=ES(Et);var yd={exports:{}},_l={},Sd={exports:{}},Md={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var rx;function $b(){return rx||(rx=1,(function(i){function t(I,z){var K=I.length;I.push(z);t:for(;0<K;){var yt=K-1>>>1,_t=I[yt];if(0<o(_t,z))I[yt]=z,I[K]=_t,K=yt;else break t}}function n(I){return I.length===0?null:I[0]}function s(I){if(I.length===0)return null;var z=I[0],K=I.pop();if(K!==z){I[0]=K;t:for(var yt=0,_t=I.length,F=_t>>>1;yt<F;){var at=2*(yt+1)-1,gt=I[at],At=at+1,Vt=I[At];if(0>o(gt,K))At<_t&&0>o(Vt,gt)?(I[yt]=Vt,I[At]=K,yt=At):(I[yt]=gt,I[at]=K,yt=at);else if(At<_t&&0>o(Vt,K))I[yt]=Vt,I[At]=K,yt=At;else break t}}return z}function o(I,z){var K=I.sortIndex-z.sortIndex;return K!==0?K:I.id-z.id}if(i.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;i.unstable_now=function(){return c.now()}}else{var u=Date,f=u.now();i.unstable_now=function(){return u.now()-f}}var p=[],d=[],g=1,v=null,_=3,y=!1,E=!1,b=!1,S=!1,x=typeof setTimeout=="function"?setTimeout:null,D=typeof clearTimeout=="function"?clearTimeout:null,w=typeof setImmediate<"u"?setImmediate:null;function L(I){for(var z=n(d);z!==null;){if(z.callback===null)s(d);else if(z.startTime<=I)s(d),z.sortIndex=z.expirationTime,t(p,z);else break;z=n(d)}}function N(I){if(b=!1,L(I),!E)if(n(p)!==null)E=!0,B||(B=!0,$());else{var z=n(d);z!==null&&ot(N,z.startTime-I)}}var B=!1,P=-1,k=5,C=-1;function U(){return S?!0:!(i.unstable_now()-C<k)}function H(){if(S=!1,B){var I=i.unstable_now();C=I;var z=!0;try{t:{E=!1,b&&(b=!1,D(P),P=-1),y=!0;var K=_;try{e:{for(L(I),v=n(p);v!==null&&!(v.expirationTime>I&&U());){var yt=v.callback;if(typeof yt=="function"){v.callback=null,_=v.priorityLevel;var _t=yt(v.expirationTime<=I);if(I=i.unstable_now(),typeof _t=="function"){v.callback=_t,L(I),z=!0;break e}v===n(p)&&s(p),L(I)}else s(p);v=n(p)}if(v!==null)z=!0;else{var F=n(d);F!==null&&ot(N,F.startTime-I),z=!1}}break t}finally{v=null,_=K,y=!1}z=void 0}}finally{z?$():B=!1}}}var $;if(typeof w=="function")$=function(){w(H)};else if(typeof MessageChannel<"u"){var tt=new MessageChannel,ft=tt.port2;tt.port1.onmessage=H,$=function(){ft.postMessage(null)}}else $=function(){x(H,0)};function ot(I,z){P=x(function(){I(i.unstable_now())},z)}i.unstable_IdlePriority=5,i.unstable_ImmediatePriority=1,i.unstable_LowPriority=4,i.unstable_NormalPriority=3,i.unstable_Profiling=null,i.unstable_UserBlockingPriority=2,i.unstable_cancelCallback=function(I){I.callback=null},i.unstable_forceFrameRate=function(I){0>I||125<I?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):k=0<I?Math.floor(1e3/I):5},i.unstable_getCurrentPriorityLevel=function(){return _},i.unstable_next=function(I){switch(_){case 1:case 2:case 3:var z=3;break;default:z=_}var K=_;_=z;try{return I()}finally{_=K}},i.unstable_requestPaint=function(){S=!0},i.unstable_runWithPriority=function(I,z){switch(I){case 1:case 2:case 3:case 4:case 5:break;default:I=3}var K=_;_=I;try{return z()}finally{_=K}},i.unstable_scheduleCallback=function(I,z,K){var yt=i.unstable_now();switch(typeof K=="object"&&K!==null?(K=K.delay,K=typeof K=="number"&&0<K?yt+K:yt):K=yt,I){case 1:var _t=-1;break;case 2:_t=250;break;case 5:_t=1073741823;break;case 4:_t=1e4;break;default:_t=5e3}return _t=K+_t,I={id:g++,callback:z,priorityLevel:I,startTime:K,expirationTime:_t,sortIndex:-1},K>yt?(I.sortIndex=K,t(d,I),n(p)===null&&I===n(d)&&(b?(D(P),P=-1):b=!0,ot(N,K-yt))):(I.sortIndex=_t,t(p,I),E||y||(E=!0,B||(B=!0,$()))),I},i.unstable_shouldYield=U,i.unstable_wrapCallback=function(I){var z=_;return function(){var K=_;_=z;try{return I.apply(this,arguments)}finally{_=K}}}})(Md)),Md}var ox;function tA(){return ox||(ox=1,Sd.exports=$b()),Sd.exports}var Ed={exports:{}},In={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var lx;function eA(){if(lx)return In;lx=1;var i=Pm();function t(p){var d="https://react.dev/errors/"+p;if(1<arguments.length){d+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)d+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+p+"; visit "+d+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function n(){}var s={d:{f:n,r:function(){throw Error(t(522))},D:n,C:n,L:n,m:n,X:n,S:n,M:n},p:0,findDOMNode:null},o=Symbol.for("react.portal");function c(p,d,g){var v=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:o,key:v==null?null:""+v,children:p,containerInfo:d,implementation:g}}var u=i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function f(p,d){if(p==="font")return"";if(typeof d=="string")return d==="use-credentials"?d:""}return In.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,In.createPortal=function(p,d){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!d||d.nodeType!==1&&d.nodeType!==9&&d.nodeType!==11)throw Error(t(299));return c(p,d,null,g)},In.flushSync=function(p){var d=u.T,g=s.p;try{if(u.T=null,s.p=2,p)return p()}finally{u.T=d,s.p=g,s.d.f()}},In.preconnect=function(p,d){typeof p=="string"&&(d?(d=d.crossOrigin,d=typeof d=="string"?d==="use-credentials"?d:"":void 0):d=null,s.d.C(p,d))},In.prefetchDNS=function(p){typeof p=="string"&&s.d.D(p)},In.preinit=function(p,d){if(typeof p=="string"&&d&&typeof d.as=="string"){var g=d.as,v=f(g,d.crossOrigin),_=typeof d.integrity=="string"?d.integrity:void 0,y=typeof d.fetchPriority=="string"?d.fetchPriority:void 0;g==="style"?s.d.S(p,typeof d.precedence=="string"?d.precedence:void 0,{crossOrigin:v,integrity:_,fetchPriority:y}):g==="script"&&s.d.X(p,{crossOrigin:v,integrity:_,fetchPriority:y,nonce:typeof d.nonce=="string"?d.nonce:void 0})}},In.preinitModule=function(p,d){if(typeof p=="string")if(typeof d=="object"&&d!==null){if(d.as==null||d.as==="script"){var g=f(d.as,d.crossOrigin);s.d.M(p,{crossOrigin:g,integrity:typeof d.integrity=="string"?d.integrity:void 0,nonce:typeof d.nonce=="string"?d.nonce:void 0})}}else d==null&&s.d.M(p)},In.preload=function(p,d){if(typeof p=="string"&&typeof d=="object"&&d!==null&&typeof d.as=="string"){var g=d.as,v=f(g,d.crossOrigin);s.d.L(p,g,{crossOrigin:v,integrity:typeof d.integrity=="string"?d.integrity:void 0,nonce:typeof d.nonce=="string"?d.nonce:void 0,type:typeof d.type=="string"?d.type:void 0,fetchPriority:typeof d.fetchPriority=="string"?d.fetchPriority:void 0,referrerPolicy:typeof d.referrerPolicy=="string"?d.referrerPolicy:void 0,imageSrcSet:typeof d.imageSrcSet=="string"?d.imageSrcSet:void 0,imageSizes:typeof d.imageSizes=="string"?d.imageSizes:void 0,media:typeof d.media=="string"?d.media:void 0})}},In.preloadModule=function(p,d){if(typeof p=="string")if(d){var g=f(d.as,d.crossOrigin);s.d.m(p,{as:typeof d.as=="string"&&d.as!=="script"?d.as:void 0,crossOrigin:g,integrity:typeof d.integrity=="string"?d.integrity:void 0})}else s.d.m(p)},In.requestFormReset=function(p){s.d.r(p)},In.unstable_batchedUpdates=function(p,d){return p(d)},In.useFormState=function(p,d,g){return u.H.useFormState(p,d,g)},In.useFormStatus=function(){return u.H.useHostTransitionStatus()},In.version="19.2.3",In}var cx;function nA(){if(cx)return Ed.exports;cx=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(t){console.error(t)}}return i(),Ed.exports=eA(),Ed.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ux;function iA(){if(ux)return _l;ux=1;var i=tA(),t=Pm(),n=nA();function s(e){var a="https://react.dev/errors/"+e;if(1<arguments.length){a+="?args[]="+encodeURIComponent(arguments[1]);for(var r=2;r<arguments.length;r++)a+="&args[]="+encodeURIComponent(arguments[r])}return"Minified React error #"+e+"; visit "+a+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function c(e){var a=e,r=e;if(e.alternate)for(;a.return;)a=a.return;else{e=a;do a=e,(a.flags&4098)!==0&&(r=a.return),e=a.return;while(e)}return a.tag===3?r:null}function u(e){if(e.tag===13){var a=e.memoizedState;if(a===null&&(e=e.alternate,e!==null&&(a=e.memoizedState)),a!==null)return a.dehydrated}return null}function f(e){if(e.tag===31){var a=e.memoizedState;if(a===null&&(e=e.alternate,e!==null&&(a=e.memoizedState)),a!==null)return a.dehydrated}return null}function p(e){if(c(e)!==e)throw Error(s(188))}function d(e){var a=e.alternate;if(!a){if(a=c(e),a===null)throw Error(s(188));return a!==e?null:e}for(var r=e,l=a;;){var h=r.return;if(h===null)break;var m=h.alternate;if(m===null){if(l=h.return,l!==null){r=l;continue}break}if(h.child===m.child){for(m=h.child;m;){if(m===r)return p(h),e;if(m===l)return p(h),a;m=m.sibling}throw Error(s(188))}if(r.return!==l.return)r=h,l=m;else{for(var M=!1,A=h.child;A;){if(A===r){M=!0,r=h,l=m;break}if(A===l){M=!0,l=h,r=m;break}A=A.sibling}if(!M){for(A=m.child;A;){if(A===r){M=!0,r=m,l=h;break}if(A===l){M=!0,l=m,r=h;break}A=A.sibling}if(!M)throw Error(s(189))}}if(r.alternate!==l)throw Error(s(190))}if(r.tag!==3)throw Error(s(188));return r.stateNode.current===r?e:a}function g(e){var a=e.tag;if(a===5||a===26||a===27||a===6)return e;for(e=e.child;e!==null;){if(a=g(e),a!==null)return a;e=e.sibling}return null}var v=Object.assign,_=Symbol.for("react.element"),y=Symbol.for("react.transitional.element"),E=Symbol.for("react.portal"),b=Symbol.for("react.fragment"),S=Symbol.for("react.strict_mode"),x=Symbol.for("react.profiler"),D=Symbol.for("react.consumer"),w=Symbol.for("react.context"),L=Symbol.for("react.forward_ref"),N=Symbol.for("react.suspense"),B=Symbol.for("react.suspense_list"),P=Symbol.for("react.memo"),k=Symbol.for("react.lazy"),C=Symbol.for("react.activity"),U=Symbol.for("react.memo_cache_sentinel"),H=Symbol.iterator;function $(e){return e===null||typeof e!="object"?null:(e=H&&e[H]||e["@@iterator"],typeof e=="function"?e:null)}var tt=Symbol.for("react.client.reference");function ft(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===tt?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case b:return"Fragment";case x:return"Profiler";case S:return"StrictMode";case N:return"Suspense";case B:return"SuspenseList";case C:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case E:return"Portal";case w:return e.displayName||"Context";case D:return(e._context.displayName||"Context")+".Consumer";case L:var a=e.render;return e=e.displayName,e||(e=a.displayName||a.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case P:return a=e.displayName||null,a!==null?a:ft(e.type)||"Memo";case k:a=e._payload,e=e._init;try{return ft(e(a))}catch{}}return null}var ot=Array.isArray,I=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,z=n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,K={pending:!1,data:null,method:null,action:null},yt=[],_t=-1;function F(e){return{current:e}}function at(e){0>_t||(e.current=yt[_t],yt[_t]=null,_t--)}function gt(e,a){_t++,yt[_t]=e.current,e.current=a}var At=F(null),Vt=F(null),it=F(null),ut=F(null);function Dt(e,a){switch(gt(it,a),gt(Vt,e),gt(At,null),a.nodeType){case 9:case 11:e=(e=a.documentElement)&&(e=e.namespaceURI)?b_(e):0;break;default:if(e=a.tagName,a=a.namespaceURI)a=b_(a),e=A_(a,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}at(At),gt(At,e)}function Xt(){at(At),at(Vt),at(it)}function Ht(e){e.memoizedState!==null&&gt(ut,e);var a=At.current,r=A_(a,e.type);a!==r&&(gt(Vt,e),gt(At,r))}function pe(e){Vt.current===e&&(at(At),at(Vt)),ut.current===e&&(at(ut),dl._currentValue=K)}var en,_e;function me(e){if(en===void 0)try{throw Error()}catch(r){var a=r.stack.trim().match(/\n( *(at )?)/);en=a&&a[1]||"",_e=-1<r.stack.indexOf(`
    at`)?" (<anonymous>)":-1<r.stack.indexOf("@")?"@unknown:0:0":""}return`
`+en+e+_e}var we=!1;function le(e,a){if(!e||we)return"";we=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(a){var mt=function(){throw Error()};if(Object.defineProperty(mt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(mt,[])}catch(lt){var nt=lt}Reflect.construct(e,[],mt)}else{try{mt.call()}catch(lt){nt=lt}e.call(mt.prototype)}}else{try{throw Error()}catch(lt){nt=lt}(mt=e())&&typeof mt.catch=="function"&&mt.catch(function(){})}}catch(lt){if(lt&&nt&&typeof lt.stack=="string")return[lt.stack,nt.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var h=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");h&&h.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var m=l.DetermineComponentFrameRoot(),M=m[0],A=m[1];if(M&&A){var V=M.split(`
`),J=A.split(`
`);for(h=l=0;l<V.length&&!V[l].includes("DetermineComponentFrameRoot");)l++;for(;h<J.length&&!J[h].includes("DetermineComponentFrameRoot");)h++;if(l===V.length||h===J.length)for(l=V.length-1,h=J.length-1;1<=l&&0<=h&&V[l]!==J[h];)h--;for(;1<=l&&0<=h;l--,h--)if(V[l]!==J[h]){if(l!==1||h!==1)do if(l--,h--,0>h||V[l]!==J[h]){var ht=`
`+V[l].replace(" at new "," at ");return e.displayName&&ht.includes("<anonymous>")&&(ht=ht.replace("<anonymous>",e.displayName)),ht}while(1<=l&&0<=h);break}}}finally{we=!1,Error.prepareStackTrace=r}return(r=e?e.displayName||e.name:"")?me(r):""}function nn(e,a){switch(e.tag){case 26:case 27:case 5:return me(e.type);case 16:return me("Lazy");case 13:return e.child!==a&&a!==null?me("Suspense Fallback"):me("Suspense");case 19:return me("SuspenseList");case 0:case 15:return le(e.type,!1);case 11:return le(e.type.render,!1);case 1:return le(e.type,!0);case 31:return me("Activity");default:return""}}function G(e){try{var a="",r=null;do a+=nn(e,r),r=e,e=e.return;while(e);return a}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}var Ze=Object.prototype.hasOwnProperty,Ee=i.unstable_scheduleCallback,Ne=i.unstable_cancelCallback,jt=i.unstable_shouldYield,O=i.unstable_requestPaint,T=i.unstable_now,q=i.unstable_getCurrentPriorityLevel,dt=i.unstable_ImmediatePriority,xt=i.unstable_UserBlockingPriority,ct=i.unstable_NormalPriority,Kt=i.unstable_LowPriority,Ct=i.unstable_IdlePriority,Wt=i.log,ne=i.unstable_setDisableYieldValue,Mt=null,Tt=null;function Bt(e){if(typeof Wt=="function"&&ne(e),Tt&&typeof Tt.setStrictMode=="function")try{Tt.setStrictMode(Mt,e)}catch{}}var Ot=Math.clz32?Math.clz32:W,wt=Math.log,ue=Math.LN2;function W(e){return e>>>=0,e===0?32:31-(wt(e)/ue|0)|0}var Lt=256,bt=262144,Ft=4194304;function St(e){var a=e&42;if(a!==0)return a;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function vt(e,a,r){var l=e.pendingLanes;if(l===0)return 0;var h=0,m=e.suspendedLanes,M=e.pingedLanes;e=e.warmLanes;var A=l&134217727;return A!==0?(l=A&~m,l!==0?h=St(l):(M&=A,M!==0?h=St(M):r||(r=A&~e,r!==0&&(h=St(r))))):(A=l&~m,A!==0?h=St(A):M!==0?h=St(M):r||(r=l&~e,r!==0&&(h=St(r)))),h===0?0:a!==0&&a!==h&&(a&m)===0&&(m=h&-h,r=a&-a,m>=r||m===32&&(r&4194048)!==0)?a:h}function Rt(e,a){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&a)===0}function ae(e,a){switch(e){case 1:case 2:case 4:case 8:case 64:return a+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return a+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Oe(){var e=Ft;return Ft<<=1,(Ft&62914560)===0&&(Ft=4194304),e}function Te(e){for(var a=[],r=0;31>r;r++)a.push(e);return a}function Bn(e,a){e.pendingLanes|=a,a!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Ni(e,a,r,l,h,m){var M=e.pendingLanes;e.pendingLanes=r,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=r,e.entangledLanes&=r,e.errorRecoveryDisabledLanes&=r,e.shellSuspendCounter=0;var A=e.entanglements,V=e.expirationTimes,J=e.hiddenUpdates;for(r=M&~r;0<r;){var ht=31-Ot(r),mt=1<<ht;A[ht]=0,V[ht]=-1;var nt=J[ht];if(nt!==null)for(J[ht]=null,ht=0;ht<nt.length;ht++){var lt=nt[ht];lt!==null&&(lt.lane&=-536870913)}r&=~mt}l!==0&&$l(e,l,0),m!==0&&h===0&&e.tag!==0&&(e.suspendedLanes|=m&~(M&~a))}function $l(e,a,r){e.pendingLanes|=a,e.suspendedLanes&=~a;var l=31-Ot(a);e.entangledLanes|=a,e.entanglements[l]=e.entanglements[l]|1073741824|r&261930}function bo(e,a){var r=e.entangledLanes|=a;for(e=e.entanglements;r;){var l=31-Ot(r),h=1<<l;h&a|e[l]&a&&(e[l]|=a),r&=~h}}function lr(e,a){var r=a&-a;return r=(r&42)!==0?1:Ao(r),(r&(e.suspendedLanes|a))!==0?0:r}function Ao(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function cr(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Ro(){var e=z.p;return e!==0?e:(e=window.event,e===void 0?32:Z_(e.type))}function qi(e,a){var r=z.p;try{return z.p=e,a()}finally{z.p=r}}var vi=Math.random().toString(36).slice(2),fn="__reactFiber$"+vi,bn="__reactProps$"+vi,Pi="__reactContainer$"+vi,ur="__reactEvents$"+vi,fr="__reactListeners$"+vi,tc="__reactHandles$"+vi,Co="__reactResources$"+vi,As="__reactMarker$"+vi;function wo(e){delete e[fn],delete e[bn],delete e[ur],delete e[fr],delete e[tc]}function Ha(e){var a=e[fn];if(a)return a;for(var r=e.parentNode;r;){if(a=r[Pi]||r[fn]){if(r=a.alternate,a.child!==null||r!==null&&r.child!==null)for(e=N_(e);e!==null;){if(r=e[fn])return r;e=N_(e)}return a}e=r,r=e.parentNode}return null}function Ga(e){if(e=e[fn]||e[Pi]){var a=e.tag;if(a===5||a===6||a===13||a===31||a===26||a===27||a===3)return e}return null}function Rs(e){var a=e.tag;if(a===5||a===26||a===27||a===6)return e.stateNode;throw Error(s(33))}function ka(e){var a=e[Co];return a||(a=e[Co]={hoistableStyles:new Map,hoistableScripts:new Map}),a}function R(e){e[As]=!0}var Y=new Set,rt={};function et(e,a){Z(e,a),Z(e+"Capture",a)}function Z(e,a){for(rt[e]=a,e=0;e<a.length;e++)Y.add(a[e])}var Ut=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),It={},Nt={};function Gt(e){return Ze.call(Nt,e)?!0:Ze.call(It,e)?!1:Ut.test(e)?Nt[e]=!0:(It[e]=!0,!1)}function qt(e,a,r){if(Gt(a))if(r===null)e.removeAttribute(a);else{switch(typeof r){case"undefined":case"function":case"symbol":e.removeAttribute(a);return;case"boolean":var l=a.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){e.removeAttribute(a);return}}e.setAttribute(a,""+r)}}function $t(e,a,r){if(r===null)e.removeAttribute(a);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttribute(a,""+r)}}function Yt(e,a,r,l){if(l===null)e.removeAttribute(r);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(r);return}e.setAttributeNS(a,r,""+l)}}function te(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function De(e){var a=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(a==="checkbox"||a==="radio")}function Ke(e,a,r){var l=Object.getOwnPropertyDescriptor(e.constructor.prototype,a);if(!e.hasOwnProperty(a)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var h=l.get,m=l.set;return Object.defineProperty(e,a,{configurable:!0,get:function(){return h.call(this)},set:function(M){r=""+M,m.call(this,M)}}),Object.defineProperty(e,a,{enumerable:l.enumerable}),{getValue:function(){return r},setValue:function(M){r=""+M},stopTracking:function(){e._valueTracker=null,delete e[a]}}}}function qe(e){if(!e._valueTracker){var a=De(e)?"checked":"value";e._valueTracker=Ke(e,a,""+e[a])}}function Pe(e){if(!e)return!1;var a=e._valueTracker;if(!a)return!0;var r=a.getValue(),l="";return e&&(l=De(e)?e.checked?"true":"false":e.value),e=l,e!==r?(a.setValue(e),!0):!1}function Qt(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Ue=/[\n"\\]/g;function se(e){return e.replace(Ue,function(a){return"\\"+a.charCodeAt(0).toString(16)+" "})}function An(e,a,r,l,h,m,M,A){e.name="",M!=null&&typeof M!="function"&&typeof M!="symbol"&&typeof M!="boolean"?e.type=M:e.removeAttribute("type"),a!=null?M==="number"?(a===0&&e.value===""||e.value!=a)&&(e.value=""+te(a)):e.value!==""+te(a)&&(e.value=""+te(a)):M!=="submit"&&M!=="reset"||e.removeAttribute("value"),a!=null?Rn(e,M,te(a)):r!=null?Rn(e,M,te(r)):l!=null&&e.removeAttribute("value"),h==null&&m!=null&&(e.defaultChecked=!!m),h!=null&&(e.checked=h&&typeof h!="function"&&typeof h!="symbol"),A!=null&&typeof A!="function"&&typeof A!="symbol"&&typeof A!="boolean"?e.name=""+te(A):e.removeAttribute("name")}function oa(e,a,r,l,h,m,M,A){if(m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"&&(e.type=m),a!=null||r!=null){if(!(m!=="submit"&&m!=="reset"||a!=null)){qe(e);return}r=r!=null?""+te(r):"",a=a!=null?""+te(a):r,A||a===e.value||(e.value=a),e.defaultValue=a}l=l??h,l=typeof l!="function"&&typeof l!="symbol"&&!!l,e.checked=A?e.checked:!!l,e.defaultChecked=!!l,M!=null&&typeof M!="function"&&typeof M!="symbol"&&typeof M!="boolean"&&(e.name=M),qe(e)}function Rn(e,a,r){a==="number"&&Qt(e.ownerDocument)===e||e.defaultValue===""+r||(e.defaultValue=""+r)}function _i(e,a,r,l){if(e=e.options,a){a={};for(var h=0;h<r.length;h++)a["$"+r[h]]=!0;for(r=0;r<e.length;r++)h=a.hasOwnProperty("$"+e[r].value),e[r].selected!==h&&(e[r].selected=h),h&&l&&(e[r].defaultSelected=!0)}else{for(r=""+te(r),a=null,h=0;h<e.length;h++){if(e[h].value===r){e[h].selected=!0,l&&(e[h].defaultSelected=!0);return}a!==null||e[h].disabled||(a=e[h])}a!==null&&(a.selected=!0)}}function Fe(e,a,r){if(a!=null&&(a=""+te(a),a!==e.value&&(e.value=a),r==null)){e.defaultValue!==a&&(e.defaultValue=a);return}e.defaultValue=r!=null?""+te(r):""}function Cn(e,a,r,l){if(a==null){if(l!=null){if(r!=null)throw Error(s(92));if(ot(l)){if(1<l.length)throw Error(s(93));l=l[0]}r=l}r==null&&(r=""),a=r}r=te(a),e.defaultValue=r,l=e.textContent,l===r&&l!==""&&l!==null&&(e.value=l),qe(e)}function _n(e,a){if(a){var r=e.firstChild;if(r&&r===e.lastChild&&r.nodeType===3){r.nodeValue=a;return}}e.textContent=a}var wn=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Dn(e,a,r){var l=a.indexOf("--")===0;r==null||typeof r=="boolean"||r===""?l?e.setProperty(a,""):a==="float"?e.cssFloat="":e[a]="":l?e.setProperty(a,r):typeof r!="number"||r===0||wn.has(a)?a==="float"?e.cssFloat=r:e[a]=(""+r).trim():e[a]=r+"px"}function hr(e,a,r){if(a!=null&&typeof a!="object")throw Error(s(62));if(e=e.style,r!=null){for(var l in r)!r.hasOwnProperty(l)||a!=null&&a.hasOwnProperty(l)||(l.indexOf("--")===0?e.setProperty(l,""):l==="float"?e.cssFloat="":e[l]="");for(var h in a)l=a[h],a.hasOwnProperty(h)&&r[h]!==l&&Dn(e,h,l)}else for(var m in a)a.hasOwnProperty(m)&&Dn(e,m,a[m])}function Oi(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var kE=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),XE=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function ec(e){return XE.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function la(){}var mf=null;function gf(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var dr=null,pr=null;function Tg(e){var a=Ga(e);if(a&&(e=a.stateNode)){var r=e[bn]||null;t:switch(e=a.stateNode,a.type){case"input":if(An(e,r.value,r.defaultValue,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name),a=r.name,r.type==="radio"&&a!=null){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll('input[name="'+se(""+a)+'"][type="radio"]'),a=0;a<r.length;a++){var l=r[a];if(l!==e&&l.form===e.form){var h=l[bn]||null;if(!h)throw Error(s(90));An(l,h.value,h.defaultValue,h.defaultValue,h.checked,h.defaultChecked,h.type,h.name)}}for(a=0;a<r.length;a++)l=r[a],l.form===e.form&&Pe(l)}break t;case"textarea":Fe(e,r.value,r.defaultValue);break t;case"select":a=r.value,a!=null&&_i(e,!!r.multiple,a,!1)}}}var vf=!1;function bg(e,a,r){if(vf)return e(a,r);vf=!0;try{var l=e(a);return l}finally{if(vf=!1,(dr!==null||pr!==null)&&(Gc(),dr&&(a=dr,e=pr,pr=dr=null,Tg(a),e)))for(a=0;a<e.length;a++)Tg(e[a])}}function Do(e,a){var r=e.stateNode;if(r===null)return null;var l=r[bn]||null;if(l===null)return null;r=l[a];t:switch(a){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break t;default:e=!1}if(e)return null;if(r&&typeof r!="function")throw Error(s(231,a,typeof r));return r}var ca=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),_f=!1;if(ca)try{var Uo={};Object.defineProperty(Uo,"passive",{get:function(){_f=!0}}),window.addEventListener("test",Uo,Uo),window.removeEventListener("test",Uo,Uo)}catch{_f=!1}var Xa=null,xf=null,nc=null;function Ag(){if(nc)return nc;var e,a=xf,r=a.length,l,h="value"in Xa?Xa.value:Xa.textContent,m=h.length;for(e=0;e<r&&a[e]===h[e];e++);var M=r-e;for(l=1;l<=M&&a[r-l]===h[m-l];l++);return nc=h.slice(e,1<l?1-l:void 0)}function ic(e){var a=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&a===13&&(e=13)):e=a,e===10&&(e=13),32<=e||e===13?e:0}function ac(){return!0}function Rg(){return!1}function Zn(e){function a(r,l,h,m,M){this._reactName=r,this._targetInst=h,this.type=l,this.nativeEvent=m,this.target=M,this.currentTarget=null;for(var A in e)e.hasOwnProperty(A)&&(r=e[A],this[A]=r?r(m):m[A]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?ac:Rg,this.isPropagationStopped=Rg,this}return v(a.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=ac)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=ac)},persist:function(){},isPersistent:ac}),a}var Cs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},sc=Zn(Cs),Lo=v({},Cs,{view:0,detail:0}),WE=Zn(Lo),yf,Sf,No,rc=v({},Lo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ef,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==No&&(No&&e.type==="mousemove"?(yf=e.screenX-No.screenX,Sf=e.screenY-No.screenY):Sf=yf=0,No=e),yf)},movementY:function(e){return"movementY"in e?e.movementY:Sf}}),Cg=Zn(rc),qE=v({},rc,{dataTransfer:0}),YE=Zn(qE),jE=v({},Lo,{relatedTarget:0}),Mf=Zn(jE),ZE=v({},Cs,{animationName:0,elapsedTime:0,pseudoElement:0}),KE=Zn(ZE),QE=v({},Cs,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),JE=Zn(QE),$E=v({},Cs,{data:0}),wg=Zn($E),tT={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},eT={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},nT={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function iT(e){var a=this.nativeEvent;return a.getModifierState?a.getModifierState(e):(e=nT[e])?!!a[e]:!1}function Ef(){return iT}var aT=v({},Lo,{key:function(e){if(e.key){var a=tT[e.key]||e.key;if(a!=="Unidentified")return a}return e.type==="keypress"?(e=ic(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?eT[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ef,charCode:function(e){return e.type==="keypress"?ic(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ic(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),sT=Zn(aT),rT=v({},rc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Dg=Zn(rT),oT=v({},Lo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ef}),lT=Zn(oT),cT=v({},Cs,{propertyName:0,elapsedTime:0,pseudoElement:0}),uT=Zn(cT),fT=v({},rc,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),hT=Zn(fT),dT=v({},Cs,{newState:0,oldState:0}),pT=Zn(dT),mT=[9,13,27,32],Tf=ca&&"CompositionEvent"in window,Po=null;ca&&"documentMode"in document&&(Po=document.documentMode);var gT=ca&&"TextEvent"in window&&!Po,Ug=ca&&(!Tf||Po&&8<Po&&11>=Po),Lg=" ",Ng=!1;function Pg(e,a){switch(e){case"keyup":return mT.indexOf(a.keyCode)!==-1;case"keydown":return a.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Og(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var mr=!1;function vT(e,a){switch(e){case"compositionend":return Og(a);case"keypress":return a.which!==32?null:(Ng=!0,Lg);case"textInput":return e=a.data,e===Lg&&Ng?null:e;default:return null}}function _T(e,a){if(mr)return e==="compositionend"||!Tf&&Pg(e,a)?(e=Ag(),nc=xf=Xa=null,mr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(a.ctrlKey||a.altKey||a.metaKey)||a.ctrlKey&&a.altKey){if(a.char&&1<a.char.length)return a.char;if(a.which)return String.fromCharCode(a.which)}return null;case"compositionend":return Ug&&a.locale!=="ko"?null:a.data;default:return null}}var xT={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Fg(e){var a=e&&e.nodeName&&e.nodeName.toLowerCase();return a==="input"?!!xT[e.type]:a==="textarea"}function Bg(e,a,r,l){dr?pr?pr.push(l):pr=[l]:dr=l,a=Zc(a,"onChange"),0<a.length&&(r=new sc("onChange","change",null,r,l),e.push({event:r,listeners:a}))}var Oo=null,Fo=null;function yT(e){x_(e,0)}function oc(e){var a=Rs(e);if(Pe(a))return e}function Ig(e,a){if(e==="change")return a}var zg=!1;if(ca){var bf;if(ca){var Af="oninput"in document;if(!Af){var Vg=document.createElement("div");Vg.setAttribute("oninput","return;"),Af=typeof Vg.oninput=="function"}bf=Af}else bf=!1;zg=bf&&(!document.documentMode||9<document.documentMode)}function Hg(){Oo&&(Oo.detachEvent("onpropertychange",Gg),Fo=Oo=null)}function Gg(e){if(e.propertyName==="value"&&oc(Fo)){var a=[];Bg(a,Fo,e,gf(e)),bg(yT,a)}}function ST(e,a,r){e==="focusin"?(Hg(),Oo=a,Fo=r,Oo.attachEvent("onpropertychange",Gg)):e==="focusout"&&Hg()}function MT(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return oc(Fo)}function ET(e,a){if(e==="click")return oc(a)}function TT(e,a){if(e==="input"||e==="change")return oc(a)}function bT(e,a){return e===a&&(e!==0||1/e===1/a)||e!==e&&a!==a}var ri=typeof Object.is=="function"?Object.is:bT;function Bo(e,a){if(ri(e,a))return!0;if(typeof e!="object"||e===null||typeof a!="object"||a===null)return!1;var r=Object.keys(e),l=Object.keys(a);if(r.length!==l.length)return!1;for(l=0;l<r.length;l++){var h=r[l];if(!Ze.call(a,h)||!ri(e[h],a[h]))return!1}return!0}function kg(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Xg(e,a){var r=kg(e);e=0;for(var l;r;){if(r.nodeType===3){if(l=e+r.textContent.length,e<=a&&l>=a)return{node:r,offset:a-e};e=l}t:{for(;r;){if(r.nextSibling){r=r.nextSibling;break t}r=r.parentNode}r=void 0}r=kg(r)}}function Wg(e,a){return e&&a?e===a?!0:e&&e.nodeType===3?!1:a&&a.nodeType===3?Wg(e,a.parentNode):"contains"in e?e.contains(a):e.compareDocumentPosition?!!(e.compareDocumentPosition(a)&16):!1:!1}function qg(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var a=Qt(e.document);a instanceof e.HTMLIFrameElement;){try{var r=typeof a.contentWindow.location.href=="string"}catch{r=!1}if(r)e=a.contentWindow;else break;a=Qt(e.document)}return a}function Rf(e){var a=e&&e.nodeName&&e.nodeName.toLowerCase();return a&&(a==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||a==="textarea"||e.contentEditable==="true")}var AT=ca&&"documentMode"in document&&11>=document.documentMode,gr=null,Cf=null,Io=null,wf=!1;function Yg(e,a,r){var l=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;wf||gr==null||gr!==Qt(l)||(l=gr,"selectionStart"in l&&Rf(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),Io&&Bo(Io,l)||(Io=l,l=Zc(Cf,"onSelect"),0<l.length&&(a=new sc("onSelect","select",null,a,r),e.push({event:a,listeners:l}),a.target=gr)))}function ws(e,a){var r={};return r[e.toLowerCase()]=a.toLowerCase(),r["Webkit"+e]="webkit"+a,r["Moz"+e]="moz"+a,r}var vr={animationend:ws("Animation","AnimationEnd"),animationiteration:ws("Animation","AnimationIteration"),animationstart:ws("Animation","AnimationStart"),transitionrun:ws("Transition","TransitionRun"),transitionstart:ws("Transition","TransitionStart"),transitioncancel:ws("Transition","TransitionCancel"),transitionend:ws("Transition","TransitionEnd")},Df={},jg={};ca&&(jg=document.createElement("div").style,"AnimationEvent"in window||(delete vr.animationend.animation,delete vr.animationiteration.animation,delete vr.animationstart.animation),"TransitionEvent"in window||delete vr.transitionend.transition);function Ds(e){if(Df[e])return Df[e];if(!vr[e])return e;var a=vr[e],r;for(r in a)if(a.hasOwnProperty(r)&&r in jg)return Df[e]=a[r];return e}var Zg=Ds("animationend"),Kg=Ds("animationiteration"),Qg=Ds("animationstart"),RT=Ds("transitionrun"),CT=Ds("transitionstart"),wT=Ds("transitioncancel"),Jg=Ds("transitionend"),$g=new Map,Uf="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Uf.push("scrollEnd");function Fi(e,a){$g.set(e,a),et(a,[e])}var lc=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var a=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(a))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},xi=[],_r=0,Lf=0;function cc(){for(var e=_r,a=Lf=_r=0;a<e;){var r=xi[a];xi[a++]=null;var l=xi[a];xi[a++]=null;var h=xi[a];xi[a++]=null;var m=xi[a];if(xi[a++]=null,l!==null&&h!==null){var M=l.pending;M===null?h.next=h:(h.next=M.next,M.next=h),l.pending=h}m!==0&&t0(r,h,m)}}function uc(e,a,r,l){xi[_r++]=e,xi[_r++]=a,xi[_r++]=r,xi[_r++]=l,Lf|=l,e.lanes|=l,e=e.alternate,e!==null&&(e.lanes|=l)}function Nf(e,a,r,l){return uc(e,a,r,l),fc(e)}function Us(e,a){return uc(e,null,null,a),fc(e)}function t0(e,a,r){e.lanes|=r;var l=e.alternate;l!==null&&(l.lanes|=r);for(var h=!1,m=e.return;m!==null;)m.childLanes|=r,l=m.alternate,l!==null&&(l.childLanes|=r),m.tag===22&&(e=m.stateNode,e===null||e._visibility&1||(h=!0)),e=m,m=m.return;return e.tag===3?(m=e.stateNode,h&&a!==null&&(h=31-Ot(r),e=m.hiddenUpdates,l=e[h],l===null?e[h]=[a]:l.push(a),a.lane=r|536870912),m):null}function fc(e){if(50<rl)throw rl=0,Gh=null,Error(s(185));for(var a=e.return;a!==null;)e=a,a=e.return;return e.tag===3?e.stateNode:null}var xr={};function DT(e,a,r,l){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=a,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function oi(e,a,r,l){return new DT(e,a,r,l)}function Pf(e){return e=e.prototype,!(!e||!e.isReactComponent)}function ua(e,a){var r=e.alternate;return r===null?(r=oi(e.tag,a,e.key,e.mode),r.elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=a,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=e.flags&65011712,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,a=e.dependencies,r.dependencies=a===null?null:{lanes:a.lanes,firstContext:a.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r.refCleanup=e.refCleanup,r}function e0(e,a){e.flags&=65011714;var r=e.alternate;return r===null?(e.childLanes=0,e.lanes=a,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=r.childLanes,e.lanes=r.lanes,e.child=r.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=r.memoizedProps,e.memoizedState=r.memoizedState,e.updateQueue=r.updateQueue,e.type=r.type,a=r.dependencies,e.dependencies=a===null?null:{lanes:a.lanes,firstContext:a.firstContext}),e}function hc(e,a,r,l,h,m){var M=0;if(l=e,typeof e=="function")Pf(e)&&(M=1);else if(typeof e=="string")M=Ob(e,r,At.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case C:return e=oi(31,r,a,h),e.elementType=C,e.lanes=m,e;case b:return Ls(r.children,h,m,a);case S:M=8,h|=24;break;case x:return e=oi(12,r,a,h|2),e.elementType=x,e.lanes=m,e;case N:return e=oi(13,r,a,h),e.elementType=N,e.lanes=m,e;case B:return e=oi(19,r,a,h),e.elementType=B,e.lanes=m,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case w:M=10;break t;case D:M=9;break t;case L:M=11;break t;case P:M=14;break t;case k:M=16,l=null;break t}M=29,r=Error(s(130,e===null?"null":typeof e,"")),l=null}return a=oi(M,r,a,h),a.elementType=e,a.type=l,a.lanes=m,a}function Ls(e,a,r,l){return e=oi(7,e,l,a),e.lanes=r,e}function Of(e,a,r){return e=oi(6,e,null,a),e.lanes=r,e}function n0(e){var a=oi(18,null,null,0);return a.stateNode=e,a}function Ff(e,a,r){return a=oi(4,e.children!==null?e.children:[],e.key,a),a.lanes=r,a.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},a}var i0=new WeakMap;function yi(e,a){if(typeof e=="object"&&e!==null){var r=i0.get(e);return r!==void 0?r:(a={value:e,source:a,stack:G(a)},i0.set(e,a),a)}return{value:e,source:a,stack:G(a)}}var yr=[],Sr=0,dc=null,zo=0,Si=[],Mi=0,Wa=null,Yi=1,ji="";function fa(e,a){yr[Sr++]=zo,yr[Sr++]=dc,dc=e,zo=a}function a0(e,a,r){Si[Mi++]=Yi,Si[Mi++]=ji,Si[Mi++]=Wa,Wa=e;var l=Yi;e=ji;var h=32-Ot(l)-1;l&=~(1<<h),r+=1;var m=32-Ot(a)+h;if(30<m){var M=h-h%5;m=(l&(1<<M)-1).toString(32),l>>=M,h-=M,Yi=1<<32-Ot(a)+h|r<<h|l,ji=m+e}else Yi=1<<m|r<<h|l,ji=e}function Bf(e){e.return!==null&&(fa(e,1),a0(e,1,0))}function If(e){for(;e===dc;)dc=yr[--Sr],yr[Sr]=null,zo=yr[--Sr],yr[Sr]=null;for(;e===Wa;)Wa=Si[--Mi],Si[Mi]=null,ji=Si[--Mi],Si[Mi]=null,Yi=Si[--Mi],Si[Mi]=null}function s0(e,a){Si[Mi++]=Yi,Si[Mi++]=ji,Si[Mi++]=Wa,Yi=a.id,ji=a.overflow,Wa=e}var Un=null,Ye=null,Se=!1,qa=null,Ei=!1,zf=Error(s(519));function Ya(e){var a=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Vo(yi(a,e)),zf}function r0(e){var a=e.stateNode,r=e.type,l=e.memoizedProps;switch(a[fn]=e,a[bn]=l,r){case"dialog":ve("cancel",a),ve("close",a);break;case"iframe":case"object":case"embed":ve("load",a);break;case"video":case"audio":for(r=0;r<ll.length;r++)ve(ll[r],a);break;case"source":ve("error",a);break;case"img":case"image":case"link":ve("error",a),ve("load",a);break;case"details":ve("toggle",a);break;case"input":ve("invalid",a),oa(a,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"select":ve("invalid",a);break;case"textarea":ve("invalid",a),Cn(a,l.value,l.defaultValue,l.children)}r=l.children,typeof r!="string"&&typeof r!="number"&&typeof r!="bigint"||a.textContent===""+r||l.suppressHydrationWarning===!0||E_(a.textContent,r)?(l.popover!=null&&(ve("beforetoggle",a),ve("toggle",a)),l.onScroll!=null&&ve("scroll",a),l.onScrollEnd!=null&&ve("scrollend",a),l.onClick!=null&&(a.onclick=la),a=!0):a=!1,a||Ya(e,!0)}function o0(e){for(Un=e.return;Un;)switch(Un.tag){case 5:case 31:case 13:Ei=!1;return;case 27:case 3:Ei=!0;return;default:Un=Un.return}}function Mr(e){if(e!==Un)return!1;if(!Se)return o0(e),Se=!0,!1;var a=e.tag,r;if((r=a!==3&&a!==27)&&((r=a===5)&&(r=e.type,r=!(r!=="form"&&r!=="button")||id(e.type,e.memoizedProps)),r=!r),r&&Ye&&Ya(e),o0(e),a===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));Ye=L_(e)}else if(a===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));Ye=L_(e)}else a===27?(a=Ye,os(e.type)?(e=ld,ld=null,Ye=e):Ye=a):Ye=Un?bi(e.stateNode.nextSibling):null;return!0}function Ns(){Ye=Un=null,Se=!1}function Vf(){var e=qa;return e!==null&&($n===null?$n=e:$n.push.apply($n,e),qa=null),e}function Vo(e){qa===null?qa=[e]:qa.push(e)}var Hf=F(null),Ps=null,ha=null;function ja(e,a,r){gt(Hf,a._currentValue),a._currentValue=r}function da(e){e._currentValue=Hf.current,at(Hf)}function Gf(e,a,r){for(;e!==null;){var l=e.alternate;if((e.childLanes&a)!==a?(e.childLanes|=a,l!==null&&(l.childLanes|=a)):l!==null&&(l.childLanes&a)!==a&&(l.childLanes|=a),e===r)break;e=e.return}}function kf(e,a,r,l){var h=e.child;for(h!==null&&(h.return=e);h!==null;){var m=h.dependencies;if(m!==null){var M=h.child;m=m.firstContext;t:for(;m!==null;){var A=m;m=h;for(var V=0;V<a.length;V++)if(A.context===a[V]){m.lanes|=r,A=m.alternate,A!==null&&(A.lanes|=r),Gf(m.return,r,e),l||(M=null);break t}m=A.next}}else if(h.tag===18){if(M=h.return,M===null)throw Error(s(341));M.lanes|=r,m=M.alternate,m!==null&&(m.lanes|=r),Gf(M,r,e),M=null}else M=h.child;if(M!==null)M.return=h;else for(M=h;M!==null;){if(M===e){M=null;break}if(h=M.sibling,h!==null){h.return=M.return,M=h;break}M=M.return}h=M}}function Er(e,a,r,l){e=null;for(var h=a,m=!1;h!==null;){if(!m){if((h.flags&524288)!==0)m=!0;else if((h.flags&262144)!==0)break}if(h.tag===10){var M=h.alternate;if(M===null)throw Error(s(387));if(M=M.memoizedProps,M!==null){var A=h.type;ri(h.pendingProps.value,M.value)||(e!==null?e.push(A):e=[A])}}else if(h===ut.current){if(M=h.alternate,M===null)throw Error(s(387));M.memoizedState.memoizedState!==h.memoizedState.memoizedState&&(e!==null?e.push(dl):e=[dl])}h=h.return}e!==null&&kf(a,e,r,l),a.flags|=262144}function pc(e){for(e=e.firstContext;e!==null;){if(!ri(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Os(e){Ps=e,ha=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Ln(e){return l0(Ps,e)}function mc(e,a){return Ps===null&&Os(e),l0(e,a)}function l0(e,a){var r=a._currentValue;if(a={context:a,memoizedValue:r,next:null},ha===null){if(e===null)throw Error(s(308));ha=a,e.dependencies={lanes:0,firstContext:a},e.flags|=524288}else ha=ha.next=a;return r}var UT=typeof AbortController<"u"?AbortController:function(){var e=[],a=this.signal={aborted:!1,addEventListener:function(r,l){e.push(l)}};this.abort=function(){a.aborted=!0,e.forEach(function(r){return r()})}},LT=i.unstable_scheduleCallback,NT=i.unstable_NormalPriority,hn={$$typeof:w,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Xf(){return{controller:new UT,data:new Map,refCount:0}}function Ho(e){e.refCount--,e.refCount===0&&LT(NT,function(){e.controller.abort()})}var Go=null,Wf=0,Tr=0,br=null;function PT(e,a){if(Go===null){var r=Go=[];Wf=0,Tr=jh(),br={status:"pending",value:void 0,then:function(l){r.push(l)}}}return Wf++,a.then(c0,c0),a}function c0(){if(--Wf===0&&Go!==null){br!==null&&(br.status="fulfilled");var e=Go;Go=null,Tr=0,br=null;for(var a=0;a<e.length;a++)(0,e[a])()}}function OT(e,a){var r=[],l={status:"pending",value:null,reason:null,then:function(h){r.push(h)}};return e.then(function(){l.status="fulfilled",l.value=a;for(var h=0;h<r.length;h++)(0,r[h])(a)},function(h){for(l.status="rejected",l.reason=h,h=0;h<r.length;h++)(0,r[h])(void 0)}),l}var u0=I.S;I.S=function(e,a){Yv=T(),typeof a=="object"&&a!==null&&typeof a.then=="function"&&PT(e,a),u0!==null&&u0(e,a)};var Fs=F(null);function qf(){var e=Fs.current;return e!==null?e:We.pooledCache}function gc(e,a){a===null?gt(Fs,Fs.current):gt(Fs,a.pool)}function f0(){var e=qf();return e===null?null:{parent:hn._currentValue,pool:e}}var Ar=Error(s(460)),Yf=Error(s(474)),vc=Error(s(542)),_c={then:function(){}};function h0(e){return e=e.status,e==="fulfilled"||e==="rejected"}function d0(e,a,r){switch(r=e[r],r===void 0?e.push(a):r!==a&&(a.then(la,la),a=r),a.status){case"fulfilled":return a.value;case"rejected":throw e=a.reason,m0(e),e;default:if(typeof a.status=="string")a.then(la,la);else{if(e=We,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=a,e.status="pending",e.then(function(l){if(a.status==="pending"){var h=a;h.status="fulfilled",h.value=l}},function(l){if(a.status==="pending"){var h=a;h.status="rejected",h.reason=l}})}switch(a.status){case"fulfilled":return a.value;case"rejected":throw e=a.reason,m0(e),e}throw Is=a,Ar}}function Bs(e){try{var a=e._init;return a(e._payload)}catch(r){throw r!==null&&typeof r=="object"&&typeof r.then=="function"?(Is=r,Ar):r}}var Is=null;function p0(){if(Is===null)throw Error(s(459));var e=Is;return Is=null,e}function m0(e){if(e===Ar||e===vc)throw Error(s(483))}var Rr=null,ko=0;function xc(e){var a=ko;return ko+=1,Rr===null&&(Rr=[]),d0(Rr,e,a)}function Xo(e,a){a=a.props.ref,e.ref=a!==void 0?a:null}function yc(e,a){throw a.$$typeof===_?Error(s(525)):(e=Object.prototype.toString.call(a),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(a).join(", ")+"}":e)))}function g0(e){function a(j,X){if(e){var Q=j.deletions;Q===null?(j.deletions=[X],j.flags|=16):Q.push(X)}}function r(j,X){if(!e)return null;for(;X!==null;)a(j,X),X=X.sibling;return null}function l(j){for(var X=new Map;j!==null;)j.key!==null?X.set(j.key,j):X.set(j.index,j),j=j.sibling;return X}function h(j,X){return j=ua(j,X),j.index=0,j.sibling=null,j}function m(j,X,Q){return j.index=Q,e?(Q=j.alternate,Q!==null?(Q=Q.index,Q<X?(j.flags|=67108866,X):Q):(j.flags|=67108866,X)):(j.flags|=1048576,X)}function M(j){return e&&j.alternate===null&&(j.flags|=67108866),j}function A(j,X,Q,pt){return X===null||X.tag!==6?(X=Of(Q,j.mode,pt),X.return=j,X):(X=h(X,Q),X.return=j,X)}function V(j,X,Q,pt){var Jt=Q.type;return Jt===b?ht(j,X,Q.props.children,pt,Q.key):X!==null&&(X.elementType===Jt||typeof Jt=="object"&&Jt!==null&&Jt.$$typeof===k&&Bs(Jt)===X.type)?(X=h(X,Q.props),Xo(X,Q),X.return=j,X):(X=hc(Q.type,Q.key,Q.props,null,j.mode,pt),Xo(X,Q),X.return=j,X)}function J(j,X,Q,pt){return X===null||X.tag!==4||X.stateNode.containerInfo!==Q.containerInfo||X.stateNode.implementation!==Q.implementation?(X=Ff(Q,j.mode,pt),X.return=j,X):(X=h(X,Q.children||[]),X.return=j,X)}function ht(j,X,Q,pt,Jt){return X===null||X.tag!==7?(X=Ls(Q,j.mode,pt,Jt),X.return=j,X):(X=h(X,Q),X.return=j,X)}function mt(j,X,Q){if(typeof X=="string"&&X!==""||typeof X=="number"||typeof X=="bigint")return X=Of(""+X,j.mode,Q),X.return=j,X;if(typeof X=="object"&&X!==null){switch(X.$$typeof){case y:return Q=hc(X.type,X.key,X.props,null,j.mode,Q),Xo(Q,X),Q.return=j,Q;case E:return X=Ff(X,j.mode,Q),X.return=j,X;case k:return X=Bs(X),mt(j,X,Q)}if(ot(X)||$(X))return X=Ls(X,j.mode,Q,null),X.return=j,X;if(typeof X.then=="function")return mt(j,xc(X),Q);if(X.$$typeof===w)return mt(j,mc(j,X),Q);yc(j,X)}return null}function nt(j,X,Q,pt){var Jt=X!==null?X.key:null;if(typeof Q=="string"&&Q!==""||typeof Q=="number"||typeof Q=="bigint")return Jt!==null?null:A(j,X,""+Q,pt);if(typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case y:return Q.key===Jt?V(j,X,Q,pt):null;case E:return Q.key===Jt?J(j,X,Q,pt):null;case k:return Q=Bs(Q),nt(j,X,Q,pt)}if(ot(Q)||$(Q))return Jt!==null?null:ht(j,X,Q,pt,null);if(typeof Q.then=="function")return nt(j,X,xc(Q),pt);if(Q.$$typeof===w)return nt(j,X,mc(j,Q),pt);yc(j,Q)}return null}function lt(j,X,Q,pt,Jt){if(typeof pt=="string"&&pt!==""||typeof pt=="number"||typeof pt=="bigint")return j=j.get(Q)||null,A(X,j,""+pt,Jt);if(typeof pt=="object"&&pt!==null){switch(pt.$$typeof){case y:return j=j.get(pt.key===null?Q:pt.key)||null,V(X,j,pt,Jt);case E:return j=j.get(pt.key===null?Q:pt.key)||null,J(X,j,pt,Jt);case k:return pt=Bs(pt),lt(j,X,Q,pt,Jt)}if(ot(pt)||$(pt))return j=j.get(Q)||null,ht(X,j,pt,Jt,null);if(typeof pt.then=="function")return lt(j,X,Q,xc(pt),Jt);if(pt.$$typeof===w)return lt(j,X,Q,mc(X,pt),Jt);yc(X,pt)}return null}function kt(j,X,Q,pt){for(var Jt=null,Ae=null,Zt=X,fe=X=0,ye=null;Zt!==null&&fe<Q.length;fe++){Zt.index>fe?(ye=Zt,Zt=null):ye=Zt.sibling;var Re=nt(j,Zt,Q[fe],pt);if(Re===null){Zt===null&&(Zt=ye);break}e&&Zt&&Re.alternate===null&&a(j,Zt),X=m(Re,X,fe),Ae===null?Jt=Re:Ae.sibling=Re,Ae=Re,Zt=ye}if(fe===Q.length)return r(j,Zt),Se&&fa(j,fe),Jt;if(Zt===null){for(;fe<Q.length;fe++)Zt=mt(j,Q[fe],pt),Zt!==null&&(X=m(Zt,X,fe),Ae===null?Jt=Zt:Ae.sibling=Zt,Ae=Zt);return Se&&fa(j,fe),Jt}for(Zt=l(Zt);fe<Q.length;fe++)ye=lt(Zt,j,fe,Q[fe],pt),ye!==null&&(e&&ye.alternate!==null&&Zt.delete(ye.key===null?fe:ye.key),X=m(ye,X,fe),Ae===null?Jt=ye:Ae.sibling=ye,Ae=ye);return e&&Zt.forEach(function(hs){return a(j,hs)}),Se&&fa(j,fe),Jt}function ee(j,X,Q,pt){if(Q==null)throw Error(s(151));for(var Jt=null,Ae=null,Zt=X,fe=X=0,ye=null,Re=Q.next();Zt!==null&&!Re.done;fe++,Re=Q.next()){Zt.index>fe?(ye=Zt,Zt=null):ye=Zt.sibling;var hs=nt(j,Zt,Re.value,pt);if(hs===null){Zt===null&&(Zt=ye);break}e&&Zt&&hs.alternate===null&&a(j,Zt),X=m(hs,X,fe),Ae===null?Jt=hs:Ae.sibling=hs,Ae=hs,Zt=ye}if(Re.done)return r(j,Zt),Se&&fa(j,fe),Jt;if(Zt===null){for(;!Re.done;fe++,Re=Q.next())Re=mt(j,Re.value,pt),Re!==null&&(X=m(Re,X,fe),Ae===null?Jt=Re:Ae.sibling=Re,Ae=Re);return Se&&fa(j,fe),Jt}for(Zt=l(Zt);!Re.done;fe++,Re=Q.next())Re=lt(Zt,j,fe,Re.value,pt),Re!==null&&(e&&Re.alternate!==null&&Zt.delete(Re.key===null?fe:Re.key),X=m(Re,X,fe),Ae===null?Jt=Re:Ae.sibling=Re,Ae=Re);return e&&Zt.forEach(function(qb){return a(j,qb)}),Se&&fa(j,fe),Jt}function ke(j,X,Q,pt){if(typeof Q=="object"&&Q!==null&&Q.type===b&&Q.key===null&&(Q=Q.props.children),typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case y:t:{for(var Jt=Q.key;X!==null;){if(X.key===Jt){if(Jt=Q.type,Jt===b){if(X.tag===7){r(j,X.sibling),pt=h(X,Q.props.children),pt.return=j,j=pt;break t}}else if(X.elementType===Jt||typeof Jt=="object"&&Jt!==null&&Jt.$$typeof===k&&Bs(Jt)===X.type){r(j,X.sibling),pt=h(X,Q.props),Xo(pt,Q),pt.return=j,j=pt;break t}r(j,X);break}else a(j,X);X=X.sibling}Q.type===b?(pt=Ls(Q.props.children,j.mode,pt,Q.key),pt.return=j,j=pt):(pt=hc(Q.type,Q.key,Q.props,null,j.mode,pt),Xo(pt,Q),pt.return=j,j=pt)}return M(j);case E:t:{for(Jt=Q.key;X!==null;){if(X.key===Jt)if(X.tag===4&&X.stateNode.containerInfo===Q.containerInfo&&X.stateNode.implementation===Q.implementation){r(j,X.sibling),pt=h(X,Q.children||[]),pt.return=j,j=pt;break t}else{r(j,X);break}else a(j,X);X=X.sibling}pt=Ff(Q,j.mode,pt),pt.return=j,j=pt}return M(j);case k:return Q=Bs(Q),ke(j,X,Q,pt)}if(ot(Q))return kt(j,X,Q,pt);if($(Q)){if(Jt=$(Q),typeof Jt!="function")throw Error(s(150));return Q=Jt.call(Q),ee(j,X,Q,pt)}if(typeof Q.then=="function")return ke(j,X,xc(Q),pt);if(Q.$$typeof===w)return ke(j,X,mc(j,Q),pt);yc(j,Q)}return typeof Q=="string"&&Q!==""||typeof Q=="number"||typeof Q=="bigint"?(Q=""+Q,X!==null&&X.tag===6?(r(j,X.sibling),pt=h(X,Q),pt.return=j,j=pt):(r(j,X),pt=Of(Q,j.mode,pt),pt.return=j,j=pt),M(j)):r(j,X)}return function(j,X,Q,pt){try{ko=0;var Jt=ke(j,X,Q,pt);return Rr=null,Jt}catch(Zt){if(Zt===Ar||Zt===vc)throw Zt;var Ae=oi(29,Zt,null,j.mode);return Ae.lanes=pt,Ae.return=j,Ae}finally{}}}var zs=g0(!0),v0=g0(!1),Za=!1;function jf(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Zf(e,a){e=e.updateQueue,a.updateQueue===e&&(a.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Ka(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Qa(e,a,r){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,(Le&2)!==0){var h=l.pending;return h===null?a.next=a:(a.next=h.next,h.next=a),l.pending=a,a=fc(e),t0(e,null,r),a}return uc(e,l,a,r),fc(e)}function Wo(e,a,r){if(a=a.updateQueue,a!==null&&(a=a.shared,(r&4194048)!==0)){var l=a.lanes;l&=e.pendingLanes,r|=l,a.lanes=r,bo(e,r)}}function Kf(e,a){var r=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,r===l)){var h=null,m=null;if(r=r.firstBaseUpdate,r!==null){do{var M={lane:r.lane,tag:r.tag,payload:r.payload,callback:null,next:null};m===null?h=m=M:m=m.next=M,r=r.next}while(r!==null);m===null?h=m=a:m=m.next=a}else h=m=a;r={baseState:l.baseState,firstBaseUpdate:h,lastBaseUpdate:m,shared:l.shared,callbacks:l.callbacks},e.updateQueue=r;return}e=r.lastBaseUpdate,e===null?r.firstBaseUpdate=a:e.next=a,r.lastBaseUpdate=a}var Qf=!1;function qo(){if(Qf){var e=br;if(e!==null)throw e}}function Yo(e,a,r,l){Qf=!1;var h=e.updateQueue;Za=!1;var m=h.firstBaseUpdate,M=h.lastBaseUpdate,A=h.shared.pending;if(A!==null){h.shared.pending=null;var V=A,J=V.next;V.next=null,M===null?m=J:M.next=J,M=V;var ht=e.alternate;ht!==null&&(ht=ht.updateQueue,A=ht.lastBaseUpdate,A!==M&&(A===null?ht.firstBaseUpdate=J:A.next=J,ht.lastBaseUpdate=V))}if(m!==null){var mt=h.baseState;M=0,ht=J=V=null,A=m;do{var nt=A.lane&-536870913,lt=nt!==A.lane;if(lt?(xe&nt)===nt:(l&nt)===nt){nt!==0&&nt===Tr&&(Qf=!0),ht!==null&&(ht=ht.next={lane:0,tag:A.tag,payload:A.payload,callback:null,next:null});t:{var kt=e,ee=A;nt=a;var ke=r;switch(ee.tag){case 1:if(kt=ee.payload,typeof kt=="function"){mt=kt.call(ke,mt,nt);break t}mt=kt;break t;case 3:kt.flags=kt.flags&-65537|128;case 0:if(kt=ee.payload,nt=typeof kt=="function"?kt.call(ke,mt,nt):kt,nt==null)break t;mt=v({},mt,nt);break t;case 2:Za=!0}}nt=A.callback,nt!==null&&(e.flags|=64,lt&&(e.flags|=8192),lt=h.callbacks,lt===null?h.callbacks=[nt]:lt.push(nt))}else lt={lane:nt,tag:A.tag,payload:A.payload,callback:A.callback,next:null},ht===null?(J=ht=lt,V=mt):ht=ht.next=lt,M|=nt;if(A=A.next,A===null){if(A=h.shared.pending,A===null)break;lt=A,A=lt.next,lt.next=null,h.lastBaseUpdate=lt,h.shared.pending=null}}while(!0);ht===null&&(V=mt),h.baseState=V,h.firstBaseUpdate=J,h.lastBaseUpdate=ht,m===null&&(h.shared.lanes=0),ns|=M,e.lanes=M,e.memoizedState=mt}}function _0(e,a){if(typeof e!="function")throw Error(s(191,e));e.call(a)}function x0(e,a){var r=e.callbacks;if(r!==null)for(e.callbacks=null,e=0;e<r.length;e++)_0(r[e],a)}var Cr=F(null),Sc=F(0);function y0(e,a){e=Ma,gt(Sc,e),gt(Cr,a),Ma=e|a.baseLanes}function Jf(){gt(Sc,Ma),gt(Cr,Cr.current)}function $f(){Ma=Sc.current,at(Cr),at(Sc)}var li=F(null),Ti=null;function Ja(e){var a=e.alternate;gt(on,on.current&1),gt(li,e),Ti===null&&(a===null||Cr.current!==null||a.memoizedState!==null)&&(Ti=e)}function th(e){gt(on,on.current),gt(li,e),Ti===null&&(Ti=e)}function S0(e){e.tag===22?(gt(on,on.current),gt(li,e),Ti===null&&(Ti=e)):$a()}function $a(){gt(on,on.current),gt(li,li.current)}function ci(e){at(li),Ti===e&&(Ti=null),at(on)}var on=F(0);function Mc(e){for(var a=e;a!==null;){if(a.tag===13){var r=a.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||rd(r)||od(r)))return a}else if(a.tag===19&&(a.memoizedProps.revealOrder==="forwards"||a.memoizedProps.revealOrder==="backwards"||a.memoizedProps.revealOrder==="unstable_legacy-backwards"||a.memoizedProps.revealOrder==="together")){if((a.flags&128)!==0)return a}else if(a.child!==null){a.child.return=a,a=a.child;continue}if(a===e)break;for(;a.sibling===null;){if(a.return===null||a.return===e)return null;a=a.return}a.sibling.return=a.return,a=a.sibling}return null}var pa=0,ce=null,He=null,dn=null,Ec=!1,wr=!1,Vs=!1,Tc=0,jo=0,Dr=null,FT=0;function an(){throw Error(s(321))}function eh(e,a){if(a===null)return!1;for(var r=0;r<a.length&&r<e.length;r++)if(!ri(e[r],a[r]))return!1;return!0}function nh(e,a,r,l,h,m){return pa=m,ce=a,a.memoizedState=null,a.updateQueue=null,a.lanes=0,I.H=e===null||e.memoizedState===null?av:vh,Vs=!1,m=r(l,h),Vs=!1,wr&&(m=E0(a,r,l,h)),M0(e),m}function M0(e){I.H=Qo;var a=He!==null&&He.next!==null;if(pa=0,dn=He=ce=null,Ec=!1,jo=0,Dr=null,a)throw Error(s(300));e===null||pn||(e=e.dependencies,e!==null&&pc(e)&&(pn=!0))}function E0(e,a,r,l){ce=e;var h=0;do{if(wr&&(Dr=null),jo=0,wr=!1,25<=h)throw Error(s(301));if(h+=1,dn=He=null,e.updateQueue!=null){var m=e.updateQueue;m.lastEffect=null,m.events=null,m.stores=null,m.memoCache!=null&&(m.memoCache.index=0)}I.H=sv,m=a(r,l)}while(wr);return m}function BT(){var e=I.H,a=e.useState()[0];return a=typeof a.then=="function"?Zo(a):a,e=e.useState()[0],(He!==null?He.memoizedState:null)!==e&&(ce.flags|=1024),a}function ih(){var e=Tc!==0;return Tc=0,e}function ah(e,a,r){a.updateQueue=e.updateQueue,a.flags&=-2053,e.lanes&=~r}function sh(e){if(Ec){for(e=e.memoizedState;e!==null;){var a=e.queue;a!==null&&(a.pending=null),e=e.next}Ec=!1}pa=0,dn=He=ce=null,wr=!1,jo=Tc=0,Dr=null}function kn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return dn===null?ce.memoizedState=dn=e:dn=dn.next=e,dn}function ln(){if(He===null){var e=ce.alternate;e=e!==null?e.memoizedState:null}else e=He.next;var a=dn===null?ce.memoizedState:dn.next;if(a!==null)dn=a,He=e;else{if(e===null)throw ce.alternate===null?Error(s(467)):Error(s(310));He=e,e={memoizedState:He.memoizedState,baseState:He.baseState,baseQueue:He.baseQueue,queue:He.queue,next:null},dn===null?ce.memoizedState=dn=e:dn=dn.next=e}return dn}function bc(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Zo(e){var a=jo;return jo+=1,Dr===null&&(Dr=[]),e=d0(Dr,e,a),a=ce,(dn===null?a.memoizedState:dn.next)===null&&(a=a.alternate,I.H=a===null||a.memoizedState===null?av:vh),e}function Ac(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Zo(e);if(e.$$typeof===w)return Ln(e)}throw Error(s(438,String(e)))}function rh(e){var a=null,r=ce.updateQueue;if(r!==null&&(a=r.memoCache),a==null){var l=ce.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(a={data:l.data.map(function(h){return h.slice()}),index:0})))}if(a==null&&(a={data:[],index:0}),r===null&&(r=bc(),ce.updateQueue=r),r.memoCache=a,r=a.data[a.index],r===void 0)for(r=a.data[a.index]=Array(e),l=0;l<e;l++)r[l]=U;return a.index++,r}function ma(e,a){return typeof a=="function"?a(e):a}function Rc(e){var a=ln();return oh(a,He,e)}function oh(e,a,r){var l=e.queue;if(l===null)throw Error(s(311));l.lastRenderedReducer=r;var h=e.baseQueue,m=l.pending;if(m!==null){if(h!==null){var M=h.next;h.next=m.next,m.next=M}a.baseQueue=h=m,l.pending=null}if(m=e.baseState,h===null)e.memoizedState=m;else{a=h.next;var A=M=null,V=null,J=a,ht=!1;do{var mt=J.lane&-536870913;if(mt!==J.lane?(xe&mt)===mt:(pa&mt)===mt){var nt=J.revertLane;if(nt===0)V!==null&&(V=V.next={lane:0,revertLane:0,gesture:null,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null}),mt===Tr&&(ht=!0);else if((pa&nt)===nt){J=J.next,nt===Tr&&(ht=!0);continue}else mt={lane:0,revertLane:J.revertLane,gesture:null,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null},V===null?(A=V=mt,M=m):V=V.next=mt,ce.lanes|=nt,ns|=nt;mt=J.action,Vs&&r(m,mt),m=J.hasEagerState?J.eagerState:r(m,mt)}else nt={lane:mt,revertLane:J.revertLane,gesture:J.gesture,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null},V===null?(A=V=nt,M=m):V=V.next=nt,ce.lanes|=mt,ns|=mt;J=J.next}while(J!==null&&J!==a);if(V===null?M=m:V.next=A,!ri(m,e.memoizedState)&&(pn=!0,ht&&(r=br,r!==null)))throw r;e.memoizedState=m,e.baseState=M,e.baseQueue=V,l.lastRenderedState=m}return h===null&&(l.lanes=0),[e.memoizedState,l.dispatch]}function lh(e){var a=ln(),r=a.queue;if(r===null)throw Error(s(311));r.lastRenderedReducer=e;var l=r.dispatch,h=r.pending,m=a.memoizedState;if(h!==null){r.pending=null;var M=h=h.next;do m=e(m,M.action),M=M.next;while(M!==h);ri(m,a.memoizedState)||(pn=!0),a.memoizedState=m,a.baseQueue===null&&(a.baseState=m),r.lastRenderedState=m}return[m,l]}function T0(e,a,r){var l=ce,h=ln(),m=Se;if(m){if(r===void 0)throw Error(s(407));r=r()}else r=a();var M=!ri((He||h).memoizedState,r);if(M&&(h.memoizedState=r,pn=!0),h=h.queue,fh(R0.bind(null,l,h,e),[e]),h.getSnapshot!==a||M||dn!==null&&dn.memoizedState.tag&1){if(l.flags|=2048,Ur(9,{destroy:void 0},A0.bind(null,l,h,r,a),null),We===null)throw Error(s(349));m||(pa&127)!==0||b0(l,a,r)}return r}function b0(e,a,r){e.flags|=16384,e={getSnapshot:a,value:r},a=ce.updateQueue,a===null?(a=bc(),ce.updateQueue=a,a.stores=[e]):(r=a.stores,r===null?a.stores=[e]:r.push(e))}function A0(e,a,r,l){a.value=r,a.getSnapshot=l,C0(a)&&w0(e)}function R0(e,a,r){return r(function(){C0(a)&&w0(e)})}function C0(e){var a=e.getSnapshot;e=e.value;try{var r=a();return!ri(e,r)}catch{return!0}}function w0(e){var a=Us(e,2);a!==null&&ti(a,e,2)}function ch(e){var a=kn();if(typeof e=="function"){var r=e;if(e=r(),Vs){Bt(!0);try{r()}finally{Bt(!1)}}}return a.memoizedState=a.baseState=e,a.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ma,lastRenderedState:e},a}function D0(e,a,r,l){return e.baseState=r,oh(e,He,typeof l=="function"?l:ma)}function IT(e,a,r,l,h){if(Dc(e))throw Error(s(485));if(e=a.action,e!==null){var m={payload:h,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(M){m.listeners.push(M)}};I.T!==null?r(!0):m.isTransition=!1,l(m),r=a.pending,r===null?(m.next=a.pending=m,U0(a,m)):(m.next=r.next,a.pending=r.next=m)}}function U0(e,a){var r=a.action,l=a.payload,h=e.state;if(a.isTransition){var m=I.T,M={};I.T=M;try{var A=r(h,l),V=I.S;V!==null&&V(M,A),L0(e,a,A)}catch(J){uh(e,a,J)}finally{m!==null&&M.types!==null&&(m.types=M.types),I.T=m}}else try{m=r(h,l),L0(e,a,m)}catch(J){uh(e,a,J)}}function L0(e,a,r){r!==null&&typeof r=="object"&&typeof r.then=="function"?r.then(function(l){N0(e,a,l)},function(l){return uh(e,a,l)}):N0(e,a,r)}function N0(e,a,r){a.status="fulfilled",a.value=r,P0(a),e.state=r,a=e.pending,a!==null&&(r=a.next,r===a?e.pending=null:(r=r.next,a.next=r,U0(e,r)))}function uh(e,a,r){var l=e.pending;if(e.pending=null,l!==null){l=l.next;do a.status="rejected",a.reason=r,P0(a),a=a.next;while(a!==l)}e.action=null}function P0(e){e=e.listeners;for(var a=0;a<e.length;a++)(0,e[a])()}function O0(e,a){return a}function F0(e,a){if(Se){var r=We.formState;if(r!==null){t:{var l=ce;if(Se){if(Ye){e:{for(var h=Ye,m=Ei;h.nodeType!==8;){if(!m){h=null;break e}if(h=bi(h.nextSibling),h===null){h=null;break e}}m=h.data,h=m==="F!"||m==="F"?h:null}if(h){Ye=bi(h.nextSibling),l=h.data==="F!";break t}}Ya(l)}l=!1}l&&(a=r[0])}}return r=kn(),r.memoizedState=r.baseState=a,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:O0,lastRenderedState:a},r.queue=l,r=ev.bind(null,ce,l),l.dispatch=r,l=ch(!1),m=gh.bind(null,ce,!1,l.queue),l=kn(),h={state:a,dispatch:null,action:e,pending:null},l.queue=h,r=IT.bind(null,ce,h,m,r),h.dispatch=r,l.memoizedState=e,[a,r,!1]}function B0(e){var a=ln();return I0(a,He,e)}function I0(e,a,r){if(a=oh(e,a,O0)[0],e=Rc(ma)[0],typeof a=="object"&&a!==null&&typeof a.then=="function")try{var l=Zo(a)}catch(M){throw M===Ar?vc:M}else l=a;a=ln();var h=a.queue,m=h.dispatch;return r!==a.memoizedState&&(ce.flags|=2048,Ur(9,{destroy:void 0},zT.bind(null,h,r),null)),[l,m,e]}function zT(e,a){e.action=a}function z0(e){var a=ln(),r=He;if(r!==null)return I0(a,r,e);ln(),a=a.memoizedState,r=ln();var l=r.queue.dispatch;return r.memoizedState=e,[a,l,!1]}function Ur(e,a,r,l){return e={tag:e,create:r,deps:l,inst:a,next:null},a=ce.updateQueue,a===null&&(a=bc(),ce.updateQueue=a),r=a.lastEffect,r===null?a.lastEffect=e.next=e:(l=r.next,r.next=e,e.next=l,a.lastEffect=e),e}function V0(){return ln().memoizedState}function Cc(e,a,r,l){var h=kn();ce.flags|=e,h.memoizedState=Ur(1|a,{destroy:void 0},r,l===void 0?null:l)}function wc(e,a,r,l){var h=ln();l=l===void 0?null:l;var m=h.memoizedState.inst;He!==null&&l!==null&&eh(l,He.memoizedState.deps)?h.memoizedState=Ur(a,m,r,l):(ce.flags|=e,h.memoizedState=Ur(1|a,m,r,l))}function H0(e,a){Cc(8390656,8,e,a)}function fh(e,a){wc(2048,8,e,a)}function VT(e){ce.flags|=4;var a=ce.updateQueue;if(a===null)a=bc(),ce.updateQueue=a,a.events=[e];else{var r=a.events;r===null?a.events=[e]:r.push(e)}}function G0(e){var a=ln().memoizedState;return VT({ref:a,nextImpl:e}),function(){if((Le&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}function k0(e,a){return wc(4,2,e,a)}function X0(e,a){return wc(4,4,e,a)}function W0(e,a){if(typeof a=="function"){e=e();var r=a(e);return function(){typeof r=="function"?r():a(null)}}if(a!=null)return e=e(),a.current=e,function(){a.current=null}}function q0(e,a,r){r=r!=null?r.concat([e]):null,wc(4,4,W0.bind(null,a,e),r)}function hh(){}function Y0(e,a){var r=ln();a=a===void 0?null:a;var l=r.memoizedState;return a!==null&&eh(a,l[1])?l[0]:(r.memoizedState=[e,a],e)}function j0(e,a){var r=ln();a=a===void 0?null:a;var l=r.memoizedState;if(a!==null&&eh(a,l[1]))return l[0];if(l=e(),Vs){Bt(!0);try{e()}finally{Bt(!1)}}return r.memoizedState=[l,a],l}function dh(e,a,r){return r===void 0||(pa&1073741824)!==0&&(xe&261930)===0?e.memoizedState=a:(e.memoizedState=r,e=Zv(),ce.lanes|=e,ns|=e,r)}function Z0(e,a,r,l){return ri(r,a)?r:Cr.current!==null?(e=dh(e,r,l),ri(e,a)||(pn=!0),e):(pa&42)===0||(pa&1073741824)!==0&&(xe&261930)===0?(pn=!0,e.memoizedState=r):(e=Zv(),ce.lanes|=e,ns|=e,a)}function K0(e,a,r,l,h){var m=z.p;z.p=m!==0&&8>m?m:8;var M=I.T,A={};I.T=A,gh(e,!1,a,r);try{var V=h(),J=I.S;if(J!==null&&J(A,V),V!==null&&typeof V=="object"&&typeof V.then=="function"){var ht=OT(V,l);Ko(e,a,ht,hi(e))}else Ko(e,a,l,hi(e))}catch(mt){Ko(e,a,{then:function(){},status:"rejected",reason:mt},hi())}finally{z.p=m,M!==null&&A.types!==null&&(M.types=A.types),I.T=M}}function HT(){}function ph(e,a,r,l){if(e.tag!==5)throw Error(s(476));var h=Q0(e).queue;K0(e,h,a,K,r===null?HT:function(){return J0(e),r(l)})}function Q0(e){var a=e.memoizedState;if(a!==null)return a;a={memoizedState:K,baseState:K,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ma,lastRenderedState:K},next:null};var r={};return a.next={memoizedState:r,baseState:r,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ma,lastRenderedState:r},next:null},e.memoizedState=a,e=e.alternate,e!==null&&(e.memoizedState=a),a}function J0(e){var a=Q0(e);a.next===null&&(a=e.alternate.memoizedState),Ko(e,a.next.queue,{},hi())}function mh(){return Ln(dl)}function $0(){return ln().memoizedState}function tv(){return ln().memoizedState}function GT(e){for(var a=e.return;a!==null;){switch(a.tag){case 24:case 3:var r=hi();e=Ka(r);var l=Qa(a,e,r);l!==null&&(ti(l,a,r),Wo(l,a,r)),a={cache:Xf()},e.payload=a;return}a=a.return}}function kT(e,a,r){var l=hi();r={lane:l,revertLane:0,gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},Dc(e)?nv(a,r):(r=Nf(e,a,r,l),r!==null&&(ti(r,e,l),iv(r,a,l)))}function ev(e,a,r){var l=hi();Ko(e,a,r,l)}function Ko(e,a,r,l){var h={lane:l,revertLane:0,gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null};if(Dc(e))nv(a,h);else{var m=e.alternate;if(e.lanes===0&&(m===null||m.lanes===0)&&(m=a.lastRenderedReducer,m!==null))try{var M=a.lastRenderedState,A=m(M,r);if(h.hasEagerState=!0,h.eagerState=A,ri(A,M))return uc(e,a,h,0),We===null&&cc(),!1}catch{}finally{}if(r=Nf(e,a,h,l),r!==null)return ti(r,e,l),iv(r,a,l),!0}return!1}function gh(e,a,r,l){if(l={lane:2,revertLane:jh(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},Dc(e)){if(a)throw Error(s(479))}else a=Nf(e,r,l,2),a!==null&&ti(a,e,2)}function Dc(e){var a=e.alternate;return e===ce||a!==null&&a===ce}function nv(e,a){wr=Ec=!0;var r=e.pending;r===null?a.next=a:(a.next=r.next,r.next=a),e.pending=a}function iv(e,a,r){if((r&4194048)!==0){var l=a.lanes;l&=e.pendingLanes,r|=l,a.lanes=r,bo(e,r)}}var Qo={readContext:Ln,use:Ac,useCallback:an,useContext:an,useEffect:an,useImperativeHandle:an,useLayoutEffect:an,useInsertionEffect:an,useMemo:an,useReducer:an,useRef:an,useState:an,useDebugValue:an,useDeferredValue:an,useTransition:an,useSyncExternalStore:an,useId:an,useHostTransitionStatus:an,useFormState:an,useActionState:an,useOptimistic:an,useMemoCache:an,useCacheRefresh:an};Qo.useEffectEvent=an;var av={readContext:Ln,use:Ac,useCallback:function(e,a){return kn().memoizedState=[e,a===void 0?null:a],e},useContext:Ln,useEffect:H0,useImperativeHandle:function(e,a,r){r=r!=null?r.concat([e]):null,Cc(4194308,4,W0.bind(null,a,e),r)},useLayoutEffect:function(e,a){return Cc(4194308,4,e,a)},useInsertionEffect:function(e,a){Cc(4,2,e,a)},useMemo:function(e,a){var r=kn();a=a===void 0?null:a;var l=e();if(Vs){Bt(!0);try{e()}finally{Bt(!1)}}return r.memoizedState=[l,a],l},useReducer:function(e,a,r){var l=kn();if(r!==void 0){var h=r(a);if(Vs){Bt(!0);try{r(a)}finally{Bt(!1)}}}else h=a;return l.memoizedState=l.baseState=h,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:h},l.queue=e,e=e.dispatch=kT.bind(null,ce,e),[l.memoizedState,e]},useRef:function(e){var a=kn();return e={current:e},a.memoizedState=e},useState:function(e){e=ch(e);var a=e.queue,r=ev.bind(null,ce,a);return a.dispatch=r,[e.memoizedState,r]},useDebugValue:hh,useDeferredValue:function(e,a){var r=kn();return dh(r,e,a)},useTransition:function(){var e=ch(!1);return e=K0.bind(null,ce,e.queue,!0,!1),kn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,a,r){var l=ce,h=kn();if(Se){if(r===void 0)throw Error(s(407));r=r()}else{if(r=a(),We===null)throw Error(s(349));(xe&127)!==0||b0(l,a,r)}h.memoizedState=r;var m={value:r,getSnapshot:a};return h.queue=m,H0(R0.bind(null,l,m,e),[e]),l.flags|=2048,Ur(9,{destroy:void 0},A0.bind(null,l,m,r,a),null),r},useId:function(){var e=kn(),a=We.identifierPrefix;if(Se){var r=ji,l=Yi;r=(l&~(1<<32-Ot(l)-1)).toString(32)+r,a="_"+a+"R_"+r,r=Tc++,0<r&&(a+="H"+r.toString(32)),a+="_"}else r=FT++,a="_"+a+"r_"+r.toString(32)+"_";return e.memoizedState=a},useHostTransitionStatus:mh,useFormState:F0,useActionState:F0,useOptimistic:function(e){var a=kn();a.memoizedState=a.baseState=e;var r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return a.queue=r,a=gh.bind(null,ce,!0,r),r.dispatch=a,[e,a]},useMemoCache:rh,useCacheRefresh:function(){return kn().memoizedState=GT.bind(null,ce)},useEffectEvent:function(e){var a=kn(),r={impl:e};return a.memoizedState=r,function(){if((Le&2)!==0)throw Error(s(440));return r.impl.apply(void 0,arguments)}}},vh={readContext:Ln,use:Ac,useCallback:Y0,useContext:Ln,useEffect:fh,useImperativeHandle:q0,useInsertionEffect:k0,useLayoutEffect:X0,useMemo:j0,useReducer:Rc,useRef:V0,useState:function(){return Rc(ma)},useDebugValue:hh,useDeferredValue:function(e,a){var r=ln();return Z0(r,He.memoizedState,e,a)},useTransition:function(){var e=Rc(ma)[0],a=ln().memoizedState;return[typeof e=="boolean"?e:Zo(e),a]},useSyncExternalStore:T0,useId:$0,useHostTransitionStatus:mh,useFormState:B0,useActionState:B0,useOptimistic:function(e,a){var r=ln();return D0(r,He,e,a)},useMemoCache:rh,useCacheRefresh:tv};vh.useEffectEvent=G0;var sv={readContext:Ln,use:Ac,useCallback:Y0,useContext:Ln,useEffect:fh,useImperativeHandle:q0,useInsertionEffect:k0,useLayoutEffect:X0,useMemo:j0,useReducer:lh,useRef:V0,useState:function(){return lh(ma)},useDebugValue:hh,useDeferredValue:function(e,a){var r=ln();return He===null?dh(r,e,a):Z0(r,He.memoizedState,e,a)},useTransition:function(){var e=lh(ma)[0],a=ln().memoizedState;return[typeof e=="boolean"?e:Zo(e),a]},useSyncExternalStore:T0,useId:$0,useHostTransitionStatus:mh,useFormState:z0,useActionState:z0,useOptimistic:function(e,a){var r=ln();return He!==null?D0(r,He,e,a):(r.baseState=e,[e,r.queue.dispatch])},useMemoCache:rh,useCacheRefresh:tv};sv.useEffectEvent=G0;function _h(e,a,r,l){a=e.memoizedState,r=r(l,a),r=r==null?a:v({},a,r),e.memoizedState=r,e.lanes===0&&(e.updateQueue.baseState=r)}var xh={enqueueSetState:function(e,a,r){e=e._reactInternals;var l=hi(),h=Ka(l);h.payload=a,r!=null&&(h.callback=r),a=Qa(e,h,l),a!==null&&(ti(a,e,l),Wo(a,e,l))},enqueueReplaceState:function(e,a,r){e=e._reactInternals;var l=hi(),h=Ka(l);h.tag=1,h.payload=a,r!=null&&(h.callback=r),a=Qa(e,h,l),a!==null&&(ti(a,e,l),Wo(a,e,l))},enqueueForceUpdate:function(e,a){e=e._reactInternals;var r=hi(),l=Ka(r);l.tag=2,a!=null&&(l.callback=a),a=Qa(e,l,r),a!==null&&(ti(a,e,r),Wo(a,e,r))}};function rv(e,a,r,l,h,m,M){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,m,M):a.prototype&&a.prototype.isPureReactComponent?!Bo(r,l)||!Bo(h,m):!0}function ov(e,a,r,l){e=a.state,typeof a.componentWillReceiveProps=="function"&&a.componentWillReceiveProps(r,l),typeof a.UNSAFE_componentWillReceiveProps=="function"&&a.UNSAFE_componentWillReceiveProps(r,l),a.state!==e&&xh.enqueueReplaceState(a,a.state,null)}function Hs(e,a){var r=a;if("ref"in a){r={};for(var l in a)l!=="ref"&&(r[l]=a[l])}if(e=e.defaultProps){r===a&&(r=v({},r));for(var h in e)r[h]===void 0&&(r[h]=e[h])}return r}function lv(e){lc(e)}function cv(e){console.error(e)}function uv(e){lc(e)}function Uc(e,a){try{var r=e.onUncaughtError;r(a.value,{componentStack:a.stack})}catch(l){setTimeout(function(){throw l})}}function fv(e,a,r){try{var l=e.onCaughtError;l(r.value,{componentStack:r.stack,errorBoundary:a.tag===1?a.stateNode:null})}catch(h){setTimeout(function(){throw h})}}function yh(e,a,r){return r=Ka(r),r.tag=3,r.payload={element:null},r.callback=function(){Uc(e,a)},r}function hv(e){return e=Ka(e),e.tag=3,e}function dv(e,a,r,l){var h=r.type.getDerivedStateFromError;if(typeof h=="function"){var m=l.value;e.payload=function(){return h(m)},e.callback=function(){fv(a,r,l)}}var M=r.stateNode;M!==null&&typeof M.componentDidCatch=="function"&&(e.callback=function(){fv(a,r,l),typeof h!="function"&&(is===null?is=new Set([this]):is.add(this));var A=l.stack;this.componentDidCatch(l.value,{componentStack:A!==null?A:""})})}function XT(e,a,r,l,h){if(r.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(a=r.alternate,a!==null&&Er(a,r,h,!0),r=li.current,r!==null){switch(r.tag){case 31:case 13:return Ti===null?kc():r.alternate===null&&sn===0&&(sn=3),r.flags&=-257,r.flags|=65536,r.lanes=h,l===_c?r.flags|=16384:(a=r.updateQueue,a===null?r.updateQueue=new Set([l]):a.add(l),Wh(e,l,h)),!1;case 22:return r.flags|=65536,l===_c?r.flags|=16384:(a=r.updateQueue,a===null?(a={transitions:null,markerInstances:null,retryQueue:new Set([l])},r.updateQueue=a):(r=a.retryQueue,r===null?a.retryQueue=new Set([l]):r.add(l)),Wh(e,l,h)),!1}throw Error(s(435,r.tag))}return Wh(e,l,h),kc(),!1}if(Se)return a=li.current,a!==null?((a.flags&65536)===0&&(a.flags|=256),a.flags|=65536,a.lanes=h,l!==zf&&(e=Error(s(422),{cause:l}),Vo(yi(e,r)))):(l!==zf&&(a=Error(s(423),{cause:l}),Vo(yi(a,r))),e=e.current.alternate,e.flags|=65536,h&=-h,e.lanes|=h,l=yi(l,r),h=yh(e.stateNode,l,h),Kf(e,h),sn!==4&&(sn=2)),!1;var m=Error(s(520),{cause:l});if(m=yi(m,r),sl===null?sl=[m]:sl.push(m),sn!==4&&(sn=2),a===null)return!0;l=yi(l,r),r=a;do{switch(r.tag){case 3:return r.flags|=65536,e=h&-h,r.lanes|=e,e=yh(r.stateNode,l,e),Kf(r,e),!1;case 1:if(a=r.type,m=r.stateNode,(r.flags&128)===0&&(typeof a.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(is===null||!is.has(m))))return r.flags|=65536,h&=-h,r.lanes|=h,h=hv(h),dv(h,e,r,l),Kf(r,h),!1}r=r.return}while(r!==null);return!1}var Sh=Error(s(461)),pn=!1;function Nn(e,a,r,l){a.child=e===null?v0(a,null,r,l):zs(a,e.child,r,l)}function pv(e,a,r,l,h){r=r.render;var m=a.ref;if("ref"in l){var M={};for(var A in l)A!=="ref"&&(M[A]=l[A])}else M=l;return Os(a),l=nh(e,a,r,M,m,h),A=ih(),e!==null&&!pn?(ah(e,a,h),ga(e,a,h)):(Se&&A&&Bf(a),a.flags|=1,Nn(e,a,l,h),a.child)}function mv(e,a,r,l,h){if(e===null){var m=r.type;return typeof m=="function"&&!Pf(m)&&m.defaultProps===void 0&&r.compare===null?(a.tag=15,a.type=m,gv(e,a,m,l,h)):(e=hc(r.type,null,l,a,a.mode,h),e.ref=a.ref,e.return=a,a.child=e)}if(m=e.child,!wh(e,h)){var M=m.memoizedProps;if(r=r.compare,r=r!==null?r:Bo,r(M,l)&&e.ref===a.ref)return ga(e,a,h)}return a.flags|=1,e=ua(m,l),e.ref=a.ref,e.return=a,a.child=e}function gv(e,a,r,l,h){if(e!==null){var m=e.memoizedProps;if(Bo(m,l)&&e.ref===a.ref)if(pn=!1,a.pendingProps=l=m,wh(e,h))(e.flags&131072)!==0&&(pn=!0);else return a.lanes=e.lanes,ga(e,a,h)}return Mh(e,a,r,l,h)}function vv(e,a,r,l){var h=l.children,m=e!==null?e.memoizedState:null;if(e===null&&a.stateNode===null&&(a.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if((a.flags&128)!==0){if(m=m!==null?m.baseLanes|r:r,e!==null){for(l=a.child=e.child,h=0;l!==null;)h=h|l.lanes|l.childLanes,l=l.sibling;l=h&~m}else l=0,a.child=null;return _v(e,a,m,r,l)}if((r&536870912)!==0)a.memoizedState={baseLanes:0,cachePool:null},e!==null&&gc(a,m!==null?m.cachePool:null),m!==null?y0(a,m):Jf(),S0(a);else return l=a.lanes=536870912,_v(e,a,m!==null?m.baseLanes|r:r,r,l)}else m!==null?(gc(a,m.cachePool),y0(a,m),$a(),a.memoizedState=null):(e!==null&&gc(a,null),Jf(),$a());return Nn(e,a,h,r),a.child}function Jo(e,a){return e!==null&&e.tag===22||a.stateNode!==null||(a.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),a.sibling}function _v(e,a,r,l,h){var m=qf();return m=m===null?null:{parent:hn._currentValue,pool:m},a.memoizedState={baseLanes:r,cachePool:m},e!==null&&gc(a,null),Jf(),S0(a),e!==null&&Er(e,a,l,!0),a.childLanes=h,null}function Lc(e,a){return a=Pc({mode:a.mode,children:a.children},e.mode),a.ref=e.ref,e.child=a,a.return=e,a}function xv(e,a,r){return zs(a,e.child,null,r),e=Lc(a,a.pendingProps),e.flags|=2,ci(a),a.memoizedState=null,e}function WT(e,a,r){var l=a.pendingProps,h=(a.flags&128)!==0;if(a.flags&=-129,e===null){if(Se){if(l.mode==="hidden")return e=Lc(a,l),a.lanes=536870912,Jo(null,e);if(th(a),(e=Ye)?(e=U_(e,Ei),e=e!==null&&e.data==="&"?e:null,e!==null&&(a.memoizedState={dehydrated:e,treeContext:Wa!==null?{id:Yi,overflow:ji}:null,retryLane:536870912,hydrationErrors:null},r=n0(e),r.return=a,a.child=r,Un=a,Ye=null)):e=null,e===null)throw Ya(a);return a.lanes=536870912,null}return Lc(a,l)}var m=e.memoizedState;if(m!==null){var M=m.dehydrated;if(th(a),h)if(a.flags&256)a.flags&=-257,a=xv(e,a,r);else if(a.memoizedState!==null)a.child=e.child,a.flags|=128,a=null;else throw Error(s(558));else if(pn||Er(e,a,r,!1),h=(r&e.childLanes)!==0,pn||h){if(l=We,l!==null&&(M=lr(l,r),M!==0&&M!==m.retryLane))throw m.retryLane=M,Us(e,M),ti(l,e,M),Sh;kc(),a=xv(e,a,r)}else e=m.treeContext,Ye=bi(M.nextSibling),Un=a,Se=!0,qa=null,Ei=!1,e!==null&&s0(a,e),a=Lc(a,l),a.flags|=4096;return a}return e=ua(e.child,{mode:l.mode,children:l.children}),e.ref=a.ref,a.child=e,e.return=a,e}function Nc(e,a){var r=a.ref;if(r===null)e!==null&&e.ref!==null&&(a.flags|=4194816);else{if(typeof r!="function"&&typeof r!="object")throw Error(s(284));(e===null||e.ref!==r)&&(a.flags|=4194816)}}function Mh(e,a,r,l,h){return Os(a),r=nh(e,a,r,l,void 0,h),l=ih(),e!==null&&!pn?(ah(e,a,h),ga(e,a,h)):(Se&&l&&Bf(a),a.flags|=1,Nn(e,a,r,h),a.child)}function yv(e,a,r,l,h,m){return Os(a),a.updateQueue=null,r=E0(a,l,r,h),M0(e),l=ih(),e!==null&&!pn?(ah(e,a,m),ga(e,a,m)):(Se&&l&&Bf(a),a.flags|=1,Nn(e,a,r,m),a.child)}function Sv(e,a,r,l,h){if(Os(a),a.stateNode===null){var m=xr,M=r.contextType;typeof M=="object"&&M!==null&&(m=Ln(M)),m=new r(l,m),a.memoizedState=m.state!==null&&m.state!==void 0?m.state:null,m.updater=xh,a.stateNode=m,m._reactInternals=a,m=a.stateNode,m.props=l,m.state=a.memoizedState,m.refs={},jf(a),M=r.contextType,m.context=typeof M=="object"&&M!==null?Ln(M):xr,m.state=a.memoizedState,M=r.getDerivedStateFromProps,typeof M=="function"&&(_h(a,r,M,l),m.state=a.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof m.getSnapshotBeforeUpdate=="function"||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(M=m.state,typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount(),M!==m.state&&xh.enqueueReplaceState(m,m.state,null),Yo(a,l,m,h),qo(),m.state=a.memoizedState),typeof m.componentDidMount=="function"&&(a.flags|=4194308),l=!0}else if(e===null){m=a.stateNode;var A=a.memoizedProps,V=Hs(r,A);m.props=V;var J=m.context,ht=r.contextType;M=xr,typeof ht=="object"&&ht!==null&&(M=Ln(ht));var mt=r.getDerivedStateFromProps;ht=typeof mt=="function"||typeof m.getSnapshotBeforeUpdate=="function",A=a.pendingProps!==A,ht||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(A||J!==M)&&ov(a,m,l,M),Za=!1;var nt=a.memoizedState;m.state=nt,Yo(a,l,m,h),qo(),J=a.memoizedState,A||nt!==J||Za?(typeof mt=="function"&&(_h(a,r,mt,l),J=a.memoizedState),(V=Za||rv(a,r,V,l,nt,J,M))?(ht||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount()),typeof m.componentDidMount=="function"&&(a.flags|=4194308)):(typeof m.componentDidMount=="function"&&(a.flags|=4194308),a.memoizedProps=l,a.memoizedState=J),m.props=l,m.state=J,m.context=M,l=V):(typeof m.componentDidMount=="function"&&(a.flags|=4194308),l=!1)}else{m=a.stateNode,Zf(e,a),M=a.memoizedProps,ht=Hs(r,M),m.props=ht,mt=a.pendingProps,nt=m.context,J=r.contextType,V=xr,typeof J=="object"&&J!==null&&(V=Ln(J)),A=r.getDerivedStateFromProps,(J=typeof A=="function"||typeof m.getSnapshotBeforeUpdate=="function")||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(M!==mt||nt!==V)&&ov(a,m,l,V),Za=!1,nt=a.memoizedState,m.state=nt,Yo(a,l,m,h),qo();var lt=a.memoizedState;M!==mt||nt!==lt||Za||e!==null&&e.dependencies!==null&&pc(e.dependencies)?(typeof A=="function"&&(_h(a,r,A,l),lt=a.memoizedState),(ht=Za||rv(a,r,ht,l,nt,lt,V)||e!==null&&e.dependencies!==null&&pc(e.dependencies))?(J||typeof m.UNSAFE_componentWillUpdate!="function"&&typeof m.componentWillUpdate!="function"||(typeof m.componentWillUpdate=="function"&&m.componentWillUpdate(l,lt,V),typeof m.UNSAFE_componentWillUpdate=="function"&&m.UNSAFE_componentWillUpdate(l,lt,V)),typeof m.componentDidUpdate=="function"&&(a.flags|=4),typeof m.getSnapshotBeforeUpdate=="function"&&(a.flags|=1024)):(typeof m.componentDidUpdate!="function"||M===e.memoizedProps&&nt===e.memoizedState||(a.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||M===e.memoizedProps&&nt===e.memoizedState||(a.flags|=1024),a.memoizedProps=l,a.memoizedState=lt),m.props=l,m.state=lt,m.context=V,l=ht):(typeof m.componentDidUpdate!="function"||M===e.memoizedProps&&nt===e.memoizedState||(a.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||M===e.memoizedProps&&nt===e.memoizedState||(a.flags|=1024),l=!1)}return m=l,Nc(e,a),l=(a.flags&128)!==0,m||l?(m=a.stateNode,r=l&&typeof r.getDerivedStateFromError!="function"?null:m.render(),a.flags|=1,e!==null&&l?(a.child=zs(a,e.child,null,h),a.child=zs(a,null,r,h)):Nn(e,a,r,h),a.memoizedState=m.state,e=a.child):e=ga(e,a,h),e}function Mv(e,a,r,l){return Ns(),a.flags|=256,Nn(e,a,r,l),a.child}var Eh={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Th(e){return{baseLanes:e,cachePool:f0()}}function bh(e,a,r){return e=e!==null?e.childLanes&~r:0,a&&(e|=fi),e}function Ev(e,a,r){var l=a.pendingProps,h=!1,m=(a.flags&128)!==0,M;if((M=m)||(M=e!==null&&e.memoizedState===null?!1:(on.current&2)!==0),M&&(h=!0,a.flags&=-129),M=(a.flags&32)!==0,a.flags&=-33,e===null){if(Se){if(h?Ja(a):$a(),(e=Ye)?(e=U_(e,Ei),e=e!==null&&e.data!=="&"?e:null,e!==null&&(a.memoizedState={dehydrated:e,treeContext:Wa!==null?{id:Yi,overflow:ji}:null,retryLane:536870912,hydrationErrors:null},r=n0(e),r.return=a,a.child=r,Un=a,Ye=null)):e=null,e===null)throw Ya(a);return od(e)?a.lanes=32:a.lanes=536870912,null}var A=l.children;return l=l.fallback,h?($a(),h=a.mode,A=Pc({mode:"hidden",children:A},h),l=Ls(l,h,r,null),A.return=a,l.return=a,A.sibling=l,a.child=A,l=a.child,l.memoizedState=Th(r),l.childLanes=bh(e,M,r),a.memoizedState=Eh,Jo(null,l)):(Ja(a),Ah(a,A))}var V=e.memoizedState;if(V!==null&&(A=V.dehydrated,A!==null)){if(m)a.flags&256?(Ja(a),a.flags&=-257,a=Rh(e,a,r)):a.memoizedState!==null?($a(),a.child=e.child,a.flags|=128,a=null):($a(),A=l.fallback,h=a.mode,l=Pc({mode:"visible",children:l.children},h),A=Ls(A,h,r,null),A.flags|=2,l.return=a,A.return=a,l.sibling=A,a.child=l,zs(a,e.child,null,r),l=a.child,l.memoizedState=Th(r),l.childLanes=bh(e,M,r),a.memoizedState=Eh,a=Jo(null,l));else if(Ja(a),od(A)){if(M=A.nextSibling&&A.nextSibling.dataset,M)var J=M.dgst;M=J,l=Error(s(419)),l.stack="",l.digest=M,Vo({value:l,source:null,stack:null}),a=Rh(e,a,r)}else if(pn||Er(e,a,r,!1),M=(r&e.childLanes)!==0,pn||M){if(M=We,M!==null&&(l=lr(M,r),l!==0&&l!==V.retryLane))throw V.retryLane=l,Us(e,l),ti(M,e,l),Sh;rd(A)||kc(),a=Rh(e,a,r)}else rd(A)?(a.flags|=192,a.child=e.child,a=null):(e=V.treeContext,Ye=bi(A.nextSibling),Un=a,Se=!0,qa=null,Ei=!1,e!==null&&s0(a,e),a=Ah(a,l.children),a.flags|=4096);return a}return h?($a(),A=l.fallback,h=a.mode,V=e.child,J=V.sibling,l=ua(V,{mode:"hidden",children:l.children}),l.subtreeFlags=V.subtreeFlags&65011712,J!==null?A=ua(J,A):(A=Ls(A,h,r,null),A.flags|=2),A.return=a,l.return=a,l.sibling=A,a.child=l,Jo(null,l),l=a.child,A=e.child.memoizedState,A===null?A=Th(r):(h=A.cachePool,h!==null?(V=hn._currentValue,h=h.parent!==V?{parent:V,pool:V}:h):h=f0(),A={baseLanes:A.baseLanes|r,cachePool:h}),l.memoizedState=A,l.childLanes=bh(e,M,r),a.memoizedState=Eh,Jo(e.child,l)):(Ja(a),r=e.child,e=r.sibling,r=ua(r,{mode:"visible",children:l.children}),r.return=a,r.sibling=null,e!==null&&(M=a.deletions,M===null?(a.deletions=[e],a.flags|=16):M.push(e)),a.child=r,a.memoizedState=null,r)}function Ah(e,a){return a=Pc({mode:"visible",children:a},e.mode),a.return=e,e.child=a}function Pc(e,a){return e=oi(22,e,null,a),e.lanes=0,e}function Rh(e,a,r){return zs(a,e.child,null,r),e=Ah(a,a.pendingProps.children),e.flags|=2,a.memoizedState=null,e}function Tv(e,a,r){e.lanes|=a;var l=e.alternate;l!==null&&(l.lanes|=a),Gf(e.return,a,r)}function Ch(e,a,r,l,h,m){var M=e.memoizedState;M===null?e.memoizedState={isBackwards:a,rendering:null,renderingStartTime:0,last:l,tail:r,tailMode:h,treeForkCount:m}:(M.isBackwards=a,M.rendering=null,M.renderingStartTime=0,M.last=l,M.tail=r,M.tailMode=h,M.treeForkCount=m)}function bv(e,a,r){var l=a.pendingProps,h=l.revealOrder,m=l.tail;l=l.children;var M=on.current,A=(M&2)!==0;if(A?(M=M&1|2,a.flags|=128):M&=1,gt(on,M),Nn(e,a,l,r),l=Se?zo:0,!A&&e!==null&&(e.flags&128)!==0)t:for(e=a.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Tv(e,r,a);else if(e.tag===19)Tv(e,r,a);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===a)break t;for(;e.sibling===null;){if(e.return===null||e.return===a)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(h){case"forwards":for(r=a.child,h=null;r!==null;)e=r.alternate,e!==null&&Mc(e)===null&&(h=r),r=r.sibling;r=h,r===null?(h=a.child,a.child=null):(h=r.sibling,r.sibling=null),Ch(a,!1,h,r,m,l);break;case"backwards":case"unstable_legacy-backwards":for(r=null,h=a.child,a.child=null;h!==null;){if(e=h.alternate,e!==null&&Mc(e)===null){a.child=h;break}e=h.sibling,h.sibling=r,r=h,h=e}Ch(a,!0,r,null,m,l);break;case"together":Ch(a,!1,null,null,void 0,l);break;default:a.memoizedState=null}return a.child}function ga(e,a,r){if(e!==null&&(a.dependencies=e.dependencies),ns|=a.lanes,(r&a.childLanes)===0)if(e!==null){if(Er(e,a,r,!1),(r&a.childLanes)===0)return null}else return null;if(e!==null&&a.child!==e.child)throw Error(s(153));if(a.child!==null){for(e=a.child,r=ua(e,e.pendingProps),a.child=r,r.return=a;e.sibling!==null;)e=e.sibling,r=r.sibling=ua(e,e.pendingProps),r.return=a;r.sibling=null}return a.child}function wh(e,a){return(e.lanes&a)!==0?!0:(e=e.dependencies,!!(e!==null&&pc(e)))}function qT(e,a,r){switch(a.tag){case 3:Dt(a,a.stateNode.containerInfo),ja(a,hn,e.memoizedState.cache),Ns();break;case 27:case 5:Ht(a);break;case 4:Dt(a,a.stateNode.containerInfo);break;case 10:ja(a,a.type,a.memoizedProps.value);break;case 31:if(a.memoizedState!==null)return a.flags|=128,th(a),null;break;case 13:var l=a.memoizedState;if(l!==null)return l.dehydrated!==null?(Ja(a),a.flags|=128,null):(r&a.child.childLanes)!==0?Ev(e,a,r):(Ja(a),e=ga(e,a,r),e!==null?e.sibling:null);Ja(a);break;case 19:var h=(e.flags&128)!==0;if(l=(r&a.childLanes)!==0,l||(Er(e,a,r,!1),l=(r&a.childLanes)!==0),h){if(l)return bv(e,a,r);a.flags|=128}if(h=a.memoizedState,h!==null&&(h.rendering=null,h.tail=null,h.lastEffect=null),gt(on,on.current),l)break;return null;case 22:return a.lanes=0,vv(e,a,r,a.pendingProps);case 24:ja(a,hn,e.memoizedState.cache)}return ga(e,a,r)}function Av(e,a,r){if(e!==null)if(e.memoizedProps!==a.pendingProps)pn=!0;else{if(!wh(e,r)&&(a.flags&128)===0)return pn=!1,qT(e,a,r);pn=(e.flags&131072)!==0}else pn=!1,Se&&(a.flags&1048576)!==0&&a0(a,zo,a.index);switch(a.lanes=0,a.tag){case 16:t:{var l=a.pendingProps;if(e=Bs(a.elementType),a.type=e,typeof e=="function")Pf(e)?(l=Hs(e,l),a.tag=1,a=Sv(null,a,e,l,r)):(a.tag=0,a=Mh(null,a,e,l,r));else{if(e!=null){var h=e.$$typeof;if(h===L){a.tag=11,a=pv(null,a,e,l,r);break t}else if(h===P){a.tag=14,a=mv(null,a,e,l,r);break t}}throw a=ft(e)||e,Error(s(306,a,""))}}return a;case 0:return Mh(e,a,a.type,a.pendingProps,r);case 1:return l=a.type,h=Hs(l,a.pendingProps),Sv(e,a,l,h,r);case 3:t:{if(Dt(a,a.stateNode.containerInfo),e===null)throw Error(s(387));l=a.pendingProps;var m=a.memoizedState;h=m.element,Zf(e,a),Yo(a,l,null,r);var M=a.memoizedState;if(l=M.cache,ja(a,hn,l),l!==m.cache&&kf(a,[hn],r,!0),qo(),l=M.element,m.isDehydrated)if(m={element:l,isDehydrated:!1,cache:M.cache},a.updateQueue.baseState=m,a.memoizedState=m,a.flags&256){a=Mv(e,a,l,r);break t}else if(l!==h){h=yi(Error(s(424)),a),Vo(h),a=Mv(e,a,l,r);break t}else{switch(e=a.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Ye=bi(e.firstChild),Un=a,Se=!0,qa=null,Ei=!0,r=v0(a,null,l,r),a.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling}else{if(Ns(),l===h){a=ga(e,a,r);break t}Nn(e,a,l,r)}a=a.child}return a;case 26:return Nc(e,a),e===null?(r=B_(a.type,null,a.pendingProps,null))?a.memoizedState=r:Se||(r=a.type,e=a.pendingProps,l=Kc(it.current).createElement(r),l[fn]=a,l[bn]=e,Pn(l,r,e),R(l),a.stateNode=l):a.memoizedState=B_(a.type,e.memoizedProps,a.pendingProps,e.memoizedState),null;case 27:return Ht(a),e===null&&Se&&(l=a.stateNode=P_(a.type,a.pendingProps,it.current),Un=a,Ei=!0,h=Ye,os(a.type)?(ld=h,Ye=bi(l.firstChild)):Ye=h),Nn(e,a,a.pendingProps.children,r),Nc(e,a),e===null&&(a.flags|=4194304),a.child;case 5:return e===null&&Se&&((h=l=Ye)&&(l=Mb(l,a.type,a.pendingProps,Ei),l!==null?(a.stateNode=l,Un=a,Ye=bi(l.firstChild),Ei=!1,h=!0):h=!1),h||Ya(a)),Ht(a),h=a.type,m=a.pendingProps,M=e!==null?e.memoizedProps:null,l=m.children,id(h,m)?l=null:M!==null&&id(h,M)&&(a.flags|=32),a.memoizedState!==null&&(h=nh(e,a,BT,null,null,r),dl._currentValue=h),Nc(e,a),Nn(e,a,l,r),a.child;case 6:return e===null&&Se&&((e=r=Ye)&&(r=Eb(r,a.pendingProps,Ei),r!==null?(a.stateNode=r,Un=a,Ye=null,e=!0):e=!1),e||Ya(a)),null;case 13:return Ev(e,a,r);case 4:return Dt(a,a.stateNode.containerInfo),l=a.pendingProps,e===null?a.child=zs(a,null,l,r):Nn(e,a,l,r),a.child;case 11:return pv(e,a,a.type,a.pendingProps,r);case 7:return Nn(e,a,a.pendingProps,r),a.child;case 8:return Nn(e,a,a.pendingProps.children,r),a.child;case 12:return Nn(e,a,a.pendingProps.children,r),a.child;case 10:return l=a.pendingProps,ja(a,a.type,l.value),Nn(e,a,l.children,r),a.child;case 9:return h=a.type._context,l=a.pendingProps.children,Os(a),h=Ln(h),l=l(h),a.flags|=1,Nn(e,a,l,r),a.child;case 14:return mv(e,a,a.type,a.pendingProps,r);case 15:return gv(e,a,a.type,a.pendingProps,r);case 19:return bv(e,a,r);case 31:return WT(e,a,r);case 22:return vv(e,a,r,a.pendingProps);case 24:return Os(a),l=Ln(hn),e===null?(h=qf(),h===null&&(h=We,m=Xf(),h.pooledCache=m,m.refCount++,m!==null&&(h.pooledCacheLanes|=r),h=m),a.memoizedState={parent:l,cache:h},jf(a),ja(a,hn,h)):((e.lanes&r)!==0&&(Zf(e,a),Yo(a,null,null,r),qo()),h=e.memoizedState,m=a.memoizedState,h.parent!==l?(h={parent:l,cache:l},a.memoizedState=h,a.lanes===0&&(a.memoizedState=a.updateQueue.baseState=h),ja(a,hn,l)):(l=m.cache,ja(a,hn,l),l!==h.cache&&kf(a,[hn],r,!0))),Nn(e,a,a.pendingProps.children,r),a.child;case 29:throw a.pendingProps}throw Error(s(156,a.tag))}function va(e){e.flags|=4}function Dh(e,a,r,l,h){if((a=(e.mode&32)!==0)&&(a=!1),a){if(e.flags|=16777216,(h&335544128)===h)if(e.stateNode.complete)e.flags|=8192;else if($v())e.flags|=8192;else throw Is=_c,Yf}else e.flags&=-16777217}function Rv(e,a){if(a.type!=="stylesheet"||(a.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!G_(a))if($v())e.flags|=8192;else throw Is=_c,Yf}function Oc(e,a){a!==null&&(e.flags|=4),e.flags&16384&&(a=e.tag!==22?Oe():536870912,e.lanes|=a,Or|=a)}function $o(e,a){if(!Se)switch(e.tailMode){case"hidden":a=e.tail;for(var r=null;a!==null;)a.alternate!==null&&(r=a),a=a.sibling;r===null?e.tail=null:r.sibling=null;break;case"collapsed":r=e.tail;for(var l=null;r!==null;)r.alternate!==null&&(l=r),r=r.sibling;l===null?a||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function je(e){var a=e.alternate!==null&&e.alternate.child===e.child,r=0,l=0;if(a)for(var h=e.child;h!==null;)r|=h.lanes|h.childLanes,l|=h.subtreeFlags&65011712,l|=h.flags&65011712,h.return=e,h=h.sibling;else for(h=e.child;h!==null;)r|=h.lanes|h.childLanes,l|=h.subtreeFlags,l|=h.flags,h.return=e,h=h.sibling;return e.subtreeFlags|=l,e.childLanes=r,a}function YT(e,a,r){var l=a.pendingProps;switch(If(a),a.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return je(a),null;case 1:return je(a),null;case 3:return r=a.stateNode,l=null,e!==null&&(l=e.memoizedState.cache),a.memoizedState.cache!==l&&(a.flags|=2048),da(hn),Xt(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Mr(a)?va(a):e===null||e.memoizedState.isDehydrated&&(a.flags&256)===0||(a.flags|=1024,Vf())),je(a),null;case 26:var h=a.type,m=a.memoizedState;return e===null?(va(a),m!==null?(je(a),Rv(a,m)):(je(a),Dh(a,h,null,l,r))):m?m!==e.memoizedState?(va(a),je(a),Rv(a,m)):(je(a),a.flags&=-16777217):(e=e.memoizedProps,e!==l&&va(a),je(a),Dh(a,h,e,l,r)),null;case 27:if(pe(a),r=it.current,h=a.type,e!==null&&a.stateNode!=null)e.memoizedProps!==l&&va(a);else{if(!l){if(a.stateNode===null)throw Error(s(166));return je(a),null}e=At.current,Mr(a)?r0(a):(e=P_(h,l,r),a.stateNode=e,va(a))}return je(a),null;case 5:if(pe(a),h=a.type,e!==null&&a.stateNode!=null)e.memoizedProps!==l&&va(a);else{if(!l){if(a.stateNode===null)throw Error(s(166));return je(a),null}if(m=At.current,Mr(a))r0(a);else{var M=Kc(it.current);switch(m){case 1:m=M.createElementNS("http://www.w3.org/2000/svg",h);break;case 2:m=M.createElementNS("http://www.w3.org/1998/Math/MathML",h);break;default:switch(h){case"svg":m=M.createElementNS("http://www.w3.org/2000/svg",h);break;case"math":m=M.createElementNS("http://www.w3.org/1998/Math/MathML",h);break;case"script":m=M.createElement("div"),m.innerHTML="<script><\/script>",m=m.removeChild(m.firstChild);break;case"select":m=typeof l.is=="string"?M.createElement("select",{is:l.is}):M.createElement("select"),l.multiple?m.multiple=!0:l.size&&(m.size=l.size);break;default:m=typeof l.is=="string"?M.createElement(h,{is:l.is}):M.createElement(h)}}m[fn]=a,m[bn]=l;t:for(M=a.child;M!==null;){if(M.tag===5||M.tag===6)m.appendChild(M.stateNode);else if(M.tag!==4&&M.tag!==27&&M.child!==null){M.child.return=M,M=M.child;continue}if(M===a)break t;for(;M.sibling===null;){if(M.return===null||M.return===a)break t;M=M.return}M.sibling.return=M.return,M=M.sibling}a.stateNode=m;t:switch(Pn(m,h,l),h){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break t;case"img":l=!0;break t;default:l=!1}l&&va(a)}}return je(a),Dh(a,a.type,e===null?null:e.memoizedProps,a.pendingProps,r),null;case 6:if(e&&a.stateNode!=null)e.memoizedProps!==l&&va(a);else{if(typeof l!="string"&&a.stateNode===null)throw Error(s(166));if(e=it.current,Mr(a)){if(e=a.stateNode,r=a.memoizedProps,l=null,h=Un,h!==null)switch(h.tag){case 27:case 5:l=h.memoizedProps}e[fn]=a,e=!!(e.nodeValue===r||l!==null&&l.suppressHydrationWarning===!0||E_(e.nodeValue,r)),e||Ya(a,!0)}else e=Kc(e).createTextNode(l),e[fn]=a,a.stateNode=e}return je(a),null;case 31:if(r=a.memoizedState,e===null||e.memoizedState!==null){if(l=Mr(a),r!==null){if(e===null){if(!l)throw Error(s(318));if(e=a.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(557));e[fn]=a}else Ns(),(a.flags&128)===0&&(a.memoizedState=null),a.flags|=4;je(a),e=!1}else r=Vf(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=r),e=!0;if(!e)return a.flags&256?(ci(a),a):(ci(a),null);if((a.flags&128)!==0)throw Error(s(558))}return je(a),null;case 13:if(l=a.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(h=Mr(a),l!==null&&l.dehydrated!==null){if(e===null){if(!h)throw Error(s(318));if(h=a.memoizedState,h=h!==null?h.dehydrated:null,!h)throw Error(s(317));h[fn]=a}else Ns(),(a.flags&128)===0&&(a.memoizedState=null),a.flags|=4;je(a),h=!1}else h=Vf(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=h),h=!0;if(!h)return a.flags&256?(ci(a),a):(ci(a),null)}return ci(a),(a.flags&128)!==0?(a.lanes=r,a):(r=l!==null,e=e!==null&&e.memoizedState!==null,r&&(l=a.child,h=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(h=l.alternate.memoizedState.cachePool.pool),m=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(m=l.memoizedState.cachePool.pool),m!==h&&(l.flags|=2048)),r!==e&&r&&(a.child.flags|=8192),Oc(a,a.updateQueue),je(a),null);case 4:return Xt(),e===null&&Jh(a.stateNode.containerInfo),je(a),null;case 10:return da(a.type),je(a),null;case 19:if(at(on),l=a.memoizedState,l===null)return je(a),null;if(h=(a.flags&128)!==0,m=l.rendering,m===null)if(h)$o(l,!1);else{if(sn!==0||e!==null&&(e.flags&128)!==0)for(e=a.child;e!==null;){if(m=Mc(e),m!==null){for(a.flags|=128,$o(l,!1),e=m.updateQueue,a.updateQueue=e,Oc(a,e),a.subtreeFlags=0,e=r,r=a.child;r!==null;)e0(r,e),r=r.sibling;return gt(on,on.current&1|2),Se&&fa(a,l.treeForkCount),a.child}e=e.sibling}l.tail!==null&&T()>Vc&&(a.flags|=128,h=!0,$o(l,!1),a.lanes=4194304)}else{if(!h)if(e=Mc(m),e!==null){if(a.flags|=128,h=!0,e=e.updateQueue,a.updateQueue=e,Oc(a,e),$o(l,!0),l.tail===null&&l.tailMode==="hidden"&&!m.alternate&&!Se)return je(a),null}else 2*T()-l.renderingStartTime>Vc&&r!==536870912&&(a.flags|=128,h=!0,$o(l,!1),a.lanes=4194304);l.isBackwards?(m.sibling=a.child,a.child=m):(e=l.last,e!==null?e.sibling=m:a.child=m,l.last=m)}return l.tail!==null?(e=l.tail,l.rendering=e,l.tail=e.sibling,l.renderingStartTime=T(),e.sibling=null,r=on.current,gt(on,h?r&1|2:r&1),Se&&fa(a,l.treeForkCount),e):(je(a),null);case 22:case 23:return ci(a),$f(),l=a.memoizedState!==null,e!==null?e.memoizedState!==null!==l&&(a.flags|=8192):l&&(a.flags|=8192),l?(r&536870912)!==0&&(a.flags&128)===0&&(je(a),a.subtreeFlags&6&&(a.flags|=8192)):je(a),r=a.updateQueue,r!==null&&Oc(a,r.retryQueue),r=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(r=e.memoizedState.cachePool.pool),l=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(l=a.memoizedState.cachePool.pool),l!==r&&(a.flags|=2048),e!==null&&at(Fs),null;case 24:return r=null,e!==null&&(r=e.memoizedState.cache),a.memoizedState.cache!==r&&(a.flags|=2048),da(hn),je(a),null;case 25:return null;case 30:return null}throw Error(s(156,a.tag))}function jT(e,a){switch(If(a),a.tag){case 1:return e=a.flags,e&65536?(a.flags=e&-65537|128,a):null;case 3:return da(hn),Xt(),e=a.flags,(e&65536)!==0&&(e&128)===0?(a.flags=e&-65537|128,a):null;case 26:case 27:case 5:return pe(a),null;case 31:if(a.memoizedState!==null){if(ci(a),a.alternate===null)throw Error(s(340));Ns()}return e=a.flags,e&65536?(a.flags=e&-65537|128,a):null;case 13:if(ci(a),e=a.memoizedState,e!==null&&e.dehydrated!==null){if(a.alternate===null)throw Error(s(340));Ns()}return e=a.flags,e&65536?(a.flags=e&-65537|128,a):null;case 19:return at(on),null;case 4:return Xt(),null;case 10:return da(a.type),null;case 22:case 23:return ci(a),$f(),e!==null&&at(Fs),e=a.flags,e&65536?(a.flags=e&-65537|128,a):null;case 24:return da(hn),null;case 25:return null;default:return null}}function Cv(e,a){switch(If(a),a.tag){case 3:da(hn),Xt();break;case 26:case 27:case 5:pe(a);break;case 4:Xt();break;case 31:a.memoizedState!==null&&ci(a);break;case 13:ci(a);break;case 19:at(on);break;case 10:da(a.type);break;case 22:case 23:ci(a),$f(),e!==null&&at(Fs);break;case 24:da(hn)}}function tl(e,a){try{var r=a.updateQueue,l=r!==null?r.lastEffect:null;if(l!==null){var h=l.next;r=h;do{if((r.tag&e)===e){l=void 0;var m=r.create,M=r.inst;l=m(),M.destroy=l}r=r.next}while(r!==h)}}catch(A){Ie(a,a.return,A)}}function ts(e,a,r){try{var l=a.updateQueue,h=l!==null?l.lastEffect:null;if(h!==null){var m=h.next;l=m;do{if((l.tag&e)===e){var M=l.inst,A=M.destroy;if(A!==void 0){M.destroy=void 0,h=a;var V=r,J=A;try{J()}catch(ht){Ie(h,V,ht)}}}l=l.next}while(l!==m)}}catch(ht){Ie(a,a.return,ht)}}function wv(e){var a=e.updateQueue;if(a!==null){var r=e.stateNode;try{x0(a,r)}catch(l){Ie(e,e.return,l)}}}function Dv(e,a,r){r.props=Hs(e.type,e.memoizedProps),r.state=e.memoizedState;try{r.componentWillUnmount()}catch(l){Ie(e,a,l)}}function el(e,a){try{var r=e.ref;if(r!==null){switch(e.tag){case 26:case 27:case 5:var l=e.stateNode;break;case 30:l=e.stateNode;break;default:l=e.stateNode}typeof r=="function"?e.refCleanup=r(l):r.current=l}}catch(h){Ie(e,a,h)}}function Zi(e,a){var r=e.ref,l=e.refCleanup;if(r!==null)if(typeof l=="function")try{l()}catch(h){Ie(e,a,h)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof r=="function")try{r(null)}catch(h){Ie(e,a,h)}else r.current=null}function Uv(e){var a=e.type,r=e.memoizedProps,l=e.stateNode;try{t:switch(a){case"button":case"input":case"select":case"textarea":r.autoFocus&&l.focus();break t;case"img":r.src?l.src=r.src:r.srcSet&&(l.srcset=r.srcSet)}}catch(h){Ie(e,e.return,h)}}function Uh(e,a,r){try{var l=e.stateNode;gb(l,e.type,r,a),l[bn]=a}catch(h){Ie(e,e.return,h)}}function Lv(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&os(e.type)||e.tag===4}function Lh(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||Lv(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&os(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Nh(e,a,r){var l=e.tag;if(l===5||l===6)e=e.stateNode,a?(r.nodeType===9?r.body:r.nodeName==="HTML"?r.ownerDocument.body:r).insertBefore(e,a):(a=r.nodeType===9?r.body:r.nodeName==="HTML"?r.ownerDocument.body:r,a.appendChild(e),r=r._reactRootContainer,r!=null||a.onclick!==null||(a.onclick=la));else if(l!==4&&(l===27&&os(e.type)&&(r=e.stateNode,a=null),e=e.child,e!==null))for(Nh(e,a,r),e=e.sibling;e!==null;)Nh(e,a,r),e=e.sibling}function Fc(e,a,r){var l=e.tag;if(l===5||l===6)e=e.stateNode,a?r.insertBefore(e,a):r.appendChild(e);else if(l!==4&&(l===27&&os(e.type)&&(r=e.stateNode),e=e.child,e!==null))for(Fc(e,a,r),e=e.sibling;e!==null;)Fc(e,a,r),e=e.sibling}function Nv(e){var a=e.stateNode,r=e.memoizedProps;try{for(var l=e.type,h=a.attributes;h.length;)a.removeAttributeNode(h[0]);Pn(a,l,r),a[fn]=e,a[bn]=r}catch(m){Ie(e,e.return,m)}}var _a=!1,mn=!1,Ph=!1,Pv=typeof WeakSet=="function"?WeakSet:Set,En=null;function ZT(e,a){if(e=e.containerInfo,ed=iu,e=qg(e),Rf(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else t:{r=(r=e.ownerDocument)&&r.defaultView||window;var l=r.getSelection&&r.getSelection();if(l&&l.rangeCount!==0){r=l.anchorNode;var h=l.anchorOffset,m=l.focusNode;l=l.focusOffset;try{r.nodeType,m.nodeType}catch{r=null;break t}var M=0,A=-1,V=-1,J=0,ht=0,mt=e,nt=null;e:for(;;){for(var lt;mt!==r||h!==0&&mt.nodeType!==3||(A=M+h),mt!==m||l!==0&&mt.nodeType!==3||(V=M+l),mt.nodeType===3&&(M+=mt.nodeValue.length),(lt=mt.firstChild)!==null;)nt=mt,mt=lt;for(;;){if(mt===e)break e;if(nt===r&&++J===h&&(A=M),nt===m&&++ht===l&&(V=M),(lt=mt.nextSibling)!==null)break;mt=nt,nt=mt.parentNode}mt=lt}r=A===-1||V===-1?null:{start:A,end:V}}else r=null}r=r||{start:0,end:0}}else r=null;for(nd={focusedElem:e,selectionRange:r},iu=!1,En=a;En!==null;)if(a=En,e=a.child,(a.subtreeFlags&1028)!==0&&e!==null)e.return=a,En=e;else for(;En!==null;){switch(a=En,m=a.alternate,e=a.flags,a.tag){case 0:if((e&4)!==0&&(e=a.updateQueue,e=e!==null?e.events:null,e!==null))for(r=0;r<e.length;r++)h=e[r],h.ref.impl=h.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&m!==null){e=void 0,r=a,h=m.memoizedProps,m=m.memoizedState,l=r.stateNode;try{var kt=Hs(r.type,h);e=l.getSnapshotBeforeUpdate(kt,m),l.__reactInternalSnapshotBeforeUpdate=e}catch(ee){Ie(r,r.return,ee)}}break;case 3:if((e&1024)!==0){if(e=a.stateNode.containerInfo,r=e.nodeType,r===9)sd(e);else if(r===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":sd(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(s(163))}if(e=a.sibling,e!==null){e.return=a.return,En=e;break}En=a.return}}function Ov(e,a,r){var l=r.flags;switch(r.tag){case 0:case 11:case 15:ya(e,r),l&4&&tl(5,r);break;case 1:if(ya(e,r),l&4)if(e=r.stateNode,a===null)try{e.componentDidMount()}catch(M){Ie(r,r.return,M)}else{var h=Hs(r.type,a.memoizedProps);a=a.memoizedState;try{e.componentDidUpdate(h,a,e.__reactInternalSnapshotBeforeUpdate)}catch(M){Ie(r,r.return,M)}}l&64&&wv(r),l&512&&el(r,r.return);break;case 3:if(ya(e,r),l&64&&(e=r.updateQueue,e!==null)){if(a=null,r.child!==null)switch(r.child.tag){case 27:case 5:a=r.child.stateNode;break;case 1:a=r.child.stateNode}try{x0(e,a)}catch(M){Ie(r,r.return,M)}}break;case 27:a===null&&l&4&&Nv(r);case 26:case 5:ya(e,r),a===null&&l&4&&Uv(r),l&512&&el(r,r.return);break;case 12:ya(e,r);break;case 31:ya(e,r),l&4&&Iv(e,r);break;case 13:ya(e,r),l&4&&zv(e,r),l&64&&(e=r.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(r=ab.bind(null,r),Tb(e,r))));break;case 22:if(l=r.memoizedState!==null||_a,!l){a=a!==null&&a.memoizedState!==null||mn,h=_a;var m=mn;_a=l,(mn=a)&&!m?Sa(e,r,(r.subtreeFlags&8772)!==0):ya(e,r),_a=h,mn=m}break;case 30:break;default:ya(e,r)}}function Fv(e){var a=e.alternate;a!==null&&(e.alternate=null,Fv(a)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(a=e.stateNode,a!==null&&wo(a)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Qe=null,Kn=!1;function xa(e,a,r){for(r=r.child;r!==null;)Bv(e,a,r),r=r.sibling}function Bv(e,a,r){if(Tt&&typeof Tt.onCommitFiberUnmount=="function")try{Tt.onCommitFiberUnmount(Mt,r)}catch{}switch(r.tag){case 26:mn||Zi(r,a),xa(e,a,r),r.memoizedState?r.memoizedState.count--:r.stateNode&&(r=r.stateNode,r.parentNode.removeChild(r));break;case 27:mn||Zi(r,a);var l=Qe,h=Kn;os(r.type)&&(Qe=r.stateNode,Kn=!1),xa(e,a,r),ul(r.stateNode),Qe=l,Kn=h;break;case 5:mn||Zi(r,a);case 6:if(l=Qe,h=Kn,Qe=null,xa(e,a,r),Qe=l,Kn=h,Qe!==null)if(Kn)try{(Qe.nodeType===9?Qe.body:Qe.nodeName==="HTML"?Qe.ownerDocument.body:Qe).removeChild(r.stateNode)}catch(m){Ie(r,a,m)}else try{Qe.removeChild(r.stateNode)}catch(m){Ie(r,a,m)}break;case 18:Qe!==null&&(Kn?(e=Qe,w_(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,r.stateNode),kr(e)):w_(Qe,r.stateNode));break;case 4:l=Qe,h=Kn,Qe=r.stateNode.containerInfo,Kn=!0,xa(e,a,r),Qe=l,Kn=h;break;case 0:case 11:case 14:case 15:ts(2,r,a),mn||ts(4,r,a),xa(e,a,r);break;case 1:mn||(Zi(r,a),l=r.stateNode,typeof l.componentWillUnmount=="function"&&Dv(r,a,l)),xa(e,a,r);break;case 21:xa(e,a,r);break;case 22:mn=(l=mn)||r.memoizedState!==null,xa(e,a,r),mn=l;break;default:xa(e,a,r)}}function Iv(e,a){if(a.memoizedState===null&&(e=a.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{kr(e)}catch(r){Ie(a,a.return,r)}}}function zv(e,a){if(a.memoizedState===null&&(e=a.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{kr(e)}catch(r){Ie(a,a.return,r)}}function KT(e){switch(e.tag){case 31:case 13:case 19:var a=e.stateNode;return a===null&&(a=e.stateNode=new Pv),a;case 22:return e=e.stateNode,a=e._retryCache,a===null&&(a=e._retryCache=new Pv),a;default:throw Error(s(435,e.tag))}}function Bc(e,a){var r=KT(e);a.forEach(function(l){if(!r.has(l)){r.add(l);var h=sb.bind(null,e,l);l.then(h,h)}})}function Qn(e,a){var r=a.deletions;if(r!==null)for(var l=0;l<r.length;l++){var h=r[l],m=e,M=a,A=M;t:for(;A!==null;){switch(A.tag){case 27:if(os(A.type)){Qe=A.stateNode,Kn=!1;break t}break;case 5:Qe=A.stateNode,Kn=!1;break t;case 3:case 4:Qe=A.stateNode.containerInfo,Kn=!0;break t}A=A.return}if(Qe===null)throw Error(s(160));Bv(m,M,h),Qe=null,Kn=!1,m=h.alternate,m!==null&&(m.return=null),h.return=null}if(a.subtreeFlags&13886)for(a=a.child;a!==null;)Vv(a,e),a=a.sibling}var Bi=null;function Vv(e,a){var r=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Qn(a,e),Jn(e),l&4&&(ts(3,e,e.return),tl(3,e),ts(5,e,e.return));break;case 1:Qn(a,e),Jn(e),l&512&&(mn||r===null||Zi(r,r.return)),l&64&&_a&&(e=e.updateQueue,e!==null&&(l=e.callbacks,l!==null&&(r=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=r===null?l:r.concat(l))));break;case 26:var h=Bi;if(Qn(a,e),Jn(e),l&512&&(mn||r===null||Zi(r,r.return)),l&4){var m=r!==null?r.memoizedState:null;if(l=e.memoizedState,r===null)if(l===null)if(e.stateNode===null){t:{l=e.type,r=e.memoizedProps,h=h.ownerDocument||h;e:switch(l){case"title":m=h.getElementsByTagName("title")[0],(!m||m[As]||m[fn]||m.namespaceURI==="http://www.w3.org/2000/svg"||m.hasAttribute("itemprop"))&&(m=h.createElement(l),h.head.insertBefore(m,h.querySelector("head > title"))),Pn(m,l,r),m[fn]=e,R(m),l=m;break t;case"link":var M=V_("link","href",h).get(l+(r.href||""));if(M){for(var A=0;A<M.length;A++)if(m=M[A],m.getAttribute("href")===(r.href==null||r.href===""?null:r.href)&&m.getAttribute("rel")===(r.rel==null?null:r.rel)&&m.getAttribute("title")===(r.title==null?null:r.title)&&m.getAttribute("crossorigin")===(r.crossOrigin==null?null:r.crossOrigin)){M.splice(A,1);break e}}m=h.createElement(l),Pn(m,l,r),h.head.appendChild(m);break;case"meta":if(M=V_("meta","content",h).get(l+(r.content||""))){for(A=0;A<M.length;A++)if(m=M[A],m.getAttribute("content")===(r.content==null?null:""+r.content)&&m.getAttribute("name")===(r.name==null?null:r.name)&&m.getAttribute("property")===(r.property==null?null:r.property)&&m.getAttribute("http-equiv")===(r.httpEquiv==null?null:r.httpEquiv)&&m.getAttribute("charset")===(r.charSet==null?null:r.charSet)){M.splice(A,1);break e}}m=h.createElement(l),Pn(m,l,r),h.head.appendChild(m);break;default:throw Error(s(468,l))}m[fn]=e,R(m),l=m}e.stateNode=l}else H_(h,e.type,e.stateNode);else e.stateNode=z_(h,l,e.memoizedProps);else m!==l?(m===null?r.stateNode!==null&&(r=r.stateNode,r.parentNode.removeChild(r)):m.count--,l===null?H_(h,e.type,e.stateNode):z_(h,l,e.memoizedProps)):l===null&&e.stateNode!==null&&Uh(e,e.memoizedProps,r.memoizedProps)}break;case 27:Qn(a,e),Jn(e),l&512&&(mn||r===null||Zi(r,r.return)),r!==null&&l&4&&Uh(e,e.memoizedProps,r.memoizedProps);break;case 5:if(Qn(a,e),Jn(e),l&512&&(mn||r===null||Zi(r,r.return)),e.flags&32){h=e.stateNode;try{_n(h,"")}catch(kt){Ie(e,e.return,kt)}}l&4&&e.stateNode!=null&&(h=e.memoizedProps,Uh(e,h,r!==null?r.memoizedProps:h)),l&1024&&(Ph=!0);break;case 6:if(Qn(a,e),Jn(e),l&4){if(e.stateNode===null)throw Error(s(162));l=e.memoizedProps,r=e.stateNode;try{r.nodeValue=l}catch(kt){Ie(e,e.return,kt)}}break;case 3:if($c=null,h=Bi,Bi=Qc(a.containerInfo),Qn(a,e),Bi=h,Jn(e),l&4&&r!==null&&r.memoizedState.isDehydrated)try{kr(a.containerInfo)}catch(kt){Ie(e,e.return,kt)}Ph&&(Ph=!1,Hv(e));break;case 4:l=Bi,Bi=Qc(e.stateNode.containerInfo),Qn(a,e),Jn(e),Bi=l;break;case 12:Qn(a,e),Jn(e);break;case 31:Qn(a,e),Jn(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Bc(e,l)));break;case 13:Qn(a,e),Jn(e),e.child.flags&8192&&e.memoizedState!==null!=(r!==null&&r.memoizedState!==null)&&(zc=T()),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Bc(e,l)));break;case 22:h=e.memoizedState!==null;var V=r!==null&&r.memoizedState!==null,J=_a,ht=mn;if(_a=J||h,mn=ht||V,Qn(a,e),mn=ht,_a=J,Jn(e),l&8192)t:for(a=e.stateNode,a._visibility=h?a._visibility&-2:a._visibility|1,h&&(r===null||V||_a||mn||Gs(e)),r=null,a=e;;){if(a.tag===5||a.tag===26){if(r===null){V=r=a;try{if(m=V.stateNode,h)M=m.style,typeof M.setProperty=="function"?M.setProperty("display","none","important"):M.display="none";else{A=V.stateNode;var mt=V.memoizedProps.style,nt=mt!=null&&mt.hasOwnProperty("display")?mt.display:null;A.style.display=nt==null||typeof nt=="boolean"?"":(""+nt).trim()}}catch(kt){Ie(V,V.return,kt)}}}else if(a.tag===6){if(r===null){V=a;try{V.stateNode.nodeValue=h?"":V.memoizedProps}catch(kt){Ie(V,V.return,kt)}}}else if(a.tag===18){if(r===null){V=a;try{var lt=V.stateNode;h?D_(lt,!0):D_(V.stateNode,!1)}catch(kt){Ie(V,V.return,kt)}}}else if((a.tag!==22&&a.tag!==23||a.memoizedState===null||a===e)&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===e)break t;for(;a.sibling===null;){if(a.return===null||a.return===e)break t;r===a&&(r=null),a=a.return}r===a&&(r=null),a.sibling.return=a.return,a=a.sibling}l&4&&(l=e.updateQueue,l!==null&&(r=l.retryQueue,r!==null&&(l.retryQueue=null,Bc(e,r))));break;case 19:Qn(a,e),Jn(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Bc(e,l)));break;case 30:break;case 21:break;default:Qn(a,e),Jn(e)}}function Jn(e){var a=e.flags;if(a&2){try{for(var r,l=e.return;l!==null;){if(Lv(l)){r=l;break}l=l.return}if(r==null)throw Error(s(160));switch(r.tag){case 27:var h=r.stateNode,m=Lh(e);Fc(e,m,h);break;case 5:var M=r.stateNode;r.flags&32&&(_n(M,""),r.flags&=-33);var A=Lh(e);Fc(e,A,M);break;case 3:case 4:var V=r.stateNode.containerInfo,J=Lh(e);Nh(e,J,V);break;default:throw Error(s(161))}}catch(ht){Ie(e,e.return,ht)}e.flags&=-3}a&4096&&(e.flags&=-4097)}function Hv(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var a=e;Hv(a),a.tag===5&&a.flags&1024&&a.stateNode.reset(),e=e.sibling}}function ya(e,a){if(a.subtreeFlags&8772)for(a=a.child;a!==null;)Ov(e,a.alternate,a),a=a.sibling}function Gs(e){for(e=e.child;e!==null;){var a=e;switch(a.tag){case 0:case 11:case 14:case 15:ts(4,a,a.return),Gs(a);break;case 1:Zi(a,a.return);var r=a.stateNode;typeof r.componentWillUnmount=="function"&&Dv(a,a.return,r),Gs(a);break;case 27:ul(a.stateNode);case 26:case 5:Zi(a,a.return),Gs(a);break;case 22:a.memoizedState===null&&Gs(a);break;case 30:Gs(a);break;default:Gs(a)}e=e.sibling}}function Sa(e,a,r){for(r=r&&(a.subtreeFlags&8772)!==0,a=a.child;a!==null;){var l=a.alternate,h=e,m=a,M=m.flags;switch(m.tag){case 0:case 11:case 15:Sa(h,m,r),tl(4,m);break;case 1:if(Sa(h,m,r),l=m,h=l.stateNode,typeof h.componentDidMount=="function")try{h.componentDidMount()}catch(J){Ie(l,l.return,J)}if(l=m,h=l.updateQueue,h!==null){var A=l.stateNode;try{var V=h.shared.hiddenCallbacks;if(V!==null)for(h.shared.hiddenCallbacks=null,h=0;h<V.length;h++)_0(V[h],A)}catch(J){Ie(l,l.return,J)}}r&&M&64&&wv(m),el(m,m.return);break;case 27:Nv(m);case 26:case 5:Sa(h,m,r),r&&l===null&&M&4&&Uv(m),el(m,m.return);break;case 12:Sa(h,m,r);break;case 31:Sa(h,m,r),r&&M&4&&Iv(h,m);break;case 13:Sa(h,m,r),r&&M&4&&zv(h,m);break;case 22:m.memoizedState===null&&Sa(h,m,r),el(m,m.return);break;case 30:break;default:Sa(h,m,r)}a=a.sibling}}function Oh(e,a){var r=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(r=e.memoizedState.cachePool.pool),e=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(e=a.memoizedState.cachePool.pool),e!==r&&(e!=null&&e.refCount++,r!=null&&Ho(r))}function Fh(e,a){e=null,a.alternate!==null&&(e=a.alternate.memoizedState.cache),a=a.memoizedState.cache,a!==e&&(a.refCount++,e!=null&&Ho(e))}function Ii(e,a,r,l){if(a.subtreeFlags&10256)for(a=a.child;a!==null;)Gv(e,a,r,l),a=a.sibling}function Gv(e,a,r,l){var h=a.flags;switch(a.tag){case 0:case 11:case 15:Ii(e,a,r,l),h&2048&&tl(9,a);break;case 1:Ii(e,a,r,l);break;case 3:Ii(e,a,r,l),h&2048&&(e=null,a.alternate!==null&&(e=a.alternate.memoizedState.cache),a=a.memoizedState.cache,a!==e&&(a.refCount++,e!=null&&Ho(e)));break;case 12:if(h&2048){Ii(e,a,r,l),e=a.stateNode;try{var m=a.memoizedProps,M=m.id,A=m.onPostCommit;typeof A=="function"&&A(M,a.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(V){Ie(a,a.return,V)}}else Ii(e,a,r,l);break;case 31:Ii(e,a,r,l);break;case 13:Ii(e,a,r,l);break;case 23:break;case 22:m=a.stateNode,M=a.alternate,a.memoizedState!==null?m._visibility&2?Ii(e,a,r,l):nl(e,a):m._visibility&2?Ii(e,a,r,l):(m._visibility|=2,Lr(e,a,r,l,(a.subtreeFlags&10256)!==0||!1)),h&2048&&Oh(M,a);break;case 24:Ii(e,a,r,l),h&2048&&Fh(a.alternate,a);break;default:Ii(e,a,r,l)}}function Lr(e,a,r,l,h){for(h=h&&((a.subtreeFlags&10256)!==0||!1),a=a.child;a!==null;){var m=e,M=a,A=r,V=l,J=M.flags;switch(M.tag){case 0:case 11:case 15:Lr(m,M,A,V,h),tl(8,M);break;case 23:break;case 22:var ht=M.stateNode;M.memoizedState!==null?ht._visibility&2?Lr(m,M,A,V,h):nl(m,M):(ht._visibility|=2,Lr(m,M,A,V,h)),h&&J&2048&&Oh(M.alternate,M);break;case 24:Lr(m,M,A,V,h),h&&J&2048&&Fh(M.alternate,M);break;default:Lr(m,M,A,V,h)}a=a.sibling}}function nl(e,a){if(a.subtreeFlags&10256)for(a=a.child;a!==null;){var r=e,l=a,h=l.flags;switch(l.tag){case 22:nl(r,l),h&2048&&Oh(l.alternate,l);break;case 24:nl(r,l),h&2048&&Fh(l.alternate,l);break;default:nl(r,l)}a=a.sibling}}var il=8192;function Nr(e,a,r){if(e.subtreeFlags&il)for(e=e.child;e!==null;)kv(e,a,r),e=e.sibling}function kv(e,a,r){switch(e.tag){case 26:Nr(e,a,r),e.flags&il&&e.memoizedState!==null&&Fb(r,Bi,e.memoizedState,e.memoizedProps);break;case 5:Nr(e,a,r);break;case 3:case 4:var l=Bi;Bi=Qc(e.stateNode.containerInfo),Nr(e,a,r),Bi=l;break;case 22:e.memoizedState===null&&(l=e.alternate,l!==null&&l.memoizedState!==null?(l=il,il=16777216,Nr(e,a,r),il=l):Nr(e,a,r));break;default:Nr(e,a,r)}}function Xv(e){var a=e.alternate;if(a!==null&&(e=a.child,e!==null)){a.child=null;do a=e.sibling,e.sibling=null,e=a;while(e!==null)}}function al(e){var a=e.deletions;if((e.flags&16)!==0){if(a!==null)for(var r=0;r<a.length;r++){var l=a[r];En=l,qv(l,e)}Xv(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Wv(e),e=e.sibling}function Wv(e){switch(e.tag){case 0:case 11:case 15:al(e),e.flags&2048&&ts(9,e,e.return);break;case 3:al(e);break;case 12:al(e);break;case 22:var a=e.stateNode;e.memoizedState!==null&&a._visibility&2&&(e.return===null||e.return.tag!==13)?(a._visibility&=-3,Ic(e)):al(e);break;default:al(e)}}function Ic(e){var a=e.deletions;if((e.flags&16)!==0){if(a!==null)for(var r=0;r<a.length;r++){var l=a[r];En=l,qv(l,e)}Xv(e)}for(e=e.child;e!==null;){switch(a=e,a.tag){case 0:case 11:case 15:ts(8,a,a.return),Ic(a);break;case 22:r=a.stateNode,r._visibility&2&&(r._visibility&=-3,Ic(a));break;default:Ic(a)}e=e.sibling}}function qv(e,a){for(;En!==null;){var r=En;switch(r.tag){case 0:case 11:case 15:ts(8,r,a);break;case 23:case 22:if(r.memoizedState!==null&&r.memoizedState.cachePool!==null){var l=r.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:Ho(r.memoizedState.cache)}if(l=r.child,l!==null)l.return=r,En=l;else t:for(r=e;En!==null;){l=En;var h=l.sibling,m=l.return;if(Fv(l),l===r){En=null;break t}if(h!==null){h.return=m,En=h;break t}En=m}}}var QT={getCacheForType:function(e){var a=Ln(hn),r=a.data.get(e);return r===void 0&&(r=e(),a.data.set(e,r)),r},cacheSignal:function(){return Ln(hn).controller.signal}},JT=typeof WeakMap=="function"?WeakMap:Map,Le=0,We=null,ge=null,xe=0,Be=0,ui=null,es=!1,Pr=!1,Bh=!1,Ma=0,sn=0,ns=0,ks=0,Ih=0,fi=0,Or=0,sl=null,$n=null,zh=!1,zc=0,Yv=0,Vc=1/0,Hc=null,is=null,xn=0,as=null,Fr=null,Ea=0,Vh=0,Hh=null,jv=null,rl=0,Gh=null;function hi(){return(Le&2)!==0&&xe!==0?xe&-xe:I.T!==null?jh():Ro()}function Zv(){if(fi===0)if((xe&536870912)===0||Se){var e=bt;bt<<=1,(bt&3932160)===0&&(bt=262144),fi=e}else fi=536870912;return e=li.current,e!==null&&(e.flags|=32),fi}function ti(e,a,r){(e===We&&(Be===2||Be===9)||e.cancelPendingCommit!==null)&&(Br(e,0),ss(e,xe,fi,!1)),Bn(e,r),((Le&2)===0||e!==We)&&(e===We&&((Le&2)===0&&(ks|=r),sn===4&&ss(e,xe,fi,!1)),Ki(e))}function Kv(e,a,r){if((Le&6)!==0)throw Error(s(327));var l=!r&&(a&127)===0&&(a&e.expiredLanes)===0||Rt(e,a),h=l?eb(e,a):Xh(e,a,!0),m=l;do{if(h===0){Pr&&!l&&ss(e,a,0,!1);break}else{if(r=e.current.alternate,m&&!$T(r)){h=Xh(e,a,!1),m=!1;continue}if(h===2){if(m=a,e.errorRecoveryDisabledLanes&m)var M=0;else M=e.pendingLanes&-536870913,M=M!==0?M:M&536870912?536870912:0;if(M!==0){a=M;t:{var A=e;h=sl;var V=A.current.memoizedState.isDehydrated;if(V&&(Br(A,M).flags|=256),M=Xh(A,M,!1),M!==2){if(Bh&&!V){A.errorRecoveryDisabledLanes|=m,ks|=m,h=4;break t}m=$n,$n=h,m!==null&&($n===null?$n=m:$n.push.apply($n,m))}h=M}if(m=!1,h!==2)continue}}if(h===1){Br(e,0),ss(e,a,0,!0);break}t:{switch(l=e,m=h,m){case 0:case 1:throw Error(s(345));case 4:if((a&4194048)!==a)break;case 6:ss(l,a,fi,!es);break t;case 2:$n=null;break;case 3:case 5:break;default:throw Error(s(329))}if((a&62914560)===a&&(h=zc+300-T(),10<h)){if(ss(l,a,fi,!es),vt(l,0,!0)!==0)break t;Ea=a,l.timeoutHandle=R_(Qv.bind(null,l,r,$n,Hc,zh,a,fi,ks,Or,es,m,"Throttled",-0,0),h);break t}Qv(l,r,$n,Hc,zh,a,fi,ks,Or,es,m,null,-0,0)}}break}while(!0);Ki(e)}function Qv(e,a,r,l,h,m,M,A,V,J,ht,mt,nt,lt){if(e.timeoutHandle=-1,mt=a.subtreeFlags,mt&8192||(mt&16785408)===16785408){mt={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:la},kv(a,m,mt);var kt=(m&62914560)===m?zc-T():(m&4194048)===m?Yv-T():0;if(kt=Bb(mt,kt),kt!==null){Ea=m,e.cancelPendingCommit=kt(s_.bind(null,e,a,m,r,l,h,M,A,V,ht,mt,null,nt,lt)),ss(e,m,M,!J);return}}s_(e,a,m,r,l,h,M,A,V)}function $T(e){for(var a=e;;){var r=a.tag;if((r===0||r===11||r===15)&&a.flags&16384&&(r=a.updateQueue,r!==null&&(r=r.stores,r!==null)))for(var l=0;l<r.length;l++){var h=r[l],m=h.getSnapshot;h=h.value;try{if(!ri(m(),h))return!1}catch{return!1}}if(r=a.child,a.subtreeFlags&16384&&r!==null)r.return=a,a=r;else{if(a===e)break;for(;a.sibling===null;){if(a.return===null||a.return===e)return!0;a=a.return}a.sibling.return=a.return,a=a.sibling}}return!0}function ss(e,a,r,l){a&=~Ih,a&=~ks,e.suspendedLanes|=a,e.pingedLanes&=~a,l&&(e.warmLanes|=a),l=e.expirationTimes;for(var h=a;0<h;){var m=31-Ot(h),M=1<<m;l[m]=-1,h&=~M}r!==0&&$l(e,r,a)}function Gc(){return(Le&6)===0?(ol(0),!1):!0}function kh(){if(ge!==null){if(Be===0)var e=ge.return;else e=ge,ha=Ps=null,sh(e),Rr=null,ko=0,e=ge;for(;e!==null;)Cv(e.alternate,e),e=e.return;ge=null}}function Br(e,a){var r=e.timeoutHandle;r!==-1&&(e.timeoutHandle=-1,xb(r)),r=e.cancelPendingCommit,r!==null&&(e.cancelPendingCommit=null,r()),Ea=0,kh(),We=e,ge=r=ua(e.current,null),xe=a,Be=0,ui=null,es=!1,Pr=Rt(e,a),Bh=!1,Or=fi=Ih=ks=ns=sn=0,$n=sl=null,zh=!1,(a&8)!==0&&(a|=a&32);var l=e.entangledLanes;if(l!==0)for(e=e.entanglements,l&=a;0<l;){var h=31-Ot(l),m=1<<h;a|=e[h],l&=~m}return Ma=a,cc(),r}function Jv(e,a){ce=null,I.H=Qo,a===Ar||a===vc?(a=p0(),Be=3):a===Yf?(a=p0(),Be=4):Be=a===Sh?8:a!==null&&typeof a=="object"&&typeof a.then=="function"?6:1,ui=a,ge===null&&(sn=1,Uc(e,yi(a,e.current)))}function $v(){var e=li.current;return e===null?!0:(xe&4194048)===xe?Ti===null:(xe&62914560)===xe||(xe&536870912)!==0?e===Ti:!1}function t_(){var e=I.H;return I.H=Qo,e===null?Qo:e}function e_(){var e=I.A;return I.A=QT,e}function kc(){sn=4,es||(xe&4194048)!==xe&&li.current!==null||(Pr=!0),(ns&134217727)===0&&(ks&134217727)===0||We===null||ss(We,xe,fi,!1)}function Xh(e,a,r){var l=Le;Le|=2;var h=t_(),m=e_();(We!==e||xe!==a)&&(Hc=null,Br(e,a)),a=!1;var M=sn;t:do try{if(Be!==0&&ge!==null){var A=ge,V=ui;switch(Be){case 8:kh(),M=6;break t;case 3:case 2:case 9:case 6:li.current===null&&(a=!0);var J=Be;if(Be=0,ui=null,Ir(e,A,V,J),r&&Pr){M=0;break t}break;default:J=Be,Be=0,ui=null,Ir(e,A,V,J)}}tb(),M=sn;break}catch(ht){Jv(e,ht)}while(!0);return a&&e.shellSuspendCounter++,ha=Ps=null,Le=l,I.H=h,I.A=m,ge===null&&(We=null,xe=0,cc()),M}function tb(){for(;ge!==null;)n_(ge)}function eb(e,a){var r=Le;Le|=2;var l=t_(),h=e_();We!==e||xe!==a?(Hc=null,Vc=T()+500,Br(e,a)):Pr=Rt(e,a);t:do try{if(Be!==0&&ge!==null){a=ge;var m=ui;e:switch(Be){case 1:Be=0,ui=null,Ir(e,a,m,1);break;case 2:case 9:if(h0(m)){Be=0,ui=null,i_(a);break}a=function(){Be!==2&&Be!==9||We!==e||(Be=7),Ki(e)},m.then(a,a);break t;case 3:Be=7;break t;case 4:Be=5;break t;case 7:h0(m)?(Be=0,ui=null,i_(a)):(Be=0,ui=null,Ir(e,a,m,7));break;case 5:var M=null;switch(ge.tag){case 26:M=ge.memoizedState;case 5:case 27:var A=ge;if(M?G_(M):A.stateNode.complete){Be=0,ui=null;var V=A.sibling;if(V!==null)ge=V;else{var J=A.return;J!==null?(ge=J,Xc(J)):ge=null}break e}}Be=0,ui=null,Ir(e,a,m,5);break;case 6:Be=0,ui=null,Ir(e,a,m,6);break;case 8:kh(),sn=6;break t;default:throw Error(s(462))}}nb();break}catch(ht){Jv(e,ht)}while(!0);return ha=Ps=null,I.H=l,I.A=h,Le=r,ge!==null?0:(We=null,xe=0,cc(),sn)}function nb(){for(;ge!==null&&!jt();)n_(ge)}function n_(e){var a=Av(e.alternate,e,Ma);e.memoizedProps=e.pendingProps,a===null?Xc(e):ge=a}function i_(e){var a=e,r=a.alternate;switch(a.tag){case 15:case 0:a=yv(r,a,a.pendingProps,a.type,void 0,xe);break;case 11:a=yv(r,a,a.pendingProps,a.type.render,a.ref,xe);break;case 5:sh(a);default:Cv(r,a),a=ge=e0(a,Ma),a=Av(r,a,Ma)}e.memoizedProps=e.pendingProps,a===null?Xc(e):ge=a}function Ir(e,a,r,l){ha=Ps=null,sh(a),Rr=null,ko=0;var h=a.return;try{if(XT(e,h,a,r,xe)){sn=1,Uc(e,yi(r,e.current)),ge=null;return}}catch(m){if(h!==null)throw ge=h,m;sn=1,Uc(e,yi(r,e.current)),ge=null;return}a.flags&32768?(Se||l===1?e=!0:Pr||(xe&536870912)!==0?e=!1:(es=e=!0,(l===2||l===9||l===3||l===6)&&(l=li.current,l!==null&&l.tag===13&&(l.flags|=16384))),a_(a,e)):Xc(a)}function Xc(e){var a=e;do{if((a.flags&32768)!==0){a_(a,es);return}e=a.return;var r=YT(a.alternate,a,Ma);if(r!==null){ge=r;return}if(a=a.sibling,a!==null){ge=a;return}ge=a=e}while(a!==null);sn===0&&(sn=5)}function a_(e,a){do{var r=jT(e.alternate,e);if(r!==null){r.flags&=32767,ge=r;return}if(r=e.return,r!==null&&(r.flags|=32768,r.subtreeFlags=0,r.deletions=null),!a&&(e=e.sibling,e!==null)){ge=e;return}ge=e=r}while(e!==null);sn=6,ge=null}function s_(e,a,r,l,h,m,M,A,V){e.cancelPendingCommit=null;do Wc();while(xn!==0);if((Le&6)!==0)throw Error(s(327));if(a!==null){if(a===e.current)throw Error(s(177));if(m=a.lanes|a.childLanes,m|=Lf,Ni(e,r,m,M,A,V),e===We&&(ge=We=null,xe=0),Fr=a,as=e,Ea=r,Vh=m,Hh=h,jv=l,(a.subtreeFlags&10256)!==0||(a.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,rb(ct,function(){return u_(),null})):(e.callbackNode=null,e.callbackPriority=0),l=(a.flags&13878)!==0,(a.subtreeFlags&13878)!==0||l){l=I.T,I.T=null,h=z.p,z.p=2,M=Le,Le|=4;try{ZT(e,a,r)}finally{Le=M,z.p=h,I.T=l}}xn=1,r_(),o_(),l_()}}function r_(){if(xn===1){xn=0;var e=as,a=Fr,r=(a.flags&13878)!==0;if((a.subtreeFlags&13878)!==0||r){r=I.T,I.T=null;var l=z.p;z.p=2;var h=Le;Le|=4;try{Vv(a,e);var m=nd,M=qg(e.containerInfo),A=m.focusedElem,V=m.selectionRange;if(M!==A&&A&&A.ownerDocument&&Wg(A.ownerDocument.documentElement,A)){if(V!==null&&Rf(A)){var J=V.start,ht=V.end;if(ht===void 0&&(ht=J),"selectionStart"in A)A.selectionStart=J,A.selectionEnd=Math.min(ht,A.value.length);else{var mt=A.ownerDocument||document,nt=mt&&mt.defaultView||window;if(nt.getSelection){var lt=nt.getSelection(),kt=A.textContent.length,ee=Math.min(V.start,kt),ke=V.end===void 0?ee:Math.min(V.end,kt);!lt.extend&&ee>ke&&(M=ke,ke=ee,ee=M);var j=Xg(A,ee),X=Xg(A,ke);if(j&&X&&(lt.rangeCount!==1||lt.anchorNode!==j.node||lt.anchorOffset!==j.offset||lt.focusNode!==X.node||lt.focusOffset!==X.offset)){var Q=mt.createRange();Q.setStart(j.node,j.offset),lt.removeAllRanges(),ee>ke?(lt.addRange(Q),lt.extend(X.node,X.offset)):(Q.setEnd(X.node,X.offset),lt.addRange(Q))}}}}for(mt=[],lt=A;lt=lt.parentNode;)lt.nodeType===1&&mt.push({element:lt,left:lt.scrollLeft,top:lt.scrollTop});for(typeof A.focus=="function"&&A.focus(),A=0;A<mt.length;A++){var pt=mt[A];pt.element.scrollLeft=pt.left,pt.element.scrollTop=pt.top}}iu=!!ed,nd=ed=null}finally{Le=h,z.p=l,I.T=r}}e.current=a,xn=2}}function o_(){if(xn===2){xn=0;var e=as,a=Fr,r=(a.flags&8772)!==0;if((a.subtreeFlags&8772)!==0||r){r=I.T,I.T=null;var l=z.p;z.p=2;var h=Le;Le|=4;try{Ov(e,a.alternate,a)}finally{Le=h,z.p=l,I.T=r}}xn=3}}function l_(){if(xn===4||xn===3){xn=0,O();var e=as,a=Fr,r=Ea,l=jv;(a.subtreeFlags&10256)!==0||(a.flags&10256)!==0?xn=5:(xn=0,Fr=as=null,c_(e,e.pendingLanes));var h=e.pendingLanes;if(h===0&&(is=null),cr(r),a=a.stateNode,Tt&&typeof Tt.onCommitFiberRoot=="function")try{Tt.onCommitFiberRoot(Mt,a,void 0,(a.current.flags&128)===128)}catch{}if(l!==null){a=I.T,h=z.p,z.p=2,I.T=null;try{for(var m=e.onRecoverableError,M=0;M<l.length;M++){var A=l[M];m(A.value,{componentStack:A.stack})}}finally{I.T=a,z.p=h}}(Ea&3)!==0&&Wc(),Ki(e),h=e.pendingLanes,(r&261930)!==0&&(h&42)!==0?e===Gh?rl++:(rl=0,Gh=e):rl=0,ol(0)}}function c_(e,a){(e.pooledCacheLanes&=a)===0&&(a=e.pooledCache,a!=null&&(e.pooledCache=null,Ho(a)))}function Wc(){return r_(),o_(),l_(),u_()}function u_(){if(xn!==5)return!1;var e=as,a=Vh;Vh=0;var r=cr(Ea),l=I.T,h=z.p;try{z.p=32>r?32:r,I.T=null,r=Hh,Hh=null;var m=as,M=Ea;if(xn=0,Fr=as=null,Ea=0,(Le&6)!==0)throw Error(s(331));var A=Le;if(Le|=4,Wv(m.current),Gv(m,m.current,M,r),Le=A,ol(0,!1),Tt&&typeof Tt.onPostCommitFiberRoot=="function")try{Tt.onPostCommitFiberRoot(Mt,m)}catch{}return!0}finally{z.p=h,I.T=l,c_(e,a)}}function f_(e,a,r){a=yi(r,a),a=yh(e.stateNode,a,2),e=Qa(e,a,2),e!==null&&(Bn(e,2),Ki(e))}function Ie(e,a,r){if(e.tag===3)f_(e,e,r);else for(;a!==null;){if(a.tag===3){f_(a,e,r);break}else if(a.tag===1){var l=a.stateNode;if(typeof a.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(is===null||!is.has(l))){e=yi(r,e),r=hv(2),l=Qa(a,r,2),l!==null&&(dv(r,l,a,e),Bn(l,2),Ki(l));break}}a=a.return}}function Wh(e,a,r){var l=e.pingCache;if(l===null){l=e.pingCache=new JT;var h=new Set;l.set(a,h)}else h=l.get(a),h===void 0&&(h=new Set,l.set(a,h));h.has(r)||(Bh=!0,h.add(r),e=ib.bind(null,e,a,r),a.then(e,e))}function ib(e,a,r){var l=e.pingCache;l!==null&&l.delete(a),e.pingedLanes|=e.suspendedLanes&r,e.warmLanes&=~r,We===e&&(xe&r)===r&&(sn===4||sn===3&&(xe&62914560)===xe&&300>T()-zc?(Le&2)===0&&Br(e,0):Ih|=r,Or===xe&&(Or=0)),Ki(e)}function h_(e,a){a===0&&(a=Oe()),e=Us(e,a),e!==null&&(Bn(e,a),Ki(e))}function ab(e){var a=e.memoizedState,r=0;a!==null&&(r=a.retryLane),h_(e,r)}function sb(e,a){var r=0;switch(e.tag){case 31:case 13:var l=e.stateNode,h=e.memoizedState;h!==null&&(r=h.retryLane);break;case 19:l=e.stateNode;break;case 22:l=e.stateNode._retryCache;break;default:throw Error(s(314))}l!==null&&l.delete(a),h_(e,r)}function rb(e,a){return Ee(e,a)}var qc=null,zr=null,qh=!1,Yc=!1,Yh=!1,rs=0;function Ki(e){e!==zr&&e.next===null&&(zr===null?qc=zr=e:zr=zr.next=e),Yc=!0,qh||(qh=!0,lb())}function ol(e,a){if(!Yh&&Yc){Yh=!0;do for(var r=!1,l=qc;l!==null;){if(e!==0){var h=l.pendingLanes;if(h===0)var m=0;else{var M=l.suspendedLanes,A=l.pingedLanes;m=(1<<31-Ot(42|e)+1)-1,m&=h&~(M&~A),m=m&201326741?m&201326741|1:m?m|2:0}m!==0&&(r=!0,g_(l,m))}else m=xe,m=vt(l,l===We?m:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(m&3)===0||Rt(l,m)||(r=!0,g_(l,m));l=l.next}while(r);Yh=!1}}function ob(){d_()}function d_(){Yc=qh=!1;var e=0;rs!==0&&_b()&&(e=rs);for(var a=T(),r=null,l=qc;l!==null;){var h=l.next,m=p_(l,a);m===0?(l.next=null,r===null?qc=h:r.next=h,h===null&&(zr=r)):(r=l,(e!==0||(m&3)!==0)&&(Yc=!0)),l=h}xn!==0&&xn!==5||ol(e),rs!==0&&(rs=0)}function p_(e,a){for(var r=e.suspendedLanes,l=e.pingedLanes,h=e.expirationTimes,m=e.pendingLanes&-62914561;0<m;){var M=31-Ot(m),A=1<<M,V=h[M];V===-1?((A&r)===0||(A&l)!==0)&&(h[M]=ae(A,a)):V<=a&&(e.expiredLanes|=A),m&=~A}if(a=We,r=xe,r=vt(e,e===a?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l=e.callbackNode,r===0||e===a&&(Be===2||Be===9)||e.cancelPendingCommit!==null)return l!==null&&l!==null&&Ne(l),e.callbackNode=null,e.callbackPriority=0;if((r&3)===0||Rt(e,r)){if(a=r&-r,a===e.callbackPriority)return a;switch(l!==null&&Ne(l),cr(r)){case 2:case 8:r=xt;break;case 32:r=ct;break;case 268435456:r=Ct;break;default:r=ct}return l=m_.bind(null,e),r=Ee(r,l),e.callbackPriority=a,e.callbackNode=r,a}return l!==null&&l!==null&&Ne(l),e.callbackPriority=2,e.callbackNode=null,2}function m_(e,a){if(xn!==0&&xn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var r=e.callbackNode;if(Wc()&&e.callbackNode!==r)return null;var l=xe;return l=vt(e,e===We?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l===0?null:(Kv(e,l,a),p_(e,T()),e.callbackNode!=null&&e.callbackNode===r?m_.bind(null,e):null)}function g_(e,a){if(Wc())return null;Kv(e,a,!0)}function lb(){yb(function(){(Le&6)!==0?Ee(dt,ob):d_()})}function jh(){if(rs===0){var e=Tr;e===0&&(e=Lt,Lt<<=1,(Lt&261888)===0&&(Lt=256)),rs=e}return rs}function v_(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:ec(""+e)}function __(e,a){var r=a.ownerDocument.createElement("input");return r.name=a.name,r.value=a.value,e.id&&r.setAttribute("form",e.id),a.parentNode.insertBefore(r,a),e=new FormData(e),r.parentNode.removeChild(r),e}function cb(e,a,r,l,h){if(a==="submit"&&r&&r.stateNode===h){var m=v_((h[bn]||null).action),M=l.submitter;M&&(a=(a=M[bn]||null)?v_(a.formAction):M.getAttribute("formAction"),a!==null&&(m=a,M=null));var A=new sc("action","action",null,l,h);e.push({event:A,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(rs!==0){var V=M?__(h,M):new FormData(h);ph(r,{pending:!0,data:V,method:h.method,action:m},null,V)}}else typeof m=="function"&&(A.preventDefault(),V=M?__(h,M):new FormData(h),ph(r,{pending:!0,data:V,method:h.method,action:m},m,V))},currentTarget:h}]})}}for(var Zh=0;Zh<Uf.length;Zh++){var Kh=Uf[Zh],ub=Kh.toLowerCase(),fb=Kh[0].toUpperCase()+Kh.slice(1);Fi(ub,"on"+fb)}Fi(Zg,"onAnimationEnd"),Fi(Kg,"onAnimationIteration"),Fi(Qg,"onAnimationStart"),Fi("dblclick","onDoubleClick"),Fi("focusin","onFocus"),Fi("focusout","onBlur"),Fi(RT,"onTransitionRun"),Fi(CT,"onTransitionStart"),Fi(wT,"onTransitionCancel"),Fi(Jg,"onTransitionEnd"),Z("onMouseEnter",["mouseout","mouseover"]),Z("onMouseLeave",["mouseout","mouseover"]),Z("onPointerEnter",["pointerout","pointerover"]),Z("onPointerLeave",["pointerout","pointerover"]),et("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),et("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),et("onBeforeInput",["compositionend","keypress","textInput","paste"]),et("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),et("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),et("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ll="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),hb=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ll));function x_(e,a){a=(a&4)!==0;for(var r=0;r<e.length;r++){var l=e[r],h=l.event;l=l.listeners;t:{var m=void 0;if(a)for(var M=l.length-1;0<=M;M--){var A=l[M],V=A.instance,J=A.currentTarget;if(A=A.listener,V!==m&&h.isPropagationStopped())break t;m=A,h.currentTarget=J;try{m(h)}catch(ht){lc(ht)}h.currentTarget=null,m=V}else for(M=0;M<l.length;M++){if(A=l[M],V=A.instance,J=A.currentTarget,A=A.listener,V!==m&&h.isPropagationStopped())break t;m=A,h.currentTarget=J;try{m(h)}catch(ht){lc(ht)}h.currentTarget=null,m=V}}}}function ve(e,a){var r=a[ur];r===void 0&&(r=a[ur]=new Set);var l=e+"__bubble";r.has(l)||(y_(a,e,2,!1),r.add(l))}function Qh(e,a,r){var l=0;a&&(l|=4),y_(r,e,l,a)}var jc="_reactListening"+Math.random().toString(36).slice(2);function Jh(e){if(!e[jc]){e[jc]=!0,Y.forEach(function(r){r!=="selectionchange"&&(hb.has(r)||Qh(r,!1,e),Qh(r,!0,e))});var a=e.nodeType===9?e:e.ownerDocument;a===null||a[jc]||(a[jc]=!0,Qh("selectionchange",!1,a))}}function y_(e,a,r,l){switch(Z_(a)){case 2:var h=Vb;break;case 8:h=Hb;break;default:h=dd}r=h.bind(null,a,r,e),h=void 0,!_f||a!=="touchstart"&&a!=="touchmove"&&a!=="wheel"||(h=!0),l?h!==void 0?e.addEventListener(a,r,{capture:!0,passive:h}):e.addEventListener(a,r,!0):h!==void 0?e.addEventListener(a,r,{passive:h}):e.addEventListener(a,r,!1)}function $h(e,a,r,l,h){var m=l;if((a&1)===0&&(a&2)===0&&l!==null)t:for(;;){if(l===null)return;var M=l.tag;if(M===3||M===4){var A=l.stateNode.containerInfo;if(A===h)break;if(M===4)for(M=l.return;M!==null;){var V=M.tag;if((V===3||V===4)&&M.stateNode.containerInfo===h)return;M=M.return}for(;A!==null;){if(M=Ha(A),M===null)return;if(V=M.tag,V===5||V===6||V===26||V===27){l=m=M;continue t}A=A.parentNode}}l=l.return}bg(function(){var J=m,ht=gf(r),mt=[];t:{var nt=$g.get(e);if(nt!==void 0){var lt=sc,kt=e;switch(e){case"keypress":if(ic(r)===0)break t;case"keydown":case"keyup":lt=sT;break;case"focusin":kt="focus",lt=Mf;break;case"focusout":kt="blur",lt=Mf;break;case"beforeblur":case"afterblur":lt=Mf;break;case"click":if(r.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":lt=Cg;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":lt=YE;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":lt=lT;break;case Zg:case Kg:case Qg:lt=KE;break;case Jg:lt=uT;break;case"scroll":case"scrollend":lt=WE;break;case"wheel":lt=hT;break;case"copy":case"cut":case"paste":lt=JE;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":lt=Dg;break;case"toggle":case"beforetoggle":lt=pT}var ee=(a&4)!==0,ke=!ee&&(e==="scroll"||e==="scrollend"),j=ee?nt!==null?nt+"Capture":null:nt;ee=[];for(var X=J,Q;X!==null;){var pt=X;if(Q=pt.stateNode,pt=pt.tag,pt!==5&&pt!==26&&pt!==27||Q===null||j===null||(pt=Do(X,j),pt!=null&&ee.push(cl(X,pt,Q))),ke)break;X=X.return}0<ee.length&&(nt=new lt(nt,kt,null,r,ht),mt.push({event:nt,listeners:ee}))}}if((a&7)===0){t:{if(nt=e==="mouseover"||e==="pointerover",lt=e==="mouseout"||e==="pointerout",nt&&r!==mf&&(kt=r.relatedTarget||r.fromElement)&&(Ha(kt)||kt[Pi]))break t;if((lt||nt)&&(nt=ht.window===ht?ht:(nt=ht.ownerDocument)?nt.defaultView||nt.parentWindow:window,lt?(kt=r.relatedTarget||r.toElement,lt=J,kt=kt?Ha(kt):null,kt!==null&&(ke=c(kt),ee=kt.tag,kt!==ke||ee!==5&&ee!==27&&ee!==6)&&(kt=null)):(lt=null,kt=J),lt!==kt)){if(ee=Cg,pt="onMouseLeave",j="onMouseEnter",X="mouse",(e==="pointerout"||e==="pointerover")&&(ee=Dg,pt="onPointerLeave",j="onPointerEnter",X="pointer"),ke=lt==null?nt:Rs(lt),Q=kt==null?nt:Rs(kt),nt=new ee(pt,X+"leave",lt,r,ht),nt.target=ke,nt.relatedTarget=Q,pt=null,Ha(ht)===J&&(ee=new ee(j,X+"enter",kt,r,ht),ee.target=Q,ee.relatedTarget=ke,pt=ee),ke=pt,lt&&kt)e:{for(ee=db,j=lt,X=kt,Q=0,pt=j;pt;pt=ee(pt))Q++;pt=0;for(var Jt=X;Jt;Jt=ee(Jt))pt++;for(;0<Q-pt;)j=ee(j),Q--;for(;0<pt-Q;)X=ee(X),pt--;for(;Q--;){if(j===X||X!==null&&j===X.alternate){ee=j;break e}j=ee(j),X=ee(X)}ee=null}else ee=null;lt!==null&&S_(mt,nt,lt,ee,!1),kt!==null&&ke!==null&&S_(mt,ke,kt,ee,!0)}}t:{if(nt=J?Rs(J):window,lt=nt.nodeName&&nt.nodeName.toLowerCase(),lt==="select"||lt==="input"&&nt.type==="file")var Ae=Ig;else if(Fg(nt))if(zg)Ae=TT;else{Ae=MT;var Zt=ST}else lt=nt.nodeName,!lt||lt.toLowerCase()!=="input"||nt.type!=="checkbox"&&nt.type!=="radio"?J&&Oi(J.elementType)&&(Ae=Ig):Ae=ET;if(Ae&&(Ae=Ae(e,J))){Bg(mt,Ae,r,ht);break t}Zt&&Zt(e,nt,J),e==="focusout"&&J&&nt.type==="number"&&J.memoizedProps.value!=null&&Rn(nt,"number",nt.value)}switch(Zt=J?Rs(J):window,e){case"focusin":(Fg(Zt)||Zt.contentEditable==="true")&&(gr=Zt,Cf=J,Io=null);break;case"focusout":Io=Cf=gr=null;break;case"mousedown":wf=!0;break;case"contextmenu":case"mouseup":case"dragend":wf=!1,Yg(mt,r,ht);break;case"selectionchange":if(AT)break;case"keydown":case"keyup":Yg(mt,r,ht)}var fe;if(Tf)t:{switch(e){case"compositionstart":var ye="onCompositionStart";break t;case"compositionend":ye="onCompositionEnd";break t;case"compositionupdate":ye="onCompositionUpdate";break t}ye=void 0}else mr?Pg(e,r)&&(ye="onCompositionEnd"):e==="keydown"&&r.keyCode===229&&(ye="onCompositionStart");ye&&(Ug&&r.locale!=="ko"&&(mr||ye!=="onCompositionStart"?ye==="onCompositionEnd"&&mr&&(fe=Ag()):(Xa=ht,xf="value"in Xa?Xa.value:Xa.textContent,mr=!0)),Zt=Zc(J,ye),0<Zt.length&&(ye=new wg(ye,e,null,r,ht),mt.push({event:ye,listeners:Zt}),fe?ye.data=fe:(fe=Og(r),fe!==null&&(ye.data=fe)))),(fe=gT?vT(e,r):_T(e,r))&&(ye=Zc(J,"onBeforeInput"),0<ye.length&&(Zt=new wg("onBeforeInput","beforeinput",null,r,ht),mt.push({event:Zt,listeners:ye}),Zt.data=fe)),cb(mt,e,J,r,ht)}x_(mt,a)})}function cl(e,a,r){return{instance:e,listener:a,currentTarget:r}}function Zc(e,a){for(var r=a+"Capture",l=[];e!==null;){var h=e,m=h.stateNode;if(h=h.tag,h!==5&&h!==26&&h!==27||m===null||(h=Do(e,r),h!=null&&l.unshift(cl(e,h,m)),h=Do(e,a),h!=null&&l.push(cl(e,h,m))),e.tag===3)return l;e=e.return}return[]}function db(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function S_(e,a,r,l,h){for(var m=a._reactName,M=[];r!==null&&r!==l;){var A=r,V=A.alternate,J=A.stateNode;if(A=A.tag,V!==null&&V===l)break;A!==5&&A!==26&&A!==27||J===null||(V=J,h?(J=Do(r,m),J!=null&&M.unshift(cl(r,J,V))):h||(J=Do(r,m),J!=null&&M.push(cl(r,J,V)))),r=r.return}M.length!==0&&e.push({event:a,listeners:M})}var pb=/\r\n?/g,mb=/\u0000|\uFFFD/g;function M_(e){return(typeof e=="string"?e:""+e).replace(pb,`
`).replace(mb,"")}function E_(e,a){return a=M_(a),M_(e)===a}function Ge(e,a,r,l,h,m){switch(r){case"children":typeof l=="string"?a==="body"||a==="textarea"&&l===""||_n(e,l):(typeof l=="number"||typeof l=="bigint")&&a!=="body"&&_n(e,""+l);break;case"className":$t(e,"class",l);break;case"tabIndex":$t(e,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":$t(e,r,l);break;case"style":hr(e,l,m);break;case"data":if(a!=="object"){$t(e,"data",l);break}case"src":case"href":if(l===""&&(a!=="a"||r!=="href")){e.removeAttribute(r);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(r);break}l=ec(""+l),e.setAttribute(r,l);break;case"action":case"formAction":if(typeof l=="function"){e.setAttribute(r,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof m=="function"&&(r==="formAction"?(a!=="input"&&Ge(e,a,"name",h.name,h,null),Ge(e,a,"formEncType",h.formEncType,h,null),Ge(e,a,"formMethod",h.formMethod,h,null),Ge(e,a,"formTarget",h.formTarget,h,null)):(Ge(e,a,"encType",h.encType,h,null),Ge(e,a,"method",h.method,h,null),Ge(e,a,"target",h.target,h,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(r);break}l=ec(""+l),e.setAttribute(r,l);break;case"onClick":l!=null&&(e.onclick=la);break;case"onScroll":l!=null&&ve("scroll",e);break;case"onScrollEnd":l!=null&&ve("scrollend",e);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(s(61));if(r=l.__html,r!=null){if(h.children!=null)throw Error(s(60));e.innerHTML=r}}break;case"multiple":e.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":e.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){e.removeAttribute("xlink:href");break}r=ec(""+l),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",r);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(r,""+l):e.removeAttribute(r);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(r,""):e.removeAttribute(r);break;case"capture":case"download":l===!0?e.setAttribute(r,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(r,l):e.removeAttribute(r);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?e.setAttribute(r,l):e.removeAttribute(r);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?e.removeAttribute(r):e.setAttribute(r,l);break;case"popover":ve("beforetoggle",e),ve("toggle",e),qt(e,"popover",l);break;case"xlinkActuate":Yt(e,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":Yt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":Yt(e,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":Yt(e,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":Yt(e,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":Yt(e,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":Yt(e,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":Yt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":Yt(e,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":qt(e,"is",l);break;case"innerText":case"textContent":break;default:(!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(r=kE.get(r)||r,qt(e,r,l))}}function td(e,a,r,l,h,m){switch(r){case"style":hr(e,l,m);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(s(61));if(r=l.__html,r!=null){if(h.children!=null)throw Error(s(60));e.innerHTML=r}}break;case"children":typeof l=="string"?_n(e,l):(typeof l=="number"||typeof l=="bigint")&&_n(e,""+l);break;case"onScroll":l!=null&&ve("scroll",e);break;case"onScrollEnd":l!=null&&ve("scrollend",e);break;case"onClick":l!=null&&(e.onclick=la);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!rt.hasOwnProperty(r))t:{if(r[0]==="o"&&r[1]==="n"&&(h=r.endsWith("Capture"),a=r.slice(2,h?r.length-7:void 0),m=e[bn]||null,m=m!=null?m[r]:null,typeof m=="function"&&e.removeEventListener(a,m,h),typeof l=="function")){typeof m!="function"&&m!==null&&(r in e?e[r]=null:e.hasAttribute(r)&&e.removeAttribute(r)),e.addEventListener(a,l,h);break t}r in e?e[r]=l:l===!0?e.setAttribute(r,""):qt(e,r,l)}}}function Pn(e,a,r){switch(a){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ve("error",e),ve("load",e);var l=!1,h=!1,m;for(m in r)if(r.hasOwnProperty(m)){var M=r[m];if(M!=null)switch(m){case"src":l=!0;break;case"srcSet":h=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,a));default:Ge(e,a,m,M,r,null)}}h&&Ge(e,a,"srcSet",r.srcSet,r,null),l&&Ge(e,a,"src",r.src,r,null);return;case"input":ve("invalid",e);var A=m=M=h=null,V=null,J=null;for(l in r)if(r.hasOwnProperty(l)){var ht=r[l];if(ht!=null)switch(l){case"name":h=ht;break;case"type":M=ht;break;case"checked":V=ht;break;case"defaultChecked":J=ht;break;case"value":m=ht;break;case"defaultValue":A=ht;break;case"children":case"dangerouslySetInnerHTML":if(ht!=null)throw Error(s(137,a));break;default:Ge(e,a,l,ht,r,null)}}oa(e,m,A,V,J,M,h,!1);return;case"select":ve("invalid",e),l=M=m=null;for(h in r)if(r.hasOwnProperty(h)&&(A=r[h],A!=null))switch(h){case"value":m=A;break;case"defaultValue":M=A;break;case"multiple":l=A;default:Ge(e,a,h,A,r,null)}a=m,r=M,e.multiple=!!l,a!=null?_i(e,!!l,a,!1):r!=null&&_i(e,!!l,r,!0);return;case"textarea":ve("invalid",e),m=h=l=null;for(M in r)if(r.hasOwnProperty(M)&&(A=r[M],A!=null))switch(M){case"value":l=A;break;case"defaultValue":h=A;break;case"children":m=A;break;case"dangerouslySetInnerHTML":if(A!=null)throw Error(s(91));break;default:Ge(e,a,M,A,r,null)}Cn(e,l,h,m);return;case"option":for(V in r)if(r.hasOwnProperty(V)&&(l=r[V],l!=null))switch(V){case"selected":e.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:Ge(e,a,V,l,r,null)}return;case"dialog":ve("beforetoggle",e),ve("toggle",e),ve("cancel",e),ve("close",e);break;case"iframe":case"object":ve("load",e);break;case"video":case"audio":for(l=0;l<ll.length;l++)ve(ll[l],e);break;case"image":ve("error",e),ve("load",e);break;case"details":ve("toggle",e);break;case"embed":case"source":case"link":ve("error",e),ve("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(J in r)if(r.hasOwnProperty(J)&&(l=r[J],l!=null))switch(J){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,a));default:Ge(e,a,J,l,r,null)}return;default:if(Oi(a)){for(ht in r)r.hasOwnProperty(ht)&&(l=r[ht],l!==void 0&&td(e,a,ht,l,r,void 0));return}}for(A in r)r.hasOwnProperty(A)&&(l=r[A],l!=null&&Ge(e,a,A,l,r,null))}function gb(e,a,r,l){switch(a){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var h=null,m=null,M=null,A=null,V=null,J=null,ht=null;for(lt in r){var mt=r[lt];if(r.hasOwnProperty(lt)&&mt!=null)switch(lt){case"checked":break;case"value":break;case"defaultValue":V=mt;default:l.hasOwnProperty(lt)||Ge(e,a,lt,null,l,mt)}}for(var nt in l){var lt=l[nt];if(mt=r[nt],l.hasOwnProperty(nt)&&(lt!=null||mt!=null))switch(nt){case"type":m=lt;break;case"name":h=lt;break;case"checked":J=lt;break;case"defaultChecked":ht=lt;break;case"value":M=lt;break;case"defaultValue":A=lt;break;case"children":case"dangerouslySetInnerHTML":if(lt!=null)throw Error(s(137,a));break;default:lt!==mt&&Ge(e,a,nt,lt,l,mt)}}An(e,M,A,V,J,ht,m,h);return;case"select":lt=M=A=nt=null;for(m in r)if(V=r[m],r.hasOwnProperty(m)&&V!=null)switch(m){case"value":break;case"multiple":lt=V;default:l.hasOwnProperty(m)||Ge(e,a,m,null,l,V)}for(h in l)if(m=l[h],V=r[h],l.hasOwnProperty(h)&&(m!=null||V!=null))switch(h){case"value":nt=m;break;case"defaultValue":A=m;break;case"multiple":M=m;default:m!==V&&Ge(e,a,h,m,l,V)}a=A,r=M,l=lt,nt!=null?_i(e,!!r,nt,!1):!!l!=!!r&&(a!=null?_i(e,!!r,a,!0):_i(e,!!r,r?[]:"",!1));return;case"textarea":lt=nt=null;for(A in r)if(h=r[A],r.hasOwnProperty(A)&&h!=null&&!l.hasOwnProperty(A))switch(A){case"value":break;case"children":break;default:Ge(e,a,A,null,l,h)}for(M in l)if(h=l[M],m=r[M],l.hasOwnProperty(M)&&(h!=null||m!=null))switch(M){case"value":nt=h;break;case"defaultValue":lt=h;break;case"children":break;case"dangerouslySetInnerHTML":if(h!=null)throw Error(s(91));break;default:h!==m&&Ge(e,a,M,h,l,m)}Fe(e,nt,lt);return;case"option":for(var kt in r)if(nt=r[kt],r.hasOwnProperty(kt)&&nt!=null&&!l.hasOwnProperty(kt))switch(kt){case"selected":e.selected=!1;break;default:Ge(e,a,kt,null,l,nt)}for(V in l)if(nt=l[V],lt=r[V],l.hasOwnProperty(V)&&nt!==lt&&(nt!=null||lt!=null))switch(V){case"selected":e.selected=nt&&typeof nt!="function"&&typeof nt!="symbol";break;default:Ge(e,a,V,nt,l,lt)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ee in r)nt=r[ee],r.hasOwnProperty(ee)&&nt!=null&&!l.hasOwnProperty(ee)&&Ge(e,a,ee,null,l,nt);for(J in l)if(nt=l[J],lt=r[J],l.hasOwnProperty(J)&&nt!==lt&&(nt!=null||lt!=null))switch(J){case"children":case"dangerouslySetInnerHTML":if(nt!=null)throw Error(s(137,a));break;default:Ge(e,a,J,nt,l,lt)}return;default:if(Oi(a)){for(var ke in r)nt=r[ke],r.hasOwnProperty(ke)&&nt!==void 0&&!l.hasOwnProperty(ke)&&td(e,a,ke,void 0,l,nt);for(ht in l)nt=l[ht],lt=r[ht],!l.hasOwnProperty(ht)||nt===lt||nt===void 0&&lt===void 0||td(e,a,ht,nt,l,lt);return}}for(var j in r)nt=r[j],r.hasOwnProperty(j)&&nt!=null&&!l.hasOwnProperty(j)&&Ge(e,a,j,null,l,nt);for(mt in l)nt=l[mt],lt=r[mt],!l.hasOwnProperty(mt)||nt===lt||nt==null&&lt==null||Ge(e,a,mt,nt,l,lt)}function T_(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function vb(){if(typeof performance.getEntriesByType=="function"){for(var e=0,a=0,r=performance.getEntriesByType("resource"),l=0;l<r.length;l++){var h=r[l],m=h.transferSize,M=h.initiatorType,A=h.duration;if(m&&A&&T_(M)){for(M=0,A=h.responseEnd,l+=1;l<r.length;l++){var V=r[l],J=V.startTime;if(J>A)break;var ht=V.transferSize,mt=V.initiatorType;ht&&T_(mt)&&(V=V.responseEnd,M+=ht*(V<A?1:(A-J)/(V-J)))}if(--l,a+=8*(m+M)/(h.duration/1e3),e++,10<e)break}}if(0<e)return a/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var ed=null,nd=null;function Kc(e){return e.nodeType===9?e:e.ownerDocument}function b_(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function A_(e,a){if(e===0)switch(a){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&a==="foreignObject"?0:e}function id(e,a){return e==="textarea"||e==="noscript"||typeof a.children=="string"||typeof a.children=="number"||typeof a.children=="bigint"||typeof a.dangerouslySetInnerHTML=="object"&&a.dangerouslySetInnerHTML!==null&&a.dangerouslySetInnerHTML.__html!=null}var ad=null;function _b(){var e=window.event;return e&&e.type==="popstate"?e===ad?!1:(ad=e,!0):(ad=null,!1)}var R_=typeof setTimeout=="function"?setTimeout:void 0,xb=typeof clearTimeout=="function"?clearTimeout:void 0,C_=typeof Promise=="function"?Promise:void 0,yb=typeof queueMicrotask=="function"?queueMicrotask:typeof C_<"u"?function(e){return C_.resolve(null).then(e).catch(Sb)}:R_;function Sb(e){setTimeout(function(){throw e})}function os(e){return e==="head"}function w_(e,a){var r=a,l=0;do{var h=r.nextSibling;if(e.removeChild(r),h&&h.nodeType===8)if(r=h.data,r==="/$"||r==="/&"){if(l===0){e.removeChild(h),kr(a);return}l--}else if(r==="$"||r==="$?"||r==="$~"||r==="$!"||r==="&")l++;else if(r==="html")ul(e.ownerDocument.documentElement);else if(r==="head"){r=e.ownerDocument.head,ul(r);for(var m=r.firstChild;m;){var M=m.nextSibling,A=m.nodeName;m[As]||A==="SCRIPT"||A==="STYLE"||A==="LINK"&&m.rel.toLowerCase()==="stylesheet"||r.removeChild(m),m=M}}else r==="body"&&ul(e.ownerDocument.body);r=h}while(r);kr(a)}function D_(e,a){var r=e;e=0;do{var l=r.nextSibling;if(r.nodeType===1?a?(r._stashedDisplay=r.style.display,r.style.display="none"):(r.style.display=r._stashedDisplay||"",r.getAttribute("style")===""&&r.removeAttribute("style")):r.nodeType===3&&(a?(r._stashedText=r.nodeValue,r.nodeValue=""):r.nodeValue=r._stashedText||""),l&&l.nodeType===8)if(r=l.data,r==="/$"){if(e===0)break;e--}else r!=="$"&&r!=="$?"&&r!=="$~"&&r!=="$!"||e++;r=l}while(r)}function sd(e){var a=e.firstChild;for(a&&a.nodeType===10&&(a=a.nextSibling);a;){var r=a;switch(a=a.nextSibling,r.nodeName){case"HTML":case"HEAD":case"BODY":sd(r),wo(r);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(r.rel.toLowerCase()==="stylesheet")continue}e.removeChild(r)}}function Mb(e,a,r,l){for(;e.nodeType===1;){var h=r;if(e.nodeName.toLowerCase()!==a.toLowerCase()){if(!l&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(l){if(!e[As])switch(a){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(m=e.getAttribute("rel"),m==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(m!==h.rel||e.getAttribute("href")!==(h.href==null||h.href===""?null:h.href)||e.getAttribute("crossorigin")!==(h.crossOrigin==null?null:h.crossOrigin)||e.getAttribute("title")!==(h.title==null?null:h.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(m=e.getAttribute("src"),(m!==(h.src==null?null:h.src)||e.getAttribute("type")!==(h.type==null?null:h.type)||e.getAttribute("crossorigin")!==(h.crossOrigin==null?null:h.crossOrigin))&&m&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(a==="input"&&e.type==="hidden"){var m=h.name==null?null:""+h.name;if(h.type==="hidden"&&e.getAttribute("name")===m)return e}else return e;if(e=bi(e.nextSibling),e===null)break}return null}function Eb(e,a,r){if(a==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!r||(e=bi(e.nextSibling),e===null))return null;return e}function U_(e,a){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=bi(e.nextSibling),e===null))return null;return e}function rd(e){return e.data==="$?"||e.data==="$~"}function od(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function Tb(e,a){var r=e.ownerDocument;if(e.data==="$~")e._reactRetry=a;else if(e.data!=="$?"||r.readyState!=="loading")a();else{var l=function(){a(),r.removeEventListener("DOMContentLoaded",l)};r.addEventListener("DOMContentLoaded",l),e._reactRetry=l}}function bi(e){for(;e!=null;e=e.nextSibling){var a=e.nodeType;if(a===1||a===3)break;if(a===8){if(a=e.data,a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"||a==="F!"||a==="F")break;if(a==="/$"||a==="/&")return null}}return e}var ld=null;function L_(e){e=e.nextSibling;for(var a=0;e;){if(e.nodeType===8){var r=e.data;if(r==="/$"||r==="/&"){if(a===0)return bi(e.nextSibling);a--}else r!=="$"&&r!=="$!"&&r!=="$?"&&r!=="$~"&&r!=="&"||a++}e=e.nextSibling}return null}function N_(e){e=e.previousSibling;for(var a=0;e;){if(e.nodeType===8){var r=e.data;if(r==="$"||r==="$!"||r==="$?"||r==="$~"||r==="&"){if(a===0)return e;a--}else r!=="/$"&&r!=="/&"||a++}e=e.previousSibling}return null}function P_(e,a,r){switch(a=Kc(r),e){case"html":if(e=a.documentElement,!e)throw Error(s(452));return e;case"head":if(e=a.head,!e)throw Error(s(453));return e;case"body":if(e=a.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function ul(e){for(var a=e.attributes;a.length;)e.removeAttributeNode(a[0]);wo(e)}var Ai=new Map,O_=new Set;function Qc(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Ta=z.d;z.d={f:bb,r:Ab,D:Rb,C:Cb,L:wb,m:Db,X:Lb,S:Ub,M:Nb};function bb(){var e=Ta.f(),a=Gc();return e||a}function Ab(e){var a=Ga(e);a!==null&&a.tag===5&&a.type==="form"?J0(a):Ta.r(e)}var Vr=typeof document>"u"?null:document;function F_(e,a,r){var l=Vr;if(l&&typeof a=="string"&&a){var h=se(a);h='link[rel="'+e+'"][href="'+h+'"]',typeof r=="string"&&(h+='[crossorigin="'+r+'"]'),O_.has(h)||(O_.add(h),e={rel:e,crossOrigin:r,href:a},l.querySelector(h)===null&&(a=l.createElement("link"),Pn(a,"link",e),R(a),l.head.appendChild(a)))}}function Rb(e){Ta.D(e),F_("dns-prefetch",e,null)}function Cb(e,a){Ta.C(e,a),F_("preconnect",e,a)}function wb(e,a,r){Ta.L(e,a,r);var l=Vr;if(l&&e&&a){var h='link[rel="preload"][as="'+se(a)+'"]';a==="image"&&r&&r.imageSrcSet?(h+='[imagesrcset="'+se(r.imageSrcSet)+'"]',typeof r.imageSizes=="string"&&(h+='[imagesizes="'+se(r.imageSizes)+'"]')):h+='[href="'+se(e)+'"]';var m=h;switch(a){case"style":m=Hr(e);break;case"script":m=Gr(e)}Ai.has(m)||(e=v({rel:"preload",href:a==="image"&&r&&r.imageSrcSet?void 0:e,as:a},r),Ai.set(m,e),l.querySelector(h)!==null||a==="style"&&l.querySelector(fl(m))||a==="script"&&l.querySelector(hl(m))||(a=l.createElement("link"),Pn(a,"link",e),R(a),l.head.appendChild(a)))}}function Db(e,a){Ta.m(e,a);var r=Vr;if(r&&e){var l=a&&typeof a.as=="string"?a.as:"script",h='link[rel="modulepreload"][as="'+se(l)+'"][href="'+se(e)+'"]',m=h;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":m=Gr(e)}if(!Ai.has(m)&&(e=v({rel:"modulepreload",href:e},a),Ai.set(m,e),r.querySelector(h)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(r.querySelector(hl(m)))return}l=r.createElement("link"),Pn(l,"link",e),R(l),r.head.appendChild(l)}}}function Ub(e,a,r){Ta.S(e,a,r);var l=Vr;if(l&&e){var h=ka(l).hoistableStyles,m=Hr(e);a=a||"default";var M=h.get(m);if(!M){var A={loading:0,preload:null};if(M=l.querySelector(fl(m)))A.loading=5;else{e=v({rel:"stylesheet",href:e,"data-precedence":a},r),(r=Ai.get(m))&&cd(e,r);var V=M=l.createElement("link");R(V),Pn(V,"link",e),V._p=new Promise(function(J,ht){V.onload=J,V.onerror=ht}),V.addEventListener("load",function(){A.loading|=1}),V.addEventListener("error",function(){A.loading|=2}),A.loading|=4,Jc(M,a,l)}M={type:"stylesheet",instance:M,count:1,state:A},h.set(m,M)}}}function Lb(e,a){Ta.X(e,a);var r=Vr;if(r&&e){var l=ka(r).hoistableScripts,h=Gr(e),m=l.get(h);m||(m=r.querySelector(hl(h)),m||(e=v({src:e,async:!0},a),(a=Ai.get(h))&&ud(e,a),m=r.createElement("script"),R(m),Pn(m,"link",e),r.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},l.set(h,m))}}function Nb(e,a){Ta.M(e,a);var r=Vr;if(r&&e){var l=ka(r).hoistableScripts,h=Gr(e),m=l.get(h);m||(m=r.querySelector(hl(h)),m||(e=v({src:e,async:!0,type:"module"},a),(a=Ai.get(h))&&ud(e,a),m=r.createElement("script"),R(m),Pn(m,"link",e),r.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},l.set(h,m))}}function B_(e,a,r,l){var h=(h=it.current)?Qc(h):null;if(!h)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof r.precedence=="string"&&typeof r.href=="string"?(a=Hr(r.href),r=ka(h).hoistableStyles,l=r.get(a),l||(l={type:"style",instance:null,count:0,state:null},r.set(a,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(r.rel==="stylesheet"&&typeof r.href=="string"&&typeof r.precedence=="string"){e=Hr(r.href);var m=ka(h).hoistableStyles,M=m.get(e);if(M||(h=h.ownerDocument||h,M={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},m.set(e,M),(m=h.querySelector(fl(e)))&&!m._p&&(M.instance=m,M.state.loading=5),Ai.has(e)||(r={rel:"preload",as:"style",href:r.href,crossOrigin:r.crossOrigin,integrity:r.integrity,media:r.media,hrefLang:r.hrefLang,referrerPolicy:r.referrerPolicy},Ai.set(e,r),m||Pb(h,e,r,M.state))),a&&l===null)throw Error(s(528,""));return M}if(a&&l!==null)throw Error(s(529,""));return null;case"script":return a=r.async,r=r.src,typeof r=="string"&&a&&typeof a!="function"&&typeof a!="symbol"?(a=Gr(r),r=ka(h).hoistableScripts,l=r.get(a),l||(l={type:"script",instance:null,count:0,state:null},r.set(a,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function Hr(e){return'href="'+se(e)+'"'}function fl(e){return'link[rel="stylesheet"]['+e+"]"}function I_(e){return v({},e,{"data-precedence":e.precedence,precedence:null})}function Pb(e,a,r,l){e.querySelector('link[rel="preload"][as="style"]['+a+"]")?l.loading=1:(a=e.createElement("link"),l.preload=a,a.addEventListener("load",function(){return l.loading|=1}),a.addEventListener("error",function(){return l.loading|=2}),Pn(a,"link",r),R(a),e.head.appendChild(a))}function Gr(e){return'[src="'+se(e)+'"]'}function hl(e){return"script[async]"+e}function z_(e,a,r){if(a.count++,a.instance===null)switch(a.type){case"style":var l=e.querySelector('style[data-href~="'+se(r.href)+'"]');if(l)return a.instance=l,R(l),l;var h=v({},r,{"data-href":r.href,"data-precedence":r.precedence,href:null,precedence:null});return l=(e.ownerDocument||e).createElement("style"),R(l),Pn(l,"style",h),Jc(l,r.precedence,e),a.instance=l;case"stylesheet":h=Hr(r.href);var m=e.querySelector(fl(h));if(m)return a.state.loading|=4,a.instance=m,R(m),m;l=I_(r),(h=Ai.get(h))&&cd(l,h),m=(e.ownerDocument||e).createElement("link"),R(m);var M=m;return M._p=new Promise(function(A,V){M.onload=A,M.onerror=V}),Pn(m,"link",l),a.state.loading|=4,Jc(m,r.precedence,e),a.instance=m;case"script":return m=Gr(r.src),(h=e.querySelector(hl(m)))?(a.instance=h,R(h),h):(l=r,(h=Ai.get(m))&&(l=v({},r),ud(l,h)),e=e.ownerDocument||e,h=e.createElement("script"),R(h),Pn(h,"link",l),e.head.appendChild(h),a.instance=h);case"void":return null;default:throw Error(s(443,a.type))}else a.type==="stylesheet"&&(a.state.loading&4)===0&&(l=a.instance,a.state.loading|=4,Jc(l,r.precedence,e));return a.instance}function Jc(e,a,r){for(var l=r.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),h=l.length?l[l.length-1]:null,m=h,M=0;M<l.length;M++){var A=l[M];if(A.dataset.precedence===a)m=A;else if(m!==h)break}m?m.parentNode.insertBefore(e,m.nextSibling):(a=r.nodeType===9?r.head:r,a.insertBefore(e,a.firstChild))}function cd(e,a){e.crossOrigin==null&&(e.crossOrigin=a.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=a.referrerPolicy),e.title==null&&(e.title=a.title)}function ud(e,a){e.crossOrigin==null&&(e.crossOrigin=a.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=a.referrerPolicy),e.integrity==null&&(e.integrity=a.integrity)}var $c=null;function V_(e,a,r){if($c===null){var l=new Map,h=$c=new Map;h.set(r,l)}else h=$c,l=h.get(r),l||(l=new Map,h.set(r,l));if(l.has(e))return l;for(l.set(e,null),r=r.getElementsByTagName(e),h=0;h<r.length;h++){var m=r[h];if(!(m[As]||m[fn]||e==="link"&&m.getAttribute("rel")==="stylesheet")&&m.namespaceURI!=="http://www.w3.org/2000/svg"){var M=m.getAttribute(a)||"";M=e+M;var A=l.get(M);A?A.push(m):l.set(M,[m])}}return l}function H_(e,a,r){e=e.ownerDocument||e,e.head.insertBefore(r,a==="title"?e.querySelector("head > title"):null)}function Ob(e,a,r){if(r===1||a.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof a.precedence!="string"||typeof a.href!="string"||a.href==="")break;return!0;case"link":if(typeof a.rel!="string"||typeof a.href!="string"||a.href===""||a.onLoad||a.onError)break;switch(a.rel){case"stylesheet":return e=a.disabled,typeof a.precedence=="string"&&e==null;default:return!0}case"script":if(a.async&&typeof a.async!="function"&&typeof a.async!="symbol"&&!a.onLoad&&!a.onError&&a.src&&typeof a.src=="string")return!0}return!1}function G_(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function Fb(e,a,r,l){if(r.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(r.state.loading&4)===0){if(r.instance===null){var h=Hr(l.href),m=a.querySelector(fl(h));if(m){a=m._p,a!==null&&typeof a=="object"&&typeof a.then=="function"&&(e.count++,e=tu.bind(e),a.then(e,e)),r.state.loading|=4,r.instance=m,R(m);return}m=a.ownerDocument||a,l=I_(l),(h=Ai.get(h))&&cd(l,h),m=m.createElement("link"),R(m);var M=m;M._p=new Promise(function(A,V){M.onload=A,M.onerror=V}),Pn(m,"link",l),r.instance=m}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(r,a),(a=r.state.preload)&&(r.state.loading&3)===0&&(e.count++,r=tu.bind(e),a.addEventListener("load",r),a.addEventListener("error",r))}}var fd=0;function Bb(e,a){return e.stylesheets&&e.count===0&&nu(e,e.stylesheets),0<e.count||0<e.imgCount?function(r){var l=setTimeout(function(){if(e.stylesheets&&nu(e,e.stylesheets),e.unsuspend){var m=e.unsuspend;e.unsuspend=null,m()}},6e4+a);0<e.imgBytes&&fd===0&&(fd=62500*vb());var h=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&nu(e,e.stylesheets),e.unsuspend)){var m=e.unsuspend;e.unsuspend=null,m()}},(e.imgBytes>fd?50:800)+a);return e.unsuspend=r,function(){e.unsuspend=null,clearTimeout(l),clearTimeout(h)}}:null}function tu(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)nu(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var eu=null;function nu(e,a){e.stylesheets=null,e.unsuspend!==null&&(e.count++,eu=new Map,a.forEach(Ib,e),eu=null,tu.call(e))}function Ib(e,a){if(!(a.state.loading&4)){var r=eu.get(e);if(r)var l=r.get(null);else{r=new Map,eu.set(e,r);for(var h=e.querySelectorAll("link[data-precedence],style[data-precedence]"),m=0;m<h.length;m++){var M=h[m];(M.nodeName==="LINK"||M.getAttribute("media")!=="not all")&&(r.set(M.dataset.precedence,M),l=M)}l&&r.set(null,l)}h=a.instance,M=h.getAttribute("data-precedence"),m=r.get(M)||l,m===l&&r.set(null,h),r.set(M,h),this.count++,l=tu.bind(this),h.addEventListener("load",l),h.addEventListener("error",l),m?m.parentNode.insertBefore(h,m.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(h,e.firstChild)),a.state.loading|=4}}var dl={$$typeof:w,Provider:null,Consumer:null,_currentValue:K,_currentValue2:K,_threadCount:0};function zb(e,a,r,l,h,m,M,A,V){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Te(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Te(0),this.hiddenUpdates=Te(null),this.identifierPrefix=l,this.onUncaughtError=h,this.onCaughtError=m,this.onRecoverableError=M,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=V,this.incompleteTransitions=new Map}function k_(e,a,r,l,h,m,M,A,V,J,ht,mt){return e=new zb(e,a,r,M,V,J,ht,mt,A),a=1,m===!0&&(a|=24),m=oi(3,null,null,a),e.current=m,m.stateNode=e,a=Xf(),a.refCount++,e.pooledCache=a,a.refCount++,m.memoizedState={element:l,isDehydrated:r,cache:a},jf(m),e}function X_(e){return e?(e=xr,e):xr}function W_(e,a,r,l,h,m){h=X_(h),l.context===null?l.context=h:l.pendingContext=h,l=Ka(a),l.payload={element:r},m=m===void 0?null:m,m!==null&&(l.callback=m),r=Qa(e,l,a),r!==null&&(ti(r,e,a),Wo(r,e,a))}function q_(e,a){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var r=e.retryLane;e.retryLane=r!==0&&r<a?r:a}}function hd(e,a){q_(e,a),(e=e.alternate)&&q_(e,a)}function Y_(e){if(e.tag===13||e.tag===31){var a=Us(e,67108864);a!==null&&ti(a,e,67108864),hd(e,67108864)}}function j_(e){if(e.tag===13||e.tag===31){var a=hi();a=Ao(a);var r=Us(e,a);r!==null&&ti(r,e,a),hd(e,a)}}var iu=!0;function Vb(e,a,r,l){var h=I.T;I.T=null;var m=z.p;try{z.p=2,dd(e,a,r,l)}finally{z.p=m,I.T=h}}function Hb(e,a,r,l){var h=I.T;I.T=null;var m=z.p;try{z.p=8,dd(e,a,r,l)}finally{z.p=m,I.T=h}}function dd(e,a,r,l){if(iu){var h=pd(l);if(h===null)$h(e,a,l,au,r),K_(e,l);else if(kb(h,e,a,r,l))l.stopPropagation();else if(K_(e,l),a&4&&-1<Gb.indexOf(e)){for(;h!==null;){var m=Ga(h);if(m!==null)switch(m.tag){case 3:if(m=m.stateNode,m.current.memoizedState.isDehydrated){var M=St(m.pendingLanes);if(M!==0){var A=m;for(A.pendingLanes|=2,A.entangledLanes|=2;M;){var V=1<<31-Ot(M);A.entanglements[1]|=V,M&=~V}Ki(m),(Le&6)===0&&(Vc=T()+500,ol(0))}}break;case 31:case 13:A=Us(m,2),A!==null&&ti(A,m,2),Gc(),hd(m,2)}if(m=pd(l),m===null&&$h(e,a,l,au,r),m===h)break;h=m}h!==null&&l.stopPropagation()}else $h(e,a,l,null,r)}}function pd(e){return e=gf(e),md(e)}var au=null;function md(e){if(au=null,e=Ha(e),e!==null){var a=c(e);if(a===null)e=null;else{var r=a.tag;if(r===13){if(e=u(a),e!==null)return e;e=null}else if(r===31){if(e=f(a),e!==null)return e;e=null}else if(r===3){if(a.stateNode.current.memoizedState.isDehydrated)return a.tag===3?a.stateNode.containerInfo:null;e=null}else a!==e&&(e=null)}}return au=e,null}function Z_(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(q()){case dt:return 2;case xt:return 8;case ct:case Kt:return 32;case Ct:return 268435456;default:return 32}default:return 32}}var gd=!1,ls=null,cs=null,us=null,pl=new Map,ml=new Map,fs=[],Gb="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function K_(e,a){switch(e){case"focusin":case"focusout":ls=null;break;case"dragenter":case"dragleave":cs=null;break;case"mouseover":case"mouseout":us=null;break;case"pointerover":case"pointerout":pl.delete(a.pointerId);break;case"gotpointercapture":case"lostpointercapture":ml.delete(a.pointerId)}}function gl(e,a,r,l,h,m){return e===null||e.nativeEvent!==m?(e={blockedOn:a,domEventName:r,eventSystemFlags:l,nativeEvent:m,targetContainers:[h]},a!==null&&(a=Ga(a),a!==null&&Y_(a)),e):(e.eventSystemFlags|=l,a=e.targetContainers,h!==null&&a.indexOf(h)===-1&&a.push(h),e)}function kb(e,a,r,l,h){switch(a){case"focusin":return ls=gl(ls,e,a,r,l,h),!0;case"dragenter":return cs=gl(cs,e,a,r,l,h),!0;case"mouseover":return us=gl(us,e,a,r,l,h),!0;case"pointerover":var m=h.pointerId;return pl.set(m,gl(pl.get(m)||null,e,a,r,l,h)),!0;case"gotpointercapture":return m=h.pointerId,ml.set(m,gl(ml.get(m)||null,e,a,r,l,h)),!0}return!1}function Q_(e){var a=Ha(e.target);if(a!==null){var r=c(a);if(r!==null){if(a=r.tag,a===13){if(a=u(r),a!==null){e.blockedOn=a,qi(e.priority,function(){j_(r)});return}}else if(a===31){if(a=f(r),a!==null){e.blockedOn=a,qi(e.priority,function(){j_(r)});return}}else if(a===3&&r.stateNode.current.memoizedState.isDehydrated){e.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}e.blockedOn=null}function su(e){if(e.blockedOn!==null)return!1;for(var a=e.targetContainers;0<a.length;){var r=pd(e.nativeEvent);if(r===null){r=e.nativeEvent;var l=new r.constructor(r.type,r);mf=l,r.target.dispatchEvent(l),mf=null}else return a=Ga(r),a!==null&&Y_(a),e.blockedOn=r,!1;a.shift()}return!0}function J_(e,a,r){su(e)&&r.delete(a)}function Xb(){gd=!1,ls!==null&&su(ls)&&(ls=null),cs!==null&&su(cs)&&(cs=null),us!==null&&su(us)&&(us=null),pl.forEach(J_),ml.forEach(J_)}function ru(e,a){e.blockedOn===a&&(e.blockedOn=null,gd||(gd=!0,i.unstable_scheduleCallback(i.unstable_NormalPriority,Xb)))}var ou=null;function $_(e){ou!==e&&(ou=e,i.unstable_scheduleCallback(i.unstable_NormalPriority,function(){ou===e&&(ou=null);for(var a=0;a<e.length;a+=3){var r=e[a],l=e[a+1],h=e[a+2];if(typeof l!="function"){if(md(l||r)===null)continue;break}var m=Ga(r);m!==null&&(e.splice(a,3),a-=3,ph(m,{pending:!0,data:h,method:r.method,action:l},l,h))}}))}function kr(e){function a(V){return ru(V,e)}ls!==null&&ru(ls,e),cs!==null&&ru(cs,e),us!==null&&ru(us,e),pl.forEach(a),ml.forEach(a);for(var r=0;r<fs.length;r++){var l=fs[r];l.blockedOn===e&&(l.blockedOn=null)}for(;0<fs.length&&(r=fs[0],r.blockedOn===null);)Q_(r),r.blockedOn===null&&fs.shift();if(r=(e.ownerDocument||e).$$reactFormReplay,r!=null)for(l=0;l<r.length;l+=3){var h=r[l],m=r[l+1],M=h[bn]||null;if(typeof m=="function")M||$_(r);else if(M){var A=null;if(m&&m.hasAttribute("formAction")){if(h=m,M=m[bn]||null)A=M.formAction;else if(md(h)!==null)continue}else A=M.action;typeof A=="function"?r[l+1]=A:(r.splice(l,3),l-=3),$_(r)}}}function tx(){function e(m){m.canIntercept&&m.info==="react-transition"&&m.intercept({handler:function(){return new Promise(function(M){return h=M})},focusReset:"manual",scroll:"manual"})}function a(){h!==null&&(h(),h=null),l||setTimeout(r,20)}function r(){if(!l&&!navigation.transition){var m=navigation.currentEntry;m&&m.url!=null&&navigation.navigate(m.url,{state:m.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var l=!1,h=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",a),navigation.addEventListener("navigateerror",a),setTimeout(r,100),function(){l=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",a),navigation.removeEventListener("navigateerror",a),h!==null&&(h(),h=null)}}}function vd(e){this._internalRoot=e}lu.prototype.render=vd.prototype.render=function(e){var a=this._internalRoot;if(a===null)throw Error(s(409));var r=a.current,l=hi();W_(r,l,e,a,null,null)},lu.prototype.unmount=vd.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var a=e.containerInfo;W_(e.current,2,null,e,null,null),Gc(),a[Pi]=null}};function lu(e){this._internalRoot=e}lu.prototype.unstable_scheduleHydration=function(e){if(e){var a=Ro();e={blockedOn:null,target:e,priority:a};for(var r=0;r<fs.length&&a!==0&&a<fs[r].priority;r++);fs.splice(r,0,e),r===0&&Q_(e)}};var ex=t.version;if(ex!=="19.2.3")throw Error(s(527,ex,"19.2.3"));z.findDOMNode=function(e){var a=e._reactInternals;if(a===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=d(a),e=e!==null?g(e):null,e=e===null?null:e.stateNode,e};var Wb={bundleType:0,version:"19.2.3",rendererPackageName:"react-dom",currentDispatcherRef:I,reconcilerVersion:"19.2.3"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var cu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!cu.isDisabled&&cu.supportsFiber)try{Mt=cu.inject(Wb),Tt=cu}catch{}}return _l.createRoot=function(e,a){if(!o(e))throw Error(s(299));var r=!1,l="",h=lv,m=cv,M=uv;return a!=null&&(a.unstable_strictMode===!0&&(r=!0),a.identifierPrefix!==void 0&&(l=a.identifierPrefix),a.onUncaughtError!==void 0&&(h=a.onUncaughtError),a.onCaughtError!==void 0&&(m=a.onCaughtError),a.onRecoverableError!==void 0&&(M=a.onRecoverableError)),a=k_(e,1,!1,null,null,r,l,null,h,m,M,tx),e[Pi]=a.current,Jh(e),new vd(a)},_l.hydrateRoot=function(e,a,r){if(!o(e))throw Error(s(299));var l=!1,h="",m=lv,M=cv,A=uv,V=null;return r!=null&&(r.unstable_strictMode===!0&&(l=!0),r.identifierPrefix!==void 0&&(h=r.identifierPrefix),r.onUncaughtError!==void 0&&(m=r.onUncaughtError),r.onCaughtError!==void 0&&(M=r.onCaughtError),r.onRecoverableError!==void 0&&(A=r.onRecoverableError),r.formState!==void 0&&(V=r.formState)),a=k_(e,1,!0,a,r??null,l,h,V,m,M,A,tx),a.context=X_(null),r=a.current,l=hi(),l=Ao(l),h=Ka(l),h.callback=null,Qa(r,h,l),r=l,a.current.lanes=r,Bn(a,r),Ki(a),e[Pi]=a.current,Jh(e),new lu(a)},_l.version="19.2.3",_l}var fx;function aA(){if(fx)return yd.exports;fx=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(t){console.error(t)}}return i(),yd.exports=iA(),yd.exports}var sA=aA();const rA=ES(sA);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oA=i=>i.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),lA=i=>i.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,n,s)=>s?s.toUpperCase():n.toLowerCase()),hx=i=>{const t=lA(i);return t.charAt(0).toUpperCase()+t.slice(1)},TS=(...i)=>i.filter((t,n,s)=>!!t&&t.trim()!==""&&s.indexOf(t)===n).join(" ").trim(),cA=i=>{for(const t in i)if(t.startsWith("aria-")||t==="role"||t==="title")return!0};/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var uA={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fA=Et.forwardRef(({color:i="currentColor",size:t=24,strokeWidth:n=2,absoluteStrokeWidth:s,className:o="",children:c,iconNode:u,...f},p)=>Et.createElement("svg",{ref:p,...uA,width:t,height:t,stroke:i,strokeWidth:s?Number(n)*24/Number(t):n,className:TS("lucide",o),...!c&&!cA(f)&&{"aria-hidden":"true"},...f},[...u.map(([d,g])=>Et.createElement(d,g)),...Array.isArray(c)?c:[c]]));/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sf=(i,t)=>{const n=Et.forwardRef(({className:s,...o},c)=>Et.createElement(fA,{ref:c,iconNode:t,className:TS(`lucide-${oA(hx(i))}`,`lucide-${i}`,s),...o}));return n.displayName=hx(i),n};/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hA=[["path",{d:"M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z",key:"18u6gg"}],["circle",{cx:"12",cy:"13",r:"3",key:"1vg3eu"}]],dA=sf("camera",hA);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pA=[["path",{d:"M12 6v6l4 2",key:"mmk7yg"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],mA=sf("clock",pA);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gA=[["path",{d:"M12 6a2 2 0 0 1 3.414-1.414l6 6a2 2 0 0 1 0 2.828l-6 6A2 2 0 0 1 12 18z",key:"b19h5q"}],["path",{d:"M2 6a2 2 0 0 1 3.414-1.414l6 6a2 2 0 0 1 0 2.828l-6 6A2 2 0 0 1 2 18z",key:"h7h5ge"}]],vA=sf("fast-forward",gA);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _A=[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]],xA=sf("refresh-cw",_A),Om=Et.createContext({});function Fm(i){const t=Et.useRef(null);return t.current===null&&(t.current=i()),t.current}const Bm=typeof window<"u",bS=Bm?Et.useLayoutEffect:Et.useEffect,rf=Et.createContext(null);function Im(i,t){i.indexOf(t)===-1&&i.push(t)}function zm(i,t){const n=i.indexOf(t);n>-1&&i.splice(n,1)}const Oa=(i,t,n)=>n>t?t:n<i?i:n;let Vm=()=>{};const Fa={},AS=i=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(i);function RS(i){return typeof i=="object"&&i!==null}const CS=i=>/^0[^.\s]+$/u.test(i);function Hm(i){let t;return()=>(t===void 0&&(t=i()),t)}const Li=i=>i,yA=(i,t)=>n=>t(i(n)),Xl=(...i)=>i.reduce(yA),Pl=(i,t,n)=>{const s=t-i;return s===0?1:(n-i)/s};class Gm{constructor(){this.subscriptions=[]}add(t){return Im(this.subscriptions,t),()=>zm(this.subscriptions,t)}notify(t,n,s){const o=this.subscriptions.length;if(o)if(o===1)this.subscriptions[0](t,n,s);else for(let c=0;c<o;c++){const u=this.subscriptions[c];u&&u(t,n,s)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const ea=i=>i*1e3,Ui=i=>i/1e3;function wS(i,t){return t?i*(1e3/t):0}const DS=(i,t,n)=>(((1-3*n+3*t)*i+(3*n-6*t))*i+3*t)*i,SA=1e-7,MA=12;function EA(i,t,n,s,o){let c,u,f=0;do u=t+(n-t)/2,c=DS(u,s,o)-i,c>0?n=u:t=u;while(Math.abs(c)>SA&&++f<MA);return u}function Wl(i,t,n,s){if(i===t&&n===s)return Li;const o=c=>EA(c,0,1,i,n);return c=>c===0||c===1?c:DS(o(c),t,s)}const US=i=>t=>t<=.5?i(2*t)/2:(2-i(2*(1-t)))/2,LS=i=>t=>1-i(1-t),NS=Wl(.33,1.53,.69,.99),km=LS(NS),PS=US(km),OS=i=>(i*=2)<1?.5*km(i):.5*(2-Math.pow(2,-10*(i-1))),Xm=i=>1-Math.sin(Math.acos(i)),FS=LS(Xm),BS=US(Xm),TA=Wl(.42,0,1,1),bA=Wl(0,0,.58,1),IS=Wl(.42,0,.58,1),AA=i=>Array.isArray(i)&&typeof i[0]!="number",zS=i=>Array.isArray(i)&&typeof i[0]=="number",RA={linear:Li,easeIn:TA,easeInOut:IS,easeOut:bA,circIn:Xm,circInOut:BS,circOut:FS,backIn:km,backInOut:PS,backOut:NS,anticipate:OS},CA=i=>typeof i=="string",dx=i=>{if(zS(i)){Vm(i.length===4);const[t,n,s,o]=i;return Wl(t,n,s,o)}else if(CA(i))return RA[i];return i},uu=["setup","read","resolveKeyframes","preUpdate","update","preRender","render","postRender"];function wA(i,t){let n=new Set,s=new Set,o=!1,c=!1;const u=new WeakSet;let f={delta:0,timestamp:0,isProcessing:!1};function p(g){u.has(g)&&(d.schedule(g),i()),g(f)}const d={schedule:(g,v=!1,_=!1)=>{const E=_&&o?n:s;return v&&u.add(g),E.has(g)||E.add(g),g},cancel:g=>{s.delete(g),u.delete(g)},process:g=>{if(f=g,o){c=!0;return}o=!0,[n,s]=[s,n],n.forEach(p),n.clear(),o=!1,c&&(c=!1,d.process(g))}};return d}const DA=40;function VS(i,t){let n=!1,s=!0;const o={delta:0,timestamp:0,isProcessing:!1},c=()=>n=!0,u=uu.reduce((w,L)=>(w[L]=wA(c),w),{}),{setup:f,read:p,resolveKeyframes:d,preUpdate:g,update:v,preRender:_,render:y,postRender:E}=u,b=()=>{const w=Fa.useManualTiming?o.timestamp:performance.now();n=!1,Fa.useManualTiming||(o.delta=s?1e3/60:Math.max(Math.min(w-o.timestamp,DA),1)),o.timestamp=w,o.isProcessing=!0,f.process(o),p.process(o),d.process(o),g.process(o),v.process(o),_.process(o),y.process(o),E.process(o),o.isProcessing=!1,n&&t&&(s=!1,i(b))},S=()=>{n=!0,s=!0,o.isProcessing||i(b)};return{schedule:uu.reduce((w,L)=>{const N=u[L];return w[L]=(B,P=!1,k=!1)=>(n||S(),N.schedule(B,P,k)),w},{}),cancel:w=>{for(let L=0;L<uu.length;L++)u[uu[L]].cancel(w)},state:o,steps:u}}const{schedule:Je,cancel:Ms,state:On,steps:Td}=VS(typeof requestAnimationFrame<"u"?requestAnimationFrame:Li,!0);let Bu;function UA(){Bu=void 0}const ni={now:()=>(Bu===void 0&&ni.set(On.isProcessing||Fa.useManualTiming?On.timestamp:performance.now()),Bu),set:i=>{Bu=i,queueMicrotask(UA)}},HS=i=>t=>typeof t=="string"&&t.startsWith(i),GS=HS("--"),LA=HS("var(--"),Wm=i=>LA(i)?NA.test(i.split("/*")[0].trim()):!1,NA=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,yo={test:i=>typeof i=="number",parse:parseFloat,transform:i=>i},Ol={...yo,transform:i=>Oa(0,1,i)},fu={...yo,default:1},Dl=i=>Math.round(i*1e5)/1e5,qm=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function PA(i){return i==null}const OA=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,Ym=(i,t)=>n=>!!(typeof n=="string"&&OA.test(n)&&n.startsWith(i)||t&&!PA(n)&&Object.prototype.hasOwnProperty.call(n,t)),kS=(i,t,n)=>s=>{if(typeof s!="string")return s;const[o,c,u,f]=s.match(qm);return{[i]:parseFloat(o),[t]:parseFloat(c),[n]:parseFloat(u),alpha:f!==void 0?parseFloat(f):1}},FA=i=>Oa(0,255,i),bd={...yo,transform:i=>Math.round(FA(i))},er={test:Ym("rgb","red"),parse:kS("red","green","blue"),transform:({red:i,green:t,blue:n,alpha:s=1})=>"rgba("+bd.transform(i)+", "+bd.transform(t)+", "+bd.transform(n)+", "+Dl(Ol.transform(s))+")"};function BA(i){let t="",n="",s="",o="";return i.length>5?(t=i.substring(1,3),n=i.substring(3,5),s=i.substring(5,7),o=i.substring(7,9)):(t=i.substring(1,2),n=i.substring(2,3),s=i.substring(3,4),o=i.substring(4,5),t+=t,n+=n,s+=s,o+=o),{red:parseInt(t,16),green:parseInt(n,16),blue:parseInt(s,16),alpha:o?parseInt(o,16)/255:1}}const gp={test:Ym("#"),parse:BA,transform:er.transform},ql=i=>({test:t=>typeof t=="string"&&t.endsWith(i)&&t.split(" ").length===1,parse:parseFloat,transform:t=>`${t}${i}`}),xs=ql("deg"),na=ql("%"),ie=ql("px"),IA=ql("vh"),zA=ql("vw"),px={...na,parse:i=>na.parse(i)/100,transform:i=>na.transform(i*100)},ao={test:Ym("hsl","hue"),parse:kS("hue","saturation","lightness"),transform:({hue:i,saturation:t,lightness:n,alpha:s=1})=>"hsla("+Math.round(i)+", "+na.transform(Dl(t))+", "+na.transform(Dl(n))+", "+Dl(Ol.transform(s))+")"},vn={test:i=>er.test(i)||gp.test(i)||ao.test(i),parse:i=>er.test(i)?er.parse(i):ao.test(i)?ao.parse(i):gp.parse(i),transform:i=>typeof i=="string"?i:i.hasOwnProperty("red")?er.transform(i):ao.transform(i),getAnimatableNone:i=>{const t=vn.parse(i);return t.alpha=0,vn.transform(t)}},VA=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function HA(i){var t,n;return isNaN(i)&&typeof i=="string"&&(((t=i.match(qm))==null?void 0:t.length)||0)+(((n=i.match(VA))==null?void 0:n.length)||0)>0}const XS="number",WS="color",GA="var",kA="var(",mx="${}",XA=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function Fl(i){const t=i.toString(),n=[],s={color:[],number:[],var:[]},o=[];let c=0;const f=t.replace(XA,p=>(vn.test(p)?(s.color.push(c),o.push(WS),n.push(vn.parse(p))):p.startsWith(kA)?(s.var.push(c),o.push(GA),n.push(p)):(s.number.push(c),o.push(XS),n.push(parseFloat(p))),++c,mx)).split(mx);return{values:n,split:f,indexes:s,types:o}}function qS(i){return Fl(i).values}function YS(i){const{split:t,types:n}=Fl(i),s=t.length;return o=>{let c="";for(let u=0;u<s;u++)if(c+=t[u],o[u]!==void 0){const f=n[u];f===XS?c+=Dl(o[u]):f===WS?c+=vn.transform(o[u]):c+=o[u]}return c}}const WA=i=>typeof i=="number"?0:vn.test(i)?vn.getAnimatableNone(i):i;function qA(i){const t=qS(i);return YS(i)(t.map(WA))}const Es={test:HA,parse:qS,createTransformer:YS,getAnimatableNone:qA};function Ad(i,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?i+(t-i)*6*n:n<1/2?t:n<2/3?i+(t-i)*(2/3-n)*6:i}function YA({hue:i,saturation:t,lightness:n,alpha:s}){i/=360,t/=100,n/=100;let o=0,c=0,u=0;if(!t)o=c=u=n;else{const f=n<.5?n*(1+t):n+t-n*t,p=2*n-f;o=Ad(p,f,i+1/3),c=Ad(p,f,i),u=Ad(p,f,i-1/3)}return{red:Math.round(o*255),green:Math.round(c*255),blue:Math.round(u*255),alpha:s}}function ju(i,t){return n=>n>0?t:i}const tn=(i,t,n)=>i+(t-i)*n,Rd=(i,t,n)=>{const s=i*i,o=n*(t*t-s)+s;return o<0?0:Math.sqrt(o)},jA=[gp,er,ao],ZA=i=>jA.find(t=>t.test(i));function gx(i){const t=ZA(i);if(!t)return!1;let n=t.parse(i);return t===ao&&(n=YA(n)),n}const vx=(i,t)=>{const n=gx(i),s=gx(t);if(!n||!s)return ju(i,t);const o={...n};return c=>(o.red=Rd(n.red,s.red,c),o.green=Rd(n.green,s.green,c),o.blue=Rd(n.blue,s.blue,c),o.alpha=tn(n.alpha,s.alpha,c),er.transform(o))},vp=new Set(["none","hidden"]);function KA(i,t){return vp.has(i)?n=>n<=0?i:t:n=>n>=1?t:i}function QA(i,t){return n=>tn(i,t,n)}function jm(i){return typeof i=="number"?QA:typeof i=="string"?Wm(i)?ju:vn.test(i)?vx:t1:Array.isArray(i)?jS:typeof i=="object"?vn.test(i)?vx:JA:ju}function jS(i,t){const n=[...i],s=n.length,o=i.map((c,u)=>jm(c)(c,t[u]));return c=>{for(let u=0;u<s;u++)n[u]=o[u](c);return n}}function JA(i,t){const n={...i,...t},s={};for(const o in n)i[o]!==void 0&&t[o]!==void 0&&(s[o]=jm(i[o])(i[o],t[o]));return o=>{for(const c in s)n[c]=s[c](o);return n}}function $A(i,t){const n=[],s={color:0,var:0,number:0};for(let o=0;o<t.values.length;o++){const c=t.types[o],u=i.indexes[c][s[c]],f=i.values[u]??0;n[o]=f,s[c]++}return n}const t1=(i,t)=>{const n=Es.createTransformer(t),s=Fl(i),o=Fl(t);return s.indexes.var.length===o.indexes.var.length&&s.indexes.color.length===o.indexes.color.length&&s.indexes.number.length>=o.indexes.number.length?vp.has(i)&&!o.values.length||vp.has(t)&&!s.values.length?KA(i,t):Xl(jS($A(s,o),o.values),n):ju(i,t)};function ZS(i,t,n){return typeof i=="number"&&typeof t=="number"&&typeof n=="number"?tn(i,t,n):jm(i)(i,t)}const e1=i=>{const t=({timestamp:n})=>i(n);return{start:(n=!0)=>Je.update(t,n),stop:()=>Ms(t),now:()=>On.isProcessing?On.timestamp:ni.now()}},KS=(i,t,n=10)=>{let s="";const o=Math.max(Math.round(t/n),2);for(let c=0;c<o;c++)s+=Math.round(i(c/(o-1))*1e4)/1e4+", ";return`linear(${s.substring(0,s.length-2)})`},Zu=2e4;function Zm(i){let t=0;const n=50;let s=i.next(t);for(;!s.done&&t<Zu;)t+=n,s=i.next(t);return t>=Zu?1/0:t}function n1(i,t=100,n){const s=n({...i,keyframes:[0,t]}),o=Math.min(Zm(s),Zu);return{type:"keyframes",ease:c=>s.next(o*c).value/t,duration:Ui(o)}}const i1=5;function QS(i,t,n){const s=Math.max(t-i1,0);return wS(n-i(s),t-s)}const rn={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1},Cd=.001;function a1({duration:i=rn.duration,bounce:t=rn.bounce,velocity:n=rn.velocity,mass:s=rn.mass}){let o,c,u=1-t;u=Oa(rn.minDamping,rn.maxDamping,u),i=Oa(rn.minDuration,rn.maxDuration,Ui(i)),u<1?(o=d=>{const g=d*u,v=g*i,_=g-n,y=_p(d,u),E=Math.exp(-v);return Cd-_/y*E},c=d=>{const v=d*u*i,_=v*n+n,y=Math.pow(u,2)*Math.pow(d,2)*i,E=Math.exp(-v),b=_p(Math.pow(d,2),u);return(-o(d)+Cd>0?-1:1)*((_-y)*E)/b}):(o=d=>{const g=Math.exp(-d*i),v=(d-n)*i+1;return-Cd+g*v},c=d=>{const g=Math.exp(-d*i),v=(n-d)*(i*i);return g*v});const f=5/i,p=r1(o,c,f);if(i=ea(i),isNaN(p))return{stiffness:rn.stiffness,damping:rn.damping,duration:i};{const d=Math.pow(p,2)*s;return{stiffness:d,damping:u*2*Math.sqrt(s*d),duration:i}}}const s1=12;function r1(i,t,n){let s=n;for(let o=1;o<s1;o++)s=s-i(s)/t(s);return s}function _p(i,t){return i*Math.sqrt(1-t*t)}const o1=["duration","bounce"],l1=["stiffness","damping","mass"];function _x(i,t){return t.some(n=>i[n]!==void 0)}function c1(i){let t={velocity:rn.velocity,stiffness:rn.stiffness,damping:rn.damping,mass:rn.mass,isResolvedFromDuration:!1,...i};if(!_x(i,l1)&&_x(i,o1))if(i.visualDuration){const n=i.visualDuration,s=2*Math.PI/(n*1.2),o=s*s,c=2*Oa(.05,1,1-(i.bounce||0))*Math.sqrt(o);t={...t,mass:rn.mass,stiffness:o,damping:c}}else{const n=a1(i);t={...t,...n,mass:rn.mass},t.isResolvedFromDuration=!0}return t}function Ku(i=rn.visualDuration,t=rn.bounce){const n=typeof i!="object"?{visualDuration:i,keyframes:[0,1],bounce:t}:i;let{restSpeed:s,restDelta:o}=n;const c=n.keyframes[0],u=n.keyframes[n.keyframes.length-1],f={done:!1,value:c},{stiffness:p,damping:d,mass:g,duration:v,velocity:_,isResolvedFromDuration:y}=c1({...n,velocity:-Ui(n.velocity||0)}),E=_||0,b=d/(2*Math.sqrt(p*g)),S=u-c,x=Ui(Math.sqrt(p/g)),D=Math.abs(S)<5;s||(s=D?rn.restSpeed.granular:rn.restSpeed.default),o||(o=D?rn.restDelta.granular:rn.restDelta.default);let w;if(b<1){const N=_p(x,b);w=B=>{const P=Math.exp(-b*x*B);return u-P*((E+b*x*S)/N*Math.sin(N*B)+S*Math.cos(N*B))}}else if(b===1)w=N=>u-Math.exp(-x*N)*(S+(E+x*S)*N);else{const N=x*Math.sqrt(b*b-1);w=B=>{const P=Math.exp(-b*x*B),k=Math.min(N*B,300);return u-P*((E+b*x*S)*Math.sinh(k)+N*S*Math.cosh(k))/N}}const L={calculatedDuration:y&&v||null,next:N=>{const B=w(N);if(y)f.done=N>=v;else{let P=N===0?E:0;b<1&&(P=N===0?ea(E):QS(w,N,B));const k=Math.abs(P)<=s,C=Math.abs(u-B)<=o;f.done=k&&C}return f.value=f.done?u:B,f},toString:()=>{const N=Math.min(Zm(L),Zu),B=KS(P=>L.next(N*P).value,N,30);return N+"ms "+B},toTransition:()=>{}};return L}Ku.applyToOptions=i=>{const t=n1(i,100,Ku);return i.ease=t.ease,i.duration=ea(t.duration),i.type="keyframes",i};function xp({keyframes:i,velocity:t=0,power:n=.8,timeConstant:s=325,bounceDamping:o=10,bounceStiffness:c=500,modifyTarget:u,min:f,max:p,restDelta:d=.5,restSpeed:g}){const v=i[0],_={done:!1,value:v},y=k=>f!==void 0&&k<f||p!==void 0&&k>p,E=k=>f===void 0?p:p===void 0||Math.abs(f-k)<Math.abs(p-k)?f:p;let b=n*t;const S=v+b,x=u===void 0?S:u(S);x!==S&&(b=x-v);const D=k=>-b*Math.exp(-k/s),w=k=>x+D(k),L=k=>{const C=D(k),U=w(k);_.done=Math.abs(C)<=d,_.value=_.done?x:U};let N,B;const P=k=>{y(_.value)&&(N=k,B=Ku({keyframes:[_.value,E(_.value)],velocity:QS(w,k,_.value),damping:o,stiffness:c,restDelta:d,restSpeed:g}))};return P(0),{calculatedDuration:null,next:k=>{let C=!1;return!B&&N===void 0&&(C=!0,L(k),P(k)),N!==void 0&&k>=N?B.next(k-N):(!C&&L(k),_)}}}function u1(i,t,n){const s=[],o=n||Fa.mix||ZS,c=i.length-1;for(let u=0;u<c;u++){let f=o(i[u],i[u+1]);if(t){const p=Array.isArray(t)?t[u]||Li:t;f=Xl(p,f)}s.push(f)}return s}function f1(i,t,{clamp:n=!0,ease:s,mixer:o}={}){const c=i.length;if(Vm(c===t.length),c===1)return()=>t[0];if(c===2&&t[0]===t[1])return()=>t[1];const u=i[0]===i[1];i[0]>i[c-1]&&(i=[...i].reverse(),t=[...t].reverse());const f=u1(t,s,o),p=f.length,d=g=>{if(u&&g<i[0])return t[0];let v=0;if(p>1)for(;v<i.length-2&&!(g<i[v+1]);v++);const _=Pl(i[v],i[v+1],g);return f[v](_)};return n?g=>d(Oa(i[0],i[c-1],g)):d}function h1(i,t){const n=i[i.length-1];for(let s=1;s<=t;s++){const o=Pl(0,t,s);i.push(tn(n,1,o))}}function d1(i){const t=[0];return h1(t,i.length-1),t}function p1(i,t){return i.map(n=>n*t)}function m1(i,t){return i.map(()=>t||IS).splice(0,i.length-1)}function Ul({duration:i=300,keyframes:t,times:n,ease:s="easeInOut"}){const o=AA(s)?s.map(dx):dx(s),c={done:!1,value:t[0]},u=p1(n&&n.length===t.length?n:d1(t),i),f=f1(u,t,{ease:Array.isArray(o)?o:m1(t,o)});return{calculatedDuration:i,next:p=>(c.value=f(p),c.done=p>=i,c)}}const g1=i=>i!==null;function Km(i,{repeat:t,repeatType:n="loop"},s,o=1){const c=i.filter(g1),f=o<0||t&&n!=="loop"&&t%2===1?0:c.length-1;return!f||s===void 0?c[f]:s}const v1={decay:xp,inertia:xp,tween:Ul,keyframes:Ul,spring:Ku};function JS(i){typeof i.type=="string"&&(i.type=v1[i.type])}class Qm{constructor(){this.updateFinished()}get finished(){return this._finished}updateFinished(){this._finished=new Promise(t=>{this.resolve=t})}notifyFinished(){this.resolve()}then(t,n){return this.finished.then(t,n)}}const _1=i=>i/100;class Jm extends Qm{constructor(t){super(),this.state="idle",this.startTime=null,this.isStopped=!1,this.currentTime=0,this.holdTime=null,this.playbackSpeed=1,this.stop=()=>{var s,o;const{motionValue:n}=this.options;n&&n.updatedAt!==ni.now()&&this.tick(ni.now()),this.isStopped=!0,this.state!=="idle"&&(this.teardown(),(o=(s=this.options).onStop)==null||o.call(s))},this.options=t,this.initAnimation(),this.play(),t.autoplay===!1&&this.pause()}initAnimation(){const{options:t}=this;JS(t);const{type:n=Ul,repeat:s=0,repeatDelay:o=0,repeatType:c,velocity:u=0}=t;let{keyframes:f}=t;const p=n||Ul;p!==Ul&&typeof f[0]!="number"&&(this.mixKeyframes=Xl(_1,ZS(f[0],f[1])),f=[0,100]);const d=p({...t,keyframes:f});c==="mirror"&&(this.mirroredGenerator=p({...t,keyframes:[...f].reverse(),velocity:-u})),d.calculatedDuration===null&&(d.calculatedDuration=Zm(d));const{calculatedDuration:g}=d;this.calculatedDuration=g,this.resolvedDuration=g+o,this.totalDuration=this.resolvedDuration*(s+1)-o,this.generator=d}updateTime(t){const n=Math.round(t-this.startTime)*this.playbackSpeed;this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=n}tick(t,n=!1){const{generator:s,totalDuration:o,mixKeyframes:c,mirroredGenerator:u,resolvedDuration:f,calculatedDuration:p}=this;if(this.startTime===null)return s.next(0);const{delay:d=0,keyframes:g,repeat:v,repeatType:_,repeatDelay:y,type:E,onUpdate:b,finalKeyframe:S}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,t):this.speed<0&&(this.startTime=Math.min(t-o/this.speed,this.startTime)),n?this.currentTime=t:this.updateTime(t);const x=this.currentTime-d*(this.playbackSpeed>=0?1:-1),D=this.playbackSpeed>=0?x<0:x>o;this.currentTime=Math.max(x,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=o);let w=this.currentTime,L=s;if(v){const k=Math.min(this.currentTime,o)/f;let C=Math.floor(k),U=k%1;!U&&k>=1&&(U=1),U===1&&C--,C=Math.min(C,v+1),!!(C%2)&&(_==="reverse"?(U=1-U,y&&(U-=y/f)):_==="mirror"&&(L=u)),w=Oa(0,1,U)*f}const N=D?{done:!1,value:g[0]}:L.next(w);c&&(N.value=c(N.value));let{done:B}=N;!D&&p!==null&&(B=this.playbackSpeed>=0?this.currentTime>=o:this.currentTime<=0);const P=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&B);return P&&E!==xp&&(N.value=Km(g,this.options,S,this.speed)),b&&b(N.value),P&&this.finish(),N}then(t,n){return this.finished.then(t,n)}get duration(){return Ui(this.calculatedDuration)}get iterationDuration(){const{delay:t=0}=this.options||{};return this.duration+Ui(t)}get time(){return Ui(this.currentTime)}set time(t){var n;t=ea(t),this.currentTime=t,this.startTime===null||this.holdTime!==null||this.playbackSpeed===0?this.holdTime=t:this.driver&&(this.startTime=this.driver.now()-t/this.playbackSpeed),(n=this.driver)==null||n.start(!1)}get speed(){return this.playbackSpeed}set speed(t){this.updateTime(ni.now());const n=this.playbackSpeed!==t;this.playbackSpeed=t,n&&(this.time=Ui(this.currentTime))}play(){var o,c;if(this.isStopped)return;const{driver:t=e1,startTime:n}=this.options;this.driver||(this.driver=t(u=>this.tick(u))),(c=(o=this.options).onPlay)==null||c.call(o);const s=this.driver.now();this.state==="finished"?(this.updateFinished(),this.startTime=s):this.holdTime!==null?this.startTime=s-this.holdTime:this.startTime||(this.startTime=n??s),this.state==="finished"&&this.speed<0&&(this.startTime+=this.calculatedDuration),this.holdTime=null,this.state="running",this.driver.start()}pause(){this.state="paused",this.updateTime(ni.now()),this.holdTime=this.currentTime}complete(){this.state!=="running"&&this.play(),this.state="finished",this.holdTime=null}finish(){var t,n;this.notifyFinished(),this.teardown(),this.state="finished",(n=(t=this.options).onComplete)==null||n.call(t)}cancel(){var t,n;this.holdTime=null,this.startTime=0,this.tick(0),this.teardown(),(n=(t=this.options).onCancel)==null||n.call(t)}teardown(){this.state="idle",this.stopDriver(),this.startTime=this.holdTime=null}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(t){return this.startTime=0,this.tick(t,!0)}attachTimeline(t){var n;return this.options.allowFlatten&&(this.options.type="keyframes",this.options.ease="linear",this.initAnimation()),(n=this.driver)==null||n.stop(),t.observe(this)}}function x1(i){for(let t=1;t<i.length;t++)i[t]??(i[t]=i[t-1])}const nr=i=>i*180/Math.PI,yp=i=>{const t=nr(Math.atan2(i[1],i[0]));return Sp(t)},y1={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:i=>(Math.abs(i[0])+Math.abs(i[3]))/2,rotate:yp,rotateZ:yp,skewX:i=>nr(Math.atan(i[1])),skewY:i=>nr(Math.atan(i[2])),skew:i=>(Math.abs(i[1])+Math.abs(i[2]))/2},Sp=i=>(i=i%360,i<0&&(i+=360),i),xx=yp,yx=i=>Math.sqrt(i[0]*i[0]+i[1]*i[1]),Sx=i=>Math.sqrt(i[4]*i[4]+i[5]*i[5]),S1={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:yx,scaleY:Sx,scale:i=>(yx(i)+Sx(i))/2,rotateX:i=>Sp(nr(Math.atan2(i[6],i[5]))),rotateY:i=>Sp(nr(Math.atan2(-i[2],i[0]))),rotateZ:xx,rotate:xx,skewX:i=>nr(Math.atan(i[4])),skewY:i=>nr(Math.atan(i[1])),skew:i=>(Math.abs(i[1])+Math.abs(i[4]))/2};function Mp(i){return i.includes("scale")?1:0}function Ep(i,t){if(!i||i==="none")return Mp(t);const n=i.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);let s,o;if(n)s=S1,o=n;else{const f=i.match(/^matrix\(([-\d.e\s,]+)\)$/u);s=y1,o=f}if(!o)return Mp(t);const c=s[t],u=o[1].split(",").map(E1);return typeof c=="function"?c(u):u[c]}const M1=(i,t)=>{const{transform:n="none"}=getComputedStyle(i);return Ep(n,t)};function E1(i){return parseFloat(i.trim())}const So=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],Mo=new Set(So),Mx=i=>i===yo||i===ie,T1=new Set(["x","y","z"]),b1=So.filter(i=>!T1.has(i));function A1(i){const t=[];return b1.forEach(n=>{const s=i.getValue(n);s!==void 0&&(t.push([n,s.get()]),s.set(n.startsWith("scale")?1:0))}),t}const sr={width:({x:i},{paddingLeft:t="0",paddingRight:n="0"})=>i.max-i.min-parseFloat(t)-parseFloat(n),height:({y:i},{paddingTop:t="0",paddingBottom:n="0"})=>i.max-i.min-parseFloat(t)-parseFloat(n),top:(i,{top:t})=>parseFloat(t),left:(i,{left:t})=>parseFloat(t),bottom:({y:i},{top:t})=>parseFloat(t)+(i.max-i.min),right:({x:i},{left:t})=>parseFloat(t)+(i.max-i.min),x:(i,{transform:t})=>Ep(t,"x"),y:(i,{transform:t})=>Ep(t,"y")};sr.translateX=sr.x;sr.translateY=sr.y;const rr=new Set;let Tp=!1,bp=!1,Ap=!1;function $S(){if(bp){const i=Array.from(rr).filter(s=>s.needsMeasurement),t=new Set(i.map(s=>s.element)),n=new Map;t.forEach(s=>{const o=A1(s);o.length&&(n.set(s,o),s.render())}),i.forEach(s=>s.measureInitialState()),t.forEach(s=>{s.render();const o=n.get(s);o&&o.forEach(([c,u])=>{var f;(f=s.getValue(c))==null||f.set(u)})}),i.forEach(s=>s.measureEndState()),i.forEach(s=>{s.suspendedScrollY!==void 0&&window.scrollTo(0,s.suspendedScrollY)})}bp=!1,Tp=!1,rr.forEach(i=>i.complete(Ap)),rr.clear()}function tM(){rr.forEach(i=>{i.readKeyframes(),i.needsMeasurement&&(bp=!0)})}function R1(){Ap=!0,tM(),$S(),Ap=!1}class $m{constructor(t,n,s,o,c,u=!1){this.state="pending",this.isAsync=!1,this.needsMeasurement=!1,this.unresolvedKeyframes=[...t],this.onComplete=n,this.name=s,this.motionValue=o,this.element=c,this.isAsync=u}scheduleResolve(){this.state="scheduled",this.isAsync?(rr.add(this),Tp||(Tp=!0,Je.read(tM),Je.resolveKeyframes($S))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:t,name:n,element:s,motionValue:o}=this;if(t[0]===null){const c=o==null?void 0:o.get(),u=t[t.length-1];if(c!==void 0)t[0]=c;else if(s&&n){const f=s.readValue(n,u);f!=null&&(t[0]=f)}t[0]===void 0&&(t[0]=u),o&&c===void 0&&o.set(t[0])}x1(t)}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(t=!1){this.state="complete",this.onComplete(this.unresolvedKeyframes,this.finalKeyframe,t),rr.delete(this)}cancel(){this.state==="scheduled"&&(rr.delete(this),this.state="pending")}resume(){this.state==="pending"&&this.scheduleResolve()}}const C1=i=>i.startsWith("--");function w1(i,t,n){C1(t)?i.style.setProperty(t,n):i.style[t]=n}const D1=Hm(()=>window.ScrollTimeline!==void 0),U1={};function L1(i,t){const n=Hm(i);return()=>U1[t]??n()}const eM=L1(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),Rl=([i,t,n,s])=>`cubic-bezier(${i}, ${t}, ${n}, ${s})`,Ex={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:Rl([0,.65,.55,1]),circOut:Rl([.55,0,1,.45]),backIn:Rl([.31,.01,.66,-.59]),backOut:Rl([.33,1.53,.69,.99])};function nM(i,t){if(i)return typeof i=="function"?eM()?KS(i,t):"ease-out":zS(i)?Rl(i):Array.isArray(i)?i.map(n=>nM(n,t)||Ex.easeOut):Ex[i]}function N1(i,t,n,{delay:s=0,duration:o=300,repeat:c=0,repeatType:u="loop",ease:f="easeOut",times:p}={},d=void 0){const g={[t]:n};p&&(g.offset=p);const v=nM(f,o);Array.isArray(v)&&(g.easing=v);const _={delay:s,duration:o,easing:Array.isArray(v)?"linear":v,fill:"both",iterations:c+1,direction:u==="reverse"?"alternate":"normal"};return d&&(_.pseudoElement=d),i.animate(g,_)}function iM(i){return typeof i=="function"&&"applyToOptions"in i}function P1({type:i,...t}){return iM(i)&&eM()?i.applyToOptions(t):(t.duration??(t.duration=300),t.ease??(t.ease="easeOut"),t)}class O1 extends Qm{constructor(t){if(super(),this.finishedTime=null,this.isStopped=!1,!t)return;const{element:n,name:s,keyframes:o,pseudoElement:c,allowFlatten:u=!1,finalKeyframe:f,onComplete:p}=t;this.isPseudoElement=!!c,this.allowFlatten=u,this.options=t,Vm(typeof t.type!="string");const d=P1(t);this.animation=N1(n,s,o,d,c),d.autoplay===!1&&this.animation.pause(),this.animation.onfinish=()=>{if(this.finishedTime=this.time,!c){const g=Km(o,this.options,f,this.speed);this.updateMotionValue?this.updateMotionValue(g):w1(n,s,g),this.animation.cancel()}p==null||p(),this.notifyFinished()}}play(){this.isStopped||(this.animation.play(),this.state==="finished"&&this.updateFinished())}pause(){this.animation.pause()}complete(){var t,n;(n=(t=this.animation).finish)==null||n.call(t)}cancel(){try{this.animation.cancel()}catch{}}stop(){if(this.isStopped)return;this.isStopped=!0;const{state:t}=this;t==="idle"||t==="finished"||(this.updateMotionValue?this.updateMotionValue():this.commitStyles(),this.isPseudoElement||this.cancel())}commitStyles(){var t,n;this.isPseudoElement||(n=(t=this.animation).commitStyles)==null||n.call(t)}get duration(){var n,s;const t=((s=(n=this.animation.effect)==null?void 0:n.getComputedTiming)==null?void 0:s.call(n).duration)||0;return Ui(Number(t))}get iterationDuration(){const{delay:t=0}=this.options||{};return this.duration+Ui(t)}get time(){return Ui(Number(this.animation.currentTime)||0)}set time(t){this.finishedTime=null,this.animation.currentTime=ea(t)}get speed(){return this.animation.playbackRate}set speed(t){t<0&&(this.finishedTime=null),this.animation.playbackRate=t}get state(){return this.finishedTime!==null?"finished":this.animation.playState}get startTime(){return Number(this.animation.startTime)}set startTime(t){this.animation.startTime=t}attachTimeline({timeline:t,observe:n}){var s;return this.allowFlatten&&((s=this.animation.effect)==null||s.updateTiming({easing:"linear"})),this.animation.onfinish=null,t&&D1()?(this.animation.timeline=t,Li):n(this)}}const aM={anticipate:OS,backInOut:PS,circInOut:BS};function F1(i){return i in aM}function B1(i){typeof i.ease=="string"&&F1(i.ease)&&(i.ease=aM[i.ease])}const Tx=10;class I1 extends O1{constructor(t){B1(t),JS(t),super(t),t.startTime&&(this.startTime=t.startTime),this.options=t}updateMotionValue(t){const{motionValue:n,onUpdate:s,onComplete:o,element:c,...u}=this.options;if(!n)return;if(t!==void 0){n.set(t);return}const f=new Jm({...u,autoplay:!1}),p=ea(this.finishedTime??this.time);n.setWithVelocity(f.sample(p-Tx).value,f.sample(p).value,Tx),f.stop()}}const bx=(i,t)=>t==="zIndex"?!1:!!(typeof i=="number"||Array.isArray(i)||typeof i=="string"&&(Es.test(i)||i==="0")&&!i.startsWith("url("));function z1(i){const t=i[0];if(i.length===1)return!0;for(let n=0;n<i.length;n++)if(i[n]!==t)return!0}function V1(i,t,n,s){const o=i[0];if(o===null)return!1;if(t==="display"||t==="visibility")return!0;const c=i[i.length-1],u=bx(o,t),f=bx(c,t);return!u||!f?!1:z1(i)||(n==="spring"||iM(n))&&s}function Rp(i){i.duration=0,i.type="keyframes"}const H1=new Set(["opacity","clipPath","filter","transform"]),G1=Hm(()=>Object.hasOwnProperty.call(Element.prototype,"animate"));function k1(i){var g;const{motionValue:t,name:n,repeatDelay:s,repeatType:o,damping:c,type:u}=i;if(!(((g=t==null?void 0:t.owner)==null?void 0:g.current)instanceof HTMLElement))return!1;const{onUpdate:p,transformTemplate:d}=t.owner.getProps();return G1()&&n&&H1.has(n)&&(n!=="transform"||!d)&&!p&&!s&&o!=="mirror"&&c!==0&&u!=="inertia"}const X1=40;class W1 extends Qm{constructor({autoplay:t=!0,delay:n=0,type:s="keyframes",repeat:o=0,repeatDelay:c=0,repeatType:u="loop",keyframes:f,name:p,motionValue:d,element:g,...v}){var E;super(),this.stop=()=>{var b,S;this._animation&&(this._animation.stop(),(b=this.stopTimeline)==null||b.call(this)),(S=this.keyframeResolver)==null||S.cancel()},this.createdAt=ni.now();const _={autoplay:t,delay:n,type:s,repeat:o,repeatDelay:c,repeatType:u,name:p,motionValue:d,element:g,...v},y=(g==null?void 0:g.KeyframeResolver)||$m;this.keyframeResolver=new y(f,(b,S,x)=>this.onKeyframesResolved(b,S,_,!x),p,d,g),(E=this.keyframeResolver)==null||E.scheduleResolve()}onKeyframesResolved(t,n,s,o){this.keyframeResolver=void 0;const{name:c,type:u,velocity:f,delay:p,isHandoff:d,onUpdate:g}=s;this.resolvedAt=ni.now(),V1(t,c,u,f)||((Fa.instantAnimations||!p)&&(g==null||g(Km(t,s,n))),t[0]=t[t.length-1],Rp(s),s.repeat=0);const _={startTime:o?this.resolvedAt?this.resolvedAt-this.createdAt>X1?this.resolvedAt:this.createdAt:this.createdAt:void 0,finalKeyframe:n,...s,keyframes:t},y=!d&&k1(_)?new I1({..._,element:_.motionValue.owner.current}):new Jm(_);y.finished.then(()=>this.notifyFinished()).catch(Li),this.pendingTimeline&&(this.stopTimeline=y.attachTimeline(this.pendingTimeline),this.pendingTimeline=void 0),this._animation=y}get finished(){return this._animation?this.animation.finished:this._finished}then(t,n){return this.finished.finally(t).then(()=>{})}get animation(){var t;return this._animation||((t=this.keyframeResolver)==null||t.resume(),R1()),this._animation}get duration(){return this.animation.duration}get iterationDuration(){return this.animation.iterationDuration}get time(){return this.animation.time}set time(t){this.animation.time=t}get speed(){return this.animation.speed}get state(){return this.animation.state}set speed(t){this.animation.speed=t}get startTime(){return this.animation.startTime}attachTimeline(t){return this._animation?this.stopTimeline=this.animation.attachTimeline(t):this.pendingTimeline=t,()=>this.stop()}play(){this.animation.play()}pause(){this.animation.pause()}complete(){this.animation.complete()}cancel(){var t;this._animation&&this.animation.cancel(),(t=this.keyframeResolver)==null||t.cancel()}}const q1=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function Y1(i){const t=q1.exec(i);if(!t)return[,];const[,n,s,o]=t;return[`--${n??s}`,o]}function sM(i,t,n=1){const[s,o]=Y1(i);if(!s)return;const c=window.getComputedStyle(t).getPropertyValue(s);if(c){const u=c.trim();return AS(u)?parseFloat(u):u}return Wm(o)?sM(o,t,n+1):o}function tg(i,t){return(i==null?void 0:i[t])??(i==null?void 0:i.default)??i}const rM=new Set(["width","height","top","left","right","bottom",...So]),j1={test:i=>i==="auto",parse:i=>i},oM=i=>t=>t.test(i),lM=[yo,ie,na,xs,zA,IA,j1],Ax=i=>lM.find(oM(i));function Z1(i){return typeof i=="number"?i===0:i!==null?i==="none"||i==="0"||CS(i):!0}const K1=new Set(["brightness","contrast","saturate","opacity"]);function Q1(i){const[t,n]=i.slice(0,-1).split("(");if(t==="drop-shadow")return i;const[s]=n.match(qm)||[];if(!s)return i;const o=n.replace(s,"");let c=K1.has(t)?1:0;return s!==n&&(c*=100),t+"("+c+o+")"}const J1=/\b([a-z-]*)\(.*?\)/gu,Cp={...Es,getAnimatableNone:i=>{const t=i.match(J1);return t?t.map(Q1).join(" "):i}},Rx={...yo,transform:Math.round},$1={rotate:xs,rotateX:xs,rotateY:xs,rotateZ:xs,scale:fu,scaleX:fu,scaleY:fu,scaleZ:fu,skew:xs,skewX:xs,skewY:xs,distance:ie,translateX:ie,translateY:ie,translateZ:ie,x:ie,y:ie,z:ie,perspective:ie,transformPerspective:ie,opacity:Ol,originX:px,originY:px,originZ:ie},eg={borderWidth:ie,borderTopWidth:ie,borderRightWidth:ie,borderBottomWidth:ie,borderLeftWidth:ie,borderRadius:ie,radius:ie,borderTopLeftRadius:ie,borderTopRightRadius:ie,borderBottomRightRadius:ie,borderBottomLeftRadius:ie,width:ie,maxWidth:ie,height:ie,maxHeight:ie,top:ie,right:ie,bottom:ie,left:ie,padding:ie,paddingTop:ie,paddingRight:ie,paddingBottom:ie,paddingLeft:ie,margin:ie,marginTop:ie,marginRight:ie,marginBottom:ie,marginLeft:ie,backgroundPositionX:ie,backgroundPositionY:ie,...$1,zIndex:Rx,fillOpacity:Ol,strokeOpacity:Ol,numOctaves:Rx},tR={...eg,color:vn,backgroundColor:vn,outlineColor:vn,fill:vn,stroke:vn,borderColor:vn,borderTopColor:vn,borderRightColor:vn,borderBottomColor:vn,borderLeftColor:vn,filter:Cp,WebkitFilter:Cp},cM=i=>tR[i];function uM(i,t){let n=cM(i);return n!==Cp&&(n=Es),n.getAnimatableNone?n.getAnimatableNone(t):void 0}const eR=new Set(["auto","none","0"]);function nR(i,t,n){let s=0,o;for(;s<i.length&&!o;){const c=i[s];typeof c=="string"&&!eR.has(c)&&Fl(c).values.length&&(o=i[s]),s++}if(o&&n)for(const c of t)i[c]=uM(n,o)}class iR extends $m{constructor(t,n,s,o,c){super(t,n,s,o,c,!0)}readKeyframes(){const{unresolvedKeyframes:t,element:n,name:s}=this;if(!n||!n.current)return;super.readKeyframes();for(let p=0;p<t.length;p++){let d=t[p];if(typeof d=="string"&&(d=d.trim(),Wm(d))){const g=sM(d,n.current);g!==void 0&&(t[p]=g),p===t.length-1&&(this.finalKeyframe=d)}}if(this.resolveNoneKeyframes(),!rM.has(s)||t.length!==2)return;const[o,c]=t,u=Ax(o),f=Ax(c);if(u!==f)if(Mx(u)&&Mx(f))for(let p=0;p<t.length;p++){const d=t[p];typeof d=="string"&&(t[p]=parseFloat(d))}else sr[s]&&(this.needsMeasurement=!0)}resolveNoneKeyframes(){const{unresolvedKeyframes:t,name:n}=this,s=[];for(let o=0;o<t.length;o++)(t[o]===null||Z1(t[o]))&&s.push(o);s.length&&nR(t,s,n)}measureInitialState(){const{element:t,unresolvedKeyframes:n,name:s}=this;if(!t||!t.current)return;s==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=sr[s](t.measureViewportBox(),window.getComputedStyle(t.current)),n[0]=this.measuredOrigin;const o=n[n.length-1];o!==void 0&&t.getValue(s,o).jump(o,!1)}measureEndState(){var f;const{element:t,name:n,unresolvedKeyframes:s}=this;if(!t||!t.current)return;const o=t.getValue(n);o&&o.jump(this.measuredOrigin,!1);const c=s.length-1,u=s[c];s[c]=sr[n](t.measureViewportBox(),window.getComputedStyle(t.current)),u!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=u),(f=this.removedTransforms)!=null&&f.length&&this.removedTransforms.forEach(([p,d])=>{t.getValue(p).set(d)}),this.resolveNoneKeyframes()}}function aR(i,t,n){if(i instanceof EventTarget)return[i];if(typeof i=="string"){let s=document;const o=(n==null?void 0:n[i])??s.querySelectorAll(i);return o?Array.from(o):[]}return Array.from(i)}const fM=(i,t)=>t&&typeof i=="number"?t.transform(i):i;function hM(i){return RS(i)&&"offsetHeight"in i}const Cx=30,sR=i=>!isNaN(parseFloat(i));class rR{constructor(t,n={}){this.canTrackVelocity=null,this.events={},this.updateAndNotify=s=>{var c;const o=ni.now();if(this.updatedAt!==o&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(s),this.current!==this.prev&&((c=this.events.change)==null||c.notify(this.current),this.dependents))for(const u of this.dependents)u.dirty()},this.hasAnimated=!1,this.setCurrent(t),this.owner=n.owner}setCurrent(t){this.current=t,this.updatedAt=ni.now(),this.canTrackVelocity===null&&t!==void 0&&(this.canTrackVelocity=sR(this.current))}setPrevFrameValue(t=this.current){this.prevFrameValue=t,this.prevUpdatedAt=this.updatedAt}onChange(t){return this.on("change",t)}on(t,n){this.events[t]||(this.events[t]=new Gm);const s=this.events[t].add(n);return t==="change"?()=>{s(),Je.read(()=>{this.events.change.getSize()||this.stop()})}:s}clearListeners(){for(const t in this.events)this.events[t].clear()}attach(t,n){this.passiveEffect=t,this.stopPassiveEffect=n}set(t){this.passiveEffect?this.passiveEffect(t,this.updateAndNotify):this.updateAndNotify(t)}setWithVelocity(t,n,s){this.set(n),this.prev=void 0,this.prevFrameValue=t,this.prevUpdatedAt=this.updatedAt-s}jump(t,n=!0){this.updateAndNotify(t),this.prev=t,this.prevUpdatedAt=this.prevFrameValue=void 0,n&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}dirty(){var t;(t=this.events.change)==null||t.notify(this.current)}addDependent(t){this.dependents||(this.dependents=new Set),this.dependents.add(t)}removeDependent(t){this.dependents&&this.dependents.delete(t)}get(){return this.current}getPrevious(){return this.prev}getVelocity(){const t=ni.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||t-this.updatedAt>Cx)return 0;const n=Math.min(this.updatedAt-this.prevUpdatedAt,Cx);return wS(parseFloat(this.current)-parseFloat(this.prevFrameValue),n)}start(t){return this.stop(),new Promise(n=>{this.hasAnimated=!0,this.animation=t(n),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){var t,n;(t=this.dependents)==null||t.clear(),(n=this.events.destroy)==null||n.notify(),this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function ho(i,t){return new rR(i,t)}const{schedule:ng}=VS(queueMicrotask,!1),ki={x:!1,y:!1};function dM(){return ki.x||ki.y}function oR(i){return i==="x"||i==="y"?ki[i]?null:(ki[i]=!0,()=>{ki[i]=!1}):ki.x||ki.y?null:(ki.x=ki.y=!0,()=>{ki.x=ki.y=!1})}function pM(i,t){const n=aR(i),s=new AbortController,o={passive:!0,...t,signal:s.signal};return[n,o,()=>s.abort()]}function wx(i){return!(i.pointerType==="touch"||dM())}function lR(i,t,n={}){const[s,o,c]=pM(i,n),u=f=>{if(!wx(f))return;const{target:p}=f,d=t(p,f);if(typeof d!="function"||!p)return;const g=v=>{wx(v)&&(d(v),p.removeEventListener("pointerleave",g))};p.addEventListener("pointerleave",g,o)};return s.forEach(f=>{f.addEventListener("pointerenter",u,o)}),c}const mM=(i,t)=>t?i===t?!0:mM(i,t.parentElement):!1,ig=i=>i.pointerType==="mouse"?typeof i.button!="number"||i.button<=0:i.isPrimary!==!1,cR=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function uR(i){return cR.has(i.tagName)||i.tabIndex!==-1}const Iu=new WeakSet;function Dx(i){return t=>{t.key==="Enter"&&i(t)}}function wd(i,t){i.dispatchEvent(new PointerEvent("pointer"+t,{isPrimary:!0,bubbles:!0}))}const fR=(i,t)=>{const n=i.currentTarget;if(!n)return;const s=Dx(()=>{if(Iu.has(n))return;wd(n,"down");const o=Dx(()=>{wd(n,"up")}),c=()=>wd(n,"cancel");n.addEventListener("keyup",o,t),n.addEventListener("blur",c,t)});n.addEventListener("keydown",s,t),n.addEventListener("blur",()=>n.removeEventListener("keydown",s),t)};function Ux(i){return ig(i)&&!dM()}function hR(i,t,n={}){const[s,o,c]=pM(i,n),u=f=>{const p=f.currentTarget;if(!Ux(f))return;Iu.add(p);const d=t(p,f),g=(y,E)=>{window.removeEventListener("pointerup",v),window.removeEventListener("pointercancel",_),Iu.has(p)&&Iu.delete(p),Ux(y)&&typeof d=="function"&&d(y,{success:E})},v=y=>{g(y,p===window||p===document||n.useGlobalTarget||mM(p,y.target))},_=y=>{g(y,!1)};window.addEventListener("pointerup",v,o),window.addEventListener("pointercancel",_,o)};return s.forEach(f=>{(n.useGlobalTarget?window:f).addEventListener("pointerdown",u,o),hM(f)&&(f.addEventListener("focus",d=>fR(d,o)),!uR(f)&&!f.hasAttribute("tabindex")&&(f.tabIndex=0))}),c}function gM(i){return RS(i)&&"ownerSVGElement"in i}function dR(i){return gM(i)&&i.tagName==="svg"}const Hn=i=>!!(i&&i.getVelocity),pR=[...lM,vn,Es],mR=i=>pR.find(oM(i)),ag=Et.createContext({transformPagePoint:i=>i,isStatic:!1,reducedMotion:"never"});function Lx(i,t){if(typeof i=="function")return i(t);i!=null&&(i.current=t)}function gR(...i){return t=>{let n=!1;const s=i.map(o=>{const c=Lx(o,t);return!n&&typeof c=="function"&&(n=!0),c});if(n)return()=>{for(let o=0;o<s.length;o++){const c=s[o];typeof c=="function"?c():Lx(i[o],null)}}}}function vR(...i){return Et.useCallback(gR(...i),i)}class _R extends Et.Component{getSnapshotBeforeUpdate(t){const n=this.props.childRef.current;if(n&&t.isPresent&&!this.props.isPresent){const s=n.offsetParent,o=hM(s)&&s.offsetWidth||0,c=this.props.sizeRef.current;c.height=n.offsetHeight||0,c.width=n.offsetWidth||0,c.top=n.offsetTop,c.left=n.offsetLeft,c.right=o-c.width-c.left}return null}componentDidUpdate(){}render(){return this.props.children}}function xR({children:i,isPresent:t,anchorX:n,root:s}){const o=Et.useId(),c=Et.useRef(null),u=Et.useRef({width:0,height:0,top:0,left:0,right:0}),{nonce:f}=Et.useContext(ag),p=vR(c,i==null?void 0:i.ref);return Et.useInsertionEffect(()=>{const{width:d,height:g,top:v,left:_,right:y}=u.current;if(t||!c.current||!d||!g)return;const E=n==="left"?`left: ${_}`:`right: ${y}`;c.current.dataset.motionPopId=o;const b=document.createElement("style");f&&(b.nonce=f);const S=s??document.head;return S.appendChild(b),b.sheet&&b.sheet.insertRule(`
          [data-motion-pop-id="${o}"] {
            position: absolute !important;
            width: ${d}px !important;
            height: ${g}px !important;
            ${E}px !important;
            top: ${v}px !important;
          }
        `),()=>{S.contains(b)&&S.removeChild(b)}},[t]),zt.jsx(_R,{isPresent:t,childRef:c,sizeRef:u,children:Et.cloneElement(i,{ref:p})})}const yR=({children:i,initial:t,isPresent:n,onExitComplete:s,custom:o,presenceAffectsLayout:c,mode:u,anchorX:f,root:p})=>{const d=Fm(SR),g=Et.useId();let v=!0,_=Et.useMemo(()=>(v=!1,{id:g,initial:t,isPresent:n,custom:o,onExitComplete:y=>{d.set(y,!0);for(const E of d.values())if(!E)return;s&&s()},register:y=>(d.set(y,!1),()=>d.delete(y))}),[n,d,s]);return c&&v&&(_={..._}),Et.useMemo(()=>{d.forEach((y,E)=>d.set(E,!1))},[n]),Et.useEffect(()=>{!n&&!d.size&&s&&s()},[n]),u==="popLayout"&&(i=zt.jsx(xR,{isPresent:n,anchorX:f,root:p,children:i})),zt.jsx(rf.Provider,{value:_,children:i})};function SR(){return new Map}function vM(i=!0){const t=Et.useContext(rf);if(t===null)return[!0,null];const{isPresent:n,onExitComplete:s,register:o}=t,c=Et.useId();Et.useEffect(()=>{if(i)return o(c)},[i]);const u=Et.useCallback(()=>i&&s&&s(c),[c,s,i]);return!n&&s?[!1,u]:[!0]}const hu=i=>i.key||"";function Nx(i){const t=[];return Et.Children.forEach(i,n=>{Et.isValidElement(n)&&t.push(n)}),t}const MR=({children:i,custom:t,initial:n=!0,onExitComplete:s,presenceAffectsLayout:o=!0,mode:c="sync",propagate:u=!1,anchorX:f="left",root:p})=>{const[d,g]=vM(u),v=Et.useMemo(()=>Nx(i),[i]),_=u&&!d?[]:v.map(hu),y=Et.useRef(!0),E=Et.useRef(v),b=Fm(()=>new Map),[S,x]=Et.useState(v),[D,w]=Et.useState(v);bS(()=>{y.current=!1,E.current=v;for(let B=0;B<D.length;B++){const P=hu(D[B]);_.includes(P)?b.delete(P):b.get(P)!==!0&&b.set(P,!1)}},[D,_.length,_.join("-")]);const L=[];if(v!==S){let B=[...v];for(let P=0;P<D.length;P++){const k=D[P],C=hu(k);_.includes(C)||(B.splice(P,0,k),L.push(k))}return c==="wait"&&L.length&&(B=L),w(Nx(B)),x(v),null}const{forceRender:N}=Et.useContext(Om);return zt.jsx(zt.Fragment,{children:D.map(B=>{const P=hu(B),k=u&&!d?!1:v===D||_.includes(P),C=()=>{if(b.has(P))b.set(P,!0);else return;let U=!0;b.forEach(H=>{H||(U=!1)}),U&&(N==null||N(),w(E.current),u&&(g==null||g()),s&&s())};return zt.jsx(yR,{isPresent:k,initial:!y.current||n?void 0:!1,custom:t,presenceAffectsLayout:o,mode:c,root:p,onExitComplete:k?void 0:C,anchorX:f,children:B},P)})})},_M=Et.createContext({strict:!1}),Px={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},po={};for(const i in Px)po[i]={isEnabled:t=>Px[i].some(n=>!!t[n])};function ER(i){for(const t in i)po[t]={...po[t],...i[t]}}const TR=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function Qu(i){return i.startsWith("while")||i.startsWith("drag")&&i!=="draggable"||i.startsWith("layout")||i.startsWith("onTap")||i.startsWith("onPan")||i.startsWith("onLayout")||TR.has(i)}let xM=i=>!Qu(i);function bR(i){typeof i=="function"&&(xM=t=>t.startsWith("on")?!Qu(t):i(t))}try{bR(require("@emotion/is-prop-valid").default)}catch{}function AR(i,t,n){const s={};for(const o in i)o==="values"&&typeof i.values=="object"||(xM(o)||n===!0&&Qu(o)||!t&&!Qu(o)||i.draggable&&o.startsWith("onDrag"))&&(s[o]=i[o]);return s}const of=Et.createContext({});function lf(i){return i!==null&&typeof i=="object"&&typeof i.start=="function"}function Bl(i){return typeof i=="string"||Array.isArray(i)}const sg=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],rg=["initial",...sg];function cf(i){return lf(i.animate)||rg.some(t=>Bl(i[t]))}function yM(i){return!!(cf(i)||i.variants)}function RR(i,t){if(cf(i)){const{initial:n,animate:s}=i;return{initial:n===!1||Bl(n)?n:void 0,animate:Bl(s)?s:void 0}}return i.inherit!==!1?t:{}}function CR(i){const{initial:t,animate:n}=RR(i,Et.useContext(of));return Et.useMemo(()=>({initial:t,animate:n}),[Ox(t),Ox(n)])}function Ox(i){return Array.isArray(i)?i.join(" "):i}function Fx(i,t){return t.max===t.min?0:i/(t.max-t.min)*100}const xl={correct:(i,t)=>{if(!t.target)return i;if(typeof i=="string")if(ie.test(i))i=parseFloat(i);else return i;const n=Fx(i,t.target.x),s=Fx(i,t.target.y);return`${n}% ${s}%`}},wR={correct:(i,{treeScale:t,projectionDelta:n})=>{const s=i,o=Es.parse(i);if(o.length>5)return s;const c=Es.createTransformer(i),u=typeof o[0]!="number"?1:0,f=n.x.scale*t.x,p=n.y.scale*t.y;o[0+u]/=f,o[1+u]/=p;const d=tn(f,p,.5);return typeof o[2+u]=="number"&&(o[2+u]/=d),typeof o[3+u]=="number"&&(o[3+u]/=d),c(o)}},wp={borderRadius:{...xl,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:xl,borderTopRightRadius:xl,borderBottomLeftRadius:xl,borderBottomRightRadius:xl,boxShadow:wR};function SM(i,{layout:t,layoutId:n}){return Mo.has(i)||i.startsWith("origin")||(t||n!==void 0)&&(!!wp[i]||i==="opacity")}const DR={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},UR=So.length;function LR(i,t,n){let s="",o=!0;for(let c=0;c<UR;c++){const u=So[c],f=i[u];if(f===void 0)continue;let p=!0;if(typeof f=="number"?p=f===(u.startsWith("scale")?1:0):p=parseFloat(f)===0,!p||n){const d=fM(f,eg[u]);if(!p){o=!1;const g=DR[u]||u;s+=`${g}(${d}) `}n&&(t[u]=d)}}return s=s.trim(),n?s=n(t,o?"":s):o&&(s="none"),s}function og(i,t,n){const{style:s,vars:o,transformOrigin:c}=i;let u=!1,f=!1;for(const p in t){const d=t[p];if(Mo.has(p)){u=!0;continue}else if(GS(p)){o[p]=d;continue}else{const g=fM(d,eg[p]);p.startsWith("origin")?(f=!0,c[p]=g):s[p]=g}}if(t.transform||(u||n?s.transform=LR(t,i.transform,n):s.transform&&(s.transform="none")),f){const{originX:p="50%",originY:d="50%",originZ:g=0}=c;s.transformOrigin=`${p} ${d} ${g}`}}const lg=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function MM(i,t,n){for(const s in t)!Hn(t[s])&&!SM(s,n)&&(i[s]=t[s])}function NR({transformTemplate:i},t){return Et.useMemo(()=>{const n=lg();return og(n,t,i),Object.assign({},n.vars,n.style)},[t])}function PR(i,t){const n=i.style||{},s={};return MM(s,n,i),Object.assign(s,NR(i,t)),s}function OR(i,t){const n={},s=PR(i,t);return i.drag&&i.dragListener!==!1&&(n.draggable=!1,s.userSelect=s.WebkitUserSelect=s.WebkitTouchCallout="none",s.touchAction=i.drag===!0?"none":`pan-${i.drag==="x"?"y":"x"}`),i.tabIndex===void 0&&(i.onTap||i.onTapStart||i.whileTap)&&(n.tabIndex=0),n.style=s,n}const FR={offset:"stroke-dashoffset",array:"stroke-dasharray"},BR={offset:"strokeDashoffset",array:"strokeDasharray"};function IR(i,t,n=1,s=0,o=!0){i.pathLength=1;const c=o?FR:BR;i[c.offset]=ie.transform(-s);const u=ie.transform(t),f=ie.transform(n);i[c.array]=`${u} ${f}`}function EM(i,{attrX:t,attrY:n,attrScale:s,pathLength:o,pathSpacing:c=1,pathOffset:u=0,...f},p,d,g){if(og(i,f,d),p){i.style.viewBox&&(i.attrs.viewBox=i.style.viewBox);return}i.attrs=i.style,i.style={};const{attrs:v,style:_}=i;v.transform&&(_.transform=v.transform,delete v.transform),(_.transform||v.transformOrigin)&&(_.transformOrigin=v.transformOrigin??"50% 50%",delete v.transformOrigin),_.transform&&(_.transformBox=(g==null?void 0:g.transformBox)??"fill-box",delete v.transformBox),t!==void 0&&(v.x=t),n!==void 0&&(v.y=n),s!==void 0&&(v.scale=s),o!==void 0&&IR(v,o,c,u,!1)}const TM=()=>({...lg(),attrs:{}}),bM=i=>typeof i=="string"&&i.toLowerCase()==="svg";function zR(i,t,n,s){const o=Et.useMemo(()=>{const c=TM();return EM(c,t,bM(s),i.transformTemplate,i.style),{...c.attrs,style:{...c.style}}},[t]);if(i.style){const c={};MM(c,i.style,i),o.style={...c,...o.style}}return o}const VR=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function cg(i){return typeof i!="string"||i.includes("-")?!1:!!(VR.indexOf(i)>-1||/[A-Z]/u.test(i))}function HR(i,t,n,{latestValues:s},o,c=!1){const f=(cg(i)?zR:OR)(t,s,o,i),p=AR(t,typeof i=="string",c),d=i!==Et.Fragment?{...p,...f,ref:n}:{},{children:g}=t,v=Et.useMemo(()=>Hn(g)?g.get():g,[g]);return Et.createElement(i,{...d,children:v})}function Bx(i){const t=[{},{}];return i==null||i.values.forEach((n,s)=>{t[0][s]=n.get(),t[1][s]=n.getVelocity()}),t}function ug(i,t,n,s){if(typeof t=="function"){const[o,c]=Bx(s);t=t(n!==void 0?n:i.custom,o,c)}if(typeof t=="string"&&(t=i.variants&&i.variants[t]),typeof t=="function"){const[o,c]=Bx(s);t=t(n!==void 0?n:i.custom,o,c)}return t}function zu(i){return Hn(i)?i.get():i}function GR({scrapeMotionValuesFromProps:i,createRenderState:t},n,s,o){return{latestValues:kR(n,s,o,i),renderState:t()}}function kR(i,t,n,s){const o={},c=s(i,{});for(const _ in c)o[_]=zu(c[_]);let{initial:u,animate:f}=i;const p=cf(i),d=yM(i);t&&d&&!p&&i.inherit!==!1&&(u===void 0&&(u=t.initial),f===void 0&&(f=t.animate));let g=n?n.initial===!1:!1;g=g||u===!1;const v=g?f:u;if(v&&typeof v!="boolean"&&!lf(v)){const _=Array.isArray(v)?v:[v];for(let y=0;y<_.length;y++){const E=ug(i,_[y]);if(E){const{transitionEnd:b,transition:S,...x}=E;for(const D in x){let w=x[D];if(Array.isArray(w)){const L=g?w.length-1:0;w=w[L]}w!==null&&(o[D]=w)}for(const D in b)o[D]=b[D]}}}return o}const AM=i=>(t,n)=>{const s=Et.useContext(of),o=Et.useContext(rf),c=()=>GR(i,t,s,o);return n?c():Fm(c)};function fg(i,t,n){var c;const{style:s}=i,o={};for(const u in s)(Hn(s[u])||t.style&&Hn(t.style[u])||SM(u,i)||((c=n==null?void 0:n.getValue(u))==null?void 0:c.liveStyle)!==void 0)&&(o[u]=s[u]);return o}const XR=AM({scrapeMotionValuesFromProps:fg,createRenderState:lg});function RM(i,t,n){const s=fg(i,t,n);for(const o in i)if(Hn(i[o])||Hn(t[o])){const c=So.indexOf(o)!==-1?"attr"+o.charAt(0).toUpperCase()+o.substring(1):o;s[c]=i[o]}return s}const WR=AM({scrapeMotionValuesFromProps:RM,createRenderState:TM}),qR=Symbol.for("motionComponentSymbol");function so(i){return i&&typeof i=="object"&&Object.prototype.hasOwnProperty.call(i,"current")}function YR(i,t,n){return Et.useCallback(s=>{s&&i.onMount&&i.onMount(s),t&&(s?t.mount(s):t.unmount()),n&&(typeof n=="function"?n(s):so(n)&&(n.current=s))},[t])}const hg=i=>i.replace(/([a-z])([A-Z])/gu,"$1-$2").toLowerCase(),jR="framerAppearId",CM="data-"+hg(jR),wM=Et.createContext({});function ZR(i,t,n,s,o){var b,S;const{visualElement:c}=Et.useContext(of),u=Et.useContext(_M),f=Et.useContext(rf),p=Et.useContext(ag).reducedMotion,d=Et.useRef(null);s=s||u.renderer,!d.current&&s&&(d.current=s(i,{visualState:t,parent:c,props:n,presenceContext:f,blockInitialAnimation:f?f.initial===!1:!1,reducedMotionConfig:p}));const g=d.current,v=Et.useContext(wM);g&&!g.projection&&o&&(g.type==="html"||g.type==="svg")&&KR(d.current,n,o,v);const _=Et.useRef(!1);Et.useInsertionEffect(()=>{g&&_.current&&g.update(n,f)});const y=n[CM],E=Et.useRef(!!y&&!((b=window.MotionHandoffIsComplete)!=null&&b.call(window,y))&&((S=window.MotionHasOptimisedAnimation)==null?void 0:S.call(window,y)));return bS(()=>{g&&(_.current=!0,window.MotionIsMounted=!0,g.updateFeatures(),g.scheduleRenderMicrotask(),E.current&&g.animationState&&g.animationState.animateChanges())}),Et.useEffect(()=>{g&&(!E.current&&g.animationState&&g.animationState.animateChanges(),E.current&&(queueMicrotask(()=>{var x;(x=window.MotionHandoffMarkAsComplete)==null||x.call(window,y)}),E.current=!1),g.enteringChildren=void 0)}),g}function KR(i,t,n,s){const{layoutId:o,layout:c,drag:u,dragConstraints:f,layoutScroll:p,layoutRoot:d,layoutCrossfade:g}=t;i.projection=new n(i.latestValues,t["data-framer-portal-id"]?void 0:DM(i.parent)),i.projection.setOptions({layoutId:o,layout:c,alwaysMeasureLayout:!!u||f&&so(f),visualElement:i,animationType:typeof c=="string"?c:"both",initialPromotionConfig:s,crossfade:g,layoutScroll:p,layoutRoot:d})}function DM(i){if(i)return i.options.allowProjection!==!1?i.projection:DM(i.parent)}function Dd(i,{forwardMotionProps:t=!1}={},n,s){n&&ER(n);const o=cg(i)?WR:XR;function c(f,p){let d;const g={...Et.useContext(ag),...f,layoutId:QR(f)},{isStatic:v}=g,_=CR(f),y=o(f,v);if(!v&&Bm){JR();const E=$R(g);d=E.MeasureLayout,_.visualElement=ZR(i,y,g,s,E.ProjectionNode)}return zt.jsxs(of.Provider,{value:_,children:[d&&_.visualElement?zt.jsx(d,{visualElement:_.visualElement,...g}):null,HR(i,f,YR(y,_.visualElement,p),y,v,t)]})}c.displayName=`motion.${typeof i=="string"?i:`create(${i.displayName??i.name??""})`}`;const u=Et.forwardRef(c);return u[qR]=i,u}function QR({layoutId:i}){const t=Et.useContext(Om).id;return t&&i!==void 0?t+"-"+i:i}function JR(i,t){Et.useContext(_M).strict}function $R(i){const{drag:t,layout:n}=po;if(!t&&!n)return{};const s={...t,...n};return{MeasureLayout:t!=null&&t.isEnabled(i)||n!=null&&n.isEnabled(i)?s.MeasureLayout:void 0,ProjectionNode:s.ProjectionNode}}function tC(i,t){if(typeof Proxy>"u")return Dd;const n=new Map,s=(c,u)=>Dd(c,u,i,t),o=(c,u)=>s(c,u);return new Proxy(o,{get:(c,u)=>u==="create"?s:(n.has(u)||n.set(u,Dd(u,void 0,i,t)),n.get(u))})}function UM({top:i,left:t,right:n,bottom:s}){return{x:{min:t,max:n},y:{min:i,max:s}}}function eC({x:i,y:t}){return{top:t.min,right:i.max,bottom:t.max,left:i.min}}function nC(i,t){if(!t)return i;const n=t({x:i.left,y:i.top}),s=t({x:i.right,y:i.bottom});return{top:n.y,left:n.x,bottom:s.y,right:s.x}}function Ud(i){return i===void 0||i===1}function Dp({scale:i,scaleX:t,scaleY:n}){return!Ud(i)||!Ud(t)||!Ud(n)}function Qs(i){return Dp(i)||LM(i)||i.z||i.rotate||i.rotateX||i.rotateY||i.skewX||i.skewY}function LM(i){return Ix(i.x)||Ix(i.y)}function Ix(i){return i&&i!=="0%"}function Ju(i,t,n){const s=i-n,o=t*s;return n+o}function zx(i,t,n,s,o){return o!==void 0&&(i=Ju(i,o,s)),Ju(i,n,s)+t}function Up(i,t=0,n=1,s,o){i.min=zx(i.min,t,n,s,o),i.max=zx(i.max,t,n,s,o)}function NM(i,{x:t,y:n}){Up(i.x,t.translate,t.scale,t.originPoint),Up(i.y,n.translate,n.scale,n.originPoint)}const Vx=.999999999999,Hx=1.0000000000001;function iC(i,t,n,s=!1){const o=n.length;if(!o)return;t.x=t.y=1;let c,u;for(let f=0;f<o;f++){c=n[f],u=c.projectionDelta;const{visualElement:p}=c.options;p&&p.props.style&&p.props.style.display==="contents"||(s&&c.options.layoutScroll&&c.scroll&&c!==c.root&&oo(i,{x:-c.scroll.offset.x,y:-c.scroll.offset.y}),u&&(t.x*=u.x.scale,t.y*=u.y.scale,NM(i,u)),s&&Qs(c.latestValues)&&oo(i,c.latestValues))}t.x<Hx&&t.x>Vx&&(t.x=1),t.y<Hx&&t.y>Vx&&(t.y=1)}function ro(i,t){i.min=i.min+t,i.max=i.max+t}function Gx(i,t,n,s,o=.5){const c=tn(i.min,i.max,o);Up(i,t,n,c,s)}function oo(i,t){Gx(i.x,t.x,t.scaleX,t.scale,t.originX),Gx(i.y,t.y,t.scaleY,t.scale,t.originY)}function PM(i,t){return UM(nC(i.getBoundingClientRect(),t))}function aC(i,t,n){const s=PM(i,n),{scroll:o}=t;return o&&(ro(s.x,o.offset.x),ro(s.y,o.offset.y)),s}const kx=()=>({translate:0,scale:1,origin:0,originPoint:0}),lo=()=>({x:kx(),y:kx()}),Xx=()=>({min:0,max:0}),yn=()=>({x:Xx(),y:Xx()}),Lp={current:null},OM={current:!1};function sC(){if(OM.current=!0,!!Bm)if(window.matchMedia){const i=window.matchMedia("(prefers-reduced-motion)"),t=()=>Lp.current=i.matches;i.addEventListener("change",t),t()}else Lp.current=!1}const rC=new WeakMap;function oC(i,t,n){for(const s in t){const o=t[s],c=n[s];if(Hn(o))i.addValue(s,o);else if(Hn(c))i.addValue(s,ho(o,{owner:i}));else if(c!==o)if(i.hasValue(s)){const u=i.getValue(s);u.liveStyle===!0?u.jump(o):u.hasAnimated||u.set(o)}else{const u=i.getStaticValue(s);i.addValue(s,ho(u!==void 0?u:o,{owner:i}))}}for(const s in n)t[s]===void 0&&i.removeValue(s);return t}const Wx=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];class lC{scrapeMotionValuesFromProps(t,n,s){return{}}constructor({parent:t,props:n,presenceContext:s,reducedMotionConfig:o,blockInitialAnimation:c,visualState:u},f={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.KeyframeResolver=$m,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const _=ni.now();this.renderScheduledAt<_&&(this.renderScheduledAt=_,Je.render(this.render,!1,!0))};const{latestValues:p,renderState:d}=u;this.latestValues=p,this.baseTarget={...p},this.initialValues=n.initial?{...p}:{},this.renderState=d,this.parent=t,this.props=n,this.presenceContext=s,this.depth=t?t.depth+1:0,this.reducedMotionConfig=o,this.options=f,this.blockInitialAnimation=!!c,this.isControllingVariants=cf(n),this.isVariantNode=yM(n),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(t&&t.current);const{willChange:g,...v}=this.scrapeMotionValuesFromProps(n,{},this);for(const _ in v){const y=v[_];p[_]!==void 0&&Hn(y)&&y.set(p[_])}}mount(t){var n;this.current=t,rC.set(t,this),this.projection&&!this.projection.instance&&this.projection.mount(t),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((s,o)=>this.bindToMotionValue(o,s)),OM.current||sC(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:Lp.current,(n=this.parent)==null||n.addChild(this),this.update(this.props,this.presenceContext)}unmount(){var t;this.projection&&this.projection.unmount(),Ms(this.notifyUpdate),Ms(this.render),this.valueSubscriptions.forEach(n=>n()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),(t=this.parent)==null||t.removeChild(this);for(const n in this.events)this.events[n].clear();for(const n in this.features){const s=this.features[n];s&&(s.unmount(),s.isMounted=!1)}this.current=null}addChild(t){this.children.add(t),this.enteringChildren??(this.enteringChildren=new Set),this.enteringChildren.add(t)}removeChild(t){this.children.delete(t),this.enteringChildren&&this.enteringChildren.delete(t)}bindToMotionValue(t,n){this.valueSubscriptions.has(t)&&this.valueSubscriptions.get(t)();const s=Mo.has(t);s&&this.onBindTransform&&this.onBindTransform();const o=n.on("change",u=>{this.latestValues[t]=u,this.props.onUpdate&&Je.preRender(this.notifyUpdate),s&&this.projection&&(this.projection.isTransformDirty=!0),this.scheduleRender()});let c;window.MotionCheckAppearSync&&(c=window.MotionCheckAppearSync(this,t,n)),this.valueSubscriptions.set(t,()=>{o(),c&&c(),n.owner&&n.stop()})}sortNodePosition(t){return!this.current||!this.sortInstanceNodePosition||this.type!==t.type?0:this.sortInstanceNodePosition(this.current,t.current)}updateFeatures(){let t="animation";for(t in po){const n=po[t];if(!n)continue;const{isEnabled:s,Feature:o}=n;if(!this.features[t]&&o&&s(this.props)&&(this.features[t]=new o(this)),this.features[t]){const c=this.features[t];c.isMounted?c.update():(c.mount(),c.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):yn()}getStaticValue(t){return this.latestValues[t]}setStaticValue(t,n){this.latestValues[t]=n}update(t,n){(t.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=t,this.prevPresenceContext=this.presenceContext,this.presenceContext=n;for(let s=0;s<Wx.length;s++){const o=Wx[s];this.propEventSubscriptions[o]&&(this.propEventSubscriptions[o](),delete this.propEventSubscriptions[o]);const c="on"+o,u=t[c];u&&(this.propEventSubscriptions[o]=this.on(o,u))}this.prevMotionValues=oC(this,this.scrapeMotionValuesFromProps(t,this.prevProps,this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(t){return this.props.variants?this.props.variants[t]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(t){const n=this.getClosestVariantNode();if(n)return n.variantChildren&&n.variantChildren.add(t),()=>n.variantChildren.delete(t)}addValue(t,n){const s=this.values.get(t);n!==s&&(s&&this.removeValue(t),this.bindToMotionValue(t,n),this.values.set(t,n),this.latestValues[t]=n.get())}removeValue(t){this.values.delete(t);const n=this.valueSubscriptions.get(t);n&&(n(),this.valueSubscriptions.delete(t)),delete this.latestValues[t],this.removeValueFromRenderState(t,this.renderState)}hasValue(t){return this.values.has(t)}getValue(t,n){if(this.props.values&&this.props.values[t])return this.props.values[t];let s=this.values.get(t);return s===void 0&&n!==void 0&&(s=ho(n===null?void 0:n,{owner:this}),this.addValue(t,s)),s}readValue(t,n){let s=this.latestValues[t]!==void 0||!this.current?this.latestValues[t]:this.getBaseTargetFromProps(this.props,t)??this.readValueFromInstance(this.current,t,this.options);return s!=null&&(typeof s=="string"&&(AS(s)||CS(s))?s=parseFloat(s):!mR(s)&&Es.test(n)&&(s=uM(t,n)),this.setBaseTarget(t,Hn(s)?s.get():s)),Hn(s)?s.get():s}setBaseTarget(t,n){this.baseTarget[t]=n}getBaseTarget(t){var c;const{initial:n}=this.props;let s;if(typeof n=="string"||typeof n=="object"){const u=ug(this.props,n,(c=this.presenceContext)==null?void 0:c.custom);u&&(s=u[t])}if(n&&s!==void 0)return s;const o=this.getBaseTargetFromProps(this.props,t);return o!==void 0&&!Hn(o)?o:this.initialValues[t]!==void 0&&s===void 0?void 0:this.baseTarget[t]}on(t,n){return this.events[t]||(this.events[t]=new Gm),this.events[t].add(n)}notify(t,...n){this.events[t]&&this.events[t].notify(...n)}scheduleRenderMicrotask(){ng.render(this.render)}}class FM extends lC{constructor(){super(...arguments),this.KeyframeResolver=iR}sortInstanceNodePosition(t,n){return t.compareDocumentPosition(n)&2?1:-1}getBaseTargetFromProps(t,n){return t.style?t.style[n]:void 0}removeValueFromRenderState(t,{vars:n,style:s}){delete n[t],delete s[t]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:t}=this.props;Hn(t)&&(this.childSubscription=t.on("change",n=>{this.current&&(this.current.textContent=`${n}`)}))}}function BM(i,{style:t,vars:n},s,o){const c=i.style;let u;for(u in t)c[u]=t[u];o==null||o.applyProjectionStyles(c,s);for(u in n)c.setProperty(u,n[u])}function cC(i){return window.getComputedStyle(i)}class uC extends FM{constructor(){super(...arguments),this.type="html",this.renderInstance=BM}readValueFromInstance(t,n){var s;if(Mo.has(n))return(s=this.projection)!=null&&s.isProjecting?Mp(n):M1(t,n);{const o=cC(t),c=(GS(n)?o.getPropertyValue(n):o[n])||0;return typeof c=="string"?c.trim():c}}measureInstanceViewportBox(t,{transformPagePoint:n}){return PM(t,n)}build(t,n,s){og(t,n,s.transformTemplate)}scrapeMotionValuesFromProps(t,n,s){return fg(t,n,s)}}const IM=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function fC(i,t,n,s){BM(i,t,void 0,s);for(const o in t.attrs)i.setAttribute(IM.has(o)?o:hg(o),t.attrs[o])}class hC extends FM{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=yn}getBaseTargetFromProps(t,n){return t[n]}readValueFromInstance(t,n){if(Mo.has(n)){const s=cM(n);return s&&s.default||0}return n=IM.has(n)?n:hg(n),t.getAttribute(n)}scrapeMotionValuesFromProps(t,n,s){return RM(t,n,s)}build(t,n,s){EM(t,n,this.isSVGTag,s.transformTemplate,s.style)}renderInstance(t,n,s,o){fC(t,n,s,o)}mount(t){this.isSVGTag=bM(t.tagName),super.mount(t)}}const dC=(i,t)=>cg(i)?new hC(t):new uC(t,{allowProjection:i!==Et.Fragment});function co(i,t,n){const s=i.getProps();return ug(s,t,n!==void 0?n:s.custom,i)}const Np=i=>Array.isArray(i);function pC(i,t,n){i.hasValue(t)?i.getValue(t).set(n):i.addValue(t,ho(n))}function mC(i){return Np(i)?i[i.length-1]||0:i}function gC(i,t){const n=co(i,t);let{transitionEnd:s={},transition:o={},...c}=n||{};c={...c,...s};for(const u in c){const f=mC(c[u]);pC(i,u,f)}}function vC(i){return!!(Hn(i)&&i.add)}function Pp(i,t){const n=i.getValue("willChange");if(vC(n))return n.add(t);if(!n&&Fa.WillChange){const s=new Fa.WillChange("auto");i.addValue("willChange",s),s.add(t)}}function zM(i){return i.props[CM]}const _C=i=>i!==null;function xC(i,{repeat:t,repeatType:n="loop"},s){const o=i.filter(_C),c=t&&n!=="loop"&&t%2===1?0:o.length-1;return o[c]}const yC={type:"spring",stiffness:500,damping:25,restSpeed:10},SC=i=>({type:"spring",stiffness:550,damping:i===0?2*Math.sqrt(550):30,restSpeed:10}),MC={type:"keyframes",duration:.8},EC={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},TC=(i,{keyframes:t})=>t.length>2?MC:Mo.has(i)?i.startsWith("scale")?SC(t[1]):yC:EC;function bC({when:i,delay:t,delayChildren:n,staggerChildren:s,staggerDirection:o,repeat:c,repeatType:u,repeatDelay:f,from:p,elapsed:d,...g}){return!!Object.keys(g).length}const dg=(i,t,n,s={},o,c)=>u=>{const f=tg(s,i)||{},p=f.delay||s.delay||0;let{elapsed:d=0}=s;d=d-ea(p);const g={keyframes:Array.isArray(n)?n:[null,n],ease:"easeOut",velocity:t.getVelocity(),...f,delay:-d,onUpdate:_=>{t.set(_),f.onUpdate&&f.onUpdate(_)},onComplete:()=>{u(),f.onComplete&&f.onComplete()},name:i,motionValue:t,element:c?void 0:o};bC(f)||Object.assign(g,TC(i,g)),g.duration&&(g.duration=ea(g.duration)),g.repeatDelay&&(g.repeatDelay=ea(g.repeatDelay)),g.from!==void 0&&(g.keyframes[0]=g.from);let v=!1;if((g.type===!1||g.duration===0&&!g.repeatDelay)&&(Rp(g),g.delay===0&&(v=!0)),(Fa.instantAnimations||Fa.skipAnimations)&&(v=!0,Rp(g),g.delay=0),g.allowFlatten=!f.type&&!f.ease,v&&!c&&t.get()!==void 0){const _=xC(g.keyframes,f);if(_!==void 0){Je.update(()=>{g.onUpdate(_),g.onComplete()});return}}return f.isSync?new Jm(g):new W1(g)};function AC({protectedKeys:i,needsAnimating:t},n){const s=i.hasOwnProperty(n)&&t[n]!==!0;return t[n]=!1,s}function VM(i,t,{delay:n=0,transitionOverride:s,type:o}={}){let{transition:c=i.getDefaultTransition(),transitionEnd:u,...f}=t;s&&(c=s);const p=[],d=o&&i.animationState&&i.animationState.getState()[o];for(const g in f){const v=i.getValue(g,i.latestValues[g]??null),_=f[g];if(_===void 0||d&&AC(d,g))continue;const y={delay:n,...tg(c||{},g)},E=v.get();if(E!==void 0&&!v.isAnimating&&!Array.isArray(_)&&_===E&&!y.velocity)continue;let b=!1;if(window.MotionHandoffAnimation){const x=zM(i);if(x){const D=window.MotionHandoffAnimation(x,g,Je);D!==null&&(y.startTime=D,b=!0)}}Pp(i,g),v.start(dg(g,v,_,i.shouldReduceMotion&&rM.has(g)?{type:!1}:y,i,b));const S=v.animation;S&&p.push(S)}return u&&Promise.all(p).then(()=>{Je.update(()=>{u&&gC(i,u)})}),p}function HM(i,t,n,s=0,o=1){const c=Array.from(i).sort((d,g)=>d.sortNodePosition(g)).indexOf(t),u=i.size,f=(u-1)*s;return typeof n=="function"?n(c,u):o===1?c*s:f-c*s}function Op(i,t,n={}){var p;const s=co(i,t,n.type==="exit"?(p=i.presenceContext)==null?void 0:p.custom:void 0);let{transition:o=i.getDefaultTransition()||{}}=s||{};n.transitionOverride&&(o=n.transitionOverride);const c=s?()=>Promise.all(VM(i,s,n)):()=>Promise.resolve(),u=i.variantChildren&&i.variantChildren.size?(d=0)=>{const{delayChildren:g=0,staggerChildren:v,staggerDirection:_}=o;return RC(i,t,d,g,v,_,n)}:()=>Promise.resolve(),{when:f}=o;if(f){const[d,g]=f==="beforeChildren"?[c,u]:[u,c];return d().then(()=>g())}else return Promise.all([c(),u(n.delay)])}function RC(i,t,n=0,s=0,o=0,c=1,u){const f=[];for(const p of i.variantChildren)p.notify("AnimationStart",t),f.push(Op(p,t,{...u,delay:n+(typeof s=="function"?0:s)+HM(i.variantChildren,p,s,o,c)}).then(()=>p.notify("AnimationComplete",t)));return Promise.all(f)}function CC(i,t,n={}){i.notify("AnimationStart",t);let s;if(Array.isArray(t)){const o=t.map(c=>Op(i,c,n));s=Promise.all(o)}else if(typeof t=="string")s=Op(i,t,n);else{const o=typeof t=="function"?co(i,t,n.custom):t;s=Promise.all(VM(i,o,n))}return s.then(()=>{i.notify("AnimationComplete",t)})}function GM(i,t){if(!Array.isArray(t))return!1;const n=t.length;if(n!==i.length)return!1;for(let s=0;s<n;s++)if(t[s]!==i[s])return!1;return!0}const wC=rg.length;function kM(i){if(!i)return;if(!i.isControllingVariants){const n=i.parent?kM(i.parent)||{}:{};return i.props.initial!==void 0&&(n.initial=i.props.initial),n}const t={};for(let n=0;n<wC;n++){const s=rg[n],o=i.props[s];(Bl(o)||o===!1)&&(t[s]=o)}return t}const DC=[...sg].reverse(),UC=sg.length;function LC(i){return t=>Promise.all(t.map(({animation:n,options:s})=>CC(i,n,s)))}function NC(i){let t=LC(i),n=qx(),s=!0;const o=p=>(d,g)=>{var _;const v=co(i,g,p==="exit"?(_=i.presenceContext)==null?void 0:_.custom:void 0);if(v){const{transition:y,transitionEnd:E,...b}=v;d={...d,...b,...E}}return d};function c(p){t=p(i)}function u(p){const{props:d}=i,g=kM(i.parent)||{},v=[],_=new Set;let y={},E=1/0;for(let S=0;S<UC;S++){const x=DC[S],D=n[x],w=d[x]!==void 0?d[x]:g[x],L=Bl(w),N=x===p?D.isActive:null;N===!1&&(E=S);let B=w===g[x]&&w!==d[x]&&L;if(B&&s&&i.manuallyAnimateOnMount&&(B=!1),D.protectedKeys={...y},!D.isActive&&N===null||!w&&!D.prevProp||lf(w)||typeof w=="boolean")continue;const P=PC(D.prevProp,w);let k=P||x===p&&D.isActive&&!B&&L||S>E&&L,C=!1;const U=Array.isArray(w)?w:[w];let H=U.reduce(o(x),{});N===!1&&(H={});const{prevResolvedValues:$={}}=D,tt={...$,...H},ft=z=>{k=!0,_.has(z)&&(C=!0,_.delete(z)),D.needsAnimating[z]=!0;const K=i.getValue(z);K&&(K.liveStyle=!1)};for(const z in tt){const K=H[z],yt=$[z];if(y.hasOwnProperty(z))continue;let _t=!1;Np(K)&&Np(yt)?_t=!GM(K,yt):_t=K!==yt,_t?K!=null?ft(z):_.add(z):K!==void 0&&_.has(z)?ft(z):D.protectedKeys[z]=!0}D.prevProp=w,D.prevResolvedValues=H,D.isActive&&(y={...y,...H}),s&&i.blockInitialAnimation&&(k=!1);const ot=B&&P;k&&(!ot||C)&&v.push(...U.map(z=>{const K={type:x};if(typeof z=="string"&&s&&!ot&&i.manuallyAnimateOnMount&&i.parent){const{parent:yt}=i,_t=co(yt,z);if(yt.enteringChildren&&_t){const{delayChildren:F}=_t.transition||{};K.delay=HM(yt.enteringChildren,i,F)}}return{animation:z,options:K}}))}if(_.size){const S={};if(typeof d.initial!="boolean"){const x=co(i,Array.isArray(d.initial)?d.initial[0]:d.initial);x&&x.transition&&(S.transition=x.transition)}_.forEach(x=>{const D=i.getBaseTarget(x),w=i.getValue(x);w&&(w.liveStyle=!0),S[x]=D??null}),v.push({animation:S})}let b=!!v.length;return s&&(d.initial===!1||d.initial===d.animate)&&!i.manuallyAnimateOnMount&&(b=!1),s=!1,b?t(v):Promise.resolve()}function f(p,d){var v;if(n[p].isActive===d)return Promise.resolve();(v=i.variantChildren)==null||v.forEach(_=>{var y;return(y=_.animationState)==null?void 0:y.setActive(p,d)}),n[p].isActive=d;const g=u(p);for(const _ in n)n[_].protectedKeys={};return g}return{animateChanges:u,setActive:f,setAnimateFunction:c,getState:()=>n,reset:()=>{n=qx()}}}function PC(i,t){return typeof t=="string"?t!==i:Array.isArray(t)?!GM(t,i):!1}function Xs(i=!1){return{isActive:i,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function qx(){return{animate:Xs(!0),whileInView:Xs(),whileHover:Xs(),whileTap:Xs(),whileDrag:Xs(),whileFocus:Xs(),exit:Xs()}}class bs{constructor(t){this.isMounted=!1,this.node=t}update(){}}class OC extends bs{constructor(t){super(t),t.animationState||(t.animationState=NC(t))}updateAnimationControlsSubscription(){const{animate:t}=this.node.getProps();lf(t)&&(this.unmountControls=t.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:t}=this.node.getProps(),{animate:n}=this.node.prevProps||{};t!==n&&this.updateAnimationControlsSubscription()}unmount(){var t;this.node.animationState.reset(),(t=this.unmountControls)==null||t.call(this)}}let FC=0;class BC extends bs{constructor(){super(...arguments),this.id=FC++}update(){if(!this.node.presenceContext)return;const{isPresent:t,onExitComplete:n}=this.node.presenceContext,{isPresent:s}=this.node.prevPresenceContext||{};if(!this.node.animationState||t===s)return;const o=this.node.animationState.setActive("exit",!t);n&&!t&&o.then(()=>{n(this.id)})}mount(){const{register:t,onExitComplete:n}=this.node.presenceContext||{};n&&n(this.id),t&&(this.unmount=t(this.id))}unmount(){}}const IC={animation:{Feature:OC},exit:{Feature:BC}};function Il(i,t,n,s={passive:!0}){return i.addEventListener(t,n,s),()=>i.removeEventListener(t,n)}function Yl(i){return{point:{x:i.pageX,y:i.pageY}}}const zC=i=>t=>ig(t)&&i(t,Yl(t));function Ll(i,t,n,s){return Il(i,t,zC(n),s)}const XM=1e-4,VC=1-XM,HC=1+XM,WM=.01,GC=0-WM,kC=0+WM;function Yn(i){return i.max-i.min}function XC(i,t,n){return Math.abs(i-t)<=n}function Yx(i,t,n,s=.5){i.origin=s,i.originPoint=tn(t.min,t.max,i.origin),i.scale=Yn(n)/Yn(t),i.translate=tn(n.min,n.max,i.origin)-i.originPoint,(i.scale>=VC&&i.scale<=HC||isNaN(i.scale))&&(i.scale=1),(i.translate>=GC&&i.translate<=kC||isNaN(i.translate))&&(i.translate=0)}function Nl(i,t,n,s){Yx(i.x,t.x,n.x,s?s.originX:void 0),Yx(i.y,t.y,n.y,s?s.originY:void 0)}function jx(i,t,n){i.min=n.min+t.min,i.max=i.min+Yn(t)}function WC(i,t,n){jx(i.x,t.x,n.x),jx(i.y,t.y,n.y)}function Zx(i,t,n){i.min=t.min-n.min,i.max=i.min+Yn(t)}function $u(i,t,n){Zx(i.x,t.x,n.x),Zx(i.y,t.y,n.y)}function Ci(i){return[i("x"),i("y")]}const qM=({current:i})=>i?i.ownerDocument.defaultView:null,Kx=(i,t)=>Math.abs(i-t);function qC(i,t){const n=Kx(i.x,t.x),s=Kx(i.y,t.y);return Math.sqrt(n**2+s**2)}class YM{constructor(t,n,{transformPagePoint:s,contextWindow:o=window,dragSnapToOrigin:c=!1,distanceThreshold:u=3}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const _=Nd(this.lastMoveEventInfo,this.history),y=this.startEvent!==null,E=qC(_.offset,{x:0,y:0})>=this.distanceThreshold;if(!y&&!E)return;const{point:b}=_,{timestamp:S}=On;this.history.push({...b,timestamp:S});const{onStart:x,onMove:D}=this.handlers;y||(x&&x(this.lastMoveEvent,_),this.startEvent=this.lastMoveEvent),D&&D(this.lastMoveEvent,_)},this.handlePointerMove=(_,y)=>{this.lastMoveEvent=_,this.lastMoveEventInfo=Ld(y,this.transformPagePoint),Je.update(this.updatePoint,!0)},this.handlePointerUp=(_,y)=>{this.end();const{onEnd:E,onSessionEnd:b,resumeAnimation:S}=this.handlers;if(this.dragSnapToOrigin&&S&&S(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const x=Nd(_.type==="pointercancel"?this.lastMoveEventInfo:Ld(y,this.transformPagePoint),this.history);this.startEvent&&E&&E(_,x),b&&b(_,x)},!ig(t))return;this.dragSnapToOrigin=c,this.handlers=n,this.transformPagePoint=s,this.distanceThreshold=u,this.contextWindow=o||window;const f=Yl(t),p=Ld(f,this.transformPagePoint),{point:d}=p,{timestamp:g}=On;this.history=[{...d,timestamp:g}];const{onSessionStart:v}=n;v&&v(t,Nd(p,this.history)),this.removeListeners=Xl(Ll(this.contextWindow,"pointermove",this.handlePointerMove),Ll(this.contextWindow,"pointerup",this.handlePointerUp),Ll(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(t){this.handlers=t}end(){this.removeListeners&&this.removeListeners(),Ms(this.updatePoint)}}function Ld(i,t){return t?{point:t(i.point)}:i}function Qx(i,t){return{x:i.x-t.x,y:i.y-t.y}}function Nd({point:i},t){return{point:i,delta:Qx(i,jM(t)),offset:Qx(i,YC(t)),velocity:jC(t,.1)}}function YC(i){return i[0]}function jM(i){return i[i.length-1]}function jC(i,t){if(i.length<2)return{x:0,y:0};let n=i.length-1,s=null;const o=jM(i);for(;n>=0&&(s=i[n],!(o.timestamp-s.timestamp>ea(t)));)n--;if(!s)return{x:0,y:0};const c=Ui(o.timestamp-s.timestamp);if(c===0)return{x:0,y:0};const u={x:(o.x-s.x)/c,y:(o.y-s.y)/c};return u.x===1/0&&(u.x=0),u.y===1/0&&(u.y=0),u}function ZC(i,{min:t,max:n},s){return t!==void 0&&i<t?i=s?tn(t,i,s.min):Math.max(i,t):n!==void 0&&i>n&&(i=s?tn(n,i,s.max):Math.min(i,n)),i}function Jx(i,t,n){return{min:t!==void 0?i.min+t:void 0,max:n!==void 0?i.max+n-(i.max-i.min):void 0}}function KC(i,{top:t,left:n,bottom:s,right:o}){return{x:Jx(i.x,n,o),y:Jx(i.y,t,s)}}function $x(i,t){let n=t.min-i.min,s=t.max-i.max;return t.max-t.min<i.max-i.min&&([n,s]=[s,n]),{min:n,max:s}}function QC(i,t){return{x:$x(i.x,t.x),y:$x(i.y,t.y)}}function JC(i,t){let n=.5;const s=Yn(i),o=Yn(t);return o>s?n=Pl(t.min,t.max-s,i.min):s>o&&(n=Pl(i.min,i.max-o,t.min)),Oa(0,1,n)}function $C(i,t){const n={};return t.min!==void 0&&(n.min=t.min-i.min),t.max!==void 0&&(n.max=t.max-i.min),n}const Fp=.35;function tw(i=Fp){return i===!1?i=0:i===!0&&(i=Fp),{x:ty(i,"left","right"),y:ty(i,"top","bottom")}}function ty(i,t,n){return{min:ey(i,t),max:ey(i,n)}}function ey(i,t){return typeof i=="number"?i:i[t]||0}const ew=new WeakMap;class nw{constructor(t){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=yn(),this.latestPointerEvent=null,this.latestPanInfo=null,this.visualElement=t}start(t,{snapToCursor:n=!1,distanceThreshold:s}={}){const{presenceContext:o}=this.visualElement;if(o&&o.isPresent===!1)return;const c=v=>{const{dragSnapToOrigin:_}=this.getProps();_?this.pauseAnimation():this.stopAnimation(),n&&this.snapToCursor(Yl(v).point)},u=(v,_)=>{const{drag:y,dragPropagation:E,onDragStart:b}=this.getProps();if(y&&!E&&(this.openDragLock&&this.openDragLock(),this.openDragLock=oR(y),!this.openDragLock))return;this.latestPointerEvent=v,this.latestPanInfo=_,this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),Ci(x=>{let D=this.getAxisMotionValue(x).get()||0;if(na.test(D)){const{projection:w}=this.visualElement;if(w&&w.layout){const L=w.layout.layoutBox[x];L&&(D=Yn(L)*(parseFloat(D)/100))}}this.originPoint[x]=D}),b&&Je.postRender(()=>b(v,_)),Pp(this.visualElement,"transform");const{animationState:S}=this.visualElement;S&&S.setActive("whileDrag",!0)},f=(v,_)=>{this.latestPointerEvent=v,this.latestPanInfo=_;const{dragPropagation:y,dragDirectionLock:E,onDirectionLock:b,onDrag:S}=this.getProps();if(!y&&!this.openDragLock)return;const{offset:x}=_;if(E&&this.currentDirection===null){this.currentDirection=iw(x),this.currentDirection!==null&&b&&b(this.currentDirection);return}this.updateAxis("x",_.point,x),this.updateAxis("y",_.point,x),this.visualElement.render(),S&&S(v,_)},p=(v,_)=>{this.latestPointerEvent=v,this.latestPanInfo=_,this.stop(v,_),this.latestPointerEvent=null,this.latestPanInfo=null},d=()=>Ci(v=>{var _;return this.getAnimationState(v)==="paused"&&((_=this.getAxisMotionValue(v).animation)==null?void 0:_.play())}),{dragSnapToOrigin:g}=this.getProps();this.panSession=new YM(t,{onSessionStart:c,onStart:u,onMove:f,onSessionEnd:p,resumeAnimation:d},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:g,distanceThreshold:s,contextWindow:qM(this.visualElement)})}stop(t,n){const s=t||this.latestPointerEvent,o=n||this.latestPanInfo,c=this.isDragging;if(this.cancel(),!c||!o||!s)return;const{velocity:u}=o;this.startAnimation(u);const{onDragEnd:f}=this.getProps();f&&Je.postRender(()=>f(s,o))}cancel(){this.isDragging=!1;const{projection:t,animationState:n}=this.visualElement;t&&(t.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:s}=this.getProps();!s&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),n&&n.setActive("whileDrag",!1)}updateAxis(t,n,s){const{drag:o}=this.getProps();if(!s||!du(t,o,this.currentDirection))return;const c=this.getAxisMotionValue(t);let u=this.originPoint[t]+s[t];this.constraints&&this.constraints[t]&&(u=ZC(u,this.constraints[t],this.elastic[t])),c.set(u)}resolveConstraints(){var c;const{dragConstraints:t,dragElastic:n}=this.getProps(),s=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(c=this.visualElement.projection)==null?void 0:c.layout,o=this.constraints;t&&so(t)?this.constraints||(this.constraints=this.resolveRefConstraints()):t&&s?this.constraints=KC(s.layoutBox,t):this.constraints=!1,this.elastic=tw(n),o!==this.constraints&&s&&this.constraints&&!this.hasMutatedConstraints&&Ci(u=>{this.constraints!==!1&&this.getAxisMotionValue(u)&&(this.constraints[u]=$C(s.layoutBox[u],this.constraints[u]))})}resolveRefConstraints(){const{dragConstraints:t,onMeasureDragConstraints:n}=this.getProps();if(!t||!so(t))return!1;const s=t.current,{projection:o}=this.visualElement;if(!o||!o.layout)return!1;const c=aC(s,o.root,this.visualElement.getTransformPagePoint());let u=QC(o.layout.layoutBox,c);if(n){const f=n(eC(u));this.hasMutatedConstraints=!!f,f&&(u=UM(f))}return u}startAnimation(t){const{drag:n,dragMomentum:s,dragElastic:o,dragTransition:c,dragSnapToOrigin:u,onDragTransitionEnd:f}=this.getProps(),p=this.constraints||{},d=Ci(g=>{if(!du(g,n,this.currentDirection))return;let v=p&&p[g]||{};u&&(v={min:0,max:0});const _=o?200:1e6,y=o?40:1e7,E={type:"inertia",velocity:s?t[g]:0,bounceStiffness:_,bounceDamping:y,timeConstant:750,restDelta:1,restSpeed:10,...c,...v};return this.startAxisValueAnimation(g,E)});return Promise.all(d).then(f)}startAxisValueAnimation(t,n){const s=this.getAxisMotionValue(t);return Pp(this.visualElement,t),s.start(dg(t,s,0,n,this.visualElement,!1))}stopAnimation(){Ci(t=>this.getAxisMotionValue(t).stop())}pauseAnimation(){Ci(t=>{var n;return(n=this.getAxisMotionValue(t).animation)==null?void 0:n.pause()})}getAnimationState(t){var n;return(n=this.getAxisMotionValue(t).animation)==null?void 0:n.state}getAxisMotionValue(t){const n=`_drag${t.toUpperCase()}`,s=this.visualElement.getProps(),o=s[n];return o||this.visualElement.getValue(t,(s.initial?s.initial[t]:void 0)||0)}snapToCursor(t){Ci(n=>{const{drag:s}=this.getProps();if(!du(n,s,this.currentDirection))return;const{projection:o}=this.visualElement,c=this.getAxisMotionValue(n);if(o&&o.layout){const{min:u,max:f}=o.layout.layoutBox[n];c.set(t[n]-tn(u,f,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:t,dragConstraints:n}=this.getProps(),{projection:s}=this.visualElement;if(!so(n)||!s||!this.constraints)return;this.stopAnimation();const o={x:0,y:0};Ci(u=>{const f=this.getAxisMotionValue(u);if(f&&this.constraints!==!1){const p=f.get();o[u]=JC({min:p,max:p},this.constraints[u])}});const{transformTemplate:c}=this.visualElement.getProps();this.visualElement.current.style.transform=c?c({},""):"none",s.root&&s.root.updateScroll(),s.updateLayout(),this.resolveConstraints(),Ci(u=>{if(!du(u,t,null))return;const f=this.getAxisMotionValue(u),{min:p,max:d}=this.constraints[u];f.set(tn(p,d,o[u]))})}addListeners(){if(!this.visualElement.current)return;ew.set(this.visualElement,this);const t=this.visualElement.current,n=Ll(t,"pointerdown",p=>{const{drag:d,dragListener:g=!0}=this.getProps();d&&g&&this.start(p)}),s=()=>{const{dragConstraints:p}=this.getProps();so(p)&&p.current&&(this.constraints=this.resolveRefConstraints())},{projection:o}=this.visualElement,c=o.addEventListener("measure",s);o&&!o.layout&&(o.root&&o.root.updateScroll(),o.updateLayout()),Je.read(s);const u=Il(window,"resize",()=>this.scalePositionWithinConstraints()),f=o.addEventListener("didUpdate",(({delta:p,hasLayoutChanged:d})=>{this.isDragging&&d&&(Ci(g=>{const v=this.getAxisMotionValue(g);v&&(this.originPoint[g]+=p[g].translate,v.set(v.get()+p[g].translate))}),this.visualElement.render())}));return()=>{u(),n(),c(),f&&f()}}getProps(){const t=this.visualElement.getProps(),{drag:n=!1,dragDirectionLock:s=!1,dragPropagation:o=!1,dragConstraints:c=!1,dragElastic:u=Fp,dragMomentum:f=!0}=t;return{...t,drag:n,dragDirectionLock:s,dragPropagation:o,dragConstraints:c,dragElastic:u,dragMomentum:f}}}function du(i,t,n){return(t===!0||t===i)&&(n===null||n===i)}function iw(i,t=10){let n=null;return Math.abs(i.y)>t?n="y":Math.abs(i.x)>t&&(n="x"),n}class aw extends bs{constructor(t){super(t),this.removeGroupControls=Li,this.removeListeners=Li,this.controls=new nw(t)}mount(){const{dragControls:t}=this.node.getProps();t&&(this.removeGroupControls=t.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||Li}unmount(){this.removeGroupControls(),this.removeListeners()}}const ny=i=>(t,n)=>{i&&Je.postRender(()=>i(t,n))};class sw extends bs{constructor(){super(...arguments),this.removePointerDownListener=Li}onPointerDown(t){this.session=new YM(t,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:qM(this.node)})}createPanHandlers(){const{onPanSessionStart:t,onPanStart:n,onPan:s,onPanEnd:o}=this.node.getProps();return{onSessionStart:ny(t),onStart:ny(n),onMove:s,onEnd:(c,u)=>{delete this.session,o&&Je.postRender(()=>o(c,u))}}}mount(){this.removePointerDownListener=Ll(this.node.current,"pointerdown",t=>this.onPointerDown(t))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}const Vu={hasAnimatedSinceResize:!0,hasEverUpdated:!1};let Pd=!1;class rw extends Et.Component{componentDidMount(){const{visualElement:t,layoutGroup:n,switchLayoutGroup:s,layoutId:o}=this.props,{projection:c}=t;c&&(n.group&&n.group.add(c),s&&s.register&&o&&s.register(c),Pd&&c.root.didUpdate(),c.addEventListener("animationComplete",()=>{this.safeToRemove()}),c.setOptions({...c.options,onExitComplete:()=>this.safeToRemove()})),Vu.hasEverUpdated=!0}getSnapshotBeforeUpdate(t){const{layoutDependency:n,visualElement:s,drag:o,isPresent:c}=this.props,{projection:u}=s;return u&&(u.isPresent=c,Pd=!0,o||t.layoutDependency!==n||n===void 0||t.isPresent!==c?u.willUpdate():this.safeToRemove(),t.isPresent!==c&&(c?u.promote():u.relegate()||Je.postRender(()=>{const f=u.getStack();(!f||!f.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:t}=this.props.visualElement;t&&(t.root.didUpdate(),ng.postRender(()=>{!t.currentAnimation&&t.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:t,layoutGroup:n,switchLayoutGroup:s}=this.props,{projection:o}=t;Pd=!0,o&&(o.scheduleCheckAfterUnmount(),n&&n.group&&n.group.remove(o),s&&s.deregister&&s.deregister(o))}safeToRemove(){const{safeToRemove:t}=this.props;t&&t()}render(){return null}}function ZM(i){const[t,n]=vM(),s=Et.useContext(Om);return zt.jsx(rw,{...i,layoutGroup:s,switchLayoutGroup:Et.useContext(wM),isPresent:t,safeToRemove:n})}function ow(i,t,n){const s=Hn(i)?i:ho(i);return s.start(dg("",s,t,n)),s.animation}const lw=(i,t)=>i.depth-t.depth;class cw{constructor(){this.children=[],this.isDirty=!1}add(t){Im(this.children,t),this.isDirty=!0}remove(t){zm(this.children,t),this.isDirty=!0}forEach(t){this.isDirty&&this.children.sort(lw),this.isDirty=!1,this.children.forEach(t)}}function uw(i,t){const n=ni.now(),s=({timestamp:o})=>{const c=o-n;c>=t&&(Ms(s),i(c-t))};return Je.setup(s,!0),()=>Ms(s)}const KM=["TopLeft","TopRight","BottomLeft","BottomRight"],fw=KM.length,iy=i=>typeof i=="string"?parseFloat(i):i,ay=i=>typeof i=="number"||ie.test(i);function hw(i,t,n,s,o,c){o?(i.opacity=tn(0,n.opacity??1,dw(s)),i.opacityExit=tn(t.opacity??1,0,pw(s))):c&&(i.opacity=tn(t.opacity??1,n.opacity??1,s));for(let u=0;u<fw;u++){const f=`border${KM[u]}Radius`;let p=sy(t,f),d=sy(n,f);if(p===void 0&&d===void 0)continue;p||(p=0),d||(d=0),p===0||d===0||ay(p)===ay(d)?(i[f]=Math.max(tn(iy(p),iy(d),s),0),(na.test(d)||na.test(p))&&(i[f]+="%")):i[f]=d}(t.rotate||n.rotate)&&(i.rotate=tn(t.rotate||0,n.rotate||0,s))}function sy(i,t){return i[t]!==void 0?i[t]:i.borderRadius}const dw=QM(0,.5,FS),pw=QM(.5,.95,Li);function QM(i,t,n){return s=>s<i?0:s>t?1:n(Pl(i,t,s))}function ry(i,t){i.min=t.min,i.max=t.max}function zi(i,t){ry(i.x,t.x),ry(i.y,t.y)}function oy(i,t){i.translate=t.translate,i.scale=t.scale,i.originPoint=t.originPoint,i.origin=t.origin}function ly(i,t,n,s,o){return i-=t,i=Ju(i,1/n,s),o!==void 0&&(i=Ju(i,1/o,s)),i}function mw(i,t=0,n=1,s=.5,o,c=i,u=i){if(na.test(t)&&(t=parseFloat(t),t=tn(u.min,u.max,t/100)-u.min),typeof t!="number")return;let f=tn(c.min,c.max,s);i===c&&(f-=t),i.min=ly(i.min,t,n,f,o),i.max=ly(i.max,t,n,f,o)}function cy(i,t,[n,s,o],c,u){mw(i,t[n],t[s],t[o],t.scale,c,u)}const gw=["x","scaleX","originX"],vw=["y","scaleY","originY"];function uy(i,t,n,s){cy(i.x,t,gw,n?n.x:void 0,s?s.x:void 0),cy(i.y,t,vw,n?n.y:void 0,s?s.y:void 0)}function fy(i){return i.translate===0&&i.scale===1}function JM(i){return fy(i.x)&&fy(i.y)}function hy(i,t){return i.min===t.min&&i.max===t.max}function _w(i,t){return hy(i.x,t.x)&&hy(i.y,t.y)}function dy(i,t){return Math.round(i.min)===Math.round(t.min)&&Math.round(i.max)===Math.round(t.max)}function $M(i,t){return dy(i.x,t.x)&&dy(i.y,t.y)}function py(i){return Yn(i.x)/Yn(i.y)}function my(i,t){return i.translate===t.translate&&i.scale===t.scale&&i.originPoint===t.originPoint}class xw{constructor(){this.members=[]}add(t){Im(this.members,t),t.scheduleRender()}remove(t){if(zm(this.members,t),t===this.prevLead&&(this.prevLead=void 0),t===this.lead){const n=this.members[this.members.length-1];n&&this.promote(n)}}relegate(t){const n=this.members.findIndex(o=>t===o);if(n===0)return!1;let s;for(let o=n;o>=0;o--){const c=this.members[o];if(c.isPresent!==!1){s=c;break}}return s?(this.promote(s),!0):!1}promote(t,n){const s=this.lead;if(t!==s&&(this.prevLead=s,this.lead=t,t.show(),s)){s.instance&&s.scheduleRender(),t.scheduleRender(),t.resumeFrom=s,n&&(t.resumeFrom.preserveOpacity=!0),s.snapshot&&(t.snapshot=s.snapshot,t.snapshot.latestValues=s.animationValues||s.latestValues),t.root&&t.root.isUpdating&&(t.isLayoutDirty=!0);const{crossfade:o}=t.options;o===!1&&s.hide()}}exitAnimationComplete(){this.members.forEach(t=>{const{options:n,resumingFrom:s}=t;n.onExitComplete&&n.onExitComplete(),s&&s.options.onExitComplete&&s.options.onExitComplete()})}scheduleRender(){this.members.forEach(t=>{t.instance&&t.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function yw(i,t,n){let s="";const o=i.x.translate/t.x,c=i.y.translate/t.y,u=(n==null?void 0:n.z)||0;if((o||c||u)&&(s=`translate3d(${o}px, ${c}px, ${u}px) `),(t.x!==1||t.y!==1)&&(s+=`scale(${1/t.x}, ${1/t.y}) `),n){const{transformPerspective:d,rotate:g,rotateX:v,rotateY:_,skewX:y,skewY:E}=n;d&&(s=`perspective(${d}px) ${s}`),g&&(s+=`rotate(${g}deg) `),v&&(s+=`rotateX(${v}deg) `),_&&(s+=`rotateY(${_}deg) `),y&&(s+=`skewX(${y}deg) `),E&&(s+=`skewY(${E}deg) `)}const f=i.x.scale*t.x,p=i.y.scale*t.y;return(f!==1||p!==1)&&(s+=`scale(${f}, ${p})`),s||"none"}const Od=["","X","Y","Z"],Sw=1e3;let Mw=0;function Fd(i,t,n,s){const{latestValues:o}=t;o[i]&&(n[i]=o[i],t.setStaticValue(i,0),s&&(s[i]=0))}function tE(i){if(i.hasCheckedOptimisedAppear=!0,i.root===i)return;const{visualElement:t}=i.options;if(!t)return;const n=zM(t);if(window.MotionHasOptimisedAnimation(n,"transform")){const{layout:o,layoutId:c}=i.options;window.MotionCancelOptimisedAnimation(n,"transform",Je,!(o||c))}const{parent:s}=i;s&&!s.hasCheckedOptimisedAppear&&tE(s)}function eE({attachResizeListener:i,defaultParent:t,measureScroll:n,checkIsScrollRoot:s,resetTransform:o}){return class{constructor(u={},f=t==null?void 0:t()){this.id=Mw++,this.animationId=0,this.animationCommitId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.layoutVersion=0,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,this.nodes.forEach(bw),this.nodes.forEach(ww),this.nodes.forEach(Dw),this.nodes.forEach(Aw)},this.resolvedRelativeTargetAt=0,this.linkedParentVersion=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=u,this.root=f?f.root||f:this,this.path=f?[...f.path,f]:[],this.parent=f,this.depth=f?f.depth+1:0;for(let p=0;p<this.path.length;p++)this.path[p].shouldResetTransform=!0;this.root===this&&(this.nodes=new cw)}addEventListener(u,f){return this.eventHandlers.has(u)||this.eventHandlers.set(u,new Gm),this.eventHandlers.get(u).add(f)}notifyListeners(u,...f){const p=this.eventHandlers.get(u);p&&p.notify(...f)}hasListeners(u){return this.eventHandlers.has(u)}mount(u){if(this.instance)return;this.isSVG=gM(u)&&!dR(u),this.instance=u;const{layoutId:f,layout:p,visualElement:d}=this.options;if(d&&!d.current&&d.mount(u),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),this.root.hasTreeAnimated&&(p||f)&&(this.isLayoutDirty=!0),i){let g,v=0;const _=()=>this.root.updateBlockedByResize=!1;Je.read(()=>{v=window.innerWidth}),i(u,()=>{const y=window.innerWidth;y!==v&&(v=y,this.root.updateBlockedByResize=!0,g&&g(),g=uw(_,250),Vu.hasAnimatedSinceResize&&(Vu.hasAnimatedSinceResize=!1,this.nodes.forEach(_y)))})}f&&this.root.registerSharedNode(f,this),this.options.animate!==!1&&d&&(f||p)&&this.addEventListener("didUpdate",({delta:g,hasLayoutChanged:v,hasRelativeLayoutChanged:_,layout:y})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const E=this.options.transition||d.getDefaultTransition()||Ow,{onLayoutAnimationStart:b,onLayoutAnimationComplete:S}=d.getProps(),x=!this.targetLayout||!$M(this.targetLayout,y),D=!v&&_;if(this.options.layoutRoot||this.resumeFrom||D||v&&(x||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0);const w={...tg(E,"layout"),onPlay:b,onComplete:S};(d.shouldReduceMotion||this.options.layoutRoot)&&(w.delay=0,w.type=!1),this.startAnimation(w),this.setAnimationOrigin(g,D)}else v||_y(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=y})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const u=this.getStack();u&&u.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,this.eventHandlers.clear(),Ms(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(Uw),this.animationId++)}getTransformTemplate(){const{visualElement:u}=this.options;return u&&u.getProps().transformTemplate}willUpdate(u=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&tE(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let g=0;g<this.path.length;g++){const v=this.path[g];v.shouldResetTransform=!0,v.updateScroll("snapshot"),v.options.layoutRoot&&v.willUpdate(!1)}const{layoutId:f,layout:p}=this.options;if(f===void 0&&!p)return;const d=this.getTransformTemplate();this.prevTransformTemplateValue=d?d(this.latestValues,""):void 0,this.updateSnapshot(),u&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(gy);return}if(this.animationId<=this.animationCommitId){this.nodes.forEach(vy);return}this.animationCommitId=this.animationId,this.isUpdating?(this.isUpdating=!1,this.nodes.forEach(Cw),this.nodes.forEach(Ew),this.nodes.forEach(Tw)):this.nodes.forEach(vy),this.clearAllSnapshots();const f=ni.now();On.delta=Oa(0,1e3/60,f-On.timestamp),On.timestamp=f,On.isProcessing=!0,Td.update.process(On),Td.preRender.process(On),Td.render.process(On),On.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,ng.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(Rw),this.sharedNodes.forEach(Lw)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,Je.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){Je.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure(),this.snapshot&&!Yn(this.snapshot.measuredBox.x)&&!Yn(this.snapshot.measuredBox.y)&&(this.snapshot=void 0))}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let p=0;p<this.path.length;p++)this.path[p].updateScroll();const u=this.layout;this.layout=this.measure(!1),this.layoutVersion++,this.layoutCorrected=yn(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:f}=this.options;f&&f.notify("LayoutMeasure",this.layout.layoutBox,u?u.layoutBox:void 0)}updateScroll(u="measure"){let f=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===u&&(f=!1),f&&this.instance){const p=s(this.instance);this.scroll={animationId:this.root.animationId,phase:u,isRoot:p,offset:n(this.instance),wasRoot:this.scroll?this.scroll.isRoot:p}}}resetTransform(){if(!o)return;const u=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,f=this.projectionDelta&&!JM(this.projectionDelta),p=this.getTransformTemplate(),d=p?p(this.latestValues,""):void 0,g=d!==this.prevTransformTemplateValue;u&&this.instance&&(f||Qs(this.latestValues)||g)&&(o(this.instance,d),this.shouldResetTransform=!1,this.scheduleRender())}measure(u=!0){const f=this.measurePageBox();let p=this.removeElementScroll(f);return u&&(p=this.removeTransform(p)),Fw(p),{animationId:this.root.animationId,measuredBox:f,layoutBox:p,latestValues:{},source:this.id}}measurePageBox(){var d;const{visualElement:u}=this.options;if(!u)return yn();const f=u.measureViewportBox();if(!(((d=this.scroll)==null?void 0:d.wasRoot)||this.path.some(Bw))){const{scroll:g}=this.root;g&&(ro(f.x,g.offset.x),ro(f.y,g.offset.y))}return f}removeElementScroll(u){var p;const f=yn();if(zi(f,u),(p=this.scroll)!=null&&p.wasRoot)return f;for(let d=0;d<this.path.length;d++){const g=this.path[d],{scroll:v,options:_}=g;g!==this.root&&v&&_.layoutScroll&&(v.wasRoot&&zi(f,u),ro(f.x,v.offset.x),ro(f.y,v.offset.y))}return f}applyTransform(u,f=!1){const p=yn();zi(p,u);for(let d=0;d<this.path.length;d++){const g=this.path[d];!f&&g.options.layoutScroll&&g.scroll&&g!==g.root&&oo(p,{x:-g.scroll.offset.x,y:-g.scroll.offset.y}),Qs(g.latestValues)&&oo(p,g.latestValues)}return Qs(this.latestValues)&&oo(p,this.latestValues),p}removeTransform(u){const f=yn();zi(f,u);for(let p=0;p<this.path.length;p++){const d=this.path[p];if(!d.instance||!Qs(d.latestValues))continue;Dp(d.latestValues)&&d.updateSnapshot();const g=yn(),v=d.measurePageBox();zi(g,v),uy(f,d.latestValues,d.snapshot?d.snapshot.layoutBox:void 0,g)}return Qs(this.latestValues)&&uy(f,this.latestValues),f}setTargetDelta(u){this.targetDelta=u,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(u){this.options={...this.options,...u,crossfade:u.crossfade!==void 0?u.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==On.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(u=!1){var y;const f=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=f.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=f.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=f.isSharedProjectionDirty);const p=!!this.resumingFrom||this!==f;if(!(u||p&&this.isSharedProjectionDirty||this.isProjectionDirty||(y=this.parent)!=null&&y.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:g,layoutId:v}=this.options;if(!this.layout||!(g||v))return;this.resolvedRelativeTargetAt=On.timestamp;const _=this.getClosestProjectingParent();_&&this.linkedParentVersion!==_.layoutVersion&&!_.options.layoutRoot&&this.removeRelativeTarget(),!this.targetDelta&&!this.relativeTarget&&(_&&_.layout?this.createRelativeTarget(_,this.layout.layoutBox,_.layout.layoutBox):this.removeRelativeTarget()),!(!this.relativeTarget&&!this.targetDelta)&&(this.target||(this.target=yn(),this.targetWithTransforms=yn()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),WC(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):zi(this.target,this.layout.layoutBox),NM(this.target,this.targetDelta)):zi(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget&&(this.attemptToResolveRelativeTarget=!1,_&&!!_.resumingFrom==!!this.resumingFrom&&!_.options.layoutScroll&&_.target&&this.animationProgress!==1?this.createRelativeTarget(_,this.target,_.target):this.relativeParent=this.relativeTarget=void 0))}getClosestProjectingParent(){if(!(!this.parent||Dp(this.parent.latestValues)||LM(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}createRelativeTarget(u,f,p){this.relativeParent=u,this.linkedParentVersion=u.layoutVersion,this.forceRelativeParentToResolveTarget(),this.relativeTarget=yn(),this.relativeTargetOrigin=yn(),$u(this.relativeTargetOrigin,f,p),zi(this.relativeTarget,this.relativeTargetOrigin)}removeRelativeTarget(){this.relativeParent=this.relativeTarget=void 0}calcProjection(){var E;const u=this.getLead(),f=!!this.resumingFrom||this!==u;let p=!0;if((this.isProjectionDirty||(E=this.parent)!=null&&E.isProjectionDirty)&&(p=!1),f&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(p=!1),this.resolvedRelativeTargetAt===On.timestamp&&(p=!1),p)return;const{layout:d,layoutId:g}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(d||g))return;zi(this.layoutCorrected,this.layout.layoutBox);const v=this.treeScale.x,_=this.treeScale.y;iC(this.layoutCorrected,this.treeScale,this.path,f),u.layout&&!u.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(u.target=u.layout.layoutBox,u.targetWithTransforms=yn());const{target:y}=u;if(!y){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(oy(this.prevProjectionDelta.x,this.projectionDelta.x),oy(this.prevProjectionDelta.y,this.projectionDelta.y)),Nl(this.projectionDelta,this.layoutCorrected,y,this.latestValues),(this.treeScale.x!==v||this.treeScale.y!==_||!my(this.projectionDelta.x,this.prevProjectionDelta.x)||!my(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",y))}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(u=!0){var f;if((f=this.options.visualElement)==null||f.scheduleRender(),u){const p=this.getStack();p&&p.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=lo(),this.projectionDelta=lo(),this.projectionDeltaWithTransform=lo()}setAnimationOrigin(u,f=!1){const p=this.snapshot,d=p?p.latestValues:{},g={...this.latestValues},v=lo();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!f;const _=yn(),y=p?p.source:void 0,E=this.layout?this.layout.source:void 0,b=y!==E,S=this.getStack(),x=!S||S.members.length<=1,D=!!(b&&!x&&this.options.crossfade===!0&&!this.path.some(Pw));this.animationProgress=0;let w;this.mixTargetDelta=L=>{const N=L/1e3;xy(v.x,u.x,N),xy(v.y,u.y,N),this.setTargetDelta(v),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&($u(_,this.layout.layoutBox,this.relativeParent.layout.layoutBox),Nw(this.relativeTarget,this.relativeTargetOrigin,_,N),w&&_w(this.relativeTarget,w)&&(this.isProjectionDirty=!1),w||(w=yn()),zi(w,this.relativeTarget)),b&&(this.animationValues=g,hw(g,d,this.latestValues,N,D,x)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=N},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(u){var f,p,d;this.notifyListeners("animationStart"),(f=this.currentAnimation)==null||f.stop(),(d=(p=this.resumingFrom)==null?void 0:p.currentAnimation)==null||d.stop(),this.pendingAnimation&&(Ms(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=Je.update(()=>{Vu.hasAnimatedSinceResize=!0,this.motionValue||(this.motionValue=ho(0)),this.currentAnimation=ow(this.motionValue,[0,1e3],{...u,velocity:0,isSync:!0,onUpdate:g=>{this.mixTargetDelta(g),u.onUpdate&&u.onUpdate(g)},onStop:()=>{},onComplete:()=>{u.onComplete&&u.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const u=this.getStack();u&&u.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(Sw),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const u=this.getLead();let{targetWithTransforms:f,target:p,layout:d,latestValues:g}=u;if(!(!f||!p||!d)){if(this!==u&&this.layout&&d&&nE(this.options.animationType,this.layout.layoutBox,d.layoutBox)){p=this.target||yn();const v=Yn(this.layout.layoutBox.x);p.x.min=u.target.x.min,p.x.max=p.x.min+v;const _=Yn(this.layout.layoutBox.y);p.y.min=u.target.y.min,p.y.max=p.y.min+_}zi(f,p),oo(f,g),Nl(this.projectionDeltaWithTransform,this.layoutCorrected,f,g)}}registerSharedNode(u,f){this.sharedNodes.has(u)||this.sharedNodes.set(u,new xw),this.sharedNodes.get(u).add(f);const d=f.options.initialPromotionConfig;f.promote({transition:d?d.transition:void 0,preserveFollowOpacity:d&&d.shouldPreserveFollowOpacity?d.shouldPreserveFollowOpacity(f):void 0})}isLead(){const u=this.getStack();return u?u.lead===this:!0}getLead(){var f;const{layoutId:u}=this.options;return u?((f=this.getStack())==null?void 0:f.lead)||this:this}getPrevLead(){var f;const{layoutId:u}=this.options;return u?(f=this.getStack())==null?void 0:f.prevLead:void 0}getStack(){const{layoutId:u}=this.options;if(u)return this.root.sharedNodes.get(u)}promote({needsReset:u,transition:f,preserveFollowOpacity:p}={}){const d=this.getStack();d&&d.promote(this,p),u&&(this.projectionDelta=void 0,this.needsReset=!0),f&&this.setOptions({transition:f})}relegate(){const u=this.getStack();return u?u.relegate(this):!1}resetSkewAndRotation(){const{visualElement:u}=this.options;if(!u)return;let f=!1;const{latestValues:p}=u;if((p.z||p.rotate||p.rotateX||p.rotateY||p.rotateZ||p.skewX||p.skewY)&&(f=!0),!f)return;const d={};p.z&&Fd("z",u,d,this.animationValues);for(let g=0;g<Od.length;g++)Fd(`rotate${Od[g]}`,u,d,this.animationValues),Fd(`skew${Od[g]}`,u,d,this.animationValues);u.render();for(const g in d)u.setStaticValue(g,d[g]),this.animationValues&&(this.animationValues[g]=d[g]);u.scheduleRender()}applyProjectionStyles(u,f){if(!this.instance||this.isSVG)return;if(!this.isVisible){u.visibility="hidden";return}const p=this.getTransformTemplate();if(this.needsReset){this.needsReset=!1,u.visibility="",u.opacity="",u.pointerEvents=zu(f==null?void 0:f.pointerEvents)||"",u.transform=p?p(this.latestValues,""):"none";return}const d=this.getLead();if(!this.projectionDelta||!this.layout||!d.target){this.options.layoutId&&(u.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,u.pointerEvents=zu(f==null?void 0:f.pointerEvents)||""),this.hasProjected&&!Qs(this.latestValues)&&(u.transform=p?p({},""):"none",this.hasProjected=!1);return}u.visibility="";const g=d.animationValues||d.latestValues;this.applyTransformsToTarget();let v=yw(this.projectionDeltaWithTransform,this.treeScale,g);p&&(v=p(g,v)),u.transform=v;const{x:_,y}=this.projectionDelta;u.transformOrigin=`${_.origin*100}% ${y.origin*100}% 0`,d.animationValues?u.opacity=d===this?g.opacity??this.latestValues.opacity??1:this.preserveOpacity?this.latestValues.opacity:g.opacityExit:u.opacity=d===this?g.opacity!==void 0?g.opacity:"":g.opacityExit!==void 0?g.opacityExit:0;for(const E in wp){if(g[E]===void 0)continue;const{correct:b,applyTo:S,isCSSVariable:x}=wp[E],D=v==="none"?g[E]:b(g[E],d);if(S){const w=S.length;for(let L=0;L<w;L++)u[S[L]]=D}else x?this.options.visualElement.renderState.vars[E]=D:u[E]=D}this.options.layoutId&&(u.pointerEvents=d===this?zu(f==null?void 0:f.pointerEvents)||"":"none")}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(u=>{var f;return(f=u.currentAnimation)==null?void 0:f.stop()}),this.root.nodes.forEach(gy),this.root.sharedNodes.clear()}}}function Ew(i){i.updateLayout()}function Tw(i){var n;const t=((n=i.resumeFrom)==null?void 0:n.snapshot)||i.snapshot;if(i.isLead()&&i.layout&&t&&i.hasListeners("didUpdate")){const{layoutBox:s,measuredBox:o}=i.layout,{animationType:c}=i.options,u=t.source!==i.layout.source;c==="size"?Ci(v=>{const _=u?t.measuredBox[v]:t.layoutBox[v],y=Yn(_);_.min=s[v].min,_.max=_.min+y}):nE(c,t.layoutBox,s)&&Ci(v=>{const _=u?t.measuredBox[v]:t.layoutBox[v],y=Yn(s[v]);_.max=_.min+y,i.relativeTarget&&!i.currentAnimation&&(i.isProjectionDirty=!0,i.relativeTarget[v].max=i.relativeTarget[v].min+y)});const f=lo();Nl(f,s,t.layoutBox);const p=lo();u?Nl(p,i.applyTransform(o,!0),t.measuredBox):Nl(p,s,t.layoutBox);const d=!JM(f);let g=!1;if(!i.resumeFrom){const v=i.getClosestProjectingParent();if(v&&!v.resumeFrom){const{snapshot:_,layout:y}=v;if(_&&y){const E=yn();$u(E,t.layoutBox,_.layoutBox);const b=yn();$u(b,s,y.layoutBox),$M(E,b)||(g=!0),v.options.layoutRoot&&(i.relativeTarget=b,i.relativeTargetOrigin=E,i.relativeParent=v)}}}i.notifyListeners("didUpdate",{layout:s,snapshot:t,delta:p,layoutDelta:f,hasLayoutChanged:d,hasRelativeLayoutChanged:g})}else if(i.isLead()){const{onExitComplete:s}=i.options;s&&s()}i.options.transition=void 0}function bw(i){i.parent&&(i.isProjecting()||(i.isProjectionDirty=i.parent.isProjectionDirty),i.isSharedProjectionDirty||(i.isSharedProjectionDirty=!!(i.isProjectionDirty||i.parent.isProjectionDirty||i.parent.isSharedProjectionDirty)),i.isTransformDirty||(i.isTransformDirty=i.parent.isTransformDirty))}function Aw(i){i.isProjectionDirty=i.isSharedProjectionDirty=i.isTransformDirty=!1}function Rw(i){i.clearSnapshot()}function gy(i){i.clearMeasurements()}function vy(i){i.isLayoutDirty=!1}function Cw(i){const{visualElement:t}=i.options;t&&t.getProps().onBeforeLayoutMeasure&&t.notify("BeforeLayoutMeasure"),i.resetTransform()}function _y(i){i.finishAnimation(),i.targetDelta=i.relativeTarget=i.target=void 0,i.isProjectionDirty=!0}function ww(i){i.resolveTargetDelta()}function Dw(i){i.calcProjection()}function Uw(i){i.resetSkewAndRotation()}function Lw(i){i.removeLeadSnapshot()}function xy(i,t,n){i.translate=tn(t.translate,0,n),i.scale=tn(t.scale,1,n),i.origin=t.origin,i.originPoint=t.originPoint}function yy(i,t,n,s){i.min=tn(t.min,n.min,s),i.max=tn(t.max,n.max,s)}function Nw(i,t,n,s){yy(i.x,t.x,n.x,s),yy(i.y,t.y,n.y,s)}function Pw(i){return i.animationValues&&i.animationValues.opacityExit!==void 0}const Ow={duration:.45,ease:[.4,0,.1,1]},Sy=i=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(i),My=Sy("applewebkit/")&&!Sy("chrome/")?Math.round:Li;function Ey(i){i.min=My(i.min),i.max=My(i.max)}function Fw(i){Ey(i.x),Ey(i.y)}function nE(i,t,n){return i==="position"||i==="preserve-aspect"&&!XC(py(t),py(n),.2)}function Bw(i){var t;return i!==i.root&&((t=i.scroll)==null?void 0:t.wasRoot)}const Iw=eE({attachResizeListener:(i,t)=>Il(i,"resize",t),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),Bd={current:void 0},iE=eE({measureScroll:i=>({x:i.scrollLeft,y:i.scrollTop}),defaultParent:()=>{if(!Bd.current){const i=new Iw({});i.mount(window),i.setOptions({layoutScroll:!0}),Bd.current=i}return Bd.current},resetTransform:(i,t)=>{i.style.transform=t!==void 0?t:"none"},checkIsScrollRoot:i=>window.getComputedStyle(i).position==="fixed"}),zw={pan:{Feature:sw},drag:{Feature:aw,ProjectionNode:iE,MeasureLayout:ZM}};function Ty(i,t,n){const{props:s}=i;i.animationState&&s.whileHover&&i.animationState.setActive("whileHover",n==="Start");const o="onHover"+n,c=s[o];c&&Je.postRender(()=>c(t,Yl(t)))}class Vw extends bs{mount(){const{current:t}=this.node;t&&(this.unmount=lR(t,(n,s)=>(Ty(this.node,s,"Start"),o=>Ty(this.node,o,"End"))))}unmount(){}}class Hw extends bs{constructor(){super(...arguments),this.isActive=!1}onFocus(){let t=!1;try{t=this.node.current.matches(":focus-visible")}catch{t=!0}!t||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=Xl(Il(this.node.current,"focus",()=>this.onFocus()),Il(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function by(i,t,n){const{props:s}=i;if(i.current instanceof HTMLButtonElement&&i.current.disabled)return;i.animationState&&s.whileTap&&i.animationState.setActive("whileTap",n==="Start");const o="onTap"+(n==="End"?"":n),c=s[o];c&&Je.postRender(()=>c(t,Yl(t)))}class Gw extends bs{mount(){const{current:t}=this.node;t&&(this.unmount=hR(t,(n,s)=>(by(this.node,s,"Start"),(o,{success:c})=>by(this.node,o,c?"End":"Cancel")),{useGlobalTarget:this.node.props.globalTapTarget}))}unmount(){}}const Bp=new WeakMap,Id=new WeakMap,kw=i=>{const t=Bp.get(i.target);t&&t(i)},Xw=i=>{i.forEach(kw)};function Ww({root:i,...t}){const n=i||document;Id.has(n)||Id.set(n,{});const s=Id.get(n),o=JSON.stringify(t);return s[o]||(s[o]=new IntersectionObserver(Xw,{root:i,...t})),s[o]}function qw(i,t,n){const s=Ww(t);return Bp.set(i,n),s.observe(i),()=>{Bp.delete(i),s.unobserve(i)}}const Yw={some:0,all:1};class jw extends bs{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:t={}}=this.node.getProps(),{root:n,margin:s,amount:o="some",once:c}=t,u={root:n?n.current:void 0,rootMargin:s,threshold:typeof o=="number"?o:Yw[o]},f=p=>{const{isIntersecting:d}=p;if(this.isInView===d||(this.isInView=d,c&&!d&&this.hasEnteredView))return;d&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",d);const{onViewportEnter:g,onViewportLeave:v}=this.node.getProps(),_=d?g:v;_&&_(p)};return qw(this.node.current,u,f)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:t,prevProps:n}=this.node;["amount","margin","root"].some(Zw(t,n))&&this.startObserver()}unmount(){}}function Zw({viewport:i={}},{viewport:t={}}={}){return n=>i[n]!==t[n]}const Kw={inView:{Feature:jw},tap:{Feature:Gw},focus:{Feature:Hw},hover:{Feature:Vw}},Qw={layout:{ProjectionNode:iE,MeasureLayout:ZM}},Jw={...IC,...Kw,...zw,...Qw},qn=tC(Jw,dC);var Xn=(i=>(i.IDLE="IDLE",i.COUNTDOWN="COUNTDOWN",i.CELEBRATING="CELEBRATING",i))(Xn||{});/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const pg="182",$w=0,Ay=1,t3=2,Hu=1,e3=2,Cl=3,Ts=0,ii=1,Da=2,La=0,uo=1,zl=2,Ry=3,Cy=4,n3=5,$s=100,i3=101,a3=102,s3=103,r3=104,o3=200,l3=201,c3=202,u3=203,Ip=204,zp=205,f3=206,h3=207,d3=208,p3=209,m3=210,g3=211,v3=212,_3=213,x3=214,Vp=0,Hp=1,Gp=2,mo=3,kp=4,Xp=5,Wp=6,qp=7,aE=0,y3=1,S3=2,ia=0,sE=1,rE=2,oE=3,lE=4,cE=5,uE=6,fE=7,hE=300,or=301,go=302,Yp=303,jp=304,uf=306,Zp=1e3,Ua=1001,Kp=1002,Fn=1003,M3=1004,pu=1005,Gn=1006,zd=1007,ir=1008,Di=1009,dE=1010,pE=1011,Vl=1012,mg=1013,sa=1014,$i=1015,Ba=1016,gg=1017,vg=1018,Hl=1020,mE=35902,gE=35899,vE=1021,_E=1022,Wi=1023,Ia=1026,ar=1027,xE=1028,_g=1029,vo=1030,xg=1031,yg=1033,Gu=33776,ku=33777,Xu=33778,Wu=33779,Qp=35840,Jp=35841,$p=35842,tm=35843,em=36196,nm=37492,im=37496,am=37488,sm=37489,rm=37490,om=37491,lm=37808,cm=37809,um=37810,fm=37811,hm=37812,dm=37813,pm=37814,mm=37815,gm=37816,vm=37817,_m=37818,xm=37819,ym=37820,Sm=37821,Mm=36492,Em=36494,Tm=36495,bm=36283,Am=36284,Rm=36285,Cm=36286,E3=3200,T3=0,b3=1,ys="",wi="srgb",_o="srgb-linear",tf="linear",ze="srgb",Xr=7680,wy=519,A3=512,R3=513,C3=514,Sg=515,w3=516,D3=517,Mg=518,U3=519,Dy=35044,Uy="300 es",ta=2e3,ef=2001;function yE(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function nf(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function L3(){const i=nf("canvas");return i.style.display="block",i}const Ly={};function Ny(...i){const t="THREE."+i.shift();console.log(t,...i)}function oe(...i){const t="THREE."+i.shift();console.warn(t,...i)}function Ce(...i){const t="THREE."+i.shift();console.error(t,...i)}function Gl(...i){const t=i.join(" ");t in Ly||(Ly[t]=!0,oe(...i))}function N3(i,t,n){return new Promise(function(s,o){function c(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:o();break;case i.TIMEOUT_EXPIRED:setTimeout(c,n);break;default:s()}}setTimeout(c,n)})}class Eo{addEventListener(t,n){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[t]===void 0&&(s[t]=[]),s[t].indexOf(n)===-1&&s[t].push(n)}hasEventListener(t,n){const s=this._listeners;return s===void 0?!1:s[t]!==void 0&&s[t].indexOf(n)!==-1}removeEventListener(t,n){const s=this._listeners;if(s===void 0)return;const o=s[t];if(o!==void 0){const c=o.indexOf(n);c!==-1&&o.splice(c,1)}}dispatchEvent(t){const n=this._listeners;if(n===void 0)return;const s=n[t.type];if(s!==void 0){t.target=this;const o=s.slice(0);for(let c=0,u=o.length;c<u;c++)o[c].call(this,t);t.target=null}}}const zn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Vd=Math.PI/180,wm=180/Math.PI;function jl(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(zn[i&255]+zn[i>>8&255]+zn[i>>16&255]+zn[i>>24&255]+"-"+zn[t&255]+zn[t>>8&255]+"-"+zn[t>>16&15|64]+zn[t>>24&255]+"-"+zn[n&63|128]+zn[n>>8&255]+"-"+zn[n>>16&255]+zn[n>>24&255]+zn[s&255]+zn[s>>8&255]+zn[s>>16&255]+zn[s>>24&255]).toLowerCase()}function Me(i,t,n){return Math.max(t,Math.min(n,i))}function P3(i,t){return(i%t+t)%t}function Hd(i,t,n){return(1-n)*i+n*t}function yl(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function ei(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class Xe{constructor(t=0,n=0){Xe.prototype.isVector2=!0,this.x=t,this.y=n}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,n){return this.x=t,this.y=n,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const n=this.x,s=this.y,o=t.elements;return this.x=o[0]*n+o[3]*s+o[6],this.y=o[1]*n+o[4]*s+o[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,n){return this.x=Me(this.x,t.x,n.x),this.y=Me(this.y,t.y,n.y),this}clampScalar(t,n){return this.x=Me(this.x,t,n),this.y=Me(this.y,t,n),this}clampLength(t,n){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Me(s,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const s=this.dot(t)/n;return Math.acos(Me(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,s=this.y-t.y;return n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this}lerpVectors(t,n,s){return this.x=t.x+(n.x-t.x)*s,this.y=t.y+(n.y-t.y)*s,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this}rotateAround(t,n){const s=Math.cos(n),o=Math.sin(n),c=this.x-t.x,u=this.y-t.y;return this.x=c*s-u*o+t.x,this.y=c*o+u*s+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Zl{constructor(t=0,n=0,s=0,o=1){this.isQuaternion=!0,this._x=t,this._y=n,this._z=s,this._w=o}static slerpFlat(t,n,s,o,c,u,f){let p=s[o+0],d=s[o+1],g=s[o+2],v=s[o+3],_=c[u+0],y=c[u+1],E=c[u+2],b=c[u+3];if(f<=0){t[n+0]=p,t[n+1]=d,t[n+2]=g,t[n+3]=v;return}if(f>=1){t[n+0]=_,t[n+1]=y,t[n+2]=E,t[n+3]=b;return}if(v!==b||p!==_||d!==y||g!==E){let S=p*_+d*y+g*E+v*b;S<0&&(_=-_,y=-y,E=-E,b=-b,S=-S);let x=1-f;if(S<.9995){const D=Math.acos(S),w=Math.sin(D);x=Math.sin(x*D)/w,f=Math.sin(f*D)/w,p=p*x+_*f,d=d*x+y*f,g=g*x+E*f,v=v*x+b*f}else{p=p*x+_*f,d=d*x+y*f,g=g*x+E*f,v=v*x+b*f;const D=1/Math.sqrt(p*p+d*d+g*g+v*v);p*=D,d*=D,g*=D,v*=D}}t[n]=p,t[n+1]=d,t[n+2]=g,t[n+3]=v}static multiplyQuaternionsFlat(t,n,s,o,c,u){const f=s[o],p=s[o+1],d=s[o+2],g=s[o+3],v=c[u],_=c[u+1],y=c[u+2],E=c[u+3];return t[n]=f*E+g*v+p*y-d*_,t[n+1]=p*E+g*_+d*v-f*y,t[n+2]=d*E+g*y+f*_-p*v,t[n+3]=g*E-f*v-p*_-d*y,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,n,s,o){return this._x=t,this._y=n,this._z=s,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,n=!0){const s=t._x,o=t._y,c=t._z,u=t._order,f=Math.cos,p=Math.sin,d=f(s/2),g=f(o/2),v=f(c/2),_=p(s/2),y=p(o/2),E=p(c/2);switch(u){case"XYZ":this._x=_*g*v+d*y*E,this._y=d*y*v-_*g*E,this._z=d*g*E+_*y*v,this._w=d*g*v-_*y*E;break;case"YXZ":this._x=_*g*v+d*y*E,this._y=d*y*v-_*g*E,this._z=d*g*E-_*y*v,this._w=d*g*v+_*y*E;break;case"ZXY":this._x=_*g*v-d*y*E,this._y=d*y*v+_*g*E,this._z=d*g*E+_*y*v,this._w=d*g*v-_*y*E;break;case"ZYX":this._x=_*g*v-d*y*E,this._y=d*y*v+_*g*E,this._z=d*g*E-_*y*v,this._w=d*g*v+_*y*E;break;case"YZX":this._x=_*g*v+d*y*E,this._y=d*y*v+_*g*E,this._z=d*g*E-_*y*v,this._w=d*g*v-_*y*E;break;case"XZY":this._x=_*g*v-d*y*E,this._y=d*y*v-_*g*E,this._z=d*g*E+_*y*v,this._w=d*g*v+_*y*E;break;default:oe("Quaternion: .setFromEuler() encountered an unknown order: "+u)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,n){const s=n/2,o=Math.sin(s);return this._x=t.x*o,this._y=t.y*o,this._z=t.z*o,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(t){const n=t.elements,s=n[0],o=n[4],c=n[8],u=n[1],f=n[5],p=n[9],d=n[2],g=n[6],v=n[10],_=s+f+v;if(_>0){const y=.5/Math.sqrt(_+1);this._w=.25/y,this._x=(g-p)*y,this._y=(c-d)*y,this._z=(u-o)*y}else if(s>f&&s>v){const y=2*Math.sqrt(1+s-f-v);this._w=(g-p)/y,this._x=.25*y,this._y=(o+u)/y,this._z=(c+d)/y}else if(f>v){const y=2*Math.sqrt(1+f-s-v);this._w=(c-d)/y,this._x=(o+u)/y,this._y=.25*y,this._z=(p+g)/y}else{const y=2*Math.sqrt(1+v-s-f);this._w=(u-o)/y,this._x=(c+d)/y,this._y=(p+g)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(t,n){let s=t.dot(n)+1;return s<1e-8?(s=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=s):(this._x=0,this._y=-t.z,this._z=t.y,this._w=s)):(this._x=t.y*n.z-t.z*n.y,this._y=t.z*n.x-t.x*n.z,this._z=t.x*n.y-t.y*n.x,this._w=s),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Me(this.dot(t),-1,1)))}rotateTowards(t,n){const s=this.angleTo(t);if(s===0)return this;const o=Math.min(1,n/s);return this.slerp(t,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,n){const s=t._x,o=t._y,c=t._z,u=t._w,f=n._x,p=n._y,d=n._z,g=n._w;return this._x=s*g+u*f+o*d-c*p,this._y=o*g+u*p+c*f-s*d,this._z=c*g+u*d+s*p-o*f,this._w=u*g-s*f-o*p-c*d,this._onChangeCallback(),this}slerp(t,n){if(n<=0)return this;if(n>=1)return this.copy(t);let s=t._x,o=t._y,c=t._z,u=t._w,f=this.dot(t);f<0&&(s=-s,o=-o,c=-c,u=-u,f=-f);let p=1-n;if(f<.9995){const d=Math.acos(f),g=Math.sin(d);p=Math.sin(p*d)/g,n=Math.sin(n*d)/g,this._x=this._x*p+s*n,this._y=this._y*p+o*n,this._z=this._z*p+c*n,this._w=this._w*p+u*n,this._onChangeCallback()}else this._x=this._x*p+s*n,this._y=this._y*p+o*n,this._z=this._z*p+c*n,this._w=this._w*p+u*n,this.normalize();return this}slerpQuaternions(t,n,s){return this.copy(t).slerp(n,s)}random(){const t=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),s=Math.random(),o=Math.sqrt(1-s),c=Math.sqrt(s);return this.set(o*Math.sin(t),o*Math.cos(t),c*Math.sin(n),c*Math.cos(n))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,n=0){return this._x=t[n],this._y=t[n+1],this._z=t[n+2],this._w=t[n+3],this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._w,t}fromBufferAttribute(t,n){return this._x=t.getX(n),this._y=t.getY(n),this._z=t.getZ(n),this._w=t.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class st{constructor(t=0,n=0,s=0){st.prototype.isVector3=!0,this.x=t,this.y=n,this.z=s}set(t,n,s){return s===void 0&&(s=this.z),this.x=t,this.y=n,this.z=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,n){return this.x=t.x*n.x,this.y=t.y*n.y,this.z=t.z*n.z,this}applyEuler(t){return this.applyQuaternion(Py.setFromEuler(t))}applyAxisAngle(t,n){return this.applyQuaternion(Py.setFromAxisAngle(t,n))}applyMatrix3(t){const n=this.x,s=this.y,o=this.z,c=t.elements;return this.x=c[0]*n+c[3]*s+c[6]*o,this.y=c[1]*n+c[4]*s+c[7]*o,this.z=c[2]*n+c[5]*s+c[8]*o,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const n=this.x,s=this.y,o=this.z,c=t.elements,u=1/(c[3]*n+c[7]*s+c[11]*o+c[15]);return this.x=(c[0]*n+c[4]*s+c[8]*o+c[12])*u,this.y=(c[1]*n+c[5]*s+c[9]*o+c[13])*u,this.z=(c[2]*n+c[6]*s+c[10]*o+c[14])*u,this}applyQuaternion(t){const n=this.x,s=this.y,o=this.z,c=t.x,u=t.y,f=t.z,p=t.w,d=2*(u*o-f*s),g=2*(f*n-c*o),v=2*(c*s-u*n);return this.x=n+p*d+u*v-f*g,this.y=s+p*g+f*d-c*v,this.z=o+p*v+c*g-u*d,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const n=this.x,s=this.y,o=this.z,c=t.elements;return this.x=c[0]*n+c[4]*s+c[8]*o,this.y=c[1]*n+c[5]*s+c[9]*o,this.z=c[2]*n+c[6]*s+c[10]*o,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,n){return this.x=Me(this.x,t.x,n.x),this.y=Me(this.y,t.y,n.y),this.z=Me(this.z,t.z,n.z),this}clampScalar(t,n){return this.x=Me(this.x,t,n),this.y=Me(this.y,t,n),this.z=Me(this.z,t,n),this}clampLength(t,n){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Me(s,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this}lerpVectors(t,n,s){return this.x=t.x+(n.x-t.x)*s,this.y=t.y+(n.y-t.y)*s,this.z=t.z+(n.z-t.z)*s,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,n){const s=t.x,o=t.y,c=t.z,u=n.x,f=n.y,p=n.z;return this.x=o*p-c*f,this.y=c*u-s*p,this.z=s*f-o*u,this}projectOnVector(t){const n=t.lengthSq();if(n===0)return this.set(0,0,0);const s=t.dot(this)/n;return this.copy(t).multiplyScalar(s)}projectOnPlane(t){return Gd.copy(this).projectOnVector(t),this.sub(Gd)}reflect(t){return this.sub(Gd.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const s=this.dot(t)/n;return Math.acos(Me(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,s=this.y-t.y,o=this.z-t.z;return n*n+s*s+o*o}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,n,s){const o=Math.sin(n)*t;return this.x=o*Math.sin(s),this.y=Math.cos(n)*t,this.z=o*Math.cos(s),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,n,s){return this.x=t*Math.sin(n),this.y=s,this.z=t*Math.cos(n),this}setFromMatrixPosition(t){const n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(t){const n=this.setFromMatrixColumn(t,0).length(),s=this.setFromMatrixColumn(t,1).length(),o=this.setFromMatrixColumn(t,2).length();return this.x=n,this.y=s,this.z=o,this}setFromMatrixColumn(t,n){return this.fromArray(t.elements,n*4)}setFromMatrix3Column(t,n){return this.fromArray(t.elements,n*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,n=Math.random()*2-1,s=Math.sqrt(1-n*n);return this.x=s*Math.cos(t),this.y=n,this.z=s*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Gd=new st,Py=new Zl;class he{constructor(t,n,s,o,c,u,f,p,d){he.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,n,s,o,c,u,f,p,d)}set(t,n,s,o,c,u,f,p,d){const g=this.elements;return g[0]=t,g[1]=o,g[2]=f,g[3]=n,g[4]=c,g[5]=p,g[6]=s,g[7]=u,g[8]=d,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const n=this.elements,s=t.elements;return n[0]=s[0],n[1]=s[1],n[2]=s[2],n[3]=s[3],n[4]=s[4],n[5]=s[5],n[6]=s[6],n[7]=s[7],n[8]=s[8],this}extractBasis(t,n,s){return t.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const n=t.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const s=t.elements,o=n.elements,c=this.elements,u=s[0],f=s[3],p=s[6],d=s[1],g=s[4],v=s[7],_=s[2],y=s[5],E=s[8],b=o[0],S=o[3],x=o[6],D=o[1],w=o[4],L=o[7],N=o[2],B=o[5],P=o[8];return c[0]=u*b+f*D+p*N,c[3]=u*S+f*w+p*B,c[6]=u*x+f*L+p*P,c[1]=d*b+g*D+v*N,c[4]=d*S+g*w+v*B,c[7]=d*x+g*L+v*P,c[2]=_*b+y*D+E*N,c[5]=_*S+y*w+E*B,c[8]=_*x+y*L+E*P,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[3]*=t,n[6]*=t,n[1]*=t,n[4]*=t,n[7]*=t,n[2]*=t,n[5]*=t,n[8]*=t,this}determinant(){const t=this.elements,n=t[0],s=t[1],o=t[2],c=t[3],u=t[4],f=t[5],p=t[6],d=t[7],g=t[8];return n*u*g-n*f*d-s*c*g+s*f*p+o*c*d-o*u*p}invert(){const t=this.elements,n=t[0],s=t[1],o=t[2],c=t[3],u=t[4],f=t[5],p=t[6],d=t[7],g=t[8],v=g*u-f*d,_=f*p-g*c,y=d*c-u*p,E=n*v+s*_+o*y;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const b=1/E;return t[0]=v*b,t[1]=(o*d-g*s)*b,t[2]=(f*s-o*u)*b,t[3]=_*b,t[4]=(g*n-o*p)*b,t[5]=(o*c-f*n)*b,t[6]=y*b,t[7]=(s*p-d*n)*b,t[8]=(u*n-s*c)*b,this}transpose(){let t;const n=this.elements;return t=n[1],n[1]=n[3],n[3]=t,t=n[2],n[2]=n[6],n[6]=t,t=n[5],n[5]=n[7],n[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const n=this.elements;return t[0]=n[0],t[1]=n[3],t[2]=n[6],t[3]=n[1],t[4]=n[4],t[5]=n[7],t[6]=n[2],t[7]=n[5],t[8]=n[8],this}setUvTransform(t,n,s,o,c,u,f){const p=Math.cos(c),d=Math.sin(c);return this.set(s*p,s*d,-s*(p*u+d*f)+u+t,-o*d,o*p,-o*(-d*u+p*f)+f+n,0,0,1),this}scale(t,n){return this.premultiply(kd.makeScale(t,n)),this}rotate(t){return this.premultiply(kd.makeRotation(-t)),this}translate(t,n){return this.premultiply(kd.makeTranslation(t,n)),this}makeTranslation(t,n){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,n,0,0,1),this}makeRotation(t){const n=Math.cos(t),s=Math.sin(t);return this.set(n,-s,0,s,n,0,0,0,1),this}makeScale(t,n){return this.set(t,0,0,0,n,0,0,0,1),this}equals(t){const n=this.elements,s=t.elements;for(let o=0;o<9;o++)if(n[o]!==s[o])return!1;return!0}fromArray(t,n=0){for(let s=0;s<9;s++)this.elements[s]=t[s+n];return this}toArray(t=[],n=0){const s=this.elements;return t[n]=s[0],t[n+1]=s[1],t[n+2]=s[2],t[n+3]=s[3],t[n+4]=s[4],t[n+5]=s[5],t[n+6]=s[6],t[n+7]=s[7],t[n+8]=s[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const kd=new he,Oy=new he().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Fy=new he().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function O3(){const i={enabled:!0,workingColorSpace:_o,spaces:{},convert:function(o,c,u){return this.enabled===!1||c===u||!c||!u||(this.spaces[c].transfer===ze&&(o.r=Na(o.r),o.g=Na(o.g),o.b=Na(o.b)),this.spaces[c].primaries!==this.spaces[u].primaries&&(o.applyMatrix3(this.spaces[c].toXYZ),o.applyMatrix3(this.spaces[u].fromXYZ)),this.spaces[u].transfer===ze&&(o.r=fo(o.r),o.g=fo(o.g),o.b=fo(o.b))),o},workingToColorSpace:function(o,c){return this.convert(o,this.workingColorSpace,c)},colorSpaceToWorking:function(o,c){return this.convert(o,c,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===ys?tf:this.spaces[o].transfer},getToneMappingMode:function(o){return this.spaces[o].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(o,c=this.workingColorSpace){return o.fromArray(this.spaces[c].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,c,u){return o.copy(this.spaces[c].toXYZ).multiply(this.spaces[u].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(o,c){return Gl("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(o,c)},toWorkingColorSpace:function(o,c){return Gl("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(o,c)}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],s=[.3127,.329];return i.define({[_o]:{primaries:t,whitePoint:s,transfer:tf,toXYZ:Oy,fromXYZ:Fy,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:wi},outputColorSpaceConfig:{drawingBufferColorSpace:wi}},[wi]:{primaries:t,whitePoint:s,transfer:ze,toXYZ:Oy,fromXYZ:Fy,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:wi}}}),i}const be=O3();function Na(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function fo(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Wr;class F3{static getDataURL(t,n="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let s;if(t instanceof HTMLCanvasElement)s=t;else{Wr===void 0&&(Wr=nf("canvas")),Wr.width=t.width,Wr.height=t.height;const o=Wr.getContext("2d");t instanceof ImageData?o.putImageData(t,0,0):o.drawImage(t,0,0,t.width,t.height),s=Wr}return s.toDataURL(n)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const n=nf("canvas");n.width=t.width,n.height=t.height;const s=n.getContext("2d");s.drawImage(t,0,0,t.width,t.height);const o=s.getImageData(0,0,t.width,t.height),c=o.data;for(let u=0;u<c.length;u++)c[u]=Na(c[u]/255)*255;return s.putImageData(o,0,0),n}else if(t.data){const n=t.data.slice(0);for(let s=0;s<n.length;s++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[s]=Math.floor(Na(n[s]/255)*255):n[s]=Na(n[s]);return{data:n,width:t.width,height:t.height}}else return oe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let B3=0;class Eg{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:B3++}),this.uuid=jl(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?t.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?t.set(n.displayHeight,n.displayWidth,0):n!==null?t.set(n.width,n.height,n.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const s={uuid:this.uuid,url:""},o=this.data;if(o!==null){let c;if(Array.isArray(o)){c=[];for(let u=0,f=o.length;u<f;u++)o[u].isDataTexture?c.push(Xd(o[u].image)):c.push(Xd(o[u]))}else c=Xd(o);s.url=c}return n||(t.images[this.uuid]=s),s}}function Xd(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?F3.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(oe("Texture: Unable to serialize Texture."),{})}let I3=0;const Wd=new st;class jn extends Eo{constructor(t=jn.DEFAULT_IMAGE,n=jn.DEFAULT_MAPPING,s=Ua,o=Ua,c=Gn,u=ir,f=Wi,p=Di,d=jn.DEFAULT_ANISOTROPY,g=ys){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:I3++}),this.uuid=jl(),this.name="",this.source=new Eg(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=s,this.wrapT=o,this.magFilter=c,this.minFilter=u,this.anisotropy=d,this.format=f,this.internalFormat=null,this.type=p,this.offset=new Xe(0,0),this.repeat=new Xe(1,1),this.center=new Xe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new he,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Wd).x}get height(){return this.source.getSize(Wd).y}get depth(){return this.source.getSize(Wd).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const n in t){const s=t[n];if(s===void 0){oe(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const o=this[n];if(o===void 0){oe(`Texture.setValues(): property '${n}' does not exist.`);continue}o&&s&&o.isVector2&&s.isVector2||o&&s&&o.isVector3&&s.isVector3||o&&s&&o.isMatrix3&&s.isMatrix3?o.copy(s):this[n]=s}}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),n||(t.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==hE)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Zp:t.x=t.x-Math.floor(t.x);break;case Ua:t.x=t.x<0?0:1;break;case Kp:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Zp:t.y=t.y-Math.floor(t.y);break;case Ua:t.y=t.y<0?0:1;break;case Kp:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}jn.DEFAULT_IMAGE=null;jn.DEFAULT_MAPPING=hE;jn.DEFAULT_ANISOTROPY=1;class cn{constructor(t=0,n=0,s=0,o=1){cn.prototype.isVector4=!0,this.x=t,this.y=n,this.z=s,this.w=o}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,n,s,o){return this.x=t,this.y=n,this.z=s,this.w=o,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this.w=t.w+n.w,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this.w+=t.w*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this.w=t.w-n.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const n=this.x,s=this.y,o=this.z,c=this.w,u=t.elements;return this.x=u[0]*n+u[4]*s+u[8]*o+u[12]*c,this.y=u[1]*n+u[5]*s+u[9]*o+u[13]*c,this.z=u[2]*n+u[6]*s+u[10]*o+u[14]*c,this.w=u[3]*n+u[7]*s+u[11]*o+u[15]*c,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const n=Math.sqrt(1-t.w*t.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/n,this.y=t.y/n,this.z=t.z/n),this}setAxisAngleFromRotationMatrix(t){let n,s,o,c;const p=t.elements,d=p[0],g=p[4],v=p[8],_=p[1],y=p[5],E=p[9],b=p[2],S=p[6],x=p[10];if(Math.abs(g-_)<.01&&Math.abs(v-b)<.01&&Math.abs(E-S)<.01){if(Math.abs(g+_)<.1&&Math.abs(v+b)<.1&&Math.abs(E+S)<.1&&Math.abs(d+y+x-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const w=(d+1)/2,L=(y+1)/2,N=(x+1)/2,B=(g+_)/4,P=(v+b)/4,k=(E+S)/4;return w>L&&w>N?w<.01?(s=0,o=.707106781,c=.707106781):(s=Math.sqrt(w),o=B/s,c=P/s):L>N?L<.01?(s=.707106781,o=0,c=.707106781):(o=Math.sqrt(L),s=B/o,c=k/o):N<.01?(s=.707106781,o=.707106781,c=0):(c=Math.sqrt(N),s=P/c,o=k/c),this.set(s,o,c,n),this}let D=Math.sqrt((S-E)*(S-E)+(v-b)*(v-b)+(_-g)*(_-g));return Math.abs(D)<.001&&(D=1),this.x=(S-E)/D,this.y=(v-b)/D,this.z=(_-g)/D,this.w=Math.acos((d+y+x-1)/2),this}setFromMatrixPosition(t){const n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,n){return this.x=Me(this.x,t.x,n.x),this.y=Me(this.y,t.y,n.y),this.z=Me(this.z,t.z,n.z),this.w=Me(this.w,t.w,n.w),this}clampScalar(t,n){return this.x=Me(this.x,t,n),this.y=Me(this.y,t,n),this.z=Me(this.z,t,n),this.w=Me(this.w,t,n),this}clampLength(t,n){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Me(s,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this.w+=(t.w-this.w)*n,this}lerpVectors(t,n,s){return this.x=t.x+(n.x-t.x)*s,this.y=t.y+(n.y-t.y)*s,this.z=t.z+(n.z-t.z)*s,this.w=t.w+(n.w-t.w)*s,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this.w=t[n+3],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t[n+3]=this.w,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this.w=t.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class z3 extends Eo{constructor(t=1,n=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Gn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},s),this.isRenderTarget=!0,this.width=t,this.height=n,this.depth=s.depth,this.scissor=new cn(0,0,t,n),this.scissorTest=!1,this.viewport=new cn(0,0,t,n);const o={width:t,height:n,depth:s.depth},c=new jn(o);this.textures=[];const u=s.count;for(let f=0;f<u;f++)this.textures[f]=c.clone(),this.textures[f].isRenderTargetTexture=!0,this.textures[f].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview}_setTextureOptions(t={}){const n={minFilter:Gn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(n.mapping=t.mapping),t.wrapS!==void 0&&(n.wrapS=t.wrapS),t.wrapT!==void 0&&(n.wrapT=t.wrapT),t.wrapR!==void 0&&(n.wrapR=t.wrapR),t.magFilter!==void 0&&(n.magFilter=t.magFilter),t.minFilter!==void 0&&(n.minFilter=t.minFilter),t.format!==void 0&&(n.format=t.format),t.type!==void 0&&(n.type=t.type),t.anisotropy!==void 0&&(n.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(n.colorSpace=t.colorSpace),t.flipY!==void 0&&(n.flipY=t.flipY),t.generateMipmaps!==void 0&&(n.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(n.internalFormat=t.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(n)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,n,s=1){if(this.width!==t||this.height!==n||this.depth!==s){this.width=t,this.height=n,this.depth=s;for(let o=0,c=this.textures.length;o<c;o++)this.textures[o].image.width=t,this.textures[o].image.height=n,this.textures[o].image.depth=s,this.textures[o].isData3DTexture!==!0&&(this.textures[o].isArrayTexture=this.textures[o].image.depth>1);this.dispose()}this.viewport.set(0,0,t,n),this.scissor.set(0,0,t,n)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++){this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const o=Object.assign({},t.textures[n].image);this.textures[n].source=new Eg(o)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class aa extends z3{constructor(t=1,n=1,s={}){super(t,n,s),this.isWebGLRenderTarget=!0}}class SE extends jn{constructor(t=null,n=1,s=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:n,height:s,depth:o},this.magFilter=Fn,this.minFilter=Fn,this.wrapR=Ua,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class V3 extends jn{constructor(t=null,n=1,s=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:n,height:s,depth:o},this.magFilter=Fn,this.minFilter=Fn,this.wrapR=Ua,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Kl{constructor(t=new st(1/0,1/0,1/0),n=new st(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=n}set(t,n){return this.min.copy(t),this.max.copy(n),this}setFromArray(t){this.makeEmpty();for(let n=0,s=t.length;n<s;n+=3)this.expandByPoint(Vi.fromArray(t,n));return this}setFromBufferAttribute(t){this.makeEmpty();for(let n=0,s=t.count;n<s;n++)this.expandByPoint(Vi.fromBufferAttribute(t,n));return this}setFromPoints(t){this.makeEmpty();for(let n=0,s=t.length;n<s;n++)this.expandByPoint(t[n]);return this}setFromCenterAndSize(t,n){const s=Vi.copy(n).multiplyScalar(.5);return this.min.copy(t).sub(s),this.max.copy(t).add(s),this}setFromObject(t,n=!1){return this.makeEmpty(),this.expandByObject(t,n)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,n=!1){t.updateWorldMatrix(!1,!1);const s=t.geometry;if(s!==void 0){const c=s.getAttribute("position");if(n===!0&&c!==void 0&&t.isInstancedMesh!==!0)for(let u=0,f=c.count;u<f;u++)t.isMesh===!0?t.getVertexPosition(u,Vi):Vi.fromBufferAttribute(c,u),Vi.applyMatrix4(t.matrixWorld),this.expandByPoint(Vi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),mu.copy(t.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),mu.copy(s.boundingBox)),mu.applyMatrix4(t.matrixWorld),this.union(mu)}const o=t.children;for(let c=0,u=o.length;c<u;c++)this.expandByObject(o[c],n);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,n){return n.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Vi),Vi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let n,s;return t.normal.x>0?(n=t.normal.x*this.min.x,s=t.normal.x*this.max.x):(n=t.normal.x*this.max.x,s=t.normal.x*this.min.x),t.normal.y>0?(n+=t.normal.y*this.min.y,s+=t.normal.y*this.max.y):(n+=t.normal.y*this.max.y,s+=t.normal.y*this.min.y),t.normal.z>0?(n+=t.normal.z*this.min.z,s+=t.normal.z*this.max.z):(n+=t.normal.z*this.max.z,s+=t.normal.z*this.min.z),n<=-t.constant&&s>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Sl),gu.subVectors(this.max,Sl),qr.subVectors(t.a,Sl),Yr.subVectors(t.b,Sl),jr.subVectors(t.c,Sl),ds.subVectors(Yr,qr),ps.subVectors(jr,Yr),Ws.subVectors(qr,jr);let n=[0,-ds.z,ds.y,0,-ps.z,ps.y,0,-Ws.z,Ws.y,ds.z,0,-ds.x,ps.z,0,-ps.x,Ws.z,0,-Ws.x,-ds.y,ds.x,0,-ps.y,ps.x,0,-Ws.y,Ws.x,0];return!qd(n,qr,Yr,jr,gu)||(n=[1,0,0,0,1,0,0,0,1],!qd(n,qr,Yr,jr,gu))?!1:(vu.crossVectors(ds,ps),n=[vu.x,vu.y,vu.z],qd(n,qr,Yr,jr,gu))}clampPoint(t,n){return n.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Vi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Vi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ba[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ba[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ba[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ba[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ba[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ba[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ba[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ba[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ba),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const ba=[new st,new st,new st,new st,new st,new st,new st,new st],Vi=new st,mu=new Kl,qr=new st,Yr=new st,jr=new st,ds=new st,ps=new st,Ws=new st,Sl=new st,gu=new st,vu=new st,qs=new st;function qd(i,t,n,s,o){for(let c=0,u=i.length-3;c<=u;c+=3){qs.fromArray(i,c);const f=o.x*Math.abs(qs.x)+o.y*Math.abs(qs.y)+o.z*Math.abs(qs.z),p=t.dot(qs),d=n.dot(qs),g=s.dot(qs);if(Math.max(-Math.max(p,d,g),Math.min(p,d,g))>f)return!1}return!0}const H3=new Kl,Ml=new st,Yd=new st;class ff{constructor(t=new st,n=-1){this.isSphere=!0,this.center=t,this.radius=n}set(t,n){return this.center.copy(t),this.radius=n,this}setFromPoints(t,n){const s=this.center;n!==void 0?s.copy(n):H3.setFromPoints(t).getCenter(s);let o=0;for(let c=0,u=t.length;c<u;c++)o=Math.max(o,s.distanceToSquared(t[c]));return this.radius=Math.sqrt(o),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const n=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=n*n}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,n){const s=this.center.distanceToSquared(t);return n.copy(t),s>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ml.subVectors(t,this.center);const n=Ml.lengthSq();if(n>this.radius*this.radius){const s=Math.sqrt(n),o=(s-this.radius)*.5;this.center.addScaledVector(Ml,o/s),this.radius+=o}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Yd.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ml.copy(t.center).add(Yd)),this.expandByPoint(Ml.copy(t.center).sub(Yd))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const Aa=new st,jd=new st,_u=new st,ms=new st,Zd=new st,xu=new st,Kd=new st;class ME{constructor(t=new st,n=new st(0,0,-1)){this.origin=t,this.direction=n}set(t,n){return this.origin.copy(t),this.direction.copy(n),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,n){return n.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Aa)),this}closestPointToPoint(t,n){n.subVectors(t,this.origin);const s=n.dot(this.direction);return s<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const n=Aa.subVectors(t,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(t):(Aa.copy(this.origin).addScaledVector(this.direction,n),Aa.distanceToSquared(t))}distanceSqToSegment(t,n,s,o){jd.copy(t).add(n).multiplyScalar(.5),_u.copy(n).sub(t).normalize(),ms.copy(this.origin).sub(jd);const c=t.distanceTo(n)*.5,u=-this.direction.dot(_u),f=ms.dot(this.direction),p=-ms.dot(_u),d=ms.lengthSq(),g=Math.abs(1-u*u);let v,_,y,E;if(g>0)if(v=u*p-f,_=u*f-p,E=c*g,v>=0)if(_>=-E)if(_<=E){const b=1/g;v*=b,_*=b,y=v*(v+u*_+2*f)+_*(u*v+_+2*p)+d}else _=c,v=Math.max(0,-(u*_+f)),y=-v*v+_*(_+2*p)+d;else _=-c,v=Math.max(0,-(u*_+f)),y=-v*v+_*(_+2*p)+d;else _<=-E?(v=Math.max(0,-(-u*c+f)),_=v>0?-c:Math.min(Math.max(-c,-p),c),y=-v*v+_*(_+2*p)+d):_<=E?(v=0,_=Math.min(Math.max(-c,-p),c),y=_*(_+2*p)+d):(v=Math.max(0,-(u*c+f)),_=v>0?c:Math.min(Math.max(-c,-p),c),y=-v*v+_*(_+2*p)+d);else _=u>0?-c:c,v=Math.max(0,-(u*_+f)),y=-v*v+_*(_+2*p)+d;return s&&s.copy(this.origin).addScaledVector(this.direction,v),o&&o.copy(jd).addScaledVector(_u,_),y}intersectSphere(t,n){Aa.subVectors(t.center,this.origin);const s=Aa.dot(this.direction),o=Aa.dot(Aa)-s*s,c=t.radius*t.radius;if(o>c)return null;const u=Math.sqrt(c-o),f=s-u,p=s+u;return p<0?null:f<0?this.at(p,n):this.at(f,n)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const n=t.normal.dot(this.direction);if(n===0)return t.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(t.normal)+t.constant)/n;return s>=0?s:null}intersectPlane(t,n){const s=this.distanceToPlane(t);return s===null?null:this.at(s,n)}intersectsPlane(t){const n=t.distanceToPoint(this.origin);return n===0||t.normal.dot(this.direction)*n<0}intersectBox(t,n){let s,o,c,u,f,p;const d=1/this.direction.x,g=1/this.direction.y,v=1/this.direction.z,_=this.origin;return d>=0?(s=(t.min.x-_.x)*d,o=(t.max.x-_.x)*d):(s=(t.max.x-_.x)*d,o=(t.min.x-_.x)*d),g>=0?(c=(t.min.y-_.y)*g,u=(t.max.y-_.y)*g):(c=(t.max.y-_.y)*g,u=(t.min.y-_.y)*g),s>u||c>o||((c>s||isNaN(s))&&(s=c),(u<o||isNaN(o))&&(o=u),v>=0?(f=(t.min.z-_.z)*v,p=(t.max.z-_.z)*v):(f=(t.max.z-_.z)*v,p=(t.min.z-_.z)*v),s>p||f>o)||((f>s||s!==s)&&(s=f),(p<o||o!==o)&&(o=p),o<0)?null:this.at(s>=0?s:o,n)}intersectsBox(t){return this.intersectBox(t,Aa)!==null}intersectTriangle(t,n,s,o,c){Zd.subVectors(n,t),xu.subVectors(s,t),Kd.crossVectors(Zd,xu);let u=this.direction.dot(Kd),f;if(u>0){if(o)return null;f=1}else if(u<0)f=-1,u=-u;else return null;ms.subVectors(this.origin,t);const p=f*this.direction.dot(xu.crossVectors(ms,xu));if(p<0)return null;const d=f*this.direction.dot(Zd.cross(ms));if(d<0||p+d>u)return null;const g=-f*ms.dot(Kd);return g<0?null:this.at(g/u,c)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class un{constructor(t,n,s,o,c,u,f,p,d,g,v,_,y,E,b,S){un.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,n,s,o,c,u,f,p,d,g,v,_,y,E,b,S)}set(t,n,s,o,c,u,f,p,d,g,v,_,y,E,b,S){const x=this.elements;return x[0]=t,x[4]=n,x[8]=s,x[12]=o,x[1]=c,x[5]=u,x[9]=f,x[13]=p,x[2]=d,x[6]=g,x[10]=v,x[14]=_,x[3]=y,x[7]=E,x[11]=b,x[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new un().fromArray(this.elements)}copy(t){const n=this.elements,s=t.elements;return n[0]=s[0],n[1]=s[1],n[2]=s[2],n[3]=s[3],n[4]=s[4],n[5]=s[5],n[6]=s[6],n[7]=s[7],n[8]=s[8],n[9]=s[9],n[10]=s[10],n[11]=s[11],n[12]=s[12],n[13]=s[13],n[14]=s[14],n[15]=s[15],this}copyPosition(t){const n=this.elements,s=t.elements;return n[12]=s[12],n[13]=s[13],n[14]=s[14],this}setFromMatrix3(t){const n=t.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(t,n,s){return this.determinant()===0?(t.set(1,0,0),n.set(0,1,0),s.set(0,0,1),this):(t.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this)}makeBasis(t,n,s){return this.set(t.x,n.x,s.x,0,t.y,n.y,s.y,0,t.z,n.z,s.z,0,0,0,0,1),this}extractRotation(t){if(t.determinant()===0)return this.identity();const n=this.elements,s=t.elements,o=1/Zr.setFromMatrixColumn(t,0).length(),c=1/Zr.setFromMatrixColumn(t,1).length(),u=1/Zr.setFromMatrixColumn(t,2).length();return n[0]=s[0]*o,n[1]=s[1]*o,n[2]=s[2]*o,n[3]=0,n[4]=s[4]*c,n[5]=s[5]*c,n[6]=s[6]*c,n[7]=0,n[8]=s[8]*u,n[9]=s[9]*u,n[10]=s[10]*u,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(t){const n=this.elements,s=t.x,o=t.y,c=t.z,u=Math.cos(s),f=Math.sin(s),p=Math.cos(o),d=Math.sin(o),g=Math.cos(c),v=Math.sin(c);if(t.order==="XYZ"){const _=u*g,y=u*v,E=f*g,b=f*v;n[0]=p*g,n[4]=-p*v,n[8]=d,n[1]=y+E*d,n[5]=_-b*d,n[9]=-f*p,n[2]=b-_*d,n[6]=E+y*d,n[10]=u*p}else if(t.order==="YXZ"){const _=p*g,y=p*v,E=d*g,b=d*v;n[0]=_+b*f,n[4]=E*f-y,n[8]=u*d,n[1]=u*v,n[5]=u*g,n[9]=-f,n[2]=y*f-E,n[6]=b+_*f,n[10]=u*p}else if(t.order==="ZXY"){const _=p*g,y=p*v,E=d*g,b=d*v;n[0]=_-b*f,n[4]=-u*v,n[8]=E+y*f,n[1]=y+E*f,n[5]=u*g,n[9]=b-_*f,n[2]=-u*d,n[6]=f,n[10]=u*p}else if(t.order==="ZYX"){const _=u*g,y=u*v,E=f*g,b=f*v;n[0]=p*g,n[4]=E*d-y,n[8]=_*d+b,n[1]=p*v,n[5]=b*d+_,n[9]=y*d-E,n[2]=-d,n[6]=f*p,n[10]=u*p}else if(t.order==="YZX"){const _=u*p,y=u*d,E=f*p,b=f*d;n[0]=p*g,n[4]=b-_*v,n[8]=E*v+y,n[1]=v,n[5]=u*g,n[9]=-f*g,n[2]=-d*g,n[6]=y*v+E,n[10]=_-b*v}else if(t.order==="XZY"){const _=u*p,y=u*d,E=f*p,b=f*d;n[0]=p*g,n[4]=-v,n[8]=d*g,n[1]=_*v+b,n[5]=u*g,n[9]=y*v-E,n[2]=E*v-y,n[6]=f*g,n[10]=b*v+_}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(t){return this.compose(G3,t,k3)}lookAt(t,n,s){const o=this.elements;return di.subVectors(t,n),di.lengthSq()===0&&(di.z=1),di.normalize(),gs.crossVectors(s,di),gs.lengthSq()===0&&(Math.abs(s.z)===1?di.x+=1e-4:di.z+=1e-4,di.normalize(),gs.crossVectors(s,di)),gs.normalize(),yu.crossVectors(di,gs),o[0]=gs.x,o[4]=yu.x,o[8]=di.x,o[1]=gs.y,o[5]=yu.y,o[9]=di.y,o[2]=gs.z,o[6]=yu.z,o[10]=di.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const s=t.elements,o=n.elements,c=this.elements,u=s[0],f=s[4],p=s[8],d=s[12],g=s[1],v=s[5],_=s[9],y=s[13],E=s[2],b=s[6],S=s[10],x=s[14],D=s[3],w=s[7],L=s[11],N=s[15],B=o[0],P=o[4],k=o[8],C=o[12],U=o[1],H=o[5],$=o[9],tt=o[13],ft=o[2],ot=o[6],I=o[10],z=o[14],K=o[3],yt=o[7],_t=o[11],F=o[15];return c[0]=u*B+f*U+p*ft+d*K,c[4]=u*P+f*H+p*ot+d*yt,c[8]=u*k+f*$+p*I+d*_t,c[12]=u*C+f*tt+p*z+d*F,c[1]=g*B+v*U+_*ft+y*K,c[5]=g*P+v*H+_*ot+y*yt,c[9]=g*k+v*$+_*I+y*_t,c[13]=g*C+v*tt+_*z+y*F,c[2]=E*B+b*U+S*ft+x*K,c[6]=E*P+b*H+S*ot+x*yt,c[10]=E*k+b*$+S*I+x*_t,c[14]=E*C+b*tt+S*z+x*F,c[3]=D*B+w*U+L*ft+N*K,c[7]=D*P+w*H+L*ot+N*yt,c[11]=D*k+w*$+L*I+N*_t,c[15]=D*C+w*tt+L*z+N*F,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[4]*=t,n[8]*=t,n[12]*=t,n[1]*=t,n[5]*=t,n[9]*=t,n[13]*=t,n[2]*=t,n[6]*=t,n[10]*=t,n[14]*=t,n[3]*=t,n[7]*=t,n[11]*=t,n[15]*=t,this}determinant(){const t=this.elements,n=t[0],s=t[4],o=t[8],c=t[12],u=t[1],f=t[5],p=t[9],d=t[13],g=t[2],v=t[6],_=t[10],y=t[14],E=t[3],b=t[7],S=t[11],x=t[15],D=p*y-d*_,w=f*y-d*v,L=f*_-p*v,N=u*y-d*g,B=u*_-p*g,P=u*v-f*g;return n*(b*D-S*w+x*L)-s*(E*D-S*N+x*B)+o*(E*w-b*N+x*P)-c*(E*L-b*B+S*P)}transpose(){const t=this.elements;let n;return n=t[1],t[1]=t[4],t[4]=n,n=t[2],t[2]=t[8],t[8]=n,n=t[6],t[6]=t[9],t[9]=n,n=t[3],t[3]=t[12],t[12]=n,n=t[7],t[7]=t[13],t[13]=n,n=t[11],t[11]=t[14],t[14]=n,this}setPosition(t,n,s){const o=this.elements;return t.isVector3?(o[12]=t.x,o[13]=t.y,o[14]=t.z):(o[12]=t,o[13]=n,o[14]=s),this}invert(){const t=this.elements,n=t[0],s=t[1],o=t[2],c=t[3],u=t[4],f=t[5],p=t[6],d=t[7],g=t[8],v=t[9],_=t[10],y=t[11],E=t[12],b=t[13],S=t[14],x=t[15],D=v*S*d-b*_*d+b*p*y-f*S*y-v*p*x+f*_*x,w=E*_*d-g*S*d-E*p*y+u*S*y+g*p*x-u*_*x,L=g*b*d-E*v*d+E*f*y-u*b*y-g*f*x+u*v*x,N=E*v*p-g*b*p-E*f*_+u*b*_+g*f*S-u*v*S,B=n*D+s*w+o*L+c*N;if(B===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/B;return t[0]=D*P,t[1]=(b*_*c-v*S*c-b*o*y+s*S*y+v*o*x-s*_*x)*P,t[2]=(f*S*c-b*p*c+b*o*d-s*S*d-f*o*x+s*p*x)*P,t[3]=(v*p*c-f*_*c-v*o*d+s*_*d+f*o*y-s*p*y)*P,t[4]=w*P,t[5]=(g*S*c-E*_*c+E*o*y-n*S*y-g*o*x+n*_*x)*P,t[6]=(E*p*c-u*S*c-E*o*d+n*S*d+u*o*x-n*p*x)*P,t[7]=(u*_*c-g*p*c+g*o*d-n*_*d-u*o*y+n*p*y)*P,t[8]=L*P,t[9]=(E*v*c-g*b*c-E*s*y+n*b*y+g*s*x-n*v*x)*P,t[10]=(u*b*c-E*f*c+E*s*d-n*b*d-u*s*x+n*f*x)*P,t[11]=(g*f*c-u*v*c-g*s*d+n*v*d+u*s*y-n*f*y)*P,t[12]=N*P,t[13]=(g*b*o-E*v*o+E*s*_-n*b*_-g*s*S+n*v*S)*P,t[14]=(E*f*o-u*b*o-E*s*p+n*b*p+u*s*S-n*f*S)*P,t[15]=(u*v*o-g*f*o+g*s*p-n*v*p-u*s*_+n*f*_)*P,this}scale(t){const n=this.elements,s=t.x,o=t.y,c=t.z;return n[0]*=s,n[4]*=o,n[8]*=c,n[1]*=s,n[5]*=o,n[9]*=c,n[2]*=s,n[6]*=o,n[10]*=c,n[3]*=s,n[7]*=o,n[11]*=c,this}getMaxScaleOnAxis(){const t=this.elements,n=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],s=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],o=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(n,s,o))}makeTranslation(t,n,s){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,n,0,0,1,s,0,0,0,1),this}makeRotationX(t){const n=Math.cos(t),s=Math.sin(t);return this.set(1,0,0,0,0,n,-s,0,0,s,n,0,0,0,0,1),this}makeRotationY(t){const n=Math.cos(t),s=Math.sin(t);return this.set(n,0,s,0,0,1,0,0,-s,0,n,0,0,0,0,1),this}makeRotationZ(t){const n=Math.cos(t),s=Math.sin(t);return this.set(n,-s,0,0,s,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,n){const s=Math.cos(n),o=Math.sin(n),c=1-s,u=t.x,f=t.y,p=t.z,d=c*u,g=c*f;return this.set(d*u+s,d*f-o*p,d*p+o*f,0,d*f+o*p,g*f+s,g*p-o*u,0,d*p-o*f,g*p+o*u,c*p*p+s,0,0,0,0,1),this}makeScale(t,n,s){return this.set(t,0,0,0,0,n,0,0,0,0,s,0,0,0,0,1),this}makeShear(t,n,s,o,c,u){return this.set(1,s,c,0,t,1,u,0,n,o,1,0,0,0,0,1),this}compose(t,n,s){const o=this.elements,c=n._x,u=n._y,f=n._z,p=n._w,d=c+c,g=u+u,v=f+f,_=c*d,y=c*g,E=c*v,b=u*g,S=u*v,x=f*v,D=p*d,w=p*g,L=p*v,N=s.x,B=s.y,P=s.z;return o[0]=(1-(b+x))*N,o[1]=(y+L)*N,o[2]=(E-w)*N,o[3]=0,o[4]=(y-L)*B,o[5]=(1-(_+x))*B,o[6]=(S+D)*B,o[7]=0,o[8]=(E+w)*P,o[9]=(S-D)*P,o[10]=(1-(_+b))*P,o[11]=0,o[12]=t.x,o[13]=t.y,o[14]=t.z,o[15]=1,this}decompose(t,n,s){const o=this.elements;if(t.x=o[12],t.y=o[13],t.z=o[14],this.determinant()===0)return s.set(1,1,1),n.identity(),this;let c=Zr.set(o[0],o[1],o[2]).length();const u=Zr.set(o[4],o[5],o[6]).length(),f=Zr.set(o[8],o[9],o[10]).length();this.determinant()<0&&(c=-c),Hi.copy(this);const d=1/c,g=1/u,v=1/f;return Hi.elements[0]*=d,Hi.elements[1]*=d,Hi.elements[2]*=d,Hi.elements[4]*=g,Hi.elements[5]*=g,Hi.elements[6]*=g,Hi.elements[8]*=v,Hi.elements[9]*=v,Hi.elements[10]*=v,n.setFromRotationMatrix(Hi),s.x=c,s.y=u,s.z=f,this}makePerspective(t,n,s,o,c,u,f=ta,p=!1){const d=this.elements,g=2*c/(n-t),v=2*c/(s-o),_=(n+t)/(n-t),y=(s+o)/(s-o);let E,b;if(p)E=c/(u-c),b=u*c/(u-c);else if(f===ta)E=-(u+c)/(u-c),b=-2*u*c/(u-c);else if(f===ef)E=-u/(u-c),b=-u*c/(u-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+f);return d[0]=g,d[4]=0,d[8]=_,d[12]=0,d[1]=0,d[5]=v,d[9]=y,d[13]=0,d[2]=0,d[6]=0,d[10]=E,d[14]=b,d[3]=0,d[7]=0,d[11]=-1,d[15]=0,this}makeOrthographic(t,n,s,o,c,u,f=ta,p=!1){const d=this.elements,g=2/(n-t),v=2/(s-o),_=-(n+t)/(n-t),y=-(s+o)/(s-o);let E,b;if(p)E=1/(u-c),b=u/(u-c);else if(f===ta)E=-2/(u-c),b=-(u+c)/(u-c);else if(f===ef)E=-1/(u-c),b=-c/(u-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+f);return d[0]=g,d[4]=0,d[8]=0,d[12]=_,d[1]=0,d[5]=v,d[9]=0,d[13]=y,d[2]=0,d[6]=0,d[10]=E,d[14]=b,d[3]=0,d[7]=0,d[11]=0,d[15]=1,this}equals(t){const n=this.elements,s=t.elements;for(let o=0;o<16;o++)if(n[o]!==s[o])return!1;return!0}fromArray(t,n=0){for(let s=0;s<16;s++)this.elements[s]=t[s+n];return this}toArray(t=[],n=0){const s=this.elements;return t[n]=s[0],t[n+1]=s[1],t[n+2]=s[2],t[n+3]=s[3],t[n+4]=s[4],t[n+5]=s[5],t[n+6]=s[6],t[n+7]=s[7],t[n+8]=s[8],t[n+9]=s[9],t[n+10]=s[10],t[n+11]=s[11],t[n+12]=s[12],t[n+13]=s[13],t[n+14]=s[14],t[n+15]=s[15],t}}const Zr=new st,Hi=new un,G3=new st(0,0,0),k3=new st(1,1,1),gs=new st,yu=new st,di=new st,By=new un,Iy=new Zl;class za{constructor(t=0,n=0,s=0,o=za.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=s,this._order=o}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,n,s,o=this._order){return this._x=t,this._y=n,this._z=s,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,n=this._order,s=!0){const o=t.elements,c=o[0],u=o[4],f=o[8],p=o[1],d=o[5],g=o[9],v=o[2],_=o[6],y=o[10];switch(n){case"XYZ":this._y=Math.asin(Me(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-g,y),this._z=Math.atan2(-u,c)):(this._x=Math.atan2(_,d),this._z=0);break;case"YXZ":this._x=Math.asin(-Me(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(f,y),this._z=Math.atan2(p,d)):(this._y=Math.atan2(-v,c),this._z=0);break;case"ZXY":this._x=Math.asin(Me(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(-v,y),this._z=Math.atan2(-u,d)):(this._y=0,this._z=Math.atan2(p,c));break;case"ZYX":this._y=Math.asin(-Me(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(_,y),this._z=Math.atan2(p,c)):(this._x=0,this._z=Math.atan2(-u,d));break;case"YZX":this._z=Math.asin(Me(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-g,d),this._y=Math.atan2(-v,c)):(this._x=0,this._y=Math.atan2(f,y));break;case"XZY":this._z=Math.asin(-Me(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(_,d),this._y=Math.atan2(f,c)):(this._x=Math.atan2(-g,y),this._y=0);break;default:oe("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,s===!0&&this._onChangeCallback(),this}setFromQuaternion(t,n,s){return By.makeRotationFromQuaternion(t),this.setFromRotationMatrix(By,n,s)}setFromVector3(t,n=this._order){return this.set(t.x,t.y,t.z,n)}reorder(t){return Iy.setFromEuler(this),this.setFromQuaternion(Iy,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}za.DEFAULT_ORDER="XYZ";class EE{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let X3=0;const zy=new st,Kr=new Zl,Ra=new un,Su=new st,El=new st,W3=new st,q3=new Zl,Vy=new st(1,0,0),Hy=new st(0,1,0),Gy=new st(0,0,1),ky={type:"added"},Y3={type:"removed"},Qr={type:"childadded",child:null},Qd={type:"childremoved",child:null};class ai extends Eo{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:X3++}),this.uuid=jl(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ai.DEFAULT_UP.clone();const t=new st,n=new za,s=new Zl,o=new st(1,1,1);function c(){s.setFromEuler(n,!1)}function u(){n.setFromQuaternion(s,void 0,!1)}n._onChange(c),s._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new un},normalMatrix:{value:new he}}),this.matrix=new un,this.matrixWorld=new un,this.matrixAutoUpdate=ai.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ai.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new EE,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,n){this.quaternion.setFromAxisAngle(t,n)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,n){return Kr.setFromAxisAngle(t,n),this.quaternion.multiply(Kr),this}rotateOnWorldAxis(t,n){return Kr.setFromAxisAngle(t,n),this.quaternion.premultiply(Kr),this}rotateX(t){return this.rotateOnAxis(Vy,t)}rotateY(t){return this.rotateOnAxis(Hy,t)}rotateZ(t){return this.rotateOnAxis(Gy,t)}translateOnAxis(t,n){return zy.copy(t).applyQuaternion(this.quaternion),this.position.add(zy.multiplyScalar(n)),this}translateX(t){return this.translateOnAxis(Vy,t)}translateY(t){return this.translateOnAxis(Hy,t)}translateZ(t){return this.translateOnAxis(Gy,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ra.copy(this.matrixWorld).invert())}lookAt(t,n,s){t.isVector3?Su.copy(t):Su.set(t,n,s);const o=this.parent;this.updateWorldMatrix(!0,!1),El.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ra.lookAt(El,Su,this.up):Ra.lookAt(Su,El,this.up),this.quaternion.setFromRotationMatrix(Ra),o&&(Ra.extractRotation(o.matrixWorld),Kr.setFromRotationMatrix(Ra),this.quaternion.premultiply(Kr.invert()))}add(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return t===this?(Ce("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(ky),Qr.child=t,this.dispatchEvent(Qr),Qr.child=null):Ce("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const n=this.children.indexOf(t);return n!==-1&&(t.parent=null,this.children.splice(n,1),t.dispatchEvent(Y3),Qd.child=t,this.dispatchEvent(Qd),Qd.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ra.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ra.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ra),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(ky),Qr.child=t,this.dispatchEvent(Qr),Qr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,n){if(this[t]===n)return this;for(let s=0,o=this.children.length;s<o;s++){const u=this.children[s].getObjectByProperty(t,n);if(u!==void 0)return u}}getObjectsByProperty(t,n,s=[]){this[t]===n&&s.push(this);const o=this.children;for(let c=0,u=o.length;c<u;c++)o[c].getObjectsByProperty(t,n,s);return s}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(El,t,W3),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(El,q3,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return t.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(t){t(this);const n=this.children;for(let s=0,o=n.length;s<o;s++)n[s].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const n=this.children;for(let s=0,o=n.length;s<o;s++)n[s].traverseVisible(t)}traverseAncestors(t){const n=this.parent;n!==null&&(t(n),n.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const n=this.children;for(let s=0,o=n.length;s<o;s++)n[s].updateMatrixWorld(t)}updateWorldMatrix(t,n){const s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const o=this.children;for(let c=0,u=o.length;c<u;c++)o[c].updateWorldMatrix(!1,!0)}}toJSON(t){const n=t===void 0||typeof t=="string",s={};n&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.geometryInfo=this._geometryInfo.map(f=>({...f,boundingBox:f.boundingBox?f.boundingBox.toJSON():void 0,boundingSphere:f.boundingSphere?f.boundingSphere.toJSON():void 0})),o.instanceInfo=this._instanceInfo.map(f=>({...f})),o.availableInstanceIds=this._availableInstanceIds.slice(),o.availableGeometryIds=this._availableGeometryIds.slice(),o.nextIndexStart=this._nextIndexStart,o.nextVertexStart=this._nextVertexStart,o.geometryCount=this._geometryCount,o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.matricesTexture=this._matricesTexture.toJSON(t),o.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(o.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(o.boundingBox=this.boundingBox.toJSON()));function c(f,p){return f[p.uuid]===void 0&&(f[p.uuid]=p.toJSON(t)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=c(t.geometries,this.geometry);const f=this.geometry.parameters;if(f!==void 0&&f.shapes!==void 0){const p=f.shapes;if(Array.isArray(p))for(let d=0,g=p.length;d<g;d++){const v=p[d];c(t.shapes,v)}else c(t.shapes,p)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(t.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const f=[];for(let p=0,d=this.material.length;p<d;p++)f.push(c(t.materials,this.material[p]));o.material=f}else o.material=c(t.materials,this.material);if(this.children.length>0){o.children=[];for(let f=0;f<this.children.length;f++)o.children.push(this.children[f].toJSON(t).object)}if(this.animations.length>0){o.animations=[];for(let f=0;f<this.animations.length;f++){const p=this.animations[f];o.animations.push(c(t.animations,p))}}if(n){const f=u(t.geometries),p=u(t.materials),d=u(t.textures),g=u(t.images),v=u(t.shapes),_=u(t.skeletons),y=u(t.animations),E=u(t.nodes);f.length>0&&(s.geometries=f),p.length>0&&(s.materials=p),d.length>0&&(s.textures=d),g.length>0&&(s.images=g),v.length>0&&(s.shapes=v),_.length>0&&(s.skeletons=_),y.length>0&&(s.animations=y),E.length>0&&(s.nodes=E)}return s.object=o,s;function u(f){const p=[];for(const d in f){const g=f[d];delete g.metadata,p.push(g)}return p}}clone(t){return new this.constructor().copy(this,t)}copy(t,n=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),n===!0)for(let s=0;s<t.children.length;s++){const o=t.children[s];this.add(o.clone())}return this}}ai.DEFAULT_UP=new st(0,1,0);ai.DEFAULT_MATRIX_AUTO_UPDATE=!0;ai.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Gi=new st,Ca=new st,Jd=new st,wa=new st,Jr=new st,$r=new st,Xy=new st,$d=new st,tp=new st,ep=new st,np=new cn,ip=new cn,ap=new cn;class Xi{constructor(t=new st,n=new st,s=new st){this.a=t,this.b=n,this.c=s}static getNormal(t,n,s,o){o.subVectors(s,n),Gi.subVectors(t,n),o.cross(Gi);const c=o.lengthSq();return c>0?o.multiplyScalar(1/Math.sqrt(c)):o.set(0,0,0)}static getBarycoord(t,n,s,o,c){Gi.subVectors(o,n),Ca.subVectors(s,n),Jd.subVectors(t,n);const u=Gi.dot(Gi),f=Gi.dot(Ca),p=Gi.dot(Jd),d=Ca.dot(Ca),g=Ca.dot(Jd),v=u*d-f*f;if(v===0)return c.set(0,0,0),null;const _=1/v,y=(d*p-f*g)*_,E=(u*g-f*p)*_;return c.set(1-y-E,E,y)}static containsPoint(t,n,s,o){return this.getBarycoord(t,n,s,o,wa)===null?!1:wa.x>=0&&wa.y>=0&&wa.x+wa.y<=1}static getInterpolation(t,n,s,o,c,u,f,p){return this.getBarycoord(t,n,s,o,wa)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(c,wa.x),p.addScaledVector(u,wa.y),p.addScaledVector(f,wa.z),p)}static getInterpolatedAttribute(t,n,s,o,c,u){return np.setScalar(0),ip.setScalar(0),ap.setScalar(0),np.fromBufferAttribute(t,n),ip.fromBufferAttribute(t,s),ap.fromBufferAttribute(t,o),u.setScalar(0),u.addScaledVector(np,c.x),u.addScaledVector(ip,c.y),u.addScaledVector(ap,c.z),u}static isFrontFacing(t,n,s,o){return Gi.subVectors(s,n),Ca.subVectors(t,n),Gi.cross(Ca).dot(o)<0}set(t,n,s){return this.a.copy(t),this.b.copy(n),this.c.copy(s),this}setFromPointsAndIndices(t,n,s,o){return this.a.copy(t[n]),this.b.copy(t[s]),this.c.copy(t[o]),this}setFromAttributeAndIndices(t,n,s,o){return this.a.fromBufferAttribute(t,n),this.b.fromBufferAttribute(t,s),this.c.fromBufferAttribute(t,o),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Gi.subVectors(this.c,this.b),Ca.subVectors(this.a,this.b),Gi.cross(Ca).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Xi.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return Xi.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,s,o,c){return Xi.getInterpolation(t,this.a,this.b,this.c,n,s,o,c)}containsPoint(t){return Xi.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Xi.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,n){const s=this.a,o=this.b,c=this.c;let u,f;Jr.subVectors(o,s),$r.subVectors(c,s),$d.subVectors(t,s);const p=Jr.dot($d),d=$r.dot($d);if(p<=0&&d<=0)return n.copy(s);tp.subVectors(t,o);const g=Jr.dot(tp),v=$r.dot(tp);if(g>=0&&v<=g)return n.copy(o);const _=p*v-g*d;if(_<=0&&p>=0&&g<=0)return u=p/(p-g),n.copy(s).addScaledVector(Jr,u);ep.subVectors(t,c);const y=Jr.dot(ep),E=$r.dot(ep);if(E>=0&&y<=E)return n.copy(c);const b=y*d-p*E;if(b<=0&&d>=0&&E<=0)return f=d/(d-E),n.copy(s).addScaledVector($r,f);const S=g*E-y*v;if(S<=0&&v-g>=0&&y-E>=0)return Xy.subVectors(c,o),f=(v-g)/(v-g+(y-E)),n.copy(o).addScaledVector(Xy,f);const x=1/(S+b+_);return u=b*x,f=_*x,n.copy(s).addScaledVector(Jr,u).addScaledVector($r,f)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const TE={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},vs={h:0,s:0,l:0},Mu={h:0,s:0,l:0};function sp(i,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?i+(t-i)*6*n:n<1/2?t:n<2/3?i+(t-i)*6*(2/3-n):i}class Ve{constructor(t,n,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,n,s)}set(t,n,s){if(n===void 0&&s===void 0){const o=t;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(t,n,s);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,n=wi){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,be.colorSpaceToWorking(this,n),this}setRGB(t,n,s,o=be.workingColorSpace){return this.r=t,this.g=n,this.b=s,be.colorSpaceToWorking(this,o),this}setHSL(t,n,s,o=be.workingColorSpace){if(t=P3(t,1),n=Me(n,0,1),s=Me(s,0,1),n===0)this.r=this.g=this.b=s;else{const c=s<=.5?s*(1+n):s+n-s*n,u=2*s-c;this.r=sp(u,c,t+1/3),this.g=sp(u,c,t),this.b=sp(u,c,t-1/3)}return be.colorSpaceToWorking(this,o),this}setStyle(t,n=wi){function s(c){c!==void 0&&parseFloat(c)<1&&oe("Color: Alpha component of "+t+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(t)){let c;const u=o[1],f=o[2];switch(u){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return s(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,n);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return s(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,n);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return s(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,n);break;default:oe("Color: Unknown color model "+t)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(t)){const c=o[1],u=c.length;if(u===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,n);if(u===6)return this.setHex(parseInt(c,16),n);oe("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,n);return this}setColorName(t,n=wi){const s=TE[t.toLowerCase()];return s!==void 0?this.setHex(s,n):oe("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Na(t.r),this.g=Na(t.g),this.b=Na(t.b),this}copyLinearToSRGB(t){return this.r=fo(t.r),this.g=fo(t.g),this.b=fo(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=wi){return be.workingToColorSpace(Vn.copy(this),t),Math.round(Me(Vn.r*255,0,255))*65536+Math.round(Me(Vn.g*255,0,255))*256+Math.round(Me(Vn.b*255,0,255))}getHexString(t=wi){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,n=be.workingColorSpace){be.workingToColorSpace(Vn.copy(this),n);const s=Vn.r,o=Vn.g,c=Vn.b,u=Math.max(s,o,c),f=Math.min(s,o,c);let p,d;const g=(f+u)/2;if(f===u)p=0,d=0;else{const v=u-f;switch(d=g<=.5?v/(u+f):v/(2-u-f),u){case s:p=(o-c)/v+(o<c?6:0);break;case o:p=(c-s)/v+2;break;case c:p=(s-o)/v+4;break}p/=6}return t.h=p,t.s=d,t.l=g,t}getRGB(t,n=be.workingColorSpace){return be.workingToColorSpace(Vn.copy(this),n),t.r=Vn.r,t.g=Vn.g,t.b=Vn.b,t}getStyle(t=wi){be.workingToColorSpace(Vn.copy(this),t);const n=Vn.r,s=Vn.g,o=Vn.b;return t!==wi?`color(${t} ${n.toFixed(3)} ${s.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(s*255)},${Math.round(o*255)})`}offsetHSL(t,n,s){return this.getHSL(vs),this.setHSL(vs.h+t,vs.s+n,vs.l+s)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,n){return this.r=t.r+n.r,this.g=t.g+n.g,this.b=t.b+n.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,n){return this.r+=(t.r-this.r)*n,this.g+=(t.g-this.g)*n,this.b+=(t.b-this.b)*n,this}lerpColors(t,n,s){return this.r=t.r+(n.r-t.r)*s,this.g=t.g+(n.g-t.g)*s,this.b=t.b+(n.b-t.b)*s,this}lerpHSL(t,n){this.getHSL(vs),t.getHSL(Mu);const s=Hd(vs.h,Mu.h,n),o=Hd(vs.s,Mu.s,n),c=Hd(vs.l,Mu.l,n);return this.setHSL(s,o,c),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const n=this.r,s=this.g,o=this.b,c=t.elements;return this.r=c[0]*n+c[3]*s+c[6]*o,this.g=c[1]*n+c[4]*s+c[7]*o,this.b=c[2]*n+c[5]*s+c[8]*o,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,n=0){return this.r=t[n],this.g=t[n+1],this.b=t[n+2],this}toArray(t=[],n=0){return t[n]=this.r,t[n+1]=this.g,t[n+2]=this.b,t}fromBufferAttribute(t,n){return this.r=t.getX(n),this.g=t.getY(n),this.b=t.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Vn=new Ve;Ve.NAMES=TE;let j3=0;class Ql extends Eo{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:j3++}),this.uuid=jl(),this.name="",this.type="Material",this.blending=uo,this.side=Ts,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ip,this.blendDst=zp,this.blendEquation=$s,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ve(0,0,0),this.blendAlpha=0,this.depthFunc=mo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=wy,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Xr,this.stencilZFail=Xr,this.stencilZPass=Xr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const n in t){const s=t[n];if(s===void 0){oe(`Material: parameter '${n}' has value of undefined.`);continue}const o=this[n];if(o===void 0){oe(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(s):o&&o.isVector3&&s&&s.isVector3?o.copy(s):this[n]=s}}toJSON(t){const n=t===void 0||typeof t=="string";n&&(t={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(t).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(t).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(t).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(t).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(t).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==uo&&(s.blending=this.blending),this.side!==Ts&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==Ip&&(s.blendSrc=this.blendSrc),this.blendDst!==zp&&(s.blendDst=this.blendDst),this.blendEquation!==$s&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==mo&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==wy&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Xr&&(s.stencilFail=this.stencilFail),this.stencilZFail!==Xr&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==Xr&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.allowOverride===!1&&(s.allowOverride=!1),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function o(c){const u=[];for(const f in c){const p=c[f];delete p.metadata,u.push(p)}return u}if(n){const c=o(t.textures),u=o(t.images);c.length>0&&(s.textures=c),u.length>0&&(s.images=u)}return s}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const n=t.clippingPlanes;let s=null;if(n!==null){const o=n.length;s=new Array(o);for(let c=0;c!==o;++c)s[c]=n[c].clone()}return this.clippingPlanes=s,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class bE extends Ql{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ve(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new za,this.combine=aE,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const gn=new st,Eu=new Xe;let Z3=0;class si{constructor(t,n,s=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Z3++}),this.name="",this.array=t,this.itemSize=n,this.count=t!==void 0?t.length/n:0,this.normalized=s,this.usage=Dy,this.updateRanges=[],this.gpuType=$i,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,n,s){t*=this.itemSize,s*=n.itemSize;for(let o=0,c=this.itemSize;o<c;o++)this.array[t+o]=n.array[s+o];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let n=0,s=this.count;n<s;n++)Eu.fromBufferAttribute(this,n),Eu.applyMatrix3(t),this.setXY(n,Eu.x,Eu.y);else if(this.itemSize===3)for(let n=0,s=this.count;n<s;n++)gn.fromBufferAttribute(this,n),gn.applyMatrix3(t),this.setXYZ(n,gn.x,gn.y,gn.z);return this}applyMatrix4(t){for(let n=0,s=this.count;n<s;n++)gn.fromBufferAttribute(this,n),gn.applyMatrix4(t),this.setXYZ(n,gn.x,gn.y,gn.z);return this}applyNormalMatrix(t){for(let n=0,s=this.count;n<s;n++)gn.fromBufferAttribute(this,n),gn.applyNormalMatrix(t),this.setXYZ(n,gn.x,gn.y,gn.z);return this}transformDirection(t){for(let n=0,s=this.count;n<s;n++)gn.fromBufferAttribute(this,n),gn.transformDirection(t),this.setXYZ(n,gn.x,gn.y,gn.z);return this}set(t,n=0){return this.array.set(t,n),this}getComponent(t,n){let s=this.array[t*this.itemSize+n];return this.normalized&&(s=yl(s,this.array)),s}setComponent(t,n,s){return this.normalized&&(s=ei(s,this.array)),this.array[t*this.itemSize+n]=s,this}getX(t){let n=this.array[t*this.itemSize];return this.normalized&&(n=yl(n,this.array)),n}setX(t,n){return this.normalized&&(n=ei(n,this.array)),this.array[t*this.itemSize]=n,this}getY(t){let n=this.array[t*this.itemSize+1];return this.normalized&&(n=yl(n,this.array)),n}setY(t,n){return this.normalized&&(n=ei(n,this.array)),this.array[t*this.itemSize+1]=n,this}getZ(t){let n=this.array[t*this.itemSize+2];return this.normalized&&(n=yl(n,this.array)),n}setZ(t,n){return this.normalized&&(n=ei(n,this.array)),this.array[t*this.itemSize+2]=n,this}getW(t){let n=this.array[t*this.itemSize+3];return this.normalized&&(n=yl(n,this.array)),n}setW(t,n){return this.normalized&&(n=ei(n,this.array)),this.array[t*this.itemSize+3]=n,this}setXY(t,n,s){return t*=this.itemSize,this.normalized&&(n=ei(n,this.array),s=ei(s,this.array)),this.array[t+0]=n,this.array[t+1]=s,this}setXYZ(t,n,s,o){return t*=this.itemSize,this.normalized&&(n=ei(n,this.array),s=ei(s,this.array),o=ei(o,this.array)),this.array[t+0]=n,this.array[t+1]=s,this.array[t+2]=o,this}setXYZW(t,n,s,o,c){return t*=this.itemSize,this.normalized&&(n=ei(n,this.array),s=ei(s,this.array),o=ei(o,this.array),c=ei(c,this.array)),this.array[t+0]=n,this.array[t+1]=s,this.array[t+2]=o,this.array[t+3]=c,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Dy&&(t.usage=this.usage),t}}class AE extends si{constructor(t,n,s){super(new Uint16Array(t),n,s)}}class RE extends si{constructor(t,n,s){super(new Uint32Array(t),n,s)}}class Pa extends si{constructor(t,n,s){super(new Float32Array(t),n,s)}}let K3=0;const Ri=new un,rp=new ai,to=new st,pi=new Kl,Tl=new Kl,Tn=new st;class gi extends Eo{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:K3++}),this.uuid=jl(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(yE(t)?RE:AE)(t,1):this.index=t,this}setIndirect(t,n=0){return this.indirect=t,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,n){return this.attributes[t]=n,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,n,s=0){this.groups.push({start:t,count:n,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(t,n){this.drawRange.start=t,this.drawRange.count=n}applyMatrix4(t){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(t),n.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const c=new he().getNormalMatrix(t);s.applyNormalMatrix(c),s.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(t),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Ri.makeRotationFromQuaternion(t),this.applyMatrix4(Ri),this}rotateX(t){return Ri.makeRotationX(t),this.applyMatrix4(Ri),this}rotateY(t){return Ri.makeRotationY(t),this.applyMatrix4(Ri),this}rotateZ(t){return Ri.makeRotationZ(t),this.applyMatrix4(Ri),this}translate(t,n,s){return Ri.makeTranslation(t,n,s),this.applyMatrix4(Ri),this}scale(t,n,s){return Ri.makeScale(t,n,s),this.applyMatrix4(Ri),this}lookAt(t){return rp.lookAt(t),rp.updateMatrix(),this.applyMatrix4(rp.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(to).negate(),this.translate(to.x,to.y,to.z),this}setFromPoints(t){const n=this.getAttribute("position");if(n===void 0){const s=[];for(let o=0,c=t.length;o<c;o++){const u=t[o];s.push(u.x,u.y,u.z||0)}this.setAttribute("position",new Pa(s,3))}else{const s=Math.min(t.length,n.count);for(let o=0;o<s;o++){const c=t[o];n.setXYZ(o,c.x,c.y,c.z||0)}t.length>n.count&&oe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Kl);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ce("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new st(-1/0,-1/0,-1/0),new st(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),n)for(let s=0,o=n.length;s<o;s++){const c=n[s];pi.setFromBufferAttribute(c),this.morphTargetsRelative?(Tn.addVectors(this.boundingBox.min,pi.min),this.boundingBox.expandByPoint(Tn),Tn.addVectors(this.boundingBox.max,pi.max),this.boundingBox.expandByPoint(Tn)):(this.boundingBox.expandByPoint(pi.min),this.boundingBox.expandByPoint(pi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ce('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ff);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ce("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new st,1/0);return}if(t){const s=this.boundingSphere.center;if(pi.setFromBufferAttribute(t),n)for(let c=0,u=n.length;c<u;c++){const f=n[c];Tl.setFromBufferAttribute(f),this.morphTargetsRelative?(Tn.addVectors(pi.min,Tl.min),pi.expandByPoint(Tn),Tn.addVectors(pi.max,Tl.max),pi.expandByPoint(Tn)):(pi.expandByPoint(Tl.min),pi.expandByPoint(Tl.max))}pi.getCenter(s);let o=0;for(let c=0,u=t.count;c<u;c++)Tn.fromBufferAttribute(t,c),o=Math.max(o,s.distanceToSquared(Tn));if(n)for(let c=0,u=n.length;c<u;c++){const f=n[c],p=this.morphTargetsRelative;for(let d=0,g=f.count;d<g;d++)Tn.fromBufferAttribute(f,d),p&&(to.fromBufferAttribute(t,d),Tn.add(to)),o=Math.max(o,s.distanceToSquared(Tn))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&Ce('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,n=this.attributes;if(t===null||n.position===void 0||n.normal===void 0||n.uv===void 0){Ce("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=n.position,o=n.normal,c=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new si(new Float32Array(4*s.count),4));const u=this.getAttribute("tangent"),f=[],p=[];for(let k=0;k<s.count;k++)f[k]=new st,p[k]=new st;const d=new st,g=new st,v=new st,_=new Xe,y=new Xe,E=new Xe,b=new st,S=new st;function x(k,C,U){d.fromBufferAttribute(s,k),g.fromBufferAttribute(s,C),v.fromBufferAttribute(s,U),_.fromBufferAttribute(c,k),y.fromBufferAttribute(c,C),E.fromBufferAttribute(c,U),g.sub(d),v.sub(d),y.sub(_),E.sub(_);const H=1/(y.x*E.y-E.x*y.y);isFinite(H)&&(b.copy(g).multiplyScalar(E.y).addScaledVector(v,-y.y).multiplyScalar(H),S.copy(v).multiplyScalar(y.x).addScaledVector(g,-E.x).multiplyScalar(H),f[k].add(b),f[C].add(b),f[U].add(b),p[k].add(S),p[C].add(S),p[U].add(S))}let D=this.groups;D.length===0&&(D=[{start:0,count:t.count}]);for(let k=0,C=D.length;k<C;++k){const U=D[k],H=U.start,$=U.count;for(let tt=H,ft=H+$;tt<ft;tt+=3)x(t.getX(tt+0),t.getX(tt+1),t.getX(tt+2))}const w=new st,L=new st,N=new st,B=new st;function P(k){N.fromBufferAttribute(o,k),B.copy(N);const C=f[k];w.copy(C),w.sub(N.multiplyScalar(N.dot(C))).normalize(),L.crossVectors(B,C);const H=L.dot(p[k])<0?-1:1;u.setXYZW(k,w.x,w.y,w.z,H)}for(let k=0,C=D.length;k<C;++k){const U=D[k],H=U.start,$=U.count;for(let tt=H,ft=H+$;tt<ft;tt+=3)P(t.getX(tt+0)),P(t.getX(tt+1)),P(t.getX(tt+2))}}computeVertexNormals(){const t=this.index,n=this.getAttribute("position");if(n!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new si(new Float32Array(n.count*3),3),this.setAttribute("normal",s);else for(let _=0,y=s.count;_<y;_++)s.setXYZ(_,0,0,0);const o=new st,c=new st,u=new st,f=new st,p=new st,d=new st,g=new st,v=new st;if(t)for(let _=0,y=t.count;_<y;_+=3){const E=t.getX(_+0),b=t.getX(_+1),S=t.getX(_+2);o.fromBufferAttribute(n,E),c.fromBufferAttribute(n,b),u.fromBufferAttribute(n,S),g.subVectors(u,c),v.subVectors(o,c),g.cross(v),f.fromBufferAttribute(s,E),p.fromBufferAttribute(s,b),d.fromBufferAttribute(s,S),f.add(g),p.add(g),d.add(g),s.setXYZ(E,f.x,f.y,f.z),s.setXYZ(b,p.x,p.y,p.z),s.setXYZ(S,d.x,d.y,d.z)}else for(let _=0,y=n.count;_<y;_+=3)o.fromBufferAttribute(n,_+0),c.fromBufferAttribute(n,_+1),u.fromBufferAttribute(n,_+2),g.subVectors(u,c),v.subVectors(o,c),g.cross(v),s.setXYZ(_+0,g.x,g.y,g.z),s.setXYZ(_+1,g.x,g.y,g.z),s.setXYZ(_+2,g.x,g.y,g.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let n=0,s=t.count;n<s;n++)Tn.fromBufferAttribute(t,n),Tn.normalize(),t.setXYZ(n,Tn.x,Tn.y,Tn.z)}toNonIndexed(){function t(f,p){const d=f.array,g=f.itemSize,v=f.normalized,_=new d.constructor(p.length*g);let y=0,E=0;for(let b=0,S=p.length;b<S;b++){f.isInterleavedBufferAttribute?y=p[b]*f.data.stride+f.offset:y=p[b]*g;for(let x=0;x<g;x++)_[E++]=d[y++]}return new si(_,g,v)}if(this.index===null)return oe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new gi,s=this.index.array,o=this.attributes;for(const f in o){const p=o[f],d=t(p,s);n.setAttribute(f,d)}const c=this.morphAttributes;for(const f in c){const p=[],d=c[f];for(let g=0,v=d.length;g<v;g++){const _=d[g],y=t(_,s);p.push(y)}n.morphAttributes[f]=p}n.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let f=0,p=u.length;f<p;f++){const d=u[f];n.addGroup(d.start,d.count,d.materialIndex)}return n}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const d in p)p[d]!==void 0&&(t[d]=p[d]);return t}t.data={attributes:{}};const n=this.index;n!==null&&(t.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const s=this.attributes;for(const p in s){const d=s[p];t.data.attributes[p]=d.toJSON(t.data)}const o={};let c=!1;for(const p in this.morphAttributes){const d=this.morphAttributes[p],g=[];for(let v=0,_=d.length;v<_;v++){const y=d[v];g.push(y.toJSON(t.data))}g.length>0&&(o[p]=g,c=!0)}c&&(t.data.morphAttributes=o,t.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(t.data.groups=JSON.parse(JSON.stringify(u)));const f=this.boundingSphere;return f!==null&&(t.data.boundingSphere=f.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=t.name;const s=t.index;s!==null&&this.setIndex(s.clone());const o=t.attributes;for(const d in o){const g=o[d];this.setAttribute(d,g.clone(n))}const c=t.morphAttributes;for(const d in c){const g=[],v=c[d];for(let _=0,y=v.length;_<y;_++)g.push(v[_].clone(n));this.morphAttributes[d]=g}this.morphTargetsRelative=t.morphTargetsRelative;const u=t.groups;for(let d=0,g=u.length;d<g;d++){const v=u[d];this.addGroup(v.start,v.count,v.materialIndex)}const f=t.boundingBox;f!==null&&(this.boundingBox=f.clone());const p=t.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Wy=new un,Ys=new ME,Tu=new ff,qy=new st,bu=new st,Au=new st,Ru=new st,op=new st,Cu=new st,Yy=new st,wu=new st;class Va extends ai{constructor(t=new gi,n=new bE){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,s=Object.keys(n);if(s.length>0){const o=n[s[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,u=o.length;c<u;c++){const f=o[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=c}}}}getVertexPosition(t,n){const s=this.geometry,o=s.attributes.position,c=s.morphAttributes.position,u=s.morphTargetsRelative;n.fromBufferAttribute(o,t);const f=this.morphTargetInfluences;if(c&&f){Cu.set(0,0,0);for(let p=0,d=c.length;p<d;p++){const g=f[p],v=c[p];g!==0&&(op.fromBufferAttribute(v,t),u?Cu.addScaledVector(op,g):Cu.addScaledVector(op.sub(n),g))}n.add(Cu)}return n}raycast(t,n){const s=this.geometry,o=this.material,c=this.matrixWorld;o!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),Tu.copy(s.boundingSphere),Tu.applyMatrix4(c),Ys.copy(t.ray).recast(t.near),!(Tu.containsPoint(Ys.origin)===!1&&(Ys.intersectSphere(Tu,qy)===null||Ys.origin.distanceToSquared(qy)>(t.far-t.near)**2))&&(Wy.copy(c).invert(),Ys.copy(t.ray).applyMatrix4(Wy),!(s.boundingBox!==null&&Ys.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(t,n,Ys)))}_computeIntersections(t,n,s){let o;const c=this.geometry,u=this.material,f=c.index,p=c.attributes.position,d=c.attributes.uv,g=c.attributes.uv1,v=c.attributes.normal,_=c.groups,y=c.drawRange;if(f!==null)if(Array.isArray(u))for(let E=0,b=_.length;E<b;E++){const S=_[E],x=u[S.materialIndex],D=Math.max(S.start,y.start),w=Math.min(f.count,Math.min(S.start+S.count,y.start+y.count));for(let L=D,N=w;L<N;L+=3){const B=f.getX(L),P=f.getX(L+1),k=f.getX(L+2);o=Du(this,x,t,s,d,g,v,B,P,k),o&&(o.faceIndex=Math.floor(L/3),o.face.materialIndex=S.materialIndex,n.push(o))}}else{const E=Math.max(0,y.start),b=Math.min(f.count,y.start+y.count);for(let S=E,x=b;S<x;S+=3){const D=f.getX(S),w=f.getX(S+1),L=f.getX(S+2);o=Du(this,u,t,s,d,g,v,D,w,L),o&&(o.faceIndex=Math.floor(S/3),n.push(o))}}else if(p!==void 0)if(Array.isArray(u))for(let E=0,b=_.length;E<b;E++){const S=_[E],x=u[S.materialIndex],D=Math.max(S.start,y.start),w=Math.min(p.count,Math.min(S.start+S.count,y.start+y.count));for(let L=D,N=w;L<N;L+=3){const B=L,P=L+1,k=L+2;o=Du(this,x,t,s,d,g,v,B,P,k),o&&(o.faceIndex=Math.floor(L/3),o.face.materialIndex=S.materialIndex,n.push(o))}}else{const E=Math.max(0,y.start),b=Math.min(p.count,y.start+y.count);for(let S=E,x=b;S<x;S+=3){const D=S,w=S+1,L=S+2;o=Du(this,u,t,s,d,g,v,D,w,L),o&&(o.faceIndex=Math.floor(S/3),n.push(o))}}}}function Q3(i,t,n,s,o,c,u,f){let p;if(t.side===ii?p=s.intersectTriangle(u,c,o,!0,f):p=s.intersectTriangle(o,c,u,t.side===Ts,f),p===null)return null;wu.copy(f),wu.applyMatrix4(i.matrixWorld);const d=n.ray.origin.distanceTo(wu);return d<n.near||d>n.far?null:{distance:d,point:wu.clone(),object:i}}function Du(i,t,n,s,o,c,u,f,p,d){i.getVertexPosition(f,bu),i.getVertexPosition(p,Au),i.getVertexPosition(d,Ru);const g=Q3(i,t,n,s,bu,Au,Ru,Yy);if(g){const v=new st;Xi.getBarycoord(Yy,bu,Au,Ru,v),o&&(g.uv=Xi.getInterpolatedAttribute(o,f,p,d,v,new Xe)),c&&(g.uv1=Xi.getInterpolatedAttribute(c,f,p,d,v,new Xe)),u&&(g.normal=Xi.getInterpolatedAttribute(u,f,p,d,v,new st),g.normal.dot(s.direction)>0&&g.normal.multiplyScalar(-1));const _={a:f,b:p,c:d,normal:new st,materialIndex:0};Xi.getNormal(bu,Au,Ru,_.normal),g.face=_,g.barycoord=v}return g}class Jl extends gi{constructor(t=1,n=1,s=1,o=1,c=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:n,depth:s,widthSegments:o,heightSegments:c,depthSegments:u};const f=this;o=Math.floor(o),c=Math.floor(c),u=Math.floor(u);const p=[],d=[],g=[],v=[];let _=0,y=0;E("z","y","x",-1,-1,s,n,t,u,c,0),E("z","y","x",1,-1,s,n,-t,u,c,1),E("x","z","y",1,1,t,s,n,o,u,2),E("x","z","y",1,-1,t,s,-n,o,u,3),E("x","y","z",1,-1,t,n,s,o,c,4),E("x","y","z",-1,-1,t,n,-s,o,c,5),this.setIndex(p),this.setAttribute("position",new Pa(d,3)),this.setAttribute("normal",new Pa(g,3)),this.setAttribute("uv",new Pa(v,2));function E(b,S,x,D,w,L,N,B,P,k,C){const U=L/P,H=N/k,$=L/2,tt=N/2,ft=B/2,ot=P+1,I=k+1;let z=0,K=0;const yt=new st;for(let _t=0;_t<I;_t++){const F=_t*H-tt;for(let at=0;at<ot;at++){const gt=at*U-$;yt[b]=gt*D,yt[S]=F*w,yt[x]=ft,d.push(yt.x,yt.y,yt.z),yt[b]=0,yt[S]=0,yt[x]=B>0?1:-1,g.push(yt.x,yt.y,yt.z),v.push(at/P),v.push(1-_t/k),z+=1}}for(let _t=0;_t<k;_t++)for(let F=0;F<P;F++){const at=_+F+ot*_t,gt=_+F+ot*(_t+1),At=_+(F+1)+ot*(_t+1),Vt=_+(F+1)+ot*_t;p.push(at,gt,Vt),p.push(gt,At,Vt),K+=6}f.addGroup(y,K,C),y+=K,_+=z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Jl(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function xo(i){const t={};for(const n in i){t[n]={};for(const s in i[n]){const o=i[n][s];o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)?o.isRenderTargetTexture?(oe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[n][s]=null):t[n][s]=o.clone():Array.isArray(o)?t[n][s]=o.slice():t[n][s]=o}}return t}function Wn(i){const t={};for(let n=0;n<i.length;n++){const s=xo(i[n]);for(const o in s)t[o]=s[o]}return t}function J3(i){const t=[];for(let n=0;n<i.length;n++)t.push(i[n].clone());return t}function CE(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:be.workingColorSpace}const $3={clone:xo,merge:Wn};var t2=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,e2=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ra extends Ql{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=t2,this.fragmentShader=e2,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=xo(t.uniforms),this.uniformsGroups=J3(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const n=super.toJSON(t);n.glslVersion=this.glslVersion,n.uniforms={};for(const o in this.uniforms){const u=this.uniforms[o].value;u&&u.isTexture?n.uniforms[o]={type:"t",value:u.toJSON(t).uuid}:u&&u.isColor?n.uniforms[o]={type:"c",value:u.getHex()}:u&&u.isVector2?n.uniforms[o]={type:"v2",value:u.toArray()}:u&&u.isVector3?n.uniforms[o]={type:"v3",value:u.toArray()}:u&&u.isVector4?n.uniforms[o]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?n.uniforms[o]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?n.uniforms[o]={type:"m4",value:u.toArray()}:n.uniforms[o]={value:u}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const s={};for(const o in this.extensions)this.extensions[o]===!0&&(s[o]=!0);return Object.keys(s).length>0&&(n.extensions=s),n}}class wE extends ai{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new un,this.projectionMatrix=new un,this.projectionMatrixInverse=new un,this.coordinateSystem=ta,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,n){return super.copy(t,n),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,n){super.updateWorldMatrix(t,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const _s=new st,jy=new Xe,Zy=new Xe;class mi extends wE{constructor(t=50,n=1,s=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=s,this.far=o,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const n=.5*this.getFilmHeight()/t;this.fov=wm*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Vd*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return wm*2*Math.atan(Math.tan(Vd*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,n,s){_s.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(_s.x,_s.y).multiplyScalar(-t/_s.z),_s.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(_s.x,_s.y).multiplyScalar(-t/_s.z)}getViewSize(t,n){return this.getViewBounds(t,jy,Zy),n.subVectors(Zy,jy)}setViewOffset(t,n,s,o,c,u){this.aspect=t/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=s,this.view.offsetY=o,this.view.width=c,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let n=t*Math.tan(Vd*.5*this.fov)/this.zoom,s=2*n,o=this.aspect*s,c=-.5*o;const u=this.view;if(this.view!==null&&this.view.enabled){const p=u.fullWidth,d=u.fullHeight;c+=u.offsetX*o/p,n-=u.offsetY*s/d,o*=u.width/p,s*=u.height/d}const f=this.filmOffset;f!==0&&(c+=t*f/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+o,n,n-s,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const eo=-90,no=1;class n2 extends ai{constructor(t,n,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new mi(eo,no,t,n);o.layers=this.layers,this.add(o);const c=new mi(eo,no,t,n);c.layers=this.layers,this.add(c);const u=new mi(eo,no,t,n);u.layers=this.layers,this.add(u);const f=new mi(eo,no,t,n);f.layers=this.layers,this.add(f);const p=new mi(eo,no,t,n);p.layers=this.layers,this.add(p);const d=new mi(eo,no,t,n);d.layers=this.layers,this.add(d)}updateCoordinateSystem(){const t=this.coordinateSystem,n=this.children.concat(),[s,o,c,u,f,p]=n;for(const d of n)this.remove(d);if(t===ta)s.up.set(0,1,0),s.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),f.up.set(0,1,0),f.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(t===ef)s.up.set(0,-1,0),s.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),f.up.set(0,-1,0),f.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const d of n)this.add(d),d.updateMatrixWorld()}update(t,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:o}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[c,u,f,p,d,g]=this.children,v=t.getRenderTarget(),_=t.getActiveCubeFace(),y=t.getActiveMipmapLevel(),E=t.xr.enabled;t.xr.enabled=!1;const b=s.texture.generateMipmaps;s.texture.generateMipmaps=!1,t.setRenderTarget(s,0,o),t.render(n,c),t.setRenderTarget(s,1,o),t.render(n,u),t.setRenderTarget(s,2,o),t.render(n,f),t.setRenderTarget(s,3,o),t.render(n,p),t.setRenderTarget(s,4,o),t.render(n,d),s.texture.generateMipmaps=b,t.setRenderTarget(s,5,o),t.render(n,g),t.setRenderTarget(v,_,y),t.xr.enabled=E,s.texture.needsPMREMUpdate=!0}}class DE extends jn{constructor(t=[],n=or,s,o,c,u,f,p,d,g){super(t,n,s,o,c,u,f,p,d,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class UE extends aa{constructor(t=1,n={}){super(t,t,n),this.isWebGLCubeRenderTarget=!0;const s={width:t,height:t,depth:1},o=[s,s,s,s,s,s];this.texture=new DE(o),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},o=new Jl(5,5,5),c=new ra({name:"CubemapFromEquirect",uniforms:xo(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:ii,blending:La});c.uniforms.tEquirect.value=n;const u=new Va(o,c),f=n.minFilter;return n.minFilter===ir&&(n.minFilter=Gn),new n2(1,10,this).update(t,u),n.minFilter=f,u.geometry.dispose(),u.material.dispose(),this}clear(t,n=!0,s=!0,o=!0){const c=t.getRenderTarget();for(let u=0;u<6;u++)t.setRenderTarget(this,u),t.clear(n,s,o);t.setRenderTarget(c)}}class Uu extends ai{constructor(){super(),this.isGroup=!0,this.type="Group"}}const i2={type:"move"};class lp{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Uu,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Uu,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new st,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new st),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Uu,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new st,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new st),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const n=this._hand;if(n)for(const s of t.hand.values())this._getHandJoint(n,s)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,n,s){let o=null,c=null,u=null;const f=this._targetRay,p=this._grip,d=this._hand;if(t&&n.session.visibilityState!=="visible-blurred"){if(d&&t.hand){u=!0;for(const b of t.hand.values()){const S=n.getJointPose(b,s),x=this._getHandJoint(d,b);S!==null&&(x.matrix.fromArray(S.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=S.radius),x.visible=S!==null}const g=d.joints["index-finger-tip"],v=d.joints["thumb-tip"],_=g.position.distanceTo(v.position),y=.02,E=.005;d.inputState.pinching&&_>y+E?(d.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!d.inputState.pinching&&_<=y-E&&(d.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else p!==null&&t.gripSpace&&(c=n.getPose(t.gripSpace,s),c!==null&&(p.matrix.fromArray(c.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,c.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(c.linearVelocity)):p.hasLinearVelocity=!1,c.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(c.angularVelocity)):p.hasAngularVelocity=!1));f!==null&&(o=n.getPose(t.targetRaySpace,s),o===null&&c!==null&&(o=c),o!==null&&(f.matrix.fromArray(o.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,o.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(o.linearVelocity)):f.hasLinearVelocity=!1,o.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(o.angularVelocity)):f.hasAngularVelocity=!1,this.dispatchEvent(i2)))}return f!==null&&(f.visible=o!==null),p!==null&&(p.visible=c!==null),d!==null&&(d.visible=u!==null),this}_getHandJoint(t,n){if(t.joints[n.jointName]===void 0){const s=new Uu;s.matrixAutoUpdate=!1,s.visible=!1,t.joints[n.jointName]=s,t.add(s)}return t.joints[n.jointName]}}class LE extends ai{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new za,this.environmentIntensity=1,this.environmentRotation=new za,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,n){return super.copy(t,n),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const n=super.toJSON(t);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class a2 extends jn{constructor(t=null,n=1,s=1,o,c,u,f,p,d=Fn,g=Fn,v,_){super(null,u,f,p,d,g,o,c,v,_),this.isDataTexture=!0,this.image={data:t,width:n,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const cp=new st,s2=new st,r2=new he;class Js{constructor(t=new st(1,0,0),n=0){this.isPlane=!0,this.normal=t,this.constant=n}set(t,n){return this.normal.copy(t),this.constant=n,this}setComponents(t,n,s,o){return this.normal.set(t,n,s),this.constant=o,this}setFromNormalAndCoplanarPoint(t,n){return this.normal.copy(t),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(t,n,s){const o=cp.subVectors(s,n).cross(s2.subVectors(t,n)).normalize();return this.setFromNormalAndCoplanarPoint(o,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,n){return n.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,n){const s=t.delta(cp),o=this.normal.dot(s);if(o===0)return this.distanceToPoint(t.start)===0?n.copy(t.start):null;const c=-(t.start.dot(this.normal)+this.constant)/o;return c<0||c>1?null:n.copy(t.start).addScaledVector(s,c)}intersectsLine(t){const n=this.distanceToPoint(t.start),s=this.distanceToPoint(t.end);return n<0&&s>0||s<0&&n>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,n){const s=n||r2.getNormalMatrix(t),o=this.coplanarPoint(cp).applyMatrix4(t),c=this.normal.applyMatrix3(s).normalize();return this.constant=-o.dot(c),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const js=new ff,o2=new Xe(.5,.5),Lu=new st;class NE{constructor(t=new Js,n=new Js,s=new Js,o=new Js,c=new Js,u=new Js){this.planes=[t,n,s,o,c,u]}set(t,n,s,o,c,u){const f=this.planes;return f[0].copy(t),f[1].copy(n),f[2].copy(s),f[3].copy(o),f[4].copy(c),f[5].copy(u),this}copy(t){const n=this.planes;for(let s=0;s<6;s++)n[s].copy(t.planes[s]);return this}setFromProjectionMatrix(t,n=ta,s=!1){const o=this.planes,c=t.elements,u=c[0],f=c[1],p=c[2],d=c[3],g=c[4],v=c[5],_=c[6],y=c[7],E=c[8],b=c[9],S=c[10],x=c[11],D=c[12],w=c[13],L=c[14],N=c[15];if(o[0].setComponents(d-u,y-g,x-E,N-D).normalize(),o[1].setComponents(d+u,y+g,x+E,N+D).normalize(),o[2].setComponents(d+f,y+v,x+b,N+w).normalize(),o[3].setComponents(d-f,y-v,x-b,N-w).normalize(),s)o[4].setComponents(p,_,S,L).normalize(),o[5].setComponents(d-p,y-_,x-S,N-L).normalize();else if(o[4].setComponents(d-p,y-_,x-S,N-L).normalize(),n===ta)o[5].setComponents(d+p,y+_,x+S,N+L).normalize();else if(n===ef)o[5].setComponents(p,_,S,L).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),js.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const n=t.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),js.copy(n.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(js)}intersectsSprite(t){js.center.set(0,0,0);const n=o2.distanceTo(t.center);return js.radius=.7071067811865476+n,js.applyMatrix4(t.matrixWorld),this.intersectsSphere(js)}intersectsSphere(t){const n=this.planes,s=t.center,o=-t.radius;for(let c=0;c<6;c++)if(n[c].distanceToPoint(s)<o)return!1;return!0}intersectsBox(t){const n=this.planes;for(let s=0;s<6;s++){const o=n[s];if(Lu.x=o.normal.x>0?t.max.x:t.min.x,Lu.y=o.normal.y>0?t.max.y:t.min.y,Lu.z=o.normal.z>0?t.max.z:t.min.z,o.distanceToPoint(Lu)<0)return!1}return!0}containsPoint(t){const n=this.planes;for(let s=0;s<6;s++)if(n[s].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class af extends Ql{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ve(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Ky=new un,Dm=new ME,Nu=new ff,Pu=new st;class Um extends ai{constructor(t=new gi,n=new af){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,n){const s=this.geometry,o=this.matrixWorld,c=t.params.Points.threshold,u=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),Nu.copy(s.boundingSphere),Nu.applyMatrix4(o),Nu.radius+=c,t.ray.intersectsSphere(Nu)===!1)return;Ky.copy(o).invert(),Dm.copy(t.ray).applyMatrix4(Ky);const f=c/((this.scale.x+this.scale.y+this.scale.z)/3),p=f*f,d=s.index,v=s.attributes.position;if(d!==null){const _=Math.max(0,u.start),y=Math.min(d.count,u.start+u.count);for(let E=_,b=y;E<b;E++){const S=d.getX(E);Pu.fromBufferAttribute(v,S),Qy(Pu,S,p,o,t,n,this)}}else{const _=Math.max(0,u.start),y=Math.min(v.count,u.start+u.count);for(let E=_,b=y;E<b;E++)Pu.fromBufferAttribute(v,E),Qy(Pu,E,p,o,t,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,s=Object.keys(n);if(s.length>0){const o=n[s[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,u=o.length;c<u;c++){const f=o[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=c}}}}}function Qy(i,t,n,s,o,c,u){const f=Dm.distanceSqToPoint(i);if(f<n){const p=new st;Dm.closestPointToPoint(i,p),p.applyMatrix4(s);const d=o.ray.origin.distanceTo(p);if(d<o.near||d>o.far)return;c.push({distance:d,distanceToRay:Math.sqrt(f),point:p,index:t,face:null,faceIndex:null,barycoord:null,object:u})}}class kl extends jn{constructor(t,n,s=sa,o,c,u,f=Fn,p=Fn,d,g=Ia,v=1){if(g!==Ia&&g!==ar)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const _={width:t,height:n,depth:v};super(_,o,c,u,f,p,g,s,d),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Eg(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const n=super.toJSON(t);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class l2 extends kl{constructor(t,n=sa,s=or,o,c,u=Fn,f=Fn,p,d=Ia){const g={width:t,height:t,depth:1},v=[g,g,g,g,g,g];super(t,t,n,s,o,c,u,f,p,d),this.image=v,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class PE extends jn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class hf extends gi{constructor(t=1,n=1,s=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:n,widthSegments:s,heightSegments:o};const c=t/2,u=n/2,f=Math.floor(s),p=Math.floor(o),d=f+1,g=p+1,v=t/f,_=n/p,y=[],E=[],b=[],S=[];for(let x=0;x<g;x++){const D=x*_-u;for(let w=0;w<d;w++){const L=w*v-c;E.push(L,-D,0),b.push(0,0,1),S.push(w/f),S.push(1-x/p)}}for(let x=0;x<p;x++)for(let D=0;D<f;D++){const w=D+d*x,L=D+d*(x+1),N=D+1+d*(x+1),B=D+1+d*x;y.push(w,L,B),y.push(L,N,B)}this.setIndex(y),this.setAttribute("position",new Pa(E,3)),this.setAttribute("normal",new Pa(b,3)),this.setAttribute("uv",new Pa(S,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new hf(t.width,t.height,t.widthSegments,t.heightSegments)}}class c2 extends ra{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class u2 extends Ql{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=E3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class f2 extends Ql{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class OE extends wE{constructor(t=-1,n=1,s=1,o=-1,c=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=n,this.top=s,this.bottom=o,this.near=c,this.far=u,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,n,s,o,c,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=s,this.view.offsetY=o,this.view.width=c,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let c=s-t,u=s+t,f=o+n,p=o-n;if(this.view!==null&&this.view.enabled){const d=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=d*this.view.offsetX,u=c+d*this.view.width,f-=g*this.view.offsetY,p=f-g*this.view.height}this.projectionMatrix.makeOrthographic(c,u,f,p,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class h2 extends mi{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}function Jy(i,t,n,s){const o=d2(s);switch(n){case vE:return i*t;case xE:return i*t/o.components*o.byteLength;case _g:return i*t/o.components*o.byteLength;case vo:return i*t*2/o.components*o.byteLength;case xg:return i*t*2/o.components*o.byteLength;case _E:return i*t*3/o.components*o.byteLength;case Wi:return i*t*4/o.components*o.byteLength;case yg:return i*t*4/o.components*o.byteLength;case Gu:case ku:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Xu:case Wu:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Jp:case tm:return Math.max(i,16)*Math.max(t,8)/4;case Qp:case $p:return Math.max(i,8)*Math.max(t,8)/2;case em:case nm:case am:case sm:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case im:case rm:case om:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case lm:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case cm:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case um:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case fm:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case hm:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case dm:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case pm:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case mm:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case gm:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case vm:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case _m:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case xm:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case ym:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Sm:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Mm:case Em:case Tm:return Math.ceil(i/4)*Math.ceil(t/4)*16;case bm:case Am:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Rm:case Cm:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function d2(i){switch(i){case Di:case dE:return{byteLength:1,components:1};case Vl:case pE:case Ba:return{byteLength:2,components:1};case gg:case vg:return{byteLength:2,components:4};case sa:case mg:case $i:return{byteLength:4,components:1};case mE:case gE:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:pg}}));typeof window<"u"&&(window.__THREE__?oe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=pg);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function FE(){let i=null,t=!1,n=null,s=null;function o(c,u){n(c,u),s=i.requestAnimationFrame(o)}return{start:function(){t!==!0&&n!==null&&(s=i.requestAnimationFrame(o),t=!0)},stop:function(){i.cancelAnimationFrame(s),t=!1},setAnimationLoop:function(c){n=c},setContext:function(c){i=c}}}function p2(i){const t=new WeakMap;function n(f,p){const d=f.array,g=f.usage,v=d.byteLength,_=i.createBuffer();i.bindBuffer(p,_),i.bufferData(p,d,g),f.onUploadCallback();let y;if(d instanceof Float32Array)y=i.FLOAT;else if(typeof Float16Array<"u"&&d instanceof Float16Array)y=i.HALF_FLOAT;else if(d instanceof Uint16Array)f.isFloat16BufferAttribute?y=i.HALF_FLOAT:y=i.UNSIGNED_SHORT;else if(d instanceof Int16Array)y=i.SHORT;else if(d instanceof Uint32Array)y=i.UNSIGNED_INT;else if(d instanceof Int32Array)y=i.INT;else if(d instanceof Int8Array)y=i.BYTE;else if(d instanceof Uint8Array)y=i.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)y=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:_,type:y,bytesPerElement:d.BYTES_PER_ELEMENT,version:f.version,size:v}}function s(f,p,d){const g=p.array,v=p.updateRanges;if(i.bindBuffer(d,f),v.length===0)i.bufferSubData(d,0,g);else{v.sort((y,E)=>y.start-E.start);let _=0;for(let y=1;y<v.length;y++){const E=v[_],b=v[y];b.start<=E.start+E.count+1?E.count=Math.max(E.count,b.start+b.count-E.start):(++_,v[_]=b)}v.length=_+1;for(let y=0,E=v.length;y<E;y++){const b=v[y];i.bufferSubData(d,b.start*g.BYTES_PER_ELEMENT,g,b.start,b.count)}p.clearUpdateRanges()}p.onUploadCallback()}function o(f){return f.isInterleavedBufferAttribute&&(f=f.data),t.get(f)}function c(f){f.isInterleavedBufferAttribute&&(f=f.data);const p=t.get(f);p&&(i.deleteBuffer(p.buffer),t.delete(f))}function u(f,p){if(f.isInterleavedBufferAttribute&&(f=f.data),f.isGLBufferAttribute){const g=t.get(f);(!g||g.version<f.version)&&t.set(f,{buffer:f.buffer,type:f.type,bytesPerElement:f.elementSize,version:f.version});return}const d=t.get(f);if(d===void 0)t.set(f,n(f,p));else if(d.version<f.version){if(d.size!==f.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(d.buffer,f,p),d.version=f.version}}return{get:o,remove:c,update:u}}var m2=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,g2=`#ifdef USE_ALPHAHASH
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
#endif`,v2=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,_2=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,x2=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,y2=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,S2=`#ifdef USE_AOMAP
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
#endif`,M2=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,E2=`#ifdef USE_BATCHING
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
#endif`,T2=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,b2=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,A2=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,R2=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,C2=`#ifdef USE_IRIDESCENCE
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
#endif`,w2=`#ifdef USE_BUMPMAP
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
#endif`,D2=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,U2=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,L2=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,N2=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,P2=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,O2=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,F2=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,B2=`#if defined( USE_COLOR_ALPHA )
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
#endif`,I2=`#define PI 3.141592653589793
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
} // validated`,z2=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,V2=`vec3 transformedNormal = objectNormal;
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
#endif`,H2=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,G2=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,k2=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,X2=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,W2="gl_FragColor = linearToOutputTexel( gl_FragColor );",q2=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Y2=`#ifdef USE_ENVMAP
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
#endif`,j2=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Z2=`#ifdef USE_ENVMAP
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
#endif`,K2=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Q2=`#ifdef USE_ENVMAP
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
#endif`,J2=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,$2=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,tD=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,eD=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,nD=`#ifdef USE_GRADIENTMAP
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
}`,iD=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,aD=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,sD=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,rD=`uniform bool receiveShadow;
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
#endif`,oD=`#ifdef USE_ENVMAP
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
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
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
#endif`,lD=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,cD=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,uD=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,fD=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,hD=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
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
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
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
#endif`,dD=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
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
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
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
		return v;
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
	vec3 f0 = material.specularColorBlended;
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
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
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
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
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
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( vec3( 1.0 ) - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
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
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,pD=`
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
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
#endif`,mD=`#if defined( RE_IndirectDiffuse )
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
#endif`,gD=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,vD=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,_D=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,xD=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,yD=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,SD=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,MD=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ED=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,TD=`#if defined( USE_POINTS_UV )
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
#endif`,bD=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,AD=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,RD=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,CD=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,wD=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,DD=`#ifdef USE_MORPHTARGETS
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
#endif`,LD=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,ND=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,PD=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,OD=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,FD=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,BD=`#ifdef USE_NORMALMAP
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
#endif`,ID=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,zD=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,VD=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,HD=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,GD=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,kD=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,XD=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,WD=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,qD=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,YD=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,jD=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ZD=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,KD=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
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
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 0, 5, phi ).x + bitangent * vogelDiskSample( 0, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 1, 5, phi ).x + bitangent * vogelDiskSample( 1, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 2, 5, phi ).x + bitangent * vogelDiskSample( 2, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 3, 5, phi ).x + bitangent * vogelDiskSample( 3, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 4, 5, phi ).x + bitangent * vogelDiskSample( 4, 5, phi ).y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadow = step( depth, dp );
			#else
				shadow = step( dp, depth );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,QD=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,JD=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,$D=`float getShadowMask() {
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
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
}`,tU=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,eU=`#ifdef USE_SKINNING
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
#endif`,nU=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,iU=`#ifdef USE_SKINNING
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
#endif`,aU=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,sU=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,rU=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,oU=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,lU=`#ifdef USE_TRANSMISSION
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
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,cU=`#ifdef USE_TRANSMISSION
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
#endif`,uU=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,fU=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,hU=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,dU=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const pU=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,mU=`uniform sampler2D t2D;
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
}`,gU=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,vU=`#ifdef ENVMAP_TYPE_CUBE
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
}`,_U=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,xU=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,yU=`#include <common>
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
}`,SU=`#if DEPTH_PACKING == 3200
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,MU=`#define DISTANCE
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
}`,EU=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
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
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,TU=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,bU=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,AU=`uniform float scale;
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
}`,RU=`uniform vec3 diffuse;
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
}`,CU=`#include <common>
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
}`,wU=`uniform vec3 diffuse;
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
}`,DU=`#define LAMBERT
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
}`,UU=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
}`,LU=`#define MATCAP
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
}`,NU=`#define MATCAP
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
}`,PU=`#define NORMAL
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
}`,OU=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
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
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,FU=`#define PHONG
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
}`,BU=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
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
}`,IU=`#define STANDARD
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
}`,zU=`#define STANDARD
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
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
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
}`,VU=`#define TOON
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
}`,HU=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
}`,GU=`uniform float size;
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
}`,kU=`uniform vec3 diffuse;
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
}`,XU=`#include <common>
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
}`,WU=`uniform vec3 color;
uniform float opacity;
#include <common>
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
}`,qU=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
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
}`,YU=`uniform vec3 diffuse;
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
}`,de={alphahash_fragment:m2,alphahash_pars_fragment:g2,alphamap_fragment:v2,alphamap_pars_fragment:_2,alphatest_fragment:x2,alphatest_pars_fragment:y2,aomap_fragment:S2,aomap_pars_fragment:M2,batching_pars_vertex:E2,batching_vertex:T2,begin_vertex:b2,beginnormal_vertex:A2,bsdfs:R2,iridescence_fragment:C2,bumpmap_pars_fragment:w2,clipping_planes_fragment:D2,clipping_planes_pars_fragment:U2,clipping_planes_pars_vertex:L2,clipping_planes_vertex:N2,color_fragment:P2,color_pars_fragment:O2,color_pars_vertex:F2,color_vertex:B2,common:I2,cube_uv_reflection_fragment:z2,defaultnormal_vertex:V2,displacementmap_pars_vertex:H2,displacementmap_vertex:G2,emissivemap_fragment:k2,emissivemap_pars_fragment:X2,colorspace_fragment:W2,colorspace_pars_fragment:q2,envmap_fragment:Y2,envmap_common_pars_fragment:j2,envmap_pars_fragment:Z2,envmap_pars_vertex:K2,envmap_physical_pars_fragment:oD,envmap_vertex:Q2,fog_vertex:J2,fog_pars_vertex:$2,fog_fragment:tD,fog_pars_fragment:eD,gradientmap_pars_fragment:nD,lightmap_pars_fragment:iD,lights_lambert_fragment:aD,lights_lambert_pars_fragment:sD,lights_pars_begin:rD,lights_toon_fragment:lD,lights_toon_pars_fragment:cD,lights_phong_fragment:uD,lights_phong_pars_fragment:fD,lights_physical_fragment:hD,lights_physical_pars_fragment:dD,lights_fragment_begin:pD,lights_fragment_maps:mD,lights_fragment_end:gD,logdepthbuf_fragment:vD,logdepthbuf_pars_fragment:_D,logdepthbuf_pars_vertex:xD,logdepthbuf_vertex:yD,map_fragment:SD,map_pars_fragment:MD,map_particle_fragment:ED,map_particle_pars_fragment:TD,metalnessmap_fragment:bD,metalnessmap_pars_fragment:AD,morphinstance_vertex:RD,morphcolor_vertex:CD,morphnormal_vertex:wD,morphtarget_pars_vertex:DD,morphtarget_vertex:UD,normal_fragment_begin:LD,normal_fragment_maps:ND,normal_pars_fragment:PD,normal_pars_vertex:OD,normal_vertex:FD,normalmap_pars_fragment:BD,clearcoat_normal_fragment_begin:ID,clearcoat_normal_fragment_maps:zD,clearcoat_pars_fragment:VD,iridescence_pars_fragment:HD,opaque_fragment:GD,packing:kD,premultiplied_alpha_fragment:XD,project_vertex:WD,dithering_fragment:qD,dithering_pars_fragment:YD,roughnessmap_fragment:jD,roughnessmap_pars_fragment:ZD,shadowmap_pars_fragment:KD,shadowmap_pars_vertex:QD,shadowmap_vertex:JD,shadowmask_pars_fragment:$D,skinbase_vertex:tU,skinning_pars_vertex:eU,skinning_vertex:nU,skinnormal_vertex:iU,specularmap_fragment:aU,specularmap_pars_fragment:sU,tonemapping_fragment:rU,tonemapping_pars_fragment:oU,transmission_fragment:lU,transmission_pars_fragment:cU,uv_pars_fragment:uU,uv_pars_vertex:fU,uv_vertex:hU,worldpos_vertex:dU,background_vert:pU,background_frag:mU,backgroundCube_vert:gU,backgroundCube_frag:vU,cube_vert:_U,cube_frag:xU,depth_vert:yU,depth_frag:SU,distance_vert:MU,distance_frag:EU,equirect_vert:TU,equirect_frag:bU,linedashed_vert:AU,linedashed_frag:RU,meshbasic_vert:CU,meshbasic_frag:wU,meshlambert_vert:DU,meshlambert_frag:UU,meshmatcap_vert:LU,meshmatcap_frag:NU,meshnormal_vert:PU,meshnormal_frag:OU,meshphong_vert:FU,meshphong_frag:BU,meshphysical_vert:IU,meshphysical_frag:zU,meshtoon_vert:VU,meshtoon_frag:HU,points_vert:GU,points_frag:kU,shadow_vert:XU,shadow_frag:WU,sprite_vert:qU,sprite_frag:YU},Pt={common:{diffuse:{value:new Ve(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new he},alphaMap:{value:null},alphaMapTransform:{value:new he},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new he}},envmap:{envMap:{value:null},envMapRotation:{value:new he},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new he}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new he}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new he},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new he},normalScale:{value:new Xe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new he},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new he}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new he}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new he}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ve(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ve(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new he},alphaTest:{value:0},uvTransform:{value:new he}},sprite:{diffuse:{value:new Ve(16777215)},opacity:{value:1},center:{value:new Xe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new he},alphaMap:{value:null},alphaMapTransform:{value:new he},alphaTest:{value:0}}},Ji={basic:{uniforms:Wn([Pt.common,Pt.specularmap,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.fog]),vertexShader:de.meshbasic_vert,fragmentShader:de.meshbasic_frag},lambert:{uniforms:Wn([Pt.common,Pt.specularmap,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.fog,Pt.lights,{emissive:{value:new Ve(0)}}]),vertexShader:de.meshlambert_vert,fragmentShader:de.meshlambert_frag},phong:{uniforms:Wn([Pt.common,Pt.specularmap,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.fog,Pt.lights,{emissive:{value:new Ve(0)},specular:{value:new Ve(1118481)},shininess:{value:30}}]),vertexShader:de.meshphong_vert,fragmentShader:de.meshphong_frag},standard:{uniforms:Wn([Pt.common,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.roughnessmap,Pt.metalnessmap,Pt.fog,Pt.lights,{emissive:{value:new Ve(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:de.meshphysical_vert,fragmentShader:de.meshphysical_frag},toon:{uniforms:Wn([Pt.common,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.gradientmap,Pt.fog,Pt.lights,{emissive:{value:new Ve(0)}}]),vertexShader:de.meshtoon_vert,fragmentShader:de.meshtoon_frag},matcap:{uniforms:Wn([Pt.common,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.fog,{matcap:{value:null}}]),vertexShader:de.meshmatcap_vert,fragmentShader:de.meshmatcap_frag},points:{uniforms:Wn([Pt.points,Pt.fog]),vertexShader:de.points_vert,fragmentShader:de.points_frag},dashed:{uniforms:Wn([Pt.common,Pt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:de.linedashed_vert,fragmentShader:de.linedashed_frag},depth:{uniforms:Wn([Pt.common,Pt.displacementmap]),vertexShader:de.depth_vert,fragmentShader:de.depth_frag},normal:{uniforms:Wn([Pt.common,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,{opacity:{value:1}}]),vertexShader:de.meshnormal_vert,fragmentShader:de.meshnormal_frag},sprite:{uniforms:Wn([Pt.sprite,Pt.fog]),vertexShader:de.sprite_vert,fragmentShader:de.sprite_frag},background:{uniforms:{uvTransform:{value:new he},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:de.background_vert,fragmentShader:de.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new he}},vertexShader:de.backgroundCube_vert,fragmentShader:de.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:de.cube_vert,fragmentShader:de.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:de.equirect_vert,fragmentShader:de.equirect_frag},distance:{uniforms:Wn([Pt.common,Pt.displacementmap,{referencePosition:{value:new st},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:de.distance_vert,fragmentShader:de.distance_frag},shadow:{uniforms:Wn([Pt.lights,Pt.fog,{color:{value:new Ve(0)},opacity:{value:1}}]),vertexShader:de.shadow_vert,fragmentShader:de.shadow_frag}};Ji.physical={uniforms:Wn([Ji.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new he},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new he},clearcoatNormalScale:{value:new Xe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new he},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new he},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new he},sheen:{value:0},sheenColor:{value:new Ve(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new he},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new he},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new he},transmissionSamplerSize:{value:new Xe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new he},attenuationDistance:{value:0},attenuationColor:{value:new Ve(0)},specularColor:{value:new Ve(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new he},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new he},anisotropyVector:{value:new Xe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new he}}]),vertexShader:de.meshphysical_vert,fragmentShader:de.meshphysical_frag};const Ou={r:0,b:0,g:0},Zs=new za,jU=new un;function ZU(i,t,n,s,o,c,u){const f=new Ve(0);let p=c===!0?0:1,d,g,v=null,_=0,y=null;function E(w){let L=w.isScene===!0?w.background:null;return L&&L.isTexture&&(L=(w.backgroundBlurriness>0?n:t).get(L)),L}function b(w){let L=!1;const N=E(w);N===null?x(f,p):N&&N.isColor&&(x(N,1),L=!0);const B=i.xr.getEnvironmentBlendMode();B==="additive"?s.buffers.color.setClear(0,0,0,1,u):B==="alpha-blend"&&s.buffers.color.setClear(0,0,0,0,u),(i.autoClear||L)&&(s.buffers.depth.setTest(!0),s.buffers.depth.setMask(!0),s.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function S(w,L){const N=E(L);N&&(N.isCubeTexture||N.mapping===uf)?(g===void 0&&(g=new Va(new Jl(1,1,1),new ra({name:"BackgroundCubeMaterial",uniforms:xo(Ji.backgroundCube.uniforms),vertexShader:Ji.backgroundCube.vertexShader,fragmentShader:Ji.backgroundCube.fragmentShader,side:ii,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(B,P,k){this.matrixWorld.copyPosition(k.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),o.update(g)),Zs.copy(L.backgroundRotation),Zs.x*=-1,Zs.y*=-1,Zs.z*=-1,N.isCubeTexture&&N.isRenderTargetTexture===!1&&(Zs.y*=-1,Zs.z*=-1),g.material.uniforms.envMap.value=N,g.material.uniforms.flipEnvMap.value=N.isCubeTexture&&N.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=L.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(jU.makeRotationFromEuler(Zs)),g.material.toneMapped=be.getTransfer(N.colorSpace)!==ze,(v!==N||_!==N.version||y!==i.toneMapping)&&(g.material.needsUpdate=!0,v=N,_=N.version,y=i.toneMapping),g.layers.enableAll(),w.unshift(g,g.geometry,g.material,0,0,null)):N&&N.isTexture&&(d===void 0&&(d=new Va(new hf(2,2),new ra({name:"BackgroundMaterial",uniforms:xo(Ji.background.uniforms),vertexShader:Ji.background.vertexShader,fragmentShader:Ji.background.fragmentShader,side:Ts,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),Object.defineProperty(d.material,"map",{get:function(){return this.uniforms.t2D.value}}),o.update(d)),d.material.uniforms.t2D.value=N,d.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,d.material.toneMapped=be.getTransfer(N.colorSpace)!==ze,N.matrixAutoUpdate===!0&&N.updateMatrix(),d.material.uniforms.uvTransform.value.copy(N.matrix),(v!==N||_!==N.version||y!==i.toneMapping)&&(d.material.needsUpdate=!0,v=N,_=N.version,y=i.toneMapping),d.layers.enableAll(),w.unshift(d,d.geometry,d.material,0,0,null))}function x(w,L){w.getRGB(Ou,CE(i)),s.buffers.color.setClear(Ou.r,Ou.g,Ou.b,L,u)}function D(){g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0),d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0)}return{getClearColor:function(){return f},setClearColor:function(w,L=1){f.set(w),p=L,x(f,p)},getClearAlpha:function(){return p},setClearAlpha:function(w){p=w,x(f,p)},render:b,addToRenderList:S,dispose:D}}function KU(i,t){const n=i.getParameter(i.MAX_VERTEX_ATTRIBS),s={},o=_(null);let c=o,u=!1;function f(U,H,$,tt,ft){let ot=!1;const I=v(tt,$,H);c!==I&&(c=I,d(c.object)),ot=y(U,tt,$,ft),ot&&E(U,tt,$,ft),ft!==null&&t.update(ft,i.ELEMENT_ARRAY_BUFFER),(ot||u)&&(u=!1,L(U,H,$,tt),ft!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(ft).buffer))}function p(){return i.createVertexArray()}function d(U){return i.bindVertexArray(U)}function g(U){return i.deleteVertexArray(U)}function v(U,H,$){const tt=$.wireframe===!0;let ft=s[U.id];ft===void 0&&(ft={},s[U.id]=ft);let ot=ft[H.id];ot===void 0&&(ot={},ft[H.id]=ot);let I=ot[tt];return I===void 0&&(I=_(p()),ot[tt]=I),I}function _(U){const H=[],$=[],tt=[];for(let ft=0;ft<n;ft++)H[ft]=0,$[ft]=0,tt[ft]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:$,attributeDivisors:tt,object:U,attributes:{},index:null}}function y(U,H,$,tt){const ft=c.attributes,ot=H.attributes;let I=0;const z=$.getAttributes();for(const K in z)if(z[K].location>=0){const _t=ft[K];let F=ot[K];if(F===void 0&&(K==="instanceMatrix"&&U.instanceMatrix&&(F=U.instanceMatrix),K==="instanceColor"&&U.instanceColor&&(F=U.instanceColor)),_t===void 0||_t.attribute!==F||F&&_t.data!==F.data)return!0;I++}return c.attributesNum!==I||c.index!==tt}function E(U,H,$,tt){const ft={},ot=H.attributes;let I=0;const z=$.getAttributes();for(const K in z)if(z[K].location>=0){let _t=ot[K];_t===void 0&&(K==="instanceMatrix"&&U.instanceMatrix&&(_t=U.instanceMatrix),K==="instanceColor"&&U.instanceColor&&(_t=U.instanceColor));const F={};F.attribute=_t,_t&&_t.data&&(F.data=_t.data),ft[K]=F,I++}c.attributes=ft,c.attributesNum=I,c.index=tt}function b(){const U=c.newAttributes;for(let H=0,$=U.length;H<$;H++)U[H]=0}function S(U){x(U,0)}function x(U,H){const $=c.newAttributes,tt=c.enabledAttributes,ft=c.attributeDivisors;$[U]=1,tt[U]===0&&(i.enableVertexAttribArray(U),tt[U]=1),ft[U]!==H&&(i.vertexAttribDivisor(U,H),ft[U]=H)}function D(){const U=c.newAttributes,H=c.enabledAttributes;for(let $=0,tt=H.length;$<tt;$++)H[$]!==U[$]&&(i.disableVertexAttribArray($),H[$]=0)}function w(U,H,$,tt,ft,ot,I){I===!0?i.vertexAttribIPointer(U,H,$,ft,ot):i.vertexAttribPointer(U,H,$,tt,ft,ot)}function L(U,H,$,tt){b();const ft=tt.attributes,ot=$.getAttributes(),I=H.defaultAttributeValues;for(const z in ot){const K=ot[z];if(K.location>=0){let yt=ft[z];if(yt===void 0&&(z==="instanceMatrix"&&U.instanceMatrix&&(yt=U.instanceMatrix),z==="instanceColor"&&U.instanceColor&&(yt=U.instanceColor)),yt!==void 0){const _t=yt.normalized,F=yt.itemSize,at=t.get(yt);if(at===void 0)continue;const gt=at.buffer,At=at.type,Vt=at.bytesPerElement,it=At===i.INT||At===i.UNSIGNED_INT||yt.gpuType===mg;if(yt.isInterleavedBufferAttribute){const ut=yt.data,Dt=ut.stride,Xt=yt.offset;if(ut.isInstancedInterleavedBuffer){for(let Ht=0;Ht<K.locationSize;Ht++)x(K.location+Ht,ut.meshPerAttribute);U.isInstancedMesh!==!0&&tt._maxInstanceCount===void 0&&(tt._maxInstanceCount=ut.meshPerAttribute*ut.count)}else for(let Ht=0;Ht<K.locationSize;Ht++)S(K.location+Ht);i.bindBuffer(i.ARRAY_BUFFER,gt);for(let Ht=0;Ht<K.locationSize;Ht++)w(K.location+Ht,F/K.locationSize,At,_t,Dt*Vt,(Xt+F/K.locationSize*Ht)*Vt,it)}else{if(yt.isInstancedBufferAttribute){for(let ut=0;ut<K.locationSize;ut++)x(K.location+ut,yt.meshPerAttribute);U.isInstancedMesh!==!0&&tt._maxInstanceCount===void 0&&(tt._maxInstanceCount=yt.meshPerAttribute*yt.count)}else for(let ut=0;ut<K.locationSize;ut++)S(K.location+ut);i.bindBuffer(i.ARRAY_BUFFER,gt);for(let ut=0;ut<K.locationSize;ut++)w(K.location+ut,F/K.locationSize,At,_t,F*Vt,F/K.locationSize*ut*Vt,it)}}else if(I!==void 0){const _t=I[z];if(_t!==void 0)switch(_t.length){case 2:i.vertexAttrib2fv(K.location,_t);break;case 3:i.vertexAttrib3fv(K.location,_t);break;case 4:i.vertexAttrib4fv(K.location,_t);break;default:i.vertexAttrib1fv(K.location,_t)}}}}D()}function N(){k();for(const U in s){const H=s[U];for(const $ in H){const tt=H[$];for(const ft in tt)g(tt[ft].object),delete tt[ft];delete H[$]}delete s[U]}}function B(U){if(s[U.id]===void 0)return;const H=s[U.id];for(const $ in H){const tt=H[$];for(const ft in tt)g(tt[ft].object),delete tt[ft];delete H[$]}delete s[U.id]}function P(U){for(const H in s){const $=s[H];if($[U.id]===void 0)continue;const tt=$[U.id];for(const ft in tt)g(tt[ft].object),delete tt[ft];delete $[U.id]}}function k(){C(),u=!0,c!==o&&(c=o,d(c.object))}function C(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:f,reset:k,resetDefaultState:C,dispose:N,releaseStatesOfGeometry:B,releaseStatesOfProgram:P,initAttributes:b,enableAttribute:S,disableUnusedAttributes:D}}function QU(i,t,n){let s;function o(d){s=d}function c(d,g){i.drawArrays(s,d,g),n.update(g,s,1)}function u(d,g,v){v!==0&&(i.drawArraysInstanced(s,d,g,v),n.update(g,s,v))}function f(d,g,v){if(v===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,d,0,g,0,v);let y=0;for(let E=0;E<v;E++)y+=g[E];n.update(y,s,1)}function p(d,g,v,_){if(v===0)return;const y=t.get("WEBGL_multi_draw");if(y===null)for(let E=0;E<d.length;E++)u(d[E],g[E],_[E]);else{y.multiDrawArraysInstancedWEBGL(s,d,0,g,0,_,0,v);let E=0;for(let b=0;b<v;b++)E+=g[b]*_[b];n.update(E,s,1)}}this.setMode=o,this.render=c,this.renderInstances=u,this.renderMultiDraw=f,this.renderMultiDrawInstances=p}function JU(i,t,n,s){let o;function c(){if(o!==void 0)return o;if(t.has("EXT_texture_filter_anisotropic")===!0){const P=t.get("EXT_texture_filter_anisotropic");o=i.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function u(P){return!(P!==Wi&&s.convert(P)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function f(P){const k=P===Ba&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(P!==Di&&s.convert(P)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==$i&&!k)}function p(P){if(P==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let d=n.precision!==void 0?n.precision:"highp";const g=p(d);g!==d&&(oe("WebGLRenderer:",d,"not supported, using",g,"instead."),d=g);const v=n.logarithmicDepthBuffer===!0,_=n.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),y=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),E=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=i.getParameter(i.MAX_TEXTURE_SIZE),S=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),x=i.getParameter(i.MAX_VERTEX_ATTRIBS),D=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),w=i.getParameter(i.MAX_VARYING_VECTORS),L=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),N=i.getParameter(i.MAX_SAMPLES),B=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:p,textureFormatReadable:u,textureTypeReadable:f,precision:d,logarithmicDepthBuffer:v,reversedDepthBuffer:_,maxTextures:y,maxVertexTextures:E,maxTextureSize:b,maxCubemapSize:S,maxAttributes:x,maxVertexUniforms:D,maxVaryings:w,maxFragmentUniforms:L,maxSamples:N,samples:B}}function $U(i){const t=this;let n=null,s=0,o=!1,c=!1;const u=new Js,f=new he,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(v,_){const y=v.length!==0||_||s!==0||o;return o=_,s=v.length,y},this.beginShadows=function(){c=!0,g(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(v,_){n=g(v,_,0)},this.setState=function(v,_,y){const E=v.clippingPlanes,b=v.clipIntersection,S=v.clipShadows,x=i.get(v);if(!o||E===null||E.length===0||c&&!S)c?g(null):d();else{const D=c?0:s,w=D*4;let L=x.clippingState||null;p.value=L,L=g(E,_,w,y);for(let N=0;N!==w;++N)L[N]=n[N];x.clippingState=L,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=D}};function d(){p.value!==n&&(p.value=n,p.needsUpdate=s>0),t.numPlanes=s,t.numIntersection=0}function g(v,_,y,E){const b=v!==null?v.length:0;let S=null;if(b!==0){if(S=p.value,E!==!0||S===null){const x=y+b*4,D=_.matrixWorldInverse;f.getNormalMatrix(D),(S===null||S.length<x)&&(S=new Float32Array(x));for(let w=0,L=y;w!==b;++w,L+=4)u.copy(v[w]).applyMatrix4(D,f),u.normal.toArray(S,L),S[L+3]=u.constant}p.value=S,p.needsUpdate=!0}return t.numPlanes=b,t.numIntersection=0,S}}function tL(i){let t=new WeakMap;function n(u,f){return f===Yp?u.mapping=or:f===jp&&(u.mapping=go),u}function s(u){if(u&&u.isTexture){const f=u.mapping;if(f===Yp||f===jp)if(t.has(u)){const p=t.get(u).texture;return n(p,u.mapping)}else{const p=u.image;if(p&&p.height>0){const d=new UE(p.height);return d.fromEquirectangularTexture(i,u),t.set(u,d),u.addEventListener("dispose",o),n(d.texture,u.mapping)}else return null}}return u}function o(u){const f=u.target;f.removeEventListener("dispose",o);const p=t.get(f);p!==void 0&&(t.delete(f),p.dispose())}function c(){t=new WeakMap}return{get:s,dispose:c}}const Ss=4,$y=[.125,.215,.35,.446,.526,.582],tr=20,eL=256,bl=new OE,tS=new Ve;let up=null,fp=0,hp=0,dp=!1;const nL=new st;class eS{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,n=0,s=.1,o=100,c={}){const{size:u=256,position:f=nL}=c;up=this._renderer.getRenderTarget(),fp=this._renderer.getActiveCubeFace(),hp=this._renderer.getActiveMipmapLevel(),dp=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(u);const p=this._allocateTargets();return p.depthBuffer=!0,this._sceneToCubeUV(t,s,o,p,f),n>0&&this._blur(p,0,0,n),this._applyPMREM(p),this._cleanup(p),p}fromEquirectangular(t,n=null){return this._fromTexture(t,n)}fromCubemap(t,n=null){return this._fromTexture(t,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=aS(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=iS(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(up,fp,hp),this._renderer.xr.enabled=dp,t.scissorTest=!1,io(t,0,0,t.width,t.height)}_fromTexture(t,n){t.mapping===or||t.mapping===go?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),up=this._renderer.getRenderTarget(),fp=this._renderer.getActiveCubeFace(),hp=this._renderer.getActiveMipmapLevel(),dp=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=n||this._allocateTargets();return this._textureToCubeUV(t,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,s={magFilter:Gn,minFilter:Gn,generateMipmaps:!1,type:Ba,format:Wi,colorSpace:_o,depthBuffer:!1},o=nS(t,n,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=nS(t,n,s);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=iL(c)),this._blurMaterial=sL(c,t,n),this._ggxMaterial=aL(c,t,n)}return o}_compileMaterial(t){const n=new Va(new gi,t);this._renderer.compile(n,bl)}_sceneToCubeUV(t,n,s,o,c){const p=new mi(90,1,n,s),d=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],v=this._renderer,_=v.autoClear,y=v.toneMapping;v.getClearColor(tS),v.toneMapping=ia,v.autoClear=!1,v.state.buffers.depth.getReversed()&&(v.setRenderTarget(o),v.clearDepth(),v.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Va(new Jl,new bE({name:"PMREM.Background",side:ii,depthWrite:!1,depthTest:!1})));const b=this._backgroundBox,S=b.material;let x=!1;const D=t.background;D?D.isColor&&(S.color.copy(D),t.background=null,x=!0):(S.color.copy(tS),x=!0);for(let w=0;w<6;w++){const L=w%3;L===0?(p.up.set(0,d[w],0),p.position.set(c.x,c.y,c.z),p.lookAt(c.x+g[w],c.y,c.z)):L===1?(p.up.set(0,0,d[w]),p.position.set(c.x,c.y,c.z),p.lookAt(c.x,c.y+g[w],c.z)):(p.up.set(0,d[w],0),p.position.set(c.x,c.y,c.z),p.lookAt(c.x,c.y,c.z+g[w]));const N=this._cubeSize;io(o,L*N,w>2?N:0,N,N),v.setRenderTarget(o),x&&v.render(b,p),v.render(t,p)}v.toneMapping=y,v.autoClear=_,t.background=D}_textureToCubeUV(t,n){const s=this._renderer,o=t.mapping===or||t.mapping===go;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=aS()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=iS());const c=o?this._cubemapMaterial:this._equirectMaterial,u=this._lodMeshes[0];u.material=c;const f=c.uniforms;f.envMap.value=t;const p=this._cubeSize;io(n,0,0,3*p,2*p),s.setRenderTarget(n),s.render(u,bl)}_applyPMREM(t){const n=this._renderer,s=n.autoClear;n.autoClear=!1;const o=this._lodMeshes.length;for(let c=1;c<o;c++)this._applyGGXFilter(t,c-1,c);n.autoClear=s}_applyGGXFilter(t,n,s){const o=this._renderer,c=this._pingPongRenderTarget,u=this._ggxMaterial,f=this._lodMeshes[s];f.material=u;const p=u.uniforms,d=s/(this._lodMeshes.length-1),g=n/(this._lodMeshes.length-1),v=Math.sqrt(d*d-g*g),_=0+d*1.25,y=v*_,{_lodMax:E}=this,b=this._sizeLods[s],S=3*b*(s>E-Ss?s-E+Ss:0),x=4*(this._cubeSize-b);p.envMap.value=t.texture,p.roughness.value=y,p.mipInt.value=E-n,io(c,S,x,3*b,2*b),o.setRenderTarget(c),o.render(f,bl),p.envMap.value=c.texture,p.roughness.value=0,p.mipInt.value=E-s,io(t,S,x,3*b,2*b),o.setRenderTarget(t),o.render(f,bl)}_blur(t,n,s,o,c){const u=this._pingPongRenderTarget;this._halfBlur(t,u,n,s,o,"latitudinal",c),this._halfBlur(u,t,s,s,o,"longitudinal",c)}_halfBlur(t,n,s,o,c,u,f){const p=this._renderer,d=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&Ce("blur direction must be either latitudinal or longitudinal!");const g=3,v=this._lodMeshes[o];v.material=d;const _=d.uniforms,y=this._sizeLods[s]-1,E=isFinite(c)?Math.PI/(2*y):2*Math.PI/(2*tr-1),b=c/E,S=isFinite(c)?1+Math.floor(g*b):tr;S>tr&&oe(`sigmaRadians, ${c}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${tr}`);const x=[];let D=0;for(let P=0;P<tr;++P){const k=P/b,C=Math.exp(-k*k/2);x.push(C),P===0?D+=C:P<S&&(D+=2*C)}for(let P=0;P<x.length;P++)x[P]=x[P]/D;_.envMap.value=t.texture,_.samples.value=S,_.weights.value=x,_.latitudinal.value=u==="latitudinal",f&&(_.poleAxis.value=f);const{_lodMax:w}=this;_.dTheta.value=E,_.mipInt.value=w-s;const L=this._sizeLods[o],N=3*L*(o>w-Ss?o-w+Ss:0),B=4*(this._cubeSize-L);io(n,N,B,3*L,2*L),p.setRenderTarget(n),p.render(v,bl)}}function iL(i){const t=[],n=[],s=[];let o=i;const c=i-Ss+1+$y.length;for(let u=0;u<c;u++){const f=Math.pow(2,o);t.push(f);let p=1/f;u>i-Ss?p=$y[u-i+Ss-1]:u===0&&(p=0),n.push(p);const d=1/(f-2),g=-d,v=1+d,_=[g,g,v,g,v,v,g,g,v,v,g,v],y=6,E=6,b=3,S=2,x=1,D=new Float32Array(b*E*y),w=new Float32Array(S*E*y),L=new Float32Array(x*E*y);for(let B=0;B<y;B++){const P=B%3*2/3-1,k=B>2?0:-1,C=[P,k,0,P+2/3,k,0,P+2/3,k+1,0,P,k,0,P+2/3,k+1,0,P,k+1,0];D.set(C,b*E*B),w.set(_,S*E*B);const U=[B,B,B,B,B,B];L.set(U,x*E*B)}const N=new gi;N.setAttribute("position",new si(D,b)),N.setAttribute("uv",new si(w,S)),N.setAttribute("faceIndex",new si(L,x)),s.push(new Va(N,null)),o>Ss&&o--}return{lodMeshes:s,sizeLods:t,sigmas:n}}function nS(i,t,n){const s=new aa(i,t,n);return s.texture.mapping=uf,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function io(i,t,n,s,o){i.viewport.set(t,n,s,o),i.scissor.set(t,n,s,o)}function aL(i,t,n){return new ra({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:eL,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:df(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:La,depthTest:!1,depthWrite:!1})}function sL(i,t,n){const s=new Float32Array(tr),o=new st(0,1,0);return new ra({name:"SphericalGaussianBlur",defines:{n:tr,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:df(),fragmentShader:`

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
		`,blending:La,depthTest:!1,depthWrite:!1})}function iS(){return new ra({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:df(),fragmentShader:`

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
		`,blending:La,depthTest:!1,depthWrite:!1})}function aS(){return new ra({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:df(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:La,depthTest:!1,depthWrite:!1})}function df(){return`

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
	`}function rL(i){let t=new WeakMap,n=null;function s(f){if(f&&f.isTexture){const p=f.mapping,d=p===Yp||p===jp,g=p===or||p===go;if(d||g){let v=t.get(f);const _=v!==void 0?v.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==_)return n===null&&(n=new eS(i)),v=d?n.fromEquirectangular(f,v):n.fromCubemap(f,v),v.texture.pmremVersion=f.pmremVersion,t.set(f,v),v.texture;if(v!==void 0)return v.texture;{const y=f.image;return d&&y&&y.height>0||g&&y&&o(y)?(n===null&&(n=new eS(i)),v=d?n.fromEquirectangular(f):n.fromCubemap(f),v.texture.pmremVersion=f.pmremVersion,t.set(f,v),f.addEventListener("dispose",c),v.texture):null}}}return f}function o(f){let p=0;const d=6;for(let g=0;g<d;g++)f[g]!==void 0&&p++;return p===d}function c(f){const p=f.target;p.removeEventListener("dispose",c);const d=t.get(p);d!==void 0&&(t.delete(p),d.dispose())}function u(){t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:u}}function oL(i){const t={};function n(s){if(t[s]!==void 0)return t[s];const o=i.getExtension(s);return t[s]=o,o}return{has:function(s){return n(s)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(s){const o=n(s);return o===null&&Gl("WebGLRenderer: "+s+" extension not supported."),o}}}function lL(i,t,n,s){const o={},c=new WeakMap;function u(v){const _=v.target;_.index!==null&&t.remove(_.index);for(const E in _.attributes)t.remove(_.attributes[E]);_.removeEventListener("dispose",u),delete o[_.id];const y=c.get(_);y&&(t.remove(y),c.delete(_)),s.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,n.memory.geometries--}function f(v,_){return o[_.id]===!0||(_.addEventListener("dispose",u),o[_.id]=!0,n.memory.geometries++),_}function p(v){const _=v.attributes;for(const y in _)t.update(_[y],i.ARRAY_BUFFER)}function d(v){const _=[],y=v.index,E=v.attributes.position;let b=0;if(y!==null){const D=y.array;b=y.version;for(let w=0,L=D.length;w<L;w+=3){const N=D[w+0],B=D[w+1],P=D[w+2];_.push(N,B,B,P,P,N)}}else if(E!==void 0){const D=E.array;b=E.version;for(let w=0,L=D.length/3-1;w<L;w+=3){const N=w+0,B=w+1,P=w+2;_.push(N,B,B,P,P,N)}}else return;const S=new(yE(_)?RE:AE)(_,1);S.version=b;const x=c.get(v);x&&t.remove(x),c.set(v,S)}function g(v){const _=c.get(v);if(_){const y=v.index;y!==null&&_.version<y.version&&d(v)}else d(v);return c.get(v)}return{get:f,update:p,getWireframeAttribute:g}}function cL(i,t,n){let s;function o(_){s=_}let c,u;function f(_){c=_.type,u=_.bytesPerElement}function p(_,y){i.drawElements(s,y,c,_*u),n.update(y,s,1)}function d(_,y,E){E!==0&&(i.drawElementsInstanced(s,y,c,_*u,E),n.update(y,s,E))}function g(_,y,E){if(E===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,y,0,c,_,0,E);let S=0;for(let x=0;x<E;x++)S+=y[x];n.update(S,s,1)}function v(_,y,E,b){if(E===0)return;const S=t.get("WEBGL_multi_draw");if(S===null)for(let x=0;x<_.length;x++)d(_[x]/u,y[x],b[x]);else{S.multiDrawElementsInstancedWEBGL(s,y,0,c,_,0,b,0,E);let x=0;for(let D=0;D<E;D++)x+=y[D]*b[D];n.update(x,s,1)}}this.setMode=o,this.setIndex=f,this.render=p,this.renderInstances=d,this.renderMultiDraw=g,this.renderMultiDrawInstances=v}function uL(i){const t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function s(c,u,f){switch(n.calls++,u){case i.TRIANGLES:n.triangles+=f*(c/3);break;case i.LINES:n.lines+=f*(c/2);break;case i.LINE_STRIP:n.lines+=f*(c-1);break;case i.LINE_LOOP:n.lines+=f*c;break;case i.POINTS:n.points+=f*c;break;default:Ce("WebGLInfo: Unknown draw mode:",u);break}}function o(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:o,update:s}}function fL(i,t,n){const s=new WeakMap,o=new cn;function c(u,f,p){const d=u.morphTargetInfluences,g=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,v=g!==void 0?g.length:0;let _=s.get(f);if(_===void 0||_.count!==v){let U=function(){k.dispose(),s.delete(f),f.removeEventListener("dispose",U)};var y=U;_!==void 0&&_.texture.dispose();const E=f.morphAttributes.position!==void 0,b=f.morphAttributes.normal!==void 0,S=f.morphAttributes.color!==void 0,x=f.morphAttributes.position||[],D=f.morphAttributes.normal||[],w=f.morphAttributes.color||[];let L=0;E===!0&&(L=1),b===!0&&(L=2),S===!0&&(L=3);let N=f.attributes.position.count*L,B=1;N>t.maxTextureSize&&(B=Math.ceil(N/t.maxTextureSize),N=t.maxTextureSize);const P=new Float32Array(N*B*4*v),k=new SE(P,N,B,v);k.type=$i,k.needsUpdate=!0;const C=L*4;for(let H=0;H<v;H++){const $=x[H],tt=D[H],ft=w[H],ot=N*B*4*H;for(let I=0;I<$.count;I++){const z=I*C;E===!0&&(o.fromBufferAttribute($,I),P[ot+z+0]=o.x,P[ot+z+1]=o.y,P[ot+z+2]=o.z,P[ot+z+3]=0),b===!0&&(o.fromBufferAttribute(tt,I),P[ot+z+4]=o.x,P[ot+z+5]=o.y,P[ot+z+6]=o.z,P[ot+z+7]=0),S===!0&&(o.fromBufferAttribute(ft,I),P[ot+z+8]=o.x,P[ot+z+9]=o.y,P[ot+z+10]=o.z,P[ot+z+11]=ft.itemSize===4?o.w:1)}}_={count:v,texture:k,size:new Xe(N,B)},s.set(f,_),f.addEventListener("dispose",U)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)p.getUniforms().setValue(i,"morphTexture",u.morphTexture,n);else{let E=0;for(let S=0;S<d.length;S++)E+=d[S];const b=f.morphTargetsRelative?1:1-E;p.getUniforms().setValue(i,"morphTargetBaseInfluence",b),p.getUniforms().setValue(i,"morphTargetInfluences",d)}p.getUniforms().setValue(i,"morphTargetsTexture",_.texture,n),p.getUniforms().setValue(i,"morphTargetsTextureSize",_.size)}return{update:c}}function hL(i,t,n,s){let o=new WeakMap;function c(p){const d=s.render.frame,g=p.geometry,v=t.get(p,g);if(o.get(v)!==d&&(t.update(v),o.set(v,d)),p.isInstancedMesh&&(p.hasEventListener("dispose",f)===!1&&p.addEventListener("dispose",f),o.get(p)!==d&&(n.update(p.instanceMatrix,i.ARRAY_BUFFER),p.instanceColor!==null&&n.update(p.instanceColor,i.ARRAY_BUFFER),o.set(p,d))),p.isSkinnedMesh){const _=p.skeleton;o.get(_)!==d&&(_.update(),o.set(_,d))}return v}function u(){o=new WeakMap}function f(p){const d=p.target;d.removeEventListener("dispose",f),n.remove(d.instanceMatrix),d.instanceColor!==null&&n.remove(d.instanceColor)}return{update:c,dispose:u}}const dL={[sE]:"LINEAR_TONE_MAPPING",[rE]:"REINHARD_TONE_MAPPING",[oE]:"CINEON_TONE_MAPPING",[lE]:"ACES_FILMIC_TONE_MAPPING",[uE]:"AGX_TONE_MAPPING",[fE]:"NEUTRAL_TONE_MAPPING",[cE]:"CUSTOM_TONE_MAPPING"};function pL(i,t,n,s,o){const c=new aa(t,n,{type:i,depthBuffer:s,stencilBuffer:o}),u=new aa(t,n,{type:Ba,depthBuffer:!1,stencilBuffer:!1}),f=new gi;f.setAttribute("position",new Pa([-1,3,0,-1,-1,0,3,-1,0],3)),f.setAttribute("uv",new Pa([0,2,0,0,2,0],2));const p=new c2({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new Va(f,p),g=new OE(-1,1,1,-1,0,1);let v=null,_=null,y=!1,E,b=null,S=[],x=!1;this.setSize=function(D,w){c.setSize(D,w),u.setSize(D,w);for(let L=0;L<S.length;L++){const N=S[L];N.setSize&&N.setSize(D,w)}},this.setEffects=function(D){S=D,x=S.length>0&&S[0].isRenderPass===!0;const w=c.width,L=c.height;for(let N=0;N<S.length;N++){const B=S[N];B.setSize&&B.setSize(w,L)}},this.begin=function(D,w){if(y||D.toneMapping===ia&&S.length===0)return!1;if(b=w,w!==null){const L=w.width,N=w.height;(c.width!==L||c.height!==N)&&this.setSize(L,N)}return x===!1&&D.setRenderTarget(c),E=D.toneMapping,D.toneMapping=ia,!0},this.hasRenderPass=function(){return x},this.end=function(D,w){D.toneMapping=E,y=!0;let L=c,N=u;for(let B=0;B<S.length;B++){const P=S[B];if(P.enabled!==!1&&(P.render(D,N,L,w),P.needsSwap!==!1)){const k=L;L=N,N=k}}if(v!==D.outputColorSpace||_!==D.toneMapping){v=D.outputColorSpace,_=D.toneMapping,p.defines={},be.getTransfer(v)===ze&&(p.defines.SRGB_TRANSFER="");const B=dL[_];B&&(p.defines[B]=""),p.needsUpdate=!0}p.uniforms.tDiffuse.value=L.texture,D.setRenderTarget(b),D.render(d,g),b=null,y=!1},this.isCompositing=function(){return y},this.dispose=function(){c.dispose(),u.dispose(),f.dispose(),p.dispose()}}const BE=new jn,Lm=new kl(1,1),IE=new SE,zE=new V3,VE=new DE,sS=[],rS=[],oS=new Float32Array(16),lS=new Float32Array(9),cS=new Float32Array(4);function To(i,t,n){const s=i[0];if(s<=0||s>0)return i;const o=t*n;let c=sS[o];if(c===void 0&&(c=new Float32Array(o),sS[o]=c),t!==0){s.toArray(c,0);for(let u=1,f=0;u!==t;++u)f+=n,i[u].toArray(c,f)}return c}function Sn(i,t){if(i.length!==t.length)return!1;for(let n=0,s=i.length;n<s;n++)if(i[n]!==t[n])return!1;return!0}function Mn(i,t){for(let n=0,s=t.length;n<s;n++)i[n]=t[n]}function pf(i,t){let n=rS[t];n===void 0&&(n=new Int32Array(t),rS[t]=n);for(let s=0;s!==t;++s)n[s]=i.allocateTextureUnit();return n}function mL(i,t){const n=this.cache;n[0]!==t&&(i.uniform1f(this.addr,t),n[0]=t)}function gL(i,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Sn(n,t))return;i.uniform2fv(this.addr,t),Mn(n,t)}}function vL(i,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(Sn(n,t))return;i.uniform3fv(this.addr,t),Mn(n,t)}}function _L(i,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Sn(n,t))return;i.uniform4fv(this.addr,t),Mn(n,t)}}function xL(i,t){const n=this.cache,s=t.elements;if(s===void 0){if(Sn(n,t))return;i.uniformMatrix2fv(this.addr,!1,t),Mn(n,t)}else{if(Sn(n,s))return;cS.set(s),i.uniformMatrix2fv(this.addr,!1,cS),Mn(n,s)}}function yL(i,t){const n=this.cache,s=t.elements;if(s===void 0){if(Sn(n,t))return;i.uniformMatrix3fv(this.addr,!1,t),Mn(n,t)}else{if(Sn(n,s))return;lS.set(s),i.uniformMatrix3fv(this.addr,!1,lS),Mn(n,s)}}function SL(i,t){const n=this.cache,s=t.elements;if(s===void 0){if(Sn(n,t))return;i.uniformMatrix4fv(this.addr,!1,t),Mn(n,t)}else{if(Sn(n,s))return;oS.set(s),i.uniformMatrix4fv(this.addr,!1,oS),Mn(n,s)}}function ML(i,t){const n=this.cache;n[0]!==t&&(i.uniform1i(this.addr,t),n[0]=t)}function EL(i,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Sn(n,t))return;i.uniform2iv(this.addr,t),Mn(n,t)}}function TL(i,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Sn(n,t))return;i.uniform3iv(this.addr,t),Mn(n,t)}}function bL(i,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Sn(n,t))return;i.uniform4iv(this.addr,t),Mn(n,t)}}function AL(i,t){const n=this.cache;n[0]!==t&&(i.uniform1ui(this.addr,t),n[0]=t)}function RL(i,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Sn(n,t))return;i.uniform2uiv(this.addr,t),Mn(n,t)}}function CL(i,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Sn(n,t))return;i.uniform3uiv(this.addr,t),Mn(n,t)}}function wL(i,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Sn(n,t))return;i.uniform4uiv(this.addr,t),Mn(n,t)}}function DL(i,t,n){const s=this.cache,o=n.allocateTextureUnit();s[0]!==o&&(i.uniform1i(this.addr,o),s[0]=o);let c;this.type===i.SAMPLER_2D_SHADOW?(Lm.compareFunction=n.isReversedDepthBuffer()?Mg:Sg,c=Lm):c=BE,n.setTexture2D(t||c,o)}function UL(i,t,n){const s=this.cache,o=n.allocateTextureUnit();s[0]!==o&&(i.uniform1i(this.addr,o),s[0]=o),n.setTexture3D(t||zE,o)}function LL(i,t,n){const s=this.cache,o=n.allocateTextureUnit();s[0]!==o&&(i.uniform1i(this.addr,o),s[0]=o),n.setTextureCube(t||VE,o)}function NL(i,t,n){const s=this.cache,o=n.allocateTextureUnit();s[0]!==o&&(i.uniform1i(this.addr,o),s[0]=o),n.setTexture2DArray(t||IE,o)}function PL(i){switch(i){case 5126:return mL;case 35664:return gL;case 35665:return vL;case 35666:return _L;case 35674:return xL;case 35675:return yL;case 35676:return SL;case 5124:case 35670:return ML;case 35667:case 35671:return EL;case 35668:case 35672:return TL;case 35669:case 35673:return bL;case 5125:return AL;case 36294:return RL;case 36295:return CL;case 36296:return wL;case 35678:case 36198:case 36298:case 36306:case 35682:return DL;case 35679:case 36299:case 36307:return UL;case 35680:case 36300:case 36308:case 36293:return LL;case 36289:case 36303:case 36311:case 36292:return NL}}function OL(i,t){i.uniform1fv(this.addr,t)}function FL(i,t){const n=To(t,this.size,2);i.uniform2fv(this.addr,n)}function BL(i,t){const n=To(t,this.size,3);i.uniform3fv(this.addr,n)}function IL(i,t){const n=To(t,this.size,4);i.uniform4fv(this.addr,n)}function zL(i,t){const n=To(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,n)}function VL(i,t){const n=To(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,n)}function HL(i,t){const n=To(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,n)}function GL(i,t){i.uniform1iv(this.addr,t)}function kL(i,t){i.uniform2iv(this.addr,t)}function XL(i,t){i.uniform3iv(this.addr,t)}function WL(i,t){i.uniform4iv(this.addr,t)}function qL(i,t){i.uniform1uiv(this.addr,t)}function YL(i,t){i.uniform2uiv(this.addr,t)}function jL(i,t){i.uniform3uiv(this.addr,t)}function ZL(i,t){i.uniform4uiv(this.addr,t)}function KL(i,t,n){const s=this.cache,o=t.length,c=pf(n,o);Sn(s,c)||(i.uniform1iv(this.addr,c),Mn(s,c));let u;this.type===i.SAMPLER_2D_SHADOW?u=Lm:u=BE;for(let f=0;f!==o;++f)n.setTexture2D(t[f]||u,c[f])}function QL(i,t,n){const s=this.cache,o=t.length,c=pf(n,o);Sn(s,c)||(i.uniform1iv(this.addr,c),Mn(s,c));for(let u=0;u!==o;++u)n.setTexture3D(t[u]||zE,c[u])}function JL(i,t,n){const s=this.cache,o=t.length,c=pf(n,o);Sn(s,c)||(i.uniform1iv(this.addr,c),Mn(s,c));for(let u=0;u!==o;++u)n.setTextureCube(t[u]||VE,c[u])}function $L(i,t,n){const s=this.cache,o=t.length,c=pf(n,o);Sn(s,c)||(i.uniform1iv(this.addr,c),Mn(s,c));for(let u=0;u!==o;++u)n.setTexture2DArray(t[u]||IE,c[u])}function tN(i){switch(i){case 5126:return OL;case 35664:return FL;case 35665:return BL;case 35666:return IL;case 35674:return zL;case 35675:return VL;case 35676:return HL;case 5124:case 35670:return GL;case 35667:case 35671:return kL;case 35668:case 35672:return XL;case 35669:case 35673:return WL;case 5125:return qL;case 36294:return YL;case 36295:return jL;case 36296:return ZL;case 35678:case 36198:case 36298:case 36306:case 35682:return KL;case 35679:case 36299:case 36307:return QL;case 35680:case 36300:case 36308:case 36293:return JL;case 36289:case 36303:case 36311:case 36292:return $L}}class eN{constructor(t,n,s){this.id=t,this.addr=s,this.cache=[],this.type=n.type,this.setValue=PL(n.type)}}class nN{constructor(t,n,s){this.id=t,this.addr=s,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=tN(n.type)}}class iN{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,n,s){const o=this.seq;for(let c=0,u=o.length;c!==u;++c){const f=o[c];f.setValue(t,n[f.id],s)}}}const pp=/(\w+)(\])?(\[|\.)?/g;function uS(i,t){i.seq.push(t),i.map[t.id]=t}function aN(i,t,n){const s=i.name,o=s.length;for(pp.lastIndex=0;;){const c=pp.exec(s),u=pp.lastIndex;let f=c[1];const p=c[2]==="]",d=c[3];if(p&&(f=f|0),d===void 0||d==="["&&u+2===o){uS(n,d===void 0?new eN(f,i,t):new nN(f,i,t));break}else{let v=n.map[f];v===void 0&&(v=new iN(f),uS(n,v)),n=v}}}class qu{constructor(t,n){this.seq=[],this.map={};const s=t.getProgramParameter(n,t.ACTIVE_UNIFORMS);for(let u=0;u<s;++u){const f=t.getActiveUniform(n,u),p=t.getUniformLocation(n,f.name);aN(f,p,this)}const o=[],c=[];for(const u of this.seq)u.type===t.SAMPLER_2D_SHADOW||u.type===t.SAMPLER_CUBE_SHADOW||u.type===t.SAMPLER_2D_ARRAY_SHADOW?o.push(u):c.push(u);o.length>0&&(this.seq=o.concat(c))}setValue(t,n,s,o){const c=this.map[n];c!==void 0&&c.setValue(t,s,o)}setOptional(t,n,s){const o=n[s];o!==void 0&&this.setValue(t,s,o)}static upload(t,n,s,o){for(let c=0,u=n.length;c!==u;++c){const f=n[c],p=s[f.id];p.needsUpdate!==!1&&f.setValue(t,p.value,o)}}static seqWithValue(t,n){const s=[];for(let o=0,c=t.length;o!==c;++o){const u=t[o];u.id in n&&s.push(u)}return s}}function fS(i,t,n){const s=i.createShader(t);return i.shaderSource(s,n),i.compileShader(s),s}const sN=37297;let rN=0;function oN(i,t){const n=i.split(`
`),s=[],o=Math.max(t-6,0),c=Math.min(t+6,n.length);for(let u=o;u<c;u++){const f=u+1;s.push(`${f===t?">":" "} ${f}: ${n[u]}`)}return s.join(`
`)}const hS=new he;function lN(i){be._getMatrix(hS,be.workingColorSpace,i);const t=`mat3( ${hS.elements.map(n=>n.toFixed(4))} )`;switch(be.getTransfer(i)){case tf:return[t,"LinearTransferOETF"];case ze:return[t,"sRGBTransferOETF"];default:return oe("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function dS(i,t,n){const s=i.getShaderParameter(t,i.COMPILE_STATUS),c=(i.getShaderInfoLog(t)||"").trim();if(s&&c==="")return"";const u=/ERROR: 0:(\d+)/.exec(c);if(u){const f=parseInt(u[1]);return n.toUpperCase()+`

`+c+`

`+oN(i.getShaderSource(t),f)}else return c}function cN(i,t){const n=lN(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const uN={[sE]:"Linear",[rE]:"Reinhard",[oE]:"Cineon",[lE]:"ACESFilmic",[uE]:"AgX",[fE]:"Neutral",[cE]:"Custom"};function fN(i,t){const n=uN[t];return n===void 0?(oe("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Fu=new st;function hN(){be.getLuminanceCoefficients(Fu);const i=Fu.x.toFixed(4),t=Fu.y.toFixed(4),n=Fu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function dN(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(wl).join(`
`)}function pN(i){const t=[];for(const n in i){const s=i[n];s!==!1&&t.push("#define "+n+" "+s)}return t.join(`
`)}function mN(i,t){const n={},s=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let o=0;o<s;o++){const c=i.getActiveAttrib(t,o),u=c.name;let f=1;c.type===i.FLOAT_MAT2&&(f=2),c.type===i.FLOAT_MAT3&&(f=3),c.type===i.FLOAT_MAT4&&(f=4),n[u]={type:c.type,location:i.getAttribLocation(t,u),locationSize:f}}return n}function wl(i){return i!==""}function pS(i,t){const n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function mS(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const gN=/^[ \t]*#include +<([\w\d./]+)>/gm;function Nm(i){return i.replace(gN,_N)}const vN=new Map;function _N(i,t){let n=de[t];if(n===void 0){const s=vN.get(t);if(s!==void 0)n=de[s],oe('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,s);else throw new Error("Can not resolve #include <"+t+">")}return Nm(n)}const xN=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function gS(i){return i.replace(xN,yN)}function yN(i,t,n,s){let o="";for(let c=parseInt(t);c<parseInt(n);c++)o+=s.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return o}function vS(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}const SN={[Hu]:"SHADOWMAP_TYPE_PCF",[Cl]:"SHADOWMAP_TYPE_VSM"};function MN(i){return SN[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const EN={[or]:"ENVMAP_TYPE_CUBE",[go]:"ENVMAP_TYPE_CUBE",[uf]:"ENVMAP_TYPE_CUBE_UV"};function TN(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":EN[i.envMapMode]||"ENVMAP_TYPE_CUBE"}const bN={[go]:"ENVMAP_MODE_REFRACTION"};function AN(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":bN[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const RN={[aE]:"ENVMAP_BLENDING_MULTIPLY",[y3]:"ENVMAP_BLENDING_MIX",[S3]:"ENVMAP_BLENDING_ADD"};function CN(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":RN[i.combine]||"ENVMAP_BLENDING_NONE"}function wN(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const n=Math.log2(t)-2,s=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:s,maxMip:n}}function DN(i,t,n,s){const o=i.getContext(),c=n.defines;let u=n.vertexShader,f=n.fragmentShader;const p=MN(n),d=TN(n),g=AN(n),v=CN(n),_=wN(n),y=dN(n),E=pN(c),b=o.createProgram();let S,x,D=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(S=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E].filter(wl).join(`
`),S.length>0&&(S+=`
`),x=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E].filter(wl).join(`
`),x.length>0&&(x+=`
`)):(S=[vS(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+g:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+p:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(wl).join(`
`),x=[vS(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+d:"",n.envMap?"#define "+g:"",n.envMap?"#define "+v:"",_?"#define CUBEUV_TEXEL_WIDTH "+_.texelWidth:"",_?"#define CUBEUV_TEXEL_HEIGHT "+_.texelHeight:"",_?"#define CUBEUV_MAX_MIP "+_.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+p:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==ia?"#define TONE_MAPPING":"",n.toneMapping!==ia?de.tonemapping_pars_fragment:"",n.toneMapping!==ia?fN("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",de.colorspace_pars_fragment,cN("linearToOutputTexel",n.outputColorSpace),hN(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(wl).join(`
`)),u=Nm(u),u=pS(u,n),u=mS(u,n),f=Nm(f),f=pS(f,n),f=mS(f,n),u=gS(u),f=gS(f),n.isRawShaderMaterial!==!0&&(D=`#version 300 es
`,S=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,x=["#define varying in",n.glslVersion===Uy?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Uy?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const w=D+S+u,L=D+x+f,N=fS(o,o.VERTEX_SHADER,w),B=fS(o,o.FRAGMENT_SHADER,L);o.attachShader(b,N),o.attachShader(b,B),n.index0AttributeName!==void 0?o.bindAttribLocation(b,0,n.index0AttributeName):n.morphTargets===!0&&o.bindAttribLocation(b,0,"position"),o.linkProgram(b);function P(H){if(i.debug.checkShaderErrors){const $=o.getProgramInfoLog(b)||"",tt=o.getShaderInfoLog(N)||"",ft=o.getShaderInfoLog(B)||"",ot=$.trim(),I=tt.trim(),z=ft.trim();let K=!0,yt=!0;if(o.getProgramParameter(b,o.LINK_STATUS)===!1)if(K=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(o,b,N,B);else{const _t=dS(o,N,"vertex"),F=dS(o,B,"fragment");Ce("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(b,o.VALIDATE_STATUS)+`

Material Name: `+H.name+`
Material Type: `+H.type+`

Program Info Log: `+ot+`
`+_t+`
`+F)}else ot!==""?oe("WebGLProgram: Program Info Log:",ot):(I===""||z==="")&&(yt=!1);yt&&(H.diagnostics={runnable:K,programLog:ot,vertexShader:{log:I,prefix:S},fragmentShader:{log:z,prefix:x}})}o.deleteShader(N),o.deleteShader(B),k=new qu(o,b),C=mN(o,b)}let k;this.getUniforms=function(){return k===void 0&&P(this),k};let C;this.getAttributes=function(){return C===void 0&&P(this),C};let U=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return U===!1&&(U=o.getProgramParameter(b,sN)),U},this.destroy=function(){s.releaseStatesOfProgram(this),o.deleteProgram(b),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=rN++,this.cacheKey=t,this.usedTimes=1,this.program=b,this.vertexShader=N,this.fragmentShader=B,this}let UN=0;class LN{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const n=t.vertexShader,s=t.fragmentShader,o=this._getShaderStage(n),c=this._getShaderStage(s),u=this._getShaderCacheForMaterial(t);return u.has(o)===!1&&(u.add(o),o.usedTimes++),u.has(c)===!1&&(u.add(c),c.usedTimes++),this}remove(t){const n=this.materialCache.get(t);for(const s of n)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const n=this.materialCache;let s=n.get(t);return s===void 0&&(s=new Set,n.set(t,s)),s}_getShaderStage(t){const n=this.shaderCache;let s=n.get(t);return s===void 0&&(s=new NN(t),n.set(t,s)),s}}class NN{constructor(t){this.id=UN++,this.code=t,this.usedTimes=0}}function PN(i,t,n,s,o,c,u){const f=new EE,p=new LN,d=new Set,g=[],v=new Map,_=o.logarithmicDepthBuffer;let y=o.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function b(C){return d.add(C),C===0?"uv":`uv${C}`}function S(C,U,H,$,tt){const ft=$.fog,ot=tt.geometry,I=C.isMeshStandardMaterial?$.environment:null,z=(C.isMeshStandardMaterial?n:t).get(C.envMap||I),K=z&&z.mapping===uf?z.image.height:null,yt=E[C.type];C.precision!==null&&(y=o.getMaxPrecision(C.precision),y!==C.precision&&oe("WebGLProgram.getParameters:",C.precision,"not supported, using",y,"instead."));const _t=ot.morphAttributes.position||ot.morphAttributes.normal||ot.morphAttributes.color,F=_t!==void 0?_t.length:0;let at=0;ot.morphAttributes.position!==void 0&&(at=1),ot.morphAttributes.normal!==void 0&&(at=2),ot.morphAttributes.color!==void 0&&(at=3);let gt,At,Vt,it;if(yt){const Te=Ji[yt];gt=Te.vertexShader,At=Te.fragmentShader}else gt=C.vertexShader,At=C.fragmentShader,p.update(C),Vt=p.getVertexShaderID(C),it=p.getFragmentShaderID(C);const ut=i.getRenderTarget(),Dt=i.state.buffers.depth.getReversed(),Xt=tt.isInstancedMesh===!0,Ht=tt.isBatchedMesh===!0,pe=!!C.map,en=!!C.matcap,_e=!!z,me=!!C.aoMap,we=!!C.lightMap,le=!!C.bumpMap,nn=!!C.normalMap,G=!!C.displacementMap,Ze=!!C.emissiveMap,Ee=!!C.metalnessMap,Ne=!!C.roughnessMap,jt=C.anisotropy>0,O=C.clearcoat>0,T=C.dispersion>0,q=C.iridescence>0,dt=C.sheen>0,xt=C.transmission>0,ct=jt&&!!C.anisotropyMap,Kt=O&&!!C.clearcoatMap,Ct=O&&!!C.clearcoatNormalMap,Wt=O&&!!C.clearcoatRoughnessMap,ne=q&&!!C.iridescenceMap,Mt=q&&!!C.iridescenceThicknessMap,Tt=dt&&!!C.sheenColorMap,Bt=dt&&!!C.sheenRoughnessMap,Ot=!!C.specularMap,wt=!!C.specularColorMap,ue=!!C.specularIntensityMap,W=xt&&!!C.transmissionMap,Lt=xt&&!!C.thicknessMap,bt=!!C.gradientMap,Ft=!!C.alphaMap,St=C.alphaTest>0,vt=!!C.alphaHash,Rt=!!C.extensions;let ae=ia;C.toneMapped&&(ut===null||ut.isXRRenderTarget===!0)&&(ae=i.toneMapping);const Oe={shaderID:yt,shaderType:C.type,shaderName:C.name,vertexShader:gt,fragmentShader:At,defines:C.defines,customVertexShaderID:Vt,customFragmentShaderID:it,isRawShaderMaterial:C.isRawShaderMaterial===!0,glslVersion:C.glslVersion,precision:y,batching:Ht,batchingColor:Ht&&tt._colorsTexture!==null,instancing:Xt,instancingColor:Xt&&tt.instanceColor!==null,instancingMorph:Xt&&tt.morphTexture!==null,outputColorSpace:ut===null?i.outputColorSpace:ut.isXRRenderTarget===!0?ut.texture.colorSpace:_o,alphaToCoverage:!!C.alphaToCoverage,map:pe,matcap:en,envMap:_e,envMapMode:_e&&z.mapping,envMapCubeUVHeight:K,aoMap:me,lightMap:we,bumpMap:le,normalMap:nn,displacementMap:G,emissiveMap:Ze,normalMapObjectSpace:nn&&C.normalMapType===b3,normalMapTangentSpace:nn&&C.normalMapType===T3,metalnessMap:Ee,roughnessMap:Ne,anisotropy:jt,anisotropyMap:ct,clearcoat:O,clearcoatMap:Kt,clearcoatNormalMap:Ct,clearcoatRoughnessMap:Wt,dispersion:T,iridescence:q,iridescenceMap:ne,iridescenceThicknessMap:Mt,sheen:dt,sheenColorMap:Tt,sheenRoughnessMap:Bt,specularMap:Ot,specularColorMap:wt,specularIntensityMap:ue,transmission:xt,transmissionMap:W,thicknessMap:Lt,gradientMap:bt,opaque:C.transparent===!1&&C.blending===uo&&C.alphaToCoverage===!1,alphaMap:Ft,alphaTest:St,alphaHash:vt,combine:C.combine,mapUv:pe&&b(C.map.channel),aoMapUv:me&&b(C.aoMap.channel),lightMapUv:we&&b(C.lightMap.channel),bumpMapUv:le&&b(C.bumpMap.channel),normalMapUv:nn&&b(C.normalMap.channel),displacementMapUv:G&&b(C.displacementMap.channel),emissiveMapUv:Ze&&b(C.emissiveMap.channel),metalnessMapUv:Ee&&b(C.metalnessMap.channel),roughnessMapUv:Ne&&b(C.roughnessMap.channel),anisotropyMapUv:ct&&b(C.anisotropyMap.channel),clearcoatMapUv:Kt&&b(C.clearcoatMap.channel),clearcoatNormalMapUv:Ct&&b(C.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Wt&&b(C.clearcoatRoughnessMap.channel),iridescenceMapUv:ne&&b(C.iridescenceMap.channel),iridescenceThicknessMapUv:Mt&&b(C.iridescenceThicknessMap.channel),sheenColorMapUv:Tt&&b(C.sheenColorMap.channel),sheenRoughnessMapUv:Bt&&b(C.sheenRoughnessMap.channel),specularMapUv:Ot&&b(C.specularMap.channel),specularColorMapUv:wt&&b(C.specularColorMap.channel),specularIntensityMapUv:ue&&b(C.specularIntensityMap.channel),transmissionMapUv:W&&b(C.transmissionMap.channel),thicknessMapUv:Lt&&b(C.thicknessMap.channel),alphaMapUv:Ft&&b(C.alphaMap.channel),vertexTangents:!!ot.attributes.tangent&&(nn||jt),vertexColors:C.vertexColors,vertexAlphas:C.vertexColors===!0&&!!ot.attributes.color&&ot.attributes.color.itemSize===4,pointsUvs:tt.isPoints===!0&&!!ot.attributes.uv&&(pe||Ft),fog:!!ft,useFog:C.fog===!0,fogExp2:!!ft&&ft.isFogExp2,flatShading:C.flatShading===!0&&C.wireframe===!1,sizeAttenuation:C.sizeAttenuation===!0,logarithmicDepthBuffer:_,reversedDepthBuffer:Dt,skinning:tt.isSkinnedMesh===!0,morphTargets:ot.morphAttributes.position!==void 0,morphNormals:ot.morphAttributes.normal!==void 0,morphColors:ot.morphAttributes.color!==void 0,morphTargetsCount:F,morphTextureStride:at,numDirLights:U.directional.length,numPointLights:U.point.length,numSpotLights:U.spot.length,numSpotLightMaps:U.spotLightMap.length,numRectAreaLights:U.rectArea.length,numHemiLights:U.hemi.length,numDirLightShadows:U.directionalShadowMap.length,numPointLightShadows:U.pointShadowMap.length,numSpotLightShadows:U.spotShadowMap.length,numSpotLightShadowsWithMaps:U.numSpotLightShadowsWithMaps,numLightProbes:U.numLightProbes,numClippingPlanes:u.numPlanes,numClipIntersection:u.numIntersection,dithering:C.dithering,shadowMapEnabled:i.shadowMap.enabled&&H.length>0,shadowMapType:i.shadowMap.type,toneMapping:ae,decodeVideoTexture:pe&&C.map.isVideoTexture===!0&&be.getTransfer(C.map.colorSpace)===ze,decodeVideoTextureEmissive:Ze&&C.emissiveMap.isVideoTexture===!0&&be.getTransfer(C.emissiveMap.colorSpace)===ze,premultipliedAlpha:C.premultipliedAlpha,doubleSided:C.side===Da,flipSided:C.side===ii,useDepthPacking:C.depthPacking>=0,depthPacking:C.depthPacking||0,index0AttributeName:C.index0AttributeName,extensionClipCullDistance:Rt&&C.extensions.clipCullDistance===!0&&s.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Rt&&C.extensions.multiDraw===!0||Ht)&&s.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:s.has("KHR_parallel_shader_compile"),customProgramCacheKey:C.customProgramCacheKey()};return Oe.vertexUv1s=d.has(1),Oe.vertexUv2s=d.has(2),Oe.vertexUv3s=d.has(3),d.clear(),Oe}function x(C){const U=[];if(C.shaderID?U.push(C.shaderID):(U.push(C.customVertexShaderID),U.push(C.customFragmentShaderID)),C.defines!==void 0)for(const H in C.defines)U.push(H),U.push(C.defines[H]);return C.isRawShaderMaterial===!1&&(D(U,C),w(U,C),U.push(i.outputColorSpace)),U.push(C.customProgramCacheKey),U.join()}function D(C,U){C.push(U.precision),C.push(U.outputColorSpace),C.push(U.envMapMode),C.push(U.envMapCubeUVHeight),C.push(U.mapUv),C.push(U.alphaMapUv),C.push(U.lightMapUv),C.push(U.aoMapUv),C.push(U.bumpMapUv),C.push(U.normalMapUv),C.push(U.displacementMapUv),C.push(U.emissiveMapUv),C.push(U.metalnessMapUv),C.push(U.roughnessMapUv),C.push(U.anisotropyMapUv),C.push(U.clearcoatMapUv),C.push(U.clearcoatNormalMapUv),C.push(U.clearcoatRoughnessMapUv),C.push(U.iridescenceMapUv),C.push(U.iridescenceThicknessMapUv),C.push(U.sheenColorMapUv),C.push(U.sheenRoughnessMapUv),C.push(U.specularMapUv),C.push(U.specularColorMapUv),C.push(U.specularIntensityMapUv),C.push(U.transmissionMapUv),C.push(U.thicknessMapUv),C.push(U.combine),C.push(U.fogExp2),C.push(U.sizeAttenuation),C.push(U.morphTargetsCount),C.push(U.morphAttributeCount),C.push(U.numDirLights),C.push(U.numPointLights),C.push(U.numSpotLights),C.push(U.numSpotLightMaps),C.push(U.numHemiLights),C.push(U.numRectAreaLights),C.push(U.numDirLightShadows),C.push(U.numPointLightShadows),C.push(U.numSpotLightShadows),C.push(U.numSpotLightShadowsWithMaps),C.push(U.numLightProbes),C.push(U.shadowMapType),C.push(U.toneMapping),C.push(U.numClippingPlanes),C.push(U.numClipIntersection),C.push(U.depthPacking)}function w(C,U){f.disableAll(),U.instancing&&f.enable(0),U.instancingColor&&f.enable(1),U.instancingMorph&&f.enable(2),U.matcap&&f.enable(3),U.envMap&&f.enable(4),U.normalMapObjectSpace&&f.enable(5),U.normalMapTangentSpace&&f.enable(6),U.clearcoat&&f.enable(7),U.iridescence&&f.enable(8),U.alphaTest&&f.enable(9),U.vertexColors&&f.enable(10),U.vertexAlphas&&f.enable(11),U.vertexUv1s&&f.enable(12),U.vertexUv2s&&f.enable(13),U.vertexUv3s&&f.enable(14),U.vertexTangents&&f.enable(15),U.anisotropy&&f.enable(16),U.alphaHash&&f.enable(17),U.batching&&f.enable(18),U.dispersion&&f.enable(19),U.batchingColor&&f.enable(20),U.gradientMap&&f.enable(21),C.push(f.mask),f.disableAll(),U.fog&&f.enable(0),U.useFog&&f.enable(1),U.flatShading&&f.enable(2),U.logarithmicDepthBuffer&&f.enable(3),U.reversedDepthBuffer&&f.enable(4),U.skinning&&f.enable(5),U.morphTargets&&f.enable(6),U.morphNormals&&f.enable(7),U.morphColors&&f.enable(8),U.premultipliedAlpha&&f.enable(9),U.shadowMapEnabled&&f.enable(10),U.doubleSided&&f.enable(11),U.flipSided&&f.enable(12),U.useDepthPacking&&f.enable(13),U.dithering&&f.enable(14),U.transmission&&f.enable(15),U.sheen&&f.enable(16),U.opaque&&f.enable(17),U.pointsUvs&&f.enable(18),U.decodeVideoTexture&&f.enable(19),U.decodeVideoTextureEmissive&&f.enable(20),U.alphaToCoverage&&f.enable(21),C.push(f.mask)}function L(C){const U=E[C.type];let H;if(U){const $=Ji[U];H=$3.clone($.uniforms)}else H=C.uniforms;return H}function N(C,U){let H=v.get(U);return H!==void 0?++H.usedTimes:(H=new DN(i,U,C,c),g.push(H),v.set(U,H)),H}function B(C){if(--C.usedTimes===0){const U=g.indexOf(C);g[U]=g[g.length-1],g.pop(),v.delete(C.cacheKey),C.destroy()}}function P(C){p.remove(C)}function k(){p.dispose()}return{getParameters:S,getProgramCacheKey:x,getUniforms:L,acquireProgram:N,releaseProgram:B,releaseShaderCache:P,programs:g,dispose:k}}function ON(){let i=new WeakMap;function t(u){return i.has(u)}function n(u){let f=i.get(u);return f===void 0&&(f={},i.set(u,f)),f}function s(u){i.delete(u)}function o(u,f,p){i.get(u)[f]=p}function c(){i=new WeakMap}return{has:t,get:n,remove:s,update:o,dispose:c}}function FN(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function _S(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function xS(){const i=[];let t=0;const n=[],s=[],o=[];function c(){t=0,n.length=0,s.length=0,o.length=0}function u(v,_,y,E,b,S){let x=i[t];return x===void 0?(x={id:v.id,object:v,geometry:_,material:y,groupOrder:E,renderOrder:v.renderOrder,z:b,group:S},i[t]=x):(x.id=v.id,x.object=v,x.geometry=_,x.material=y,x.groupOrder=E,x.renderOrder=v.renderOrder,x.z=b,x.group=S),t++,x}function f(v,_,y,E,b,S){const x=u(v,_,y,E,b,S);y.transmission>0?s.push(x):y.transparent===!0?o.push(x):n.push(x)}function p(v,_,y,E,b,S){const x=u(v,_,y,E,b,S);y.transmission>0?s.unshift(x):y.transparent===!0?o.unshift(x):n.unshift(x)}function d(v,_){n.length>1&&n.sort(v||FN),s.length>1&&s.sort(_||_S),o.length>1&&o.sort(_||_S)}function g(){for(let v=t,_=i.length;v<_;v++){const y=i[v];if(y.id===null)break;y.id=null,y.object=null,y.geometry=null,y.material=null,y.group=null}}return{opaque:n,transmissive:s,transparent:o,init:c,push:f,unshift:p,finish:g,sort:d}}function BN(){let i=new WeakMap;function t(s,o){const c=i.get(s);let u;return c===void 0?(u=new xS,i.set(s,[u])):o>=c.length?(u=new xS,c.push(u)):u=c[o],u}function n(){i=new WeakMap}return{get:t,dispose:n}}function IN(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let n;switch(t.type){case"DirectionalLight":n={direction:new st,color:new Ve};break;case"SpotLight":n={position:new st,direction:new st,color:new Ve,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new st,color:new Ve,distance:0,decay:0};break;case"HemisphereLight":n={direction:new st,skyColor:new Ve,groundColor:new Ve};break;case"RectAreaLight":n={color:new Ve,position:new st,halfWidth:new st,halfHeight:new st};break}return i[t.id]=n,n}}}function zN(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let n;switch(t.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=n,n}}}let VN=0;function HN(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function GN(i){const t=new IN,n=zN(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)s.probe.push(new st);const o=new st,c=new un,u=new un;function f(d){let g=0,v=0,_=0;for(let C=0;C<9;C++)s.probe[C].set(0,0,0);let y=0,E=0,b=0,S=0,x=0,D=0,w=0,L=0,N=0,B=0,P=0;d.sort(HN);for(let C=0,U=d.length;C<U;C++){const H=d[C],$=H.color,tt=H.intensity,ft=H.distance;let ot=null;if(H.shadow&&H.shadow.map&&(H.shadow.map.texture.format===vo?ot=H.shadow.map.texture:ot=H.shadow.map.depthTexture||H.shadow.map.texture),H.isAmbientLight)g+=$.r*tt,v+=$.g*tt,_+=$.b*tt;else if(H.isLightProbe){for(let I=0;I<9;I++)s.probe[I].addScaledVector(H.sh.coefficients[I],tt);P++}else if(H.isDirectionalLight){const I=t.get(H);if(I.color.copy(H.color).multiplyScalar(H.intensity),H.castShadow){const z=H.shadow,K=n.get(H);K.shadowIntensity=z.intensity,K.shadowBias=z.bias,K.shadowNormalBias=z.normalBias,K.shadowRadius=z.radius,K.shadowMapSize=z.mapSize,s.directionalShadow[y]=K,s.directionalShadowMap[y]=ot,s.directionalShadowMatrix[y]=H.shadow.matrix,D++}s.directional[y]=I,y++}else if(H.isSpotLight){const I=t.get(H);I.position.setFromMatrixPosition(H.matrixWorld),I.color.copy($).multiplyScalar(tt),I.distance=ft,I.coneCos=Math.cos(H.angle),I.penumbraCos=Math.cos(H.angle*(1-H.penumbra)),I.decay=H.decay,s.spot[b]=I;const z=H.shadow;if(H.map&&(s.spotLightMap[N]=H.map,N++,z.updateMatrices(H),H.castShadow&&B++),s.spotLightMatrix[b]=z.matrix,H.castShadow){const K=n.get(H);K.shadowIntensity=z.intensity,K.shadowBias=z.bias,K.shadowNormalBias=z.normalBias,K.shadowRadius=z.radius,K.shadowMapSize=z.mapSize,s.spotShadow[b]=K,s.spotShadowMap[b]=ot,L++}b++}else if(H.isRectAreaLight){const I=t.get(H);I.color.copy($).multiplyScalar(tt),I.halfWidth.set(H.width*.5,0,0),I.halfHeight.set(0,H.height*.5,0),s.rectArea[S]=I,S++}else if(H.isPointLight){const I=t.get(H);if(I.color.copy(H.color).multiplyScalar(H.intensity),I.distance=H.distance,I.decay=H.decay,H.castShadow){const z=H.shadow,K=n.get(H);K.shadowIntensity=z.intensity,K.shadowBias=z.bias,K.shadowNormalBias=z.normalBias,K.shadowRadius=z.radius,K.shadowMapSize=z.mapSize,K.shadowCameraNear=z.camera.near,K.shadowCameraFar=z.camera.far,s.pointShadow[E]=K,s.pointShadowMap[E]=ot,s.pointShadowMatrix[E]=H.shadow.matrix,w++}s.point[E]=I,E++}else if(H.isHemisphereLight){const I=t.get(H);I.skyColor.copy(H.color).multiplyScalar(tt),I.groundColor.copy(H.groundColor).multiplyScalar(tt),s.hemi[x]=I,x++}}S>0&&(i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Pt.LTC_FLOAT_1,s.rectAreaLTC2=Pt.LTC_FLOAT_2):(s.rectAreaLTC1=Pt.LTC_HALF_1,s.rectAreaLTC2=Pt.LTC_HALF_2)),s.ambient[0]=g,s.ambient[1]=v,s.ambient[2]=_;const k=s.hash;(k.directionalLength!==y||k.pointLength!==E||k.spotLength!==b||k.rectAreaLength!==S||k.hemiLength!==x||k.numDirectionalShadows!==D||k.numPointShadows!==w||k.numSpotShadows!==L||k.numSpotMaps!==N||k.numLightProbes!==P)&&(s.directional.length=y,s.spot.length=b,s.rectArea.length=S,s.point.length=E,s.hemi.length=x,s.directionalShadow.length=D,s.directionalShadowMap.length=D,s.pointShadow.length=w,s.pointShadowMap.length=w,s.spotShadow.length=L,s.spotShadowMap.length=L,s.directionalShadowMatrix.length=D,s.pointShadowMatrix.length=w,s.spotLightMatrix.length=L+N-B,s.spotLightMap.length=N,s.numSpotLightShadowsWithMaps=B,s.numLightProbes=P,k.directionalLength=y,k.pointLength=E,k.spotLength=b,k.rectAreaLength=S,k.hemiLength=x,k.numDirectionalShadows=D,k.numPointShadows=w,k.numSpotShadows=L,k.numSpotMaps=N,k.numLightProbes=P,s.version=VN++)}function p(d,g){let v=0,_=0,y=0,E=0,b=0;const S=g.matrixWorldInverse;for(let x=0,D=d.length;x<D;x++){const w=d[x];if(w.isDirectionalLight){const L=s.directional[v];L.direction.setFromMatrixPosition(w.matrixWorld),o.setFromMatrixPosition(w.target.matrixWorld),L.direction.sub(o),L.direction.transformDirection(S),v++}else if(w.isSpotLight){const L=s.spot[y];L.position.setFromMatrixPosition(w.matrixWorld),L.position.applyMatrix4(S),L.direction.setFromMatrixPosition(w.matrixWorld),o.setFromMatrixPosition(w.target.matrixWorld),L.direction.sub(o),L.direction.transformDirection(S),y++}else if(w.isRectAreaLight){const L=s.rectArea[E];L.position.setFromMatrixPosition(w.matrixWorld),L.position.applyMatrix4(S),u.identity(),c.copy(w.matrixWorld),c.premultiply(S),u.extractRotation(c),L.halfWidth.set(w.width*.5,0,0),L.halfHeight.set(0,w.height*.5,0),L.halfWidth.applyMatrix4(u),L.halfHeight.applyMatrix4(u),E++}else if(w.isPointLight){const L=s.point[_];L.position.setFromMatrixPosition(w.matrixWorld),L.position.applyMatrix4(S),_++}else if(w.isHemisphereLight){const L=s.hemi[b];L.direction.setFromMatrixPosition(w.matrixWorld),L.direction.transformDirection(S),b++}}}return{setup:f,setupView:p,state:s}}function yS(i){const t=new GN(i),n=[],s=[];function o(g){d.camera=g,n.length=0,s.length=0}function c(g){n.push(g)}function u(g){s.push(g)}function f(){t.setup(n)}function p(g){t.setupView(n,g)}const d={lightsArray:n,shadowsArray:s,camera:null,lights:t,transmissionRenderTarget:{}};return{init:o,state:d,setupLights:f,setupLightsView:p,pushLight:c,pushShadow:u}}function kN(i){let t=new WeakMap;function n(o,c=0){const u=t.get(o);let f;return u===void 0?(f=new yS(i),t.set(o,[f])):c>=u.length?(f=new yS(i),u.push(f)):f=u[c],f}function s(){t=new WeakMap}return{get:n,dispose:s}}const XN=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,WN=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,qN=[new st(1,0,0),new st(-1,0,0),new st(0,1,0),new st(0,-1,0),new st(0,0,1),new st(0,0,-1)],YN=[new st(0,-1,0),new st(0,-1,0),new st(0,0,1),new st(0,0,-1),new st(0,-1,0),new st(0,-1,0)],SS=new un,Al=new st,mp=new st;function jN(i,t,n){let s=new NE;const o=new Xe,c=new Xe,u=new cn,f=new u2,p=new f2,d={},g=n.maxTextureSize,v={[Ts]:ii,[ii]:Ts,[Da]:Da},_=new ra({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Xe},radius:{value:4}},vertexShader:XN,fragmentShader:WN}),y=_.clone();y.defines.HORIZONTAL_PASS=1;const E=new gi;E.setAttribute("position",new si(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const b=new Va(E,_),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Hu;let x=this.type;this.render=function(B,P,k){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||B.length===0)return;B.type===e3&&(oe("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),B.type=Hu);const C=i.getRenderTarget(),U=i.getActiveCubeFace(),H=i.getActiveMipmapLevel(),$=i.state;$.setBlending(La),$.buffers.depth.getReversed()===!0?$.buffers.color.setClear(0,0,0,0):$.buffers.color.setClear(1,1,1,1),$.buffers.depth.setTest(!0),$.setScissorTest(!1);const tt=x!==this.type;tt&&P.traverse(function(ft){ft.material&&(Array.isArray(ft.material)?ft.material.forEach(ot=>ot.needsUpdate=!0):ft.material.needsUpdate=!0)});for(let ft=0,ot=B.length;ft<ot;ft++){const I=B[ft],z=I.shadow;if(z===void 0){oe("WebGLShadowMap:",I,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;o.copy(z.mapSize);const K=z.getFrameExtents();if(o.multiply(K),c.copy(z.mapSize),(o.x>g||o.y>g)&&(o.x>g&&(c.x=Math.floor(g/K.x),o.x=c.x*K.x,z.mapSize.x=c.x),o.y>g&&(c.y=Math.floor(g/K.y),o.y=c.y*K.y,z.mapSize.y=c.y)),z.map===null||tt===!0){if(z.map!==null&&(z.map.depthTexture!==null&&(z.map.depthTexture.dispose(),z.map.depthTexture=null),z.map.dispose()),this.type===Cl){if(I.isPointLight){oe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}z.map=new aa(o.x,o.y,{format:vo,type:Ba,minFilter:Gn,magFilter:Gn,generateMipmaps:!1}),z.map.texture.name=I.name+".shadowMap",z.map.depthTexture=new kl(o.x,o.y,$i),z.map.depthTexture.name=I.name+".shadowMapDepth",z.map.depthTexture.format=Ia,z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=Fn,z.map.depthTexture.magFilter=Fn}else{I.isPointLight?(z.map=new UE(o.x),z.map.depthTexture=new l2(o.x,sa)):(z.map=new aa(o.x,o.y),z.map.depthTexture=new kl(o.x,o.y,sa)),z.map.depthTexture.name=I.name+".shadowMap",z.map.depthTexture.format=Ia;const _t=i.state.buffers.depth.getReversed();this.type===Hu?(z.map.depthTexture.compareFunction=_t?Mg:Sg,z.map.depthTexture.minFilter=Gn,z.map.depthTexture.magFilter=Gn):(z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=Fn,z.map.depthTexture.magFilter=Fn)}z.camera.updateProjectionMatrix()}const yt=z.map.isWebGLCubeRenderTarget?6:1;for(let _t=0;_t<yt;_t++){if(z.map.isWebGLCubeRenderTarget)i.setRenderTarget(z.map,_t),i.clear();else{_t===0&&(i.setRenderTarget(z.map),i.clear());const F=z.getViewport(_t);u.set(c.x*F.x,c.y*F.y,c.x*F.z,c.y*F.w),$.viewport(u)}if(I.isPointLight){const F=z.camera,at=z.matrix,gt=I.distance||F.far;gt!==F.far&&(F.far=gt,F.updateProjectionMatrix()),Al.setFromMatrixPosition(I.matrixWorld),F.position.copy(Al),mp.copy(F.position),mp.add(qN[_t]),F.up.copy(YN[_t]),F.lookAt(mp),F.updateMatrixWorld(),at.makeTranslation(-Al.x,-Al.y,-Al.z),SS.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),z._frustum.setFromProjectionMatrix(SS,F.coordinateSystem,F.reversedDepth)}else z.updateMatrices(I);s=z.getFrustum(),L(P,k,z.camera,I,this.type)}z.isPointLightShadow!==!0&&this.type===Cl&&D(z,k),z.needsUpdate=!1}x=this.type,S.needsUpdate=!1,i.setRenderTarget(C,U,H)};function D(B,P){const k=t.update(b);_.defines.VSM_SAMPLES!==B.blurSamples&&(_.defines.VSM_SAMPLES=B.blurSamples,y.defines.VSM_SAMPLES=B.blurSamples,_.needsUpdate=!0,y.needsUpdate=!0),B.mapPass===null&&(B.mapPass=new aa(o.x,o.y,{format:vo,type:Ba})),_.uniforms.shadow_pass.value=B.map.depthTexture,_.uniforms.resolution.value=B.mapSize,_.uniforms.radius.value=B.radius,i.setRenderTarget(B.mapPass),i.clear(),i.renderBufferDirect(P,null,k,_,b,null),y.uniforms.shadow_pass.value=B.mapPass.texture,y.uniforms.resolution.value=B.mapSize,y.uniforms.radius.value=B.radius,i.setRenderTarget(B.map),i.clear(),i.renderBufferDirect(P,null,k,y,b,null)}function w(B,P,k,C){let U=null;const H=k.isPointLight===!0?B.customDistanceMaterial:B.customDepthMaterial;if(H!==void 0)U=H;else if(U=k.isPointLight===!0?p:f,i.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){const $=U.uuid,tt=P.uuid;let ft=d[$];ft===void 0&&(ft={},d[$]=ft);let ot=ft[tt];ot===void 0&&(ot=U.clone(),ft[tt]=ot,P.addEventListener("dispose",N)),U=ot}if(U.visible=P.visible,U.wireframe=P.wireframe,C===Cl?U.side=P.shadowSide!==null?P.shadowSide:P.side:U.side=P.shadowSide!==null?P.shadowSide:v[P.side],U.alphaMap=P.alphaMap,U.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,U.map=P.map,U.clipShadows=P.clipShadows,U.clippingPlanes=P.clippingPlanes,U.clipIntersection=P.clipIntersection,U.displacementMap=P.displacementMap,U.displacementScale=P.displacementScale,U.displacementBias=P.displacementBias,U.wireframeLinewidth=P.wireframeLinewidth,U.linewidth=P.linewidth,k.isPointLight===!0&&U.isMeshDistanceMaterial===!0){const $=i.properties.get(U);$.light=k}return U}function L(B,P,k,C,U){if(B.visible===!1)return;if(B.layers.test(P.layers)&&(B.isMesh||B.isLine||B.isPoints)&&(B.castShadow||B.receiveShadow&&U===Cl)&&(!B.frustumCulled||s.intersectsObject(B))){B.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,B.matrixWorld);const tt=t.update(B),ft=B.material;if(Array.isArray(ft)){const ot=tt.groups;for(let I=0,z=ot.length;I<z;I++){const K=ot[I],yt=ft[K.materialIndex];if(yt&&yt.visible){const _t=w(B,yt,C,U);B.onBeforeShadow(i,B,P,k,tt,_t,K),i.renderBufferDirect(k,null,tt,_t,B,K),B.onAfterShadow(i,B,P,k,tt,_t,K)}}}else if(ft.visible){const ot=w(B,ft,C,U);B.onBeforeShadow(i,B,P,k,tt,ot,null),i.renderBufferDirect(k,null,tt,ot,B,null),B.onAfterShadow(i,B,P,k,tt,ot,null)}}const $=B.children;for(let tt=0,ft=$.length;tt<ft;tt++)L($[tt],P,k,C,U)}function N(B){B.target.removeEventListener("dispose",N);for(const k in d){const C=d[k],U=B.target.uuid;U in C&&(C[U].dispose(),delete C[U])}}}const ZN={[Vp]:Hp,[Gp]:Wp,[kp]:qp,[mo]:Xp,[Hp]:Vp,[Wp]:Gp,[qp]:kp,[Xp]:mo};function KN(i,t){function n(){let W=!1;const Lt=new cn;let bt=null;const Ft=new cn(0,0,0,0);return{setMask:function(St){bt!==St&&!W&&(i.colorMask(St,St,St,St),bt=St)},setLocked:function(St){W=St},setClear:function(St,vt,Rt,ae,Oe){Oe===!0&&(St*=ae,vt*=ae,Rt*=ae),Lt.set(St,vt,Rt,ae),Ft.equals(Lt)===!1&&(i.clearColor(St,vt,Rt,ae),Ft.copy(Lt))},reset:function(){W=!1,bt=null,Ft.set(-1,0,0,0)}}}function s(){let W=!1,Lt=!1,bt=null,Ft=null,St=null;return{setReversed:function(vt){if(Lt!==vt){const Rt=t.get("EXT_clip_control");vt?Rt.clipControlEXT(Rt.LOWER_LEFT_EXT,Rt.ZERO_TO_ONE_EXT):Rt.clipControlEXT(Rt.LOWER_LEFT_EXT,Rt.NEGATIVE_ONE_TO_ONE_EXT),Lt=vt;const ae=St;St=null,this.setClear(ae)}},getReversed:function(){return Lt},setTest:function(vt){vt?ut(i.DEPTH_TEST):Dt(i.DEPTH_TEST)},setMask:function(vt){bt!==vt&&!W&&(i.depthMask(vt),bt=vt)},setFunc:function(vt){if(Lt&&(vt=ZN[vt]),Ft!==vt){switch(vt){case Vp:i.depthFunc(i.NEVER);break;case Hp:i.depthFunc(i.ALWAYS);break;case Gp:i.depthFunc(i.LESS);break;case mo:i.depthFunc(i.LEQUAL);break;case kp:i.depthFunc(i.EQUAL);break;case Xp:i.depthFunc(i.GEQUAL);break;case Wp:i.depthFunc(i.GREATER);break;case qp:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Ft=vt}},setLocked:function(vt){W=vt},setClear:function(vt){St!==vt&&(Lt&&(vt=1-vt),i.clearDepth(vt),St=vt)},reset:function(){W=!1,bt=null,Ft=null,St=null,Lt=!1}}}function o(){let W=!1,Lt=null,bt=null,Ft=null,St=null,vt=null,Rt=null,ae=null,Oe=null;return{setTest:function(Te){W||(Te?ut(i.STENCIL_TEST):Dt(i.STENCIL_TEST))},setMask:function(Te){Lt!==Te&&!W&&(i.stencilMask(Te),Lt=Te)},setFunc:function(Te,Bn,Ni){(bt!==Te||Ft!==Bn||St!==Ni)&&(i.stencilFunc(Te,Bn,Ni),bt=Te,Ft=Bn,St=Ni)},setOp:function(Te,Bn,Ni){(vt!==Te||Rt!==Bn||ae!==Ni)&&(i.stencilOp(Te,Bn,Ni),vt=Te,Rt=Bn,ae=Ni)},setLocked:function(Te){W=Te},setClear:function(Te){Oe!==Te&&(i.clearStencil(Te),Oe=Te)},reset:function(){W=!1,Lt=null,bt=null,Ft=null,St=null,vt=null,Rt=null,ae=null,Oe=null}}}const c=new n,u=new s,f=new o,p=new WeakMap,d=new WeakMap;let g={},v={},_=new WeakMap,y=[],E=null,b=!1,S=null,x=null,D=null,w=null,L=null,N=null,B=null,P=new Ve(0,0,0),k=0,C=!1,U=null,H=null,$=null,tt=null,ft=null;const ot=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let I=!1,z=0;const K=i.getParameter(i.VERSION);K.indexOf("WebGL")!==-1?(z=parseFloat(/^WebGL (\d)/.exec(K)[1]),I=z>=1):K.indexOf("OpenGL ES")!==-1&&(z=parseFloat(/^OpenGL ES (\d)/.exec(K)[1]),I=z>=2);let yt=null,_t={};const F=i.getParameter(i.SCISSOR_BOX),at=i.getParameter(i.VIEWPORT),gt=new cn().fromArray(F),At=new cn().fromArray(at);function Vt(W,Lt,bt,Ft){const St=new Uint8Array(4),vt=i.createTexture();i.bindTexture(W,vt),i.texParameteri(W,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(W,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Rt=0;Rt<bt;Rt++)W===i.TEXTURE_3D||W===i.TEXTURE_2D_ARRAY?i.texImage3D(Lt,0,i.RGBA,1,1,Ft,0,i.RGBA,i.UNSIGNED_BYTE,St):i.texImage2D(Lt+Rt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,St);return vt}const it={};it[i.TEXTURE_2D]=Vt(i.TEXTURE_2D,i.TEXTURE_2D,1),it[i.TEXTURE_CUBE_MAP]=Vt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),it[i.TEXTURE_2D_ARRAY]=Vt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),it[i.TEXTURE_3D]=Vt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),c.setClear(0,0,0,1),u.setClear(1),f.setClear(0),ut(i.DEPTH_TEST),u.setFunc(mo),le(!1),nn(Ay),ut(i.CULL_FACE),me(La);function ut(W){g[W]!==!0&&(i.enable(W),g[W]=!0)}function Dt(W){g[W]!==!1&&(i.disable(W),g[W]=!1)}function Xt(W,Lt){return v[W]!==Lt?(i.bindFramebuffer(W,Lt),v[W]=Lt,W===i.DRAW_FRAMEBUFFER&&(v[i.FRAMEBUFFER]=Lt),W===i.FRAMEBUFFER&&(v[i.DRAW_FRAMEBUFFER]=Lt),!0):!1}function Ht(W,Lt){let bt=y,Ft=!1;if(W){bt=_.get(Lt),bt===void 0&&(bt=[],_.set(Lt,bt));const St=W.textures;if(bt.length!==St.length||bt[0]!==i.COLOR_ATTACHMENT0){for(let vt=0,Rt=St.length;vt<Rt;vt++)bt[vt]=i.COLOR_ATTACHMENT0+vt;bt.length=St.length,Ft=!0}}else bt[0]!==i.BACK&&(bt[0]=i.BACK,Ft=!0);Ft&&i.drawBuffers(bt)}function pe(W){return E!==W?(i.useProgram(W),E=W,!0):!1}const en={[$s]:i.FUNC_ADD,[i3]:i.FUNC_SUBTRACT,[a3]:i.FUNC_REVERSE_SUBTRACT};en[s3]=i.MIN,en[r3]=i.MAX;const _e={[o3]:i.ZERO,[l3]:i.ONE,[c3]:i.SRC_COLOR,[Ip]:i.SRC_ALPHA,[m3]:i.SRC_ALPHA_SATURATE,[d3]:i.DST_COLOR,[f3]:i.DST_ALPHA,[u3]:i.ONE_MINUS_SRC_COLOR,[zp]:i.ONE_MINUS_SRC_ALPHA,[p3]:i.ONE_MINUS_DST_COLOR,[h3]:i.ONE_MINUS_DST_ALPHA,[g3]:i.CONSTANT_COLOR,[v3]:i.ONE_MINUS_CONSTANT_COLOR,[_3]:i.CONSTANT_ALPHA,[x3]:i.ONE_MINUS_CONSTANT_ALPHA};function me(W,Lt,bt,Ft,St,vt,Rt,ae,Oe,Te){if(W===La){b===!0&&(Dt(i.BLEND),b=!1);return}if(b===!1&&(ut(i.BLEND),b=!0),W!==n3){if(W!==S||Te!==C){if((x!==$s||L!==$s)&&(i.blendEquation(i.FUNC_ADD),x=$s,L=$s),Te)switch(W){case uo:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case zl:i.blendFunc(i.ONE,i.ONE);break;case Ry:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Cy:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Ce("WebGLState: Invalid blending: ",W);break}else switch(W){case uo:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case zl:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Ry:Ce("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Cy:Ce("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ce("WebGLState: Invalid blending: ",W);break}D=null,w=null,N=null,B=null,P.set(0,0,0),k=0,S=W,C=Te}return}St=St||Lt,vt=vt||bt,Rt=Rt||Ft,(Lt!==x||St!==L)&&(i.blendEquationSeparate(en[Lt],en[St]),x=Lt,L=St),(bt!==D||Ft!==w||vt!==N||Rt!==B)&&(i.blendFuncSeparate(_e[bt],_e[Ft],_e[vt],_e[Rt]),D=bt,w=Ft,N=vt,B=Rt),(ae.equals(P)===!1||Oe!==k)&&(i.blendColor(ae.r,ae.g,ae.b,Oe),P.copy(ae),k=Oe),S=W,C=!1}function we(W,Lt){W.side===Da?Dt(i.CULL_FACE):ut(i.CULL_FACE);let bt=W.side===ii;Lt&&(bt=!bt),le(bt),W.blending===uo&&W.transparent===!1?me(La):me(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),u.setFunc(W.depthFunc),u.setTest(W.depthTest),u.setMask(W.depthWrite),c.setMask(W.colorWrite);const Ft=W.stencilWrite;f.setTest(Ft),Ft&&(f.setMask(W.stencilWriteMask),f.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),f.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),Ze(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?ut(i.SAMPLE_ALPHA_TO_COVERAGE):Dt(i.SAMPLE_ALPHA_TO_COVERAGE)}function le(W){U!==W&&(W?i.frontFace(i.CW):i.frontFace(i.CCW),U=W)}function nn(W){W!==$w?(ut(i.CULL_FACE),W!==H&&(W===Ay?i.cullFace(i.BACK):W===t3?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Dt(i.CULL_FACE),H=W}function G(W){W!==$&&(I&&i.lineWidth(W),$=W)}function Ze(W,Lt,bt){W?(ut(i.POLYGON_OFFSET_FILL),(tt!==Lt||ft!==bt)&&(i.polygonOffset(Lt,bt),tt=Lt,ft=bt)):Dt(i.POLYGON_OFFSET_FILL)}function Ee(W){W?ut(i.SCISSOR_TEST):Dt(i.SCISSOR_TEST)}function Ne(W){W===void 0&&(W=i.TEXTURE0+ot-1),yt!==W&&(i.activeTexture(W),yt=W)}function jt(W,Lt,bt){bt===void 0&&(yt===null?bt=i.TEXTURE0+ot-1:bt=yt);let Ft=_t[bt];Ft===void 0&&(Ft={type:void 0,texture:void 0},_t[bt]=Ft),(Ft.type!==W||Ft.texture!==Lt)&&(yt!==bt&&(i.activeTexture(bt),yt=bt),i.bindTexture(W,Lt||it[W]),Ft.type=W,Ft.texture=Lt)}function O(){const W=_t[yt];W!==void 0&&W.type!==void 0&&(i.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function T(){try{i.compressedTexImage2D(...arguments)}catch(W){Ce("WebGLState:",W)}}function q(){try{i.compressedTexImage3D(...arguments)}catch(W){Ce("WebGLState:",W)}}function dt(){try{i.texSubImage2D(...arguments)}catch(W){Ce("WebGLState:",W)}}function xt(){try{i.texSubImage3D(...arguments)}catch(W){Ce("WebGLState:",W)}}function ct(){try{i.compressedTexSubImage2D(...arguments)}catch(W){Ce("WebGLState:",W)}}function Kt(){try{i.compressedTexSubImage3D(...arguments)}catch(W){Ce("WebGLState:",W)}}function Ct(){try{i.texStorage2D(...arguments)}catch(W){Ce("WebGLState:",W)}}function Wt(){try{i.texStorage3D(...arguments)}catch(W){Ce("WebGLState:",W)}}function ne(){try{i.texImage2D(...arguments)}catch(W){Ce("WebGLState:",W)}}function Mt(){try{i.texImage3D(...arguments)}catch(W){Ce("WebGLState:",W)}}function Tt(W){gt.equals(W)===!1&&(i.scissor(W.x,W.y,W.z,W.w),gt.copy(W))}function Bt(W){At.equals(W)===!1&&(i.viewport(W.x,W.y,W.z,W.w),At.copy(W))}function Ot(W,Lt){let bt=d.get(Lt);bt===void 0&&(bt=new WeakMap,d.set(Lt,bt));let Ft=bt.get(W);Ft===void 0&&(Ft=i.getUniformBlockIndex(Lt,W.name),bt.set(W,Ft))}function wt(W,Lt){const Ft=d.get(Lt).get(W);p.get(Lt)!==Ft&&(i.uniformBlockBinding(Lt,Ft,W.__bindingPointIndex),p.set(Lt,Ft))}function ue(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),u.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),g={},yt=null,_t={},v={},_=new WeakMap,y=[],E=null,b=!1,S=null,x=null,D=null,w=null,L=null,N=null,B=null,P=new Ve(0,0,0),k=0,C=!1,U=null,H=null,$=null,tt=null,ft=null,gt.set(0,0,i.canvas.width,i.canvas.height),At.set(0,0,i.canvas.width,i.canvas.height),c.reset(),u.reset(),f.reset()}return{buffers:{color:c,depth:u,stencil:f},enable:ut,disable:Dt,bindFramebuffer:Xt,drawBuffers:Ht,useProgram:pe,setBlending:me,setMaterial:we,setFlipSided:le,setCullFace:nn,setLineWidth:G,setPolygonOffset:Ze,setScissorTest:Ee,activeTexture:Ne,bindTexture:jt,unbindTexture:O,compressedTexImage2D:T,compressedTexImage3D:q,texImage2D:ne,texImage3D:Mt,updateUBOMapping:Ot,uniformBlockBinding:wt,texStorage2D:Ct,texStorage3D:Wt,texSubImage2D:dt,texSubImage3D:xt,compressedTexSubImage2D:ct,compressedTexSubImage3D:Kt,scissor:Tt,viewport:Bt,reset:ue}}function QN(i,t,n,s,o,c,u){const f=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),d=new Xe,g=new WeakMap;let v;const _=new WeakMap;let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(O,T){return y?new OffscreenCanvas(O,T):nf("canvas")}function b(O,T,q){let dt=1;const xt=jt(O);if((xt.width>q||xt.height>q)&&(dt=q/Math.max(xt.width,xt.height)),dt<1)if(typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&O instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&O instanceof ImageBitmap||typeof VideoFrame<"u"&&O instanceof VideoFrame){const ct=Math.floor(dt*xt.width),Kt=Math.floor(dt*xt.height);v===void 0&&(v=E(ct,Kt));const Ct=T?E(ct,Kt):v;return Ct.width=ct,Ct.height=Kt,Ct.getContext("2d").drawImage(O,0,0,ct,Kt),oe("WebGLRenderer: Texture has been resized from ("+xt.width+"x"+xt.height+") to ("+ct+"x"+Kt+")."),Ct}else return"data"in O&&oe("WebGLRenderer: Image in DataTexture is too big ("+xt.width+"x"+xt.height+")."),O;return O}function S(O){return O.generateMipmaps}function x(O){i.generateMipmap(O)}function D(O){return O.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:O.isWebGL3DRenderTarget?i.TEXTURE_3D:O.isWebGLArrayRenderTarget||O.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function w(O,T,q,dt,xt=!1){if(O!==null){if(i[O]!==void 0)return i[O];oe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+O+"'")}let ct=T;if(T===i.RED&&(q===i.FLOAT&&(ct=i.R32F),q===i.HALF_FLOAT&&(ct=i.R16F),q===i.UNSIGNED_BYTE&&(ct=i.R8)),T===i.RED_INTEGER&&(q===i.UNSIGNED_BYTE&&(ct=i.R8UI),q===i.UNSIGNED_SHORT&&(ct=i.R16UI),q===i.UNSIGNED_INT&&(ct=i.R32UI),q===i.BYTE&&(ct=i.R8I),q===i.SHORT&&(ct=i.R16I),q===i.INT&&(ct=i.R32I)),T===i.RG&&(q===i.FLOAT&&(ct=i.RG32F),q===i.HALF_FLOAT&&(ct=i.RG16F),q===i.UNSIGNED_BYTE&&(ct=i.RG8)),T===i.RG_INTEGER&&(q===i.UNSIGNED_BYTE&&(ct=i.RG8UI),q===i.UNSIGNED_SHORT&&(ct=i.RG16UI),q===i.UNSIGNED_INT&&(ct=i.RG32UI),q===i.BYTE&&(ct=i.RG8I),q===i.SHORT&&(ct=i.RG16I),q===i.INT&&(ct=i.RG32I)),T===i.RGB_INTEGER&&(q===i.UNSIGNED_BYTE&&(ct=i.RGB8UI),q===i.UNSIGNED_SHORT&&(ct=i.RGB16UI),q===i.UNSIGNED_INT&&(ct=i.RGB32UI),q===i.BYTE&&(ct=i.RGB8I),q===i.SHORT&&(ct=i.RGB16I),q===i.INT&&(ct=i.RGB32I)),T===i.RGBA_INTEGER&&(q===i.UNSIGNED_BYTE&&(ct=i.RGBA8UI),q===i.UNSIGNED_SHORT&&(ct=i.RGBA16UI),q===i.UNSIGNED_INT&&(ct=i.RGBA32UI),q===i.BYTE&&(ct=i.RGBA8I),q===i.SHORT&&(ct=i.RGBA16I),q===i.INT&&(ct=i.RGBA32I)),T===i.RGB&&(q===i.UNSIGNED_INT_5_9_9_9_REV&&(ct=i.RGB9_E5),q===i.UNSIGNED_INT_10F_11F_11F_REV&&(ct=i.R11F_G11F_B10F)),T===i.RGBA){const Kt=xt?tf:be.getTransfer(dt);q===i.FLOAT&&(ct=i.RGBA32F),q===i.HALF_FLOAT&&(ct=i.RGBA16F),q===i.UNSIGNED_BYTE&&(ct=Kt===ze?i.SRGB8_ALPHA8:i.RGBA8),q===i.UNSIGNED_SHORT_4_4_4_4&&(ct=i.RGBA4),q===i.UNSIGNED_SHORT_5_5_5_1&&(ct=i.RGB5_A1)}return(ct===i.R16F||ct===i.R32F||ct===i.RG16F||ct===i.RG32F||ct===i.RGBA16F||ct===i.RGBA32F)&&t.get("EXT_color_buffer_float"),ct}function L(O,T){let q;return O?T===null||T===sa||T===Hl?q=i.DEPTH24_STENCIL8:T===$i?q=i.DEPTH32F_STENCIL8:T===Vl&&(q=i.DEPTH24_STENCIL8,oe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===sa||T===Hl?q=i.DEPTH_COMPONENT24:T===$i?q=i.DEPTH_COMPONENT32F:T===Vl&&(q=i.DEPTH_COMPONENT16),q}function N(O,T){return S(O)===!0||O.isFramebufferTexture&&O.minFilter!==Fn&&O.minFilter!==Gn?Math.log2(Math.max(T.width,T.height))+1:O.mipmaps!==void 0&&O.mipmaps.length>0?O.mipmaps.length:O.isCompressedTexture&&Array.isArray(O.image)?T.mipmaps.length:1}function B(O){const T=O.target;T.removeEventListener("dispose",B),k(T),T.isVideoTexture&&g.delete(T)}function P(O){const T=O.target;T.removeEventListener("dispose",P),U(T)}function k(O){const T=s.get(O);if(T.__webglInit===void 0)return;const q=O.source,dt=_.get(q);if(dt){const xt=dt[T.__cacheKey];xt.usedTimes--,xt.usedTimes===0&&C(O),Object.keys(dt).length===0&&_.delete(q)}s.remove(O)}function C(O){const T=s.get(O);i.deleteTexture(T.__webglTexture);const q=O.source,dt=_.get(q);delete dt[T.__cacheKey],u.memory.textures--}function U(O){const T=s.get(O);if(O.depthTexture&&(O.depthTexture.dispose(),s.remove(O.depthTexture)),O.isWebGLCubeRenderTarget)for(let dt=0;dt<6;dt++){if(Array.isArray(T.__webglFramebuffer[dt]))for(let xt=0;xt<T.__webglFramebuffer[dt].length;xt++)i.deleteFramebuffer(T.__webglFramebuffer[dt][xt]);else i.deleteFramebuffer(T.__webglFramebuffer[dt]);T.__webglDepthbuffer&&i.deleteRenderbuffer(T.__webglDepthbuffer[dt])}else{if(Array.isArray(T.__webglFramebuffer))for(let dt=0;dt<T.__webglFramebuffer.length;dt++)i.deleteFramebuffer(T.__webglFramebuffer[dt]);else i.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&i.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&i.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let dt=0;dt<T.__webglColorRenderbuffer.length;dt++)T.__webglColorRenderbuffer[dt]&&i.deleteRenderbuffer(T.__webglColorRenderbuffer[dt]);T.__webglDepthRenderbuffer&&i.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const q=O.textures;for(let dt=0,xt=q.length;dt<xt;dt++){const ct=s.get(q[dt]);ct.__webglTexture&&(i.deleteTexture(ct.__webglTexture),u.memory.textures--),s.remove(q[dt])}s.remove(O)}let H=0;function $(){H=0}function tt(){const O=H;return O>=o.maxTextures&&oe("WebGLTextures: Trying to use "+O+" texture units while this GPU supports only "+o.maxTextures),H+=1,O}function ft(O){const T=[];return T.push(O.wrapS),T.push(O.wrapT),T.push(O.wrapR||0),T.push(O.magFilter),T.push(O.minFilter),T.push(O.anisotropy),T.push(O.internalFormat),T.push(O.format),T.push(O.type),T.push(O.generateMipmaps),T.push(O.premultiplyAlpha),T.push(O.flipY),T.push(O.unpackAlignment),T.push(O.colorSpace),T.join()}function ot(O,T){const q=s.get(O);if(O.isVideoTexture&&Ee(O),O.isRenderTargetTexture===!1&&O.isExternalTexture!==!0&&O.version>0&&q.__version!==O.version){const dt=O.image;if(dt===null)oe("WebGLRenderer: Texture marked for update but no image data found.");else if(dt.complete===!1)oe("WebGLRenderer: Texture marked for update but image is incomplete");else{it(q,O,T);return}}else O.isExternalTexture&&(q.__webglTexture=O.sourceTexture?O.sourceTexture:null);n.bindTexture(i.TEXTURE_2D,q.__webglTexture,i.TEXTURE0+T)}function I(O,T){const q=s.get(O);if(O.isRenderTargetTexture===!1&&O.version>0&&q.__version!==O.version){it(q,O,T);return}else O.isExternalTexture&&(q.__webglTexture=O.sourceTexture?O.sourceTexture:null);n.bindTexture(i.TEXTURE_2D_ARRAY,q.__webglTexture,i.TEXTURE0+T)}function z(O,T){const q=s.get(O);if(O.isRenderTargetTexture===!1&&O.version>0&&q.__version!==O.version){it(q,O,T);return}n.bindTexture(i.TEXTURE_3D,q.__webglTexture,i.TEXTURE0+T)}function K(O,T){const q=s.get(O);if(O.isCubeDepthTexture!==!0&&O.version>0&&q.__version!==O.version){ut(q,O,T);return}n.bindTexture(i.TEXTURE_CUBE_MAP,q.__webglTexture,i.TEXTURE0+T)}const yt={[Zp]:i.REPEAT,[Ua]:i.CLAMP_TO_EDGE,[Kp]:i.MIRRORED_REPEAT},_t={[Fn]:i.NEAREST,[M3]:i.NEAREST_MIPMAP_NEAREST,[pu]:i.NEAREST_MIPMAP_LINEAR,[Gn]:i.LINEAR,[zd]:i.LINEAR_MIPMAP_NEAREST,[ir]:i.LINEAR_MIPMAP_LINEAR},F={[A3]:i.NEVER,[U3]:i.ALWAYS,[R3]:i.LESS,[Sg]:i.LEQUAL,[C3]:i.EQUAL,[Mg]:i.GEQUAL,[w3]:i.GREATER,[D3]:i.NOTEQUAL};function at(O,T){if(T.type===$i&&t.has("OES_texture_float_linear")===!1&&(T.magFilter===Gn||T.magFilter===zd||T.magFilter===pu||T.magFilter===ir||T.minFilter===Gn||T.minFilter===zd||T.minFilter===pu||T.minFilter===ir)&&oe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(O,i.TEXTURE_WRAP_S,yt[T.wrapS]),i.texParameteri(O,i.TEXTURE_WRAP_T,yt[T.wrapT]),(O===i.TEXTURE_3D||O===i.TEXTURE_2D_ARRAY)&&i.texParameteri(O,i.TEXTURE_WRAP_R,yt[T.wrapR]),i.texParameteri(O,i.TEXTURE_MAG_FILTER,_t[T.magFilter]),i.texParameteri(O,i.TEXTURE_MIN_FILTER,_t[T.minFilter]),T.compareFunction&&(i.texParameteri(O,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(O,i.TEXTURE_COMPARE_FUNC,F[T.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===Fn||T.minFilter!==pu&&T.minFilter!==ir||T.type===$i&&t.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||s.get(T).__currentAnisotropy){const q=t.get("EXT_texture_filter_anisotropic");i.texParameterf(O,q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,o.getMaxAnisotropy())),s.get(T).__currentAnisotropy=T.anisotropy}}}function gt(O,T){let q=!1;O.__webglInit===void 0&&(O.__webglInit=!0,T.addEventListener("dispose",B));const dt=T.source;let xt=_.get(dt);xt===void 0&&(xt={},_.set(dt,xt));const ct=ft(T);if(ct!==O.__cacheKey){xt[ct]===void 0&&(xt[ct]={texture:i.createTexture(),usedTimes:0},u.memory.textures++,q=!0),xt[ct].usedTimes++;const Kt=xt[O.__cacheKey];Kt!==void 0&&(xt[O.__cacheKey].usedTimes--,Kt.usedTimes===0&&C(T)),O.__cacheKey=ct,O.__webglTexture=xt[ct].texture}return q}function At(O,T,q){return Math.floor(Math.floor(O/q)/T)}function Vt(O,T,q,dt){const ct=O.updateRanges;if(ct.length===0)n.texSubImage2D(i.TEXTURE_2D,0,0,0,T.width,T.height,q,dt,T.data);else{ct.sort((Mt,Tt)=>Mt.start-Tt.start);let Kt=0;for(let Mt=1;Mt<ct.length;Mt++){const Tt=ct[Kt],Bt=ct[Mt],Ot=Tt.start+Tt.count,wt=At(Bt.start,T.width,4),ue=At(Tt.start,T.width,4);Bt.start<=Ot+1&&wt===ue&&At(Bt.start+Bt.count-1,T.width,4)===wt?Tt.count=Math.max(Tt.count,Bt.start+Bt.count-Tt.start):(++Kt,ct[Kt]=Bt)}ct.length=Kt+1;const Ct=i.getParameter(i.UNPACK_ROW_LENGTH),Wt=i.getParameter(i.UNPACK_SKIP_PIXELS),ne=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,T.width);for(let Mt=0,Tt=ct.length;Mt<Tt;Mt++){const Bt=ct[Mt],Ot=Math.floor(Bt.start/4),wt=Math.ceil(Bt.count/4),ue=Ot%T.width,W=Math.floor(Ot/T.width),Lt=wt,bt=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,ue),i.pixelStorei(i.UNPACK_SKIP_ROWS,W),n.texSubImage2D(i.TEXTURE_2D,0,ue,W,Lt,bt,q,dt,T.data)}O.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,Ct),i.pixelStorei(i.UNPACK_SKIP_PIXELS,Wt),i.pixelStorei(i.UNPACK_SKIP_ROWS,ne)}}function it(O,T,q){let dt=i.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(dt=i.TEXTURE_2D_ARRAY),T.isData3DTexture&&(dt=i.TEXTURE_3D);const xt=gt(O,T),ct=T.source;n.bindTexture(dt,O.__webglTexture,i.TEXTURE0+q);const Kt=s.get(ct);if(ct.version!==Kt.__version||xt===!0){n.activeTexture(i.TEXTURE0+q);const Ct=be.getPrimaries(be.workingColorSpace),Wt=T.colorSpace===ys?null:be.getPrimaries(T.colorSpace),ne=T.colorSpace===ys||Ct===Wt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,T.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,T.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ne);let Mt=b(T.image,!1,o.maxTextureSize);Mt=Ne(T,Mt);const Tt=c.convert(T.format,T.colorSpace),Bt=c.convert(T.type);let Ot=w(T.internalFormat,Tt,Bt,T.colorSpace,T.isVideoTexture);at(dt,T);let wt;const ue=T.mipmaps,W=T.isVideoTexture!==!0,Lt=Kt.__version===void 0||xt===!0,bt=ct.dataReady,Ft=N(T,Mt);if(T.isDepthTexture)Ot=L(T.format===ar,T.type),Lt&&(W?n.texStorage2D(i.TEXTURE_2D,1,Ot,Mt.width,Mt.height):n.texImage2D(i.TEXTURE_2D,0,Ot,Mt.width,Mt.height,0,Tt,Bt,null));else if(T.isDataTexture)if(ue.length>0){W&&Lt&&n.texStorage2D(i.TEXTURE_2D,Ft,Ot,ue[0].width,ue[0].height);for(let St=0,vt=ue.length;St<vt;St++)wt=ue[St],W?bt&&n.texSubImage2D(i.TEXTURE_2D,St,0,0,wt.width,wt.height,Tt,Bt,wt.data):n.texImage2D(i.TEXTURE_2D,St,Ot,wt.width,wt.height,0,Tt,Bt,wt.data);T.generateMipmaps=!1}else W?(Lt&&n.texStorage2D(i.TEXTURE_2D,Ft,Ot,Mt.width,Mt.height),bt&&Vt(T,Mt,Tt,Bt)):n.texImage2D(i.TEXTURE_2D,0,Ot,Mt.width,Mt.height,0,Tt,Bt,Mt.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){W&&Lt&&n.texStorage3D(i.TEXTURE_2D_ARRAY,Ft,Ot,ue[0].width,ue[0].height,Mt.depth);for(let St=0,vt=ue.length;St<vt;St++)if(wt=ue[St],T.format!==Wi)if(Tt!==null)if(W){if(bt)if(T.layerUpdates.size>0){const Rt=Jy(wt.width,wt.height,T.format,T.type);for(const ae of T.layerUpdates){const Oe=wt.data.subarray(ae*Rt/wt.data.BYTES_PER_ELEMENT,(ae+1)*Rt/wt.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,St,0,0,ae,wt.width,wt.height,1,Tt,Oe)}T.clearLayerUpdates()}else n.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,St,0,0,0,wt.width,wt.height,Mt.depth,Tt,wt.data)}else n.compressedTexImage3D(i.TEXTURE_2D_ARRAY,St,Ot,wt.width,wt.height,Mt.depth,0,wt.data,0,0);else oe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else W?bt&&n.texSubImage3D(i.TEXTURE_2D_ARRAY,St,0,0,0,wt.width,wt.height,Mt.depth,Tt,Bt,wt.data):n.texImage3D(i.TEXTURE_2D_ARRAY,St,Ot,wt.width,wt.height,Mt.depth,0,Tt,Bt,wt.data)}else{W&&Lt&&n.texStorage2D(i.TEXTURE_2D,Ft,Ot,ue[0].width,ue[0].height);for(let St=0,vt=ue.length;St<vt;St++)wt=ue[St],T.format!==Wi?Tt!==null?W?bt&&n.compressedTexSubImage2D(i.TEXTURE_2D,St,0,0,wt.width,wt.height,Tt,wt.data):n.compressedTexImage2D(i.TEXTURE_2D,St,Ot,wt.width,wt.height,0,wt.data):oe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):W?bt&&n.texSubImage2D(i.TEXTURE_2D,St,0,0,wt.width,wt.height,Tt,Bt,wt.data):n.texImage2D(i.TEXTURE_2D,St,Ot,wt.width,wt.height,0,Tt,Bt,wt.data)}else if(T.isDataArrayTexture)if(W){if(Lt&&n.texStorage3D(i.TEXTURE_2D_ARRAY,Ft,Ot,Mt.width,Mt.height,Mt.depth),bt)if(T.layerUpdates.size>0){const St=Jy(Mt.width,Mt.height,T.format,T.type);for(const vt of T.layerUpdates){const Rt=Mt.data.subarray(vt*St/Mt.data.BYTES_PER_ELEMENT,(vt+1)*St/Mt.data.BYTES_PER_ELEMENT);n.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,vt,Mt.width,Mt.height,1,Tt,Bt,Rt)}T.clearLayerUpdates()}else n.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Mt.width,Mt.height,Mt.depth,Tt,Bt,Mt.data)}else n.texImage3D(i.TEXTURE_2D_ARRAY,0,Ot,Mt.width,Mt.height,Mt.depth,0,Tt,Bt,Mt.data);else if(T.isData3DTexture)W?(Lt&&n.texStorage3D(i.TEXTURE_3D,Ft,Ot,Mt.width,Mt.height,Mt.depth),bt&&n.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Mt.width,Mt.height,Mt.depth,Tt,Bt,Mt.data)):n.texImage3D(i.TEXTURE_3D,0,Ot,Mt.width,Mt.height,Mt.depth,0,Tt,Bt,Mt.data);else if(T.isFramebufferTexture){if(Lt)if(W)n.texStorage2D(i.TEXTURE_2D,Ft,Ot,Mt.width,Mt.height);else{let St=Mt.width,vt=Mt.height;for(let Rt=0;Rt<Ft;Rt++)n.texImage2D(i.TEXTURE_2D,Rt,Ot,St,vt,0,Tt,Bt,null),St>>=1,vt>>=1}}else if(ue.length>0){if(W&&Lt){const St=jt(ue[0]);n.texStorage2D(i.TEXTURE_2D,Ft,Ot,St.width,St.height)}for(let St=0,vt=ue.length;St<vt;St++)wt=ue[St],W?bt&&n.texSubImage2D(i.TEXTURE_2D,St,0,0,Tt,Bt,wt):n.texImage2D(i.TEXTURE_2D,St,Ot,Tt,Bt,wt);T.generateMipmaps=!1}else if(W){if(Lt){const St=jt(Mt);n.texStorage2D(i.TEXTURE_2D,Ft,Ot,St.width,St.height)}bt&&n.texSubImage2D(i.TEXTURE_2D,0,0,0,Tt,Bt,Mt)}else n.texImage2D(i.TEXTURE_2D,0,Ot,Tt,Bt,Mt);S(T)&&x(dt),Kt.__version=ct.version,T.onUpdate&&T.onUpdate(T)}O.__version=T.version}function ut(O,T,q){if(T.image.length!==6)return;const dt=gt(O,T),xt=T.source;n.bindTexture(i.TEXTURE_CUBE_MAP,O.__webglTexture,i.TEXTURE0+q);const ct=s.get(xt);if(xt.version!==ct.__version||dt===!0){n.activeTexture(i.TEXTURE0+q);const Kt=be.getPrimaries(be.workingColorSpace),Ct=T.colorSpace===ys?null:be.getPrimaries(T.colorSpace),Wt=T.colorSpace===ys||Kt===Ct?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,T.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,T.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Wt);const ne=T.isCompressedTexture||T.image[0].isCompressedTexture,Mt=T.image[0]&&T.image[0].isDataTexture,Tt=[];for(let vt=0;vt<6;vt++)!ne&&!Mt?Tt[vt]=b(T.image[vt],!0,o.maxCubemapSize):Tt[vt]=Mt?T.image[vt].image:T.image[vt],Tt[vt]=Ne(T,Tt[vt]);const Bt=Tt[0],Ot=c.convert(T.format,T.colorSpace),wt=c.convert(T.type),ue=w(T.internalFormat,Ot,wt,T.colorSpace),W=T.isVideoTexture!==!0,Lt=ct.__version===void 0||dt===!0,bt=xt.dataReady;let Ft=N(T,Bt);at(i.TEXTURE_CUBE_MAP,T);let St;if(ne){W&&Lt&&n.texStorage2D(i.TEXTURE_CUBE_MAP,Ft,ue,Bt.width,Bt.height);for(let vt=0;vt<6;vt++){St=Tt[vt].mipmaps;for(let Rt=0;Rt<St.length;Rt++){const ae=St[Rt];T.format!==Wi?Ot!==null?W?bt&&n.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Rt,0,0,ae.width,ae.height,Ot,ae.data):n.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Rt,ue,ae.width,ae.height,0,ae.data):oe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):W?bt&&n.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Rt,0,0,ae.width,ae.height,Ot,wt,ae.data):n.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Rt,ue,ae.width,ae.height,0,Ot,wt,ae.data)}}}else{if(St=T.mipmaps,W&&Lt){St.length>0&&Ft++;const vt=jt(Tt[0]);n.texStorage2D(i.TEXTURE_CUBE_MAP,Ft,ue,vt.width,vt.height)}for(let vt=0;vt<6;vt++)if(Mt){W?bt&&n.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,0,0,Tt[vt].width,Tt[vt].height,Ot,wt,Tt[vt].data):n.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,ue,Tt[vt].width,Tt[vt].height,0,Ot,wt,Tt[vt].data);for(let Rt=0;Rt<St.length;Rt++){const Oe=St[Rt].image[vt].image;W?bt&&n.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Rt+1,0,0,Oe.width,Oe.height,Ot,wt,Oe.data):n.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Rt+1,ue,Oe.width,Oe.height,0,Ot,wt,Oe.data)}}else{W?bt&&n.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,0,0,Ot,wt,Tt[vt]):n.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,ue,Ot,wt,Tt[vt]);for(let Rt=0;Rt<St.length;Rt++){const ae=St[Rt];W?bt&&n.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Rt+1,0,0,Ot,wt,ae.image[vt]):n.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Rt+1,ue,Ot,wt,ae.image[vt])}}}S(T)&&x(i.TEXTURE_CUBE_MAP),ct.__version=xt.version,T.onUpdate&&T.onUpdate(T)}O.__version=T.version}function Dt(O,T,q,dt,xt,ct){const Kt=c.convert(q.format,q.colorSpace),Ct=c.convert(q.type),Wt=w(q.internalFormat,Kt,Ct,q.colorSpace),ne=s.get(T),Mt=s.get(q);if(Mt.__renderTarget=T,!ne.__hasExternalTextures){const Tt=Math.max(1,T.width>>ct),Bt=Math.max(1,T.height>>ct);xt===i.TEXTURE_3D||xt===i.TEXTURE_2D_ARRAY?n.texImage3D(xt,ct,Wt,Tt,Bt,T.depth,0,Kt,Ct,null):n.texImage2D(xt,ct,Wt,Tt,Bt,0,Kt,Ct,null)}n.bindFramebuffer(i.FRAMEBUFFER,O),Ze(T)?f.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,dt,xt,Mt.__webglTexture,0,G(T)):(xt===i.TEXTURE_2D||xt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&xt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,dt,xt,Mt.__webglTexture,ct),n.bindFramebuffer(i.FRAMEBUFFER,null)}function Xt(O,T,q){if(i.bindRenderbuffer(i.RENDERBUFFER,O),T.depthBuffer){const dt=T.depthTexture,xt=dt&&dt.isDepthTexture?dt.type:null,ct=L(T.stencilBuffer,xt),Kt=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Ze(T)?f.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,G(T),ct,T.width,T.height):q?i.renderbufferStorageMultisample(i.RENDERBUFFER,G(T),ct,T.width,T.height):i.renderbufferStorage(i.RENDERBUFFER,ct,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Kt,i.RENDERBUFFER,O)}else{const dt=T.textures;for(let xt=0;xt<dt.length;xt++){const ct=dt[xt],Kt=c.convert(ct.format,ct.colorSpace),Ct=c.convert(ct.type),Wt=w(ct.internalFormat,Kt,Ct,ct.colorSpace);Ze(T)?f.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,G(T),Wt,T.width,T.height):q?i.renderbufferStorageMultisample(i.RENDERBUFFER,G(T),Wt,T.width,T.height):i.renderbufferStorage(i.RENDERBUFFER,Wt,T.width,T.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ht(O,T,q){const dt=T.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(i.FRAMEBUFFER,O),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const xt=s.get(T.depthTexture);if(xt.__renderTarget=T,(!xt.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),dt){if(xt.__webglInit===void 0&&(xt.__webglInit=!0,T.depthTexture.addEventListener("dispose",B)),xt.__webglTexture===void 0){xt.__webglTexture=i.createTexture(),n.bindTexture(i.TEXTURE_CUBE_MAP,xt.__webglTexture),at(i.TEXTURE_CUBE_MAP,T.depthTexture);const ne=c.convert(T.depthTexture.format),Mt=c.convert(T.depthTexture.type);let Tt;T.depthTexture.format===Ia?Tt=i.DEPTH_COMPONENT24:T.depthTexture.format===ar&&(Tt=i.DEPTH24_STENCIL8);for(let Bt=0;Bt<6;Bt++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Bt,0,Tt,T.width,T.height,0,ne,Mt,null)}}else ot(T.depthTexture,0);const ct=xt.__webglTexture,Kt=G(T),Ct=dt?i.TEXTURE_CUBE_MAP_POSITIVE_X+q:i.TEXTURE_2D,Wt=T.depthTexture.format===ar?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(T.depthTexture.format===Ia)Ze(T)?f.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Wt,Ct,ct,0,Kt):i.framebufferTexture2D(i.FRAMEBUFFER,Wt,Ct,ct,0);else if(T.depthTexture.format===ar)Ze(T)?f.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Wt,Ct,ct,0,Kt):i.framebufferTexture2D(i.FRAMEBUFFER,Wt,Ct,ct,0);else throw new Error("Unknown depthTexture format")}function pe(O){const T=s.get(O),q=O.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==O.depthTexture){const dt=O.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),dt){const xt=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,dt.removeEventListener("dispose",xt)};dt.addEventListener("dispose",xt),T.__depthDisposeCallback=xt}T.__boundDepthTexture=dt}if(O.depthTexture&&!T.__autoAllocateDepthBuffer)if(q)for(let dt=0;dt<6;dt++)Ht(T.__webglFramebuffer[dt],O,dt);else{const dt=O.texture.mipmaps;dt&&dt.length>0?Ht(T.__webglFramebuffer[0],O,0):Ht(T.__webglFramebuffer,O,0)}else if(q){T.__webglDepthbuffer=[];for(let dt=0;dt<6;dt++)if(n.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer[dt]),T.__webglDepthbuffer[dt]===void 0)T.__webglDepthbuffer[dt]=i.createRenderbuffer(),Xt(T.__webglDepthbuffer[dt],O,!1);else{const xt=O.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ct=T.__webglDepthbuffer[dt];i.bindRenderbuffer(i.RENDERBUFFER,ct),i.framebufferRenderbuffer(i.FRAMEBUFFER,xt,i.RENDERBUFFER,ct)}}else{const dt=O.texture.mipmaps;if(dt&&dt.length>0?n.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer[0]):n.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=i.createRenderbuffer(),Xt(T.__webglDepthbuffer,O,!1);else{const xt=O.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ct=T.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ct),i.framebufferRenderbuffer(i.FRAMEBUFFER,xt,i.RENDERBUFFER,ct)}}n.bindFramebuffer(i.FRAMEBUFFER,null)}function en(O,T,q){const dt=s.get(O);T!==void 0&&Dt(dt.__webglFramebuffer,O,O.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),q!==void 0&&pe(O)}function _e(O){const T=O.texture,q=s.get(O),dt=s.get(T);O.addEventListener("dispose",P);const xt=O.textures,ct=O.isWebGLCubeRenderTarget===!0,Kt=xt.length>1;if(Kt||(dt.__webglTexture===void 0&&(dt.__webglTexture=i.createTexture()),dt.__version=T.version,u.memory.textures++),ct){q.__webglFramebuffer=[];for(let Ct=0;Ct<6;Ct++)if(T.mipmaps&&T.mipmaps.length>0){q.__webglFramebuffer[Ct]=[];for(let Wt=0;Wt<T.mipmaps.length;Wt++)q.__webglFramebuffer[Ct][Wt]=i.createFramebuffer()}else q.__webglFramebuffer[Ct]=i.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){q.__webglFramebuffer=[];for(let Ct=0;Ct<T.mipmaps.length;Ct++)q.__webglFramebuffer[Ct]=i.createFramebuffer()}else q.__webglFramebuffer=i.createFramebuffer();if(Kt)for(let Ct=0,Wt=xt.length;Ct<Wt;Ct++){const ne=s.get(xt[Ct]);ne.__webglTexture===void 0&&(ne.__webglTexture=i.createTexture(),u.memory.textures++)}if(O.samples>0&&Ze(O)===!1){q.__webglMultisampledFramebuffer=i.createFramebuffer(),q.__webglColorRenderbuffer=[],n.bindFramebuffer(i.FRAMEBUFFER,q.__webglMultisampledFramebuffer);for(let Ct=0;Ct<xt.length;Ct++){const Wt=xt[Ct];q.__webglColorRenderbuffer[Ct]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,q.__webglColorRenderbuffer[Ct]);const ne=c.convert(Wt.format,Wt.colorSpace),Mt=c.convert(Wt.type),Tt=w(Wt.internalFormat,ne,Mt,Wt.colorSpace,O.isXRRenderTarget===!0),Bt=G(O);i.renderbufferStorageMultisample(i.RENDERBUFFER,Bt,Tt,O.width,O.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ct,i.RENDERBUFFER,q.__webglColorRenderbuffer[Ct])}i.bindRenderbuffer(i.RENDERBUFFER,null),O.depthBuffer&&(q.__webglDepthRenderbuffer=i.createRenderbuffer(),Xt(q.__webglDepthRenderbuffer,O,!0)),n.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ct){n.bindTexture(i.TEXTURE_CUBE_MAP,dt.__webglTexture),at(i.TEXTURE_CUBE_MAP,T);for(let Ct=0;Ct<6;Ct++)if(T.mipmaps&&T.mipmaps.length>0)for(let Wt=0;Wt<T.mipmaps.length;Wt++)Dt(q.__webglFramebuffer[Ct][Wt],O,T,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,Wt);else Dt(q.__webglFramebuffer[Ct],O,T,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,0);S(T)&&x(i.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Kt){for(let Ct=0,Wt=xt.length;Ct<Wt;Ct++){const ne=xt[Ct],Mt=s.get(ne);let Tt=i.TEXTURE_2D;(O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(Tt=O.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),n.bindTexture(Tt,Mt.__webglTexture),at(Tt,ne),Dt(q.__webglFramebuffer,O,ne,i.COLOR_ATTACHMENT0+Ct,Tt,0),S(ne)&&x(Tt)}n.unbindTexture()}else{let Ct=i.TEXTURE_2D;if((O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(Ct=O.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),n.bindTexture(Ct,dt.__webglTexture),at(Ct,T),T.mipmaps&&T.mipmaps.length>0)for(let Wt=0;Wt<T.mipmaps.length;Wt++)Dt(q.__webglFramebuffer[Wt],O,T,i.COLOR_ATTACHMENT0,Ct,Wt);else Dt(q.__webglFramebuffer,O,T,i.COLOR_ATTACHMENT0,Ct,0);S(T)&&x(Ct),n.unbindTexture()}O.depthBuffer&&pe(O)}function me(O){const T=O.textures;for(let q=0,dt=T.length;q<dt;q++){const xt=T[q];if(S(xt)){const ct=D(O),Kt=s.get(xt).__webglTexture;n.bindTexture(ct,Kt),x(ct),n.unbindTexture()}}}const we=[],le=[];function nn(O){if(O.samples>0){if(Ze(O)===!1){const T=O.textures,q=O.width,dt=O.height;let xt=i.COLOR_BUFFER_BIT;const ct=O.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Kt=s.get(O),Ct=T.length>1;if(Ct)for(let ne=0;ne<T.length;ne++)n.bindFramebuffer(i.FRAMEBUFFER,Kt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ne,i.RENDERBUFFER,null),n.bindFramebuffer(i.FRAMEBUFFER,Kt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ne,i.TEXTURE_2D,null,0);n.bindFramebuffer(i.READ_FRAMEBUFFER,Kt.__webglMultisampledFramebuffer);const Wt=O.texture.mipmaps;Wt&&Wt.length>0?n.bindFramebuffer(i.DRAW_FRAMEBUFFER,Kt.__webglFramebuffer[0]):n.bindFramebuffer(i.DRAW_FRAMEBUFFER,Kt.__webglFramebuffer);for(let ne=0;ne<T.length;ne++){if(O.resolveDepthBuffer&&(O.depthBuffer&&(xt|=i.DEPTH_BUFFER_BIT),O.stencilBuffer&&O.resolveStencilBuffer&&(xt|=i.STENCIL_BUFFER_BIT)),Ct){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Kt.__webglColorRenderbuffer[ne]);const Mt=s.get(T[ne]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Mt,0)}i.blitFramebuffer(0,0,q,dt,0,0,q,dt,xt,i.NEAREST),p===!0&&(we.length=0,le.length=0,we.push(i.COLOR_ATTACHMENT0+ne),O.depthBuffer&&O.resolveDepthBuffer===!1&&(we.push(ct),le.push(ct),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,le)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,we))}if(n.bindFramebuffer(i.READ_FRAMEBUFFER,null),n.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Ct)for(let ne=0;ne<T.length;ne++){n.bindFramebuffer(i.FRAMEBUFFER,Kt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ne,i.RENDERBUFFER,Kt.__webglColorRenderbuffer[ne]);const Mt=s.get(T[ne]).__webglTexture;n.bindFramebuffer(i.FRAMEBUFFER,Kt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ne,i.TEXTURE_2D,Mt,0)}n.bindFramebuffer(i.DRAW_FRAMEBUFFER,Kt.__webglMultisampledFramebuffer)}else if(O.depthBuffer&&O.resolveDepthBuffer===!1&&p){const T=O.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[T])}}}function G(O){return Math.min(o.maxSamples,O.samples)}function Ze(O){const T=s.get(O);return O.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function Ee(O){const T=u.render.frame;g.get(O)!==T&&(g.set(O,T),O.update())}function Ne(O,T){const q=O.colorSpace,dt=O.format,xt=O.type;return O.isCompressedTexture===!0||O.isVideoTexture===!0||q!==_o&&q!==ys&&(be.getTransfer(q)===ze?(dt!==Wi||xt!==Di)&&oe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ce("WebGLTextures: Unsupported texture color space:",q)),T}function jt(O){return typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement?(d.width=O.naturalWidth||O.width,d.height=O.naturalHeight||O.height):typeof VideoFrame<"u"&&O instanceof VideoFrame?(d.width=O.displayWidth,d.height=O.displayHeight):(d.width=O.width,d.height=O.height),d}this.allocateTextureUnit=tt,this.resetTextureUnits=$,this.setTexture2D=ot,this.setTexture2DArray=I,this.setTexture3D=z,this.setTextureCube=K,this.rebindTextures=en,this.setupRenderTarget=_e,this.updateRenderTargetMipmap=me,this.updateMultisampleRenderTarget=nn,this.setupDepthRenderbuffer=pe,this.setupFrameBufferTexture=Dt,this.useMultisampledRTT=Ze,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function JN(i,t){function n(s,o=ys){let c;const u=be.getTransfer(o);if(s===Di)return i.UNSIGNED_BYTE;if(s===gg)return i.UNSIGNED_SHORT_4_4_4_4;if(s===vg)return i.UNSIGNED_SHORT_5_5_5_1;if(s===mE)return i.UNSIGNED_INT_5_9_9_9_REV;if(s===gE)return i.UNSIGNED_INT_10F_11F_11F_REV;if(s===dE)return i.BYTE;if(s===pE)return i.SHORT;if(s===Vl)return i.UNSIGNED_SHORT;if(s===mg)return i.INT;if(s===sa)return i.UNSIGNED_INT;if(s===$i)return i.FLOAT;if(s===Ba)return i.HALF_FLOAT;if(s===vE)return i.ALPHA;if(s===_E)return i.RGB;if(s===Wi)return i.RGBA;if(s===Ia)return i.DEPTH_COMPONENT;if(s===ar)return i.DEPTH_STENCIL;if(s===xE)return i.RED;if(s===_g)return i.RED_INTEGER;if(s===vo)return i.RG;if(s===xg)return i.RG_INTEGER;if(s===yg)return i.RGBA_INTEGER;if(s===Gu||s===ku||s===Xu||s===Wu)if(u===ze)if(c=t.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(s===Gu)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===ku)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Xu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Wu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=t.get("WEBGL_compressed_texture_s3tc"),c!==null){if(s===Gu)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===ku)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Xu)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Wu)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Qp||s===Jp||s===$p||s===tm)if(c=t.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(s===Qp)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Jp)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===$p)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===tm)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===em||s===nm||s===im||s===am||s===sm||s===rm||s===om)if(c=t.get("WEBGL_compressed_texture_etc"),c!==null){if(s===em||s===nm)return u===ze?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(s===im)return u===ze?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(s===am)return c.COMPRESSED_R11_EAC;if(s===sm)return c.COMPRESSED_SIGNED_R11_EAC;if(s===rm)return c.COMPRESSED_RG11_EAC;if(s===om)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(s===lm||s===cm||s===um||s===fm||s===hm||s===dm||s===pm||s===mm||s===gm||s===vm||s===_m||s===xm||s===ym||s===Sm)if(c=t.get("WEBGL_compressed_texture_astc"),c!==null){if(s===lm)return u===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===cm)return u===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===um)return u===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===fm)return u===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===hm)return u===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===dm)return u===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===pm)return u===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===mm)return u===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===gm)return u===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===vm)return u===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===_m)return u===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===xm)return u===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===ym)return u===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Sm)return u===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Mm||s===Em||s===Tm)if(c=t.get("EXT_texture_compression_bptc"),c!==null){if(s===Mm)return u===ze?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Em)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Tm)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===bm||s===Am||s===Rm||s===Cm)if(c=t.get("EXT_texture_compression_rgtc"),c!==null){if(s===bm)return c.COMPRESSED_RED_RGTC1_EXT;if(s===Am)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Rm)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Cm)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Hl?i.UNSIGNED_INT_24_8:i[s]!==void 0?i[s]:null}return{convert:n}}const $N=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,tP=`
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

}`;class eP{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,n){if(this.texture===null){const s=new PE(t.texture);(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const n=t.cameras[0].viewport,s=new ra({vertexShader:$N,fragmentShader:tP,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Va(new hf(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class nP extends Eo{constructor(t,n){super();const s=this;let o=null,c=1,u=null,f="local-floor",p=1,d=null,g=null,v=null,_=null,y=null,E=null;const b=typeof XRWebGLBinding<"u",S=new eP,x={},D=n.getContextAttributes();let w=null,L=null;const N=[],B=[],P=new Xe;let k=null;const C=new mi;C.viewport=new cn;const U=new mi;U.viewport=new cn;const H=[C,U],$=new h2;let tt=null,ft=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(it){let ut=N[it];return ut===void 0&&(ut=new lp,N[it]=ut),ut.getTargetRaySpace()},this.getControllerGrip=function(it){let ut=N[it];return ut===void 0&&(ut=new lp,N[it]=ut),ut.getGripSpace()},this.getHand=function(it){let ut=N[it];return ut===void 0&&(ut=new lp,N[it]=ut),ut.getHandSpace()};function ot(it){const ut=B.indexOf(it.inputSource);if(ut===-1)return;const Dt=N[ut];Dt!==void 0&&(Dt.update(it.inputSource,it.frame,d||u),Dt.dispatchEvent({type:it.type,data:it.inputSource}))}function I(){o.removeEventListener("select",ot),o.removeEventListener("selectstart",ot),o.removeEventListener("selectend",ot),o.removeEventListener("squeeze",ot),o.removeEventListener("squeezestart",ot),o.removeEventListener("squeezeend",ot),o.removeEventListener("end",I),o.removeEventListener("inputsourceschange",z);for(let it=0;it<N.length;it++){const ut=B[it];ut!==null&&(B[it]=null,N[it].disconnect(ut))}tt=null,ft=null,S.reset();for(const it in x)delete x[it];t.setRenderTarget(w),y=null,_=null,v=null,o=null,L=null,Vt.stop(),s.isPresenting=!1,t.setPixelRatio(k),t.setSize(P.width,P.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(it){c=it,s.isPresenting===!0&&oe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(it){f=it,s.isPresenting===!0&&oe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return d||u},this.setReferenceSpace=function(it){d=it},this.getBaseLayer=function(){return _!==null?_:y},this.getBinding=function(){return v===null&&b&&(v=new XRWebGLBinding(o,n)),v},this.getFrame=function(){return E},this.getSession=function(){return o},this.setSession=async function(it){if(o=it,o!==null){if(w=t.getRenderTarget(),o.addEventListener("select",ot),o.addEventListener("selectstart",ot),o.addEventListener("selectend",ot),o.addEventListener("squeeze",ot),o.addEventListener("squeezestart",ot),o.addEventListener("squeezeend",ot),o.addEventListener("end",I),o.addEventListener("inputsourceschange",z),D.xrCompatible!==!0&&await n.makeXRCompatible(),k=t.getPixelRatio(),t.getSize(P),b&&"createProjectionLayer"in XRWebGLBinding.prototype){let Dt=null,Xt=null,Ht=null;D.depth&&(Ht=D.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,Dt=D.stencil?ar:Ia,Xt=D.stencil?Hl:sa);const pe={colorFormat:n.RGBA8,depthFormat:Ht,scaleFactor:c};v=this.getBinding(),_=v.createProjectionLayer(pe),o.updateRenderState({layers:[_]}),t.setPixelRatio(1),t.setSize(_.textureWidth,_.textureHeight,!1),L=new aa(_.textureWidth,_.textureHeight,{format:Wi,type:Di,depthTexture:new kl(_.textureWidth,_.textureHeight,Xt,void 0,void 0,void 0,void 0,void 0,void 0,Dt),stencilBuffer:D.stencil,colorSpace:t.outputColorSpace,samples:D.antialias?4:0,resolveDepthBuffer:_.ignoreDepthValues===!1,resolveStencilBuffer:_.ignoreDepthValues===!1})}else{const Dt={antialias:D.antialias,alpha:!0,depth:D.depth,stencil:D.stencil,framebufferScaleFactor:c};y=new XRWebGLLayer(o,n,Dt),o.updateRenderState({baseLayer:y}),t.setPixelRatio(1),t.setSize(y.framebufferWidth,y.framebufferHeight,!1),L=new aa(y.framebufferWidth,y.framebufferHeight,{format:Wi,type:Di,colorSpace:t.outputColorSpace,stencilBuffer:D.stencil,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}L.isXRRenderTarget=!0,this.setFoveation(p),d=null,u=await o.requestReferenceSpace(f),Vt.setContext(o),Vt.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return S.getDepthTexture()};function z(it){for(let ut=0;ut<it.removed.length;ut++){const Dt=it.removed[ut],Xt=B.indexOf(Dt);Xt>=0&&(B[Xt]=null,N[Xt].disconnect(Dt))}for(let ut=0;ut<it.added.length;ut++){const Dt=it.added[ut];let Xt=B.indexOf(Dt);if(Xt===-1){for(let pe=0;pe<N.length;pe++)if(pe>=B.length){B.push(Dt),Xt=pe;break}else if(B[pe]===null){B[pe]=Dt,Xt=pe;break}if(Xt===-1)break}const Ht=N[Xt];Ht&&Ht.connect(Dt)}}const K=new st,yt=new st;function _t(it,ut,Dt){K.setFromMatrixPosition(ut.matrixWorld),yt.setFromMatrixPosition(Dt.matrixWorld);const Xt=K.distanceTo(yt),Ht=ut.projectionMatrix.elements,pe=Dt.projectionMatrix.elements,en=Ht[14]/(Ht[10]-1),_e=Ht[14]/(Ht[10]+1),me=(Ht[9]+1)/Ht[5],we=(Ht[9]-1)/Ht[5],le=(Ht[8]-1)/Ht[0],nn=(pe[8]+1)/pe[0],G=en*le,Ze=en*nn,Ee=Xt/(-le+nn),Ne=Ee*-le;if(ut.matrixWorld.decompose(it.position,it.quaternion,it.scale),it.translateX(Ne),it.translateZ(Ee),it.matrixWorld.compose(it.position,it.quaternion,it.scale),it.matrixWorldInverse.copy(it.matrixWorld).invert(),Ht[10]===-1)it.projectionMatrix.copy(ut.projectionMatrix),it.projectionMatrixInverse.copy(ut.projectionMatrixInverse);else{const jt=en+Ee,O=_e+Ee,T=G-Ne,q=Ze+(Xt-Ne),dt=me*_e/O*jt,xt=we*_e/O*jt;it.projectionMatrix.makePerspective(T,q,dt,xt,jt,O),it.projectionMatrixInverse.copy(it.projectionMatrix).invert()}}function F(it,ut){ut===null?it.matrixWorld.copy(it.matrix):it.matrixWorld.multiplyMatrices(ut.matrixWorld,it.matrix),it.matrixWorldInverse.copy(it.matrixWorld).invert()}this.updateCamera=function(it){if(o===null)return;let ut=it.near,Dt=it.far;S.texture!==null&&(S.depthNear>0&&(ut=S.depthNear),S.depthFar>0&&(Dt=S.depthFar)),$.near=U.near=C.near=ut,$.far=U.far=C.far=Dt,(tt!==$.near||ft!==$.far)&&(o.updateRenderState({depthNear:$.near,depthFar:$.far}),tt=$.near,ft=$.far),$.layers.mask=it.layers.mask|6,C.layers.mask=$.layers.mask&3,U.layers.mask=$.layers.mask&5;const Xt=it.parent,Ht=$.cameras;F($,Xt);for(let pe=0;pe<Ht.length;pe++)F(Ht[pe],Xt);Ht.length===2?_t($,C,U):$.projectionMatrix.copy(C.projectionMatrix),at(it,$,Xt)};function at(it,ut,Dt){Dt===null?it.matrix.copy(ut.matrixWorld):(it.matrix.copy(Dt.matrixWorld),it.matrix.invert(),it.matrix.multiply(ut.matrixWorld)),it.matrix.decompose(it.position,it.quaternion,it.scale),it.updateMatrixWorld(!0),it.projectionMatrix.copy(ut.projectionMatrix),it.projectionMatrixInverse.copy(ut.projectionMatrixInverse),it.isPerspectiveCamera&&(it.fov=wm*2*Math.atan(1/it.projectionMatrix.elements[5]),it.zoom=1)}this.getCamera=function(){return $},this.getFoveation=function(){if(!(_===null&&y===null))return p},this.setFoveation=function(it){p=it,_!==null&&(_.fixedFoveation=it),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=it)},this.hasDepthSensing=function(){return S.texture!==null},this.getDepthSensingMesh=function(){return S.getMesh($)},this.getCameraTexture=function(it){return x[it]};let gt=null;function At(it,ut){if(g=ut.getViewerPose(d||u),E=ut,g!==null){const Dt=g.views;y!==null&&(t.setRenderTargetFramebuffer(L,y.framebuffer),t.setRenderTarget(L));let Xt=!1;Dt.length!==$.cameras.length&&($.cameras.length=0,Xt=!0);for(let _e=0;_e<Dt.length;_e++){const me=Dt[_e];let we=null;if(y!==null)we=y.getViewport(me);else{const nn=v.getViewSubImage(_,me);we=nn.viewport,_e===0&&(t.setRenderTargetTextures(L,nn.colorTexture,nn.depthStencilTexture),t.setRenderTarget(L))}let le=H[_e];le===void 0&&(le=new mi,le.layers.enable(_e),le.viewport=new cn,H[_e]=le),le.matrix.fromArray(me.transform.matrix),le.matrix.decompose(le.position,le.quaternion,le.scale),le.projectionMatrix.fromArray(me.projectionMatrix),le.projectionMatrixInverse.copy(le.projectionMatrix).invert(),le.viewport.set(we.x,we.y,we.width,we.height),_e===0&&($.matrix.copy(le.matrix),$.matrix.decompose($.position,$.quaternion,$.scale)),Xt===!0&&$.cameras.push(le)}const Ht=o.enabledFeatures;if(Ht&&Ht.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&b){v=s.getBinding();const _e=v.getDepthInformation(Dt[0]);_e&&_e.isValid&&_e.texture&&S.init(_e,o.renderState)}if(Ht&&Ht.includes("camera-access")&&b){t.state.unbindTexture(),v=s.getBinding();for(let _e=0;_e<Dt.length;_e++){const me=Dt[_e].camera;if(me){let we=x[me];we||(we=new PE,x[me]=we);const le=v.getCameraImage(me);we.sourceTexture=le}}}}for(let Dt=0;Dt<N.length;Dt++){const Xt=B[Dt],Ht=N[Dt];Xt!==null&&Ht!==void 0&&Ht.update(Xt,ut,d||u)}gt&&gt(it,ut),ut.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:ut}),E=null}const Vt=new FE;Vt.setAnimationLoop(At),this.setAnimationLoop=function(it){gt=it},this.dispose=function(){}}}const Ks=new za,iP=new un;function aP(i,t){function n(S,x){S.matrixAutoUpdate===!0&&S.updateMatrix(),x.value.copy(S.matrix)}function s(S,x){x.color.getRGB(S.fogColor.value,CE(i)),x.isFog?(S.fogNear.value=x.near,S.fogFar.value=x.far):x.isFogExp2&&(S.fogDensity.value=x.density)}function o(S,x,D,w,L){x.isMeshBasicMaterial||x.isMeshLambertMaterial?c(S,x):x.isMeshToonMaterial?(c(S,x),v(S,x)):x.isMeshPhongMaterial?(c(S,x),g(S,x)):x.isMeshStandardMaterial?(c(S,x),_(S,x),x.isMeshPhysicalMaterial&&y(S,x,L)):x.isMeshMatcapMaterial?(c(S,x),E(S,x)):x.isMeshDepthMaterial?c(S,x):x.isMeshDistanceMaterial?(c(S,x),b(S,x)):x.isMeshNormalMaterial?c(S,x):x.isLineBasicMaterial?(u(S,x),x.isLineDashedMaterial&&f(S,x)):x.isPointsMaterial?p(S,x,D,w):x.isSpriteMaterial?d(S,x):x.isShadowMaterial?(S.color.value.copy(x.color),S.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function c(S,x){S.opacity.value=x.opacity,x.color&&S.diffuse.value.copy(x.color),x.emissive&&S.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(S.map.value=x.map,n(x.map,S.mapTransform)),x.alphaMap&&(S.alphaMap.value=x.alphaMap,n(x.alphaMap,S.alphaMapTransform)),x.bumpMap&&(S.bumpMap.value=x.bumpMap,n(x.bumpMap,S.bumpMapTransform),S.bumpScale.value=x.bumpScale,x.side===ii&&(S.bumpScale.value*=-1)),x.normalMap&&(S.normalMap.value=x.normalMap,n(x.normalMap,S.normalMapTransform),S.normalScale.value.copy(x.normalScale),x.side===ii&&S.normalScale.value.negate()),x.displacementMap&&(S.displacementMap.value=x.displacementMap,n(x.displacementMap,S.displacementMapTransform),S.displacementScale.value=x.displacementScale,S.displacementBias.value=x.displacementBias),x.emissiveMap&&(S.emissiveMap.value=x.emissiveMap,n(x.emissiveMap,S.emissiveMapTransform)),x.specularMap&&(S.specularMap.value=x.specularMap,n(x.specularMap,S.specularMapTransform)),x.alphaTest>0&&(S.alphaTest.value=x.alphaTest);const D=t.get(x),w=D.envMap,L=D.envMapRotation;w&&(S.envMap.value=w,Ks.copy(L),Ks.x*=-1,Ks.y*=-1,Ks.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(Ks.y*=-1,Ks.z*=-1),S.envMapRotation.value.setFromMatrix4(iP.makeRotationFromEuler(Ks)),S.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,S.reflectivity.value=x.reflectivity,S.ior.value=x.ior,S.refractionRatio.value=x.refractionRatio),x.lightMap&&(S.lightMap.value=x.lightMap,S.lightMapIntensity.value=x.lightMapIntensity,n(x.lightMap,S.lightMapTransform)),x.aoMap&&(S.aoMap.value=x.aoMap,S.aoMapIntensity.value=x.aoMapIntensity,n(x.aoMap,S.aoMapTransform))}function u(S,x){S.diffuse.value.copy(x.color),S.opacity.value=x.opacity,x.map&&(S.map.value=x.map,n(x.map,S.mapTransform))}function f(S,x){S.dashSize.value=x.dashSize,S.totalSize.value=x.dashSize+x.gapSize,S.scale.value=x.scale}function p(S,x,D,w){S.diffuse.value.copy(x.color),S.opacity.value=x.opacity,S.size.value=x.size*D,S.scale.value=w*.5,x.map&&(S.map.value=x.map,n(x.map,S.uvTransform)),x.alphaMap&&(S.alphaMap.value=x.alphaMap,n(x.alphaMap,S.alphaMapTransform)),x.alphaTest>0&&(S.alphaTest.value=x.alphaTest)}function d(S,x){S.diffuse.value.copy(x.color),S.opacity.value=x.opacity,S.rotation.value=x.rotation,x.map&&(S.map.value=x.map,n(x.map,S.mapTransform)),x.alphaMap&&(S.alphaMap.value=x.alphaMap,n(x.alphaMap,S.alphaMapTransform)),x.alphaTest>0&&(S.alphaTest.value=x.alphaTest)}function g(S,x){S.specular.value.copy(x.specular),S.shininess.value=Math.max(x.shininess,1e-4)}function v(S,x){x.gradientMap&&(S.gradientMap.value=x.gradientMap)}function _(S,x){S.metalness.value=x.metalness,x.metalnessMap&&(S.metalnessMap.value=x.metalnessMap,n(x.metalnessMap,S.metalnessMapTransform)),S.roughness.value=x.roughness,x.roughnessMap&&(S.roughnessMap.value=x.roughnessMap,n(x.roughnessMap,S.roughnessMapTransform)),x.envMap&&(S.envMapIntensity.value=x.envMapIntensity)}function y(S,x,D){S.ior.value=x.ior,x.sheen>0&&(S.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),S.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(S.sheenColorMap.value=x.sheenColorMap,n(x.sheenColorMap,S.sheenColorMapTransform)),x.sheenRoughnessMap&&(S.sheenRoughnessMap.value=x.sheenRoughnessMap,n(x.sheenRoughnessMap,S.sheenRoughnessMapTransform))),x.clearcoat>0&&(S.clearcoat.value=x.clearcoat,S.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(S.clearcoatMap.value=x.clearcoatMap,n(x.clearcoatMap,S.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,n(x.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(S.clearcoatNormalMap.value=x.clearcoatNormalMap,n(x.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===ii&&S.clearcoatNormalScale.value.negate())),x.dispersion>0&&(S.dispersion.value=x.dispersion),x.iridescence>0&&(S.iridescence.value=x.iridescence,S.iridescenceIOR.value=x.iridescenceIOR,S.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(S.iridescenceMap.value=x.iridescenceMap,n(x.iridescenceMap,S.iridescenceMapTransform)),x.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=x.iridescenceThicknessMap,n(x.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),x.transmission>0&&(S.transmission.value=x.transmission,S.transmissionSamplerMap.value=D.texture,S.transmissionSamplerSize.value.set(D.width,D.height),x.transmissionMap&&(S.transmissionMap.value=x.transmissionMap,n(x.transmissionMap,S.transmissionMapTransform)),S.thickness.value=x.thickness,x.thicknessMap&&(S.thicknessMap.value=x.thicknessMap,n(x.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=x.attenuationDistance,S.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(S.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(S.anisotropyMap.value=x.anisotropyMap,n(x.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=x.specularIntensity,S.specularColor.value.copy(x.specularColor),x.specularColorMap&&(S.specularColorMap.value=x.specularColorMap,n(x.specularColorMap,S.specularColorMapTransform)),x.specularIntensityMap&&(S.specularIntensityMap.value=x.specularIntensityMap,n(x.specularIntensityMap,S.specularIntensityMapTransform))}function E(S,x){x.matcap&&(S.matcap.value=x.matcap)}function b(S,x){const D=t.get(x).light;S.referencePosition.value.setFromMatrixPosition(D.matrixWorld),S.nearDistance.value=D.shadow.camera.near,S.farDistance.value=D.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:o}}function sP(i,t,n,s){let o={},c={},u=[];const f=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function p(D,w){const L=w.program;s.uniformBlockBinding(D,L)}function d(D,w){let L=o[D.id];L===void 0&&(E(D),L=g(D),o[D.id]=L,D.addEventListener("dispose",S));const N=w.program;s.updateUBOMapping(D,N);const B=t.render.frame;c[D.id]!==B&&(_(D),c[D.id]=B)}function g(D){const w=v();D.__bindingPointIndex=w;const L=i.createBuffer(),N=D.__size,B=D.usage;return i.bindBuffer(i.UNIFORM_BUFFER,L),i.bufferData(i.UNIFORM_BUFFER,N,B),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,w,L),L}function v(){for(let D=0;D<f;D++)if(u.indexOf(D)===-1)return u.push(D),D;return Ce("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function _(D){const w=o[D.id],L=D.uniforms,N=D.__cache;i.bindBuffer(i.UNIFORM_BUFFER,w);for(let B=0,P=L.length;B<P;B++){const k=Array.isArray(L[B])?L[B]:[L[B]];for(let C=0,U=k.length;C<U;C++){const H=k[C];if(y(H,B,C,N)===!0){const $=H.__offset,tt=Array.isArray(H.value)?H.value:[H.value];let ft=0;for(let ot=0;ot<tt.length;ot++){const I=tt[ot],z=b(I);typeof I=="number"||typeof I=="boolean"?(H.__data[0]=I,i.bufferSubData(i.UNIFORM_BUFFER,$+ft,H.__data)):I.isMatrix3?(H.__data[0]=I.elements[0],H.__data[1]=I.elements[1],H.__data[2]=I.elements[2],H.__data[3]=0,H.__data[4]=I.elements[3],H.__data[5]=I.elements[4],H.__data[6]=I.elements[5],H.__data[7]=0,H.__data[8]=I.elements[6],H.__data[9]=I.elements[7],H.__data[10]=I.elements[8],H.__data[11]=0):(I.toArray(H.__data,ft),ft+=z.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,$,H.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function y(D,w,L,N){const B=D.value,P=w+"_"+L;if(N[P]===void 0)return typeof B=="number"||typeof B=="boolean"?N[P]=B:N[P]=B.clone(),!0;{const k=N[P];if(typeof B=="number"||typeof B=="boolean"){if(k!==B)return N[P]=B,!0}else if(k.equals(B)===!1)return k.copy(B),!0}return!1}function E(D){const w=D.uniforms;let L=0;const N=16;for(let P=0,k=w.length;P<k;P++){const C=Array.isArray(w[P])?w[P]:[w[P]];for(let U=0,H=C.length;U<H;U++){const $=C[U],tt=Array.isArray($.value)?$.value:[$.value];for(let ft=0,ot=tt.length;ft<ot;ft++){const I=tt[ft],z=b(I),K=L%N,yt=K%z.boundary,_t=K+yt;L+=yt,_t!==0&&N-_t<z.storage&&(L+=N-_t),$.__data=new Float32Array(z.storage/Float32Array.BYTES_PER_ELEMENT),$.__offset=L,L+=z.storage}}}const B=L%N;return B>0&&(L+=N-B),D.__size=L,D.__cache={},this}function b(D){const w={boundary:0,storage:0};return typeof D=="number"||typeof D=="boolean"?(w.boundary=4,w.storage=4):D.isVector2?(w.boundary=8,w.storage=8):D.isVector3||D.isColor?(w.boundary=16,w.storage=12):D.isVector4?(w.boundary=16,w.storage=16):D.isMatrix3?(w.boundary=48,w.storage=48):D.isMatrix4?(w.boundary=64,w.storage=64):D.isTexture?oe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):oe("WebGLRenderer: Unsupported uniform value type.",D),w}function S(D){const w=D.target;w.removeEventListener("dispose",S);const L=u.indexOf(w.__bindingPointIndex);u.splice(L,1),i.deleteBuffer(o[w.id]),delete o[w.id],delete c[w.id]}function x(){for(const D in o)i.deleteBuffer(o[D]);u=[],o={},c={}}return{bind:p,update:d,dispose:x}}const rP=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Qi=null;function oP(){return Qi===null&&(Qi=new a2(rP,16,16,vo,Ba),Qi.name="DFG_LUT",Qi.minFilter=Gn,Qi.magFilter=Gn,Qi.wrapS=Ua,Qi.wrapT=Ua,Qi.generateMipmaps=!1,Qi.needsUpdate=!0),Qi}class HE{constructor(t={}){const{canvas:n=L3(),context:s=null,depth:o=!0,stencil:c=!1,alpha:u=!1,antialias:f=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:d=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:v=!1,reversedDepthBuffer:_=!1,outputBufferType:y=Di}=t;this.isWebGLRenderer=!0;let E;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");E=s.getContextAttributes().alpha}else E=u;const b=y,S=new Set([yg,xg,_g]),x=new Set([Di,sa,Vl,Hl,gg,vg]),D=new Uint32Array(4),w=new Int32Array(4);let L=null,N=null;const B=[],P=[];let k=null;this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ia,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const C=this;let U=!1;this._outputColorSpace=wi;let H=0,$=0,tt=null,ft=-1,ot=null;const I=new cn,z=new cn;let K=null;const yt=new Ve(0);let _t=0,F=n.width,at=n.height,gt=1,At=null,Vt=null;const it=new cn(0,0,F,at),ut=new cn(0,0,F,at);let Dt=!1;const Xt=new NE;let Ht=!1,pe=!1;const en=new un,_e=new st,me=new cn,we={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let le=!1;function nn(){return tt===null?gt:1}let G=s;function Ze(R,Y){return n.getContext(R,Y)}try{const R={alpha:!0,depth:o,stencil:c,antialias:f,premultipliedAlpha:p,preserveDrawingBuffer:d,powerPreference:g,failIfMajorPerformanceCaveat:v};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${pg}`),n.addEventListener("webglcontextlost",ae,!1),n.addEventListener("webglcontextrestored",Oe,!1),n.addEventListener("webglcontextcreationerror",Te,!1),G===null){const Y="webgl2";if(G=Ze(Y,R),G===null)throw Ze(Y)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw Ce("WebGLRenderer: "+R.message),R}let Ee,Ne,jt,O,T,q,dt,xt,ct,Kt,Ct,Wt,ne,Mt,Tt,Bt,Ot,wt,ue,W,Lt,bt,Ft,St;function vt(){Ee=new oL(G),Ee.init(),bt=new JN(G,Ee),Ne=new JU(G,Ee,t,bt),jt=new KN(G,Ee),Ne.reversedDepthBuffer&&_&&jt.buffers.depth.setReversed(!0),O=new uL(G),T=new ON,q=new QN(G,Ee,jt,T,Ne,bt,O),dt=new tL(C),xt=new rL(C),ct=new p2(G),Ft=new KU(G,ct),Kt=new lL(G,ct,O,Ft),Ct=new hL(G,Kt,ct,O),ue=new fL(G,Ne,q),Bt=new $U(T),Wt=new PN(C,dt,xt,Ee,Ne,Ft,Bt),ne=new aP(C,T),Mt=new BN,Tt=new kN(Ee),wt=new ZU(C,dt,xt,jt,Ct,E,p),Ot=new jN(C,Ct,Ne),St=new sP(G,O,Ne,jt),W=new QU(G,Ee,O),Lt=new cL(G,Ee,O),O.programs=Wt.programs,C.capabilities=Ne,C.extensions=Ee,C.properties=T,C.renderLists=Mt,C.shadowMap=Ot,C.state=jt,C.info=O}vt(),b!==Di&&(k=new pL(b,n.width,n.height,o,c));const Rt=new nP(C,G);this.xr=Rt,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){const R=Ee.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=Ee.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return gt},this.setPixelRatio=function(R){R!==void 0&&(gt=R,this.setSize(F,at,!1))},this.getSize=function(R){return R.set(F,at)},this.setSize=function(R,Y,rt=!0){if(Rt.isPresenting){oe("WebGLRenderer: Can't change size while VR device is presenting.");return}F=R,at=Y,n.width=Math.floor(R*gt),n.height=Math.floor(Y*gt),rt===!0&&(n.style.width=R+"px",n.style.height=Y+"px"),k!==null&&k.setSize(n.width,n.height),this.setViewport(0,0,R,Y)},this.getDrawingBufferSize=function(R){return R.set(F*gt,at*gt).floor()},this.setDrawingBufferSize=function(R,Y,rt){F=R,at=Y,gt=rt,n.width=Math.floor(R*rt),n.height=Math.floor(Y*rt),this.setViewport(0,0,R,Y)},this.setEffects=function(R){if(b===Di){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(R){for(let Y=0;Y<R.length;Y++)if(R[Y].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}k.setEffects(R||[])},this.getCurrentViewport=function(R){return R.copy(I)},this.getViewport=function(R){return R.copy(it)},this.setViewport=function(R,Y,rt,et){R.isVector4?it.set(R.x,R.y,R.z,R.w):it.set(R,Y,rt,et),jt.viewport(I.copy(it).multiplyScalar(gt).round())},this.getScissor=function(R){return R.copy(ut)},this.setScissor=function(R,Y,rt,et){R.isVector4?ut.set(R.x,R.y,R.z,R.w):ut.set(R,Y,rt,et),jt.scissor(z.copy(ut).multiplyScalar(gt).round())},this.getScissorTest=function(){return Dt},this.setScissorTest=function(R){jt.setScissorTest(Dt=R)},this.setOpaqueSort=function(R){At=R},this.setTransparentSort=function(R){Vt=R},this.getClearColor=function(R){return R.copy(wt.getClearColor())},this.setClearColor=function(){wt.setClearColor(...arguments)},this.getClearAlpha=function(){return wt.getClearAlpha()},this.setClearAlpha=function(){wt.setClearAlpha(...arguments)},this.clear=function(R=!0,Y=!0,rt=!0){let et=0;if(R){let Z=!1;if(tt!==null){const Ut=tt.texture.format;Z=S.has(Ut)}if(Z){const Ut=tt.texture.type,It=x.has(Ut),Nt=wt.getClearColor(),Gt=wt.getClearAlpha(),qt=Nt.r,$t=Nt.g,Yt=Nt.b;It?(D[0]=qt,D[1]=$t,D[2]=Yt,D[3]=Gt,G.clearBufferuiv(G.COLOR,0,D)):(w[0]=qt,w[1]=$t,w[2]=Yt,w[3]=Gt,G.clearBufferiv(G.COLOR,0,w))}else et|=G.COLOR_BUFFER_BIT}Y&&(et|=G.DEPTH_BUFFER_BIT),rt&&(et|=G.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G.clear(et)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",ae,!1),n.removeEventListener("webglcontextrestored",Oe,!1),n.removeEventListener("webglcontextcreationerror",Te,!1),wt.dispose(),Mt.dispose(),Tt.dispose(),T.dispose(),dt.dispose(),xt.dispose(),Ct.dispose(),Ft.dispose(),St.dispose(),Wt.dispose(),Rt.dispose(),Rt.removeEventListener("sessionstart",cr),Rt.removeEventListener("sessionend",Ro),qi.stop()};function ae(R){R.preventDefault(),Ny("WebGLRenderer: Context Lost."),U=!0}function Oe(){Ny("WebGLRenderer: Context Restored."),U=!1;const R=O.autoReset,Y=Ot.enabled,rt=Ot.autoUpdate,et=Ot.needsUpdate,Z=Ot.type;vt(),O.autoReset=R,Ot.enabled=Y,Ot.autoUpdate=rt,Ot.needsUpdate=et,Ot.type=Z}function Te(R){Ce("WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function Bn(R){const Y=R.target;Y.removeEventListener("dispose",Bn),Ni(Y)}function Ni(R){$l(R),T.remove(R)}function $l(R){const Y=T.get(R).programs;Y!==void 0&&(Y.forEach(function(rt){Wt.releaseProgram(rt)}),R.isShaderMaterial&&Wt.releaseShaderCache(R))}this.renderBufferDirect=function(R,Y,rt,et,Z,Ut){Y===null&&(Y=we);const It=Z.isMesh&&Z.matrixWorld.determinant()<0,Nt=As(R,Y,rt,et,Z);jt.setMaterial(et,It);let Gt=rt.index,qt=1;if(et.wireframe===!0){if(Gt=Kt.getWireframeAttribute(rt),Gt===void 0)return;qt=2}const $t=rt.drawRange,Yt=rt.attributes.position;let te=$t.start*qt,De=($t.start+$t.count)*qt;Ut!==null&&(te=Math.max(te,Ut.start*qt),De=Math.min(De,(Ut.start+Ut.count)*qt)),Gt!==null?(te=Math.max(te,0),De=Math.min(De,Gt.count)):Yt!=null&&(te=Math.max(te,0),De=Math.min(De,Yt.count));const Ke=De-te;if(Ke<0||Ke===1/0)return;Ft.setup(Z,et,Nt,rt,Gt);let qe,Pe=W;if(Gt!==null&&(qe=ct.get(Gt),Pe=Lt,Pe.setIndex(qe)),Z.isMesh)et.wireframe===!0?(jt.setLineWidth(et.wireframeLinewidth*nn()),Pe.setMode(G.LINES)):Pe.setMode(G.TRIANGLES);else if(Z.isLine){let Qt=et.linewidth;Qt===void 0&&(Qt=1),jt.setLineWidth(Qt*nn()),Z.isLineSegments?Pe.setMode(G.LINES):Z.isLineLoop?Pe.setMode(G.LINE_LOOP):Pe.setMode(G.LINE_STRIP)}else Z.isPoints?Pe.setMode(G.POINTS):Z.isSprite&&Pe.setMode(G.TRIANGLES);if(Z.isBatchedMesh)if(Z._multiDrawInstances!==null)Gl("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Pe.renderMultiDrawInstances(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount,Z._multiDrawInstances);else if(Ee.get("WEBGL_multi_draw"))Pe.renderMultiDraw(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount);else{const Qt=Z._multiDrawStarts,Ue=Z._multiDrawCounts,se=Z._multiDrawCount,An=Gt?ct.get(Gt).bytesPerElement:1,oa=T.get(et).currentProgram.getUniforms();for(let Rn=0;Rn<se;Rn++)oa.setValue(G,"_gl_DrawID",Rn),Pe.render(Qt[Rn]/An,Ue[Rn])}else if(Z.isInstancedMesh)Pe.renderInstances(te,Ke,Z.count);else if(rt.isInstancedBufferGeometry){const Qt=rt._maxInstanceCount!==void 0?rt._maxInstanceCount:1/0,Ue=Math.min(rt.instanceCount,Qt);Pe.renderInstances(te,Ke,Ue)}else Pe.render(te,Ke)};function bo(R,Y,rt){R.transparent===!0&&R.side===Da&&R.forceSinglePass===!1?(R.side=ii,R.needsUpdate=!0,fr(R,Y,rt),R.side=Ts,R.needsUpdate=!0,fr(R,Y,rt),R.side=Da):fr(R,Y,rt)}this.compile=function(R,Y,rt=null){rt===null&&(rt=R),N=Tt.get(rt),N.init(Y),P.push(N),rt.traverseVisible(function(Z){Z.isLight&&Z.layers.test(Y.layers)&&(N.pushLight(Z),Z.castShadow&&N.pushShadow(Z))}),R!==rt&&R.traverseVisible(function(Z){Z.isLight&&Z.layers.test(Y.layers)&&(N.pushLight(Z),Z.castShadow&&N.pushShadow(Z))}),N.setupLights();const et=new Set;return R.traverse(function(Z){if(!(Z.isMesh||Z.isPoints||Z.isLine||Z.isSprite))return;const Ut=Z.material;if(Ut)if(Array.isArray(Ut))for(let It=0;It<Ut.length;It++){const Nt=Ut[It];bo(Nt,rt,Z),et.add(Nt)}else bo(Ut,rt,Z),et.add(Ut)}),N=P.pop(),et},this.compileAsync=function(R,Y,rt=null){const et=this.compile(R,Y,rt);return new Promise(Z=>{function Ut(){if(et.forEach(function(It){T.get(It).currentProgram.isReady()&&et.delete(It)}),et.size===0){Z(R);return}setTimeout(Ut,10)}Ee.get("KHR_parallel_shader_compile")!==null?Ut():setTimeout(Ut,10)})};let lr=null;function Ao(R){lr&&lr(R)}function cr(){qi.stop()}function Ro(){qi.start()}const qi=new FE;qi.setAnimationLoop(Ao),typeof self<"u"&&qi.setContext(self),this.setAnimationLoop=function(R){lr=R,Rt.setAnimationLoop(R),R===null?qi.stop():qi.start()},Rt.addEventListener("sessionstart",cr),Rt.addEventListener("sessionend",Ro),this.render=function(R,Y){if(Y!==void 0&&Y.isCamera!==!0){Ce("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(U===!0)return;const rt=Rt.enabled===!0&&Rt.isPresenting===!0,et=k!==null&&(tt===null||rt)&&k.begin(C,tt);if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),Y.parent===null&&Y.matrixWorldAutoUpdate===!0&&Y.updateMatrixWorld(),Rt.enabled===!0&&Rt.isPresenting===!0&&(k===null||k.isCompositing()===!1)&&(Rt.cameraAutoUpdate===!0&&Rt.updateCamera(Y),Y=Rt.getCamera()),R.isScene===!0&&R.onBeforeRender(C,R,Y,tt),N=Tt.get(R,P.length),N.init(Y),P.push(N),en.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),Xt.setFromProjectionMatrix(en,ta,Y.reversedDepth),pe=this.localClippingEnabled,Ht=Bt.init(this.clippingPlanes,pe),L=Mt.get(R,B.length),L.init(),B.push(L),Rt.enabled===!0&&Rt.isPresenting===!0){const It=C.xr.getDepthSensingMesh();It!==null&&vi(It,Y,-1/0,C.sortObjects)}vi(R,Y,0,C.sortObjects),L.finish(),C.sortObjects===!0&&L.sort(At,Vt),le=Rt.enabled===!1||Rt.isPresenting===!1||Rt.hasDepthSensing()===!1,le&&wt.addToRenderList(L,R),this.info.render.frame++,Ht===!0&&Bt.beginShadows();const Z=N.state.shadowsArray;if(Ot.render(Z,R,Y),Ht===!0&&Bt.endShadows(),this.info.autoReset===!0&&this.info.reset(),(et&&k.hasRenderPass())===!1){const It=L.opaque,Nt=L.transmissive;if(N.setupLights(),Y.isArrayCamera){const Gt=Y.cameras;if(Nt.length>0)for(let qt=0,$t=Gt.length;qt<$t;qt++){const Yt=Gt[qt];bn(It,Nt,R,Yt)}le&&wt.render(R);for(let qt=0,$t=Gt.length;qt<$t;qt++){const Yt=Gt[qt];fn(L,R,Yt,Yt.viewport)}}else Nt.length>0&&bn(It,Nt,R,Y),le&&wt.render(R),fn(L,R,Y)}tt!==null&&$===0&&(q.updateMultisampleRenderTarget(tt),q.updateRenderTargetMipmap(tt)),et&&k.end(C),R.isScene===!0&&R.onAfterRender(C,R,Y),Ft.resetDefaultState(),ft=-1,ot=null,P.pop(),P.length>0?(N=P[P.length-1],Ht===!0&&Bt.setGlobalState(C.clippingPlanes,N.state.camera)):N=null,B.pop(),B.length>0?L=B[B.length-1]:L=null};function vi(R,Y,rt,et){if(R.visible===!1)return;if(R.layers.test(Y.layers)){if(R.isGroup)rt=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(Y);else if(R.isLight)N.pushLight(R),R.castShadow&&N.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||Xt.intersectsSprite(R)){et&&me.setFromMatrixPosition(R.matrixWorld).applyMatrix4(en);const It=Ct.update(R),Nt=R.material;Nt.visible&&L.push(R,It,Nt,rt,me.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||Xt.intersectsObject(R))){const It=Ct.update(R),Nt=R.material;if(et&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),me.copy(R.boundingSphere.center)):(It.boundingSphere===null&&It.computeBoundingSphere(),me.copy(It.boundingSphere.center)),me.applyMatrix4(R.matrixWorld).applyMatrix4(en)),Array.isArray(Nt)){const Gt=It.groups;for(let qt=0,$t=Gt.length;qt<$t;qt++){const Yt=Gt[qt],te=Nt[Yt.materialIndex];te&&te.visible&&L.push(R,It,te,rt,me.z,Yt)}}else Nt.visible&&L.push(R,It,Nt,rt,me.z,null)}}const Ut=R.children;for(let It=0,Nt=Ut.length;It<Nt;It++)vi(Ut[It],Y,rt,et)}function fn(R,Y,rt,et){const{opaque:Z,transmissive:Ut,transparent:It}=R;N.setupLightsView(rt),Ht===!0&&Bt.setGlobalState(C.clippingPlanes,rt),et&&jt.viewport(I.copy(et)),Z.length>0&&Pi(Z,Y,rt),Ut.length>0&&Pi(Ut,Y,rt),It.length>0&&Pi(It,Y,rt),jt.buffers.depth.setTest(!0),jt.buffers.depth.setMask(!0),jt.buffers.color.setMask(!0),jt.setPolygonOffset(!1)}function bn(R,Y,rt,et){if((rt.isScene===!0?rt.overrideMaterial:null)!==null)return;if(N.state.transmissionRenderTarget[et.id]===void 0){const te=Ee.has("EXT_color_buffer_half_float")||Ee.has("EXT_color_buffer_float");N.state.transmissionRenderTarget[et.id]=new aa(1,1,{generateMipmaps:!0,type:te?Ba:Di,minFilter:ir,samples:Ne.samples,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:be.workingColorSpace})}const Ut=N.state.transmissionRenderTarget[et.id],It=et.viewport||I;Ut.setSize(It.z*C.transmissionResolutionScale,It.w*C.transmissionResolutionScale);const Nt=C.getRenderTarget(),Gt=C.getActiveCubeFace(),qt=C.getActiveMipmapLevel();C.setRenderTarget(Ut),C.getClearColor(yt),_t=C.getClearAlpha(),_t<1&&C.setClearColor(16777215,.5),C.clear(),le&&wt.render(rt);const $t=C.toneMapping;C.toneMapping=ia;const Yt=et.viewport;if(et.viewport!==void 0&&(et.viewport=void 0),N.setupLightsView(et),Ht===!0&&Bt.setGlobalState(C.clippingPlanes,et),Pi(R,rt,et),q.updateMultisampleRenderTarget(Ut),q.updateRenderTargetMipmap(Ut),Ee.has("WEBGL_multisampled_render_to_texture")===!1){let te=!1;for(let De=0,Ke=Y.length;De<Ke;De++){const qe=Y[De],{object:Pe,geometry:Qt,material:Ue,group:se}=qe;if(Ue.side===Da&&Pe.layers.test(et.layers)){const An=Ue.side;Ue.side=ii,Ue.needsUpdate=!0,ur(Pe,rt,et,Qt,Ue,se),Ue.side=An,Ue.needsUpdate=!0,te=!0}}te===!0&&(q.updateMultisampleRenderTarget(Ut),q.updateRenderTargetMipmap(Ut))}C.setRenderTarget(Nt,Gt,qt),C.setClearColor(yt,_t),Yt!==void 0&&(et.viewport=Yt),C.toneMapping=$t}function Pi(R,Y,rt){const et=Y.isScene===!0?Y.overrideMaterial:null;for(let Z=0,Ut=R.length;Z<Ut;Z++){const It=R[Z],{object:Nt,geometry:Gt,group:qt}=It;let $t=It.material;$t.allowOverride===!0&&et!==null&&($t=et),Nt.layers.test(rt.layers)&&ur(Nt,Y,rt,Gt,$t,qt)}}function ur(R,Y,rt,et,Z,Ut){R.onBeforeRender(C,Y,rt,et,Z,Ut),R.modelViewMatrix.multiplyMatrices(rt.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),Z.onBeforeRender(C,Y,rt,et,R,Ut),Z.transparent===!0&&Z.side===Da&&Z.forceSinglePass===!1?(Z.side=ii,Z.needsUpdate=!0,C.renderBufferDirect(rt,Y,et,Z,R,Ut),Z.side=Ts,Z.needsUpdate=!0,C.renderBufferDirect(rt,Y,et,Z,R,Ut),Z.side=Da):C.renderBufferDirect(rt,Y,et,Z,R,Ut),R.onAfterRender(C,Y,rt,et,Z,Ut)}function fr(R,Y,rt){Y.isScene!==!0&&(Y=we);const et=T.get(R),Z=N.state.lights,Ut=N.state.shadowsArray,It=Z.state.version,Nt=Wt.getParameters(R,Z.state,Ut,Y,rt),Gt=Wt.getProgramCacheKey(Nt);let qt=et.programs;et.environment=R.isMeshStandardMaterial?Y.environment:null,et.fog=Y.fog,et.envMap=(R.isMeshStandardMaterial?xt:dt).get(R.envMap||et.environment),et.envMapRotation=et.environment!==null&&R.envMap===null?Y.environmentRotation:R.envMapRotation,qt===void 0&&(R.addEventListener("dispose",Bn),qt=new Map,et.programs=qt);let $t=qt.get(Gt);if($t!==void 0){if(et.currentProgram===$t&&et.lightsStateVersion===It)return Co(R,Nt),$t}else Nt.uniforms=Wt.getUniforms(R),R.onBeforeCompile(Nt,C),$t=Wt.acquireProgram(Nt,Gt),qt.set(Gt,$t),et.uniforms=Nt.uniforms;const Yt=et.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Yt.clippingPlanes=Bt.uniform),Co(R,Nt),et.needsLights=Ha(R),et.lightsStateVersion=It,et.needsLights&&(Yt.ambientLightColor.value=Z.state.ambient,Yt.lightProbe.value=Z.state.probe,Yt.directionalLights.value=Z.state.directional,Yt.directionalLightShadows.value=Z.state.directionalShadow,Yt.spotLights.value=Z.state.spot,Yt.spotLightShadows.value=Z.state.spotShadow,Yt.rectAreaLights.value=Z.state.rectArea,Yt.ltc_1.value=Z.state.rectAreaLTC1,Yt.ltc_2.value=Z.state.rectAreaLTC2,Yt.pointLights.value=Z.state.point,Yt.pointLightShadows.value=Z.state.pointShadow,Yt.hemisphereLights.value=Z.state.hemi,Yt.directionalShadowMap.value=Z.state.directionalShadowMap,Yt.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,Yt.spotShadowMap.value=Z.state.spotShadowMap,Yt.spotLightMatrix.value=Z.state.spotLightMatrix,Yt.spotLightMap.value=Z.state.spotLightMap,Yt.pointShadowMap.value=Z.state.pointShadowMap,Yt.pointShadowMatrix.value=Z.state.pointShadowMatrix),et.currentProgram=$t,et.uniformsList=null,$t}function tc(R){if(R.uniformsList===null){const Y=R.currentProgram.getUniforms();R.uniformsList=qu.seqWithValue(Y.seq,R.uniforms)}return R.uniformsList}function Co(R,Y){const rt=T.get(R);rt.outputColorSpace=Y.outputColorSpace,rt.batching=Y.batching,rt.batchingColor=Y.batchingColor,rt.instancing=Y.instancing,rt.instancingColor=Y.instancingColor,rt.instancingMorph=Y.instancingMorph,rt.skinning=Y.skinning,rt.morphTargets=Y.morphTargets,rt.morphNormals=Y.morphNormals,rt.morphColors=Y.morphColors,rt.morphTargetsCount=Y.morphTargetsCount,rt.numClippingPlanes=Y.numClippingPlanes,rt.numIntersection=Y.numClipIntersection,rt.vertexAlphas=Y.vertexAlphas,rt.vertexTangents=Y.vertexTangents,rt.toneMapping=Y.toneMapping}function As(R,Y,rt,et,Z){Y.isScene!==!0&&(Y=we),q.resetTextureUnits();const Ut=Y.fog,It=et.isMeshStandardMaterial?Y.environment:null,Nt=tt===null?C.outputColorSpace:tt.isXRRenderTarget===!0?tt.texture.colorSpace:_o,Gt=(et.isMeshStandardMaterial?xt:dt).get(et.envMap||It),qt=et.vertexColors===!0&&!!rt.attributes.color&&rt.attributes.color.itemSize===4,$t=!!rt.attributes.tangent&&(!!et.normalMap||et.anisotropy>0),Yt=!!rt.morphAttributes.position,te=!!rt.morphAttributes.normal,De=!!rt.morphAttributes.color;let Ke=ia;et.toneMapped&&(tt===null||tt.isXRRenderTarget===!0)&&(Ke=C.toneMapping);const qe=rt.morphAttributes.position||rt.morphAttributes.normal||rt.morphAttributes.color,Pe=qe!==void 0?qe.length:0,Qt=T.get(et),Ue=N.state.lights;if(Ht===!0&&(pe===!0||R!==ot)){const wn=R===ot&&et.id===ft;Bt.setState(et,R,wn)}let se=!1;et.version===Qt.__version?(Qt.needsLights&&Qt.lightsStateVersion!==Ue.state.version||Qt.outputColorSpace!==Nt||Z.isBatchedMesh&&Qt.batching===!1||!Z.isBatchedMesh&&Qt.batching===!0||Z.isBatchedMesh&&Qt.batchingColor===!0&&Z.colorTexture===null||Z.isBatchedMesh&&Qt.batchingColor===!1&&Z.colorTexture!==null||Z.isInstancedMesh&&Qt.instancing===!1||!Z.isInstancedMesh&&Qt.instancing===!0||Z.isSkinnedMesh&&Qt.skinning===!1||!Z.isSkinnedMesh&&Qt.skinning===!0||Z.isInstancedMesh&&Qt.instancingColor===!0&&Z.instanceColor===null||Z.isInstancedMesh&&Qt.instancingColor===!1&&Z.instanceColor!==null||Z.isInstancedMesh&&Qt.instancingMorph===!0&&Z.morphTexture===null||Z.isInstancedMesh&&Qt.instancingMorph===!1&&Z.morphTexture!==null||Qt.envMap!==Gt||et.fog===!0&&Qt.fog!==Ut||Qt.numClippingPlanes!==void 0&&(Qt.numClippingPlanes!==Bt.numPlanes||Qt.numIntersection!==Bt.numIntersection)||Qt.vertexAlphas!==qt||Qt.vertexTangents!==$t||Qt.morphTargets!==Yt||Qt.morphNormals!==te||Qt.morphColors!==De||Qt.toneMapping!==Ke||Qt.morphTargetsCount!==Pe)&&(se=!0):(se=!0,Qt.__version=et.version);let An=Qt.currentProgram;se===!0&&(An=fr(et,Y,Z));let oa=!1,Rn=!1,_i=!1;const Fe=An.getUniforms(),Cn=Qt.uniforms;if(jt.useProgram(An.program)&&(oa=!0,Rn=!0,_i=!0),et.id!==ft&&(ft=et.id,Rn=!0),oa||ot!==R){jt.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),Fe.setValue(G,"projectionMatrix",R.projectionMatrix),Fe.setValue(G,"viewMatrix",R.matrixWorldInverse);const Dn=Fe.map.cameraPosition;Dn!==void 0&&Dn.setValue(G,_e.setFromMatrixPosition(R.matrixWorld)),Ne.logarithmicDepthBuffer&&Fe.setValue(G,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(et.isMeshPhongMaterial||et.isMeshToonMaterial||et.isMeshLambertMaterial||et.isMeshBasicMaterial||et.isMeshStandardMaterial||et.isShaderMaterial)&&Fe.setValue(G,"isOrthographic",R.isOrthographicCamera===!0),ot!==R&&(ot=R,Rn=!0,_i=!0)}if(Qt.needsLights&&(Ue.state.directionalShadowMap.length>0&&Fe.setValue(G,"directionalShadowMap",Ue.state.directionalShadowMap,q),Ue.state.spotShadowMap.length>0&&Fe.setValue(G,"spotShadowMap",Ue.state.spotShadowMap,q),Ue.state.pointShadowMap.length>0&&Fe.setValue(G,"pointShadowMap",Ue.state.pointShadowMap,q)),Z.isSkinnedMesh){Fe.setOptional(G,Z,"bindMatrix"),Fe.setOptional(G,Z,"bindMatrixInverse");const wn=Z.skeleton;wn&&(wn.boneTexture===null&&wn.computeBoneTexture(),Fe.setValue(G,"boneTexture",wn.boneTexture,q))}Z.isBatchedMesh&&(Fe.setOptional(G,Z,"batchingTexture"),Fe.setValue(G,"batchingTexture",Z._matricesTexture,q),Fe.setOptional(G,Z,"batchingIdTexture"),Fe.setValue(G,"batchingIdTexture",Z._indirectTexture,q),Fe.setOptional(G,Z,"batchingColorTexture"),Z._colorsTexture!==null&&Fe.setValue(G,"batchingColorTexture",Z._colorsTexture,q));const _n=rt.morphAttributes;if((_n.position!==void 0||_n.normal!==void 0||_n.color!==void 0)&&ue.update(Z,rt,An),(Rn||Qt.receiveShadow!==Z.receiveShadow)&&(Qt.receiveShadow=Z.receiveShadow,Fe.setValue(G,"receiveShadow",Z.receiveShadow)),et.isMeshGouraudMaterial&&et.envMap!==null&&(Cn.envMap.value=Gt,Cn.flipEnvMap.value=Gt.isCubeTexture&&Gt.isRenderTargetTexture===!1?-1:1),et.isMeshStandardMaterial&&et.envMap===null&&Y.environment!==null&&(Cn.envMapIntensity.value=Y.environmentIntensity),Cn.dfgLUT!==void 0&&(Cn.dfgLUT.value=oP()),Rn&&(Fe.setValue(G,"toneMappingExposure",C.toneMappingExposure),Qt.needsLights&&wo(Cn,_i),Ut&&et.fog===!0&&ne.refreshFogUniforms(Cn,Ut),ne.refreshMaterialUniforms(Cn,et,gt,at,N.state.transmissionRenderTarget[R.id]),qu.upload(G,tc(Qt),Cn,q)),et.isShaderMaterial&&et.uniformsNeedUpdate===!0&&(qu.upload(G,tc(Qt),Cn,q),et.uniformsNeedUpdate=!1),et.isSpriteMaterial&&Fe.setValue(G,"center",Z.center),Fe.setValue(G,"modelViewMatrix",Z.modelViewMatrix),Fe.setValue(G,"normalMatrix",Z.normalMatrix),Fe.setValue(G,"modelMatrix",Z.matrixWorld),et.isShaderMaterial||et.isRawShaderMaterial){const wn=et.uniformsGroups;for(let Dn=0,hr=wn.length;Dn<hr;Dn++){const Oi=wn[Dn];St.update(Oi,An),St.bind(Oi,An)}}return An}function wo(R,Y){R.ambientLightColor.needsUpdate=Y,R.lightProbe.needsUpdate=Y,R.directionalLights.needsUpdate=Y,R.directionalLightShadows.needsUpdate=Y,R.pointLights.needsUpdate=Y,R.pointLightShadows.needsUpdate=Y,R.spotLights.needsUpdate=Y,R.spotLightShadows.needsUpdate=Y,R.rectAreaLights.needsUpdate=Y,R.hemisphereLights.needsUpdate=Y}function Ha(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return H},this.getActiveMipmapLevel=function(){return $},this.getRenderTarget=function(){return tt},this.setRenderTargetTextures=function(R,Y,rt){const et=T.get(R);et.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,et.__autoAllocateDepthBuffer===!1&&(et.__useRenderToTexture=!1),T.get(R.texture).__webglTexture=Y,T.get(R.depthTexture).__webglTexture=et.__autoAllocateDepthBuffer?void 0:rt,et.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,Y){const rt=T.get(R);rt.__webglFramebuffer=Y,rt.__useDefaultFramebuffer=Y===void 0};const Ga=G.createFramebuffer();this.setRenderTarget=function(R,Y=0,rt=0){tt=R,H=Y,$=rt;let et=null,Z=!1,Ut=!1;if(R){const Nt=T.get(R);if(Nt.__useDefaultFramebuffer!==void 0){jt.bindFramebuffer(G.FRAMEBUFFER,Nt.__webglFramebuffer),I.copy(R.viewport),z.copy(R.scissor),K=R.scissorTest,jt.viewport(I),jt.scissor(z),jt.setScissorTest(K),ft=-1;return}else if(Nt.__webglFramebuffer===void 0)q.setupRenderTarget(R);else if(Nt.__hasExternalTextures)q.rebindTextures(R,T.get(R.texture).__webglTexture,T.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const $t=R.depthTexture;if(Nt.__boundDepthTexture!==$t){if($t!==null&&T.has($t)&&(R.width!==$t.image.width||R.height!==$t.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");q.setupDepthRenderbuffer(R)}}const Gt=R.texture;(Gt.isData3DTexture||Gt.isDataArrayTexture||Gt.isCompressedArrayTexture)&&(Ut=!0);const qt=T.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(qt[Y])?et=qt[Y][rt]:et=qt[Y],Z=!0):R.samples>0&&q.useMultisampledRTT(R)===!1?et=T.get(R).__webglMultisampledFramebuffer:Array.isArray(qt)?et=qt[rt]:et=qt,I.copy(R.viewport),z.copy(R.scissor),K=R.scissorTest}else I.copy(it).multiplyScalar(gt).floor(),z.copy(ut).multiplyScalar(gt).floor(),K=Dt;if(rt!==0&&(et=Ga),jt.bindFramebuffer(G.FRAMEBUFFER,et)&&jt.drawBuffers(R,et),jt.viewport(I),jt.scissor(z),jt.setScissorTest(K),Z){const Nt=T.get(R.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Nt.__webglTexture,rt)}else if(Ut){const Nt=Y;for(let Gt=0;Gt<R.textures.length;Gt++){const qt=T.get(R.textures[Gt]);G.framebufferTextureLayer(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0+Gt,qt.__webglTexture,rt,Nt)}}else if(R!==null&&rt!==0){const Nt=T.get(R.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,Nt.__webglTexture,rt)}ft=-1},this.readRenderTargetPixels=function(R,Y,rt,et,Z,Ut,It,Nt=0){if(!(R&&R.isWebGLRenderTarget)){Ce("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Gt=T.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&It!==void 0&&(Gt=Gt[It]),Gt){jt.bindFramebuffer(G.FRAMEBUFFER,Gt);try{const qt=R.textures[Nt],$t=qt.format,Yt=qt.type;if(!Ne.textureFormatReadable($t)){Ce("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ne.textureTypeReadable(Yt)){Ce("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Y>=0&&Y<=R.width-et&&rt>=0&&rt<=R.height-Z&&(R.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+Nt),G.readPixels(Y,rt,et,Z,bt.convert($t),bt.convert(Yt),Ut))}finally{const qt=tt!==null?T.get(tt).__webglFramebuffer:null;jt.bindFramebuffer(G.FRAMEBUFFER,qt)}}},this.readRenderTargetPixelsAsync=async function(R,Y,rt,et,Z,Ut,It,Nt=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Gt=T.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&It!==void 0&&(Gt=Gt[It]),Gt)if(Y>=0&&Y<=R.width-et&&rt>=0&&rt<=R.height-Z){jt.bindFramebuffer(G.FRAMEBUFFER,Gt);const qt=R.textures[Nt],$t=qt.format,Yt=qt.type;if(!Ne.textureFormatReadable($t))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ne.textureTypeReadable(Yt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const te=G.createBuffer();G.bindBuffer(G.PIXEL_PACK_BUFFER,te),G.bufferData(G.PIXEL_PACK_BUFFER,Ut.byteLength,G.STREAM_READ),R.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+Nt),G.readPixels(Y,rt,et,Z,bt.convert($t),bt.convert(Yt),0);const De=tt!==null?T.get(tt).__webglFramebuffer:null;jt.bindFramebuffer(G.FRAMEBUFFER,De);const Ke=G.fenceSync(G.SYNC_GPU_COMMANDS_COMPLETE,0);return G.flush(),await N3(G,Ke,4),G.bindBuffer(G.PIXEL_PACK_BUFFER,te),G.getBufferSubData(G.PIXEL_PACK_BUFFER,0,Ut),G.deleteBuffer(te),G.deleteSync(Ke),Ut}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,Y=null,rt=0){const et=Math.pow(2,-rt),Z=Math.floor(R.image.width*et),Ut=Math.floor(R.image.height*et),It=Y!==null?Y.x:0,Nt=Y!==null?Y.y:0;q.setTexture2D(R,0),G.copyTexSubImage2D(G.TEXTURE_2D,rt,0,0,It,Nt,Z,Ut),jt.unbindTexture()};const Rs=G.createFramebuffer(),ka=G.createFramebuffer();this.copyTextureToTexture=function(R,Y,rt=null,et=null,Z=0,Ut=null){Ut===null&&(Z!==0?(Gl("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Ut=Z,Z=0):Ut=0);let It,Nt,Gt,qt,$t,Yt,te,De,Ke;const qe=R.isCompressedTexture?R.mipmaps[Ut]:R.image;if(rt!==null)It=rt.max.x-rt.min.x,Nt=rt.max.y-rt.min.y,Gt=rt.isBox3?rt.max.z-rt.min.z:1,qt=rt.min.x,$t=rt.min.y,Yt=rt.isBox3?rt.min.z:0;else{const _n=Math.pow(2,-Z);It=Math.floor(qe.width*_n),Nt=Math.floor(qe.height*_n),R.isDataArrayTexture?Gt=qe.depth:R.isData3DTexture?Gt=Math.floor(qe.depth*_n):Gt=1,qt=0,$t=0,Yt=0}et!==null?(te=et.x,De=et.y,Ke=et.z):(te=0,De=0,Ke=0);const Pe=bt.convert(Y.format),Qt=bt.convert(Y.type);let Ue;Y.isData3DTexture?(q.setTexture3D(Y,0),Ue=G.TEXTURE_3D):Y.isDataArrayTexture||Y.isCompressedArrayTexture?(q.setTexture2DArray(Y,0),Ue=G.TEXTURE_2D_ARRAY):(q.setTexture2D(Y,0),Ue=G.TEXTURE_2D),G.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,Y.flipY),G.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),G.pixelStorei(G.UNPACK_ALIGNMENT,Y.unpackAlignment);const se=G.getParameter(G.UNPACK_ROW_LENGTH),An=G.getParameter(G.UNPACK_IMAGE_HEIGHT),oa=G.getParameter(G.UNPACK_SKIP_PIXELS),Rn=G.getParameter(G.UNPACK_SKIP_ROWS),_i=G.getParameter(G.UNPACK_SKIP_IMAGES);G.pixelStorei(G.UNPACK_ROW_LENGTH,qe.width),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,qe.height),G.pixelStorei(G.UNPACK_SKIP_PIXELS,qt),G.pixelStorei(G.UNPACK_SKIP_ROWS,$t),G.pixelStorei(G.UNPACK_SKIP_IMAGES,Yt);const Fe=R.isDataArrayTexture||R.isData3DTexture,Cn=Y.isDataArrayTexture||Y.isData3DTexture;if(R.isDepthTexture){const _n=T.get(R),wn=T.get(Y),Dn=T.get(_n.__renderTarget),hr=T.get(wn.__renderTarget);jt.bindFramebuffer(G.READ_FRAMEBUFFER,Dn.__webglFramebuffer),jt.bindFramebuffer(G.DRAW_FRAMEBUFFER,hr.__webglFramebuffer);for(let Oi=0;Oi<Gt;Oi++)Fe&&(G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,T.get(R).__webglTexture,Z,Yt+Oi),G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,T.get(Y).__webglTexture,Ut,Ke+Oi)),G.blitFramebuffer(qt,$t,It,Nt,te,De,It,Nt,G.DEPTH_BUFFER_BIT,G.NEAREST);jt.bindFramebuffer(G.READ_FRAMEBUFFER,null),jt.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else if(Z!==0||R.isRenderTargetTexture||T.has(R)){const _n=T.get(R),wn=T.get(Y);jt.bindFramebuffer(G.READ_FRAMEBUFFER,Rs),jt.bindFramebuffer(G.DRAW_FRAMEBUFFER,ka);for(let Dn=0;Dn<Gt;Dn++)Fe?G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,_n.__webglTexture,Z,Yt+Dn):G.framebufferTexture2D(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,_n.__webglTexture,Z),Cn?G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,wn.__webglTexture,Ut,Ke+Dn):G.framebufferTexture2D(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,wn.__webglTexture,Ut),Z!==0?G.blitFramebuffer(qt,$t,It,Nt,te,De,It,Nt,G.COLOR_BUFFER_BIT,G.NEAREST):Cn?G.copyTexSubImage3D(Ue,Ut,te,De,Ke+Dn,qt,$t,It,Nt):G.copyTexSubImage2D(Ue,Ut,te,De,qt,$t,It,Nt);jt.bindFramebuffer(G.READ_FRAMEBUFFER,null),jt.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else Cn?R.isDataTexture||R.isData3DTexture?G.texSubImage3D(Ue,Ut,te,De,Ke,It,Nt,Gt,Pe,Qt,qe.data):Y.isCompressedArrayTexture?G.compressedTexSubImage3D(Ue,Ut,te,De,Ke,It,Nt,Gt,Pe,qe.data):G.texSubImage3D(Ue,Ut,te,De,Ke,It,Nt,Gt,Pe,Qt,qe):R.isDataTexture?G.texSubImage2D(G.TEXTURE_2D,Ut,te,De,It,Nt,Pe,Qt,qe.data):R.isCompressedTexture?G.compressedTexSubImage2D(G.TEXTURE_2D,Ut,te,De,qe.width,qe.height,Pe,qe.data):G.texSubImage2D(G.TEXTURE_2D,Ut,te,De,It,Nt,Pe,Qt,qe);G.pixelStorei(G.UNPACK_ROW_LENGTH,se),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,An),G.pixelStorei(G.UNPACK_SKIP_PIXELS,oa),G.pixelStorei(G.UNPACK_SKIP_ROWS,Rn),G.pixelStorei(G.UNPACK_SKIP_IMAGES,_i),Ut===0&&Y.generateMipmaps&&G.generateMipmap(Ue),jt.unbindTexture()},this.initRenderTarget=function(R){T.get(R).__webglFramebuffer===void 0&&q.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?q.setTextureCube(R,0):R.isData3DTexture?q.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?q.setTexture2DArray(R,0):q.setTexture2D(R,0),jt.unbindTexture()},this.resetState=function(){H=0,$=0,tt=null,jt.reset(),Ft.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ta}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const n=this.getContext();n.drawingBufferColorSpace=be._getDrawingBufferColorSpace(t),n.unpackColorSpace=be._getUnpackColorSpace()}}const lP=()=>{const i=Et.useRef(null),t=Et.useRef({x:0,y:0});return Et.useEffect(()=>{if(!i.current)return;const n=new LE,s=new mi(75,window.innerWidth/window.innerHeight,.1,1e3),o=new HE({antialias:!0,alpha:!0});o.setSize(window.innerWidth,window.innerHeight),o.setPixelRatio(Math.min(window.devicePixelRatio,2)),i.current.appendChild(o.domElement);const c=new gi,u=4e3,f=new Float32Array(u*3),p=new Float32Array(u);for(let E=0;E<u;E++)f[E*3]=(Math.random()-.5)*15,f[E*3+1]=(Math.random()-.5)*15,f[E*3+2]=(Math.random()-.5)*15,p[E]=Math.random();c.setAttribute("position",new si(f,3)),c.setAttribute("size",new si(p,1));const d=new af({size:.03,color:16777215,transparent:!0,opacity:.5,blending:zl}),g=new Um(c,d);n.add(g),s.position.z=5;const v=()=>{requestAnimationFrame(v),g.rotation.y+=(t.current.x*.05-g.rotation.y)*.05,g.rotation.x+=(t.current.y*.05-g.rotation.x)*.05;const E=Date.now()*5e-4;for(let b=0;b<u;b++){const S=b*3;f[S+1]+=Math.sin(E+f[S])*.002}c.attributes.position.needsUpdate=!0,o.render(n,s)};v();const _=E=>{t.current.x=E.clientX/window.innerWidth-.5,t.current.y=E.clientY/window.innerHeight-.5},y=()=>{s.aspect=window.innerWidth/window.innerHeight,s.updateProjectionMatrix(),o.setSize(window.innerWidth,window.innerHeight)};return window.addEventListener("mousemove",_),window.addEventListener("resize",y),()=>{window.removeEventListener("mousemove",_),window.removeEventListener("resize",y),i.current&&i.current.removeChild(o.domElement),n.clear(),o.dispose()}},[]),zt.jsx("div",{ref:i,className:"fixed inset-0 pointer-events-none z-0 overflow-hidden"})};class cP{constructor(){$e(this,"ctx",null);$e(this,"activeNodes",new Set);$e(this,"isLocked",!1)}init(){this.ctx||(this.ctx=new(window.AudioContext||window.webkitAudioContext)),this.ctx.state==="suspended"&&this.ctx.resume()}trackNode(t){this.activeNodes.add(t),t.onended=()=>{this.activeNodes.delete(t)}}stopAll(){this.isLocked=!0,this.activeNodes.forEach(t=>{try{t.stop()}catch{}}),this.activeNodes.clear(),window.speechSynthesis&&window.speechSynthesis.cancel()}playTick(t){if(this.isLocked=!1,this.init(),!this.ctx||this.isLocked)return;const n=this.ctx.currentTime,s=this.ctx.createOscillator(),o=this.ctx.createGain();s.type="sine",s.frequency.setValueAtTime(70,n),s.frequency.exponentialRampToValueAtTime(35,n+.12),o.gain.setValueAtTime(.5,n),o.gain.exponentialRampToValueAtTime(.001,n+.2),s.connect(o),o.connect(this.ctx.destination);const c=this.ctx.sampleRate*.1,u=this.ctx.createBuffer(1,c,this.ctx.sampleRate),f=u.getChannelData(0);for(let y=0;y<c;y++)f[y]=Math.random()*2-1;const p=this.ctx.createBufferSource();p.buffer=u;const d=this.ctx.createBiquadFilter();d.type="highpass",d.frequency.setValueAtTime(1e3,n);const g=this.ctx.createGain();g.gain.setValueAtTime(.2,n),g.gain.exponentialRampToValueAtTime(.001,n+.08),p.connect(d),d.connect(g),g.connect(this.ctx.destination);const v=this.ctx.createOscillator(),_=this.ctx.createGain();v.type="triangle",v.frequency.setValueAtTime(440,n),v.frequency.exponentialRampToValueAtTime(110,n+.05),_.gain.setValueAtTime(.1,n),_.gain.exponentialRampToValueAtTime(.001,n+.1),v.connect(_),_.connect(this.ctx.destination),this.trackNode(s),this.trackNode(v),p.start(n),s.start(n),s.stop(n+.2),v.start(n),v.stop(n+.1)}playExplosion(t=0){if(this.init(),!this.ctx||this.isLocked)return;const n=this.ctx.sampleRate*.5,s=this.ctx.createBuffer(1,n,this.ctx.sampleRate),o=s.getChannelData(0);for(let d=0;d<n;d++)o[d]=Math.random()*2-1;const c=this.ctx.createBufferSource();c.buffer=s;const u=this.ctx.createBiquadFilter();u.type="lowpass",u.frequency.setValueAtTime(1e3,this.ctx.currentTime),u.frequency.exponentialRampToValueAtTime(40,this.ctx.currentTime+.4);const f=this.ctx.createGain();f.gain.setValueAtTime(.3,this.ctx.currentTime),f.gain.exponentialRampToValueAtTime(.01,this.ctx.currentTime+.5);const p=this.ctx.createStereoPanner();p.pan.value=t,c.connect(u),u.connect(f),f.connect(p),p.connect(this.ctx.destination),this.trackNode(c),c.start(),c.stop(this.ctx.currentTime+.5)}}const Yu=new cP;class uP{constructor(t,n,s){$e(this,"x");$e(this,"y");$e(this,"vx");$e(this,"vy");$e(this,"alpha");$e(this,"color");$e(this,"gravity");$e(this,"friction");$e(this,"size");$e(this,"decay");this.x=t,this.y=n;const o=Math.random()*Math.PI*2,c=Math.random()*8+2;this.vx=Math.cos(o)*c,this.vy=Math.sin(o)*c,this.alpha=1,this.color=s,this.gravity=.12,this.friction=.95,this.size=Math.random()*2.5+.5,this.decay=Math.random()*.015+.008}update(){this.vx*=this.friction,this.vy*=this.friction,this.vy+=this.gravity,this.x+=this.vx,this.y+=this.vy,this.alpha-=this.decay}draw(t){this.alpha<=0||(t.save(),t.globalAlpha=this.alpha,t.beginPath(),t.arc(this.x,this.y,this.size,0,Math.PI*2),t.fillStyle=this.color,t.shadowBlur=10,t.shadowColor=this.color,t.fill(),t.restore())}}class MS{constructor(t,n,s){$e(this,"x");$e(this,"y");$e(this,"targetY");$e(this,"color");$e(this,"particles");$e(this,"isExploded");$e(this,"vy");$e(this,"canvasWidth");$e(this,"canvasHeight");this.canvasWidth=t,this.canvasHeight=n,this.x=s.startX??Math.random()*(t*.8)+t*.1,this.y=n,this.targetY=s.targetY??Math.random()*n*.4+n*.1;const o=Math.random()*360;this.color=`hsl(${o}, 100%, 65%)`,this.particles=[],this.isExploded=!1;const c=n-this.targetY;this.vy=-Math.sqrt(2*.15*c)}update(t){if(!this.isExploded)this.y+=this.vy,this.vy+=.15,(this.vy>=0||this.y<=this.targetY)&&(t?this.isExploded=!0:this.explode());else for(let n=this.particles.length-1;n>=0;n--){const s=this.particles[n];s.update(),s.alpha<=0&&this.particles.splice(n,1)}}explode(){this.isExploded=!0;const t=this.x/this.canvasWidth*2-1;Yu.playExplosion(t);const n=100+Math.floor(Math.random()*50);for(let s=0;s<n;s++)this.particles.push(new uP(this.x,this.y,this.color))}draw(t){this.isExploded?this.particles.forEach(n=>n.draw(t)):(t.save(),t.beginPath(),t.arc(this.x,this.y,2,0,Math.PI*2),t.fillStyle=this.color,t.shadowBlur=15,t.shadowColor=this.color,t.fill(),t.restore())}}const fP=Et.forwardRef((i,t)=>{const n=Et.useRef(null),s=Et.useRef([]),o=Et.useRef(!1);return Et.useImperativeHandle(t,()=>({launchAt:(c,u)=>{n.current&&!o.current&&s.current.push(new MS(n.current.width,n.current.height,{startX:c,targetY:u}))}})),Et.useEffect(()=>{const c=n.current;if(!c)return;const u=c.getContext("2d");if(!u)return;const f=()=>{c.width=window.innerWidth,c.height=window.innerHeight};f();let p;const d=()=>{if(!o.current){u.globalCompositeOperation="destination-out",u.fillStyle="rgba(0, 0, 0, 0.2)",u.fillRect(0,0,c.width,c.height),u.globalCompositeOperation="lighter",Math.random()<.03&&s.current.push(new MS(c.width,c.height,{}));for(let g=s.current.length-1;g>=0;g--){const v=s.current[g];v.update(o.current),v.draw(u),v.isExploded&&v.particles.length===0&&s.current.splice(g,1)}p=requestAnimationFrame(d)}};return window.addEventListener("resize",f),p=requestAnimationFrame(d),()=>{o.current=!0,cancelAnimationFrame(p),window.removeEventListener("resize",f),s.current=[]}},[]),zt.jsx("canvas",{ref:n,className:"fixed inset-0 z-10 pointer-events-none opacity-90",style:{filter:"contrast(1.1) brightness(1.2)"}})}),hP=({countdown:i,active:t})=>{const n=Et.useRef(null),s=Et.useRef(null),o=Et.useRef(null),c=Et.useRef(null),u=Et.useRef(null),f=Et.useRef(null),p=2500,d=800,g=v=>{const _=document.createElement("canvas"),y=_.getContext("2d",{willReadFrequently:!0});if(!y)return[];_.width=400,_.height=400,y.fillStyle="white",y.font="bold 300px Arial",y.textAlign="center",y.textBaseline="middle",y.fillText(v,200,200);const E=y.getImageData(0,0,400,400),b=[],S=4;for(let x=0;x<400;x+=S)for(let D=0;D<400;D+=S){const w=(x*400+D)*4;E.data[w]>128&&b.push([(D-200)/60,-(x-200)/60,(Math.random()-.5)*.2])}return b};return Et.useEffect(()=>{if(!n.current)return;const v=new LE,_=new mi(75,window.innerWidth/window.innerHeight,.1,1e3),y=new HE({antialias:!0,alpha:!0});y.setSize(window.innerWidth,window.innerHeight),y.setPixelRatio(window.devicePixelRatio),n.current.appendChild(y.domElement);const E=new Float32Array(p*3),b=new Float32Array(p*3),S=new Float32Array(p*3);for(let H=0;H<p*3;H++)E[H]=(Math.random()-.5)*20,b[H]=E[H],S[H]=0;const x=new gi;x.setAttribute("position",new si(E,3));const D=new af({size:.06,color:15381256,transparent:!0,opacity:.8,blending:zl}),w=new Um(x,D);v.add(w),s.current=w,u.current=E,c.current=b,f.current=S;const L=new Float32Array(d*3);for(let H=0;H<d;H++){const $=H/d*Math.PI*2,tt=4.5+Math.random()*.2;L[H*3]=Math.cos($)*tt,L[H*3+1]=Math.sin($)*tt,L[H*3+2]=(Math.random()-.5)*.5}const N=new gi;N.setAttribute("position",new si(L,3));const B=new af({size:.04,color:16777215,transparent:!0,opacity:.3,blending:zl}),P=new Um(N,B);v.add(P),o.current=P,_.position.z=8;let k;const C=()=>{k=requestAnimationFrame(C);const H=w.geometry.getAttribute("position"),$=H.array,tt=c.current,ft=f.current;for(let ot=0;ot<p*3;ot++){const I=tt[ot]-$[ot];ft[ot]=ft[ot]*.9+I*.05,$[ot]+=ft[ot]}H.needsUpdate=!0,o.current&&(o.current.rotation.z+=.005),y.render(v,_)};C();const U=()=>{_.aspect=window.innerWidth/window.innerHeight,_.updateProjectionMatrix(),y.setSize(window.innerWidth,window.innerHeight)};return window.addEventListener("resize",U),()=>{window.removeEventListener("resize",U),cancelAnimationFrame(k),n.current&&n.current.removeChild(y.domElement),v.clear(),y.dispose()}},[]),Et.useEffect(()=>{if(!t)return;const v=g(i.toString()),_=c.current;if(_)for(let y=0;y<p;y++)if(y<v.length)_[y*3]=v[y][0],_[y*3+1]=v[y][1],_[y*3+2]=v[y][2];else{const E=Math.random()*Math.PI*2,b=3+Math.random()*2;_[y*3]=Math.cos(E)*b+(Math.random()-.5)*2,_[y*3+1]=Math.sin(E)*b+(Math.random()-.5)*2,_[y*3+2]=(Math.random()-.5)*5}},[i,t]),zt.jsx("div",{ref:n,className:"fixed inset-0 z-40 pointer-events-none"})},dP=({photos:i})=>{const t=Et.useMemo(()=>i.map(()=>({startX:Math.random()*100-50,startY:Math.random()*100-50,rotateX:Math.random()*40-20,rotateY:Math.random()*40-20,rotateZ:Math.random()*20-10,floatX:Math.random()*20-10,floatY:Math.random()*-60-20,scaleStart:.2+Math.random()*.3,duration:18+Math.random()*12,delay:Math.random()*8,blur:Math.random()*4})),[i]);return i.length===0?null:zt.jsx("div",{className:"fixed inset-0 pointer-events-none z-[20] overflow-hidden perspective-[1200px]",children:i.map((n,s)=>{const o=t[s];return zt.jsx(qn.div,{initial:{opacity:0,scale:o.scaleStart,x:`${o.startX}vw`,y:`${o.startY+20}vh`,rotateX:o.rotateX,rotateY:o.rotateY,rotateZ:o.rotateZ,z:-500},animate:{opacity:[0,1,1,0],scale:[o.scaleStart,1.2,1.4,1.6],x:[`${o.startX}vw`,`${o.startX+o.floatX}vw`],y:[`${o.startY+20}vh`,`${o.startY+o.floatY}vh`],rotateX:[o.rotateX,-o.rotateX],rotateY:[o.rotateY,-o.rotateY],rotateZ:[o.rotateZ,o.rotateZ+15],z:[-500,200]},transition:{duration:o.duration,delay:o.delay,repeat:1/0,ease:[.4,0,.2,1]},className:"absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 preserve-3d",children:zt.jsxs("div",{className:"relative group p-1.5 md:p-2.5 bg-white/5 backdrop-blur-xl border border-white/20 rounded-lg shadow-[0_20px_50px_rgba(0,0,0,0.5),0_0_20px_rgba(234,179,8,0.1)] overflow-hidden",children:[zt.jsx(qn.div,{animate:{opacity:[.1,.3,.1]},transition:{duration:4,repeat:1/0},className:"absolute inset-0 bg-yellow-500/10 blur-2xl"}),zt.jsxs("div",{className:"relative w-36 h-48 md:w-56 md:h-72 overflow-hidden rounded-md",children:[zt.jsx("img",{src:n,alt:`Memory ${s}`,className:"w-full h-full object-cover transition-all duration-1000 scale-110"}),zt.jsx(qn.div,{animate:{x:["-200%","200%"]},transition:{duration:3,repeat:1/0,ease:"linear",delay:o.delay},className:"absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"}),zt.jsx("div",{className:"absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20 pointer-events-none"})]}),zt.jsxs("div",{className:"mt-2 md:mt-3 flex flex-col items-center gap-1 opacity-60",children:[zt.jsx("div",{className:"w-1/2 h-[1px] bg-gradient-to-r from-transparent via-white/50 to-transparent"}),zt.jsx("div",{className:"text-[8px] tracking-[0.3em] font-light text-white/40 italic",children:"MOMENT"})]})]})},s)})})},pP=new Date("2026-01-01T00:00:00"),mP="愿新的一年，星辰璀璨，万事胜意",gP=()=>{const[i,t]=Et.useState(Xn.IDLE),[n,s]=Et.useState(10),[o,c]=Et.useState(new Date),[u,f]=Et.useState([]),p=Et.useRef(null),d=Et.useRef(null),g=Et.useMemo(()=>{const S=pP.getTime()-o.getTime();if(S<=0)return{total:0,days:0,hours:0,minutes:0,seconds:0};const x=Math.floor(S/1e3%60),D=Math.floor(S/1e3/60%60),w=Math.floor(S/(1e3*60*60)%24),L=Math.floor(S/(1e3*60*60*24));return{total:S,days:L,hours:w,minutes:D,seconds:x}},[o]),v=S=>{const x=S.target.files;if(x&&x.length>0){const D=Array.from(x).map(w=>URL.createObjectURL(w));f(w=>[...w,...D])}},_=Et.useCallback(()=>{Yu.playTick(10),t(Xn.COUNTDOWN),s(10)},[]),y=Et.useCallback(()=>{t(Xn.CELEBRATING)},[]);Et.useEffect(()=>{const S=setInterval(()=>c(new Date),1e3);return()=>clearInterval(S)},[]),Et.useEffect(()=>{i===Xn.IDLE&&g.total>0&&g.total<=1e4&&_()},[g.total,i,_]),Et.useEffect(()=>{let S;return i===Xn.COUNTDOWN&&n>0?(n<10&&Yu.playTick(n),S=window.setInterval(()=>s(x=>x-1),1e3)):i===Xn.COUNTDOWN&&n===0&&y(),()=>clearInterval(S)},[i,n,y]);const E=S=>{i===Xn.CELEBRATING&&p.current&&p.current.launchAt(S.clientX,S.clientY)},b=S=>{S.stopPropagation(),Yu.stopAll(),t(Xn.IDLE),u.forEach(x=>URL.revokeObjectURL(x)),f([])};return zt.jsxs("div",{onClick:E,className:`relative min-h-screen bg-black text-white flex flex-col items-center justify-center overflow-hidden ${i===Xn.CELEBRATING?"cursor-crosshair":""}`,children:[zt.jsx(lP,{}),i===Xn.CELEBRATING&&zt.jsxs(zt.Fragment,{children:[zt.jsx(fP,{ref:p}),zt.jsx(dP,{photos:u})]}),i===Xn.IDLE&&zt.jsxs("div",{className:"fixed top-6 left-1/2 -translate-x-1/2 md:top-6 md:right-6 md:bottom-auto md:left-auto md:translate-x-0 z-[60] flex flex-row md:flex-col items-center md:items-end gap-3 md:gap-4",children:[zt.jsxs(qn.button,{whileHover:{scale:1.05},whileTap:{scale:.95},onClick:S=>{S.stopPropagation(),_()},className:"flex items-center justify-center gap-2 w-36 md:w-44 py-2.5 md:py-3 bg-yellow-500/10 hover:bg-yellow-500/20 border border-yellow-500/30 rounded-full transition-all group backdrop-blur-lg shadow-[0_0_20px_rgba(234,179,8,0.1)]",children:[zt.jsx("span",{className:"text-[10px] md:text-xs font-bold tracking-[0.2em] md:tracking-[0.4em] text-yellow-500 group-hover:text-yellow-400 uppercase",children:"Start"}),zt.jsx(vA,{className:"w-3.5 h-3.5 md:w-4 md:h-4 text-yellow-500"})]}),zt.jsx("input",{type:"file",multiple:!0,accept:"image/*",className:"hidden",ref:d,onChange:v}),zt.jsxs(qn.button,{whileHover:{scale:1.05},whileTap:{scale:.95},onClick:S=>{var x;S.stopPropagation(),(x=d.current)==null||x.click()},className:"flex items-center justify-center gap-2 w-36 md:w-44 py-2.5 md:py-3 bg-yellow-500/10 hover:bg-yellow-500/20 border border-yellow-500/30 rounded-full transition-all group backdrop-blur-lg shadow-[0_0_20px_rgba(234,179,8,0.1)]",children:[zt.jsx("span",{className:"text-[10px] md:text-xs font-bold tracking-[0.2em] md:tracking-[0.4em] text-yellow-500 group-hover:text-yellow-400 uppercase",children:"Memories"}),zt.jsx(dA,{className:"w-3.5 h-3.5 md:w-4 md:h-4 text-yellow-500"}),u.length>0&&zt.jsx("span",{className:"ml-1 text-[10px] bg-yellow-500 text-black px-1.5 rounded-full font-bold",children:u.length})]})]}),zt.jsxs(MR,{mode:"wait",children:[i===Xn.IDLE&&zt.jsxs(qn.div,{initial:{opacity:0,scale:1.1},animate:{opacity:1,scale:1},exit:{opacity:0,scale:2,filter:"blur(40px)"},transition:{duration:.8},className:"z-50 text-center space-y-10 p-6 w-full max-w-5xl",children:[zt.jsxs("div",{className:"space-y-4",children:[zt.jsx(qn.div,{animate:{y:[0,-15,0]},transition:{repeat:1/0,duration:4,ease:"easeInOut"},className:"flex justify-center mb-4",children:zt.jsxs("div",{className:"relative",children:[zt.jsx("div",{className:"absolute inset-0 blur-2xl bg-yellow-500/20 rounded-full"}),zt.jsx("div",{className:"relative bg-black/40 p-5 rounded-full border border-yellow-500/40 shadow-[0_0_30px_rgba(234,179,8,0.2)]",children:zt.jsx(mA,{className:"w-12 h-12 text-yellow-500"})})]})}),zt.jsx("h2",{className:"text-sm md:text-lg font-black tracking-[0.8em] animate-gradient-text uppercase pl-[0.8em]",children:"Countdown to 2026"})]}),zt.jsx("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-3xl mx-auto",children:[{label:"天",value:g.days},{label:"时",value:g.hours},{label:"分",value:g.minutes},{label:"秒",value:g.seconds}].map(S=>zt.jsx(qn.div,{whileHover:{y:-5},className:"group",children:zt.jsxs("div",{className:"relative w-full aspect-square flex flex-col items-center justify-center bg-gradient-to-br from-white/10 to-transparent border border-white/20 rounded-[2rem] backdrop-blur-2xl shadow-2xl transition-colors group-hover:border-yellow-500/40 overflow-hidden",children:[zt.jsx("span",{className:"text-5xl md:text-7xl font-black font-countdown tabular-nums tracking-tighter gradient-text-gold",children:String(S.value).padStart(2,"0")}),zt.jsx("span",{className:"mt-2 text-[10px] md:text-xs font-bold text-white/40 uppercase tracking-widest",children:S.label})]})},S.label))})]},"idle"),i===Xn.COUNTDOWN&&zt.jsxs(qn.div,{initial:{opacity:0},animate:{opacity:1},exit:{scale:4,opacity:0,filter:"blur(60px)"},transition:{duration:1},className:"z-50",children:[zt.jsx(hP,{countdown:n,active:!0}),zt.jsx("div",{className:"fixed inset-0 pointer-events-none bg-gradient-to-b from-yellow-500/5 to-transparent"})]},"countdown"),i===Xn.CELEBRATING&&zt.jsx(qn.div,{initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},className:"z-50 w-full text-center px-4 max-w-4xl pointer-events-none pt-48",children:zt.jsxs("div",{className:"space-y-4 md:space-y-6",children:[zt.jsxs("div",{className:"relative inline-block",children:[zt.jsx(qn.div,{animate:{opacity:[.3,.5,.3],scale:[1,1.1,1]},transition:{duration:4,repeat:1/0},className:"absolute -inset-10 blur-3xl bg-yellow-400/10 rounded-full"}),zt.jsx(qn.h1,{className:"relative text-6xl sm:text-7xl md:text-[7.5rem] font-black tracking-tighter gradient-text-gold drop-shadow-[0_10px_30px_rgba(234,179,8,0.3)]",initial:{scale:.8,y:20},animate:{scale:1,y:0},transition:{type:"spring",stiffness:80,damping:20},children:"2026"})]}),zt.jsxs("div",{className:"space-y-4",children:[zt.jsx(qn.h2,{initial:{opacity:0,y:10},animate:{opacity:1,y:0},transition:{delay:.5},className:"text-lg md:text-2xl font-black tracking-[0.5em] animate-gradient-text uppercase",children:"Happy New Year"}),zt.jsx(qn.p,{initial:{opacity:0},animate:{opacity:1},transition:{delay:1,duration:1.5},className:"text-white/50 text-xs md:text-lg font-light tracking-[0.2em] italic max-w-2xl mx-auto drop-shadow-md",children:mP})]}),zt.jsx(qn.div,{initial:{opacity:0},animate:{opacity:1},transition:{delay:2.5},className:"pt-20 pointer-events-auto",children:zt.jsxs("button",{onClick:b,className:"group px-8 py-3 bg-white/5 hover:bg-yellow-500 hover:text-black transition-all border border-white/10 hover:border-yellow-500 rounded-full flex items-center gap-3 mx-auto backdrop-blur-md",children:[zt.jsx(xA,{className:"w-3.5 h-3.5 group-hover:rotate-180 transition-transform duration-700"}),zt.jsx("span",{className:"uppercase tracking-[0.4em] text-[10px] font-black",children:"Restart"})]})})]})},"celebrating")]})]})},GE=document.getElementById("root");if(!GE)throw new Error("Could not find root element to mount to");const vP=rA.createRoot(GE);vP.render(zt.jsx(Jb.StrictMode,{children:zt.jsx(gP,{})}));
