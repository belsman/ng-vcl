(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{"2pKz":function(e,l,t){"use strict";t.r(l),t.d(l,"demo",function(){return f}),t.d(l,"SelectDemoModule",function(){return P});var c=t("ofXK"),n=t("3Pt+"),s=t("tyNb"),i=t("19H1"),a=t("vxfF"),v=t("2FIb"),o=t("fXoL"),r=t("xsjC"),u=t("x1VK"),b=t("pKlR"),m=t("I9Sx"),d=t("zDo1"),h=t("gCzt"),p=t("StUX");let g=(()=>{class e{constructor(){this.value1=void 0,this.value2=[],this.value3=void 0}}return e.\u0275fac=function(l){return new(l||e)},e.\u0275cmp=o.Eb({type:e,selectors:[["ng-component"]],decls:87,vars:6,consts:[[3,"value","valueChange"],["value","gr"],["value","fr"],["value","de"],["value","gb","label","United Kingdom"],["value","jp"],["value","cn"],["value","th"],["selectionMode","multiple",3,"value","valueChange"],["value","gb"],["value","ch"],[3,"value","disabled","valueChange"],["label"," - "]],template:function(e,l){1&e&&(o.Qb(0,"h3"),o.xc(1,"Simple select"),o.Pb(),o.Qb(2,"vcl-form-control-group"),o.Qb(3,"vcl-label"),o.xc(4,"Select country"),o.Pb(),o.Qb(5,"vcl-select"),o.Qb(6,"vcl-select-list",0),o.Xb("valueChange",function(e){return l.value1=e}),o.Qb(7,"vcl-select-list-header"),o.xc(8,"Europe"),o.Pb(),o.Qb(9,"vcl-select-list-item",1),o.xc(10," Greece "),o.Qb(11,"vcl-sub-label"),o.xc(12,"A country in southeastern Europe with thousands of islands throughout the Aegean and Ionian seas"),o.Pb(),o.Pb(),o.Qb(13,"vcl-select-list-item",2),o.xc(14," France "),o.Pb(),o.Qb(15,"vcl-select-list-item",3),o.xc(16," Germany "),o.Pb(),o.Qb(17,"vcl-select-list-item",4),o.xc(18," The United Kingdom of Great Britain and Northern Ireland "),o.Pb(),o.Qb(19,"vcl-select-list-header"),o.xc(20,"Asia"),o.Pb(),o.Qb(21,"vcl-select-list-item",5),o.xc(22," Japan "),o.Pb(),o.Qb(23,"vcl-select-list-item",6),o.xc(24," China "),o.Pb(),o.Qb(25,"vcl-select-list-item",7),o.xc(26," Thailand "),o.Pb(),o.Pb(),o.Pb(),o.Pb(),o.Qb(27,"p"),o.xc(28),o.Pb(),o.Qb(29,"h3"),o.xc(30,"Multi select"),o.Pb(),o.Qb(31,"vcl-form-control-group"),o.Qb(32,"vcl-label"),o.xc(33,"Select countries"),o.Pb(),o.Qb(34,"vcl-select"),o.Qb(35,"vcl-select-list",8),o.Xb("valueChange",function(e){return l.value2=e}),o.Qb(36,"vcl-select-list-header"),o.xc(37,"Europe"),o.Pb(),o.Qb(38,"vcl-select-list-item",1),o.xc(39," Greece "),o.Qb(40,"vcl-sub-label"),o.xc(41,"A country in southeastern Europe with thousands of islands throughout the Aegean and Ionian seas"),o.Pb(),o.Pb(),o.Qb(42,"vcl-select-list-item",2),o.xc(43," France "),o.Pb(),o.Qb(44,"vcl-select-list-item",3),o.xc(45," Germany "),o.Pb(),o.Qb(46,"vcl-select-list-item",9),o.xc(47," The United Kingdom of Great Britain and Northern Ireland "),o.Pb(),o.Qb(48,"vcl-select-list-header"),o.xc(49,"Asia"),o.Pb(),o.Qb(50,"vcl-select-list-item",5),o.xc(51," Japan "),o.Pb(),o.Qb(52,"vcl-select-list-item",10),o.xc(53," China "),o.Pb(),o.Qb(54,"vcl-select-list-item",7),o.xc(55," Thailand "),o.Pb(),o.Pb(),o.Pb(),o.Pb(),o.Qb(56,"p"),o.xc(57),o.Pb(),o.Qb(58,"h3"),o.xc(59,"Disabled"),o.Pb(),o.Qb(60,"vcl-form-control-group"),o.Qb(61,"vcl-label"),o.xc(62,"Select country"),o.Pb(),o.Qb(63,"vcl-select"),o.Qb(64,"vcl-select-list",11),o.Xb("valueChange",function(e){return l.value3=e}),o.Qb(65,"vcl-select-list-item",12),o.xc(66," None "),o.Pb(),o.Qb(67,"vcl-select-list-header"),o.xc(68,"Europe"),o.Pb(),o.Qb(69,"vcl-select-list-item",1),o.xc(70," Greece "),o.Qb(71,"vcl-sub-label"),o.xc(72,"A country in southeastern Europe with thousands of islands throughout the Aegean and Ionian seas"),o.Pb(),o.Pb(),o.Qb(73,"vcl-select-list-item",2),o.xc(74," France "),o.Pb(),o.Qb(75,"vcl-select-list-item",3),o.xc(76," Germany "),o.Pb(),o.Qb(77,"vcl-select-list-item",4),o.xc(78," The United Kingdom of Great Britain and Northern Ireland "),o.Pb(),o.Qb(79,"vcl-select-list-header"),o.xc(80,"Asia"),o.Pb(),o.Qb(81,"vcl-select-list-item",5),o.xc(82," Japan "),o.Pb(),o.Qb(83,"vcl-select-list-item",6),o.xc(84," China "),o.Pb(),o.Qb(85,"vcl-select-list-item",7),o.xc(86," Thailand "),o.Pb(),o.Pb(),o.Pb(),o.Pb()),2&e&&(o.zb(6),o.gc("value",l.value1),o.zb(22),o.zc(" Selected value: ",l.value1,""),o.zb(7),o.gc("value",l.value2),o.zb(22),o.zc(" Selected values: ",l.value2,""),o.zb(7),o.gc("value",l.value3)("disabled",!0))},directives:[r.a,u.a,b.a,m.a,d.a,h.a,p.a,b.b],encapsulation:2}),e})();function f(){return{label:"Select",tabs:{Demo:g,"README.md":{type:"md",content:'# vcl-select\n\nA select control. Wraps the vcl-select-list to render a list of selectable items in a dropdown.\n\n## Usage\n\n```html\n<vcl-form-control-group>\n  <vcl-label>Select item</vcl-label>\n  <vcl-select>\n    <vcl-select-list [(value)]="value">\n      <vcl-select-list-item label=" -">\n        [Clear selection]\n      </vcl-select-list-item>\n      <vcl-select-list-item [value]="1">\n        Item 1\n      </vcl-select-list-item>\n      <vcl-select-list-item [value]="2">\n        Item 2\n      </vcl-select-list-item>\n      <vcl-select-list-item [value]="3">\n        Item 3\n      </vcl-select-list-item>\n    </vcl-select-list>\n  </vcl-select>\n</vcl-form-control-group>\n```\n\n### API\n\n#### vcl-select attributes\n\nName                  | Type                        | Default  | Description\n--------------------- | ---------------             | -------  | --------------------------------------------------------------------------------\n`placeholder`         | string                      |          | \n`tabindex`            | number                      | 0        | The tabindex of the select\n'},"demo.component.html":{type:"html",content:t("o2wy")},"demo.component.ts":{type:"ts",content:t("b/Dn")}}}}let P=(()=>{class e{}return e.\u0275fac=function(l){return new(l||e)},e.\u0275mod=o.Ib({type:e}),e.\u0275inj=o.Hb({imports:[[c.c,n.i,v.b,i.bb,a.c,s.g.forChild([{path:"",component:v.a,data:{demo:f}}])]]}),e})()},"b/Dn":function(e,l,t){"use strict";t.r(l),l.default="import { Component } from '@angular/core';\n\n@Component({\n  templateUrl: 'demo.component.html'\n})\nexport class SelectDemoComponent {\n\n  value1 = undefined;\n  value2 = [];\n  value3 = undefined;\n}\n"},o2wy:function(e,l,t){"use strict";t.r(l),l.default='<h3>Simple select</h3>\n<vcl-form-control-group>\n  <vcl-label>Select country</vcl-label>\n  <vcl-select>\n    <vcl-select-list [(value)]="value1">\n      <vcl-select-list-header>Europe</vcl-select-list-header>\n      <vcl-select-list-item value="gr">\n        Greece\n        <vcl-sub-label>A country in southeastern Europe with thousands of islands throughout the Aegean and Ionian seas</vcl-sub-label>\n      </vcl-select-list-item>\n      <vcl-select-list-item value="fr">\n        France\n      </vcl-select-list-item>\n      <vcl-select-list-item value="de">\n        Germany\n      </vcl-select-list-item>\n      <vcl-select-list-item value="gb" label="United Kingdom">\n        The United Kingdom of Great Britain and Northern Ireland\n      </vcl-select-list-item>\n      <vcl-select-list-header>Asia</vcl-select-list-header>\n      <vcl-select-list-item value="jp">\n        Japan\n      </vcl-select-list-item>\n      <vcl-select-list-item value="cn">\n        China\n      </vcl-select-list-item>\n      <vcl-select-list-item value="th">\n        Thailand\n      </vcl-select-list-item>\n    </vcl-select-list>\n  </vcl-select>\n</vcl-form-control-group>\n\n<p> Selected value: {{value1}}</p>\n\n<h3>Multi select</h3>\n<vcl-form-control-group>\n  <vcl-label>Select countries</vcl-label>\n  <vcl-select>\n    <vcl-select-list [(value)]="value2" selectionMode="multiple">\n      <vcl-select-list-header>Europe</vcl-select-list-header>\n      <vcl-select-list-item value="gr">\n        Greece\n        <vcl-sub-label>A country in southeastern Europe with thousands of islands throughout the Aegean and Ionian seas</vcl-sub-label>\n      </vcl-select-list-item>\n      <vcl-select-list-item value="fr">\n        France\n      </vcl-select-list-item>\n      <vcl-select-list-item value="de">\n        Germany\n      </vcl-select-list-item>\n      <vcl-select-list-item value="gb">\n        The United Kingdom of Great Britain and Northern Ireland\n      </vcl-select-list-item>\n      <vcl-select-list-header>Asia</vcl-select-list-header>\n      <vcl-select-list-item value="jp">\n        Japan\n      </vcl-select-list-item>\n      <vcl-select-list-item value="ch">\n        China\n      </vcl-select-list-item>\n      <vcl-select-list-item value="th">\n        Thailand\n      </vcl-select-list-item>\n    </vcl-select-list>\n  </vcl-select>\n</vcl-form-control-group>\n\n<p> Selected values: {{value2}}</p>\n\n<h3>Disabled</h3>\n<vcl-form-control-group>\n  <vcl-label>Select country</vcl-label>\n  <vcl-select>\n    <vcl-select-list [(value)]="value3" [disabled]="true">\n      <vcl-select-list-item label=" - ">\n        None\n      </vcl-select-list-item>\n      <vcl-select-list-header>Europe</vcl-select-list-header>\n      <vcl-select-list-item value="gr">\n        Greece\n        <vcl-sub-label>A country in southeastern Europe with thousands of islands throughout the Aegean and Ionian seas</vcl-sub-label>\n      </vcl-select-list-item>\n      <vcl-select-list-item value="fr">\n        France\n      </vcl-select-list-item>\n      <vcl-select-list-item value="de">\n        Germany\n      </vcl-select-list-item>\n      <vcl-select-list-item value="gb" label="United Kingdom">\n        The United Kingdom of Great Britain and Northern Ireland\n      </vcl-select-list-item>\n      <vcl-select-list-header>Asia</vcl-select-list-header>\n      <vcl-select-list-item value="jp">\n        Japan\n      </vcl-select-list-item>\n      <vcl-select-list-item value="cn">\n        China\n      </vcl-select-list-item>\n      <vcl-select-list-item value="th">\n        Thailand\n      </vcl-select-list-item>\n    </vcl-select-list>\n  </vcl-select>\n</vcl-form-control-group>\n'}}]);