!function(){function n(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}function t(n,t){for(var o=0;o<t.length;o++){var e=t[o];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(n,e.key,e)}}(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{"5yoT":function(n,t,o){"use strict";o.r(t),t.default='<button vcl-button (click)="someAction($event)">Button</button>\n<br><br>\n<button vcl-button (click)="someAction($event)" disabled=true>Disabled button</button>\n<br><br>\n<button vcl-button (click)="someAction($event)" class="emphasized">Emphasized label button</button>\n<br><br>\n<a vcl-button (click)="someAction($event)">Button (a-tag)</a>\n<br><br>\n<button vcl-button square title="Square Button" (click)="someAction($event)">\n  <vcl-icon icon="fas:bolt"></vcl-icon>\n</button>\n<br><br>\n<button vcl-button (click)="someAction($event)" >\n  Appended icon\n  <vcl-icon vclAppend icon="fas:bolt"></vcl-icon>\n</button>\n<br><br>\n<button vcl-button (click)="someAction($event)">\n  <vcl-icon vclPrepend icon="fas:bolt"></vcl-icon>\n  Prepended icon\n</button>\n<br><br>\n<button vcl-button (click)="someAction($event)">\n    <vcl-icon vclPrepend icon="fas:bolt"></vcl-icon>\n    Prepended and appended icon\n    <vcl-icon vclAppend icon="fas:bolt"></vcl-icon>\n</button>\n<br><br>\n<button vcl-button [selectable]="true" (click)="someAction($event.selected)">Selectable button</button>\n'},p1Og:function(o,e,c){"use strict";c.r(e),c.d(e,"demo",function(){return p}),c.d(e,"ButtonDemoModule",function(){return f});var b,l=c("ofXK"),i=c("tyNb"),u=c("19H1"),r=c("2FIb"),a=c("fXoL"),s=c("6B8K"),m=c("9Rb9"),d=((b=function(){function o(){n(this,o)}var e,c,b;return e=o,(c=[{key:"someAction",value:function(n){console.log("Action handler, param:",n)}}])&&t(e.prototype,c),b&&t(e,b),o}()).\u0275fac=function(n){return new(n||b)},b.\u0275cmp=a.Eb({type:b,selectors:[["ng-component"]],decls:38,vars:1,consts:[["vcl-button","",3,"click"],["vcl-button","","disabled","true",3,"click"],["vcl-button","",1,"emphasized",3,"click"],["vcl-button","","square","","title","Square Button",3,"click"],["icon","fas:bolt"],["vclAppend","","icon","fas:bolt"],["vclPrepend","","icon","fas:bolt"],["vcl-button","",3,"selectable","click"]],template:function(n,t){1&n&&(a.Qb(0,"button",0),a.Xb("click",function(n){return t.someAction(n)}),a.xc(1,"Button"),a.Pb(),a.Lb(2,"br"),a.Lb(3,"br"),a.Qb(4,"button",1),a.Xb("click",function(n){return t.someAction(n)}),a.xc(5,"Disabled button"),a.Pb(),a.Lb(6,"br"),a.Lb(7,"br"),a.Qb(8,"button",2),a.Xb("click",function(n){return t.someAction(n)}),a.xc(9,"Emphasized label button"),a.Pb(),a.Lb(10,"br"),a.Lb(11,"br"),a.Qb(12,"a",0),a.Xb("click",function(n){return t.someAction(n)}),a.xc(13,"Button (a-tag)"),a.Pb(),a.Lb(14,"br"),a.Lb(15,"br"),a.Qb(16,"button",3),a.Xb("click",function(n){return t.someAction(n)}),a.Lb(17,"vcl-icon",4),a.Pb(),a.Lb(18,"br"),a.Lb(19,"br"),a.Qb(20,"button",0),a.Xb("click",function(n){return t.someAction(n)}),a.xc(21," Appended icon "),a.Lb(22,"vcl-icon",5),a.Pb(),a.Lb(23,"br"),a.Lb(24,"br"),a.Qb(25,"button",0),a.Xb("click",function(n){return t.someAction(n)}),a.Lb(26,"vcl-icon",6),a.xc(27," Prepended icon\n"),a.Pb(),a.Lb(28,"br"),a.Lb(29,"br"),a.Qb(30,"button",0),a.Xb("click",function(n){return t.someAction(n)}),a.Lb(31,"vcl-icon",6),a.xc(32," Prepended and appended icon "),a.Lb(33,"vcl-icon",5),a.Pb(),a.Lb(34,"br"),a.Lb(35,"br"),a.Qb(36,"button",7),a.Xb("click",function(n){return t.someAction(n.selected)}),a.xc(37,"Selectable button"),a.Pb()),2&n&&(a.zb(36),a.gc("selectable",!0))},directives:[s.b,m.a],encapsulation:2}),b);function p(){return{label:"Button",tabs:{Demo:d,"README.md":{type:"md",content:'# vcl-button\n\n`vcl-button` enhance the HTML `<button>` with styling, features and icogram support.\nIt is the main control for triggering actions.\n\n## Usage\n\n```js\nimport { VCLButtonModule } from \'@vcl/ng-vcl\';\n\n@NgModule({\n  imports: [ VCLButtonModule ],\n  ...\n})\nexport class AppComponent { ... }\n```\n\n### Basic button\n\n```html\n<button vcl-button (click)="someAction($event)">Action</button>\n```\n\n```html\n<button vcl-button [selectable]="true" (select)="someAction($event)">Select</button>\n```\n\n### Icogram button\n\n```html\n<button vcl-button>\n  <vcl-icogram appIcon="fas:bolt">Action</vcl-icogram>\n</button>\n```\n\n### Square button\n\n```html\n<button vcl-button square>\n  <vcl-icon icon="fas:bolt"></vcl-icon>\n</button>\n```\n\n### API\n\n#### vcl-button/vcl-button square attributes\n\n| Name                | Type        | Default  | Description\n| ------------        | ----------- | -------- |--------------\n| `disabled`          | boolean     | false    | State to indicate that the button is disabled\n| `selectable`        | boolean     | false    | Button selected state toggles if clicked when true\n| `selected`          | boolean     | false    | Whether the button is selected\n| `square`            | boolean     | false    | Whether the button is square\n\n#### vcl-button/vcl-button  events\n\n| Name                | Description\n| ------------        | --------------\n| `selectedChange`    | Triggered when the button is selected state changes\n'},"demo.component.html":{type:"html",content:c("5yoT")},"demo.component.ts":{type:"ts",content:c("tmTN")}}}}var v,f=((v=function t(){n(this,t)}).\u0275fac=function(n){return new(n||v)},v.\u0275mod=a.Ib({type:v}),v.\u0275inj=a.Hb({imports:[[l.c,r.b,u.z,u.M,u.L,i.g.forChild([{path:"",component:r.a,data:{demo:p}}])]]}),v)},tmTN:function(n,t,o){"use strict";o.r(t),t.default="import { Component } from '@angular/core';\n\n@Component({\n  templateUrl: 'demo.component.html'\n})\nexport class ButtonDemoComponent {\n  someAction(param) {\n    console.log('Action handler, param:', param);\n  }\n}\n"}}])}();