(this["webpackJsonpLAI-tic-tac-toe"]=this["webpackJsonpLAI-tic-tac-toe"]||[]).push([[0],{19:function(e,t,n){},20:function(e,t,n){},30:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n.n(c),a=n(11),s=n.n(a),i=(n(19),n(20),n(14)),l=n(3),u=n(1),o=function(e){var t=e.value,n=e.onClick,c=e.taken;return Object(u.jsx)("div",{className:"Square ".concat("X"===t?"xNext":"oNext"," ").concat(c?"":"free"),onClick:n,children:Object(u.jsx)("p",{className:"value",children:t})})},j=function(e){for(var t=0;t<e.length;t++)if(null===e[t])return!1;return!0},b=function e(t,n,c){var r="X"===c?"O":"X";if(j(t))return{square:-1,score:0};for(var a={square:-1,score:n?-1e3:1e3},s=0;s<t.length;s++)if(!t[s]){t[s]=n?c:r;var i=e(t,!n,c).score;t[s]=null,n?i>a.score&&(a.score=i,a.square=s):i<a.score&&(a.score=i,a.square=s)}return a},O=function(e,t){return b(e,!0,t).square},f=["X","O"],d=function(){return f[Math.floor(Math.random()*f.length)]},h=function(){var e=Object(c.useState)(Array(9).fill(null)),t=Object(l.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)(d()),s=Object(l.a)(a,2),b=s[0],f=s[1],h=Object(c.useState)("X"),x=Object(l.a)(h,2),v=x[0],m=x[1],p=function(e){for(var t=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],n=0;n<t.length;n++){var c=Object(l.a)(t[n],3),r=c[0],a=c[1],s=c[2];if(e[r]&&e[r]===e[a]&&e[r]===e[s])return e[r]}return j(e)?"Draw":null}(n),k=Object(c.useCallback)((function(e){var t=Object(i.a)(n);p||t[e]||(t[e]=v,r(t),m((function(e){return"X"===e?"O":"X"})))}),[n,v,p]);return Object(c.useEffect)((function(){if(v!==b){var e=O(n,b),t=Math.floor(601*Math.random()+400),c=setTimeout((function(){k(e)}),t);return function(){clearTimeout(c)}}}),[v,b,n,k]),Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)("div",{className:"playerContainer",children:[Object(u.jsx)("span",{children:"You're player is"})," ",Object(u.jsx)(o,{value:b,taken:!0})]}),p?Object(u.jsx)("div",{className:"playerContainer",children:"Draw"===p?Object(u.jsx)("span",{children:"It's a Draw"}):Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("span",{children:"Winner is"})," ",Object(u.jsx)(o,{value:p,taken:!0})]})}):Object(u.jsxs)("div",{className:"playerContainer",children:[Object(u.jsx)("span",{children:"It's"})," ",Object(u.jsx)(o,{value:v,taken:!0}),Object(u.jsx)("span",{children:"turn!"})]}),Object(u.jsx)("div",{className:"Board",children:n.map((function(e,t){return Object(u.jsx)(o,{value:e,onClick:function(){v===b&&k(t)},taken:null!=e},t)}))}),Object(u.jsx)("div",{className:"resetButton",onClick:function(){r(Array(9).fill(null)),f(d())},children:"RESET GAME"})]})};var x=function(){return Object(u.jsx)("div",{className:"App",children:Object(u.jsx)(h,{})})},v=n(13);s.a.render(Object(u.jsx)(r.a.StrictMode,{children:Object(u.jsx)(v.a,{basename:"/LAI-tic-tac-toe",children:Object(u.jsx)(x,{})})}),document.getElementById("root"))}},[[30,1,2]]]);
//# sourceMappingURL=main.ad39c739.chunk.js.map