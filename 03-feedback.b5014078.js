!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},n={},o=t.parcelRequired7c6;null==o&&((o=function(e){if(e in r)return r[e].exports;if(e in n){var t=n[e];delete n[e];var o={id:e,exports:{}};return r[e]=o,t.call(o.exports,o,o.exports),o.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){n[e]=t},t.parcelRequired7c6=o),o.register("8slrw",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if(Array.isArray(e))return e}})),o.register("7AJDX",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}})),o.register("ifqQW",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}})),o.register("auk6i",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){if(!e)return;if("string"==typeof e)return n.default(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n.default(e,t)};var r,n=(r=o("8NIkP"))&&r.__esModule?r:{default:r}})),o.register("8NIkP",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}}));var i={};Object.defineProperty(i,"__esModule",{value:!0}),i.default=function(e,t){return u.default(e)||f.default(e,t)||l.default(e,t)||a.default()};var u=c(o("8slrw")),f=c(o("7AJDX")),a=c(o("ifqQW")),l=c(o("auk6i"));function c(e){return e&&e.__esModule?e:{default:e}}var s={};Object.defineProperty(s,"__esModule",{value:!0}),s.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var d="Expected a function",p=/^\s+|\s+$/g,v=/^[-+]0x[0-9a-f]+$/i,y=/^0b[01]+$/i,b=/^0o[0-7]+$/i,m=parseInt,g="object"==typeof t&&t&&t.Object===Object&&t,O="object"==typeof self&&self&&self.Object===Object&&self,j=g||O||Function("return this")(),_=Object.prototype.toString,x=Math.max,h=Math.min,w=function(){return j.Date.now()};function T(e,t,r){var n,o,i,u,f,a,l=0,c=!1,s=!1,p=!0;if("function"!=typeof e)throw new TypeError(d);function v(t){var r=n,i=o;return n=o=void 0,l=t,u=e.apply(i,r)}function y(e){return l=e,f=setTimeout(m,t),c?v(e):u}function b(e){var r=e-a;return void 0===a||r>=t||r<0||s&&e-l>=i}function m(){var e=w();if(b(e))return g(e);f=setTimeout(m,function(e){var r=t-(e-a);return s?h(r,i-(e-l)):r}(e))}function g(e){return f=void 0,p&&n?v(e):(n=o=void 0,u)}function O(){var e=w(),r=b(e);if(n=arguments,o=this,a=e,r){if(void 0===f)return y(a);if(s)return f=setTimeout(m,t),v(a)}return void 0===f&&(f=setTimeout(m,t)),u}return t=S(t)||0,M(r)&&(c=!!r.leading,i=(s="maxWait"in r)?x(S(r.maxWait)||0,t):i,p="trailing"in r?!!r.trailing:p),O.cancel=function(){void 0!==f&&clearTimeout(f),l=0,n=a=o=f=void 0},O.flush=function(){return void 0===f?u:g(w())},O}function M(t){var r=void 0===t?"undefined":e(s)(t);return!!t&&("object"==r||"function"==r)}function S(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(s)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==_.call(t)}(t))return NaN;if(M(t)){var r="function"==typeof t.valueOf?t.valueOf():t;t=M(r)?r+"":r}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(p,"");var n=y.test(t);return n||b.test(t)?m(t.slice(2),n?2:8):v.test(t)?NaN:+t}var E="feedback-form-state",A=e((function(e,t,r){var n=!0,o=!0;if("function"!=typeof e)throw new TypeError(d);return M(r)&&(n="leading"in r?!!r.leading:n,o="trailing"in r?!!r.trailing:o),T(e,t,{leading:n,maxWait:t,trailing:o})}))((function(e){localStorage.setItem(E,JSON.stringify(e))}),500),N=["INPUT","TEXTAREA"],P=document.querySelector("form.feedback-form"),I=Array.from(P.elements).filter((function(e){return N.includes(e.nodeName)})),D=JSON.parse(localStorage.getItem(E))||{};I.forEach((function(e){e.addEventListener("input",(function(e){var t=e.currentTarget,r=t.value,n=t.name;D[n]=r,A(D)}))})),P.addEventListener("submit",(function(e){e.preventDefault(),console.log(D),A({}),e.currentTarget.reset(),D=new Object(null)})),document.addEventListener("DOMContentLoaded",(function(){Object.entries(D).forEach((function(t){var r=e(i)(t,2),n=r[0],o=r[1];P.querySelector('[name="'.concat(n,'"]')).value=o.toString()}))}))}();
//# sourceMappingURL=03-feedback.b5014078.js.map
