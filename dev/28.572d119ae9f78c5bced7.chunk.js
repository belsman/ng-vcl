(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{196:function(n,t,l){"use strict";l.d(t,"a",function(){return a});var e=l(25),s=function(){var n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,t){n.__proto__=t}||function(n,t){for(var l in t)t.hasOwnProperty(l)&&(n[l]=t[l])};return function(t,l){function e(){this.constructor=t}n(t,l),t.prototype=null===l?Object.create(l):(e.prototype=l.prototype,new e)}}(),a=function(n){function t(t){return n.call(this,t)||this}return s(t,n),Object.defineProperty(t.prototype,"isConnected",{get:function(){return!!this.wormhole&&this.wormhole.isConnected},enumerable:!0,configurable:!0}),t.prototype.ngOnChanges=function(n){var t="attrs"in n&&n.attrs.currentValue||void 0;if("target"in n){this.clearWormholes();var l=n.target.currentValue;l&&(this.wormhole=this.connectWormhole(l,t))}else t&&this.wormhole&&this.wormhole.setAttributes(t)},t.prototype.ngOnDestroy=function(){this.wormhole&&this.wormhole.disconnect()},t}(e.b)},396:function(n,t,l){"use strict";l.r(t);var e=l(0),s=function(){function n(){}return n.prototype.onRemove=function(n){console.log("onRemove",n)},n.prototype.onListChange=function(n){console.log("onListChange",n)},n.prototype.onInputChange=function(n){console.log("onInputChange",n)},n}();var a={demo:function(){return{label:"Token",tabs:{Demo:s,"README.md":{type:"md",content:l(583)},"demo.component.html":{type:"pre",content:l(584)},"demo.component.ts":{type:"pre",content:l(585)}}}}},o=function(){return function(){}}(),u=l(151),c=l(423),i=l(458),r=l(436),p=l(508),b=l(42),d=l(449),h=l(469),f=l(433),v=l(428),g=e.Cb({encapsulation:2,styles:[],data:{}});function m(n){return e.Xb(0,[(n()(),e.Eb(0,0,null,null,1,"h3",[],null,null,null,null,null)),(n()(),e.Vb(-1,null,["single tokens"])),(n()(),e.Eb(2,0,null,null,1,"vcl-token",[["label","my token"]],[[2,"vclToken",null],[2,"vclSelected",null],[2,"vclDisabled",null]],[[null,"tap"]],function(n,t,l){var s=!0;"tap"===t&&(s=!1!==e.Ob(n,3).onTap(l)&&s);return s},i.b,i.a)),e.Db(3,49152,null,0,r.a,[e.i],{label:[0,"label"]},null),(n()(),e.Eb(4,0,null,null,1,"vcl-token",[["label","my selected token"]],[[2,"vclToken",null],[2,"vclSelected",null],[2,"vclDisabled",null]],[[null,"tap"]],function(n,t,l){var s=!0;"tap"===t&&(s=!1!==e.Ob(n,5).onTap(l)&&s);return s},i.b,i.a)),e.Db(5,49152,null,0,r.a,[e.i],{label:[0,"label"],selected:[1,"selected"]},null),(n()(),e.Eb(6,0,null,null,1,"vcl-token",[["label","my removable token"]],[[2,"vclToken",null],[2,"vclSelected",null],[2,"vclDisabled",null]],[[null,"remove"],[null,"tap"]],function(n,t,l){var s=!0,a=n.component;"tap"===t&&(s=!1!==e.Ob(n,7).onTap(l)&&s);"remove"===t&&(s=!1!==a.onRemove(l)&&s);return s},i.b,i.a)),e.Db(7,49152,null,0,r.a,[e.i],{label:[0,"label"],removable:[1,"removable"]},{remove:"remove"}),(n()(),e.Eb(8,0,null,null,1,"vcl-token",[["label","my icon token"]],[[2,"vclToken",null],[2,"vclSelected",null],[2,"vclDisabled",null]],[[null,"remove"],[null,"tap"]],function(n,t,l){var s=!0,a=n.component;"tap"===t&&(s=!1!==e.Ob(n,9).onTap(l)&&s);"remove"===t&&(s=!1!==a.onRemove(l)&&s);return s},i.b,i.a)),e.Db(9,49152,null,0,r.a,[e.i],{label:[0,"label"],removable:[1,"removable"]},{remove:"remove"}),(n()(),e.Eb(10,0,null,null,0,"br",[],null,null,null,null,null)),(n()(),e.Eb(11,0,null,null,1,"h3",[],null,null,null,null,null)),(n()(),e.Vb(-1,null,["tokenlist"])),(n()(),e.Eb(13,0,null,null,7,"vcl-token-list",[],[[2,"vclTokenList",null],[2,"vclTokenContainer",null]],[[null,"tokensChange"]],function(n,t,l){var e=!0,s=n.component;"tokensChange"===t&&(e=!1!==s.onListChange(l)&&e);return e},p.b,p.a)),e.Sb(5120,null,b.l,function(n){return[n]},[d.a]),e.Db(15,1753088,null,1,d.a,[e.i],{selectable:[0,"selectable"]},{tokensChange:"tokensChange"}),e.Tb(603979776,1,{tokens:1}),(n()(),e.Eb(17,0,null,0,1,"vcl-token",[["label","my token 1"],["value","1"]],[[2,"vclToken",null],[2,"vclSelected",null],[2,"vclDisabled",null]],[[null,"tap"]],function(n,t,l){var s=!0;"tap"===t&&(s=!1!==e.Ob(n,18).onTap(l)&&s);return s},i.b,i.a)),e.Db(18,49152,[[1,4]],0,r.a,[e.i],{label:[0,"label"],value:[1,"value"]},null),(n()(),e.Eb(19,0,null,0,1,"vcl-token",[["label","my token 2"],["value","2"]],[[2,"vclToken",null],[2,"vclSelected",null],[2,"vclDisabled",null]],[[null,"tap"]],function(n,t,l){var s=!0;"tap"===t&&(s=!1!==e.Ob(n,20).onTap(l)&&s);return s},i.b,i.a)),e.Db(20,49152,[[1,4]],0,r.a,[e.i],{label:[0,"label"],value:[1,"value"],selected:[2,"selected"]},null),(n()(),e.Eb(21,0,null,null,0,"br",[],null,null,null,null,null)),(n()(),e.Eb(22,0,null,null,1,"h3",[],null,null,null,null,null)),(n()(),e.Vb(-1,null,["tokeninput"])),(n()(),e.Eb(24,0,null,null,7,"vcl-token-input-container",[],[[2,"vclInput",null],[2,"vclTokenInput",null],[2,"vclLayoutHorizontal",null],[2,"vclLayoutWrap",null],[1,"tabindex",0],[2,"vclDisabled",null]],[[null,"tokensChange"]],function(n,t,l){var e=!0,s=n.component;"tokensChange"===t&&(e=!1!==s.onInputChange(l)&&e);return e},h.b,h.a)),e.Sb(5120,null,b.l,function(n){return[n]},[f.a]),e.Db(26,49152,null,2,f.a,[e.o,e.i],null,{tokensChange:"tokensChange"}),e.Tb(335544320,2,{labelPre:0}),e.Tb(335544320,3,{labelPost:0}),(n()(),e.Eb(29,0,null,0,2,"input",[["vcl-input",""],["vcl-token-input",""]],[[2,"vclInput",null],[2,"vclDisabled",null],[1,"disabled",0],[2,"vclDisabled",null],[1,"disabled",0]],[[null,"keydown"],[null,"keyup.enter"]],function(n,t,l){var s=!0;"keydown"===t&&(s=!1!==e.Ob(n,31).onKeydown(l)&&s);"keyup.enter"===t&&(s=!1!==e.Ob(n,31).onKeyPressEnter(l)&&s);return s},null,null)),e.Db(30,16384,null,0,v.b,[],null,null),e.Db(31,16384,null,0,f.b,[e.o,[4,v.b],[1,f.a]],null,null),(n()(),e.Eb(32,0,null,null,1,"h3",[],null,null,null,null,null)),(n()(),e.Vb(-1,null,["tokeninput (disabled)"])),(n()(),e.Eb(34,0,null,null,7,"vcl-token-input-container",[],[[2,"vclInput",null],[2,"vclTokenInput",null],[2,"vclLayoutHorizontal",null],[2,"vclLayoutWrap",null],[1,"tabindex",0],[2,"vclDisabled",null]],null,null,h.b,h.a)),e.Sb(5120,null,b.l,function(n){return[n]},[f.a]),e.Db(36,49152,null,2,f.a,[e.o,e.i],{disabled:[0,"disabled"]},null),e.Tb(335544320,4,{labelPre:0}),e.Tb(335544320,5,{labelPost:0}),(n()(),e.Eb(39,0,null,0,2,"input",[["vcl-input",""],["vcl-token-input",""]],[[2,"vclInput",null],[2,"vclDisabled",null],[1,"disabled",0],[2,"vclDisabled",null],[1,"disabled",0]],[[null,"keydown"],[null,"keyup.enter"]],function(n,t,l){var s=!0;"keydown"===t&&(s=!1!==e.Ob(n,41).onKeydown(l)&&s);"keyup.enter"===t&&(s=!1!==e.Ob(n,41).onKeyPressEnter(l)&&s);return s},null,null)),e.Db(40,16384,null,0,v.b,[],null,null),e.Db(41,16384,null,0,f.b,[e.o,[4,v.b],[1,f.a]],null,null)],function(n,t){n(t,3,0,"my token");n(t,5,0,"my selected token",!0);n(t,7,0,"my removable token",!0);n(t,9,0,"my icon token",!0);n(t,15,0,!0);n(t,18,0,"my token 1","1");n(t,20,0,"my token 2","2",!0);n(t,36,0,!0)},function(n,t){n(t,2,0,!0,e.Ob(t,3).selected,e.Ob(t,3).isDisabled);n(t,4,0,!0,e.Ob(t,5).selected,e.Ob(t,5).isDisabled);n(t,6,0,!0,e.Ob(t,7).selected,e.Ob(t,7).isDisabled);n(t,8,0,!0,e.Ob(t,9).selected,e.Ob(t,9).isDisabled);n(t,13,0,!0,!0);n(t,17,0,!0,e.Ob(t,18).selected,e.Ob(t,18).isDisabled);n(t,19,0,!0,e.Ob(t,20).selected,e.Ob(t,20).isDisabled);n(t,24,0,!0,!0,!0,!0,-1,e.Ob(t,26).disabled);n(t,29,0,!0,e.Ob(t,30).isDisabled,e.Ob(t,30).attrDisabled,e.Ob(t,31).classDisabled,e.Ob(t,31).attrDisabled);n(t,34,0,!0,!0,!0,!0,-1,e.Ob(t,36).disabled);n(t,39,0,!0,e.Ob(t,40).isDisabled,e.Ob(t,40).attrDisabled,e.Ob(t,41).classDisabled,e.Ob(t,41).attrDisabled)})}var k=e.Ab("ng-component",s,function(n){return e.Xb(0,[(n()(),e.Eb(0,0,null,null,1,"ng-component",[],null,null,null,m,g)),e.Db(1,49152,null,0,s,[],null,null)],null,null)},{},{},[]),j=l(3),y=l(24),C=l(80),D=l(425),T=l(424),O=l(431),w=l(123),I=l(19),E=l(124),x=l(125),q=l(468),R=l(4),M=l(420);l.d(t,"TokenDemoModuleNgFactory",function(){return S});var S=e.Bb(o,[],function(n){return e.Lb([e.Mb(512,e.l,e.qb,[[8,[u.a,c.a,k]],[3,e.l],e.F]),e.Mb(4608,j.n,j.m,[e.B,[2,j.y]]),e.Mb(4608,b.w,b.w,[]),e.Mb(5120,y.b,function(){return[new y.a]},[]),e.Mb(1073742336,j.c,j.c,[]),e.Mb(1073742336,b.t,b.t,[]),e.Mb(1073742336,b.k,b.k,[]),e.Mb(1073742336,C.a,C.a,[]),e.Mb(1073742336,D.a,D.a,[]),e.Mb(1073742336,T.a,T.a,[]),e.Mb(1073742336,O.a,O.a,[]),e.Mb(1073742336,w.a,w.a,[]),e.Mb(1073742336,I.c,I.c,[]),e.Mb(1073742336,E.a,E.a,[]),e.Mb(1073742336,x.a,x.a,[]),e.Mb(1073742336,q.a,q.a,[]),e.Mb(1073742336,R.m,R.m,[[2,R.s],[2,R.l]]),e.Mb(1073742336,o,o,[]),e.Mb(1024,R.j,function(){return[[{path:"",component:M.a,data:a}]]},[])])})},420:function(n,t,l){"use strict";l.d(t,"a",function(){return e});var e=function(){function n(n,t){this.activatedRoute=n,this.sanitizer=t,this.tabs=[]}return n.prototype.ngOnInit=function(){var n=this,t=this.activatedRoute.snapshot.data.demo();t?(this.title=t.label,t.tabs?this.tabs=Object.keys(t.tabs).map(function(l){var e,s;return"object"==typeof t.tabs[l]&&t.tabs[l]?s="pre"===(e=t.tabs[l].type)||"html"===e||"md"===e?n.sanitizer.bypassSecurityTrustHtml(t.tabs[l].content):t.tabs[l].content:"function"==typeof t.tabs[l]&&(e="component",s=t.tabs[l]),{name:l,content:s,type:e}}):this.tabs=[]):(this.title="ng-vcl",this.tabs=[])},n}()},421:function(n,t,l){"use strict";l.d(t,"b",function(){return e}),l.d(t,"a",function(){return s});var e=function(){return function(){}}(),s=function(){return function(){this.disabled=!1,this.tabClass=""}}()},422:function(n,t,l){"use strict";l.d(t,"a",function(){return o});var e=l(25),s=l(0),a=l(421),o=function(){function n(){this.layout="",this.tabbableClass="",this.tabsClass="",this.tabContentClass="",this.hideContent=!1,this.borders=!1,this.selectedTabIndex=0,this.selectedTabIndexChange$=new s.q}return Object.defineProperty(n.prototype,"tabContent",{set:function(n){n&&(this.wormholeHost=new e.b(n))},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"selectedTabIndexChange",{get:function(){return this.selectedTabIndexChange$.asObservable()},enumerable:!0,configurable:!0}),n.prototype.selectTab=function(n){if(this.tabs){var t,l,e=this.tabs.toArray();n instanceof a.a?(t=e.indexOf(n),l=n):"number"==typeof n&&e[n]?l=e[t=n]:(t=-1,l=null),t>=0&&l instanceof a.a&&!l.disabled&&(this.wormholeHost&&(this.wormholeHost.clearWormholes(),this.wormholeHost.connectWormhole(l.content)),this.selectedTabIndex=t)}},n.prototype.onTabClick=function(n){this.selectTab(n),this.selectedTabIndexChange$.emit(this.selectedTabIndex)},n.prototype.ngAfterContentInit=function(){this.selectTab(this.selectedTabIndex)},n.prototype.ngOnDestroy=function(){this.wormholeHost&&this.wormholeHost.clearWormholes()},n}()},423:function(n,t,l){"use strict";l.d(t,"a",function(){return D});var e=l(0),s=l(196),a=l(426),o=l(421),u=l(3),c=l(427),i=l(422),r=l(420),p=l(4),b=l(6),d=e.Cb({encapsulation:2,styles:[],data:{}});function h(n){return e.Xb(0,[(n()(),e.Vb(0,null,["",""]))],null,function(n,t){n(t,0,0,t.parent.context.$implicit.name)})}function f(n){return e.Xb(0,[(n()(),e.Eb(0,16777216,null,null,1,"wormhole",[],null,null,null,null,null)),e.Db(1,671744,null,0,s.a,[e.db],{target:[0,"target"]},null),(n()(),e.vb(0,null,null,0))],function(n,t){n(t,1,0,t.parent.context.$implicit.content)},null)}function v(n){return e.Xb(0,[(n()(),e.Eb(0,0,null,null,2,"div",[],null,null,null,null,null)),(n()(),e.Eb(1,0,null,null,1,"pre",[],null,null,null,null,null)),(n()(),e.Vb(2,null,["",""]))],null,function(n,t){n(t,2,0,t.parent.context.$implicit.content)})}function g(n){return e.Xb(0,[(n()(),e.Eb(0,0,null,null,0,"div",[],[[8,"innerHTML",1]],null,null,null,null))],null,function(n,t){n(t,0,0,t.parent.context.$implicit.content)})}function m(n){return e.Xb(0,[(n()(),e.Eb(0,0,null,null,0,"div",[["class","markdown-body"]],[[8,"innerHTML",1]],null,null,null,null))],null,function(n,t){n(t,0,0,t.parent.context.$implicit.content)})}function k(n){return e.Xb(0,[(n()(),e.Eb(0,0,null,null,0,"pre",[],[[8,"innerHTML",1]],null,null,null,null))],null,function(n,t){n(t,0,0,t.parent.context.$implicit.content)})}function j(n){return e.Xb(0,[(n()(),e.Eb(0,0,null,null,14,"vcl-tab",[],null,null,null,a.b,a.a)),e.Db(1,49152,[[1,4]],1,o.a,[],null,null),e.Tb(335544320,2,{label:0}),(n()(),e.vb(0,[[2,2]],0,1,null,h)),e.Db(4,16384,null,0,o.b,[],null,null),(n()(),e.vb(16777216,null,0,1,null,f)),e.Db(6,16384,null,0,u.l,[e.db,e.Z],{ngIf:[0,"ngIf"]},null),(n()(),e.vb(16777216,null,0,1,null,v)),e.Db(8,16384,null,0,u.l,[e.db,e.Z],{ngIf:[0,"ngIf"]},null),(n()(),e.vb(16777216,null,0,1,null,g)),e.Db(10,16384,null,0,u.l,[e.db,e.Z],{ngIf:[0,"ngIf"]},null),(n()(),e.vb(16777216,null,0,1,null,m)),e.Db(12,16384,null,0,u.l,[e.db,e.Z],{ngIf:[0,"ngIf"]},null),(n()(),e.vb(16777216,null,0,1,null,k)),e.Db(14,16384,null,0,u.l,[e.db,e.Z],{ngIf:[0,"ngIf"]},null)],function(n,t){n(t,6,0,"component"===t.context.$implicit.type),n(t,8,0,"text"===t.context.$implicit.type),n(t,10,0,"html"===t.context.$implicit.type),n(t,12,0,"md"===t.context.$implicit.type),n(t,14,0,"pre"===t.context.$implicit.type)},null)}function y(n){return e.Xb(0,[(n()(),e.Eb(0,0,null,null,5,"div",[],null,null,null,null,null)),(n()(),e.Eb(1,0,null,null,4,"vcl-tab-nav",[["borders","true"]],null,null,null,c.b,c.a)),e.Db(2,1228800,null,1,i.a,[],{borders:[0,"borders"]},null),e.Tb(603979776,1,{tabs:1}),(n()(),e.vb(16777216,null,0,1,null,j)),e.Db(5,278528,null,0,u.k,[e.db,e.Z,e.z],{ngForOf:[0,"ngForOf"]},null)],function(n,t){var l=t.component;n(t,2,0,"true"),n(t,5,0,l.tabs)},null)}function C(n){return e.Xb(0,[(n()(),e.Eb(0,0,null,null,1,"h2",[["class","vclArticleHeader"]],null,null,null,null,null)),(n()(),e.Vb(1,null,[" ",""])),(n()(),e.vb(16777216,null,null,1,null,y)),e.Db(3,16384,null,0,u.l,[e.db,e.Z],{ngIf:[0,"ngIf"]},null)],function(n,t){n(t,3,0,t.component.tabs.length>0)},function(n,t){n(t,1,0,t.component.title)})}var D=e.Ab("ng-component",r.a,function(n){return e.Xb(0,[(n()(),e.Eb(0,0,null,null,1,"ng-component",[],null,null,null,C,d)),e.Db(1,114688,null,0,r.a,[p.a,b.c],null,null)],function(n,t){n(t,1,0)},null)},{},{},[])},424:function(n,t,l){"use strict";l.d(t,"a",function(){return e});l(420);var e=function(){return function(){}}()},425:function(n,t,l){"use strict";l.d(t,"a",function(){return e});var e=function(){return function(){}}()},426:function(n,t,l){"use strict";l.d(t,"a",function(){return a}),l.d(t,"b",function(){return u});var e=l(0),s=l(421),a=e.Cb({encapsulation:2,styles:[],data:{}});function o(n){return e.Xb(0,[e.Nb(null,0),(n()(),e.vb(0,null,null,0))],null,null)}function u(n){return e.Xb(0,[e.Tb(402653184,1,{content:0}),(n()(),e.vb(0,[[1,2]],null,0,null,o))],null,null)}s.a},427:function(n,t,l){"use strict";l.d(t,"a",function(){return u}),l.d(t,"b",function(){return i});var e=l(0),s=l(196),a=l(3),o=l(422),u=e.Cb({encapsulation:2,styles:[],data:{}});function c(n){return e.Xb(0,[(n()(),e.Eb(0,0,null,null,3,"div",[["role","tab"]],[[8,"className",0],[2,"vclDisabled",null],[2,"vclSelected",null],[2,"aria-selected",null]],[[null,"click"]],function(n,t,l){var e=!0,s=n.component;"click"===t&&(e=!1!==s.onTabClick(n.context.$implicit)&&e);return e},null,null)),(n()(),e.Eb(1,0,null,null,2,"span",[["class","vclTabLabel"]],null,null,null,null,null)),(n()(),e.Eb(2,16777216,null,null,1,"wormhole",[],null,null,null,null,null)),e.Db(3,671744,null,0,s.a,[e.db],{target:[0,"target"]},null)],function(n,t){n(t,3,0,t.context.$implicit.label)},function(n,t){var l=t.component;n(t,0,0,e.Gb(1,"vclTab ",t.context.$implicit.tabClass,""),t.context.$implicit.disabled,l.selectedTabIndex===t.context.index,l.selectedTabIndex===t.context.index)})}function i(n){return e.Xb(0,[e.Tb(402653184,1,{tabContent:0}),(n()(),e.Eb(1,0,null,null,8,"div",[],[[8,"className",0],[2,"vclTabsLeft",null],[2,"vclTabsRight",null]],null,null,null,null)),(n()(),e.Eb(2,0,null,null,2,"div",[["role","tablist"]],[[8,"className",0],[2,"vclTabStyleUni",null]],null,null,null,null)),(n()(),e.vb(16777216,null,null,1,null,c)),e.Db(4,278528,null,0,a.k,[e.db,e.Z,e.z],{ngForOf:[0,"ngForOf"]},null),(n()(),e.Eb(5,0,null,null,4,"div",[],[[4,"display",null],[8,"className",0],[2,"vclNoBorder",null]],null,null,null,null)),(n()(),e.Eb(6,0,null,null,1,"div",[["class","vclTabPanel"],["role","tabpanel"]],null,null,null,null,null)),(n()(),e.Eb(7,16777216,[[1,3],["tabContent",1]],null,0,"div",[],null,null,null,null,null)),(n()(),e.Eb(8,0,null,null,1,"div",[["class","vclTabPanel"],["role","tabpanel"]],null,null,null,null,null)),e.Nb(null,0)],function(n,t){n(t,4,0,t.component.tabs)},function(n,t){var l=t.component;n(t,1,0,e.Gb(1,"vclTabbable ",l.tabbableClass,""),"left"===l.layout,"right"===l.layout),n(t,2,0,e.Gb(1,"vclTabs ",l.tabsClass,""),!!l.borders),n(t,5,0,!0===l.hideContent?"none":null,e.Gb(1,"vclTabContent ",l.tabContentClass,""),!l.borders)})}o.a},428:function(n,t,l){"use strict";l.d(t,"b",function(){return e}),l.d(t,"a",function(){return s});var e=function(){function n(){this.disabled=!1}return Object.defineProperty(n.prototype,"isDisabled",{get:function(){return this.disabled},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"attrDisabled",{get:function(){return!!this.disabled||null},enumerable:!0,configurable:!0}),n}(),s=function(){function n(n){this.elRef=n}return n.prototype.onFocus=function(){this.elRef.nativeElement.select()},n}()},431:function(n,t,l){"use strict";l.d(t,"a",function(){return e});var e=function(){return function(){}}()},433:function(n,t,l){"use strict";l.d(t,"a",function(){return o}),l.d(t,"b",function(){return u});var e=l(0),s=l(42),a=Object.assign||function(n){for(var t,l=1,e=arguments.length;l<e;l++)for(var s in t=arguments[l])Object.prototype.hasOwnProperty.call(t,s)&&(n[s]=t[s]);return n},o=(s.l,function(){function n(n,t){this.elementRef=n,this.cdRef=t,this.tokens=[],this.selectable=!1,this.allowDuplicates=!1,this.preselect=!1,this.removeIcon="fa:times",this.removeToken=!0,this.tabindex=0,this.controlAsString=!1,this.disabled=!1,this.tokensChange=new e.q,this.remove=new e.q,this.confirm=new e.q,this.onChange=function(){},this.onTouched=function(){}}return n.prototype.removeLastToken=function(){this.tokens=this.tokens.slice(),this.tokens.pop(),this.triggerChange(),this.cdRef.markForCheck()},n.prototype.addToken=function(n){var t=a({},n="string"==typeof n?{label:n}:n,{selected:void 0===n.selected?this.preselect:n.selected,value:void 0===n.value?n.label:n.value});!1===this.allowDuplicates&&this.tokens.some(function(n){return n.value===t.value})||(this.tokens=this.tokens.concat([t]),this.triggerChange(),this.cdRef.markForCheck())},n.prototype.select=function(n){this.selectable&&(n.selected=!n.selected,this.triggerChange())},n.prototype.onTokenRemove=function(n){this.remove.emit(n),this.removeToken&&(this.tokens=this.tokens.filter(function(t){return t!==n}),this.triggerChange())},n.prototype.triggerChange=function(){this.tokensChange.emit(this.tokens),this.controlAsString?this.onChange(this.tokens.map(function(n){return n.label})):this.onChange(this.tokens)},n.prototype.writeValue=function(n){var t=this;Array.isArray(n)?this.tokens=n.map(function(n){return"string"==typeof n?{label:n,selected:t.preselect}:n}).filter(function(n){return"object"==typeof n&&n}):this.tokens=[],this.cdRef.markForCheck()},n.prototype.registerOnChange=function(n){this.onChange=n},n.prototype.registerOnTouched=function(n){this.onTouched=n},n.prototype.setDisabledState=function(n){this.disabled=n},n}()),u=function(){function n(n,t,l){if(this.elementRef=n,this.input=t,this.tokenInputContainer=l,this.addTokenOnEnter=!0,!l)throw"vcl-token-input ,must be used within a vcl-token-input-container"}return Object.defineProperty(n.prototype,"isDisabled",{get:function(){return this.input.disabled||this.tokenInputContainer.disabled},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"classDisabled",{get:function(){return this.isDisabled},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"attrDisabled",{get:function(){return!!this.isDisabled||null},enumerable:!0,configurable:!0}),n.prototype.onKeydown=function(n){var t=n.target.value,l=n&&(n.code||n.key);"Backspace"==l&&"Backspace"==this.lastKey&&""===t?this.tokenInputContainer.removeLastToken():"Enter"==l?n.preventDefault():l&&(this.lastKey=l)},n.prototype.onKeyPressEnter=function(n){var t=n.target.value;""===t?this.tokenInputContainer.confirm.emit():this.addTokenOnEnter&&(this.tokenInputContainer.addToken(t),this.elementRef.nativeElement.value="")},n}()},436:function(n,t,l){"use strict";l.d(t,"a",function(){return s});var e=l(0),s=function(){function n(n){this.cdRef=n,this.label="",this.disabled=!1,this.selected=!1,this.removable=!1,this.icon="fa:times",this.remove=new e.q,this.select=new e.q,this.cvaDisabled=!1}return n.prototype.onTap=function(n){this.isDisabled||this.select.emit(n)},n.prototype.onRemoveClick=function(n){n.stopPropagation(),this.remove.emit(n)},n.prototype.setDisabledState=function(n){this.cvaDisabled=n,this.cdRef.markForCheck()},Object.defineProperty(n.prototype,"isDisabled",{get:function(){return this.cvaDisabled||this.disabled},enumerable:!0,configurable:!0}),n}()},449:function(n,t,l){"use strict";l.d(t,"a",function(){return c});var e=l(0),s=l(195),a=l(42),o=l(94),u=l(98),c=(a.l,function(){function n(n){this.cdRef=n,this.selectable=!1,this.dispatchEvent=!1,this.disabled=!1,this.tokensChange=new e.q,this.labels=[]}return n.prototype.syncTokens=function(){var n=this.labels;Array.isArray(n)&&this.tokens&&this.tokens.forEach(function(t){t.selected=n.includes(t.label)})},n.prototype.syncSelectedValues=function(){this.labels=this.tokens?this.tokens.filter(function(n){return n.selected}).map(function(n){return n.label}):[]},n.prototype.triggerChange=function(){this.tokensChange.emit(this.labels),this.onChangeCallback&&this.onChangeCallback(this.labels)},n.prototype.ngOnChanges=function(n){n.disabled&&this.setDisabledState(n.disabled.currentValue)},n.prototype.ngAfterContentInit=function(){var n=this;this.onChangeCallback||(this.syncSelectedValues(),this.triggerChange());this.tokens&&this.tokens.changes.pipe(Object(u.a)(null)).subscribe(function(){!function(){if(n.tokens){n.dispose(),n.cdRef.markForCheck();var t=s.a.apply(void 0,n.tokens.map(function(n){return n.select.pipe(Object(o.a)(function(){return n}))}));n.tokenSubscription=t.subscribe(function(t){n.selectable&&(t.selected=!t.selected),n.syncSelectedValues(),n.triggerChange()})}}(),setTimeout(function(){n.syncSelectedValues(),n.setDisabledState(n.disabled)})})},n.prototype.ngOnDestroy=function(){this.dispose()},n.prototype.dispose=function(){this.tokenSubscription&&this.tokenSubscription.unsubscribe()},n.prototype.writeValue=function(n){this.labels=n,this.syncTokens(),this.cdRef.markForCheck()},n.prototype.registerOnChange=function(n){this.onChangeCallback=n},n.prototype.registerOnTouched=function(n){this.onTouchedCallback=n},n.prototype.setDisabledState=function(n){this.tokens&&this.tokens.forEach(function(t){return t.setDisabledState(n)})},n}())},458:function(n,t,l){"use strict";l.d(t,"a",function(){return p}),l.d(t,"b",function(){return h});var e=l(0),s=l(69),a=l(33),o=l(126),u=l(89),c=l(60),i=l(3),r=l(436),p=e.Cb({encapsulation:2,styles:[],data:{}});function b(n){return e.Xb(0,[(n()(),e.Eb(0,0,null,null,1,"div",[["vcl-icogram",""]],[[2,"vclIcogram",null],[1,"role",0]],null,null,s.c,s.a)),e.Db(1,49152,null,0,a.a,[],{appIcon:[0,"appIcon"]},null)],function(n,t){n(t,1,0,t.component.tokenIcon)},function(n,t){n(t,0,0,!0,"img")})}function d(n){return e.Xb(0,[(n()(),e.Eb(0,0,null,null,2,"button",[["class","vclTransparent"],["title","Remove"],["type","button"],["vcl-button",""]],[[2,"vclButton",null],[2,"vclDisabled",null],[1,"disabled",0],[2,"vclHovered",null],[2,"vclSquare",null],[1,"aria-label",0]],[[null,"click"],[null,"mouseenter"],[null,"mouseleave"]],function(n,t,l){var s=!0,a=n.component;"mouseenter"===t&&(s=!1!==e.Ob(n,1).onMouseEnter(l)&&s);"mouseleave"===t&&(s=!1!==e.Ob(n,1).onMouseLeave(l)&&s);"click"===t&&(s=!1!==a.onRemoveClick(l)&&s);return s},o.b,o.a)),e.Db(1,16384,null,0,u.a,[e.o],{disabled:[0,"disabled"]},null),e.Db(2,49152,null,0,c.a,[],{title:[0,"title"],icon:[1,"icon"]},null)],function(n,t){var l=t.component;n(t,1,0,l.isDisabled);n(t,2,0,"Remove",l.icon)},function(n,t){n(t,0,0,!0,e.Ob(t,1).isDisabled,e.Ob(t,1).isDisabled,e.Ob(t,1).hovered,!0,e.Ob(t,2).title)})}function h(n){return e.Xb(0,[(n()(),e.vb(16777216,null,null,1,null,b)),e.Db(1,16384,null,0,i.l,[e.db,e.Z],{ngIf:[0,"ngIf"]},null),(n()(),e.Eb(2,0,null,null,1,"span",[["class","vclTokenLabel"]],null,null,null,null,null)),(n()(),e.Vb(3,null,["",""])),(n()(),e.vb(16777216,null,null,1,null,d)),e.Db(5,16384,null,0,i.l,[e.db,e.Z],{ngIf:[0,"ngIf"]},null)],function(n,t){var l=t.component;n(t,1,0,l.tokenIcon),n(t,5,0,l.removable)},function(n,t){n(t,3,0,t.component.label)})}r.a},468:function(n,t,l){"use strict";l.d(t,"a",function(){return e});var e=function(){return function(){}}()},469:function(n,t,l){"use strict";l.d(t,"a",function(){return r}),l.d(t,"b",function(){return h});var e=l(0),s=l(196),a=l(458),o=l(3),u=l(436),c=l(42),i=l(433),r=e.Cb({encapsulation:2,styles:[],data:{}});function p(n){return e.Xb(0,[(n()(),e.Eb(0,16777216,null,null,1,"wormhole",[],null,null,null,null,null)),e.Db(1,671744,null,0,s.a,[e.db],{target:[0,"target"]},null),(n()(),e.vb(0,null,null,0))],function(n,t){n(t,1,0,t.component.labelPre)},null)}function b(n){return e.Xb(0,[(n()(),e.Eb(0,0,null,null,2,"vcl-token",[],[[1,"tabindex",0],[2,"vclToken",null],[2,"vclSelected",null],[2,"vclDisabled",null]],[[null,"remove"],[null,"click"],[null,"tap"]],function(n,t,l){var s=!0,a=n.component;"tap"===t&&(s=!1!==e.Ob(n,2).onTap(l)&&s);"remove"===t&&(s=!1!==a.onTokenRemove(n.context.$implicit)&&s);"click"===t&&(s=!1!==a.select(n.context.$implicit)&&s);return s},a.b,a.a)),e.Db(1,278528,null,0,o.j,[e.z,e.A,e.o,e.Q],{ngClass:[0,"ngClass"]},null),e.Db(2,49152,null,0,u.a,[e.i],{label:[0,"label"],disabled:[1,"disabled"],selected:[2,"selected"],removable:[3,"removable"],icon:[4,"icon"],tokenIcon:[5,"tokenIcon"]},{remove:"remove"})],function(n,t){var l=t.component;n(t,1,0,l.tokenClass);n(t,2,0,t.context.$implicit.label,l.disabled,t.context.$implicit.selected,!0,l.removeIcon,t.context.$implicit.tokenIcon)},function(n,t){n(t,0,0,-1,!0,e.Ob(t,2).selected,e.Ob(t,2).isDisabled)})}function d(n){return e.Xb(0,[(n()(),e.Eb(0,16777216,null,null,1,"wormhole",[],null,null,null,null,null)),e.Db(1,671744,null,0,s.a,[e.db],{target:[0,"target"]},null),(n()(),e.vb(0,null,null,0))],function(n,t){n(t,1,0,t.component.labelPost)},null)}function h(n){return e.Xb(2,[(n()(),e.Eb(0,0,null,null,6,"div",[["class","vclTokenContainer"]],null,null,null,null,null)),(n()(),e.vb(16777216,null,null,1,null,p)),e.Db(2,16384,null,0,o.l,[e.db,e.Z],{ngIf:[0,"ngIf"]},null),(n()(),e.vb(16777216,null,null,1,null,b)),e.Db(4,278528,null,0,o.k,[e.db,e.Z,e.z],{ngForOf:[0,"ngForOf"]},null),(n()(),e.vb(16777216,null,null,1,null,d)),e.Db(6,16384,null,0,o.l,[e.db,e.Z],{ngIf:[0,"ngIf"]},null),e.Nb(null,0)],function(n,t){var l=t.component;n(t,2,0,l.labelPre),n(t,4,0,l.tokens),n(t,6,0,l.labelPost)},null)}i.a},508:function(n,t,l){"use strict";l.d(t,"a",function(){return o}),l.d(t,"b",function(){return u});var e=l(0),s=l(42),a=l(449),o=e.Cb({encapsulation:2,styles:[],data:{}});function u(n){return e.Xb(0,[e.Nb(null,0)],null,null)}a.a},583:function(n,t){n.exports='<h1 id="vcl-token">vcl-token</h1>\n<h2 id="usage">Usage</h2>\n<pre class="hljs"><span class="hljs-keyword">import</span> { VCLTokenModule } <span class="hljs-keyword">from</span> <span class="hljs-string">&apos;ng-vcl&apos;</span>;\n\n@NgModule({\n  <span class="hljs-attr">imports</span>: [ VCLTokenModule ],\n  ...\n})\n<span class="hljs-keyword">export</span> <span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">AppComponent</span> </span>{}</pre>\n<h2 id="single-token">single token</h2>\n<pre class="hljs"><code>&lt;vcl-token label=&quot;mytoken&quot;&gt;&lt;/vcl-token&gt;</code></pre>\n<h2 id="single-selected-token">single selected token</h2>\n<pre class="hljs"><code>&lt;vcl-token label=&quot;mytoken&quot; [selected]=&quot;true&quot;&gt;&lt;/vcl-token&gt;</code></pre>\n<h2 id="single-removable-token">single removable token</h2>\n<pre class="hljs"><code>&lt;vcl-token label=&quot;mytoken&quot; [removable]=&quot;true&quot; (remove)=&quot;onRemove()&quot;&gt;&lt;/vcl-token&gt;</code></pre>\n<h2 id="token-list">token-list</h2>\n<pre class="hljs"><span class="hljs-tag">&lt;<span class="hljs-name">vcl-token-list</span> [<span class="hljs-attr">selectable</span>]=<span class="hljs-string">&quot;true&quot;</span> (<span class="hljs-attr">change</span>)=<span class="hljs-string">&quot;changed($event);&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">vcl-token</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;mytoken 1&quot;</span> [<span class="hljs-attr">selected</span>]=<span class="hljs-string">&quot;true&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vcl-token</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">vcl-token</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;mytoken 2&quot;</span> [<span class="hljs-attr">selected</span>]=<span class="hljs-string">&quot;false&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vcl-token</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">vcl-token-list</span>&gt;</span></pre>\n<h2 id="token-insert">token-insert</h2>\n<pre class="hljs"><span class="hljs-tag">&lt;<span class="hljs-name">vcl-token-input-container</span> (<span class="hljs-attr">change</span>)=<span class="hljs-string">&quot;changed($event);&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">input</span> <span class="hljs-attr">vcl-input</span> <span class="hljs-attr">vcl-token-input</span> /&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">vcl-token-input-container</span>&gt;</span></pre>\n<h3 id="api">API</h3>\n<h4 id="vcl-token-attributes">vcl-token attributes</h4>\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Type</th>\n<th>Default</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody><tr>\n<td><code>label</code></td>\n<td>string</td>\n<td></td>\n<td>label-text inside of the token</td>\n</tr>\n<tr>\n<td><code>selected</code></td>\n<td>boolean</td>\n<td>false</td>\n<td>if true, the token is highlighted</td>\n</tr>\n<tr>\n<td><code>removable</code></td>\n<td>boolean</td>\n<td>false</td>\n<td>if true, the remove-cross is shown</td>\n</tr>\n<tr>\n<td><code>icon</code></td>\n<td>string</td>\n<td>fa:times</td>\n<td>remove icon</td>\n</tr>\n</tbody></table>\n<h4 id="vcl-token-events">vcl-token events</h4>\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Type</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody><tr>\n<td><code>remove</code></td>\n<td></td>\n<td>called when the remove-button is pressed</td>\n</tr>\n</tbody></table>\n<h4 id="token-list-attributes">token-list attributes</h4>\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Type</th>\n<th>Default</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody><tr>\n<td><code>ngModel</code></td>\n<td>string[]</td>\n<td>string[]</td>\n<td>The labels of the selected tokens</td>\n</tr>\n<tr>\n<td><code>selectable</code></td>\n<td>boolean</td>\n<td>false</td>\n<td>tokens are selectable if true</td>\n</tr>\n</tbody></table>\n<h4 id="token-list-events">token-list events</h4>\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Type</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody><tr>\n<td><code>tokensChange</code></td>\n<td>string[]</td>\n<td>called when the selection of token changes</td>\n</tr>\n</tbody></table>\n<h4 id="vcl-token-input-container-attributes">vcl-token-input-container attributes</h4>\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Type</th>\n<th>Default</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody><tr>\n<td><code>ngModel</code></td>\n<td>Token[]</td>\n<td>[]</td>\n<td>List of tokens</td>\n</tr>\n<tr>\n<td><code>selectable</code></td>\n<td>boolean</td>\n<td>false</td>\n<td>tokens are selectable if true</td>\n</tr>\n<tr>\n<td><code>allowDuplicates</code></td>\n<td>boolean</td>\n<td>false</td>\n<td>tokens with matching values are not added</td>\n</tr>\n<tr>\n<td><code>preselect</code></td>\n<td>boolean</td>\n<td>false</td>\n<td>tokens are preselected after being added if true</td>\n</tr>\n<tr>\n<td><code>tokenClass</code></td>\n<td>string</td>\n<td></td>\n<td>additional css class for tokens</td>\n</tr>\n<tr>\n<td><code>removeIcon</code></td>\n<td>string</td>\n<td>fa:times</td>\n<td>remove icon</td>\n</tr>\n<tr>\n<td><code>tabindex</code></td>\n<td>number</td>\n<td>0</td>\n<td>The tabindex of the token-input</td>\n</tr>\n</tbody></table>\n<h4 id="vcl-token-input-container-events">vcl-token-input-container events</h4>\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Type</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody><tr>\n<td><code>tokensChange</code></td>\n<td>Token[]</td>\n<td>called after tokens are added/removed or the selection of token changes</td>\n</tr>\n<tr>\n<td><code>confirm</code></td>\n<td>Token[]</td>\n<td>called after <code>enter</code> is pressed when input element is empty</td>\n</tr>\n</tbody></table>\n<h4 id="interfaces">interfaces</h4>\n<pre class="hljs"><span class="hljs-keyword">interface</span> Token {\n  label: <span class="hljs-built_in">string</span>;\n  selected?: <span class="hljs-built_in">boolean</span>;\n  removable?: <span class="hljs-built_in">boolean</span>;\n}</pre>\n'},584:function(n,t){n.exports='<span class="hljs-tag">&lt;<span class="hljs-name">h3</span>&gt;</span>single tokens<span class="hljs-tag">&lt;/<span class="hljs-name">h3</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">vcl-token</span> <span class="hljs-attr">label</span>=<span class="hljs-string">"my token"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vcl-token</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">vcl-token</span> <span class="hljs-attr">label</span>=<span class="hljs-string">"my selected token"</span> [<span class="hljs-attr">selected</span>]=<span class="hljs-string">"true"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vcl-token</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">vcl-token</span> <span class="hljs-attr">label</span>=<span class="hljs-string">"my removable token"</span> [<span class="hljs-attr">removable</span>]=<span class="hljs-string">"true"</span> (<span class="hljs-attr">remove</span>)=<span class="hljs-string">"onRemove($event)"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vcl-token</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">vcl-token</span> <span class="hljs-attr">label</span>=<span class="hljs-string">"my icon token"</span> [<span class="hljs-attr">removable</span>]=<span class="hljs-string">"true"</span> (<span class="hljs-attr">remove</span>)=<span class="hljs-string">"onRemove($event)"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vcl-token</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">br</span>/&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">h3</span>&gt;</span>tokenlist<span class="hljs-tag">&lt;/<span class="hljs-name">h3</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">vcl-token-list</span> [<span class="hljs-attr">selectable</span>]=<span class="hljs-string">"true"</span> (<span class="hljs-attr">tokensChange</span>)=<span class="hljs-string">"onListChange($event);"</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">vcl-token</span> <span class="hljs-attr">label</span>=<span class="hljs-string">"my token 1"</span> <span class="hljs-attr">value</span>=<span class="hljs-string">"1"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vcl-token</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">vcl-token</span> <span class="hljs-attr">label</span>=<span class="hljs-string">"my token 2"</span> [<span class="hljs-attr">selected</span>]=<span class="hljs-string">"true"</span> <span class="hljs-attr">value</span>=<span class="hljs-string">"2"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vcl-token</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">vcl-token-list</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">br</span>/&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">h3</span>&gt;</span>tokeninput<span class="hljs-tag">&lt;/<span class="hljs-name">h3</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">vcl-token-input-container</span> (<span class="hljs-attr">tokensChange</span>)=<span class="hljs-string">"onInputChange($event);"</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">input</span> <span class="hljs-attr">vcl-input</span> <span class="hljs-attr">vcl-token-input</span> /&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">vcl-token-input-container</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">h3</span>&gt;</span>tokeninput (disabled)<span class="hljs-tag">&lt;/<span class="hljs-name">h3</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">vcl-token-input-container</span> [<span class="hljs-attr">disabled</span>]=<span class="hljs-string">"true"</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">input</span> <span class="hljs-attr">vcl-input</span> <span class="hljs-attr">vcl-token-input</span> /&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">vcl-token-input-container</span>&gt;</span>\n'},585:function(n,t){n.exports='<span class="hljs-keyword">import</span> { Component } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/core\'</span>;\n\n<span class="hljs-meta">@Component</span>({\n  templateUrl: <span class="hljs-string">\'demo.component.html\'</span>\n})\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> TokenDemoComponent {\n\n  onRemove(token) {\n    <span class="hljs-built_in">console</span>.log(<span class="hljs-string">\'onRemove\'</span>, token);\n  }\n\n  onListChange(value) {\n    <span class="hljs-built_in">console</span>.log(<span class="hljs-string">\'onListChange\'</span>, value);\n  }\n\n  onInputChange(value) {\n    <span class="hljs-built_in">console</span>.log(<span class="hljs-string">\'onInputChange\'</span>, value);\n  }\n}\n'},98:function(n,t,l){"use strict";var e=l(43),s=l(153),a=l(36),o=l(70),u=l(95),c=l(93),i=l(96);function r(){for(var n=[],t=0;t<arguments.length;t++)n[t]=arguments[t];return 1===n.length||2===n.length&&Object(o.a)(n[1])?Object(c.a)(n[0]):Object(i.a)()(u.a.apply(void 0,n))}function p(){for(var n=[],t=0;t<arguments.length;t++)n[t]=arguments[t];return function(t){var l=n[n.length-1];Object(o.a)(l)?n.pop():l=null;var u=n.length;return r(1!==u||l?u>0?Object(e.a)(n,l):Object(a.b)(l):Object(s.a)(n[0]),t)}}l.d(t,"a",function(){return p})}}]);