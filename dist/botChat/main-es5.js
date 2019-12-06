(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
        /***/ "./$$_lazy_route_resource lazy recursive": 
        /*!******************************************************!*\
          !*** ./$$_lazy_route_resource lazy namespace object ***!
          \******************************************************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            function webpackEmptyAsyncContext(req) {
                // Here Promise.resolve().then() is used instead of new Promise() to prevent
                // uncaught exception popping up in devtools
                return Promise.resolve().then(function () {
                    var e = new Error("Cannot find module '" + req + "'");
                    e.code = 'MODULE_NOT_FOUND';
                    throw e;
                });
            }
            webpackEmptyAsyncContext.keys = function () { return []; };
            webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
            module.exports = webpackEmptyAsyncContext;
            webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html": 
        /*!**************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
          \**************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div>\n\t<mat-tab-group mat-align-tabs=\"center\" color=\"primary\" backgroundColor=\"primary\" class=\"mat-elevation-20\">\n\t\t<mat-tab label=\"DS Dashboard\">\n\t\t\t<mat-tab-group mat-align-tabs=\"center\" color=\"primary\" class=\"no-shadow\">\n\t\t\t\t<mat-tab label=\"Intent Mapper\">\n\t\t\t\t\t<div fxFlex>\n\t\t\t\t\t\t<div fxLayout=\"row\" fxLayoutAlign=\"space-between center\" class=\"padding-0-20\" style=\"height: 80px; background:#e2e2e2;\">\n\t\t\t\t\t\t\t<h2 class=\"white mat-title\" style=\"margin-bottom: 1px;visibility: hidden\">Intent Mapper</h2>\n\t\t\t\t\t\t\t<div fxLayout=\"row\" fxLayoutAlign=\"start center\" fxLayoutGap=\"20px\">\n\t\t\t\t\t\t\t\t<mat-form-field color=\"primary\" appearance=\"outline\">\n\t\t\t\t\t\t\t\t\t<input matInput [matDatepicker]=\"picker\" placeholder=\"Choose a date\" (dateInput)=\"filter()\" [(ngModel)]=\"datePickerValue\"\n\t\t\t\t\t\t\t\t\t/>\n\t\t\t\t\t\t\t\t\t<mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n\t\t\t\t\t\t\t\t\t<mat-datepicker #picker></mat-datepicker>\n\t\t\t\t\t\t\t\t</mat-form-field>\n\t\t\t\t\t\t\t\t<mat-form-field color=\"primary\" appearance=\"outline\">\n\t\t\t\t\t\t\t\t\t<mat-label>Score Level</mat-label>\n\t\t\t\t\t\t\t\t\t<mat-select [(value)]=\"defaultScore\" (selectionChange)=\"filter()\">\n\t\t\t\t\t\t\t\t\t\t<mat-option *ngFor=\"let score of scores\" [value]=\"score.value\">\n\t\t\t\t\t\t\t\t\t\t\t{{ score.viewValue }}\n\t\t\t\t\t\t\t\t\t\t</mat-option>\n\t\t\t\t\t\t\t\t\t</mat-select>\n\t\t\t\t\t\t\t\t</mat-form-field>\n\t\t\t\t\t\t\t\t<!-- <button mat-icon-button (click)=\"downloadData()\">\n\t\t\t\t\t\t\t\t\t\t\t\t<mat-icon>cloud_download</mat-icon>\n\t\t\t\t\t\t\t\t\t\t\t</button> -->\n\t\t\t\t\t\t\t\t<button mat-mini-fab (click)=\"downloadData()\" class=\"downloadbutton-style\" color=\"primary\">\n\t\t\t\t\t\t\t\t\t<mat-icon>cloud_download</mat-icon>\n\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<mat-divider></mat-divider>\n\t\t\t\t\t\t<div fxLayout=\"row wrap\" fxLayoutAlign=\"space-between start\" class=\"padding-20\">\n\t\t\t\t\t\t\t<mat-accordion style=\"width: 300px; margin: 20px 0; background: #ffffff; border-radius: 8px;\" *ngFor=\"let chat of allChats\"\n\t\t\t\t\t\t\t class=\"mat-elevation-z0\">\n\t\t\t\t\t\t\t\t<mat-expansion-panel>\n\t\t\t\t\t\t\t\t\t<mat-expansion-panel-header>\n\t\t\t\t\t\t\t\t\t\t<mat-panel-title>\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"type-badge red\" *ngIf=\"chat.score <= 50\">P</span>\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"type-badge green\" *ngIf=\"chat.score > 50\">OK</span>\n\t\t\t\t\t\t\t\t\t\t</mat-panel-title>\n\t\t\t\t\t\t\t\t\t\t<mat-panel-description> Avg. chat score: {{ chat.score }} </mat-panel-description>\n\t\t\t\t\t\t\t\t\t</mat-expansion-panel-header>\n\t\t\t\t\t\t\t\t\t<div class=\"grey-background\">\n\t\t\t\t\t\t\t\t\t\t<div style=\"max-height: 300px; overflow: auto; padding-left: 24px;\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"padding-vertical-5\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"mat-body-2\">Date:</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"mat-caption\">{{ chat.timestamp | date }}</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<mat-divider></mat-divider>\n\t\t\t\t\t\t\t\t\t\t\t<div fxLayout=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div fxFlex=\"90\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"padding-vertical-5\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"mat-body-2\">Question:</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"mat-caption\">{{ chat.question }}</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<mat-divider></mat-divider>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"padding-vertical-5\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"mat-body-2\">Answer:</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"mat-caption\">{{ chat.answer }}</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<button mat-icon-button [matMenuTriggerFor]=\"menu\" #menuTrigger=\"matMenuTrigger\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<mat-icon>chevron_right</mat-icon>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<mat-menu #menu=\"matMenu\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div (click)=\"$event.stopPropagation()\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p style=\"padding: 0 16px; font-weight: 700;\">Add to Intent</p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<mat-divider></mat-divider>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div style=\"padding: 10px 16px;\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div style=\"padding: 7px;\">{{ chat.question }}</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div fxLayout=\"row\" fxLayoutAlign=\"start center\" fxLayoutGap=\"5px\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<mat-form-field appearance=\"outline\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<mat-label>Select Intent</mat-label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<mat-select [(ngModel)]=\"chat.intent\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<mat-option *ngFor=\"let intent of dropdownMenu\" [value]=\"intent.value\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t{{ intent.viewValue }}\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</mat-option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</mat-select>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</mat-form-field>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button mat-icon-button (click)=\"saveTheData(chat.id); menuTrigger.closeMenu()\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<mat-icon>save</mat-icon>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</mat-menu>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</mat-expansion-panel>\n\t\t\t\t\t\t\t</mat-accordion>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</mat-tab>\n\t\t\t\t<mat-tab label=\"Dashboard\">\n\t\t\t\t\t<iframe width=\"100%\" class=\"height-dashboard\" [src]=\"subdashboard.url | safe\" frameborder=\"0\" allowFullScreen=\"true\"></iframe>\n\t\t\t\t</mat-tab>\n\t\t\t</mat-tab-group>\n\t\t</mat-tab>\n\t\t<mat-tab label=\"Management Dashboard\">\n\t\t\t<iframe width=\"100%\" class=\"height-dashboard\" [src]=\"dashboard.url | safe\" frameborder=\"0\" allowFullScreen=\"true\"></iframe>\n\t\t</mat-tab>\n\t</mat-tab-group>\n</div>\n");
            /***/ 
        }),
        /***/ "./node_modules/tslib/tslib.es6.js": 
        /*!*****************************************!*\
          !*** ./node_modules/tslib/tslib.es6.js ***!
          \*****************************************/
        /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function () { return __extends; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function () { return __assign; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function () { return __rest; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function () { return __decorate; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function () { return __param; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function () { return __metadata; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function () { return __awaiter; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function () { return __generator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function () { return __exportStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function () { return __values; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function () { return __read; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function () { return __spread; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () { return __spreadArrays; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function () { return __await; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () { return __asyncGenerator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () { return __asyncDelegator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function () { return __asyncValues; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () { return __makeTemplateObject; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function () { return __importStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function () { return __importDefault; });
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
            var extendStatics = function (d, b) {
                extendStatics = Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                    function (d, b) { for (var p in b)
                        if (b.hasOwnProperty(p))
                            d[p] = b[p]; };
                return extendStatics(d, b);
            };
            function __extends(d, b) {
                extendStatics(d, b);
                function __() { this.constructor = d; }
                d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
            }
            var __assign = function () {
                __assign = Object.assign || function __assign(t) {
                    for (var s, i = 1, n = arguments.length; i < n; i++) {
                        s = arguments[i];
                        for (var p in s)
                            if (Object.prototype.hasOwnProperty.call(s, p))
                                t[p] = s[p];
                    }
                    return t;
                };
                return __assign.apply(this, arguments);
            };
            function __rest(s, e) {
                var t = {};
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
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
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
                    r = Reflect.decorate(decorators, target, key, desc);
                else
                    for (var i = decorators.length - 1; i >= 0; i--)
                        if (d = decorators[i])
                            r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                return c > 3 && r && Object.defineProperty(target, key, r), r;
            }
            function __param(paramIndex, decorator) {
                return function (target, key) { decorator(target, key, paramIndex); };
            }
            function __metadata(metadataKey, metadataValue) {
                if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
                    return Reflect.metadata(metadataKey, metadataValue);
            }
            function __awaiter(thisArg, _arguments, P, generator) {
                return new (P || (P = Promise))(function (resolve, reject) {
                    function fulfilled(value) { try {
                        step(generator.next(value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function rejected(value) { try {
                        step(generator["throw"](value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
                    step((generator = generator.apply(thisArg, _arguments || [])).next());
                });
            }
            function __generator(thisArg, body) {
                var _ = { label: 0, sent: function () { if (t[0] & 1)
                        throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
                return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
                function verb(n) { return function (v) { return step([n, v]); }; }
                function step(op) {
                    if (f)
                        throw new TypeError("Generator is already executing.");
                    while (_)
                        try {
                            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                                return t;
                            if (y = 0, t)
                                op = [op[0] & 2, t.value];
                            switch (op[0]) {
                                case 0:
                                case 1:
                                    t = op;
                                    break;
                                case 4:
                                    _.label++;
                                    return { value: op[1], done: false };
                                case 5:
                                    _.label++;
                                    y = op[1];
                                    op = [0];
                                    continue;
                                case 7:
                                    op = _.ops.pop();
                                    _.trys.pop();
                                    continue;
                                default:
                                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                        _ = 0;
                                        continue;
                                    }
                                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                        _.label = op[1];
                                        break;
                                    }
                                    if (op[0] === 6 && _.label < t[1]) {
                                        _.label = t[1];
                                        t = op;
                                        break;
                                    }
                                    if (t && _.label < t[2]) {
                                        _.label = t[2];
                                        _.ops.push(op);
                                        break;
                                    }
                                    if (t[2])
                                        _.ops.pop();
                                    _.trys.pop();
                                    continue;
                            }
                            op = body.call(thisArg, _);
                        }
                        catch (e) {
                            op = [6, e];
                            y = 0;
                        }
                        finally {
                            f = t = 0;
                        }
                    if (op[0] & 5)
                        throw op[1];
                    return { value: op[0] ? op[1] : void 0, done: true };
                }
            }
            function __exportStar(m, exports) {
                for (var p in m)
                    if (!exports.hasOwnProperty(p))
                        exports[p] = m[p];
            }
            function __values(o) {
                var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
                if (m)
                    return m.call(o);
                return {
                    next: function () {
                        if (o && i >= o.length)
                            o = void 0;
                        return { value: o && o[i++], done: !o };
                    }
                };
            }
            function __read(o, n) {
                var m = typeof Symbol === "function" && o[Symbol.iterator];
                if (!m)
                    return o;
                var i = m.call(o), r, ar = [], e;
                try {
                    while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                        ar.push(r.value);
                }
                catch (error) {
                    e = { error: error };
                }
                finally {
                    try {
                        if (r && !r.done && (m = i["return"]))
                            m.call(i);
                    }
                    finally {
                        if (e)
                            throw e.error;
                    }
                }
                return ar;
            }
            function __spread() {
                for (var ar = [], i = 0; i < arguments.length; i++)
                    ar = ar.concat(__read(arguments[i]));
                return ar;
            }
            function __spreadArrays() {
                for (var s = 0, i = 0, il = arguments.length; i < il; i++)
                    s += arguments[i].length;
                for (var r = Array(s), k = 0, i = 0; i < il; i++)
                    for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                        r[k] = a[j];
                return r;
            }
            ;
            function __await(v) {
                return this instanceof __await ? (this.v = v, this) : new __await(v);
            }
            function __asyncGenerator(thisArg, _arguments, generator) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var g = generator.apply(thisArg, _arguments || []), i, q = [];
                return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
                function verb(n) { if (g[n])
                    i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
                function resume(n, v) { try {
                    step(g[n](v));
                }
                catch (e) {
                    settle(q[0][3], e);
                } }
                function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
                function fulfill(value) { resume("next", value); }
                function reject(value) { resume("throw", value); }
                function settle(f, v) { if (f(v), q.shift(), q.length)
                    resume(q[0][0], q[0][1]); }
            }
            function __asyncDelegator(o) {
                var i, p;
                return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
                function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
            }
            function __asyncValues(o) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var m = o[Symbol.asyncIterator], i;
                return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
                function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
                function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
            }
            function __makeTemplateObject(cooked, raw) {
                if (Object.defineProperty) {
                    Object.defineProperty(cooked, "raw", { value: raw });
                }
                else {
                    cooked.raw = raw;
                }
                return cooked;
            }
            ;
            function __importStar(mod) {
                if (mod && mod.__esModule)
                    return mod;
                var result = {};
                if (mod != null)
                    for (var k in mod)
                        if (Object.hasOwnProperty.call(mod, k))
                            result[k] = mod[k];
                result.default = mod;
                return result;
            }
            function __importDefault(mod) {
                return (mod && mod.__esModule) ? mod : { default: mod };
            }
            /***/ 
        }),
        /***/ "./src/app/app.component.scss": 
        /*!************************************!*\
          !*** ./src/app/app.component.scss ***!
          \************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".padding-20 {\n  padding: 20px;\n}\n\n.type-badge {\n  font-size: 12px;\n  color: #ffffffff;\n  padding: 2px 4px;\n  min-width: 14px;\n  border-radius: 46%;\n  text-align: center;\n  margin-left: 5px;\n}\n\n.background-white {\n  background: #ffffff !important;\n}\n\n.white {\n  color: white;\n}\n\n::ng-deep .mat-tab-label-container {\n  background: #3f51b5 !important;\n}\n\n.red {\n  background: red;\n}\n\n.green {\n  background: green;\n}\n\n.grey-background {\n  background: rgba(0, 0, 0, 0.04);\n}\n\n.padding-vertical-5 {\n  padding: 5px 0;\n}\n\n::ng-deep .mat-expansion-panel-body {\n  padding: 0 !important;\n}\n\n::ng-deep .mat-form-field-wrapper {\n  margin: 0 !important;\n  padding: 0 !important;\n}\n\n::ng-deep .mat-expansion-panel {\n  box-shadow: none !important;\n  border: 1px solid #dadce0;\n}\n\n::ng-deep .mat-accordion {\n  box-shadow: 5px 5px 1px 0 rgba(46, 61, 73, 0.2);\n}\n\n::ng-deep .mat-accordion:hover {\n  box-shadow: 2px 4px 4px 0 rgba(46, 61, 73, 0.2);\n}\n\n.height-dashboard {\n  height: calc(100vh - 53px);\n}\n\n.padding-0-20 {\n  padding: 0 20px;\n}\n\n.mainBoxStyle {\n  border-radius: 5px;\n  border: 1px solid #d0c1c1;\n  background: #e2e2e2;\n  margin: 30px 10px;\n}\n\n::ng-deep .mat-tab-header {\n  box-shadow: 0 3px 5px -1px rgba(0, 0, 0, 0.2), 0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12);\n  z-index: 3;\n}\n\n::ng-deep .no-shadow .mat-tab-header {\n  box-shadow: none;\n}\n\n::ng-deep .mat-form-field-flex > .mat-form-field-infix {\n  padding: 0.6em 0px !important;\n}\n\n::ng-deep .mat-form-field-appearance-outline .mat-form-field-outline-thick {\n  color: #fff;\n}\n\n::ng-deep .mat-form-field-appearance-outline .mat-form-field-outline {\n  color: black;\n}\n\n::ng-deep .mat-form-field-appearance-outline.mat-focused .mat-form-field-outline-thick {\n  color: black !important;\n}\n\n::ng-deep .mat-focused .mat-form-field-placeholder {\n  color: black;\n}\n\n.downloadbutton-style {\n  margin-bottom: -75px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FiaGlzaGVrL2lyaXMvYm90Q2hhdC9zcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0MsYUFBQTtBQ0NEOztBREVBO0VBQ0MsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FDQ0Q7O0FERUE7RUFDQyw4QkFBQTtBQ0NEOztBREVBO0VBQ0MsWUFBQTtBQ0NEOztBREVBO0VBQ0MsOEJBQUE7QUNDRDs7QURHQTtFQUNDLGVBQUE7QUNBRDs7QURHQTtFQUNDLGlCQUFBO0FDQUQ7O0FER0E7RUFDQywrQkFBQTtBQ0FEOztBREdBO0VBQ0MsY0FBQTtBQ0FEOztBREdBO0VBQ0MscUJBQUE7QUNBRDs7QURHQTtFQUNDLG9CQUFBO0VBQ0EscUJBQUE7QUNBRDs7QURHQTtFQUNDLDJCQUFBO0VBQ0EseUJBQUE7QUNBRDs7QURPQTtFQUNDLCtDQUFBO0FDSkQ7O0FET0E7RUFDQywrQ0FBQTtBQ0pEOztBRE9BO0VBQ0MsMEJBQUE7QUNKRDs7QURPQTtFQUNDLGVBQUE7QUNKRDs7QURPQTtFQUNDLGtCQUFBO0VBQ0cseUJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FDSko7O0FET0E7RUFDQyxpSEFBQTtFQUNBLFVBQUE7QUNKRDs7QURPQTtFQUNDLGdCQUFBO0FDSkQ7O0FETUE7RUFBMEQsNkJBQUE7QUNGMUQ7O0FER0E7RUFDSSxXQUFBO0FDQUo7O0FER0E7RUFDRSxZQUFBO0FDQUY7O0FESUE7RUFDSSx1QkFBQTtBQ0RKOztBRElBO0VBQ0MsWUFBQTtBQ0REOztBREdBO0VBQ0Msb0JBQUE7QUNBRCIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wYWRkaW5nLTIwIHtcblx0cGFkZGluZzogMjBweDtcbn1cblxuLnR5cGUtYmFkZ2Uge1xuXHRmb250LXNpemU6IDEycHg7XG5cdGNvbG9yOiAjZmZmZmZmZmY7XG5cdHBhZGRpbmc6IDJweCA0cHg7XG5cdG1pbi13aWR0aDogMTRweDtcblx0Ym9yZGVyLXJhZGl1czogNDYlO1xuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdG1hcmdpbi1sZWZ0OiA1cHg7XG59XG5cbi5iYWNrZ3JvdW5kLXdoaXRlIHtcblx0YmFja2dyb3VuZDogI2ZmZmZmZiAhaW1wb3J0YW50O1xufVxuXG4ud2hpdGUge1xuXHRjb2xvcjogd2hpdGU7XG59XG5cbjo6bmctZGVlcCAubWF0LXRhYi1sYWJlbC1jb250YWluZXIge1xuXHRiYWNrZ3JvdW5kOiAjM2Y1MWI1ICFpbXBvcnRhbnQ7XG5cdC8vIGJveC1zaGFkb3c6IDAgM3B4IDVweCAtMXB4IHJnYmEoMCwwLDAsLjIpLCAwIDZweCAxMHB4IDAgcmdiYSgwLDAsMCwuMTQpLCAwIDFweCAxOHB4IDAgcmdiYSgwLDAsMCwuMTIpICFpbXBvcnRhbnQ7XG59XG5cbi5yZWQge1xuXHRiYWNrZ3JvdW5kOiByZWQ7XG59XG5cbi5ncmVlbiB7XG5cdGJhY2tncm91bmQ6IGdyZWVuO1xufVxuXG4uZ3JleS1iYWNrZ3JvdW5kIHtcblx0YmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjA0KTtcbn1cblxuLnBhZGRpbmctdmVydGljYWwtNSB7XG5cdHBhZGRpbmc6IDVweCAwO1xufVxuXG46Om5nLWRlZXAgLm1hdC1leHBhbnNpb24tcGFuZWwtYm9keSB7XG5cdHBhZGRpbmc6IDAgIWltcG9ydGFudDtcbn1cblxuOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC13cmFwcGVyIHtcblx0bWFyZ2luOiAwICFpbXBvcnRhbnQ7XG5cdHBhZGRpbmc6IDAgIWltcG9ydGFudDtcbn1cblxuOjpuZy1kZWVwIC5tYXQtZXhwYW5zaW9uLXBhbmVsIHtcblx0Ym94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xuXHRib3JkZXI6IDFweCBzb2xpZCAjZGFkY2UwO1xufVxuXG46Om5nLWRlZXAgLm1hdC1leHBhbnNpb24tcGFuZWw6aG92ZXIge1xuXHQvLyBib3gtc2hhZG93OiAycHggM3B4IDE1cHggcmdiYSgwLDAsMCwwLjA2KSAhaW1wb3J0YW50O1xufVxuXG46Om5nLWRlZXAgLm1hdC1hY2NvcmRpb24ge1xuXHRib3gtc2hhZG93OiA1cHggNXB4IDFweCAwIHJnYmEoNDYsIDYxLCA3MywgMC4yKTtcbn1cblxuOjpuZy1kZWVwIC5tYXQtYWNjb3JkaW9uOmhvdmVyIHtcblx0Ym94LXNoYWRvdzogMnB4IDRweCA0cHggMCByZ2JhKDQ2LCA2MSwgNzMsIDAuMik7XG59XG5cbi5oZWlnaHQtZGFzaGJvYXJkIHtcblx0aGVpZ2h0OiBjYWxjKDEwMHZoIC0gNTNweCk7XG59XG5cbi5wYWRkaW5nLTAtMjAge1xuXHRwYWRkaW5nOiAwIDIwcHg7XG59XG5cbi5tYWluQm94U3R5bGV7XG5cdGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZDBjMWMxO1xuICAgIGJhY2tncm91bmQ6ICNlMmUyZTI7XG4gICAgbWFyZ2luOiAzMHB4IDEwcHg7XG59XG5cbjo6bmctZGVlcCAubWF0LXRhYi1oZWFkZXJ7XG5cdGJveC1zaGFkb3c6IDAgM3B4IDVweCAtMXB4IHJnYmEoMCwwLDAsLjIpLCAwIDZweCAxMHB4IDAgcmdiYSgwLDAsMCwuMTQpLCAwIDFweCAxOHB4IDAgcmdiYSgwLDAsMCwuMTIpO1xuXHR6LWluZGV4OiAzO1xufVxuXG46Om5nLWRlZXAgLm5vLXNoYWRvdyAubWF0LXRhYi1oZWFkZXIge1xuXHRib3gtc2hhZG93OiBub25lO1xufVxuOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC1mbGV4ID4gLm1hdC1mb3JtLWZpZWxkLWluZml4IHsgIHBhZGRpbmc6IDAuNmVtIDBweCAhaW1wb3J0YW50O31cbjo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lIC5tYXQtZm9ybS1maWVsZC1vdXRsaW5lLXRoaWNrIHtcbiAgICBjb2xvcjogI2ZmZjtcbn1cblxuOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUgLm1hdC1mb3JtLWZpZWxkLW91dGxpbmUge1xuICBjb2xvcjogYmxhY2s7XG59XG5cbi8vbWF0LWlucHV0IGZvY3VzZWQgY29sb3Jcbjo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lLm1hdC1mb2N1c2VkIC5tYXQtZm9ybS1maWVsZC1vdXRsaW5lLXRoaWNrIHtcbiAgICBjb2xvcjogYmxhY2shaW1wb3J0YW50O1xufVxuXG46Om5nLWRlZXAgLm1hdC1mb2N1c2VkIC5tYXQtZm9ybS1maWVsZC1wbGFjZWhvbGRlcntcbiBjb2xvcjogYmxhY2tcbn1cbi5kb3dubG9hZGJ1dHRvbi1zdHlsZXtcblx0bWFyZ2luLWJvdHRvbTogLTc1cHg7XG59OyBcbiIsIi5wYWRkaW5nLTIwIHtcbiAgcGFkZGluZzogMjBweDtcbn1cblxuLnR5cGUtYmFkZ2Uge1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiAjZmZmZmZmZmY7XG4gIHBhZGRpbmc6IDJweCA0cHg7XG4gIG1pbi13aWR0aDogMTRweDtcbiAgYm9yZGVyLXJhZGl1czogNDYlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG59XG5cbi5iYWNrZ3JvdW5kLXdoaXRlIHtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZiAhaW1wb3J0YW50O1xufVxuXG4ud2hpdGUge1xuICBjb2xvcjogd2hpdGU7XG59XG5cbjo6bmctZGVlcCAubWF0LXRhYi1sYWJlbC1jb250YWluZXIge1xuICBiYWNrZ3JvdW5kOiAjM2Y1MWI1ICFpbXBvcnRhbnQ7XG59XG5cbi5yZWQge1xuICBiYWNrZ3JvdW5kOiByZWQ7XG59XG5cbi5ncmVlbiB7XG4gIGJhY2tncm91bmQ6IGdyZWVuO1xufVxuXG4uZ3JleS1iYWNrZ3JvdW5kIHtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjA0KTtcbn1cblxuLnBhZGRpbmctdmVydGljYWwtNSB7XG4gIHBhZGRpbmc6IDVweCAwO1xufVxuXG46Om5nLWRlZXAgLm1hdC1leHBhbnNpb24tcGFuZWwtYm9keSB7XG4gIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcbn1cblxuOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC13cmFwcGVyIHtcbiAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcbn1cblxuOjpuZy1kZWVwIC5tYXQtZXhwYW5zaW9uLXBhbmVsIHtcbiAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xuICBib3JkZXI6IDFweCBzb2xpZCAjZGFkY2UwO1xufVxuXG46Om5nLWRlZXAgLm1hdC1hY2NvcmRpb24ge1xuICBib3gtc2hhZG93OiA1cHggNXB4IDFweCAwIHJnYmEoNDYsIDYxLCA3MywgMC4yKTtcbn1cblxuOjpuZy1kZWVwIC5tYXQtYWNjb3JkaW9uOmhvdmVyIHtcbiAgYm94LXNoYWRvdzogMnB4IDRweCA0cHggMCByZ2JhKDQ2LCA2MSwgNzMsIDAuMik7XG59XG5cbi5oZWlnaHQtZGFzaGJvYXJkIHtcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNTNweCk7XG59XG5cbi5wYWRkaW5nLTAtMjAge1xuICBwYWRkaW5nOiAwIDIwcHg7XG59XG5cbi5tYWluQm94U3R5bGUge1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkMGMxYzE7XG4gIGJhY2tncm91bmQ6ICNlMmUyZTI7XG4gIG1hcmdpbjogMzBweCAxMHB4O1xufVxuXG46Om5nLWRlZXAgLm1hdC10YWItaGVhZGVyIHtcbiAgYm94LXNoYWRvdzogMCAzcHggNXB4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDZweCAxMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE0KSwgMCAxcHggMThweCAwIHJnYmEoMCwgMCwgMCwgMC4xMik7XG4gIHotaW5kZXg6IDM7XG59XG5cbjo6bmctZGVlcCAubm8tc2hhZG93IC5tYXQtdGFiLWhlYWRlciB7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG59XG5cbjo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtZmxleCA+IC5tYXQtZm9ybS1maWVsZC1pbmZpeCB7XG4gIHBhZGRpbmc6IDAuNmVtIDBweCAhaW1wb3J0YW50O1xufVxuXG46Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZSAubWF0LWZvcm0tZmllbGQtb3V0bGluZS10aGljayB7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG46Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZSAubWF0LWZvcm0tZmllbGQtb3V0bGluZSB7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUubWF0LWZvY3VzZWQgLm1hdC1mb3JtLWZpZWxkLW91dGxpbmUtdGhpY2sge1xuICBjb2xvcjogYmxhY2sgIWltcG9ydGFudDtcbn1cblxuOjpuZy1kZWVwIC5tYXQtZm9jdXNlZCAubWF0LWZvcm0tZmllbGQtcGxhY2Vob2xkZXIge1xuICBjb2xvcjogYmxhY2s7XG59XG5cbi5kb3dubG9hZGJ1dHRvbi1zdHlsZSB7XG4gIG1hcmdpbi1ib3R0b206IC03NXB4O1xufSJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/app.component.ts": 
        /*!**********************************!*\
          !*** ./src/app/app.component.ts ***!
          \**********************************/
        /*! exports provided: AppComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function () { return AppComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm2015/snack-bar.js");
            /* harmony import */ var _assets_chats_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/chats.json */ "./src/assets/chats.json");
            var _assets_chats_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/ __webpack_require__.t(/*! ../assets/chats.json */ "./src/assets/chats.json", 1);
            /* harmony import */ var ngx_filesaver__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-filesaver */ "./node_modules/ngx-filesaver/fesm2015/ngx-filesaver.js");
            var AppComponent = /** @class */ (function () {
                function AppComponent(_snackBar, _FileSaverService) {
                    this._snackBar = _snackBar;
                    this._FileSaverService = _FileSaverService;
                    this.selectedDate = null;
                    this.datePickerValue = null;
                    this.defaultScore = null;
                    this.chats = _assets_chats_json__WEBPACK_IMPORTED_MODULE_3__;
                    this.allChats = this.chats;
                    this.dropdownMenu = [
                        { value: 'sentinal', viewValue: 'Sentinal' },
                        { value: 'gup', viewValue: 'GUP' },
                        { value: 'san-validity', viewValue: 'San validity' },
                        { value: 'san-engagement', viewValue: 'San engagement' },
                        { value: 'greetings', viewValue: 'Greetings' }
                    ];
                    this.scores = [
                        { value: 'p', viewValue: 'P' },
                        { value: 'all', viewValue: 'All' }
                    ];
                    this.dashboard = {
                        name: 'Management View',
                        // url: 'https://app.powerbi.com/reportEmbed?reportId=085fbb23-24ee-4b31-82e0-d784713b319f&autoAuth=true&ctid=54f1c50c-e960-4359-94fa-e790e17dcfb4&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly93YWJpLWluZGlhLWNlbnRyYWwtYS1wcmltYXJ5LXJlZGlyZWN0LmFuYWx5c2lzLndpbmRvd3MubmV0LyJ9'
                        url: 'https://app.powerbi.com/reportEmbed?reportId=085fbb23-24ee-4b31-82e0-d784713b319f&autoAuth=true&ctid=54f1c50c-e960-4359-94fa-e790e17dcfb4&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly93YWJpLWluZGlhLWNlbnRyYWwtYS1wcmltYXJ5LXJlZGlyZWN0LmFuYWx5c2lzLndpbmRvd3MubmV0LyJ9'
                    };
                    this.subdashboard = {
                        name: 'Dashboard View',
                        // url: 'https://app.powerbi.com/reportEmbed?reportId=085fbb23-24ee-4b31-82e0-d784713b319f&autoAuth=true&ctid=54f1c50c-e960-4359-94fa-e790e17dcfb4&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly93YWJpLWluZGlhLWNlbnRyYWwtYS1wcmltYXJ5LXJlZGlyZWN0LmFuYWx5c2lzLndpbmRvd3MubmV0LyJ9'
                        url: 'https://app.powerbi.com/reportEmbed?reportId=92edb2bb-4709-48a0-ae9f-c52ab713b4be&autoAuth=true&ctid=54f1c50c-e960-4359-94fa-e790e17dcfb4&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly93YWJpLWluZGlhLWNlbnRyYWwtYS1wcmltYXJ5LXJlZGlyZWN0LmFuYWx5c2lzLndpbmRvd3MubmV0LyJ9'
                    };
                    // azureDashboardLink = 'https://portal.azure.com/#@ssaadminssainfosystems.onmicrosoft.com/dashboard/arm/subscriptions/401e0ead-f474-4d6a-a107-b970d52fd8cc/resourcegroups/ia_resourcdgroup/providers/microsoft.portal/dashboards/f358923d-747c-4eff-a0a8-252356c6b8a7-dashboard';
                    this.azureDashboardLink = 'http://stackoverflow.com';
                }
                AppComponent.prototype.addIntent = function (chatId, intentValue) {
                    this.chats
                        .filter(function (chat) { return chat.id === chatId; })
                        .map(function (chat) { return (Object.assign({}, chat, { intent: intentValue })); });
                };
                AppComponent.prototype.downloadData = function () {
                    var fileName = "chats.json";
                    var fileType = this._FileSaverService.genType(fileName);
                    var txtBlob = new Blob([JSON.stringify(this.chats)], { type: fileType });
                    this._FileSaverService.save(txtBlob, fileName);
                };
                AppComponent.prototype.filterWithDate = function (chats, dateValue) {
                    if (dateValue != null) {
                        return chats.filter(function (chat) {
                            return new Date(chat.timestamp).getDate() === new Date(dateValue).getDate();
                        });
                    }
                    else {
                        return chats;
                    }
                };
                AppComponent.prototype.filterWithScore = function (chats, score) {
                    if (score) {
                        if (score === 'p') {
                            return chats.filter(function (chat) { return chat.score <= 50; });
                        }
                        if (score === 'all') {
                            return chats;
                        }
                    }
                };
                AppComponent.prototype.filter = function () {
                    var newChats = this.chats;
                    if (this.datePickerValue != null && this.defaultScore != null) {
                        newChats = this.filterWithDate(newChats, this.datePickerValue);
                        newChats = this.filterWithScore(newChats, this.defaultScore);
                    }
                    else if (this.datePickerValue != null) {
                        newChats = this.filterWithDate(newChats, this.datePickerValue);
                    }
                    else if (this.defaultScore != null) {
                        newChats = this.filterWithScore(newChats, this.defaultScore);
                    }
                    this.allChats = newChats;
                };
                AppComponent.prototype.saveTheData = function (chatId, intentValue) {
                    this.addIntent(chatId, intentValue);
                    this._snackBar.open('Saved!', 'Close', {
                        duration: 500,
                    });
                };
                AppComponent.prototype.removeFilter = function () {
                    this.datePickerValue = undefined;
                    this.selectedDate = null;
                    this.allChats = this.chats;
                };
                return AppComponent;
            }());
            AppComponent.ctorParameters = function () { return [
                { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"] },
                { type: ngx_filesaver__WEBPACK_IMPORTED_MODULE_4__["FileSaverService"] }
            ]; };
            AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-root',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
                })
            ], AppComponent);
            /***/ 
        }),
        /***/ "./src/app/app.module.ts": 
        /*!*******************************!*\
          !*** ./src/app/app.module.ts ***!
          \*******************************/
        /*! exports provided: AppModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function () { return AppModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var ngx_filesaver__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-filesaver */ "./node_modules/ngx-filesaver/fesm2015/ngx-filesaver.js");
            /* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
            /* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
            /* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./material.module */ "./src/app/material.module.ts");
            /* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
            /* harmony import */ var _pipes_pipe_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pipes/pipe.module */ "./src/app/pipes/pipe.module.ts");
            var AppModule = /** @class */ (function () {
                function AppModule() {
                }
                return AppModule;
            }());
            AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
                    declarations: [
                        _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]
                    ],
                    imports: [
                        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
                        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                        _material_module__WEBPACK_IMPORTED_MODULE_6__["MaterialModule"],
                        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__["FlexLayoutModule"],
                        ngx_filesaver__WEBPACK_IMPORTED_MODULE_1__["FileSaverModule"],
                        _pipes_pipe_module__WEBPACK_IMPORTED_MODULE_8__["PipeModule"]
                    ],
                    providers: [],
                    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
                })
            ], AppModule);
            /***/ 
        }),
        /***/ "./src/app/material.module.ts": 
        /*!************************************!*\
          !*** ./src/app/material.module.ts ***!
          \************************************/
        /*! exports provided: MaterialModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function () { return MaterialModule; });
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
            var MaterialModule = /** @class */ (function () {
                function MaterialModule() {
                }
                return MaterialModule;
            }());
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
            /***/ 
        }),
        /***/ "./src/app/pipes/pipe.module.ts": 
        /*!**************************************!*\
          !*** ./src/app/pipes/pipe.module.ts ***!
          \**************************************/
        /*! exports provided: PipeModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PipeModule", function () { return PipeModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _safe_url_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./safe-url.pipe */ "./src/app/pipes/safe-url.pipe.ts");
            var PipeModule = /** @class */ (function () {
                function PipeModule() {
                }
                return PipeModule;
            }());
            PipeModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    declarations: [_safe_url_pipe__WEBPACK_IMPORTED_MODULE_2__["SafePipe"]],
                    imports: [],
                    exports: [_safe_url_pipe__WEBPACK_IMPORTED_MODULE_2__["SafePipe"]]
                })
            ], PipeModule);
            /***/ 
        }),
        /***/ "./src/app/pipes/safe-url.pipe.ts": 
        /*!****************************************!*\
          !*** ./src/app/pipes/safe-url.pipe.ts ***!
          \****************************************/
        /*! exports provided: SafePipe */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SafePipe", function () { return SafePipe; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
            var SafePipe = /** @class */ (function () {
                function SafePipe(sanitizer) {
                    this.sanitizer = sanitizer;
                }
                SafePipe.prototype.transform = function (url) {
                    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
                };
                return SafePipe;
            }());
            SafePipe.ctorParameters = function () { return [
                { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"] }
            ]; };
            SafePipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({ name: 'safe' })
            ], SafePipe);
            /***/ 
        }),
        /***/ "./src/assets/chats.json": 
        /*!*******************************!*\
          !*** ./src/assets/chats.json ***!
          \*******************************/
        /*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, default */
        /***/ (function (module) {
            module.exports = JSON.parse("[{\"id\":1,\"timestamp\":\"2019-11-20T14:02:06.2823772Z\",\"duration\":1651.0316,\"question\":\"what is SAN\",\"answer\":\"A SAN is valid until the end of the engagement\\nand up to a maximum of three years. However, the approvers (typically the\\nSentinel Lead Partner and/or Conflicts Resolver) can restrict the validity of a\\nSAN for a limited period.\\n\\nA SAN for recurring engagements for a SEC audit\\nclient and its affiliates is valid for only one year.\\n\\nA member firm's local policies may require a new SAN more frequently than every\\nthree years in certain circumstances.\",\"score\":98,\"performanceBucket\":\"1sec-3sec\"},{\"id\":2,\"timestamp\":\"2019-11-20T14:02:57.7860385Z\",\"duration\":445.2158,\"question\":\"san Validity?\",\"answer\":\"A SAN is valid until the end of the engagement\\nand up to a maximum of three years. However, the approvers (typically the\\nSentinel Lead Partner and/or Conflicts Resolver) can restrict the validity of a\\nSAN for a limited period.\\n\\nA SAN for recurring engagements for a SEC audit\\nclient and its affiliates is valid for only one year.\\n\\nA member firm's local policies may require a new SAN more frequently than every\\nthree years in certain circumstances.\",\"score\":95,\"performanceBucket\":\"250ms-500ms\"},{\"id\":3,\"timestamp\":\"2019-11-20T14:03:10.0718863Z\",\"duration\":755.6881,\"question\":\"What is a GUP?\",\"answer\":\"The Global Ultimate Parent (GUP) is the highest-tiered entity in a family tree in Sentinel. A Sentinel Tree typically consists of all entities that are ultimately controlled by the GUP or the GUP has significant influence. For example, for all Microsoft Sentinel entities, the GUP will be Microsoft Corporation.\",\"score\":87,\"performanceBucket\":\"500ms-1sec\"},{\"id\":4,\"timestamp\":\"2019-11-20T14:08:21.5056852Z\",\"duration\":499.631,\"question\":\"SAN\",\"answer\":\"Sentinel is a KPMG software that identifies independence approval requirements and potential conflicts of interest in respect of all proposed engagements from KPMG member firms. After entering the basic engagement information in the Sentinel Request, the tool routes the proposed engagements through a global approval process culminating in a Sentinel Approval Number (SAN) per engagement. It is essential to get a SAN before committing the firm to do an engagement.\",\"score\":85,\"performanceBucket\":\"500ms-1sec\"},{\"id\":5,\"timestamp\":\"2019-11-19T15:38:00.1116947Z\",\"duration\":5210.0185,\"question\":\"san engaging parties?\",\"answer\":\"The following are to be added as Engaging Parties:\\n Any party signing the engagement contract or otherwise bound to the engagement contract.\\n Any party that is to pay any of the fees for the service.\\n Any party that has a role in defining the scope of the engagement.\\n Any party that has a role in selecting KPMG for the service should be listed as an additional Engaging Party\\nIn addition, the  following have to be included as Engaging Parties as well:\\n a prime contractor hiring KPM\\n a subcontractor  of KPMG\\n a target if the seller is an Engaging Party (in a Deal Advisory engagement)\",\"score\":90,\"performanceBucket\":\"3sec-7sec\"},{\"id\":6,\"timestamp\":\"2019-11-19T15:43:34.1477372Z\",\"duration\":902.488,\"question\":\"what is sam?\",\"answer\":\"I am sorry, I could not understand you.\",\"score\":20,\"performanceBucket\":\"500ms-1sec\"},{\"id\":7,\"timestamp\":\"2019-11-20T02:27:55.6404006Z\",\"duration\":1577.9962,\"question\":\"what is gip\",\"answer\":\"I am sorry, I could not understand you.\",\"score\":15,\"performanceBucket\":\"1sec-3sec\"},{\"id\":8,\"timestamp\":\"2019-11-20T02:28:04.9037783Z\",\"duration\":504.0722,\"question\":\"can you tell me about gpu ?\",\"answer\":\"I am sorry, I could not understand you.\",\"score\":23,\"performanceBucket\":\"500ms-1sec\"}]");
            /***/ 
        }),
        /***/ "./src/environments/environment.ts": 
        /*!*****************************************!*\
          !*** ./src/environments/environment.ts ***!
          \*****************************************/
        /*! exports provided: environment */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function () { return environment; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            // This file can be replaced during build by using the `fileReplacements` array.
            // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
            // The list of file replacements can be found in `angular.json`.
            var environment = {
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
            /***/ 
        }),
        /***/ "./src/main.ts": 
        /*!*********************!*\
          !*** ./src/main.ts ***!
          \*********************/
        /*! no exports provided */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
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
                .catch(function (err) { return console.error(err); });
            /***/ 
        }),
        /***/ 0: 
        /*!***************************!*\
          !*** multi ./src/main.ts ***!
          \***************************/
        /*! no static exports found */
        /***/ (function (module, exports, __webpack_require__) {
            module.exports = __webpack_require__(/*! /home/abhishek/iris/botChat/src/main.ts */ "./src/main.ts");
            /***/ 
        })
    }, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es2015.js.map
//# sourceMappingURL=main-es5.js.map
//# sourceMappingURL=main-es5.js.map