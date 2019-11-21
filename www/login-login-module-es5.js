(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-login-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/login/login.page.html":
/*!*****************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/login/login.page.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  \n</ion-header>\n\n<ion-content>\n  <div class=\"login-top\">\n    <div class=\"login-logo\"><img src=\"/assets/login-top.jpg\" alt=\"Isabella Garcia\"></div>\n  </div>\n  <div class=\"login-bot\">\n    <div class=\"logBot-inner\">\n      <ion-card id=\"loginError\" color=\"danger\" [hidden]=\"!loginFail\">\n        <ion-card-content >\n            <ion-icon name=\"warning\" slot=\"start\"></ion-icon><strong>ERROR:</strong> Invalid email or password.\n        </ion-card-content>\n      </ion-card>\n      <form [formGroup]=\"login_form\" (ngSubmit)=\"login(login_form.value)\" class=\"ion-padding\">\n        <ion-item>\n          <ion-icon name=\"mail\" slot=\"start\" class=\"loginIcon\"></ion-icon>\n          <ion-label position=\"stacked\" class=\"login-field\">Username</ion-label>\n          <ion-input required type=\"text\" formControlName=\"username\"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-icon name=\"lock\" slot=\"start\" class=\"loginIcon\"></ion-icon>\n          <ion-label position=\"stacked\" class=\"login-field\">Password</ion-label>\n          <ion-input required [type]=\"passwordType\" formControlName=\"password\"></ion-input>\n          <ion-icon [name]=\"passwordShown === true ? 'md-eye-off' : 'md-eye'\" slot=\"end\" (click)=\"togglePassword()\"></ion-icon>\n        </ion-item>\n        <div class=\"loginBtn\">\n          <ion-button expand=\"block\" type=\"submit\" class=\"login-btn ion-no-margin\">LOG IN</ion-button>\n          <!--<ion-button expand=\"block\" class=\"login-btn ion-no-margin\" [routerLink]=\"['/', 'landing-page']\">LOG IN</ion-button>-->\n          <div class=\"newUser\"><p><a class=\"loginUnder\" href=\"https://isabellagarcia.co.za/my-account/lost-password/\" target=\"_blank\">Lost your password?</a></p></div>\n          <div class=\"newUser\"><p>FIRST TIME IG APP USER: <a class=\"loginUnderSec\" (click)=\"openWithInAppBrowser()\">REGISTER HERE</a></p></div>\n        </div>\n      <!--<ion-item>\n        <ion-checkbox color=\"danger\" slot=\"start\"></ion-checkbox>\n        <ion-label >ACCEPT <strong>TERMS & CONDITIONS</strong></ion-label>\n      </ion-item>-->\n    </form>\n    </div>\n  </div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/login/login.module.ts":
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.page */ "./src/app/login/login.page.ts");







var routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]
    }
];
var LoginPageModule = /** @class */ (function () {
    function LoginPageModule() {
    }
    LoginPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
        })
    ], LoginPageModule);
    return LoginPageModule;
}());



/***/ }),

/***/ "./src/app/login/login.page.scss":
/*!***************************************!*\
  !*** ./src/app/login/login.page.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".login-bot {\n  position: relative;\n  background-color: #ffffff;\n}\n\n.login-btn {\n  --background: #040707;\n  --background-activated: #d0d0d0;\n  --background-focused: #d0d0d0;\n  --background-hover: #d0d0d0;\n  --border-radius: 0px;\n}\n\n.newUser a {\n  color: #000;\n  text-decoration: underline;\n  letter-spacing: 0px !important;\n  font-size: 14px;\n  font-weight: 700;\n}\n\n.newUser p {\n  color: #000;\n  text-decoration: none;\n  letter-spacing: 0px !important;\n  font-size: 14px;\n  font-weight: 700;\n}\n\n.newUser {\n  text-align: center;\n}\n\n.login-field {\n  --color: #b2b2b2;\n  font-size: 14px;\n}\n\nion-content {\n  max-height: 100vh;\n}\n\n.logBot-inner ion-icon {\n  margin-top: auto;\n  --color: #b2b2b2;\n}\n\nion-card-content {\n  padding-left: unset;\n  padding-right: unset;\n  -webkit-padding-start: 10px;\n  padding-inline-start: 10px;\n  -webkit-padding-end: 10px;\n  padding-inline-end: 10px;\n  padding-top: 10px;\n  padding-bottom: 10px;\n  text-align: center;\n}\n\n#loginError ion-icon {\n  font-size: 20px;\n  vertical-align: top;\n  margin-right: 12px;\n}\n\n.loginBtn {\n  padding: 20px 0px;\n}\n\na.loginUnderSec {\n  color: #b41d24 !important;\n}\n\n.loginIcon {\n  color: #292c2f;\n  font-size: 25px;\n  -webkit-margin-end: 8px !important;\n          margin-inline-end: 8px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vRDpcXHhhbXBwXFxodGRvY3NcXGViLWFwcFxcZWdBcHAvc3JjXFxhcHBcXGxvZ2luXFxsb2dpbi5wYWdlLnNjc3MiLCJzcmMvYXBwL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EseUJBQUE7QUNDSjs7QURDQTtFQUNJLHFCQUFBO0VBQ0EsK0JBQUE7RUFDQSw2QkFBQTtFQUNBLDJCQUFBO0VBQ0Esb0JBQUE7QUNFSjs7QURBQTtFQUNJLFdBQUE7RUFDQSwwQkFBQTtFQUNBLDhCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDR0o7O0FEREE7RUFDSSxXQUFBO0VBQ0EscUJBQUE7RUFDQSw4QkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ0lKOztBREZBO0VBQ0ksa0JBQUE7QUNLSjs7QURIQTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtBQ01KOztBREpBO0VBQ0ksaUJBQUE7QUNPSjs7QURMQTtFQUNJLGdCQUFBO0VBQ0EsZ0JBQUE7QUNRSjs7QUROQTtFQUNJLG1CQUFBO0VBQ0Esb0JBQUE7RUFDQSwyQkFBQTtFQUNBLDBCQUFBO0VBQ0EseUJBQUE7RUFDQSx3QkFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtBQ1NKOztBRFBBO0VBQ0ksZUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUNVSjs7QURSQTtFQUNJLGlCQUFBO0FDV0o7O0FEVEE7RUFDSSx5QkFBQTtBQ1lKOztBRFZBO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFDQSxrQ0FBQTtVQUFBLGlDQUFBO0FDYUoiLCJmaWxlIjoic3JjL2FwcC9sb2dpbi9sb2dpbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9naW4tYm90IHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbn1cbi5sb2dpbi1idG4ge1xuICAgIC0tYmFja2dyb3VuZDogIzA0MDcwNztcbiAgICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiAjZDBkMGQwO1xuICAgIC0tYmFja2dyb3VuZC1mb2N1c2VkOiAjZDBkMGQwO1xuICAgIC0tYmFja2dyb3VuZC1ob3ZlcjogI2QwZDBkMDtcbiAgICAtLWJvcmRlci1yYWRpdXM6IDBweDtcbn1cbi5uZXdVc2VyIGEge1xuICAgIGNvbG9yOiAjMDAwO1xuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgIGxldHRlci1zcGFjaW5nOiAwcHggIWltcG9ydGFudDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cbi5uZXdVc2VyIHAge1xuICAgIGNvbG9yOiAjMDAwO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBsZXR0ZXItc3BhY2luZzogMHB4ICFpbXBvcnRhbnQ7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG4ubmV3VXNlciB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmxvZ2luLWZpZWxkIHtcbiAgICAtLWNvbG9yOiAjYjJiMmIyO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbn1cbmlvbi1jb250ZW50IHtcbiAgICBtYXgtaGVpZ2h0OiAxMDB2aDtcbn1cbi5sb2dCb3QtaW5uZXIgaW9uLWljb24ge1xuICAgIG1hcmdpbi10b3A6IGF1dG87XG4gICAgLS1jb2xvcjogI2IyYjJiMjtcbn1cbmlvbi1jYXJkLWNvbnRlbnQge1xuICAgIHBhZGRpbmctbGVmdDogdW5zZXQ7XG4gICAgcGFkZGluZy1yaWdodDogdW5zZXQ7XG4gICAgLXdlYmtpdC1wYWRkaW5nLXN0YXJ0OiAxMHB4O1xuICAgIHBhZGRpbmctaW5saW5lLXN0YXJ0OiAxMHB4O1xuICAgIC13ZWJraXQtcGFkZGluZy1lbmQ6IDEwcHg7XG4gICAgcGFkZGluZy1pbmxpbmUtZW5kOiAxMHB4O1xuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbiNsb2dpbkVycm9yIGlvbi1pY29uIHtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgICBtYXJnaW4tcmlnaHQ6IDEycHg7XG59XG4ubG9naW5CdG4ge1xuICAgIHBhZGRpbmc6IDIwcHggMHB4O1xufVxuYS5sb2dpblVuZGVyU2VjIHtcbiAgICBjb2xvcjogI2I0MWQyNCAhaW1wb3J0YW50O1xufVxuLmxvZ2luSWNvbiB7XG4gICAgY29sb3I6ICMyOTJjMmY7XG4gICAgZm9udC1zaXplOiAyNXB4O1xuICAgIG1hcmdpbi1pbmxpbmUtZW5kOiA4cHggIWltcG9ydGFudDtcbn0iLCIubG9naW4tYm90IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xufVxuXG4ubG9naW4tYnRuIHtcbiAgLS1iYWNrZ3JvdW5kOiAjMDQwNzA3O1xuICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiAjZDBkMGQwO1xuICAtLWJhY2tncm91bmQtZm9jdXNlZDogI2QwZDBkMDtcbiAgLS1iYWNrZ3JvdW5kLWhvdmVyOiAjZDBkMGQwO1xuICAtLWJvcmRlci1yYWRpdXM6IDBweDtcbn1cblxuLm5ld1VzZXIgYSB7XG4gIGNvbG9yOiAjMDAwO1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgbGV0dGVyLXNwYWNpbmc6IDBweCAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbi5uZXdVc2VyIHAge1xuICBjb2xvcjogIzAwMDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBsZXR0ZXItc3BhY2luZzogMHB4ICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cblxuLm5ld1VzZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5sb2dpbi1maWVsZCB7XG4gIC0tY29sb3I6ICNiMmIyYjI7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuaW9uLWNvbnRlbnQge1xuICBtYXgtaGVpZ2h0OiAxMDB2aDtcbn1cblxuLmxvZ0JvdC1pbm5lciBpb24taWNvbiB7XG4gIG1hcmdpbi10b3A6IGF1dG87XG4gIC0tY29sb3I6ICNiMmIyYjI7XG59XG5cbmlvbi1jYXJkLWNvbnRlbnQge1xuICBwYWRkaW5nLWxlZnQ6IHVuc2V0O1xuICBwYWRkaW5nLXJpZ2h0OiB1bnNldDtcbiAgLXdlYmtpdC1wYWRkaW5nLXN0YXJ0OiAxMHB4O1xuICBwYWRkaW5nLWlubGluZS1zdGFydDogMTBweDtcbiAgLXdlYmtpdC1wYWRkaW5nLWVuZDogMTBweDtcbiAgcGFkZGluZy1pbmxpbmUtZW5kOiAxMHB4O1xuICBwYWRkaW5nLXRvcDogMTBweDtcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuI2xvZ2luRXJyb3IgaW9uLWljb24ge1xuICBmb250LXNpemU6IDIwcHg7XG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gIG1hcmdpbi1yaWdodDogMTJweDtcbn1cblxuLmxvZ2luQnRuIHtcbiAgcGFkZGluZzogMjBweCAwcHg7XG59XG5cbmEubG9naW5VbmRlclNlYyB7XG4gIGNvbG9yOiAjYjQxZDI0ICFpbXBvcnRhbnQ7XG59XG5cbi5sb2dpbkljb24ge1xuICBjb2xvcjogIzI5MmMyZjtcbiAgZm9udC1zaXplOiAyNXB4O1xuICBtYXJnaW4taW5saW5lLWVuZDogOHB4ICFpbXBvcnRhbnQ7XG59Il19 */"

/***/ }),

/***/ "./src/app/login/login.page.ts":
/*!*************************************!*\
  !*** ./src/app/login/login.page.ts ***!
  \*************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_authenticate_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/authenticate.service */ "./src/app/services/authenticate.service.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ "./node_modules/@ionic-native/in-app-browser/ngx/index.js");










var LoginPage = /** @class */ (function () {
    function LoginPage(formBuilder, loadingController, authenticationService, modalController, router, storage, menu, iab) {
        this.formBuilder = formBuilder;
        this.loadingController = loadingController;
        this.authenticationService = authenticationService;
        this.modalController = modalController;
        this.router = router;
        this.storage = storage;
        this.menu = menu;
        this.iab = iab;
        this.passwordType = 'password';
        this.passwordShown = false;
        this.loginFail = false;
    }
    LoginPage.prototype.ngOnInit = function () {
        var _this = this;
        this.menu.enable(false, 'catMenu');
        this.storage.ready().then(function (data) {
            _this.storage.get("authDetail").then(function (data) {
                _this.authDetail = data;
                console.log("Auth Data", _this.authDetail);
                if (_this.authDetail) {
                    if (_this.authDetail[0].username && _this.authDetail[0].password) {
                        //this.username = this.authDetail[0].username;
                        //this.password = this.authDetail[0].password;
                        var autoLog = [];
                        autoLog['username'] = _this.authDetail[0].username;
                        autoLog['password'] = _this.authDetail[0].password;
                        _this.login(autoLog);
                    }
                }
            });
        });
        this.login_form = this.formBuilder.group({
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.username, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
            ])),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.password, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required)
        });
    };
    LoginPage.prototype.login = function (value) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var loading;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingController.create({
                            duration: 5000,
                            message: 'Please wait...'
                        })];
                    case 1:
                        loading = _a.sent();
                        loading.present();
                        this.authenticationService.doLogin(value.username, value.password)
                            .subscribe(function (res) {
                            _this.authenticationService.setUser(res);
                            // Reset the post items so that next time, they are completely
                            // reloaded for the newly authenticated user...
                            loading.dismiss();
                            _this.authenticationService.doCustomer(res);
                            _this.loginFail = false;
                        }, function (err) {
                            _this.error_message = 'Invalid credentials.';
                            loading.dismiss();
                            _this.loginFail = true;
                            console.log(err);
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    LoginPage.prototype.togglePassword = function () {
        if (this.passwordShown) {
            this.passwordShown = false;
            this.passwordType = 'password';
        }
        else {
            this.passwordShown = true;
            this.passwordType = 'text';
        }
    };
    LoginPage.prototype.openWithInAppBrowser = function () {
        var target = "_system";
        var browser = this.iab.create("https://beta.isabellagarcia.co.za/register/", target);
    };
    LoginPage.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"] },
        { type: _services_authenticate_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_6__["Storage"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["MenuController"] },
        { type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_7__["InAppBrowser"] }
    ]; };
    LoginPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! raw-loader!./login.page.html */ "./node_modules/raw-loader/index.js!./src/app/login/login.page.html"),
            styles: [__webpack_require__(/*! ./login.page.scss */ "./src/app/login/login.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"],
            _services_authenticate_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_6__["Storage"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["MenuController"],
            _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_7__["InAppBrowser"]])
    ], LoginPage);
    return LoginPage;
}());



/***/ })

}]);
//# sourceMappingURL=login-login-module-es5.js.map