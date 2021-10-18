(this["webpackJsonpgoit-react-hw-07-phonebook"]=this["webpackJsonpgoit-react-hw-07-phonebook"]||[]).push([[0],{53:function(e,t,n){},79:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(26),o=n.n(c),u=n(18),s=n(6),i=n(41),l=(n(53),n(7)),b=n(5),d=n.n(b),j=n(13),p=n(16),f=n.n(p),h=n(8);f.a.defaults.baseURL="https://connections-api.herokuapp.com";var O,x,m,v,g,w=function(e){f.a.defaults.headers.common.Authorization="Bearer ".concat(e)},k=function(){f.a.defaults.headers.common.Authorization=""},y=Object(h.c)("auth/register",function(){var e=Object(j.a)(d.a.mark((function e(t,n){var r,a,c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.rejectWithValue,e.prev=1,e.next=4,f.a.post("/users/signup",t);case 4:return a=e.sent,c=a.data,w(c.token),e.abrupt("return",c);case 10:return e.prev=10,e.t0=e.catch(1),e.abrupt("return",r());case 13:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t,n){return e.apply(this,arguments)}}()),C=Object(h.c)("auth/login",function(){var e=Object(j.a)(d.a.mark((function e(t,n){var r,a,c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.rejectWithValue,e.prev=1,e.next=4,f.a.post("/users/login",t);case 4:return a=e.sent,c=a.data,w(c.token),e.abrupt("return",c);case 10:return e.prev=10,e.t0=e.catch(1),e.abrupt("return",r());case 13:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t,n){return e.apply(this,arguments)}}()),L=Object(h.c)("auth/logout",function(){var e=Object(j.a)(d.a.mark((function e(t,n){var r,a,c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.rejectWithValue,e.prev=1,e.next=4,f.a.post("/users/logout");case 4:return a=e.sent,c=a.data,console.log(c),k(),e.abrupt("return",c);case 11:e.prev=11,e.t0=e.catch(1),r();case 14:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t,n){return e.apply(this,arguments)}}()),z=Object(h.c)("auth/currentUser",function(){var e=Object(j.a)(d.a.mark((function e(t,n){var r,a,c,o,u,s;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=n.getState,a=n.rejectWithValue,c=r(),null!==(o=c.auth.token)){e.next=5;break}return e.abrupt("return",a());case 5:return w(o),e.prev=6,e.next=9,f.a.get("/users/current");case 9:return u=e.sent,s=u.data,e.abrupt("return",s);case 14:e.prev=14,e.t0=e.catch(6),a();case 17:case"end":return e.stop()}}),e,null,[[6,14]])})));return function(t,n){return e.apply(this,arguments)}}()),S=function(e){return e.auth.isLoggedIn},A=function(e){return e.auth.user.email},E=n.p+"static/media/default-avatar.e44fc4e2.png",I=n(1),R=function(){var e=Object(s.b)(),t=Object(s.c)(A);return Object(I.jsx)("header",{children:Object(I.jsxs)("div",{children:[Object(I.jsx)(u.b,{to:"/contacts",children:"Contacts"}),Object(I.jsx)("img",{src:E,alt:"avatar",width:"40",height:"40"}),Object(I.jsxs)("p",{children:["Hello, ",t]}),Object(I.jsx)("button",{type:"button",onClick:function(){return e(L())},children:"LogOut"})]})})},V=n(3),W=n(4),N=W.a.div(O||(O=Object(V.a)(["\n  margin-left: 20px;\n"]))),D=W.a.h1(x||(x=Object(V.a)(["\n  text-transform: uppercase;\n  font-size: 24px;\n"]))),B=W.a.h2(m||(m=Object(V.a)(["\n  text-transform: uppercase;\n  font-size: 18px;\n"]))),J=Object(h.b)("filterChange"),P=W.a.input(v||(v=Object(V.a)(["\n  margin-top: 10px;\n"]))),T=W.a.label(g||(g=Object(V.a)(["\n  display: flex;\n  flex-direction: column;\n  text-align: center;\n  width: 300px;\n"]))),U=n(28),Z=function(e){return e.items.contacts},q=function(e){return e.items.filter},M=function(e){return e.items.isLoading},F=Object(U.a)([Z,q],(function(e,t){var n=t.toLowerCase();return e.filter((function(e){return e.name.toLowerCase().includes(n)}))}));function H(){var e=Object(s.b)(),t=Object(s.c)(q);return Object(I.jsxs)(T,{children:["Find contact by name",Object(I.jsx)(P,{type:"text",value:t,onChange:function(t){return e(J(t.target.value))},name:"filter",placeholder:"Enter contact name"})]})}var $,G,K,Q,X=n(19),Y=n(81),_=W.a.form($||($=Object(V.a)(["\n  display: flex;\n  flex-direction: column;\n  width: 300px;\n  height: auto;\n  border: 1px solid black;\n"]))),ee=W.a.label(G||(G=Object(V.a)(["\n  display: flex;\n  flex-direction: column;\n  text-align: center;\n"]))),te=W.a.input(K||(K=Object(V.a)(["\n  margin: 10px 20px;\n"]))),ne=W.a.button(Q||(Q=Object(V.a)(["\n  margin-bottom: 10px;\n  width: 50%;\n  align-self: center;\n  background-color: #46ec8b;\n  border: 1px solid #46ec8b;\n  border-radius: 5px;\n  &:hover,\n  &:active {\n    background-color: #7171bd;\n    border: 1px solid black;\n    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);\n  }\n"])));function re(){return ae.apply(this,arguments)}function ae(){return(ae=Object(j.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.get("/contacts");case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function ce(e){return oe.apply(this,arguments)}function oe(){return(oe=Object(j.a)(d.a.mark((function e(t){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.post("/contacts",t);case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function ue(e){return se.apply(this,arguments)}function se(){return(se=Object(j.a)(d.a.mark((function e(t){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.delete("/contacts/".concat(t));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}f.a.defaults.baseURL="https://connections-api.herokuapp.com";var ie,le,be,de=Object(h.c)("fetchContacts",function(){var e=Object(j.a)(d.a.mark((function e(t,n){var r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.rejectWithValue,e.prev=1,e.next=4,re();case 4:return e.abrupt("return",e.sent);case 7:return e.prev=7,e.t0=e.catch(1),e.abrupt("return",r(e.t0));case 10:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(t,n){return e.apply(this,arguments)}}()),je=Object(h.c)("addNewContact",function(){var e=Object(j.a)(d.a.mark((function e(t,n){var r,a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.rejectWithValue,e.prev=1,e.next=4,ce(t);case 4:if(201===(a=e.sent).status){e.next=7;break}throw new Error(a.message);case 7:return e.next=9,re();case 9:return e.abrupt("return",e.sent);case 12:return e.prev=12,e.t0=e.catch(1),e.abrupt("return",r(e.t0));case 15:case"end":return e.stop()}}),e,null,[[1,12]])})));return function(t,n){return e.apply(this,arguments)}}()),pe=Object(h.c)("deleteContact",function(){var e=Object(j.a)(d.a.mark((function e(t,n){var r,a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.rejectWithValue,e.prev=1,e.next=4,ue(t);case 4:if(200===(a=e.sent).status){e.next=7;break}throw new Error(a.message);case 7:return e.next=9,re();case 9:return e.abrupt("return",e.sent);case 12:return e.prev=12,e.t0=e.catch(1),e.abrupt("return",r(e.t0));case 15:case"end":return e.stop()}}),e,null,[[1,12]])})));return function(t,n){return e.apply(this,arguments)}}());function fe(){var e=Object(r.useState)(""),t=Object(X.a)(e,2),n=t[0],a=t[1],c=Object(r.useState)(""),o=Object(X.a)(c,2),u=o[0],i=o[1],l=Object(s.b)(),b=Object(s.c)(Z),d=function(e){var t=e.currentTarget,n=t.name,r=t.value;switch(n){case"name":a(r);break;case"number":i(r);break;default:return}};return Object(I.jsxs)(_,{onSubmit:function(e){e.preventDefault();var t=Object(Y.a)(),r={name:n,id:t,number:u};b.find((function(e){return e.name===n}))?alert("".concat(n," is already in contact")):l(je(r)),a(""),i("")},children:[Object(I.jsxs)(ee,{children:["Name:",Object(I.jsx)(te,{type:"text",name:"name",onChange:d,value:n,placeholder:"New contact name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0})]}),Object(I.jsxs)(ee,{children:["Tel:",Object(I.jsx)(te,{type:"tel",name:"number",value:u,placeholder:"New contact number",onChange:d,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0})]}),Object(I.jsx)(ne,{type:"submit",children:"Add contact"})]})}var he,Oe,xe=W.a.li(ie||(ie=Object(V.a)([""]))),me=W.a.button(le||(le=Object(V.a)(["\n  background-color: #46ec8b;\n  border: 1px solid #46ec8b;\n  border-radius: 5px;\n  margin-left: 10px;\n  &:hover,\n  &:active {\n    background-color: #7171bd;\n    border: 1px solid black;\n    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);\n  }\n"]))),ve=W.a.ol(be||(be=Object(V.a)([""])));function ge(){var e=Object(s.b)(),t=Object(s.c)(F),n=Object(s.c)(M);return Object(r.useEffect)((function(){return e(de())}),[e]),Object(I.jsxs)(ve,{children:[n&&Object(I.jsx)("p",{children:"Loading..."}),t.map((function(t){return Object(I.jsxs)(xe,{children:[t.name," : ",t.number,Object(I.jsx)(me,{type:"submit",onClick:function(){e(pe(t.id))},children:"Delete"})]},t.id)}))]})}function we(){return Object(I.jsxs)(N,{children:[Object(I.jsx)(D,{children:"Phonebook"}),Object(I.jsx)(fe,{}),Object(I.jsx)(B,{children:"Contacts"}),Object(I.jsx)(H,{}),Object(I.jsx)(ge,{})]})}var ke,ye,Ce,Le,ze,Se,Ae,Ee=Object(W.a)(u.b)(he||(he=Object(V.a)(["\n  font-size: 50px;\n  text-decoration: none;\n  color: saddlebrown;\n  transition: color 250ms linear;\n  &:first-of-type {\n    margin-right: 50px;\n  }\n  &:active,\n  &:hover {\n    color: #696869;\n  }\n"]))),Ie=W.a.div(Oe||(Oe=Object(V.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: #d5bdd8;\n  height: 100vh;\n"]))),Re=function(){return Object(I.jsxs)(Ie,{children:[Object(I.jsx)(Ee,{to:"/login",children:"Authorization"}),Object(I.jsx)(Ee,{to:"/register",children:"Registration"})]})};function Ve(){var e=Object(s.b)(),t=Object(r.useState)(""),n=Object(X.a)(t,2),a=n[0],c=n[1],o=Object(r.useState)(""),i=Object(X.a)(o,2),l=i[0],b=i[1],d=Object(r.useState)(""),j=Object(X.a)(d,2),p=j[0],f=j[1],h=function(e){var t=e.target,n=t.name,r=t.value;switch(n){case"name":return c(r);case"email":return b(r);case"password":return f(r);default:return}};return Object(I.jsxs)("div",{children:[Object(I.jsx)("h1",{children:"Registration"}),Object(I.jsxs)("form",{autoComplete:"off",onSubmit:function(t){t.preventDefault(),e(y({name:a,email:l,password:p})),c(""),b(""),f("")},children:[Object(I.jsxs)("label",{children:["Name",Object(I.jsx)("input",{name:"name",value:a,onChange:h})]}),Object(I.jsxs)("label",{children:["Email",Object(I.jsx)("input",{name:"email",value:l,onChange:h})]}),Object(I.jsxs)("label",{children:["Password",Object(I.jsx)("input",{type:"password",name:"password",value:p,onChange:h})]}),Object(I.jsx)("button",{type:"submit",children:"Register"}),"Or ",Object(I.jsx)(u.b,{to:"/login",children:"Log In"})]})]})}var We=W.a.div(ke||(ke=Object(V.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  background-color: #d5bdd8;\n  height: 100vh;\n"]))),Ne=W.a.h1(ye||(ye=Object(V.a)(["\n  color: saddlebrown;\n  font-size: 50px;\n"]))),De=W.a.form(Ce||(Ce=Object(V.a)(["\n  display: flex;\n  flex-direction: column;\n"]))),Be=W.a.label(Le||(Le=Object(V.a)(["\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 10px;\n"]))),Je=W.a.input(ze||(ze=Object(V.a)(["\n  border-radius: 10px;\n  border: solid saddlebrown;\n  padding: 5px 10px;\n  &:active,\n  &:hover {\n    border: solid black;\n  }\n"]))),Pe=W.a.button(Se||(Se=Object(V.a)(["\n  width: max-content;\n  border-radius: 10px;\n  border: none;\n  padding: 5px;\n  align-self: center;\n  background-color: #fff;\n  font-weight: bold;\n  margin-bottom: 15px;\n  cursor: pointer;\n  &:hover,\n  &:focus {\n    color: #fff;\n    background-color: saddlebrown;\n  }\n"]))),Te=Object(W.a)(u.b)(Ae||(Ae=Object(V.a)(["\n  text-decoration: none;\n  color: saddlebrown;\n  transition: color 250ms linear;\n  align-self: center;\n  cursor: pointer;\n\n  &:active,\n  &:hover {\n    color: #696869;\n    font-weight: 700;\n    text-decoration: underline;\n  }\n"])));function Ue(){var e=Object(s.b)(),t=Object(r.useState)(""),n=Object(X.a)(t,2),a=n[0],c=n[1],o=Object(r.useState)(""),u=Object(X.a)(o,2),i=u[0],l=u[1],b=function(e){var t=e.target,n=t.name,r=t.value;switch(n){case"email":return c(r);case"password":return l(r);default:return}};return Object(I.jsxs)(We,{children:[Object(I.jsx)(Ne,{children:"Authorization"}),Object(I.jsxs)(De,{autoComplete:"off",onSubmit:function(t){t.preventDefault(),e(C({email:a,password:i})),c(""),l("")},children:[Object(I.jsxs)(Be,{children:["Email",Object(I.jsx)(Je,{placeholder:"Enter password",name:"email",value:a,onChange:b})]}),Object(I.jsxs)(Be,{children:["Password",Object(I.jsx)(Je,{type:"password",name:"password",value:i,onChange:b,placeholder:"Enter password"})]}),Object(I.jsx)(Pe,{type:"submit",children:"Login"}),Object(I.jsx)(Te,{to:"/register",children:"Click for Register"})]})]})}function Ze(){var e=Object(s.c)(S),t=Object(s.b)();return Object(r.useEffect)((function(){t(z())}),[t]),Object(I.jsxs)("div",{children:[e&&Object(I.jsx)(R,{}),Object(I.jsxs)(l.c,{children:[Object(I.jsx)(l.a,{exact:!0,path:"/",children:Object(I.jsx)(Re,{})}),Object(I.jsx)(l.a,{path:"/register",children:Object(I.jsx)(Ve,{})}),Object(I.jsx)(l.a,{path:"/login",children:Object(I.jsx)(Ue,{})}),Object(I.jsx)(l.a,{path:"/contacts",children:Object(I.jsx)(we,{})})]})]})}var qe,Me,Fe,He=n(44),$e=n(20),Ge=n(43),Ke=n.n(Ge),Qe=n(17),Xe=n(9),Ye=Object(h.d)([],(qe={},Object(Qe.a)(qe,de.fulfilled,(function(e,t){return t.payload})),Object(Qe.a)(qe,je.fulfilled,(function(e,t){return t.payload})),Object(Qe.a)(qe,pe.fulfilled,(function(e,t){return t.payload})),qe)),_e=Object(h.d)(!1,(Me={},Object(Qe.a)(Me,de.pending,(function(){return!0})),Object(Qe.a)(Me,de.fulfilled,(function(){return!1})),Object(Qe.a)(Me,de.rejected,(function(){return!1})),Me)),et=Object(h.d)("",Object(Qe.a)({},J,(function(e,t){return t.payload}))),tt=Object(Xe.b)({contacts:Ye,filter:et,isLoading:_e}),nt={user:{name:null,email:null},token:null,isLoggedIn:!1},rt=Object(h.e)({name:"auth",initialState:nt,extraReducers:(Fe={},Object(Qe.a)(Fe,y.fulfilled,(function(e,t){var n=t.payload;e.user=n.user,e.token=n.token,e.isLoggedIn=!0})),Object(Qe.a)(Fe,C.fulfilled,(function(e,t){var n=t.payload;e.user=n.user,e.token=n.token,e.isLoggedIn=!0})),Object(Qe.a)(Fe,L.fulfilled,(function(e){e.user=nt.user,e.token=nt.token,e.isLoggedIn=!1})),Object(Qe.a)(Fe,z.fulfilled,(function(e,t){var n=t.payload;e.user=n,e.isLoggedIn=!0})),Fe)}).reducer,at=Object(He.a)(Object(h.f)({serializableCheck:{ignoredActions:[$e.a,$e.f,$e.b,$e.c,$e.d,$e.e]}})),ct={key:"auth",storage:Ke.a,whitelist:["token"]},ot=Object(h.a)({reducer:{items:tt,auth:Object($e.g)(ct,rt)},middleware:at,devTools:!1}),ut=Object($e.h)(ot);o.a.render(Object(I.jsx)(a.a.StrictMode,{children:Object(I.jsx)(s.a,{store:ot,children:Object(I.jsx)(i.a,{loading:null,persistor:ut,children:Object(I.jsx)(u.a,{children:Object(I.jsx)(Ze,{})})})})}),document.getElementById("root"))}},[[79,1,2]]]);
//# sourceMappingURL=main.0122007a.chunk.js.map