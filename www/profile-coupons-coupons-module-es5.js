(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["profile-coupons-coupons-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/profile/coupons/coupons.page.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/profile/coupons/coupons.page.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>Coupons</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/profile/coupons/coupons.module.ts":
/*!***************************************************!*\
  !*** ./src/app/profile/coupons/coupons.module.ts ***!
  \***************************************************/
/*! exports provided: CouponsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CouponsPageModule", function() { return CouponsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _coupons_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./coupons.page */ "./src/app/profile/coupons/coupons.page.ts");







var routes = [
    {
        path: '',
        component: _coupons_page__WEBPACK_IMPORTED_MODULE_6__["CouponsPage"]
    }
];
var CouponsPageModule = /** @class */ (function () {
    function CouponsPageModule() {
    }
    CouponsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_coupons_page__WEBPACK_IMPORTED_MODULE_6__["CouponsPage"]]
        })
    ], CouponsPageModule);
    return CouponsPageModule;
}());



/***/ }),

/***/ "./src/app/profile/coupons/coupons.page.scss":
/*!***************************************************!*\
  !*** ./src/app/profile/coupons/coupons.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUvY291cG9ucy9jb3Vwb25zLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/profile/coupons/coupons.page.ts":
/*!*************************************************!*\
  !*** ./src/app/profile/coupons/coupons.page.ts ***!
  \*************************************************/
/*! exports provided: CouponsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CouponsPage", function() { return CouponsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CouponsPage = /** @class */ (function () {
    function CouponsPage() {
    }
    CouponsPage.prototype.ngOnInit = function () {
    };
    CouponsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-coupons',
            template: __webpack_require__(/*! raw-loader!./coupons.page.html */ "./node_modules/raw-loader/index.js!./src/app/profile/coupons/coupons.page.html"),
            styles: [__webpack_require__(/*! ./coupons.page.scss */ "./src/app/profile/coupons/coupons.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CouponsPage);
    return CouponsPage;
}());



/***/ })

}]);
//# sourceMappingURL=profile-coupons-coupons-module-es5.js.map