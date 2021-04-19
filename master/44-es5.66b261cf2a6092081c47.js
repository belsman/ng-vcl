!function(){function o(o,i){if(!(o instanceof i))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{"0l4O":function(o,i,n){"use strict";n.r(i),i.default='<h3>Sample Zoom-Box</h3>\n<div class="grid-row">\n  <div class="grid-span-4">\n    <vcl-zoom-box-container #first [x]="30" [y]="60" [width]="120" [height]="190">\n      <img src="https://picsum.photos/320/320?image=434">\n      <vcl-zoom-box-magnifier></vcl-zoom-box-magnifier>\n    </vcl-zoom-box-container>\n  </div>\n  <div class="grid-span-4">\n    <vcl-zoom-box [target]="first"></vcl-zoom-box>\n  </div>\n</div>\n<br><br>\n\n<h3>Zoom-Box with a higher resolution image and mouse reset</h3>\n<div class="grid-row">\n  <div class="grid-span-4">\n    <vcl-zoom-box-container #second [x]="30" [y]="60" [width]="190" [height]="120" [resetOnOut]="true">\n      <img src="https://picsum.photos/320/320?image=434">\n      <vcl-zoom-box-magnifier></vcl-zoom-box-magnifier>\n    </vcl-zoom-box-container>\n  </div>\n  <div class="grid-span-4">\n    <vcl-zoom-box [target]="second" image="https://picsum.photos/640/640?image=434" [scale]="2"></vcl-zoom-box>\n  </div>\n</div>\n<br><br>\n\n<h3>Zoom-Box with an initially hidden magnifier</h3>\n<div class="grid-row">\n  <div class="grid-span-4">\n    <vcl-zoom-box-container #third [x]="30" [y]="60" [width]="190" [height]="120" [hiding]="true">\n      <img src="https://picsum.photos/320/320?image=434">\n      <vcl-zoom-box-magnifier></vcl-zoom-box-magnifier>\n    </vcl-zoom-box-container>\n  </div>\n  <div class="grid-span-4">\n    <vcl-zoom-box [target]="third" image="https://picsum.photos/640/640?image=434" [scale]="2"></vcl-zoom-box>\n  </div>\n</div>\n<br><br>\n\n<h3>Zoom-Box with appearing magnifier</h3>\n<div class="grid-row">\n  <div class="grid-span-4">\n    <vcl-zoom-box-container #fourth [x]="30" [y]="60" [width]="190" [height]="120" [hidden]="true" [hiding]="true">\n      <img src="https://picsum.photos/320/320?image=434">\n      <vcl-zoom-box-magnifier></vcl-zoom-box-magnifier>\n    </vcl-zoom-box-container>\n  </div>\n  <div class="grid-span-4">\n    <vcl-zoom-box [target]="fourth" image="https://picsum.photos/640/640?image=434" [scale]="2"></vcl-zoom-box>\n  </div>\n</div>\n<br><br>\n\n<h3>Zoom-Box with an constantly hidden magnifier</h3>\n<div class="grid-row">\n  <div class="grid-span-4">\n    <vcl-zoom-box-container #fifth [x]="30" [y]="60" [width]="190" [height]="120" [invisible]="true">\n      <img src="https://picsum.photos/320/320?image=434">\n      <vcl-zoom-box-magnifier></vcl-zoom-box-magnifier>\n    </vcl-zoom-box-container>\n  </div>\n  <div class="grid-span-4">\n    <vcl-zoom-box [target]="fifth" image="https://picsum.photos/640/640?image=434" [scale]="2"></vcl-zoom-box>\n  </div>\n</div>\n'},KqqY:function(i,n,t){"use strict";t.r(n),t.d(n,"demo",function(){return l}),t.d(n,"ZoomBoxDemoModule",function(){return x});var e,c=t("ofXK"),m=t("tyNb"),a=t("19H1"),r=t("2FIb"),b=t("fXoL"),s=t("rlMt"),h=t("EHKx"),g=t("5/Eo"),d=((e=function i(){o(this,i)}).\u0275fac=function(o){return new(o||e)},e.\u0275cmp=b.Eb({type:e,selectors:[["ng-component"]],decls:58,vars:34,consts:[[1,"grid-row"],[1,"grid-span-4"],[3,"x","y","width","height"],["first",""],["src","https://picsum.photos/320/320?image=434"],[3,"target"],[3,"x","y","width","height","resetOnOut"],["second",""],["image","https://picsum.photos/640/640?image=434",3,"target","scale"],[3,"x","y","width","height","hiding"],["third",""],[3,"x","y","width","height","hidden","hiding"],["fourth",""],[3,"x","y","width","height","invisible"],["fifth",""]],template:function(o,i){if(1&o&&(b.Qb(0,"h3"),b.xc(1,"Sample Zoom-Box"),b.Pb(),b.Qb(2,"div",0),b.Qb(3,"div",1),b.Qb(4,"vcl-zoom-box-container",2,3),b.Lb(6,"img",4),b.Lb(7,"vcl-zoom-box-magnifier"),b.Pb(),b.Pb(),b.Qb(8,"div",1),b.Lb(9,"vcl-zoom-box",5),b.Pb(),b.Pb(),b.Lb(10,"br"),b.Lb(11,"br"),b.Qb(12,"h3"),b.xc(13,"Zoom-Box with a higher resolution image and mouse reset"),b.Pb(),b.Qb(14,"div",0),b.Qb(15,"div",1),b.Qb(16,"vcl-zoom-box-container",6,7),b.Lb(18,"img",4),b.Lb(19,"vcl-zoom-box-magnifier"),b.Pb(),b.Pb(),b.Qb(20,"div",1),b.Lb(21,"vcl-zoom-box",8),b.Pb(),b.Pb(),b.Lb(22,"br"),b.Lb(23,"br"),b.Qb(24,"h3"),b.xc(25,"Zoom-Box with an initially hidden magnifier"),b.Pb(),b.Qb(26,"div",0),b.Qb(27,"div",1),b.Qb(28,"vcl-zoom-box-container",9,10),b.Lb(30,"img",4),b.Lb(31,"vcl-zoom-box-magnifier"),b.Pb(),b.Pb(),b.Qb(32,"div",1),b.Lb(33,"vcl-zoom-box",8),b.Pb(),b.Pb(),b.Lb(34,"br"),b.Lb(35,"br"),b.Qb(36,"h3"),b.xc(37,"Zoom-Box with appearing magnifier"),b.Pb(),b.Qb(38,"div",0),b.Qb(39,"div",1),b.Qb(40,"vcl-zoom-box-container",11,12),b.Lb(42,"img",4),b.Lb(43,"vcl-zoom-box-magnifier"),b.Pb(),b.Pb(),b.Qb(44,"div",1),b.Lb(45,"vcl-zoom-box",8),b.Pb(),b.Pb(),b.Lb(46,"br"),b.Lb(47,"br"),b.Qb(48,"h3"),b.xc(49,"Zoom-Box with an constantly hidden magnifier"),b.Pb(),b.Qb(50,"div",0),b.Qb(51,"div",1),b.Qb(52,"vcl-zoom-box-container",13,14),b.Lb(54,"img",4),b.Lb(55,"vcl-zoom-box-magnifier"),b.Pb(),b.Pb(),b.Qb(56,"div",1),b.Lb(57,"vcl-zoom-box",8),b.Pb(),b.Pb()),2&o){var n=b.lc(5),t=b.lc(17),e=b.lc(29),c=b.lc(41),m=b.lc(53);b.zb(4),b.gc("x",30)("y",60)("width",120)("height",190),b.zb(5),b.gc("target",n),b.zb(7),b.gc("x",30)("y",60)("width",190)("height",120)("resetOnOut",!0),b.zb(5),b.gc("target",t)("scale",2),b.zb(7),b.gc("x",30)("y",60)("width",190)("height",120)("hiding",!0),b.zb(5),b.gc("target",e)("scale",2),b.zb(7),b.gc("x",30)("y",60)("width",190)("height",120)("hidden",!0)("hiding",!0),b.zb(5),b.gc("target",c)("scale",2),b.zb(7),b.gc("x",30)("y",60)("width",190)("height",120)("invisible",!0),b.zb(5),b.gc("target",m)("scale",2)}},directives:[s.a,h.a,g.a],encapsulation:2}),e);function l(){return{label:"Zoom Box",tabs:{Demo:d,"README.md":{type:"md",content:'# vcl-zoom-box\n\nZoom into areas of images.\n\n## Usage\n\n```html\n<vcl-zoom-box-container #first [x]="30" [y]="60" [width]="120" [height]="190">\n  <img src="https://picsum.photos/320/320?image=434">\n  <vcl-zoom-box-magnifier></vcl-zoom-box-magnifier>\n</vcl-zoom-box-container>\n<vcl-zoom-box [target]="first"></vcl-zoom-box>\n```\n\n### API\n\n#### Zoom-Box Container Attributes\n\n| Name                | Type        | Default            | Description\n| ------------------- | ----------- | ------------------ |--------------\n| `x`                 | number      | 0                  | Left offset (optional)\n| `y`                 | number      | 0                  | Top offset (optional)\n| `width`             | number      |                    | Width of zoomed box\n| `height`            | number      |                    | Height of zoomed box\n| `resetOnOut`        | boolean     | false              | Reset position to initial on mouse out\n\n### Zoom-Box Attributes\n\n| Name                | Type        | Default            | Description\n| ------------        | ----------- | ------------------ |--------------\n| `image`             | string      | ""                 | High resolution image (optional)\n| `highResScale`      | number      | 1                  | High resolution image scale multiplier (required if image is defined)\n'},"demo.component.html":{type:"html",content:t("0l4O")},"demo.component.ts":{type:"ts",content:t("vWqg")}}}}var v,x=((v=function i(){o(this,i)}).\u0275fac=function(o){return new(o||v)},v.\u0275mod=b.Ib({type:v}),v.\u0275inj=b.Hb({imports:[[c.c,r.b,a.hb,m.g.forChild([{path:"",component:r.a,data:{demo:l}}])]]}),v)},vWqg:function(o,i,n){"use strict";n.r(i),i.default="import { Component } from '@angular/core';\n\n@Component({\n  templateUrl: 'demo.component.html'\n})\nexport class ZoomBoxDemoComponent {\n\n}\n"}}])}();