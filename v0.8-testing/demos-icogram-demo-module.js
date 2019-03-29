(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["demos-icogram-demo-module"],{

/***/ "./demo/app/demos/icogram/demo.component.html":
/*!****************************************************!*\
  !*** ./demo/app/demos/icogram/demo.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<vcl-icogram prepIcon=\"fas:chevron-right\">icogram with accessible link</vcl-icogram>\n<br><br>\n<vcl-icogram prepIcon=\"fas:chevron-right\" appIcon=\"fas:chevron-right\">prep/app icons</vcl-icogram>\n<br><br>\n"

/***/ }),

/***/ "./demo/app/demos/icogram/demo.component.ts":
/*!**************************************************!*\
  !*** ./demo/app/demos/icogram/demo.component.ts ***!
  \**************************************************/
/*! exports provided: IcogramDemoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IcogramDemoComponent", function() { return IcogramDemoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var IcogramDemoComponent = /** @class */ (function () {
    function IcogramDemoComponent() {
    }
    IcogramDemoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! ./demo.component.html */ "./demo/app/demos/icogram/demo.component.html")
        })
    ], IcogramDemoComponent);
    return IcogramDemoComponent;
}());



/***/ }),

/***/ "./demo/app/demos/icogram/demo.module.ts":
/*!***********************************************!*\
  !*** ./demo/app/demos/icogram/demo.module.ts ***!
  \***********************************************/
/*! exports provided: demo, IcogramDemoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "demo", function() { return demo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IcogramDemoModule", function() { return IcogramDemoModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ng_vcl_ng_vcl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-vcl/ng-vcl */ "./lib/ng-vcl/src/index.ts");
/* harmony import */ var _modules_demo_demo_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../modules/demo/demo.module */ "./demo/app/modules/demo/demo.module.ts");
/* harmony import */ var _demo_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./demo.component */ "./demo/app/demos/icogram/demo.component.ts");







function demo() {
    return {
        label: 'Icogram',
        tabs: {
            Demo: _demo_component__WEBPACK_IMPORTED_MODULE_6__["IcogramDemoComponent"],
            'README.md': {
                type: 'md',
                content: __webpack_require__(/*! raw-loader!highlight-loader?!markdown-loader?breaks=true!../../../../lib/ng-vcl/src/icogram/README.md */ "./node_modules/raw-loader/index.js!./node_modules/highlight-loader/index.js!./node_modules/markdown-loader/index.js?breaks=true!./lib/ng-vcl/src/icogram/README.md")
            },
            'demo.component.html': {
                type: 'pre',
                content: __webpack_require__(/*! highlight-loader?raw=true&lang=html!./demo.component.html */ "./node_modules/highlight-loader/index.js?raw=true&lang=html!./demo/app/demos/icogram/demo.component.html")
            },
            'demo.component.ts': {
                type: 'pre',
                content: __webpack_require__(/*! highlight-loader?raw=true&lang=ts!./demo.component.ts */ "./node_modules/highlight-loader/index.js?raw=true&lang=ts!./demo/app/demos/icogram/demo.component.ts")
            },
        },
    };
}
var IcogramDemoModule = /** @class */ (function () {
    function IcogramDemoModule() {
    }
    IcogramDemoModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _modules_demo_demo_module__WEBPACK_IMPORTED_MODULE_5__["DemoModule"],
                _ng_vcl_ng_vcl__WEBPACK_IMPORTED_MODULE_4__["VCLIcogramModule"],
                _ng_vcl_ng_vcl__WEBPACK_IMPORTED_MODULE_4__["VCLIconModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild([{
                        path: '',
                        component: _modules_demo_demo_module__WEBPACK_IMPORTED_MODULE_5__["DemoComponent"],
                        data: { demo: demo }
                    }]),
            ],
            entryComponents: [_demo_component__WEBPACK_IMPORTED_MODULE_6__["IcogramDemoComponent"]],
            declarations: [_demo_component__WEBPACK_IMPORTED_MODULE_6__["IcogramDemoComponent"]]
        })
    ], IcogramDemoModule);
    return IcogramDemoModule;
}());



/***/ }),

/***/ "./node_modules/highlight-loader/index.js?raw=true&lang=html!./demo/app/demos/icogram/demo.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/highlight-loader?raw=true&lang=html!./demo/app/demos/icogram/demo.component.html ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-icogram</span> <span class=\"hljs-attr\">prepIcon</span>=<span class=\"hljs-string\">\"fas:chevron-right\"</span>&gt;</span>icogram with accessible link<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-icogram</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">br</span>&gt;</span><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">br</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-icogram</span> <span class=\"hljs-attr\">prepIcon</span>=<span class=\"hljs-string\">\"fas:chevron-right\"</span> <span class=\"hljs-attr\">appIcon</span>=<span class=\"hljs-string\">\"fas:chevron-right\"</span>&gt;</span>prep/app icons<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-icogram</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">br</span>&gt;</span><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">br</span>&gt;</span>\n"

/***/ }),

/***/ "./node_modules/highlight-loader/index.js?raw=true&lang=ts!./demo/app/demos/icogram/demo.component.ts":
/*!***************************************************************************************************!*\
  !*** ./node_modules/highlight-loader?raw=true&lang=ts!./demo/app/demos/icogram/demo.component.ts ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<span class=\"hljs-keyword\">import</span> { Component, OnInit } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'@angular/core'</span>;\n\n<span class=\"hljs-meta\">@Component</span>({\n  templateUrl: <span class=\"hljs-string\">'demo.component.html'</span>\n})\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">class</span> IcogramDemoComponent {\n\n}\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./node_modules/highlight-loader/index.js!./node_modules/markdown-loader/index.js?breaks=true!./lib/ng-vcl/src/icogram/README.md":
/*!***********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./node_modules/highlight-loader!./node_modules/markdown-loader?breaks=true!./lib/ng-vcl/src/icogram/README.md ***!
  \***********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 id=\"vcl-icogram\">vcl-icogram</h1>\n<p>Combination of icon and text of which both are optional and can be permuted.<br>Icons can be prepended or appended to a textual label and can be sourced from icon<br>fonts or directly from file based imagery.<br>The component takes care of accessibility aspects such rendering appropriate aria<br>attributes.</p>\n<h2 id=\"usage\">Usage</h2>\n<pre class=\"hljs\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-icogram</span> <span class=\"hljs-attr\">label</span>=<span class=\"hljs-string\">&quot;some label&quot;</span> <span class=\"hljs-attr\">prepIcon</span>=<span class=\"hljs-string\">&quot;fas:chevron-right&quot;</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-icogram</span>&gt;</span>\n\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">span</span> <span class=\"hljs-attr\">vcl-icogram</span> <span class=\"hljs-attr\">label</span>=<span class=\"hljs-string\">&quot;some label&quot;</span> <span class=\"hljs-attr\">prepIcon</span>=<span class=\"hljs-string\">&quot;fas:chevron-right&quot;</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">span</span>&gt;</span></pre>\n<h3 id=\"api\">API</h3>\n<h4 id=\"attributes\">Attributes</h4>\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Type</th>\n<th>Default</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody><tr>\n<td><code>label</code></td>\n<td>string</td>\n<td></td>\n<td>The textual label</td>\n</tr>\n<tr>\n<td><code>prepIcon</code></td>\n<td>string</td>\n<td></td>\n<td>Icon as defined by the icon component</td>\n</tr>\n<tr>\n<td><code>appIcon</code></td>\n<td>string</td>\n<td></td>\n<td>Same as <code>prepIcon</code> but appended</td>\n</tr>\n<tr>\n<td><code>prepIconSrc</code></td>\n<td>string</td>\n<td></td>\n<td>Image as defined by the icon component</td>\n</tr>\n<tr>\n<td><code>appIconSrc</code></td>\n<td>string</td>\n<td></td>\n<td>Same as <code>prepIconSrc</code> but appended</td>\n</tr>\n</tbody></table>\n"

/***/ })

}]);
//# sourceMappingURL=demos-icogram-demo-module.js.map