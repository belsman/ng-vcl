(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{"2FIb":function(l,n,s){"use strict";s.d(n,"a",function(){return a}),s("PNUx");var a=function(){return function(){}}()},"8Ip6":function(l,n,s){"use strict";s.d(n,"a",function(){return q});var a=s("CcnG"),t=s("5cNt"),u=s("G6uX"),p=s("Ip0R"),c=s("PNUx"),e=s("ZYCi"),r=s("ZYjt"),b=a.ob({encapsulation:2,styles:[],data:{}});function o(l){return a.Jb(0,[(l()(),a.Hb(0,null,["",""]))],null,function(l,n){l(n,0,0,n.parent.context.$implicit.name)})}function i(l){return a.Jb(0,[(l()(),a.qb(0,16777216,null,null,1,"wormhole",[],null,null,null,null,null)),a.pb(1,671744,null,0,t.jc,[a.P,a.r],{target:[0,"target"]},null),(l()(),a.hb(0,null,null,0))],function(l,n){l(n,1,0,n.parent.context.$implicit.content)},null)}function h(l){return a.Jb(0,[(l()(),a.qb(0,0,null,null,2,"div",[],null,null,null,null,null)),(l()(),a.qb(1,0,null,null,1,"pre",[],null,null,null,null,null)),(l()(),a.Hb(2,null,["",""]))],null,function(l,n){l(n,2,0,n.parent.context.$implicit.content)})}function g(l){return a.Jb(0,[(l()(),a.qb(0,0,null,null,0,"div",[],[[8,"innerHTML",1]],null,null,null,null))],null,function(l,n){l(n,0,0,n.parent.context.$implicit.content)})}function j(l){return a.Jb(0,[(l()(),a.qb(0,0,null,null,0,"div",[["class","markdown-body"]],[[8,"innerHTML",1]],null,null,null,null))],null,function(l,n){l(n,0,0,n.parent.context.$implicit.content)})}function m(l){return a.Jb(0,[(l()(),a.qb(0,0,null,null,0,"pre",[],[[8,"innerHTML",1]],null,null,null,null))],null,function(l,n){l(n,0,0,n.parent.context.$implicit.content)})}function d(l){return a.Jb(0,[(l()(),a.qb(0,0,null,null,14,"vcl-tab",[],null,null,null,u.Kb,u.F)),a.pb(1,49152,[[1,4]],1,t.nc,[],null,null),a.Fb(335544320,2,{label:0}),(l()(),a.hb(0,[[2,2]],0,1,null,o)),a.pb(4,16384,null,0,t.mc,[],null,null),(l()(),a.hb(16777216,null,0,1,null,i)),a.pb(6,16384,null,0,p.l,[a.P,a.M],{ngIf:[0,"ngIf"]},null),(l()(),a.hb(16777216,null,0,1,null,h)),a.pb(8,16384,null,0,p.l,[a.P,a.M],{ngIf:[0,"ngIf"]},null),(l()(),a.hb(16777216,null,0,1,null,g)),a.pb(10,16384,null,0,p.l,[a.P,a.M],{ngIf:[0,"ngIf"]},null),(l()(),a.hb(16777216,null,0,1,null,j)),a.pb(12,16384,null,0,p.l,[a.P,a.M],{ngIf:[0,"ngIf"]},null),(l()(),a.hb(16777216,null,0,1,null,m)),a.pb(14,16384,null,0,p.l,[a.P,a.M],{ngIf:[0,"ngIf"]},null)],function(l,n){l(n,6,0,"component"===n.context.$implicit.type),l(n,8,0,"text"===n.context.$implicit.type),l(n,10,0,"html"===n.context.$implicit.type),l(n,12,0,"md"===n.context.$implicit.type),l(n,14,0,"pre"===n.context.$implicit.type)},null)}function v(l){return a.Jb(0,[(l()(),a.qb(0,0,null,null,5,"div",[],null,null,null,null,null)),(l()(),a.qb(1,0,null,null,4,"vcl-tab-nav",[["borders","true"]],null,null,null,u.Lb,u.G)),a.pb(2,1228800,null,1,t.oc,[],{borders:[0,"borders"]},null),a.Fb(603979776,1,{tabs:1}),(l()(),a.hb(16777216,null,0,1,null,d)),a.pb(5,278528,null,0,p.k,[a.P,a.M,a.t],{ngForOf:[0,"ngForOf"]},null)],function(l,n){var s=n.component;l(n,2,0,"true"),l(n,5,0,s.tabs)},null)}function f(l){return a.Jb(0,[(l()(),a.qb(0,0,null,null,1,"h2",[["class","vclArticleHeader"]],null,null,null,null,null)),(l()(),a.Hb(1,null,[" ",""])),(l()(),a.hb(16777216,null,null,1,null,v)),a.pb(3,16384,null,0,p.l,[a.P,a.M],{ngIf:[0,"ngIf"]},null)],function(l,n){l(n,3,0,n.component.tabs.length>0)},function(l,n){l(n,1,0,n.component.title)})}function A(l){return a.Jb(0,[(l()(),a.qb(0,0,null,null,1,"ng-component",[],null,null,null,f,b)),a.pb(1,114688,null,0,c.a,[e.a,r.c],null,null)],function(l,n){l(n,1,0)},null)}var q=a.mb("ng-component",c.a,A,{},{},[])},PNUx:function(l,n,s){"use strict";s.d(n,"a",function(){return a});var a=function(){function l(l,n){this.activatedRoute=l,this.sanitizer=n,this.tabs=[]}return l.prototype.ngOnInit=function(){var l=this,n=this.activatedRoute.snapshot.data.demo();n?(this.title=n.label,this.tabs=n.tabs?Object.keys(n.tabs).map(function(s){var a,t;return"object"==typeof n.tabs[s]&&n.tabs[s]?t="pre"===(a=n.tabs[s].type)||"html"===a||"md"===a?l.sanitizer.bypassSecurityTrustHtml(n.tabs[s].content):n.tabs[s].content:"function"==typeof n.tabs[s]&&(a="component",t=n.tabs[s]),{name:s,content:t,type:a}}):[]):(this.title="ng-vcl",this.tabs=[])},l}()},YR26:function(l,n){l.exports='<span class="hljs-keyword">import</span> { Component } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/core\'</span>;\n\n<span class="hljs-meta">@Component</span>({\n  templateUrl: <span class="hljs-string">\'demo.component.html\'</span>\n})\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> FormLayoutsDemoComponent {\n\n}\n'},o01H:function(l,n){l.exports='<span class="hljs-tag">&lt;<span class="hljs-name">h2</span>&gt;</span>Features<span class="hljs-tag">&lt;/<span class="hljs-name">h2</span>&gt;</span>\nThe forms can be in one of these layouts:<span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">ul</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">li</span>&gt;</span>vertical (default): stacked both labels and controls<span class="hljs-tag">&lt;/<span class="hljs-name">li</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">li</span>&gt;</span>horizontal: two column layout, one for labels other for controls<span class="hljs-tag">&lt;/<span class="hljs-name">li</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">li</span>&gt;</span>inline: both labels and controls in a single line<span class="hljs-tag">&lt;/<span class="hljs-name">li</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">ul</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">h2</span>&gt;</span>Examples<span class="hljs-tag">&lt;/<span class="hljs-name">h2</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">h3</span>&gt;</span>Vertical input<span class="hljs-tag">&lt;/<span class="hljs-name">h3</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">form</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"vclForm"</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">label</span> <span class="hljs-attr">vcl-form-control-label</span> [<span class="hljs-attr">required</span>]=<span class="hljs-string">"true"</span> <span class="hljs-attr">label</span>=<span class="hljs-string">"Label"</span> <span class="hljs-attr">for</span>=<span class="hljs-string">"input"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">label</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">input</span> <span class="hljs-attr">vcl-input</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">"Placeholder"</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"input"</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">vcl-checkbox</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">label</span> <span class="hljs-attr">vcl-form-control-label</span> <span class="hljs-attr">label</span>=<span class="hljs-string">"Checkbox"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">label</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">vcl-checkbox</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">vcl-button</span> <span class="hljs-attr">label</span>=<span class="hljs-string">"Submit"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">form</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">h3</span>&gt;</span>Horizontal input<span class="hljs-tag">&lt;/<span class="hljs-name">h3</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">form</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"vclForm vclFormHorizontal"</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"vclInputControlGroup vclGridRow"</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">label</span> <span class="hljs-attr">vcl-form-control-label</span> [<span class="hljs-attr">required</span>]=<span class="hljs-string">"true"</span> <span class="hljs-attr">label</span>=<span class="hljs-string">"Email"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"vclGridSpan-gcb"</span> <span class="hljs-attr">for</span>=<span class="hljs-string">"email"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">label</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"vclGridSpan-gca"</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">input</span> <span class="hljs-attr">vcl-input</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">"Email"</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"email"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"vclGridSpan-gca"</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"email"</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"vclFormControlHint"</span>&gt;</span>Helpful hint<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n\n  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"vclInputControlGroup vclGridRow"</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">label</span> <span class="hljs-attr">vcl-form-control-label</span> [<span class="hljs-attr">required</span>]=<span class="hljs-string">"true"</span> <span class="hljs-attr">label</span>=<span class="hljs-string">"Password"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"vclGridSpan-gcb"</span> <span class="hljs-attr">for</span>=<span class="hljs-string">"password"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">label</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"vclGridSpan-gca"</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">input</span> <span class="hljs-attr">vcl-input</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">"Password"</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"password"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"vclGridSpan-gca"</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"password"</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n\n\n  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"vclInputControlGroup vclGridRow"</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"vclGridSpan-gcb"</span>&gt;</span>&amp;nbsp;<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"vclGridSpan-gca"</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">vcl-checkbox</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">label</span> <span class="hljs-attr">vcl-form-control-label</span> <span class="hljs-attr">label</span>=<span class="hljs-string">"Remember me"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">label</span>&gt;</span>\n      <span class="hljs-tag">&lt;/<span class="hljs-name">vcl-checkbox</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n\n  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"vclInputControlGroup vclGridRow"</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"vclGridSpan-gcb"</span>&gt;</span>&amp;nbsp;<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"vclGridSpan-gca"</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"vclFormActionArea"</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"vclLooseButtonGroup"</span>&gt;</span>\n          <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">vcl-button</span> <span class="hljs-attr">label</span>=<span class="hljs-string">"Sign in"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>\n          <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">vcl-button</span> <span class="hljs-attr">label</span>=<span class="hljs-string">"Cancel"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>\n        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n      <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">form</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">h3</span>&gt;</span>Inline input<span class="hljs-tag">&lt;/<span class="hljs-name">h3</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">form</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"vclForm vclFormInline"</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">label</span> <span class="hljs-attr">vcl-form-control-label</span> [<span class="hljs-attr">required</span>]=<span class="hljs-string">"true"</span> <span class="hljs-attr">label</span>=<span class="hljs-string">"Label"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"vclInputInlineControlGroup"</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">input</span> <span class="hljs-attr">vcl-input</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">"Placeholder"</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">label</span>&gt;</span>\n\n  <span class="hljs-tag">&lt;<span class="hljs-name">vcl-checkbox</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">label</span> <span class="hljs-attr">vcl-form-control-label</span> <span class="hljs-attr">label</span>=<span class="hljs-string">"Checkbox"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"vclInputInlineControlGroup"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">label</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">vcl-checkbox</span>&gt;</span>\n\n  <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">vcl-button</span> <span class="hljs-attr">label</span>=<span class="hljs-string">"Submit"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">form</span>&gt;</span>\n'},zPAz:function(l,n,s){"use strict";s.r(n);var a=s("CcnG"),t=function(){return function(){}}(),u={demo:function(){return{name:"Form",tabs:{Demo:t,"demo.component.html":{type:"pre",content:s("o01H")},"demo.component.ts":{type:"pre",content:s("YR26")}}}}},p=function(){return function(){}}(),c=s("pMnS"),e=s("8Ip6"),r=s("gIcY"),b=s("G6uX"),o=s("5cNt"),i=a.ob({encapsulation:2,styles:[],data:{}});function h(l){return a.Jb(0,[(l()(),a.qb(0,0,null,null,1,"h2",[],null,null,null,null,null)),(l()(),a.Hb(-1,null,["Features"])),(l()(),a.Hb(-1,null,["\nThe forms can be in one of these layouts:"])),(l()(),a.qb(3,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),a.qb(4,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),a.qb(5,0,null,null,6,"ul",[],null,null,null,null,null)),(l()(),a.qb(6,0,null,null,1,"li",[],null,null,null,null,null)),(l()(),a.Hb(-1,null,["vertical (default): stacked both labels and controls"])),(l()(),a.qb(8,0,null,null,1,"li",[],null,null,null,null,null)),(l()(),a.Hb(-1,null,["horizontal: two column layout, one for labels other for controls"])),(l()(),a.qb(10,0,null,null,1,"li",[],null,null,null,null,null)),(l()(),a.Hb(-1,null,["inline: both labels and controls in a single line"])),(l()(),a.qb(12,0,null,null,1,"h2",[],null,null,null,null,null)),(l()(),a.Hb(-1,null,["Examples"])),(l()(),a.qb(14,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),a.Hb(-1,null,["Vertical input"])),(l()(),a.qb(16,0,null,null,18,"form",[["class","vclForm"],["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"submit"],[null,"reset"]],function(l,n,s){var t=!0;return"submit"===n&&(t=!1!==a.Ab(l,18).onSubmit(s)&&t),"reset"===n&&(t=!1!==a.Ab(l,18).onReset()&&t),t},null,null)),a.pb(17,16384,null,0,r.v,[],null,null),a.pb(18,4210688,null,0,r.p,[[8,null],[8,null]],null,null),a.Eb(2048,null,r.b,null,[r.p]),a.pb(20,16384,null,0,r.o,[[4,r.b]],null,null),(l()(),a.qb(21,0,null,null,1,"label",[["for","input"],["label","Label"],["vcl-form-control-label",""]],[[2,"vclFormControlLabel",null],[2,"vclDisabled",null],[1,"for",0],[2,"vclFormControlLabelWrapping",null]],null,null,b.Pb,b.K)),a.pb(22,49152,null,0,o.sc,[],{label:[0,"label"],for:[1,"for"],required:[2,"required"]},null),(l()(),a.qb(23,0,null,null,1,"input",[["id","input"],["placeholder","Placeholder"],["vcl-input",""]],[[2,"vclInput",null],[2,"vclDisabled",null],[1,"disabled",0]],null,null,null,null)),a.pb(24,16384,null,0,o.E,[],null,null),(l()(),a.qb(25,0,null,null,4,"vcl-checkbox",[],[[2,"vclInputControlGroup",null]],[[null,"tap"]],function(l,n,s){var t=!0;return"tap"===n&&(t=!1!==a.Ab(l,27).onTap(s)&&t),t},b.ob,b.j)),a.Eb(5120,null,r.l,function(l){return[l]},[o.q]),a.pb(27,49152,null,0,o.q,[a.h],null,null),(l()(),a.qb(28,0,null,0,1,"label",[["label","Checkbox"],["vcl-form-control-label",""]],[[2,"vclFormControlLabel",null],[2,"vclDisabled",null],[1,"for",0],[2,"vclFormControlLabelWrapping",null]],null,null,b.Pb,b.K)),a.pb(29,49152,null,0,o.sc,[],{label:[0,"label"]},null),(l()(),a.qb(30,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),a.qb(31,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),a.qb(32,0,null,null,2,"button",[["label","Submit"],["vcl-button",""]],[[2,"vclButton",null],[2,"vclDisabled",null],[1,"disabled",0],[2,"vclHovered",null],[1,"aria-label",0]],[[null,"mouseenter"],[null,"mouseleave"]],function(l,n,s){var t=!0;return"mouseenter"===n&&(t=!1!==a.Ab(l,33).onMouseEnter(s)&&t),"mouseleave"===n&&(t=!1!==a.Ab(l,33).onMouseLeave(s)&&t),t},b.nb,b.i)),a.pb(33,16384,null,0,o.l,[a.k],null,null),a.pb(34,49152,null,0,o.o,[],{label:[0,"label"]},null),(l()(),a.qb(35,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),a.qb(36,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),a.qb(37,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),a.Hb(-1,null,["Horizontal input"])),(l()(),a.qb(39,0,null,null,39,"form",[["class","vclForm vclFormHorizontal"],["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"submit"],[null,"reset"]],function(l,n,s){var t=!0;return"submit"===n&&(t=!1!==a.Ab(l,41).onSubmit(s)&&t),"reset"===n&&(t=!1!==a.Ab(l,41).onReset()&&t),t},null,null)),a.pb(40,16384,null,0,r.v,[],null,null),a.pb(41,4210688,null,0,r.p,[[8,null],[8,null]],null,null),a.Eb(2048,null,r.b,null,[r.p]),a.pb(43,16384,null,0,r.o,[[4,r.b]],null,null),(l()(),a.qb(44,0,null,null,7,"div",[["class","vclInputControlGroup vclGridRow"]],null,null,null,null,null)),(l()(),a.qb(45,0,null,null,1,"label",[["class","vclGridSpan-gcb"],["for","email"],["label","Email"],["vcl-form-control-label",""]],[[2,"vclFormControlLabel",null],[2,"vclDisabled",null],[1,"for",0],[2,"vclFormControlLabelWrapping",null]],null,null,b.Pb,b.K)),a.pb(46,49152,null,0,o.sc,[],{label:[0,"label"],for:[1,"for"],required:[2,"required"]},null),(l()(),a.qb(47,0,null,null,4,"div",[["class","vclGridSpan-gca"]],null,null,null,null,null)),(l()(),a.qb(48,0,null,null,1,"input",[["class","vclGridSpan-gca"],["id","email"],["placeholder","Email"],["type","email"],["vcl-input",""]],[[2,"vclInput",null],[2,"vclDisabled",null],[1,"disabled",0]],null,null,null,null)),a.pb(49,16384,null,0,o.E,[],null,null),(l()(),a.qb(50,0,null,null,1,"div",[["class","vclFormControlHint"]],null,null,null,null,null)),(l()(),a.Hb(-1,null,["Helpful hint"])),(l()(),a.qb(52,0,null,null,5,"div",[["class","vclInputControlGroup vclGridRow"]],null,null,null,null,null)),(l()(),a.qb(53,0,null,null,1,"label",[["class","vclGridSpan-gcb"],["for","password"],["label","Password"],["vcl-form-control-label",""]],[[2,"vclFormControlLabel",null],[2,"vclDisabled",null],[1,"for",0],[2,"vclFormControlLabelWrapping",null]],null,null,b.Pb,b.K)),a.pb(54,49152,null,0,o.sc,[],{label:[0,"label"],for:[1,"for"],required:[2,"required"]},null),(l()(),a.qb(55,0,null,null,2,"div",[["class","vclGridSpan-gca"]],null,null,null,null,null)),(l()(),a.qb(56,0,null,null,1,"input",[["class","vclGridSpan-gca"],["id","password"],["placeholder","Password"],["type","password"],["vcl-input",""]],[[2,"vclInput",null],[2,"vclDisabled",null],[1,"disabled",0]],null,null,null,null)),a.pb(57,16384,null,0,o.E,[],null,null),(l()(),a.qb(58,0,null,null,8,"div",[["class","vclInputControlGroup vclGridRow"]],null,null,null,null,null)),(l()(),a.qb(59,0,null,null,1,"div",[["class","vclGridSpan-gcb"]],null,null,null,null,null)),(l()(),a.Hb(-1,null,["\xa0"])),(l()(),a.qb(61,0,null,null,5,"div",[["class","vclGridSpan-gca"]],null,null,null,null,null)),(l()(),a.qb(62,0,null,null,4,"vcl-checkbox",[],[[2,"vclInputControlGroup",null]],[[null,"tap"]],function(l,n,s){var t=!0;return"tap"===n&&(t=!1!==a.Ab(l,64).onTap(s)&&t),t},b.ob,b.j)),a.Eb(5120,null,r.l,function(l){return[l]},[o.q]),a.pb(64,49152,null,0,o.q,[a.h],null,null),(l()(),a.qb(65,0,null,0,1,"label",[["label","Remember me"],["vcl-form-control-label",""]],[[2,"vclFormControlLabel",null],[2,"vclDisabled",null],[1,"for",0],[2,"vclFormControlLabelWrapping",null]],null,null,b.Pb,b.K)),a.pb(66,49152,null,0,o.sc,[],{label:[0,"label"]},null),(l()(),a.qb(67,0,null,null,11,"div",[["class","vclInputControlGroup vclGridRow"]],null,null,null,null,null)),(l()(),a.qb(68,0,null,null,1,"div",[["class","vclGridSpan-gcb"]],null,null,null,null,null)),(l()(),a.Hb(-1,null,["\xa0"])),(l()(),a.qb(70,0,null,null,8,"div",[["class","vclGridSpan-gca"]],null,null,null,null,null)),(l()(),a.qb(71,0,null,null,7,"div",[["class","vclFormActionArea"]],null,null,null,null,null)),(l()(),a.qb(72,0,null,null,6,"div",[["class","vclLooseButtonGroup"]],null,null,null,null,null)),(l()(),a.qb(73,0,null,null,2,"button",[["label","Sign in"],["vcl-button",""]],[[2,"vclButton",null],[2,"vclDisabled",null],[1,"disabled",0],[2,"vclHovered",null],[1,"aria-label",0]],[[null,"mouseenter"],[null,"mouseleave"]],function(l,n,s){var t=!0;return"mouseenter"===n&&(t=!1!==a.Ab(l,74).onMouseEnter(s)&&t),"mouseleave"===n&&(t=!1!==a.Ab(l,74).onMouseLeave(s)&&t),t},b.nb,b.i)),a.pb(74,16384,null,0,o.l,[a.k],null,null),a.pb(75,49152,null,0,o.o,[],{label:[0,"label"]},null),(l()(),a.qb(76,0,null,null,2,"button",[["label","Cancel"],["vcl-button",""]],[[2,"vclButton",null],[2,"vclDisabled",null],[1,"disabled",0],[2,"vclHovered",null],[1,"aria-label",0]],[[null,"mouseenter"],[null,"mouseleave"]],function(l,n,s){var t=!0;return"mouseenter"===n&&(t=!1!==a.Ab(l,77).onMouseEnter(s)&&t),"mouseleave"===n&&(t=!1!==a.Ab(l,77).onMouseLeave(s)&&t),t},b.nb,b.i)),a.pb(77,16384,null,0,o.l,[a.k],null,null),a.pb(78,49152,null,0,o.o,[],{label:[0,"label"]},null),(l()(),a.qb(79,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),a.qb(80,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),a.qb(81,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),a.Hb(-1,null,["Inline input"])),(l()(),a.qb(83,0,null,null,16,"form",[["class","vclForm vclFormInline"],["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"submit"],[null,"reset"]],function(l,n,s){var t=!0;return"submit"===n&&(t=!1!==a.Ab(l,85).onSubmit(s)&&t),"reset"===n&&(t=!1!==a.Ab(l,85).onReset()&&t),t},null,null)),a.pb(84,16384,null,0,r.v,[],null,null),a.pb(85,4210688,null,0,r.p,[[8,null],[8,null]],null,null),a.Eb(2048,null,r.b,null,[r.p]),a.pb(87,16384,null,0,r.o,[[4,r.b]],null,null),(l()(),a.qb(88,0,null,null,3,"label",[["class","vclInputInlineControlGroup"],["label","Label"],["vcl-form-control-label",""]],[[2,"vclFormControlLabel",null],[2,"vclDisabled",null],[1,"for",0],[2,"vclFormControlLabelWrapping",null]],null,null,b.Pb,b.K)),a.pb(89,49152,null,0,o.sc,[],{label:[0,"label"],required:[1,"required"]},null),(l()(),a.qb(90,0,null,0,1,"input",[["placeholder","Placeholder"],["vcl-input",""]],[[2,"vclInput",null],[2,"vclDisabled",null],[1,"disabled",0]],null,null,null,null)),a.pb(91,16384,null,0,o.E,[],null,null),(l()(),a.qb(92,0,null,null,4,"vcl-checkbox",[],[[2,"vclInputControlGroup",null]],[[null,"tap"]],function(l,n,s){var t=!0;return"tap"===n&&(t=!1!==a.Ab(l,94).onTap(s)&&t),t},b.ob,b.j)),a.Eb(5120,null,r.l,function(l){return[l]},[o.q]),a.pb(94,49152,null,0,o.q,[a.h],null,null),(l()(),a.qb(95,0,null,0,1,"label",[["class","vclInputInlineControlGroup"],["label","Checkbox"],["vcl-form-control-label",""]],[[2,"vclFormControlLabel",null],[2,"vclDisabled",null],[1,"for",0],[2,"vclFormControlLabelWrapping",null]],null,null,b.Pb,b.K)),a.pb(96,49152,null,0,o.sc,[],{label:[0,"label"]},null),(l()(),a.qb(97,0,null,null,2,"button",[["label","Submit"],["vcl-button",""]],[[2,"vclButton",null],[2,"vclDisabled",null],[1,"disabled",0],[2,"vclHovered",null],[1,"aria-label",0]],[[null,"mouseenter"],[null,"mouseleave"]],function(l,n,s){var t=!0;return"mouseenter"===n&&(t=!1!==a.Ab(l,98).onMouseEnter(s)&&t),"mouseleave"===n&&(t=!1!==a.Ab(l,98).onMouseLeave(s)&&t),t},b.nb,b.i)),a.pb(98,16384,null,0,o.l,[a.k],null,null),a.pb(99,49152,null,0,o.o,[],{label:[0,"label"]},null)],function(l,n){l(n,22,0,"Label","input",!0),l(n,29,0,"Checkbox"),l(n,34,0,"Submit"),l(n,46,0,"Email","email",!0),l(n,54,0,"Password","password",!0),l(n,66,0,"Remember me"),l(n,75,0,"Sign in"),l(n,78,0,"Cancel"),l(n,89,0,"Label",!0),l(n,96,0,"Checkbox"),l(n,99,0,"Submit")},function(l,n){l(n,16,0,a.Ab(n,20).ngClassUntouched,a.Ab(n,20).ngClassTouched,a.Ab(n,20).ngClassPristine,a.Ab(n,20).ngClassDirty,a.Ab(n,20).ngClassValid,a.Ab(n,20).ngClassInvalid,a.Ab(n,20).ngClassPending),l(n,21,0,!0,a.Ab(n,22).disabled,a.Ab(n,22).for,a.Ab(n,22).vclFormControlLabelWrapping),l(n,23,0,!0,a.Ab(n,24).isDisabled,a.Ab(n,24).attrDisabled),l(n,25,0,!0),l(n,28,0,!0,a.Ab(n,29).disabled,a.Ab(n,29).for,a.Ab(n,29).vclFormControlLabelWrapping),l(n,32,0,!0,a.Ab(n,33).isDisabled,a.Ab(n,33).isDisabled,a.Ab(n,33).hovered,a.Ab(n,34).ariaLabel),l(n,39,0,a.Ab(n,43).ngClassUntouched,a.Ab(n,43).ngClassTouched,a.Ab(n,43).ngClassPristine,a.Ab(n,43).ngClassDirty,a.Ab(n,43).ngClassValid,a.Ab(n,43).ngClassInvalid,a.Ab(n,43).ngClassPending),l(n,45,0,!0,a.Ab(n,46).disabled,a.Ab(n,46).for,a.Ab(n,46).vclFormControlLabelWrapping),l(n,48,0,!0,a.Ab(n,49).isDisabled,a.Ab(n,49).attrDisabled),l(n,53,0,!0,a.Ab(n,54).disabled,a.Ab(n,54).for,a.Ab(n,54).vclFormControlLabelWrapping),l(n,56,0,!0,a.Ab(n,57).isDisabled,a.Ab(n,57).attrDisabled),l(n,62,0,!0),l(n,65,0,!0,a.Ab(n,66).disabled,a.Ab(n,66).for,a.Ab(n,66).vclFormControlLabelWrapping),l(n,73,0,!0,a.Ab(n,74).isDisabled,a.Ab(n,74).isDisabled,a.Ab(n,74).hovered,a.Ab(n,75).ariaLabel),l(n,76,0,!0,a.Ab(n,77).isDisabled,a.Ab(n,77).isDisabled,a.Ab(n,77).hovered,a.Ab(n,78).ariaLabel),l(n,83,0,a.Ab(n,87).ngClassUntouched,a.Ab(n,87).ngClassTouched,a.Ab(n,87).ngClassPristine,a.Ab(n,87).ngClassDirty,a.Ab(n,87).ngClassValid,a.Ab(n,87).ngClassInvalid,a.Ab(n,87).ngClassPending),l(n,88,0,!0,a.Ab(n,89).disabled,a.Ab(n,89).for,a.Ab(n,89).vclFormControlLabelWrapping),l(n,90,0,!0,a.Ab(n,91).isDisabled,a.Ab(n,91).attrDisabled),l(n,92,0,!0),l(n,95,0,!0,a.Ab(n,96).disabled,a.Ab(n,96).for,a.Ab(n,96).vclFormControlLabelWrapping),l(n,97,0,!0,a.Ab(n,98).isDisabled,a.Ab(n,98).isDisabled,a.Ab(n,98).hovered,a.Ab(n,99).ariaLabel)})}function g(l){return a.Jb(0,[(l()(),a.qb(0,0,null,null,1,"ng-component",[],null,null,null,h,i)),a.pb(1,49152,null,0,t,[],null,null)],null,null)}var j=a.mb("ng-component",t,g,{},{},[]),m=s("Ip0R"),d=s("2FIb"),v=s("ZYCi"),f=s("PNUx");s.d(n,"FormLayoutsDemoModuleNgFactory",function(){return A});var A=a.nb(p,[],function(l){return a.xb([a.yb(512,a.j,a.cb,[[8,[c.a,e.a,j]],[3,a.j],a.y]),a.yb(4608,m.n,m.m,[a.v,[2,m.y]]),a.yb(4608,r.w,r.w,[]),a.yb(4608,r.e,r.e,[]),a.yb(5120,o.ic,function(){return[new o.w,new o.O]},[]),a.yb(1073742336,m.c,m.c,[]),a.yb(1073742336,r.t,r.t,[]),a.yb(1073742336,r.k,r.k,[]),a.yb(1073742336,r.r,r.r,[]),a.yb(1073742336,o.gc,o.gc,[]),a.yb(1073742336,o.Zb,o.Zb,[]),a.yb(1073742336,d.a,d.a,[]),a.yb(1073742336,o.Eb,o.Eb,[]),a.yb(1073742336,o.Jb,o.Jb,[]),a.yb(1073742336,o.Db,o.Db,[]),a.yb(1073742336,o.ub,o.ub,[]),a.yb(1073742336,o.Bb,o.Bb,[]),a.yb(1073742336,o.Fb,o.Fb,[]),a.yb(1073742336,o.Gb,o.Gb,[]),a.yb(1073742336,o.vb,o.vb,[]),a.yb(1073742336,o.Hb,o.Hb,[]),a.yb(1073742336,v.m,v.m,[[2,v.s],[2,v.l]]),a.yb(1073742336,p,p,[]),a.yb(1024,v.j,function(){return[[{path:"",component:f.a,data:u}]]},[])])})}}]);