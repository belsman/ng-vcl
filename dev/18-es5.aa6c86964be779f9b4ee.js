(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{"2JrD":function(n,e,t){"use strict";t.d(e,"b",function(){return s}),t.d(e,"a",function(){return a}),t.d(e,"c",function(){return o});var l=t("CcnG"),s=new l.q("vcl-form-control-host"),a=new l.q("vcl-form-control-error-state-agent"),o=new l.q("vcl-form-control-input")},"4JRc":function(n,e){n.exports='<span class="hljs-tag">&lt;<span class="hljs-name">h3</span>&gt;</span>Basic<span class="hljs-tag">&lt;/<span class="hljs-name">h3</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">label</span> <span class="hljs-attr">vclCheckboxLabel</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">vcl-checkbox</span> [(<span class="hljs-attr">checked</span>)]=<span class="hljs-string">"value1"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vcl-checkbox</span>&gt;</span>\n  Check! \n<span class="hljs-tag">&lt;/<span class="hljs-name">label</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">h3</span>&gt;</span>Disabled<span class="hljs-tag">&lt;/<span class="hljs-name">h3</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">label</span> <span class="hljs-attr">vclCheckboxLabel</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">vcl-checkbox</span> [(<span class="hljs-attr">checked</span>)]=<span class="hljs-string">"value2"</span> <span class="hljs-attr">disabled</span>=<span class="hljs-string">true</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vcl-checkbox</span>&gt;</span>\n  Check! (disabled) \n<span class="hljs-tag">&lt;/<span class="hljs-name">label</span>&gt;</span>\n'},"5AAY":function(n,e,t){"use strict";t.d(e,"a",function(){return r}),t.d(e,"b",function(){return i});var l=t("CcnG"),s=t("b1Eb"),a=t("X5GH"),o=t("dy60"),c=t("9Rb9"),r=(t("2JrD"),t("AXxg"),l.rb({encapsulation:2,styles:[],data:{}}));function i(n){return l.Ob(2,[(n()(),l.tb(0,0,null,null,2,"vcl-icon",[],[[2,"vclIcon",null],[1,"role",0]],null,null,s.b,s.a)),l.Jb(512,null,a.a,a.a,[l.E,o.a]),l.sb(2,4767744,null,0,c.a,[a.a,l.k],{icon:[0,"icon"]},null)],function(n,e){n(e,2,0,e.component.checked?"vcl:box-checked":"vcl:box")},function(n,e){n(e,0,0,l.Fb(e,2).vclIcon,l.Fb(e,2).attrRole)})}},AXxg:function(n,e,t){"use strict";t.d(e,"a",function(){return o});var l=t("CcnG"),s=(t("mbT9"),t("K9Ia")),a=0,o=function(){function n(n,e,t,o){this.cdRef=n,this.ngControl=e,this.formControlHost=t,this._errorStateAgent=o,this.stateChangedEmitter=new s.a,this.stateChanged=this.stateChangedEmitter.asObservable(),this.controlType="checkbox",this._focused=!1,this.generatedId="vcl_checkbox_"+a++,this._hostClasses=!0,this.attrRole="checkbox",this.tabindex=0,this._disabled=!1,this.checked=!1,this.checkedChange=new l.m,this.formDisabled=!1,this.onChange=function(){},this.onTouched=function(){},this.ngControl&&(this.ngControl.valueAccessor=this)}return Object.defineProperty(n.prototype,"elementId",{get:function(){return this.id||this.generatedId},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"isFocused",{get:function(){return this._focused},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"attrAriaChecked",{get:function(){return this.checked},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"attrAriaDisabled",{get:function(){return this.isDisabled},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"isDisabled",{get:function(){return this.formDisabled||this.disabled},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"hasError",{get:function(){var n=this.errorStateAgent||this._errorStateAgent;return!!n&&n(this.formControlHost,this)},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"disabled",{get:function(){return this._disabled},set:function(n){this._disabled=n,this.stateChangedEmitter.next()},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"value",{get:function(){return this.checked},enumerable:!0,configurable:!0}),n.prototype.onLabelClick=function(n){this.toggleValue()},n.prototype.onKeyup=function(n){switch(n.code){case"Space":n.preventDefault(),this.toggleValue()}},n.prototype.onClick=function(n){this.toggleValue(),n.stopPropagation()},n.prototype.onBlur=function(){this._focused=!1,this.onTouched(),this.stateChangedEmitter.next()},n.prototype.onFocus=function(){this._focused=!0,this.stateChangedEmitter.next()},n.prototype.toggleValue=function(){this.isDisabled||(this.checked=!this.checked,this.checkedChange.emit(this.checked),this.cdRef.markForCheck(),this.onTouched(),this.onChange(this.checked),this.stateChangedEmitter.next())},n.prototype.ngOnDestroy=function(){this.stateChangedEmitter&&this.stateChangedEmitter.complete()},n.prototype.writeValue=function(n){this.checked=!!n,this.cdRef.markForCheck()},n.prototype.registerOnChange=function(n){this.onChange=n},n.prototype.registerOnTouched=function(n){this.onTouched=n},n.prototype.setDisabledState=function(n){this.formDisabled=n,this.cdRef.markForCheck()},n}()},Fv3e:function(n,e){n.exports='<span class="hljs-keyword">import</span> { Component } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/core\'</span>;\n\n<span class="hljs-meta">@Component</span>({\n  templateUrl: <span class="hljs-string">\'demo.component.html\'</span>\n})\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> CheckboxDemoComponent {\n  value1 = <span class="hljs-literal">false</span>;\n  value2 = <span class="hljs-literal">false</span>;\n}\n'},Qrva:function(n,e){n.exports='<h1 id="vcl-checkbox">vcl-checkbox</h1>\n<p>A Checkbox utilizing <code>vcl-icon</code></p>\n<h2 id="usage">Usage</h2>\n<pre class="hljs"><span class="hljs-keyword">import</span> { VCLCheckboxModule } <span class="hljs-keyword">from</span> <span class="hljs-string">&apos;@ng-vcl/ng-vcl&apos;</span>;\n\n@NgModule({\n  <span class="hljs-attr">imports</span>: [ VCLCheckboxModule ],\n  ...\n})\n<span class="hljs-keyword">export</span> <span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">AppComponent</span> </span>{}</pre>\n<pre class="hljs"><span class="hljs-tag">&lt;<span class="hljs-name">label</span> <span class="hljs-attr">vclCheckboxLabel</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">vcl-checkbox</span> [(<span class="hljs-attr">checked</span>)]=<span class="hljs-string">&quot;value1&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vcl-checkbox</span>&gt;</span>\n  Check! \n<span class="hljs-tag">&lt;/<span class="hljs-name">label</span>&gt;</span></pre>\n<h3 id="api">API</h3>\n<h4 id="attributes">Attributes</h4>\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Type</th>\n<th>Default</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody><tr>\n<td><code>checked</code></td>\n<td>boolean</td>\n<td>false</td>\n<td>State of checkbox</td>\n</tr>\n<tr>\n<td><code>tabindex</code></td>\n<td>number</td>\n<td>0</td>\n<td>The tabindex of the checkbox</td>\n</tr>\n<tr>\n<td><code>disabled</code></td>\n<td>boolean</td>\n<td>false</td>\n<td>Disables checkbox if true</td>\n</tr>\n</tbody></table>\n<h3 id="events">Events</h3>\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Type</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody><tr>\n<td><code>checkedChange</code></td>\n<td>any</td>\n<td>Fired when the checked state has changed</td>\n</tr>\n</tbody></table>\n'},WpF5:function(n,e,t){"use strict";t.r(e);var l=t("CcnG"),s=function(){return function(){this.value1=!1,this.value2=!1}}(),a={demo:function(){return{label:"Checkbox",tabs:{Demo:s,"README.md":{type:"md",content:t("Qrva")},"demo.component.html":{type:"pre",content:t("4JRc")},"demo.component.ts":{type:"pre",content:t("Fv3e")}}}}},o=function(){return function(){}}(),c=t("pMnS"),r=t("8Ip6"),i=t("qjyM"),u=t("5AAY"),h=t("2JrD"),p=t("AXxg"),b=l.rb({encapsulation:2,styles:[],data:{}});function d(n){return l.Ob(0,[(n()(),l.tb(0,0,null,null,1,"h3",[],null,null,null,null,null)),(n()(),l.Mb(-1,null,["Basic"])),(n()(),l.tb(2,0,null,null,6,"label",[["vclCheckboxLabel",""]],[[2,"vclFormControlLabel",null],[2,"vclFormControlLabelWrapping",null],[2,"vclDisabled",null],[1,"aria-label",0]],[[null,"click"]],function(n,e,t){var s=!0;return"click"===e&&(s=!1!==l.Fb(n,3).onClick(t)&&s),s},null,null)),l.sb(3,16384,null,1,i.a,[],null,null),l.Kb(603979776,1,{checkbox:0}),(n()(),l.tb(5,0,null,null,2,"vcl-checkbox",[],[[1,"id",0],[2,"vclCheckbox",null],[1,"role",0],[1,"aria-checked",0],[1,"aria-disabled",0],[2,"vclDisabled",null],[2,"vclError",null],[1,"tabindex",0]],[[null,"checkedChange"],[null,"keyup"],[null,"click"],[null,"blur"],[null,"focus"]],function(n,e,t){var s=!0,a=n.component;return"keyup"===e&&(s=!1!==l.Fb(n,7).onKeyup(t)&&s),"click"===e&&(s=!1!==l.Fb(n,7).onClick(t)&&s),"blur"===e&&(s=!1!==l.Fb(n,7).onBlur()&&s),"focus"===e&&(s=!1!==l.Fb(n,7).onFocus()&&s),"checkedChange"===e&&(s=!1!==(a.value1=t)&&s),s},u.b,u.a)),l.Jb(6144,null,h.c,null,[p.a]),l.sb(7,180224,[[1,4]],0,p.a,[l.h,[8,null],[2,h.b],[2,h.a]],{checked:[0,"checked"]},{checkedChange:"checkedChange"}),(n()(),l.Mb(-1,null,[" Check! "])),(n()(),l.tb(9,0,null,null,1,"h3",[],null,null,null,null,null)),(n()(),l.Mb(-1,null,["Disabled"])),(n()(),l.tb(11,0,null,null,6,"label",[["vclCheckboxLabel",""]],[[2,"vclFormControlLabel",null],[2,"vclFormControlLabelWrapping",null],[2,"vclDisabled",null],[1,"aria-label",0]],[[null,"click"]],function(n,e,t){var s=!0;return"click"===e&&(s=!1!==l.Fb(n,12).onClick(t)&&s),s},null,null)),l.sb(12,16384,null,1,i.a,[],null,null),l.Kb(603979776,2,{checkbox:0}),(n()(),l.tb(14,0,null,null,2,"vcl-checkbox",[["disabled","true"]],[[1,"id",0],[2,"vclCheckbox",null],[1,"role",0],[1,"aria-checked",0],[1,"aria-disabled",0],[2,"vclDisabled",null],[2,"vclError",null],[1,"tabindex",0]],[[null,"checkedChange"],[null,"keyup"],[null,"click"],[null,"blur"],[null,"focus"]],function(n,e,t){var s=!0,a=n.component;return"keyup"===e&&(s=!1!==l.Fb(n,16).onKeyup(t)&&s),"click"===e&&(s=!1!==l.Fb(n,16).onClick(t)&&s),"blur"===e&&(s=!1!==l.Fb(n,16).onBlur()&&s),"focus"===e&&(s=!1!==l.Fb(n,16).onFocus()&&s),"checkedChange"===e&&(s=!1!==(a.value2=t)&&s),s},u.b,u.a)),l.Jb(6144,null,h.c,null,[p.a]),l.sb(16,180224,[[2,4]],0,p.a,[l.h,[8,null],[2,h.b],[2,h.a]],{disabled:[0,"disabled"],checked:[1,"checked"]},{checkedChange:"checkedChange"}),(n()(),l.Mb(-1,null,[" Check! (disabled) "]))],function(n,e){var t=e.component;n(e,7,0,t.value1),n(e,16,0,"true",t.value2)},function(n,e){n(e,2,0,l.Fb(e,3).classVCLFormControlLabel,l.Fb(e,3).classVCLFormControlLabelWrapping,l.Fb(e,3).isDisabled,l.Fb(e,3)._label),n(e,5,0,l.Fb(e,7).elementId,l.Fb(e,7)._hostClasses,l.Fb(e,7).attrRole,l.Fb(e,7).attrAriaChecked,l.Fb(e,7).attrAriaDisabled,l.Fb(e,7).isDisabled,l.Fb(e,7).hasError,l.Fb(e,7).tabindex),n(e,11,0,l.Fb(e,12).classVCLFormControlLabel,l.Fb(e,12).classVCLFormControlLabelWrapping,l.Fb(e,12).isDisabled,l.Fb(e,12)._label),n(e,14,0,l.Fb(e,16).elementId,l.Fb(e,16)._hostClasses,l.Fb(e,16).attrRole,l.Fb(e,16).attrAriaChecked,l.Fb(e,16).attrAriaDisabled,l.Fb(e,16).isDisabled,l.Fb(e,16).hasError,l.Fb(e,16).tabindex)})}function f(n){return l.Ob(0,[(n()(),l.tb(0,0,null,null,1,"ng-component",[],null,null,null,d,b)),l.sb(1,49152,null,0,s,[],null,null)],null,null)}var g=l.pb("ng-component",s,f,{},{},[]),m=t("Ip0R"),k=t("gIcY"),C=t("M2Lx"),y=t("dy60"),j=t("tfYh"),v=t("4c35"),F=t("p/eS"),x=t("2FIb"),D=t("61Fc"),O=t("fspu"),L=t("mbT9"),_=t("ZYCi"),A=t("PNUx");t.d(e,"CheckboxDemoModuleNgFactory",function(){return w});var w=l.qb(o,[],function(n){return l.Cb([l.Db(512,l.j,l.bb,[[8,[c.a,r.a,g]],[3,l.j],l.y]),l.Db(4608,m.n,m.m,[l.v,[2,m.A]]),l.Db(4608,k.v,k.v,[]),l.Db(4608,C.a,C.a,[]),l.Db(4608,y.a,y.a,[[2,j.a]]),l.Db(1073742336,m.c,m.c,[]),l.Db(1073742336,k.u,k.u,[]),l.Db(1073742336,k.l,k.l,[]),l.Db(1073742336,v.e,v.e,[]),l.Db(1073742336,C.b,C.b,[]),l.Db(1073742336,F.a,F.a,[]),l.Db(1073742336,x.a,x.a,[]),l.Db(1073742336,D.c,D.c,[]),l.Db(1073742336,O.a,O.a,[]),l.Db(1073742336,L.a,L.a,[]),l.Db(1073742336,_.q,_.q,[[2,_.v],[2,_.m]]),l.Db(1073742336,o,o,[]),l.Db(256,h.a,L.b,[]),l.Db(1024,_.i,function(){return[[{path:"",component:A.a,data:a}]]},[])])})},fspu:function(n,e,t){"use strict";t.d(e,"a",function(){return l}),t("AXxg"),t("qjyM");var l=function(){return function(){}}()},mbT9:function(n,e,t){"use strict";function l(n,e){return n&&e&&e.ngControl&&e.ngControl.invalid&&(e.ngControl.touched||n.submitted)}t.d(e,"b",function(){return l}),t.d(e,"a",function(){return s}),t("2JrD"),t("xsjC");var s=function(){return function(){}}()},qjyM:function(n,e,t){"use strict";t.d(e,"a",function(){return l}),t("AXxg");var l=function(){function n(){this.classVCLFormControlLabel=!0,this.classVCLFormControlLabelWrapping=!0}return Object.defineProperty(n.prototype,"isDisabled",{get:function(){return this.checkbox&&this.checkbox.isDisabled},enumerable:!0,configurable:!0}),n.prototype.onClick=function(n){this.checkbox&&this.checkbox.onLabelClick(n)},n}()},xsjC:function(n,e,t){"use strict";t.d(e,"a",function(){return a}),t("2JrD");var l=t("K9Ia"),s=t("p0Sj"),a=function(){function n(n,e,t){this.elementRef=n,this.formGroup=e,this.ngForm=t,this._stateChangedEmitter=new l.a,this.stateChange=this._stateChangedEmitter.asObservable()}return Object.defineProperty(n.prototype,"classVclFormControlGroup",{get:function(){return!this.classVclFormInlineControlGroup},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"classVclFormInlineControlGroup",{get:function(){return"vcl-form-inline-control-group"===this.elementRef.nativeElement.tagName.toLowerCase()},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"attrVCLControlType",{get:function(){return this.input&&this.input.controlType},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"_form",{get:function(){return this.ngForm||this.formGroup},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"pending",{get:function(){return this._form.pending},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"invalid",{get:function(){return this._form.invalid},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"valid",{get:function(){return this._form.valid},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"touched",{get:function(){return this._form.touched},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"untouched",{get:function(){return this._form.untouched},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"submitted",{get:function(){return this._form.submitted},enumerable:!0,configurable:!0}),n.prototype.ngAfterViewInit=function(){this.input&&this.input.stateChanged.pipe(Object(s.a)(void 0)).subscribe(this._stateChangedEmitter)},n.prototype.ngOnDestroy=function(){return this._stateChangedEmitter.complete()},n}()}}]);