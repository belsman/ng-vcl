(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{CI8A:function(s,a){s.exports='<span class="hljs-keyword">import</span> { Component } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/core\'</span>;\n\n<span class="hljs-meta">@Component</span>({\n  templateUrl: <span class="hljs-string">\'demo.component.html\'</span>\n})\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> InputDemoComponent {\n  data1 = <span class="hljs-string">\'foobar\'</span>;\n}\n'},UOgG:function(s,a){s.exports='<span class="hljs-tag">&lt;<span class="hljs-name">vcl-form-control-group</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">vcl-label</span>&gt;</span>Basic input<span class="hljs-tag">&lt;/<span class="hljs-name">vcl-label</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">vcl-input-field</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">input</span> <span class="hljs-attr">vclInput</span> [(<span class="hljs-attr">ngModel</span>)]=<span class="hljs-string">"data1"</span> /&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">vcl-input-field</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">vcl-form-control-group</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">b</span>&gt;</span>Input value:<span class="hljs-tag">&lt;/<span class="hljs-name">b</span>&gt;</span> {{data1}}\n\n<span class="hljs-tag">&lt;<span class="hljs-name">vcl-form-control-group</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">vcl-label</span>&gt;</span>Input (autoselect)<span class="hljs-tag">&lt;/<span class="hljs-name">vcl-label</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">vcl-input-field</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">input</span> <span class="hljs-attr">vclInput</span> <span class="hljs-attr">autoselect</span>=<span class="hljs-string">true</span> /&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">vcl-input-field</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">vcl-form-control-group</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">vcl-form-control-group</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">vcl-label</span>&gt;</span>Readonly input<span class="hljs-tag">&lt;/<span class="hljs-name">vcl-label</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">vcl-input-field</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">input</span> <span class="hljs-attr">vclInput</span> <span class="hljs-attr">value</span>=<span class="hljs-string">\'readonly\'</span> [<span class="hljs-attr">readonly</span>]=<span class="hljs-string">"true"</span> /&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">vcl-input-field</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">vcl-form-control-group</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">vcl-form-control-group</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">vcl-label</span>&gt;</span>Disabled input<span class="hljs-tag">&lt;/<span class="hljs-name">vcl-label</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">vcl-input-field</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">input</span> <span class="hljs-attr">vclInput</span> <span class="hljs-attr">value</span>=<span class="hljs-string">\'disabled\'</span> [<span class="hljs-attr">disabled</span>]=<span class="hljs-string">"true"</span> /&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">vcl-input-field</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">vcl-form-control-group</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">vcl-form-control-group</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">vcl-label</span>&gt;</span>textarea<span class="hljs-tag">&lt;/<span class="hljs-name">vcl-label</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">vcl-input-field</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">textarea</span> <span class="hljs-attr">vclInput</span> <span class="hljs-attr">rows</span>=<span class="hljs-string">"3"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">textarea</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">vcl-input-field</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">vcl-form-control-group</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">vcl-form-control-group</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">vcl-label</span>&gt;</span>Autogrowing textarea<span class="hljs-tag">&lt;/<span class="hljs-name">vcl-label</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">vcl-input-field</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">textarea</span> <span class="hljs-attr">vclInput</span> [<span class="hljs-attr">autogrow</span>]=<span class="hljs-string">"true"</span> [<span class="hljs-attr">minRows</span>]=<span class="hljs-string">"5"</span> [<span class="hljs-attr">maxRows</span>]=<span class="hljs-string">"10"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">textarea</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">vcl-input-field</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">vcl-form-control-group</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">vcl-form-control-group</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">vcl-label</span>&gt;</span>Disabled textarea<span class="hljs-tag">&lt;/<span class="hljs-name">vcl-label</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">vcl-input-field</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">textarea</span> <span class="hljs-attr">vclInput</span> [<span class="hljs-attr">disabled</span>]=<span class="hljs-string">"true"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">textarea</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">vcl-input-field</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">vcl-form-control-group</span>&gt;</span>\n'},"V+ad":function(s,a,n){"use strict";n.r(a),n.d(a,"demo",(function(){return m})),n.d(a,"InputDemoModule",(function(){return b}));var l=n("ofXK"),t=n("3Pt+"),p=n("tyNb"),c=n("19H1"),e=n("2FIb"),o=n("fXoL"),r=n("xsjC"),h=n("x1VK"),g=n("pKlR"),u=n("oZnf"),j=n("1/Kn"),d=n("mo8z");let i=(()=>{class s{constructor(){this.data1="foobar"}}return s.\u0275fac=function(a){return new(a||s)},s.\u0275cmp=o.Gb({type:s,selectors:[["ng-component"]],decls:38,vars:8,consts:[["vclInput","",3,"ngModel","ngModelChange"],["vclInput","","autoselect","true"],["vclInput","","value","readonly",3,"readonly"],["vclInput","","value","disabled",3,"disabled"],["vclInput","","rows","3"],["vclInput","",3,"autogrow","minRows","maxRows"],["vclInput","",3,"disabled"]],template:function(s,a){1&s&&(o.Sb(0,"vcl-form-control-group"),o.Sb(1,"vcl-label"),o.yc(2,"Basic input"),o.Rb(),o.Sb(3,"vcl-input-field"),o.Sb(4,"input",0),o.ac("ngModelChange",(function(s){return a.data1=s})),o.Rb(),o.Rb(),o.Rb(),o.Sb(5,"b"),o.yc(6,"Input value:"),o.Rb(),o.yc(7),o.Sb(8,"vcl-form-control-group"),o.Sb(9,"vcl-label"),o.yc(10,"Input (autoselect)"),o.Rb(),o.Sb(11,"vcl-input-field"),o.Nb(12,"input",1),o.Rb(),o.Rb(),o.Sb(13,"vcl-form-control-group"),o.Sb(14,"vcl-label"),o.yc(15,"Readonly input"),o.Rb(),o.Sb(16,"vcl-input-field"),o.Nb(17,"input",2),o.Rb(),o.Rb(),o.Sb(18,"vcl-form-control-group"),o.Sb(19,"vcl-label"),o.yc(20,"Disabled input"),o.Rb(),o.Sb(21,"vcl-input-field"),o.Nb(22,"input",3),o.Rb(),o.Rb(),o.Sb(23,"vcl-form-control-group"),o.Sb(24,"vcl-label"),o.yc(25,"textarea"),o.Rb(),o.Sb(26,"vcl-input-field"),o.Nb(27,"textarea",4),o.Rb(),o.Rb(),o.Sb(28,"vcl-form-control-group"),o.Sb(29,"vcl-label"),o.yc(30,"Autogrowing textarea"),o.Rb(),o.Sb(31,"vcl-input-field"),o.Nb(32,"textarea",5),o.Rb(),o.Rb(),o.Sb(33,"vcl-form-control-group"),o.Sb(34,"vcl-label"),o.yc(35,"Disabled textarea"),o.Rb(),o.Sb(36,"vcl-input-field"),o.Nb(37,"textarea",6),o.Rb(),o.Rb()),2&s&&(o.Ab(4),o.ic("ngModel",a.data1),o.Ab(3),o.Ac(" ",a.data1," "),o.Ab(10),o.ic("readonly",!0),o.Ab(5),o.ic("disabled",!0),o.Ab(10),o.ic("autogrow",!0)("minRows",5)("maxRows",10),o.Ab(5),o.ic("disabled",!0))},directives:[r.a,h.a,g.a,u.a,j.a,t.c,t.r,t.u,d.a],encapsulation:2}),s})();function m(){return{label:"Input",tabs:{Demo:i,"README.md":{type:"md",content:'<h1 id="input">input</h1>\n<p>Enhanced text input</p>\n<h2 id="usage">Usage</h2>\n<pre class="hljs"><span class="hljs-keyword">import</span> { VCLInputModule } <span class="hljs-keyword">from</span> <span class="hljs-string">&apos;@vcl/ng-vcl&apos;</span>;\n\n@NgModule({\n  <span class="hljs-attr">imports</span>: [ VCLInputModule ],\n  ...\n})\n<span class="hljs-keyword">export</span> <span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">AppComponent</span> </span>{}</pre>\n<pre class="hljs"><span class="hljs-tag">&lt;<span class="hljs-name">input</span> <span class="hljs-attr">vclInput</span> [(<span class="hljs-attr">ngModel</span>)]=<span class="hljs-string">&quot;data&quot;</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">input</span> <span class="hljs-attr">vclInput</span> <span class="hljs-attr">autoselect</span>=<span class="hljs-string">true</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">textarea</span> <span class="hljs-attr">vclInput</span> [(<span class="hljs-attr">ngModel</span>)]=<span class="hljs-string">&quot;data1&quot;</span> [<span class="hljs-attr">autogrow</span>]=<span class="hljs-string">&quot;true&quot;</span> [<span class="hljs-attr">minRows</span>]=<span class="hljs-string">&quot;5&quot;</span> [<span class="hljs-attr">maxRows</span>]=<span class="hljs-string">&quot;10&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">textarea</span>&gt;</span></pre>\n<h3 id="api">API</h3>\n<h4 id="inputvclinput-attributes">input[vclInput] attributes</h4>\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Type</th>\n<th>Default</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody><tr>\n<td><code>disabled</code></td>\n<td>boolean</td>\n<td>false</td>\n<td>Disables the input when true</td>\n</tr>\n<tr>\n<td><code>autoselect</code></td>\n<td>boolean</td>\n<td>false</td>\n<td>Selects text on focus</td>\n</tr>\n</tbody></table>\n<h4 id="textareavclinput-attributes">textarea[vclInput] Attributes</h4>\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Type</th>\n<th>Default</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody><tr>\n<td><code>autogrow</code></td>\n<td>boolean</td>\n<td>false</td>\n<td>Adjusts the <code>rows</code> attribute so it matches the current values number of lines</td>\n</tr>\n<tr>\n<td><code>minRows</code></td>\n<td>number</td>\n<td></td>\n<td>The min value for <code>rows</code> when using autogrow</td>\n</tr>\n<tr>\n<td><code>maxRows</code></td>\n<td>number</td>\n<td></td>\n<td>The max value for <code>rows</code> when using autogrow</td>\n</tr>\n<tr>\n<td><code>autoselect</code></td>\n<td>boolean</td>\n<td>false</td>\n<td>Selects text on focus</td>\n</tr>\n</tbody></table>\n'},"demo.component.html":{type:"pre",content:n("UOgG")},"demo.component.ts":{type:"pre",content:n("CI8A")}}}}let b=(()=>{class s{}return s.\u0275mod=o.Kb({type:s}),s.\u0275inj=o.Jb({factory:function(a){return new(a||s)},imports:[[l.c,t.m,e.b,c.O,p.g.forChild([{path:"",component:e.a,data:{demo:m}}])]]}),s})()}}]);