(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{"4pD4":function(e,a,t){"use strict";t.r(a),a.default="import { Component } from '@angular/core';\nimport { VCLDateRange, DateAdapterBase } from '@vcl/ng-vcl';\nimport { VCLCalendarDateModifier } from '@vcl/ng-vcl';\n\n@Component({\n  templateUrl: 'demo.component.html',\n  styles: [`\n  vcl-calendar {\n    width: 18em;\n  }\n  `]\n})\nexport class CalendarDemoComponent {\n  constructor(private dateAdapter: DateAdapterBase<Date>) { }\n\n  date: Date;\n  get sdate() {\n    return this.dateAdapter.format(this.date, 'date');\n  }\n  dateRange: VCLDateRange<Date>;\n  get sdateRange() {\n    if (this.dateAdapter.isRange(this.dateRange)) {\n      return this.dateAdapter.format(this.dateRange.start, 'date') + ' - ' + this.dateAdapter.format(this.dateRange.end, 'date');\n    }\n    return '-';\n  }\n  dateArray: Date[] = [];\n  get sdateArray() {\n    return this.dateArray.map(d => this.dateAdapter.format(d, 'date')).join(', ');\n  }\n\n  month: Date;\n  get smonth() {\n    return this.dateAdapter.format(this.month, 'yearMonth');\n  }\n  monthRange: VCLDateRange<Date>;\n  get smonthRange() {\n    if (this.dateAdapter.isRange(this.monthRange)) {\n      return this.dateAdapter.format(this.monthRange.start, 'yearMonth') + ' - ' + this.dateAdapter.format(this.monthRange.end, 'yearMonth');\n    }\n    return '-';\n  }\n  monthArray: Date[] = [];\n  get smonthArray() {\n    return this.monthArray.map(d => this.dateAdapter.format(d, 'yearMonth')).join(', ');\n  }\n\n  today = this.dateAdapter.today();\n\n  available: VCLCalendarDateModifier<Date>[] = [\n    {\n      // Set vclAvailable class on specific range\n      match: {\n        start: this.dateAdapter.addDays(this.dateAdapter.today(), 1),\n        end: this.dateAdapter.addDays(this.dateAdapter.today(), 14),\n      },\n      class: 'available',\n      view: 'month' // Limit to month view\n    }, {\n      // Set vclUnavailable class and disable on specific range\n      match: this.dateAdapter.always(), // Still works as first modifier is prioritized\n      class: 'unavailable',\n      disabled: true,\n      view: 'month' // Limit to month view\n    }\n  ];\n}\n"},CNrg:function(e,a,t){"use strict";t.r(a),t.d(a,"demo",(function(){return m})),t.d(a,"CalendarDemoModule",(function(){return u}));var n=t("ofXK"),r=t("tyNb"),l=t("19H1"),d=t("2FIb"),o=t("fXoL"),i=t("VSXH"),s=t("6B8K");function c(e,a){if(1&e){const e=o.Qb();o.Pb(0,"div",10),o.Pb(1,"div",11),o.Pb(2,"div",12),o.Pb(3,"button",13),o.Wb("click",(function(){o.lc(e);const a=o.Zb();return o.kc(33).viewDate=a.today})),o.xc(4," go to today "),o.Ob(),o.Pb(5,"button",14),o.Wb("click",(function(){o.lc(e),o.Zb();const a=o.kc(33);return a.viewDate=a.value})),o.xc(6," go to selected "),o.Ob(),o.Ob(),o.Ob(),o.Ob()}}let h=(()=>{class e{constructor(e){this.dateAdapter=e,this.dateArray=[],this.monthArray=[],this.today=this.dateAdapter.today(),this.available=[{match:{start:this.dateAdapter.addDays(this.dateAdapter.today(),1),end:this.dateAdapter.addDays(this.dateAdapter.today(),14)},class:"available",view:"month"},{match:this.dateAdapter.always(),class:"unavailable",disabled:!0,view:"month"}]}get sdate(){return this.dateAdapter.format(this.date,"date")}get sdateRange(){return this.dateAdapter.isRange(this.dateRange)?this.dateAdapter.format(this.dateRange.start,"date")+" - "+this.dateAdapter.format(this.dateRange.end,"date"):"-"}get sdateArray(){return this.dateArray.map(e=>this.dateAdapter.format(e,"date")).join(", ")}get smonth(){return this.dateAdapter.format(this.month,"yearMonth")}get smonthRange(){return this.dateAdapter.isRange(this.monthRange)?this.dateAdapter.format(this.monthRange.start,"yearMonth")+" - "+this.dateAdapter.format(this.monthRange.end,"yearMonth"):"-"}get smonthArray(){return this.monthArray.map(e=>this.dateAdapter.format(e,"yearMonth")).join(", ")}}return e.\u0275fac=function(a){return new(a||e)(o.Jb(l.DateAdapterBase))},e.\u0275cmp=o.Db({type:e,selectors:[["ng-component"]],decls:35,vars:17,consts:[[3,"value","valueChange"],["selectionMode","range",3,"value","valueChange"],["selectionMode","multiple",3,"value","maxSelectableDates","valueChange"],["selectionMode","month",3,"value","valueChange"],["selectionMode","month-range",3,"value","valueChange"],["selectionMode","month-multiple",3,"value","maxSelectableDates","valueChange"],[3,"disabled"],[3,"dateModifiers"],["c","vclCalendar"],["vclCalendarFooter","","class","d-g-row",4,"ngIf"],["vclCalendarFooter","",1,"d-g-row"],[1,"d-g-cell","toolbar"],["role","menubar",1,"flex","row","justify-between","center"],["vcl-button","","type","button",1,"transparent","flex",3,"click"],["vcl-button","","square","","type","button",1,"transparent","flex",3,"click"]],template:function(e,a){if(1&e&&(o.Pb(0,"h3"),o.xc(1,"Basic calendar"),o.Ob(),o.Pb(2,"vcl-calendar",0),o.Wb("valueChange",(function(e){return a.date=e})),o.Ob(),o.xc(3),o.Pb(4,"h3"),o.xc(5,'With selectionMode="range"'),o.Ob(),o.Pb(6,"vcl-calendar",1),o.Wb("valueChange",(function(e){return a.dateRange=e})),o.Ob(),o.xc(7),o.Pb(8,"h3"),o.xc(9,'With selectionMode="multiple", maxSelectableDates=3'),o.Ob(),o.Pb(10,"vcl-calendar",2),o.Wb("valueChange",(function(e){return a.dateArray=e})),o.Ob(),o.xc(11),o.Pb(12,"h3"),o.xc(13,'With selectionMode="month"'),o.Ob(),o.Pb(14,"vcl-calendar",3),o.Wb("valueChange",(function(e){return a.month=e})),o.Ob(),o.xc(15),o.Pb(16,"h3"),o.xc(17,'With selectionMode="month-range"'),o.Ob(),o.Pb(18,"vcl-calendar",4),o.Wb("valueChange",(function(e){return a.monthRange=e})),o.Ob(),o.xc(19),o.Pb(20,"h3"),o.xc(21,'With selectionMode="month-multiple", maxSelectableDates=2'),o.Ob(),o.Pb(22,"vcl-calendar",5),o.Wb("valueChange",(function(e){return a.monthArray=e})),o.Ob(),o.xc(23),o.Pb(24,"h3"),o.xc(25,"Disabled"),o.Ob(),o.Kb(26,"vcl-calendar",6),o.Pb(27,"h3"),o.xc(28,"With dateModifiers"),o.Ob(),o.Kb(29,"vcl-calendar",7),o.Pb(30,"h3"),o.xc(31,"Custom Footer"),o.Ob(),o.Pb(32,"vcl-calendar",null,8),o.vc(34,c,7,0,"div",9),o.Ob()),2&e){const e=o.kc(33);o.yb(2),o.fc("value",a.date),o.yb(1),o.zc("\nValue: ",a.sdate," "),o.yb(3),o.fc("value",a.dateRange),o.yb(1),o.zc("\nValue: ",a.sdateRange," "),o.yb(3),o.fc("value",a.dateArray)("maxSelectableDates",3),o.yb(1),o.zc("\nValue: ",a.sdateArray," "),o.yb(3),o.fc("value",a.month),o.yb(1),o.zc("\nValue: ",a.smonth," "),o.yb(3),o.fc("value",a.monthRange),o.yb(1),o.zc("\nValue: ",a.smonthRange," "),o.yb(3),o.fc("value",a.monthArray)("maxSelectableDates",2),o.yb(1),o.zc("\nValue: ",a.smonthArray," "),o.yb(3),o.fc("disabled",!0),o.yb(3),o.fc("dateModifiers",a.available),o.yb(5),o.fc("ngIf","month"===e.view)}},directives:[i.a,n.t,s.b],styles:["vcl-calendar[_ngcontent-%COMP%] {\n    width: 18em;\n  }"]}),e})();function m(){return{label:"Calendar",tabs:{Demo:h,"README.md":{type:"md",content:"# vcl-calendar\n\nA calendar to display and select dates\n\n## Usage\n\n```js\nimport { VCLCalendarModule } from '@vcl/ng-vcl';\n\n@NgModule({\n  imports: [ VCLCalendarModule ],\n  ...\n})\nexport class AppComponent {}\n```\n\n```html\n<vcl-calendar [date]=\"date\"></vcl-calendar>\n```\n\n### Date representation\n\nThe calendar uses the `DateAdapterBase` for date representation.\nCheck the [`DateAdapterBase` docs](#/dateadapter) for further information.\n\n### selectionMode\n\nThe calendar supports a variety of selection modes. The default `selectionMode` is `date`\n\n- `date` Can select a single date\n- `range` Can select a date range with a starting and ending date (see `VCLDateRange` interface)\n- `multiple` Can select multiple dates\n- `month` Can a single month\n- `month-multiple` Can select multiple months \n- `month-range` Can select a month range with a starting and ending month (see `VCLDateRange` interface)\n\n### dateModifier\n\nA date modifier allows to customize specific days in the month calendar.\nAn array of object implementing the `VCLCalendarDateModifier` can be passed to the calendar.\n\n```html\n<vcl-calendar [dateModifiers]=\"dateModifiers\"></vcl-calendar>\n```\n\n```ts\ndateModifiers = [{\n  match: new Date(2019, 0, 1), // Matches January, 1\n  class: 'holiday', // Adds holiday css class\n  disabled: true, // Disabled date\n  view: 'month' // Limits  modifier to month view\n}]\n```\n\n#### vcl-calendar attributes\n\nName                | Type                                            | Default | Description\n---------------     | -------                                         | ------- | -----------------------------------------------\n`value`             | VCLDate \\| VCLDate[] \\| VCLDateRange<VCLDate>   |         | Selected date(s)/date range in the calendar\n`viewDate`          | VCLDate                                         | today   | The currently shown date in the calendar \n`selectionMode`     | VCLCalendarSelectionMode                        |         | See selectionMode description\n`disabled`          | boolean                                         | false   | Disables the calendar when true\n`dateModifiers`     | VCLCalendarDateModifier[]                       |         | only `month` view: See dateModifier description\n`showWeekOfTheYear` | boolean                                         | false   | only `month` view: Show of the year when true\n`maxSelectableDates`| boolean                                         |         | only for selectionMode `multiple` and `month-range`: Maximum number of selectable dates\n\n#### vcl-calendar events\nName                | Type                                              | Description\n---------------     | -------                                           | -----------------------------------------------\n`valueChange`       | VCLDate \\| VCLDate[] \\| VCLDateRange<VCLDate>     | Triggered when a new date is selected\n`viewDateChange`    | VCLDate                                           | Triggered when the viewDate changes\n\n#### vcl-calendar interfaces\n\n```ts\nexport type VCLCalendarSelectionMode = 'date' | 'multiple' | 'range' | 'month' | 'month-multiple' | 'month-range';\nexport type VCLCalendarView = 'month' | 'year' | 'years' | 'hours' | 'minutes';\n\nexport interface VCLCalendarDateModifier<VCLDate> {\n  match: VCLDate | VCLDate[] | VCLDateRange<VCLDate>;\n  class?: string;\n  disabled?: boolean;\n  view:? VCLCalendarView;\n}\n```\n"},"demo.component.html":{type:"html",content:t("EZQ4")},"demo.component.ts":{type:"ts",content:t("4pD4")}}}}let u=(()=>{class e{}return e.\u0275mod=o.Hb({type:e}),e.\u0275inj=o.Gb({factory:function(a){return new(a||e)},imports:[[n.c,d.b,l.VCLButtonModule,l.VCLCalendarModule,r.g.forChild([{path:"",component:d.a,data:{demo:m}}])]]}),e})()},EZQ4:function(e,a,t){"use strict";t.r(a),a.default='<h3>Basic calendar</h3>\n\n<vcl-calendar [(value)]="date"></vcl-calendar>\nValue: {{sdate}}\n\n<h3>With selectionMode="range"</h3>\n\n<vcl-calendar [(value)]="dateRange" selectionMode="range"></vcl-calendar>\nValue: {{sdateRange}}\n\n<h3>With selectionMode="multiple", maxSelectableDates=3</h3>\n\n<vcl-calendar [(value)]="dateArray" selectionMode="multiple" [maxSelectableDates]="3"></vcl-calendar>\nValue: {{sdateArray}}\n\n<h3>With selectionMode="month"</h3>\n\n<vcl-calendar [(value)]="month" selectionMode="month"></vcl-calendar>\nValue: {{smonth}}\n\n<h3>With selectionMode="month-range"</h3>\n\n<vcl-calendar [(value)]="monthRange" selectionMode="month-range"></vcl-calendar>\nValue: {{smonthRange}}\n\n<h3>With selectionMode="month-multiple", maxSelectableDates=2</h3>\n\n<vcl-calendar [(value)]="monthArray" selectionMode="month-multiple" [maxSelectableDates]="2"></vcl-calendar>\nValue: {{smonthArray}}\n\n<h3>Disabled</h3>\n\n<vcl-calendar [disabled]="true"></vcl-calendar>\n\n<h3>With dateModifiers</h3>\n\n<vcl-calendar [dateModifiers]="available"></vcl-calendar>\n\n<h3>Custom Footer</h3>\n\n<vcl-calendar #c="vclCalendar">\n  <div vclCalendarFooter class="d-g-row" *ngIf="c.view === \'month\'">\n    <div class="d-g-cell toolbar">\n      <div class="flex row justify-between center" role="menubar">\n        <button vcl-button class="transparent flex" type="button" (click)="c.viewDate = today">\n          go to today\n        </button>\n        <button vcl-button square class="transparent flex" type="button" (click)="c.viewDate = c.value">\n          go to selected\n        </button>\n      </div>\n    </div>\n  </div>\n</vcl-calendar>\n'}}]);