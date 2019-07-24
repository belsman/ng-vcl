(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{"/RJ6":function(n,t){n.exports='\n<span class="hljs-keyword">import</span> { Component } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/core\'</span>;\n\n<span class="hljs-meta">@Component</span>({\n  templateUrl: <span class="hljs-string">\'demo.component.html\'</span>\n})\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> TextareaDemoComponent {\n\n  data1 =\n  <span class="hljs-string">`line 1\nline 2\nline 3\nline 4\nline 5\nline 6`</span>;\n\n  data2 =\n  <span class="hljs-string">`line 1\nline 2\nline 3\nline 4\nline 5\nline 6`</span>;\n\n\n  data3 =\n  <span class="hljs-string">`line 1\nline 2\nline 3\nline 4\nline 5\nline 6`</span>;\n\n}\n'},"0Pyo":function(n,t){n.exports='<span class="hljs-tag">&lt;<span class="hljs-name">h3</span>&gt;</span>Default<span class="hljs-tag">&lt;/<span class="hljs-name">h3</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">textarea</span> <span class="hljs-attr">vclInput</span> [(<span class="hljs-attr">ngModel</span>)]=<span class="hljs-string">"data1"</span> <span class="hljs-attr">rows</span>=<span class="hljs-string">"3"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">textarea</span>&gt;</span>\n\n\n<span class="hljs-tag">&lt;<span class="hljs-name">h3</span>&gt;</span>Textarea with autogrow (minRows=5, maxRows=10)<span class="hljs-tag">&lt;/<span class="hljs-name">h3</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">textarea</span> <span class="hljs-attr">vclInput</span> [(<span class="hljs-attr">ngModel</span>)]=<span class="hljs-string">"data2"</span> [<span class="hljs-attr">autogrow</span>]=<span class="hljs-string">"true"</span> [<span class="hljs-attr">minRows</span>]=<span class="hljs-string">"5"</span> [<span class="hljs-attr">maxRows</span>]=<span class="hljs-string">"10"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">textarea</span>&gt;</span>\n'},"2JrD":function(n,t,e){"use strict";e.d(t,"b",function(){return o}),e.d(t,"a",function(){return s}),e.d(t,"c",function(){return a});var l=e("CcnG"),o=new l.q("vcl-form-control-host"),s=new l.q("vcl-form-control-error-state-agent"),a=new l.q("vcl-form-control-input")},A72M:function(n,t){n.exports='<h1 id="vcl-textarea">vcl-textarea</h1>\n<p>Enhanced textarea</p>\n<h2 id="usage">Usage</h2>\n<pre class="hljs"><code>&lt;textarea vclInput [(ngModel)]=&quot;data1&quot; [autogrow]=&quot;true&quot; [minRows]=&quot;5&quot; [maxRows]=&quot;10&quot;&gt;&lt;/textarea&gt;</code></pre>\n<h3 id="api">API</h3>\n<h4 id="attributes">Attributes</h4>\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Type</th>\n<th>Default</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody><tr>\n<td><code>autogrow</code></td>\n<td>boolean</td>\n<td>false</td>\n<td>Adjusts the <code>rows</code> attribute so it matches the current values number of lines</td>\n</tr>\n<tr>\n<td><code>minRows</code></td>\n<td>number</td>\n<td></td>\n<td>The min value for <code>rows</code> when using autogrow</td>\n</tr>\n<tr>\n<td><code>maxRows</code></td>\n<td>number</td>\n<td></td>\n<td>The max value for <code>rows</code> when using autogrow</td>\n</tr>\n<tr>\n<td><code>autoselect</code></td>\n<td>boolean</td>\n<td>false</td>\n<td>Selects text on focus</td>\n</tr>\n</tbody></table>\n'},HoaW:function(n,t,e){"use strict";e.d(t,"a",function(){return l});var l=function(){return function(){}}()},XIT8:function(n,t,e){"use strict";e.d(t,"a",function(){return o});var l=e("mrSG"),o=function(n){function t(){return n.call(this)||this}return l.d(t,n),Object.defineProperty(t.prototype,"vclMaterial",{set:function(n){this.setMode(n)},enumerable:!0,configurable:!0}),t}(e("pIVY").c)},"g5E+":function(n,t,e){"use strict";e.r(t);var l=e("CcnG"),o=function(){return function(){this.data1="line 1\nline 2\nline 3\nline 4\nline 5\nline 6",this.data2="line 1\nline 2\nline 3\nline 4\nline 5\nline 6",this.data3="line 1\nline 2\nline 3\nline 4\nline 5\nline 6"}}(),s={demo:function(){return{label:"Textarea",tabs:{Demo:o,"README.md":{type:"md",content:e("A72M")},"demo.component.html":{type:"pre",content:e("0Pyo")},"demo.component.ts":{type:"pre",content:e("/RJ6")}}}}},a=function(){return function(){}}(),r=e("pMnS"),i=e("8Ip6"),u=e("2JrD"),c=e("q1D+"),p=e("pIVY"),d=e("gIcY"),h=l.rb({encapsulation:2,styles:[],data:{}});function f(n){return l.Ob(0,[(n()(),l.tb(0,0,null,null,1,"h3",[],null,null,null,null,null)),(n()(),l.Mb(-1,null,["Default"])),(n()(),l.tb(2,0,null,null,8,"textarea",[["rows","3"],["vclInput",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null],[2,"vclInput",null],[1,"id",0],[2,"vclDisabled",null],[1,"rows",0],[2,"vclError",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"],[null,"propertychange"],[null,"focus"]],function(n,t,e){var o=!0,s=n.component;return"input"===t&&(o=!1!==l.Fb(n,5)._handleInput(e.target.value)&&o),"blur"===t&&(o=!1!==l.Fb(n,5).onTouched()&&o),"compositionstart"===t&&(o=!1!==l.Fb(n,5)._compositionStart()&&o),"compositionend"===t&&(o=!1!==l.Fb(n,5)._compositionEnd(e.target.value)&&o),"ngModelChange"===t&&(o=!1!==l.Fb(n,10).onChange()&&o),"propertychange"===t&&(o=!1!==l.Fb(n,10).onChange()&&o),"input"===t&&(o=!1!==l.Fb(n,10).onChange()&&o),"focus"===t&&(o=!1!==l.Fb(n,10).onFocus()&&o),"blur"===t&&(o=!1!==l.Fb(n,10).onBlur()&&o),"ngModelChange"===t&&(o=!1!==(s.data1=e)&&o),o},null,null)),l.Jb(6144,null,u.c,null,[c.a]),l.Jb(6144,null,p.b,null,[c.a]),l.sb(5,16384,null,0,d.c,[l.E,l.k,[2,d.a]],null,null),l.Jb(1024,null,d.m,function(n){return[n]},[d.c]),l.sb(7,671744,null,0,d.r,[[8,null],[8,null],[8,null],[6,d.m]],{model:[0,"model"]},{update:"ngModelChange"}),l.Jb(2048,null,d.n,null,[d.r]),l.sb(9,16384,null,0,d.o,[[4,d.n]],null,null),l.sb(10,5128192,null,0,c.a,[l.k,l.h,[2,d.n],[2,u.b],[2,u.a]],{rows:[0,"rows"]},null),(n()(),l.tb(11,0,null,null,1,"h3",[],null,null,null,null,null)),(n()(),l.Mb(-1,null,["Textarea with autogrow (minRows=5, maxRows=10)"])),(n()(),l.tb(13,0,null,null,8,"textarea",[["vclInput",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null],[2,"vclInput",null],[1,"id",0],[2,"vclDisabled",null],[1,"rows",0],[2,"vclError",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"],[null,"propertychange"],[null,"focus"]],function(n,t,e){var o=!0,s=n.component;return"input"===t&&(o=!1!==l.Fb(n,16)._handleInput(e.target.value)&&o),"blur"===t&&(o=!1!==l.Fb(n,16).onTouched()&&o),"compositionstart"===t&&(o=!1!==l.Fb(n,16)._compositionStart()&&o),"compositionend"===t&&(o=!1!==l.Fb(n,16)._compositionEnd(e.target.value)&&o),"ngModelChange"===t&&(o=!1!==l.Fb(n,21).onChange()&&o),"propertychange"===t&&(o=!1!==l.Fb(n,21).onChange()&&o),"input"===t&&(o=!1!==l.Fb(n,21).onChange()&&o),"focus"===t&&(o=!1!==l.Fb(n,21).onFocus()&&o),"blur"===t&&(o=!1!==l.Fb(n,21).onBlur()&&o),"ngModelChange"===t&&(o=!1!==(s.data2=e)&&o),o},null,null)),l.Jb(6144,null,u.c,null,[c.a]),l.Jb(6144,null,p.b,null,[c.a]),l.sb(16,16384,null,0,d.c,[l.E,l.k,[2,d.a]],null,null),l.Jb(1024,null,d.m,function(n){return[n]},[d.c]),l.sb(18,671744,null,0,d.r,[[8,null],[8,null],[8,null],[6,d.m]],{model:[0,"model"]},{update:"ngModelChange"}),l.Jb(2048,null,d.n,null,[d.r]),l.sb(20,16384,null,0,d.o,[[4,d.n]],null,null),l.sb(21,5128192,null,0,c.a,[l.k,l.h,[2,d.n],[2,u.b],[2,u.a]],{autogrow:[0,"autogrow"],maxRows:[1,"maxRows"],minRows:[2,"minRows"]},null)],function(n,t){var e=t.component;n(t,7,0,e.data1),n(t,10,0,"3"),n(t,18,0,e.data2),n(t,21,0,!0,10,5)},function(n,t){n(t,2,1,[l.Fb(t,9).ngClassUntouched,l.Fb(t,9).ngClassTouched,l.Fb(t,9).ngClassPristine,l.Fb(t,9).ngClassDirty,l.Fb(t,9).ngClassValid,l.Fb(t,9).ngClassInvalid,l.Fb(t,9).ngClassPending,l.Fb(t,10).classVclInput,l.Fb(t,10).elementId,l.Fb(t,10).isDisabled,l.Fb(t,10).rows,l.Fb(t,10).hasError]),n(t,13,1,[l.Fb(t,20).ngClassUntouched,l.Fb(t,20).ngClassTouched,l.Fb(t,20).ngClassPristine,l.Fb(t,20).ngClassDirty,l.Fb(t,20).ngClassValid,l.Fb(t,20).ngClassInvalid,l.Fb(t,20).ngClassPending,l.Fb(t,21).classVclInput,l.Fb(t,21).elementId,l.Fb(t,21).isDisabled,l.Fb(t,21).rows,l.Fb(t,21).hasError])})}function b(n){return l.Ob(0,[(n()(),l.tb(0,0,null,null,1,"ng-component",[],null,null,null,f,h)),l.sb(1,49152,null,0,o,[],null,null)],null,null)}var g=l.pb("ng-component",o,b,{},{},[]),m=e("Ip0R"),v=e("M2Lx"),y=e("4c35"),C=e("p/eS"),w=e("2FIb"),j=e("HoaW"),F=e("ZYCi"),R=e("PNUx");e.d(t,"TextareaDemoModuleNgFactory",function(){return x});var x=l.qb(a,[],function(n){return l.Cb([l.Db(512,l.j,l.bb,[[8,[r.a,i.a,g]],[3,l.j],l.y]),l.Db(4608,m.n,m.m,[l.v,[2,m.A]]),l.Db(4608,d.v,d.v,[]),l.Db(4608,v.a,v.a,[]),l.Db(1073742336,m.c,m.c,[]),l.Db(1073742336,d.u,d.u,[]),l.Db(1073742336,d.l,d.l,[]),l.Db(1073742336,y.e,y.e,[]),l.Db(1073742336,v.b,v.b,[]),l.Db(1073742336,C.a,C.a,[]),l.Db(1073742336,w.a,w.a,[]),l.Db(1073742336,j.a,j.a,[]),l.Db(1073742336,F.q,F.q,[[2,F.v],[2,F.m]]),l.Db(1073742336,a,a,[]),l.Db(1024,F.i,function(){return[[{path:"",component:R.a,data:s}]]},[])])})},gW3m:function(n,t,e){"use strict";e.d(t,"c",function(){return o}),e.d(t,"b",function(){return s}),e("iSCa");var l=e("pIVY");function o(){return new l.c}e.d(t,"a",function(){return l.c}),e("XIT8");var s=function(){return function(){}}()},iSCa:function(n,t,e){"use strict";e.d(t,"a",function(){return o});var l=e("p0Sj"),o=(e("pIVY"),function(){function n(n,t,e,l){var o=this;this.config=n,this.elementRef=t,this.renderer=e,this.cdRef=l,this.focused=!1,this.float=!1,n&&(this.globalMode=n.mode,n.modeChange.subscribe(function(n){o.globalMode=n,o.cdRef.markForCheck()}))}return Object.defineProperty(n.prototype,"mode",{get:function(){return this.localMode||this.globalMode||"float"},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"active",{get:function(){return(this.config||this.hasMaterialDirective)&&this.input},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"hasMaterialDirective",{get:function(){return this.elementRef.nativeElement.hasAttribute("vclMaterial")},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"classMaterial",{get:function(){return this.active&&"disabled"!==this.mode},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"classMaterialFloatingLabel",{get:function(){return this.active&&("static"===this.mode||"float"===this.mode&&this.float)},enumerable:!0,configurable:!0}),n.prototype.ngAfterViewInit=function(){var n=this;this.active&&this.input.stateChanged.pipe(Object(l.a)(void 0)).subscribe(function(){n.input.materialModifierClass&&n._currentModifierClass!==n.input.materialModifierClass?(n._currentModifierClass&&n.renderer.removeClass(n.elementRef.nativeElement,n._currentModifierClass),n.renderer.addClass(n.elementRef.nativeElement,n.input.materialModifierClass)):!n.input.materialModifierClass&&n._currentModifierClass&&n.renderer.removeClass(n.elementRef.nativeElement,n._currentModifierClass),n.float=n.input.isLabelFloating,n.focused=n.input.isLabelFloating&&n.input.isFocused})},n}())},mbT9:function(n,t,e){"use strict";function l(n,t){return n&&t&&t.ngControl&&t.ngControl.invalid&&(t.ngControl.touched||n.submitted)}e.d(t,"b",function(){return l}),e.d(t,"a",function(){return o}),e("2JrD"),e("xsjC");var o=function(){return function(){}}()},pIVY:function(n,t,e){"use strict";e.d(t,"a",function(){return s}),e.d(t,"b",function(){return a}),e.d(t,"c",function(){return r});var l=e("CcnG"),o=e("K9Ia"),s=new l.q("vcl-form-control-material-host"),a=new l.q("vcl-form-control-material-input"),r=function(){function n(n){this._modeChangeEmitter=new o.a,this.modeChange=this._modeChangeEmitter.asObservable(),this._mode=n||"float"}return Object.defineProperty(n.prototype,"mode",{get:function(){return this._mode},enumerable:!0,configurable:!0}),n.prototype.setMode=function(n){this._mode=n,this._modeChangeEmitter.next(n)},n}()},"q1D+":function(n,t,e){"use strict";e.d(t,"a",function(){return s});var l=e("K9Ia"),o=(e("mbT9"),e("gW3m"),0),s=function(){function n(n,t,e,s,a){this.elementRef=n,this.cdRef=t,this.ngControl=e,this.formControlHost=s,this._errorStateAgent=a,this.stateChangedEmitter=new l.a,this._focused=!1,this.generatedId="vcl_textarea_"+o++,this.controlType="textarea",this.stateChanged=this.stateChangedEmitter.asObservable(),this.classVclInput=!0,this.disabled=!1,this.autoselect=!1,this.autogrow=!1}return Object.defineProperty(n.prototype,"elementId",{get:function(){return this.id||this.generatedId},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"isDisabled",{get:function(){return this.disabled},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"isFocused",{get:function(){return this._focused},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"isLabelFloating",{get:function(){return this.isFocused||this.value.length>0},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"value",{get:function(){return this.elementRef.nativeElement.value||""},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"hasError",{get:function(){var n=this.errorStateAgent||this._errorStateAgent;return!!n&&n(this.formControlHost,this)},enumerable:!0,configurable:!0}),n.prototype.onChange=function(){this.setRows(this.elementRef&&this.elementRef.nativeElement.value),this.stateChangedEmitter.next()},n.prototype.onFocus=function(){this._focused=!0,this.stateChangedEmitter.next()},n.prototype.onBlur=function(){this._focused=!1,this.stateChangedEmitter.next()},n.prototype.ngOnChanges=function(n){"value"in n&&this.setRows(n.value.currentValue)},n.prototype.ngDoCheck=function(){this.setRows(this.elementRef&&this.elementRef.nativeElement.value)},n.prototype.ngAfterViewInit=function(){this.setRows(this.elementRef&&this.elementRef.nativeElement.value)},n.prototype.onLabelClick=function(n){this.elementRef.nativeElement.focus()},n.prototype.setRows=function(n){if(this.autogrow&&"string"==typeof n){var t=n.split("\n").length+1;this.rows="number"==typeof this.minRows&&t<this.minRows?this.minRows:"number"==typeof this.maxRows&&t>this.maxRows?this.maxRows:t}},n.prototype.notifyFormControlLabelClick=function(n){this.elementRef.nativeElement.focus()},n.prototype.ngOnDestroy=function(){this.stateChangedEmitter&&this.stateChangedEmitter.complete()},n}()},xsjC:function(n,t,e){"use strict";e.d(t,"a",function(){return s}),e("2JrD");var l=e("K9Ia"),o=e("p0Sj"),s=function(){function n(n,t,e){this.elementRef=n,this.formGroup=t,this.ngForm=e,this._stateChangedEmitter=new l.a,this.stateChange=this._stateChangedEmitter.asObservable()}return Object.defineProperty(n.prototype,"classVclFormControlGroup",{get:function(){return!this.classVclFormInlineControlGroup},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"classVclFormInlineControlGroup",{get:function(){return"vcl-form-inline-control-group"===this.elementRef.nativeElement.tagName.toLowerCase()},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"attrVCLControlType",{get:function(){return this.input&&this.input.controlType},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"_form",{get:function(){return this.ngForm||this.formGroup},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"pending",{get:function(){return this._form.pending},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"invalid",{get:function(){return this._form.invalid},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"valid",{get:function(){return this._form.valid},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"touched",{get:function(){return this._form.touched},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"untouched",{get:function(){return this._form.untouched},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"submitted",{get:function(){return this._form.submitted},enumerable:!0,configurable:!0}),n.prototype.ngAfterViewInit=function(){this.input&&this.input.stateChanged.pipe(Object(o.a)(void 0)).subscribe(this._stateChangedEmitter)},n.prototype.ngOnDestroy=function(){return this._stateChangedEmitter.complete()},n}()}}]);