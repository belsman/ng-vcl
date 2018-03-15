webpackJsonp([40],{1087:function(n,l){n.exports='<h1 id="vclbusyindicator">vclBusyIndicator</h1>\n<h2 id="vcl-busy-indicator">vcl-busy-indicator</h2>\n<p>An indicator to show that a lasting operation is currently in progress.</p>\n<h3 id="usage">Usage</h3>\n<pre class="hljs"><span class="hljs-tag">&lt;<span class="hljs-name">vcl-busy-indicator</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;straight&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">span</span>&gt;</span>Loading&#x2026;<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">vcl-busy-indicator</span>&gt;</span>\n</pre>\n<h3 id="api">API</h3>\n<h4 id="vclbusy-attributes-">vclBusy Attributes:</h4>\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Type</th>\n<th>Default</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td><code>type</code></td>\n<td>&quot;circular&quot; or &quot;straight&quot;</td>\n<td>&quot;circular&quot;</td>\n<td>The indicator type</td>\n</tr>\n<tr>\n<td><code>label</code></td>\n<td>string</td>\n<td>&quot;Loading&quot;</td>\n<td>icon aria label</td>\n</tr>\n<tr>\n<td><code>iconHeight</code></td>\n<td>string</td>\n<td>&quot;3em&quot;</td>\n<td>icon height</td>\n</tr>\n<tr>\n<td><code>iconWidth</code></td>\n<td>string</td>\n<td>&quot;3em&quot;</td>\n<td>icon width</td>\n</tr>\n<tr>\n<td><code>direction</code></td>\n<td>&quot;vertical&quot; or &quot;horizontal&quot;</td>\n<td>&quot;vertical&quot;</td>\n<td>The indicator direction</td>\n</tr>\n</tbody>\n</table>\n<h2 id="vclbusy">vclBusy</h2>\n<p>Covers an element with a layer showing the vcl-busy-indicator to indicate a busy state and prevent user interaction.</p>\n<h3 id="usage">Usage</h3>\n<pre class="hljs">  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> [<span class="hljs-attr">vclBusy</span>]=<span class="hljs-string">&quot;true&quot;</span> [<span class="hljs-attr">busyLabel</span>]=<span class="hljs-string">&quot;&apos;Loading&#x2026;&apos;&quot;</span> [<span class="hljs-attr">busyIndicatorType</span>]=<span class="hljs-string">&quot;&quot;</span>&gt;</span>\n    This content will be covered by the layer\n  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n</pre>\n<h3 id="api">API</h3>\n<h4 id="vclbusy-attributes-">vclBusy Attributes:</h4>\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Type</th>\n<th>Default</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td><code>vclBusy</code></td>\n<td>boolean</td>\n<td>false</td>\n<td>Shows the layer when <code>true</code></td>\n</tr>\n<tr>\n<td><code>busyIndicatorType</code></td>\n<td>&quot;circular&quot; or &quot;straight&quot;</td>\n<td>&quot;circular&quot;</td>\n<td>The indicator type</td>\n</tr>\n<tr>\n<td><code>busyLabel</code></td>\n<td>string</td>\n<td></td>\n<td>Optional - The busy layers label</td>\n</tr>\n<tr>\n<td><code>busyIconHeight</code></td>\n<td>string</td>\n<td>&quot;3em&quot;</td>\n<td>icon height</td>\n</tr>\n<tr>\n<td><code>busyIconWidth</code></td>\n<td>string</td>\n<td>&quot;3em&quot;</td>\n<td>icon width</td>\n</tr>\n<tr>\n<td><code>busyIndicatorDirection</code></td>\n<td>&quot;vertical&quot; or &quot;horizontal&quot;</td>\n<td>&quot;vertical&quot;</td>\n<td>The indicator direction</td>\n</tr>\n</tbody>\n</table>\n'},1088:function(n,l){n.exports='<span class="hljs-tag">&lt;<span class="hljs-name">h3</span>&gt;</span>Simple busy indicator:<span class="hljs-tag">&lt;/<span class="hljs-name">h3</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">vcl-busy-indicator</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vcl-busy-indicator</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">h3</span>&gt;</span>Busy indicator with label and alternative icon:<span class="hljs-tag">&lt;/<span class="hljs-name">h3</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">vcl-busy-indicator</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"straight"</span>&gt;</span>\n  Loading...\n<span class="hljs-tag">&lt;/<span class="hljs-name">vcl-busy-indicator</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">h3</span>&gt;</span>Horizontal busy indicators:<span class="hljs-tag">&lt;/<span class="hljs-name">h3</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">vcl-busy-indicator</span> [<span class="hljs-attr">layout</span>]=<span class="hljs-string">"\'horizontal\'"</span>&gt;</span>\n  Loading...\n<span class="hljs-tag">&lt;/<span class="hljs-name">vcl-busy-indicator</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">vcl-busy-indicator</span> [<span class="hljs-attr">layout</span>]=<span class="hljs-string">"\'horizontal\'"</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"straight"</span>&gt;</span>\n  Loading...\n<span class="hljs-tag">&lt;/<span class="hljs-name">vcl-busy-indicator</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">h3</span>&gt;</span>Indicator from icons:<span class="hljs-tag">&lt;/<span class="hljs-name">h3</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">vcl-busy-indicator</span> <span class="hljs-attr">classSrc</span>=<span class="hljs-string">"fa fa-circle-o-notch fa-spin fa-3x fa-fw"</span>&gt;</span>\n  Loading...\n<span class="hljs-tag">&lt;/<span class="hljs-name">vcl-busy-indicator</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">h3</span>&gt;</span>Indicator from images:<span class="hljs-tag">&lt;/<span class="hljs-name">h3</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">vcl-busy-indicator</span> <span class="hljs-attr">imageSrc</span>=<span class="hljs-string">"http://www.polidoor.com/assets/img/loading.gif"</span>&gt;</span>\n  Loading...\n<span class="hljs-tag">&lt;/<span class="hljs-name">vcl-busy-indicator</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">h3</span>&gt;</span>Busy container:<span class="hljs-tag">&lt;/<span class="hljs-name">h3</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"vclContainer vclLayoutHorizontal"</span> <span class="hljs-attr">style</span>=<span class="hljs-string">"height:15em"</span> [<span class="hljs-attr">vclBusyIndicatorCover</span>]=<span class="hljs-string">"isBusy"</span> <span class="hljs-attr">busyLabel</span>=<span class="hljs-string">"Loading..."</span> <span class="hljs-attr">busyIndicatorType</span>=<span class="hljs-string">"straight"</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">style</span>=<span class="hljs-string">"padding:0.5em"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"vclLayoutFlex"</span>&gt;</span>\n    Busy container<span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">vcl-button</span> (<span class="hljs-attr">tap</span>)=<span class="hljs-string">"makeBusy()"</span> <span class="hljs-attr">label</span>=<span class="hljs-string">"Make container busy for 3 secs"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">h3</span>&gt;</span>Horizontal busy container:<span class="hljs-tag">&lt;/<span class="hljs-name">h3</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"vclContainer vclLayoutHorizontal"</span> <span class="hljs-attr">style</span>=<span class="hljs-string">"height:15em"</span> [<span class="hljs-attr">vclBusyIndicatorCover</span>]=<span class="hljs-string">"isVerticalBusy"</span> <span class="hljs-attr">busyLabel</span>=<span class="hljs-string">"Loading..."</span> <span class="hljs-attr">busyIndicatorType</span>=<span class="hljs-string">"circle"</span> <span class="hljs-attr">busyIndicatorDirection</span>=<span class="hljs-string">"horizontal"</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">style</span>=<span class="hljs-string">"padding:0.5em"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"vclLayoutFlex"</span>&gt;</span>\n    Busy container<span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">vcl-button</span> (<span class="hljs-attr">tap</span>)=<span class="hljs-string">"makeVerticalBusy()"</span> <span class="hljs-attr">label</span>=<span class="hljs-string">"Make container busy for 3 secs"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n'},1089:function(n,l){n.exports='<span class="hljs-keyword">import</span> { Component } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/core\'</span>;\n\n<span class="hljs-meta">@Component</span>({\n  templateUrl: <span class="hljs-string">\'demo.component.html\'</span>\n})\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> BusyDemoComponent {\n  isBusy = <span class="hljs-literal">false</span>;\n  makeBusy() {\n    <span class="hljs-keyword">this</span>.isBusy = <span class="hljs-literal">true</span>;\n    setTimeout(<span class="hljs-function"><span class="hljs-params">()</span> =&gt;</span> <span class="hljs-keyword">this</span>.isBusy = <span class="hljs-literal">false</span>, <span class="hljs-number">3000</span>);\n  }\n  isVerticalBusy = <span class="hljs-literal">false</span>;\n  makeVerticalBusy() {\n    <span class="hljs-keyword">this</span>.isVerticalBusy = <span class="hljs-literal">true</span>;\n    setTimeout(<span class="hljs-function"><span class="hljs-params">()</span> =&gt;</span> <span class="hljs-keyword">this</span>.isVerticalBusy = <span class="hljs-literal">false</span>, <span class="hljs-number">3000</span>);\n  }\n}\n'},395:function(n,l,s){"use strict";function a(){return{label:"Busy",tabs:{Demo:o,"README.md":{type:"md",content:s(1087)},"demo.component.html":{type:"pre",content:s(1088)},"demo.component.ts":{type:"pre",content:s(1089)}}}}function t(n){return i._29(0,[(n()(),i._6(0,0,null,null,1,"span",[],null,null,null,null,null)),(n()(),i._27(1,null,["",""]))],null,function(n,l){n(l,1,0,l.component.busyLabel)})}function u(n){return i._29(0,[(n()(),i._6(0,0,null,null,11,"div",[["class","vclLoadingLayer"],["tabindex","-1"]],null,null,null,null,null)),(n()(),i._27(-1,null,["\n  "])),(n()(),i._6(2,0,null,null,8,"div",[["class","vclLoadingLayerContent"]],null,null,null,null,null)),(n()(),i._27(-1,null,["\n    "])),(n()(),i._6(4,0,null,null,5,"vcl-busy-indicator",[],null,null,null,g.b,g.a)),i._5(5,49152,null,0,y.a,[j.c],{type:[0,"type"],layout:[1,"layout"],label:[2,"label"],iconHeight:[3,"iconHeight"],iconWidth:[4,"iconWidth"]},null),(n()(),i._27(-1,0,["\n      "])),(n()(),i._1(16777216,null,0,1,null,t)),i._5(8,16384,null,0,b.l,[i.P,i.M],{ngIf:[0,"ngIf"]},null),(n()(),i._27(-1,0,["\n    "])),(n()(),i._27(-1,null,["\n  "])),(n()(),i._27(-1,null,["\n"]))],function(n,l){var s=l.component;n(l,5,0,s.busyIndicatorType,s.busyIndicatorDirection,s.busyLabel,s.busyIconHeight,s.busyIconWidth),n(l,8,0,s.busyLabel)},null)}function c(n){return i._29(2,[i._19(null,0),(n()(),i._27(-1,null,["\n"])),(n()(),i._1(16777216,null,null,1,null,u)),i._5(3,16384,null,0,b.l,[i.P,i.M],{ngIf:[0,"ngIf"]},null),(n()(),i._27(-1,null,["\n"]))],function(n,l){n(l,3,0,l.component.busy)},null)}function p(n){return i._29(0,[(n()(),i._6(0,0,null,null,1,"h3",[],null,null,null,null,null)),(n()(),i._27(-1,null,["Simple busy indicator:"])),(n()(),i._27(-1,null,["\n"])),(n()(),i._6(3,0,null,null,1,"vcl-busy-indicator",[],null,null,null,g.b,g.a)),i._5(4,49152,null,0,y.a,[j.c],null,null),(n()(),i._27(-1,null,["\n"])),(n()(),i._6(6,0,null,null,0,"br",[],null,null,null,null,null)),(n()(),i._6(7,0,null,null,0,"br",[],null,null,null,null,null)),(n()(),i._27(-1,null,["\n\n"])),(n()(),i._6(9,0,null,null,1,"h3",[],null,null,null,null,null)),(n()(),i._27(-1,null,["Busy indicator with label and alternative icon:"])),(n()(),i._27(-1,null,["\n"])),(n()(),i._6(12,0,null,null,2,"vcl-busy-indicator",[["type","straight"]],null,null,null,g.b,g.a)),i._5(13,49152,null,0,y.a,[j.c],{type:[0,"type"]},null),(n()(),i._27(-1,0,["\n  Loading...\n"])),(n()(),i._27(-1,null,["\n"])),(n()(),i._6(16,0,null,null,0,"br",[],null,null,null,null,null)),(n()(),i._6(17,0,null,null,0,"br",[],null,null,null,null,null)),(n()(),i._27(-1,null,["\n\n"])),(n()(),i._6(19,0,null,null,1,"h3",[],null,null,null,null,null)),(n()(),i._27(-1,null,["Horizontal busy indicators:"])),(n()(),i._27(-1,null,["\n"])),(n()(),i._6(22,0,null,null,2,"vcl-busy-indicator",[],null,null,null,g.b,g.a)),i._5(23,49152,null,0,y.a,[j.c],{layout:[0,"layout"]},null),(n()(),i._27(-1,0,["\n  Loading...\n"])),(n()(),i._27(-1,null,["\n"])),(n()(),i._6(26,0,null,null,0,"br",[],null,null,null,null,null)),(n()(),i._6(27,0,null,null,0,"br",[],null,null,null,null,null)),(n()(),i._27(-1,null,["\n"])),(n()(),i._6(29,0,null,null,2,"vcl-busy-indicator",[["type","straight"]],null,null,null,g.b,g.a)),i._5(30,49152,null,0,y.a,[j.c],{type:[0,"type"],layout:[1,"layout"]},null),(n()(),i._27(-1,0,["\n  Loading...\n"])),(n()(),i._27(-1,null,["\n"])),(n()(),i._6(33,0,null,null,0,"br",[],null,null,null,null,null)),(n()(),i._6(34,0,null,null,0,"br",[],null,null,null,null,null)),(n()(),i._27(-1,null,["\n\n"])),(n()(),i._6(36,0,null,null,1,"h3",[],null,null,null,null,null)),(n()(),i._27(-1,null,["Indicator from icons:"])),(n()(),i._27(-1,null,["\n"])),(n()(),i._6(39,0,null,null,2,"vcl-busy-indicator",[["classSrc","fa fa-circle-o-notch fa-spin fa-3x fa-fw"]],null,null,null,g.b,g.a)),i._5(40,49152,null,0,y.a,[j.c],{classSrc:[0,"classSrc"]},null),(n()(),i._27(-1,0,["\n  Loading...\n"])),(n()(),i._27(-1,null,["\n"])),(n()(),i._6(43,0,null,null,0,"br",[],null,null,null,null,null)),(n()(),i._6(44,0,null,null,0,"br",[],null,null,null,null,null)),(n()(),i._27(-1,null,["\n\n"])),(n()(),i._6(46,0,null,null,1,"h3",[],null,null,null,null,null)),(n()(),i._27(-1,null,["Indicator from images:"])),(n()(),i._27(-1,null,["\n"])),(n()(),i._6(49,0,null,null,2,"vcl-busy-indicator",[["imageSrc","http://www.polidoor.com/assets/img/loading.gif"]],null,null,null,g.b,g.a)),i._5(50,49152,null,0,y.a,[j.c],{imageSrc:[0,"imageSrc"]},null),(n()(),i._27(-1,0,["\n  Loading...\n"])),(n()(),i._27(-1,null,["\n"])),(n()(),i._6(53,0,null,null,0,"br",[],null,null,null,null,null)),(n()(),i._6(54,0,null,null,0,"br",[],null,null,null,null,null)),(n()(),i._27(-1,null,["\n\n"])),(n()(),i._6(56,0,null,null,1,"h3",[],null,null,null,null,null)),(n()(),i._27(-1,null,["Busy container:"])),(n()(),i._27(-1,null,["\n"])),(n()(),i._6(59,0,null,null,11,"div",[["busyIndicatorType","straight"],["busyLabel","Loading..."],["class","vclContainer vclLayoutHorizontal"],["style","height:15em"]],[[2,"vclLoadingLayerContainer",null]],null,null,c,v)),i._5(60,49152,null,0,_,[],{busy:[0,"busy"],busyIndicatorType:[1,"busyIndicatorType"],busyLabel:[2,"busyLabel"]},null),(n()(),i._27(-1,0,["\n  "])),(n()(),i._6(62,0,null,0,7,"div",[["class","vclLayoutFlex"],["style","padding:0.5em"]],null,null,null,null,null)),(n()(),i._27(-1,null,["\n    Busy container"])),(n()(),i._6(64,0,null,null,0,"br",[],null,null,null,null,null)),(n()(),i._27(-1,null,["\n    "])),(n()(),i._6(66,0,null,null,2,"button",[["label","Make container busy for 3 secs"],["vcl-button",""]],[[2,"vclButton",null],[2,"vclHovered",null],[1,"disabled",0],[2,"vclSelected",null],[1,"aria-label",0]],[[null,"tap"],[null,"keypress"],[null,"mouseenter"],[null,"mouseleave"],[null,"click"]],function(n,l,s){var a=!0,t=n.component;if("keypress"===l){a=!1!==i._20(n,67).onKeypress(s)&&a}if("mouseenter"===l){a=!1!==i._20(n,67).onMouseEnter(s)&&a}if("mouseleave"===l){a=!1!==i._20(n,67).onMouseLeave(s)&&a}if("tap"===l){a=!1!==i._20(n,67).onTap(s)&&a}if("click"===l){a=!1!==i._20(n,67).onClick(s)&&a}if("tap"===l){a=!1!==t.makeBusy()&&a}return a},f.b,f.a)),i._5(67,4898816,null,1,L.a,[i.k],{label:[0,"label"]},null),i._25(603979776,1,{buttonContent:1}),(n()(),i._27(-1,null,["\n  "])),(n()(),i._27(-1,0,["\n"])),(n()(),i._27(-1,null,["\n"])),(n()(),i._6(72,0,null,null,0,"br",[],null,null,null,null,null)),(n()(),i._6(73,0,null,null,0,"br",[],null,null,null,null,null)),(n()(),i._27(-1,null,["\n\n"])),(n()(),i._6(75,0,null,null,1,"h3",[],null,null,null,null,null)),(n()(),i._27(-1,null,["Horizontal busy container:"])),(n()(),i._27(-1,null,["\n"])),(n()(),i._6(78,0,null,null,11,"div",[["busyIndicatorDirection","horizontal"],["busyIndicatorType","circle"],["busyLabel","Loading..."],["class","vclContainer vclLayoutHorizontal"],["style","height:15em"]],[[2,"vclLoadingLayerContainer",null]],null,null,c,v)),i._5(79,49152,null,0,_,[],{busy:[0,"busy"],busyIndicatorType:[1,"busyIndicatorType"],busyIndicatorDirection:[2,"busyIndicatorDirection"],busyLabel:[3,"busyLabel"]},null),(n()(),i._27(-1,0,["\n  "])),(n()(),i._6(81,0,null,0,7,"div",[["class","vclLayoutFlex"],["style","padding:0.5em"]],null,null,null,null,null)),(n()(),i._27(-1,null,["\n    Busy container"])),(n()(),i._6(83,0,null,null,0,"br",[],null,null,null,null,null)),(n()(),i._27(-1,null,["\n    "])),(n()(),i._6(85,0,null,null,2,"button",[["label","Make container busy for 3 secs"],["vcl-button",""]],[[2,"vclButton",null],[2,"vclHovered",null],[1,"disabled",0],[2,"vclSelected",null],[1,"aria-label",0]],[[null,"tap"],[null,"keypress"],[null,"mouseenter"],[null,"mouseleave"],[null,"click"]],function(n,l,s){var a=!0,t=n.component;if("keypress"===l){a=!1!==i._20(n,86).onKeypress(s)&&a}if("mouseenter"===l){a=!1!==i._20(n,86).onMouseEnter(s)&&a}if("mouseleave"===l){a=!1!==i._20(n,86).onMouseLeave(s)&&a}if("tap"===l){a=!1!==i._20(n,86).onTap(s)&&a}if("click"===l){a=!1!==i._20(n,86).onClick(s)&&a}if("tap"===l){a=!1!==t.makeVerticalBusy()&&a}return a},f.b,f.a)),i._5(86,4898816,null,1,L.a,[i.k],{label:[0,"label"]},null),i._25(603979776,2,{buttonContent:1}),(n()(),i._27(-1,null,["\n  "])),(n()(),i._27(-1,0,["\n"])),(n()(),i._27(-1,null,["\n"]))],function(n,l){var s=l.component;n(l,13,0,"straight");n(l,23,0,"horizontal");n(l,30,0,"straight","horizontal");n(l,40,0,"fa fa-circle-o-notch fa-spin fa-3x fa-fw");n(l,50,0,"http://www.polidoor.com/assets/img/loading.gif");n(l,60,0,s.isBusy,"straight","Loading...");n(l,67,0,"Make container busy for 3 secs");n(l,79,0,s.isVerticalBusy,"circle","horizontal","Loading...");n(l,86,0,"Make container busy for 3 secs")},function(n,l){n(l,59,0,i._20(l,60).busy);n(l,66,0,!0,i._20(l,67).hovered,i._20(l,67).isDisabled,i._20(l,67).selected,i._20(l,67).title),n(l,78,0,i._20(l,79).busy);n(l,85,0,!0,i._20(l,86).hovered,i._20(l,86).isDisabled,i._20(l,86).selected,i._20(l,86).title)})}function e(n){return i._29(0,[(n()(),i._6(0,0,null,null,1,"ng-component",[],null,null,null,p,q)),i._5(1,49152,null,0,o,[],null,null)],null,null)}Object.defineProperty(l,"__esModule",{value:!0});var i=s(4),o=function(){function n(){this.isBusy=!1,this.isVerticalBusy=!1}return n.prototype.makeBusy=function(){var n=this;this.isBusy=!0,setTimeout(function(){return n.isBusy=!1},3e3)},n.prototype.makeVerticalBusy=function(){var n=this;this.isVerticalBusy=!0,setTimeout(function(){return n.isVerticalBusy=!1},3e3)},n}(),r={demo:a},h=function(){function n(){}return n}(),d=s(411),g=s(517),y=s(475),j=s(32),b=s(21),_=function(){function n(){this.busy=!1,this.busyIndicatorType="circular",this.busyIndicatorDirection="vertical",this.busyIconHeight="3em",this.busyIconWidth="3em"}return n}(),m=[],v=i._4({encapsulation:2,styles:m,data:{}}),f=s(177),L=s(106),B=[],q=i._4({encapsulation:2,styles:B,data:{}}),I=i._2("ng-component",o,e,{},{},[]),k=s(43),w=s(174),T=s(71),z=s(410),C=s(412),D=s(175),H=s(176),M=s(178),x=s(518),S=s(42),V=s(409);s.d(l,"BusyDemoModuleNgFactory",function(){return A});var A=i._3(h,[],function(n){return i._17([i._18(512,i.j,i.Z,[[8,[d.a,I]],[3,i.j],i.w]),i._18(4608,b.n,b.m,[i.t,[2,b.v]]),i._18(4608,k.a,k.a,[]),i._18(512,b.c,b.c,[]),i._18(512,w.a,w.a,[]),i._18(512,T.d,T.d,[]),i._18(512,z.a,z.a,[]),i._18(512,C.a,C.a,[]),i._18(512,D.a,D.a,[]),i._18(512,H.a,H.a,[]),i._18(512,M.a,M.a,[]),i._18(512,x.a,x.a,[]),i._18(512,S.m,S.m,[[2,S.r],[2,S.l]]),i._18(512,h,h,[]),i._18(1024,S.j,function(){return[[{path:"",component:V.a,data:r}]]},[])])})}});