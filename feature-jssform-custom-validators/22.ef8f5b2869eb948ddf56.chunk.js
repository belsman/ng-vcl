(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{207:function(n,l,t){"use strict";t.d(l,"a",function(){return a});var s=t(1),a=function(n){function l(l){return n.call(this,l)||this}return Object(s.c)(l,n),Object.defineProperty(l.prototype,"isConnected",{get:function(){return!!this.wormhole&&this.wormhole.isConnected},enumerable:!0,configurable:!0}),l.prototype.ngOnChanges=function(n){var l="attrs"in n&&n.attrs.currentValue||void 0;if("target"in n){this.clearWormholes();var t=n.target.currentValue;t&&(this.wormhole=this.connectWormhole(t,l))}else l&&this.wormhole&&this.wormhole.setAttributes(l)},l.prototype.ngOnDestroy=function(){this.wormhole&&this.wormhole.disconnect()},l}(t(93).b)},208:function(n,l,t){"use strict";t.d(l,"a",function(){return s});var s=function(){function n(){}return Object.defineProperty(n.prototype,"ariaLabel",{get:function(){return this.title||this.label},enumerable:!0,configurable:!0}),n}()},416:function(n,l,t){"use strict";t.r(l);var s=t(0),a=function(){return function(){this.style={border:"3px double red",padding:"20px",overflow:"hidden"}}}();var e={demo:function(){return{label:"Popover",tabs:{Demo:a,"README.md":{type:"md",content:t(644)},"demo.component.html":{type:"pre",content:t(645)},"demo.component.ts":{type:"pre",content:t(646)}}}}},o=function(){return function(){}}(),u=t(159),r=t(434),c=t(440),i=t(94),p=t(208),b=t(466),d=t(160),h=t(5),f=s.Cb({encapsulation:2,styles:[],data:{}});function v(n){return s.Xb(0,[(n()(),s.Eb(0,0,null,null,5,"div",[["style","min-height:500px; width: 100%;"]],null,null,null,null,null)),(n()(),s.Eb(1,0,null,null,2,"button",[["label","toggle popover"],["vcl-button",""]],[[2,"vclButton",null],[2,"vclDisabled",null],[1,"disabled",0],[2,"vclHovered",null],[1,"aria-label",0]],[[null,"tap"],[null,"mouseenter"],[null,"mouseleave"]],function(n,l,t){var a=!0;"mouseenter"===l&&(a=!1!==s.Ob(n,2).onMouseEnter(t)&&a);"mouseleave"===l&&(a=!1!==s.Ob(n,2).onMouseLeave(t)&&a);"tap"===l&&(a=!1!==s.Ob(n,7).toggle()&&a);return a},c.b,c.a)),s.Db(2,16384,null,0,i.a,[s.o],null,null),s.Db(3,49152,null,0,p.a,[],{label:[0,"label"]},null),(n()(),s.Eb(4,0,[["target",1]],null,1,"div",[["style","position: absolute; top: 300px; left: 200px; padding: 10px; border: 3px double green"]],null,null,null,null,null)),(n()(),s.Vb(-1,null,[" this is the target "])),(n()(),s.Eb(6,0,null,null,10,"vcl-popover",[],[[8,"style",2],[4,"position",null],[2,"vclPopOver",null],[2,"vclLayoutHidden",null],[4,"visibility",null],[4,"transform",null]],[[null,"willClose"],["window","resize"]],function(n,l,t){var a=!0;"window:resize"===l&&(a=!1!==s.Ob(n,7).onWindowResize(t)&&a);"willClose"===l&&(a=!1!==s.Ob(n,18).close()&&a);return a},b.b,b.a)),s.Db(7,4964352,[["popover1",4]],0,d.d,[s.o,h.b,s.i,[2,d.c]],{target:[0,"target"]},{willClose:"willClose"}),(n()(),s.Eb(8,0,[["target2",1]],0,8,"div",[],null,null,null,null,null)),(n()(),s.Vb(-1,null,[" popover text goes here "])),(n()(),s.Eb(10,0,null,null,0,"br",[],null,null,null,null,null)),(n()(),s.Eb(11,0,null,null,2,"button",[["label","show popover2"],["vcl-button",""]],[[2,"vclButton",null],[2,"vclDisabled",null],[1,"disabled",0],[2,"vclHovered",null],[1,"aria-label",0]],[[null,"tap"],[null,"mouseenter"],[null,"mouseleave"]],function(n,l,t){var a=!0;"mouseenter"===l&&(a=!1!==s.Ob(n,12).onMouseEnter(t)&&a);"mouseleave"===l&&(a=!1!==s.Ob(n,12).onMouseLeave(t)&&a);"tap"===l&&(a=!1!==s.Ob(n,18).open()&&a);return a},c.b,c.a)),s.Db(12,16384,null,0,i.a,[s.o],null,null),s.Db(13,49152,null,0,p.a,[],{label:[0,"label"]},null),(n()(),s.Eb(14,0,null,null,2,"button",[["label","close popover"],["vcl-button",""]],[[2,"vclButton",null],[2,"vclDisabled",null],[1,"disabled",0],[2,"vclHovered",null],[1,"aria-label",0]],[[null,"tap"],[null,"mouseenter"],[null,"mouseleave"]],function(n,l,t){var a=!0;"mouseenter"===l&&(a=!1!==s.Ob(n,15).onMouseEnter(t)&&a);"mouseleave"===l&&(a=!1!==s.Ob(n,15).onMouseLeave(t)&&a);"tap"===l&&(a=!1!==s.Ob(n,7).close()&&a);return a},c.b,c.a)),s.Db(15,16384,null,0,i.a,[s.o],null,null),s.Db(16,49152,null,0,p.a,[],{label:[0,"label"]},null),(n()(),s.Eb(17,0,null,null,3,"vcl-popover",[["attachmentX","left"],["attachmentY","top"],["targetX","right"],["targetY","top"]],[[4,"position",null],[2,"vclPopOver",null],[2,"vclLayoutHidden",null],[4,"visibility",null],[4,"transform",null]],[["window","resize"]],function(n,l,t){var a=!0;"window:resize"===l&&(a=!1!==s.Ob(n,18).onWindowResize(t)&&a);return a},b.b,b.a)),s.Db(18,4964352,[["popover2",4]],0,d.d,[s.o,h.b,s.i,[2,d.c]],{target:[0,"target"],targetX:[1,"targetX"],attachmentX:[2,"attachmentX"],targetY:[3,"targetY"],attachmentY:[4,"attachmentY"]},null),(n()(),s.Vb(-1,0,[" popover 2 text goes here "])),(n()(),s.Eb(20,0,null,0,0,"br",[],null,null,null,null,null))],function(n,l){n(l,3,0,"toggle popover"),n(l,7,0,s.Ob(l,4));n(l,13,0,"show popover2");n(l,16,0,"close popover");n(l,18,0,s.Ob(l,8),"right","left","top","top")},function(n,l){var t=l.component;n(l,1,0,!0,s.Ob(l,2).isDisabled,s.Ob(l,2).isDisabled,s.Ob(l,2).hovered,s.Ob(l,3).ariaLabel);n(l,6,0,t.style,"absolute",s.Ob(l,7).enableStyling,s.Ob(l,7).classHidden,s.Ob(l,7).styleVisibility,s.Ob(l,7).transform);n(l,11,0,!0,s.Ob(l,12).isDisabled,s.Ob(l,12).isDisabled,s.Ob(l,12).hovered,s.Ob(l,13).ariaLabel);n(l,14,0,!0,s.Ob(l,15).isDisabled,s.Ob(l,15).isDisabled,s.Ob(l,15).hovered,s.Ob(l,16).ariaLabel);n(l,17,0,"absolute",s.Ob(l,18).enableStyling,s.Ob(l,18).classHidden,s.Ob(l,18).styleVisibility,s.Ob(l,18).transform)})}function g(n){return s.Xb(0,[(n()(),s.Eb(0,0,null,null,1,"ng-component",[],null,null,null,v,f)),s.Db(1,49152,null,0,a,[],null,null)],null,null)}var m=s.Ab("ng-component",a,g,{},{},[]),j=t(3),y=t(22),w=t(83),O=t(436),x=t(435),D=t(451),E=t(452),C=t(128),T=t(23),X=t(129),I=t(130),M=t(4),A=t(431);t.d(l,"PopoverDemoModuleNgFactory",function(){return H});var H=s.Bb(o,[],function(n){return s.Lb([s.Mb(512,s.l,s.qb,[[8,[u.a,r.a,m]],[3,s.l],s.F]),s.Mb(4608,j.n,j.m,[s.B,[2,j.y]]),s.Mb(5120,y.b,function(){return[new y.a]},[]),s.Mb(1073742336,j.c,j.c,[]),s.Mb(1073742336,w.a,w.a,[]),s.Mb(1073742336,O.a,O.a,[]),s.Mb(1073742336,x.a,x.a,[]),s.Mb(1073742336,D.a,D.a,[]),s.Mb(1073742336,E.a,E.a,[]),s.Mb(1073742336,C.a,C.a,[]),s.Mb(1073742336,T.c,T.c,[]),s.Mb(1073742336,X.a,X.a,[]),s.Mb(1073742336,I.a,I.a,[]),s.Mb(1073742336,M.m,M.m,[[2,M.s],[2,M.l]]),s.Mb(1073742336,o,o,[]),s.Mb(1024,M.j,function(){return[[{path:"",component:A.a,data:e}]]},[])])})},431:function(n,l,t){"use strict";t.d(l,"a",function(){return s});var s=function(){function n(n,l){this.activatedRoute=n,this.sanitizer=l,this.tabs=[]}return n.prototype.ngOnInit=function(){var n=this,l=this.activatedRoute.snapshot.data.demo();l?(this.title=l.label,l.tabs?this.tabs=Object.keys(l.tabs).map(function(t){var s,a;return"object"==typeof l.tabs[t]&&l.tabs[t]?a="pre"===(s=l.tabs[t].type)||"html"===s||"md"===s?n.sanitizer.bypassSecurityTrustHtml(l.tabs[t].content):l.tabs[t].content:"function"==typeof l.tabs[t]&&(s="component",a=l.tabs[t]),{name:t,content:a,type:s}}):this.tabs=[]):(this.title="ng-vcl",this.tabs=[])},n}()},432:function(n,l,t){"use strict";t.d(l,"b",function(){return s}),t.d(l,"a",function(){return a});var s=function(){return function(){}}(),a=function(){return function(){this.disabled=!1,this.tabClass=""}}()},433:function(n,l,t){"use strict";t.d(l,"a",function(){return o});var s=t(93),a=t(0),e=t(432),o=function(){function n(){this.layout="",this.tabbableClass="",this.tabsClass="",this.tabContentClass="",this.hideContent=!1,this.borders=!1,this.selectedTabIndex=0,this.selectedTabIndexChange$=new a.q}return Object.defineProperty(n.prototype,"tabContent",{set:function(n){n&&(this.wormholeHost=new s.b(n))},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"selectedTabIndexChange",{get:function(){return this.selectedTabIndexChange$.asObservable()},enumerable:!0,configurable:!0}),n.prototype.selectTab=function(n){if(this.tabs){var l,t,s=this.tabs.toArray();n instanceof e.a?(l=s.indexOf(n),t=n):"number"==typeof n&&s[n]?t=s[l=n]:(l=-1,t=null),l>=0&&t instanceof e.a&&!t.disabled&&(this.wormholeHost&&(this.wormholeHost.clearWormholes(),this.wormholeHost.connectWormhole(t.content)),this.selectedTabIndex=l)}},n.prototype.onTabClick=function(n){this.selectTab(n),this.selectedTabIndexChange$.emit(this.selectedTabIndex)},n.prototype.ngAfterContentInit=function(){this.selectTab(this.selectedTabIndex)},n.prototype.ngOnDestroy=function(){this.wormholeHost&&this.wormholeHost.clearWormholes()},n}()},434:function(n,l,t){"use strict";t.d(l,"a",function(){return D});var s=t(0),a=t(207),e=t(437),o=t(432),u=t(3),r=t(438),c=t(433),i=t(431),p=t(4),b=t(6),d=s.Cb({encapsulation:2,styles:[],data:{}});function h(n){return s.Xb(0,[(n()(),s.Vb(0,null,["",""]))],null,function(n,l){n(l,0,0,l.parent.context.$implicit.name)})}function f(n){return s.Xb(0,[(n()(),s.Eb(0,16777216,null,null,1,"wormhole",[],null,null,null,null,null)),s.Db(1,671744,null,0,a.a,[s.db],{target:[0,"target"]},null),(n()(),s.vb(0,null,null,0))],function(n,l){n(l,1,0,l.parent.context.$implicit.content)},null)}function v(n){return s.Xb(0,[(n()(),s.Eb(0,0,null,null,2,"div",[],null,null,null,null,null)),(n()(),s.Eb(1,0,null,null,1,"pre",[],null,null,null,null,null)),(n()(),s.Vb(2,null,["",""]))],null,function(n,l){n(l,2,0,l.parent.context.$implicit.content)})}function g(n){return s.Xb(0,[(n()(),s.Eb(0,0,null,null,0,"div",[],[[8,"innerHTML",1]],null,null,null,null))],null,function(n,l){n(l,0,0,l.parent.context.$implicit.content)})}function m(n){return s.Xb(0,[(n()(),s.Eb(0,0,null,null,0,"div",[["class","markdown-body"]],[[8,"innerHTML",1]],null,null,null,null))],null,function(n,l){n(l,0,0,l.parent.context.$implicit.content)})}function j(n){return s.Xb(0,[(n()(),s.Eb(0,0,null,null,0,"pre",[],[[8,"innerHTML",1]],null,null,null,null))],null,function(n,l){n(l,0,0,l.parent.context.$implicit.content)})}function y(n){return s.Xb(0,[(n()(),s.Eb(0,0,null,null,14,"vcl-tab",[],null,null,null,e.b,e.a)),s.Db(1,49152,[[1,4]],1,o.a,[],null,null),s.Tb(335544320,2,{label:0}),(n()(),s.vb(0,[[2,2]],0,1,null,h)),s.Db(4,16384,null,0,o.b,[],null,null),(n()(),s.vb(16777216,null,0,1,null,f)),s.Db(6,16384,null,0,u.l,[s.db,s.Z],{ngIf:[0,"ngIf"]},null),(n()(),s.vb(16777216,null,0,1,null,v)),s.Db(8,16384,null,0,u.l,[s.db,s.Z],{ngIf:[0,"ngIf"]},null),(n()(),s.vb(16777216,null,0,1,null,g)),s.Db(10,16384,null,0,u.l,[s.db,s.Z],{ngIf:[0,"ngIf"]},null),(n()(),s.vb(16777216,null,0,1,null,m)),s.Db(12,16384,null,0,u.l,[s.db,s.Z],{ngIf:[0,"ngIf"]},null),(n()(),s.vb(16777216,null,0,1,null,j)),s.Db(14,16384,null,0,u.l,[s.db,s.Z],{ngIf:[0,"ngIf"]},null)],function(n,l){n(l,6,0,"component"===l.context.$implicit.type),n(l,8,0,"text"===l.context.$implicit.type),n(l,10,0,"html"===l.context.$implicit.type),n(l,12,0,"md"===l.context.$implicit.type),n(l,14,0,"pre"===l.context.$implicit.type)},null)}function w(n){return s.Xb(0,[(n()(),s.Eb(0,0,null,null,5,"div",[],null,null,null,null,null)),(n()(),s.Eb(1,0,null,null,4,"vcl-tab-nav",[["borders","true"]],null,null,null,r.b,r.a)),s.Db(2,1228800,null,1,c.a,[],{borders:[0,"borders"]},null),s.Tb(603979776,1,{tabs:1}),(n()(),s.vb(16777216,null,0,1,null,y)),s.Db(5,278528,null,0,u.k,[s.db,s.Z,s.z],{ngForOf:[0,"ngForOf"]},null)],function(n,l){var t=l.component;n(l,2,0,"true"),n(l,5,0,t.tabs)},null)}function O(n){return s.Xb(0,[(n()(),s.Eb(0,0,null,null,1,"h2",[["class","vclArticleHeader"]],null,null,null,null,null)),(n()(),s.Vb(1,null,[" ",""])),(n()(),s.vb(16777216,null,null,1,null,w)),s.Db(3,16384,null,0,u.l,[s.db,s.Z],{ngIf:[0,"ngIf"]},null)],function(n,l){n(l,3,0,l.component.tabs.length>0)},function(n,l){n(l,1,0,l.component.title)})}function x(n){return s.Xb(0,[(n()(),s.Eb(0,0,null,null,1,"ng-component",[],null,null,null,O,d)),s.Db(1,114688,null,0,i.a,[p.a,b.c],null,null)],function(n,l){n(l,1,0)},null)}var D=s.Ab("ng-component",i.a,x,{},{},[])},435:function(n,l,t){"use strict";t.d(l,"a",function(){return s});t(431);var s=function(){return function(){}}()},436:function(n,l,t){"use strict";t.d(l,"a",function(){return s});var s=function(){return function(){}}()},437:function(n,l,t){"use strict";t.d(l,"a",function(){return e}),t.d(l,"b",function(){return u});var s=t(0),a=t(432),e=s.Cb({encapsulation:2,styles:[],data:{}});function o(n){return s.Xb(0,[s.Nb(null,0),(n()(),s.vb(0,null,null,0))],null,null)}function u(n){return s.Xb(0,[s.Tb(402653184,1,{content:0}),(n()(),s.vb(0,[[1,2]],null,0,null,o))],null,null)}function r(n){return s.Xb(0,[(n()(),s.Eb(0,0,null,null,2,"vcl-tab",[],null,null,null,u,e)),s.Db(1,49152,null,1,a.a,[],null,null),s.Tb(335544320,1,{label:0})],null,null)}a.a},438:function(n,l,t){"use strict";t.d(l,"a",function(){return u}),t.d(l,"b",function(){return c});var s=t(0),a=t(207),e=t(3),o=t(433),u=s.Cb({encapsulation:2,styles:[],data:{}});function r(n){return s.Xb(0,[(n()(),s.Eb(0,0,null,null,3,"div",[["role","tab"]],[[8,"className",0],[2,"vclDisabled",null],[2,"vclSelected",null],[2,"aria-selected",null]],[[null,"click"]],function(n,l,t){var s=!0,a=n.component;"click"===l&&(s=!1!==a.onTabClick(n.context.$implicit)&&s);return s},null,null)),(n()(),s.Eb(1,0,null,null,2,"span",[["class","vclTabLabel"]],null,null,null,null,null)),(n()(),s.Eb(2,16777216,null,null,1,"wormhole",[],null,null,null,null,null)),s.Db(3,671744,null,0,a.a,[s.db],{target:[0,"target"]},null)],function(n,l){n(l,3,0,l.context.$implicit.label)},function(n,l){var t=l.component;n(l,0,0,s.Gb(1,"vclTab ",l.context.$implicit.tabClass,""),l.context.$implicit.disabled,t.selectedTabIndex===l.context.index,t.selectedTabIndex===l.context.index)})}function c(n){return s.Xb(0,[s.Tb(402653184,1,{tabContent:0}),(n()(),s.Eb(1,0,null,null,8,"div",[],[[8,"className",0],[2,"vclTabsLeft",null],[2,"vclTabsRight",null]],null,null,null,null)),(n()(),s.Eb(2,0,null,null,2,"div",[["role","tablist"]],[[8,"className",0],[2,"vclTabStyleUni",null]],null,null,null,null)),(n()(),s.vb(16777216,null,null,1,null,r)),s.Db(4,278528,null,0,e.k,[s.db,s.Z,s.z],{ngForOf:[0,"ngForOf"]},null),(n()(),s.Eb(5,0,null,null,4,"div",[],[[4,"display",null],[8,"className",0],[2,"vclNoBorder",null]],null,null,null,null)),(n()(),s.Eb(6,0,null,null,1,"div",[["class","vclTabPanel"],["role","tabpanel"]],null,null,null,null,null)),(n()(),s.Eb(7,16777216,[[1,3],["tabContent",1]],null,0,"div",[],null,null,null,null,null)),(n()(),s.Eb(8,0,null,null,1,"div",[["class","vclTabPanel"],["role","tabpanel"]],null,null,null,null,null)),s.Nb(null,0)],function(n,l){n(l,4,0,l.component.tabs)},function(n,l){var t=l.component;n(l,1,0,s.Gb(1,"vclTabbable ",t.tabbableClass,""),"left"===t.layout,"right"===t.layout),n(l,2,0,s.Gb(1,"vclTabs ",t.tabsClass,""),!!t.borders),n(l,5,0,!0===t.hideContent?"none":null,s.Gb(1,"vclTabContent ",t.tabContentClass,""),!t.borders)})}function i(n){return s.Xb(0,[(n()(),s.Eb(0,0,null,null,2,"vcl-tab-nav",[],null,null,null,c,u)),s.Db(1,1228800,null,1,o.a,[],null,null),s.Tb(603979776,1,{tabs:1})],null,null)}o.a},440:function(n,l,t){"use strict";t.d(l,"a",function(){return u}),t.d(l,"b",function(){return r});var s=t(0),a=t(73),e=t(32),o=t(208),u=s.Cb({encapsulation:2,styles:[],data:{}});function r(n){return s.Xb(2,[(n()(),s.Eb(0,0,null,null,2,"span",[["vcl-icogram",""]],[[2,"vclIcogram",null],[1,"role",0]],null,null,a.d,a.b)),s.Db(1,49152,null,0,e.b,[],{label:[0,"label"],prepIcon:[1,"prepIcon"],appIcon:[2,"appIcon"],prepIconSrc:[3,"prepIconSrc"],appIconSrc:[4,"appIconSrc"]},null),s.Nb(1,0)],function(n,l){var t=l.component;n(l,1,0,t.label,t.prepIcon,t.appIcon,t.prepIconSrc,t.appIconSrc)},function(n,l){n(l,0,0,!0,"img")})}function c(n){return s.Xb(0,[(n()(),s.Eb(0,0,null,null,1,"button",[["label",""],["vcl-button",""]],[[1,"aria-label",0]],null,null,r,u)),s.Db(1,49152,null,0,o.a,[],{label:[0,"label"]},null)],function(n,l){n(l,1,0,"")},function(n,l){n(l,0,0,s.Ob(l,1).ariaLabel)})}o.a},451:function(n,l,t){"use strict";t.d(l,"a",function(){return s});var s=function(){return function(){}}()},452:function(n,l,t){"use strict";t.d(l,"a",function(){return s});var s=function(){return function(){}}()},466:function(n,l,t){"use strict";t.d(l,"a",function(){return o}),t.d(l,"b",function(){return u});var s=t(0),a=t(160),e=t(5),o=s.Cb({encapsulation:2,styles:[],data:{}});function u(n){return s.Xb(2,[s.Nb(null,0)],null,null)}function r(n){return s.Xb(0,[(n()(),s.Eb(0,0,null,null,1,"vcl-popover",[],[[4,"position",null],[2,"vclPopOver",null],[2,"vclLayoutHidden",null],[4,"visibility",null],[4,"transform",null]],[["window","resize"]],function(n,l,t){var a=!0;"window:resize"===l&&(a=!1!==s.Ob(n,1).onWindowResize(t)&&a);return a},u,o)),s.Db(1,4964352,null,0,a.d,[s.o,e.b,s.i,[2,a.c]],null,null)],function(n,l){n(l,1,0)},function(n,l){n(l,0,0,"absolute",s.Ob(l,1).enableStyling,s.Ob(l,1).classHidden,s.Ob(l,1).styleVisibility,s.Ob(l,1).transform)})}a.d},644:function(n,l){n.exports='<h1 id="vcl-popover">vcl-popover</h1>\n<p>A popover is a dom-element which &apos;floats&apos; at the position of the target element.</p>\n<h2 id="usage">Usage</h2>\n<pre class="hljs"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> #<span class="hljs-attr">myTarget</span>&gt;</span>any dom-element which is the target<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">vcl-popover</span> [<span class="hljs-attr">target</span>]=<span class="hljs-string">&quot;myTarget&quot;</span> [(<span class="hljs-attr">open</span>)]=<span class="hljs-string">&quot;true&quot;</span> <span class="hljs-attr">targetX</span>=<span class="hljs-string">&quot;right&quot;</span> <span class="hljs-attr">attachmentX</span>=<span class="hljs-string">&quot;left&quot;</span> <span class="hljs-attr">targetY</span>=<span class="hljs-string">&quot;top&quot;</span> <span class="hljs-attr">attachmentY</span>=<span class="hljs-string">&quot;top&quot;</span>&gt;</span>\n  Popover-Content\n<span class="hljs-tag">&lt;/<span class="hljs-name">vcl-popover</span>&gt;</span></pre>\n<h3 id="api">API</h3>\n<h4 id="attributes">Attributes</h4>\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Type</th>\n<th>Default</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody><tr>\n<td><code>debug</code></td>\n<td>boolean</td>\n<td>false</td>\n<td>output debug information</td>\n</tr>\n<tr>\n<td><code>visible</code> <em>(1)</em></td>\n<td>boolean</td>\n<td>true</td>\n<td>the popover is hidden if false</td>\n</tr>\n<tr>\n<td><code>target</code></td>\n<td>string  ElementRef  Element</td>\n<td></td>\n<td>the target can be a selector, element or ElementRef instance</td>\n</tr>\n<tr>\n<td><code>targetX</code></td>\n<td>AttachmentX</td>\n<td>AttachmentX.Left</td>\n<td>position of the target-side</td>\n</tr>\n<tr>\n<td><code>attachmentX</code></td>\n<td>AttachmentX</td>\n<td>AttachmentX.Left</td>\n<td>position of the popover-side</td>\n</tr>\n<tr>\n<td><code>offsetAttachmentX</code></td>\n<td>number</td>\n<td>0</td>\n<td>attachmentX offset</td>\n</tr>\n<tr>\n<td><code>targetY</code></td>\n<td>AttachmentY</td>\n<td>AttachmentY.Bottom</td>\n<td>position of the target-vertical</td>\n</tr>\n<tr>\n<td><code>attachmentY</code></td>\n<td>AttachmentY</td>\n<td>AttachmentY.Top</td>\n<td>position of the popover-vertical</td>\n</tr>\n<tr>\n<td><code>offsetAttachmentY</code></td>\n<td>number</td>\n<td>0</td>\n<td>attachmentY offset</td>\n</tr>\n</tbody></table>\n<h4 id="methods">Methods</h4>\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Attributes</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody><tr>\n<td><code>open</code></td>\n<td></td>\n<td>will show the popover</td>\n</tr>\n<tr>\n<td><code>close</code></td>\n<td></td>\n<td>will hide the popover</td>\n</tr>\n<tr>\n<td><code>reposition</code></td>\n<td></td>\n<td>re-positions the popover, use this if the popover changes its content-size</td>\n</tr>\n</tbody></table>\n<p><em>(1) Supports Two-way binding</em></p>\n'},645:function(n,l){n.exports='<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">style</span>=<span class="hljs-string">"min-height:500px; width: 100%;"</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">vcl-button</span> (<span class="hljs-attr">tap</span>)=<span class="hljs-string">"popover1.toggle()"</span> <span class="hljs-attr">label</span>=<span class="hljs-string">"toggle popover"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> #<span class="hljs-attr">target</span> <span class="hljs-attr">style</span>=<span class="hljs-string">"position: absolute; top: 300px; left: 200px; padding: 10px; border: 3px double green"</span>&gt;</span>\n    this is the target\n  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">vcl-popover</span>\n  #<span class="hljs-attr">popover1</span>\n  [<span class="hljs-attr">target</span>]=<span class="hljs-string">"target"</span>\n  [<span class="hljs-attr">style</span>]=<span class="hljs-string">"style"</span>\n  (<span class="hljs-attr">willClose</span>)=<span class="hljs-string">"popover2.close()"</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> #<span class="hljs-attr">target2</span>&gt;</span>\n    popover text goes here <span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">vcl-button</span> (<span class="hljs-attr">tap</span>)=<span class="hljs-string">"popover2.open()"</span> <span class="hljs-attr">label</span>=<span class="hljs-string">"show popover2"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">vcl-button</span> (<span class="hljs-attr">tap</span>)=<span class="hljs-string">"popover1.close();"</span> <span class="hljs-attr">label</span>=<span class="hljs-string">"close popover"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">vcl-popover</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">vcl-popover</span>\n  #<span class="hljs-attr">popover2</span>\n  [<span class="hljs-attr">target</span>]=<span class="hljs-string">"target2"</span>\n  <span class="hljs-attr">targetX</span>=<span class="hljs-string">"right"</span>\n  <span class="hljs-attr">attachmentX</span>=<span class="hljs-string">"left"</span>\n  <span class="hljs-attr">targetY</span>=<span class="hljs-string">"top"</span>\n  <span class="hljs-attr">attachmentY</span>=<span class="hljs-string">"top"</span>&gt;</span>\n  popover 2 text goes here <span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">vcl-popover</span>&gt;</span>\n'},646:function(n,l){n.exports='<span class="hljs-keyword">import</span> { Component } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/core\'</span>;\n\n<span class="hljs-meta">@Component</span>({\n  templateUrl: <span class="hljs-string">\'demo.component.html\'</span>,\n})\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> PopoverDemoComponent {\n  style = {\n    border: <span class="hljs-string">\'3px double red\'</span>,\n    padding: <span class="hljs-string">\'20px\'</span>,\n    overflow: <span class="hljs-string">\'hidden\'</span>\n  };\n}\n'}}]);