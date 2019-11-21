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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _cart_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cart.page */ "./src/app/cart/cart.page.ts");







const routes = [
    {
        path: '',
        component: _cart_page__WEBPACK_IMPORTED_MODULE_6__["CartPage"]
    }
];
let CartPageModule = class CartPageModule {
};
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _services_products_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/products.service */ "./src/app/services/products.service.ts");
/* harmony import */ var _services_authenticate_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/authenticate.service */ "./src/app/services/authenticate.service.ts");
/* harmony import */ var _services_page_details_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/page-details.service */ "./src/app/services/page-details.service.ts");
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ "./node_modules/@ionic-native/in-app-browser/ngx/index.js");
/* harmony import */ var _ionic_native_spinner_dialog_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/spinner-dialog/ngx */ "./node_modules/@ionic-native/spinner-dialog/ngx/index.js");









let CartPage = class CartPage {
    constructor(productsService, authenticationService, storage, pageDetail, iab, http, spinnerDialog) {
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
        this.storage.ready().then((data) => {
            this.storage.get("user").then((data) => {
                this.userData = data;
                this.totalBr = data[0].brPoints;
            });
            this.storage.get("cart").then((data) => {
                this.cartItems = data;
                console.log("Items in Cart", this.cartItems);
                if (this.cartItems) {
                    if (this.cartItems.length > 0) {
                        this.cartItems.forEach((item, index) => {
                            this.total = this.total + (item.product.price * item.qty);
                        });
                        if (this.total <= this.totalBr) {
                            this.cartBr = this.total;
                            this.total = 0.00;
                        }
                        else {
                            this.total = this.total - this.totalBr;
                            this.cartBr = this.totalBr;
                        }
                    }
                    else {
                        this.showEmptyCartMessage = true;
                    }
                }
                else {
                    this.showEmptyCartMessage = true;
                }
            });
        });
    }
    ngOnInit() {
    }
    replaceIMG(imgString) {
        var newstr = imgString.replace("beta.", "");
        return '<img src="' + newstr + '">';
    }
    removeFromCart(item, i) {
        this.pageDetail.subCartCount();
        //this.pageDetail.addBRPoints(item.product.price);
        let price = item.product.price;
        let qty = item.qty;
        this.cartItems.splice(i, 1);
        this.storage.set("cart", this.cartItems).then(() => {
            this.storage.get("availableBR").then((data) => {
                this.userBR = data - this.total;
                this.storage.set("availableBR", this.userBR).then(() => {
                    console.log(this.userBR);
                });
            });
        });
        this.removeUcart(item.cartKey);
        this.recalCart();
        this.pageDetail.getBRPoints();
    }
    removeUcart(ckey) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({ 'Authorization': 'Bearer ' + this.userData[0].authToken });
        let httpOptions = {
            headers: headers
        };
        this.http.delete("https://beta.isabellagarcia.co.za/wp-json/cocart/v1/item?cart_item_key=" + ckey, httpOptions)
            .subscribe(data => {
            console.log(data);
        }, error => {
            console.log(error);
        });
    }
    getProdDet(id) {
        this.productsService.ProductDetails(id);
        console.log(this.productsService.productDetails);
    }
    openWithInAppBrowser() {
        let target = "_blank";
        const browser = this.iab.create("https://beta.isabellagarcia.co.za/cart/", target, this.options);
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
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({ 'Authorization': 'Bearer ' + this.userData[0].authToken });
            let httpOptions = {
                headers: headers
            };
            this.http.get("https://beta.isabellagarcia.co.za/wp-json/cocart/v1/get-cart/" + this.userData[0].id, httpOptions)
                .subscribe(data => {
                console.log(data);
                console.log('sting data output:', JSON.stringify(data));
                if (typeof data !== 'object' || JSON.stringify(data) == "[]") {
                    this.storage.ready().then((data) => {
                        this.storage.set('cart', '');
                        this.cartItems = [];
                        this.recalCart();
                    });
                }
            }, error => {
                console.log(error);
            });
        }, err => {
            this.spinnerDialog.hide();
        });
    }
    recalCart() {
        this.storage.get("cart").then((data) => {
            this.cartItems = data;
            console.log("Items in Cart", this.cartItems);
            if (this.cartItems) {
                if (this.cartItems.length > 0) {
                    this.cartItems.forEach((item, index) => {
                        this.total = this.total + (item.product.price * item.qty);
                    });
                    if (this.total <= this.totalBr) {
                        this.cartBr = this.total;
                        this.total = 0.00;
                    }
                    else {
                        this.total = this.total - this.totalBr;
                        this.cartBr = this.totalBr;
                    }
                }
                else {
                    this.showEmptyCartMessage = true;
                    this.cartBr = 0.00;
                    this.total = 0.00;
                }
            }
            else {
                this.showEmptyCartMessage = true;
                this.cartBr = 0.00;
                this.total = 0.00;
            }
        });
    }
};
CartPage.ctorParameters = () => [
    { type: _services_products_service__WEBPACK_IMPORTED_MODULE_4__["ProductsService"] },
    { type: _services_authenticate_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"] },
    { type: _services_page_details_service__WEBPACK_IMPORTED_MODULE_6__["PageDetailsService"] },
    { type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_7__["InAppBrowser"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: _ionic_native_spinner_dialog_ngx__WEBPACK_IMPORTED_MODULE_8__["SpinnerDialog"] }
];
CartPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-cart',
        template: __webpack_require__(/*! raw-loader!./cart.page.html */ "./node_modules/raw-loader/index.js!./src/app/cart/cart.page.html"),
        styles: [__webpack_require__(/*! ./cart.page.scss */ "./src/app/cart/cart.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_products_service__WEBPACK_IMPORTED_MODULE_4__["ProductsService"], _services_authenticate_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"], _ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"], _services_page_details_service__WEBPACK_IMPORTED_MODULE_6__["PageDetailsService"], _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_7__["InAppBrowser"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _ionic_native_spinner_dialog_ngx__WEBPACK_IMPORTED_MODULE_8__["SpinnerDialog"]])
], CartPage);



/***/ })

}]);
//# sourceMappingURL=cart-cart-module-es2015.js.map