function _possibleConstructorReturn(s,n){return!n||"object"!=typeof n&&"function"!=typeof n?_assertThisInitialized(s):n}function _assertThisInitialized(s){if(void 0===s)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return s}function _get(s,n,a){return(_get="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(s,n,a){var t=_superPropBase(s,n);if(t){var l=Object.getOwnPropertyDescriptor(t,n);return l.get?l.get.call(a):l.value}})(s,n,a||s)}function _superPropBase(s,n){for(;!Object.prototype.hasOwnProperty.call(s,n)&&null!==(s=_getPrototypeOf(s)););return s}function _getPrototypeOf(s){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(s){return s.__proto__||Object.getPrototypeOf(s)})(s)}function _inherits(s,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");s.prototype=Object.create(n&&n.prototype,{constructor:{value:s,writable:!0,configurable:!0}}),n&&_setPrototypeOf(s,n)}function _setPrototypeOf(s,n){return(_setPrototypeOf=Object.setPrototypeOf||function(s,n){return s.__proto__=n,s})(s,n)}function _classCallCheck(s,n){if(!(s instanceof n))throw new TypeError("Cannot call a class as a function")}function _defineProperties(s,n){for(var a=0;a<n.length;a++){var t=n[a];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(s,t.key,t)}}function _createClass(s,n,a){return n&&_defineProperties(s.prototype,n),a&&_defineProperties(s,a),s}(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"3/ak":function(s,n,a){"use strict";a.r(n);var t=a("ofXK"),l=a("tyNb"),e=a("19H1"),p=a("2FIb"),r=a("HDdC"),c=a("XNiG"),o=a("l7GE"),i=a("ZUHj"),h=function(){function s(n,a){_classCallCheck(this,s),this.notifier=n,this.source=a}return _createClass(s,[{key:"call",value:function(s,n){return n.subscribe(new u(s,this.notifier,this.source))}}]),s}(),u=function(s){function n(s,a,t){var l;return _classCallCheck(this,n),(l=_possibleConstructorReturn(this,_getPrototypeOf(n).call(this,s))).notifier=a,l.source=t,l}return _inherits(n,s),_createClass(n,[{key:"error",value:function(s){if(!this.isStopped){var a=this.errors,t=this.retries,l=this.retriesSubscription;if(t)this.errors=null,this.retriesSubscription=null;else{a=new c.a;try{t=(0,this.notifier)(a)}catch(e){return _get(_getPrototypeOf(n.prototype),"error",this).call(this,e)}l=Object(i.a)(this,t)}this._unsubscribeAndRecycle(),this.errors=a,this.retries=t,this.retriesSubscription=l,a.next(s)}}},{key:"_unsubscribe",value:function(){var s=this.errors,n=this.retriesSubscription;s&&(s.unsubscribe(),this.errors=null),n&&(n.unsubscribe(),this.retriesSubscription=null),this.retries=null}},{key:"notifyNext",value:function(s,n,a,t,l){var e=this._unsubscribe;this._unsubscribe=null,this._unsubscribeAndRecycle(),this._unsubscribe=e,this.source.subscribe(this)}}]),n}(o.a),d=a("eIep"),j=a("vkgz"),g=a("fXoL"),b=a("6B8K");function m(s,n){return new r.a((function(a){setTimeout((function(){("function"==typeof n?n():!!n)?a.error(s):(a.next(s),a.complete())}),1e3)}))}var f,y=((f=function(){function s(n){_classCallCheck(this,s),this.alert=n}return _createClass(s,[{key:"message",value:function(){this.alert.alert("A message")}},{key:"messageWithTitle",value:function(){this.alert.alert("A message",{title:"A title"})}},{key:"info",value:function(){this.alert.info("This is an information",{title:"An information"})}},{key:"success",value:function(){this.alert.success("You are successful",{title:"A success"})}},{key:"warning",value:function(){this.alert.warning("This is a warning",{title:"A warning"})}},{key:"error",value:function(){this.alert.error("This is an error",{title:"An error"})}},{key:"htmlMessage",value:function(){this.alert.alert('Use <i>as much<i> <a href="//www.w3schools.com/html/">HTML</a> as you <b>like</b>',{html:!0})}},{key:"custom",value:function(){this.alert.open({text:"This is a bit customized...",title:"Information",type:e.c.Info,showCloseButton:!0,showCancelButton:!0,confirmButtonClass:"suggestive",confirmButtonPrepIcon:"fas:bolt",cancelButtonColor:"orange",customClass:"scale130p"})}},{key:"question",value:function(){var s=this;this.alert.open({text:"Do you really want to delete the file?",title:"Delete file?",type:e.c.Question,showCloseButton:!0,showCancelButton:!0,cancelButtonLabel:"No",confirmButtonLabel:"Yes"}).subscribe((function(n){"confirm"===n.action?s.alert.success("File deleted"):s.alert.error("Reason: "+n.action,{title:"File not deleted"})}))}},{key:"async",value:function(){var s=this;this.alert.open({text:"Determine your user agent?",confirmAction:m(window.navigator.userAgent),showCancelButton:!0}).subscribe((function(n){"confirm"===n.action&&s.alert.info(n.value,{title:"Your user agent"})}))}},{key:"inputText",value:function(){var s=this;this.alert.open({text:"What is your name?",input:e.a.Text,confirmButtonLabel:"Next",inputValidator:function(s){if("string"!=typeof s||s.length<2)throw new Error("Invalid name!");return!0}}).subscribe((function(n){"confirm"===n.action&&s.alert.info("Hello "+n.value)}))}},{key:"retry",value:function(){var s,n=this,a=0,t=m((new Date).toLocaleTimeString(),(function(){return++a<=1})).pipe((s=function(s){return s.pipe(Object(d.a)((function(s){return n.alert.open({text:"Retry?",type:e.c.Warning,showCancelButton:!0,closeOnBackdropClick:!1,closeOnEscape:!1}).pipe(Object(j.a)((function(s){if("cancel"===s.action)throw new Error})))})))},function(n){return n.lift(new h(s,n))}));this.alert.open({text:"Show current time? (will fail the first time)",showCancelButton:!0,confirmAction:t}).subscribe((function(s){n.alert.info(s.value,{title:"Time"})}))}}]),s}()).\u0275fac=function(s){return new(s||f)(g.Mb(e.b))},f.\u0275cmp=g.Gb({type:f,selectors:[["ng-component"]],decls:48,vars:0,consts:[["vcl-button","",3,"click"]],template:function(s,n){1&s&&(g.Sb(0,"button",0),g.ac("click",(function(){return n.message()})),g.yc(1,"A message"),g.Rb(),g.Nb(2,"br"),g.Nb(3,"br"),g.Sb(4,"button",0),g.ac("click",(function(){return n.messageWithTitle()})),g.yc(5,"A title and a message"),g.Rb(),g.Nb(6,"br"),g.Nb(7,"br"),g.Sb(8,"button",0),g.ac("click",(function(){return n.info()})),g.yc(9,"An info"),g.Rb(),g.Nb(10,"br"),g.Nb(11,"br"),g.Sb(12,"button",0),g.ac("click",(function(){return n.success()})),g.yc(13,"A success"),g.Rb(),g.Nb(14,"br"),g.Nb(15,"br"),g.Sb(16,"button",0),g.ac("click",(function(){return n.warning()})),g.yc(17,"A warning"),g.Rb(),g.Nb(18,"br"),g.Nb(19,"br"),g.Sb(20,"button",0),g.ac("click",(function(){return n.error()})),g.yc(21,"An error"),g.Rb(),g.Nb(22,"br"),g.Nb(23,"br"),g.Sb(24,"button",0),g.ac("click",(function(){return n.htmlMessage()})),g.yc(25,"A html message"),g.Rb(),g.Nb(26,"br"),g.Nb(27,"br"),g.Sb(28,"button",0),g.ac("click",(function(){return n.custom()})),g.yc(29,"A custom info message"),g.Rb(),g.Nb(30,"br"),g.Nb(31,"br"),g.Sb(32,"button",0),g.ac("click",(function(){return n.question()})),g.yc(33,"A question"),g.Rb(),g.Nb(34,"br"),g.Nb(35,"br"),g.Sb(36,"button",0),g.ac("click",(function(){return n.async()})),g.yc(37,"An async request"),g.Rb(),g.Nb(38,"br"),g.Nb(39,"br"),g.Sb(40,"button",0),g.ac("click",(function(){return n.retry()})),g.yc(41,"Retrying an async request"),g.Rb(),g.Nb(42,"br"),g.Nb(43,"br"),g.Sb(44,"button",0),g.ac("click",(function(){return n.inputText()})),g.yc(45,"A text input"),g.Rb(),g.Nb(46,"br"),g.Nb(47,"br"))},directives:[b.b],encapsulation:2}),f);function w(){return{label:"Alert",tabs:{Demo:y,"README.md":{type:"md",content:'<h1 id="vcl-alert">vcl-alert</h1>\n<p>Better javascript alert()</p>\n<h2 id="usage">Usage</h2>\n<pre class="hljs"><span class="hljs-meta">@Component</span>({ ... })\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> MyComponent {\n\n  <span class="hljs-keyword">constructor</span>(<span class="hljs-params"><span class="hljs-keyword">private</span> alert: AlertService</span>) {}\n\n  message() {\n    <span class="hljs-keyword">this</span>.alert.success(<span class="hljs-string">&apos;Done!&apos;</span>);\n  }\n\n  deleteFile() {\n    <span class="hljs-keyword">this</span>.alert.open({\n      text: <span class="hljs-string">&apos;Do you really want to delete the file?&apos;</span>,\n      title: <span class="hljs-string">&apos;Delete file&apos;</span>,\n      <span class="hljs-keyword">type</span>: AlertType.Question,\n      showCloseButton: <span class="hljs-literal">true</span>,\n      showCancelButton: <span class="hljs-literal">true</span>,\n      cancelButtonLabel: <span class="hljs-string">&apos;No&apos;</span>,\n      confirmButtonLabel: <span class="hljs-string">&apos;Yes&apos;</span>\n    }).subscribe(<span class="hljs-function">(<span class="hljs-params">result</span>) =&gt;</span> {\n      <span class="hljs-keyword">if</span> (result.action === <span class="hljs-string">&apos;confirm&apos;</span>) {\n        <span class="hljs-keyword">this</span>.alert.success(<span class="hljs-string">&apos;File deleted&apos;</span>);\n      } <span class="hljs-keyword">else</span> {\n        <span class="hljs-keyword">this</span>.alert.error(<span class="hljs-string">&apos;File not deleted&apos;</span>);\n      }\n    });\n  }\n\n}</pre>\n<h3 id="examples">Examples</h3>\n<pre class="hljs"><span class="hljs-comment">// Simple message</span>\n<span class="hljs-keyword">this</span>.alert.success(<span class="hljs-string">&apos;A message&apos;</span>);\n\n<span class="hljs-comment">// Message with a title</span>\n<span class="hljs-keyword">this</span>.alert.info(<span class="hljs-string">&apos;A message&apos;</span>, {\n  title: <span class="hljs-string">&apos;A title&apos;</span>\n});\n\n<span class="hljs-comment">// HTML Message</span>\n<span class="hljs-keyword">this</span>.alert.open({\n  text: <span class="hljs-string">`Use &lt;i&gt;as much&lt;i&gt; &lt;a href=&quot;//www.w3schools.com/html/&quot;&gt;HTML&lt;/a&gt; as you &lt;b&gt;like&lt;/b&gt;`</span>.\n  html: <span class="hljs-literal">true</span>\n});\n\n<span class="hljs-comment">// Customized info message</span>\n<span class="hljs-keyword">this</span>.alert.open({\n  title: <span class="hljs-string">&apos;Information&apos;</span>,\n  text: <span class="hljs-string">&apos;This is a bit customized...&apos;</span>,\n  <span class="hljs-keyword">type</span>: AlertType.Info,\n  showCloseButton: <span class="hljs-literal">true</span>,\n  showCancelButton: <span class="hljs-literal">true</span>,\n  confirmButtonClass: <span class="hljs-string">&apos;vclSuggestive&apos;</span>,\n  confirmButtonPrepIcon: <span class="hljs-string">&apos;fas:bolt&apos;</span>,\n  cancelButtonColor: <span class="hljs-string">&apos;orange&apos;</span>,\n  customClass: <span class="hljs-string">&apos;vclScale130p&apos;</span>,\n});\n\n<span class="hljs-comment">// Confirmation</span>\n<span class="hljs-keyword">this</span>.alert.open({\n  title: <span class="hljs-string">&apos;Delete file&apos;</span>,\n  text: <span class="hljs-string">&apos;Do you really want to delete the file?&apos;</span>,\n  <span class="hljs-keyword">type</span>: AlertType.Question,\n  showCloseButton: <span class="hljs-literal">true</span>,\n  showCancelButton: <span class="hljs-literal">true</span>,\n  cancelButtonLabel: <span class="hljs-string">&apos;No&apos;</span>,\n  confirmButtonLabel: <span class="hljs-string">&apos;Yes&apos;</span>\n}).subscribe(<span class="hljs-function">(<span class="hljs-params">result</span>) =&gt;</span> {\n  <span class="hljs-keyword">if</span> (result.action === <span class="hljs-string">&apos;confirm&apos;</span>) {\n    <span class="hljs-keyword">this</span>.alert.success(<span class="hljs-string">&apos;File deleted&apos;</span>);\n  } <span class="hljs-keyword">else</span> {\n    <span class="hljs-keyword">this</span>.alert.error(<span class="hljs-string">&apos;File not deleted&apos;</span>);\n  }\n});\n\n<span class="hljs-comment">// Handling async data</span>\n<span class="hljs-keyword">this</span>.alert.open({\n  text: <span class="hljs-string">&apos;Fetch data?&apos;</span>,\n  confirmAction: <span class="hljs-keyword">this</span>.http.get(<span class="hljs-string">&apos;/foo/data&apos;</span>),\n  showCancelButton: <span class="hljs-literal">true</span>\n}).subscribe(<span class="hljs-function"><span class="hljs-params">result</span> =&gt;</span> {\n  <span class="hljs-keyword">if</span> (result.action === <span class="hljs-string">&apos;confirm&apos;</span>) {\n    <span class="hljs-keyword">this</span>.alert.info(result.value, { title: <span class="hljs-string">&apos;Your foo data&apos;</span> });\n  } <span class="hljs-keyword">else</span> <span class="hljs-keyword">if</span> (result.action === <span class="hljs-string">&apos;error&apos;</span>) {\n    <span class="hljs-keyword">this</span>.alert.error(err, { title: <span class="hljs-string">&apos;Could not fetch data&apos;</span> });\n  }\n});\n\n<span class="hljs-comment">// With an input element</span>\n<span class="hljs-keyword">this</span>.alert.open({\n  text: <span class="hljs-string">&apos;What is your name?&apos;</span>,\n  input: AlertInput.Text,\n  confirmButtonLabel: <span class="hljs-string">&apos;Next&apos;</span>,\n  inputValidator: <span class="hljs-function">(<span class="hljs-params">value</span>) =&gt;</span> {\n    <span class="hljs-keyword">if</span> (<span class="hljs-keyword">typeof</span> value !== <span class="hljs-string">&apos;string&apos;</span> || value.length &lt; <span class="hljs-number">2</span>) {\n      <span class="hljs-keyword">throw</span> <span class="hljs-string">&apos;This is not your name!&apos;</span>;\n    }\n    <span class="hljs-keyword">return</span> <span class="hljs-literal">true</span>;\n  }\n}).subscribe(<span class="hljs-function"><span class="hljs-params">result</span> =&gt;</span> {\n  <span class="hljs-keyword">this</span>.alert.info(<span class="hljs-string">&apos;Hello &apos;</span> + result.value);\n});</pre>\n<h3 id="some-helper-methods">Some helper methods</h3>\n<pre class="hljs">alert(text: <span class="hljs-built_in">string</span>, opts?: AlertOptions); <span class="hljs-comment">// Just the message</span>\ninfo(text: <span class="hljs-built_in">string</span>, opts?: AlertOptions); <span class="hljs-comment">// Message with AlertType.Info</span>\nsuccess(text: <span class="hljs-built_in">string</span>, opts?: AlertOptions); <span class="hljs-comment">// Message with AlertType.Success</span>\nwarning(text: <span class="hljs-built_in">string</span>, opts?: AlertOptions); <span class="hljs-comment">// Message with AlertType.Warning</span>\nerror(text: <span class="hljs-built_in">string</span>, opts?: AlertOptions); <span class="hljs-comment">// Message with AlertType.Error</span>\nquestion(text: <span class="hljs-built_in">string</span>, opts?: AlertOptions); <span class="hljs-comment">// Message with AlertType.Question and showCancelButton=true</span></pre>\n<h3 id="api">API</h3>\n<h4 id="alert-attributes">Alert Attributes</h4>\n<p>All attributes are optional</p>\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Type</th>\n<th>Default</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody><tr>\n<td><code>text</code></td>\n<td>string</td>\n<td></td>\n<td>The main message</td>\n</tr>\n<tr>\n<td><code>title</code></td>\n<td>string</td>\n<td></td>\n<td>A title</td>\n</tr>\n<tr>\n<td><code>html</code></td>\n<td>boolean</td>\n<td>false</td>\n<td>Treats the main message as html when <code>true</code></td>\n</tr>\n<tr>\n<td><code>type</code></td>\n<td>AlertType</td>\n<td>None</td>\n<td>The type. Defines color and icon.</td>\n</tr>\n<tr>\n<td><code>modal</code></td>\n<td>boolean</td>\n<td>true</td>\n<td>Allow closing via ESC and offclick if true</td>\n</tr>\n<tr>\n<td><code>customClass</code></td>\n<td>string</td>\n<td></td>\n<td>A custom css class for the alert modal</td>\n</tr>\n<tr>\n<td><code>showConfirmButton</code></td>\n<td>boolean</td>\n<td>true</td>\n<td>Show the confirmation button</td>\n</tr>\n<tr>\n<td><code>showCancelButton</code></td>\n<td>boolean</td>\n<td>false</td>\n<td>Show the cancel button</td>\n</tr>\n<tr>\n<td><code>showCloseButton</code></td>\n<td>boolean</td>\n<td>false</td>\n<td>Show the close button</td>\n</tr>\n<tr>\n<td><code>confirmButtonLabel</code></td>\n<td>string</td>\n<td>&apos;OK&apos;</td>\n<td>Changes the confirm button label</td>\n</tr>\n<tr>\n<td><code>confirmButtonClass</code></td>\n<td>string</td>\n<td>&apos;emphasized&apos;</td>\n<td>Adds a class to the confirm button</td>\n</tr>\n<tr>\n<td><code>confirmButtonPrepIcon</code></td>\n<td>string</td>\n<td></td>\n<td>icon to be prepended to the confirm button label</td>\n</tr>\n<tr>\n<td><code>confirmButtonAppIcon</code></td>\n<td>string</td>\n<td></td>\n<td>same as <code>confirmButtonPrepIcon</code>, but appended</td>\n</tr>\n<tr>\n<td><code>cancelButtonLabel</code></td>\n<td>string</td>\n<td>&apos;Cancel&apos;</td>\n<td>Changes the cancel button label</td>\n</tr>\n<tr>\n<td><code>cancelButtonClass</code></td>\n<td>string</td>\n<td>&apos;danger&apos;</td>\n<td>Adds a class to the cancel button</td>\n</tr>\n<tr>\n<td><code>cancelButtonPrepIcon</code></td>\n<td>string</td>\n<td></td>\n<td>icon to be prepended to the cancel button label</td>\n</tr>\n<tr>\n<td><code>cancelButtonAppIcon</code></td>\n<td>string</td>\n<td></td>\n<td>same as <code>cancelButtonPrepIcon</code>, but appended</td>\n</tr>\n<tr>\n<td><code>cancelButtonThrowsError</code></td>\n<td>boolean</td>\n<td></td>\n<td>Throw an error instead of passing a result on cancel</td>\n</tr>\n<tr>\n<td><code>confirmAction</code></td>\n<td>Observable</td>\n<td></td>\n<td>Enables loader and subscribes to observable. Closes alert when the observable completes or errors.</td>\n</tr>\n<tr>\n<td><code>input</code></td>\n<td>AlertInput</td>\n<td>None</td>\n<td>Input element</td>\n</tr>\n<tr>\n<td><code>inputValue</code></td>\n<td>any</td>\n<td></td>\n<td>Default value for the input</td>\n</tr>\n<tr>\n<td><code>inputPlaceholder</code></td>\n<td>string</td>\n<td></td>\n<td>A placeholder. Shown in the input element when using AlertInput.Text</td>\n</tr>\n<tr>\n<td><code>inputValidator</code></td>\n<td>function</td>\n<td></td>\n<td>Input validator callback</td>\n</tr>\n</tbody></table>\n<h4 id="enums">Enums</h4>\n<pre class="hljs"><span class="hljs-keyword">export</span> <span class="hljs-keyword">enum</span> AlertType {\n  None,\n  Question,\n  Info,\n  Success,\n  Warning,\n  <span class="hljs-built_in">Error</span>\n}\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">enum</span> AlertInput {\n  None,\n  Text\n}</pre>\n'},"demo.component.html":{type:"pre",content:a("4gD5")},"demo.component.ts":{type:"pre",content:a("o/ZQ")}}}}a.d(n,"demo",(function(){return w})),a.d(n,"AlertDemoModule",(function(){return A}));var k,A=((k=function s(){_classCallCheck(this,s)}).\u0275mod=g.Kb({type:k}),k.\u0275inj=g.Jb({factory:function(s){return new(s||k)},imports:[[t.c,p.b,e.w,e.C,l.g.forChild([{path:"",component:p.a,data:{demo:w}}])]]}),k)},"4gD5":function(s,n){s.exports='<span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">vcl-button</span> (<span class="hljs-attr">click</span>)=<span class="hljs-string">"message()"</span>&gt;</span>A message<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">vcl-button</span> (<span class="hljs-attr">click</span>)=<span class="hljs-string">"messageWithTitle()"</span>&gt;</span>A title and a message<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">vcl-button</span> (<span class="hljs-attr">click</span>)=<span class="hljs-string">"info()"</span>&gt;</span>An info<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">vcl-button</span> (<span class="hljs-attr">click</span>)=<span class="hljs-string">"success()"</span>&gt;</span>A success<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">vcl-button</span> (<span class="hljs-attr">click</span>)=<span class="hljs-string">"warning()"</span>&gt;</span>A warning<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">vcl-button</span> (<span class="hljs-attr">click</span>)=<span class="hljs-string">"error()"</span>&gt;</span>An error<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">vcl-button</span> (<span class="hljs-attr">click</span>)=<span class="hljs-string">"htmlMessage()"</span>&gt;</span>A html message<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">vcl-button</span> (<span class="hljs-attr">click</span>)=<span class="hljs-string">"custom()"</span>&gt;</span>A custom info message<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">vcl-button</span> (<span class="hljs-attr">click</span>)=<span class="hljs-string">"question()"</span>&gt;</span>A question<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">vcl-button</span> (<span class="hljs-attr">click</span>)=<span class="hljs-string">"async()"</span>&gt;</span>An async request<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">vcl-button</span> (<span class="hljs-attr">click</span>)=<span class="hljs-string">"retry()"</span>&gt;</span>Retrying an async request<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">vcl-button</span> (<span class="hljs-attr">click</span>)=<span class="hljs-string">"inputText()"</span>&gt;</span>A text input<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span>\n'},"o/ZQ":function(s,n){s.exports='<span class="hljs-keyword">import</span> { Observable } <span class="hljs-keyword">from</span> <span class="hljs-string">\'rxjs\'</span>;\n<span class="hljs-keyword">import</span> { AlertService, AlertType, AlertInput } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@vcl/ng-vcl\'</span>;\n<span class="hljs-keyword">import</span> { Component } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/core\'</span>;\n<span class="hljs-keyword">import</span> { retryWhen, switchMap, tap } <span class="hljs-keyword">from</span> <span class="hljs-string">\'rxjs/operators\'</span>;\n\n<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">createAsyncResult</span>(<span class="hljs-params">data: <span class="hljs-built_in">any</span>, error?: <span class="hljs-built_in">boolean</span> | (() =&gt; (<span class="hljs-built_in">any</span>))</span>): <span class="hljs-title">Observable</span>&lt;<span class="hljs-title">any</span>&gt; </span>{\n  <span class="hljs-keyword">return</span> <span class="hljs-keyword">new</span> Observable(<span class="hljs-function"><span class="hljs-params">observer</span> =&gt;</span> {\n    setTimeout(<span class="hljs-function"><span class="hljs-params">()</span> =&gt;</span> {\n      <span class="hljs-keyword">let</span> err;\n      <span class="hljs-keyword">if</span> (<span class="hljs-keyword">typeof</span> error === <span class="hljs-string">\'function\'</span>) {\n        err = error();\n      } <span class="hljs-keyword">else</span> {\n        err = !!error;\n      }\n\n      <span class="hljs-keyword">if</span> (err) {\n        observer.error(data);\n      } <span class="hljs-keyword">else</span> {\n        observer.next(data);\n        observer.complete();\n      }\n    }, <span class="hljs-number">1000</span>);\n  });\n}\n\n<span class="hljs-meta">@Component</span>({\n  templateUrl: <span class="hljs-string">\'demo.component.html\'</span>\n})\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> AlertDemoComponent {\n\n  <span class="hljs-keyword">constructor</span>(<span class="hljs-params"><span class="hljs-keyword">private</span> alert: AlertService</span>) {}\n\n  message() {\n    <span class="hljs-keyword">this</span>.alert.alert(<span class="hljs-string">\'A message\'</span>);\n  }\n\n  messageWithTitle() {\n    <span class="hljs-keyword">this</span>.alert.alert(<span class="hljs-string">\'A message\'</span>, {\n      title: <span class="hljs-string">\'A title\'</span>\n    });\n  }\n\n  info() {\n    <span class="hljs-keyword">this</span>.alert.info(<span class="hljs-string">\'This is an information\'</span>, {\n      title: <span class="hljs-string">\'An information\'</span>\n    });\n  }\n\n  success() {\n    <span class="hljs-keyword">this</span>.alert.success(<span class="hljs-string">\'You are successful\'</span>, {\n      title: <span class="hljs-string">\'A success\'</span>\n    });\n  }\n\n  warning() {\n    <span class="hljs-keyword">this</span>.alert.warning(<span class="hljs-string">\'This is a warning\'</span>, {\n      title: <span class="hljs-string">\'A warning\'</span>\n    });\n  }\n\n  error() {\n    <span class="hljs-keyword">this</span>.alert.error(<span class="hljs-string">\'This is an error\'</span>, {\n      title: <span class="hljs-string">\'An error\'</span>\n    });\n  }\n\n  htmlMessage() {\n    <span class="hljs-keyword">this</span>.alert.alert(<span class="hljs-string">`Use &lt;i&gt;as much&lt;i&gt; &lt;a href="//www.w3schools.com/html/"&gt;HTML&lt;/a&gt; as you &lt;b&gt;like&lt;/b&gt;`</span>, {\n      html: <span class="hljs-literal">true</span>\n    });\n  }\n\n  custom() {\n    <span class="hljs-keyword">this</span>.alert.open({\n      text: <span class="hljs-string">\'This is a bit customized...\'</span>,\n      title: <span class="hljs-string">\'Information\'</span>,\n      <span class="hljs-keyword">type</span>: AlertType.Info,\n      showCloseButton: <span class="hljs-literal">true</span>,\n      showCancelButton: <span class="hljs-literal">true</span>,\n      confirmButtonClass: <span class="hljs-string">\'suggestive\'</span>,\n      confirmButtonPrepIcon: <span class="hljs-string">\'fas:bolt\'</span>,\n      cancelButtonColor: <span class="hljs-string">\'orange\'</span>,\n      customClass: <span class="hljs-string">\'scale130p\'</span>,\n    });\n  }\n\n  question() {\n    <span class="hljs-keyword">this</span>.alert.open({\n      text: <span class="hljs-string">\'Do you really want to delete the file?\'</span>,\n      title: <span class="hljs-string">\'Delete file?\'</span>,\n      <span class="hljs-keyword">type</span>: AlertType.Question,\n      showCloseButton: <span class="hljs-literal">true</span>,\n      showCancelButton: <span class="hljs-literal">true</span>,\n      cancelButtonLabel: <span class="hljs-string">\'No\'</span>,\n      confirmButtonLabel: <span class="hljs-string">\'Yes\'</span>\n    }).subscribe(<span class="hljs-function">(<span class="hljs-params">result</span>) =&gt;</span> {\n      <span class="hljs-keyword">if</span> (result.action === <span class="hljs-string">\'confirm\'</span>) {\n        <span class="hljs-keyword">this</span>.alert.success(<span class="hljs-string">\'File deleted\'</span>);\n      } <span class="hljs-keyword">else</span> {\n        <span class="hljs-keyword">this</span>.alert.error(<span class="hljs-string">\'Reason: \'</span> + result.action , { title: <span class="hljs-string">\'File not deleted\'</span> });\n      }\n    });\n  }\n\n  <span class="hljs-keyword">async</span>() {\n    <span class="hljs-keyword">this</span>.alert.open({\n      text: <span class="hljs-string">\'Determine your user agent?\'</span>,\n      confirmAction: createAsyncResult(<span class="hljs-built_in">window</span>.navigator.userAgent),\n      showCancelButton: <span class="hljs-literal">true</span>\n    }).subscribe(<span class="hljs-function"><span class="hljs-params">result</span> =&gt;</span> {\n      <span class="hljs-keyword">if</span> (result.action === <span class="hljs-string">\'confirm\'</span>) {\n        <span class="hljs-keyword">this</span>.alert.info(result.value, {\n          title: <span class="hljs-string">\'Your user agent\'</span>\n        });\n      }\n    });\n  }\n\n  inputText() {\n    <span class="hljs-keyword">this</span>.alert.open({\n      text: <span class="hljs-string">\'What is your name?\'</span>,\n      input: AlertInput.Text,\n      confirmButtonLabel: <span class="hljs-string">\'Next\'</span>,\n      inputValidator: <span class="hljs-function">(<span class="hljs-params">value</span>) =&gt;</span> {\n        <span class="hljs-keyword">if</span> (<span class="hljs-keyword">typeof</span> value !== <span class="hljs-string">\'string\'</span> || value.length &lt; <span class="hljs-number">2</span>) {\n          <span class="hljs-keyword">throw</span> <span class="hljs-keyword">new</span> <span class="hljs-built_in">Error</span>(<span class="hljs-string">\'Invalid name!\'</span>);\n        }\n        <span class="hljs-keyword">return</span> <span class="hljs-literal">true</span>;\n      }\n    }).subscribe(<span class="hljs-function"><span class="hljs-params">result</span> =&gt;</span> {\n      <span class="hljs-keyword">if</span> (result.action === <span class="hljs-string">\'confirm\'</span>) {\n        <span class="hljs-keyword">this</span>.alert.info(<span class="hljs-string">\'Hello \'</span> + result.value);\n      }\n    });\n  }\n\n  retry() {\n    <span class="hljs-comment">// This fake async request will fail the first time</span>\n    <span class="hljs-keyword">let</span> fails = <span class="hljs-number">0</span>;\n    <span class="hljs-keyword">const</span> fakeAsync = createAsyncResult(<span class="hljs-keyword">new</span> <span class="hljs-built_in">Date</span>().toLocaleTimeString(), <span class="hljs-function"><span class="hljs-params">()</span> =&gt;</span> ++fails &lt;= <span class="hljs-number">1</span>);\n\n    <span class="hljs-comment">// Add a retry routine using an alert</span>\n    <span class="hljs-keyword">const</span> fakeAsyncWithRetries = fakeAsync.pipe(\n      retryWhen(<span class="hljs-function"><span class="hljs-params">errors</span> =&gt;</span> {\n        <span class="hljs-keyword">return</span> errors.pipe(switchMap(<span class="hljs-function"><span class="hljs-params">err</span> =&gt;</span> {\n          <span class="hljs-keyword">return</span> <span class="hljs-keyword">this</span>.alert.open({\n            text: <span class="hljs-string">\'Retry?\'</span>,\n            <span class="hljs-keyword">type</span>: AlertType.Warning,\n            showCancelButton: <span class="hljs-literal">true</span>,\n            closeOnBackdropClick: <span class="hljs-literal">false</span>,\n            closeOnEscape: <span class="hljs-literal">false</span>\n          }).pipe(tap(<span class="hljs-function"><span class="hljs-params">result</span> =&gt;</span> {\n            <span class="hljs-keyword">if</span> (result.action === <span class="hljs-string">\'cancel\'</span>) {\n              <span class="hljs-keyword">throw</span> <span class="hljs-keyword">new</span> <span class="hljs-built_in">Error</span>();\n            }\n          }));\n        }));\n      }));\n\n    <span class="hljs-keyword">this</span>.alert.open({\n      text: <span class="hljs-string">\'Show current time? (will fail the first time)\'</span>,\n      showCancelButton: <span class="hljs-literal">true</span>,\n      confirmAction: fakeAsyncWithRetries,\n    }).subscribe(<span class="hljs-function"><span class="hljs-params">result</span> =&gt;</span> {\n      <span class="hljs-keyword">this</span>.alert.info(result.value, { title: <span class="hljs-string">\'Time\'</span> });\n    });\n  }\n\n}\n'}}]);