import{a3 as U,f as j,u as z,r as O,h as R,s as H,o as S,c as P,a as B,J as I,a4 as K,M as v,n as $,d as Q,t as x,F as J,a5 as G,a6 as W,H as Y,a7 as C,a8 as X,z as Z,a9 as A,v as ee,aa as V,ab as F,ac as ae,x as te,ad as se,k as D,ae as ne,af as oe,ag as re,ah as ce,ai as ie,aj as ue,b as le}from"./B3JOFo7I.js";import{b as de,h as fe,t as pe,c as N,a as me}from"./CR5NFDkg.js";const k=async t=>{await new Promise(n=>setTimeout(n,t*1e3))},he=U("/img/ririo.png"),ye={class:"container"},_e={key:0,src:he,width:"48"},ge=10,ve=10,De=15*60,be=j({__name:"SendenDisplay",props:{count:{default:0},message:{default:"チャンネル登録よろしくお願いします！"}},emits:["update"],setup(t,{emit:n}){z({link:[{rel:"preconnect",href:"https://fonts.googleapis.com"},{rel:"preconnect",href:"https://fonts.gstatic.com",crossorigin:"anonymous"},{rel:"stylesheet",href:"https://fonts.googleapis.com/css2?family=RocknRoll+One&display=swap"}]});const s=t,r=n,e=O(0),a=R(()=>s.count.toLocaleString("ja-JP")),u=R(()=>s.message.split("")),i=async()=>{r("update"),e.value=1,await k(ge),e.value=0,await k(.5),e.value=2,await k(ve),e.value=0};return H(()=>{i()}),de(()=>{i()},De*1e3),(m,p)=>(S(),P("div",ye,[B("h1",{id:"h101",class:$(["animate",{show:v(e)===1}])},[(S(!0),P(I,null,K(v(u),(o,l)=>(S(),P("span",{key:l,style:G({"animation-delay":l*.05+"s"})},x(o),5))),128))],2),B("h1",{id:"h102",class:$({show:v(e)===2})},[Q(" 現在の登録者数："+x(v(a))+"人 ",1),v(e)===2?(S(),P("img",_e)):J("",!0)],2)]))}}),we=()=>W("color-mode").value,Ce=t=>t==="defer"||t===!1;function Se(...t){var b;const n=typeof t[t.length-1]=="string"?t.pop():void 0;typeof t[0]!="string"&&t.unshift(n);let[s,r,e={}]=t;if(typeof s!="string")throw new TypeError("[nuxt] [asyncData] key must be a string.");if(typeof r!="function")throw new TypeError("[nuxt] [asyncData] handler must be a function.");const a=Y(),u=r,i=()=>C.value,m=()=>a.isHydrating?a.payload.data[s]:a.static.data[s];e.server=e.server??!0,e.default=e.default??i,e.getCachedData=e.getCachedData??m,e.lazy=e.lazy??!1,e.immediate=e.immediate??!0,e.deep=e.deep??C.deep,e.dedupe=e.dedupe??"cancel";const p=()=>e.getCachedData(s,a)!=null;if(!a._asyncData[s]||!e.immediate){(b=a.payload._errors)[s]??(b[s]=C.errorValue);const f=e.deep?O:X;a._asyncData[s]={data:f(e.getCachedData(s,a)??e.default()),pending:O(!p()),error:Z(a.payload._errors,s),status:O("idle"),_default:e.default}}const o={...a._asyncData[s]};delete o._default,o.refresh=o.execute=(f={})=>{if(a._asyncDataPromises[s]){if(Ce(f.dedupe??e.dedupe))return a._asyncDataPromises[s];a._asyncDataPromises[s].cancelled=!0}if((f._initial||a.isHydrating&&f._initial!==!1)&&p())return Promise.resolve(e.getCachedData(s,a));o.pending.value=!0,o.status.value="pending";const y=new Promise((h,c)=>{try{h(u(a))}catch(w){c(w)}}).then(async h=>{if(y.cancelled)return a._asyncDataPromises[s];let c=h;e.transform&&(c=await e.transform(h)),e.pick&&(c=Oe(c,e.pick)),a.payload.data[s]=c,o.data.value=c,o.error.value=C.errorValue,o.status.value="success"}).catch(h=>{if(y.cancelled)return a._asyncDataPromises[s];o.error.value=ae(h),o.data.value=v(e.default()),o.status.value="error"}).finally(()=>{y.cancelled||(o.pending.value=!1,delete a._asyncDataPromises[s])});return a._asyncDataPromises[s]=y,a._asyncDataPromises[s]},o.clear=()=>Pe(a,s);const l=()=>o.refresh({_initial:!0}),_=e.server!==!1&&a.payload.serverRendered;{const f=te();if(f&&!f._nuxtOnBeforeMountCbs){f._nuxtOnBeforeMountCbs=[];const c=f._nuxtOnBeforeMountCbs;A(()=>{c.forEach(w=>{w()}),c.splice(0,c.length)}),ee(()=>c.splice(0,c.length))}_&&a.isHydrating&&(o.error.value||p())?(o.pending.value=!1,o.status.value=o.error.value?"error":"success"):f&&(a.payload.serverRendered&&a.isHydrating||e.lazy)&&e.immediate?f._nuxtOnBeforeMountCbs.push(l):e.immediate&&l();const y=se();if(e.watch){const c=V(e.watch,()=>o.refresh());y&&F(c)}const h=a.hook("app:data:refresh",async c=>{(!c||c.includes(s))&&await o.refresh()});y&&F(h)}const d=Promise.resolve(a._asyncDataPromises[s]).then(()=>o);return Object.assign(d,o),d}function Pe(t,n){n in t.payload.data&&(t.payload.data[n]=void 0),n in t.payload._errors&&(t.payload._errors[n]=C.errorValue),t._asyncData[n]&&(t._asyncData[n].data.value=void 0,t._asyncData[n].error.value=C.errorValue,t._asyncData[n].pending.value=!1,t._asyncData[n].status.value="idle"),n in t._asyncDataPromises&&(t._asyncDataPromises[n].cancelled=!0,t._asyncDataPromises[n]=void 0)}function Oe(t,n){const s={};for(const r of n)s[r]=t[r];return s}function Re(t,n,s){const[r={},e]=[{},n],a=R(()=>D(t)),u=r.key||fe([e,typeof a.value=="string"?a.value:"",...Te(r)]);if(!u||typeof u!="string")throw new TypeError("[nuxt] [useFetch] key must be a string: "+u);if(!t)throw new Error("[nuxt] [useFetch] request is missing.");const i=u===e?"$f"+u:u;if(!r.baseURL&&typeof a.value=="string"&&a.value[0]==="/"&&a.value[1]==="/")throw new Error('[nuxt] [useFetch] the request URL must not start with "//".');const{server:m,lazy:p,default:o,transform:l,pick:_,watch:d,immediate:b,getCachedData:f,deep:y,dedupe:h,...c}=r,w=ne({...oe,...c,cache:typeof r.cache=="boolean"?void 0:r.cache}),L={server:m,lazy:p,default:o,transform:l,pick:_,immediate:b,getCachedData:f,deep:y,dedupe:h,watch:d===!1?[]:[w,a,...d||[]]};let g;return Se(i,()=>{var M;(M=g==null?void 0:g.abort)==null||M.call(g),g=typeof AbortController<"u"?new AbortController:{};const E=D(r.timeout);let T;return E&&(T=setTimeout(()=>g.abort(),E),g.signal.onabort=()=>clearTimeout(T)),(r.$fetch||globalThis.$fetch)(a.value,{signal:g.signal,...w}).finally(()=>{clearTimeout(T)})},L)}function Te(t){var s;const n=[((s=D(t.method))==null?void 0:s.toUpperCase())||"GET",D(t.baseURL)];for(const r of[t.params||t.query]){const e=D(r);if(!e)continue;const a={};for(const[u,i]of Object.entries(e))a[D(u)]=D(i);n.push(a)}return n}const q=new WeakMap;function ke(t,n,s={}){const{mode:r="replace",route:e=re(),router:a=ce(),transform:u=l=>l}=s;q.has(a)||q.set(a,new Map);const i=q.get(a);let m=e.query[t];pe(()=>{m=void 0});let p;const o=ie((l,_)=>(p=_,{get(){return l(),u(m!==void 0?m:N(n))},set(d){m!==d&&(m=d===n||d===null?void 0:d,i.set(t,d===n||d===null?void 0:d),_(),ue(()=>{if(i.size===0)return;const b=Object.fromEntries(i.entries());i.clear();const{params:f,query:y,hash:h}=e;a[N(r)]({params:f,query:{...y,...b},hash:h})}))}}));return V(()=>e.query[t],l=>{m=l,p()},{flush:"sync"}),o}const $e=j({__name:"senden",setup(t){z({link:[{rel:"preconnect",href:"https://fonts.googleapis.com"},{rel:"preconnect",href:"https://fonts.gstatic.com",crossorigin:"anonymous"},{rel:"stylesheet",href:"https://fonts.googleapis.com/css2?family=RocknRoll+One&display=swap"}]});const n=we();n.value="light";const{decodeBase64:s}=me(),r=O(0),e=R(()=>{const i=ke("value");return console.log(i.value),s(i.value)}),a=async(i,m)=>{var o,l,_;const p=await Re(`https://www.googleapis.com/youtube/v3/channels?id=${m}&key=${i}&part=statistics`,"$aRONycpEkd");if((o=p.data.value)!=null&&o.items&&(l=p.data.value.items[0].statistics)!=null&&l.subscriberCount){const d=parseInt((_=p.data.value.items[0].statistics)==null?void 0:_.subscriberCount);return isNaN(d)?0:d}return 0},u=async()=>{r.value=await a(e.value.key,e.value.channelId)};return(i,m)=>{const p=be;return S(),P("section",null,[le(p,{count:v(r),onUpdate:u},null,8,["count"])])}}});export{$e as default};