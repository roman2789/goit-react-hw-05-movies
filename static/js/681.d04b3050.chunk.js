"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[681],{197:function(t,n,e){e.d(n,{Df:function(){return h},TP:function(){return d},V0:function(){return v},tx:function(){return w},zv:function(){return m}});var r=e(861),a=e(757),u=e.n(a),c=e(243);c.Z.defaults.baseURL="https://api.themoviedb.org/3";var s="/trending/movie/week",o="/search/movie",i="/movie",p="/credits",f="/reviews",l="e779e884534a7fdc136df07bb4867833",h=function(){var t=(0,r.Z)(u().mark((function t(){var n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("".concat(s,"?"),{params:{api_key:l}});case 2:return n=t.sent,t.abrupt("return",n.data.results);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),v=function(){var t=(0,r.Z)(u().mark((function t(n){var e;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("".concat(o,"?"),{params:{api_key:l,query:n}});case 2:return e=t.sent,t.abrupt("return",e.data.results);case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),d=function(){var t=(0,r.Z)(u().mark((function t(n){var e;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("".concat(i,"/").concat(n,"?"),{params:{api_key:l}});case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),m=function(){var t=(0,r.Z)(u().mark((function t(n){var e;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("movie/".concat(n).concat(p,"?"),{params:{api_key:l}});case 2:return e=t.sent,t.abrupt("return",e.data.cast);case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),w=function(){var t=(0,r.Z)(u().mark((function t(n){var e;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("movie/".concat(n).concat(f,"?"),{params:{api_key:l}});case 2:return e=t.sent,t.abrupt("return",e.data.results);case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}()},681:function(t,n,e){e.r(n);var r=e(439),a=e(197),u=e(791),c=e(689),s=e(184);n.default=function(){var t=(0,u.useState)(null),n=(0,r.Z)(t,2),e=n[0],o=n[1],i=(0,u.useState)(null),p=(0,r.Z)(i,2),f=p[0],l=p[1],h=(0,u.useState)(!1),v=(0,r.Z)(h,2),d=v[0],m=v[1],w=(0,c.UO)().id;return(0,u.useEffect)((function(){m(!0),(0,a.tx)(w).then((function(t){t.length?(console.log(t),o(t)):l("No reviews")})).catch((function(t){console.log(t),l("Oops, smth went wrong...")})).finally((function(){return m(!1)}))}),[w]),(0,s.jsxs)("div",{children:[d&&"Loading ...",f&&(0,s.jsx)("div",{children:f}),(0,s.jsx)("ul",{children:e&&e.map((function(t){return(0,s.jsxs)("li",{children:[(0,s.jsx)("h2",{children:t.author}),(0,s.jsx)("p",{children:t.content})]},t.id)}))})]})}}}]);
//# sourceMappingURL=681.d04b3050.chunk.js.map