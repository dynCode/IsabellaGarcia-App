(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["profile-account-account-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/profile/account/account.page.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/profile/account/account.page.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n      <ion-buttons slot=\"start\">\n        <ion-back-button></ion-back-button>\n      </ion-buttons>\n    <ion-title>Account Details</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-item>\n      <ion-label>\n          <p position=\"stacked\">Your Name</p>\n          <h2>{{authenticationService.customer.first_name}} {{authenticationService.customer.last_name}}</h2>\n        </ion-label>\n        <ion-icon name=\"create\" slot=\"end\" (click)=\"openWithInAppBrowser()\"></ion-icon>\n    </ion-item>\n    <ion-item>\n      <ion-label>\n          <p position=\"stacked\">Email Address</p>\n          <h2>{{authenticationService.customer.email}}</h2>\n        </ion-label>\n        <ion-icon name=\"create\" slot=\"end\" (click)=\"openWithInAppBrowser()\"></ion-icon>\n    </ion-item>\n    <ion-item>\n      <ion-label>\n        <p position=\"stacked\">Password</p>\n        <h2>*********</h2>\n      </ion-label>\n      <ion-icon name=\"create\" slot=\"end\" (click)=\"openWithInAppBrowser()\"></ion-icon>\n    </ion-item>\n  </ion-list>\n      \n</ion-content>\n"

/***/ }),

/***/ "./src/app/profile/account/account.module.ts":
/*!***************************************************!*\
  !*** ./src/app/profile/account/account.module.ts ***!
  \***************************************************/
/*! exports provided: AccountPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountPageModule", function() { return AccountPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _account_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./account.page */ "./src/app/profile/account/account.page.ts");







const routes = [
    {
        path: '',
        component: _account_page__WEBPACK_IMPORTED_MODULE_6__["AccountPage"]
    }
];
let AccountPageModule = class AccountPageModule {
};
AccountPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_account_page__WEBPACK_IMPORTED_MODULE_6__["AccountPage"]]
    })
], AccountPageModule);



/***/ }),

/***/ "./src/app/profile/account/account.page.scss":
/*!***************************************************!*\
  !*** ./src/app/profile/account/account.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUvYWNjb3VudC9hY2NvdW50LnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/profile/account/account.page.ts":
/*!*************************************************!*\
  !*** ./src/app/profile/account/account.page.ts ***!
  \*************************************************/
/*! exports provided: AccountPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountPage", function() { return AccountPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ "./node_modules/@ionic-native/in-app-browser/ngx/index.js");
/* harmony import */ var _ionic_native_spinner_dialog_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/spinner-dialog/ngx */ "./node_modules/@ionic-native/spinner-dialog/ngx/index.js");
/* harmony import */ var _services_products_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/products.service */ "./src/app/services/products.service.ts");
/* harmony import */ var _services_authenticate_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/authenticate.service */ "./src/app/services/authenticate.service.ts");







let AccountPage = class AccountPage {
    constructor(productsService, authenticationService, storage, iab, spinnerDialog) {
        this.productsService = productsService;
        this.authenticationService = authenticationService;
        this.storage = storage;
        this.iab = iab;
        this.spinnerDialog = spinnerDialog;
        this.options = {
            location: 'yes',
            hideurlbar: "yes",
            presentationstyle: 'pagesheet',
        };
    }
    ngOnInit() {
        this.authenticationService.getCustomer();
        setTimeout(() => {
            console.log("Account: ", this.authenticationService.customer);
        }, 1000);
    }
    openWithInAppBrowser() {
        let target = "_blank";
        const browser = this.iab.create("https://beta.isabellagarcia.co.za/my-account/edit-account/", target, this.options);
        browser.on('loadstart').subscribe((eve) => {
            this.spinnerDialog.show(null, null, true);
        }, err => {
            this.spinnerDialog.hide();
        });
        browser.on('loadstop').subscribe(() => {
            this.spinnerDialog.hide();
        }, err => {
            this.spinnerDialog.hide();
        });
        browser.on('loaderror').subscribe(() => {
            this.spinnerDialog.hide();
        }, err => {
            this.spinnerDialog.hide();
        });
        browser.on('exit').subscribe(() => {
            this.spinnerDialog.hide();
        }, err => {
            this.spinnerDialog.hide();
        });
    }
};
AccountPage.ctorParameters = () => [
    { type: _services_products_service__WEBPACK_IMPORTED_MODULE_5__["ProductsService"] },
    { type: _services_authenticate_service__WEBPACK_IMPORTED_MODULE_6__["AuthenticationService"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"] },
    { type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_3__["InAppBrowser"] },
    { type: _ionic_native_spinner_dialog_ngx__WEBPACK_IMPORTED_MODULE_4__["SpinnerDialog"] }
];
AccountPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-account',
        template: __webpack_require__(/*! raw-loader!./account.page.html */ "./node_modules/raw-loader/index.js!./src/app/profile/account/account.page.html"),
        styles: [__webpack_require__(/*! ./account.page.scss */ "./src/app/profile/account/account.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_products_service__WEBPACK_IMPORTED_MODULE_5__["ProductsService"], _services_authenticate_service__WEBPACK_IMPORTED_MODULE_6__["AuthenticationService"], _ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"], _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_3__["InAppBrowser"], _ionic_native_spinner_dialog_ngx__WEBPACK_IMPORTED_MODULE_4__["SpinnerDialog"]])
], AccountPage);



/***/ })

}]);
//# sourceMappingURL=profile-account-account-module-es2015.js.map