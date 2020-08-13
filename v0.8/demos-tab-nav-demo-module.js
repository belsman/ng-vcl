(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["demos-tab-nav-demo-module"],{

/***/ "./demo/app/demos/tab-nav/demo.component.html":
/*!****************************************************!*\
  !*** ./demo/app/demos/tab-nav/demo.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>Default</h3>\n\n<vcl-tab-nav >\n  <vcl-tab>\n    <vcl-tab-label>Tab1</vcl-tab-label>\n    Content1\n  </vcl-tab>\n  <vcl-tab>\n      <vcl-tab-label>Tab2</vcl-tab-label>\n    Content2\n  </vcl-tab>\n  <vcl-tab [disabled]=\"true\">\n    <vcl-tab-label>Tab3</vcl-tab-label>\n    Content3\n  </vcl-tab>\n</vcl-tab-nav>\n\n<hr>\n\n<h3>With layout=\"right\"</h3>\n\n<vcl-tab-nav layout=\"right\" tabContentClass=\"vclSpan-70p\" tabsClass=\"vclSpan-30p\">\n  <vcl-tab>\n    <vcl-tab-label>Tab1</vcl-tab-label>\n    Content1\n  </vcl-tab>\n  <vcl-tab>\n      <vcl-tab-label>Tab2</vcl-tab-label>\n    Content2\n  </vcl-tab>\n  <vcl-tab [disabled]=\"true\">\n    <vcl-tab-label>Tab3</vcl-tab-label>\n    Content3\n  </vcl-tab>\n</vcl-tab-nav>\n\n<hr>\n\n<h3>With layout=\"left\"</h3>\n\n<vcl-tab-nav layout=\"left\" tabContentClass=\"vclSpan-70p\" tabsClass=\"vclSpan-30p\">\n  <vcl-tab>\n    <vcl-tab-label>Tab1</vcl-tab-label>\n    Content1\n  </vcl-tab>\n  <vcl-tab>\n      <vcl-tab-label>Tab2</vcl-tab-label>\n    Content2\n  </vcl-tab>\n  <vcl-tab [disabled]=\"true\">\n    <vcl-tab-label>Tab3</vcl-tab-label>\n    Content3\n  </vcl-tab>\n</vcl-tab-nav>\n\n<hr>\n\n<h3>With borders</h3>\n\n<vcl-tab-nav borders=true>\n  <vcl-tab>\n    <vcl-tab-label>Tab1</vcl-tab-label>\n    Content1\n  </vcl-tab>\n  <vcl-tab>\n      <vcl-tab-label>Tab2</vcl-tab-label>\n    Content2\n  </vcl-tab>\n  <vcl-tab [disabled]=\"true\">\n    <vcl-tab-label>Tab3</vcl-tab-label>\n    Content3\n  </vcl-tab>\n</vcl-tab-nav>\n\n<hr>\n\n\n<h3>Shared content</h3>\n\n<vcl-tab-nav [(selectedTabIndex)]=\"tabIndex\">\n  <vcl-tab>\n    <vcl-tab-label>Tab1</vcl-tab-label>\n  </vcl-tab>\n  <vcl-tab>\n      <vcl-tab-label>Tab2</vcl-tab-label>\n  </vcl-tab>\n  <vcl-tab [disabled]=\"true\">\n    <vcl-tab-label>Tab3</vcl-tab-label>\n  </vcl-tab>\n  Shared Content Tab: {{tabIndex}}\n</vcl-tab-nav>\n\n\n<h3>No content</h3>\n\n<vcl-tab-nav>\n  <vcl-tab>\n    <vcl-tab-label>Tab1</vcl-tab-label>\n  </vcl-tab>\n  <vcl-tab>\n      <vcl-tab-label>Tab2</vcl-tab-label>\n  </vcl-tab>\n  <vcl-tab [disabled]=\"true\">\n    <vcl-tab-label>Tab3</vcl-tab-label>\n  </vcl-tab>\n</vcl-tab-nav>\n"

/***/ }),

/***/ "./demo/app/demos/tab-nav/demo.component.ts":
/*!**************************************************!*\
  !*** ./demo/app/demos/tab-nav/demo.component.ts ***!
  \**************************************************/
/*! exports provided: TabNavDemoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabNavDemoComponent", function() { return TabNavDemoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TabNavDemoComponent = /** @class */ (function () {
    function TabNavDemoComponent() {
        this.tabIndex = 0;
    }
    TabNavDemoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! ./demo.component.html */ "./demo/app/demos/tab-nav/demo.component.html")
        })
    ], TabNavDemoComponent);
    return TabNavDemoComponent;
}());



/***/ }),

/***/ "./demo/app/demos/tab-nav/demo.module.ts":
/*!***********************************************!*\
  !*** ./demo/app/demos/tab-nav/demo.module.ts ***!
  \***********************************************/
/*! exports provided: demo, TabNavDemoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "demo", function() { return demo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabNavDemoModule", function() { return TabNavDemoModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ng_vcl_ng_vcl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-vcl/ng-vcl */ "./lib/ng-vcl/src/index.ts");
/* harmony import */ var _modules_demo_demo_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../modules/demo/demo.module */ "./demo/app/modules/demo/demo.module.ts");
/* harmony import */ var _demo_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./demo.component */ "./demo/app/demos/tab-nav/demo.component.ts");







function demo() {
    return {
        label: 'Tab Navigation',
        tabs: {
            Demo: _demo_component__WEBPACK_IMPORTED_MODULE_6__["TabNavDemoComponent"],
            'README.md': {
                type: 'md',
                content: __webpack_require__(/*! raw-loader!highlight-loader?!markdown-loader?breaks=true!../../../../lib/ng-vcl/src/tab-nav/README.md */ "./node_modules/raw-loader/index.js!./node_modules/highlight-loader/index.js!./node_modules/markdown-loader/index.js?breaks=true!./lib/ng-vcl/src/tab-nav/README.md")
            },
            'demo.component.html': {
                type: 'pre',
                content: __webpack_require__(/*! highlight-loader?raw=true&lang=html!./demo.component.html */ "./node_modules/highlight-loader/index.js?raw=true&lang=html!./demo/app/demos/tab-nav/demo.component.html")
            },
            'demo.component.ts': {
                type: 'pre',
                content: __webpack_require__(/*! highlight-loader?raw=true&lang=ts!./demo.component.ts */ "./node_modules/highlight-loader/index.js?raw=true&lang=ts!./demo/app/demos/tab-nav/demo.component.ts")
            }
        }
    };
}
var TabNavDemoModule = /** @class */ (function () {
    function TabNavDemoModule() {
    }
    TabNavDemoModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _modules_demo_demo_module__WEBPACK_IMPORTED_MODULE_5__["DemoModule"],
                _ng_vcl_ng_vcl__WEBPACK_IMPORTED_MODULE_4__["VCLTabNavModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild([{
                        path: '',
                        component: _modules_demo_demo_module__WEBPACK_IMPORTED_MODULE_5__["DemoComponent"],
                        data: { demo: demo }
                    }]),
            ],
            entryComponents: [_demo_component__WEBPACK_IMPORTED_MODULE_6__["TabNavDemoComponent"]],
            declarations: [_demo_component__WEBPACK_IMPORTED_MODULE_6__["TabNavDemoComponent"]]
        })
    ], TabNavDemoModule);
    return TabNavDemoModule;
}());



/***/ }),

/***/ "./demo/app/modules/demo/demo.component.html":
/*!***************************************************!*\
  !*** ./demo/app/modules/demo/demo.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 class=\"vclArticleHeader\"> {{title}}</h2>\n<div *ngIf=\"tabs.length>0\">\n  <vcl-tab-nav borders=true>\n    <vcl-tab *ngFor=\"let tab of tabs\">\n      <vcl-tab-label>{{tab.name}}</vcl-tab-label>\n      <div *ngIf=\"tab.type==='component'\">\n        <ng-template [cdkPortalOutlet]=\"tab.content\"></ng-template>\n      </div>\n      <div *ngIf=\"tab.type==='text'\"><pre>{{tab.content}}</pre></div>\n      <div *ngIf=\"tab.type==='html'\" [innerHtml]=\"tab.content\"></div>\n      <div *ngIf=\"tab.type==='md'\"   class=\"markdown-body\"  [innerHtml]=\"tab.content\"></div>\n      <pre *ngIf=\"tab.type==='pre'\"  [innerHtml]=\"tab.content\"></pre>\n    </vcl-tab>\n  </vcl-tab-nav>\n</div>\n"

/***/ }),

/***/ "./demo/app/modules/demo/demo.component.ts":
/*!*************************************************!*\
  !*** ./demo/app/modules/demo/demo.component.ts ***!
  \*************************************************/
/*! exports provided: DemoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemoComponent", function() { return DemoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/portal */ "./node_modules/@angular/cdk/esm5/portal.es5.js");





var DemoComponent = /** @class */ (function () {
    function DemoComponent(activatedRoute, sanitizer) {
        this.activatedRoute = activatedRoute;
        this.sanitizer = sanitizer;
        this.tabs = [];
    }
    DemoComponent.prototype.ngOnInit = function () {
        var _this = this;
        var data = this.activatedRoute.snapshot.data.demo();
        if (data) {
            this.title = data.label;
            if (data.tabs) {
                this.tabs = Object.keys(data.tabs).map(function (key) {
                    var type;
                    var content;
                    if (typeof data.tabs[key] === 'object' && data.tabs[key]) {
                        type = data.tabs[key].type;
                        if (type === 'pre' || type === 'html' || type === 'md') {
                            content = _this.sanitizer.bypassSecurityTrustHtml(data.tabs[key].content);
                        }
                        else {
                            content = data.tabs[key].content;
                        }
                    }
                    else if (typeof data.tabs[key] === 'function') {
                        type = 'component';
                        content = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__["ComponentPortal"](data.tabs[key]);
                    }
                    return {
                        name: key,
                        content: content,
                        type: type
                    };
                });
            }
            else {
                this.tabs = [];
            }
        }
        else {
            this.title = 'ng-vcl';
            this.tabs = [];
        }
    };
    DemoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            template: __webpack_require__(/*! ./demo.component.html */ "./demo/app/modules/demo/demo.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]])
    ], DemoComponent);
    return DemoComponent;
}());



/***/ }),

/***/ "./demo/app/modules/demo/demo.module.ts":
/*!**********************************************!*\
  !*** ./demo/app/modules/demo/demo.module.ts ***!
  \**********************************************/
/*! exports provided: DemoComponent, DemoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemoModule", function() { return DemoModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ng_vcl_ng_vcl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-vcl/ng-vcl */ "./lib/ng-vcl/src/index.ts");
/* harmony import */ var _demo_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./demo.component */ "./demo/app/modules/demo/demo.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DemoComponent", function() { return _demo_component__WEBPACK_IMPORTED_MODULE_4__["DemoComponent"]; });

/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/portal */ "./node_modules/@angular/cdk/esm5/portal.es5.js");







var DemoModule = /** @class */ (function () {
    function DemoModule() {
    }
    DemoModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _ng_vcl_ng_vcl__WEBPACK_IMPORTED_MODULE_3__["VCLTabNavModule"],
                _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_5__["PortalModule"]
            ],
            declarations: [_demo_component__WEBPACK_IMPORTED_MODULE_4__["DemoComponent"],]
        })
    ], DemoModule);
    return DemoModule;
}());



/***/ }),

/***/ "./node_modules/highlight-loader/index.js?raw=true&lang=html!./demo/app/demos/tab-nav/demo.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/highlight-loader?raw=true&lang=html!./demo/app/demos/tab-nav/demo.component.html ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">h3</span>&gt;</span>Default<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">h3</span>&gt;</span>\n\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-tab-nav</span> &gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-tab</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-tab-label</span>&gt;</span>Tab1<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-tab-label</span>&gt;</span>\n    Content1\n  <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-tab</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-tab</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-tab-label</span>&gt;</span>Tab2<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-tab-label</span>&gt;</span>\n    Content2\n  <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-tab</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-tab</span> [<span class=\"hljs-attr\">disabled</span>]=<span class=\"hljs-string\">\"true\"</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-tab-label</span>&gt;</span>Tab3<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-tab-label</span>&gt;</span>\n    Content3\n  <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-tab</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-tab-nav</span>&gt;</span>\n\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">hr</span>&gt;</span>\n\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">h3</span>&gt;</span>With layout=\"right\"<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">h3</span>&gt;</span>\n\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-tab-nav</span> <span class=\"hljs-attr\">layout</span>=<span class=\"hljs-string\">\"right\"</span> <span class=\"hljs-attr\">tabContentClass</span>=<span class=\"hljs-string\">\"vclSpan-70p\"</span> <span class=\"hljs-attr\">tabsClass</span>=<span class=\"hljs-string\">\"vclSpan-30p\"</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-tab</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-tab-label</span>&gt;</span>Tab1<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-tab-label</span>&gt;</span>\n    Content1\n  <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-tab</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-tab</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-tab-label</span>&gt;</span>Tab2<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-tab-label</span>&gt;</span>\n    Content2\n  <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-tab</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-tab</span> [<span class=\"hljs-attr\">disabled</span>]=<span class=\"hljs-string\">\"true\"</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-tab-label</span>&gt;</span>Tab3<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-tab-label</span>&gt;</span>\n    Content3\n  <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-tab</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-tab-nav</span>&gt;</span>\n\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">hr</span>&gt;</span>\n\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">h3</span>&gt;</span>With layout=\"left\"<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">h3</span>&gt;</span>\n\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-tab-nav</span> <span class=\"hljs-attr\">layout</span>=<span class=\"hljs-string\">\"left\"</span> <span class=\"hljs-attr\">tabContentClass</span>=<span class=\"hljs-string\">\"vclSpan-70p\"</span> <span class=\"hljs-attr\">tabsClass</span>=<span class=\"hljs-string\">\"vclSpan-30p\"</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-tab</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-tab-label</span>&gt;</span>Tab1<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-tab-label</span>&gt;</span>\n    Content1\n  <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-tab</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-tab</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-tab-label</span>&gt;</span>Tab2<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-tab-label</span>&gt;</span>\n    Content2\n  <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-tab</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-tab</span> [<span class=\"hljs-attr\">disabled</span>]=<span class=\"hljs-string\">\"true\"</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-tab-label</span>&gt;</span>Tab3<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-tab-label</span>&gt;</span>\n    Content3\n  <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-tab</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-tab-nav</span>&gt;</span>\n\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">hr</span>&gt;</span>\n\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">h3</span>&gt;</span>With borders<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">h3</span>&gt;</span>\n\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-tab-nav</span> <span class=\"hljs-attr\">borders</span>=<span class=\"hljs-string\">true</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-tab</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-tab-label</span>&gt;</span>Tab1<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-tab-label</span>&gt;</span>\n    Content1\n  <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-tab</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-tab</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-tab-label</span>&gt;</span>Tab2<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-tab-label</span>&gt;</span>\n    Content2\n  <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-tab</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-tab</span> [<span class=\"hljs-attr\">disabled</span>]=<span class=\"hljs-string\">\"true\"</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-tab-label</span>&gt;</span>Tab3<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-tab-label</span>&gt;</span>\n    Content3\n  <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-tab</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-tab-nav</span>&gt;</span>\n\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">hr</span>&gt;</span>\n\n\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">h3</span>&gt;</span>Shared content<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">h3</span>&gt;</span>\n\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-tab-nav</span> [(<span class=\"hljs-attr\">selectedTabIndex</span>)]=<span class=\"hljs-string\">\"tabIndex\"</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-tab</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-tab-label</span>&gt;</span>Tab1<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-tab-label</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-tab</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-tab</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-tab-label</span>&gt;</span>Tab2<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-tab-label</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-tab</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-tab</span> [<span class=\"hljs-attr\">disabled</span>]=<span class=\"hljs-string\">\"true\"</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-tab-label</span>&gt;</span>Tab3<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-tab-label</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-tab</span>&gt;</span>\n  Shared Content Tab: {{tabIndex}}\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-tab-nav</span>&gt;</span>\n\n\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">h3</span>&gt;</span>No content<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">h3</span>&gt;</span>\n\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-tab-nav</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-tab</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-tab-label</span>&gt;</span>Tab1<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-tab-label</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-tab</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-tab</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-tab-label</span>&gt;</span>Tab2<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-tab-label</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-tab</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-tab</span> [<span class=\"hljs-attr\">disabled</span>]=<span class=\"hljs-string\">\"true\"</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-tab-label</span>&gt;</span>Tab3<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-tab-label</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-tab</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-tab-nav</span>&gt;</span>\n"

/***/ }),

/***/ "./node_modules/highlight-loader/index.js?raw=true&lang=ts!./demo/app/demos/tab-nav/demo.component.ts":
/*!***************************************************************************************************!*\
  !*** ./node_modules/highlight-loader?raw=true&lang=ts!./demo/app/demos/tab-nav/demo.component.ts ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<span class=\"hljs-keyword\">import</span> { Component } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'@angular/core'</span>;\n\n<span class=\"hljs-meta\">@Component</span>({\n  templateUrl: <span class=\"hljs-string\">'demo.component.html'</span>\n})\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">class</span> TabNavDemoComponent {\n  tabIndex = <span class=\"hljs-number\">0</span>;\n}\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./node_modules/highlight-loader/index.js!./node_modules/markdown-loader/index.js?breaks=true!./lib/ng-vcl/src/tab-nav/README.md":
/*!***********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./node_modules/highlight-loader!./node_modules/markdown-loader?breaks=true!./lib/ng-vcl/src/tab-nav/README.md ***!
  \***********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 id=\"vcl-tab-nav\">vcl-tab-nav</h1>\n<p>The tab nav allows to organize content in tabs.<br>Only one tab is visible at a given time.</p>\n<h2 id=\"usage\">Usage</h2>\n<pre class=\"hljs\"><span class=\"hljs-keyword\">import</span> { VCLTabNavModule } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&apos;ng-vcl&apos;</span>;\n\n@NgModule({\n  <span class=\"hljs-attr\">imports</span>: [ VCLTabNavModule ],\n  ...\n})\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-class\"><span class=\"hljs-keyword\">class</span> <span class=\"hljs-title\">AppComponent</span> </span>{}</pre>\n<pre class=\"hljs\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-tab-nav</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-tab</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-tab-label</span>&gt;</span>Tab1<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-tab-label</span>&gt;</span>\n    Content1\n  <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-tab</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-tab</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-tab-label</span>&gt;</span>Tab2<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-tab-label</span>&gt;</span>\n    Content2\n  <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-tab</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-tab</span> [<span class=\"hljs-attr\">disabled</span>]=<span class=\"hljs-string\">&quot;true&quot;</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-tab-label</span>&gt;</span>Tab3<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-tab-label</span>&gt;</span>\n    Content3\n  <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-tab</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-tab-nav</span>&gt;</span></pre>\n<h3 id=\"api\">API</h3>\n<h4 id=\"vcl-tab-nav-attributes\">vcl-tab-nav attributes</h4>\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Type</th>\n<th>Default</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody><tr>\n<td><code>selectedTabIndex</code></td>\n<td>number</td>\n<td>0</td>\n<td>The index of the currently visible tab</td>\n</tr>\n<tr>\n<td><code>borders</code></td>\n<td>boolean</td>\n<td>false</td>\n<td>Enables borders for the tab-nav</td>\n</tr>\n<tr>\n<td><code>layout</code></td>\n<td>string</td>\n<td></td>\n<td>The layout: <code>undefined</code> , <code>&quot;left&quot;</code> or <code>&quot;right&quot;</code></td>\n</tr>\n</tbody></table>\n<h4 id=\"events\">Events</h4>\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Type</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody><tr>\n<td><code>selectedTabIndexChange</code></td>\n<td>number</td>\n<td>emits the new value when the tab changes</td>\n</tr>\n</tbody></table>\n<h4 id=\"vcl-tab-attributes\">vcl-tab attributes</h4>\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Type</th>\n<th>Default</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody><tr>\n<td><code>disabled</code></td>\n<td>boolean</td>\n<td>false</td>\n<td>Disables the tab when true</td>\n</tr>\n</tbody></table>\n"

/***/ })

}]);
//# sourceMappingURL=demos-tab-nav-demo-module.js.map