(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{Cu3m:function(s,l,n){"use strict";n.r(l);var a=n("8Y7J"),t=n("19H1");let e=1;class o{constructor(s){this.notifier=s,this.positions=t.f,this.position=t.f.TopRight}default(){this.notifier.queue({text:"A message "+e++,position:this.position})}info(){this.notifier.info({text:"An info message "+e++,position:this.position})}success(){this.notifier.success({text:"A success message "+e++,position:this.position})}warning(){this.notifier.warning({text:"A warning "+e++,position:this.position})}error(){this.notifier.error({text:"An error message "+e++,position:this.position})}custom(){this.notifier.queue({text:"<b>A <i>custom</i> message</b>",html:!0,position:this.position,showCloseButton:!1,timeout:1e4})}}const u={demo:function(){return{label:"Notifiers",tabs:{Demo:o,"README.md":{type:"md",content:n("vi0r")},"demo.component.html":{type:"pre",content:n("eqRX")},"demo.component.ts":{type:"pre",content:n("msDu")}}}}};class c{}var p=n("mpmH"),i=n("pMnS"),r=n("8Ip6"),b=n("K5bH"),h=n("2JrD"),v=n("ErXM"),m=n("6B8K"),j=n("slit"),D=n("rI4U"),d=a.pb({encapsulation:2,styles:[],data:{}});function g(s){return a.Mb(0,[(s()(),a.rb(0,0,null,null,22,"vcl-button-group",[["mode","single"]],[[2,"vclButtonGroup",null],[1,"id",0],[2,"vclError",null]],[[null,"valueChange"]],function(s,l,n){var a=!0;return"valueChange"===l&&(a=!1!==(s.component.position=n)&&a),a},b.b,b.a)),a.Hb(6144,null,h.c,null,[v.a]),a.qb(2,1228800,null,1,v.a,[a.h,[8,null],[2,h.b],[2,h.a]],{value:[0,"value"]},{valueChange:"valueChange"}),a.Ib(603979776,1,{buttons:1}),a.Hb(2048,null,m.a,null,[v.a]),(s()(),a.rb(5,0,null,0,2,"button",[["vcl-button",""]],[[2,"vclSquare",null],[1,"type",0],[2,"vclDisabled",null],[1,"disabled",0],[2,"vclButton",null],[2,"vclHovered",null],[1,"aria-pressed",0],[2,"vclSelected",null]],[[null,"mouseenter"],[null,"mouseleave"],[null,"click"],[null,"focus"],[null,"blur"]],function(s,l,n){var t=!0;return"mouseenter"===l&&(t=!1!==a.Db(s,6).onMouseEnter()&&t),"mouseleave"===l&&(t=!1!==a.Db(s,6).onMouseLeave()&&t),"click"===l&&(t=!1!==a.Db(s,6).onClick()&&t),"focus"===l&&(t=!1!==a.Db(s,6).onFocus()&&t),"blur"===l&&(t=!1!==a.Db(s,6).onBlur()&&t),t},j.b,j.a)),a.qb(6,49152,[[1,4]],0,m.b,[a.h,a.k,[3,m.a]],{value:[0,"value"]},null),(s()(),a.Kb(-1,0,["Top Right"])),(s()(),a.rb(8,0,null,0,2,"button",[["vcl-button",""]],[[2,"vclSquare",null],[1,"type",0],[2,"vclDisabled",null],[1,"disabled",0],[2,"vclButton",null],[2,"vclHovered",null],[1,"aria-pressed",0],[2,"vclSelected",null]],[[null,"mouseenter"],[null,"mouseleave"],[null,"click"],[null,"focus"],[null,"blur"]],function(s,l,n){var t=!0;return"mouseenter"===l&&(t=!1!==a.Db(s,9).onMouseEnter()&&t),"mouseleave"===l&&(t=!1!==a.Db(s,9).onMouseLeave()&&t),"click"===l&&(t=!1!==a.Db(s,9).onClick()&&t),"focus"===l&&(t=!1!==a.Db(s,9).onFocus()&&t),"blur"===l&&(t=!1!==a.Db(s,9).onBlur()&&t),t},j.b,j.a)),a.qb(9,49152,[[1,4]],0,m.b,[a.h,a.k,[3,m.a]],{value:[0,"value"]},null),(s()(),a.Kb(-1,0,["Top"])),(s()(),a.rb(11,0,null,0,2,"button",[["vcl-button",""]],[[2,"vclSquare",null],[1,"type",0],[2,"vclDisabled",null],[1,"disabled",0],[2,"vclButton",null],[2,"vclHovered",null],[1,"aria-pressed",0],[2,"vclSelected",null]],[[null,"mouseenter"],[null,"mouseleave"],[null,"click"],[null,"focus"],[null,"blur"]],function(s,l,n){var t=!0;return"mouseenter"===l&&(t=!1!==a.Db(s,12).onMouseEnter()&&t),"mouseleave"===l&&(t=!1!==a.Db(s,12).onMouseLeave()&&t),"click"===l&&(t=!1!==a.Db(s,12).onClick()&&t),"focus"===l&&(t=!1!==a.Db(s,12).onFocus()&&t),"blur"===l&&(t=!1!==a.Db(s,12).onBlur()&&t),t},j.b,j.a)),a.qb(12,49152,[[1,4]],0,m.b,[a.h,a.k,[3,m.a]],{value:[0,"value"]},null),(s()(),a.Kb(-1,0,["Top Left"])),(s()(),a.rb(14,0,null,0,2,"button",[["vcl-button",""]],[[2,"vclSquare",null],[1,"type",0],[2,"vclDisabled",null],[1,"disabled",0],[2,"vclButton",null],[2,"vclHovered",null],[1,"aria-pressed",0],[2,"vclSelected",null]],[[null,"mouseenter"],[null,"mouseleave"],[null,"click"],[null,"focus"],[null,"blur"]],function(s,l,n){var t=!0;return"mouseenter"===l&&(t=!1!==a.Db(s,15).onMouseEnter()&&t),"mouseleave"===l&&(t=!1!==a.Db(s,15).onMouseLeave()&&t),"click"===l&&(t=!1!==a.Db(s,15).onClick()&&t),"focus"===l&&(t=!1!==a.Db(s,15).onFocus()&&t),"blur"===l&&(t=!1!==a.Db(s,15).onBlur()&&t),t},j.b,j.a)),a.qb(15,49152,[[1,4]],0,m.b,[a.h,a.k,[3,m.a]],{value:[0,"value"]},null),(s()(),a.Kb(-1,0,["Bottom Right"])),(s()(),a.rb(17,0,null,0,2,"button",[["vcl-button",""]],[[2,"vclSquare",null],[1,"type",0],[2,"vclDisabled",null],[1,"disabled",0],[2,"vclButton",null],[2,"vclHovered",null],[1,"aria-pressed",0],[2,"vclSelected",null]],[[null,"mouseenter"],[null,"mouseleave"],[null,"click"],[null,"focus"],[null,"blur"]],function(s,l,n){var t=!0;return"mouseenter"===l&&(t=!1!==a.Db(s,18).onMouseEnter()&&t),"mouseleave"===l&&(t=!1!==a.Db(s,18).onMouseLeave()&&t),"click"===l&&(t=!1!==a.Db(s,18).onClick()&&t),"focus"===l&&(t=!1!==a.Db(s,18).onFocus()&&t),"blur"===l&&(t=!1!==a.Db(s,18).onBlur()&&t),t},j.b,j.a)),a.qb(18,49152,[[1,4]],0,m.b,[a.h,a.k,[3,m.a]],{value:[0,"value"]},null),(s()(),a.Kb(-1,0,["Bottom"])),(s()(),a.rb(20,0,null,0,2,"button",[["vcl-button",""]],[[2,"vclSquare",null],[1,"type",0],[2,"vclDisabled",null],[1,"disabled",0],[2,"vclButton",null],[2,"vclHovered",null],[1,"aria-pressed",0],[2,"vclSelected",null]],[[null,"mouseenter"],[null,"mouseleave"],[null,"click"],[null,"focus"],[null,"blur"]],function(s,l,n){var t=!0;return"mouseenter"===l&&(t=!1!==a.Db(s,21).onMouseEnter()&&t),"mouseleave"===l&&(t=!1!==a.Db(s,21).onMouseLeave()&&t),"click"===l&&(t=!1!==a.Db(s,21).onClick()&&t),"focus"===l&&(t=!1!==a.Db(s,21).onFocus()&&t),"blur"===l&&(t=!1!==a.Db(s,21).onBlur()&&t),t},j.b,j.a)),a.qb(21,49152,[[1,4]],0,m.b,[a.h,a.k,[3,m.a]],{value:[0,"value"]},null),(s()(),a.Kb(-1,0,["Bottom Left"])),(s()(),a.rb(23,0,null,null,0,"br",[],null,null,null,null,null)),(s()(),a.rb(24,0,null,null,0,"br",[],null,null,null,null,null)),(s()(),a.rb(25,0,null,null,2,"button",[["vcl-button",""]],[[2,"vclSquare",null],[1,"type",0],[2,"vclDisabled",null],[1,"disabled",0],[2,"vclButton",null],[2,"vclHovered",null],[1,"aria-pressed",0],[2,"vclSelected",null]],[[null,"click"],[null,"mouseenter"],[null,"mouseleave"],[null,"focus"],[null,"blur"]],function(s,l,n){var t=!0,e=s.component;return"mouseenter"===l&&(t=!1!==a.Db(s,26).onMouseEnter()&&t),"mouseleave"===l&&(t=!1!==a.Db(s,26).onMouseLeave()&&t),"click"===l&&(t=!1!==a.Db(s,26).onClick()&&t),"focus"===l&&(t=!1!==a.Db(s,26).onFocus()&&t),"blur"===l&&(t=!1!==a.Db(s,26).onBlur()&&t),"click"===l&&(t=!1!==e.default()&&t),t},j.b,j.a)),a.qb(26,49152,null,0,m.b,[a.h,a.k,[3,m.a]],null,null),(s()(),a.Kb(-1,0,["An message"])),(s()(),a.rb(28,0,null,null,0,"br",[],null,null,null,null,null)),(s()(),a.rb(29,0,null,null,0,"br",[],null,null,null,null,null)),(s()(),a.rb(30,0,null,null,2,"button",[["vcl-button",""]],[[2,"vclSquare",null],[1,"type",0],[2,"vclDisabled",null],[1,"disabled",0],[2,"vclButton",null],[2,"vclHovered",null],[1,"aria-pressed",0],[2,"vclSelected",null]],[[null,"click"],[null,"mouseenter"],[null,"mouseleave"],[null,"focus"],[null,"blur"]],function(s,l,n){var t=!0,e=s.component;return"mouseenter"===l&&(t=!1!==a.Db(s,31).onMouseEnter()&&t),"mouseleave"===l&&(t=!1!==a.Db(s,31).onMouseLeave()&&t),"click"===l&&(t=!1!==a.Db(s,31).onClick()&&t),"focus"===l&&(t=!1!==a.Db(s,31).onFocus()&&t),"blur"===l&&(t=!1!==a.Db(s,31).onBlur()&&t),"click"===l&&(t=!1!==e.info()&&t),t},j.b,j.a)),a.qb(31,49152,null,0,m.b,[a.h,a.k,[3,m.a]],null,null),(s()(),a.Kb(-1,0,["An info message"])),(s()(),a.rb(33,0,null,null,0,"br",[],null,null,null,null,null)),(s()(),a.rb(34,0,null,null,0,"br",[],null,null,null,null,null)),(s()(),a.rb(35,0,null,null,2,"button",[["vcl-button",""]],[[2,"vclSquare",null],[1,"type",0],[2,"vclDisabled",null],[1,"disabled",0],[2,"vclButton",null],[2,"vclHovered",null],[1,"aria-pressed",0],[2,"vclSelected",null]],[[null,"click"],[null,"mouseenter"],[null,"mouseleave"],[null,"focus"],[null,"blur"]],function(s,l,n){var t=!0,e=s.component;return"mouseenter"===l&&(t=!1!==a.Db(s,36).onMouseEnter()&&t),"mouseleave"===l&&(t=!1!==a.Db(s,36).onMouseLeave()&&t),"click"===l&&(t=!1!==a.Db(s,36).onClick()&&t),"focus"===l&&(t=!1!==a.Db(s,36).onFocus()&&t),"blur"===l&&(t=!1!==a.Db(s,36).onBlur()&&t),"click"===l&&(t=!1!==e.success()&&t),t},j.b,j.a)),a.qb(36,49152,null,0,m.b,[a.h,a.k,[3,m.a]],null,null),(s()(),a.Kb(-1,0,["A success message"])),(s()(),a.rb(38,0,null,null,0,"br",[],null,null,null,null,null)),(s()(),a.rb(39,0,null,null,0,"br",[],null,null,null,null,null)),(s()(),a.rb(40,0,null,null,2,"button",[["vcl-button",""]],[[2,"vclSquare",null],[1,"type",0],[2,"vclDisabled",null],[1,"disabled",0],[2,"vclButton",null],[2,"vclHovered",null],[1,"aria-pressed",0],[2,"vclSelected",null]],[[null,"click"],[null,"mouseenter"],[null,"mouseleave"],[null,"focus"],[null,"blur"]],function(s,l,n){var t=!0,e=s.component;return"mouseenter"===l&&(t=!1!==a.Db(s,41).onMouseEnter()&&t),"mouseleave"===l&&(t=!1!==a.Db(s,41).onMouseLeave()&&t),"click"===l&&(t=!1!==a.Db(s,41).onClick()&&t),"focus"===l&&(t=!1!==a.Db(s,41).onFocus()&&t),"blur"===l&&(t=!1!==a.Db(s,41).onBlur()&&t),"click"===l&&(t=!1!==e.warning()&&t),t},j.b,j.a)),a.qb(41,49152,null,0,m.b,[a.h,a.k,[3,m.a]],null,null),(s()(),a.Kb(-1,0,["A warning"])),(s()(),a.rb(43,0,null,null,0,"br",[],null,null,null,null,null)),(s()(),a.rb(44,0,null,null,0,"br",[],null,null,null,null,null)),(s()(),a.rb(45,0,null,null,2,"button",[["vcl-button",""]],[[2,"vclSquare",null],[1,"type",0],[2,"vclDisabled",null],[1,"disabled",0],[2,"vclButton",null],[2,"vclHovered",null],[1,"aria-pressed",0],[2,"vclSelected",null]],[[null,"click"],[null,"mouseenter"],[null,"mouseleave"],[null,"focus"],[null,"blur"]],function(s,l,n){var t=!0,e=s.component;return"mouseenter"===l&&(t=!1!==a.Db(s,46).onMouseEnter()&&t),"mouseleave"===l&&(t=!1!==a.Db(s,46).onMouseLeave()&&t),"click"===l&&(t=!1!==a.Db(s,46).onClick()&&t),"focus"===l&&(t=!1!==a.Db(s,46).onFocus()&&t),"blur"===l&&(t=!1!==a.Db(s,46).onBlur()&&t),"click"===l&&(t=!1!==e.error()&&t),t},j.b,j.a)),a.qb(46,49152,null,0,m.b,[a.h,a.k,[3,m.a]],null,null),(s()(),a.Kb(-1,0,["An error message"])),(s()(),a.rb(48,0,null,null,0,"br",[],null,null,null,null,null)),(s()(),a.rb(49,0,null,null,0,"br",[],null,null,null,null,null)),(s()(),a.rb(50,0,null,null,2,"button",[["vcl-button",""]],[[2,"vclSquare",null],[1,"type",0],[2,"vclDisabled",null],[1,"disabled",0],[2,"vclButton",null],[2,"vclHovered",null],[1,"aria-pressed",0],[2,"vclSelected",null]],[[null,"click"],[null,"mouseenter"],[null,"mouseleave"],[null,"focus"],[null,"blur"]],function(s,l,n){var t=!0,e=s.component;return"mouseenter"===l&&(t=!1!==a.Db(s,51).onMouseEnter()&&t),"mouseleave"===l&&(t=!1!==a.Db(s,51).onMouseLeave()&&t),"click"===l&&(t=!1!==a.Db(s,51).onClick()&&t),"focus"===l&&(t=!1!==a.Db(s,51).onFocus()&&t),"blur"===l&&(t=!1!==a.Db(s,51).onBlur()&&t),"click"===l&&(t=!1!==e.custom()&&t),t},j.b,j.a)),a.qb(51,49152,null,0,m.b,[a.h,a.k,[3,m.a]],null,null),(s()(),a.Kb(-1,0,["A custom message"])),(s()(),a.rb(53,0,null,null,0,"br",[],null,null,null,null,null)),(s()(),a.rb(54,0,null,null,0,"br",[],null,null,null,null,null))],function(s,l){var n=l.component;s(l,2,0,n.position),s(l,6,0,n.positions.TopRight),s(l,9,0,n.positions.Top),s(l,12,0,n.positions.TopLeft),s(l,15,0,n.positions.BottomRight),s(l,18,0,n.positions.Bottom),s(l,21,0,n.positions.BottomLeft)},function(s,l){s(l,0,0,a.Db(l,2)._hostClasses,a.Db(l,2).elementId,a.Db(l,2).hasError),s(l,5,0,a.Db(l,6).classVCLSquare,a.Db(l,6).attrType,a.Db(l,6).isDisabled,a.Db(l,6).isDisabled,a.Db(l,6)._hostClasses,a.Db(l,6).hovered,a.Db(l,6).selectable,a.Db(l,6).selected),s(l,8,0,a.Db(l,9).classVCLSquare,a.Db(l,9).attrType,a.Db(l,9).isDisabled,a.Db(l,9).isDisabled,a.Db(l,9)._hostClasses,a.Db(l,9).hovered,a.Db(l,9).selectable,a.Db(l,9).selected),s(l,11,0,a.Db(l,12).classVCLSquare,a.Db(l,12).attrType,a.Db(l,12).isDisabled,a.Db(l,12).isDisabled,a.Db(l,12)._hostClasses,a.Db(l,12).hovered,a.Db(l,12).selectable,a.Db(l,12).selected),s(l,14,0,a.Db(l,15).classVCLSquare,a.Db(l,15).attrType,a.Db(l,15).isDisabled,a.Db(l,15).isDisabled,a.Db(l,15)._hostClasses,a.Db(l,15).hovered,a.Db(l,15).selectable,a.Db(l,15).selected),s(l,17,0,a.Db(l,18).classVCLSquare,a.Db(l,18).attrType,a.Db(l,18).isDisabled,a.Db(l,18).isDisabled,a.Db(l,18)._hostClasses,a.Db(l,18).hovered,a.Db(l,18).selectable,a.Db(l,18).selected),s(l,20,0,a.Db(l,21).classVCLSquare,a.Db(l,21).attrType,a.Db(l,21).isDisabled,a.Db(l,21).isDisabled,a.Db(l,21)._hostClasses,a.Db(l,21).hovered,a.Db(l,21).selectable,a.Db(l,21).selected),s(l,25,0,a.Db(l,26).classVCLSquare,a.Db(l,26).attrType,a.Db(l,26).isDisabled,a.Db(l,26).isDisabled,a.Db(l,26)._hostClasses,a.Db(l,26).hovered,a.Db(l,26).selectable,a.Db(l,26).selected),s(l,30,0,a.Db(l,31).classVCLSquare,a.Db(l,31).attrType,a.Db(l,31).isDisabled,a.Db(l,31).isDisabled,a.Db(l,31)._hostClasses,a.Db(l,31).hovered,a.Db(l,31).selectable,a.Db(l,31).selected),s(l,35,0,a.Db(l,36).classVCLSquare,a.Db(l,36).attrType,a.Db(l,36).isDisabled,a.Db(l,36).isDisabled,a.Db(l,36)._hostClasses,a.Db(l,36).hovered,a.Db(l,36).selectable,a.Db(l,36).selected),s(l,40,0,a.Db(l,41).classVCLSquare,a.Db(l,41).attrType,a.Db(l,41).isDisabled,a.Db(l,41).isDisabled,a.Db(l,41)._hostClasses,a.Db(l,41).hovered,a.Db(l,41).selectable,a.Db(l,41).selected),s(l,45,0,a.Db(l,46).classVCLSquare,a.Db(l,46).attrType,a.Db(l,46).isDisabled,a.Db(l,46).isDisabled,a.Db(l,46)._hostClasses,a.Db(l,46).hovered,a.Db(l,46).selectable,a.Db(l,46).selected),s(l,50,0,a.Db(l,51).classVCLSquare,a.Db(l,51).attrType,a.Db(l,51).isDisabled,a.Db(l,51).isDisabled,a.Db(l,51)._hostClasses,a.Db(l,51).hovered,a.Db(l,51).selectable,a.Db(l,51).selected)})}function f(s){return a.Mb(0,[(s()(),a.rb(0,0,null,null,1,"ng-component",[],null,null,null,g,d)),a.qb(1,49152,null,0,o,[D.a],null,null)],null,null)}var k=a.nb("ng-component",o,f,{},{},[]),y=n("SVse"),B=n("s7LF"),C=n("POq0"),w=n("dy60"),q=n("tfYh"),L=n("QQfA"),S=n("IP0z"),M=n("P3WH"),A=n("fPtZ"),T=n("zMNK"),x=n("p/eS"),N=n("2FIb"),H=n("61Fc"),R=n("g2Nb"),V=n("hyVG"),E=n("/HVE"),_=n("hOhj"),I=n("cLiI"),K=n("3T7+"),F=n("iInd"),P=n("PNUx");n.d(l,"NotifierDemoModuleNgFactory",function(){return J});var J=a.ob(c,[],function(s){return a.Ab([a.Bb(512,a.j,a.Z,[[8,[p.a,i.a,r.a,k]],[3,a.j],a.w]),a.Bb(4608,y.n,y.m,[a.t,[2,y.A]]),a.Bb(4608,B.v,B.v,[]),a.Bb(4608,C.a,C.a,[]),a.Bb(4608,w.a,w.a,[[2,q.a]]),a.Bb(4608,L.a,L.a,[L.h,L.c,a.j,L.f,L.d,a.q,a.y,y.d,S.b,[2,y.h]]),a.Bb(5120,L.i,L.j,[L.a]),a.Bb(4608,M.a,M.a,[L.a,a.q,A.d]),a.Bb(4608,D.a,D.a,[M.a]),a.Bb(1073742336,y.c,y.c,[]),a.Bb(1073742336,B.u,B.u,[]),a.Bb(1073742336,B.l,B.l,[]),a.Bb(1073742336,T.e,T.e,[]),a.Bb(1073742336,C.b,C.b,[]),a.Bb(1073742336,x.a,x.a,[]),a.Bb(1073742336,N.a,N.a,[]),a.Bb(1073742336,H.c,H.c,[]),a.Bb(1073742336,R.a,R.a,[]),a.Bb(1073742336,V.a,V.a,[]),a.Bb(1073742336,S.a,S.a,[]),a.Bb(1073742336,E.b,E.b,[]),a.Bb(1073742336,_.c,_.c,[]),a.Bb(1073742336,L.e,L.e,[]),a.Bb(1073742336,I.b,I.b,[]),a.Bb(1073742336,K.a,K.a,[]),a.Bb(1073742336,F.q,F.q,[[2,F.v],[2,F.m]]),a.Bb(1073742336,c,c,[]),a.Bb(256,A.d,I.c,[]),a.Bb(256,A.b,I.d,[]),a.Bb(1024,F.i,function(){return[[{path:"",component:P.a,data:u}]]},[])])})},K5bH:function(s,l,n){"use strict";n.d(l,"a",function(){return t}),n.d(l,"b",function(){return e});var a=n("8Y7J"),t=(n("6B8K"),n("ErXM"),n("2JrD"),a.pb({encapsulation:2,styles:[],data:{}}));function e(s){return a.Mb(2,[a.Cb(null,0)],null,null)}},eqRX:function(s,l){s.exports='<span class="hljs-tag">&lt;<span class="hljs-name">vcl-button-group</span> [(<span class="hljs-attr">value</span>)]=<span class="hljs-string">"position"</span> <span class="hljs-attr">mode</span>=<span class="hljs-string">"single"</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">vcl-button</span> [<span class="hljs-attr">value</span>]=<span class="hljs-string">"positions.TopRight"</span>&gt;</span>Top Right<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">vcl-button</span> [<span class="hljs-attr">value</span>]=<span class="hljs-string">"positions.Top"</span>&gt;</span>Top<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">vcl-button</span> [<span class="hljs-attr">value</span>]=<span class="hljs-string">"positions.TopLeft"</span>&gt;</span>Top Left<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">vcl-button</span> [<span class="hljs-attr">value</span>]=<span class="hljs-string">"positions.BottomRight"</span>&gt;</span>Bottom Right<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">vcl-button</span> [<span class="hljs-attr">value</span>]=<span class="hljs-string">"positions.Bottom"</span>&gt;</span>Bottom<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">vcl-button</span> [<span class="hljs-attr">value</span>]=<span class="hljs-string">"positions.BottomLeft"</span>&gt;</span>Bottom Left<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">vcl-button-group</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">vcl-button</span> (<span class="hljs-attr">click</span>)=<span class="hljs-string">"default()"</span>&gt;</span>An message<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">vcl-button</span> (<span class="hljs-attr">click</span>)=<span class="hljs-string">"info()"</span>&gt;</span>An info message<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">vcl-button</span> (<span class="hljs-attr">click</span>)=<span class="hljs-string">"success()"</span>&gt;</span>A success message<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">vcl-button</span> (<span class="hljs-attr">click</span>)=<span class="hljs-string">"warning()"</span>&gt;</span>A warning<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">vcl-button</span> (<span class="hljs-attr">click</span>)=<span class="hljs-string">"error()"</span>&gt;</span>An error message<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">vcl-button</span> (<span class="hljs-attr">click</span>)=<span class="hljs-string">"custom()"</span>&gt;</span>A custom message<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span>\n'},mpmH:function(s,l,n){"use strict";n.d(l,"a",function(){return g});var a=n("8Y7J"),t=n("b1Eb"),e=n("X5GH"),o=n("dy60"),u=n("9Rb9"),c=n("SVse"),p=n("slit"),i=n("6B8K"),r=n("Z59J"),b=n("2l/k"),h=n("fPtZ"),v=a.pb({encapsulation:2,styles:[],data:{animation:[{type:7,name:"stateAnimation",definitions:[{type:1,expr:"void => open",animation:{type:10,animation:{type:8,animation:[{type:6,styles:{opacity:0},offset:null},{type:4,styles:{type:6,styles:{opacity:1},offset:null},timings:"{{openClosingTime}}ms"}],options:null},options:null},options:null},{type:1,expr:"open => closing",animation:{type:10,animation:{type:8,animation:[{type:6,styles:{opacity:1},offset:null},{type:4,styles:{type:6,styles:{opacity:0},offset:null},timings:"{{voidOpenTime}}ms"}],options:null},options:null},options:null}],options:{}}]}});function m(s){return a.Mb(0,[(s()(),a.rb(0,0,null,null,1,"div",[],null,null,null,null,null)),(s()(),a.Kb(1,null,["",""]))],null,function(s,l){s(l,1,0,l.component.notificationRef.text)})}function j(s){return a.Mb(0,[(s()(),a.rb(0,0,null,null,0,"div",[],[[8,"innerHTML",1]],null,null,null,null))],null,function(s,l){s(l,0,0,l.component.notificationRef.text)})}function D(s){return a.Mb(2,[(s()(),a.rb(0,0,null,null,3,"div",[["class","vclNotificationIconContainer"]],null,null,null,null,null)),(s()(),a.rb(1,0,null,null,2,"vcl-icon",[["class","vclNotificationIcon"]],[[2,"vclIcon",null],[1,"role",0]],null,null,t.b,t.a)),a.Hb(512,null,e.a,e.a,[a.C,o.a]),a.qb(3,4767744,null,0,u.a,[e.a,a.k],{icon:[0,"icon"]},null),(s()(),a.rb(4,0,null,null,4,"div",[["class","vclNotificationContent vclLayoutFlex"]],null,null,null,null,null)),(s()(),a.gb(16777216,null,null,1,null,m)),a.qb(6,16384,null,0,c.l,[a.N,a.K],{ngIf:[0,"ngIf"]},null),(s()(),a.gb(16777216,null,null,1,null,j)),a.qb(8,16384,null,0,c.l,[a.N,a.K],{ngIf:[0,"ngIf"]},null),(s()(),a.rb(9,0,null,null,4,"button",[["class","vclTransparent vclLayoutSelfStart"],["type","button"],["vcl-square-button",""]],[[2,"vclSquare",null],[1,"type",0],[2,"vclDisabled",null],[1,"disabled",0],[2,"vclButton",null],[2,"vclHovered",null],[1,"aria-pressed",0],[2,"vclSelected",null]],[[null,"click"],[null,"mouseenter"],[null,"mouseleave"],[null,"focus"],[null,"blur"]],function(s,l,n){var t=!0,e=s.component;return"mouseenter"===l&&(t=!1!==a.Db(s,10).onMouseEnter()&&t),"mouseleave"===l&&(t=!1!==a.Db(s,10).onMouseLeave()&&t),"click"===l&&(t=!1!==a.Db(s,10).onClick()&&t),"focus"===l&&(t=!1!==a.Db(s,10).onFocus()&&t),"blur"===l&&(t=!1!==a.Db(s,10).onBlur()&&t),"click"===l&&(t=!1!==e.close()&&t),t},p.b,p.a)),a.qb(10,49152,null,0,i.b,[a.h,a.k,[3,i.a]],{type:[0,"type"]},null),(s()(),a.rb(11,0,null,0,2,"vcl-icon",[["icon","vcl:close"]],[[2,"vclIcon",null],[1,"role",0]],null,null,t.b,t.a)),a.Hb(512,null,e.a,e.a,[a.C,o.a]),a.qb(13,4767744,null,0,u.a,[e.a,a.k],{icon:[0,"icon"]},null)],function(s,l){var n=l.component;s(l,3,0,n.icon),s(l,6,0,!n.notificationRef.html),s(l,8,0,n.notificationRef.html),s(l,10,0,"button"),s(l,13,0,"vcl:close")},function(s,l){s(l,1,0,a.Db(l,3).vclIcon,a.Db(l,3).attrRole),s(l,9,0,a.Db(l,10).classVCLSquare,a.Db(l,10).attrType,a.Db(l,10).isDisabled,a.Db(l,10).isDisabled,a.Db(l,10)._hostClasses,a.Db(l,10).hovered,a.Db(l,10).selectable,a.Db(l,10).selected),s(l,11,0,a.Db(l,13).vclIcon,a.Db(l,13).attrRole)})}function d(s){return a.Mb(0,[(s()(),a.rb(0,0,null,null,1,"vcl-notification",[],[[2,"vclNotification",null],[2,"vclLayoutHorizontal",null],[2,"vclLayoutCenter",null],[40,"@stateAnimation",0]],[["component","@stateAnimation.done"]],function(s,l,n){var t=!0;return"component:@stateAnimation.done"===l&&(t=!1!==a.Db(s,1).onFadeFinished(n)&&t),t},D,v)),a.qb(1,4243456,null,0,r.a,[b.a,a.k,h.b,h.d,a.C],null,null)],null,function(s,l){s(l,0,0,a.Db(l,1).classVclNotification,a.Db(l,1).classVclLayoutHorizontal,a.Db(l,1).classVclLayoutCenter,a.Db(l,1).fadeAnimation)})}var g=a.nb("vcl-notification",r.a,d,{},{},[])},msDu:function(s,l){s.exports='<span class="hljs-keyword">import</span> { NotifierPosition, NotifierService } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@ng-vcl/ng-vcl\'</span>;\n<span class="hljs-keyword">import</span> { Component, Input } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/core\'</span>;\n\n<span class="hljs-keyword">let</span> cnt = <span class="hljs-number">1</span>;\n\n<span class="hljs-meta">@Component</span>({\n  templateUrl: <span class="hljs-string">\'demo.component.html\'</span>\n})\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> NotifierDemoComponent {\n\n  <span class="hljs-keyword">constructor</span>(<span class="hljs-params"><span class="hljs-keyword">private</span> notifier: NotifierService</span>) {}\n\n  positions = NotifierPosition;\n  position: NotifierPosition = NotifierPosition.TopRight;\n\n  <span class="hljs-keyword">default</span>() {\n    <span class="hljs-keyword">this</span>.notifier.queue({\n      text: <span class="hljs-string">\'A message \'</span> + cnt++,\n      position: <span class="hljs-keyword">this</span>.position\n    });\n  }\n  info() {\n    <span class="hljs-keyword">this</span>.notifier.info({\n      text: <span class="hljs-string">\'An info message \'</span> + cnt++,\n      position: <span class="hljs-keyword">this</span>.position\n    });\n  }\n  success() {\n    <span class="hljs-keyword">this</span>.notifier.success({\n      text: <span class="hljs-string">\'A success message \'</span> + cnt++,\n      position: <span class="hljs-keyword">this</span>.position\n    });\n  }\n  warning() {\n    <span class="hljs-keyword">this</span>.notifier.warning({\n      text: <span class="hljs-string">\'A warning \'</span> + cnt++,\n      position: <span class="hljs-keyword">this</span>.position\n    });\n  }\n  error() {\n    <span class="hljs-keyword">this</span>.notifier.error({\n      text: <span class="hljs-string">\'An error message \'</span> + cnt++,\n      position: <span class="hljs-keyword">this</span>.position\n    });\n  }\n  custom() {\n    <span class="hljs-keyword">this</span>.notifier.queue({\n      text: <span class="hljs-string">\'&lt;b&gt;A &lt;i&gt;custom&lt;/i&gt; message&lt;/b&gt;\'</span>,\n      html: <span class="hljs-literal">true</span>,\n      <span class="hljs-comment">// backgroundColor: \'black\',</span>\n      <span class="hljs-comment">// textColor: \'white\',</span>\n      position: <span class="hljs-keyword">this</span>.position,\n      showCloseButton: <span class="hljs-literal">false</span>,\n      timeout: <span class="hljs-number">10000</span>\n    });\n  }\n}\n'},vi0r:function(s,l){s.exports='<h1 id="vcl-notifier">vcl-notifier</h1>\n<p>Growl-style notifiers</p>\n<h2 id="usage">Usage</h2>\n<pre class="hljs"><span class="hljs-keyword">import</span> { VCLNotifierModule, VCLLayerModule } <span class="hljs-keyword">from</span> <span class="hljs-string">&apos;ng-vcl&apos;</span>;\n\n@NgModule({\n  <span class="hljs-attr">imports</span>: [ \n    VCLNotifierModule,\n  ],\n  ...\n})\n<span class="hljs-keyword">export</span> <span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">AppComponent</span> </span>{}</pre>\n<pre class="hljs">@Component({ ... })\n<span class="hljs-keyword">export</span> <span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">MyComponent</span> </span>{\n\n  <span class="hljs-keyword">constructor</span>(private notifier: NotifierService) {}\n\n  info() {\n    <span class="hljs-keyword">this</span>.notifier.info({\n      <span class="hljs-attr">text</span>: <span class="hljs-string">&apos;An info message&apos;</span>\n    });\n  }\n  success() {\n    <span class="hljs-keyword">this</span>.notifier.success({\n      <span class="hljs-attr">text</span>: <span class="hljs-string">&apos;A success message&apos;</span>,\n      <span class="hljs-attr">position</span>: NotifierPosition.BottomRight\n    });\n  }\n  warning() {\n    <span class="hljs-keyword">this</span>.notifier.warning({\n      <span class="hljs-attr">text</span>: <span class="hljs-string">&apos;A warning&apos;</span>,\n      <span class="hljs-attr">showCloseButton</span>: <span class="hljs-literal">false</span>,\n      <span class="hljs-attr">timeout</span>: <span class="hljs-number">10000</span>\n    });\n  }\n  error() {\n    <span class="hljs-keyword">this</span>.notifier.error({\n      <span class="hljs-attr">text</span>: <span class="hljs-string">&apos;An error message&apos;</span>,\n      <span class="hljs-attr">timeout</span>: <span class="hljs-literal">false</span>\n    });\n  }\n  custom() {\n    <span class="hljs-keyword">this</span>.notifier.show({\n      <span class="hljs-attr">text</span>: <span class="hljs-string">&apos;&lt;b&gt;A &lt;i&gt;custom&lt;/i&gt; message&lt;/b&gt;&apos;</span>,\n      <span class="hljs-attr">html</span>: <span class="hljs-literal">true</span>,\n      <span class="hljs-attr">backgroundColor</span>: <span class="hljs-string">&apos;black&apos;</span>,\n      <span class="hljs-attr">textColor</span>: <span class="hljs-string">&apos;white&apos;</span>,\n      <span class="hljs-attr">position</span>: NotifierPosition.TopLeft,\n      <span class="hljs-attr">showCloseButton</span>: <span class="hljs-literal">false</span>,\n      <span class="hljs-attr">timeout</span>: <span class="hljs-number">10000</span>\n    });\n  }\n}</pre>\n<h3 id="api">API</h3>\n<pre class="hljs"><span class="hljs-keyword">export</span> <span class="hljs-keyword">enum</span> NotifierType {\n  None,\n  Info,\n  Success,\n  Warning,\n  <span class="hljs-built_in">Error</span>\n}\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">enum</span> NotifierPosition {\n  TopRight,\n  Top,\n  TopLeft,\n  BottomRight,\n  Bottom,\n  BottomLeft,\n}\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">interface</span> NotifierOptions {\n  text?: <span class="hljs-built_in">string</span>;\n  html?: <span class="hljs-built_in">boolean</span>;\n  <span class="hljs-keyword">type</span>?: NotifierType;\n  showCloseButton?: <span class="hljs-built_in">boolean</span>;\n  position?: NotifierPosition;\n  timeout?: <span class="hljs-built_in">number</span> | <span class="hljs-built_in">boolean</span>;\n  backgroundColor?: <span class="hljs-built_in">string</span>;\n  textColor?: <span class="hljs-built_in">string</span>;\n}</pre>\n'}}]);