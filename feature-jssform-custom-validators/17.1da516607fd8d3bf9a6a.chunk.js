(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{207:function(l,n,s){"use strict";s.d(n,"a",function(){return t});var a=s(1),t=function(l){function n(n){return l.call(this,n)||this}return Object(a.c)(n,l),Object.defineProperty(n.prototype,"isConnected",{get:function(){return!!this.wormhole&&this.wormhole.isConnected},enumerable:!0,configurable:!0}),n.prototype.ngOnChanges=function(l){var n="attrs"in l&&l.attrs.currentValue||void 0;if("target"in l){this.clearWormholes();var s=l.target.currentValue;s&&(this.wormhole=this.connectWormhole(s,n))}else n&&this.wormhole&&this.wormhole.setAttributes(n)},n.prototype.ngOnDestroy=function(){this.wormhole&&this.wormhole.disconnect()},n}(s(93).b)},208:function(l,n,s){"use strict";s.d(n,"a",function(){return a});var a=function(){function l(){}return Object.defineProperty(l.prototype,"ariaLabel",{get:function(){return this.title||this.label},enumerable:!0,configurable:!0}),l}()},394:function(l,n,s){"use strict";s.r(n);var a=s(0),t=function(){function l(){this.isBusy=!1,this.isVerticalBusy=!1}return l.prototype.makeBusy=function(){var l=this;this.isBusy=!0,setTimeout(function(){return l.isBusy=!1},3e3)},l.prototype.makeVerticalBusy=function(){var l=this;this.isVerticalBusy=!0,setTimeout(function(){return l.isVerticalBusy=!1},3e3)},l}();var u={demo:function(){return{label:"Busy",tabs:{Demo:t,"README.md":{type:"md",content:s(665)},"demo.component.html":{type:"pre",content:s(666)},"demo.component.ts":{type:"pre",content:s(667)}}}}},c=function(){return function(){}}(),e=s(159),i=s(434),o=s(507),r=s(462),p=s(6),b=s(3),d=s(483),h=a.Cb({encapsulation:2,styles:[],data:{}});function g(l){return a.Xb(0,[(l()(),a.Eb(0,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),a.Vb(1,null,["",""]))],null,function(l,n){l(n,1,0,n.component.busyLabel)})}function y(l){return a.Xb(0,[(l()(),a.Eb(0,0,null,null,5,"div",[["class","vclLoadingLayer"],["tabindex","-1"]],null,null,null,null,null)),(l()(),a.Eb(1,0,null,null,4,"div",[["class","vclLoadingLayerContent"]],null,null,null,null,null)),(l()(),a.Eb(2,0,null,null,3,"vcl-busy-indicator",[],null,null,null,o.b,o.a)),a.Db(3,573440,null,0,r.a,[p.c],{type:[0,"type"],layout:[1,"layout"],label:[2,"label"],iconHeight:[3,"iconHeight"],iconWidth:[4,"iconWidth"]},null),(l()(),a.vb(16777216,null,0,1,null,g)),a.Db(5,16384,null,0,b.l,[a.db,a.Z],{ngIf:[0,"ngIf"]},null)],function(l,n){var s=n.component;l(n,3,0,s.busyIndicatorType,s.busyIndicatorDirection,s.busyLabel,s.busyIconHeight,s.busyIconWidth),l(n,5,0,s.busyLabel)},null)}function m(l){return a.Xb(2,[a.Nb(null,0),(l()(),a.vb(16777216,null,null,1,null,y)),a.Db(2,16384,null,0,b.l,[a.db,a.Z],{ngIf:[0,"ngIf"]},null)],function(l,n){l(n,2,0,n.component.busy)},null)}function I(l){return a.Xb(0,[(l()(),a.Eb(0,0,null,null,1,"div",[["vclBusyIndicatorCover",""]],[[2,"vclLoadingLayerContainer",null]],null,null,m,h)),a.Db(1,49152,null,0,d.a,[],{busy:[0,"busy"]},null)],function(l,n){l(n,1,0,"")},function(l,n){l(n,0,0,a.Ob(n,1).busy)})}d.a;var j=s(440),v=s(94),f=s(208),C=a.Cb({encapsulation:2,styles:[],data:{}});function A(l){return a.Xb(0,[(l()(),a.Eb(0,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),a.Vb(-1,null,["Simple busy indicator"])),(l()(),a.Eb(2,0,null,null,1,"vcl-busy-indicator",[],null,null,null,o.b,o.a)),a.Db(3,573440,null,0,r.a,[p.c],null,null),(l()(),a.Eb(4,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),a.Eb(5,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),a.Eb(6,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),a.Vb(-1,null,["Busy indicator with label and alternative icon"])),(l()(),a.Eb(8,0,null,null,2,"vcl-busy-indicator",[["type","straight"]],null,null,null,o.b,o.a)),a.Db(9,573440,null,0,r.a,[p.c],{type:[0,"type"]},null),(l()(),a.Vb(-1,0,[" Loading...\n"])),(l()(),a.Eb(11,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),a.Eb(12,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),a.Eb(13,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),a.Vb(-1,null,["Horizontal busy indicators"])),(l()(),a.Eb(15,0,null,null,2,"vcl-busy-indicator",[],null,null,null,o.b,o.a)),a.Db(16,573440,null,0,r.a,[p.c],{layout:[0,"layout"]},null),(l()(),a.Vb(-1,0,[" Loading...\n"])),(l()(),a.Eb(18,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),a.Eb(19,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),a.Eb(20,0,null,null,2,"vcl-busy-indicator",[["type","straight"]],null,null,null,o.b,o.a)),a.Db(21,573440,null,0,r.a,[p.c],{type:[0,"type"],layout:[1,"layout"]},null),(l()(),a.Vb(-1,0,[" Loading...\n"])),(l()(),a.Eb(23,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),a.Eb(24,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),a.Eb(25,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),a.Vb(-1,null,["Indicator from icons"])),(l()(),a.Eb(27,0,null,null,2,"vcl-busy-indicator",[["classSrc","fa fa-circle-o-notch fa-spin fa-3x fa-fw"]],null,null,null,o.b,o.a)),a.Db(28,573440,null,0,r.a,[p.c],{classSrc:[0,"classSrc"]},null),(l()(),a.Vb(-1,0,[" Loading...\n"])),(l()(),a.Eb(30,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),a.Eb(31,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),a.Eb(32,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),a.Vb(-1,null,["Indicator from images"])),(l()(),a.Eb(34,0,null,null,2,"vcl-busy-indicator",[["imageSrc","http://www.polidoor.com/assets/img/loading.gif"]],null,null,null,o.b,o.a)),a.Db(35,573440,null,0,r.a,[p.c],{imageSrc:[0,"imageSrc"]},null),(l()(),a.Vb(-1,0,[" Loading...\n"])),(l()(),a.Eb(37,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),a.Eb(38,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),a.Eb(39,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),a.Vb(-1,null,["Busy container"])),(l()(),a.Eb(41,0,null,null,7,"div",[["busyIndicatorType","straight"],["busyLabel","Loading..."],["class","vclContainer vclLayoutHorizontal"],["style","height:15em"]],[[2,"vclLoadingLayerContainer",null]],null,null,m,h)),a.Db(42,49152,null,0,d.a,[],{busy:[0,"busy"],busyIndicatorType:[1,"busyIndicatorType"],busyLabel:[2,"busyLabel"]},null),(l()(),a.Eb(43,0,null,0,5,"div",[["class","vclLayoutFlex"],["style","padding:0.5em"]],null,null,null,null,null)),(l()(),a.Vb(-1,null,[" Busy container"])),(l()(),a.Eb(45,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),a.Eb(46,0,null,null,2,"button",[["label","Make container busy for 3 secs"],["vcl-button",""]],[[2,"vclButton",null],[2,"vclDisabled",null],[1,"disabled",0],[2,"vclHovered",null],[1,"aria-label",0]],[[null,"tap"],[null,"mouseenter"],[null,"mouseleave"]],function(l,n,s){var t=!0,u=l.component;"mouseenter"===n&&(t=!1!==a.Ob(l,47).onMouseEnter(s)&&t);"mouseleave"===n&&(t=!1!==a.Ob(l,47).onMouseLeave(s)&&t);"tap"===n&&(t=!1!==u.makeBusy()&&t);return t},j.b,j.a)),a.Db(47,16384,null,0,v.a,[a.o],null,null),a.Db(48,49152,null,0,f.a,[],{label:[0,"label"]},null),(l()(),a.Eb(49,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),a.Eb(50,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),a.Eb(51,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),a.Vb(-1,null,["Horizontal busy container"])),(l()(),a.Eb(53,0,null,null,7,"div",[["busyIndicatorDirection","horizontal"],["busyIndicatorType","circle"],["busyLabel","Loading..."],["class","vclContainer vclLayoutHorizontal"],["style","height:15em"]],[[2,"vclLoadingLayerContainer",null]],null,null,m,h)),a.Db(54,49152,null,0,d.a,[],{busy:[0,"busy"],busyIndicatorType:[1,"busyIndicatorType"],busyIndicatorDirection:[2,"busyIndicatorDirection"],busyLabel:[3,"busyLabel"]},null),(l()(),a.Eb(55,0,null,0,5,"div",[["class","vclLayoutFlex"],["style","padding:0.5em"]],null,null,null,null,null)),(l()(),a.Vb(-1,null,[" Busy container"])),(l()(),a.Eb(57,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),a.Eb(58,0,null,null,2,"button",[["label","Make container busy for 3 secs"],["vcl-button",""]],[[2,"vclButton",null],[2,"vclDisabled",null],[1,"disabled",0],[2,"vclHovered",null],[1,"aria-label",0]],[[null,"tap"],[null,"mouseenter"],[null,"mouseleave"]],function(l,n,s){var t=!0,u=l.component;"mouseenter"===n&&(t=!1!==a.Ob(l,59).onMouseEnter(s)&&t);"mouseleave"===n&&(t=!1!==a.Ob(l,59).onMouseLeave(s)&&t);"tap"===n&&(t=!1!==u.makeVerticalBusy()&&t);return t},j.b,j.a)),a.Db(59,16384,null,0,v.a,[a.o],null,null),a.Db(60,49152,null,0,f.a,[],{label:[0,"label"]},null)],function(l,n){var s=n.component;l(n,9,0,"straight");l(n,16,0,"horizontal");l(n,21,0,"straight","horizontal");l(n,28,0,"fa fa-circle-o-notch fa-spin fa-3x fa-fw");l(n,35,0,"http://www.polidoor.com/assets/img/loading.gif");l(n,42,0,s.isBusy,"straight","Loading...");l(n,48,0,"Make container busy for 3 secs");l(n,54,0,s.isVerticalBusy,"circle","horizontal","Loading...");l(n,60,0,"Make container busy for 3 secs")},function(l,n){l(n,41,0,a.Ob(n,42).busy);l(n,46,0,!0,a.Ob(n,47).isDisabled,a.Ob(n,47).isDisabled,a.Ob(n,47).hovered,a.Ob(n,48).ariaLabel),l(n,53,0,a.Ob(n,54).busy);l(n,58,0,!0,a.Ob(n,59).isDisabled,a.Ob(n,59).isDisabled,a.Ob(n,59).hovered,a.Ob(n,60).ariaLabel)})}function Z(l){return a.Xb(0,[(l()(),a.Eb(0,0,null,null,1,"ng-component",[],null,null,null,A,C)),a.Db(1,49152,null,0,t,[],null,null)],null,null)}var D=a.Ab("ng-component",t,Z,{},{},[]),J=s(22),T=s(83),w=s(436),L=s(435),M=s(128),x=s(23),S=s(129),E=s(130),N=s(523),k=s(4),H=s(431);s.d(n,"BusyDemoModuleNgFactory",function(){return B});var B=a.Bb(c,[],function(l){return a.Lb([a.Mb(512,a.l,a.qb,[[8,[e.a,i.a,D]],[3,a.l],a.F]),a.Mb(4608,b.n,b.m,[a.B,[2,b.y]]),a.Mb(5120,J.b,function(){return[new J.a]},[]),a.Mb(1073742336,b.c,b.c,[]),a.Mb(1073742336,T.a,T.a,[]),a.Mb(1073742336,w.a,w.a,[]),a.Mb(1073742336,L.a,L.a,[]),a.Mb(1073742336,M.a,M.a,[]),a.Mb(1073742336,x.c,x.c,[]),a.Mb(1073742336,S.a,S.a,[]),a.Mb(1073742336,E.a,E.a,[]),a.Mb(1073742336,N.a,N.a,[]),a.Mb(1073742336,k.m,k.m,[[2,k.s],[2,k.l]]),a.Mb(1073742336,c,c,[]),a.Mb(1024,k.j,function(){return[[{path:"",component:H.a,data:u}]]},[])])})},431:function(l,n,s){"use strict";s.d(n,"a",function(){return a});var a=function(){function l(l,n){this.activatedRoute=l,this.sanitizer=n,this.tabs=[]}return l.prototype.ngOnInit=function(){var l=this,n=this.activatedRoute.snapshot.data.demo();n?(this.title=n.label,n.tabs?this.tabs=Object.keys(n.tabs).map(function(s){var a,t;return"object"==typeof n.tabs[s]&&n.tabs[s]?t="pre"===(a=n.tabs[s].type)||"html"===a||"md"===a?l.sanitizer.bypassSecurityTrustHtml(n.tabs[s].content):n.tabs[s].content:"function"==typeof n.tabs[s]&&(a="component",t=n.tabs[s]),{name:s,content:t,type:a}}):this.tabs=[]):(this.title="ng-vcl",this.tabs=[])},l}()},432:function(l,n,s){"use strict";s.d(n,"b",function(){return a}),s.d(n,"a",function(){return t});var a=function(){return function(){}}(),t=function(){return function(){this.disabled=!1,this.tabClass=""}}()},433:function(l,n,s){"use strict";s.d(n,"a",function(){return c});var a=s(93),t=s(0),u=s(432),c=function(){function l(){this.layout="",this.tabbableClass="",this.tabsClass="",this.tabContentClass="",this.hideContent=!1,this.borders=!1,this.selectedTabIndex=0,this.selectedTabIndexChange$=new t.q}return Object.defineProperty(l.prototype,"tabContent",{set:function(l){l&&(this.wormholeHost=new a.b(l))},enumerable:!0,configurable:!0}),Object.defineProperty(l.prototype,"selectedTabIndexChange",{get:function(){return this.selectedTabIndexChange$.asObservable()},enumerable:!0,configurable:!0}),l.prototype.selectTab=function(l){if(this.tabs){var n,s,a=this.tabs.toArray();l instanceof u.a?(n=a.indexOf(l),s=l):"number"==typeof l&&a[l]?s=a[n=l]:(n=-1,s=null),n>=0&&s instanceof u.a&&!s.disabled&&(this.wormholeHost&&(this.wormholeHost.clearWormholes(),this.wormholeHost.connectWormhole(s.content)),this.selectedTabIndex=n)}},l.prototype.onTabClick=function(l){this.selectTab(l),this.selectedTabIndexChange$.emit(this.selectedTabIndex)},l.prototype.ngAfterContentInit=function(){this.selectTab(this.selectedTabIndex)},l.prototype.ngOnDestroy=function(){this.wormholeHost&&this.wormholeHost.clearWormholes()},l}()},434:function(l,n,s){"use strict";s.d(n,"a",function(){return Z});var a=s(0),t=s(207),u=s(437),c=s(432),e=s(3),i=s(438),o=s(433),r=s(431),p=s(4),b=s(6),d=a.Cb({encapsulation:2,styles:[],data:{}});function h(l){return a.Xb(0,[(l()(),a.Vb(0,null,["",""]))],null,function(l,n){l(n,0,0,n.parent.context.$implicit.name)})}function g(l){return a.Xb(0,[(l()(),a.Eb(0,16777216,null,null,1,"wormhole",[],null,null,null,null,null)),a.Db(1,671744,null,0,t.a,[a.db],{target:[0,"target"]},null),(l()(),a.vb(0,null,null,0))],function(l,n){l(n,1,0,n.parent.context.$implicit.content)},null)}function y(l){return a.Xb(0,[(l()(),a.Eb(0,0,null,null,2,"div",[],null,null,null,null,null)),(l()(),a.Eb(1,0,null,null,1,"pre",[],null,null,null,null,null)),(l()(),a.Vb(2,null,["",""]))],null,function(l,n){l(n,2,0,n.parent.context.$implicit.content)})}function m(l){return a.Xb(0,[(l()(),a.Eb(0,0,null,null,0,"div",[],[[8,"innerHTML",1]],null,null,null,null))],null,function(l,n){l(n,0,0,n.parent.context.$implicit.content)})}function I(l){return a.Xb(0,[(l()(),a.Eb(0,0,null,null,0,"div",[["class","markdown-body"]],[[8,"innerHTML",1]],null,null,null,null))],null,function(l,n){l(n,0,0,n.parent.context.$implicit.content)})}function j(l){return a.Xb(0,[(l()(),a.Eb(0,0,null,null,0,"pre",[],[[8,"innerHTML",1]],null,null,null,null))],null,function(l,n){l(n,0,0,n.parent.context.$implicit.content)})}function v(l){return a.Xb(0,[(l()(),a.Eb(0,0,null,null,14,"vcl-tab",[],null,null,null,u.b,u.a)),a.Db(1,49152,[[1,4]],1,c.a,[],null,null),a.Tb(335544320,2,{label:0}),(l()(),a.vb(0,[[2,2]],0,1,null,h)),a.Db(4,16384,null,0,c.b,[],null,null),(l()(),a.vb(16777216,null,0,1,null,g)),a.Db(6,16384,null,0,e.l,[a.db,a.Z],{ngIf:[0,"ngIf"]},null),(l()(),a.vb(16777216,null,0,1,null,y)),a.Db(8,16384,null,0,e.l,[a.db,a.Z],{ngIf:[0,"ngIf"]},null),(l()(),a.vb(16777216,null,0,1,null,m)),a.Db(10,16384,null,0,e.l,[a.db,a.Z],{ngIf:[0,"ngIf"]},null),(l()(),a.vb(16777216,null,0,1,null,I)),a.Db(12,16384,null,0,e.l,[a.db,a.Z],{ngIf:[0,"ngIf"]},null),(l()(),a.vb(16777216,null,0,1,null,j)),a.Db(14,16384,null,0,e.l,[a.db,a.Z],{ngIf:[0,"ngIf"]},null)],function(l,n){l(n,6,0,"component"===n.context.$implicit.type),l(n,8,0,"text"===n.context.$implicit.type),l(n,10,0,"html"===n.context.$implicit.type),l(n,12,0,"md"===n.context.$implicit.type),l(n,14,0,"pre"===n.context.$implicit.type)},null)}function f(l){return a.Xb(0,[(l()(),a.Eb(0,0,null,null,5,"div",[],null,null,null,null,null)),(l()(),a.Eb(1,0,null,null,4,"vcl-tab-nav",[["borders","true"]],null,null,null,i.b,i.a)),a.Db(2,1228800,null,1,o.a,[],{borders:[0,"borders"]},null),a.Tb(603979776,1,{tabs:1}),(l()(),a.vb(16777216,null,0,1,null,v)),a.Db(5,278528,null,0,e.k,[a.db,a.Z,a.z],{ngForOf:[0,"ngForOf"]},null)],function(l,n){var s=n.component;l(n,2,0,"true"),l(n,5,0,s.tabs)},null)}function C(l){return a.Xb(0,[(l()(),a.Eb(0,0,null,null,1,"h2",[["class","vclArticleHeader"]],null,null,null,null,null)),(l()(),a.Vb(1,null,[" ",""])),(l()(),a.vb(16777216,null,null,1,null,f)),a.Db(3,16384,null,0,e.l,[a.db,a.Z],{ngIf:[0,"ngIf"]},null)],function(l,n){l(n,3,0,n.component.tabs.length>0)},function(l,n){l(n,1,0,n.component.title)})}function A(l){return a.Xb(0,[(l()(),a.Eb(0,0,null,null,1,"ng-component",[],null,null,null,C,d)),a.Db(1,114688,null,0,r.a,[p.a,b.c],null,null)],function(l,n){l(n,1,0)},null)}var Z=a.Ab("ng-component",r.a,A,{},{},[])},435:function(l,n,s){"use strict";s.d(n,"a",function(){return a});s(431);var a=function(){return function(){}}()},436:function(l,n,s){"use strict";s.d(n,"a",function(){return a});var a=function(){return function(){}}()},437:function(l,n,s){"use strict";s.d(n,"a",function(){return u}),s.d(n,"b",function(){return e});var a=s(0),t=s(432),u=a.Cb({encapsulation:2,styles:[],data:{}});function c(l){return a.Xb(0,[a.Nb(null,0),(l()(),a.vb(0,null,null,0))],null,null)}function e(l){return a.Xb(0,[a.Tb(402653184,1,{content:0}),(l()(),a.vb(0,[[1,2]],null,0,null,c))],null,null)}function i(l){return a.Xb(0,[(l()(),a.Eb(0,0,null,null,2,"vcl-tab",[],null,null,null,e,u)),a.Db(1,49152,null,1,t.a,[],null,null),a.Tb(335544320,1,{label:0})],null,null)}t.a},438:function(l,n,s){"use strict";s.d(n,"a",function(){return e}),s.d(n,"b",function(){return o});var a=s(0),t=s(207),u=s(3),c=s(433),e=a.Cb({encapsulation:2,styles:[],data:{}});function i(l){return a.Xb(0,[(l()(),a.Eb(0,0,null,null,3,"div",[["role","tab"]],[[8,"className",0],[2,"vclDisabled",null],[2,"vclSelected",null],[2,"aria-selected",null]],[[null,"click"]],function(l,n,s){var a=!0,t=l.component;"click"===n&&(a=!1!==t.onTabClick(l.context.$implicit)&&a);return a},null,null)),(l()(),a.Eb(1,0,null,null,2,"span",[["class","vclTabLabel"]],null,null,null,null,null)),(l()(),a.Eb(2,16777216,null,null,1,"wormhole",[],null,null,null,null,null)),a.Db(3,671744,null,0,t.a,[a.db],{target:[0,"target"]},null)],function(l,n){l(n,3,0,n.context.$implicit.label)},function(l,n){var s=n.component;l(n,0,0,a.Gb(1,"vclTab ",n.context.$implicit.tabClass,""),n.context.$implicit.disabled,s.selectedTabIndex===n.context.index,s.selectedTabIndex===n.context.index)})}function o(l){return a.Xb(0,[a.Tb(402653184,1,{tabContent:0}),(l()(),a.Eb(1,0,null,null,8,"div",[],[[8,"className",0],[2,"vclTabsLeft",null],[2,"vclTabsRight",null]],null,null,null,null)),(l()(),a.Eb(2,0,null,null,2,"div",[["role","tablist"]],[[8,"className",0],[2,"vclTabStyleUni",null]],null,null,null,null)),(l()(),a.vb(16777216,null,null,1,null,i)),a.Db(4,278528,null,0,u.k,[a.db,a.Z,a.z],{ngForOf:[0,"ngForOf"]},null),(l()(),a.Eb(5,0,null,null,4,"div",[],[[4,"display",null],[8,"className",0],[2,"vclNoBorder",null]],null,null,null,null)),(l()(),a.Eb(6,0,null,null,1,"div",[["class","vclTabPanel"],["role","tabpanel"]],null,null,null,null,null)),(l()(),a.Eb(7,16777216,[[1,3],["tabContent",1]],null,0,"div",[],null,null,null,null,null)),(l()(),a.Eb(8,0,null,null,1,"div",[["class","vclTabPanel"],["role","tabpanel"]],null,null,null,null,null)),a.Nb(null,0)],function(l,n){l(n,4,0,n.component.tabs)},function(l,n){var s=n.component;l(n,1,0,a.Gb(1,"vclTabbable ",s.tabbableClass,""),"left"===s.layout,"right"===s.layout),l(n,2,0,a.Gb(1,"vclTabs ",s.tabsClass,""),!!s.borders),l(n,5,0,!0===s.hideContent?"none":null,a.Gb(1,"vclTabContent ",s.tabContentClass,""),!s.borders)})}function r(l){return a.Xb(0,[(l()(),a.Eb(0,0,null,null,2,"vcl-tab-nav",[],null,null,null,o,e)),a.Db(1,1228800,null,1,c.a,[],null,null),a.Tb(603979776,1,{tabs:1})],null,null)}c.a},440:function(l,n,s){"use strict";s.d(n,"a",function(){return e}),s.d(n,"b",function(){return i});var a=s(0),t=s(73),u=s(32),c=s(208),e=a.Cb({encapsulation:2,styles:[],data:{}});function i(l){return a.Xb(2,[(l()(),a.Eb(0,0,null,null,2,"span",[["vcl-icogram",""]],[[2,"vclIcogram",null],[1,"role",0]],null,null,t.d,t.b)),a.Db(1,49152,null,0,u.b,[],{label:[0,"label"],prepIcon:[1,"prepIcon"],appIcon:[2,"appIcon"],prepIconSrc:[3,"prepIconSrc"],appIconSrc:[4,"appIconSrc"]},null),a.Nb(1,0)],function(l,n){var s=n.component;l(n,1,0,s.label,s.prepIcon,s.appIcon,s.prepIconSrc,s.appIconSrc)},function(l,n){l(n,0,0,!0,"img")})}function o(l){return a.Xb(0,[(l()(),a.Eb(0,0,null,null,1,"button",[["label",""],["vcl-button",""]],[[1,"aria-label",0]],null,null,i,e)),a.Db(1,49152,null,0,c.a,[],{label:[0,"label"]},null)],function(l,n){l(n,1,0,"")},function(l,n){l(n,0,0,a.Ob(n,1).ariaLabel)})}c.a},462:function(l,n,s){"use strict";s.d(n,"a",function(){return t});var a="data:image/svg+xml;charset=utf-8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/Pgo8IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iCiAgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgdmVyc2lvbj0iMS4xIgogICAgIHZpZXdCb3g9IjAgMCAxMDAgMTAwIgogICAgIHByZXNlcnZlQXNwZWN0UmF0aW89InhNaWRZTWlkIgoJd2lkdGg9IjEwMCUiCiAgICAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogICAgIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4KCTxnPgoJICAgIDxkZWZzPgoJICAgIAk8Y2xpcFBhdGggaWQ9ImNsaXAiPgoJICAgICAgCQk8cGF0aCAgZD0iTSA1MCA1MCBMIDM1IDAgTCA2NSAwIHoiIC8+CgkJICAgIDwvY2xpcFBhdGg+CgkgICAgCTxlbGxpcHNlIGlkPSJDaXJjbGVCbG9jayIgY2xpcC1wYXRoPSJ1cmwoI2NsaXApIiBjeD0iNTAiIGN5PSI1MCIgcng9IjQwIiByeT0iNDAiIHN0eWxlPSJmaWxsOm5vbmU7IHN0cm9rZTojRThFOEU4IiBzdHJva2Utd2lkdGg9IjE1Ii8+CgkgICAgPC9kZWZzPgoKCQk8dXNlIHhsaW5rOmhyZWY9IiNDaXJjbGVCbG9jayIgLz4KCQk8dXNlIHhsaW5rOmhyZWY9IiNDaXJjbGVCbG9jayIgdHJhbnNmb3JtPSJyb3RhdGUoNDAgNTAgNTApIiAvPgoJCTx1c2UgeGxpbms6aHJlZj0iI0NpcmNsZUJsb2NrIiB0cmFuc2Zvcm09InJvdGF0ZSg4MCA1MCA1MCkiIC8+CgkJPHVzZSB4bGluazpocmVmPSIjQ2lyY2xlQmxvY2siIHRyYW5zZm9ybT0icm90YXRlKDEyMCA1MCA1MCkiLz4KCQk8dXNlIHhsaW5rOmhyZWY9IiNDaXJjbGVCbG9jayIgdHJhbnNmb3JtPSJyb3RhdGUoMTYwIDUwIDUwKSIvPgoJCTx1c2UgeGxpbms6aHJlZj0iI0NpcmNsZUJsb2NrIiB0cmFuc2Zvcm09InJvdGF0ZSgyMDAgNTAgNTApIi8+CgkJPHVzZSB4bGluazpocmVmPSIjQ2lyY2xlQmxvY2siIHRyYW5zZm9ybT0icm90YXRlKDI0MCA1MCA1MCkiLz4KCQk8dXNlIHhsaW5rOmhyZWY9IiNDaXJjbGVCbG9jayIgdHJhbnNmb3JtPSJyb3RhdGUoMjgwIDUwIDUwKSIvPgoJCTx1c2UgeGxpbms6aHJlZj0iI0NpcmNsZUJsb2NrIiB0cmFuc2Zvcm09InJvdGF0ZSgzMjAgNTAgNTApIi8+CgoJCTxlbGxpcHNlIGNsaXAtcGF0aD0idXJsKCNjbGlwKSIgY3g9IjUwIiBjeT0iNTAiIHJ4PSI0MCIgcnk9IjQwIiBzdHlsZT0iZmlsbDpub25lOyBzdHJva2U6IzAwMDAwMCIgc3Ryb2tlLXdpZHRoPSIxNSI+CgkJCTxhbmltYXRlVHJhbnNmb3JtCgkJCQlhdHRyaWJ1dGVOYW1lPSJ0cmFuc2Zvcm0iCgkJCQlhdHRyaWJ1dGVUeXBlPSJYTUwiCgkJCQl0eXBlPSJyb3RhdGUiCgkJCQl2YWx1ZXM9IjAgNTAgNTA7IDQwIDUwIDUwOyA4MCA1MCA1MDsgMTIwIDUwIDUwOyAxNjAgNTAgNTA7IDIwMCA1MCA1MDsgMjQwIDUwIDUwOyAyODAgNTAgNTA7IDMyMCA1MCA1MCIKCQkJCWR1cj0iM3MiCgkJCQlyZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIKCQkJCWFkZGl0aXZlPSJyZXBsYWNlIgoJCQkJY2FsY01vZGU9ImRpc2NyZXRlIgoJCQkJZmlsbD0iZnJlZXplIi8+CgkJPC9lbGxpcHNlPgoJPC9nPgo8L3N2Zz4=",t=function(){function l(l){this.sanitizer=l,this.type="circular",this.layout="vertical",this.label="Loading",this.iconHeight="3em",this.iconWidth="3em",this.indicatorSrc=this.sanitizer.bypassSecurityTrustResourceUrl(a)}return l.prototype.ngOnChanges=function(l){(l.imageSrc||l.type)&&(this.imageSrc?this.indicatorSrc=this.imageSrc:this.indicatorSrc=this.sanitizer.bypassSecurityTrustResourceUrl("straight"===this.type?"data:image/svg+xml;charset=utf-8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/Pgo8IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iCiAgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgdmVyc2lvbj0iMS4xIgogICAgIHZpZXdCb3g9IjAgMCA5MCA2MCIKICAgICBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJ4TWlkWU1pZCIKCSB3aWR0aD0iMTAwJSIKCSBoZWlnaHQ9IjEyMCUiCiAgICAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogICAgIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4KICAgICA8Zz4KCSAgICA8cmVjdAoJICAgIAlzdHJva2Utd2lkdGg9IjAiCgkgICAgCXN0cm9rZT0iI2ZmZiIKCSAgICAJZmlsbD0ibm9uZSIKCSAgICAJaGVpZ2h0PSIzMCIKCSAgICAJd2lkdGg9IjkwIgoJICAgIAl4PSIwIiB5PSIxNSI+PC9yZWN0PgoJICAgIDxkZWZzPgoJCQk8cmVjdCBjbGFzcz0idGVzdCIgZmlsbD0iI0U4RThFOCIgaWQ9IlJlY3QiIHg9IjAiIHk9IjE1IiBoZWlnaHQ9IjMwIiB3aWR0aD0iMTUiPjwvcmVjdD4KCSAgICA8L2RlZnM+CgoJCTx1c2UgeGxpbms6aHJlZj0iI1JlY3QiIC8+CgkJPHVzZSB4bGluazpocmVmPSIjUmVjdCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjUpIiAvPgoJCTx1c2UgeGxpbms6aHJlZj0iI1JlY3QiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDUwKSIgLz4KCQk8dXNlIHhsaW5rOmhyZWY9IiNSZWN0IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg3NSkiIC8+CgoJCTxyZWN0IGZpbGw9IiMwMDAiIHg9IjUiIHk9IjE1IiBoZWlnaHQ9IjMwIiB3aWR0aD0iMTUiPgoJCQk8YW5pbWF0ZQoJCQkJZmlsbD0iZnJlZXplIgoJCQkJZHVyPSIxNTAwbXMiCgkJCQljYWxjTW9kZT0iZGlzY3JldGUiCgkJCQlyZXN0YXJ0PSJhbHdheXMiCgkJCQl2YWx1ZXM9IjA7MjU7NTA7NzUiCgkJCQlyZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIKCQkJCWF0dHJpYnV0ZU5hbWU9IngiLz4KCSAgICA8L3JlY3Q+Cgk8L2c+Cjwvc3ZnPgo=":a))},l}()},483:function(l,n,s){"use strict";s.d(n,"a",function(){return a});var a=function(){return function(){this.busy=!1,this.busyIndicatorType="circular",this.busyIndicatorDirection="vertical",this.busyIconHeight="3em",this.busyIconWidth="3em"}}()},507:function(l,n,s){"use strict";s.d(n,"a",function(){return e}),s.d(n,"b",function(){return o});var a=s(0),t=s(3),u=s(462),c=s(6),e=a.Cb({encapsulation:2,styles:[],data:{}});function i(l){return a.Xb(0,[(l()(),a.Eb(0,0,null,null,0,"img",[["role","”presentation”"]],[[4,"height",null],[4,"width",null],[8,"src",4]],null,null,null,null))],null,function(l,n){var s=n.component;l(n,0,0,s.iconHeight,s.iconWidth,s.indicatorSrc)})}function o(l){return a.Xb(0,[(l()(),a.Eb(0,0,null,null,5,"div",[["role","status"]],[[8,"className",0]],null,null,null,null)),(l()(),a.Eb(1,0,null,null,2,"div",[["role","img"]],[[8,"className",0],[1,"aria-label",0]],null,null,null,null)),(l()(),a.vb(16777216,null,null,1,null,i)),a.Db(3,16384,null,0,t.l,[a.db,a.Z],{ngIf:[0,"ngIf"]},null),(l()(),a.Eb(4,0,null,null,1,"div",[["class","vclLayoutSelfCenter"]],null,null,null,null,null)),a.Nb(null,0)],function(l,n){l(n,3,0,!n.component.classSrc)},function(l,n){var s=n.component;l(n,0,0,a.Gb(1,"vclLayoutCenterJustified vclIcogram ","vertical"==s.layout?"vclLayoutVertical":"vclLayoutHorizontal","")),l(n,1,0,a.Gb(1,"vclIcon vclLayoutSelfCenter ",s.classSrc,""),s.label)})}function r(l){return a.Xb(0,[(l()(),a.Eb(0,0,null,null,1,"vcl-busy-indicator",[],null,null,null,o,e)),a.Db(1,573440,null,0,u.a,[c.c],null,null)],null,null)}u.a},523:function(l,n,s){"use strict";s.d(n,"a",function(){return a});var a=function(){return function(){}}()},665:function(l,n){l.exports='<h1 id="vclbusyindicator">vclBusyIndicator</h1>\n<h2 id="vcl-busy-indicator">vcl-busy-indicator</h2>\n<p>An indicator to show that a lasting operation is currently in progress.</p>\n<h3 id="usage">Usage</h3>\n<pre class="hljs"><span class="hljs-tag">&lt;<span class="hljs-name">vcl-busy-indicator</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;straight&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">span</span>&gt;</span>Loading&#x2026;<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">vcl-busy-indicator</span>&gt;</span></pre>\n<h3 id="api">API</h3>\n<h4 id="vclbusy-attributes">vclBusy Attributes</h4>\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Type</th>\n<th>Default</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody><tr>\n<td><code>type</code></td>\n<td>&quot;circular&quot; or &quot;straight&quot;</td>\n<td>&quot;circular&quot;</td>\n<td>The indicator type</td>\n</tr>\n<tr>\n<td><code>label</code></td>\n<td>string</td>\n<td>&quot;Loading&quot;</td>\n<td>icon aria label</td>\n</tr>\n<tr>\n<td><code>iconHeight</code></td>\n<td>string</td>\n<td>&quot;3em&quot;</td>\n<td>icon height</td>\n</tr>\n<tr>\n<td><code>iconWidth</code></td>\n<td>string</td>\n<td>&quot;3em&quot;</td>\n<td>icon width</td>\n</tr>\n<tr>\n<td><code>direction</code></td>\n<td>&quot;vertical&quot; or &quot;horizontal&quot;</td>\n<td>&quot;vertical&quot;</td>\n<td>The indicator direction</td>\n</tr>\n</tbody></table>\n<h2 id="vclbusy">vclBusy</h2>\n<p>Covers an element with a layer showing the vcl-busy-indicator to indicate a busy state and prevent user interaction.</p>\n<h3 id="usage">Usage</h3>\n<pre class="hljs"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> [<span class="hljs-attr">vclBusy</span>]=<span class="hljs-string">&quot;true&quot;</span> [<span class="hljs-attr">busyLabel</span>]=<span class="hljs-string">&quot;&apos;Loading&#x2026;&apos;&quot;</span> [<span class="hljs-attr">busyIndicatorType</span>]=<span class="hljs-string">&quot;&quot;</span>&gt;</span>\n    This content will be covered by the layer\n<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></pre>\n<h3 id="api">API</h3>\n<h4 id="vclbusy-attributes">vclBusy Attributes</h4>\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Type</th>\n<th>Default</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody><tr>\n<td><code>vclBusy</code></td>\n<td>boolean</td>\n<td>false</td>\n<td>Shows the layer when <code>true</code></td>\n</tr>\n<tr>\n<td><code>busyIndicatorType</code></td>\n<td>&quot;circular&quot; or &quot;straight&quot;</td>\n<td>&quot;circular&quot;</td>\n<td>The indicator type</td>\n</tr>\n<tr>\n<td><code>busyLabel</code></td>\n<td>string</td>\n<td></td>\n<td>Optional - The busy layers label</td>\n</tr>\n<tr>\n<td><code>busyIconHeight</code></td>\n<td>string</td>\n<td>&quot;3em&quot;</td>\n<td>icon height</td>\n</tr>\n<tr>\n<td><code>busyIconWidth</code></td>\n<td>string</td>\n<td>&quot;3em&quot;</td>\n<td>icon width</td>\n</tr>\n<tr>\n<td><code>busyIndicatorDirection</code></td>\n<td>&quot;vertical&quot; or &quot;horizontal&quot;</td>\n<td>&quot;vertical&quot;</td>\n<td>The indicator direction</td>\n</tr>\n</tbody></table>\n'},666:function(l,n){l.exports='<span class="hljs-tag">&lt;<span class="hljs-name">h3</span>&gt;</span>Simple busy indicator<span class="hljs-tag">&lt;/<span class="hljs-name">h3</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">vcl-busy-indicator</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vcl-busy-indicator</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">h3</span>&gt;</span>Busy indicator with label and alternative icon<span class="hljs-tag">&lt;/<span class="hljs-name">h3</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">vcl-busy-indicator</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"straight"</span>&gt;</span>\n  Loading...\n<span class="hljs-tag">&lt;/<span class="hljs-name">vcl-busy-indicator</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">h3</span>&gt;</span>Horizontal busy indicators<span class="hljs-tag">&lt;/<span class="hljs-name">h3</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">vcl-busy-indicator</span> [<span class="hljs-attr">layout</span>]=<span class="hljs-string">"\'horizontal\'"</span>&gt;</span>\n  Loading...\n<span class="hljs-tag">&lt;/<span class="hljs-name">vcl-busy-indicator</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">vcl-busy-indicator</span> [<span class="hljs-attr">layout</span>]=<span class="hljs-string">"\'horizontal\'"</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"straight"</span>&gt;</span>\n  Loading...\n<span class="hljs-tag">&lt;/<span class="hljs-name">vcl-busy-indicator</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">h3</span>&gt;</span>Indicator from icons<span class="hljs-tag">&lt;/<span class="hljs-name">h3</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">vcl-busy-indicator</span> <span class="hljs-attr">classSrc</span>=<span class="hljs-string">"fa fa-circle-o-notch fa-spin fa-3x fa-fw"</span>&gt;</span>\n  Loading...\n<span class="hljs-tag">&lt;/<span class="hljs-name">vcl-busy-indicator</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">h3</span>&gt;</span>Indicator from images<span class="hljs-tag">&lt;/<span class="hljs-name">h3</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">vcl-busy-indicator</span> <span class="hljs-attr">imageSrc</span>=<span class="hljs-string">"http://www.polidoor.com/assets/img/loading.gif"</span>&gt;</span>\n  Loading...\n<span class="hljs-tag">&lt;/<span class="hljs-name">vcl-busy-indicator</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">h3</span>&gt;</span>Busy container<span class="hljs-tag">&lt;/<span class="hljs-name">h3</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"vclContainer vclLayoutHorizontal"</span> <span class="hljs-attr">style</span>=<span class="hljs-string">"height:15em"</span> [<span class="hljs-attr">vclBusyIndicatorCover</span>]=<span class="hljs-string">"isBusy"</span> <span class="hljs-attr">busyLabel</span>=<span class="hljs-string">"Loading..."</span> <span class="hljs-attr">busyIndicatorType</span>=<span class="hljs-string">"straight"</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">style</span>=<span class="hljs-string">"padding:0.5em"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"vclLayoutFlex"</span>&gt;</span>\n    Busy container<span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">vcl-button</span> (<span class="hljs-attr">tap</span>)=<span class="hljs-string">"makeBusy()"</span> <span class="hljs-attr">label</span>=<span class="hljs-string">"Make container busy for 3 secs"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">h3</span>&gt;</span>Horizontal busy container<span class="hljs-tag">&lt;/<span class="hljs-name">h3</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"vclContainer vclLayoutHorizontal"</span> <span class="hljs-attr">style</span>=<span class="hljs-string">"height:15em"</span> [<span class="hljs-attr">vclBusyIndicatorCover</span>]=<span class="hljs-string">"isVerticalBusy"</span> <span class="hljs-attr">busyLabel</span>=<span class="hljs-string">"Loading..."</span> <span class="hljs-attr">busyIndicatorType</span>=<span class="hljs-string">"circle"</span> <span class="hljs-attr">busyIndicatorDirection</span>=<span class="hljs-string">"horizontal"</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">style</span>=<span class="hljs-string">"padding:0.5em"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"vclLayoutFlex"</span>&gt;</span>\n    Busy container<span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">vcl-button</span> (<span class="hljs-attr">tap</span>)=<span class="hljs-string">"makeVerticalBusy()"</span> <span class="hljs-attr">label</span>=<span class="hljs-string">"Make container busy for 3 secs"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n'},667:function(l,n){l.exports='<span class="hljs-keyword">import</span> { Component } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/core\'</span>;\n\n<span class="hljs-meta">@Component</span>({\n  templateUrl: <span class="hljs-string">\'demo.component.html\'</span>\n})\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> BusyDemoComponent {\n  isBusy = <span class="hljs-literal">false</span>;\n  makeBusy() {\n    <span class="hljs-keyword">this</span>.isBusy = <span class="hljs-literal">true</span>;\n    setTimeout(<span class="hljs-function"><span class="hljs-params">()</span> =&gt;</span> <span class="hljs-keyword">this</span>.isBusy = <span class="hljs-literal">false</span>, <span class="hljs-number">3000</span>);\n  }\n  isVerticalBusy = <span class="hljs-literal">false</span>;\n  makeVerticalBusy() {\n    <span class="hljs-keyword">this</span>.isVerticalBusy = <span class="hljs-literal">true</span>;\n    setTimeout(<span class="hljs-function"><span class="hljs-params">()</span> =&gt;</span> <span class="hljs-keyword">this</span>.isVerticalBusy = <span class="hljs-literal">false</span>, <span class="hljs-number">3000</span>);\n  }\n}\n'}}]);