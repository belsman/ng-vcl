(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{"/jZG":function(l,n){l.exports='<h1 id="vcl-table">vcl-table</h1>\n<p>Display tabular data.</p>\n<h2 id="usage">Usage</h2>\n<p>You can simply add directive to necessary element</p>\n<pre class="hljs"><span class="hljs-tag">&lt;<span class="hljs-name">table</span> <span class="hljs-attr">hover</span>&gt;</span>\n...\n<span class="hljs-tag">&lt;/<span class="hljs-name">table</span>&gt;</span></pre>\n<p>or pass parameter to toggle it behavior</p>\n<pre class="hljs"><span class="hljs-tag">&lt;<span class="hljs-name">table</span> [<span class="hljs-attr">hover</span>]=<span class="hljs-string">&quot;true&quot;</span>&gt;</span>\n...\n  <span class="hljs-tag">&lt;<span class="hljs-name">th</span> [<span class="hljs-attr">span</span>]=<span class="hljs-string">&quot;10&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">th</span>&gt;</span>\n...\n<span class="hljs-tag">&lt;/<span class="hljs-name">table</span>&gt;</span></pre>\n<h2 id="features">Features</h2>\n<table>\n<thead>\n<tr>\n<th>Selector</th>\n<th>Type</th>\n<th>Default</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody><tr>\n<td><code>hightlight</code></td>\n<td>boolean</td>\n<td>true</td>\n<td>Highlight single cells and columns.</td>\n</tr>\n<tr>\n<td><code>span</code></td>\n<td>number</td>\n<td>0</td>\n<td>Defines column width from <code>0</code> to <code>100</code> percents. Have to be used on the <code>th</code>s.</td>\n</tr>\n<tr>\n<td><code>sort</code></td>\n<td>boolean</td>\n<td>true</td>\n<td>Sortable columns are defined with the <code>sort</code> directive  on the respective <code>th</code>s. To handle sorting changes subscribe for <code>change</code> event <code>EventEmitter&lt;-1</code> | <code>0</code> | <code>1&gt;</code>. To add additional sort icon use <code>sort-icon</code> component withinside <code>th</code>s.</td>\n</tr>\n<tr>\n<td><code>selectable</code></td>\n<td>boolean</td>\n<td>true</td>\n<td>Rows can be styled to suggest their selectability (single or multiple) using the <code>selectable</code> directive, which makes rows show a pointer cursor on hover.</td>\n</tr>\n<tr>\n<td><code>selected</code></td>\n<td>boolean</td>\n<td>true</td>\n<td>Visually select individual cells and thus rows.</td>\n</tr>\n<tr>\n<td><code>disabled</code></td>\n<td>boolean</td>\n<td>true</td>\n<td>Visually disable row content.</td>\n</tr>\n<tr>\n<td><code>align-center</code></td>\n<td>boolean</td>\n<td>true</td>\n<td>Specifies the horizontal alignment of the <code>td</code>s or <code>table</code>s content to center</td>\n</tr>\n<tr>\n<td><code>align-right</code></td>\n<td>boolean</td>\n<td>true</td>\n<td>Specifies the horizontal alignment of the <code>td</code>s or <code>table</code>s content to right</td>\n</tr>\n<tr>\n<td><code>align-bottom</code></td>\n<td>boolean</td>\n<td>true</td>\n<td>Specifies the vertical alignment of the <code>td</code>s or <code>table</code>s content to bottom</td>\n</tr>\n<tr>\n<td><code>align-middle</code></td>\n<td>boolean</td>\n<td>true</td>\n<td>Specifies the vertical alignment of the <code>td</code>s or <code>table</code>s content to middle</td>\n</tr>\n<tr>\n<td><code>nowrap</code>, <code>overflow-ellipsis</code></td>\n<td>boolean</td>\n<td>true</td>\n<td>In conjunction with the fixed layout mode, this directive can be used to truncate all cell content which would span more than one line and show an ellipsis to indicate truncated content instead</td>\n</tr>\n<tr>\n<td><code>break-words</code></td>\n<td>boolean</td>\n<td>true</td>\n<td>Break words of textual cell content apart. This works best in combination with the <code>fixed</code> layout mode</td>\n</tr>\n</tbody></table>\n'},CZXK:function(l,n,s){"use strict";s.r(n);var a=s("CcnG"),t=function(){function l(){this.isSelected=!0,this.readMore=!0}return l.prototype.OnSortingDefaultColumn=function(l){this.defaultColumnSort=l},Object.defineProperty(l.prototype,"defaultColumnSortName",{get:function(){switch(this.defaultColumnSort){case-1:return"desc";case 1:return"asc";default:return"none"}},enumerable:!0,configurable:!0}),l}(),e={demo:function(){return{label:"Table",tabs:{Demo:t,"README.md":{type:"md",content:s("/jZG")},"demo.component.html":{type:"pre",content:s("JAhe")},"demo.component.ts":{type:"pre",content:s("ERjf")}}}}},p=function(){return function(){}}(),u=function(){function l(l,n){this.e=l,this.renderer=n,this.sort=0,this.rootElement=l,this.renderer.addClass(l.nativeElement,"vclFloatRight"),this.renderer.addClass(l.nativeElement,"vclIcon"),this.renderer.addClass(l.nativeElement,"fa"),this.ChangeSortOrder(this.sort)}return l.prototype.ChangeSortOrder=function(l){switch(this.renderer.removeClass(this.rootElement.nativeElement,"fa-sort"),this.renderer.removeClass(this.rootElement.nativeElement,"fa-sort-up"),this.renderer.removeClass(this.rootElement.nativeElement,"fa-sort-down"),l){case 0:this.renderer.addClass(this.rootElement.nativeElement,"fa-sort-up");break;case-1:this.renderer.addClass(this.rootElement.nativeElement,"fa-sort-down");break;default:this.renderer.addClass(this.rootElement.nativeElement,"fa-sort")}},l}(),r=a.rb({encapsulation:2,styles:[],data:{}});function c(l){return a.Ob(0,[a.Eb(null,0)],null,null)}function i(l){return a.Ob(0,[(l()(),a.tb(0,0,null,null,1,"sort-icon",[],null,null,null,c,r)),a.sb(1,49152,null,0,u,[a.k,a.E],null,null)],null,null)}var o=a.pb("sort-icon",u,i,{sort:"sort"},{},["*"]),h=s("pMnS"),d=s("8Ip6"),g=function(){function l(l,n){this.renderer=l,this.el=n}return l.prototype.ClassToggle=function(l,n,s){return this.el.nativeElement.localName!==s&&s?(console.error(l+" can only be used on "+s+" tag!"),!1):""===n||n?("table"===s&&"vclTable"!==l&&this.addClass("vclTable"),this.addClass(l)):this.removeClass(l)},l.prototype.addClass=function(l){return this.renderer.addClass(this.el.nativeElement,l),!0},l.prototype.removeClass=function(l){return this.renderer.removeClass(this.el.nativeElement,l),!1},l}(),m=function(){function l(l,n){this.renderer=l,this.el=n,this.tableService=new g(l,n)}return l.prototype.ngOnChanges=function(l){l.alt&&(this.selectable=this.tableService.ClassToggle("vclTable",this.selectable,"table"))},l}(),j=function(){function l(l,n){this.renderer=l,this.el=n}return l.prototype.ngOnChanges=function(l){l.width&&this.ngAfterContentInit()},l.prototype.ngAfterContentInit=function(){if("th"!==this.el.nativeElement.localName)throw new Error("Column width can be set only for header tag!");this.renderer.addClass(this.el.nativeElement,"vclSpan-"+this.width+"p")},l}(),b=function(){function l(l,n){this.renderer=l,this.el=n,this.change=new a.m,this.isHeader=!1,this.tableService=new g(l,n),this.isHeader=this.tableService.ClassToggle("vclSortableCol",!0,"th")&&this.tableService.ClassToggle("vclClearFix",!0,"th")}return l.prototype.OnChangeOrder=function(){if(this.isHeader)switch(this.order=1===this.order?-1:1,this.change.emit(this.order),this.order){case 1:this.renderer.removeClass(this.el.nativeElement,"vclClearFix"),this.renderer.removeClass(this.el.nativeElement,"vclSortDesc"),this.renderer.addClass(this.el.nativeElement,"vclSortAsc"),this.sortIconComponent&&this.sortIconComponent.ChangeSortOrder(1);break;case-1:this.renderer.removeClass(this.el.nativeElement,"vclSortAsc"),this.renderer.addClass(this.el.nativeElement,"vclSortDesc"),this.sortIconComponent&&this.sortIconComponent.ChangeSortOrder(-1)}},l}(),v=function(){function l(l,n){this.renderer=l,this.el=n,this.tableService=new g(l,n)}return l.prototype.ngOnChanges=function(l){l.align&&(this.align=this.tableService.ClassToggle("vclAlignRight",this.align,"td"))},l}(),f=function(){function l(l,n){this.renderer=l,this.el=n,this.tableService=new g(l,n)}return l.prototype.ngOnChanges=function(l){l.align&&(this.align=this.tableService.ClassToggle("vclAlignCentered",this.align,"td"))},l}(),C=function(){function l(l,n){this.renderer=l,this.el=n,this.tableService=new g(l,n)}return l.prototype.ngOnChanges=function(l){l.nowrap&&(this.nowrap=this.tableService.ClassToggle("vclNoWrap",this.nowrap,"td"))},l}(),w=function(){function l(l,n){this.renderer=l,this.el=n,this.tableService=new g(l,n)}return l.prototype.ngOnChanges=function(l){l.ellipsis&&(this.ellipsis=this.tableService.ClassToggle("vclOverflowEllipsis",this.ellipsis,"td"))},l}(),k=s("Ip0R"),E=function(){function l(l,n){this.renderer=l,this.el=n,this.tableService=new g(l,n)}return l.prototype.ngOnChanges=function(l){l.hightlight&&(this.hightlight=this.tableService.ClassToggle("vclCellHighlight",this.hightlight,"td"))},l}(),y=function(){function l(l,n){this.renderer=l,this.el=n,this.tableService=new g(l,n)}return l.prototype.ngOnChanges=function(l){l.disabled&&(this.disabled=this.tableService.ClassToggle("vclDisabled",this.disabled,"tr"))},l}(),S=function(){function l(l,n){this.renderer=l,this.el=n,this.tableService=new g(l,n)}return l.prototype.ngOnChanges=function(l){l.selected&&(this.selected=this.tableService.ClassToggle("vclSelected",this.selected,"tr"))},l}(),M=function(){function l(l,n){this.renderer=l,this.el=n,this.tableService=new g(l,n)}return l.prototype.ngOnChanges=function(l){l.alt&&(this.selectable=this.tableService.ClassToggle("vclRowSelectability",this.selectable,"tr"))},l}(),O=a.rb({encapsulation:2,styles:[],data:{}});function D(l){return a.Ob(0,[(l()(),a.tb(0,0,null,null,1,"a",[],null,[[null,"click"]],function(l,n,s){var a=!0;return"click"===n&&(a=0!=(l.component.readMore=!1)&&a),a},null,null)),(l()(),a.Mb(-1,null,["Read more"]))],null,null)}function T(l){return a.Ob(0,[(l()(),a.tb(0,0,null,null,116,"table",[["class","vclFixed vclVAlignMiddle vclRowHoverHighlight vclAltRowColor"],["vcl-table",""]],[[2,"vclTable",null]],null,null,null,null)),a.sb(1,540672,null,0,m,[a.E,a.k],null,null),(l()(),a.tb(2,0,null,null,23,"thead",[],null,null,null,null,null)),(l()(),a.tb(3,0,null,null,22,"tr",[],null,null,null,null,null)),(l()(),a.tb(4,0,null,null,7,"th",[["sort",""]],null,[[null,"change"],[null,"click"]],function(l,n,s){var t=!0,e=l.component;return"click"===n&&(t=!1!==a.Fb(l,6).OnChangeOrder()&&t),"change"===n&&(t=!1!==e.OnSortingDefaultColumn(s)&&t),t},null,null)),a.sb(5,1589248,null,0,j,[a.E,a.k],{width:[0,"width"]},null),a.sb(6,16384,null,1,b,[a.E,a.k],null,{change:"change"}),a.Kb(603979776,1,{sortIconComponent:0}),(l()(),a.tb(8,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),a.Mb(9,null,["Default Column (",")"])),(l()(),a.tb(10,0,null,null,1,"sort-icon",[],null,null,null,c,r)),a.sb(11,49152,[[1,4]],0,u,[a.k,a.E],null,null),(l()(),a.tb(12,0,null,null,7,"th",[["sort",""]],null,[[null,"click"]],function(l,n,s){var t=!0;return"click"===n&&(t=!1!==a.Fb(l,14).OnChangeOrder()&&t),t},null,null)),a.sb(13,1589248,null,0,j,[a.E,a.k],{width:[0,"width"]},null),a.sb(14,16384,null,1,b,[a.E,a.k],null,null),a.Kb(603979776,2,{sortIconComponent:0}),(l()(),a.tb(16,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),a.Mb(-1,null,["Right aligned Column"])),(l()(),a.tb(18,0,null,null,1,"sort-icon",[],null,null,null,c,r)),a.sb(19,49152,[[2,4]],0,u,[a.k,a.E],null,null),(l()(),a.tb(20,0,null,null,3,"th",[],null,null,null,null,null)),a.sb(21,1589248,null,0,j,[a.E,a.k],{width:[0,"width"]},null),(l()(),a.tb(22,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),a.Mb(-1,null,["Centered Column"])),(l()(),a.tb(24,0,null,null,1,"th",[],null,null,null,null,null)),a.sb(25,1589248,null,0,j,[a.E,a.k],{width:[0,"width"]},null),(l()(),a.tb(26,0,null,null,90,"tbody",[],null,null,null,null,null)),(l()(),a.tb(27,0,null,null,10,"tr",[],null,null,null,null,null)),(l()(),a.tb(28,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),a.Mb(-1,null,["Lorem ipsum"])),(l()(),a.tb(30,0,null,null,2,"td",[],null,null,null,null,null)),a.sb(31,540672,null,0,v,[a.E,a.k],{align:[0,"align"]},null),(l()(),a.Mb(-1,null,["11.000"])),(l()(),a.tb(33,0,null,null,2,"td",[["align-center",""]],null,null,null,null,null)),a.sb(34,540672,null,0,f,[a.E,a.k],{align:[0,"align"]},null),(l()(),a.Mb(-1,null,["Sent"])),(l()(),a.tb(36,0,null,null,1,"td",[["align-center",""]],null,null,null,null,null)),a.sb(37,540672,null,0,f,[a.E,a.k],{align:[0,"align"]},null),(l()(),a.tb(38,0,null,null,11,"tr",[],null,null,null,null,null)),(l()(),a.tb(39,0,null,null,2,"td",[["nowrap",""]],null,null,null,null,null)),a.sb(40,540672,null,0,C,[a.E,a.k],{nowrap:[0,"nowrap"]},null),(l()(),a.Mb(-1,null,["Consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."])),(l()(),a.tb(42,0,null,null,2,"td",[],null,null,null,null,null)),a.sb(43,540672,null,0,v,[a.E,a.k],{align:[0,"align"]},null),(l()(),a.Mb(-1,null,["11.000"])),(l()(),a.tb(45,0,null,null,2,"td",[["align-center",""]],null,null,null,null,null)),a.sb(46,540672,null,0,f,[a.E,a.k],{align:[0,"align"]},null),(l()(),a.Mb(-1,null,["Sent"])),(l()(),a.tb(48,0,null,null,1,"td",[["align-center",""]],null,null,null,null,null)),a.sb(49,540672,null,0,f,[a.E,a.k],{align:[0,"align"]},null),(l()(),a.tb(50,0,null,null,12,"tr",[],null,null,null,null,null)),(l()(),a.tb(51,0,null,null,3,"td",[],null,null,null,null,null)),(l()(),a.tb(52,0,null,null,1,"a",[["href","#table"]],null,null,null,null,null)),(l()(),a.Mb(-1,null,["Lorem ipsum dolor sit amet"])),(l()(),a.Mb(-1,null,[", Consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."])),(l()(),a.tb(55,0,null,null,2,"td",[],null,null,null,null,null)),a.sb(56,540672,null,0,v,[a.E,a.k],{align:[0,"align"]},null),(l()(),a.Mb(-1,null,["11.000"])),(l()(),a.tb(58,0,null,null,2,"td",[["align-center",""]],null,null,null,null,null)),a.sb(59,540672,null,0,f,[a.E,a.k],{align:[0,"align"]},null),(l()(),a.Mb(-1,null,["Sent"])),(l()(),a.tb(61,0,null,null,1,"td",[["align-center",""]],null,null,null,null,null)),a.sb(62,540672,null,0,f,[a.E,a.k],{align:[0,"align"]},null),(l()(),a.tb(63,0,null,null,14,"tr",[],null,null,null,null,null)),(l()(),a.tb(64,0,null,null,4,"td",[],null,null,null,null,null)),a.sb(65,540672,null,0,w,[a.E,a.k],{ellipsis:[0,"ellipsis"]},null),(l()(),a.ib(16777216,null,null,1,null,D)),a.sb(67,16384,null,0,k.l,[a.P,a.M],{ngIf:[0,"ngIf"]},null),(l()(),a.Mb(-1,null,[" Truncated content. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. "])),(l()(),a.tb(69,0,null,null,2,"td",[],null,null,null,null,null)),a.sb(70,540672,null,0,v,[a.E,a.k],{align:[0,"align"]},null),(l()(),a.Mb(-1,null,["11.000"])),(l()(),a.tb(72,0,null,null,3,"td",[["align-center",""],["hightlight",""]],null,null,null,null,null)),a.sb(73,540672,null,0,E,[a.E,a.k],{hightlight:[0,"hightlight"]},null),a.sb(74,540672,null,0,f,[a.E,a.k],{align:[0,"align"]},null),(l()(),a.Mb(-1,null,["N/A"])),(l()(),a.tb(76,0,null,null,1,"td",[["align-center",""]],null,null,null,null,null)),a.sb(77,540672,null,0,f,[a.E,a.k],{align:[0,"align"]},null),(l()(),a.tb(78,0,null,null,12,"tr",[["disabled",""]],null,null,null,null,null)),a.sb(79,540672,null,0,y,[a.E,a.k],{disabled:[0,"disabled"]},null),(l()(),a.tb(80,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),a.Mb(-1,null,["Disabled row."])),(l()(),a.tb(82,0,null,null,2,"td",[],null,null,null,null,null)),a.sb(83,540672,null,0,v,[a.E,a.k],{align:[0,"align"]},null),(l()(),a.Mb(-1,null,["11.000"])),(l()(),a.tb(85,0,null,null,3,"td",[["align-center",""],["hightlight",""]],null,null,null,null,null)),a.sb(86,540672,null,0,E,[a.E,a.k],{hightlight:[0,"hightlight"]},null),a.sb(87,540672,null,0,f,[a.E,a.k],{align:[0,"align"]},null),(l()(),a.Mb(-1,null,["On hold"])),(l()(),a.tb(89,0,null,null,1,"td",[["align-center",""]],null,null,null,null,null)),a.sb(90,540672,null,0,f,[a.E,a.k],{align:[0,"align"]},null),(l()(),a.tb(91,0,null,null,13,"tr",[["selectable",""]],null,[[null,"click"]],function(l,n,s){var a=!0,t=l.component;return"click"===n&&(a=0!=(t.isSelected=!t.isSelected)&&a),a},null,null)),a.sb(92,540672,null,0,S,[a.E,a.k],{selected:[0,"selected"]},null),a.sb(93,540672,null,0,M,[a.E,a.k],{selectable:[0,"selectable"]},null),(l()(),a.tb(94,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),a.Mb(-1,null,["Click to unselect"])),(l()(),a.tb(96,0,null,null,2,"td",[],null,null,null,null,null)),a.sb(97,540672,null,0,v,[a.E,a.k],{align:[0,"align"]},null),(l()(),a.Mb(-1,null,["11.000"])),(l()(),a.tb(99,0,null,null,3,"td",[["align-center",""],["hightlight",""]],null,null,null,null,null)),a.sb(100,540672,null,0,E,[a.E,a.k],{hightlight:[0,"hightlight"]},null),a.sb(101,540672,null,0,f,[a.E,a.k],{align:[0,"align"]},null),(l()(),a.Mb(-1,null,["N/A"])),(l()(),a.tb(103,0,null,null,1,"td",[["align-center",""]],null,null,null,null,null)),a.sb(104,540672,null,0,f,[a.E,a.k],{align:[0,"align"]},null),(l()(),a.tb(105,0,null,null,11,"tr",[],null,null,null,null,null)),(l()(),a.tb(106,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),a.Mb(-1,null,["Normal row."])),(l()(),a.tb(108,0,null,null,2,"td",[],null,null,null,null,null)),a.sb(109,540672,null,0,v,[a.E,a.k],{align:[0,"align"]},null),(l()(),a.Mb(-1,null,["11.000"])),(l()(),a.tb(111,0,null,null,3,"td",[["align-center",""],["hightlight",""]],null,null,null,null,null)),a.sb(112,540672,null,0,E,[a.E,a.k],{hightlight:[0,"hightlight"]},null),a.sb(113,540672,null,0,f,[a.E,a.k],{align:[0,"align"]},null),(l()(),a.Mb(-1,null,["On hold"])),(l()(),a.tb(115,0,null,null,1,"td",[["align-center",""]],null,null,null,null,null)),a.sb(116,540672,null,0,f,[a.E,a.k],{align:[0,"align"]},null)],function(l,n){var s=n.component;l(n,5,0,50),l(n,13,0,20),l(n,21,0,20),l(n,25,0,10),l(n,31,0,!0),l(n,34,0,""),l(n,37,0,""),l(n,40,0,""),l(n,43,0,!0),l(n,46,0,""),l(n,49,0,""),l(n,56,0,!0),l(n,59,0,""),l(n,62,0,""),l(n,65,0,s.readMore),l(n,67,0,s.readMore),l(n,70,0,!0),l(n,73,0,""),l(n,74,0,""),l(n,77,0,""),l(n,79,0,""),l(n,83,0,!0),l(n,86,0,""),l(n,87,0,""),l(n,90,0,""),l(n,92,0,s.isSelected),l(n,93,0,""),l(n,97,0,!0),l(n,100,0,""),l(n,101,0,""),l(n,104,0,""),l(n,109,0,!0),l(n,112,0,""),l(n,113,0,""),l(n,116,0,"")},function(l,n){var s=n.component;l(n,0,0,!0),l(n,9,0,s.defaultColumnSortName)})}function A(l){return a.Ob(0,[(l()(),a.tb(0,0,null,null,1,"ng-component",[],null,null,null,T,O)),a.sb(1,49152,null,0,t,[],null,null)],null,null)}var N=a.pb("ng-component",t,A,{},{},[]),I=s("M2Lx"),R=s("4c35"),q=s("p/eS"),x=s("2FIb"),L=s("eNsM"),F=s("ZYCi"),H=s("PNUx");s.d(n,"TableDemoModuleNgFactory",function(){return J});var J=a.qb(p,[],function(l){return a.Cb([a.Db(512,a.j,a.bb,[[8,[o,h.a,d.a,N]],[3,a.j],a.y]),a.Db(4608,k.n,k.m,[a.v,[2,k.A]]),a.Db(4608,I.a,I.a,[]),a.Db(1073742336,k.c,k.c,[]),a.Db(1073742336,R.e,R.e,[]),a.Db(1073742336,I.b,I.b,[]),a.Db(1073742336,q.a,q.a,[]),a.Db(1073742336,x.a,x.a,[]),a.Db(1073742336,L.a,L.a,[]),a.Db(1073742336,F.q,F.q,[[2,F.v],[2,F.m]]),a.Db(1073742336,p,p,[]),a.Db(1024,F.i,function(){return[[{path:"",component:H.a,data:e}]]},[])])})},ERjf:function(l,n){l.exports='<span class="hljs-keyword">import</span> { Component } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/core\'</span>;\n\n<span class="hljs-meta">@Component</span>({\n  templateUrl: <span class="hljs-string">\'./demo.component.html\'</span>,\n})\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> TableDemoComponent {\n  isSelected = <span class="hljs-literal">true</span>;\n  defaultColumnSort: <span class="hljs-number">-1</span> | <span class="hljs-number">0</span> | <span class="hljs-number">1</span>;\n  readMore = <span class="hljs-literal">true</span>;\n\n  OnSortingDefaultColumn(sort: <span class="hljs-number">-1</span> | <span class="hljs-number">0</span> | <span class="hljs-number">1</span>): <span class="hljs-built_in">void</span> {\n    <span class="hljs-keyword">this</span>.defaultColumnSort = sort;\n  }\n\n\n  <span class="hljs-keyword">get</span> defaultColumnSortName(): <span class="hljs-built_in">string</span> {\n    <span class="hljs-keyword">switch</span> (<span class="hljs-keyword">this</span>.defaultColumnSort) {\n      <span class="hljs-keyword">case</span> <span class="hljs-number">-1</span>: {\n        <span class="hljs-keyword">return</span> <span class="hljs-string">\'desc\'</span>;\n      }\n      <span class="hljs-keyword">case</span> <span class="hljs-number">1</span>: {\n        <span class="hljs-keyword">return</span> <span class="hljs-string">\'asc\'</span>;\n      }\n      <span class="hljs-keyword">default</span>: {\n        <span class="hljs-keyword">return</span> <span class="hljs-string">\'none\'</span>;\n      }\n    }\n  }\n\n\n\n}\n'},JAhe:function(l,n){l.exports='<span class="hljs-tag">&lt;<span class="hljs-name">table</span> <span class="hljs-attr">vcl-table</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"vclFixed vclVAlignMiddle vclRowHoverHighlight vclAltRowColor"</span> &gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">thead</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">tr</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">th</span> [<span class="hljs-attr">span</span>]=<span class="hljs-string">"50"</span> <span class="hljs-attr">sort</span> (<span class="hljs-attr">change</span>)=<span class="hljs-string">"OnSortingDefaultColumn($event)"</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">span</span>&gt;</span>Default Column ({{defaultColumnSortName}})<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">sort-icon</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">sort-icon</span>&gt;</span>\n      <span class="hljs-tag">&lt;/<span class="hljs-name">th</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">th</span> [<span class="hljs-attr">span</span>]=<span class="hljs-string">"20"</span> <span class="hljs-attr">sort</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">span</span>&gt;</span>Right aligned Column<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">sort-icon</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">sort-icon</span>&gt;</span>\n      <span class="hljs-tag">&lt;/<span class="hljs-name">th</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">th</span> [<span class="hljs-attr">span</span>]=<span class="hljs-string">"20"</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">span</span>&gt;</span>Centered Column<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>\n      <span class="hljs-tag">&lt;/<span class="hljs-name">th</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">th</span> [<span class="hljs-attr">span</span>]=<span class="hljs-string">"10"</span>&gt;</span>\n      <span class="hljs-tag">&lt;/<span class="hljs-name">th</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">tr</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">thead</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">tbody</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">tr</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span>Lorem ipsum<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">td</span> [<span class="hljs-attr">align-right</span>]=<span class="hljs-string">"true"</span>&gt;</span>11.000<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">td</span> <span class="hljs-attr">align-center</span>&gt;</span>Sent<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">td</span> <span class="hljs-attr">align-center</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">tr</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">tr</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">td</span> <span class="hljs-attr">nowrap</span>&gt;</span>Consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam\n        voluptua.<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">td</span> [<span class="hljs-attr">align-right</span>]=<span class="hljs-string">"true"</span>&gt;</span>11.000<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">td</span> <span class="hljs-attr">align-center</span>&gt;</span>Sent<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">td</span> <span class="hljs-attr">align-center</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">tr</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">tr</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">a</span> <span class="hljs-attr">href</span>=<span class="hljs-string">"#table"</span>&gt;</span>Lorem ipsum dolor sit amet<span class="hljs-tag">&lt;/<span class="hljs-name">a</span>&gt;</span>, Consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam\n        voluptua.<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">td</span> [<span class="hljs-attr">align-right</span>]=<span class="hljs-string">"true"</span>&gt;</span>11.000<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">td</span> <span class="hljs-attr">align-center</span>&gt;</span>Sent<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">td</span> <span class="hljs-attr">align-center</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">tr</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">tr</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">td</span> [<span class="hljs-attr">overflow-ellipsis</span>]=<span class="hljs-string">"readMore"</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">a</span> *<span class="hljs-attr">ngIf</span>=<span class="hljs-string">"readMore"</span> (<span class="hljs-attr">click</span>)=<span class="hljs-string">"readMore = false"</span>&gt;</span>Read more<span class="hljs-tag">&lt;/<span class="hljs-name">a</span>&gt;</span> Truncated content. Lorem ipsum dolor sit amet, consetetur\n        sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.\n        At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem\n        ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt\n        ut labore et dolore magna aliquyam erat, sed diam voluptua.\n      <span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">td</span> [<span class="hljs-attr">align-right</span>]=<span class="hljs-string">"true"</span>&gt;</span>11.000<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">td</span> <span class="hljs-attr">hightlight</span> <span class="hljs-attr">align-center</span>&gt;</span>N/A<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">td</span> <span class="hljs-attr">align-center</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">tr</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">tr</span> <span class="hljs-attr">disabled</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span>Disabled row.<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">td</span> [<span class="hljs-attr">align-right</span>]=<span class="hljs-string">"true"</span>&gt;</span>11.000<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">td</span> <span class="hljs-attr">hightlight</span> <span class="hljs-attr">align-center</span>&gt;</span>On hold<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">td</span> <span class="hljs-attr">align-center</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">tr</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">tr</span> <span class="hljs-attr">selectable</span> (<span class="hljs-attr">click</span>)=<span class="hljs-string">"isSelected = !isSelected"</span> [<span class="hljs-attr">selected</span>]=<span class="hljs-string">"isSelected"</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span>Click to unselect<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">td</span> [<span class="hljs-attr">align-right</span>]=<span class="hljs-string">"true"</span>&gt;</span>11.000<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">td</span> <span class="hljs-attr">hightlight</span> <span class="hljs-attr">align-center</span>&gt;</span>N/A<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">td</span> <span class="hljs-attr">align-center</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">tr</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">tr</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span>Normal row.<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">td</span> [<span class="hljs-attr">align-right</span>]=<span class="hljs-string">"true"</span>&gt;</span>11.000<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">td</span> <span class="hljs-attr">hightlight</span> <span class="hljs-attr">align-center</span>&gt;</span>On hold<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">td</span> <span class="hljs-attr">align-center</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">tr</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">tbody</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">table</span>&gt;</span>\n'},eNsM:function(l,n,s){"use strict";s.d(n,"a",function(){return a});var a=function(){return function(){}}()}}]);