import{u as Q}from"./vue.f36acd1f.NQ4WeXm8.js";import{I as J,r as C,J as G,K as Y,L as X,M as U,N as F,E as Z,O as ee,u as S,P as te,j as I,Q as k,R as se,S as re,i as ne,T as ae,U as ie,V as oe,W as ce,X as ue,Y as le,f as fe,l as he,c as O,a as j,Z as de,$ as pe,a0 as L,d as ye,t as N,a1 as ge,o as z,a2 as me}from"./entry.ZEsXB0Ay.js";const E=Object.freeze({ignoreUnknown:!1,respectType:!1,respectFunctionNames:!1,respectFunctionProperties:!1,unorderedObjects:!0,unorderedArrays:!1,unorderedSets:!1,excludeKeys:void 0,excludeValues:void 0,replacer:void 0});function _e(r,a){a?a={...E,...a}:a=E;const s=V(a);return s.dispatch(r),s.toString()}const we=Object.freeze(["prototype","__proto__","constructor"]);function V(r){let a="",s=new Map;const t=e=>{a+=e};return{toString(){return a},getContext(){return s},dispatch(e){return r.replacer&&(e=r.replacer(e)),this[e===null?"null":typeof e](e)},object(e){if(e&&typeof e.toJSON=="function")return this.object(e.toJSON());const n=Object.prototype.toString.call(e);let o="";const l=n.length;l<10?o="unknown:["+n+"]":o=n.slice(8,l-1),o=o.toLowerCase();let c=null;if((c=s.get(e))===void 0)s.set(e,s.size);else return this.dispatch("[CIRCULAR:"+c+"]");if(typeof Buffer<"u"&&Buffer.isBuffer&&Buffer.isBuffer(e))return t("buffer:"),t(e.toString("utf8"));if(o!=="object"&&o!=="function"&&o!=="asyncfunction")this[o]?this[o](e):r.ignoreUnknown||this.unkown(e,o);else{let i=Object.keys(e);r.unorderedObjects&&(i=i.sort());let f=[];r.respectType!==!1&&!H(e)&&(f=we),r.excludeKeys&&(i=i.filter(u=>!r.excludeKeys(u)),f=f.filter(u=>!r.excludeKeys(u))),t("object:"+(i.length+f.length)+":");const d=u=>{this.dispatch(u),t(":"),r.excludeValues||this.dispatch(e[u]),t(",")};for(const u of i)d(u);for(const u of f)d(u)}},array(e,n){if(n=n===void 0?r.unorderedArrays!==!1:n,t("array:"+e.length+":"),!n||e.length<=1){for(const c of e)this.dispatch(c);return}const o=new Map,l=e.map(c=>{const i=V(r);i.dispatch(c);for(const[f,d]of i.getContext())o.set(f,d);return i.toString()});return s=o,l.sort(),this.array(l,!1)},date(e){return t("date:"+e.toJSON())},symbol(e){return t("symbol:"+e.toString())},unkown(e,n){if(t(n),!!e&&(t(":"),e&&typeof e.entries=="function"))return this.array(Array.from(e.entries()),!0)},error(e){return t("error:"+e.toString())},boolean(e){return t("bool:"+e)},string(e){t("string:"+e.length+":"),t(e)},function(e){t("fn:"),H(e)?this.dispatch("[native]"):this.dispatch(e.toString()),r.respectFunctionNames!==!1&&this.dispatch("function-name:"+String(e.name)),r.respectFunctionProperties&&this.object(e)},number(e){return t("number:"+e)},xml(e){return t("xml:"+e.toString())},null(){return t("Null")},undefined(){return t("Undefined")},regexp(e){return t("regex:"+e.toString())},uint8array(e){return t("uint8array:"),this.dispatch(Array.prototype.slice.call(e))},uint8clampedarray(e){return t("uint8clampedarray:"),this.dispatch(Array.prototype.slice.call(e))},int8array(e){return t("int8array:"),this.dispatch(Array.prototype.slice.call(e))},uint16array(e){return t("uint16array:"),this.dispatch(Array.prototype.slice.call(e))},int16array(e){return t("int16array:"),this.dispatch(Array.prototype.slice.call(e))},uint32array(e){return t("uint32array:"),this.dispatch(Array.prototype.slice.call(e))},int32array(e){return t("int32array:"),this.dispatch(Array.prototype.slice.call(e))},float32array(e){return t("float32array:"),this.dispatch(Array.prototype.slice.call(e))},float64array(e){return t("float64array:"),this.dispatch(Array.prototype.slice.call(e))},arraybuffer(e){return t("arraybuffer:"),this.dispatch(new Uint8Array(e))},url(e){return t("url:"+e.toString())},map(e){t("map:");const n=[...e];return this.array(n,r.unorderedSets!==!1)},set(e){t("set:");const n=[...e];return this.array(n,r.unorderedSets!==!1)},file(e){return t("file:"),this.dispatch([e.name,e.size,e.type,e.lastModfied])},blob(){if(r.ignoreUnknown)return t("[blob]");throw new Error(`Hashing Blob objects is currently not supported
Use "options.replacer" or "options.ignoreUnknown"
`)},domwindow(){return t("domwindow")},bigint(e){return t("bigint:"+e.toString())},process(){return t("process")},timer(){return t("timer")},pipe(){return t("pipe")},tcp(){return t("tcp")},udp(){return t("udp")},tty(){return t("tty")},statwatcher(){return t("statwatcher")},securecontext(){return t("securecontext")},connection(){return t("connection")},zlib(){return t("zlib")},context(){return t("context")},nodescript(){return t("nodescript")},httpparser(){return t("httpparser")},dataview(){return t("dataview")},signal(){return t("signal")},fsevent(){return t("fsevent")},tlswrap(){return t("tlswrap")}}}const $="[native code] }",be=$.length;function H(r){return typeof r!="function"?!1:Function.prototype.toString.call(r).slice(-be)===$}class b{constructor(a,s){a=this.words=a||[],this.sigBytes=s===void 0?a.length*4:s}toString(a){return(a||ve).stringify(this)}concat(a){if(this.clamp(),this.sigBytes%4)for(let s=0;s<a.sigBytes;s++){const t=a.words[s>>>2]>>>24-s%4*8&255;this.words[this.sigBytes+s>>>2]|=t<<24-(this.sigBytes+s)%4*8}else for(let s=0;s<a.sigBytes;s+=4)this.words[this.sigBytes+s>>>2]=a.words[s>>>2];return this.sigBytes+=a.sigBytes,this}clamp(){this.words[this.sigBytes>>>2]&=4294967295<<32-this.sigBytes%4*8,this.words.length=Math.ceil(this.sigBytes/4)}clone(){return new b([...this.words])}}const ve={stringify(r){const a=[];for(let s=0;s<r.sigBytes;s++){const t=r.words[s>>>2]>>>24-s%4*8&255;a.push((t>>>4).toString(16),(t&15).toString(16))}return a.join("")}},Be={stringify(r){const a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",s=[];for(let t=0;t<r.sigBytes;t+=3){const e=r.words[t>>>2]>>>24-t%4*8&255,n=r.words[t+1>>>2]>>>24-(t+1)%4*8&255,o=r.words[t+2>>>2]>>>24-(t+2)%4*8&255,l=e<<16|n<<8|o;for(let c=0;c<4&&t*8+c*6<r.sigBytes*8;c++)s.push(a.charAt(l>>>6*(3-c)&63))}return s.join("")}},Se={parse(r){const a=r.length,s=[];for(let t=0;t<a;t++)s[t>>>2]|=(r.charCodeAt(t)&255)<<24-t%4*8;return new b(s,a)}},ke={parse(r){return Se.parse(unescape(encodeURIComponent(r)))}};class xe{constructor(){this._data=new b,this._nDataBytes=0,this._minBufferSize=0,this.blockSize=512/32}reset(){this._data=new b,this._nDataBytes=0}_append(a){typeof a=="string"&&(a=ke.parse(a)),this._data.concat(a),this._nDataBytes+=a.sigBytes}_doProcessBlock(a,s){}_process(a){let s,t=this._data.sigBytes/(this.blockSize*4);a?t=Math.ceil(t):t=Math.max((t|0)-this._minBufferSize,0);const e=t*this.blockSize,n=Math.min(e*4,this._data.sigBytes);if(e){for(let o=0;o<e;o+=this.blockSize)this._doProcessBlock(this._data.words,o);s=this._data.words.splice(0,e),this._data.sigBytes-=n}return new b(s,n)}}class De extends xe{update(a){return this._append(a),this._process(),this}finalize(a){a&&this._append(a)}}const q=[1779033703,-1150833019,1013904242,-1521486534,1359893119,-1694144372,528734635,1541459225],Ce=[1116352408,1899447441,-1245643825,-373957723,961987163,1508970993,-1841331548,-1424204075,-670586216,310598401,607225278,1426881987,1925078388,-2132889090,-1680079193,-1046744716,-459576895,-272742522,264347078,604807628,770255983,1249150122,1555081692,1996064986,-1740746414,-1473132947,-1341970488,-1084653625,-958395405,-710438585,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,-2117940946,-1838011259,-1564481375,-1474664885,-1035236496,-949202525,-778901479,-694614492,-200395387,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,-2067236844,-1933114872,-1866530822,-1538233109,-1090935817,-965641998],B=[];class Oe extends De{constructor(){super(...arguments),this._hash=new b([...q])}reset(){super.reset(),this._hash=new b([...q])}_doProcessBlock(a,s){const t=this._hash.words;let e=t[0],n=t[1],o=t[2],l=t[3],c=t[4],i=t[5],f=t[6],d=t[7];for(let u=0;u<64;u++){if(u<16)B[u]=a[s+u]|0;else{const v=B[u-15],_=(v<<25|v>>>7)^(v<<14|v>>>18)^v>>>3,D=B[u-2],w=(D<<15|D>>>17)^(D<<13|D>>>19)^D>>>10;B[u]=_+B[u-7]+w+B[u-16]}const m=c&i^~c&f,p=e&n^e&o^n&o,g=(e<<30|e>>>2)^(e<<19|e>>>13)^(e<<10|e>>>22),h=(c<<26|c>>>6)^(c<<21|c>>>11)^(c<<7|c>>>25),y=d+h+m+Ce[u]+B[u],x=g+p;d=f,f=i,i=c,c=l+y|0,l=o,o=n,n=e,e=y+x|0}t[0]=t[0]+e|0,t[1]=t[1]+n|0,t[2]=t[2]+o|0,t[3]=t[3]+l|0,t[4]=t[4]+c|0,t[5]=t[5]+i|0,t[6]=t[6]+f|0,t[7]=t[7]+d|0}finalize(a){super.finalize(a);const s=this._nDataBytes*8,t=this._data.sigBytes*8;return this._data.words[t>>>5]|=128<<24-t%32,this._data.words[(t+64>>>9<<4)+14]=Math.floor(s/4294967296),this._data.words[(t+64>>>9<<4)+15]=s,this._data.sigBytes=this._data.words.length*4,this._process(),this._hash}}function ze(r){return new Oe().finalize(r).toString(Be)}function Re(r,a={}){const s=typeof r=="string"?r:_e(r,a);return ze(s).slice(0,10)}const Te=r=>r==="defer"||r===!1;function Pe(...r){var m;const a=typeof r[r.length-1]=="string"?r.pop():void 0;typeof r[0]!="string"&&r.unshift(a);let[s,t,e={}]=r;if(typeof s!="string")throw new TypeError("[nuxt] [asyncData] key must be a string.");if(typeof t!="function")throw new TypeError("[nuxt] [asyncData] handler must be a function.");const n=Z(),o=()=>null,l=()=>n.isHydrating?n.payload.data[s]:n.static.data[s];e.server=e.server??!0,e.default=e.default??o,e.getCachedData=e.getCachedData??l,e.lazy=e.lazy??!1,e.immediate=e.immediate??!0,e.deep=e.deep??J.deep,e.dedupe=e.dedupe??"cancel";const c=()=>![null,void 0].includes(e.getCachedData(s));if(!n._asyncData[s]||!e.immediate){(m=n.payload._errors)[s]??(m[s]=null);const p=e.deep?C:G;n._asyncData[s]={data:p(e.getCachedData(s)??e.default()),pending:C(!c()),error:Y(n.payload._errors,s),status:C("idle")}}const i={...n._asyncData[s]};i.refresh=i.execute=(p={})=>{if(n._asyncDataPromises[s]){if(Te(p.dedupe??e.dedupe))return n._asyncDataPromises[s];n._asyncDataPromises[s].cancelled=!0}if((p._initial||n.isHydrating&&p._initial!==!1)&&c())return Promise.resolve(e.getCachedData(s));i.pending.value=!0,i.status.value="pending";const g=new Promise((h,y)=>{try{h(t(n))}catch(x){y(x)}}).then(h=>{if(g.cancelled)return n._asyncDataPromises[s];let y=h;e.transform&&(y=e.transform(h)),e.pick&&(y=Ae(y,e.pick)),n.payload.data[s]=y,i.data.value=y,i.error.value=null,i.status.value="success"}).catch(h=>{if(g.cancelled)return n._asyncDataPromises[s];i.error.value=ee(h),i.data.value=S(e.default()),i.status.value="error"}).finally(()=>{g.cancelled||(i.pending.value=!1,delete n._asyncDataPromises[s])});return n._asyncDataPromises[s]=g,n._asyncDataPromises[s]};const f=()=>i.refresh({_initial:!0}),d=e.server!==!1&&n.payload.serverRendered;{const p=te();if(p&&!p._nuxtOnBeforeMountCbs){p._nuxtOnBeforeMountCbs=[];const h=p._nuxtOnBeforeMountCbs;p&&(X(()=>{h.forEach(y=>{y()}),h.splice(0,h.length)}),U(()=>h.splice(0,h.length)))}d&&n.isHydrating&&(i.error.value||c())?(i.pending.value=!1,i.status.value=i.error.value?"error":"success"):p&&(n.payload.serverRendered&&n.isHydrating||e.lazy)&&e.immediate?p._nuxtOnBeforeMountCbs.push(f):e.immediate&&f(),e.watch&&F(e.watch,()=>i.refresh());const g=n.hook("app:data:refresh",async h=>{(!h||h.includes(s))&&await i.refresh()});p&&U(g)}const u=Promise.resolve(n._asyncDataPromises[s]).then(()=>i);return Object.assign(u,i),u}function Ae(r,a){const s={};for(const t of a)s[t]=r[t];return s}function Fe(r,a,s){const[t={},e]=typeof a=="string"?[{},a]:[a,s],n=I(()=>{let w=r;return typeof w=="function"&&(w=w()),k(w)}),o=t.key||Re([e,typeof n.value=="string"?n.value:"",...Me(t)]);if(!o||typeof o!="string")throw new TypeError("[nuxt] [useFetch] key must be a string: "+o);if(!r)throw new Error("[nuxt] [useFetch] request is missing.");const l=o===e?"$f"+o:o;if(!t.baseURL&&typeof n.value=="string"&&n.value.startsWith("//"))throw new Error('[nuxt] [useFetch] the request URL must not start with "//".');const{server:c,lazy:i,default:f,transform:d,pick:u,watch:m,immediate:p,getCachedData:g,deep:h,...y}=t,x=se({...re,...y,cache:typeof t.cache=="boolean"?void 0:t.cache}),v={server:c,lazy:i,default:f,transform:d,pick:u,immediate:p,getCachedData:g,deep:h,watch:m===!1?[]:[x,n,...m||[]]};let _;return Pe(l,()=>{var M;(M=_==null?void 0:_.abort)==null||M.call(_),_=typeof AbortController<"u"?new AbortController:{};const w=k(t.timeout);return w&&setTimeout(()=>_.abort(),w),(t.$fetch||globalThis.$fetch)(n.value,{signal:_.signal,...x})},v)}function Me(r){var s;const a=[((s=k(r.method))==null?void 0:s.toUpperCase())||"GET",k(r.baseURL)];for(const t of[r.params||r.query]){const e=k(t);if(!e)continue;const n={};for(const[o,l]of Object.entries(e))n[k(o)]=k(l);a.push(n)}return a}const R=async r=>{await new Promise(a=>setTimeout(a,r*1e3))};function P(r){return ae()?(ie(r),!0):!1}function A(r){return typeof r=="function"?r():S(r)}const K=typeof window<"u"&&typeof document<"u";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;function Ue(r,a=1e3,s={}){const{immediate:t=!0,immediateCallback:e=!1}=s;let n=null;const o=C(!1);function l(){n&&(clearInterval(n),n=null)}function c(){o.value=!1,l()}function i(){const f=A(a);f<=0||(o.value=!0,e&&r(),l(),n=setInterval(r,f))}if(t&&K&&i(),ne(a)||typeof a=="function"){const f=F(a,()=>{o.value&&K&&i()});P(f)}return P(c),{isActive:o,pause:c,resume:i}}const je=""+globalThis.__publicAssetsURL("img/ririo.png"),T=new WeakMap;function W(r,a,s={}){const{mode:t="replace",route:e=oe(),router:n=ce(),transform:o=d=>d}=s;T.has(n)||T.set(n,new Map);const l=T.get(n);let c=e.query[r];P(()=>{c=void 0});let i;const f=ue((d,u)=>(i=u,{get(){return d(),o(c!==void 0?c:A(a))},set(m){c!==m&&(c=m,l.set(r,m),u(),le(()=>{if(l.size===0)return;const p=Object.fromEntries(l.entries());l.clear();const{params:g,query:h,hash:y}=e;n[A(t)]({params:g,query:{...h,...p},hash:y})}))}}));return F(()=>e.query[r],d=>{c=d,i()},{flush:"sync"}),f}const Le={class:"container"},Ne={key:0,src:je,width:"48"},Ee=10,He=10,qe=15*60,Ke="チャンネル登録よろしくお願いします！",$e=fe({__name:"senden",setup(r){Q({link:[{rel:"preconnect",href:"https://fonts.googleapis.com"},{rel:"preconnect",href:"https://fonts.gstatic.com",crossorigin:"anonymous"},{rel:"stylesheet",href:"https://fonts.googleapis.com/css2?family=RocknRoll+One&display=swap"}]});const a=C(0),s=C(0),t=I(()=>Ke.split("")),e=W("key"),n=W("channelId"),o=async(c,i)=>(await Fe(`https://www.googleapis.com/youtube/v3/channels?id=${i}&key=${c}&part=statistics`,"$aRONycpEkd")).data.value.items[0].statistics.subscriberCount,l=async()=>{a.value=await o(e.value,n.value),s.value=1,await R(Ee),s.value=0,await R(.5),s.value=2,await R(He),s.value=0};return he(()=>{l()}),Ue(()=>{l()},qe*1e3),(c,i)=>(z(),O("div",Le,[j("h1",{id:"h101",class:L(["animate",{show:S(s)===1}])},[(z(!0),O(de,null,pe(S(t),(f,d)=>(z(),O("span",{style:me({"animation-delay":d*.05+"s"})},N(f),5))),256))],2),j("h1",{id:"h102",class:L({show:S(s)===2})},[ye(" 現在の登録者数："+N(S(a))+"人 ",1),S(s)===2?(z(),O("img",Ne)):ge("",!0)],2)]))}});export{$e as default};
