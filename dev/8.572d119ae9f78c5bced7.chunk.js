(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{196:function(l,n,s){"use strict";s.d(n,"a",function(){return e});var t=s(25),a=function(){var l=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(l,n){l.__proto__=n}||function(l,n){for(var s in n)n.hasOwnProperty(s)&&(l[s]=n[s])};return function(n,s){function t(){this.constructor=n}l(n,s),n.prototype=null===s?Object.create(s):(t.prototype=s.prototype,new t)}}(),e=function(l){function n(n){return l.call(this,n)||this}return a(n,l),Object.defineProperty(n.prototype,"isConnected",{get:function(){return!!this.wormhole&&this.wormhole.isConnected},enumerable:!0,configurable:!0}),n.prototype.ngOnChanges=function(l){var n="attrs"in l&&l.attrs.currentValue||void 0;if("target"in l){this.clearWormholes();var s=l.target.currentValue;s&&(this.wormhole=this.connectWormhole(s,n))}else n&&this.wormhole&&this.wormhole.setAttributes(n)},n.prototype.ngOnDestroy=function(){this.wormhole&&this.wormhole.disconnect()},n}(t.b)},388:function(l,n,s){"use strict";s.r(n);var t=s(0),a=function(){return function(){}}();var e={demo:function(){return{label:"Label",tabs:{Demo:a,"README.md":{type:"md",content:s(523)},"demo.component.html":{type:"pre",content:s(524)},"demo.component.ts":{type:"pre",content:s(525)}}}}},u=function(){return function(){}}(),c=s(151),r=s(423),o=function(){function l(){}return Object.defineProperty(l.prototype,"vclPrimary",{get:function(){return"primary"===this.type},enumerable:!0,configurable:!0}),Object.defineProperty(l.prototype,"vclSuccess",{get:function(){return"success"===this.type},enumerable:!0,configurable:!0}),Object.defineProperty(l.prototype,"vclInfo",{get:function(){return"info"===this.type},enumerable:!0,configurable:!0}),Object.defineProperty(l.prototype,"vclWarning",{get:function(){return"warning"===this.type},enumerable:!0,configurable:!0}),Object.defineProperty(l.prototype,"vclError",{get:function(){return"error"===this.type},enumerable:!0,configurable:!0}),l}(),p=t.Cb({encapsulation:2,styles:[],data:{}});function i(l){return t.Xb(0,[(l()(),t.Eb(0,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),t.Vb(-1,null,["Default label"])),(l()(),t.Eb(2,0,null,null,2,"span",[["vcl-label",""]],[[2,"vclLabel",null],[2,"vclPrimary",null],[2,"vclSuccess",null],[2,"vclInfo",null],[2,"vclWarning",null],[2,"vclError",null]],null,null,null,null)),t.Db(3,16384,null,0,o,[],{type:[0,"type"]},null),(l()(),t.Vb(-1,null,["default"])),(l()(),t.Eb(5,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),t.Vb(-1,null,["Primary label"])),(l()(),t.Eb(7,0,null,null,2,"span",[["vcl-label","primary"]],[[2,"vclLabel",null],[2,"vclPrimary",null],[2,"vclSuccess",null],[2,"vclInfo",null],[2,"vclWarning",null],[2,"vclError",null]],null,null,null,null)),t.Db(8,16384,null,0,o,[],{type:[0,"type"]},null),(l()(),t.Vb(-1,null,["primary"])),(l()(),t.Eb(10,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),t.Vb(-1,null,["Success label"])),(l()(),t.Eb(12,0,null,null,2,"span",[["vcl-label","success"]],[[2,"vclLabel",null],[2,"vclPrimary",null],[2,"vclSuccess",null],[2,"vclInfo",null],[2,"vclWarning",null],[2,"vclError",null]],null,null,null,null)),t.Db(13,16384,null,0,o,[],{type:[0,"type"]},null),(l()(),t.Vb(-1,null,["success"])),(l()(),t.Eb(15,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),t.Vb(-1,null,["Info label"])),(l()(),t.Eb(17,0,null,null,2,"span",[["vcl-label","info"]],[[2,"vclLabel",null],[2,"vclPrimary",null],[2,"vclSuccess",null],[2,"vclInfo",null],[2,"vclWarning",null],[2,"vclError",null]],null,null,null,null)),t.Db(18,16384,null,0,o,[],{type:[0,"type"]},null),(l()(),t.Vb(-1,null,["info"])),(l()(),t.Eb(20,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),t.Vb(-1,null,["Warning label"])),(l()(),t.Eb(22,0,null,null,2,"span",[["vcl-label","warning"]],[[2,"vclLabel",null],[2,"vclPrimary",null],[2,"vclSuccess",null],[2,"vclInfo",null],[2,"vclWarning",null],[2,"vclError",null]],null,null,null,null)),t.Db(23,16384,null,0,o,[],{type:[0,"type"]},null),(l()(),t.Vb(-1,null,["warning"])),(l()(),t.Eb(25,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),t.Vb(-1,null,["Error label"])),(l()(),t.Eb(27,0,null,null,2,"span",[["vcl-label","error"]],[[2,"vclLabel",null],[2,"vclPrimary",null],[2,"vclSuccess",null],[2,"vclInfo",null],[2,"vclWarning",null],[2,"vclError",null]],null,null,null,null)),t.Db(28,16384,null,0,o,[],{type:[0,"type"]},null),(l()(),t.Vb(-1,null,["error"]))],function(l,n){l(n,3,0,"");l(n,8,0,"primary");l(n,13,0,"success");l(n,18,0,"info");l(n,23,0,"warning");l(n,28,0,"error")},function(l,n){l(n,2,0,!0,t.Ob(n,3).vclPrimary,t.Ob(n,3).vclSuccess,t.Ob(n,3).vclInfo,t.Ob(n,3).vclWarning,t.Ob(n,3).vclError);l(n,7,0,!0,t.Ob(n,8).vclPrimary,t.Ob(n,8).vclSuccess,t.Ob(n,8).vclInfo,t.Ob(n,8).vclWarning,t.Ob(n,8).vclError);l(n,12,0,!0,t.Ob(n,13).vclPrimary,t.Ob(n,13).vclSuccess,t.Ob(n,13).vclInfo,t.Ob(n,13).vclWarning,t.Ob(n,13).vclError);l(n,17,0,!0,t.Ob(n,18).vclPrimary,t.Ob(n,18).vclSuccess,t.Ob(n,18).vclInfo,t.Ob(n,18).vclWarning,t.Ob(n,18).vclError);l(n,22,0,!0,t.Ob(n,23).vclPrimary,t.Ob(n,23).vclSuccess,t.Ob(n,23).vclInfo,t.Ob(n,23).vclWarning,t.Ob(n,23).vclError);l(n,27,0,!0,t.Ob(n,28).vclPrimary,t.Ob(n,28).vclSuccess,t.Ob(n,28).vclInfo,t.Ob(n,28).vclWarning,t.Ob(n,28).vclError)})}var b=t.Ab("ng-component",a,function(l){return t.Xb(0,[(l()(),t.Eb(0,0,null,null,1,"ng-component",[],null,null,null,i,p)),t.Db(1,49152,null,0,a,[],null,null)],null,null)},{},{},[]),h=s(3),f=s(80),g=s(425),v=s(424),m=s(442),d=s(473),j=s(4),y=s(420);s.d(n,"LabelDemoModuleNgFactory",function(){return O});var O=t.Bb(u,[],function(l){return t.Lb([t.Mb(512,t.l,t.qb,[[8,[c.a,r.a,b]],[3,t.l],t.F]),t.Mb(4608,h.n,h.m,[t.B,[2,h.y]]),t.Mb(1073742336,h.c,h.c,[]),t.Mb(1073742336,f.a,f.a,[]),t.Mb(1073742336,g.a,g.a,[]),t.Mb(1073742336,v.a,v.a,[]),t.Mb(1073742336,m.a,m.a,[]),t.Mb(1073742336,d.a,d.a,[]),t.Mb(1073742336,j.m,j.m,[[2,j.s],[2,j.l]]),t.Mb(1073742336,u,u,[]),t.Mb(1024,j.j,function(){return[[{path:"",component:y.a,data:e}]]},[])])})},420:function(l,n,s){"use strict";s.d(n,"a",function(){return t});var t=function(){function l(l,n){this.activatedRoute=l,this.sanitizer=n,this.tabs=[]}return l.prototype.ngOnInit=function(){var l=this,n=this.activatedRoute.snapshot.data.demo();n?(this.title=n.label,n.tabs?this.tabs=Object.keys(n.tabs).map(function(s){var t,a;return"object"==typeof n.tabs[s]&&n.tabs[s]?a="pre"===(t=n.tabs[s].type)||"html"===t||"md"===t?l.sanitizer.bypassSecurityTrustHtml(n.tabs[s].content):n.tabs[s].content:"function"==typeof n.tabs[s]&&(t="component",a=n.tabs[s]),{name:s,content:a,type:t}}):this.tabs=[]):(this.title="ng-vcl",this.tabs=[])},l}()},421:function(l,n,s){"use strict";s.d(n,"b",function(){return t}),s.d(n,"a",function(){return a});var t=function(){return function(){}}(),a=function(){return function(){this.disabled=!1,this.tabClass=""}}()},422:function(l,n,s){"use strict";s.d(n,"a",function(){return u});var t=s(25),a=s(0),e=s(421),u=function(){function l(){this.layout="",this.tabbableClass="",this.tabsClass="",this.tabContentClass="",this.hideContent=!1,this.borders=!1,this.selectedTabIndex=0,this.selectedTabIndexChange$=new a.q}return Object.defineProperty(l.prototype,"tabContent",{set:function(l){l&&(this.wormholeHost=new t.b(l))},enumerable:!0,configurable:!0}),Object.defineProperty(l.prototype,"selectedTabIndexChange",{get:function(){return this.selectedTabIndexChange$.asObservable()},enumerable:!0,configurable:!0}),l.prototype.selectTab=function(l){if(this.tabs){var n,s,t=this.tabs.toArray();l instanceof e.a?(n=t.indexOf(l),s=l):"number"==typeof l&&t[l]?s=t[n=l]:(n=-1,s=null),n>=0&&s instanceof e.a&&!s.disabled&&(this.wormholeHost&&(this.wormholeHost.clearWormholes(),this.wormholeHost.connectWormhole(s.content)),this.selectedTabIndex=n)}},l.prototype.onTabClick=function(l){this.selectTab(l),this.selectedTabIndexChange$.emit(this.selectedTabIndex)},l.prototype.ngAfterContentInit=function(){this.selectTab(this.selectedTabIndex)},l.prototype.ngOnDestroy=function(){this.wormholeHost&&this.wormholeHost.clearWormholes()},l}()},423:function(l,n,s){"use strict";s.d(n,"a",function(){return w});var t=s(0),a=s(196),e=s(426),u=s(421),c=s(3),r=s(427),o=s(422),p=s(420),i=s(4),b=s(6),h=t.Cb({encapsulation:2,styles:[],data:{}});function f(l){return t.Xb(0,[(l()(),t.Vb(0,null,["",""]))],null,function(l,n){l(n,0,0,n.parent.context.$implicit.name)})}function g(l){return t.Xb(0,[(l()(),t.Eb(0,16777216,null,null,1,"wormhole",[],null,null,null,null,null)),t.Db(1,671744,null,0,a.a,[t.db],{target:[0,"target"]},null),(l()(),t.vb(0,null,null,0))],function(l,n){l(n,1,0,n.parent.context.$implicit.content)},null)}function v(l){return t.Xb(0,[(l()(),t.Eb(0,0,null,null,2,"div",[],null,null,null,null,null)),(l()(),t.Eb(1,0,null,null,1,"pre",[],null,null,null,null,null)),(l()(),t.Vb(2,null,["",""]))],null,function(l,n){l(n,2,0,n.parent.context.$implicit.content)})}function m(l){return t.Xb(0,[(l()(),t.Eb(0,0,null,null,0,"div",[],[[8,"innerHTML",1]],null,null,null,null))],null,function(l,n){l(n,0,0,n.parent.context.$implicit.content)})}function d(l){return t.Xb(0,[(l()(),t.Eb(0,0,null,null,0,"div",[["class","markdown-body"]],[[8,"innerHTML",1]],null,null,null,null))],null,function(l,n){l(n,0,0,n.parent.context.$implicit.content)})}function j(l){return t.Xb(0,[(l()(),t.Eb(0,0,null,null,0,"pre",[],[[8,"innerHTML",1]],null,null,null,null))],null,function(l,n){l(n,0,0,n.parent.context.$implicit.content)})}function y(l){return t.Xb(0,[(l()(),t.Eb(0,0,null,null,14,"vcl-tab",[],null,null,null,e.b,e.a)),t.Db(1,49152,[[1,4]],1,u.a,[],null,null),t.Tb(335544320,2,{label:0}),(l()(),t.vb(0,[[2,2]],0,1,null,f)),t.Db(4,16384,null,0,u.b,[],null,null),(l()(),t.vb(16777216,null,0,1,null,g)),t.Db(6,16384,null,0,c.l,[t.db,t.Z],{ngIf:[0,"ngIf"]},null),(l()(),t.vb(16777216,null,0,1,null,v)),t.Db(8,16384,null,0,c.l,[t.db,t.Z],{ngIf:[0,"ngIf"]},null),(l()(),t.vb(16777216,null,0,1,null,m)),t.Db(10,16384,null,0,c.l,[t.db,t.Z],{ngIf:[0,"ngIf"]},null),(l()(),t.vb(16777216,null,0,1,null,d)),t.Db(12,16384,null,0,c.l,[t.db,t.Z],{ngIf:[0,"ngIf"]},null),(l()(),t.vb(16777216,null,0,1,null,j)),t.Db(14,16384,null,0,c.l,[t.db,t.Z],{ngIf:[0,"ngIf"]},null)],function(l,n){l(n,6,0,"component"===n.context.$implicit.type),l(n,8,0,"text"===n.context.$implicit.type),l(n,10,0,"html"===n.context.$implicit.type),l(n,12,0,"md"===n.context.$implicit.type),l(n,14,0,"pre"===n.context.$implicit.type)},null)}function O(l){return t.Xb(0,[(l()(),t.Eb(0,0,null,null,5,"div",[],null,null,null,null,null)),(l()(),t.Eb(1,0,null,null,4,"vcl-tab-nav",[["borders","true"]],null,null,null,r.b,r.a)),t.Db(2,1228800,null,1,o.a,[],{borders:[0,"borders"]},null),t.Tb(603979776,1,{tabs:1}),(l()(),t.vb(16777216,null,0,1,null,y)),t.Db(5,278528,null,0,c.k,[t.db,t.Z,t.z],{ngForOf:[0,"ngForOf"]},null)],function(l,n){var s=n.component;l(n,2,0,"true"),l(n,5,0,s.tabs)},null)}function E(l){return t.Xb(0,[(l()(),t.Eb(0,0,null,null,1,"h2",[["class","vclArticleHeader"]],null,null,null,null,null)),(l()(),t.Vb(1,null,[" ",""])),(l()(),t.vb(16777216,null,null,1,null,O)),t.Db(3,16384,null,0,c.l,[t.db,t.Z],{ngIf:[0,"ngIf"]},null)],function(l,n){l(n,3,0,n.component.tabs.length>0)},function(l,n){l(n,1,0,n.component.title)})}var w=t.Ab("ng-component",p.a,function(l){return t.Xb(0,[(l()(),t.Eb(0,0,null,null,1,"ng-component",[],null,null,null,E,h)),t.Db(1,114688,null,0,p.a,[i.a,b.c],null,null)],function(l,n){l(n,1,0)},null)},{},{},[])},424:function(l,n,s){"use strict";s.d(n,"a",function(){return t});s(420);var t=function(){return function(){}}()},425:function(l,n,s){"use strict";s.d(n,"a",function(){return t});var t=function(){return function(){}}()},426:function(l,n,s){"use strict";s.d(n,"a",function(){return e}),s.d(n,"b",function(){return c});var t=s(0),a=s(421),e=t.Cb({encapsulation:2,styles:[],data:{}});function u(l){return t.Xb(0,[t.Nb(null,0),(l()(),t.vb(0,null,null,0))],null,null)}function c(l){return t.Xb(0,[t.Tb(402653184,1,{content:0}),(l()(),t.vb(0,[[1,2]],null,0,null,u))],null,null)}a.a},427:function(l,n,s){"use strict";s.d(n,"a",function(){return c}),s.d(n,"b",function(){return o});var t=s(0),a=s(196),e=s(3),u=s(422),c=t.Cb({encapsulation:2,styles:[],data:{}});function r(l){return t.Xb(0,[(l()(),t.Eb(0,0,null,null,3,"div",[["role","tab"]],[[8,"className",0],[2,"vclDisabled",null],[2,"vclSelected",null],[2,"aria-selected",null]],[[null,"click"]],function(l,n,s){var t=!0,a=l.component;"click"===n&&(t=!1!==a.onTabClick(l.context.$implicit)&&t);return t},null,null)),(l()(),t.Eb(1,0,null,null,2,"span",[["class","vclTabLabel"]],null,null,null,null,null)),(l()(),t.Eb(2,16777216,null,null,1,"wormhole",[],null,null,null,null,null)),t.Db(3,671744,null,0,a.a,[t.db],{target:[0,"target"]},null)],function(l,n){l(n,3,0,n.context.$implicit.label)},function(l,n){var s=n.component;l(n,0,0,t.Gb(1,"vclTab ",n.context.$implicit.tabClass,""),n.context.$implicit.disabled,s.selectedTabIndex===n.context.index,s.selectedTabIndex===n.context.index)})}function o(l){return t.Xb(0,[t.Tb(402653184,1,{tabContent:0}),(l()(),t.Eb(1,0,null,null,8,"div",[],[[8,"className",0],[2,"vclTabsLeft",null],[2,"vclTabsRight",null]],null,null,null,null)),(l()(),t.Eb(2,0,null,null,2,"div",[["role","tablist"]],[[8,"className",0],[2,"vclTabStyleUni",null]],null,null,null,null)),(l()(),t.vb(16777216,null,null,1,null,r)),t.Db(4,278528,null,0,e.k,[t.db,t.Z,t.z],{ngForOf:[0,"ngForOf"]},null),(l()(),t.Eb(5,0,null,null,4,"div",[],[[4,"display",null],[8,"className",0],[2,"vclNoBorder",null]],null,null,null,null)),(l()(),t.Eb(6,0,null,null,1,"div",[["class","vclTabPanel"],["role","tabpanel"]],null,null,null,null,null)),(l()(),t.Eb(7,16777216,[[1,3],["tabContent",1]],null,0,"div",[],null,null,null,null,null)),(l()(),t.Eb(8,0,null,null,1,"div",[["class","vclTabPanel"],["role","tabpanel"]],null,null,null,null,null)),t.Nb(null,0)],function(l,n){l(n,4,0,n.component.tabs)},function(l,n){var s=n.component;l(n,1,0,t.Gb(1,"vclTabbable ",s.tabbableClass,""),"left"===s.layout,"right"===s.layout),l(n,2,0,t.Gb(1,"vclTabs ",s.tabsClass,""),!!s.borders),l(n,5,0,!0===s.hideContent?"none":null,t.Gb(1,"vclTabContent ",s.tabContentClass,""),!s.borders)})}u.a},442:function(l,n,s){"use strict";s.d(n,"a",function(){return t});var t=function(){return function(){}}()},473:function(l,n,s){"use strict";s.d(n,"a",function(){return t});var t=function(){return function(){}}()},523:function(l,n){l.exports='<h1 id="vcl-label">vcl-label</h1>\n<p>A visually highlighted tag to attribute items.</p>\n<h2 id="usage">Usage</h2>\n<pre class="hljs"><span class="hljs-keyword">import</span> { VCLLabelModule } <span class="hljs-keyword">from</span> <span class="hljs-string">&apos;@ng-vcl/ng-vcl&apos;</span>;\n\n@NgModule({\n  <span class="hljs-attr">imports</span>: [ VCLLabelModule ],\n  ...\n})\n<span class="hljs-keyword">export</span> <span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">AppComponent</span> </span>{}</pre>\n<pre class="hljs"><span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">vcl-label</span>&gt;</span>default<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">vcl-label</span>=<span class="hljs-string">&quot;primary&quot;</span>&gt;</span>primary<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">vcl-label</span>=<span class="hljs-string">&quot;success&quot;</span>&gt;</span>success<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">vcl-label</span>=<span class="hljs-string">&quot;info&quot;</span>&gt;</span>info<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">vcl-label</span>=<span class="hljs-string">&quot;warning&quot;</span>&gt;</span>warning<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">vcl-label</span>=<span class="hljs-string">&quot;error&quot;</span>&gt;</span>error<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span></pre>\n<h3 id="api">API</h3>\n<h4 id="vcl-label-attributes">vcl-label attributes</h4>\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Type</th>\n<th>Default</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody><tr>\n<td><code>vcl-label</code></td>\n<td>string</td>\n<td></td>\n<td>the label&apos;s type</td>\n</tr>\n</tbody></table>\n'},524:function(l,n){l.exports='<span class="hljs-tag">&lt;<span class="hljs-name">h3</span>&gt;</span>Default label<span class="hljs-tag">&lt;/<span class="hljs-name">h3</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">vcl-label</span>&gt;</span>default<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">h3</span>&gt;</span>Primary label<span class="hljs-tag">&lt;/<span class="hljs-name">h3</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">vcl-label</span>=<span class="hljs-string">"primary"</span>&gt;</span>primary<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">h3</span>&gt;</span>Success label<span class="hljs-tag">&lt;/<span class="hljs-name">h3</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">vcl-label</span>=<span class="hljs-string">"success"</span>&gt;</span>success<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">h3</span>&gt;</span>Info label<span class="hljs-tag">&lt;/<span class="hljs-name">h3</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">vcl-label</span>=<span class="hljs-string">"info"</span>&gt;</span>info<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">h3</span>&gt;</span>Warning label<span class="hljs-tag">&lt;/<span class="hljs-name">h3</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">vcl-label</span>=<span class="hljs-string">"warning"</span>&gt;</span>warning<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">h3</span>&gt;</span>Error label<span class="hljs-tag">&lt;/<span class="hljs-name">h3</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">vcl-label</span>=<span class="hljs-string">"error"</span>&gt;</span>error<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>\n'},525:function(l,n){l.exports='<span class="hljs-keyword">import</span> { Component } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/core\'</span>;\n\n<span class="hljs-meta">@Component</span>({\n  templateUrl: <span class="hljs-string">\'demo.component.html\'</span>\n})\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> LabelDemoComponent { }\n'}}]);