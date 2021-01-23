(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["location-location-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/location/location.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/location/location.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\">\n  <ion-toolbar >\n    <ion-button slot=\"start\">\n      <ion-back-button  color=\"danger\" defaultHref=\"home\"></ion-back-button>\n    </ion-button>\n    <ion-title>Location</ion-title >\n    \n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-item>\n    <img src=\"../../assets/estados-unidos-da-america.png\" />\n    <ion-text> United States</ion-text>\n    <img class=\"img\" src=\"../../assets/signal.png\" />\n  </ion-item>\n  <ion-item>\n    <img src=\"../../assets//china.png\" />\n    <ion-text> China </ion-text> \n    <img class=\"img2\" src=\"../../assets/signal(1).png\" />\n  </ion-item>\n  <ion-item>\n    <img src=\"../../assets/franca.png\" />\n    <ion-text> França</ion-text>\n    <img class=\"img3\" src=\"../../assets//signal.png\" />\n  </ion-item>\n\n</ion-content>\n\n");

/***/ }),

/***/ "./src/app/location/location-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/location/location-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: LocationPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocationPageRoutingModule", function() { return LocationPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _location_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./location.page */ "./src/app/location/location.page.ts");




const routes = [
    {
        path: '',
        component: _location_page__WEBPACK_IMPORTED_MODULE_3__["LocationPage"]
    }
];
let LocationPageRoutingModule = class LocationPageRoutingModule {
};
LocationPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], LocationPageRoutingModule);



/***/ }),

/***/ "./src/app/location/location.module.ts":
/*!*********************************************!*\
  !*** ./src/app/location/location.module.ts ***!
  \*********************************************/
/*! exports provided: LocationPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocationPageModule", function() { return LocationPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _location_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./location-routing.module */ "./src/app/location/location-routing.module.ts");
/* harmony import */ var _location_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./location.page */ "./src/app/location/location.page.ts");







let LocationPageModule = class LocationPageModule {
};
LocationPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _location_routing_module__WEBPACK_IMPORTED_MODULE_5__["LocationPageRoutingModule"]
        ],
        declarations: [_location_page__WEBPACK_IMPORTED_MODULE_6__["LocationPage"]]
    })
], LocationPageModule);



/***/ }),

/***/ "./src/app/location/location.page.scss":
/*!*********************************************!*\
  !*** ./src/app/location/location.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-toolbar {\n  --ion-text-color: #000000;\n  --background: #f1f1f1;\n  --ion-toolbar-border-color: #f1f1f1;\n}\nion-toolbar ion-title {\n  text-align: center;\n}\nion-toolbar ion-button {\n  --background: #f1f1f1;\n  ion-back-button: #000000;\n}\nion-content {\n  --background: #f1f1f1;\n}\nion-item {\n  --background: #f1f1f1;\n  --ion-item-border-color: #f1f1f1;\n  --ion-text-color: #000000;\n}\nion-item ion-text {\n  margin-left: 5%;\n}\n.img {\n  margin-left: 80px;\n}\n.img2 {\n  margin-left: 140px;\n}\n.img3 {\n  margin-left: 130px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9jYXRpb24vbG9jYXRpb24ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUJBQUE7RUFDQSxxQkFBQTtFQUNBLG1DQUFBO0FBQ0Y7QUFBRTtFQUNJLGtCQUFBO0FBRU47QUFDRTtFQUNFLHFCQUFBO0VBQ0Esd0JBQUE7QUFDSjtBQUdBO0VBQ0UscUJBQUE7QUFBRjtBQUdBO0VBQ0UscUJBQUE7RUFDQSxnQ0FBQTtFQUNBLHlCQUFBO0FBQUY7QUFFRTtFQUNFLGVBQUE7QUFBSjtBQUtBO0VBQ0UsaUJBQUE7QUFGRjtBQUtBO0VBQ0Msa0JBQUE7QUFGRDtBQUtBO0VBQ0Usa0JBQUE7QUFGRiIsImZpbGUiOiJzcmMvYXBwL2xvY2F0aW9uL2xvY2F0aW9uLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10b29sYmFyIHtcbiAgLS1pb24tdGV4dC1jb2xvcjogIzAwMDAwMDtcbiAgLS1iYWNrZ3JvdW5kOiAjZjFmMWYxO1xuICAtLWlvbi10b29sYmFyLWJvcmRlci1jb2xvcjogI2YxZjFmMTtcbiAgaW9uLXRpdGxlIHtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuXG4gIGlvbi1idXR0b24ge1xuICAgIC0tYmFja2dyb3VuZDogI2YxZjFmMTtcbiAgICBpb24tYmFjay1idXR0b246ICMwMDAwMDA7XG4gIH1cbn1cblxuaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6ICNmMWYxZjE7XG59XG5cbmlvbi1pdGVtIHtcbiAgLS1iYWNrZ3JvdW5kOiAjZjFmMWYxO1xuICAtLWlvbi1pdGVtLWJvcmRlci1jb2xvcjogI2YxZjFmMTtcbiAgLS1pb24tdGV4dC1jb2xvcjogIzAwMDAwMDsgIFxuXG4gIGlvbi10ZXh0IHtcbiAgICBtYXJnaW4tbGVmdDogNSU7XG4gIH1cbn1cblxuXG4uaW1nIHtcbiAgbWFyZ2luLWxlZnQ6IDgwcHg7XG59XG5cbi5pbWcyIHtcbiBtYXJnaW4tbGVmdDogMTQwcHg7ICBcbn1cblxuLmltZzMge1xuICBtYXJnaW4tbGVmdDogMTMwcHg7XG59XG4iXX0= */");

/***/ }),

/***/ "./src/app/location/location.page.ts":
/*!*******************************************!*\
  !*** ./src/app/location/location.page.ts ***!
  \*******************************************/
/*! exports provided: LocationPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocationPage", function() { return LocationPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let LocationPage = class LocationPage {
    constructor() { }
    ngOnInit() {
    }
};
LocationPage.ctorParameters = () => [];
LocationPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-location',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./location.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/location/location.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./location.page.scss */ "./src/app/location/location.page.scss")).default]
    })
], LocationPage);



/***/ })

}]);
//# sourceMappingURL=location-location-module-es2015.js.map