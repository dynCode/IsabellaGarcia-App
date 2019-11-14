(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["profile-orders-orders-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/profile/orders/orders.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/profile/orders/orders.page.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>Orders History</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card [hidden]=\"hasOrders\">\n    <ion-grid>\n      <ion-row>\n        <ion-col>No order has been made yet.</ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-card>\n  <ion-list [hidden]=\"!hasOrders\">\n    <ion-item>\n      <ion-grid class=\"oHeadGrid\">\n        <ion-row>\n          <ion-col class=\"col1-Head\">\n            Order\n          </ion-col>\n          <ion-col class=\"col2-Head\">\n            Date\n          </ion-col>\n          <ion-col class=\"col3-Head\">\n            Status\n          </ion-col>\n          <ion-col class=\"col4-Head\">\n            Total\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-item>\n    <ion-item *ngFor=\"let order of userOrders; let i = index\">\n      <ion-grid class=\"orderGrid\">\n        <ion-row>\n          <ion-col class=\"col1-Order\">\n            #{{order.number}}\n          </ion-col>\n          <ion-col class=\"col2-Order\">\n            {{order.date_created | date : \"mediumDate\"}}\n          </ion-col>\n          <ion-col class=\"col3-Order\">\n            {{order.status}}\n          </ion-col>\n          <ion-col class=\"col4-Order\">\n            {{order.total | currency : \"R\"}}\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-item>\n  </ion-list>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/profile/orders/orders.module.ts":
/*!*************************************************!*\
  !*** ./src/app/profile/orders/orders.module.ts ***!
  \*************************************************/
/*! exports provided: OrdersPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdersPageModule", function() { return OrdersPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _orders_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./orders.page */ "./src/app/profile/orders/orders.page.ts");







var routes = [
    {
        path: '',
        component: _orders_page__WEBPACK_IMPORTED_MODULE_6__["OrdersPage"]
    }
];
var OrdersPageModule = /** @class */ (function () {
    function OrdersPageModule() {
    }
    OrdersPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_orders_page__WEBPACK_IMPORTED_MODULE_6__["OrdersPage"]]
        })
    ], OrdersPageModule);
    return OrdersPageModule;
}());



/***/ }),

/***/ "./src/app/profile/orders/orders.page.scss":
/*!*************************************************!*\
  !*** ./src/app/profile/orders/orders.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".col1-Order, .col2-Order, .col3-Order, .col4-Order {\n  font-size: 12px;\n}\n\n.col1-Order {\n  --ion-grid-width: 80px;\n}\n\n.col2-Order {\n  --ion-grid-width: 80px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZmlsZS9vcmRlcnMvRDpcXHhhbXBwXFxodGRvY3NcXGViLWFwcFxcZWdBcHAvc3JjXFxhcHBcXHByb2ZpbGVcXG9yZGVyc1xcb3JkZXJzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcHJvZmlsZS9vcmRlcnMvb3JkZXJzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQUE7QUNDSjs7QURDQTtFQUNJLHNCQUFBO0FDRUo7O0FEQUE7RUFDSSxzQkFBQTtBQ0dKIiwiZmlsZSI6InNyYy9hcHAvcHJvZmlsZS9vcmRlcnMvb3JkZXJzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb2wxLU9yZGVyLCAuY29sMi1PcmRlciwgLmNvbDMtT3JkZXIsIC5jb2w0LU9yZGVyIHtcbiAgICBmb250LXNpemU6IDEycHg7XG59XG4uY29sMS1PcmRlciB7XG4gICAgLS1pb24tZ3JpZC13aWR0aDogODBweDtcbn1cbi5jb2wyLU9yZGVyIHtcbiAgICAtLWlvbi1ncmlkLXdpZHRoOiA4MHB4O1xufSIsIi5jb2wxLU9yZGVyLCAuY29sMi1PcmRlciwgLmNvbDMtT3JkZXIsIC5jb2w0LU9yZGVyIHtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4uY29sMS1PcmRlciB7XG4gIC0taW9uLWdyaWQtd2lkdGg6IDgwcHg7XG59XG5cbi5jb2wyLU9yZGVyIHtcbiAgLS1pb24tZ3JpZC13aWR0aDogODBweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/profile/orders/orders.page.ts":
/*!***********************************************!*\
  !*** ./src/app/profile/orders/orders.page.ts ***!
  \***********************************************/
/*! exports provided: OrdersPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdersPage", function() { return OrdersPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _services_authenticate_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/authenticate.service */ "./src/app/services/authenticate.service.ts");
/* harmony import */ var _services_products_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/products.service */ "./src/app/services/products.service.ts");





var OrdersPage = /** @class */ (function () {
    function OrdersPage(authenticationService, productsService, storage) {
        this.authenticationService = authenticationService;
        this.productsService = productsService;
        this.storage = storage;
        this.userDetails = [];
        this.userOrders = [];
        this.hasOrders = false;
    }
    OrdersPage.prototype.ngOnInit = function () {
        var _this = this;
        this.storage.ready().then(function (data) {
            _this.storage.get("user").then(function (data) {
                _this.userDetails = data;
                _this.userFirstName = _this.userDetails[0].firstName;
                _this.userSurname = _this.userDetails[0].lastName;
                _this.userBR = _this.userDetails[0].brPoints;
                _this.userID = _this.userDetails[0].id;
            });
        });
        this.userOrders = this.productsService.history;
        if (this.userOrders.length > 0 || this.userOrders.length !== null) {
            this.hasOrders = true;
        }
        else {
            this.hasOrders = false;
        }
        console.log(this.userOrders);
    };
    OrdersPage.ctorParameters = function () { return [
        { type: _services_authenticate_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"] },
        { type: _services_products_service__WEBPACK_IMPORTED_MODULE_4__["ProductsService"] },
        { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"] }
    ]; };
    OrdersPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-orders',
            template: __webpack_require__(/*! raw-loader!./orders.page.html */ "./node_modules/raw-loader/index.js!./src/app/profile/orders/orders.page.html"),
            styles: [__webpack_require__(/*! ./orders.page.scss */ "./src/app/profile/orders/orders.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_authenticate_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"], _services_products_service__WEBPACK_IMPORTED_MODULE_4__["ProductsService"], _ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"]])
    ], OrdersPage);
    return OrdersPage;
}());



/***/ })

}]);
//# sourceMappingURL=profile-orders-orders-module-es5.js.map