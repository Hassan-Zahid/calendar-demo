(this.webpackJsonpcalendar=this.webpackJsonpcalendar||[]).push([[0],{31:function(e,t,a){},33:function(e,t,a){},37:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(8),s=a.n(l),o=(a(31),a(5)),r=a(21),i=a(14),u=a(4),d=a(6),b=(a(32),a(50)),j=a(51),h=(a(33),a(2));function g(){return Math.round(20*Math.random())-10}function O(){var e=50+g(),t=50+g();return{top:"".concat(e,"%"),left:"".concat(t,"%"),transform:"translate(-".concat(e,"%, -").concat(t,"%)")}}var m=Object(b.a)((function(e){return{paper:{position:"absolute",width:"400px",height:"500px",backgroundColor:e.palette.background.paper,padding:e.spacing(2,4,3)}}}));Object(d.setOptions)({theme:"ios",themeVariant:"light"});var f=new Date,p=[{id:1,start:new Date(f.getFullYear(),f.getMonth(),8,13),end:new Date(f.getFullYear(),f.getMonth(),8,13,30),title:"Lunch @ Butcher's",color:"#26c57d"},{id:2,start:new Date(f.getFullYear(),f.getMonth(),f.getDate(),15),end:new Date(f.getFullYear(),f.getMonth(),f.getDate(),16),title:"General orientation",color:"#fd966a"},{id:3,start:new Date(f.getFullYear(),f.getMonth(),f.getDate()-1,18),end:new Date(f.getFullYear(),f.getMonth(),f.getDate()-1,22),title:"Dexter BD",color:"#37bbe4"},{id:4,start:new Date(f.getFullYear(),f.getMonth(),f.getDate()+1,10,30),end:new Date(f.getFullYear(),f.getMonth(),f.getDate()+1,11,30),title:"Stakeholder mtg.",color:"#d00f0f"}],v={schedule:{type:"week"}};var k=function(){var e,t=c.a.useState("week"),a=Object(u.a)(t,2),n=a[0],l=a[1],s=c.a.useState([]),b=Object(u.a)(s,2),g=(b[0],b[1]),k=c.a.useState(p),C=Object(u.a)(k,2),x=C[0],S=C[1],w=c.a.useState(null),y=Object(u.a)(w,2),D=y[0],M=y[1],F=c.a.useState(!1),E=Object(u.a)(F,2),N=E[0],T=E[1],Y=c.a.useState(null),I=Object(u.a)(Y,2),U=(I[0],I[1]),B=c.a.useState(null),J=Object(u.a)(B,2),L=(J[0],J[1],c.a.useState(null)),P=Object(u.a)(L,2),G=(P[0],P[1],c.a.useState("")),V=Object(u.a)(G,2),z=V[0],A=V[1],H=c.a.useState(""),R=Object(u.a)(H,2),W=R[0],q=R[1],K=c.a.useState(!0),Q=Object(u.a)(K,2),X=Q[0],Z=Q[1],$=c.a.useState([]),_=Object(u.a)($,2),ee=_[0],te=_[1],ae=c.a.useState("busy"),ne=Object(u.a)(ae,2),ce=ne[0],le=ne[1],se=c.a.useState(f),oe=Object(u.a)(se,2),re=oe[0],ie=oe[1],ue=m(),de=c.a.useState(O),be=Object(u.a)(de,1)[0],je=c.a.useState(!1),he=Object(u.a)(je,2),ge=he[0],Oe=he[1],me=function(){Oe(!0)},fe=Object(h.jsxs)("div",{style:be,className:ue.paper,children:[Object(h.jsx)("h2",{id:"simple-modal-title",children:"Text in a modal"}),Object(h.jsx)("p",{id:"simple-modal-description",children:"Material UI Modal."})]}),pe=c.a.useCallback((function(){var e={id:D.id,title:z,description:W,start:ee[0],end:ee[1],allDay:X,status:ce,color:D.color};if(N){var t=x.findIndex((function(e){return e.id===D.id})),a=Object(i.a)(x);a.splice(t,1,e),S(a)}else S([].concat(Object(i.a)(x),[e]));ie(ee[0]),Oe(!1)}),[N,x,X,ee,W,ce,z,D]),ve=c.a.useCallback((function(e){S(x.filter((function(t){return t.id!==e.id}))),setTimeout((function(){Object(d.snackbar)({button:{action:function(){S((function(t){return[].concat(Object(i.a)(t),[e])}))},text:"Undo"},message:"Event deleted"})}))}),[x]),ke=c.a.useCallback((function(e){A(e.title),q(e.description),te([e.start,e.end]),Z(e.allDay||!1),le(e.status||"busy")}),[]),Ce=(c.a.useCallback((function(e){A(e.target.value)}),[]),c.a.useCallback((function(e){q(e.target.value)}),[]),c.a.useCallback((function(e){Z(e.target.checked)}),[]),c.a.useCallback((function(e){te(e.value)}),[]),c.a.useCallback((function(e){le(e.target.value)}),[]),c.a.useCallback((function(){ve(D),Oe(!1)}),[ve,D]),c.a.useCallback((function(e){ie(e.date)}),[])),xe=c.a.useCallback((function(e){T(!0),M(Object(r.a)({},e.event)),ke(e.event),U(e.domEvent.target),me()}),[ke]),Se=c.a.useCallback((function(e){T(!1),M(e.event),ke(e.event),U(e.target),me()}),[ke]),we=c.a.useCallback((function(e){ve(e.event)}),[ve]),ye=c.a.useCallback((function(e){}),[]);c.a.useMemo((function(){return X?["date"]:["datetime"]}),[X]),c.a.useMemo((function(){return X?{medium:{controls:["calendar"],touchUi:!1}}:{medium:{controls:["calendar","time"],touchUi:!1}}}),[X]),c.a.useMemo((function(){return N?"Edit event":"New Event"}),[N]),c.a.useMemo((function(){return N?["cancel",{handler:function(){pe()},keyCode:"enter",text:"Save",cssClass:"mbsc-popup-button-primary"}]:["cancel",{handler:function(){pe()},keyCode:"enter",text:"Add",cssClass:"mbsc-popup-button-primary"}]}),[N,pe]),c.a.useCallback((function(){N||S(Object(i.a)(x)),Oe(!1)}),[N,x]),c.a.useEffect((function(){Object(d.getJson)("https://trial.mobiscroll.com/events/?vers=5",(function(e){g(e)}),"jsonp")}),[]),c.a.useEffect((function(){Object(d.getJson)("https://trial.mobiscroll.com//workday-events/?vers=5",(function(e){g(e)}),"jsonp")}),[]);var De=c.a.useState({calendar:{labels:!0}}),Me=Object(u.a)(De,2),Fe=Me[0],Ee=Me[1],Ne=function(e){var t;switch(e.target.value){case"month":t={calendar:{labels:!0}};break;case"week":t={schedule:{type:"week"}};break;case"day":t={schedule:{type:"day"}}}l(e.target.value),Ee(t)};return Object(h.jsxs)("div",{className:"md-switching-view-cont",children:[Object(h.jsx)(d.Eventcalendar,(e={theme:"ios",themeVariant:"light",dragToMove:!0,dragToResize:!0,data:x,view:n},Object(o.a)(e,"view",v),Object(o.a)(e,"clickToCreate","double"),Object(o.a)(e,"dragToCreate",!0),Object(o.a)(e,"selectedDate",re),Object(o.a)(e,"onSelectedDateChange",Ce),Object(o.a)(e,"onEventClick",xe),Object(o.a)(e,"onEventCreated",Se),Object(o.a)(e,"onEventDeleted",we),Object(o.a)(e,"onEventUpdated",ye),Object(o.a)(e,"renderHeader",(function(){return Object(h.jsxs)(c.a.Fragment,{children:[Object(h.jsx)(d.CalendarNav,{className:"cal-header-nav"}),Object(h.jsx)("div",{className:"cal-header-picker",children:Object(h.jsxs)(d.SegmentedGroup,{value:n,onChange:Ne,children:[Object(h.jsx)(d.SegmentedItem,{value:"month",style:"height:50px",children:"Month"}),Object(h.jsx)(d.SegmentedItem,{value:"week",style:"height:50px",children:"Week"}),Object(h.jsx)(d.SegmentedItem,{value:"day",style:"height:50px",children:"Day"})]})}),Object(h.jsx)(d.CalendarPrev,{className:"cal-header-prev"}),Object(h.jsx)(d.CalendarToday,{className:"cal-header-today"}),Object(h.jsx)(d.CalendarNext,{className:"cal-header-next"})]})})),Object(o.a)(e,"height",750),Object(o.a)(e,"view",Fe),e)),Object(h.jsx)(j.a,{open:ge,onClose:function(){Oe(!1)},"aria-labelledby":"simple-modal-title","aria-describedby":"simple-modal-description",children:fe})]})},C=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,53)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,l=t.getLCP,s=t.getTTFB;a(e),n(e),c(e),l(e),s(e)}))};s.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(k,{})}),document.getElementById("root")),C()}},[[37,1,2]]]);
//# sourceMappingURL=main.1d575fc0.chunk.js.map