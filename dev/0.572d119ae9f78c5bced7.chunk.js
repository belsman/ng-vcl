(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{196:function(n,t,e){"use strict";e.d(t,"a",function(){return i});var l=e(25),u=function(){var n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,t){n.__proto__=t}||function(n,t){for(var e in t)t.hasOwnProperty(e)&&(n[e]=t[e])};return function(t,e){function l(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(l.prototype=e.prototype,new l)}}(),i=function(n){function t(t){return n.call(this,t)||this}return u(t,n),Object.defineProperty(t.prototype,"isConnected",{get:function(){return!!this.wormhole&&this.wormhole.isConnected},enumerable:!0,configurable:!0}),t.prototype.ngOnChanges=function(n){var t="attrs"in n&&n.attrs.currentValue||void 0;if("target"in n){this.clearWormholes();var e=n.target.currentValue;e&&(this.wormhole=this.connectWormhole(e,t))}else t&&this.wormhole&&this.wormhole.setAttributes(t)},t.prototype.ngOnDestroy=function(){this.wormhole&&this.wormhole.disconnect()},t}(l.b)},420:function(n,t,e){"use strict";e.d(t,"a",function(){return l});var l=function(){function n(n,t){this.activatedRoute=n,this.sanitizer=t,this.tabs=[]}return n.prototype.ngOnInit=function(){var n=this,t=this.activatedRoute.snapshot.data.demo();t?(this.title=t.label,t.tabs?this.tabs=Object.keys(t.tabs).map(function(e){var l,u;return"object"==typeof t.tabs[e]&&t.tabs[e]?u="pre"===(l=t.tabs[e].type)||"html"===l||"md"===l?n.sanitizer.bypassSecurityTrustHtml(t.tabs[e].content):t.tabs[e].content:"function"==typeof t.tabs[e]&&(l="component",u=t.tabs[e]),{name:e,content:u,type:l}}):this.tabs=[]):(this.title="ng-vcl",this.tabs=[])},n}()},421:function(n,t,e){"use strict";e.d(t,"b",function(){return l}),e.d(t,"a",function(){return u});var l=function(){return function(){}}(),u=function(){return function(){this.disabled=!1,this.tabClass=""}}()},422:function(n,t,e){"use strict";e.d(t,"a",function(){return r});var l=e(25),u=e(0),i=e(421),r=function(){function n(){this.layout="",this.tabbableClass="",this.tabsClass="",this.tabContentClass="",this.hideContent=!1,this.borders=!1,this.selectedTabIndex=0,this.selectedTabIndexChange$=new u.q}return Object.defineProperty(n.prototype,"tabContent",{set:function(n){n&&(this.wormholeHost=new l.b(n))},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"selectedTabIndexChange",{get:function(){return this.selectedTabIndexChange$.asObservable()},enumerable:!0,configurable:!0}),n.prototype.selectTab=function(n){if(this.tabs){var t,e,l=this.tabs.toArray();n instanceof i.a?(t=l.indexOf(n),e=n):"number"==typeof n&&l[n]?e=l[t=n]:(t=-1,e=null),t>=0&&e instanceof i.a&&!e.disabled&&(this.wormholeHost&&(this.wormholeHost.clearWormholes(),this.wormholeHost.connectWormhole(e.content)),this.selectedTabIndex=t)}},n.prototype.onTabClick=function(n){this.selectTab(n),this.selectedTabIndexChange$.emit(this.selectedTabIndex)},n.prototype.ngAfterContentInit=function(){this.selectTab(this.selectedTabIndex)},n.prototype.ngOnDestroy=function(){this.wormholeHost&&this.wormholeHost.clearWormholes()},n}()},423:function(n,t,e){"use strict";e.d(t,"a",function(){return x});var l=e(0),u=e(196),i=e(426),r=e(421),o=e(3),s=e(427),a=e(422),c=e(420),b=e(4),f=e(6),h=l.Cb({encapsulation:2,styles:[],data:{}});function d(n){return l.Xb(0,[(n()(),l.Vb(0,null,["",""]))],null,function(n,t){n(t,0,0,t.parent.context.$implicit.name)})}function p(n){return l.Xb(0,[(n()(),l.Eb(0,16777216,null,null,1,"wormhole",[],null,null,null,null,null)),l.Db(1,671744,null,0,u.a,[l.db],{target:[0,"target"]},null),(n()(),l.vb(0,null,null,0))],function(n,t){n(t,1,0,t.parent.context.$implicit.content)},null)}function m(n){return l.Xb(0,[(n()(),l.Eb(0,0,null,null,2,"div",[],null,null,null,null,null)),(n()(),l.Eb(1,0,null,null,1,"pre",[],null,null,null,null,null)),(n()(),l.Vb(2,null,["",""]))],null,function(n,t){n(t,2,0,t.parent.context.$implicit.content)})}function v(n){return l.Xb(0,[(n()(),l.Eb(0,0,null,null,0,"div",[],[[8,"innerHTML",1]],null,null,null,null))],null,function(n,t){n(t,0,0,t.parent.context.$implicit.content)})}function y(n){return l.Xb(0,[(n()(),l.Eb(0,0,null,null,0,"div",[["class","markdown-body"]],[[8,"innerHTML",1]],null,null,null,null))],null,function(n,t){n(t,0,0,t.parent.context.$implicit.content)})}function g(n){return l.Xb(0,[(n()(),l.Eb(0,0,null,null,0,"pre",[],[[8,"innerHTML",1]],null,null,null,null))],null,function(n,t){n(t,0,0,t.parent.context.$implicit.content)})}function C(n){return l.Xb(0,[(n()(),l.Eb(0,0,null,null,14,"vcl-tab",[],null,null,null,i.b,i.a)),l.Db(1,49152,[[1,4]],1,r.a,[],null,null),l.Tb(335544320,2,{label:0}),(n()(),l.vb(0,[[2,2]],0,1,null,d)),l.Db(4,16384,null,0,r.b,[],null,null),(n()(),l.vb(16777216,null,0,1,null,p)),l.Db(6,16384,null,0,o.l,[l.db,l.Z],{ngIf:[0,"ngIf"]},null),(n()(),l.vb(16777216,null,0,1,null,m)),l.Db(8,16384,null,0,o.l,[l.db,l.Z],{ngIf:[0,"ngIf"]},null),(n()(),l.vb(16777216,null,0,1,null,v)),l.Db(10,16384,null,0,o.l,[l.db,l.Z],{ngIf:[0,"ngIf"]},null),(n()(),l.vb(16777216,null,0,1,null,y)),l.Db(12,16384,null,0,o.l,[l.db,l.Z],{ngIf:[0,"ngIf"]},null),(n()(),l.vb(16777216,null,0,1,null,g)),l.Db(14,16384,null,0,o.l,[l.db,l.Z],{ngIf:[0,"ngIf"]},null)],function(n,t){n(t,6,0,"component"===t.context.$implicit.type),n(t,8,0,"text"===t.context.$implicit.type),n(t,10,0,"html"===t.context.$implicit.type),n(t,12,0,"md"===t.context.$implicit.type),n(t,14,0,"pre"===t.context.$implicit.type)},null)}function k(n){return l.Xb(0,[(n()(),l.Eb(0,0,null,null,5,"div",[],null,null,null,null,null)),(n()(),l.Eb(1,0,null,null,4,"vcl-tab-nav",[["borders","true"]],null,null,null,s.b,s.a)),l.Db(2,1228800,null,1,a.a,[],{borders:[0,"borders"]},null),l.Tb(603979776,1,{tabs:1}),(n()(),l.vb(16777216,null,0,1,null,C)),l.Db(5,278528,null,0,o.k,[l.db,l.Z,l.z],{ngForOf:[0,"ngForOf"]},null)],function(n,t){var e=t.component;n(t,2,0,"true"),n(t,5,0,e.tabs)},null)}function I(n){return l.Xb(0,[(n()(),l.Eb(0,0,null,null,1,"h2",[["class","vclArticleHeader"]],null,null,null,null,null)),(n()(),l.Vb(1,null,[" ",""])),(n()(),l.vb(16777216,null,null,1,null,k)),l.Db(3,16384,null,0,o.l,[l.db,l.Z],{ngIf:[0,"ngIf"]},null)],function(n,t){n(t,3,0,t.component.tabs.length>0)},function(n,t){n(t,1,0,t.component.title)})}var x=l.Ab("ng-component",c.a,function(n){return l.Xb(0,[(n()(),l.Eb(0,0,null,null,1,"ng-component",[],null,null,null,I,h)),l.Db(1,114688,null,0,c.a,[b.a,f.c],null,null)],function(n,t){n(t,1,0)},null)},{},{},[])},424:function(n,t,e){"use strict";e.d(t,"a",function(){return l});e(420);var l=function(){return function(){}}()},425:function(n,t,e){"use strict";e.d(t,"a",function(){return l});var l=function(){return function(){}}()},426:function(n,t,e){"use strict";e.d(t,"a",function(){return i}),e.d(t,"b",function(){return o});var l=e(0),u=e(421),i=l.Cb({encapsulation:2,styles:[],data:{}});function r(n){return l.Xb(0,[l.Nb(null,0),(n()(),l.vb(0,null,null,0))],null,null)}function o(n){return l.Xb(0,[l.Tb(402653184,1,{content:0}),(n()(),l.vb(0,[[1,2]],null,0,null,r))],null,null)}u.a},427:function(n,t,e){"use strict";e.d(t,"a",function(){return o}),e.d(t,"b",function(){return a});var l=e(0),u=e(196),i=e(3),r=e(422),o=l.Cb({encapsulation:2,styles:[],data:{}});function s(n){return l.Xb(0,[(n()(),l.Eb(0,0,null,null,3,"div",[["role","tab"]],[[8,"className",0],[2,"vclDisabled",null],[2,"vclSelected",null],[2,"aria-selected",null]],[[null,"click"]],function(n,t,e){var l=!0,u=n.component;"click"===t&&(l=!1!==u.onTabClick(n.context.$implicit)&&l);return l},null,null)),(n()(),l.Eb(1,0,null,null,2,"span",[["class","vclTabLabel"]],null,null,null,null,null)),(n()(),l.Eb(2,16777216,null,null,1,"wormhole",[],null,null,null,null,null)),l.Db(3,671744,null,0,u.a,[l.db],{target:[0,"target"]},null)],function(n,t){n(t,3,0,t.context.$implicit.label)},function(n,t){var e=t.component;n(t,0,0,l.Gb(1,"vclTab ",t.context.$implicit.tabClass,""),t.context.$implicit.disabled,e.selectedTabIndex===t.context.index,e.selectedTabIndex===t.context.index)})}function a(n){return l.Xb(0,[l.Tb(402653184,1,{tabContent:0}),(n()(),l.Eb(1,0,null,null,8,"div",[],[[8,"className",0],[2,"vclTabsLeft",null],[2,"vclTabsRight",null]],null,null,null,null)),(n()(),l.Eb(2,0,null,null,2,"div",[["role","tablist"]],[[8,"className",0],[2,"vclTabStyleUni",null]],null,null,null,null)),(n()(),l.vb(16777216,null,null,1,null,s)),l.Db(4,278528,null,0,i.k,[l.db,l.Z,l.z],{ngForOf:[0,"ngForOf"]},null),(n()(),l.Eb(5,0,null,null,4,"div",[],[[4,"display",null],[8,"className",0],[2,"vclNoBorder",null]],null,null,null,null)),(n()(),l.Eb(6,0,null,null,1,"div",[["class","vclTabPanel"],["role","tabpanel"]],null,null,null,null,null)),(n()(),l.Eb(7,16777216,[[1,3],["tabContent",1]],null,0,"div",[],null,null,null,null,null)),(n()(),l.Eb(8,0,null,null,1,"div",[["class","vclTabPanel"],["role","tabpanel"]],null,null,null,null,null)),l.Nb(null,0)],function(n,t){n(t,4,0,t.component.tabs)},function(n,t){var e=t.component;n(t,1,0,l.Gb(1,"vclTabbable ",e.tabbableClass,""),"left"===e.layout,"right"===e.layout),n(t,2,0,l.Gb(1,"vclTabs ",e.tabsClass,""),!!e.borders),n(t,5,0,!0===e.hideContent?"none":null,l.Gb(1,"vclTabContent ",e.tabContentClass,""),!e.borders)})}r.a},432:function(n,t,e){"use strict";e.d(t,"b",function(){return i}),e.d(t,"a",function(){return r});var l=e(0),u=e(42),i=function(){function n(n){this.metalist=n,this.disabled=!1}return Object.defineProperty(n.prototype,"marked",{get:function(){return this.metalist.isMarked(this)},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"selected",{get:function(){return this.metalist.isSelected(this)},enumerable:!0,configurable:!0}),n}(),r=(u.l,function(){function n(n){this.cdRef=n,this.mode="single",this.change=new l.q,this.itemsChange=new l.q,this.onChange=function(){},this.onTouched=function(){}}return Object.defineProperty(n.prototype,"itemsArray",{get:function(){return this.items?this.items.toArray():[]},enumerable:!0,configurable:!0}),n.prototype.isMarked=function(n){return this.markedItem===n},n.prototype.isSelected=function(n){var t=this.value;return"multiple"===this.mode&&Array.isArray(t)?t.includes(n.value):n.value===t},Object.defineProperty(n.prototype,"selectedItem",{get:function(){return this.selectedItems[0]||void 0},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"selectedItems",{get:function(){return this.itemsArray.filter(function(n){return n.selected})},enumerable:!0,configurable:!0}),n.prototype.ngAfterContentInit=function(){var n=this;this.itemsSub=this.items&&this.items.changes.subscribe(function(){n.itemsChange.emit()})},n.prototype.ngOnDestroy=function(){this.itemsSub&&this.itemsSub.unsubscribe()},n.prototype.triggerChange=function(){this.itemsChange.emit(),this.change.emit(this.value),this.onChange(this.value)},n.prototype.select=function(n){if(void 0===n)return this.selectMarked();if("number"==typeof n&&(n=this.itemsArray[n]),n instanceof i){if(n.disabled)return;if("multiple"===this.mode){var t=this.itemsArray.filter(function(n){return n.selected});if(n.selected){var e=n.value;Array.isArray(this.value)||(this.value=[]),this.value=this.value.filter(function(n){return n!==e})}else{var l="number"==typeof this.maxSelectableItems?this.maxSelectableItems:1/0;t.length<l&&(Array.isArray(this.value)||(this.value=[]),this.value.push(n.value))}}else this.value=n.value;this.triggerChange(),this.cdRef.markForCheck()}},n.prototype.deselect=function(n){if("number"==typeof n&&(n=this.itemsArray[n]),n instanceof i){var t=n.value;"single"===this.mode&&this.value===t?(this.value=void 0,this.triggerChange()):"multiple"===this.mode&&(Array.isArray(this.value)||(this.value=[]),this.value=this.value.filter(function(n){return n!==t}),this.triggerChange()),this.cdRef.markForCheck()}},n.prototype.determineMarkedIndex=function(){var n=this.itemsArray.findIndex(function(n){return n.marked});return n>=0?n:this.itemsArray.findIndex(function(n){return n.selected})},n.prototype.mark=function(n){"number"==typeof n&&(n=this.itemsArray[n]),n instanceof i&&(this.markedItem=n,this.itemsChange.emit(),this.cdRef.markForCheck())},n.prototype.markNext=function(){var n=this,t=this.itemsArray,e=this.determineMarkedIndex()+1;e>=t.length&&(e=t.length-1),t.every(function(t,l){var u=l>=e;return!(!t.disabled&&u)||(n.markedItem=t,!1)}),this.itemsChange.emit(),this.cdRef.markForCheck()},n.prototype.markPrev=function(){var n=this,t=this.itemsArray.reverse(),e=this.determineMarkedIndex()-1;e<=0&&t.length>0&&(e=0),e=t.length-1-e,t.every(function(t,l){var u=l>=e;return!(!t.disabled&&u)||(n.markedItem=t,!1)}),this.itemsChange.emit(),this.cdRef.markForCheck()},n.prototype.selectMarked=function(){this.markedItem&&(this.select(this.markedItem),this.cdRef.markForCheck())},n.prototype.setValue=function(n){this.value=n,this.cdRef.markForCheck()},n.prototype.writeValue=function(n){this.setValue(n)},n.prototype.registerOnChange=function(n){this.onChange=n},n.prototype.registerOnTouched=function(n){this.onTouched=n},n}())},442:function(n,t,e){"use strict";e.d(t,"a",function(){return l});var l=function(){return function(){}}()},495:function(n,t,e){"use strict";e.d(t,"b",function(){return r}),e.d(t,"d",function(){return o}),e.d(t,"a",function(){return s}),e.d(t,"c",function(){return a});var l=e(0),u=e(432),i=e(42),r=l.Cb({encapsulation:2,styles:[],data:{}});function o(n){return l.Xb(0,[l.Nb(null,0)],null,null)}u.b;var s=l.Cb({encapsulation:2,styles:[],data:{}});function a(n){return l.Xb(2,[l.Nb(null,0)],null,null)}u.a}}]);