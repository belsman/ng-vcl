(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"2FIb":function(t,n,e){"use strict";e.d(n,"a",(function(){return w})),e.d(n,"b",(function(){return R}));var i=e("ofXK"),s=e("19H1"),c=e("+rOU"),o=e("fXoL"),r=e("tyNb"),a=e("jhN1"),u=e("tKhL"),b=e("ZMf7"),l=e("pKlR");function f(t,n){}function d(t,n){if(1&t&&(o.Sb(0,"div"),o.wc(1,f,0,0,"ng-template",6),o.Rb()),2&t){const t=o.dc().$implicit;o.Ab(1),o.ic("cdkPortalOutlet",t.content)}}function h(t,n){if(1&t&&(o.Sb(0,"div"),o.Sb(1,"pre"),o.yc(2),o.Rb(),o.Rb()),2&t){const t=o.dc().$implicit;o.Ab(2),o.zc(t.content)}}function p(t,n){if(1&t&&o.Nb(0,"div",7),2&t){const t=o.dc().$implicit;o.ic("innerHtml",t.content,o.pc)}}function m(t,n){if(1&t&&o.Nb(0,"div",8),2&t){const t=o.dc().$implicit;o.ic("innerHtml",t.content,o.pc)}}function v(t,n){if(1&t&&o.Nb(0,"pre",7),2&t){const t=o.dc().$implicit;o.ic("innerHtml",t.content,o.pc)}}function g(t,n){if(1&t&&(o.Sb(0,"vcl-tab"),o.Sb(1,"vcl-label"),o.yc(2),o.Rb(),o.wc(3,d,2,1,"div",1),o.wc(4,h,3,1,"div",1),o.wc(5,p,1,1,"div",4),o.wc(6,m,1,1,"div",5),o.wc(7,v,1,1,"pre",4),o.Rb()),2&t){const t=n.$implicit;o.Ab(2),o.zc(t.name),o.Ab(1),o.ic("ngIf","component"===t.type),o.Ab(1),o.ic("ngIf","text"===t.type),o.Ab(1),o.ic("ngIf","html"===t.type),o.Ab(1),o.ic("ngIf","md"===t.type),o.Ab(1),o.ic("ngIf","pre"===t.type)}}function y(t,n){if(1&t&&(o.Sb(0,"div"),o.Sb(1,"vcl-tab-nav",2),o.wc(2,g,8,6,"vcl-tab",3),o.Rb(),o.Rb()),2&t){const t=o.dc();o.Ab(2),o.ic("ngForOf",t.tabs)}}let w=(()=>{class t{constructor(t,n){this.activatedRoute=t,this.sanitizer=n,this.tabs=[]}ngOnInit(){const t=this.activatedRoute.snapshot.data.demo();t?(this.title=t.label,this.tabs=t.tabs?Object.keys(t.tabs).map(n=>{let e,i;return"object"==typeof t.tabs[n]&&t.tabs[n]?(e=t.tabs[n].type,i="pre"===e||"html"===e||"md"===e?this.sanitizer.bypassSecurityTrustHtml(t.tabs[n].content):t.tabs[n].content):"function"==typeof t.tabs[n]&&(e="component",i=new c.c(t.tabs[n])),{name:n,content:i,type:e}}):[]):(this.title="ng-vcl",this.tabs=[])}}return t.\u0275fac=function(n){return new(n||t)(o.Mb(r.a),o.Mb(a.b))},t.\u0275cmp=o.Gb({type:t,selectors:[["ng-component"]],decls:3,vars:2,consts:[[1,"article-header"],[4,"ngIf"],["borders","true"],[4,"ngFor","ngForOf"],[3,"innerHtml",4,"ngIf"],["class","markdown-body",3,"innerHtml",4,"ngIf"],[3,"cdkPortalOutlet"],[3,"innerHtml"],[1,"markdown-body",3,"innerHtml"]],template:function(t,n){1&t&&(o.Sb(0,"h2",0),o.yc(1),o.Rb(),o.wc(2,y,3,1,"div",1)),2&t&&(o.Ab(1),o.Ac(" ",n.title,""),o.Ab(1),o.ic("ngIf",n.tabs.length>0))},directives:[i.t,u.a,i.s,b.a,l.a,c.b],encapsulation:2}),t})(),R=(()=>{class t{}return t.\u0275mod=o.Kb({type:t}),t.\u0275inj=o.Jb({factory:function(n){return new(n||t)},imports:[[i.c,s.db,c.h]]}),t})()},evWh:function(t,n,e){"use strict";e.d(n,"a",(function(){return o}));var i=e("+rOU"),s=(e("fPtZ"),e("rI4U")),c=e("fXoL");let o=(()=>{class t{constructor(t,n,e){this.notifierService=t,this.templateRef=n,this.viewContainerRef=e,this.opts={text:""}}open(){this.notificationRef=this.notifierService.queue(Object.assign(Object.assign({},this.opts),{text:new i.i(this.templateRef,this.viewContainerRef)}))}close(){var t;null===(t=this.notificationRef)||void 0===t||t.close()}}return t.\u0275fac=function(n){return new(n||t)(c.Mb(s.a),c.Mb(c.K),c.Mb(c.N))},t.\u0275dir=c.Hb({type:t,selectors:[["","vclNotification",""]],inputs:{opts:["vclNotification","opts"]},exportAs:["vclNotification"]}),t})()},f0Vy:function(t,n,e){"use strict";e.d(n,"a",(function(){return l})),e.d(n,"b",(function(){return f}));var i=e("fXoL"),s=e("3Pt+"),c=e("19H1"),o=e("XNiG"),r=e("ofXK"),a=e("6B8K"),u=e("9Rb9");let b=0,l=(()=>{class t{constructor(t){this.injector=t,this._hostClasses=!0,this._stateChangedEmitter=new o.a,this._generatedId="vcl_file-input_"+b++,this._focused=!1,this._cvaDisabled=!1,this.stateChanged=this._stateChangedEmitter.asObservable(),this.controlType="counter",this.value=0,this.hasError=!1,this.onChange=()=>{},this.onTouched=()=>{}}get ngControl(){return this.injector.get(s.q,null)}get elementId(){return this.id||this._generatedId}get isDisabled(){return this._cvaDisabled||this.disabled}get isFocused(){return this._focused}setErrorState(t){this.hasError=t}onFocus(){this._focused=!0,this._stateChangedEmitter.next()}onBlur(t){this._focused=!1,this._stateChangedEmitter.next(),t&&this.onTouched()}increment(){"number"==typeof this.max&&this.value>=this.max||(this.value++,this.onChange(this.value))}decrement(){"number"==typeof this.min&&this.value<=this.min||(this.value--,this.onChange(this.value),this.onTouched())}writeValue(t){this.value=t}registerOnChange(t){this.onChange=t}registerOnTouched(t){this.onTouched=t}setDisabledState(t){this._cvaDisabled=t}}return t.\u0275fac=function(n){return new(n||t)(i.Mb(i.r))},t.\u0275cmp=i.Gb({type:t,selectors:[["demo-counter"]],hostVars:3,hostBindings:function(t,n){2&t&&(i.Bb("id",n.elementId),i.Db("error",n.hasError))},inputs:{id:"id",disabled:"disabled",min:"min",max:"max"},features:[i.zb([{provide:s.p,useExisting:Object(i.S)(()=>t),multi:!0},{provide:c.f,useExisting:Object(i.S)(()=>t)}])],decls:6,vars:1,consts:[["vcl-square-button","","type","button",1,"transparent",3,"click","keydown.enter","focus"],["icon","fas:minus"],["icon","fas:plus"]],template:function(t,n){1&t&&(i.Sb(0,"button",0),i.ac("click",(function(){return n.decrement()}))("keydown.enter",(function(t){return n.decrement(),t.preventDefault()}))("focus",(function(){return n.onFocus()}))("focus",(function(){return n.onBlur(!1)})),i.Nb(1,"vcl-icon",1),i.Rb(),i.Sb(2,"span"),i.yc(3),i.Rb(),i.Sb(4,"button",0),i.ac("click",(function(){return n.increment()}))("keydown.enter",(function(t){return n.increment(),t.preventDefault()}))("focus",(function(){return n.onFocus()}))("focus",(function(){return n.onBlur(!0)})),i.Nb(5,"vcl-icon",2),i.Rb()),2&t&&(i.Ab(3),i.zc(n.value))},directives:[a.b,u.a],styles:["[_nghost-%COMP%] {\n      display: flex;\n      align-items: center;\n    }\n    [_nghost-%COMP%]    > span[_ngcontent-%COMP%] {\n      font-size: 2em;\n      user-select: none;\n      padding-left: 0.2em;\n      padding-right: 0.2em;\n    }"]}),t})(),f=(()=>{class t{}return t.\u0275mod=i.Kb({type:t}),t.\u0275inj=i.Jb({factory:function(n){return new(n||t)},imports:[[r.c,s.m,s.B,c.N,c.B]]}),t})()}}]);