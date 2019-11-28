(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{"4Th1":function(l,s,a){"use strict";a.r(s);var n=a("8Y7J"),e=function(){this.value1="gr",this.value2=[]},t={demo:function(){return{label:"Select List",tabs:{Demo:e,"README.md":{type:"md",content:'<h1 id="vcl-select-list">vcl-select-list</h1>\n<p>A list consisting of items which can be selected.</p>\n<h2 id="usage">Usage</h2>\n<pre class="hljs"><span class="hljs-tag">&lt;<span class="hljs-name">vcl-select-list</span> [(<span class="hljs-attr">value</span>)]=<span class="hljs-string">&quot;value&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">vcl-select-list-item</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;1&quot;</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">vcl-select-list-label</span>&gt;</span>Item 1<span class="hljs-tag">&lt;/<span class="hljs-name">vcl-select-list-label</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">vcl-select-list-item</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">vcl-select-list-item</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;2&quot;</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">vcl-select-list-label</span>&gt;</span>Item 2<span class="hljs-tag">&lt;/<span class="hljs-name">vcl-select-list-label</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">vcl-select-list-item</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">vcl-select-list-item</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;3&quot;</span> [<span class="hljs-attr">disabled</span>]=<span class="hljs-string">&quot;true&quot;</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">vcl-select-list-label</span>&gt;</span>Item 3<span class="hljs-tag">&lt;/<span class="hljs-name">vcl-select-list-label</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">vcl-select-list-item</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">vcl-select-list</span>&gt;</span></pre>\n<h3 id="vcl-select-list-attributes">vcl-select-list attributes</h3>\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Type</th>\n<th>Default</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody><tr>\n<td><code>value</code></td>\n<td>any</td>\n<td></td>\n<td>Current value</td>\n</tr>\n<tr>\n<td><code>selectionMode</code></td>\n<td>&apos;single&apos; | &apos;multiple&apos; | &apos;none&apos;</td>\n<td>&apos;single&apos;</td>\n<td><code>single</code> allows only one item to be selected. <code>multi</code> allows multiple items to be selected.</td>\n</tr>\n</tbody></table>\n<h3 id="vcl-select-list-events">vcl-select-list events</h3>\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Type</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody><tr>\n<td><code>valueChange</code></td>\n<td>any</td>\n<td>Fired when the select-list value has changes</td>\n</tr>\n</tbody></table>\n<h3 id="vcl-select-list-item-attributes">vcl-select-list-item attributes</h3>\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Type</th>\n<th>Default</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody><tr>\n<td><code>value</code></td>\n<td>any</td>\n<td></td>\n<td>The items value</td>\n</tr>\n<tr>\n<td><code>disabled</code></td>\n<td>boolean</td>\n<td></td>\n<td>Disables the item</td>\n</tr>\n</tbody></table>\n'},"demo.component.html":{type:"pre",content:a("sAGU")},"demo.component.ts":{type:"pre",content:a("5iVd")}}}}},c=function(){},p=a("pMnS"),u=a("8Ip6"),b=a("t1Fl"),i=a("2JrD"),h=a("zDo1"),o=a("s7LF"),r=a("twzc"),d=a("YUBC"),g=a("gCzt"),m=a("kf/9"),v=a("StUX"),j=n.ob({encapsulation:2,styles:[],data:{}});function B(l){return n.Kb(0,[(l()(),n.qb(0,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),n.Ib(-1,null,["Basic vcl-select-list"])),(l()(),n.qb(2,0,null,null,65,"vcl-select-list",[],[[1,"id",0],[2,"dropdown",null],[2,"open",null],[2,"error",null]],[[null,"valueChange"]],(function(l,s,a){var n=!0;return"valueChange"===s&&(n=!1!==(l.component.value1=a)&&n),n}),b.b,b.a)),n.Fb(6144,null,i.c,null,[h.a]),n.pb(4,1228800,null,2,h.a,[n.h,[2,o.n],[2,i.b],[2,i.a]],{value:[0,"value"]},{valueChange:"valueChange"}),n.Gb(603979776,1,{_items:1}),n.Gb(603979776,2,{_content:1}),n.Fb(2048,null,r.b,null,[h.a]),(l()(),n.qb(8,0,null,0,3,"vcl-select-list-header",[],[[2,"dropdown-item-group-header",null]],null,null,d.b,d.a)),n.pb(9,49152,null,0,g.a,[],null,null),n.Fb(2048,[[2,4]],r.a,null,[g.a]),(l()(),n.Ib(-1,0,["Europe"])),(l()(),n.qb(12,0,null,0,9,"vcl-select-list-item",[["value","gr"]],[[2,"dropdown-item",null],[1,"role",0],[1,"tabindex",0],[2,"disabled",null],[2,"highlighted",null],[2,"selected",null]],[[null,"click"],[null,"focus"],[null,"blur"],[null,"keypress"]],(function(l,s,a){var e=!0;return"click"===s&&(e=!1!==n.Bb(l,13).onClick()&&e),"focus"===s&&(e=!1!==n.Bb(l,13).onFocus()&&e),"blur"===s&&(e=!1!==n.Bb(l,13).onBlur()&&e),"keypress"===s&&(e=!1!==n.Bb(l,13).onKeypress(a)&&e),e}),m.d,m.a)),n.pb(13,49152,[[1,4]],1,v.a,[r.b,n.k],{value:[0,"value"]},null),n.Gb(603979776,3,{_labelElementRef:0}),n.Fb(2048,[[2,4]],r.a,null,[v.a]),(l()(),n.qb(16,0,[[3,0]],1,2,"vcl-select-list-label",[],[[2,"dropdown-item-label",null]],null,null,m.e,m.b)),n.pb(17,49152,null,0,v.b,[],null,null),(l()(),n.Ib(-1,0,["Greece"])),(l()(),n.qb(19,0,null,2,2,"vcl-select-list-sublabel",[],[[2,"dropdown-item-sub-label",null]],null,null,m.f,m.c)),n.pb(20,49152,null,0,v.c,[],null,null),(l()(),n.Ib(-1,0,["A country in southeastern Europe with thousands of islands throughout the Aegean and Ionian seas"])),(l()(),n.qb(22,0,null,0,6,"vcl-select-list-item",[["value","fr"]],[[2,"dropdown-item",null],[1,"role",0],[1,"tabindex",0],[2,"disabled",null],[2,"highlighted",null],[2,"selected",null]],[[null,"click"],[null,"focus"],[null,"blur"],[null,"keypress"]],(function(l,s,a){var e=!0;return"click"===s&&(e=!1!==n.Bb(l,23).onClick()&&e),"focus"===s&&(e=!1!==n.Bb(l,23).onFocus()&&e),"blur"===s&&(e=!1!==n.Bb(l,23).onBlur()&&e),"keypress"===s&&(e=!1!==n.Bb(l,23).onKeypress(a)&&e),e}),m.d,m.a)),n.pb(23,49152,[[1,4]],1,v.a,[r.b,n.k],{value:[0,"value"]},null),n.Gb(603979776,4,{_labelElementRef:0}),n.Fb(2048,[[2,4]],r.a,null,[v.a]),(l()(),n.qb(26,0,[[4,0]],1,2,"vcl-select-list-label",[],[[2,"dropdown-item-label",null]],null,null,m.e,m.b)),n.pb(27,49152,null,0,v.b,[],null,null),(l()(),n.Ib(-1,0,["France"])),(l()(),n.qb(29,0,null,0,6,"vcl-select-list-item",[["value","de"]],[[2,"dropdown-item",null],[1,"role",0],[1,"tabindex",0],[2,"disabled",null],[2,"highlighted",null],[2,"selected",null]],[[null,"click"],[null,"focus"],[null,"blur"],[null,"keypress"]],(function(l,s,a){var e=!0;return"click"===s&&(e=!1!==n.Bb(l,30).onClick()&&e),"focus"===s&&(e=!1!==n.Bb(l,30).onFocus()&&e),"blur"===s&&(e=!1!==n.Bb(l,30).onBlur()&&e),"keypress"===s&&(e=!1!==n.Bb(l,30).onKeypress(a)&&e),e}),m.d,m.a)),n.pb(30,49152,[[1,4]],1,v.a,[r.b,n.k],{value:[0,"value"]},null),n.Gb(603979776,5,{_labelElementRef:0}),n.Fb(2048,[[2,4]],r.a,null,[v.a]),(l()(),n.qb(33,0,[[5,0]],1,2,"vcl-select-list-label",[],[[2,"dropdown-item-label",null]],null,null,m.e,m.b)),n.pb(34,49152,null,0,v.b,[],null,null),(l()(),n.Ib(-1,0,["Germany"])),(l()(),n.qb(36,0,null,0,6,"vcl-select-list-item",[["value","gb"]],[[2,"dropdown-item",null],[1,"role",0],[1,"tabindex",0],[2,"disabled",null],[2,"highlighted",null],[2,"selected",null]],[[null,"click"],[null,"focus"],[null,"blur"],[null,"keypress"]],(function(l,s,a){var e=!0;return"click"===s&&(e=!1!==n.Bb(l,37).onClick()&&e),"focus"===s&&(e=!1!==n.Bb(l,37).onFocus()&&e),"blur"===s&&(e=!1!==n.Bb(l,37).onBlur()&&e),"keypress"===s&&(e=!1!==n.Bb(l,37).onKeypress(a)&&e),e}),m.d,m.a)),n.pb(37,49152,[[1,4]],1,v.a,[r.b,n.k],{value:[0,"value"]},null),n.Gb(603979776,6,{_labelElementRef:0}),n.Fb(2048,[[2,4]],r.a,null,[v.a]),(l()(),n.qb(40,0,[[6,0]],1,2,"vcl-select-list-label",[],[[2,"dropdown-item-label",null]],null,null,m.e,m.b)),n.pb(41,49152,null,0,v.b,[],null,null),(l()(),n.Ib(-1,0,["The United Kingdom of Great Britain and Northern Ireland"])),(l()(),n.qb(43,0,null,0,3,"vcl-select-list-header",[],[[2,"dropdown-item-group-header",null]],null,null,d.b,d.a)),n.pb(44,49152,null,0,g.a,[],null,null),n.Fb(2048,[[2,4]],r.a,null,[g.a]),(l()(),n.Ib(-1,0,["Asia"])),(l()(),n.qb(47,0,null,0,6,"vcl-select-list-item",[["value","jp"]],[[2,"dropdown-item",null],[1,"role",0],[1,"tabindex",0],[2,"disabled",null],[2,"highlighted",null],[2,"selected",null]],[[null,"click"],[null,"focus"],[null,"blur"],[null,"keypress"]],(function(l,s,a){var e=!0;return"click"===s&&(e=!1!==n.Bb(l,48).onClick()&&e),"focus"===s&&(e=!1!==n.Bb(l,48).onFocus()&&e),"blur"===s&&(e=!1!==n.Bb(l,48).onBlur()&&e),"keypress"===s&&(e=!1!==n.Bb(l,48).onKeypress(a)&&e),e}),m.d,m.a)),n.pb(48,49152,[[1,4]],1,v.a,[r.b,n.k],{value:[0,"value"]},null),n.Gb(603979776,7,{_labelElementRef:0}),n.Fb(2048,[[2,4]],r.a,null,[v.a]),(l()(),n.qb(51,0,[[7,0]],1,2,"vcl-select-list-label",[],[[2,"dropdown-item-label",null]],null,null,m.e,m.b)),n.pb(52,49152,null,0,v.b,[],null,null),(l()(),n.Ib(-1,0,["Japan"])),(l()(),n.qb(54,0,null,0,6,"vcl-select-list-item",[["value","ch"]],[[2,"dropdown-item",null],[1,"role",0],[1,"tabindex",0],[2,"disabled",null],[2,"highlighted",null],[2,"selected",null]],[[null,"click"],[null,"focus"],[null,"blur"],[null,"keypress"]],(function(l,s,a){var e=!0;return"click"===s&&(e=!1!==n.Bb(l,55).onClick()&&e),"focus"===s&&(e=!1!==n.Bb(l,55).onFocus()&&e),"blur"===s&&(e=!1!==n.Bb(l,55).onBlur()&&e),"keypress"===s&&(e=!1!==n.Bb(l,55).onKeypress(a)&&e),e}),m.d,m.a)),n.pb(55,49152,[[1,4]],1,v.a,[r.b,n.k],{value:[0,"value"]},null),n.Gb(603979776,8,{_labelElementRef:0}),n.Fb(2048,[[2,4]],r.a,null,[v.a]),(l()(),n.qb(58,0,[[8,0]],1,2,"vcl-select-list-label",[],[[2,"dropdown-item-label",null]],null,null,m.e,m.b)),n.pb(59,49152,null,0,v.b,[],null,null),(l()(),n.Ib(-1,0,["China"])),(l()(),n.qb(61,0,null,0,6,"vcl-select-list-item",[["value","th"]],[[2,"dropdown-item",null],[1,"role",0],[1,"tabindex",0],[2,"disabled",null],[2,"highlighted",null],[2,"selected",null]],[[null,"click"],[null,"focus"],[null,"blur"],[null,"keypress"]],(function(l,s,a){var e=!0;return"click"===s&&(e=!1!==n.Bb(l,62).onClick()&&e),"focus"===s&&(e=!1!==n.Bb(l,62).onFocus()&&e),"blur"===s&&(e=!1!==n.Bb(l,62).onBlur()&&e),"keypress"===s&&(e=!1!==n.Bb(l,62).onKeypress(a)&&e),e}),m.d,m.a)),n.pb(62,49152,[[1,4]],1,v.a,[r.b,n.k],{value:[0,"value"]},null),n.Gb(603979776,9,{_labelElementRef:0}),n.Fb(2048,[[2,4]],r.a,null,[v.a]),(l()(),n.qb(65,0,[[9,0]],1,2,"vcl-select-list-label",[],[[2,"dropdown-item-label",null]],null,null,m.e,m.b)),n.pb(66,49152,null,0,v.b,[],null,null),(l()(),n.Ib(-1,0,["Thailand"])),(l()(),n.Ib(68,null,[" Value: "," "])),(l()(),n.qb(69,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),n.Ib(-1,null,["multi-select"])),(l()(),n.qb(71,0,null,null,65,"vcl-select-list",[["selectionMode","multiple"]],[[1,"id",0],[2,"dropdown",null],[2,"open",null],[2,"error",null]],[[null,"valueChange"]],(function(l,s,a){var n=!0;return"valueChange"===s&&(n=!1!==(l.component.value2=a)&&n),n}),b.b,b.a)),n.Fb(6144,null,i.c,null,[h.a]),n.pb(73,1228800,null,2,h.a,[n.h,[2,o.n],[2,i.b],[2,i.a]],{selectionMode:[0,"selectionMode"],value:[1,"value"]},{valueChange:"valueChange"}),n.Gb(603979776,10,{_items:1}),n.Gb(603979776,11,{_content:1}),n.Fb(2048,null,r.b,null,[h.a]),(l()(),n.qb(77,0,null,0,3,"vcl-select-list-header",[],[[2,"dropdown-item-group-header",null]],null,null,d.b,d.a)),n.pb(78,49152,null,0,g.a,[],null,null),n.Fb(2048,[[11,4]],r.a,null,[g.a]),(l()(),n.Ib(-1,0,["Europe"])),(l()(),n.qb(81,0,null,0,9,"vcl-select-list-item",[["value","gr"]],[[2,"dropdown-item",null],[1,"role",0],[1,"tabindex",0],[2,"disabled",null],[2,"highlighted",null],[2,"selected",null]],[[null,"click"],[null,"focus"],[null,"blur"],[null,"keypress"]],(function(l,s,a){var e=!0;return"click"===s&&(e=!1!==n.Bb(l,82).onClick()&&e),"focus"===s&&(e=!1!==n.Bb(l,82).onFocus()&&e),"blur"===s&&(e=!1!==n.Bb(l,82).onBlur()&&e),"keypress"===s&&(e=!1!==n.Bb(l,82).onKeypress(a)&&e),e}),m.d,m.a)),n.pb(82,49152,[[10,4]],1,v.a,[r.b,n.k],{value:[0,"value"]},null),n.Gb(603979776,12,{_labelElementRef:0}),n.Fb(2048,[[11,4]],r.a,null,[v.a]),(l()(),n.qb(85,0,[[12,0]],1,2,"vcl-select-list-label",[],[[2,"dropdown-item-label",null]],null,null,m.e,m.b)),n.pb(86,49152,null,0,v.b,[],null,null),(l()(),n.Ib(-1,0,["Greece"])),(l()(),n.qb(88,0,null,2,2,"vcl-select-list-sublabel",[],[[2,"dropdown-item-sub-label",null]],null,null,m.f,m.c)),n.pb(89,49152,null,0,v.c,[],null,null),(l()(),n.Ib(-1,0,["A country in southeastern Europe with thousands of islands throughout the Aegean and Ionian seas"])),(l()(),n.qb(91,0,null,0,6,"vcl-select-list-item",[["value","fr"]],[[2,"dropdown-item",null],[1,"role",0],[1,"tabindex",0],[2,"disabled",null],[2,"highlighted",null],[2,"selected",null]],[[null,"click"],[null,"focus"],[null,"blur"],[null,"keypress"]],(function(l,s,a){var e=!0;return"click"===s&&(e=!1!==n.Bb(l,92).onClick()&&e),"focus"===s&&(e=!1!==n.Bb(l,92).onFocus()&&e),"blur"===s&&(e=!1!==n.Bb(l,92).onBlur()&&e),"keypress"===s&&(e=!1!==n.Bb(l,92).onKeypress(a)&&e),e}),m.d,m.a)),n.pb(92,49152,[[10,4]],1,v.a,[r.b,n.k],{value:[0,"value"]},null),n.Gb(603979776,13,{_labelElementRef:0}),n.Fb(2048,[[11,4]],r.a,null,[v.a]),(l()(),n.qb(95,0,[[13,0]],1,2,"vcl-select-list-label",[],[[2,"dropdown-item-label",null]],null,null,m.e,m.b)),n.pb(96,49152,null,0,v.b,[],null,null),(l()(),n.Ib(-1,0,["France"])),(l()(),n.qb(98,0,null,0,6,"vcl-select-list-item",[["value","de"]],[[2,"dropdown-item",null],[1,"role",0],[1,"tabindex",0],[2,"disabled",null],[2,"highlighted",null],[2,"selected",null]],[[null,"click"],[null,"focus"],[null,"blur"],[null,"keypress"]],(function(l,s,a){var e=!0;return"click"===s&&(e=!1!==n.Bb(l,99).onClick()&&e),"focus"===s&&(e=!1!==n.Bb(l,99).onFocus()&&e),"blur"===s&&(e=!1!==n.Bb(l,99).onBlur()&&e),"keypress"===s&&(e=!1!==n.Bb(l,99).onKeypress(a)&&e),e}),m.d,m.a)),n.pb(99,49152,[[10,4]],1,v.a,[r.b,n.k],{value:[0,"value"]},null),n.Gb(603979776,14,{_labelElementRef:0}),n.Fb(2048,[[11,4]],r.a,null,[v.a]),(l()(),n.qb(102,0,[[14,0]],1,2,"vcl-select-list-label",[],[[2,"dropdown-item-label",null]],null,null,m.e,m.b)),n.pb(103,49152,null,0,v.b,[],null,null),(l()(),n.Ib(-1,0,["Germany"])),(l()(),n.qb(105,0,null,0,6,"vcl-select-list-item",[["value","gb"]],[[2,"dropdown-item",null],[1,"role",0],[1,"tabindex",0],[2,"disabled",null],[2,"highlighted",null],[2,"selected",null]],[[null,"click"],[null,"focus"],[null,"blur"],[null,"keypress"]],(function(l,s,a){var e=!0;return"click"===s&&(e=!1!==n.Bb(l,106).onClick()&&e),"focus"===s&&(e=!1!==n.Bb(l,106).onFocus()&&e),"blur"===s&&(e=!1!==n.Bb(l,106).onBlur()&&e),"keypress"===s&&(e=!1!==n.Bb(l,106).onKeypress(a)&&e),e}),m.d,m.a)),n.pb(106,49152,[[10,4]],1,v.a,[r.b,n.k],{value:[0,"value"]},null),n.Gb(603979776,15,{_labelElementRef:0}),n.Fb(2048,[[11,4]],r.a,null,[v.a]),(l()(),n.qb(109,0,[[15,0]],1,2,"vcl-select-list-label",[],[[2,"dropdown-item-label",null]],null,null,m.e,m.b)),n.pb(110,49152,null,0,v.b,[],null,null),(l()(),n.Ib(-1,0,["The United Kingdom of Great Britain and Northern Ireland"])),(l()(),n.qb(112,0,null,0,3,"vcl-select-list-header",[],[[2,"dropdown-item-group-header",null]],null,null,d.b,d.a)),n.pb(113,49152,null,0,g.a,[],null,null),n.Fb(2048,[[11,4]],r.a,null,[g.a]),(l()(),n.Ib(-1,0,["Asia"])),(l()(),n.qb(116,0,null,0,6,"vcl-select-list-item",[["value","jp"]],[[2,"dropdown-item",null],[1,"role",0],[1,"tabindex",0],[2,"disabled",null],[2,"highlighted",null],[2,"selected",null]],[[null,"click"],[null,"focus"],[null,"blur"],[null,"keypress"]],(function(l,s,a){var e=!0;return"click"===s&&(e=!1!==n.Bb(l,117).onClick()&&e),"focus"===s&&(e=!1!==n.Bb(l,117).onFocus()&&e),"blur"===s&&(e=!1!==n.Bb(l,117).onBlur()&&e),"keypress"===s&&(e=!1!==n.Bb(l,117).onKeypress(a)&&e),e}),m.d,m.a)),n.pb(117,49152,[[10,4]],1,v.a,[r.b,n.k],{value:[0,"value"]},null),n.Gb(603979776,16,{_labelElementRef:0}),n.Fb(2048,[[11,4]],r.a,null,[v.a]),(l()(),n.qb(120,0,[[16,0]],1,2,"vcl-select-list-label",[],[[2,"dropdown-item-label",null]],null,null,m.e,m.b)),n.pb(121,49152,null,0,v.b,[],null,null),(l()(),n.Ib(-1,0,["Japan"])),(l()(),n.qb(123,0,null,0,6,"vcl-select-list-item",[["value","ch"]],[[2,"dropdown-item",null],[1,"role",0],[1,"tabindex",0],[2,"disabled",null],[2,"highlighted",null],[2,"selected",null]],[[null,"click"],[null,"focus"],[null,"blur"],[null,"keypress"]],(function(l,s,a){var e=!0;return"click"===s&&(e=!1!==n.Bb(l,124).onClick()&&e),"focus"===s&&(e=!1!==n.Bb(l,124).onFocus()&&e),"blur"===s&&(e=!1!==n.Bb(l,124).onBlur()&&e),"keypress"===s&&(e=!1!==n.Bb(l,124).onKeypress(a)&&e),e}),m.d,m.a)),n.pb(124,49152,[[10,4]],1,v.a,[r.b,n.k],{value:[0,"value"]},null),n.Gb(603979776,17,{_labelElementRef:0}),n.Fb(2048,[[11,4]],r.a,null,[v.a]),(l()(),n.qb(127,0,[[17,0]],1,2,"vcl-select-list-label",[],[[2,"dropdown-item-label",null]],null,null,m.e,m.b)),n.pb(128,49152,null,0,v.b,[],null,null),(l()(),n.Ib(-1,0,["China"])),(l()(),n.qb(130,0,null,0,6,"vcl-select-list-item",[["value","th"]],[[2,"dropdown-item",null],[1,"role",0],[1,"tabindex",0],[2,"disabled",null],[2,"highlighted",null],[2,"selected",null]],[[null,"click"],[null,"focus"],[null,"blur"],[null,"keypress"]],(function(l,s,a){var e=!0;return"click"===s&&(e=!1!==n.Bb(l,131).onClick()&&e),"focus"===s&&(e=!1!==n.Bb(l,131).onFocus()&&e),"blur"===s&&(e=!1!==n.Bb(l,131).onBlur()&&e),"keypress"===s&&(e=!1!==n.Bb(l,131).onKeypress(a)&&e),e}),m.d,m.a)),n.pb(131,49152,[[10,4]],1,v.a,[r.b,n.k],{value:[0,"value"]},null),n.Gb(603979776,18,{_labelElementRef:0}),n.Fb(2048,[[11,4]],r.a,null,[v.a]),(l()(),n.qb(134,0,[[18,0]],1,2,"vcl-select-list-label",[],[[2,"dropdown-item-label",null]],null,null,m.e,m.b)),n.pb(135,49152,null,0,v.b,[],null,null),(l()(),n.Ib(-1,0,["Thailand"])),(l()(),n.Ib(137,null,[" Value: ","\n"]))],(function(l,s){var a=s.component;l(s,4,0,a.value1),l(s,13,0,"gr"),l(s,23,0,"fr"),l(s,30,0,"de"),l(s,37,0,"gb"),l(s,48,0,"jp"),l(s,55,0,"ch"),l(s,62,0,"th"),l(s,73,0,"multiple",a.value2),l(s,82,0,"gr"),l(s,92,0,"fr"),l(s,99,0,"de"),l(s,106,0,"gb"),l(s,117,0,"jp"),l(s,124,0,"ch"),l(s,131,0,"th")}),(function(l,s){var a=s.component;l(s,2,0,n.Bb(s,4).elementId,n.Bb(s,4)._hostClasses,n.Bb(s,4)._hostClasses,n.Bb(s,4).hasError),l(s,8,0,n.Bb(s,9).classVCLDropdownItemGroupHeader),l(s,12,0,n.Bb(s,13)._hostClasses,n.Bb(s,13).attrRole,n.Bb(s,13).attrTabindex,n.Bb(s,13).isDisabled,n.Bb(s,13).isHighlighted,n.Bb(s,13).isSelected),l(s,16,0,n.Bb(s,17)._hostClasses),l(s,19,0,n.Bb(s,20)._hostClasses),l(s,22,0,n.Bb(s,23)._hostClasses,n.Bb(s,23).attrRole,n.Bb(s,23).attrTabindex,n.Bb(s,23).isDisabled,n.Bb(s,23).isHighlighted,n.Bb(s,23).isSelected),l(s,26,0,n.Bb(s,27)._hostClasses),l(s,29,0,n.Bb(s,30)._hostClasses,n.Bb(s,30).attrRole,n.Bb(s,30).attrTabindex,n.Bb(s,30).isDisabled,n.Bb(s,30).isHighlighted,n.Bb(s,30).isSelected),l(s,33,0,n.Bb(s,34)._hostClasses),l(s,36,0,n.Bb(s,37)._hostClasses,n.Bb(s,37).attrRole,n.Bb(s,37).attrTabindex,n.Bb(s,37).isDisabled,n.Bb(s,37).isHighlighted,n.Bb(s,37).isSelected),l(s,40,0,n.Bb(s,41)._hostClasses),l(s,43,0,n.Bb(s,44).classVCLDropdownItemGroupHeader),l(s,47,0,n.Bb(s,48)._hostClasses,n.Bb(s,48).attrRole,n.Bb(s,48).attrTabindex,n.Bb(s,48).isDisabled,n.Bb(s,48).isHighlighted,n.Bb(s,48).isSelected),l(s,51,0,n.Bb(s,52)._hostClasses),l(s,54,0,n.Bb(s,55)._hostClasses,n.Bb(s,55).attrRole,n.Bb(s,55).attrTabindex,n.Bb(s,55).isDisabled,n.Bb(s,55).isHighlighted,n.Bb(s,55).isSelected),l(s,58,0,n.Bb(s,59)._hostClasses),l(s,61,0,n.Bb(s,62)._hostClasses,n.Bb(s,62).attrRole,n.Bb(s,62).attrTabindex,n.Bb(s,62).isDisabled,n.Bb(s,62).isHighlighted,n.Bb(s,62).isSelected),l(s,65,0,n.Bb(s,66)._hostClasses),l(s,68,0,a.value1),l(s,71,0,n.Bb(s,73).elementId,n.Bb(s,73)._hostClasses,n.Bb(s,73)._hostClasses,n.Bb(s,73).hasError),l(s,77,0,n.Bb(s,78).classVCLDropdownItemGroupHeader),l(s,81,0,n.Bb(s,82)._hostClasses,n.Bb(s,82).attrRole,n.Bb(s,82).attrTabindex,n.Bb(s,82).isDisabled,n.Bb(s,82).isHighlighted,n.Bb(s,82).isSelected),l(s,85,0,n.Bb(s,86)._hostClasses),l(s,88,0,n.Bb(s,89)._hostClasses),l(s,91,0,n.Bb(s,92)._hostClasses,n.Bb(s,92).attrRole,n.Bb(s,92).attrTabindex,n.Bb(s,92).isDisabled,n.Bb(s,92).isHighlighted,n.Bb(s,92).isSelected),l(s,95,0,n.Bb(s,96)._hostClasses),l(s,98,0,n.Bb(s,99)._hostClasses,n.Bb(s,99).attrRole,n.Bb(s,99).attrTabindex,n.Bb(s,99).isDisabled,n.Bb(s,99).isHighlighted,n.Bb(s,99).isSelected),l(s,102,0,n.Bb(s,103)._hostClasses),l(s,105,0,n.Bb(s,106)._hostClasses,n.Bb(s,106).attrRole,n.Bb(s,106).attrTabindex,n.Bb(s,106).isDisabled,n.Bb(s,106).isHighlighted,n.Bb(s,106).isSelected),l(s,109,0,n.Bb(s,110)._hostClasses),l(s,112,0,n.Bb(s,113).classVCLDropdownItemGroupHeader),l(s,116,0,n.Bb(s,117)._hostClasses,n.Bb(s,117).attrRole,n.Bb(s,117).attrTabindex,n.Bb(s,117).isDisabled,n.Bb(s,117).isHighlighted,n.Bb(s,117).isSelected),l(s,120,0,n.Bb(s,121)._hostClasses),l(s,123,0,n.Bb(s,124)._hostClasses,n.Bb(s,124).attrRole,n.Bb(s,124).attrTabindex,n.Bb(s,124).isDisabled,n.Bb(s,124).isHighlighted,n.Bb(s,124).isSelected),l(s,127,0,n.Bb(s,128)._hostClasses),l(s,130,0,n.Bb(s,131)._hostClasses,n.Bb(s,131).attrRole,n.Bb(s,131).attrTabindex,n.Bb(s,131).isDisabled,n.Bb(s,131).isHighlighted,n.Bb(s,131).isSelected),l(s,134,0,n.Bb(s,135)._hostClasses),l(s,137,0,a.value2)}))}var f=n.mb("ng-component",e,(function(l){return n.Kb(0,[(l()(),n.qb(0,0,null,null,1,"ng-component",[],null,null,null,B,j)),n.pb(1,49152,null,0,e,[],null,null)],null,null)}),{},{},[]),k=a("SVse"),y=a("POq0"),C=a("dy60"),w=a("tfYh"),q=a("QQfA"),_=a("IP0z"),F=a("zMNK"),I=a("p/eS"),z=a("2FIb"),G=a("61Fc"),x=a("g2Nb"),R=a("hyVG"),D=a("LpWs"),E=a("/+dc"),T=a("/HVE"),K=a("hOhj"),S=a("mbT9"),A=a("hUuX"),H=a("rr8R"),V=a("iA4x"),U=a("EFFP"),N=a("iInd"),L=a("PNUx");a.d(s,"SelectListDemoModuleNgFactory",(function(){return M}));var M=n.nb(c,[],(function(l){return n.yb([n.zb(512,n.j,n.Z,[[8,[p.a,u.a,f]],[3,n.j],n.w]),n.zb(4608,k.n,k.m,[n.t,[2,k.A]]),n.zb(4608,o.v,o.v,[]),n.zb(4608,y.a,y.a,[]),n.zb(4608,C.a,C.a,[[2,w.a]]),n.zb(4608,q.a,q.a,[q.h,q.c,n.j,q.f,q.d,n.q,n.y,k.d,_.b,[2,k.h]]),n.zb(5120,q.i,q.j,[q.a]),n.zb(1073742336,k.c,k.c,[]),n.zb(1073742336,o.u,o.u,[]),n.zb(1073742336,o.l,o.l,[]),n.zb(1073742336,F.e,F.e,[]),n.zb(1073742336,y.b,y.b,[]),n.zb(1073742336,I.a,I.a,[]),n.zb(1073742336,z.a,z.a,[]),n.zb(1073742336,G.c,G.c,[]),n.zb(1073742336,x.a,x.a,[]),n.zb(1073742336,R.a,R.a,[]),n.zb(1073742336,D.c,D.c,[]),n.zb(1073742336,E.a,E.a,[]),n.zb(1073742336,_.a,_.a,[]),n.zb(1073742336,T.b,T.b,[]),n.zb(1073742336,K.c,K.c,[]),n.zb(1073742336,q.e,q.e,[]),n.zb(1073742336,S.a,S.a,[]),n.zb(1073742336,A.b,A.b,[]),n.zb(1073742336,H.a,H.a,[]),n.zb(1073742336,V.a,V.a,[]),n.zb(1073742336,U.a,U.a,[]),n.zb(1073742336,N.q,N.q,[[2,N.v],[2,N.m]]),n.zb(1073742336,c,c,[]),n.zb(256,i.a,S.b,[]),n.zb(1024,N.i,(function(){return[[{path:"",component:L.a,data:t}]]}),[])])}))},"5iVd":function(l,s){l.exports='<span class="hljs-keyword">import</span> { Component, ViewChild, ElementRef } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/core\'</span>;\n\n<span class="hljs-meta">@Component</span>({\n  templateUrl: <span class="hljs-string">\'demo.component.html\'</span>\n})\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> SelectListDemoComponent {\n  value1 = <span class="hljs-string">\'gr\'</span>;\n  value2 = [];\n}\n'},sAGU:function(l,s){l.exports='<span class="hljs-tag">&lt;<span class="hljs-name">h3</span>&gt;</span>Basic vcl-select-list<span class="hljs-tag">&lt;/<span class="hljs-name">h3</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">vcl-select-list</span> [(<span class="hljs-attr">value</span>)]=<span class="hljs-string">"value1"</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">vcl-select-list-header</span>&gt;</span>Europe<span class="hljs-tag">&lt;/<span class="hljs-name">vcl-select-list-header</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">vcl-select-list-item</span> <span class="hljs-attr">value</span>=<span class="hljs-string">"gr"</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">vcl-select-list-label</span>&gt;</span>Greece<span class="hljs-tag">&lt;/<span class="hljs-name">vcl-select-list-label</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">vcl-select-list-sublabel</span>&gt;</span>A country in southeastern Europe with thousands of islands throughout the Aegean and Ionian seas<span class="hljs-tag">&lt;/<span class="hljs-name">vcl-select-list-sublabel</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">vcl-select-list-item</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">vcl-select-list-item</span> <span class="hljs-attr">value</span>=<span class="hljs-string">"fr"</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">vcl-select-list-label</span>&gt;</span>France<span class="hljs-tag">&lt;/<span class="hljs-name">vcl-select-list-label</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">vcl-select-list-item</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">vcl-select-list-item</span> <span class="hljs-attr">value</span>=<span class="hljs-string">"de"</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">vcl-select-list-label</span>&gt;</span>Germany<span class="hljs-tag">&lt;/<span class="hljs-name">vcl-select-list-label</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">vcl-select-list-item</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">vcl-select-list-item</span> <span class="hljs-attr">value</span>=<span class="hljs-string">"gb"</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">vcl-select-list-label</span>&gt;</span>The United Kingdom of Great Britain and Northern Ireland<span class="hljs-tag">&lt;/<span class="hljs-name">vcl-select-list-label</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">vcl-select-list-item</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">vcl-select-list-header</span>&gt;</span>Asia<span class="hljs-tag">&lt;/<span class="hljs-name">vcl-select-list-header</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">vcl-select-list-item</span> <span class="hljs-attr">value</span>=<span class="hljs-string">"jp"</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">vcl-select-list-label</span>&gt;</span>Japan<span class="hljs-tag">&lt;/<span class="hljs-name">vcl-select-list-label</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">vcl-select-list-item</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">vcl-select-list-item</span> <span class="hljs-attr">value</span>=<span class="hljs-string">"ch"</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">vcl-select-list-label</span>&gt;</span>China<span class="hljs-tag">&lt;/<span class="hljs-name">vcl-select-list-label</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">vcl-select-list-item</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">vcl-select-list-item</span> <span class="hljs-attr">value</span>=<span class="hljs-string">"th"</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">vcl-select-list-label</span>&gt;</span>Thailand<span class="hljs-tag">&lt;/<span class="hljs-name">vcl-select-list-label</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">vcl-select-list-item</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">vcl-select-list</span>&gt;</span>\n\nValue: {{value1}}\n\n<span class="hljs-tag">&lt;<span class="hljs-name">h3</span>&gt;</span>multi-select<span class="hljs-tag">&lt;/<span class="hljs-name">h3</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">vcl-select-list</span> [(<span class="hljs-attr">value</span>)]=<span class="hljs-string">"value2"</span> <span class="hljs-attr">selectionMode</span>=<span class="hljs-string">"multiple"</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">vcl-select-list-header</span>&gt;</span>Europe<span class="hljs-tag">&lt;/<span class="hljs-name">vcl-select-list-header</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">vcl-select-list-item</span> <span class="hljs-attr">value</span>=<span class="hljs-string">"gr"</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">vcl-select-list-label</span>&gt;</span>Greece<span class="hljs-tag">&lt;/<span class="hljs-name">vcl-select-list-label</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">vcl-select-list-sublabel</span>&gt;</span>A country in southeastern Europe with thousands of islands throughout the Aegean and Ionian seas<span class="hljs-tag">&lt;/<span class="hljs-name">vcl-select-list-sublabel</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">vcl-select-list-item</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">vcl-select-list-item</span> <span class="hljs-attr">value</span>=<span class="hljs-string">"fr"</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">vcl-select-list-label</span>&gt;</span>France<span class="hljs-tag">&lt;/<span class="hljs-name">vcl-select-list-label</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">vcl-select-list-item</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">vcl-select-list-item</span> <span class="hljs-attr">value</span>=<span class="hljs-string">"de"</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">vcl-select-list-label</span>&gt;</span>Germany<span class="hljs-tag">&lt;/<span class="hljs-name">vcl-select-list-label</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">vcl-select-list-item</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">vcl-select-list-item</span> <span class="hljs-attr">value</span>=<span class="hljs-string">"gb"</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">vcl-select-list-label</span>&gt;</span>The United Kingdom of Great Britain and Northern Ireland<span class="hljs-tag">&lt;/<span class="hljs-name">vcl-select-list-label</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">vcl-select-list-item</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">vcl-select-list-header</span>&gt;</span>Asia<span class="hljs-tag">&lt;/<span class="hljs-name">vcl-select-list-header</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">vcl-select-list-item</span> <span class="hljs-attr">value</span>=<span class="hljs-string">"jp"</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">vcl-select-list-label</span>&gt;</span>Japan<span class="hljs-tag">&lt;/<span class="hljs-name">vcl-select-list-label</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">vcl-select-list-item</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">vcl-select-list-item</span> <span class="hljs-attr">value</span>=<span class="hljs-string">"ch"</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">vcl-select-list-label</span>&gt;</span>China<span class="hljs-tag">&lt;/<span class="hljs-name">vcl-select-list-label</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">vcl-select-list-item</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">vcl-select-list-item</span> <span class="hljs-attr">value</span>=<span class="hljs-string">"th"</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">vcl-select-list-label</span>&gt;</span>Thailand<span class="hljs-tag">&lt;/<span class="hljs-name">vcl-select-list-label</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">vcl-select-list-item</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">vcl-select-list</span>&gt;</span>\n\nValue: {{value2}}\n'}}]);