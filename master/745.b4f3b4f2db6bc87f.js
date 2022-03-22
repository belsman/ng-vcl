"use strict";(self.webpackChunkng_vcl_demo=self.webpackChunkng_vcl_demo||[]).push([[745],{6745:(e,o,i)=>{i.r(o),i.d(o,{NavigationDemoModule:()=>b,demo:()=>r});var v=i(9808),s=i(5367),t=i(265),g=i(9155),n=i(4893),d=i(8916),m=i(7873),u=i(7997),p=i(6447);let f=(()=>{class a{onNavigate(c){console.log("Navigate",c)}}return a.\u0275fac=function(c){return new(c||a)},a.\u0275cmp=n.Xpm({type:a,selectors:[["ng-component"]],decls:60,vars:2,consts:[["vclPrepend","","icon","fas:home"],["products","vclNavigationItem"],["vclPrepend","",3,"icon"],["vclPrepend","","icon","fas:bicycle"],["contact","vclNavigationItem"],["vclPrepend","","icon","fas:envelope"],["layout","horizontal"]],template:function(c,U){if(1&c&&(n.TgZ(0,"h3"),n._uU(1,"Basic navigation"),n.qZA(),n.TgZ(2,"vcl-navigation")(3,"vcl-navigation-item")(4,"vcl-navigation-label")(5,"vcl-icogram"),n._UZ(6,"vcl-icon",0),n._uU(7," Home "),n.qZA()()(),n.TgZ(8,"vcl-navigation-item",null,1)(10,"vcl-navigation-label")(11,"vcl-icogram"),n._UZ(12,"vcl-icon",2),n._uU(13," Products "),n.qZA()(),n.TgZ(14,"vcl-navigation")(15,"vcl-navigation-item")(16,"vcl-navigation-label")(17,"vcl-icogram"),n._UZ(18,"vcl-icon",3),n._uU(19," Product 1 "),n.qZA()()(),n.TgZ(20,"vcl-navigation-item")(21,"vcl-navigation-label")(22,"vcl-icogram"),n._UZ(23,"vcl-icon",3),n._uU(24," Product 2 "),n.qZA()()()()(),n.TgZ(25,"vcl-navigation-item",null,4)(27,"vcl-navigation-label")(28,"vcl-icogram"),n._UZ(29,"vcl-icon",2),n._uU(30," Contact "),n.qZA()(),n.TgZ(31,"vcl-navigation")(32,"vcl-navigation-item")(33,"vcl-navigation-label")(34,"vcl-icogram"),n._UZ(35,"vcl-icon",5),n._uU(36," Contact 1 "),n.qZA()()(),n.TgZ(37,"vcl-navigation-item")(38,"vcl-navigation-label")(39,"vcl-icogram"),n._UZ(40,"vcl-icon",5),n._uU(41," Contact 2 "),n.qZA()()()()()(),n.TgZ(42,"h3"),n._uU(43,"Horizontal navigation"),n.qZA(),n.TgZ(44,"vcl-navigation",6)(45,"vcl-navigation-item")(46,"vcl-navigation-label")(47,"vcl-icogram"),n._UZ(48,"vcl-icon",0),n._uU(49," Home "),n.qZA()()(),n.TgZ(50,"vcl-navigation-item")(51,"vcl-navigation-label")(52,"vcl-icogram"),n._UZ(53,"vcl-icon",3),n._uU(54," Products "),n.qZA()()(),n.TgZ(55,"vcl-navigation-item")(56,"vcl-navigation-label")(57,"vcl-icogram"),n._UZ(58,"vcl-icon",5),n._uU(59," Contacts "),n.qZA()()()()),2&c){const Z=n.MAs(9),P=n.MAs(26);n.xp6(12),n.Q6J("icon",Z.opened?"fas:chevron-down":"fas:chevron-right"),n.xp6(17),n.Q6J("icon",P.opened?"fas:chevron-down":"fas:chevron-right")}},directives:[d.J,m.s,m.J,u.m,p.o],encapsulation:2}),a})();function r(){return{label:"Navigation",tabs:{Demo:f,"README.md":{type:"md",content:"# vcl-navigation\n\nThe navigation groups navigation items to form a navigation menu.\n\n## Usage\n\n```js\nimport { VCLNavigationModule } from '@vcl/ng-vcl';\n\n@NgModule({\n  imports: [ VCLNavigationModule ],\n  ...\n})\nexport class AppComponent {}\n```\n\n```html\n<vcl-navigation>\n  <vcl-navigation-item>\n    <vcl-navigation-label>\n      <vcl-icogram>\n        <vcl-icon vclPrepend icon=\"fas:home\"></vcl-icon>\n        Home\n      </vcl-icogram>\n    </vcl-navigation-label>\n  </vcl-navigation-item>\n  <vcl-navigation-item>\n    <vcl-navigation-label>\n      <vcl-icogram>\n        <vcl-icon vclPrepend icon=\"fas:bicycle\"></vcl-icon>\n        Products\n      </vcl-icogram>\n    </vcl-navigation-label>\n    <vcl-navigation>\n      <vcl-navigation-item>\n        <vcl-navigation-label>Product 1</vcl-navigation-label>\n      </vcl-navigation-item>\n      <vcl-navigation-item>\n        <vcl-navigation-label>Product 2</vcl-navigation-label>\n      </vcl-navigation-item>\n    </vcl-navigation>\n  </vcl-navigation-item>\n  <vcl-navigation-item>\n    <vcl-navigation-label>\n      <vcl-icogram>\n        <vcl-icon vclPrepend icon=\"fas:envelope\"></vcl-icon>\n        Contact\n      </vcl-icogram>\n    </vcl-navigation-label>\n  </vcl-navigation-item>\n</vcl-navigation>\n```\n\n### API\n\n#### vcl-navigation attributes\n\n| Name                     | Type                           | Default        | Description                                    |\n| ------------------------ | -----------                    | --------       |----------------------------------------------- |\n| `layout`                 | 'horizontal' \\| 'vertical'     | 'horizontal'   | \n\n#### vcl-navigation-item attributes\n\n| Name                     | Type        | Default  | Description                                    |\n| ------------------------ | ----------- | -------- |----------------------------------------------- |\n| `opened`                 | boolean     | false    | if true and nested this opens the subitems     |\n| `selected`               | boolean     | false    | Wether the item is selected                    |\n"},"demo.component.html":{type:"html",content:i(6985)},"demo.component.ts":{type:"ts",content:i(9665)}}}}let b=(()=>{class a{}return a.\u0275fac=function(c){return new(c||a)},a.\u0275mod=n.oAB({type:a}),a.\u0275inj=n.cJS({imports:[[v.ez,g.l,t.k2k,t.V4c,t.o14,s.Bz.forChild([{path:"",component:g.z,data:{demo:r}}])]]}),a})()},6985:(e,o,i)=>{i.r(o),i.d(o,{default:()=>v});const v='<h3>Basic navigation</h3>\n\n<vcl-navigation>\n  <vcl-navigation-item>\n    <vcl-navigation-label>\n      <vcl-icogram>\n        <vcl-icon vclPrepend icon="fas:home"></vcl-icon>\n        Home\n      </vcl-icogram>\n    </vcl-navigation-label>\n  </vcl-navigation-item>\n  <vcl-navigation-item #products="vclNavigationItem">\n    <vcl-navigation-label>\n      <vcl-icogram>\n        <vcl-icon vclPrepend [icon]="products.opened ? \'fas:chevron-down\' : \'fas:chevron-right\'"></vcl-icon>\n        Products\n      </vcl-icogram>\n    </vcl-navigation-label>\n    <vcl-navigation>\n      <vcl-navigation-item>\n        <vcl-navigation-label>\n          <vcl-icogram>\n            <vcl-icon vclPrepend icon="fas:bicycle"></vcl-icon>\n            Product 1\n          </vcl-icogram>\n        </vcl-navigation-label>\n      </vcl-navigation-item>\n      <vcl-navigation-item>\n        <vcl-navigation-label>\n          <vcl-icogram>\n            <vcl-icon vclPrepend icon="fas:bicycle"></vcl-icon>\n            Product 2\n          </vcl-icogram>\n        </vcl-navigation-label>\n      </vcl-navigation-item>\n    </vcl-navigation>\n  </vcl-navigation-item>\n  <vcl-navigation-item #contact="vclNavigationItem">\n    <vcl-navigation-label>\n      <vcl-icogram>\n        <vcl-icon vclPrepend [icon]="contact.opened ? \'fas:chevron-down\' : \'fas:chevron-right\'"></vcl-icon>\n        Contact\n      </vcl-icogram>\n    </vcl-navigation-label>\n    <vcl-navigation>\n      <vcl-navigation-item>\n        <vcl-navigation-label>\n          <vcl-icogram>\n            <vcl-icon vclPrepend icon="fas:envelope"></vcl-icon>\n            Contact 1\n          </vcl-icogram>\n        </vcl-navigation-label>\n      </vcl-navigation-item>\n      <vcl-navigation-item>\n        <vcl-navigation-label>\n          <vcl-icogram>\n            <vcl-icon vclPrepend icon="fas:envelope"></vcl-icon>\n            Contact 2\n          </vcl-icogram>\n        </vcl-navigation-label>\n      </vcl-navigation-item>\n    </vcl-navigation>    \n  </vcl-navigation-item>\n</vcl-navigation>\n\n<h3>Horizontal navigation</h3>\n\n<vcl-navigation layout="horizontal">\n  <vcl-navigation-item>\n    <vcl-navigation-label>\n      <vcl-icogram>\n        <vcl-icon vclPrepend icon="fas:home"></vcl-icon>\n        Home\n      </vcl-icogram>\n    </vcl-navigation-label>\n  </vcl-navigation-item>\n  <vcl-navigation-item>\n    <vcl-navigation-label>\n      <vcl-icogram>\n        <vcl-icon vclPrepend icon="fas:bicycle"></vcl-icon>\n        Products\n      </vcl-icogram>\n    </vcl-navigation-label>\n  </vcl-navigation-item>\n  <vcl-navigation-item>\n    <vcl-navigation-label>\n      <vcl-icogram>\n        <vcl-icon vclPrepend icon="fas:envelope"></vcl-icon>\n        Contacts\n      </vcl-icogram>\n    </vcl-navigation-label>\n  </vcl-navigation-item>\n</vcl-navigation>\n  '},9665:(e,o,i)=>{i.r(o),i.d(o,{default:()=>v});const v="import { Component } from '@angular/core';\n\n@Component({\n  templateUrl: 'demo.component.html'\n})\nexport class NavigationDemoComponent {\n\n  hoverName?: string;\n  hoverLastName?: string;\n\n  onNavigate(route) {\n    console.log('Navigate', route);\n  }\n}\n"}}]);