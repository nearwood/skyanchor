(this.webpackJsonpskyanchor=this.webpackJsonpskyanchor||[]).push([[0],{82:function(e,t,a){},84:function(e,t,a){},91:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(9),i=a.n(c),o=(a(82),a(18)),s=a.n(o),l=a(39),j=a(28),d=a(11),u=a(27),b=a(135),h=a(163),p=a(165),O=a(154),x=a(155),f=a(19),v=a(157),m=a(158),g=a(159),w=a(160),y=a(161),k=a(162),S=a(156),N=a(164),A=a(41),C=a.n(A),W=(a(84),a(166)),D=a(142),E=a(143),T=a(144),F=a(145),H=a(146),B=a(147),I=a(137),U=a(141),M=a(140),P=a(138),z=a(139),L=a(2),R=Object(b.a)((function(e){return{root:{maxWidth:345},noWrap:{whiteSpace:"nowrap"},extraData:Object(u.a)({},e.breakpoints.down("xs"),{display:"none"})}}));function G(e){var t=e.data,a=R();return Array.isArray(t)?Object(L.jsxs)(I.a,{size:"small","aria-label":"hourly weather table",children:[Object(L.jsx)(P.a,{children:Object(L.jsxs)(z.a,{children:[Object(L.jsx)(M.a,{children:"Time"}),Object(L.jsx)(M.a,{align:"right",children:"Forecast"}),Object(L.jsx)(M.a,{align:"right",children:"Temperature"}),Object(L.jsx)(M.a,{align:"right",className:a.extraData,children:"Wind"})]})}),Object(L.jsx)(U.a,{children:t.map((function(e){return Object(L.jsxs)(z.a,{children:[Object(L.jsxs)(M.a,{component:"th",scope:"row",children:[(t=e.startTime,new Date(t).getHours()),":00"]}),Object(L.jsx)(M.a,{align:"right",children:e.shortForecast}),Object(L.jsx)(M.a,{align:"right",className:a.noWrap,children:"".concat(e.temperature," \xb0").concat(e.temperatureUnit)}),Object(L.jsx)(M.a,{align:"right",className:"".concat(a.noWrap," ").concat(a.extraData),children:"".concat(e.windSpeed," ").concat(e.windDirection)})]},e.startTime);var t}))})]}):null}var J=Object(b.a)((function(e){return{forecast:{fontSize:"1.2em"},nowrap:{whiteSpace:"nowrap"},avatar:{width:e.spacing(8),height:e.spacing(8)},divider:{margin:"4px 0"},card:{margin:e.spacing(1)}}}));function _(e){var t=e.period,a=e.hourlyData,r=Object(n.useState)(!1),c=Object(d.a)(r,2),i=c[0],o=c[1],s=J();if(!Array.isArray(a)||"object"!==typeof t)return null;return Object(L.jsxs)(D.a,{className:s.card,children:[Object(L.jsx)(E.a,{onClick:function(){return a.length>0?o(!i):void 0},children:Object(L.jsx)(T.a,{avatar:Object(L.jsx)(W.a,{src:t.icon,variant:"square","aria-label":"weather icon",className:s.avatar}),title:Object(L.jsxs)("span",{className:s.forecast,children:[Object(L.jsx)("span",{className:s.nowrap,children:t.name})," - ",Object(L.jsx)("span",{className:s.nowrap,children:"".concat(t.temperature," \xb0").concat(t.temperatureUnit)})," - ",Object(L.jsx)("span",{"aria-label":"brief forecast",children:t.shortForecast})]}),subheader:function(e){var t=new Date(e);return null===t||void 0===t?void 0:t.toLocaleDateString()}(t.startTime)})}),i&&Object(L.jsxs)(F.a,{children:[Object(L.jsxs)(f.a,{variant:"body2",color:"textSecondary",component:"p",children:[" ",t.detailedForecast," "]}),Object(L.jsx)(H.a,{variant:"middle",className:s.divider}),Object(L.jsx)(G,{data:a})]})]})}function q(){var e=J();return Object(L.jsx)(D.a,{className:e.card,children:Object(L.jsx)(T.a,{avatar:Object(L.jsx)(B.a,{animation:"wave",variant:"rect",className:e.avatar}),title:Object(L.jsx)(B.a,{animation:"wave",height:24,width:"66%",style:{marginBottom:6}}),subheader:Object(L.jsx)(B.a,{animation:"wave",height:10,width:"25%"})})})}var $=a(153),K=a(149),Q=a(152),V=a(151),X=a(150),Y=a(29),Z=a(148),ee=a(40),te=a.n(ee),ae=Object(b.a)((function(e){return{alertHeader:{backgroundColor:e.palette.warning.light},alertHeaderIcon:{position:"relative",top:4},divider:{width:"100%",height:e.spacing(1)},noWrap:{whiteSpace:"nowrap"}}}));function ne(e){var t=e.open,a=e.onClose,n=e.data,r=Object(Y.a)(),c=Object(Z.a)(r.breakpoints.down("sm")),i=Object(L.jsx)("div",{children:"No active alerts"});return Array.isArray(n)&&n.length>0&&(i=n.map((function(e){return Object(L.jsx)(re,{alert:e.properties},e.id)}))),Object(L.jsxs)(K.a,{fullScreen:c,open:t,"aria-labelledby":"alert-dialog-title",children:[Object(L.jsx)(X.a,{id:"alert-dialog-title",children:"Weather Alerts"}),Object(L.jsx)(V.a,{children:i}),Object(L.jsx)(Q.a,{children:Object(L.jsx)($.a,{autoFocus:!0,onClick:a,color:"primary",children:"Close"})})]})}function re(e){var t=e.alert,a=ae();return Object(L.jsxs)(L.Fragment,{children:[Object(L.jsxs)(I.a,{size:"small","aria-label":"weather alerts/advisories",children:[Object(L.jsx)(P.a,{className:a.alertHeader,children:Object(L.jsxs)(z.a,{children:[Object(L.jsx)(M.a,{align:"left",children:Object(L.jsx)(ce,{level:t.severity})}),Object(L.jsx)(M.a,{align:"right",children:t.event})]})}),Object(L.jsxs)(U.a,{children:[Object(L.jsx)(z.a,{children:Object(L.jsx)(M.a,{component:"th",colSpan:2,children:t.headline})}),Object(L.jsx)(z.a,{children:Object(L.jsx)(M.a,{align:"center",colSpan:2,children:t.areaDesc})}),Object(L.jsxs)(z.a,{children:[Object(L.jsx)(M.a,{align:"left",children:"Effective:"}),Object(L.jsx)(M.a,{align:"right",children:t.effective})]}),Object(L.jsxs)(z.a,{children:[Object(L.jsx)(M.a,{align:"left",children:"Expires:"}),Object(L.jsx)(M.a,{align:"right",children:t.expires})]})]})]}),Object(L.jsx)("div",{className:a.divider})]})}function ce(e){var t=e.level,a=ae();switch(t){default:case"Unknown":return null;case"Minor":return Object(L.jsxs)(L.Fragment,{children:[Object(L.jsx)(te.a,{className:a.alertHeaderIcon}),Object(L.jsx)("span",{children:"Minor"})]});case"Moderate":return Object(L.jsxs)(L.Fragment,{children:[Object(L.jsx)(te.a,{className:a.alertHeaderIcon,color:"primary"}),Object(L.jsx)("span",{children:"Moderate"})]});case"Severe":return Object(L.jsxs)(L.Fragment,{children:[Object(L.jsx)(te.a,{className:a.alertHeaderIcon,color:"secondary"}),Object(L.jsx)("span",{children:"Severe"})]});case"Extreme":return Object(L.jsxs)(L.Fragment,{children:[Object(L.jsx)(te.a,{className:a.alertHeaderIcon,color:"error"}),Object(L.jsx)("span",{children:"Extreme"})]})}}var ie=Object(b.a)((function(e){var t;return{root:{},drawerContainer:{display:"flex"},appBar:(t={display:"none"},Object(u.a)(t,e.breakpoints.down("sm"),{display:"block"}),Object(u.a)(t,"marginBottom",e.spacing(1)),t),drawer:Object(u.a)({flexBasis:208,flexGrow:1,display:"none"},e.breakpoints.up("md"),{display:"inline-block"}),drawerPaper:{width:208},forecast:Object(u.a)({},e.breakpoints.up("md"),{width:"calc(100% - ".concat(208,"px)"),flexShrink:1}),list:{paddingTop:0},listHeader:{backgroundColor:e.palette.primary.dark,color:"white"},toolbar:{position:"relative"},title:{flexGrow:1},progress:{color:"gold"}}}));function oe(){var e=Object(n.useState)(se.initial),t=Object(d.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(se.initial),i=Object(d.a)(c,2),o=i[0],u=i[1],b=Object(n.useState)(se.initial),A=Object(d.a)(b,2),W=A[0],D=A[1],E=Object(n.useState)(se.initial),T=Object(d.a)(E,2),F=T[0],H=T[1],B=Object(n.useState)(se.initial),I=Object(d.a)(B,2),U=I[0],M=I[1],P=[a,o,W,F,U],z=Object(n.useState)([]),R=Object(d.a)(z,2),G=R[0],J=R[1],$=Object(n.useState)([]),K=Object(d.a)($,2),Q=K[0],V=K[1],X=Object(n.useState)(null),Y=Object(d.a)(X,2),Z=Y[0],ee=Y[1],te=Object(n.useState)(null),ae=Object(d.a)(te,2),re=ae[0],ce=ae[1],oe=Object(n.useState)(""),de=Object(d.a)(oe,2),ue=de[0],be=de[1],he=Object(n.useState)(null),pe=Object(d.a)(he,2),Oe=pe[0],xe=pe[1],fe=Object(n.useState)(null),ve=Object(d.a)(fe,2),me=ve[0],ge=ve[1],we=Object(n.useState)(null),ye=Object(d.a)(we,2),ke=ye[0],Se=ye[1],Ne=Object(n.useState)(null),Ae=Object(d.a)(Ne,2),Ce=Ae[0],We=Ae[1],De=Object(n.useState)(null),Ee=Object(d.a)(De,2),Te=Ee[0],Fe=Ee[1],He=Object(n.useState)(null),Be=Object(d.a)(He,2),Ie=Be[0],Ue=Be[1],Me=Object(n.useState)(!1),Pe=Object(d.a)(Me,2),ze=Pe[0],Le=Pe[1],Re=ie();Object(n.useEffect)((function(){if(navigator.geolocation){r(se.loading),navigator.geolocation.getCurrentPosition((function(e){ee(e.coords.latitude),ce(e.coords.longitude),r(se.loaded)}),(function(e){console.error(e),J((function(e){return[].concat(Object(j.a)(e),["Could not obtain device position."])})),ge([]),r(se.error)}))}else J((function(e){return[].concat(Object(j.a)(e),["Geolocation not supported in this browser."])})),r(se.error)}),[]),Object(n.useEffect)((function(){function e(){return(e=Object(l.a)(s.a.mark((function e(){var t,a,n,r,c;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat("https://api.weather.gov","/points/").concat(Z,",").concat(re)).then((function(e){return e.json()}));case 3:r=e.sent,be(le(null===r||void 0===r||null===(t=r.properties)||void 0===t?void 0:t.relativeLocation)),xe(null===r||void 0===r||null===(a=r.properties)||void 0===a?void 0:a.forecast),Se(null===r||void 0===r||null===(n=r.properties)||void 0===n?void 0:n.forecastHourly),c="".concat(Z,",").concat(re),Fe("".concat("https://api.weather.gov","/alerts/active?status=actual&message_type=alert,update,cancel&point=").concat(encodeURIComponent(c))),u(se.loaded),e.next=18;break;case 12:e.prev=12,e.t0=e.catch(0),J((function(e){return[].concat(Object(j.a)(e),["Could not obtain NOAA grid point."])})),console.error(e.t0),ge([]),u(se.error);case 18:case"end":return e.stop()}}),e,null,[[0,12]])})))).apply(this,arguments)}"number"===typeof Z&&"number"===typeof re&&(u(se.loading),function(){e.apply(this,arguments)}())}),[Z,re]),Object(n.useEffect)((function(){function e(){return(e=Object(l.a)(s.a.mark((function e(){var t,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(Oe).then((function(e){return e.json()}));case 3:a=e.sent,ge(null===a||void 0===a||null===(t=a.properties)||void 0===t?void 0:t.periods),D(se.loaded),e.next=14;break;case 8:e.prev=8,e.t0=e.catch(0),J((function(e){return[].concat(Object(j.a)(e),["Could not obtain NOAA forecast."])})),console.error(e.t0),ge([]),D(se.error);case 14:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}Oe&&(D(se.loading),function(){e.apply(this,arguments)}())}),[Oe]),Object(n.useEffect)((function(){function e(){return(e=Object(l.a)(s.a.mark((function e(){var t,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(ke).then((function(e){return e.json()}));case 3:a=e.sent,We(null===a||void 0===a||null===(t=a.properties)||void 0===t?void 0:t.periods),H(se.loaded),e.next=13;break;case 8:e.prev=8,e.t0=e.catch(0),V((function(e){return[].concat(Object(j.a)(e),["Could not obtain NOAA hourly forecast."])})),console.error(e.t0),H(se.error);case 13:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}ke&&(H(se.loading),function(){e.apply(this,arguments)}())}),[ke]),Object(n.useEffect)((function(){function e(){return(e=Object(l.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(Te).then((function(e){return e.json()}));case 3:t=e.sent,Ue(null===t||void 0===t?void 0:t.features),M(se.loaded),e.next=13;break;case 8:e.prev=8,e.t0=e.catch(0),V((function(e){return[].concat(Object(j.a)(e),["Could not obtain NOAA weather alerts."])})),console.error(e.t0),M(se.error);case 13:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}Te&&(M(se.loading),function(){e.apply(this,arguments)}())}),[Te]);var Ge=P.every((function(e){return e===se.loaded})),Je=Array.isArray(Ie)?Ie.length:0,_e=0===G.length&&0===Q.length&&!Ge;return Object(L.jsxs)("div",{className:Re.root,children:[Object(L.jsx)(O.a,{position:"static",className:Re.appBar,children:Object(L.jsxs)(x.a,{className:Re.toolbar,children:[Object(L.jsxs)(f.a,{variant:"h6",noWrap:!0,className:Re.title,children:[Object(L.jsx)("span",{role:"img","aria-label":"Skyanchor mobile logo",children:"\ud83c\udf29\ufe0f"}),Object(L.jsx)("span",{"aria-label":"location",children:ue})]}),_e&&Object(L.jsx)(S.a,{className:Re.progress}),Object(L.jsx)(v.a,{edge:"end",className:Re.menuButton,disabled:0===Je,color:"inherit","aria-label":"alerts",onClick:function(){return Le(!0)},children:Je>0?Object(L.jsx)(m.a,{badgeContent:Je,color:"error",children:Object(L.jsx)(C.a,{})}):Object(L.jsx)(C.a,{})})]})}),Object(L.jsxs)("div",{className:Re.drawerContainer,children:[Object(L.jsx)(p.a,{variant:"permanent",anchor:"left",className:Re.drawer,classes:{paper:Re.drawerPaper},children:Object(L.jsxs)(g.a,{component:"nav","aria-label":"weather location and options",className:Re.list,children:[Object(L.jsxs)(w.a,{className:Re.listHeader,children:[Object(L.jsxs)(y.a,{children:[Object(L.jsx)("span",{role:"img","aria-label":"Skyanchor desktop logo",children:"\ud83c\udf29\ufe0f"}),_e&&Object(L.jsx)(S.a,{size:20,className:Re.progress})]}),Object(L.jsx)(k.a,{primary:Object(L.jsx)("span",{"aria-label":"location",children:ue})})]}),Object(L.jsxs)(w.a,{button:!0,disabled:0===Je,onClick:function(){return Le(!0)},children:[Object(L.jsx)(y.a,{children:Je>0?Object(L.jsx)(m.a,{badgeContent:Je,color:"error",children:Object(L.jsx)(C.a,{})}):Object(L.jsx)(C.a,{})}),Object(L.jsx)(k.a,{primary:"Alerts"})]})]})}),Object(L.jsxs)(h.a,{container:!0,direction:"column",className:Re.forecast,children:[G.length>0&&Object(L.jsx)(h.a,{item:!0,xs:12,children:G.map((function(e,t){return Object(L.jsx)(N.a,{variant:"filled",severity:"error",children:e},t)}))}),Q.length>0&&Object(L.jsx)(h.a,{item:!0,xs:12,children:Q.map((function(e,t){return Object(L.jsx)(N.a,{variant:"filled",severity:"warning",children:e},t)}))}),Array.isArray(me)?me.map((function(e){return Object(L.jsx)(h.a,{item:!0,xs:12,children:Object(L.jsx)(_,{period:e,hourlyData:je(Ce,e)})},"".concat(e.number,"_").concat(e.name))})):Object(L.jsxs)(L.Fragment,{children:[Object(L.jsx)(h.a,{item:!0,xs:12,children:Object(L.jsx)(q,{})}),Object(L.jsx)(h.a,{item:!0,xs:12,children:Object(L.jsx)(q,{})}),Object(L.jsx)(h.a,{item:!0,xs:12,children:Object(L.jsx)(q,{})}),Object(L.jsx)(h.a,{item:!0,xs:12,children:Object(L.jsx)(q,{})}),Object(L.jsx)(h.a,{item:!0,xs:12,children:Object(L.jsx)(q,{})}),Object(L.jsx)(h.a,{item:!0,xs:12,children:Object(L.jsx)(q,{})})]})]})]}),Object(L.jsx)(ne,{data:Ie,open:ze,onClose:function(){return Le(!1)}})]})}var se={initial:"initial",loading:"loading",error:"error",loaded:"loaded"};function le(e){if(null===e||void 0===e?void 0:e.properties){var t=null===e||void 0===e?void 0:e.properties,a=t.city,n=t.state;if("string"===typeof a&&"string"===typeof n)return"".concat(a,", ").concat(n)}return""}function je(e,t){if(!Array.isArray(e)||!t)return[];var a=new Date(t.startTime),n=new Date(t.endTime);return e.filter((function(e){var t=new Date(e.startTime),r=new Date(e.endTime);return t>=a&&r<=n}))}var de=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function ue(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}i.a.render(Object(L.jsx)(r.a.StrictMode,{children:Object(L.jsx)(oe,{})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/skyanchor",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/skyanchor","/service-worker.js");de?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):ue(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):ue(t,e)}))}}()}},[[91,1,2]]]);
//# sourceMappingURL=main.4999912d.chunk.js.map