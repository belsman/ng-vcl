(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{"0bhv":function(l,n,a){"use strict";a.r(n);var s=a("8Y7J");class t{onNavigate(l){console.log("Navigate",l)}}const c={demo:function(){return{label:"Navigation",tabs:{Demo:t,"README.md":{type:"md",content:'<h1 id="vcl-navigation">vcl-navigation</h1>\n<p>The navigation groups navigation items to form a navigation menu.</p>\n<h2 id="usage">Usage</h2>\n<pre class="hljs"><span class="hljs-keyword">import</span> { VCLNavigationModule } <span class="hljs-keyword">from</span> <span class="hljs-string">&apos;@ng-vcl/ng-vcl&apos;</span>;\n\n@NgModule({\n  <span class="hljs-attr">imports</span>: [ VCLNavigationModule ],\n  ...\n})\n<span class="hljs-keyword">export</span> <span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">AppComponent</span> </span>{}</pre>\n<pre class="hljs"><span class="hljs-tag">&lt;<span class="hljs-name">vcl-navigation</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">vcl-navigation-item</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">vcl-navigation-label</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">vcl-icogram</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">vcl-icon</span> <span class="hljs-attr">vclPrepend</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;fas:home&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vcl-icon</span>&gt;</span>\n        Home\n      <span class="hljs-tag">&lt;/<span class="hljs-name">vcl-icogram</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">vcl-navigation-label</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">vcl-navigation-item</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">vcl-navigation-item</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">vcl-navigation-label</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">vcl-icogram</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">vcl-icon</span> <span class="hljs-attr">vclPrepend</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;fas:bicycle&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vcl-icon</span>&gt;</span>\n        Products\n      <span class="hljs-tag">&lt;/<span class="hljs-name">vcl-icogram</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">vcl-navigation-label</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">vcl-navigation</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">vcl-navigation-item</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">vcl-navigation-label</span>&gt;</span>Product 1<span class="hljs-tag">&lt;/<span class="hljs-name">vcl-navigation-label</span>&gt;</span>\n      <span class="hljs-tag">&lt;/<span class="hljs-name">vcl-navigation-item</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">vcl-navigation-item</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">vcl-navigation-label</span>&gt;</span>Product 2<span class="hljs-tag">&lt;/<span class="hljs-name">vcl-navigation-label</span>&gt;</span>\n      <span class="hljs-tag">&lt;/<span class="hljs-name">vcl-navigation-item</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">vcl-navigation</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">vcl-navigation-item</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">vcl-navigation-item</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">vcl-navigation-label</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">vcl-icogram</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">vcl-icon</span> <span class="hljs-attr">vclPrepend</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;fas:envelope&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vcl-icon</span>&gt;</span>\n        Contact\n      <span class="hljs-tag">&lt;/<span class="hljs-name">vcl-icogram</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">vcl-navigation-label</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">vcl-navigation-item</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">vcl-navigation</span>&gt;</span></pre>\n<h3 id="api">API</h3>\n<h4 id="vcl-navigation-attributes">vcl-navigation attributes</h4>\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Type</th>\n<th>Default</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody><tr>\n<td><code>layout</code></td>\n<td>&apos;horizontal&apos; | &apos;vertical&apos;</td>\n<td>&apos;horizontal&apos;</td>\n<td></td>\n</tr>\n</tbody></table>\n<h4 id="vcl-navigation-item-attributes">vcl-navigation-item attributes</h4>\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Type</th>\n<th>Default</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody><tr>\n<td><code>opened</code></td>\n<td>boolean</td>\n<td>false</td>\n<td>if true and nested this opens the subitems</td>\n</tr>\n<tr>\n<td><code>selected</code></td>\n<td>boolean</td>\n<td>false</td>\n<td>Wether the item is selected</td>\n</tr>\n</tbody></table>\n'},"demo.component.html":{type:"pre",content:a("wcBt")},"demo.component.ts":{type:"pre",content:a("pZYX")}}}}};class e{}var i=a("pMnS"),p=a("8Ip6"),u=a("1/43"),o=a("ZuQ0"),b=a("N3Lh"),g=a("TH2q"),r=a("SgBA"),h=a("E2lf"),v=a("Vp9f"),m=a("b1Eb"),j=a("X5GH"),d=a("dy60"),f=a("9Rb9"),B=s.ob({encapsulation:2,styles:[],data:{}});function I(l){return s.Kb(0,[(l()(),s.qb(0,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),s.Ib(-1,null,["Basic navigation"])),(l()(),s.qb(2,0,null,null,88,"vcl-navigation",[],[[2,"navigation",null]],null,null,u.b,u.a)),s.pb(3,49152,null,1,o.a,[[3,o.a]],null,null),s.Gb(603979776,1,{items:1}),s.Fb(2048,null,b.a,null,[o.a]),(l()(),s.qb(6,0,null,0,10,"vcl-navigation-item",[],[[2,"navigation-item",null],[1,"tabindex",0],[2,"close",null],[2,"selected",null]],[[null,"click"]],(function(l,n,a){var t=!0;return"click"===n&&(t=!1!==s.Bb(l,7).onClick(a)&&t),t}),g.c,g.a)),s.pb(7,49152,[[1,4]],1,r.a,[[1,b.a],[3,r.a]],null,null),s.Gb(603979776,2,{nestedNav:0}),(l()(),s.qb(9,0,null,0,7,"vcl-navigation-label",[],[[2,"navigation-item-label",null]],null,null,g.d,g.b)),s.pb(10,49152,null,0,r.b,[],null,null),(l()(),s.qb(11,0,null,0,5,"vcl-icogram",[],[[2,"icogram",null]],null,null,h.c,h.a)),s.pb(12,49152,null,0,v.a,[],null,null),(l()(),s.qb(13,0,null,0,2,"vcl-icon",[["icon","fas:home"],["vclPrepend",""]],[[2,"icon",null],[1,"role",0]],null,null,m.b,m.a)),s.Fb(512,null,j.a,j.a,[s.C,d.a]),s.pb(15,4767744,null,0,f.a,[j.a,s.k],{icon:[0,"icon"]},null),(l()(),s.Ib(-1,1,[" Home "])),(l()(),s.qb(17,0,null,0,36,"vcl-navigation-item",[],[[2,"navigation-item",null],[1,"tabindex",0],[2,"close",null],[2,"selected",null]],[[null,"click"]],(function(l,n,a){var t=!0;return"click"===n&&(t=!1!==s.Bb(l,18).onClick(a)&&t),t}),g.c,g.a)),s.pb(18,49152,[[1,4],["products",4]],1,r.a,[[1,b.a],[3,r.a]],null,null),s.Gb(603979776,3,{nestedNav:0}),(l()(),s.qb(20,0,null,0,7,"vcl-navigation-label",[],[[2,"navigation-item-label",null]],null,null,g.d,g.b)),s.pb(21,49152,null,0,r.b,[],null,null),(l()(),s.qb(22,0,null,0,5,"vcl-icogram",[],[[2,"icogram",null]],null,null,h.c,h.a)),s.pb(23,49152,null,0,v.a,[],null,null),(l()(),s.qb(24,0,null,0,2,"vcl-icon",[["vclPrepend",""]],[[2,"icon",null],[1,"role",0]],null,null,m.b,m.a)),s.Fb(512,null,j.a,j.a,[s.C,d.a]),s.pb(26,4767744,null,0,f.a,[j.a,s.k],{icon:[0,"icon"]},null),(l()(),s.Ib(-1,1,[" Products "])),(l()(),s.qb(28,0,null,1,25,"vcl-navigation",[],[[2,"navigation",null]],null,null,u.b,u.a)),s.pb(29,49152,null,1,o.a,[[3,o.a]],null,null),s.Gb(603979776,4,{items:1}),s.Fb(2048,[[3,4]],b.a,null,[o.a]),(l()(),s.qb(32,0,null,0,10,"vcl-navigation-item",[],[[2,"navigation-item",null],[1,"tabindex",0],[2,"close",null],[2,"selected",null]],[[null,"click"]],(function(l,n,a){var t=!0;return"click"===n&&(t=!1!==s.Bb(l,33).onClick(a)&&t),t}),g.c,g.a)),s.pb(33,49152,[[4,4],[1,4]],1,r.a,[[1,b.a],[3,r.a]],null,null),s.Gb(603979776,5,{nestedNav:0}),(l()(),s.qb(35,0,null,0,7,"vcl-navigation-label",[],[[2,"navigation-item-label",null]],null,null,g.d,g.b)),s.pb(36,49152,null,0,r.b,[],null,null),(l()(),s.qb(37,0,null,0,5,"vcl-icogram",[],[[2,"icogram",null]],null,null,h.c,h.a)),s.pb(38,49152,null,0,v.a,[],null,null),(l()(),s.qb(39,0,null,0,2,"vcl-icon",[["icon","fas:bicycle"],["vclPrepend",""]],[[2,"icon",null],[1,"role",0]],null,null,m.b,m.a)),s.Fb(512,null,j.a,j.a,[s.C,d.a]),s.pb(41,4767744,null,0,f.a,[j.a,s.k],{icon:[0,"icon"]},null),(l()(),s.Ib(-1,1,[" Product 1 "])),(l()(),s.qb(43,0,null,0,10,"vcl-navigation-item",[],[[2,"navigation-item",null],[1,"tabindex",0],[2,"close",null],[2,"selected",null]],[[null,"click"]],(function(l,n,a){var t=!0;return"click"===n&&(t=!1!==s.Bb(l,44).onClick(a)&&t),t}),g.c,g.a)),s.pb(44,49152,[[4,4],[1,4]],1,r.a,[[1,b.a],[3,r.a]],null,null),s.Gb(603979776,6,{nestedNav:0}),(l()(),s.qb(46,0,null,0,7,"vcl-navigation-label",[],[[2,"navigation-item-label",null]],null,null,g.d,g.b)),s.pb(47,49152,null,0,r.b,[],null,null),(l()(),s.qb(48,0,null,0,5,"vcl-icogram",[],[[2,"icogram",null]],null,null,h.c,h.a)),s.pb(49,49152,null,0,v.a,[],null,null),(l()(),s.qb(50,0,null,0,2,"vcl-icon",[["icon","fas:bicycle"],["vclPrepend",""]],[[2,"icon",null],[1,"role",0]],null,null,m.b,m.a)),s.Fb(512,null,j.a,j.a,[s.C,d.a]),s.pb(52,4767744,null,0,f.a,[j.a,s.k],{icon:[0,"icon"]},null),(l()(),s.Ib(-1,1,[" Product 2 "])),(l()(),s.qb(54,0,null,0,36,"vcl-navigation-item",[],[[2,"navigation-item",null],[1,"tabindex",0],[2,"close",null],[2,"selected",null]],[[null,"click"]],(function(l,n,a){var t=!0;return"click"===n&&(t=!1!==s.Bb(l,55).onClick(a)&&t),t}),g.c,g.a)),s.pb(55,49152,[[1,4],["contact",4]],1,r.a,[[1,b.a],[3,r.a]],null,null),s.Gb(603979776,7,{nestedNav:0}),(l()(),s.qb(57,0,null,0,7,"vcl-navigation-label",[],[[2,"navigation-item-label",null]],null,null,g.d,g.b)),s.pb(58,49152,null,0,r.b,[],null,null),(l()(),s.qb(59,0,null,0,5,"vcl-icogram",[],[[2,"icogram",null]],null,null,h.c,h.a)),s.pb(60,49152,null,0,v.a,[],null,null),(l()(),s.qb(61,0,null,0,2,"vcl-icon",[["vclPrepend",""]],[[2,"icon",null],[1,"role",0]],null,null,m.b,m.a)),s.Fb(512,null,j.a,j.a,[s.C,d.a]),s.pb(63,4767744,null,0,f.a,[j.a,s.k],{icon:[0,"icon"]},null),(l()(),s.Ib(-1,1,[" Contact "])),(l()(),s.qb(65,0,null,1,25,"vcl-navigation",[],[[2,"navigation",null]],null,null,u.b,u.a)),s.pb(66,49152,null,1,o.a,[[3,o.a]],null,null),s.Gb(603979776,8,{items:1}),s.Fb(2048,[[7,4]],b.a,null,[o.a]),(l()(),s.qb(69,0,null,0,10,"vcl-navigation-item",[],[[2,"navigation-item",null],[1,"tabindex",0],[2,"close",null],[2,"selected",null]],[[null,"click"]],(function(l,n,a){var t=!0;return"click"===n&&(t=!1!==s.Bb(l,70).onClick(a)&&t),t}),g.c,g.a)),s.pb(70,49152,[[8,4],[1,4]],1,r.a,[[1,b.a],[3,r.a]],null,null),s.Gb(603979776,9,{nestedNav:0}),(l()(),s.qb(72,0,null,0,7,"vcl-navigation-label",[],[[2,"navigation-item-label",null]],null,null,g.d,g.b)),s.pb(73,49152,null,0,r.b,[],null,null),(l()(),s.qb(74,0,null,0,5,"vcl-icogram",[],[[2,"icogram",null]],null,null,h.c,h.a)),s.pb(75,49152,null,0,v.a,[],null,null),(l()(),s.qb(76,0,null,0,2,"vcl-icon",[["icon","fas:envelope"],["vclPrepend",""]],[[2,"icon",null],[1,"role",0]],null,null,m.b,m.a)),s.Fb(512,null,j.a,j.a,[s.C,d.a]),s.pb(78,4767744,null,0,f.a,[j.a,s.k],{icon:[0,"icon"]},null),(l()(),s.Ib(-1,1,[" Contact 1 "])),(l()(),s.qb(80,0,null,0,10,"vcl-navigation-item",[],[[2,"navigation-item",null],[1,"tabindex",0],[2,"close",null],[2,"selected",null]],[[null,"click"]],(function(l,n,a){var t=!0;return"click"===n&&(t=!1!==s.Bb(l,81).onClick(a)&&t),t}),g.c,g.a)),s.pb(81,49152,[[8,4],[1,4]],1,r.a,[[1,b.a],[3,r.a]],null,null),s.Gb(603979776,10,{nestedNav:0}),(l()(),s.qb(83,0,null,0,7,"vcl-navigation-label",[],[[2,"navigation-item-label",null]],null,null,g.d,g.b)),s.pb(84,49152,null,0,r.b,[],null,null),(l()(),s.qb(85,0,null,0,5,"vcl-icogram",[],[[2,"icogram",null]],null,null,h.c,h.a)),s.pb(86,49152,null,0,v.a,[],null,null),(l()(),s.qb(87,0,null,0,2,"vcl-icon",[["icon","fas:envelope"],["vclPrepend",""]],[[2,"icon",null],[1,"role",0]],null,null,m.b,m.a)),s.Fb(512,null,j.a,j.a,[s.C,d.a]),s.pb(89,4767744,null,0,f.a,[j.a,s.k],{icon:[0,"icon"]},null),(l()(),s.Ib(-1,1,[" Contact 2 "])),(l()(),s.qb(91,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),s.Ib(-1,null,["Horizontal navigation"])),(l()(),s.qb(93,0,null,null,36,"vcl-navigation",[["layout","horizontal"]],[[2,"navigation",null]],null,null,u.b,u.a)),s.pb(94,49152,null,1,o.a,[[3,o.a]],{layout:[0,"layout"]},null),s.Gb(603979776,11,{items:1}),s.Fb(2048,null,b.a,null,[o.a]),(l()(),s.qb(97,0,null,0,10,"vcl-navigation-item",[],[[2,"navigation-item",null],[1,"tabindex",0],[2,"close",null],[2,"selected",null]],[[null,"click"]],(function(l,n,a){var t=!0;return"click"===n&&(t=!1!==s.Bb(l,98).onClick(a)&&t),t}),g.c,g.a)),s.pb(98,49152,[[11,4]],1,r.a,[[1,b.a],[3,r.a]],null,null),s.Gb(603979776,12,{nestedNav:0}),(l()(),s.qb(100,0,null,0,7,"vcl-navigation-label",[],[[2,"navigation-item-label",null]],null,null,g.d,g.b)),s.pb(101,49152,null,0,r.b,[],null,null),(l()(),s.qb(102,0,null,0,5,"vcl-icogram",[],[[2,"icogram",null]],null,null,h.c,h.a)),s.pb(103,49152,null,0,v.a,[],null,null),(l()(),s.qb(104,0,null,0,2,"vcl-icon",[["icon","fas:home"],["vclPrepend",""]],[[2,"icon",null],[1,"role",0]],null,null,m.b,m.a)),s.Fb(512,null,j.a,j.a,[s.C,d.a]),s.pb(106,4767744,null,0,f.a,[j.a,s.k],{icon:[0,"icon"]},null),(l()(),s.Ib(-1,1,[" Home "])),(l()(),s.qb(108,0,null,0,10,"vcl-navigation-item",[],[[2,"navigation-item",null],[1,"tabindex",0],[2,"close",null],[2,"selected",null]],[[null,"click"]],(function(l,n,a){var t=!0;return"click"===n&&(t=!1!==s.Bb(l,109).onClick(a)&&t),t}),g.c,g.a)),s.pb(109,49152,[[11,4]],1,r.a,[[1,b.a],[3,r.a]],null,null),s.Gb(603979776,13,{nestedNav:0}),(l()(),s.qb(111,0,null,0,7,"vcl-navigation-label",[],[[2,"navigation-item-label",null]],null,null,g.d,g.b)),s.pb(112,49152,null,0,r.b,[],null,null),(l()(),s.qb(113,0,null,0,5,"vcl-icogram",[],[[2,"icogram",null]],null,null,h.c,h.a)),s.pb(114,49152,null,0,v.a,[],null,null),(l()(),s.qb(115,0,null,0,2,"vcl-icon",[["icon","fas:bicycle"],["vclPrepend",""]],[[2,"icon",null],[1,"role",0]],null,null,m.b,m.a)),s.Fb(512,null,j.a,j.a,[s.C,d.a]),s.pb(117,4767744,null,0,f.a,[j.a,s.k],{icon:[0,"icon"]},null),(l()(),s.Ib(-1,1,[" Products "])),(l()(),s.qb(119,0,null,0,10,"vcl-navigation-item",[],[[2,"navigation-item",null],[1,"tabindex",0],[2,"close",null],[2,"selected",null]],[[null,"click"]],(function(l,n,a){var t=!0;return"click"===n&&(t=!1!==s.Bb(l,120).onClick(a)&&t),t}),g.c,g.a)),s.pb(120,49152,[[11,4]],1,r.a,[[1,b.a],[3,r.a]],null,null),s.Gb(603979776,14,{nestedNav:0}),(l()(),s.qb(122,0,null,0,7,"vcl-navigation-label",[],[[2,"navigation-item-label",null]],null,null,g.d,g.b)),s.pb(123,49152,null,0,r.b,[],null,null),(l()(),s.qb(124,0,null,0,5,"vcl-icogram",[],[[2,"icogram",null]],null,null,h.c,h.a)),s.pb(125,49152,null,0,v.a,[],null,null),(l()(),s.qb(126,0,null,0,2,"vcl-icon",[["icon","fas:envelope"],["vclPrepend",""]],[[2,"icon",null],[1,"role",0]],null,null,m.b,m.a)),s.Fb(512,null,j.a,j.a,[s.C,d.a]),s.pb(128,4767744,null,0,f.a,[j.a,s.k],{icon:[0,"icon"]},null),(l()(),s.Ib(-1,1,[" Contacts "]))],(function(l,n){l(n,15,0,"fas:home"),l(n,26,0,s.Bb(n,18).opened?"fas:chevron-down":"fas:chevron-right"),l(n,41,0,"fas:bicycle"),l(n,52,0,"fas:bicycle"),l(n,63,0,s.Bb(n,55).opened?"fas:chevron-down":"fas:chevron-right"),l(n,78,0,"fas:envelope"),l(n,89,0,"fas:envelope"),l(n,94,0,"horizontal"),l(n,106,0,"fas:home"),l(n,117,0,"fas:bicycle"),l(n,128,0,"fas:envelope")}),(function(l,n){l(n,2,0,s.Bb(n,3).classVclNavigation),l(n,6,0,s.Bb(n,7).classVclNavigationItem,s.Bb(n,7).attrTabindex,s.Bb(n,7).closed,s.Bb(n,7)._selected),l(n,9,0,s.Bb(n,10).classVclNavigationItemLabel),l(n,11,0,s.Bb(n,12).clsIcogram),l(n,13,0,s.Bb(n,15).vclIcon,s.Bb(n,15).attrRole),l(n,17,0,s.Bb(n,18).classVclNavigationItem,s.Bb(n,18).attrTabindex,s.Bb(n,18).closed,s.Bb(n,18)._selected),l(n,20,0,s.Bb(n,21).classVclNavigationItemLabel),l(n,22,0,s.Bb(n,23).clsIcogram),l(n,24,0,s.Bb(n,26).vclIcon,s.Bb(n,26).attrRole),l(n,28,0,s.Bb(n,29).classVclNavigation),l(n,32,0,s.Bb(n,33).classVclNavigationItem,s.Bb(n,33).attrTabindex,s.Bb(n,33).closed,s.Bb(n,33)._selected),l(n,35,0,s.Bb(n,36).classVclNavigationItemLabel),l(n,37,0,s.Bb(n,38).clsIcogram),l(n,39,0,s.Bb(n,41).vclIcon,s.Bb(n,41).attrRole),l(n,43,0,s.Bb(n,44).classVclNavigationItem,s.Bb(n,44).attrTabindex,s.Bb(n,44).closed,s.Bb(n,44)._selected),l(n,46,0,s.Bb(n,47).classVclNavigationItemLabel),l(n,48,0,s.Bb(n,49).clsIcogram),l(n,50,0,s.Bb(n,52).vclIcon,s.Bb(n,52).attrRole),l(n,54,0,s.Bb(n,55).classVclNavigationItem,s.Bb(n,55).attrTabindex,s.Bb(n,55).closed,s.Bb(n,55)._selected),l(n,57,0,s.Bb(n,58).classVclNavigationItemLabel),l(n,59,0,s.Bb(n,60).clsIcogram),l(n,61,0,s.Bb(n,63).vclIcon,s.Bb(n,63).attrRole),l(n,65,0,s.Bb(n,66).classVclNavigation),l(n,69,0,s.Bb(n,70).classVclNavigationItem,s.Bb(n,70).attrTabindex,s.Bb(n,70).closed,s.Bb(n,70)._selected),l(n,72,0,s.Bb(n,73).classVclNavigationItemLabel),l(n,74,0,s.Bb(n,75).clsIcogram),l(n,76,0,s.Bb(n,78).vclIcon,s.Bb(n,78).attrRole),l(n,80,0,s.Bb(n,81).classVclNavigationItem,s.Bb(n,81).attrTabindex,s.Bb(n,81).closed,s.Bb(n,81)._selected),l(n,83,0,s.Bb(n,84).classVclNavigationItemLabel),l(n,85,0,s.Bb(n,86).clsIcogram),l(n,87,0,s.Bb(n,89).vclIcon,s.Bb(n,89).attrRole),l(n,93,0,s.Bb(n,94).classVclNavigation),l(n,97,0,s.Bb(n,98).classVclNavigationItem,s.Bb(n,98).attrTabindex,s.Bb(n,98).closed,s.Bb(n,98)._selected),l(n,100,0,s.Bb(n,101).classVclNavigationItemLabel),l(n,102,0,s.Bb(n,103).clsIcogram),l(n,104,0,s.Bb(n,106).vclIcon,s.Bb(n,106).attrRole),l(n,108,0,s.Bb(n,109).classVclNavigationItem,s.Bb(n,109).attrTabindex,s.Bb(n,109).closed,s.Bb(n,109)._selected),l(n,111,0,s.Bb(n,112).classVclNavigationItemLabel),l(n,113,0,s.Bb(n,114).clsIcogram),l(n,115,0,s.Bb(n,117).vclIcon,s.Bb(n,117).attrRole),l(n,119,0,s.Bb(n,120).classVclNavigationItem,s.Bb(n,120).attrTabindex,s.Bb(n,120).closed,s.Bb(n,120)._selected),l(n,122,0,s.Bb(n,123).classVclNavigationItemLabel),l(n,124,0,s.Bb(n,125).clsIcogram),l(n,126,0,s.Bb(n,128).vclIcon,s.Bb(n,128).attrRole)}))}function q(l){return s.Kb(0,[(l()(),s.qb(0,0,null,null,1,"ng-component",[],null,null,null,I,B)),s.pb(1,49152,null,0,t,[],null,null)],null,null)}var N=s.mb("ng-component",t,q,{},{},[]),y=a("SVse"),k=a("POq0"),T=a("tfYh"),C=a("zMNK"),x=a("p/eS"),V=a("2FIb"),P=a("61Fc"),K=a("g2Nb"),w=a("qFr4"),z=a("hyVG"),R=a("iInd"),F=a("PNUx");a.d(n,"NavigationDemoModuleNgFactory",(function(){return L}));var L=s.nb(e,[],(function(l){return s.yb([s.zb(512,s.j,s.Z,[[8,[i.a,p.a,N]],[3,s.j],s.w]),s.zb(4608,y.n,y.m,[s.t,[2,y.A]]),s.zb(4608,k.a,k.a,[]),s.zb(4608,d.a,d.a,[[2,T.a]]),s.zb(1073742336,y.c,y.c,[]),s.zb(1073742336,C.e,C.e,[]),s.zb(1073742336,k.b,k.b,[]),s.zb(1073742336,x.a,x.a,[]),s.zb(1073742336,V.a,V.a,[]),s.zb(1073742336,P.c,P.c,[]),s.zb(1073742336,K.a,K.a,[]),s.zb(1073742336,w.a,w.a,[]),s.zb(1073742336,z.a,z.a,[]),s.zb(1073742336,R.q,R.q,[[2,R.v],[2,R.m]]),s.zb(1073742336,e,e,[]),s.zb(1024,R.i,(function(){return[[{path:"",component:F.a,data:c}]]}),[])])}))},"2FIb":function(l,n,a){"use strict";a.d(n,"a",(function(){return s})),a("PNUx");class s{}},"8Ip6":function(l,n,a){"use strict";a.d(n,"a",(function(){return k}));var s=a("8Y7J"),t=a("zMNK"),c=a("b9ux"),e=a("ZMf7"),i=a("IXq8"),p=a("SVse"),u=a("TINK"),o=a("tKhL"),b=a("PNUx"),g=a("iInd"),r=a("cUpR"),h=s.ob({encapsulation:2,styles:[],data:{}});function v(l){return s.Kb(0,[(l()(),s.gb(0,null,null,0))],null,null)}function m(l){return s.Kb(0,[(l()(),s.qb(0,0,null,null,2,"div",[],null,null,null,null,null)),(l()(),s.gb(16777216,null,null,1,null,v)),s.pb(2,212992,null,0,t.a,[s.j,s.N],{portal:[0,"portal"]},null)],(function(l,n){l(n,2,0,n.parent.context.$implicit.content)}),null)}function j(l){return s.Kb(0,[(l()(),s.qb(0,0,null,null,2,"div",[],null,null,null,null,null)),(l()(),s.qb(1,0,null,null,1,"pre",[],null,null,null,null,null)),(l()(),s.Ib(2,null,["",""]))],null,(function(l,n){l(n,2,0,n.parent.context.$implicit.content)}))}function d(l){return s.Kb(0,[(l()(),s.qb(0,0,null,null,0,"div",[],[[8,"innerHTML",1]],null,null,null,null))],null,(function(l,n){l(n,0,0,n.parent.context.$implicit.content)}))}function f(l){return s.Kb(0,[(l()(),s.qb(0,0,null,null,0,"div",[["class","markdown-body"]],[[8,"innerHTML",1]],null,null,null,null))],null,(function(l,n){l(n,0,0,n.parent.context.$implicit.content)}))}function B(l){return s.Kb(0,[(l()(),s.qb(0,0,null,null,0,"pre",[],[[8,"innerHTML",1]],null,null,null,null))],null,(function(l,n){l(n,0,0,n.parent.context.$implicit.content)}))}function I(l){return s.Kb(0,[(l()(),s.qb(0,16777216,null,null,14,"vcl-tab",[],[[2,"tab",null],[1,"role",0],[2,"disabled",null],[2,"selected",null],[1,"aria-selected",0]],[[null,"click"]],(function(l,n,a){var t=!0;return"click"===n&&(t=!1!==s.Bb(l,1).onClick()&&t),t}),c.c,c.a)),s.pb(1,4243456,[[1,4]],0,e.a,[i.a,s.N],null,null),(l()(),s.qb(2,0,null,0,2,"vcl-tab-label",[],[[2,"tab-label",null]],null,null,c.d,c.b)),s.pb(3,49152,null,0,e.b,[],null,null),(l()(),s.Ib(4,0,["",""])),(l()(),s.gb(16777216,null,1,1,null,m)),s.pb(6,16384,null,0,p.l,[s.N,s.K],{ngIf:[0,"ngIf"]},null),(l()(),s.gb(16777216,null,1,1,null,j)),s.pb(8,16384,null,0,p.l,[s.N,s.K],{ngIf:[0,"ngIf"]},null),(l()(),s.gb(16777216,null,1,1,null,d)),s.pb(10,16384,null,0,p.l,[s.N,s.K],{ngIf:[0,"ngIf"]},null),(l()(),s.gb(16777216,null,1,1,null,f)),s.pb(12,16384,null,0,p.l,[s.N,s.K],{ngIf:[0,"ngIf"]},null),(l()(),s.gb(16777216,null,1,1,null,B)),s.pb(14,16384,null,0,p.l,[s.N,s.K],{ngIf:[0,"ngIf"]},null),(l()(),s.gb(0,null,null,0))],(function(l,n){l(n,6,0,"component"===n.context.$implicit.type),l(n,8,0,"text"===n.context.$implicit.type),l(n,10,0,"html"===n.context.$implicit.type),l(n,12,0,"md"===n.context.$implicit.type),l(n,14,0,"pre"===n.context.$implicit.type)}),(function(l,n){l(n,0,0,s.Bb(n,1).classVclTab,s.Bb(n,1).attrRole,s.Bb(n,1).disabled,s.Bb(n,1).selected,s.Bb(n,1).selected),l(n,2,0,s.Bb(n,3).classCclTabLabel),l(n,4,0,n.context.$implicit.name)}))}function q(l){return s.Kb(0,[(l()(),s.qb(0,0,null,null,6,"div",[],null,null,null,null,null)),(l()(),s.qb(1,0,null,null,5,"vcl-tab-nav",[["borders","true"]],[[2,"tabbable",null],[2,"tabs-left",null],[2,"tabs-right",null]],null,null,u.b,u.a)),s.Fb(6144,null,i.a,null,[o.a]),s.pb(3,4898816,null,1,o.a,[s.h],{borders:[0,"borders"]},null),s.Gb(603979776,1,{tabs:1}),(l()(),s.gb(16777216,null,0,1,null,I)),s.pb(6,278528,null,0,p.k,[s.N,s.K,s.r],{ngForOf:[0,"ngForOf"]},null)],(function(l,n){var a=n.component;l(n,3,0,"true"),l(n,6,0,a.tabs)}),(function(l,n){l(n,1,0,s.Bb(n,3).classVclTabbable,s.Bb(n,3).classVclTabsLeft,s.Bb(n,3).classVclTabsRight)}))}function N(l){return s.Kb(0,[(l()(),s.qb(0,0,null,null,1,"h2",[["class","article-header"]],null,null,null,null,null)),(l()(),s.Ib(1,null,[" ",""])),(l()(),s.gb(16777216,null,null,1,null,q)),s.pb(3,16384,null,0,p.l,[s.N,s.K],{ngIf:[0,"ngIf"]},null)],(function(l,n){l(n,3,0,n.component.tabs.length>0)}),(function(l,n){l(n,1,0,n.component.title)}))}function y(l){return s.Kb(0,[(l()(),s.qb(0,0,null,null,1,"ng-component",[],null,null,null,N,h)),s.pb(1,114688,null,0,b.a,[g.a,r.b],null,null)],(function(l,n){l(n,1,0)}),null)}var k=s.mb("ng-component",b.a,y,{},{},[])},IXq8:function(l,n,a){"use strict";a.d(n,"a",(function(){return s}));const s=new(a("8Y7J").p)("vcl_tab_nav")},PNUx:function(l,n,a){"use strict";a.d(n,"a",(function(){return t}));var s=a("zMNK");class t{constructor(l,n){this.activatedRoute=l,this.sanitizer=n,this.tabs=[]}ngOnInit(){const l=this.activatedRoute.snapshot.data.demo();l?(this.title=l.label,this.tabs=l.tabs?Object.keys(l.tabs).map(n=>{let a,t;return"object"==typeof l.tabs[n]&&l.tabs[n]?t="pre"===(a=l.tabs[n].type)||"html"===a||"md"===a?this.sanitizer.bypassSecurityTrustHtml(l.tabs[n].content):l.tabs[n].content:"function"==typeof l.tabs[n]&&(a="component",t=new s.b(l.tabs[n])),{name:n,content:t,type:a}}):[]):(this.title="ng-vcl",this.tabs=[])}}},POq0:function(l,n,a){"use strict";a.d(n,"a",(function(){return t})),a.d(n,"b",(function(){return c})),a("KCVW");var s=a("8Y7J");a("HDdC"),a("XNiG"),a("Kj3r");let t=(()=>{class l{create(l){return"undefined"==typeof MutationObserver?null:new MutationObserver(l)}}return l.ngInjectableDef=Object(s.Ob)({factory:function(){return new l},token:l,providedIn:"root"}),l})();class c{}},TINK:function(l,n,a){"use strict";a.d(n,"a",(function(){return e})),a.d(n,"b",(function(){return u}));var s=a("8Y7J"),t=a("zMNK"),c=a("SVse"),e=(a("IXq8"),a("tKhL"),s.ob({encapsulation:2,styles:[],data:{}}));function i(l){return s.Kb(0,[(l()(),s.gb(0,null,null,0))],null,null)}function p(l){return s.Kb(0,[(l()(),s.gb(16777216,null,null,1,null,i)),s.pb(1,212992,null,0,t.a,[s.j,s.N],{portal:[0,"portal"]},null),(l()(),s.gb(0,null,null,0))],(function(l,n){l(n,1,0,n.component.currentTab.portal)}),null)}function u(l){return s.Kb(2,[s.Gb(671088640,1,{panel:0}),(l()(),s.qb(1,0,null,null,1,"div",[["class","tabs"],["role","tablist"]],[[2,"tab-style-uni",null]],null,null,null,null)),s.Ab(null,0),(l()(),s.qb(3,0,null,null,4,"div",[["class","tab-content"]],[[4,"display",null],[2,"no-border",null]],null,null,null,null)),(l()(),s.qb(4,0,[[1,0],["panel",1]],null,3,"div",[["class","tab-panel"],["role","tabpanel"]],null,null,null,null,null)),(l()(),s.gb(16777216,null,null,1,null,p)),s.pb(6,16384,null,0,c.l,[s.N,s.K],{ngIf:[0,"ngIf"]},null),s.Ab(null,1)],(function(l,n){var a=n.component;l(n,6,0,a.currentTab&&a.currentTab.portal)}),(function(l,n){var a=n.component;l(n,1,0,!!a.borders),l(n,3,0,!1===a.hasContent?"none":null,!a.borders)}))}},ZMf7:function(l,n,a){"use strict";a.d(n,"b",(function(){return c})),a.d(n,"a",(function(){return e})),a("IXq8");var s=a("zMNK"),t=a("Kj3r");class c{constructor(){this.classCclTabLabel=!0}}class e{constructor(l,n){this.tabNav=l,this.viewContainerRef=n,this.classVclTab=!0,this.attrRole="tab",this.disabled=!1,this.selected=!1,l.currentTabChanged.pipe(Object(t.a)(0)).subscribe(()=>{this.selected=l.currentTab===this})}onClick(){this.disabled||(this.selected=!0,this.tabNav.selectTab(this))}ngAfterViewInit(){this.portal=this.contentTemplate?new s.f(this.contentTemplate,this.viewContainerRef):void 0}}},b9ux:function(l,n,a){"use strict";a.d(n,"b",(function(){return t})),a.d(n,"d",(function(){return c})),a.d(n,"a",(function(){return e})),a.d(n,"c",(function(){return p}));var s=a("8Y7J"),t=(a("ZMf7"),a("IXq8"),s.ob({encapsulation:2,styles:[],data:{}}));function c(l){return s.Kb(2,[s.Ab(null,0)],null,null)}var e=s.ob({encapsulation:2,styles:[],data:{}});function i(l){return s.Kb(0,[s.Ab(null,1),(l()(),s.gb(0,null,null,0))],null,null)}function p(l){return s.Kb(2,[s.Gb(671088640,1,{contentTemplate:0}),s.Ab(null,0),(l()(),s.gb(0,[[1,2],["contentTemplate",2]],null,0,null,i))],null,null)}},pZYX:function(l,n){l.exports='<span class="hljs-keyword">import</span> { Component } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/core\'</span>;\n\n<span class="hljs-meta">@Component</span>({\n  templateUrl: <span class="hljs-string">\'demo.component.html\'</span>\n})\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> NavigationDemoComponent {\n\n  hoverName?: <span class="hljs-built_in">string</span>;\n  hoverLastName?: <span class="hljs-built_in">string</span>;\n\n  onNavigate(route) {\n    <span class="hljs-built_in">console</span>.log(<span class="hljs-string">\'Navigate\'</span>, route);\n  }\n}\n'},tKhL:function(l,n,a){"use strict";a.d(n,"a",(function(){return e}));var s=a("8Y7J"),t=(a("IXq8"),a("6hoW")),c=a("XNiG");class e{constructor(l){this.cdRef=l,this._currentTabChangedEmitter=new c.a,this.currentTabChanged=this._currentTabChangedEmitter.asObservable(),this.classVclTabbable=!0,this.selectedTabIndex=0,this.borders=!1,this.selectedTabIndexChange=new s.m}get classVclTabsLeft(){return"left"===this.layout}get classVclTabsRight(){return"right"===this.layout}get hasContent(){return!!this.panel&&Object(t.a)(this.panel)}selectTab(l){if(!this.tabs)return;const n=this.tabs.toArray().findIndex(n=>n===l);this.selectedTabIndex=n,this.currentTab=l,this.selectedTabIndexChange.next(this.selectedTabIndex),this._currentTabChangedEmitter.next(),this.cdRef.markForCheck(),this.cdRef.detectChanges()}selectTabIndex(l){if(this.selectedTabIndex=l,!this.tabs)return;const n=this.tabs.toArray();let a;"number"==typeof l&&n[l]&&(a=n[l]),this.currentTab=a,this._currentTabChangedEmitter.next(),this.cdRef.markForCheck(),this.cdRef.detectChanges()}ngAfterViewInit(){this.selectTabIndex(this.selectedTabIndex)}ngOnChanges(l){l.selectedTabIndex&&this.selectTabIndex(l.selectedTabIndex.currentValue)}ngOnDestroy(){this._currentTabChangedEmitter.complete()}}},wcBt:function(l,n){l.exports='<span class="hljs-tag">&lt;<span class="hljs-name">h3</span>&gt;</span>Basic navigation<span class="hljs-tag">&lt;/<span class="hljs-name">h3</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">vcl-navigation</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">vcl-navigation-item</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">vcl-navigation-label</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">vcl-icogram</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">vcl-icon</span> <span class="hljs-attr">vclPrepend</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">"fas:home"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vcl-icon</span>&gt;</span>\n        Home\n      <span class="hljs-tag">&lt;/<span class="hljs-name">vcl-icogram</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">vcl-navigation-label</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">vcl-navigation-item</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">vcl-navigation-item</span> #<span class="hljs-attr">products</span>=<span class="hljs-string">"vclNavigationItem"</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">vcl-navigation-label</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">vcl-icogram</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">vcl-icon</span> <span class="hljs-attr">vclPrepend</span> [<span class="hljs-attr">icon</span>]=<span class="hljs-string">"products.opened ? \'fas:chevron-down\' : \'fas:chevron-right\'"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vcl-icon</span>&gt;</span>\n        Products\n      <span class="hljs-tag">&lt;/<span class="hljs-name">vcl-icogram</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">vcl-navigation-label</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">vcl-navigation</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">vcl-navigation-item</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">vcl-navigation-label</span>&gt;</span>\n          <span class="hljs-tag">&lt;<span class="hljs-name">vcl-icogram</span>&gt;</span>\n            <span class="hljs-tag">&lt;<span class="hljs-name">vcl-icon</span> <span class="hljs-attr">vclPrepend</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">"fas:bicycle"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vcl-icon</span>&gt;</span>\n            Product 1\n          <span class="hljs-tag">&lt;/<span class="hljs-name">vcl-icogram</span>&gt;</span>\n        <span class="hljs-tag">&lt;/<span class="hljs-name">vcl-navigation-label</span>&gt;</span>\n      <span class="hljs-tag">&lt;/<span class="hljs-name">vcl-navigation-item</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">vcl-navigation-item</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">vcl-navigation-label</span>&gt;</span>\n          <span class="hljs-tag">&lt;<span class="hljs-name">vcl-icogram</span>&gt;</span>\n            <span class="hljs-tag">&lt;<span class="hljs-name">vcl-icon</span> <span class="hljs-attr">vclPrepend</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">"fas:bicycle"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vcl-icon</span>&gt;</span>\n            Product 2\n          <span class="hljs-tag">&lt;/<span class="hljs-name">vcl-icogram</span>&gt;</span>\n        <span class="hljs-tag">&lt;/<span class="hljs-name">vcl-navigation-label</span>&gt;</span>\n      <span class="hljs-tag">&lt;/<span class="hljs-name">vcl-navigation-item</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">vcl-navigation</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">vcl-navigation-item</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">vcl-navigation-item</span> #<span class="hljs-attr">contact</span>=<span class="hljs-string">"vclNavigationItem"</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">vcl-navigation-label</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">vcl-icogram</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">vcl-icon</span> <span class="hljs-attr">vclPrepend</span> [<span class="hljs-attr">icon</span>]=<span class="hljs-string">"contact.opened ? \'fas:chevron-down\' : \'fas:chevron-right\'"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vcl-icon</span>&gt;</span>\n        Contact\n      <span class="hljs-tag">&lt;/<span class="hljs-name">vcl-icogram</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">vcl-navigation-label</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">vcl-navigation</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">vcl-navigation-item</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">vcl-navigation-label</span>&gt;</span>\n          <span class="hljs-tag">&lt;<span class="hljs-name">vcl-icogram</span>&gt;</span>\n            <span class="hljs-tag">&lt;<span class="hljs-name">vcl-icon</span> <span class="hljs-attr">vclPrepend</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">"fas:envelope"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vcl-icon</span>&gt;</span>\n            Contact 1\n          <span class="hljs-tag">&lt;/<span class="hljs-name">vcl-icogram</span>&gt;</span>\n        <span class="hljs-tag">&lt;/<span class="hljs-name">vcl-navigation-label</span>&gt;</span>\n      <span class="hljs-tag">&lt;/<span class="hljs-name">vcl-navigation-item</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">vcl-navigation-item</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">vcl-navigation-label</span>&gt;</span>\n          <span class="hljs-tag">&lt;<span class="hljs-name">vcl-icogram</span>&gt;</span>\n            <span class="hljs-tag">&lt;<span class="hljs-name">vcl-icon</span> <span class="hljs-attr">vclPrepend</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">"fas:envelope"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vcl-icon</span>&gt;</span>\n            Contact 2\n          <span class="hljs-tag">&lt;/<span class="hljs-name">vcl-icogram</span>&gt;</span>\n        <span class="hljs-tag">&lt;/<span class="hljs-name">vcl-navigation-label</span>&gt;</span>\n      <span class="hljs-tag">&lt;/<span class="hljs-name">vcl-navigation-item</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">vcl-navigation</span>&gt;</span>    \n  <span class="hljs-tag">&lt;/<span class="hljs-name">vcl-navigation-item</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">vcl-navigation</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">h3</span>&gt;</span>Horizontal navigation<span class="hljs-tag">&lt;/<span class="hljs-name">h3</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">vcl-navigation</span> <span class="hljs-attr">layout</span>=<span class="hljs-string">"horizontal"</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">vcl-navigation-item</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">vcl-navigation-label</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">vcl-icogram</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">vcl-icon</span> <span class="hljs-attr">vclPrepend</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">"fas:home"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vcl-icon</span>&gt;</span>\n        Home\n      <span class="hljs-tag">&lt;/<span class="hljs-name">vcl-icogram</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">vcl-navigation-label</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">vcl-navigation-item</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">vcl-navigation-item</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">vcl-navigation-label</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">vcl-icogram</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">vcl-icon</span> <span class="hljs-attr">vclPrepend</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">"fas:bicycle"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vcl-icon</span>&gt;</span>\n        Products\n      <span class="hljs-tag">&lt;/<span class="hljs-name">vcl-icogram</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">vcl-navigation-label</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">vcl-navigation-item</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">vcl-navigation-item</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">vcl-navigation-label</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">vcl-icogram</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">vcl-icon</span> <span class="hljs-attr">vclPrepend</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">"fas:envelope"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vcl-icon</span>&gt;</span>\n        Contacts\n      <span class="hljs-tag">&lt;/<span class="hljs-name">vcl-icogram</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">vcl-navigation-label</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">vcl-navigation-item</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">vcl-navigation</span>&gt;</span>\n  '}}]);