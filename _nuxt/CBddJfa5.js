import{r as y,i as b,k as w,ag as T,ae as v,g as S}from"./DZ8GocjN.js";function m(e){return T()?(v(e),!0):!1}function f(e){return typeof e=="function"?e():S(e)}const p=typeof window<"u"&&typeof document<"u";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const d=()=>{};function W(e,n){function i(...t){return new Promise((s,r)=>{Promise.resolve(e(()=>n.apply(this,t),{fn:n,thisArg:this,args:t})).then(s).catch(r)})}return i}function g(e,n={}){let i,t,s=d;const r=o=>{clearTimeout(o),s(),s=d};return o=>{const c=f(e),u=f(n.maxWait);return i&&r(i),c<=0||u!==void 0&&u<=0?(t&&(r(t),t=null),Promise.resolve(o())):new Promise((a,h)=>{s=n.rejectOnCancel?h:a,u&&!t&&(t=setTimeout(()=>{i&&r(i),t=null,a(o())},u)),i=setTimeout(()=>{t&&r(t),t=null,a(o())},c)})}}function C(e,n=200,i={}){return W(g(n,i),e)}function D(e,n=1e3,i={}){const{immediate:t=!0,immediateCallback:s=!1}=i;let r=null;const l=y(!1);function o(){r&&(clearInterval(r),r=null)}function c(){l.value=!1,o()}function u(){const a=f(n);a<=0||(l.value=!0,s&&e(),o(),l.value&&(r=setInterval(e,a)))}if(t&&p&&u(),b(n)||typeof n=="function"){const a=w(n,()=>{l.value&&p&&u()});m(a)}return m(c),{isActive:l,pause:c,resume:u}}export{C as a,f as b,m as t,D as u};