(this["webpackJsonpspacex-launch-trajectories"]=this["webpackJsonpspacex-launch-trajectories"]||[]).push([[0],{52:function(e,t,n){},54:function(e,t,n){},78:function(e,t,n){"use strict";n.r(t);var c=n(4),a=n(0),s=n.n(a),i=n(7),r=n.n(i),o=(n(52),n(19)),l=(n(53),n(54),n(35)),u=[{key:"dm1",title:"Demo-1",launch:"2019-03-02T07:49:03Z",video:"https://www.youtube.com/watch?v=2ZL0tbOZYhE&feature=youtu.be&t=2931"},{key:"dm2",title:"Demo-2",launch:"2020-05-30T19:22:45Z",video:"https://www.youtube.com/watch?v=xY96v0OIcK4&feature=youtu.be&t=15756"},{key:"crew-1",title:" Crew-1",launch:"2020-11-16T00:27:17Z",video:"https://www.youtube.com/watch?v=E_FIaPBOJgc&feature=youtu.be&t=15150"}],j=function(e){return u.filter((function(t){return t.key===e}))[0]},d=function(e){return Object(c.jsx)(l.a,{title:e.mission.title,onSelect:function(t){e.onChange(j(t))},children:u.map((function(e){return Object(c.jsx)(l.a.Item,{eventKey:e.key,href:"#".concat(e.key),children:e.title},e.key)}))})},h=n(84),b=n(85),O=n(33),p=n(46),x=n(44),m=n.p+"static/media/capsule.eb412449.png",f={lat:28.6082,lng:-80.60415},y=function(){return Object(c.jsx)(x.a,{className:"Capsule",src:m})},w=function(e){var t={lat:f.lat+Math.max(0,2e-4*e.met),lng:f.lng+Math.max(0,1e-4*e.met)};return Object(c.jsx)("div",{style:{height:"100%",width:"100%"},children:Object(c.jsx)(p.a,{options:function(e){return{fullscreenControl:!1,mapTypeId:e.MapTypeId.SATELLITE,mapTypeControlOptions:{style:e.MapTypeControlStyle.HORIZONTAL_BAR,position:e.ControlPosition.TOP_LEFT,mapTypeIds:[e.MapTypeId.ROADMAP,e.MapTypeId.SATELLITE,e.MapTypeId.HYBRID]}}},bootstrapURLKeys:{key:"AIzaSyCvcqPLVfUMZdwaXIJej3oZsRpQbTw_KFs"},defaultCenter:f,defaultZoom:6,children:Object(c.jsx)(y,{lat:t.lat,lng:t.lng})})})},v=n(45),g=n.n(v),T=n(83),I=function(e){return Math.max(0,2*e).toFixed(0)},C=function(e){return Object(c.jsx)(T.a,{striped:!0,border:!0,hover:!0,size:"sm",children:Object(c.jsxs)("tbody",{children:[Object(c.jsxs)("tr",{children:[Object(c.jsx)("td",{children:"Mission Elapsed Time"}),Object(c.jsxs)("td",{children:[(e.met/1e3).toFixed(1),"s"]})]}),Object(c.jsxs)("tr",{children:[Object(c.jsx)("td",{children:"Altitude"}),Object(c.jsxs)("td",{children:[(t=e.met,Math.max(0,3*t).toFixed(0)),"m"]})]}),Object(c.jsxs)("tr",{children:[Object(c.jsx)("td",{children:"Velocity"}),Object(c.jsxs)("td",{children:[I(e.met),"km/h"]})]})]})});var t},S=n(42),M=function(e){return Object(c.jsxs)("div",{children:[Object(c.jsx)(S.a,{onClick:e.start,children:"Start"}),Object(c.jsx)(S.a,{onClick:e.pause,children:"Pause"}),Object(c.jsx)(S.a,{onClick:e.reset,children:"Reset"})]})},k=function(e){return Object(c.jsxs)(O.a,{split:"vertical",allowResize:!0,defaultSize:"50%",children:[Object(c.jsxs)(O.a,{split:"horizonal",allowResize:!0,defaultSize:"50%",children:[Object(c.jsx)(C,{met:e.met}),Object(c.jsx)(M,{start:e.start,pause:e.pause,reset:e.reset})]}),Object(c.jsxs)(O.a,{allowResize:!0,defaultSize:"50%",split:"horizontal",children:[Object(c.jsx)(w,{met:e.met}),Object(c.jsx)(g.a,{url:e.mission.video,width:"100%",height:"100%",onPlay:e.start,onPause:e.pause})]})]})},L=function(e){return Object(c.jsx)(h.a,{bg:"light",children:Object(c.jsxs)(h.a.Collapse,{id:"basic-navbar-nav",children:[Object(c.jsx)(h.a.Brand,{href:"/",children:"SpaceX Launch Trajectories"}),Object(c.jsx)(h.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(c.jsx)(b.a,{className:"mr-auto",children:Object(c.jsx)(b.a.Item,{children:e.title})}),Object(c.jsx)(d,{mission:e.mission,onChange:e.onMissionChange})]})})};var z=function(){var e=window.location.hash.replace("#",""),t=Object(a.useState)(j(e)||j("crew-1")),n=Object(o.a)(t,2),s=n[0],i=n[1],r=function(){var e=Object(a.useState)(null),t=Object(o.a)(e,2),n=t[0],c=t[1],s=Object(a.useState)(null),i=Object(o.a)(s,2),r=i[0],l=i[1],u=Object(a.useState)(!1),j=Object(o.a)(u,2),d=j[0],h=j[1],b=Object(a.useState)(0),O=Object(o.a)(b,2),p=O[0],x=O[1];return Object(a.useEffect)((function(){if(d){var e=setInterval((function(){x(Date.now()-n)}),100);return function(){return clearInterval(e)}}}),[d]),{start:function(){if(null==n&&c(Date.now()),r){var e=Date.now()-r;c(n+e)}h(!0)},pause:function(){l(Date.now()),h(!1)},reset:function(){c(null),l(null),h(!1),x(0)},met:p-1e4}}(),l=r.met,u=r.pause,d=r.reset,h=r.start,b=new Date(s.launch).toLocaleString();return Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)(L,{title:"".concat(s.title,", launched ").concat(b),mission:s,onMissionChange:function(e){i(e),d()}}),Object(c.jsx)(k,{mission:s,met:l,start:h,pause:u,reset:d})]})},D=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,86)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),c(e),a(e),s(e),i(e)}))};r.a.render(Object(c.jsx)(s.a.StrictMode,{children:Object(c.jsx)(z,{})}),document.getElementById("root")),D()}},[[78,1,2]]]);
//# sourceMappingURL=main.b8d9ec62.chunk.js.map