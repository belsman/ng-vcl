(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{196:function(n,l,s){"use strict";s.d(l,"a",function(){return e});var t=s(25),a=function(){var n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,l){n.__proto__=l}||function(n,l){for(var s in l)l.hasOwnProperty(s)&&(n[s]=l[s])};return function(l,s){function t(){this.constructor=l}n(l,s),l.prototype=null===s?Object.create(s):(t.prototype=s.prototype,new t)}}(),e=function(n){function l(l){return n.call(this,l)||this}return a(l,n),Object.defineProperty(l.prototype,"isConnected",{get:function(){return!!this.wormhole&&this.wormhole.isConnected},enumerable:!0,configurable:!0}),l.prototype.ngOnChanges=function(n){var l="attrs"in n&&n.attrs.currentValue||void 0;if("target"in n){this.clearWormholes();var s=n.target.currentValue;s&&(this.wormhole=this.connectWormhole(s,l))}else l&&this.wormhole&&this.wormhole.setAttributes(l)},l.prototype.ngOnDestroy=function(){this.wormhole&&this.wormhole.disconnect()},l}(t.b)},387:function(n,l,s){"use strict";s.r(l);var t=s(0),a=function(){return function(){}}();var e={demo:function(){return{label:"Badge",tabs:{Demo:a,"README.md":{type:"md",content:s(520)},"demo.component.html":{type:"pre",content:s(521)},"demo.component.ts":{type:"pre",content:s(522)}}}}},u=function(){return function(){}}(),c=s(151),r=s(423),o=function(){function n(){}return Object.defineProperty(n.prototype,"vclPrimary",{get:function(){return"primary"===this.type},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"vclSuccess",{get:function(){return"success"===this.type},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"vclInfo",{get:function(){return"info"===this.type},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"vclWarning",{get:function(){return"warning"===this.type},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"vclError",{get:function(){return"error"===this.type},enumerable:!0,configurable:!0}),n}(),p=t.Cb({encapsulation:2,styles:[],data:{}});function i(n){return t.Xb(0,[(n()(),t.Eb(0,0,null,null,1,"h3",[],null,null,null,null,null)),(n()(),t.Vb(-1,null,["Default badge"])),(n()(),t.Eb(2,0,null,null,2,"span",[["vcl-badge",""]],[[2,"vclBadge",null],[2,"vclPrimary",null],[2,"vclSuccess",null],[2,"vclInfo",null],[2,"vclWarning",null],[2,"vclError",null]],null,null,null,null)),t.Db(3,16384,null,0,o,[],{type:[0,"type"]},null),(n()(),t.Vb(-1,null,["default"])),(n()(),t.Eb(5,0,null,null,1,"h3",[],null,null,null,null,null)),(n()(),t.Vb(-1,null,["Primary badge"])),(n()(),t.Eb(7,0,null,null,2,"span",[["vcl-badge","primary"]],[[2,"vclBadge",null],[2,"vclPrimary",null],[2,"vclSuccess",null],[2,"vclInfo",null],[2,"vclWarning",null],[2,"vclError",null]],null,null,null,null)),t.Db(8,16384,null,0,o,[],{type:[0,"type"]},null),(n()(),t.Vb(-1,null,["primary"])),(n()(),t.Eb(10,0,null,null,1,"h3",[],null,null,null,null,null)),(n()(),t.Vb(-1,null,["Success badge"])),(n()(),t.Eb(12,0,null,null,2,"span",[["vcl-badge","success"]],[[2,"vclBadge",null],[2,"vclPrimary",null],[2,"vclSuccess",null],[2,"vclInfo",null],[2,"vclWarning",null],[2,"vclError",null]],null,null,null,null)),t.Db(13,16384,null,0,o,[],{type:[0,"type"]},null),(n()(),t.Vb(-1,null,["success"])),(n()(),t.Eb(15,0,null,null,1,"h3",[],null,null,null,null,null)),(n()(),t.Vb(-1,null,["Info badge"])),(n()(),t.Eb(17,0,null,null,2,"span",[["vcl-badge","info"]],[[2,"vclBadge",null],[2,"vclPrimary",null],[2,"vclSuccess",null],[2,"vclInfo",null],[2,"vclWarning",null],[2,"vclError",null]],null,null,null,null)),t.Db(18,16384,null,0,o,[],{type:[0,"type"]},null),(n()(),t.Vb(-1,null,["info"])),(n()(),t.Eb(20,0,null,null,1,"h3",[],null,null,null,null,null)),(n()(),t.Vb(-1,null,["Warning badge"])),(n()(),t.Eb(22,0,null,null,2,"span",[["vcl-badge","warning"]],[[2,"vclBadge",null],[2,"vclPrimary",null],[2,"vclSuccess",null],[2,"vclInfo",null],[2,"vclWarning",null],[2,"vclError",null]],null,null,null,null)),t.Db(23,16384,null,0,o,[],{type:[0,"type"]},null),(n()(),t.Vb(-1,null,["warning"])),(n()(),t.Eb(25,0,null,null,1,"h3",[],null,null,null,null,null)),(n()(),t.Vb(-1,null,["Error badge"])),(n()(),t.Eb(27,0,null,null,2,"span",[["vcl-badge","error"]],[[2,"vclBadge",null],[2,"vclPrimary",null],[2,"vclSuccess",null],[2,"vclInfo",null],[2,"vclWarning",null],[2,"vclError",null]],null,null,null,null)),t.Db(28,16384,null,0,o,[],{type:[0,"type"]},null),(n()(),t.Vb(-1,null,["error"]))],function(n,l){n(l,3,0,"");n(l,8,0,"primary");n(l,13,0,"success");n(l,18,0,"info");n(l,23,0,"warning");n(l,28,0,"error")},function(n,l){n(l,2,0,!0,t.Ob(l,3).vclPrimary,t.Ob(l,3).vclSuccess,t.Ob(l,3).vclInfo,t.Ob(l,3).vclWarning,t.Ob(l,3).vclError);n(l,7,0,!0,t.Ob(l,8).vclPrimary,t.Ob(l,8).vclSuccess,t.Ob(l,8).vclInfo,t.Ob(l,8).vclWarning,t.Ob(l,8).vclError);n(l,12,0,!0,t.Ob(l,13).vclPrimary,t.Ob(l,13).vclSuccess,t.Ob(l,13).vclInfo,t.Ob(l,13).vclWarning,t.Ob(l,13).vclError);n(l,17,0,!0,t.Ob(l,18).vclPrimary,t.Ob(l,18).vclSuccess,t.Ob(l,18).vclInfo,t.Ob(l,18).vclWarning,t.Ob(l,18).vclError);n(l,22,0,!0,t.Ob(l,23).vclPrimary,t.Ob(l,23).vclSuccess,t.Ob(l,23).vclInfo,t.Ob(l,23).vclWarning,t.Ob(l,23).vclError);n(l,27,0,!0,t.Ob(l,28).vclPrimary,t.Ob(l,28).vclSuccess,t.Ob(l,28).vclInfo,t.Ob(l,28).vclWarning,t.Ob(l,28).vclError)})}var b=t.Ab("ng-component",a,function(n){return t.Xb(0,[(n()(),t.Eb(0,0,null,null,1,"ng-component",[],null,null,null,i,p)),t.Db(1,49152,null,0,a,[],null,null)],null,null)},{},{},[]),h=s(3),g=s(80),d=s(425),f=s(424),v=s(442),m=function(){return function(){}}(),j=s(4),y=s(420);s.d(l,"BadgeDemoModuleNgFactory",function(){return O});var O=t.Bb(u,[],function(n){return t.Lb([t.Mb(512,t.l,t.qb,[[8,[c.a,r.a,b]],[3,t.l],t.F]),t.Mb(4608,h.n,h.m,[t.B,[2,h.y]]),t.Mb(1073742336,h.c,h.c,[]),t.Mb(1073742336,g.a,g.a,[]),t.Mb(1073742336,d.a,d.a,[]),t.Mb(1073742336,f.a,f.a,[]),t.Mb(1073742336,v.a,v.a,[]),t.Mb(1073742336,m,m,[]),t.Mb(1073742336,j.m,j.m,[[2,j.s],[2,j.l]]),t.Mb(1073742336,u,u,[]),t.Mb(1024,j.j,function(){return[[{path:"",component:y.a,data:e}]]},[])])})},420:function(n,l,s){"use strict";s.d(l,"a",function(){return t});var t=function(){function n(n,l){this.activatedRoute=n,this.sanitizer=l,this.tabs=[]}return n.prototype.ngOnInit=function(){var n=this,l=this.activatedRoute.snapshot.data.demo();l?(this.title=l.label,l.tabs?this.tabs=Object.keys(l.tabs).map(function(s){var t,a;return"object"==typeof l.tabs[s]&&l.tabs[s]?a="pre"===(t=l.tabs[s].type)||"html"===t||"md"===t?n.sanitizer.bypassSecurityTrustHtml(l.tabs[s].content):l.tabs[s].content:"function"==typeof l.tabs[s]&&(t="component",a=l.tabs[s]),{name:s,content:a,type:t}}):this.tabs=[]):(this.title="ng-vcl",this.tabs=[])},n}()},421:function(n,l,s){"use strict";s.d(l,"b",function(){return t}),s.d(l,"a",function(){return a});var t=function(){return function(){}}(),a=function(){return function(){this.disabled=!1,this.tabClass=""}}()},422:function(n,l,s){"use strict";s.d(l,"a",function(){return u});var t=s(25),a=s(0),e=s(421),u=function(){function n(){this.layout="",this.tabbableClass="",this.tabsClass="",this.tabContentClass="",this.hideContent=!1,this.borders=!1,this.selectedTabIndex=0,this.selectedTabIndexChange$=new a.q}return Object.defineProperty(n.prototype,"tabContent",{set:function(n){n&&(this.wormholeHost=new t.b(n))},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"selectedTabIndexChange",{get:function(){return this.selectedTabIndexChange$.asObservable()},enumerable:!0,configurable:!0}),n.prototype.selectTab=function(n){if(this.tabs){var l,s,t=this.tabs.toArray();n instanceof e.a?(l=t.indexOf(n),s=n):"number"==typeof n&&t[n]?s=t[l=n]:(l=-1,s=null),l>=0&&s instanceof e.a&&!s.disabled&&(this.wormholeHost&&(this.wormholeHost.clearWormholes(),this.wormholeHost.connectWormhole(s.content)),this.selectedTabIndex=l)}},n.prototype.onTabClick=function(n){this.selectTab(n),this.selectedTabIndexChange$.emit(this.selectedTabIndex)},n.prototype.ngAfterContentInit=function(){this.selectTab(this.selectedTabIndex)},n.prototype.ngOnDestroy=function(){this.wormholeHost&&this.wormholeHost.clearWormholes()},n}()},423:function(n,l,s){"use strict";s.d(l,"a",function(){return w});var t=s(0),a=s(196),e=s(426),u=s(421),c=s(3),r=s(427),o=s(422),p=s(420),i=s(4),b=s(6),h=t.Cb({encapsulation:2,styles:[],data:{}});function g(n){return t.Xb(0,[(n()(),t.Vb(0,null,["",""]))],null,function(n,l){n(l,0,0,l.parent.context.$implicit.name)})}function d(n){return t.Xb(0,[(n()(),t.Eb(0,16777216,null,null,1,"wormhole",[],null,null,null,null,null)),t.Db(1,671744,null,0,a.a,[t.db],{target:[0,"target"]},null),(n()(),t.vb(0,null,null,0))],function(n,l){n(l,1,0,l.parent.context.$implicit.content)},null)}function f(n){return t.Xb(0,[(n()(),t.Eb(0,0,null,null,2,"div",[],null,null,null,null,null)),(n()(),t.Eb(1,0,null,null,1,"pre",[],null,null,null,null,null)),(n()(),t.Vb(2,null,["",""]))],null,function(n,l){n(l,2,0,l.parent.context.$implicit.content)})}function v(n){return t.Xb(0,[(n()(),t.Eb(0,0,null,null,0,"div",[],[[8,"innerHTML",1]],null,null,null,null))],null,function(n,l){n(l,0,0,l.parent.context.$implicit.content)})}function m(n){return t.Xb(0,[(n()(),t.Eb(0,0,null,null,0,"div",[["class","markdown-body"]],[[8,"innerHTML",1]],null,null,null,null))],null,function(n,l){n(l,0,0,l.parent.context.$implicit.content)})}function j(n){return t.Xb(0,[(n()(),t.Eb(0,0,null,null,0,"pre",[],[[8,"innerHTML",1]],null,null,null,null))],null,function(n,l){n(l,0,0,l.parent.context.$implicit.content)})}function y(n){return t.Xb(0,[(n()(),t.Eb(0,0,null,null,14,"vcl-tab",[],null,null,null,e.b,e.a)),t.Db(1,49152,[[1,4]],1,u.a,[],null,null),t.Tb(335544320,2,{label:0}),(n()(),t.vb(0,[[2,2]],0,1,null,g)),t.Db(4,16384,null,0,u.b,[],null,null),(n()(),t.vb(16777216,null,0,1,null,d)),t.Db(6,16384,null,0,c.l,[t.db,t.Z],{ngIf:[0,"ngIf"]},null),(n()(),t.vb(16777216,null,0,1,null,f)),t.Db(8,16384,null,0,c.l,[t.db,t.Z],{ngIf:[0,"ngIf"]},null),(n()(),t.vb(16777216,null,0,1,null,v)),t.Db(10,16384,null,0,c.l,[t.db,t.Z],{ngIf:[0,"ngIf"]},null),(n()(),t.vb(16777216,null,0,1,null,m)),t.Db(12,16384,null,0,c.l,[t.db,t.Z],{ngIf:[0,"ngIf"]},null),(n()(),t.vb(16777216,null,0,1,null,j)),t.Db(14,16384,null,0,c.l,[t.db,t.Z],{ngIf:[0,"ngIf"]},null)],function(n,l){n(l,6,0,"component"===l.context.$implicit.type),n(l,8,0,"text"===l.context.$implicit.type),n(l,10,0,"html"===l.context.$implicit.type),n(l,12,0,"md"===l.context.$implicit.type),n(l,14,0,"pre"===l.context.$implicit.type)},null)}function O(n){return t.Xb(0,[(n()(),t.Eb(0,0,null,null,5,"div",[],null,null,null,null,null)),(n()(),t.Eb(1,0,null,null,4,"vcl-tab-nav",[["borders","true"]],null,null,null,r.b,r.a)),t.Db(2,1228800,null,1,o.a,[],{borders:[0,"borders"]},null),t.Tb(603979776,1,{tabs:1}),(n()(),t.vb(16777216,null,0,1,null,y)),t.Db(5,278528,null,0,c.k,[t.db,t.Z,t.z],{ngForOf:[0,"ngForOf"]},null)],function(n,l){var s=l.component;n(l,2,0,"true"),n(l,5,0,s.tabs)},null)}function E(n){return t.Xb(0,[(n()(),t.Eb(0,0,null,null,1,"h2",[["class","vclArticleHeader"]],null,null,null,null,null)),(n()(),t.Vb(1,null,[" ",""])),(n()(),t.vb(16777216,null,null,1,null,O)),t.Db(3,16384,null,0,c.l,[t.db,t.Z],{ngIf:[0,"ngIf"]},null)],function(n,l){n(l,3,0,l.component.tabs.length>0)},function(n,l){n(l,1,0,l.component.title)})}var w=t.Ab("ng-component",p.a,function(n){return t.Xb(0,[(n()(),t.Eb(0,0,null,null,1,"ng-component",[],null,null,null,E,h)),t.Db(1,114688,null,0,p.a,[i.a,b.c],null,null)],function(n,l){n(l,1,0)},null)},{},{},[])},424:function(n,l,s){"use strict";s.d(l,"a",function(){return t});s(420);var t=function(){return function(){}}()},425:function(n,l,s){"use strict";s.d(l,"a",function(){return t});var t=function(){return function(){}}()},426:function(n,l,s){"use strict";s.d(l,"a",function(){return e}),s.d(l,"b",function(){return c});var t=s(0),a=s(421),e=t.Cb({encapsulation:2,styles:[],data:{}});function u(n){return t.Xb(0,[t.Nb(null,0),(n()(),t.vb(0,null,null,0))],null,null)}function c(n){return t.Xb(0,[t.Tb(402653184,1,{content:0}),(n()(),t.vb(0,[[1,2]],null,0,null,u))],null,null)}a.a},427:function(n,l,s){"use strict";s.d(l,"a",function(){return c}),s.d(l,"b",function(){return o});var t=s(0),a=s(196),e=s(3),u=s(422),c=t.Cb({encapsulation:2,styles:[],data:{}});function r(n){return t.Xb(0,[(n()(),t.Eb(0,0,null,null,3,"div",[["role","tab"]],[[8,"className",0],[2,"vclDisabled",null],[2,"vclSelected",null],[2,"aria-selected",null]],[[null,"click"]],function(n,l,s){var t=!0,a=n.component;"click"===l&&(t=!1!==a.onTabClick(n.context.$implicit)&&t);return t},null,null)),(n()(),t.Eb(1,0,null,null,2,"span",[["class","vclTabLabel"]],null,null,null,null,null)),(n()(),t.Eb(2,16777216,null,null,1,"wormhole",[],null,null,null,null,null)),t.Db(3,671744,null,0,a.a,[t.db],{target:[0,"target"]},null)],function(n,l){n(l,3,0,l.context.$implicit.label)},function(n,l){var s=l.component;n(l,0,0,t.Gb(1,"vclTab ",l.context.$implicit.tabClass,""),l.context.$implicit.disabled,s.selectedTabIndex===l.context.index,s.selectedTabIndex===l.context.index)})}function o(n){return t.Xb(0,[t.Tb(402653184,1,{tabContent:0}),(n()(),t.Eb(1,0,null,null,8,"div",[],[[8,"className",0],[2,"vclTabsLeft",null],[2,"vclTabsRight",null]],null,null,null,null)),(n()(),t.Eb(2,0,null,null,2,"div",[["role","tablist"]],[[8,"className",0],[2,"vclTabStyleUni",null]],null,null,null,null)),(n()(),t.vb(16777216,null,null,1,null,r)),t.Db(4,278528,null,0,e.k,[t.db,t.Z,t.z],{ngForOf:[0,"ngForOf"]},null),(n()(),t.Eb(5,0,null,null,4,"div",[],[[4,"display",null],[8,"className",0],[2,"vclNoBorder",null]],null,null,null,null)),(n()(),t.Eb(6,0,null,null,1,"div",[["class","vclTabPanel"],["role","tabpanel"]],null,null,null,null,null)),(n()(),t.Eb(7,16777216,[[1,3],["tabContent",1]],null,0,"div",[],null,null,null,null,null)),(n()(),t.Eb(8,0,null,null,1,"div",[["class","vclTabPanel"],["role","tabpanel"]],null,null,null,null,null)),t.Nb(null,0)],function(n,l){n(l,4,0,l.component.tabs)},function(n,l){var s=l.component;n(l,1,0,t.Gb(1,"vclTabbable ",s.tabbableClass,""),"left"===s.layout,"right"===s.layout),n(l,2,0,t.Gb(1,"vclTabs ",s.tabsClass,""),!!s.borders),n(l,5,0,!0===s.hideContent?"none":null,t.Gb(1,"vclTabContent ",s.tabContentClass,""),!s.borders)})}u.a},442:function(n,l,s){"use strict";s.d(l,"a",function(){return t});var t=function(){return function(){}}()},520:function(n,l){n.exports='<h1 id="vcl-badge">vcl-badge</h1>\n<p>A visually highlighted tag to attribute items.</p>\n<h2 id="usage">Usage</h2>\n<pre class="hljs"><span class="hljs-keyword">import</span> { VCLBadgeModule } <span class="hljs-keyword">from</span> <span class="hljs-string">&apos;@ng-vcl/ng-vcl&apos;</span>;\n\n@NgModule({\n  <span class="hljs-attr">imports</span>: [ VCLBadgeModule ],\n  ...\n})\n<span class="hljs-keyword">export</span> <span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">AppComponent</span> </span>{}</pre>\n<pre class="hljs"><span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">vcl-badge</span>&gt;</span>default<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">vcl-badge</span>=<span class="hljs-string">&quot;primary&quot;</span>&gt;</span>primary<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">vcl-badge</span>=<span class="hljs-string">&quot;success&quot;</span>&gt;</span>success<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">vcl-badge</span>=<span class="hljs-string">&quot;info&quot;</span>&gt;</span>info<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">vcl-badge</span>=<span class="hljs-string">&quot;warning&quot;</span>&gt;</span>warning<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">vcl-badge</span>=<span class="hljs-string">&quot;error&quot;</span>&gt;</span>error<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span></pre>\n<h3 id="api">API</h3>\n<h4 id="vcl-badge-attributes">vcl-badge attributes</h4>\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Type</th>\n<th>Default</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody><tr>\n<td><code>vcl-badge</code></td>\n<td>string</td>\n<td></td>\n<td>the badge&apos;s type</td>\n</tr>\n</tbody></table>\n'},521:function(n,l){n.exports='<span class="hljs-tag">&lt;<span class="hljs-name">h3</span>&gt;</span>Default badge<span class="hljs-tag">&lt;/<span class="hljs-name">h3</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">vcl-badge</span>&gt;</span>default<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">h3</span>&gt;</span>Primary badge<span class="hljs-tag">&lt;/<span class="hljs-name">h3</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">vcl-badge</span>=<span class="hljs-string">"primary"</span>&gt;</span>primary<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">h3</span>&gt;</span>Success badge<span class="hljs-tag">&lt;/<span class="hljs-name">h3</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">vcl-badge</span>=<span class="hljs-string">"success"</span>&gt;</span>success<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">h3</span>&gt;</span>Info badge<span class="hljs-tag">&lt;/<span class="hljs-name">h3</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">vcl-badge</span>=<span class="hljs-string">"info"</span>&gt;</span>info<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">h3</span>&gt;</span>Warning badge<span class="hljs-tag">&lt;/<span class="hljs-name">h3</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">vcl-badge</span>=<span class="hljs-string">"warning"</span>&gt;</span>warning<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">h3</span>&gt;</span>Error badge<span class="hljs-tag">&lt;/<span class="hljs-name">h3</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">vcl-badge</span>=<span class="hljs-string">"error"</span>&gt;</span>error<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>\n'},522:function(n,l){n.exports='<span class="hljs-keyword">import</span> { Component, OnInit } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/core\'</span>;\n\n<span class="hljs-meta">@Component</span>({\n  templateUrl: <span class="hljs-string">\'demo.component.html\'</span>\n})\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> BadgeDemoComponent {\n}\n'}}]);