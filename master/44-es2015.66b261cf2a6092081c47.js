(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{"0l4O":function(o,i,n){"use strict";n.r(i),i.default='<h3>Sample Zoom-Box</h3>\n<div class="grid-row">\n  <div class="grid-span-4">\n    <vcl-zoom-box-container #first [x]="30" [y]="60" [width]="120" [height]="190">\n      <img src="https://picsum.photos/320/320?image=434">\n      <vcl-zoom-box-magnifier></vcl-zoom-box-magnifier>\n    </vcl-zoom-box-container>\n  </div>\n  <div class="grid-span-4">\n    <vcl-zoom-box [target]="first"></vcl-zoom-box>\n  </div>\n</div>\n<br><br>\n\n<h3>Zoom-Box with a higher resolution image and mouse reset</h3>\n<div class="grid-row">\n  <div class="grid-span-4">\n    <vcl-zoom-box-container #second [x]="30" [y]="60" [width]="190" [height]="120" [resetOnOut]="true">\n      <img src="https://picsum.photos/320/320?image=434">\n      <vcl-zoom-box-magnifier></vcl-zoom-box-magnifier>\n    </vcl-zoom-box-container>\n  </div>\n  <div class="grid-span-4">\n    <vcl-zoom-box [target]="second" image="https://picsum.photos/640/640?image=434" [scale]="2"></vcl-zoom-box>\n  </div>\n</div>\n<br><br>\n\n<h3>Zoom-Box with an initially hidden magnifier</h3>\n<div class="grid-row">\n  <div class="grid-span-4">\n    <vcl-zoom-box-container #third [x]="30" [y]="60" [width]="190" [height]="120" [hiding]="true">\n      <img src="https://picsum.photos/320/320?image=434">\n      <vcl-zoom-box-magnifier></vcl-zoom-box-magnifier>\n    </vcl-zoom-box-container>\n  </div>\n  <div class="grid-span-4">\n    <vcl-zoom-box [target]="third" image="https://picsum.photos/640/640?image=434" [scale]="2"></vcl-zoom-box>\n  </div>\n</div>\n<br><br>\n\n<h3>Zoom-Box with appearing magnifier</h3>\n<div class="grid-row">\n  <div class="grid-span-4">\n    <vcl-zoom-box-container #fourth [x]="30" [y]="60" [width]="190" [height]="120" [hidden]="true" [hiding]="true">\n      <img src="https://picsum.photos/320/320?image=434">\n      <vcl-zoom-box-magnifier></vcl-zoom-box-magnifier>\n    </vcl-zoom-box-container>\n  </div>\n  <div class="grid-span-4">\n    <vcl-zoom-box [target]="fourth" image="https://picsum.photos/640/640?image=434" [scale]="2"></vcl-zoom-box>\n  </div>\n</div>\n<br><br>\n\n<h3>Zoom-Box with an constantly hidden magnifier</h3>\n<div class="grid-row">\n  <div class="grid-span-4">\n    <vcl-zoom-box-container #fifth [x]="30" [y]="60" [width]="190" [height]="120" [invisible]="true">\n      <img src="https://picsum.photos/320/320?image=434">\n      <vcl-zoom-box-magnifier></vcl-zoom-box-magnifier>\n    </vcl-zoom-box-container>\n  </div>\n  <div class="grid-span-4">\n    <vcl-zoom-box [target]="fifth" image="https://picsum.photos/640/640?image=434" [scale]="2"></vcl-zoom-box>\n  </div>\n</div>\n'},KqqY:function(o,i,n){"use strict";n.r(i),n.d(i,"demo",function(){return g}),n.d(i,"ZoomBoxDemoModule",function(){return l});var t=n("ofXK"),e=n("tyNb"),m=n("19H1"),c=n("2FIb"),r=n("fXoL"),b=n("rlMt"),a=n("EHKx"),s=n("5/Eo");let h=(()=>{class o{}return o.\u0275fac=function(i){return new(i||o)},o.\u0275cmp=r.Eb({type:o,selectors:[["ng-component"]],decls:58,vars:34,consts:[[1,"grid-row"],[1,"grid-span-4"],[3,"x","y","width","height"],["first",""],["src","https://picsum.photos/320/320?image=434"],[3,"target"],[3,"x","y","width","height","resetOnOut"],["second",""],["image","https://picsum.photos/640/640?image=434",3,"target","scale"],[3,"x","y","width","height","hiding"],["third",""],[3,"x","y","width","height","hidden","hiding"],["fourth",""],[3,"x","y","width","height","invisible"],["fifth",""]],template:function(o,i){if(1&o&&(r.Qb(0,"h3"),r.xc(1,"Sample Zoom-Box"),r.Pb(),r.Qb(2,"div",0),r.Qb(3,"div",1),r.Qb(4,"vcl-zoom-box-container",2,3),r.Lb(6,"img",4),r.Lb(7,"vcl-zoom-box-magnifier"),r.Pb(),r.Pb(),r.Qb(8,"div",1),r.Lb(9,"vcl-zoom-box",5),r.Pb(),r.Pb(),r.Lb(10,"br"),r.Lb(11,"br"),r.Qb(12,"h3"),r.xc(13,"Zoom-Box with a higher resolution image and mouse reset"),r.Pb(),r.Qb(14,"div",0),r.Qb(15,"div",1),r.Qb(16,"vcl-zoom-box-container",6,7),r.Lb(18,"img",4),r.Lb(19,"vcl-zoom-box-magnifier"),r.Pb(),r.Pb(),r.Qb(20,"div",1),r.Lb(21,"vcl-zoom-box",8),r.Pb(),r.Pb(),r.Lb(22,"br"),r.Lb(23,"br"),r.Qb(24,"h3"),r.xc(25,"Zoom-Box with an initially hidden magnifier"),r.Pb(),r.Qb(26,"div",0),r.Qb(27,"div",1),r.Qb(28,"vcl-zoom-box-container",9,10),r.Lb(30,"img",4),r.Lb(31,"vcl-zoom-box-magnifier"),r.Pb(),r.Pb(),r.Qb(32,"div",1),r.Lb(33,"vcl-zoom-box",8),r.Pb(),r.Pb(),r.Lb(34,"br"),r.Lb(35,"br"),r.Qb(36,"h3"),r.xc(37,"Zoom-Box with appearing magnifier"),r.Pb(),r.Qb(38,"div",0),r.Qb(39,"div",1),r.Qb(40,"vcl-zoom-box-container",11,12),r.Lb(42,"img",4),r.Lb(43,"vcl-zoom-box-magnifier"),r.Pb(),r.Pb(),r.Qb(44,"div",1),r.Lb(45,"vcl-zoom-box",8),r.Pb(),r.Pb(),r.Lb(46,"br"),r.Lb(47,"br"),r.Qb(48,"h3"),r.xc(49,"Zoom-Box with an constantly hidden magnifier"),r.Pb(),r.Qb(50,"div",0),r.Qb(51,"div",1),r.Qb(52,"vcl-zoom-box-container",13,14),r.Lb(54,"img",4),r.Lb(55,"vcl-zoom-box-magnifier"),r.Pb(),r.Pb(),r.Qb(56,"div",1),r.Lb(57,"vcl-zoom-box",8),r.Pb(),r.Pb()),2&o){const o=r.lc(5),i=r.lc(17),n=r.lc(29),t=r.lc(41),e=r.lc(53);r.zb(4),r.gc("x",30)("y",60)("width",120)("height",190),r.zb(5),r.gc("target",o),r.zb(7),r.gc("x",30)("y",60)("width",190)("height",120)("resetOnOut",!0),r.zb(5),r.gc("target",i)("scale",2),r.zb(7),r.gc("x",30)("y",60)("width",190)("height",120)("hiding",!0),r.zb(5),r.gc("target",n)("scale",2),r.zb(7),r.gc("x",30)("y",60)("width",190)("height",120)("hidden",!0)("hiding",!0),r.zb(5),r.gc("target",t)("scale",2),r.zb(7),r.gc("x",30)("y",60)("width",190)("height",120)("invisible",!0),r.zb(5),r.gc("target",e)("scale",2)}},directives:[b.a,a.a,s.a],encapsulation:2}),o})();function g(){return{label:"Zoom Box",tabs:{Demo:h,"README.md":{type:"md",content:'# vcl-zoom-box\n\nZoom into areas of images.\n\n## Usage\n\n```html\n<vcl-zoom-box-container #first [x]="30" [y]="60" [width]="120" [height]="190">\n  <img src="https://picsum.photos/320/320?image=434">\n  <vcl-zoom-box-magnifier></vcl-zoom-box-magnifier>\n</vcl-zoom-box-container>\n<vcl-zoom-box [target]="first"></vcl-zoom-box>\n```\n\n### API\n\n#### Zoom-Box Container Attributes\n\n| Name                | Type        | Default            | Description\n| ------------------- | ----------- | ------------------ |--------------\n| `x`                 | number      | 0                  | Left offset (optional)\n| `y`                 | number      | 0                  | Top offset (optional)\n| `width`             | number      |                    | Width of zoomed box\n| `height`            | number      |                    | Height of zoomed box\n| `resetOnOut`        | boolean     | false              | Reset position to initial on mouse out\n\n### Zoom-Box Attributes\n\n| Name                | Type        | Default            | Description\n| ------------        | ----------- | ------------------ |--------------\n| `image`             | string      | ""                 | High resolution image (optional)\n| `highResScale`      | number      | 1                  | High resolution image scale multiplier (required if image is defined)\n'},"demo.component.html":{type:"html",content:n("0l4O")},"demo.component.ts":{type:"ts",content:n("vWqg")}}}}let l=(()=>{class o{}return o.\u0275fac=function(i){return new(i||o)},o.\u0275mod=r.Ib({type:o}),o.\u0275inj=r.Hb({imports:[[t.c,c.b,m.hb,e.g.forChild([{path:"",component:c.a,data:{demo:g}}])]]}),o})()},vWqg:function(o,i,n){"use strict";n.r(i),i.default="import { Component } from '@angular/core';\n\n@Component({\n  templateUrl: 'demo.component.html'\n})\nexport class ZoomBoxDemoComponent {\n\n}\n"}}]);