!function(){"use strict";var e,t={},n={};function a(e){var r=n[e];if(void 0!==r)return r.exports;var c=n[e]={exports:{}};return t[e].call(c.exports,c,c.exports,a),c.exports}a.m=t,e=[],a.O=function(t,n,r,c){if(!n){var f=1/0;for(i=0;i<e.length;i++){n=e[i][0],r=e[i][1],c=e[i][2];for(var o=!0,d=0;d<n.length;d++)(!1&c||f>=c)&&Object.keys(a.O).every(function(e){return a.O[e](n[d])})?n.splice(d--,1):(o=!1,c<f&&(f=c));if(o){e.splice(i--,1);var u=r();void 0!==u&&(t=u)}}return t}c=c||0;for(var i=e.length;i>0&&e[i-1][2]>c;i--)e[i]=e[i-1];e[i]=[n,r,c]},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,{a:t}),t},a.d=function(e,t){for(var n in t)a.o(t,n)&&!a.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},a.f={},a.e=function(e){return Promise.all(Object.keys(a.f).reduce(function(t,n){return a.f[n](e,t),t},[]))},a.u=function(e){return(592===e?"common":e)+"-es2015."+{0:"4dbf0adc3ad3add59274",51:"534ef180a8ebeee3650c",53:"687206917de2bf4b6432",59:"9ef1e6e3f043ec73a87e",87:"6c7a1054a5d2679f4079",107:"b1967a4a7e68bb40d771",111:"f3a139a5ebd478ebc5f7",115:"2097382344144bc2b550",133:"a4e945946b1538901f30",135:"b1daccd8a3aab5e7f3bd",155:"cda7efeb386143e74aaf",242:"f3f04cef36b2ef5a6c54",245:"92549377f09266a5439a",250:"e92d67bb3b879d467ca1",266:"00ccd0ef55aabd94e9d6",350:"a321f70c7354577838cd",387:"2ba909d5a25a124b1286",411:"9b133a42150a0fa3a5b8",445:"754a4753e931d4594040",516:"e287c00365024e2ae23d",553:"bf57388f706cedb7d440",561:"c3df9ea15f6e790f1b11",592:"a2f28dde4d84394509cc",609:"3e69dd368855420c51db",612:"4fa690dbb3ba1761b0ef",629:"71cf6e733b621b6ba795",635:"c9a41c14b46cfe3d9691",702:"d94290ef57e5fc71dea7",709:"008d3aefa59cdbb8e695",736:"eeaf221ad3f36eab30eb",739:"90a166744c4c9f4d5278",741:"87b0d3d0631fa05150ca",766:"4ca5601267d24916885b",779:"5ca0ec320de063a9bcaf",813:"b6643a37326aa13c0c29",884:"12a48f2899bef17e3ba7",892:"588020c98373d79fc10a",905:"d80ee0246197c9c90497",958:"e3c75bb1f623ada4ae14",967:"0260af1464572924fb8d",984:"238ba655dd9b655b1833"}[e]+".js"},a.miniCssF=function(e){return"styles.bfdd83c5857d48c7442f.css"},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){var e={},t="ng-vcl:";a.l=function(n,r,c,f){if(e[n])e[n].push(r);else{var o,d;if(void 0!==c)for(var u=document.getElementsByTagName("script"),i=0;i<u.length;i++){var b=u[i];if(b.getAttribute("src")==n||b.getAttribute("data-webpack")==t+c){o=b;break}}o||(d=!0,(o=document.createElement("script")).charset="utf-8",o.timeout=120,a.nc&&o.setAttribute("nonce",a.nc),o.setAttribute("data-webpack",t+c),o.src=a.tu(n)),e[n]=[r];var l=function(t,a){o.onerror=o.onload=null,clearTimeout(s);var r=e[n];if(delete e[n],o.parentNode&&o.parentNode.removeChild(o),r&&r.forEach(function(e){return e(a)}),t)return t(a)},s=setTimeout(l.bind(null,void 0,{type:"timeout",target:o}),12e4);o.onerror=l.bind(null,o.onerror),o.onload=l.bind(null,o.onload),d&&document.head.appendChild(o)}}}(),a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},function(){var e;a.tu=function(t){return void 0===e&&(e={createScriptURL:function(e){return e}},"undefined"!=typeof trustedTypes&&trustedTypes.createPolicy&&(e=trustedTypes.createPolicy("angular#bundler",e))),e.createScriptURL(t)}}(),a.p="",function(){var e={666:0};a.f.j=function(t,n){var r=a.o(e,t)?e[t]:void 0;if(0!==r)if(r)n.push(r[2]);else if(666!=t){var c=new Promise(function(n,a){r=e[t]=[n,a]});n.push(r[2]=c);var f=a.p+a.u(t),o=new Error;a.l(f,function(n){if(a.o(e,t)&&(0!==(r=e[t])&&(e[t]=void 0),r)){var c=n&&("load"===n.type?"missing":n.type),f=n&&n.target&&n.target.src;o.message="Loading chunk "+t+" failed.\n("+c+": "+f+")",o.name="ChunkLoadError",o.type=c,o.request=f,r[1](o)}},"chunk-"+t,t)}else e[t]=0},a.O.j=function(t){return 0===e[t]};var t=function(t,n){var r,c,f=n[0],o=n[1],d=n[2],u=0;for(r in o)a.o(o,r)&&(a.m[r]=o[r]);if(d)var i=d(a);for(t&&t(n);u<f.length;u++)a.o(e,c=f[u])&&e[c]&&e[c][0](),e[f[u]]=0;return a.O(i)},n=self.webpackChunkng_vcl=self.webpackChunkng_vcl||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}()}();