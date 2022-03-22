"use strict";(self.webpackChunkng_vcl_demo=self.webpackChunkng_vcl_demo||[]).push([[456],{456:(i,e,t)=>{t.r(e),t.d(e,{ButtonGroupDemoModule:()=>f,demo:()=>b});var a=t(9808),m=t(2382),d=t(5367),p=t(265),r=t(9155),n=t(4893),g=t(5579),h=t(6994),Z=t(6447);let T=(()=>{class o{constructor(){this.value1=2,this.value2=1,this.value3=[]}}return o.\u0275fac=function(l){return new(l||o)},o.\u0275cmp=n.Xpm({type:o,selectors:[["ng-component"]],decls:42,vars:19,consts:[[3,"value","valueChange"],["vcl-button","",3,"value"],[1,"vertical",2,"width","10em",3,"value","valueChange"],["selectionMode","multiple",3,"value","valueChange"],["vcl-button","","square","",3,"value"],["icon","fas:italic"],["icon","fas:bold"],["icon","fas:underline"],["selectionMode","multiple",3,"disabled"]],template:function(l,u){1&l&&(n.TgZ(0,"h3"),n._uU(1,"Horizontal button group"),n.qZA(),n.TgZ(2,"vcl-button-group",0),n.NdJ("valueChange",function(v){return u.value1=v}),n.TgZ(3,"button",1),n._uU(4,"One"),n.qZA(),n.TgZ(5,"button",1),n._uU(6,"Two"),n.qZA(),n.TgZ(7,"button",1),n._uU(8,"Three"),n.qZA()(),n.TgZ(9,"p"),n._uU(10),n.qZA(),n.TgZ(11,"h3"),n._uU(12,"Vertical button group"),n.qZA(),n.TgZ(13,"vcl-button-group",2),n.NdJ("valueChange",function(v){return u.value2=v}),n.TgZ(14,"button",1),n._uU(15,"One"),n.qZA(),n.TgZ(16,"button",1),n._uU(17,"Two"),n.qZA(),n.TgZ(18,"button",1),n._uU(19,"Three"),n.qZA()(),n.TgZ(20,"p"),n._uU(21),n.qZA(),n.TgZ(22,"h3"),n._uU(23,"Horizontal button group (multiple selection)"),n.qZA(),n.TgZ(24,"vcl-button-group",3),n.NdJ("valueChange",function(v){return u.value3=v}),n.TgZ(25,"button",4),n._UZ(26,"vcl-icon",5),n.qZA(),n.TgZ(27,"button",4),n._UZ(28,"vcl-icon",6),n.qZA(),n.TgZ(29,"button",4),n._UZ(30,"vcl-icon",7),n.qZA()(),n.TgZ(31,"p"),n._uU(32),n.qZA(),n.TgZ(33,"h3"),n._uU(34,"Disabled button group"),n.qZA(),n.TgZ(35,"vcl-button-group",8)(36,"button",4),n._UZ(37,"vcl-icon",5),n.qZA(),n.TgZ(38,"button",4),n._UZ(39,"vcl-icon",6),n.qZA(),n.TgZ(40,"button",4),n._UZ(41,"vcl-icon",7),n.qZA()()),2&l&&(n.xp6(2),n.Q6J("value",u.value1),n.xp6(1),n.Q6J("value",1),n.xp6(2),n.Q6J("value",2),n.xp6(2),n.Q6J("value",3),n.xp6(3),n.hij("Selected value: ",u.value1,""),n.xp6(3),n.Q6J("value",u.value2),n.xp6(1),n.Q6J("value",1),n.xp6(2),n.Q6J("value",2),n.xp6(2),n.Q6J("value",3),n.xp6(3),n.hij("Selected value: ",u.value2,""),n.xp6(3),n.Q6J("value",u.value3),n.xp6(1),n.Q6J("value","italic"),n.xp6(2),n.Q6J("value","bold"),n.xp6(2),n.Q6J("value","underline"),n.xp6(3),n.hij("Selected values: ",u.value3,""),n.xp6(3),n.Q6J("disabled",!0),n.xp6(1),n.Q6J("value","italic"),n.xp6(2),n.Q6J("value","bold"),n.xp6(2),n.Q6J("value","underline"))},directives:[g.K,h.r,Z.o],encapsulation:2}),o})();function b(){return{label:"Button Group",tabs:{Demo:T,"README.md":{type:"md",content:'# vcl-button-group\n\nA button group which distributes space for each button equally to occupy 100% horizontal space.\n\n## Usage\n\n```js\nimport { VCLButtonGroupModule } from \'@vcl/ng-vcl\';\n\n@NgModule({\n  imports: [ VCLButtonGroupModule ],\n  ...\n})\nexport class AppComponent {}\n```\n\n```html\n<vcl-button-group [(value)]="value" mode="single">\n  <button vcl-button [value]="1">Action 1</button>\n  <button vcl-button [value]="2">Action 2</button>\n  <button vcl-button [value]="3">Action 3</button>\n</vcl-button-group>\n```\n\n### API\n\n#### Attributes\n\n| Name                  | Type                           | Default  | Description\n| --------------------- | ----------------------         | -------- |--------------\n| `value`               | any &#124; any[]               |          | Index of the selected button(s)\n| `selectionMode`       | `single` \\| `multiple`         | `single` | Select only one or multiple buttons\n\n#### Events\n\n| Name                  | Type                           | Description\n| -                     | -                              | -\n| `valueChange`         | event (any &#124; any[])       | Triggers when selected buttons change\n'},"demo.component.html":{type:"html",content:t(7882)},"demo.component.ts":{type:"ts",content:t(4296)}}}}let f=(()=>{class o{}return o.\u0275fac=function(l){return new(l||o)},o.\u0275mod=n.oAB({type:o}),o.\u0275inj=n.cJS({imports:[[a.ez,m.u5,r.l,p.PoV,p.V4c,p.NhM,d.Bz.forChild([{path:"",component:r.z,data:{demo:b}}])]]}),o})()},7882:(i,e,t)=>{t.r(e),t.d(e,{default:()=>a});const a='<h3>Horizontal button group</h3>\n<vcl-button-group [(value)]="value1">\n  <button vcl-button [value]="1">One</button>\n  <button vcl-button [value]="2">Two</button>\n  <button vcl-button [value]="3">Three</button>\n</vcl-button-group>\n<p>Selected value: {{value1}}</p>\n\n<h3>Vertical button group</h3>\n<vcl-button-group class="vertical" style="width: 10em" [(value)]="value2">\n  <button vcl-button [value]="1">One</button>\n  <button vcl-button [value]="2">Two</button>\n  <button vcl-button [value]="3">Three</button>\n</vcl-button-group>\n<p>Selected value: {{value2}}</p>\n\n<h3>Horizontal button group (multiple selection)</h3>\n<vcl-button-group selectionMode="multiple" [(value)]="value3">\n  <button vcl-button square [value]="\'italic\'">\n    <vcl-icon icon="fas:italic"></vcl-icon>\n  </button>\n  <button vcl-button square [value]="\'bold\'">\n    <vcl-icon icon="fas:bold"></vcl-icon>\n  </button>\n  <button vcl-button square [value]="\'underline\'">\n    <vcl-icon icon="fas:underline"></vcl-icon>\n  </button>\n</vcl-button-group>\n<p>Selected values: {{value3}}</p>\n\n\n<h3>Disabled button group</h3>\n<vcl-button-group [disabled]="true" selectionMode="multiple">\n  <button vcl-button square [value]="\'italic\'">\n    <vcl-icon icon="fas:italic"></vcl-icon>\n  </button>\n  <button vcl-button square [value]="\'bold\'">\n    <vcl-icon icon="fas:bold"></vcl-icon>\n  </button>\n  <button vcl-button square [value]="\'underline\'">\n    <vcl-icon icon="fas:underline"></vcl-icon>\n  </button>\n</vcl-button-group>\n'},4296:(i,e,t)=>{t.r(e),t.d(e,{default:()=>a});const a="import { Component, OnInit } from '@angular/core';\n\n@Component({\n  templateUrl: 'demo.component.html'\n})\nexport class ButtonGroupDemoComponent {\n\n  value1 = 2;\n  value2 = 1;\n  value3 = [];\n\n}\n"}}]);