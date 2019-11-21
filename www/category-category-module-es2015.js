(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["category-category-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/category/category.page.html":
/*!***********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/category/category.page.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n\t<ion-toolbar class=\"main-toolbar\">\n  \n\t  <!--<ion-button slot=\"start\" expand=\"block\" onclick=\"openMenu()\" class=\"toolbar-btn tb-btn1\">\n\t\t<img class=\"icon-menu\" src=\"/assets/icon/menu.svg\" alt=\"\" />\n\t  </ion-button>-->\n\t  <ion-buttons slot=\"start\">\n\t\t<ion-menu-button></ion-menu-button>\n\t  </ion-buttons>\n\t  \n\t  <ion-title><span class=\"title-large\">REDEEM BR</span><span class=\"title-small\">MY BEATY CLUB PRODUCTS</span></ion-title>\n  \n\t  <ion-button slot=\"end\" class=\"toolbar-btn tb-btn2\" [routerLink]=\"['/', 'cart']\">\n        <div class=\"cartBlock\">\n          <img class=\"icon-cart\" src=\"/assets/icon/cart.svg\" alt=\"\" />\n          <div class=\"cartBadge\" *ngIf=\"pageDetail.cartCount > 0\"><ion-badge>{{ pageDetail.cartCount }}</ion-badge></div>\n        </div>\n      </ion-button>\n  \n\t</ion-toolbar>\n\t<ion-toolbar class=\"secondary-toolbar\">\n\t  <ion-grid>\n\t\t<ion-row>\n\t\t  <ion-col class=\"search-col\">\n\t\t\t<ion-searchbar [(ngModel)]=\"searchQuery\" placeholder=\"Search\" (search)=\"searchByKeyword($event)\"></ion-searchbar>\n\t\t  </ion-col>\n\t\t  <ion-col class=\"br-col\">\n\t\t\t<p><span class=\"br-currency\">BR</span><span class=\"br-amount\">{{ pageDetail.finalBR | number : '1.2-2' }}</span></p>\n\t\t  </ion-col>\n\t\t</ion-row>\n\t  </ion-grid>\n\t</ion-toolbar>\n  </ion-header>\n\n<ion-content>\n  <ion-grid>\n\t\t<ion-row>\n\t\t\t<ion-col size=\"6\" *ngFor=\"let product of productsService.products\">\n\t\t\t\t<div class=\"prodWrap\" (click)=\"getProdDet(product.id)\">\n\t\t\t\t\t<div class=\"prodImgWrap\">\n\t\t\t\t\t\t<div class=\"prodStock\" *ngIf=\"!product.in_stock\">Sold out</div>\n\t\t\t\t\t\t<div class=\"prodImg\" [innerHtml]=\"replaceIMG(product.images[0].src)\"></div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"prodTitle\">{{product.name}}</div>\n\t\t\t\t\t<div class=\"brPrice\" *ngIf=\"pageDetail.finalBR > product.price\">\n\t\t\t\t\t\t<div class=\"prodPrice\" *ngIf=\"product.price != product.regular_price\">\n\t\t\t\t\t\t\t<span class=\"oldPrice\">{{product.regular_price | currency : \"BR\"}}</span><span class=\"salePrice\">{{product.price | currency : \"BR\"}}</span>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"prodPrice\" *ngIf=\"product.price === product.regular_price\">\n\t\t\t\t\t\t\t<span class=\"pPrice\">{{product.price | currency : \"BR\"}}</span>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"randPrice\" *ngIf=\"product.price > pageDetail.finalBR\">\n\t\t\t\t\t\t<div class=\"prodPrice\" *ngIf=\"product.price != product.regular_price\">\n\t\t\t\t\t\t\t<span class=\"oldPrice\">{{product.regular_price | currency : \"R\"}}</span><span class=\"salePrice\">{{product.price | currency : \"R\"}}</span>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"prodPrice\" *ngIf=\"product.price === product.regular_price\">\n\t\t\t\t\t\t\t<span class=\"pPrice\">{{product.price | currency : \"R\"}}</span>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</ion-col>\n\t\t</ion-row>\n\t</ion-grid>\n\t<!--<div>{{ displayPagination(productsService.catCount.count) }}</div>-->\n\t<ion-infinite-scroll threshold=\"100px\" (ionInfinite)=\"loadData($event)\">\n\t\t<ion-infinite-scroll-content\n\t\t\tloadingSpinner=\"bubbles\"\n\t\t\tloadingText=\"Loading more data...\">\n\t\t</ion-infinite-scroll-content>\n\t</ion-infinite-scroll>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/category/category.module.ts":
/*!*********************************************!*\
  !*** ./src/app/category/category.module.ts ***!
  \*********************************************/
/*! exports provided: CategoryPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryPageModule", function() { return CategoryPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _category_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./category.page */ "./src/app/category/category.page.ts");







const routes = [
    {
        path: '',
        component: _category_page__WEBPACK_IMPORTED_MODULE_6__["CategoryPage"]
    }
];
let CategoryPageModule = class CategoryPageModule {
};
CategoryPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_category_page__WEBPACK_IMPORTED_MODULE_6__["CategoryPage"]]
    })
], CategoryPageModule);



/***/ }),

/***/ "./src/app/category/category.page.scss":
/*!*********************************************!*\
  !*** ./src/app/category/category.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-title {\n  text-align: center;\n}\n\nion-toolbar.main-toolbar {\n  --color: #ffffff;\n  --background: #000000;\n  --padding-bottom: 0px;\n  --padding-end: 0px;\n  --padding-start: 0px;\n  --padding-top: 0px;\n  --min-height: 55px;\n}\n\n.toolbar-btn {\n  --background: #292c2f;\n  --border-radius: 0px;\n  --color: #fff;\n  --padding-bottom: 0px;\n  --padding-end: 0px;\n  --padding-start: 0px;\n  --padding-top: 0px;\n  height: 55px;\n  display: block;\n  width: 20%;\n  z-index: 1;\n  margin: 0px;\n}\n\n.buttons-first-slot {\n  width: 20%;\n  margin: 0px;\n}\n\nion-menu-button {\n  --background: #292c2f;\n  --border-radius: 0px;\n  --color: #fff;\n  --padding-bottom: 0px;\n  --padding-end: 0px;\n  --padding-start: 0px;\n  --padding-top: 0px;\n  height: 55px;\n  display: block;\n  width: 100%;\n  z-index: 1;\n  margin: 0px;\n}\n\nion-toolbar.secondary-toolbar {\n  --padding-bottom: 0px;\n  --padding-end: 0px;\n  --padding-start: 0px;\n  --padding-top: 0px;\n}\n\n.secondary-toolbar ion-grid {\n  --ion-grid-padding: 0px;\n}\n\nion-searchbar {\n  --background: #ffffff;\n  --color: #292929;\n  padding: 5px;\n  height: 44px;\n}\n\n/*.secondary-toolbar ion-col {\n    padding: 0px;\n}*/\n\n.prodImgWrap {\n  position: relative;\n}\n\n.prodStock {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  text-align: center;\n  height: 25px;\n  background-color: #616161;\n  color: #ffffff;\n  line-height: 25px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2F0ZWdvcnkvRDpcXHhhbXBwXFxodGRvY3NcXGViLWFwcFxcZWdBcHAvc3JjXFxhcHBcXGNhdGVnb3J5XFxjYXRlZ29yeS5wYWdlLnNjc3MiLCJzcmMvYXBwL2NhdGVnb3J5L2NhdGVnb3J5LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0FDQ0o7O0FERUE7RUFDSSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQ0NKOztBRENBO0VBQ0kscUJBQUE7RUFDQSxvQkFBQTtFQUNBLGFBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0FDRUo7O0FEQUE7RUFDSSxVQUFBO0VBQ0EsV0FBQTtBQ0dKOztBRERBO0VBQ0kscUJBQUE7RUFDQSxvQkFBQTtFQUNBLGFBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0FDSUo7O0FERkE7RUFDSSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtBQ0tKOztBREhBO0VBQ0ksdUJBQUE7QUNNSjs7QURKQTtFQUNJLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQ09KOztBRExBOztFQUFBOztBQUlBO0VBQ0ksa0JBQUE7QUNPSjs7QURMQTtFQUNJLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QUNRSiIsImZpbGUiOiJzcmMvYXBwL2NhdGVnb3J5L2NhdGVnb3J5LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10aXRsZSB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5pb24tdG9vbGJhci5tYWluLXRvb2xiYXIge1xuICAgIC0tY29sb3I6ICNmZmZmZmY7XG4gICAgLS1iYWNrZ3JvdW5kOiAjMDAwMDAwO1xuICAgIC0tcGFkZGluZy1ib3R0b206IDBweDtcbiAgICAtLXBhZGRpbmctZW5kOiAwcHg7XG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAwcHg7XG4gICAgLS1wYWRkaW5nLXRvcDogMHB4O1xuICAgIC0tbWluLWhlaWdodDogNTVweDtcbn1cbi50b29sYmFyLWJ0biB7XG4gICAgLS1iYWNrZ3JvdW5kOiAjMjkyYzJmO1xuICAgIC0tYm9yZGVyLXJhZGl1czogMHB4O1xuICAgIC0tY29sb3I6ICNmZmY7XG4gICAgLS1wYWRkaW5nLWJvdHRvbTogMHB4O1xuICAgIC0tcGFkZGluZy1lbmQ6IDBweDtcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDBweDtcbiAgICAtLXBhZGRpbmctdG9wOiAwcHg7XG4gICAgaGVpZ2h0OiA1NXB4O1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiAyMCU7XG4gICAgei1pbmRleDogMTtcbiAgICBtYXJnaW46IDBweDtcbn1cbi5idXR0b25zLWZpcnN0LXNsb3Qge1xuICAgIHdpZHRoOiAyMCU7XG4gICAgbWFyZ2luOiAwcHg7XG59XG5pb24tbWVudS1idXR0b24ge1xuICAgIC0tYmFja2dyb3VuZDogIzI5MmMyZjtcbiAgICAtLWJvcmRlci1yYWRpdXM6IDBweDtcbiAgICAtLWNvbG9yOiAjZmZmO1xuICAgIC0tcGFkZGluZy1ib3R0b206IDBweDtcbiAgICAtLXBhZGRpbmctZW5kOiAwcHg7XG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAwcHg7XG4gICAgLS1wYWRkaW5nLXRvcDogMHB4O1xuICAgIGhlaWdodDogNTVweDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDogMTAwJTtcbiAgICB6LWluZGV4OiAxO1xuICAgIG1hcmdpbjogMHB4O1xufVxuaW9uLXRvb2xiYXIuc2Vjb25kYXJ5LXRvb2xiYXIge1xuICAgIC0tcGFkZGluZy1ib3R0b206IDBweDtcbiAgICAtLXBhZGRpbmctZW5kOiAwcHg7XG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAwcHg7XG4gICAgLS1wYWRkaW5nLXRvcDogMHB4O1xufVxuLnNlY29uZGFyeS10b29sYmFyIGlvbi1ncmlkIHtcbiAgICAtLWlvbi1ncmlkLXBhZGRpbmc6IDBweDtcbn1cbmlvbi1zZWFyY2hiYXIge1xuICAgIC0tYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgICAtLWNvbG9yOiAjMjkyOTI5O1xuICAgIHBhZGRpbmc6IDVweDtcbiAgICBoZWlnaHQ6IDQ0cHg7XG59XG4vKi5zZWNvbmRhcnktdG9vbGJhciBpb24tY29sIHtcbiAgICBwYWRkaW5nOiAwcHg7XG59Ki9cblxuLnByb2RJbWdXcmFwIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4ucHJvZFN0b2NrIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGhlaWdodDogMjVweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjE2MTYxO1xuICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgIGxpbmUtaGVpZ2h0OiAyNXB4O1xufSIsImlvbi10aXRsZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuaW9uLXRvb2xiYXIubWFpbi10b29sYmFyIHtcbiAgLS1jb2xvcjogI2ZmZmZmZjtcbiAgLS1iYWNrZ3JvdW5kOiAjMDAwMDAwO1xuICAtLXBhZGRpbmctYm90dG9tOiAwcHg7XG4gIC0tcGFkZGluZy1lbmQ6IDBweDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwcHg7XG4gIC0tcGFkZGluZy10b3A6IDBweDtcbiAgLS1taW4taGVpZ2h0OiA1NXB4O1xufVxuXG4udG9vbGJhci1idG4ge1xuICAtLWJhY2tncm91bmQ6ICMyOTJjMmY7XG4gIC0tYm9yZGVyLXJhZGl1czogMHB4O1xuICAtLWNvbG9yOiAjZmZmO1xuICAtLXBhZGRpbmctYm90dG9tOiAwcHg7XG4gIC0tcGFkZGluZy1lbmQ6IDBweDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwcHg7XG4gIC0tcGFkZGluZy10b3A6IDBweDtcbiAgaGVpZ2h0OiA1NXB4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDIwJTtcbiAgei1pbmRleDogMTtcbiAgbWFyZ2luOiAwcHg7XG59XG5cbi5idXR0b25zLWZpcnN0LXNsb3Qge1xuICB3aWR0aDogMjAlO1xuICBtYXJnaW46IDBweDtcbn1cblxuaW9uLW1lbnUtYnV0dG9uIHtcbiAgLS1iYWNrZ3JvdW5kOiAjMjkyYzJmO1xuICAtLWJvcmRlci1yYWRpdXM6IDBweDtcbiAgLS1jb2xvcjogI2ZmZjtcbiAgLS1wYWRkaW5nLWJvdHRvbTogMHB4O1xuICAtLXBhZGRpbmctZW5kOiAwcHg7XG4gIC0tcGFkZGluZy1zdGFydDogMHB4O1xuICAtLXBhZGRpbmctdG9wOiAwcHg7XG4gIGhlaWdodDogNTVweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICB6LWluZGV4OiAxO1xuICBtYXJnaW46IDBweDtcbn1cblxuaW9uLXRvb2xiYXIuc2Vjb25kYXJ5LXRvb2xiYXIge1xuICAtLXBhZGRpbmctYm90dG9tOiAwcHg7XG4gIC0tcGFkZGluZy1lbmQ6IDBweDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwcHg7XG4gIC0tcGFkZGluZy10b3A6IDBweDtcbn1cblxuLnNlY29uZGFyeS10b29sYmFyIGlvbi1ncmlkIHtcbiAgLS1pb24tZ3JpZC1wYWRkaW5nOiAwcHg7XG59XG5cbmlvbi1zZWFyY2hiYXIge1xuICAtLWJhY2tncm91bmQ6ICNmZmZmZmY7XG4gIC0tY29sb3I6ICMyOTI5Mjk7XG4gIHBhZGRpbmc6IDVweDtcbiAgaGVpZ2h0OiA0NHB4O1xufVxuXG4vKi5zZWNvbmRhcnktdG9vbGJhciBpb24tY29sIHtcbiAgICBwYWRkaW5nOiAwcHg7XG59Ki9cbi5wcm9kSW1nV3JhcCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLnByb2RTdG9jayB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBoZWlnaHQ6IDI1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICM2MTYxNjE7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBsaW5lLWhlaWdodDogMjVweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/category/category.page.ts":
/*!*******************************************!*\
  !*** ./src/app/category/category.page.ts ***!
  \*******************************************/
/*! exports provided: CategoryPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryPage", function() { return CategoryPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_products_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/products.service */ "./src/app/services/products.service.ts");
/* harmony import */ var _services_page_details_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/page-details.service */ "./src/app/services/page-details.service.ts");






let CategoryPage = class CategoryPage {
    constructor(productsService, route, pageDetail) {
        this.productsService = productsService;
        this.route = route;
        this.pageDetail = pageDetail;
        this.page = 1;
    }
    ngOnInit() {
        this.pageDetail.showCount();
        this.pageDetail.showBRPoints();
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
CategoryPage.ctorParameters = () => [
    { type: _services_products_service__WEBPACK_IMPORTED_MODULE_4__["ProductsService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _services_page_details_service__WEBPACK_IMPORTED_MODULE_5__["PageDetailsService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonInfiniteScroll"], { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonInfiniteScroll"])
], CategoryPage.prototype, "infiniteScroll", void 0);
CategoryPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-category',
        template: __webpack_require__(/*! raw-loader!./category.page.html */ "./node_modules/raw-loader/index.js!./src/app/category/category.page.html"),
        styles: [__webpack_require__(/*! ./category.page.scss */ "./src/app/category/category.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_products_service__WEBPACK_IMPORTED_MODULE_4__["ProductsService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _services_page_details_service__WEBPACK_IMPORTED_MODULE_5__["PageDetailsService"]])
], CategoryPage);



/***/ })

}]);
//# sourceMappingURL=category-category-module-es2015.js.map