(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["wishlist-wishlist-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/wishlist/wishlist.page.html":
/*!***********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/wishlist/wishlist.page.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar class=\"main-toolbar\">\n\n    <!--<ion-button slot=\"start\" expand=\"block\" onclick=\"openMenu()\" class=\"toolbar-btn tb-btn1\">\n      <img class=\"icon-menu\" src=\"/assets/icon/menu.svg\" alt=\"\" />\n    </ion-button>-->\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    \n    <ion-title><span class=\"title-large\">WISHLIST</span></ion-title>\n\n    <ion-button slot=\"end\" class=\"toolbar-btn tb-btn2\" [routerLink]=\"['/', 'cart']\">\n      <div class=\"cartBlock\">\n        <img class=\"icon-cart\" src=\"/assets/icon/cart.svg\" alt=\"\" />\n        <div class=\"cartBadge\" *ngIf=\"pageDetail.cartCount > 0\"><ion-badge>{{ pageDetail.cartCount }}</ion-badge></div>\n      </div>\n    </ion-button>\n\n  </ion-toolbar>\n  <ion-toolbar class=\"secondary-toolbar\">\n    <ion-grid>\n      <ion-row>\n        <ion-col class=\"search-col\">\n          <ion-searchbar [(ngModel)]=\"searchQuery\" placeholder=\"Search\" (search)=\"searchByKeyword($event)\"></ion-searchbar>\n        </ion-col>\n        <ion-col class=\"br-col\">\n          <p *ngIf=\"pageDetail.finalBR > 0.00\"><span class=\"br-currency\">BR</span><span class=\"br-amount\">{{ pageDetail.finalBR | number : '1.2-2' }}</span></p>\n          <p *ngIf=\"0.00 >= pageDetail.finalBR\"><span class=\"br-currency\">BR</span><span class=\"br-amount\">0.00</span></p>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-card [hidden]=\"!showEmptyListMessage\">\n    <ion-grid>\n      <ion-row>\n        <ion-col>Your wishlist is currently empty.</ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-card>\n   \n  <ion-list id=\"cartList\">\n    <ion-item *ngFor=\"let item of listItems; let i = index\">\n      <ion-thumbnail (click)=\"getProdDet(item.product.id)\" class=\"prodThumbImg\" [innerHtml]=\"replaceIMG(item.product.images[0].src)\" slot=\"start\"></ion-thumbnail>\n      <ion-label (click)=\"getProdDet(item.product.id)\">\n        <p class=\"cartTitle\"><strong>{{ item.product.name }}</strong></p>\n      </ion-label>\n      <ion-button fill=\"clear\" color=\"danger\" (click)=\"removeFromList(item, i)\" slot=\"end\">\n        <ion-icon name=\"trash\"></ion-icon>\n      </ion-button>\n    </ion-item>\n  </ion-list>\n\n  \n\n</ion-content>"

/***/ }),

/***/ "./src/app/wishlist/wishlist.module.ts":
/*!*********************************************!*\
  !*** ./src/app/wishlist/wishlist.module.ts ***!
  \*********************************************/
/*! exports provided: WishlistPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WishlistPageModule", function() { return WishlistPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _wishlist_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./wishlist.page */ "./src/app/wishlist/wishlist.page.ts");







const routes = [
    {
        path: '',
        component: _wishlist_page__WEBPACK_IMPORTED_MODULE_6__["WishlistPage"]
    }
];
let WishlistPageModule = class WishlistPageModule {
};
WishlistPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_wishlist_page__WEBPACK_IMPORTED_MODULE_6__["WishlistPage"]]
    })
], WishlistPageModule);



/***/ }),

/***/ "./src/app/wishlist/wishlist.page.scss":
/*!*********************************************!*\
  !*** ./src/app/wishlist/wishlist.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-title {\n  text-align: center;\n}\n\n.title-large {\n  padding-bottom: 0px;\n  margin-bottom: 0px;\n}\n\n.title-large::before {\n  display: none !important;\n}\n\nion-toolbar.main-toolbar {\n  --color: #ffffff;\n  --background: #000000;\n  --padding-bottom: 0px;\n  --padding-end: 0px;\n  --padding-start: 0px;\n  --padding-top: 0px;\n  --min-height: 55px;\n}\n\n.toolbar-btn {\n  --background: #292c2f;\n  --border-radius: 0px;\n  --color: #fff;\n  --padding-bottom: 0px;\n  --padding-end: 0px;\n  --padding-start: 0px;\n  --padding-top: 0px;\n  height: 55px;\n  display: block;\n  width: 20%;\n  z-index: 1;\n  margin: 0px;\n}\n\n.buttons-first-slot {\n  width: 20%;\n  margin: 0px;\n}\n\nion-menu-button {\n  --background: #292c2f;\n  --border-radius: 0px;\n  --color: #fff;\n  --padding-bottom: 0px;\n  --padding-end: 0px;\n  --padding-start: 0px;\n  --padding-top: 0px;\n  height: 55px;\n  display: block;\n  width: 100%;\n  z-index: 1;\n  margin: 0px;\n}\n\nion-toolbar.secondary-toolbar {\n  --padding-bottom: 0px;\n  --padding-end: 0px;\n  --padding-start: 0px;\n  --padding-top: 0px;\n}\n\n.secondary-toolbar ion-grid {\n  --ion-grid-padding: 0px;\n}\n\nion-searchbar {\n  --background: #ffffff;\n  --color: #292929;\n  padding: 5px;\n  height: 44px;\n}\n\n/*.secondary-toolbar ion-col {\n    padding: 0px;\n}*/\n\n.searchbar-input.sc-ion-searchbar-md {\n  padding-left: 5px;\n  padding-right: 5px;\n  -webkit-padding-start: 55px;\n  padding-inline-start: 55px;\n  -webkit-padding-end: 0px;\n  padding-inline-end: 0px;\n}\n\n.search-col {\n  background-color: #cccccc;\n  padding-top: 6px;\n  padding-bottom: 6px;\n  padding-right: 0px;\n  padding-left: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2lzaGxpc3QvRDpcXHhhbXBwXFxodGRvY3NcXGViLWFwcFxcZWdBcHAvc3JjXFxhcHBcXHdpc2hsaXN0XFx3aXNobGlzdC5wYWdlLnNjc3MiLCJzcmMvYXBwL3dpc2hsaXN0L3dpc2hsaXN0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0FDQ0o7O0FEQ0E7RUFDSSxtQkFBQTtFQUNBLGtCQUFBO0FDRUo7O0FEQUE7RUFDSSx3QkFBQTtBQ0dKOztBRERBO0VBQ0ksZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUNJSjs7QURGQTtFQUNJLHFCQUFBO0VBQ0Esb0JBQUE7RUFDQSxhQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtBQ0tKOztBREhBO0VBQ0ksVUFBQTtFQUNBLFdBQUE7QUNNSjs7QURKQTtFQUNJLHFCQUFBO0VBQ0Esb0JBQUE7RUFDQSxhQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtBQ09KOztBRExBO0VBQ0kscUJBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7QUNRSjs7QUROQTtFQUNJLHVCQUFBO0FDU0o7O0FEUEE7RUFDSSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUNVSjs7QURSQTs7RUFBQTs7QUFHQTtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSwyQkFBQTtFQUNBLDBCQUFBO0VBQ0Esd0JBQUE7RUFDQSx1QkFBQTtBQ1dKOztBRFRBO0VBQ0kseUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQ1lKIiwiZmlsZSI6InNyYy9hcHAvd2lzaGxpc3Qvd2lzaGxpc3QucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRpdGxlIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4udGl0bGUtbGFyZ2Uge1xuICAgIHBhZGRpbmctYm90dG9tOiAwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xufVxuLnRpdGxlLWxhcmdlOjpiZWZvcmUge1xuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbn1cbmlvbi10b29sYmFyLm1haW4tdG9vbGJhciB7XG4gICAgLS1jb2xvcjogI2ZmZmZmZjtcbiAgICAtLWJhY2tncm91bmQ6ICMwMDAwMDA7XG4gICAgLS1wYWRkaW5nLWJvdHRvbTogMHB4O1xuICAgIC0tcGFkZGluZy1lbmQ6IDBweDtcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDBweDtcbiAgICAtLXBhZGRpbmctdG9wOiAwcHg7XG4gICAgLS1taW4taGVpZ2h0OiA1NXB4O1xufVxuLnRvb2xiYXItYnRuIHtcbiAgICAtLWJhY2tncm91bmQ6ICMyOTJjMmY7XG4gICAgLS1ib3JkZXItcmFkaXVzOiAwcHg7XG4gICAgLS1jb2xvcjogI2ZmZjtcbiAgICAtLXBhZGRpbmctYm90dG9tOiAwcHg7XG4gICAgLS1wYWRkaW5nLWVuZDogMHB4O1xuICAgIC0tcGFkZGluZy1zdGFydDogMHB4O1xuICAgIC0tcGFkZGluZy10b3A6IDBweDtcbiAgICBoZWlnaHQ6IDU1cHg7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IDIwJTtcbiAgICB6LWluZGV4OiAxO1xuICAgIG1hcmdpbjogMHB4O1xufVxuLmJ1dHRvbnMtZmlyc3Qtc2xvdCB7XG4gICAgd2lkdGg6IDIwJTtcbiAgICBtYXJnaW46IDBweDtcbn1cbmlvbi1tZW51LWJ1dHRvbiB7XG4gICAgLS1iYWNrZ3JvdW5kOiAjMjkyYzJmO1xuICAgIC0tYm9yZGVyLXJhZGl1czogMHB4O1xuICAgIC0tY29sb3I6ICNmZmY7XG4gICAgLS1wYWRkaW5nLWJvdHRvbTogMHB4O1xuICAgIC0tcGFkZGluZy1lbmQ6IDBweDtcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDBweDtcbiAgICAtLXBhZGRpbmctdG9wOiAwcHg7XG4gICAgaGVpZ2h0OiA1NXB4O1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHotaW5kZXg6IDE7XG4gICAgbWFyZ2luOiAwcHg7XG59XG5pb24tdG9vbGJhci5zZWNvbmRhcnktdG9vbGJhciB7XG4gICAgLS1wYWRkaW5nLWJvdHRvbTogMHB4O1xuICAgIC0tcGFkZGluZy1lbmQ6IDBweDtcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDBweDtcbiAgICAtLXBhZGRpbmctdG9wOiAwcHg7XG59XG4uc2Vjb25kYXJ5LXRvb2xiYXIgaW9uLWdyaWQge1xuICAgIC0taW9uLWdyaWQtcGFkZGluZzogMHB4O1xufVxuaW9uLXNlYXJjaGJhciB7XG4gICAgLS1iYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICAgIC0tY29sb3I6ICMyOTI5Mjk7XG4gICAgcGFkZGluZzogNXB4O1xuICAgIGhlaWdodDogNDRweDtcbn1cbi8qLnNlY29uZGFyeS10b29sYmFyIGlvbi1jb2wge1xuICAgIHBhZGRpbmc6IDBweDtcbn0qL1xuLnNlYXJjaGJhci1pbnB1dC5zYy1pb24tc2VhcmNoYmFyLW1kIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDVweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XG4gICAgLXdlYmtpdC1wYWRkaW5nLXN0YXJ0OiA1NXB4O1xuICAgIHBhZGRpbmctaW5saW5lLXN0YXJ0OiA1NXB4O1xuICAgIC13ZWJraXQtcGFkZGluZy1lbmQ6IDBweDtcbiAgICBwYWRkaW5nLWlubGluZS1lbmQ6IDBweDtcbn1cbi5zZWFyY2gtY29sIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjY2NjO1xuICAgIHBhZGRpbmctdG9wOiA2cHg7XG4gICAgcGFkZGluZy1ib3R0b206IDZweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAwcHg7XG4gICAgcGFkZGluZy1sZWZ0OiAwcHg7XG59IiwiaW9uLXRpdGxlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4udGl0bGUtbGFyZ2Uge1xuICBwYWRkaW5nLWJvdHRvbTogMHB4O1xuICBtYXJnaW4tYm90dG9tOiAwcHg7XG59XG5cbi50aXRsZS1sYXJnZTo6YmVmb3JlIHtcbiAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xufVxuXG5pb24tdG9vbGJhci5tYWluLXRvb2xiYXIge1xuICAtLWNvbG9yOiAjZmZmZmZmO1xuICAtLWJhY2tncm91bmQ6ICMwMDAwMDA7XG4gIC0tcGFkZGluZy1ib3R0b206IDBweDtcbiAgLS1wYWRkaW5nLWVuZDogMHB4O1xuICAtLXBhZGRpbmctc3RhcnQ6IDBweDtcbiAgLS1wYWRkaW5nLXRvcDogMHB4O1xuICAtLW1pbi1oZWlnaHQ6IDU1cHg7XG59XG5cbi50b29sYmFyLWJ0biB7XG4gIC0tYmFja2dyb3VuZDogIzI5MmMyZjtcbiAgLS1ib3JkZXItcmFkaXVzOiAwcHg7XG4gIC0tY29sb3I6ICNmZmY7XG4gIC0tcGFkZGluZy1ib3R0b206IDBweDtcbiAgLS1wYWRkaW5nLWVuZDogMHB4O1xuICAtLXBhZGRpbmctc3RhcnQ6IDBweDtcbiAgLS1wYWRkaW5nLXRvcDogMHB4O1xuICBoZWlnaHQ6IDU1cHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMjAlO1xuICB6LWluZGV4OiAxO1xuICBtYXJnaW46IDBweDtcbn1cblxuLmJ1dHRvbnMtZmlyc3Qtc2xvdCB7XG4gIHdpZHRoOiAyMCU7XG4gIG1hcmdpbjogMHB4O1xufVxuXG5pb24tbWVudS1idXR0b24ge1xuICAtLWJhY2tncm91bmQ6ICMyOTJjMmY7XG4gIC0tYm9yZGVyLXJhZGl1czogMHB4O1xuICAtLWNvbG9yOiAjZmZmO1xuICAtLXBhZGRpbmctYm90dG9tOiAwcHg7XG4gIC0tcGFkZGluZy1lbmQ6IDBweDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwcHg7XG4gIC0tcGFkZGluZy10b3A6IDBweDtcbiAgaGVpZ2h0OiA1NXB4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIHotaW5kZXg6IDE7XG4gIG1hcmdpbjogMHB4O1xufVxuXG5pb24tdG9vbGJhci5zZWNvbmRhcnktdG9vbGJhciB7XG4gIC0tcGFkZGluZy1ib3R0b206IDBweDtcbiAgLS1wYWRkaW5nLWVuZDogMHB4O1xuICAtLXBhZGRpbmctc3RhcnQ6IDBweDtcbiAgLS1wYWRkaW5nLXRvcDogMHB4O1xufVxuXG4uc2Vjb25kYXJ5LXRvb2xiYXIgaW9uLWdyaWQge1xuICAtLWlvbi1ncmlkLXBhZGRpbmc6IDBweDtcbn1cblxuaW9uLXNlYXJjaGJhciB7XG4gIC0tYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgLS1jb2xvcjogIzI5MjkyOTtcbiAgcGFkZGluZzogNXB4O1xuICBoZWlnaHQ6IDQ0cHg7XG59XG5cbi8qLnNlY29uZGFyeS10b29sYmFyIGlvbi1jb2wge1xuICAgIHBhZGRpbmc6IDBweDtcbn0qL1xuLnNlYXJjaGJhci1pbnB1dC5zYy1pb24tc2VhcmNoYmFyLW1kIHtcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XG4gIHBhZGRpbmctcmlnaHQ6IDVweDtcbiAgLXdlYmtpdC1wYWRkaW5nLXN0YXJ0OiA1NXB4O1xuICBwYWRkaW5nLWlubGluZS1zdGFydDogNTVweDtcbiAgLXdlYmtpdC1wYWRkaW5nLWVuZDogMHB4O1xuICBwYWRkaW5nLWlubGluZS1lbmQ6IDBweDtcbn1cblxuLnNlYXJjaC1jb2wge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjY2NjO1xuICBwYWRkaW5nLXRvcDogNnB4O1xuICBwYWRkaW5nLWJvdHRvbTogNnB4O1xuICBwYWRkaW5nLXJpZ2h0OiAwcHg7XG4gIHBhZGRpbmctbGVmdDogMHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/wishlist/wishlist.page.ts":
/*!*******************************************!*\
  !*** ./src/app/wishlist/wishlist.page.ts ***!
  \*******************************************/
/*! exports provided: WishlistPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WishlistPage", function() { return WishlistPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var _services_products_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/products.service */ "./src/app/services/products.service.ts");
/* harmony import */ var _services_authenticate_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/authenticate.service */ "./src/app/services/authenticate.service.ts");
/* harmony import */ var _services_page_details_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/page-details.service */ "./src/app/services/page-details.service.ts");






let WishlistPage = class WishlistPage {
    constructor(productsService, authenticationService, storage, pageDetail) {
        this.productsService = productsService;
        this.authenticationService = authenticationService;
        this.storage = storage;
        this.pageDetail = pageDetail;
        this.listItems = [];
        this.showEmptyListMessage = false;
        this.cartList = [];
        this.userDetails = [];
        this.showCartCount = false;
    }
    ngOnInit() {
        this.total = 0.0;
        this.pageDetail.showCount();
        this.pageDetail.showBRPoints();
        this.storage.ready().then((data) => {
            this.storage.get("wishlist").then((data) => {
                this.listItems = data;
                console.log("Wishlist Items", this.listItems);
                if (this.listItems.length > 0 || this.listItems.length !== null) {
                    this.listItems.forEach((item, index) => {
                        this.total = this.total + (item.product.price * item.qty);
                    });
                }
                else {
                    this.showEmptyListMessage = true;
                }
            });
        });
    }
    replaceIMG(imgString) {
        var newstr = imgString.replace("beta.", "");
        return '<img src="' + newstr + '">';
    }
    removeFromList(item, i) {
        let price = item.product.price;
        let qty = item.qty;
        this.listItems.splice(i, 1);
        this.storage.set("wishlist", this.listItems).then(() => {
            this.total = this.total - (price * qty);
        });
        if (this.listItems.length == 0 || this.listItems.length == null) {
            this.showEmptyListMessage = true;
        }
    }
    getProdDet(id) {
        this.productsService.ProductDetails(id);
        console.log(this.productsService.productDetails);
    }
    searchByKeyword() {
        console.log("SEARCH", this.searchQuery);
        this.productsService.searchResults(this.searchQuery, 1);
    }
};
WishlistPage.ctorParameters = () => [
    { type: _services_products_service__WEBPACK_IMPORTED_MODULE_3__["ProductsService"] },
    { type: _services_authenticate_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"] },
    { type: _services_page_details_service__WEBPACK_IMPORTED_MODULE_5__["PageDetailsService"] }
];
WishlistPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-wishlist',
        template: __webpack_require__(/*! raw-loader!./wishlist.page.html */ "./node_modules/raw-loader/index.js!./src/app/wishlist/wishlist.page.html"),
        styles: [__webpack_require__(/*! ./wishlist.page.scss */ "./src/app/wishlist/wishlist.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_products_service__WEBPACK_IMPORTED_MODULE_3__["ProductsService"], _services_authenticate_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"], _ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"], _services_page_details_service__WEBPACK_IMPORTED_MODULE_5__["PageDetailsService"]])
], WishlistPage);



/***/ })

}]);
//# sourceMappingURL=wishlist-wishlist-module-es2015.js.map