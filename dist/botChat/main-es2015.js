(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div fxFlex class=\"padding-20\">\n\t<div fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n\t\t<h2>IRIS KPMG Risk Advisory</h2>\n\t\t<div fxLayout=\"row\" fxLayoutAlign=\"start center\" fxLayoutGap=\"20px\">\n\t\t\t<mat-form-field color=\"primary\" appearance=\"outline\">\n\t\t\t\t<input\n\t\t\t\t\tmatInput\n\t\t\t\t\t[matDatepicker]=\"picker\"\n\t\t\t\t\tplaceholder=\"Choose a date\"\n\t\t\t\t\t(dateInput)=\"filterChats($event)\"\n\t\t\t\t\t[(ngModel)]=\"datePickerValue\"\n\t\t\t\t/>\n\t\t\t\t<mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n\t\t\t\t<mat-datepicker #picker></mat-datepicker>\n\t\t\t</mat-form-field>\n\t\t\t<mat-form-field  color=\"primary\" appearance=\"outline\">\n\t\t\t\t<mat-label>Score Level</mat-label>\n\t\t\t\t<mat-select [(value)]=\"defaultScore\" (selectionChange)=\"filterWithScore()\">\n\t\t\t\t\t<mat-option *ngFor=\"let score of scores\" [value]=\"score.value\" >\n\t\t\t\t\t\t{{ score.viewValue }}\n\t\t\t\t\t</mat-option>\n\t\t\t\t</mat-select>\n\t\t\t</mat-form-field>\n\t\t</div>\n\t</div>\n\t<div fxLayout=\"row wrap\" fxLayoutAlign=\"space-between start\">\n\t\t<mat-accordion\n\t\t\tstyle=\"width: 300px; margin: 20px 0; background: #ffffff; border-radius: 8px;\"\n\t\t\t*ngFor=\"let chat of allChats\"\n\t\t\tclass=\"mat-elevation-z0\"\n\t\t>\n\t\t\t<mat-expansion-panel>\n\t\t\t\t<mat-expansion-panel-header>\n\t\t\t\t\t<mat-panel-title>\n\t\t\t\t\t\t<span class=\"type-badge red\" *ngIf=\"chat.score <= 50\">P</span>\n\t\t\t\t\t\t<span class=\"type-badge green\" *ngIf=\"chat.score > 50\">OK</span>\n\t\t\t\t\t</mat-panel-title>\n\t\t\t\t\t<mat-panel-description> Avg. chat score: {{ chat.score }} </mat-panel-description>\n\t\t\t\t</mat-expansion-panel-header>\n\t\t\t\t<div class=\"grey-background\">\n\t\t\t\t\t<div style=\"max-height: 300px; overflow: auto; padding-left: 24px;\">\n\t\t\t\t\t\t<div class=\"padding-vertical-5\">\n\t\t\t\t\t\t\t<div class=\"mat-body-2\">Timestamp:</div>\n\t\t\t\t\t\t\t<div class=\"mat-caption\">{{ chat.timestamp | date }}</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<mat-divider></mat-divider>\n\t\t\t\t\t\t<div class=\"padding-vertical-5\">\n\t\t\t\t\t\t\t<div class=\"mat-body-2\">Id:</div>\n\t\t\t\t\t\t\t<div class=\"mat-caption\">{{ chat.id }}</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<mat-divider></mat-divider>\n\t\t\t\t\t\t<div fxLayout=\"row\">\n\t\t\t\t\t\t\t<div fxFlex=\"90\">\n\t\t\t\t\t\t\t\t<div class=\"padding-vertical-5\">\n\t\t\t\t\t\t\t\t\t<div class=\"mat-body-2\">Question:</div>\n\t\t\t\t\t\t\t\t\t<div class=\"mat-caption\">{{ chat.question }}</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<mat-divider></mat-divider>\n\t\t\t\t\t\t\t\t<div class=\"padding-vertical-5\">\n\t\t\t\t\t\t\t\t\t<div class=\"mat-body-2\">Answer:</div>\n\t\t\t\t\t\t\t\t\t<div class=\"mat-caption\">{{ chat.answer }}</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t<button mat-icon-button [matMenuTriggerFor]=\"menu\" #menuTrigger=\"matMenuTrigger\">\n\t\t\t\t\t\t\t\t\t<mat-icon>chevron_right</mat-icon>\n\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t<mat-menu #menu=\"matMenu\">\n\t\t\t\t\t\t\t\t\t<div (click)=\"$event.stopPropagation()\">\n\t\t\t\t\t\t\t\t\t\t<p style=\"padding: 0 16px; font-weight: 700;\">Question's Intent</p>\n\t\t\t\t\t\t\t\t\t\t<mat-divider></mat-divider>\n\t\t\t\t\t\t\t\t\t\t<div style=\"padding: 10px 16px;\">\n\t\t\t\t\t\t\t\t\t\t\t<div style=\"padding: 7px;\">{{chat.question}}</div>\n\t\t\t\t\t\t\t\t\t\t\t<div fxLayout=\"row\" fxLayoutAlign=\"start center\" fxLayoutGap=\"5px\">\n\t\t\t\t\t\t\t\t\t\t\t\t<mat-form-field appearance=\"outline\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<mat-label>Select Intent</mat-label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<mat-select>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<mat-option\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t*ngFor=\"let intent of dropdownMenu\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[value]=\"intent.value\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t{{ intent.viewValue }}\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</mat-option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</mat-select>\n\t\t\t\t\t\t\t\t\t\t\t\t</mat-form-field>\n\t\t\t\t\t\t\t\t\t\t\t\t<button mat-icon-button (click)=\"saveTheData(); menuTrigger.closeMenu()\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<mat-icon>save</mat-icon>\n\t\t\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</mat-menu>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<mat-divider></mat-divider>\n\t\t\t\t\t\t<div class=\"padding-vertical-5\">\n\t\t\t\t\t\t\t<div class=\"mat-body-2\">Score:</div>\n\t\t\t\t\t\t\t<div class=\"mat-caption\">{{ chat.score }}</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</mat-expansion-panel>\n\t\t</mat-accordion>\n\t</div>\n</div>\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".padding-20 {\n  padding: 20px;\n}\n\n.type-badge {\n  font-size: 12px;\n  color: #ffffffff;\n  padding: 2px 4px;\n  min-width: 14px;\n  border-radius: 46%;\n  text-align: center;\n  margin-left: 5px;\n}\n\n.red {\n  background: red;\n}\n\n.green {\n  background: green;\n}\n\n.grey-background {\n  background: rgba(0, 0, 0, 0.04);\n}\n\n.padding-vertical-5 {\n  padding: 5px 0;\n}\n\n::ng-deep .mat-expansion-panel-body {\n  padding: 0 !important;\n}\n\n::ng-deep .mat-form-field-wrapper {\n  margin: 0 !important;\n  padding: 0 !important;\n}\n\n::ng-deep .mat-expansion-panel {\n  box-shadow: none !important;\n  border: 1px solid #dadce0;\n}\n\n::ng-deep .mat-accordion {\n  box-shadow: 5px 5px 1px 0 rgba(46, 61, 73, 0.2);\n}\n\n::ng-deep .mat-accordion:hover {\n  box-shadow: 2px 4px 4px 0 rgba(46, 61, 73, 0.2);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FiaGlzaGVrL2lyaXMvYm90Q2hhdC9zcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0MsYUFBQTtBQ0NEOztBREVBO0VBQ0MsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FDQ0Q7O0FERUE7RUFDQyxlQUFBO0FDQ0Q7O0FERUE7RUFDQyxpQkFBQTtBQ0NEOztBREVBO0VBQ0MsK0JBQUE7QUNDRDs7QURFQTtFQUNDLGNBQUE7QUNDRDs7QURFQTtFQUNDLHFCQUFBO0FDQ0Q7O0FERUE7RUFDQyxvQkFBQTtFQUNBLHFCQUFBO0FDQ0Q7O0FERUE7RUFDQywyQkFBQTtFQUNBLHlCQUFBO0FDQ0Q7O0FETUE7RUFDQywrQ0FBQTtBQ0hEOztBRE1BO0VBQ0MsK0NBQUE7QUNIRCIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wYWRkaW5nLTIwIHtcblx0cGFkZGluZzogMjBweDtcbn1cblxuLnR5cGUtYmFkZ2Uge1xuXHRmb250LXNpemU6IDEycHg7XG5cdGNvbG9yOiAjZmZmZmZmZmY7XG5cdHBhZGRpbmc6IDJweCA0cHg7XG5cdG1pbi13aWR0aDogMTRweDtcblx0Ym9yZGVyLXJhZGl1czogNDYlO1xuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdG1hcmdpbi1sZWZ0OiA1cHg7XG59XG5cbi5yZWQge1xuXHRiYWNrZ3JvdW5kOiByZWQ7XG59XG5cbi5ncmVlbiB7XG5cdGJhY2tncm91bmQ6IGdyZWVuO1xufVxuXG4uZ3JleS1iYWNrZ3JvdW5kIHtcblx0YmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjA0KTtcbn1cblxuLnBhZGRpbmctdmVydGljYWwtNSB7XG5cdHBhZGRpbmc6IDVweCAwO1xufVxuXG46Om5nLWRlZXAgLm1hdC1leHBhbnNpb24tcGFuZWwtYm9keSB7XG5cdHBhZGRpbmc6IDAgIWltcG9ydGFudDtcbn1cblxuOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC13cmFwcGVyIHtcblx0bWFyZ2luOiAwICFpbXBvcnRhbnQ7XG5cdHBhZGRpbmc6IDAgIWltcG9ydGFudDtcbn1cblxuOjpuZy1kZWVwIC5tYXQtZXhwYW5zaW9uLXBhbmVsIHtcblx0Ym94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xuXHRib3JkZXI6IDFweCBzb2xpZCAjZGFkY2UwO1xufVxuXG46Om5nLWRlZXAgLm1hdC1leHBhbnNpb24tcGFuZWw6aG92ZXIge1xuXHQvLyBib3gtc2hhZG93OiAycHggM3B4IDE1cHggcmdiYSgwLDAsMCwwLjA2KSAhaW1wb3J0YW50O1xufVxuXG46Om5nLWRlZXAgLm1hdC1hY2NvcmRpb24ge1xuXHRib3gtc2hhZG93OiA1cHggNXB4IDFweCAwIHJnYmEoNDYsIDYxLCA3MywgMC4yKTtcbn1cblxuOjpuZy1kZWVwIC5tYXQtYWNjb3JkaW9uOmhvdmVyIHtcblx0Ym94LXNoYWRvdzogMnB4IDRweCA0cHggMCByZ2JhKDQ2LCA2MSwgNzMsIDAuMik7XG59IiwiLnBhZGRpbmctMjAge1xuICBwYWRkaW5nOiAyMHB4O1xufVxuXG4udHlwZS1iYWRnZSB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6ICNmZmZmZmZmZjtcbiAgcGFkZGluZzogMnB4IDRweDtcbiAgbWluLXdpZHRoOiAxNHB4O1xuICBib3JkZXItcmFkaXVzOiA0NiU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbn1cblxuLnJlZCB7XG4gIGJhY2tncm91bmQ6IHJlZDtcbn1cblxuLmdyZWVuIHtcbiAgYmFja2dyb3VuZDogZ3JlZW47XG59XG5cbi5ncmV5LWJhY2tncm91bmQge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMDQpO1xufVxuXG4ucGFkZGluZy12ZXJ0aWNhbC01IHtcbiAgcGFkZGluZzogNXB4IDA7XG59XG5cbjo6bmctZGVlcCAubWF0LWV4cGFuc2lvbi1wYW5lbC1ib2R5IHtcbiAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xufVxuXG46Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLXdyYXBwZXIge1xuICBtYXJnaW46IDAgIWltcG9ydGFudDtcbiAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xufVxuXG46Om5nLWRlZXAgLm1hdC1leHBhbnNpb24tcGFuZWwge1xuICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkYWRjZTA7XG59XG5cbjo6bmctZGVlcCAubWF0LWFjY29yZGlvbiB7XG4gIGJveC1zaGFkb3c6IDVweCA1cHggMXB4IDAgcmdiYSg0NiwgNjEsIDczLCAwLjIpO1xufVxuXG46Om5nLWRlZXAgLm1hdC1hY2NvcmRpb246aG92ZXIge1xuICBib3gtc2hhZG93OiAycHggNHB4IDRweCAwIHJnYmEoNDYsIDYxLCA3MywgMC4yKTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm2015/snack-bar.js");



let AppComponent = class AppComponent {
    constructor(_snackBar) {
        this._snackBar = _snackBar;
        this.selectedDate = '';
        this.datePickerValue = '';
        this.defaultScore = 'p';
        this.chats = [
            {
                timestamp: '2019-11-20T14:02:06.2823772Z',
                resultCode: 200,
                duration: 1651.0316,
                id: '|47ccb28-463f9dec2880da4e.f6036c7c_',
                question: 'what is SAN',
                answer: 'Sentinel is a KPMG software that identifies independence approval requirements and potential conflicts of interest in respect of all proposed engagements from KPMG member firms. After entering the basic engagement information in the Sentinel Request, the tool routes the proposed engagements through a global approval process culminating in a Sentinel Approval Number (SAN) per engagement. It is essential to get a SAN before committing the firm to do an engagement.',
                score: 98,
                performanceBucket: '1sec-3sec',
                iakpmgpoc: '7b36cb7b-29a2-4f5e-a810-929ab59d03d6',
                sentiment: 'Sentiment(polarity=0.0, subjectivity=0.0)',
            },
            {
                timestamp: '2019-11-20T14:02:48.0773021Z',
                resultCode: 200,
                duration: 461.7349,
                id: '|47ccb2c-463f9dec2880da4e.f6036c7f_',
                question: 'hi',
                answer: 'Hello.',
                score: 100,
                performanceBucket: '250ms-500ms',
                iakpmgpoc: '7b36cb7b-29a2-4f5e-a810-929ab59d03d6',
                sentiment: 'Sentiment(polarity=0.0, subjectivity=0.0)',
            },
            {
                timestamp: '2019-11-20T14:02:57.7860385Z',
                resultCode: 200,
                duration: 445.2158,
                id: '|47ccb2e-463f9dec2880da4e.f6036c80_',
                question: 'who are you',
                answer: 'I don\'t have a name.',
                score: 100,
                performanceBucket: '250ms-500ms',
                iakpmgpoc: '7b36cb7b-29a2-4f5e-a810-929ab59d03d6',
                sentiment: 'Sentiment(polarity=0.0, subjectivity=0.0)',
            },
            {
                timestamp: '2019-11-20T14:03:10.0718863Z',
                resultCode: 200,
                duration: 755.6881,
                id: '|47ccb30-463f9dec2880da4e.f6036c81_',
                question: 'can you tell me what is SAN',
                answer: 'I\'m digital. I don\'t have a physical location.',
                score: 47.86,
                performanceBucket: '500ms-1sec',
                iakpmgpoc: '7b36cb7b-29a2-4f5e-a810-929ab59d03d6',
                sentiment: 'Sentiment(polarity=0.0, subjectivity=0.0)',
            },
            {
                timestamp: '2019-11-20T14:08:21.5056852Z',
                resultCode: 200,
                duration: 499.631,
                id: '|47ccb35-463f9dec2880da4e.f6036c84_',
                question: 'SAN',
                answer: 'Sentinel is a KPMG software that identifies independence approval requirements and potential conflicts of interest in respect of all proposed engagements from KPMG member firms. After entering the basic engagement information in the Sentinel Request, the tool routes the proposed engagements through a global approval process culminating in a Sentinel Approval Number (SAN) per engagement. It is essential to get a SAN before committing the firm to do an engagement.',
                score: 99,
                performanceBucket: '500ms-1sec',
                iakpmgpoc: '7b36cb7b-29a2-4f5e-a810-929ab59d03d6',
                sentiment: 'Sentiment(polarity=0.0, subjectivity=0.0)',
            },
            {
                timestamp: '2019-11-20T16:16:10.1850051Z',
                resultCode: 200,
                duration: 1788.5244,
                id: '|47ccb46-463f9dec2880da4e.f6036c8a_',
                question: 'What is san',
                answer: 'Sentinel is a KPMG software that identifies independence approval requirements and potential conflicts of interest in respect of all proposed engagements from KPMG member firms. After entering the basic engagement information in the Sentinel Request, the tool routes the proposed engagements through a global approval process culminating in a Sentinel Approval Number (SAN) per engagement. It is essential to get a SAN before committing the firm to do an engagement.',
                score: 98,
                performanceBucket: '1sec-3sec',
                iakpmgpoc: '7b36cb7b-29a2-4f5e-a810-929ab59d03d6',
                sentiment: 'Sentiment(polarity=0.0, subjectivity=0.0)',
            },
            {
                timestamp: '2019-11-29T06:16:54.8123938Z',
                resultCode: 200,
                duration: 1895.4254,
                id: '|47cd089-463f9dec2880da4e.178cd4b7_',
                question: 'san',
                answer: 'Sentinel is a KPMG software that identifies independence approval requirements and potential conflicts of interest in respect of all proposed engagements from KPMG member firms. After entering the basic engagement information in the Sentinel Request, the tool routes the proposed engagements through a global approval process culminating in a Sentinel Approval Number (SAN) per engagement. It is essential to get a SAN before committing the firm to do an engagement.',
                score: 99,
                performanceBucket: '1sec-3sec',
                iakpmgpoc: '7b36cb7b-29a2-4f5e-a810-929ab59d03d6',
                sentiment: 'Sentiment(polarity=0.0, subjectivity=0.0)',
            },
            {
                timestamp: '2019-11-21T10:31:36.9453091Z',
                resultCode: 200,
                duration: 7542.4713,
                id: '|47ccbc3-463f9dec2880da4e.f6036cb9_',
                question: 'What is Sab',
                answer: 'Just standing by, ready to help.',
                score: 6.2,
                performanceBucket: '7sec-15sec',
                iakpmgpoc: '7b36cb7b-29a2-4f5e-a810-929ab59d03d6',
                sentiment: 'Sentiment(polarity=0.0, subjectivity=0.0)',
            },
            {
                timestamp: '2019-11-19T05:48:05.4667126Z',
                resultCode: 200,
                duration: 1720.8872,
                id: '|dcac18e2-45a51353db475458.2e73e5b7_',
                question: 'what is your service',
                answer: 'This is what I do every day.',
                score: 44.72,
                performanceBucket: '1sec-3sec',
                iakpmgpoc: 'be0b00cc-71b0-496e-ba56-02447dbae754',
                sentiment: 'Sentiment(polarity=0.0, subjectivity=0.0)',
            },
            {
                timestamp: '2019-11-19T05:48:28.8747537Z',
                resultCode: 200,
                duration: 548.7663,
                id: '|dcac18e4-45a51353db475458.2e73e5b8_',
                question: 'like',
                answer: 'I do likeÂ you.',
                score: 54.33,
                performanceBucket: '500ms-1sec',
                iakpmgpoc: 'be0b00cc-71b0-496e-ba56-02447dbae754',
                sentiment: 'Sentiment(polarity=0.0, subjectivity=0.0)',
            },
            {
                timestamp: '2019-11-19T05:48:53.745088Z',
                resultCode: 200,
                duration: 484.2504,
                id: '|dcac18e6-45a51353db475458.2e73e5b9_',
                question: 'where are your logs',
                answer: 'Goodbye.',
                score: 31.55,
                performanceBucket: '250ms-500ms',
                iakpmgpoc: 'be0b00cc-71b0-496e-ba56-02447dbae754',
                sentiment: 'Sentiment(polarity=0.0, subjectivity=0.0)',
            },
            {
                timestamp: '2019-11-19T06:04:14.1444674Z',
                resultCode: 200,
                duration: 328.4221,
                id: '|dcac18f7-45a51353db475458.2e73e5c6_',
                question: 'hi',
                answer: 'Hello.',
                score: 100,
                performanceBucket: '250ms-500ms',
                iakpmgpoc: 'be0b00cc-71b0-496e-ba56-02447dbae754',
                sentiment: 'Sentiment(polarity=0.0, subjectivity=0.0)',
            },
            {
                timestamp: '2019-11-19T06:04:18.1988564Z',
                resultCode: 200,
                duration: 914.4719,
                id: '|dcac18f9-45a51353db475458.2e73e5c7_',
                question: 'what is time',
                answer: 'Very well.',
                score: 36.51,
                performanceBucket: '500ms-1sec',
                iakpmgpoc: 'be0b00cc-71b0-496e-ba56-02447dbae754',
                sentiment: 'Sentiment(polarity=0.0, subjectivity=0.0)',
            },
            {
                timestamp: '2019-11-19T06:04:27.2045181Z',
                resultCode: 200,
                duration: 573.6827,
                id: '|dcac18fb-45a51353db475458.2e73e5c8_',
                question: 'any updates',
                answer: 'I\'m not really that funny.',
                score: 22.12,
                performanceBucket: '500ms-1sec',
                iakpmgpoc: 'be0b00cc-71b0-496e-ba56-02447dbae754',
                sentiment: 'Sentiment(polarity=0.0, subjectivity=0.0)',
            },
            {
                timestamp: '2019-11-19T06:04:44.2249244Z',
                resultCode: 200,
                duration: 572.4896,
                id: '|dcac18fd-45a51353db475458.2e73e5c9_',
                question: 'any new update',
                answer: 'I don\'t have any jokes lined up.',
                score: 23.98,
                performanceBucket: '500ms-1sec',
                iakpmgpoc: 'be0b00cc-71b0-496e-ba56-02447dbae754',
                sentiment: 'Sentiment(polarity=0.13636363636363635, subjectivity=0.45454545454545453)',
            },
            {
                timestamp: '2019-11-19T06:04:57.0488058Z',
                resultCode: 200,
                duration: 653.9538,
                id: '|dcac18ff-45a51353db475458.2e73e5ca_',
                question: 'what is QnA',
                answer: 'SNPs are â€œsingle nucleotide polymorphismsâ€.  These are typically benign changes in DNA that can also be used to screen for embryo aneuploidy.  While PGT-A by NGS provides superior resolution compared to SNPs alone, SNPs provide helpful information (i.e. female triploidy assessment) when combined with NGS.',
                score: 43.2,
                performanceBucket: '500ms-1sec',
                iakpmgpoc: 'be0b00cc-71b0-496e-ba56-02447dbae754',
                sentiment: 'Sentiment(polarity=0.0, subjectivity=0.0)',
            },
            {
                timestamp: '2019-11-19T06:05:52.8518767Z',
                resultCode: 200,
                duration: 340.7909,
                id: '|dcac1901-45a51353db475458.2e73e5cb_',
                question: 'hi',
                answer: 'Hello.',
                score: 100,
                performanceBucket: '250ms-500ms',
                iakpmgpoc: 'be0b00cc-71b0-496e-ba56-02447dbae754',
                sentiment: 'Sentiment(polarity=0.0, subjectivity=0.0)',
            },
            {
                timestamp: '2019-11-19T06:05:58.4351126Z',
                resultCode: 200,
                duration: 170.4769,
                id: '|dcac1903-45a51353db475458.2e73e5cc_',
                question: 'hello',
                answer: 'Hello.',
                score: 100,
                performanceBucket: '<250ms',
                iakpmgpoc: 'be0b00cc-71b0-496e-ba56-02447dbae754',
                sentiment: 'Sentiment(polarity=0.0, subjectivity=0.0)',
            },
            {
                timestamp: '2019-11-19T06:06:06.4550514Z',
                resultCode: 200,
                duration: 313.9725,
                id: '|dcac1905-45a51353db475458.2e73e5cd_',
                question: 'good morning',
                answer: 'Good morning.',
                score: 100,
                performanceBucket: '250ms-500ms',
                iakpmgpoc: 'be0b00cc-71b0-496e-ba56-02447dbae754',
                sentiment: 'Sentiment(polarity=0.7, subjectivity=0.6000000000000001)',
            },
            {
                timestamp: '2019-11-19T06:06:14.2631739Z',
                resultCode: 200,
                duration: 110.2222,
                id: '|dcac1907-45a51353db475458.2e73e5ce_',
                question: 'location',
                answer: 'I\'m digital. I don\'t have a physical location.',
                score: 49.64,
                performanceBucket: '<250ms',
                iakpmgpoc: 'be0b00cc-71b0-496e-ba56-02447dbae754',
                sentiment: 'Sentiment(polarity=0.0, subjectivity=0.0)',
            },
            {
                timestamp: '2019-11-19T06:06:23.9835181Z',
                resultCode: 200,
                duration: 413.024,
                id: '|dcac1909-45a51353db475458.2e73e5cf_',
                question: 'what is KPMG',
                answer: 'This is what I do every day.',
                score: 6.77,
                performanceBucket: '250ms-500ms',
                iakpmgpoc: 'be0b00cc-71b0-496e-ba56-02447dbae754',
                sentiment: 'Sentiment(polarity=0.0, subjectivity=0.0)',
            },
            {
                timestamp: '2019-11-19T06:06:39.5448708Z',
                resultCode: 200,
                duration: 474.0359,
                id: '|dcac190b-45a51353db475458.2e73e5d0_',
                question: 'give random answer',
                answer: 'Sorry about that.',
                score: 47.79,
                performanceBucket: '250ms-500ms',
                iakpmgpoc: 'be0b00cc-71b0-496e-ba56-02447dbae754',
                sentiment: 'Sentiment(polarity=-0.5, subjectivity=0.5)',
            },
            {
                timestamp: '2019-11-19T08:31:29.1199992Z',
                resultCode: 200,
                duration: 2876.3253,
                id: '|32afzsaZAos=.36eeb7a_5.4ce3e6eb_',
                question: 'Hi',
                answer: 'Hello.',
                score: 100,
                performanceBucket: '1sec-3sec',
                iakpmgpoc: 'be0b00cc-71b0-496e-ba56-02447dbae754',
                sentiment: 'Sentiment(polarity=0.0, subjectivity=0.0)',
            },
            {
                timestamp: '2019-11-19T08:32:10.5799485Z',
                resultCode: 200,
                duration: 457.7305,
                id: '|36eeb7c-45e9465dc6b1d5e1.4ce3e6ec_',
                question: 'Weahter?',
                answer: 'Thank you, and the same to you.',
                score: 49.53,
                performanceBucket: '250ms-500ms',
                iakpmgpoc: 'be0b00cc-71b0-496e-ba56-02447dbae754',
                sentiment: 'Sentiment(polarity=0.0, subjectivity=0.0)',
            },
            {
                timestamp: '2019-11-19T10:21:44.0944057Z',
                resultCode: 200,
                duration: 668.0699,
                id: '|47cc954-463f9dec2880da4e.f6036b86_',
                question: 'What is Time now?',
                answer: 'Very well.',
                score: 41.62,
                performanceBucket: '500ms-1sec',
                iakpmgpoc: 'be0b00cc-71b0-496e-ba56-02447dbae754',
                sentiment: 'Sentiment(polarity=0.0, subjectivity=0.0)',
            },
            {
                timestamp: '2019-11-19T10:22:19.1533547Z',
                resultCode: 200,
                duration: 612.5062,
                id: '|47cc956-463f9dec2880da4e.f6036b87_',
                question: 'What can you do?',
                answer: 'I\'m here to answer your questions and help out.',
                score: 100,
                performanceBucket: '500ms-1sec',
                iakpmgpoc: 'be0b00cc-71b0-496e-ba56-02447dbae754',
                sentiment: 'Sentiment(polarity=0.0, subjectivity=0.0)',
            },
            {
                timestamp: '2019-11-19T10:22:57.4800496Z',
                resultCode: 200,
                duration: 608.5116,
                id: '|47cc958-463f9dec2880da4e.f6036b88_',
                question: 'Show me some sample questions',
                answer: 'Sorry, I can\'t do that.',
                score: 28.12,
                performanceBucket: '500ms-1sec',
                iakpmgpoc: 'be0b00cc-71b0-496e-ba56-02447dbae754',
                sentiment: 'Sentiment(polarity=0.0, subjectivity=0.0)',
            },
            {
                timestamp: '2019-11-19T10:23:12.8462521Z',
                resultCode: 200,
                duration: 730.2917,
                id: '|47cc95a-463f9dec2880da4e.f6036b89_',
                question: 'what questions you can answer',
                answer: 'Sorry about that.',
                score: 38.77,
                performanceBucket: '500ms-1sec',
                iakpmgpoc: 'be0b00cc-71b0-496e-ba56-02447dbae754',
                sentiment: 'Sentiment(polarity=0.0, subjectivity=0.0)',
            },
            {
                timestamp: '2019-11-19T08:35:34.9527527Z',
                resultCode: 200,
                duration: 568.588,
                id: '|36eeb7e-45e9465dc6b1d5e1.4ce3e6ed_',
                question: 'Your name?',
                answer: 'I don\'t have a name.',
                score: 59.98,
                performanceBucket: '500ms-1sec',
                iakpmgpoc: 'be0b00cc-71b0-496e-ba56-02447dbae754',
                sentiment: 'Sentiment(polarity=0.0, subjectivity=0.0)',
            },
            {
                timestamp: '2019-11-19T09:10:05.9557292Z',
                resultCode: 200,
                duration: 348.2014,
                id: '|7e390059-472bdc18e0ad0e96.df836099_',
                question: 'what isyour test data?',
                answer: 'We offer preimplantation genetic testing for aneuploidy (PGT-A) and preimplantation genetic testing for structural rearrangements (PGT-SR).  We also offer endometrial receptivity testing',
                score: 51.49,
                performanceBucket: '250ms-500ms',
                iakpmgpoc: 'be0b00cc-71b0-496e-ba56-02447dbae754',
                sentiment: 'Sentiment(polarity=0.0, subjectivity=0.0)',
            },
            {
                timestamp: '2019-11-19T10:03:03.812555Z',
                resultCode: 200,
                duration: 3115.0048,
                id: '|kfV+zaa30ts=.67189411_5.a7fff897_',
                question: 'hi',
                answer: 'Hello.',
                score: 100,
                performanceBucket: '3sec-7sec',
                iakpmgpoc: 'be0b00cc-71b0-496e-ba56-02447dbae754',
                sentiment: 'Sentiment(polarity=0.0, subjectivity=0.0)',
            },
            {
                timestamp: '2019-11-19T10:15:36.387757Z',
                resultCode: 200,
                duration: 4200.1675,
                id: '|VvNKWf6d3wk=.47cc940_5.f6036b7d_',
                question: 'hi',
                answer: 'Hello.',
                score: 100,
                performanceBucket: '3sec-7sec',
                iakpmgpoc: 'be0b00cc-71b0-496e-ba56-02447dbae754',
                sentiment: 'Sentiment(polarity=0.0, subjectivity=0.0)',
            },
            {
                timestamp: '2019-11-19T10:15:36.387757Z',
                resultCode: 200,
                duration: 4218.5025,
                id: '|47cc942-463f9dec2880da4e.f6036b7c_',
                question: 'hello',
                answer: 'Hello.',
                score: 100,
                performanceBucket: '3sec-7sec',
                iakpmgpoc: 'be0b00cc-71b0-496e-ba56-02447dbae754',
                sentiment: 'Sentiment(polarity=0.0, subjectivity=0.0)',
            },
            {
                timestamp: '2019-11-19T10:16:22.1872826Z',
                resultCode: 200,
                duration: 1302.4543,
                id: '|47cc944-463f9dec2880da4e.f6036b7e_',
                question: 'what is pgtai?',
                answer: 'PGTai is our custom developed analytic platform for PGT-A.  This platform was developed using PGT-A data from embryos resulting in either live birth or successful ongoing pregnancy.  PGTai provides PGT-A data analysis using the power of statistics and artificial intelligence, rather than subjective human interpretation of image-based results',
                score: 100,
                performanceBucket: '1sec-3sec',
                iakpmgpoc: 'be0b00cc-71b0-496e-ba56-02447dbae754',
                sentiment: 'Sentiment(polarity=0.0, subjectivity=0.0)',
            },
            {
                timestamp: '2019-11-19T10:19:32.0242963Z',
                resultCode: 200,
                duration: 538.1995,
                id: '|47cc946-463f9dec2880da4e.f6036b7f_',
                question: 'Hi',
                answer: 'Hello.',
                score: 100,
                performanceBucket: '500ms-1sec',
                iakpmgpoc: 'be0b00cc-71b0-496e-ba56-02447dbae754',
                sentiment: 'Sentiment(polarity=0.0, subjectivity=0.0)',
            },
            {
                timestamp: '2019-11-19T10:19:52.4802602Z',
                resultCode: 200,
                duration: 368.971,
                id: '|47cc948-463f9dec2880da4e.f6036b80_',
                question: 'Hi',
                answer: 'Hello.',
                score: 100,
                performanceBucket: '250ms-500ms',
                iakpmgpoc: 'be0b00cc-71b0-496e-ba56-02447dbae754',
                sentiment: 'Sentiment(polarity=0.0, subjectivity=0.0)',
            },
            {
                timestamp: '2019-11-19T10:19:58.3927712Z',
                resultCode: 200,
                duration: 533.1419,
                id: '|47cc94a-463f9dec2880da4e.f6036b81_',
                question: 'How many paternity leaves I have?',
                answer: 'I\'m here if you need me.',
                score: 22.85,
                performanceBucket: '500ms-1sec',
                iakpmgpoc: 'be0b00cc-71b0-496e-ba56-02447dbae754',
                sentiment: 'Sentiment(polarity=0.5, subjectivity=0.5)',
            },
            {
                timestamp: '2019-11-19T10:20:26.4161066Z',
                resultCode: 200,
                duration: 695.7582,
                id: '|47cc94c-463f9dec2880da4e.f6036b82_',
                question: 'What questions I can ask?',
                answer: 'I\'m better at answering questions.',
                score: 36.84,
                performanceBucket: '500ms-1sec',
                iakpmgpoc: 'be0b00cc-71b0-496e-ba56-02447dbae754',
                sentiment: 'Sentiment(polarity=0.0, subjectivity=0.0)',
            },
            {
                timestamp: '2019-11-19T10:20:51.6551596Z',
                resultCode: 200,
                duration: 709.3013,
                id: '|47cc94e-463f9dec2880da4e.f6036b83_',
                question: 'How many paternity leaves I have?',
                answer: 'I\'m here if you need me.',
                score: 22.85,
                performanceBucket: '500ms-1sec',
                iakpmgpoc: 'be0b00cc-71b0-496e-ba56-02447dbae754',
                sentiment: 'Sentiment(polarity=0.5, subjectivity=0.5)',
            },
            {
                timestamp: '2019-11-19T10:20:58.6021907Z',
                resultCode: 200,
                duration: 369.3262,
                id: '|47cc950-463f9dec2880da4e.f6036b84_',
                question: 'Please help',
                answer: 'Very well.',
                score: 34.7,
                performanceBucket: '250ms-500ms',
                iakpmgpoc: 'be0b00cc-71b0-496e-ba56-02447dbae754',
                sentiment: 'Sentiment(polarity=0.0, subjectivity=0.0)',
            },
            {
                timestamp: '2019-11-19T10:21:23.8663307Z',
                resultCode: 200,
                duration: 571.1322,
                id: '|47cc952-463f9dec2880da4e.f6036b85_',
                question: 'Time?',
                answer: 'Good night.',
                score: 46.86,
                performanceBucket: '500ms-1sec',
                iakpmgpoc: 'be0b00cc-71b0-496e-ba56-02447dbae754',
                sentiment: 'Sentiment(polarity=0.0, subjectivity=0.0)',
            },
            {
                timestamp: '2019-11-19T10:23:31.7590881Z',
                resultCode: 200,
                duration: 584.911,
                id: '|47cc95c-463f9dec2880da4e.f6036b8a_',
                question: 'what questions you can answer ?',
                answer: 'Sorry about that.',
                score: 38.77,
                performanceBucket: '500ms-1sec',
                iakpmgpoc: 'be0b00cc-71b0-496e-ba56-02447dbae754',
                sentiment: 'Sentiment(polarity=0.0, subjectivity=0.0)',
            },
            {
                timestamp: '2019-11-19T10:47:46.1783276Z',
                resultCode: 200,
                duration: 1089.2674,
                id: '|47cc964-463f9dec2880da4e.f6036b8f_',
                question: 'hello',
                answer: 'Hello.',
                score: 100,
                performanceBucket: '1sec-3sec',
                iakpmgpoc: 'be0b00cc-71b0-496e-ba56-02447dbae754',
                sentiment: 'Sentiment(polarity=0.0, subjectivity=0.0)',
            },
            {
                timestamp: '2019-11-19T10:47:57.7804108Z',
                resultCode: 200,
                duration: 653.6703,
                id: '|47cc966-463f9dec2880da4e.f6036b90_',
                question: 'what is pgtai?',
                answer: 'PGTai is our custom developed analytic platform for PGT-A.  This platform was developed using PGT-A data from embryos resulting in either live birth or successful ongoing pregnancy.  PGTai provides PGT-A data analysis using the power of statistics and artificial intelligence, rather than subjective human interpretation of image-based results',
                score: 100,
                performanceBucket: '500ms-1sec',
                iakpmgpoc: 'be0b00cc-71b0-496e-ba56-02447dbae754',
                sentiment: 'Sentiment(polarity=0.0, subjectivity=0.0)',
            },
            {
                timestamp: '2019-11-19T10:50:02.9604177Z',
                resultCode: 200,
                duration: 1175.4914,
                id: '|47cc96c-463f9dec2880da4e.f6036b95_',
                question: 'how many days I can take for maternity leaves?',
                answer: 'there are 3 months of maternity paid leaves',
                score: 100,
                performanceBucket: '1sec-3sec',
                iakpmgpoc: '7b36cb7b-29a2-4f5e-a810-929ab59d03d6',
                sentiment: 'Sentiment(polarity=0.5, subjectivity=0.5)',
            },
            {
                timestamp: '2019-11-19T10:56:25.1176355Z',
                resultCode: 200,
                duration: 550.0231,
                id: '|47cc96f-463f9dec2880da4e.f6036b96_',
                question: 'Hi',
                answer: 'Hello.',
                score: 100,
                performanceBucket: '500ms-1sec',
                iakpmgpoc: 'be0b00cc-71b0-496e-ba56-02447dbae754',
                sentiment: 'Sentiment(polarity=0.0, subjectivity=0.0)',
            },
            {
                timestamp: '2019-11-19T10:56:51.5541495Z',
                resultCode: 200,
                duration: 507.9304,
                id: '|47cc971-463f9dec2880da4e.f6036b97_',
                question: 'Weather??',
                answer: 'Ok.',
                score: 8.14,
                performanceBucket: '500ms-1sec',
                iakpmgpoc: 'be0b00cc-71b0-496e-ba56-02447dbae754',
                sentiment: 'Sentiment(polarity=0.0, subjectivity=0.0)',
            },
            {
                timestamp: '2019-11-19T10:59:08.2939876Z',
                resultCode: 200,
                duration: 397.4381,
                id: '|47cc973-463f9dec2880da4e.f6036b98_',
                question: 'Hi',
                answer: 'Hello.',
                score: 100,
                performanceBucket: '250ms-500ms',
                iakpmgpoc: 'be0b00cc-71b0-496e-ba56-02447dbae754',
                sentiment: 'Sentiment(polarity=0.0, subjectivity=0.0)',
            },
            {
                timestamp: '2019-11-19T11:00:32.3827677Z',
                resultCode: 200,
                duration: 863.551,
                id: '|47cc978-463f9dec2880da4e.f6036b9a_',
                question: 'how many days I can take for maternity leaves?',
                answer: 'there are 3 months of maternity paid leaves',
                score: 100,
                performanceBucket: '500ms-1sec',
                iakpmgpoc: '7b36cb7b-29a2-4f5e-a810-929ab59d03d6',
                sentiment: 'Sentiment(polarity=0.5, subjectivity=0.5)',
            },
            {
                timestamp: '2019-11-19T11:00:32.3349421Z',
                resultCode: 200,
                duration: 1292.273,
                id: '|47cc975-463f9dec2880da4e.f6036b99_',
                question: 'ow many days I can take for maternity leaves?',
                answer: 'there are 3 months of maternity paid leaves',
                score: 95,
                performanceBucket: '1sec-3sec',
                iakpmgpoc: '7b36cb7b-29a2-4f5e-a810-929ab59d03d6',
                sentiment: 'Sentiment(polarity=0.5, subjectivity=0.5)',
            },
            {
                timestamp: '2019-11-19T11:00:32.3827677Z',
                resultCode: 200,
                duration: 1575.378,
                id: '|47cc979-463f9dec2880da4e.f6036b9b_',
                question: 'if nothing then?',
                answer: 'Okay, but I\'m still here if you need me.',
                score: 28.12,
                performanceBucket: '1sec-3sec',
                iakpmgpoc: '7b36cb7b-29a2-4f5e-a810-929ab59d03d6',
                sentiment: 'Sentiment(polarity=0.0, subjectivity=0.0)',
            },
            {
                timestamp: '2019-11-19T11:00:35.6051563Z',
                resultCode: 200,
                duration: 445.582,
                id: '|47cc97b-463f9dec2880da4e.f6036b9c_',
                question: 'how many days I can take for maternity leaves?',
                answer: 'there are 3 months of maternity paid leaves',
                score: 100,
                performanceBucket: '250ms-500ms',
                iakpmgpoc: '7b36cb7b-29a2-4f5e-a810-929ab59d03d6',
                sentiment: 'Sentiment(polarity=0.5, subjectivity=0.5)',
            },
            {
                timestamp: '2019-11-19T11:00:47.2771281Z',
                resultCode: 200,
                duration: 787.4711,
                id: '|47cc97d-463f9dec2880da4e.f6036b9d_',
                question: 'if no answer is found then?',
                answer: 'Okay, but I\'m still here if you need me.',
                score: 23.35,
                performanceBucket: '500ms-1sec',
                iakpmgpoc: '7b36cb7b-29a2-4f5e-a810-929ab59d03d6',
                sentiment: 'Sentiment(polarity=0.0, subjectivity=0.0)',
            },
            {
                timestamp: '2019-11-19T11:01:07.8878107Z',
                resultCode: 200,
                duration: 444.0267,
                id: '|47cc97f-463f9dec2880da4e.f6036b9e_',
                question: 'Hi',
                answer: 'Hello.',
                score: 100,
                performanceBucket: '250ms-500ms',
                iakpmgpoc: 'be0b00cc-71b0-496e-ba56-02447dbae754',
                sentiment: 'Sentiment(polarity=0.0, subjectivity=0.0)',
            },
            {
                timestamp: '2019-11-19T11:04:39.0082706Z',
                resultCode: 200,
                duration: 761.3412,
                id: '|47cc981-463f9dec2880da4e.f6036b9f_',
                question: 'What are your hours today?',
                answer: 'Good, thanks.',
                score: 43,
                performanceBucket: '500ms-1sec',
                iakpmgpoc: 'be0b00cc-71b0-496e-ba56-02447dbae754',
                sentiment: 'Sentiment(polarity=0.0, subjectivity=0.0)',
            },
            {
                timestamp: '2019-11-19T12:01:21.9985003Z',
                resultCode: 200,
                duration: 635.6804,
                id: '|47cc98e-463f9dec2880da4e.f6036ba7_',
                question: 'intent',
                answer: 'Not at all.',
                score: 8.94,
                performanceBucket: '500ms-1sec',
                iakpmgpoc: '7b36cb7b-29a2-4f5e-a810-929ab59d03d6',
                sentiment: 'Sentiment(polarity=0.0, subjectivity=0.0)',
            },
            {
                timestamp: '2019-11-19T12:02:09.8496298Z',
                resultCode: 200,
                duration: 539.4677,
                id: '|47cc990-463f9dec2880da4e.f6036ba8_',
                question: 'i line in london',
                answer: 'It\'s nice to have things you love.',
                score: 37.61,
                performanceBucket: '500ms-1sec',
                iakpmgpoc: '7b36cb7b-29a2-4f5e-a810-929ab59d03d6',
                sentiment: 'Sentiment(polarity=0.0, subjectivity=0.0)',
            },
            {
                timestamp: '2019-11-19T12:02:23.5533082Z',
                resultCode: 200,
                duration: 414.7634,
                id: '|47cc992-463f9dec2880da4e.f6036ba9_',
                question: 'i live in lindon',
                answer: 'I don\'t know you personally.',
                score: 21.88,
                performanceBucket: '250ms-500ms',
                iakpmgpoc: '7b36cb7b-29a2-4f5e-a810-929ab59d03d6',
                sentiment: 'Sentiment(polarity=0.13636363636363635, subjectivity=0.5)',
            },
            {
                timestamp: '2019-11-19T14:11:22.5345359Z',
                resultCode: 200,
                duration: 781.8403,
                id: '|47cc9cd-463f9dec2880da4e.f6036bce_',
                question: 'how many holidays',
                answer: 'Thank you, and the same to you.',
                score: 39.69,
                performanceBucket: '500ms-1sec',
                iakpmgpoc: 'be0b00cc-71b0-496e-ba56-02447dbae754',
                sentiment: 'Sentiment(polarity=0.5, subjectivity=0.5)',
            },
            {
                timestamp: '2019-11-19T14:11:34.0078343Z',
                resultCode: 200,
                duration: 593.567,
                id: '|47cc9cf-463f9dec2880da4e.f6036bcf_',
                question: 'maternity leaves',
                answer: 'Goodbye.',
                score: 26.61,
                performanceBucket: '500ms-1sec',
                iakpmgpoc: 'be0b00cc-71b0-496e-ba56-02447dbae754',
                sentiment: 'Sentiment(polarity=0.0, subjectivity=0.0)',
            },
            {
                timestamp: '2019-12-03T05:42:33.9334456Z',
                resultCode: 200,
                duration: 4807.2528,
                id: '|47cd325-463f9dec2880da4e.178cd5cc_',
                question: 'Who is the target audience for the QnA Maker tool?',
                answer: 'People created me.',
                score: 24.68,
                performanceBucket: '3sec-7sec',
                iakpmgpoc: '7b36cb7b-29a2-4f5e-a810-929ab59d03d6',
                sentiment: 'Sentiment(polarity=0.0, subjectivity=0.0)',
            },
            {
                timestamp: '2019-12-03T05:46:10.3192322Z',
                resultCode: 200,
                duration: 948.5624,
                id: '|95d4515af0a94544b5456f67a58038b1.661ba30d4b808f4c.178cd5cd_',
                question: 'san',
                answer: 'Sentinel is a KPMG software that identifies independence approval requirements and potential conflicts of interest in respect of all proposed engagements from KPMG member firms. After entering the basic engagement information in the Sentinel Request, the tool routes the proposed engagements through a global approval process culminating in a Sentinel Approval Number (SAN) per engagement. It is essential to get a SAN before committing the firm to do an engagement.',
                score: 99,
                performanceBucket: '500ms-1sec',
                iakpmgpoc: '3a820325-203c-485c-b3d9-b4513f88d91d',
                sentiment: 'Sentiment(polarity=0.0, subjectivity=0.0)',
            },
            {
                timestamp: '2019-11-18T16:47:50.1739499Z',
                resultCode: 200,
                duration: 901.6927,
                id: '|dcac186b-45a51353db475458.2e73e57d_',
                question: 'Hi',
                answer: 'Hello.',
                score: 100,
                performanceBucket: '500ms-1sec',
                iakpmgpoc: 'be0b00cc-71b0-496e-ba56-02447dbae754',
                sentiment: 'Sentiment(polarity=0.0, subjectivity=0.0)',
            },
            {
                timestamp: '2019-11-18T16:47:57.240129Z',
                resultCode: 200,
                duration: 307.5704,
                id: '|dcac186d-45a51353db475458.2e73e57e_',
                question: 'Your name?',
                answer: 'I don\'t have a name.',
                score: 59.98,
                performanceBucket: '250ms-500ms',
                iakpmgpoc: 'be0b00cc-71b0-496e-ba56-02447dbae754',
                sentiment: 'Sentiment(polarity=0.0, subjectivity=0.0)',
            },
            {
                timestamp: '2019-11-19T02:45:33.065623Z',
                resultCode: 200,
                duration: 1028.1334,
                id: '|dcac18ba-45a51353db475458.2e73e5a2_',
                question: 'hi',
                answer: 'Hello.',
                score: 100,
                performanceBucket: '1sec-3sec',
                iakpmgpoc: 'be0b00cc-71b0-496e-ba56-02447dbae754',
                sentiment: 'Sentiment(polarity=0.0, subjectivity=0.0)',
            },
            {
                timestamp: '2019-11-19T02:45:41.1754173Z',
                resultCode: 200,
                duration: 1120.3653,
                id: '|dcac18bc-45a51353db475458.2e73e5a3_',
                question: 'what is your name',
                answer: 'I don\'t have a name.',
                score: 100,
                performanceBucket: '1sec-3sec',
                iakpmgpoc: 'be0b00cc-71b0-496e-ba56-02447dbae754',
                sentiment: 'Sentiment(polarity=0.0, subjectivity=0.0)',
            },
            {
                timestamp: '2019-11-19T02:45:49.1449047Z',
                resultCode: 200,
                duration: 1228.1857,
                id: '|dcac18be-45a51353db475458.2e73e5a4_',
                question: 'that is good',
                answer: 'I aim to serve.',
                score: 54.34,
                performanceBucket: '1sec-3sec',
                iakpmgpoc: 'be0b00cc-71b0-496e-ba56-02447dbae754',
                sentiment: 'Sentiment(polarity=0.7, subjectivity=0.6000000000000001)',
            },
            {
                timestamp: '2019-11-19T02:45:55.0511998Z',
                resultCode: 200,
                duration: 236.7533,
                id: '|dcac18c0-45a51353db475458.2e73e5a5_',
                question: 'leaves',
                answer: 'Goodbye.',
                score: 41.68,
                performanceBucket: '<250ms',
                iakpmgpoc: 'be0b00cc-71b0-496e-ba56-02447dbae754',
                sentiment: 'Sentiment(polarity=0.0, subjectivity=0.0)',
            },
            {
                timestamp: '2019-11-19T03:08:12.6169853Z',
                resultCode: 200,
                duration: 703.927,
                id: '|dcac18c4-45a51353db475458.2e73e5a7_',
                question: 'helloo',
                answer: 'Hello.',
                score: 99,
                performanceBucket: '500ms-1sec',
                iakpmgpoc: 'be0b00cc-71b0-496e-ba56-02447dbae754',
                sentiment: 'Sentiment(polarity=0.0, subjectivity=0.0)',
            },
            {
                timestamp: '2019-11-19T03:08:19.3513921Z',
                resultCode: 200,
                duration: 490.1661,
                id: '|dcac18c6-45a51353db475458.2e73e5a8_',
                question: 'How are you?',
                answer: 'Great, thanks.',
                score: 100,
                performanceBucket: '250ms-500ms',
                iakpmgpoc: 'be0b00cc-71b0-496e-ba56-02447dbae754',
                sentiment: 'Sentiment(polarity=0.0, subjectivity=0.0)',
            },
            {
                timestamp: '2019-11-19T03:08:25.3585487Z',
                resultCode: 200,
                duration: 427.0989,
                id: '|dcac18c8-45a51353db475458.2e73e5a9_',
                question: 'Are you a bot?',
                answer: 'I\'m digital. In other words, I\'m not human.',
                score: 100,
                performanceBucket: '250ms-500ms',
                iakpmgpoc: 'be0b00cc-71b0-496e-ba56-02447dbae754',
                sentiment: 'Sentiment(polarity=0.0, subjectivity=0.0)',
            },
            {
                timestamp: '2019-11-19T09:08:31.6333273Z',
                resultCode: 200,
                duration: 3344.0382,
                id: '|lmIcVoouFGw=.7e39004f_5.df836094_',
                question: 'what is my name?',
                answer: 'I don\'t know you personally.',
                score: 100,
                performanceBucket: '3sec-7sec',
                iakpmgpoc: 'be0b00cc-71b0-496e-ba56-02447dbae754',
                sentiment: 'Sentiment(polarity=0.0, subjectivity=0.0)',
            },
            {
                timestamp: '2019-11-19T09:08:54.7713278Z',
                resultCode: 200,
                duration: 535.2036,
                id: '|7e390051-472bdc18e0ad0e96.df836095_',
                question: 'bot name?',
                answer: 'Hello.',
                score: 40.5,
                performanceBucket: '500ms-1sec',
                iakpmgpoc: 'be0b00cc-71b0-496e-ba56-02447dbae754',
                sentiment: 'Sentiment(polarity=0.0, subjectivity=0.0)',
            },
            {
                timestamp: '2019-11-19T09:09:08.9047874Z',
                resultCode: 200,
                duration: 650.2926,
                id: '|7e390053-472bdc18e0ad0e96.df836096_',
                question: 'hello bot',
                answer: 'Hello.',
                score: 100,
                performanceBucket: '500ms-1sec',
                iakpmgpoc: 'be0b00cc-71b0-496e-ba56-02447dbae754',
                sentiment: 'Sentiment(polarity=0.0, subjectivity=0.0)',
            },
            {
                timestamp: '2019-11-19T09:09:26.4421321Z',
                resultCode: 200,
                duration: 601.028,
                id: '|7e390055-472bdc18e0ad0e96.df836097_',
                question: 'what you can do for me',
                answer: 'I\'m here to answer your questions and help out.',
                score: 44.86,
                performanceBucket: '500ms-1sec',
                iakpmgpoc: 'be0b00cc-71b0-496e-ba56-02447dbae754',
                sentiment: 'Sentiment(polarity=0.0, subjectivity=0.0)',
            },
            {
                timestamp: '2019-11-19T09:09:48.4615013Z',
                resultCode: 200,
                duration: 510.5095,
                id: '|7e390057-472bdc18e0ad0e96.df836098_',
                question: 'about what?',
                answer: 'I don\'t know.',
                score: 46.83,
                performanceBucket: '500ms-1sec',
                iakpmgpoc: 'be0b00cc-71b0-496e-ba56-02447dbae754',
                sentiment: 'Sentiment(polarity=0.0, subjectivity=0.0)',
            },
            {
                timestamp: '2019-11-21T14:11:49.6585375Z',
                resultCode: 200,
                duration: 2164.0173,
                id: '|47ccbe4-463f9dec2880da4e.f6036ccb_',
                question: 'can you tell me what is SAN?',
                answer: 'I\'m digital. I don\'t have a physical location.',
                score: 47.86,
                performanceBucket: '1sec-3sec',
                iakpmgpoc: '7b36cb7b-29a2-4f5e-a810-929ab59d03d6',
                sentiment: 'Sentiment(polarity=0.0, subjectivity=0.0)',
            },
            {
                timestamp: '2019-11-25T17:02:18.5759704Z',
                resultCode: 200,
                duration: 5389.2104,
                id: '|47cce5f-463f9dec2880da4e.f6036db4_',
                question: 'what is san?',
                answer: 'Sentinel is a KPMG software that identifies independence approval requirements and potential conflicts of interest in respect of all proposed engagements from KPMG member firms. After entering the basic engagement information in the Sentinel Request, the tool routes the proposed engagements through a global approval process culminating in a Sentinel Approval Number (SAN) per engagement. It is essential to get a SAN before committing the firm to do an engagement.',
                score: 98,
                performanceBucket: '3sec-7sec',
                iakpmgpoc: '7b36cb7b-29a2-4f5e-a810-929ab59d03d6',
                sentiment: 'Sentiment(polarity=0.0, subjectivity=0.0)',
            },
            {
                timestamp: '2019-11-25T17:03:31.2739518Z',
                resultCode: 200,
                duration: 1104.5565,
                id: '|47cce61-463f9dec2880da4e.f6036db5_',
                question: 'What is up',
                answer: 'Just standing by, ready to help.',
                score: 100,
                performanceBucket: '1sec-3sec',
                iakpmgpoc: '7b36cb7b-29a2-4f5e-a810-929ab59d03d6',
                sentiment: 'Sentiment(polarity=0.0, subjectivity=0.0)',
            },
            {
                timestamp: '2019-11-21T05:45:53.9011581Z',
                resultCode: 200,
                duration: 7104.5249,
                id: '|47ccba0-463f9dec2880da4e.f6036cab_',
                question: 'can you tell me what is SAN?',
                answer: 'I\'m digital. I don\'t have a physical location.',
                score: 47.86,
                performanceBucket: '7sec-15sec',
                iakpmgpoc: '7b36cb7b-29a2-4f5e-a810-929ab59d03d6',
                sentiment: 'Sentiment(polarity=0.0, subjectivity=0.0)',
            },
            {
                timestamp: '2019-11-28T11:55:05.1141415Z',
                resultCode: 200,
                duration: 4117.2444,
                id: '|47cd006-463f9dec2880da4e.178cd483_',
                question: 'what is san',
                answer: 'Sentinel is a KPMG software that identifies independence approval requirements and potential conflicts of interest in respect of all proposed engagements from KPMG member firms. After entering the basic engagement information in the Sentinel Request, the tool routes the proposed engagements through a global approval process culminating in a Sentinel Approval Number (SAN) per engagement. It is essential to get a SAN before committing the firm to do an engagement.',
                score: 98,
                performanceBucket: '3sec-7sec',
                iakpmgpoc: '7b36cb7b-29a2-4f5e-a810-929ab59d03d6',
                sentiment: 'Sentiment(polarity=0.0, subjectivity=0.0)',
            },
            {
                timestamp: '2019-11-28T11:55:23.6210599Z',
                resultCode: 200,
                duration: 852.0127,
                id: '|47cd009-463f9dec2880da4e.178cd484_',
                question: 'explain san to me',
                answer: 'Sentinel is a KPMG software that identifies independence approval requirements and potential conflicts of interest in respect of all proposed engagements from KPMG member firms. After entering the basic engagement information in the Sentinel Request, the tool routes the proposed engagements through a global approval process culminating in a Sentinel Approval Number (SAN) per engagement. It is essential to get a SAN before committing the firm to do an engagement.',
                score: 66.46,
                performanceBucket: '500ms-1sec',
                iakpmgpoc: '7b36cb7b-29a2-4f5e-a810-929ab59d03d6',
                sentiment: 'Sentiment(polarity=0.0, subjectivity=0.0)',
            },
            {
                timestamp: '2019-11-28T11:55:32.8490729Z',
                resultCode: 200,
                duration: 397.7518,
                id: '|47cd00c-463f9dec2880da4e.178cd485_',
                question: 'explain sant to me',
                answer: 'Sorry, I don\'t understand.',
                score: 36.14,
                performanceBucket: '250ms-500ms',
                iakpmgpoc: '7b36cb7b-29a2-4f5e-a810-929ab59d03d6',
                sentiment: 'Sentiment(polarity=0.0, subjectivity=0.0)',
            },
            {
                timestamp: '2019-11-21T17:03:59.5968891Z',
                resultCode: 200,
                duration: 1979.5447,
                id: '|47ccbf7-463f9dec2880da4e.f6036cd1_',
                question: 'validity',
                answer: 'A SAN is valid until the end of the engagement and up to a maximum of three years. However, the approvers (typically the Sentinel Lead Partner and/or Conflicts Resolver) can restrict the validity of a SAN for a limited period.  A SAN for recurring engagements for a SEC audit client and its affiliates is valid for only one year.  A member firm\'s local policies may require a new SAN more frequently than every three years in certain circumstances.',
                score: 95,
                performanceBucket: '1sec-3sec',
                iakpmgpoc: '7b36cb7b-29a2-4f5e-a810-929ab59d03d6',
                sentiment: 'Sentiment(polarity=0.0, subjectivity=0.0)',
            },
            {
                timestamp: '2019-11-23T12:44:07.0393481Z',
                resultCode: 200,
                duration: 2791.9581,
                id: '|47ccd12-463f9dec2880da4e.f6036d3b_',
                question: 'Hi',
                answer: 'Hello.',
                score: 100,
                performanceBucket: '1sec-3sec',
                iakpmgpoc: '7b36cb7b-29a2-4f5e-a810-929ab59d03d6',
                sentiment: 'Sentiment(polarity=0.0, subjectivity=0.0)',
            },
            {
                timestamp: '2019-11-23T12:44:27.5547088Z',
                resultCode: 200,
                duration: 561.6491,
                id: '|47ccd14-463f9dec2880da4e.f6036d3c_',
                question: 'Hallo',
                answer: 'That\'s not me, but hello.',
                score: 12.78,
                performanceBucket: '500ms-1sec',
                iakpmgpoc: '7b36cb7b-29a2-4f5e-a810-929ab59d03d6',
                sentiment: 'Sentiment(polarity=0.0, subjectivity=0.0)',
            },
            {
                timestamp: '2019-11-17T07:27:09.4112782Z',
                resultCode: 200,
                duration: 755.09,
                id: '|dcac1745-45a51353db475458.2e73e506_',
                question: '1.  Welche Tests bieten Sie an',
                answer: 'Wir bieten genetische Tests vor der Implantation auf Aneuploidie (PGT-A) und genetische Tests vor der Implantation auf strukturelle Umlagerungen (PGT-SR) an. Wir bieten auch endometriale EmpfÃ¤nglichkeitstests an',
                score: 95,
                performanceBucket: '500ms-1sec',
                iakpmgpoc: 'be0b00cc-71b0-496e-ba56-02447dbae754',
                sentiment: 'Sentiment(polarity=0.0, subjectivity=0.0)',
            },
            {
                timestamp: '2019-11-17T07:27:22.8269056Z',
                resultCode: 200,
                duration: 776.8736,
                id: '|dcac1747-45a51353db475458.2e73e507_',
                question: '1.  Welche Tests bieten Sie an',
                answer: 'Wir bieten genetische Tests vor der Implantation auf Aneuploidie (PGT-A) und genetische Tests vor der Implantation auf strukturelle Umlagerungen (PGT-SR) an. Wir bieten auch endometriale EmpfÃ¤nglichkeitstests an',
                score: 95,
                performanceBucket: '500ms-1sec',
                iakpmgpoc: 'be0b00cc-71b0-496e-ba56-02447dbae754',
                sentiment: 'Sentiment(polarity=0.0, subjectivity=0.0)',
            },
            {
                timestamp: '2019-11-17T14:55:54.7023561Z',
                resultCode: 200,
                duration: 942.7359,
                id: '|dcac1777-45a51353db475458.2e73e518_',
                question: 'hi',
                answer: 'Hello.',
                score: 100,
                performanceBucket: '500ms-1sec',
                iakpmgpoc: 'be0b00cc-71b0-496e-ba56-02447dbae754',
                sentiment: 'Sentiment(polarity=0.0, subjectivity=0.0)',
            },
            {
                timestamp: '2019-11-17T14:56:00.7179711Z',
                resultCode: 200,
                duration: 303.8376,
                id: '|dcac1779-45a51353db475458.2e73e519_',
                question: 'What is PGTai2.0',
                answer: 'PGTai2.0 is our most current PGT-A platform.  It uses data from both traditional NGS PGT-A along with sequencing of SNPs to provide enhanced PGT-A data, such as identification of female triploidy and double confirmation of aneuploidy',
                score: 100,
                performanceBucket: '250ms-500ms',
                iakpmgpoc: 'be0b00cc-71b0-496e-ba56-02447dbae754',
                sentiment: 'Sentiment(polarity=0.0, subjectivity=0.0)',
            },
            {
                timestamp: '2019-11-17T14:56:24.2675039Z',
                resultCode: 200,
                duration: 745.3725,
                id: '|dcac177b-45a51353db475458.2e73e51a_',
                question: 'can i know about PGTai2.0?',
                answer: 'PGTai2.0 is our most current PGT-A platform.  It uses data from both traditional NGS PGT-A along with sequencing of SNPs to provide enhanced PGT-A data, such as identification of female triploidy and double confirmation of aneuploidy',
                score: 77.3,
                performanceBucket: '500ms-1sec',
                iakpmgpoc: 'be0b00cc-71b0-496e-ba56-02447dbae754',
                sentiment: 'Sentiment(polarity=0.0, subjectivity=0.0)',
            },
            {
                timestamp: '2019-11-17T14:56:45.0250387Z',
                resultCode: 200,
                duration: 499.2379,
                id: '|dcac177d-45a51353db475458.2e73e51b_',
                question: 'Was fÃ¼gen SNPs zu PGT-A hinzu?',
                answer: 'SNPs sind "Einzelnukleotid-Polymorphismen". Dies sind typischerweise gutartige VerÃ¤nderungen in der DNA, die auch zum Screening auf Embryo-Aneuploidie verwendet werden kÃ¶nnen. WÃ¤hrend PGT-A von NGS im Vergleich zu SNPs allein eine Ã¼berlegene AuflÃ¶sung bietet, liefern SNPs in Kombination mit NGS hilfreiche Informationen (d. H. Weibliche Triploidie-Bewertung)',
                score: 100,
                performanceBucket: '250ms-500ms',
                iakpmgpoc: 'be0b00cc-71b0-496e-ba56-02447dbae754',
                sentiment: 'Sentiment(polarity=0.0, subjectivity=0.0)',
            },
            {
                timestamp: '2019-11-17T14:57:50.6750274Z',
                resultCode: 200,
                duration: 835.2137,
                id: '|dcac177f-45a51353db475458.2e73e51c_',
                question: 'hello',
                answer: 'Hello.',
                score: 100,
                performanceBucket: '500ms-1sec',
                iakpmgpoc: 'be0b00cc-71b0-496e-ba56-02447dbae754',
                sentiment: 'Sentiment(polarity=0.0, subjectivity=0.0)',
            },
            {
                timestamp: '2019-11-17T14:57:56.1669001Z',
                resultCode: 200,
                duration: 189.8011,
                id: '|dcac1781-45a51353db475458.2e73e51d_',
                question: 'hallo',
                answer: 'Hello.',
                score: 12.78,
                performanceBucket: '<250ms',
                iakpmgpoc: 'be0b00cc-71b0-496e-ba56-02447dbae754',
                sentiment: 'Sentiment(polarity=0.0, subjectivity=0.0)',
            },
            {
                timestamp: '2019-11-17T15:01:29.2105047Z',
                resultCode: 200,
                duration: 868.2546,
                id: '|dcac1784-45a51353db475458.2e73e51e_',
                question: 'how do you perform pgta testing',
                answer: 'We use a next generation sequencing (NGS) to perform PGT-A.  Our technology is custom developed and utilizes our PGTai analytic platform to provide highest accuracy results',
                score: 95,
                performanceBucket: '500ms-1sec',
                iakpmgpoc: 'be0b00cc-71b0-496e-ba56-02447dbae754',
                sentiment: 'Sentiment(polarity=0.0, subjectivity=0.0)',
            },
            {
                timestamp: '2019-11-17T15:01:56.6655692Z',
                resultCode: 200,
                duration: 1136.2396,
                id: '|dcac1786-45a51353db475458.2e73e51f_',
                question: 'how do you perform pgta testing',
                answer: 'We use a next generation sequencing (NGS) to perform PGT-A.  Our technology is custom developed and utilizes our PGTai analytic platform to provide highest accuracy results',
                score: 95,
                performanceBucket: '1sec-3sec',
                iakpmgpoc: 'be0b00cc-71b0-496e-ba56-02447dbae754',
                sentiment: 'Sentiment(polarity=0.0, subjectivity=0.0)',
            },
            {
                timestamp: '2019-11-17T15:03:16.5288301Z',
                resultCode: 200,
                duration: 1003.9248,
                id: '|dcac178c-45a51353db475458.2e73e523_',
                question: 'jallo',
                answer: 'Hallo.',
                score: 99,
                performanceBucket: '1sec-3sec',
                iakpmgpoc: '5f7025ff-4a0b-4ef7-9fc8-7c18efb76209',
                sentiment: 'Sentiment(polarity=0.0, subjectivity=0.0)',
            },
            {
                timestamp: '2019-11-17T15:03:40.2902101Z',
                resultCode: 200,
                duration: 1142.2125,
                id: '|dcac1790-45a51353db475458.2e73e525_',
                question: 'Bitte frage mich etwas',
                answer: 'Ich bin besser darin Fragen zu beantworten.',
                score: 100,
                performanceBucket: '1sec-3sec',
                iakpmgpoc: '5f7025ff-4a0b-4ef7-9fc8-7c18efb76209',
                sentiment: 'Sentiment(polarity=0.0, subjectivity=0.0)',
            },
            {
                timestamp: '2019-11-19T13:57:49.8954939Z',
                resultCode: 200,
                duration: 1218.5415,
                id: '|47cc9b1-463f9dec2880da4e.f6036bba_',
                question: 'how many holidays',
                answer: 'Thank you, and the same to you.',
                score: 39.69,
                performanceBucket: '1sec-3sec',
                iakpmgpoc: 'be0b00cc-71b0-496e-ba56-02447dbae754',
                sentiment: 'Sentiment(polarity=0.5, subjectivity=0.5)',
            },
            {
                timestamp: '2019-11-19T13:58:02.4053533Z',
                resultCode: 200,
                duration: 1357.8265,
                id: '|47cc9b3-463f9dec2880da4e.f6036bbb_',
                question: 'how many holidays i can take',
                answer: 'I don\'t have a name.',
                score: 22.8,
                performanceBucket: '1sec-3sec',
                iakpmgpoc: 'be0b00cc-71b0-496e-ba56-02447dbae754',
                sentiment: 'Sentiment(polarity=0.5, subjectivity=0.5)',
            },
            {
                timestamp: '2019-11-19T13:59:09.5196487Z',
                resultCode: 200,
                duration: 786.6049,
                id: '|47cc9b5-463f9dec2880da4e.f6036bbc_',
                question: 'how many holidays in month',
                answer: 'Thank you, and the same to you.',
                score: 31.35,
                performanceBucket: '500ms-1sec',
                iakpmgpoc: 'be0b00cc-71b0-496e-ba56-02447dbae754',
                sentiment: 'Sentiment(polarity=0.5, subjectivity=0.5)',
            },
            {
                timestamp: '2019-11-19T14:01:47.6302805Z',
                resultCode: 200,
                duration: 6577.7732,
                id: '|47cc9bd-463f9dec2880da4e.f6036bc1_',
                question: 'how many holidays i can take',
                answer: 'there are 2   mandatory holiday and 1 restricted holiday',
                score: 68.8,
                performanceBucket: '3sec-7sec',
                iakpmgpoc: 'e32fe247-6e2e-4936-88d1-d8421a077253',
                sentiment: 'Sentiment(polarity=0.5, subjectivity=0.5)',
            },
            {
                timestamp: '2019-11-19T14:04:09.231307Z',
                resultCode: 200,
                duration: 673.6928,
                id: '|47cc9c3-463f9dec2880da4e.f6036bc6_',
                question: 'how many holidays i can take',
                answer: 'I don\'t have a name.',
                score: 22.8,
                performanceBucket: '500ms-1sec',
                iakpmgpoc: 'be0b00cc-71b0-496e-ba56-02447dbae754',
                sentiment: 'Sentiment(polarity=0.5, subjectivity=0.5)',
            },
            {
                timestamp: '2019-11-19T14:15:12.5798947Z',
                resultCode: 200,
                duration: 568.9377,
                id: '|47cc9d1-463f9dec2880da4e.f6036bd0_',
                question: 'Hi',
                answer: 'Hello.',
                score: 100,
                performanceBucket: '500ms-1sec',
                iakpmgpoc: 'be0b00cc-71b0-496e-ba56-02447dbae754',
                sentiment: 'Sentiment(polarity=0.0, subjectivity=0.0)',
            },
            {
                timestamp: '2019-11-19T14:15:20.9210681Z',
                resultCode: 200,
                duration: 458.3316,
                id: '|47cc9d3-463f9dec2880da4e.f6036bd1_',
                question: 'how many holidays i can take',
                answer: 'I don\'t have a name.',
                score: 22.8,
                performanceBucket: '250ms-500ms',
                iakpmgpoc: 'be0b00cc-71b0-496e-ba56-02447dbae754',
                sentiment: 'Sentiment(polarity=0.5, subjectivity=0.5)',
            },
            {
                timestamp: '2019-11-19T16:09:56.6100857Z',
                resultCode: 200,
                duration: 4388.5931,
                id: '|47cca04-463f9dec2880da4e.f6036bef_',
                question: 'how many leaves i can have',
                answer: 'there are 3 months of maternity paid leaves',
                score: 84.32,
                performanceBucket: '3sec-7sec',
                iakpmgpoc: '7b36cb7b-29a2-4f5e-a810-929ab59d03d6',
                sentiment: 'Sentiment(polarity=0.5, subjectivity=0.5)',
            },
            {
                timestamp: '2019-11-19T16:16:50.3489937Z',
                resultCode: 200,
                duration: 3344.3953,
                id: '|47cca08-463f9dec2880da4e.f6036bf2_',
                question: 'hi',
                answer: 'Hello.',
                score: 100,
                performanceBucket: '3sec-7sec',
                iakpmgpoc: 'be0b00cc-71b0-496e-ba56-02447dbae754',
                sentiment: 'Sentiment(polarity=0.0, subjectivity=0.0)',
            },
            {
                timestamp: '2019-11-19T16:49:24.5355193Z',
                resultCode: 200,
                duration: 1248.9092,
                id: '|47cca0d-463f9dec2880da4e.f6036bf4_',
                question: 'Weather',
                answer: 'Ok.',
                score: 8.14,
                performanceBucket: '1sec-3sec',
                iakpmgpoc: 'be0b00cc-71b0-496e-ba56-02447dbae754',
                sentiment: 'Sentiment(polarity=0.0, subjectivity=0.0)',
            },
            {
                timestamp: '2019-11-19T16:49:50.2812681Z',
                resultCode: 200,
                duration: 725.6019,
                id: '|47cca0f-463f9dec2880da4e.f6036bf5_',
                question: 'Hi',
                answer: 'Hello.',
                score: 100,
                performanceBucket: '500ms-1sec',
                iakpmgpoc: 'be0b00cc-71b0-496e-ba56-02447dbae754',
                sentiment: 'Sentiment(polarity=0.0, subjectivity=0.0)',
            },
            {
                timestamp: '2019-11-19T16:50:04.3322693Z',
                resultCode: 200,
                duration: 1114.8929,
                id: '|47cca11-463f9dec2880da4e.f6036bf6_',
                question: 'What you have',
                answer: 'This is what I do every day.',
                score: 50.62,
                performanceBucket: '1sec-3sec',
                iakpmgpoc: 'be0b00cc-71b0-496e-ba56-02447dbae754',
                sentiment: 'Sentiment(polarity=0.0, subjectivity=0.0)',
            },
            {
                timestamp: '2019-11-19T16:50:19.920435Z',
                resultCode: 200,
                duration: 467.2259,
                id: '|47cca13-463f9dec2880da4e.f6036bf7_',
                question: 'Where are you',
                answer: 'I\'m digital. I don\'t have a physical location.',
                score: 100,
                performanceBucket: '250ms-500ms',
                iakpmgpoc: 'be0b00cc-71b0-496e-ba56-02447dbae754',
                sentiment: 'Sentiment(polarity=0.0, subjectivity=0.0)',
            },
            {
                timestamp: '2019-12-01T16:16:05.6009772Z',
                resultCode: 200,
                duration: 5907.625,
                id: '|47cd1f5-463f9dec2880da4e.178cd539_',
                question: 'hi',
                answer: 'Hello.',
                score: 100,
                performanceBucket: '3sec-7sec',
                iakpmgpoc: '7b36cb7b-29a2-4f5e-a810-929ab59d03d6',
                sentiment: 'Sentiment(polarity=0.0, subjectivity=0.0)',
            },
            {
                timestamp: '2019-12-01T16:16:21.1483937Z',
                resultCode: 200,
                duration: 18877.2542,
                id: '|47cd1f7-463f9dec2880da4e.178cd53a_',
                question: 'how are you?',
                answer: 'Great, thanks.',
                score: 100,
                performanceBucket: '15sec-30sec',
                iakpmgpoc: '7b36cb7b-29a2-4f5e-a810-929ab59d03d6',
                sentiment: 'Sentiment(polarity=0.0, subjectivity=0.0)',
            },
            {
                timestamp: '2019-11-17T04:42:48.0899752Z',
                resultCode: 200,
                duration: 2237.8565,
                id: '|dcac171b-45a51353db475458.2e73e4f0_',
                question: '1.  Welche Tests bieten Sie an?',
                answer: 'Wir bieten genetische Tests vor der Implantation auf Aneuploidie (PGT-A) und genetische Tests vor der Implantation auf strukturelle Umlagerungen (PGT-SR) an. Wir bieten auch endometriale EmpfÃ¤nglichkeitstests an',
                score: 95,
                performanceBucket: '1sec-3sec',
                iakpmgpoc: '5f7025ff-4a0b-4ef7-9fc8-7c18efb76209',
                sentiment: 'Sentiment(polarity=0.0, subjectivity=0.0)',
            },
            {
                timestamp: '2019-11-17T04:47:40.300049Z',
                resultCode: 200,
                duration: 1607.6351,
                id: '|dcac171e-45a51353db475458.2e73e4f2_',
                question: 'how do you perform pgta testing',
                answer: 'We use a next generation sequencing (NGS) to perform PGT-A.  Our technology is custom developed and utilizes our PGTai analytic platform to provide highest accuracy results',
                score: 95,
                performanceBucket: '1sec-3sec',
                iakpmgpoc: 'be0b00cc-71b0-496e-ba56-02447dbae754',
                sentiment: 'Sentiment(polarity=0.0, subjectivity=0.0)',
            },
            {
                timestamp: '2019-11-17T04:51:13.4193374Z',
                resultCode: 200,
                duration: 836.9787,
                id: '|dcac1720-45a51353db475458.2e73e4f3_',
                question: 'az bot publish -n test_bot_19 -g appp',
                answer: 'I\'m quite happy, thank you.',
                score: 24.39,
                performanceBucket: '500ms-1sec',
                iakpmgpoc: 'be0b00cc-71b0-496e-ba56-02447dbae754',
                sentiment: 'Sentiment(polarity=0.0, subjectivity=0.0)',
            },
            {
                timestamp: '2019-11-17T05:00:14.2424823Z',
                resultCode: 200,
                duration: 862.8973,
                id: '|dcac1723-45a51353db475458.2e73e4f4_',
                question: '6.  What is PGTai2.0',
                answer: 'PGTai2.0 is our most current PGT-A platform.  It uses data from both traditional NGS PGT-A along with sequencing of SNPs to provide enhanced PGT-A data, such as identification of female triploidy and double confirmation of aneuploidy',
                score: 95,
                performanceBucket: '500ms-1sec',
                iakpmgpoc: 'be0b00cc-71b0-496e-ba56-02447dbae754',
                sentiment: 'Sentiment(polarity=0.0, subjectivity=0.0)',
            },
            {
                timestamp: '2019-11-17T07:26:22.8837125Z',
                resultCode: 200,
                duration: 858.8628,
                id: '|dcac173b-45a51353db475458.2e73e500_',
                question: '1.  Welche Tests bieten Sie an?',
                answer: 'Great.',
                score: 35.67,
                performanceBucket: '500ms-1sec',
                iakpmgpoc: 'be0b00cc-71b0-496e-ba56-02447dbae754',
                sentiment: 'Sentiment(polarity=0.0, subjectivity=0.0)',
            },
            {
                timestamp: '2019-11-17T07:26:34.2646759Z',
                resultCode: 200,
                duration: 656.8696,
                id: '|dcac173d-45a51353db475458.2e73e501_',
                question: 'Welche Tests bieten Sie an',
                answer: 'Great.',
                score: 36.48,
                performanceBucket: '500ms-1sec',
                iakpmgpoc: 'be0b00cc-71b0-496e-ba56-02447dbae754',
                sentiment: 'Sentiment(polarity=0.0, subjectivity=0.0)',
            },
            {
                timestamp: '2019-11-17T07:26:45.1397215Z',
                resultCode: 200,
                duration: 1014.5735,
                id: '|dcac1741-45a51353db475458.2e73e503_',
                question: '1.  Welche Tests bieten Sie an',
                answer: 'Wir bieten genetische Tests vor der Implantation auf Aneuploidie (PGT-A) und genetische Tests vor der Implantation auf strukturelle Umlagerungen (PGT-SR) an. Wir bieten auch endometriale EmpfÃ¤nglichkeitstests an',
                score: 95,
                performanceBucket: '1sec-3sec',
                iakpmgpoc: 'be0b00cc-71b0-496e-ba56-02447dbae754',
                sentiment: 'Sentiment(polarity=0.0, subjectivity=0.0)',
            },
            {
                timestamp: '2019-11-20T03:53:17.5598126Z',
                resultCode: 200,
                duration: 1470.7603,
                id: '|47cca80-463f9dec2880da4e.f6036c2a_',
                question: 'number of holidays in month',
                answer: 'Thank you, and the same to you.',
                score: 29.89,
                performanceBucket: '1sec-3sec',
                iakpmgpoc: 'be0b00cc-71b0-496e-ba56-02447dbae754',
                sentiment: 'Sentiment(polarity=0.0, subjectivity=0.0)',
            },
            {
                timestamp: '2019-11-20T03:53:43.457078Z',
                resultCode: 200,
                duration: 562.0582,
                id: '|47cca84-463f9dec2880da4e.f6036c2d_',
                question: 'number of holidays in month',
                answer: 'Thank you, and the same to you.',
                score: 29.89,
                performanceBucket: '500ms-1sec',
                iakpmgpoc: 'be0b00cc-71b0-496e-ba56-02447dbae754',
                sentiment: 'Sentiment(polarity=0.0, subjectivity=0.0)',
            },
            {
                timestamp: '2019-11-20T03:57:27.2727034Z',
                resultCode: 200,
                duration: 1503.2137,
                id: '|47cca8d-463f9dec2880da4e.f6036c34_',
                question: 'Kann PGT-SR auf ausgeglichene Translokationen testen?',
                answer: 'Ja, unser Test kann die unausgeglichenen Formen der ausgeglichensten Translokationen [wechselseitige Translokationen] erkennen. Um zu bestÃ¤tigen, dass unsere Technologie unausgewogene Formen der Translokation eines Patienten erkennt, mÃ¼ssen wir den Karyotyp des Patienten (oder des Partners) vor dem Einreichen von Embryo-Biopsien zum Testen einreichen. Auf diese Weise kann unser genetisches Beratungsteam eine maÃŸgeschneiderte Fallbewertung durchfÃ¼hren, um sicherzustellen, dass alle unausgeglichenen Formen der Translokation erkannt werden kÃ¶nnen',
                score: 100,
                performanceBucket: '1sec-3sec',
                iakpmgpoc: 'be0b00cc-71b0-496e-ba56-02447dbae754',
                sentiment: 'Sentiment(polarity=0.0, subjectivity=0.0)',
            },
            {
                timestamp: '2019-11-20T03:59:20.4418951Z',
                resultCode: 200,
                duration: 3199.4232,
                id: '|47cca90-463f9dec2880da4e.f6036c36_',
                question: 'hello',
                answer: 'Hello.',
                score: 100,
                performanceBucket: '3sec-7sec',
                iakpmgpoc: '7b36cb7b-29a2-4f5e-a810-929ab59d03d6',
                sentiment: 'Sentiment(polarity=0.0, subjectivity=0.0)',
            },
            {
                timestamp: '2019-11-20T03:59:20.8168829Z',
                resultCode: 200,
                duration: 5218.3047,
                id: '|47cca92-463f9dec2880da4e.f6036c37_',
                question: 'what is SAN?',
                answer: 'Sentinel is a KPMG software that identifies independence approval requirements and potential conflicts of interest in respect of all proposed engagements from KPMG member firms. After entering the basic engagement information in the Sentinel Request, the tool routes the proposed engagements through a global approval process culminating in a Sentinel Approval Number (SAN) per engagement. It is essential to get a SAN before committing the firm to do an engagement.',
                score: 98,
                performanceBucket: '3sec-7sec',
                iakpmgpoc: '7b36cb7b-29a2-4f5e-a810-929ab59d03d6',
                sentiment: 'Sentiment(polarity=0.0, subjectivity=0.0)',
            },
            {
                timestamp: '2019-11-20T03:59:29.3331792Z',
                resultCode: 200,
                duration: 5257.859,
                id: '|47cca94-463f9dec2880da4e.f6036c38_',
                question: 'hello',
                answer: 'Hello.',
                score: 100,
                performanceBucket: '3sec-7sec',
                iakpmgpoc: '7b36cb7b-29a2-4f5e-a810-929ab59d03d6',
                sentiment: 'Sentiment(polarity=0.0, subjectivity=0.0)',
            },
            {
                timestamp: '2019-11-20T03:59:41.0255457Z',
                resultCode: 200,
                duration: 542.4742,
                id: '|47cca96-463f9dec2880da4e.f6036c39_',
                question: 'what is san?',
                answer: 'Sentinel is a KPMG software that identifies independence approval requirements and potential conflicts of interest in respect of all proposed engagements from KPMG member firms. After entering the basic engagement information in the Sentinel Request, the tool routes the proposed engagements through a global approval process culminating in a Sentinel Approval Number (SAN) per engagement. It is essential to get a SAN before committing the firm to do an engagement.',
                score: 98,
                performanceBucket: '500ms-1sec',
                iakpmgpoc: '7b36cb7b-29a2-4f5e-a810-929ab59d03d6',
                sentiment: 'Sentiment(polarity=0.0, subjectivity=0.0)',
            },
            {
                timestamp: '2019-11-20T04:44:40.8312731Z',
                resultCode: 200,
                duration: 1811.9653,
                id: '|47ccab0-463f9dec2880da4e.f6036c48_',
                question: 'Hi',
                answer: 'Hello.',
                score: 100,
                performanceBucket: '1sec-3sec',
                iakpmgpoc: '7b36cb7b-29a2-4f5e-a810-929ab59d03d6',
                sentiment: 'Sentiment(polarity=0.0, subjectivity=0.0)',
            },
            {
                timestamp: '2019-11-20T04:44:54.4729508Z',
                resultCode: 200,
                duration: 3473.6462,
                id: '|47ccab2-463f9dec2880da4e.f6036c49_',
                question: 'can you cry?',
                answer: 'I don\'t have a body.',
                score: 100,
                performanceBucket: '3sec-7sec',
                iakpmgpoc: '7b36cb7b-29a2-4f5e-a810-929ab59d03d6',
                sentiment: 'Sentiment(polarity=0.0, subjectivity=0.0)',
            },
            {
                timestamp: '2019-11-20T04:45:14.2287014Z',
                resultCode: 200,
                duration: 1076.2215,
                id: '|47ccab4-463f9dec2880da4e.f6036c4a_',
                question: 'Do you sleep?',
                answer: 'I don\'t have a body.',
                score: 100,
                performanceBucket: '1sec-3sec',
                iakpmgpoc: '7b36cb7b-29a2-4f5e-a810-929ab59d03d6',
                sentiment: 'Sentiment(polarity=0.0, subjectivity=0.0)',
            },
            {
                timestamp: '2019-11-20T04:45:38.943416Z',
                resultCode: 200,
                duration: 1150.4165,
                id: '|47ccab6-463f9dec2880da4e.f6036c4b_',
                question: 'This is boring',
                answer: 'I aim for efficiency.',
                score: 100,
                performanceBucket: '1sec-3sec',
                iakpmgpoc: '7b36cb7b-29a2-4f5e-a810-929ab59d03d6',
                sentiment: 'Sentiment(polarity=-1.0, subjectivity=1.0)',
            },
            {
                timestamp: '2019-11-20T04:45:54.4523435Z',
                resultCode: 200,
                duration: 925.5345,
                id: '|47ccab9-463f9dec2880da4e.f6036c4c_',
                question: 'I am getting bored',
                answer: 'Well, let me know if there\'s anything I can do for you.',
                score: 61.99,
                performanceBucket: '500ms-1sec',
                iakpmgpoc: '7b36cb7b-29a2-4f5e-a810-929ab59d03d6',
                sentiment: 'Sentiment(polarity=-0.5, subjectivity=1.0)',
            },
            {
                timestamp: '2019-11-20T04:46:27.5351798Z',
                resultCode: 200,
                duration: 890.7553,
                id: '|47ccabb-463f9dec2880da4e.f6036c4d_',
                question: 'How old are you?',
                answer: 'Age doesn\'t really apply to me.',
                score: 100,
                performanceBucket: '500ms-1sec',
                iakpmgpoc: '7b36cb7b-29a2-4f5e-a810-929ab59d03d6',
                sentiment: 'Sentiment(polarity=0.1, subjectivity=0.2)',
            },
            {
                timestamp: '2019-11-20T04:46:43.5270002Z',
                resultCode: 200,
                duration: 902.1951,
                id: '|47ccabd-463f9dec2880da4e.f6036c4e_',
                question: 'I am younger than you',
                answer: 'You\'re definitely smarter than I am.',
                score: 43.04,
                performanceBucket: '500ms-1sec',
                iakpmgpoc: '7b36cb7b-29a2-4f5e-a810-929ab59d03d6',
                sentiment: 'Sentiment(polarity=0.0, subjectivity=0.0)',
            },
            {
                timestamp: '2019-11-20T04:47:42.8334173Z',
                resultCode: 200,
                duration: 149.1449,
                id: '|47ccac3-463f9dec2880da4e.f6036c51_',
                question: 'AMA',
                answer: 'I\'m better at answering questions.',
                score: 100,
                performanceBucket: '<250ms',
                iakpmgpoc: '7b36cb7b-29a2-4f5e-a810-929ab59d03d6',
                sentiment: 'Sentiment(polarity=0.0, subjectivity=0.0)',
            },
            {
                timestamp: '2019-11-20T04:48:19.3876773Z',
                resultCode: 200,
                duration: 763.6666,
                id: '|47ccac5-463f9dec2880da4e.f6036c52_',
                question: 'Okay, tell me who is your boss?',
                answer: 'I don\'t have family.',
                score: 38.42,
                performanceBucket: '500ms-1sec',
                iakpmgpoc: '7b36cb7b-29a2-4f5e-a810-929ab59d03d6',
                sentiment: 'Sentiment(polarity=0.5, subjectivity=0.5)',
            },
            {
                timestamp: '2019-11-20T04:48:32.4576842Z',
                resultCode: 200,
                duration: 591.5409,
                id: '|47ccac7-463f9dec2880da4e.f6036c53_',
                question: 'Family?',
                answer: 'I don\'t have family.',
                score: 58.74,
                performanceBucket: '500ms-1sec',
                iakpmgpoc: '7b36cb7b-29a2-4f5e-a810-929ab59d03d6',
                sentiment: 'Sentiment(polarity=0.0, subjectivity=0.0)',
            },
            {
                timestamp: '2019-11-20T04:48:51.7248717Z',
                resultCode: 200,
                duration: 774.3858,
                id: '|47ccac9-463f9dec2880da4e.f6036c54_',
                question: 'that\'s good, but I am asking about your boss',
                answer: 'I enjoy talking with you.',
                score: 34.96,
                performanceBucket: '500ms-1sec',
                iakpmgpoc: '7b36cb7b-29a2-4f5e-a810-929ab59d03d6',
                sentiment: 'Sentiment(polarity=0.7, subjectivity=0.6000000000000001)',
            },
            {
                timestamp: '2019-11-20T04:49:06.2915623Z',
                resultCode: 200,
                duration: 737.005,
                id: '|47ccacb-463f9dec2880da4e.f6036c55_',
                question: 'hmm',
                answer: 'I\'m afraid I\'m not musically inclined.',
                score: 57.88,
                performanceBucket: '500ms-1sec',
                iakpmgpoc: '7b36cb7b-29a2-4f5e-a810-929ab59d03d6',
                sentiment: 'Sentiment(polarity=0.0, subjectivity=0.0)',
            },
            {
                timestamp: '2019-11-20T04:52:26.8707927Z',
                resultCode: 200,
                duration: 1632.2213,
                id: '|47ccacd-463f9dec2880da4e.f6036c56_',
                question: 'Okay do you know how to play game?',
                answer: 'I don\'t know.',
                score: 36.76,
                performanceBucket: '1sec-3sec',
                iakpmgpoc: '7b36cb7b-29a2-4f5e-a810-929ab59d03d6',
                sentiment: 'Sentiment(polarity=0.04999999999999999, subjectivity=0.45)',
            },
            {
                timestamp: '2019-11-20T04:52:44.4381175Z',
                resultCode: 200,
                duration: 611.1387,
                id: '|47ccacf-463f9dec2880da4e.f6036c57_',
                question: 'how to play',
                answer: 'Ok.',
                score: 37.64,
                performanceBucket: '500ms-1sec',
                iakpmgpoc: '7b36cb7b-29a2-4f5e-a810-929ab59d03d6',
                sentiment: 'Sentiment(polarity=0.0, subjectivity=0.0)',
            },
            {
                timestamp: '2019-11-20T04:53:01.8939054Z',
                resultCode: 200,
                duration: 762.1098,
                id: '|47ccad1-463f9dec2880da4e.f6036c59_',
                question: 'how to play?',
                answer: 'Ok.',
                score: 37.64,
                performanceBucket: '500ms-1sec',
                iakpmgpoc: '7b36cb7b-29a2-4f5e-a810-929ab59d03d6',
                sentiment: 'Sentiment(polarity=0.0, subjectivity=0.0)',
            },
            {
                timestamp: '2019-11-20T04:53:16.199571Z',
                resultCode: 200,
                duration: 859.6217,
                id: '|47ccad3-463f9dec2880da4e.f6036c5a_',
                question: 'I am asking bro',
                answer: 'Okay.',
                score: 32.43,
                performanceBucket: '500ms-1sec',
                iakpmgpoc: '7b36cb7b-29a2-4f5e-a810-929ab59d03d6',
                sentiment: 'Sentiment(polarity=0.0, subjectivity=0.0)',
            },
            {
                timestamp: '2019-11-20T05:40:12.5080516Z',
                resultCode: 200,
                duration: 509.3487,
                id: '|47ccade-463f9dec2880da4e.f6036c5e_',
                question: 'Hi',
                answer: 'Hello.',
                score: 100,
                performanceBucket: '500ms-1sec',
                iakpmgpoc: '7b36cb7b-29a2-4f5e-a810-929ab59d03d6',
                sentiment: 'Sentiment(polarity=0.0, subjectivity=0.0)',
            },
            {
                timestamp: '2019-11-20T05:40:22.7081429Z',
                resultCode: 200,
                duration: 489.4984,
                id: '|47ccae0-463f9dec2880da4e.f6036c5f_',
                question: 'What is GUP?',
                answer: 'Just standing by, ready to help.',
                score: 99,
                performanceBucket: '250ms-500ms',
                iakpmgpoc: '7b36cb7b-29a2-4f5e-a810-929ab59d03d6',
                sentiment: 'Sentiment(polarity=0.0, subjectivity=0.0)',
            },
            {
                timestamp: '2019-11-20T05:40:44.8344982Z',
                resultCode: 200,
                duration: 690.6236,
                id: '|47ccae2-463f9dec2880da4e.f6036c60_',
                question: 'What is a GUP?',
                answer: 'The Global Ultimate Parent (GUP) is the highest-tiered entity in a family tree in Sentinel. A Sentinel Tree typically consists of all entities that are ultimately controlled by the GUP or the GUP has significant influence.   For example, for all Microsoft Sentinel entities, the GUP will be Microsoft Corporation.',
                score: 100,
                performanceBucket: '500ms-1sec',
                iakpmgpoc: '7b36cb7b-29a2-4f5e-a810-929ab59d03d6',
                sentiment: 'Sentiment(polarity=0.0, subjectivity=0.0)',
            },
            {
                timestamp: '2019-11-20T06:14:19.4883476Z',
                resultCode: 200,
                duration: 739.9379,
                id: '|47ccae7-463f9dec2880da4e.f6036c62_',
                question: 'What is Sentinel?',
                answer: 'Sentinel is a KPMG software that identifies independence approval requirements and potential conflicts of interest in respect of all proposed engagements from KPMG member firms. After entering the basic engagement information in the Sentinel Request, the tool routes the proposed engagements through a global approval process culminating in a Sentinel Approval Number (SAN) per engagement. It is essential to get a SAN before committing the firm to do an engagement.',
                score: 100,
                performanceBucket: '500ms-1sec',
                iakpmgpoc: '7b36cb7b-29a2-4f5e-a810-929ab59d03d6',
                sentiment: 'Sentiment(polarity=0.0, subjectivity=0.0)',
            },
            {
                timestamp: '2019-11-20T06:14:40.7434155Z',
                resultCode: 200,
                duration: 782.0788,
                id: '|47ccae9-463f9dec2880da4e.f6036c63_',
                question: 'Who all need to become engaging parties in Sentinel?',
                answer: 'The following are to be added as Engaging Parties:  Â  Â  Â - Any party signing the engagement contract or otherwise bound to the engagement contract.   Â  Â  - Any party that is to pay any of the fees for the service.   Â  Â  - Any party that has a role in defining the scope of the engagement.   Â  Â  - Any party that has a role in selecting KPMG for the service should be listed as an additional Engaging Party  In addition, theÂ  following have to be included as Engaging Parties as well:  Â  Â  - a prime contractor hiring KPMG  Â  Â  - a subcontractorÂ  of KPMG  Â  Â  - a target if the seller is an Engaging Party (in a Deal Advisory engagement)',
                score: 100,
                performanceBucket: '500ms-1sec',
                iakpmgpoc: '7b36cb7b-29a2-4f5e-a810-929ab59d03d6',
                sentiment: 'Sentiment(polarity=0.4, subjectivity=0.7)',
            },
            {
                timestamp: '2019-11-20T06:15:08.2016703Z',
                resultCode: 200,
                duration: 374.5363,
                id: '|47ccaeb-463f9dec2880da4e.f6036c64_',
                question: 'And Validity of SAN?',
                answer: 'A SAN is valid until the end of the engagement and up to a maximum of three years. However, the approvers (typically the Sentinel Lead Partner and/or Conflicts Resolver) can restrict the validity of a SAN for a limited period.  A SAN for recurring engagements for a SEC audit client and its affiliates is valid for only one year.  A member firm\'s local policies may require a new SAN more frequently than every three years in certain circumstances.',
                score: 98,
                performanceBucket: '250ms-500ms',
                iakpmgpoc: '7b36cb7b-29a2-4f5e-a810-929ab59d03d6',
                sentiment: 'Sentiment(polarity=0.0, subjectivity=0.0)',
            },
            {
                timestamp: '2019-11-20T06:15:49.3005443Z',
                resultCode: 200,
                duration: 508.2441,
                id: '|47ccaee-463f9dec2880da4e.f6036c65_',
                question: 'You are intelligent',
                answer: 'I do what I can.',
                score: 99,
                performanceBucket: '500ms-1sec',
                iakpmgpoc: '7b36cb7b-29a2-4f5e-a810-929ab59d03d6',
                sentiment: 'Sentiment(polarity=0.8, subjectivity=0.9)',
            },
            {
                timestamp: '2019-11-20T06:42:32.2643895Z',
                resultCode: 200,
                duration: 802.9732,
                id: '|47ccaf2-463f9dec2880da4e.f6036c67_',
                question: 'How many holiday I can take?',
                answer: 'there are 2 mandatory holiday and 1 restricted holiday',
                score: 66.46,
                performanceBucket: '500ms-1sec',
                iakpmgpoc: '7b36cb7b-29a2-4f5e-a810-929ab59d03d6',
                sentiment: 'Sentiment(polarity=0.5, subjectivity=0.5)',
            },
            {
                timestamp: '2019-11-20T07:27:41.6537383Z',
                resultCode: 200,
                duration: 776.834,
                id: '|47ccaf9-463f9dec2880da4e.f6036c6a_',
                question: 'Thanks',
                answer: 'You\'re welcome.',
                score: 100,
                performanceBucket: '500ms-1sec',
                iakpmgpoc: '7b36cb7b-29a2-4f5e-a810-929ab59d03d6',
                sentiment: 'Sentiment(polarity=0.2, subjectivity=0.2)',
            },
            {
                timestamp: '2019-11-20T16:21:57.7585195Z',
                resultCode: 200,
                duration: 1560.2022,
                id: '|47ccb4a-463f9dec2880da4e.f6036c8d_',
                question: 'How many leaves I have',
                answer: 'there are 3 months of maternity paid leaves',
                score: 84.32,
                performanceBucket: '1sec-3sec',
                iakpmgpoc: '7b36cb7b-29a2-4f5e-a810-929ab59d03d6',
                sentiment: 'Sentiment(polarity=0.5, subjectivity=0.5)',
            },
            {
                timestamp: '2019-11-20T16:22:17.4390909Z',
                resultCode: 200,
                duration: 994.4605,
                id: '|47ccb4c-463f9dec2880da4e.f6036c8e_',
                question: 'What is Sab',
                answer: 'Just standing by, ready to help.',
                score: 6.2,
                performanceBucket: '500ms-1sec',
                iakpmgpoc: '7b36cb7b-29a2-4f5e-a810-929ab59d03d6',
                sentiment: 'Sentiment(polarity=0.0, subjectivity=0.0)',
            },
            {
                timestamp: '2019-11-20T16:22:28.8394596Z',
                resultCode: 200,
                duration: 387.3511,
                id: '|47ccb4e-463f9dec2880da4e.f6036c8f_',
                question: 'What is San',
                answer: 'Sentinel is a KPMG software that identifies independence approval requirements and potential conflicts of interest in respect of all proposed engagements from KPMG member firms. After entering the basic engagement information in the Sentinel Request, the tool routes the proposed engagements through a global approval process culminating in a Sentinel Approval Number (SAN) per engagement. It is essential to get a SAN before committing the firm to do an engagement.',
                score: 98,
                performanceBucket: '250ms-500ms',
                iakpmgpoc: '7b36cb7b-29a2-4f5e-a810-929ab59d03d6',
                sentiment: 'Sentiment(polarity=0.0, subjectivity=0.0)',
            },
            {
                timestamp: '2019-11-15T07:02:14.8426538Z',
                resultCode: 200,
                duration: 995.0749,
                id: '|766f4cf9-4ba5f66fbdd44920.ab960075_',
                question: 'do you ever get hurt',
                answer: 'I don\'t have a body.',
                score: 100,
                performanceBucket: '500ms-1sec',
                iakpmgpoc: 'e32fe247-6e2e-4936-88d1-d8421a077253',
                sentiment: 'Sentiment(polarity=0.0, subjectivity=0.0)',
            },
            {
                timestamp: '2019-11-15T08:07:51.7044948Z',
                resultCode: 200,
                duration: 896.2846,
                id: '|766f4d13-4ba5f66fbdd44920.ab960083_',
                question: 'What testing do you offer',
                answer: 'We offer preimplantation genetic testing for aneuploidy (PGT-A) and preimplantation genetic testing for structural rearrangements (PGT-SR).  We also offer endometrial receptivity testing',
                score: 100,
                performanceBucket: '500ms-1sec',
                iakpmgpoc: 'be0b00cc-71b0-496e-ba56-02447dbae754',
                sentiment: 'Sentiment(polarity=0.0, subjectivity=0.0)',
            },
            {
                timestamp: '2019-11-18T05:56:23.0522559Z',
                resultCode: 200,
                duration: 793.9073,
                id: '|dcac17ee-45a51353db475458.2e73e547_',
                question: 'hi',
                answer: 'Hello.',
                score: 100,
                performanceBucket: '500ms-1sec',
                iakpmgpoc: 'be0b00cc-71b0-496e-ba56-02447dbae754',
                sentiment: 'Sentiment(polarity=0.0, subjectivity=0.0)',
            },
            {
                timestamp: '2019-11-18T05:56:36.6509886Z',
                resultCode: 200,
                duration: 270.5322,
                id: '|dcac17f0-45a51353db475458.2e73e548_',
                question: 'Hi',
                answer: 'Hello.',
                score: 100,
                performanceBucket: '250ms-500ms',
                iakpmgpoc: 'be0b00cc-71b0-496e-ba56-02447dbae754',
                sentiment: 'Sentiment(polarity=0.0, subjectivity=0.0)',
            },
            {
                timestamp: '2019-11-18T05:56:56.0385378Z',
                resultCode: 200,
                duration: 290.4252,
                id: '|dcac17f2-45a51353db475458.2e73e549_',
                question: 'Testing',
                answer: 'Hello there.',
                score: 100,
                performanceBucket: '250ms-500ms',
                iakpmgpoc: 'be0b00cc-71b0-496e-ba56-02447dbae754',
                sentiment: 'Sentiment(polarity=0.0, subjectivity=0.0)',
            },
            {
                timestamp: '2019-11-18T05:57:00.6956095Z',
                resultCode: 200,
                duration: 80.2971,
                id: '|dcac17f4-45a51353db475458.2e73e54a_',
                question: 'Testing',
                answer: 'Hello there.',
                score: 100,
                performanceBucket: '<250ms',
                iakpmgpoc: 'be0b00cc-71b0-496e-ba56-02447dbae754',
                sentiment: 'Sentiment(polarity=0.0, subjectivity=0.0)',
            },
            {
                timestamp: '2019-11-18T05:57:33.5760038Z',
                resultCode: 200,
                duration: 413.7769,
                id: '|dcac17f6-45a51353db475458.2e73e54b_',
                question: 'weather in Delhi',
                answer: 'I don\'t really have an opinion about that.',
                score: 8.53,
                performanceBucket: '250ms-500ms',
                iakpmgpoc: 'be0b00cc-71b0-496e-ba56-02447dbae754',
                sentiment: 'Sentiment(polarity=0.0, subjectivity=0.0)',
            },
            {
                timestamp: '2019-11-18T05:57:43.4081955Z',
                resultCode: 200,
                duration: 238.0227,
                id: '|dcac17f8-45a51353db475458.2e73e54c_',
                question: 'Your name?',
                answer: 'I don\'t have a name.',
                score: 59.98,
                performanceBucket: '<250ms',
                iakpmgpoc: 'be0b00cc-71b0-496e-ba56-02447dbae754',
                sentiment: 'Sentiment(polarity=0.0, subjectivity=0.0)',
            },
            {
                timestamp: '2019-11-18T05:58:14.8243277Z',
                resultCode: 200,
                duration: 430.6357,
                id: '|dcac17fa-45a51353db475458.2e73e54d_',
                question: 'hi',
                answer: 'Hello.',
                score: 100,
                performanceBucket: '250ms-500ms',
                iakpmgpoc: 'be0b00cc-71b0-496e-ba56-02447dbae754',
                sentiment: 'Sentiment(polarity=0.0, subjectivity=0.0)',
            },
            {
                timestamp: '2019-11-18T05:58:20.9110939Z',
                resultCode: 200,
                duration: 178.9745,
                id: '|dcac17fc-45a51353db475458.2e73e54e_',
                question: 'hi',
                answer: 'Hello.',
                score: 100,
                performanceBucket: '<250ms',
                iakpmgpoc: 'be0b00cc-71b0-496e-ba56-02447dbae754',
                sentiment: 'Sentiment(polarity=0.0, subjectivity=0.0)',
            },
            {
                timestamp: '2019-11-18T05:58:26.0832212Z',
                resultCode: 200,
                duration: 140.8502,
                id: '|dcac17fe-45a51353db475458.2e73e54f_',
                question: 'hi',
                answer: 'Hello.',
                score: 100,
                performanceBucket: '<250ms',
                iakpmgpoc: 'be0b00cc-71b0-496e-ba56-02447dbae754',
                sentiment: 'Sentiment(polarity=0.0, subjectivity=0.0)',
            },
            {
                timestamp: '2019-11-18T05:59:11.0379108Z',
                resultCode: 200,
                duration: 411.8633,
                id: '|dcac1800-45a51353db475458.2e73e550_',
                question: 'my name is mahendra',
                answer: 'I don\'t have a name.',
                score: 20.94,
                performanceBucket: '250ms-500ms',
                iakpmgpoc: 'be0b00cc-71b0-496e-ba56-02447dbae754',
                sentiment: 'Sentiment(polarity=0.0, subjectivity=0.0)',
            },
            {
                timestamp: '2019-11-18T05:59:35.5824322Z',
                resultCode: 200,
                duration: 513.0329,
                id: '|dcac1802-45a51353db475458.2e73e551_',
                question: 'your name',
                answer: 'I don\'t have a name.',
                score: 59.98,
                performanceBucket: '500ms-1sec',
                iakpmgpoc: 'be0b00cc-71b0-496e-ba56-02447dbae754',
                sentiment: 'Sentiment(polarity=0.0, subjectivity=0.0)',
            },
            {
                timestamp: '2019-11-18T05:59:36.5043192Z',
                resultCode: 200,
                duration: 313.7929,
                id: '|dcac1804-45a51353db475458.2e73e552_',
                question: 'Okay thanks',
                answer: 'You\'re welcome.',
                score: 100,
                performanceBucket: '250ms-500ms',
                iakpmgpoc: 'be0b00cc-71b0-496e-ba56-02447dbae754',
                sentiment: 'Sentiment(polarity=0.35, subjectivity=0.35)',
            },
            {
                timestamp: '2019-11-18T05:59:42.7543099Z',
                resultCode: 200,
                duration: 447.5466,
                id: '|dcac1806-45a51353db475458.2e73e553_',
                question: 'what is my name',
                answer: 'I don\'t know you personally.',
                score: 100,
                performanceBucket: '250ms-500ms',
                iakpmgpoc: 'be0b00cc-71b0-496e-ba56-02447dbae754',
                sentiment: 'Sentiment(polarity=0.0, subjectivity=0.0)',
            },
            {
                timestamp: '2019-11-18T05:59:45.2230483Z',
                resultCode: 200,
                duration: 179.9228,
                id: '|dcac1808-45a51353db475458.2e73e554_',
                question: 'not welcome',
                answer: 'Great.',
                score: 64.74,
                performanceBucket: '<250ms',
                iakpmgpoc: 'be0b00cc-71b0-496e-ba56-02447dbae754',
                sentiment: 'Sentiment(polarity=-0.4, subjectivity=0.9)',
            },
            {
                timestamp: '2019-11-18T05:59:51.5512024Z',
                resultCode: 200,
                duration: 334.5265,
                id: '|dcac180a-45a51353db475458.2e73e555_',
                question: 'my name is mahi',
                answer: 'I don\'t have a name.',
                score: 21.83,
                performanceBucket: '250ms-500ms',
                iakpmgpoc: 'be0b00cc-71b0-496e-ba56-02447dbae754',
                sentiment: 'Sentiment(polarity=0.0, subjectivity=0.0)',
            },
            {
                timestamp: '2019-11-18T05:59:53.1917936Z',
                resultCode: 200,
                duration: 411.9303,
                id: '|dcac180c-45a51353db475458.2e73e556_',
                question: 'bye',
                answer: 'Goodbye.',
                score: 100,
                performanceBucket: '250ms-500ms',
                iakpmgpoc: 'be0b00cc-71b0-496e-ba56-02447dbae754',
                sentiment: 'Sentiment(polarity=0.0, subjectivity=0.0)',
            },
            {
                timestamp: '2019-11-18T05:59:55.1605861Z',
                resultCode: 200,
                duration: 431.906,
                id: '|dcac180e-45a51353db475458.2e73e557_',
                question: 'hi how are you',
                answer: 'Great, thanks.',
                score: 40.05,
                performanceBucket: '250ms-500ms',
                iakpmgpoc: 'be0b00cc-71b0-496e-ba56-02447dbae754',
                sentiment: 'Sentiment(polarity=0.0, subjectivity=0.0)',
            },
            {
                timestamp: '2019-11-18T05:59:59.5859647Z',
                resultCode: 200,
                duration: 373.5173,
                id: '|dcac1810-45a51353db475458.2e73e558_',
                question: 'why bye?',
                answer: 'I don\'t know.',
                score: 21.07,
                performanceBucket: '250ms-500ms',
                iakpmgpoc: 'be0b00cc-71b0-496e-ba56-02447dbae754',
                sentiment: 'Sentiment(polarity=0.0, subjectivity=0.0)',
            },
            {
                timestamp: '2019-11-18T06:00:01.9261992Z',
                resultCode: 200,
                duration: 179.9104,
                id: '|dcac1812-45a51353db475458.2e73e559_',
                question: 'hi',
                answer: 'Hello.',
                score: 100,
                performanceBucket: '<250ms',
                iakpmgpoc: 'be0b00cc-71b0-496e-ba56-02447dbae754',
                sentiment: 'Sentiment(polarity=0.0, subjectivity=0.0)',
            },
            {
                timestamp: '2019-11-18T06:00:12.6762539Z',
                resultCode: 200,
                duration: 591.3651,
                id: '|dcac1814-45a51353db475458.2e73e55a_',
                question: 'What is time now?',
                answer: 'Very well.',
                score: 41.62,
                performanceBucket: '500ms-1sec',
                iakpmgpoc: 'be0b00cc-71b0-496e-ba56-02447dbae754',
                sentiment: 'Sentiment(polarity=0.0, subjectivity=0.0)',
            },
            {
                timestamp: '2019-11-18T06:00:47.2966716Z',
                resultCode: 200,
                duration: 391.3313,
                id: '|dcac1816-45a51353db475458.2e73e55b_',
                question: 'your name?',
                answer: 'I don\'t have a name.',
                score: 59.98,
                performanceBucket: '250ms-500ms',
                iakpmgpoc: 'be0b00cc-71b0-496e-ba56-02447dbae754',
                sentiment: 'Sentiment(polarity=0.0, subjectivity=0.0)',
            },
            {
                timestamp: '2019-11-18T06:00:52.859623Z',
                resultCode: 200,
                duration: 168.0648,
                id: '|dcac1818-45a51353db475458.2e73e55c_',
                question: 'hello',
                answer: 'Hello.',
                score: 100,
                performanceBucket: '<250ms',
                iakpmgpoc: 'be0b00cc-71b0-496e-ba56-02447dbae754',
                sentiment: 'Sentiment(polarity=0.0, subjectivity=0.0)',
            },
            {
                timestamp: '2019-11-18T06:04:07.5970596Z',
                resultCode: 200,
                duration: 417.4666,
                id: '|dcac181b-45a51353db475458.2e73e55d_',
                question: 'Hi',
                answer: 'Hello.',
                score: 100,
                performanceBucket: '250ms-500ms',
                iakpmgpoc: 'be0b00cc-71b0-496e-ba56-02447dbae754',
                sentiment: 'Sentiment(polarity=0.0, subjectivity=0.0)',
            },
            {
                timestamp: '2019-11-18T06:04:17.3159899Z',
                resultCode: 200,
                duration: 213.5237,
                id: '|dcac181d-45a51353db475458.2e73e55e_',
                question: 'Your name?',
                answer: 'I don\'t have a name.',
                score: 59.98,
                performanceBucket: '<250ms',
                iakpmgpoc: 'be0b00cc-71b0-496e-ba56-02447dbae754',
                sentiment: 'Sentiment(polarity=0.0, subjectivity=0.0)',
            },
            {
                timestamp: '2019-11-18T06:04:25.1336728Z',
                resultCode: 200,
                duration: 503.4237,
                id: '|dcac181f-45a51353db475458.2e73e55f_',
                question: 'Chatbot',
                answer: 'I\'ve heard of other bots, but I haven\'t met any.',
                score: 45.27,
                performanceBucket: '500ms-1sec',
                iakpmgpoc: 'be0b00cc-71b0-496e-ba56-02447dbae754',
                sentiment: 'Sentiment(polarity=0.0, subjectivity=0.0)',
            },
            {
                timestamp: '2019-11-18T06:04:39.0835703Z',
                resultCode: 200,
                duration: 278.4497,
                id: '|dcac1821-45a51353db475458.2e73e560_',
                question: 'hi',
                answer: 'Hello.',
                score: 100,
                performanceBucket: '250ms-500ms',
                iakpmgpoc: 'be0b00cc-71b0-496e-ba56-02447dbae754',
                sentiment: 'Sentiment(polarity=0.0, subjectivity=0.0)',
            },
            {
                timestamp: '2019-11-18T06:05:23.9506394Z',
                resultCode: 200,
                duration: 394.0798,
                id: '|dcac1823-45a51353db475458.2e73e561_',
                question: 'your name?',
                answer: 'I don\'t have a name.',
                score: 59.98,
                performanceBucket: '250ms-500ms',
                iakpmgpoc: 'be0b00cc-71b0-496e-ba56-02447dbae754',
                sentiment: 'Sentiment(polarity=0.0, subjectivity=0.0)',
            },
            {
                timestamp: '2019-11-15T06:57:28.5612652Z',
                resultCode: 200,
                duration: 2703.1118,
                id: '|766f4cf2-4ba5f66fbdd44920.ab960070_',
                question: 'Do you ever get hurt?',
                answer: 'I don\'t have a body.',
                score: 100,
                performanceBucket: '1sec-3sec',
                iakpmgpoc: 'e32fe247-6e2e-4936-88d1-d8421a077253',
                sentiment: 'Sentiment(polarity=0.0, subjectivity=0.0)',
            },
            {
                timestamp: '2019-11-20T10:48:46.4795205Z',
                resultCode: 200,
                duration: 1454.9042,
                id: '|47ccb11-463f9dec2880da4e.f6036c73_',
                question: 'hello',
                answer: 'Hello.',
                score: 100,
                performanceBucket: '1sec-3sec',
                iakpmgpoc: '7b36cb7b-29a2-4f5e-a810-929ab59d03d6',
                sentiment: 'Sentiment(polarity=0.0, subjectivity=0.0)',
            },
            {
                timestamp: '2019-11-20T13:26:43.8690394Z',
                resultCode: 200,
                duration: 8815.1086,
                id: '|47ccb23-463f9dec2880da4e.f6036c7a_',
                question: 'Who needs to be added as Engaging Parties in a Sentinel Request ?',
                answer: 'The following are to be added as Engaging Parties:  Â  Â  Â - Any party signing the engagement contract or otherwise bound to the engagement contract.   Â  Â  - Any party that is to pay any of the fees for the service.   Â  Â  - Any party that has a role in defining the scope of the engagement.   Â  Â  - Any party that has a role in selecting KPMG for the service should be listed as an additional Engaging Party  In addition, theÂ  following have to be included as Engaging Parties as well:  Â  Â  - a prime contractor hiring KPMG  Â  Â  - a subcontractorÂ  of KPMG  Â  Â  - a target if the seller is an Engaging Party (in a Deal Advisory engagement)',
                score: 100,
                performanceBucket: '7sec-15sec',
                iakpmgpoc: '7b36cb7b-29a2-4f5e-a810-929ab59d03d6',
                sentiment: 'Sentiment(polarity=0.4, subjectivity=0.7)',
            },
            {
                timestamp: '2019-11-20T14:11:17.6928096Z',
                resultCode: 200,
                duration: 891.3686,
                id: '|47ccb37-463f9dec2880da4e.f6036c85_',
                question: 'my name is mahendra',
                answer: 'I don\'t have a name.',
                score: 22.1,
                performanceBucket: '500ms-1sec',
                iakpmgpoc: '7b36cb7b-29a2-4f5e-a810-929ab59d03d6',
                sentiment: 'Sentiment(polarity=0.0, subjectivity=0.0)',
            },
            {
                timestamp: '2019-11-19T13:26:27.8185904Z',
                resultCode: 200,
                duration: 1037.7687,
                id: '|47cc99d-463f9dec2880da4e.f6036bad_',
                question: 'hi',
                answer: 'Hello.',
                score: 100,
                performanceBucket: '1sec-3sec',
                iakpmgpoc: 'be0b00cc-71b0-496e-ba56-02447dbae754',
                sentiment: 'Sentiment(polarity=0.0, subjectivity=0.0)',
            },
            {
                timestamp: '2019-11-19T13:26:42.355217Z',
                resultCode: 200,
                duration: 1830.4579,
                id: '|47cc99f-463f9dec2880da4e.f6036bae_',
                question: 'who are you',
                answer: 'I don\'t have a name.',
                score: 100,
                performanceBucket: '1sec-3sec',
                iakpmgpoc: 'be0b00cc-71b0-496e-ba56-02447dbae754',
                sentiment: 'Sentiment(polarity=0.0, subjectivity=0.0)',
            },
            {
                timestamp: '2019-11-19T13:28:04.761379Z',
                resultCode: 200,
                duration: 659.2058,
                id: '|47cc9a1-463f9dec2880da4e.f6036baf_',
                question: 'hi',
                answer: 'Hello.',
                score: 100,
                performanceBucket: '500ms-1sec',
                iakpmgpoc: 'be0b00cc-71b0-496e-ba56-02447dbae754',
                sentiment: 'Sentiment(polarity=0.0, subjectivity=0.0)',
            },
            {
                timestamp: '2019-11-19T13:28:12.42845Z',
                resultCode: 200,
                duration: 466.1854,
                id: '|47cc9a3-463f9dec2880da4e.f6036bb0_',
                question: 'who are you',
                answer: 'I don\'t have a name.',
                score: 100,
                performanceBucket: '250ms-500ms',
                iakpmgpoc: 'be0b00cc-71b0-496e-ba56-02447dbae754',
                sentiment: 'Sentiment(polarity=0.0, subjectivity=0.0)',
            },
            {
                timestamp: '2019-11-19T14:00:49.6756217Z',
                resultCode: 200,
                duration: 756.1018,
                id: '|47cc9b7-463f9dec2880da4e.f6036bbd_',
                question: 'how many holidays in month',
                answer: 'Thank you, and the same to you.',
                score: 31.35,
                performanceBucket: '500ms-1sec',
                iakpmgpoc: 'be0b00cc-71b0-496e-ba56-02447dbae754',
                sentiment: 'Sentiment(polarity=0.5, subjectivity=0.5)',
            },
            {
                timestamp: '2019-11-19T14:16:06.945682Z',
                resultCode: 200,
                duration: 958.9516,
                id: '|47cc9d6-463f9dec2880da4e.f6036bd3_',
                question: 'i live in london',
                answer: 'It\'s nice to have things you love.',
                score: 39.87,
                performanceBucket: '500ms-1sec',
                iakpmgpoc: 'be0b00cc-71b0-496e-ba56-02447dbae754',
                sentiment: 'Sentiment(polarity=0.13636363636363635, subjectivity=0.5)',
            },
            {
                timestamp: '2019-11-19T14:16:46.4848657Z',
                resultCode: 200,
                duration: 1065.7805,
                id: '|47cc9d8-463f9dec2880da4e.f6036bd4_',
                question: 'Are you a bot?',
                answer: 'I\'m digital. In other words, I\'m not human.',
                score: 100,
                performanceBucket: '1sec-3sec',
                iakpmgpoc: 'be0b00cc-71b0-496e-ba56-02447dbae754',
                sentiment: 'Sentiment(polarity=0.0, subjectivity=0.0)',
            },
            {
                timestamp: '2019-11-19T14:16:57.1854295Z',
                resultCode: 200,
                duration: 1209.6401,
                id: '|47cc9da-463f9dec2880da4e.f6036bd5_',
                question: 'can you talk?',
                answer: 'I\'m always happy to chat.',
                score: 100,
                performanceBucket: '1sec-3sec',
                iakpmgpoc: 'be0b00cc-71b0-496e-ba56-02447dbae754',
                sentiment: 'Sentiment(polarity=0.0, subjectivity=0.0)',
            },
            {
                timestamp: '2019-11-19T14:17:13.4684154Z',
                resultCode: 200,
                duration: 506.1153,
                id: '|47cc9dc-463f9dec2880da4e.f6036bd6_',
                question: 'lets chat',
                answer: 'I\'m always happy to chat.',
                score: 39.22,
                performanceBucket: '500ms-1sec',
                iakpmgpoc: 'be0b00cc-71b0-496e-ba56-02447dbae754',
                sentiment: 'Sentiment(polarity=0.0, subjectivity=0.0)',
            },
            {
                timestamp: '2019-11-19T14:26:00.482914Z',
                resultCode: 200,
                duration: 676.6899,
                id: '|47cc9df-463f9dec2880da4e.f6036bd7_',
                question: 'Paternity leave policy',
                answer: 'Goodbye.',
                score: 21.33,
                performanceBucket: '500ms-1sec',
                iakpmgpoc: 'be0b00cc-71b0-496e-ba56-02447dbae754',
                sentiment: 'Sentiment(polarity=0.0, subjectivity=0.0)',
            },
            {
                timestamp: '2019-11-19T14:39:46.2921279Z',
                resultCode: 200,
                duration: 641.608,
                id: '|47cc9e7-463f9dec2880da4e.f6036bdd_',
                question: 'Maternity leave?',
                answer: 'Goodbye.',
                score: 25.56,
                performanceBucket: '500ms-1sec',
                iakpmgpoc: 'be0b00cc-71b0-496e-ba56-02447dbae754',
                sentiment: 'Sentiment(polarity=0.0, subjectivity=0.0)',
            },
            {
                timestamp: '2019-11-19T15:38:00.1116947Z',
                resultCode: 200,
                duration: 5210.0185,
                id: '|47cc9f4-463f9dec2880da4e.f6036be4_',
                question: 'can you tell if any holiday exist in month',
                answer: 'there are 2 mandatory holiday and 1 restricted holiday',
                score: 100,
                performanceBucket: '3sec-7sec',
                iakpmgpoc: '7b36cb7b-29a2-4f5e-a810-929ab59d03d6',
                sentiment: 'Sentiment(polarity=0.0, subjectivity=0.0)',
            },
            {
                timestamp: '2019-11-19T15:43:34.1477372Z',
                resultCode: 200,
                duration: 902.488,
                id: '|47cc9f7-463f9dec2880da4e.f6036be6_',
                question: 'intent is',
                answer: 'Not at all.',
                score: 8.76,
                performanceBucket: '500ms-1sec',
                iakpmgpoc: '7b36cb7b-29a2-4f5e-a810-929ab59d03d6',
                sentiment: 'Sentiment(polarity=0.0, subjectivity=0.0)',
            },
            {
                timestamp: '2019-11-20T02:27:55.6404006Z',
                resultCode: 200,
                duration: 1577.9962,
                id: '|47cca5d-463f9dec2880da4e.f6036c14_',
                question: 'SAN?',
                answer: 'Sentinel is a KPMG software that identifies independence approval requirements and potential conflicts of interest in respect of all proposed engagements from KPMG member firms. After entering the basic engagement information in the Sentinel Request, the tool routes the proposed engagements through a global approval process culminating in a Sentinel Approval Number (SAN) per engagement. It is essential to get a SAN before committing the firm to do an engagement.',
                score: 99,
                performanceBucket: '1sec-3sec',
                iakpmgpoc: '7b36cb7b-29a2-4f5e-a810-929ab59d03d6',
                sentiment: 'Sentiment(polarity=0.0, subjectivity=0.0)',
            },
            {
                timestamp: '2019-11-20T02:28:04.9037783Z',
                resultCode: 200,
                duration: 504.0722,
                id: '|47cca60-463f9dec2880da4e.f6036c15_',
                question: 'san Validity?',
                answer: 'A SAN is valid until the end of the engagement and up to a maximum of three years. However, the approvers (typically the Sentinel Lead Partner and/or Conflicts Resolver) can restrict the validity of a SAN for a limited period.  A SAN for recurring engagements for a SEC audit client and its affiliates is valid for only one year.  A member firm\'s local policies may require a new SAN more frequently than every three years in certain circumstances.',
                score: 99,
                performanceBucket: '500ms-1sec',
                iakpmgpoc: '7b36cb7b-29a2-4f5e-a810-929ab59d03d6',
                sentiment: 'Sentiment(polarity=0.0, subjectivity=0.0)',
            },
            {
                timestamp: '2019-11-20T02:28:15.0281049Z',
                resultCode: 200,
                duration: 221.973,
                id: '|47cca63-463f9dec2880da4e.f6036c16_',
                question: 'san requirement',
                answer: 'Sentinel is a KPMG software that identifies independence approval requirements and potential conflicts of interest in respect of all proposed engagements from KPMG member firms. After entering the basic engagement information in the Sentinel Request, the tool routes the proposed engagements through a global approval process culminating in a Sentinel Approval Number (SAN) per engagement. It is essential to get a SAN before committing the firm to do an engagement.',
                score: 77.02,
                performanceBucket: '<250ms',
                iakpmgpoc: '7b36cb7b-29a2-4f5e-a810-929ab59d03d6',
                sentiment: 'Sentiment(polarity=0.0, subjectivity=0.0)',
            },
            {
                timestamp: '2019-11-20T02:28:30.8985624Z',
                resultCode: 200,
                duration: 655.5424,
                id: '|47cca66-463f9dec2880da4e.f6036c17_',
                question: 'san engaging parties?',
                answer: 'The following are to be added as Engaging Parties:  Â  Â  Â - Any party signing the engagement contract or otherwise bound to the engagement contract.   Â  Â  - Any party that is to pay any of the fees for the service.   Â  Â  - Any party that has a role in defining the scope of the engagement.   Â  Â  - Any party that has a role in selecting KPMG for the service should be listed as an additional Engaging Party  In addition, theÂ  following have to be included as Engaging Parties as well:  Â  Â  - a prime contractor hiring KPMG  Â  Â  - a subcontractorÂ  of KPMG  Â  Â  - a target if the seller is an Engaging Party (in a Deal Advisory engagement)',
                score: 99,
                performanceBucket: '500ms-1sec',
                iakpmgpoc: '7b36cb7b-29a2-4f5e-a810-929ab59d03d6',
                sentiment: 'Sentiment(polarity=0.4, subjectivity=0.7)',
            },
            {
                timestamp: '2019-11-20T04:00:57.2054049Z',
                resultCode: 200,
                duration: 766.1263,
                id: '|47cca9a-463f9dec2880da4e.f6036c3c_',
                question: 'What is the validity of a SAN?',
                answer: 'A SAN is valid until the end of the engagement and up to a maximum of three years. However, the approvers (typically the Sentinel Lead Partner and/or Conflicts Resolver) can restrict the validity of a SAN for a limited period.  A SAN for recurring engagements for a SEC audit client and its affiliates is valid for only one year.  A member firm\'s local policies may require a new SAN more frequently than every three years in certain circumstances.',
                score: 100,
                performanceBucket: '500ms-1sec',
                iakpmgpoc: '7b36cb7b-29a2-4f5e-a810-929ab59d03d6',
                sentiment: 'Sentiment(polarity=0.0, subjectivity=0.0)',
            },
            {
                timestamp: '2019-11-20T04:01:17.6080314Z',
                resultCode: 200,
                duration: 666.4441,
                id: '|47cca9c-463f9dec2880da4e.f6036c3d_',
                question: 'Hi',
                answer: 'Hello.',
                score: 100,
                performanceBucket: '500ms-1sec',
                iakpmgpoc: '7b36cb7b-29a2-4f5e-a810-929ab59d03d6',
                sentiment: 'Sentiment(polarity=0.0, subjectivity=0.0)',
            },
            {
                timestamp: '2019-11-20T04:01:27.2355092Z',
                resultCode: 200,
                duration: 370.8786,
                id: '|47cca9e-463f9dec2880da4e.f6036c3e_',
                question: 'What is SAN?',
                answer: 'Sentinel is a KPMG software that identifies independence approval requirements and potential conflicts of interest in respect of all proposed engagements from KPMG member firms. After entering the basic engagement information in the Sentinel Request, the tool routes the proposed engagements through a global approval process culminating in a Sentinel Approval Number (SAN) per engagement. It is essential to get a SAN before committing the firm to do an engagement.',
                score: 98,
                performanceBucket: '250ms-500ms',
                iakpmgpoc: '7b36cb7b-29a2-4f5e-a810-929ab59d03d6',
                sentiment: 'Sentiment(polarity=0.0, subjectivity=0.0)',
            },
            {
                timestamp: '2019-11-20T04:01:29.4705009Z',
                resultCode: 200,
                duration: 339.3856,
                id: '|47ccaa0-463f9dec2880da4e.f6036c3f_',
                question: 'what is SAN',
                answer: 'Sentinel is a KPMG software that identifies independence approval requirements and potential conflicts of interest in respect of all proposed engagements from KPMG member firms. After entering the basic engagement information in the Sentinel Request, the tool routes the proposed engagements through a global approval process culminating in a Sentinel Approval Number (SAN) per engagement. It is essential to get a SAN before committing the firm to do an engagement.',
                score: 98,
                performanceBucket: '250ms-500ms',
                iakpmgpoc: '7b36cb7b-29a2-4f5e-a810-929ab59d03d6',
                sentiment: 'Sentiment(polarity=0.0, subjectivity=0.0)',
            },
            {
                timestamp: '2019-11-20T04:02:06.3120378Z',
                resultCode: 200,
                duration: 597.0806,
                id: '|47ccaa2-463f9dec2880da4e.f6036c40_',
                question: 'what is SAN',
                answer: 'Sentinel is a KPMG software that identifies independence approval requirements and potential conflicts of interest in respect of all proposed engagements from KPMG member firms. After entering the basic engagement information in the Sentinel Request, the tool routes the proposed engagements through a global approval process culminating in a Sentinel Approval Number (SAN) per engagement. It is essential to get a SAN before committing the firm to do an engagement.',
                score: 98,
                performanceBucket: '500ms-1sec',
                iakpmgpoc: '7b36cb7b-29a2-4f5e-a810-929ab59d03d6',
                sentiment: 'Sentiment(polarity=0.0, subjectivity=0.0)',
            },
            {
                timestamp: '2019-11-20T04:02:09.9251735Z',
                resultCode: 200,
                duration: 446.4929,
                id: '|47ccaa4-463f9dec2880da4e.f6036c41_',
                question: 'What is validity',
                answer: 'A SAN is valid until the end of the engagement and up to a maximum of three years. However, the approvers (typically the Sentinel Lead Partner and/or Conflicts Resolver) can restrict the validity of a SAN for a limited period.  A SAN for recurring engagements for a SEC audit client and its affiliates is valid for only one year.  A member firm\'s local policies may require a new SAN more frequently than every three years in certain circumstances.',
                score: 95,
                performanceBucket: '250ms-500ms',
                iakpmgpoc: '7b36cb7b-29a2-4f5e-a810-929ab59d03d6',
                sentiment: 'Sentiment(polarity=0.0, subjectivity=0.0)',
            },
            {
                timestamp: '2019-11-20T04:02:16.3108706Z',
                resultCode: 200,
                duration: 629.2191,
                id: '|47ccaa6-463f9dec2880da4e.f6036c42_',
                question: 'Why to use SAN?',
                answer: 'Sentinel is a KPMG software that identifies independence approval requirements and potential conflicts of interest in respect of all proposed engagements from KPMG member firms. After entering the basic engagement information in the Sentinel Request, the tool routes the proposed engagements through a global approval process culminating in a Sentinel Approval Number (SAN) per engagement. It is essential to get a SAN before committing the firm to do an engagement.',
                score: 58.82,
                performanceBucket: '500ms-1sec',
                iakpmgpoc: '7b36cb7b-29a2-4f5e-a810-929ab59d03d6',
                sentiment: 'Sentiment(polarity=0.0, subjectivity=0.0)',
            },
            {
                timestamp: '2019-11-20T04:47:15.5859581Z',
                resultCode: 200,
                duration: 680.1966,
                id: '|47ccabf-463f9dec2880da4e.f6036c4f_',
                question: 'okay, can you ask questions to me?',
                answer: 'I\'m better at answering questions.',
                score: 37.75,
                performanceBucket: '500ms-1sec',
                iakpmgpoc: '7b36cb7b-29a2-4f5e-a810-929ab59d03d6',
                sentiment: 'Sentiment(polarity=0.5, subjectivity=0.5)',
            },
            {
                timestamp: '2019-11-20T04:47:33.1558267Z',
                resultCode: 200,
                duration: 526.9262,
                id: '|47ccac1-463f9dec2880da4e.f6036c50_',
                question: 'But you are not answering my questions',
                answer: 'Sorry about that.',
                score: 34.56,
                performanceBucket: '500ms-1sec',
                iakpmgpoc: '7b36cb7b-29a2-4f5e-a810-929ab59d03d6',
                sentiment: 'Sentiment(polarity=0.0, subjectivity=0.0)',
            },
            {
                timestamp: '2019-11-20T04:58:40.8084553Z',
                resultCode: 200,
                duration: 770.4765,
                id: '|47ccad6-463f9dec2880da4e.f6036c5b_',
                question: 'What is a GPU?',
                answer: 'This is what I do every day.',
                score: 7.9,
                performanceBucket: '500ms-1sec',
                iakpmgpoc: '7b36cb7b-29a2-4f5e-a810-929ab59d03d6',
                sentiment: 'Sentiment(polarity=0.0, subjectivity=0.0)',
            },
            {
                timestamp: '2019-11-20T04:59:03.8983508Z',
                resultCode: 200,
                duration: 687.5446,
                id: '|47ccad8-463f9dec2880da4e.f6036c5c_',
                question: 'What is a GUP?',
                answer: 'The Global Ultimate Parent (GUP) is the highest-tiered entity in a family tree in Sentinel. A Sentinel Tree typically consists of all entities that are ultimately controlled by the GUP or the GUP has significant influence.   For example, for all Microsoft Sentinel entities, the GUP will be Microsoft Corporation.',
                score: 100,
                performanceBucket: '500ms-1sec',
                iakpmgpoc: '7b36cb7b-29a2-4f5e-a810-929ab59d03d6',
                sentiment: 'Sentiment(polarity=0.0, subjectivity=0.0)',
            }
        ];
        this.dropdownMenu = [
            { value: 'sentinal', viewValue: 'Sentinal' },
            { value: 'gup', viewValue: 'GUP' },
            { value: 'none', viewValue: 'None' }
        ];
        this.scores = [
            { value: 'p', viewValue: 'P' },
            { value: 'all', viewValue: 'All' }
        ];
        this.allChats = this.chats;
    }
    filterChats(event) {
        if (event != null && event.value != null) {
            this.allChats = this.chats.filter(chat => {
                console.log(new Date(chat.timestamp).getTime());
                console.log(new Date(event.value).getTime());
                return new Date(chat.timestamp).getDate() === new Date(event.value).getDate();
            });
            console.log(this.allChats);
        }
        else {
            this.allChats = this.chats;
        }
    }
    filterWithScore() {
        const chats = this.allChats;
        if (this.defaultScore) {
            if (this.defaultScore === 'p') {
                this.allChats = chats.filter(chat => chat.score <= 50);
            }
            if (this.defaultScore === 'all') {
                this.allChats = this.chats;
            }
        }
    }
    saveTheData() {
        this._snackBar.open('Saved!', 'Close');
    }
    removeFilter() {
        this.datePickerValue = undefined;
        this.selectedDate = null;
        this.filterChats(null);
    }
};
AppComponent.ctorParameters = () => [
    { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./material.module */ "./src/app/material.module.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");







let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
            _material_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__["FlexLayoutModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/material.module.ts":
/*!************************************!*\
  !*** ./src/app/material.module.ts ***!
  \************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/a11y */ "./node_modules/@angular/cdk/esm2015/a11y.js");
/* harmony import */ var _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/stepper */ "./node_modules/@angular/cdk/esm2015/stepper.js");
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/table */ "./node_modules/@angular/cdk/esm2015/table.js");
/* harmony import */ var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/tree */ "./node_modules/@angular/cdk/esm2015/tree.js");
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/portal */ "./node_modules/@angular/cdk/esm2015/portal.js");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/esm2015/scrolling.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");











let MaterialModule = class MaterialModule {
};
MaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [],
        imports: [
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
            _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_4__["A11yModule"],
            _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_5__["CdkStepperModule"],
            _angular_cdk_table__WEBPACK_IMPORTED_MODULE_6__["CdkTableModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_7__["CdkTreeModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatFormFieldModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatAutocompleteModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatBadgeModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatBottomSheetModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonToggleModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCheckboxModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatChipsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatStepperModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDatepickerModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDividerModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatExpansionModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatGridListModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatListModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatMenuModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatNativeDateModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginatorModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatProgressBarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatProgressSpinnerModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatRadioModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatRippleModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSelectModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSidenavModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSliderModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSlideToggleModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSortModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTabsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTooltipModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTreeModule"],
            _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_8__["PortalModule"],
            _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_9__["ScrollingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"]
        ],
        exports: [
            _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_4__["A11yModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"],
            _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_5__["CdkStepperModule"],
            _angular_cdk_table__WEBPACK_IMPORTED_MODULE_6__["CdkTableModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_7__["CdkTreeModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatFormFieldModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatAutocompleteModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatBadgeModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatBottomSheetModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonToggleModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCheckboxModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatChipsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatStepperModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDatepickerModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDividerModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatExpansionModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatGridListModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatListModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatMenuModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatNativeDateModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginatorModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatProgressBarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatProgressSpinnerModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatRadioModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatRippleModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSelectModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSidenavModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSliderModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSlideToggleModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSortModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTabsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTooltipModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTreeModule"],
            _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_8__["PortalModule"],
            _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_9__["ScrollingModule"]
        ],
        providers: [
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDatepickerModule"],
        ]
    })
], MaterialModule);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/abhishek/iris/botChat/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map