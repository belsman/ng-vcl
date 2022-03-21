"use strict";(self.webpackChunkng_vcl_demo=self.webpackChunkng_vcl_demo||[]).push([[793],{6793:(c,t,l)=>{l.r(t),l.d(t,{FlipSwitchDemoModule:()=>w,demo:()=>m});var i=l(9808),f=l(2382),p=l(5367),r=l(1130),v=l(9155),e=l(4893),d=l(3058);let C=(()=>{class n{constructor(){this.value1=!1,this.value2=!1}}return n.\u0275fac=function(a){return new(a||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["ng-component"]],decls:14,vars:6,consts:[[3,"value","valueChange"],["onLabel","Yes","offLabel","No",3,"value","valueChange"],["onLabel","Yes","offLabel","No",3,"value","disabled","valueChange"]],template:function(a,o){1&a&&(e.TgZ(0,"h3"),e._uU(1,"Basic"),e.qZA(),e.TgZ(2,"vcl-flip-switch",0),e.NdJ("valueChange",function(u){return o.value1=u}),e.qZA(),e._UZ(3,"br"),e._uU(4),e.TgZ(5,"h3"),e._uU(6,"With custom labels"),e.qZA(),e.TgZ(7,"vcl-flip-switch",1),e.NdJ("valueChange",function(u){return o.value2=u}),e.qZA(),e._UZ(8,"br"),e._uU(9),e.TgZ(10,"h3"),e._uU(11,"Disabled"),e.qZA(),e.TgZ(12,"vcl-flip-switch",2),e.NdJ("valueChange",function(u){return o.value2=u}),e.qZA(),e._UZ(13,"br")),2&a&&(e.xp6(2),e.Q6J("value",o.value1),e.xp6(2),e.hij("\nCurrent value: ",o.value1," "),e.xp6(3),e.Q6J("value",o.value2),e.xp6(2),e.hij("\nCurrent value: ",o.value2," "),e.xp6(3),e.Q6J("value",o.value2)("disabled",!0))},directives:[d.H],encapsulation:2}),n})();function m(){return{label:"Flip-Switch",tabs:{Demo:C,"README.md":{type:"md",content:'# vcl-flip-switch\n\n## Usage\n\n```html\n<vcl-flip-switch [(value)]="value" onLabel="On" offLabel="Off"></vcl-flip-switch>\n```\n\n### API\n\n#### Attributes\n\nName          | Type    | Default | Description\n------------- | ------- | ------- | -------------------------------\n`value`       | boolean | false   | set the value\n`onLabel`     | string  | \'On\'    | The label for "on"\n`offLabel`    | string  | \'Off\'   | The label for "off"\n\n#### Events\n\n| Name                  | Type             | Description\n| --------------------- | ---------------  | -\n| `valueChange`         | any &#124; any[] | emits the new value after a change\n'},"demo.component.html":{type:"html",content:l(7243)},"demo.component.ts":{type:"ts",content:l(4750)}}}}let w=(()=>{class n{}return n.\u0275fac=function(a){return new(a||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[[i.ez,f.u5,v.l,r.mt_,p.Bz.forChild([{path:"",component:v.z,data:{demo:m}}])]]}),n})()},7243:(c,t,l)=>{l.r(t),l.d(t,{default:()=>i});const i='<h3>Basic</h3>\n<vcl-flip-switch [(value)]="value1"></vcl-flip-switch><br>\nCurrent value: {{value1}}\n\n<h3>With custom labels</h3>\n<vcl-flip-switch onLabel="Yes" offLabel="No" [(value)]="value2"></vcl-flip-switch><br>\nCurrent value: {{value2}}\n\n<h3>Disabled</h3>\n<vcl-flip-switch onLabel="Yes" offLabel="No" [(value)]="value2" [disabled]="true"></vcl-flip-switch><br>\n'},4750:(c,t,l)=>{l.r(t),l.d(t,{default:()=>i});const i="import { Component, OnInit } from '@angular/core';\n\n@Component({\n  templateUrl: 'demo.component.html'\n})\nexport class FlipSwitchDemoComponent {\n  value1 = false;\n  value2 = false;\n}\n"}}]);