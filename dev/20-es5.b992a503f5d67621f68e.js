function _classCallCheck(s,a){if(!(s instanceof a))throw new TypeError("Cannot call a class as a function")}function _defineProperties(s,a){for(var n=0;n<a.length;n++){var l=a[n];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(s,l.key,l)}}function _createClass(s,a,n){return a&&_defineProperties(s.prototype,a),n&&_defineProperties(s,n),s}(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{fYpr:function(s,a){s.exports='\nIcon on the left\n<span class="hljs-tag">&lt;<span class="hljs-name">vcl-embedded-input-group</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">vcl-icon</span> <span class="hljs-attr">vclPrepend</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">"fas:search"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vcl-icon</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">input</span> <span class="hljs-attr">vclInput</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">"Postcode, City, Name of the Workshop"</span> /&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">vcl-embedded-input-group</span>&gt;</span>\n\nicon on the right\n<span class="hljs-tag">&lt;<span class="hljs-name">vcl-embedded-input-group</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">input</span> <span class="hljs-attr">vclInput</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">"Postcode, City, Name of the Workshop"</span> /&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">vcl-icon</span> <span class="hljs-attr">vclAppend</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">"fas:search"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vcl-icon</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">vcl-embedded-input-group</span>&gt;</span>\n\nButton on the right\n<span class="hljs-tag">&lt;<span class="hljs-name">vcl-embedded-input-group</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">input</span> <span class="hljs-attr">vclInput</span> /&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">vcl-square-button</span> <span class="hljs-attr">vclAppend</span> (<span class="hljs-attr">click</span>)=<span class="hljs-string">"someAction($event)"</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">vcl-icon</span> [<span class="hljs-attr">icon</span>]=<span class="hljs-string">"\'fas:times-circle\'"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vcl-icon</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">vcl-embedded-input-group</span>&gt;</span>\n\nIcon on the left and button on the right\n<span class="hljs-tag">&lt;<span class="hljs-name">vcl-embedded-input-group</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">vcl-icon</span> <span class="hljs-attr">vclPrepend</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">"fas:cog"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vcl-icon</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">input</span> <span class="hljs-attr">vclInput</span> /&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">vcl-square-button</span> <span class="hljs-attr">vclAppend</span> (<span class="hljs-attr">click</span>)=<span class="hljs-string">"someAction($event)"</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">vcl-icon</span> [<span class="hljs-attr">icon</span>]=<span class="hljs-string">"\'fas:times-circle\'"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vcl-icon</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">vcl-embedded-input-group</span>&gt;</span>\n\nButton on the left and right\n<span class="hljs-tag">&lt;<span class="hljs-name">vcl-embedded-input-group</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">vcl-square-button</span> <span class="hljs-attr">vclPrepend</span> (<span class="hljs-attr">click</span>)=<span class="hljs-string">"someAction($event)"</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">vcl-icon</span> [<span class="hljs-attr">icon</span>]=<span class="hljs-string">"\'fas:cog\'"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vcl-icon</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">input</span> <span class="hljs-attr">vclInput</span> /&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">vcl-square-button</span> <span class="hljs-attr">vclAppend</span> (<span class="hljs-attr">click</span>)=<span class="hljs-string">"someAction($event)"</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">vcl-icon</span> [<span class="hljs-attr">icon</span>]=<span class="hljs-string">"\'fas:times-circle\'"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vcl-icon</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">vcl-embedded-input-group</span>&gt;</span>\n\nCombined with Input-group\n<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"input-group"</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">vcl-embedded-input-group</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">vcl-icon</span> <span class="hljs-attr">vclPrepend</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">"fas:cog"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vcl-icon</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">input</span> <span class="hljs-attr">vclInput</span> /&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">vcl-square-button</span> <span class="hljs-attr">vclAppend</span> (<span class="hljs-attr">click</span>)=<span class="hljs-string">"someAction($event)"</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">vcl-icon</span> [<span class="hljs-attr">icon</span>]=<span class="hljs-string">"\'fas:times-circle\'"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vcl-icon</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">vcl-embedded-input-group</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"input-group-button"</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">vcl-button</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"button"</span> (<span class="hljs-attr">click</span>)=<span class="hljs-string">"someAction($event)"</span>&gt;</span>GO<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n'},nfPR:function(s,a){s.exports='<span class="hljs-keyword">import</span> { Component } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/core\'</span>;\n\n<span class="hljs-meta">@Component</span>({\n  templateUrl: <span class="hljs-string">\'demo.component.html\'</span>\n})\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> EmbeddedInputGroupDemoComponent {\n  someAction(event: <span class="hljs-built_in">any</span>): <span class="hljs-built_in">void</span> { <span class="hljs-built_in">console</span>.log(event); }\n}\n'},tCNH:function(s,a,n){"use strict";n.r(a);var l,t=n("ofXK"),p=n("tyNb"),c=n("19H1"),e=n("2FIb"),o=n("fXoL"),h=n("nj5o"),i=n("9Rb9"),r=n("LpWs"),j=n("1/Kn"),g=n("6B8K"),u=((l=function(){function s(){_classCallCheck(this,s)}return _createClass(s,[{key:"someAction",value:function(s){console.log(s)}}]),s}()).\u0275fac=function(s){return new(s||l)},l.\u0275cmp=o.Gb({type:l,selectors:[["ng-component"]],decls:36,vars:5,consts:[["vclPrepend","","icon","fas:search"],["vclInput","","placeholder","Postcode, City, Name of the Workshop"],["vclAppend","","icon","fas:search"],["vclInput",""],["vcl-square-button","","vclAppend","",3,"click"],[3,"icon"],["vclPrepend","","icon","fas:cog"],["vcl-square-button","","vclPrepend","",3,"click"],[1,"input-group"],[1,"input-group-button"],["vcl-button","",1,"button",3,"click"]],template:function(s,a){1&s&&(o.yc(0,"\nIcon on the left\n"),o.Sb(1,"vcl-embedded-input-group"),o.Nb(2,"vcl-icon",0),o.Nb(3,"input",1),o.Rb(),o.yc(4," icon on the right\n"),o.Sb(5,"vcl-embedded-input-group"),o.Nb(6,"input",1),o.Nb(7,"vcl-icon",2),o.Rb(),o.yc(8," Button on the right\n"),o.Sb(9,"vcl-embedded-input-group"),o.Nb(10,"input",3),o.Sb(11,"button",4),o.ac("click",(function(s){return a.someAction(s)})),o.Nb(12,"vcl-icon",5),o.Rb(),o.Rb(),o.yc(13," Icon on the left and button on the right\n"),o.Sb(14,"vcl-embedded-input-group"),o.Nb(15,"vcl-icon",6),o.Nb(16,"input",3),o.Sb(17,"button",4),o.ac("click",(function(s){return a.someAction(s)})),o.Nb(18,"vcl-icon",5),o.Rb(),o.Rb(),o.yc(19," Button on the left and right\n"),o.Sb(20,"vcl-embedded-input-group"),o.Sb(21,"button",7),o.ac("click",(function(s){return a.someAction(s)})),o.Nb(22,"vcl-icon",5),o.Rb(),o.Nb(23,"input",3),o.Sb(24,"button",4),o.ac("click",(function(s){return a.someAction(s)})),o.Nb(25,"vcl-icon",5),o.Rb(),o.Rb(),o.yc(26," Combined with Input-group\n"),o.Sb(27,"div",8),o.Sb(28,"vcl-embedded-input-group"),o.Nb(29,"vcl-icon",6),o.Nb(30,"input",3),o.Sb(31,"button",4),o.ac("click",(function(s){return a.someAction(s)})),o.Nb(32,"vcl-icon",5),o.Rb(),o.Rb(),o.Sb(33,"div",9),o.Sb(34,"button",10),o.ac("click",(function(s){return a.someAction(s)})),o.yc(35,"GO"),o.Rb(),o.Rb(),o.Rb()),2&s&&(o.Ab(12),o.ic("icon","fas:times-circle"),o.Ab(6),o.ic("icon","fas:times-circle"),o.Ab(4),o.ic("icon","fas:cog"),o.Ab(3),o.ic("icon","fas:times-circle"),o.Ab(7),o.ic("icon","fas:times-circle"))},directives:[h.a,i.a,r.b,j.b,r.a,g.b],encapsulation:2}),l);function m(){return{label:"Embedded Input Group",tabs:{Demo:u,"README.md":{type:"md",content:'<h1 id="vcl-embedded-input-group">vcl-embedded-input-group</h1>\n<p>Adds the possibility to prepend and append icons or buttons inside of input fields.</p>\n<h2 id="usage">Usage</h2>\n<pre class="hljs">\nInput with icon on the left\n<span class="hljs-tag">&lt;<span class="hljs-name">vcl-embedded-input-group</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">vcl-icon</span> <span class="hljs-attr">vclPrepend</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;fas:search&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vcl-icon</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">input</span> <span class="hljs-attr">vclInput</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;placeholder text&quot;</span> /&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">vcl-embedded-input-group</span>&gt;</span>\n\nInput with icon on the right\n<span class="hljs-tag">&lt;<span class="hljs-name">vcl-embedded-input-group</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">input</span> <span class="hljs-attr">vclInput</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;Postcode, City, Name of the Workshop&quot;</span> /&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">vcl-icon</span> <span class="hljs-attr">vclApppend</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;fas:times-circle&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vcl-icon</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">vcl-embedded-input-group</span>&gt;</span>\n\nInput with button on the right\n<span class="hljs-tag">&lt;<span class="hljs-name">vcl-embedded-input-group</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">input</span> <span class="hljs-attr">vclInput</span> /&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">vcl-square-button</span> <span class="hljs-attr">vclApppend</span> (<span class="hljs-attr">click</span>)=<span class="hljs-string">&quot;someAction($event)&quot;</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">vcl-icon</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;fas:times-circle&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vcl-icon</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">vcl-embedded-input-group</span>&gt;</span>\n\nInput with icon on the left and button on the right\n<span class="hljs-tag">&lt;<span class="hljs-name">vcl-embedded-input-group</span> <span class="hljs-attr">prepIcon</span>=<span class="hljs-string">&quot;fas:cog&quot;</span> <span class="hljs-attr">appIcon</span>=<span class="hljs-string">&quot;fas:times-circle&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">vcl-icon</span> <span class="hljs-attr">vclPrepend</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;fas:search&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vcl-icon</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">input</span> <span class="hljs-attr">vclInput</span> /&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">vcl-square-button</span> <span class="hljs-attr">vclApppend</span> (<span class="hljs-attr">click</span>)=<span class="hljs-string">&quot;someAction($event)&quot;</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">vcl-icon</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;fas:times-circle&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vcl-icon</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">vcl-embedded-input-group</span>&gt;</span></pre>\n'},"demo.component.html":{type:"pre",content:n("fYpr")},"demo.component.ts":{type:"pre",content:n("nfPR")}}}}n.d(a,"demo",(function(){return m})),n.d(a,"EmbeddedInputGroupDemoModule",(function(){return b}));var d,b=((d=function s(){_classCallCheck(this,s)}).\u0275mod=o.Kb({type:d}),d.\u0275inj=o.Jb({factory:function(s){return new(s||d)},imports:[[t.c,e.b,c.Q,c.O,c.P,c.C,c.I,p.g.forChild([{path:"",component:e.a,data:{demo:m}}])]]}),d)}}]);