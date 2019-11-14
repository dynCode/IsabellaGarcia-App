(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/home/home.page.html":
/*!***************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/home.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n\t<!--<ion-toolbar>\n\t\t<ion-title>\n\t\tIonic Blank\n\t\t</ion-title>\n\t</ion-toolbar>-->\n</ion-header>\n\n<ion-content>\n\t<div class=\"content-wrap\">\n\t\t<div class=\"half-top\">\n\t\t\t<img src=\"/assets/white-logo.png\"/>\n\t\t</div>\n\t\t<div class=\"half-bot\">\n\t\t\t<img src=\"/assets/vip-beauty-club-logo.png\"/>\n\t\t</div>\n\t</div>\n</ion-content>\n\n<ion-tabs>\n\n  <ion-tab-bar slot=\"bottom\" class=\"login-tabs tabs-section\">\n    <ion-tab-button class=\"login\" [routerLink]=\"['/', 'login']\" >\n      <ion-label>LOG IN</ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button class=\"register\" [routerLink]=\"['/', 'register']\" >\n      <ion-label>REGISTER</ion-label>\n    </ion-tab-button>\n  </ion-tab-bar>\n\n</ion-tabs>"

/***/ }),

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");







let HomePageModule = class HomePageModule {
};
HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                {
                    path: '',
                    component: _home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]
                }
            ])
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]]
    })
], HomePageModule);



/***/ }),

/***/ "./src/app/home/home.page.scss":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".content-wrap {\n  background-image: url(\"/assets/login-bg.jpg\");\n  max-height: 100vh;\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: center top;\n}\n\n.half-top {\n  position: relative;\n  height: 50vh;\n  width: 100%;\n  margin: auto;\n}\n\n.half-bot {\n  position: relative;\n  height: 50vh;\n  width: 100%;\n  margin: auto;\n}\n\n.half-top img {\n  position: absolute;\n  width: 65%;\n  top: 35%;\n  left: 50%;\n  -webkit-transform: translateX(-50%) translateY(-50%);\n  transform: translateX(-50%) translateY(-50%);\n}\n\n.half-bot img {\n  position: absolute;\n  position: absolute;\n  top: 60%;\n  left: 50%;\n  -webkit-transform: translateX(-50%) translateY(-50%);\n  transform: translateX(-50%) translateY(-50%);\n  width: 35%;\n}\n\nion-tab-button.login ion-label {\n  color: #000;\n  font-size: 16px;\n  font-weight: 700;\n}\n\nion-tab-button.login {\n  background-color: #ece0d6;\n  max-width: 50%;\n  width: 100%;\n}\n\nion-tab-button.register {\n  background-color: #000;\n  max-width: 50%;\n  widows: 100%;\n}\n\nion-tab-button.register ion-label {\n  color: #fff;\n  font-size: 16px;\n  font-weight: 700;\n}\n\n.login-tabs {\n  border: 0px solid rgba(0, 0, 0, 0);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9EOlxceGFtcHBcXGh0ZG9jc1xcZWItYXBwXFxlZ0FwcC9zcmNcXGFwcFxcaG9tZVxcaG9tZS5wYWdlLnNjc3MiLCJzcmMvYXBwL2hvbWUvaG9tZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyw2Q0FBQTtFQUNBLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSw0QkFBQTtFQUNBLCtCQUFBO0FDQ0Q7O0FEQ0E7RUFDQyxrQkFBQTtFQUNHLFlBQUE7RUFDSCxXQUFBO0VBQ0EsWUFBQTtBQ0VEOztBREFBO0VBQ0Msa0JBQUE7RUFDRyxZQUFBO0VBQ0gsV0FBQTtFQUNBLFlBQUE7QUNHRDs7QUREQTtFQUNJLGtCQUFBO0VBQ0gsVUFBQTtFQUNHLFFBQUE7RUFDSCxTQUFBO0VBQ0csb0RBQUE7RUFDSCw0Q0FBQTtBQ0lEOztBREZBO0VBQ0Msa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0Esb0RBQUE7RUFDQSw0Q0FBQTtFQUNBLFVBQUE7QUNLRDs7QURIQTtFQUNDLFdBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNNRDs7QURKQTtFQUNDLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7QUNPRDs7QURMQTtFQUNDLHNCQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7QUNRRDs7QUROQTtFQUNDLFdBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNTRDs7QURQQTtFQUNDLGtDQUFBO0FDVUQiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRlbnQtd3JhcCB7XG5cdGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvbG9naW4tYmcuanBnXCIpO1xuXHRtYXgtaGVpZ2h0OiAxMDB2aDtcblx0YmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcblx0YmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcblx0YmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIHRvcDtcbn1cbi5oYWxmLXRvcCB7XG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBoZWlnaHQ6IDUwdmg7XG5cdHdpZHRoOiAxMDAlO1xuXHRtYXJnaW46IGF1dG87XG59XG4uaGFsZi1ib3Qge1xuXHRwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgaGVpZ2h0OiA1MHZoO1xuXHR3aWR0aDogMTAwJTtcblx0bWFyZ2luOiBhdXRvO1xufVxuLmhhbGYtdG9wIGltZyB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuXHR3aWR0aDogNjUlO1xuICAgIHRvcDogMzUlO1xuXHRsZWZ0OiA1MCU7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSkgdHJhbnNsYXRlWSgtNTAlKTtcblx0dHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpIHRyYW5zbGF0ZVkoLTUwJSk7XG59XG4uaGFsZi1ib3QgaW1nIHtcblx0cG9zaXRpb246IGFic29sdXRlO1xuXHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdHRvcDogNjAlO1xuXHRsZWZ0OiA1MCU7XG5cdC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpIHRyYW5zbGF0ZVkoLTUwJSk7XG5cdHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKSB0cmFuc2xhdGVZKC01MCUpO1xuXHR3aWR0aDogMzUlO1xufVxuaW9uLXRhYi1idXR0b24ubG9naW4gaW9uLWxhYmVsIHtcblx0Y29sb3I6ICMwMDA7XG5cdGZvbnQtc2l6ZTogMTZweDtcblx0Zm9udC13ZWlnaHQ6IDcwMDtcbn1cbmlvbi10YWItYnV0dG9uLmxvZ2luIHtcblx0YmFja2dyb3VuZC1jb2xvcjogI2VjZTBkNjtcblx0bWF4LXdpZHRoOiA1MCU7XG5cdHdpZHRoOiAxMDAlO1xufVxuaW9uLXRhYi1idXR0b24ucmVnaXN0ZXIge1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xuXHRtYXgtd2lkdGg6IDUwJTtcblx0d2lkb3dzOiAxMDAlO1xufVxuaW9uLXRhYi1idXR0b24ucmVnaXN0ZXIgaW9uLWxhYmVsIHtcblx0Y29sb3I6ICNmZmY7XG5cdGZvbnQtc2l6ZTogMTZweDtcblx0Zm9udC13ZWlnaHQ6IDcwMDtcbn1cbi5sb2dpbi10YWJzIHtcblx0Ym9yZGVyOiAwcHggc29saWQgcmdiYSgwLCAwLCAwLCAwKTtcbn0iLCIuY29udGVudC13cmFwIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2Fzc2V0cy9sb2dpbi1iZy5qcGdcIik7XG4gIG1heC1oZWlnaHQ6IDEwMHZoO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgdG9wO1xufVxuXG4uaGFsZi10b3Age1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGhlaWdodDogNTB2aDtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogYXV0bztcbn1cblxuLmhhbGYtYm90IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBoZWlnaHQ6IDUwdmg7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IGF1dG87XG59XG5cbi5oYWxmLXRvcCBpbWcge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiA2NSU7XG4gIHRvcDogMzUlO1xuICBsZWZ0OiA1MCU7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpIHRyYW5zbGF0ZVkoLTUwJSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKSB0cmFuc2xhdGVZKC01MCUpO1xufVxuXG4uaGFsZi1ib3QgaW1nIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNjAlO1xuICBsZWZ0OiA1MCU7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpIHRyYW5zbGF0ZVkoLTUwJSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKSB0cmFuc2xhdGVZKC01MCUpO1xuICB3aWR0aDogMzUlO1xufVxuXG5pb24tdGFiLWJ1dHRvbi5sb2dpbiBpb24tbGFiZWwge1xuICBjb2xvcjogIzAwMDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogNzAwO1xufVxuXG5pb24tdGFiLWJ1dHRvbi5sb2dpbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlY2UwZDY7XG4gIG1heC13aWR0aDogNTAlO1xuICB3aWR0aDogMTAwJTtcbn1cblxuaW9uLXRhYi1idXR0b24ucmVnaXN0ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xuICBtYXgtd2lkdGg6IDUwJTtcbiAgd2lkb3dzOiAxMDAlO1xufVxuXG5pb24tdGFiLWJ1dHRvbi5yZWdpc3RlciBpb24tbGFiZWwge1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogNzAwO1xufVxuXG4ubG9naW4tdGFicyB7XG4gIGJvcmRlcjogMHB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMCk7XG59Il19 */"

/***/ }),

/***/ "./src/app/home/home.page.ts":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");



let HomePage = class HomePage {
    constructor(_menu) {
        this._menu = _menu;
        this.menu.enable(false, 'catMenu');
    }
    get menu() {
        return this._menu;
    }
    set menu(value) {
        this._menu = value;
    }
};
HomePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"] }
];
HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: __webpack_require__(/*! raw-loader!./home.page.html */ "./node_modules/raw-loader/index.js!./src/app/home/home.page.html"),
        styles: [__webpack_require__(/*! ./home.page.scss */ "./src/app/home/home.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"]])
], HomePage);



/***/ })

}]);
//# sourceMappingURL=home-home-module-es2015.js.map