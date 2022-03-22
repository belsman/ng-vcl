"use strict";(self.webpackChunkng_vcl_demo=self.webpackChunkng_vcl_demo||[]).push([[183],{5183:(l,a,d)=>{d.r(a),d.d(a,{BadgeDemoModule:()=>f,demo:()=>s});var r=d(9808),v=d(5367),u=d(265),g=d(9155),e=d(4893);const i=["*"];let p=(()=>{class n{constructor(){this.classVCLBadge=!0}get vclPrimary(){return"primary"===this.type}get vclSuccess(){return"success"===this.type}get vclInfo(){return"info"===this.type}get vclWarning(){return"warning"===this.type}get vclError(){return"error"===this.type}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["vcl-badge"]],hostVars:12,hostBindings:function(t,o){2&t&&e.ekj("badge",o.classVCLBadge)("primary",o.vclPrimary)("success",o.vclSuccess)("info",o.vclInfo)("warning",o.vclWarning)("error",o.vclError)},inputs:{type:"type"},ngContentSelectors:i,decls:1,vars:0,template:function(t,o){1&t&&(e.F$t(),e.Hsn(0))},encapsulation:2,changeDetection:0}),n})(),m=(()=>{class n{constructor(){this.rounded=!0}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275dir=e.lG2({type:n,selectors:[["vcl-badge","vclRounded",""]],hostVars:2,hostBindings:function(t,o){2&t&&e.ekj("rounded",o.rounded)}}),n})(),y=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["ng-component"]],decls:26,vars:0,consts:[[1,"gutter-2","pb-2"],["type","primary"],["type","success"],["type","info"],["type","warning"],["type","error"],[1,"gutter-2"],["vclRounded",""],["vclRounded","","type","primary"],["vclRounded","","type","success"],["vclRounded","","type","info"],["vclRounded","","type","warning"],["vclRounded","","type","error"]],template:function(t,o){1&t&&(e.TgZ(0,"div",0)(1,"vcl-badge"),e._uU(2,"default"),e.qZA(),e.TgZ(3,"vcl-badge",1),e._uU(4,"primary"),e.qZA(),e.TgZ(5,"vcl-badge",2),e._uU(6,"success"),e.qZA(),e.TgZ(7,"vcl-badge",3),e._uU(8,"info"),e.qZA(),e.TgZ(9,"vcl-badge",4),e._uU(10,"warning"),e.qZA(),e.TgZ(11,"vcl-badge",5),e._uU(12,"error"),e.qZA()(),e.TgZ(13,"div",6)(14,"vcl-badge",7),e._uU(15,"default"),e.qZA(),e.TgZ(16,"vcl-badge",8),e._uU(17,"primary"),e.qZA(),e.TgZ(18,"vcl-badge",9),e._uU(19,"success"),e.qZA(),e.TgZ(20,"vcl-badge",10),e._uU(21,"info"),e.qZA(),e.TgZ(22,"vcl-badge",11),e._uU(23,"warning"),e.qZA(),e.TgZ(24,"vcl-badge",12),e._uU(25,"error"),e.qZA()())},directives:[p,m],encapsulation:2}),n})();function s(){return{label:"Badge",tabs:{Demo:y,"README.md":{type:"md",content:'# vcl-badge\n\nA visually highlighted tag to attribute items.\n\n## Usage\n\n```js\nimport { VCLBadgeModule } from \'@vcl/ng-vcl\';\n\n@NgModule({\n  imports: [ VCLBadgeModule ],\n  ...\n})\nexport class AppComponent {}\n```\n\n```html\n<vcl-badge>default</vcl-badge>\n\n<vcl-badge type="primary">primary</vcl-badge>\n\n<vcl-badge type="success">success</vcl-badge>\n\n<vcl-badge type="info">info</vcl-badge>\n\n<vcl-badge type="warning">warning</vcl-badge>\n\n<vcl-badge type="error">error</vcl-badge>\n\n<vcl-badge vclRounded>default</vcl-badge>\n\n<vcl-badge vclRounded type="primary">primary</vcl-badge>\n\n<vcl-badge vclRounded type="success">success</vcl-badge>\n\n<vcl-badge vclRounded type="info">info</vcl-badge>\n\n<vcl-badge vclRounded type="warning">warning</vcl-badge>\n\n<vcl-badge vclRounded type="error">error</vcl-badge>\n```\n\n### API\n\n#### vcl-badge attributes\n\nName       | Type   | Default | Description\n---------- | ------ | ------- | ------------------------------------------------------------\n`type`     | string |         | the badge\'s type\n\n#### vclRounded directive\n\nName         | Description\n----------   | ------------------------------------------------------------\n`vclRounded` | Enables rounded corners\n'},"demo.component.html":{type:"html",content:d(9385)},"demo.component.ts":{type:"ts",content:d(3178)}}}}let f=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[[r.ez,g.l,u.$6y,v.Bz.forChild([{path:"",component:g.z,data:{demo:s}}])]]}),n})()},9385:(l,a,d)=>{d.r(a),d.d(a,{default:()=>r});const r='<div class="gutter-2 pb-2">\n  <vcl-badge>default</vcl-badge>\n  <vcl-badge type="primary">primary</vcl-badge>\n  <vcl-badge type="success">success</vcl-badge>\n  <vcl-badge type="info">info</vcl-badge>\n  <vcl-badge type="warning">warning</vcl-badge>\n  <vcl-badge type="error">error</vcl-badge>\n</div>\n\n<div class="gutter-2">\n  <vcl-badge vclRounded>default</vcl-badge>\n  <vcl-badge vclRounded type="primary">primary</vcl-badge>\n  <vcl-badge vclRounded type="success">success</vcl-badge>\n  <vcl-badge vclRounded type="info">info</vcl-badge>\n  <vcl-badge vclRounded type="warning">warning</vcl-badge>\n  <vcl-badge vclRounded type="error">error</vcl-badge>\n</div>\n'},3178:(l,a,d)=>{d.r(a),d.d(a,{default:()=>r});const r="import { Component } from '@angular/core';\n\n@Component({\n  templateUrl: 'demo.component.html'\n})\nexport class BadgeDemoComponent {\n}\n"}}]);