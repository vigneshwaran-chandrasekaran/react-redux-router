(window["webpackJsonpreact-redux-router"]=window["webpackJsonpreact-redux-router"]||[]).push([[0],{13:function(e,t,n){e.exports=n(24)},24:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),a=n(5),c=n.n(a),l=(n(18),n(2)),i=function(){return{type:"INCREMENT"}},u=function(e){return{type:"INCREMENT_BY_VALUE",payload:e}},s=function(){return{type:"DECREMENT"}},d=function(e){return{type:"DECREMENT_BY_VALUE",payload:e}},p=function(e){return function(t){console.log("start dispatch"),t({type:"IS_LOADING"}),setTimeout((function(){console.log("stop dispatch"),t({type:"IS_LOADING"}),t(d(e))}),3e3)}},E=function(){return function(e){e({type:"IS_LOADING"}),setTimeout((function(){fetch("https://jsonplaceholder.typicode.com/posts?_limit=5").then((function(e){return e.json()})).then((function(t){e({type:"LOADED",payload:t}),console.log({jsonData:t})})).catch((function(e){console.log({err:e})})).finally((function(){e({type:"IS_LOADING"})}))}),1e3)}};var f=function(){var e=Object(l.c)((function(e){return e.counter})),t=Object(l.c)((function(e){return e.isLogged})),n=Object(l.c)((function(e){return e.isLoading})),r=Object(l.c)((function(e){return e.data})),a=Object(l.b)(),c=(Object(l.d)(),r.arr);return console.log(r),console.log({isLoading:n}),console.log({counter:e}),console.log({isLogged:t}),o.a.createElement("div",{className:"App"},o.a.createElement("h1",{className:"text-center"},"React and redux ",e),o.a.createElement("div",null),o.a.createElement("button",{className:"btn btn-primary",onClick:function(){console.log("onClickHandle"),a(i())}},"increment ",e),o.a.createElement("button",{className:"btn btn-danger",onClick:function(){return a(s())}},"decrement ",e),o.a.createElement("button",{className:"btn btn-primary",onClick:function(){return a(u(5))}},"increment by value ",e),o.a.createElement("button",{className:"btn btn-info",onClick:function(){return a(p(5))}},"decrement by value async ",e),o.a.createElement("button",{className:"btn btn-warning",onClick:function(){return a(d(5))}},"decrement by value ",e),n&&o.a.createElement("p",null,"Its loading"),o.a.createElement("div",null,o.a.createElement("button",{className:"btn btn-info",onClick:function(){return a(E())}},"Load api data")),o.a.createElement("div",null,o.a.createElement("p",null,"one"),o.a.createElement((function(e){var t=e.arrs;console.log({arrs:t});var n=t.map((function(e){return o.a.createElement("li",{key:e.id},e.title)}));return o.a.createElement("ul",null,n)}),{arrs:c}),o.a.createElement("p",null,"two")))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var b=n(3),m=n(11),g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:10,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"INCREMENT":return e+1;case"INCREMENT_BY_VALUE":return e+t.payload;case"DECREMENT":return e-1;case"DECREMENT_BY_VALUE":return e-t.payload;default:return e}},y=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SIGN_IN":return!e;default:return e}},O=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"IS_LOADING":return!e;default:return e}},v=n(12);function h(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function N(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?h(n,!0).forEach((function(t){Object(v.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):h(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var w={arr:[],users:[],books:[],country:[]},_=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOADED":return console.log("redux jsonData",t.payload),N({},e,{arr:t.payload});default:return e}},j=Object(b.c)({counter:g,isLogged:y,isLoading:O,data:_}),D=Object(b.e)(j,Object(b.d)(Object(b.a)(m.a),window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()));console.log({store:D}),c.a.render(o.a.createElement(l.a,{store:D},o.a.createElement(f,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[13,1,2]]]);
//# sourceMappingURL=main.24c2439c.chunk.js.map