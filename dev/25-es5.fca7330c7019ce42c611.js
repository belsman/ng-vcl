function _classCallCheck(s,a){if(!(s instanceof a))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{"8Wny":function(s,a,n){"use strict";n.r(a);var l,p=n("ofXK"),c=n("tyNb"),t=n("19H1"),e=n("2FIb"),h=n("fXoL"),o=n("Vp9f"),r=n("9Rb9"),i=((l=function s(){_classCallCheck(this,s)}).\u0275fac=function(s){return new(s||l)},l.\u0275cmp=h.Gb({type:l,selectors:[["ng-component"]],decls:21,vars:2,consts:[["vclPrepend","","icon","fas:chevron-right"],["vclAppend","","icon","fas:chevron-right"],["vcl-icogram","","href","'https://github.com/ng-vcl/ng-vcl'","target","'_blank'"],["vclPrepend","","icon","fas:link"],["vcl-a-icogram","",3,"href","disabled"]],template:function(s,a){1&s&&(h.Sb(0,"vcl-icogram"),h.Nb(1,"vcl-icon",0),h.yc(2," icogram with accessible link\n"),h.Rb(),h.Nb(3,"br"),h.Nb(4,"br"),h.Sb(5,"vcl-icogram"),h.Nb(6,"vcl-icon",0),h.yc(7," prep/app icons "),h.Nb(8,"vcl-icon",1),h.Rb(),h.Nb(9,"br"),h.Nb(10,"br"),h.Sb(11,"a",2),h.Nb(12,"vcl-icon",3),h.yc(13," external link with appended icon\n"),h.Rb(),h.Nb(14,"br"),h.Nb(15,"br"),h.Sb(16,"a",4),h.Nb(17,"vcl-icon",3),h.yc(18," Disabled link\n"),h.Rb(),h.Nb(19,"br"),h.Nb(20,"br")),2&s&&(h.Ab(16),h.ic("href","this is not considered when the link is disabled",h.qc)("disabled",!0))},directives:[o.a,r.a,o.b],encapsulation:2}),l);function g(){return{label:"Icogram",tabs:{Demo:i,"README.md":{type:"md",content:'<h1 id="vcl-icogram">vcl-icogram</h1>\n<p>Combination of icon and text.<br>Icons can be prepended or appended to a textual label and can be sourced from icon<br>fonts.<br>Also supports the anchor tag</p>\n<h2 id="usage">Usage</h2>\n<pre class="hljs"><span class="hljs-tag">&lt;<span class="hljs-name">vcl-icogram</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">vcl-icon</span> <span class="hljs-attr">vclPrepend</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;fas:chevron-left&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vcl-icon</span>&gt;</span>\n  Label\n  <span class="hljs-tag">&lt;<span class="hljs-name">vcl-icon</span> <span class="hljs-attr">vclAppend</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;fas:chevron-right&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vcl-icon</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">vcl-icogram</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">a</span> <span class="hljs-attr">vcl-icogram</span>\n  [<span class="hljs-attr">href</span>]=<span class="hljs-string">&quot;&apos;https://github.com/ng-vcl/ng-vcl&apos;&quot;</span>\n  [<span class="hljs-attr">disabled</span>]=<span class="hljs-string">&quot;true&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">vcl-icon</span> <span class="hljs-attr">vclPrepend</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;fas:link&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vcl-icon</span>&gt;</span>\n  Link\n<span class="hljs-tag">&lt;/<span class="hljs-name">a</span>&gt;</span></pre>\n'},"demo.component.html":{type:"pre",content:n("A73y")},"demo.component.ts":{type:"pre",content:n("Q2Y1")}}}}n.d(a,"demo",(function(){return g})),n.d(a,"IcogramDemoModule",(function(){return m}));var j,m=((j=function s(){_classCallCheck(this,s)}).\u0275mod=h.Kb({type:j}),j.\u0275inj=h.Jb({factory:function(s){return new(s||j)},imports:[[p.c,e.b,t.O,t.P,c.g.forChild([{path:"",component:e.a,data:{demo:g}}])]]}),j)},A73y:function(s,a){s.exports='<span class="hljs-tag">&lt;<span class="hljs-name">vcl-icogram</span> &gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">vcl-icon</span> <span class="hljs-attr">vclPrepend</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">"fas:chevron-right"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vcl-icon</span>&gt;</span>\n  icogram with accessible link\n<span class="hljs-tag">&lt;/<span class="hljs-name">vcl-icogram</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">vcl-icogram</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">vcl-icon</span> <span class="hljs-attr">vclPrepend</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">"fas:chevron-right"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vcl-icon</span>&gt;</span>\n  prep/app icons\n  <span class="hljs-tag">&lt;<span class="hljs-name">vcl-icon</span> <span class="hljs-attr">vclAppend</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">"fas:chevron-right"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vcl-icon</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">vcl-icogram</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">a</span> <span class="hljs-attr">vcl-icogram</span> <span class="hljs-attr">href</span>=<span class="hljs-string">"\'https://github.com/ng-vcl/ng-vcl\'"</span> <span class="hljs-attr">target</span>=<span class="hljs-string">"\'_blank\'"</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">vcl-icon</span> <span class="hljs-attr">vclPrepend</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">"fas:link"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vcl-icon</span>&gt;</span>\n   external link with appended icon\n<span class="hljs-tag">&lt;/<span class="hljs-name">a</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span>\n  \n<span class="hljs-tag">&lt;<span class="hljs-name">a</span> <span class="hljs-attr">vcl-a-icogram</span>\n  [<span class="hljs-attr">href</span>]=<span class="hljs-string">"\'this is not considered when the link is disabled\'"</span>\n  [<span class="hljs-attr">disabled</span>]=<span class="hljs-string">"true"</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">vcl-icon</span> <span class="hljs-attr">vclPrepend</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">"fas:link"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vcl-icon</span>&gt;</span>\n  Disabled link\n<span class="hljs-tag">&lt;/<span class="hljs-name">a</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span>\n'},Q2Y1:function(s,a){s.exports='<span class="hljs-keyword">import</span> { Component, OnInit } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/core\'</span>;\n\n<span class="hljs-meta">@Component</span>({\n  templateUrl: <span class="hljs-string">\'demo.component.html\'</span>\n})\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> IcogramDemoComponent {\n\n}\n'}}]);