(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["profile-profile-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/profile/profile.page.html":
/*!*********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/profile/profile.page.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar class=\"main-toolbar\">\n\n    <!--<ion-button slot=\"start\" expand=\"block\" onclick=\"openMenu()\" class=\"toolbar-btn tb-btn1\">\n      <img class=\"icon-menu\" src=\"/assets/icon/menu.svg\" alt=\"\" />\n    </ion-button>-->\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    \n    <ion-title><span class=\"title-large\">MY PROFILE</span></ion-title>\n\n    <ion-button slot=\"end\" class=\"toolbar-btn tb-btn2\" [routerLink]=\"['/', 'cart']\">\n      <div class=\"cartBlock\">\n        <img class=\"icon-cart\" src=\"/assets/icon/cart.svg\" alt=\"\" />\n        <div class=\"cartBadge\" *ngIf=\"pageDetail.cartCount > 0\"><ion-badge>{{ pageDetail.cartCount }}</ion-badge></div>\n      </div>\n    </ion-button>\n\n  </ion-toolbar>\n  <ion-toolbar class=\"secondary-toolbar\">\n    <ion-grid>\n      <ion-row>\n        <ion-col class=\"search-col\">\n          <ion-searchbar></ion-searchbar>\n        </ion-col>\n        <ion-col class=\"br-col\">\n          <p *ngIf=\"pageDetail.finalBR > 0.00\"><span class=\"br-currency\">BR</span><span class=\"br-amount\">{{ pageDetail.finalBR | number : '1.2-2' }}</span></p>\n          <p *ngIf=\"0.00 >= pageDetail.finalBR\"><span class=\"br-currency\">BR</span><span class=\"br-amount\">0.00</span></p>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"section-title\">ORDERS</div>\n\t<ion-list class=\"profileList\">\n    <!--<ion-item [routerLink]=\"['/', 'orders']\">-->\n    <ion-item (click)=\"getOrders()\">\n      <ion-label>Orders</ion-label>\n    </ion-item>\n    <ion-item [routerLink]=\"['/', 'gift-cards']\">\n      <ion-label>Gift Cards</ion-label>\n    </ion-item>\n    <ion-item [routerLink]=\"['/', 'coupons']\">\n      <ion-label>Coupons</ion-label>\n    </ion-item>\n  </ion-list>\n  <div class=\"section-title\">PROFILE</div>\n  <ion-list class=\"profileList\">\n    <ion-item [routerLink]=\"['/', 'account']\">\n      <ion-label>Acount Details</ion-label>\n    </ion-item>\n    <ion-item [routerLink]=\"['/', 'addresses']\">\n      <ion-label>Addresses</ion-label>\n    </ion-item>\n    <ion-item (click)=\"presentAlertConfirm()\">\n      <ion-label>Logout</ion-label>\n    </ion-item>\n  </ion-list>\n  <div class=\"section-title\">GENERAL</div>\n  <ion-list class=\"profileList\">\n    <ion-item>\n      <ion-label>Faq</ion-label>\n    </ion-item>\n    <ion-item [routerLink]=\"['/', 'ts-cs']\">\n      <ion-label>Terms & Conditions</ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-label>Contact Us</ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-label>Video Tour</ion-label>\n    </ion-item>\n  </ion-list>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/profile/profile.module.ts":
/*!*******************************************!*\
  !*** ./src/app/profile/profile.module.ts ***!
  \*******************************************/
/*! exports provided: ProfilePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageModule", function() { return ProfilePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./profile.page */ "./src/app/profile/profile.page.ts");







var routes = [
    {
        path: '',
        component: _profile_page__WEBPACK_IMPORTED_MODULE_6__["ProfilePage"]
    }
];
var ProfilePageModule = /** @class */ (function () {
    function ProfilePageModule() {
    }
    ProfilePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_profile_page__WEBPACK_IMPORTED_MODULE_6__["ProfilePage"]]
        })
    ], ProfilePageModule);
    return ProfilePageModule;
}());



/***/ }),

/***/ "./src/app/profile/profile.page.scss":
/*!*******************************************!*\
  !*** ./src/app/profile/profile.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-title {\n  text-align: center;\n}\n\n.title-large {\n  padding-bottom: 0px;\n  margin-bottom: 0px;\n}\n\n.title-large::before {\n  display: none !important;\n}\n\nion-toolbar.main-toolbar {\n  --color: #ffffff;\n  --background: #000000;\n  --padding-bottom: 0px;\n  --padding-end: 0px;\n  --padding-start: 0px;\n  --padding-top: 0px;\n  --min-height: 55px;\n}\n\n.toolbar-btn {\n  --background: #292c2f;\n  --border-radius: 0px;\n  --color: #fff;\n  --padding-bottom: 0px;\n  --padding-end: 0px;\n  --padding-start: 0px;\n  --padding-top: 0px;\n  height: 55px;\n  display: block;\n  width: 20%;\n  z-index: 1;\n  margin: 0px;\n}\n\n.buttons-first-slot {\n  width: 20%;\n  margin: 0px;\n}\n\nion-menu-button {\n  --background: #292c2f;\n  --border-radius: 0px;\n  --color: #fff;\n  --padding-bottom: 0px;\n  --padding-end: 0px;\n  --padding-start: 0px;\n  --padding-top: 0px;\n  height: 55px;\n  display: block;\n  width: 100%;\n  z-index: 1;\n  margin: 0px;\n}\n\nion-toolbar.secondary-toolbar {\n  --padding-bottom: 0px;\n  --padding-end: 0px;\n  --padding-start: 0px;\n  --padding-top: 0px;\n}\n\n.secondary-toolbar ion-grid {\n  --ion-grid-padding: 0px;\n}\n\nion-searchbar {\n  --background: #ffffff;\n  --color: #292929;\n  padding: 5px;\n  height: 44px;\n}\n\n.section-title {\n  background-color: rgba(0, 0, 0, 0.1);\n  padding: 8px 16px;\n}\n\nion-list.profileList {\n  margin-bottom: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZmlsZS9EOlxceGFtcHBcXGh0ZG9jc1xcZWItYXBwXFxlZ0FwcC9zcmNcXGFwcFxccHJvZmlsZVxccHJvZmlsZS5wYWdlLnNjc3MiLCJzcmMvYXBwL3Byb2ZpbGUvcHJvZmlsZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtBQ0NKOztBRENBO0VBQ0ksbUJBQUE7RUFDQSxrQkFBQTtBQ0VKOztBREFBO0VBQ0ksd0JBQUE7QUNHSjs7QUREQTtFQUNJLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FDSUo7O0FERkE7RUFDSSxxQkFBQTtFQUNBLG9CQUFBO0VBQ0EsYUFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7QUNLSjs7QURIQTtFQUNJLFVBQUE7RUFDQSxXQUFBO0FDTUo7O0FESkE7RUFDSSxxQkFBQTtFQUNBLG9CQUFBO0VBQ0EsYUFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7QUNPSjs7QURMQTtFQUNJLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0FDUUo7O0FETkE7RUFDSSx1QkFBQTtBQ1NKOztBRFBBO0VBQ0kscUJBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FDVUo7O0FEUkE7RUFDSSxvQ0FBQTtFQUNBLGlCQUFBO0FDV0o7O0FEVEE7RUFDSSxrQkFBQTtBQ1lKIiwiZmlsZSI6InNyYy9hcHAvcHJvZmlsZS9wcm9maWxlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10aXRsZSB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLnRpdGxlLWxhcmdlIHtcbiAgICBwYWRkaW5nLWJvdHRvbTogMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDBweDtcbn1cbi50aXRsZS1sYXJnZTo6YmVmb3JlIHtcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG59XG5pb24tdG9vbGJhci5tYWluLXRvb2xiYXIge1xuICAgIC0tY29sb3I6ICNmZmZmZmY7XG4gICAgLS1iYWNrZ3JvdW5kOiAjMDAwMDAwO1xuICAgIC0tcGFkZGluZy1ib3R0b206IDBweDtcbiAgICAtLXBhZGRpbmctZW5kOiAwcHg7XG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAwcHg7XG4gICAgLS1wYWRkaW5nLXRvcDogMHB4O1xuICAgIC0tbWluLWhlaWdodDogNTVweDtcbn1cbi50b29sYmFyLWJ0biB7XG4gICAgLS1iYWNrZ3JvdW5kOiAjMjkyYzJmO1xuICAgIC0tYm9yZGVyLXJhZGl1czogMHB4O1xuICAgIC0tY29sb3I6ICNmZmY7XG4gICAgLS1wYWRkaW5nLWJvdHRvbTogMHB4O1xuICAgIC0tcGFkZGluZy1lbmQ6IDBweDtcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDBweDtcbiAgICAtLXBhZGRpbmctdG9wOiAwcHg7XG4gICAgaGVpZ2h0OiA1NXB4O1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiAyMCU7XG4gICAgei1pbmRleDogMTtcbiAgICBtYXJnaW46IDBweDtcbn1cbi5idXR0b25zLWZpcnN0LXNsb3Qge1xuICAgIHdpZHRoOiAyMCU7XG4gICAgbWFyZ2luOiAwcHg7XG59XG5pb24tbWVudS1idXR0b24ge1xuICAgIC0tYmFja2dyb3VuZDogIzI5MmMyZjtcbiAgICAtLWJvcmRlci1yYWRpdXM6IDBweDtcbiAgICAtLWNvbG9yOiAjZmZmO1xuICAgIC0tcGFkZGluZy1ib3R0b206IDBweDtcbiAgICAtLXBhZGRpbmctZW5kOiAwcHg7XG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAwcHg7XG4gICAgLS1wYWRkaW5nLXRvcDogMHB4O1xuICAgIGhlaWdodDogNTVweDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDogMTAwJTtcbiAgICB6LWluZGV4OiAxO1xuICAgIG1hcmdpbjogMHB4O1xufVxuaW9uLXRvb2xiYXIuc2Vjb25kYXJ5LXRvb2xiYXIge1xuICAgIC0tcGFkZGluZy1ib3R0b206IDBweDtcbiAgICAtLXBhZGRpbmctZW5kOiAwcHg7XG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAwcHg7XG4gICAgLS1wYWRkaW5nLXRvcDogMHB4O1xufVxuLnNlY29uZGFyeS10b29sYmFyIGlvbi1ncmlkIHtcbiAgICAtLWlvbi1ncmlkLXBhZGRpbmc6IDBweDtcbn1cbmlvbi1zZWFyY2hiYXIge1xuICAgIC0tYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgICAtLWNvbG9yOiAjMjkyOTI5O1xuICAgIHBhZGRpbmc6IDVweDtcbiAgICBoZWlnaHQ6IDQ0cHg7XG59XG4uc2VjdGlvbi10aXRsZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjEpO1xuICAgIHBhZGRpbmc6IDhweCAxNnB4O1xufVxuaW9uLWxpc3QucHJvZmlsZUxpc3Qge1xuICAgIG1hcmdpbi1ib3R0b206IDBweDtcbn0iLCJpb24tdGl0bGUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi50aXRsZS1sYXJnZSB7XG4gIHBhZGRpbmctYm90dG9tOiAwcHg7XG4gIG1hcmdpbi1ib3R0b206IDBweDtcbn1cblxuLnRpdGxlLWxhcmdlOjpiZWZvcmUge1xuICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG59XG5cbmlvbi10b29sYmFyLm1haW4tdG9vbGJhciB7XG4gIC0tY29sb3I6ICNmZmZmZmY7XG4gIC0tYmFja2dyb3VuZDogIzAwMDAwMDtcbiAgLS1wYWRkaW5nLWJvdHRvbTogMHB4O1xuICAtLXBhZGRpbmctZW5kOiAwcHg7XG4gIC0tcGFkZGluZy1zdGFydDogMHB4O1xuICAtLXBhZGRpbmctdG9wOiAwcHg7XG4gIC0tbWluLWhlaWdodDogNTVweDtcbn1cblxuLnRvb2xiYXItYnRuIHtcbiAgLS1iYWNrZ3JvdW5kOiAjMjkyYzJmO1xuICAtLWJvcmRlci1yYWRpdXM6IDBweDtcbiAgLS1jb2xvcjogI2ZmZjtcbiAgLS1wYWRkaW5nLWJvdHRvbTogMHB4O1xuICAtLXBhZGRpbmctZW5kOiAwcHg7XG4gIC0tcGFkZGluZy1zdGFydDogMHB4O1xuICAtLXBhZGRpbmctdG9wOiAwcHg7XG4gIGhlaWdodDogNTVweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAyMCU7XG4gIHotaW5kZXg6IDE7XG4gIG1hcmdpbjogMHB4O1xufVxuXG4uYnV0dG9ucy1maXJzdC1zbG90IHtcbiAgd2lkdGg6IDIwJTtcbiAgbWFyZ2luOiAwcHg7XG59XG5cbmlvbi1tZW51LWJ1dHRvbiB7XG4gIC0tYmFja2dyb3VuZDogIzI5MmMyZjtcbiAgLS1ib3JkZXItcmFkaXVzOiAwcHg7XG4gIC0tY29sb3I6ICNmZmY7XG4gIC0tcGFkZGluZy1ib3R0b206IDBweDtcbiAgLS1wYWRkaW5nLWVuZDogMHB4O1xuICAtLXBhZGRpbmctc3RhcnQ6IDBweDtcbiAgLS1wYWRkaW5nLXRvcDogMHB4O1xuICBoZWlnaHQ6IDU1cHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTAwJTtcbiAgei1pbmRleDogMTtcbiAgbWFyZ2luOiAwcHg7XG59XG5cbmlvbi10b29sYmFyLnNlY29uZGFyeS10b29sYmFyIHtcbiAgLS1wYWRkaW5nLWJvdHRvbTogMHB4O1xuICAtLXBhZGRpbmctZW5kOiAwcHg7XG4gIC0tcGFkZGluZy1zdGFydDogMHB4O1xuICAtLXBhZGRpbmctdG9wOiAwcHg7XG59XG5cbi5zZWNvbmRhcnktdG9vbGJhciBpb24tZ3JpZCB7XG4gIC0taW9uLWdyaWQtcGFkZGluZzogMHB4O1xufVxuXG5pb24tc2VhcmNoYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICAtLWNvbG9yOiAjMjkyOTI5O1xuICBwYWRkaW5nOiA1cHg7XG4gIGhlaWdodDogNDRweDtcbn1cblxuLnNlY3Rpb24tdGl0bGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIHBhZGRpbmc6IDhweCAxNnB4O1xufVxuXG5pb24tbGlzdC5wcm9maWxlTGlzdCB7XG4gIG1hcmdpbi1ib3R0b206IDBweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/profile/profile.page.ts":
/*!*****************************************!*\
  !*** ./src/app/profile/profile.page.ts ***!
  \*****************************************/
/*! exports provided: ProfilePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePage", function() { return ProfilePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_products_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/products.service */ "./src/app/services/products.service.ts");
/* harmony import */ var _services_authenticate_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/authenticate.service */ "./src/app/services/authenticate.service.ts");
/* harmony import */ var _services_page_details_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/page-details.service */ "./src/app/services/page-details.service.ts");








var ProfilePage = /** @class */ (function () {
    function ProfilePage(productsService, authenticationService, storage, alertController, router, pageDetail) {
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
        this.hasOrders = false;
    }
    ProfilePage.prototype.ngOnInit = function () {
        var _this = this;
        this.pageDetail.showCount();
        this.pageDetail.showBRPoints();
        this.storage.ready().then(function (data) {
            _this.storage.get("user").then(function (data) {
                _this.userDetails = data;
                _this.userFirstName = _this.userDetails[0].firstName;
                _this.userSurname = _this.userDetails[0].lastName;
                //this.userBR = this.userDetails[0].brPoints;
                _this.userID = _this.userDetails[0].id;
            });
        });
    };
    ProfilePage.prototype.presentAlertConfirm = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Log out',
                            message: 'Are you sure you want to log out?',
                            buttons: [
                                {
                                    text: 'Cancel',
                                    role: 'cancel'
                                }, {
                                    text: 'Log Out',
                                    handler: function () {
                                        console.log('Confirm Okay');
                                        _this.storage.remove("authDetail").then(function () {
                                            _this.router.navigate(['/', 'home']);
                                        });
                                    }
                                }
                            ]
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ProfilePage.prototype.getOrders = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.productsService.orderHistory(this.userID);
                return [2 /*return*/];
            });
        });
    };
    ProfilePage.ctorParameters = function () { return [
        { type: _services_products_service__WEBPACK_IMPORTED_MODULE_5__["ProductsService"] },
        { type: _services_authenticate_service__WEBPACK_IMPORTED_MODULE_6__["AuthenticationService"] },
        { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _services_page_details_service__WEBPACK_IMPORTED_MODULE_7__["PageDetailsService"] }
    ]; };
    ProfilePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! raw-loader!./profile.page.html */ "./node_modules/raw-loader/index.js!./src/app/profile/profile.page.html"),
            styles: [__webpack_require__(/*! ./profile.page.scss */ "./src/app/profile/profile.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_products_service__WEBPACK_IMPORTED_MODULE_5__["ProductsService"],
            _services_authenticate_service__WEBPACK_IMPORTED_MODULE_6__["AuthenticationService"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _services_page_details_service__WEBPACK_IMPORTED_MODULE_7__["PageDetailsService"]])
    ], ProfilePage);
    return ProfilePage;
}());



/***/ })

}]);
//# sourceMappingURL=profile-profile-module-es5.js.map