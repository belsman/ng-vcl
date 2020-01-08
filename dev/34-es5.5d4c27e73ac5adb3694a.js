function _defineProperties(n,l){for(var t=0;t<l.length;t++){var s=l[t];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(n,s.key,s)}}function _createClass(n,l,t){return l&&_defineProperties(n.prototype,l),t&&_defineProperties(n,t),n}function _classCallCheck(n,l){if(!(n instanceof l))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{"2FIb":function(n,l,t){"use strict";t.d(l,"a",(function(){return s})),t("PNUx");var s=function n(){_classCallCheck(this,n)}},"5XRZ":function(n,l,t){"use strict";t.r(l);var s=t("8Y7J"),e=function(){function n(){_classCallCheck(this,n),this.clicks=0}return _createClass(n,[{key:"offClick",value:function(){this.clicks++}}]),n}(),a={demo:function(){return{label:"Off Click",tabs:{Demo:e,"README.md":{type:"md",content:'<h1 id="offclick-directive">offClick directive</h1>\n<p>The offClick event fires when a click event is handled and its source is not(!) the element or any of its subelements.  </p>\n<h2 id="usage">Usage</h2>\n<pre class="hljs"><span class="hljs-keyword">import</span> { VCLOffClickModule } <span class="hljs-keyword">from</span> <span class="hljs-string">&apos;ng-vcl&apos;</span>;\n\n@NgModule({\n  <span class="hljs-attr">imports</span>: [ VCLOffClickModule ],\n  ...\n})\n<span class="hljs-keyword">export</span> <span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">AppComponent</span> </span>{}</pre>\n<p>offClick() is called when the click`s source is not DIV1 or DIV2  </p>\n<pre class="hljs"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> (<span class="hljs-attr">offClick</span>)=<span class="hljs-string">&quot;offClick()&quot;</span>&gt;</span>\n  DIV1\n  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>\n    DIV2\n  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></pre>\n'},"demo.component.html":{type:"pre",content:t("Su78")},"demo.component.ts":{type:"pre",content:t("vyX7")}}}}},u=function n(){_classCallCheck(this,n)},c=t("pMnS"),i=t("8Ip6"),r=t("3U/2"),o=t("SVse"),b=s.ob({encapsulation:2,styles:[],data:{}});function p(n){return s.Kb(0,[(n()(),s.qb(0,0,null,null,1,"div",[],null,null,null,null,null)),(n()(),s.Ib(1,null,["offClicks triggered: ",""]))],null,(function(n,l){n(l,1,0,l.component.clicks)}))}function f(n){return s.Kb(0,[(n()(),s.qb(0,0,null,null,1,"div",[],null,null,null,null,null)),(n()(),s.Ib(-1,null,["Click anywhere to trigger an offClick"]))],null,null)}function h(n){return s.Kb(0,[(n()(),s.qb(0,0,null,null,8,"div",[["style","border: 2px solid;background-color:red;width:300px;height:300px"]],null,[[null,"vclOffClick"]],(function(n,l,t){var s=!0;return"vclOffClick"===l&&(s=!1!==n.component.offClick()&&s),s}),null,null)),s.pb(1,4866048,null,0,r.a,[o.d,s.k],null,{offClick:"vclOffClick"}),(n()(),s.Ib(-1,null,[" DIV 1 "])),(n()(),s.qb(3,0,null,null,0,"br",[],null,null,null,null,null)),(n()(),s.Ib(-1,null,[" Click somewhere outside to trigger an offClick "])),(n()(),s.qb(5,0,null,null,3,"div",[["style","border: 1px solid;background-color:green;width:50%;margin:auto; height:100px"]],null,null,null,null,null)),(n()(),s.Ib(-1,null,[" DIV 2 "])),(n()(),s.qb(7,0,null,null,0,"br",[],null,null,null,null,null)),(n()(),s.Ib(-1,null,[" This is a subelement of DIV 1 "])),(n()(),s.qb(9,0,null,null,0,"br",[],null,null,null,null,null)),(n()(),s.gb(16777216,null,null,1,null,p)),s.pb(11,16384,null,0,o.l,[s.N,s.K],{ngIf:[0,"ngIf"]},null),(n()(),s.gb(16777216,null,null,1,null,f)),s.pb(13,16384,null,0,o.l,[s.N,s.K],{ngIf:[0,"ngIf"]},null)],(function(n,l){var t=l.component;n(l,11,0,t.clicks>0),n(l,13,0,0===t.clicks)}),null)}var d=s.mb("ng-component",e,(function(n){return s.Kb(0,[(n()(),s.qb(0,0,null,null,1,"ng-component",[],null,null,null,h,b)),s.pb(1,49152,null,0,e,[],null,null)],null,null)}),{},{},[]),g=t("POq0"),m=t("zMNK"),k=t("p/eS"),v=t("2FIb"),C=t("yTgr"),j=t("iInd"),I=t("PNUx");t.d(l,"OffClickDemoModuleNgFactory",(function(){return y}));var y=s.nb(u,[],(function(n){return s.yb([s.zb(512,s.j,s.Z,[[8,[c.a,i.a,d]],[3,s.j],s.w]),s.zb(4608,o.n,o.m,[s.t,[2,o.A]]),s.zb(4608,g.a,g.a,[]),s.zb(1073742336,o.c,o.c,[]),s.zb(1073742336,m.e,m.e,[]),s.zb(1073742336,g.b,g.b,[]),s.zb(1073742336,k.a,k.a,[]),s.zb(1073742336,v.a,v.a,[]),s.zb(1073742336,C.a,C.a,[]),s.zb(1073742336,j.q,j.q,[[2,j.v],[2,j.m]]),s.zb(1073742336,u,u,[]),s.zb(1024,j.i,(function(){return[[{path:"",component:I.a,data:a}]]}),[])])}))},"8Ip6":function(n,l,t){"use strict";t.d(l,"a",(function(){return T}));var s=t("8Y7J"),e=t("zMNK"),a=t("b9ux"),u=t("ZMf7"),c=t("IXq8"),i=t("SVse"),r=t("TINK"),o=t("tKhL"),b=t("PNUx"),p=t("iInd"),f=t("cUpR"),h=s.ob({encapsulation:2,styles:[],data:{}});function d(n){return s.Kb(0,[(n()(),s.gb(0,null,null,0))],null,null)}function g(n){return s.Kb(0,[(n()(),s.qb(0,0,null,null,2,"div",[],null,null,null,null,null)),(n()(),s.gb(16777216,null,null,1,null,d)),s.pb(2,212992,null,0,e.a,[s.j,s.N],{portal:[0,"portal"]},null)],(function(n,l){n(l,2,0,l.parent.context.$implicit.content)}),null)}function m(n){return s.Kb(0,[(n()(),s.qb(0,0,null,null,2,"div",[],null,null,null,null,null)),(n()(),s.qb(1,0,null,null,1,"pre",[],null,null,null,null,null)),(n()(),s.Ib(2,null,["",""]))],null,(function(n,l){n(l,2,0,l.parent.context.$implicit.content)}))}function k(n){return s.Kb(0,[(n()(),s.qb(0,0,null,null,0,"div",[],[[8,"innerHTML",1]],null,null,null,null))],null,(function(n,l){n(l,0,0,l.parent.context.$implicit.content)}))}function v(n){return s.Kb(0,[(n()(),s.qb(0,0,null,null,0,"div",[["class","markdown-body"]],[[8,"innerHTML",1]],null,null,null,null))],null,(function(n,l){n(l,0,0,l.parent.context.$implicit.content)}))}function C(n){return s.Kb(0,[(n()(),s.qb(0,0,null,null,0,"pre",[],[[8,"innerHTML",1]],null,null,null,null))],null,(function(n,l){n(l,0,0,l.parent.context.$implicit.content)}))}function j(n){return s.Kb(0,[(n()(),s.qb(0,16777216,null,null,14,"vcl-tab",[],[[2,"tab",null],[1,"role",0],[2,"disabled",null],[2,"selected",null],[1,"aria-selected",0]],[[null,"click"]],(function(n,l,t){var e=!0;return"click"===l&&(e=!1!==s.Bb(n,1).onClick()&&e),e}),a.c,a.a)),s.pb(1,4243456,[[1,4]],0,u.a,[c.a,s.N],null,null),(n()(),s.qb(2,0,null,0,2,"vcl-tab-label",[],[[2,"tab-label",null]],null,null,a.d,a.b)),s.pb(3,49152,null,0,u.b,[],null,null),(n()(),s.Ib(4,0,["",""])),(n()(),s.gb(16777216,null,1,1,null,g)),s.pb(6,16384,null,0,i.l,[s.N,s.K],{ngIf:[0,"ngIf"]},null),(n()(),s.gb(16777216,null,1,1,null,m)),s.pb(8,16384,null,0,i.l,[s.N,s.K],{ngIf:[0,"ngIf"]},null),(n()(),s.gb(16777216,null,1,1,null,k)),s.pb(10,16384,null,0,i.l,[s.N,s.K],{ngIf:[0,"ngIf"]},null),(n()(),s.gb(16777216,null,1,1,null,v)),s.pb(12,16384,null,0,i.l,[s.N,s.K],{ngIf:[0,"ngIf"]},null),(n()(),s.gb(16777216,null,1,1,null,C)),s.pb(14,16384,null,0,i.l,[s.N,s.K],{ngIf:[0,"ngIf"]},null),(n()(),s.gb(0,null,null,0))],(function(n,l){n(l,6,0,"component"===l.context.$implicit.type),n(l,8,0,"text"===l.context.$implicit.type),n(l,10,0,"html"===l.context.$implicit.type),n(l,12,0,"md"===l.context.$implicit.type),n(l,14,0,"pre"===l.context.$implicit.type)}),(function(n,l){n(l,0,0,s.Bb(l,1).classVclTab,s.Bb(l,1).attrRole,s.Bb(l,1).disabled,s.Bb(l,1).selected,s.Bb(l,1).selected),n(l,2,0,s.Bb(l,3).classCclTabLabel),n(l,4,0,l.context.$implicit.name)}))}function I(n){return s.Kb(0,[(n()(),s.qb(0,0,null,null,6,"div",[],null,null,null,null,null)),(n()(),s.qb(1,0,null,null,5,"vcl-tab-nav",[["borders","true"]],[[2,"tabbable",null],[2,"tabs-left",null],[2,"tabs-right",null]],null,null,r.b,r.a)),s.Fb(6144,null,c.a,null,[o.a]),s.pb(3,4898816,null,1,o.a,[s.h],{borders:[0,"borders"]},null),s.Gb(603979776,1,{tabs:1}),(n()(),s.gb(16777216,null,0,1,null,j)),s.pb(6,278528,null,0,i.k,[s.N,s.K,s.r],{ngForOf:[0,"ngForOf"]},null)],(function(n,l){var t=l.component;n(l,3,0,"true"),n(l,6,0,t.tabs)}),(function(n,l){n(l,1,0,s.Bb(l,3).classVclTabbable,s.Bb(l,3).classVclTabsLeft,s.Bb(l,3).classVclTabsRight)}))}function y(n){return s.Kb(0,[(n()(),s.qb(0,0,null,null,1,"h2",[["class","article-header"]],null,null,null,null,null)),(n()(),s.Ib(1,null,[" ",""])),(n()(),s.gb(16777216,null,null,1,null,I)),s.pb(3,16384,null,0,i.l,[s.N,s.K],{ngIf:[0,"ngIf"]},null)],(function(n,l){n(l,3,0,l.component.tabs.length>0)}),(function(n,l){n(l,1,0,l.component.title)}))}var T=s.mb("ng-component",b.a,(function(n){return s.Kb(0,[(n()(),s.qb(0,0,null,null,1,"ng-component",[],null,null,null,y,h)),s.pb(1,114688,null,0,b.a,[p.a,f.b],null,null)],(function(n,l){n(l,1,0)}),null)}),{},{},[])},IXq8:function(n,l,t){"use strict";t.d(l,"a",(function(){return s}));var s=new(t("8Y7J").p)("vcl_tab_nav")},PNUx:function(n,l,t){"use strict";t.d(l,"a",(function(){return e}));var s=t("zMNK"),e=function(){function n(l,t){_classCallCheck(this,n),this.activatedRoute=l,this.sanitizer=t,this.tabs=[]}return _createClass(n,[{key:"ngOnInit",value:function(){var n=this,l=this.activatedRoute.snapshot.data.demo();l?(this.title=l.label,this.tabs=l.tabs?Object.keys(l.tabs).map((function(t){var e,a;return"object"==typeof l.tabs[t]&&l.tabs[t]?a="pre"===(e=l.tabs[t].type)||"html"===e||"md"===e?n.sanitizer.bypassSecurityTrustHtml(l.tabs[t].content):l.tabs[t].content:"function"==typeof l.tabs[t]&&(e="component",a=new s.b(l.tabs[t])),{name:t,content:a,type:e}})):[]):(this.title="ng-vcl",this.tabs=[])}}]),n}()},POq0:function(n,l,t){"use strict";t.d(l,"a",(function(){return e})),t.d(l,"b",(function(){return a})),t("KCVW");var s=t("8Y7J");t("HDdC"),t("XNiG"),t("Kj3r");var e=function(){var n=function(){function n(){_classCallCheck(this,n)}return _createClass(n,[{key:"create",value:function(n){return"undefined"==typeof MutationObserver?null:new MutationObserver(n)}}]),n}();return n.ngInjectableDef=Object(s.Ob)({factory:function(){return new n},token:n,providedIn:"root"}),n}(),a=function n(){_classCallCheck(this,n)}},Su78:function(n,l){n.exports='<span class="hljs-tag">&lt;<span class="hljs-name">div</span> (<span class="hljs-attr">vclOffClick</span>)=<span class="hljs-string">"offClick()"</span> <span class="hljs-attr">style</span>=<span class="hljs-string">"border: 2px solid;background-color:red;width:300px;height:300px"</span>&gt;</span>\n  DIV 1\n  <span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span>\n  Click somewhere outside to trigger an offClick\n  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">style</span>=<span class="hljs-string">"border: 1px solid;background-color:green;width:50%;margin:auto; height:100px"</span>&gt;</span>\n    DIV 2 \n    <span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span>\n    This is a subelement of DIV 1 \n  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">div</span> *<span class="hljs-attr">ngIf</span>=<span class="hljs-string">"clicks &gt; 0"</span>&gt;</span>offClicks triggered: {{clicks}}<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">div</span> *<span class="hljs-attr">ngIf</span>=<span class="hljs-string">"clicks === 0"</span>&gt;</span>Click anywhere to trigger an offClick<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n  \n'},TINK:function(n,l,t){"use strict";t.d(l,"a",(function(){return u})),t.d(l,"b",(function(){return r}));var s=t("8Y7J"),e=t("zMNK"),a=t("SVse"),u=(t("IXq8"),t("tKhL"),s.ob({encapsulation:2,styles:[],data:{}}));function c(n){return s.Kb(0,[(n()(),s.gb(0,null,null,0))],null,null)}function i(n){return s.Kb(0,[(n()(),s.gb(16777216,null,null,1,null,c)),s.pb(1,212992,null,0,e.a,[s.j,s.N],{portal:[0,"portal"]},null),(n()(),s.gb(0,null,null,0))],(function(n,l){n(l,1,0,l.component.currentTab.portal)}),null)}function r(n){return s.Kb(2,[s.Gb(671088640,1,{panel:0}),(n()(),s.qb(1,0,null,null,1,"div",[["class","tabs"],["role","tablist"]],[[2,"tab-style-uni",null]],null,null,null,null)),s.Ab(null,0),(n()(),s.qb(3,0,null,null,4,"div",[["class","tab-content"]],[[4,"display",null],[2,"no-border",null]],null,null,null,null)),(n()(),s.qb(4,0,[[1,0],["panel",1]],null,3,"div",[["class","tab-panel"],["role","tabpanel"]],null,null,null,null,null)),(n()(),s.gb(16777216,null,null,1,null,i)),s.pb(6,16384,null,0,a.l,[s.N,s.K],{ngIf:[0,"ngIf"]},null),s.Ab(null,1)],(function(n,l){var t=l.component;n(l,6,0,t.currentTab&&t.currentTab.portal)}),(function(n,l){var t=l.component;n(l,1,0,!!t.borders),n(l,3,0,!1===t.hasContent?"none":null,!t.borders)}))}},ZMf7:function(n,l,t){"use strict";t.d(l,"b",(function(){return a})),t.d(l,"a",(function(){return u})),t("IXq8");var s=t("zMNK"),e=t("Kj3r"),a=function n(){_classCallCheck(this,n),this.classCclTabLabel=!0},u=function(){function n(l,t){var s=this;_classCallCheck(this,n),this.tabNav=l,this.viewContainerRef=t,this.classVclTab=!0,this.attrRole="tab",this.disabled=!1,this.selected=!1,l.currentTabChanged.pipe(Object(e.a)(0)).subscribe((function(){s.selected=l.currentTab===s}))}return _createClass(n,[{key:"onClick",value:function(){this.disabled||(this.selected=!0,this.tabNav.selectTab(this))}},{key:"ngAfterViewInit",value:function(){this.portal=this.contentTemplate?new s.f(this.contentTemplate,this.viewContainerRef):void 0}}]),n}()},b9ux:function(n,l,t){"use strict";t.d(l,"b",(function(){return e})),t.d(l,"d",(function(){return a})),t.d(l,"a",(function(){return u})),t.d(l,"c",(function(){return i}));var s=t("8Y7J"),e=(t("ZMf7"),t("IXq8"),s.ob({encapsulation:2,styles:[],data:{}}));function a(n){return s.Kb(2,[s.Ab(null,0)],null,null)}var u=s.ob({encapsulation:2,styles:[],data:{}});function c(n){return s.Kb(0,[s.Ab(null,1),(n()(),s.gb(0,null,null,0))],null,null)}function i(n){return s.Kb(2,[s.Gb(671088640,1,{contentTemplate:0}),s.Ab(null,0),(n()(),s.gb(0,[[1,2],["contentTemplate",2]],null,0,null,c))],null,null)}},tKhL:function(n,l,t){"use strict";t.d(l,"a",(function(){return u}));var s=t("8Y7J"),e=(t("IXq8"),t("6hoW")),a=t("XNiG"),u=function(){function n(l){_classCallCheck(this,n),this.cdRef=l,this._currentTabChangedEmitter=new a.a,this.currentTabChanged=this._currentTabChangedEmitter.asObservable(),this.classVclTabbable=!0,this.selectedTabIndex=0,this.borders=!1,this.selectedTabIndexChange=new s.m}return _createClass(n,[{key:"selectTab",value:function(n){if(this.tabs){var l=this.tabs.toArray().findIndex((function(l){return l===n}));this.selectedTabIndex=l,this.currentTab=n,this.selectedTabIndexChange.next(this.selectedTabIndex),this._currentTabChangedEmitter.next(),this.cdRef.markForCheck(),this.cdRef.detectChanges()}}},{key:"selectTabIndex",value:function(n){if(this.selectedTabIndex=n,this.tabs){var l,t=this.tabs.toArray();"number"==typeof n&&t[n]&&(l=t[n]),this.currentTab=l,this._currentTabChangedEmitter.next(),this.cdRef.markForCheck(),this.cdRef.detectChanges()}}},{key:"ngAfterViewInit",value:function(){this.selectTabIndex(this.selectedTabIndex)}},{key:"ngOnChanges",value:function(n){n.selectedTabIndex&&this.selectTabIndex(n.selectedTabIndex.currentValue)}},{key:"ngOnDestroy",value:function(){this._currentTabChangedEmitter.complete()}},{key:"classVclTabsLeft",get:function(){return"left"===this.layout}},{key:"classVclTabsRight",get:function(){return"right"===this.layout}},{key:"hasContent",get:function(){return!!this.panel&&Object(e.a)(this.panel)}}]),n}()},vyX7:function(n,l){n.exports='<span class="hljs-keyword">import</span> { Component } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/core\'</span>;\n\n<span class="hljs-meta">@Component</span>({\n  templateUrl: <span class="hljs-string">\'demo.component.html\'</span>\n})\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> OffClickDemoComponent  {\n\n  clicks = <span class="hljs-number">0</span>;\n\n  offClick() {\n    <span class="hljs-keyword">this</span>.clicks++;\n  }\n}\n'}}]);