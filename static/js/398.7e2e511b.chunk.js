"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[398],{6308:function(e,t,n){n.d(t,{Hg:function(){return u},IR:function(){return o},ac:function(){return i}});var r=n(5861),a=n(7757),c=n.n(a),s=n(1243),i=function(){var e=(0,r.Z)(c().mark((function e(t,n){var r,a;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("".concat("https://api.themoviedb.org/3").concat(t,"?api_key=").concat("ba8df02c5548f4248e5d9d0723885591").concat(n?"&query=".concat(n):"","&language=en-US"));case 2:return r=e.sent,a=r.data,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),u=function(){var e=(0,r.Z)(c().mark((function e(){return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i("/trending/movie/day");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),o=function(){var e=(0,r.Z)(c().mark((function e(t){return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i("/search/movie",t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},9155:function(e,t,n){n.d(t,{Z:function(){return l}});var r=n(7689),a=n(1087),c=n(4079),s="MoviesList_trendingBox__nADPS",i="MoviesList_trendingItem__ULUxz",u="MoviesList_title__PB2c8",o="MoviesList_link__8rTGX",p=n(184),l=function(e){var t=e.movies,n=(0,r.TH)();return(0,p.jsx)("ul",{className:s,children:t.map((function(e){var t=e.id,r=e.tagline,s=e.title,l=e.poster_path,f=l?"https://image.tmdb.org/t/p/w400".concat(l):c;return(0,p.jsx)("li",{className:i,children:(0,p.jsxs)(a.rU,{className:o,to:"/movies/".concat(t),state:{from:n},children:[(0,p.jsx)("img",{src:f,alt:r,width:250}),(0,p.jsx)("p",{className:u,children:s})]})},t)}))})}},6134:function(e,t){var n={position:"top-center",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"colored"};t.Z=n},398:function(e,t,n){n.r(t),n.d(t,{default:function(){return _}});var r=n(5861),a=n(9439),c=n(7757),s=n.n(c),i=n(2791),u=n(6308),o=n(6134),p=n(7596),l=(n(5462),n(9155)),f="MovieSearch_searchForm__8c7z6",m="MovieSearch_searchFormBtn__BrevM",h="MovieSearch_searchFormBtnInput__iLPSt",v=n(184),d=function(e){var t=e.handleSubmit,n=e.changeInput;return(0,v.jsxs)("form",{className:f,onSubmit:t,children:[(0,v.jsx)("input",{className:h,type:"text",name:"searching",autoComplete:"off",autoFocus:!0,onChange:function(e){return n(e.target.value)}}),(0,v.jsx)("button",{type:"submit",className:m,children:"Search"})]})},g=n(1087),_=function(){var e,t=(0,i.useState)([]),n=(0,a.Z)(t,2),c=n[0],f=n[1],m=(0,g.lr)(),h=(0,a.Z)(m,2),_=h[0],x=h[1],b=null!==(e=_.get("query"))&&void 0!==e?e:"";(0,i.useEffect)((function(){function e(){return(e=(0,r.Z)(s().mark((function e(){var t,n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,u.IR)(b);case 3:if(0!==(t=e.sent).results.length){e.next=7;break}return p.Am.warning("No movies found",o.Z),e.abrupt("return");case 7:n=t.results.map((function(e){var t=e.tagline,n=e.poster_path;return{title:e.title,id:e.id,poster_path:n,tagline:t}})),f(n),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),p.Am.error(e.t0.message,o.Z);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})))).apply(this,arguments)}b&&function(){e.apply(this,arguments)}()}),[b,_.size]);return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(d,{handleSubmit:function(e){e.preventDefault();var t=e.target.searching.value.trim().toLowerCase();t?x({query:t}):(x({}),p.Am.warn("Please enter a request!",o.Z))},changeInput:function(e){""===e&&(x({}),f([]))}}),c.length>0&&(0,v.jsx)(l.Z,{movies:c})]})}},5462:function(){},4079:function(e,t,n){e.exports=n.p+"static/media/film-popkorn-700x466-1-min.16a7b53794262b049ad0.jpg"}}]);
//# sourceMappingURL=398.7e2e511b.chunk.js.map