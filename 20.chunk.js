webpackJsonp([20],{502:function(n,l,e){"use strict";var t=this&&this.__extends||function(){var n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,l){n.__proto__=l}||function(n,l){for(var e in l)l.hasOwnProperty(e)&&(n[e]=l[e])};return function(l,e){function t(){this.constructor=l}n(l,e),l.prototype=null===e?Object.create(e):(t.prototype=e.prototype,new t)}}();Object.defineProperty(l,"__esModule",{value:!0});var o=e(1),a=e(895),u=e(21),s=e(19),i=e(76),r=e(48),d=e(218),c=e(512),p=e(261),m=e(32),h=e(511),f=e(850),g=e(507),b=function(n){function l(l){return n.call(this,l,[h.DemoComponentNgFactory,f.TextareaDemoComponentNgFactory],[])||this}return t(l,n),Object.defineProperty(l.prototype,"_NgLocalization_10",{get:function(){return null==this.__NgLocalization_10&&(this.__NgLocalization_10=new u.NgLocaleLocalization(this.parent.get(o.LOCALE_ID))),this.__NgLocalization_10},enumerable:!0,configurable:!0}),Object.defineProperty(l.prototype,"_ɵi_11",{get:function(){return null==this.__ɵi_11&&(this.__ɵi_11=new s.ɵi),this.__ɵi_11},enumerable:!0,configurable:!0}),l.prototype.createInternal=function(){return this._CommonModule_0=new u.CommonModule,this._ɵba_1=new s.ɵba,this._FormsModule_2=new s.FormsModule,this._L10nModule_3=new i.L10nModule,this._VCLWormholeModule_4=new r.VCLWormholeModule,this._VCLTabNavModule_5=new d.VCLTabNavModule,this._DemoModule_6=new c.DemoModule,this._VCLTextareaModule_7=new p.VCLTextareaModule,this._RouterModule_8=new m.RouterModule(this.parent.get(m.ɵa,null),this.parent.get(m.Router,null)),this._TextareaDemoModule_9=new a.TextareaDemoModule,this._ROUTES_12=[[{path:"",component:g.DemoComponent,data:{demo:a.demo}}]],this._TextareaDemoModule_9},l.prototype.getInternal=function(n,l){return n===u.CommonModule?this._CommonModule_0:n===s.ɵba?this._ɵba_1:n===s.FormsModule?this._FormsModule_2:n===i.L10nModule?this._L10nModule_3:n===r.VCLWormholeModule?this._VCLWormholeModule_4:n===d.VCLTabNavModule?this._VCLTabNavModule_5:n===c.DemoModule?this._DemoModule_6:n===p.VCLTextareaModule?this._VCLTextareaModule_7:n===m.RouterModule?this._RouterModule_8:n===a.TextareaDemoModule?this._TextareaDemoModule_9:n===u.NgLocalization?this._NgLocalization_10:n===s.ɵi?this._ɵi_11:n===m.ROUTES?this._ROUTES_12:l},l.prototype.destroyInternal=function(){},l}(o.ɵNgModuleInjector);l.TextareaDemoModuleNgFactory=new o.NgModuleFactory(b,a.TextareaDemoModule)},506:function(n,l,e){"use strict";Object.defineProperty(l,"__esModule",{value:!0});var t=function(){function n(){}return n}();l.TabLabelDirective=t;var o=function(){function n(){this.disabled=!1,this.tabClass=""}return n}();l.TabComponent=o},507:function(n,l,e){"use strict";Object.defineProperty(l,"__esModule",{value:!0});var t=e(32),o=e(22),a=function(){function n(n,l){this.activatedRoute=n,this.sanitizer=l,this.tabs=[]}return n.prototype.ngOnInit=function(){var n=this,l=this.activatedRoute.snapshot.data.demo();l?(this.title=l.label,l.tabs?this.tabs=Object.keys(l.tabs).map(function(e){var t,o;return"object"==typeof l.tabs[e]&&l.tabs[e]?(t=l.tabs[e].type,o="pre"===t||"html"===t||"md"===t?n.sanitizer.bypassSecurityTrustHtml(l.tabs[e].content):l.tabs[e].content):"function"==typeof l.tabs[e]&&(t="component",o=l.tabs[e]),{name:e,content:o,type:t}}):this.tabs=[]):(this.title="ng-vcl",this.tabs=[])},n.ctorParameters=function(){return[{type:t.ActivatedRoute},{type:o.DomSanitizer}]},n}();l.DemoComponent=a},508:function(n,l,e){"use strict";Object.defineProperty(l,"__esModule",{value:!0});var t=e(48),o=e(1),a=e(506),u=function(){function n(){this.layout="",this.tabbableClass="",this.tabsClass="",this.tabContentClass="",this.borders=!1,this.selectedTabIndex=0,this.selectedTabIndexChange$=new o.EventEmitter}return Object.defineProperty(n.prototype,"tabContent",{set:function(n){this.wormholeHost=new t.WormholeHost(n)},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"selectedTabIndexChange",{get:function(){return this.selectedTabIndexChange$.asObservable()},enumerable:!0,configurable:!0}),n.prototype.selectTab=function(n){var l,e,t=this.tabs.toArray();n instanceof a.TabComponent?(l=t.indexOf(n),e=n):"number"==typeof n&&t[n]?(l=n,e=t[l]):(l=-1,e=null),l>=0&&e instanceof a.TabComponent&&!e.disabled&&(this.wormholeHost.clearWormholes(),this.selectedTabIndex=l,this.selectedTabIndexChange$.emit(l),this.wormholeHost.connectWormhole(e.content))},n.prototype.ngAfterContentInit=function(){this.selectTab(this.selectedTabIndex)},n.prototype.ngOnDestroy=function(){this.wormholeHost.clearWormholes()},n}();l.TabNavComponent=u},509:function(n,l,e){"use strict";function t(n){return u.ɵvid(0,[(n()(),u.ɵeld(0,null,null,7,"div",[["role","tab"]],[[8,"className",0],[2,"vclDisabled",null],[2,"vclSelected",null],[2,"aria-selected",null]],[[null,"tap"]],function(n,l,e){var t=!0,o=n.component;if("tap"===l){t=!1!==o.selectTab(n.context.$implicit)&&t}return t},null,null)),(n()(),u.ɵted(null,["\n        "])),(n()(),u.ɵeld(0,null,null,4,"span",[["class","vclTabLabel"]],null,null,null,null,null)),(n()(),u.ɵted(null,[" \n          "])),(n()(),u.ɵeld(16777216,null,null,1,"wormhole",[],null,null,null,null,null)),u.ɵdid(671744,null,0,s.WormholeDirective,[u.ViewContainerRef],{target:[0,"target"]},null),(n()(),u.ɵted(null,["\n        "])),(n()(),u.ɵted(null,["\n    "]))],function(n,l){n(l,5,0,l.context.$implicit.label)},function(n,l){var e=l.component;n(l,0,0,u.ɵinlineInterpolate(1,"vclTab ",l.context.$implicit.tabClass,""),l.context.$implicit.disabled,e.selectedTabIndex===l.context.index,e.selectedTabIndex===l.context.index)})}function o(n){return u.ɵvid(0,[u.ɵqud(402653184,1,{tabContent:0}),(n()(),u.ɵeld(0,null,null,20,"div",[],[[8,"className",0],[2,"vclTabsLeft",null],[2,"vclTabsRight",null]],null,null,null,null)),(n()(),u.ɵted(null,["\n  "])),(n()(),u.ɵeld(0,null,null,4,"div",[["role","tablist"]],[[8,"className",0],[2,"vclTabStyleUni",null]],null,null,null,null)),(n()(),u.ɵted(null,["\n    "])),(n()(),u.ɵand(16777216,null,null,1,null,t)),u.ɵdid(802816,null,0,i.NgForOf,[u.ViewContainerRef,u.TemplateRef,u.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(n()(),u.ɵted(null,["\n  "])),(n()(),u.ɵted(null,["\n  "])),(n()(),u.ɵeld(0,null,null,11,"div",[],[[8,"className",0],[2,"vclNoBorder",null]],null,null,null,null)),(n()(),u.ɵted(null,["\n    "])),(n()(),u.ɵeld(0,null,null,3,"div",[["class","vclTabPanel"],["role","tabpanel"]],null,null,null,null,null)),(n()(),u.ɵted(null,["\n      "])),(n()(),u.ɵeld(16777216,[[1,3],["tabContent",1]],null,0,"div",[],null,null,null,null,null)),(n()(),u.ɵted(null,["\n    "])),(n()(),u.ɵted(null,["\n    "])),(n()(),u.ɵeld(0,null,null,3,"div",[["class","vclTabPanel"],["role","tabpanel"]],null,null,null,null,null)),(n()(),u.ɵted(null,["\n      "])),u.ɵncd(null,0),(n()(),u.ɵted(null,["\n    "])),(n()(),u.ɵted(null,["\n  "])),(n()(),u.ɵted(null,["\n"])),(n()(),u.ɵted(null,["\n"]))],function(n,l){n(l,6,0,l.component.tabs)},function(n,l){var e=l.component;n(l,1,0,u.ɵinlineInterpolate(1,"vclTabbable ",e.tabbableClass,""),"left"===e.layout,"right"===e.layout),n(l,3,0,u.ɵinlineInterpolate(1,"vclTabs ",e.tabsClass,""),!!e.borders),n(l,9,0,u.ɵinlineInterpolate(1,"vclTabContent ",e.tabContentClass,""),!e.borders)})}function a(n){return u.ɵvid(0,[(n()(),u.ɵeld(0,null,null,2,"vcl-tab-nav",[],null,null,null,o,l.RenderType_TabNavComponent)),u.ɵdid(1228800,null,1,r.TabNavComponent,[],null,null),u.ɵqud(603979776,1,{tabs:1})],null,null)}Object.defineProperty(l,"__esModule",{value:!0});var u=e(1),s=e(217),i=e(21),r=e(508),d=[];l.RenderType_TabNavComponent=u.ɵcrt({encapsulation:2,styles:d,data:{}}),l.View_TabNavComponent_0=o,l.TabNavComponentNgFactory=u.ɵccf("vcl-tab-nav",r.TabNavComponent,a,{layout:"layout",tabbableClass:"tabbableClass",tabsClass:"tabsClass",tabContentClass:"tabContentClass",borders:"borders",selectedTabIndex:"selectedTabIndex"},{selectedTabIndexChange:"selectedTabIndexChange"},["*"])},510:function(n,l,e){"use strict";function t(n){return u.ɵvid(0,[u.ɵncd(null,0),(n()(),u.ɵand(0,null,null,0))],null,null)}function o(n){return u.ɵvid(0,[u.ɵqud(402653184,1,{content:0}),(n()(),u.ɵand(0,[[1,2]],null,0,null,t))],null,null)}function a(n){return u.ɵvid(0,[(n()(),u.ɵeld(0,null,null,2,"vcl-tab",[],null,null,null,o,l.RenderType_TabComponent)),u.ɵdid(49152,null,1,s.TabComponent,[],null,null),u.ɵqud(335544320,1,{label:0})],null,null)}Object.defineProperty(l,"__esModule",{value:!0});var u=e(1),s=e(506),i=[];l.RenderType_TabComponent=u.ɵcrt({encapsulation:2,styles:i,data:{}}),l.View_TabComponent_0=o,l.TabComponentNgFactory=u.ɵccf("vcl-tab",s.TabComponent,a,{disabled:"disabled",tabClass:"tabClass"},{},["*"])},511:function(n,l,e){"use strict";function t(n){return m.ɵvid(0,[(n()(),m.ɵted(null,["",""]))],null,function(n,l){n(l,0,0,l.parent.context.$implicit.name)})}function o(n){return m.ɵvid(0,[(n()(),m.ɵeld(16777216,null,null,1,"wormhole",[],null,null,null,null,null)),m.ɵdid(671744,null,0,h.WormholeDirective,[m.ViewContainerRef],{target:[0,"target"]},null),(n()(),m.ɵand(0,null,null,0))],function(n,l){n(l,1,0,l.parent.context.$implicit.content)},null)}function a(n){return m.ɵvid(0,[(n()(),m.ɵeld(0,null,null,2,"div",[],null,null,null,null,null)),(n()(),m.ɵeld(0,null,null,1,"pre",[],null,null,null,null,null)),(n()(),m.ɵted(null,["",""]))],null,function(n,l){n(l,2,0,l.parent.context.$implicit.content)})}function u(n){return m.ɵvid(0,[(n()(),m.ɵeld(0,null,null,0,"div",[],[[8,"innerHTML",1]],null,null,null,null))],null,function(n,l){n(l,0,0,l.parent.context.$implicit.content)})}function s(n){return m.ɵvid(0,[(n()(),m.ɵeld(0,null,null,0,"div",[["class","markdown-body"]],[[8,"innerHTML",1]],null,null,null,null))],null,function(n,l){n(l,0,0,l.parent.context.$implicit.content)})}function i(n){return m.ɵvid(0,[(n()(),m.ɵeld(0,null,null,0,"pre",[],[[8,"innerHTML",1]],null,null,null,null))],null,function(n,l){n(l,0,0,l.parent.context.$implicit.content)})}function r(n){return m.ɵvid(0,[(n()(),m.ɵeld(0,null,null,21,"vcl-tab",[],null,null,null,f.View_TabComponent_0,f.RenderType_TabComponent)),m.ɵdid(49152,[[1,4]],1,g.TabComponent,[],null,null),m.ɵqud(335544320,2,{label:0}),(n()(),m.ɵted(0,["\n      "])),(n()(),m.ɵand(0,[[2,2]],0,1,null,t)),m.ɵdid(16384,null,0,g.TabLabelDirective,[],null,null),(n()(),m.ɵted(0,["\n      "])),(n()(),m.ɵand(16777216,null,0,1,null,o)),m.ɵdid(16384,null,0,b.NgIf,[m.ViewContainerRef,m.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),m.ɵted(0,["\n      "])),(n()(),m.ɵand(16777216,null,0,1,null,a)),m.ɵdid(16384,null,0,b.NgIf,[m.ViewContainerRef,m.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),m.ɵted(0,["\n      "])),(n()(),m.ɵand(16777216,null,0,1,null,u)),m.ɵdid(16384,null,0,b.NgIf,[m.ViewContainerRef,m.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),m.ɵted(0,["\n      "])),(n()(),m.ɵand(16777216,null,0,1,null,s)),m.ɵdid(16384,null,0,b.NgIf,[m.ViewContainerRef,m.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),m.ɵted(0,["\n      "])),(n()(),m.ɵand(16777216,null,0,1,null,i)),m.ɵdid(16384,null,0,b.NgIf,[m.ViewContainerRef,m.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),m.ɵted(0,["\n    "]))],function(n,l){n(l,8,0,"component"===l.context.$implicit.type),n(l,11,0,"text"===l.context.$implicit.type),n(l,14,0,"html"===l.context.$implicit.type),n(l,17,0,"md"===l.context.$implicit.type),n(l,20,0,"pre"===l.context.$implicit.type)},null)}function d(n){return m.ɵvid(0,[(n()(),m.ɵeld(0,null,null,9,"div",[],null,null,null,null,null)),(n()(),m.ɵted(null,["\n  "])),(n()(),m.ɵeld(0,null,null,6,"vcl-tab-nav",[["borders","true"]],null,null,null,v.View_TabNavComponent_0,v.RenderType_TabNavComponent)),m.ɵdid(1228800,null,1,_.TabNavComponent,[],{borders:[0,"borders"]},null),m.ɵqud(603979776,1,{tabs:1}),(n()(),m.ɵted(0,["\n    "])),(n()(),m.ɵand(16777216,null,0,1,null,r)),m.ɵdid(802816,null,0,b.NgForOf,[m.ViewContainerRef,m.TemplateRef,m.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(n()(),m.ɵted(0,["\n  "])),(n()(),m.ɵted(null,["\n"]))],function(n,l){var e=l.component;n(l,3,0,"true"),n(l,7,0,e.tabs)},null)}function c(n){return m.ɵvid(0,[(n()(),m.ɵeld(0,null,null,1,"h2",[["class","vclArticleHeader"]],null,null,null,null,null)),(n()(),m.ɵted(null,[" ",""])),(n()(),m.ɵted(null,["\n"])),(n()(),m.ɵand(16777216,null,null,1,null,d)),m.ɵdid(16384,null,0,b.NgIf,[m.ViewContainerRef,m.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),m.ɵted(null,["\n"]))],function(n,l){n(l,4,0,l.component.tabs.length>0)},function(n,l){n(l,1,0,l.component.title)})}function p(n){return m.ɵvid(0,[(n()(),m.ɵeld(0,null,null,1,"ng-component",[],null,null,null,c,l.RenderType_DemoComponent)),m.ɵdid(114688,null,0,C.DemoComponent,[T.ActivatedRoute,y.DomSanitizer],null,null)],function(n,l){n(l,1,0)},null)}Object.defineProperty(l,"__esModule",{value:!0});var m=e(1),h=e(217),f=e(510),g=e(506),b=e(21),v=e(509),_=e(508),C=e(507),T=e(32),y=e(22),w=[];l.RenderType_DemoComponent=m.ɵcrt({encapsulation:2,styles:w,data:{}}),l.View_DemoComponent_0=c,l.DemoComponentNgFactory=m.ɵccf("ng-component",C.DemoComponent,p,{},{},[])},512:function(n,l,e){"use strict";Object.defineProperty(l,"__esModule",{value:!0});var t=e(507);l.DemoComponent=t.DemoComponent;var o=function(){function n(){}return n}();l.DemoModule=o},567:function(n,l,e){"use strict";Object.defineProperty(l,"__esModule",{value:!0});var t=e(1),o=function(){function n(n){this.elRef=n,this.selectAllOnFocus=!1,this.autogrow=!1}return n.prototype.onModelChange=function(n){this.setRowsByValue(n)},n.prototype.onFocus=function(n){this.selectAllOnFocus&&this.elRef&&this.elRef.nativeElement.select()},n.prototype.setRowsByValue=function(n){if(this.autogrow&&"string"==typeof n){var l=n.split("\n").length+1;"number"==typeof this.minRows&&l<this.minRows?this.rows=this.minRows:"number"==typeof this.maxRows&&l>this.maxRows?this.rows=this.maxRows:this.rows=l}},n.ctorParameters=function(){return[{type:t.ElementRef}]},n}();l.TextareaDirective=o},810:function(n,l,e){"use strict";Object.defineProperty(l,"__esModule",{value:!0});var t=function(){function n(){this.data1="line 1\nline 2\nline 3\nline 4\nline 5\nline 6",this.data2="line 1\nline 2\nline 3\nline 4\nline 5\nline 6"}return n}();l.TextareaDemoComponent=t},850:function(n,l,e){"use strict";function t(n){return a.ɵvid(0,[(n()(),a.ɵeld(0,null,null,1,"h3",[],null,null,null,null,null)),(n()(),a.ɵted(null,["Default"])),(n()(),a.ɵted(null,["\n"])),(n()(),a.ɵeld(0,null,null,6,"textarea",[["rows","5"],["vcl-textarea",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null],[2,"vclInput",null],[1,"rows",0]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"],[null,"focus"]],function(n,l,e){var t=!0,o=n.component;if("input"===l){t=!1!==a.ɵnov(n,4)._handleInput(e.target.value)&&t}if("blur"===l){t=!1!==a.ɵnov(n,4).onTouched()&&t}if("compositionstart"===l){t=!1!==a.ɵnov(n,4)._compositionStart()&&t}if("compositionend"===l){t=!1!==a.ɵnov(n,4)._compositionEnd(e.target.value)&&t}if("ngModelChange"===l){t=!1!==a.ɵnov(n,9).onModelChange(e)&&t}if("focus"===l){t=!1!==a.ɵnov(n,9).onFocus(e.target.value)&&t}if("ngModelChange"===l){t=!1!==(o.data1=e)&&t}return t},null,null)),a.ɵdid(16384,null,0,s.DefaultValueAccessor,[a.Renderer,a.ElementRef,[2,s.COMPOSITION_BUFFER_MODE]],null,null),a.ɵprd(1024,null,s.NG_VALUE_ACCESSOR,function(n){return[n]},[s.DefaultValueAccessor]),a.ɵdid(671744,null,0,s.NgModel,[[8,null],[8,null],[8,null],[2,s.NG_VALUE_ACCESSOR]],{model:[0,"model"]},{update:"ngModelChange"}),a.ɵprd(2048,null,s.NgControl,null,[s.NgModel]),a.ɵdid(16384,null,0,s.NgControlStatus,[s.NgControl],null,null),a.ɵdid(16384,null,0,i.TextareaDirective,[a.ElementRef],{rows:[0,"rows"]},null),(n()(),a.ɵted(null,["\n\n\n"])),(n()(),a.ɵeld(0,null,null,1,"h3",[],null,null,null,null,null)),(n()(),a.ɵted(null,["Textarea with autogrow (minRows=5, maxRows=10)"])),(n()(),a.ɵted(null,["\n"])),(n()(),a.ɵeld(0,null,null,6,"textarea",[["vcl-textarea",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null],[2,"vclInput",null],[1,"rows",0]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"],[null,"focus"]],function(n,l,e){var t=!0,o=n.component;if("input"===l){t=!1!==a.ɵnov(n,15)._handleInput(e.target.value)&&t}if("blur"===l){t=!1!==a.ɵnov(n,15).onTouched()&&t}if("compositionstart"===l){t=!1!==a.ɵnov(n,15)._compositionStart()&&t}if("compositionend"===l){t=!1!==a.ɵnov(n,15)._compositionEnd(e.target.value)&&t}if("ngModelChange"===l){t=!1!==a.ɵnov(n,20).onModelChange(e)&&t}if("focus"===l){t=!1!==a.ɵnov(n,20).onFocus(e.target.value)&&t}if("ngModelChange"===l){t=!1!==(o.data2=e)&&t}return t},null,null)),a.ɵdid(16384,null,0,s.DefaultValueAccessor,[a.Renderer,a.ElementRef,[2,s.COMPOSITION_BUFFER_MODE]],null,null),a.ɵprd(1024,null,s.NG_VALUE_ACCESSOR,function(n){return[n]},[s.DefaultValueAccessor]),a.ɵdid(671744,null,0,s.NgModel,[[8,null],[8,null],[8,null],[2,s.NG_VALUE_ACCESSOR]],{model:[0,"model"]},{update:"ngModelChange"}),a.ɵprd(2048,null,s.NgControl,null,[s.NgModel]),a.ɵdid(16384,null,0,s.NgControlStatus,[s.NgControl],null,null),a.ɵdid(16384,null,0,i.TextareaDirective,[a.ElementRef],{autogrow:[0,"autogrow"],maxRows:[1,"maxRows"],minRows:[2,"minRows"]},null),(n()(),a.ɵted(null,["\n"]))],function(n,l){var e=l.component;n(l,6,0,e.data1);n(l,9,0,"5"),n(l,17,0,e.data2);n(l,20,0,!0,10,5)},function(n,l){n(l,3,0,a.ɵnov(l,8).ngClassUntouched,a.ɵnov(l,8).ngClassTouched,a.ɵnov(l,8).ngClassPristine,a.ɵnov(l,8).ngClassDirty,a.ɵnov(l,8).ngClassValid,a.ɵnov(l,8).ngClassInvalid,a.ɵnov(l,8).ngClassPending,!0,a.ɵnov(l,9).rows);n(l,14,0,a.ɵnov(l,19).ngClassUntouched,a.ɵnov(l,19).ngClassTouched,a.ɵnov(l,19).ngClassPristine,a.ɵnov(l,19).ngClassDirty,a.ɵnov(l,19).ngClassValid,a.ɵnov(l,19).ngClassInvalid,a.ɵnov(l,19).ngClassPending,!0,a.ɵnov(l,20).rows)})}function o(n){return a.ɵvid(0,[(n()(),a.ɵeld(0,null,null,1,"ng-component",[],null,null,null,t,l.RenderType_TextareaDemoComponent)),a.ɵdid(49152,null,0,u.TextareaDemoComponent,[],null,null)],null,null)}Object.defineProperty(l,"__esModule",{value:!0});var a=e(1),u=e(810),s=e(19),i=e(567),r=[];l.RenderType_TextareaDemoComponent=a.ɵcrt({encapsulation:2,styles:r,data:{}}),l.View_TextareaDemoComponent_0=t,l.TextareaDemoComponentNgFactory=a.ɵccf("ng-component",u.TextareaDemoComponent,o,{},{},[])},895:function(n,l,e){"use strict";function t(){return{label:"Textarea",tabs:{Demo:o.TextareaDemoComponent,"README.md":{type:"md",content:e(994)},"demo.component.html":{type:"pre",content:e(929)},"demo.component.ts":{type:"pre",content:e(963)}}}}Object.defineProperty(l,"__esModule",{value:!0});var o=e(810);l.demo=t;var a=function(){function n(){}return n}();l.TextareaDemoModule=a},929:function(n,l){n.exports='<span class="hljs-tag">&lt;<span class="hljs-name">h3</span>&gt;</span>Default<span class="hljs-tag">&lt;/<span class="hljs-name">h3</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">textarea</span> <span class="hljs-attr">vcl-textarea</span> [(<span class="hljs-attr">ngModel</span>)]=<span class="hljs-string">"data1"</span> <span class="hljs-attr">rows</span>=<span class="hljs-string">"5"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">textarea</span>&gt;</span>\n\n\n<span class="hljs-tag">&lt;<span class="hljs-name">h3</span>&gt;</span>Textarea with autogrow (minRows=5, maxRows=10)<span class="hljs-tag">&lt;/<span class="hljs-name">h3</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">textarea</span> <span class="hljs-attr">vcl-textarea</span> [(<span class="hljs-attr">ngModel</span>)]=<span class="hljs-string">"data2"</span> [<span class="hljs-attr">autogrow</span>]=<span class="hljs-string">"true"</span> [<span class="hljs-attr">minRows</span>]=<span class="hljs-string">"5"</span> [<span class="hljs-attr">maxRows</span>]=<span class="hljs-string">"10"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">textarea</span>&gt;</span>\n'},963:function(n,l){n.exports='\n<span class="hljs-keyword">import</span> { Component } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/core\'</span>;\n\n<span class="hljs-meta">@Component</span>({\n  templateUrl: <span class="hljs-string">\'demo.component.html\'</span>\n})\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> TextareaDemoComponent {\n\n  data1 =\n  <span class="hljs-string">`line 1\nline 2\nline 3\nline 4\nline 5\nline 6`</span>;\n\n  data2 =\n  <span class="hljs-string">`line 1\nline 2\nline 3\nline 4\nline 5\nline 6`</span>;\n\n\n}\n'},994:function(n,l){n.exports='<h1 id="vcl-textarea">vcl-textarea</h1>\n<p>Enhanced textarea</p>\n<h2 id="usage-">Usage:</h2>\n<pre class="hljs"><span class="hljs-tag">&lt;<span class="hljs-name">textarea</span> <span class="hljs-attr">vcl-textarea</span> [(<span class="hljs-attr">ngModel</span>)]=<span class="hljs-string">&quot;data1&quot;</span> [<span class="hljs-attr">autogrow</span>]=<span class="hljs-string">&quot;true&quot;</span> [<span class="hljs-attr">minRows</span>]=<span class="hljs-string">&quot;5&quot;</span> [<span class="hljs-attr">maxRows</span>]=<span class="hljs-string">&quot;10&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">textarea</span>&gt;</span>\n</pre>\n<h3 id="api">API</h3>\n<h4 id="properties-">Properties:</h4>\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Type</th>\n<th>Default</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td><code>autogrow</code></td>\n<td>boolean</td>\n<td>false</td>\n<td>Adjusts the <code>rows</code> attribute so it matches the current values number of lines   </td>\n</tr>\n<tr>\n<td><code>minRows</code></td>\n<td>number</td>\n<td></td>\n<td>The min value for <code>rows</code> when using autogrow   </td>\n</tr>\n<tr>\n<td><code>maxRows</code></td>\n<td>number</td>\n<td></td>\n<td>The max value for <code>rows</code> when using autogrow   </td>\n</tr>\n</tbody>\n</table>\n'}});
//# sourceMappingURL=20.map