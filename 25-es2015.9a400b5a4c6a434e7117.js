(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{"8Wny":function(n,c,e){"use strict";e.r(c),e.d(c,"demo",function(){return p}),e.d(c,"IcogramDemoModule",function(){return v});var o=e("ofXK"),i=e("tyNb"),t=e("19H1"),r=e("2FIb"),l=e("fXoL"),a=e("Vp9f"),b=e("9Rb9");let s=(()=>{class n{}return n.\u0275fac=function(c){return new(c||n)},n.\u0275cmp=l.Eb({type:n,selectors:[["ng-component"]],decls:21,vars:2,consts:[["vclPrepend","","icon","fas:chevron-right"],["vclAppend","","icon","fas:chevron-right"],["vcl-icogram","","href","'https://github.com/ng-vcl/ng-vcl'","target","'_blank'"],["vclPrepend","","icon","fas:link"],["vcl-a-icogram","",3,"href","disabled"]],template:function(n,c){1&n&&(l.Qb(0,"vcl-icogram"),l.Lb(1,"vcl-icon",0),l.xc(2," icogram with accessible link\n"),l.Pb(),l.Lb(3,"br"),l.Lb(4,"br"),l.Qb(5,"vcl-icogram"),l.Lb(6,"vcl-icon",0),l.xc(7," prep/app icons "),l.Lb(8,"vcl-icon",1),l.Pb(),l.Lb(9,"br"),l.Lb(10,"br"),l.Qb(11,"a",2),l.Lb(12,"vcl-icon",3),l.xc(13," external link with appended icon\n"),l.Pb(),l.Lb(14,"br"),l.Lb(15,"br"),l.Qb(16,"a",4),l.Lb(17,"vcl-icon",3),l.xc(18," Disabled link\n"),l.Pb(),l.Lb(19,"br"),l.Lb(20,"br")),2&n&&(l.zb(16),l.gc("href","this is not considered when the link is disabled",l.oc)("disabled",!0))},directives:[a.a,b.a,a.b],encapsulation:2}),n})();function p(){return{label:"Icogram",tabs:{Demo:s,"README.md":{type:"md",content:'# vcl-icogram\n\nCombination of icon and text.\nIcons can be prepended or appended to a textual label and can be sourced from icon\nfonts.\nAlso supports the anchor tag\n\n## Usage\n\n```html\n<vcl-icogram>\n  <vcl-icon vclPrepend icon="fas:chevron-left"></vcl-icon>\n  Label\n  <vcl-icon vclAppend icon="fas:chevron-right"></vcl-icon>\n</vcl-icogram>\n  \n<a vcl-icogram\n  [href]="\'https://github.com/ng-vcl/ng-vcl\'"\n  [disabled]="true">\n  <vcl-icon vclPrepend icon="fas:link"></vcl-icon>\n  Link\n</a>\n```\n'},"demo.component.html":{type:"html",content:e("bV6M")},"demo.component.ts":{type:"ts",content:e("Thy7")}}}}let v=(()=>{class n{}return n.\u0275fac=function(c){return new(c||n)},n.\u0275mod=l.Ib({type:n}),n.\u0275inj=l.Hb({imports:[[o.c,r.b,t.L,t.M,i.g.forChild([{path:"",component:r.a,data:{demo:p}}])]]}),n})()},Thy7:function(n,c,e){"use strict";e.r(c),c.default="import { Component, OnInit } from '@angular/core';\n\n@Component({\n  templateUrl: 'demo.component.html'\n})\nexport class IcogramDemoComponent {\n\n}\n"},bV6M:function(n,c,e){"use strict";e.r(c),c.default='<vcl-icogram >\n  <vcl-icon vclPrepend icon="fas:chevron-right"></vcl-icon>\n  icogram with accessible link\n</vcl-icogram>\n<br><br>\n<vcl-icogram>\n  <vcl-icon vclPrepend icon="fas:chevron-right"></vcl-icon>\n  prep/app icons\n  <vcl-icon vclAppend icon="fas:chevron-right"></vcl-icon>\n</vcl-icogram>\n<br><br>\n\n<a vcl-icogram href="\'https://github.com/ng-vcl/ng-vcl\'" target="\'_blank\'">\n  <vcl-icon vclPrepend icon="fas:link"></vcl-icon>\n   external link with appended icon\n</a>\n<br><br>\n  \n<a vcl-a-icogram\n  [href]="\'this is not considered when the link is disabled\'"\n  [disabled]="true">\n  <vcl-icon vclPrepend icon="fas:link"></vcl-icon>\n  Disabled link\n</a>\n<br><br>\n'}}]);