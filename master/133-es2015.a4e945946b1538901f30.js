"use strict";(self.webpackChunkng_vcl=self.webpackChunkng_vcl||[]).push([[133],{1133:function(t,i,o){o.r(i),o.d(i,{ZoomBoxDemoModule:function(){return u},demo:function(){return v}});var e=o(16274),n=o(95454),s=o(36196),r=o(62518),h=o(84271);const a=["*"];let m=(()=>{class t{constructor(t,i){this.element=t,this.renderer=i,i.addClass(t.nativeElement,"zoom-box-magnifier")}update(){const t={top:this.parent.y+"px",left:this.parent.x+"px",width:this.parent.width+"px",height:this.parent.height+"px",display:this.parent.hiding||this.parent.invisible?"none":"block","pointer-events":"none"};Object.keys(t).forEach(i=>{this.renderer.setStyle(this.element.nativeElement,i,t[i])})}}return t.\u0275fac=function(i){return new(i||t)(h.Y36(h.SBq),h.Y36(h.Qsj))},t.\u0275cmp=h.Xpm({type:t,selectors:[["vcl-zoom-box-magnifier"]],ngContentSelectors:a,decls:1,vars:0,template:function(t,i){1&t&&(h.F$t(),h.Hsn(0))},encapsulation:2}),t})();const g=["*"];let c=(()=>{class t{constructor(t,i){this.element=t,this.x=0,this.y=0,this.resetOnOut=!1,this.hidden=!1,this.hiding=!1,this.invisible=!1,this.startX=-1,this.startY=-1,i.setStyle(t.nativeElement,"position","relative")}ngAfterContentInit(){this.magnifier.parent=this,this.magnifier.update(),this.imgContent=this.element.nativeElement.querySelector("img"),this.imgContent.onmousemove=t=>this.onMove(t),this.imgContent.onmouseover=()=>this.onOver(),this.imgContent.onmouseout=()=>this.onOut()}onMove(t){-1===this.startX&&(this.startX=this.x,this.startY=this.y);const i=this.height/2,o=this.imgContent.height-this.height/2;this.x=Math.max(this.width/2,Math.min(this.imgContent.width-this.width/2,t.layerX))-this.width/2,this.y=Math.max(i,Math.min(o,t.layerY))-this.height/2,this.magnifier.update()}onOver(){(this.hidden||this.hiding)&&(this.hiding=!1),this.magnifier.update()}onOut(){this.resetOnOut&&(this.x=this.startX,this.y=this.startY),this.hidden&&(this.hiding=!0),this.magnifier.update()}get image(){return this.imgContent.getAttribute("src")}}return t.\u0275fac=function(i){return new(i||t)(h.Y36(h.SBq),h.Y36(h.Qsj))},t.\u0275cmp=h.Xpm({type:t,selectors:[["vcl-zoom-box-container"]],contentQueries:function(t,i,o){if(1&t&&h.Suo(o,m,5),2&t){let t;h.iGM(t=h.CRH())&&(i.magnifier=t.first)}},inputs:{x:"x",y:"y",width:"width",height:"height",resetOnOut:"resetOnOut",hidden:"hidden",hiding:"hiding",invisible:"invisible"},ngContentSelectors:g,decls:2,vars:0,template:function(t,i){1&t&&(h.F$t(),h.TgZ(0,"div"),h.Hsn(1),h.qZA())},encapsulation:2}),t})();const d=function(t,i,o,e,n){return{position:"static","background-image":t,width:i,height:o,"background-position-x":e,"background-position-y":n}};let l=(()=>{class t{constructor(){this._hostAttrRole="zoombox"}get zoomedSource(){return this.image?this.image:this.target.image}get zoomedX(){return this.image?this.target.x*this.scale:this.target.x}get zoomedY(){return this.image?this.target.y*this.scale:this.target.y}get zoomedWidth(){return this.image?this.target.width*this.scale:this.target.width}get zoomedHeight(){return this.image?this.target.height*this.scale:this.target.height}}return t.\u0275fac=function(i){return new(i||t)},t.\u0275cmp=h.Xpm({type:t,selectors:[["vcl-zoom-box"]],hostVars:1,hostBindings:function(t,i){2&t&&h.uIk("role",i._hostAttrRole)},inputs:{target:"target",image:"image",scale:"scale"},decls:1,vars:7,consts:[[1,"zoom-box",3,"ngStyle"]],template:function(t,i){1&t&&h._UZ(0,"div",0),2&t&&h.Q6J("ngStyle",h.qbA(1,d,"url("+i.zoomedSource+")",i.zoomedWidth+"px",i.zoomedHeight+"px","-"+i.zoomedX+"px","-"+i.zoomedY+"px"))},directives:[e.PC],encapsulation:2}),t})(),p=(()=>{class t{}return t.\u0275fac=function(i){return new(i||t)},t.\u0275cmp=h.Xpm({type:t,selectors:[["ng-component"]],decls:58,vars:34,consts:[[1,"grid-row"],[1,"grid-span-4"],[3,"x","y","width","height"],["first",""],["src","https://picsum.photos/320/320?image=434"],[3,"target"],[3,"x","y","width","height","resetOnOut"],["second",""],["image","https://picsum.photos/640/640?image=434",3,"target","scale"],[3,"x","y","width","height","hiding"],["third",""],[3,"x","y","width","height","hidden","hiding"],["fourth",""],[3,"x","y","width","height","invisible"],["fifth",""]],template:function(t,i){if(1&t&&(h.TgZ(0,"h3"),h._uU(1,"Sample Zoom-Box"),h.qZA(),h.TgZ(2,"div",0),h.TgZ(3,"div",1),h.TgZ(4,"vcl-zoom-box-container",2,3),h._UZ(6,"img",4),h._UZ(7,"vcl-zoom-box-magnifier"),h.qZA(),h.qZA(),h.TgZ(8,"div",1),h._UZ(9,"vcl-zoom-box",5),h.qZA(),h.qZA(),h._UZ(10,"br"),h._UZ(11,"br"),h.TgZ(12,"h3"),h._uU(13,"Zoom-Box with a higher resolution image and mouse reset"),h.qZA(),h.TgZ(14,"div",0),h.TgZ(15,"div",1),h.TgZ(16,"vcl-zoom-box-container",6,7),h._UZ(18,"img",4),h._UZ(19,"vcl-zoom-box-magnifier"),h.qZA(),h.qZA(),h.TgZ(20,"div",1),h._UZ(21,"vcl-zoom-box",8),h.qZA(),h.qZA(),h._UZ(22,"br"),h._UZ(23,"br"),h.TgZ(24,"h3"),h._uU(25,"Zoom-Box with an initially hidden magnifier"),h.qZA(),h.TgZ(26,"div",0),h.TgZ(27,"div",1),h.TgZ(28,"vcl-zoom-box-container",9,10),h._UZ(30,"img",4),h._UZ(31,"vcl-zoom-box-magnifier"),h.qZA(),h.qZA(),h.TgZ(32,"div",1),h._UZ(33,"vcl-zoom-box",8),h.qZA(),h.qZA(),h._UZ(34,"br"),h._UZ(35,"br"),h.TgZ(36,"h3"),h._uU(37,"Zoom-Box with appearing magnifier"),h.qZA(),h.TgZ(38,"div",0),h.TgZ(39,"div",1),h.TgZ(40,"vcl-zoom-box-container",11,12),h._UZ(42,"img",4),h._UZ(43,"vcl-zoom-box-magnifier"),h.qZA(),h.qZA(),h.TgZ(44,"div",1),h._UZ(45,"vcl-zoom-box",8),h.qZA(),h.qZA(),h._UZ(46,"br"),h._UZ(47,"br"),h.TgZ(48,"h3"),h._uU(49,"Zoom-Box with an constantly hidden magnifier"),h.qZA(),h.TgZ(50,"div",0),h.TgZ(51,"div",1),h.TgZ(52,"vcl-zoom-box-container",13,14),h._UZ(54,"img",4),h._UZ(55,"vcl-zoom-box-magnifier"),h.qZA(),h.qZA(),h.TgZ(56,"div",1),h._UZ(57,"vcl-zoom-box",8),h.qZA(),h.qZA()),2&t){const t=h.MAs(5),i=h.MAs(17),o=h.MAs(29),e=h.MAs(41),n=h.MAs(53);h.xp6(4),h.Q6J("x",30)("y",60)("width",120)("height",190),h.xp6(5),h.Q6J("target",t),h.xp6(7),h.Q6J("x",30)("y",60)("width",190)("height",120)("resetOnOut",!0),h.xp6(5),h.Q6J("target",i)("scale",2),h.xp6(7),h.Q6J("x",30)("y",60)("width",190)("height",120)("hiding",!0),h.xp6(5),h.Q6J("target",o)("scale",2),h.xp6(7),h.Q6J("x",30)("y",60)("width",190)("height",120)("hidden",!0)("hiding",!0),h.xp6(5),h.Q6J("target",e)("scale",2),h.xp6(7),h.Q6J("x",30)("y",60)("width",190)("height",120)("invisible",!0),h.xp6(5),h.Q6J("target",n)("scale",2)}},directives:[c,m,l],encapsulation:2}),t})();function v(){return{label:"Zoom Box",tabs:{Demo:p,"README.md":{type:"md",content:'# vcl-zoom-box\n\nZoom into areas of images.\n\n## Usage\n\n```html\n<vcl-zoom-box-container #first [x]="30" [y]="60" [width]="120" [height]="190">\n  <img src="https://picsum.photos/320/320?image=434">\n  <vcl-zoom-box-magnifier></vcl-zoom-box-magnifier>\n</vcl-zoom-box-container>\n<vcl-zoom-box [target]="first"></vcl-zoom-box>\n```\n\n### API\n\n#### Zoom-Box Container Attributes\n\n| Name                | Type        | Default            | Description\n| ------------------- | ----------- | ------------------ |--------------\n| `x`                 | number      | 0                  | Left offset (optional)\n| `y`                 | number      | 0                  | Top offset (optional)\n| `width`             | number      |                    | Width of zoomed box\n| `height`            | number      |                    | Height of zoomed box\n| `resetOnOut`        | boolean     | false              | Reset position to initial on mouse out\n\n### Zoom-Box Attributes\n\n| Name                | Type        | Default            | Description\n| ------------        | ----------- | ------------------ |--------------\n| `image`             | string      | ""                 | High resolution image (optional)\n| `highResScale`      | number      | 1                  | High resolution image scale multiplier (required if image is defined)\n'},"demo.component.html":{type:"html",content:o(35520)},"demo.component.ts":{type:"ts",content:o(89397)}}}}let u=(()=>{class t{}return t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=h.oAB({type:t}),t.\u0275inj=h.cJS({imports:[[e.ez,r.l,s.YcP,n.Bz.forChild([{path:"",component:r.z,data:{demo:v}}])]]}),t})()},35520:function(t,i,o){o.r(i),i.default='<h3>Sample Zoom-Box</h3>\n<div class="grid-row">\n  <div class="grid-span-4">\n    <vcl-zoom-box-container #first [x]="30" [y]="60" [width]="120" [height]="190">\n      <img src="https://picsum.photos/320/320?image=434">\n      <vcl-zoom-box-magnifier></vcl-zoom-box-magnifier>\n    </vcl-zoom-box-container>\n  </div>\n  <div class="grid-span-4">\n    <vcl-zoom-box [target]="first"></vcl-zoom-box>\n  </div>\n</div>\n<br><br>\n\n<h3>Zoom-Box with a higher resolution image and mouse reset</h3>\n<div class="grid-row">\n  <div class="grid-span-4">\n    <vcl-zoom-box-container #second [x]="30" [y]="60" [width]="190" [height]="120" [resetOnOut]="true">\n      <img src="https://picsum.photos/320/320?image=434">\n      <vcl-zoom-box-magnifier></vcl-zoom-box-magnifier>\n    </vcl-zoom-box-container>\n  </div>\n  <div class="grid-span-4">\n    <vcl-zoom-box [target]="second" image="https://picsum.photos/640/640?image=434" [scale]="2"></vcl-zoom-box>\n  </div>\n</div>\n<br><br>\n\n<h3>Zoom-Box with an initially hidden magnifier</h3>\n<div class="grid-row">\n  <div class="grid-span-4">\n    <vcl-zoom-box-container #third [x]="30" [y]="60" [width]="190" [height]="120" [hiding]="true">\n      <img src="https://picsum.photos/320/320?image=434">\n      <vcl-zoom-box-magnifier></vcl-zoom-box-magnifier>\n    </vcl-zoom-box-container>\n  </div>\n  <div class="grid-span-4">\n    <vcl-zoom-box [target]="third" image="https://picsum.photos/640/640?image=434" [scale]="2"></vcl-zoom-box>\n  </div>\n</div>\n<br><br>\n\n<h3>Zoom-Box with appearing magnifier</h3>\n<div class="grid-row">\n  <div class="grid-span-4">\n    <vcl-zoom-box-container #fourth [x]="30" [y]="60" [width]="190" [height]="120" [hidden]="true" [hiding]="true">\n      <img src="https://picsum.photos/320/320?image=434">\n      <vcl-zoom-box-magnifier></vcl-zoom-box-magnifier>\n    </vcl-zoom-box-container>\n  </div>\n  <div class="grid-span-4">\n    <vcl-zoom-box [target]="fourth" image="https://picsum.photos/640/640?image=434" [scale]="2"></vcl-zoom-box>\n  </div>\n</div>\n<br><br>\n\n<h3>Zoom-Box with an constantly hidden magnifier</h3>\n<div class="grid-row">\n  <div class="grid-span-4">\n    <vcl-zoom-box-container #fifth [x]="30" [y]="60" [width]="190" [height]="120" [invisible]="true">\n      <img src="https://picsum.photos/320/320?image=434">\n      <vcl-zoom-box-magnifier></vcl-zoom-box-magnifier>\n    </vcl-zoom-box-container>\n  </div>\n  <div class="grid-span-4">\n    <vcl-zoom-box [target]="fifth" image="https://picsum.photos/640/640?image=434" [scale]="2"></vcl-zoom-box>\n  </div>\n</div>\n'},89397:function(t,i,o){o.r(i),i.default="import { Component } from '@angular/core';\n\n@Component({\n  templateUrl: 'demo.component.html'\n})\nexport class ZoomBoxDemoComponent {\n\n}\n"}}]);