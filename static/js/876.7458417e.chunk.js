"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[876],{197:function(t,r,n){n.d(r,{Df:function(){return E},TP:function(){return I},V0:function(){return C},tx:function(){return h},zv:function(){return l}});var e=n(5861),a=n(7757),s=n.n(a),c=n(1243);c.Z.defaults.baseURL="https://api.themoviedb.org/3";var o="/trending/movie/week",i="/search/movie",p="/movie",A="/credits",u="/reviews",Q="e779e884534a7fdc136df07bb4867833",E=function(){var t=(0,e.Z)(s().mark((function t(){var r;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("".concat(o,"?"),{params:{api_key:Q}});case 2:return r=t.sent,t.abrupt("return",r.data.results);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),C=function(){var t=(0,e.Z)(s().mark((function t(r){var n;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("".concat(i,"?"),{params:{api_key:Q,query:r}});case 2:return n=t.sent,t.abrupt("return",n.data.results);case 4:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}(),I=function(){var t=(0,e.Z)(s().mark((function t(r){var n;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("".concat(p,"/").concat(r,"?"),{params:{api_key:Q}});case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}(),l=function(){var t=(0,e.Z)(s().mark((function t(r){var n;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("movie/".concat(r).concat(A,"?"),{params:{api_key:Q}});case 2:return n=t.sent,t.abrupt("return",n.data.cast);case 4:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}(),h=function(){var t=(0,e.Z)(s().mark((function t(r){var n;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("movie/".concat(r).concat(u,"?"),{params:{api_key:Q}});case 2:return n=t.sent,t.abrupt("return",n.data.results);case 4:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}()},6876:function(t,r,n){n.r(r),n.d(r,{default:function(){return l}});var e,a,s=n(9439),c=n(197),o=n(2791),i=n(7689),p=n(6035),A=n(168),u=n(6562),Q=u.ZP.ul(e||(e=(0,A.Z)(["\n  list-style: none;\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 15px;\n"]))),E=u.ZP.li(a||(a=(0,A.Z)(["\n  margin-bottom: 25px;\n"]))),C=n(3538),I=n(184),l=function(){var t=(0,o.useState)(null),r=(0,s.Z)(t,2),n=r[0],e=r[1],a=(0,o.useState)(null),A=(0,s.Z)(a,2),u=A[0],l=A[1],h=(0,o.useState)(!1),f=(0,s.Z)(h,2),g=f[0],x=f[1],m=(0,i.UO)().id;return(0,o.useEffect)((function(){x(!0),(0,c.zv)(m).then((function(t){t.length?e(t):l("No cast found...")})).catch((function(t){console.log(t),l("No information")})).finally((function(){return x(!1)}))}),[m]),(0,I.jsxs)(I.Fragment,{children:[g&&(0,I.jsx)(C.Z,{}),u&&(0,I.jsx)("div",{children:u}),(0,I.jsx)(Q,{children:n&&n.map((function(t){return(0,I.jsxs)(E,{children:[(0,I.jsx)("img",{src:t.profile_path?"https://image.tmdb.org/t/p/w200/".concat(t.profile_path):p,alt:t.original_name}),(0,I.jsx)("h4",{children:t.original_name}),(0,I.jsx)("p",{children:t.character})]},t.cast_id)}))})]})}},6035:function(t){t.exports="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgICQgICQgJCQkJCRYIBgcHChsICQcKIBUWIiAdHx8kHygsJCYlJx8fLTEhJSkrLi4uIyszODMsNygtLisBCgoKDQ0NDw0NDysZFRkrLSsrKysrLSsrKysrLS0rKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIAPQAzgMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAAABAEDBQIGB//EAEQQAAECAwIICQkIAgIDAAAAAAIAAwEEEgURExQiMjNCcrEhI1JTYmODkZIxQVFxgqLB4fA0Q2FzgaGy0RXCJPGj0vL/xAAWAQEBAQAAAAAAAAAAAAAAAAAAAQL/xAAWEQEBAQAAAAAAAAAAAAAAAAAAARH/2gAMAwEAAhEDEQA/APpclKsvNYQqqqojnUq/EGOs8SLN0HaRTSBXEGOs8SMQY6zxJpCBXEGOs8SMQY6zxJpCBXEGOs8SMQY6zxJpCBXEGOs8SMQY6zxJpCBXEGOs8SMQY6zxJpcG82Oc4I+0goxBjrPEjEGOs8S7jOy3Oe7FdDMsFmvD/HegqxBjrPEjEGOs8SahFCBXEGOs8SMQY6zxJpCBXEGOs8SMQY6zxJpCBXEGOs8SMQY6zxJpCBXEGOs8SMQY6zxJpCBXEGOs8SUnWW2TGAVZQ1crzrVWba2ka2I70DFm6DtIppK2boO0imkAhCEAhCEAhCEEpd2ZESwbY4VzkBq+tcGbkwRMtFS2One+EE2ww2yNLY+3rF60C0JZ97TvUjzLOT3xVoSTA/ciW3lJlQoqrBN82HhguTlmSzmW/DTuVyiKik4yQjlNOONFtVCoxh5nJfHJ54M39U5FcxgmmIEhIahKoVKTNspYsI1lN/fs/GCaacFwcIOaS0y6QhCAQhCAQhCAWba2ka2I71pLNtbSNbEd6BizdB2kU0lbN0HaRTSAQhCAQhCAS0yZOEMs3nOZ580CvcIWxJws0RqVdntlSTx6R3K2R80EDLLQsti2OaPvfjFWKIKVALmK6XMUVEVClQoqFClRFBzFKHDFjwg6JwqXw5JemCbiuTEXBISzSyVIO0JaSMspgs5oqdoPMmVtkIQhAIQhALNtbSNbEd60lm2tpGtiO9AxZug7SKaStm6DtIppAIQhAIQhAtO8ZgGOdcy9mHlTsEkOVOflNe9H/tOKVY6UrlSglQhQgIqIoUKKFEUKEEIQhQLPcW+w5qucSfw+vwTSVnx4oi5soF+6aEqhEuUMCWolCEIVQIQhALNtbSNbEd60lm2tpGtiO9AxZug7SKaStm6DtIppAIQhAIQhAvLfaZn9BTaTYyZmZHlDAk2s1qJUrlTeglQi9QglQhQgFzFTFQgEIQo0qmtE7+XFdS0eKb/LhuXE3HiHNlWS8KWmvy4blqMV2hCFUCEIQCzbW0jWxHetJZtraRrYjvQMWboO0imkrZug7SKaQCEIQCEIQKlxc2Jc63Efagm70rPiWDFwc5ooOez50wBiQiQ5pDUs1qOlN65Qg6vUKEXoJUXovUKAQhCNBCEIFp+PFi3rOOQFNQglI8dMiOqwNR7cfr9k2tRihCEKoEIQgFm2tpGtiO9aSzbW0jWxHegYs3QdpFNJWzdB2kU0gEIQgEIQgIwqyS1kpKxwZFLFq5THSBXPzDbOcWVyNZZz8yT7g4NukhLIoynFKNVCplnxeHkuDkmHJJXKNBCEKNBCEIBCEIBVvuiy2Tng6UfMuyIRGoskRWTMzJOOCQ5reZ/cUkS1oybRNt1FpDLCGr0gzaI/ejT0w/pPAYuDUJCQrbCUIQgEIQgFm2tpGtiO9aSzbW0jWxHegYs3QdpFNJWzdB2kU0gEIRGKASE1PfdteP8ApVzUyUwWBazc3pO/JNSsoLOUWUfuj6kCrMiTnGOkQ9D7wvX6E6DbbY0iNKsiuYoF3mSqwjZUuj4S/CK7ZmRLi3OLc5B5pepWKp1ttwcof/ZLFlMoSUIPs6NzCDyHs7vXUJ2nSMODsZQrOLptCVx+X6fhURn29Vsy9mlTF02q3XW2RqcKn+RepKHMvlmiLQ+IlREdYiIi5Zq4mpmZhx7ot6gfGKWJWmqSWmQu2nXGyqbKn/b1rhCDXlZwXskslz3S9SaXnoLSkZyri3M7UPlfhH8UDyEIQCzbW0jWxHetJZtraRrYjvQMWboO0imkrZug7SKaQCz7QmKiwDft9IvQmpt7At1axZIbSVs1iosOXsbXnigYkpbAjUWeWf0fwTEURiuYxQEVzFTFY0xPTeNlLNUZ1IVjDk3+XvQayiKyYWhMsOizNtt0ldlhyY8F8LuCK7np15mbbZbpwZU15NRcJRhFBoxXMUvaL7jDBON01CUOl5YqqXm/+JjLv410ZNXDdC5A3FcxWW3MT8zU40LbbY5P1f5V3Jz7hO4B8aXM3k5XoigeiuCWc+/aLIk4Qhgx6MCyb+DzrhuYtF4cI2LZDwjmwFA+apilp2dJtwWWhqc4K+iUfNBLuPTsvlOYMh+vQg0UKtlwXgFwdb3VYgEQQhBrSEzhhpLSD7w+lNLCacJshcHOFbjZi4IkOaQ1IJWba2ka2I71pLNtbSNbEd6BizdB2kU0lbN0HaRV7x4NsnOSPveZBnThk++LY6pYMNrzx+vQtIBFsREc0RpWdZoVEThauT7Ufr91oXoJvUXqL1F6omMV55/Df5J3BU4TCZFebmcP7XrfSWIDjeN4QqqqqKcnNu8qgUxCZfdF6ZJukbsgOTDhuhd5FRbECKcbESpIhEQPklEo8K3YpGZkBefGYwhCTd2RTV5I3oEJ+UfZaJxyZJwRKGRw+lQUC/xY06rlR7NUfktWcYw7RMkVNRQy6avJFcMSwstYDSDw545wxigoskhKWGnVKIntX3pF+OEtIaNVyFf6Q4UwVlUkWCfcbEtT5q6UkW5bKGpxwtc/gg5tT7M5+n8oKmy/sw7Ud6bmmsM2TdVNV3S896pl2cA3g6qsqJcnyoMuMaZ4qucj+8OBM2gQiw7VrXCG1eu5yVbfyiyS5YfFLws+rSPOGI6iDqy4cRtORTi5EREaRGkRyV0gEIQgFo2W7nM+0HxWcrZZzButF0svZj5UG2s21tI1sR3rSWba2ka2I70DFm6DtIrm1CpbEeUW76gurN0HaRS9qlxgjyR3x+SC6SGloeleSvvXIwpER5IwFTeqJvUKL0XoC9RGKL1zegmKzbXmXmBawRU1FGvJgXo9K0IxWTb+axtR3QQXyM2T7BERca2Ma+7gj9ehV2ZNOPNuOOuVYMoasBpG6+PkVE1DFHReHRvtxbPajD6j3rizRIpabEc4hp91QdDMzc24QsELTY/UL/xRCbflnRZmaSErsvo+lFiGNLjetVAtobrlVbRC4622OUQjEf1jHgggvmsfEnCBwMEN5B5KqYQ9STYfnX6sG4OTdnjAfgtR+PFF+XHcsyyY5Lm1D4oHG8JSOEynKcvaXaEIBCEIBCEIBCEIN2XPCNNlyhh4kha2ka2I70zZpVMbJRH4pa1tI1sR3oGLN0HaRSk7lTNPqFN2boO0ik3vtZfmw+CB69F65vReqJvResy1pl5smGWCITcysjO4eCEN6myZlx4XG3SInGy9qmPzvUGjeovWXIzLwzLks+4TnlEK+VDh/eCm1ppxsm2WiIXCysjO9EIb0GlGKVnJVuZpqIhpvzLvP61VaD5MSw8YWFK5uvWq88fr0pazpp7Cky+RFUNQV6pXX7kD8ww283gSzeDaG7zquVlW5YSESIqiqy7vgqLXfcZbbwbhN1FHM9S5nX3G5RhwXCFwqaz1ivGMYoOn7OZcLCCRNl0M1QxIMslhMoy5Z6qtk3CcYbIiqIhyz5XDFEw7gwJwtUYkgHcoSHlDEe9KS0sMvVSRFVdnpBqcfFxsnHCJsip6PoitCbMhacISpIR+MEFyFltRm3GieF/NvyD/AATNnzDjwlhM4Sz+UgaUrPs95xxxwXHCIRH4px+NLbhDnC3Ev2QWIWVLRm3xIhfppKnL/wCk/LA8I8a5hCq91BchCEGnZUeLcHpfBVWtpGtiO9d2Tmufp8Vxa2ka2I70DFm6DtIpN77WX5kE5Zug7SKUnoUzNXqJAzei9c3rk4VCQ8oYj0uFBiRmqpwn8GRiJZAB+ELof2plpnBzmEpJtt0oiYHq3/NasrLNywkLdWVn1lUuZqVZmaSOqob6KCpQJWsJMvsTI/hXtQ+W5cy0cbnie+7byg/Tgh/a0ZhhuYbwZ1U8BdKqC5lpZuXEhbqyso6yqQZlqu4R8W6SIWrqwDOIo8Mf2uVU1M1PtviyTVN2frXfJarUoyy4Tw4TCFfnlV5fKupllt9vBuVU1QLOyqkCNskJNMEOaRRL9lFoR/4bHs/ximXJNkm22SwlLd9GVlKH2G3GxZKqkbqMrK4IXIK5J1sWGBwgjk8qHpilbWfyBbEtIVXsw+e5dxs6X6zxfJTibNTZZXFjAQysngQZzzlTTbeBcHB6+9Nk5hJMi1hGk9qEYJ4oVCQlmkNKoCUbFsmxwlLmflbkCEtLNuNE4ThDlR1oU8CvsoyISb1RuLvVn+Ol+s8XyTDLLbI0tjT/ALIM+zCETdqIRydnzp58xJp2khLi461XmiqY2dL9Z4vkrGpNlvCiNWWNJ5WqgzpOXbeEiccopKHoyu9acq2LbdIuYTKiqf8AHS/WeL5K+XYblxIW6soqsvKQWoQhBpWVDJc2oblXa2ka2I70xZg0tVcoo/0l7W0jWxHegYs3QdpFU2qGic9bfxh8VdZug7SKvfaF5smy/wDkvMgQbKoRJdXpWESlyJsh+vTBWwdHlf6oLL0XqvCDyhUReHlILL1F6pi/0VzA3HM0fANSC+MVwRoGVmXNUh2ypVo2a5rOCPeSBaJriJLRGzW9ZwvDAV3Cz2OsL2kGShbGJS/N+9FGJS/N+9FBjoWtGQY6Q+0uCs1vVccHuJBmIT5WaWq4PtjSqikXx1RLYJAqhWGw8Oc2Q+yq7kAhFyEAiEEXLRkJQhLDODTyA+MUDjAYNsW+SPvedIWtpGtiO9aSzbW0jWxHegYs3QdpFNJWzdB2kU0g4dZbezxq/kKUOzR1XCHbGpPIQZ8LM67/AMfzVo2ezrE4XuptCCoJaXHNbH+W9WwghCAQhCAQhCAQhCAQhCAQhCCVyQNlnCJbY1KUIKSlGC+7H9xXOJS/N+9FMIQVtsMt5rYj/JWqEIBZtraRrYjvWks21tI1sR3oFAmHmxpFwoQXeNTHPH3oQgMamOePvRjUxzx96EIgxqY54+9GNTHPH3oQgMamOePvRjUxzx96EIDGpjnj70Y1Mc8fehCAxqY54+9GNTHPH3oQgMamOePvRjUxzx96EIDGpjnj70Y1Mc8fehCAxqY54+9GNTHPH3oQgMamOePvRjUxzx96EIDGpjnj70Y1Mc8fehCAxqY54+9GNTHPH3oQgMamOePvVZuuO3VnGN3kQhFf/9k="}}]);
//# sourceMappingURL=876.7458417e.chunk.js.map