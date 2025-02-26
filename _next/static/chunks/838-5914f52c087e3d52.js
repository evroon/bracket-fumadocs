"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[838],{5587:(e,t,n)=>{n.d(t,{Eq:()=>l});var r=new WeakMap,o=new WeakMap,u={},i=0,a=function(e){return e&&(e.host||a(e.parentNode))},s=function(e,t,n,s){var l=(Array.isArray(e)?e:[e]).map(function(e){if(t.contains(e))return e;var n=a(e);return n&&t.contains(n)?n:(console.error("aria-hidden",e,"in not contained inside",t,". Doing nothing"),null)}).filter(function(e){return!!e});u[n]||(u[n]=new WeakMap);var d=u[n],c=[],f=new Set,v=new Set(l),m=function(e){!e||f.has(e)||(f.add(e),m(e.parentNode))};l.forEach(m);var p=function(e){!e||v.has(e)||Array.prototype.forEach.call(e.children,function(e){if(f.has(e))p(e);else try{var t=e.getAttribute(s),u=null!==t&&"false"!==t,i=(r.get(e)||0)+1,a=(d.get(e)||0)+1;r.set(e,i),d.set(e,a),c.push(e),1===i&&u&&o.set(e,!0),1===a&&e.setAttribute(n,"true"),u||e.setAttribute(s,"true")}catch(t){console.error("aria-hidden: cannot operate on ",e,t)}})};return p(t),f.clear(),i++,function(){c.forEach(function(e){var t=r.get(e)-1,u=d.get(e)-1;r.set(e,t),d.set(e,u),t||(o.has(e)||e.removeAttribute(s),o.delete(e)),u||e.removeAttribute(n)}),--i||(r=new WeakMap,r=new WeakMap,o=new WeakMap,u={})}},l=function(e,t,n){void 0===n&&(n="data-aria-hidden");var r,o=Array.from(Array.isArray(e)?e:[e]),u=t||(r=e,"undefined"==typeof document?null:(Array.isArray(r)?r[0]:r).ownerDocument.body);return u?(o.push.apply(o,Array.from(u.querySelectorAll("[aria-live]"))),s(o,u,n,"aria-hidden")):function(){return null}}},9674:(e,t,n)=>{n.d(t,{qW:()=>f});var r,o=n(2115),u=n(3610),i=n(3360),a=n(8068),s=n(1524),l=n(5155),d="dismissableLayer.update",c=o.createContext({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set}),f=o.forwardRef((e,t)=>{var n,f;let{disableOutsidePointerEvents:p=!1,onEscapeKeyDown:E,onPointerDownOutside:y,onFocusOutside:h,onInteractOutside:b,onDismiss:w,...g}=e,L=o.useContext(c),[A,C]=o.useState(null),k=null!==(f=null==A?void 0:A.ownerDocument)&&void 0!==f?f:null===(n=globalThis)||void 0===n?void 0:n.document,[,D]=o.useState({}),P=(0,a.s)(t,e=>C(e)),S=Array.from(L.layers),[N]=[...L.layersWithOutsidePointerEventsDisabled].slice(-1),T=S.indexOf(N),x=A?S.indexOf(A):-1,O=L.layersWithOutsidePointerEventsDisabled.size>0,F=x>=T,W=function(e){var t;let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null===(t=globalThis)||void 0===t?void 0:t.document,r=(0,s.c)(e),u=o.useRef(!1),i=o.useRef(()=>{});return o.useEffect(()=>{let e=e=>{if(e.target&&!u.current){let t=function(){m("dismissableLayer.pointerDownOutside",r,o,{discrete:!0})},o={originalEvent:e};"touch"===e.pointerType?(n.removeEventListener("click",i.current),i.current=t,n.addEventListener("click",i.current,{once:!0})):t()}else n.removeEventListener("click",i.current);u.current=!1},t=window.setTimeout(()=>{n.addEventListener("pointerdown",e)},0);return()=>{window.clearTimeout(t),n.removeEventListener("pointerdown",e),n.removeEventListener("click",i.current)}},[n,r]),{onPointerDownCapture:()=>u.current=!0}}(e=>{let t=e.target,n=[...L.branches].some(e=>e.contains(t));!F||n||(null==y||y(e),null==b||b(e),e.defaultPrevented||null==w||w())},k),R=function(e){var t;let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null===(t=globalThis)||void 0===t?void 0:t.document,r=(0,s.c)(e),u=o.useRef(!1);return o.useEffect(()=>{let e=e=>{e.target&&!u.current&&m("dismissableLayer.focusOutside",r,{originalEvent:e},{discrete:!1})};return n.addEventListener("focusin",e),()=>n.removeEventListener("focusin",e)},[n,r]),{onFocusCapture:()=>u.current=!0,onBlurCapture:()=>u.current=!1}}(e=>{let t=e.target;[...L.branches].some(e=>e.contains(t))||(null==h||h(e),null==b||b(e),e.defaultPrevented||null==w||w())},k);return!function(e,t=globalThis?.document){let n=(0,s.c)(e);o.useEffect(()=>{let e=e=>{"Escape"===e.key&&n(e)};return t.addEventListener("keydown",e,{capture:!0}),()=>t.removeEventListener("keydown",e,{capture:!0})},[n,t])}(e=>{x!==L.layers.size-1||(null==E||E(e),!e.defaultPrevented&&w&&(e.preventDefault(),w()))},k),o.useEffect(()=>{if(A)return p&&(0===L.layersWithOutsidePointerEventsDisabled.size&&(r=k.body.style.pointerEvents,k.body.style.pointerEvents="none"),L.layersWithOutsidePointerEventsDisabled.add(A)),L.layers.add(A),v(),()=>{p&&1===L.layersWithOutsidePointerEventsDisabled.size&&(k.body.style.pointerEvents=r)}},[A,k,p,L]),o.useEffect(()=>()=>{A&&(L.layers.delete(A),L.layersWithOutsidePointerEventsDisabled.delete(A),v())},[A,L]),o.useEffect(()=>{let e=()=>D({});return document.addEventListener(d,e),()=>document.removeEventListener(d,e)},[]),(0,l.jsx)(i.sG.div,{...g,ref:P,style:{pointerEvents:O?F?"auto":"none":void 0,...e.style},onFocusCapture:(0,u.m)(e.onFocusCapture,R.onFocusCapture),onBlurCapture:(0,u.m)(e.onBlurCapture,R.onBlurCapture),onPointerDownCapture:(0,u.m)(e.onPointerDownCapture,W.onPointerDownCapture)})});function v(){let e=new CustomEvent(d);document.dispatchEvent(e)}function m(e,t,n,r){let{discrete:o}=r,u=n.originalEvent.target,a=new CustomEvent(e,{bubbles:!1,cancelable:!0,detail:n});t&&u.addEventListener(e,t,{once:!0}),o?(0,i.hO)(u,a):u.dispatchEvent(a)}f.displayName="DismissableLayer",o.forwardRef((e,t)=>{let n=o.useContext(c),r=o.useRef(null),u=(0,a.s)(t,r);return o.useEffect(()=>{let e=r.current;if(e)return n.branches.add(e),()=>{n.branches.delete(e)}},[n.branches]),(0,l.jsx)(i.sG.div,{...e,ref:u})}).displayName="DismissableLayerBranch"},2292:(e,t,n)=>{n.d(t,{Oh:()=>u});var r=n(2115),o=0;function u(){r.useEffect(()=>{var e,t;let n=document.querySelectorAll("[data-radix-focus-guard]");return document.body.insertAdjacentElement("afterbegin",null!==(e=n[0])&&void 0!==e?e:i()),document.body.insertAdjacentElement("beforeend",null!==(t=n[1])&&void 0!==t?t:i()),o++,()=>{1===o&&document.querySelectorAll("[data-radix-focus-guard]").forEach(e=>e.remove()),o--}},[])}function i(){let e=document.createElement("span");return e.setAttribute("data-radix-focus-guard",""),e.tabIndex=0,e.style.outline="none",e.style.opacity="0",e.style.position="fixed",e.style.pointerEvents="none",e}},196:(e,t,n)=>{n.d(t,{n:()=>c});var r=n(2115),o=n(8068),u=n(3360),i=n(1524),a=n(5155),s="focusScope.autoFocusOnMount",l="focusScope.autoFocusOnUnmount",d={bubbles:!1,cancelable:!0},c=r.forwardRef((e,t)=>{let{loop:n=!1,trapped:c=!1,onMountAutoFocus:E,onUnmountAutoFocus:y,...h}=e,[b,w]=r.useState(null),g=(0,i.c)(E),L=(0,i.c)(y),A=r.useRef(null),C=(0,o.s)(t,e=>w(e)),k=r.useRef({paused:!1,pause(){this.paused=!0},resume(){this.paused=!1}}).current;r.useEffect(()=>{if(c){let e=function(e){if(k.paused||!b)return;let t=e.target;b.contains(t)?A.current=t:m(A.current,{select:!0})},t=function(e){if(k.paused||!b)return;let t=e.relatedTarget;null===t||b.contains(t)||m(A.current,{select:!0})};document.addEventListener("focusin",e),document.addEventListener("focusout",t);let n=new MutationObserver(function(e){if(document.activeElement===document.body)for(let t of e)t.removedNodes.length>0&&m(b)});return b&&n.observe(b,{childList:!0,subtree:!0}),()=>{document.removeEventListener("focusin",e),document.removeEventListener("focusout",t),n.disconnect()}}},[c,b,k.paused]),r.useEffect(()=>{if(b){p.add(k);let e=document.activeElement;if(!b.contains(e)){let t=new CustomEvent(s,d);b.addEventListener(s,g),b.dispatchEvent(t),t.defaultPrevented||(function(e){let{select:t=!1}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=document.activeElement;for(let r of e)if(m(r,{select:t}),document.activeElement!==n)return}(f(b).filter(e=>"A"!==e.tagName),{select:!0}),document.activeElement===e&&m(b))}return()=>{b.removeEventListener(s,g),setTimeout(()=>{let t=new CustomEvent(l,d);b.addEventListener(l,L),b.dispatchEvent(t),t.defaultPrevented||m(null!=e?e:document.body,{select:!0}),b.removeEventListener(l,L),p.remove(k)},0)}}},[b,g,L,k]);let D=r.useCallback(e=>{if(!n&&!c||k.paused)return;let t="Tab"===e.key&&!e.altKey&&!e.ctrlKey&&!e.metaKey,r=document.activeElement;if(t&&r){let t=e.currentTarget,[o,u]=function(e){let t=f(e);return[v(t,e),v(t.reverse(),e)]}(t);o&&u?e.shiftKey||r!==u?e.shiftKey&&r===o&&(e.preventDefault(),n&&m(u,{select:!0})):(e.preventDefault(),n&&m(o,{select:!0})):r===t&&e.preventDefault()}},[n,c,k.paused]);return(0,a.jsx)(u.sG.div,{tabIndex:-1,...h,ref:C,onKeyDown:D})});function f(e){let t=[],n=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:e=>{let t="INPUT"===e.tagName&&"hidden"===e.type;return e.disabled||e.hidden||t?NodeFilter.FILTER_SKIP:e.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;n.nextNode();)t.push(n.currentNode);return t}function v(e,t){for(let n of e)if(!function(e,t){let{upTo:n}=t;if("hidden"===getComputedStyle(e).visibility)return!0;for(;e&&(void 0===n||e!==n);){if("none"===getComputedStyle(e).display)return!0;e=e.parentElement}return!1}(n,{upTo:t}))return n}function m(e){let{select:t=!1}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(e&&e.focus){var n;let r=document.activeElement;e.focus({preventScroll:!0}),e!==r&&(n=e)instanceof HTMLInputElement&&"select"in n&&t&&e.select()}}c.displayName="FocusScope";var p=function(){let e=[];return{add(t){let n=e[0];t!==n&&(null==n||n.pause()),(e=E(e,t)).unshift(t)},remove(t){var n;null===(n=(e=E(e,t))[0])||void 0===n||n.resume()}}}();function E(e,t){let n=[...e],r=n.indexOf(t);return -1!==r&&n.splice(r,1),n}},7323:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(2115),o=n(7650),u=n(3360),i=n(6611),a=n(5155),s=r.forwardRef((e,t)=>{var n,s;let{container:l,...d}=e,[c,f]=r.useState(!1);(0,i.N)(()=>f(!0),[]);let v=l||c&&(null===(s=globalThis)||void 0===s?void 0:null===(n=s.document)||void 0===n?void 0:n.body);return v?o.createPortal((0,a.jsx)(u.sG.div,{...d,ref:t}),v):null});s.displayName="Portal"},2591:(e,t,n)=>{n.d(t,{A:()=>r});let r=(0,n(4057).A)("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]])}}]);