import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */const e=document.querySelector(".feedback-form"),a="feedback-form-state",m=JSON.parse(localStorage.getItem(a))||{};e.email.value=m.email||"";e.message.value=m.message||"";e.addEventListener("input",t=>{const{name:s,value:r}=t.target,o={...m,[s]:r.trim()};localStorage.setItem(a,JSON.stringify(o))});e.addEventListener("submit",t=>{t.preventDefault(),e.email.value.trim()&&e.message.value.trim()&&(console.log({email:e.email.value.trim(),message:e.message.value.trim()}),localStorage.removeItem(a),e.reset())});
//# sourceMappingURL=commonHelpers2.js.map
