import{e as p,f as l,o as u,c as m,t as f,m as i,g as d}from"./DZ8GocjN.js";const k=p({__name:"OutLineText",props:{label:{},stroke:{default:6},color:{default:"black"}},setup(a){const e=a,n=l(()=>{const t=[],s=1/e.stroke;for(let o=0;o<2*Math.PI;o+=s){const r=Math.cos(o)*e.stroke,c=Math.sin(o)*e.stroke;t.push(`${r}px ${c}px ${e.color}`)}return{textShadow:t.join(", ")}});return(t,s)=>(u(),m("span",i(t.$attrs,{style:d(n)}),f(t.label),17))}});export{k as _};