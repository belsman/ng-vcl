(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{GAjj:function(s,n,a){"use strict";a.r(n),a.d(n,"demo",(function(){return w})),a.d(n,"NotifierDemoModule",(function(){return v}));var t=a("ofXK"),l=a("tyNb"),p=a("3Pt+"),o=a("19H1"),c=a("2FIb"),i=a("fXoL"),e=a("ErXM"),r=a("6B8K"),h=a("9Rb9"),j=a("+rOU"),g=a("rI4U");let u=(()=>{class s{constructor(s,n,a){this.notifierService=s,this.templateRef=n,this.viewContainerRef=a,this.opts={content:void 0}}open(){this.notificationOverlayRef=this.notifierService.queue(Object.assign(Object.assign({},this.opts),{content:new j.i(this.templateRef,this.viewContainerRef,{content:"string"==typeof this.opts.content?this.opts.content:void 0})}))}close(){var s;null===(s=this.notificationOverlayRef)||void 0===s||s.close()}}return s.\u0275fac=function(n){return new(n||s)(i.Mb(g.a),i.Mb(i.K),i.Mb(i.N))},s.\u0275dir=i.Hb({type:s,selectors:[["","vclNotifier",""]],inputs:{opts:["vclNotifier","opts"]},exportAs:["vclNotifier"]}),s})();const m=["htmlNotification"];function b(s,n){if(1&s&&(i.Sb(0,"p"),i.yc(1,"Notification content: "),i.Sb(2,"span",12),i.yc(3),i.Rb(),i.Rb()),2&s){const s=n.content;i.Ab(3),i.zc(s)}}let f=1,d=(()=>{class s{constructor(s){this.notifier=s,this.positions=o.r,this.position=o.r.TopRight,this.modalNotificationOptions={content:"I am modal!",position:o.r.Center,title:"Modal Title",hasBackdrop:!0,timeout:!1,showCloseButton:!0}}default(){this.notifier.queue({content:"A message "+f++,position:this.position})}info(){this.notifier.info({content:"An info message "+f++,title:"Info",icon:"vcl:info",position:this.position})}success(){this.notifier.success({content:"A success message "+f++,title:"Success",position:this.position})}warning(){this.notifier.warning({content:"A warning "+f++,title:"Warning",position:this.position})}error(){this.notifier.error({content:"An error message "+f++,title:"Error",position:this.position})}custom(){this.notifier.queue({content:"A custom class message",position:this.position,showCloseButton:!1,timeout:1e4,class:"demoCustomNotifier"})}}return s.\u0275fac=function(n){return new(n||s)(i.Mb(o.s))},s.\u0275cmp=i.Gb({type:s,selectors:[["ng-component"]],viewQuery:function(s,n){var a;1&s&&i.Dc(m,!0),2&s&&i.mc(a=i.bc())&&(n.htmlNotification=a.first)},decls:47,vars:9,consts:[["mode","single",3,"value","valueChange"],["vcl-square-button","",3,"value"],["icon","mdi:arrow-top-right"],["icon","mdi:arrow-up"],["icon","mdi:arrow-top-left"],["icon","mdi:arrow-bottom-right"],["icon","mdi:arrow-down"],["icon","mdi:arrow-bottom-left"],["icon","mdi:arrow-all"],["vcl-button","",3,"click"],[3,"vclNotifier"],["modalNotification","vclNotifier"],[2,"font-style","italic"]],template:function(s,n){if(1&s){const s=i.Tb();i.Sb(0,"vcl-button-group",0),i.ac("valueChange",(function(s){return n.position=s})),i.Sb(1,"button",1),i.Nb(2,"vcl-icon",2),i.Rb(),i.Sb(3,"button",1),i.Nb(4,"vcl-icon",3),i.Rb(),i.Sb(5,"button",1),i.Nb(6,"vcl-icon",4),i.Rb(),i.Sb(7,"button",1),i.Nb(8,"vcl-icon",5),i.Rb(),i.Sb(9,"button",1),i.Nb(10,"vcl-icon",6),i.Rb(),i.Sb(11,"button",1),i.Nb(12,"vcl-icon",7),i.Rb(),i.Sb(13,"button",1),i.Nb(14,"vcl-icon",8),i.Rb(),i.Rb(),i.Nb(15,"br"),i.Nb(16,"br"),i.Sb(17,"button",9),i.ac("click",(function(){return n.default()})),i.yc(18,"An message"),i.Rb(),i.Nb(19,"br"),i.Nb(20,"br"),i.Sb(21,"button",9),i.ac("click",(function(){return n.info()})),i.yc(22,"An info message"),i.Rb(),i.Nb(23,"br"),i.Nb(24,"br"),i.Sb(25,"button",9),i.ac("click",(function(){return n.success()})),i.yc(26,"A success message"),i.Rb(),i.Nb(27,"br"),i.Nb(28,"br"),i.Sb(29,"button",9),i.ac("click",(function(){return n.warning()})),i.yc(30,"A warning"),i.Rb(),i.Nb(31,"br"),i.Nb(32,"br"),i.Sb(33,"button",9),i.ac("click",(function(){return n.error()})),i.yc(34,"An error message"),i.Rb(),i.Nb(35,"br"),i.Nb(36,"br"),i.Sb(37,"button",9),i.ac("click",(function(){return n.custom()})),i.yc(38,"A custom message"),i.Rb(),i.Nb(39,"br"),i.Nb(40,"br"),i.Sb(41,"button",9),i.ac("click",(function(){return i.oc(s),i.nc(46).open()})),i.yc(42,"A centered modal message"),i.Rb(),i.Nb(43,"br"),i.Nb(44,"br"),i.wc(45,b,4,1,"ng-template",10,11,i.xc)}2&s&&(i.ic("value",n.position),i.Ab(1),i.ic("value",n.positions.TopRight),i.Ab(2),i.ic("value",n.positions.Top),i.Ab(2),i.ic("value",n.positions.TopLeft),i.Ab(2),i.ic("value",n.positions.BottomRight),i.Ab(2),i.ic("value",n.positions.Bottom),i.Ab(2),i.ic("value",n.positions.BottomLeft),i.Ab(2),i.ic("value",n.positions.Center),i.Ab(32),i.ic("vclNotifier",n.modalNotificationOptions))},directives:[e.a,r.b,h.a,u],styles:["\n    .demoCustomNotifier {\n      background-color: black;\n      color: white;\n    }\n  "],encapsulation:2}),s})();function w(){return{label:"Notifier",tabs:{Demo:d,"README.md":{type:"md",content:'<h1 id="vcl-notifications">vcl-notifications</h1>\n<p>Notification messages for events with growl-style support</p>\n<h2 id="usage">Usage</h2>\n<pre class="hljs"><span class="hljs-keyword">import</span> { VCLNotifierModule } <span class="hljs-keyword">from</span> <span class="hljs-string">&apos;@vcl/ng-vcl&apos;</span>;\n\n@NgModule({\n  <span class="hljs-attr">imports</span>: [ \n    VCLNotifierModule,\n  ],\n  ...\n})\n<span class="hljs-keyword">export</span> <span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">AppComponent</span> </span>{}</pre>\n<pre class="hljs"><span class="hljs-meta">@Component</span>({ ... })\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> MyComponent {\n\n  <span class="hljs-keyword">constructor</span>(<span class="hljs-params"><span class="hljs-keyword">private</span> notifier: NotifierService</span>) {}\n\n  info() {\n    <span class="hljs-keyword">this</span>.notifier.queue({\n      content: <span class="hljs-string">&apos;A message&apos;</span>\n    });\n  }\n  info() {\n    <span class="hljs-keyword">this</span>.notifier.info({\n      content: <span class="hljs-string">&apos;An info message&apos;</span>\n    });\n  }\n  success() {\n    <span class="hljs-keyword">this</span>.notifier.success({\n      content: <span class="hljs-string">&apos;A success message&apos;</span>,\n      position: NotifierPosition.BottomRight\n    });\n  }\n  warning() {\n    <span class="hljs-keyword">this</span>.notifier.warning({\n      content: <span class="hljs-string">&apos;A warning&apos;</span>,\n      showCloseButton: <span class="hljs-literal">true</span>,\n      timeout: <span class="hljs-number">10000</span>\n    });\n  }\n  error() {\n    <span class="hljs-keyword">this</span>.notifier.error({\n      content: <span class="hljs-string">&apos;An error message&apos;</span>,\n      timeout: <span class="hljs-literal">false</span>,\n      icon: <span class="hljs-string">&apos;fas:warning&apos;</span>,\n      position: NotifierPosition.TopLeft,\n      <span class="hljs-keyword">class</span>: <span class="hljs-string">&apos;my-error-message&apos;</span>\n    });\n  }\n}</pre>\n<pre class="hljs"><span class="hljs-tag">&lt;<span class="hljs-name">ng-template</span> [<span class="hljs-attr">vclNotifier</span>]=<span class="hljs-string">&quot;{ title: &apos;Title&apos; }&quot;</span> #<span class="hljs-attr">n</span>=<span class="hljs-string">&quot;vclNotifier&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>Hello<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">ng-template</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">button</span> (<span class="hljs-attr">click</span>)=<span class="hljs-string">&quot;n.open()&quot;</span>&gt;</span>Show notification<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>\n</pre>\n<h3 id="api">API</h3>\n<pre class="hljs"><span class="hljs-keyword">export</span> <span class="hljs-keyword">enum</span> NotifierType {\n  None,\n  Info,\n  Success,\n  Warning,\n  <span class="hljs-built_in">Error</span>\n}\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">enum</span> NotifierPosition {\n  TopRight,\n  Top,\n  TopLeft,\n  BottomRight,\n  Bottom,\n  BottomLeft,\n  Center\n}\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">interface</span> NotifierOptions {\n  content?: <span class="hljs-built_in">string</span>;\n  <span class="hljs-keyword">type</span>?: NotifierType;\n  icon: <span class="hljs-built_in">string</span> | <span class="hljs-literal">false</span>;\n  showCloseButton?: <span class="hljs-built_in">boolean</span>;\n  position?: NotifierPosition;\n  timeout?: <span class="hljs-built_in">number</span> | <span class="hljs-built_in">boolean</span>;\n  <span class="hljs-keyword">class</span>?: <span class="hljs-built_in">string</span>;\n  context?: <span class="hljs-built_in">any</span>;\n}</pre>\n'},"demo.component.html":{type:"pre",content:a("eqRX")},"demo.component.ts":{type:"pre",content:a("msDu")}}}}let v=(()=>{class s{}return s.\u0275mod=i.Kb({type:s}),s.\u0275inj=i.Jb({factory:function(n){return new(n||s)},imports:[[t.c,p.m,c.b,o.U,o.z,o.A,l.g.forChild([{path:"",component:c.a,data:{demo:w}}])]]}),s})()},eqRX:function(s,n){s.exports='\n<span class="hljs-tag">&lt;<span class="hljs-name">vcl-button-group</span> [(<span class="hljs-attr">value</span>)]=<span class="hljs-string">"position"</span> <span class="hljs-attr">mode</span>=<span class="hljs-string">"single"</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">vcl-square-button</span> [<span class="hljs-attr">value</span>]=<span class="hljs-string">"positions.TopRight"</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">vcl-icon</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">"mdi:arrow-top-right"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vcl-icon</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">vcl-square-button</span> [<span class="hljs-attr">value</span>]=<span class="hljs-string">"positions.Top"</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">vcl-icon</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">"mdi:arrow-up"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vcl-icon</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">vcl-square-button</span> [<span class="hljs-attr">value</span>]=<span class="hljs-string">"positions.TopLeft"</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">vcl-icon</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">"mdi:arrow-top-left"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vcl-icon</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">vcl-square-button</span> [<span class="hljs-attr">value</span>]=<span class="hljs-string">"positions.BottomRight"</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">vcl-icon</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">"mdi:arrow-bottom-right"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vcl-icon</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">vcl-square-button</span> [<span class="hljs-attr">value</span>]=<span class="hljs-string">"positions.Bottom"</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">vcl-icon</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">"mdi:arrow-down"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vcl-icon</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">vcl-square-button</span> [<span class="hljs-attr">value</span>]=<span class="hljs-string">"positions.BottomLeft"</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">vcl-icon</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">"mdi:arrow-bottom-left"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vcl-icon</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">vcl-square-button</span> [<span class="hljs-attr">value</span>]=<span class="hljs-string">"positions.Center"</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">vcl-icon</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">"mdi:arrow-all"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vcl-icon</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">vcl-button-group</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">vcl-button</span> (<span class="hljs-attr">click</span>)=<span class="hljs-string">"default()"</span>&gt;</span>An message<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">vcl-button</span> (<span class="hljs-attr">click</span>)=<span class="hljs-string">"info()"</span>&gt;</span>An info message<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">vcl-button</span> (<span class="hljs-attr">click</span>)=<span class="hljs-string">"success()"</span>&gt;</span>A success message<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">vcl-button</span> (<span class="hljs-attr">click</span>)=<span class="hljs-string">"warning()"</span>&gt;</span>A warning<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">vcl-button</span> (<span class="hljs-attr">click</span>)=<span class="hljs-string">"error()"</span>&gt;</span>An error message<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">vcl-button</span> (<span class="hljs-attr">click</span>)=<span class="hljs-string">"custom()"</span>&gt;</span>A custom message<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">vcl-button</span> (<span class="hljs-attr">click</span>)=<span class="hljs-string">"modalNotification.open()"</span>&gt;</span>A centered modal message<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">ng-template</span> \n  [<span class="hljs-attr">vclNotifier</span>]=<span class="hljs-string">"modalNotificationOptions"</span>\n  #<span class="hljs-attr">modalNotification</span>=<span class="hljs-string">"vclNotifier"</span>\n  <span class="hljs-attr">let-content</span>=<span class="hljs-string">"content"</span>\n  &gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>Notification content: <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">style</span>=<span class="hljs-string">"font-style: italic;"</span>&gt;</span>{{content}}<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>\n\n<span class="hljs-tag">&lt;/<span class="hljs-name">ng-template</span>&gt;</span>\n\n'},msDu:function(s,n){s.exports='<span class="hljs-keyword">import</span> { NotifierPosition, NotifierService, NotifierOptions } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@vcl/ng-vcl\'</span>;\n<span class="hljs-keyword">import</span> { Component, Input, ViewEncapsulation, ViewChild, TemplateRef } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/core\'</span>;\n<span class="hljs-keyword">import</span> { TemplatePortal } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/cdk/portal\'</span>;\n\n<span class="hljs-keyword">let</span> cnt = <span class="hljs-number">1</span>;\n\n<span class="hljs-meta">@Component</span>({\n  templateUrl: <span class="hljs-string">\'demo.component.html\'</span>,\n  encapsulation: ViewEncapsulation.None,\n  styles: [<span class="hljs-string">`\n    .demoCustomNotifier {\n      background-color: black;\n      color: white;\n    }\n  `</span>]\n})\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> NotifierDemoComponent {\n\n  <span class="hljs-keyword">constructor</span>(<span class="hljs-params"><span class="hljs-keyword">private</span> notifier: NotifierService</span>) {}\n\n  positions = NotifierPosition;\n  position: NotifierPosition = NotifierPosition.TopRight;\n\n  <span class="hljs-meta">@ViewChild</span>(<span class="hljs-string">\'htmlNotification\'</span>)\n  htmlNotification: TemplatePortal;\n\n  <span class="hljs-keyword">default</span>() {\n    <span class="hljs-keyword">this</span>.notifier.queue({\n      content: <span class="hljs-string">\'A message \'</span> + cnt++,\n      position: <span class="hljs-keyword">this</span>.position\n    });\n  }\n  info() {\n    <span class="hljs-keyword">this</span>.notifier.info({\n      content: <span class="hljs-string">\'An info message \'</span> + cnt++,\n      title: <span class="hljs-string">\'Info\'</span>,\n      icon: <span class="hljs-string">\'vcl:info\'</span>,\n      position: <span class="hljs-keyword">this</span>.position,\n    });\n  }\n  success() {\n    <span class="hljs-keyword">this</span>.notifier.success({\n      content: <span class="hljs-string">\'A success message \'</span> + cnt++,\n      title: <span class="hljs-string">\'Success\'</span>,\n      position: <span class="hljs-keyword">this</span>.position\n    });\n  }\n  warning() {\n    <span class="hljs-keyword">this</span>.notifier.warning({\n      content: <span class="hljs-string">\'A warning \'</span> + cnt++,\n      title: <span class="hljs-string">\'Warning\'</span>,\n      position: <span class="hljs-keyword">this</span>.position\n    });\n  }\n  error() {\n    <span class="hljs-keyword">this</span>.notifier.error({\n      content: <span class="hljs-string">\'An error message \'</span> + cnt++,\n      title: <span class="hljs-string">\'Error\'</span>,\n      position: <span class="hljs-keyword">this</span>.position\n    });\n  }\n  custom() {\n    <span class="hljs-keyword">this</span>.notifier.queue({\n      content: <span class="hljs-string">\'A custom class message\'</span>,\n      position: <span class="hljs-keyword">this</span>.position,\n      showCloseButton: <span class="hljs-literal">false</span>,\n      timeout: <span class="hljs-number">10000</span>,\n      <span class="hljs-keyword">class</span>: <span class="hljs-string">\'demoCustomNotifier\'</span>\n    });\n  }\n\n  modalNotificationOptions: NotifierOptions = {\n    content: <span class="hljs-string">\'I am modal!\'</span>, \n    position: NotifierPosition.Center, \n    title: <span class="hljs-string">\'Modal Title\'</span>, \n    hasBackdrop: <span class="hljs-literal">true</span>, \n    timeout: <span class="hljs-literal">false</span>, \n    showCloseButton: <span class="hljs-literal">true</span> \n  }\n\n}\n'}}]);