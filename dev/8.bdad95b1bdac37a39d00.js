(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{OR7d:function(s,l){s.exports='<h1 id="vcl-autocomplete">vcl-autocomplete</h1>\n<h2 id="usage">Usage</h2>\n<pre class="hljs"><span class="hljs-tag">&lt;<span class="hljs-name">vcl-embedded-input-group</span> <span class="hljs-attr">prepIcon</span>=<span class="hljs-string">&quot;fas:search&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">input</span> <span class="hljs-attr">vcl-input</span> <span class="hljs-attr">vcl-embedded-input</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;Search&quot;</span> [<span class="hljs-attr">vcl-input-autocomplete</span>]=<span class="hljs-string">&quot;acCountry&quot;</span> /&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">vcl-embedded-input-group</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">vcl-autocomplete</span> #<span class="hljs-attr">acCountry</span>=<span class="hljs-string">&quot;vclAutocomplete&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">vcl-autocomplete-option</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;header&quot;</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Europe&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vcl-autocomplete-option</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">vcl-autocomplete-option</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;France&quot;</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;fr&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vcl-autocomplete-option</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">vcl-autocomplete-option</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Germany&quot;</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;de&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vcl-autocomplete-option</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">vcl-autocomplete-option</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Greece&quot;</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;gr&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vcl-autocomplete-option</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">vcl-autocomplete-content</span>&gt;</span>Custom content<span class="hljs-tag">&lt;/<span class="hljs-name">vcl-autocomplete-content</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">vcl-autocomplete</span>&gt;</span>\n</pre>\n<h3 id="vcl-autocomplete-option-attributes">vcl-autocomplete-option attributes</h3>\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Type</th>\n<th>Default</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody><tr>\n<td><code>value</code></td>\n<td>any</td>\n<td></td>\n<td>The items value</td>\n</tr>\n<tr>\n<td><code>label</code></td>\n<td>string</td>\n<td></td>\n<td>The items label</td>\n</tr>\n<tr>\n<td><code>sublabel</code></td>\n<td>string</td>\n<td></td>\n<td>The items sub label</td>\n</tr>\n</tbody></table>\n'},i1aV:function(s,l,n){"use strict";n.r(l);var a=n("CcnG"),t=n("26FU"),p=n("F/XL"),e=n("mrSG"),c=n("FFOo"),o=n("T1DM"),u=function(){function s(s,l){this.dueTime=s,this.scheduler=l}return s.prototype.call=function(s,l){return l.subscribe(new h(s,this.dueTime,this.scheduler))},s}(),h=function(s){function l(l,n,a){var t=s.call(this,l)||this;return t.dueTime=n,t.scheduler=a,t.debouncedSubscription=null,t.lastValue=null,t.hasValue=!1,t}return e.d(l,s),l.prototype._next=function(s){this.clearDebounce(),this.lastValue=s,this.hasValue=!0,this.add(this.debouncedSubscription=this.scheduler.schedule(i,this.dueTime,this))},l.prototype._complete=function(){this.debouncedNext(),this.destination.complete()},l.prototype.debouncedNext=function(){if(this.clearDebounce(),this.hasValue){var s=this.lastValue;this.lastValue=null,this.hasValue=!1,this.destination.next(s)}},l.prototype.clearDebounce=function(){var s=this.debouncedSubscription;null!==s&&(this.remove(s),s.unsubscribe(),this.debouncedSubscription=null)},l}(c.a);function i(s){s.debouncedNext()}var r=n("15JJ"),b=n("67Y/"),j=n("9Z1F"),g=n("p0Sj"),m="https://www.googleapis.com/books/v1/volumes",d=function(){function s(s){var l,n=this;this.http=s,this.booksInput$=new t.a(""),this.ac$=this.booksInput$.pipe((void 0===l&&(l=o.a),function(s){return s.lift(new u(200,l))}),Object(r.a)(function(s){return!s||s.length<2?Object(p.a)({state:"void",books:[]}):n.http.get(m+"?q="+s+"&projection=lite").pipe(Object(b.a)(function(s){return{state:"success",books:(s.items||[]).filter(function(s){return s.id&&s.volumeInfo&&s.volumeInfo.title}).map(function(s){return{id:s.id,title:s.volumeInfo.title}})}}),Object(j.a)(function(s){return Object(p.a)({state:"error",books:[]})}),Object(g.a)({state:"loading",books:[]}))}),Object(g.a)({state:"void",books:[]}))}return s.prototype.onChange=function(s){console.log(s)},s}(),v={demo:function(){return{label:"Input",tabs:{Demo:d,"README.md":{type:"md",content:n("OR7d")},"demo.component.html":{type:"pre",content:n("pKWc")},"demo.component.ts":{type:"pre",content:n("tYw5")}}}}},f=function(){return function(){}}(),y=n("pMnS"),k=n("8Ip6"),I=n("G6uX"),w=n("5cNt"),q=n("ZYjt"),A=n("Ip0R"),C=n("gIcY"),D=n("t/Na"),x=a.ob({encapsulation:2,styles:[],data:{}});function F(s){return a.Jb(0,[(s()(),a.qb(0,0,null,null,3,"vcl-autocomplete-content",[],null,null,null,I.ib,I.d)),a.pb(1,49152,[[9,4]],0,w.h,[],null,null),(s()(),a.qb(2,0,null,0,1,"vcl-busy-indicator",[["style","padding: 1em"]],null,null,null,I.jb,I.e)),a.pb(3,573440,null,0,w.j,[q.c],null,null)],null,null)}function S(s){return a.Jb(0,[(s()(),a.qb(0,0,null,null,1,"vcl-autocomplete-option",[],null,null,null,null,null)),a.pb(1,16384,[[8,4]],0,w.i,[],{value:[0,"value"],label:[1,"label"]},null)],function(s,l){s(l,1,0,l.context.$implicit.id,l.context.$implicit.title)},null)}function $(s){return a.Jb(0,[(s()(),a.qb(0,0,null,null,2,null,null,null,null,null,null,null)),(s()(),a.hb(16777216,null,null,1,null,S)),a.pb(2,278528,null,0,A.k,[a.P,a.M,a.t],{ngForOf:[0,"ngForOf"]},null),(s()(),a.hb(0,null,null,0))],function(s,l){s(l,2,0,l.parent.context.ngIf.books)},null)}function O(s){return a.Jb(0,[(s()(),a.qb(0,0,null,null,3,"vcl-autocomplete-content",[],null,null,null,I.ib,I.d)),a.pb(1,49152,[[9,4]],0,w.h,[],null,null),(s()(),a.qb(2,0,null,0,1,"div",[["style","padding: 1em"]],null,null,null,null,null)),(s()(),a.Hb(-1,null,["No books found"]))],null,null)}function T(s){return a.Jb(0,[(s()(),a.qb(0,0,null,null,6,null,null,null,null,null,null,null)),(s()(),a.hb(16777216,null,null,1,null,F)),a.pb(2,16384,null,0,A.l,[a.P,a.M],{ngIf:[0,"ngIf"]},null),(s()(),a.hb(16777216,null,null,1,null,$)),a.pb(4,16384,null,0,A.l,[a.P,a.M],{ngIf:[0,"ngIf"]},null),(s()(),a.hb(16777216,null,null,1,null,O)),a.pb(6,16384,null,0,A.l,[a.P,a.M],{ngIf:[0,"ngIf"]},null),(s()(),a.hb(0,null,null,0))],function(s,l){s(l,2,0,"loading"===l.context.ngIf.state),s(l,4,0,"success"===l.context.ngIf.state&&l.context.ngIf.books.length>0),s(l,6,0,"success"===l.context.ngIf.state&&0===l.context.ngIf.books.length)},null)}function E(s){return a.Jb(0,[(s()(),a.qb(0,0,null,null,1,"h3",[],null,null,null,null,null)),(s()(),a.Hb(-1,null,["vcl-input with fixed data"])),(s()(),a.qb(2,0,null,null,6,"vcl-embedded-input-group",[["prepIcon","fas:search"]],[[2,"vclInputGroupEmb",null],[4,"display",null]],null,null,I.dc,I.Y)),a.pb(3,704512,null,1,w.Xc,[],{prepIcon:[0,"prepIcon"]},null),a.Fb(603979776,1,{buttons:1}),(s()(),a.qb(5,0,null,0,3,"input",[["placeholder","Search"],["vcl-embedded-input-group",""],["vcl-input",""]],[[2,"vclInput",null],[2,"vclDisabled",null],[1,"disabled",0],[2,"vclDisabled",null],[1,"disabled",0],[2,"vclPrepItem",null],[2,"vclAppItem",null],[2,"vclDisabled",null],[1,"disabled",0]],[[null,"change"],[null,"focus"],[null,"input"],[null,"blur"],[null,"keyup"],[null,"keypress"]],function(s,l,n){var t=!0,p=s.component;return"focus"===l&&(t=!1!==a.Ab(s,8).onFocusOrInput()&&t),"input"===l&&(t=!1!==a.Ab(s,8).onFocusOrInput()&&t),"blur"===l&&(t=!1!==a.Ab(s,8).onBlur()&&t),"keyup"===l&&(t=!1!==a.Ab(s,8).onKeyUp(n)&&t),"keypress"===l&&(t=!1!==a.Ab(s,8).handleKeyPressEvent(n)&&t),"change"===l&&(t=!1!==p.onChange(n)&&t),t},null,null)),a.pb(6,16384,null,0,w.E,[],null,null),a.pb(7,16384,null,0,w.Yc,[[4,w.E],[1,w.Xc]],null,null),a.pb(8,671744,null,0,w.D,[a.k],{_ac:[0,"_ac"]},null),(s()(),a.qb(9,0,null,null,1,"h3",[],null,null,null,null,null)),(s()(),a.Hb(-1,null,["vcl-token-input with fixed data"])),(s()(),a.qb(11,0,null,null,7,"vcl-token-input-container",[],[[2,"vclInput",null],[2,"vclTokenInput",null],[2,"vclLayoutHorizontal",null],[2,"vclLayoutWrap",null],[1,"tabindex",0],[2,"vclDisabled",null]],[[null,"tokensChange"]],function(s,l,n){var a=!0;return"tokensChange"===l&&(a=!1!==s.component.onChange(n)&&a),a},I.Gb,I.B)),a.Eb(5120,null,C.l,function(s){return[s]},[w.ib]),a.pb(13,49152,null,2,w.ib,[a.k,a.h],null,{tokensChange:"tokensChange"}),a.Fb(335544320,2,{labelPre:0}),a.Fb(335544320,3,{labelPost:0}),(s()(),a.qb(16,0,null,0,2,"input",[["placeholder","Search for country to add"],["vcl-input",""]],[[2,"vclInput",null],[2,"vclDisabled",null],[1,"disabled",0],[2,"vclInput",null],[1,"flex",0],[2,"vclDisabled",null],[1,"disabled",0]],[[null,"input"],[null,"focus"],[null,"blur"],[null,"keydown"],[null,"keyup"]],function(s,l,n){var t=!0;return"input"===l&&(t=!1!==a.Ab(s,18).listenActivate()&&t),"focus"===l&&(t=!1!==a.Ab(s,18).listenActivate()&&t),"blur"===l&&(t=!1!==a.Ab(s,18).onBlur()&&t),"keydown"===l&&(t=!1!==a.Ab(s,18).onKeyDown(n)&&t),"keyup"===l&&(t=!1!==a.Ab(s,18).onKeyUp(n)&&t),t},null,null)),a.pb(17,16384,null,0,w.E,[],null,null),a.pb(18,671744,null,0,w.hb,[a.k,[3,w.ib]],{_ac:[0,"_ac"]},null),(s()(),a.qb(19,0,null,null,21,"vcl-autocomplete",[],null,null,null,I.hb,I.c)),a.pb(20,1753088,[["acCountry",4]],2,w.g,[],null,null),a.Fb(603979776,4,{items:1}),a.Fb(603979776,5,{content:1}),(s()(),a.qb(23,0,null,null,1,"vcl-autocomplete-option",[["label","Europe"],["type","header"]],null,null,null,null,null)),a.pb(24,16384,[[4,4]],0,w.i,[],{type:[0,"type"],label:[1,"label"]},null),(s()(),a.qb(25,0,null,null,1,"vcl-autocomplete-option",[["label","Greece"],["value","gr"]],null,null,null,null,null)),a.pb(26,16384,[[4,4]],0,w.i,[],{value:[0,"value"],label:[1,"label"]},null),(s()(),a.qb(27,0,null,null,1,"vcl-autocomplete-option",[["label","France"],["value","fr"]],null,null,null,null,null)),a.pb(28,16384,[[4,4]],0,w.i,[],{value:[0,"value"],label:[1,"label"]},null),(s()(),a.qb(29,0,null,null,1,"vcl-autocomplete-option",[["label","Germany"],["value","de"]],null,null,null,null,null)),a.pb(30,16384,[[4,4]],0,w.i,[],{value:[0,"value"],label:[1,"label"]},null),(s()(),a.qb(31,0,null,null,1,"vcl-autocomplete-option",[["label","The United Kingdom of Great Britain and Northern Ireland"],["value","uk"]],null,null,null,null,null)),a.pb(32,16384,[[4,4]],0,w.i,[],{value:[0,"value"],label:[1,"label"]},null),(s()(),a.qb(33,0,null,null,1,"vcl-autocomplete-option",[["label","Asia"],["type","header"]],null,null,null,null,null)),a.pb(34,16384,[[4,4]],0,w.i,[],{type:[0,"type"],label:[1,"label"]},null),(s()(),a.qb(35,0,null,null,1,"vcl-autocomplete-option",[["label","Japan"],["value","jp"]],null,null,null,null,null)),a.pb(36,16384,[[4,4]],0,w.i,[],{value:[0,"value"],label:[1,"label"]},null),(s()(),a.qb(37,0,null,null,1,"vcl-autocomplete-option",[["label","China"],["value","cn"]],null,null,null,null,null)),a.pb(38,16384,[[4,4]],0,w.i,[],{value:[0,"value"],label:[1,"label"]},null),(s()(),a.qb(39,0,null,null,1,"vcl-autocomplete-option",[["label","Thailand"],["value","th"]],null,null,null,null,null)),a.pb(40,16384,[[4,4]],0,w.i,[],{value:[0,"value"],label:[1,"label"]},null),(s()(),a.qb(41,0,null,null,1,"h3",[],null,null,null,null,null)),(s()(),a.Hb(-1,null,["vcl-token-input with async data"])),(s()(),a.qb(43,0,null,null,7,"vcl-token-input-container",[],[[2,"vclInput",null],[2,"vclTokenInput",null],[2,"vclLayoutHorizontal",null],[2,"vclLayoutWrap",null],[1,"tabindex",0],[2,"vclDisabled",null]],[[null,"tokensChange"]],function(s,l,n){var a=!0;return"tokensChange"===l&&(a=!1!==s.component.onChange(n)&&a),a},I.Gb,I.B)),a.Eb(5120,null,C.l,function(s){return[s]},[w.ib]),a.pb(45,49152,null,2,w.ib,[a.k,a.h],null,{tokensChange:"tokensChange"}),a.Fb(335544320,6,{labelPre:0}),a.Fb(335544320,7,{labelPost:0}),(s()(),a.qb(48,0,null,0,2,"input",[["placeholder","Search for books to add"],["vcl-input",""]],[[2,"vclInput",null],[2,"vclDisabled",null],[1,"disabled",0],[2,"vclInput",null],[1,"flex",0],[2,"vclDisabled",null],[1,"disabled",0]],[[null,"input"],[null,"autocompleteSelect"],[null,"focus"],[null,"blur"],[null,"keydown"],[null,"keyup"]],function(s,l,n){var t=!0,p=s.component;return"input"===l&&(t=!1!==a.Ab(s,50).listenActivate()&&t),"focus"===l&&(t=!1!==a.Ab(s,50).listenActivate()&&t),"blur"===l&&(t=!1!==a.Ab(s,50).onBlur()&&t),"keydown"===l&&(t=!1!==a.Ab(s,50).onKeyDown(n)&&t),"keyup"===l&&(t=!1!==a.Ab(s,50).onKeyUp(n)&&t),"input"===l&&(t=!1!==p.booksInput$.next(n.target.value)&&t),"autocompleteSelect"===l&&(t=!1!==p.booksInput$.next("")&&t),t},null,null)),a.pb(49,16384,null,0,w.E,[],null,null),a.pb(50,671744,null,0,w.hb,[a.k,[3,w.ib]],{_ac:[0,"_ac"]},{autocompleteSelect:"autocompleteSelect"}),(s()(),a.qb(51,0,null,null,6,"vcl-autocomplete",[],null,null,null,I.hb,I.c)),a.pb(52,1753088,[["acBooks",4]],2,w.g,[],null,null),a.Fb(603979776,8,{items:1}),a.Fb(603979776,9,{content:1}),(s()(),a.hb(16777216,null,null,2,null,T)),a.pb(56,16384,null,0,A.l,[a.P,a.M],{ngIf:[0,"ngIf"]},null),a.Cb(131072,A.b,[a.h])],function(s,l){var n=l.component;s(l,3,0,"fas:search"),s(l,8,0,a.Ab(l,20)),s(l,18,0,a.Ab(l,20)),s(l,24,0,"header","Europe"),s(l,26,0,"gr","Greece"),s(l,28,0,"fr","France"),s(l,30,0,"de","Germany"),s(l,32,0,"uk","The United Kingdom of Great Britain and Northern Ireland"),s(l,34,0,"header","Asia"),s(l,36,0,"jp","Japan"),s(l,38,0,"cn","China"),s(l,40,0,"th","Thailand"),s(l,50,0,a.Ab(l,52)),s(l,56,0,a.Ib(l,56,0,a.Ab(l,57).transform(n.ac$)))},function(s,l){s(l,2,0,!0,"block"),s(l,5,0,!0,a.Ab(l,6).isDisabled,a.Ab(l,6).attrDisabled,a.Ab(l,7).classDisabled,a.Ab(l,7).attrDisabled,a.Ab(l,7).prepItem,a.Ab(l,7).hasAppendedItem,a.Ab(l,8).disabled,a.Ab(l,8).attrDisabled),s(l,11,0,!0,!0,!0,!0,-1,a.Ab(l,13).disabled),s(l,16,0,!0,a.Ab(l,17).isDisabled,a.Ab(l,17).attrDisabled,!0,!0,a.Ab(l,18).classDisabled,a.Ab(l,18).attrDisabled),s(l,43,0,!0,!0,!0,!0,-1,a.Ab(l,45).disabled),s(l,48,0,!0,a.Ab(l,49).isDisabled,a.Ab(l,49).attrDisabled,!0,!0,a.Ab(l,50).classDisabled,a.Ab(l,50).attrDisabled)})}function G(s){return a.Jb(0,[(s()(),a.qb(0,0,null,null,1,"ng-component",[],null,null,null,E,x)),a.pb(1,49152,null,0,d,[D.c],null,null)],null,null)}var B=a.mb("ng-component",d,G,{},{},[]),_=n("2FIb"),J=n("ZYCi"),P=n("PNUx");n.d(l,"AutocompleteDemoModuleNgFactory",function(){return K});var K=a.nb(f,[],function(s){return a.xb([a.yb(512,a.j,a.cb,[[8,[y.a,k.a,B]],[3,a.j],a.y]),a.yb(4608,A.n,A.m,[a.v,[2,A.y]]),a.yb(4608,C.w,C.w,[]),a.yb(5120,w.hc,function(){return[new w.t]},[]),a.yb(1073742336,A.c,A.c,[]),a.yb(1073742336,C.t,C.t,[]),a.yb(1073742336,C.k,C.k,[]),a.yb(1073742336,w.fc,w.fc,[]),a.yb(1073742336,w.Yb,w.Yb,[]),a.yb(1073742336,_.a,_.a,[]),a.yb(1073742336,w.Fb,w.Fb,[]),a.yb(1073742336,w.Db,w.Db,[]),a.yb(1073742336,w.Ib,w.Ib,[]),a.yb(1073742336,w.Cb,w.Cb,[]),a.yb(1073742336,w.tb,w.tb,[]),a.yb(1073742336,w.xb,w.xb,[]),a.yb(1073742336,w.Qb,w.Qb,[]),a.yb(1073742336,w.Sb,w.Sb,[]),a.yb(1073742336,w.bc,w.bc,[]),a.yb(1073742336,w.pb,w.pb,[]),a.yb(1073742336,w.rb,w.rb,[]),a.yb(1073742336,J.m,J.m,[[2,J.s],[2,J.l]]),a.yb(1073742336,f,f,[]),a.yb(1024,J.j,function(){return[[{path:"",component:P.a,data:v}]]},[])])})},pKWc:function(s,l){s.exports='<span class="hljs-tag">&lt;<span class="hljs-name">h3</span>&gt;</span>vcl-input with fixed data<span class="hljs-tag">&lt;/<span class="hljs-name">h3</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">vcl-embedded-input-group</span> <span class="hljs-attr">prepIcon</span>=<span class="hljs-string">"fas:search"</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">input</span> <span class="hljs-attr">vcl-input</span> <span class="hljs-attr">vcl-embedded-input-group</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">"Search"</span>  [<span class="hljs-attr">vcl-input-autocomplete</span>]=<span class="hljs-string">"acCountry"</span> (<span class="hljs-attr">change</span>)=<span class="hljs-string">"onChange($event);"</span> /&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">vcl-embedded-input-group</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">h3</span>&gt;</span>vcl-token-input with fixed data<span class="hljs-tag">&lt;/<span class="hljs-name">h3</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">vcl-token-input-container</span> (<span class="hljs-attr">tokensChange</span>)=<span class="hljs-string">"onChange($event)"</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">input</span> <span class="hljs-attr">vcl-input</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">"Search for country to add"</span> [<span class="hljs-attr">vcl-token-input-autocomplete</span>]=<span class="hljs-string">"acCountry"</span> /&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">vcl-token-input-container</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">vcl-autocomplete</span> #<span class="hljs-attr">acCountry</span>=<span class="hljs-string">"vclAutocomplete"</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">vcl-autocomplete-option</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"header"</span> <span class="hljs-attr">label</span>=<span class="hljs-string">"Europe"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vcl-autocomplete-option</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">vcl-autocomplete-option</span> <span class="hljs-attr">label</span>=<span class="hljs-string">"Greece"</span> <span class="hljs-attr">value</span>=<span class="hljs-string">"gr"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vcl-autocomplete-option</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">vcl-autocomplete-option</span> <span class="hljs-attr">label</span>=<span class="hljs-string">"France"</span> <span class="hljs-attr">value</span>=<span class="hljs-string">"fr"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vcl-autocomplete-option</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">vcl-autocomplete-option</span> <span class="hljs-attr">label</span>=<span class="hljs-string">"Germany"</span> <span class="hljs-attr">value</span>=<span class="hljs-string">"de"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vcl-autocomplete-option</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">vcl-autocomplete-option</span> <span class="hljs-attr">label</span>=<span class="hljs-string">"The United Kingdom of Great Britain and Northern Ireland"</span> <span class="hljs-attr">value</span>=<span class="hljs-string">"uk"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vcl-autocomplete-option</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">vcl-autocomplete-option</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"header"</span> <span class="hljs-attr">label</span>=<span class="hljs-string">"Asia"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vcl-autocomplete-option</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">vcl-autocomplete-option</span> <span class="hljs-attr">label</span>=<span class="hljs-string">"Japan"</span> <span class="hljs-attr">value</span>=<span class="hljs-string">"jp"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vcl-autocomplete-option</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">vcl-autocomplete-option</span> <span class="hljs-attr">label</span>=<span class="hljs-string">"China"</span> <span class="hljs-attr">value</span>=<span class="hljs-string">"cn"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vcl-autocomplete-option</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">vcl-autocomplete-option</span> <span class="hljs-attr">label</span>=<span class="hljs-string">"Thailand"</span> <span class="hljs-attr">value</span>=<span class="hljs-string">"th"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vcl-autocomplete-option</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">vcl-autocomplete</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">h3</span>&gt;</span>vcl-token-input with async data<span class="hljs-tag">&lt;/<span class="hljs-name">h3</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">vcl-token-input-container</span> (<span class="hljs-attr">tokensChange</span>)=<span class="hljs-string">"onChange($event)"</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">input</span> <span class="hljs-attr">vcl-input</span>\n         <span class="hljs-attr">placeholder</span>=<span class="hljs-string">"Search for books to add"</span>\n         [<span class="hljs-attr">vcl-token-input-autocomplete</span>]=<span class="hljs-string">"acBooks"</span>\n         (<span class="hljs-attr">input</span>)=<span class="hljs-string">"booksInput$.next($event.target.value)"</span>\n         (<span class="hljs-attr">autocompleteSelect</span>)=<span class="hljs-string">"booksInput$.next(\'\')"</span> /&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">vcl-token-input-container</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">vcl-autocomplete</span> #<span class="hljs-attr">acBooks</span>=<span class="hljs-string">"vclAutocomplete"</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">ng-container</span> *<span class="hljs-attr">ngIf</span>=<span class="hljs-string">"ac$ | async as ac"</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">vcl-autocomplete-content</span> *<span class="hljs-attr">ngIf</span>=<span class="hljs-string">"ac.state === \'loading\'"</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">vcl-busy-indicator</span> <span class="hljs-attr">style</span>=<span class="hljs-string">"padding: 1em"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vcl-busy-indicator</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">vcl-autocomplete-content</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">ng-container</span> *<span class="hljs-attr">ngIf</span>=<span class="hljs-string">"ac.state === \'success\' &amp;&amp; ac.books.length &gt; 0"</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">vcl-autocomplete-option</span> *<span class="hljs-attr">ngFor</span>=<span class="hljs-string">"let book of ac.books"</span> [<span class="hljs-attr">label</span>]=<span class="hljs-string">"book.title"</span> [<span class="hljs-attr">value</span>]=<span class="hljs-string">"book.id"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vcl-autocomplete-option</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">ng-container</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">vcl-autocomplete-content</span> *<span class="hljs-attr">ngIf</span>=<span class="hljs-string">"ac.state === \'success\' &amp;&amp; ac.books.length === 0"</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">style</span>=<span class="hljs-string">"padding: 1em"</span>&gt;</span>No books found<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">vcl-autocomplete-content</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">ng-container</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">vcl-autocomplete</span>&gt;</span>\n'},tYw5:function(s,l){s.exports='<span class="hljs-keyword">import</span> { HttpClient } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/common/http\'</span>;\n<span class="hljs-keyword">import</span> { Component, OnInit } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/core\'</span>;\n<span class="hljs-keyword">import</span> { BehaviorSubject ,  of } <span class="hljs-keyword">from</span> <span class="hljs-string">\'rxjs\'</span>;\n<span class="hljs-keyword">import</span> { debounceTime, switchMap, map, catchError, startWith } <span class="hljs-keyword">from</span> <span class="hljs-string">\'rxjs/operators\'</span>;\n\n<span class="hljs-keyword">const</span> BOOK_API_URL = <span class="hljs-string">\'https://www.googleapis.com/books/v1/volumes\'</span>;\n\n<span class="hljs-meta">@Component</span>({\n  templateUrl: <span class="hljs-string">\'demo.component.html\'</span>\n})\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> AutocompleteDemoComponent {\n  <span class="hljs-keyword">constructor</span>(<span class="hljs-params"><span class="hljs-keyword">private</span> http: HttpClient</span>) { }\n\n  booksInput$ = <span class="hljs-keyword">new</span> BehaviorSubject&lt;<span class="hljs-built_in">string</span>&gt;(<span class="hljs-string">\'\'</span>);\n\n  ac$ = <span class="hljs-keyword">this</span>.booksInput$.pipe(\n                 debounceTime(<span class="hljs-number">200</span>),\n                 switchMap(<span class="hljs-function"><span class="hljs-params">search</span> =&gt;</span> {\n                  <span class="hljs-keyword">if</span> (!search || search.length &lt; <span class="hljs-number">2</span>) {\n                    <span class="hljs-comment">// Show nothing if less than 2 characters</span>\n                    <span class="hljs-keyword">return</span> of({ state: <span class="hljs-string">\'void\'</span>, books: [] });\n                  } <span class="hljs-keyword">else</span> {\n                    <span class="hljs-keyword">return</span> <span class="hljs-keyword">this</span>.http.get(<span class="hljs-string">`<span class="hljs-subst">${BOOK_API_URL}</span>?q=<span class="hljs-subst">${search}</span>&amp;projection=lite`</span>).pipe(\n                      map(<span class="hljs-function">(<span class="hljs-params">data: <span class="hljs-built_in">any</span></span>) =&gt;</span> {\n                        <span class="hljs-keyword">const</span> items = data.items || [];\n                        <span class="hljs-keyword">return</span> {\n                          state: <span class="hljs-string">\'success\'</span>,\n                          books: items.filter(<span class="hljs-function"><span class="hljs-params">item</span> =&gt;</span> item.id &amp;&amp; item.volumeInfo &amp;&amp; item.volumeInfo.title)\n                                      .map(<span class="hljs-function"><span class="hljs-params">item</span> =&gt;</span> ({\n                            id: item.id,\n                            title: item.volumeInfo.title\n                          }))\n                        };\n                      }),\n                      catchError(<span class="hljs-function"><span class="hljs-params">ex</span> =&gt;</span> of({ state: <span class="hljs-string">\'error\'</span>, books: [] })), <span class="hljs-comment">// Error state</span>\n                      startWith({ state: <span class="hljs-string">\'loading\'</span>, books: [] }) <span class="hljs-comment">// Set state to loading before the request</span>\n                    );\n                  }\n                }),\n                startWith({ state: <span class="hljs-string">\'void\'</span>, books: [] }) <span class="hljs-comment">// Initial state</span>\n  );\n\n  onChange(change) {\n    <span class="hljs-built_in">console</span>.log(change);\n  }\n}\n\n\n'}}]);