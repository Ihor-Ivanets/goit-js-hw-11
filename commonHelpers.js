import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */import{f as m,i as h}from"./assets/vendor-9808d4ac.js";let n=null;const f=document.querySelector("#datetime-picker"),o=document.querySelector("[data-start]"),y=document.querySelector("[data-days]"),p=document.querySelector("[data-hours]"),S=document.querySelector("[data-minutes]"),b=document.querySelector("[data-seconds]");o.addEventListener("click",v);const I={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){g(t)}};function g(t){Date.now()<t[0].getTime()?(n=t[0],o.removeAttribute("disabled")):(o.setAttribute("disabled",""),h.error({title:"Error",message:"Please choose a date in the future",position:"topRight"}))}m("#datetime-picker",I);function q(t){const u=Math.floor(t/864e5),c=Math.floor(t%864e5/36e5),d=Math.floor(t%864e5%36e5/6e4),l=String(Math.floor(t%864e5%36e5%6e4/1e3)).padStart(2,"0");return{days:u,hours:c,minutes:d,seconds:l}}function v(){const t=setInterval(()=>{if(n<=Date.now()){clearInterval(t);return}const{days:r,hours:a,minutes:s,seconds:i}=q(n-Date.now());y.textContent=e(r),p.textContent=e(a),S.textContent=e(s),b.textContent=e(i),o.setAttribute("disabled",""),f.setAttribute("disabled","")},1e3)}function e(t){return String(t).padStart(2,"0")}
//# sourceMappingURL=commonHelpers.js.map
