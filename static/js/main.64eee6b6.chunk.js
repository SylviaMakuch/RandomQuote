(this.webpackJsonprandomqoute=this.webpackJsonprandomqoute||[]).push([[0],{17:function(n,e,t){},23:function(n,e,t){"use strict";t.r(e);var i=t(0),a=t(9),c=t.n(a),r=(t(17),t(2)),d=t(3),o=t(4),s=t(1);var f,j,x,l,p=function(){var n=Object(i.useState)(null),e=Object(o.a)(n,2),t=e[0],a=e[1],c=Object(i.useState)(!1),r=Object(o.a)(c,2),d=r[0],f=r[1],j=Object(i.useState)([]),x=Object(o.a)(j,2),l=x[0],p=x[1];return Object(i.useEffect)((function(){fetch("https://quotes.rest/qod").then((function(n){return n.json()})).then((function(n){console.log(n),f(!0),p(n.contents.quotes)}),(function(n){f(!0),a(n)}))}),[]),t?Object(s.jsx)("div",{children:"Error"}):d?Object(s.jsx)(s.Fragment,{children:l.map((function(n,e){return Object(s.jsx)("div",{children:n.quote},e)}))}):Object(s.jsx)("div",{children:"Loading..."})},u=d.a.div(f||(f=Object(r.a)(["\n    font-family: 'Lato', sans-serif;\n    font-weight: 100;\n    font-size: 25px;\n    line-height: 1.5;\n    letter-spacing: 1.5;\n    padding: 30px 0px;\n    text-align: center;\n        @media(max-width: 690px) {\n            padding: 10%;\n            font-size: 40px;\n        }\n    "])));function b(){return Object(s.jsx)(u,{children:Object(s.jsx)(p,{})})}var h,g=d.a.div(j||(j=Object(r.a)(["\n    display: flex;\n    height: 60vh;\n    background: linear-gradient(to left, #ff00d9, #08fffb);\n    padding: 3px;\n    margin: 10%;\n    display: grid;\n        @media screen and (max-width: 840px) {\n            height: 30%;\n        }\n"]))),O=d.a.div(x||(x=Object(r.a)(["\n    background: #000000;\n    color: #ffffff;\n    padding: 3em;\n    margin: 0.5%;\n"]))),m=d.a.div(l||(l=Object(r.a)(["\n    font-family: 'Playfair Display', serif;\n    font-weight: 800;\n    font-size: 80px;\n    letter-spacing: 2.0;\n    padding: 20px 0px;\n    text-align: center;\n\n    @media screen and (max-width: 600px) {\n        font-size: 40px ;\n        text-align: center;\n    }\n"])));function v(){return Object(s.jsx)(g,{children:Object(s.jsxs)(O,{children:[Object(s.jsx)(m,{children:" Daily Quote"}),Object(s.jsx)(b,{})]})})}var w=d.a.div(h||(h=Object(r.a)(["\n    background-color: black;\n    display: contents;\n\n    @media screen and (max-width: 2000px) {\n        align-content: center;\n    }    \n    @media screen and (max-width: 600px) {\n        padding: 20px 5%;\n    }      \n"])));var y=function(){return Object(s.jsx)(w,{children:Object(s.jsx)(v,{})})};c.a.render(Object(s.jsx)(y,{}),document.getElementById("root"))}},[[23,1,2]]]);
//# sourceMappingURL=main.64eee6b6.chunk.js.map