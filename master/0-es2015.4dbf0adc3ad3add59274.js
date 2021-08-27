"use strict";(self.webpackChunkng_vcl=self.webpackChunkng_vcl||[]).push([[0],{78e3:function(e,t,n){n.r(t),n.d(t,{AutocompleteDemoModule:function(){return K},demo:function(){return G}});var o=n(16274),l=n(24988),c=n(95454),s=n(36196),i=n(23402),a=n(62518),r=n(84271),u=n(81332),m=n(852),p=n(4001),v=n(40327),h=n(61228),d=n(38834),g=n(44077),f=n(54660),b=n(67811);function k(e,t){1&e&&(r.TgZ(0,"vcl-select-list"),r.TgZ(1,"vcl-select-list-header"),r._uU(2,"Europe"),r.qZA(),r.TgZ(3,"vcl-select-list-item",4),r._uU(4," Greece "),r.TgZ(5,"vcl-sub-label"),r._uU(6,"A country in southeastern Europe with thousands of islands throughout the Aegean and Ionian seas"),r.qZA(),r.qZA(),r.TgZ(7,"vcl-select-list-item",5),r._uU(8," France "),r.qZA(),r.TgZ(9,"vcl-select-list-item",6),r._uU(10," Germany "),r.qZA(),r.TgZ(11,"vcl-select-list-item",7),r._uU(12," The United Kingdom of Great Britain and Northern Ireland "),r.qZA(),r.TgZ(13,"vcl-select-list-header"),r._uU(14,"Asia"),r.qZA(),r.TgZ(15,"vcl-select-list-item",8),r._uU(16," Japan "),r.qZA(),r.TgZ(17,"vcl-select-list-item",9),r._uU(18," China "),r.qZA(),r.TgZ(19,"vcl-select-list-item",10),r._uU(20," Thailand "),r.qZA(),r.qZA())}let A=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=r.Xpm({type:e,selectors:[["ng-component"]],decls:7,vars:1,consts:[["icon","fas:flag"],["placeholder","Search","vclInput","",3,"vclAutocompleteInput"],["vclAutocomplete",""],["acCountries","vclAutocomplete"],["value","Greece"],["value","France"],["value","Germany"],["value","The United Kingdom"],["value","Japan"],["value","China"],["value","Thailand"]],template:function(e,t){if(1&e&&(r.TgZ(0,"h3"),r._uU(1,"Basic autocomplete"),r.qZA(),r.TgZ(2,"vcl-input-field"),r._UZ(3,"vcl-icon",0),r._UZ(4,"input",1),r.qZA(),r.YNc(5,k,21,0,"ng-template",2,3,r.W1O)),2&e){const e=r.MAs(6);r.xp6(4),r.Q6J("vclAutocompleteInput",e)}},directives:[u.q,m.o,p.V,v.X,h.oK,h.Fc,d.g,g.m,f.fN,b.g9],encapsulation:2}),e})();var Z=n(29923),I=n(43400),T=n(13438),y=n(57689),q=n(32812),x=n(88561),w=n(72072),U=n(63543),B=n(31887),C=n(57120),_=n(160),S=n(36669);function D(e,t){1&e&&(r.TgZ(0,"vcl-select-list-content"),r.TgZ(1,"div",8),r._UZ(2,"vcl-busy-indicator",9),r.qZA(),r.qZA())}function O(e,t){1&e&&(r.TgZ(0,"vcl-select-list-content"),r.TgZ(1,"div",9),r._uU(2,"No books found"),r.qZA(),r.qZA())}function N(e,t){if(1&e&&(r.TgZ(0,"vcl-select-list-item",11),r._uU(1),r.qZA()),2&e){const e=t.$implicit;r.Q6J("value",e),r.xp6(1),r.hij(" ",e.title," ")}}function J(e,t){if(1&e&&(r.ynx(0),r.YNc(1,N,2,2,"vcl-select-list-item",10),r.BQk()),2&e){const e=r.oxw(2);r.xp6(1),r.Q6J("ngForOf",e.search.books)}}function $(e,t){if(1&e&&(r.TgZ(0,"vcl-select-list"),r.YNc(1,D,3,0,"vcl-select-list-content",7),r.YNc(2,O,3,0,"vcl-select-list-content",7),r.YNc(3,J,2,1,"ng-container",7),r.qZA()),2&e){const e=r.oxw();r.xp6(1),r.Q6J("ngIf","loading"===e.search.state),r.xp6(1),r.Q6J("ngIf","success"===e.search.state&&0===e.search.books.length),r.xp6(1),r.Q6J("ngIf","success"===e.search.state&&e.search.books.length>0)}}function F(e,t){if(1&e&&(r.TgZ(0,"li",16),r.TgZ(1,"div"),r._UZ(2,"img",17),r.qZA(),r.TgZ(3,"div",18),r.TgZ(4,"div",19),r.TgZ(5,"div",20),r.TgZ(6,"h2",21),r._uU(7),r.qZA(),r.qZA(),r.TgZ(8,"div",22),r.TgZ(9,"i"),r._uU(10),r.qZA(),r._UZ(11,"br"),r.TgZ(12,"span"),r._uU(13),r.qZA(),r.qZA(),r.qZA(),r.qZA(),r.qZA()),2&e){const e=t.$implicit;r.xp6(2),r.Q6J("src",e.image,r.LSH),r.xp6(5),r.Oqu(e.title),r.xp6(3),r.Oqu(e.date),r.xp6(3),r.Oqu(e.author)}}function j(e,t){if(1&e){const e=r.EpF();r.ynx(0),r.TgZ(1,"h3"),r._uU(2),r.qZA(),r.TgZ(3,"div",12),r.TgZ(4,"ul",13),r.YNc(5,F,14,4,"li",14),r.qZA(),r.qZA(),r.TgZ(6,"button",15),r.NdJ("click",function(){return r.CHM(e),r.oxw().onClearBooks()}),r._uU(7,"Clear"),r.qZA(),r.BQk()}if(2&e){const e=r.oxw();r.xp6(2),r.hij("Books (",e.books.length,")"),r.xp6(3),r.Q6J("ngForOf",e.books)}}const E=function(e){return{autocomplete:e,mapInputValue:"void"}};let Q=(()=>{class e{constructor(e){this.http=e,this.search={state:"cleared",books:[]},this.books=[],this.search$=new Z.X("")}ngOnInit(){this.search$.pipe((0,y.x)(),(0,q.w)(e=>!e||e.length<2?(0,I.x)([{state:"cleared",books:[]}],T.E):this.http.get(`https://www.googleapis.com/books/v1/volumes?q=${e}&projection=lite`).pipe((0,x.U)(e=>({state:"success",books:(e.items||[]).filter(e=>e.id&&e.volumeInfo&&e.volumeInfo.title).map(e=>({id:e.id,title:e.volumeInfo.title,image:e.volumeInfo.imageLinks&&e.volumeInfo.imageLinks&&e.volumeInfo.imageLinks.smallThumbnail,author:e.volumeInfo.authors&&e.volumeInfo.authors.join(", "),date:e.volumeInfo.publishedDate}))})),(0,w.K)(()=>(0,I.x)([{state:"error",books:[]}],T.E)),(0,U.O)({state:"loading",books:[]}))),(0,U.O)({state:"cleared",books:[]})).subscribe(e=>this.search=e)}onSelectBook(e){e&&(this.search$.next(""),this.books.push(e))}onClearBooks(){this.books=[]}ngOnDestroy(){this.search$.complete()}}return e.\u0275fac=function(t){return new(t||e)(r.Y36(B.eN))},e.\u0275cmp=r.Xpm({type:e,selectors:[["ng-component"]],decls:11,vars:5,consts:[["vclPrepend","","icon","fas:search"],["vclInput","","placeholder","Search Google Books api",3,"vclAutocompleteInput","input","vclAutocompleteInputSelectionChange"],["inputBooks",""],["vcl-button","","square","","vclAppend","",3,"click"],[3,"icon"],["vclAutocomplete",""],["acBooks","vclAutocomplete"],[4,"ngIf"],[1,"row","justify-content-center"],[2,"padding","1em"],[3,"value",4,"ngFor","ngForOf"],[3,"value"],[1,"data-list","item-selectability","item-hover-highlight","no-border","scrollable","y",2,"max-height","20em"],["role","listbox","aria-multiselectable","false",1,"data-list-body"],["class","data-list-item row","role","option","aria-selected","false",4,"ngFor","ngForOf"],["vcl-button","",3,"click"],["role","option","aria-selected","false",1,"data-list-item","row"],[1,"responsive-image",3,"src"],[1,"gutter-margin","flex"],[1,"row"],[1,"row","center","flex"],[1,"m-0"],[1,"secondary-text-color","align-right"]],template:function(e,t){if(1&e){const e=r.EpF();r.TgZ(0,"h3"),r._uU(1,"vcl-dropdown with async data"),r.qZA(),r.TgZ(2,"vcl-input-field"),r._UZ(3,"vcl-icon",0),r.TgZ(4,"input",1,2),r.NdJ("input",function(e){return t.search$.next(e.target.value)})("vclAutocompleteInputSelectionChange",function(e){return t.onSelectBook(e)}),r.qZA(),r.TgZ(6,"button",3),r.NdJ("click",function(){r.CHM(e);const n=r.MAs(5);return n.value="",n.focus(),t.search$.next("")}),r._UZ(7,"vcl-icon",4),r.qZA(),r.qZA(),r.YNc(8,$,4,3,"ng-template",5,6,r.W1O),r.YNc(10,j,8,2,"ng-container",7)}if(2&e){const e=r.MAs(9);r.xp6(4),r.Q6J("vclAutocompleteInput","cleared"===t.search.state?void 0:r.VKq(3,E,e)),r.xp6(3),r.Q6J("icon","fas:times-circle"),r.xp6(3),r.Q6J("ngIf",t.books.length>0)}},directives:[u.q,m.o,p.V,v.X,C.r,h.oK,o.O5,h.Fc,d.g,_.a,S.B,o.sg,f.fN],encapsulation:2}),e})();function G(){return{label:"Autocomplete",tabs:{Demo:A,"Async Demo":Q,"README.md":{type:"md",content:'# vcl-autocomplete\n\nAn autocomplete extension for inputs utilizing the select-list\n\n## Usage\n\n\n```html\n<input placeholder="Type to open dropdown" [vclAutocompleteInput]="ac" />\n\n<ng-template vclAutocomplete #ac="vclAutocomplete">\n  <vcl-select-list>\n    <vcl-select-list-header>Items</vcl-select-list-header>\n    <vcl-select-list-item value="1">\n      Item 1\n      <vcl-sub-label>Description of Item 1</vcl-sub-label>\n    </vcl-select-list-item>\n    <vcl-select-list-item value="2">\n      Item 2\n      <vcl-sub-label>Description of Item 2</vcl-sub-label>\n    </vcl-select-list-item>\n    <vcl-select-list-item value="3" [disabled]="true">\n      Item 3\n      <vcl-sub-label>Description of Item 3</vcl-sub-label>\n    </vcl-select-list-item>\n    <vcl-select-list-seperator></vcl-select-list-seperator>\n    <vcl-select-list-item value="4" [disabled]="true">\n      Seperated Item\n      <vcl-sub-label>Description of Item 4</vcl-sub-label>\n    </vcl-select-list-item>\n  </vcl-select-list>\n</ng-template>\n```\n\n### vclAutocomplete attributes\n\nName            | Type                             | Default     | Description\n----------      | -------                          | -------     | --------------------------------------\n`width`         | number \\| string                 |             | Dropdown width\n`height`        | number \\| string                 | \'20em\'      | Dropdown height\n`maxHeight`     | number \\| string                 |             | Dropdown max height\n\n### vclAutocomplete events\n\nName            | Type    | Description\n----------      | ------- | --------------------------------------\n`afterClose`    | any     | Fired after the dropdown was closed\n\n### input[vclAutocompleteInput] attributes\n\nName                         | Type                                   | Default | Description\n----------                   | -------                                | ------- | --------------------------------------\n`vclAutocomplete`            | vcl-autocomplete                       |         | The autocomplete component to use\n'},"demo.component.html":{type:"html",content:n(45945)},"demo.component.ts":{type:"ts",content:n(68429)},"async.component.html":{type:"html",content:n(15061)},"async.component.ts":{type:"ts",content:n(68755)}}}}let K=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=r.oAB({type:e}),e.\u0275inj=r.cJS({imports:[[o.ez,l.u5,a.l,s.V4c,s.NhM,s.WdB,s.o14,s.OD1,s.V9p,i.Cl,c.Bz.forChild([{path:"",component:a.z,data:{demo:G}}])]]}),e})()},15061:function(e,t,n){n.r(t),t.default='\n<h3>vcl-dropdown with async data</h3>\n\n<vcl-input-field>\n  <vcl-icon vclPrepend icon="fas:search"></vcl-icon>\n  <input #inputBooks \n         vclInput \n         placeholder="Search Google Books api" \n         (input)="search$.next($event.target.value)"\n         [vclAutocompleteInput]="search.state === \'cleared\' ? undefined : {autocomplete: acBooks, mapInputValue: \'void\'}"\n         (vclAutocompleteInputSelectionChange)="onSelectBook($event)"\n         />\n  <button vcl-button square vclAppend\n          (click)="inputBooks.value = \'\'; inputBooks.focus(); search$.next(\'\')">\n    <vcl-icon [icon]="\'fas:times-circle\'"></vcl-icon>\n  </button>\n</vcl-input-field>\n\n<ng-template vclAutocomplete #acBooks="vclAutocomplete">\n  <vcl-select-list>\n    <vcl-select-list-content *ngIf="search.state === \'loading\'">\n      <div class="row justify-content-center">\n        <vcl-busy-indicator style="padding: 1em"> </vcl-busy-indicator>\n      </div>\n    </vcl-select-list-content>\n    <vcl-select-list-content *ngIf="search.state === \'success\' && search.books.length === 0">\n      <div style="padding: 1em">No books found</div>\n    </vcl-select-list-content>\n    <ng-container *ngIf="search.state === \'success\' && search.books.length > 0">\n      <vcl-select-list-item *ngFor="let book of search.books" [value]="book">\n        {{book.title}}\n      </vcl-select-list-item>\n    </ng-container>\n  </vcl-select-list>\n</ng-template>\n\n<ng-container *ngIf="books.length > 0">\n\n  <h3>Books ({{books.length}})</h3>\n\n  <div class="data-list item-selectability item-hover-highlight no-border scrollable y" style="max-height: 20em;">\n    <ul class="data-list-body" role="listbox" aria-multiselectable="false">\n      <li *ngFor="let book of books" class="data-list-item row" role="option" aria-selected="false">\n        <div>\n          <img class="responsive-image" [src]="book.image">\n        </div>\n        <div class="gutter-margin flex">\n          <div class="row">\n            <div class="row center flex">\n              <h2 class="m-0">{{book.title}}</h2>\n            </div>\n            <div class="secondary-text-color align-right">\n              <i>{{book.date}}</i><br>\n              <span>{{book.author}}</span>\n            </div>\n          </div>\n        </div>\n      </li>\n    </ul>\n  </div>\n\n  <button vcl-button (click)="onClearBooks()">Clear</button>\n\n</ng-container>\n'},68755:function(e,t,n){n.r(t),t.default="import { HttpClient } from '@angular/common/http';\nimport { Component, OnDestroy } from '@angular/core';\nimport { BehaviorSubject ,  of, scheduled, asapScheduler } from 'rxjs';\nimport { switchMap, map, catchError, startWith, distinctUntilChanged } from 'rxjs/operators';\n\nconst BOOK_API_URL = 'https://www.googleapis.com/books/v1/volumes';\n\ninterface Book {\n  id: string;\n  title: string;\n  author?: string;\n  date?: string;\n  image?: string;\n}\ninterface Search {\n  state: 'cleared' | 'loading' | 'error' | 'success';\n  books: Book[];\n}\n\n@Component({\n  templateUrl: 'async.component.html'\n})\nexport class AutocompleteAsyncDemoComponent implements OnDestroy {\n  constructor(private http: HttpClient) { }\n\n  search: Search = {\n    state: 'cleared',\n    books: []\n  };\n\n  books: Book[] = [];\n\n  search$ = new BehaviorSubject<string>('');\n\n  ngOnInit() {\n    this.search$.pipe(\n      distinctUntilChanged(),\n      switchMap(value => {\n        // Show nothing if less than 2 characters\n        if (!value || value.length < 2) {\n          return scheduled<Search>([{ state: 'cleared', books: [] }], asapScheduler);\n        } else {\n          return this.http.get(`${BOOK_API_URL}?q=${value}&projection=lite`).pipe(\n            map((data: any) => {\n              const items = data.items || [];\n              return {\n                state: 'success',\n                books: items.filter(item => item.id && item.volumeInfo && item.volumeInfo.title)\n                            .map(item => ({\n                  id: item.id,\n                  title: item.volumeInfo.title,\n                  image: item.volumeInfo.imageLinks && item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail,\n                  author: item.volumeInfo.authors && item.volumeInfo.authors.join(', '),\n                  date: item.volumeInfo.publishedDate,\n                }))\n              };\n            }),\n            catchError(() => scheduled<Search>([{ state: 'error', books: [] }], asapScheduler)), // Error state\n            startWith({ state: 'loading', books: [] }) // Set state to loading before the request\n          );\n        }\n      }),\n      startWith<Search>({ state: 'cleared', books: [] }) // Initial state\n    ).subscribe(search => this.search = search);\n  }\n\n  onSelectBook(book: Book) {\n    if (book) {\n      this.search$.next('');\n      this.books.push(book);\n    }\n  }\n\n  onClearBooks() {\n    this.books = [];\n  }\n\n  ngOnDestroy() {\n    this.search$.complete();\n  }\n}\n"},45945:function(e,t,n){n.r(t),t.default='<h3>Basic autocomplete</h3>\n\n<vcl-input-field>\n  <vcl-icon icon="fas:flag"></vcl-icon>\n  <input placeholder="Search"\n         vclInput\n         [vclAutocompleteInput]="acCountries"\n         />\n</vcl-input-field>\n\n<ng-template vclAutocomplete #acCountries="vclAutocomplete">\n  <vcl-select-list>\n    <vcl-select-list-header>Europe</vcl-select-list-header>\n    <vcl-select-list-item value="Greece">\n      Greece\n      <vcl-sub-label>A country in southeastern Europe with thousands of islands throughout the Aegean and Ionian seas</vcl-sub-label>\n    </vcl-select-list-item>\n    <vcl-select-list-item value="France">\n      France\n    </vcl-select-list-item>\n    <vcl-select-list-item value="Germany">\n      Germany\n    </vcl-select-list-item>\n    <vcl-select-list-item value="The United Kingdom">\n      The United Kingdom of Great Britain and Northern Ireland\n    </vcl-select-list-item>\n    <vcl-select-list-header>Asia</vcl-select-list-header>\n    <vcl-select-list-item value="Japan">\n      Japan\n    </vcl-select-list-item>\n    <vcl-select-list-item value="China">\n      China\n    </vcl-select-list-item>\n    <vcl-select-list-item value="Thailand">\n      Thailand\n    </vcl-select-list-item>\n  </vcl-select-list>\n</ng-template>\n'},68429:function(e,t,n){n.r(t),t.default="import { Component } from '@angular/core';\n\n@Component({\n  templateUrl: 'demo.component.html'\n})\nexport class AutocompleteDemoComponent {\n\n}\n"}}]);