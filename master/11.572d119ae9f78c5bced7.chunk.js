(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{196:function(l,n,s){"use strict";s.d(n,"a",function(){return e});var a=s(25),t=function(){var l=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(l,n){l.__proto__=n}||function(l,n){for(var s in n)n.hasOwnProperty(s)&&(l[s]=n[s])};return function(n,s){function a(){this.constructor=n}l(n,s),n.prototype=null===s?Object.create(s):(a.prototype=s.prototype,new a)}}(),e=function(l){function n(n){return l.call(this,n)||this}return t(n,l),Object.defineProperty(n.prototype,"isConnected",{get:function(){return!!this.wormhole&&this.wormhole.isConnected},enumerable:!0,configurable:!0}),n.prototype.ngOnChanges=function(l){var n="attrs"in l&&l.attrs.currentValue||void 0;if("target"in l){this.clearWormholes();var s=l.target.currentValue;s&&(this.wormhole=this.connectWormhole(s,n))}else n&&this.wormhole&&this.wormhole.setAttributes(n)},n.prototype.ngOnDestroy=function(){this.wormhole&&this.wormhole.disconnect()},n}(a.b)},385:function(l,n,s){"use strict";s.r(n);var a=s(0),t=function(){return function(){}}();var e={demo:function(){return{label:"Toolbar",tabs:{Demo:t,"README.md":{type:"md",content:s(532)},"demo.component.html":{type:"pre",content:s(533)},"demo.component.ts":{type:"pre",content:s(534)}}}}},u=function(){return function(){}}(),c=s(151),p=s(423),o=function(){return function(){this.ariaLevel=1}}(),r=a.Cb({encapsulation:2,styles:[],data:{}});function i(l){return a.Xb(0,[a.Nb(null,0)],null,null)}var b=s(130),h=s(17),v=s(4),j=s(89),g=s(428),m=a.Cb({encapsulation:2,styles:[],data:{}});function d(l){return a.Xb(0,[(l()(),a.Eb(0,0,null,null,0,"link",[["crossorigin","anonymous"],["href","https://use.fontawesome.com/releases/v5.3.1/css/all.css"],["integrity","sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU"],["rel","stylesheet"]],null,null,null,null,null)),(l()(),a.Eb(1,0,null,null,1,"h2",[],null,null,null,null,null)),(l()(),a.Vb(-1,null,["Features"])),(l()(),a.Vb(-1,null,[" Multiple level toolbars can be provided using "])),(l()(),a.Eb(4,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),a.Vb(-1,null,["ariaLevel"])),(l()(),a.Vb(-1,null,[" attribute. Defaults to 1. "])),(l()(),a.Eb(7,0,null,null,1,"h2",[],null,null,null,null,null)),(l()(),a.Vb(-1,null,["Examples"])),(l()(),a.Eb(9,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),a.Vb(-1,null,["Toolbar with logo, navigation and buttons"])),(l()(),a.Eb(11,0,null,null,21,"vcl-toolbar",[],[[2,"vclToolbar",null],[2,"vclLayoutHorizontal",null],[2,"vclLayoutJustified",null],[2,"vclSecondary",null],[1,"aria-level",0],[1,"role",0]],null,null,i,r)),a.Db(12,49152,null,0,o,[],null,null),(l()(),a.Eb(13,0,null,0,3,"a",[["class","vclLayoutHorizontal vclLayoutCenter"],["href","#"]],null,null,null,null,null)),(l()(),a.Eb(14,0,null,null,0,"img",[["class","vclResponsiveImage vclLogo"],["role","presentation"],["src","https://cdn.rawgit.com/vcl/vcl/master/gfx/vcl_logo_square-bw.svg"],["style","max-width: 3em;"]],null,null,null,null,null)),(l()(),a.Eb(15,0,null,null,1,"h1",[["class","vclToolbarTitle"]],null,null,null,null,null)),(l()(),a.Vb(-1,null,["App Name"])),(l()(),a.Eb(17,0,null,0,10,"nav",[["type","horizontal"],["vcl-navigation",""]],[[2,"vclNavigation",null]],null,null,b.b,b.a)),a.Db(18,49152,[["nav1",4]],1,h.a,[v.l],{type:[0,"type"]},null),a.Tb(603979776,1,{contentItems:1}),(l()(),a.Eb(20,0,null,null,3,"vcl-navitem",[["label","Link 1"],["prepIcon","fa:home"]],null,null,null,null,null)),a.Db(21,1196032,[[2,4],[1,4]],1,h.b,[v.l,h.a,[3,h.b]],{label:[0,"label"],prepIcon:[1,"prepIcon"],route:[2,"route"]},null),a.Tb(603979776,2,{contentItems:1}),a.Pb(23,1),(l()(),a.Eb(24,0,null,null,3,"vcl-navitem",[["label","Link 2"],["prepIcon","fa:envelope"]],null,null,null,null,null)),a.Db(25,1196032,[[3,4],[1,4]],1,h.b,[v.l,h.a,[3,h.b]],{label:[0,"label"],prepIcon:[1,"prepIcon"],route:[2,"route"]},null),a.Tb(603979776,3,{contentItems:1}),a.Pb(27,1),(l()(),a.Eb(28,0,null,0,4,"div",[["class","vclLayoutHorizontal vclLayoutCenter"]],null,null,null,null,null)),(l()(),a.Eb(29,0,null,null,1,"button",[["appIcon","fa:envelope"],["class","vclTransparent"],["vcl-button",""]],[[2,"vclButton",null],[2,"vclDisabled",null],[1,"disabled",0],[2,"vclHovered",null]],[[null,"mouseenter"],[null,"mouseleave"]],function(l,n,s){var t=!0;"mouseenter"===n&&(t=!1!==a.Ob(l,30).onMouseEnter(s)&&t);"mouseleave"===n&&(t=!1!==a.Ob(l,30).onMouseLeave(s)&&t);return t},null,null)),a.Db(30,16384,null,0,j.a,[a.o],null,null),(l()(),a.Eb(31,0,null,null,1,"button",[["appIcon","fa:user"],["class","vclTransparent"],["vcl-button",""]],[[2,"vclButton",null],[2,"vclDisabled",null],[1,"disabled",0],[2,"vclHovered",null]],[[null,"mouseenter"],[null,"mouseleave"]],function(l,n,s){var t=!0;"mouseenter"===n&&(t=!1!==a.Ob(l,32).onMouseEnter(s)&&t);"mouseleave"===n&&(t=!1!==a.Ob(l,32).onMouseLeave(s)&&t);return t},null,null)),a.Db(32,16384,null,0,j.a,[a.o],null,null),(l()(),a.Eb(33,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),a.Eb(34,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),a.Eb(35,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),a.Vb(-1,null,["Toolbar with embedded inline input"])),(l()(),a.Eb(37,0,null,null,13,"vcl-toolbar",[],[[2,"vclToolbar",null],[2,"vclLayoutHorizontal",null],[2,"vclLayoutJustified",null],[2,"vclSecondary",null],[1,"aria-level",0],[1,"role",0]],null,null,i,r)),a.Db(38,49152,null,0,o,[],null,null),(l()(),a.Eb(39,0,null,0,1,"button",[["appIcon","fa:navicon"],["class","vclTransparent"],["vcl-button",""]],[[2,"vclButton",null],[2,"vclDisabled",null],[1,"disabled",0],[2,"vclHovered",null]],[[null,"mouseenter"],[null,"mouseleave"]],function(l,n,s){var t=!0;"mouseenter"===n&&(t=!1!==a.Ob(l,40).onMouseEnter(s)&&t);"mouseleave"===n&&(t=!1!==a.Ob(l,40).onMouseLeave(s)&&t);return t},null,null)),a.Db(40,16384,null,0,j.a,[a.o],null,null),(l()(),a.Eb(41,0,null,0,4,"div",[["class","vclInputGroupEmb"]],null,null,null,null,null)),(l()(),a.Eb(42,0,null,null,1,"span",[["class","vclPrepended"]],null,null,null,null,null)),(l()(),a.Eb(43,0,null,null,0,"i",[["class","vclIcon fa fa-search"]],null,null,null,null,null)),(l()(),a.Eb(44,0,null,null,1,"input",[["class","vclPrepItem"],["placeholder","Search"],["vcl-input",""]],[[2,"vclInput",null],[2,"vclDisabled",null],[1,"disabled",0]],null,null,null,null)),a.Db(45,16384,null,0,g.b,[],null,null),(l()(),a.Eb(46,0,null,0,4,"div",[["class","vclLayoutHorizontal vclLayoutCenter"]],null,null,null,null,null)),(l()(),a.Eb(47,0,null,null,1,"button",[["appIcon","fa:user"],["class","vclTransparent"],["vcl-button",""]],[[2,"vclButton",null],[2,"vclDisabled",null],[1,"disabled",0],[2,"vclHovered",null]],[[null,"mouseenter"],[null,"mouseleave"]],function(l,n,s){var t=!0;"mouseenter"===n&&(t=!1!==a.Ob(l,48).onMouseEnter(s)&&t);"mouseleave"===n&&(t=!1!==a.Ob(l,48).onMouseLeave(s)&&t);return t},null,null)),a.Db(48,16384,null,0,j.a,[a.o],null,null),(l()(),a.Eb(49,0,null,null,1,"button",[["appIcon","fas fa-plus"],["class","vclTransparent"],["vcl-button",""]],[[2,"vclButton",null],[2,"vclDisabled",null],[1,"disabled",0],[2,"vclHovered",null]],[[null,"mouseenter"],[null,"mouseleave"]],function(l,n,s){var t=!0;"mouseenter"===n&&(t=!1!==a.Ob(l,50).onMouseEnter(s)&&t);"mouseleave"===n&&(t=!1!==a.Ob(l,50).onMouseLeave(s)&&t);return t},null,null)),a.Db(50,16384,null,0,j.a,[a.o],null,null),(l()(),a.Eb(51,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),a.Eb(52,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),a.Eb(53,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),a.Vb(-1,null,["Second level toolbar with title in the middle"])),(l()(),a.Eb(55,0,null,null,7,"vcl-toolbar",[["class","vclLayoutCenter"]],[[2,"vclToolbar",null],[2,"vclLayoutHorizontal",null],[2,"vclLayoutJustified",null],[2,"vclSecondary",null],[1,"aria-level",0],[1,"role",0]],null,null,i,r)),a.Db(56,49152,null,0,o,[],{ariaLevel:[0,"ariaLevel"]},null),(l()(),a.Eb(57,0,null,0,1,"button",[["appIcon","fa:navicon"],["class","vclTransparent"],["vcl-button",""]],[[2,"vclButton",null],[2,"vclDisabled",null],[1,"disabled",0],[2,"vclHovered",null]],[[null,"mouseenter"],[null,"mouseleave"]],function(l,n,s){var t=!0;"mouseenter"===n&&(t=!1!==a.Ob(l,58).onMouseEnter(s)&&t);"mouseleave"===n&&(t=!1!==a.Ob(l,58).onMouseLeave(s)&&t);return t},null,null)),a.Db(58,16384,null,0,j.a,[a.o],null,null),(l()(),a.Eb(59,0,null,0,1,"div",[],null,null,null,null,null)),(l()(),a.Vb(-1,null,["Level 2 Toolbar Title"])),(l()(),a.Eb(61,0,null,0,1,"button",[["appIcon","fas fa-plus"],["class","vclTransparent"],["vcl-button",""]],[[2,"vclButton",null],[2,"vclDisabled",null],[1,"disabled",0],[2,"vclHovered",null]],[[null,"mouseenter"],[null,"mouseleave"]],function(l,n,s){var t=!0;"mouseenter"===n&&(t=!1!==a.Ob(l,62).onMouseEnter(s)&&t);"mouseleave"===n&&(t=!1!==a.Ob(l,62).onMouseLeave(s)&&t);return t},null,null)),a.Db(62,16384,null,0,j.a,[a.o],null,null)],function(l,n){l(n,18,0,"horizontal");l(n,21,0,"Link 1","fa:home",l(n,23,0,"#"));l(n,25,0,"Link 2","fa:envelope",l(n,27,0,"#"));l(n,56,0,2)},function(l,n){l(n,11,0,!0,!0,!0,2==a.Ob(n,12).ariaLevel,a.Ob(n,12).ariaLevel,"menubar");l(n,17,0,!0);l(n,29,0,!0,a.Ob(n,30).isDisabled,a.Ob(n,30).isDisabled,a.Ob(n,30).hovered);l(n,31,0,!0,a.Ob(n,32).isDisabled,a.Ob(n,32).isDisabled,a.Ob(n,32).hovered);l(n,37,0,!0,!0,!0,2==a.Ob(n,38).ariaLevel,a.Ob(n,38).ariaLevel,"menubar");l(n,39,0,!0,a.Ob(n,40).isDisabled,a.Ob(n,40).isDisabled,a.Ob(n,40).hovered);l(n,44,0,!0,a.Ob(n,45).isDisabled,a.Ob(n,45).attrDisabled);l(n,47,0,!0,a.Ob(n,48).isDisabled,a.Ob(n,48).isDisabled,a.Ob(n,48).hovered);l(n,49,0,!0,a.Ob(n,50).isDisabled,a.Ob(n,50).isDisabled,a.Ob(n,50).hovered);l(n,55,0,!0,!0,!0,2==a.Ob(n,56).ariaLevel,a.Ob(n,56).ariaLevel,"menubar");l(n,57,0,!0,a.Ob(n,58).isDisabled,a.Ob(n,58).isDisabled,a.Ob(n,58).hovered);l(n,61,0,!0,a.Ob(n,62).isDisabled,a.Ob(n,62).isDisabled,a.Ob(n,62).hovered)})}var f=a.Ab("ng-component",t,function(l){return a.Xb(0,[(l()(),a.Eb(0,0,null,null,1,"ng-component",[],null,null,null,d,m)),a.Db(1,49152,null,0,t,[],null,null)],null,null)},{},{},[]),y=s(3),E=s(24),T=s(80),O=s(425),D=s(424),I=function(){return function(){}}(),L=s(123),w=s(19),C=s(124),x=s(125),M=s(127),H=s(129),k=s(431),q=s(420);s.d(n,"ToolbarDemoModuleNgFactory",function(){return z});var z=a.Bb(u,[],function(l){return a.Lb([a.Mb(512,a.l,a.qb,[[8,[c.a,p.a,f]],[3,a.l],a.F]),a.Mb(4608,y.n,y.m,[a.B,[2,y.y]]),a.Mb(5120,E.b,function(){return[new E.a]},[]),a.Mb(1073742336,y.c,y.c,[]),a.Mb(1073742336,T.a,T.a,[]),a.Mb(1073742336,O.a,O.a,[]),a.Mb(1073742336,D.a,D.a,[]),a.Mb(1073742336,I,I,[]),a.Mb(1073742336,L.a,L.a,[]),a.Mb(1073742336,w.c,w.c,[]),a.Mb(1073742336,C.a,C.a,[]),a.Mb(1073742336,x.a,x.a,[]),a.Mb(1073742336,M.a,M.a,[]),a.Mb(1073742336,H.a,H.a,[]),a.Mb(1073742336,k.a,k.a,[]),a.Mb(1073742336,v.m,v.m,[[2,v.s],[2,v.l]]),a.Mb(1073742336,u,u,[]),a.Mb(1024,v.j,function(){return[[{path:"",component:q.a,data:e}]]},[])])})},420:function(l,n,s){"use strict";s.d(n,"a",function(){return a});var a=function(){function l(l,n){this.activatedRoute=l,this.sanitizer=n,this.tabs=[]}return l.prototype.ngOnInit=function(){var l=this,n=this.activatedRoute.snapshot.data.demo();n?(this.title=n.label,n.tabs?this.tabs=Object.keys(n.tabs).map(function(s){var a,t;return"object"==typeof n.tabs[s]&&n.tabs[s]?t="pre"===(a=n.tabs[s].type)||"html"===a||"md"===a?l.sanitizer.bypassSecurityTrustHtml(n.tabs[s].content):n.tabs[s].content:"function"==typeof n.tabs[s]&&(a="component",t=n.tabs[s]),{name:s,content:t,type:a}}):this.tabs=[]):(this.title="ng-vcl",this.tabs=[])},l}()},421:function(l,n,s){"use strict";s.d(n,"b",function(){return a}),s.d(n,"a",function(){return t});var a=function(){return function(){}}(),t=function(){return function(){this.disabled=!1,this.tabClass=""}}()},422:function(l,n,s){"use strict";s.d(n,"a",function(){return u});var a=s(25),t=s(0),e=s(421),u=function(){function l(){this.layout="",this.tabbableClass="",this.tabsClass="",this.tabContentClass="",this.hideContent=!1,this.borders=!1,this.selectedTabIndex=0,this.selectedTabIndexChange$=new t.q}return Object.defineProperty(l.prototype,"tabContent",{set:function(l){l&&(this.wormholeHost=new a.b(l))},enumerable:!0,configurable:!0}),Object.defineProperty(l.prototype,"selectedTabIndexChange",{get:function(){return this.selectedTabIndexChange$.asObservable()},enumerable:!0,configurable:!0}),l.prototype.selectTab=function(l){if(this.tabs){var n,s,a=this.tabs.toArray();l instanceof e.a?(n=a.indexOf(l),s=l):"number"==typeof l&&a[l]?s=a[n=l]:(n=-1,s=null),n>=0&&s instanceof e.a&&!s.disabled&&(this.wormholeHost&&(this.wormholeHost.clearWormholes(),this.wormholeHost.connectWormhole(s.content)),this.selectedTabIndex=n)}},l.prototype.onTabClick=function(l){this.selectTab(l),this.selectedTabIndexChange$.emit(this.selectedTabIndex)},l.prototype.ngAfterContentInit=function(){this.selectTab(this.selectedTabIndex)},l.prototype.ngOnDestroy=function(){this.wormholeHost&&this.wormholeHost.clearWormholes()},l}()},423:function(l,n,s){"use strict";s.d(n,"a",function(){return O});var a=s(0),t=s(196),e=s(426),u=s(421),c=s(3),p=s(427),o=s(422),r=s(420),i=s(4),b=s(6),h=a.Cb({encapsulation:2,styles:[],data:{}});function v(l){return a.Xb(0,[(l()(),a.Vb(0,null,["",""]))],null,function(l,n){l(n,0,0,n.parent.context.$implicit.name)})}function j(l){return a.Xb(0,[(l()(),a.Eb(0,16777216,null,null,1,"wormhole",[],null,null,null,null,null)),a.Db(1,671744,null,0,t.a,[a.db],{target:[0,"target"]},null),(l()(),a.vb(0,null,null,0))],function(l,n){l(n,1,0,n.parent.context.$implicit.content)},null)}function g(l){return a.Xb(0,[(l()(),a.Eb(0,0,null,null,2,"div",[],null,null,null,null,null)),(l()(),a.Eb(1,0,null,null,1,"pre",[],null,null,null,null,null)),(l()(),a.Vb(2,null,["",""]))],null,function(l,n){l(n,2,0,n.parent.context.$implicit.content)})}function m(l){return a.Xb(0,[(l()(),a.Eb(0,0,null,null,0,"div",[],[[8,"innerHTML",1]],null,null,null,null))],null,function(l,n){l(n,0,0,n.parent.context.$implicit.content)})}function d(l){return a.Xb(0,[(l()(),a.Eb(0,0,null,null,0,"div",[["class","markdown-body"]],[[8,"innerHTML",1]],null,null,null,null))],null,function(l,n){l(n,0,0,n.parent.context.$implicit.content)})}function f(l){return a.Xb(0,[(l()(),a.Eb(0,0,null,null,0,"pre",[],[[8,"innerHTML",1]],null,null,null,null))],null,function(l,n){l(n,0,0,n.parent.context.$implicit.content)})}function y(l){return a.Xb(0,[(l()(),a.Eb(0,0,null,null,14,"vcl-tab",[],null,null,null,e.b,e.a)),a.Db(1,49152,[[1,4]],1,u.a,[],null,null),a.Tb(335544320,2,{label:0}),(l()(),a.vb(0,[[2,2]],0,1,null,v)),a.Db(4,16384,null,0,u.b,[],null,null),(l()(),a.vb(16777216,null,0,1,null,j)),a.Db(6,16384,null,0,c.l,[a.db,a.Z],{ngIf:[0,"ngIf"]},null),(l()(),a.vb(16777216,null,0,1,null,g)),a.Db(8,16384,null,0,c.l,[a.db,a.Z],{ngIf:[0,"ngIf"]},null),(l()(),a.vb(16777216,null,0,1,null,m)),a.Db(10,16384,null,0,c.l,[a.db,a.Z],{ngIf:[0,"ngIf"]},null),(l()(),a.vb(16777216,null,0,1,null,d)),a.Db(12,16384,null,0,c.l,[a.db,a.Z],{ngIf:[0,"ngIf"]},null),(l()(),a.vb(16777216,null,0,1,null,f)),a.Db(14,16384,null,0,c.l,[a.db,a.Z],{ngIf:[0,"ngIf"]},null)],function(l,n){l(n,6,0,"component"===n.context.$implicit.type),l(n,8,0,"text"===n.context.$implicit.type),l(n,10,0,"html"===n.context.$implicit.type),l(n,12,0,"md"===n.context.$implicit.type),l(n,14,0,"pre"===n.context.$implicit.type)},null)}function E(l){return a.Xb(0,[(l()(),a.Eb(0,0,null,null,5,"div",[],null,null,null,null,null)),(l()(),a.Eb(1,0,null,null,4,"vcl-tab-nav",[["borders","true"]],null,null,null,p.b,p.a)),a.Db(2,1228800,null,1,o.a,[],{borders:[0,"borders"]},null),a.Tb(603979776,1,{tabs:1}),(l()(),a.vb(16777216,null,0,1,null,y)),a.Db(5,278528,null,0,c.k,[a.db,a.Z,a.z],{ngForOf:[0,"ngForOf"]},null)],function(l,n){var s=n.component;l(n,2,0,"true"),l(n,5,0,s.tabs)},null)}function T(l){return a.Xb(0,[(l()(),a.Eb(0,0,null,null,1,"h2",[["class","vclArticleHeader"]],null,null,null,null,null)),(l()(),a.Vb(1,null,[" ",""])),(l()(),a.vb(16777216,null,null,1,null,E)),a.Db(3,16384,null,0,c.l,[a.db,a.Z],{ngIf:[0,"ngIf"]},null)],function(l,n){l(n,3,0,n.component.tabs.length>0)},function(l,n){l(n,1,0,n.component.title)})}var O=a.Ab("ng-component",r.a,function(l){return a.Xb(0,[(l()(),a.Eb(0,0,null,null,1,"ng-component",[],null,null,null,T,h)),a.Db(1,114688,null,0,r.a,[i.a,b.c],null,null)],function(l,n){l(n,1,0)},null)},{},{},[])},424:function(l,n,s){"use strict";s.d(n,"a",function(){return a});s(420);var a=function(){return function(){}}()},425:function(l,n,s){"use strict";s.d(n,"a",function(){return a});var a=function(){return function(){}}()},426:function(l,n,s){"use strict";s.d(n,"a",function(){return e}),s.d(n,"b",function(){return c});var a=s(0),t=s(421),e=a.Cb({encapsulation:2,styles:[],data:{}});function u(l){return a.Xb(0,[a.Nb(null,0),(l()(),a.vb(0,null,null,0))],null,null)}function c(l){return a.Xb(0,[a.Tb(402653184,1,{content:0}),(l()(),a.vb(0,[[1,2]],null,0,null,u))],null,null)}t.a},427:function(l,n,s){"use strict";s.d(n,"a",function(){return c}),s.d(n,"b",function(){return o});var a=s(0),t=s(196),e=s(3),u=s(422),c=a.Cb({encapsulation:2,styles:[],data:{}});function p(l){return a.Xb(0,[(l()(),a.Eb(0,0,null,null,3,"div",[["role","tab"]],[[8,"className",0],[2,"vclDisabled",null],[2,"vclSelected",null],[2,"aria-selected",null]],[[null,"click"]],function(l,n,s){var a=!0,t=l.component;"click"===n&&(a=!1!==t.onTabClick(l.context.$implicit)&&a);return a},null,null)),(l()(),a.Eb(1,0,null,null,2,"span",[["class","vclTabLabel"]],null,null,null,null,null)),(l()(),a.Eb(2,16777216,null,null,1,"wormhole",[],null,null,null,null,null)),a.Db(3,671744,null,0,t.a,[a.db],{target:[0,"target"]},null)],function(l,n){l(n,3,0,n.context.$implicit.label)},function(l,n){var s=n.component;l(n,0,0,a.Gb(1,"vclTab ",n.context.$implicit.tabClass,""),n.context.$implicit.disabled,s.selectedTabIndex===n.context.index,s.selectedTabIndex===n.context.index)})}function o(l){return a.Xb(0,[a.Tb(402653184,1,{tabContent:0}),(l()(),a.Eb(1,0,null,null,8,"div",[],[[8,"className",0],[2,"vclTabsLeft",null],[2,"vclTabsRight",null]],null,null,null,null)),(l()(),a.Eb(2,0,null,null,2,"div",[["role","tablist"]],[[8,"className",0],[2,"vclTabStyleUni",null]],null,null,null,null)),(l()(),a.vb(16777216,null,null,1,null,p)),a.Db(4,278528,null,0,e.k,[a.db,a.Z,a.z],{ngForOf:[0,"ngForOf"]},null),(l()(),a.Eb(5,0,null,null,4,"div",[],[[4,"display",null],[8,"className",0],[2,"vclNoBorder",null]],null,null,null,null)),(l()(),a.Eb(6,0,null,null,1,"div",[["class","vclTabPanel"],["role","tabpanel"]],null,null,null,null,null)),(l()(),a.Eb(7,16777216,[[1,3],["tabContent",1]],null,0,"div",[],null,null,null,null,null)),(l()(),a.Eb(8,0,null,null,1,"div",[["class","vclTabPanel"],["role","tabpanel"]],null,null,null,null,null)),a.Nb(null,0)],function(l,n){l(n,4,0,n.component.tabs)},function(l,n){var s=n.component;l(n,1,0,a.Gb(1,"vclTabbable ",s.tabbableClass,""),"left"===s.layout,"right"===s.layout),l(n,2,0,a.Gb(1,"vclTabs ",s.tabsClass,""),!!s.borders),l(n,5,0,!0===s.hideContent?"none":null,a.Gb(1,"vclTabContent ",s.tabContentClass,""),!s.borders)})}u.a},428:function(l,n,s){"use strict";s.d(n,"b",function(){return a}),s.d(n,"a",function(){return t});var a=function(){function l(){this.disabled=!1}return Object.defineProperty(l.prototype,"isDisabled",{get:function(){return this.disabled},enumerable:!0,configurable:!0}),Object.defineProperty(l.prototype,"attrDisabled",{get:function(){return!!this.disabled||null},enumerable:!0,configurable:!0}),l}(),t=function(){function l(l){this.elRef=l}return l.prototype.onFocus=function(){this.elRef.nativeElement.select()},l}()},431:function(l,n,s){"use strict";s.d(n,"a",function(){return a});var a=function(){return function(){}}()},532:function(l,n){l.exports='<h1 id="vcl-toolbar">vcl-toolbar</h1>\n<h2 id="usage">Usage</h2>\n<pre class="hljs"><span class="hljs-keyword">import</span> { VCLToolbarModule } <span class="hljs-keyword">from</span> <span class="hljs-string">&apos;@ng-vcl/ng-vcl&apos;</span>;\n\n@NgModule({\n  <span class="hljs-attr">imports</span>: [ VCLToolbarModule ],\n  ...\n})\n<span class="hljs-keyword">export</span> <span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">AppComponent</span> </span>{}</pre>\n<pre class="hljs"><span class="hljs-tag">&lt;<span class="hljs-name">vcl-toolbar</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">nav</span> <span class="hljs-attr">vcl-navigation</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;horizontal&quot;</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">vcl-navitem</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Link 1&quot;</span> <span class="hljs-attr">prepIcon</span>=<span class="hljs-string">&quot;fa:home&quot;</span> [<span class="hljs-attr">route</span>]=<span class="hljs-string">&quot;[&apos;#&apos;]&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vcl-navitem</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">vcl-navitem</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Link 2&quot;</span> <span class="hljs-attr">prepIcon</span>=<span class="hljs-string">&quot;fa:envelope&quot;</span> [<span class="hljs-attr">route</span>]=<span class="hljs-string">&quot;[&apos;#&apos;]&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vcl-navitem</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">nav</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">vcl-toolbar</span>&gt;</span></pre>\n<h3 id="api">API</h3>\n<h4 id="attributes">Attributes</h4>\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Type</th>\n<th>Default</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody><tr>\n<td><code>ariaLevel</code></td>\n<td>number</td>\n<td>1</td>\n<td>&#xA0;</td>\n</tr>\n</tbody></table>\n'},533:function(l,n){l.exports='<span class="hljs-tag">&lt;<span class="hljs-name">link</span> <span class="hljs-attr">rel</span>=<span class="hljs-string">"stylesheet"</span> <span class="hljs-attr">href</span>=<span class="hljs-string">"https://use.fontawesome.com/releases/v5.3.1/css/all.css"</span> <span class="hljs-attr">integrity</span>=<span class="hljs-string">"sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU"</span> <span class="hljs-attr">crossorigin</span>=<span class="hljs-string">"anonymous"</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">h2</span>&gt;</span>Features<span class="hljs-tag">&lt;/<span class="hljs-name">h2</span>&gt;</span>\n\nMultiple level toolbars can be provided using <span class="hljs-tag">&lt;<span class="hljs-name">code</span>&gt;</span>ariaLevel<span class="hljs-tag">&lt;/<span class="hljs-name">code</span>&gt;</span> attribute. Defaults to 1.\n\n<span class="hljs-tag">&lt;<span class="hljs-name">h2</span>&gt;</span>Examples<span class="hljs-tag">&lt;/<span class="hljs-name">h2</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">h3</span>&gt;</span>Toolbar with logo, navigation and buttons<span class="hljs-tag">&lt;/<span class="hljs-name">h3</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">vcl-toolbar</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">a</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"vclLayoutHorizontal vclLayoutCenter"</span> <span class="hljs-attr">href</span>=<span class="hljs-string">"#"</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">img</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"vclResponsiveImage vclLogo"</span> <span class="hljs-attr">role</span>=<span class="hljs-string">"presentation"</span> <span class="hljs-attr">src</span>=<span class="hljs-string">"https://cdn.rawgit.com/vcl/vcl/master/gfx/vcl_logo_square-bw.svg"</span> <span class="hljs-attr">style</span>=<span class="hljs-string">"max-width: 3em;"</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">h1</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"vclToolbarTitle"</span>&gt;</span>App Name<span class="hljs-tag">&lt;/<span class="hljs-name">h1</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">a</span>&gt;</span>\n\n  <span class="hljs-tag">&lt;<span class="hljs-name">nav</span> <span class="hljs-attr">vcl-navigation</span> #<span class="hljs-attr">nav1</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"horizontal"</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">vcl-navitem</span> <span class="hljs-attr">label</span>=<span class="hljs-string">"Link 1"</span> <span class="hljs-attr">prepIcon</span>=<span class="hljs-string">"fa:home"</span> [<span class="hljs-attr">route</span>]=<span class="hljs-string">"[\'#\']"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vcl-navitem</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">vcl-navitem</span> <span class="hljs-attr">label</span>=<span class="hljs-string">"Link 2"</span> <span class="hljs-attr">prepIcon</span>=<span class="hljs-string">"fa:envelope"</span> [<span class="hljs-attr">route</span>]=<span class="hljs-string">"[\'#\']"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vcl-navitem</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">nav</span>&gt;</span>\n\n  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"vclLayoutHorizontal vclLayoutCenter"</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">vcl-button</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"vclTransparent"</span> <span class="hljs-attr">appIcon</span>=<span class="hljs-string">"fa:envelope"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">vcl-button</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"vclTransparent"</span> <span class="hljs-attr">appIcon</span>=<span class="hljs-string">"fa:user"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">vcl-toolbar</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">h3</span>&gt;</span>Toolbar with embedded inline input<span class="hljs-tag">&lt;/<span class="hljs-name">h3</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">vcl-toolbar</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">vcl-button</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"vclTransparent"</span> <span class="hljs-attr">appIcon</span>=<span class="hljs-string">"fa:navicon"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>\n\n  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"vclInputGroupEmb"</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"vclPrepended"</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">i</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"vclIcon fa fa-search"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">i</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">input</span> <span class="hljs-attr">vcl-input</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">"Search"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"vclPrepItem"</span>/&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n\n  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"vclLayoutHorizontal vclLayoutCenter"</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">vcl-button</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"vclTransparent"</span> <span class="hljs-attr">appIcon</span>=<span class="hljs-string">"fa:user"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">vcl-button</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"vclTransparent"</span> <span class="hljs-attr">appIcon</span>=<span class="hljs-string">"fas fa-plus"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">vcl-toolbar</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">h3</span>&gt;</span>Second level toolbar with title in the middle<span class="hljs-tag">&lt;/<span class="hljs-name">h3</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">vcl-toolbar</span> [<span class="hljs-attr">ariaLevel</span>]=<span class="hljs-string">"2"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"vclLayoutCenter"</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">vcl-button</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"vclTransparent"</span> <span class="hljs-attr">appIcon</span>=<span class="hljs-string">"fa:navicon"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>Level 2 Toolbar Title<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">vcl-button</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"vclTransparent"</span> <span class="hljs-attr">appIcon</span>=<span class="hljs-string">"fas fa-plus"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">vcl-toolbar</span>&gt;</span>\n'},534:function(l,n){l.exports='<span class="hljs-keyword">import</span> { Component, OnInit } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/core\'</span>;\n\n<span class="hljs-meta">@Component</span>({\n  templateUrl: <span class="hljs-string">\'demo.component.html\'</span>\n})\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> ToolbarDemoComponent {\n\n}\n'}}]);