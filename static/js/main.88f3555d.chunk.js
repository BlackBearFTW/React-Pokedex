(this["webpackJsonpreact-pokedex"]=this["webpackJsonpreact-pokedex"]||[]).push([[0],{33:function(e,t,a){},56:function(e,t,a){"use strict";a.r(t);var n=a(3),c=a.n(n),s=a(23),r=a.n(s),i=a(4),o=a.n(i),l=a(8),u=a(7),d=(a(33),a(24)),j=a(25),p=a(5),v=a(6),m=a(13),b=a.n(m),f=function(){function e(){Object(p.a)(this,e)}return Object(v.a)(e,null,[{key:"capitalize",value:function(e){return e.charAt(0).toUpperCase()+e.slice(1)}},{key:"roundOff",value:function(e){return Math.round(100*(e+Number.EPSILON))/100}}]),e}(),h=function(){function e(){Object(p.a)(this,e)}return Object(v.a)(e,[{key:"getAllNames",value:function(){var e=Object(l.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.get("https://pokeapi.co/api/v2/pokemon-species/?limit=20000");case 2:return t=e.sent,e.abrupt("return",t.data.results.map((function(e){var t={};return t.name=e.name,t.id=e.url.replace("https://pokeapi.co/api/v2/pokemon-species/","").slice(0,-1),t})));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"getPokemonByName",value:function(){var e=Object(l.a)(o.a.mark((function e(t){var a,n,c,s,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.get("https://pokeapi.co/api/v2/pokemon/".concat(t));case 2:a=e.sent,n=[],c=Object(j.a)(a.data.types);try{for(c.s();!(s=c.n()).done;)r=s.value,n.push(f.capitalize(r.type.name))}catch(i){c.e(i)}finally{c.f()}return e.abrupt("return",{id:a.data.id,name:f.capitalize(a.data.name),img:a.data.sprites.other["official-artwork"].front_default,height:f.roundOff(.1*a.data.height),weight:f.roundOff(.1*a.data.weight),stats:[{name:"HP",value:a.data.stats[0].base_stat},{name:"Speed",value:a.data.stats[5].base_stat},{name:"Attack",value:a.data.stats[1].base_stat},{name:"Defense",value:a.data.stats[2].base_stat},{name:"Sp. Attack",value:a.data.stats[3].base_stat},{name:"Sp. Defense",value:a.data.stats[4].base_stat}],types:n});case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}]),e}(),O=a(0);var g=function(e){var t=e.stat,a=e.value;return Object(O.jsxs)("div",{children:[Object(O.jsx)("span",{children:a}),Object(O.jsx)("span",{children:t})]})};var x=function(e){var t=e.data;return Object(O.jsxs)("div",{className:"stats",children:[Object(O.jsxs)("div",{style:{gridColumnStart:"span 2"},children:[Object(O.jsx)("div",{className:"pokemon-name",children:t.name.replaceAll("-","\u2011")}),Object(O.jsxs)("div",{className:"pokemon-id",children:["#",null===t||void 0===t?void 0:t.id.toString().padStart(3,"0")]})]}),t.stats.map((function(e){return Object(O.jsx)(g,{stat:null===e||void 0===e?void 0:e.name,value:null===e||void 0===e?void 0:e.value})})),Object(O.jsxs)("div",{className:"other-stats",style:{gridColumnStart:"span 2"},children:["Height: ",null===t||void 0===t?void 0:t.height,"M Weight: ",null===t||void 0===t?void 0:t.weight,"Kg"]})]})};var k=function(e){var t=e.options,a=e.limit,c=e.placeholder,s=void 0===c?"":c,r=e.callback,i=Object(n.useState)([]),o=Object(u.a)(i,2),l=o[0],d=o[1],j=Object(n.useState)(""),p=Object(u.a)(j,2),v=p[0],m=p[1];return Object(O.jsxs)("div",{className:"AutoSuggest",children:[Object(O.jsx)("input",{type:"text",onChange:function(e){if(m(e.target.value),""===e.target.value)return d([]);var n=t.filter((function(t){return t.name.startsWith(e.target.value.toLowerCase())}));d(n.slice(0,a))},placeholder:s,value:v}),Object(O.jsx)("div",{className:"AutoSuggest-list",children:l.map((function(e){return Object(O.jsx)("div",{className:"AutoSuggest-item",onClick:function(){return t=e.name,a=e.id,m(t),d([]),void r(a);var t,a},children:e.name},e.id)}))})]})};var N=function(e){var t=e.data,a=e.callback;return Object(O.jsx)("div",{children:Object(O.jsxs)("div",{className:"navbar",children:[Object(O.jsx)("img",{src:"".concat("/React-Pokedex","/Pok\xe9dex_logo.png"),className:"logo",alt:""}),Object(O.jsx)(k,{options:t,limit:"10",placeholder:"Search Pok\xe9mon",callback:a})]})})},y=a(26),S=a(27);var w=function(e){var t=e.title,a=e.icon,n=e.onClick;return Object(O.jsx)("button",{className:"btn",onClick:n,title:t,children:Object(O.jsx)(y.a,{icon:S[a]})})},C=new h,A=new d.a;var P=function(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),a=t[0],c=t[1],s=Object(n.useState)(null),r=Object(u.a)(s,2),i=r[0],d=r[1];Object(n.useEffect)((function(){C.getAllNames().then((function(e){return c(e)})),j("bulbasaur")}),[]);var j=function(e){e<1||e>898||C.getPokemonByName(e).then((function(e){var t=!1;null===e.img&&(e.img="./fallback.png",t=!0),p(e.img,t).then(),d(e)}))},p=function(){var e=Object(l.a)(o.a.mark((function e(t){var a,n,c,s,r=arguments;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=r.length>1&&void 0!==r[1]&&r[1],n=document.querySelector(".image-column"),!a){e.next=6;break}c="#4a4a4a",e.next=10;break;case 6:return e.next=8,A.getColorAsync(t);case 8:s=e.sent,c=s.hex;case 10:n.style.backgroundColor=c;case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(O.jsxs)("div",{className:"App",children:[Object(O.jsx)("div",{className:"top-bar",children:Object(O.jsx)("img",{src:"".concat("/React-Pokedex","/Pok\xe9dex_logo.png"),className:"logo",alt:""})}),Object(O.jsxs)("div",{className:"col image-column",children:[Object(O.jsx)("div",{}),Object(O.jsxs)("div",{className:"img-row",children:[Object(O.jsx)(w,{title:"Previous",icon:"faChevronLeft",onClick:function(){return j(i.id-1)}}),Object(O.jsx)("img",{src:null===i||void 0===i?void 0:i.img,className:"pokemon-img",alt:""}),Object(O.jsx)(w,{title:"Next",icon:"faChevronRight",onClick:function(){return j(i.id+1)}})]}),Object(O.jsx)("div",{className:"type-icon-parent",children:i&&i.types.map((function(e){return Object(O.jsx)("img",{src:"".concat("/React-Pokedex","/types/").concat(e,".png"),alt:"",className:"type-icon",title:e})}))})]}),Object(O.jsxs)("div",{className:"col information-column",children:[Object(O.jsx)(N,{data:a,callback:j}),i&&Object(O.jsx)(x,{data:i})]})]})};r.a.render(Object(O.jsx)(c.a.StrictMode,{children:Object(O.jsx)(P,{})}),document.getElementById("root"))}},[[56,1,2]]]);
//# sourceMappingURL=main.88f3555d.chunk.js.map