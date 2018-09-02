(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./+pages/pages.module": [
		"./src/app/+pages/pages.module.ts",
		"pages-pages-module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return __webpack_require__.e(ids[1]).then(function() {
		var module = __webpack_require__(ids[0]);
		return module;
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/+common/common.module.ts":
/*!******************************************!*\
  !*** ./src/app/+common/common.module.ts ***!
  \******************************************/
/*! exports provided: COMMON_EXPORTS, CommonModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COMMON_EXPORTS", function() { return COMMON_EXPORTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommonModule", function() { return CommonModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/+common/navbar/navbar.component.ts");
/* harmony import */ var _loader_loader_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./loader/loader.component */ "./src/app/+common/loader/loader.component.ts");
/* harmony import */ var _rating_stars_rating_stars_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./rating-stars/rating-stars.component */ "./src/app/+common/rating-stars/rating-stars.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var COMMON_EXPORTS = [
    _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__["NavbarComponent"],
    _loader_loader_component__WEBPACK_IMPORTED_MODULE_3__["LoaderComponent"],
    _rating_stars_rating_stars_component__WEBPACK_IMPORTED_MODULE_4__["RatingStarsComponent"]
];
var CommonModule = /** @class */ (function () {
    function CommonModule() {
    }
    CommonModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
            ],
            declarations: COMMON_EXPORTS,
            exports: COMMON_EXPORTS
        })
    ], CommonModule);
    return CommonModule;
}());



/***/ }),

/***/ "./src/app/+common/loader/loader.component.html":
/*!******************************************************!*\
  !*** ./src/app/+common/loader/loader.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"block\">\n  <div class=\"icon i1\"></div>\n  <div class=\"icon i2\"></div>\n  <div class=\"icon i3\"></div>\n</div>"

/***/ }),

/***/ "./src/app/+common/loader/loader.component.scss":
/*!******************************************************!*\
  !*** ./src/app/+common/loader/loader.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**\r\n * Color variables\r\n */\n/**\r\n * Element spacer & glutters\r\n */\n/**\r\n * Positioning element's on page\r\n */\n/**/\n@-webkit-keyframes icon {\n  from {\n    -webkit-transform: scale(0.7);\n            transform: scale(0.7); }\n  to {\n    -webkit-transform: scale(1.1);\n            transform: scale(1.1); } }\n@keyframes icon {\n  from {\n    -webkit-transform: scale(0.7);\n            transform: scale(0.7); }\n  to {\n    -webkit-transform: scale(1.1);\n            transform: scale(1.1); } }\n:host .block {\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  padding-left: 2rem;\n  padding-right: 2rem; }\n:host .icon {\n  -webkit-animation: icon 0.8s infinite;\n          animation: icon 0.8s infinite;\n  transition: all 0.2s ease-in-out;\n  margin: 0.25rem;\n  width: 30px;\n  height: 30px;\n  background: url(\"data:image/png;base64,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\");\n  background-position: center center;\n  background-size: 90%;\n  background-repeat: no-repeat;\n  opacity: 0.2;\n  display: inline-block; }\n:host .i1 {\n  -webkit-animation-delay: 0s;\n          animation-delay: 0s; }\n:host .i2 {\n  -webkit-animation-delay: 0.2s;\n          animation-delay: 0.2s; }\n:host .i3 {\n  -webkit-animation-delay: 0.4s;\n          animation-delay: 0.4s; }\n"

/***/ }),

/***/ "./src/app/+common/loader/loader.component.ts":
/*!****************************************************!*\
  !*** ./src/app/+common/loader/loader.component.ts ***!
  \****************************************************/
/*! exports provided: LoaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoaderComponent", function() { return LoaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var LoaderComponent = /** @class */ (function () {
    function LoaderComponent() {
    }
    LoaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'loader',
            template: __webpack_require__(/*! ./loader.component.html */ "./src/app/+common/loader/loader.component.html"),
            styles: [__webpack_require__(/*! ./loader.component.scss */ "./src/app/+common/loader/loader.component.scss")]
        })
    ], LoaderComponent);
    return LoaderComponent;
}());



/***/ }),

/***/ "./src/app/+common/navbar/navbar.component.html":
/*!******************************************************!*\
  !*** ./src/app/+common/navbar/navbar.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar mt-2\">\n  <div class=\"navbar-brand\">\n    <img src=\"assets/img/logo-white.png\" alt=\"Logomarca da Duo Gourmet\">\n  </div>\n</nav>"

/***/ }),

/***/ "./src/app/+common/navbar/navbar.component.scss":
/*!******************************************************!*\
  !*** ./src/app/+common/navbar/navbar.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**\r\n * Color variables\r\n */\n/**\r\n * Element spacer & glutters\r\n */\n/**\r\n * Positioning element's on page\r\n */\n/**/\n.navbar {\n  padding-top: 1rem;\n  padding-bottom: 1rem;\n  justify-content: center; }\n.navbar-brand {\n  margin: 0; }\n.navbar-brand img {\n    max-width: 100%;\n    max-height: 50px; }\n"

/***/ }),

/***/ "./src/app/+common/navbar/navbar.component.ts":
/*!****************************************************!*\
  !*** ./src/app/+common/navbar/navbar.component.ts ***!
  \****************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
    }
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/+common/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.scss */ "./src/app/+common/navbar/navbar.component.scss")]
        })
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/+common/rating-stars/rating-stars.component.html":
/*!******************************************************************!*\
  !*** ./src/app/+common/rating-stars/rating-stars.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ratings\">\n  <div class=\"empty-stars\"></div>\n  <div class=\"full-stars\" [style.width]=\"(rating*10)+'%'\"></div>\n</div>"

/***/ }),

/***/ "./src/app/+common/rating-stars/rating-stars.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/+common/rating-stars/rating-stars.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**\r\n * Color variables\r\n */\n/**\r\n * Element spacer & glutters\r\n */\n/**\r\n * Positioning element's on page\r\n */\n/**/\n.ratings {\n  position: relative;\n  vertical-align: middle;\n  display: inline-block;\n  color: #cfd8dc;\n  overflow: hidden; }\n.full-stars {\n  position: absolute;\n  left: 0;\n  top: 0;\n  white-space: nowrap;\n  overflow: hidden;\n  color: #ffc107; }\n.empty-stars:before,\n.full-stars:before {\n  content: \"\\2605\\2605\\2605\\2605\\2605\";\n  font-size: 14pt; }\n.empty-stars:before {\n  -webkit-text-stroke: 1px #cfd8dc; }\n.full-stars:before {\n  -webkit-text-stroke: 1px #ffc107; }\n"

/***/ }),

/***/ "./src/app/+common/rating-stars/rating-stars.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/+common/rating-stars/rating-stars.component.ts ***!
  \****************************************************************/
/*! exports provided: RatingStarsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RatingStarsComponent", function() { return RatingStarsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RatingStarsComponent = /** @class */ (function () {
    function RatingStarsComponent() {
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], RatingStarsComponent.prototype, "rating", void 0);
    RatingStarsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'rating-stars',
            template: __webpack_require__(/*! ./rating-stars.component.html */ "./src/app/+common/rating-stars/rating-stars.component.html"),
            styles: [__webpack_require__(/*! ./rating-stars.component.scss */ "./src/app/+common/rating-stars/rating-stars.component.scss")]
        })
    ], RatingStarsComponent);
    return RatingStarsComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var routes = [
    { path: '', loadChildren: './+pages/pages.module#PagesModule' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _common_common_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./+common/common.module */ "./src/app/+common/common.module.ts");
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./main/main.component */ "./src/app/main/main.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _main_main_component__WEBPACK_IMPORTED_MODULE_5__["MainComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
                //
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _common_common_module__WEBPACK_IMPORTED_MODULE_4__["CommonModule"]
            ],
            providers: [],
            bootstrap: [_main_main_component__WEBPACK_IMPORTED_MODULE_5__["MainComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/main/main.component.html":
/*!******************************************!*\
  !*** ./src/app/main/main.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<navbar></navbar>\r\n<router-outlet></router-outlet>\r\n<small class=\"text-center py-2\" style=\"color:white\">\r\n  <span>criado por </span>\r\n  <a href=\"https://github.com/leandroluk\" target=\"_new\">Leandro Santiago Gomes</a>\r\n</small>"

/***/ }),

/***/ "./src/app/main/main.component.scss":
/*!******************************************!*\
  !*** ./src/app/main/main.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**\r\n * Color variables\r\n */\n/**\r\n * Element spacer & glutters\r\n */\n/**\r\n * Positioning element's on page\r\n */\n/**/\n@-webkit-keyframes main {\n  from {\n    opacity: 0; }\n  to {\n    opacity: 1; } }\n@keyframes main {\n  from {\n    opacity: 0; }\n  to {\n    opacity: 1; } }\n:host {\n  -webkit-animation: main 0.2s ease-in;\n          animation: main 0.2s ease-in;\n  width: 100%;\n  height: 100vh;\n  overflow: hidden;\n  background: linear-gradient(45deg, #f44336 0%, #673ab7 100%);\n  filter: progid:DXImageTransform.Microsoft.gradient startColorstr=\"'\" #f44336 \"'\", endColorstr=\"'#673ab7\" \"'\", GradientType=1;\n  display: flex;\n  flex-direction: column; }\n"

/***/ }),

/***/ "./src/app/main/main.component.ts":
/*!****************************************!*\
  !*** ./src/app/main/main.component.ts ***!
  \****************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var MainComponent = /** @class */ (function () {
    function MainComponent() {
    }
    MainComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'main',
            template: __webpack_require__(/*! ./main.component.html */ "./src/app/main/main.component.html"),
            styles: [__webpack_require__(/*! ./main.component.scss */ "./src/app/main/main.component.scss")],
        })
    ], MainComponent);
    return MainComponent;
}());



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
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])()
    .bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\DEV\NODE\duo-gourmet-test\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map