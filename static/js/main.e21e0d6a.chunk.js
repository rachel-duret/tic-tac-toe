(this["webpackJsonptic-tac-toe"]=this["webpackJsonptic-tac-toe"]||[]).push([[0],{11:function(e,c,t){"use strict";t.r(c);var n=t(1),a=t.n(n),o=t(5),s=t.n(o),i=t(2),r=(t(4),t(0));var u=function(e){var c=e.val,t=e.chooseAquare;return Object(r.jsx)("div",{className:"square",onClick:t,children:c})},j=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];var f=function(){var e=Object(n.useState)(["","","","","","","","",""]),c=Object(i.a)(e,2),t=c[0],a=c[1],o=Object(n.useState)("LARA"),s=Object(i.a)(o,2),f=s[0],b=s[1],l=Object(n.useState)({winner:"none",state:"none"}),A=Object(i.a)(l,2),O=A[0],v=A[1];Object(n.useEffect)((function(){x(),d(),b("LARA"==f?"PAPA MAMAN":"LARA")}),[t]),Object(n.useEffect)((function(){"none"!=O.state&&(alert("Game finished! Winning player: ".concat(O.winner)),N())}),[O]);var h=function(e){a(t.map((function(c,t){return t==e&&""==c?f:c})))},d=function(){j.forEach((function(e){var c=t[e[0]];if(""!=c){var n=!0;e.forEach((function(e){t[e]!=c&&(n=!1)})),n&&v({winner:f,state:"GAGN\xc9"})}}))},x=function(){var e=!0;t.forEach((function(c){""==c&&(e=!1)})),e&&v({winner:"PERSONNEL GAGN\xc9",state:"Tie"})},N=function(){a(["","","","","","","","",""]),b("PAPA MAMAN")};return Object(r.jsx)("div",{className:"App",children:Object(r.jsxs)("div",{className:"board",children:[Object(r.jsxs)("div",{className:"row",children:[Object(r.jsx)(u,{val:t[0],chooseAquare:function(){h(0)}}),Object(r.jsx)(u,{val:t[1],chooseAquare:function(){h(1)}}),Object(r.jsx)(u,{val:t[2],chooseAquare:function(){h(2)}})]}),Object(r.jsxs)("div",{className:"row",children:[Object(r.jsx)(u,{val:t[3],chooseAquare:function(){h(3)}}),Object(r.jsx)(u,{val:t[4],chooseAquare:function(){h(4)}}),Object(r.jsx)(u,{val:t[5],chooseAquare:function(){h(5)}})]}),Object(r.jsxs)("div",{className:"row",children:[Object(r.jsx)(u,{val:t[6],chooseAquare:function(){h(6)}}),Object(r.jsx)(u,{val:t[7],chooseAquare:function(){h(7)}}),Object(r.jsx)(u,{val:t[8],chooseAquare:function(){h(8)}})]})]})})};s.a.render(Object(r.jsx)(a.a.StrictMode,{children:Object(r.jsx)(f,{})}),document.getElementById("root"))},4:function(e,c,t){}},[[11,1,2]]]);
//# sourceMappingURL=main.e21e0d6a.chunk.js.map