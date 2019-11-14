(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["landing-page-landing-page-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/landing-page/landing-page.page.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/landing-page/landing-page.page.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header></ion-header>\n\n<ion-content>\n  <div class=\"landingWrap ion-padding\">\n    <div class=\"lp-vip\">\n      <img src=\"/assets/vip-beauty-club-logo.png\"/>\n    </div>\n    <div class=\"lp-wlcm\">\n      <h2>WELCOME</h2>\n      <h1>{{ userFirstName }}</h1>\n    </div>\n    <div class=\"lp-btns\">\n      <ion-button expand=\"block\" [routerLink]=\"['/', 'tabs', 'shop']\">\n          <div class=\"icon-container\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"27\" height=\"27\" viewBox=\"0 0 26.7 26.9\"><style>.a{fill:#080A0B;}</style><path d=\"M9 22.9c0.6 0 1 0.2 1.4 0.6s0.6 0.9 0.6 1.4 -0.2 1-0.6 1.4 -0.9 0.6-1.4 0.6 -1-0.2-1.4-0.6 -0.6-0.9-0.6-1.4 0.2-1 0.6-1.4S8.4 22.9 9 22.9z\" class=\"a\"/><path d=\"M20.9 22.6c0.6 0 1 0.2 1.4 0.6 0.4 0.4 0.6 0.9 0.6 1.4s-0.2 1-0.6 1.4c-0.4 0.4-0.9 0.6-1.4 0.6s-1-0.2-1.4-0.6c-0.4-0.4-0.6-0.9-0.6-1.4s0.2-1 0.6-1.4C19.8 22.8 20.3 22.6 20.9 22.6z\" class=\"a\"/><polygon points=\"5.1 6.4 3.5 0.7 0 0 4.4 16.5 24.3 16.5 26.7 6.4 \" class=\"a\"/><line x1=\"4.9\" y1=\"19.4\" x2=\"24.3\" y2=\"19.4\" style=\"fill:none;stroke:#080A0B\"/></svg></div>\n        REDEEM MY {{ pageDetail.finalBR | currency : \"BR\" }}\n      </ion-button>\n      <ion-button expand=\"block\">\n        <div class=\"icon-container\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"31\" height=\"31\" viewBox=\"0 0 31.2 31.2\"><style>.a{fill:#080A0B;}</style><polygon points=\"13.6 18.5 18.7 15.6 13.6 12.7 \" class=\"a\"/><path d=\"M25.3 15.6c0 0 0 3.2-0.4 4.7 -0.2 0.8-0.9 1.5-1.7 1.7 -1.5 0.4-7.6 0.4-7.6 0.4s-6.1 0-7.6-0.4c-0.8-0.2-1.5-0.9-1.7-1.7 -0.4-1.5-0.4-4.7-0.4-4.7s0-3.2 0.4-4.7c0.2-0.8 0.9-1.5 1.7-1.7 1.5-0.4 7.6-0.4 7.6-0.4s6.1 0 7.6 0.4c0.8 0.2 1.5 0.9 1.7 1.7C25.3 12.4 25.3 15.6 25.3 15.6zM15.6 0C7 0 0 7 0 15.6s7 15.6 15.6 15.6 15.6-7 15.6-15.6S24.2 0 15.6 0z\" class=\"a\"/></svg></div>\n        QUICK APP TOUR\n      </ion-button>\n      <ion-button expand=\"block\" [routerLink]=\"['/', 'tabs', 'bank']\">\n        <div class=\"icon-container\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"34\" height=\"34\" viewBox=\"0 0 33.5 33.5\"><style>.a{fill:#080A0B;}.b{fill:none;stroke:#FFF;}</style><path d=\"M16.9 1c2.1 0 4.1 0.4 6.1 1.2S26.6 4.2 28.1 5.7c1.5 1.5 2.6 3.2 3.4 5.1 0.8 1.9 1.2 4 1.2 6.1 0 2.1-0.4 4.1-1.2 6.1 -0.8 1.9-2 3.7-3.4 5.2 -1.5 1.5-3.2 2.6-5.1 3.4s-4 1.2-6.1 1.2 -4.1-0.4-6.1-1.2c-1.9-0.8-3.7-2-5.1-3.4 -1.5-1.5-2.6-3.2-3.4-5.1C1.4 21 1 19 1 16.9c0-2.1 0.4-4.1 1.2-6.1C3 8.9 4.2 7.1 5.7 5.7c1.5-1.5 3.2-2.6 5.2-3.4C12.7 1.4 14.8 1 16.9 1z\" class=\"a\"/><path d=\"M16.9 1c2.1 0 4.1 0.4 6.1 1.2S26.6 4.2 28.1 5.7c1.5 1.5 2.6 3.2 3.4 5.1 0.8 1.9 1.2 4 1.2 6.1 0 2.1-0.4 4.1-1.2 6.1 -0.8 1.9-2 3.7-3.4 5.2 -1.5 1.5-3.2 2.6-5.1 3.4s-4 1.2-6.1 1.2 -4.1-0.4-6.1-1.2c-1.9-0.8-3.7-2-5.1-3.4 -1.5-1.5-2.6-3.2-3.4-5.1C1.4 21 1 19 1 16.9c0-2.1 0.4-4.1 1.2-6.1C3 8.9 4.2 7.1 5.7 5.7c1.5-1.5 3.2-2.6 5.2-3.4C12.7 1.4 14.8 1 16.9 1z\" class=\"b\"/><path d=\"M11.2 17.4v3.6h0.9c1.7 0 2.6-0.5 2.6-1.7 0-1.2-0.9-2-2.8-2H11.2zM11.2 12.1v3h0.6c1.3 0 1.9-0.5 1.9-1.5 0-0.9-0.6-1.4-1.8-1.4H11.2zM8.5 23.6V9.5h2.6c1.5 0 2.7 0.2 3.5 0.7 1.1 0.6 1.7 1.7 1.7 2.9 0 1.1-0.5 2-1.5 2.7 1.6 0.8 2.5 1.9 2.5 3.6 0 1.2-0.4 2.1-1.2 2.9 -0.9 0.9-2 1.2-3.4 1.2H8.5z\" class=\"a\"/><path d=\"M11.2 17.4v3.6h0.9c1.7 0 2.6-0.5 2.6-1.7 0-1.2-0.9-2-2.8-2H11.2zM11.2 12.1v3h0.6c1.3 0 1.9-0.5 1.9-1.5 0-0.9-0.6-1.4-1.8-1.4H11.2zM8.5 23.6V9.5h2.6c1.5 0 2.7 0.2 3.5 0.7 1.1 0.6 1.7 1.7 1.7 2.9 0 1.1-0.5 2-1.5 2.7 1.6 0.8 2.5 1.9 2.5 3.6 0 1.2-0.4 2.1-1.2 2.9 -0.9 0.9-2 1.2-3.4 1.2H8.5z\" class=\"b\"/><path d=\"M20.4 15h1.2c1.2 0 1.8-0.5 1.8-1.4 0-0.9-0.6-1.4-1.9-1.4h-1.2V15zM17.7 9.5h3.3c1.8 0 3 0.2 4 1.1 0.7 0.7 1.1 1.7 1.1 2.9 0 1.8-0.9 3.1-2.7 3.7l3.3 6.2h-2.9l-3.1-5.9h-0.3v5.9h-2.7V9.5z\" class=\"a\"/><path d=\"M20.4 15h1.2c1.2 0 1.8-0.5 1.8-1.4 0-0.9-0.6-1.4-1.9-1.4h-1.2V15zM17.7 9.5h3.3c1.8 0 3 0.2 4 1.1 0.7 0.7 1.1 1.7 1.1 2.9 0 1.8-0.9 3.1-2.7 3.7l3.3 6.2h-2.9l-3.1-5.9h-0.3v5.9h-2.7V9.5z\" class=\"b\"/></svg></div>\n        MY BEAUTY BANK\n      </ion-button>\n      <ion-button expand=\"block\" [routerLink]=\"['/', 'tabs', 'specials']\">\n        <div class=\"icon-container\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"35\" height=\"35\" viewBox=\"0 0 24 24\"><style>.a{fill:#080A0B;}</style><path d=\"M12.7 10.3c3.3-3.3 5-5.5 5-6.7 0-0.7-0.5-1-1.5-1 -1 0-2.4 0.4-4.1 1.1C10.3 4.4 8.7 5.3 7.4 6.4c-1.5 1.2-2.2 2.3-2.2 3.3 0 0.3 0.2 0.7 0.5 1.2 0.3 0.4 1.1 0.7 2.2 0.7 0.8 0 1.5-0.1 2.2-0.2 -2.8 2.7-4.3 4.1-4.5 4.1 0-0.1 0.3-0.4 0.7-0.9 0.4-0.4 0.6-0.7 0.6-0.7 0-0.1 0-0.1-0.1-0.1 -0.2 0-0.6 0.3-1.2 1 -0.6 0.7-0.9 1.1-0.9 1.4 0 0.4 0.2 0.5 0.6 0.5 0.3 0 0.6-0.1 1-0.4 1.2-0.8 3.1-2.6 5.8-5.2 1.6-0.4 2.4-0.7 2.4-0.9 0-0.1-0.1-0.2-0.2-0.2 -0.1 0-0.4 0-0.7 0.1L12.7 10.3zM18.9 13.3c-0.6-0.6-1.3-1-1.9-1.3 -0.7-0.3-1.4-0.4-2.1-0.4 -0.9 0-1.7 0.2-2.5 0.6 -0.7 0.4-1.3 1-1.7 1.7 -0.4 0.7-0.6 1.5-0.6 2.3 0 1.1 0.4 2.1 1.1 2.9 0.9 1.1 2.2 1.6 3.8 1.6 1.3 0 2.4-0.4 3.2-1.2 0.8-0.8 1.2-1.9 1.2-3.2h-3.8v0.9h2.8c-0.1 0.8-0.5 1.5-1.1 2 -0.6 0.5-1.4 0.8-2.3 0.8 -0.7 0-1.4-0.2-2.1-0.5 -0.6-0.3-1.1-0.8-1.5-1.4 -0.4-0.6-0.5-1.2-0.5-1.9 0-0.6 0.2-1.3 0.5-1.8 0.3-0.6 0.8-1 1.4-1.4 0.6-0.3 1.3-0.5 2-0.5 0.6 0 1.1 0.1 1.7 0.4 0.6 0.2 1.1 0.6 1.6 1.1L18.9 13.3zM3.7 1.5h16.7V22.5H3.7V1.5z\" class=\"a svg-fill\"/><path d=\"M16.9 3.3c0 0.4-0.5 1.3-1.5 2.5 -0.7 0.9-1.4 1.7-2.2 2.4 -1.4 1.5-2.2 2.2-2.3 2.2 -0.3 0.2-1.2 0.2-2.7 0.2 -1.6 0-2.4-0.3-2.4-0.8 0-0.6 0.8-1.5 2.3-2.7 1.6-1.2 3.2-2.2 5-3 1.7-0.8 2.9-1.1 3.4-1.1C16.8 3 16.9 3.1 16.9 3.3z\" class=\"a svg-fill\"/><path d=\"M2.6 23.5h18.9V0.5H2.6V23.5zM21.7 23.8H2.3V0.3h19.4v23.5H21.7z\" class=\"a svg-fill\"/></svg></div>\n        SPECIALS\n      </ion-button>\n      <ion-button expand=\"block\" [routerLink]=\"['/', 'tabs', 'wishlist']\">\n        <div class=\"icon-container\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"35\" height=\"35\" viewBox=\"0 0 24 24\"><path class=\"svg-stroke\" d=\"M21.2 4.1c-2.3-2.3-6.1-2.3-8.4 0l-0.8 0.8 -0.8-0.8c-2.3-2.3-6.1-2.3-8.4 0 -2.3 2.3-2.3 6.1 0 8.4l9.2 9.2 9.2-9.2C23.6 10.1 23.6 6.4 21.2 4.1\" style=\"fill:none;stroke-width:2;stroke:#080A0B\"/><path class=\"svg-fill\" d=\"M12.2 8.5c0.5 0 0.8 0.3 0.8 0.8 0 0.5-0.3 0.8-0.8 0.8 -0.5 0-0.8-0.4-0.8-0.8C11.5 8.9 11.8 8.5 12.2 8.5zM12.3 11.4c0.6 0 1.1 0.4 1.1 1 0 0.6-0.5 1-1.1 1 -0.7 0-1.1-0.5-1.1-1C11.1 11.8 11.7 11.4 12.3 11.4zM10.1 9.2c0 0.6 0.2 1 0.6 1.5 -0.7 0.5-1 1.1-1 1.8 0 1 0.5 1.7 1.4 2 0.4 0.1 0.7 0.2 1.1 0.2 1.6 0 2.4-1 2.4-2.2 0-0.7-0.4-1.4-1-1.8 0.4-0.5 0.7-0.8 0.7-1.4 0-1.1-0.8-2-2.1-2C11 7.2 10.1 8.1 10.1 9.2z\" fill=\"#080A0B\"/></svg></div>\n        WISHLIST\n      </ion-button>\n      <ion-button expand=\"block\" [routerLink]=\"['/', 'tabs', 'profile']\">\n        <div class=\"icon-container\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"21\" height=\"20\" viewBox=\"0 0 20.5 20.3\"><path d=\"M10.2 12.5C7.2 12.5 1 14.1 1 17.2v2.3h18.5v-2.3C19.5 14.1 13.3 12.5 10.2 12.5zM10.2 10.2c2.6 0 4.6-2.1 4.6-4.6C14.9 3.1 12.8 1 10.2 1 7.7 1 5.6 3.1 5.6 5.6 5.6 8.2 7.7 10.2 10.2 10.2z\" fill=\"#080A0B\"/><path d=\"M10.2 12.5C7.2 12.5 1 14.1 1 17.2v2.3h18.5v-2.3C19.5 14.1 13.3 12.5 10.2 12.5zM10.2 10.2c2.6 0 4.6-2.1 4.6-4.6C14.9 3.1 12.8 1 10.2 1 7.7 1 5.6 3.1 5.6 5.6 5.6 8.2 7.7 10.2 10.2 10.2z\" style=\"fill:none;stroke-width:2;stroke:#080A0B\"/></svg></div>\n        MY PROFILE\n      </ion-button>\n    </div>\n  </div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/landing-page/landing-page.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/landing-page/landing-page.module.ts ***!
  \*****************************************************/
/*! exports provided: LandingPagePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingPagePageModule", function() { return LandingPagePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _landing_page_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./landing-page.page */ "./src/app/landing-page/landing-page.page.ts");







const routes = [
    {
        path: '',
        component: _landing_page_page__WEBPACK_IMPORTED_MODULE_6__["LandingPagePage"]
    }
];
let LandingPagePageModule = class LandingPagePageModule {
};
LandingPagePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_landing_page_page__WEBPACK_IMPORTED_MODULE_6__["LandingPagePage"]]
    })
], LandingPagePageModule);



/***/ }),

/***/ "./src/app/landing-page/landing-page.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/landing-page/landing-page.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".lp-vip {\n  max-width: 45%;\n  margin: auto;\n}\n\n.lp-wlcm h2 {\n  font-size: 20px;\n  margin-bottom: 5px;\n  text-align: center;\n}\n\n.lp-wlcm h1 {\n  font-size: 30px;\n  text-align: center;\n  margin-top: 0px;\n  line-height: 30px;\n  margin-bottom: 20px;\n  font-weight: 800;\n}\n\nion-content {\n  --background: rgba(255, 255, 255, 0);\n  background-image: url(/assets/landing-bg.jpg);\n  background-size: contain;\n  background-repeat: no-repeat;\n  background-position: center top;\n  overflow: hidden;\n}\n\n.landingWrap {\n  background-color: #f2f2f2;\n  margin: 20px;\n  border: 2px solid #ece0d6;\n  min-height: calc(100vh - 40px);\n  max-height: calc(100vh - 40px);\n}\n\n.icon-container {\n  position: absolute;\n  left: 10px;\n  top: 50%;\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%);\n  text-align: center;\n  width: 10%;\n}\n\n.lp-btns ion-button {\n  --background: #ffffff;\n  --background-activated: #ece0d6;\n  --background-focused: #ece0d6;\n  --background-hover: #ece0d6;\n  --border-color: #a9a8a7;\n  --border-radius: 0px;\n  --border-width: 1px;\n  --color: #040707;\n  --color-activated: #040707;\n  --color-focused: #040707;\n  --color-hover: #040707;\n  --box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);\n  --padding-bottom: 5px;\n  --padding-top: 5px;\n  min-height: 50px;\n}\n\n.lp-btns {\n  max-width: 260px;\n  margin: 10% auto;\n  font-size: 14px;\n  font-weight: 600;\n}\n\n.lp-btns ion-button {\n  font-size: 14px;\n  letter-spacing: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGFuZGluZy1wYWdlL0Q6XFx4YW1wcFxcaHRkb2NzXFxlYi1hcHBcXGVnQXBwL3NyY1xcYXBwXFxsYW5kaW5nLXBhZ2VcXGxhbmRpbmctcGFnZS5wYWdlLnNjc3MiLCJzcmMvYXBwL2xhbmRpbmctcGFnZS9sYW5kaW5nLXBhZ2UucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBQTtFQUNBLFlBQUE7QUNDSjs7QURDQTtFQUNJLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FDRUo7O0FEQUE7RUFDSSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FDR0o7O0FEREE7RUFDSSxvQ0FBQTtFQUNBLDZDQUFBO0VBQ0Esd0JBQUE7RUFDQSw0QkFBQTtFQUNBLCtCQUFBO0VBQ0EsZ0JBQUE7QUNJSjs7QURGQTtFQUNJLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsOEJBQUE7RUFDQSw4QkFBQTtBQ0tKOztBREhBO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0VBQ0EsUUFBQTtFQUNBLG1DQUFBO1VBQUEsMkJBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QUNNSjs7QURKQTtFQUNJLHFCQUFBO0VBQ0EsK0JBQUE7RUFDQSw2QkFBQTtFQUNBLDJCQUFBO0VBQ0EsdUJBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSwwQkFBQTtFQUNBLHdCQUFBO0VBQ0Esc0JBQUE7RUFDQSw2Q0FBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQ09KOztBRExBO0VBQ0ksZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ1FKOztBRE5BO0VBQ0ksZUFBQTtFQUNBLG1CQUFBO0FDU0oiLCJmaWxlIjoic3JjL2FwcC9sYW5kaW5nLXBhZ2UvbGFuZGluZy1wYWdlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5scC12aXAge1xuICAgIG1heC13aWR0aDogNDUlO1xuICAgIG1hcmdpbjogYXV0bztcbn1cbi5scC13bGNtIGgyIHtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5scC13bGNtIGgxIHtcbiAgICBmb250LXNpemU6IDMwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbi10b3A6IDBweDtcbiAgICBsaW5lLWhlaWdodDogMzBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XG59XG5pb24tY29udGVudCB7XG4gICAgLS1iYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDApO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgvYXNzZXRzL2xhbmRpbmctYmcuanBnKTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgdG9wO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG59XG4ubGFuZGluZ1dyYXAge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMmYyZjI7XG4gICAgbWFyZ2luOiAyMHB4O1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICNlY2UwZDY7XG4gICAgbWluLWhlaWdodDogY2FsYygxMDB2aCAtIDQwcHgpO1xuICAgIG1heC1oZWlnaHQ6IGNhbGMoMTAwdmggLSA0MHB4KTtcbn1cbi5pY29uLWNvbnRhaW5lciB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDEwcHg7XG4gICAgdG9wOiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB3aWR0aDogMTAlO1xufVxuLmxwLWJ0bnMgaW9uLWJ1dHRvbiB7XG4gICAgLS1iYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICAgIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6ICNlY2UwZDY7XG4gICAgLS1iYWNrZ3JvdW5kLWZvY3VzZWQ6ICNlY2UwZDY7XG4gICAgLS1iYWNrZ3JvdW5kLWhvdmVyOiAjZWNlMGQ2O1xuICAgIC0tYm9yZGVyLWNvbG9yOiAjYTlhOGE3O1xuICAgIC0tYm9yZGVyLXJhZGl1czogMHB4O1xuICAgIC0tYm9yZGVyLXdpZHRoOiAxcHg7XG4gICAgLS1jb2xvcjogIzA0MDcwNztcbiAgICAtLWNvbG9yLWFjdGl2YXRlZDogIzA0MDcwNztcbiAgICAtLWNvbG9yLWZvY3VzZWQ6ICMwNDA3MDc7XG4gICAgLS1jb2xvci1ob3ZlcjogIzA0MDcwNztcbiAgICAtLWJveC1zaGFkb3c6IDBweCAwcHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gICAgLS1wYWRkaW5nLWJvdHRvbTogNXB4O1xuICAgIC0tcGFkZGluZy10b3A6IDVweDtcbiAgICBtaW4taGVpZ2h0OiA1MHB4O1xufVxuLmxwLWJ0bnMge1xuICAgIG1heC13aWR0aDogMjYwcHg7XG4gICAgbWFyZ2luOiAxMCUgYXV0bztcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cbi5scC1idG5zIGlvbi1idXR0b24ge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBsZXR0ZXItc3BhY2luZzogMHB4O1xufSIsIi5scC12aXAge1xuICBtYXgtd2lkdGg6IDQ1JTtcbiAgbWFyZ2luOiBhdXRvO1xufVxuXG4ubHAtd2xjbSBoMiB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5scC13bGNtIGgxIHtcbiAgZm9udC1zaXplOiAzMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDBweDtcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG59XG5cbmlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDApO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL2Fzc2V0cy9sYW5kaW5nLWJnLmpwZyk7XG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIHRvcDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLmxhbmRpbmdXcmFwIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMjtcbiAgbWFyZ2luOiAyMHB4O1xuICBib3JkZXI6IDJweCBzb2xpZCAjZWNlMGQ2O1xuICBtaW4taGVpZ2h0OiBjYWxjKDEwMHZoIC0gNDBweCk7XG4gIG1heC1oZWlnaHQ6IGNhbGMoMTAwdmggLSA0MHB4KTtcbn1cblxuLmljb24tY29udGFpbmVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAxMHB4O1xuICB0b3A6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdpZHRoOiAxMCU7XG59XG5cbi5scC1idG5zIGlvbi1idXR0b24ge1xuICAtLWJhY2tncm91bmQ6ICNmZmZmZmY7XG4gIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6ICNlY2UwZDY7XG4gIC0tYmFja2dyb3VuZC1mb2N1c2VkOiAjZWNlMGQ2O1xuICAtLWJhY2tncm91bmQtaG92ZXI6ICNlY2UwZDY7XG4gIC0tYm9yZGVyLWNvbG9yOiAjYTlhOGE3O1xuICAtLWJvcmRlci1yYWRpdXM6IDBweDtcbiAgLS1ib3JkZXItd2lkdGg6IDFweDtcbiAgLS1jb2xvcjogIzA0MDcwNztcbiAgLS1jb2xvci1hY3RpdmF0ZWQ6ICMwNDA3MDc7XG4gIC0tY29sb3ItZm9jdXNlZDogIzA0MDcwNztcbiAgLS1jb2xvci1ob3ZlcjogIzA0MDcwNztcbiAgLS1ib3gtc2hhZG93OiAwcHggMHB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjMpO1xuICAtLXBhZGRpbmctYm90dG9tOiA1cHg7XG4gIC0tcGFkZGluZy10b3A6IDVweDtcbiAgbWluLWhlaWdodDogNTBweDtcbn1cblxuLmxwLWJ0bnMge1xuICBtYXgtd2lkdGg6IDI2MHB4O1xuICBtYXJnaW46IDEwJSBhdXRvO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbi5scC1idG5zIGlvbi1idXR0b24ge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGxldHRlci1zcGFjaW5nOiAwcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/landing-page/landing-page.page.ts":
/*!***************************************************!*\
  !*** ./src/app/landing-page/landing-page.page.ts ***!
  \***************************************************/
/*! exports provided: LandingPagePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingPagePage", function() { return LandingPagePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_authenticate_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/authenticate.service */ "./src/app/services/authenticate.service.ts");
/* harmony import */ var _services_page_details_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/page-details.service */ "./src/app/services/page-details.service.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");






let LandingPagePage = class LandingPagePage {
    constructor(authenticationService, storage, pageDetail, menu) {
        this.authenticationService = authenticationService;
        this.storage = storage;
        this.pageDetail = pageDetail;
        this.menu = menu;
        this.userDetails = [];
        this.calcBR = [];
        this.menu.enable(true, 'catMenu');
    }
    ngOnInit() {
        this.pageDetail.getCartCount();
        this.pageDetail.getBRPoints();
        this.storage.ready().then((data) => {
            this.storage.get("user").then((data) => {
                this.userDetails = data;
                this.userFirstName = this.userDetails[0].firstName;
                this.userSurname = this.userDetails[0].lastName;
                this.userBR = this.userDetails[0].brPoints;
            });
        });
        /*this.storage.get("cart").then( (data)=> {
          this.calcBR = data;
    
          if ( data == null || data.length == 0 ) {
    
            this.finalBR = this.userBR;
            
          } else {
            for( let i = 0; i < data.length; i++ ) {
              this.finalBR = this.userBR - this.calcBR[i].amount;
            }
          }
    
          this.storage.set("availableBR", this.finalBR).then( ()=> {
            console.log(this.finalBR);
          });
        });*/
    }
};
LandingPagePage.ctorParameters = () => [
    { type: _services_authenticate_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"] },
    { type: _services_page_details_service__WEBPACK_IMPORTED_MODULE_3__["PageDetailsService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["MenuController"] }
];
LandingPagePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-landing-page',
        template: __webpack_require__(/*! raw-loader!./landing-page.page.html */ "./node_modules/raw-loader/index.js!./src/app/landing-page/landing-page.page.html"),
        styles: [__webpack_require__(/*! ./landing-page.page.scss */ "./src/app/landing-page/landing-page.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_authenticate_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"], _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"], _services_page_details_service__WEBPACK_IMPORTED_MODULE_3__["PageDetailsService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["MenuController"]])
], LandingPagePage);



/***/ })

}]);
//# sourceMappingURL=landing-page-landing-page-module-es2015.js.map