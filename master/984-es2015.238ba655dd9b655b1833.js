"use strict";(self.webpackChunkng_vcl=self.webpackChunkng_vcl||[]).push([[984],{16984:function(e,r,t){t.r(r),t.d(r,{FormControlGroupDemoModule:function(){return B},demo:function(){return z}});var l=t(16274),n=t(24988),o=t(95454),i=t(36196),a=t(62518),c=t(84271),s=t(71809),u=t(88460),v=t(89902),m=t(30429),g=t(67811),p=t(81332),d=t(4001),f=t(57120),h=t(852),Z=t(67859),b=t(86729),A=t(20495),q=t(76733),T=t(80224),k=t(39709),_=t(2773),w=t(13744),U=t(69857),x=t(98602),C=t(38834),N=t(54660),y=t(20812),I=t(27823),P=t(30751),F=t(43898),V=t(70820),G=t(32701),E=t(59150),R=t(10275),M=t(19746);const S=["form"];function J(e,r){if(1&e){const e=c.EpF();c.TgZ(0,"vcl-panel-dialog"),c.TgZ(1,"vcl-panel-title"),c._uU(2),c.qZA(),c._uU(3),c.TgZ(4,"button",52),c.NdJ("click",function(){return c.CHM(e),c.oxw(),c.MAs(5).close()}),c._uU(5,"OK"),c.qZA(),c.qZA()}if(2&e){const e=r.header,t=r.text;c.xp6(2),c.Oqu(e),c.xp6(1),c.hij(" ",t," ")}}function Q(e,r){1&e&&(c.TgZ(0,"vcl-form-control-group"),c.TgZ(1,"vcl-label"),c._uU(2,"Leader"),c.qZA(),c._UZ(3,"vcl-flip-switch",53),c.qZA())}function L(e,r){if(1&e&&(c.TgZ(0,"vcl-hint"),c._uU(1),c.qZA()),2&e){const e=c.oxw();c.xp6(1),c.AsE("",e.skillPoints," of ",e.skillPointsMax," skill points used")}}function Y(e,r){if(1&e&&(c.TgZ(0,"vcl-hint-warning"),c._uU(1),c.qZA()),2&e){const e=c.oxw();c.xp6(1),c.AsE("",e.skillPoints," of ",e.skillPointsMax," skill points used")}}function D(e,r){if(1&e&&(c.TgZ(0,"vcl-hint-error"),c._uU(1),c.qZA()),2&e){const e=c.oxw();c.xp6(1),c.AsE("",e.skillPoints," of ",e.skillPointsMax," skill points used")}}const j=function(){return{width:"25em"}};let H=(()=>{class e{constructor(e,r){this.notifier=e,this.da=r,this.datePattern=this.da.pattern("date"),this.skillPointsMax=10,this.defaultValues={level:1,leader:!1,hitpoints:10,strength:3,agility:3,intelligence:3,perks:[]},this.formGroup=new n.cw({name:new n.NI("",[n.kI.required,n.kI.minLength(2)]),description:new n.NI("",[]),dob:new n.NI(null,[n.kI.required]),password:new n.NI("",[n.kI.required,n.kI.pattern("(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-zd$@$!%*?&].{8,}")]),picture:new n.NI(null,[]),level:new n.NI(this.defaultValues.level,[]),leader:new n.NI(this.defaultValues.leader,[]),email:new n.NI("",[n.kI.email]),terms:new n.NI(!1,[e=>e.value?null:{termsDisagree:!0}]),gender:new n.NI(null,n.kI.required),class:new n.NI(null,[n.kI.required]),alignment:new n.NI(null,[n.kI.required]),hitpoints:new n.NI(this.defaultValues.hitpoints,[n.kI.min(1),n.kI.max(100)]),strength:new n.NI(this.defaultValues.strength,[n.kI.min(1),n.kI.max(10)]),agility:new n.NI(this.defaultValues.agility,[n.kI.min(1),n.kI.max(10)]),intelligence:new n.NI(this.defaultValues.intelligence,[n.kI.min(1),n.kI.max(10)]),perks:new n.NI(this.defaultValues.perks,[this.validatePerks.bind(this)])},[this.validateSkills.bind(this)]),this.termsErrorStateAgent=(e,r)=>e&&r&&r.invalid&&e.submitted,this.helpLayerConfig={maxWidth:"25em"}}get level(){const e=this.formGroup&&this.formGroup.get("level");return e?e.value:0}get skillPoints(){const e=this.formGroup&&this.formGroup.get("strength"),r=this.formGroup&&this.formGroup.get("agility"),t=this.formGroup&&this.formGroup.get("intelligence");return e&&r&&t?e.value+r.value+t.value:0}get skillPointsAvailable(){return this.skillPointsMax-this.skillPoints}validateSkills(){return this.skillPoints>this.skillPointsMax?{skills:!0}:null}validatePerks(e){return Array.isArray(e.value)&&2===e.value.length?null:{perks:!0}}onSubmit(){this.formGroup.valid?this.notifier.success("Hero created"):this.notifier.error("Hero invalid")}onReset(){this.form.resetForm(this.defaultValues),this.notifier.info("Hero reset")}}return e.\u0275fac=function(r){return new(r||e)(c.Y36(i.lGB),c.Y36(i._AI))},e.\u0275cmp=c.Xpm({type:e,selectors:[["ng-component"]],viewQuery:function(e,r){if(1&e&&c.Gf(S,5),2&e){let e;c.iGM(e=c.CRH())&&(r.form=e.first)}},decls:231,vars:44,consts:[["novalidate","","vclForm","",2,"max-width","40em",3,"formGroup","submit"],["form","ngForm"],[3,"vclLayer"],["help","vclLayer"],[1,"help-wrapper"],["vclInput","","formControlName","name"],["vcl-button","","square","","type","button",1,"transparent",3,"click"],["icon","vcl:info",1,"scale130p"],["error","required"],["error","minlength"],["vclInput","","formControlName","description","placeholder","Description of the hero",3,"autogrow","minRows","maxRows"],[1,"row","gutterx-4"],[1,"flex"],["formControlName","dob",3,"placeholder"],["icon","fas:envelope"],["vclInput","","formControlName","email"],["error","email"],["vclInput","","formControlName","password","placeholder","Enter password"],["error","pattern"],["formControlName","level",3,"min","max"],[4,"ngIf"],["formControlName","picture",3,"multiple"],["formControlName","gender"],["value","m"],["vclAppend","","icon","fas:mars"],["value","f"],["vclAppend","","icon","fas:venus"],["value","g"],["vclAppend","","icon","fas:genderless"],["formControlName","alignment"],["vcl-button","",3,"value"],["formControlName","class"],[3,"value"],["formControlName","hitpoints",3,"min","max","scale","lock"],[3,"target"],["formControlName","strength"],["strengthRating","vclRating"],["formControlName","agility"],["agilityRating","vclRating"],["formControlName","intelligence"],["intelligenceRating","vclRating"],["placeholder","Select perks"],["formControlName","perks","selectionMode","multiple"],["error","perks"],[3,"errorStateAgent"],["formControlName","terms"],["href","'https://github.com/ng-vcl/ng-vcl'","target","'_blank'"],["error","termsDisagree"],[1,"loose-button-group"],["vcl-button","","type","submit",1,"emphasized"],["vcl-button","","type","button",3,"click"],[1,"value"],["vcl-button","","vclPanelFooterButton","",1,"transparent","outline",3,"click"],["formControlName","leader"]],template:function(e,r){if(1&e){const e=c.EpF();c.TgZ(0,"form",0,1),c.NdJ("submit",function(){return r.onSubmit()}),c.TgZ(2,"h2"),c._uU(3,"Create a hero"),c.qZA(),c.YNc(4,J,6,2,"ng-template",2,3,c.W1O),c.TgZ(6,"vcl-form-control-group"),c.TgZ(7,"vcl-label"),c._uU(8,"Name"),c.qZA(),c.TgZ(9,"div",4),c.TgZ(10,"vcl-input-field"),c._UZ(11,"input",5),c.qZA(),c.TgZ(12,"button",6),c.NdJ("click",function(){return c.CHM(e),c.MAs(5).open({data:{header:"Name",text:"The name of the hero. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi ad excepturi molestiae esse unde repellendus ex accusantium officia placeat voluptatem commodi et, laboriosam laudantium, cum, ratione debitis inventore? Esse, eaque!"}})}),c._UZ(13,"vcl-icon",7),c.qZA(),c.qZA(),c.TgZ(14,"vcl-hint-error",8),c._uU(15,"Name is required"),c.qZA(),c.TgZ(16,"vcl-hint-error",9),c._uU(17,"Name must have a length of at least 2 characters"),c.qZA(),c.qZA(),c.TgZ(18,"vcl-form-control-group"),c.TgZ(19,"vcl-label"),c._uU(20,"Description"),c.qZA(),c.TgZ(21,"vcl-input-field"),c._UZ(22,"textarea",10),c.qZA(),c.qZA(),c.TgZ(23,"div",11),c.TgZ(24,"vcl-form-control-group",12),c.TgZ(25,"vcl-label"),c._uU(26,"Date of Birth"),c.qZA(),c._UZ(27,"vcl-datepicker",13),c.TgZ(28,"vcl-hint-error",8),c._uU(29,"Date of Birth is required"),c.qZA(),c.qZA(),c.TgZ(30,"vcl-form-control-group",12),c.TgZ(31,"vcl-label"),c._uU(32,"Email"),c.qZA(),c.TgZ(33,"vcl-input-field"),c._UZ(34,"vcl-icon",14),c._UZ(35,"input",15),c.qZA(),c.TgZ(36,"vcl-hint-error",8),c._uU(37,"Email is required"),c.qZA(),c.TgZ(38,"vcl-hint-error",16),c._uU(39,"Invalid Email address"),c.qZA(),c.qZA(),c.qZA(),c.TgZ(40,"vcl-form-control-group"),c.TgZ(41,"vcl-label"),c._uU(42,"Password"),c.qZA(),c.TgZ(43,"vcl-password-input"),c._UZ(44,"input",17),c.qZA(),c.TgZ(45,"vcl-hint-error",8),c._uU(46,"Password is required"),c.qZA(),c.TgZ(47,"vcl-hint-error",18),c._uU(48,"Password must... "),c.qZA(),c.TgZ(49,"vcl-hint-error",18),c._uU(50,"- have at least 8 characters in length"),c.qZA(),c.TgZ(51,"vcl-hint-error",18),c._uU(52,"- contain a lowercase letters"),c.qZA(),c.TgZ(53,"vcl-hint-error",18),c._uU(54,"- contain a uppercase letters"),c.qZA(),c.TgZ(55,"vcl-hint-error",18),c._uU(56,"- contain a number"),c.qZA(),c.TgZ(57,"vcl-hint-error",18),c._uU(58,"- contain a special character"),c.qZA(),c.qZA(),c.TgZ(59,"vcl-form-control-group"),c.TgZ(60,"vcl-label"),c._uU(61,"Level"),c.qZA(),c._UZ(62,"demo-counter",19),c.qZA(),c.YNc(63,Q,4,0,"vcl-form-control-group",20),c.TgZ(64,"vcl-form-control-group"),c.TgZ(65,"vcl-label"),c._uU(66,"Picture"),c.qZA(),c.TgZ(67,"vcl-file-input",21),c._uU(68,"Picture of the hero"),c.qZA(),c.qZA(),c.TgZ(69,"vcl-form-control-group"),c.TgZ(70,"vcl-label"),c._uU(71,"Gender"),c.qZA(),c.TgZ(72,"vcl-radio-group",22),c.TgZ(73,"vcl-radio-button",23),c.TgZ(74,"vcl-icogram"),c._uU(75,"Male"),c._UZ(76,"vcl-icon",24),c.qZA(),c.qZA(),c.TgZ(77,"vcl-radio-button",25),c.TgZ(78,"vcl-icogram"),c._uU(79,"Female"),c._UZ(80,"vcl-icon",26),c.qZA(),c.qZA(),c.TgZ(81,"vcl-radio-button",27),c.TgZ(82,"vcl-icogram"),c._uU(83,"Genderless"),c._UZ(84,"vcl-icon",28),c.qZA(),c.qZA(),c.TgZ(85,"vcl-hint-error",8),c._uU(86,"You must select a gender"),c.qZA(),c.qZA(),c.qZA(),c.TgZ(87,"vcl-form-control-group"),c.TgZ(88,"vcl-label"),c._uU(89,"Alignment"),c.qZA(),c.TgZ(90,"vcl-button-group",29),c.TgZ(91,"button",30),c._uU(92,"Good"),c.qZA(),c.TgZ(93,"button",30),c._uU(94,"Neutral"),c.qZA(),c.TgZ(95,"button",30),c._uU(96,"Evil"),c.qZA(),c.qZA(),c.TgZ(97,"vcl-hint-error",8),c._uU(98,"You must select an alignment"),c.qZA(),c.qZA(),c.TgZ(99,"vcl-form-control-group"),c.TgZ(100,"vcl-label"),c._uU(101,"Class"),c.qZA(),c.TgZ(102,"vcl-select-list",31),c.TgZ(103,"vcl-select-list-item",32),c._uU(104," Warrior "),c.qZA(),c.TgZ(105,"vcl-select-list-item",32),c._uU(106," Mage "),c.qZA(),c.TgZ(107,"vcl-select-list-item",32),c._uU(108," Rogue "),c.qZA(),c.qZA(),c.TgZ(109,"vcl-hint-error",8),c._uU(110,"You must select a class"),c.qZA(),c.qZA(),c.TgZ(111,"vcl-form-control-group"),c.TgZ(112,"vcl-label"),c._uU(113,"Hit points"),c.qZA(),c._UZ(114,"vcl-slider",33),c.qZA(),c.TgZ(115,"fieldset"),c.TgZ(116,"legend"),c._uU(117,"Skills"),c.qZA(),c.TgZ(118,"vcl-form-control-group"),c.TgZ(119,"vcl-label"),c._uU(120,"Strength ("),c._UZ(121,"vcl-rating-item-label",34),c._uU(122,")"),c.qZA(),c.TgZ(123,"vcl-rating",35,36),c.TgZ(125,"vcl-rating-item"),c._uU(126,"1"),c.qZA(),c.TgZ(127,"vcl-rating-item"),c._uU(128,"2"),c.qZA(),c.TgZ(129,"vcl-rating-item"),c._uU(130,"3"),c.qZA(),c.TgZ(131,"vcl-rating-item"),c._uU(132,"4"),c.qZA(),c.TgZ(133,"vcl-rating-item"),c._uU(134,"5"),c.qZA(),c.qZA(),c.qZA(),c.TgZ(135,"vcl-form-control-group"),c.TgZ(136,"vcl-label"),c._uU(137,"Agility ("),c._UZ(138,"vcl-rating-item-label",34),c._uU(139,")"),c.qZA(),c.TgZ(140,"vcl-rating",37,38),c.TgZ(142,"vcl-rating-item"),c._uU(143,"1"),c.qZA(),c.TgZ(144,"vcl-rating-item"),c._uU(145,"2"),c.qZA(),c.TgZ(146,"vcl-rating-item"),c._uU(147,"3"),c.qZA(),c.TgZ(148,"vcl-rating-item"),c._uU(149,"4"),c.qZA(),c.TgZ(150,"vcl-rating-item"),c._uU(151,"5"),c.qZA(),c.qZA(),c.qZA(),c.TgZ(152,"vcl-form-control-group"),c.TgZ(153,"vcl-label"),c._uU(154,"Intelligence ("),c._UZ(155,"vcl-rating-item-label",34),c._uU(156,")"),c.qZA(),c.TgZ(157,"vcl-rating",39,40),c.TgZ(159,"vcl-rating-item"),c._uU(160,"1"),c.qZA(),c.TgZ(161,"vcl-rating-item"),c._uU(162,"2"),c.qZA(),c.TgZ(163,"vcl-rating-item"),c._uU(164,"3"),c.qZA(),c.TgZ(165,"vcl-rating-item"),c._uU(166,"4"),c.qZA(),c.TgZ(167,"vcl-rating-item"),c._uU(168,"5"),c.qZA(),c.qZA(),c.qZA(),c.YNc(169,L,2,2,"vcl-hint",20),c.YNc(170,Y,2,2,"vcl-hint-warning",20),c.YNc(171,D,2,2,"vcl-hint-error",20),c.qZA(),c.TgZ(172,"vcl-form-control-group"),c.TgZ(173,"vcl-label"),c._uU(174,"Perks"),c.qZA(),c.TgZ(175,"vcl-select",41),c.TgZ(176,"vcl-select-list",42),c.TgZ(177,"vcl-select-list-item",32),c._uU(178," Snake Eater "),c.TgZ(179,"vcl-sub-label"),c._uU(180,"It gives you a 25% increase to your poison resistance.\t"),c.qZA(),c.qZA(),c.TgZ(181,"vcl-select-list-item",32),c._uU(182," Swift Learner "),c.TgZ(183,"vcl-sub-label"),c._uU(184,"Swift Learner\tWhenever you gain experience, you'll receive 5% more experience per level of the perk."),c.qZA(),c.qZA(),c.TgZ(185,"vcl-select-list-item",32),c._uU(186," Toughness "),c.TgZ(187,"vcl-sub-label"),c._uU(188,"It adds 10% to your general damage resistance per level."),c.qZA(),c.qZA(),c.TgZ(189,"vcl-select-list-item",32),c._uU(190," Explorer "),c.TgZ(191,"vcl-sub-label"),c._uU(192,"You'll get more random encounters with this perk."),c.qZA(),c.qZA(),c.qZA(),c.qZA(),c.TgZ(193,"vcl-hint-error",43),c._uU(194,"You must select two perks"),c.qZA(),c.qZA(),c.TgZ(195,"vcl-form-control-group",44),c.TgZ(196,"vcl-checkbox",45),c._uU(197," Agree to our terms "),c.qZA(),c.TgZ(198,"vcl-hint"),c._uU(199,"Read the "),c.TgZ(200,"a",46),c._uU(201,"terms"),c.qZA(),c._uU(202," to learn how we collect, use and share your data"),c.qZA(),c.TgZ(203,"vcl-hint-error",47),c._uU(204,"You must agree to our Terms"),c.qZA(),c.qZA(),c.TgZ(205,"div",48),c.TgZ(206,"button",49),c._uU(207,"Submit"),c.qZA(),c.TgZ(208,"button",50),c.NdJ("click",function(){return r.onReset()}),c._uU(209,"Reset"),c.qZA(),c.qZA(),c.TgZ(210,"div",51),c.TgZ(211,"h4"),c._uU(212,"Form"),c.qZA(),c.TgZ(213,"pre"),c._uU(214),c.qZA(),c.TgZ(215,"pre"),c._uU(216),c.qZA(),c.TgZ(217,"pre"),c._uU(218),c.qZA(),c.TgZ(219,"pre"),c._uU(220),c.qZA(),c.TgZ(221,"pre"),c._uU(222),c.qZA(),c.TgZ(223,"pre"),c._uU(224),c.qZA(),c.TgZ(225,"pre"),c._uU(226),c.ALo(227,"json"),c.qZA(),c.TgZ(228,"pre"),c._uU(229),c.ALo(230,"json"),c.qZA(),c.qZA(),c.qZA()}if(2&e){const e=c.MAs(1),t=c.MAs(124),l=c.MAs(141),n=c.MAs(158);c.Q6J("formGroup",r.formGroup),c.xp6(4),c.Q6J("vclLayer",c.DdM(43,j)),c.xp6(18),c.Q6J("autogrow",!0)("minRows",3)("maxRows",10),c.xp6(5),c.Q6J("placeholder",r.datePattern),c.xp6(35),c.Q6J("min",1)("max",10),c.xp6(1),c.Q6J("ngIf",r.level>=5),c.xp6(4),c.Q6J("multiple",!1),c.xp6(24),c.Q6J("value","good"),c.xp6(2),c.Q6J("value","neutral"),c.xp6(2),c.Q6J("value","evil"),c.xp6(8),c.Q6J("value","warrior"),c.xp6(2),c.Q6J("value","mage"),c.xp6(2),c.Q6J("value","rogue"),c.xp6(7),c.Q6J("min",5)("max",20)("scale",16)("lock",!0),c.xp6(7),c.Q6J("target",t),c.xp6(17),c.Q6J("target",l),c.xp6(17),c.Q6J("target",n),c.xp6(14),c.Q6J("ngIf",!e.hasError("skills")&&0===r.skillPointsAvailable),c.xp6(1),c.Q6J("ngIf",!e.hasError("skills")&&r.skillPointsAvailable>0),c.xp6(1),c.Q6J("ngIf",e.hasError("skills")),c.xp6(6),c.Q6J("value","snakeeater"),c.xp6(4),c.Q6J("value","swiftlearner"),c.xp6(4),c.Q6J("value","toughness"),c.xp6(4),c.Q6J("value","explorer"),c.xp6(6),c.Q6J("errorStateAgent",r.termsErrorStateAgent),c.xp6(19),c.hij("status: ",e.status,""),c.xp6(2),c.hij("valid: ",e.valid,""),c.xp6(2),c.hij("dirty: ",e.dirty,""),c.xp6(2),c.hij("submitted: ",e.submitted,""),c.xp6(2),c.hij("touched: ",e.touched,""),c.xp6(2),c.hij("pristine: ",e.pristine,""),c.xp6(2),c.hij("errors: ",c.lcZ(227,39,e.errors),""),c.xp6(3),c.hij("value: ",c.lcZ(230,41,e.value),"")}},directives:[n._Y,n.JL,s.$,n.sg,u.A,v.o,m._T,g.q8,p.q,d.V,n.Fj,n.JJ,n.u,f.r,h.o,Z.N,b.b,A.Q,q.C,T.R,l.O5,k.Y,_.w,w._,U.m,x.K,C.g,N.fN,y.P,I.I,P.A,F.a,V.H,g.g9,G.b,Z.b,E.y,R.ag,R.jW,R.r8,M.H],pipes:[l.Ts],styles:[".help-wrapper{display:flex;flex-direction:row;align-items:flex-start;justify-content:space-between}.help-wrapper>:first-child{flex:0 0 90%}\n"],encapsulation:2}),e})();function z(){return{label:"Form Control Group",tabs:{Demo:H,"README.md":{type:"md",content:'# vcl-form-control-group\n\nForm control group to handle the error-state of form controls\n\n## Usage\n\n```js\nimport { VCLFormControlGroupModule } from \'@vcl/ng-vcl\';\n\n@NgModule({\n  imports: [ VCLFormControlGroupModule ],\n  ...\n})\nexport class AppComponent {}\n```\n\n```html\n<form vclForm [formGroup]="formGroup">\n  <vcl-form-control-group>\n    <vcl-label>Name</vcl-label>\n    <vcl-input-field>\n      <input formControlName="name">\n    </vcl-input-field>\n    <vcl-hint-error error="required">Name is required</vcl-hint-error>\n    <vcl-hint-error error="minlength">Name must have a length of at least 2 characters</vcl-hint-error>\n  </vcl-form-control-group>\n</form>\n```\n'},"demo.component.html":{type:"html",content:t(32681)},"demo.component.ts":{type:"ts",content:t(41610)}}}}let B=(()=>{class e{}return e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=c.oAB({type:e}),e.\u0275inj=c.cJS({imports:[[l.ez,n.u5,n.UX,a.l,T.q,i.V4c,i.PoV,i.WdB,i.UfJ,i.D6p,i.zY$,i.G4p,i.mt_,i.NhM,i.VzK,i.Rft,i.o14,i.M8P,i.dwA,i.Kef,i.uW2,i.Bnf,i.N2R,i.$3R,i.ds4,o.Bz.forChild([{path:"",component:a.z,data:{demo:z}}])]]}),e})()},32681:function(e,r,t){t.r(r),r.default='<form novalidate [formGroup]="formGroup" #form="ngForm" style="max-width: 40em;" (submit)="onSubmit()" vclForm>\n  <h2>Create a hero</h2>\n\n  <ng-template [vclLayer]="{width: \'25em\'}" #help="vclLayer" let-header="header" let-text="text">\n    <vcl-panel-dialog>\n      <vcl-panel-title>{{header}}</vcl-panel-title>\n      {{text}}\n      <button vcl-button vclPanelFooterButton class="transparent outline" (click)="help.close()">OK</button>\n    </vcl-panel-dialog>\n  </ng-template> \n \n  <vcl-form-control-group>\n    <vcl-label>Name</vcl-label>\n    <div class="help-wrapper">\n      <vcl-input-field>\n        <input vclInput formControlName="name">\n      </vcl-input-field>\n      <button vcl-button square class="transparent" (click)="help.open({data: { header: \'Name\', text: \'The name of the hero. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi ad excepturi molestiae esse unde repellendus ex accusantium officia placeat voluptatem commodi et, laboriosam laudantium, cum, ratione debitis inventore? Esse, eaque!\'}})" type="button">\n        <vcl-icon class="scale130p" icon="vcl:info"></vcl-icon>\n      </button>\n    </div>\n    <vcl-hint-error error="required">Name is required</vcl-hint-error>\n    <vcl-hint-error error="minlength">Name must have a length of at least 2 characters</vcl-hint-error>\n  </vcl-form-control-group>\n\n  <vcl-form-control-group>\n    <vcl-label>Description</vcl-label>\n    <vcl-input-field>\n      <textarea vclInput formControlName="description" placeholder="Description of the hero" [autogrow]="true" [minRows]="3" [maxRows]="10"></textarea>\n    </vcl-input-field>\n  </vcl-form-control-group>\n\n  <div class="row gutterx-4">\n    <vcl-form-control-group class="flex">\n      <vcl-label>Date of Birth</vcl-label>\n      <vcl-datepicker formControlName="dob" [placeholder]="datePattern"></vcl-datepicker>\n      <vcl-hint-error error="required">Date of Birth is required</vcl-hint-error>\n    </vcl-form-control-group>\n  \n    <vcl-form-control-group class="flex">\n      <vcl-label>Email</vcl-label>\n      <vcl-input-field>\n        <vcl-icon icon="fas:envelope"></vcl-icon>\n        <input vclInput formControlName="email">\n      </vcl-input-field>\n      <vcl-hint-error error="required">Email is required</vcl-hint-error>\n      <vcl-hint-error error="email">Invalid Email address</vcl-hint-error>\n    </vcl-form-control-group>\n  </div>\n\n  \n  <vcl-form-control-group>\n    <vcl-label>Password</vcl-label>\n    <vcl-password-input>\n      <input vclInput formControlName="password" placeholder="Enter password">\n    </vcl-password-input>\n    <vcl-hint-error error="required">Password is required</vcl-hint-error>\n    <vcl-hint-error error="pattern">Password must... </vcl-hint-error>\n    <vcl-hint-error error="pattern">- have at least 8 characters in length</vcl-hint-error>\n    <vcl-hint-error error="pattern">- contain a lowercase letters</vcl-hint-error>\n    <vcl-hint-error error="pattern">- contain a uppercase letters</vcl-hint-error>\n    <vcl-hint-error error="pattern">- contain a number</vcl-hint-error>\n    <vcl-hint-error error="pattern">- contain a special character</vcl-hint-error>\n  </vcl-form-control-group>\n\n  <vcl-form-control-group>\n    <vcl-label>Level</vcl-label>\n    <demo-counter formControlName="level" [min]="1" [max]="10"></demo-counter>\n  </vcl-form-control-group>\n\n  <vcl-form-control-group *ngIf="level >= 5">\n    <vcl-label>Leader</vcl-label>\n    <vcl-flip-switch formControlName="leader"></vcl-flip-switch>\n  </vcl-form-control-group>\n\n  <vcl-form-control-group>\n    <vcl-label>Picture</vcl-label>\n    <vcl-file-input [multiple]="false" formControlName="picture">Picture of the hero</vcl-file-input>\n  </vcl-form-control-group>\n\n  <vcl-form-control-group>\n    <vcl-label>Gender</vcl-label>\n    <vcl-radio-group formControlName="gender">\n      <vcl-radio-button value="m">\n        <vcl-icogram>Male<vcl-icon vclAppend icon="fas:mars"></vcl-icon></vcl-icogram>\n      </vcl-radio-button>\n      <vcl-radio-button value="f">\n        <vcl-icogram>Female<vcl-icon vclAppend icon="fas:venus"></vcl-icon></vcl-icogram>\n      </vcl-radio-button>\n      <vcl-radio-button value="g">\n        <vcl-icogram>Genderless<vcl-icon vclAppend icon="fas:genderless"></vcl-icon></vcl-icogram>\n      </vcl-radio-button>\n      <vcl-hint-error error="required">You must select a gender</vcl-hint-error>\n    </vcl-radio-group>\n\n  </vcl-form-control-group>\n\n  <vcl-form-control-group>\n    <vcl-label>Alignment</vcl-label>\n    <vcl-button-group formControlName="alignment">\n      <button vcl-button [value]="\'good\'">Good</button>\n      <button vcl-button [value]="\'neutral\'">Neutral</button>\n      <button vcl-button [value]="\'evil\'">Evil</button>\n    </vcl-button-group>\n    <vcl-hint-error error="required">You must select an alignment</vcl-hint-error>\n  </vcl-form-control-group>\n\n  <vcl-form-control-group>\n    <vcl-label>Class</vcl-label>\n    <vcl-select-list formControlName="class">\n      <vcl-select-list-item [value]="\'warrior\'">\n        Warrior\n      </vcl-select-list-item>\n      <vcl-select-list-item [value]="\'mage\'">\n        Mage\n      </vcl-select-list-item>\n      <vcl-select-list-item [value]="\'rogue\'">\n        Rogue\n      </vcl-select-list-item>\n    </vcl-select-list>\n    <vcl-hint-error error="required">You must select a class</vcl-hint-error>\n  </vcl-form-control-group>\n\n\n  <vcl-form-control-group>\n    <vcl-label>Hit points</vcl-label>\n    <vcl-slider formControlName="hitpoints" [min]="5" [max]="20" [scale]="16" [lock]="true"></vcl-slider>\n  </vcl-form-control-group>\n\n  <fieldset>\n    <legend>Skills</legend>\n    <vcl-form-control-group>\n      <vcl-label>Strength (<vcl-rating-item-label [target]="strengthRating"></vcl-rating-item-label>)</vcl-label>\n      <vcl-rating formControlName="strength" #strengthRating="vclRating">\n        <vcl-rating-item>1</vcl-rating-item>\n        <vcl-rating-item>2</vcl-rating-item>\n        <vcl-rating-item>3</vcl-rating-item>\n        <vcl-rating-item>4</vcl-rating-item>\n        <vcl-rating-item>5</vcl-rating-item>\n      </vcl-rating>\n    </vcl-form-control-group>\n    <vcl-form-control-group>\n      <vcl-label>Agility (<vcl-rating-item-label [target]="agilityRating"></vcl-rating-item-label>)</vcl-label>\n      <vcl-rating formControlName="agility" #agilityRating="vclRating">\n        <vcl-rating-item>1</vcl-rating-item>\n        <vcl-rating-item>2</vcl-rating-item>\n        <vcl-rating-item>3</vcl-rating-item>\n        <vcl-rating-item>4</vcl-rating-item>\n        <vcl-rating-item>5</vcl-rating-item>\n      </vcl-rating>\n    </vcl-form-control-group>\n    <vcl-form-control-group>\n      <vcl-label>Intelligence (<vcl-rating-item-label [target]="intelligenceRating"></vcl-rating-item-label>)</vcl-label>\n      <vcl-rating formControlName="intelligence" #intelligenceRating="vclRating">\n        <vcl-rating-item>1</vcl-rating-item>\n        <vcl-rating-item>2</vcl-rating-item>\n        <vcl-rating-item>3</vcl-rating-item>\n        <vcl-rating-item>4</vcl-rating-item>\n        <vcl-rating-item>5</vcl-rating-item>\n      </vcl-rating>\n    </vcl-form-control-group>\n    <vcl-hint *ngIf="!form.hasError(\'skills\') && skillPointsAvailable === 0">{{skillPoints}} of {{skillPointsMax}} skill points used</vcl-hint>\n    <vcl-hint-warning *ngIf="!form.hasError(\'skills\') && skillPointsAvailable > 0">{{skillPoints}} of {{skillPointsMax}} skill points used</vcl-hint-warning>\n    <vcl-hint-error *ngIf="form.hasError(\'skills\')">{{skillPoints}} of {{skillPointsMax}} skill points used</vcl-hint-error>\n  </fieldset>\n\n  <vcl-form-control-group>\n    <vcl-label>Perks</vcl-label>\n    <vcl-select placeholder="Select perks">\n      <vcl-select-list formControlName="perks"  selectionMode="multiple">\n        <vcl-select-list-item [value]="\'snakeeater\'">\n          Snake Eater\n          <vcl-sub-label>It gives you a 25% increase to your poison resistance.\t</vcl-sub-label>\n        </vcl-select-list-item>\n        <vcl-select-list-item [value]="\'swiftlearner\'">\n          Swift Learner\n          <vcl-sub-label>Swift Learner\tWhenever you gain experience, you\'ll receive 5% more experience per level of the perk.</vcl-sub-label>\n        </vcl-select-list-item>\n        <vcl-select-list-item [value]="\'toughness\'">\n          Toughness\n          <vcl-sub-label>It adds 10% to your general damage resistance per level.</vcl-sub-label>\n        </vcl-select-list-item>\n        <vcl-select-list-item [value]="\'explorer\'">\n          Explorer\n          <vcl-sub-label>You\'ll get more random encounters with this perk.</vcl-sub-label>\n        </vcl-select-list-item> \n      </vcl-select-list>\n    </vcl-select>\n    <vcl-hint-error error="perks">You must select two perks</vcl-hint-error>\n  </vcl-form-control-group>\n\n  <vcl-form-control-group [errorStateAgent]="termsErrorStateAgent">\n    <vcl-checkbox formControlName="terms" >\n      Agree to our terms\n    </vcl-checkbox>\n    <vcl-hint>Read the <a href="\'https://github.com/ng-vcl/ng-vcl\'" target="\'_blank\'">terms</a> to learn how we collect, use and share your data</vcl-hint>\n    <vcl-hint-error error="termsDisagree">You must agree to our Terms</vcl-hint-error>\n  </vcl-form-control-group>\n\n  <div class="loose-button-group">\n    <button vcl-button type="submit" class="emphasized">Submit</button>\n    <button vcl-button type="button" (click)="onReset()">Reset</button>\n  </div>\n\n  <div class="value">\n    <h4>Form</h4>\n    <pre>status: {{ form.status }}</pre>\n    <pre>valid: {{ form.valid }}</pre>\n    <pre>dirty: {{ form.dirty }}</pre>\n    <pre>submitted: {{ form.submitted }}</pre>\n    <pre>touched: {{ form.touched }}</pre>\n    <pre>pristine: {{ form.pristine }}</pre>\n    <pre>errors: {{ form.errors | json }}</pre>\n    <pre>value: {{ form.value | json }}</pre>\n  </div>\n</form>\n  '},41610:function(e,r,t){t.r(r),r.default="import { Component, ViewChild, ViewEncapsulation } from '@angular/core';\nimport { FormGroup, Validators, AbstractControl, FormControl, NgForm } from '@angular/forms';\nimport { NotifierService, FormControlErrorStateAgent, LayerConfig, DateAdapter } from '@vcl/ng-vcl';\n\n@Component({\n  templateUrl: 'demo.component.html',\n  styleUrls: ['demo.component.scss'],\n  encapsulation: ViewEncapsulation.None\n})\nexport class FormControlGroupDemoComponent {\n\n  constructor(private notifier: NotifierService, private da: DateAdapter) { }\n\n  @ViewChild('form')\n  form: NgForm;\n\n  datePattern = this.da.pattern('date');\n\n  skillPointsMax = 10;\n\n  defaultValues = {\n    level: 1,\n    leader: false,\n    hitpoints: 10,\n    strength: 3,\n    agility: 3,\n    intelligence: 3,\n    perks: []\n  };\n\n  formGroup = new FormGroup({\n    name: new FormControl('', [\n      Validators.required,\n      Validators.minLength(2),\n    ]),\n    description: new FormControl('', []),\n    dob: new FormControl(null, [\n      Validators.required\n    ]),\n    password: new FormControl('', [\n      Validators.required,\n      Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\\d$@$!%*?&].{8,}'),\n    ]),\n    picture: new FormControl(null, []),\n    level: new FormControl(this.defaultValues.level, []),\n    leader: new FormControl(this.defaultValues.leader, []),\n    email: new FormControl('', [\n      Validators.email,\n    ]),\n    terms: new FormControl(false, [\n      (control) => {\n        if (!control.value) {\n          return {\n            termsDisagree: true,\n          };\n        }\n        return null;\n      }\n    ]),\n    gender: new FormControl(null, Validators.required),\n    class: new FormControl(null, [ Validators.required ]),\n    alignment: new FormControl(null, [ Validators.required ]),\n    hitpoints: new FormControl(this.defaultValues.hitpoints, [ Validators.min(1), Validators.max(100)]),\n    strength: new FormControl(this.defaultValues.strength, [ Validators.min(1), Validators.max(10)]),\n    agility: new FormControl(this.defaultValues.agility, [ Validators.min(1), Validators.max(10)]),\n    intelligence: new FormControl(this.defaultValues.intelligence, [ Validators.min(1), Validators.max(10)]),\n    perks: new FormControl(this.defaultValues.perks, [ this.validatePerks.bind(this) ])\n  }, [\n    this.validateSkills.bind(this)\n  ]);\n\n  get level() {\n    const c = this.formGroup && this.formGroup.get('level');\n    return c ? c.value : 0;\n  }\n\n  get skillPoints() {\n    const s = this.formGroup && this.formGroup.get('strength');\n    const a = this.formGroup && this.formGroup.get('agility');\n    const i = this.formGroup && this.formGroup.get('intelligence');\n    if (s && a && i) {\n      return s.value + a.value + i.value;\n    }\n    return 0;\n  }\n\n  get skillPointsAvailable() {\n    return this.skillPointsMax - this.skillPoints;\n  }\n\n  validateSkills() {\n    if ((this.skillPoints) > this.skillPointsMax) {\n      return {\n        skills: true\n      };\n    }\n    return null;\n  }\n\n  validatePerks(c: AbstractControl) {\n    return (Array.isArray(c.value) && c.value.length === 2) ? null : { perks: true };\n  }\n\n  // Show only if invalid and after submitted\n  termsErrorStateAgent: FormControlErrorStateAgent = (form?, ngControl?) => {\n    return form && ngControl && ngControl.invalid && form.submitted;\n  }\n\n  onSubmit() {\n    if (this.formGroup.valid) {\n      this.notifier.success('Hero created');\n    } else {\n     this.notifier.error('Hero invalid');\n    }\n  }\n\n  onReset() {\n    this.form.resetForm(this.defaultValues);\n    this.notifier.info('Hero reset');\n  }\n\n\n  helpLayerConfig: LayerConfig = {\n    maxWidth: '25em',\n  }\n}\n"}}]);