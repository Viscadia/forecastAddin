!function(){var t,r={7452:function(t,r,e){var n=e(64583).Promise,o=function(t){"use strict";var r,e=Object.prototype,o=e.hasOwnProperty,i=Object.defineProperty||function(t,r,e){t[r]=e.value},a="function"==typeof Symbol?Symbol:{},c=a.iterator||"@@iterator",u=a.asyncIterator||"@@asyncIterator",f=a.toStringTag||"@@toStringTag";function l(t,r,e){return Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[r]}try{l({},"")}catch(t){l=function(t,r,e){return t[r]=e}}function h(t,r,e,n){var o=r&&r.prototype instanceof w?r:w,a=Object.create(o.prototype),c=new P(n||[]);return i(a,"_invoke",{value:k(t,e,c)}),a}function s(t,r,e){try{return{type:"normal",arg:t.call(r,e)}}catch(t){return{type:"throw",arg:t}}}t.wrap=h;var p="suspendedStart",v="suspendedYield",y="executing",d="completed",g={};function w(){}function m(){}function b(){}var x={};l(x,c,(function(){return this}));var L=Object.getPrototypeOf,O=L&&L(L(F([])));O&&O!==e&&o.call(O,c)&&(x=O);var E=b.prototype=w.prototype=Object.create(x);function _(t){["next","throw","return"].forEach((function(r){l(t,r,(function(t){return this._invoke(r,t)}))}))}function j(t,r){function e(n,i,a,c){var u=s(t[n],t,i);if("throw"!==u.type){var f=u.arg,l=f.value;return l&&"object"==typeof l&&o.call(l,"__await")?r.resolve(l.__await).then((function(t){e("next",t,a,c)}),(function(t){e("throw",t,a,c)})):r.resolve(l).then((function(t){f.value=t,a(f)}),(function(t){return e("throw",t,a,c)}))}c(u.arg)}var n;i(this,"_invoke",{value:function(t,o){function i(){return new r((function(r,n){e(t,o,r,n)}))}return n=n?n.then(i,i):i()}})}function k(t,e,n){var o=p;return function(i,a){if(o===y)throw new Error("Generator is already running");if(o===d){if("throw"===i)throw a;return{value:r,done:!0}}for(n.method=i,n.arg=a;;){var c=n.delegate;if(c){var u=T(c,n);if(u){if(u===g)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===p)throw o=d,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=y;var f=s(t,e,n);if("normal"===f.type){if(o=n.done?d:v,f.arg===g)continue;return{value:f.arg,done:n.done}}"throw"===f.type&&(o=d,n.method="throw",n.arg=f.arg)}}}function T(t,e){var n=e.method,o=t.iterator[n];if(o===r)return e.delegate=null,"throw"===n&&t.iterator.return&&(e.method="return",e.arg=r,T(t,e),"throw"===e.method)||"return"!==n&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+n+"' method")),g;var i=s(o,t.iterator,e.arg);if("throw"===i.type)return e.method="throw",e.arg=i.arg,e.delegate=null,g;var a=i.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=r),e.delegate=null,g):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,g)}function G(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function N(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function P(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(G,this),this.reset(!0)}function F(t){if(null!=t){var e=t[c];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,i=function e(){for(;++n<t.length;)if(o.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=r,e.done=!0,e};return i.next=i}}throw new TypeError(typeof t+" is not iterable")}return m.prototype=b,i(E,"constructor",{value:b,configurable:!0}),i(b,"constructor",{value:m,configurable:!0}),m.displayName=l(b,f,"GeneratorFunction"),t.isGeneratorFunction=function(t){var r="function"==typeof t&&t.constructor;return!!r&&(r===m||"GeneratorFunction"===(r.displayName||r.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,b):(t.__proto__=b,l(t,f,"GeneratorFunction")),t.prototype=Object.create(E),t},t.awrap=function(t){return{__await:t}},_(j.prototype),l(j.prototype,u,(function(){return this})),t.AsyncIterator=j,t.async=function(r,e,o,i,a){void 0===a&&(a=n);var c=new j(h(r,e,o,i),a);return t.isGeneratorFunction(e)?c:c.next().then((function(t){return t.done?t.value:c.next()}))},_(E),l(E,f,"Generator"),l(E,c,(function(){return this})),l(E,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var r=Object(t),e=[];for(var n in r)e.push(n);return e.reverse(),function t(){for(;e.length;){var n=e.pop();if(n in r)return t.value=n,t.done=!1,t}return t.done=!0,t}},t.values=F,P.prototype={constructor:P,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(N),!t)for(var e in this)"t"===e.charAt(0)&&o.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=r)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(n,o){return c.type="throw",c.arg=t,e.next=n,o&&(e.method="next",e.arg=r),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var u=o.call(a,"catchLoc"),f=o.call(a,"finallyLoc");if(u&&f){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!f)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,r){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc<=this.prev&&o.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var i=n;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=r&&r<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=r,i?(this.method="next",this.next=i.finallyLoc,g):this.complete(a)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),g},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),N(e),g}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.tryLoc===t){var n=e.completion;if("throw"===n.type){var o=n.arg;N(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:F(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=r),g}},t}(t.exports);try{regeneratorRuntime=o}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=o:Function("r","regeneratorRuntime = r")(o)}},84315:function(t,r,e){"use strict";e(52675),e(89463),e(66412),e(60193),e(92168),e(2259),e(86964),e(83142),e(83237),e(61833),e(67947),e(31073),e(45700),e(78125),e(20326),e(16280),e(76918),e(30067),e(4294),e(18107),e(28706),e(26835),e(88431),e(33771),e(2008),e(50113),e(48980),e(10838),e(13451),e(46449),e(78350),e(51629),e(23418),e(74423),e(25276),e(64346),e(23792),e(48598),e(8921),e(62062),e(31051),e(44114),e(72712),e(18863),e(94490),e(34782),e(15086),e(26910),e(87478),e(54554),e(9678),e(57145),e(71658),e(93514),e(30237),e(13609),e(11558),e(54743),e(46761),e(11745),e(38309),e(16573),e(78100),e(77936),e(61699),e(59089),e(91191),e(93515),e(1688),e(60739),e(89572),e(23288),e(36456),e(94170),e(48957),e(62010),e(55081),e(33110),e(4731),e(36033),e(47072),e(93153),e(82326),e(36389),e(64444),e(8085),e(77762),e(65070),e(60605),e(39469),e(72152),e(75376),e(56624),e(11367),e(5914),e(78553),e(98690),e(60479),e(70761),e(2892),e(45374),e(25428),e(32637),e(40150),e(59149),e(64601),e(44435),e(87220),e(25843),e(62337),e(9868),e(80630),e(69085),e(59904),e(17427),e(67945),e(84185),e(87607),e(5506),e(52811),e(53921),e(83851),e(81278),e(1480),e(40875),e(77691),e(78347),e(29908),e(94052),e(94003),e(221),e(79432),e(9220),e(7904),e(93967),e(63548),e(93941),e(10287),e(26099),e(16034),e(78459),e(58940),e(3362),e(96167),e(93518),e(9391),e(14628),e(39796),e(60825),e(87411),e(21211),e(40888),e(9065),e(86565),e(32812),e(84634),e(71137),e(30985),e(34268),e(34873),e(15472),e(84864),e(57465),e(27495),e(69479),e(87745),e(90906),e(38781),e(31415),e(17642),e(58004),e(33853),e(45876),e(32475),e(15024),e(31698),e(67357),e(23860),e(99449),e(27337),e(21699),e(42043),e(47764),e(71761),e(28543),e(35701),e(68156),e(85906),e(42781),e(25440),e(79978),e(5746),e(90744),e(11392),e(50375),e(67438),e(42762),e(39202),e(43359),e(89907),e(11898),e(35490),e(5745),e(94298),e(60268),e(69546),e(20781),e(50778),e(89195),e(46276),e(48718),e(16308),e(34594),e(29833),e(46594),e(72107),e(95477),e(21489),e(22134),e(3690),e(61740),e(48140),e(81630),e(72170),e(75044),e(69539),e(31694),e(89955),e(21903),e(91134),e(33206),e(48345),e(44496),e(66651),e(12887),e(19369),e(66812),e(8995),e(52568),e(31575),e(36072),e(88747),e(28845),e(29423),e(57301),e(373),e(86614),e(41405),e(37467),e(44732),e(33684),e(79577),e(88267),e(73772),e(30958),e(2945),e(42207),e(23500),e(62953),e(55815),e(64979),e(79739),e(59848),e(122),e(13611),e(71678),e(76031),e(3296),e(2222),e(45781),e(27208),e(48408),e(14603),e(47566),e(98721),e(19167)}},e={};function n(t){var o=e[t];if(void 0!==o)return o.exports;var i=e[t]={exports:{}};return r[t].call(i.exports,i,i.exports,n),i.exports}n.m=r,t=[],n.O=function(r,e,o,i){if(!e){var a=1/0;for(l=0;l<t.length;l++){e=t[l][0],o=t[l][1],i=t[l][2];for(var c=!0,u=0;u<e.length;u++)(!1&i||a>=i)&&Object.keys(n.O).every((function(t){return n.O[t](e[u])}))?e.splice(u--,1):(c=!1,i<a&&(a=i));if(c){t.splice(l--,1);var f=o();void 0!==f&&(r=f)}}return r}i=i||0;for(var l=t.length;l>0&&t[l-1][2]>i;l--)t[l]=t[l-1];t[l]=[e,o,i]},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),n.o=function(t,r){return Object.prototype.hasOwnProperty.call(t,r)},function(){var t={538:0};n.O.j=function(r){return 0===t[r]};var r=function(r,e){var o,i,a=e[0],c=e[1],u=e[2],f=0;if(a.some((function(r){return 0!==t[r]}))){for(o in c)n.o(c,o)&&(n.m[o]=c[o]);if(u)var l=u(n)}for(r&&r(e);f<a.length;f++)i=a[f],n.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return n.O(l)},e=self.webpackChunkoffice_addin_taskpane_react_js=self.webpackChunkoffice_addin_taskpane_react_js||[];e.forEach(r.bind(null,0)),e.push=r.bind(null,e.push.bind(e))}(),n.O(void 0,[964,71],(function(){return n(84315)}));var o=n.O(void 0,[964,71],(function(){return n(7452)}));o=n.O(o)}();