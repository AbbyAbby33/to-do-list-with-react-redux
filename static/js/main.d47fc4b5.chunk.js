(this["webpackJsonpto-do-list-with-react-redux"]=this["webpackJsonpto-do-list-with-react-redux"]||[]).push([[0],{27:function(e,t,n){},28:function(e,t,n){},37:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),r=n(12),i=n.n(r),o=(n(27),n(28),n(2)),s=n(11),d=n(17),l=n(1),u=Object(c.lazy)((function(){return n.e(3).then(n.bind(null,38))})),j=Object(c.lazy)((function(){return n.e(4).then(n.bind(null,39))}));var b=function(){return Object(l.jsxs)("div",{className:"Tdl",children:[Object(l.jsx)("video",{autoPlay:!0,muted:!0,loop:!0,className:"Tdl-video",children:Object(l.jsx)("source",{src:"/to-do-list-with-react-redux/videos/sea-1.mp4",type:"video/mp4"})}),Object(l.jsxs)("div",{className:"Tdl-content",children:[Object(l.jsx)("div",{className:"Tdl-page",children:Object(l.jsx)(c.Suspense,{fallback:Object(l.jsx)("div",{children:"loading"}),children:Object(l.jsxs)(o.d,{children:[Object(l.jsx)(o.b,{path:"/list-style",component:j}),Object(l.jsx)(o.b,{path:"/calendar-style",component:u}),Object(l.jsx)(o.a,{to:"/list-style"})]})})}),Object(l.jsxs)("div",{className:"Tdl-menu",children:[Object(l.jsx)(s.b,{to:"/list-style",children:Object(l.jsx)("div",{className:"Tdl-menu-button",children:Object(l.jsx)(d.b,{})})}),Object(l.jsx)(s.b,{to:"/calendar-style",children:Object(l.jsx)("div",{className:"Tdl-menu-button",children:Object(l.jsx)(d.a,{})})})]})]})]})},m=n(7),h=n(16),v=n.n(h),O=n(21);function f(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return new Promise((function(t){return setTimeout((function(){return t({data:e})}),500)}))}var x=Object(m.b)("counter/fetchCount",function(){var e=Object(O.a)(v.a.mark((function e(t){var n;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f(t);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),p=Object(m.c)({name:"counter",initialState:{value:0,status:"idle"},reducers:{increment:function(e){e.value+=1},decrement:function(e){e.value-=1},incrementByAmount:function(e,t){e.value+=t.payload}},extraReducers:function(e){e.addCase(x.pending,(function(e){e.status="loading"})).addCase(x.fulfilled,(function(e,t){e.status="idle",e.value+=t.payload}))}}),y=p.actions,w=(y.increment,y.decrement,y.incrementByAmount,p.reducer),g=Object(m.c)({name:"todolist",initialState:{value:[{id:"0001",name:"\u8cb7\u83dc",done:!1},{id:"0002",name:"\u5207\u6c34\u679c",done:!1}]},reducers:{add:function(e,t){e.value.push(t.payload)},remove:function(e){}}}),T=g.actions,N=(T.add,T.remove,g.reducer),k=Object(m.a)({reducer:{counter:w,todolist:N}}),B=n(19);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(s.a,{children:Object(l.jsx)(B.a,{store:k,children:Object(l.jsx)(b,{})})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[37,1,2]]]);
//# sourceMappingURL=main.d47fc4b5.chunk.js.map