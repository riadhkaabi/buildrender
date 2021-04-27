(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["attendance-attendance-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/attendance/attendance.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/attendance/attendance.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<ion-header >\n  <ion-toolbar style=\"color: coral;\">\n    <ion-title>Attendance</ion-title>\n    <ion-buttons slot=\"primary\">\n      <ion-button></ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content style=\"--ion-background-color:#e9e6e6;\">\n  <ion-card class=\"card-style\" >\n    <div class=\"card-content\">\n      <img src=\"../assets/images/pdp.png\">\n      <ion-label >\n        <h2>Riadh Kaabi</h2>\n        <p>Mobile Developer</p>\n      </ion-label>\n    </div>\n    <div  class=\"work-status-bg\">Working</div>\n\n  </ion-card>\n<ion-card style=\"--ion-background-color:#f5f4f4;\">\n\n  <ion-card class=\"attendance-style\">\n    <ion-card class=\"card-date\">\n      <ion-icon name=\"calendar-outline\" style=\"float: left; color: rgb(255, 255, 255); font-size: 1.5rem ;margin-top: 6px;margin-left: 10px;\"></ion-icon>\n      <ion-label style=\"color: white;margin-left: 10px;margin-top: 100px;font-size: 18px;font-family: Roboto;\"></ion-label>\n    </ion-card>\n    <div class=\"titles\">\n      <ion-label >Entry time :</ion-label>\n      </div>\n    <div class=\"titles\">\n      <ion-label>Leaving time :</ion-label>\n    </div>\n    <div class=\"titles\">\n      <ion-label>Entry time :</ion-label>\n    </div>\n    <div class=\"titles\">\n      <ion-label>Leaving time :</ion-label>\n    </div>\n    \n  </ion-card>\n  <ion-card class=\"attendance-style\"></ion-card>\n</ion-card>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/attendance/attendance-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/attendance/attendance-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: AttendancePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AttendancePageRoutingModule", function() { return AttendancePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _attendance_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./attendance.page */ "./src/app/attendance/attendance.page.ts");




const routes = [
    {
        path: '',
        component: _attendance_page__WEBPACK_IMPORTED_MODULE_3__["AttendancePage"]
    }
];
let AttendancePageRoutingModule = class AttendancePageRoutingModule {
};
AttendancePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AttendancePageRoutingModule);



/***/ }),

/***/ "./src/app/attendance/attendance.module.ts":
/*!*************************************************!*\
  !*** ./src/app/attendance/attendance.module.ts ***!
  \*************************************************/
/*! exports provided: AttendancePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AttendancePageModule", function() { return AttendancePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _attendance_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./attendance-routing.module */ "./src/app/attendance/attendance-routing.module.ts");
/* harmony import */ var _attendance_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./attendance.page */ "./src/app/attendance/attendance.page.ts");







let AttendancePageModule = class AttendancePageModule {
};
AttendancePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _attendance_routing_module__WEBPACK_IMPORTED_MODULE_5__["AttendancePageRoutingModule"]
        ],
        declarations: [_attendance_page__WEBPACK_IMPORTED_MODULE_6__["AttendancePage"]]
    })
], AttendancePageModule);



/***/ }),

/***/ "./src/app/attendance/attendance.page.scss":
/*!*************************************************!*\
  !*** ./src/app/attendance/attendance.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".card-style {\n  background-color: #797676;\n  height: 90px;\n  width: 94%;\n  border-radius: 15px;\n  margin-left: 10px;\n  box-shadow: 6px 6px 2px 1px #d3d0d0;\n  margin-bottom: -10px;\n}\n\n.card-content {\n  position: absolute;\n  top: 10px;\n  left: 15px;\n  display: flex;\n  align-items: center;\n}\n\n.card-content img {\n  width: 65px;\n  height: 65px;\n  border-radius: 50%;\n  border-color: white;\n}\n\n.card-content h2 {\n  font-weight: 300;\n  color: #fff;\n  margin-left: 15px;\n}\n\n.card-content p {\n  font-size: 12px;\n  color: #e4e4e4;\n  font-weight: 100;\n  letter-spacing: 0.4px;\n  margin-left: 15px;\n}\n\n.work-status-bg {\n  background-color: #43a00d;\n  border-radius: 20px;\n  color: white;\n  font-family: Roboto;\n  margin-top: 15px;\n  size: 10px;\n  margin-right: 15px;\n  width: 70px;\n  padding-left: 9px;\n  padding-top: 2px;\n  height: 21px;\n  float: right;\n}\n\n.attendance-style {\n  background-color: #a19e9e;\n  height: 300px;\n  width: 94%;\n  border-radius: 15px;\n  margin-left: 10px;\n  box-shadow: 6px 6px 2px 1px #d3d0d0;\n}\n\n.card-date {\n  background-color: #ff6600;\n  height: 40px;\n  width: 94%;\n  border-radius: 10px;\n  margin-left: 10px;\n}\n\n.titles {\n  color: white;\n  width: 30%;\n  height: 30px;\n  text-align: center;\n  padding-top: 3.5px;\n  border-radius: 4px;\n  margin-left: 10%;\n  margin-top: 10px;\n  font-size: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXR0ZW5kYW5jZS9hdHRlbmRhbmNlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUNBQUE7RUFDQSxvQkFBQTtBQUNKOztBQUVBO0VBQ0ksa0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQUNKOztBQUFJO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FBRVI7O0FBQUk7RUFDSSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtBQUVSOztBQUFJO0VBQ0ksZUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7QUFFUjs7QUFDQTtFQUNJLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUFFSjs7QUFEQTtFQUNJLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLFVBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUNBQUE7QUFJSjs7QUFEQTtFQUNJLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FBSUo7O0FBREE7RUFDSSxZQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQUlKIiwiZmlsZSI6InNyYy9hcHAvYXR0ZW5kYW5jZS9hdHRlbmRhbmNlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkLXN0eWxle1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEyMSwgMTE4LCAxMTgpO1xyXG4gICAgaGVpZ2h0OjkwcHg7XHJcbiAgICB3aWR0aDogOTQlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgYm94LXNoYWRvdzogNnB4IDZweCAycHggMXB4IHJnYigyMTEsIDIwOCwgMjA4KTtcclxuICAgIG1hcmdpbi1ib3R0b206IC0xMHB4O1xyXG4gIFxyXG59XHJcbi5jYXJkLWNvbnRlbnR7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDEwcHg7XHJcbiAgICBsZWZ0OiAxNXB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBpbWd7XHJcbiAgICAgICAgd2lkdGg6IDY1cHg7XHJcbiAgICAgICAgaGVpZ2h0OiA2NXB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICBib3JkZXItY29sb3I6IHdoaXRlO1xyXG4gICAgfVxyXG4gICAgaDJ7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMTVweDtcclxuICAgIH1cclxuICAgIHB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgIGNvbG9yOiAjZTRlNGU0O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiAxMDA7XHJcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuNHB4O1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG4gICAgfVxyXG59XHJcbi53b3JrLXN0YXR1cy1iZ3tcclxuICAgIGJhY2tncm91bmQtY29sb3I6cmdiKDY3LCAxNjAsIDEzKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xyXG4gICAgZm9udC1mYW1pbHk6IFJvYm90bztcclxuICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgICBzaXplOiAxMHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xyXG4gICAgd2lkdGg6IDcwcHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDlweDtcclxuICAgIHBhZGRpbmctdG9wOiAycHg7XHJcbiAgICBoZWlnaHQ6IDIxcHg7XHJcbiAgICBmbG9hdDogcmlnaHQ7fVxyXG4uYXR0ZW5kYW5jZS1zdHlsZXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNjEsIDE1OCwgMTU4KTtcclxuICAgIGhlaWdodDozMDBweDtcclxuICAgIHdpZHRoOiA5NCU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICBib3gtc2hhZG93OiA2cHggNnB4IDJweCAxcHggcmdiKDIxMSwgMjA4LCAyMDgpO1xyXG4gICAgXHJcbn1cclxuLmNhcmQtZGF0ZXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZjY2MDA7XHJcbiAgICBoZWlnaHQ6NDBweDtcclxuICAgIHdpZHRoOiA5NCU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcblxyXG59XHJcbi50aXRsZXN7XHJcbiAgICBjb2xvcjp3aGl0ZTtcclxuICAgIHdpZHRoOiAzMCU7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nLXRvcDogMy41cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMTAlO1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIGZvbnQtc2l6ZTogMTVweDsgICAgXHJcbn1cclxuXHJcbiAgICAgICAgICBcclxuIl19 */");

/***/ }),

/***/ "./src/app/attendance/attendance.page.ts":
/*!***********************************************!*\
  !*** ./src/app/attendance/attendance.page.ts ***!
  \***********************************************/
/*! exports provided: AttendancePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AttendancePage", function() { return AttendancePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let AttendancePage = class AttendancePage {
    constructor() { }
    ngOnInit() {
    }
};
AttendancePage.ctorParameters = () => [];
AttendancePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-attendance',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./attendance.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/attendance/attendance.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./attendance.page.scss */ "./src/app/attendance/attendance.page.scss")).default]
    })
], AttendancePage);



/***/ })

}]);
//# sourceMappingURL=attendance-attendance-module-es2015.js.map