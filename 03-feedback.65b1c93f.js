function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,o=/^0b[01]+$/i,i=/^0o[0-7]+$/i,f=parseInt,u="object"==typeof t&&t&&t.Object===Object&&t,a="object"==typeof self&&self&&self.Object===Object&&self,c=u||a||Function("return this")(),l=Object.prototype.toString,d=Math.max,s=Math.min,v=function(){return c.Date.now()};function m(e,t,n){var r,o,i,f,u,a,c=0,l=!1,m=!1,g=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function y(t){var n=r,i=o;return r=o=void 0,c=t,f=e.apply(i,n)}function T(e){return c=e,u=setTimeout(O,t),l?y(e):f}function j(e){var n=e-a;return void 0===a||n>=t||n<0||m&&e-c>=i}function O(){var e=v();if(j(e))return h(e);u=setTimeout(O,function(e){var n=t-(e-a);return m?s(n,i-(e-c)):n}(e))}function h(e){return u=void 0,g&&r?y(e):(r=o=void 0,f)}function E(){var e=v(),n=j(e);if(r=arguments,o=this,a=e,n){if(void 0===u)return T(a);if(m)return u=setTimeout(O,t),y(a)}return void 0===u&&(u=setTimeout(O,t)),f}return t=b(t)||0,p(n)&&(l=!!n.leading,i=(m="maxWait"in n)?d(b(n.maxWait)||0,t):i,g="trailing"in n?!!n.trailing:g),E.cancel=function(){void 0!==u&&clearTimeout(u),c=0,r=a=o=u=void 0},E.flush=function(){return void 0===u?f:h(v())},E}function p(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function b(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==l.call(e)}(e))return NaN;if(p(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=p(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(n,"");var u=o.test(e);return u||i.test(e)?f(e.slice(2),u?2:8):r.test(e)?NaN:+e}const g=e((function(e,t,n){var r=!0,o=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return p(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),m(e,t,{leading:r,maxWait:t,trailing:o})}))((e=>{localStorage.setItem("feedback-form-state",JSON.stringify(e))}),500),y=["INPUT","TEXTAREA"],T=document.querySelector("form.feedback-form"),j=Array.from(T.elements).filter((e=>y.includes(e.nodeName)));let O=JSON.parse(localStorage.getItem("feedback-form-state"))||{};j.forEach((e=>{e.addEventListener("input",(({currentTarget:{value:e,name:t}})=>{O[t]=e,g(O)}))})),T.addEventListener("submit",(e=>{e.preventDefault(),console.log(O),g({}),e.currentTarget.reset(),O=new Object(null)})),document.addEventListener("DOMContentLoaded",(()=>{Object.entries(O).forEach((([e,t])=>{T.querySelector(`[name="${e}"]`).value=t.toString()}))}));
//# sourceMappingURL=03-feedback.65b1c93f.js.map