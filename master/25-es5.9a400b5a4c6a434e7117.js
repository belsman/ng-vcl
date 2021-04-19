!function(){function n(n,c){if(!(n instanceof c))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{"8Wny":function(c,o,e){"use strict";e.r(o),e.d(o,"demo",function(){return d}),e.d(o,"IcogramDemoModule",function(){return h});var i,t=e("ofXK"),r=e("tyNb"),l=e("19H1"),a=e("2FIb"),b=e("fXoL"),s=e("Vp9f"),p=e("9Rb9"),v=((i=function c(){n(this,c)}).\u0275fac=function(n){return new(n||i)},i.\u0275cmp=b.Eb({type:i,selectors:[["ng-component"]],decls:21,vars:2,consts:[["vclPrepend","","icon","fas:chevron-right"],["vclAppend","","icon","fas:chevron-right"],["vcl-icogram","","href","'https://github.com/ng-vcl/ng-vcl'","target","'_blank'"],["vclPrepend","","icon","fas:link"],["vcl-a-icogram","",3,"href","disabled"]],template:function(n,c){1&n&&(b.Qb(0,"vcl-icogram"),b.Lb(1,"vcl-icon",0),b.xc(2," icogram with accessible link\n"),b.Pb(),b.Lb(3,"br"),b.Lb(4,"br"),b.Qb(5,"vcl-icogram"),b.Lb(6,"vcl-icon",0),b.xc(7," prep/app icons "),b.Lb(8,"vcl-icon",1),b.Pb(),b.Lb(9,"br"),b.Lb(10,"br"),b.Qb(11,"a",2),b.Lb(12,"vcl-icon",3),b.xc(13," external link with appended icon\n"),b.Pb(),b.Lb(14,"br"),b.Lb(15,"br"),b.Qb(16,"a",4),b.Lb(17,"vcl-icon",3),b.xc(18," Disabled link\n"),b.Pb(),b.Lb(19,"br"),b.Lb(20,"br")),2&n&&(b.zb(16),b.gc("href","this is not considered when the link is disabled",b.oc)("disabled",!0))},directives:[s.a,p.a,s.b],encapsulation:2}),i);function d(){return{label:"Icogram",tabs:{Demo:v,"README.md":{type:"md",content:'# vcl-icogram\n\nCombination of icon and text.\nIcons can be prepended or appended to a textual label and can be sourced from icon\nfonts.\nAlso supports the anchor tag\n\n## Usage\n\n```html\n<vcl-icogram>\n  <vcl-icon vclPrepend icon="fas:chevron-left"></vcl-icon>\n  Label\n  <vcl-icon vclAppend icon="fas:chevron-right"></vcl-icon>\n</vcl-icogram>\n  \n<a vcl-icogram\n  [href]="\'https://github.com/ng-vcl/ng-vcl\'"\n  [disabled]="true">\n  <vcl-icon vclPrepend icon="fas:link"></vcl-icon>\n  Link\n</a>\n```\n'},"demo.component.html":{type:"html",content:e("bV6M")},"demo.component.ts":{type:"ts",content:e("Thy7")}}}}var m,h=((m=function c(){n(this,c)}).\u0275fac=function(n){return new(n||m)},m.\u0275mod=b.Ib({type:m}),m.\u0275inj=b.Hb({imports:[[t.c,a.b,l.L,l.M,r.g.forChild([{path:"",component:a.a,data:{demo:d}}])]]}),m)},Thy7:function(n,c,o){"use strict";o.r(c),c.default="import { Component, OnInit } from '@angular/core';\n\n@Component({\n  templateUrl: 'demo.component.html'\n})\nexport class IcogramDemoComponent {\n\n}\n"},bV6M:function(n,c,o){"use strict";o.r(c),c.default='<vcl-icogram >\n  <vcl-icon vclPrepend icon="fas:chevron-right"></vcl-icon>\n  icogram with accessible link\n</vcl-icogram>\n<br><br>\n<vcl-icogram>\n  <vcl-icon vclPrepend icon="fas:chevron-right"></vcl-icon>\n  prep/app icons\n  <vcl-icon vclAppend icon="fas:chevron-right"></vcl-icon>\n</vcl-icogram>\n<br><br>\n\n<a vcl-icogram href="\'https://github.com/ng-vcl/ng-vcl\'" target="\'_blank\'">\n  <vcl-icon vclPrepend icon="fas:link"></vcl-icon>\n   external link with appended icon\n</a>\n<br><br>\n  \n<a vcl-a-icogram\n  [href]="\'this is not considered when the link is disabled\'"\n  [disabled]="true">\n  <vcl-icon vclPrepend icon="fas:link"></vcl-icon>\n  Disabled link\n</a>\n<br><br>\n'}}])}();