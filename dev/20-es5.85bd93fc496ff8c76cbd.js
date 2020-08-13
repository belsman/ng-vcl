!function(){function e(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{DFrE:function(e,n,r){"use strict";r.r(n),n.default='\n\n<button vcl-button (click)="opened = !opened">Toggle drawer</button>\n\n<br><br>\n\n<vcl-drawer-container style="width: 20em; height: 20em; background-color: #b47c17">\n  <vcl-drawer [opened]="opened" style="width: 5em; background-color: #166a24" >\n    Drawer\n  </vcl-drawer>\n  Content\n</vcl-drawer-container>\n\n<br><br>\n\n<button vcl-button (click)="drawer1.toggle()">Toggle drawer</button>\n\n<br><br>\n\n<vcl-drawer-container style="width: 20em; height: 20em; background-color: #b47c17">\n  <vcl-drawer #drawer1="vclDrawer" mode="side" style="width: 5em; background-color: #166a24" >\n    Drawer\n  </vcl-drawer>\n  Content\n</vcl-drawer-container>\n\n<br><br>\n\n<button vcl-button (click)="drawer2.toggle()">Toggle drawer</button>\n\n<br><br>\n\n<vcl-drawer-container style="width: 20em; height: 20em; background-color: #b47c17">\n  <vcl-drawer #drawer2="vclDrawer" mode="over" style="width: 5em; background-color: #166a24" >\n    Drawer\n  </vcl-drawer>\n  Content\n</vcl-drawer-container>\n\n<br><br>\n'},ay7N:function(e,n,r){"use strict";r.r(n),n.default="import { Component } from '@angular/core';\n\n@Component({\n  templateUrl: 'demo.component.html'\n})\nexport class DrawerDemoComponent {\n  opened = true;\n}\n"},jtrS:function(n,r,t){"use strict";t.r(r),t.d(r,"demo",(function(){return m})),t.d(r,"DrawerDemoModule",(function(){return v}));var o,a=t("ofXK"),c=t("tyNb"),d=t("19H1"),l=t("2FIb"),b=t("fXoL"),i=t("6B8K"),w=t("Pheu"),s=t("4RH/"),u=((o=function n(){e(this,n),this.opened=!0}).\u0275fac=function(e){return new(e||o)},o.\u0275cmp=b.Eb({type:o,selectors:[["ng-component"]],decls:32,vars:1,consts:[["vcl-button","",3,"click"],[2,"width","20em","height","20em","background-color","#b47c17"],[2,"width","5em","background-color","#166a24",3,"opened"],["mode","side",2,"width","5em","background-color","#166a24"],["drawer1","vclDrawer"],["mode","over",2,"width","5em","background-color","#166a24"],["drawer2","vclDrawer"]],template:function(e,n){if(1&e){var r=b.Rb();b.Qb(0,"button",0),b.Xb("click",(function(){return n.opened=!n.opened})),b.wc(1,"Toggle drawer"),b.Pb(),b.Lb(2,"br"),b.Lb(3,"br"),b.Qb(4,"vcl-drawer-container",1),b.Qb(5,"vcl-drawer",2),b.wc(6," Drawer "),b.Pb(),b.wc(7," Content\n"),b.Pb(),b.Lb(8,"br"),b.Lb(9,"br"),b.Qb(10,"button",0),b.Xb("click",(function(){return b.mc(r),b.lc(16).toggle()})),b.wc(11,"Toggle drawer"),b.Pb(),b.Lb(12,"br"),b.Lb(13,"br"),b.Qb(14,"vcl-drawer-container",1),b.Qb(15,"vcl-drawer",3,4),b.wc(17," Drawer "),b.Pb(),b.wc(18," Content\n"),b.Pb(),b.Lb(19,"br"),b.Lb(20,"br"),b.Qb(21,"button",0),b.Xb("click",(function(){return b.mc(r),b.lc(27).toggle()})),b.wc(22,"Toggle drawer"),b.Pb(),b.Lb(23,"br"),b.Lb(24,"br"),b.Qb(25,"vcl-drawer-container",1),b.Qb(26,"vcl-drawer",5,6),b.wc(28," Drawer "),b.Pb(),b.wc(29," Content\n"),b.Pb(),b.Lb(30,"br"),b.Lb(31,"br")}2&e&&(b.yb(5),b.gc("opened",n.opened))},directives:[i.b,w.a,s.a],encapsulation:2}),o);function m(){return{label:"Drawer",tabs:{Demo:u,"README.md":{type:"md",content:"# vcl-drawer\n\nSliding drawer with content area. In closed state, only the content area is visible.\n\n## Usage\n\n```html\n    <vcl-drawer-container>\n      <vcl-drawer mode=\"side\">\n        Drawer\n      </vcl-drawer>\n      Content\n    </vcl-drawer-container>\n```\n\n### Drawer modes\n\n`side`: Drawer appears besides the content. The content is pushed away and shrinked to make space for the drawer.\n`over`: Drawer floats over the content. The content is covered by a backdrop.\n\n### Opening and closing the drawer\n\nA drawer can be opened and closed with the `opened` property.\n\nThe opened state can also be changed via the drawer instance. \nIt exposes a `open()`, `close()` and `toggle()` method.\n\n\n```html\n    <vcl-drawer-container #drawer=\"vclDrawer\">\n      <vcl-drawer>...</vcl-drawer>\n      ...\n    </vcl-drawer-container>\n    <button (click)=\"drawer.toggle()\">Toggle</button>\n```\n\n### API\n\n#### Attributes\n\n| Name                | Type                  | Default            | Description\n| ------------        | -----------           | --------           |--------------\n| `position`          | 'left  \\| 'right'     | 'left'             | Drawer position\n| `mode`              | 'side  \\| 'over'      | 'side'             | Drawer mode\n| `opened`            | boolean               | `false` | `true`   | Drawer is opened. Default value is `true` for `side` mode and `false` for `over` mode.\n"},"demo.component.html":{type:"html",content:t("DFrE")},"demo.component.ts":{type:"ts",content:t("ay7N")}}}}var p,v=((p=function n(){e(this,n)}).\u0275mod=b.Ib({type:p}),p.\u0275inj=b.Hb({factory:function(e){return new(e||p)},imports:[[a.c,l.b,d.VCLButtonModule,d.VCLDrawerModule,c.g.forChild([{path:"",component:l.a,data:{demo:m}}])]]}),p)}}])}();