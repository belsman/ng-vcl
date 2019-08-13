(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{KBb2:function(n,l){n.exports='<h1 id="vcl-token">vcl-token</h1>\n<h2 id="usage">Usage</h2>\n<pre class="hljs"><span class="hljs-keyword">import</span> { VCLTokenModule } <span class="hljs-keyword">from</span> <span class="hljs-string">&apos;ng-vcl&apos;</span>;\n\n@NgModule({\n  <span class="hljs-attr">imports</span>: [ VCLTokenModule ],\n  ...\n})\n<span class="hljs-keyword">export</span> <span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">AppComponent</span> </span>{}</pre>\n<h2 id="single-token">single token</h2>\n<pre class="hljs"><code>&lt;vcl-token&gt;mytoken&lt;/vcl-token&gt;</code></pre>\n<h2 id="single-selected-token">single selected token</h2>\n<pre class="hljs"><code>&lt;vcl-token [selected]=&quot;true&quot;&gt;mytoken&lt;/vcl-token&gt;</code></pre>\n<h2 id="single-removable-token">single removable token</h2>\n<pre class="hljs"><code>&lt;vcl-token [removable]=&quot;true&quot; (remove)=&quot;onRemove()&quot;&gt;mytoken&lt;/vcl-token&gt;</code></pre>\n<h2 id="token-list">token-list</h2>\n<pre class="hljs"><span class="hljs-tag">&lt;<span class="hljs-name">vcl-token-list</span> [<span class="hljs-attr">selectable</span>]=<span class="hljs-string">&quot;true&quot;</span> (<span class="hljs-attr">change</span>)=<span class="hljs-string">&quot;changed($event);&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">vcl-token</span> [<span class="hljs-attr">selected</span>]=<span class="hljs-string">&quot;true&quot;</span>&gt;</span>mytoken 1<span class="hljs-tag">&lt;/<span class="hljs-name">vcl-token</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">vcl-token</span> [<span class="hljs-attr">selected</span>]=<span class="hljs-string">&quot;false&quot;</span>&gt;</span>mytoken 2<span class="hljs-tag">&lt;/<span class="hljs-name">vcl-token</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">vcl-token-list</span>&gt;</span></pre>\n<h2 id="token-input">token-input</h2>\n<pre class="hljs"><span class="hljs-tag">&lt;<span class="hljs-name">vcl-token-input</span> (<span class="hljs-attr">valueChange</span>)=<span class="hljs-string">&quot;changed($event);&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">input</span> <span class="hljs-attr">vclInput</span> /&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">vcl-token-input</span>&gt;</span></pre>\n<h3 id="api">API</h3>\n<h4 id="vcl-token-attributes">vcl-token attributes</h4>\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Type</th>\n<th>Default</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody><tr>\n<td><code>value</code></td>\n<td>any</td>\n<td></td>\n<td>token value</td>\n</tr>\n<tr>\n<td><code>selected</code></td>\n<td>boolean</td>\n<td>false</td>\n<td>if true, the token is highlighted</td>\n</tr>\n<tr>\n<td><code>removable</code></td>\n<td>boolean</td>\n<td>false</td>\n<td>if true, the remove-cross is shown</td>\n</tr>\n</tbody></table>\n<h4 id="vcl-token-events">vcl-token events</h4>\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Type</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody><tr>\n<td><code>remove</code></td>\n<td></td>\n<td>called when the remove-button is pressed</td>\n</tr>\n</tbody></table>\n<h4 id="token-list-attributes">token-list attributes</h4>\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Type</th>\n<th>Default</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody><tr>\n<td><code>value</code></td>\n<td>any[]</td>\n<td>any[]</td>\n<td>The values of the selected tokens</td>\n</tr>\n<tr>\n<td><code>selectable</code></td>\n<td>boolean</td>\n<td>false</td>\n<td>tokens are selectable if true</td>\n</tr>\n</tbody></table>\n<h4 id="token-list-events">token-list events</h4>\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Type</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody><tr>\n<td><code>tokensChange</code></td>\n<td>string[]</td>\n<td>called when the selection of token changes</td>\n</tr>\n</tbody></table>\n<h4 id="vcl-token-input-attributes">vcl-token-input attributes</h4>\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Type</th>\n<th>Default</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody><tr>\n<td><code>value</code></td>\n<td>Token[]</td>\n<td>[]</td>\n<td>List of tokens</td>\n</tr>\n<tr>\n<td><code>selectable</code></td>\n<td>boolean</td>\n<td>false</td>\n<td>tokens are selectable if true</td>\n</tr>\n<tr>\n<td><code>allowDuplicates</code></td>\n<td>boolean</td>\n<td>false</td>\n<td>tokens with matching values are not added</td>\n</tr>\n<tr>\n<td><code>addOnEnter</code></td>\n<td>boolean</td>\n<td>true</td>\n<td>New token will be added when pressing enter</td>\n</tr>\n<tr>\n<td><code>preselect</code></td>\n<td>boolean</td>\n<td>true</td>\n<td>tokens are preselected after being added if true</td>\n</tr>\n<tr>\n<td><code>tokenClass</code></td>\n<td>string</td>\n<td></td>\n<td>additional css class for tokens</td>\n</tr>\n<tr>\n<td><code>tabindex</code></td>\n<td>number</td>\n<td>0</td>\n<td>The tabindex of the token-input</td>\n</tr>\n</tbody></table>\n<h4 id="vcl-token-input-events">vcl-token-input events</h4>\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Type</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody><tr>\n<td><code>valueChange</code></td>\n<td>Token[]</td>\n<td>called after tokens are added/removed or the selection of token changes</td>\n</tr>\n<tr>\n<td><code>confirm</code></td>\n<td>Token[]</td>\n<td>called after <code>enter</code> is pressed when input element is empty</td>\n</tr>\n</tbody></table>\n<h4 id="interfaces">interfaces</h4>\n<pre class="hljs"><span class="hljs-keyword">interface</span> Token {\n  label: <span class="hljs-built_in">string</span>;\n  value: <span class="hljs-built_in">any</span>;\n  selected?: <span class="hljs-built_in">boolean</span>;\n}</pre>\n'},b77Z:function(n,l){n.exports='<span class="hljs-tag">&lt;<span class="hljs-name">h3</span>&gt;</span>single tokens<span class="hljs-tag">&lt;/<span class="hljs-name">h3</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">vcl-token</span>&gt;</span>my token<span class="hljs-tag">&lt;/<span class="hljs-name">vcl-token</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">vcl-token</span> [<span class="hljs-attr">selected</span>]=<span class="hljs-string">"true"</span>&gt;</span>my selected token<span class="hljs-tag">&lt;/<span class="hljs-name">vcl-token</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">vcl-token</span> [<span class="hljs-attr">removable</span>]=<span class="hljs-string">"true"</span> (<span class="hljs-attr">remove</span>)=<span class="hljs-string">"onRemove($event)"</span>&gt;</span>my removable token<span class="hljs-tag">&lt;/<span class="hljs-name">vcl-token</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">vcl-token</span> [<span class="hljs-attr">removable</span>]=<span class="hljs-string">"true"</span> (<span class="hljs-attr">remove</span>)=<span class="hljs-string">"onRemove($event)"</span>&gt;</span>my icon token<span class="hljs-tag">&lt;/<span class="hljs-name">vcl-token</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">br</span>/&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">h3</span>&gt;</span>token-list<span class="hljs-tag">&lt;/<span class="hljs-name">h3</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">vcl-token-list</span> [<span class="hljs-attr">value</span>]=<span class="hljs-string">"[1]"</span> (<span class="hljs-attr">valueChange</span>)=<span class="hljs-string">"onListChange($event);"</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">vcl-token</span> [<span class="hljs-attr">value</span>]=<span class="hljs-string">"1"</span>&gt;</span>my token 1<span class="hljs-tag">&lt;/<span class="hljs-name">vcl-token</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">vcl-token</span> [<span class="hljs-attr">value</span>]=<span class="hljs-string">"2"</span>&gt;</span>my token 2<span class="hljs-tag">&lt;/<span class="hljs-name">vcl-token</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">vcl-token-list</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">br</span>/&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">h3</span>&gt;</span>selectable and removable tokenlist<span class="hljs-tag">&lt;/<span class="hljs-name">h3</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">vcl-token-list</span> [<span class="hljs-attr">value</span>]=<span class="hljs-string">"[1]"</span> [<span class="hljs-attr">selectable</span>]=<span class="hljs-string">"true"</span> [<span class="hljs-attr">removable</span>]=<span class="hljs-string">"true"</span> (<span class="hljs-attr">valueChange</span>)=<span class="hljs-string">"onListChange($event);"</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">vcl-token</span> [<span class="hljs-attr">value</span>]=<span class="hljs-string">"1"</span>&gt;</span>my token 1<span class="hljs-tag">&lt;/<span class="hljs-name">vcl-token</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">vcl-token</span> [<span class="hljs-attr">value</span>]=<span class="hljs-string">"2"</span>&gt;</span>my token 2<span class="hljs-tag">&lt;/<span class="hljs-name">vcl-token</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">vcl-token-list</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">br</span>/&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">h3</span>&gt;</span>token-input<span class="hljs-tag">&lt;/<span class="hljs-name">h3</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">vcl-token-input</span> (<span class="hljs-attr">valueChange</span>)=<span class="hljs-string">"onInputChange($event);"</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">input</span> <span class="hljs-attr">vclInput</span> /&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">vcl-token-input</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">h3</span>&gt;</span>token-input (disabled)<span class="hljs-tag">&lt;/<span class="hljs-name">h3</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">vcl-token-input</span> [<span class="hljs-attr">disabled</span>]=<span class="hljs-string">"true"</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">input</span> <span class="hljs-attr">vclInput</span> /&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">vcl-token-input</span>&gt;</span>\n'},kN3k:function(n,l,s){"use strict";s.r(l);var a=s("CcnG"),t=function(){function n(){}return n.prototype.onRemove=function(n){console.log("onRemove",n)},n.prototype.onListChange=function(n){console.log("onListChange",n)},n.prototype.onInputChange=function(n){console.log("onInputChange",n)},n}(),e={demo:function(){return{label:"Token",tabs:{Demo:t,"README.md":{type:"md",content:s("KBb2")},"demo.component.html":{type:"pre",content:s("b77Z")},"demo.component.ts":{type:"pre",content:s("qOPM")}}}}},o=function(){return function(){}}(),c=s("pMnS"),u=s("8Ip6"),p=s("+nGw"),r=s("sM5x"),b=s("gIcY"),h=s("nhKh"),d=a.qb({encapsulation:2,styles:[],data:{}});function i(n){return a.Nb(2,[a.Db(null,0)],null,null)}var v=s("Gc1z"),k=s("pIVY"),g=s("tMsr"),j=s("2JrD"),m=s("1/Kn"),E=a.qb({encapsulation:2,styles:[],data:{}});function C(n){return a.Nb(0,[(n()(),a.sb(0,0,null,null,1,"h3",[],null,null,null,null,null)),(n()(),a.Lb(-1,null,["single tokens"])),(n()(),a.sb(2,0,null,null,2,"vcl-token",[],[[2,"vclToken",null],[1,"tabindex",0],[2,"vclSelected",null],[4,"cursor",null],[2,"vclDisabled",null]],[[null,"blur"],[null,"click"]],function(n,l,s){var t=!0;return"blur"===l&&(t=!1!==a.Eb(n,3).onBlur(s)&&t),"click"===l&&(t=!1!==a.Eb(n,3).onClick(s)&&t),t},p.b,p.a)),a.rb(3,49152,null,0,r.b,[a.h,a.k,[3,r.a]],null,null),(n()(),a.Lb(-1,0,["my token"])),(n()(),a.sb(5,0,null,null,2,"vcl-token",[],[[2,"vclToken",null],[1,"tabindex",0],[2,"vclSelected",null],[4,"cursor",null],[2,"vclDisabled",null]],[[null,"blur"],[null,"click"]],function(n,l,s){var t=!0;return"blur"===l&&(t=!1!==a.Eb(n,6).onBlur(s)&&t),"click"===l&&(t=!1!==a.Eb(n,6).onClick(s)&&t),t},p.b,p.a)),a.rb(6,49152,null,0,r.b,[a.h,a.k,[3,r.a]],{selected:[0,"selected"]},null),(n()(),a.Lb(-1,0,["my selected token"])),(n()(),a.sb(8,0,null,null,2,"vcl-token",[],[[2,"vclToken",null],[1,"tabindex",0],[2,"vclSelected",null],[4,"cursor",null],[2,"vclDisabled",null]],[[null,"remove"],[null,"blur"],[null,"click"]],function(n,l,s){var t=!0,e=n.component;return"blur"===l&&(t=!1!==a.Eb(n,9).onBlur(s)&&t),"click"===l&&(t=!1!==a.Eb(n,9).onClick(s)&&t),"remove"===l&&(t=!1!==e.onRemove(s)&&t),t},p.b,p.a)),a.rb(9,49152,null,0,r.b,[a.h,a.k,[3,r.a]],{removable:[0,"removable"]},{remove:"remove"}),(n()(),a.Lb(-1,0,["my removable token"])),(n()(),a.sb(11,0,null,null,2,"vcl-token",[],[[2,"vclToken",null],[1,"tabindex",0],[2,"vclSelected",null],[4,"cursor",null],[2,"vclDisabled",null]],[[null,"remove"],[null,"blur"],[null,"click"]],function(n,l,s){var t=!0,e=n.component;return"blur"===l&&(t=!1!==a.Eb(n,12).onBlur(s)&&t),"click"===l&&(t=!1!==a.Eb(n,12).onClick(s)&&t),"remove"===l&&(t=!1!==e.onRemove(s)&&t),t},p.b,p.a)),a.rb(12,49152,null,0,r.b,[a.h,a.k,[3,r.a]],{removable:[0,"removable"]},{remove:"remove"}),(n()(),a.Lb(-1,0,["my icon token"])),(n()(),a.sb(14,0,null,null,0,"br",[],null,null,null,null,null)),(n()(),a.sb(15,0,null,null,1,"h3",[],null,null,null,null,null)),(n()(),a.Lb(-1,null,["token-list"])),(n()(),a.sb(17,0,null,null,11,"vcl-token-list",[],[[2,"vclTokenList",null],[2,"vclTokenContainer",null]],[[null,"valueChange"]],function(n,l,s){var a=!0;return"valueChange"===l&&(a=!1!==n.component.onListChange(s)&&a),a},i,d)),a.Ib(5120,null,b.m,function(n){return[n]},[h.a]),a.rb(19,1753088,null,1,h.a,[a.h],{value:[0,"value"]},null),a.Jb(603979776,1,{tokens:1}),a.Fb(21,1),a.Ib(2048,null,r.a,null,[h.a]),(n()(),a.sb(23,0,null,0,2,"vcl-token",[],[[2,"vclToken",null],[1,"tabindex",0],[2,"vclSelected",null],[4,"cursor",null],[2,"vclDisabled",null]],[[null,"blur"],[null,"click"]],function(n,l,s){var t=!0;return"blur"===l&&(t=!1!==a.Eb(n,24).onBlur(s)&&t),"click"===l&&(t=!1!==a.Eb(n,24).onClick(s)&&t),t},p.b,p.a)),a.rb(24,49152,[[1,4]],0,r.b,[a.h,a.k,[3,r.a]],{_value:[0,"_value"]},null),(n()(),a.Lb(-1,0,["my token 1"])),(n()(),a.sb(26,0,null,0,2,"vcl-token",[],[[2,"vclToken",null],[1,"tabindex",0],[2,"vclSelected",null],[4,"cursor",null],[2,"vclDisabled",null]],[[null,"blur"],[null,"click"]],function(n,l,s){var t=!0;return"blur"===l&&(t=!1!==a.Eb(n,27).onBlur(s)&&t),"click"===l&&(t=!1!==a.Eb(n,27).onClick(s)&&t),t},p.b,p.a)),a.rb(27,49152,[[1,4]],0,r.b,[a.h,a.k,[3,r.a]],{_value:[0,"_value"]},null),(n()(),a.Lb(-1,0,["my token 2"])),(n()(),a.sb(29,0,null,null,0,"br",[],null,null,null,null,null)),(n()(),a.sb(30,0,null,null,1,"h3",[],null,null,null,null,null)),(n()(),a.Lb(-1,null,["selectable and removable tokenlist"])),(n()(),a.sb(32,0,null,null,11,"vcl-token-list",[],[[2,"vclTokenList",null],[2,"vclTokenContainer",null]],[[null,"valueChange"]],function(n,l,s){var a=!0;return"valueChange"===l&&(a=!1!==n.component.onListChange(s)&&a),a},i,d)),a.Ib(5120,null,b.m,function(n){return[n]},[h.a]),a.rb(34,1753088,null,1,h.a,[a.h],{selectable:[0,"selectable"],removable:[1,"removable"],value:[2,"value"]},null),a.Jb(603979776,2,{tokens:1}),a.Fb(36,1),a.Ib(2048,null,r.a,null,[h.a]),(n()(),a.sb(38,0,null,0,2,"vcl-token",[],[[2,"vclToken",null],[1,"tabindex",0],[2,"vclSelected",null],[4,"cursor",null],[2,"vclDisabled",null]],[[null,"blur"],[null,"click"]],function(n,l,s){var t=!0;return"blur"===l&&(t=!1!==a.Eb(n,39).onBlur(s)&&t),"click"===l&&(t=!1!==a.Eb(n,39).onClick(s)&&t),t},p.b,p.a)),a.rb(39,49152,[[2,4]],0,r.b,[a.h,a.k,[3,r.a]],{_value:[0,"_value"]},null),(n()(),a.Lb(-1,0,["my token 1"])),(n()(),a.sb(41,0,null,0,2,"vcl-token",[],[[2,"vclToken",null],[1,"tabindex",0],[2,"vclSelected",null],[4,"cursor",null],[2,"vclDisabled",null]],[[null,"blur"],[null,"click"]],function(n,l,s){var t=!0;return"blur"===l&&(t=!1!==a.Eb(n,42).onBlur(s)&&t),"click"===l&&(t=!1!==a.Eb(n,42).onClick(s)&&t),t},p.b,p.a)),a.rb(42,49152,[[2,4]],0,r.b,[a.h,a.k,[3,r.a]],{_value:[0,"_value"]},null),(n()(),a.Lb(-1,0,["my token 2"])),(n()(),a.sb(44,0,null,null,0,"br",[],null,null,null,null,null)),(n()(),a.sb(45,0,null,null,1,"h3",[],null,null,null,null,null)),(n()(),a.Lb(-1,null,["token-input"])),(n()(),a.sb(47,0,null,null,9,"vcl-token-input",[],[[2,"vclInput",null],[2,"vclTokenInput",null],[2,"vclLayoutHorizontal",null],[2,"vclLayoutWrap",null],[1,"id",0],[2,"vclDisabled",null],[2,"vclError",null],[1,"tabindex",0]],[[null,"valueChange"],[null,"keydown"],[null,"keyup.enter"]],function(n,l,s){var t=!0,e=n.component;return"keydown"===l&&(t=!1!==a.Eb(n,49).onKeydown(s)&&t),"keyup.enter"===l&&(t=!1!==a.Eb(n,49).onKeyPressEnter(s)&&t),"valueChange"===l&&(t=!1!==e.onInputChange(s)&&t),t},v.b,v.a)),a.Ib(6144,null,k.b,null,[g.a]),a.rb(49,1097728,null,2,g.a,[a.k,a.E,a.h,[8,null],[2,j.b],[2,j.a]],null,{valueChange:"valueChange"}),a.Jb(603979776,3,{input:0}),a.Jb(603979776,4,{inputElementRef:0}),a.Ib(2048,null,m.a,null,[g.a]),(n()(),a.sb(53,0,[[4,0]],0,3,"input",[["vclInput",""]],[[1,"id",0],[2,"vclInput",null],[2,"vclDisabled",null],[2,"vclError",null],[1,"disabled",0]],[[null,"focus"],[null,"blur"],[null,"input"],[null,"change"],[null,"ngModelChange"]],function(n,l,s){var t=!0;return"focus"===l&&(t=!1!==a.Eb(n,56).onFocus()&&t),"blur"===l&&(t=!1!==a.Eb(n,56).onBlur()&&t),"input"===l&&(t=!1!==a.Eb(n,56).onInput()&&t),"change"===l&&(t=!1!==a.Eb(n,56).onInput()&&t),"ngModelChange"===l&&(t=!1!==a.Eb(n,56).onInput()&&t),t},null,null)),a.Ib(6144,null,j.c,null,[m.b]),a.Ib(6144,null,k.b,null,[m.b]),a.rb(56,147456,[[3,4]],0,m.b,[a.k,[2,b.n],[2,j.b],[2,j.a],[2,m.a]],null,null),(n()(),a.sb(57,0,null,null,1,"h3",[],null,null,null,null,null)),(n()(),a.Lb(-1,null,["token-input (disabled)"])),(n()(),a.sb(59,0,null,null,9,"vcl-token-input",[],[[2,"vclInput",null],[2,"vclTokenInput",null],[2,"vclLayoutHorizontal",null],[2,"vclLayoutWrap",null],[1,"id",0],[2,"vclDisabled",null],[2,"vclError",null],[1,"tabindex",0]],[[null,"keydown"],[null,"keyup.enter"]],function(n,l,s){var t=!0;return"keydown"===l&&(t=!1!==a.Eb(n,61).onKeydown(s)&&t),"keyup.enter"===l&&(t=!1!==a.Eb(n,61).onKeyPressEnter(s)&&t),t},v.b,v.a)),a.Ib(6144,null,k.b,null,[g.a]),a.rb(61,1097728,null,2,g.a,[a.k,a.E,a.h,[8,null],[2,j.b],[2,j.a]],{disabled:[0,"disabled"]},null),a.Jb(603979776,5,{input:0}),a.Jb(603979776,6,{inputElementRef:0}),a.Ib(2048,null,m.a,null,[g.a]),(n()(),a.sb(65,0,[[6,0]],0,3,"input",[["vclInput",""]],[[1,"id",0],[2,"vclInput",null],[2,"vclDisabled",null],[2,"vclError",null],[1,"disabled",0]],[[null,"focus"],[null,"blur"],[null,"input"],[null,"change"],[null,"ngModelChange"]],function(n,l,s){var t=!0;return"focus"===l&&(t=!1!==a.Eb(n,68).onFocus()&&t),"blur"===l&&(t=!1!==a.Eb(n,68).onBlur()&&t),"input"===l&&(t=!1!==a.Eb(n,68).onInput()&&t),"change"===l&&(t=!1!==a.Eb(n,68).onInput()&&t),"ngModelChange"===l&&(t=!1!==a.Eb(n,68).onInput()&&t),t},null,null)),a.Ib(6144,null,j.c,null,[m.b]),a.Ib(6144,null,k.b,null,[m.b]),a.rb(68,147456,[[5,4]],0,m.b,[a.k,[2,b.n],[2,j.b],[2,j.a],[2,m.a]],null,null)],function(n,l){n(l,6,0,!0),n(l,9,0,!0),n(l,12,0,!0);var s=n(l,21,0,1);n(l,19,0,s),n(l,24,0,1),n(l,27,0,2);var a=n(l,36,0,1);n(l,34,0,!0,!0,a),n(l,39,0,1),n(l,42,0,2),n(l,61,0,!0)},function(n,l){n(l,2,0,a.Eb(l,3).classVclToken,a.Eb(l,3).tabindex,a.Eb(l,3).selected,a.Eb(l,3).styleCursor,a.Eb(l,3).isDisabled),n(l,5,0,a.Eb(l,6).classVclToken,a.Eb(l,6).tabindex,a.Eb(l,6).selected,a.Eb(l,6).styleCursor,a.Eb(l,6).isDisabled),n(l,8,0,a.Eb(l,9).classVclToken,a.Eb(l,9).tabindex,a.Eb(l,9).selected,a.Eb(l,9).styleCursor,a.Eb(l,9).isDisabled),n(l,11,0,a.Eb(l,12).classVclToken,a.Eb(l,12).tabindex,a.Eb(l,12).selected,a.Eb(l,12).styleCursor,a.Eb(l,12).isDisabled),n(l,17,0,a.Eb(l,19)._hostClasses,a.Eb(l,19)._hostClasses),n(l,23,0,a.Eb(l,24).classVclToken,a.Eb(l,24).tabindex,a.Eb(l,24).selected,a.Eb(l,24).styleCursor,a.Eb(l,24).isDisabled),n(l,26,0,a.Eb(l,27).classVclToken,a.Eb(l,27).tabindex,a.Eb(l,27).selected,a.Eb(l,27).styleCursor,a.Eb(l,27).isDisabled),n(l,32,0,a.Eb(l,34)._hostClasses,a.Eb(l,34)._hostClasses),n(l,38,0,a.Eb(l,39).classVclToken,a.Eb(l,39).tabindex,a.Eb(l,39).selected,a.Eb(l,39).styleCursor,a.Eb(l,39).isDisabled),n(l,41,0,a.Eb(l,42).classVclToken,a.Eb(l,42).tabindex,a.Eb(l,42).selected,a.Eb(l,42).styleCursor,a.Eb(l,42).isDisabled),n(l,47,0,a.Eb(l,49)._hostClasses,a.Eb(l,49)._hostClasses,a.Eb(l,49)._hostClasses,a.Eb(l,49)._hostClasses,a.Eb(l,49).elementId,a.Eb(l,49).isDisabled,a.Eb(l,49).hasError,a.Eb(l,49)._hostAttrTabindex),n(l,53,0,a.Eb(l,56).elementId,a.Eb(l,56).classVclInput,a.Eb(l,56).isDisabled,a.Eb(l,56).hasError,a.Eb(l,56).attrDisabled),n(l,59,0,a.Eb(l,61)._hostClasses,a.Eb(l,61)._hostClasses,a.Eb(l,61)._hostClasses,a.Eb(l,61)._hostClasses,a.Eb(l,61).elementId,a.Eb(l,61).isDisabled,a.Eb(l,61).hasError,a.Eb(l,61)._hostAttrTabindex),n(l,65,0,a.Eb(l,68).elementId,a.Eb(l,68).classVclInput,a.Eb(l,68).isDisabled,a.Eb(l,68).hasError,a.Eb(l,68).attrDisabled)})}function y(n){return a.Nb(0,[(n()(),a.sb(0,0,null,null,1,"ng-component",[],null,null,null,C,E)),a.rb(1,49152,null,0,t,[],null,null)],null,null)}var f=a.ob("ng-component",t,y,{},{},[]),I=s("Ip0R"),D=s("M2Lx"),T=s("dy60"),w=s("tfYh"),L=s("4c35"),x=s("p/eS"),_=s("2FIb"),q=s("mbT9"),M=s("hUuX"),N=s("61Fc"),V=s("g2Nb"),B=s("hyVG"),R=s("DD28"),S=s("ZYCi"),J=s("PNUx");s.d(l,"TokenDemoModuleNgFactory",function(){return K});var K=a.pb(o,[],function(n){return a.Bb([a.Cb(512,a.j,a.bb,[[8,[c.a,u.a,f]],[3,a.j],a.y]),a.Cb(4608,I.n,I.m,[a.v,[2,I.A]]),a.Cb(4608,b.v,b.v,[]),a.Cb(4608,D.a,D.a,[]),a.Cb(4608,T.a,T.a,[[2,w.a]]),a.Cb(1073742336,I.c,I.c,[]),a.Cb(1073742336,b.u,b.u,[]),a.Cb(1073742336,b.l,b.l,[]),a.Cb(1073742336,L.e,L.e,[]),a.Cb(1073742336,D.b,D.b,[]),a.Cb(1073742336,x.a,x.a,[]),a.Cb(1073742336,_.a,_.a,[]),a.Cb(1073742336,q.a,q.a,[]),a.Cb(1073742336,M.b,M.b,[]),a.Cb(1073742336,N.c,N.c,[]),a.Cb(1073742336,V.a,V.a,[]),a.Cb(1073742336,B.a,B.a,[]),a.Cb(1073742336,R.a,R.a,[]),a.Cb(1073742336,S.q,S.q,[[2,S.v],[2,S.m]]),a.Cb(1073742336,o,o,[]),a.Cb(256,j.a,q.b,[]),a.Cb(1024,S.i,function(){return[[{path:"",component:J.a,data:e}]]},[])])})},qOPM:function(n,l){n.exports='<span class="hljs-keyword">import</span> { Component } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/core\'</span>;\n\n<span class="hljs-meta">@Component</span>({\n  templateUrl: <span class="hljs-string">\'demo.component.html\'</span>\n})\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> TokenDemoComponent {\n\n  onRemove(token) {\n    <span class="hljs-built_in">console</span>.log(<span class="hljs-string">\'onRemove\'</span>, token);\n  }\n\n  onListChange(value) {\n    <span class="hljs-built_in">console</span>.log(<span class="hljs-string">\'onListChange\'</span>, value);\n  }\n\n  onInputChange(value) {\n    <span class="hljs-built_in">console</span>.log(<span class="hljs-string">\'onInputChange\'</span>, value);\n  }\n}\n'}}]);