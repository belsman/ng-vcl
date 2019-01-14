(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{"2HKw":function(l,n){l.exports='<h1 id="vcl-tab-nav">vcl-tab-nav</h1>\n<p>The tab nav allows to organize content in tabs.<br>Only one tab is visible at a given time.</p>\n<h2 id="usage">Usage</h2>\n<pre class="hljs"><span class="hljs-keyword">import</span> { VCLTabNavModule } <span class="hljs-keyword">from</span> <span class="hljs-string">&apos;ng-vcl&apos;</span>;\n\n@NgModule({\n  <span class="hljs-attr">imports</span>: [ VCLTabNavModule ],\n  ...\n})\n<span class="hljs-keyword">export</span> <span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">AppComponent</span> </span>{}</pre>\n<pre class="hljs"><span class="hljs-tag">&lt;<span class="hljs-name">vcl-tab-nav</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">vcl-tab</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">ng-template</span> <span class="hljs-attr">vcl-tab-label</span>&gt;</span>Tab1<span class="hljs-tag">&lt;/<span class="hljs-name">ng-template</span>&gt;</span>\n    Content1\n  <span class="hljs-tag">&lt;/<span class="hljs-name">vcl-tab</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">vcl-tab</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">ng-template</span> <span class="hljs-attr">vcl-tab-label</span>&gt;</span>Tab2<span class="hljs-tag">&lt;/<span class="hljs-name">ng-template</span>&gt;</span>\n    Content2\n  <span class="hljs-tag">&lt;/<span class="hljs-name">vcl-tab</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">vcl-tab</span> [<span class="hljs-attr">disabled</span>]=<span class="hljs-string">&quot;true&quot;</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">ng-template</span> <span class="hljs-attr">vcl-tab-label</span>&gt;</span>Tab3 (disabled)<span class="hljs-tag">&lt;/<span class="hljs-name">ng-template</span>&gt;</span>\n    Content3\n  <span class="hljs-tag">&lt;/<span class="hljs-name">vcl-tab</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">vcl-tab-nav</span>&gt;</span></pre>\n<h3 id="api">API</h3>\n<h4 id="vcl-tab-nav-attributes">vcl-tab-nav attributes</h4>\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Type</th>\n<th>Default</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody><tr>\n<td><code>selectedTabIndex</code> <em>(1)</em></td>\n<td>number</td>\n<td>0</td>\n<td>The index of the currently visible tab</td>\n</tr>\n<tr>\n<td><code>borders</code></td>\n<td>boolean</td>\n<td>false</td>\n<td>Enables borders for the tab-nav</td>\n</tr>\n<tr>\n<td><code>layout</code></td>\n<td>string</td>\n<td></td>\n<td>The layout: <code>null</code>, <code>&quot;left&quot;</code> or <code>&quot;right&quot;</code></td>\n</tr>\n<tr>\n<td><code>tabbableClass</code></td>\n<td>string</td>\n<td></td>\n<td>Modifier classes for vclTabbable</td>\n</tr>\n<tr>\n<td><code>tabsClass</code></td>\n<td>string</td>\n<td></td>\n<td>Modifier classes for vclTabs</td>\n</tr>\n<tr>\n<td><code>tabContentClass</code></td>\n<td>string</td>\n<td></td>\n<td>Modifier classes for vclTabContent</td>\n</tr>\n</tbody></table>\n<h4 id="vcl-tab-attributes">vcl-tab attributes</h4>\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Type</th>\n<th>Default</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody><tr>\n<td><code>disabled</code></td>\n<td>boolean</td>\n<td>false</td>\n<td>Disables the tab when true</td>\n</tr>\n<tr>\n<td><code>tabClass</code></td>\n<td>string</td>\n<td></td>\n<td>Modifier classes for vclTab</td>\n</tr>\n</tbody></table>\n<p><em>(1) Supports Two-way binding</em></p>\n'},CSfU:function(l,n,s){"use strict";s.r(n);var a=s("CcnG"),t=function(){return function(){this.tabIndex=0}}(),p={demo:function(){return{label:"Tab Navigation",tabs:{Demo:t,"README.md":{type:"md",content:s("2HKw")},"demo.component.html":{type:"pre",content:s("yw+f")},"demo.component.ts":{type:"pre",content:s("JAqy")}}}}},e=function(){return function(){}}(),c=s("pMnS"),b=s("8Ip6"),u=s("G6uX"),h=s("5cNt"),g=a.qb({encapsulation:2,styles:[],data:{}});function r(l){return a.Lb(0,[(l()(),a.Jb(-1,null,["Tab1"]))],null,null)}function j(l){return a.Lb(0,[(l()(),a.Jb(-1,null,["Tab2"]))],null,null)}function o(l){return a.Lb(0,[(l()(),a.Jb(-1,null,["Tab3 disabled"]))],null,null)}function d(l){return a.Lb(0,[(l()(),a.Jb(-1,null,["Tab1"]))],null,null)}function m(l){return a.Lb(0,[(l()(),a.Jb(-1,null,["Tab2"]))],null,null)}function v(l){return a.Lb(0,[(l()(),a.Jb(-1,null,["Tab1"]))],null,null)}function i(l){return a.Lb(0,[(l()(),a.Jb(-1,null,["Tab2"]))],null,null)}function C(l){return a.Lb(0,[(l()(),a.Jb(-1,null,["Tab1"]))],null,null)}function f(l){return a.Lb(0,[(l()(),a.Jb(-1,null,["Tab2"]))],null,null)}function T(l){return a.Lb(0,[(l()(),a.Jb(-1,null,["Tab1"]))],null,null)}function y(l){return a.Lb(0,[(l()(),a.Jb(-1,null,["Tab2"]))],null,null)}function J(l){return a.Lb(0,[(l()(),a.sb(0,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),a.Jb(-1,null,["Default"])),(l()(),a.sb(2,0,null,null,20,"vcl-tab-nav",[],null,null,null,u.Lb,u.G)),a.rb(3,1228800,null,1,h.nc,[],null,null),a.Hb(603979776,1,{tabs:1}),(l()(),a.sb(5,0,null,0,5,"vcl-tab",[],null,null,null,u.Kb,u.F)),a.rb(6,49152,[[1,4]],1,h.mc,[],null,null),a.Hb(335544320,2,{label:0}),(l()(),a.jb(0,[[2,2]],0,1,null,r)),a.rb(9,16384,null,0,h.lc,[],null,null),(l()(),a.Jb(-1,0,[" Content1 "])),(l()(),a.sb(11,0,null,0,5,"vcl-tab",[],null,null,null,u.Kb,u.F)),a.rb(12,49152,[[1,4]],1,h.mc,[],null,null),a.Hb(335544320,3,{label:0}),(l()(),a.jb(0,[[3,2]],0,1,null,j)),a.rb(15,16384,null,0,h.lc,[],null,null),(l()(),a.Jb(-1,0,[" Content2 "])),(l()(),a.sb(17,0,null,0,5,"vcl-tab",[],null,null,null,u.Kb,u.F)),a.rb(18,49152,[[1,4]],1,h.mc,[],{disabled:[0,"disabled"]},null),a.Hb(335544320,4,{label:0}),(l()(),a.jb(0,[[4,2]],0,1,null,o)),a.rb(21,16384,null,0,h.lc,[],null,null),(l()(),a.Jb(-1,0,[" Content3 "])),(l()(),a.sb(23,0,null,null,0,"hr",[],null,null,null,null,null)),(l()(),a.sb(24,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),a.Jb(-1,null,['With layout="right"'])),(l()(),a.sb(26,0,null,null,14,"vcl-tab-nav",[["layout","right"],["tabContentClass","vclSpan-70p"],["tabsClass","vclSpan-30p"]],null,null,null,u.Lb,u.G)),a.rb(27,1228800,null,1,h.nc,[],{layout:[0,"layout"],tabsClass:[1,"tabsClass"],tabContentClass:[2,"tabContentClass"]},null),a.Hb(603979776,5,{tabs:1}),(l()(),a.sb(29,0,null,0,5,"vcl-tab",[],null,null,null,u.Kb,u.F)),a.rb(30,49152,[[5,4]],1,h.mc,[],null,null),a.Hb(335544320,6,{label:0}),(l()(),a.jb(0,[[6,2]],0,1,null,d)),a.rb(33,16384,null,0,h.lc,[],null,null),(l()(),a.Jb(-1,0,[" Content1 "])),(l()(),a.sb(35,0,null,0,5,"vcl-tab",[],null,null,null,u.Kb,u.F)),a.rb(36,49152,[[5,4]],1,h.mc,[],null,null),a.Hb(335544320,7,{label:0}),(l()(),a.jb(0,[[7,2]],0,1,null,m)),a.rb(39,16384,null,0,h.lc,[],null,null),(l()(),a.Jb(-1,0,[" Content2 "])),(l()(),a.sb(41,0,null,null,0,"hr",[],null,null,null,null,null)),(l()(),a.sb(42,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),a.Jb(-1,null,['With layout="left"'])),(l()(),a.sb(44,0,null,null,14,"vcl-tab-nav",[["layout","left"],["tabContentClass","vclSpan-70p"],["tabsClass","vclSpan-30p"]],null,null,null,u.Lb,u.G)),a.rb(45,1228800,null,1,h.nc,[],{layout:[0,"layout"],tabsClass:[1,"tabsClass"],tabContentClass:[2,"tabContentClass"]},null),a.Hb(603979776,8,{tabs:1}),(l()(),a.sb(47,0,null,0,5,"vcl-tab",[],null,null,null,u.Kb,u.F)),a.rb(48,49152,[[8,4]],1,h.mc,[],null,null),a.Hb(335544320,9,{label:0}),(l()(),a.jb(0,[[9,2]],0,1,null,v)),a.rb(51,16384,null,0,h.lc,[],null,null),(l()(),a.Jb(-1,0,[" Content1 "])),(l()(),a.sb(53,0,null,0,5,"vcl-tab",[],null,null,null,u.Kb,u.F)),a.rb(54,49152,[[8,4]],1,h.mc,[],null,null),a.Hb(335544320,10,{label:0}),(l()(),a.jb(0,[[10,2]],0,1,null,i)),a.rb(57,16384,null,0,h.lc,[],null,null),(l()(),a.Jb(-1,0,[" Content2 "])),(l()(),a.sb(59,0,null,null,0,"hr",[],null,null,null,null,null)),(l()(),a.sb(60,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),a.Jb(-1,null,["With borders=true"])),(l()(),a.sb(62,0,null,null,14,"vcl-tab-nav",[["borders","true"]],null,null,null,u.Lb,u.G)),a.rb(63,1228800,null,1,h.nc,[],{borders:[0,"borders"]},null),a.Hb(603979776,11,{tabs:1}),(l()(),a.sb(65,0,null,0,5,"vcl-tab",[],null,null,null,u.Kb,u.F)),a.rb(66,49152,[[11,4]],1,h.mc,[],null,null),a.Hb(335544320,12,{label:0}),(l()(),a.jb(0,[[12,2]],0,1,null,C)),a.rb(69,16384,null,0,h.lc,[],null,null),(l()(),a.Jb(-1,0,[" Content1 "])),(l()(),a.sb(71,0,null,0,5,"vcl-tab",[],null,null,null,u.Kb,u.F)),a.rb(72,49152,[[11,4]],1,h.mc,[],null,null),a.Hb(335544320,13,{label:0}),(l()(),a.jb(0,[[13,2]],0,1,null,f)),a.rb(75,16384,null,0,h.lc,[],null,null),(l()(),a.Jb(-1,0,[" Content2 "])),(l()(),a.sb(77,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),a.Jb(-1,null,["Shared content template"])),(l()(),a.sb(79,0,null,null,13,"vcl-tab-nav",[],null,[[null,"selectedTabIndexChange"]],function(l,n,s){var a=!0;return"selectedTabIndexChange"===n&&(a=!1!==(l.component.tabIndex=s)&&a),a},u.Lb,u.G)),a.rb(80,1228800,null,1,h.nc,[],{selectedTabIndex:[0,"selectedTabIndex"]},{selectedTabIndexChange:"selectedTabIndexChange"}),a.Hb(603979776,14,{tabs:1}),(l()(),a.sb(82,0,null,0,4,"vcl-tab",[],null,null,null,u.Kb,u.F)),a.rb(83,49152,[[14,4]],1,h.mc,[],null,null),a.Hb(335544320,15,{label:0}),(l()(),a.jb(0,[[15,2]],0,1,null,T)),a.rb(86,16384,null,0,h.lc,[],null,null),(l()(),a.sb(87,0,null,0,4,"vcl-tab",[],null,null,null,u.Kb,u.F)),a.rb(88,49152,[[14,4]],1,h.mc,[],null,null),a.Hb(335544320,16,{label:0}),(l()(),a.jb(0,[[16,2]],0,1,null,y)),a.rb(91,16384,null,0,h.lc,[],null,null),(l()(),a.Jb(92,0,[" Shared Content Tab: ","\n"]))],function(l,n){var s=n.component;l(n,18,0,!0),l(n,27,0,"right","vclSpan-30p","vclSpan-70p"),l(n,45,0,"left","vclSpan-30p","vclSpan-70p"),l(n,63,0,"true"),l(n,80,0,s.tabIndex)},function(l,n){l(n,92,0,n.component.tabIndex)})}function w(l){return a.Lb(0,[(l()(),a.sb(0,0,null,null,1,"ng-component",[],null,null,null,J,g)),a.rb(1,49152,null,0,t,[],null,null)],null,null)}var x=a.ob("ng-component",t,w,{},{},[]),L=s("Ip0R"),I=s("2FIb"),S=s("ZYCi"),H=s("PNUx");s.d(n,"TabNavDemoModuleNgFactory",function(){return A});var A=a.pb(e,[],function(l){return a.zb([a.Ab(512,a.j,a.eb,[[8,[c.a,b.a,x]],[3,a.j],a.y]),a.Ab(4608,L.n,L.m,[a.v,[2,L.y]]),a.Ab(1073742336,L.c,L.c,[]),a.Ab(1073742336,h.fc,h.fc,[]),a.Ab(1073742336,h.Yb,h.Yb,[]),a.Ab(1073742336,I.a,I.a,[]),a.Ab(1073742336,S.m,S.m,[[2,S.s],[2,S.l]]),a.Ab(1073742336,e,e,[]),a.Ab(1024,S.j,function(){return[[{path:"",component:H.a,data:p}]]},[])])})},JAqy:function(l,n){l.exports='<span class="hljs-keyword">import</span> { Component } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/core\'</span>;\n\n<span class="hljs-meta">@Component</span>({\n  templateUrl: <span class="hljs-string">\'demo.component.html\'</span>\n})\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> TabNavDemoComponent {\n  tabIndex: <span class="hljs-built_in">number</span> = <span class="hljs-number">0</span>;\n}\n'},"yw+f":function(l,n){l.exports='<span class="hljs-tag">&lt;<span class="hljs-name">h3</span>&gt;</span>Default<span class="hljs-tag">&lt;/<span class="hljs-name">h3</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">vcl-tab-nav</span> &gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">vcl-tab</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">ng-template</span> <span class="hljs-attr">vcl-tab-label</span>&gt;</span>Tab1<span class="hljs-tag">&lt;/<span class="hljs-name">ng-template</span>&gt;</span>\n    Content1\n  <span class="hljs-tag">&lt;/<span class="hljs-name">vcl-tab</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">vcl-tab</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">ng-template</span> <span class="hljs-attr">vcl-tab-label</span>&gt;</span>Tab2<span class="hljs-tag">&lt;/<span class="hljs-name">ng-template</span>&gt;</span>\n    Content2\n  <span class="hljs-tag">&lt;/<span class="hljs-name">vcl-tab</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">vcl-tab</span> [<span class="hljs-attr">disabled</span>]=<span class="hljs-string">"true"</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">ng-template</span> <span class="hljs-attr">vcl-tab-label</span>&gt;</span>Tab3 disabled<span class="hljs-tag">&lt;/<span class="hljs-name">ng-template</span>&gt;</span>\n    Content3\n  <span class="hljs-tag">&lt;/<span class="hljs-name">vcl-tab</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">vcl-tab-nav</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">hr</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">h3</span>&gt;</span>With layout="right"<span class="hljs-tag">&lt;/<span class="hljs-name">h3</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">vcl-tab-nav</span> <span class="hljs-attr">layout</span>=<span class="hljs-string">"right"</span> <span class="hljs-attr">tabContentClass</span>=<span class="hljs-string">"vclSpan-70p"</span> <span class="hljs-attr">tabsClass</span>=<span class="hljs-string">"vclSpan-30p"</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">vcl-tab</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">ng-template</span> <span class="hljs-attr">vcl-tab-label</span>&gt;</span>Tab1<span class="hljs-tag">&lt;/<span class="hljs-name">ng-template</span>&gt;</span>\n    Content1\n  <span class="hljs-tag">&lt;/<span class="hljs-name">vcl-tab</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">vcl-tab</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">ng-template</span> <span class="hljs-attr">vcl-tab-label</span>&gt;</span>Tab2<span class="hljs-tag">&lt;/<span class="hljs-name">ng-template</span>&gt;</span>\n    Content2\n  <span class="hljs-tag">&lt;/<span class="hljs-name">vcl-tab</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">vcl-tab-nav</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">hr</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">h3</span>&gt;</span>With layout="left"<span class="hljs-tag">&lt;/<span class="hljs-name">h3</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">vcl-tab-nav</span> <span class="hljs-attr">layout</span>=<span class="hljs-string">"left"</span> <span class="hljs-attr">tabContentClass</span>=<span class="hljs-string">"vclSpan-70p"</span> <span class="hljs-attr">tabsClass</span>=<span class="hljs-string">"vclSpan-30p"</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">vcl-tab</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">ng-template</span> <span class="hljs-attr">vcl-tab-label</span>&gt;</span>Tab1<span class="hljs-tag">&lt;/<span class="hljs-name">ng-template</span>&gt;</span>\n    Content1\n  <span class="hljs-tag">&lt;/<span class="hljs-name">vcl-tab</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">vcl-tab</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">ng-template</span> <span class="hljs-attr">vcl-tab-label</span>&gt;</span>Tab2<span class="hljs-tag">&lt;/<span class="hljs-name">ng-template</span>&gt;</span>\n    Content2\n  <span class="hljs-tag">&lt;/<span class="hljs-name">vcl-tab</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">vcl-tab-nav</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">hr</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">h3</span>&gt;</span>With borders=true<span class="hljs-tag">&lt;/<span class="hljs-name">h3</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">vcl-tab-nav</span> <span class="hljs-attr">borders</span>=<span class="hljs-string">true</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">vcl-tab</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">ng-template</span> <span class="hljs-attr">vcl-tab-label</span>&gt;</span>Tab1<span class="hljs-tag">&lt;/<span class="hljs-name">ng-template</span>&gt;</span>\n    Content1\n  <span class="hljs-tag">&lt;/<span class="hljs-name">vcl-tab</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">vcl-tab</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">ng-template</span> <span class="hljs-attr">vcl-tab-label</span>&gt;</span>Tab2<span class="hljs-tag">&lt;/<span class="hljs-name">ng-template</span>&gt;</span>\n    Content2\n  <span class="hljs-tag">&lt;/<span class="hljs-name">vcl-tab</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">vcl-tab-nav</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">h3</span>&gt;</span>Shared content template<span class="hljs-tag">&lt;/<span class="hljs-name">h3</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">vcl-tab-nav</span> [(<span class="hljs-attr">selectedTabIndex</span>)]=<span class="hljs-string">"tabIndex"</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">vcl-tab</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">ng-template</span> <span class="hljs-attr">vcl-tab-label</span>&gt;</span>Tab1<span class="hljs-tag">&lt;/<span class="hljs-name">ng-template</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">vcl-tab</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">vcl-tab</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">ng-template</span> <span class="hljs-attr">vcl-tab-label</span>&gt;</span>Tab2<span class="hljs-tag">&lt;/<span class="hljs-name">ng-template</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">vcl-tab</span>&gt;</span>\n  Shared Content Tab: {{tabIndex}}\n<span class="hljs-tag">&lt;/<span class="hljs-name">vcl-tab-nav</span>&gt;</span>\n'}}]);