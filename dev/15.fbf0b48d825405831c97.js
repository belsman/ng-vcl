(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{"2OsX":function(s,l){s.exports='<span class="hljs-tag">&lt;<span class="hljs-name">h3</span>&gt;</span>single-select<span class="hljs-tag">&lt;/<span class="hljs-name">h3</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">vcl-dropdown</span> [<span class="hljs-attr">value</span>]=<span class="hljs-string">"10"</span> (<span class="hljs-attr">change</span>)=<span class="hljs-string">"onSelect($event)"</span> [<span class="hljs-attr">tabindex</span>]=<span class="hljs-string">"1"</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">vcl-dropdown-option</span> *<span class="hljs-attr">ngFor</span>=<span class="hljs-string">"let item of items"</span> [<span class="hljs-attr">value</span>]=<span class="hljs-string">"item.value"</span> [<span class="hljs-attr">disabled</span>]=<span class="hljs-string">"item.disabled"</span> [<span class="hljs-attr">label</span>]=<span class="hljs-string">"item.label"</span> [<span class="hljs-attr">sublabel</span>]=<span class="hljs-string">"item.sublabel"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vcl-dropdown-option</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">vcl-dropdown</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">br</span>/&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">h3</span>&gt;</span>single-select with prepended icon<span class="hljs-tag">&lt;/<span class="hljs-name">h3</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">vcl-dropdown</span> [<span class="hljs-attr">value</span>]=<span class="hljs-string">"10"</span> (<span class="hljs-attr">change</span>)=<span class="hljs-string">"onSelect($event)"</span> [<span class="hljs-attr">tabindex</span>]=<span class="hljs-string">"1"</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">vcl-dropdown-option</span> *<span class="hljs-attr">ngFor</span>=<span class="hljs-string">"let item of items"</span> <span class="hljs-attr">prepIcon</span>=<span class="hljs-string">"fa:pencil"</span> [<span class="hljs-attr">value</span>]=<span class="hljs-string">"item.value"</span> [<span class="hljs-attr">disabled</span>]=<span class="hljs-string">"item.disabled"</span> [<span class="hljs-attr">label</span>]=<span class="hljs-string">"item.label"</span>\n                       [<span class="hljs-attr">sublabel</span>]=<span class="hljs-string">"item.sublabel"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vcl-dropdown-option</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">vcl-dropdown</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">br</span>/&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">h3</span>&gt;</span>multi-select<span class="hljs-tag">&lt;/<span class="hljs-name">h3</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">vcl-dropdown</span> [<span class="hljs-attr">value</span>]=<span class="hljs-string">"[10]"</span> (<span class="hljs-attr">change</span>)=<span class="hljs-string">"onSelect($event)"</span> [<span class="hljs-attr">tabindex</span>]=<span class="hljs-string">"2"</span> <span class="hljs-attr">mode</span>=<span class="hljs-string">"multiple"</span> [<span class="hljs-attr">maxSelectableItems</span>]=<span class="hljs-string">"3"</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">vcl-dropdown-option</span> *<span class="hljs-attr">ngFor</span>=<span class="hljs-string">"let item of items"</span> [<span class="hljs-attr">value</span>]=<span class="hljs-string">"item.value"</span> [<span class="hljs-attr">disabled</span>]=<span class="hljs-string">"item.disabled"</span> [<span class="hljs-attr">label</span>]=<span class="hljs-string">"item.label"</span> [<span class="hljs-attr">sublabel</span>]=<span class="hljs-string">"item.sublabel"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vcl-dropdown-option</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">vcl-dropdown</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">br</span>/&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">h3</span>&gt;</span>vcl-dropdown-option with content<span class="hljs-tag">&lt;/<span class="hljs-name">h3</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">vcl-dropdown</span> [<span class="hljs-attr">value</span>]=<span class="hljs-string">"2"</span> (<span class="hljs-attr">change</span>)=<span class="hljs-string">"onSelect($event)"</span> [<span class="hljs-attr">tabindex</span>]=<span class="hljs-string">"5"</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">vcl-dropdown-option</span> [<span class="hljs-attr">value</span>]=<span class="hljs-string">"1"</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"vclDropdownItemLabel"</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">b</span>&gt;</span>item 1<span class="hljs-tag">&lt;/<span class="hljs-name">b</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>  \n  <span class="hljs-tag">&lt;/<span class="hljs-name">vcl-dropdown-option</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">vcl-dropdown-option</span> [<span class="hljs-attr">value</span>]=<span class="hljs-string">"2"</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"vclDropdownItemLabel"</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">b</span>&gt;</span>item 2 (preselected)<span class="hljs-tag">&lt;/<span class="hljs-name">b</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>  \n  <span class="hljs-tag">&lt;/<span class="hljs-name">vcl-dropdown-option</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">vcl-dropdown</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">br</span>/&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">h3</span>&gt;</span>single-select with ngModel<span class="hljs-tag">&lt;/<span class="hljs-name">h3</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">vcl-dropdown</span> [(<span class="hljs-attr">ngModel</span>)]=<span class="hljs-string">"selectedItem"</span> [<span class="hljs-attr">tabindex</span>]=<span class="hljs-string">"6"</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">vcl-dropdown-option</span> *<span class="hljs-attr">ngFor</span>=<span class="hljs-string">"let item of items"</span> [<span class="hljs-attr">value</span>]=<span class="hljs-string">"item.value"</span> [<span class="hljs-attr">disabled</span>]=<span class="hljs-string">"item.disabled"</span> [<span class="hljs-attr">label</span>]=<span class="hljs-string">"item.label"</span> [<span class="hljs-attr">sublabel</span>]=<span class="hljs-string">"item.sublabel"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vcl-dropdown-option</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">vcl-dropdown</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">br</span>/&gt;</span>\nSelected item: {{selectedItem}}\n'},Jq51:function(s,l){s.exports='<h1 id="vcl-dropdown">vcl-dropdown</h1>\n<h2 id="usage">Usage</h2>\n<pre class="hljs"><span class="hljs-tag">&lt;<span class="hljs-name">vcl-dropdown</span> [<span class="hljs-attr">value</span>]=<span class="hljs-string">&quot;2&quot;</span> (<span class="hljs-attr">change</span>)=<span class="hljs-string">&quot;onSelect($event)&quot;</span> <span class="hljs-attr">mode</span>=<span class="hljs-string">&quot;multi&quot;</span> [<span class="hljs-attr">maxSelectableItems</span>]=<span class="hljs-string">&quot;5&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">vcl-dropdown-option</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;1&quot;</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Item 1&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vcl-dropdown-option</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">vcl-dropdown-option</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;2&quot;</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Item 2&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vcl-dropdown-option</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">vcl-dropdown-option</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;3&quot;</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Item 3&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vcl-dropdown-option</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">vcl-dropdown-option</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;4&quot;</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Item 4&quot;</span> [<span class="hljs-attr">disabled</span>]=<span class="hljs-string">&quot;true&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vcl-dropdown-option</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">vcl-dropdown-option</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;5&quot;</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Item 5&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vcl-dropdown-option</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">vcl-dropdown</span>&gt;</span></pre>\n<h3 id="api">API</h3>\n<h4 id="vcl-dropdown-attributes">vcl-dropdown attributes</h4>\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Type</th>\n<th>Default</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody><tr>\n<td><code>ngModel</code></td>\n<td>any | any[]</td>\n<td></td>\n<td>value(s) of the selected option(s)</td>\n</tr>\n<tr>\n<td><code>value</code></td>\n<td>any | any[]</td>\n<td></td>\n<td>value(s) of the selected option(s)</td>\n</tr>\n<tr>\n<td><code>mode</code></td>\n<td>&quot;single&quot; | &quot;multiple&quot;</td>\n<td>&quot;single&quot;</td>\n<td>1 option can be selected in &quot;single&quot; mode. 0 to <code>maxSelectableItems</code> in &quot;multiple&quot;</td>\n</tr>\n<tr>\n<td><code>maxSelectableItems</code></td>\n<td>number | undefined</td>\n<td></td>\n<td>maximum number of options that can be selected at the same time. Unlimited if undefined.</td>\n</tr>\n<tr>\n<td><code>listenKeys</code></td>\n<td>boolean</td>\n<td>true</td>\n<td>if true, the dropdown will listen and interact to keypress-events</td>\n</tr>\n</tbody></table>\n<h4 id="vcl-dropdown-events">vcl-dropdown events</h4>\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Type</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody><tr>\n<td><code>change</code></td>\n<td>any | any[]</td>\n<td>emits the new value when the selected options change</td>\n</tr>\n</tbody></table>\n<h4 id="vcl-dropdown-option-attributes">vcl-dropdown-option attributes</h4>\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Type</th>\n<th>Default</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody><tr>\n<td><code>value</code></td>\n<td>any</td>\n<td></td>\n<td>The items value</td>\n</tr>\n<tr>\n<td><code>label</code></td>\n<td>string</td>\n<td></td>\n<td>The items label</td>\n</tr>\n<tr>\n<td><code>sublabel</code></td>\n<td>string</td>\n<td></td>\n<td>The items sub label</td>\n</tr>\n<tr>\n<td><code>disabled</code></td>\n<td>boolean</td>\n<td>false</td>\n<td>if true, the item cannot be selected</td>\n</tr>\n<tr>\n<td><code>prepIcon</code></td>\n<td>string</td>\n<td></td>\n<td>Icon as defined by the icon component</td>\n</tr>\n<tr>\n<td><code>appIcon</code></td>\n<td>string</td>\n<td></td>\n<td>Same as <code>prepIcon</code> but appended</td>\n</tr>\n<tr>\n<td><code>prepIconSrc</code></td>\n<td>string</td>\n<td></td>\n<td>Image as defined by the icon component</td>\n</tr>\n<tr>\n<td><code>appIconSrc</code></td>\n<td>string</td>\n<td></td>\n<td>Same as <code>prepIconSrc</code> but appended</td>\n</tr>\n</tbody></table>\n'},KOtY:function(s,l){s.exports='<span class="hljs-keyword">import</span> { Component } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/core\'</span>;\n\n<span class="hljs-meta">@Component</span>({\n  templateUrl: <span class="hljs-string">\'demo.component.html\'</span>\n})\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> DropdownDemoComponent {\n\n  selectedItem = <span class="hljs-number">10</span>;\n\n  items: <span class="hljs-built_in">any</span>[] = [\n    { label: <span class="hljs-string">\'item 1\'</span>, value: <span class="hljs-number">1</span> },\n    { label: <span class="hljs-string">\'item 2\'</span>, value: <span class="hljs-number">2</span> },\n    { label: <span class="hljs-string">\'item 3\'</span>, <span class="hljs-keyword">class</span>: <span class="hljs-string">\'myclass myclass2\'</span>, value: <span class="hljs-number">3</span> },\n    { label: <span class="hljs-string">\'item 4\'</span>, value: <span class="hljs-number">4</span> },\n    { label: <span class="hljs-string">\'item 5\'</span>, value: <span class="hljs-number">5</span> },\n    { label: <span class="hljs-string">\'item 6\'</span>, sublabel: <span class="hljs-string">\'sublabel of item 6\'</span>, value: <span class="hljs-number">6</span> },\n    { label: <span class="hljs-string">\'item 7\'</span>, sublabel: <span class="hljs-string">\'sublabel of item 7\'</span>, value: <span class="hljs-number">7</span> },\n    { label: <span class="hljs-string">\'item 8 (disabled)\'</span>, sublabel: <span class="hljs-string">\'sublabel of item 8\'</span>, disabled: <span class="hljs-literal">true</span>, value: <span class="hljs-number">8</span> },\n    { label: <span class="hljs-string">\'item 9\'</span>, value: <span class="hljs-number">9</span>},\n    { label: <span class="hljs-string">\'item 10 (preselected)\'</span>, value: <span class="hljs-number">10</span> },\n    { label: <span class="hljs-string">\'item 11\'</span>, value: <span class="hljs-number">11</span> },\n    { label: <span class="hljs-string">\'item 12\'</span>, value: <span class="hljs-number">12</span> },\n    { label: <span class="hljs-string">\'item 13\'</span>, value: <span class="hljs-number">13</span> },\n    { label: <span class="hljs-string">\'item 14\'</span>, value: <span class="hljs-number">14</span> },\n    { label: <span class="hljs-string">\'item 15\'</span>, value: <span class="hljs-number">15</span> },\n    { label: <span class="hljs-string">\'item 16\'</span>, value: <span class="hljs-number">16</span> },\n    { label: <span class="hljs-string">\'item 17\'</span>, value: <span class="hljs-number">17</span>},\n    { label: <span class="hljs-string">\'item 19\'</span>, value: <span class="hljs-number">19</span> },\n    { label: <span class="hljs-string">\'item 20\'</span>, value: <span class="hljs-number">20</span> },\n    { label: <span class="hljs-string">\'item 21\'</span>, value: <span class="hljs-number">21</span> },\n    { label: <span class="hljs-string">\'item 22\'</span>, value: <span class="hljs-number">22</span> },\n    { label: <span class="hljs-string">\'item 23\'</span>, value: <span class="hljs-number">23</span> },\n    { label: <span class="hljs-string">\'item 24\'</span>, value: <span class="hljs-number">24</span> },\n    { label: <span class="hljs-string">\'item 25\'</span>, value: <span class="hljs-number">25</span> },\n    { label: <span class="hljs-string">\'item 26\'</span>, value: <span class="hljs-number">26</span> },\n    { label: <span class="hljs-string">\'item 27\'</span>, value: <span class="hljs-number">27</span> },\n    { label: <span class="hljs-string">\'item 28\'</span>, value: <span class="hljs-number">28</span> },\n    { label: <span class="hljs-string">\'item 29\'</span>, value: <span class="hljs-number">29</span> },\n    { label: <span class="hljs-string">\'item 30\'</span>, value: <span class="hljs-number">30</span> },\n    { label: <span class="hljs-string">\'item 31\'</span>, value: <span class="hljs-number">31</span> },\n    { label: <span class="hljs-string">\'item 32\'</span>, value: <span class="hljs-number">32</span> },\n    { label: <span class="hljs-string">\'item 33\'</span>, value: <span class="hljs-number">33</span> },\n    { label: <span class="hljs-string">\'item 34\'</span>, value: <span class="hljs-number">34</span> },\n    { label: <span class="hljs-string">\'item 35\'</span>, value: <span class="hljs-number">35</span> },\n    { label: <span class="hljs-string">\'item 36\'</span>, value: <span class="hljs-number">36</span> },\n    { label: <span class="hljs-string">\'item 37\'</span>, value: <span class="hljs-number">37</span> },\n    { label: <span class="hljs-string">\'item 38\'</span>, value: <span class="hljs-number">38</span> },\n    { label: <span class="hljs-string">\'item 39\'</span>, value: <span class="hljs-number">39</span> },\n    { label: <span class="hljs-string">\'item 40\'</span>, value: <span class="hljs-number">40</span> },\n    { label: <span class="hljs-string">\'item 41\'</span>, value: <span class="hljs-number">41</span> },\n    { label: <span class="hljs-string">\'item 42\'</span>, value: <span class="hljs-number">42</span> },\n    { label: <span class="hljs-string">\'item 43\'</span>, value: <span class="hljs-number">43</span> },\n    { label: <span class="hljs-string">\'item 44\'</span>, value: <span class="hljs-number">44</span> },\n    { label: <span class="hljs-string">\'item 45\'</span>, value: <span class="hljs-number">45</span> },\n    { label: <span class="hljs-string">\'item 46\'</span>, value: <span class="hljs-number">46</span> },\n    { label: <span class="hljs-string">\'item 47\'</span>, value: <span class="hljs-number">47</span> },\n    { label: <span class="hljs-string">\'item 48\'</span>, value: <span class="hljs-number">48</span> },\n    { label: <span class="hljs-string">\'item 49\'</span>, value: <span class="hljs-number">49</span> },\n    { label: <span class="hljs-string">\'item 50\'</span>, value: <span class="hljs-number">50</span> },\n    { label: <span class="hljs-string">\'item 51\'</span>, value: <span class="hljs-number">51</span> },\n    { label: <span class="hljs-string">\'item 52\'</span>, value: <span class="hljs-number">52</span> },\n    { label: <span class="hljs-string">\'item 53\'</span>, value: <span class="hljs-number">53</span> },\n    { label: <span class="hljs-string">\'item 54\'</span>, value: <span class="hljs-number">54</span> },\n    { label: <span class="hljs-string">\'item 55\'</span>, value: <span class="hljs-number">55</span> }\n  ];\n\n  onSelect(value: <span class="hljs-built_in">any</span>) {\n    <span class="hljs-built_in">console</span>.log(<span class="hljs-string">\'onSelect\'</span>, value);\n  }\n}\n'},fuds:function(s,l,n){"use strict";n.r(l);var a=n("CcnG"),t=function(){function s(){this.selectedItem=10,this.items=[{label:"item 1",value:1},{label:"item 2",value:2},{label:"item 3",class:"myclass myclass2",value:3},{label:"item 4",value:4},{label:"item 5",value:5},{label:"item 6",sublabel:"sublabel of item 6",value:6},{label:"item 7",sublabel:"sublabel of item 7",value:7},{label:"item 8 (disabled)",sublabel:"sublabel of item 8",disabled:!0,value:8},{label:"item 9",value:9},{label:"item 10 (preselected)",value:10},{label:"item 11",value:11},{label:"item 12",value:12},{label:"item 13",value:13},{label:"item 14",value:14},{label:"item 15",value:15},{label:"item 16",value:16},{label:"item 17",value:17},{label:"item 19",value:19},{label:"item 20",value:20},{label:"item 21",value:21},{label:"item 22",value:22},{label:"item 23",value:23},{label:"item 24",value:24},{label:"item 25",value:25},{label:"item 26",value:26},{label:"item 27",value:27},{label:"item 28",value:28},{label:"item 29",value:29},{label:"item 30",value:30},{label:"item 31",value:31},{label:"item 32",value:32},{label:"item 33",value:33},{label:"item 34",value:34},{label:"item 35",value:35},{label:"item 36",value:36},{label:"item 37",value:37},{label:"item 38",value:38},{label:"item 39",value:39},{label:"item 40",value:40},{label:"item 41",value:41},{label:"item 42",value:42},{label:"item 43",value:43},{label:"item 44",value:44},{label:"item 45",value:45},{label:"item 46",value:46},{label:"item 47",value:47},{label:"item 48",value:48},{label:"item 49",value:49},{label:"item 50",value:50},{label:"item 51",value:51},{label:"item 52",value:52},{label:"item 53",value:53},{label:"item 54",value:54},{label:"item 55",value:55}]}return s.prototype.onSelect=function(s){console.log("onSelect",s)},s}(),e={demo:function(){return{name:"Dropdown",tabs:{Demo:t,"README.md":{type:"md",content:n("Jq51")},"demo.component.html":{type:"pre",content:n("2OsX")},"demo.component.ts":{type:"pre",content:n("KOtY")}}}}},p=function(){return function(){}}(),c=n("pMnS"),u=n("8Ip6"),i=n("G6uX"),r=n("5cNt"),b=n("gIcY"),o=n("ihYY"),h=n("Ip0R"),d=a.qb({encapsulation:2,styles:[],data:{}});function m(s){return a.Lb(0,[(s()(),a.sb(0,0,null,null,1,"vcl-dropdown-option",[],null,null,null,i.rb,i.m)),a.rb(1,49152,[[1,4]],0,r.v,[],{value:[0,"value"],label:[1,"label"],sublabel:[2,"sublabel"],disabled:[3,"disabled"]},null)],function(s,l){s(l,1,0,l.context.$implicit.value,l.context.$implicit.label,l.context.$implicit.sublabel,l.context.$implicit.disabled)},null)}function j(s){return a.Lb(0,[(s()(),a.sb(0,0,null,null,1,"vcl-dropdown-option",[["prepIcon","fa:pencil"]],null,null,null,i.rb,i.m)),a.rb(1,49152,[[2,4]],0,r.v,[],{value:[0,"value"],label:[1,"label"],sublabel:[2,"sublabel"],prepIcon:[3,"prepIcon"],disabled:[4,"disabled"]},null)],function(s,l){s(l,1,0,l.context.$implicit.value,l.context.$implicit.label,l.context.$implicit.sublabel,"fa:pencil",l.context.$implicit.disabled)},null)}function g(s){return a.Lb(0,[(s()(),a.sb(0,0,null,null,1,"vcl-dropdown-option",[],null,null,null,i.rb,i.m)),a.rb(1,49152,[[3,4]],0,r.v,[],{value:[0,"value"],label:[1,"label"],sublabel:[2,"sublabel"],disabled:[3,"disabled"]},null)],function(s,l){s(l,1,0,l.context.$implicit.value,l.context.$implicit.label,l.context.$implicit.sublabel,l.context.$implicit.disabled)},null)}function v(s){return a.Lb(0,[(s()(),a.sb(0,0,null,null,1,"vcl-dropdown-option",[],null,null,null,i.rb,i.m)),a.rb(1,49152,[[5,4]],0,r.v,[],{value:[0,"value"],label:[1,"label"],sublabel:[2,"sublabel"],disabled:[3,"disabled"]},null)],function(s,l){s(l,1,0,l.context.$implicit.value,l.context.$implicit.label,l.context.$implicit.sublabel,l.context.$implicit.disabled)},null)}function w(s){return a.Lb(0,[(s()(),a.sb(0,0,null,null,1,"h3",[],null,null,null,null,null)),(s()(),a.Jb(-1,null,["single-select"])),(s()(),a.sb(2,0,null,null,5,"vcl-dropdown",[],[[1,"tabindex",0]],[[null,"change"]],function(s,l,n){var a=!0;return"change"===l&&(a=!1!==s.component.onSelect(n)&&a),a},i.qb,i.l)),a.Gb(5120,null,b.l,function(s){return[s]},[r.u]),a.rb(4,4308992,null,1,r.u,[a.k,a.h,o.b,[2,r.r]],{tabindex:[0,"tabindex"],value:[1,"value"]},{change:"change"}),a.Hb(603979776,1,{items:1}),(s()(),a.jb(16777216,null,null,1,null,m)),a.rb(7,278528,null,0,h.k,[a.R,a.O,a.t],{ngForOf:[0,"ngForOf"]},null),(s()(),a.sb(8,0,null,null,0,"br",[],null,null,null,null,null)),(s()(),a.sb(9,0,null,null,1,"h3",[],null,null,null,null,null)),(s()(),a.Jb(-1,null,["single-select with prepended icon"])),(s()(),a.sb(11,0,null,null,5,"vcl-dropdown",[],[[1,"tabindex",0]],[[null,"change"]],function(s,l,n){var a=!0;return"change"===l&&(a=!1!==s.component.onSelect(n)&&a),a},i.qb,i.l)),a.Gb(5120,null,b.l,function(s){return[s]},[r.u]),a.rb(13,4308992,null,1,r.u,[a.k,a.h,o.b,[2,r.r]],{tabindex:[0,"tabindex"],value:[1,"value"]},{change:"change"}),a.Hb(603979776,2,{items:1}),(s()(),a.jb(16777216,null,null,1,null,j)),a.rb(16,278528,null,0,h.k,[a.R,a.O,a.t],{ngForOf:[0,"ngForOf"]},null),(s()(),a.sb(17,0,null,null,0,"br",[],null,null,null,null,null)),(s()(),a.sb(18,0,null,null,1,"h3",[],null,null,null,null,null)),(s()(),a.Jb(-1,null,["multi-select"])),(s()(),a.sb(20,0,null,null,6,"vcl-dropdown",[["mode","multiple"]],[[1,"tabindex",0]],[[null,"change"]],function(s,l,n){var a=!0;return"change"===l&&(a=!1!==s.component.onSelect(n)&&a),a},i.qb,i.l)),a.Gb(5120,null,b.l,function(s){return[s]},[r.u]),a.rb(22,4308992,null,1,r.u,[a.k,a.h,o.b,[2,r.r]],{tabindex:[0,"tabindex"],value:[1,"value"],mode:[2,"mode"],maxSelectableItems:[3,"maxSelectableItems"]},{change:"change"}),a.Hb(603979776,3,{items:1}),a.Db(24,1),(s()(),a.jb(16777216,null,null,1,null,g)),a.rb(26,278528,null,0,h.k,[a.R,a.O,a.t],{ngForOf:[0,"ngForOf"]},null),(s()(),a.sb(27,0,null,null,0,"br",[],null,null,null,null,null)),(s()(),a.sb(28,0,null,null,1,"h3",[],null,null,null,null,null)),(s()(),a.Jb(-1,null,["vcl-dropdown-option with content"])),(s()(),a.sb(30,0,null,null,13,"vcl-dropdown",[],[[1,"tabindex",0]],[[null,"change"]],function(s,l,n){var a=!0;return"change"===l&&(a=!1!==s.component.onSelect(n)&&a),a},i.qb,i.l)),a.Gb(5120,null,b.l,function(s){return[s]},[r.u]),a.rb(32,4308992,null,1,r.u,[a.k,a.h,o.b,[2,r.r]],{tabindex:[0,"tabindex"],value:[1,"value"]},{change:"change"}),a.Hb(603979776,4,{items:1}),(s()(),a.sb(34,0,null,null,4,"vcl-dropdown-option",[],null,null,null,i.rb,i.m)),a.rb(35,49152,[[4,4]],0,r.v,[],{value:[0,"value"]},null),(s()(),a.sb(36,0,null,0,2,"div",[["class","vclDropdownItemLabel"]],null,null,null,null,null)),(s()(),a.sb(37,0,null,null,1,"b",[],null,null,null,null,null)),(s()(),a.Jb(-1,null,["item 1"])),(s()(),a.sb(39,0,null,null,4,"vcl-dropdown-option",[],null,null,null,i.rb,i.m)),a.rb(40,49152,[[4,4]],0,r.v,[],{value:[0,"value"]},null),(s()(),a.sb(41,0,null,0,2,"div",[["class","vclDropdownItemLabel"]],null,null,null,null,null)),(s()(),a.sb(42,0,null,null,1,"b",[],null,null,null,null,null)),(s()(),a.Jb(-1,null,["item 2 (preselected)"])),(s()(),a.sb(44,0,null,null,0,"br",[],null,null,null,null,null)),(s()(),a.sb(45,0,null,null,1,"h3",[],null,null,null,null,null)),(s()(),a.Jb(-1,null,["single-select with ngModel"])),(s()(),a.sb(47,0,null,null,8,"vcl-dropdown",[],[[1,"tabindex",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"]],function(s,l,n){var a=!0;return"ngModelChange"===l&&(a=!1!==(s.component.selectedItem=n)&&a),a},i.qb,i.l)),a.rb(48,4308992,null,1,r.u,[a.k,a.h,o.b,[2,r.r]],{tabindex:[0,"tabindex"]},null),a.Hb(603979776,5,{items:1}),a.Gb(1024,null,b.l,function(s){return[s]},[r.u]),a.rb(51,671744,null,0,b.q,[[8,null],[8,null],[8,null],[6,b.l]],{model:[0,"model"]},{update:"ngModelChange"}),a.Gb(2048,null,b.m,null,[b.q]),a.rb(53,16384,null,0,b.n,[[4,b.m]],null,null),(s()(),a.jb(16777216,null,null,1,null,v)),a.rb(55,278528,null,0,h.k,[a.R,a.O,a.t],{ngForOf:[0,"ngForOf"]},null),(s()(),a.sb(56,0,null,null,0,"br",[],null,null,null,null,null)),(s()(),a.Jb(57,null,["\nSelected item: ","\n"]))],function(s,l){var n=l.component;s(l,4,0,1,10),s(l,7,0,n.items),s(l,13,0,1,10),s(l,16,0,n.items);var a=s(l,24,0,10);s(l,22,0,2,a,"multiple",3),s(l,26,0,n.items),s(l,32,0,5,2),s(l,35,0,1),s(l,40,0,2),s(l,48,0,6),s(l,51,0,n.selectedItem),s(l,55,0,n.items)},function(s,l){var n=l.component;s(l,2,0,-1),s(l,11,0,-1),s(l,20,0,-1),s(l,30,0,-1),s(l,47,0,-1,a.Cb(l,53).ngClassUntouched,a.Cb(l,53).ngClassTouched,a.Cb(l,53).ngClassPristine,a.Cb(l,53).ngClassDirty,a.Cb(l,53).ngClassValid,a.Cb(l,53).ngClassInvalid,a.Cb(l,53).ngClassPending),s(l,57,0,n.selectedItem)})}function f(s){return a.Lb(0,[(s()(),a.sb(0,0,null,null,1,"ng-component",[],null,null,null,w,d)),a.rb(1,49152,null,0,t,[],null,null)],null,null)}var q=a.ob("ng-component",t,f,{},{},[]),x=n("2FIb"),I=n("ZYCi"),y=n("PNUx");n.d(l,"DropdownDemoModuleNgFactory",function(){return S});var S=a.pb(p,[],function(s){return a.zb([a.Ab(512,a.j,a.eb,[[8,[c.a,u.a,q]],[3,a.j],a.y]),a.Ab(4608,h.n,h.m,[a.v,[2,h.y]]),a.Ab(4608,b.w,b.w,[]),a.Ab(5120,r.hc,function(){return[new r.t]},[]),a.Ab(1073742336,h.c,h.c,[]),a.Ab(1073742336,b.t,b.t,[]),a.Ab(1073742336,b.k,b.k,[]),a.Ab(1073742336,r.fc,r.fc,[]),a.Ab(1073742336,r.Yb,r.Yb,[]),a.Ab(1073742336,x.a,x.a,[]),a.Ab(1073742336,r.Kb,r.Kb,[]),a.Ab(1073742336,r.Db,r.Db,[]),a.Ab(1073742336,r.Ib,r.Ib,[]),a.Ab(1073742336,r.Cb,r.Cb,[]),a.Ab(1073742336,r.wb,r.wb,[]),a.Ab(1073742336,I.m,I.m,[[2,I.s],[2,I.l]]),a.Ab(1073742336,p,p,[]),a.Ab(1024,I.j,function(){return[[{path:"",component:y.a,data:e}]]},[])])})}}]);