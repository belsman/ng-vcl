!function(){function n(n,i){if(!(n instanceof i))throw new TypeError("Cannot call a class as a function")}function i(n,i){for(var t=0;t<i.length;t++){var o=i[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(n,o.key,o)}}(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{Uma3:function(n,i,t){"use strict";t.r(i),i.default="import { Component, ViewEncapsulation } from '@angular/core';\n\n@Component({\n  templateUrl: 'demo.component.html',\n  encapsulation: ViewEncapsulation.None,\n  styles: [`\n    .huge img {\n      width: 5em;\n      height: 5em;\n    }\n  `]\n})\nexport class BusyDemoComponent {\n  isBusy = false;\n\n  makeBusy() {\n    this.isBusy = true;\n    setTimeout(() => this.isBusy = false, 3000);\n  }\n}\n"},oZCN:function(n,i,t){"use strict";t.r(i),i.default='<h3>Simple busy indicator</h3>\n<vcl-busy-indicator>Loading...</vcl-busy-indicator>\n<br><br>\n\n<h3>Horizontal busy indicator</h3>\n<vcl-busy-indicator [layout]="\'horizontal\'" class="huge">Loading...</vcl-busy-indicator>\n<br><br>\n\n<h3>Busy indicator with text</h3>\n<vcl-busy-indicator>\n    Loading...\n  </vcl-busy-indicator>\n<br><br>\n\n<h3>Indicator using icon font</h3>\n<vcl-busy-indicator  icon="fas fa-circle-notch fa-spin fa-3x fa-fw"></vcl-busy-indicator>\n  <br><br>\n\n<h3>Indicator using custom image</h3>\n<vcl-busy-indicator imageSrc="http://www.polidoor.com/assets/img/loading.gif">\n  Loading...\n</vcl-busy-indicator>\n<br><br>\n\n<h3>Busy container</h3>\n<div [vcl-busy-indicator-cover]="isBusy" class="container row justify-center" style="height:15em">\n  <vcl-busy-indicator></vcl-busy-indicator>\n  <button vcl-button (click)="makeBusy()">Make container busy for 3 secs</button>\n</div>\n'},uMWy:function(t,o,c){"use strict";c.r(o),c.d(o,"demo",(function(){return m})),c.d(o,"BusyDemoModule",(function(){return v}));var e,a=c("ofXK"),r=c("tyNb"),s=c("19H1"),u=c("2FIb"),b=c("fXoL"),l=c("dCgY"),d=c("F5Eo"),y=c("6B8K"),h=((e=function(){function t(){n(this,t),this.isBusy=!1}var o,c,e;return o=t,(c=[{key:"makeBusy",value:function(){var n=this;this.isBusy=!0,setTimeout((function(){return n.isBusy=!1}),3e3)}}])&&i(o.prototype,c),e&&i(o,e),t}()).\u0275fac=function(n){return new(n||e)},e.\u0275cmp=b.Db({type:e,selectors:[["ng-component"]],decls:35,vars:2,consts:[[1,"huge",3,"layout"],["icon","fas fa-circle-notch fa-spin fa-3x fa-fw"],["imageSrc","http://www.polidoor.com/assets/img/loading.gif"],[1,"container","row","justify-center",2,"height","15em",3,"vcl-busy-indicator-cover"],["vcl-button","",3,"click"]],template:function(n,i){1&n&&(b.Pb(0,"h3"),b.xc(1,"Simple busy indicator"),b.Ob(),b.Pb(2,"vcl-busy-indicator"),b.xc(3,"Loading..."),b.Ob(),b.Kb(4,"br"),b.Kb(5,"br"),b.Pb(6,"h3"),b.xc(7,"Horizontal busy indicator"),b.Ob(),b.Pb(8,"vcl-busy-indicator",0),b.xc(9,"Loading..."),b.Ob(),b.Kb(10,"br"),b.Kb(11,"br"),b.Pb(12,"h3"),b.xc(13,"Busy indicator with text"),b.Ob(),b.Pb(14,"vcl-busy-indicator"),b.xc(15," Loading... "),b.Ob(),b.Kb(16,"br"),b.Kb(17,"br"),b.Pb(18,"h3"),b.xc(19,"Indicator using icon font"),b.Ob(),b.Kb(20,"vcl-busy-indicator",1),b.Kb(21,"br"),b.Kb(22,"br"),b.Pb(23,"h3"),b.xc(24,"Indicator using custom image"),b.Ob(),b.Pb(25,"vcl-busy-indicator",2),b.xc(26," Loading...\n"),b.Ob(),b.Kb(27,"br"),b.Kb(28,"br"),b.Pb(29,"h3"),b.xc(30,"Busy container"),b.Ob(),b.Pb(31,"div",3),b.Kb(32,"vcl-busy-indicator"),b.Pb(33,"button",4),b.Wb("click",(function(){return i.makeBusy()})),b.xc(34,"Make container busy for 3 secs"),b.Ob(),b.Ob()),2&n&&(b.yb(8),b.fc("layout","horizontal"),b.yb(23),b.fc("vcl-busy-indicator-cover",i.isBusy))},directives:[l.a,d.a,y.b],styles:["\n    .huge img {\n      width: 5em;\n      height: 5em;\n    }\n  "],encapsulation:2}),e);function m(){return{label:"Busy Indicator",tabs:{Demo:h,"README.md":{type:"md",content:'# Busy Indicator\n\n## vcl-busy-indicator\n\nAn indicator to show that a lasting operation is currently in progress.\n\n### Usage\n\n```html\n<vcl-busy-indicator>\n  <span>Loading\u2026</span>\n</vcl-busy-indicator>\n\n<vcl-busy-indicator icon="fas fa-circle-notch fa-spin fa-3x fa-fw"></vcl-busy-indicator>\n```\n\n### API\n\n#### vcl-busy-indicator Attributes\n\n| Name                | Type                       | Default    | Description\n| ------------------- | -------------------------- | ---------- |--------------\n| `icon`              | string                     | "Loading"  | Alternative icon\n| `label`             | string                     | "Loading"  | icon aria label\n| `imageHeight`       | string                     | "3em"      | icon height\n| `imageWidth`        | string                     | "3em"      | icon width\n| `layout`            | "vertical" or "horizontal" | "vertical" | The indicator direction\n\n## [vcl-busy-indicator-cover]\n\nCovers an element with a layer showing the vcl-busy-indicator to indicate a busy state and prevent user interaction.\n\n### Usage\n\n```html\n<div [vcl-busy-indicator-cover]="true">\n  <vcl-busy-indicator></vcl-busy-indicator>\n  This content will be covered by the layer\n</div>\n```\n\n### API\n\n#### vcl-busy-indicator-cover Attributes\n\n| Name                       | Type                       | Default    | Description\n| ------------------------   | -------------------------- | ---------- |--------------\n| `vcl-busy-indicator-cover` | boolean                    | false      | Shows the layer when `true`\n'},"demo.component.html":{type:"html",content:c("oZCN")},"demo.component.ts":{type:"ts",content:c("Uma3")}}}}var f,v=((f=function i(){n(this,i)}).\u0275mod=b.Hb({type:f}),f.\u0275inj=b.Gb({factory:function(n){return new(n||f)},imports:[[a.c,u.b,s.VCLButtonModule,s.VCLIconModule,s.VCLBusyIndicatorModule,r.g.forChild([{path:"",component:u.a,data:{demo:m}}])]]}),f)}}])}();