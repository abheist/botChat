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
            /* harmony default export */ __webpack_exports__["default"] = ("<div fxFlex class=\"padding-20\">\n\t<div fxLayout=\"row\" fxLayoutAlign=\"start stretch\">\n\t\t<div style=\"background: #ffffff; border-radius: 6px;\" class=\"margin-padding-0 mat-elevation-z8\">\n\t\t\t<mat-form-field color=\"primary\" appearance=\"outline\">\n\t\t\t\t<input\n\t\t\t\t\tmatInput\n\t\t\t\t\t[matDatepicker]=\"picker\"\n\t\t\t\t\tplaceholder=\"Choose a date\"\n\t\t\t\t\t(dateInput)=\"filterChats($event)\"\n\t\t\t\t/>\n\t\t\t\t<mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n\t\t\t\t<mat-datepicker #picker></mat-datepicker>\n\t\t\t</mat-form-field>\n\t\t</div>\n\t\t<button mat-button (click)=\"removeFilter()\">\n\t\t\tClear Filter\n\t\t</button>\n\t</div>\n\t<div fxLayout=\"row wrap\" fxLayoutAlign=\"space-between start\">\n\t\t<mat-accordion\n\t\t\tstyle=\"width: 300px; margin: 20px 0; background: #ffffff; border-radius: 8px;\"\n\t\t\t*ngFor=\"let chat of allChats\"\n\t\t\tclass=\"mat-elevation-z5\"\n\t\t>\n\t\t\t<mat-expansion-panel>\n\t\t\t\t<mat-expansion-panel-header>\n\t\t\t\t\t<mat-panel-title>\n\t\t\t\t\t\t{{ chat.title }}\n\t\t\t\t\t</mat-panel-title>\n\t\t\t\t</mat-expansion-panel-header>\n\t\t\t\t<div class=\"grey-background\">\n\t\t\t\t\t<div style=\"max-height: 300px; overflow: auto; padding-left: 24px;\">\n\t\t\t\t\t\t<div class=\"padding-vertical-5\">\n\t\t\t\t\t\t\t<div class=\"mat-body-2\">Timestamp:</div>\n\t\t\t\t\t\t\t<div class=\"mat-caption\">{{ chat.timestamp | date }}</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<mat-divider></mat-divider>\n\t\t\t\t\t\t<div class=\"padding-vertical-5\">\n\t\t\t\t\t\t\t<div class=\"mat-body-2\">Id:</div>\n\t\t\t\t\t\t\t<div class=\"mat-caption\">{{ chat.id }}</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<mat-divider></mat-divider>\n\t\t\t\t\t\t<div class=\"padding-vertical-5\">\n\t\t\t\t\t\t\t<div class=\"mat-body-2\">Question:</div>\n\t\t\t\t\t\t\t<div class=\"mat-caption\">{{ chat.question }}</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<mat-divider></mat-divider>\n\t\t\t\t\t\t<div class=\"padding-vertical-5\">\n\t\t\t\t\t\t\t<div class=\"mat-body-2\">Answer:</div>\n\t\t\t\t\t\t\t<div class=\"mat-caption\">{{ chat.answer }}</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<mat-divider></mat-divider>\n\t\t\t\t\t\t<div class=\"padding-vertical-5\">\n\t\t\t\t\t\t\t<div class=\"mat-body-2\">Score:</div>\n\t\t\t\t\t\t\t<div class=\"mat-caption\">{{ chat.score }}</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</mat-expansion-panel>\n\t\t</mat-accordion>\n\t</div>\n</div>\n");
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
            /* harmony default export */ __webpack_exports__["default"] = (".padding-20 {\n  padding: 20px;\n}\n\n.type-badge {\n  font-size: 12px;\n  color: #ffffffff;\n  padding: 2px 4px;\n  min-width: 14px;\n  background: #010100;\n  border-radius: 46%;\n  text-align: center;\n  margin-left: 5px;\n}\n\n.grey-background {\n  background: rgba(0, 0, 0, 0.04);\n}\n\n.padding-vertical-5 {\n  padding: 5px 0;\n}\n\n::ng-deep .mat-expansion-panel-body {\n  padding: 0 !important;\n}\n\n::ng-deep .mat-form-field-wrapper {\n  margin: 0 !important;\n  padding: 0 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FiaGlzaGVrL2lyaXMvYm90Q2hhdC9zcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0MsYUFBQTtBQ0NEOztBREVBO0VBQ0MsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUNDRDs7QURFQTtFQUNDLCtCQUFBO0FDQ0Q7O0FERUE7RUFDQyxjQUFBO0FDQ0Q7O0FERUE7RUFDQyxxQkFBQTtBQ0NEOztBREVBO0VBQ0Msb0JBQUE7RUFDQSxxQkFBQTtBQ0NEIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBhZGRpbmctMjAge1xuXHRwYWRkaW5nOiAyMHB4O1xufVxuXG4udHlwZS1iYWRnZSB7XG5cdGZvbnQtc2l6ZTogMTJweDtcblx0Y29sb3I6ICNmZmZmZmZmZjtcblx0cGFkZGluZzogMnB4IDRweDtcblx0bWluLXdpZHRoOiAxNHB4O1xuXHRiYWNrZ3JvdW5kOiAjMDEwMTAwO1xuXHRib3JkZXItcmFkaXVzOiA0NiU7XG5cdHRleHQtYWxpZ246IGNlbnRlcjtcblx0bWFyZ2luLWxlZnQ6IDVweDtcbn1cblxuLmdyZXktYmFja2dyb3VuZCB7XG5cdGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4wNCk7XG59XG5cbi5wYWRkaW5nLXZlcnRpY2FsLTUge1xuXHRwYWRkaW5nOiA1cHggMDtcbn1cblxuOjpuZy1kZWVwIC5tYXQtZXhwYW5zaW9uLXBhbmVsLWJvZHkge1xuXHRwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XG59XG5cbjo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtd3JhcHBlciB7XG5cdG1hcmdpbjogMCAhaW1wb3J0YW50O1xuXHRwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XG59XG4iLCIucGFkZGluZy0yMCB7XG4gIHBhZGRpbmc6IDIwcHg7XG59XG5cbi50eXBlLWJhZGdlIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogI2ZmZmZmZmZmO1xuICBwYWRkaW5nOiAycHggNHB4O1xuICBtaW4td2lkdGg6IDE0cHg7XG4gIGJhY2tncm91bmQ6ICMwMTAxMDA7XG4gIGJvcmRlci1yYWRpdXM6IDQ2JTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tbGVmdDogNXB4O1xufVxuXG4uZ3JleS1iYWNrZ3JvdW5kIHtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjA0KTtcbn1cblxuLnBhZGRpbmctdmVydGljYWwtNSB7XG4gIHBhZGRpbmc6IDVweCAwO1xufVxuXG46Om5nLWRlZXAgLm1hdC1leHBhbnNpb24tcGFuZWwtYm9keSB7XG4gIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcbn1cblxuOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC13cmFwcGVyIHtcbiAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcbn0iXX0= */");
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
            var AppComponent = /** @class */ (function () {
                function AppComponent() {
                    this.selectedDate = '';
                    this.chats = [
                        {
                            title: 'KPMGTeamBot_German',
                            timestamp: '2019-11-20 00:00',
                            id: '|47ccb28-463f9dec2880da4e.f6036c7c_',
                            question: 'what is SAN',
                            answer: 'Sentinel is a KPMG software that identifies independence approval requirements and potential conflicts of interest in respect of all proposed engagements from KPMG member firms. After entering the basic engagement information in the Sentinel Request, the tool routes the proposed engagements through a global approval process culminating in a Sentinel Approval Number (SAN) per engagement. It is essential to get a SAN before committing the firm to do an engagement.',
                            score: 98
                        },
                        {
                            title: 'KteamsChat',
                            timestamp: '2019-11-21 00:00',
                            id: '|47ccb2c-463f9dec2880da4e.f6036c7f_',
                            question: 'hi',
                            answer: 'Hello.',
                            score: 100
                        },
                        {
                            title: 'KPMGTeamBot_German',
                            timestamp: '2019-11-22 00:00',
                            id: '|47ccb2e-463f9dec2880da4e.f6036c80_',
                            question: 'who are you',
                            answer: 'I don\'t have a name.',
                            score: 100
                        },
                        {
                            title: 'KPMGTeamBot_German',
                            timestamp: '2019-11-23 00:00',
                            id: '|47ccb30-463f9dec2880da4e.f6036c81_',
                            question: 'can you tell me what is SAN',
                            answer: 'I\'m digital. I don\'t have a physical location.',
                            score: 47.86
                        },
                        {
                            title: 'KPMGTeamBot_German',
                            timestamp: '2019-11-24 00:00',
                            id: '|47ccb35-463f9dec2880da4e.f6036c84_',
                            question: 'SAN',
                            answer: 'Sentinel is a KPMG software that identifies independence approval requirements and potential conflicts of interest in respect of all proposed engagements from KPMG member firms. After entering the basic engagement information in the Sentinel Request, the tool routes the proposed engagements through a global approval process culminating in a Sentinel Approval Number (SAN) per engagement. It is essential to get a SAN before committing the firm to do an engagement.',
                            score: 99
                        },
                        {
                            title: 'KteamsChat',
                            timestamp: '2019-11-25 00:00',
                            id: '|47cc9f4-463f9dec2880da4e.f6036be4_',
                            question: 'can you tell if any holiday exist in month',
                            answer: 'there are 2 mandatory holiday and 1 restricted holiday',
                            score: 100
                        },
                        {
                            title: 'KteamsChat',
                            timestamp: '2019-11-26 00:00',
                            id: '|47cc9f7-463f9dec2880da4e.f6036be6_',
                            question: 'intent is',
                            answer: 'Not at all.',
                            score: 8.76
                        },
                        {
                            title: 'KPMGTeamBot_German',
                            timestamp: '2019-11-27 00:00',
                            id: '|47cca5d-463f9dec2880da4e.f6036c14_',
                            question: 'SAN?',
                            answer: 'Sentinel is a KPMG software that identifies independence approval requirements and potential conflicts of interest in respect of all proposed engagements from KPMG member firms. After entering the basic engagement information in the Sentinel Request, the tool routes the proposed engagements through a global approval process culminating in a Sentinel Approval Number (SAN) per engagement. It is essential to get a SAN before committing the firm to do an engagement.',
                            score: 99
                        },
                        {
                            title: 'KPMGTeamBot_German',
                            timestamp: '2019-11-28 00:00',
                            id: '|47cca60-463f9dec2880da4e.f6036c15_',
                            question: 'san Validity?',
                            answer: 'A SAN is valid until the end of the engagement and up to a maximum of three years. However, the approvers (typically the Sentinel Lead Partner and/or Conflicts Resolver) can restrict the validity of a SAN for a limited period.  A SAN for recurring engagements for a SEC audit client and its affiliates is valid for only one year.  A member firm\'s local policies may require a new SAN more frequently than every three years in certain circumstances.',
                            score: 99
                        },
                        {
                            title: 'KteamsChat',
                            timestamp: '2019-11-29 00:00',
                            id: '|47cca63-463f9dec2880da4e.f6036c16_',
                            question: 'san requirement',
                            answer: 'Sentinel is a KPMG software that identifies independence approval requirements and potential conflicts of interest in respect of all proposed engagements from KPMG member firms. After entering the basic engagement information in the Sentinel Request, the tool routes the proposed engagements through a global approval process culminating in a Sentinel Approval Number (SAN) per engagement. It is essential to get a SAN before committing the firm to do an engagement.',
                            score: 77.02
                        },
                        {
                            title: 'KteamsChat',
                            timestamp: '2019-11-30 00:00',
                            id: '|47cca66-463f9dec2880da4e.f6036c17_',
                            question: 'san engaging parties?',
                            answer: 'The following are to be added as Engaging Parties:  � � �- Any party signing the engagement contract or otherwise bound to the engagement contract.   � � - Any party that is to pay any of the fees for the service.   � � - Any party that has a role in defining the scope of the engagement.   � � - Any party that has a role in selecting KPMG for the service should be listed as an additional Engaging Party  In addition, the� following have to be included as Engaging Parties as well:  � � - a prime contractor hiring KPMG  � � - a subcontractor� of KPMG  � � - a target if the seller is an Engaging Party (in a Deal Advisory engagement)',
                            score: 99
                        },
                        {
                            title: 'KPMGTeamBot_German',
                            timestamp: '2019-12-01 00:00',
                            id: '|47cca9a-463f9dec2880da4e.f6036c3c_',
                            question: 'What is the validity of a SAN?',
                            answer: 'A SAN is valid until the end of the engagement and up to a maximum of three years. However, the approvers (typically the Sentinel Lead Partner and/or Conflicts Resolver) can restrict the validity of a SAN for a limited period.  A SAN for recurring engagements for a SEC audit client and its affiliates is valid for only one year.  A member firm\'s local policies may require a new SAN more frequently than every three years in certain circumstances.',
                            score: 100
                        },
                        {
                            title: 'KteamsChat',
                            timestamp: '2019-12-02 00:00',
                            id: '|47cca9c-463f9dec2880da4e.f6036c3d_',
                            question: 'Hi',
                            answer: 'Hello.',
                            score: 100
                        },
                        {
                            title: 'KteamsChat',
                            timestamp: '2019-12-03 00:00',
                            id: '|47cca9e-463f9dec2880da4e.f6036c3e_',
                            question: 'What is SAN?',
                            answer: 'Sentinel is a KPMG software that identifies independence approval requirements and potential conflicts of interest in respect of all proposed engagements from KPMG member firms. After entering the basic engagement information in the Sentinel Request, the tool routes the proposed engagements through a global approval process culminating in a Sentinel Approval Number (SAN) per engagement. It is essential to get a SAN before committing the firm to do an engagement.',
                            score: 98
                        },
                        {
                            title: 'KPMGTeamBot_German',
                            timestamp: '2019-12-04 00:00',
                            id: '|47ccaa0-463f9dec2880da4e.f6036c3f_',
                            question: 'what is SAN',
                            answer: 'Sentinel is a KPMG software that identifies independence approval requirements and potential conflicts of interest in respect of all proposed engagements from KPMG member firms. After entering the basic engagement information in the Sentinel Request, the tool routes the proposed engagements through a global approval process culminating in a Sentinel Approval Number (SAN) per engagement. It is essential to get a SAN before committing the firm to do an engagement.',
                            score: 98
                        },
                        {
                            title: 'KteamsChat',
                            timestamp: '2019-12-05 00:00',
                            id: '|47ccaa2-463f9dec2880da4e.f6036c40_',
                            question: 'what is SAN',
                            answer: 'Sentinel is a KPMG software that identifies independence approval requirements and potential conflicts of interest in respect of all proposed engagements from KPMG member firms. After entering the basic engagement information in the Sentinel Request, the tool routes the proposed engagements through a global approval process culminating in a Sentinel Approval Number (SAN) per engagement. It is essential to get a SAN before committing the firm to do an engagement.',
                            score: 98
                        },
                        {
                            title: 'KPMGTeamBot_German',
                            timestamp: '2019-12-06 00:00',
                            id: '|47ccaa4-463f9dec2880da4e.f6036c41_',
                            question: 'What is validity',
                            answer: 'A SAN is valid until the end of the engagement and up to a maximum of three years. However, the approvers (typically the Sentinel Lead Partner and/or Conflicts Resolver) can restrict the validity of a SAN for a limited period.  A SAN for recurring engagements for a SEC audit client and its affiliates is valid for only one year.  A member firm\'s local policies may require a new SAN more frequently than every three years in certain circumstances.',
                            score: 95
                        },
                        {
                            title: 'KteamsChat',
                            timestamp: '2019-12-07 00:00',
                            id: '|47ccaa6-463f9dec2880da4e.f6036c42_',
                            question: 'Why to use SAN?',
                            answer: 'Sentinel is a KPMG software that identifies independence approval requirements and potential conflicts of interest in respect of all proposed engagements from KPMG member firms. After entering the basic engagement information in the Sentinel Request, the tool routes the proposed engagements through a global approval process culminating in a Sentinel Approval Number (SAN) per engagement. It is essential to get a SAN before committing the firm to do an engagement.',
                            score: 58.82
                        },
                        {
                            title: 'KPMGTeamBot_German',
                            timestamp: '2019-12-08 00:00',
                            id: '|47ccabf-463f9dec2880da4e.f6036c4f_',
                            question: 'okay, can you ask questions to me?',
                            answer: 'I\'m better at answering questions.',
                            score: 37.75
                        },
                        {
                            title: 'KteamsChat',
                            timestamp: '2019-12-09 00:00',
                            id: '|47ccac1-463f9dec2880da4e.f6036c50_',
                            question: 'But you are not answering my questions',
                            answer: 'Sorry about that.',
                            score: 34.56
                        },
                        {
                            title: 'KPMGTeamBot_German',
                            timestamp: '2019-12-10 00:00',
                            id: '|47ccad6-463f9dec2880da4e.f6036c5b_',
                            question: 'What is a GPU?',
                            answer: 'This is what I do every day.',
                            score: 7.9
                        },
                        {
                            title: 'KteamsChat',
                            timestamp: '2019-12-11 00:00',
                            id: '|47ccad8-463f9dec2880da4e.f6036c5c_',
                            question: 'What is a GUP?',
                            answer: 'The Global Ultimate Parent (GUP) is the highest-tiered entity in a family tree in Sentinel. A Sentinel Tree typically consists of all entities that are ultimately controlled by the GUP or the GUP has significant influence.   For example, for all Microsoft Sentinel entities, the GUP will be Microsoft Corporation.',
                            score: 100
                        },
                        {
                            title: 'KPMGTeamBot_German',
                            timestamp: '2019-12-12 00:00',
                            id: '|47ccb11-463f9dec2880da4e.f6036c73_',
                            question: 'hello',
                            answer: 'Hello.',
                            score: 100
                        },
                        {
                            title: 'KteamsChat',
                            timestamp: '2019-12-13 00:00',
                            id: '|47ccb23-463f9dec2880da4e.f6036c7a_',
                            question: 'Who needs to be added as Engaging Parties in a Sentinel Request ?',
                            answer: 'The following are to be added as Engaging Parties:  � � �- Any party signing the engagement contract or otherwise bound to the engagement contract.   � � - Any party that is to pay any of the fees for the service.   � � - Any party that has a role in defining the scope of the engagement.   � � - Any party that has a role in selecting KPMG for the service should be listed as an additional Engaging Party  In addition, the� following have to be included as Engaging Parties as well:  � � - a prime contractor hiring KPMG  � � - a subcontractor� of KPMG  � � - a target if the seller is an Engaging Party (in a Deal Advisory engagement)',
                            score: 100
                        },
                        {
                            title: 'KPMGTeamBot_German',
                            timestamp: '2019-12-14 00:00',
                            id: '|47ccb37-463f9dec2880da4e.f6036c85_',
                            question: 'my name is mahendra',
                            answer: 'I don\'t have a name.',
                            score: 22.1
                        },
                        {
                            title: 'KteamsChat',
                            timestamp: '2019-12-15 00:00',
                            id: '|47cca04-463f9dec2880da4e.f6036bef_',
                            question: 'how many leaves i can have',
                            answer: 'there are 3 months of maternity paid leaves',
                            score: 84.32
                        },
                        {
                            title: 'KteamsChat',
                            timestamp: '2019-12-16 00:00',
                            id: '|47cca08-463f9dec2880da4e.f6036bf2_',
                            question: 'hi',
                            answer: 'Hello.',
                            score: 100
                        },
                        {
                            title: 'KPMGTeamBot_German',
                            timestamp: '2019-12-17 00:00',
                            id: '|47cca0d-463f9dec2880da4e.f6036bf4_',
                            question: 'Weather',
                            answer: 'Ok.',
                            score: 8.14
                        },
                        {
                            title: 'KPMGTeamBot_German',
                            timestamp: '2019-12-18 00:00',
                            id: '|47cca0f-463f9dec2880da4e.f6036bf5_',
                            question: 'Hi',
                            answer: 'Hello.',
                            score: 100
                        },
                        {
                            title: 'KPMGTeamBot_German',
                            timestamp: '2019-12-19 00:00',
                            id: '|47cca11-463f9dec2880da4e.f6036bf6_',
                            question: 'What you have',
                            answer: 'This is what I do every day.',
                            score: 50.62
                        },
                        {
                            title: 'KPMGTeamBot_German',
                            timestamp: '2019-12-20 00:00',
                            id: '|47cca13-463f9dec2880da4e.f6036bf7_',
                            question: 'Where are you',
                            answer: 'I\'m digital. I don\'t have a physical location.',
                            score: 100
                        },
                        {
                            title: 'KPMGTeamBot_German',
                            timestamp: '2019-12-21 00:00',
                            id: '|47cca80-463f9dec2880da4e.f6036c2a_',
                            question: 'number of holidays in month',
                            answer: 'Thank you, and the same to you.',
                            score: 29.89
                        },
                        {
                            title: 'KPMGTeamBot_German',
                            timestamp: '2019-12-22 00:00',
                            id: '|47cca84-463f9dec2880da4e.f6036c2d_',
                            question: 'number of holidays in month',
                            answer: 'Thank you, and the same to you.',
                            score: 29.89
                        },
                        {
                            title: 'KteamsChat',
                            timestamp: '2019-12-23 00:00',
                            id: '|47cca8d-463f9dec2880da4e.f6036c34_',
                            question: 'Kann PGT-SR auf ausgeglichene Translokationen testen?',
                            answer: 'Ja, unser Test kann die unausgeglichenen Formen der ausgeglichensten Translokationen [wechselseitige Translokationen] erkennen. Um zu best�tigen, dass unsere Technologie unausgewogene Formen der Translokation eines Patienten erkennt, m�ssen wir den Karyotyp des Patienten (oder des Partners) vor dem Einreichen von Embryo-Biopsien zum Testen einreichen. Auf diese Weise kann unser genetisches Beratungsteam eine ma�geschneiderte Fallbewertung durchf�hren, um sicherzustellen, dass alle unausgeglichenen Formen der Translokation erkannt werden k�nnen',
                            score: 100
                        },
                        {
                            title: 'KteamsChat',
                            timestamp: '2019-12-24 00:00',
                            id: '|47cca90-463f9dec2880da4e.f6036c36_',
                            question: 'hello',
                            answer: 'Hello.',
                            score: 100
                        },
                        {
                            title: 'KPMGTeamBot_German',
                            timestamp: '2019-12-25 00:00',
                            id: '|47cca92-463f9dec2880da4e.f6036c37_',
                            question: 'what is SAN?',
                            answer: 'Sentinel is a KPMG software that identifies independence approval requirements and potential conflicts of interest in respect of all proposed engagements from KPMG member firms. After entering the basic engagement information in the Sentinel Request, the tool routes the proposed engagements through a global approval process culminating in a Sentinel Approval Number (SAN) per engagement. It is essential to get a SAN before committing the firm to do an engagement.',
                            score: 98
                        },
                        {
                            title: 'KteamsChat',
                            timestamp: '2019-12-26 00:00',
                            id: '|47cca94-463f9dec2880da4e.f6036c38_',
                            question: 'hello',
                            answer: 'Hello.',
                            score: 100
                        },
                        {
                            title: 'KteamsChat',
                            timestamp: '2019-12-27 00:00',
                            id: '|47cca96-463f9dec2880da4e.f6036c39_',
                            question: 'what is san?',
                            answer: 'Sentinel is a KPMG software that identifies independence approval requirements and potential conflicts of interest in respect of all proposed engagements from KPMG member firms. After entering the basic engagement information in the Sentinel Request, the tool routes the proposed engagements through a global approval process culminating in a Sentinel Approval Number (SAN) per engagement. It is essential to get a SAN before committing the firm to do an engagement.',
                            score: 98
                        },
                        {
                            title: 'KPMGTeamBot_German',
                            timestamp: '2019-12-28 00:00',
                            id: '|47ccab0-463f9dec2880da4e.f6036c48_',
                            question: 'Hi',
                            answer: 'Hello.',
                            score: 100
                        },
                        {
                            title: 'KPMGTeamBot_German',
                            timestamp: '2019-12-29 00:00',
                            id: '|47ccab2-463f9dec2880da4e.f6036c49_',
                            question: 'can you cry?',
                            answer: 'I don\'t have a body.',
                            score: 100
                        },
                        {
                            title: 'KPMGTeamBot_German',
                            timestamp: '2019-12-30 00:00',
                            id: '|47ccab4-463f9dec2880da4e.f6036c4a_',
                            question: 'Do you sleep?',
                            answer: 'I don\'t have a body.',
                            score: 100
                        },
                        {
                            title: 'KPMGTeamBot_German',
                            timestamp: '2019-12-31 00:00',
                            id: '|47ccab6-463f9dec2880da4e.f6036c4b_',
                            question: 'This is boring',
                            answer: 'I aim for efficiency.',
                            score: 100
                        },
                        {
                            title: 'KPMGTeamBot_German',
                            timestamp: '2020-01-01 00:00',
                            id: '|47ccab9-463f9dec2880da4e.f6036c4c_',
                            question: 'I am getting bored',
                            answer: 'Well, let me know if there\'s anything I can do for you.',
                            score: 61.99
                        },
                        {
                            title: 'KPMGTeamBot_German',
                            timestamp: '2020-01-02 00:00',
                            id: '|47ccabb-463f9dec2880da4e.f6036c4d_',
                            question: 'How old are you?',
                            answer: 'Age doesn\'t really apply to me.',
                            score: 100
                        },
                        {
                            title: 'KPMGTeamBot_German',
                            timestamp: '2020-01-03 00:00',
                            id: '|47ccabd-463f9dec2880da4e.f6036c4e_',
                            question: 'I am younger than you',
                            answer: 'You\'re definitely smarter than I am.',
                            score: 43.04
                        },
                        {
                            title: 'KPMGTeamBot_German',
                            timestamp: '2020-01-04 00:00',
                            id: '|47ccac3-463f9dec2880da4e.f6036c51_',
                            question: 'AMA',
                            answer: 'I\'m better at answering questions.',
                            score: 100
                        },
                        {
                            title: 'KteamsChat',
                            timestamp: '2020-01-05 00:00',
                            id: '|47ccac5-463f9dec2880da4e.f6036c52_',
                            question: 'Okay, tell me who is your boss?',
                            answer: 'I don\'t have family.',
                            score: 38.42
                        },
                        {
                            title: 'KteamsChat',
                            timestamp: '2020-01-06 00:00',
                            id: '|47ccac7-463f9dec2880da4e.f6036c53_',
                            question: 'Family?',
                            answer: 'I don\'t have family.',
                            score: 58.74
                        },
                        {
                            title: 'KteamsChat',
                            timestamp: '2020-01-07 00:00',
                            id: '|47ccac9-463f9dec2880da4e.f6036c54_',
                            question: 'that\'s good, but I am asking about your boss',
                            answer: 'I enjoy talking with you.',
                            score: 34.96
                        },
                        {
                            title: 'KteamsChat',
                            timestamp: '2020-01-08 00:00',
                            id: '|47ccacb-463f9dec2880da4e.f6036c55_',
                            question: 'hmm',
                            answer: 'I\'m afraid I\'m not musically inclined.',
                            score: 57.88
                        },
                        {
                            title: 'KPMGTeamBot_German',
                            timestamp: '2020-01-09 00:00',
                            id: '|47ccacd-463f9dec2880da4e.f6036c56_',
                            question: 'Okay do you know how to play game?',
                            answer: 'I don\'t know.',
                            score: 36.76
                        },
                        {
                            title: 'KPMGTeamBot_German',
                            timestamp: '2020-01-10 00:00',
                            id: '|47ccacf-463f9dec2880da4e.f6036c57_',
                            question: 'how to play',
                            answer: 'Ok.',
                            score: 37.64
                        },
                        {
                            title: 'KteamsChat',
                            timestamp: '2020-01-11 00:00',
                            id: '|47ccad1-463f9dec2880da4e.f6036c59_',
                            question: 'how to play?',
                            answer: 'Ok.',
                            score: 37.64
                        },
                        {
                            title: 'KPMGTeamBot_German',
                            timestamp: '2020-01-12 00:00',
                            id: '|47ccad3-463f9dec2880da4e.f6036c5a_',
                            question: 'I am asking bro',
                            answer: 'Okay.',
                            score: 32.43
                        },
                        {
                            title: 'KteamsChat',
                            timestamp: '2020-01-13 00:00',
                            id: '|47ccade-463f9dec2880da4e.f6036c5e_',
                            question: 'Hi',
                            answer: 'Hello.',
                            score: 100
                        },
                        {
                            title: 'KPMGTeamBot_German',
                            timestamp: '2020-01-14 00:00',
                            id: '|47ccae0-463f9dec2880da4e.f6036c5f_',
                            question: 'What is GUP?',
                            answer: 'Just standing by, ready to help.',
                            score: 99
                        },
                        {
                            title: 'KPMGTeamBot_German',
                            timestamp: '2020-01-15 00:00',
                            id: '|47ccae2-463f9dec2880da4e.f6036c60_',
                            question: 'What is a GUP?',
                            answer: 'The Global Ultimate Parent (GUP) is the highest-tiered entity in a family tree in Sentinel. A Sentinel Tree typically consists of all entities that are ultimately controlled by the GUP or the GUP has significant influence.   For example, for all Microsoft Sentinel entities, the GUP will be Microsoft Corporation.',
                            score: 100
                        },
                        {
                            title: 'KPMGTeamBot_German',
                            timestamp: '2020-01-16 00:00',
                            id: '|47ccae7-463f9dec2880da4e.f6036c62_',
                            question: 'What is Sentinel?',
                            answer: 'Sentinel is a KPMG software that identifies independence approval requirements and potential conflicts of interest in respect of all proposed engagements from KPMG member firms. After entering the basic engagement information in the Sentinel Request, the tool routes the proposed engagements through a global approval process culminating in a Sentinel Approval Number (SAN) per engagement. It is essential to get a SAN before committing the firm to do an engagement.',
                            score: 100
                        },
                        {
                            title: 'KteamsChat',
                            timestamp: '2020-01-17 00:00',
                            id: '|47ccae9-463f9dec2880da4e.f6036c63_',
                            question: 'Who all need to become engaging parties in Sentinel?',
                            answer: 'The following are to be added as Engaging Parties:  � � �- Any party signing the engagement contract or otherwise bound to the engagement contract.   � � - Any party that is to pay any of the fees for the service.   � � - Any party that has a role in defining the scope of the engagement.   � � - Any party that has a role in selecting KPMG for the service should be listed as an additional Engaging Party  In addition, the� following have to be included as Engaging Parties as well:  � � - a prime contractor hiring KPMG  � � - a subcontractor� of KPMG  � � - a target if the seller is an Engaging Party (in a Deal Advisory engagement)',
                            score: 100
                        },
                        {
                            title: 'KteamsChat',
                            timestamp: '2020-01-18 00:00',
                            id: '|47ccaeb-463f9dec2880da4e.f6036c64_',
                            question: 'And Validity of SAN?',
                            answer: 'A SAN is valid until the end of the engagement and up to a maximum of three years. However, the approvers (typically the Sentinel Lead Partner and/or Conflicts Resolver) can restrict the validity of a SAN for a limited period.  A SAN for recurring engagements for a SEC audit client and its affiliates is valid for only one year.  A member firm\'s local policies may require a new SAN more frequently than every three years in certain circumstances.',
                            score: 98
                        },
                        {
                            title: 'KteamsChat',
                            timestamp: '2020-01-19 00:00',
                            id: '|47ccaee-463f9dec2880da4e.f6036c65_',
                            question: 'You are intelligent',
                            answer: 'I do what I can.',
                            score: 99
                        },
                        {
                            title: 'KPMGTeamBot_German',
                            timestamp: '2020-01-20 00:00',
                            id: '|47ccaf2-463f9dec2880da4e.f6036c67_',
                            question: 'How many holiday I can take?',
                            answer: 'there are 2 mandatory holiday and 1 restricted holiday',
                            score: 66.46
                        },
                        {
                            title: 'KteamsChat',
                            timestamp: '2020-01-21 00:00',
                            id: '|47ccaf9-463f9dec2880da4e.f6036c6a_',
                            question: 'Thanks',
                            answer: 'You\'re welcome.',
                            score: 100
                        },
                        {
                            title: 'KPMGTeamBot_German',
                            timestamp: '2020-01-22 00:00',
                            id: '|47ccb28-463f9dec2880da4e.f6036c7c_',
                            question: 'what is SAN',
                            answer: 'Sentinel is a KPMG software that identifies independence approval requirements and potential conflicts of interest in respect of all proposed engagements from KPMG member firms. After entering the basic engagement information in the Sentinel Request, the tool routes the proposed engagements through a global approval process culminating in a Sentinel Approval Number (SAN) per engagement. It is essential to get a SAN before committing the firm to do an engagement.',
                            score: 98
                        },
                        {
                            title: 'KteamsChat',
                            timestamp: '2020-01-23 00:00',
                            id: '|47ccb2c-463f9dec2880da4e.f6036c7f_',
                            question: 'hi',
                            answer: 'Hello.',
                            score: 100
                        },
                        {
                            title: 'KPMGTeamBot_German',
                            timestamp: '2020-01-24 00:00',
                            id: '|47ccb2e-463f9dec2880da4e.f6036c80_',
                            question: 'who are you',
                            answer: 'I don\'t have a name.',
                            score: 100
                        },
                        {
                            title: 'KPMGTeamBot_German',
                            timestamp: '2020-01-25 00:00',
                            id: '|47ccb30-463f9dec2880da4e.f6036c81_',
                            question: 'can you tell me what is SAN',
                            answer: 'I\'m digital. I don\'t have a physical location.',
                            score: 47.86
                        },
                        {
                            title: 'KPMGTeamBot_German',
                            timestamp: '2020-01-26 00:00',
                            id: '|47ccb35-463f9dec2880da4e.f6036c84_',
                            question: 'SAN',
                            answer: 'Sentinel is a KPMG software that identifies independence approval requirements and potential conflicts of interest in respect of all proposed engagements from KPMG member firms. After entering the basic engagement information in the Sentinel Request, the tool routes the proposed engagements through a global approval process culminating in a Sentinel Approval Number (SAN) per engagement. It is essential to get a SAN before committing the firm to do an engagement.',
                            score: 99
                        },
                        {
                            title: 'KteamsChat',
                            timestamp: '2020-01-27 00:00',
                            id: '|47cc9f4-463f9dec2880da4e.f6036be4_',
                            question: 'can you tell if any holiday exist in month',
                            answer: 'there are 2 mandatory holiday and 1 restricted holiday',
                            score: 100
                        },
                        {
                            title: 'KteamsChat',
                            timestamp: '2020-01-28 00:00',
                            id: '|47cc9f7-463f9dec2880da4e.f6036be6_',
                            question: 'intent is',
                            answer: 'Not at all.',
                            score: 8.76
                        },
                        {
                            title: 'KPMGTeamBot_German',
                            timestamp: '2020-01-29 00:00',
                            id: '|47cca5d-463f9dec2880da4e.f6036c14_',
                            question: 'SAN?',
                            answer: 'Sentinel is a KPMG software that identifies independence approval requirements and potential conflicts of interest in respect of all proposed engagements from KPMG member firms. After entering the basic engagement information in the Sentinel Request, the tool routes the proposed engagements through a global approval process culminating in a Sentinel Approval Number (SAN) per engagement. It is essential to get a SAN before committing the firm to do an engagement.',
                            score: 99
                        },
                        {
                            title: 'KPMGTeamBot_German',
                            timestamp: '2020-01-30 00:00',
                            id: '|47cca60-463f9dec2880da4e.f6036c15_',
                            question: 'san Validity?',
                            answer: 'A SAN is valid until the end of the engagement and up to a maximum of three years. However, the approvers (typically the Sentinel Lead Partner and/or Conflicts Resolver) can restrict the validity of a SAN for a limited period.  A SAN for recurring engagements for a SEC audit client and its affiliates is valid for only one year.  A member firm\'s local policies may require a new SAN more frequently than every three years in certain circumstances.',
                            score: 99
                        },
                        {
                            title: 'KteamsChat',
                            timestamp: '2020-01-31 00:00',
                            id: '|47cca63-463f9dec2880da4e.f6036c16_',
                            question: 'san requirement',
                            answer: 'Sentinel is a KPMG software that identifies independence approval requirements and potential conflicts of interest in respect of all proposed engagements from KPMG member firms. After entering the basic engagement information in the Sentinel Request, the tool routes the proposed engagements through a global approval process culminating in a Sentinel Approval Number (SAN) per engagement. It is essential to get a SAN before committing the firm to do an engagement.',
                            score: 77.02
                        },
                        {
                            title: 'KteamsChat',
                            timestamp: '2020-02-01 00:00',
                            id: '|47cca66-463f9dec2880da4e.f6036c17_',
                            question: 'san engaging parties?',
                            answer: 'The following are to be added as Engaging Parties:  � � �- Any party signing the engagement contract or otherwise bound to the engagement contract.   � � - Any party that is to pay any of the fees for the service.   � � - Any party that has a role in defining the scope of the engagement.   � � - Any party that has a role in selecting KPMG for the service should be listed as an additional Engaging Party  In addition, the� following have to be included as Engaging Parties as well:  � � - a prime contractor hiring KPMG  � � - a subcontractor� of KPMG  � � - a target if the seller is an Engaging Party (in a Deal Advisory engagement)',
                            score: 99
                        },
                        {
                            title: 'KPMGTeamBot_German',
                            timestamp: '2020-02-02 00:00',
                            id: '|47cca9a-463f9dec2880da4e.f6036c3c_',
                            question: 'What is the validity of a SAN?',
                            answer: 'A SAN is valid until the end of the engagement and up to a maximum of three years. However, the approvers (typically the Sentinel Lead Partner and/or Conflicts Resolver) can restrict the validity of a SAN for a limited period.  A SAN for recurring engagements for a SEC audit client and its affiliates is valid for only one year.  A member firm\'s local policies may require a new SAN more frequently than every three years in certain circumstances.',
                            score: 100
                        },
                        {
                            title: 'KteamsChat',
                            timestamp: '2020-02-03 00:00',
                            id: '|47cca9c-463f9dec2880da4e.f6036c3d_',
                            question: 'Hi',
                            answer: 'Hello.',
                            score: 100
                        },
                        {
                            title: 'KteamsChat',
                            timestamp: '2020-02-04 00:00',
                            id: '|47cca9e-463f9dec2880da4e.f6036c3e_',
                            question: 'What is SAN?',
                            answer: 'Sentinel is a KPMG software that identifies independence approval requirements and potential conflicts of interest in respect of all proposed engagements from KPMG member firms. After entering the basic engagement information in the Sentinel Request, the tool routes the proposed engagements through a global approval process culminating in a Sentinel Approval Number (SAN) per engagement. It is essential to get a SAN before committing the firm to do an engagement.',
                            score: 98
                        },
                        {
                            title: 'KPMGTeamBot_German',
                            timestamp: '2020-02-05 00:00',
                            id: '|47ccaa0-463f9dec2880da4e.f6036c3f_',
                            question: 'what is SAN',
                            answer: 'Sentinel is a KPMG software that identifies independence approval requirements and potential conflicts of interest in respect of all proposed engagements from KPMG member firms. After entering the basic engagement information in the Sentinel Request, the tool routes the proposed engagements through a global approval process culminating in a Sentinel Approval Number (SAN) per engagement. It is essential to get a SAN before committing the firm to do an engagement.',
                            score: 98
                        },
                        {
                            title: 'KteamsChat',
                            timestamp: '2020-02-06 00:00',
                            id: '|47ccaa2-463f9dec2880da4e.f6036c40_',
                            question: 'what is SAN',
                            answer: 'Sentinel is a KPMG software that identifies independence approval requirements and potential conflicts of interest in respect of all proposed engagements from KPMG member firms. After entering the basic engagement information in the Sentinel Request, the tool routes the proposed engagements through a global approval process culminating in a Sentinel Approval Number (SAN) per engagement. It is essential to get a SAN before committing the firm to do an engagement.',
                            score: 98
                        },
                        {
                            title: 'KPMGTeamBot_German',
                            timestamp: '2020-02-07 00:00',
                            id: '|47ccaa4-463f9dec2880da4e.f6036c41_',
                            question: 'What is validity',
                            answer: 'A SAN is valid until the end of the engagement and up to a maximum of three years. However, the approvers (typically the Sentinel Lead Partner and/or Conflicts Resolver) can restrict the validity of a SAN for a limited period.  A SAN for recurring engagements for a SEC audit client and its affiliates is valid for only one year.  A member firm\'s local policies may require a new SAN more frequently than every three years in certain circumstances.',
                            score: 95
                        },
                        {
                            title: 'KteamsChat',
                            timestamp: '2020-02-08 00:00',
                            id: '|47ccaa6-463f9dec2880da4e.f6036c42_',
                            question: 'Why to use SAN?',
                            answer: 'Sentinel is a KPMG software that identifies independence approval requirements and potential conflicts of interest in respect of all proposed engagements from KPMG member firms. After entering the basic engagement information in the Sentinel Request, the tool routes the proposed engagements through a global approval process culminating in a Sentinel Approval Number (SAN) per engagement. It is essential to get a SAN before committing the firm to do an engagement.',
                            score: 58.82
                        },
                        {
                            title: 'KPMGTeamBot_German',
                            timestamp: '2020-02-09 00:00',
                            id: '|47ccabf-463f9dec2880da4e.f6036c4f_',
                            question: 'okay, can you ask questions to me?',
                            answer: 'I\'m better at answering questions.',
                            score: 37.75
                        },
                        {
                            title: 'KteamsChat',
                            timestamp: '2020-02-10 00:00',
                            id: '|47ccac1-463f9dec2880da4e.f6036c50_',
                            question: 'But you are not answering my questions',
                            answer: 'Sorry about that.',
                            score: 34.56
                        },
                        {
                            title: 'KPMGTeamBot_German',
                            timestamp: '2020-02-11 00:00',
                            id: '|47ccad6-463f9dec2880da4e.f6036c5b_',
                            question: 'What is a GPU?',
                            answer: 'This is what I do every day.',
                            score: 7.9
                        },
                        {
                            title: 'KteamsChat',
                            timestamp: '2020-02-12 00:00',
                            id: '|47ccad8-463f9dec2880da4e.f6036c5c_',
                            question: 'What is a GUP?',
                            answer: 'The Global Ultimate Parent (GUP) is the highest-tiered entity in a family tree in Sentinel. A Sentinel Tree typically consists of all entities that are ultimately controlled by the GUP or the GUP has significant influence.   For example, for all Microsoft Sentinel entities, the GUP will be Microsoft Corporation.',
                            score: 100
                        },
                        {
                            title: 'KPMGTeamBot_German',
                            timestamp: '2020-02-13 00:00',
                            id: '|47ccb11-463f9dec2880da4e.f6036c73_',
                            question: 'hello',
                            answer: 'Hello.',
                            score: 100
                        },
                        {
                            title: 'KteamsChat',
                            timestamp: '2020-02-14 00:00',
                            id: '|47ccb23-463f9dec2880da4e.f6036c7a_',
                            question: 'Who needs to be added as Engaging Parties in a Sentinel Request ?',
                            answer: 'The following are to be added as Engaging Parties:  � � �- Any party signing the engagement contract or otherwise bound to the engagement contract.   � � - Any party that is to pay any of the fees for the service.   � � - Any party that has a role in defining the scope of the engagement.   � � - Any party that has a role in selecting KPMG for the service should be listed as an additional Engaging Party  In addition, the� following have to be included as Engaging Parties as well:  � � - a prime contractor hiring KPMG  � � - a subcontractor� of KPMG  � � - a target if the seller is an Engaging Party (in a Deal Advisory engagement)',
                            score: 100
                        },
                        {
                            title: 'KPMGTeamBot_German',
                            timestamp: '2020-02-15 00:00',
                            id: '|47ccb37-463f9dec2880da4e.f6036c85_',
                            question: 'my name is mahendra',
                            answer: 'I don\'t have a name.',
                            score: 22.1
                        },
                        {
                            title: 'KteamsChat',
                            timestamp: '2020-02-16 00:00',
                            id: '|47cca04-463f9dec2880da4e.f6036bef_',
                            question: 'how many leaves i can have',
                            answer: 'there are 3 months of maternity paid leaves',
                            score: 84.32
                        },
                        {
                            title: 'KteamsChat',
                            timestamp: '2020-02-17 00:00',
                            id: '|47cca08-463f9dec2880da4e.f6036bf2_',
                            question: 'hi',
                            answer: 'Hello.',
                            score: 100
                        },
                        {
                            title: 'KPMGTeamBot_German',
                            timestamp: '2020-02-18 00:00',
                            id: '|47cca0d-463f9dec2880da4e.f6036bf4_',
                            question: 'Weather',
                            answer: 'Ok.',
                            score: 8.14
                        },
                        {
                            title: 'KPMGTeamBot_German',
                            timestamp: '2020-02-19 00:00',
                            id: '|47cca0f-463f9dec2880da4e.f6036bf5_',
                            question: 'Hi',
                            answer: 'Hello.',
                            score: 100
                        },
                        {
                            title: 'KPMGTeamBot_German',
                            timestamp: '2020-02-20 00:00',
                            id: '|47cca11-463f9dec2880da4e.f6036bf6_',
                            question: 'What you have',
                            answer: 'This is what I do every day.',
                            score: 50.62
                        },
                        {
                            title: 'KPMGTeamBot_German',
                            timestamp: '2020-02-21 00:00',
                            id: '|47cca13-463f9dec2880da4e.f6036bf7_',
                            question: 'Where are you',
                            answer: 'I\'m digital. I don\'t have a physical location.',
                            score: 100
                        },
                        {
                            title: 'KPMGTeamBot_German',
                            timestamp: '2020-02-22 00:00',
                            id: '|47cca80-463f9dec2880da4e.f6036c2a_',
                            question: 'number of holidays in month',
                            answer: 'Thank you, and the same to you.',
                            score: 29.89
                        },
                        {
                            title: 'KPMGTeamBot_German',
                            timestamp: '2020-02-23 00:00',
                            id: '|47cca84-463f9dec2880da4e.f6036c2d_',
                            question: 'number of holidays in month',
                            answer: 'Thank you, and the same to you.',
                            score: 29.89
                        },
                        {
                            title: 'KteamsChat',
                            timestamp: '2020-02-24 00:00',
                            id: '|47cca8d-463f9dec2880da4e.f6036c34_',
                            question: 'Kann PGT-SR auf ausgeglichene Translokationen testen?',
                            answer: 'Ja, unser Test kann die unausgeglichenen Formen der ausgeglichensten Translokationen [wechselseitige Translokationen] erkennen. Um zu best�tigen, dass unsere Technologie unausgewogene Formen der Translokation eines Patienten erkennt, m�ssen wir den Karyotyp des Patienten (oder des Partners) vor dem Einreichen von Embryo-Biopsien zum Testen einreichen. Auf diese Weise kann unser genetisches Beratungsteam eine ma�geschneiderte Fallbewertung durchf�hren, um sicherzustellen, dass alle unausgeglichenen Formen der Translokation erkannt werden k�nnen',
                            score: 100
                        },
                        {
                            title: 'KteamsChat',
                            timestamp: '2020-02-25 00:00',
                            id: '|47cca90-463f9dec2880da4e.f6036c36_',
                            question: 'hello',
                            answer: 'Hello.',
                            score: 100
                        },
                        {
                            title: 'KPMGTeamBot_German',
                            timestamp: '2020-02-26 00:00',
                            id: '|47cca92-463f9dec2880da4e.f6036c37_',
                            question: 'what is SAN?',
                            answer: 'Sentinel is a KPMG software that identifies independence approval requirements and potential conflicts of interest in respect of all proposed engagements from KPMG member firms. After entering the basic engagement information in the Sentinel Request, the tool routes the proposed engagements through a global approval process culminating in a Sentinel Approval Number (SAN) per engagement. It is essential to get a SAN before committing the firm to do an engagement.',
                            score: 98
                        },
                        {
                            title: 'KteamsChat',
                            timestamp: '2020-02-27 00:00',
                            id: '|47cca94-463f9dec2880da4e.f6036c38_',
                            question: 'hello',
                            answer: 'Hello.',
                            score: 100
                        },
                        {
                            title: 'KteamsChat',
                            timestamp: '2020-02-28 00:00',
                            id: '|47cca96-463f9dec2880da4e.f6036c39_',
                            question: 'what is san?',
                            answer: 'Sentinel is a KPMG software that identifies independence approval requirements and potential conflicts of interest in respect of all proposed engagements from KPMG member firms. After entering the basic engagement information in the Sentinel Request, the tool routes the proposed engagements through a global approval process culminating in a Sentinel Approval Number (SAN) per engagement. It is essential to get a SAN before committing the firm to do an engagement.',
                            score: 98
                        },
                        {
                            title: 'KPMGTeamBot_German',
                            timestamp: '2020-02-29 00:00',
                            id: '|47ccab0-463f9dec2880da4e.f6036c48_',
                            question: 'Hi',
                            answer: 'Hello.',
                            score: 100
                        },
                        {
                            title: 'KPMGTeamBot_German',
                            timestamp: '2020-03-01 00:00',
                            id: '|47ccab2-463f9dec2880da4e.f6036c49_',
                            question: 'can you cry?',
                            answer: 'I don\'t have a body.',
                            score: 100
                        },
                        {
                            title: 'KPMGTeamBot_German',
                            timestamp: '2020-03-02 00:00',
                            id: '|47ccab4-463f9dec2880da4e.f6036c4a_',
                            question: 'Do you sleep?',
                            answer: 'I don\'t have a body.',
                            score: 100
                        },
                        {
                            title: 'KPMGTeamBot_German',
                            timestamp: '2020-03-03 00:00',
                            id: '|47ccab6-463f9dec2880da4e.f6036c4b_',
                            question: 'This is boring',
                            answer: 'I aim for efficiency.',
                            score: 100
                        },
                        {
                            title: 'KPMGTeamBot_German',
                            timestamp: '2020-03-04 00:00',
                            id: '|47ccab9-463f9dec2880da4e.f6036c4c_',
                            question: 'I am getting bored',
                            answer: 'Well, let me know if there\'s anything I can do for you.',
                            score: 61.99
                        },
                        {
                            title: 'KPMGTeamBot_German',
                            timestamp: '2020-03-05 00:00',
                            id: '|47ccabb-463f9dec2880da4e.f6036c4d_',
                            question: 'How old are you?',
                            answer: 'Age doesn\'t really apply to me.',
                            score: 100
                        },
                        {
                            title: 'KPMGTeamBot_German',
                            timestamp: '2020-03-06 00:00',
                            id: '|47ccabd-463f9dec2880da4e.f6036c4e_',
                            question: 'I am younger than you',
                            answer: 'You\'re definitely smarter than I am.',
                            score: 43.04
                        },
                        {
                            title: 'KPMGTeamBot_German',
                            timestamp: '2020-03-07 00:00',
                            id: '|47ccac3-463f9dec2880da4e.f6036c51_',
                            question: 'AMA',
                            answer: 'I\'m better at answering questions.',
                            score: 100
                        },
                        {
                            title: 'KteamsChat',
                            timestamp: '2020-03-08 00:00',
                            id: '|47ccac5-463f9dec2880da4e.f6036c52_',
                            question: 'Okay, tell me who is your boss?',
                            answer: 'I don\'t have family.',
                            score: 38.42
                        },
                        {
                            title: 'KteamsChat',
                            timestamp: '2020-03-09 00:00',
                            id: '|47ccac7-463f9dec2880da4e.f6036c53_',
                            question: 'Family?',
                            answer: 'I don\'t have family.',
                            score: 58.74
                        },
                        {
                            title: 'KteamsChat',
                            timestamp: '2020-03-10 00:00',
                            id: '|47ccac9-463f9dec2880da4e.f6036c54_',
                            question: 'that\'s good, but I am asking about your boss',
                            answer: 'I enjoy talking with you.',
                            score: 34.96
                        },
                        {
                            title: 'KteamsChat',
                            timestamp: '2020-03-11 00:00',
                            id: '|47ccacb-463f9dec2880da4e.f6036c55_',
                            question: 'hmm',
                            answer: 'I\'m afraid I\'m not musically inclined.',
                            score: 57.88
                        },
                        {
                            title: 'KPMGTeamBot_German',
                            timestamp: '2020-03-12 00:00',
                            id: '|47ccacd-463f9dec2880da4e.f6036c56_',
                            question: 'Okay do you know how to play game?',
                            answer: 'I don\'t know.',
                            score: 36.76
                        },
                        {
                            title: 'KPMGTeamBot_German',
                            timestamp: '2020-03-13 00:00',
                            id: '|47ccacf-463f9dec2880da4e.f6036c57_',
                            question: 'how to play',
                            answer: 'Ok.',
                            score: 37.64
                        },
                        {
                            title: 'KteamsChat',
                            timestamp: '2020-03-14 00:00',
                            id: '|47ccad1-463f9dec2880da4e.f6036c59_',
                            question: 'how to play?',
                            answer: 'Ok.',
                            score: 37.64
                        },
                        {
                            title: 'KPMGTeamBot_German',
                            timestamp: '2020-03-15 00:00',
                            id: '|47ccad3-463f9dec2880da4e.f6036c5a_',
                            question: 'I am asking bro',
                            answer: 'Okay.',
                            score: 32.43
                        },
                        {
                            title: 'KteamsChat',
                            timestamp: '2020-03-16 00:00',
                            id: '|47ccade-463f9dec2880da4e.f6036c5e_',
                            question: 'Hi',
                            answer: 'Hello.',
                            score: 100
                        },
                        {
                            title: 'KPMGTeamBot_German',
                            timestamp: '2020-03-17 00:00',
                            id: '|47ccae0-463f9dec2880da4e.f6036c5f_',
                            question: 'What is GUP?',
                            answer: 'Just standing by, ready to help.',
                            score: 99
                        },
                        {
                            title: 'KPMGTeamBot_German',
                            timestamp: '2020-03-18 00:00',
                            id: '|47ccae2-463f9dec2880da4e.f6036c60_',
                            question: 'What is a GUP?',
                            answer: 'The Global Ultimate Parent (GUP) is the highest-tiered entity in a family tree in Sentinel. A Sentinel Tree typically consists of all entities that are ultimately controlled by the GUP or the GUP has significant influence.   For example, for all Microsoft Sentinel entities, the GUP will be Microsoft Corporation.',
                            score: 100
                        },
                        {
                            title: 'KPMGTeamBot_German',
                            timestamp: '2020-03-19 00:00',
                            id: '|47ccae7-463f9dec2880da4e.f6036c62_',
                            question: 'What is Sentinel?',
                            answer: 'Sentinel is a KPMG software that identifies independence approval requirements and potential conflicts of interest in respect of all proposed engagements from KPMG member firms. After entering the basic engagement information in the Sentinel Request, the tool routes the proposed engagements through a global approval process culminating in a Sentinel Approval Number (SAN) per engagement. It is essential to get a SAN before committing the firm to do an engagement.',
                            score: 100
                        },
                        {
                            title: 'KteamsChat',
                            timestamp: '2020-03-20 00:00',
                            id: '|47ccae9-463f9dec2880da4e.f6036c63_',
                            question: 'Who all need to become engaging parties in Sentinel?',
                            answer: 'The following are to be added as Engaging Parties:  � � �- Any party signing the engagement contract or otherwise bound to the engagement contract.   � � - Any party that is to pay any of the fees for the service.   � � - Any party that has a role in defining the scope of the engagement.   � � - Any party that has a role in selecting KPMG for the service should be listed as an additional Engaging Party  In addition, the� following have to be included as Engaging Parties as well:  � � - a prime contractor hiring KPMG  � � - a subcontractor� of KPMG  � � - a target if the seller is an Engaging Party (in a Deal Advisory engagement)',
                            score: 100
                        },
                        {
                            title: 'KteamsChat',
                            timestamp: '2020-03-21 00:00',
                            id: '|47ccaeb-463f9dec2880da4e.f6036c64_',
                            question: 'And Validity of SAN?',
                            answer: 'A SAN is valid until the end of the engagement and up to a maximum of three years. However, the approvers (typically the Sentinel Lead Partner and/or Conflicts Resolver) can restrict the validity of a SAN for a limited period.  A SAN for recurring engagements for a SEC audit client and its affiliates is valid for only one year.  A member firm\'s local policies may require a new SAN more frequently than every three years in certain circumstances.',
                            score: 98
                        },
                        {
                            title: 'KteamsChat',
                            timestamp: '2020-03-22 00:00',
                            id: '|47ccaee-463f9dec2880da4e.f6036c65_',
                            question: 'You are intelligent',
                            answer: 'I do what I can.',
                            score: 99
                        },
                        {
                            title: 'KPMGTeamBot_German',
                            timestamp: '2020-03-23 00:00',
                            id: '|47ccaf2-463f9dec2880da4e.f6036c67_',
                            question: 'How many holiday I can take?',
                            answer: 'there are 2 mandatory holiday and 1 restricted holiday',
                            score: 66.46
                        },
                        {
                            title: 'KteamsChat',
                            timestamp: '2020-03-24 00:00',
                            id: '|47ccaf9-463f9dec2880da4e.f6036c6a_',
                            question: 'Thanks',
                            answer: 'You\'re welcome.',
                            score: 100
                        },
                        {
                            title: 'KPMGTeamBot_German',
                            timestamp: '2020-03-25 00:00',
                            id: '|47ccb28-463f9dec2880da4e.f6036c7c_',
                            question: 'what is SAN',
                            answer: 'Sentinel is a KPMG software that identifies independence approval requirements and potential conflicts of interest in respect of all proposed engagements from KPMG member firms. After entering the basic engagement information in the Sentinel Request, the tool routes the proposed engagements through a global approval process culminating in a Sentinel Approval Number (SAN) per engagement. It is essential to get a SAN before committing the firm to do an engagement.',
                            score: 98
                        },
                        {
                            title: 'KteamsChat',
                            timestamp: '2020-03-26 00:00',
                            id: '|47ccb2c-463f9dec2880da4e.f6036c7f_',
                            question: 'hi',
                            answer: 'Hello.',
                            score: 100
                        },
                        {
                            title: 'KPMGTeamBot_German',
                            timestamp: '2020-03-27 00:00',
                            id: '|47ccb2e-463f9dec2880da4e.f6036c80_',
                            question: 'who are you',
                            answer: 'I don\'t have a name.',
                            score: 100
                        },
                        {
                            title: 'KPMGTeamBot_German',
                            timestamp: '2020-03-28 00:00',
                            id: '|47ccb30-463f9dec2880da4e.f6036c81_',
                            question: 'can you tell me what is SAN',
                            answer: 'I\'m digital. I don\'t have a physical location.',
                            score: 47.86
                        },
                        {
                            title: 'KPMGTeamBot_German',
                            timestamp: '2020-03-29 00:00',
                            id: '|47ccb35-463f9dec2880da4e.f6036c84_',
                            question: 'SAN',
                            answer: 'Sentinel is a KPMG software that identifies independence approval requirements and potential conflicts of interest in respect of all proposed engagements from KPMG member firms. After entering the basic engagement information in the Sentinel Request, the tool routes the proposed engagements through a global approval process culminating in a Sentinel Approval Number (SAN) per engagement. It is essential to get a SAN before committing the firm to do an engagement.',
                            score: 99
                        },
                        {
                            title: 'KteamsChat',
                            timestamp: '2020-03-30 00:00',
                            id: '|47cc9f4-463f9dec2880da4e.f6036be4_',
                            question: 'can you tell if any holiday exist in month',
                            answer: 'there are 2 mandatory holiday and 1 restricted holiday',
                            score: 100
                        },
                        {
                            title: 'KteamsChat',
                            timestamp: '2020-03-31 00:00',
                            id: '|47cc9f7-463f9dec2880da4e.f6036be6_',
                            question: 'intent is',
                            answer: 'Not at all.',
                            score: 8.76
                        },
                        {
                            title: 'KPMGTeamBot_German',
                            timestamp: '2020-04-01 00:00',
                            id: '|47cca5d-463f9dec2880da4e.f6036c14_',
                            question: 'SAN?',
                            answer: 'Sentinel is a KPMG software that identifies independence approval requirements and potential conflicts of interest in respect of all proposed engagements from KPMG member firms. After entering the basic engagement information in the Sentinel Request, the tool routes the proposed engagements through a global approval process culminating in a Sentinel Approval Number (SAN) per engagement. It is essential to get a SAN before committing the firm to do an engagement.',
                            score: 99
                        },
                        {
                            title: 'KPMGTeamBot_German',
                            timestamp: '2020-04-02 00:00',
                            id: '|47cca60-463f9dec2880da4e.f6036c15_',
                            question: 'san Validity?',
                            answer: 'A SAN is valid until the end of the engagement and up to a maximum of three years. However, the approvers (typically the Sentinel Lead Partner and/or Conflicts Resolver) can restrict the validity of a SAN for a limited period.  A SAN for recurring engagements for a SEC audit client and its affiliates is valid for only one year.  A member firm\'s local policies may require a new SAN more frequently than every three years in certain circumstances.',
                            score: 99
                        },
                        {
                            title: 'KteamsChat',
                            timestamp: '2020-04-03 00:00',
                            id: '|47cca63-463f9dec2880da4e.f6036c16_',
                            question: 'san requirement',
                            answer: 'Sentinel is a KPMG software that identifies independence approval requirements and potential conflicts of interest in respect of all proposed engagements from KPMG member firms. After entering the basic engagement information in the Sentinel Request, the tool routes the proposed engagements through a global approval process culminating in a Sentinel Approval Number (SAN) per engagement. It is essential to get a SAN before committing the firm to do an engagement.',
                            score: 77.02
                        },
                        {
                            title: 'KteamsChat',
                            timestamp: '2020-04-04 00:00',
                            id: '|47cca66-463f9dec2880da4e.f6036c17_',
                            question: 'san engaging parties?',
                            answer: 'The following are to be added as Engaging Parties:  � � �- Any party signing the engagement contract or otherwise bound to the engagement contract.   � � - Any party that is to pay any of the fees for the service.   � � - Any party that has a role in defining the scope of the engagement.   � � - Any party that has a role in selecting KPMG for the service should be listed as an additional Engaging Party  In addition, the� following have to be included as Engaging Parties as well:  � � - a prime contractor hiring KPMG  � � - a subcontractor� of KPMG  � � - a target if the seller is an Engaging Party (in a Deal Advisory engagement)',
                            score: 99
                        },
                        {
                            title: 'KPMGTeamBot_German',
                            timestamp: '2020-04-05 00:00',
                            id: '|47cca9a-463f9dec2880da4e.f6036c3c_',
                            question: 'What is the validity of a SAN?',
                            answer: 'A SAN is valid until the end of the engagement and up to a maximum of three years. However, the approvers (typically the Sentinel Lead Partner and/or Conflicts Resolver) can restrict the validity of a SAN for a limited period.  A SAN for recurring engagements for a SEC audit client and its affiliates is valid for only one year.  A member firm\'s local policies may require a new SAN more frequently than every three years in certain circumstances.',
                            score: 100
                        },
                        {
                            title: 'KteamsChat',
                            timestamp: '2020-04-06 00:00',
                            id: '|47cca9c-463f9dec2880da4e.f6036c3d_',
                            question: 'Hi',
                            answer: 'Hello.',
                            score: 100
                        },
                        {
                            title: 'KteamsChat',
                            timestamp: '2020-04-07 00:00',
                            id: '|47cca9e-463f9dec2880da4e.f6036c3e_',
                            question: 'What is SAN?',
                            answer: 'Sentinel is a KPMG software that identifies independence approval requirements and potential conflicts of interest in respect of all proposed engagements from KPMG member firms. After entering the basic engagement information in the Sentinel Request, the tool routes the proposed engagements through a global approval process culminating in a Sentinel Approval Number (SAN) per engagement. It is essential to get a SAN before committing the firm to do an engagement.',
                            score: 98
                        },
                        {
                            title: 'KPMGTeamBot_German',
                            timestamp: '2020-04-08 00:00',
                            id: '|47ccaa0-463f9dec2880da4e.f6036c3f_',
                            question: 'what is SAN',
                            answer: 'Sentinel is a KPMG software that identifies independence approval requirements and potential conflicts of interest in respect of all proposed engagements from KPMG member firms. After entering the basic engagement information in the Sentinel Request, the tool routes the proposed engagements through a global approval process culminating in a Sentinel Approval Number (SAN) per engagement. It is essential to get a SAN before committing the firm to do an engagement.',
                            score: 98
                        },
                        {
                            title: 'KteamsChat',
                            timestamp: '2020-04-09 00:00',
                            id: '|47ccaa2-463f9dec2880da4e.f6036c40_',
                            question: 'what is SAN',
                            answer: 'Sentinel is a KPMG software that identifies independence approval requirements and potential conflicts of interest in respect of all proposed engagements from KPMG member firms. After entering the basic engagement information in the Sentinel Request, the tool routes the proposed engagements through a global approval process culminating in a Sentinel Approval Number (SAN) per engagement. It is essential to get a SAN before committing the firm to do an engagement.',
                            score: 98
                        },
                        {
                            title: 'KPMGTeamBot_German',
                            timestamp: '2020-04-10 00:00',
                            id: '|47ccaa4-463f9dec2880da4e.f6036c41_',
                            question: 'What is validity',
                            answer: 'A SAN is valid until the end of the engagement and up to a maximum of three years. However, the approvers (typically the Sentinel Lead Partner and/or Conflicts Resolver) can restrict the validity of a SAN for a limited period.  A SAN for recurring engagements for a SEC audit client and its affiliates is valid for only one year.  A member firm\'s local policies may require a new SAN more frequently than every three years in certain circumstances.',
                            score: 95
                        },
                        {
                            title: 'KteamsChat',
                            timestamp: '2020-04-11 00:00',
                            id: '|47ccaa6-463f9dec2880da4e.f6036c42_',
                            question: 'Why to use SAN?',
                            answer: 'Sentinel is a KPMG software that identifies independence approval requirements and potential conflicts of interest in respect of all proposed engagements from KPMG member firms. After entering the basic engagement information in the Sentinel Request, the tool routes the proposed engagements through a global approval process culminating in a Sentinel Approval Number (SAN) per engagement. It is essential to get a SAN before committing the firm to do an engagement.',
                            score: 58.82
                        },
                        {
                            title: 'KPMGTeamBot_German',
                            timestamp: '2020-04-12 00:00',
                            id: '|47ccabf-463f9dec2880da4e.f6036c4f_',
                            question: 'okay, can you ask questions to me?',
                            answer: 'I\'m better at answering questions.',
                            score: 37.75
                        },
                        {
                            title: 'KteamsChat',
                            timestamp: '2020-04-13 00:00',
                            id: '|47ccac1-463f9dec2880da4e.f6036c50_',
                            question: 'But you are not answering my questions',
                            answer: 'Sorry about that.',
                            score: 34.56
                        },
                        {
                            title: 'KPMGTeamBot_German',
                            timestamp: '2020-04-14 00:00',
                            id: '|47ccad6-463f9dec2880da4e.f6036c5b_',
                            question: 'What is a GPU?',
                            answer: 'This is what I do every day.',
                            score: 7.9
                        },
                        {
                            title: 'KteamsChat',
                            timestamp: '2020-04-15 00:00',
                            id: '|47ccad8-463f9dec2880da4e.f6036c5c_',
                            question: 'What is a GUP?',
                            answer: 'The Global Ultimate Parent (GUP) is the highest-tiered entity in a family tree in Sentinel. A Sentinel Tree typically consists of all entities that are ultimately controlled by the GUP or the GUP has significant influence.   For example, for all Microsoft Sentinel entities, the GUP will be Microsoft Corporation.',
                            score: 100
                        },
                        {
                            title: 'KPMGTeamBot_German',
                            timestamp: '2020-04-16 00:00',
                            id: '|47ccb11-463f9dec2880da4e.f6036c73_',
                            question: 'hello',
                            answer: 'Hello.',
                            score: 100
                        },
                        {
                            title: 'KteamsChat',
                            timestamp: '2020-04-17 00:00',
                            id: '|47ccb23-463f9dec2880da4e.f6036c7a_',
                            question: 'Who needs to be added as Engaging Parties in a Sentinel Request ?',
                            answer: 'The following are to be added as Engaging Parties:  � � �- Any party signing the engagement contract or otherwise bound to the engagement contract.   � � - Any party that is to pay any of the fees for the service.   � � - Any party that has a role in defining the scope of the engagement.   � � - Any party that has a role in selecting KPMG for the service should be listed as an additional Engaging Party  In addition, the� following have to be included as Engaging Parties as well:  � � - a prime contractor hiring KPMG  � � - a subcontractor� of KPMG  � � - a target if the seller is an Engaging Party (in a Deal Advisory engagement)',
                            score: 100
                        },
                        {
                            title: 'KPMGTeamBot_German',
                            timestamp: '2020-04-18 00:00',
                            id: '|47ccb37-463f9dec2880da4e.f6036c85_',
                            question: 'my name is mahendra',
                            answer: 'I don\'t have a name.',
                            score: 22.1
                        },
                        {
                            title: 'KteamsChat',
                            timestamp: '2020-04-19 00:00',
                            id: '|47cca04-463f9dec2880da4e.f6036bef_',
                            question: 'how many leaves i can have',
                            answer: 'there are 3 months of maternity paid leaves',
                            score: 84.32
                        },
                        {
                            title: 'KteamsChat',
                            timestamp: '2020-04-20 00:00',
                            id: '|47cca08-463f9dec2880da4e.f6036bf2_',
                            question: 'hi',
                            answer: 'Hello.',
                            score: 100
                        },
                        {
                            title: 'KPMGTeamBot_German',
                            timestamp: '2020-04-21 00:00',
                            id: '|47cca0d-463f9dec2880da4e.f6036bf4_',
                            question: 'Weather',
                            answer: 'Ok.',
                            score: 8.14
                        },
                        {
                            title: 'KPMGTeamBot_German',
                            timestamp: '2020-04-22 00:00',
                            id: '|47cca0f-463f9dec2880da4e.f6036bf5_',
                            question: 'Hi',
                            answer: 'Hello.',
                            score: 100
                        },
                        {
                            title: 'KPMGTeamBot_German',
                            timestamp: '2020-04-23 00:00',
                            id: '|47cca11-463f9dec2880da4e.f6036bf6_',
                            question: 'What you have',
                            answer: 'This is what I do every day.',
                            score: 50.62
                        },
                        {
                            title: 'KPMGTeamBot_German',
                            timestamp: '2020-04-24 00:00',
                            id: '|47cca13-463f9dec2880da4e.f6036bf7_',
                            question: 'Where are you',
                            answer: 'I\'m digital. I don\'t have a physical location.',
                            score: 100
                        },
                        {
                            title: 'KPMGTeamBot_German',
                            timestamp: '2020-04-25 00:00',
                            id: '|47cca80-463f9dec2880da4e.f6036c2a_',
                            question: 'number of holidays in month',
                            answer: 'Thank you, and the same to you.',
                            score: 29.89
                        },
                        {
                            title: 'KPMGTeamBot_German',
                            timestamp: '2020-04-26 00:00',
                            id: '|47cca84-463f9dec2880da4e.f6036c2d_',
                            question: 'number of holidays in month',
                            answer: 'Thank you, and the same to you.',
                            score: 29.89
                        },
                        {
                            title: 'KteamsChat',
                            timestamp: '2020-04-27 00:00',
                            id: '|47cca8d-463f9dec2880da4e.f6036c34_',
                            question: 'Kann PGT-SR auf ausgeglichene Translokationen testen?',
                            answer: 'Ja, unser Test kann die unausgeglichenen Formen der ausgeglichensten Translokationen [wechselseitige Translokationen] erkennen. Um zu best�tigen, dass unsere Technologie unausgewogene Formen der Translokation eines Patienten erkennt, m�ssen wir den Karyotyp des Patienten (oder des Partners) vor dem Einreichen von Embryo-Biopsien zum Testen einreichen. Auf diese Weise kann unser genetisches Beratungsteam eine ma�geschneiderte Fallbewertung durchf�hren, um sicherzustellen, dass alle unausgeglichenen Formen der Translokation erkannt werden k�nnen',
                            score: 100
                        },
                        {
                            title: 'KteamsChat',
                            timestamp: '2020-04-28 00:00',
                            id: '|47cca90-463f9dec2880da4e.f6036c36_',
                            question: 'hello',
                            answer: 'Hello.',
                            score: 100
                        },
                        {
                            title: 'KPMGTeamBot_German',
                            timestamp: '2020-04-29 00:00',
                            id: '|47ccb28-463f9dec2880da4e.f6036c7c_',
                            question: 'what is SAN',
                            answer: 'Sentinel is a KPMG software that identifies independence approval requirements and potential conflicts of interest in respect of all proposed engagements from KPMG member firms. After entering the basic engagement information in the Sentinel Request, the tool routes the proposed engagements through a global approval process culminating in a Sentinel Approval Number (SAN) per engagement. It is essential to get a SAN before committing the firm to do an engagement.',
                            score: 98
                        },
                        {
                            title: 'KteamsChat',
                            timestamp: '2020-04-30 00:00',
                            id: '|47ccb2c-463f9dec2880da4e.f6036c7f_',
                            question: 'hi',
                            answer: 'Hello.',
                            score: 100
                        },
                        {
                            title: 'KPMGTeamBot_German',
                            timestamp: '2020-05-01 00:00',
                            id: '|47ccb2e-463f9dec2880da4e.f6036c80_',
                            question: 'who are you',
                            answer: 'I don\'t have a name.',
                            score: 100
                        },
                        {
                            title: 'KPMGTeamBot_German',
                            timestamp: '2020-05-02 00:00',
                            id: '|47ccb30-463f9dec2880da4e.f6036c81_',
                            question: 'can you tell me what is SAN',
                            answer: 'I\'m digital. I don\'t have a physical location.',
                            score: 47.86
                        },
                        {
                            title: 'KPMGTeamBot_German',
                            timestamp: '2020-05-03 00:00',
                            id: '|47ccb35-463f9dec2880da4e.f6036c84_',
                            question: 'SAN',
                            answer: 'Sentinel is a KPMG software that identifies independence approval requirements and potential conflicts of interest in respect of all proposed engagements from KPMG member firms. After entering the basic engagement information in the Sentinel Request, the tool routes the proposed engagements through a global approval process culminating in a Sentinel Approval Number (SAN) per engagement. It is essential to get a SAN before committing the firm to do an engagement.',
                            score: 99
                        },
                        {
                            title: 'KteamsChat',
                            timestamp: '2020-05-04 00:00',
                            id: '|47cc9f4-463f9dec2880da4e.f6036be4_',
                            question: 'can you tell if any holiday exist in month',
                            answer: 'there are 2 mandatory holiday and 1 restricted holiday',
                            score: 100
                        },
                        {
                            title: 'KteamsChat',
                            timestamp: '2020-05-05 00:00',
                            id: '|47cc9f7-463f9dec2880da4e.f6036be6_',
                            question: 'intent is',
                            answer: 'Not at all.',
                            score: 8.76
                        },
                        {
                            title: 'KPMGTeamBot_German',
                            timestamp: '2020-05-06 00:00',
                            id: '|47cca5d-463f9dec2880da4e.f6036c14_',
                            question: 'SAN?',
                            answer: 'Sentinel is a KPMG software that identifies independence approval requirements and potential conflicts of interest in respect of all proposed engagements from KPMG member firms. After entering the basic engagement information in the Sentinel Request, the tool routes the proposed engagements through a global approval process culminating in a Sentinel Approval Number (SAN) per engagement. It is essential to get a SAN before committing the firm to do an engagement.',
                            score: 99
                        },
                        {
                            title: 'KPMGTeamBot_German',
                            timestamp: '2020-05-07 00:00',
                            id: '|47cca60-463f9dec2880da4e.f6036c15_',
                            question: 'san Validity?',
                            answer: 'A SAN is valid until the end of the engagement and up to a maximum of three years. However, the approvers (typically the Sentinel Lead Partner and/or Conflicts Resolver) can restrict the validity of a SAN for a limited period.  A SAN for recurring engagements for a SEC audit client and its affiliates is valid for only one year.  A member firm\'s local policies may require a new SAN more frequently than every three years in certain circumstances.',
                            score: 99
                        },
                        {
                            title: 'KteamsChat',
                            timestamp: '2020-05-08 00:00',
                            id: '|47cca63-463f9dec2880da4e.f6036c16_',
                            question: 'san requirement',
                            answer: 'Sentinel is a KPMG software that identifies independence approval requirements and potential conflicts of interest in respect of all proposed engagements from KPMG member firms. After entering the basic engagement information in the Sentinel Request, the tool routes the proposed engagements through a global approval process culminating in a Sentinel Approval Number (SAN) per engagement. It is essential to get a SAN before committing the firm to do an engagement.',
                            score: 77.02
                        },
                        {
                            title: 'KteamsChat',
                            timestamp: '2020-05-09 00:00',
                            id: '|47cca66-463f9dec2880da4e.f6036c17_',
                            question: 'san engaging parties?',
                            answer: 'The following are to be added as Engaging Parties:  � � �- Any party signing the engagement contract or otherwise bound to the engagement contract.   � � - Any party that is to pay any of the fees for the service.   � � - Any party that has a role in defining the scope of the engagement.   � � - Any party that has a role in selecting KPMG for the service should be listed as an additional Engaging Party  In addition, the� following have to be included as Engaging Parties as well:  � � - a prime contractor hiring KPMG  � � - a subcontractor� of KPMG  � � - a target if the seller is an Engaging Party (in a Deal Advisory engagement)',
                            score: 99
                        },
                        {
                            title: 'KPMGTeamBot_German',
                            timestamp: '2020-05-10 00:00',
                            id: '|47cca9a-463f9dec2880da4e.f6036c3c_',
                            question: 'What is the validity of a SAN?',
                            answer: 'A SAN is valid until the end of the engagement and up to a maximum of three years. However, the approvers (typically the Sentinel Lead Partner and/or Conflicts Resolver) can restrict the validity of a SAN for a limited period.  A SAN for recurring engagements for a SEC audit client and its affiliates is valid for only one year.  A member firm\'s local policies may require a new SAN more frequently than every three years in certain circumstances.',
                            score: 100
                        },
                        {
                            title: 'KteamsChat',
                            timestamp: '2020-05-11 00:00',
                            id: '|47cca9c-463f9dec2880da4e.f6036c3d_',
                            question: 'Hi',
                            answer: 'Hello.',
                            score: 100
                        },
                        {
                            title: 'KteamsChat',
                            timestamp: '2020-05-12 00:00',
                            id: '|47cca9e-463f9dec2880da4e.f6036c3e_',
                            question: 'What is SAN?',
                            answer: 'Sentinel is a KPMG software that identifies independence approval requirements and potential conflicts of interest in respect of all proposed engagements from KPMG member firms. After entering the basic engagement information in the Sentinel Request, the tool routes the proposed engagements through a global approval process culminating in a Sentinel Approval Number (SAN) per engagement. It is essential to get a SAN before committing the firm to do an engagement.',
                            score: 98
                        },
                        {
                            title: 'KPMGTeamBot_German',
                            timestamp: '2020-05-13 00:00',
                            id: '|47ccaa0-463f9dec2880da4e.f6036c3f_',
                            question: 'what is SAN',
                            answer: 'Sentinel is a KPMG software that identifies independence approval requirements and potential conflicts of interest in respect of all proposed engagements from KPMG member firms. After entering the basic engagement information in the Sentinel Request, the tool routes the proposed engagements through a global approval process culminating in a Sentinel Approval Number (SAN) per engagement. It is essential to get a SAN before committing the firm to do an engagement.',
                            score: 98
                        },
                        {
                            title: 'KteamsChat',
                            timestamp: '2020-05-14 00:00',
                            id: '|47ccaa2-463f9dec2880da4e.f6036c40_',
                            question: 'what is SAN',
                            answer: 'Sentinel is a KPMG software that identifies independence approval requirements and potential conflicts of interest in respect of all proposed engagements from KPMG member firms. After entering the basic engagement information in the Sentinel Request, the tool routes the proposed engagements through a global approval process culminating in a Sentinel Approval Number (SAN) per engagement. It is essential to get a SAN before committing the firm to do an engagement.',
                            score: 98
                        },
                        {
                            title: 'KPMGTeamBot_German',
                            timestamp: '2020-05-15 00:00',
                            id: '|47ccaa4-463f9dec2880da4e.f6036c41_',
                            question: 'What is validity',
                            answer: 'A SAN is valid until the end of the engagement and up to a maximum of three years. However, the approvers (typically the Sentinel Lead Partner and/or Conflicts Resolver) can restrict the validity of a SAN for a limited period.  A SAN for recurring engagements for a SEC audit client and its affiliates is valid for only one year.  A member firm\'s local policies may require a new SAN more frequently than every three years in certain circumstances.',
                            score: 95
                        },
                        {
                            title: 'KteamsChat',
                            timestamp: '2020-05-16 00:00',
                            id: '|47ccaa6-463f9dec2880da4e.f6036c42_',
                            question: 'Why to use SAN?',
                            answer: 'Sentinel is a KPMG software that identifies independence approval requirements and potential conflicts of interest in respect of all proposed engagements from KPMG member firms. After entering the basic engagement information in the Sentinel Request, the tool routes the proposed engagements through a global approval process culminating in a Sentinel Approval Number (SAN) per engagement. It is essential to get a SAN before committing the firm to do an engagement.',
                            score: 58.82
                        },
                        {
                            title: 'KPMGTeamBot_German',
                            timestamp: '2020-05-17 00:00',
                            id: '|47ccabf-463f9dec2880da4e.f6036c4f_',
                            question: 'okay, can you ask questions to me?',
                            answer: 'I\'m better at answering questions.',
                            score: 37.75
                        },
                        {
                            title: 'KteamsChat',
                            timestamp: '2020-05-18 00:00',
                            id: '|47ccac1-463f9dec2880da4e.f6036c50_',
                            question: 'But you are not answering my questions',
                            answer: 'Sorry about that.',
                            score: 34.56
                        },
                        {
                            title: 'KPMGTeamBot_German',
                            timestamp: '2020-05-19 00:00',
                            id: '|47ccad6-463f9dec2880da4e.f6036c5b_',
                            question: 'What is a GPU?',
                            answer: 'This is what I do every day.',
                            score: 7.9
                        },
                        {
                            title: 'KteamsChat',
                            timestamp: '2020-05-20 00:00',
                            id: '|47ccad8-463f9dec2880da4e.f6036c5c_',
                            question: 'What is a GUP?',
                            answer: 'The Global Ultimate Parent (GUP) is the highest-tiered entity in a family tree in Sentinel. A Sentinel Tree typically consists of all entities that are ultimately controlled by the GUP or the GUP has significant influence.   For example, for all Microsoft Sentinel entities, the GUP will be Microsoft Corporation.',
                            score: 100
                        },
                        {
                            title: 'KPMGTeamBot_German',
                            timestamp: '2020-05-21 00:00',
                            id: '|47ccb11-463f9dec2880da4e.f6036c73_',
                            question: 'hello',
                            answer: 'Hello.',
                            score: 100
                        },
                        {
                            title: 'KteamsChat',
                            timestamp: '2020-05-22 00:00',
                            id: '|47ccb23-463f9dec2880da4e.f6036c7a_',
                            question: 'Who needs to be added as Engaging Parties in a Sentinel Request ?',
                            answer: 'The following are to be added as Engaging Parties:  � � �- Any party signing the engagement contract or otherwise bound to the engagement contract.   � � - Any party that is to pay any of the fees for the service.   � � - Any party that has a role in defining the scope of the engagement.   � � - Any party that has a role in selecting KPMG for the service should be listed as an additional Engaging Party  In addition, the� following have to be included as Engaging Parties as well:  � � - a prime contractor hiring KPMG  � � - a subcontractor� of KPMG  � � - a target if the seller is an Engaging Party (in a Deal Advisory engagement)',
                            score: 100
                        },
                        {
                            title: 'KPMGTeamBot_German',
                            timestamp: '2020-05-23 00:00',
                            id: '|47ccb37-463f9dec2880da4e.f6036c85_',
                            question: 'my name is mahendra',
                            answer: 'I don\'t have a name.',
                            score: 22.1
                        },
                        {
                            title: 'KteamsChat',
                            timestamp: '2020-05-24 00:00',
                            id: '|47cca04-463f9dec2880da4e.f6036bef_',
                            question: 'how many leaves i can have',
                            answer: 'there are 3 months of maternity paid leaves',
                            score: 84.32
                        },
                        {
                            title: 'KteamsChat',
                            timestamp: '2020-05-25 00:00',
                            id: '|47cca08-463f9dec2880da4e.f6036bf2_',
                            question: 'hi',
                            answer: 'Hello.',
                            score: 100
                        },
                        {
                            title: 'KPMGTeamBot_German',
                            timestamp: '2020-05-26 00:00',
                            id: '|47cca0d-463f9dec2880da4e.f6036bf4_',
                            question: 'Weather',
                            answer: 'Ok.',
                            score: 8.14
                        },
                        {
                            title: 'KPMGTeamBot_German',
                            timestamp: '2020-05-27 00:00',
                            id: '|47cca0f-463f9dec2880da4e.f6036bf5_',
                            question: 'Hi',
                            answer: 'Hello.',
                            score: 100
                        },
                        {
                            title: 'KPMGTeamBot_German',
                            timestamp: '2020-05-28 00:00',
                            id: '|47cca11-463f9dec2880da4e.f6036bf6_',
                            question: 'What you have',
                            answer: 'This is what I do every day.',
                            score: 50.62
                        },
                        {
                            title: 'KPMGTeamBot_German',
                            timestamp: '2020-05-29 00:00',
                            id: '|47cca13-463f9dec2880da4e.f6036bf7_',
                            question: 'Where are you',
                            answer: 'I\'m digital. I don\'t have a physical location.',
                            score: 100
                        },
                        {
                            title: 'KPMGTeamBot_German',
                            timestamp: '2020-05-30 00:00',
                            id: '|47cca80-463f9dec2880da4e.f6036c2a_',
                            question: 'number of holidays in month',
                            answer: 'Thank you, and the same to you.',
                            score: 29.89
                        },
                        {
                            title: 'KPMGTeamBot_German',
                            timestamp: '2020-05-31 00:00',
                            id: '|47cca84-463f9dec2880da4e.f6036c2d_',
                            question: 'number of holidays in month',
                            answer: 'Thank you, and the same to you.',
                            score: 29.89
                        },
                        {
                            title: 'KteamsChat',
                            timestamp: '2020-06-01 00:00',
                            id: '|47cca8d-463f9dec2880da4e.f6036c34_',
                            question: 'Kann PGT-SR auf ausgeglichene Translokationen testen?',
                            answer: 'Ja, unser Test kann die unausgeglichenen Formen der ausgeglichensten Translokationen [wechselseitige Translokationen] erkennen. Um zu best�tigen, dass unsere Technologie unausgewogene Formen der Translokation eines Patienten erkennt, m�ssen wir den Karyotyp des Patienten (oder des Partners) vor dem Einreichen von Embryo-Biopsien zum Testen einreichen. Auf diese Weise kann unser genetisches Beratungsteam eine ma�geschneiderte Fallbewertung durchf�hren, um sicherzustellen, dass alle unausgeglichenen Formen der Translokation erkannt werden k�nnen',
                            score: 100
                        },
                        {
                            title: 'KteamsChat',
                            timestamp: '2020-06-02 00:00',
                            id: '|47cca90-463f9dec2880da4e.f6036c36_',
                            question: 'hello',
                            answer: 'Hello.',
                            score: 100
                        }
                    ];
                    this.allChats = this.chats;
                }
                AppComponent.prototype.filterChats = function (event) {
                    if (event != null && event.value != null) {
                        this.allChats = this.chats.filter(function (chat) { return new Date(chat.timestamp).getTime() === new Date(event.value).getTime(); });
                    }
                    else {
                        this.allChats = this.chats;
                    }
                };
                AppComponent.prototype.removeFilter = function () {
                    this.selectedDate = null;
                    this.filterChats(null);
                };
                return AppComponent;
            }());
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
            /* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
            /* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
            /* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./material.module */ "./src/app/material.module.ts");
            /* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
            var AppModule = /** @class */ (function () {
                function AppModule() {
                }
                return AppModule;
            }());
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