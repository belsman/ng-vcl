"use strict";(self.webpackChunkng_vcl_demo=self.webpackChunkng_vcl_demo||[]).push([[10],{6010:(p,a,n)=>{n.r(a),n.d(a,{DatepickerDemoModule:()=>M,demo:()=>s});var r=n(9808),u=n(5367),d=n(265),v=n(9155),e=n(4893),g=n(5550),D=n(1300),k=n(2007),f=n(2642),m=n(2382);let C=(()=>{class t{constructor(o){this.da=o,this.date=new Date,this.month=new Date,this.time=new Date,this.datePattern=this.da.pattern("date"),this.monthPattern=this.da.pattern("month"),this.timePattern=this.da.pattern("time")}onChange(o){console.log("onChange",o)}}return t.\u0275fac=function(o){return new(o||t)(e.Y36(d._AI))},t.\u0275cmp=e.Xpm({type:t,selectors:[["ng-component"]],decls:16,vars:7,consts:[[3,"placeholder","ngModel","ngModelChange"],["pick","month",3,"placeholder","ngModel","ngModelChange"],["pick","time",3,"placeholder","ngModel","ngModelChange"],[3,"disabled"]],template:function(o,l){1&o&&(e.TgZ(0,"vcl-form-control-group")(1,"vcl-label"),e._uU(2,"Basic Date Picker"),e.qZA(),e.TgZ(3,"vcl-date-picker",0),e.NdJ("ngModelChange",function(c){return l.date=c}),e.qZA()(),e.TgZ(4,"vcl-form-control-group")(5,"vcl-label"),e._uU(6,"Month Picker"),e.qZA(),e.TgZ(7,"vcl-date-picker",1),e.NdJ("ngModelChange",function(c){return l.month=c}),e.qZA()(),e.TgZ(8,"vcl-form-control-group")(9,"vcl-label"),e._uU(10,"Time Picker"),e.qZA(),e.TgZ(11,"vcl-date-picker",2),e.NdJ("ngModelChange",function(c){return l.time=c}),e.qZA()(),e.TgZ(12,"vcl-form-control-group")(13,"vcl-label"),e._uU(14,"Disabled Date Picker"),e.qZA(),e._UZ(15,"vcl-date-picker",3),e.qZA()),2&o&&(e.xp6(3),e.Q6J("placeholder",l.datePattern)("ngModel",l.date),e.xp6(4),e.Q6J("placeholder",l.monthPattern)("ngModel",l.month),e.xp6(4),e.Q6J("placeholder",l.timePattern)("ngModel",l.time),e.xp6(4),e.Q6J("disabled",!0))},directives:[g.o,D._T,k.q8,f.Q,m.JJ,m.On],encapsulation:2}),t})();function s(){return{label:"Datepicker",tabs:{Demo:C,"README.md":{type:"md",content:'# vcl-date-picker\n\nLets users pick dates and time comfortably.\n\n## Usage\n\n```js\nimport { VCLDatePickerModule } from \'@vcl/ng-vcl\';;\n\n@NgModule({\n  imports: [ VCLDatePickerModule ],\n  ...\n})\nexport class AppComponent {}\n```\n\n```html\n<vcl-form-control-group>\n  <vcl-label>Date picker</vcl-label>\n  <vcl-date-picker [value]="value" (valueChange)="onValueChange($event)"></vcl-date-picker>\n</vcl-form-control-group>\n```\n```html\n<vcl-form-control-group>\n  <vcl-label>Month picker</vcl-label>\n  <vcl-date-picker [value]="value" (valueChange)="onValueChange($event)" pick="month"></vcl-date-picker>\n</vcl-form-control-group>\n```\n\n```html\n  <vcl-form-control-group>\n    <vcl-label>Time picker</vcl-label>\n    <vcl-date-picker [value]="value" (valueChange)="onValueChange($event)" pick="time"></vcl-date-picker>\n  </vcl-form-control-group>\n```\n\n### Date representation\n\nThe datepicker uses the `DateAdapterBase` for date representation.\nCheck the [`DateAdapterBase` docs](#/dateadapter) for further information.\n\n### API\n\n#### vcl-date-picker attributes\n\nName                | Type                                            | Default | Description\n------------        | -------                                         | ------- | -----------------------------------------------\n`value`             | VCLDate                                         |         | Current value\n`viewDate`          | VCLDate                                         | today   | The currently shown date in the calendar\n`disabled`          | boolean                                         | false   | Disables the datepicker when true\n`pick`              | \'date\' \\| \'month\' \\| \'time\'                     | \'date\'  | Datepicker mode\n`dateModifier`      | VCLCalendarDateModifier[]                       |         | See vcl-calendar\n`showWeekOfTheYear` | boolean                                         | false   | See vcl-calendar\n\n#### vcl-date-picker events\nName                | Type       | Description\n---------------     | -------    | -----------------------------------------------\n`valueChange`       | VCLDate    | Triggered when a new date is selected\n'},"demo.component.html":{type:"html",content:n(2527)},"demo.component.ts":{type:"ts",content:n(2290)}}}}let M=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[r.ez,m.u5,v.l,d.V4c,d.ds4,d.tuJ,u.Bz.forChild([{path:"",component:v.z,data:{demo:s}}])]]}),t})()},2527:(p,a,n)=>{n.r(a),n.d(a,{default:()=>r});const r='<vcl-form-control-group>\n  <vcl-label>Basic Date Picker</vcl-label>\n  <vcl-date-picker [placeholder]="datePattern" [(ngModel)]="date"></vcl-date-picker>\n</vcl-form-control-group>\n\n<vcl-form-control-group>\n  <vcl-label>Month Picker</vcl-label>\n  <vcl-date-picker [placeholder]="monthPattern" [(ngModel)]="month" pick="month"></vcl-date-picker>\n</vcl-form-control-group>\n\n<vcl-form-control-group>\n  <vcl-label>Time Picker</vcl-label>\n  <vcl-date-picker [placeholder]="timePattern" [(ngModel)]="time" pick="time"></vcl-date-picker>\n</vcl-form-control-group>\n\n<vcl-form-control-group>\n  <vcl-label>Disabled Date Picker</vcl-label>\n  <vcl-date-picker [disabled]="true"></vcl-date-picker>\n</vcl-form-control-group>\n'},2290:(p,a,n)=>{n.r(a),n.d(a,{default:()=>r});const r="import { Component } from '@angular/core';\nimport { DateAdapter } from '@vcl/ng-vcl';\n\n@Component({\n  templateUrl: 'demo.component.html'\n})\nexport class DatePickerDemoComponent {\n\n  constructor(private da: DateAdapter) { }\n\n  date = new Date();\n  month = new Date();\n  time = new Date();\n\n  datePattern = this.da.pattern('date');\n  monthPattern = this.da.pattern('month');\n  timePattern = this.da.pattern('time');\n\n  onChange(date) {\n    console.log('onChange', date);\n  }\n}\n"}}]);