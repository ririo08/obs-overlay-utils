function r(){return{encodeBase64:e=>{const n=JSON.stringify(e);return btoa(encodeURIComponent(n))},decodeBase64:e=>{const n=decodeURIComponent(atob(e));return JSON.parse(n)}}}export{r as u};
