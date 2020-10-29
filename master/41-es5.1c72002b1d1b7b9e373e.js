!function(){function e(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function n(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{"7u4V":function(e,n,t){"use strict";t.r(n),n.default='<h3>single tokens</h3>\n<vcl-token>my token</vcl-token>\n<vcl-token [selected]="true">my selected token</vcl-token>\n<vcl-token [removable]="true" (remove)="onRemove($event)">my removable token</vcl-token>\n<vcl-token [removable]="true" (remove)="onRemove($event)">my icon token</vcl-token>\n\n<br/>\n\n<h3>token-list</h3>\n<vcl-token-list [value]="[1]" (valueChange)="onListChange($event);">\n  <vcl-token [value]="1">my token 1</vcl-token>\n  <vcl-token [value]="2">my token 2</vcl-token>\n</vcl-token-list>\n<br/>\n\n<h3>selectable and removable tokenlist</h3>\n<vcl-token-list [value]="[1]" [selectable]="true" [removable]="true" (valueChange)="onListChange($event);">\n  <vcl-token [value]="1">my token 1</vcl-token>\n  <vcl-token [value]="2">my token 2</vcl-token>\n</vcl-token-list>\n<br/>\n\n<h3>token-input</h3>\n<vcl-token-input (valueChange)="onInputChange($event);"></vcl-token-input>\n\n<h3>token-input (disabled)</h3>\n<vcl-token-input [disabled]="true"></vcl-token-input>\n'},FDdc:function(t,o,l){"use strict";l.r(o),l.d(o,"demo",(function(){return p})),l.d(o,"TokenDemoModule",(function(){return g}));var a,c=l("ofXK"),s=l("3Pt+"),v=l("tyNb"),r=l("19H1"),u=l("2FIb"),i=l("fXoL"),k=l("sM5x"),b=l("nhKh"),m=l("tMsr"),h=function(){return[1]},d=((a=function(){function t(){e(this,t)}var o,l,a;return o=t,(l=[{key:"onRemove",value:function(e){console.log("onRemove",e)}},{key:"onListChange",value:function(e){console.log("onListChange",e)}},{key:"onInputChange",value:function(e){console.log("onInputChange",e)}}])&&n(o.prototype,l),a&&n(o,a),t}()).\u0275fac=function(e){return new(e||a)},a.\u0275cmp=i.Db({type:a,selectors:[["ng-component"]],decls:33,vars:14,consts:[[3,"selected"],[3,"removable","remove"],[3,"value","valueChange"],[3,"value"],[3,"value","selectable","removable","valueChange"],[3,"valueChange"],[3,"disabled"]],template:function(e,n){1&e&&(i.Pb(0,"h3"),i.xc(1,"single tokens"),i.Ob(),i.Pb(2,"vcl-token"),i.xc(3,"my token"),i.Ob(),i.Pb(4,"vcl-token",0),i.xc(5,"my selected token"),i.Ob(),i.Pb(6,"vcl-token",1),i.Wb("remove",(function(e){return n.onRemove(e)})),i.xc(7,"my removable token"),i.Ob(),i.Pb(8,"vcl-token",1),i.Wb("remove",(function(e){return n.onRemove(e)})),i.xc(9,"my icon token"),i.Ob(),i.Kb(10,"br"),i.Pb(11,"h3"),i.xc(12,"token-list"),i.Ob(),i.Pb(13,"vcl-token-list",2),i.Wb("valueChange",(function(e){return n.onListChange(e)})),i.Pb(14,"vcl-token",3),i.xc(15,"my token 1"),i.Ob(),i.Pb(16,"vcl-token",3),i.xc(17,"my token 2"),i.Ob(),i.Ob(),i.Kb(18,"br"),i.Pb(19,"h3"),i.xc(20,"selectable and removable tokenlist"),i.Ob(),i.Pb(21,"vcl-token-list",4),i.Wb("valueChange",(function(e){return n.onListChange(e)})),i.Pb(22,"vcl-token",3),i.xc(23,"my token 1"),i.Ob(),i.Pb(24,"vcl-token",3),i.xc(25,"my token 2"),i.Ob(),i.Ob(),i.Kb(26,"br"),i.Pb(27,"h3"),i.xc(28,"token-input"),i.Ob(),i.Pb(29,"vcl-token-input",5),i.Wb("valueChange",(function(e){return n.onInputChange(e)})),i.Ob(),i.Pb(30,"h3"),i.xc(31,"token-input (disabled)"),i.Ob(),i.Kb(32,"vcl-token-input",6)),2&e&&(i.yb(4),i.fc("selected",!0),i.yb(2),i.fc("removable",!0),i.yb(2),i.fc("removable",!0),i.yb(5),i.fc("value",i.gc(12,h)),i.yb(1),i.fc("value",1),i.yb(2),i.fc("value",2),i.yb(5),i.fc("value",i.gc(13,h))("selectable",!0)("removable",!0),i.yb(1),i.fc("value",1),i.yb(2),i.fc("value",2),i.yb(8),i.fc("disabled",!0))},directives:[k.b,b.a,m.a],encapsulation:2}),a);function p(){return{label:"Token",tabs:{Demo:d,"README.md":{type:"md",content:'# vcl-token\n\n## Usage\n\n```js\nimport { VCLTokenModule } from \'@vcl/ng-vcl\';\n\n@NgModule({\n  imports: [ VCLTokenModule ],\n  ...\n})\nexport class AppComponent {}\n```\n\n## single token\n\n```html\n<vcl-token>mytoken</vcl-token>\n```\n\n## single selected token\n\n```html\n<vcl-token [selected]="true">mytoken</vcl-token>\n```\n\n## single removable token\n\n```html\n<vcl-token [removable]="true" (remove)="onRemove()">mytoken</vcl-token>\n```\n\n## token-list\n\n```html\n<vcl-token-list [selectable]="true" (change)="changed($event);">\n  <vcl-token [selected]="true">mytoken 1</vcl-token>\n  <vcl-token [selected]="false">mytoken 2</vcl-token>\n</vcl-token-list>\n```\n\n## token-input\n\n```html\n<vcl-token-input (valueChange)="changed($event);"></vcl-token-input>\n```\n\n### API\n\n#### vcl-token attributes\n\nName          | Type    | Default   | Description\n------------  | ------- | -------   | ---------------------------------------\n`value`       | any     |           | token value\n`selected`    | boolean | false     | if true, the token is highlighted\n`removable`   | boolean | false     | if true, the remove-cross is shown\n\n#### vcl-token events\n\nName        | Type    | Description\n----------- | ------- | ----------------------\n`remove`    |         | called when the remove-button is pressed\n\n#### token-list attributes\n\nName         | Type     | Default  | Description\n------------ | -------- | -------- | ------------------------------------------------------------\n`value`      | any[]    | any[]    | The values of the selected tokens\n`selectable` | boolean  | false    | tokens are selectable if true\n\n#### token-list events\n\nName                  | Type     | Description\n--------------------- | -------- | -----------\n`tokensChange`        | string[] | called when the selection of token changes\n\n#### vcl-token-input attributes\n\nName                 | Type     | Default              | Description\n------------         | -------- | -------              | ------------------------------------------------------------\n`value`              | Token[]  | []                   | List of tokens\n`selectable`         | boolean  | false                | tokens are selectable if true\n`allowDuplicates`    | boolean  | false                | tokens with matching values are not added\n`addOnEnter`         | boolean  | true                 | New token will be added when pressing enter\n`preselect`          | boolean  | true                 | tokens are preselected after being added if true\n`tokenClass`         | string   |                      | additional css class for tokens\n`tabindex`           | number   | 0                    | The tabindex of the token-input\n\n#### vcl-token-input events\n\nName            | Type    | Description\n--------------- | ------- | ---------------\n`valueChange`   | Token[] | called after tokens are added/removed or the selection of token changes\n`confirm`       | Token[] | called after `enter` is pressed when input element is empty\n\n#### interfaces\n\n```ts\ninterface Token {\n  label: string;\n  value: any;\n  selected?: boolean;\n}\n```\n'},"demo.component.html":{type:"html",content:l("7u4V")},"demo.component.ts":{type:"ts",content:l("x+fm")}}}}var f,g=((f=function n(){e(this,n)}).\u0275mod=i.Hb({type:f}),f.\u0275inj=i.Gb({factory:function(e){return new(e||f)},imports:[[c.c,s.m,u.b,r.VCLTokenModule,r.VCLInputModule,v.g.forChild([{path:"",component:u.a,data:{demo:p}}])]]}),f)},"x+fm":function(e,n,t){"use strict";t.r(n),n.default="import { Component } from '@angular/core';\n\n@Component({\n  templateUrl: 'demo.component.html'\n})\nexport class TokenDemoComponent {\n\n  onRemove(token) {\n    console.log('onRemove', token);\n  }\n\n  onListChange(value) {\n    console.log('onListChange', value);\n  }\n\n  onInputChange(value) {\n    console.log('onInputChange', value);\n  }\n}\n"}}])}();