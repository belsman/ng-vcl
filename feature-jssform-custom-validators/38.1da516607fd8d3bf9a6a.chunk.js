(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{207:function(n,l,t){"use strict";t.d(l,"a",function(){return u});var e=t(1),u=function(n){function l(l){return n.call(this,l)||this}return Object(e.c)(l,n),Object.defineProperty(l.prototype,"isConnected",{get:function(){return!!this.wormhole&&this.wormhole.isConnected},enumerable:!0,configurable:!0}),l.prototype.ngOnChanges=function(n){var l="attrs"in n&&n.attrs.currentValue||void 0;if("target"in n){this.clearWormholes();var t=n.target.currentValue;t&&(this.wormhole=this.connectWormhole(t,l))}else l&&this.wormhole&&this.wormhole.setAttributes(l)},l.prototype.ngOnDestroy=function(){this.wormhole&&this.wormhole.disconnect()},l}(t(93).b)},400:function(n,l,t){"use strict";t.r(l);var e=t(0),u=function(){return function(){this.data1="line 1\nline 2\nline 3\nline 4\nline 5\nline 6",this.data2="line 1\nline 2\nline 3\nline 4\nline 5\nline 6",this.data3="line 1\nline 2\nline 3\nline 4\nline 5\nline 6"}}();var a={demo:function(){return{label:"Textarea",tabs:{Demo:u,"README.md":{type:"md",content:t(594)},"demo.component.html":{type:"pre",content:t(595)},"demo.component.ts":{type:"pre",content:t(596)}}}}},s=function(){return function(){}}(),o=t(159),i=t(434),r=t(46),c=t(501),b=e.Cb({encapsulation:2,styles:[],data:{}});function p(n){return e.Xb(0,[(n()(),e.Eb(0,0,null,null,1,"h3",[],null,null,null,null,null)),(n()(),e.Vb(-1,null,["Default"])),(n()(),e.Eb(2,0,null,null,6,"textarea",[["rows","5"],["vcl-textarea",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null],[2,"vclInput",null],[1,"rows",0]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"],[null,"propertychange"],[null,"focus"]],function(n,l,t){var u=!0,a=n.component;"input"===l&&(u=!1!==e.Ob(n,3)._handleInput(t.target.value)&&u);"blur"===l&&(u=!1!==e.Ob(n,3).onTouched()&&u);"compositionstart"===l&&(u=!1!==e.Ob(n,3)._compositionStart()&&u);"compositionend"===l&&(u=!1!==e.Ob(n,3)._compositionEnd(t.target.value)&&u);"propertychange"===l&&(u=!1!==e.Ob(n,8).onChange()&&u);"input"===l&&(u=!1!==e.Ob(n,8).onChange()&&u);"focus"===l&&(u=!1!==e.Ob(n,8).onFocus(t.target.value)&&u);"ngModelChange"===l&&(u=!1!==(a.data1=t)&&u);return u},null,null)),e.Db(3,16384,null,0,r.c,[e.Q,e.o,[2,r.a]],null,null),e.Sb(1024,null,r.l,function(n){return[n]},[r.c]),e.Db(5,671744,null,0,r.q,[[8,null],[8,null],[8,null],[6,r.l]],{model:[0,"model"]},{update:"ngModelChange"}),e.Sb(2048,null,r.m,null,[r.q]),e.Db(7,16384,null,0,r.n,[[4,r.m]],null,null),e.Db(8,4997120,null,0,c.a,[e.o],{rows:[0,"rows"]},null),(n()(),e.Eb(9,0,null,null,1,"h3",[],null,null,null,null,null)),(n()(),e.Vb(-1,null,["Textarea with autogrow (minRows=5, maxRows=10)"])),(n()(),e.Eb(11,0,null,null,6,"textarea",[["vcl-textarea",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null],[2,"vclInput",null],[1,"rows",0]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"],[null,"propertychange"],[null,"focus"]],function(n,l,t){var u=!0,a=n.component;"input"===l&&(u=!1!==e.Ob(n,12)._handleInput(t.target.value)&&u);"blur"===l&&(u=!1!==e.Ob(n,12).onTouched()&&u);"compositionstart"===l&&(u=!1!==e.Ob(n,12)._compositionStart()&&u);"compositionend"===l&&(u=!1!==e.Ob(n,12)._compositionEnd(t.target.value)&&u);"propertychange"===l&&(u=!1!==e.Ob(n,17).onChange()&&u);"input"===l&&(u=!1!==e.Ob(n,17).onChange()&&u);"focus"===l&&(u=!1!==e.Ob(n,17).onFocus(t.target.value)&&u);"ngModelChange"===l&&(u=!1!==(a.data2=t)&&u);return u},null,null)),e.Db(12,16384,null,0,r.c,[e.Q,e.o,[2,r.a]],null,null),e.Sb(1024,null,r.l,function(n){return[n]},[r.c]),e.Db(14,671744,null,0,r.q,[[8,null],[8,null],[8,null],[6,r.l]],{model:[0,"model"]},{update:"ngModelChange"}),e.Sb(2048,null,r.m,null,[r.q]),e.Db(16,16384,null,0,r.n,[[4,r.m]],null,null),e.Db(17,4997120,null,0,c.a,[e.o],{autogrow:[0,"autogrow"],maxRows:[1,"maxRows"],minRows:[2,"minRows"]},null)],function(n,l){var t=l.component;n(l,5,0,t.data1);n(l,8,0,"5"),n(l,14,0,t.data2);n(l,17,0,!0,10,5)},function(n,l){n(l,2,0,e.Ob(l,7).ngClassUntouched,e.Ob(l,7).ngClassTouched,e.Ob(l,7).ngClassPristine,e.Ob(l,7).ngClassDirty,e.Ob(l,7).ngClassValid,e.Ob(l,7).ngClassInvalid,e.Ob(l,7).ngClassPending,!0,e.Ob(l,8).rows);n(l,11,0,e.Ob(l,16).ngClassUntouched,e.Ob(l,16).ngClassTouched,e.Ob(l,16).ngClassPristine,e.Ob(l,16).ngClassDirty,e.Ob(l,16).ngClassValid,e.Ob(l,16).ngClassInvalid,e.Ob(l,16).ngClassPending,!0,e.Ob(l,17).rows)})}function d(n){return e.Xb(0,[(n()(),e.Eb(0,0,null,null,1,"ng-component",[],null,null,null,p,b)),e.Db(1,49152,null,0,u,[],null,null)],null,null)}var h=e.Ab("ng-component",u,d,{},{},[]),f=t(3),m=t(83),g=t(436),v=t(435),w=t(502),y=t(4),x=t(431);t.d(l,"TextareaDemoModuleNgFactory",function(){return C});var C=e.Bb(s,[],function(n){return e.Lb([e.Mb(512,e.l,e.qb,[[8,[o.a,i.a,h]],[3,e.l],e.F]),e.Mb(4608,f.n,f.m,[e.B,[2,f.y]]),e.Mb(4608,r.w,r.w,[]),e.Mb(1073742336,f.c,f.c,[]),e.Mb(1073742336,r.t,r.t,[]),e.Mb(1073742336,r.k,r.k,[]),e.Mb(1073742336,m.a,m.a,[]),e.Mb(1073742336,g.a,g.a,[]),e.Mb(1073742336,v.a,v.a,[]),e.Mb(1073742336,w.a,w.a,[]),e.Mb(1073742336,y.m,y.m,[[2,y.s],[2,y.l]]),e.Mb(1073742336,s,s,[]),e.Mb(1024,y.j,function(){return[[{path:"",component:x.a,data:a}]]},[])])})},431:function(n,l,t){"use strict";t.d(l,"a",function(){return e});var e=function(){function n(n,l){this.activatedRoute=n,this.sanitizer=l,this.tabs=[]}return n.prototype.ngOnInit=function(){var n=this,l=this.activatedRoute.snapshot.data.demo();l?(this.title=l.label,l.tabs?this.tabs=Object.keys(l.tabs).map(function(t){var e,u;return"object"==typeof l.tabs[t]&&l.tabs[t]?u="pre"===(e=l.tabs[t].type)||"html"===e||"md"===e?n.sanitizer.bypassSecurityTrustHtml(l.tabs[t].content):l.tabs[t].content:"function"==typeof l.tabs[t]&&(e="component",u=l.tabs[t]),{name:t,content:u,type:e}}):this.tabs=[]):(this.title="ng-vcl",this.tabs=[])},n}()},432:function(n,l,t){"use strict";t.d(l,"b",function(){return e}),t.d(l,"a",function(){return u});var e=function(){return function(){}}(),u=function(){return function(){this.disabled=!1,this.tabClass=""}}()},433:function(n,l,t){"use strict";t.d(l,"a",function(){return s});var e=t(93),u=t(0),a=t(432),s=function(){function n(){this.layout="",this.tabbableClass="",this.tabsClass="",this.tabContentClass="",this.hideContent=!1,this.borders=!1,this.selectedTabIndex=0,this.selectedTabIndexChange$=new u.q}return Object.defineProperty(n.prototype,"tabContent",{set:function(n){n&&(this.wormholeHost=new e.b(n))},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"selectedTabIndexChange",{get:function(){return this.selectedTabIndexChange$.asObservable()},enumerable:!0,configurable:!0}),n.prototype.selectTab=function(n){if(this.tabs){var l,t,e=this.tabs.toArray();n instanceof a.a?(l=e.indexOf(n),t=n):"number"==typeof n&&e[n]?t=e[l=n]:(l=-1,t=null),l>=0&&t instanceof a.a&&!t.disabled&&(this.wormholeHost&&(this.wormholeHost.clearWormholes(),this.wormholeHost.connectWormhole(t.content)),this.selectedTabIndex=l)}},n.prototype.onTabClick=function(n){this.selectTab(n),this.selectedTabIndexChange$.emit(this.selectedTabIndex)},n.prototype.ngAfterContentInit=function(){this.selectTab(this.selectedTabIndex)},n.prototype.ngOnDestroy=function(){this.wormholeHost&&this.wormholeHost.clearWormholes()},n}()},434:function(n,l,t){"use strict";t.d(l,"a",function(){return O});var e=t(0),u=t(207),a=t(437),s=t(432),o=t(3),i=t(438),r=t(433),c=t(431),b=t(4),p=t(6),d=e.Cb({encapsulation:2,styles:[],data:{}});function h(n){return e.Xb(0,[(n()(),e.Vb(0,null,["",""]))],null,function(n,l){n(l,0,0,l.parent.context.$implicit.name)})}function f(n){return e.Xb(0,[(n()(),e.Eb(0,16777216,null,null,1,"wormhole",[],null,null,null,null,null)),e.Db(1,671744,null,0,u.a,[e.db],{target:[0,"target"]},null),(n()(),e.vb(0,null,null,0))],function(n,l){n(l,1,0,l.parent.context.$implicit.content)},null)}function m(n){return e.Xb(0,[(n()(),e.Eb(0,0,null,null,2,"div",[],null,null,null,null,null)),(n()(),e.Eb(1,0,null,null,1,"pre",[],null,null,null,null,null)),(n()(),e.Vb(2,null,["",""]))],null,function(n,l){n(l,2,0,l.parent.context.$implicit.content)})}function g(n){return e.Xb(0,[(n()(),e.Eb(0,0,null,null,0,"div",[],[[8,"innerHTML",1]],null,null,null,null))],null,function(n,l){n(l,0,0,l.parent.context.$implicit.content)})}function v(n){return e.Xb(0,[(n()(),e.Eb(0,0,null,null,0,"div",[["class","markdown-body"]],[[8,"innerHTML",1]],null,null,null,null))],null,function(n,l){n(l,0,0,l.parent.context.$implicit.content)})}function w(n){return e.Xb(0,[(n()(),e.Eb(0,0,null,null,0,"pre",[],[[8,"innerHTML",1]],null,null,null,null))],null,function(n,l){n(l,0,0,l.parent.context.$implicit.content)})}function y(n){return e.Xb(0,[(n()(),e.Eb(0,0,null,null,14,"vcl-tab",[],null,null,null,a.b,a.a)),e.Db(1,49152,[[1,4]],1,s.a,[],null,null),e.Tb(335544320,2,{label:0}),(n()(),e.vb(0,[[2,2]],0,1,null,h)),e.Db(4,16384,null,0,s.b,[],null,null),(n()(),e.vb(16777216,null,0,1,null,f)),e.Db(6,16384,null,0,o.l,[e.db,e.Z],{ngIf:[0,"ngIf"]},null),(n()(),e.vb(16777216,null,0,1,null,m)),e.Db(8,16384,null,0,o.l,[e.db,e.Z],{ngIf:[0,"ngIf"]},null),(n()(),e.vb(16777216,null,0,1,null,g)),e.Db(10,16384,null,0,o.l,[e.db,e.Z],{ngIf:[0,"ngIf"]},null),(n()(),e.vb(16777216,null,0,1,null,v)),e.Db(12,16384,null,0,o.l,[e.db,e.Z],{ngIf:[0,"ngIf"]},null),(n()(),e.vb(16777216,null,0,1,null,w)),e.Db(14,16384,null,0,o.l,[e.db,e.Z],{ngIf:[0,"ngIf"]},null)],function(n,l){n(l,6,0,"component"===l.context.$implicit.type),n(l,8,0,"text"===l.context.$implicit.type),n(l,10,0,"html"===l.context.$implicit.type),n(l,12,0,"md"===l.context.$implicit.type),n(l,14,0,"pre"===l.context.$implicit.type)},null)}function x(n){return e.Xb(0,[(n()(),e.Eb(0,0,null,null,5,"div",[],null,null,null,null,null)),(n()(),e.Eb(1,0,null,null,4,"vcl-tab-nav",[["borders","true"]],null,null,null,i.b,i.a)),e.Db(2,1228800,null,1,r.a,[],{borders:[0,"borders"]},null),e.Tb(603979776,1,{tabs:1}),(n()(),e.vb(16777216,null,0,1,null,y)),e.Db(5,278528,null,0,o.k,[e.db,e.Z,e.z],{ngForOf:[0,"ngForOf"]},null)],function(n,l){var t=l.component;n(l,2,0,"true"),n(l,5,0,t.tabs)},null)}function C(n){return e.Xb(0,[(n()(),e.Eb(0,0,null,null,1,"h2",[["class","vclArticleHeader"]],null,null,null,null,null)),(n()(),e.Vb(1,null,[" ",""])),(n()(),e.vb(16777216,null,null,1,null,x)),e.Db(3,16384,null,0,o.l,[e.db,e.Z],{ngIf:[0,"ngIf"]},null)],function(n,l){n(l,3,0,l.component.tabs.length>0)},function(n,l){n(l,1,0,l.component.title)})}function j(n){return e.Xb(0,[(n()(),e.Eb(0,0,null,null,1,"ng-component",[],null,null,null,C,d)),e.Db(1,114688,null,0,c.a,[b.a,p.c],null,null)],function(n,l){n(l,1,0)},null)}var O=e.Ab("ng-component",c.a,j,{},{},[])},435:function(n,l,t){"use strict";t.d(l,"a",function(){return e});t(431);var e=function(){return function(){}}()},436:function(n,l,t){"use strict";t.d(l,"a",function(){return e});var e=function(){return function(){}}()},437:function(n,l,t){"use strict";t.d(l,"a",function(){return a}),t.d(l,"b",function(){return o});var e=t(0),u=t(432),a=e.Cb({encapsulation:2,styles:[],data:{}});function s(n){return e.Xb(0,[e.Nb(null,0),(n()(),e.vb(0,null,null,0))],null,null)}function o(n){return e.Xb(0,[e.Tb(402653184,1,{content:0}),(n()(),e.vb(0,[[1,2]],null,0,null,s))],null,null)}function i(n){return e.Xb(0,[(n()(),e.Eb(0,0,null,null,2,"vcl-tab",[],null,null,null,o,a)),e.Db(1,49152,null,1,u.a,[],null,null),e.Tb(335544320,1,{label:0})],null,null)}u.a},438:function(n,l,t){"use strict";t.d(l,"a",function(){return o}),t.d(l,"b",function(){return r});var e=t(0),u=t(207),a=t(3),s=t(433),o=e.Cb({encapsulation:2,styles:[],data:{}});function i(n){return e.Xb(0,[(n()(),e.Eb(0,0,null,null,3,"div",[["role","tab"]],[[8,"className",0],[2,"vclDisabled",null],[2,"vclSelected",null],[2,"aria-selected",null]],[[null,"click"]],function(n,l,t){var e=!0,u=n.component;"click"===l&&(e=!1!==u.onTabClick(n.context.$implicit)&&e);return e},null,null)),(n()(),e.Eb(1,0,null,null,2,"span",[["class","vclTabLabel"]],null,null,null,null,null)),(n()(),e.Eb(2,16777216,null,null,1,"wormhole",[],null,null,null,null,null)),e.Db(3,671744,null,0,u.a,[e.db],{target:[0,"target"]},null)],function(n,l){n(l,3,0,l.context.$implicit.label)},function(n,l){var t=l.component;n(l,0,0,e.Gb(1,"vclTab ",l.context.$implicit.tabClass,""),l.context.$implicit.disabled,t.selectedTabIndex===l.context.index,t.selectedTabIndex===l.context.index)})}function r(n){return e.Xb(0,[e.Tb(402653184,1,{tabContent:0}),(n()(),e.Eb(1,0,null,null,8,"div",[],[[8,"className",0],[2,"vclTabsLeft",null],[2,"vclTabsRight",null]],null,null,null,null)),(n()(),e.Eb(2,0,null,null,2,"div",[["role","tablist"]],[[8,"className",0],[2,"vclTabStyleUni",null]],null,null,null,null)),(n()(),e.vb(16777216,null,null,1,null,i)),e.Db(4,278528,null,0,a.k,[e.db,e.Z,e.z],{ngForOf:[0,"ngForOf"]},null),(n()(),e.Eb(5,0,null,null,4,"div",[],[[4,"display",null],[8,"className",0],[2,"vclNoBorder",null]],null,null,null,null)),(n()(),e.Eb(6,0,null,null,1,"div",[["class","vclTabPanel"],["role","tabpanel"]],null,null,null,null,null)),(n()(),e.Eb(7,16777216,[[1,3],["tabContent",1]],null,0,"div",[],null,null,null,null,null)),(n()(),e.Eb(8,0,null,null,1,"div",[["class","vclTabPanel"],["role","tabpanel"]],null,null,null,null,null)),e.Nb(null,0)],function(n,l){n(l,4,0,l.component.tabs)},function(n,l){var t=l.component;n(l,1,0,e.Gb(1,"vclTabbable ",t.tabbableClass,""),"left"===t.layout,"right"===t.layout),n(l,2,0,e.Gb(1,"vclTabs ",t.tabsClass,""),!!t.borders),n(l,5,0,!0===t.hideContent?"none":null,e.Gb(1,"vclTabContent ",t.tabContentClass,""),!t.borders)})}function c(n){return e.Xb(0,[(n()(),e.Eb(0,0,null,null,2,"vcl-tab-nav",[],null,null,null,r,o)),e.Db(1,1228800,null,1,s.a,[],null,null),e.Tb(603979776,1,{tabs:1})],null,null)}s.a},501:function(n,l,t){"use strict";t.d(l,"a",function(){return e});var e=function(){function n(n){this.elRef=n,this.selectAllOnFocus=!1,this.autogrow=!1}return n.prototype.onChange=function(){var n=this.elRef&&this.elRef.nativeElement.value;this.setRows(n)},n.prototype.ngOnChanges=function(n){"value"in n&&this.setRows(n.value.currentValue)},n.prototype.ngDoCheck=function(){var n=this.elRef&&this.elRef.nativeElement.value;this.setRows(n)},n.prototype.ngAfterViewInit=function(){var n=this.elRef&&this.elRef.nativeElement.value;this.setRows(n)},n.prototype.onFocus=function(n){this.selectAllOnFocus&&this.elRef&&this.elRef.nativeElement.select()},n.prototype.setRows=function(n){if(this.autogrow&&"string"==typeof n){var l=n.split("\n").length+1;"number"==typeof this.minRows&&l<this.minRows?this.rows=this.minRows:"number"==typeof this.maxRows&&l>this.maxRows?this.rows=this.maxRows:this.rows=l}},n}()},502:function(n,l,t){"use strict";t.d(l,"a",function(){return e});var e=function(){return function(){}}()},594:function(n,l){n.exports='<h1 id="vcl-textarea">vcl-textarea</h1>\n<p>Enhanced textarea</p>\n<h2 id="usage">Usage</h2>\n<pre class="hljs"><code>&lt;textarea vcl-textarea [(ngModel)]=&quot;data1&quot; [autogrow]=&quot;true&quot; [minRows]=&quot;5&quot; [maxRows]=&quot;10&quot;&gt;&lt;/textarea&gt;</code></pre>\n<h3 id="api">API</h3>\n<h4 id="attributes">Attributes</h4>\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Type</th>\n<th>Default</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody><tr>\n<td><code>autogrow</code></td>\n<td>boolean</td>\n<td>false</td>\n<td>Adjusts the <code>rows</code> attribute so it matches the current values number of lines</td>\n</tr>\n<tr>\n<td><code>minRows</code></td>\n<td>number</td>\n<td></td>\n<td>The min value for <code>rows</code> when using autogrow</td>\n</tr>\n<tr>\n<td><code>maxRows</code></td>\n<td>number</td>\n<td></td>\n<td>The max value for <code>rows</code> when using autogrow</td>\n</tr>\n</tbody></table>\n'},595:function(n,l){n.exports='<span class="hljs-tag">&lt;<span class="hljs-name">h3</span>&gt;</span>Default<span class="hljs-tag">&lt;/<span class="hljs-name">h3</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">textarea</span> <span class="hljs-attr">vcl-textarea</span> [(<span class="hljs-attr">ngModel</span>)]=<span class="hljs-string">"data1"</span> <span class="hljs-attr">rows</span>=<span class="hljs-string">"5"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">textarea</span>&gt;</span>\n\n\n<span class="hljs-tag">&lt;<span class="hljs-name">h3</span>&gt;</span>Textarea with autogrow (minRows=5, maxRows=10)<span class="hljs-tag">&lt;/<span class="hljs-name">h3</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">textarea</span> <span class="hljs-attr">vcl-textarea</span> [(<span class="hljs-attr">ngModel</span>)]=<span class="hljs-string">"data2"</span> [<span class="hljs-attr">autogrow</span>]=<span class="hljs-string">"true"</span> [<span class="hljs-attr">minRows</span>]=<span class="hljs-string">"5"</span> [<span class="hljs-attr">maxRows</span>]=<span class="hljs-string">"10"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">textarea</span>&gt;</span>\n'},596:function(n,l){n.exports='\n<span class="hljs-keyword">import</span> { Component } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/core\'</span>;\n\n<span class="hljs-meta">@Component</span>({\n  templateUrl: <span class="hljs-string">\'demo.component.html\'</span>\n})\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> TextareaDemoComponent {\n\n  data1 =\n  <span class="hljs-string">`line 1\nline 2\nline 3\nline 4\nline 5\nline 6`</span>;\n\n  data2 =\n  <span class="hljs-string">`line 1\nline 2\nline 3\nline 4\nline 5\nline 6`</span>;\n\n\n  data3 =\n  <span class="hljs-string">`line 1\nline 2\nline 3\nline 4\nline 5\nline 6`</span>;\n\n}\n'}}]);