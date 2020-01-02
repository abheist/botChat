(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-management-management-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/management/management.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/management/management.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<iframe width=\"100%\" style=\"height: calc(100vh - 68px);\" [src]=\"dashboard.url | safe\" frameborder=\"0\" allowFullScreen=\"true\"></iframe>\r\n");

/***/ }),

/***/ "./src/app/management/management-routing-module.ts":
/*!*********************************************************!*\
  !*** ./src/app/management/management-routing-module.ts ***!
  \*********************************************************/
/*! exports provided: ManagementRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManagementRoutingModule", function() { return ManagementRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _management_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./management.component */ "./src/app/management/management.component.ts");




const routes = [
    {
        path: '', component: _management_component__WEBPACK_IMPORTED_MODULE_3__["ManagementComponent"]
    }
];
let ManagementRoutingModule = class ManagementRoutingModule {
};
ManagementRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)
        ],
        exports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]
        ]
    })
], ManagementRoutingModule);



/***/ }),

/***/ "./src/app/management/management.component.scss":
/*!******************************************************!*\
  !*** ./src/app/management/management.component.scss ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21hbmFnZW1lbnQvbWFuYWdlbWVudC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/management/management.component.ts":
/*!****************************************************!*\
  !*** ./src/app/management/management.component.ts ***!
  \****************************************************/
/*! exports provided: ManagementComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManagementComponent", function() { return ManagementComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _shared_header_header_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../shared/header/header.service */ "./src/app/shared/header/header.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");



let ManagementComponent = class ManagementComponent {
    constructor(headerService) {
        this.headerService = headerService;
        this.dashboard = {
            name: 'Management View',
            url: 'https://app.powerbi.com/reportEmbed?reportId=085fbb23-24ee-4b31-82e0-d784713b319f&autoAuth=true&ctid=54f1c50c-e960-4359-94fa-e790e17dcfb4&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly93YWJpLWluZGlhLWNlbnRyYWwtYS1wcmltYXJ5LXJlZGlyZWN0LmFuYWx5c2lzLndpbmRvd3MubmV0LyJ9'
        };
    }
    ngOnInit() {
        this.headerService.showheaderSubComponents = true;
    }
};
ManagementComponent.ctorParameters = () => [
    { type: _shared_header_header_service__WEBPACK_IMPORTED_MODULE_1__["HeaderService"] }
];
ManagementComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-management',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./management.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/management/management.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./management.component.scss */ "./src/app/management/management.component.scss")).default]
    })
], ManagementComponent);



/***/ }),

/***/ "./src/app/management/management.module.ts":
/*!*************************************************!*\
  !*** ./src/app/management/management.module.ts ***!
  \*************************************************/
/*! exports provided: ManagementModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManagementModule", function() { return ManagementModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _shared_material_material_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../shared/material/material.module */ "./src/app/shared/material/material.module.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
/* harmony import */ var _management_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./management-routing-module */ "./src/app/management/management-routing-module.ts");
/* harmony import */ var _management_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./management.component */ "./src/app/management/management.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _pipes_pipe_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../pipes/pipe.module */ "./src/app/pipes/pipe.module.ts");








let ManagementModule = class ManagementModule {
};
ManagementModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["NgModule"])({
        declarations: [
            _management_component__WEBPACK_IMPORTED_MODULE_4__["ManagementComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"],
            _management_routing_module__WEBPACK_IMPORTED_MODULE_3__["ManagementRoutingModule"],
            _pipes_pipe_module__WEBPACK_IMPORTED_MODULE_7__["PipeModule"],
            _shared_material_material_module__WEBPACK_IMPORTED_MODULE_1__["MaterialModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__["FlexLayoutModule"]
        ]
    })
], ManagementModule);



/***/ })

}]);
//# sourceMappingURL=app-management-management-module-es2015.js.map