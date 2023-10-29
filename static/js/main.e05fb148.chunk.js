(this["webpackJsonpreact_people-table-basics"]=this["webpackJsonpreact_people-table-basics"]||[]).push([[0],{35:function(e,t,c){},37:function(e,t,c){},38:function(e,t,c){"use strict";c.r(t);var n=c(24),a=(c(33),c(34),c(8)),r=c(3),s=(c(35),c(12)),j=c.n(s),i=c(2),l=function(e){var t=e.isActive;return j()("navbar-item",{"has-background-grey-lighter":t})},o=function(){return Object(i.jsxs)("div",{"data-cy":"app",children:[Object(i.jsx)("nav",{"data-cy":"nav",className:"navbar is-fixed-top has-shadow",role:"navigation","aria-label":"main navigation",children:Object(i.jsx)("div",{className:"container",children:Object(i.jsxs)("div",{className:"navbar-brand",children:[Object(i.jsx)(a.c,{className:l,to:"/",children:"Home"}),Object(i.jsx)(a.c,{className:l,to:"/people",children:"People"})]})})}),Object(i.jsx)("main",{className:"section",children:Object(i.jsx)("div",{className:"container",children:Object(i.jsx)("div",{className:"block",children:Object(i.jsx)("div",{className:"box table-container",children:Object(i.jsx)(r.b,{})})})})})]})},b=function(){return Object(i.jsx)("h1",{className:"title",children:"Page not found"})},h=function(){return Object(i.jsx)("h1",{className:"title",children:"Home Page"})},d=c(22),O=c(4),x=c(0);function u(){return(e=500,new Promise((function(t){return setTimeout(t,e)}))).then((function(){return fetch("https://mate-academy.github.io/react_people-table/api/people.json")})).then((function(e){return e.json()}));var e}c(37);var m=function(){return Object(i.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(i.jsx)("div",{className:"Loader__content"})})},p=function(e){var t=e.person,c=t.name,n=t.sex,s=t.born,l=t.died,o=t.fatherName,b=t.motherName,h=t.slug,d=t.father,O=t.mother,x=Object(r.r)().slug,u=function(e){return j()({"has-text-danger":"f"===e})},m=function(e,t){return e&&t?Object(i.jsx)(a.b,{to:"".concat(t.slug),className:u(t.sex),children:e}):e?"".concat(e):"-"};return Object(i.jsxs)("tr",{"data-cy":"person",className:j()({"has-background-warning":h===x}),children:[Object(i.jsx)("td",{children:Object(i.jsx)(a.b,{to:"".concat(h),className:u(n),children:c})}),Object(i.jsx)("td",{children:n}),Object(i.jsx)("td",{children:s}),Object(i.jsx)("td",{children:l}),Object(i.jsx)("td",{children:m(b,O)}),Object(i.jsx)("td",{children:m(o,d)})]})},f=function(e){var t=e.people;return Object(i.jsxs)("table",{"data-cy":"peopleTable",className:"table is-striped is-hoverable is-narrow is-fullwidth",children:[Object(i.jsx)("thead",{children:Object(i.jsxs)("tr",{children:[Object(i.jsx)("th",{children:"Name"}),Object(i.jsx)("th",{children:"Sex"}),Object(i.jsx)("th",{children:"Born"}),Object(i.jsx)("th",{children:"Died"}),Object(i.jsx)("th",{children:"Mother"}),Object(i.jsx)("th",{children:"Father"})]})}),Object(i.jsx)("tbody",{children:t.map((function(e){return Object(i.jsx)(p,{person:e},e.slug)}))})]})},v=function(){var e=Object(x.useState)(null),t=Object(O.a)(e,2),c=t[0],n=t[1],a=Object(x.useState)(!1),r=Object(O.a)(a,2),s=r[0],j=r[1],l=Object(x.useState)(""),o=Object(O.a)(l,2),b=o[0],h=o[1],p=c&&!s&&!b,v=function(e){var t=e.map((function(t){var c,n;return t.motherName&&(c=e.find((function(e){var c=e.name;return t.motherName===c}))),t.fatherName&&(n=e.find((function(e){var c=e.name;return t.fatherName===c}))),Object(d.a)(Object(d.a)({},t),{},{mother:c,father:n})}));n(t)};return Object(x.useEffect)((function(){j(!0),u().then(v).catch((function(){h("Something went wrong")})).finally((function(){j(!1)}))}),[]),Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("h1",{className:"title",children:"People Page"}),Object(i.jsx)("div",{className:"block",children:Object(i.jsxs)("div",{className:"box table-container",children:[s&&Object(i.jsx)(m,{}),b&&Object(i.jsx)("p",{"data-cy":"peopleLoadingError",className:"has-text-danger",children:b}),p&&(c.length>0?Object(i.jsx)(f,{people:c}):Object(i.jsx)("p",{"data-cy":"noPeopleMessage",children:"There are no people on the server"}))]})})]})},N=function(){return Object(i.jsx)(a.a,{children:Object(i.jsx)(r.e,{children:Object(i.jsxs)(r.c,{path:"/",element:Object(i.jsx)(o,{}),children:[Object(i.jsx)(r.c,{index:!0,element:Object(i.jsx)(h,{})}),Object(i.jsx)(r.c,{path:"home",element:Object(i.jsx)(r.a,{to:"/",replace:!0})}),Object(i.jsx)(r.c,{path:"people",element:Object(i.jsx)(v,{}),children:Object(i.jsx)(r.c,{path:":slug",element:Object(i.jsx)(v,{})})}),Object(i.jsx)(r.c,{path:"*",element:Object(i.jsx)(b,{})})]})})})};Object(n.createRoot)(document.getElementById("root")).render(Object(i.jsx)(N,{}))}},[[38,1,2]]]);
//# sourceMappingURL=main.e05fb148.chunk.js.map