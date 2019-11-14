(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["shop-shop-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/shop/shop.page.html":
/*!***************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shop/shop.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar class=\"main-toolbar\">\n\n    <!--<ion-button slot=\"start\" expand=\"block\" onclick=\"openMenu()\" class=\"toolbar-btn tb-btn1\">\n      <img class=\"icon-menu\" src=\"/assets/icon/menu.svg\" alt=\"\" />\n    </ion-button>-->\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    \n    <ion-title><span class=\"title-large\">PICK OF THE MONTH</span></ion-title>\n\n    <ion-button slot=\"end\" class=\"toolbar-btn tb-btn2\" [routerLink]=\"['/', 'cart']\">\n      <div class=\"cartBlock\">\n        <img class=\"icon-cart\" src=\"/assets/icon/cart.svg\" alt=\"\" />\n        <div class=\"cartBadge\" *ngIf=\"pageDetail.cartCount > 0\"><ion-badge>{{ pageDetail.cartCount }}</ion-badge></div>\n      </div>\n    </ion-button>\n\n  </ion-toolbar>\n  <ion-toolbar class=\"secondary-toolbar\">\n    <ion-grid>\n      <ion-row>\n        <ion-col class=\"search-col\">\n          <ion-searchbar></ion-searchbar>\n        </ion-col>\n        <ion-col class=\"br-col\">\n          <p *ngIf=\"pageDetail.finalBR > 0.00\"><span class=\"br-currency\">BR</span><span class=\"br-amount\">{{ pageDetail.finalBR | number : '1.2-2' }}</span></p>\n          <p *ngIf=\"0.00 >= pageDetail.finalBR\"><span class=\"br-currency\">BR</span><span class=\"br-amount\">0.00</span></p>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\t<ion-grid>\n\t\t<ion-row>\n\t\t\t<ion-col size=\"6\" *ngFor=\"let product of productsService.allProducts\">\n        <div class=\"prodWrap\" (click)=\"getProdDet(product.id)\">\n          <div class=\"prodImgWrap\">\n            <div class=\"prodStock\" *ngIf=\"!product.in_stock\">Sold out</div>\n            <div class=\"prodImg\" [innerHtml]=\"replaceIMG(product.images[0].src)\"></div>\n          </div>\n          <div class=\"prodTitle\">{{product.name}}</div>\n          \n          <div class=\"brPrice\" *ngIf=\"pageDetail.finalBR > product.price\">\n            <div class=\"prodPrice\" *ngIf=\"product.price != product.regular_price\">\n                <span class=\"oldPrice\">{{product.regular_price | currency : \"BR\"}}</span><span class=\"salePrice\">{{product.price | currency : \"BR\"}}</span>\n            </div>\n            <div class=\"prodPrice\" *ngIf=\"product.price === product.regular_price\">\n                <span class=\"pPrice\">{{product.price | currency : \"BR\"}}</span>\n            </div>\n          </div>\n          <div class=\"randPrice\" *ngIf=\"product.price > pageDetail.finalBR\">\n            <div class=\"prodPrice\" *ngIf=\"product.price != product.regular_price\">\n                <span class=\"oldPrice\">{{product.regular_price | currency : \"R\"}}</span><span class=\"salePrice\">{{product.price | currency : \"R\"}}</span>\n            </div>\n            <div class=\"prodPrice\" *ngIf=\"product.price === product.regular_price\">\n                <span class=\"pPrice\">{{product.price | currency : \"R\"}}</span>\n            </div>\n          </div>\n          <!--<div [innerHtml]=\"product.description\"></div>-->\n        </div>\n\t\t\t</ion-col>\n\t\t</ion-row>\n\t</ion-grid>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/shop/shop.module.ts":
/*!*************************************!*\
  !*** ./src/app/shop/shop.module.ts ***!
  \*************************************/
/*! exports provided: ShopPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShopPageModule", function() { return ShopPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _shop_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shop.page */ "./src/app/shop/shop.page.ts");







const routes = [
    {
        path: '',
        component: _shop_page__WEBPACK_IMPORTED_MODULE_6__["ShopPage"]
    }
];
let ShopPageModule = class ShopPageModule {
};
ShopPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_shop_page__WEBPACK_IMPORTED_MODULE_6__["ShopPage"]]
    })
], ShopPageModule);



/***/ }),

/***/ "./src/app/shop/shop.page.scss":
/*!*************************************!*\
  !*** ./src/app/shop/shop.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-title {\n  text-align: center;\n}\n\n.title-large {\n  padding-bottom: 0px;\n  margin-bottom: 0px;\n}\n\n.title-large::before {\n  display: none !important;\n}\n\nion-toolbar.main-toolbar {\n  --color: #ffffff;\n  --background: #000000;\n  --padding-bottom: 0px;\n  --padding-end: 0px;\n  --padding-start: 0px;\n  --padding-top: 0px;\n  --min-height: 55px;\n}\n\n.toolbar-btn {\n  --background: #292c2f;\n  --border-radius: 0px;\n  --color: #fff;\n  --padding-bottom: 0px;\n  --padding-end: 0px;\n  --padding-start: 0px;\n  --padding-top: 0px;\n  height: 55px;\n  display: block;\n  width: 20%;\n  z-index: 1;\n  margin: 0px;\n}\n\n.buttons-first-slot {\n  width: 20%;\n  margin: 0px;\n}\n\nion-menu-button {\n  --background: #292c2f;\n  --border-radius: 0px;\n  --color: #fff;\n  --padding-bottom: 0px;\n  --padding-end: 0px;\n  --padding-start: 0px;\n  --padding-top: 0px;\n  height: 55px;\n  display: block;\n  width: 100%;\n  z-index: 1;\n  margin: 0px;\n}\n\nion-toolbar.secondary-toolbar {\n  --padding-bottom: 0px;\n  --padding-end: 0px;\n  --padding-start: 0px;\n  --padding-top: 0px;\n}\n\n.secondary-toolbar ion-grid {\n  --ion-grid-padding: 0px;\n}\n\nion-searchbar {\n  --background: #ffffff;\n  --color: #292929;\n  padding: 5px;\n  height: 44px;\n}\n\n.prodImgWrap {\n  position: relative;\n}\n\n.prodStock {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  text-align: center;\n  height: 25px;\n  background-color: #616161;\n  color: #ffffff;\n  line-height: 25px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hvcC9EOlxceGFtcHBcXGh0ZG9jc1xcZWItYXBwXFxlZ0FwcC9zcmNcXGFwcFxcc2hvcFxcc2hvcC5wYWdlLnNjc3MiLCJzcmMvYXBwL3Nob3Avc2hvcC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtBQ0NKOztBRENBO0VBQ0ksbUJBQUE7RUFDQSxrQkFBQTtBQ0VKOztBREFBO0VBQ0ksd0JBQUE7QUNHSjs7QUREQTtFQUNJLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FDSUo7O0FERkE7RUFDSSxxQkFBQTtFQUNBLG9CQUFBO0VBQ0EsYUFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7QUNLSjs7QURIQTtFQUNJLFVBQUE7RUFDQSxXQUFBO0FDTUo7O0FESkE7RUFDSSxxQkFBQTtFQUNBLG9CQUFBO0VBQ0EsYUFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7QUNPSjs7QURMQTtFQUNJLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0FDUUo7O0FETkE7RUFDSSx1QkFBQTtBQ1NKOztBRFBBO0VBQ0kscUJBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FDVUo7O0FEUEE7RUFDSSxrQkFBQTtBQ1VKOztBRFJBO0VBQ0ksa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQ1dKIiwiZmlsZSI6InNyYy9hcHAvc2hvcC9zaG9wLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10aXRsZSB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLnRpdGxlLWxhcmdlIHtcbiAgICBwYWRkaW5nLWJvdHRvbTogMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDBweDtcbn1cbi50aXRsZS1sYXJnZTo6YmVmb3JlIHtcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG59XG5pb24tdG9vbGJhci5tYWluLXRvb2xiYXIge1xuICAgIC0tY29sb3I6ICNmZmZmZmY7XG4gICAgLS1iYWNrZ3JvdW5kOiAjMDAwMDAwO1xuICAgIC0tcGFkZGluZy1ib3R0b206IDBweDtcbiAgICAtLXBhZGRpbmctZW5kOiAwcHg7XG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAwcHg7XG4gICAgLS1wYWRkaW5nLXRvcDogMHB4O1xuICAgIC0tbWluLWhlaWdodDogNTVweDtcbn1cbi50b29sYmFyLWJ0biB7XG4gICAgLS1iYWNrZ3JvdW5kOiAjMjkyYzJmO1xuICAgIC0tYm9yZGVyLXJhZGl1czogMHB4O1xuICAgIC0tY29sb3I6ICNmZmY7XG4gICAgLS1wYWRkaW5nLWJvdHRvbTogMHB4O1xuICAgIC0tcGFkZGluZy1lbmQ6IDBweDtcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDBweDtcbiAgICAtLXBhZGRpbmctdG9wOiAwcHg7XG4gICAgaGVpZ2h0OiA1NXB4O1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiAyMCU7XG4gICAgei1pbmRleDogMTtcbiAgICBtYXJnaW46IDBweDtcbn1cbi5idXR0b25zLWZpcnN0LXNsb3Qge1xuICAgIHdpZHRoOiAyMCU7XG4gICAgbWFyZ2luOiAwcHg7XG59XG5pb24tbWVudS1idXR0b24ge1xuICAgIC0tYmFja2dyb3VuZDogIzI5MmMyZjtcbiAgICAtLWJvcmRlci1yYWRpdXM6IDBweDtcbiAgICAtLWNvbG9yOiAjZmZmO1xuICAgIC0tcGFkZGluZy1ib3R0b206IDBweDtcbiAgICAtLXBhZGRpbmctZW5kOiAwcHg7XG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAwcHg7XG4gICAgLS1wYWRkaW5nLXRvcDogMHB4O1xuICAgIGhlaWdodDogNTVweDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDogMTAwJTtcbiAgICB6LWluZGV4OiAxO1xuICAgIG1hcmdpbjogMHB4O1xufVxuaW9uLXRvb2xiYXIuc2Vjb25kYXJ5LXRvb2xiYXIge1xuICAgIC0tcGFkZGluZy1ib3R0b206IDBweDtcbiAgICAtLXBhZGRpbmctZW5kOiAwcHg7XG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAwcHg7XG4gICAgLS1wYWRkaW5nLXRvcDogMHB4O1xufVxuLnNlY29uZGFyeS10b29sYmFyIGlvbi1ncmlkIHtcbiAgICAtLWlvbi1ncmlkLXBhZGRpbmc6IDBweDtcbn1cbmlvbi1zZWFyY2hiYXIge1xuICAgIC0tYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgICAtLWNvbG9yOiAjMjkyOTI5O1xuICAgIHBhZGRpbmc6IDVweDtcbiAgICBoZWlnaHQ6IDQ0cHg7XG59XG5cbi5wcm9kSW1nV3JhcCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLnByb2RTdG9jayB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBoZWlnaHQ6IDI1cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzYxNjE2MTtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICBsaW5lLWhlaWdodDogMjVweDtcbn0iLCJpb24tdGl0bGUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi50aXRsZS1sYXJnZSB7XG4gIHBhZGRpbmctYm90dG9tOiAwcHg7XG4gIG1hcmdpbi1ib3R0b206IDBweDtcbn1cblxuLnRpdGxlLWxhcmdlOjpiZWZvcmUge1xuICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG59XG5cbmlvbi10b29sYmFyLm1haW4tdG9vbGJhciB7XG4gIC0tY29sb3I6ICNmZmZmZmY7XG4gIC0tYmFja2dyb3VuZDogIzAwMDAwMDtcbiAgLS1wYWRkaW5nLWJvdHRvbTogMHB4O1xuICAtLXBhZGRpbmctZW5kOiAwcHg7XG4gIC0tcGFkZGluZy1zdGFydDogMHB4O1xuICAtLXBhZGRpbmctdG9wOiAwcHg7XG4gIC0tbWluLWhlaWdodDogNTVweDtcbn1cblxuLnRvb2xiYXItYnRuIHtcbiAgLS1iYWNrZ3JvdW5kOiAjMjkyYzJmO1xuICAtLWJvcmRlci1yYWRpdXM6IDBweDtcbiAgLS1jb2xvcjogI2ZmZjtcbiAgLS1wYWRkaW5nLWJvdHRvbTogMHB4O1xuICAtLXBhZGRpbmctZW5kOiAwcHg7XG4gIC0tcGFkZGluZy1zdGFydDogMHB4O1xuICAtLXBhZGRpbmctdG9wOiAwcHg7XG4gIGhlaWdodDogNTVweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAyMCU7XG4gIHotaW5kZXg6IDE7XG4gIG1hcmdpbjogMHB4O1xufVxuXG4uYnV0dG9ucy1maXJzdC1zbG90IHtcbiAgd2lkdGg6IDIwJTtcbiAgbWFyZ2luOiAwcHg7XG59XG5cbmlvbi1tZW51LWJ1dHRvbiB7XG4gIC0tYmFja2dyb3VuZDogIzI5MmMyZjtcbiAgLS1ib3JkZXItcmFkaXVzOiAwcHg7XG4gIC0tY29sb3I6ICNmZmY7XG4gIC0tcGFkZGluZy1ib3R0b206IDBweDtcbiAgLS1wYWRkaW5nLWVuZDogMHB4O1xuICAtLXBhZGRpbmctc3RhcnQ6IDBweDtcbiAgLS1wYWRkaW5nLXRvcDogMHB4O1xuICBoZWlnaHQ6IDU1cHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTAwJTtcbiAgei1pbmRleDogMTtcbiAgbWFyZ2luOiAwcHg7XG59XG5cbmlvbi10b29sYmFyLnNlY29uZGFyeS10b29sYmFyIHtcbiAgLS1wYWRkaW5nLWJvdHRvbTogMHB4O1xuICAtLXBhZGRpbmctZW5kOiAwcHg7XG4gIC0tcGFkZGluZy1zdGFydDogMHB4O1xuICAtLXBhZGRpbmctdG9wOiAwcHg7XG59XG5cbi5zZWNvbmRhcnktdG9vbGJhciBpb24tZ3JpZCB7XG4gIC0taW9uLWdyaWQtcGFkZGluZzogMHB4O1xufVxuXG5pb24tc2VhcmNoYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICAtLWNvbG9yOiAjMjkyOTI5O1xuICBwYWRkaW5nOiA1cHg7XG4gIGhlaWdodDogNDRweDtcbn1cblxuLnByb2RJbWdXcmFwIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4ucHJvZFN0b2NrIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGhlaWdodDogMjVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzYxNjE2MTtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGxpbmUtaGVpZ2h0OiAyNXB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/shop/shop.page.ts":
/*!***********************************!*\
  !*** ./src/app/shop/shop.page.ts ***!
  \***********************************/
/*! exports provided: ShopPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShopPage", function() { return ShopPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var _services_products_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/products.service */ "./src/app/services/products.service.ts");
/* harmony import */ var _services_authenticate_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/authenticate.service */ "./src/app/services/authenticate.service.ts");
/* harmony import */ var _services_page_details_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/page-details.service */ "./src/app/services/page-details.service.ts");






let ShopPage = class ShopPage {
    constructor(productsService, authenticationService, storage, pageDetail) {
        this.productsService = productsService;
        this.authenticationService = authenticationService;
        this.storage = storage;
        this.pageDetail = pageDetail;
        this.cartList = [];
        this.userDetails = [];
        this.showCartCount = false;
    }
    ngOnInit() {
        this.storage.ready().then((data) => {
            this.storage.get("availableBR").then((data) => {
                this.userBR = data;
            });
        });
        this.pageDetail.showCount();
        this.pageDetail.showBRPoints();
        this.productsService.loadProducts();
        console.log(this.productsService.allProducts);
        this.authenticationService.displayCustomer();
    }
    getProdDet(id) {
        this.productsService.ProductDetails(id);
        console.log(this.productsService.productDetails);
    }
    replaceIMG(imgString) {
        var newstr = imgString.replace("beta.", "");
        return '<img src="' + newstr + '">';
    }
};
ShopPage.ctorParameters = () => [
    { type: _services_products_service__WEBPACK_IMPORTED_MODULE_3__["ProductsService"] },
    { type: _services_authenticate_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"] },
    { type: _services_page_details_service__WEBPACK_IMPORTED_MODULE_5__["PageDetailsService"] }
];
ShopPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-shop',
        template: __webpack_require__(/*! raw-loader!./shop.page.html */ "./node_modules/raw-loader/index.js!./src/app/shop/shop.page.html"),
        styles: [__webpack_require__(/*! ./shop.page.scss */ "./src/app/shop/shop.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_products_service__WEBPACK_IMPORTED_MODULE_3__["ProductsService"], _services_authenticate_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"], _ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"], _services_page_details_service__WEBPACK_IMPORTED_MODULE_5__["PageDetailsService"]])
], ShopPage);



/***/ })

}]);
//# sourceMappingURL=shop-shop-module-es2015.js.map