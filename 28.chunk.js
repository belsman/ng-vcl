webpackJsonp([28],{1001:function(n,l){n.exports='<h1 id="vcl-link">vcl-link</h1>\n<p>The anchor tag with VCL and Angular awareness.<br>Uses vcl-icogram to display a combination of text and icons if <code>appIcon</code> or <code>appIcon</code> is provided.</p>\n<h2 id="usage">Usage</h2>\n<pre class="hljs"><span class="hljs-tag">&lt;<span class="hljs-name">a</span> <span class="hljs-attr">vcl-link</span> [<span class="hljs-attr">href</span>]=<span class="hljs-string">&quot;&apos;http://www.example.com&apos;&quot;</span> [<span class="hljs-attr">label</span>]=<span class="hljs-string">&quot;&apos;Example Link&apos;&quot;</span> [<span class="hljs-attr">prepIcon</span>]=<span class="hljs-string">&quot;&apos;fa:chevron-right&apos;&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">a</span>&gt;</span>\n</pre>\n<h3 id="api">API</h3>\n<h4 id="properties-">Properties:</h4>\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Type</th>\n<th>Default</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td><code>href</code></td>\n<td>string</td>\n<td></td>\n<td><code>href</code> attribute </td>\n</tr>\n<tr>\n<td><code>scheme</code></td>\n<td>string</td>\n<td></td>\n<td>URL scheme to be used, e. g. <code>tel</code>, <code>mailto</code> etc. </td>\n</tr>\n<tr>\n<td><code>label</code> <em>(1)</em></td>\n<td>string</td>\n<td></td>\n<td>textual label with automatic l10n lookup </td>\n</tr>\n<tr>\n<td><code>title</code> <em>(1)</em></td>\n<td>string</td>\n<td></td>\n<td>textual title with automatic l10n lookup </td>\n</tr>\n<tr>\n<td><code>prepIcon</code></td>\n<td>string</td>\n<td></td>\n<td>icon to be prepended to the label </td>\n</tr>\n<tr>\n<td><code>appIcon</code></td>\n<td>string</td>\n<td></td>\n<td>icon to be appended to the label </td>\n</tr>\n<tr>\n<td><code>disabled</code></td>\n<td>boolean</td>\n<td>false</td>\n<td>disabled if <code>true</code> </td>\n</tr>\n</tbody>\n</table>\n<p><em>(1) Supports l10n</em></p>\n'},493:function(n,l,e){"use strict";var t=this&&this.__extends||function(){var n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,l){n.__proto__=l}||function(n,l){for(var e in l)l.hasOwnProperty(e)&&(n[e]=l[e])};return function(l,e){function t(){this.constructor=l}n(l,e),l.prototype=null===e?Object.create(e):(t.prototype=e.prototype,new t)}}();Object.defineProperty(l,"__esModule",{value:!0});var a=e(1),s=e(894),o=e(21),u=e(76),i=e(48),c=e(218),r=e(516),p=e(118),d=e(119),h=e(131),m=e(32),b=e(41),f=e(515),g=e(846),v=e(511),_=function(n){function l(l){return n.call(this,l,[f.DemoComponentNgFactory,g.LinkDemoComponentNgFactory],[])||this}return t(l,n),Object.defineProperty(l.prototype,"_NgLocalization_10",{get:function(){return null==this.__NgLocalization_10&&(this.__NgLocalization_10=new o.NgLocaleLocalization(this.parent.get(a.LOCALE_ID))),this.__NgLocalization_10},enumerable:!0,configurable:!0}),Object.defineProperty(l.prototype,"_IconService_11",{get:function(){return null==this.__IconService_11&&(this.__IconService_11=new b.IconService),this.__IconService_11},enumerable:!0,configurable:!0}),l.prototype.createInternal=function(){return this._CommonModule_0=new o.CommonModule,this._L10nModule_1=new u.L10nModule,this._VCLWormholeModule_2=new i.VCLWormholeModule,this._VCLTabNavModule_3=new c.VCLTabNavModule,this._DemoModule_4=new r.DemoModule,this._VCLIconModule_5=new p.VCLIconModule,this._VCLIcogramModule_6=new d.VCLIcogramModule,this._VCLLinkModule_7=new h.VCLLinkModule,this._RouterModule_8=new m.RouterModule(this.parent.get(m.ɵa,null),this.parent.get(m.Router,null)),this._LinkDemoModule_9=new s.LinkDemoModule,this._ROUTES_12=[[{path:"",component:v.DemoComponent,data:{demo:s.demo}}]],this._LinkDemoModule_9},l.prototype.getInternal=function(n,l){return n===o.CommonModule?this._CommonModule_0:n===u.L10nModule?this._L10nModule_1:n===i.VCLWormholeModule?this._VCLWormholeModule_2:n===c.VCLTabNavModule?this._VCLTabNavModule_3:n===r.DemoModule?this._DemoModule_4:n===p.VCLIconModule?this._VCLIconModule_5:n===d.VCLIcogramModule?this._VCLIcogramModule_6:n===h.VCLLinkModule?this._VCLLinkModule_7:n===m.RouterModule?this._RouterModule_8:n===s.LinkDemoModule?this._LinkDemoModule_9:n===o.NgLocalization?this._NgLocalization_10:n===b.IconService?this._IconService_11:n===m.ROUTES?this._ROUTES_12:l},l.prototype.destroyInternal=function(){},l}(a.ɵNgModuleInjector);l.LinkDemoModuleNgFactory=new a.NgModuleFactory(_,s.LinkDemoModule)},510:function(n,l,e){"use strict";Object.defineProperty(l,"__esModule",{value:!0});var t=function(){function n(){}return n}();l.TabLabelDirective=t;var a=function(){function n(){this.disabled=!1,this.tabClass=""}return n}();l.TabComponent=a},511:function(n,l,e){"use strict";Object.defineProperty(l,"__esModule",{value:!0});var t=e(32),a=e(22),s=function(){function n(n,l){this.activatedRoute=n,this.sanitizer=l,this.tabs=[]}return n.prototype.ngOnInit=function(){var n=this,l=this.activatedRoute.snapshot.data.demo();l?(this.title=l.label,l.tabs?this.tabs=Object.keys(l.tabs).map(function(e){var t,a;return"object"==typeof l.tabs[e]&&l.tabs[e]?(t=l.tabs[e].type,a="pre"===t||"html"===t||"md"===t?n.sanitizer.bypassSecurityTrustHtml(l.tabs[e].content):l.tabs[e].content):"function"==typeof l.tabs[e]&&(t="component",a=l.tabs[e]),{name:e,content:a,type:t}}):this.tabs=[]):(this.title="ng-vcl",this.tabs=[])},n.ctorParameters=function(){return[{type:t.ActivatedRoute},{type:a.DomSanitizer}]},n}();l.DemoComponent=s},512:function(n,l,e){"use strict";Object.defineProperty(l,"__esModule",{value:!0});var t=e(48),a=e(1),s=e(510),o=function(){function n(){this.layout="",this.tabbableClass="",this.tabsClass="",this.tabContentClass="",this.borders=!1,this.selectedTabIndex=0,this.selectedTabIndexChange$=new a.EventEmitter}return Object.defineProperty(n.prototype,"tabContent",{set:function(n){this.wormholeHost=new t.WormholeHost(n)},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"selectedTabIndexChange",{get:function(){return this.selectedTabIndexChange$.asObservable()},enumerable:!0,configurable:!0}),n.prototype.selectTab=function(n){var l,e,t=this.tabs.toArray();n instanceof s.TabComponent?(l=t.indexOf(n),e=n):"number"==typeof n&&t[n]?(l=n,e=t[l]):(l=-1,e=null),l>=0&&e instanceof s.TabComponent&&!e.disabled&&(this.wormholeHost.clearWormholes(),this.selectedTabIndex=l,this.selectedTabIndexChange$.emit(l),this.wormholeHost.connectWormhole(e.content))},n.prototype.ngAfterContentInit=function(){this.selectTab(this.selectedTabIndex)},n.prototype.ngOnDestroy=function(){this.wormholeHost.clearWormholes()},n}();l.TabNavComponent=o},513:function(n,l,e){"use strict";function t(n){return o.ɵvid(0,[(n()(),o.ɵeld(0,null,null,7,"div",[["role","tab"]],[[8,"className",0],[2,"vclDisabled",null],[2,"vclSelected",null],[2,"aria-selected",null]],[[null,"tap"]],function(n,l,e){var t=!0,a=n.component;if("tap"===l){t=!1!==a.selectTab(n.context.$implicit)&&t}return t},null,null)),(n()(),o.ɵted(null,["\n        "])),(n()(),o.ɵeld(0,null,null,4,"span",[["class","vclTabLabel"]],null,null,null,null,null)),(n()(),o.ɵted(null,[" \n          "])),(n()(),o.ɵeld(16777216,null,null,1,"wormhole",[],null,null,null,null,null)),o.ɵdid(671744,null,0,u.WormholeDirective,[o.ViewContainerRef],{target:[0,"target"]},null),(n()(),o.ɵted(null,["\n        "])),(n()(),o.ɵted(null,["\n    "]))],function(n,l){n(l,5,0,l.context.$implicit.label)},function(n,l){var e=l.component;n(l,0,0,o.ɵinlineInterpolate(1,"vclTab ",l.context.$implicit.tabClass,""),l.context.$implicit.disabled,e.selectedTabIndex===l.context.index,e.selectedTabIndex===l.context.index)})}function a(n){return o.ɵvid(0,[o.ɵqud(402653184,1,{tabContent:0}),(n()(),o.ɵeld(0,null,null,20,"div",[],[[8,"className",0],[2,"vclTabsLeft",null],[2,"vclTabsRight",null]],null,null,null,null)),(n()(),o.ɵted(null,["\n  "])),(n()(),o.ɵeld(0,null,null,4,"div",[["role","tablist"]],[[8,"className",0],[2,"vclTabStyleUni",null]],null,null,null,null)),(n()(),o.ɵted(null,["\n    "])),(n()(),o.ɵand(16777216,null,null,1,null,t)),o.ɵdid(802816,null,0,i.NgForOf,[o.ViewContainerRef,o.TemplateRef,o.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(n()(),o.ɵted(null,["\n  "])),(n()(),o.ɵted(null,["\n  "])),(n()(),o.ɵeld(0,null,null,11,"div",[],[[8,"className",0],[2,"vclNoBorder",null]],null,null,null,null)),(n()(),o.ɵted(null,["\n    "])),(n()(),o.ɵeld(0,null,null,3,"div",[["class","vclTabPanel"],["role","tabpanel"]],null,null,null,null,null)),(n()(),o.ɵted(null,["\n      "])),(n()(),o.ɵeld(16777216,[[1,3],["tabContent",1]],null,0,"div",[],null,null,null,null,null)),(n()(),o.ɵted(null,["\n    "])),(n()(),o.ɵted(null,["\n    "])),(n()(),o.ɵeld(0,null,null,3,"div",[["class","vclTabPanel"],["role","tabpanel"]],null,null,null,null,null)),(n()(),o.ɵted(null,["\n      "])),o.ɵncd(null,0),(n()(),o.ɵted(null,["\n    "])),(n()(),o.ɵted(null,["\n  "])),(n()(),o.ɵted(null,["\n"])),(n()(),o.ɵted(null,["\n"]))],function(n,l){n(l,6,0,l.component.tabs)},function(n,l){var e=l.component;n(l,1,0,o.ɵinlineInterpolate(1,"vclTabbable ",e.tabbableClass,""),"left"===e.layout,"right"===e.layout),n(l,3,0,o.ɵinlineInterpolate(1,"vclTabs ",e.tabsClass,""),!!e.borders),n(l,9,0,o.ɵinlineInterpolate(1,"vclTabContent ",e.tabContentClass,""),!e.borders)})}function s(n){return o.ɵvid(0,[(n()(),o.ɵeld(0,null,null,2,"vcl-tab-nav",[],null,null,null,a,l.RenderType_TabNavComponent)),o.ɵdid(1228800,null,1,c.TabNavComponent,[],null,null),o.ɵqud(603979776,1,{tabs:1})],null,null)}Object.defineProperty(l,"__esModule",{value:!0});var o=e(1),u=e(217),i=e(21),c=e(512),r=[];l.RenderType_TabNavComponent=o.ɵcrt({encapsulation:2,styles:r,data:{}}),l.View_TabNavComponent_0=a,l.TabNavComponentNgFactory=o.ɵccf("vcl-tab-nav",c.TabNavComponent,s,{layout:"layout",tabbableClass:"tabbableClass",tabsClass:"tabsClass",tabContentClass:"tabContentClass",borders:"borders",selectedTabIndex:"selectedTabIndex"},{selectedTabIndexChange:"selectedTabIndexChange"},["*"])},514:function(n,l,e){"use strict";function t(n){return o.ɵvid(0,[o.ɵncd(null,0),(n()(),o.ɵand(0,null,null,0))],null,null)}function a(n){return o.ɵvid(0,[o.ɵqud(402653184,1,{content:0}),(n()(),o.ɵand(0,[[1,2]],null,0,null,t))],null,null)}function s(n){return o.ɵvid(0,[(n()(),o.ɵeld(0,null,null,2,"vcl-tab",[],null,null,null,a,l.RenderType_TabComponent)),o.ɵdid(49152,null,1,u.TabComponent,[],null,null),o.ɵqud(335544320,1,{label:0})],null,null)}Object.defineProperty(l,"__esModule",{value:!0});var o=e(1),u=e(510),i=[];l.RenderType_TabComponent=o.ɵcrt({encapsulation:2,styles:i,data:{}}),l.View_TabComponent_0=a,l.TabComponentNgFactory=o.ɵccf("vcl-tab",u.TabComponent,s,{disabled:"disabled",tabClass:"tabClass"},{},["*"])},515:function(n,l,e){"use strict";function t(n){return h.ɵvid(0,[(n()(),h.ɵted(null,["",""]))],null,function(n,l){n(l,0,0,l.parent.context.$implicit.name)})}function a(n){return h.ɵvid(0,[(n()(),h.ɵeld(16777216,null,null,1,"wormhole",[],null,null,null,null,null)),h.ɵdid(671744,null,0,m.WormholeDirective,[h.ViewContainerRef],{target:[0,"target"]},null),(n()(),h.ɵand(0,null,null,0))],function(n,l){n(l,1,0,l.parent.context.$implicit.content)},null)}function s(n){return h.ɵvid(0,[(n()(),h.ɵeld(0,null,null,2,"div",[],null,null,null,null,null)),(n()(),h.ɵeld(0,null,null,1,"pre",[],null,null,null,null,null)),(n()(),h.ɵted(null,["",""]))],null,function(n,l){n(l,2,0,l.parent.context.$implicit.content)})}function o(n){return h.ɵvid(0,[(n()(),h.ɵeld(0,null,null,0,"div",[],[[8,"innerHTML",1]],null,null,null,null))],null,function(n,l){n(l,0,0,l.parent.context.$implicit.content)})}function u(n){return h.ɵvid(0,[(n()(),h.ɵeld(0,null,null,0,"div",[["class","markdown-body"]],[[8,"innerHTML",1]],null,null,null,null))],null,function(n,l){n(l,0,0,l.parent.context.$implicit.content)})}function i(n){return h.ɵvid(0,[(n()(),h.ɵeld(0,null,null,0,"pre",[],[[8,"innerHTML",1]],null,null,null,null))],null,function(n,l){n(l,0,0,l.parent.context.$implicit.content)})}function c(n){return h.ɵvid(0,[(n()(),h.ɵeld(0,null,null,21,"vcl-tab",[],null,null,null,b.View_TabComponent_0,b.RenderType_TabComponent)),h.ɵdid(49152,[[1,4]],1,f.TabComponent,[],null,null),h.ɵqud(335544320,2,{label:0}),(n()(),h.ɵted(0,["\n      "])),(n()(),h.ɵand(0,[[2,2]],0,1,null,t)),h.ɵdid(16384,null,0,f.TabLabelDirective,[],null,null),(n()(),h.ɵted(0,["\n      "])),(n()(),h.ɵand(16777216,null,0,1,null,a)),h.ɵdid(16384,null,0,g.NgIf,[h.ViewContainerRef,h.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),h.ɵted(0,["\n      "])),(n()(),h.ɵand(16777216,null,0,1,null,s)),h.ɵdid(16384,null,0,g.NgIf,[h.ViewContainerRef,h.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),h.ɵted(0,["\n      "])),(n()(),h.ɵand(16777216,null,0,1,null,o)),h.ɵdid(16384,null,0,g.NgIf,[h.ViewContainerRef,h.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),h.ɵted(0,["\n      "])),(n()(),h.ɵand(16777216,null,0,1,null,u)),h.ɵdid(16384,null,0,g.NgIf,[h.ViewContainerRef,h.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),h.ɵted(0,["\n      "])),(n()(),h.ɵand(16777216,null,0,1,null,i)),h.ɵdid(16384,null,0,g.NgIf,[h.ViewContainerRef,h.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),h.ɵted(0,["\n    "]))],function(n,l){n(l,8,0,"component"===l.context.$implicit.type),n(l,11,0,"text"===l.context.$implicit.type),n(l,14,0,"html"===l.context.$implicit.type),n(l,17,0,"md"===l.context.$implicit.type),n(l,20,0,"pre"===l.context.$implicit.type)},null)}function r(n){return h.ɵvid(0,[(n()(),h.ɵeld(0,null,null,9,"div",[],null,null,null,null,null)),(n()(),h.ɵted(null,["\n  "])),(n()(),h.ɵeld(0,null,null,6,"vcl-tab-nav",[["borders","true"]],null,null,null,v.View_TabNavComponent_0,v.RenderType_TabNavComponent)),h.ɵdid(1228800,null,1,_.TabNavComponent,[],{borders:[0,"borders"]},null),h.ɵqud(603979776,1,{tabs:1}),(n()(),h.ɵted(0,["\n    "])),(n()(),h.ɵand(16777216,null,0,1,null,c)),h.ɵdid(802816,null,0,g.NgForOf,[h.ViewContainerRef,h.TemplateRef,h.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(n()(),h.ɵted(0,["\n  "])),(n()(),h.ɵted(null,["\n"]))],function(n,l){var e=l.component;n(l,3,0,"true"),n(l,7,0,e.tabs)},null)}function p(n){return h.ɵvid(0,[(n()(),h.ɵeld(0,null,null,1,"h2",[["class","vclArticleHeader"]],null,null,null,null,null)),(n()(),h.ɵted(null,[" ",""])),(n()(),h.ɵted(null,["\n"])),(n()(),h.ɵand(16777216,null,null,1,null,r)),h.ɵdid(16384,null,0,g.NgIf,[h.ViewContainerRef,h.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),h.ɵted(null,["\n"]))],function(n,l){n(l,4,0,l.component.tabs.length>0)},function(n,l){n(l,1,0,l.component.title)})}function d(n){return h.ɵvid(0,[(n()(),h.ɵeld(0,null,null,1,"ng-component",[],null,null,null,p,l.RenderType_DemoComponent)),h.ɵdid(114688,null,0,C.DemoComponent,[j.ActivatedRoute,y.DomSanitizer],null,null)],function(n,l){n(l,1,0)},null)}Object.defineProperty(l,"__esModule",{value:!0});var h=e(1),m=e(217),b=e(514),f=e(510),g=e(21),v=e(513),_=e(512),C=e(511),j=e(32),y=e(22),L=[];l.RenderType_DemoComponent=h.ɵcrt({encapsulation:2,styles:L,data:{}}),l.View_DemoComponent_0=p,l.DemoComponentNgFactory=h.ɵccf("ng-component",C.DemoComponent,d,{},{},[])},516:function(n,l,e){"use strict";Object.defineProperty(l,"__esModule",{value:!0});var t=e(511);l.DemoComponent=t.DemoComponent;var a=function(){function n(){}return n}();l.DemoModule=a},803:function(n,l,e){"use strict";Object.defineProperty(l,"__esModule",{value:!0});var t=function(){function n(){}return n.prototype.someAction=function(n){console.log("Action handler, param:",n)},n}();l.LinkDemoComponent=t},846:function(n,l,e){"use strict";function t(n){return s.ɵvid(0,[(n()(),s.ɵeld(0,null,null,1,"h3",[],null,null,null,null,null)),(n()(),s.ɵted(null,["Link with action:"])),(n()(),s.ɵted(null,["\n"])),(n()(),s.ɵeld(0,null,null,1,"a",[["vcl-link",""]],[[2,"vclDisabled",null],[1,"title",0],[1,"aria-label",0],[4,"cursor",null],[1,"href",4],[2,"vclContentLink",null]],[[null,"tap"]],function(n,l,e){var t=!0,a=n.component;if("tap"===l){t=!1!==a.someAction(e)&&t}return t},u.View_LinkComponent_0,u.RenderType_LinkComponent)),s.ɵdid(704512,null,0,i.LinkComponent,[[2,c.L10nService]],{label:[0,"label"]},null),(n()(),s.ɵted(null,["\n"])),(n()(),s.ɵeld(0,null,null,0,"br",[],null,null,null,null,null)),(n()(),s.ɵeld(0,null,null,0,"br",[],null,null,null,null,null)),(n()(),s.ɵted(null,["\n\n"])),(n()(),s.ɵeld(0,null,null,1,"h3",[],null,null,null,null,null)),(n()(),s.ɵted(null,["href attribute only (label is automatically created):"])),(n()(),s.ɵted(null,["\n"])),(n()(),s.ɵeld(0,null,null,1,"a",[["vcl-link",""]],[[2,"vclDisabled",null],[1,"title",0],[1,"aria-label",0],[4,"cursor",null],[1,"href",4],[2,"vclContentLink",null]],null,null,u.View_LinkComponent_0,u.RenderType_LinkComponent)),s.ɵdid(704512,null,0,i.LinkComponent,[[2,c.L10nService]],{href:[0,"href"]},null),(n()(),s.ɵted(null,["\n"])),(n()(),s.ɵeld(0,null,null,0,"br",[],null,null,null,null,null)),(n()(),s.ɵeld(0,null,null,0,"br",[],null,null,null,null,null)),(n()(),s.ɵted(null,["\n\n"])),(n()(),s.ɵeld(0,null,null,1,"h3",[],null,null,null,null,null)),(n()(),s.ɵted(null,["Label with an appended icon (uses vcl-icogram):"])),(n()(),s.ɵted(null,["\n"])),(n()(),s.ɵeld(0,null,null,1,"a",[["vcl-link",""]],[[8,"target",0],[2,"vclDisabled",null],[1,"title",0],[1,"aria-label",0],[4,"cursor",null],[1,"href",4],[2,"vclContentLink",null]],null,null,u.View_LinkComponent_0,u.RenderType_LinkComponent)),s.ɵdid(704512,null,0,i.LinkComponent,[[2,c.L10nService]],{href:[0,"href"],label:[1,"label"],appIcon:[2,"appIcon"]},null),(n()(),s.ɵted(null,["\n"])),(n()(),s.ɵeld(0,null,null,0,"br",[],null,null,null,null,null)),(n()(),s.ɵeld(0,null,null,0,"br",[],null,null,null,null,null)),(n()(),s.ɵted(null,["\n\n"])),(n()(),s.ɵeld(0,null,null,1,"h3",[],null,null,null,null,null)),(n()(),s.ɵted(null,["Disabled link:"])),(n()(),s.ɵted(null,["\n"])),(n()(),s.ɵeld(0,null,null,1,"a",[["vcl-link",""]],[[2,"vclDisabled",null],[1,"title",0],[1,"aria-label",0],[4,"cursor",null],[1,"href",4],[2,"vclContentLink",null]],null,null,u.View_LinkComponent_0,u.RenderType_LinkComponent)),s.ɵdid(704512,null,0,i.LinkComponent,[[2,c.L10nService]],{href:[0,"href"],label:[1,"label"],disabled:[2,"disabled"]},null),(n()(),s.ɵted(null,["\n"])),(n()(),s.ɵeld(0,null,null,0,"br",[],null,null,null,null,null)),(n()(),s.ɵeld(0,null,null,0,"br",[],null,null,null,null,null)),(n()(),s.ɵted(null,["\n\n"])),(n()(),s.ɵeld(0,null,null,1,"h3",[],null,null,null,null,null)),(n()(),s.ɵted(null,["Link with title and scheme:"])),(n()(),s.ɵted(null,["\n"])),(n()(),s.ɵeld(0,null,null,1,"a",[["vcl-link",""]],[[2,"vclDisabled",null],[1,"title",0],[1,"aria-label",0],[4,"cursor",null],[1,"href",4],[2,"vclContentLink",null]],null,null,u.View_LinkComponent_0,u.RenderType_LinkComponent)),s.ɵdid(704512,null,0,i.LinkComponent,[[2,c.L10nService]],{href:[0,"href"],label:[1,"label"],title:[2,"title"],scheme:[3,"scheme"]},null),(n()(),s.ɵted(null,["\n"])),(n()(),s.ɵeld(0,null,null,0,"br",[],null,null,null,null,null)),(n()(),s.ɵeld(0,null,null,0,"br",[],null,null,null,null,null)),(n()(),s.ɵted(null,["\n"]))],function(n,l){n(l,4,0,"Trigger test action");n(l,13,0,"http://www.example.com");n(l,22,0,"https://github.com/ng-vcl/ng-vcl","Example external Link","fa:external-link");n(l,31,0,"this is not considered when the link is disabled","Disabled link",!0);n(l,40,0,"004971122222222","I'm a telephone number schemed link","tel link title","tel")},function(n,l){n(l,3,0,s.ɵnov(l,4).disabled,s.ɵnov(l,4).locTitle,s.ɵnov(l,4).locTitle,s.ɵnov(l,4).styleCursor,s.ɵnov(l,4).attrHref,s.ɵnov(l,4).useIcogram),n(l,12,0,s.ɵnov(l,13).disabled,s.ɵnov(l,13).locTitle,s.ɵnov(l,13).locTitle,s.ɵnov(l,13).styleCursor,s.ɵnov(l,13).attrHref,s.ɵnov(l,13).useIcogram);n(l,21,0,"_blank",s.ɵnov(l,22).disabled,s.ɵnov(l,22).locTitle,s.ɵnov(l,22).locTitle,s.ɵnov(l,22).styleCursor,s.ɵnov(l,22).attrHref,s.ɵnov(l,22).useIcogram),n(l,30,0,s.ɵnov(l,31).disabled,s.ɵnov(l,31).locTitle,s.ɵnov(l,31).locTitle,s.ɵnov(l,31).styleCursor,s.ɵnov(l,31).attrHref,s.ɵnov(l,31).useIcogram),n(l,39,0,s.ɵnov(l,40).disabled,s.ɵnov(l,40).locTitle,s.ɵnov(l,40).locTitle,s.ɵnov(l,40).styleCursor,s.ɵnov(l,40).attrHref,s.ɵnov(l,40).useIcogram)})}function a(n){return s.ɵvid(0,[(n()(),s.ɵeld(0,null,null,1,"ng-component",[],null,null,null,t,l.RenderType_LinkDemoComponent)),s.ɵdid(49152,null,0,o.LinkDemoComponent,[],null,null)],null,null)}Object.defineProperty(l,"__esModule",{value:!0});var s=e(1),o=e(803),u=e(286),i=e(140),c=e(50),r=[];l.RenderType_LinkDemoComponent=s.ɵcrt({encapsulation:2,styles:r,data:{}}),l.View_LinkDemoComponent_0=t,l.LinkDemoComponentNgFactory=s.ɵccf("ng-component",o.LinkDemoComponent,a,{},{},[])},894:function(n,l,e){"use strict";function t(){return{label:"Link",tabs:{Demo:a.LinkDemoComponent,"README.md":{type:"md",content:e(1001)},"demo.component.html":{type:"pre",content:e(931)},"demo.component.ts":{type:"pre",content:e(967)}}}}Object.defineProperty(l,"__esModule",{value:!0});var a=e(803);l.demo=t;var s=function(){function n(){}return n}();l.LinkDemoModule=s},931:function(n,l){n.exports='<span class="hljs-tag">&lt;<span class="hljs-name">h3</span>&gt;</span>Link with action:<span class="hljs-tag">&lt;/<span class="hljs-name">h3</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">a</span> <span class="hljs-attr">vcl-link</span> (<span class="hljs-attr">tap</span>)=<span class="hljs-string">"someAction($event)"</span> [<span class="hljs-attr">label</span>]=<span class="hljs-string">"\'Trigger test action\'"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">a</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">h3</span>&gt;</span>href attribute only (label is automatically created):<span class="hljs-tag">&lt;/<span class="hljs-name">h3</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">a</span> <span class="hljs-attr">vcl-link</span> [<span class="hljs-attr">href</span>]=<span class="hljs-string">"\'http://www.example.com\'"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">a</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">h3</span>&gt;</span>Label with an appended icon (uses vcl-icogram):<span class="hljs-tag">&lt;/<span class="hljs-name">h3</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">a</span> <span class="hljs-attr">vcl-link</span>\n  [<span class="hljs-attr">label</span>]=<span class="hljs-string">"\'Example external Link\'"</span>\n  [<span class="hljs-attr">href</span>]=<span class="hljs-string">"\'https://github.com/ng-vcl/ng-vcl\'"</span>\n  [<span class="hljs-attr">appIcon</span>]=<span class="hljs-string">"\'fa:external-link\'"</span>\n  [<span class="hljs-attr">target</span>]=<span class="hljs-string">"\'_blank\'"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">a</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">h3</span>&gt;</span>Disabled link:<span class="hljs-tag">&lt;/<span class="hljs-name">h3</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">a</span> <span class="hljs-attr">vcl-link</span>\n  [<span class="hljs-attr">label</span>]=<span class="hljs-string">"\'Disabled link\'"</span>\n  [<span class="hljs-attr">href</span>]=<span class="hljs-string">"\'this is not considered when the link is disabled\'"</span>\n  [<span class="hljs-attr">disabled</span>]=<span class="hljs-string">"true"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">a</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">h3</span>&gt;</span>Link with title and scheme:<span class="hljs-tag">&lt;/<span class="hljs-name">h3</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">a</span> <span class="hljs-attr">vcl-link</span>\n  [<span class="hljs-attr">label</span>]=<span class="hljs-string">"\'I\\\'m a telephone number schemed link\'"</span>\n  [<span class="hljs-attr">title</span>]=<span class="hljs-string">"\'tel link title\'"</span>\n  [<span class="hljs-attr">scheme</span>]=<span class="hljs-string">"\'tel\'"</span>\n  [<span class="hljs-attr">href</span>]=<span class="hljs-string">"\'004971122222222\'"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">a</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span>\n'},967:function(n,l){n.exports='<span class="hljs-keyword">import</span> { Component, OnInit } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/core\'</span>;\n\n<span class="hljs-meta">@Component</span>({\n  templateUrl: <span class="hljs-string">\'demo.component.html\'</span>\n})\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> LinkDemoComponent {\n  someAction(param) {\n    <span class="hljs-built_in">console</span>.log(<span class="hljs-string">\'Action handler, param:\'</span>, param);\n  }\n}\n'}});
//# sourceMappingURL=28.map