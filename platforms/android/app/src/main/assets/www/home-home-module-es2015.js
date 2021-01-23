(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-title>\n      One VPN\n    </ion-title>\n      \n       <ion-button slot=\"end\">\n          <ion-icon  name=\"settings-sharp\"></ion-icon>\n       </ion-button>\n      <ion-button slot=\"start\">\n        <ion-icon name=\"filter-sharp\"></ion-icon>\n      </ion-button>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  <ion-item>\n    <img src=\"{{logopng}}\" (click)=\"toggleIcon();\"/>\n    <ion-title>{{logoname}} </ion-title>\n    <ion-button href=\"location\" shape=\"round\">\n      <ion-icon slot=\"end\" name=\"ellipse-sharp\"></ion-icon>\n    </ion-button>\n  \n  </ion-item>\n  \n<ion-card>\n  <ion-buttons >\n   <ion-button>\n    <ion-icon name=\"remove-outline\"></ion-icon>\n   </ion-button>\n   <ion-button>\n    <ion-icon  name=\"finger-print-outline\"></ion-icon>\n   </ion-button>\n   <ion-button>\n     <ion-icon name=\"remove-outline\"></ion-icon>\n   </ion-button>\n  </ion-buttons>\n</ion-card>\n \n</ion-content>\n\n\n");

/***/ }),

/***/ "./src/app/home/home-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/home/home-routing.module.ts ***!
  \*********************************************/
/*! exports provided: HomePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageRoutingModule", function() { return HomePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");




const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_3__["HomePage"],
    }
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], HomePageRoutingModule);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home-routing.module */ "./src/app/home/home-routing.module.ts");







let HomePageModule = class HomePageModule {
};
HomePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
            _home_routing_module__WEBPACK_IMPORTED_MODULE_6__["HomePageRoutingModule"]
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_5__["HomePage"]]
    })
], HomePageModule);



/***/ }),

/***/ "./src/app/home/home.page.scss":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-toolbar {\n  --background: #f1f1f1;\n  --ion-text-color: #000000;\n  border-radius: 0 0 28px 28px;\n  --ion-toolbar-border-color: #f1f1f1;\n}\nion-toolbar ion-title {\n  text-align: center;\n}\nion-toolbar ion-button {\n  --background: #f1f1f1;\n}\nion-content {\n  --background: #f2f2f2;\n}\nion-content ion-item {\n  border-radius: 28px 28px 28px 28px;\n  margin-top: 60px;\n  --background: linear-gradient(197deg, rgba(100,100,100,1) 0%, rgba(63,63,63,1) 13.5%, rgba(29,29,29,1) 33.33%, rgba(0,0,0,1) 100%) !important;\n  --ion-text-color: #000000;\n  --ion-toolbar-border-color: #b3b3b3;\n}\nion-content ion-item ion-title {\n  text-align: center;\n  padding: 3px;\n}\nion-content ion-item ion-button {\n  --background: linear-gradient(197deg, rgba(100,100,100,1) 0%, rgba(63,63,63,1) 13.5%, rgba(29,29,29,1) 33.33%, rgba(0,0,0,1) 100%) !important;\n}\nion-content ion-item img {\n  padding: 1%;\n}\nion-content ion-card {\n  border-radius: 28px 28px 28px 28px;\n  margin-top: 280px;\n  --background: linear-gradient(197deg, rgba(100,100,100,1) 0%, rgba(63,63,63,1) 13.5%, rgba(29,29,29,1) 33.33%, rgba(0,0,0,1) 100%) !important;\n}\nion-content ion-card ion-button {\n  margin-left: 35px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHFCQUFBO0VBQ0EseUJBQUE7RUFDQSw0QkFBQTtFQUNBLG1DQUFBO0FBQ0Y7QUFDRTtFQUNFLGtCQUFBO0FBQ0o7QUFFRTtFQUNFLHFCQUFBO0FBQUo7QUFJQTtFQUNFLHFCQUFBO0FBREY7QUFHRTtFQUNFLGtDQUFBO0VBQ0EsZ0JBQUE7RUFDQSw2SUFBQTtFQUVBLHlCQUFBO0VBQ0EsbUNBQUE7QUFGSjtBQUlJO0VBRUUsa0JBQUE7RUFDQSxZQUFBO0FBSE47QUFLSTtFQUNFLDZJQUFBO0FBSE47QUFPSTtFQUNFLFdBQUE7QUFMTjtBQVNFO0VBQ0Usa0NBQUE7RUFDQSxpQkFBQTtFQUNBLDZJQUFBO0FBUEo7QUFRSTtFQUNFLGlCQUFBO0FBTk4iLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRvb2xiYXIge1xuICAtLWJhY2tncm91bmQ6ICNmMWYxZjE7XG4gIC0taW9uLXRleHQtY29sb3I6ICMwMDAwMDA7XG4gIGJvcmRlci1yYWRpdXM6IDAgMCAyOHB4IDI4cHg7XG4gIC0taW9uLXRvb2xiYXItYm9yZGVyLWNvbG9yOiAjZjFmMWYxO1xuXG4gIGlvbi10aXRsZSB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG5cbiAgaW9uLWJ1dHRvbiB7XG4gICAgLS1iYWNrZ3JvdW5kOiAjZjFmMWYxO1xuICB9XG59XG5cbmlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiAjZjJmMmYyO1xuXG4gIGlvbi1pdGVtIHtcbiAgICBib3JkZXItcmFkaXVzOiAyOHB4IDI4cHggMjhweCAyOHB4O1xuICAgIG1hcmdpbi10b3A6NjBweDtcbiAgICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxOTdkZWcsIHJnYmEoMTAwLDEwMCwxMDAsMSkgMCUsIHJnYmEoNjMsNjMsNjMsMSkgMTMuNSUsIHJnYmEoMjksMjksMjksMSkgMzMuMzMlLCByZ2JhKDAsMCwwLDEpIDEwMCUpICFpbXBvcnRhbnQ7XG5cbiAgICAtLWlvbi10ZXh0LWNvbG9yOiAjMDAwMDAwO1xuICAgIC0taW9uLXRvb2xiYXItYm9yZGVyLWNvbG9yOiAjYjNiM2IzO1xuICAgIFxuICAgIGlvbi10aXRsZSB7XG4gICAgICBcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIHBhZGRpbmc6IDNweDtcbiAgICB9XG4gICAgaW9uLWJ1dHRvbiB7XG4gICAgICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxOTdkZWcsIHJnYmEoMTAwLDEwMCwxMDAsMSkgMCUsIHJnYmEoNjMsNjMsNjMsMSkgMTMuNSUsIHJnYmEoMjksMjksMjksMSkgMzMuMzMlLCByZ2JhKDAsMCwwLDEpIDEwMCUpICFpbXBvcnRhbnQ7XG5cbiAgICB9XG5cbiAgICBpbWcge1xuICAgICAgcGFkZGluZzogMSU7XG4gICAgfVxuICB9XG5cbiAgaW9uLWNhcmQge1xuICAgIGJvcmRlci1yYWRpdXM6IDI4cHggMjhweCAyOHB4IDI4cHg7XG4gICAgbWFyZ2luLXRvcDogMjgwcHg7XG4gICAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTk3ZGVnLCByZ2JhKDEwMCwxMDAsMTAwLDEpIDAlLCByZ2JhKDYzLDYzLDYzLDEpIDEzLjUlLCByZ2JhKDI5LDI5LDI5LDEpIDMzLjMzJSwgcmdiYSgwLDAsMCwxKSAxMDAlKSAhaW1wb3J0YW50O1xuICAgIGlvbi1idXR0b24ge1xuICAgICAgbWFyZ2luLWxlZnQ6IDM1cHg7XG4gICAgfVxuICB9XG59XG5cbiJdfQ== */");

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let HomePage = class HomePage {
    constructor() {
        this.logopng = "../../assets/estados-unidos-da-america.png";
    }
    toggleIcon() {
        if (this.logopng == "../../assets/estados-unidos-da-america.png") {
            this.logopng = "../../assets/china.png";
        }
        else {
            this.logopng = "../../assets/estados-unidos-da-america.png";
        }
    }
    OnChange() {
    }
};
HomePage.ctorParameters = () => [];
HomePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./home.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./home.page.scss */ "./src/app/home/home.page.scss")).default]
    })
], HomePage);



/***/ })

}]);
//# sourceMappingURL=home-home-module-es2015.js.map