(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{"2FIb":function(n,l,s){"use strict";s.d(l,"a",function(){return a}),s("PNUx");var a=function(){return function(){}}()},"8Ip6":function(n,l,s){"use strict";s.d(l,"a",function(){return w});var a=s("CcnG"),t=s("5cNt"),u=s("G6uX"),e=s("Ip0R"),o=s("PNUx"),p=s("ZYCi"),c=s("ZYjt"),r=a.ob({encapsulation:2,styles:[],data:{}});function i(n){return a.Jb(0,[(n()(),a.Hb(0,null,["",""]))],null,function(n,l){n(l,0,0,l.parent.context.$implicit.name)})}function b(n){return a.Jb(0,[(n()(),a.qb(0,16777216,null,null,1,"wormhole",[],null,null,null,null,null)),a.pb(1,671744,null,0,t.jc,[a.P,a.r],{target:[0,"target"]},null),(n()(),a.hb(0,null,null,0))],function(n,l){n(l,1,0,l.parent.context.$implicit.content)},null)}function h(n){return a.Jb(0,[(n()(),a.qb(0,0,null,null,2,"div",[],null,null,null,null,null)),(n()(),a.qb(1,0,null,null,1,"pre",[],null,null,null,null,null)),(n()(),a.Hb(2,null,["",""]))],null,function(n,l){n(l,2,0,l.parent.context.$implicit.content)})}function m(n){return a.Jb(0,[(n()(),a.qb(0,0,null,null,0,"div",[],[[8,"innerHTML",1]],null,null,null,null))],null,function(n,l){n(l,0,0,l.parent.context.$implicit.content)})}function v(n){return a.Jb(0,[(n()(),a.qb(0,0,null,null,0,"div",[["class","markdown-body"]],[[8,"innerHTML",1]],null,null,null,null))],null,function(n,l){n(l,0,0,l.parent.context.$implicit.content)})}function g(n){return a.Jb(0,[(n()(),a.qb(0,0,null,null,0,"pre",[],[[8,"innerHTML",1]],null,null,null,null))],null,function(n,l){n(l,0,0,l.parent.context.$implicit.content)})}function f(n){return a.Jb(0,[(n()(),a.qb(0,0,null,null,14,"vcl-tab",[],null,null,null,u.Kb,u.F)),a.pb(1,49152,[[1,4]],1,t.nc,[],null,null),a.Fb(335544320,2,{label:0}),(n()(),a.hb(0,[[2,2]],0,1,null,i)),a.pb(4,16384,null,0,t.mc,[],null,null),(n()(),a.hb(16777216,null,0,1,null,b)),a.pb(6,16384,null,0,e.l,[a.P,a.M],{ngIf:[0,"ngIf"]},null),(n()(),a.hb(16777216,null,0,1,null,h)),a.pb(8,16384,null,0,e.l,[a.P,a.M],{ngIf:[0,"ngIf"]},null),(n()(),a.hb(16777216,null,0,1,null,m)),a.pb(10,16384,null,0,e.l,[a.P,a.M],{ngIf:[0,"ngIf"]},null),(n()(),a.hb(16777216,null,0,1,null,v)),a.pb(12,16384,null,0,e.l,[a.P,a.M],{ngIf:[0,"ngIf"]},null),(n()(),a.hb(16777216,null,0,1,null,g)),a.pb(14,16384,null,0,e.l,[a.P,a.M],{ngIf:[0,"ngIf"]},null)],function(n,l){n(l,6,0,"component"===l.context.$implicit.type),n(l,8,0,"text"===l.context.$implicit.type),n(l,10,0,"html"===l.context.$implicit.type),n(l,12,0,"md"===l.context.$implicit.type),n(l,14,0,"pre"===l.context.$implicit.type)},null)}function d(n){return a.Jb(0,[(n()(),a.qb(0,0,null,null,5,"div",[],null,null,null,null,null)),(n()(),a.qb(1,0,null,null,4,"vcl-tab-nav",[["borders","true"]],null,null,null,u.Lb,u.G)),a.pb(2,1228800,null,1,t.oc,[],{borders:[0,"borders"]},null),a.Fb(603979776,1,{tabs:1}),(n()(),a.hb(16777216,null,0,1,null,f)),a.pb(5,278528,null,0,e.k,[a.P,a.M,a.t],{ngForOf:[0,"ngForOf"]},null)],function(n,l){var s=l.component;n(l,2,0,"true"),n(l,5,0,s.tabs)},null)}function j(n){return a.Jb(0,[(n()(),a.qb(0,0,null,null,1,"h2",[["class","vclArticleHeader"]],null,null,null,null,null)),(n()(),a.Hb(1,null,[" ",""])),(n()(),a.hb(16777216,null,null,1,null,d)),a.pb(3,16384,null,0,e.l,[a.P,a.M],{ngIf:[0,"ngIf"]},null)],function(n,l){n(l,3,0,l.component.tabs.length>0)},function(n,l){n(l,1,0,l.component.title)})}function y(n){return a.Jb(0,[(n()(),a.qb(0,0,null,null,1,"ng-component",[],null,null,null,j,r)),a.pb(1,114688,null,0,o.a,[p.a,c.c],null,null)],function(n,l){n(l,1,0)},null)}var w=a.mb("ng-component",o.a,y,{},{},[])},PNUx:function(n,l,s){"use strict";s.d(l,"a",function(){return a});var a=function(){function n(n,l){this.activatedRoute=n,this.sanitizer=l,this.tabs=[]}return n.prototype.ngOnInit=function(){var n=this,l=this.activatedRoute.snapshot.data.demo();l?(this.title=l.label,this.tabs=l.tabs?Object.keys(l.tabs).map(function(s){var a,t;return"object"==typeof l.tabs[s]&&l.tabs[s]?t="pre"===(a=l.tabs[s].type)||"html"===a||"md"===a?n.sanitizer.bypassSecurityTrustHtml(l.tabs[s].content):l.tabs[s].content:"function"==typeof l.tabs[s]&&(a="component",t=l.tabs[s]),{name:s,content:t,type:a}}):[]):(this.title="ng-vcl",this.tabs=[])},n}()},RWac:function(n,l){n.exports='<span class="hljs-keyword">import</span> {Component, ViewChild} <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/core\'</span>;\n<span class="hljs-keyword">import</span> {PopoverComponent} <span class="hljs-keyword">from</span> <span class="hljs-string">\'@ng-vcl/ng-vcl\'</span>;\n\n<span class="hljs-meta">@Component</span>({\n  templateUrl: <span class="hljs-string">\'demo.component.html\'</span>\n})\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> FormMashupsDemoComponent {\n\n  value: <span class="hljs-built_in">any</span> = <span class="hljs-number">1</span>;\n\n  <span class="hljs-meta">@ViewChild</span>(<span class="hljs-string">\'dropOver\'</span>)\n  dropOver: PopoverComponent;\n\n  onSelect(value: <span class="hljs-built_in">any</span>) {\n    <span class="hljs-keyword">this</span>.value = value;\n    <span class="hljs-keyword">this</span>.dropOver.close();\n  }\n\n  offClick() {\n    <span class="hljs-keyword">if</span> (<span class="hljs-keyword">this</span>.dropOver.visible) {\n      <span class="hljs-keyword">this</span>.dropOver.close();\n    }\n  }\n}\n'},"W+F8":function(n,l){n.exports='<span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>This section shows several ubiquitus form components which\n   are not available as a single component but can be built as mashups\n   of form controls available in the ng-vcl.<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">h3</span>&gt;</span>Split Button with Dropdown<span class="hljs-tag">&lt;/<span class="hljs-name">h3</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"vclButtonGroup"</span> #<span class="hljs-attr">target</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">vcl-button</span> <span class="hljs-attr">label</span>=<span class="hljs-string">"Primary Action"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">vcl-button</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">"fas:chevron-down"</span> (<span class="hljs-attr">tap</span>)=<span class="hljs-string">"dropOver.toggle()"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">vcl-popover</span> #<span class="hljs-attr">dropOver</span> [<span class="hljs-attr">target</span>]=<span class="hljs-string">"target"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"vclNoPadding"</span> (<span class="hljs-attr">offClick</span>)=<span class="hljs-string">"offClick()"</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">vcl-dropdown</span> [<span class="hljs-attr">value</span>]=<span class="hljs-string">"1"</span> (<span class="hljs-attr">change</span>)=<span class="hljs-string">"onSelect($event)"</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">vcl-dropdown-option</span> *<span class="hljs-attr">ngFor</span>=<span class="hljs-string">"let i of [0, 1, 2, 3, 4]"</span> [<span class="hljs-attr">value</span>]=<span class="hljs-string">"i"</span> <span class="hljs-attr">label</span>=<span class="hljs-string">"Item {{ i }}"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vcl-dropdown-option</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">vcl-dropdown</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">vcl-popover</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>Selected index: {{ value }}<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>\n'},zXeZ:function(n,l,s){"use strict";s.r(l);var a=s("CcnG"),t=function(){function n(){this.value=1}return n.prototype.onSelect=function(n){this.value=n,this.dropOver.close()},n.prototype.offClick=function(){this.dropOver.visible&&this.dropOver.close()},n}(),u={demo:function(){return{name:"Form",tabs:{Demo:t,"demo.component.html":{type:"pre",content:s("W+F8")},"demo.component.ts":{type:"pre",content:s("RWac")}}}}},e=function(){return function(){}}(),o=s("pMnS"),p=s("8Ip6"),c=s("G6uX"),r=s("5cNt"),i=s("ihYY"),b=s("gIcY"),h=s("Ip0R"),m=a.ob({encapsulation:2,styles:[],data:{}});function v(n){return a.Jb(0,[(n()(),a.qb(0,0,null,null,1,"vcl-dropdown-option",[],null,null,null,c.rb,c.m)),a.pb(1,49152,[[2,4]],0,r.u,[],{value:[0,"value"],label:[1,"label"]},null)],function(n,l){n(l,1,0,l.context.$implicit,a.sb(1,"Item ",l.context.$implicit,""))},null)}function g(n){return a.Jb(0,[a.Fb(402653184,1,{dropOver:0}),(n()(),a.qb(1,0,null,null,1,"p",[],null,null,null,null,null)),(n()(),a.Hb(-1,null,["This section shows several ubiquitus form components which are not available as a single component but can be built as mashups of form controls available in the ng-vcl."])),(n()(),a.qb(3,0,null,null,0,"br",[],null,null,null,null,null)),(n()(),a.qb(4,0,null,null,1,"h3",[],null,null,null,null,null)),(n()(),a.Hb(-1,null,["Split Button with Dropdown"])),(n()(),a.qb(6,0,[["target",1]],null,6,"div",[["class","vclButtonGroup"]],null,null,null,null,null)),(n()(),a.qb(7,0,null,null,2,"button",[["label","Primary Action"],["vcl-button",""]],[[2,"vclButton",null],[2,"vclDisabled",null],[1,"disabled",0],[2,"vclHovered",null],[1,"aria-label",0]],[[null,"mouseenter"],[null,"mouseleave"]],function(n,l,s){var t=!0;return"mouseenter"===l&&(t=!1!==a.Ab(n,8).onMouseEnter(s)&&t),"mouseleave"===l&&(t=!1!==a.Ab(n,8).onMouseLeave(s)&&t),t},c.nb,c.i)),a.pb(8,16384,null,0,r.l,[a.k],null,null),a.pb(9,49152,null,0,r.o,[],{label:[0,"label"]},null),(n()(),a.qb(10,0,null,null,2,"button",[["icon","fas:chevron-down"],["vcl-button",""]],[[2,"vclButton",null],[2,"vclDisabled",null],[1,"disabled",0],[2,"vclHovered",null],[2,"vclSquare",null],[1,"aria-label",0]],[[null,"tap"],[null,"mouseenter"],[null,"mouseleave"]],function(n,l,s){var t=!0;return"mouseenter"===l&&(t=!1!==a.Ab(n,11).onMouseEnter(s)&&t),"mouseleave"===l&&(t=!1!==a.Ab(n,11).onMouseLeave(s)&&t),"tap"===l&&(t=!1!==a.Ab(n,14).toggle()&&t),t},c.mb,c.h)),a.pb(11,16384,null,0,r.l,[a.k],null,null),a.pb(12,49152,null,0,r.n,[],{icon:[0,"icon"]},null),(n()(),a.qb(13,0,null,null,9,"vcl-popover",[["class","vclNoPadding"]],[[4,"position",null],[2,"vclPopOver",null],[2,"vclLayoutHidden",null],[4,"visibility",null],[4,"transform",null]],[[null,"offClick"],["window","resize"]],function(n,l,s){var t=!0,u=n.component;return"window:resize"===l&&(t=!1!==a.Ab(n,14).onWindowResize(s)&&t),"offClick"===l&&(t=!1!==u.offClick()&&t),t},c.Ab,c.v)),a.pb(14,4964352,[[1,4],["dropOver",4]],0,r.ab,[a.k,i.b,a.h,[2,r.X]],{target:[0,"target"]},null),a.pb(15,4341760,null,0,r.jd,[a.k],null,{offClick:"offClick"}),(n()(),a.qb(16,0,null,0,6,"vcl-dropdown",[],[[1,"tabindex",0]],[[null,"change"]],function(n,l,s){var a=!0;return"change"===l&&(a=!1!==n.component.onSelect(s)&&a),a},c.qb,c.l)),a.Eb(5120,null,b.l,function(n){return[n]},[r.t]),a.pb(18,4308992,null,1,r.t,[a.k,a.h,i.b,[2,r.r]],{value:[0,"value"]},{change:"change"}),a.Fb(603979776,2,{items:1}),(n()(),a.hb(16777216,null,null,2,null,v)),a.pb(21,278528,null,0,h.k,[a.P,a.M,a.t],{ngForOf:[0,"ngForOf"]},null),a.Bb(22,5),(n()(),a.qb(23,0,null,null,0,"br",[],null,null,null,null,null)),(n()(),a.qb(24,0,null,null,1,"p",[],null,null,null,null,null)),(n()(),a.Hb(25,null,["Selected index: ",""]))],function(n,l){n(l,9,0,"Primary Action"),n(l,12,0,"fas:chevron-down"),n(l,14,0,a.Ab(l,6)),n(l,18,0,1);var s=n(l,22,0,0,1,2,3,4);n(l,21,0,s)},function(n,l){var s=l.component;n(l,7,0,!0,a.Ab(l,8).isDisabled,a.Ab(l,8).isDisabled,a.Ab(l,8).hovered,a.Ab(l,9).ariaLabel),n(l,10,0,!0,a.Ab(l,11).isDisabled,a.Ab(l,11).isDisabled,a.Ab(l,11).hovered,!0,a.Ab(l,12).title),n(l,13,0,"absolute",a.Ab(l,14).enableStyling,a.Ab(l,14).classHidden,a.Ab(l,14).styleVisibility,a.Ab(l,14).transform),n(l,16,0,-1),n(l,25,0,s.value)})}function f(n){return a.Jb(0,[(n()(),a.qb(0,0,null,null,1,"ng-component",[],null,null,null,g,m)),a.pb(1,49152,null,0,t,[],null,null)],null,null)}var d=a.mb("ng-component",t,f,{},{},[]),j=s("2FIb"),y=s("ZYCi"),w=s("PNUx");s.d(l,"FormMashupsDemoModuleNgFactory",function(){return k});var k=a.nb(e,[],function(n){return a.xb([a.yb(512,a.j,a.cb,[[8,[o.a,p.a,d]],[3,a.j],a.y]),a.yb(4608,h.n,h.m,[a.v,[2,h.y]]),a.yb(4608,b.w,b.w,[]),a.yb(4608,b.e,b.e,[]),a.yb(5120,r.ic,function(){return[new r.w,new r.O]},[]),a.yb(1073742336,h.c,h.c,[]),a.yb(1073742336,b.t,b.t,[]),a.yb(1073742336,b.k,b.k,[]),a.yb(1073742336,b.r,b.r,[]),a.yb(1073742336,r.gc,r.gc,[]),a.yb(1073742336,r.Zb,r.Zb,[]),a.yb(1073742336,j.a,j.a,[]),a.yb(1073742336,r.Eb,r.Eb,[]),a.yb(1073742336,r.Jb,r.Jb,[]),a.yb(1073742336,r.Db,r.Db,[]),a.yb(1073742336,r.ub,r.ub,[]),a.yb(1073742336,r.Rb,r.Rb,[]),a.yb(1073742336,r.Tb,r.Tb,[]),a.yb(1073742336,r.Lb,r.Lb,[]),a.yb(1073742336,r.xb,r.xb,[]),a.yb(1073742336,y.m,y.m,[[2,y.s],[2,y.l]]),a.yb(1073742336,e,e,[]),a.yb(1024,y.j,function(){return[[{path:"",component:w.a,data:u}]]},[])])})}}]);