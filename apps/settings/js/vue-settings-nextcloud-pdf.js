!function(t){var n={};function r(e){if(n[e])return n[e].exports;var o=n[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=t,r.c=n,r.d=function(t,n,e){r.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:e})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,n){if(1&n&&(t=r(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(r.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)r.d(e,o,function(n){return t[n]}.bind(null,o));return e},r.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(n,"a",n),n},r.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},r.p="/js/",r(r.s=551)}({0:function(t,n){t.exports=function(t){try{return!!t()}catch(t){return!0}}},11:function(t,n,r){var e=r(9);t.exports=function(t){if(!e(t))throw TypeError(String(t)+" is not an object");return t}},141:function(t,n,r){var e=r(9),o=r(50),i=r(143),u=r(5)("toPrimitive");t.exports=function(t,n){if(!e(t)||o(t))return t;var r,c=t[u];if(void 0!==c){if(void 0===n&&(n="default"),r=c.call(t,n),!e(r)||o(r))return r;throw TypeError("Can't convert object to primitive value")}return void 0===n&&(n="number"),i(t,n)}},142:function(t,n,r){var e=r(30);t.exports=e("navigator","userAgent")||""},143:function(t,n,r){var e=r(9);t.exports=function(t,n){var r,o;if("string"===n&&"function"==typeof(r=t.toString)&&!e(o=r.call(t)))return o;if("function"==typeof(r=t.valueOf)&&!e(o=r.call(t)))return o;if("string"!==n&&"function"==typeof(r=t.toString)&&!e(o=r.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},144:function(t,n,r){var e=r(3),o=r(81),i=e.WeakMap;t.exports="function"==typeof i&&/native code/.test(o(i))},145:function(t,n,r){var e=r(8),o=r(146),i=r(76),u=r(21);t.exports=function(t,n){for(var r=o(n),c=u.f,f=i.f,a=0;a<r.length;a++){var s=r[a];e(t,s)||c(t,s,f(n,s))}}},146:function(t,n,r){var e=r(30),o=r(147),i=r(91),u=r(11);t.exports=e("Reflect","ownKeys")||function(t){var n=o.f(u(t)),r=i.f;return r?n.concat(r(t)):n}},147:function(t,n,r){var e=r(90),o=r(56).concat("length","prototype");n.f=Object.getOwnPropertyNames||function(t){return e(t,o)}},148:function(t,n,r){var e=r(38),o=r(36),i=r(149),u=function(t){return function(n,r,u){var c,f=e(n),a=o(f.length),s=i(u,a);if(t&&r!=r){for(;a>s;)if((c=f[s++])!=c)return!0}else for(;a>s;s++)if((t||s in f)&&f[s]===r)return t||s||0;return!t&&-1}};t.exports={includes:u(!0),indexOf:u(!1)}},149:function(t,n,r){var e=r(34),o=Math.max,i=Math.min;t.exports=function(t,n){var r=e(t);return r<0?o(r+n,0):i(r,n)}},150:function(t,n,r){var e=r(0),o=/#|\.prototype\./,i=function(t,n){var r=c[u(t)];return r==a||r!=f&&("function"==typeof n?e(n):!!n)},u=i.normalize=function(t){return String(t).replace(o,".").toLowerCase()},c=i.data={},f=i.NATIVE="N",a=i.POLYFILL="P";t.exports=i},151:function(t,n,r){var e=r(9),o=r(84),i=r(5)("species");t.exports=function(t){var n;return o(t)&&("function"!=typeof(n=t.constructor)||n!==Array&&!o(n.prototype)?e(n)&&null===(n=n[i])&&(n=void 0):n=void 0),void 0===n?Array:n}},16:function(t,n,r){var e=r(0);t.exports=!e((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},17:function(t,n,r){var e=r(16),o=r(21),i=r(39);t.exports=e?function(t,n,r){return o.f(t,n,i(1,r))}:function(t,n,r){return t[n]=r,t}},18:function(t,n,r){var e=r(33);t.exports=function(t){return Object(e(t))}},180:function(t,n,r){"use strict";var e=r(29),o=r(0),i=r(84),u=r(9),c=r(18),f=r(36),a=r(181),s=r(92),p=r(182),l=r(5),v=r(54),y=l("isConcatSpreadable"),d=v>=51||!o((function(){var t=[];return t[y]=!1,t.concat()[0]!==t})),b=p("concat"),h=function(t){if(!u(t))return!1;var n=t[y];return void 0!==n?!!n:i(t)};e({target:"Array",proto:!0,forced:!d||!b},{concat:function(t){var n,r,e,o,i,u=c(this),p=s(u,0),l=0;for(n=-1,e=arguments.length;n<e;n++)if(h(i=-1===n?u:arguments[n])){if(l+(o=f(i.length))>9007199254740991)throw TypeError("Maximum allowed index exceeded");for(r=0;r<o;r++,l++)r in i&&a(p,l,i[r])}else{if(l>=9007199254740991)throw TypeError("Maximum allowed index exceeded");a(p,l++,i)}return p.length=l,p}})},181:function(t,n,r){"use strict";var e=r(48),o=r(21),i=r(39);t.exports=function(t,n,r){var u=e(n);u in t?o.f(t,u,i(0,r)):t[u]=r}},182:function(t,n,r){var e=r(0),o=r(5),i=r(54),u=o("species");t.exports=function(t){return i>=51||!e((function(){var n=[];return(n.constructor={})[u]=function(){return{foo:1}},1!==n[t](Boolean).foo}))}},21:function(t,n,r){var e=r(16),o=r(80),i=r(11),u=r(48),c=Object.defineProperty;n.f=e?c:function(t,n,r){if(i(t),n=u(n),i(r),o)try{return c(t,n,r)}catch(t){}if("get"in r||"set"in r)throw TypeError("Accessors not supported");return"value"in r&&(t[n]=r.value),t}},29:function(t,n,r){var e=r(3),o=r(76).f,i=r(17),u=r(32),c=r(47),f=r(145),a=r(150);t.exports=function(t,n){var r,s,p,l,v,y=t.target,d=t.global,b=t.stat;if(r=d?e:b?e[y]||c(y,{}):(e[y]||{}).prototype)for(s in n){if(l=n[s],p=t.noTargetGet?(v=o(r,s))&&v.value:r[s],!a(d?s:y+(b?".":"#")+s,t.forced)&&void 0!==p){if(typeof l==typeof p)continue;f(l,p)}(t.sham||p&&p.sham)&&i(l,"sham",!0),u(r,s,l,t)}}},3:function(t,n,r){(function(n){var r=function(t){return t&&t.Math==Math&&t};t.exports=r("object"==typeof globalThis&&globalThis)||r("object"==typeof window&&window)||r("object"==typeof self&&self)||r("object"==typeof n&&n)||function(){return this}()||Function("return this")()}).call(this,r(4))},30:function(t,n,r){var e=r(3),o=function(t){return"function"==typeof t?t:void 0};t.exports=function(t,n){return arguments.length<2?o(e[t]):e[t]&&e[t][n]}},32:function(t,n,r){var e=r(3),o=r(17),i=r(8),u=r(47),c=r(81),f=r(68),a=f.get,s=f.enforce,p=String(String).split("String");(t.exports=function(t,n,r,c){var f,a=!!c&&!!c.unsafe,l=!!c&&!!c.enumerable,v=!!c&&!!c.noTargetGet;"function"==typeof r&&("string"!=typeof n||i(r,"name")||o(r,"name",n),(f=s(r)).source||(f.source=p.join("string"==typeof n?n:""))),t!==e?(a?!v&&t[n]&&(l=!0):delete t[n],l?t[n]=r:o(t,n,r)):l?t[n]=r:u(n,r)})(Function.prototype,"toString",(function(){return"function"==typeof this&&a(this).source||c(this)}))},33:function(t,n){t.exports=function(t){if(null==t)throw TypeError("Can't call method on "+t);return t}},34:function(t,n){var r=Math.ceil,e=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?e:r)(t)}},35:function(t,n){var r={}.toString;t.exports=function(t){return r.call(t).slice(8,-1)}},36:function(t,n,r){var e=r(34),o=Math.min;t.exports=function(t){return t>0?o(e(t),9007199254740991):0}},38:function(t,n,r){var e=r(55),o=r(33);t.exports=function(t){return e(o(t))}},39:function(t,n){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},4:function(t,n){var r;r=function(){return this}();try{r=r||new Function("return this")()}catch(t){"object"==typeof window&&(r=window)}t.exports=r},46:function(t,n,r){var e=r(3),o=r(47),i=e["__core-js_shared__"]||o("__core-js_shared__",{});t.exports=i},47:function(t,n,r){var e=r(3);t.exports=function(t,n){try{Object.defineProperty(e,t,{value:n,configurable:!0,writable:!0})}catch(r){e[t]=n}return n}},48:function(t,n,r){var e=r(141),o=r(50);t.exports=function(t){var n=e(t,"string");return o(n)?n:String(n)}},5:function(t,n,r){var e=r(3),o=r(51),i=r(8),u=r(79),c=r(78),f=r(77),a=o("wks"),s=e.Symbol,p=f?s:s&&s.withoutSetter||u;t.exports=function(t){return i(a,t)&&(c||"string"==typeof a[t])||(c&&i(s,t)?a[t]=s[t]:a[t]=p("Symbol."+t)),a[t]}},50:function(t,n,r){var e=r(30),o=r(77);t.exports=o?function(t){return"symbol"==typeof t}:function(t){var n=e("Symbol");return"function"==typeof n&&Object(t)instanceof n}},51:function(t,n,r){var e=r(83),o=r(46);(t.exports=function(t,n){return o[t]||(o[t]=void 0!==n?n:{})})("versions",[]).push({version:"3.16.1",mode:e?"pure":"global",copyright:"© 2021 Denis Pushkarev (zloirock.ru)"})},52:function(t,n){t.exports={}},53:function(t,n,r){"use strict";r(180),Object.defineProperty(n,"__esModule",{value:!0}),n.loadState=function(t,n,r){var e=document.querySelector("#initial-state-".concat(t,"-").concat(n));if(null===e){if(void 0!==r)return r;throw new Error("Could not find initial state ".concat(n," of ").concat(t))}try{return JSON.parse(atob(e.value))}catch(r){throw new Error("Could not parse initial state ".concat(n," of ").concat(t))}}},54:function(t,n,r){var e,o,i=r(3),u=r(142),c=i.process,f=i.Deno,a=c&&c.versions||f&&f.version,s=a&&a.v8;s?o=(e=s.split("."))[0]<4?1:e[0]+e[1]:u&&(!(e=u.match(/Edge\/(\d+)/))||e[1]>=74)&&(e=u.match(/Chrome\/(\d+)/))&&(o=e[1]),t.exports=o&&+o},55:function(t,n,r){var e=r(0),o=r(35),i="".split;t.exports=e((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==o(t)?i.call(t,""):Object(t)}:Object},551:function(t,n,r){"use strict";r.r(n);var e=r(53),o=!0===Object(e.loadState)("settings","has-reasons-use-nextcloud-pdf");window.addEventListener("DOMContentLoaded",(function(){var t=document.getElementById("open-reasons-use-nextcloud-pdf");t&&o&&t.addEventListener("click",(function(t){t.preventDefault(),OCA.Viewer.open({path:"/Reasons to use Nextcloud.pdf"})}))}))},56:function(t,n){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},68:function(t,n,r){var e,o,i,u=r(144),c=r(3),f=r(9),a=r(17),s=r(8),p=r(46),l=r(69),v=r(52),y=c.WeakMap;if(u||p.state){var d=p.state||(p.state=new y),b=d.get,h=d.has,x=d.set;e=function(t,n){if(h.call(d,t))throw new TypeError("Object already initialized");return n.facade=t,x.call(d,t,n),n},o=function(t){return b.call(d,t)||{}},i=function(t){return h.call(d,t)}}else{var g=l("state");v[g]=!0,e=function(t,n){if(s(t,g))throw new TypeError("Object already initialized");return n.facade=t,a(t,g,n),n},o=function(t){return s(t,g)?t[g]:{}},i=function(t){return s(t,g)}}t.exports={set:e,get:o,has:i,enforce:function(t){return i(t)?o(t):e(t,{})},getterFor:function(t){return function(n){var r;if(!f(n)||(r=o(n)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return r}}}},69:function(t,n,r){var e=r(51),o=r(79),i=e("keys");t.exports=function(t){return i[t]||(i[t]=o(t))}},76:function(t,n,r){var e=r(16),o=r(88),i=r(39),u=r(38),c=r(48),f=r(8),a=r(80),s=Object.getOwnPropertyDescriptor;n.f=e?s:function(t,n){if(t=u(t),n=c(n),a)try{return s(t,n)}catch(t){}if(f(t,n))return i(!o.f.call(t,n),t[n])}},77:function(t,n,r){var e=r(78);t.exports=e&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},78:function(t,n,r){var e=r(54),o=r(0);t.exports=!!Object.getOwnPropertySymbols&&!o((function(){var t=Symbol();return!String(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&e&&e<41}))},79:function(t,n){var r=0,e=Math.random();t.exports=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++r+e).toString(36)}},8:function(t,n,r){var e=r(18),o={}.hasOwnProperty;t.exports=Object.hasOwn||function(t,n){return o.call(e(t),n)}},80:function(t,n,r){var e=r(16),o=r(0),i=r(89);t.exports=!e&&!o((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},81:function(t,n,r){var e=r(46),o=Function.toString;"function"!=typeof e.inspectSource&&(e.inspectSource=function(t){return o.call(t)}),t.exports=e.inspectSource},83:function(t,n){t.exports=!1},84:function(t,n,r){var e=r(35);t.exports=Array.isArray||function(t){return"Array"==e(t)}},88:function(t,n,r){"use strict";var e={}.propertyIsEnumerable,o=Object.getOwnPropertyDescriptor,i=o&&!e.call({1:2},1);n.f=i?function(t){var n=o(this,t);return!!n&&n.enumerable}:e},89:function(t,n,r){var e=r(3),o=r(9),i=e.document,u=o(i)&&o(i.createElement);t.exports=function(t){return u?i.createElement(t):{}}},9:function(t,n){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},90:function(t,n,r){var e=r(8),o=r(38),i=r(148).indexOf,u=r(52);t.exports=function(t,n){var r,c=o(t),f=0,a=[];for(r in c)!e(u,r)&&e(c,r)&&a.push(r);for(;n.length>f;)e(c,r=n[f++])&&(~i(a,r)||a.push(r));return a}},91:function(t,n){n.f=Object.getOwnPropertySymbols},92:function(t,n,r){var e=r(151);t.exports=function(t,n){return new(e(t))(0===n?0:n)}}});
//# sourceMappingURL=vue-settings-nextcloud-pdf.js.map?v=0776e509731830caac21