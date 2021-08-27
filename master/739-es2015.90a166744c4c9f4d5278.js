"use strict";(self.webpackChunkng_vcl=self.webpackChunkng_vcl||[]).push([[739],{84739:function(n,t,e){e.r(t),e.d(t,{ButtonDemoModule:function(){return d},demo:function(){return a}});var o=e(16274),c=e(95454),l=e(36196),u=e(62518),i=e(84271),b=e(57120),r=e(852);let s=(()=>{class n{someAction(n){console.log("Action handler, param:",n)}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=i.Xpm({type:n,selectors:[["ng-component"]],decls:38,vars:1,consts:[["vcl-button","",3,"click"],["vcl-button","","disabled","true",3,"click"],["vcl-button","",1,"emphasized",3,"click"],["vcl-button","","square","","title","Square Button",3,"click"],["icon","fas:bolt"],["vclAppend","","icon","fas:bolt"],["vclPrepend","","icon","fas:bolt"],["vcl-button","",3,"selectable","click"]],template:function(n,t){1&n&&(i.TgZ(0,"button",0),i.NdJ("click",function(n){return t.someAction(n)}),i._uU(1,"Button"),i.qZA(),i._UZ(2,"br"),i._UZ(3,"br"),i.TgZ(4,"button",1),i.NdJ("click",function(n){return t.someAction(n)}),i._uU(5,"Disabled button"),i.qZA(),i._UZ(6,"br"),i._UZ(7,"br"),i.TgZ(8,"button",2),i.NdJ("click",function(n){return t.someAction(n)}),i._uU(9,"Emphasized label button"),i.qZA(),i._UZ(10,"br"),i._UZ(11,"br"),i.TgZ(12,"a",0),i.NdJ("click",function(n){return t.someAction(n)}),i._uU(13,"Button (a-tag)"),i.qZA(),i._UZ(14,"br"),i._UZ(15,"br"),i.TgZ(16,"button",3),i.NdJ("click",function(n){return t.someAction(n)}),i._UZ(17,"vcl-icon",4),i.qZA(),i._UZ(18,"br"),i._UZ(19,"br"),i.TgZ(20,"button",0),i.NdJ("click",function(n){return t.someAction(n)}),i._uU(21," Appended icon "),i._UZ(22,"vcl-icon",5),i.qZA(),i._UZ(23,"br"),i._UZ(24,"br"),i.TgZ(25,"button",0),i.NdJ("click",function(n){return t.someAction(n)}),i._UZ(26,"vcl-icon",6),i._uU(27," Prepended icon\n"),i.qZA(),i._UZ(28,"br"),i._UZ(29,"br"),i.TgZ(30,"button",0),i.NdJ("click",function(n){return t.someAction(n)}),i._UZ(31,"vcl-icon",6),i._uU(32," Prepended and appended icon "),i._UZ(33,"vcl-icon",5),i.qZA(),i._UZ(34,"br"),i._UZ(35,"br"),i.TgZ(36,"button",7),i.NdJ("click",function(n){return t.someAction(n.selected)}),i._uU(37,"Selectable button"),i.qZA()),2&n&&(i.xp6(36),i.Q6J("selectable",!0))},directives:[b.r,r.o],encapsulation:2}),n})();function a(){return{label:"Button",tabs:{Demo:s,"README.md":{type:"md",content:'# vcl-button\n\n`vcl-button` enhance the HTML `<button>` with styling, features and icogram support.\nIt is the main control for triggering actions.\n\n## Usage\n\n```js\nimport { VCLButtonModule } from \'@vcl/ng-vcl\';\n\n@NgModule({\n  imports: [ VCLButtonModule ],\n  ...\n})\nexport class AppComponent { ... }\n```\n\n### Basic button\n\n```html\n<button vcl-button (click)="someAction($event)">Action</button>\n```\n\n```html\n<button vcl-button [selectable]="true" (select)="someAction($event)">Select</button>\n```\n\n### Icogram button\n\n```html\n<button vcl-button>\n  <vcl-icogram appIcon="fas:bolt">Action</vcl-icogram>\n</button>\n```\n\n### Square button\n\n```html\n<button vcl-button square>\n  <vcl-icon icon="fas:bolt"></vcl-icon>\n</button>\n```\n\n### API\n\n#### vcl-button/vcl-button square attributes\n\n| Name                | Type        | Default  | Description\n| ------------        | ----------- | -------- |--------------\n| `disabled`          | boolean     | false    | State to indicate that the button is disabled\n| `selectable`        | boolean     | false    | Button selected state toggles if clicked when true\n| `selected`          | boolean     | false    | Whether the button is selected\n| `square`            | boolean     | false    | Whether the button is square\n\n#### vcl-button/vcl-button  events\n\n| Name                | Description\n| ------------        | --------------\n| `selectedChange`    | Triggered when the button is selected state changes\n'},"demo.component.html":{type:"html",content:e(13491)},"demo.component.ts":{type:"ts",content:e(93259)}}}}let d=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=i.oAB({type:n}),n.\u0275inj=i.cJS({imports:[[o.ez,u.l,l.V4c,l.NhM,l.o14,c.Bz.forChild([{path:"",component:u.z,data:{demo:a}}])]]}),n})()},13491:function(n,t,e){e.r(t),t.default='<button vcl-button (click)="someAction($event)">Button</button>\n<br><br>\n<button vcl-button (click)="someAction($event)" disabled=true>Disabled button</button>\n<br><br>\n<button vcl-button (click)="someAction($event)" class="emphasized">Emphasized label button</button>\n<br><br>\n<a vcl-button (click)="someAction($event)">Button (a-tag)</a>\n<br><br>\n<button vcl-button square title="Square Button" (click)="someAction($event)">\n  <vcl-icon icon="fas:bolt"></vcl-icon>\n</button>\n<br><br>\n<button vcl-button (click)="someAction($event)" >\n  Appended icon\n  <vcl-icon vclAppend icon="fas:bolt"></vcl-icon>\n</button>\n<br><br>\n<button vcl-button (click)="someAction($event)">\n  <vcl-icon vclPrepend icon="fas:bolt"></vcl-icon>\n  Prepended icon\n</button>\n<br><br>\n<button vcl-button (click)="someAction($event)">\n    <vcl-icon vclPrepend icon="fas:bolt"></vcl-icon>\n    Prepended and appended icon\n    <vcl-icon vclAppend icon="fas:bolt"></vcl-icon>\n</button>\n<br><br>\n<button vcl-button [selectable]="true" (click)="someAction($event.selected)">Selectable button</button>\n'},93259:function(n,t,e){e.r(t),t.default="import { Component } from '@angular/core';\n\n@Component({\n  templateUrl: 'demo.component.html'\n})\nexport class ButtonDemoComponent {\n  someAction(param) {\n    console.log('Action handler, param:', param);\n  }\n}\n"}}]);