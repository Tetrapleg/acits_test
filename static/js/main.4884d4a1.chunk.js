(this.webpackJsonpacits_test=this.webpackJsonpacits_test||[]).push([[0],{259:function(n,e,t){"use strict";t.r(e);var a,r,c,i,o,s,d,b,l,j,x,h,u,f,p,m,O,g,v,w,k,y,C,S,I,T,z,F,M,B,q,D=t(0),N=t.n(D),P=t(15),R=t.n(P),W=t(14),A=t(47),E=t(7),J=t(8),L=Object(J.a)(a||(a=Object(E.a)(["\n  body {\n    background: rgb(45, 45, 45);\n    overflow-x: hidden;\n    font-family: 'Bona Nova', serif;\n  }\n\n  h1 {\n    color: #f8c555;\n    color: #e2777a;\n    color: #ccc;\n    color: #d0021b;\n    color: #7ec699;\n    color: #cc99cd;\n    text-align: center;\n  }\n\n  h3 {\n    background: #5f9ea0;\n    color: #fff;\n    font-size: 36px;\n    line-height: 100px;\n    margin: 10px;\n    padding: 2%;\n    position: relative;\n    text-align: center;\n  }\n\n  a {\n    cursor: pointer;\n  }\n"]))),U=t(69),_=t(2),V=["children"],G=J.c.div(r||(r=Object(E.a)(["\n  max-width: 1200px;\n  padding: 0px 15px;\n  margin: 0 auto;\n"]))),H=function(n){var e=n.children;Object(U.a)(n,V);return Object(_.jsx)(G,{children:e})},K={fontWeight:"bold",color:"#f8c555",textDecoration:"underline"},Q=J.c.nav(c||(c=Object(E.a)(["\n  height: 100px;\n  width: 100%;\n  color: #fff;\n  border-bottom: 1px solid red;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  & a {\n    color: #ccc;\n    font-size: 24px;\n    text-decoration: none;\n  }\n\n  & a+a {\n    margin-left: 15px;\n  }\n"]))),X=function(){return Object(_.jsx)(Q,{children:Object(_.jsxs)(H,{children:[Object(_.jsx)(A.b,{to:"/today",activeStyle:K,children:"\u0421\u0435\u0433\u043e\u0434\u043d\u044f"}),Object(_.jsx)(A.b,{to:"/animals",activeStyle:K,children:"\u0416\u0438\u0432\u043e\u0442\u043d\u044b\u0435"})]})})},Y=t(17),Z=t(9),$=t.n(Z),nn=t(22),en=t(48),tn=t.n(en),an=Object(D.createContext)(),rn=J.c.div(i||(i=Object(E.a)(["\n  padding: 15px;\n  border: 1px solid #d0021b;\n  border-radius: 10px;\n  margin: 15px;\n  color: #e2777a;\n  font-size: 3vw;\n\n  & span:nth-child(odd) {\n    color: #f8c555;\n    font-size: 0.7em;\n  }\n\n  & span:nth-child(2) {\n    cursor: pointer;\n  }\n\n  @media(max-width: 1400px) {\n    font-size: 5vw;\n  }\n"]))),cn=function(n,e){var t=Object(D.useContext)(an),a=t.token,r=t.setToken,c=t.isFetching,i=t.setIsFetching,o=Object(D.useState)(0),s=Object(W.a)(o,2),d=s[0],b=s[1];if(Object(D.useEffect)((function(){Object(nn.a)($.a.mark((function t(){return $.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c||i(!0),t.next=3,tn.a.get("https://acits-test-back.herokuapp.com/api".concat(n),{headers:{Authorization:"Bearer "+a,"Content-Type":"application/json"}}).then((function(n){e(n.data),b(Math.ceil(n.data.count/5))})).catch((function(n){r(null),localStorage.removeItem("token"),console.warn(n,"errror")}));case 3:i(!1);case 4:case"end":return t.stop()}}),t)})))()}),[]),d)return d},on=J.c.nav(o||(o=Object(E.a)(["\n  padding: 15px;\n  text-align: center;\n  color: #f8c555;\n  font-size: 20px;\n\n  & span {\n    padding: 0px 5px;\n  }\n"]))),sn=J.c.span(s||(s=Object(E.a)(["\n  cursor: pointer;\n"]))),dn=J.c.span(d||(d=Object(E.a)(["\n  color: #e2777a;\n"]))),bn=function(){for(var n=Object(D.useContext)(an),e=n.token,t=n.setToken,a=n.setModalItem,r=n.setIsFetching,c=Object(D.useState)(null),i=Object(W.a)(c,2),o=i[0],s=i[1],d=cn("/animals/?limit=5&offset=0",s),b=Object(D.useState)(1),l=Object(W.a)(b,2),j=l[0],x=l[1],h=[],u=0;u<d;u++)h.push(u+1);var f=function(){var n=Object(nn.a)($.a.mark((function n(a){return $.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r(!0),x(a),n.next=4,tn.a.get("https://acits-test-back.herokuapp.com/api/animals/?limit=5&offset=".concat(5*(a-1)),{headers:{Authorization:"Bearer "+e,"Content-Type":"application/json"}}).then((function(n){s(n.data)})).catch((function(n){t(null),localStorage.removeItem("token"),console.warn(n,"errror")}));case 4:r(!1);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();return Object(_.jsxs)(H,{children:[Object(_.jsx)("h1",{children:"\u0412\u0441\u0435 \u043f\u043e\u0434\u043e\u043f\u0435\u0447\u043d\u044b\u0435"}),Object(_.jsx)(on,{children:h.length>1&&h.map((function(n){return n!==j?Object(_.jsx)(sn,{onClick:function(){return f(n)},children:n},n):Object(_.jsx)(dn,{children:n},n)}))}),o&&o.results.map((function(n){return Object(_.jsxs)(rn,{children:[Object(_.jsx)("span",{children:n.spec.name})," ",Object(_.jsx)("span",{onClick:function(){return a(n)},children:n.name})]},n.id)}))]})},ln=t(29),jn=t(41),xn=t(127),hn=t(70),un=t(293),fn=t(295),pn=t(289),mn=["children"],On=Object(pn.a)((function(n){return{root:{width:"100%",maxWidth:"500px",margin:"0 auto",marginTop:n.spacing(1),height:"100%",display:"flex",flexDirection:"column",justifyContent:"space-between",backgroundColor:"#ccc",padding:"5px 20px 15px",borderRadius:"5px"}}})),gn=function(n){var e=n.children,t=Object(U.a)(n,mn),a=On();return Object(_.jsx)("form",Object(ln.a)(Object(ln.a)({className:a.root,noValidate:!0},t),{},{children:e}))},vn=t(294),wn=Object(D.forwardRef)((function(n,e){return Object(_.jsx)(vn.a,Object(ln.a)({variant:"outlined",margin:"normal",inputRef:e,fullWidth:!0},n))})),kn=hn.a().shape({login:hn.b().required("\u041f\u043e\u043b\u0435, \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0435 \u0434\u043b\u044f \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f"),password:hn.b().required("\u041f\u043e\u043b\u0435, \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0435 \u0434\u043b\u044f \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f")}),yn=Object(pn.a)((function(){return{root:{marginTop:"15px"}}})),Cn=function(){var n,e,t=yn(),a=Object(D.useContext)(an),r=a.setToken,c=a.setIsFetching,i=Object(D.useState)(!1),o=Object(W.a)(i,2),s=o[0],d=o[1],b=Object(jn.d)({mode:"onBlur",resolver:Object(xn.a)(kn)}),l=b.register,j=b.handleSubmit,x=b.formState.errors;return Object(_.jsxs)(H,{children:[Object(_.jsx)("h1",{children:"\u0410\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u044f"}),Object(_.jsxs)(gn,{onSubmit:j((function(n){d(!1),c(!0),tn.a.post("https://acits-test-back.herokuapp.com/api/login",{login:n.login,password:n.password}).then((function(n){r(n.data.accessToken),localStorage.setItem("token",n.data.accessToken)})).catch((function(n){console.warn(n),d(!0),c(!1)}))})),children:[Object(_.jsx)(wn,Object(ln.a)(Object(ln.a)({},l("login")),{},{id:"login",type:"text",label:"\u041b\u043e\u0433\u0438\u043d",name:"login",required:!0,error:!!x.login,helperText:null===x||void 0===x||null===(n=x.login)||void 0===n?void 0:n.message})),Object(_.jsx)(wn,Object(ln.a)(Object(ln.a)({},l("password")),{},{id:"password",type:"text",label:"\u041f\u0430\u0440\u043e\u043b\u044c",name:"password",required:!0,error:!!x.password,helperText:null===x||void 0===x||null===(e=x.password)||void 0===e?void 0:e.message})),s&&Object(_.jsx)(un.a,{error:!0,children:"\u0418\u043c\u044f \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f \u0438\u043b\u0438 \u043f\u0430\u0440\u043e\u043b\u044c \u0432\u0432\u0435\u0434\u0435\u043d\u044b \u043d\u0435 \u0432\u0435\u0440\u043d\u043e"}),Object(_.jsx)(fn.a,{variant:"contained",color:"primary",className:t.root,type:"submit",children:"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c"})]})]})},Sn=Object(J.d)(b||(b=Object(E.a)(["\n    0%, 80%, 100% {\n      -webkit-transform: scale(0);\n              transform: scale(0);\n    }\n    40% {\n      -webkit-transform: scale(1);\n              transform: scale(1);\n    }\n"]))),In=Object(J.b)(l||(l=Object(E.a)(["\n    width: 100%;\n    height: 100%;\n    position: absolute;\n    left: 0;\n    top: 0;\n"]))),Tn=Object(J.b)(j||(j=Object(E.a)(["\n    content: '';\n    display: block;\n    margin: 0 auto;\n    width: 15%;\n    height: 15%;\n    background-color: rgba(255,21,49,0.9);\n    border-radius: 50%;\n    -webkit-animation: "," 1.2s infinite ease-in-out;\n            animation: "," 1.2s infinite ease-in-out;\n"])),Sn,Sn),zn=J.c.div(x||(x=Object(E.a)(["\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  right: 0;\n  left: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 900;\n  background-color: rgba(0,0,0,0.5);\n"]))),Fn=J.c.div(h||(h=Object(E.a)(["\n  width: 10vmax;\n  height: 10vmax;\n  max-width: 6rem;\n  max-height: 6rem;\n"]))),Mn=J.c.div(u||(u=Object(E.a)(["\n  flex: 1 1 25%;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  border-radius: 50%;\n  background-color: rgba(204,204,255, 0.6);\n"]))),Bn=J.c.div(f||(f=Object(E.a)(["\n  width: 70%;\n  height: 70%;\n  position: relative;\n  margin: auto;\n"]))),qn=J.c.div(p||(p=Object(E.a)(["\n  ",";\n  &::before{\n    ","\n  }\n"])),In,Tn),Dn=J.c.div(m||(m=Object(E.a)(["\n  ",";\n  -webkit-transform: rotate(30deg);\n          transform: rotate(30deg);\n  &::before{\n    ",";\n    -webkit-animation-delay: -1.1s;\n            animation-delay: -1.1s;\n  }\n"])),In,Tn),Nn=J.c.div(O||(O=Object(E.a)(["\n  ","\n  -webkit-transform: rotate(60deg);\n          transform: rotate(60deg);\n  &::before{\n    ",";\n    -webkit-animation-delay: -1.0s;\n            animation-delay: -1.0s;\n  }\n  "])),In,Tn),Pn=J.c.div(g||(g=Object(E.a)(["\n  ","\n  -webkit-transform: rotate(90deg);\n          transform: rotate(90deg);\n  &::before{\n    ",";\n    -webkit-animation-delay: -0.9s;\n            animation-delay: -0.9s;\n  }\n  "])),In,Tn),Rn=J.c.div(v||(v=Object(E.a)(["\n  ","\n  -webkit-transform: rotate(120deg);\n          transform: rotate(120deg);\n  &::before{\n    ",";\n    -webkit-animation-delay: -0.8s;\n            animation-delay: -0.8s;\n  }\n  "])),In,Tn),Wn=J.c.div(w||(w=Object(E.a)(["\n  ","\n  -webkit-transform: rotate(150deg);\n          transform: rotate(150deg);\n  &::before{\n    ",";\n    -webkit-animation-delay: -0.7s;\n            animation-delay: -0.7s;\n  }\n  "])),In,Tn),An=J.c.div(k||(k=Object(E.a)(["\n  ","\n  -webkit-transform: rotate(180deg);\n          transform: rotate(180deg);\n  &::before{\n    ",";\n    -webkit-animation-delay: -0.6s;\n            animation-delay: -0.6s;\n  }\n  "])),In,Tn),En=J.c.div(y||(y=Object(E.a)(["\n  ","\n  -webkit-transform: rotate(210deg);\n          transform: rotate(210deg);\n  &::before{\n    ",";\n    -webkit-animation-delay: -0.5s;\n            animation-delay: -0.5s;\n  }\n  "])),In,Tn),Jn=J.c.div(C||(C=Object(E.a)(["\n  ","\n  -webkit-transform: rotate(240deg);\n          transform: rotate(240deg);\n  &::before{\n    ",";\n    -webkit-animation-delay: -0.4s;\n            animation-delay: -0.4s;\n  }\n  "])),In,Tn),Ln=J.c.div(S||(S=Object(E.a)(["\n  ","\n  -webkit-transform: rotate(270deg);\n          transform: rotate(270deg);\n  &::before{\n    ",";\n    -webkit-animation-delay: -0.3s;\n            animation-delay: -0.3s;\n  }\n  "])),In,Tn),Un=J.c.div(I||(I=Object(E.a)(["\n  ","\n  -webkit-transform: rotate(300deg);\n          transform: rotate(300deg);\n  &::before{\n    ",";\n    -webkit-animation-delay: -0.2s;\n            animation-delay: -0.2s;\n  }\n  "])),In,Tn),_n=J.c.div(T||(T=Object(E.a)(["\n  ","\n  -webkit-transform: rotate(330deg);\n          transform: rotate(330deg);\n  &::before{\n    ",";\n    -webkit-animation-delay: -0.1s;\n            animation-delay: -0.1s;\n  }\n  "])),In,Tn),Vn=function(){return Object(_.jsx)(zn,{children:Object(_.jsx)(Fn,{children:Object(_.jsx)(Mn,{children:Object(_.jsxs)(Bn,{children:[Object(_.jsx)(qn,{}),Object(_.jsx)(Dn,{}),Object(_.jsx)(Nn,{}),Object(_.jsx)(Pn,{}),Object(_.jsx)(Rn,{}),Object(_.jsx)(Wn,{}),Object(_.jsx)(An,{}),Object(_.jsx)(En,{}),Object(_.jsx)(Jn,{}),Object(_.jsx)(Ln,{}),Object(_.jsx)(Un,{}),Object(_.jsx)(_n,{})]})})})})},Gn=function(){var n=Object(D.useContext)(an).setModalItem,e=Object(D.useState)(null),t=Object(W.a)(e,2),a=t[0],r=t[1];return cn("/executions/today",r),Object(_.jsxs)(H,{children:[Object(_.jsx)("h1",{children:"\u041f\u0440\u043e\u0446\u0435\u0434\u0443\u0440\u044b \u043d\u0430 \u0441\u0435\u0433\u043e\u0434\u043d\u044f"}),a&&a.results.map((function(e){return Object(_.jsxs)(rn,{children:[Object(_.jsx)("span",{children:e.animal.spec.name})," ",Object(_.jsx)("span",{onClick:function(){return n(e)},children:e.animal.name})," - ",Object(_.jsx)("span",{children:e.type})," ",e.time.match(/\d\d:\d\d/)]},e.id)})),!a&&Object(_.jsx)(Vn,{})]})},Hn=function(){return Object(D.useContext)(an).token?Object(_.jsxs)(Y.d,{children:[Object(_.jsx)(Y.b,{path:"/today",component:Gn}),Object(_.jsx)(Y.b,{path:"/animals",component:bn}),Object(_.jsx)(Y.a,{to:"/today"})]}):Object(_.jsx)(_.Fragment,{children:Object(_.jsx)(Cn,{})})},Kn=function(n){if(n){if(n%10===1&&11!==n)return"".concat(n," \u0433\u043e\u0434");if(n%10>1&&n%10<5&&1!==Math.floor(n/10))return"".concat(n," \u0433\u043e\u0434\u0430")}return"".concat(n," \u043b\u0435\u0442")},Qn=J.c.div(z||(z=Object(E.a)(["\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  z-index: 5;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: rgba(0,0,0, 0.3);\n  backdrop-filter: blur(0.2em);\n"]))),Xn=J.c.div(F||(F=Object(E.a)(["\n  max-width: 500px;\n  max-height: 350px;\n  padding-bottom: 15px;\n  background-color: #000;\n  width: 90%;\n  height: fit-content;\n  border-radius: 10px;\n  border: 1px solid red;\n  font-size: 40px;\n  color: #e2777a;\n\n  @media(max-width: 500px) {\n    font-size: 8vw;\n  }\n"]))),Yn=J.c.div(M||(M=Object(E.a)(["\n  padding: 5px 30px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n\n  & div:nth-child(1) {\n    color: #f8c555;\n    font-size: 0.7em;\n  }\n\n  @media(max-width: 500px) {\n    padding: 5px 1em;\n  }\n"]))),Zn=J.c.div(B||(B=Object(E.a)(["\n\n"]))),$n=J.c.div(q||(q=Object(E.a)(['\n  position: relative;\n  width: 40px;\n  height: 40px;\n  border: 1px solid rgba(255,21,49,0.9);\n  border-radius: 50%;\n  margin-top: 10px;\n  margin-left: auto;\n  margin-right: 10px;\n  cursor: pointer;\n  &::before,\n    ::after {\n      position: absolute;\n      content: "";\n      width: 30px;\n      height: 3px;\n      background-color: rgba(255,21,49,0.7);\n      top: 47%;\n      left: 12%;\n    }\n  &::before{\n    transform: rotate(45deg);\n  }\n  &::after{\n    transform: rotate(-45deg);\n  }\n\n  &:hover {\n  &::before,\n    ::after {\n      background-color: rgba(255,21,49,1);\n      filter: drop-shadow(0 0 4px rgba(255,0,0,0.7));\n    }\n  }\n']))),ne=function(){var n=Object(D.useContext)(an),e=n.modalItem,t=n.setModalItem,a=e.animal||e;return Object(_.jsx)(Qn,{id:"overlay",onClick:function(n){"overlay"===n.target.id&&t(null)},children:Object(_.jsxs)(Xn,{children:[Object(_.jsx)($n,{onClick:function(){return t(null)}}),Object(_.jsxs)(Yn,{children:[Object(_.jsx)(Zn,{children:"\u0412\u0438\u0434"}),Object(_.jsx)(Zn,{children:a.spec.name})]}),Object(_.jsxs)(Yn,{children:[Object(_.jsx)(Zn,{children:"\u041a\u043b\u0438\u0447\u043a\u0430"}),Object(_.jsx)(Zn,{children:a.name})]}),Object(_.jsxs)(Yn,{children:[Object(_.jsx)(Zn,{children:"\u0412\u043e\u0437\u0440\u0430\u0441\u0442"}),Object(_.jsx)(Zn,{children:Kn(a.age)})]}),Object(_.jsxs)(Yn,{children:[Object(_.jsx)(Zn,{children:"\u0420\u043e\u0441\u0442"}),Object(_.jsxs)(Zn,{children:[a.height," ",a.heightUnit]})]}),Object(_.jsxs)(Yn,{children:[Object(_.jsx)(Zn,{children:"\u0412\u0435\u0441"}),Object(_.jsxs)(Zn,{children:[a.weight," ",a.weightUnit]})]})]})})};var ee=function(){var n=Object(D.useState)(localStorage.getItem("token")),e=Object(W.a)(n,2),t=e[0],a=e[1],r=Object(D.useState)(!1),c=Object(W.a)(r,2),i=c[0],o=c[1],s=Object(D.useState)(!1),d=Object(W.a)(s,2),b=d[0],l=d[1];return Object(_.jsxs)(A.a,{children:[Object(_.jsx)(L,{}),Object(_.jsxs)(an.Provider,{value:{token:t,setToken:a,modalItem:i,setModalItem:o,isFetching:b,setIsFetching:l},children:[Object(_.jsx)(X,{}),Object(_.jsx)(Hn,{}),i&&Object(_.jsx)(ne,{}),b&&Object(_.jsx)(Vn,{})]})]})},te=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,297)).then((function(e){var t=e.getCLS,a=e.getFID,r=e.getFCP,c=e.getLCP,i=e.getTTFB;t(n),a(n),r(n),c(n),i(n)}))};R.a.render(Object(_.jsx)(N.a.StrictMode,{children:Object(_.jsx)(ee,{})}),document.getElementById("root")),te()}},[[259,1,2]]]);
//# sourceMappingURL=main.4884d4a1.chunk.js.map