(window["webpackJsonpvoice-recognition-app"]=window["webpackJsonpvoice-recognition-app"]||[]).push([[0],{10:function(e,t,n){e.exports=n(20)},15:function(e,t,n){},20:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(7),c=n.n(r),i=n(1),u=(n(15),n(2)),l=n.n(u),s=n(3),p=n(9),d=n(8),f=n.n(d),g=function(){return window.history.replaceState({},document.title,window.location.pathname)},h=o.a.createContext(),m=function(){return Object(a.useContext)(h)},v=function(){var e=m(),t=e.isAuthenticated,n=e.loginWithRedirect,a=e.logout;return o.a.createElement("div",null,!t&&o.a.createElement("button",{onClick:function(){return n({})}},"Log in"),t&&o.a.createElement("button",{onClick:function(){return a()}},"Log out"))};var b=function(){var e=m().loading,t=o.a.useState(""),n=Object(i.a)(t,2),a=n[0],r=n[1],c=o.a.useState("Start Speaking"),u=Object(i.a)(c,2),l=u[0],s=u[1],p=o.a.useState(null),d=Object(i.a)(p,2),f=d[0],g=d[1],h=o.a.useState(!0),b=Object(i.a)(h,2),w=b[0],k=b[1];o.a.useEffect(function(){g(function(){for(var e,t=[],n=0;n<localStorage.length;n++)"note-"===(e=localStorage.key(n)).substring(0,5)&&t.push({date:e,content:localStorage.getItem(localStorage.key(n))});return t})},[w]);try{var S=new(window.SpeechRecognition||window.webkitSpeechRecognition);S.lang="en-US"}catch(O){console.error(O)}S.onstart=function(){s("Voice recognition activated. Try speaking into the microphone.")},S.onspeechend=function(){s("You were quiet for a while so voice recognition turned itself off. Click again to start")},S.onerror=function(e){"no-speech"===e.error&&s("No speech was detected. Try again.")};var y="";return S.onresult=function(e){var t=e.resultIndex,n=e.results[t][0].transcript;r(y+=n)},e?o.a.createElement("div",null,"Loading..."):o.a.createElement("div",{className:"App"},o.a.createElement("header",null,o.a.createElement(v,null)),o.a.createElement("button",{className:"App__button",onClick:function(){S.start()}},l),o.a.createElement("div",{className:"App__auto-typing"},a),o.a.createElement("button",{className:"App__button",onClick:function(){var e,t;S.stop(),a?(e=(new Date).toLocaleString(),t=a,localStorage.setItem("note-"+e,t),k(!w)):alert("Empty Content")}},"Save Notes"),o.a.createElement("div",{className:"App__notes"},f&&f.map(function(e,t){return o.a.createElement("div",{className:"App__notes_content",key:t},t+1,") ",e.content,o.a.createElement("button",{className:"App__notes_content_button",key:t,type:"button",onClick:function(t){var n;(n=e.date)&&(console.log(n),localStorage.removeItem(n),k(!w))}},"delete"))})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var w=n(5);c.a.render(o.a.createElement(function(e){var t=e.children,n=e.onRedirectCallback,r=void 0===n?g:n,c=Object(p.a)(e,["children","onRedirectCallback"]),u=Object(a.useState)(),d=Object(i.a)(u,2),m=d[0],v=d[1],b=Object(a.useState)(),w=Object(i.a)(b,2),k=w[0],S=w[1],y=Object(a.useState)(),O=Object(i.a)(y,2),E=O[0],j=O[1],x=Object(a.useState)(!0),C=Object(i.a)(x,2),_=C[0],A=C[1],R=Object(a.useState)(!1),N=Object(i.a)(R,2),I=N[0],W=N[1];Object(a.useEffect)(function(){(function(){var e=Object(s.a)(l.a.mark(function e(){var t,n,a,o,i;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f()(c);case 2:if(t=e.sent,j(t),!window.location.search.includes("code=")){e.next=10;break}return e.next=7,t.handleRedirectCallback();case 7:n=e.sent,a=n.appState,r(a);case 10:return e.next=12,t.isAuthenticated();case 12:if(o=e.sent,v(o),!o){e.next=19;break}return e.next=17,t.getUser();case 17:i=e.sent,S(i);case 19:A(!1);case 20:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}})()()},[]);var T=function(){var e=Object(s.a)(l.a.mark(function e(){var t,n,a=arguments;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.length>0&&void 0!==a[0]?a[0]:{},W(!0),e.prev=2,e.next=5,E.loginWithPopup(t);case 5:e.next=10;break;case 7:e.prev=7,e.t0=e.catch(2),console.error(e.t0);case 10:return e.prev=10,W(!1),e.finish(10);case 13:return e.next=15,E.getUser();case 15:n=e.sent,S(n),v(!0);case 18:case"end":return e.stop()}},e,null,[[2,7,10,13]])}));return function(){return e.apply(this,arguments)}}(),U=function(){var e=Object(s.a)(l.a.mark(function e(){var t;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return A(!0),e.next=3,E.handleRedirectCallback();case 3:return e.next=5,E.getUser();case 5:t=e.sent,A(!1),v(!0),S(t);case 9:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}();return o.a.createElement(h.Provider,{value:{isAuthenticated:m,user:k,loading:_,popupOpen:I,loginWithPopup:T,handleRedirectCallback:U,getIdTokenClaims:function(){return E.getIdTokenClaims.apply(E,arguments)},loginWithRedirect:function(){return E.loginWithRedirect.apply(E,arguments)},getTokenSilently:function(){return E.getTokenSilently.apply(E,arguments)},getTokenWithPopup:function(){return E.getTokenWithPopup.apply(E,arguments)},logout:function(){return E.logout.apply(E,arguments)}}},t)},{domain:w.domain,client_id:w.clientId,redirect_uri:window.location.origin,onRedirectCallback:function(e){window.history.replaceState({},document.title,e&&e.targetUrl?e.targetUrl:window.location.pathname)}},o.a.createElement(b,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},5:function(e){e.exports=JSON.parse('{"domain":"dev-vaishnav.auth0.com","clientId":"SASCXKX2ZXh3afz6yKLEi5cFOZEQn2Vj"}')}},[[10,1,2]]]);
//# sourceMappingURL=main.2f2ba513.chunk.js.map