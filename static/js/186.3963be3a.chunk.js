"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[186],{6308:function(e,n,r){r.d(n,{Hg:function(){return s},IR:function(){return i},ac:function(){return o}});var t=r(5861),a=r(7757),c=r.n(a),u=r(1243),o=function(){var e=(0,t.Z)(c().mark((function e(n,r){var t,a;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("".concat("https://api.themoviedb.org/3").concat(n,"?api_key=").concat("ba8df02c5548f4248e5d9d0723885591").concat(r?"&query=".concat(r):"","&language=en-US"));case 2:return t=e.sent,a=t.data,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(n,r){return e.apply(this,arguments)}}(),s=function(){var e=(0,t.Z)(c().mark((function e(){return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o("/trending/movie/day");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),i=function(){var e=(0,t.Z)(c().mark((function e(n){return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o("/search/movie",n);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()},186:function(e,n,r){r.r(n);var t=r(5861),a=r(9439),c=r(7757),u=r.n(c),o=r(6308),s=r(6134),i=r(2791),p=r(7689),f=r(7596),l=r(184);n.default=function(){var e=(0,i.useState)([]),n=(0,a.Z)(e,2),r=n[0],c=n[1],h=(0,i.useState)(null),v=(0,a.Z)(h,2),d=v[0],m=v[1],x=(0,p.UO)().movieId;return(0,i.useEffect)((function(){function e(){return(e=(0,t.Z)(u().mark((function e(){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,o.ac)("/movie/".concat(x,"/reviews"));case 3:if(n=e.sent){e.next=6;break}return e.abrupt("return");case 6:c(n.results),e.next=14;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(d),m(e.t0.message),f.Am.error(e.t0.message,s.Z);case 14:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[d,x]),(0,l.jsxs)(l.Fragment,{children:[0===r.length&&(0,l.jsx)("p",{children:"We don't have any reviews for this movie."}),(0,l.jsx)("ul",{children:null===r||void 0===r?void 0:r.map((function(e){var n=e.id,r=e.author,t=e.content;return(0,l.jsxs)("li",{children:[(0,l.jsxs)("p",{children:["Author: ",r]}),(0,l.jsx)("p",{children:t})]},n)}))})]})}},6134:function(e,n){var r={position:"top-center",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"colored"};n.Z=r}}]);
//# sourceMappingURL=186.3963be3a.chunk.js.map