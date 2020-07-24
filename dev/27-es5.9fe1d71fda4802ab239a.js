!function(){function n(n,i){if(!(n instanceof i))throw new TypeError("Cannot call a class as a function")}function i(n,i){for(var a=0;a<i.length;a++){var c=i[a];c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(n,c.key,c)}}(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{"/pV8":function(a,c,o){"use strict";o.r(c),o.d(c,"demo",(function(){return d})),o.d(c,"NavigationDemoModule",(function(){return f}));var l,v=o("ofXK"),t=o("tyNb"),e=o("19H1"),g=o("2FIb"),r=o("fXoL"),b=o("ZuQ0"),m=o("SgBA"),s=o("Vp9f"),p=o("9Rb9"),u=((l=function(){function a(){n(this,a)}var c,o,l;return c=a,(o=[{key:"onNavigate",value:function(n){console.log("Navigate",n)}}])&&i(c.prototype,o),l&&i(c,l),a}()).\u0275fac=function(n){return new(n||l)},l.\u0275cmp=r.Db({type:l,selectors:[["ng-component"]],decls:60,vars:2,consts:[["vclPrepend","","icon","fas:home"],["products","vclNavigationItem"],["vclPrepend","",3,"icon"],["vclPrepend","","icon","fas:bicycle"],["contact","vclNavigationItem"],["vclPrepend","","icon","fas:envelope"],["layout","horizontal"]],template:function(n,i){if(1&n&&(r.Pb(0,"h3"),r.xc(1,"Basic navigation"),r.Ob(),r.Pb(2,"vcl-navigation"),r.Pb(3,"vcl-navigation-item"),r.Pb(4,"vcl-navigation-label"),r.Pb(5,"vcl-icogram"),r.Kb(6,"vcl-icon",0),r.xc(7," Home "),r.Ob(),r.Ob(),r.Ob(),r.Pb(8,"vcl-navigation-item",null,1),r.Pb(10,"vcl-navigation-label"),r.Pb(11,"vcl-icogram"),r.Kb(12,"vcl-icon",2),r.xc(13," Products "),r.Ob(),r.Ob(),r.Pb(14,"vcl-navigation"),r.Pb(15,"vcl-navigation-item"),r.Pb(16,"vcl-navigation-label"),r.Pb(17,"vcl-icogram"),r.Kb(18,"vcl-icon",3),r.xc(19," Product 1 "),r.Ob(),r.Ob(),r.Ob(),r.Pb(20,"vcl-navigation-item"),r.Pb(21,"vcl-navigation-label"),r.Pb(22,"vcl-icogram"),r.Kb(23,"vcl-icon",3),r.xc(24," Product 2 "),r.Ob(),r.Ob(),r.Ob(),r.Ob(),r.Ob(),r.Pb(25,"vcl-navigation-item",null,4),r.Pb(27,"vcl-navigation-label"),r.Pb(28,"vcl-icogram"),r.Kb(29,"vcl-icon",2),r.xc(30," Contact "),r.Ob(),r.Ob(),r.Pb(31,"vcl-navigation"),r.Pb(32,"vcl-navigation-item"),r.Pb(33,"vcl-navigation-label"),r.Pb(34,"vcl-icogram"),r.Kb(35,"vcl-icon",5),r.xc(36," Contact 1 "),r.Ob(),r.Ob(),r.Ob(),r.Pb(37,"vcl-navigation-item"),r.Pb(38,"vcl-navigation-label"),r.Pb(39,"vcl-icogram"),r.Kb(40,"vcl-icon",5),r.xc(41," Contact 2 "),r.Ob(),r.Ob(),r.Ob(),r.Ob(),r.Ob(),r.Ob(),r.Pb(42,"h3"),r.xc(43,"Horizontal navigation"),r.Ob(),r.Pb(44,"vcl-navigation",6),r.Pb(45,"vcl-navigation-item"),r.Pb(46,"vcl-navigation-label"),r.Pb(47,"vcl-icogram"),r.Kb(48,"vcl-icon",0),r.xc(49," Home "),r.Ob(),r.Ob(),r.Ob(),r.Pb(50,"vcl-navigation-item"),r.Pb(51,"vcl-navigation-label"),r.Pb(52,"vcl-icogram"),r.Kb(53,"vcl-icon",3),r.xc(54," Products "),r.Ob(),r.Ob(),r.Ob(),r.Pb(55,"vcl-navigation-item"),r.Pb(56,"vcl-navigation-label"),r.Pb(57,"vcl-icogram"),r.Kb(58,"vcl-icon",5),r.xc(59," Contacts "),r.Ob(),r.Ob(),r.Ob(),r.Ob()),2&n){var a=r.kc(9),c=r.kc(26);r.yb(12),r.fc("icon",a.opened?"fas:chevron-down":"fas:chevron-right"),r.yb(17),r.fc("icon",c.opened?"fas:chevron-down":"fas:chevron-right")}},directives:[b.a,m.a,m.b,s.a,p.a],encapsulation:2}),l);function d(){return{label:"Navigation",tabs:{Demo:u,"README.md":{type:"md",content:"# vcl-navigation\n\nThe navigation groups navigation items to form a navigation menu.\n\n## Usage\n\n```js\nimport { VCLNavigationModule } from '@vcl/ng-vcl';\n\n@NgModule({\n  imports: [ VCLNavigationModule ],\n  ...\n})\nexport class AppComponent {}\n```\n\n```html\n<vcl-navigation>\n  <vcl-navigation-item>\n    <vcl-navigation-label>\n      <vcl-icogram>\n        <vcl-icon vclPrepend icon=\"fas:home\"></vcl-icon>\n        Home\n      </vcl-icogram>\n    </vcl-navigation-label>\n  </vcl-navigation-item>\n  <vcl-navigation-item>\n    <vcl-navigation-label>\n      <vcl-icogram>\n        <vcl-icon vclPrepend icon=\"fas:bicycle\"></vcl-icon>\n        Products\n      </vcl-icogram>\n    </vcl-navigation-label>\n    <vcl-navigation>\n      <vcl-navigation-item>\n        <vcl-navigation-label>Product 1</vcl-navigation-label>\n      </vcl-navigation-item>\n      <vcl-navigation-item>\n        <vcl-navigation-label>Product 2</vcl-navigation-label>\n      </vcl-navigation-item>\n    </vcl-navigation>\n  </vcl-navigation-item>\n  <vcl-navigation-item>\n    <vcl-navigation-label>\n      <vcl-icogram>\n        <vcl-icon vclPrepend icon=\"fas:envelope\"></vcl-icon>\n        Contact\n      </vcl-icogram>\n    </vcl-navigation-label>\n  </vcl-navigation-item>\n</vcl-navigation>\n```\n\n### API\n\n#### vcl-navigation attributes\n\n| Name                     | Type                           | Default        | Description                                    |\n| ------------------------ | -----------                    | --------       |----------------------------------------------- |\n| `layout`                 | 'horizontal' \\| 'vertical'     | 'horizontal'   | \n\n#### vcl-navigation-item attributes\n\n| Name                     | Type        | Default  | Description                                    |\n| ------------------------ | ----------- | -------- |----------------------------------------------- |\n| `opened`                 | boolean     | false    | if true and nested this opens the subitems     |\n| `selected`               | boolean     | false    | Wether the item is selected                    |\n"},"demo.component.html":{type:"html",content:o("OVtP")},"demo.component.ts":{type:"ts",content:o("QaKs")}}}}var P,f=((P=function i(){n(this,i)}).\u0275mod=r.Hb({type:P}),P.\u0275inj=r.Gb({factory:function(n){return new(n||P)},imports:[[v.c,g.b,e.VCLNavigationModule,e.VCLButtonModule,e.VCLIcogramModule,t.g.forChild([{path:"",component:g.a,data:{demo:d}}])]]}),P)},OVtP:function(n,i,a){"use strict";a.r(i),i.default='<h3>Basic navigation</h3>\n\n<vcl-navigation>\n  <vcl-navigation-item>\n    <vcl-navigation-label>\n      <vcl-icogram>\n        <vcl-icon vclPrepend icon="fas:home"></vcl-icon>\n        Home\n      </vcl-icogram>\n    </vcl-navigation-label>\n  </vcl-navigation-item>\n  <vcl-navigation-item #products="vclNavigationItem">\n    <vcl-navigation-label>\n      <vcl-icogram>\n        <vcl-icon vclPrepend [icon]="products.opened ? \'fas:chevron-down\' : \'fas:chevron-right\'"></vcl-icon>\n        Products\n      </vcl-icogram>\n    </vcl-navigation-label>\n    <vcl-navigation>\n      <vcl-navigation-item>\n        <vcl-navigation-label>\n          <vcl-icogram>\n            <vcl-icon vclPrepend icon="fas:bicycle"></vcl-icon>\n            Product 1\n          </vcl-icogram>\n        </vcl-navigation-label>\n      </vcl-navigation-item>\n      <vcl-navigation-item>\n        <vcl-navigation-label>\n          <vcl-icogram>\n            <vcl-icon vclPrepend icon="fas:bicycle"></vcl-icon>\n            Product 2\n          </vcl-icogram>\n        </vcl-navigation-label>\n      </vcl-navigation-item>\n    </vcl-navigation>\n  </vcl-navigation-item>\n  <vcl-navigation-item #contact="vclNavigationItem">\n    <vcl-navigation-label>\n      <vcl-icogram>\n        <vcl-icon vclPrepend [icon]="contact.opened ? \'fas:chevron-down\' : \'fas:chevron-right\'"></vcl-icon>\n        Contact\n      </vcl-icogram>\n    </vcl-navigation-label>\n    <vcl-navigation>\n      <vcl-navigation-item>\n        <vcl-navigation-label>\n          <vcl-icogram>\n            <vcl-icon vclPrepend icon="fas:envelope"></vcl-icon>\n            Contact 1\n          </vcl-icogram>\n        </vcl-navigation-label>\n      </vcl-navigation-item>\n      <vcl-navigation-item>\n        <vcl-navigation-label>\n          <vcl-icogram>\n            <vcl-icon vclPrepend icon="fas:envelope"></vcl-icon>\n            Contact 2\n          </vcl-icogram>\n        </vcl-navigation-label>\n      </vcl-navigation-item>\n    </vcl-navigation>    \n  </vcl-navigation-item>\n</vcl-navigation>\n\n<h3>Horizontal navigation</h3>\n\n<vcl-navigation layout="horizontal">\n  <vcl-navigation-item>\n    <vcl-navigation-label>\n      <vcl-icogram>\n        <vcl-icon vclPrepend icon="fas:home"></vcl-icon>\n        Home\n      </vcl-icogram>\n    </vcl-navigation-label>\n  </vcl-navigation-item>\n  <vcl-navigation-item>\n    <vcl-navigation-label>\n      <vcl-icogram>\n        <vcl-icon vclPrepend icon="fas:bicycle"></vcl-icon>\n        Products\n      </vcl-icogram>\n    </vcl-navigation-label>\n  </vcl-navigation-item>\n  <vcl-navigation-item>\n    <vcl-navigation-label>\n      <vcl-icogram>\n        <vcl-icon vclPrepend icon="fas:envelope"></vcl-icon>\n        Contacts\n      </vcl-icogram>\n    </vcl-navigation-label>\n  </vcl-navigation-item>\n</vcl-navigation>\n  '},QaKs:function(n,i,a){"use strict";a.r(i),i.default="import { Component } from '@angular/core';\n\n@Component({\n  templateUrl: 'demo.component.html'\n})\nexport class NavigationDemoComponent {\n\n  hoverName?: string;\n  hoverLastName?: string;\n\n  onNavigate(route) {\n    console.log('Navigate', route);\n  }\n}\n"}}])}();