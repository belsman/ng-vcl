(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{"2JrD":function(n,l,t){"use strict";t.d(l,"b",function(){return e}),t.d(l,"a",function(){return a}),t.d(l,"c",function(){return u});var s=t("8Y7J");const e=new s.p("vcl-form-control-host"),a=new s.p("vcl-form-control-error-state-agent"),u=new s.p("vcl-form-control-input")},"8snM":function(n,l,t){"use strict";t.d(l,"a",function(){return s}),t("TzFS");class s{}},JJvK:function(n,l){n.exports='<span class="hljs-keyword">import</span> { Component, OnInit } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/core\'</span>;\n\n<span class="hljs-meta">@Component</span>({\n  templateUrl: <span class="hljs-string">\'demo.component.html\'</span>\n})\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> FlipSwitchDemoComponent {\n  value1 = <span class="hljs-literal">false</span>;\n  value2 = <span class="hljs-literal">false</span>;\n}\n'},TzFS:function(n,l,t){"use strict";t.d(l,"a",function(){return u});var s=t("8Y7J"),e=(t("mbT9"),t("XNiG"));let a=0;class u{constructor(n,l,t,u){this.cdRef=n,this.ngControl=l,this.formControlHost=t,this._errorStateAgent=u,this._hostClasses=!0,this._attrRole="button",this._attrTouchAction="pan-y",this.uniqueId="vcl_flipswitch_"+a++,this._disabled=!1,this._focused=!1,this.stateChangedEmitter=new e.a,this.stateChanged=this.stateChangedEmitter.asObservable(),this.controlType="flip-switch",this.tabindex=0,this.onLabel="On",this.offLabel="Off",this.value=!1,this.disabled=!1,this.valueChange=new s.m,this.onTouchedCallback=(()=>{}),this.onChangeCallback=(()=>{}),this.ngControl&&(this.ngControl.valueAccessor=this)}get elementId(){return this.id||this.uniqueId}get isDisabled(){return this.disabled||this._disabled}get hasError(){const n=this.errorStateAgent||this._errorStateAgent;return!!n&&n(this.formControlHost,this)}get isFocused(){return this._focused}onClick(){this.toggle(),this.onTouchedCallback()}onFocus(){this._focused=!0,this.stateChangedEmitter.next()}onBlur(){this._focused=!1,this.onTouchedCallback(),this.stateChangedEmitter.next()}keydown(n){switch(n.code){case"Space":n.preventDefault(),this.toggle();break;case"ArrowLeft":n.preventDefault(),this.value||this.toggle();break;case"ArrowRight":n.preventDefault(),this.value&&this.toggle()}}toggle(){this.disabled||(this.value=!this.value,this.valueChange.emit(this.value),this.onChangeCallback&&this.onChangeCallback(this.value))}onLabelClick(n){this.toggle()}ngOnDestroy(){this.stateChangedEmitter&&this.stateChangedEmitter.complete()}writeValue(n){this.value=n,this.cdRef.markForCheck()}registerOnChange(n){this.onChangeCallback=n}registerOnTouched(n){this.onTouchedCallback=n}setDisabledState(n){this._disabled=n,this.cdRef.markForCheck()}}},"g++R":function(n,l,t){"use strict";t.r(l);var s=t("8Y7J");class e{constructor(){this.value1=!1,this.value2=!1}}const a={demo:function(){return{label:"Flip-Switch",tabs:{Demo:e,"README.md":{type:"md",content:t("o4r7")},"demo.component.html":{type:"pre",content:t("l/Db")},"demo.component.ts":{type:"pre",content:t("JJvK")}}}}};class u{}var o=t("pMnS"),i=t("8Ip6"),r=t("oHYS"),c=t("2JrD"),h=t("TzFS"),p=s.nb({encapsulation:2,styles:[],data:{}});function d(n){return s.Ib(0,[(n()(),s.pb(0,0,null,null,1,"h3",[],null,null,null,null,null)),(n()(),s.Gb(-1,null,["Basic"])),(n()(),s.pb(2,0,null,null,2,"vcl-flip-switch",[],[[2,"vclFlipSwitch",null],[1,"role",0],[1,"touch-action",0],[1,"id",0],[8,"tabIndex",0],[2,"vclFlipSwitchPressed",null],[1,"aria-pressed",0],[2,"vclDisabled",null],[2,"vclError",null]],[[null,"valueChange"],[null,"click"],[null,"focus"],[null,"blur"],[null,"keydown"]],function(n,l,t){var e=!0,a=n.component;return"click"===l&&(e=!1!==s.zb(n,4).onClick()&&e),"focus"===l&&(e=!1!==s.zb(n,4).onFocus()&&e),"blur"===l&&(e=!1!==s.zb(n,4).onBlur()&&e),"keydown"===l&&(e=!1!==s.zb(n,4).keydown(t)&&e),"valueChange"===l&&(e=!1!==(a.value1=t)&&e),e},r.b,r.a)),s.Db(6144,null,c.c,null,[h.a]),s.ob(4,180224,null,0,h.a,[s.h,[8,null],[2,c.b],[2,c.a]],{value:[0,"value"]},{valueChange:"valueChange"}),(n()(),s.pb(5,0,null,null,0,"br",[],null,null,null,null,null)),(n()(),s.Gb(6,null,["\nCurrent value: "," "])),(n()(),s.pb(7,0,null,null,1,"h3",[],null,null,null,null,null)),(n()(),s.Gb(-1,null,["With custom labels"])),(n()(),s.pb(9,0,null,null,2,"vcl-flip-switch",[["offLabel","No"],["onLabel","Yes"]],[[2,"vclFlipSwitch",null],[1,"role",0],[1,"touch-action",0],[1,"id",0],[8,"tabIndex",0],[2,"vclFlipSwitchPressed",null],[1,"aria-pressed",0],[2,"vclDisabled",null],[2,"vclError",null]],[[null,"valueChange"],[null,"click"],[null,"focus"],[null,"blur"],[null,"keydown"]],function(n,l,t){var e=!0,a=n.component;return"click"===l&&(e=!1!==s.zb(n,11).onClick()&&e),"focus"===l&&(e=!1!==s.zb(n,11).onFocus()&&e),"blur"===l&&(e=!1!==s.zb(n,11).onBlur()&&e),"keydown"===l&&(e=!1!==s.zb(n,11).keydown(t)&&e),"valueChange"===l&&(e=!1!==(a.value2=t)&&e),e},r.b,r.a)),s.Db(6144,null,c.c,null,[h.a]),s.ob(11,180224,null,0,h.a,[s.h,[8,null],[2,c.b],[2,c.a]],{onLabel:[0,"onLabel"],offLabel:[1,"offLabel"],value:[2,"value"]},{valueChange:"valueChange"}),(n()(),s.pb(12,0,null,null,0,"br",[],null,null,null,null,null)),(n()(),s.Gb(13,null,["\nCurrent value: ","\n"]))],function(n,l){var t=l.component;n(l,4,0,t.value1),n(l,11,0,"Yes","No",t.value2)},function(n,l){var t=l.component;n(l,2,0,s.zb(l,4)._hostClasses,s.zb(l,4)._attrRole,s.zb(l,4)._attrTouchAction,s.zb(l,4).elementId,s.zb(l,4).tabindex,s.zb(l,4).value,s.zb(l,4).value,s.zb(l,4).isDisabled,s.zb(l,4).hasError),n(l,6,0,t.value1),n(l,9,0,s.zb(l,11)._hostClasses,s.zb(l,11)._attrRole,s.zb(l,11)._attrTouchAction,s.zb(l,11).elementId,s.zb(l,11).tabindex,s.zb(l,11).value,s.zb(l,11).value,s.zb(l,11).isDisabled,s.zb(l,11).hasError),n(l,13,0,t.value2)})}function b(n){return s.Ib(0,[(n()(),s.pb(0,0,null,null,1,"ng-component",[],null,null,null,d,p)),s.ob(1,49152,null,0,e,[],null,null)],null,null)}var v=s.lb("ng-component",e,b,{},{},[]),g=t("SVse"),f=t("s7LF"),m=t("POq0"),C=t("zMNK"),w=t("p/eS"),j=t("2FIb"),k=t("8snM"),y=t("iInd"),z=t("PNUx");t.d(l,"FlipSwitchDemoModuleNgFactory",function(){return _});var _=s.mb(u,[],function(n){return s.wb([s.xb(512,s.j,s.Z,[[8,[o.a,i.a,v]],[3,s.j],s.w]),s.xb(4608,g.n,g.m,[s.t,[2,g.A]]),s.xb(4608,f.v,f.v,[]),s.xb(4608,m.a,m.a,[]),s.xb(1073742336,g.c,g.c,[]),s.xb(1073742336,f.u,f.u,[]),s.xb(1073742336,f.l,f.l,[]),s.xb(1073742336,C.e,C.e,[]),s.xb(1073742336,m.b,m.b,[]),s.xb(1073742336,w.a,w.a,[]),s.xb(1073742336,j.a,j.a,[]),s.xb(1073742336,k.a,k.a,[]),s.xb(1073742336,y.q,y.q,[[2,y.v],[2,y.m]]),s.xb(1073742336,u,u,[]),s.xb(1024,y.i,function(){return[[{path:"",component:z.a,data:a}]]},[])])})},"l/Db":function(n,l){n.exports='<span class="hljs-tag">&lt;<span class="hljs-name">h3</span>&gt;</span>Basic<span class="hljs-tag">&lt;/<span class="hljs-name">h3</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">vcl-flip-switch</span> [(<span class="hljs-attr">value</span>)]=<span class="hljs-string">"value1"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vcl-flip-switch</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span>\nCurrent value: {{value1}}\n\n<span class="hljs-tag">&lt;<span class="hljs-name">h3</span>&gt;</span>With custom labels<span class="hljs-tag">&lt;/<span class="hljs-name">h3</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">vcl-flip-switch</span> <span class="hljs-attr">onLabel</span>=<span class="hljs-string">"Yes"</span> <span class="hljs-attr">offLabel</span>=<span class="hljs-string">"No"</span> [(<span class="hljs-attr">value</span>)]=<span class="hljs-string">"value2"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vcl-flip-switch</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span>\nCurrent value: {{value2}}\n'},mbT9:function(n,l,t){"use strict";function s(n,l){return n&&l&&l.ngControl&&l.ngControl.invalid&&(l.ngControl.touched||n.submitted)}t.d(l,"b",function(){return s}),t.d(l,"a",function(){return e}),t("2JrD"),t("xsjC");class e{}},o4r7:function(n,l){n.exports='<h1 id="vcl-flip-switch">vcl-flip-switch</h1>\n<h2 id="usage">Usage</h2>\n<pre class="hljs"><code>&lt;vcl-flip-switch [(value)]=&quot;value&quot; onLabel=&quot;On&quot; offLabel=&quot;Off&quot;&gt;&lt;/vcl-flip-switch&gt;</code></pre>\n<h3 id="api">API</h3>\n<h4 id="attributes">Attributes</h4>\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Type</th>\n<th>Default</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody><tr>\n<td><code>value</code></td>\n<td>boolean</td>\n<td>false</td>\n<td>set the value</td>\n</tr>\n<tr>\n<td><code>onLabel</code></td>\n<td>string</td>\n<td>&apos;On&apos;</td>\n<td>The label for &quot;on&quot;</td>\n</tr>\n<tr>\n<td><code>offLabel</code></td>\n<td>string</td>\n<td>&apos;Off&apos;</td>\n<td>The label for &quot;off&quot;</td>\n</tr>\n</tbody></table>\n<h4 id="events">Events</h4>\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Type</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody><tr>\n<td><code>valueChange</code></td>\n<td>any | any[]</td>\n<td>emits the new value after a change</td>\n</tr>\n</tbody></table>\n'},oHYS:function(n,l,t){"use strict";t.d(l,"a",function(){return e}),t.d(l,"b",function(){return a});var s=t("8Y7J"),e=(t("2JrD"),t("TzFS"),s.nb({encapsulation:2,styles:[],data:{}}));function a(n){return s.Ib(2,[(n()(),s.pb(0,0,null,null,6,"label",[["class","vclFlipSwitchLabel"]],null,null,null,null,null)),(n()(),s.pb(1,0,null,null,4,"div",[["class","vclFlipSwitchTrack"]],null,null,null,null,null)),(n()(),s.pb(2,0,null,null,1,"div",[["class","vclFlipSwitchActive"]],[[1,"aria-hidden",0]],null,null,null,null)),(n()(),s.Gb(3,null,["",""])),(n()(),s.pb(4,0,null,null,1,"div",[["class","vclFlipSwitchInactive"]],[[1,"aria-hidden",0]],null,null,null,null)),(n()(),s.Gb(5,null,["",""])),(n()(),s.pb(6,0,null,null,0,"div",[["class","vclFlipSwitchKnob"]],null,null,null,null,null))],null,function(n,l){var t=l.component;n(l,2,0,!t.value),n(l,3,0,t.onLabel),n(l,4,0,t.value),n(l,5,0,t.offLabel)})}},xsjC:function(n,l,t){"use strict";t.d(l,"a",function(){return a}),t("2JrD");var s=t("XNiG"),e=t("JX91");class a{constructor(n,l,t){this.elementRef=n,this.formGroup=l,this.ngForm=t,this._stateChangedEmitter=new s.a,this.stateChange=this._stateChangedEmitter.asObservable()}get classVclFormControlGroup(){return!this.classVclFormInlineControlGroup}get classVclFormInlineControlGroup(){return"vcl-form-inline-control-group"===this.elementRef.nativeElement.tagName.toLowerCase()}get attrVCLControlType(){return this.input&&this.input.controlType}get _form(){return this.ngForm||this.formGroup}get pending(){return this._form.pending}get invalid(){return this._form.invalid}get valid(){return this._form.valid}get touched(){return this._form.touched}get untouched(){return this._form.untouched}get submitted(){return this._form.submitted}ngAfterViewInit(){this.input&&this.input.stateChanged.pipe(Object(e.a)(void 0)).subscribe(this._stateChangedEmitter)}ngOnDestroy(){return this._stateChangedEmitter.complete()}}}}]);