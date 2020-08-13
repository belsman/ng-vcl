(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{jtrS:function(s,a,n){"use strict";n.r(a),n.d(a,"demo",(function(){return g})),n.d(a,"DrawerDemoModule",(function(){return j}));var t=n("ofXK"),l=n("tyNb"),e=n("19H1"),p=n("2FIb"),r=n("fXoL"),c=n("6B8K"),o=n("Pheu"),h=n("4RH/");let d=(()=>{class s{constructor(){this.opened=!0}}return s.\u0275fac=function(a){return new(a||s)},s.\u0275cmp=r.Gb({type:s,selectors:[["ng-component"]],decls:32,vars:1,consts:[["vcl-button","",3,"click"],[2,"width","20em","height","20em","background-color","#b47c17"],[2,"width","5em","background-color","#166a24",3,"opened"],["mode","side",2,"width","5em","background-color","#166a24"],["drawer1","vclDrawer"],["mode","over",2,"width","5em","background-color","#166a24"],["drawer2","vclDrawer"]],template:function(s,a){if(1&s){const s=r.Tb();r.Sb(0,"button",0),r.ac("click",(function(){return a.opened=!a.opened})),r.yc(1,"Toggle drawer"),r.Rb(),r.Nb(2,"br"),r.Nb(3,"br"),r.Sb(4,"vcl-drawer-container",1),r.Sb(5,"vcl-drawer",2),r.yc(6," Drawer "),r.Rb(),r.yc(7," Content\n"),r.Rb(),r.Nb(8,"br"),r.Nb(9,"br"),r.Sb(10,"button",0),r.ac("click",(function(){return r.oc(s),r.nc(16).toggle()})),r.yc(11,"Toggle drawer"),r.Rb(),r.Nb(12,"br"),r.Nb(13,"br"),r.Sb(14,"vcl-drawer-container",1),r.Sb(15,"vcl-drawer",3,4),r.yc(17," Drawer "),r.Rb(),r.yc(18," Content\n"),r.Rb(),r.Nb(19,"br"),r.Nb(20,"br"),r.Sb(21,"button",0),r.ac("click",(function(){return r.oc(s),r.nc(27).toggle()})),r.yc(22,"Toggle drawer"),r.Rb(),r.Nb(23,"br"),r.Nb(24,"br"),r.Sb(25,"vcl-drawer-container",1),r.Sb(26,"vcl-drawer",5,6),r.yc(28," Drawer "),r.Rb(),r.yc(29," Content\n"),r.Rb(),r.Nb(30,"br"),r.Nb(31,"br")}2&s&&(r.Ab(5),r.ic("opened",a.opened))},directives:[c.b,o.a,h.a],encapsulation:2}),s})();function g(){return{label:"Drawer",tabs:{Demo:d,"README.md":{type:"md",content:'<h1 id="vcl-drawer">vcl-drawer</h1>\n<p>Sliding drawer with content area. In closed state, only the content area is visible.</p>\n<h2 id="usage">Usage</h2>\n<pre class="hljs">    <span class="hljs-tag">&lt;<span class="hljs-name">vcl-drawer-container</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">vcl-drawer</span> <span class="hljs-attr">mode</span>=<span class="hljs-string">&quot;side&quot;</span>&gt;</span>\n        Drawer\n      <span class="hljs-tag">&lt;/<span class="hljs-name">vcl-drawer</span>&gt;</span>\n      Content\n    <span class="hljs-tag">&lt;/<span class="hljs-name">vcl-drawer-container</span>&gt;</span></pre>\n<h3 id="drawer-modes">Drawer modes</h3>\n<p><code>side</code>: Drawer appears besides the content. The content is pushed away and shrinked to make space for the drawer.<br><code>over</code>: Drawer floats over the content. The content is covered by a backdrop.</p>\n<h3 id="opening-and-closing-the-drawer">Opening and closing the drawer</h3>\n<p>A drawer can be opened and closed with the <code>opened</code> property.</p>\n<p>The opened state can also be changed via the drawer instance.<br>It exposes a <code>open()</code>, <code>close()</code> and <code>toggle()</code> method.</p>\n<pre class="hljs">    <span class="hljs-tag">&lt;<span class="hljs-name">vcl-drawer-container</span> #<span class="hljs-attr">drawer</span>=<span class="hljs-string">&quot;vclDrawer&quot;</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">vcl-drawer</span>&gt;</span>...<span class="hljs-tag">&lt;/<span class="hljs-name">vcl-drawer</span>&gt;</span>\n      ...\n    <span class="hljs-tag">&lt;/<span class="hljs-name">vcl-drawer-container</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">button</span> (<span class="hljs-attr">click</span>)=<span class="hljs-string">&quot;drawer.toggle()&quot;</span>&gt;</span>Toggle<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span></pre>\n<h3 id="api">API</h3>\n<h4 id="attributes">Attributes</h4>\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Type</th>\n<th>Default</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody><tr>\n<td><code>position</code></td>\n<td>&apos;left  | &apos;right&apos;</td>\n<td>&apos;left&apos;</td>\n<td>Drawer position</td>\n</tr>\n<tr>\n<td><code>mode</code></td>\n<td>&apos;side  | &apos;over&apos;</td>\n<td>&apos;side&apos;</td>\n<td>Drawer mode</td>\n</tr>\n<tr>\n<td><code>opened</code></td>\n<td>boolean</td>\n<td><code>false</code></td>\n<td><code>true</code></td>\n</tr>\n</tbody></table>\n'},"demo.component.html":{type:"pre",content:n("mkHq")},"demo.component.ts":{type:"pre",content:n("pwqv")}}}}let j=(()=>{class s{}return s.\u0275mod=r.Kb({type:s}),s.\u0275inj=r.Jb({factory:function(a){return new(a||s)},imports:[[t.c,p.b,e.B,e.H,l.g.forChild([{path:"",component:p.a,data:{demo:g}}])]]}),s})()},mkHq:function(s,a){s.exports='\n\n<span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">vcl-button</span> (<span class="hljs-attr">click</span>)=<span class="hljs-string">"opened = !opened"</span>&gt;</span>Toggle drawer<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">vcl-drawer-container</span> <span class="hljs-attr">style</span>=<span class="hljs-string">"width: 20em; height: 20em; background-color: #b47c17"</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">vcl-drawer</span> [<span class="hljs-attr">opened</span>]=<span class="hljs-string">"opened"</span> <span class="hljs-attr">style</span>=<span class="hljs-string">"width: 5em; background-color: #166a24"</span> &gt;</span>\n    Drawer\n  <span class="hljs-tag">&lt;/<span class="hljs-name">vcl-drawer</span>&gt;</span>\n  Content\n<span class="hljs-tag">&lt;/<span class="hljs-name">vcl-drawer-container</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">vcl-button</span> (<span class="hljs-attr">click</span>)=<span class="hljs-string">"drawer1.toggle()"</span>&gt;</span>Toggle drawer<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">vcl-drawer-container</span> <span class="hljs-attr">style</span>=<span class="hljs-string">"width: 20em; height: 20em; background-color: #b47c17"</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">vcl-drawer</span> #<span class="hljs-attr">drawer1</span>=<span class="hljs-string">"vclDrawer"</span> <span class="hljs-attr">mode</span>=<span class="hljs-string">"side"</span> <span class="hljs-attr">style</span>=<span class="hljs-string">"width: 5em; background-color: #166a24"</span> &gt;</span>\n    Drawer\n  <span class="hljs-tag">&lt;/<span class="hljs-name">vcl-drawer</span>&gt;</span>\n  Content\n<span class="hljs-tag">&lt;/<span class="hljs-name">vcl-drawer-container</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">vcl-button</span> (<span class="hljs-attr">click</span>)=<span class="hljs-string">"drawer2.toggle()"</span>&gt;</span>Toggle drawer<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">vcl-drawer-container</span> <span class="hljs-attr">style</span>=<span class="hljs-string">"width: 20em; height: 20em; background-color: #b47c17"</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">vcl-drawer</span> #<span class="hljs-attr">drawer2</span>=<span class="hljs-string">"vclDrawer"</span> <span class="hljs-attr">mode</span>=<span class="hljs-string">"over"</span> <span class="hljs-attr">style</span>=<span class="hljs-string">"width: 5em; background-color: #166a24"</span> &gt;</span>\n    Drawer\n  <span class="hljs-tag">&lt;/<span class="hljs-name">vcl-drawer</span>&gt;</span>\n  Content\n<span class="hljs-tag">&lt;/<span class="hljs-name">vcl-drawer-container</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span>\n'},pwqv:function(s,a){s.exports='<span class="hljs-keyword">import</span> { Component } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/core\'</span>;\n\n<span class="hljs-meta">@Component</span>({\n  templateUrl: <span class="hljs-string">\'demo.component.html\'</span>\n})\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> DrawerDemoComponent {\n  opened = <span class="hljs-literal">true</span>;\n}\n'}}]);