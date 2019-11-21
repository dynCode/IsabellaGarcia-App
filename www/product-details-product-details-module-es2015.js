(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["product-details-product-details-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/product-details/product-details.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/product-details/product-details.page.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar class=\"main-toolbar\">\n  \n      <!--<ion-button slot=\"start\" expand=\"block\" onclick=\"openMenu()\" class=\"toolbar-btn tb-btn1\">\n        <img class=\"icon-menu\" src=\"/assets/icon/menu.svg\" alt=\"\" />\n      </ion-button>-->\n      <ion-buttons slot=\"start\">\n        <ion-menu-button></ion-menu-button>\n      </ion-buttons>\n      \n      <ion-title><span class=\"title-large\">REDEEM BR</span><span class=\"title-small\">MY BEATY CLUB PRODUCTS</span></ion-title>\n  \n      <ion-button slot=\"end\" class=\"toolbar-btn tb-btn2\" [routerLink]=\"['/', 'cart']\">\n        <div class=\"cartBlock\">\n          <img class=\"icon-cart\" src=\"/assets/icon/cart.svg\" alt=\"\" />\n          <div class=\"cartBadge\" *ngIf=\"pageDetail.cartCount > 0\"><ion-badge>{{ pageDetail.cartCount }}</ion-badge></div>\n        </div>\n      </ion-button>\n  \n    </ion-toolbar>\n    <ion-toolbar class=\"secondary-toolbar\">\n      <ion-grid>\n        <ion-row>\n          <ion-col class=\"search-col\">\n            <ion-searchbar [(ngModel)]=\"searchQuery\" placeholder=\"Search\" (search)=\"searchByKeyword($event)\"></ion-searchbar>\n          </ion-col>\n          <ion-col class=\"br-col\">\n            <p *ngIf=\"pageDetail.finalBR > 0.00\"><span class=\"br-currency\">BR</span><span class=\"br-amount\">{{ pageDetail.finalBR | number : '1.2-2' }}</span></p>\n            <p *ngIf=\"0.00 >= pageDetail.finalBR\"><span class=\"br-currency\">BR</span><span class=\"br-amount\">0.00</span></p>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-toolbar>\n  </ion-header>\n  \n  <ion-content>\n    <div class=\"ion-padding\">\n      <div class=\"sProdWrap\">\n        <div class=\"sProdImgWrap\">\n          <div class=\"sProdImg\" [innerHtml]=\"replaceIMG(productsService.productDetails.images[0].src)\"></div>\n          <!--<div class=\"sProdWL\" (click)=\"addToWish(productsService.productDetails)\">-->\n          <div class=\"sProdWL\">\n            <ion-icon [name]=\"inWishlist === true ? 'heart' : 'heart-empty'\" (click)=\"toggleWishlist(productsService.productDetails)\"></ion-icon>\n          </div>\n        </div>\n        <div class=\"sProdTitle\">{{productsService.productDetails.name}}</div>\n        <div class=\"sProdDesc\">\n          <div class=\"sProdDesc-Title\">\n            <span>PRODUCT DETAILS</span>\n          </div>\n          <div [innerHtml]=\"productsService.productDetails.description\"></div>\n        </div>\n        <div class=\"brPrice\" *ngIf=\"pageDetail.finalBR > productsService.productDetails.price\">\n          <div class=\"prodPrice\" *ngIf=\"productsService.productDetails.price != productsService.productDetails.regular_price\">\n            <div class=\"sProdPrice\"><span class=\"oldPrice\">{{productsService.productDetails.regular_price | currency : \"BR\"}}</span><span class=\"salePrice\">{{productsService.productDetails.price | currency : \"BR\"}}</span></div>\n          </div>\n          <div class=\"prodPrice\" *ngIf=\"productsService.productDetails.price === productsService.productDetails.regular_price\">\n            <div class=\"sProdPrice\"><span class=\"pPrice\">{{productsService.productDetails.price | currency : \"BR\"}}</span></div>\n          </div>\n        </div>\n        <div class=\"randPrice\" *ngIf=\"productsService.productDetails.price > pageDetail.finalBR\">\n            <div class=\"prodPrice\" *ngIf=\"productsService.productDetails.price != productsService.productDetails.regular_price\">\n              <div class=\"sProdPrice\"><span class=\"oldPrice\">{{productsService.productDetails.regular_price | currency : \"R\"}}</span><span class=\"salePrice\">{{productsService.productDetails.price | currency : \"R\"}}</span></div>\n            </div>\n            <div class=\"prodPrice\" *ngIf=\"productsService.productDetails.price === productsService.productDetails.regular_price\">\n                <div class=\"sProdPrice\"><span class=\"pPrice\">{{productsService.productDetails.price | currency : \"R\"}}</span></div>\n            </div>\n          </div>\n        <ion-grid>\n          <ion-row *ngIf=\"productsService.productDetails.in_stock\">\n            <ion-col size=\"6\" class=\"inputQty\">\n              <ion-grid class=\"qtyGroup\">\n                <ion-row>\n                <ion-col size=\"3\">\n                  <ion-button size=\"small\" (click)=\"minQty()\">-</ion-button>\n                </ion-col>\n                <ion-col size=\"6\">\n                  <ion-input id=\"qtyVal\" type=\"number\" value=\"{{item_qty}}\" min=\"1\" readonly></ion-input>\n                </ion-col>\n                <ion-col size=\"3\">\n                  <ion-button size=\"small\" (click)=\"plusQty()\">+</ion-button>\n                </ion-col>\n                </ion-row>\n              </ion-grid>\n            </ion-col>\n            <ion-col size=\"6\" class=\"addCart\">\n              <ion-button expand=\"full\" (click)=\"addToCart(productsService.productDetails, item_qty)\">ADD TO CART</ion-button>\n            </ion-col>\n          </ion-row>\n          <ion-row *ngIf=\"!productsService.productDetails.in_stock\">\n            <ion-col size=\"12\" class=\"soldOut\">\n              Currently sold out\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </div>\n    </div>\n  </ion-content>\n  "

/***/ }),

/***/ "./src/app/product-details/product-details.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/product-details/product-details.module.ts ***!
  \***********************************************************/
/*! exports provided: ProductDetailsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductDetailsPageModule", function() { return ProductDetailsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _product_details_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./product-details.page */ "./src/app/product-details/product-details.page.ts");







const routes = [
    {
        path: '',
        component: _product_details_page__WEBPACK_IMPORTED_MODULE_6__["ProductDetailsPage"]
    }
];
let ProductDetailsPageModule = class ProductDetailsPageModule {
};
ProductDetailsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_product_details_page__WEBPACK_IMPORTED_MODULE_6__["ProductDetailsPage"]]
    })
], ProductDetailsPageModule);



/***/ }),

/***/ "./src/app/product-details/product-details.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/product-details/product-details.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-title {\n  text-align: center;\n}\n\nion-toolbar.main-toolbar {\n  --color: #ffffff;\n  --background: #000000;\n  --padding-bottom: 0px;\n  --padding-end: 0px;\n  --padding-start: 0px;\n  --padding-top: 0px;\n  --min-height: 55px;\n}\n\n.toolbar-btn {\n  --background: #292c2f;\n  --border-radius: 0px;\n  --color: #fff;\n  --padding-bottom: 0px;\n  --padding-end: 0px;\n  --padding-start: 0px;\n  --padding-top: 0px;\n  height: 55px;\n  display: block;\n  width: 20%;\n  z-index: 1;\n  margin: 0px;\n}\n\n.buttons-first-slot {\n  width: 20%;\n  margin: 0px;\n}\n\nion-menu-button {\n  --background: #292c2f;\n  --border-radius: 0px;\n  --color: #fff;\n  --padding-bottom: 0px;\n  --padding-end: 0px;\n  --padding-start: 0px;\n  --padding-top: 0px;\n  height: 55px;\n  display: block;\n  width: 100%;\n  z-index: 1;\n  margin: 0px;\n}\n\nion-toolbar.secondary-toolbar {\n  --padding-bottom: 0px;\n  --padding-end: 0px;\n  --padding-start: 0px;\n  --padding-top: 0px;\n}\n\n.secondary-toolbar ion-grid {\n  --ion-grid-padding: 0px;\n}\n\nion-searchbar {\n  --background: #ffffff;\n  --color: #292929;\n  padding: 5px;\n  height: 44px;\n}\n\n.sProdImg {\n  border: 1px solid #939393;\n}\n\n.sProdTitle {\n  color: #707070;\n  font-size: 22px;\n  margin-top: 15px;\n  line-height: 26px;\n}\n\n.sProdDesc-Title {\n  color: #040707;\n  font-size: 13px;\n  font-weight: 800;\n  margin: 8px 0px;\n  padding: 8px 0px;\n  border-top: 1px solid #707070;\n  border-bottom: 1px solid #707070;\n}\n\n.sProdDesc {\n  font-size: 14px;\n  color: #707070;\n}\n\n.randPrice .sProdPrice {\n  color: #040707;\n  font-size: 20px;\n  font-weight: 800;\n}\n\n.brPrice .sProdPrice {\n  color: #ce3a57;\n  font-size: 20px;\n  font-weight: 800;\n}\n\n.addCart ion-button {\n  --background: #040707;\n  --background-activated: #707070;\n  --background-focused: #707070;\n  --background-hover: #707070;\n  --border-radius: 0px;\n  --color: #ffffff;\n  margin: 0px !important;\n}\n\n.qtyGroup {\n  --ion-grid-padding: 0px;\n  --ion-grid-column-padding: 0px;\n}\n\nion-input#qtyVal {\n  --padding-top: 0px;\n  --padding-end: 8px;\n  --padding-bottom: 0px;\n  --padding-start: 5px;\n  --background: rgba(0, 0, 0, 0.1);\n  text-align: center;\n  line-height: 44.8px;\n  height: 44.8px;\n}\n\n.qtyGroup ion-button {\n  width: 100%;\n  height: 44.8px;\n  margin: 0px;\n  font-size: 20px;\n  font-weight: 700;\n  --background: #292c2f;\n  --background-activated: rgba(0, 0, 0, 0.3);\n  --background-focused: rgba(0, 0, 0, 0.3);\n  --background-hover: rgba(0, 0, 0, 0.3);\n  --border-radius: 0px;\n}\n\n.sProdImgWrap {\n  position: relative;\n}\n\n.sProdWL {\n  position: absolute;\n  bottom: 10px;\n  right: 10px;\n  font-size: 30px;\n  line-height: 43px;\n  width: 50px;\n  height: 50px;\n  padding: 10px;\n  text-align: center;\n  background-color: #fff;\n  border-radius: 100%;\n  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.6);\n}\n\n.soldOut {\n  background-color: rgba(4, 7, 7, 0.61);\n  color: #ffffff;\n  text-align: center;\n  padding: 10px;\n}\n\n.randPrice .sProdPrice .oldPrice {\n  font-size: 16px;\n  color: #040707;\n}\n\n.brPrice .sProdPrice .oldPrice {\n  font-size: 16px;\n  color: #040707;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZHVjdC1kZXRhaWxzL0Q6XFx4YW1wcFxcaHRkb2NzXFxlYi1hcHBcXGVnQXBwL3NyY1xcYXBwXFxwcm9kdWN0LWRldGFpbHNcXHByb2R1Y3QtZGV0YWlscy5wYWdlLnNjc3MiLCJzcmMvYXBwL3Byb2R1Y3QtZGV0YWlscy9wcm9kdWN0LWRldGFpbHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7QUNDSjs7QURFQTtFQUNJLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FDQ0o7O0FEQ0E7RUFDSSxxQkFBQTtFQUNBLG9CQUFBO0VBQ0EsYUFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7QUNFSjs7QURBQTtFQUNJLFVBQUE7RUFDQSxXQUFBO0FDR0o7O0FEREE7RUFDSSxxQkFBQTtFQUNBLG9CQUFBO0VBQ0EsYUFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7QUNJSjs7QURGQTtFQUNJLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0FDS0o7O0FESEE7RUFDSSx1QkFBQTtBQ01KOztBREpBO0VBQ0kscUJBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FDT0o7O0FETEE7RUFDSSx5QkFBQTtBQ1FKOztBRE5BO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FDU0o7O0FEUEE7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsNkJBQUE7RUFDQSxnQ0FBQTtBQ1VKOztBRFJBO0VBQ0ksZUFBQTtFQUNBLGNBQUE7QUNXSjs7QURUQTtFQUNJLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNZSjs7QURWQTtFQUNJLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNhSjs7QURYQTtFQUNJLHFCQUFBO0VBQ0EsK0JBQUE7RUFDQSw2QkFBQTtFQUNBLDJCQUFBO0VBQ0Esb0JBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0FDY0o7O0FEWkE7RUFDSSx1QkFBQTtFQUNBLDhCQUFBO0FDZUo7O0FEYkE7RUFDSSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxvQkFBQTtFQUNBLGdDQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7QUNnQko7O0FEZEE7RUFDSSxXQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLDBDQUFBO0VBQ0Esd0NBQUE7RUFDQSxzQ0FBQTtFQUNBLG9CQUFBO0FDaUJKOztBRGZBO0VBQ0ksa0JBQUE7QUNrQko7O0FEaEJBO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLDBDQUFBO0FDbUJKOztBRGpCQTtFQUNJLHFDQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtBQ29CSjs7QURsQkE7RUFDSSxlQUFBO0VBQ0EsY0FBQTtBQ3FCSjs7QURuQkE7RUFDSSxlQUFBO0VBQ0EsY0FBQTtBQ3NCSiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3QtZGV0YWlscy9wcm9kdWN0LWRldGFpbHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRpdGxlIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbmlvbi10b29sYmFyLm1haW4tdG9vbGJhciB7XG4gICAgLS1jb2xvcjogI2ZmZmZmZjtcbiAgICAtLWJhY2tncm91bmQ6ICMwMDAwMDA7XG4gICAgLS1wYWRkaW5nLWJvdHRvbTogMHB4O1xuICAgIC0tcGFkZGluZy1lbmQ6IDBweDtcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDBweDtcbiAgICAtLXBhZGRpbmctdG9wOiAwcHg7XG4gICAgLS1taW4taGVpZ2h0OiA1NXB4O1xufVxuLnRvb2xiYXItYnRuIHtcbiAgICAtLWJhY2tncm91bmQ6ICMyOTJjMmY7XG4gICAgLS1ib3JkZXItcmFkaXVzOiAwcHg7XG4gICAgLS1jb2xvcjogI2ZmZjtcbiAgICAtLXBhZGRpbmctYm90dG9tOiAwcHg7XG4gICAgLS1wYWRkaW5nLWVuZDogMHB4O1xuICAgIC0tcGFkZGluZy1zdGFydDogMHB4O1xuICAgIC0tcGFkZGluZy10b3A6IDBweDtcbiAgICBoZWlnaHQ6IDU1cHg7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IDIwJTtcbiAgICB6LWluZGV4OiAxO1xuICAgIG1hcmdpbjogMHB4O1xufVxuLmJ1dHRvbnMtZmlyc3Qtc2xvdCB7XG4gICAgd2lkdGg6IDIwJTtcbiAgICBtYXJnaW46IDBweDtcbn1cbmlvbi1tZW51LWJ1dHRvbiB7XG4gICAgLS1iYWNrZ3JvdW5kOiAjMjkyYzJmO1xuICAgIC0tYm9yZGVyLXJhZGl1czogMHB4O1xuICAgIC0tY29sb3I6ICNmZmY7XG4gICAgLS1wYWRkaW5nLWJvdHRvbTogMHB4O1xuICAgIC0tcGFkZGluZy1lbmQ6IDBweDtcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDBweDtcbiAgICAtLXBhZGRpbmctdG9wOiAwcHg7XG4gICAgaGVpZ2h0OiA1NXB4O1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHotaW5kZXg6IDE7XG4gICAgbWFyZ2luOiAwcHg7XG59XG5pb24tdG9vbGJhci5zZWNvbmRhcnktdG9vbGJhciB7XG4gICAgLS1wYWRkaW5nLWJvdHRvbTogMHB4O1xuICAgIC0tcGFkZGluZy1lbmQ6IDBweDtcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDBweDtcbiAgICAtLXBhZGRpbmctdG9wOiAwcHg7XG59XG4uc2Vjb25kYXJ5LXRvb2xiYXIgaW9uLWdyaWQge1xuICAgIC0taW9uLWdyaWQtcGFkZGluZzogMHB4O1xufVxuaW9uLXNlYXJjaGJhciB7XG4gICAgLS1iYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICAgIC0tY29sb3I6ICMyOTI5Mjk7XG4gICAgcGFkZGluZzogNXB4O1xuICAgIGhlaWdodDogNDRweDtcbn1cbi5zUHJvZEltZyB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgIzkzOTM5Mztcbn1cbi5zUHJvZFRpdGxlIHtcbiAgICBjb2xvcjogIzcwNzA3MDtcbiAgICBmb250LXNpemU6IDIycHg7XG4gICAgbWFyZ2luLXRvcDogMTVweDtcbiAgICBsaW5lLWhlaWdodDogMjZweDtcbn1cbi5zUHJvZERlc2MtVGl0bGUge1xuICAgIGNvbG9yOiAjMDQwNzA3O1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBmb250LXdlaWdodDogODAwO1xuICAgIG1hcmdpbjogOHB4IDBweDtcbiAgICBwYWRkaW5nOiA4cHggMHB4O1xuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjNzA3MDcwO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjNzA3MDcwO1xufVxuLnNQcm9kRGVzYyB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGNvbG9yOiAjNzA3MDcwO1xufVxuLnJhbmRQcmljZSAuc1Byb2RQcmljZSB7XG4gICAgY29sb3I6ICMwNDA3MDc7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XG59XG4uYnJQcmljZSAuc1Byb2RQcmljZSB7XG4gICAgY29sb3I6ICNjZTNhNTc7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XG59XG4uYWRkQ2FydCBpb24tYnV0dG9uIHtcbiAgICAtLWJhY2tncm91bmQ6ICMwNDA3MDc7XG4gICAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogIzcwNzA3MDtcbiAgICAtLWJhY2tncm91bmQtZm9jdXNlZDogIzcwNzA3MDtcbiAgICAtLWJhY2tncm91bmQtaG92ZXI6ICM3MDcwNzA7XG4gICAgLS1ib3JkZXItcmFkaXVzOiAwcHg7XG4gICAgLS1jb2xvcjogI2ZmZmZmZjtcbiAgICBtYXJnaW46IDBweCAhaW1wb3J0YW50O1xufVxuLnF0eUdyb3VwIHtcbiAgICAtLWlvbi1ncmlkLXBhZGRpbmc6IDBweDtcbiAgICAtLWlvbi1ncmlkLWNvbHVtbi1wYWRkaW5nOiAwcHg7XG59XG5pb24taW5wdXQjcXR5VmFsIHtcbiAgICAtLXBhZGRpbmctdG9wOiAwcHg7XG4gICAgLS1wYWRkaW5nLWVuZDogOHB4O1xuICAgIC0tcGFkZGluZy1ib3R0b206IDBweDtcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDVweDtcbiAgICAtLWJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbGluZS1oZWlnaHQ6IDQ0LjhweDtcbiAgICBoZWlnaHQ6IDQ0LjhweDtcbn1cbi5xdHlHcm91cCBpb24tYnV0dG9uIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDQ0LjhweDtcbiAgICBtYXJnaW46IDBweDtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAtLWJhY2tncm91bmQ6ICMyOTJjMmY7XG4gICAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogcmdiYSgwLCAwLCAwLCAwLjMpO1xuICAgIC0tYmFja2dyb3VuZC1mb2N1c2VkOiByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gICAgLS1iYWNrZ3JvdW5kLWhvdmVyOiByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gICAgLS1ib3JkZXItcmFkaXVzOiAwcHg7XG59XG4uc1Byb2RJbWdXcmFwIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uc1Byb2RXTCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogMTBweDtcbiAgICByaWdodDogMTBweDtcbiAgICBmb250LXNpemU6IDMwcHg7XG4gICAgbGluZS1oZWlnaHQ6IDQzcHg7XG4gICAgd2lkdGg6IDUwcHg7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgICBib3gtc2hhZG93OiAxcHggMXB4IDVweCByZ2JhKDAsIDAsIDAsIDAuNik7XG59XG4uc29sZE91dCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg0LCA3LCA3LCAwLjYxKTtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMTBweDtcbn1cbi5yYW5kUHJpY2UgLnNQcm9kUHJpY2UgLm9sZFByaWNlIHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgY29sb3I6ICMwNDA3MDc7XG59XG4uYnJQcmljZSAuc1Byb2RQcmljZSAub2xkUHJpY2Uge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBjb2xvcjogIzA0MDcwNztcbn0iLCJpb24tdGl0bGUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbmlvbi10b29sYmFyLm1haW4tdG9vbGJhciB7XG4gIC0tY29sb3I6ICNmZmZmZmY7XG4gIC0tYmFja2dyb3VuZDogIzAwMDAwMDtcbiAgLS1wYWRkaW5nLWJvdHRvbTogMHB4O1xuICAtLXBhZGRpbmctZW5kOiAwcHg7XG4gIC0tcGFkZGluZy1zdGFydDogMHB4O1xuICAtLXBhZGRpbmctdG9wOiAwcHg7XG4gIC0tbWluLWhlaWdodDogNTVweDtcbn1cblxuLnRvb2xiYXItYnRuIHtcbiAgLS1iYWNrZ3JvdW5kOiAjMjkyYzJmO1xuICAtLWJvcmRlci1yYWRpdXM6IDBweDtcbiAgLS1jb2xvcjogI2ZmZjtcbiAgLS1wYWRkaW5nLWJvdHRvbTogMHB4O1xuICAtLXBhZGRpbmctZW5kOiAwcHg7XG4gIC0tcGFkZGluZy1zdGFydDogMHB4O1xuICAtLXBhZGRpbmctdG9wOiAwcHg7XG4gIGhlaWdodDogNTVweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAyMCU7XG4gIHotaW5kZXg6IDE7XG4gIG1hcmdpbjogMHB4O1xufVxuXG4uYnV0dG9ucy1maXJzdC1zbG90IHtcbiAgd2lkdGg6IDIwJTtcbiAgbWFyZ2luOiAwcHg7XG59XG5cbmlvbi1tZW51LWJ1dHRvbiB7XG4gIC0tYmFja2dyb3VuZDogIzI5MmMyZjtcbiAgLS1ib3JkZXItcmFkaXVzOiAwcHg7XG4gIC0tY29sb3I6ICNmZmY7XG4gIC0tcGFkZGluZy1ib3R0b206IDBweDtcbiAgLS1wYWRkaW5nLWVuZDogMHB4O1xuICAtLXBhZGRpbmctc3RhcnQ6IDBweDtcbiAgLS1wYWRkaW5nLXRvcDogMHB4O1xuICBoZWlnaHQ6IDU1cHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTAwJTtcbiAgei1pbmRleDogMTtcbiAgbWFyZ2luOiAwcHg7XG59XG5cbmlvbi10b29sYmFyLnNlY29uZGFyeS10b29sYmFyIHtcbiAgLS1wYWRkaW5nLWJvdHRvbTogMHB4O1xuICAtLXBhZGRpbmctZW5kOiAwcHg7XG4gIC0tcGFkZGluZy1zdGFydDogMHB4O1xuICAtLXBhZGRpbmctdG9wOiAwcHg7XG59XG5cbi5zZWNvbmRhcnktdG9vbGJhciBpb24tZ3JpZCB7XG4gIC0taW9uLWdyaWQtcGFkZGluZzogMHB4O1xufVxuXG5pb24tc2VhcmNoYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICAtLWNvbG9yOiAjMjkyOTI5O1xuICBwYWRkaW5nOiA1cHg7XG4gIGhlaWdodDogNDRweDtcbn1cblxuLnNQcm9kSW1nIHtcbiAgYm9yZGVyOiAxcHggc29saWQgIzkzOTM5Mztcbn1cblxuLnNQcm9kVGl0bGUge1xuICBjb2xvcjogIzcwNzA3MDtcbiAgZm9udC1zaXplOiAyMnB4O1xuICBtYXJnaW4tdG9wOiAxNXB4O1xuICBsaW5lLWhlaWdodDogMjZweDtcbn1cblxuLnNQcm9kRGVzYy1UaXRsZSB7XG4gIGNvbG9yOiAjMDQwNzA3O1xuICBmb250LXNpemU6IDEzcHg7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG4gIG1hcmdpbjogOHB4IDBweDtcbiAgcGFkZGluZzogOHB4IDBweDtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICM3MDcwNzA7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjNzA3MDcwO1xufVxuXG4uc1Byb2REZXNjIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogIzcwNzA3MDtcbn1cblxuLnJhbmRQcmljZSAuc1Byb2RQcmljZSB7XG4gIGNvbG9yOiAjMDQwNzA3O1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG59XG5cbi5iclByaWNlIC5zUHJvZFByaWNlIHtcbiAgY29sb3I6ICNjZTNhNTc7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbn1cblxuLmFkZENhcnQgaW9uLWJ1dHRvbiB7XG4gIC0tYmFja2dyb3VuZDogIzA0MDcwNztcbiAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogIzcwNzA3MDtcbiAgLS1iYWNrZ3JvdW5kLWZvY3VzZWQ6ICM3MDcwNzA7XG4gIC0tYmFja2dyb3VuZC1ob3ZlcjogIzcwNzA3MDtcbiAgLS1ib3JkZXItcmFkaXVzOiAwcHg7XG4gIC0tY29sb3I6ICNmZmZmZmY7XG4gIG1hcmdpbjogMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5xdHlHcm91cCB7XG4gIC0taW9uLWdyaWQtcGFkZGluZzogMHB4O1xuICAtLWlvbi1ncmlkLWNvbHVtbi1wYWRkaW5nOiAwcHg7XG59XG5cbmlvbi1pbnB1dCNxdHlWYWwge1xuICAtLXBhZGRpbmctdG9wOiAwcHg7XG4gIC0tcGFkZGluZy1lbmQ6IDhweDtcbiAgLS1wYWRkaW5nLWJvdHRvbTogMHB4O1xuICAtLXBhZGRpbmctc3RhcnQ6IDVweDtcbiAgLS1iYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbGluZS1oZWlnaHQ6IDQ0LjhweDtcbiAgaGVpZ2h0OiA0NC44cHg7XG59XG5cbi5xdHlHcm91cCBpb24tYnV0dG9uIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNDQuOHB4O1xuICBtYXJnaW46IDBweDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogNzAwO1xuICAtLWJhY2tncm91bmQ6ICMyOTJjMmY7XG4gIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6IHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgLS1iYWNrZ3JvdW5kLWZvY3VzZWQ6IHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgLS1iYWNrZ3JvdW5kLWhvdmVyOiByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gIC0tYm9yZGVyLXJhZGl1czogMHB4O1xufVxuXG4uc1Byb2RJbWdXcmFwIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uc1Byb2RXTCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAxMHB4O1xuICByaWdodDogMTBweDtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBsaW5lLWhlaWdodDogNDNweDtcbiAgd2lkdGg6IDUwcHg7XG4gIGhlaWdodDogNTBweDtcbiAgcGFkZGluZzogMTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICBib3gtc2hhZG93OiAxcHggMXB4IDVweCByZ2JhKDAsIDAsIDAsIDAuNik7XG59XG5cbi5zb2xkT3V0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg0LCA3LCA3LCAwLjYxKTtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMTBweDtcbn1cblxuLnJhbmRQcmljZSAuc1Byb2RQcmljZSAub2xkUHJpY2Uge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGNvbG9yOiAjMDQwNzA3O1xufVxuXG4uYnJQcmljZSAuc1Byb2RQcmljZSAub2xkUHJpY2Uge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGNvbG9yOiAjMDQwNzA3O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/product-details/product-details.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/product-details/product-details.page.ts ***!
  \*********************************************************/
/*! exports provided: ProductDetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductDetailsPage", function() { return ProductDetailsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _services_products_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/products.service */ "./src/app/services/products.service.ts");
/* harmony import */ var _services_page_details_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/page-details.service */ "./src/app/services/page-details.service.ts");








let ProductDetailsPage = class ProductDetailsPage {
    constructor(productsService, route, storage, toastController, pageDetail, http) {
        this.productsService = productsService;
        this.route = route;
        this.storage = storage;
        this.toastController = toastController;
        this.pageDetail = pageDetail;
        this.http = http;
        this.inWishlist = false;
        this.wishlistItems = [];
        this.cartList = [];
        this.userDetails = [];
        this.showCartCount = false;
        this.storage.ready().then((data) => {
            this.storage.get("user").then((data) => {
                console.log("user data", data);
                this.userData = data;
            });
        });
    }
    ngOnInit() {
        this.pageDetail.showCount();
        this.pageDetail.showBRPoints();
        let itemId = parseInt(this.route.snapshot.paramMap.get('id'));
        console.log("Page ID:", itemId);
        this.storage.ready().then((data) => {
            this.storage.get("wishlist").then((data) => {
                if (data == null || data.length == 0) {
                    console.log("Wishlist Empty!");
                    this.inWishlist = false;
                }
                else {
                    this.itemIn = data.findIndex(x => x.id === itemId);
                    console.log(this.itemIn);
                    for (let i = 0; i < data.length; i++) {
                        if (itemId === data[i].id) {
                            this.inWishlist = true;
                            this.wishlistIndex = i;
                            console.log("Index:", this.wishlistIndex);
                        }
                    }
                }
            });
        });
        this.item_qty = 1;
    }
    replaceIMG(imgString) {
        var newstr = imgString.replace("beta.", "");
        return '<img src="' + newstr + '">';
    }
    minQty() {
        if (this.item_qty > 1) {
            this.item_qty--;
        }
    }
    plusQty() {
        this.item_qty++;
        console.log(this.item_qty);
    }
    addToCart(product, pQty) {
        this.pageDetail.setCartCount(pQty);
        this.pageDetail.setBRPoints(parseFloat(product.price) * pQty);
        this.storage.get("cart").then((data) => {
            if (data == null || data.length == 0) {
                let cartKey = this.adToUcart(product.id, pQty);
                data = [];
                data.push({
                    "product": product,
                    "qty": pQty,
                    "amount": parseFloat(product.price) * pQty,
                    "cartKey": cartKey
                });
                /*this.storage.get("availableBR").then( (dataBR)=> {
                  this.userBR = dataBR - (parseFloat(product.price) * pQty);
                })*/
            }
            else {
                let added = 0;
                for (let i = 0; i < data.length; i++) {
                    if (product.id == data[i].product.id) {
                        console.log("Product is already in the cart");
                        let qty = data[i].qty;
                        data[i].qty = qty + pQty;
                        data[i].amount = parseFloat(data[i].amount) + (parseFloat(data[i].product.price) * pQty);
                        added = 1;
                    }
                }
                if (added == 0) {
                    let cartKey = this.adToUcart(product.id, pQty);
                    data.push({
                        "product": product,
                        "qty": pQty,
                        "amount": parseFloat(product.price) * pQty,
                        "cartKey": cartKey
                    });
                }
            }
            this.storage.set("cart", data).then(() => {
                console.log("Cart Updated");
                console.log(data);
                this.uSuccess();
            });
        });
    }
    uSuccess() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: 'Cart Updated',
                color: "dark",
                duration: 3000
            });
            toast.present();
        });
    }
    toggleWishlist(product) {
        if (this.inWishlist === false) {
            this.addWishItem(product);
        }
        else if (this.inWishlist === true) {
            this.removeWishItem(product, this.wishlistIndex);
        }
    }
    addWishItem(product) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.storage.get("wishlist").then((data) => {
                if (data == null || data.length == 0) {
                    data = [];
                    data.push({
                        "product": product,
                        "id": product.id
                    });
                }
                else {
                    data.push({
                        "product": product,
                        "id": product.id
                    });
                }
                this.storage.set("wishlist", data).then(() => {
                    this.wishlistIndex = (data.length - 1);
                    console.log("Wishlist Updated");
                    console.log(data);
                    this.ySuccess();
                });
            });
            this.inWishlist = true;
        });
    }
    removeWishItem(item, i) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.storage.get("wishlist").then((data) => {
                data.splice(i, 1);
                this.storage.set("wishlist", data).then(() => {
                    console.log("Wishlist Updated (Remove)");
                    console.log(data);
                    this.inWishlist = false;
                    this.ySuccess();
                });
            });
        });
    }
    ySuccess() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: 'Wishlist Updated',
                color: "dark",
                duration: 3000
            });
            toast.present();
        });
    }
    adToUcart(pid, cqty) {
        console.log('I GOT funking here');
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpHeaders"]({ 'Authorization': 'Bearer ' + this.userData[0].authToken });
        let httpOptions = {
            headers: headers
        };
        let postData = {
            "product_id": pid,
            "quantity": cqty
        };
        this.http.post("https://beta.isabellagarcia.co.za/wp-json/cocart/v1/add-item", postData, httpOptions)
            .subscribe(ucdata => {
            console.log(ucdata);
            this.storage.get("cart").then((data) => {
                for (let i = 0; i < data.length; i++) {
                    if (pid == data[i].product.id) {
                        console.log("cart key added");
                        data[i].cartKey = ucdata['key'];
                    }
                }
                this.storage.set("cart", data).then(() => {
                    console.log("Cart Updated");
                    console.log(data);
                    this.uSuccess();
                });
            });
        }, error => {
            console.log(error);
        });
    }
    searchByKeyword() {
        console.log("SEARCH", this.searchQuery);
        this.productsService.searchResults(this.searchQuery, 1);
    }
};
ProductDetailsPage.ctorParameters = () => [
    { type: _services_products_service__WEBPACK_IMPORTED_MODULE_6__["ProductsService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"] },
    { type: _services_page_details_service__WEBPACK_IMPORTED_MODULE_7__["PageDetailsService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] }
];
ProductDetailsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-product-details',
        template: __webpack_require__(/*! raw-loader!./product-details.page.html */ "./node_modules/raw-loader/index.js!./src/app/product-details/product-details.page.html"),
        styles: [__webpack_require__(/*! ./product-details.page.scss */ "./src/app/product-details/product-details.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_products_service__WEBPACK_IMPORTED_MODULE_6__["ProductsService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"], _services_page_details_service__WEBPACK_IMPORTED_MODULE_7__["PageDetailsService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]])
], ProductDetailsPage);

class uCart {
}


/***/ })

}]);
//# sourceMappingURL=product-details-product-details-module-es2015.js.map