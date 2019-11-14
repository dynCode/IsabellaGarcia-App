(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["specials-specials-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/specials/specials.page.html":
/*!***********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/specials/specials.page.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar class=\"main-toolbar\">\n    \n      <!--<ion-button slot=\"start\" expand=\"block\" onclick=\"openMenu()\" class=\"toolbar-btn tb-btn1\">\n      <img class=\"icon-menu\" src=\"/assets/icon/menu.svg\" alt=\"\" />\n      </ion-button>-->\n      <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n      </ion-buttons>\n      \n      <ion-title><span class=\"title-large\">SPECIALS</span></ion-title>\n    \n      <ion-button slot=\"end\" class=\"toolbar-btn tb-btn2\" [routerLink]=\"['/', 'cart']\">\n        <div class=\"cartBlock\">\n          <img class=\"icon-cart\" src=\"/assets/icon/cart.svg\" alt=\"\" />\n          <div class=\"cartBadge\" *ngIf=\"pageDetail.cartCount > 0\"><ion-badge>{{ pageDetail.cartCount }}</ion-badge></div>\n        </div>\n      </ion-button>\n    \n    </ion-toolbar>\n    <ion-toolbar class=\"secondary-toolbar\">\n      <ion-grid>\n      <ion-row>\n        <ion-col class=\"search-col\">\n        <ion-searchbar [(ngModel)]=\"searchQuery\" placeholder=\"Search\" (search)=\"searchByKeyword($event)\"></ion-searchbar>\n        </ion-col>\n        <ion-col class=\"br-col\">\n          <p *ngIf=\"pageDetail.finalBR > 0.00\"><span class=\"br-currency\">BR</span><span class=\"br-amount\">{{ pageDetail.finalBR | number : '1.2-2' }}</span></p>\n          <p *ngIf=\"0.00 >= pageDetail.finalBR\"><span class=\"br-currency\">BR</span><span class=\"br-amount\">0.00</span></p>\n        </ion-col>\n      </ion-row>\n      </ion-grid>\n    </ion-toolbar>\n    </ion-header>\n  \n  <ion-content>\n    <ion-grid>\n      <ion-row>\n        <ion-col size=\"6\" *ngFor=\"let product of productsService.specialsProducts\">\n            <div class=\"prodWrap\" (click)=\"getProdDet(product.id)\">\n              <div class=\"prodImgWrap\">\n                <div class=\"prodStock\" *ngIf=\"!product.in_stock\">Sold out</div>\n                <div class=\"prodImg\" [innerHtml]=\"replaceIMG(product.images[0].src)\"></div>\n              </div>\n              <div class=\"prodTitle\">{{product.name}}</div>\n              <div class=\"prodPrice\" *ngIf=\"product.price != product.regular_price\">\n                  <span class=\"oldPrice\">{{product.regular_price | currency : \"BR\"}}</span><span class=\"salePrice\">{{product.price | currency : \"BR\"}}</span>\n              </div>\n              <div class=\"prodPrice\" *ngIf=\"product.price === product.regular_price\">\n                  <span class=\"pPrice\">{{product.price | currency : \"BR\"}}</span>\n              </div>\n              <!--<div [innerHtml]=\"product.description\"></div>-->\n            </div>\n          </ion-col>\n      </ion-row>\n    </ion-grid>\n    <!--<div>{{ displayPagination(productsService.catCount.count) }}</div>-->\n    <ion-infinite-scroll threshold=\"100px\" (ionInfinite)=\"loadData($event)\">\n      <ion-infinite-scroll-content\n        loadingSpinner=\"bubbles\"\n        loadingText=\"Loading more data...\">\n      </ion-infinite-scroll-content>\n    </ion-infinite-scroll>\n  </ion-content>\n  "

/***/ }),

/***/ "./src/app/specials/specials.module.ts":
/*!*********************************************!*\
  !*** ./src/app/specials/specials.module.ts ***!
  \*********************************************/
/*! exports provided: SpecialsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpecialsPageModule", function() { return SpecialsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _specials_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./specials.page */ "./src/app/specials/specials.page.ts");







const routes = [
    {
        path: '',
        component: _specials_page__WEBPACK_IMPORTED_MODULE_6__["SpecialsPage"]
    }
];
let SpecialsPageModule = class SpecialsPageModule {
};
SpecialsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_specials_page__WEBPACK_IMPORTED_MODULE_6__["SpecialsPage"]]
    })
], SpecialsPageModule);



/***/ }),

/***/ "./src/app/specials/specials.page.scss":
/*!*********************************************!*\
  !*** ./src/app/specials/specials.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-title {\n  text-align: center;\n}\n\n.title-large {\n  padding-bottom: 0px;\n  margin-bottom: 0px;\n}\n\n.title-large::before {\n  display: none !important;\n}\n\nion-toolbar.main-toolbar {\n  --color: #ffffff;\n  --background: #000000;\n  --padding-bottom: 0px;\n  --padding-end: 0px;\n  --padding-start: 0px;\n  --padding-top: 0px;\n  --min-height: 55px;\n}\n\n.toolbar-btn {\n  --background: #292c2f;\n  --border-radius: 0px;\n  --color: #fff;\n  --padding-bottom: 0px;\n  --padding-end: 0px;\n  --padding-start: 0px;\n  --padding-top: 0px;\n  height: 55px;\n  display: block;\n  width: 20%;\n  z-index: 1;\n  margin: 0px;\n}\n\n.buttons-first-slot {\n  width: 20%;\n  margin: 0px;\n}\n\nion-menu-button {\n  --background: #292c2f;\n  --border-radius: 0px;\n  --color: #fff;\n  --padding-bottom: 0px;\n  --padding-end: 0px;\n  --padding-start: 0px;\n  --padding-top: 0px;\n  height: 55px;\n  display: block;\n  width: 100%;\n  z-index: 1;\n  margin: 0px;\n}\n\nion-toolbar.secondary-toolbar {\n  --padding-bottom: 0px;\n  --padding-end: 0px;\n  --padding-start: 0px;\n  --padding-top: 0px;\n}\n\n.secondary-toolbar ion-grid {\n  --ion-grid-padding: 0px;\n}\n\nion-searchbar {\n  --background: #ffffff;\n  --color: #292929;\n  padding: 5px;\n  height: 44px;\n}\n\n/*.secondary-toolbar ion-col {\n    padding: 0px;\n}*/\n\n.prodImgWrap {\n  position: relative;\n}\n\n.prodStock {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  text-align: center;\n  height: 25px;\n  background-color: #616161;\n  color: #ffffff;\n  line-height: 25px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3BlY2lhbHMvRDpcXHhhbXBwXFxodGRvY3NcXGViLWFwcFxcZWdBcHAvc3JjXFxhcHBcXHNwZWNpYWxzXFxzcGVjaWFscy5wYWdlLnNjc3MiLCJzcmMvYXBwL3NwZWNpYWxzL3NwZWNpYWxzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0FDQ0o7O0FEQ0E7RUFDSSxtQkFBQTtFQUNBLGtCQUFBO0FDRUo7O0FEQUE7RUFDSSx3QkFBQTtBQ0dKOztBRERBO0VBQ0ksZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUNJSjs7QURGQTtFQUNJLHFCQUFBO0VBQ0Esb0JBQUE7RUFDQSxhQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtBQ0tKOztBREhBO0VBQ0ksVUFBQTtFQUNBLFdBQUE7QUNNSjs7QURKQTtFQUNJLHFCQUFBO0VBQ0Esb0JBQUE7RUFDQSxhQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtBQ09KOztBRExBO0VBQ0kscUJBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7QUNRSjs7QUROQTtFQUNJLHVCQUFBO0FDU0o7O0FEUEE7RUFDSSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUNVSjs7QURSQTs7RUFBQTs7QUFJQTtFQUNJLGtCQUFBO0FDVUo7O0FEUkE7RUFDSSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FDV0oiLCJmaWxlIjoic3JjL2FwcC9zcGVjaWFscy9zcGVjaWFscy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tdGl0bGUge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi50aXRsZS1sYXJnZSB7XG4gICAgcGFkZGluZy1ib3R0b206IDBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XG59XG4udGl0bGUtbGFyZ2U6OmJlZm9yZSB7XG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xufVxuaW9uLXRvb2xiYXIubWFpbi10b29sYmFyIHtcbiAgICAtLWNvbG9yOiAjZmZmZmZmO1xuICAgIC0tYmFja2dyb3VuZDogIzAwMDAwMDtcbiAgICAtLXBhZGRpbmctYm90dG9tOiAwcHg7XG4gICAgLS1wYWRkaW5nLWVuZDogMHB4O1xuICAgIC0tcGFkZGluZy1zdGFydDogMHB4O1xuICAgIC0tcGFkZGluZy10b3A6IDBweDtcbiAgICAtLW1pbi1oZWlnaHQ6IDU1cHg7XG59XG4udG9vbGJhci1idG4ge1xuICAgIC0tYmFja2dyb3VuZDogIzI5MmMyZjtcbiAgICAtLWJvcmRlci1yYWRpdXM6IDBweDtcbiAgICAtLWNvbG9yOiAjZmZmO1xuICAgIC0tcGFkZGluZy1ib3R0b206IDBweDtcbiAgICAtLXBhZGRpbmctZW5kOiAwcHg7XG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAwcHg7XG4gICAgLS1wYWRkaW5nLXRvcDogMHB4O1xuICAgIGhlaWdodDogNTVweDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDogMjAlO1xuICAgIHotaW5kZXg6IDE7XG4gICAgbWFyZ2luOiAwcHg7XG59XG4uYnV0dG9ucy1maXJzdC1zbG90IHtcbiAgICB3aWR0aDogMjAlO1xuICAgIG1hcmdpbjogMHB4O1xufVxuaW9uLW1lbnUtYnV0dG9uIHtcbiAgICAtLWJhY2tncm91bmQ6ICMyOTJjMmY7XG4gICAgLS1ib3JkZXItcmFkaXVzOiAwcHg7XG4gICAgLS1jb2xvcjogI2ZmZjtcbiAgICAtLXBhZGRpbmctYm90dG9tOiAwcHg7XG4gICAgLS1wYWRkaW5nLWVuZDogMHB4O1xuICAgIC0tcGFkZGluZy1zdGFydDogMHB4O1xuICAgIC0tcGFkZGluZy10b3A6IDBweDtcbiAgICBoZWlnaHQ6IDU1cHg7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgei1pbmRleDogMTtcbiAgICBtYXJnaW46IDBweDtcbn1cbmlvbi10b29sYmFyLnNlY29uZGFyeS10b29sYmFyIHtcbiAgICAtLXBhZGRpbmctYm90dG9tOiAwcHg7XG4gICAgLS1wYWRkaW5nLWVuZDogMHB4O1xuICAgIC0tcGFkZGluZy1zdGFydDogMHB4O1xuICAgIC0tcGFkZGluZy10b3A6IDBweDtcbn1cbi5zZWNvbmRhcnktdG9vbGJhciBpb24tZ3JpZCB7XG4gICAgLS1pb24tZ3JpZC1wYWRkaW5nOiAwcHg7XG59XG5pb24tc2VhcmNoYmFyIHtcbiAgICAtLWJhY2tncm91bmQ6ICNmZmZmZmY7XG4gICAgLS1jb2xvcjogIzI5MjkyOTtcbiAgICBwYWRkaW5nOiA1cHg7XG4gICAgaGVpZ2h0OiA0NHB4O1xufVxuLyouc2Vjb25kYXJ5LXRvb2xiYXIgaW9uLWNvbCB7XG4gICAgcGFkZGluZzogMHB4O1xufSovXG5cbi5wcm9kSW1nV3JhcCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLnByb2RTdG9jayB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBoZWlnaHQ6IDI1cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzYxNjE2MTtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICBsaW5lLWhlaWdodDogMjVweDtcbn0iLCJpb24tdGl0bGUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi50aXRsZS1sYXJnZSB7XG4gIHBhZGRpbmctYm90dG9tOiAwcHg7XG4gIG1hcmdpbi1ib3R0b206IDBweDtcbn1cblxuLnRpdGxlLWxhcmdlOjpiZWZvcmUge1xuICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG59XG5cbmlvbi10b29sYmFyLm1haW4tdG9vbGJhciB7XG4gIC0tY29sb3I6ICNmZmZmZmY7XG4gIC0tYmFja2dyb3VuZDogIzAwMDAwMDtcbiAgLS1wYWRkaW5nLWJvdHRvbTogMHB4O1xuICAtLXBhZGRpbmctZW5kOiAwcHg7XG4gIC0tcGFkZGluZy1zdGFydDogMHB4O1xuICAtLXBhZGRpbmctdG9wOiAwcHg7XG4gIC0tbWluLWhlaWdodDogNTVweDtcbn1cblxuLnRvb2xiYXItYnRuIHtcbiAgLS1iYWNrZ3JvdW5kOiAjMjkyYzJmO1xuICAtLWJvcmRlci1yYWRpdXM6IDBweDtcbiAgLS1jb2xvcjogI2ZmZjtcbiAgLS1wYWRkaW5nLWJvdHRvbTogMHB4O1xuICAtLXBhZGRpbmctZW5kOiAwcHg7XG4gIC0tcGFkZGluZy1zdGFydDogMHB4O1xuICAtLXBhZGRpbmctdG9wOiAwcHg7XG4gIGhlaWdodDogNTVweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAyMCU7XG4gIHotaW5kZXg6IDE7XG4gIG1hcmdpbjogMHB4O1xufVxuXG4uYnV0dG9ucy1maXJzdC1zbG90IHtcbiAgd2lkdGg6IDIwJTtcbiAgbWFyZ2luOiAwcHg7XG59XG5cbmlvbi1tZW51LWJ1dHRvbiB7XG4gIC0tYmFja2dyb3VuZDogIzI5MmMyZjtcbiAgLS1ib3JkZXItcmFkaXVzOiAwcHg7XG4gIC0tY29sb3I6ICNmZmY7XG4gIC0tcGFkZGluZy1ib3R0b206IDBweDtcbiAgLS1wYWRkaW5nLWVuZDogMHB4O1xuICAtLXBhZGRpbmctc3RhcnQ6IDBweDtcbiAgLS1wYWRkaW5nLXRvcDogMHB4O1xuICBoZWlnaHQ6IDU1cHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTAwJTtcbiAgei1pbmRleDogMTtcbiAgbWFyZ2luOiAwcHg7XG59XG5cbmlvbi10b29sYmFyLnNlY29uZGFyeS10b29sYmFyIHtcbiAgLS1wYWRkaW5nLWJvdHRvbTogMHB4O1xuICAtLXBhZGRpbmctZW5kOiAwcHg7XG4gIC0tcGFkZGluZy1zdGFydDogMHB4O1xuICAtLXBhZGRpbmctdG9wOiAwcHg7XG59XG5cbi5zZWNvbmRhcnktdG9vbGJhciBpb24tZ3JpZCB7XG4gIC0taW9uLWdyaWQtcGFkZGluZzogMHB4O1xufVxuXG5pb24tc2VhcmNoYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICAtLWNvbG9yOiAjMjkyOTI5O1xuICBwYWRkaW5nOiA1cHg7XG4gIGhlaWdodDogNDRweDtcbn1cblxuLyouc2Vjb25kYXJ5LXRvb2xiYXIgaW9uLWNvbCB7XG4gICAgcGFkZGluZzogMHB4O1xufSovXG4ucHJvZEltZ1dyYXAge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5wcm9kU3RvY2sge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgaGVpZ2h0OiAyNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjE2MTYxO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgbGluZS1oZWlnaHQ6IDI1cHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/specials/specials.page.ts":
/*!*******************************************!*\
  !*** ./src/app/specials/specials.page.ts ***!
  \*******************************************/
/*! exports provided: SpecialsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpecialsPage", function() { return SpecialsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var _services_products_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/products.service */ "./src/app/services/products.service.ts");
/* harmony import */ var _services_authenticate_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/authenticate.service */ "./src/app/services/authenticate.service.ts");
/* harmony import */ var _services_page_details_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/page-details.service */ "./src/app/services/page-details.service.ts");








let SpecialsPage = class SpecialsPage {
    constructor(productsService, authenticationService, route, storage, pageDetail) {
        this.productsService = productsService;
        this.authenticationService = authenticationService;
        this.route = route;
        this.storage = storage;
        this.pageDetail = pageDetail;
        this.cartList = [];
        this.userDetails = [];
        this.showCartCount = false;
        this.page = 1;
    }
    ngOnInit() {
        this.pageDetail.showCount();
        this.pageDetail.showBRPoints();
        this.productsService.loadSpecials(this.page);
        this.authenticationService.displayCustomer();
    }
    loadData(event) {
        setTimeout(() => {
            let id = this.route.snapshot.paramMap.get('id');
            this.productsService.loadMoreProductsCat(id, ++this.page);
            setTimeout(() => {
                var arrayLength = this.productsService.moreProducts.length;
                for (var i = 0; i < arrayLength; i++) {
                    this.productsService.products.push(this.productsService.moreProducts[i]);
                    console.log(this.productsService.moreProducts[i]);
                }
                console.log('Done');
                event.target.complete();
            }, 10000);
            if (this.productsService.moreProducts.length == 1000) {
                event.target.disabled = true;
            }
        }, 500);
    }
    toggleInfiniteScroll() {
        this.infiniteScroll.disabled = !this.infiniteScroll.disabled;
    }
    getProdDet(id) {
        this.productsService.ProductDetails(id);
        console.log(this.productsService.productDetails);
    }
    replaceIMG(imgString) {
        var newstr = imgString.replace("beta.", "");
        return '<img src="' + newstr + '">';
    }
    searchByKeyword() {
        console.log("SEARCH", this.searchQuery);
        this.productsService.searchResults(this.searchQuery, 1);
    }
};
SpecialsPage.ctorParameters = () => [
    { type: _services_products_service__WEBPACK_IMPORTED_MODULE_5__["ProductsService"] },
    { type: _services_authenticate_service__WEBPACK_IMPORTED_MODULE_6__["AuthenticationService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"] },
    { type: _services_page_details_service__WEBPACK_IMPORTED_MODULE_7__["PageDetailsService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonInfiniteScroll"], { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonInfiniteScroll"])
], SpecialsPage.prototype, "infiniteScroll", void 0);
SpecialsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-specials',
        template: __webpack_require__(/*! raw-loader!./specials.page.html */ "./node_modules/raw-loader/index.js!./src/app/specials/specials.page.html"),
        styles: [__webpack_require__(/*! ./specials.page.scss */ "./src/app/specials/specials.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_products_service__WEBPACK_IMPORTED_MODULE_5__["ProductsService"], _services_authenticate_service__WEBPACK_IMPORTED_MODULE_6__["AuthenticationService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"], _services_page_details_service__WEBPACK_IMPORTED_MODULE_7__["PageDetailsService"]])
], SpecialsPage);



/***/ })

}]);
//# sourceMappingURL=specials-specials-module-es2015.js.map