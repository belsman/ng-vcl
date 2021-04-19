!function(){function e(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function n(e,n){for(var r=0;r<n.length;r++){var t=n[r];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"/apb":function(e,n,r){"use strict";r.r(n),n.default="import { Component, ViewChild, AfterViewInit, OnInit } from '@angular/core';\nimport { JssFormComponent, NotifierService, DateAdapter } from '@vcl/ng-vcl';\nimport { merge, Observable } from 'rxjs';\nimport { map } from 'rxjs/operators';\nimport { buildHeroSchema, ExtendedFormFieldSchemaRoot } from './hero';\n\n\n@Component({\n  templateUrl: 'demo.component.html'\n})\nexport class JssFormDemoComponent implements AfterViewInit, OnInit {\n\n  constructor(private notifier: NotifierService, private da: DateAdapter) { }\n\n  @ViewChild('heroForm')\n  heroForm: JssFormComponent;\n\n  heroSchema?: ExtendedFormFieldSchemaRoot;\n\n  state$: Observable<any>;\n\n  ngOnInit(): void {\n    this.heroSchema = buildHeroSchema({\n      datepickerPlaceholder: this.da.pattern('date')\n    });\n  }\n\n  onSubmit() {\n    if (this.heroForm.form.valid) {\n      this.notifier.success('Hero created');\n    } else {\n      this.notifier.error('Hero invalid');\n    }\n  }\n\n  onAction(action: string) {\n    if (action === 'reset' && this.heroForm.form) {\n      this.heroForm.form.resetForm(this.heroForm.defaultValue);\n      this.notifier.info('Hero reset');\n    }\n  }\n\n  ngAfterViewInit() {\n    this.state$ = merge(this.heroForm.form.statusChanges, this.heroForm.form.valueChanges, this.heroForm.form.ngSubmit).pipe(\n      map(() => {\n        return {\n          status: this.heroForm.form.status,\n          valid: this.heroForm.form.valid,\n          dirty: this.heroForm.form.dirty,\n          submitted: this.heroForm.form.submitted,\n          touched: this.heroForm.form.touched,\n          pristine: this.heroForm.form.pristine,\n          errors: this.heroForm.form.errors,\n          value: this.heroForm.form.value,\n        };\n      })\n    );\n  }\n}\n"},"FKU+":function(r,t,a){"use strict";a.r(t),a.d(t,"demo",function(){return S}),a.d(t,"VCLJssFormDemoModule",function(){return V});var o=a("ofXK"),l=a("3Pt+"),i=a("tyNb"),s=a("19H1"),m=a("2FIb"),u=a("VRyK"),c=a("lJxs"),p=a("fXoL"),d=a("0O3k"),h=["heroForm"];function f(e,n){if(1&e&&(p.Qb(0,"div",3),p.Qb(1,"h4"),p.xc(2,"Form"),p.Pb(),p.Qb(3,"pre"),p.xc(4),p.bc(5,"json"),p.Pb(),p.Pb()),2&e){var r=n.ngIf;p.zb(4),p.yc(p.cc(5,1,r))}}var b,g,v=((b=function(){function r(n,t){e(this,r),this.notifier=n,this.da=t}var t,a,o;return t=r,(a=[{key:"ngOnInit",value:function(){var e;this.heroSchema=(e={datepickerPlaceholder:this.da.pattern("date")},{type:"form",fields:[{name:"name",type:"input",label:"Name",params:{placeholder:"The hero's name"},validators:[l.q.required,l.q.minLength(2)],required:!0,help:{title:"Help title",text:"Help text"},hints:[{type:"error",error:"required",message:"Name is required"},{type:"error",error:"minlength",message:"Name must have a length of at least 2 characters"}]},{type:"textarea",name:"description",label:"Description",params:{placeholder:"The hero's Description"}},{type:"datepicker",name:"dob",label:"Date of Birth",params:{placeholder:e.datepickerPlaceholder},help:{title:"Date of Birth title",text:"Date of Birth text",confirmButtonLabel:"Confirm",layerWidth:"15em",icon:"vcl:question"}},{type:"password-input",name:"password",label:"Password",params:{placeholder:"Enter password"},validators:[l.q.required,l.q.pattern("(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-zd$@$!%*?&].{8,}")],hints:[{type:"error",error:"required",message:"Password is required"},{type:"error",error:"pattern",message:"Password must..."},{type:"error",error:"pattern",message:"- At least 8 characters in length"},{type:"error",error:"pattern",message:"- Contain a lowercase letters"},{type:"error",error:"pattern",message:"- Contain a uppercase letters"},{type:"error",error:"pattern",message:"- Contain a number"},{type:"error",error:"pattern",message:"- Contain a special character"}]},{type:"counter",name:"level",label:"Level",defaultValue:1,params:{min:1,max:10}},{type:"switch",name:"leader",label:"Leader",defaultValue:!1,visible:Object(s.ib)(["level"],function(e){return e.value>=5}),validators:[function(e){return e.value?null:{leader:!0}}],params:{offLabel:"No",onLabel:"Yes"}},{type:"file-input",name:"picture",label:"Picture",params:{multiple:!1,placeholder:"Picture of the hero"}},{type:"input",params:{prependedIcon:"mdi:email"},name:"email",label:"Email",validators:[l.q.required,l.q.email],required:!0,hints:[{type:"error",error:"required",message:"Email is required"},{type:"error",error:"email",message:"Invalid Email address"}]},{type:"radio-group",name:"gender",label:"Gender",defaultValue:"m",params:{options:[{label:"Male",value:"m"},{label:"Female",value:"f"},{label:"Genderless",value:"g"}]}},{type:"button-group",name:"alignment",label:"Alignment",params:{options:[{label:"Good",value:1},{label:"Neutral",value:0},{label:"Evil",value:-1}]}},{type:"hidden",name:"language",defaultValue:navigator.language},{type:"select-list",name:"class",label:"Class",defaultValue:null,params:{options:[{label:"Warrior",value:"warrior"},{label:"Mage",value:"mage"},{label:"Rogue",value:"rogue"}]}},{type:"slider",name:"hitpoints",label:"Hit Points",defaultValue:15,disabled:Object(s.ib)(["class"],function(e){return!e.value}),params:Object(s.ib)(["class"],function(e){return"rogue"===e.value?{min:8,max:18,scale:11,lock:!0}:"mage"===e.value?{min:5,max:15,scale:11,lock:!0}:{min:10,max:20,scale:11,lock:!0}})},{type:"object",name:"skills",layout:"fieldset",label:"Skills",fields:[{type:"rating",name:"strength",defaultValue:3,params:{items:["1","2","3","4","5"],valueLabel:function(e){return"Strength (".concat(e,")")}}},{type:"rating",name:"agility",defaultValue:3,params:{items:["1","2","3","4","5"],valueLabel:function(e){return"Agility (".concat(e,")")}}},{type:"rating",name:"intelligence",defaultValue:3,params:{items:["1","2","3","4","5"],valueLabel:function(e){return"Intelligence (".concat(e,")")}}}],validators:[function(e){var n=e.get("strength"),r=e.get("agility"),t=e.get("intelligence");return(n&&r&&t?n.value+r.value+t.value:0)>10?{skills:!0}:null}],hints:[Object(s.ib)(["skills","skills.strength","skills.agility","skills.intelligence"],function(e,n,r,t){var a=n&&r&&t?n.value+r.value+t.value:0,o="".concat(a," of 10 skill points used");return e.hasError("skills")?{type:"error",message:o}:10-a>0?{type:"warning",message:o}:{type:"default",message:o}})]},{type:"token",name:"attributes",label:"Attributes",hints:[{type:"default",message:"Press enter to add attribute"},{type:"error",error:"minLength",message:"Minimum length is 2"}],validators:[function(e){return Array.isArray(e.value)&&e.value.length>1?null:{minLength:!0}}]},{type:"select",name:"perks",label:"Perks",params:{placeholder:"Select perks",selectionMode:"multiple",options:[{label:"Snake Eater",sublabel:"It gives you a 25% increase to your poison resistance.",value:"snakeeater"},{label:"Swift Learner",sublabel:"Swift Learner\tWhenever you gain experience, you'll receive 5% more experience per level of the perk.",value:"swiftlearner"},{label:"Toughness",sublabel:"It adds 10% to your general damage resistance per level.",value:"toughness"},{label:"Explorer",sublabel:"You'll get more random encounters with this perk.",value:"explorer"}]},validators:[function(e){return e.value&&Array.isArray(e.value)&&2===e.value.length?null:{perks:!0}}],hints:[{type:"error",error:"perks",message:"You must select two perks"}]},{type:"array",name:"items",label:"Items",initialFields:0,fieldLabel:function(e){return"Item "+(e+1)},noFieldsLabel:"No items",field:{type:"object",name:"item_object",fields:[{type:"input",name:"item_name",label:"Name",validators:[l.q.required],required:!0,hints:[{type:"error",error:"required",message:"Item name is required"}]},{type:"input",name:"item_quantity",label:"Quantity",params:{inputType:"number"},validators:[l.q.required,l.q.min(1),l.q.max(10)],required:!0,hints:[{type:"error",error:"required",message:"Item quantity is required"},{type:"error",error:"min",message:"Minimum is 1"},{type:"error",error:"max",message:"Maximum is 10"}]}]}},{type:"checkbox",name:"terms",label:"Agree to our terms",validators:[function(e){return e.value?null:{termsDisagree:!0}}],hints:[{type:"default",message:"Read the terms to learn how we collect, use and share your data"},{type:"error",error:"termsDisagree",message:"You must agree to our Terms"}],errorStateAgent:function(e,n){return n.control.invalid&&e.submitted}},{type:"buttons",buttons:[{type:"submit",label:"Submit",class:"emphasized",appIcon:"fas:arrow-circle-right"},{type:"button",label:"Reset",action:"reset"}]}]})}},{key:"onSubmit",value:function(){this.heroForm.form.valid?this.notifier.success("Hero created"):this.notifier.error("Hero invalid")}},{key:"onAction",value:function(e){"reset"===e&&this.heroForm.form&&(this.heroForm.form.resetForm(this.heroForm.defaultValue),this.notifier.info("Hero reset"))}},{key:"ngAfterViewInit",value:function(){var e=this;this.state$=Object(u.a)(this.heroForm.form.statusChanges,this.heroForm.form.valueChanges,this.heroForm.form.ngSubmit).pipe(Object(c.a)(function(){return{status:e.heroForm.form.status,valid:e.heroForm.form.valid,dirty:e.heroForm.form.dirty,submitted:e.heroForm.form.submitted,touched:e.heroForm.form.touched,pristine:e.heroForm.form.pristine,errors:e.heroForm.form.errors,value:e.heroForm.form.value}}))}}])&&n(t.prototype,a),o&&n(t,o),r}()).\u0275fac=function(e){return new(e||b)(p.Kb(s.r),p.Kb(s.e))},b.\u0275cmp=p.Eb({type:b,selectors:[["ng-component"]],viewQuery:function(e,n){var r;1&e&&p.Bc(h,1),2&e&&p.kc(r=p.Yb())&&(n.heroForm=r.first)},decls:6,vars:4,consts:[[2,"max-width","40em",3,"schema","formSubmit","formAction"],["heroForm","vclJssForm"],["class","value",4,"ngIf"],[1,"value"]],template:function(e,n){1&e&&(p.Qb(0,"h2"),p.xc(1,"Create a hero"),p.Pb(),p.Qb(2,"vcl-jss-form",0,1),p.Xb("formSubmit",function(){return n.onSubmit()})("formAction",function(e){return n.onAction(e)}),p.Pb(),p.vc(4,f,6,3,"div",2),p.bc(5,"async")),2&e&&(p.zb(2),p.gc("schema",n.heroSchema),p.zb(2),p.gc("ngIf",p.cc(5,2,n.state$)))},directives:[d.a,o.l],pipes:[o.b,o.f],encapsulation:2}),b),y=a("xsjC"),F=a("f0Vy"),C=a("pKlR");function k(e,n){if(1&e&&(p.Qb(0,"vcl-label"),p.xc(1),p.Pb()),2&e){var r=p.ac(2);p.zb(1),p.yc(r.field.label)}}function x(e,n){if(1&e&&(p.Qb(0,"vcl-form-control-group"),p.vc(1,k,2,1,"vcl-label",0),p.Lb(2,"demo-counter",1),p.Pb()),2&e){var r=p.ac();p.zb(1),p.gc("ngIf",!!r.field.label),p.zb(1),p.gc("formControl",r.field.control)("min",r.field.params.min)("max",r.field.params.max)}}function S(){return{label:"JSS-Form",tabs:{Demo:v,"README.md":{type:"md",content:"# vcl-jss-form\n\nCreates a html-form from a provided schema.\n\n## Usage\n\n```ts\nimport { VCLJssFormModule } from '@vcl/ng-vcl';\n\n@NgModule({\n  imports: [ VCLJssFormModule ],\n  ...\n})\nexport class AppComponent {}\n```\n\n```html\n<vcl-jss-form [schema]=\"mySchema\" (formSubmit)=\"onSubmit($event)\" (formAction)=\"onAction($event)\" ></vcl-jss-form>\n```\n\n```ts\nimport { Validators } from '@angular/forms';\nimport { VCLFormFieldSchemaRoot } from '@vcl/ng-vcl';\n\nconst SCHEMA: VCLFormFieldSchemaRoot = {\n  type: 'form',\n  fields: {\n    name: {\n      type: 'input',\n      label: 'Name',\n      params: {\n        placeholder: 'Your name',\n      },\n      validators: [\n        Validators.required, Validators.minLength(2)\n      ],\n      required: true,\n      hints: [\n        {\n          type: 'error',\n          error: 'required',\n          message: 'Name is required'\n        },\n        {\n          type: 'error',\n          error: 'minlength',\n          message: 'Name must have a length of at least 2 characters'\n        }\n      ]\n    },\n    email: {\n      type: 'input',\n      label: 'Email',\n      validators: [Validators.email],\n      required: false,\n      hints: [\n        {\n          type: 'error',\n          error: 'email',\n          message: 'Invalid Email address'\n        }\n      ]\n    },\n    gender: {\n      type: 'radio-group',\n      label: 'Gender',\n      defaultValue: 'm',\n      params: {\n        options: [{\n          label: 'Male',\n          value: 'm'\n        }, {\n          label: 'Female',\n          value: 'f'\n        }, {\n          label: 'Genderless',\n          value: 'g'\n        }],\n      }\n    },\n    language: {\n      type: 'hidden',\n      defaultValue: navigator.language\n    },\n    terms: {\n      type: 'checkbox',\n      label: 'Agree to our terms',\n      validators: [(control: AbstractControl) => {\n        if (!control.value) {\n          return {\n            termsDisagree: true,\n          };\n        }\n        return null;\n      }],\n      hints: [\n        {\n          type: 'default',\n          message: 'Read the terms to learn how we collect, use and share your data'\n        },\n        {\n          type: 'error',\n          error: 'termsDisagree',\n          message: 'You must agree to our Terms'\n        }\n      ]\n    },\n    submit: {\n      type: 'buttons',\n      buttons: [\n        {\n          type: 'submit',\n          label: 'Submit',\n          class: 'emphasized'\n        },\n        {\n          type: 'button',\n          label: 'Reset',\n          action: 'reset'\n        }\n      ]\n    }\n  },\n};\n```\n\n#### Conditional properties\n\nSome properties can be conditional and change when another field value changes.\n\n```ts\nimport { VCLFormFieldSchemaRoot, conditional } from '@vcl/ng-vcl';\n\nconst SCHEMA: VCLFormFieldSchemaRoot = {\n  type: 'form',\n  fields: {\n    one: {\n      type: 'checkbox',\n      label: 'One'\n    },\n    two: {\n      type: 'checkbox',\n      visible: conditional(['one', (one) => !!one.value])\n      label: 'Two',\n    }\n  }\n}\n```\n\n#### Custom fields\n\nA component used in a custom field must implement the `ControlValueAccessor` interface to support the `formControl` directive.\n\n```ts\n@Component({\n  template: `\n    <span *ngIf=\"field.label\">{{ field.label }}</span><br>\n    <my-counter [formControl]=\"field.control\" [max]=\"field.params.max\"></my-counter>\n    `\n})\nexport class CounterFormFieldComponent {\n  constructor(public field: FormFieldControl) { }\n}\n\nFormFieldControl.register('counter', CounterFormFieldComponent);\n```\n\n```ts\nimport { VCLFormFieldSchemaRoot, conditional } from '@vcl/ng-vcl';\n\nconst SCHEMA: VCLFormFieldSchemaRoot = {\n  type: 'form',\n  fields: {\n    level: {\n      type: 'counter',\n      label: 'Counter',\n      params: {\n        max: 10\n      }\n    }\n  }\n}\n```\n"},"demo.component.html":{type:"html",content:a("yur1")},"demo.component.ts":{type:"ts",content:a("/apb")},"jss-form-extended.ts":{type:"ts",content:a("mT85")},"hero.ts":{type:"ts",content:a("y3b0")}}}}s.k.register("counter",((g=function n(r){e(this,n),this.field=r}).\u0275fac=function(e){return new(e||g)(p.Kb(s.k))},g.\u0275cmp=p.Eb({type:g,selectors:[["ng-component"]],decls:1,vars:1,consts:[[4,"ngIf"],[3,"formControl","min","max"]],template:function(e,n){1&e&&p.vc(0,x,3,4,"vcl-form-control-group",0),2&e&&p.gc("ngIf",n.field.visible)},directives:[o.l,y.a,F.a,l.l,l.e,C.a],encapsulation:2}),g));var w,V=((w=function n(){e(this,n)}).\u0275fac=function(e){return new(e||w)},w.\u0275mod=p.Ib({type:w}),w.\u0275inj=p.Hb({imports:[[o.c,l.i,l.p,m.b,F.b,s.L,s.z,s.J,s.Z,s.O,s.T,i.g.forChild([{path:"",component:m.a,data:{demo:S}}])]]}),w)},mT85:function(e,n,r){"use strict";r.r(n),n.default='import { Component } from \'@angular/core\';\nimport { VCLFormFieldSchemaRoot, FormFieldControl, VCLFormFieldControlSchema, Conditional } from \'@vcl/ng-vcl\';\n\n@Component({\n  template: `\n    <vcl-form-control-group *ngIf="field.visible">\n      <vcl-label *ngIf="!!field.label">{{field.label}}</vcl-label>\n      <demo-counter [formControl]="field.control" [min]="field.params.min" [max]="field.params.max"></demo-counter>\n    </vcl-form-control-group>\n    `,\n})\nexport class FormFieldCounterComponent {\n  constructor(public field: FormFieldControl) { }\n}\n\nexport interface CounterSchemaParams {\n  min?: number;\n  max?: number;\n}\n\nexport interface CounterSchema extends VCLFormFieldControlSchema {\n  type: \'counter\';\n  params?: CounterSchemaParams | Conditional<CounterSchemaParams>;\n}\n'},y3b0:function(e,n,r){"use strict";r.r(n),n.default="import { Validators, AbstractControl } from '@angular/forms';\nimport { conditional, VCLFormFieldSchemaRoot } from '@vcl/ng-vcl';\nimport { CounterSchema } from './jss-form-extended';\n\n// Extended schema including the custom counter component\nexport type ExtendedFormFieldSchemaRoot = VCLFormFieldSchemaRoot<CounterSchema>;\n\nexport interface HeroSchemaConfig {\n  datepickerPlaceholder: string;\n}\n\nexport function buildHeroSchema(config: HeroSchemaConfig): ExtendedFormFieldSchemaRoot {\n  return {\n    type: 'form',\n    fields: [\n      {\n        name: 'name',\n        type: 'input',\n        label: 'Name',\n        params: {\n          placeholder: 'The hero\\'s name'\n        },\n        validators: [\n          Validators.required, Validators.minLength(2)\n        ],\n        required: true,\n        help: {\n          title: 'Help title',\n          text: 'Help text',\n        },\n        hints: [\n          {\n            type: 'error',\n            error: 'required',\n            message: 'Name is required'\n          },\n          {\n            type: 'error',\n            error: 'minlength',\n            message: 'Name must have a length of at least 2 characters'\n          }\n        ]\n      },\n      {\n        type: 'textarea',\n        name: 'description',\n        label: 'Description',\n        params: {\n          placeholder: 'The hero\\'s Description',\n        }\n      },\n      {\n        type: 'datepicker',\n        name: 'dob',\n        label: 'Date of Birth',\n        params: {\n          placeholder: config.datepickerPlaceholder\n        },\n        help: {\n          title: 'Date of Birth title',\n          text: 'Date of Birth text',\n          confirmButtonLabel: 'Confirm',\n          layerWidth: '15em',\n          icon: 'vcl:question'\n        },\n      },\n      {\n        type: 'password-input',\n        name: 'password',\n        label: 'Password',\n        params: {\n          placeholder: 'Enter password',\n        },\n        validators: [\n          Validators.required,\n          Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\\d$@$!%*?&].{8,}'),\n        ],\n        hints: [\n          {\n            type: 'error',\n            error: 'required',\n            message: 'Password is required'\n          },\n          {\n            type: 'error',\n            error: 'pattern',\n            message: 'Password must...'\n          },\n          {\n            type: 'error',\n            error: 'pattern',\n            message: '- At least 8 characters in length'\n          },\n          {\n            type: 'error',\n            error: 'pattern',\n            message: '- Contain a lowercase letters'\n          },\n          {\n            type: 'error',\n            error: 'pattern',\n            message: '- Contain a uppercase letters'\n          },\n          {\n            type: 'error',\n            error: 'pattern',\n            message: '- Contain a number'\n          },\n          {\n            type: 'error',\n            error: 'pattern',\n            message: '- Contain a special character'\n          }\n        ]\n      },\n      {\n        type: 'counter',\n        name: 'level',\n        label: 'Level',\n        defaultValue: 1,\n        params: {\n          min: 1,\n          max: 10\n        }\n      },\n      {\n        type: 'switch',\n        name: 'leader',\n        label: 'Leader',\n        defaultValue: false,\n        visible: conditional(['level'], (level: AbstractControl) => level.value >= 5),\n        validators: [(control: AbstractControl) => {\n          if (!control.value) {\n            return {\n              leader: true,\n            };\n          }\n          return null;\n        }],\n        params: {\n          offLabel: 'No',\n          onLabel: 'Yes',\n        }\n      },\n      {\n        type: 'file-input',\n        name: 'picture',\n        label: 'Picture',\n        params: {\n          multiple: false,\n          placeholder: 'Picture of the hero'\n        }\n      },\n      {\n        type: 'input',\n        params: {\n          prependedIcon: 'mdi:email',\n        },\n        name: 'email',\n        label: 'Email',\n        validators: [Validators.required, Validators.email],\n        required: true,\n        hints: [\n          {\n            type: 'error',\n            error: 'required',\n            message: 'Email is required'\n          },\n          {\n            type: 'error',\n            error: 'email',\n            message: 'Invalid Email address'\n          }\n        ]\n      },\n      {\n        type: 'radio-group',\n        name: 'gender',\n        label: 'Gender',\n        defaultValue: 'm',\n        params: {\n          options: [{\n            label: 'Male',\n            value: 'm'\n          }, {\n            label: 'Female',\n            value: 'f'\n          }, {\n            label: 'Genderless',\n            value: 'g'\n          }],\n        }\n      },\n      {\n        type: 'button-group',\n        name: 'alignment',\n        label: 'Alignment',\n        params: {\n          options: [{\n            label: 'Good',\n            value: 1\n          }, {\n            label: 'Neutral',\n            value: 0\n          }, {\n            label: 'Evil',\n            value: -1\n          }]\n        }\n      },\n      {\n        type: 'hidden',\n        name: 'language',\n        defaultValue: navigator.language\n      },\n      {\n        type: 'select-list',\n        name: 'class',\n        label: 'Class',\n        defaultValue: null,\n        params: {\n          options: [{\n            label: 'Warrior',\n            value: 'warrior'\n          }, {\n            label: 'Mage',\n            value: 'mage'\n          }, {\n            label: 'Rogue',\n            value: 'rogue'\n          }]\n        }\n      },\n      {\n        type: 'slider',\n        name: 'hitpoints',\n        label: 'Hit Points',\n        defaultValue: 15,\n        disabled: conditional(['class'], (c) => !c.value),\n        params: conditional(['class'], (control) => {\n          if (control.value === 'rogue') {\n            return {\n              min: 8,\n              max: 18,\n              scale: 11,\n              lock: true,\n            };\n          }  else if (control.value === 'mage') {\n            return {\n              min: 5,\n              max: 15,\n              scale: 11,\n              lock: true,\n            };\n          } else {\n            return {\n              min: 10,\n              max: 20,\n              scale: 11,\n              lock: true,\n            };\n          }\n        }),\n      },\n      {\n        type: 'object',\n        name: 'skills',\n        layout: 'fieldset',\n        label: 'Skills',\n        fields: [\n          {\n            type: 'rating',\n            name: 'strength',\n            defaultValue: 3,\n            params: {\n              items: ['1', '2', '3', '4', '5'],\n              valueLabel: (label) => `Strength (${label})`,\n            },\n          },\n          {\n            type: 'rating',\n            name: 'agility',\n            defaultValue: 3,\n            params: {\n              items: ['1', '2', '3', '4', '5'],\n              valueLabel: (label) => `Agility (${label})`,\n            },\n          },\n          {\n            type: 'rating',\n            name: 'intelligence',\n            defaultValue: 3,\n            params: {\n              items: ['1', '2', '3', '4', '5'],\n              valueLabel: (label) => `Intelligence (${label})`,\n            },\n          },\n        ],\n        validators: [(control: AbstractControl) => {\n          const s = control.get('strength');\n          const a = control.get('agility');\n          const i = control.get('intelligence');\n          const skillPoints = (s && a && i) ? (s.value + a.value + i.value) : 0;\n          return skillPoints > 10 ? { skills: true } : null;\n        }],\n        hints: [\n          conditional(['skills', 'skills.strength', 'skills.agility', 'skills.intelligence'], (control, s, a, i) => {\n            const skillPoints = (s && a && i) ? (s.value + a.value + i.value) : 0;\n            const message = `${skillPoints} of 10 skill points used`;\n            if (control.hasError('skills')) {\n              return {\n                type: 'error',\n                message\n              };\n            } else {\n              const skillPointsAvailable = 10 - skillPoints;\n              if (skillPointsAvailable > 0) {\n                return {\n                  type: 'warning',\n                  message\n                };\n              }\n              return {\n                type: 'default',\n                message\n              };\n            }\n          })\n        ]\n      },\n      {\n        type: 'token',\n        name: 'attributes',\n        label: 'Attributes',\n        hints: [\n          {\n            type: 'default',\n            message: 'Press enter to add attribute'\n          },\n          {\n            type: 'error',\n            error: 'minLength',\n            message: 'Minimum length is 2'\n          },\n        ],\n        validators: [(control: AbstractControl) => {\n          return Array.isArray(control.value) && control.value.length > 1 ? null : { minLength: true };\n        }],\n      },\n      {\n        type: 'select',\n        name: 'perks',\n        label: 'Perks',\n        params: {\n          placeholder: 'Select perks',\n          selectionMode: 'multiple',\n          options: [{\n            label: 'Snake Eater',\n            sublabel: 'It gives you a 25% increase to your poison resistance.',\n            value: 'snakeeater'\n          },\n          {\n            label: 'Swift Learner',\n            sublabel: 'Swift Learner\tWhenever you gain experience, you\\'ll receive 5% more experience per level of the perk.',\n            value: 'swiftlearner',\n          },\n          {\n            label: 'Toughness',\n            sublabel: 'It adds 10% to your general damage resistance per level.',\n            value: 'toughness'\n          },\n          {\n            label: 'Explorer',\n            sublabel: 'You\\'ll get more random encounters with this perk.',\n            value: 'explorer'\n          }],\n        },\n        validators: [\n          (ctrl: AbstractControl) => {\n            if (ctrl.value && Array.isArray(ctrl.value) && ctrl.value.length === 2) {\n              return null;\n            }\n            return {\n              perks: true\n            };\n          }\n        ],\n        hints: [{\n          type: 'error',\n          error: 'perks',\n          message: 'You must select two perks'\n        }],\n      },\n      {\n        type: 'array',\n        name: 'items',\n        label: 'Items',\n        initialFields: 0,\n        fieldLabel: (index) => 'Item ' + (index + 1),\n        noFieldsLabel: 'No items',\n        field: {\n          type: 'object',\n          name: 'item_object',\n          fields: [\n            {\n              type: 'input',\n              name: 'item_name',\n              label: 'Name',\n              validators: [ Validators.required],\n              required: true,\n              hints: [\n                {\n                  type: 'error',\n                  error: 'required',\n                  message: 'Item name is required'\n                },\n              ]\n            },\n            {\n              type: 'input',\n              name: 'item_quantity',\n              label: 'Quantity',\n              params: {\n                inputType: 'number'\n              },\n              validators: [ Validators.required, Validators.min(1), Validators.max(10)],\n              required: true,\n              hints: [\n                {\n                  type: 'error',\n                  error: 'required',\n                  message: 'Item quantity is required'\n                },\n                {\n                  type: 'error',\n                  error: 'min',\n                  message: 'Minimum is 1'\n                },\n                {\n                  type: 'error',\n                  error: 'max',\n                  message: 'Maximum is 10'\n                },\n              ]\n            }\n          ]\n        }\n      },\n      {\n        type: 'checkbox',\n        name: 'terms',\n        label: 'Agree to our terms',\n        validators: [(control: AbstractControl) => {\n          if (!control.value) {\n            return {\n              termsDisagree: true,\n            };\n          }\n          return null;\n        }],\n        hints: [\n          {\n            type: 'default',\n            message: 'Read the terms to learn how we collect, use and share your data'\n          },\n          {\n            type: 'error',\n            error: 'termsDisagree',\n            message: 'You must agree to our Terms'\n          }\n        ],\n        errorStateAgent: (host, input) => input.control.invalid && host.submitted\n      },\n      {\n        type: 'buttons',\n        buttons: [\n          {\n            type: 'submit',\n            label: 'Submit',\n            class: 'emphasized',\n            appIcon: 'fas:arrow-circle-right'\n          },\n          {\n            type: 'button',\n            label: 'Reset',\n            action: 'reset'\n          }\n        ]\n      }\n    ]\n  };\n}\n"},yur1:function(e,n,r){"use strict";r.r(n),n.default='<h2>Create a hero</h2>\n\n<vcl-jss-form \n  style="max-width: 40em;"\n  #heroForm="vclJssForm"\n  [schema]="heroSchema" \n  (formSubmit)="onSubmit()" \n  (formAction)="onAction($event)">\n</vcl-jss-form>\n\n<div class="value" *ngIf="state$ | async as formState">\n  <h4>Form</h4>\n  <pre>{{formState | json}}</pre>\n</div>\n'}}])}();