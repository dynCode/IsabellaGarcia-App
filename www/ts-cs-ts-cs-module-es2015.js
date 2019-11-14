(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ts-cs-ts-cs-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/ts-cs/ts-cs.page.html":
/*!*****************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/ts-cs/ts-cs.page.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar>\n      <ion-buttons slot=\"start\">\n        <ion-back-button></ion-back-button>\n      </ion-buttons>\n      <ion-title>T's & C's</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n<ion-content>\n  <div class=\"ion-padding\">\n    <h3>TERMS & CONDITIONS</h3>\n    <p>1.<br>As a Beauty Club VIP, you will pay a monthly Beauty Club fee in order to qualify for VIP benefits and to accumulate Beauty Rands (BR).</p>\n    <p>2.<br>Beauty Rands is a “virtual” currency that can be used on the Isabella Garcia International website to pay for products.</p>\n    <p>3.<br>1 Beauty Rand = 1 Rand.</p>\n    <p>4.<br>Beauty Rands are accumulated on a monthly basis upon successful collection of the monthly Beauty Club fee and will automatically be loaded onto the VIP Beauty Club VIP’s profile on the website.</p>\n    <p>5.<br>Beauty Rands are accumulated at a rate of 1:1.5 (one to one point five) based on the monthly Beauty Club fee.</p>\n    <p>6.<br>The Benefits associated with being a Beauty Club VIP include:</p>\n    <ol type=\"a\">\n      <li>1 x Free delivery coupon per month.</li>\n      <li>Product-specific discounts.</li>\n    </ol>\n    <p>7.<br>In order to redeem accumulated Beauty Rands, Beauty Club VIPs can to log onto the website using either:</p>\n    <ol type=\"a\">\n      <li>their unique link supplied to them, monthly, via SMS and e-mail which automatically logs them in.</li>\n      <li>their unique membership number as their username and password.</li>\n    </ol>\n    <p>8.<br>Beauty Rands will be valid for a period of 12 (twelve) months from when they were accumulated.</p>\n    <p>9.<br>Beauty Rands are used automatically for qualifying products added to a cart.</p>\n    <p>10.<br>Beauty Rands are not transferrable for cash or towards payment for any outstanding amounts owed.</p>\n    <p>11.<br>Exchanges will only be allowed on redeemed products that are in their original packaging, within 7 (seven) days of delivery. Delivery and collection charges will apply to exchanges.</p>\n    <p>12.<br>Non-payment of Beauty Club fees:</p>\n    <ol type=\"a\">\n      <li>Should Isabella Garcia fail to collect in any month, we reserve the right at our discretion to double collect in the following month.</li>\n      <li>In the case of an unsuccessful Beauty Club fee collection, the member will not receive or accumulate Beauty Rands for the period over which the collection was unsuccessful.</li>\n      <li>Free delivery will be forfeited during nonpayment periods.</li>\n    </ol>\n  </div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/ts-cs/ts-cs.module.ts":
/*!***************************************!*\
  !*** ./src/app/ts-cs/ts-cs.module.ts ***!
  \***************************************/
/*! exports provided: TsCsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TsCsPageModule", function() { return TsCsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ts_cs_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ts-cs.page */ "./src/app/ts-cs/ts-cs.page.ts");







const routes = [
    {
        path: '',
        component: _ts_cs_page__WEBPACK_IMPORTED_MODULE_6__["TsCsPage"]
    }
];
let TsCsPageModule = class TsCsPageModule {
};
TsCsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_ts_cs_page__WEBPACK_IMPORTED_MODULE_6__["TsCsPage"]]
    })
], TsCsPageModule);



/***/ }),

/***/ "./src/app/ts-cs/ts-cs.page.scss":
/*!***************************************!*\
  !*** ./src/app/ts-cs/ts-cs.page.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-title {\n  text-align: center;\n}\n\nion-toolbar.main-toolbar {\n  --color: #ffffff;\n  --background: #000000;\n  --padding-bottom: 0px;\n  --padding-end: 0px;\n  --padding-start: 0px;\n  --padding-top: 0px;\n  --min-height: 55px;\n}\n\n.toolbar-btn {\n  --background: #292c2f;\n  --border-radius: 0px;\n  --color: #fff;\n  --padding-bottom: 0px;\n  --padding-end: 0px;\n  --padding-start: 0px;\n  --padding-top: 0px;\n  height: 55px;\n  display: block;\n  width: 20%;\n  z-index: 1;\n  margin: 0px;\n}\n\n.buttons-first-slot {\n  width: 20%;\n  margin: 0px;\n}\n\nion-menu-button {\n  --background: #292c2f;\n  --border-radius: 0px;\n  --color: #fff;\n  --padding-bottom: 0px;\n  --padding-end: 0px;\n  --padding-start: 0px;\n  --padding-top: 0px;\n  height: 55px;\n  display: block;\n  width: 100%;\n  z-index: 1;\n  margin: 0px;\n}\n\nion-toolbar.secondary-toolbar {\n  --padding-bottom: 0px;\n  --padding-end: 0px;\n  --padding-start: 0px;\n  --padding-top: 0px;\n}\n\n.secondary-toolbar ion-grid {\n  --ion-grid-padding: 0px;\n}\n\nion-searchbar {\n  --background: #ffffff;\n  --color: #292929;\n  padding: 5px;\n  height: 44px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdHMtY3MvRDpcXHhhbXBwXFxodGRvY3NcXGViLWFwcFxcZWdBcHAvc3JjXFxhcHBcXHRzLWNzXFx0cy1jcy5wYWdlLnNjc3MiLCJzcmMvYXBwL3RzLWNzL3RzLWNzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0FDQ0o7O0FERUE7RUFDSSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQ0NKOztBRENBO0VBQ0kscUJBQUE7RUFDQSxvQkFBQTtFQUNBLGFBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0FDRUo7O0FEQUE7RUFDSSxVQUFBO0VBQ0EsV0FBQTtBQ0dKOztBRERBO0VBQ0kscUJBQUE7RUFDQSxvQkFBQTtFQUNBLGFBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0FDSUo7O0FERkE7RUFDSSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtBQ0tKOztBREhBO0VBQ0ksdUJBQUE7QUNNSjs7QURKQTtFQUNJLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQ09KIiwiZmlsZSI6InNyYy9hcHAvdHMtY3MvdHMtY3MucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRpdGxlIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbmlvbi10b29sYmFyLm1haW4tdG9vbGJhciB7XG4gICAgLS1jb2xvcjogI2ZmZmZmZjtcbiAgICAtLWJhY2tncm91bmQ6ICMwMDAwMDA7XG4gICAgLS1wYWRkaW5nLWJvdHRvbTogMHB4O1xuICAgIC0tcGFkZGluZy1lbmQ6IDBweDtcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDBweDtcbiAgICAtLXBhZGRpbmctdG9wOiAwcHg7XG4gICAgLS1taW4taGVpZ2h0OiA1NXB4O1xufVxuLnRvb2xiYXItYnRuIHtcbiAgICAtLWJhY2tncm91bmQ6ICMyOTJjMmY7XG4gICAgLS1ib3JkZXItcmFkaXVzOiAwcHg7XG4gICAgLS1jb2xvcjogI2ZmZjtcbiAgICAtLXBhZGRpbmctYm90dG9tOiAwcHg7XG4gICAgLS1wYWRkaW5nLWVuZDogMHB4O1xuICAgIC0tcGFkZGluZy1zdGFydDogMHB4O1xuICAgIC0tcGFkZGluZy10b3A6IDBweDtcbiAgICBoZWlnaHQ6IDU1cHg7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IDIwJTtcbiAgICB6LWluZGV4OiAxO1xuICAgIG1hcmdpbjogMHB4O1xufVxuLmJ1dHRvbnMtZmlyc3Qtc2xvdCB7XG4gICAgd2lkdGg6IDIwJTtcbiAgICBtYXJnaW46IDBweDtcbn1cbmlvbi1tZW51LWJ1dHRvbiB7XG4gICAgLS1iYWNrZ3JvdW5kOiAjMjkyYzJmO1xuICAgIC0tYm9yZGVyLXJhZGl1czogMHB4O1xuICAgIC0tY29sb3I6ICNmZmY7XG4gICAgLS1wYWRkaW5nLWJvdHRvbTogMHB4O1xuICAgIC0tcGFkZGluZy1lbmQ6IDBweDtcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDBweDtcbiAgICAtLXBhZGRpbmctdG9wOiAwcHg7XG4gICAgaGVpZ2h0OiA1NXB4O1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHotaW5kZXg6IDE7XG4gICAgbWFyZ2luOiAwcHg7XG59XG5pb24tdG9vbGJhci5zZWNvbmRhcnktdG9vbGJhciB7XG4gICAgLS1wYWRkaW5nLWJvdHRvbTogMHB4O1xuICAgIC0tcGFkZGluZy1lbmQ6IDBweDtcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDBweDtcbiAgICAtLXBhZGRpbmctdG9wOiAwcHg7XG59XG4uc2Vjb25kYXJ5LXRvb2xiYXIgaW9uLWdyaWQge1xuICAgIC0taW9uLWdyaWQtcGFkZGluZzogMHB4O1xufVxuaW9uLXNlYXJjaGJhciB7XG4gICAgLS1iYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICAgIC0tY29sb3I6ICMyOTI5Mjk7XG4gICAgcGFkZGluZzogNXB4O1xuICAgIGhlaWdodDogNDRweDtcbn0iLCJpb24tdGl0bGUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbmlvbi10b29sYmFyLm1haW4tdG9vbGJhciB7XG4gIC0tY29sb3I6ICNmZmZmZmY7XG4gIC0tYmFja2dyb3VuZDogIzAwMDAwMDtcbiAgLS1wYWRkaW5nLWJvdHRvbTogMHB4O1xuICAtLXBhZGRpbmctZW5kOiAwcHg7XG4gIC0tcGFkZGluZy1zdGFydDogMHB4O1xuICAtLXBhZGRpbmctdG9wOiAwcHg7XG4gIC0tbWluLWhlaWdodDogNTVweDtcbn1cblxuLnRvb2xiYXItYnRuIHtcbiAgLS1iYWNrZ3JvdW5kOiAjMjkyYzJmO1xuICAtLWJvcmRlci1yYWRpdXM6IDBweDtcbiAgLS1jb2xvcjogI2ZmZjtcbiAgLS1wYWRkaW5nLWJvdHRvbTogMHB4O1xuICAtLXBhZGRpbmctZW5kOiAwcHg7XG4gIC0tcGFkZGluZy1zdGFydDogMHB4O1xuICAtLXBhZGRpbmctdG9wOiAwcHg7XG4gIGhlaWdodDogNTVweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAyMCU7XG4gIHotaW5kZXg6IDE7XG4gIG1hcmdpbjogMHB4O1xufVxuXG4uYnV0dG9ucy1maXJzdC1zbG90IHtcbiAgd2lkdGg6IDIwJTtcbiAgbWFyZ2luOiAwcHg7XG59XG5cbmlvbi1tZW51LWJ1dHRvbiB7XG4gIC0tYmFja2dyb3VuZDogIzI5MmMyZjtcbiAgLS1ib3JkZXItcmFkaXVzOiAwcHg7XG4gIC0tY29sb3I6ICNmZmY7XG4gIC0tcGFkZGluZy1ib3R0b206IDBweDtcbiAgLS1wYWRkaW5nLWVuZDogMHB4O1xuICAtLXBhZGRpbmctc3RhcnQ6IDBweDtcbiAgLS1wYWRkaW5nLXRvcDogMHB4O1xuICBoZWlnaHQ6IDU1cHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTAwJTtcbiAgei1pbmRleDogMTtcbiAgbWFyZ2luOiAwcHg7XG59XG5cbmlvbi10b29sYmFyLnNlY29uZGFyeS10b29sYmFyIHtcbiAgLS1wYWRkaW5nLWJvdHRvbTogMHB4O1xuICAtLXBhZGRpbmctZW5kOiAwcHg7XG4gIC0tcGFkZGluZy1zdGFydDogMHB4O1xuICAtLXBhZGRpbmctdG9wOiAwcHg7XG59XG5cbi5zZWNvbmRhcnktdG9vbGJhciBpb24tZ3JpZCB7XG4gIC0taW9uLWdyaWQtcGFkZGluZzogMHB4O1xufVxuXG5pb24tc2VhcmNoYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICAtLWNvbG9yOiAjMjkyOTI5O1xuICBwYWRkaW5nOiA1cHg7XG4gIGhlaWdodDogNDRweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/ts-cs/ts-cs.page.ts":
/*!*************************************!*\
  !*** ./src/app/ts-cs/ts-cs.page.ts ***!
  \*************************************/
/*! exports provided: TsCsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TsCsPage", function() { return TsCsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let TsCsPage = class TsCsPage {
    constructor() { }
    ngOnInit() {
    }
};
TsCsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-ts-cs',
        template: __webpack_require__(/*! raw-loader!./ts-cs.page.html */ "./node_modules/raw-loader/index.js!./src/app/ts-cs/ts-cs.page.html"),
        styles: [__webpack_require__(/*! ./ts-cs.page.scss */ "./src/app/ts-cs/ts-cs.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], TsCsPage);



/***/ })

}]);
//# sourceMappingURL=ts-cs-ts-cs-module-es2015.js.map