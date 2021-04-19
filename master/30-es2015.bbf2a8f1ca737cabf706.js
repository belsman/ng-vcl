(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{"6B92":function(n,e,c){"use strict";c.r(e),e.default='<div (vclOffClick)="offClick()" style="border: 2px solid;background-color:red;width:300px;height:300px">\n  DIV 1\n  <br>\n  Click somewhere outside to trigger an offClick\n  <div style="border: 1px solid;background-color:green;width:50%;margin:auto; height:100px">\n    DIV 2 \n    <br>\n    This is a subelement of DIV 1 \n  </div>\n</div>\n<br>\n<div *ngIf="clicks > 0">offClicks triggered: {{clicks}}</div>\n<div *ngIf="clicks === 0">Click anywhere to trigger an offClick</div>\n  \n'},PgqX:function(n,e,c){"use strict";c.r(e),c.d(e,"demo",function(){return u}),c.d(e,"OffClickDemoModule",function(){return k});var i=c("ofXK"),o=c("tyNb"),t=c("19H1"),r=c("2FIb"),l=c("fXoL"),s=c("3U/2");function f(n,e){if(1&n&&(l.Qb(0,"div"),l.xc(1),l.Pb()),2&n){const n=l.ac();l.zb(1),l.zc("offClicks triggered: ",n.clicks,"")}}function d(n,e){1&n&&(l.Qb(0,"div"),l.xc(1,"Click anywhere to trigger an offClick"),l.Pb())}let a=(()=>{class n{constructor(){this.clicks=0}offClick(){this.clicks++}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=l.Eb({type:n,selectors:[["ng-component"]],decls:11,vars:2,consts:[[2,"border","2px solid","background-color","red","width","300px","height","300px",3,"vclOffClick"],[2,"border","1px solid","background-color","green","width","50%","margin","auto","height","100px"],[4,"ngIf"]],template:function(n,e){1&n&&(l.Qb(0,"div",0),l.Xb("vclOffClick",function(){return e.offClick()}),l.xc(1," DIV 1 "),l.Lb(2,"br"),l.xc(3," Click somewhere outside to trigger an offClick "),l.Qb(4,"div",1),l.xc(5," DIV 2 "),l.Lb(6,"br"),l.xc(7," This is a subelement of DIV 1 "),l.Pb(),l.Pb(),l.Lb(8,"br"),l.vc(9,f,2,1,"div",2),l.vc(10,d,2,0,"div",2)),2&n&&(l.zb(9),l.gc("ngIf",e.clicks>0),l.zb(1),l.gc("ngIf",0===e.clicks))},directives:[s.a,i.l],encapsulation:2}),n})();function u(){return{label:"Off Click",tabs:{Demo:a,"README.md":{type:"md",content:"# offClick directive\n\nThe offClick event fires when a click event is handled and its source is not(!) the element or any of its subelements.  \n\n## Usage\n\n```js\nimport { VCLOffClickModule } from '@vcl/ng-vcl';\n\n@NgModule({\n  imports: [ VCLOffClickModule ],\n  ...\n})\nexport class AppComponent {}\n```\n\noffClick() is called when the click`s source is not DIV1 or DIV2  \n\n```html\n<div (offClick)=\"offClick()\">\n  DIV1\n  <div>\n    DIV2\n  </div>\n</div>\n```\n"},"demo.component.html":{type:"html",content:c("6B92")},"demo.component.ts":{type:"ts",content:c("rLsb")}}}}let k=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=l.Ib({type:n}),n.\u0275inj=l.Hb({imports:[[i.c,r.b,t.U,o.g.forChild([{path:"",component:r.a,data:{demo:u}}])]]}),n})()},rLsb:function(n,e,c){"use strict";c.r(e),e.default="import { Component } from '@angular/core';\n\n@Component({\n  templateUrl: 'demo.component.html'\n})\nexport class OffClickDemoComponent  {\n\n  clicks = 0;\n\n  offClick() {\n    this.clicks++;\n  }\n}\n"}}]);