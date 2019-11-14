(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["bank-bank-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/bank/bank.page.html":
/*!***************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/bank/bank.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar class=\"main-toolbar\">\n  \n      <!--<ion-button slot=\"start\" expand=\"block\" onclick=\"openMenu()\" class=\"toolbar-btn tb-btn1\">\n        <img class=\"icon-menu\" src=\"/assets/icon/menu.svg\" alt=\"\" />\n      </ion-button>-->\n      <ion-buttons slot=\"start\">\n        <ion-menu-button></ion-menu-button>\n      </ion-buttons>\n      \n      <ion-title><span class=\"title-large\">BEAUTY RANDS</span></ion-title>\n  \n      <ion-button slot=\"end\" class=\"toolbar-btn tb-btn2\" [routerLink]=\"['/', 'cart']\">\n        <div class=\"cartBlock\">\n          <img class=\"icon-cart\" src=\"/assets/icon/cart.svg\" alt=\"\" />\n          <div class=\"cartBadge\" *ngIf=\"pageDetail.cartCount > 0\"><ion-badge>{{ pageDetail.cartCount }}</ion-badge></div>\n        </div>\n      </ion-button>\n  \n    </ion-toolbar>\n    <ion-toolbar class=\"secondary-toolbar\">\n      <ion-grid>\n        <ion-row>\n          <ion-col class=\"search-col\">\n            <ion-searchbar></ion-searchbar>\n          </ion-col>\n          <ion-col class=\"br-col\">\n              <p><span class=\"br-currency\">BR</span><span class=\"br-amount\">{{ pageDetail.finalBR | number : '1.2-2' }}</span></p>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-toolbar>\n  </ion-header>\n\n<ion-content>\n  <ion-card id=\"fullBRcard\">\n    <ion-card-content>\n      <div class=\"brInner\">You have {{ pageDetail.currentBR | number : '1.2-2' }} BR available</div>\n    </ion-card-content>\n  </ion-card>\n  <ion-grid class=\"brGrid\">\n    <ion-row class=\"tblHeader\">\n      <ion-col>Reward for</ion-col>\n      <ion-col>BR</ion-col>\n      <!--<ion-col>BR Expires On</ion-col>-->\n      <!--<ion-col>Redeemed BR</ion-col>-->\n      <ion-col>Total</ion-col>\n      <ion-col>Date</ion-col>\n    </ion-row>\n    <ion-row *ngFor=\"let history of historyList\" class=\"tblBody\">\n      <ion-col>{{ history.reward_for }}</ion-col>\n      <ion-col>\n        <div *ngIf=\"history.earned_points != '0'\">+ {{ history.earned_points | number : '1.2-2' }}</div>\n        <div *ngIf=\"history.redeem_points != '0'\">- {{ history.redeem_points | number : '1.2-2' }}</div>\n      </ion-col>\n      <ion-col>{{ history.total_points | number : '1.2-2' }}</ion-col>\n      <ion-col>{{ history.earned_date | date: 'mediumDate'}}</ion-col>\n    </ion-row>\n  </ion-grid>\n\n</ion-content>"

/***/ }),

/***/ "./src/app/bank/bank.module.ts":
/*!*************************************!*\
  !*** ./src/app/bank/bank.module.ts ***!
  \*************************************/
/*! exports provided: BankPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BankPageModule", function() { return BankPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _bank_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./bank.page */ "./src/app/bank/bank.page.ts");







const routes = [
    {
        path: '',
        component: _bank_page__WEBPACK_IMPORTED_MODULE_6__["BankPage"]
    }
];
let BankPageModule = class BankPageModule {
};
BankPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_bank_page__WEBPACK_IMPORTED_MODULE_6__["BankPage"]]
    })
], BankPageModule);



/***/ }),

/***/ "./src/app/bank/bank.page.scss":
/*!*************************************!*\
  !*** ./src/app/bank/bank.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-title {\n  text-align: center;\n}\n\n.title-large {\n  padding-bottom: 0px;\n  margin-bottom: 0px;\n}\n\n.title-large::before {\n  display: none !important;\n}\n\nion-toolbar.main-toolbar {\n  --color: #ffffff;\n  --background: #000000;\n  --padding-bottom: 0px;\n  --padding-end: 0px;\n  --padding-start: 0px;\n  --padding-top: 0px;\n  --min-height: 55px;\n}\n\n.toolbar-btn {\n  --background: #292c2f;\n  --border-radius: 0px;\n  --color: #fff;\n  --padding-bottom: 0px;\n  --padding-end: 0px;\n  --padding-start: 0px;\n  --padding-top: 0px;\n  height: 55px;\n  display: block;\n  width: 20%;\n  z-index: 1;\n  margin: 0px;\n}\n\n.buttons-first-slot {\n  width: 20%;\n  margin: 0px;\n}\n\nion-menu-button {\n  --background: #292c2f;\n  --border-radius: 0px;\n  --color: #fff;\n  --padding-bottom: 0px;\n  --padding-end: 0px;\n  --padding-start: 0px;\n  --padding-top: 0px;\n  height: 55px;\n  display: block;\n  width: 100%;\n  z-index: 1;\n  margin: 0px;\n}\n\nion-toolbar.secondary-toolbar {\n  --padding-bottom: 0px;\n  --padding-end: 0px;\n  --padding-start: 0px;\n  --padding-top: 0px;\n}\n\n.secondary-toolbar ion-grid {\n  --ion-grid-padding: 0px;\n}\n\nion-searchbar {\n  --background: #ffffff;\n  --color: #292929;\n  padding: 5px;\n  height: 44px;\n}\n\n/*.secondary-toolbar ion-col {\n    padding: 0px;\n}*/\n\n.searchbar-input.sc-ion-searchbar-md {\n  padding-left: 5px;\n  padding-right: 5px;\n  -webkit-padding-start: 55px;\n  padding-inline-start: 55px;\n  -webkit-padding-end: 0px;\n  padding-inline-end: 0px;\n}\n\n.search-col {\n  background-color: #cccccc;\n  padding-top: 6px;\n  padding-bottom: 6px;\n  padding-right: 0px;\n  padding-left: 0px;\n}\n\n#fullBRcard {\n  --background: linear-gradient(135deg, #c0967B, #ece0d6 22%, #b3856a 41%, #c0967B 63%, #ece0d6 86%);\n  --color: #454545;\n  text-align: center;\n  text-shadow: -1px 1px 2px rgba(255, 255, 255, 0.9);\n  font-weight: 900;\n  border: 1px solid rgba(0, 0, 0, 0.08);\n}\n\n.brGrid .tblHeader ion-col {\n  font-size: 14px;\n  font-weight: 700;\n  background-color: #e3d9d3;\n}\n\n.brGrid .tblHeader {\n  border-bottom: 1px solid #e0dede;\n}\n\n.brGrid .tblBody ion-col {\n  font-size: 12px;\n  border-bottom: 1px solid #e0dede;\n  padding-top: 10px;\n  padding-bottom: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmFuay9EOlxceGFtcHBcXGh0ZG9jc1xcZWItYXBwXFxlZ0FwcC9zcmNcXGFwcFxcYmFua1xcYmFuay5wYWdlLnNjc3MiLCJzcmMvYXBwL2JhbmsvYmFuay5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtBQ0NKOztBRENBO0VBQ0ksbUJBQUE7RUFDQSxrQkFBQTtBQ0VKOztBREFBO0VBQ0ksd0JBQUE7QUNHSjs7QUREQTtFQUNJLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FDSUo7O0FERkE7RUFDSSxxQkFBQTtFQUNBLG9CQUFBO0VBQ0EsYUFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7QUNLSjs7QURIQTtFQUNJLFVBQUE7RUFDQSxXQUFBO0FDTUo7O0FESkE7RUFDSSxxQkFBQTtFQUNBLG9CQUFBO0VBQ0EsYUFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7QUNPSjs7QURMQTtFQUNJLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0FDUUo7O0FETkE7RUFDSSx1QkFBQTtBQ1NKOztBRFBBO0VBQ0kscUJBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FDVUo7O0FEUkE7O0VBQUE7O0FBR0E7RUFDSSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsMkJBQUE7RUFDQSwwQkFBQTtFQUNBLHdCQUFBO0VBQ0EsdUJBQUE7QUNXSjs7QURUQTtFQUNJLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUNZSjs7QURWQTtFQUNJLGtHQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtEQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQ0FBQTtBQ2FKOztBRFhBO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7QUNjSjs7QURaQTtFQUNJLGdDQUFBO0FDZUo7O0FEYkE7RUFDSSxlQUFBO0VBQ0EsZ0NBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0FDZ0JKIiwiZmlsZSI6InNyYy9hcHAvYmFuay9iYW5rLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10aXRsZSB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLnRpdGxlLWxhcmdlIHtcbiAgICBwYWRkaW5nLWJvdHRvbTogMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDBweDtcbn1cbi50aXRsZS1sYXJnZTo6YmVmb3JlIHtcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG59XG5pb24tdG9vbGJhci5tYWluLXRvb2xiYXIge1xuICAgIC0tY29sb3I6ICNmZmZmZmY7XG4gICAgLS1iYWNrZ3JvdW5kOiAjMDAwMDAwO1xuICAgIC0tcGFkZGluZy1ib3R0b206IDBweDtcbiAgICAtLXBhZGRpbmctZW5kOiAwcHg7XG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAwcHg7XG4gICAgLS1wYWRkaW5nLXRvcDogMHB4O1xuICAgIC0tbWluLWhlaWdodDogNTVweDtcbn1cbi50b29sYmFyLWJ0biB7XG4gICAgLS1iYWNrZ3JvdW5kOiAjMjkyYzJmO1xuICAgIC0tYm9yZGVyLXJhZGl1czogMHB4O1xuICAgIC0tY29sb3I6ICNmZmY7XG4gICAgLS1wYWRkaW5nLWJvdHRvbTogMHB4O1xuICAgIC0tcGFkZGluZy1lbmQ6IDBweDtcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDBweDtcbiAgICAtLXBhZGRpbmctdG9wOiAwcHg7XG4gICAgaGVpZ2h0OiA1NXB4O1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiAyMCU7XG4gICAgei1pbmRleDogMTtcbiAgICBtYXJnaW46IDBweDtcbn1cbi5idXR0b25zLWZpcnN0LXNsb3Qge1xuICAgIHdpZHRoOiAyMCU7XG4gICAgbWFyZ2luOiAwcHg7XG59XG5pb24tbWVudS1idXR0b24ge1xuICAgIC0tYmFja2dyb3VuZDogIzI5MmMyZjtcbiAgICAtLWJvcmRlci1yYWRpdXM6IDBweDtcbiAgICAtLWNvbG9yOiAjZmZmO1xuICAgIC0tcGFkZGluZy1ib3R0b206IDBweDtcbiAgICAtLXBhZGRpbmctZW5kOiAwcHg7XG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAwcHg7XG4gICAgLS1wYWRkaW5nLXRvcDogMHB4O1xuICAgIGhlaWdodDogNTVweDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDogMTAwJTtcbiAgICB6LWluZGV4OiAxO1xuICAgIG1hcmdpbjogMHB4O1xufVxuaW9uLXRvb2xiYXIuc2Vjb25kYXJ5LXRvb2xiYXIge1xuICAgIC0tcGFkZGluZy1ib3R0b206IDBweDtcbiAgICAtLXBhZGRpbmctZW5kOiAwcHg7XG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAwcHg7XG4gICAgLS1wYWRkaW5nLXRvcDogMHB4O1xufVxuLnNlY29uZGFyeS10b29sYmFyIGlvbi1ncmlkIHtcbiAgICAtLWlvbi1ncmlkLXBhZGRpbmc6IDBweDtcbn1cbmlvbi1zZWFyY2hiYXIge1xuICAgIC0tYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgICAtLWNvbG9yOiAjMjkyOTI5O1xuICAgIHBhZGRpbmc6IDVweDtcbiAgICBoZWlnaHQ6IDQ0cHg7XG59XG4vKi5zZWNvbmRhcnktdG9vbGJhciBpb24tY29sIHtcbiAgICBwYWRkaW5nOiAwcHg7XG59Ki9cbi5zZWFyY2hiYXItaW5wdXQuc2MtaW9uLXNlYXJjaGJhci1tZCB7XG4gICAgcGFkZGluZy1sZWZ0OiA1cHg7XG4gICAgcGFkZGluZy1yaWdodDogNXB4O1xuICAgIC13ZWJraXQtcGFkZGluZy1zdGFydDogNTVweDtcbiAgICBwYWRkaW5nLWlubGluZS1zdGFydDogNTVweDtcbiAgICAtd2Via2l0LXBhZGRpbmctZW5kOiAwcHg7XG4gICAgcGFkZGluZy1pbmxpbmUtZW5kOiAwcHg7XG59XG4uc2VhcmNoLWNvbCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2NjY2NjYztcbiAgICBwYWRkaW5nLXRvcDogNnB4O1xuICAgIHBhZGRpbmctYm90dG9tOiA2cHg7XG4gICAgcGFkZGluZy1yaWdodDogMHB4O1xuICAgIHBhZGRpbmctbGVmdDogMHB4O1xufVxuI2Z1bGxCUmNhcmQge1xuICAgIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgI2MwOTY3QiwgI2VjZTBkNiAyMiUsICNiMzg1NmEgNDElLCAjYzA5NjdCIDYzJSwgI2VjZTBkNiA4NiUpO1xuICAgIC0tY29sb3I6ICM0NTQ1NDU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHRleHQtc2hhZG93OiAtMXB4IDFweCAycHggcmdiYSgyNTUsMjU1LDI1NSwwLjkpO1xuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjA4KTtcbn1cbi5ickdyaWQgLnRibEhlYWRlciBpb24tY29sIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTNkOWQzO1xufVxuLmJyR3JpZCAudGJsSGVhZGVyIHtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2UwZGVkZTtcbn1cbi5ickdyaWQgLnRibEJvZHkgaW9uLWNvbCB7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTBkZWRlO1xuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xufSIsImlvbi10aXRsZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnRpdGxlLWxhcmdlIHtcbiAgcGFkZGluZy1ib3R0b206IDBweDtcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xufVxuXG4udGl0bGUtbGFyZ2U6OmJlZm9yZSB7XG4gIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuaW9uLXRvb2xiYXIubWFpbi10b29sYmFyIHtcbiAgLS1jb2xvcjogI2ZmZmZmZjtcbiAgLS1iYWNrZ3JvdW5kOiAjMDAwMDAwO1xuICAtLXBhZGRpbmctYm90dG9tOiAwcHg7XG4gIC0tcGFkZGluZy1lbmQ6IDBweDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwcHg7XG4gIC0tcGFkZGluZy10b3A6IDBweDtcbiAgLS1taW4taGVpZ2h0OiA1NXB4O1xufVxuXG4udG9vbGJhci1idG4ge1xuICAtLWJhY2tncm91bmQ6ICMyOTJjMmY7XG4gIC0tYm9yZGVyLXJhZGl1czogMHB4O1xuICAtLWNvbG9yOiAjZmZmO1xuICAtLXBhZGRpbmctYm90dG9tOiAwcHg7XG4gIC0tcGFkZGluZy1lbmQ6IDBweDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwcHg7XG4gIC0tcGFkZGluZy10b3A6IDBweDtcbiAgaGVpZ2h0OiA1NXB4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDIwJTtcbiAgei1pbmRleDogMTtcbiAgbWFyZ2luOiAwcHg7XG59XG5cbi5idXR0b25zLWZpcnN0LXNsb3Qge1xuICB3aWR0aDogMjAlO1xuICBtYXJnaW46IDBweDtcbn1cblxuaW9uLW1lbnUtYnV0dG9uIHtcbiAgLS1iYWNrZ3JvdW5kOiAjMjkyYzJmO1xuICAtLWJvcmRlci1yYWRpdXM6IDBweDtcbiAgLS1jb2xvcjogI2ZmZjtcbiAgLS1wYWRkaW5nLWJvdHRvbTogMHB4O1xuICAtLXBhZGRpbmctZW5kOiAwcHg7XG4gIC0tcGFkZGluZy1zdGFydDogMHB4O1xuICAtLXBhZGRpbmctdG9wOiAwcHg7XG4gIGhlaWdodDogNTVweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICB6LWluZGV4OiAxO1xuICBtYXJnaW46IDBweDtcbn1cblxuaW9uLXRvb2xiYXIuc2Vjb25kYXJ5LXRvb2xiYXIge1xuICAtLXBhZGRpbmctYm90dG9tOiAwcHg7XG4gIC0tcGFkZGluZy1lbmQ6IDBweDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwcHg7XG4gIC0tcGFkZGluZy10b3A6IDBweDtcbn1cblxuLnNlY29uZGFyeS10b29sYmFyIGlvbi1ncmlkIHtcbiAgLS1pb24tZ3JpZC1wYWRkaW5nOiAwcHg7XG59XG5cbmlvbi1zZWFyY2hiYXIge1xuICAtLWJhY2tncm91bmQ6ICNmZmZmZmY7XG4gIC0tY29sb3I6ICMyOTI5Mjk7XG4gIHBhZGRpbmc6IDVweDtcbiAgaGVpZ2h0OiA0NHB4O1xufVxuXG4vKi5zZWNvbmRhcnktdG9vbGJhciBpb24tY29sIHtcbiAgICBwYWRkaW5nOiAwcHg7XG59Ki9cbi5zZWFyY2hiYXItaW5wdXQuc2MtaW9uLXNlYXJjaGJhci1tZCB7XG4gIHBhZGRpbmctbGVmdDogNXB4O1xuICBwYWRkaW5nLXJpZ2h0OiA1cHg7XG4gIC13ZWJraXQtcGFkZGluZy1zdGFydDogNTVweDtcbiAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IDU1cHg7XG4gIC13ZWJraXQtcGFkZGluZy1lbmQ6IDBweDtcbiAgcGFkZGluZy1pbmxpbmUtZW5kOiAwcHg7XG59XG5cbi5zZWFyY2gtY29sIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NjY2NjYztcbiAgcGFkZGluZy10b3A6IDZweDtcbiAgcGFkZGluZy1ib3R0b206IDZweDtcbiAgcGFkZGluZy1yaWdodDogMHB4O1xuICBwYWRkaW5nLWxlZnQ6IDBweDtcbn1cblxuI2Z1bGxCUmNhcmQge1xuICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICNjMDk2N0IsICNlY2UwZDYgMjIlLCAjYjM4NTZhIDQxJSwgI2MwOTY3QiA2MyUsICNlY2UwZDYgODYlKTtcbiAgLS1jb2xvcjogIzQ1NDU0NTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0ZXh0LXNoYWRvdzogLTFweCAxcHggMnB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45KTtcbiAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjA4KTtcbn1cblxuLmJyR3JpZCAudGJsSGVhZGVyIGlvbi1jb2wge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlM2Q5ZDM7XG59XG5cbi5ickdyaWQgLnRibEhlYWRlciB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTBkZWRlO1xufVxuXG4uYnJHcmlkIC50YmxCb2R5IGlvbi1jb2wge1xuICBmb250LXNpemU6IDEycHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTBkZWRlO1xuICBwYWRkaW5nLXRvcDogMTBweDtcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/bank/bank.page.ts":
/*!***********************************!*\
  !*** ./src/app/bank/bank.page.ts ***!
  \***********************************/
/*! exports provided: BankPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BankPage", function() { return BankPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_products_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/products.service */ "./src/app/services/products.service.ts");
/* harmony import */ var _services_authenticate_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/authenticate.service */ "./src/app/services/authenticate.service.ts");
/* harmony import */ var _services_page_details_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/page-details.service */ "./src/app/services/page-details.service.ts");








let BankPage = class BankPage {
    constructor(productsService, authenticationService, storage, alertController, router, pageDetail) {
        this.productsService = productsService;
        this.authenticationService = authenticationService;
        this.storage = storage;
        this.alertController = alertController;
        this.router = router;
        this.pageDetail = pageDetail;
        this.userDetails = [];
        this.userOrders = [];
        this.cartList = [];
        this.showCartCount = false;
        this.hasHistory = false;
        this.historyList = [];
    }
    ngOnInit() {
        this.pageDetail.showCount();
        this.pageDetail.showBRPoints();
        this.storage.ready().then((data) => {
            this.storage.get("user").then((data) => {
                this.userDetails = data;
                this.userFirstName = this.userDetails[0].firstName;
                this.userSurname = this.userDetails[0].lastName;
                //this.userBR = this.userDetails[0].brPoints;
                this.userID = this.userDetails[0].id;
                this.historyList = this.userDetails[0].history;
            });
        });
    }
};
BankPage.ctorParameters = () => [
    { type: _services_products_service__WEBPACK_IMPORTED_MODULE_5__["ProductsService"] },
    { type: _services_authenticate_service__WEBPACK_IMPORTED_MODULE_6__["AuthenticationService"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _services_page_details_service__WEBPACK_IMPORTED_MODULE_7__["PageDetailsService"] }
];
BankPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-bank',
        template: __webpack_require__(/*! raw-loader!./bank.page.html */ "./node_modules/raw-loader/index.js!./src/app/bank/bank.page.html"),
        styles: [__webpack_require__(/*! ./bank.page.scss */ "./src/app/bank/bank.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_products_service__WEBPACK_IMPORTED_MODULE_5__["ProductsService"],
        _services_authenticate_service__WEBPACK_IMPORTED_MODULE_6__["AuthenticationService"],
        _ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
        _services_page_details_service__WEBPACK_IMPORTED_MODULE_7__["PageDetailsService"]])
], BankPage);



/***/ })

}]);
//# sourceMappingURL=bank-bank-module-es2015.js.map