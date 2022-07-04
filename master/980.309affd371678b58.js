"use strict";(self.webpackChunkng_vcl_demo=self.webpackChunkng_vcl_demo||[]).push([[980],{980:(u,h,c)=>{c.r(h),c.d(h,{CheckboxDemoModule:()=>p,demo:()=>v});var a=c(6895),C=c(433),b=c(3356),m=c(9787),s=c(9155),e=c(4650),i=c(900);let r=(()=>{class n{constructor(){this.value1=!1,this.value2=!1,this.value3=!1,this.value4=!1}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["ng-component"]],decls:17,vars:8,consts:[[3,"checked","checkedChange"],[3,"checked","disabled","checkedChange"],[1,"col"]],template:function(t,o){1&t&&(e.TgZ(0,"h3"),e._uU(1,"Horizontal"),e.qZA(),e.TgZ(2,"vcl-checkbox",0),e.NdJ("checkedChange",function(l){return o.value1=l}),e._uU(3,"Check 1"),e.qZA(),e.TgZ(4,"vcl-checkbox",0),e.NdJ("checkedChange",function(l){return o.value2=l}),e._uU(5,"Check 2"),e.qZA(),e.TgZ(6,"vcl-checkbox",1),e.NdJ("checkedChange",function(l){return o.value3=l}),e._uU(7,"Check 3 (disabled) "),e.qZA(),e.TgZ(8,"h3"),e._uU(9,"Vertical"),e.qZA(),e.TgZ(10,"div",2)(11,"vcl-checkbox",0),e.NdJ("checkedChange",function(l){return o.value1=l}),e._uU(12,"Check 1"),e.qZA(),e.TgZ(13,"vcl-checkbox",0),e.NdJ("checkedChange",function(l){return o.value2=l}),e._uU(14,"Check 2"),e.qZA(),e.TgZ(15,"vcl-checkbox",1),e.NdJ("checkedChange",function(l){return o.value3=l}),e._uU(16,"Check 3 (disabled) "),e.qZA()()),2&t&&(e.xp6(2),e.Q6J("checked",o.value1),e.xp6(2),e.Q6J("checked",o.value2),e.xp6(2),e.Q6J("checked",o.value3)("disabled",!0),e.xp6(5),e.Q6J("checked",o.value1),e.xp6(2),e.Q6J("checked",o.value2),e.xp6(2),e.Q6J("checked",o.value3)("disabled",!0))},dependencies:[i.b],encapsulation:2}),n})();function v(){return{label:"Checkbox",tabs:{Demo:r,"README.md":{type:"md",content:"# vcl-checkbox\n\nA Checkbox utilizing `vcl-icon`\n\n## Usage\n\n```js\nimport { VCLCheckboxModule } from '@vcl/ng-vcl';\n\n@NgModule({\n  imports: [ VCLCheckboxModule ],\n  ...\n})\nexport class AppComponent {}\n```\n\n```html\n<vcl-checkbox [(checked)]=\"value\">Check!</vcl-checkbox>\n```\n\n### API\n\n#### Attributes\n\n| Name                | Type        | Default            | Description\n| ------------        | ----------- | ------------------ |--------------\n| `checked`           | boolean     | false              | State of checkbox\n| `tabindex`          | number      | 0                  | The tabindex of the checkbox\n| `disabled`          | boolean     | false              | Disables checkbox if true\n\n### Events\n\nName            | Type    | Description\n----------      | ------- | --------------------------------------\n`checkedChange` | any     | Fired when the checked state has changed\n"},"demo.component.html":{type:"html",content:c(270)},"demo.component.ts":{type:"ts",content:c(8070)}}}}let p=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[a.ez,C.u5,s.l,m.Rft,m.ds4,b.Bz.forChild([{path:"",component:s.z,data:{demo:v}}])]}),n})()},270:(u,h,c)=>{c.r(h),c.d(h,{default:()=>a});const a='<h3>Horizontal</h3>\n<vcl-checkbox [(checked)]="value1">Check 1</vcl-checkbox>\n<vcl-checkbox [(checked)]="value2">Check 2</vcl-checkbox>\n<vcl-checkbox [(checked)]="value3" [disabled]=true>Check 3 (disabled) </vcl-checkbox>\n\n<h3>Vertical</h3>\n\n<div class="col">\n  <vcl-checkbox [(checked)]="value1">Check 1</vcl-checkbox>\n  <vcl-checkbox [(checked)]="value2">Check 2</vcl-checkbox>\n  <vcl-checkbox [(checked)]="value3" [disabled]=true>Check 3 (disabled) </vcl-checkbox>\n</div>\n'},8070:(u,h,c)=>{c.r(h),c.d(h,{default:()=>a});const a="import { Component } from '@angular/core';\n\n@Component({\n  templateUrl: 'demo.component.html'\n})\nexport class CheckboxDemoComponent {\n  value1 = false;\n  value2 = false;\n  value3 = false;\n  value4 = false;\n}\n"}}]);