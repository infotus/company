(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const u of r)if(u.type==="childList")for(const i of u.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function o(r){const u={};return r.integrity&&(u.integrity=r.integrity),r.referrerPolicy&&(u.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?u.credentials="include":r.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function n(r){if(r.ep)return;r.ep=!0;const u=o(r);fetch(r.href,u)}})();function Se(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var X={},ae={exports:{}},a={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var V=Symbol.for("react.element"),Ee=Symbol.for("react.portal"),xe=Symbol.for("react.fragment"),Oe=Symbol.for("react.strict_mode"),Re=Symbol.for("react.profiler"),ke=Symbol.for("react.provider"),$e=Symbol.for("react.context"),Ce=Symbol.for("react.forward_ref"),Pe=Symbol.for("react.suspense"),je=Symbol.for("react.memo"),Ie=Symbol.for("react.lazy"),ue=Symbol.iterator;function Ne(e){return e===null||typeof e!="object"?null:(e=ue&&e[ue]||e["@@iterator"],typeof e=="function"?e:null)}var fe={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},pe=Object.assign,ye={};function A(e,t,o){this.props=e,this.context=t,this.refs=ye,this.updater=o||fe}A.prototype.isReactComponent={};A.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};A.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function de(){}de.prototype=A.prototype;function Z(e,t,o){this.props=e,this.context=t,this.refs=ye,this.updater=o||fe}var ee=Z.prototype=new de;ee.constructor=Z;pe(ee,A.prototype);ee.isPureReactComponent=!0;var ie=Array.isArray,he=Object.prototype.hasOwnProperty,te={current:null},ve={key:!0,ref:!0,__self:!0,__source:!0};function me(e,t,o){var n,r={},u=null,i=null;if(t!=null)for(n in t.ref!==void 0&&(i=t.ref),t.key!==void 0&&(u=""+t.key),t)he.call(t,n)&&!ve.hasOwnProperty(n)&&(r[n]=t[n]);var c=arguments.length-2;if(c===1)r.children=o;else if(1<c){for(var l=Array(c),f=0;f<c;f++)l[f]=arguments[f+2];r.children=l}if(e&&e.defaultProps)for(n in c=e.defaultProps,c)r[n]===void 0&&(r[n]=c[n]);return{$$typeof:V,type:e,key:u,ref:i,props:r,_owner:te.current}}function Te(e,t){return{$$typeof:V,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function re(e){return typeof e=="object"&&e!==null&&e.$$typeof===V}function Ae(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(o){return t[o]})}var ce=/\/+/g;function K(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Ae(""+e.key):t.toString(36)}function Q(e,t,o,n,r){var u=typeof e;(u==="undefined"||u==="boolean")&&(e=null);var i=!1;if(e===null)i=!0;else switch(u){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case V:case Ee:i=!0}}if(i)return i=e,r=r(i),e=n===""?"."+K(i,0):n,ie(r)?(o="",e!=null&&(o=e.replace(ce,"$&/")+"/"),Q(r,t,o,"",function(f){return f})):r!=null&&(re(r)&&(r=Te(r,o+(!r.key||i&&i.key===r.key?"":(""+r.key).replace(ce,"$&/")+"/")+e)),t.push(r)),1;if(i=0,n=n===""?".":n+":",ie(e))for(var c=0;c<e.length;c++){u=e[c];var l=n+K(u,c);i+=Q(u,t,o,l,r)}else if(l=Ne(e),typeof l=="function")for(e=l.call(e),c=0;!(u=e.next()).done;)u=u.value,l=n+K(u,c++),i+=Q(u,t,o,l,r);else if(u==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return i}function W(e,t,o){if(e==null)return e;var n=[],r=0;return Q(e,n,"","",function(u){return t.call(o,u,r++)}),n}function Le(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(o){(e._status===0||e._status===-1)&&(e._status=1,e._result=o)},function(o){(e._status===0||e._status===-1)&&(e._status=2,e._result=o)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var h={current:null},z={transition:null},De={ReactCurrentDispatcher:h,ReactCurrentBatchConfig:z,ReactCurrentOwner:te};function be(){throw Error("act(...) is not supported in production builds of React.")}a.Children={map:W,forEach:function(e,t,o){W(e,function(){t.apply(this,arguments)},o)},count:function(e){var t=0;return W(e,function(){t++}),t},toArray:function(e){return W(e,function(t){return t})||[]},only:function(e){if(!re(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};a.Component=A;a.Fragment=xe;a.Profiler=Re;a.PureComponent=Z;a.StrictMode=Oe;a.Suspense=Pe;a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=De;a.act=be;a.cloneElement=function(e,t,o){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var n=pe({},e.props),r=e.key,u=e.ref,i=e._owner;if(t!=null){if(t.ref!==void 0&&(u=t.ref,i=te.current),t.key!==void 0&&(r=""+t.key),e.type&&e.type.defaultProps)var c=e.type.defaultProps;for(l in t)he.call(t,l)&&!ve.hasOwnProperty(l)&&(n[l]=t[l]===void 0&&c!==void 0?c[l]:t[l])}var l=arguments.length-2;if(l===1)n.children=o;else if(1<l){c=Array(l);for(var f=0;f<l;f++)c[f]=arguments[f+2];n.children=c}return{$$typeof:V,type:e.type,key:r,ref:u,props:n,_owner:i}};a.createContext=function(e){return e={$$typeof:$e,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:ke,_context:e},e.Consumer=e};a.createElement=me;a.createFactory=function(e){var t=me.bind(null,e);return t.type=e,t};a.createRef=function(){return{current:null}};a.forwardRef=function(e){return{$$typeof:Ce,render:e}};a.isValidElement=re;a.lazy=function(e){return{$$typeof:Ie,_payload:{_status:-1,_result:e},_init:Le}};a.memo=function(e,t){return{$$typeof:je,type:e,compare:t===void 0?null:t}};a.startTransition=function(e){var t=z.transition;z.transition={};try{e()}finally{z.transition=t}};a.unstable_act=be;a.useCallback=function(e,t){return h.current.useCallback(e,t)};a.useContext=function(e){return h.current.useContext(e)};a.useDebugValue=function(){};a.useDeferredValue=function(e){return h.current.useDeferredValue(e)};a.useEffect=function(e,t){return h.current.useEffect(e,t)};a.useId=function(){return h.current.useId()};a.useImperativeHandle=function(e,t,o){return h.current.useImperativeHandle(e,t,o)};a.useInsertionEffect=function(e,t){return h.current.useInsertionEffect(e,t)};a.useLayoutEffect=function(e,t){return h.current.useLayoutEffect(e,t)};a.useMemo=function(e,t){return h.current.useMemo(e,t)};a.useReducer=function(e,t,o){return h.current.useReducer(e,t,o)};a.useRef=function(e){return h.current.useRef(e)};a.useState=function(e){return h.current.useState(e)};a.useSyncExternalStore=function(e,t,o){return h.current.useSyncExternalStore(e,t,o)};a.useTransition=function(){return h.current.useTransition()};a.version="18.3.1";ae.exports=a;var w=ae.exports;const se=Se(w);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fe=w,qe=Symbol.for("react.element"),Me=Symbol.for("react.fragment"),Ue=Object.prototype.hasOwnProperty,Ve=Fe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Be={key:!0,ref:!0,__self:!0,__source:!0};function _e(e,t,o){var n,r={},u=null,i=null;o!==void 0&&(u=""+o),t.key!==void 0&&(u=""+t.key),t.ref!==void 0&&(i=t.ref);for(n in t)Ue.call(t,n)&&!Be.hasOwnProperty(n)&&(r[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps,t)r[n]===void 0&&(r[n]=t[n]);return{$$typeof:qe,type:e,key:u,ref:i,props:r,_owner:Ve.current}}X.Fragment=Me;X.jsx=_e;X.jsxs=_e;function H(e,t,o,n){return new(o||(o=Promise))(function(r,u){function i(f){try{l(n.next(f))}catch(s){u(s)}}function c(f){try{l(n.throw(f))}catch(s){u(s)}}function l(f){var s;f.done?r(f.value):(s=f.value,s instanceof o?s:new o(function(y){y(s)})).then(i,c)}l((n=n.apply(e,[])).next())})}function R(e,t){var o,n,r,u,i={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return u={next:c(0),throw:c(1),return:c(2)},typeof Symbol=="function"&&(u[Symbol.iterator]=function(){return this}),u;function c(l){return function(f){return function(s){if(o)throw new TypeError("Generator is already executing.");for(;i;)try{if(o=1,n&&(r=2&s[0]?n.return:s[0]?n.throw||((r=n.return)&&r.call(n),0):n.next)&&!(r=r.call(n,s[1])).done)return r;switch(n=0,r&&(s=[2&s[0],r.value]),s[0]){case 0:case 1:r=s;break;case 4:return i.label++,{value:s[1],done:!1};case 5:i.label++,n=s[1],s=[0];continue;case 7:s=i.ops.pop(),i.trys.pop();continue;default:if(r=i.trys,!((r=r.length>0&&r[r.length-1])||s[0]!==6&&s[0]!==2)){i=0;continue}if(s[0]===3&&(!r||s[1]>r[0]&&s[1]<r[3])){i.label=s[1];break}if(s[0]===6&&i.label<r[1]){i.label=r[1],r=s;break}if(r&&i.label<r[2]){i.label=r[2],i.ops.push(s);break}r[2]&&i.ops.pop(),i.trys.pop();continue}s=t.call(e,i)}catch(y){s=[6,y],n=0}finally{o=r=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([l,f])}}}function Y(e){var t=typeof Symbol=="function"&&Symbol.iterator,o=t&&e[t],n=0;if(o)return o.call(e);if(e&&typeof e.length=="number")return{next:function(){return e&&n>=e.length&&(e=void 0),{value:e&&e[n++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function S(e,t){var o=typeof Symbol=="function"&&e[Symbol.iterator];if(!o)return e;var n,r,u=o.call(e),i=[];try{for(;(t===void 0||t-- >0)&&!(n=u.next()).done;)i.push(n.value)}catch(c){r={error:c}}finally{try{n&&!n.done&&(o=u.return)&&o.call(u)}finally{if(r)throw r.error}}return i}function E(e,t,o){if(arguments.length===2)for(var n,r=0,u=t.length;r<u;r++)!n&&r in t||(n||(n=Array.prototype.slice.call(t,0,r)),n[r]=t[r]);return e.concat(n||Array.prototype.slice.call(t))}function le(e,t,o,n,r){for(var u=[],i=5;i<arguments.length;i++)u[i-5]=arguments[i];return H(this,void 0,void 0,function(){var c,l,f,s,y,v;return R(this,function(d){switch(d.label){case 0:d.trys.push([0,12,13,14]),c=Y(u),l=c.next(),d.label=1;case 1:if(l.done)return[3,11];switch(f=l.value,typeof f){case"string":return[3,2];case"number":return[3,4];case"function":return[3,6]}return[3,8];case 2:return[4,Ge(e,t,f,o,n,r)];case 3:return d.sent(),[3,10];case 4:return[4,we(f)];case 5:return d.sent(),[3,10];case 6:return[4,f.apply(void 0,E([e,t,o,n,r],S(u),!1))];case 7:return d.sent(),[3,10];case 8:return[4,f];case 9:d.sent(),d.label=10;case 10:return l=c.next(),[3,1];case 11:return[3,14];case 12:return s=d.sent(),y={error:s},[3,14];case 13:try{l&&!l.done&&(v=c.return)&&v.call(c)}finally{if(y)throw y.error}return[7];case 14:return[2]}})})}function Ge(e,t,o,n,r,u){return H(this,void 0,void 0,function(){var i,c;return R(this,function(l){switch(l.label){case 0:return i=e.textContent||"",c=function(f,s){var y=S(s).slice(0);return E(E([],S(f),!1),[NaN],!1).findIndex(function(v,d){return y[d]!==v})}(i,o),[4,We(e,E(E([],S(ze(i,t,c)),!1),S(Qe(o,t,c)),!1),n,r,u)];case 1:return l.sent(),[2]}})})}function we(e){return H(this,void 0,void 0,function(){return R(this,function(t){switch(t.label){case 0:return[4,new Promise(function(o){return setTimeout(o,e)})];case 1:return t.sent(),[2]}})})}function We(e,t,o,n,r){return H(this,void 0,void 0,function(){var u,i,c,l,f,s,y,v,d,L,B,j,D;return R(this,function(x){switch(x.label){case 0:if(u=t,r){for(i=0,c=1;c<t.length;c++)if(l=S([t[c-1],t[c]],2),f=l[0],(s=l[1]).length>f.length||s===""){i=c;break}u=t.slice(i,t.length)}x.label=1;case 1:x.trys.push([1,6,7,8]),y=Y(function(F){var I,k,O,$,q,N,C;return R(this,function(_){switch(_.label){case 0:I=function(P){return R(this,function(M){switch(M.label){case 0:return[4,{op:function(U){return requestAnimationFrame(function(){return U.textContent=P})},opCode:function(U){var J=U.textContent||"";return P===""||J.length>P.length?"DELETE":"WRITING"}}];case 1:return M.sent(),[2]}})},_.label=1;case 1:_.trys.push([1,6,7,8]),k=Y(F),O=k.next(),_.label=2;case 2:return O.done?[3,5]:($=O.value,[5,I($)]);case 3:_.sent(),_.label=4;case 4:return O=k.next(),[3,2];case 5:return[3,8];case 6:return q=_.sent(),N={error:q},[3,8];case 7:try{O&&!O.done&&(C=k.return)&&C.call(k)}finally{if(N)throw N.error}return[7];case 8:return[2]}})}(u)),v=y.next(),x.label=2;case 2:return v.done?[3,5]:(d=v.value,L=d.opCode(e)==="WRITING"?o+o*(Math.random()-.5):n+n*(Math.random()-.5),d.op(e),[4,we(L)]);case 3:x.sent(),x.label=4;case 4:return v=y.next(),[3,2];case 5:return[3,8];case 6:return B=x.sent(),j={error:B},[3,8];case 7:try{v&&!v.done&&(D=y.return)&&D.call(y)}finally{if(j)throw j.error}return[7];case 8:return[2]}})})}function Qe(e,t,o){var n,r;return o===void 0&&(o=0),R(this,function(u){switch(u.label){case 0:n=t(e),r=n.length,u.label=1;case 1:return o<r?[4,n.slice(0,++o).join("")]:[3,3];case 2:return u.sent(),[3,1];case 3:return[2]}})}function ze(e,t,o){var n,r;return o===void 0&&(o=0),R(this,function(u){switch(u.label){case 0:n=t(e),r=n.length,u.label=1;case 1:return r>o?[4,n.slice(0,--r).join("")]:[3,3];case 2:return u.sent(),[3,1];case 3:return[2]}})}var He="index-module_type__E-SaG";(function(e,t){t===void 0&&(t={});var o=t.insertAt;if(typeof document<"u"){var n=document.head||document.getElementsByTagName("head")[0],r=document.createElement("style");r.type="text/css",o==="top"&&n.firstChild?n.insertBefore(r,n.firstChild):n.appendChild(r),r.styleSheet?r.styleSheet.cssText=e:r.appendChild(document.createTextNode(e))}})(`.index-module_type__E-SaG::after {
  content: '|';
  animation: index-module_cursor__PQg0P 1.1s infinite step-start;
}

@keyframes index-module_cursor__PQg0P {
  50% {
    opacity: 0;
  }
}
`);w.memo(w.forwardRef(function(e,t){var o=e.sequence,n=e.repeat,r=e.className,u=e.speed,i=u===void 0?40:u,c=e.deletionSpeed,l=e.omitDeletionAnimation,f=l!==void 0&&l,s=e.preRenderFirstString,y=s!==void 0&&s,v=e.wrapper,d=v===void 0?"span":v,L=e.splitter,B=L===void 0?function(p){return E([],S(p),!1)}:L,j=e.cursor,D=j===void 0||j,x=e.style,F=function(p,m){var g={};for(var b in p)Object.prototype.hasOwnProperty.call(p,b)&&m.indexOf(b)<0&&(g[b]=p[b]);if(p!=null&&typeof Object.getOwnPropertySymbols=="function"){var T=0;for(b=Object.getOwnPropertySymbols(p);T<b.length;T++)m.indexOf(b[T])<0&&Object.prototype.propertyIsEnumerable.call(p,b[T])&&(g[b[T]]=p[b[T]])}return g}(e,["sequence","repeat","className","speed","deletionSpeed","omitDeletionAnimation","preRenderFirstString","wrapper","splitter","cursor","style"]),I=F["aria-label"],k=F["aria-hidden"],O=F.role;c||(c=i);var $=new Array(2).fill(40);[i,c].forEach(function(p,m){switch(typeof p){case"number":$[m]=Math.abs(p-100);break;case"object":var g=p.type,b=p.value;if(typeof b!="number")break;g==="keyStrokeDelayInMs"&&($[m]=b)}});var q,N,C,_,P,M,U=$[0],J=$[1],G=function(p,m){m===void 0&&(m=null);var g=w.useRef(m);return w.useEffect(function(){p&&(typeof p=="function"?p(g.current):p.current=g.current)},[p]),g}(t),ne=He;q=r?"".concat(D?ne+" ":"").concat(r):D?ne:"",N=w.useRef(function(){var p,m=o;n===1/0?p=le:typeof n=="number"&&(m=Array(1+n).fill(o).flat());var g=p?E(E([],S(m),!1),[p],!1):E([],S(m),!1);return le.apply(void 0,E([G.current,B,U,J,f],S(g),!1)),function(){G.current}}),C=w.useRef(),_=w.useRef(!1),P=w.useRef(!1),M=S(w.useState(0),2)[1],_.current&&(P.current=!0),w.useEffect(function(){return _.current||(C.current=N.current(),_.current=!0),M(function(p){return p+1}),function(){P.current&&C.current&&C.current()}},[]);var ge=d,oe=y?o.find(function(p){return typeof p=="string"})||"":null;return se.createElement(ge,{"aria-hidden":k,"aria-label":I,role:O,style:x,className:q,children:I?se.createElement("span",{"aria-hidden":"true",ref:G,children:oe}):oe,ref:I?void 0:G})}),function(e,t){return!0});
