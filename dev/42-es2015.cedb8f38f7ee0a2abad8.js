(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{ITDi:function(s,a){s.exports='<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">style</span>=<span class="hljs-string">"display: flex; height:100px"</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">vclTooltip</span>=<span class="hljs-string">"Tooltip on the top"</span> <span class="hljs-attr">style</span>=<span class="hljs-string">"background-color:#E6E6E6;flex:1"</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>Tooltip on the top<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">vclTooltip</span>=<span class="hljs-string">"Tooltip on the right"</span> <span class="hljs-attr">vclTooltipPosition</span>=<span class="hljs-string">"right"</span> <span class="hljs-attr">style</span>=<span class="hljs-string">"background-color:#D8D8D8;flex:1"</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>Tooltip on the right<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">vclTooltip</span>=<span class="hljs-string">"Tooltip on the left"</span> <span class="hljs-attr">vclTooltipPosition</span>=<span class="hljs-string">"left"</span> <span class="hljs-attr">style</span>=<span class="hljs-string">"background-color:#BDBDBD;flex:1"</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>Tooltip on the left<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">vclTooltip</span>=<span class="hljs-string">"Tooltip on the bottom"</span> <span class="hljs-attr">vclTooltipPosition</span>=<span class="hljs-string">"bottom"</span> <span class="hljs-attr">style</span>=<span class="hljs-string">"background-color:#A4A4A4;flex:1"</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>Tooltip on the bottom<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">style</span>=<span class="hljs-string">"display: flex; height:100px; padding-top: 2em"</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">vclTooltip</span>=<span class="hljs-string">"Tooltip with no pointer arrow"</span> [<span class="hljs-attr">vclTooltipArrowPointer</span>]=<span class="hljs-string">"false"</span> <span class="hljs-attr">style</span>=<span class="hljs-string">"background-color:#E6E6E6;flex:1"</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>Tooltip with no pointer arrow<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">vclTooltip</span>=<span class="hljs-string">"Tooltip with delay before showing"</span> [<span class="hljs-attr">vclTooltipShowDelay</span>]=<span class="hljs-string">"500"</span> <span class="hljs-attr">style</span>=<span class="hljs-string">"background-color:#D8D8D8;flex:1"</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>Tooltip with delay before showing<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">vclTooltip</span>=<span class="hljs-string">"Tooltip with delay before hiding"</span> [<span class="hljs-attr">vclTooltipHideDelay</span>]=<span class="hljs-string">"500"</span> <span class="hljs-attr">style</span>=<span class="hljs-string">"background-color:#BDBDBD;flex:1"</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>Tooltip with delay before hiding<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> [<span class="hljs-attr">vclTooltip</span>]=<span class="hljs-string">"tt"</span> <span class="hljs-attr">style</span>=<span class="hljs-string">"background-color:#A4A4A4;flex:1"</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>Tooltip with rich content<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">vcl-tooltip</span> #<span class="hljs-attr">tt</span>=<span class="hljs-string">"vclTooltip"</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"row center"</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">img</span> <span class="hljs-attr">src</span>=<span class="hljs-string">"http://lorempixel.com/50/50/cats/"</span> /&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"gutter-margin-l-r"</span>&gt;</span>Tooltip with rich content <span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>\n      <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">vcl-tooltip</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n'},bEnq:function(s,a){s.exports='<span class="hljs-keyword">import</span> { Component } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/core\'</span>;\n\n<span class="hljs-meta">@Component</span>({\n    templateUrl: <span class="hljs-string">\'./demo.component.html\'</span>,\n    styles: [<span class="hljs-string">`p{ text-align:center;padding-top:30px}`</span>]\n})\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> ToolTipDemoComponent  {\n\n}\n'},dxku:function(s,a,n){"use strict";n.r(a);var t=n("tyNb"),l=n("ofXK"),p=n("19H1"),o=n("2FIb"),c=n("fXoL"),e=n("Oou1"),i=n("Ge1g");let h=(()=>{class s{}return s.\u0275fac=function(a){return new(a||s)},s.\u0275cmp=c.Gb({type:s,selectors:[["ng-component"]],decls:32,vars:4,consts:[[2,"display","flex","height","100px"],["vclTooltip","Tooltip on the top",2,"background-color","#E6E6E6","flex","1"],["vclTooltip","Tooltip on the right","vclTooltipPosition","right",2,"background-color","#D8D8D8","flex","1"],["vclTooltip","Tooltip on the left","vclTooltipPosition","left",2,"background-color","#BDBDBD","flex","1"],["vclTooltip","Tooltip on the bottom","vclTooltipPosition","bottom",2,"background-color","#A4A4A4","flex","1"],[2,"display","flex","height","100px","padding-top","2em"],["vclTooltip","Tooltip with no pointer arrow",2,"background-color","#E6E6E6","flex","1",3,"vclTooltipArrowPointer"],["vclTooltip","Tooltip with delay before showing",2,"background-color","#D8D8D8","flex","1",3,"vclTooltipShowDelay"],["vclTooltip","Tooltip with delay before hiding",2,"background-color","#BDBDBD","flex","1",3,"vclTooltipHideDelay"],[2,"background-color","#A4A4A4","flex","1",3,"vclTooltip"],["tt","vclTooltip"],[1,"row","center"],["src","http://lorempixel.com/50/50/cats/"],[1,"gutter-margin-l-r"]],template:function(s,a){if(1&s&&(c.Tb(0,"div",0),c.Tb(1,"div",1),c.Tb(2,"p"),c.Ac(3,"Tooltip on the top"),c.Rb(),c.Rb(),c.Tb(4,"div",2),c.Tb(5,"p"),c.Ac(6,"Tooltip on the right"),c.Rb(),c.Rb(),c.Tb(7,"div",3),c.Tb(8,"p"),c.Ac(9,"Tooltip on the left"),c.Rb(),c.Rb(),c.Tb(10,"div",4),c.Tb(11,"p"),c.Ac(12,"Tooltip on the bottom"),c.Rb(),c.Rb(),c.Rb(),c.Tb(13,"div",5),c.Tb(14,"div",6),c.Tb(15,"p"),c.Ac(16,"Tooltip with no pointer arrow"),c.Rb(),c.Rb(),c.Tb(17,"div",7),c.Tb(18,"p"),c.Ac(19,"Tooltip with delay before showing"),c.Rb(),c.Rb(),c.Tb(20,"div",8),c.Tb(21,"p"),c.Ac(22,"Tooltip with delay before hiding"),c.Rb(),c.Rb(),c.Tb(23,"div",9),c.Tb(24,"p"),c.Ac(25,"Tooltip with rich content"),c.Rb(),c.Tb(26,"vcl-tooltip",null,10),c.Tb(28,"div",11),c.Nb(29,"img",12),c.Tb(30,"span",13),c.Ac(31,"Tooltip with rich content "),c.Rb(),c.Rb(),c.Rb(),c.Rb(),c.Rb()),2&s){const s=c.oc(27);c.zb(14),c.jc("vclTooltipArrowPointer",!1),c.zb(3),c.jc("vclTooltipShowDelay",500),c.zb(3),c.jc("vclTooltipHideDelay",500),c.zb(3),c.jc("vclTooltip",s)}},directives:[e.a,i.a],styles:["p[_ngcontent-%COMP%]{ text-align:center;padding-top:30px}"]}),s})();function r(){return{label:"Tooltip",tabs:{Demo:h,"README.md":{type:"md",content:'<h1 id="vcl-tooltip">vcl-tooltip</h1>\n<p>The tooltip directive provides a message or rich content that is displayed when the user hovers an element.</p>\n<h2 id="usage">Usage</h2>\n<pre class="hljs"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">vclTooltip</span>=<span class="hljs-string">&quot;Tooltip message&quot;</span>&gt;</span>\n  ...\n<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></pre>\n<p>Default tooltip placement is at the <code>top</code> of target element. To change tooltip placement set <code>vclTooltipPosition</code> value to either <code>right</code>, <code>left</code> or <code>bottom</code>.</p>\n<pre class="hljs"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">vclTooltip</span>=<span class="hljs-string">&quot;Tooltip message&quot;</span> <span class="hljs-attr">vclTooltipPosition</span>=<span class="hljs-string">&quot;right&quot;</span>&gt;</span>\n  ...\n<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></pre>\n<p>You can also use rich content.</p>\n<pre class="hljs"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> [<span class="hljs-attr">vclTooltip</span>]=<span class="hljs-string">&quot;tt&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">vcl-tooltip</span> #<span class="hljs-attr">tt</span>=<span class="hljs-string">&quot;vclTooltip&quot;</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>My content<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">vcl-tooltip</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></pre>\n<h3 id="api">API</h3>\n<h4 id="vcltooltip-attributes">[vclTooltip] Attributes</h4>\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Type</th>\n<th>Default</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody><tr>\n<td><code>vclTooltip</code></td>\n<td>string</td>\n<td></td>\n<td>Content displayed within the tooltip</td>\n</tr>\n<tr>\n<td><code>vclTooltipPosition</code></td>\n<td>string</td>\n<td>top</td>\n<td>Placement of the tooltip</td>\n</tr>\n<tr>\n<td><code>vclTooltipArrowPointer</code></td>\n<td>boolean</td>\n<td>true</td>\n<td>Whether to show the tooltip&apos;s arrow pointer</td>\n</tr>\n<tr>\n<td><code>vclTooltipShowDelay</code></td>\n<td>number</td>\n<td>0</td>\n<td>Delay before showing the tooltip after hovering the element</td>\n</tr>\n<tr>\n<td><code>vclTooltipHideDelay</code></td>\n<td>number</td>\n<td>0</td>\n<td>Delay before hiding the tooltip after the element loses hover</td>\n</tr>\n</tbody></table>\n'},"demo.component.html":{type:"pre",content:n("ITDi")},"demo.component.ts":{type:"pre",content:n("bEnq")}}}}n.d(a,"demo",(function(){return r})),n.d(a,"ToolTipDemoModule",(function(){return g}));let g=(()=>{class s{}return s.\u0275mod=c.Kb({type:s}),s.\u0275inj=c.Jb({factory:function(a){return new(a||s)},imports:[[l.c,o.b,p.ib,t.g.forChild([{path:"",component:o.a,data:{demo:r}}])]]}),s})()}}]);