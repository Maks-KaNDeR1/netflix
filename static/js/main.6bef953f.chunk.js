(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{25:function(t,e,r){t.exports=r(80)},33:function(t,e,r){},34:function(t,e,r){},57:function(t,e,r){},58:function(t,e,r){},59:function(t,e,r){},80:function(t,e,r){"use strict";r.r(e);var n=r(0),o=r.n(n),a=r(19),i=r.n(a),c=(r(33),r(34),r(3)),u=r(4),l=r(20),s=r.n(l).a.create({baseURL:"https://api.themoviedb.org/3"}),h="e8d79a622e4368a0ed8c76c47156be01",f={fetchTrending:"/trending/all/week?api_key=".concat(h,"&language=en-US"),fetchNetflixOriginals:"/discover/tv?api_key=".concat(h,"&with_networks=213"),fetchTopRated:"/movie/top_rated?api_key=".concat(h,"&language=en-US"),fetchActionMovies:"/discover/movie?api_key=".concat(h,"&with_genres=28"),fetchComedyMovies:"/discover/movie?api_key=".concat(h,"&with_genres=35"),fetchHorrorMovies:"/discover/movie?api_key=".concat(h,"&with_genres=27"),fetchRomanceMovies:"/discover/movie?api_key=".concat(h,"&with_genres=10749"),fetchDocumentaries:"/discover/movie?api_key=".concat(h,"&with_genres=99")};r(57);function p(){p=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},o=n.iterator||"@@iterator",a=n.asyncIterator||"@@asyncIterator",i=n.toStringTag||"@@toStringTag";function c(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(O){c=function(t,e,r){return t[e]=r}}function u(t,e,r,n){var o=e&&e.prototype instanceof h?e:h,a=Object.create(o.prototype),i=new x(n||[]);return a._invoke=function(t,e,r){var n="suspendedStart";return function(o,a){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw a;return N()}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var c=_(i,r);if(c){if(c===s)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var u=l(t,e,r);if("normal"===u.type){if(n=r.done?"completed":"suspendedYield",u.arg===s)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n="completed",r.method="throw",r.arg=u.arg)}}}(t,r,i),a}function l(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(O){return{type:"throw",arg:O}}}t.wrap=u;var s={};function h(){}function f(){}function v(){}var d={};c(d,o,function(){return this});var m=Object.getPrototypeOf,y=m&&m(m(k([])));y&&y!==e&&r.call(y,o)&&(d=y);var g=v.prototype=h.prototype=Object.create(d);function w(t){["next","throw","return"].forEach(function(e){c(t,e,function(t){return this._invoke(e,t)})})}function b(t,e){var n;this._invoke=function(o,a){function i(){return new e(function(n,i){!function n(o,a,i,c){var u=l(t[o],t,a);if("throw"!==u.type){var s=u.arg,h=s.value;return h&&"object"==typeof h&&r.call(h,"__await")?e.resolve(h.__await).then(function(t){n("next",t,i,c)},function(t){n("throw",t,i,c)}):e.resolve(h).then(function(t){s.value=t,i(s)},function(t){return n("throw",t,i,c)})}c(u.arg)}(o,a,n,i)})}return n=n?n.then(i,i):i()}}function _(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,_(t,e),"throw"===e.method))return s;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return s}var n=l(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,s;var o=n.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,s):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,s)}function E(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function L(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function x(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(E,this),this.reset(!0)}function k(t){if(t){var e=t[o];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,a=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return a.next=a}}return{next:N}}function N(){return{value:void 0,done:!0}}return f.prototype=v,c(g,"constructor",v),c(v,"constructor",f),f.displayName=c(v,i,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===f||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,v):(t.__proto__=v,c(t,i,"GeneratorFunction")),t.prototype=Object.create(g),t},t.awrap=function(t){return{__await:t}},w(b.prototype),c(b.prototype,a,function(){return this}),t.AsyncIterator=b,t.async=function(e,r,n,o,a){void 0===a&&(a=Promise);var i=new b(u(e,r,n,o),a);return t.isGeneratorFunction(r)?i:i.next().then(function(t){return t.done?t.value:i.next()})},w(g),c(g,i,"Generator"),c(g,o,function(){return this}),c(g,"toString",function(){return"[object Generator]"}),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=k,x.prototype={constructor:x,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(L),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return i.type="throw",i.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],i=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var c=r.call(a,"catchLoc"),u=r.call(a,"finallyLoc");if(c&&u){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,s):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),s},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),L(r),s}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;L(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:k(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),s}},t}var v=function(){var t=Object(n.useState)({}),e=Object(u.a)(t,2),r=e[0],a=e[1];Object(n.useEffect)(function(){function t(){return(t=Object(c.a)(p().mark(function t(){var e;return p().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.get(f.fetchNetflixOriginals);case 2:return e=t.sent,a(e.data.results[Math.floor(Math.random()*e.data.results.length-1)]),t.abrupt("return",e);case 5:case"end":return t.stop()}},t)}))).apply(this,arguments)}!function(){t.apply(this,arguments)}()},[f]);return o.a.createElement("header",{className:"banner",style:{backgroundSize:"cover",backgroundImage:"url(\n                    'https://image.tmdb.org/t/p/original/".concat(r.backdrop_path||r.poster_path,"'\n                )"),backgroundPosition:"center center"}},o.a.createElement("div",{className:"banner__contents"},o.a.createElement("h1",{className:"banner__title"},r.original_name||r.name||r.title||r.original_title),o.a.createElement("div",{className:"banner__buttons"},o.a.createElement("button",{className:"banner__button"},"  Play "),o.a.createElement("button",{className:"banner__button"}," My List ")),o.a.createElement("h1",{className:"banner__description"},function(t,e){if(t)return t.length>e?t.substr(0,e-1)+"...":t}(r.overview,150))),o.a.createElement("div",{className:"banner__fadeBotton"}))},d=(r(58),function(){var t=Object(n.useState)(!1),e=Object(u.a)(t,2),r=e[0],a=e[1];return Object(n.useEffect)(function(){var t=function(){window.scrollY>100?a(!0):a(!1)};return window.addEventListener("scroll",t),function(){window.removeEventListener("scroll",t)}},[]),o.a.createElement("nav",{className:"nav ".concat(r&&"nav__black"," ")},o.a.createElement("img",{className:"nav__logo",src:"https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png",alt:"Netflix Logo"}),o.a.createElement("img",{className:"nav__avatar",src:"https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png?20201013161117",alt:"Netflix Logo"}))}),m=(r(59),r(24)),y=r(21),g=r.n(y);function w(){w=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},o=n.iterator||"@@iterator",a=n.asyncIterator||"@@asyncIterator",i=n.toStringTag||"@@toStringTag";function c(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(O){c=function(t,e,r){return t[e]=r}}function u(t,e,r,n){var o=e&&e.prototype instanceof h?e:h,a=Object.create(o.prototype),i=new x(n||[]);return a._invoke=function(t,e,r){var n="suspendedStart";return function(o,a){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw a;return N()}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var c=_(i,r);if(c){if(c===s)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var u=l(t,e,r);if("normal"===u.type){if(n=r.done?"completed":"suspendedYield",u.arg===s)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n="completed",r.method="throw",r.arg=u.arg)}}}(t,r,i),a}function l(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(O){return{type:"throw",arg:O}}}t.wrap=u;var s={};function h(){}function f(){}function p(){}var v={};c(v,o,function(){return this});var d=Object.getPrototypeOf,m=d&&d(d(k([])));m&&m!==e&&r.call(m,o)&&(v=m);var y=p.prototype=h.prototype=Object.create(v);function g(t){["next","throw","return"].forEach(function(e){c(t,e,function(t){return this._invoke(e,t)})})}function b(t,e){var n;this._invoke=function(o,a){function i(){return new e(function(n,i){!function n(o,a,i,c){var u=l(t[o],t,a);if("throw"!==u.type){var s=u.arg,h=s.value;return h&&"object"==typeof h&&r.call(h,"__await")?e.resolve(h.__await).then(function(t){n("next",t,i,c)},function(t){n("throw",t,i,c)}):e.resolve(h).then(function(t){s.value=t,i(s)},function(t){return n("throw",t,i,c)})}c(u.arg)}(o,a,n,i)})}return n=n?n.then(i,i):i()}}function _(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,_(t,e),"throw"===e.method))return s;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return s}var n=l(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,s;var o=n.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,s):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,s)}function E(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function L(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function x(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(E,this),this.reset(!0)}function k(t){if(t){var e=t[o];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,a=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return a.next=a}}return{next:N}}function N(){return{value:void 0,done:!0}}return f.prototype=p,c(y,"constructor",p),c(p,"constructor",f),f.displayName=c(p,i,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===f||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,p):(t.__proto__=p,c(t,i,"GeneratorFunction")),t.prototype=Object.create(y),t},t.awrap=function(t){return{__await:t}},g(b.prototype),c(b.prototype,a,function(){return this}),t.AsyncIterator=b,t.async=function(e,r,n,o,a){void 0===a&&(a=Promise);var i=new b(u(e,r,n,o),a);return t.isGeneratorFunction(r)?i:i.next().then(function(t){return t.done?t.value:i.next()})},g(y),c(y,i,"Generator"),c(y,o,function(){return this}),c(y,"toString",function(){return"[object Generator]"}),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=k,x.prototype={constructor:x,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(L),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return i.type="throw",i.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],i=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var c=r.call(a,"catchLoc"),u=r.call(a,"finallyLoc");if(c&&u){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,s):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),s},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),L(r),s}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;L(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:k(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),s}},t}var b=function(t){var e=t.title,r=t.fetchUrl,a=t.isLargeRow,i=Object(n.useState)([]),l=Object(u.a)(i,2),h=l[0],f=l[1],p=Object(n.useState)(""),v=Object(u.a)(p,2),d=v[0],y=v[1];Object(n.useEffect)(function(){function t(){return(t=Object(c.a)(w().mark(function t(){var e;return w().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.get(r);case 2:return e=t.sent,f(e.data.results),t.abrupt("return",e);case 5:case"end":return t.stop()}},t)}))).apply(this,arguments)}!function(){t.apply(this,arguments)}()},[r]);var b=function(){var t=Object(c.a)(w().mark(function t(e){var r,n;return w().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:r=e.first_air_date||e.release_date,console.log(Number(r.slice(0,4))),n=e.original_name||e.name||e.title||e.original_title,console.log(n),d?y(""):g()(n).then(function(t){t||y("https://www.youtube.com/watch?v=&ab_channel=YouTubeViewers");var e=new URLSearchParams(new URL(t).search);y(e.get("v"))}).catch(function(t){return console.log(t)});case 5:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}();return o.a.createElement("div",{className:"row"},o.a.createElement("h2",null,e),o.a.createElement("div",{className:"row__posters"},h.map(function(t){return o.a.createElement("img",{key:t.id,onClick:function(){return b(t)},className:"row__poster ".concat(a&&"row__posterLarge"," "),src:"".concat("https://image.tmdb.org/t/p/original/").concat(a?t.poster_path:t.backdrop_path),alt:t.name})})),d&&o.a.createElement(m.a,{videoId:d,opts:{height:"390",width:"100%",playerVars:{autoplay:1}}}))};var _=function(){return o.a.createElement("div",{className:"app"},o.a.createElement(d,null),o.a.createElement(v,null),o.a.createElement(b,{title:"NETFLIX ORIGINALS",fetchUrl:f.fetchNetflixOriginals,isLargeRow:!0}),o.a.createElement(b,{title:"Trending Now",fetchUrl:f.fetchTrending}),o.a.createElement(b,{title:"Top Rated",fetchUrl:f.fetchTopRated}),o.a.createElement(b,{title:"Action Movies",fetchUrl:f.fetchActionMovies}),o.a.createElement(b,{title:"Comedy Movies",fetchUrl:f.fetchComedyMovies}),o.a.createElement(b,{title:"Horror Movies",fetchUrl:f.fetchHorrorMovies}),o.a.createElement(b,{title:"Romance Movies",fetchUrl:f.fetchRomanceMovies}),o.a.createElement(b,{title:"Documentaries",fetchUrl:f.fetchDocumentaries}))},E=function(t){t&&t instanceof Function&&r.e(3).then(r.bind(null,81)).then(function(e){var r=e.getCLS,n=e.getFID,o=e.getFCP,a=e.getLCP,i=e.getTTFB;r(t),n(t),o(t),a(t),i(t)})};i.a.createRoot(document.getElementById("root")).render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(_,null))),E()}},[[25,1,2]]]);
//# sourceMappingURL=main.6bef953f.chunk.js.map