!function(t){var n={};function r(e){if(n[e])return n[e].exports;var o=n[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=t,r.c=n,r.d=function(t,n,e){r.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:e})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,n){if(1&n&&(t=r(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(r.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)r.d(e,o,function(n){return t[n]}.bind(null,o));return e},r.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(n,"a",n),n},r.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},r.p="/js/",r(r.s=552)}({0:function(t,n){t.exports=function(t){try{return!!t()}catch(t){return!0}}},11:function(t,n,r){var e=r(8);t.exports=function(t){if(!e(t))throw TypeError(String(t)+" is not an object");return t}},137:function(t,n,r){var e=r(8),o=r(52),i=r(139),u=r(7)("toPrimitive");t.exports=function(t,n){if(!e(t)||o(t))return t;var r,c=t[u];if(void 0!==c){if(void 0===n&&(n="default"),r=c.call(t,n),!e(r)||o(r))return r;throw TypeError("Can't convert object to primitive value")}return void 0===n&&(n="number"),i(t,n)}},138:function(t,n,r){var e=r(28);t.exports=e("navigator","userAgent")||""},139:function(t,n,r){var e=r(8);t.exports=function(t,n){var r,o;if("string"===n&&"function"==typeof(r=t.toString)&&!e(o=r.call(t)))return o;if("function"==typeof(r=t.valueOf)&&!e(o=r.call(t)))return o;if("string"!==n&&"function"==typeof(r=t.toString)&&!e(o=r.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},140:function(t,n,r){var e=r(3),o=r(79),i=e.WeakMap;t.exports="function"==typeof i&&/native code/.test(o(i))},141:function(t,n,r){var e=r(9),o=r(142),i=r(74),u=r(24);t.exports=function(t,n){for(var r=o(n),c=u.f,f=i.f,a=0;a<r.length;a++){var s=r[a];e(t,s)||c(t,s,f(n,s))}}},142:function(t,n,r){var e=r(28),o=r(143),i=r(87),u=r(11);t.exports=e("Reflect","ownKeys")||function(t){var n=o.f(u(t)),r=i.f;return r?n.concat(r(t)):n}},143:function(t,n,r){var e=r(86),o=r(58).concat("length","prototype");n.f=Object.getOwnPropertyNames||function(t){return e(t,o)}},144:function(t,n,r){var e=r(36),o=r(34),i=r(145),u=function(t){return function(n,r,u){var c,f=e(n),a=o(f.length),s=i(u,a);if(t&&r!=r){for(;a>s;)if((c=f[s++])!=c)return!0}else for(;a>s;s++)if((t||s in f)&&f[s]===r)return t||s||0;return!t&&-1}};t.exports={includes:u(!0),indexOf:u(!1)}},145:function(t,n,r){var e=r(31),o=Math.max,i=Math.min;t.exports=function(t,n){var r=e(t);return r<0?o(r+n,0):i(r,n)}},146:function(t,n,r){var e=r(0),o=/#|\.prototype\./,i=function(t,n){var r=c[u(t)];return r==a||r!=f&&("function"==typeof n?e(n):!!n)},u=i.normalize=function(t){return String(t).replace(o,".").toLowerCase()},c=i.data={},f=i.NATIVE="N",a=i.POLYFILL="P";t.exports=i},147:function(t,n,r){var e=r(8),o=r(80),i=r(7)("species");t.exports=function(t){var n;return o(t)&&("function"!=typeof(n=t.constructor)||n!==Array&&!o(n.prototype)?e(n)&&null===(n=n[i])&&(n=void 0):n=void 0),void 0===n?Array:n}},15:function(t,n,r){var e=r(0);t.exports=!e((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},168:function(t,n,r){"use strict";var e=r(29),o=r(0),i=r(80),u=r(8),c=r(23),f=r(34),a=r(169),s=r(91),p=r(170),l=r(7),v=r(56),y=l("isConcatSpreadable"),d=v>=51||!o((function(){var t=[];return t[y]=!1,t.concat()[0]!==t})),b=p("concat"),h=function(t){if(!u(t))return!1;var n=t[y];return void 0!==n?!!n:i(t)};e({target:"Array",proto:!0,forced:!d||!b},{concat:function(t){var n,r,e,o,i,u=c(this),p=s(u,0),l=0;for(n=-1,e=arguments.length;n<e;n++)if(h(i=-1===n?u:arguments[n])){if(l+(o=f(i.length))>9007199254740991)throw TypeError("Maximum allowed index exceeded");for(r=0;r<o;r++,l++)r in i&&a(p,l,i[r])}else{if(l>=9007199254740991)throw TypeError("Maximum allowed index exceeded");a(p,l++,i)}return p.length=l,p}})},169:function(t,n,r){"use strict";var e=r(50),o=r(24),i=r(38);t.exports=function(t,n,r){var u=e(n);u in t?o.f(t,u,i(0,r)):t[u]=r}},170:function(t,n,r){var e=r(0),o=r(7),i=r(56),u=o("species");t.exports=function(t){return i>=51||!e((function(){var n=[];return(n.constructor={})[u]=function(){return{foo:1}},1!==n[t](Boolean).foo}))}},22:function(t,n,r){var e=r(15),o=r(24),i=r(38);t.exports=e?function(t,n,r){return o.f(t,n,i(1,r))}:function(t,n,r){return t[n]=r,t}},23:function(t,n,r){var e=r(30);t.exports=function(t){return Object(e(t))}},24:function(t,n,r){var e=r(15),o=r(78),i=r(11),u=r(50),c=Object.defineProperty;n.f=e?c:function(t,n,r){if(i(t),n=u(n),i(r),o)try{return c(t,n,r)}catch(t){}if("get"in r||"set"in r)throw TypeError("Accessors not supported");return"value"in r&&(t[n]=r.value),t}},28:function(t,n,r){var e=r(3),o=function(t){return"function"==typeof t?t:void 0};t.exports=function(t,n){return arguments.length<2?o(e[t]):e[t]&&e[t][n]}},29:function(t,n,r){var e=r(3),o=r(74).f,i=r(22),u=r(32),c=r(47),f=r(141),a=r(146);t.exports=function(t,n){var r,s,p,l,v,y=t.target,d=t.global,b=t.stat;if(r=d?e:b?e[y]||c(y,{}):(e[y]||{}).prototype)for(s in n){if(l=n[s],p=t.noTargetGet?(v=o(r,s))&&v.value:r[s],!a(d?s:y+(b?".":"#")+s,t.forced)&&void 0!==p){if(typeof l==typeof p)continue;f(l,p)}(t.sham||p&&p.sham)&&i(l,"sham",!0),u(r,s,l,t)}}},3:function(t,n,r){(function(n){var r=function(t){return t&&t.Math==Math&&t};t.exports=r("object"==typeof globalThis&&globalThis)||r("object"==typeof window&&window)||r("object"==typeof self&&self)||r("object"==typeof n&&n)||function(){return this}()||Function("return this")()}).call(this,r(4))},30:function(t,n){t.exports=function(t){if(null==t)throw TypeError("Can't call method on "+t);return t}},31:function(t,n){var r=Math.ceil,e=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?e:r)(t)}},32:function(t,n,r){var e=r(3),o=r(22),i=r(9),u=r(47),c=r(79),f=r(68),a=f.get,s=f.enforce,p=String(String).split("String");(t.exports=function(t,n,r,c){var f,a=!!c&&!!c.unsafe,l=!!c&&!!c.enumerable,v=!!c&&!!c.noTargetGet;"function"==typeof r&&("string"!=typeof n||i(r,"name")||o(r,"name",n),(f=s(r)).source||(f.source=p.join("string"==typeof n?n:""))),t!==e?(a?!v&&t[n]&&(l=!0):delete t[n],l?t[n]=r:o(t,n,r)):l?t[n]=r:u(n,r)})(Function.prototype,"toString",(function(){return"function"==typeof this&&a(this).source||c(this)}))},33:function(t,n){var r={}.toString;t.exports=function(t){return r.call(t).slice(8,-1)}},34:function(t,n,r){var e=r(31),o=Math.min;t.exports=function(t){return t>0?o(e(t),9007199254740991):0}},36:function(t,n,r){var e=r(57),o=r(30);t.exports=function(t){return e(o(t))}},38:function(t,n){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},4:function(t,n){var r;r=function(){return this}();try{r=r||new Function("return this")()}catch(t){"object"==typeof window&&(r=window)}t.exports=r},46:function(t,n,r){var e=r(3),o=r(47),i=e["__core-js_shared__"]||o("__core-js_shared__",{});t.exports=i},47:function(t,n,r){var e=r(3);t.exports=function(t,n){try{Object.defineProperty(e,t,{value:n,configurable:!0,writable:!0})}catch(r){e[t]=n}return n}},48:function(t,n,r){"use strict";r(168),Object.defineProperty(n,"__esModule",{value:!0}),n.loadState=function(t,n,r){var e=document.querySelector("#initial-state-".concat(t,"-").concat(n));if(null===e){if(void 0!==r)return r;throw new Error("Could not find initial state ".concat(n," of ").concat(t))}try{return JSON.parse(atob(e.value))}catch(r){throw new Error("Could not parse initial state ".concat(n," of ").concat(t))}}},50:function(t,n,r){var e=r(137),o=r(52);t.exports=function(t){var n=e(t,"string");return o(n)?n:String(n)}},52:function(t,n,r){var e=r(28),o=r(75);t.exports=o?function(t){return"symbol"==typeof t}:function(t){var n=e("Symbol");return"function"==typeof n&&Object(t)instanceof n}},53:function(t,n,r){var e=r(90),o=r(46);(t.exports=function(t,n){return o[t]||(o[t]=void 0!==n?n:{})})("versions",[]).push({version:"3.16.1",mode:e?"pure":"global",copyright:"© 2021 Denis Pushkarev (zloirock.ru)"})},54:function(t,n){t.exports={}},552:function(t,n,r){"use strict";r.r(n);var e=r(48),o=!0===Object(e.loadState)("settings","has-reasons-use-nextcloud-pdf");window.addEventListener("DOMContentLoaded",(function(){var t=document.getElementById("open-reasons-use-nextcloud-pdf");t&&o&&t.addEventListener("click",(function(t){t.preventDefault(),OCA.Viewer.open({path:"/Reasons to use Nextcloud.pdf"})}))}))},56:function(t,n,r){var e,o,i=r(3),u=r(138),c=i.process,f=i.Deno,a=c&&c.versions||f&&f.version,s=a&&a.v8;s?o=(e=s.split("."))[0]<4?1:e[0]+e[1]:u&&(!(e=u.match(/Edge\/(\d+)/))||e[1]>=74)&&(e=u.match(/Chrome\/(\d+)/))&&(o=e[1]),t.exports=o&&+o},57:function(t,n,r){var e=r(0),o=r(33),i="".split;t.exports=e((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==o(t)?i.call(t,""):Object(t)}:Object},58:function(t,n){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},68:function(t,n,r){var e,o,i,u=r(140),c=r(3),f=r(8),a=r(22),s=r(9),p=r(46),l=r(69),v=r(54),y=c.WeakMap;if(u||p.state){var d=p.state||(p.state=new y),b=d.get,h=d.has,x=d.set;e=function(t,n){if(h.call(d,t))throw new TypeError("Object already initialized");return n.facade=t,x.call(d,t,n),n},o=function(t){return b.call(d,t)||{}},i=function(t){return h.call(d,t)}}else{var g=l("state");v[g]=!0,e=function(t,n){if(s(t,g))throw new TypeError("Object already initialized");return n.facade=t,a(t,g,n),n},o=function(t){return s(t,g)?t[g]:{}},i=function(t){return s(t,g)}}t.exports={set:e,get:o,has:i,enforce:function(t){return i(t)?o(t):e(t,{})},getterFor:function(t){return function(n){var r;if(!f(n)||(r=o(n)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return r}}}},69:function(t,n,r){var e=r(53),o=r(77),i=e("keys");t.exports=function(t){return i[t]||(i[t]=o(t))}},7:function(t,n,r){var e=r(3),o=r(53),i=r(9),u=r(77),c=r(76),f=r(75),a=o("wks"),s=e.Symbol,p=f?s:s&&s.withoutSetter||u;t.exports=function(t){return i(a,t)&&(c||"string"==typeof a[t])||(c&&i(s,t)?a[t]=s[t]:a[t]=p("Symbol."+t)),a[t]}},74:function(t,n,r){var e=r(15),o=r(84),i=r(38),u=r(36),c=r(50),f=r(9),a=r(78),s=Object.getOwnPropertyDescriptor;n.f=e?s:function(t,n){if(t=u(t),n=c(n),a)try{return s(t,n)}catch(t){}if(f(t,n))return i(!o.f.call(t,n),t[n])}},75:function(t,n,r){var e=r(76);t.exports=e&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},76:function(t,n,r){var e=r(56),o=r(0);t.exports=!!Object.getOwnPropertySymbols&&!o((function(){var t=Symbol();return!String(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&e&&e<41}))},77:function(t,n){var r=0,e=Math.random();t.exports=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++r+e).toString(36)}},78:function(t,n,r){var e=r(15),o=r(0),i=r(85);t.exports=!e&&!o((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},79:function(t,n,r){var e=r(46),o=Function.toString;"function"!=typeof e.inspectSource&&(e.inspectSource=function(t){return o.call(t)}),t.exports=e.inspectSource},8:function(t,n){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},80:function(t,n,r){var e=r(33);t.exports=Array.isArray||function(t){return"Array"==e(t)}},84:function(t,n,r){"use strict";var e={}.propertyIsEnumerable,o=Object.getOwnPropertyDescriptor,i=o&&!e.call({1:2},1);n.f=i?function(t){var n=o(this,t);return!!n&&n.enumerable}:e},85:function(t,n,r){var e=r(3),o=r(8),i=e.document,u=o(i)&&o(i.createElement);t.exports=function(t){return u?i.createElement(t):{}}},86:function(t,n,r){var e=r(9),o=r(36),i=r(144).indexOf,u=r(54);t.exports=function(t,n){var r,c=o(t),f=0,a=[];for(r in c)!e(u,r)&&e(c,r)&&a.push(r);for(;n.length>f;)e(c,r=n[f++])&&(~i(a,r)||a.push(r));return a}},87:function(t,n){n.f=Object.getOwnPropertySymbols},9:function(t,n,r){var e=r(23),o={}.hasOwnProperty;t.exports=Object.hasOwn||function(t,n){return o.call(e(t),n)}},90:function(t,n){t.exports=!1},91:function(t,n,r){var e=r(147);t.exports=function(t,n){return new(e(t))(0===n?0:n)}}});
//# sourceMappingURL=vue-settings-nextcloud-pdf.js.map?v=75a660ee8a6d23f3d2f1