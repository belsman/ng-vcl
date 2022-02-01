"use strict";(self.webpackChunkng_vcl_demo=self.webpackChunkng_vcl_demo||[]).push([[452],{3452:(a,e,o)=>{o.r(e),o.d(e,{IcogramDemoModule:()=>f,demo:()=>v});var t=o(9808),s=o(5852),r=o(6272),m=o(9155),n=o(4893),d=o(7997),g=o(6447);let p=(()=>{class c{}return c.\u0275fac=function(l){return new(l||c)},c.\u0275cmp=n.Xpm({type:c,selectors:[["ng-component"]],decls:24,vars:2,consts:[["vclPrepend","","icon","fas:chevron-right"],[1,"text"],["vclAppend","","icon","fas:chevron-right"],["vcl-icogram","","href","'https://github.com/ng-vcl/ng-vcl'","target","'_blank'"],["vclPrepend","","icon","fas:link"],["vcl-a-icogram","",3,"href","disabled"]],template:function(l,u){1&l&&(n.TgZ(0,"vcl-icogram"),n._UZ(1,"vcl-icon",0),n._uU(2," icogram with accessible link xxx\n"),n.qZA(),n._UZ(3,"br"),n._UZ(4,"br"),n.TgZ(5,"vcl-icogram"),n._UZ(6,"vcl-icon",0),n.TgZ(7,"div",1),n._uU(8,"prep/app icons"),n.qZA(),n._UZ(9,"vcl-icon",2),n.qZA(),n._UZ(10,"br"),n._UZ(11,"br"),n.TgZ(12,"a",3),n._UZ(13,"vcl-icon",4),n.TgZ(14,"div",1),n._uU(15,"external link with appended icon"),n.qZA(),n.qZA(),n._UZ(16,"br"),n._UZ(17,"br"),n.TgZ(18,"a",5),n._UZ(19,"vcl-icon",4),n.TgZ(20,"div",1),n._uU(21,"Disabled link"),n.qZA(),n.qZA(),n._UZ(22,"br"),n._UZ(23,"br")),2&l&&(n.xp6(18),n.Q6J("href","this is not considered when the link is disabled",n.LSH)("disabled",!0))},directives:[d.m,g.o,d.K],encapsulation:2}),c})();function v(){return{label:"Icogram",tabs:{Demo:p,"README.md":{type:"md",content:'# vcl-icogram\n\nCombination of icon and text.\nIcons can be prepended or appended to a textual label and can be sourced from icon\nfonts.\nAlso supports the anchor tag\n\n## Usage\n\n```html\n<vcl-icogram>\n  <vcl-icon vclPrepend icon="fas:chevron-left"></vcl-icon>\n  Label\n  <vcl-icon vclAppend icon="fas:chevron-right"></vcl-icon>\n</vcl-icogram>\n  \n<a vcl-icogram\n  [href]="\'https://github.com/ng-vcl/ng-vcl\'"\n  [disabled]="true">\n  <vcl-icon vclPrepend icon="fas:link"></vcl-icon>\n  Link\n</a>\n```\n'},"demo.component.html":{type:"html",content:o(5851)},"demo.component.ts":{type:"ts",content:o(2642)}}}}let f=(()=>{class c{}return c.\u0275fac=function(l){return new(l||c)},c.\u0275mod=n.oAB({type:c}),c.\u0275inj=n.cJS({imports:[[t.ez,m.l,r.o14,r.NhM,s.Bz.forChild([{path:"",component:m.z,data:{demo:v}}])]]}),c})()},5851:(a,e,o)=>{o.r(e),o.d(e,{default:()=>t});const t='<vcl-icogram >\n  <vcl-icon vclPrepend icon="fas:chevron-right"></vcl-icon>\n  icogram with accessible link xxx\n</vcl-icogram>\n<br><br>\n\n<vcl-icogram>\n  <vcl-icon vclPrepend icon="fas:chevron-right"></vcl-icon>\n  <div class="text">prep/app icons</div>\n  <vcl-icon vclAppend icon="fas:chevron-right"></vcl-icon>\n</vcl-icogram>\n<br><br>\n\n<a vcl-icogram href="\'https://github.com/ng-vcl/ng-vcl\'" target="\'_blank\'">\n  <vcl-icon vclPrepend icon="fas:link"></vcl-icon>\n  <div class="text">external link with appended icon</div>\n</a>\n<br><br>\n\n<a vcl-a-icogram\n  [href]="\'this is not considered when the link is disabled\'"\n  [disabled]="true">\n  <vcl-icon vclPrepend icon="fas:link"></vcl-icon>\n  <div class="text">Disabled link</div>\n</a>\n<br><br>\n'},2642:(a,e,o)=>{o.r(e),o.d(e,{default:()=>t});const t="import { Component, OnInit } from '@angular/core';\n\n@Component({\n  templateUrl: 'demo.component.html'\n})\nexport class IcogramDemoComponent {\n\n}\n"}}]);