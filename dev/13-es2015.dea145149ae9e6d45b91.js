(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{EeCm:function(s,a){s.exports='<span class="hljs-keyword">import</span> { Component, ViewEncapsulation } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/core\'</span>;\n\n<span class="hljs-meta">@Component</span>({\n  templateUrl: <span class="hljs-string">\'demo.component.html\'</span>,\n  encapsulation: ViewEncapsulation.None,\n  styles: [<span class="hljs-string">`\n    .huge img {\n      width: 5em;\n      height: 5em;\n    }\n  `</span>]\n})\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> BusyDemoComponent {\n  isBusy = <span class="hljs-literal">false</span>;\n\n  makeBusy() {\n    <span class="hljs-keyword">this</span>.isBusy = <span class="hljs-literal">true</span>;\n    setTimeout(<span class="hljs-function"><span class="hljs-params">()</span> =&gt;</span> <span class="hljs-keyword">this</span>.isBusy = <span class="hljs-literal">false</span>, <span class="hljs-number">3000</span>);\n  }\n}\n'},lsXT:function(s,a){s.exports='<span class="hljs-tag">&lt;<span class="hljs-name">h3</span>&gt;</span>Simple busy indicator<span class="hljs-tag">&lt;/<span class="hljs-name">h3</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">vcl-busy-indicator</span>&gt;</span>Loading...<span class="hljs-tag">&lt;/<span class="hljs-name">vcl-busy-indicator</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">h3</span>&gt;</span>Horizontal busy indicator<span class="hljs-tag">&lt;/<span class="hljs-name">h3</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">vcl-busy-indicator</span> [<span class="hljs-attr">layout</span>]=<span class="hljs-string">"\'horizontal\'"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"huge"</span>&gt;</span>Loading...<span class="hljs-tag">&lt;/<span class="hljs-name">vcl-busy-indicator</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">h3</span>&gt;</span>Busy indicator with text<span class="hljs-tag">&lt;/<span class="hljs-name">h3</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">vcl-busy-indicator</span>&gt;</span>\n    Loading...\n  <span class="hljs-tag">&lt;/<span class="hljs-name">vcl-busy-indicator</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">h3</span>&gt;</span>Indicator using icon font<span class="hljs-tag">&lt;/<span class="hljs-name">h3</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">vcl-busy-indicator</span>  <span class="hljs-attr">icon</span>=<span class="hljs-string">"fas fa-circle-notch fa-spin fa-3x fa-fw"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vcl-busy-indicator</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">h3</span>&gt;</span>Indicator using custom image<span class="hljs-tag">&lt;/<span class="hljs-name">h3</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">vcl-busy-indicator</span> <span class="hljs-attr">imageSrc</span>=<span class="hljs-string">"http://www.polidoor.com/assets/img/loading.gif"</span>&gt;</span>\n  Loading...\n<span class="hljs-tag">&lt;/<span class="hljs-name">vcl-busy-indicator</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">h3</span>&gt;</span>Busy container<span class="hljs-tag">&lt;/<span class="hljs-name">h3</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">div</span> [<span class="hljs-attr">vcl-busy-indicator-cover</span>]=<span class="hljs-string">"isBusy"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"container row justify-center"</span> <span class="hljs-attr">style</span>=<span class="hljs-string">"height:15em"</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">vcl-busy-indicator</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vcl-busy-indicator</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">vcl-button</span> (<span class="hljs-attr">click</span>)=<span class="hljs-string">"makeBusy()"</span>&gt;</span>Make container busy for 3 secs<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n'},uMWy:function(s,a,n){"use strict";n.r(a);var t=n("ofXK"),l=n("tyNb"),c=n("19H1"),p=n("2FIb"),i=n("fXoL"),e=n("dCgY"),o=n("F5Eo"),h=n("6B8K");let r=(()=>{class s{constructor(){this.isBusy=!1}makeBusy(){this.isBusy=!0,setTimeout(()=>this.isBusy=!1,3e3)}}return s.\u0275fac=function(a){return new(a||s)},s.\u0275cmp=i.Gb({type:s,selectors:[["ng-component"]],decls:35,vars:2,consts:[[1,"huge",3,"layout"],["icon","fas fa-circle-notch fa-spin fa-3x fa-fw"],["imageSrc","http://www.polidoor.com/assets/img/loading.gif"],[1,"container","row","justify-center",2,"height","15em",3,"vcl-busy-indicator-cover"],["vcl-button","",3,"click"]],template:function(s,a){1&s&&(i.Sb(0,"h3"),i.yc(1,"Simple busy indicator"),i.Rb(),i.Sb(2,"vcl-busy-indicator"),i.yc(3,"Loading..."),i.Rb(),i.Nb(4,"br"),i.Nb(5,"br"),i.Sb(6,"h3"),i.yc(7,"Horizontal busy indicator"),i.Rb(),i.Sb(8,"vcl-busy-indicator",0),i.yc(9,"Loading..."),i.Rb(),i.Nb(10,"br"),i.Nb(11,"br"),i.Sb(12,"h3"),i.yc(13,"Busy indicator with text"),i.Rb(),i.Sb(14,"vcl-busy-indicator"),i.yc(15," Loading... "),i.Rb(),i.Nb(16,"br"),i.Nb(17,"br"),i.Sb(18,"h3"),i.yc(19,"Indicator using icon font"),i.Rb(),i.Nb(20,"vcl-busy-indicator",1),i.Nb(21,"br"),i.Nb(22,"br"),i.Sb(23,"h3"),i.yc(24,"Indicator using custom image"),i.Rb(),i.Sb(25,"vcl-busy-indicator",2),i.yc(26," Loading...\n"),i.Rb(),i.Nb(27,"br"),i.Nb(28,"br"),i.Sb(29,"h3"),i.yc(30,"Busy container"),i.Rb(),i.Sb(31,"div",3),i.Nb(32,"vcl-busy-indicator"),i.Sb(33,"button",4),i.ac("click",(function(s){return a.makeBusy()})),i.yc(34,"Make container busy for 3 secs"),i.Rb(),i.Rb()),2&s&&(i.Ab(8),i.ic("layout","horizontal"),i.Ab(23),i.ic("vcl-busy-indicator-cover",a.isBusy))},directives:[e.a,o.a,h.b],styles:["\n    .huge img {\n      width: 5em;\n      height: 5em;\n    }\n  "],encapsulation:2}),s})();function d(){return{label:"Busy Indicator",tabs:{Demo:r,"README.md":{type:"md",content:'<h1 id="busy-indicator">Busy Indicator</h1>\n<h2 id="vcl-busy-indicator">vcl-busy-indicator</h2>\n<p>An indicator to show that a lasting operation is currently in progress.</p>\n<h3 id="usage">Usage</h3>\n<pre class="hljs"><span class="hljs-tag">&lt;<span class="hljs-name">vcl-busy-indicator</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">span</span>&gt;</span>Loading&#x2026;<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">vcl-busy-indicator</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">vcl-busy-indicator</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;fas fa-circle-notch fa-spin fa-3x fa-fw&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vcl-busy-indicator</span>&gt;</span></pre>\n<h3 id="api">API</h3>\n<h4 id="vcl-busy-indicator-attributes">vcl-busy-indicator Attributes</h4>\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Type</th>\n<th>Default</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody><tr>\n<td><code>icon</code></td>\n<td>string</td>\n<td>&quot;Loading&quot;</td>\n<td>Alternative icon</td>\n</tr>\n<tr>\n<td><code>label</code></td>\n<td>string</td>\n<td>&quot;Loading&quot;</td>\n<td>icon aria label</td>\n</tr>\n<tr>\n<td><code>imageHeight</code></td>\n<td>string</td>\n<td>&quot;3em&quot;</td>\n<td>icon height</td>\n</tr>\n<tr>\n<td><code>imageWidth</code></td>\n<td>string</td>\n<td>&quot;3em&quot;</td>\n<td>icon width</td>\n</tr>\n<tr>\n<td><code>layout</code></td>\n<td>&quot;vertical&quot; or &quot;horizontal&quot;</td>\n<td>&quot;vertical&quot;</td>\n<td>The indicator direction</td>\n</tr>\n</tbody></table>\n<h2 id="vcl-busy-indicator-cover">[vcl-busy-indicator-cover]</h2>\n<p>Covers an element with a layer showing the vcl-busy-indicator to indicate a busy state and prevent user interaction.</p>\n<h3 id="usage-1">Usage</h3>\n<pre class="hljs"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> [<span class="hljs-attr">vcl-busy-indicator-cover</span>]=<span class="hljs-string">&quot;true&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">vcl-busy-indicator</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vcl-busy-indicator</span>&gt;</span>\n  This content will be covered by the layer\n<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></pre>\n<h3 id="api-1">API</h3>\n<h4 id="vcl-busy-indicator-cover-attributes">vcl-busy-indicator-cover Attributes</h4>\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Type</th>\n<th>Default</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody><tr>\n<td><code>vcl-busy-indicator-cover</code></td>\n<td>boolean</td>\n<td>false</td>\n<td>Shows the layer when <code>true</code></td>\n</tr>\n</tbody></table>\n'},"demo.component.html":{type:"pre",content:n("lsXT")},"demo.component.ts":{type:"pre",content:n("EeCm")}}}}n.d(a,"demo",(function(){return d})),n.d(a,"BusyDemoModule",(function(){return g}));let g=(()=>{class s{}return s.\u0275mod=i.Kb({type:s}),s.\u0275inj=i.Jb({factory:function(a){return new(a||s)},imports:[[t.c,p.b,c.C,c.P,c.A,l.g.forChild([{path:"",component:p.a,data:{demo:d}}])]]}),s})()}}]);