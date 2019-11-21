(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["cart-cart-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/cart/cart.page.html":
/*!***************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/cart/cart.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>Shopping Cart</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-card [hidden]=\"!showEmptyCartMessage\">\n    <ion-grid>\n      <ion-row>\n        <ion-col>Your cart is currently empty.</ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-card>\n   \n  <ion-list id=\"cartList\">\n    <ion-item *ngFor=\"let item of cartItems; let i = index\">\n      <ion-thumbnail (click)=\"getProdDet(item.product.id)\" class=\"prodThumbImg\" [innerHtml]=\"replaceIMG(item.product.images[0].src)\" slot=\"start\"></ion-thumbnail>\n      <ion-label (click)=\"getProdDet(item.product.id)\">\n        <p class=\"cartTitle\"><strong>{{ item.product.name }}</strong></p>\n        <p class=\"cartPrice\">{{ item.product.price | currency : \"R\" }}</p>\n        <p class=\"cartQty\">Quantity: {{ item.qty }}</p>\n      </ion-label>\n      <ion-button fill=\"clear\" color=\"danger\" (click)=\"removeFromCart(item, i)\" slot=\"end\">\n        <ion-icon name=\"trash\"></ion-icon>\n      </ion-button>\n    </ion-item>\n  </ion-list>\n\n  \n\n</ion-content>\n\n<ion-footer>\n  <ion-grid>\n    <ion-row>\n      <ion-col col-2>\n\n      </ion-col>\n      <ion-col col-4>\n        <b>BR TOTAL</b>\n      </ion-col>\n      <ion-col col-3 style=\"text-align: right;\">\n        <b>- {{ cartBr | number:'1.2-2'}}</b>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col col-2>\n\n      </ion-col>\n      <ion-col col-4>\n        <b>TOTAL</b>\n      </ion-col>\n      <ion-col col-3 style=\"text-align: right;\">\n        <b>{{ total | currency : \"R\"  }}</b>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <ion-button expand=\"full\" color=\"dark\" (click)=\"openWithInAppBrowser()\">CHECKOUT</ion-button>\n  <!--<ion-button >Open with In App browser</ion-button>-->\n</ion-footer>"

/***/ }),

/***/ "./src/app/cart/cart.module.ts":
/*!*************************************!*\
  !*** ./src/app/cart/cart.module.ts ***!
  \*************************************/
/*! exports provided: CartPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartPageModule", function() { return CartPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _cart_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cart.page */ "./src/app/cart/cart.page.ts");







var routes = [
    {
        path: '',
        component: _cart_page__WEBPACK_IMPORTED_MODULE_6__["CartPage"]
    }
];
var CartPageModule = /** @class */ (function () {
    function CartPageModule() {
    }
    CartPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_cart_page__WEBPACK_IMPORTED_MODULE_6__["CartPage"]]
        })
    ], CartPageModule);
    return CartPageModule;
}());



/***/ }),

/***/ "./src/app/cart/cart.page.scss":
/*!*************************************!*\
  !*** ./src/app/cart/cart.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NhcnQvY2FydC5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/cart/cart.page.ts":
/*!***********************************!*\
  !*** ./src/app/cart/cart.page.ts ***!
  \***********************************/
/*! exports provided: CartPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartPage", function() { return CartPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _services_products_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/products.service */ "./src/app/services/products.service.ts");
/* harmony import */ var _services_authenticate_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/authenticate.service */ "./src/app/services/authenticate.service.ts");
/* harmony import */ var _services_page_details_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/page-details.service */ "./src/app/services/page-details.service.ts");
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ "./node_modules/@ionic-native/in-app-browser/ngx/index.js");
/* harmony import */ var _ionic_native_spinner_dialog_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/spinner-dialog/ngx */ "./node_modules/@ionic-native/spinner-dialog/ngx/index.js");









var CartPage = /** @class */ (function () {
    function CartPage(productsService, authenticationService, storage, pageDetail, iab, http, spinnerDialog) {
        var _this = this;
        this.productsService = productsService;
        this.authenticationService = authenticationService;
        this.storage = storage;
        this.pageDetail = pageDetail;
        this.iab = iab;
        this.http = http;
        this.spinnerDialog = spinnerDialog;
        this.cartItems = [];
        this.showEmptyCartMessage = false;
        this.options = {
            location: 'yes',
            hideurlbar: "yes",
            presentationstyle: 'pagesheet',
        };
        this.total = 0.0;
        this.storage.ready().then(function (data) {
            _this.storage.get("user").then(function (data) {
                _this.userData = data;
                _this.totalBr = data[0].brPoints;
            });
            _this.storage.get("cart").then(function (data) {
                _this.cartItems = data;
                console.log("Items in Cart", _this.cartItems);
                if (_this.cartItems) {
                    if (_this.cartItems.length > 0) {
                        _this.cartItems.forEach(function (item, index) {
                            _this.total = _this.total + (item.product.price * item.qty);
                        });
                        if (_this.total <= _this.totalBr) {
                            _this.cartBr = _this.total;
                            _this.total = 0.00;
                        }
                        else {
                            _this.total = _this.total - _this.totalBr;
                            _this.cartBr = _this.totalBr;
                        }
                    }
                    else {
                        _this.showEmptyCartMessage = true;
                    }
                }
                else {
                    _this.showEmptyCartMessage = true;
                }
            });
        });
    }
    CartPage.prototype.ngOnInit = function () {
    };
    CartPage.prototype.replaceIMG = function (imgString) {
        var newstr = imgString.replace("beta.", "");
        return '<img src="' + newstr + '">';
    };
    CartPage.prototype.removeFromCart = function (item, i) {
        var _this = this;
        this.pageDetail.subCartCount();
        //this.pageDetail.addBRPoints(item.product.price);
        var price = item.product.price;
        var qty = item.qty;
        this.cartItems.splice(i, 1);
        this.storage.set("cart", this.cartItems).then(function () {
            _this.storage.get("availableBR").then(function (data) {
                _this.userBR = data - _this.total;
                _this.storage.set("availableBR", _this.userBR).then(function () {
                    console.log(_this.userBR);
                });
            });
        });
        this.removeUcart(item.cartKey);
        this.recalCart();
        this.pageDetail.getBRPoints();
    };
    CartPage.prototype.removeUcart = function (ckey) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({ 'Authorization': 'Bearer ' + this.userData[0].authToken });
        var httpOptions = {
            headers: headers
        };
        this.http.delete("https://beta.isabellagarcia.co.za/wp-json/cocart/v1/item?cart_item_key=" + ckey, httpOptions)
            .subscribe(function (data) {
            console.log(data);
        }, function (error) {
            console.log(error);
        });
    };
    CartPage.prototype.getProdDet = function (id) {
        this.productsService.ProductDetails(id);
        console.log(this.productsService.productDetails);
    };
    CartPage.prototype.openWithInAppBrowser = function () {
        var _this = this;
        var target = "_blank";
        var browser = this.iab.create("https://beta.isabellagarcia.co.za/cart/", target, this.options);
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
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({ 'Authorization': 'Bearer ' + _this.userData[0].authToken });
            var httpOptions = {
                headers: headers
            };
            _this.http.get("https://beta.isabellagarcia.co.za/wp-json/cocart/v1/get-cart/" + _this.userData[0].id, httpOptions)
                .subscribe(function (data) {
                console.log(data);
                console.log('sting data output:', JSON.stringify(data));
                if (typeof data !== 'object' || JSON.stringify(data) == "[]") {
                    _this.storage.ready().then(function (data) {
                        _this.storage.set('cart', '');
                        _this.cartItems = [];
                        _this.recalCart();
                    });
                }
            }, function (error) {
                console.log(error);
            });
        }, function (err) {
            _this.spinnerDialog.hide();
        });
    };
    CartPage.prototype.recalCart = function () {
        var _this = this;
        this.storage.get("cart").then(function (data) {
            _this.cartItems = data;
            console.log("Items in Cart", _this.cartItems);
            if (_this.cartItems) {
                if (_this.cartItems.length > 0) {
                    _this.cartItems.forEach(function (item, index) {
                        _this.total = _this.total + (item.product.price * item.qty);
                    });
                    if (_this.total <= _this.totalBr) {
                        _this.cartBr = _this.total;
                        _this.total = 0.00;
                    }
                    else {
                        _this.total = _this.total - _this.totalBr;
                        _this.cartBr = _this.totalBr;
                    }
                }
                else {
                    _this.showEmptyCartMessage = true;
                    _this.cartBr = 0.00;
                    _this.total = 0.00;
                }
            }
            else {
                _this.showEmptyCartMessage = true;
                _this.cartBr = 0.00;
                _this.total = 0.00;
            }
        });
    };
    CartPage.ctorParameters = function () { return [
        { type: _services_products_service__WEBPACK_IMPORTED_MODULE_4__["ProductsService"] },
        { type: _services_authenticate_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"] },
        { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"] },
        { type: _services_page_details_service__WEBPACK_IMPORTED_MODULE_6__["PageDetailsService"] },
        { type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_7__["InAppBrowser"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
        { type: _ionic_native_spinner_dialog_ngx__WEBPACK_IMPORTED_MODULE_8__["SpinnerDialog"] }
    ]; };
    CartPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-cart',
            template: __webpack_require__(/*! raw-loader!./cart.page.html */ "./node_modules/raw-loader/index.js!./src/app/cart/cart.page.html"),
            styles: [__webpack_require__(/*! ./cart.page.scss */ "./src/app/cart/cart.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_products_service__WEBPACK_IMPORTED_MODULE_4__["ProductsService"], _services_authenticate_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"], _ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"], _services_page_details_service__WEBPACK_IMPORTED_MODULE_6__["PageDetailsService"], _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_7__["InAppBrowser"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _ionic_native_spinner_dialog_ngx__WEBPACK_IMPORTED_MODULE_8__["SpinnerDialog"]])
    ], CartPage);
    return CartPage;
}());



/***/ })

}]);
//# sourceMappingURL=cart-cart-module-es5.js.map