(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading wasm modules
/******/ 	var installedWasmModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// object with all compiled WebAssembly.Modules
/******/ 	__webpack_require__.w = {};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@angular/router/router.ngfactory.js":
/*!**********************************************************!*\
  !*** ./node_modules/@angular/router/router.ngfactory.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = __webpack_require__(/*! @angular/core */ "@angular/core");
var i1 = __webpack_require__(/*! @angular/router */ "@angular/router");
var RouterModuleNgFactory = i0.ɵcmf(i1.RouterModule, [], function (_l) { return i0.ɵmod([i0.ɵmpd(512, i0.ComponentFactoryResolver, i0.ɵCodegenComponentFactoryResolver, [[8, [ɵEmptyOutletComponentNgFactory]], [3, i0.ComponentFactoryResolver], i0.NgModuleRef]), i0.ɵmpd(1073742336, i1.RouterModule, i1.RouterModule, [[2, i1.ɵangular_packages_router_router_a], [2, i1.Router]])]); });
exports.RouterModuleNgFactory = RouterModuleNgFactory;
var styles_ɵEmptyOutletComponent = [];
var RenderType_ɵEmptyOutletComponent = i0.ɵcrt({ encapsulation: 2, styles: styles_ɵEmptyOutletComponent, data: {} });
exports.RenderType_ɵEmptyOutletComponent = RenderType_ɵEmptyOutletComponent;
function View_ɵEmptyOutletComponent_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 16777216, null, null, 1, "router-outlet", [], null, null, null, null, null)), i0.ɵdid(1, 212992, null, 0, i1.RouterOutlet, [i1.ChildrenOutletContexts, i0.ViewContainerRef, i0.ComponentFactoryResolver, [8, null], i0.ChangeDetectorRef], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
exports.View_ɵEmptyOutletComponent_0 = View_ɵEmptyOutletComponent_0;
function View_ɵEmptyOutletComponent_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "ng-component", [], null, null, null, View_ɵEmptyOutletComponent_0, RenderType_ɵEmptyOutletComponent)), i0.ɵdid(1, 49152, null, 0, i1.ɵEmptyOutletComponent, [], null, null)], null, null); }
exports.View_ɵEmptyOutletComponent_Host_0 = View_ɵEmptyOutletComponent_Host_0;
var ɵEmptyOutletComponentNgFactory = i0.ɵccf("ng-component", i1.ɵEmptyOutletComponent, View_ɵEmptyOutletComponent_Host_0, {}, {}, []);
exports.ɵEmptyOutletComponentNgFactory = ɵEmptyOutletComponentNgFactory;


/***/ }),

/***/ "./src/app/app.component.ngfactory.js":
/*!********************************************!*\
  !*** ./src/app/app.component.ngfactory.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = __webpack_require__(/*! @angular/core */ "@angular/core");
var i1 = __webpack_require__(/*! @angular/router */ "@angular/router");
var i2 = __webpack_require__(/*! @angular/common */ "@angular/common");
var i3 = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
var styles_AppComponent = [];
var RenderType_AppComponent = i0.ɵcrt({ encapsulation: 2, styles: styles_AppComponent, data: {} });
exports.RenderType_AppComponent = RenderType_AppComponent;
function View_AppComponent_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "h1", [], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["Universal Demo using Angular and Angular CLI"])), (_l()(), i0.ɵeld(2, 0, null, null, 2, "a", [["routerLink", "/"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (i0.ɵnov(_v, 3).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), i0.ɵdid(3, 671744, null, 0, i1.RouterLinkWithHref, [i1.Router, i1.ActivatedRoute, i2.LocationStrategy], { routerLink: [0, "routerLink"] }, null), (_l()(), i0.ɵted(-1, null, ["Home"])), (_l()(), i0.ɵeld(5, 0, null, null, 2, "a", [["routerLink", "/lazy"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (i0.ɵnov(_v, 6).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), i0.ɵdid(6, 671744, null, 0, i1.RouterLinkWithHref, [i1.Router, i1.ActivatedRoute, i2.LocationStrategy], { routerLink: [0, "routerLink"] }, null), (_l()(), i0.ɵted(-1, null, ["Lazy"])), (_l()(), i0.ɵeld(8, 0, null, null, 2, "a", [["routerLink", "/lazy/nested"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (i0.ɵnov(_v, 9).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), i0.ɵdid(9, 671744, null, 0, i1.RouterLinkWithHref, [i1.Router, i1.ActivatedRoute, i2.LocationStrategy], { routerLink: [0, "routerLink"] }, null), (_l()(), i0.ɵted(-1, null, ["Lazy_Nested"])), (_l()(), i0.ɵeld(11, 16777216, null, null, 1, "router-outlet", [], null, null, null, null, null)), i0.ɵdid(12, 212992, null, 0, i1.RouterOutlet, [i1.ChildrenOutletContexts, i0.ViewContainerRef, i0.ComponentFactoryResolver, [8, null], i0.ChangeDetectorRef], null, null)], function (_ck, _v) { var currVal_2 = "/"; _ck(_v, 3, 0, currVal_2); var currVal_5 = "/lazy"; _ck(_v, 6, 0, currVal_5); var currVal_8 = "/lazy/nested"; _ck(_v, 9, 0, currVal_8); _ck(_v, 12, 0); }, function (_ck, _v) { var currVal_0 = i0.ɵnov(_v, 3).target; var currVal_1 = i0.ɵnov(_v, 3).href; _ck(_v, 2, 0, currVal_0, currVal_1); var currVal_3 = i0.ɵnov(_v, 6).target; var currVal_4 = i0.ɵnov(_v, 6).href; _ck(_v, 5, 0, currVal_3, currVal_4); var currVal_6 = i0.ɵnov(_v, 9).target; var currVal_7 = i0.ɵnov(_v, 9).href; _ck(_v, 8, 0, currVal_6, currVal_7); }); }
exports.View_AppComponent_0 = View_AppComponent_0;
function View_AppComponent_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "app-root", [], null, null, null, View_AppComponent_0, RenderType_AppComponent)), i0.ɵdid(1, 49152, null, 0, i3.AppComponent, [], null, null)], null, null); }
exports.View_AppComponent_Host_0 = View_AppComponent_Host_0;
var AppComponentNgFactory = i0.ɵccf("app-root", i3.AppComponent, View_AppComponent_Host_0, {}, {}, []);
exports.AppComponentNgFactory = AppComponentNgFactory;


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
exports.AppComponent = AppComponent;


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    return AppModule;
}());
exports.AppModule = AppModule;


/***/ }),

/***/ "./src/app/app.server.module.ngfactory.js":
/*!************************************************!*\
  !*** ./src/app/app.server.module.ngfactory.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = __webpack_require__(/*! @angular/core */ "@angular/core");
var i1 = __webpack_require__(/*! ./app.server.module */ "./src/app/app.server.module.ts");
var i2 = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
var i3 = __webpack_require__(/*! ../../node_modules/@angular/router/router.ngfactory */ "./node_modules/@angular/router/router.ngfactory.js");
var i4 = __webpack_require__(/*! ./home/home.component.ngfactory */ "./src/app/home/home.component.ngfactory.js");
var i5 = __webpack_require__(/*! ./app.component.ngfactory */ "./src/app/app.component.ngfactory.js");
var i6 = __webpack_require__(/*! @angular/common */ "@angular/common");
var i7 = __webpack_require__(/*! @angular/platform-browser */ "@angular/platform-browser");
var i8 = __webpack_require__(/*! @angular/platform-server */ "@angular/platform-server");
var i9 = __webpack_require__(/*! @angular/animations/browser */ "@angular/animations/browser");
var i10 = __webpack_require__(/*! @angular/platform-browser/animations */ "@angular/platform-browser/animations");
var i11 = __webpack_require__(/*! @nguniversal/common */ "@nguniversal/common");
var i12 = __webpack_require__(/*! @angular/common/http */ "@angular/common/http");
var i13 = __webpack_require__(/*! @angular/router */ "@angular/router");
var i14 = __webpack_require__(/*! @angular/http */ "@angular/http");
var i15 = __webpack_require__(/*! @angular/animations */ "@angular/animations");
var i16 = __webpack_require__(/*! @nguniversal/module-map-ngfactory-loader */ "@nguniversal/module-map-ngfactory-loader");
var i17 = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
var i18 = __webpack_require__(/*! ./app.module */ "./src/app/app.module.ts");
var AppServerModuleNgFactory = i0.ɵcmf(i1.AppServerModule, [i2.AppComponent], function (_l) { return i0.ɵmod([i0.ɵmpd(512, i0.ComponentFactoryResolver, i0.ɵCodegenComponentFactoryResolver, [[8, [i3.ɵEmptyOutletComponentNgFactory, i4.HomeComponentNgFactory, i5.AppComponentNgFactory]], [3, i0.ComponentFactoryResolver], i0.NgModuleRef]), i0.ɵmpd(5120, i0.LOCALE_ID, i0.ɵangular_packages_core_core_k, [[3, i0.LOCALE_ID]]), i0.ɵmpd(4608, i6.NgLocalization, i6.NgLocaleLocalization, [i0.LOCALE_ID, [2, i6.ɵangular_packages_common_common_a]]), i0.ɵmpd(5120, i0.IterableDiffers, i0.ɵangular_packages_core_core_i, []), i0.ɵmpd(5120, i0.KeyValueDiffers, i0.ɵangular_packages_core_core_j, []), i0.ɵmpd(4608, i7.DomSanitizer, i7.ɵDomSanitizerImpl, [i6.DOCUMENT]), i0.ɵmpd(6144, i0.Sanitizer, null, [i7.DomSanitizer]), i0.ɵmpd(4608, i7.HAMMER_GESTURE_CONFIG, i7.HammerGestureConfig, []), i0.ɵmpd(5120, i7.EVENT_MANAGER_PLUGINS, function (p0_0, p0_1, p0_2, p1_0, p2_0, p2_1, p2_2, p2_3, p3_0) { return [new i7.ɵDomEventsPlugin(p0_0, p0_1, p0_2), new i7.ɵKeyEventsPlugin(p1_0), new i7.ɵHammerGesturesPlugin(p2_0, p2_1, p2_2, p2_3), new i8.ɵangular_packages_platform_server_platform_server_d(p3_0)]; }, [i6.DOCUMENT, i0.NgZone, i0.PLATFORM_ID, i6.DOCUMENT, i6.DOCUMENT, i7.HAMMER_GESTURE_CONFIG, i0.ɵConsole, [2, i7.HAMMER_LOADER], i7.DOCUMENT]), i0.ɵmpd(4608, i7.EventManager, i7.EventManager, [i7.EVENT_MANAGER_PLUGINS, i0.NgZone]), i0.ɵmpd(135680, i7.ɵDomSharedStylesHost, i7.ɵDomSharedStylesHost, [i6.DOCUMENT]), i0.ɵmpd(4608, i7.ɵDomRendererFactory2, i7.ɵDomRendererFactory2, [i7.EventManager, i7.ɵDomSharedStylesHost]), i0.ɵmpd(4608, i8.ɵangular_packages_platform_server_platform_server_c, i8.ɵangular_packages_platform_server_platform_server_c, [i7.DOCUMENT, [2, i7.ɵTRANSITION_ID]]), i0.ɵmpd(6144, i7.ɵSharedStylesHost, null, [i8.ɵangular_packages_platform_server_platform_server_c]), i0.ɵmpd(4608, i8.ɵServerRendererFactory2, i8.ɵServerRendererFactory2, [i7.EventManager, i0.NgZone, i7.DOCUMENT, i7.ɵSharedStylesHost]), i0.ɵmpd(4608, i9.AnimationDriver, i9.ɵNoopAnimationDriver, []), i0.ɵmpd(5120, i9.ɵAnimationStyleNormalizer, i10.ɵangular_packages_platform_browser_animations_animations_c, []), i0.ɵmpd(4608, i9.ɵAnimationEngine, i10.ɵangular_packages_platform_browser_animations_animations_a, [i6.DOCUMENT, i9.AnimationDriver, i9.ɵAnimationStyleNormalizer]), i0.ɵmpd(5120, i0.RendererFactory2, i8.ɵangular_packages_platform_server_platform_server_a, [i8.ɵServerRendererFactory2, i9.ɵAnimationEngine, i0.NgZone]), i0.ɵmpd(4352, i0.Testability, null, []), i0.ɵmpd(4608, i7.TransferState, i7.TransferState, []), i0.ɵmpd(4608, i11.ɵTransferHttpCacheInterceptor, i11.ɵTransferHttpCacheInterceptor, [i0.ApplicationRef, i7.TransferState]), i0.ɵmpd(4608, i12.HttpXsrfTokenExtractor, i12.ɵangular_packages_common_http_http_g, [i6.DOCUMENT, i0.PLATFORM_ID, i12.ɵangular_packages_common_http_http_e]), i0.ɵmpd(4608, i12.ɵangular_packages_common_http_http_h, i12.ɵangular_packages_common_http_http_h, [i12.HttpXsrfTokenExtractor, i12.ɵangular_packages_common_http_http_f]), i0.ɵmpd(5120, i12.HTTP_INTERCEPTORS, function (p0_0, p1_0) { return [p0_0, p1_0]; }, [i11.ɵTransferHttpCacheInterceptor, i12.ɵangular_packages_common_http_http_h]), i0.ɵmpd(5120, i13.ActivatedRoute, i13.ɵangular_packages_router_router_g, [i13.Router]), i0.ɵmpd(4608, i13.NoPreloading, i13.NoPreloading, []), i0.ɵmpd(6144, i13.PreloadingStrategy, null, [i13.NoPreloading]), i0.ɵmpd(135680, i13.RouterPreloader, i13.RouterPreloader, [i13.Router, i0.NgModuleFactoryLoader, i0.Compiler, i0.Injector, i13.PreloadingStrategy]), i0.ɵmpd(4608, i13.PreloadAllModules, i13.PreloadAllModules, []), i0.ɵmpd(4608, i6.ViewportScroller, i6.ɵNullViewportScroller, []), i0.ɵmpd(5120, i13.ɵangular_packages_router_router_n, i13.ɵangular_packages_router_router_c, [i13.Router, i6.ViewportScroller, i13.ROUTER_CONFIGURATION]), i0.ɵmpd(5120, i13.ROUTER_INITIALIZER, i13.ɵangular_packages_router_router_j, [i13.ɵangular_packages_router_router_h]), i0.ɵmpd(5120, i0.APP_BOOTSTRAP_LISTENER, function (p0_0) { return [p0_0]; }, [i13.ROUTER_INITIALIZER]), i0.ɵmpd(4608, i14.BrowserXhr, i8.ɵangular_packages_platform_server_platform_server_e, []), i0.ɵmpd(4608, i14.ResponseOptions, i14.BaseResponseOptions, []), i0.ɵmpd(4608, i14.XSRFStrategy, i8.ɵangular_packages_platform_server_platform_server_f, []), i0.ɵmpd(4608, i14.XHRBackend, i14.XHRBackend, [i14.BrowserXhr, i14.ResponseOptions, i14.XSRFStrategy]), i0.ɵmpd(4608, i14.RequestOptions, i14.BaseRequestOptions, []), i0.ɵmpd(5120, i14.Http, i8.ɵangular_packages_platform_server_platform_server_g, [i14.XHRBackend, i14.RequestOptions]), i0.ɵmpd(4608, i12.XhrFactory, i8.ɵangular_packages_platform_server_platform_server_e, []), i0.ɵmpd(4608, i12.HttpXhrBackend, i12.HttpXhrBackend, [i12.XhrFactory]), i0.ɵmpd(6144, i12.HttpBackend, null, [i12.HttpXhrBackend]), i0.ɵmpd(5120, i12.HttpHandler, i8.ɵangular_packages_platform_server_platform_server_h, [i12.HttpBackend, i0.Injector]), i0.ɵmpd(4608, i12.HttpClient, i12.HttpClient, [i12.HttpHandler]), i0.ɵmpd(4608, i12.ɵangular_packages_common_http_http_d, i12.ɵangular_packages_common_http_http_d, []), i0.ɵmpd(4608, i15.AnimationBuilder, i10.ɵBrowserAnimationBuilder, [i0.RendererFactory2, i7.DOCUMENT]), i0.ɵmpd(5120, i8.BEFORE_APP_SERIALIZED, function (p0_0, p0_1, p0_2) { return [i8.ɵangular_packages_platform_server_platform_server_b(p0_0, p0_1, p0_2)]; }, [i7.DOCUMENT, i0.APP_ID, i7.TransferState]), i0.ɵmpd(1073742336, i6.CommonModule, i6.CommonModule, []), i0.ɵmpd(1024, i0.ErrorHandler, i7.ɵangular_packages_platform_browser_platform_browser_a, []), i0.ɵmpd(1024, i0.NgProbeToken, function () { return [i13.ɵangular_packages_router_router_b()]; }, []), i0.ɵmpd(256, i0.APP_ID, "my-app", []), i0.ɵmpd(2048, i7.ɵTRANSITION_ID, null, [i0.APP_ID]), i0.ɵmpd(512, i13.ɵangular_packages_router_router_h, i13.ɵangular_packages_router_router_h, [i0.Injector]), i0.ɵmpd(1024, i0.APP_INITIALIZER, function (p0_0, p1_0, p1_1, p1_2, p2_0) { return [i7.ɵangular_packages_platform_browser_platform_browser_j(p0_0), i7.ɵangular_packages_platform_browser_platform_browser_h(p1_0, p1_1, p1_2), i13.ɵangular_packages_router_router_i(p2_0)]; }, [[2, i0.NgProbeToken], i7.ɵTRANSITION_ID, i6.DOCUMENT, i0.Injector, i13.ɵangular_packages_router_router_h]), i0.ɵmpd(512, i0.ApplicationInitStatus, i0.ApplicationInitStatus, [[2, i0.APP_INITIALIZER]]), i0.ɵmpd(131584, i0.ApplicationRef, i0.ApplicationRef, [i0.NgZone, i0.ɵConsole, i0.Injector, i0.ErrorHandler, i0.ComponentFactoryResolver, i0.ApplicationInitStatus]), i0.ɵmpd(1073742336, i0.ApplicationModule, i0.ApplicationModule, [i0.ApplicationRef]), i0.ɵmpd(1073742336, i7.BrowserModule, i7.BrowserModule, [[3, i7.BrowserModule]]), i0.ɵmpd(1024, i13.ɵangular_packages_router_router_a, i13.ɵangular_packages_router_router_e, [[3, i13.Router]]), i0.ɵmpd(512, i13.UrlSerializer, i13.DefaultUrlSerializer, []), i0.ɵmpd(512, i13.ChildrenOutletContexts, i13.ChildrenOutletContexts, []), i0.ɵmpd(256, i13.ROUTER_CONFIGURATION, {}, []), i0.ɵmpd(1024, i6.LocationStrategy, i13.ɵangular_packages_router_router_d, [i6.PlatformLocation, [2, i6.APP_BASE_HREF], i13.ROUTER_CONFIGURATION]), i0.ɵmpd(512, i6.Location, i6.Location, [i6.LocationStrategy]), i0.ɵmpd(512, i0.Compiler, i0.Compiler, []), i0.ɵmpd(512, i0.NgModuleFactoryLoader, i16.ModuleMapNgFactoryLoader, [i0.Compiler, i16.MODULE_MAP]), i0.ɵmpd(1024, i13.ROUTES, function () { return [[{ path: "", component: i17.HomeComponent, pathMatch: "full" }, { path: "lazy", loadChildren: "./lazy/lazy.module#LazyModule" }, { path: "lazy/nested", loadChildren: "./lazy/lazy.module#LazyModule" }]]; }, []), i0.ɵmpd(1024, i13.Router, i13.ɵangular_packages_router_router_f, [i0.ApplicationRef, i13.UrlSerializer, i13.ChildrenOutletContexts, i6.Location, i0.Injector, i0.NgModuleFactoryLoader, i0.Compiler, i13.ROUTES, i13.ROUTER_CONFIGURATION, [2, i13.UrlHandlingStrategy], [2, i13.RouteReuseStrategy]]), i0.ɵmpd(1073742336, i13.RouterModule, i13.RouterModule, [[2, i13.ɵangular_packages_router_router_a], [2, i13.Router]]), i0.ɵmpd(1073742336, i7.BrowserTransferStateModule, i7.BrowserTransferStateModule, []), i0.ɵmpd(1073742336, i11.TransferHttpCacheModule, i11.TransferHttpCacheModule, []), i0.ɵmpd(1073742336, i18.AppModule, i18.AppModule, []), i0.ɵmpd(1073742336, i14.HttpModule, i14.HttpModule, []), i0.ɵmpd(1073742336, i12.HttpClientXsrfModule, i12.HttpClientXsrfModule, []), i0.ɵmpd(1073742336, i12.HttpClientModule, i12.HttpClientModule, []), i0.ɵmpd(1073742336, i10.NoopAnimationsModule, i10.NoopAnimationsModule, []), i0.ɵmpd(1073742336, i8.ServerModule, i8.ServerModule, []), i0.ɵmpd(1073742336, i16.ModuleMapLoaderModule, i16.ModuleMapLoaderModule, []), i0.ɵmpd(1073742336, i8.ServerTransferStateModule, i8.ServerTransferStateModule, []), i0.ɵmpd(1073742336, i1.AppServerModule, i1.AppServerModule, []), i0.ɵmpd(256, i0.ɵAPP_ROOT, true, []), i0.ɵmpd(256, i12.ɵangular_packages_common_http_http_e, "XSRF-TOKEN", []), i0.ɵmpd(256, i12.ɵangular_packages_common_http_http_f, "X-XSRF-TOKEN", []), i0.ɵmpd(256, i10.ANIMATION_MODULE_TYPE, "NoopAnimations", [])]); });
exports.AppServerModuleNgFactory = AppServerModuleNgFactory;


/***/ }),

/***/ "./src/app/app.server.module.ts":
/*!**************************************!*\
  !*** ./src/app/app.server.module.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var AppServerModule = /** @class */ (function () {
    function AppServerModule() {
    }
    return AppServerModule;
}());
exports.AppServerModule = AppServerModule;


/***/ }),

/***/ "./src/app/home/home.component.ngfactory.js":
/*!**************************************************!*\
  !*** ./src/app/home/home.component.ngfactory.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = __webpack_require__(/*! @angular/core */ "@angular/core");
var i1 = __webpack_require__(/*! ./home.component */ "./src/app/home/home.component.ts");
var styles_HomeComponent = [];
var RenderType_HomeComponent = i0.ɵcrt({ encapsulation: 2, styles: styles_HomeComponent, data: {} });
exports.RenderType_HomeComponent = RenderType_HomeComponent;
function View_HomeComponent_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "h3", [], null, null, null, null, null)), (_l()(), i0.ɵted(1, null, ["", ""]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.message; _ck(_v, 1, 0, currVal_0); }); }
exports.View_HomeComponent_0 = View_HomeComponent_0;
function View_HomeComponent_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "app-home", [], null, null, null, View_HomeComponent_0, RenderType_HomeComponent)), i0.ɵdid(1, 114688, null, 0, i1.HomeComponent, [], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
exports.View_HomeComponent_Host_0 = View_HomeComponent_Host_0;
var HomeComponentNgFactory = i0.ɵccf("app-home", i1.HomeComponent, View_HomeComponent_Host_0, {}, {}, []);
exports.HomeComponentNgFactory = HomeComponentNgFactory;


/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "@angular/core");
var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.message = 'Hello';
    };
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;


/***/ }),

/***/ "./src/app/lazy/lazy.module.ngfactory.js":
/*!***********************************************!*\
  !*** ./src/app/lazy/lazy.module.ngfactory.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = __webpack_require__(/*! @angular/core */ "@angular/core");
var i1 = __webpack_require__(/*! ./lazy.module */ "./src/app/lazy/lazy.module.ts");
var i2 = __webpack_require__(/*! ../../../node_modules/@angular/router/router.ngfactory */ "./node_modules/@angular/router/router.ngfactory.js");
var i3 = __webpack_require__(/*! @angular/router */ "@angular/router");
var LazyModuleNgFactory = i0.ɵcmf(i1.LazyModule, [], function (_l) { return i0.ɵmod([i0.ɵmpd(512, i0.ComponentFactoryResolver, i0.ɵCodegenComponentFactoryResolver, [[8, [i2.ɵEmptyOutletComponentNgFactory, LazyComponentNgFactory]], [3, i0.ComponentFactoryResolver], i0.NgModuleRef]), i0.ɵmpd(1073742336, i3.RouterModule, i3.RouterModule, [[2, i3.ɵangular_packages_router_router_a], [2, i3.Router]]), i0.ɵmpd(1073742336, i1.LazyModule, i1.LazyModule, []), i0.ɵmpd(1024, i3.ROUTES, function () { return [[{ path: "", component: i1.LazyComponent, pathMatch: "full" }]]; }, [])]); });
exports.LazyModuleNgFactory = LazyModuleNgFactory;
var styles_LazyComponent = [];
var RenderType_LazyComponent = i0.ɵcrt({ encapsulation: 2, styles: styles_LazyComponent, data: {} });
exports.RenderType_LazyComponent = RenderType_LazyComponent;
function View_LazyComponent_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "h3", [], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["i'm lazy"]))], null, null); }
exports.View_LazyComponent_0 = View_LazyComponent_0;
function View_LazyComponent_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "app-lazy-view", [], null, null, null, View_LazyComponent_0, RenderType_LazyComponent)), i0.ɵdid(1, 49152, null, 0, i1.LazyComponent, [], null, null)], null, null); }
exports.View_LazyComponent_Host_0 = View_LazyComponent_Host_0;
var LazyComponentNgFactory = i0.ɵccf("app-lazy-view", i1.LazyComponent, View_LazyComponent_Host_0, {}, {}, []);
exports.LazyComponentNgFactory = LazyComponentNgFactory;


/***/ }),

/***/ "./src/app/lazy/lazy.module.ts":
/*!*************************************!*\
  !*** ./src/app/lazy/lazy.module.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var LazyComponent = /** @class */ (function () {
    function LazyComponent() {
    }
    return LazyComponent;
}());
exports.LazyComponent = LazyComponent;
var LazyModule = /** @class */ (function () {
    function LazyModule() {
    }
    return LazyModule;
}());
exports.LazyModule = LazyModule;


/***/ }),

/***/ "./src/main.server.ts":
/*!****************************!*\
  !*** ./src/main.server.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var app_server_module_ngfactory_1 = __webpack_require__(/*! ./app/app.server.module.ngfactory */ "./src/app/app.server.module.ngfactory.js");
exports.AppServerModuleNgFactory = app_server_module_ngfactory_1.AppServerModuleNgFactory;
var __lazy_0__ = __webpack_require__(/*! ./app/lazy/lazy.module.ngfactory.js */ "./src/app/lazy/lazy.module.ngfactory.js");
var app_server_module_1 = __webpack_require__(/*! ./app/app.server.module */ "./src/app/app.server.module.ts");
exports.AppServerModule = app_server_module_1.AppServerModule;
exports.LAZY_MODULE_MAP = { "./lazy/lazy.module#LazyModule": __lazy_0__.LazyModuleNgFactory };


/***/ }),

/***/ 0:
/*!**********************************!*\
  !*** multi ./src/main.server.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/zvx/ANGULAR/universal-starter/src/main.server.ts */"./src/main.server.ts");


/***/ }),

/***/ "@angular/animations":
/*!**************************************!*\
  !*** external "@angular/animations" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@angular/animations");

/***/ }),

/***/ "@angular/animations/browser":
/*!**********************************************!*\
  !*** external "@angular/animations/browser" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@angular/animations/browser");

/***/ }),

/***/ "@angular/common":
/*!**********************************!*\
  !*** external "@angular/common" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@angular/common");

/***/ }),

/***/ "@angular/common/http":
/*!***************************************!*\
  !*** external "@angular/common/http" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@angular/common/http");

/***/ }),

/***/ "@angular/core":
/*!********************************!*\
  !*** external "@angular/core" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@angular/core");

/***/ }),

/***/ "@angular/http":
/*!********************************!*\
  !*** external "@angular/http" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@angular/http");

/***/ }),

/***/ "@angular/platform-browser":
/*!********************************************!*\
  !*** external "@angular/platform-browser" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@angular/platform-browser");

/***/ }),

/***/ "@angular/platform-browser/animations":
/*!*******************************************************!*\
  !*** external "@angular/platform-browser/animations" ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@angular/platform-browser/animations");

/***/ }),

/***/ "@angular/platform-server":
/*!*******************************************!*\
  !*** external "@angular/platform-server" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@angular/platform-server");

/***/ }),

/***/ "@angular/router":
/*!**********************************!*\
  !*** external "@angular/router" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@angular/router");

/***/ }),

/***/ "@nguniversal/common":
/*!**************************************!*\
  !*** external "@nguniversal/common" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@nguniversal/common");

/***/ }),

/***/ "@nguniversal/module-map-ngfactory-loader":
/*!***********************************************************!*\
  !*** external "@nguniversal/module-map-ngfactory-loader" ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@nguniversal/module-map-ngfactory-loader");

/***/ })

/******/ })));