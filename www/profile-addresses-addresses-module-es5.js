(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["profile-addresses-addresses-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/profile/addresses/addresses.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/profile/addresses/addresses.page.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n          <ion-back-button></ion-back-button>\n        </ion-buttons>\n      <ion-title>Addresses</ion-title>\n    </ion-toolbar>\n  </ion-header>\n  \n  <ion-content>\n    <ion-card>    \n      <ion-card-content>\n        <ion-card-subtitle>Billing Address</ion-card-subtitle>\n        <hr/>\n        <h2>{{authenticationService.customer.billing.first_name}} {{authenticationService.customer.billing.last_name}}</h2>\n        <p>\n        <ion-label>\n          <p position=\"stacked\">Address</p>\n          <h3>{{authenticationService.customer.billing.address_1}}, {{authenticationService.customer.billing.address_2}}, {{authenticationService.customer.billing.city}}, {{authenticationService.customer.billing.state}}, {{authenticationService.customer.billing.postcode}}</h3>\n        </ion-label>\n        </p> \n        <p>\n        <ion-label>\n          <p position=\"stacked\">Company</p>\n          <h3>{{authenticationService.customer.billing.company}}</h3>\n        </ion-label>\n        </p> \n        <p>\n        <ion-label>\n          <p position=\"stacked\">Phone</p>\n          <h3>{{authenticationService.customer.billing.phone}}</h3>\n        </ion-label>\n        </p>\n        <ion-button size=\"small\" class=\"editBtn\" (click)=\"openWithInAppBrowser()\"><ion-icon name=\"create\" slot=\"start\"></ion-icon>Edit</ion-button>\n      </ion-card-content>\n    </ion-card>\n\n    <ion-card>    \n        <ion-card-content>\n          <ion-card-subtitle>Shipping Address</ion-card-subtitle>\n          <hr/>\n          <h2>{{authenticationService.customer.shipping.first_name}} {{authenticationService.customer.shipping.last_name}}</h2>\n          <p>\n          <ion-label>\n            <p position=\"stacked\">Address</p>\n            <h3>{{authenticationService.customer.shipping.address_1}}, {{authenticationService.customer.shipping.address_2}}, {{authenticationService.customer.shipping.city}}, {{authenticationService.customer.shipping.state}}, {{authenticationService.customer.shipping.postcode}}</h3>\n          </ion-label>\n          </p> \n          <p>\n          <ion-label>\n            <p position=\"stacked\">Company</p>\n            <h3>{{authenticationService.customer.shipping.company}}</h3>\n          </ion-label>\n          </p>\n          <ion-button size=\"small\" class=\"editBtn\" (click)=\"openWithInAppBrowser()\"><ion-icon name=\"create\" slot=\"start\"></ion-icon>Edit</ion-button>\n        </ion-card-content>\n      </ion-card>\n        \n  </ion-content>\n  "

/***/ }),

/***/ "./src/app/profile/addresses/addresses.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/profile/addresses/addresses.module.ts ***!
  \*******************************************************/
/*! exports provided: AddressesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddressesPageModule", function() { return AddressesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _addresses_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./addresses.page */ "./src/app/profile/addresses/addresses.page.ts");







var routes = [
    {
        path: '',
        component: _addresses_page__WEBPACK_IMPORTED_MODULE_6__["AddressesPage"]
    }
];
var AddressesPageModule = /** @class */ (function () {
    function AddressesPageModule() {
    }
    AddressesPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_addresses_page__WEBPACK_IMPORTED_MODULE_6__["AddressesPage"]]
        })
    ], AddressesPageModule);
    return AddressesPageModule;
}());



/***/ }),

/***/ "./src/app/profile/addresses/addresses.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/profile/addresses/addresses.page.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".editBtn {\n  --background: #000;\n  --color: #fff;\n  --border-radius: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZmlsZS9hZGRyZXNzZXMvRDpcXHhhbXBwXFxodGRvY3NcXGViLWFwcFxcZWdBcHAvc3JjXFxhcHBcXHByb2ZpbGVcXGFkZHJlc3Nlc1xcYWRkcmVzc2VzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcHJvZmlsZS9hZGRyZXNzZXMvYWRkcmVzc2VzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLG9CQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9wcm9maWxlL2FkZHJlc3Nlcy9hZGRyZXNzZXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmVkaXRCdG4ge1xuICAgIC0tYmFja2dyb3VuZDogIzAwMDtcbiAgICAtLWNvbG9yOiAjZmZmO1xuICAgIC0tYm9yZGVyLXJhZGl1czogMHB4O1xufSIsIi5lZGl0QnRuIHtcbiAgLS1iYWNrZ3JvdW5kOiAjMDAwO1xuICAtLWNvbG9yOiAjZmZmO1xuICAtLWJvcmRlci1yYWRpdXM6IDBweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/profile/addresses/addresses.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/profile/addresses/addresses.page.ts ***!
  \*****************************************************/
/*! exports provided: AddressesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddressesPage", function() { return AddressesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ "./node_modules/@ionic-native/in-app-browser/ngx/index.js");
/* harmony import */ var _ionic_native_spinner_dialog_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/spinner-dialog/ngx */ "./node_modules/@ionic-native/spinner-dialog/ngx/index.js");
/* harmony import */ var _services_products_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/products.service */ "./src/app/services/products.service.ts");
/* harmony import */ var _services_authenticate_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/authenticate.service */ "./src/app/services/authenticate.service.ts");







var AddressesPage = /** @class */ (function () {
    function AddressesPage(productsService, authenticationService, storage, iab, spinnerDialog) {
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
    AddressesPage.prototype.ngOnInit = function () {
        this.authenticationService.getCustomer();
    };
    AddressesPage.prototype.openWithInAppBrowser = function () {
        var _this = this;
        var target = "_blank";
        var browser = this.iab.create("https://beta.isabellagarcia.co.za/my-account/edit-account/", target, this.options);
        browser.on('loadstart').subscribe(function (eve) {
            _this.spinnerDialog.show(null, null, true);
        }, function (err) {
            _this.spinnerDialog.hide();
        });
        browser.on('loadstop').subscribe(function () {
            _this.spinnerDialog.hide();
        }, function (err) {
            _this.spinnerDialog.hide();
        });
        browser.on('loaderror').subscribe(function () {
            _this.spinnerDialog.hide();
        }, function (err) {
            _this.spinnerDialog.hide();
        });
        browser.on('exit').subscribe(function () {
            _this.spinnerDialog.hide();
        }, function (err) {
            _this.spinnerDialog.hide();
        });
    };
    AddressesPage.ctorParameters = function () { return [
        { type: _services_products_service__WEBPACK_IMPORTED_MODULE_5__["ProductsService"] },
        { type: _services_authenticate_service__WEBPACK_IMPORTED_MODULE_6__["AuthenticationService"] },
        { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"] },
        { type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_3__["InAppBrowser"] },
        { type: _ionic_native_spinner_dialog_ngx__WEBPACK_IMPORTED_MODULE_4__["SpinnerDialog"] }
    ]; };
    AddressesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-addresses',
            template: __webpack_require__(/*! raw-loader!./addresses.page.html */ "./node_modules/raw-loader/index.js!./src/app/profile/addresses/addresses.page.html"),
            styles: [__webpack_require__(/*! ./addresses.page.scss */ "./src/app/profile/addresses/addresses.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_products_service__WEBPACK_IMPORTED_MODULE_5__["ProductsService"], _services_authenticate_service__WEBPACK_IMPORTED_MODULE_6__["AuthenticationService"], _ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"], _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_3__["InAppBrowser"], _ionic_native_spinner_dialog_ngx__WEBPACK_IMPORTED_MODULE_4__["SpinnerDialog"]])
    ], AddressesPage);
    return AddressesPage;
}());



/***/ })

}]);
//# sourceMappingURL=profile-addresses-addresses-module-es5.js.map