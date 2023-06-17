/*! For license information please see main.dac93a0d.chunk.js.LICENSE.txt */
(this["webpackJsonpreact-clone"]=this["webpackJsonpreact-clone"]||[]).push([[0],{11:function(e,t,r){e.exports={container:"SearchForm_container__3EOy-",searchForm:"SearchForm_searchForm__1BivO",searchframe:"SearchForm_searchframe__2oihz",buttons:"SearchForm_buttons__28nbS",resetbtn:"SearchForm_resetbtn__2lpTJ",searchbtn:"SearchForm_searchbtn__38L03"}},17:function(e,t,r){e.exports={container:"Banner_container__3ioW9",banner:"Banner_banner__1-rBM",loading:"Banner_loading__2dlB_",movieIntro:"Banner_movieIntro__1dJG8"}},18:function(e,t,r){e.exports={container:"ResultList_container__109Ze",resultList:"ResultList_resultList__1eDUs",noList:"ResultList_noList__d4GeW",noMovie:"ResultList_noMovie__24tKx"}},23:function(e,t,r){e.exports={container:"NavBar_container__2IrNK",navBarContainer:"NavBar_navBarContainer__y-KiX",scrolldown:"NavBar_scrolldown__26bGJ"}},24:function(e,t,r){e.exports={movieDetailContainer:"MovieDetail_movieDetailContainer__1BQZn",movieDetailContent:"MovieDetail_movieDetailContent__21E0c",movieTrailerFrame:"MovieDetail_movieTrailerFrame__2hZ_o"}},25:function(e,t,r){e.exports={container:"MovieListItem_container__2kTSz",listMovieItem:"MovieListItem_listMovieItem__3XyFH"}},26:function(e,t,r){e.exports={container:"MovieList_container__3aY_W",movieList:"MovieList_movieList__StKo7"}},29:function(e,t,r){e.exports={netflix:"MovieItem_netflix__uSl2A"}},33:function(e,t,r){e.exports={movieItem:"ResultMovieItem_movieItem__htqji"}},35:function(e,t,r){e.exports=r(56)},40:function(e,t,r){},55:function(e,t,r){},56:function(e,t,r){"use strict";r.r(t);var n=r(0),o=r.n(n),a=r(28),i=r.n(a),c=(r(40),r(34)),l=r(2),s=r(4),u=r(3),h=r(23),f=r.n(h),v=function(){var e=Object(n.useState)(!1),t=Object(u.a)(e,2),r=t[0],a=t[1];window.onscroll=function(){window.scrollY>100?a(!0):a(!1)};return o.a.createElement("div",null,o.a.createElement("div",{className:f.a.container},o.a.createElement("div",{className:"".concat(f.a.navBarContainer," ").concat(r?f.a.scrolldown:"")},o.a.createElement("h2",{onClick:function(){window.location.replace("/")}},"Movie App"),o.a.createElement("svg",{className:"svg-inline--fa fa-search fa-w-16",fill:"#ccc","aria-hidden":"true","data-prefix":"fas","data-icon":"search",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",onClick:function(){window.location.replace("/search")}},o.a.createElement("path",{d:"M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"})))))},p=r(17),d=r.n(p),m=function(e){var t=e.movieBannerRandom?e.movieBannerRandom.original_name:"",r=e.movieBannerRandom?e.movieBannerRandom.overview:"",n=e.movieBannerRandom?"url(https://image.tmdb.org/t/p/original".concat(e.movieBannerRandom.backdrop_path,")"):"black";return o.a.createElement("div",{className:d.a.container,style:{backgroundImage:n}},o.a.createElement("div",{className:"".concat(d.a.banner," ").concat(e.isLoading?d.a.loading:"")},e.isLoading?o.a.createElement("h2",null,"Loading..."):o.a.createElement("div",{className:d.a.movieIntro},o.a.createElement("h2",null,t),o.a.createElement("button",null,"Play"),o.a.createElement("button",null,"My List"),o.a.createElement("p",null,r))))},g=r(29),y=r.n(g),w=function(e){var t,r=e.type;return o.a.createElement("div",null,o.a.createElement("img",{id:e.moviesingle.id,className:"fetchNetflixOriginals"===r?y.a.netflix:"",src:e.moviesingle.poster_path||e.moviesingle.backdrop_path?"https://image.tmdb.org/t/p/original".concat("fetchNetflixOriginals"===e.type?e.moviesingle.poster_path:null!==(t=e.moviesingle.backdrop_path)&&void 0!==t?t:e.moviesingle.poster_path):"t\u1ea3i xu\u1ed1ng.png",alt:"No picture found"}))},b=r(25),_=r.n(b),E=r(24),L=r.n(E),x=r(30),k=function(e){var t,r,n,a=null!==(t=e.moviedetail[0].backdrop_path)&&void 0!==t?t:e.moviedetail[0].poster_path;return o.a.createElement("div",{className:L.a.movieDetailContainer},o.a.createElement("div",{className:L.a.movieDetailContent},o.a.createElement("h2",null,null!==(r=e.moviedetail[0].original_title)&&void 0!==r?r:e.moviedetail[0].original_name),o.a.createElement("h4",null,"Release Date:"," ",null!==(n=e.moviedetail[0].release_date)&&void 0!==n?n:e.moviedetail[0].first_air_date),o.a.createElement("h4",null,"Vote: ",e.moviedetail[0].vote_average,"/10"),o.a.createElement("p",null,e.moviedetail[0].overview),e.error&&o.a.createElement("h3",null,"This film dont have Trailer")),o.a.createElement("div",{className:L.a.movieTrailerFrame},0!==e.movieTrailer.length&&e.movieTrailer?o.a.createElement(x.a,{videoId:e.movieTrailer.key,opts:{height:"400",width:"100%",playerVars:{autoplay:0}}}):o.a.createElement("img",{src:a?"https://image.tmdb.org/t/p/original".concat(a):"/t\u1ea3i xu\u1ed1ng.png"})))};function O(){O=function(){return e};var e={},t=Object.prototype,r=t.hasOwnProperty,n=Object.defineProperty||function(e,t,r){e[t]=r.value},o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function l(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{l({},"")}catch(N){l=function(e,t,r){return e[t]=r}}function s(e,t,r,o){var a=t&&t.prototype instanceof f?t:f,i=Object.create(a.prototype),c=new k(o||[]);return n(i,"_invoke",{value:_(e,r,c)}),i}function u(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(N){return{type:"throw",arg:N}}}e.wrap=s;var h={};function f(){}function v(){}function p(){}var d={};l(d,a,(function(){return this}));var m=Object.getPrototypeOf,g=m&&m(m(j([])));g&&g!==t&&r.call(g,a)&&(d=g);var y=p.prototype=f.prototype=Object.create(d);function w(e){["next","throw","return"].forEach((function(t){l(e,t,(function(e){return this._invoke(t,e)}))}))}function b(e,t){var o;n(this,"_invoke",{value:function(n,a){function i(){return new t((function(o,i){!function n(o,a,i,c){var l=u(e[o],e,a);if("throw"!==l.type){var s=l.arg,h=s.value;return h&&"object"==typeof h&&r.call(h,"__await")?t.resolve(h.__await).then((function(e){n("next",e,i,c)}),(function(e){n("throw",e,i,c)})):t.resolve(h).then((function(e){s.value=e,i(s)}),(function(e){return n("throw",e,i,c)}))}c(l.arg)}(n,a,o,i)}))}return o=o?o.then(i,i):i()}})}function _(e,t,r){var n="suspendedStart";return function(o,a){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw a;return S()}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var c=E(i,r);if(c){if(c===h)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var l=u(e,t,r);if("normal"===l.type){if(n=r.done?"completed":"suspendedYield",l.arg===h)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(n="completed",r.method="throw",r.arg=l.arg)}}}function E(e,t){var r=t.method,n=e.iterator[r];if(void 0===n)return t.delegate=null,"throw"===r&&e.iterator.return&&(t.method="return",t.arg=void 0,E(e,t),"throw"===t.method)||"return"!==r&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+r+"' method")),h;var o=u(n,e.iterator,t.arg);if("throw"===o.type)return t.method="throw",t.arg=o.arg,t.delegate=null,h;var a=o.arg;return a?a.done?(t[e.resultName]=a.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,h):a:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,h)}function L(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function x(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function k(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(L,this),this.reset(!0)}function j(e){if(e){var t=e[a];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,o=function t(){for(;++n<e.length;)if(r.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return o.next=o}}return{next:S}}function S(){return{value:void 0,done:!0}}return v.prototype=p,n(y,"constructor",{value:p,configurable:!0}),n(p,"constructor",{value:v,configurable:!0}),v.displayName=l(p,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===v||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,p):(e.__proto__=p,l(e,c,"GeneratorFunction")),e.prototype=Object.create(y),e},e.awrap=function(e){return{__await:e}},w(b.prototype),l(b.prototype,i,(function(){return this})),e.AsyncIterator=b,e.async=function(t,r,n,o,a){void 0===a&&(a=Promise);var i=new b(s(t,r,n,o),a);return e.isGeneratorFunction(r)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},w(y),l(y,c,"Generator"),l(y,a,(function(){return this})),l(y,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},e.values=j,k.prototype={constructor:k,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(x),!e)for(var t in this)"t"===t.charAt(0)&&r.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(r,n){return i.type="throw",i.arg=e,t.next=r,n&&(t.method="next",t.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],i=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var c=r.call(a,"catchLoc"),l=r.call(a,"finallyLoc");if(c&&l){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=e,i.arg=t,a?(this.method="next",this.next=a.finallyLoc,h):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),h},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),x(r),h}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var o=n.arg;x(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:j(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),h}},e}var j=function(e){var t,r=Object(n.useState)(!1),a=Object(u.a)(r,2),i=a[0],c=a[1],l=Object(n.useState)(0),h=Object(u.a)(l,2),f=h[0],v=h[1],p=Object(n.useState)([]),d=Object(u.a)(p,2),m=d[0],g=d[1],y=Object(n.useState)(""),b=Object(u.a)(y,2),E=b[0],L=b[1];"fetchNetflixOriginals"===e.movieListArr.type?t="":"fetchTrending"===e.movieListArr.type?t="Xu H\u01b0\u1edbng":"fetchTopRated"===e.movieListArr.type?t="X\u1ebfp h\u1ea1ng cao":"fetchActionMovies"===e.movieListArr.type?t="H\xe0nh \u0110\u1ed9ng":"fetchComedyMovies"===e.movieListArr.type?t="H\xe0i":"fetchHorrorMovies"===e.movieListArr.type?t="Kinh D\u1ecb":"fetchRomanceMovies"===e.movieListArr.type?t="L\xe3ng m\u1ea1ng":"fetchDocumentaries"===e.movieListArr.type&&(t="T\xe0i li\u1ec7u");var x=function(){var e=Object(s.a)(O().mark((function e(t){var r,n,o;return O().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://api.themoviedb.org/3/movie/".concat(t,"/videos?api_key=381d90cbe832f9ed337e1407f33d8116"));case 3:if((r=e.sent).ok){e.next=6;break}throw new Error("This film dont have trailer");case 6:return e.next=8,r.json();case 8:n=e.sent,0===(o=n.results.filter((function(e){return"YouTube"===e.site&&"Trailer"===e.type}))).length&&(o=n.results.filter((function(e){return"YouTube"===e.site&&"Teaser"===e.type}))),o[0]?(g(o[0]),L("")):g([]),e.next=18;break;case 14:e.prev=14,e.t0=e.catch(0),g([]),L(e.t0.message);case 18:case"end":return e.stop()}}),e,null,[[0,14]])})));return function(t){return e.apply(this,arguments)}}();return o.a.createElement("div",{className:_.a.container},o.a.createElement("h2",null,t),o.a.createElement("div",{className:_.a.listMovieItem,onClick:function(e){f===e.target.id?c((function(e){return!e})):c(!0),v(e.target.id),x(e.target.id)}},e.movieListArr.data.results.map((function(t){return o.a.createElement(w,{key:t.id,type:e.movieListArr.type,moviesingle:t})}))),i&&f&&o.a.createElement(k,{movieTrailer:m,error:E,moviedetail:e.movieListArr.data.results.filter((function(e){return e.id===Number(f)}))}))},S=r(26),N=r.n(S),T=function(e){return o.a.createElement("div",{className:N.a.container},o.a.createElement("div",{className:N.a.movieList},e.movieDataArr.slice(0,-1).map((function(t,r){return o.a.createElement(j,{key:r+1,movieListArr:t,isLoading:e.isLoading})}))))};function M(){M=function(){return e};var e={},t=Object.prototype,r=t.hasOwnProperty,n=Object.defineProperty||function(e,t,r){e[t]=r.value},o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function l(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{l({},"")}catch(S){l=function(e,t,r){return e[t]=r}}function s(e,t,r,o){var a=t&&t.prototype instanceof f?t:f,i=Object.create(a.prototype),c=new k(o||[]);return n(i,"_invoke",{value:_(e,r,c)}),i}function u(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(S){return{type:"throw",arg:S}}}e.wrap=s;var h={};function f(){}function v(){}function p(){}var d={};l(d,a,(function(){return this}));var m=Object.getPrototypeOf,g=m&&m(m(O([])));g&&g!==t&&r.call(g,a)&&(d=g);var y=p.prototype=f.prototype=Object.create(d);function w(e){["next","throw","return"].forEach((function(t){l(e,t,(function(e){return this._invoke(t,e)}))}))}function b(e,t){var o;n(this,"_invoke",{value:function(n,a){function i(){return new t((function(o,i){!function n(o,a,i,c){var l=u(e[o],e,a);if("throw"!==l.type){var s=l.arg,h=s.value;return h&&"object"==typeof h&&r.call(h,"__await")?t.resolve(h.__await).then((function(e){n("next",e,i,c)}),(function(e){n("throw",e,i,c)})):t.resolve(h).then((function(e){s.value=e,i(s)}),(function(e){return n("throw",e,i,c)}))}c(l.arg)}(n,a,o,i)}))}return o=o?o.then(i,i):i()}})}function _(e,t,r){var n="suspendedStart";return function(o,a){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw a;return j()}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var c=E(i,r);if(c){if(c===h)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var l=u(e,t,r);if("normal"===l.type){if(n=r.done?"completed":"suspendedYield",l.arg===h)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(n="completed",r.method="throw",r.arg=l.arg)}}}function E(e,t){var r=t.method,n=e.iterator[r];if(void 0===n)return t.delegate=null,"throw"===r&&e.iterator.return&&(t.method="return",t.arg=void 0,E(e,t),"throw"===t.method)||"return"!==r&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+r+"' method")),h;var o=u(n,e.iterator,t.arg);if("throw"===o.type)return t.method="throw",t.arg=o.arg,t.delegate=null,h;var a=o.arg;return a?a.done?(t[e.resultName]=a.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,h):a:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,h)}function L(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function x(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function k(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(L,this),this.reset(!0)}function O(e){if(e){var t=e[a];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,o=function t(){for(;++n<e.length;)if(r.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return o.next=o}}return{next:j}}function j(){return{value:void 0,done:!0}}return v.prototype=p,n(y,"constructor",{value:p,configurable:!0}),n(p,"constructor",{value:v,configurable:!0}),v.displayName=l(p,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===v||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,p):(e.__proto__=p,l(e,c,"GeneratorFunction")),e.prototype=Object.create(y),e},e.awrap=function(e){return{__await:e}},w(b.prototype),l(b.prototype,i,(function(){return this})),e.AsyncIterator=b,e.async=function(t,r,n,o,a){void 0===a&&(a=Promise);var i=new b(s(t,r,n,o),a);return e.isGeneratorFunction(r)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},w(y),l(y,c,"Generator"),l(y,a,(function(){return this})),l(y,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},e.values=O,k.prototype={constructor:k,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(x),!e)for(var t in this)"t"===t.charAt(0)&&r.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(r,n){return i.type="throw",i.arg=e,t.next=r,n&&(t.method="next",t.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],i=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var c=r.call(a,"catchLoc"),l=r.call(a,"finallyLoc");if(c&&l){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=e,i.arg=t,a?(this.method="next",this.next=a.finallyLoc,h):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),h},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),x(r),h}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var o=n.arg;x(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:O(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),h}},e}var A=function(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),r=t[0],a=t[1],i=Object(n.useState)(),c=Object(u.a)(i,2),l=c[0],h=c[1],f=Object(n.useState)(!1),p=Object(u.a)(f,2),d=p[0],g=p[1],y="381d90cbe832f9ed337e1407f33d8116",w={fetchNetflixOriginals:"/discover/tv?api_key=".concat(y,"&with_network=123"),fetchTrending:"/trending/all/week?api_key=".concat(y,"&language=en-US"),fetchTopRated:"/movie/top_rated?api_key=".concat(y,"&language=en-US"),fetchActionMovies:"/discover/movie?api_key=".concat(y,"&with_genres=28"),fetchComedyMovies:"/discover/movie?api_key=".concat(y,"&with_genres=35"),fetchHorrorMovies:"/discover/movie?api_key=".concat(y,"&with_genres=27"),fetchRomanceMovies:"/discover/movie?api_key=".concat(y,"&with_genres=10749"),fetchDocumentaries:"/discover/movie?api_key=".concat(y,"&with_genres=99"),fetchSearch:"/search/movie?api_key=".concat(y,"&language=en-US")},b=[],_=function(){var e=Object(s.a)(M().mark((function e(){var t,r,n;return M().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:g(!0),e.prev=1,e.t0=M().keys(w);case 3:if((e.t1=e.t0()).done){e.next=16;break}return t=e.t1.value,e.next=7,fetch("https://api.themoviedb.org/3".concat(w[t]));case 7:if((r=e.sent).ok){e.next=10;break}throw new Error("This film is not available");case 10:return e.next=12,r.json();case 12:n=e.sent,b.push({type:t,data:n}),e.next=3;break;case 16:e.next=21;break;case 18:e.prev=18,e.t2=e.catch(1),console.log(e.t2.message);case 21:a(b),g(!1);case 23:case"end":return e.stop()}}),e,null,[[1,18]])})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){_()}),[]),Object(n.useEffect)((function(){var e=r.filter((function(e){return"fetchNetflixOriginals"===e.type}));0!==e.length&&h(e[0].data.results[Math.floor(Math.random()*e[0].data.results.length-1)])}),[r]),o.a.createElement("div",{className:"app"},o.a.createElement(v,null),o.a.createElement(m,{movieBannerRandom:l,isLoading:d}),o.a.createElement(T,{movieDataArr:r,isLoading:d}))},F=r(11),I=r.n(F),C=function(e){var t=Object(n.useState)(""),r=Object(u.a)(t,2),a=r[0],i=r[1];return o.a.createElement("div",{className:I.a.container},o.a.createElement("div",{className:I.a.searchForm},o.a.createElement("form",{className:I.a.searchframe},o.a.createElement("input",{value:a,placeholder:"Search your movie",onChange:function(e){i(e.target.value)}}),o.a.createElement("svg",{className:"svg-inline--fa fa-search fa-w-16",fill:"#ccc","aria-hidden":"true","data-prefix":"fas","data-icon":"search",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},o.a.createElement("path",{d:"M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"}))),o.a.createElement("div",{className:I.a.buttons},o.a.createElement("button",{className:I.a.resetbtn,onClick:function(t){e.getDataSearchMovie(""),i("")}},"RESET"),o.a.createElement("button",{className:I.a.searchbtn,onClick:function(){e.getDataSearchMovie(a)}},"SEARCH"))))},G=r(18),B=r.n(G),P=r(33),R=r.n(P),D=function(e){var t;return o.a.createElement("img",{className:R.a.movieItem,id:e.moviedata.id,src:e.moviedata.poster_path||e.moviedata.backdrop_path?"https://image.tmdb.org/t/p/original".concat(null!==(t=e.moviedata.poster_path)&&void 0!==t?t:e.moviedata.backdrop_path):"/t\u1ea3i xu\u1ed1ng.png",alt:"No Any picture Found for this movie"})},W=function(e){var t="No movie found, please input the right keyword for searching";e.error&&(t=e.error),e.isLoading&&(t="Loading...");var r=e.dataSearch.length>0?e.dataSearch.map((function(e,t){return o.a.createElement(D,{key:t+1,moviedata:e})})):o.a.createElement("p",{className:B.a.noMovie},t);return o.a.createElement("div",{className:"".concat(B.a.container," movieCheck")},o.a.createElement("h2",null,"Search Result"),o.a.createElement("div",{className:" ".concat(B.a.resultList,"\n          ").concat(!e.dataSearch.length&&B.a.noList)},r),e.movieModaleOpen&&e.curMovieID&&o.a.createElement(k,{movieTrailer:e.movieTrailer,error:e.error,moviedetail:e.dataSearch.filter((function(t){return t.id===Number(e.curMovieID)}))}))};r(55);function Y(){Y=function(){return e};var e={},t=Object.prototype,r=t.hasOwnProperty,n=Object.defineProperty||function(e,t,r){e[t]=r.value},o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function l(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{l({},"")}catch(S){l=function(e,t,r){return e[t]=r}}function s(e,t,r,o){var a=t&&t.prototype instanceof f?t:f,i=Object.create(a.prototype),c=new k(o||[]);return n(i,"_invoke",{value:_(e,r,c)}),i}function u(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(S){return{type:"throw",arg:S}}}e.wrap=s;var h={};function f(){}function v(){}function p(){}var d={};l(d,a,(function(){return this}));var m=Object.getPrototypeOf,g=m&&m(m(O([])));g&&g!==t&&r.call(g,a)&&(d=g);var y=p.prototype=f.prototype=Object.create(d);function w(e){["next","throw","return"].forEach((function(t){l(e,t,(function(e){return this._invoke(t,e)}))}))}function b(e,t){var o;n(this,"_invoke",{value:function(n,a){function i(){return new t((function(o,i){!function n(o,a,i,c){var l=u(e[o],e,a);if("throw"!==l.type){var s=l.arg,h=s.value;return h&&"object"==typeof h&&r.call(h,"__await")?t.resolve(h.__await).then((function(e){n("next",e,i,c)}),(function(e){n("throw",e,i,c)})):t.resolve(h).then((function(e){s.value=e,i(s)}),(function(e){return n("throw",e,i,c)}))}c(l.arg)}(n,a,o,i)}))}return o=o?o.then(i,i):i()}})}function _(e,t,r){var n="suspendedStart";return function(o,a){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw a;return j()}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var c=E(i,r);if(c){if(c===h)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var l=u(e,t,r);if("normal"===l.type){if(n=r.done?"completed":"suspendedYield",l.arg===h)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(n="completed",r.method="throw",r.arg=l.arg)}}}function E(e,t){var r=t.method,n=e.iterator[r];if(void 0===n)return t.delegate=null,"throw"===r&&e.iterator.return&&(t.method="return",t.arg=void 0,E(e,t),"throw"===t.method)||"return"!==r&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+r+"' method")),h;var o=u(n,e.iterator,t.arg);if("throw"===o.type)return t.method="throw",t.arg=o.arg,t.delegate=null,h;var a=o.arg;return a?a.done?(t[e.resultName]=a.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,h):a:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,h)}function L(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function x(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function k(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(L,this),this.reset(!0)}function O(e){if(e){var t=e[a];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,o=function t(){for(;++n<e.length;)if(r.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return o.next=o}}return{next:j}}function j(){return{value:void 0,done:!0}}return v.prototype=p,n(y,"constructor",{value:p,configurable:!0}),n(p,"constructor",{value:v,configurable:!0}),v.displayName=l(p,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===v||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,p):(e.__proto__=p,l(e,c,"GeneratorFunction")),e.prototype=Object.create(y),e},e.awrap=function(e){return{__await:e}},w(b.prototype),l(b.prototype,i,(function(){return this})),e.AsyncIterator=b,e.async=function(t,r,n,o,a){void 0===a&&(a=Promise);var i=new b(s(t,r,n,o),a);return e.isGeneratorFunction(r)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},w(y),l(y,c,"Generator"),l(y,a,(function(){return this})),l(y,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},e.values=O,k.prototype={constructor:k,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(x),!e)for(var t in this)"t"===t.charAt(0)&&r.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(r,n){return i.type="throw",i.arg=e,t.next=r,n&&(t.method="next",t.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],i=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var c=r.call(a,"catchLoc"),l=r.call(a,"finallyLoc");if(c&&l){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=e,i.arg=t,a?(this.method="next",this.next=a.finallyLoc,h):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),h},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),x(r),h}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var o=n.arg;x(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:O(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),h}},e}var H=function(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),r=t[0],a=t[1],i=Object(n.useState)(!1),c=Object(u.a)(i,2),l=c[0],h=c[1],f=Object(n.useState)(null),p=Object(u.a)(f,2),d=p[0],m=p[1],g=Object(n.useState)(!1),y=Object(u.a)(g,2),w=y[0],b=y[1],_=Object(n.useState)(0),E=Object(u.a)(_,2),L=E[0],x=E[1],k=Object(n.useState)([]),O=Object(u.a)(k,2),j=O[0],S=O[1],N=function(){var e=Object(s.a)(Y().mark((function e(t){var r,n;return Y().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return h((function(e){return!0})),""===t&&a([]),e.prev=2,e.next=5,fetch("https://api.themoviedb.org/3/search/movie?api_key=381d90cbe832f9ed337e1407f33d8116&language=en&query=".concat(t));case 5:if((r=e.sent).ok){e.next=8;break}throw new Error("Something Went Wrong, Please refresh the page and research again!");case 8:return e.next=10,r.json();case 10:n=e.sent,a(n.results),e.next=18;break;case 14:e.prev=14,e.t0=e.catch(2),console.log(e.t0),m(e.t0.message);case 18:h((function(e){return!1}));case 19:case"end":return e.stop()}}),e,null,[[2,14]])})));return function(t){return e.apply(this,arguments)}}(),T=function(){var e=Object(s.a)(Y().mark((function e(t){var r,n,o;return Y().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://api.themoviedb.org/3/movie/".concat(t,"/videos?api_key=381d90cbe832f9ed337e1407f33d8116"));case 3:if((r=e.sent).ok){e.next=6;break}throw new Error("This film dont have trailer");case 6:return e.next=8,r.json();case 8:n=e.sent,0===(o=n.results.filter((function(e){return"YouTube"===e.site&&"Trailer"===e.type}))).length&&(o=n.results.filter((function(e){return"YouTube"===e.site&&"Teaser"===e.type}))),o[0]?(S(o[0]),m("")):(m("This film dont have trailer"),S([])),e.next=18;break;case 14:e.prev=14,e.t0=e.catch(0),S([]),m(e.t0.message);case 18:case"end":return e.stop()}}),e,null,[[0,14]])})));return function(t){return e.apply(this,arguments)}}();return o.a.createElement("div",{className:"app",onClick:function(e){e.target.closest(".movieCheck")&&e.target.closest(".movieCheck").classList.contains("movieCheck")?(L&&b(!0),e.target.id&&(b(!0),T(e.target.id),x(e.target.id)),L===e.target.id&&b((function(e){return!e}))):b(!1)}},o.a.createElement(v,null),o.a.createElement(C,{getDataSearchMovie:N}),o.a.createElement(W,{dataSearch:r,isLoading:l,error:d,movieModaleOpen:w,curMovieID:L,movieTrailer:j}))};var U=function(){return o.a.createElement(c.a,null,o.a.createElement(l.c,null,o.a.createElement(l.a,{path:"/",element:o.a.createElement(A,null)}),o.a.createElement(l.a,{path:"/search",element:o.a.createElement(H,null)})))},z=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function J(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var r=e.installing;null!=r&&(r.onstatechange=function(){"installed"===r.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}i.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(U,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL(".",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat(".","/service-worker.js");z?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(r){var n=r.headers.get("content-type");404===r.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):J(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):J(t,e)}))}}()}},[[35,1,2]]]);
//# sourceMappingURL=main.dac93a0d.chunk.js.map