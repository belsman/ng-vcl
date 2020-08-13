!function(){function n(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{C5SA:function(n,t,l){"use strict";l.r(t),t.default='<vcl-form-control-group>\n  <vcl-label>Basic input</vcl-label>\n  <vcl-input-field>\n    <input vclInput [(ngModel)]="data1" />\n  </vcl-input-field>\n</vcl-form-control-group>\n\n<vcl-form-control-group>\n  <vcl-label>Input (autoselect)</vcl-label>\n  <vcl-input-field>\n    <input vclInput autoselect=true />\n  </vcl-input-field>\n</vcl-form-control-group>\n\n<vcl-form-control-group>\n  <vcl-label>Readonly input</vcl-label>\n  <vcl-input-field>\n    <input vclInput value=\'readonly\' [readonly]="true" />\n  </vcl-input-field>\n</vcl-form-control-group>\n\n<vcl-form-control-group>\n  <vcl-label>Disabled input</vcl-label>\n  <vcl-input-field>\n    <input vclInput value=\'disabled\' [disabled]="true" />\n  </vcl-input-field>\n</vcl-form-control-group>\n\n<vcl-form-control-group>\n  <vcl-label>textarea</vcl-label>\n  <vcl-input-field>\n    <textarea vclInput rows="3"></textarea>\n  </vcl-input-field>\n</vcl-form-control-group>\n\n<vcl-form-control-group>\n  <vcl-label>Autogrowing textarea</vcl-label>\n  <vcl-input-field>\n    <textarea vclInput [autogrow]="true" [minRows]="5" [maxRows]="10"></textarea>\n  </vcl-input-field>\n</vcl-form-control-group>\n\n<vcl-form-control-group>\n  <vcl-label>Disabled textarea</vcl-label>\n  <vcl-input-field>\n    <textarea vclInput [disabled]="true"></textarea>\n  </vcl-input-field>\n</vcl-form-control-group>\n'},KH0R:function(n,t,l){"use strict";l.r(t),t.default="import { Component } from '@angular/core';\n\n@Component({\n  templateUrl: 'demo.component.html'\n})\nexport class InputDemoComponent {\n  data1 = '';\n}\n"},"V+ad":function(t,l,e){"use strict";e.r(l),e.d(l,"demo",(function(){return w})),e.d(l,"InputDemoModule",(function(){return I}));var o,c=e("ofXK"),a=e("3Pt+"),u=e("tyNb"),r=e("19H1"),i=e("2FIb"),p=e("fXoL"),b=e("xsjC"),v=e("x1VK"),s=e("pKlR"),d=e("oZnf"),f=e("1/Kn"),m=e("mo8z"),g=((o=function t(){n(this,t),this.data1=""}).\u0275fac=function(n){return new(n||o)},o.\u0275cmp=p.Eb({type:o,selectors:[["ng-component"]],decls:35,vars:7,consts:[["vclInput","",3,"ngModel","ngModelChange"],["vclInput","","autoselect","true"],["vclInput","","value","readonly",3,"readonly"],["vclInput","","value","disabled",3,"disabled"],["vclInput","","rows","3"],["vclInput","",3,"autogrow","minRows","maxRows"],["vclInput","",3,"disabled"]],template:function(n,t){1&n&&(p.Qb(0,"vcl-form-control-group"),p.Qb(1,"vcl-label"),p.wc(2,"Basic input"),p.Pb(),p.Qb(3,"vcl-input-field"),p.Qb(4,"input",0),p.Xb("ngModelChange",(function(n){return t.data1=n})),p.Pb(),p.Pb(),p.Pb(),p.Qb(5,"vcl-form-control-group"),p.Qb(6,"vcl-label"),p.wc(7,"Input (autoselect)"),p.Pb(),p.Qb(8,"vcl-input-field"),p.Lb(9,"input",1),p.Pb(),p.Pb(),p.Qb(10,"vcl-form-control-group"),p.Qb(11,"vcl-label"),p.wc(12,"Readonly input"),p.Pb(),p.Qb(13,"vcl-input-field"),p.Lb(14,"input",2),p.Pb(),p.Pb(),p.Qb(15,"vcl-form-control-group"),p.Qb(16,"vcl-label"),p.wc(17,"Disabled input"),p.Pb(),p.Qb(18,"vcl-input-field"),p.Lb(19,"input",3),p.Pb(),p.Pb(),p.Qb(20,"vcl-form-control-group"),p.Qb(21,"vcl-label"),p.wc(22,"textarea"),p.Pb(),p.Qb(23,"vcl-input-field"),p.Lb(24,"textarea",4),p.Pb(),p.Pb(),p.Qb(25,"vcl-form-control-group"),p.Qb(26,"vcl-label"),p.wc(27,"Autogrowing textarea"),p.Pb(),p.Qb(28,"vcl-input-field"),p.Lb(29,"textarea",5),p.Pb(),p.Pb(),p.Qb(30,"vcl-form-control-group"),p.Qb(31,"vcl-label"),p.wc(32,"Disabled textarea"),p.Pb(),p.Qb(33,"vcl-input-field"),p.Lb(34,"textarea",6),p.Pb(),p.Pb()),2&n&&(p.yb(4),p.gc("ngModel",t.data1),p.yb(10),p.gc("readonly",!0),p.yb(5),p.gc("disabled",!0),p.yb(10),p.gc("autogrow",!0)("minRows",5)("maxRows",10),p.yb(5),p.gc("disabled",!0))},directives:[b.a,v.a,s.a,d.a,f.a,a.c,a.r,a.u,m.a],encapsulation:2}),o);function w(){return{label:"Input",tabs:{Demo:g,"README.md":{type:"md",content:'# input\n\nEnhanced text input\n\n## Usage\n\n```js\nimport { VCLInputModule } from \'@vcl/ng-vcl\';\n\n@NgModule({\n  imports: [ VCLInputModule ],\n  ...\n})\nexport class AppComponent {}\n```\n\n```html\n<vcl-form-control-group>\n  <vcl-label>Basic input</vcl-label>\n  <vcl-input-field>\n    <input vclInput [(ngModel)]="data1" />\n  </vcl-input-field>\n</vcl-form-control-group>\n\n<vcl-form-control-group>\n  <vcl-label>Basic textarea</vcl-label>\n  <vcl-input-field>\n    <textarea vclInput [(ngModel)]="data1" [autogrow]="true" [minRows]="5" [maxRows]="10"></textarea>\n  </vcl-input-field>\n</vcl-form-control-group>\n\n```\n\n### API\n\n#### input[vclInput] attributes\n\nName            | Type    | Default | Description\n--------------- | ------- | ------- | -----------------------------------------------\n`disabled`      | boolean | false   | Disables the input when true\n`autoselect`    | boolean | false   | Selects text on focus\n\n\n#### textarea[vclInput] Attributes\n\n| Name                | Type        | Default            | Description\n| ------------        | ----------- | ------------------ |--------------\n| `autogrow`          | boolean     | false              | Adjusts the `rows` attribute so it matches the current values number of lines\n| `minRows`           | number      |                    | The min value for `rows` when using autogrow\n| `maxRows`           | number      |                    | The max value for `rows` when using autogrow\n| `autoselect`        | boolean     | false              | Selects text on focus\n'},"demo.component.html":{type:"html",content:e("C5SA")},"demo.component.ts":{type:"ts",content:e("KH0R")}}}}var x,I=((x=function t(){n(this,t)}).\u0275mod=p.Ib({type:x}),x.\u0275inj=p.Hb({factory:function(n){return new(n||x)},imports:[[c.c,a.m,i.b,r.VCLInputModule,u.g.forChild([{path:"",component:i.a,data:{demo:w}}])]]}),x)}}])}();