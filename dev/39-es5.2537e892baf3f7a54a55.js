!function(){function e(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{"9SRc":function(e,n,l){"use strict";l.r(n),n.default="import { Component } from '@angular/core';\n\n@Component({\n  templateUrl: 'demo.component.html'\n})\nexport class SliderDemoComponent {\n  value1 = 0;\n  value2 = 0;\n  value3 = 0;\n  value4 = 0;\n  value5 = 0;\n  value6 = 0;\n}\n"},C1sD:function(n,l,a){"use strict";a.r(l),a.d(l,"demo",(function(){return h})),a.d(l,"SliderDemoModule",(function(){return p}));var u,t=a("ofXK"),c=a("tyNb"),i=a("3Pt+"),s=a("19H1"),o=a("2FIb"),v=a("fXoL"),r=a("AS2X"),m=function(){return["\u2600","\u2601","\u2602","\u2603","\u2604","1"]},b=function(){return["d","i","s","a","b","l","e","d"]},d=((u=function n(){e(this,n),this.value1=0,this.value2=0,this.value3=0,this.value4=0,this.value5=0,this.value6=0}).\u0275fac=function(e){return new(e||u)},u.\u0275cmp=v.Db({type:u,selectors:[["ng-component"]],decls:22,vars:30,consts:[[3,"value","valueChange"],[3,"value","min","max","scale","valueChange"],[3,"value","min","max","scale","lock","valueChange"],[3,"value","min","max","enableWheel","scale","valueChange"],[3,"value","min","max","disabled","scale","valueChange"]],template:function(e,n){1&e&&(v.Pb(0,"h3"),v.xc(1,"Basic"),v.Ob(),v.Pb(2,"vcl-slider",0),v.Wb("valueChange",(function(e){return n.value1=e})),v.Ob(),v.xc(3),v.Pb(4,"h3"),v.xc(5,"With a scale"),v.Ob(),v.Pb(6,"vcl-slider",1),v.Wb("valueChange",(function(e){return n.value2=e})),v.Ob(),v.xc(7),v.Pb(8,"h3"),v.xc(9,"With value locked to the scale"),v.Ob(),v.Pb(10,"vcl-slider",2),v.Wb("valueChange",(function(e){return n.value3=e})),v.Ob(),v.xc(11),v.Pb(12,"h3"),v.xc(13,"custom labeled scale"),v.Ob(),v.Pb(14,"vcl-slider",3),v.Wb("valueChange",(function(e){return n.value4=e})),v.Ob(),v.xc(15),v.Pb(16,"h3"),v.xc(17,"disabled"),v.Ob(),v.Pb(18,"vcl-slider",4),v.Wb("valueChange",(function(e){return n.value5=e})),v.Ob(),v.Pb(19,"h3"),v.xc(20,"With value outer min/max bounds"),v.Ob(),v.Pb(21,"vcl-slider",1),v.Wb("valueChange",(function(e){return n.value6=e})),v.Ob()),2&e&&(v.yb(2),v.fc("value",n.value1),v.yb(1),v.zc("\nValue: ",n.value1," "),v.yb(3),v.fc("value",n.value2)("min",0)("max",100)("scale",11),v.yb(1),v.zc("\nValue: ",n.value2," "),v.yb(3),v.fc("value",n.value3)("min",0)("max",100)("scale",11)("lock",!0),v.yb(1),v.zc("\nValue: ",n.value3," "),v.yb(3),v.fc("value",n.value4)("min",0)("max",5)("enableWheel",!0)("scale",v.gc(28,m)),v.yb(1),v.zc("\nValue: ",n.value4," "),v.yb(3),v.fc("value",n.value5)("min",0)("max",7)("disabled",!0)("scale",v.gc(29,b)),v.yb(3),v.fc("value",n.value6)("min",10)("max",100)("scale",11))},directives:[r.a],encapsulation:2}),u);function h(){return{label:"Slider",tabs:{Demo:d,"README.md":{type:"md",content:'# vcl-slider\n\n## Usage\n\n_Note: HammerJS must be loaded for touch events_\n\n```js\nimport { VCLSliderModule } from \'@vcl/ng-vcl\';\n\n@NgModule({\n  imports: [ VCLSliderModule ],\n  ...\n})\nexport class AppComponent {}\n```\n\n```html\n<vcl-slider\n  [(value)]="value1"\n  [min]="0"\n  [max]="100"\n  [scale]="10">\n</vcl-slider>\n```\n\n```html\n<vcl-slider\n  [(value)]="value2"\n  [min]="0"\n  [max]="50"\n  [lock]="5"\n  [enableWheel]="true"\n  [scale]="[\'Zero\',\'One\',\'Two\',\'Three\',\'Four\',\'Five\']">\n</vcl-slider>\n```\n\n### API\n\n#### Attributes\n\n| Name                | Type                   | Default            | Description\n| ------------        | -----------            | ------------------ |--------------\n| `value`             | number                 |                    | The current value\n| `min`               | number                 | 0                  | The min value\n| `max`               | number                 | 100                | The max value\n| `scale`             | string[] &#124 number  |                    | The legend below the slider\n| `lock`              | boolean                | false              | The selectable value is locked to the scale\n| `enableWheel`       | boolean                | false              | Allows to change the value with the mouse wheel\n| `disabled`          | boolean                | false              | Disables the slider when true\n| `tabindex`          | number                 | 0                  | The tabindex of the slider\n\n#### Events\n\nName                  | Type             | Description\n--------------------- | ---------------  | -\n`valueChange`         | any &#124; any[] | emits the new value when slider value changes\n'},"demo.component.html":{type:"html",content:a("btlG")},"demo.component.ts":{type:"ts",content:a("9SRc")}}}}var f,p=((f=function n(){e(this,n)}).\u0275mod=v.Hb({type:f}),f.\u0275inj=v.Gb({factory:function(e){return new(e||f)},imports:[[t.c,i.m,o.b,s.VCLSliderModule,c.g.forChild([{path:"",component:o.a,data:{demo:h}}])]]}),f)},btlG:function(e,n,l){"use strict";l.r(n),n.default='<h3>Basic</h3>\n<vcl-slider [(value)]="value1"></vcl-slider>\nValue: {{value1}}\n\n<h3>With a scale</h3>\n<vcl-slider \n  [(value)]="value2" \n  [min]="0" \n  [max]="100"\n  [scale]="11">\n</vcl-slider>\nValue: {{value2}}\n\n<h3>With value locked to the scale</h3>\n<vcl-slider \n  [(value)]="value3" \n  [min]="0" \n  [max]="100"\n  [scale]="11"\n  [lock]="true" >\n</vcl-slider>\nValue: {{value3}}\n\n\n<h3>custom labeled scale</h3>\n<vcl-slider \n  [(value)]="value4" \n  [min]="0" \n  [max]="5" \n  [enableWheel]="true" \n  [scale]="[\'\u2600\',\'\u2601\',\'\u2602\',\'\u2603\',\'\u2604\',\'1\']">\n</vcl-slider>\nValue: {{value4}}\n\n\n<h3>disabled</h3>\n\n<vcl-slider \n  [(value)]="value5" \n  [min]="0" \n  [max]="7" \n  [disabled]="true" \n  [scale]="[\'d\',\'i\',\'s\',\'a\',\'b\',\'l\', \'e\', \'d\']">\n</vcl-slider>\n\n<h3>With value outer min/max bounds</h3>\n<vcl-slider \n  [(value)]="value6" \n  [min]="10" \n  [max]="100"\n  [scale]="11">\n</vcl-slider>\n'}}])}();