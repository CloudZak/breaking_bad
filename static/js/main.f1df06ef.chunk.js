(this.webpackJsonpmarvel=this.webpackJsonpmarvel||[]).push([[0],{27:function(e,t,c){},38:function(e,t,c){},39:function(e,t,c){},40:function(e,t,c){},41:function(e,t,c){},42:function(e,t,c){},43:function(e,t,c){"use strict";c.r(t);var a=c(1),n=c.n(a),r=c(19),s=c.n(r),i=c(2),o=c(9),l=c(3),u=(c(27),c.p+"static/media/breaking-bad.0ac09ef2.png"),j=c(0),b=function(){return Object(j.jsxs)("header",{className:"app__header",children:[Object(j.jsx)("div",{className:"app__title",children:Object(j.jsx)(o.b,{to:"/",children:Object(j.jsx)("img",{src:u,alt:"breaking bad"})})}),Object(j.jsx)("nav",{className:"app__menu",children:Object(j.jsxs)("ul",{children:[Object(j.jsx)("li",{children:Object(j.jsx)(o.c,{exact:!0,activeStyle:{color:"#1b9f00"},to:"/",children:"Characters"})}),"/",Object(j.jsx)("li",{children:Object(j.jsx)(o.c,{exact:!0,activeStyle:{color:"#1b9f00"},to:"/episodes",children:"Episodes"})})]})})]})},d=c(5),f=c.n(d),h=c(10),m=c(22),O=function e(){var t=this;Object(m.a)(this,e),this._apiBase="https://www.breakingbadapi.com/api/",this._baseOffset=0,this.getResource=function(){var e=Object(h.a)(f.a.mark((function e(t){var c,a;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t);case 2:if((c=e.sent).ok){e.next=5;break}throw new Error("Could not fetch ".concat(t,", status: "));case 5:return e.next=7,c.json();case 7:return a=e.sent,e.abrupt("return",a);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.getAllCharacters=Object(h.a)(f.a.mark((function e(){var c;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getResource("".concat(t._apiBase,"characters"));case 2:return c=e.sent,e.abrupt("return",c.map(t._transformCharacter));case 4:case"end":return e.stop()}}),e)}))),this.getAllCharactersOffset=Object(h.a)(f.a.mark((function e(){var c,a,n=arguments;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=n.length>0&&void 0!==n[0]?n[0]:t._baseOffset,e.next=3,t.getResource("".concat(t._apiBase,"characters?limit=4&offset=").concat(c));case 3:return a=e.sent,e.abrupt("return",a.map(t._transformCharacter));case 5:case"end":return e.stop()}}),e)}))),this.getCharacter=function(){var e=Object(h.a)(f.a.mark((function e(c){var a;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getResource("".concat(t._apiBase,"characters/").concat(c));case 2:return a=e.sent,e.abrupt("return",t._transformCharacter(a[0]));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.getCharacterByName=function(){var e=Object(h.a)(f.a.mark((function e(c){var a;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getResource("".concat(t._apiBase,"characters?name=").concat(c));case 2:return a=e.sent,e.abrupt("return",a.map(t._transformCharacter));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.getEpisodeById=function(){var e=Object(h.a)(f.a.mark((function e(c){var a;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getResource("".concat(t._apiBase,"episodes/").concat(c));case 2:return a=e.sent,e.abrupt("return",t._transformEpisodes(a[0]));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.getAllEpisodes=Object(h.a)(f.a.mark((function e(){var c;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getResource("".concat(t._apiBase,"episodes"));case 2:return c=e.sent,e.abrupt("return",c.map(t._transformEpisodes));case 4:case"end":return e.stop()}}),e)}))),this._transformEpisodes=function(e){return{id:e.episode_id,title:e.title,season:e.season,episode:e.episode,air_date:e.air_date,characters:e.characters,series:e.series}},this._transformCharacter=function(e){return{id:e.char_id,name:e.name,description:e.occupation?"".concat(e.occupation.slice(0,150)):"There is no description for this character",birthday:e.birthday,img:e.img,nickname:e.nickname,category:e.category}}},p=function(){return Object(j.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",style:{margin:"0 auto",background:"none",display:"block"},width:"200px",height:"200px",viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid",children:[Object(j.jsx)("g",{transform:"translate(80,50)",children:Object(j.jsx)("g",{transform:"rotate(0)",children:Object(j.jsxs)("circle",{cx:"0",cy:"0",r:"7",fill:"#1c4595",fillOpacity:"1",children:[Object(j.jsx)("animateTransform",{attributeName:"transform",type:"scale",begin:"-0.875s",values:"1.5 1.5;1 1",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite"}),Object(j.jsx)("animate",{attributeName:"fillOpacity",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite",values:"1;0",begin:"-0.875s"})]})})}),Object(j.jsx)("g",{transform:"translate(71.21320343559643,71.21320343559643)",children:Object(j.jsx)("g",{transform:"rotate(45)",children:Object(j.jsxs)("circle",{cx:"0",cy:"0",r:"7",fill:"#1c4595",fillOpacity:"0.875",children:[Object(j.jsx)("animateTransform",{attributeName:"transform",type:"scale",begin:"-0.75s",values:"1.5 1.5;1 1",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite"}),Object(j.jsx)("animate",{attributeName:"fillOpacity",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite",values:"1;0",begin:"-0.75s"})]})})}),Object(j.jsx)("g",{transform:"translate(50,80)",children:Object(j.jsx)("g",{transform:"rotate(90)",children:Object(j.jsxs)("circle",{cx:"0",cy:"0",r:"7",fill:"#1c4595",fillOpacity:"0.75",children:[Object(j.jsx)("animateTransform",{attributeName:"transform",type:"scale",begin:"-0.625s",values:"1.5 1.5;1 1",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite"}),Object(j.jsx)("animate",{attributeName:"fillOpacity",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite",values:"1;0",begin:"-0.625s"})]})})}),Object(j.jsx)("g",{transform:"translate(28.786796564403577,71.21320343559643)",children:Object(j.jsx)("g",{transform:"rotate(135)",children:Object(j.jsxs)("circle",{cx:"0",cy:"0",r:"7",fill:"#1c4595",fillOpacity:"0.625",children:[Object(j.jsx)("animateTransform",{attributeName:"transform",type:"scale",begin:"-0.5s",values:"1.5 1.5;1 1",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite"}),Object(j.jsx)("animate",{attributeName:"fillOpacity",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite",values:"1;0",begin:"-0.5s"})]})})}),Object(j.jsx)("g",{transform:"translate(20,50.00000000000001)",children:Object(j.jsx)("g",{transform:"rotate(180)",children:Object(j.jsxs)("circle",{cx:"0",cy:"0",r:"7",fill:"#1c4595",fillOpacity:"0.5",children:[Object(j.jsx)("animateTransform",{attributeName:"transform",type:"scale",begin:"-0.375s",values:"1.5 1.5;1 1",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite"}),Object(j.jsx)("animate",{attributeName:"fillOpacity",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite",values:"1;0",begin:"-0.375s"})]})})}),Object(j.jsx)("g",{transform:"translate(28.78679656440357,28.786796564403577)",children:Object(j.jsx)("g",{transform:"rotate(225)",children:Object(j.jsxs)("circle",{cx:"0",cy:"0",r:"7",fill:"#1c4595",fillOpacity:"0.375",children:[Object(j.jsx)("animateTransform",{attributeName:"transform",type:"scale",begin:"-0.25s",values:"1.5 1.5;1 1",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite"}),Object(j.jsx)("animate",{attributeName:"fillOpacity",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite",values:"1;0",begin:"-0.25s"})]})})}),Object(j.jsx)("g",{transform:"translate(49.99999999999999,20)",children:Object(j.jsx)("g",{transform:"rotate(270)",children:Object(j.jsxs)("circle",{cx:"0",cy:"0",r:"7",fill:"#1c4595",fillOpacity:"0.25",children:[Object(j.jsx)("animateTransform",{attributeName:"transform",type:"scale",begin:"-0.125s",values:"1.5 1.5;1 1",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite"}),Object(j.jsx)("animate",{attributeName:"fillOpacity",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite",values:"1;0",begin:"-0.125s"})]})})}),Object(j.jsx)("g",{transform:"translate(71.21320343559643,28.78679656440357)",children:Object(j.jsx)("g",{transform:"rotate(315)",children:Object(j.jsxs)("circle",{cx:"0",cy:"0",r:"7",fill:"#1c4595",fillOpacity:"0.125",children:[Object(j.jsx)("animateTransform",{attributeName:"transform",type:"scale",begin:"0s",values:"1.5 1.5;1 1",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite"}),Object(j.jsx)("animate",{attributeName:"fillOpacity",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite",values:"1;0",begin:"0s"})]})})})]})},x=c.p+"static/media/error.42292aa1.gif",g=function(){return Object(j.jsx)("img",{style:{display:"block",width:"250px",height:"250px",objectFit:"contain",margin:"0 auto"},src:x,alt:"Error"})},v=(c(38),function(e){var t=e.char,c=t.name,a=t.description,n=t.img,r=t.nickname,s=t.category;return Object(j.jsxs)("div",{className:"random_char",children:[Object(j.jsx)("div",{className:"random_char__img",children:Object(j.jsx)("img",{src:n,alt:c})}),Object(j.jsxs)("div",{className:"random_char__text",children:[Object(j.jsxs)("div",{className:"random_char__title",children:[c,"/",r]}),Object(j.jsxs)("div",{className:"random_char__descr",children:["Occupation: ",a,Object(j.jsx)("br",{}),Object(j.jsx)("br",{}),s]})]})]})}),_=function(){var e=Object(a.useState)(null),t=Object(i.a)(e,2),c=t[0],n=t[1],r=Object(a.useState)(!0),s=Object(i.a)(r,2),o=s[0],l=s[1],u=Object(a.useState)(!1),b=Object(i.a)(u,2),d=b[0],f=b[1],h=new O;Object(a.useEffect)((function(){m()}),[]);var m=function(){var e=Math.floor(56*Math.random())+1;h.getCharacter(e).then((function(e){return e})).then((function(e){return function(e){n(e),l(!1)}(e)})).catch(x)},x=function(){f(!0),l(!1)},_=d?Object(j.jsx)(g,{}):null,y=o?Object(j.jsx)(p,{}):null,N=!o&&c?Object(j.jsx)(v,{char:c}):null;return Object(j.jsxs)("section",{className:"random",children:[_,y,N,Object(j.jsxs)("div",{className:"random_update",children:[Object(j.jsx)("div",{className:"random_update__text",children:"If you want to change the character, click the button below"}),Object(j.jsx)("button",{onClick:m,className:"btn random_update__btn",children:"Next"})]})]})},y=c(11),N=(c(39),function(e){var t=Object(a.useState)([]),c=Object(i.a)(t,2),n=c[0],r=c[1],s=new O;Object(a.useEffect)((function(){l()}),[]);var l=function(){s.getAllEpisodes().then((function(e){return e})).then((function(e){return u(e)}))},u=function(e){r(Object(y.a)(e))};return Object(j.jsxs)("aside",{className:"seasons",children:[Object(j.jsx)("div",{className:"seasons_title",children:"Seasons"}),Object(j.jsx)("ul",{className:"seasons_list",children:["1","2","3","4","5"].map((function(t){return Object(j.jsx)("li",{className:"seasons_list__item",children:Object(j.jsxs)("span",{onMouseEnter:function(e){e.preventDefault()},children:["Seasons ",t,Object(j.jsx)("ul",{children:n.map((function(c){return c.season===t?Object(j.jsx)("li",{className:"episod",onClick:function(t){return e.onEpisodeSelected(c)},children:Object(j.jsxs)(o.b,{to:"/episodes/".concat(c.id),children:[c.episode,".",c.title]})},c.id):null}))})]})},t)}))})]})}),k=(c(40),function(e){var t=e.char,c=t.name,a=t.img,n=t.nickname;return Object(j.jsxs)("div",{className:"chars_item",children:[Object(j.jsx)("div",{className:"chars_item__img",children:Object(j.jsx)("img",{src:a,alt:"walter"})}),Object(j.jsxs)("div",{className:"chars_item__name",children:[c,"/",n]})]})}),w=function(){var e=Object(a.useState)([]),t=Object(i.a)(e,2),c=t[0],n=t[1],r=Object(a.useState)(!0),s=Object(i.a)(r,2),o=s[0],l=s[1],u=Object(a.useState)(0),b=Object(i.a)(u,2),d=b[0],f=b[1],h=Object(a.useState)(!1),m=Object(i.a)(h,2),x=m[0],v=m[1],_=Object(a.useState)(!1),N=Object(i.a)(_,2),w=N[0],C=N[1],S=Object(a.useState)(!1),T=Object(i.a)(S,2),E=T[0],B=T[1],A=new O;Object(a.useEffect)((function(){R()}),[]);var R=function(e){I(),A.getAllCharactersOffset(e).then((function(e){return e})).then((function(e){return M(e)})).catch(z)},M=function(e){var t=!1;e.length<4&&(t=!0),n((function(t){return[].concat(Object(y.a)(t),Object(y.a)(e))})),f((function(e){return e+4})),C((function(e){return!1})),l((function(e){return!1})),v((function(e){return t}))},I=function(){C(!0)},z=function(){B(!0),l(!1)},F=o?Object(j.jsx)(p,{}):null,J=!c||o||E?null:c.map((function(e){return Object(j.jsx)(k,{char:e},e.id)})),W=E?Object(j.jsx)(g,{}):null;return Object(j.jsxs)("section",{className:"chars",children:[W,F,Object(j.jsx)("div",{className:"chars_list",children:J}),Object(j.jsx)("button",{disabled:w,onClick:function(){return R(d)},style:{display:x?"none":"inline-block"},className:"btn chars_btn",children:"Load more"})]})},C=function(e){var t=e.char,c=t.name,a=t.img,n=t.nickname;return Object(j.jsxs)("div",{className:"chars_item",children:[Object(j.jsx)("div",{className:"chars_item__img",children:Object(j.jsx)("img",{src:a,alt:c})}),Object(j.jsxs)("div",{className:"chars_item__name",children:[c,"/",n]})]})},S=function(e){var t=Object(a.useState)([]),c=Object(i.a)(t,2),n=c[0],r=c[1],s=Object(a.useState)(!0),o=Object(i.a)(s,2),l=o[0],u=o[1],b=Object(a.useState)(!1),d=Object(i.a)(b,2),f=d[0],h=d[1],m=Object(a.useState)(e.chars),x=Object(i.a)(m,2),v=x[0],_=(x[1],new O);Object(a.useEffect)((function(){N()}),[]);var N=function(){v.map((function(e){_.getCharacterByName(e).then((function(e){return e})).then((function(e){return k(e)})).catch(w)}))},k=function(e){e[0]&&r((function(t){return[].concat(Object(y.a)(t),[e[0]])})),u((function(e){return!1}))},w=function(){h(!0),u(!1)},S=l?Object(j.jsx)(p,{}):null,T=!n||l||f?null:n.map((function(e){return Object(j.jsx)(C,{char:e},e.id)})),E=f?Object(j.jsx)(g,{}):null;return Object(j.jsxs)("section",{className:"chars",children:[E,S,Object(j.jsx)("div",{className:"chars_list",children:T})]})},T=(c(41),function(e){var t=e.epis,c=t.title,a=t.season,n=t.episode,r=t.air_date,s=t.characters;return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("div",{className:"aboutEpisode_title",children:[Object(j.jsx)("span",{children:"Title:"})," ",c]}),Object(j.jsxs)("div",{className:"aboutEpisode_season",children:[Object(j.jsx)("span",{children:"Seasons & Series:"})," ",a,", ",n]}),Object(j.jsxs)("div",{className:"aboutEpisode_date",children:[Object(j.jsx)("span",{children:"Air-date:"})," ",r]}),Object(j.jsxs)("div",{className:"aboutEpisode_chars",children:[Object(j.jsx)("span",{children:"Characters:"}),s.map((function(e){return" ".concat(e,",")}))]})]})}),E=function(e){var t=Object(a.useState)(null),c=Object(i.a)(t,2),n=c[0],r=c[1];Object(a.useEffect)((function(){r(e.epis)}),[]);var s=n?Object(j.jsx)(T,{epis:n}):null;return Object(j.jsxs)("aside",{className:"aboutEpisode",children:[Object(j.jsx)("h4",{className:"aboutEpisode_about",children:"About episode"}),s]})},B=function(){return Object(j.jsxs)("div",{children:[Object(j.jsx)(g,{}),Object(j.jsx)("p",{style:{textAlign:"center",fontWeight:"bold",fontSize:"24px"},children:"Page doesn't exist"}),Object(j.jsx)(o.b,{style:{display:"block",textAlign:"center",fontWeight:"bold",fontSize:"24px",marginTop:"30px"},to:"/",children:"Back to main page"})]})},A=function(){var e=Object(a.useState)(),t=Object(i.a)(e,2),c=t[0],n=t[1],r=Object(a.useState)([]),s=Object(i.a)(r,2),u=s[0],d=s[1];return Object(j.jsx)(o.a,{children:Object(j.jsxs)("div",{className:"app",children:[Object(j.jsx)(b,{}),Object(j.jsx)("main",{children:Object(j.jsx)("div",{className:"char__content",children:Object(j.jsxs)(l.c,{children:[Object(j.jsxs)(l.a,{exact:!0,path:"/",children:[Object(j.jsx)(_,{}),Object(j.jsxs)("div",{className:"char__content_wrapper",children:[Object(j.jsx)(N,{onEpisodeSelected:function(e){n(e),d(e.characters)}}),Object(j.jsx)(w,{})]})]}),Object(j.jsx)(l.a,{exact:!0,path:"/episodes/:episId",children:Object(j.jsxs)("div",{className:"char__content_wrapper",children:[Object(j.jsx)(E,{epis:c}),Object(j.jsx)(S,{chars:u})]})}),Object(j.jsx)(l.a,{exact:!0,path:"*",children:Object(j.jsx)(B,{})})]})})})]})})};c(42);s.a.render(Object(j.jsx)(n.a.StrictMode,{children:Object(j.jsx)(A,{})}),document.getElementById("root"))}},[[43,1,2]]]);
//# sourceMappingURL=main.f1df06ef.chunk.js.map