webpackJsonp([25],{501:function(n,l,a){"use strict";var t=this&&this.__extends||function(){var n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,l){n.__proto__=l}||function(n,l){for(var a in l)l.hasOwnProperty(a)&&(n[a]=l[a])};return function(l,a){function t(){this.constructor=l}n(l,a),l.prototype=null===a?Object.create(a):(t.prototype=a.prototype,new t)}}();Object.defineProperty(l,"__esModule",{value:!0});var s=a(1),e=a(894),u=a(21),o=a(76),p=a(48),c=a(218),d=a(512),i=a(32),r=a(511),b=a(849),h=a(507),m=function(n){function l(l){return n.call(this,l,[r.DemoComponentNgFactory,b.TabNavDemoComponentNgFactory],[])||this}return t(l,n),Object.defineProperty(l.prototype,"_NgLocalization_7",{get:function(){return null==this.__NgLocalization_7&&(this.__NgLocalization_7=new u.NgLocaleLocalization(this.parent.get(s.LOCALE_ID))),this.__NgLocalization_7},enumerable:!0,configurable:!0}),l.prototype.createInternal=function(){return this._CommonModule_0=new u.CommonModule,this._L10nModule_1=new o.L10nModule,this._VCLWormholeModule_2=new p.VCLWormholeModule,this._VCLTabNavModule_3=new c.VCLTabNavModule,this._DemoModule_4=new d.DemoModule,this._RouterModule_5=new i.RouterModule(this.parent.get(i.ɵa,null),this.parent.get(i.Router,null)),this._TabNavDemoModule_6=new e.TabNavDemoModule,this._ROUTES_8=[[{path:"",component:h.DemoComponent,data:{demo:e.demo}}]],this._TabNavDemoModule_6},l.prototype.getInternal=function(n,l){return n===u.CommonModule?this._CommonModule_0:n===o.L10nModule?this._L10nModule_1:n===p.VCLWormholeModule?this._VCLWormholeModule_2:n===c.VCLTabNavModule?this._VCLTabNavModule_3:n===d.DemoModule?this._DemoModule_4:n===i.RouterModule?this._RouterModule_5:n===e.TabNavDemoModule?this._TabNavDemoModule_6:n===u.NgLocalization?this._NgLocalization_7:n===i.ROUTES?this._ROUTES_8:l},l.prototype.destroyInternal=function(){},l}(s.ɵNgModuleInjector);l.TabNavDemoModuleNgFactory=new s.NgModuleFactory(m,e.TabNavDemoModule)},506:function(n,l,a){"use strict";Object.defineProperty(l,"__esModule",{value:!0});var t=function(){function n(){}return n}();l.TabLabelDirective=t;var s=function(){function n(){this.disabled=!1,this.tabClass=""}return n}();l.TabComponent=s},507:function(n,l,a){"use strict";Object.defineProperty(l,"__esModule",{value:!0});var t=a(32),s=a(22),e=function(){function n(n,l){this.activatedRoute=n,this.sanitizer=l,this.tabs=[]}return n.prototype.ngOnInit=function(){var n=this,l=this.activatedRoute.snapshot.data.demo();l?(this.title=l.label,l.tabs?this.tabs=Object.keys(l.tabs).map(function(a){var t,s;return"object"==typeof l.tabs[a]&&l.tabs[a]?(t=l.tabs[a].type,s="pre"===t||"html"===t||"md"===t?n.sanitizer.bypassSecurityTrustHtml(l.tabs[a].content):l.tabs[a].content):"function"==typeof l.tabs[a]&&(t="component",s=l.tabs[a]),{name:a,content:s,type:t}}):this.tabs=[]):(this.title="ng-vcl",this.tabs=[])},n.ctorParameters=function(){return[{type:t.ActivatedRoute},{type:s.DomSanitizer}]},n}();l.DemoComponent=e},508:function(n,l,a){"use strict";Object.defineProperty(l,"__esModule",{value:!0});var t=a(48),s=a(1),e=a(506),u=function(){function n(){this.layout="",this.tabbableClass="",this.tabsClass="",this.tabContentClass="",this.borders=!1,this.selectedTabIndex=0,this.selectedTabIndexChange$=new s.EventEmitter}return Object.defineProperty(n.prototype,"tabContent",{set:function(n){this.wormholeHost=new t.WormholeHost(n)},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"selectedTabIndexChange",{get:function(){return this.selectedTabIndexChange$.asObservable()},enumerable:!0,configurable:!0}),n.prototype.selectTab=function(n){var l,a,t=this.tabs.toArray();n instanceof e.TabComponent?(l=t.indexOf(n),a=n):"number"==typeof n&&t[n]?(l=n,a=t[l]):(l=-1,a=null),l>=0&&a instanceof e.TabComponent&&!a.disabled&&(this.wormholeHost.clearWormholes(),this.selectedTabIndex=l,this.selectedTabIndexChange$.emit(l),this.wormholeHost.connectWormhole(a.content))},n.prototype.ngAfterContentInit=function(){this.selectTab(this.selectedTabIndex)},n.prototype.ngOnDestroy=function(){this.wormholeHost.clearWormholes()},n}();l.TabNavComponent=u},509:function(n,l,a){"use strict";function t(n){return u.ɵvid(0,[(n()(),u.ɵeld(0,null,null,7,"div",[["role","tab"]],[[8,"className",0],[2,"vclDisabled",null],[2,"vclSelected",null],[2,"aria-selected",null]],[[null,"tap"]],function(n,l,a){var t=!0,s=n.component;if("tap"===l){t=!1!==s.selectTab(n.context.$implicit)&&t}return t},null,null)),(n()(),u.ɵted(null,["\n        "])),(n()(),u.ɵeld(0,null,null,4,"span",[["class","vclTabLabel"]],null,null,null,null,null)),(n()(),u.ɵted(null,[" \n          "])),(n()(),u.ɵeld(16777216,null,null,1,"wormhole",[],null,null,null,null,null)),u.ɵdid(671744,null,0,o.WormholeDirective,[u.ViewContainerRef],{target:[0,"target"]},null),(n()(),u.ɵted(null,["\n        "])),(n()(),u.ɵted(null,["\n    "]))],function(n,l){n(l,5,0,l.context.$implicit.label)},function(n,l){var a=l.component;n(l,0,0,u.ɵinlineInterpolate(1,"vclTab ",l.context.$implicit.tabClass,""),l.context.$implicit.disabled,a.selectedTabIndex===l.context.index,a.selectedTabIndex===l.context.index)})}function s(n){return u.ɵvid(0,[u.ɵqud(402653184,1,{tabContent:0}),(n()(),u.ɵeld(0,null,null,20,"div",[],[[8,"className",0],[2,"vclTabsLeft",null],[2,"vclTabsRight",null]],null,null,null,null)),(n()(),u.ɵted(null,["\n  "])),(n()(),u.ɵeld(0,null,null,4,"div",[["role","tablist"]],[[8,"className",0],[2,"vclTabStyleUni",null]],null,null,null,null)),(n()(),u.ɵted(null,["\n    "])),(n()(),u.ɵand(16777216,null,null,1,null,t)),u.ɵdid(802816,null,0,p.NgForOf,[u.ViewContainerRef,u.TemplateRef,u.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(n()(),u.ɵted(null,["\n  "])),(n()(),u.ɵted(null,["\n  "])),(n()(),u.ɵeld(0,null,null,11,"div",[],[[8,"className",0],[2,"vclNoBorder",null]],null,null,null,null)),(n()(),u.ɵted(null,["\n    "])),(n()(),u.ɵeld(0,null,null,3,"div",[["class","vclTabPanel"],["role","tabpanel"]],null,null,null,null,null)),(n()(),u.ɵted(null,["\n      "])),(n()(),u.ɵeld(16777216,[[1,3],["tabContent",1]],null,0,"div",[],null,null,null,null,null)),(n()(),u.ɵted(null,["\n    "])),(n()(),u.ɵted(null,["\n    "])),(n()(),u.ɵeld(0,null,null,3,"div",[["class","vclTabPanel"],["role","tabpanel"]],null,null,null,null,null)),(n()(),u.ɵted(null,["\n      "])),u.ɵncd(null,0),(n()(),u.ɵted(null,["\n    "])),(n()(),u.ɵted(null,["\n  "])),(n()(),u.ɵted(null,["\n"])),(n()(),u.ɵted(null,["\n"]))],function(n,l){n(l,6,0,l.component.tabs)},function(n,l){var a=l.component;n(l,1,0,u.ɵinlineInterpolate(1,"vclTabbable ",a.tabbableClass,""),"left"===a.layout,"right"===a.layout),n(l,3,0,u.ɵinlineInterpolate(1,"vclTabs ",a.tabsClass,""),!!a.borders),n(l,9,0,u.ɵinlineInterpolate(1,"vclTabContent ",a.tabContentClass,""),!a.borders)})}function e(n){return u.ɵvid(0,[(n()(),u.ɵeld(0,null,null,2,"vcl-tab-nav",[],null,null,null,s,l.RenderType_TabNavComponent)),u.ɵdid(1228800,null,1,c.TabNavComponent,[],null,null),u.ɵqud(603979776,1,{tabs:1})],null,null)}Object.defineProperty(l,"__esModule",{value:!0});var u=a(1),o=a(217),p=a(21),c=a(508),d=[];l.RenderType_TabNavComponent=u.ɵcrt({encapsulation:2,styles:d,data:{}}),l.View_TabNavComponent_0=s,l.TabNavComponentNgFactory=u.ɵccf("vcl-tab-nav",c.TabNavComponent,e,{layout:"layout",tabbableClass:"tabbableClass",tabsClass:"tabsClass",tabContentClass:"tabContentClass",borders:"borders",selectedTabIndex:"selectedTabIndex"},{selectedTabIndexChange:"selectedTabIndexChange"},["*"])},510:function(n,l,a){"use strict";function t(n){return u.ɵvid(0,[u.ɵncd(null,0),(n()(),u.ɵand(0,null,null,0))],null,null)}function s(n){return u.ɵvid(0,[u.ɵqud(402653184,1,{content:0}),(n()(),u.ɵand(0,[[1,2]],null,0,null,t))],null,null)}function e(n){return u.ɵvid(0,[(n()(),u.ɵeld(0,null,null,2,"vcl-tab",[],null,null,null,s,l.RenderType_TabComponent)),u.ɵdid(49152,null,1,o.TabComponent,[],null,null),u.ɵqud(335544320,1,{label:0})],null,null)}Object.defineProperty(l,"__esModule",{value:!0});var u=a(1),o=a(506),p=[];l.RenderType_TabComponent=u.ɵcrt({encapsulation:2,styles:p,data:{}}),l.View_TabComponent_0=s,l.TabComponentNgFactory=u.ɵccf("vcl-tab",o.TabComponent,e,{disabled:"disabled",tabClass:"tabClass"},{},["*"])},511:function(n,l,a){"use strict";function t(n){return b.ɵvid(0,[(n()(),b.ɵted(null,["",""]))],null,function(n,l){n(l,0,0,l.parent.context.$implicit.name)})}function s(n){return b.ɵvid(0,[(n()(),b.ɵeld(16777216,null,null,1,"wormhole",[],null,null,null,null,null)),b.ɵdid(671744,null,0,h.WormholeDirective,[b.ViewContainerRef],{target:[0,"target"]},null),(n()(),b.ɵand(0,null,null,0))],function(n,l){n(l,1,0,l.parent.context.$implicit.content)},null)}function e(n){return b.ɵvid(0,[(n()(),b.ɵeld(0,null,null,2,"div",[],null,null,null,null,null)),(n()(),b.ɵeld(0,null,null,1,"pre",[],null,null,null,null,null)),(n()(),b.ɵted(null,["",""]))],null,function(n,l){n(l,2,0,l.parent.context.$implicit.content)})}function u(n){return b.ɵvid(0,[(n()(),b.ɵeld(0,null,null,0,"div",[],[[8,"innerHTML",1]],null,null,null,null))],null,function(n,l){n(l,0,0,l.parent.context.$implicit.content)})}function o(n){return b.ɵvid(0,[(n()(),b.ɵeld(0,null,null,0,"div",[["class","markdown-body"]],[[8,"innerHTML",1]],null,null,null,null))],null,function(n,l){n(l,0,0,l.parent.context.$implicit.content)})}function p(n){return b.ɵvid(0,[(n()(),b.ɵeld(0,null,null,0,"pre",[],[[8,"innerHTML",1]],null,null,null,null))],null,function(n,l){n(l,0,0,l.parent.context.$implicit.content)})}function c(n){return b.ɵvid(0,[(n()(),b.ɵeld(0,null,null,21,"vcl-tab",[],null,null,null,m.View_TabComponent_0,m.RenderType_TabComponent)),b.ɵdid(49152,[[1,4]],1,g.TabComponent,[],null,null),b.ɵqud(335544320,2,{label:0}),(n()(),b.ɵted(0,["\n      "])),(n()(),b.ɵand(0,[[2,2]],0,1,null,t)),b.ɵdid(16384,null,0,g.TabLabelDirective,[],null,null),(n()(),b.ɵted(0,["\n      "])),(n()(),b.ɵand(16777216,null,0,1,null,s)),b.ɵdid(16384,null,0,v.NgIf,[b.ViewContainerRef,b.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),b.ɵted(0,["\n      "])),(n()(),b.ɵand(16777216,null,0,1,null,e)),b.ɵdid(16384,null,0,v.NgIf,[b.ViewContainerRef,b.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),b.ɵted(0,["\n      "])),(n()(),b.ɵand(16777216,null,0,1,null,u)),b.ɵdid(16384,null,0,v.NgIf,[b.ViewContainerRef,b.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),b.ɵted(0,["\n      "])),(n()(),b.ɵand(16777216,null,0,1,null,o)),b.ɵdid(16384,null,0,v.NgIf,[b.ViewContainerRef,b.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),b.ɵted(0,["\n      "])),(n()(),b.ɵand(16777216,null,0,1,null,p)),b.ɵdid(16384,null,0,v.NgIf,[b.ViewContainerRef,b.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),b.ɵted(0,["\n    "]))],function(n,l){n(l,8,0,"component"===l.context.$implicit.type),n(l,11,0,"text"===l.context.$implicit.type),n(l,14,0,"html"===l.context.$implicit.type),n(l,17,0,"md"===l.context.$implicit.type),n(l,20,0,"pre"===l.context.$implicit.type)},null)}function d(n){return b.ɵvid(0,[(n()(),b.ɵeld(0,null,null,9,"div",[],null,null,null,null,null)),(n()(),b.ɵted(null,["\n  "])),(n()(),b.ɵeld(0,null,null,6,"vcl-tab-nav",[["borders","true"]],null,null,null,j.View_TabNavComponent_0,j.RenderType_TabNavComponent)),b.ɵdid(1228800,null,1,T.TabNavComponent,[],{borders:[0,"borders"]},null),b.ɵqud(603979776,1,{tabs:1}),(n()(),b.ɵted(0,["\n    "])),(n()(),b.ɵand(16777216,null,0,1,null,c)),b.ɵdid(802816,null,0,v.NgForOf,[b.ViewContainerRef,b.TemplateRef,b.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(n()(),b.ɵted(0,["\n  "])),(n()(),b.ɵted(null,["\n"]))],function(n,l){var a=l.component;n(l,3,0,"true"),n(l,7,0,a.tabs)},null)}function i(n){return b.ɵvid(0,[(n()(),b.ɵeld(0,null,null,1,"h2",[["class","vclArticleHeader"]],null,null,null,null,null)),(n()(),b.ɵted(null,[" ",""])),(n()(),b.ɵted(null,["\n"])),(n()(),b.ɵand(16777216,null,null,1,null,d)),b.ɵdid(16384,null,0,v.NgIf,[b.ViewContainerRef,b.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),b.ɵted(null,["\n"]))],function(n,l){n(l,4,0,l.component.tabs.length>0)},function(n,l){n(l,1,0,l.component.title)})}function r(n){return b.ɵvid(0,[(n()(),b.ɵeld(0,null,null,1,"ng-component",[],null,null,null,i,l.RenderType_DemoComponent)),b.ɵdid(114688,null,0,C.DemoComponent,[f.ActivatedRoute,_.DomSanitizer],null,null)],function(n,l){n(l,1,0)},null)}Object.defineProperty(l,"__esModule",{value:!0});var b=a(1),h=a(217),m=a(510),g=a(506),v=a(21),j=a(509),T=a(508),C=a(507),f=a(32),_=a(22),y=[];l.RenderType_DemoComponent=b.ɵcrt({encapsulation:2,styles:y,data:{}}),l.View_DemoComponent_0=i,l.DemoComponentNgFactory=b.ɵccf("ng-component",C.DemoComponent,r,{},{},[])},512:function(n,l,a){"use strict";Object.defineProperty(l,"__esModule",{value:!0});var t=a(507);l.DemoComponent=t.DemoComponent;var s=function(){function n(){}return n}();l.DemoModule=s},809:function(n,l,a){"use strict";Object.defineProperty(l,"__esModule",{value:!0});var t=function(){function n(){this.tabIndex=0}return n}();l.TabNavDemoComponent=t},849:function(n,l,a){"use strict";function t(n){return g.ɵvid(0,[(n()(),g.ɵted(null,["Tab1"]))],null,null)}function s(n){return g.ɵvid(0,[(n()(),g.ɵted(null,["Tab2"]))],null,null)}function e(n){return g.ɵvid(0,[(n()(),g.ɵted(null,["Tab3 disabled"]))],null,null)}function u(n){return g.ɵvid(0,[(n()(),g.ɵted(null,["Tab1"]))],null,null)}function o(n){return g.ɵvid(0,[(n()(),g.ɵted(null,["Tab2"]))],null,null)}function p(n){return g.ɵvid(0,[(n()(),g.ɵted(null,["Tab1"]))],null,null)}function c(n){return g.ɵvid(0,[(n()(),g.ɵted(null,["Tab2"]))],null,null)}function d(n){return g.ɵvid(0,[(n()(),g.ɵted(null,["Tab1"]))],null,null)}function i(n){return g.ɵvid(0,[(n()(),g.ɵted(null,["Tab2"]))],null,null)}function r(n){return g.ɵvid(0,[(n()(),g.ɵted(null,["Tab1"]))],null,null)}function b(n){return g.ɵvid(0,[(n()(),g.ɵted(null,["Tab2"]))],null,null)}function h(n){return g.ɵvid(0,[(n()(),g.ɵeld(0,null,null,1,"h3",[],null,null,null,null,null)),(n()(),g.ɵted(null,["Default"])),(n()(),g.ɵted(null,["\n\n"])),(n()(),g.ɵeld(0,null,null,26,"vcl-tab-nav",[],null,null,null,v.View_TabNavComponent_0,v.RenderType_TabNavComponent)),g.ɵdid(1228800,null,1,j.TabNavComponent,[],null,null),g.ɵqud(603979776,1,{tabs:1}),(n()(),g.ɵted(0,["\n  "])),(n()(),g.ɵeld(0,null,0,6,"vcl-tab",[],null,null,null,T.View_TabComponent_0,T.RenderType_TabComponent)),g.ɵdid(49152,[[1,4]],1,C.TabComponent,[],null,null),g.ɵqud(335544320,2,{label:0}),(n()(),g.ɵted(0,["\n    "])),(n()(),g.ɵand(0,[[2,2]],0,1,null,t)),g.ɵdid(16384,null,0,C.TabLabelDirective,[],null,null),(n()(),g.ɵted(0,["\n    Content1\n  "])),(n()(),g.ɵted(0,["\n  "])),(n()(),g.ɵeld(0,null,0,6,"vcl-tab",[],null,null,null,T.View_TabComponent_0,T.RenderType_TabComponent)),g.ɵdid(49152,[[1,4]],1,C.TabComponent,[],null,null),g.ɵqud(335544320,3,{label:0}),(n()(),g.ɵted(0,["\n    "])),(n()(),g.ɵand(0,[[3,2]],0,1,null,s)),g.ɵdid(16384,null,0,C.TabLabelDirective,[],null,null),(n()(),g.ɵted(0,["\n    Content2\n  "])),(n()(),g.ɵted(0,["\n  "])),(n()(),g.ɵeld(0,null,0,5,"vcl-tab",[],null,null,null,T.View_TabComponent_0,T.RenderType_TabComponent)),g.ɵdid(49152,[[1,4]],1,C.TabComponent,[],{disabled:[0,"disabled"]},null),g.ɵqud(335544320,4,{label:0}),(n()(),g.ɵand(0,[[4,2]],0,1,null,e)),g.ɵdid(16384,null,0,C.TabLabelDirective,[],null,null),(n()(),g.ɵted(0,["\n    Content3\n  "])),(n()(),g.ɵted(0,["\n"])),(n()(),g.ɵted(null,["\n\n"])),(n()(),g.ɵeld(0,null,null,0,"hr",[],null,null,null,null,null)),(n()(),g.ɵted(null,["\n\n"])),(n()(),g.ɵeld(0,null,null,1,"h3",[],null,null,null,null,null)),(n()(),g.ɵted(null,['With layout="right"'])),(n()(),g.ɵted(null,["\n\n"])),(n()(),g.ɵeld(0,null,null,19,"vcl-tab-nav",[["layout","right"],["tabContentClass","vclSpan-70p"],["tabsClass","vclSpan-30p"]],null,null,null,v.View_TabNavComponent_0,v.RenderType_TabNavComponent)),g.ɵdid(1228800,null,1,j.TabNavComponent,[],{layout:[0,"layout"],tabsClass:[1,"tabsClass"],tabContentClass:[2,"tabContentClass"]},null),g.ɵqud(603979776,5,{tabs:1}),(n()(),g.ɵted(0,["\n  "])),(n()(),g.ɵeld(0,null,0,6,"vcl-tab",[],null,null,null,T.View_TabComponent_0,T.RenderType_TabComponent)),g.ɵdid(49152,[[5,4]],1,C.TabComponent,[],null,null),g.ɵqud(335544320,6,{label:0}),(n()(),g.ɵted(0,["\n    "])),(n()(),g.ɵand(0,[[6,2]],0,1,null,u)),g.ɵdid(16384,null,0,C.TabLabelDirective,[],null,null),(n()(),g.ɵted(0,["\n    Content1\n  "])),(n()(),g.ɵted(0,["\n  "])),(n()(),g.ɵeld(0,null,0,6,"vcl-tab",[],null,null,null,T.View_TabComponent_0,T.RenderType_TabComponent)),g.ɵdid(49152,[[5,4]],1,C.TabComponent,[],null,null),g.ɵqud(335544320,7,{label:0}),(n()(),g.ɵted(0,["\n    "])),(n()(),g.ɵand(0,[[7,2]],0,1,null,o)),g.ɵdid(16384,null,0,C.TabLabelDirective,[],null,null),(n()(),g.ɵted(0,["\n    Content2\n  "])),(n()(),g.ɵted(0,["\n"])),(n()(),g.ɵted(null,["\n\n"])),(n()(),g.ɵeld(0,null,null,0,"hr",[],null,null,null,null,null)),(n()(),g.ɵted(null,["\n\n"])),(n()(),g.ɵeld(0,null,null,1,"h3",[],null,null,null,null,null)),(n()(),g.ɵted(null,['With layout="left"'])),(n()(),g.ɵted(null,["\n\n"])),(n()(),g.ɵeld(0,null,null,19,"vcl-tab-nav",[["layout","left"],["tabContentClass","vclSpan-70p"],["tabsClass","vclSpan-30p"]],null,null,null,v.View_TabNavComponent_0,v.RenderType_TabNavComponent)),g.ɵdid(1228800,null,1,j.TabNavComponent,[],{layout:[0,"layout"],tabsClass:[1,"tabsClass"],tabContentClass:[2,"tabContentClass"]},null),g.ɵqud(603979776,8,{tabs:1}),(n()(),g.ɵted(0,["\n  "])),(n()(),g.ɵeld(0,null,0,6,"vcl-tab",[],null,null,null,T.View_TabComponent_0,T.RenderType_TabComponent)),g.ɵdid(49152,[[8,4]],1,C.TabComponent,[],null,null),g.ɵqud(335544320,9,{label:0}),(n()(),g.ɵted(0,["\n    "])),(n()(),g.ɵand(0,[[9,2]],0,1,null,p)),g.ɵdid(16384,null,0,C.TabLabelDirective,[],null,null),(n()(),g.ɵted(0,["\n    Content1\n  "])),(n()(),g.ɵted(0,["\n  "])),(n()(),g.ɵeld(0,null,0,6,"vcl-tab",[],null,null,null,T.View_TabComponent_0,T.RenderType_TabComponent)),g.ɵdid(49152,[[8,4]],1,C.TabComponent,[],null,null),g.ɵqud(335544320,10,{label:0}),(n()(),g.ɵted(0,["\n    "])),(n()(),g.ɵand(0,[[10,2]],0,1,null,c)),g.ɵdid(16384,null,0,C.TabLabelDirective,[],null,null),(n()(),g.ɵted(0,["\n    Content2\n  "])),(n()(),g.ɵted(0,["\n"])),(n()(),g.ɵted(null,["\n\n"])),(n()(),g.ɵeld(0,null,null,0,"hr",[],null,null,null,null,null)),(n()(),g.ɵted(null,["\n\n"])),(n()(),g.ɵeld(0,null,null,1,"h3",[],null,null,null,null,null)),(n()(),g.ɵted(null,["With borders=true"])),(n()(),g.ɵted(null,["\n\n"])),(n()(),g.ɵeld(0,null,null,19,"vcl-tab-nav",[["borders","true"]],null,null,null,v.View_TabNavComponent_0,v.RenderType_TabNavComponent)),g.ɵdid(1228800,null,1,j.TabNavComponent,[],{borders:[0,"borders"]},null),g.ɵqud(603979776,11,{tabs:1}),(n()(),g.ɵted(0,["\n  "])),(n()(),g.ɵeld(0,null,0,6,"vcl-tab",[],null,null,null,T.View_TabComponent_0,T.RenderType_TabComponent)),g.ɵdid(49152,[[11,4]],1,C.TabComponent,[],null,null),g.ɵqud(335544320,12,{label:0}),(n()(),g.ɵted(0,["\n    "])),(n()(),g.ɵand(0,[[12,2]],0,1,null,d)),g.ɵdid(16384,null,0,C.TabLabelDirective,[],null,null),(n()(),g.ɵted(0,["\n    Content1\n  "])),(n()(),g.ɵted(0,["\n  "])),(n()(),g.ɵeld(0,null,0,6,"vcl-tab",[],null,null,null,T.View_TabComponent_0,T.RenderType_TabComponent)),g.ɵdid(49152,[[11,4]],1,C.TabComponent,[],null,null),g.ɵqud(335544320,13,{label:0}),(n()(),g.ɵted(0,["\n    "])),(n()(),g.ɵand(0,[[13,2]],0,1,null,i)),g.ɵdid(16384,null,0,C.TabLabelDirective,[],null,null),(n()(),g.ɵted(0,["\n    Content2\n  "])),(n()(),g.ɵted(0,["\n"])),(n()(),g.ɵted(null,["\n\n"])),(n()(),g.ɵeld(0,null,null,1,"h3",[],null,null,null,null,null)),(n()(),g.ɵted(null,["Shared content template"])),(n()(),g.ɵted(null,["\n\n"])),(n()(),g.ɵeld(0,null,null,19,"vcl-tab-nav",[],null,[[null,"selectedTabIndexChange"]],function(n,l,a){var t=!0,s=n.component;if("selectedTabIndexChange"===l){t=!1!==(s.tabIndex=a)&&t}return t},v.View_TabNavComponent_0,v.RenderType_TabNavComponent)),g.ɵdid(1228800,null,1,j.TabNavComponent,[],{selectedTabIndex:[0,"selectedTabIndex"]},{selectedTabIndexChange:"selectedTabIndexChange"}),g.ɵqud(603979776,14,{tabs:1}),(n()(),g.ɵted(0,["\n  "])),(n()(),g.ɵeld(0,null,0,6,"vcl-tab",[],null,null,null,T.View_TabComponent_0,T.RenderType_TabComponent)),g.ɵdid(49152,[[14,4]],1,C.TabComponent,[],null,null),g.ɵqud(335544320,15,{label:0}),(n()(),g.ɵted(0,["\n    "])),(n()(),g.ɵand(0,[[15,2]],0,1,null,r)),g.ɵdid(16384,null,0,C.TabLabelDirective,[],null,null),(n()(),g.ɵted(0,["\n  "])),(n()(),g.ɵted(0,["\n  "])),(n()(),g.ɵeld(0,null,0,6,"vcl-tab",[],null,null,null,T.View_TabComponent_0,T.RenderType_TabComponent)),g.ɵdid(49152,[[14,4]],1,C.TabComponent,[],null,null),g.ɵqud(335544320,16,{label:0}),(n()(),g.ɵted(0,["\n    "])),(n()(),g.ɵand(0,[[16,2]],0,1,null,b)),g.ɵdid(16384,null,0,C.TabLabelDirective,[],null,null),(n()(),g.ɵted(0,["\n  "])),(n()(),g.ɵted(0,["\n  Shared Content Tab: ","\n"])),(n()(),g.ɵted(null,["\n"]))],function(n,l){var a=l.component;n(l,24,0,!0);n(l,37,0,"right","vclSpan-30p","vclSpan-70p");n(l,63,0,"left","vclSpan-30p","vclSpan-70p");n(l,89,0,"true"),n(l,113,0,a.tabIndex)},function(n,l){n(l,131,0,l.component.tabIndex)})}function m(n){return g.ɵvid(0,[(n()(),g.ɵeld(0,null,null,1,"ng-component",[],null,null,null,h,l.RenderType_TabNavDemoComponent)),g.ɵdid(49152,null,0,f.TabNavDemoComponent,[],null,null)],null,null)}Object.defineProperty(l,"__esModule",{value:!0});var g=a(1),v=a(509),j=a(508),T=a(510),C=a(506),f=a(809),_=[];l.RenderType_TabNavDemoComponent=g.ɵcrt({encapsulation:2,styles:_,data:{}}),l.View_TabNavDemoComponent_0=h,l.TabNavDemoComponentNgFactory=g.ɵccf("ng-component",f.TabNavDemoComponent,m,{},{},[])},894:function(n,l,a){"use strict";function t(){return{label:"Tab Navigation",tabs:{Demo:s.TabNavDemoComponent,"README.md":{type:"md",content:a(993)},"demo.component.html":{type:"pre",content:a(928)},"demo.component.ts":{type:"pre",content:a(962)}}}}Object.defineProperty(l,"__esModule",{value:!0});var s=a(809);l.demo=t;var e=function(){function n(){}return n}();l.TabNavDemoModule=e},928:function(n,l){n.exports='<span class="hljs-tag">&lt;<span class="hljs-name">h3</span>&gt;</span>Default<span class="hljs-tag">&lt;/<span class="hljs-name">h3</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">vcl-tab-nav</span> &gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">vcl-tab</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">ng-template</span> <span class="hljs-attr">vcl-tab-label</span>&gt;</span>Tab1<span class="hljs-tag">&lt;/<span class="hljs-name">ng-template</span>&gt;</span>\n    Content1\n  <span class="hljs-tag">&lt;/<span class="hljs-name">vcl-tab</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">vcl-tab</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">ng-template</span> <span class="hljs-attr">vcl-tab-label</span>&gt;</span>Tab2<span class="hljs-tag">&lt;/<span class="hljs-name">ng-template</span>&gt;</span>\n    Content2\n  <span class="hljs-tag">&lt;/<span class="hljs-name">vcl-tab</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">vcl-tab</span> [<span class="hljs-attr">disabled</span>]=<span class="hljs-string">"true"</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">ng-template</span> <span class="hljs-attr">vcl-tab-label</span>&gt;</span>Tab3 disabled<span class="hljs-tag">&lt;/<span class="hljs-name">ng-template</span>&gt;</span>\n    Content3\n  <span class="hljs-tag">&lt;/<span class="hljs-name">vcl-tab</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">vcl-tab-nav</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">hr</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">h3</span>&gt;</span>With layout="right"<span class="hljs-tag">&lt;/<span class="hljs-name">h3</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">vcl-tab-nav</span> <span class="hljs-attr">layout</span>=<span class="hljs-string">"right"</span> <span class="hljs-attr">tabContentClass</span>=<span class="hljs-string">"vclSpan-70p"</span> <span class="hljs-attr">tabsClass</span>=<span class="hljs-string">"vclSpan-30p"</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">vcl-tab</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">ng-template</span> <span class="hljs-attr">vcl-tab-label</span>&gt;</span>Tab1<span class="hljs-tag">&lt;/<span class="hljs-name">ng-template</span>&gt;</span>\n    Content1\n  <span class="hljs-tag">&lt;/<span class="hljs-name">vcl-tab</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">vcl-tab</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">ng-template</span> <span class="hljs-attr">vcl-tab-label</span>&gt;</span>Tab2<span class="hljs-tag">&lt;/<span class="hljs-name">ng-template</span>&gt;</span>\n    Content2\n  <span class="hljs-tag">&lt;/<span class="hljs-name">vcl-tab</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">vcl-tab-nav</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">hr</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">h3</span>&gt;</span>With layout="left"<span class="hljs-tag">&lt;/<span class="hljs-name">h3</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">vcl-tab-nav</span> <span class="hljs-attr">layout</span>=<span class="hljs-string">"left"</span> <span class="hljs-attr">tabContentClass</span>=<span class="hljs-string">"vclSpan-70p"</span> <span class="hljs-attr">tabsClass</span>=<span class="hljs-string">"vclSpan-30p"</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">vcl-tab</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">ng-template</span> <span class="hljs-attr">vcl-tab-label</span>&gt;</span>Tab1<span class="hljs-tag">&lt;/<span class="hljs-name">ng-template</span>&gt;</span>\n    Content1\n  <span class="hljs-tag">&lt;/<span class="hljs-name">vcl-tab</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">vcl-tab</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">ng-template</span> <span class="hljs-attr">vcl-tab-label</span>&gt;</span>Tab2<span class="hljs-tag">&lt;/<span class="hljs-name">ng-template</span>&gt;</span>\n    Content2\n  <span class="hljs-tag">&lt;/<span class="hljs-name">vcl-tab</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">vcl-tab-nav</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">hr</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">h3</span>&gt;</span>With borders=true<span class="hljs-tag">&lt;/<span class="hljs-name">h3</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">vcl-tab-nav</span> <span class="hljs-attr">borders</span>=<span class="hljs-string">true</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">vcl-tab</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">ng-template</span> <span class="hljs-attr">vcl-tab-label</span>&gt;</span>Tab1<span class="hljs-tag">&lt;/<span class="hljs-name">ng-template</span>&gt;</span>\n    Content1\n  <span class="hljs-tag">&lt;/<span class="hljs-name">vcl-tab</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">vcl-tab</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">ng-template</span> <span class="hljs-attr">vcl-tab-label</span>&gt;</span>Tab2<span class="hljs-tag">&lt;/<span class="hljs-name">ng-template</span>&gt;</span>\n    Content2\n  <span class="hljs-tag">&lt;/<span class="hljs-name">vcl-tab</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">vcl-tab-nav</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">h3</span>&gt;</span>Shared content template<span class="hljs-tag">&lt;/<span class="hljs-name">h3</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">vcl-tab-nav</span> [(<span class="hljs-attr">selectedTabIndex</span>)]=<span class="hljs-string">"tabIndex"</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">vcl-tab</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">ng-template</span> <span class="hljs-attr">vcl-tab-label</span>&gt;</span>Tab1<span class="hljs-tag">&lt;/<span class="hljs-name">ng-template</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">vcl-tab</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">vcl-tab</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">ng-template</span> <span class="hljs-attr">vcl-tab-label</span>&gt;</span>Tab2<span class="hljs-tag">&lt;/<span class="hljs-name">ng-template</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">vcl-tab</span>&gt;</span>\n  Shared Content Tab: {{tabIndex}}\n<span class="hljs-tag">&lt;/<span class="hljs-name">vcl-tab-nav</span>&gt;</span>\n'},962:function(n,l){n.exports='<span class="hljs-keyword">import</span> { Component } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/core\'</span>;\n\n<span class="hljs-meta">@Component</span>({\n  templateUrl: <span class="hljs-string">\'demo.component.html\'</span>\n})\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> TabNavDemoComponent {\n  tabIndex: <span class="hljs-built_in">number</span> = <span class="hljs-number">0</span>;\n}\n'},993:function(n,l){n.exports='<h1 id="vcl-tab-nav">vcl-tab-nav</h1>\n<p>The tab nav allows to organize content in tabs.<br>Only one tab is visible at a given time.</p>\n<h2 id="usage-">Usage:</h2>\n<pre class="hljs"><span class="hljs-keyword">import</span> { VCLTabNavModule } <span class="hljs-keyword">from</span> <span class="hljs-string">&apos;ng-vcl&apos;</span>;\n\n@NgModule({\n  <span class="hljs-attr">imports</span>: [ VCLTabNavModule ],\n  ...\n})\n<span class="hljs-keyword">export</span> <span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">AppComponent</span> </span>{}\n</pre>\n<pre class="hljs"><span class="hljs-tag">&lt;<span class="hljs-name">vcl-tab-nav</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">vcl-tab</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">ng-template</span> <span class="hljs-attr">vcl-tab-label</span>&gt;</span>Tab1<span class="hljs-tag">&lt;/<span class="hljs-name">ng-template</span>&gt;</span>\n    Content1\n  <span class="hljs-tag">&lt;/<span class="hljs-name">vcl-tab</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">vcl-tab</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">ng-template</span> <span class="hljs-attr">vcl-tab-label</span>&gt;</span>Tab2<span class="hljs-tag">&lt;/<span class="hljs-name">ng-template</span>&gt;</span>\n    Content2\n  <span class="hljs-tag">&lt;/<span class="hljs-name">vcl-tab</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">vcl-tab</span> [<span class="hljs-attr">disabled</span>]=<span class="hljs-string">&quot;true&quot;</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">ng-template</span> <span class="hljs-attr">vcl-tab-label</span>&gt;</span>Tab3 (disabled)<span class="hljs-tag">&lt;/<span class="hljs-name">ng-template</span>&gt;</span>\n    Content3\n  <span class="hljs-tag">&lt;/<span class="hljs-name">vcl-tab</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">vcl-tab-nav</span>&gt;</span>\n</pre>\n<h3 id="api">API</h3>\n<h4 id="vcl-tab-nav-properties-">vcl-tab-nav Properties:</h4>\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Type</th>\n<th>Default</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td><code>selectedTabIndex</code> <em>(1)</em></td>\n<td>number</td>\n<td>0</td>\n<td>The index of the currently visible tab</td>\n</tr>\n<tr>\n<td><code>borders</code></td>\n<td>boolean</td>\n<td>false</td>\n<td>Enables borders for the tab-nav</td>\n</tr>\n<tr>\n<td><code>layout</code></td>\n<td>string</td>\n<td></td>\n<td>The layout: <code>null</code>, <code>&quot;left&quot;</code> or <code>&quot;right&quot;</code></td>\n</tr>\n<tr>\n<td><code>tabbableClass</code></td>\n<td>string</td>\n<td></td>\n<td>Modifier classes for vclTabbable</td>\n</tr>\n<tr>\n<td><code>tabsClass</code></td>\n<td>string</td>\n<td></td>\n<td>Modifier classes for vclTabs</td>\n</tr>\n<tr>\n<td><code>tabContentClass</code></td>\n<td>string</td>\n<td></td>\n<td>Modifier classes for vclTabContent</td>\n</tr>\n</tbody>\n</table>\n<h4 id="vcl-tab-properties-">vcl-tab Properties:</h4>\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Type</th>\n<th>Default</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td><code>disabled</code></td>\n<td>boolean</td>\n<td>false</td>\n<td>Disables the tab when true   </td>\n</tr>\n<tr>\n<td><code>tabClass</code></td>\n<td>string</td>\n<td></td>\n<td>Modifier classes for vclTab   </td>\n</tr>\n</tbody>\n</table>\n<p><em>(1) Supports Two-way binding</em></p>\n'}});
//# sourceMappingURL=25.map