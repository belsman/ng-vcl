(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{207:function(n,l,t){"use strict";t.d(l,"a",function(){return s});var e=t(1),s=function(n){function l(l){return n.call(this,l)||this}return Object(e.c)(l,n),Object.defineProperty(l.prototype,"isConnected",{get:function(){return!!this.wormhole&&this.wormhole.isConnected},enumerable:!0,configurable:!0}),l.prototype.ngOnChanges=function(n){var l="attrs"in n&&n.attrs.currentValue||void 0;if("target"in n){this.clearWormholes();var t=n.target.currentValue;t&&(this.wormhole=this.connectWormhole(t,l))}else l&&this.wormhole&&this.wormhole.setAttributes(l)},l.prototype.ngOnDestroy=function(){this.wormhole&&this.wormhole.disconnect()},l}(t(93).b)},424:function(n,l,t){"use strict";t.r(l);var e=t(0),s=function(){function n(){this.clicks=0}return n.prototype.offClick=function(){this.clicks++},n}();var u={demo:function(){return{label:"Off Click",tabs:{Demo:s,"README.md":{type:"md",content:t(683)},"demo.component.html":{type:"pre",content:t(684)},"demo.component.ts":{type:"pre",content:t(685)}}}}},a=function(){return function(){}}(),i=t(159),o=t(434),c=t(498),r=t(3),f=e.Cb({encapsulation:2,styles:[],data:{}});function p(n){return e.Xb(0,[(n()(),e.Eb(0,0,null,null,1,"div",[],null,null,null,null,null)),(n()(),e.Vb(1,null,["offClicks triggered: ",""]))],null,function(n,l){n(l,1,0,l.component.clicks)})}function b(n){return e.Xb(0,[(n()(),e.Eb(0,0,null,null,1,"div",[],null,null,null,null,null)),(n()(),e.Vb(-1,null,["Click anywhere to trigger an offClick"]))],null,null)}function d(n){return e.Xb(0,[(n()(),e.Eb(0,0,null,null,8,"div",[["style","border: 2px solid;background-color:red;width:300px;height:300px"]],null,[[null,"offClick"]],function(n,l,t){var e=!0,s=n.component;"offClick"===l&&(e=!1!==s.offClick()&&e);return e},null,null)),e.Db(1,4341760,null,0,c.a,[e.o],null,{offClick:"offClick"}),(n()(),e.Vb(-1,null,[" DIV 1 "])),(n()(),e.Eb(3,0,null,null,0,"br",[],null,null,null,null,null)),(n()(),e.Vb(-1,null,[" Click somewhere outside to trigger an offClick "])),(n()(),e.Eb(5,0,null,null,3,"div",[["style","border: 1px solid;background-color:green;width:50%;margin:auto; height:100px"]],null,null,null,null,null)),(n()(),e.Vb(-1,null,[" DIV 2 "])),(n()(),e.Eb(7,0,null,null,0,"br",[],null,null,null,null,null)),(n()(),e.Vb(-1,null,[" This is a subelement of DIV 1 "])),(n()(),e.Eb(9,0,null,null,0,"br",[],null,null,null,null,null)),(n()(),e.vb(16777216,null,null,1,null,p)),e.Db(11,16384,null,0,r.l,[e.db,e.Z],{ngIf:[0,"ngIf"]},null),(n()(),e.vb(16777216,null,null,1,null,b)),e.Db(13,16384,null,0,r.l,[e.db,e.Z],{ngIf:[0,"ngIf"]},null)],function(n,l){var t=l.component;n(l,11,0,t.clicks>0),n(l,13,0,0===t.clicks)},null)}function h(n){return e.Xb(0,[(n()(),e.Eb(0,0,null,null,1,"ng-component",[],null,null,null,d,f)),e.Db(1,49152,null,0,s,[],null,null)],null,null)}var m=e.Ab("ng-component",s,h,{},{},[]),v=t(83),g=t(436),y=t(435),j=t(451),k=t(4),C=t(431);t.d(l,"OffClickDemoModuleNgFactory",function(){return x});var x=e.Bb(a,[],function(n){return e.Lb([e.Mb(512,e.l,e.qb,[[8,[i.a,o.a,m]],[3,e.l],e.F]),e.Mb(4608,r.n,r.m,[e.B,[2,r.y]]),e.Mb(1073742336,r.c,r.c,[]),e.Mb(1073742336,v.a,v.a,[]),e.Mb(1073742336,g.a,g.a,[]),e.Mb(1073742336,y.a,y.a,[]),e.Mb(1073742336,j.a,j.a,[]),e.Mb(1073742336,k.m,k.m,[[2,k.s],[2,k.l]]),e.Mb(1073742336,a,a,[]),e.Mb(1024,k.j,function(){return[[{path:"",component:C.a,data:u}]]},[])])})},431:function(n,l,t){"use strict";t.d(l,"a",function(){return e});var e=function(){function n(n,l){this.activatedRoute=n,this.sanitizer=l,this.tabs=[]}return n.prototype.ngOnInit=function(){var n=this,l=this.activatedRoute.snapshot.data.demo();l?(this.title=l.label,l.tabs?this.tabs=Object.keys(l.tabs).map(function(t){var e,s;return"object"==typeof l.tabs[t]&&l.tabs[t]?s="pre"===(e=l.tabs[t].type)||"html"===e||"md"===e?n.sanitizer.bypassSecurityTrustHtml(l.tabs[t].content):l.tabs[t].content:"function"==typeof l.tabs[t]&&(e="component",s=l.tabs[t]),{name:t,content:s,type:e}}):this.tabs=[]):(this.title="ng-vcl",this.tabs=[])},n}()},432:function(n,l,t){"use strict";t.d(l,"b",function(){return e}),t.d(l,"a",function(){return s});var e=function(){return function(){}}(),s=function(){return function(){this.disabled=!1,this.tabClass=""}}()},433:function(n,l,t){"use strict";t.d(l,"a",function(){return a});var e=t(93),s=t(0),u=t(432),a=function(){function n(){this.layout="",this.tabbableClass="",this.tabsClass="",this.tabContentClass="",this.hideContent=!1,this.borders=!1,this.selectedTabIndex=0,this.selectedTabIndexChange$=new s.q}return Object.defineProperty(n.prototype,"tabContent",{set:function(n){n&&(this.wormholeHost=new e.b(n))},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"selectedTabIndexChange",{get:function(){return this.selectedTabIndexChange$.asObservable()},enumerable:!0,configurable:!0}),n.prototype.selectTab=function(n){if(this.tabs){var l,t,e=this.tabs.toArray();n instanceof u.a?(l=e.indexOf(n),t=n):"number"==typeof n&&e[n]?t=e[l=n]:(l=-1,t=null),l>=0&&t instanceof u.a&&!t.disabled&&(this.wormholeHost&&(this.wormholeHost.clearWormholes(),this.wormholeHost.connectWormhole(t.content)),this.selectedTabIndex=l)}},n.prototype.onTabClick=function(n){this.selectTab(n),this.selectedTabIndexChange$.emit(this.selectedTabIndex)},n.prototype.ngAfterContentInit=function(){this.selectTab(this.selectedTabIndex)},n.prototype.ngOnDestroy=function(){this.wormholeHost&&this.wormholeHost.clearWormholes()},n}()},434:function(n,l,t){"use strict";t.d(l,"a",function(){return w});var e=t(0),s=t(207),u=t(437),a=t(432),i=t(3),o=t(438),c=t(433),r=t(431),f=t(4),p=t(6),b=e.Cb({encapsulation:2,styles:[],data:{}});function d(n){return e.Xb(0,[(n()(),e.Vb(0,null,["",""]))],null,function(n,l){n(l,0,0,l.parent.context.$implicit.name)})}function h(n){return e.Xb(0,[(n()(),e.Eb(0,16777216,null,null,1,"wormhole",[],null,null,null,null,null)),e.Db(1,671744,null,0,s.a,[e.db],{target:[0,"target"]},null),(n()(),e.vb(0,null,null,0))],function(n,l){n(l,1,0,l.parent.context.$implicit.content)},null)}function m(n){return e.Xb(0,[(n()(),e.Eb(0,0,null,null,2,"div",[],null,null,null,null,null)),(n()(),e.Eb(1,0,null,null,1,"pre",[],null,null,null,null,null)),(n()(),e.Vb(2,null,["",""]))],null,function(n,l){n(l,2,0,l.parent.context.$implicit.content)})}function v(n){return e.Xb(0,[(n()(),e.Eb(0,0,null,null,0,"div",[],[[8,"innerHTML",1]],null,null,null,null))],null,function(n,l){n(l,0,0,l.parent.context.$implicit.content)})}function g(n){return e.Xb(0,[(n()(),e.Eb(0,0,null,null,0,"div",[["class","markdown-body"]],[[8,"innerHTML",1]],null,null,null,null))],null,function(n,l){n(l,0,0,l.parent.context.$implicit.content)})}function y(n){return e.Xb(0,[(n()(),e.Eb(0,0,null,null,0,"pre",[],[[8,"innerHTML",1]],null,null,null,null))],null,function(n,l){n(l,0,0,l.parent.context.$implicit.content)})}function j(n){return e.Xb(0,[(n()(),e.Eb(0,0,null,null,14,"vcl-tab",[],null,null,null,u.b,u.a)),e.Db(1,49152,[[1,4]],1,a.a,[],null,null),e.Tb(335544320,2,{label:0}),(n()(),e.vb(0,[[2,2]],0,1,null,d)),e.Db(4,16384,null,0,a.b,[],null,null),(n()(),e.vb(16777216,null,0,1,null,h)),e.Db(6,16384,null,0,i.l,[e.db,e.Z],{ngIf:[0,"ngIf"]},null),(n()(),e.vb(16777216,null,0,1,null,m)),e.Db(8,16384,null,0,i.l,[e.db,e.Z],{ngIf:[0,"ngIf"]},null),(n()(),e.vb(16777216,null,0,1,null,v)),e.Db(10,16384,null,0,i.l,[e.db,e.Z],{ngIf:[0,"ngIf"]},null),(n()(),e.vb(16777216,null,0,1,null,g)),e.Db(12,16384,null,0,i.l,[e.db,e.Z],{ngIf:[0,"ngIf"]},null),(n()(),e.vb(16777216,null,0,1,null,y)),e.Db(14,16384,null,0,i.l,[e.db,e.Z],{ngIf:[0,"ngIf"]},null)],function(n,l){n(l,6,0,"component"===l.context.$implicit.type),n(l,8,0,"text"===l.context.$implicit.type),n(l,10,0,"html"===l.context.$implicit.type),n(l,12,0,"md"===l.context.$implicit.type),n(l,14,0,"pre"===l.context.$implicit.type)},null)}function k(n){return e.Xb(0,[(n()(),e.Eb(0,0,null,null,5,"div",[],null,null,null,null,null)),(n()(),e.Eb(1,0,null,null,4,"vcl-tab-nav",[["borders","true"]],null,null,null,o.b,o.a)),e.Db(2,1228800,null,1,c.a,[],{borders:[0,"borders"]},null),e.Tb(603979776,1,{tabs:1}),(n()(),e.vb(16777216,null,0,1,null,j)),e.Db(5,278528,null,0,i.k,[e.db,e.Z,e.z],{ngForOf:[0,"ngForOf"]},null)],function(n,l){var t=l.component;n(l,2,0,"true"),n(l,5,0,t.tabs)},null)}function C(n){return e.Xb(0,[(n()(),e.Eb(0,0,null,null,1,"h2",[["class","vclArticleHeader"]],null,null,null,null,null)),(n()(),e.Vb(1,null,[" ",""])),(n()(),e.vb(16777216,null,null,1,null,k)),e.Db(3,16384,null,0,i.l,[e.db,e.Z],{ngIf:[0,"ngIf"]},null)],function(n,l){n(l,3,0,l.component.tabs.length>0)},function(n,l){n(l,1,0,l.component.title)})}function x(n){return e.Xb(0,[(n()(),e.Eb(0,0,null,null,1,"ng-component",[],null,null,null,C,b)),e.Db(1,114688,null,0,r.a,[f.a,p.c],null,null)],function(n,l){n(l,1,0)},null)}var w=e.Ab("ng-component",r.a,x,{},{},[])},435:function(n,l,t){"use strict";t.d(l,"a",function(){return e});t(431);var e=function(){return function(){}}()},436:function(n,l,t){"use strict";t.d(l,"a",function(){return e});var e=function(){return function(){}}()},437:function(n,l,t){"use strict";t.d(l,"a",function(){return u}),t.d(l,"b",function(){return i});var e=t(0),s=t(432),u=e.Cb({encapsulation:2,styles:[],data:{}});function a(n){return e.Xb(0,[e.Nb(null,0),(n()(),e.vb(0,null,null,0))],null,null)}function i(n){return e.Xb(0,[e.Tb(402653184,1,{content:0}),(n()(),e.vb(0,[[1,2]],null,0,null,a))],null,null)}function o(n){return e.Xb(0,[(n()(),e.Eb(0,0,null,null,2,"vcl-tab",[],null,null,null,i,u)),e.Db(1,49152,null,1,s.a,[],null,null),e.Tb(335544320,1,{label:0})],null,null)}s.a},438:function(n,l,t){"use strict";t.d(l,"a",function(){return i}),t.d(l,"b",function(){return c});var e=t(0),s=t(207),u=t(3),a=t(433),i=e.Cb({encapsulation:2,styles:[],data:{}});function o(n){return e.Xb(0,[(n()(),e.Eb(0,0,null,null,3,"div",[["role","tab"]],[[8,"className",0],[2,"vclDisabled",null],[2,"vclSelected",null],[2,"aria-selected",null]],[[null,"click"]],function(n,l,t){var e=!0,s=n.component;"click"===l&&(e=!1!==s.onTabClick(n.context.$implicit)&&e);return e},null,null)),(n()(),e.Eb(1,0,null,null,2,"span",[["class","vclTabLabel"]],null,null,null,null,null)),(n()(),e.Eb(2,16777216,null,null,1,"wormhole",[],null,null,null,null,null)),e.Db(3,671744,null,0,s.a,[e.db],{target:[0,"target"]},null)],function(n,l){n(l,3,0,l.context.$implicit.label)},function(n,l){var t=l.component;n(l,0,0,e.Gb(1,"vclTab ",l.context.$implicit.tabClass,""),l.context.$implicit.disabled,t.selectedTabIndex===l.context.index,t.selectedTabIndex===l.context.index)})}function c(n){return e.Xb(0,[e.Tb(402653184,1,{tabContent:0}),(n()(),e.Eb(1,0,null,null,8,"div",[],[[8,"className",0],[2,"vclTabsLeft",null],[2,"vclTabsRight",null]],null,null,null,null)),(n()(),e.Eb(2,0,null,null,2,"div",[["role","tablist"]],[[8,"className",0],[2,"vclTabStyleUni",null]],null,null,null,null)),(n()(),e.vb(16777216,null,null,1,null,o)),e.Db(4,278528,null,0,u.k,[e.db,e.Z,e.z],{ngForOf:[0,"ngForOf"]},null),(n()(),e.Eb(5,0,null,null,4,"div",[],[[4,"display",null],[8,"className",0],[2,"vclNoBorder",null]],null,null,null,null)),(n()(),e.Eb(6,0,null,null,1,"div",[["class","vclTabPanel"],["role","tabpanel"]],null,null,null,null,null)),(n()(),e.Eb(7,16777216,[[1,3],["tabContent",1]],null,0,"div",[],null,null,null,null,null)),(n()(),e.Eb(8,0,null,null,1,"div",[["class","vclTabPanel"],["role","tabpanel"]],null,null,null,null,null)),e.Nb(null,0)],function(n,l){n(l,4,0,l.component.tabs)},function(n,l){var t=l.component;n(l,1,0,e.Gb(1,"vclTabbable ",t.tabbableClass,""),"left"===t.layout,"right"===t.layout),n(l,2,0,e.Gb(1,"vclTabs ",t.tabsClass,""),!!t.borders),n(l,5,0,!0===t.hideContent?"none":null,e.Gb(1,"vclTabContent ",t.tabContentClass,""),!t.borders)})}function r(n){return e.Xb(0,[(n()(),e.Eb(0,0,null,null,2,"vcl-tab-nav",[],null,null,null,c,i)),e.Db(1,1228800,null,1,a.a,[],null,null),e.Tb(603979776,1,{tabs:1})],null,null)}a.a},451:function(n,l,t){"use strict";t.d(l,"a",function(){return e});var e=function(){return function(){}}()},455:function(n,l,t){"use strict";t.d(l,"a",function(){return s});var e=t(163),s=new(t(162).a)(e.a)},457:function(n,l,t){"use strict";t.d(l,"a",function(){return s});var e=t(74);function s(n){return!Object(e.a)(n)&&n-parseFloat(n)+1>=0}},498:function(n,l,t){"use strict";t.d(l,"a",function(){return f});var e=t(0),s=t(206),u=t(519),a=t(521),i=t(68),o=t(123),c=t(520),r=t(428),f=function(){function n(n){this.elem=n,this.offClickDelay=10,this.offClickListen=!0,this.offClick=new e.q,this.subs=[]}return n.prototype.ngAfterViewInit=function(){var n=this;if("undefined"!=typeof document){var l=Object(s.a)(Object(u.a)(this.elem.nativeElement,"mouseover").pipe(Object(i.a)(function(n){return n.target||void 0})),Object(u.a)(this.elem.nativeElement,"mouseleave").pipe(Object(i.a)(function(){}))).subscribe(function(l){return n.hoveredElement=l}),t=Object(u.a)(document,"click").pipe(Object(o.a)(function(){return n.offClickListen}),Object(c.a)(Object(a.a)(this.offClickDelay).pipe(Object(r.a)()))).subscribe(function(l){var t=n.elem.nativeElement,s=[n.hoveredElement,t].concat((n.offClickExcludes||[]).map(function(n){return n instanceof e.o?n.nativeElement:n}).filter(function(n){return n instanceof Element})).filter(function(n){return!!n}),u=l.target;u&&(s.every(function(n){return!(n===u||n.contains(u))})&&n.offClick.emit())});this.subs=[l,t]}},n.prototype.ngOnDestroy=function(){this.subs.forEach(function(n){return n.unsubscribe()})},n}()},519:function(n,l,t){"use strict";t.d(l,"a",function(){return i});var e=t(7),s=t(74),u=t(67),a=t(68);Object.prototype.toString;function i(n,l,t,o){return Object(u.a)(t)&&(o=t,t=void 0),o?i(n,l,t).pipe(Object(a.a)(function(n){return Object(s.a)(n)?o.apply(void 0,n):o(n)})):new e.a(function(e){!function n(l,t,e,s,u){var a;if(function(n){return n&&"function"==typeof n.addEventListener&&"function"==typeof n.removeEventListener}(l)){var i=l;l.addEventListener(t,e,u),a=function(){return i.removeEventListener(t,e,u)}}else if(function(n){return n&&"function"==typeof n.on&&"function"==typeof n.off}(l)){var o=l;l.on(t,e),a=function(){return o.off(t,e)}}else if(function(n){return n&&"function"==typeof n.addListener&&"function"==typeof n.removeListener}(l)){var c=l;l.addListener(t,e),a=function(){return c.removeListener(t,e)}}else{if(!l||!l.length)throw new TypeError("Invalid event target");for(var r=0,f=l.length;r<f;r++)n(l[r],t,e,s,u)}s.add(a)}(n,l,function(n){arguments.length>1?e.next(Array.prototype.slice.call(arguments)):e.next(n)},e,t)})}},520:function(n,l,t){"use strict";t.d(l,"a",function(){return i});var e=t(1),s=t(39),u=t(54),a=t(38);function i(n){return function(l){return l.lift(new o(n))}}var o=function(){function n(n){this.notifier=n}return n.prototype.call=function(n,l){return l.subscribe(new c(n,this.notifier))},n}(),c=function(n){function l(l,t){var e=n.call(this,l)||this;e.hasValue=!1;var s=new u.a(e,void 0,void 0);return e.add(s),e.innerSubscription=s,Object(a.a)(e,t,void 0,void 0,s),e}return e.c(l,n),l.prototype._next=function(l){this.hasValue&&n.prototype._next.call(this,l)},l.prototype.notifyNext=function(n,l,t,e,s){this.hasValue=!0,this.innerSubscription&&this.innerSubscription.unsubscribe()},l.prototype.notifyComplete=function(){},l}(s.a)},521:function(n,l,t){"use strict";t.d(l,"a",function(){return i});var e=t(7),s=t(455),u=t(457),a=t(42);function i(n,l,t){void 0===n&&(n=0);var i=-1;return Object(u.a)(l)?i=Number(l)<1?1:Number(l):Object(a.a)(l)&&(t=l),Object(a.a)(t)||(t=s.a),new e.a(function(l){var e=Object(u.a)(n)?n:+n-t.now();return t.schedule(o,e,{index:0,period:i,subscriber:l})})}function o(n){var l=n.index,t=n.period,e=n.subscriber;if(e.next(l),!e.closed){if(-1===t)return e.complete();n.index=l+1,this.schedule(n,t)}}},683:function(n,l){n.exports='<h1 id="offclick-directive">offClick directive</h1>\n<p>The offClick event fires when a click event is handled and its source is not(!) the element or any of its subelements.  </p>\n<h2 id="usage">Usage</h2>\n<pre class="hljs"><span class="hljs-keyword">import</span> { VCLOffClickModule } <span class="hljs-keyword">from</span> <span class="hljs-string">&apos;ng-vcl&apos;</span>;\n\n@NgModule({\n  <span class="hljs-attr">imports</span>: [ VCLOffClickModule ],\n  ...\n})\n<span class="hljs-keyword">export</span> <span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">AppComponent</span> </span>{}</pre>\n<p>offClick() is called when the click`s source is not DIV1 or DIV2  </p>\n<pre class="hljs"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> (<span class="hljs-attr">offClick</span>)=<span class="hljs-string">&quot;offClick()&quot;</span>&gt;</span>\n  DIV1\n  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>\n    DIV2\n  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></pre>\n'},684:function(n,l){n.exports='<span class="hljs-tag">&lt;<span class="hljs-name">div</span> (<span class="hljs-attr">offClick</span>)=<span class="hljs-string">"offClick()"</span> <span class="hljs-attr">style</span>=<span class="hljs-string">"border: 2px solid;background-color:red;width:300px;height:300px"</span>&gt;</span>\n  DIV 1\n  <span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span>\n  Click somewhere outside to trigger an offClick\n  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">style</span>=<span class="hljs-string">"border: 1px solid;background-color:green;width:50%;margin:auto; height:100px"</span>&gt;</span>\n    DIV 2 \n    <span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span>\n    This is a subelement of DIV 1 \n  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">div</span> *<span class="hljs-attr">ngIf</span>=<span class="hljs-string">"clicks &gt; 0"</span>&gt;</span>offClicks triggered: {{clicks}}<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">div</span> *<span class="hljs-attr">ngIf</span>=<span class="hljs-string">"clicks === 0"</span>&gt;</span>Click anywhere to trigger an offClick<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n  \n'},685:function(n,l){n.exports='<span class="hljs-keyword">import</span> { Component } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/core\'</span>;\n\n<span class="hljs-meta">@Component</span>({\n  templateUrl: <span class="hljs-string">\'demo.component.html\'</span>\n})\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> OffClickDemoComponent  {\n\n  clicks: <span class="hljs-built_in">number</span> = <span class="hljs-number">0</span>;\n\n  offClick() {\n    <span class="hljs-keyword">this</span>.clicks++;\n  }\n}\n'}}]);