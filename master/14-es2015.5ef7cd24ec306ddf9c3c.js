(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{"5V1D":function(n,t,e){"use strict";e.r(t),t.default="import { Component, OnInit } from '@angular/core';\n\n@Component({\n  templateUrl: 'demo.component.html'\n})\nexport class ButtonGroupDemoComponent {\n\n  value1 = 2;\n  value2 = 1;\n  value3 = [];\n\n}\n"},"C/wp":function(n,t,e){"use strict";e.r(t),t.default='<h3>Horizontal button group</h3>\n<vcl-button-group [(value)]="value1">\n  <button vcl-button [value]="1">One</button>\n  <button vcl-button [value]="2">Two</button>\n  <button vcl-button [value]="3">Three</button>\n</vcl-button-group>\n<p>Selected value: {{value1}}</p>\n\n<h3>Vertical button group</h3>\n<vcl-button-group class="vertical" style="width: 10em" [(value)]="value2">\n  <button vcl-button [value]="1">One</button>\n  <button vcl-button [value]="2">Two</button>\n  <button vcl-button [value]="3">Three</button>\n</vcl-button-group>\n<p>Selected value: {{value2}}</p>\n\n<h3>Horizontal button group (multiple selection)</h3>\n<vcl-button-group selectionMode="multiple" [(value)]="value3">\n  <button vcl-button square [value]="\'italic\'">\n    <vcl-icon icon="fas:italic"></vcl-icon>\n  </button>\n  <button vcl-button square [value]="\'bold\'">\n    <vcl-icon icon="fas:bold"></vcl-icon>\n  </button>\n  <button vcl-button square [value]="\'underline\'">\n    <vcl-icon icon="fas:underline"></vcl-icon>\n  </button>\n</vcl-button-group>\n<p>Selected values: {{value3}}</p>\n\n\n<h3>Disabled button group</h3>\n<vcl-button-group [disabled]="true" selectionMode="multiple">\n  <button vcl-button square [value]="\'italic\'">\n    <vcl-icon icon="fas:italic"></vcl-icon>\n  </button>\n  <button vcl-button square [value]="\'bold\'">\n    <vcl-icon icon="fas:bold"></vcl-icon>\n  </button>\n  <button vcl-button square [value]="\'underline\'">\n    <vcl-icon icon="fas:underline"></vcl-icon>\n  </button>\n</vcl-button-group>\n'},"GEV+":function(n,t,e){"use strict";e.r(t),e.d(t,"demo",function(){return s}),e.d(t,"ButtonGroupDemoModule",function(){return d});var o=e("ofXK"),u=e("3Pt+"),l=e("tyNb"),c=e("19H1"),b=e("2FIb"),a=e("fXoL"),v=e("ErXM"),i=e("6B8K"),r=e("9Rb9");let p=(()=>{class n{constructor(){this.value1=2,this.value2=1,this.value3=[]}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=a.Eb({type:n,selectors:[["ng-component"]],decls:42,vars:19,consts:[[3,"value","valueChange"],["vcl-button","",3,"value"],[1,"vertical",2,"width","10em",3,"value","valueChange"],["selectionMode","multiple",3,"value","valueChange"],["vcl-button","","square","",3,"value"],["icon","fas:italic"],["icon","fas:bold"],["icon","fas:underline"],["selectionMode","multiple",3,"disabled"]],template:function(n,t){1&n&&(a.Qb(0,"h3"),a.xc(1,"Horizontal button group"),a.Pb(),a.Qb(2,"vcl-button-group",0),a.Xb("valueChange",function(n){return t.value1=n}),a.Qb(3,"button",1),a.xc(4,"One"),a.Pb(),a.Qb(5,"button",1),a.xc(6,"Two"),a.Pb(),a.Qb(7,"button",1),a.xc(8,"Three"),a.Pb(),a.Pb(),a.Qb(9,"p"),a.xc(10),a.Pb(),a.Qb(11,"h3"),a.xc(12,"Vertical button group"),a.Pb(),a.Qb(13,"vcl-button-group",2),a.Xb("valueChange",function(n){return t.value2=n}),a.Qb(14,"button",1),a.xc(15,"One"),a.Pb(),a.Qb(16,"button",1),a.xc(17,"Two"),a.Pb(),a.Qb(18,"button",1),a.xc(19,"Three"),a.Pb(),a.Pb(),a.Qb(20,"p"),a.xc(21),a.Pb(),a.Qb(22,"h3"),a.xc(23,"Horizontal button group (multiple selection)"),a.Pb(),a.Qb(24,"vcl-button-group",3),a.Xb("valueChange",function(n){return t.value3=n}),a.Qb(25,"button",4),a.Lb(26,"vcl-icon",5),a.Pb(),a.Qb(27,"button",4),a.Lb(28,"vcl-icon",6),a.Pb(),a.Qb(29,"button",4),a.Lb(30,"vcl-icon",7),a.Pb(),a.Pb(),a.Qb(31,"p"),a.xc(32),a.Pb(),a.Qb(33,"h3"),a.xc(34,"Disabled button group"),a.Pb(),a.Qb(35,"vcl-button-group",8),a.Qb(36,"button",4),a.Lb(37,"vcl-icon",5),a.Pb(),a.Qb(38,"button",4),a.Lb(39,"vcl-icon",6),a.Pb(),a.Qb(40,"button",4),a.Lb(41,"vcl-icon",7),a.Pb(),a.Pb()),2&n&&(a.zb(2),a.gc("value",t.value1),a.zb(1),a.gc("value",1),a.zb(2),a.gc("value",2),a.zb(2),a.gc("value",3),a.zb(3),a.zc("Selected value: ",t.value1,""),a.zb(3),a.gc("value",t.value2),a.zb(1),a.gc("value",1),a.zb(2),a.gc("value",2),a.zb(2),a.gc("value",3),a.zb(3),a.zc("Selected value: ",t.value2,""),a.zb(3),a.gc("value",t.value3),a.zb(1),a.gc("value","italic"),a.zb(2),a.gc("value","bold"),a.zb(2),a.gc("value","underline"),a.zb(3),a.zc("Selected values: ",t.value3,""),a.zb(3),a.gc("disabled",!0),a.zb(1),a.gc("value","italic"),a.zb(2),a.gc("value","bold"),a.zb(2),a.gc("value","underline"))},directives:[v.a,i.b,r.a],encapsulation:2}),n})();function s(){return{label:"Button Group",tabs:{Demo:p,"README.md":{type:"md",content:'# vcl-button-group\n\nA button group which distributes space for each button equally to occupy 100% horizontal space.\n\n## Usage\n\n```js\nimport { VCLButtonGroupModule } from \'@vcl/ng-vcl\';\n\n@NgModule({\n  imports: [ VCLButtonGroupModule ],\n  ...\n})\nexport class AppComponent {}\n```\n\n```html\n<vcl-button-group [(value)]="value" mode="single">\n  <button vcl-button [value]="1">Action 1</button>\n  <button vcl-button [value]="2">Action 2</button>\n  <button vcl-button [value]="3">Action 3</button>\n</vcl-button-group>\n```\n\n### API\n\n#### Attributes\n\n| Name                  | Type                           | Default  | Description\n| --------------------- | ----------------------         | -------- |--------------\n| `value`               | any &#124; any[]               |          | Index of the selected button(s)\n| `selectionMode`       | `single` \\| `multiple`         | `single` | Select only one or multiple buttons\n\n#### Events\n\n| Name                  | Type                           | Description\n| -                     | -                              | -\n| `valueChange`         | event (any &#124; any[])       | Triggers when selected buttons change\n'},"demo.component.html":{type:"html",content:e("C/wp")},"demo.component.ts":{type:"ts",content:e("5V1D")}}}}let d=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=a.Ib({type:n}),n.\u0275inj=a.Hb({imports:[[o.c,u.i,b.b,c.y,c.z,c.M,l.g.forChild([{path:"",component:b.a,data:{demo:s}}])]]}),n})()}}]);