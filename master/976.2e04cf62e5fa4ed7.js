"use strict";(self.webpackChunkng_vcl_demo=self.webpackChunkng_vcl_demo||[]).push([[976],{4976:(u,c,l)=>{l.r(c),l.d(c,{SelectDemoModule:()=>q,demo:()=>d});var a=l(9808),h=l(2382),g=l(5367),Z=l(265),p=l(393),r=l(9155),e=l(4893),T=l(5550),A=l(1300),m=l(2007),f=l(4637),U=l(4935),b=l(9043),C=l(9563);let S=(()=>{class t{constructor(){this.value1=void 0,this.value2=[],this.value3=void 0,this.value4=void 0}}return t.\u0275fac=function(i){return new(i||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["ng-component"]],decls:112,vars:9,consts:[[3,"value","valueChange"],["value","gr"],["value","fr"],["value","de"],["value","gb","label","United Kingdom"],["value","jp"],["value","cn"],["value","th"],["selectionMode","multiple",3,"value","valueChange"],["value","gb"],["value","ch"],[3,"value","disabled","valueChange"],["label"," - "],[3,"search"]],template:function(i,n){1&i&&(e.TgZ(0,"h3"),e._uU(1,"Simple select"),e.qZA(),e.TgZ(2,"vcl-form-control-group")(3,"vcl-label"),e._uU(4,"Select country"),e.qZA(),e.TgZ(5,"vcl-select")(6,"vcl-select-list",0),e.NdJ("valueChange",function(s){return n.value1=s}),e.TgZ(7,"vcl-select-list-header"),e._uU(8,"Europe"),e.qZA(),e.TgZ(9,"vcl-select-list-item",1),e._uU(10," Greece "),e.TgZ(11,"vcl-sub-label"),e._uU(12,"A country in southeastern Europe with thousands of islands throughout the Aegean and Ionian seas"),e.qZA()(),e.TgZ(13,"vcl-select-list-item",2),e._uU(14," France "),e.qZA(),e.TgZ(15,"vcl-select-list-item",3),e._uU(16," Germany "),e.qZA(),e.TgZ(17,"vcl-select-list-item",4),e._uU(18," The United Kingdom of Great Britain and Northern Ireland "),e.qZA(),e.TgZ(19,"vcl-select-list-header"),e._uU(20,"Asia"),e.qZA(),e.TgZ(21,"vcl-select-list-item",5),e._uU(22," Japan "),e.qZA(),e.TgZ(23,"vcl-select-list-item",6),e._uU(24," China "),e.qZA(),e.TgZ(25,"vcl-select-list-item",7),e._uU(26," Thailand "),e.qZA()()()(),e.TgZ(27,"p"),e._uU(28),e.qZA(),e.TgZ(29,"h3"),e._uU(30,"Multi select"),e.qZA(),e.TgZ(31,"vcl-form-control-group")(32,"vcl-label"),e._uU(33,"Select countries"),e.qZA(),e.TgZ(34,"vcl-select")(35,"vcl-select-list",8),e.NdJ("valueChange",function(s){return n.value2=s}),e.TgZ(36,"vcl-select-list-header"),e._uU(37,"Europe"),e.qZA(),e.TgZ(38,"vcl-select-list-item",1),e._uU(39," Greece "),e.TgZ(40,"vcl-sub-label"),e._uU(41,"A country in southeastern Europe with thousands of islands throughout the Aegean and Ionian seas"),e.qZA()(),e.TgZ(42,"vcl-select-list-item",2),e._uU(43," France "),e.qZA(),e.TgZ(44,"vcl-select-list-item",3),e._uU(45," Germany "),e.qZA(),e.TgZ(46,"vcl-select-list-item",9),e._uU(47," The United Kingdom of Great Britain and Northern Ireland "),e.qZA(),e.TgZ(48,"vcl-select-list-header"),e._uU(49,"Asia"),e.qZA(),e.TgZ(50,"vcl-select-list-item",5),e._uU(51," Japan "),e.qZA(),e.TgZ(52,"vcl-select-list-item",10),e._uU(53," China "),e.qZA(),e.TgZ(54,"vcl-select-list-item",7),e._uU(55," Thailand "),e.qZA()()()(),e.TgZ(56,"p"),e._uU(57),e.qZA(),e.TgZ(58,"h3"),e._uU(59,"Disabled"),e.qZA(),e.TgZ(60,"vcl-form-control-group")(61,"vcl-label"),e._uU(62,"Select country"),e.qZA(),e.TgZ(63,"vcl-select")(64,"vcl-select-list",11),e.NdJ("valueChange",function(s){return n.value3=s}),e.TgZ(65,"vcl-select-list-item",12),e._uU(66," None "),e.qZA(),e.TgZ(67,"vcl-select-list-header"),e._uU(68,"Europe"),e.qZA(),e.TgZ(69,"vcl-select-list-item",1),e._uU(70," Greece "),e.TgZ(71,"vcl-sub-label"),e._uU(72,"A country in southeastern Europe with thousands of islands throughout the Aegean and Ionian seas"),e.qZA()(),e.TgZ(73,"vcl-select-list-item",2),e._uU(74," France "),e.qZA(),e.TgZ(75,"vcl-select-list-item",3),e._uU(76," Germany "),e.qZA(),e.TgZ(77,"vcl-select-list-item",4),e._uU(78," The United Kingdom of Great Britain and Northern Ireland "),e.qZA(),e.TgZ(79,"vcl-select-list-header"),e._uU(80,"Asia"),e.qZA(),e.TgZ(81,"vcl-select-list-item",5),e._uU(82," Japan "),e.qZA(),e.TgZ(83,"vcl-select-list-item",6),e._uU(84," China "),e.qZA(),e.TgZ(85,"vcl-select-list-item",7),e._uU(86," Thailand "),e.qZA()()()(),e.TgZ(87,"h3"),e._uU(88,"Select with search"),e.qZA(),e.TgZ(89,"vcl-form-control-group")(90,"vcl-label"),e._uU(91,"Select country"),e.qZA(),e.TgZ(92,"vcl-select",13)(93,"vcl-select-list",0),e.NdJ("valueChange",function(s){return n.value4=s}),e.TgZ(94,"vcl-select-list-item",1),e._uU(95," Greece "),e.TgZ(96,"vcl-sub-label"),e._uU(97,"A country in southeastern Europe with thousands of islands throughout the Aegean and Ionian seas"),e.qZA()(),e.TgZ(98,"vcl-select-list-item",2),e._uU(99," France "),e.qZA(),e.TgZ(100,"vcl-select-list-item",3),e._uU(101," Germany "),e.qZA(),e.TgZ(102,"vcl-select-list-item",4),e._uU(103," The United Kingdom of Great Britain and Northern Ireland "),e.qZA(),e.TgZ(104,"vcl-select-list-item",5),e._uU(105," Japan "),e.qZA(),e.TgZ(106,"vcl-select-list-item",6),e._uU(107," China "),e.qZA(),e.TgZ(108,"vcl-select-list-item",7),e._uU(109," Thailand "),e.qZA()()()(),e.TgZ(110,"p"),e._uU(111),e.qZA()),2&i&&(e.xp6(6),e.Q6J("value",n.value1),e.xp6(22),e.hij(" Selected value: ",n.value1,""),e.xp6(7),e.Q6J("value",n.value2),e.xp6(22),e.hij(" Selected values: ",n.value2,""),e.xp6(7),e.Q6J("value",n.value3)("disabled",!0),e.xp6(28),e.Q6J("search",!0),e.xp6(1),e.Q6J("value",n.value4),e.xp6(18),e.hij(" Selected value: ",n.value4,""))},directives:[T.o,A._T,m.q8,f.H,U.g,b.m,C.fN,m.g9],encapsulation:2}),t})();function d(){return{label:"Select",tabs:{Demo:S,"README.md":{type:"md",content:'# vcl-select\n\nA select control. Wraps the vcl-select-list to render a list of selectable items in a dropdown.\n\n## Usage\n\n```html\n<vcl-form-control-group>\n  <vcl-label>Select item</vcl-label>\n  <vcl-select>\n    <vcl-select-list [(value)]="value">\n      <vcl-select-list-item label=" -">\n        [Clear selection]\n      </vcl-select-list-item>\n      <vcl-select-list-item [value]="1">\n        Item 1\n      </vcl-select-list-item>\n      <vcl-select-list-item [value]="2">\n        Item 2\n      </vcl-select-list-item>\n      <vcl-select-list-item [value]="3">\n        Item 3\n      </vcl-select-list-item>\n    </vcl-select-list>\n  </vcl-select>\n</vcl-form-control-group>\n```\n\n### API\n\n#### vcl-select attributes\n\nName                  | Type     | Default | Description\n--------------------- |----------|---------| --------------------------------------------------------------------------------\n`placeholder`         | string   |         |\n`tabindex`            | number   | 0       | The tabindex of the select\n`search`              | booolean | false   | Enable search capability\n'},"demo.component.html":{type:"html",content:l(9109)},"demo.component.ts":{type:"ts",content:l(1416)}}}}let q=(()=>{class t{}return t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[a.ez,h.u5,r.l,Z.Kef,p.Cl,g.Bz.forChild([{path:"",component:r.z,data:{demo:d}}])]]}),t})()},9109:(u,c,l)=>{l.r(c),l.d(c,{default:()=>a});const a='<h3>Simple select</h3>\n<vcl-form-control-group>\n  <vcl-label>Select country</vcl-label>\n  <vcl-select>\n    <vcl-select-list [(value)]="value1">\n      <vcl-select-list-header>Europe</vcl-select-list-header>\n      <vcl-select-list-item value="gr">\n        Greece\n        <vcl-sub-label>A country in southeastern Europe with thousands of islands throughout the Aegean and Ionian seas</vcl-sub-label>\n      </vcl-select-list-item>\n      <vcl-select-list-item value="fr">\n        France\n      </vcl-select-list-item>\n      <vcl-select-list-item value="de">\n        Germany\n      </vcl-select-list-item>\n      <vcl-select-list-item value="gb" label="United Kingdom">\n        The United Kingdom of Great Britain and Northern Ireland\n      </vcl-select-list-item>\n      <vcl-select-list-header>Asia</vcl-select-list-header>\n      <vcl-select-list-item value="jp">\n        Japan\n      </vcl-select-list-item>\n      <vcl-select-list-item value="cn">\n        China\n      </vcl-select-list-item>\n      <vcl-select-list-item value="th">\n        Thailand\n      </vcl-select-list-item>\n    </vcl-select-list>\n  </vcl-select>\n</vcl-form-control-group>\n\n<p> Selected value: {{value1}}</p>\n\n<h3>Multi select</h3>\n<vcl-form-control-group>\n  <vcl-label>Select countries</vcl-label>\n  <vcl-select>\n    <vcl-select-list [(value)]="value2" selectionMode="multiple">\n      <vcl-select-list-header>Europe</vcl-select-list-header>\n      <vcl-select-list-item value="gr">\n        Greece\n        <vcl-sub-label>A country in southeastern Europe with thousands of islands throughout the Aegean and Ionian seas</vcl-sub-label>\n      </vcl-select-list-item>\n      <vcl-select-list-item value="fr">\n        France\n      </vcl-select-list-item>\n      <vcl-select-list-item value="de">\n        Germany\n      </vcl-select-list-item>\n      <vcl-select-list-item value="gb">\n        The United Kingdom of Great Britain and Northern Ireland\n      </vcl-select-list-item>\n      <vcl-select-list-header>Asia</vcl-select-list-header>\n      <vcl-select-list-item value="jp">\n        Japan\n      </vcl-select-list-item>\n      <vcl-select-list-item value="ch">\n        China\n      </vcl-select-list-item>\n      <vcl-select-list-item value="th">\n        Thailand\n      </vcl-select-list-item>\n    </vcl-select-list>\n  </vcl-select>\n</vcl-form-control-group>\n\n<p> Selected values: {{value2}}</p>\n\n<h3>Disabled</h3>\n<vcl-form-control-group>\n  <vcl-label>Select country</vcl-label>\n  <vcl-select>\n    <vcl-select-list [(value)]="value3" [disabled]="true">\n      <vcl-select-list-item label=" - ">\n        None\n      </vcl-select-list-item>\n      <vcl-select-list-header>Europe</vcl-select-list-header>\n      <vcl-select-list-item value="gr">\n        Greece\n        <vcl-sub-label>A country in southeastern Europe with thousands of islands throughout the Aegean and Ionian seas</vcl-sub-label>\n      </vcl-select-list-item>\n      <vcl-select-list-item value="fr">\n        France\n      </vcl-select-list-item>\n      <vcl-select-list-item value="de">\n        Germany\n      </vcl-select-list-item>\n      <vcl-select-list-item value="gb" label="United Kingdom">\n        The United Kingdom of Great Britain and Northern Ireland\n      </vcl-select-list-item>\n      <vcl-select-list-header>Asia</vcl-select-list-header>\n      <vcl-select-list-item value="jp">\n        Japan\n      </vcl-select-list-item>\n      <vcl-select-list-item value="cn">\n        China\n      </vcl-select-list-item>\n      <vcl-select-list-item value="th">\n        Thailand\n      </vcl-select-list-item>\n    </vcl-select-list>\n  </vcl-select>\n</vcl-form-control-group>\n\n<h3>Select with search</h3>\n<vcl-form-control-group>\n  <vcl-label>Select country</vcl-label>\n  <vcl-select [search]="true">\n    <vcl-select-list [(value)]="value4">\n      <vcl-select-list-item value="gr">\n        Greece\n        <vcl-sub-label>A country in southeastern Europe with thousands of islands throughout the Aegean and Ionian seas</vcl-sub-label>\n      </vcl-select-list-item>\n      <vcl-select-list-item value="fr">\n        France\n      </vcl-select-list-item>\n      <vcl-select-list-item value="de">\n        Germany\n      </vcl-select-list-item>\n      <vcl-select-list-item value="gb" label="United Kingdom">\n        The United Kingdom of Great Britain and Northern Ireland\n      </vcl-select-list-item>\n      <vcl-select-list-item value="jp">\n        Japan\n      </vcl-select-list-item>\n      <vcl-select-list-item value="cn">\n        China\n      </vcl-select-list-item>\n      <vcl-select-list-item value="th">\n        Thailand\n      </vcl-select-list-item>\n    </vcl-select-list>\n  </vcl-select>\n</vcl-form-control-group>\n\n<p> Selected value: {{value4}}</p>\n'},1416:(u,c,l)=>{l.r(c),l.d(c,{default:()=>a});const a="import { Component } from '@angular/core';\n\n@Component({\n  templateUrl: 'demo.component.html'\n})\nexport class SelectDemoComponent {\n\n  value1 = undefined;\n  value2 = [];\n  value3 = undefined;\n  value4 = undefined;\n}\n"}}]);