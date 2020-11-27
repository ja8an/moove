(this.webpackJsonpmoov=this.webpackJsonpmoov||[]).push([[0],{105:function(e,t,a){},107:function(e,t,a){},114:function(e,t,a){},115:function(e,t,a){"use strict";a.r(t);var c=a(1),n=a(0),s=a.n(n),r=a(17),i=a.n(r),o=(a(79),a(11)),j=a(18),l=a(19),d=a(8),b=a(21),h=a(116),O=a(123),u=a(117),x=a(125),m=a.p+"static/media/logo.573feee1.png",f=a(12),p=a(13),v=a(32),g=(a(84),function(e){var t=e.showLogo,a=void 0===t||t,n=e.gradient,s=void 0!==n&&n;Object(l.a)(e,["showLogo","gradient"]);return Object(c.jsx)("div",{className:s?"linear-gradient":"",children:Object(c.jsx)(h.a,{children:Object(c.jsxs)(O.a,{bg:"transparent",variant:s?"dark":"light",expand:"lg",children:[a&&Object(c.jsx)(v.Link,{to:"/",className:"navbar-brand",children:Object(c.jsx)(u.a,{src:m,width:150,alt:"moove logo",className:"p-3"})}),Object(c.jsx)(O.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(c.jsx)(O.a.Collapse,{id:"basic-navbar-nav",children:Object(c.jsx)(x.a,{className:"ml-auto",children:Object(c.jsxs)(v.Link,{to:"/stared",className:"nav-link",children:[Object(c.jsx)(f.a,{icon:p.e})," ","Favorite Movies"]})})})]})})})}),y=(a(88),a(118)),N=a(119),F=a(41),S=a.n(F),w=S.a.create({baseURL:"https://api.themoviedb.org/3",params:{api_key:"90c731578b6d7a401de19c3101b8a43e"}}),k=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"original";return"https://image.tmdb.org/t/p/".concat(t,"/").concat(e)},I={trendOfTheDay:function(){return w.get("/trending/movie/day")}},T=function(e){var t=e.component,a=Object(l.a)(e,["component"]),s=Object(n.useState)(null),r=Object(j.a)(s,2),i=r[0],O=r[1];return Object(n.useEffect)((function(){I.trendOfTheDay().then((function(e){var t,a,c=e.data.results;O(c[(t=0,a=c.length-1,t+Math.floor((a-t)*Math.random()))])}))}),[]),Object(c.jsx)(d.Route,Object(o.a)(Object(o.a)({},a),{},{render:function(e){return Object(c.jsxs)("div",{style:{backgroundImage:"url(".concat(i&&k(i.backdrop_path),")")},className:"movie-backdrop d-flex flex-column vh-100",children:[Object(c.jsx)(g,{showLogo:!1,gradient:!0,className:"flex-shrink-1"}),Object(c.jsx)(h.a,{className:"flex-grow-1",children:Object(c.jsx)(t,Object(o.a)({},e))}),i&&Object(c.jsx)(y.a,{fluid:!0,style:{backgroundColor:"transparent"},className:"jumbotron-backdrop flex-shrink-1 mb-0",children:Object(c.jsxs)(h.a,{children:[Object(c.jsx)(N.a,{variant:"primary",children:"trending"}),Object(c.jsx)("h1",{className:"text-shadow",children:Object(c.jsx)(b.b,{to:{pathname:"/search",search:"?q=".concat(i.title)},className:"text-white",children:i.title})}),Object(c.jsx)("p",{className:"text-shadow  text-white",children:i.overview})]})})]})}}))},R=a(124),D=a(120),L=a(68),_=a(121),A=a(122),C=(a(105),function(){return Object(c.jsx)(c.Fragment,{children:Object(c.jsx)(R.a,{action:"/search",className:"h-100 animate__animated animate__fadeIn",children:Object(c.jsxs)(D.a,{className:"h-100 align-content-end justify-content-center",children:[Object(c.jsx)(L.a,{xs:12,className:"text-center p-5 animate__animated animate__fadeInUp",children:Object(c.jsx)(u.a,{src:m,height:100,width:294.7})}),Object(c.jsx)(L.a,{xs:12,md:6,children:Object(c.jsxs)(_.a,{className:"shadow-lg",children:[Object(c.jsx)(R.a.Control,{name:"q",placeholder:"Type a movie name to search",autoFocus:!0}),Object(c.jsx)(_.a.Append,{children:Object(c.jsxs)(A.a,{children:[Object(c.jsx)(f.a,{icon:p.d,fixedWidth:!0})," ","Search"]})})]})})]})})})}),E=a(54),P=S.a.create({baseURL:"https://www.omdbapi.com/",params:{apiKey:"7ad872ad",type:"movie"}}),W={search:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return P.get("/",{params:{s:e,page:t}})},byTitle:function(e){return"http://www.omdbapi.com/?t=a"},byId:function(e){return P.get("/",{params:{i:e,plot:"full"}})}},q=a(69),M=a.n(q),J=a(70),U=(a(107),a(126)),B="SET_FAVORITE",V="UNSET_FAVORITE",Y=function(e){return e.favorites||{}},z=a(27),G=a(42),H=Object(z.b)((function(e){return{isFavorite:function(t){return function(e,t){var a=Y(e);return Object.keys(a).some((function(e){return e===t}))}(e,t)}}}),{setFavorite:function(e){return{type:B,payload:{movie:e}}},unsetFavorite:function(e){return{type:V,payload:{id:e}}}})((function(e){var t=e.isFavorite,a=e.setFavorite,n=e.unsetFavorite,s=e.movie,r=Object(l.a)(e,["isFavorite","setFavorite","unsetFavorite","movie"]),i=Object(G.useToasts)().addToast;return Object(c.jsxs)(U.a,Object(o.a)(Object(o.a)({className:"shadow-lg"},r),{},{children:[Object(c.jsx)(U.a.Img,{variant:"top",src:s.Poster&&"N/A"!==s.Poster?s.Poster:"https://fakeimg.pl/250x300/?retina=1&text=moove&lobster=noto",className:"poster-size"}),Object(c.jsxs)(U.a.Body,{children:[Object(c.jsxs)(D.a,{className:"align-items-center",children:[Object(c.jsx)(L.a,{children:Object(c.jsxs)(N.a,{variant:"primary",children:[Object(c.jsx)(f.a,{icon:p.a,fixedWidth:!0}),s.Year]})}),Object(c.jsx)(L.a,{className:"text-right",children:Object(c.jsx)(A.a,{variant:"link",onClick:function(){return function(e){t(e.imdbID)?(n(e.imdbID),i("Successfully removed from your favorites",{appearance:"success",autoDismiss:!0})):(a(e),i("Successfully added to your favorites",{appearance:"success",autoDismiss:!0}))}(s)},children:Object(c.jsx)(f.a,{icon:p.e,className:t(s.imdbID)?"text-danger":"text-secondary",fixedWidth:!0})})})]}),Object(c.jsx)(U.a.Title,{children:Object(c.jsx)(b.b,{to:"/".concat(s.imdbID),children:s.Title})})]})]}))})),K=function(e){e.setFavorite,e.unsetFavorite;var t=e.location,a=(Object(l.a)(e,["setFavorite","unsetFavorite","location"]),M.a.parse(t.search)),s=Object(v.useHistory)(),r=Object(n.useState)(""),i=Object(j.a)(r,2),o=i[0],d=i[1],b=Object(n.useState)(0),h=Object(j.a)(b,2),O=h[0],u=h[1],x=Object(n.useState)(1),m=Object(j.a)(x,2),g=m[0],y=m[1],N=Object(n.useState)([]),F=Object(j.a)(N,2),S=F[0],w=F[1],k=Object(n.useState)(1),I=Object(j.a)(k,2),T=I[0],_=I[1],A=Object(n.useState)(!0),C=Object(j.a)(A,2),P=C[0],q=C[1],U=function(){W.search(a.q).then((function(e){if(e.data&&"True"===e.data.Response){if(w(e.data.Search),1===Number(e.data.totalResults))return void s.push("/".concat(e.data.Search[0].imdbID));u(e.data.totalResults);var t=Math.ceil(e.data.totalResults/10);y(t),q(e.data.totalResults>10)}}))};return Object(n.useEffect)((function(){U()}),[o]),Object(n.useEffect)((function(){a.q?(d(a.q),U(a.q)):s.push("/")}),[]),Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(R.a,{action:"/search",children:Object(c.jsx)(R.a.Group,{children:Object(c.jsx)(R.a.Control,{name:"q",value:o,onChange:function(e){return d(e.target.value)}})})}),(!S||0===S.length)&&Object(c.jsx)(c.Fragment,{children:Object(c.jsxs)("div",{className:"text-muted p-5 text-center",children:[Object(c.jsx)(f.a,{icon:p.b,fixedWidth:!0}),"No results found!"]})}),S&&S.length>0&&Object(c.jsxs)(c.Fragment,{children:[Object(c.jsxs)("h5",{className:"text-primary p-3",children:[O," results found:"]}),Object(c.jsx)(J.a,{dataLength:S.length,next:function(){if(P){var e=T+1;W.search(a.q,e).then((function(e){e.data.Search?(w([].concat(Object(E.a)(S),Object(E.a)(e.data.Search))),q(T<g)):q(!1)})),_(e)}},hasMore:P,loader:Object(c.jsx)("h4",{children:"Loading..."}),endMessage:Object(c.jsx)("p",{style:{textAlign:"center"},className:"p-5",children:Object(c.jsx)("b",{children:"Yay! You have seen it all"})}),children:Object(c.jsx)(D.a,{children:S&&S.map((function(e,t){return e&&Object(c.jsx)(L.a,{sm:12,md:4,lg:3,children:Object(c.jsx)(H,{movie:e})},t)}))})})]})]})},Q=(a(114),function(e){var t=e.component,a=Object(l.a)(e,["component"]);return Object(c.jsx)(d.Route,Object(o.a)(Object(o.a)({},a),{},{render:function(e){return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(g,{}),Object(c.jsx)(h.a,{children:Object(c.jsx)(t,Object(o.a)({},e))})]})}}))}),X=function(){var e=Object(d.useParams)().id,t=Object(n.useState)(null),a=Object(j.a)(t,2),s=a[0],r=a[1];return Object(n.useEffect)((function(){W.byId(e).then((function(e){r(e.data)}))}),[]),Object(c.jsx)(c.Fragment,{children:s&&Object(c.jsx)(c.Fragment,{children:Object(c.jsxs)(D.a,{children:[Object(c.jsxs)(L.a,{xs:12,md:3,children:[Object(c.jsx)(u.a,{src:s.Poster,className:"shadow-lg",fluid:!0,rounded:!0}),s.Ratings&&s.Ratings.length>0&&Object(c.jsxs)(c.Fragment,{children:[Object(c.jsxs)("h5",{className:"text-primary mt-3",children:[Object(c.jsx)(f.a,{icon:p.e,fixedWidth:!0})," ","Ratings"]}),s.Ratings.map((function(e){return Object(c.jsxs)("p",{children:[e.Source,":"," ",Object(c.jsx)("b",{children:e.Value})]})}))]})]}),Object(c.jsxs)(L.a,{xs:12,md:9,children:[Object(c.jsxs)("h4",{className:"text-primary",children:[Object(c.jsx)(f.a,{icon:p.c,fixedWidth:!0})," ",s.Title]}),Object(c.jsx)("p",{children:s.Plot}),Object(c.jsx)("h5",{className:"text-secondary",children:"Actors"}),Object(c.jsx)("p",{children:s.Actors}),Object(c.jsx)("h5",{className:"text-secondary",children:"Awards"}),Object(c.jsx)("p",{children:s.Awards}),Object(c.jsx)("h5",{className:"text-secondary",children:"Tecnical info"}),Object(c.jsx)("h6",{className:"text-secondary",children:"Direction"}),Object(c.jsx)("p",{children:s.Director}),Object(c.jsx)("h6",{className:"text-secondary",children:"Script"}),Object(c.jsx)("p",{children:s.Writer}),Object(c.jsx)("h6",{className:"text-secondary",children:"Language"}),Object(c.jsx)("p",{children:s.Language})]})]})})})},Z=Object(z.b)((function(e){return{favorites:Y(e)}}))((function(e){var t=e.favorites;return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsxs)("h5",{className:"text-primary",children:[Object(c.jsx)(f.a,{icon:p.e,fixedWidth:!0}),"Favorites"]}),(!t||0===Object.keys(t).length)&&Object(c.jsx)(c.Fragment,{children:Object(c.jsx)("div",{className:"p-5 text-center text-muted",children:"No favorite movie yet!"})}),t&&t.length>0&&Object(c.jsx)(D.a,{children:Object.keys(t).map((function(e,a){return Object(c.jsx)(L.a,{sm:12,md:4,lg:3,children:Object(c.jsx)(H,{movie:t[e]})},a)}))})]})})),$=function(e){return Object(c.jsx)(b.a,{basename:"https://ja8an.github.io/moove",children:Object(c.jsx)(G.ToastProvider,{placement:"top-center",children:Object(c.jsxs)(d.Switch,{children:[Object(c.jsx)(T,{path:"/",exact:!0,component:C}),Object(c.jsx)(Q,{path:"/search",component:K}),Object(c.jsx)(Q,{path:"/stared",component:Z}),Object(c.jsx)(Q,{path:"/:id",component:X})]})})})},ee=a(26),te=a(37),ae=localStorage.getItem("favorites")?JSON.parse(localStorage.getItem("favorites")):{},ce=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ae,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case B:var a=t.payload.movie,c=Object(o.a)(Object(o.a)({},e),{},Object(te.a)({},a.imdbID,a));return localStorage.setItem("favorites",JSON.stringify(c)),c;case V:var n=t.payload.id;return delete e[n],localStorage.setItem("favorites",JSON.stringify(e)),Object(o.a)({},e);default:return e}},ne=Object(ee.combineReducers)({favorites:ce}),se=a(72),re=Object(ee.createStore)(ne,Object(se.composeWithDevTools)()),ie=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,127)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,s=t.getLCP,r=t.getTTFB;a(e),c(e),n(e),s(e),r(e)}))};i.a.render(Object(c.jsx)(s.a.StrictMode,{children:Object(c.jsx)(z.a,{store:re,children:Object(c.jsx)($,{})})}),document.getElementById("root")),ie()},79:function(e,t,a){},84:function(e,t,a){},88:function(e,t,a){}},[[115,1,2]]]);
//# sourceMappingURL=main.13987080.chunk.js.map