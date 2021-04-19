(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{RNNR:function(t,e,n){"use strict";n.r(e),e.default='<section class="vlcContentArea">\n    <vcl-tour-overlay></vcl-tour-overlay>\n    \n    <div class="col">\n        <div>\n            <button type="button" class="button" (click)="startTour()">\n                <div class="icogram">\n                    <span class="text">Start tour</span>\n                </div>\n            </button>\n        </div>   \n        <div>\n            <div class="grid-span-25p">\n                <h1 class="container" #heading1>Heading</h1>\n            </div>\n            <div class="grid-span-25p">\n                <br>\n                <p class="container" #heading2>Heading</p>\n            </div>\n            <div class="grid-span-25p">\n                <br>\n                <p class="container" #heading3>Heading</p>\n            </div>\n            <div class="grid-span-25p">\n                <br>\n                <p class="container" #heading4>Heading</p>\n            </div>\n        </div>\n    </div>\n\n    <vcl-tour-step\n        [target]="heading1"\n        title="Step Title">\n            Demo tour first step with title\n    </vcl-tour-step>\n\n    <vcl-tour-step \n        [target]="heading2"\n        [offsetY]="50">\n            Demo tour second step no title with Y offset\n    </vcl-tour-step>\n    \n    <vcl-tour-step\n        [target]="heading3"\n        [originX]="\'center\'"\n        [originY]="\'top\'"\n        [overlayX]="\'center\'"\n        [overlayY]="\'bottom\'">\n            Demo tour third step top position\n    </vcl-tour-step>\n\n    <vcl-tour-step\n        [target]="heading4"\n        [originX]="\'start\'"\n        [overlayX]="\'end\'"\n        [originY]="\'center\'"\n        [overlayY]="\'center\'">\n            Demo tour fourth step left position\n    </vcl-tour-step>\n\n    <vcl-tour-step\n        [target]="heading2"\n        [originX]="\'end\'"\n        [overlayX]="\'start\'"\n        [originY]="\'center\'"\n        [overlayY]="\'center\'">\n            Demo tour fifth step right position\n    </vcl-tour-step>\n    \n</section>\n'},o4zP:function(t,e,n){"use strict";n.r(e),e.default="import { Component } from '@angular/core';\nimport { TourService, TourOptions } from '@vcl/ng-vcl';\n\n@Component({\n  templateUrl: 'demo.component.html'\n})\nexport class TourDemoComponent {\n\n  constructor(public tour: TourService) { }\n\n  public startTour() {\n    this.tour.initialize();\n    this.tour.start();\n  }\n}\n"},sxPw:function(t,e,n){"use strict";n.r(e),n.d(e,"demo",function(){return p}),n.d(e,"TourDemoModule",function(){return b});var o=n("ofXK"),r=n("tyNb"),i=n("19H1"),s=n("2FIb"),a=n("fXoL"),l=n("oFcg"),c=n("yDKU");let u=(()=>{class t{constructor(t){this.tour=t}startTour(){this.tour.initialize(),this.tour.start()}}return t.\u0275fac=function(e){return new(e||t)(a.Kb(i.s))},t.\u0275cmp=a.Eb({type:t,selectors:[["ng-component"]],decls:38,vars:18,consts:[[1,"vlcContentArea"],[1,"col"],["type","button",1,"button",3,"click"],[1,"icogram"],[1,"text"],[1,"grid-span-25p"],[1,"container"],["heading1",""],["heading2",""],["heading3",""],["heading4",""],["title","Step Title",3,"target"],[3,"target","offsetY"],[3,"target","originX","originY","overlayX","overlayY"],[3,"target","originX","overlayX","originY","overlayY"]],template:function(t,e){if(1&t&&(a.Qb(0,"section",0),a.Lb(1,"vcl-tour-overlay"),a.Qb(2,"div",1),a.Qb(3,"div"),a.Qb(4,"button",2),a.Xb("click",function(){return e.startTour()}),a.Qb(5,"div",3),a.Qb(6,"span",4),a.xc(7,"Start tour"),a.Pb(),a.Pb(),a.Pb(),a.Pb(),a.Qb(8,"div"),a.Qb(9,"div",5),a.Qb(10,"h1",6,7),a.xc(12,"Heading"),a.Pb(),a.Pb(),a.Qb(13,"div",5),a.Lb(14,"br"),a.Qb(15,"p",6,8),a.xc(17,"Heading"),a.Pb(),a.Pb(),a.Qb(18,"div",5),a.Lb(19,"br"),a.Qb(20,"p",6,9),a.xc(22,"Heading"),a.Pb(),a.Pb(),a.Qb(23,"div",5),a.Lb(24,"br"),a.Qb(25,"p",6,10),a.xc(27,"Heading"),a.Pb(),a.Pb(),a.Pb(),a.Pb(),a.Qb(28,"vcl-tour-step",11),a.xc(29," Demo tour first step with title "),a.Pb(),a.Qb(30,"vcl-tour-step",12),a.xc(31," Demo tour second step no title with Y offset "),a.Pb(),a.Qb(32,"vcl-tour-step",13),a.xc(33," Demo tour third step top position "),a.Pb(),a.Qb(34,"vcl-tour-step",14),a.xc(35," Demo tour fourth step left position "),a.Pb(),a.Qb(36,"vcl-tour-step",14),a.xc(37," Demo tour fifth step right position "),a.Pb(),a.Pb()),2&t){const t=a.lc(11),e=a.lc(16),n=a.lc(21),o=a.lc(26);a.zb(28),a.gc("target",t),a.zb(2),a.gc("target",e)("offsetY",50),a.zb(2),a.gc("target",n)("originX","center")("originY","top")("overlayX","center")("overlayY","bottom"),a.zb(2),a.gc("target",o)("originX","start")("overlayX","end")("originY","center")("overlayY","center"),a.zb(2),a.gc("target",e)("originX","end")("overlayX","start")("originY","center")("overlayY","center")}},directives:[l.a,c.a],encapsulation:2}),t})();function p(){return{label:"Tour",tabs:{Demo:u,"README.md":{type:"md",content:"# vcl-tour-step and vcl-tour-overlay\n\nSimple and customizable application tour component with overlay.\n\nNote: For the highlight to work, the target element has to have a background-color.\n\n## Usage\n\n```js\nimport { VCLTourModule } from '@vcl/ng-vcl';\n\n@NgModule({\n  imports: [ VCLTourModule ],\n  ...\n})\nexport class AppComponent {}\n\nclass AppComponent {\n\n  constructor(public tour: TourService){ }\n\n  startTour() {\n    this.tour.start();\n  }\n}\n```\n\n```html\n\x3c!-- Overlay element inserted on top of the page--\x3e\n<vcl-tour-overlay></vcl-tour-overlay>\n\n\x3c!-- Start tour --\x3e\n<button name=\"button\" (click)=\"startTour()\">Begin tour</button>\n\n\x3c!-- Some application element --\x3e\n<div id=\"foo\">Some element</div>\n\n<vcl-tour-step target=\"#foo\" title=\"some title\">\n  \x3c!-- ANY HTML HERE --\x3e\n</vcl-tour-step>\n```\n\n### API\n\n#### vcl-tour-step attributes\n\n| Name                     | Type                          | Default            | Description\n| ------------------------ | ----------------------------- | ------------------ | --------------\n| `debug`                  | boolean                       | false              | Output debug information\n| `debugPopover`           | boolean                       | false              | Output `vcl-tour-step`'s `vcl-popover` debug information\n| `title`                  | string                        |                    | Tour step title\n| `target`                 | string  ElementRef  Element   |                    | The target can be a selector, element or ElementRef instance\n| `order`                  | number                        |                    | The order number in which tour step should be shown, necessary if same element used multiple times\n| `targetX`                | AttachmentX                   | AttachmentX.Center | Position of the target-side\n| `attachmentX`            | AttachmentX                   | AttachmentX.Center | Position of the popover-side\n| `offsetAttachmentX`      | number                        |                    | `vcl-popover`'s AttachmentX offset\n| `targetY`                | AttachmentY                   | AttachmentY.Bottom | Position of the target-vertical\n| `attachmentY`            | AttachmentY                   | AttachmentY.Top    | Position of the popover-vertical\n| `offsetAttachmentY`      | number                        |                    | `vcl-popover`'s AttachmentY offset\n\n\n#### TourService events\n\n| Name                     | Type          | Description\n| ------------------------ | ------------- | --------------\n| `end$`                   | true          | Event is emitted when the tour is finished or ended\n| `tourComponent$`         | TourComponent | Current `TourComponent` is emitted on each `vcl-tour-step`\n\n### TourService default options\n\n| Name                     | Type        | Default  | Description\n| ------------------------ | ----------- | -------- |--------------\n| `debug`                  | boolean     | false    | Output debug information\n| `debugTour`              | boolean     | false    | Output every `vcl-tour-step` debug information\n| `debugPopover`           | boolean     | false    | Output every `vcl-tour-step`'s `vcl-popover` debug information\n| `useOrder`               | boolean     | false    | `vcl-tour-step`'s `@Input() order` is not used and instead the service relies on the DOM element creation order\n| `elementsDisabled`       | boolean     | true     | Disabling highlightedElement (click) wont work\n| `applyRelative`          | boolean     | true     | Applying position:relative to highlightedElement (disable in case you want to highlight absolute positioned elements)\n| `dismissOnOverlay`       | boolean     | false    | Go to next step when clicking on overlay (close tour if this is last step)\n| `zIndex`                 | number      | 20       | Used `z-index` for `vcl-tour-step` components\n| `dismissOnOverlay`       | boolean     | false    | Go to next step when clicking on overlay (close tour if this is last step)\n| `offsetAttachmentX`      | number      | 0        | Used AttachmentX offset for `vcl-tour-step` components\n| `offsetAttachmentY`      | number      | 0        | Used AttachmentY offset for `vcl-tour-step` components\n\n\n#### Custom options usage\n\n```js\n startTour() {\n    this.tour.initialize({elementsDisabled: false}); // TourOptions\n    this.tour.start();\n  }\n```\n\n\n\nexport class TourOptions {\n  debug: boolean = false;\n  debugTour: boolean = false;\n  debugPopover: boolean = false;\n\n  useOrder: boolean = false;\n  elementsDisabled: boolean = true;\n  applyRelative: boolean = true;\n  dismissOnOverlay: boolean = false;\n\n  zIndex: number = 20;\n\n  previousLabel: string = 'Previous';\n  nextLabel: string = 'Next';\n  exitLabel: string = 'Exit';\n\n  previousIcon: string = 'fas fa-chevron-left';\n  nextIcon: string = 'fas fa-chevron-right';\n  exitIcon: string = 'fas fa-close';\n\n  buttonClass: string = '';\n}\n"},"demo.component.html":{type:"html",content:n("RNNR")},"demo.component.ts":{type:"ts",content:n("o4zP")}}}}let b=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=a.Ib({type:t}),t.\u0275inj=a.Hb({imports:[[o.c,s.b,i.gb,i.z,i.R,i.N,r.g.forChild([{path:"",component:s.a,data:{demo:p}}])]]}),t})()}}]);