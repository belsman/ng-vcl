webpackJsonp([32],{488:function(n,l,e){"use strict";var t=this&&this.__extends||function(){var n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,l){n.__proto__=l}||function(n,l){for(var e in l)l.hasOwnProperty(e)&&(n[e]=l[e])};return function(l,e){function t(){this.constructor=l}n(l,e),l.prototype=null===e?Object.create(e):(t.prototype=e.prototype,new t)}}();Object.defineProperty(l,"__esModule",{value:!0});var s=e(1),a=e(880),o=e(21),u=e(76),r=e(48),i=e(218),c=e(512),p=e(32),d=e(511),m=e(507),h=function(n){function l(l){return n.call(this,l,[d.DemoComponentNgFactory],[])||this}return t(l,n),Object.defineProperty(l.prototype,"_NgLocalization_7",{get:function(){return null==this.__NgLocalization_7&&(this.__NgLocalization_7=new o.NgLocaleLocalization(this.parent.get(s.LOCALE_ID))),this.__NgLocalization_7},enumerable:!0,configurable:!0}),l.prototype.createInternal=function(){return this._CommonModule_0=new o.CommonModule,this._L10nModule_1=new u.L10nModule,this._VCLWormholeModule_2=new r.VCLWormholeModule,this._VCLTabNavModule_3=new i.VCLTabNavModule,this._DemoModule_4=new c.DemoModule,this._RouterModule_5=new p.RouterModule(this.parent.get(p.ɵa,null),this.parent.get(p.Router,null)),this._L10nDemoModule_6=new a.L10nDemoModule,this._ROUTES_8=[[{path:"",component:m.DemoComponent,data:{demo:a.demo}}]],this._L10nDemoModule_6},l.prototype.getInternal=function(n,l){return n===o.CommonModule?this._CommonModule_0:n===u.L10nModule?this._L10nModule_1:n===r.VCLWormholeModule?this._VCLWormholeModule_2:n===i.VCLTabNavModule?this._VCLTabNavModule_3:n===c.DemoModule?this._DemoModule_4:n===p.RouterModule?this._RouterModule_5:n===a.L10nDemoModule?this._L10nDemoModule_6:n===o.NgLocalization?this._NgLocalization_7:n===p.ROUTES?this._ROUTES_8:l},l.prototype.destroyInternal=function(){},l}(s.ɵNgModuleInjector);l.L10nDemoModuleNgFactory=new s.NgModuleFactory(h,a.L10nDemoModule)},506:function(n,l,e){"use strict";Object.defineProperty(l,"__esModule",{value:!0});var t=function(){function n(){}return n}();l.TabLabelDirective=t;var s=function(){function n(){this.disabled=!1,this.tabClass=""}return n}();l.TabComponent=s},507:function(n,l,e){"use strict";Object.defineProperty(l,"__esModule",{value:!0});var t=e(32),s=e(22),a=function(){function n(n,l){this.activatedRoute=n,this.sanitizer=l,this.tabs=[]}return n.prototype.ngOnInit=function(){var n=this,l=this.activatedRoute.snapshot.data.demo();l?(this.title=l.label,l.tabs?this.tabs=Object.keys(l.tabs).map(function(e){var t,s;return"object"==typeof l.tabs[e]&&l.tabs[e]?(t=l.tabs[e].type,s="pre"===t||"html"===t||"md"===t?n.sanitizer.bypassSecurityTrustHtml(l.tabs[e].content):l.tabs[e].content):"function"==typeof l.tabs[e]&&(t="component",s=l.tabs[e]),{name:e,content:s,type:t}}):this.tabs=[]):(this.title="ng-vcl",this.tabs=[])},n.ctorParameters=function(){return[{type:t.ActivatedRoute},{type:s.DomSanitizer}]},n}();l.DemoComponent=a},508:function(n,l,e){"use strict";Object.defineProperty(l,"__esModule",{value:!0});var t=e(48),s=e(1),a=e(506),o=function(){function n(){this.layout="",this.tabbableClass="",this.tabsClass="",this.tabContentClass="",this.borders=!1,this.selectedTabIndex=0,this.selectedTabIndexChange$=new s.EventEmitter}return Object.defineProperty(n.prototype,"tabContent",{set:function(n){this.wormholeHost=new t.WormholeHost(n)},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"selectedTabIndexChange",{get:function(){return this.selectedTabIndexChange$.asObservable()},enumerable:!0,configurable:!0}),n.prototype.selectTab=function(n){var l,e,t=this.tabs.toArray();n instanceof a.TabComponent?(l=t.indexOf(n),e=n):"number"==typeof n&&t[n]?(l=n,e=t[l]):(l=-1,e=null),l>=0&&e instanceof a.TabComponent&&!e.disabled&&(this.wormholeHost.clearWormholes(),this.selectedTabIndex=l,this.selectedTabIndexChange$.emit(l),this.wormholeHost.connectWormhole(e.content))},n.prototype.ngAfterContentInit=function(){this.selectTab(this.selectedTabIndex)},n.prototype.ngOnDestroy=function(){this.wormholeHost.clearWormholes()},n}();l.TabNavComponent=o},509:function(n,l,e){"use strict";function t(n){return o.ɵvid(0,[(n()(),o.ɵeld(0,null,null,7,"div",[["role","tab"]],[[8,"className",0],[2,"vclDisabled",null],[2,"vclSelected",null],[2,"aria-selected",null]],[[null,"tap"]],function(n,l,e){var t=!0,s=n.component;if("tap"===l){t=!1!==s.selectTab(n.context.$implicit)&&t}return t},null,null)),(n()(),o.ɵted(null,["\n        "])),(n()(),o.ɵeld(0,null,null,4,"span",[["class","vclTabLabel"]],null,null,null,null,null)),(n()(),o.ɵted(null,[" \n          "])),(n()(),o.ɵeld(16777216,null,null,1,"wormhole",[],null,null,null,null,null)),o.ɵdid(671744,null,0,u.WormholeDirective,[o.ViewContainerRef],{target:[0,"target"]},null),(n()(),o.ɵted(null,["\n        "])),(n()(),o.ɵted(null,["\n    "]))],function(n,l){n(l,5,0,l.context.$implicit.label)},function(n,l){var e=l.component;n(l,0,0,o.ɵinlineInterpolate(1,"vclTab ",l.context.$implicit.tabClass,""),l.context.$implicit.disabled,e.selectedTabIndex===l.context.index,e.selectedTabIndex===l.context.index)})}function s(n){return o.ɵvid(0,[o.ɵqud(402653184,1,{tabContent:0}),(n()(),o.ɵeld(0,null,null,20,"div",[],[[8,"className",0],[2,"vclTabsLeft",null],[2,"vclTabsRight",null]],null,null,null,null)),(n()(),o.ɵted(null,["\n  "])),(n()(),o.ɵeld(0,null,null,4,"div",[["role","tablist"]],[[8,"className",0],[2,"vclTabStyleUni",null]],null,null,null,null)),(n()(),o.ɵted(null,["\n    "])),(n()(),o.ɵand(16777216,null,null,1,null,t)),o.ɵdid(802816,null,0,r.NgForOf,[o.ViewContainerRef,o.TemplateRef,o.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(n()(),o.ɵted(null,["\n  "])),(n()(),o.ɵted(null,["\n  "])),(n()(),o.ɵeld(0,null,null,11,"div",[],[[8,"className",0],[2,"vclNoBorder",null]],null,null,null,null)),(n()(),o.ɵted(null,["\n    "])),(n()(),o.ɵeld(0,null,null,3,"div",[["class","vclTabPanel"],["role","tabpanel"]],null,null,null,null,null)),(n()(),o.ɵted(null,["\n      "])),(n()(),o.ɵeld(16777216,[[1,3],["tabContent",1]],null,0,"div",[],null,null,null,null,null)),(n()(),o.ɵted(null,["\n    "])),(n()(),o.ɵted(null,["\n    "])),(n()(),o.ɵeld(0,null,null,3,"div",[["class","vclTabPanel"],["role","tabpanel"]],null,null,null,null,null)),(n()(),o.ɵted(null,["\n      "])),o.ɵncd(null,0),(n()(),o.ɵted(null,["\n    "])),(n()(),o.ɵted(null,["\n  "])),(n()(),o.ɵted(null,["\n"])),(n()(),o.ɵted(null,["\n"]))],function(n,l){n(l,6,0,l.component.tabs)},function(n,l){var e=l.component;n(l,1,0,o.ɵinlineInterpolate(1,"vclTabbable ",e.tabbableClass,""),"left"===e.layout,"right"===e.layout),n(l,3,0,o.ɵinlineInterpolate(1,"vclTabs ",e.tabsClass,""),!!e.borders),n(l,9,0,o.ɵinlineInterpolate(1,"vclTabContent ",e.tabContentClass,""),!e.borders)})}function a(n){return o.ɵvid(0,[(n()(),o.ɵeld(0,null,null,2,"vcl-tab-nav",[],null,null,null,s,l.RenderType_TabNavComponent)),o.ɵdid(1228800,null,1,i.TabNavComponent,[],null,null),o.ɵqud(603979776,1,{tabs:1})],null,null)}Object.defineProperty(l,"__esModule",{value:!0});var o=e(1),u=e(217),r=e(21),i=e(508),c=[];l.RenderType_TabNavComponent=o.ɵcrt({encapsulation:2,styles:c,data:{}}),l.View_TabNavComponent_0=s,l.TabNavComponentNgFactory=o.ɵccf("vcl-tab-nav",i.TabNavComponent,a,{layout:"layout",tabbableClass:"tabbableClass",tabsClass:"tabsClass",tabContentClass:"tabContentClass",borders:"borders",selectedTabIndex:"selectedTabIndex"},{selectedTabIndexChange:"selectedTabIndexChange"},["*"])},510:function(n,l,e){"use strict";function t(n){return o.ɵvid(0,[o.ɵncd(null,0),(n()(),o.ɵand(0,null,null,0))],null,null)}function s(n){return o.ɵvid(0,[o.ɵqud(402653184,1,{content:0}),(n()(),o.ɵand(0,[[1,2]],null,0,null,t))],null,null)}function a(n){return o.ɵvid(0,[(n()(),o.ɵeld(0,null,null,2,"vcl-tab",[],null,null,null,s,l.RenderType_TabComponent)),o.ɵdid(49152,null,1,u.TabComponent,[],null,null),o.ɵqud(335544320,1,{label:0})],null,null)}Object.defineProperty(l,"__esModule",{value:!0});var o=e(1),u=e(506),r=[];l.RenderType_TabComponent=o.ɵcrt({encapsulation:2,styles:r,data:{}}),l.View_TabComponent_0=s,l.TabComponentNgFactory=o.ɵccf("vcl-tab",u.TabComponent,a,{disabled:"disabled",tabClass:"tabClass"},{},["*"])},511:function(n,l,e){"use strict";function t(n){return m.ɵvid(0,[(n()(),m.ɵted(null,["",""]))],null,function(n,l){n(l,0,0,l.parent.context.$implicit.name)})}function s(n){return m.ɵvid(0,[(n()(),m.ɵeld(16777216,null,null,1,"wormhole",[],null,null,null,null,null)),m.ɵdid(671744,null,0,h.WormholeDirective,[m.ViewContainerRef],{target:[0,"target"]},null),(n()(),m.ɵand(0,null,null,0))],function(n,l){n(l,1,0,l.parent.context.$implicit.content)},null)}function a(n){return m.ɵvid(0,[(n()(),m.ɵeld(0,null,null,2,"div",[],null,null,null,null,null)),(n()(),m.ɵeld(0,null,null,1,"pre",[],null,null,null,null,null)),(n()(),m.ɵted(null,["",""]))],null,function(n,l){n(l,2,0,l.parent.context.$implicit.content)})}function o(n){return m.ɵvid(0,[(n()(),m.ɵeld(0,null,null,0,"div",[],[[8,"innerHTML",1]],null,null,null,null))],null,function(n,l){n(l,0,0,l.parent.context.$implicit.content)})}function u(n){return m.ɵvid(0,[(n()(),m.ɵeld(0,null,null,0,"div",[["class","markdown-body"]],[[8,"innerHTML",1]],null,null,null,null))],null,function(n,l){n(l,0,0,l.parent.context.$implicit.content)})}function r(n){return m.ɵvid(0,[(n()(),m.ɵeld(0,null,null,0,"pre",[],[[8,"innerHTML",1]],null,null,null,null))],null,function(n,l){n(l,0,0,l.parent.context.$implicit.content)})}function i(n){return m.ɵvid(0,[(n()(),m.ɵeld(0,null,null,21,"vcl-tab",[],null,null,null,b.View_TabComponent_0,b.RenderType_TabComponent)),m.ɵdid(49152,[[1,4]],1,f.TabComponent,[],null,null),m.ɵqud(335544320,2,{label:0}),(n()(),m.ɵted(0,["\n      "])),(n()(),m.ɵand(0,[[2,2]],0,1,null,t)),m.ɵdid(16384,null,0,f.TabLabelDirective,[],null,null),(n()(),m.ɵted(0,["\n      "])),(n()(),m.ɵand(16777216,null,0,1,null,s)),m.ɵdid(16384,null,0,v.NgIf,[m.ViewContainerRef,m.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),m.ɵted(0,["\n      "])),(n()(),m.ɵand(16777216,null,0,1,null,a)),m.ɵdid(16384,null,0,v.NgIf,[m.ViewContainerRef,m.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),m.ɵted(0,["\n      "])),(n()(),m.ɵand(16777216,null,0,1,null,o)),m.ɵdid(16384,null,0,v.NgIf,[m.ViewContainerRef,m.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),m.ɵted(0,["\n      "])),(n()(),m.ɵand(16777216,null,0,1,null,u)),m.ɵdid(16384,null,0,v.NgIf,[m.ViewContainerRef,m.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),m.ɵted(0,["\n      "])),(n()(),m.ɵand(16777216,null,0,1,null,r)),m.ɵdid(16384,null,0,v.NgIf,[m.ViewContainerRef,m.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),m.ɵted(0,["\n    "]))],function(n,l){n(l,8,0,"component"===l.context.$implicit.type),n(l,11,0,"text"===l.context.$implicit.type),n(l,14,0,"html"===l.context.$implicit.type),n(l,17,0,"md"===l.context.$implicit.type),n(l,20,0,"pre"===l.context.$implicit.type)},null)}function c(n){return m.ɵvid(0,[(n()(),m.ɵeld(0,null,null,9,"div",[],null,null,null,null,null)),(n()(),m.ɵted(null,["\n  "])),(n()(),m.ɵeld(0,null,null,6,"vcl-tab-nav",[["borders","true"]],null,null,null,g.View_TabNavComponent_0,g.RenderType_TabNavComponent)),m.ɵdid(1228800,null,1,_.TabNavComponent,[],{borders:[0,"borders"]},null),m.ɵqud(603979776,1,{tabs:1}),(n()(),m.ɵted(0,["\n    "])),(n()(),m.ɵand(16777216,null,0,1,null,i)),m.ɵdid(802816,null,0,v.NgForOf,[m.ViewContainerRef,m.TemplateRef,m.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(n()(),m.ɵted(0,["\n  "])),(n()(),m.ɵted(null,["\n"]))],function(n,l){var e=l.component;n(l,3,0,"true"),n(l,7,0,e.tabs)},null)}function p(n){return m.ɵvid(0,[(n()(),m.ɵeld(0,null,null,1,"h2",[["class","vclArticleHeader"]],null,null,null,null,null)),(n()(),m.ɵted(null,[" ",""])),(n()(),m.ɵted(null,["\n"])),(n()(),m.ɵand(16777216,null,null,1,null,c)),m.ɵdid(16384,null,0,v.NgIf,[m.ViewContainerRef,m.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),m.ɵted(null,["\n"]))],function(n,l){n(l,4,0,l.component.tabs.length>0)},function(n,l){n(l,1,0,l.component.title)})}function d(n){return m.ɵvid(0,[(n()(),m.ɵeld(0,null,null,1,"ng-component",[],null,null,null,p,l.RenderType_DemoComponent)),m.ɵdid(114688,null,0,C.DemoComponent,[j.ActivatedRoute,y.DomSanitizer],null,null)],function(n,l){n(l,1,0)},null)}Object.defineProperty(l,"__esModule",{value:!0});var m=e(1),h=e(217),b=e(510),f=e(506),v=e(21),g=e(509),_=e(508),C=e(507),j=e(32),y=e(22),T=[];l.RenderType_DemoComponent=m.ɵcrt({encapsulation:2,styles:T,data:{}}),l.View_DemoComponent_0=p,l.DemoComponentNgFactory=m.ɵccf("ng-component",C.DemoComponent,d,{},{},[])},512:function(n,l,e){"use strict";Object.defineProperty(l,"__esModule",{value:!0});var t=e(507);l.DemoComponent=t.DemoComponent;var s=function(){function n(){}return n}();l.DemoModule=s},880:function(n,l,e){"use strict";function t(){return{label:"L10n",tabs:{"README.md":{type:"md",content:e(981)}}}}Object.defineProperty(l,"__esModule",{value:!0}),l.demo=t;var s=function(){function n(){}return n}();l.L10nDemoModule=s},981:function(n,l){n.exports='<h3 id="usage">Usage</h3>\n<pre class="hljs">\n<span class="hljs-keyword">import</span> { NgModule } <span class="hljs-keyword">from</span> <span class="hljs-string">&apos;@angular/core&apos;</span>;\n<span class="hljs-keyword">import</span> { L10nModule } <span class="hljs-keyword">from</span> <span class="hljs-string">&apos;ng-vcl&apos;</span>;\n<span class="hljs-keyword">import</span> { AppComponent } <span class="hljs-keyword">from</span> <span class="hljs-string">&apos;./app.component&apos;</span>;\n\n@NgModule({\n  <span class="hljs-attr">imports</span>: [\n    L10nModule.forRoot({\n      <span class="hljs-attr">loader</span>: MyLoaderService,  <span class="hljs-comment">// required - loader services class</span>\n      loaderConfig: { ... },    <span class="hljs-comment">// optional - loader configuration</span>\n      parser: MyParserService,  <span class="hljs-comment">// optional - parser service class</span>\n      config: {\n        <span class="hljs-attr">locale</span>: <span class="hljs-string">&quot;en-us&quot;</span>         <span class="hljs-comment">// optional - default locale. Uses browsers default language if not provided</span>\n      }\n    })\n  ],\n  <span class="hljs-attr">declarations</span>: [ AppComponent ],\n  <span class="hljs-attr">bootstrap</span>: [ AppComponent ]\n})\n<span class="hljs-keyword">export</span> <span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">AppModule</span> </span>{ }\n</pre>\n<p>Use the <code>loc</code> pipe in a template to localize a text</p>\n<pre class="hljs">\n<span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>{{&apos;HELLO_WORLD&apos; | loc}}<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>\n</pre>\n<h3 id="loader-services">Loader services</h3>\n<h4 id="static-resource-loader">Static resource loader</h4>\n<pre class="hljs"><span class="hljs-selector-tag">L10nModule</span><span class="hljs-selector-class">.forRoot</span>({\n  <span class="hljs-attribute">loader</span>: L10nStaticLoaderService,\n  loaderConfig: {\n    <span class="hljs-string">&quot;HELLO_WORLD&quot;</span>: {\n      <span class="hljs-string">&quot;en-us&quot;</span>: <span class="hljs-string">&quot;Hello World!&quot;</span>\n      <span class="hljs-string">&quot;de-de&quot;</span>: <span class="hljs-string">&quot;Hallo Welt!&quot;</span>\n    }\n  }\n});\n</pre><h4 id="http-service-todo">HTTP service TODO</h4>\n<pre class="hljs">L10nModule.forRoot({\n  <span class="hljs-attr">loader</span>: L10nHTTPLoaderService,\n  <span class="hljs-attr">loaderConfig</span>: {\n    <span class="hljs-attr">endpoint</span>: <span class="hljs-string">&apos;URL_TO_JSON&apos;</span>\n  }\n});\n</pre>\n<pre class="hljs">\n<span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">AnyInjectableClass</span> </span>{\n  <span class="hljs-keyword">constructor</span>(private l10n: L10nHTTPService) {\n    <span class="hljs-comment">// Refetches the json    </span>\n    <span class="hljs-keyword">this</span>.l10n.refresh();\n  }\n}\n</pre>\n<h3 id="custom-loaders">Custom loaders</h3>\n<pre class="hljs">@Injectable()\n<span class="hljs-keyword">export</span> <span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">L10nFancyLoaderService</span> <span class="hljs-keyword">extends</span> <span class="hljs-title">L10nLoaderService</span> </span>{\n  <span class="hljs-keyword">constructor</span>(\n    @Inject(L10N_CONFIG)\n    private config: L10nConfig,\n    // other injections\n  ) {\n    <span class="hljs-keyword">super</span>();\n    <span class="hljs-keyword">this</span>.config; <span class="hljs-comment">// loader config</span>\n  }\n\n  <span class="hljs-comment">// required</span>\n  fetchTranslationPackage(locale:string) : Observable&lt;TranslationPackage&gt; {\n    <span class="hljs-comment">// return your translation package as an Observable</span>\n  }\n\n  <span class="hljs-comment">// optional</span>\n  getSupportedLocales() : Observable&lt;string[]&gt; {\n    <span class="hljs-comment">// return an array of supported locales as an Observable</span>\n  }\n}\n</pre>\n<h3 id="template-parameters">Template parameters</h3>\n<pre class="hljs">{\n  <span class="hljs-attr">&quot;HELLO_USER&quot;</span>: {\n    <span class="hljs-attr">&quot;en-us&quot;</span>: <span class="hljs-string">&quot;Hello {0}!&quot;</span>,\n    <span class="hljs-attr">&quot;de-de&quot;</span>: <span class="hljs-string">&quot;Hallo {0}!&quot;</span>\n  }\n}\n</pre>\n<pre class="hljs">&lt;span&gt;{{HELLO_USER | loc:username}}&lt;/span&gt;\n</pre>\n'}});
//# sourceMappingURL=32.map