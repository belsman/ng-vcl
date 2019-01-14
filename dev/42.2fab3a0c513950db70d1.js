(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{"/jZG":function(l,n){l.exports='<h1 id="vcl-table">vcl-table</h1>\n<p>Display tabular data.</p>\n<h2 id="usage">Usage</h2>\n<p>You can simply add directive to necessary element</p>\n<pre class="hljs"><span class="hljs-tag">&lt;<span class="hljs-name">table</span> <span class="hljs-attr">hover</span>&gt;</span>\n...\n<span class="hljs-tag">&lt;/<span class="hljs-name">table</span>&gt;</span></pre>\n<p>or pass parameter to toggle it behavior</p>\n<pre class="hljs"><span class="hljs-tag">&lt;<span class="hljs-name">table</span> [<span class="hljs-attr">hover</span>]=<span class="hljs-string">&quot;true&quot;</span>&gt;</span>\n...\n  <span class="hljs-tag">&lt;<span class="hljs-name">th</span> [<span class="hljs-attr">span</span>]=<span class="hljs-string">&quot;10&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">th</span>&gt;</span>\n...\n<span class="hljs-tag">&lt;/<span class="hljs-name">table</span>&gt;</span></pre>\n<h2 id="features">Features</h2>\n<table>\n<thead>\n<tr>\n<th>Selector</th>\n<th>Type</th>\n<th>Default</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody><tr>\n<td><code>hightlight</code></td>\n<td>boolean</td>\n<td>true</td>\n<td>Highlight single cells and columns.</td>\n</tr>\n<tr>\n<td><code>span</code></td>\n<td>number</td>\n<td>0</td>\n<td>Defines column width from <code>0</code> to <code>100</code> percents. Have to be used on the <code>th</code>s.</td>\n</tr>\n<tr>\n<td><code>sort</code></td>\n<td>boolean</td>\n<td>true</td>\n<td>Sortable columns are defined with the <code>sort</code> directive  on the respective <code>th</code>s. To handle sorting changes subscribe for <code>change</code> event <code>EventEmitter&lt;-1</code> | <code>0</code> | <code>1&gt;</code>. To add additional sort icon use <code>sort-icon</code> component withinside <code>th</code>s.</td>\n</tr>\n<tr>\n<td><code>selectable</code></td>\n<td>boolean</td>\n<td>true</td>\n<td>Rows can be styled to suggest their selectability (single or multiple) using the <code>selectable</code> directive, which makes rows show a pointer cursor on hover.</td>\n</tr>\n<tr>\n<td><code>selected</code></td>\n<td>boolean</td>\n<td>true</td>\n<td>Visually select individual cells and thus rows.</td>\n</tr>\n<tr>\n<td><code>disabled</code></td>\n<td>boolean</td>\n<td>true</td>\n<td>Visually disable row content.</td>\n</tr>\n<tr>\n<td><code>align-center</code></td>\n<td>boolean</td>\n<td>true</td>\n<td>Specifies the horizontal alignment of the <code>td</code>s or <code>table</code>s content to center</td>\n</tr>\n<tr>\n<td><code>align-right</code></td>\n<td>boolean</td>\n<td>true</td>\n<td>Specifies the horizontal alignment of the <code>td</code>s or <code>table</code>s content to right</td>\n</tr>\n<tr>\n<td><code>align-bottom</code></td>\n<td>boolean</td>\n<td>true</td>\n<td>Specifies the vertical alignment of the <code>td</code>s or <code>table</code>s content to bottom</td>\n</tr>\n<tr>\n<td><code>align-middle</code></td>\n<td>boolean</td>\n<td>true</td>\n<td>Specifies the vertical alignment of the <code>td</code>s or <code>table</code>s content to middle</td>\n</tr>\n<tr>\n<td><code>nowrap</code>, <code>overflow-ellipsis</code></td>\n<td>boolean</td>\n<td>true</td>\n<td>In conjunction with the fixed layout mode, this directive can be used to truncate all cell content which would span more than one line and show an ellipsis to indicate truncated content instead</td>\n</tr>\n<tr>\n<td><code>break-words</code></td>\n<td>boolean</td>\n<td>true</td>\n<td>Break words of textual cell content apart. This works best in combination with the <code>fixed</code> layout mode</td>\n</tr>\n</tbody></table>\n'},CZXK:function(l,n,s){"use strict";s.r(n);var a=s("CcnG"),t=function(){function l(){this.isSelected=!0,this.readMore=!0}return l.prototype.OnSortingDefaultColumn=function(l){this.defaultColumnSort=l},Object.defineProperty(l.prototype,"defaultColumnSortName",{get:function(){switch(this.defaultColumnSort){case-1:return"desc";case 1:return"asc";default:return"none"}},enumerable:!0,configurable:!0}),l}(),e={demo:function(){return{label:"Table",tabs:{Demo:t,"README.md":{type:"md",content:s("/jZG")},"demo.component.html":{type:"pre",content:s("JAhe")},"demo.component.ts":{type:"pre",content:s("ERjf")}}}}},p=function(){return function(){}}(),u=s("G6uX"),c=s("pMnS"),r=s("8Ip6"),o=s("5cNt"),h=s("Ip0R"),d=a.qb({encapsulation:2,styles:[],data:{}});function i(l){return a.Lb(0,[(l()(),a.sb(0,0,null,null,1,"a",[],null,[[null,"click"]],function(l,n,s){var a=!0;return"click"===n&&(a=0!=(l.component.readMore=!1)&&a),a},null,null)),(l()(),a.Jb(-1,null,["Read more"]))],null,null)}function g(l){return a.Lb(0,[(l()(),a.sb(0,0,null,null,116,"table",[["class","vclFixed vclVAlignMiddle vclRowHoverHighlight vclAltRowColor"],["vcl-table",""]],[[2,"vclTable",null]],null,null,null,null)),a.rb(1,540672,null,0,o.Ec,[a.G,a.k],null,null),(l()(),a.sb(2,0,null,null,23,"thead",[],null,null,null,null,null)),(l()(),a.sb(3,0,null,null,22,"tr",[],null,null,null,null,null)),(l()(),a.sb(4,0,null,null,7,"th",[["sort",""]],null,[[null,"change"],[null,"click"]],function(l,n,s){var t=!0,e=l.component;return"click"===n&&(t=!1!==a.Cb(l,6).OnChangeOrder()&&t),"change"===n&&(t=!1!==e.OnSortingDefaultColumn(s)&&t),t},null,null)),a.rb(5,1589248,null,0,o.Fc,[a.G,a.k],{width:[0,"width"]},null),a.rb(6,16384,null,1,o.Hc,[a.G,a.k],null,{change:"change"}),a.Hb(335544320,1,{sortIconComponent:0}),(l()(),a.sb(8,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),a.Jb(9,null,["Default Column (",")"])),(l()(),a.sb(10,0,null,null,1,"sort-icon",[],null,null,null,u.Vb,u.Q)),a.rb(11,49152,[[1,4]],0,o.Dc,[a.k,a.G],null,null),(l()(),a.sb(12,0,null,null,7,"th",[["sort",""]],null,[[null,"click"]],function(l,n,s){var t=!0;return"click"===n&&(t=!1!==a.Cb(l,14).OnChangeOrder()&&t),t},null,null)),a.rb(13,1589248,null,0,o.Fc,[a.G,a.k],{width:[0,"width"]},null),a.rb(14,16384,null,1,o.Hc,[a.G,a.k],null,null),a.Hb(335544320,2,{sortIconComponent:0}),(l()(),a.sb(16,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),a.Jb(-1,null,["Right aligned Column"])),(l()(),a.sb(18,0,null,null,1,"sort-icon",[],null,null,null,u.Vb,u.Q)),a.rb(19,49152,[[2,4]],0,o.Dc,[a.k,a.G],null,null),(l()(),a.sb(20,0,null,null,3,"th",[],null,null,null,null,null)),a.rb(21,1589248,null,0,o.Fc,[a.G,a.k],{width:[0,"width"]},null),(l()(),a.sb(22,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),a.Jb(-1,null,["Centered Column"])),(l()(),a.sb(24,0,null,null,1,"th",[],null,null,null,null,null)),a.rb(25,1589248,null,0,o.Fc,[a.G,a.k],{width:[0,"width"]},null),(l()(),a.sb(26,0,null,null,90,"tbody",[],null,null,null,null,null)),(l()(),a.sb(27,0,null,null,10,"tr",[],null,null,null,null,null)),(l()(),a.sb(28,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),a.Jb(-1,null,["Lorem ipsum"])),(l()(),a.sb(30,0,null,null,2,"td",[],null,null,null,null,null)),a.rb(31,540672,null,0,o.Mc,[a.G,a.k],{align:[0,"align"]},null),(l()(),a.Jb(-1,null,["11.000"])),(l()(),a.sb(33,0,null,null,2,"td",[["align-center",""]],null,null,null,null,null)),a.rb(34,540672,null,0,o.Lc,[a.G,a.k],{align:[0,"align"]},null),(l()(),a.Jb(-1,null,["Sent"])),(l()(),a.sb(36,0,null,null,1,"td",[["align-center",""]],null,null,null,null,null)),a.rb(37,540672,null,0,o.Lc,[a.G,a.k],{align:[0,"align"]},null),(l()(),a.sb(38,0,null,null,11,"tr",[],null,null,null,null,null)),(l()(),a.sb(39,0,null,null,2,"td",[["nowrap",""]],null,null,null,null,null)),a.rb(40,540672,null,0,o.Nc,[a.G,a.k],{nowrap:[0,"nowrap"]},null),(l()(),a.Jb(-1,null,["Consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."])),(l()(),a.sb(42,0,null,null,2,"td",[],null,null,null,null,null)),a.rb(43,540672,null,0,o.Mc,[a.G,a.k],{align:[0,"align"]},null),(l()(),a.Jb(-1,null,["11.000"])),(l()(),a.sb(45,0,null,null,2,"td",[["align-center",""]],null,null,null,null,null)),a.rb(46,540672,null,0,o.Lc,[a.G,a.k],{align:[0,"align"]},null),(l()(),a.Jb(-1,null,["Sent"])),(l()(),a.sb(48,0,null,null,1,"td",[["align-center",""]],null,null,null,null,null)),a.rb(49,540672,null,0,o.Lc,[a.G,a.k],{align:[0,"align"]},null),(l()(),a.sb(50,0,null,null,12,"tr",[],null,null,null,null,null)),(l()(),a.sb(51,0,null,null,3,"td",[],null,null,null,null,null)),(l()(),a.sb(52,0,null,null,1,"a",[["href","#table"]],null,null,null,null,null)),(l()(),a.Jb(-1,null,["Lorem ipsum dolor sit amet"])),(l()(),a.Jb(-1,null,[", Consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."])),(l()(),a.sb(55,0,null,null,2,"td",[],null,null,null,null,null)),a.rb(56,540672,null,0,o.Mc,[a.G,a.k],{align:[0,"align"]},null),(l()(),a.Jb(-1,null,["11.000"])),(l()(),a.sb(58,0,null,null,2,"td",[["align-center",""]],null,null,null,null,null)),a.rb(59,540672,null,0,o.Lc,[a.G,a.k],{align:[0,"align"]},null),(l()(),a.Jb(-1,null,["Sent"])),(l()(),a.sb(61,0,null,null,1,"td",[["align-center",""]],null,null,null,null,null)),a.rb(62,540672,null,0,o.Lc,[a.G,a.k],{align:[0,"align"]},null),(l()(),a.sb(63,0,null,null,14,"tr",[],null,null,null,null,null)),(l()(),a.sb(64,0,null,null,4,"td",[],null,null,null,null,null)),a.rb(65,540672,null,0,o.Oc,[a.G,a.k],{ellipsis:[0,"ellipsis"]},null),(l()(),a.jb(16777216,null,null,1,null,i)),a.rb(67,16384,null,0,h.l,[a.R,a.O],{ngIf:[0,"ngIf"]},null),(l()(),a.Jb(-1,null,[" Truncated content. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. "])),(l()(),a.sb(69,0,null,null,2,"td",[],null,null,null,null,null)),a.rb(70,540672,null,0,o.Mc,[a.G,a.k],{align:[0,"align"]},null),(l()(),a.Jb(-1,null,["11.000"])),(l()(),a.sb(72,0,null,null,3,"td",[["align-center",""],["hightlight",""]],null,null,null,null,null)),a.rb(73,540672,null,0,o.Gc,[a.G,a.k],{hightlight:[0,"hightlight"]},null),a.rb(74,540672,null,0,o.Lc,[a.G,a.k],{align:[0,"align"]},null),(l()(),a.Jb(-1,null,["N/A"])),(l()(),a.sb(76,0,null,null,1,"td",[["align-center",""]],null,null,null,null,null)),a.rb(77,540672,null,0,o.Lc,[a.G,a.k],{align:[0,"align"]},null),(l()(),a.sb(78,0,null,null,12,"tr",[["disabled",""]],null,null,null,null,null)),a.rb(79,540672,null,0,o.Kc,[a.G,a.k],{disabled:[0,"disabled"]},null),(l()(),a.sb(80,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),a.Jb(-1,null,["Disabled row."])),(l()(),a.sb(82,0,null,null,2,"td",[],null,null,null,null,null)),a.rb(83,540672,null,0,o.Mc,[a.G,a.k],{align:[0,"align"]},null),(l()(),a.Jb(-1,null,["11.000"])),(l()(),a.sb(85,0,null,null,3,"td",[["align-center",""],["hightlight",""]],null,null,null,null,null)),a.rb(86,540672,null,0,o.Gc,[a.G,a.k],{hightlight:[0,"hightlight"]},null),a.rb(87,540672,null,0,o.Lc,[a.G,a.k],{align:[0,"align"]},null),(l()(),a.Jb(-1,null,["On hold"])),(l()(),a.sb(89,0,null,null,1,"td",[["align-center",""]],null,null,null,null,null)),a.rb(90,540672,null,0,o.Lc,[a.G,a.k],{align:[0,"align"]},null),(l()(),a.sb(91,0,null,null,13,"tr",[["selectable",""]],null,[[null,"click"]],function(l,n,s){var a=!0,t=l.component;return"click"===n&&(a=0!=(t.isSelected=!t.isSelected)&&a),a},null,null)),a.rb(92,540672,null,0,o.Ic,[a.G,a.k],{selected:[0,"selected"]},null),a.rb(93,540672,null,0,o.Jc,[a.G,a.k],{selectable:[0,"selectable"]},null),(l()(),a.sb(94,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),a.Jb(-1,null,["Click to unselect"])),(l()(),a.sb(96,0,null,null,2,"td",[],null,null,null,null,null)),a.rb(97,540672,null,0,o.Mc,[a.G,a.k],{align:[0,"align"]},null),(l()(),a.Jb(-1,null,["11.000"])),(l()(),a.sb(99,0,null,null,3,"td",[["align-center",""],["hightlight",""]],null,null,null,null,null)),a.rb(100,540672,null,0,o.Gc,[a.G,a.k],{hightlight:[0,"hightlight"]},null),a.rb(101,540672,null,0,o.Lc,[a.G,a.k],{align:[0,"align"]},null),(l()(),a.Jb(-1,null,["N/A"])),(l()(),a.sb(103,0,null,null,1,"td",[["align-center",""]],null,null,null,null,null)),a.rb(104,540672,null,0,o.Lc,[a.G,a.k],{align:[0,"align"]},null),(l()(),a.sb(105,0,null,null,11,"tr",[],null,null,null,null,null)),(l()(),a.sb(106,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),a.Jb(-1,null,["Normal row."])),(l()(),a.sb(108,0,null,null,2,"td",[],null,null,null,null,null)),a.rb(109,540672,null,0,o.Mc,[a.G,a.k],{align:[0,"align"]},null),(l()(),a.Jb(-1,null,["11.000"])),(l()(),a.sb(111,0,null,null,3,"td",[["align-center",""],["hightlight",""]],null,null,null,null,null)),a.rb(112,540672,null,0,o.Gc,[a.G,a.k],{hightlight:[0,"hightlight"]},null),a.rb(113,540672,null,0,o.Lc,[a.G,a.k],{align:[0,"align"]},null),(l()(),a.Jb(-1,null,["On hold"])),(l()(),a.sb(115,0,null,null,1,"td",[["align-center",""]],null,null,null,null,null)),a.rb(116,540672,null,0,o.Lc,[a.G,a.k],{align:[0,"align"]},null)],function(l,n){var s=n.component;l(n,5,0,50),l(n,13,0,20),l(n,21,0,20),l(n,25,0,10),l(n,31,0,!0),l(n,34,0,""),l(n,37,0,""),l(n,40,0,""),l(n,43,0,!0),l(n,46,0,""),l(n,49,0,""),l(n,56,0,!0),l(n,59,0,""),l(n,62,0,""),l(n,65,0,s.readMore),l(n,67,0,s.readMore),l(n,70,0,!0),l(n,73,0,""),l(n,74,0,""),l(n,77,0,""),l(n,79,0,""),l(n,83,0,!0),l(n,86,0,""),l(n,87,0,""),l(n,90,0,""),l(n,92,0,s.isSelected),l(n,93,0,""),l(n,97,0,!0),l(n,100,0,""),l(n,101,0,""),l(n,104,0,""),l(n,109,0,!0),l(n,112,0,""),l(n,113,0,""),l(n,116,0,"")},function(l,n){var s=n.component;l(n,0,0,!0),l(n,9,0,s.defaultColumnSortName)})}function j(l){return a.Lb(0,[(l()(),a.sb(0,0,null,null,1,"ng-component",[],null,null,null,g,d)),a.rb(1,49152,null,0,t,[],null,null)],null,null)}var m=a.ob("ng-component",t,j,{},{},[]),b=s("2FIb"),k=s("ZYCi"),f=s("PNUx");s.d(n,"TableDemoModuleNgFactory",function(){return v});var v=a.pb(p,[],function(l){return a.zb([a.Ab(512,a.j,a.eb,[[8,[u.mc,c.a,r.a,m]],[3,a.j],a.y]),a.Ab(4608,h.n,h.m,[a.v,[2,h.y]]),a.Ab(1073742336,h.c,h.c,[]),a.Ab(1073742336,o.fc,o.fc,[]),a.Ab(1073742336,o.Yb,o.Yb,[]),a.Ab(1073742336,b.a,b.a,[]),a.Ab(1073742336,o.Zb,o.Zb,[]),a.Ab(1073742336,k.m,k.m,[[2,k.s],[2,k.l]]),a.Ab(1073742336,p,p,[]),a.Ab(1024,k.j,function(){return[[{path:"",component:f.a,data:e}]]},[])])})},ERjf:function(l,n){l.exports='<span class="hljs-keyword">import</span> { Component } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/core\'</span>;\n\n<span class="hljs-meta">@Component</span>({\n  templateUrl: <span class="hljs-string">\'./demo.component.html\'</span>,\n})\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> TableDemoComponent {\n  isSelected: <span class="hljs-built_in">boolean</span> = <span class="hljs-literal">true</span>;\n  defaultColumnSort: <span class="hljs-number">-1</span> | <span class="hljs-number">0</span> | <span class="hljs-number">1</span>;\n  readMore: <span class="hljs-built_in">boolean</span> = <span class="hljs-literal">true</span>;\n\n  OnSortingDefaultColumn(sort: <span class="hljs-number">-1</span> | <span class="hljs-number">0</span> | <span class="hljs-number">1</span>): <span class="hljs-built_in">void</span> {\n    <span class="hljs-keyword">this</span>.defaultColumnSort = sort;\n  }\n\n\n  <span class="hljs-keyword">get</span> defaultColumnSortName(): <span class="hljs-built_in">string</span> {\n    <span class="hljs-keyword">switch</span> (<span class="hljs-keyword">this</span>.defaultColumnSort) {\n      <span class="hljs-keyword">case</span> <span class="hljs-number">-1</span>: {\n        <span class="hljs-keyword">return</span> <span class="hljs-string">\'desc\'</span>;\n      }\n      <span class="hljs-keyword">case</span> <span class="hljs-number">1</span>: {\n        <span class="hljs-keyword">return</span> <span class="hljs-string">\'asc\'</span>;\n      }\n      <span class="hljs-keyword">default</span>: {\n        <span class="hljs-keyword">return</span> <span class="hljs-string">\'none\'</span>;\n      }\n    }\n  }\n\n\n\n}\n'},JAhe:function(l,n){l.exports='<span class="hljs-tag">&lt;<span class="hljs-name">table</span> <span class="hljs-attr">vcl-table</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"vclFixed vclVAlignMiddle vclRowHoverHighlight vclAltRowColor"</span> &gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">thead</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">tr</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">th</span> [<span class="hljs-attr">span</span>]=<span class="hljs-string">"50"</span> <span class="hljs-attr">sort</span> (<span class="hljs-attr">change</span>)=<span class="hljs-string">"OnSortingDefaultColumn($event)"</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">span</span>&gt;</span>Default Column ({{defaultColumnSortName}})<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">sort-icon</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">sort-icon</span>&gt;</span>\n      <span class="hljs-tag">&lt;/<span class="hljs-name">th</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">th</span> [<span class="hljs-attr">span</span>]=<span class="hljs-string">"20"</span> <span class="hljs-attr">sort</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">span</span>&gt;</span>Right aligned Column<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">sort-icon</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">sort-icon</span>&gt;</span>\n      <span class="hljs-tag">&lt;/<span class="hljs-name">th</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">th</span> [<span class="hljs-attr">span</span>]=<span class="hljs-string">"20"</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">span</span>&gt;</span>Centered Column<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>\n      <span class="hljs-tag">&lt;/<span class="hljs-name">th</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">th</span> [<span class="hljs-attr">span</span>]=<span class="hljs-string">"10"</span>&gt;</span>\n      <span class="hljs-tag">&lt;/<span class="hljs-name">th</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">tr</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">thead</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">tbody</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">tr</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span>Lorem ipsum<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">td</span> [<span class="hljs-attr">align-right</span>]=<span class="hljs-string">"true"</span>&gt;</span>11.000<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">td</span> <span class="hljs-attr">align-center</span>&gt;</span>Sent<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">td</span> <span class="hljs-attr">align-center</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">tr</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">tr</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">td</span> <span class="hljs-attr">nowrap</span>&gt;</span>Consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam\n        voluptua.<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">td</span> [<span class="hljs-attr">align-right</span>]=<span class="hljs-string">"true"</span>&gt;</span>11.000<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">td</span> <span class="hljs-attr">align-center</span>&gt;</span>Sent<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">td</span> <span class="hljs-attr">align-center</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">tr</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">tr</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">a</span> <span class="hljs-attr">href</span>=<span class="hljs-string">"#table"</span>&gt;</span>Lorem ipsum dolor sit amet<span class="hljs-tag">&lt;/<span class="hljs-name">a</span>&gt;</span>, Consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam\n        voluptua.<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">td</span> [<span class="hljs-attr">align-right</span>]=<span class="hljs-string">"true"</span>&gt;</span>11.000<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">td</span> <span class="hljs-attr">align-center</span>&gt;</span>Sent<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">td</span> <span class="hljs-attr">align-center</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">tr</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">tr</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">td</span> [<span class="hljs-attr">overflow-ellipsis</span>]=<span class="hljs-string">"readMore"</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">a</span> *<span class="hljs-attr">ngIf</span>=<span class="hljs-string">"readMore"</span> (<span class="hljs-attr">click</span>)=<span class="hljs-string">"readMore = false"</span>&gt;</span>Read more<span class="hljs-tag">&lt;/<span class="hljs-name">a</span>&gt;</span> Truncated content. Lorem ipsum dolor sit amet, consetetur\n        sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.\n        At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem\n        ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt\n        ut labore et dolore magna aliquyam erat, sed diam voluptua.\n      <span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">td</span> [<span class="hljs-attr">align-right</span>]=<span class="hljs-string">"true"</span>&gt;</span>11.000<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">td</span> <span class="hljs-attr">hightlight</span> <span class="hljs-attr">align-center</span>&gt;</span>N/A<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">td</span> <span class="hljs-attr">align-center</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">tr</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">tr</span> <span class="hljs-attr">disabled</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span>Disabled row.<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">td</span> [<span class="hljs-attr">align-right</span>]=<span class="hljs-string">"true"</span>&gt;</span>11.000<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">td</span> <span class="hljs-attr">hightlight</span> <span class="hljs-attr">align-center</span>&gt;</span>On hold<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">td</span> <span class="hljs-attr">align-center</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">tr</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">tr</span> <span class="hljs-attr">selectable</span> (<span class="hljs-attr">click</span>)=<span class="hljs-string">"isSelected = !isSelected"</span> [<span class="hljs-attr">selected</span>]=<span class="hljs-string">"isSelected"</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span>Click to unselect<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">td</span> [<span class="hljs-attr">align-right</span>]=<span class="hljs-string">"true"</span>&gt;</span>11.000<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">td</span> <span class="hljs-attr">hightlight</span> <span class="hljs-attr">align-center</span>&gt;</span>N/A<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">td</span> <span class="hljs-attr">align-center</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">tr</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">tr</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span>Normal row.<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">td</span> [<span class="hljs-attr">align-right</span>]=<span class="hljs-string">"true"</span>&gt;</span>11.000<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">td</span> <span class="hljs-attr">hightlight</span> <span class="hljs-attr">align-center</span>&gt;</span>On hold<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">td</span> <span class="hljs-attr">align-center</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">tr</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">tbody</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">table</span>&gt;</span>\n'}}]);