(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{MElT:function(s,a,l){"use strict";l.r(a);var n=l("ofXK"),t=l("3Pt+"),p=l("tyNb"),e=l("19H1"),c=l("2FIb"),r=l("fXoL"),o=l("xsjC"),h=l("iSCa"),i=l("7FAN"),j=l("EaCA"),g=l("8Ii/"),m=l("btmi"),b=l("XIT8"),u=l("p31x"),d=l("1/Kn"),v=l("QI9E"),f=l("q1D+"),w=l("jPeI"),R=l("VSXH"),k=l("nj5o"),y=l("9Rb9"),T=l("LpWs"),C=l("5gLr"),A=l("I9Sx"),N=l("zDo1"),F=l("StUX"),M=l("6B8K");const q=["form"];let D=(()=>{class s{constructor(s){this.notifier=s,this.material="float",this.defaultValues={perks:[]},this.formGroup=new t.j({name:new t.g("",[t.F.required,t.F.minLength(2)]),dob:new t.g(null,[t.F.required]),description:new t.g("",[]),password:new t.g("",[t.F.required]),email:new t.g("",[t.F.email]),perks:new t.g(this.defaultValues.perks,[this.validatePerks.bind(this)])},[])}validatePerks(s){return Array.isArray(s.value)&&2===s.value.length?null:{perks:!0}}onSubmit(){this.formGroup.valid?this.notifier.success("Hero created"):this.notifier.error("Hero invalid")}onReset(){this.form.resetForm(this.defaultValues),this.notifier.info("Hero reset")}}return s.\u0275fac=function(a){return new(a||s)(r.Mb(e.u))},s.\u0275cmp=r.Gb({type:s,selectors:[["ng-component"]],viewQuery:function(s,a){var l;1&s&&r.Fc(q,!0),2&s&&r.nc(l=r.cc())&&(a.form=l.first)},decls:107,vars:22,consts:[["vclFormControlLabel",""],[3,"ngModel","ngModelChange"],["vclRadioButtonLabel",""],["value","float"],["value","static"],["value","disabled"],["novalidate","",1,"form",3,"formGroup","vclMaterial","submit"],["form","ngForm"],["vclInput","","formControlName","name","placeholder","Name of the hero"],["error","required"],["error","minlength"],["vclInput","","formControlName","description","placeholder","Description of the hero",3,"autogrow","minRows","maxRows"],["formControlName","dob","placeholder","MM/DD/YYYY"],["vclPrepend","","icon","fas:envelope"],["vclInput","","formControlName","email","placeholder","Email of the hero"],["error","email"],["vclInput","","formControlName","password","placeholder","Enter password"],["placeholder","Select two perks"],["formControlName","perks","selectionMode","multiple"],[3,"value"],["error","perks"],[1,"loose-button-group"],["vcl-button","","type","submit",1,"emphasized"],["vcl-button","","type","button",3,"click"],[1,"value"]],template:function(s,a){if(1&s&&(r.Tb(0,"vcl-form-control-group"),r.Tb(1,"label",0),r.Ac(2,"Material input mode"),r.Rb(),r.Tb(3,"vcl-radio-group",1),r.bc("ngModelChange",(function(s){return a.material=s})),r.Tb(4,"label",2),r.Nb(5,"vcl-radio-button",3),r.Ac(6," Float "),r.Rb(),r.Tb(7,"label",2),r.Nb(8,"vcl-radio-button",4),r.Ac(9," Static "),r.Rb(),r.Tb(10,"label",2),r.Nb(11,"vcl-radio-button",5),r.Ac(12," Disabled "),r.Rb(),r.Rb(),r.Rb(),r.Tb(13,"form",6,7),r.bc("submit",(function(s){return a.onSubmit()})),r.Tb(15,"h2"),r.Ac(16,"Create a hero"),r.Rb(),r.Tb(17,"vcl-form-control-group"),r.Tb(18,"label",0),r.Ac(19,"Name"),r.Nb(20,"vcl-required"),r.Rb(),r.Nb(21,"input",8),r.Tb(22,"vcl-hint-error",9),r.Ac(23,"Name is required"),r.Rb(),r.Tb(24,"vcl-hint-error",10),r.Ac(25,"Name must have a length of at least 2 characters"),r.Rb(),r.Rb(),r.Tb(26,"vcl-form-control-group"),r.Tb(27,"label",0),r.Ac(28,"Description"),r.Rb(),r.Nb(29,"textarea",11),r.Rb(),r.Tb(30,"vcl-form-control-group"),r.Tb(31,"label",0),r.Ac(32,"Date of Birth"),r.Rb(),r.Tb(33,"vcl-datepicker",12),r.Nb(34,"vcl-calendar"),r.Rb(),r.Rb(),r.Tb(35,"vcl-form-control-group"),r.Tb(36,"label",0),r.Ac(37,"Email"),r.Rb(),r.Tb(38,"vcl-embedded-input-group"),r.Nb(39,"vcl-icon",13),r.Nb(40,"input",14),r.Rb(),r.Tb(41,"vcl-hint-error",9),r.Ac(42,"Email is required"),r.Rb(),r.Tb(43,"vcl-hint-error",15),r.Ac(44,"Invalid Email address"),r.Rb(),r.Rb(),r.Tb(45,"vcl-form-control-group"),r.Tb(46,"label",0),r.Ac(47,"Password"),r.Nb(48,"vcl-required"),r.Rb(),r.Tb(49,"vcl-password-input"),r.Nb(50,"input",16),r.Rb(),r.Tb(51,"vcl-hint-error",9),r.Ac(52,"Password is required"),r.Rb(),r.Rb(),r.Tb(53,"vcl-form-control-group"),r.Tb(54,"label",0),r.Ac(55,"Select perks"),r.Nb(56,"vcl-required"),r.Rb(),r.Tb(57,"vcl-select",17),r.Tb(58,"vcl-select-list",18),r.Tb(59,"vcl-select-list-item",19),r.Tb(60,"vcl-select-list-label"),r.Ac(61,"Snake Eater"),r.Rb(),r.Tb(62,"vcl-select-list-sublabel"),r.Ac(63,"It gives you a 25% increase to your poison resistance.\t"),r.Rb(),r.Rb(),r.Tb(64,"vcl-select-list-item",19),r.Tb(65,"vcl-select-list-label"),r.Ac(66,"Swift Learner"),r.Rb(),r.Tb(67,"vcl-select-list-sublabel"),r.Ac(68,"Swift Learner\tWhenever you gain experience, you'll receive 5% more experience per level of the perk."),r.Rb(),r.Rb(),r.Tb(69,"vcl-select-list-item",19),r.Tb(70,"vcl-select-list-label"),r.Ac(71,"Toughness"),r.Rb(),r.Tb(72,"vcl-select-list-sublabel"),r.Ac(73,"It adds 10% to your general damage resistance per level."),r.Rb(),r.Rb(),r.Tb(74,"vcl-select-list-item",19),r.Tb(75,"vcl-select-list-label"),r.Ac(76,"Explorer"),r.Rb(),r.Tb(77,"vcl-select-list-sublabel"),r.Ac(78,"You'll get more random encounters with this perk."),r.Rb(),r.Rb(),r.Rb(),r.Rb(),r.Tb(79,"vcl-hint-error",20),r.Ac(80,"You must select two perks"),r.Rb(),r.Rb(),r.Tb(81,"div",21),r.Tb(82,"button",22),r.Ac(83,"Submit"),r.Rb(),r.Tb(84,"button",23),r.bc("click",(function(s){return a.onReset()})),r.Ac(85,"Reset"),r.Rb(),r.Rb(),r.Tb(86,"div",24),r.Tb(87,"h4"),r.Ac(88,"Form"),r.Rb(),r.Tb(89,"pre"),r.Ac(90),r.Rb(),r.Tb(91,"pre"),r.Ac(92),r.Rb(),r.Tb(93,"pre"),r.Ac(94),r.Rb(),r.Tb(95,"pre"),r.Ac(96),r.Rb(),r.Tb(97,"pre"),r.Ac(98),r.Rb(),r.Tb(99,"pre"),r.Ac(100),r.Rb(),r.Tb(101,"pre"),r.Ac(102),r.fc(103,"json"),r.Rb(),r.Tb(104,"pre"),r.Ac(105),r.fc(106,"json"),r.Rb(),r.Rb(),r.Rb()),2&s){const s=r.oc(14);r.zb(3),r.jc("ngModel",a.material),r.zb(10),r.jc("formGroup",a.formGroup)("vclMaterial",a.material),r.zb(16),r.jc("autogrow",!0)("minRows",3)("maxRows",10),r.zb(30),r.jc("value","snakeeater"),r.zb(5),r.jc("value","swiftlearner"),r.zb(5),r.jc("value","toughness"),r.zb(5),r.jc("value","explorer"),r.zb(16),r.Cc("status: ",s.status,""),r.zb(2),r.Cc("valid: ",s.valid,""),r.zb(2),r.Cc("dirty: ",s.dirty,""),r.zb(2),r.Cc("submitted: ",s.submitted,""),r.zb(2),r.Cc("touched: ",s.touched,""),r.zb(2),r.Cc("pristine: ",s.pristine,""),r.zb(2),r.Cc("errors: ",r.gc(103,18,s.errors),""),r.zb(3),r.Cc("value: ",r.gc(106,20,s.value),"")}},directives:[o.a,h.a,i.a,j.a,t.r,t.u,g.a,m.a,t.H,t.s,b.a,t.k,u.a,d.b,t.c,t.i,v.a,f.a,w.a,R.a,k.a,y.a,T.b,C.a,A.a,N.a,F.a,F.b,F.c,M.b],pipes:[n.k],encapsulation:2}),s})();function I(){return{label:"Material Design Inputs",tabs:{Demo:D,"README.md":{type:"md",content:'<h1 id="material-design-inputs">Material Design Inputs</h1>\n<p>Material design inputs</p>\n<h2 id="usage">Usage</h2>\n<pre class="hljs"><span class="hljs-keyword">import</span> { VCLMaterialDesignInputsModule } <span class="hljs-keyword">from</span> <span class="hljs-string">&apos;@vcl/ng-vcl&apos;</span>;\n\n@NgModule({\n  <span class="hljs-attr">imports</span>: [ VCLMaterialDesignInputsModule ],\n  ...\n})\n<span class="hljs-keyword">export</span> <span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">AppComponent</span> </span>{}</pre>\n<pre class="hljs"><span class="hljs-comment">&lt;!-- Enables material mode for all supported input controls --&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">form</span> <span class="hljs-attr">vclForm</span> [<span class="hljs-attr">formGroup</span>]=<span class="hljs-string">&quot;formGroup&quot;</span> <span class="hljs-attr">vclMaterial</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">vcl-form-control-group</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">label</span> <span class="hljs-attr">vclFormControlLabel</span>&gt;</span>Name<span class="hljs-tag">&lt;/<span class="hljs-name">label</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">input</span> <span class="hljs-attr">vclInput</span> <span class="hljs-attr">formControlName</span>=<span class="hljs-string">&quot;name&quot;</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;Name&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">vcl-form-control-group</span>&gt;</span>\n  <span class="hljs-comment">&lt;!-- Override material mode for description --&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">vcl-form-control-group</span> <span class="hljs-attr">vclMaterial</span>=<span class="hljs-string">&quot;static&quot;</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">label</span> <span class="hljs-attr">vclFormControlLabel</span>&gt;</span>Description<span class="hljs-tag">&lt;/<span class="hljs-name">label</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">input</span> <span class="hljs-attr">vclInput</span> <span class="hljs-attr">formControlName</span>=<span class="hljs-string">&quot;description&quot;</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;Name&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">vcl-form-control-group</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">form</span>&gt;</span></pre>\n<h4 id="formvclmaterial-attributes">form[vclMaterial] attributes</h4>\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Type</th>\n<th>Default</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody><tr>\n<td><code>vclMaterial</code></td>\n<td>&apos;float&apos; | &apos;static&apos; | &apos;disabled&apos;</td>\n<td>&apos;float&apos;</td>\n<td>Material mode</td>\n</tr>\n</tbody></table>\n<h4 id="vcl-form-control-groupvclmaterial-attributes">vcl-form-control-group[vclMaterial] attributes</h4>\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Type</th>\n<th>Default</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody><tr>\n<td><code>vclMaterial</code></td>\n<td>&apos;float&apos; | &apos;static&apos; | &apos;disabled&apos;</td>\n<td>&apos;float&apos;</td>\n<td>Material mode</td>\n</tr>\n</tbody></table>\n'},"demo.component.html":{type:"pre",content:l("uFiD")},"demo.component.ts":{type:"pre",content:l("nv3G")}}}}l.d(a,"demo",(function(){return I})),l.d(a,"MaterialDesignInputsDemoModule",(function(){return L}));let L=(()=>{class s{}return s.\u0275mod=r.Kb({type:s}),s.\u0275inj=r.Jb({factory:function(a){return new(a||s)},imports:[[n.c,t.m,t.B,c.b,e.C,e.I,e.B,e.bb,e.Q,e.Y,e.P,e.O,e.db,e.gb,e.W,e.G,e.M,e.T,p.g.forChild([{path:"",component:c.a,data:{demo:I}}])]]}),s})()},nv3G:function(s,a){s.exports='<span class="hljs-keyword">import</span> { Component, ViewChild } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/core\'</span>;\n<span class="hljs-keyword">import</span> { FormGroup, Validators, AbstractControl, FormControl, ValidationErrors, NgForm } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/forms\'</span>;\n<span class="hljs-keyword">import</span> { NotifierService, FormControlErrorStateAgent, FormControlHost, FormControlInput } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@vcl/ng-vcl\'</span>;\n\n<span class="hljs-meta">@Component</span>({\n  templateUrl: <span class="hljs-string">\'demo.component.html\'</span>\n})\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> MaterialDesignInputsDemoComponent {\n\n  <span class="hljs-keyword">constructor</span>(<span class="hljs-params"><span class="hljs-keyword">private</span> notifier: NotifierService</span>) { }\n\n  material = <span class="hljs-string">\'float\'</span>;\n\n  <span class="hljs-meta">@ViewChild</span>(<span class="hljs-string">\'form\'</span>)\n  form: NgForm;\n\n  defaultValues = {\n    perks: []\n  };\n\n  formGroup = <span class="hljs-keyword">new</span> FormGroup({\n    name: <span class="hljs-keyword">new</span> FormControl(<span class="hljs-string">\'\'</span>, [\n      Validators.required,\n      Validators.minLength(<span class="hljs-number">2</span>),\n    ]),\n    dob: <span class="hljs-keyword">new</span> FormControl(<span class="hljs-literal">null</span>, [\n      Validators.required\n    ]),\n    description: <span class="hljs-keyword">new</span> FormControl(<span class="hljs-string">\'\'</span>, []),\n    password: <span class="hljs-keyword">new</span> FormControl(<span class="hljs-string">\'\'</span>, [\n      Validators.required\n    ]),\n    email: <span class="hljs-keyword">new</span> FormControl(<span class="hljs-string">\'\'</span>, [\n      Validators.email,\n    ]),\n    perks: <span class="hljs-keyword">new</span> FormControl(<span class="hljs-keyword">this</span>.defaultValues.perks, [ <span class="hljs-keyword">this</span>.validatePerks.bind(<span class="hljs-keyword">this</span>) ])\n  }, []);\n\n  validatePerks(c: AbstractControl) {\n    <span class="hljs-keyword">return</span> (<span class="hljs-built_in">Array</span>.isArray(c.value) &amp;&amp; c.value.length === <span class="hljs-number">2</span>) ? <span class="hljs-literal">null</span> : { perks: <span class="hljs-literal">true</span> };\n  }\n\n  onSubmit() {\n    <span class="hljs-keyword">if</span> (<span class="hljs-keyword">this</span>.formGroup.valid) {\n      <span class="hljs-keyword">this</span>.notifier.success(<span class="hljs-string">\'Hero created\'</span>);\n    } <span class="hljs-keyword">else</span> {\n     <span class="hljs-keyword">this</span>.notifier.error(<span class="hljs-string">\'Hero invalid\'</span>);\n    }\n  }\n\n  onReset() {\n    <span class="hljs-keyword">this</span>.form.resetForm(<span class="hljs-keyword">this</span>.defaultValues);\n    <span class="hljs-keyword">this</span>.notifier.info(<span class="hljs-string">\'Hero reset\'</span>);\n  }\n}\n'},uFiD:function(s,a){s.exports='<span class="hljs-tag">&lt;<span class="hljs-name">vcl-form-control-group</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">label</span> <span class="hljs-attr">vclFormControlLabel</span>&gt;</span>Material input mode<span class="hljs-tag">&lt;/<span class="hljs-name">label</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">vcl-radio-group</span> [(<span class="hljs-attr">ngModel</span>)]=<span class="hljs-string">"material"</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">label</span> <span class="hljs-attr">vclRadioButtonLabel</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">vcl-radio-button</span> <span class="hljs-attr">value</span>=<span class="hljs-string">"float"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vcl-radio-button</span>&gt;</span>\n      Float\n    <span class="hljs-tag">&lt;/<span class="hljs-name">label</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">label</span> <span class="hljs-attr">vclRadioButtonLabel</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">vcl-radio-button</span> <span class="hljs-attr">value</span>=<span class="hljs-string">"static"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vcl-radio-button</span>&gt;</span>\n      Static\n    <span class="hljs-tag">&lt;/<span class="hljs-name">label</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">label</span> <span class="hljs-attr">vclRadioButtonLabel</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">vcl-radio-button</span> <span class="hljs-attr">value</span>=<span class="hljs-string">"disabled"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vcl-radio-button</span>&gt;</span>\n      Disabled\n    <span class="hljs-tag">&lt;/<span class="hljs-name">label</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">vcl-radio-group</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">vcl-form-control-group</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">form</span> <span class="hljs-attr">novalidate</span> [<span class="hljs-attr">formGroup</span>]=<span class="hljs-string">"formGroup"</span> #<span class="hljs-attr">form</span>=<span class="hljs-string">"ngForm"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"form"</span> (<span class="hljs-attr">submit</span>)=<span class="hljs-string">"onSubmit()"</span> [<span class="hljs-attr">vclMaterial</span>]=<span class="hljs-string">"material"</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">h2</span>&gt;</span>Create a hero<span class="hljs-tag">&lt;/<span class="hljs-name">h2</span>&gt;</span>\n\n  <span class="hljs-tag">&lt;<span class="hljs-name">vcl-form-control-group</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">label</span> <span class="hljs-attr">vclFormControlLabel</span>&gt;</span>Name<span class="hljs-tag">&lt;<span class="hljs-name">vcl-required</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vcl-required</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">label</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">input</span> <span class="hljs-attr">vclInput</span> <span class="hljs-attr">formControlName</span>=<span class="hljs-string">"name"</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">"Name of the hero"</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">vcl-hint-error</span> <span class="hljs-attr">error</span>=<span class="hljs-string">"required"</span>&gt;</span>Name is required<span class="hljs-tag">&lt;/<span class="hljs-name">vcl-hint-error</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">vcl-hint-error</span> <span class="hljs-attr">error</span>=<span class="hljs-string">"minlength"</span>&gt;</span>Name must have a length of at least 2 characters<span class="hljs-tag">&lt;/<span class="hljs-name">vcl-hint-error</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">vcl-form-control-group</span>&gt;</span>\n\n  <span class="hljs-tag">&lt;<span class="hljs-name">vcl-form-control-group</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">label</span> <span class="hljs-attr">vclFormControlLabel</span>&gt;</span>Description<span class="hljs-tag">&lt;/<span class="hljs-name">label</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">textarea</span> <span class="hljs-attr">vclInput</span> <span class="hljs-attr">formControlName</span>=<span class="hljs-string">"description"</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">"Description of the hero"</span> [<span class="hljs-attr">autogrow</span>]=<span class="hljs-string">"true"</span> [<span class="hljs-attr">minRows</span>]=<span class="hljs-string">"3"</span> [<span class="hljs-attr">maxRows</span>]=<span class="hljs-string">"10"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">textarea</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">vcl-form-control-group</span>&gt;</span>\n\n  <span class="hljs-tag">&lt;<span class="hljs-name">vcl-form-control-group</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">label</span> <span class="hljs-attr">vclFormControlLabel</span>&gt;</span>Date of Birth<span class="hljs-tag">&lt;/<span class="hljs-name">label</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">vcl-datepicker</span> <span class="hljs-attr">formControlName</span>=<span class="hljs-string">"dob"</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">"MM/DD/YYYY"</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">vcl-calendar</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vcl-calendar</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">vcl-datepicker</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">vcl-form-control-group</span>&gt;</span>\n\n  <span class="hljs-tag">&lt;<span class="hljs-name">vcl-form-control-group</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">label</span> <span class="hljs-attr">vclFormControlLabel</span>&gt;</span>Email<span class="hljs-tag">&lt;/<span class="hljs-name">label</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">vcl-embedded-input-group</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">vcl-icon</span> <span class="hljs-attr">vclPrepend</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">"fas:envelope"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vcl-icon</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">input</span> <span class="hljs-attr">vclInput</span> <span class="hljs-attr">formControlName</span>=<span class="hljs-string">"email"</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">"Email of the hero"</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">vcl-embedded-input-group</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">vcl-hint-error</span> <span class="hljs-attr">error</span>=<span class="hljs-string">"required"</span>&gt;</span>Email is required<span class="hljs-tag">&lt;/<span class="hljs-name">vcl-hint-error</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">vcl-hint-error</span> <span class="hljs-attr">error</span>=<span class="hljs-string">"email"</span>&gt;</span>Invalid Email address<span class="hljs-tag">&lt;/<span class="hljs-name">vcl-hint-error</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">vcl-form-control-group</span>&gt;</span>\n\n  <span class="hljs-tag">&lt;<span class="hljs-name">vcl-form-control-group</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">label</span> <span class="hljs-attr">vclFormControlLabel</span>&gt;</span>Password<span class="hljs-tag">&lt;<span class="hljs-name">vcl-required</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vcl-required</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">label</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">vcl-password-input</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">input</span> <span class="hljs-attr">vclInput</span> <span class="hljs-attr">formControlName</span>=<span class="hljs-string">"password"</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">"Enter password"</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">vcl-password-input</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">vcl-hint-error</span> <span class="hljs-attr">error</span>=<span class="hljs-string">"required"</span>&gt;</span>Password is required<span class="hljs-tag">&lt;/<span class="hljs-name">vcl-hint-error</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">vcl-form-control-group</span>&gt;</span>\n\n  <span class="hljs-tag">&lt;<span class="hljs-name">vcl-form-control-group</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">label</span> <span class="hljs-attr">vclFormControlLabel</span>&gt;</span>Select perks<span class="hljs-tag">&lt;<span class="hljs-name">vcl-required</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vcl-required</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">label</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">vcl-select</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">"Select two perks"</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">vcl-select-list</span> <span class="hljs-attr">formControlName</span>=<span class="hljs-string">"perks"</span>  <span class="hljs-attr">selectionMode</span>=<span class="hljs-string">"multiple"</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">vcl-select-list-item</span> [<span class="hljs-attr">value</span>]=<span class="hljs-string">"\'snakeeater\'"</span>&gt;</span>\n          <span class="hljs-tag">&lt;<span class="hljs-name">vcl-select-list-label</span>&gt;</span>Snake Eater<span class="hljs-tag">&lt;/<span class="hljs-name">vcl-select-list-label</span>&gt;</span>\n          <span class="hljs-tag">&lt;<span class="hljs-name">vcl-select-list-sublabel</span>&gt;</span>It gives you a 25% increase to your poison resistance.\t<span class="hljs-tag">&lt;/<span class="hljs-name">vcl-select-list-sublabel</span>&gt;</span>\n        <span class="hljs-tag">&lt;/<span class="hljs-name">vcl-select-list-item</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">vcl-select-list-item</span> [<span class="hljs-attr">value</span>]=<span class="hljs-string">"\'swiftlearner\'"</span>&gt;</span>\n          <span class="hljs-tag">&lt;<span class="hljs-name">vcl-select-list-label</span>&gt;</span>Swift Learner<span class="hljs-tag">&lt;/<span class="hljs-name">vcl-select-list-label</span>&gt;</span>\n          <span class="hljs-tag">&lt;<span class="hljs-name">vcl-select-list-sublabel</span>&gt;</span>Swift Learner\tWhenever you gain experience, you\'ll receive 5% more experience per level of the perk.<span class="hljs-tag">&lt;/<span class="hljs-name">vcl-select-list-sublabel</span>&gt;</span>\n        <span class="hljs-tag">&lt;/<span class="hljs-name">vcl-select-list-item</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">vcl-select-list-item</span> [<span class="hljs-attr">value</span>]=<span class="hljs-string">"\'toughness\'"</span>&gt;</span>\n          <span class="hljs-tag">&lt;<span class="hljs-name">vcl-select-list-label</span>&gt;</span>Toughness<span class="hljs-tag">&lt;/<span class="hljs-name">vcl-select-list-label</span>&gt;</span>\n          <span class="hljs-tag">&lt;<span class="hljs-name">vcl-select-list-sublabel</span>&gt;</span>It adds 10% to your general damage resistance per level.<span class="hljs-tag">&lt;/<span class="hljs-name">vcl-select-list-sublabel</span>&gt;</span>\n        <span class="hljs-tag">&lt;/<span class="hljs-name">vcl-select-list-item</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">vcl-select-list-item</span> [<span class="hljs-attr">value</span>]=<span class="hljs-string">"\'explorer\'"</span>&gt;</span>\n          <span class="hljs-tag">&lt;<span class="hljs-name">vcl-select-list-label</span>&gt;</span>Explorer<span class="hljs-tag">&lt;/<span class="hljs-name">vcl-select-list-label</span>&gt;</span>\n          <span class="hljs-tag">&lt;<span class="hljs-name">vcl-select-list-sublabel</span>&gt;</span>You\'ll get more random encounters with this perk.<span class="hljs-tag">&lt;/<span class="hljs-name">vcl-select-list-sublabel</span>&gt;</span>\n        <span class="hljs-tag">&lt;/<span class="hljs-name">vcl-select-list-item</span>&gt;</span> \n      <span class="hljs-tag">&lt;/<span class="hljs-name">vcl-select-list</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">vcl-select</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">vcl-hint-error</span> <span class="hljs-attr">error</span>=<span class="hljs-string">"perks"</span>&gt;</span>You must select two perks<span class="hljs-tag">&lt;/<span class="hljs-name">vcl-hint-error</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">vcl-form-control-group</span>&gt;</span>\n\n  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"loose-button-group"</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">vcl-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"submit"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"emphasized"</span>&gt;</span>Submit<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">vcl-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"button"</span> (<span class="hljs-attr">click</span>)=<span class="hljs-string">"onReset()"</span>&gt;</span>Reset<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n\n  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"value"</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">h4</span>&gt;</span>Form<span class="hljs-tag">&lt;/<span class="hljs-name">h4</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">pre</span>&gt;</span>status: {{ form.status }}<span class="hljs-tag">&lt;/<span class="hljs-name">pre</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">pre</span>&gt;</span>valid: {{ form.valid }}<span class="hljs-tag">&lt;/<span class="hljs-name">pre</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">pre</span>&gt;</span>dirty: {{ form.dirty }}<span class="hljs-tag">&lt;/<span class="hljs-name">pre</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">pre</span>&gt;</span>submitted: {{ form.submitted }}<span class="hljs-tag">&lt;/<span class="hljs-name">pre</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">pre</span>&gt;</span>touched: {{ form.touched }}<span class="hljs-tag">&lt;/<span class="hljs-name">pre</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">pre</span>&gt;</span>pristine: {{ form.pristine }}<span class="hljs-tag">&lt;/<span class="hljs-name">pre</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">pre</span>&gt;</span>errors: {{ form.errors | json }}<span class="hljs-tag">&lt;/<span class="hljs-name">pre</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">pre</span>&gt;</span>value: {{ form.value | json }}<span class="hljs-tag">&lt;/<span class="hljs-name">pre</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">form</span>&gt;</span>\n'}}]);