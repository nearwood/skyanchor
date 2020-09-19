(this.webpackJsonpskyanchor=this.webpackJsonpskyanchor||[]).push([[0],{53:function(e,t,a){e.exports=a(67)},58:function(e,t,a){},60:function(e,t,a){},67:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(8),o=a.n(c),i=(a(58),a(14)),l=a.n(i),s=a(27),u=a(10),p=a(36),d=a(108),m=a(130),f=a(129),v=a(125),h=a(126),b=a(28),g=a(127),E=a(128),j=a(37),w=a.n(j),O=(a(60),a(132)),y=a(115),k=a(116),S=a(117),x=a(118),W=a(119),A=a(110),N=a(114),C=a(113),D=a(111),T=a(112),B=Object(d.a)((function(e){return{root:{maxWidth:345},noWrap:{whiteSpace:"nowrap"}}}));function U(e){var t=e.data,a=B();return r.a.createElement(A.a,{className:a.table,size:"small","aria-label":"a dense table"},r.a.createElement(D.a,null,r.a.createElement(T.a,null,r.a.createElement(C.a,null,"Time"),r.a.createElement(C.a,{align:"right"}),r.a.createElement(C.a,{align:"right"},"Temperature"),r.a.createElement(C.a,{align:"right"},"Wind"))),r.a.createElement(N.a,null,t.map((function(e){return r.a.createElement(T.a,{key:e.startTime},r.a.createElement(C.a,{component:"th",scope:"row"},(t=e.startTime,new Date(t).getHours()),":00"),r.a.createElement(C.a,{align:"right"},e.shortForecast),r.a.createElement(C.a,{align:"right",className:a.noWrap},e.temperature," \xb0",e.temperatureUnit),r.a.createElement(C.a,{align:"right",className:a.noWrap},e.windSpeed," ",e.windDirection));var t}))))}var L=Object(d.a)((function(e){return{root:{maxWidth:512},avatar:{width:e.spacing(8),height:e.spacing(8)}}}));function R(e){var t=e.period,a=e.hourlyData,n=L();return r.a.createElement(y.a,{className:n.root},r.a.createElement(k.a,null,r.a.createElement(S.a,{avatar:r.a.createElement(O.a,{src:t.icon,variant:"square","aria-label":"weather icon",className:n.avatar}),title:t.name,subheader:function(e){var t=new Date(e);return null===t||void 0===t?void 0:t.toLocaleDateString()}(t.startTime)}),r.a.createElement(x.a,null,r.a.createElement("span",null,t.temperature," \xb0",t.temperatureUnit),r.a.createElement("div",null,t.shortForecast))),r.a.createElement(W.a,{variant:"middle"}),r.a.createElement(U,{data:a}))}var F=a(124),P=a(131),H=a(123),I=a(122),J=a(121),M=a(33),_=a(120),q=Object(d.a)((function(e){return{noWrap:{whiteSpace:"nowrap"}}}));function z(e){var t=e.open,a=e.onClose,n=e.data,c=Object(M.a)(),o=Object(_.a)(c.breakpoints.down("sm")),i=q(),l=r.a.createElement("div",null,"No active alerts");return Array.isArray(n)&&n.length>0&&(l=n.map((function(e){return r.a.createElement("div",{key:e.id},r.a.createElement("div",null,e.areaDesc),r.a.createElement("div",{className:i.noWrap},e.category),r.a.createElement("div",{className:i.noWrap},e.severity),r.a.createElement("div",null,e.event),r.a.createElement("div",null,e.headline),r.a.createElement("div",null,"Effective: ",e.effective),r.a.createElement("div",null,"Expires: ",e.expires))}))),r.a.createElement(P.a,{fullScreen:o,open:t,"aria-labelledby":"alert-dialog-title"},r.a.createElement(J.a,{id:"alert-dialog-title"},"Weather Alerts"),r.a.createElement(I.a,null,l),r.a.createElement(H.a,null,r.a.createElement(F.a,{autoFocus:!0,onClick:a,color:"primary"},"Close")))}var G=Object(d.a)((function(e){var t;return{appBar:(t={display:"none"},Object(p.a)(t,e.breakpoints.down("sm"),{display:"block"}),Object(p.a)(t,"marginBottom",e.spacing(1)),t),title:{flexGrow:1},menuButton:{}}})),$={},K="initial",Q="loading",V="error",X="loaded";function Y(){var e=Object(n.useState)(K),t=Object(u.a)(e,2),a=t[0],c=t[1],o=Object(n.useState)(K),i=Object(u.a)(o,2),p=i[0],d=i[1],j=Object(n.useState)(K),O=Object(u.a)(j,2),y=O[0],k=O[1],S=Object(n.useState)(K),x=Object(u.a)(S,2),W=x[0],A=x[1],N=Object(n.useState)(K),C=Object(u.a)(N,2),D=C[0],T=C[1],B=Object(n.useState)(null),U=Object(u.a)(B,2),L=U[0],F=U[1],P=Object(n.useState)(null),H=Object(u.a)(P,2),I=H[0],J=H[1],M=Object(n.useState)("Loading..."),_=Object(u.a)(M,2),q=_[0],Y=_[1],Z=Object(n.useState)(null),ee=Object(u.a)(Z,2),te=ee[0],ae=ee[1],ne=Object(n.useState)(null),re=Object(u.a)(ne,2),ce=re[0],oe=re[1],ie=Object(n.useState)(null),le=Object(u.a)(ie,2),se=le[0],ue=le[1],pe=Object(n.useState)(null),de=Object(u.a)(pe,2),me=de[0],fe=de[1],ve=Object(n.useState)(null),he=Object(u.a)(ve,2),be=he[0],ge=he[1],Ee=Object(n.useState)(null),je=Object(u.a)(Ee,2),we=je[0],Oe=je[1],ye=Object(n.useState)(!1),ke=Object(u.a)(ye,2),Se=ke[0],xe=ke[1],We=G();Object(n.useEffect)((function(){if(navigator.geolocation){c(Q),navigator.geolocation.getCurrentPosition((function(e){F(e.coords.latitude),J(e.coords.longitude),c(X)}),(function(e){console.error(e),c(V)}))}else c(V)}),[]);var Ae=function(e){if(null===e||void 0===e?void 0:e.properties){var t=null===e||void 0===e?void 0:e.properties,a=t.city,n=t.state;return"".concat(a,", ").concat(n)}return""};Object(n.useEffect)((function(){function e(){return(e=Object(s.a)(l.a.mark((function e(){var t,a,n,r,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://api.weather.gov/points/".concat(L,",").concat(I),{headers:$}).then((function(e){return e.json()}));case 3:r=e.sent,Y(Ae(null===r||void 0===r||null===(t=r.properties)||void 0===t?void 0:t.relativeLocation)),ae(null===r||void 0===r||null===(a=r.properties)||void 0===a?void 0:a.forecast),ue(null===r||void 0===r||null===(n=r.properties)||void 0===n?void 0:n.forecastHourly),c="".concat(L,",").concat(I),ge("https://api.weather.gov/alerts/active?status=actual&message_type=alert,update,cancel&point=".concat(encodeURIComponent(c))),d(X),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(0),console.error(e.t0),d(V);case 16:case"end":return e.stop()}}),e,null,[[0,12]])})))).apply(this,arguments)}"number"===typeof L&&"number"===typeof I&&(d(Q),function(){e.apply(this,arguments)}())}),[L,I]),Object(n.useEffect)((function(){function e(){return(e=Object(s.a)(l.a.mark((function e(){var t,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(te,{headers:$}).then((function(e){return e.json()}));case 3:a=e.sent,oe(null===a||void 0===a||null===(t=a.properties)||void 0===t?void 0:t.periods),k(X),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0),k(V);case 12:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}te&&(k(Q),function(){e.apply(this,arguments)}())}),[te]);var Ne=function(e,t){if(!Array.isArray(e)||!t)return[];var a=new Date(t.startTime),n=new Date(t.endTime);return e.filter((function(e){var t=new Date(e.startTime),r=new Date(e.endTime);return t>=a&&r<=n}))};Object(n.useEffect)((function(){function e(){return(e=Object(s.a)(l.a.mark((function e(){var t,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(se).then((function(e){return e.json()}));case 3:a=e.sent,fe(null===a||void 0===a||null===(t=a.properties)||void 0===t?void 0:t.periods),A(X),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0),A(V);case 12:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}se&&(A(Q),function(){e.apply(this,arguments)}())}),[se]),Object(n.useEffect)((function(){function e(){return(e=Object(s.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(be).then((function(e){return e.json()}));case 3:t=e.sent,Oe(null===t||void 0===t?void 0:t.features),T(X),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0),T(V);case 12:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}be&&(T(Q),function(){e.apply(this,arguments)}())}),[be]);var Ce=Array.isArray(we)?we.length:0;return r.a.createElement("div",{className:"App",style:{padding:10}},r.a.createElement(v.a,{position:"static",className:We.appBar},r.a.createElement(h.a,null,r.a.createElement(b.a,{variant:"h6",noWrap:!0,className:We.title},r.a.createElement("span",{role:"img","aria-label":"Skyanchor logo"},"\ud83c\udf29\ufe0f"),q),r.a.createElement(g.a,{edge:"end",className:We.menuButton,disabled:0===Ce,color:"inherit","aria-label":"alerts",onClick:function(){return xe(!0)}},Ce>0?r.a.createElement(E.a,{badgeContent:Ce,color:"error"},r.a.createElement(w.a,null)):r.a.createElement(w.a,null)))),y!==X&&r.a.createElement(f.a,{variant:"determinate",value:function(){var e=[a,p,y,W,D],t=Math.round(100/e.length);return e.reduce((function(e,a){return e+(a===X?t:0)}),0)}()}),r.a.createElement(m.a,{container:!0,spacing:2},!1,Array.isArray(ce)&&ce.map((function(e){return r.a.createElement(m.a,{item:!0,xs:12,md:6,lg:2,key:"".concat(e.number,"_").concat(e.name)},r.a.createElement(R,{period:e,hourlyData:Ne(me,e)}))}))),r.a.createElement(z,{data:we,open:Se,onClose:function(){return xe(!1)}}))}var Z=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function ee(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(Y,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/skyanchor",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/skyanchor","/service-worker.js");Z?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):ee(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):ee(t,e)}))}}()}},[[53,1,2]]]);
//# sourceMappingURL=main.9a996184.chunk.js.map