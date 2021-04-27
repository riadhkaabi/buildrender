(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["profile-profile-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile.page.html":
    /*!*********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile.page.html ***!
      \*********************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppProfileProfilePageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n\n<ion-content style=\"--ion-background-color:#f5f4f4;margin-top: -2px;\">\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n    <ion-card  class=\"header-card-style\" style=\"--ion-background-color:#ffffff; padding: 0 10px;\">\n      <img (click)=\"displayActionSheet()\" src=\"{{currentUser.photo}}\"/>\n  \n        <ion-label style=\" margin-top: 2.5%;\" >\n          <div style=\"padding-bottom: 7.5px;\n          border-bottom: 1px solid rgba(255,255,255, 0.8);\n          margin-left: 5px;\">\n            <p  style=\" font-size: 16px;\n            text-transform: capitalize;\n            margin-left: 0;\">{{currentUser.firstName+\" \"+currentUser.lastName}}</p>\n            <h1 style=\"margin-left: 0; font-size: 14px;\">Welcome to BertschInnovation</h1>\n          </div>\n            <p  style=\"margin-top: 15px; margin-top: 1.5px;\n            font-weight: unset; font-size: 11px;\">Official work time is from <b>08:00</b> to <b>17:00</b></p>\n            <ion-toggle class=\"date\" name=\"banana\" color=\"warning\" [checked]=\"currentUser.holidayState === 1 ? false : true\" (click)=\"currentUser.holidayState === 1 ? disableHoliday() : activateHoliday() \" ></ion-toggle>\n        </ion-label>\n    </ion-card>\n\n    \n<ion-card  style=\"--ion-background-color:#f5f4f4;margin-top: -2px;\">\n  \n<ion-list *ngFor=\"let attendance of myAttendanceList\" >\n \n  <ion-card class=\"card-style\">\n    <div class=\"card-content\">\n      <img src={{currentUser.photo}}>\n      <ion-label >\n        <h2>{{currentUser.firstName+\" \"+currentUser.lastName}}</h2>\n        <p>{{attendance.punchTime | date: 'dd/MM/y, H:mm:ss '}}</p>\n      </ion-label>\n    </div>\n    <div [ngClass]=\"(attendance.workstate === 1)?'work-status-bg':'leave-status-bg'\">{{attendance.workstate === 1 ? 'Entry' : 'Leaving'}}</div>\n  </ion-card>\n  </ion-list>\n</ion-card>\n</ion-content>\n<div *ngIf=\"showUser == true\">\n  <ion-fab-button   style=\"margin-right: 15px; position: absolute ; right:0;bottom:0;margin-bottom: 10px;--background :black\"  (click)=\"openMyModalQrScanner()\">\n  <ion-icon color=\"light\" name=\"qr-code-outline\"></ion-icon>\n</ion-fab-button>\n</div>\n";
      /***/
    },

    /***/
    "./src/app/profile/profile-routing.module.ts":
    /*!***************************************************!*\
      !*** ./src/app/profile/profile-routing.module.ts ***!
      \***************************************************/

    /*! exports provided: ProfilePageRoutingModule */

    /***/
    function srcAppProfileProfileRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProfilePageRoutingModule", function () {
        return ProfilePageRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _profile_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./profile.page */
      "./src/app/profile/profile.page.ts");

      var routes = [{
        path: '',
        component: _profile_page__WEBPACK_IMPORTED_MODULE_3__["ProfilePage"]
      }];

      var ProfilePageRoutingModule = function ProfilePageRoutingModule() {
        _classCallCheck(this, ProfilePageRoutingModule);
      };

      ProfilePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ProfilePageRoutingModule);
      /***/
    },

    /***/
    "./src/app/profile/profile.module.ts":
    /*!*******************************************!*\
      !*** ./src/app/profile/profile.module.ts ***!
      \*******************************************/

    /*! exports provided: ProfilePageModule */

    /***/
    function srcAppProfileProfileModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProfilePageModule", function () {
        return ProfilePageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _profile_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./profile-routing.module */
      "./src/app/profile/profile-routing.module.ts");
      /* harmony import */


      var _profile_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./profile.page */
      "./src/app/profile/profile.page.ts");

      var ProfilePageModule = function ProfilePageModule() {
        _classCallCheck(this, ProfilePageModule);
      };

      ProfilePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _profile_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProfilePageRoutingModule"]],
        declarations: [_profile_page__WEBPACK_IMPORTED_MODULE_6__["ProfilePage"]]
      })], ProfilePageModule);
      /***/
    },

    /***/
    "./src/app/profile/profile.page.scss":
    /*!*******************************************!*\
      !*** ./src/app/profile/profile.page.scss ***!
      \*******************************************/

    /*! exports provided: default */

    /***/
    function srcAppProfileProfilePageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".title-style {\n  margin-top: 25px;\n  font-size: 15px;\n  margin: 10px;\n  font-weight: bold;\n  font-family: Roboto;\n  color: black;\n}\n\n.card-style {\n  background-color: #383837;\n  height: 80px;\n  width: 94%;\n  border-radius: 15px;\n  margin-left: 10px;\n  box-shadow: 6px 6px 2px 1px #d3d0d0;\n  margin-bottom: 10px;\n}\n\n.work-status-bg {\n  background-color: #f88111;\n  border-radius: 20px;\n  color: white;\n  font-family: Roboto;\n  margin-top: 15px;\n  font-size: 12px;\n  margin-right: 15px;\n  width: 45px;\n  padding-left: 10px;\n  padding-top: 1.2px;\n  height: 18px;\n  float: right;\n}\n\n.leave-status-bg {\n  background-color: #383e56;\n  border-radius: 20px;\n  color: white;\n  font-family: Roboto;\n  margin-top: 15px;\n  font-size: 12px;\n  margin-right: 10px;\n  width: 56px;\n  padding-left: 8px;\n  padding-top: 3px;\n  height: 21px;\n  float: right;\n}\n\n.card-content {\n  position: absolute;\n  top: 10px;\n  left: 15px;\n  display: flex;\n  align-items: center;\n}\n\n.card-content img {\n  width: 60px;\n  height: 60px;\n  border-radius: 50%;\n  border-color: white;\n}\n\n.card-content h2 {\n  font-weight: 300;\n  color: #fff;\n  margin-left: 15px;\n}\n\n.card-content p {\n  font-size: 12px;\n  color: #e4e4e4;\n  font-weight: 100;\n  letter-spacing: 0.4px;\n  margin-left: 15px;\n}\n\n.title-style-normal {\n  margin-top: 25px;\n  font-size: 15px;\n  margin: 10px;\n  font-family: Roboto;\n  color: black;\n}\n\n.normal-text {\n  font-family: Roboto;\n  color: black;\n}\n\n.arrow-style {\n  font-size: 1.2rem;\n  color: black;\n  float: right;\n  margin-top: -18px;\n  transition: 0.5s ease all;\n}\n\n.arrow-style.expanded {\n  transform: rotate(90deg);\n}\n\n.card-header {\n  display: flex;\n  padding: 25px;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.2);\n}\n\n.card-header p {\n  margin: auto;\n  margin-left: 0;\n}\n\n.card-header .arrow-style {\n  margin: auto;\n  margin-right: 0;\n}\n\n.card-body {\n  display: none;\n  -webkit-animation: fade 0.5s ease;\n          animation: fade 0.5s ease;\n}\n\n.card-body.display {\n  display: block;\n}\n\n.padding-0 {\n  padding: 0;\n}\n\n.padding-expanded {\n  padding-left: unset;\n  padding-right: unset;\n  -webkit-padding-start: 16px;\n  padding-inline-start: 16px;\n  -webkit-padding-end: 16px;\n  padding-inline-end: 16px;\n}\n\n.header-card-style {\n  display: flex;\n  align-items: center;\n  height: 120px;\n  border-radius: 30px;\n  box-shadow: 10px 10px 10px #aaaaaa;\n  background: linear-gradient(rgba(240, 165, 0, 0.8), rgba(240, 165, 0, 0.8));\n  box-shadow: 0 8px 20px 0 rgba(244, 209, 96, 0.5), 0 2px 4px 0 rgba(244, 209, 96, 0.5);\n  background: linear-gradient(#ff9a02, #f08800);\n  box-shadow: 0 -3px 14px 0 #f4d160, 0 3px 9px 0 #f4d160;\n  background: #fa8a2f;\n  -webkit-animation: fade-in 0.8s ease-in-out;\n          animation: fade-in 0.8s ease-in-out;\n}\n\n.header-card-style h1 {\n  font-weight: 300;\n  font-size: 16px;\n  color: #ffffff;\n  margin-left: 5px;\n}\n\n.header-card-style p {\n  margin-left: 5px;\n  color: #ffffff;\n  font-weight: bold;\n  font-size: 12px;\n}\n\n.header-card-style p.date {\n  background-color: rgba(56, 62, 86, 0.8) !important;\n  cursor: pointer;\n  text-align: center;\n  padding: 0.5px 11px !important;\n  border-radius: 20px !important;\n  color: white;\n  position: absolute;\n  top: 15px;\n  right: 18px;\n  font-size: 8px;\n  padding: 2px 8px;\n  background-color: #383e56;\n}\n\n.header-card-style p.date:hover {\n  background-color: #383e56 !important;\n}\n\n.header-card-style ion-toggle {\n  margin-left: 5px;\n}\n\n.header-card-style ion-toggle.date {\n  position: absolute;\n  top: 20px;\n  right: 20px;\n  padding: 2px 8px;\n  --background-checked: #7a49a5;\n}\n\n.header-card-style img {\n  width: 70px;\n  height: 70px;\n  margin-left: 16px;\n  border-radius: 50%;\n  margin-right: 16px;\n}\n\n.toast-scheme {\n  color: white;\n  font-size: 15px;\n  font-family: Roboto;\n  font-weight: bold;\n  text-align: center;\n}\n\n.ion-padding {\n  -webkit-animation: fade 1s ease-in-out;\n          animation: fade 1s ease-in-out;\n}\n\n@-webkit-keyframes fade-in {\n  0% {\n    transform: translateY(-400px);\n    opacity: 0;\n  }\n  100% {\n    transform: translateY(0px);\n    opacity: 1;\n  }\n}\n\n@keyframes fade-in {\n  0% {\n    transform: translateY(-400px);\n    opacity: 0;\n  }\n  100% {\n    transform: translateY(0px);\n    opacity: 1;\n  }\n}\n\n@-webkit-keyframes fade {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n\n@keyframes fade {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZmlsZS9wcm9maWxlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQUNKOztBQUNBO0VBQ0UseUJBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQ0FBQTtFQUNBLG1CQUFBO0FBRUY7O0FBRUE7RUFDRSx5QkFBQTtFQUVBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FBQUY7O0FBRUE7RUFDRSx5QkFBQTtFQUVBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FBQUY7O0FBRUE7RUFFRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FBQUY7O0FBQ0U7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUFDTjs7QUFDRTtFQUNJLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0FBQ047O0FBQ0U7RUFDSSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtBQUNOOztBQUdBO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQUFGOztBQUVBO0VBQ0ksbUJBQUE7RUFDQSxZQUFBO0FBQ0o7O0FBRUM7RUFDRyxpQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtBQUNKOztBQUFJO0VBQ0Usd0JBQUE7QUFFTjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxhQUFBO0VBQ0EsMkNBQUE7QUFDRjs7QUFDRTtFQUNFLFlBQUE7RUFDQSxjQUFBO0FBQ0o7O0FBRUU7RUFDRSxZQUFBO0VBQ0EsZUFBQTtBQUFKOztBQUlBO0VBQ0UsYUFBQTtFQUNBLGlDQUFBO1VBQUEseUJBQUE7QUFERjs7QUFHRTtFQUNFLGNBQUE7QUFESjs7QUFLQTtFQUNFLFVBQUE7QUFGRjs7QUFLQTtFQUNFLG1CQUFBO0VBQ0Usb0JBQUE7RUFDQSwyQkFBQTtFQUNBLDBCQUFBO0VBQ0EseUJBQUE7RUFDQSx3QkFBQTtBQUZKOztBQUlJO0VBRUksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0NBQUE7RUFDQSwyRUFBQTtFQUNFLHFGQUFBO0VBQ0EsNkNBQUE7RUFDQSxzREFBQTtFQUNBLG1CQUFBO0VBQ0YsMkNBQUE7VUFBQSxtQ0FBQTtBQUZSOztBQUlRO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FBRlY7O0FBS1E7RUFDRyxnQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUFIWDs7QUFJVztFQUNDLGtEQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsOEJBQUE7RUFDQSw4QkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7QUFGWjs7QUFHWTtFQUNFLG9DQUFBO0FBRGQ7O0FBTVE7RUFDRSxnQkFBQTtBQUpWOztBQUtXO0VBQ0Msa0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsNkJBQUE7QUFIWjs7QUFRUTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FBTlY7O0FBVUk7RUFDRSxZQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQVBOOztBQVVJO0VBQ0Usc0NBQUE7VUFBQSw4QkFBQTtBQVBOOztBQVVJO0VBQ0U7SUFDRSw2QkFBQTtJQUNBLFVBQUE7RUFQTjtFQVNJO0lBQ0UsMEJBQUE7SUFDQSxVQUFBO0VBUE47QUFDRjs7QUFESTtFQUNFO0lBQ0UsNkJBQUE7SUFDQSxVQUFBO0VBUE47RUFTSTtJQUNFLDBCQUFBO0lBQ0EsVUFBQTtFQVBOO0FBQ0Y7O0FBVUk7RUFDRTtJQUNFLFVBQUE7RUFSTjtFQVVJO0lBQ0UsVUFBQTtFQVJOO0FBQ0Y7O0FBRUk7RUFDRTtJQUNFLFVBQUE7RUFSTjtFQVVJO0lBQ0UsVUFBQTtFQVJOO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9wcm9maWxlL3Byb2ZpbGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRpdGxlLXN0eWxle1xyXG4gICAgbWFyZ2luLXRvcDogMjVweDsgXHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBtYXJnaW46IDEwcHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtZmFtaWx5OiBSb2JvdG87XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbn1cclxuLmNhcmQtc3R5bGV7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDU2LCA1NiwgNTUpO1xyXG4gIGhlaWdodDo4MHB4O1xyXG4gIHdpZHRoOiA5NCU7XHJcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICBtYXJnaW4tbGVmdDogMTBweDtcclxuICBib3gtc2hhZG93OiA2cHggNnB4IDJweCAxcHggcmdiKDIxMSwgMjA4LCAyMDgpO1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgXHJcbn1cclxuXHJcbi53b3JrLXN0YXR1cy1iZ3tcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiNmODgxMTE7XHJcblxyXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcclxuICBmb250LWZhbWlseTogUm9ib3RvO1xyXG4gIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgZm9udC1zaXplOiAxMnB4IDtcclxuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XHJcbiAgd2lkdGg6IDQ1cHg7XHJcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gIHBhZGRpbmctdG9wOiAxLjJweDtcclxuICBoZWlnaHQ6IDE4cHg7XHJcbiAgZmxvYXQ6IHJpZ2h0O31cclxuXHJcbi5sZWF2ZS1zdGF0dXMtYmd7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjpyZ2JhKDU2LCA2MiwgODYsIDEpO1xyXG4gIFxyXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcclxuICBmb250LWZhbWlseTogUm9ib3RvO1xyXG4gIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgZm9udC1zaXplOiAxMnB4IDtcclxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgd2lkdGg6IDU2cHg7XHJcbiAgcGFkZGluZy1sZWZ0OiA4cHg7XHJcbiAgcGFkZGluZy10b3A6IDNweDtcclxuICBoZWlnaHQ6IDIxcHg7XHJcbiAgZmxvYXQ6IHJpZ2h0O31cclxuXHJcbi5jYXJkLWNvbnRlbnR7XHJcbiAgIFxyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDEwcHg7XHJcbiAgbGVmdDogMTVweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgaW1ne1xyXG4gICAgICB3aWR0aDogNjBweDtcclxuICAgICAgaGVpZ2h0OiA2MHB4O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgIGJvcmRlci1jb2xvcjogd2hpdGU7XHJcbiAgfVxyXG4gIGgye1xyXG4gICAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbiAgfVxyXG4gIHB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgY29sb3I6ICNlNGU0ZTQ7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiAxMDA7XHJcbiAgICAgIGxldHRlci1zcGFjaW5nOiAwLjRweDtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbiAgfVxyXG59XHJcblxyXG4udGl0bGUtc3R5bGUtbm9ybWFse1xyXG4gIG1hcmdpbi10b3A6IDI1cHg7IFxyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICBtYXJnaW46IDEwcHg7XHJcbiAgZm9udC1mYW1pbHk6IFJvYm90bztcclxuICBjb2xvcjogYmxhY2s7XHJcbn1cclxuLm5vcm1hbC10ZXh0e1xyXG4gICAgZm9udC1mYW1pbHk6IFJvYm90bztcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIFxyXG59XHJcbiAuYXJyb3ctc3R5bGV7XHJcbiAgICBmb250LXNpemU6IDEuMnJlbTtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIG1hcmdpbi10b3A6IC0xOHB4O1xyXG4gICAgdHJhbnNpdGlvbjogLjVzIGVhc2UgYWxsO1xyXG4gICAgJi5leHBhbmRlZCB7XHJcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcclxuICAgIH1cclxufVxyXG5cclxuLmNhcmQtaGVhZGVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIHBhZGRpbmc6IDI1cHg7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwwLDAsMC4yKTtcclxuXHJcbiAgcCB7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBtYXJnaW4tbGVmdDogMDtcclxuICB9XHJcblxyXG4gIC5hcnJvdy1zdHlsZSB7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDA7XHJcbiAgfVxyXG59XHJcblxyXG4uY2FyZC1ib2R5IHtcclxuICBkaXNwbGF5OiBub25lO1xyXG4gIGFuaW1hdGlvbjogZmFkZSAuNXMgZWFzZTtcclxuXHJcbiAgJi5kaXNwbGF5IHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gIH1cclxufVxyXG5cclxuLnBhZGRpbmctMCB7XHJcbiAgcGFkZGluZzogMFxyXG59XHJcblxyXG4ucGFkZGluZy1leHBhbmRlZHtcclxuICBwYWRkaW5nLWxlZnQ6IHVuc2V0O1xyXG4gICAgcGFkZGluZy1yaWdodDogdW5zZXQ7XHJcbiAgICAtd2Via2l0LXBhZGRpbmctc3RhcnQ6IDE2cHg7XHJcbiAgICBwYWRkaW5nLWlubGluZS1zdGFydDogMTZweDtcclxuICAgIC13ZWJraXQtcGFkZGluZy1lbmQ6IDE2cHg7XHJcbiAgICBwYWRkaW5nLWlubGluZS1lbmQ6IDE2cHg7XHJcbn1cclxuICAgIC5oZWFkZXItY2FyZC1zdHlsZXtcclxuICAgIFxyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBoZWlnaHQ6IDEyMHB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMTBweCAxMHB4IDEwcHggI2FhYWFhYTtcclxuICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQocmdiYSgyNDAsIDE2NSwgMCwgMC44KSwgcmdiYSgyNDAsIDE2NSwgMCwgMC44KSk7XHJcbiAgICAgICAgICBib3gtc2hhZG93OiAwIDhweCAyMHB4IDAgcmdiYSgyNDQsIDIwOSwgOTYsIDAuNSksIDAgMnB4IDRweCAwIHJnYmEoMjQ0LCAyMDksIDk2LCAwLjUpO1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHJnYigyNTUsIDE1NCwgMiksIHJnYigyNDAsIDEzNiwgMCkpO1xyXG4gICAgICAgICAgYm94LXNoYWRvdzogMCAtM3B4IDE0cHggMCByZ2IoMjQ0LDIwOSw5NiksIDAgM3B4IDlweCAwIHJnYigyNDQsMjA5LDk2KTtcclxuICAgICAgICAgIGJhY2tncm91bmQ6ICNmYThhMmY7XHJcbiAgICAgICAgYW5pbWF0aW9uOiBmYWRlLWluIDAuOHMgZWFzZS1pbi1vdXQ7XHJcbiAgICAgICAvLyBhbmltYXRpb24tZGVsYXk6IDNzO1xyXG4gICAgICAgIGgxIHtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgICAgICAgIG1hcmdpbi1sZWZ0OiA1cHg7XHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICBwe1xyXG4gICAgICAgICAgIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbiAgICAgICAgICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgICYuZGF0ZSB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNTYsIDYyLCA4NiwgMC44KSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgcGFkZGluZzogMC41cHggMTFweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIGNvbG9yOndoaXRlO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIHRvcDogMTVweDtcclxuICAgICAgICAgICAgcmlnaHQ6IDE4cHg7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogOHB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAycHggOHB4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzgzZTU2O1xyXG4gICAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDU2LCA2MiwgODYsIDEpICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpb24tdG9nZ2xle1xyXG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDVweDtcclxuICAgICAgICAgICAmLmRhdGUge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIHRvcDogMjBweDtcclxuICAgICAgICAgICAgcmlnaHQ6IDIwcHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDJweCA4cHg7XHJcbiAgICAgICAgICAgIC0tYmFja2dyb3VuZC1jaGVja2VkOiAjN2E0OWE1O1xyXG5cclxuXHJcbiAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpbWcge1xyXG4gICAgICAgICAgd2lkdGg6IDcwcHg7XHJcbiAgICAgICAgICBoZWlnaHQ6IDcwcHg7XHJcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMTZweDtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgIG1hcmdpbi1yaWdodDogMTZweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLnRvYXN0LXNjaGVtZXtcclxuICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiBSb2JvdG87XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgLmlvbi1wYWRkaW5nIHtcclxuICAgICAgYW5pbWF0aW9uOiBmYWRlIDFzIGVhc2UtaW4tb3V0O1xyXG4gICAgfVxyXG5cclxuICAgIEBrZXlmcmFtZXMgZmFkZS1pbntcclxuICAgICAgMCUge1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNDAwcHgpO1xyXG4gICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgIH1cclxuICAgICAgMTAwJSB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCk7XHJcbiAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIEBrZXlmcmFtZXMgZmFkZXtcclxuICAgICAgMCUge1xyXG4gICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgIH1cclxuICAgICAgMTAwJSB7XHJcbiAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcblxyXG5cclxuIl19 */";
      /***/
    },

    /***/
    "./src/app/profile/profile.page.ts":
    /*!*****************************************!*\
      !*** ./src/app/profile/profile.page.ts ***!
      \*****************************************/

    /*! exports provided: ProfilePage */

    /***/
    function srcAppProfileProfilePageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProfilePage", function () {
        return ProfilePage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _qrattendance_qrattendance_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../qrattendance/qrattendance.page */
      "./src/app/qrattendance/qrattendance.page.ts");
      /* harmony import */


      var _Services_attendance_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../Services/attendance.service */
      "./src/app/Services/attendance.service.ts");
      /* harmony import */


      var _Services_authentication_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../Services/authentication.service */
      "./src/app/Services/authentication.service.ts");
      /* harmony import */


      var _Services_employee_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../Services/employee.service */
      "./src/app/Services/employee.service.ts");
      /* harmony import */


      var _Services_shared_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../Services/shared.service */
      "./src/app/Services/shared.service.ts");
      /* harmony import */


      var _Services_user_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../Services/user.service */
      "./src/app/Services/user.service.ts");
      /* harmony import */


      var _Settings_AppSettings__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../Settings/AppSettings */
      "./src/app/Settings/AppSettings.ts");

      var ProfilePage = /*#__PURE__*/function () {
        function ProfilePage(authService, actionSheetController, modalController, userService, employeeService, attendanceSerice, sharedService) {
          _classCallCheck(this, ProfilePage);

          this.authService = authService;
          this.actionSheetController = actionSheetController;
          this.modalController = modalController;
          this.userService = userService;
          this.employeeService = employeeService;
          this.attendanceSerice = attendanceSerice;
          this.sharedService = sharedService;
          this.myAttendanceList = [];
          this.admin = this.sharedService.verifyAdmin();
          this.currentUser = _Settings_AppSettings__WEBPACK_IMPORTED_MODULE_9__["AppSettings"].details;
          this.today = new Date().toISOString().slice(0, 10);
          console.log(this.currentUser);
        }

        _createClass(ProfilePage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            if (!this.admin) {
              this.showUser = true;
            }

            this.currentUser = _Settings_AppSettings__WEBPACK_IMPORTED_MODULE_9__["AppSettings"].details;
            this.getMyAttendaces();
          }
        }, {
          key: "displayActionSheet",
          value: function displayActionSheet() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this = this;

              var actionSheet;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.actionSheetController.create({
                        cssClass: 'my-custom-class',
                        buttons: [{
                          text: 'Log out',
                          icon: 'close',
                          handler: function handler() {
                            _this.logOut();
                          }
                        }]
                      });

                    case 2:
                      actionSheet = _context.sent;
                      _context.next = 5;
                      return actionSheet.present();

                    case 5:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "doRefresh",
          value: function doRefresh(event) {
            console.log('Begin async operation');
            this.getMyAttendaces();
            setTimeout(function () {
              console.log('Async operation has ended');
              event.target.complete();
            }, 2000);
          }
        }, {
          key: "openMyModalQrScanner",
          value: function openMyModalQrScanner() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var myModal;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.modalController.create({
                        component: _qrattendance_qrattendance_page__WEBPACK_IMPORTED_MODULE_3__["QrattendancePage"],
                        cssClass: 'my-custom-Qr-modal-css'
                      });

                    case 2:
                      myModal = _context2.sent;
                      _context2.next = 5;
                      return myModal.present();

                    case 5:
                      return _context2.abrupt("return", _context2.sent);

                    case 6:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "activateHoliday",
          value: function activateHoliday() {
            var _this2 = this;

            this.userService.CheckHolidayActive(this.currentUser.id).subscribe(function (data) {
              _this2.currentUser.holidayState = 1;
              console.log("ENABLE");
              localStorage.setItem('user', JSON.stringify(_this2.currentUser));
            });
            this.holidayState = false;
          }
        }, {
          key: "disableHoliday",
          value: function disableHoliday() {
            var _this3 = this;

            this.userService.CheckHolidayNotActive(this.currentUser.id).subscribe(function (data) {
              console.log("DISABLE");
              _this3.currentUser.holidayState = 0;
              localStorage.setItem('user', JSON.stringify(_this3.currentUser));
            });
            this.holidayState = true;
          }
        }, {
          key: "getMyAttendaces",
          value: function getMyAttendaces() {
            var _this4 = this;

            this.myAttendanceList = [];
            this.employeeService.getEmployeeByUserId(this.currentUser.id).subscribe(function (data) {
              _this4.attendanceSerice.getAttendanceById(data['0']).subscribe(function (element) {
                _this4.myAttendanceList = element;
              });
            });
          }
        }, {
          key: "logOut",
          value: function logOut() {
            this.authService.logout();
          }
        }]);

        return ProfilePage;
      }();

      ProfilePage.ctorParameters = function () {
        return [{
          type: _Services_authentication_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
        }, {
          type: _Services_user_service__WEBPACK_IMPORTED_MODULE_8__["UserService"]
        }, {
          type: _Services_employee_service__WEBPACK_IMPORTED_MODULE_6__["EmployeeService"]
        }, {
          type: _Services_attendance_service__WEBPACK_IMPORTED_MODULE_4__["AttendanceService"]
        }, {
          type: _Services_shared_service__WEBPACK_IMPORTED_MODULE_7__["SharedService"]
        }];
      };

      ProfilePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-profile',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./profile.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./profile.page.scss */
        "./src/app/profile/profile.page.scss"))["default"]]
      })], ProfilePage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=profile-profile-module-es5.js.map