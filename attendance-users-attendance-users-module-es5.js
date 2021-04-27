(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["attendance-users-attendance-users-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/attendance-users/attendance-users.page.html":
    /*!***************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/attendance-users/attendance-users.page.html ***!
      \***************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppAttendanceUsersAttendanceUsersPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n\n<ion-content style=\"--ion-background-color:#f5f4f4;margin-top: -2px;\">\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n  <div *ngFor=\"let item of items\">\n    <ion-card class=\"header-card-style\" style=\"--ion-background-color:#ffffff; padding: 0 10px;\">\n  \n        <ion-label style=\" margin-top: 2.5%;\" >\n  \n          <div style=\"padding-bottom: 7.5px;\n          border-bottom: 1px solid rgba(255,255,255, 0.8);\n          margin-left: 5px;\">\n            <p style=\" font-size: 16px;\n            text-transform: capitalize;\n            margin-left: 0;\">Today's Attendance</p>\n            \n            <h1 style=\"margin-left: 0; font-size: 13px;\">Here , you can check employees' daily attendance</h1>\n          </div>\n          <ion-row>\n            \n            <p style=\"margin-top: 15px; margin-top: 1.5px;\n            font-weight: unset; font-size: 11px;\">Search and filter results </p>\n            <ion-icon  name=\"chevron-forward-outline\"  [ngClass]=\"(item.expanded ? 'arrow-style expanded' : 'arrow-style')\"  (click)=\"expandItem(item)\"></ion-icon> \n\n\n          </ion-row>\n            \n         \n  \n          <p class=\"date\">{{today}}</p>\n        </ion-label>\n  \n        \n    </ion-card>\n\n    <app-expandable expandheight=\"100px\" [expanded]=\"item.expanded\">\n      <ion-searchbar style=\"--ion-background-color:#e9e6e6;\" #search showCancelButton=\"focus\" debounce=\"500\" (ionChange)=\"ionChange($event)\"></ion-searchbar>\n\n      <p>\n        <ion-chip style=\"border-color: rgb(153, 153, 153);width: 30%;justify-content: center;\" (click)=\"getAllAttendace()\"  color=\"warning\">\n          <ion-label >All</ion-label>\n        </ion-chip>\n        <ion-chip style=\"border-color: white;border: 0.3 solid;width: 30%;justify-content: center;\"(click)=\"getByToday()\"  color=\"warning\">\n          <ion-label >Today</ion-label>\n        </ion-chip>\n        <ion-chip style=\"border-color: white;width: 30%;justify-content: center;\" (click)=\"getByMonth()\"  color=\"warning\">\n          <ion-label>Month</ion-label>\n        </ion-chip>\n     </p>\n    </app-expandable>\n    </div>\n<ion-card  style=\"--ion-background-color:#f5f4f4;margin-top: -2px;\">\n  \n<ion-list *ngFor=\"let attendance of searchedItem\" >\n \n  <ion-card class=\"card-style\">\n    <div class=\"card-content\">\n      <img src={{attendance.photo}}>\n      <ion-label >\n        <h2>{{attendance.firstName+\" \"+attendance.lastName}}</h2>\n        <p>{{attendance.punchTime | date: 'dd/MM/y, H:mm:ss '}}</p>\n      </ion-label>\n    </div>\n    <div [ngClass]=\"(attendance.workState === 1)?'work-status-bg':'leave-status-bg'\">{{attendance.workState === 1 ? 'Entry' : 'Leaving'}}</div>\n  </ion-card>\n  </ion-list>\n</ion-card>\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/Services/attendance.service.ts":
    /*!************************************************!*\
      !*** ./src/app/Services/attendance.service.ts ***!
      \************************************************/

    /*! exports provided: AttendanceService */

    /***/
    function srcAppServicesAttendanceServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AttendanceService", function () {
        return AttendanceService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _Settings_AppSettings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../Settings/AppSettings */
      "./src/app/Settings/AppSettings.ts");

      var AttendanceService = /*#__PURE__*/function () {
        function AttendanceService(httpClient) {
          _classCallCheck(this, AttendanceService);

          this.httpClient = httpClient;
        }

        _createClass(AttendanceService, [{
          key: "addAttendanceByQrCode",
          value: function addAttendanceByQrCode(attendance) {
            return this.httpClient.post(_Settings_AppSettings__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].ATTENDANCE_URL + '/att', attendance);
          }
        }, {
          key: "getAll",
          value: function getAll() {
            return this.httpClient.get(_Settings_AppSettings__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].ATTENDANCE_URL + '/all');
          }
        }, {
          key: "getAttendanceById",
          value: function getAttendanceById(id) {
            return this.httpClient.get(_Settings_AppSettings__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].ATTENDANCE_URL + '/' + id);
          }
        }, {
          key: "getByMonth",
          value: function getByMonth() {
            return this.httpClient.get(_Settings_AppSettings__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].ATTENDANCE_URL + '/month');
          }
        }, {
          key: "getByToday",
          value: function getByToday() {
            return this.httpClient.get(_Settings_AppSettings__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].ATTENDANCE_URL + '/today');
          }
        }, {
          key: "count",
          value: function count() {
            return this.httpClient.get(_Settings_AppSettings__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].ATTENDANCE_URL + '/count');
          }
        }, {
          key: "setWorkTime",
          value: function setWorkTime(start, end) {
            return this.httpClient.post(_Settings_AppSettings__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].ATTENDANCE_URL + '/time' + "?start=".concat(start, "&end=").concat(end), {});
          }
        }, {
          key: "getWorkTime",
          value: function getWorkTime() {
            return this.httpClient.get(_Settings_AppSettings__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].ATTENDANCE_URL + '/get/time');
          }
        }]);

        return AttendanceService;
      }();

      AttendanceService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      };

      AttendanceService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
      })], AttendanceService);
      /***/
    },

    /***/
    "./src/app/attendance-users/attendance-users-routing.module.ts":
    /*!*********************************************************************!*\
      !*** ./src/app/attendance-users/attendance-users-routing.module.ts ***!
      \*********************************************************************/

    /*! exports provided: AttendanceUsersPageRoutingModule */

    /***/
    function srcAppAttendanceUsersAttendanceUsersRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AttendanceUsersPageRoutingModule", function () {
        return AttendanceUsersPageRoutingModule;
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


      var _attendance_users_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./attendance-users.page */
      "./src/app/attendance-users/attendance-users.page.ts");

      var routes = [{
        path: '',
        component: _attendance_users_page__WEBPACK_IMPORTED_MODULE_3__["AttendanceUsersPage"]
      }];

      var AttendanceUsersPageRoutingModule = function AttendanceUsersPageRoutingModule() {
        _classCallCheck(this, AttendanceUsersPageRoutingModule);
      };

      AttendanceUsersPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], AttendanceUsersPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/attendance-users/attendance-users.module.ts":
    /*!*************************************************************!*\
      !*** ./src/app/attendance-users/attendance-users.module.ts ***!
      \*************************************************************/

    /*! exports provided: AttendanceUsersPageModule */

    /***/
    function srcAppAttendanceUsersAttendanceUsersModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AttendanceUsersPageModule", function () {
        return AttendanceUsersPageModule;
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


      var _attendance_users_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./attendance-users-routing.module */
      "./src/app/attendance-users/attendance-users-routing.module.ts");
      /* harmony import */


      var _attendance_users_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./attendance-users.page */
      "./src/app/attendance-users/attendance-users.page.ts");
      /* harmony import */


      var _expandable_expandable_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../expandable/expandable.page */
      "./src/app/expandable/expandable.page.ts");

      var AttendanceUsersPageModule = function AttendanceUsersPageModule() {
        _classCallCheck(this, AttendanceUsersPageModule);
      };

      AttendanceUsersPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _attendance_users_routing_module__WEBPACK_IMPORTED_MODULE_5__["AttendanceUsersPageRoutingModule"]],
        declarations: [_attendance_users_page__WEBPACK_IMPORTED_MODULE_6__["AttendanceUsersPage"], _expandable_expandable_page__WEBPACK_IMPORTED_MODULE_7__["ExpandablePage"]]
      })], AttendanceUsersPageModule);
      /***/
    },

    /***/
    "./src/app/attendance-users/attendance-users.page.scss":
    /*!*************************************************************!*\
      !*** ./src/app/attendance-users/attendance-users.page.scss ***!
      \*************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppAttendanceUsersAttendanceUsersPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".card-style {\n  background-color: #383837;\n  height: 80px;\n  width: 94%;\n  border-radius: 15px;\n  margin-left: 10px;\n  box-shadow: 6px 6px 2px 1px #d3d0d0;\n  margin-bottom: 10px;\n}\n\n.card-header {\n  display: flex;\n  padding: 25px;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.2);\n}\n\n.card-header p {\n  margin: auto;\n  margin-left: 0;\n}\n\n.card-header .arrow-style {\n  margin: auto;\n  margin-right: 0;\n}\n\n.card-body {\n  display: none;\n  -webkit-animation: fade 0.5s ease;\n          animation: fade 0.5s ease;\n}\n\n.card-body.display {\n  display: block;\n}\n\n.padding-0 {\n  padding: 0;\n}\n\n.padding-expanded {\n  padding-left: unset;\n  padding-right: unset;\n  -webkit-padding-start: 16px;\n  padding-inline-start: 16px;\n  -webkit-padding-end: 16px;\n  padding-inline-end: 16px;\n}\n\n.header-card-style {\n  display: flex;\n  align-items: center;\n  height: 100px;\n  border-radius: 15px;\n  box-shadow: 10px 10px 10px #aaaaaa;\n  background: linear-gradient(rgba(240, 165, 0, 0.8), rgba(240, 165, 0, 0.8));\n  box-shadow: 0 8px 20px 0 rgba(244, 209, 96, 0.5), 0 2px 4px 0 rgba(244, 209, 96, 0.5);\n  background: linear-gradient(#ff9a02, #f08800);\n  box-shadow: 0 -3px 14px 0 #f4d160, 0 3px 9px 0 #f4d160;\n  background: #fa8a2f;\n  -webkit-animation: fade-in 0.8s ease-in-out;\n          animation: fade-in 0.8s ease-in-out;\n}\n\n.header-card-style h1 {\n  font-weight: 300;\n  font-size: 16px;\n  color: #ffffff;\n  margin-left: 5px;\n}\n\n.header-card-style p {\n  margin-left: 5px;\n  color: #ffffff;\n  font-weight: bold;\n  font-size: 12px;\n}\n\n.header-card-style p.date {\n  background-color: rgba(56, 62, 86, 0.8) !important;\n  cursor: pointer;\n  text-align: center;\n  padding: 0.5px 11px !important;\n  border-radius: 20px !important;\n  color: white;\n  position: absolute;\n  top: 15px;\n  right: 18px;\n  font-size: 8px;\n  padding: 2px 8px;\n  background-color: #383e56;\n}\n\n.header-card-style p.date:hover {\n  background-color: #383e56 !important;\n}\n\n.header-card-style img {\n  width: 70px;\n  height: 70px;\n  margin-left: 16px;\n  border-radius: 50%;\n  margin-right: 16px;\n}\n\n.toast-scheme {\n  color: white;\n  font-size: 15px;\n  font-family: Roboto;\n  font-weight: bold;\n  text-align: center;\n}\n\n.ion-padding {\n  -webkit-animation: fade 1s ease-in-out;\n          animation: fade 1s ease-in-out;\n}\n\n@-webkit-keyframes fade-in {\n  0% {\n    transform: translateY(-400px);\n    opacity: 0;\n  }\n  100% {\n    transform: translateY(0px);\n    opacity: 1;\n  }\n}\n\n@keyframes fade-in {\n  0% {\n    transform: translateY(-400px);\n    opacity: 0;\n  }\n  100% {\n    transform: translateY(0px);\n    opacity: 1;\n  }\n}\n\n@-webkit-keyframes fade {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n\n@keyframes fade {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n\n.card-content {\n  position: absolute;\n  top: 10px;\n  left: 15px;\n  display: flex;\n  align-items: center;\n}\n\n.card-content img {\n  width: 60px;\n  height: 60px;\n  border-radius: 50%;\n  border-color: white;\n}\n\n.card-content h2 {\n  font-weight: 300;\n  color: #fff;\n  margin-left: 15px;\n}\n\n.card-content p {\n  font-size: 12px;\n  color: #e4e4e4;\n  font-weight: 100;\n  letter-spacing: 0.4px;\n  margin-left: 15px;\n}\n\n.card-info {\n  position: absolute;\n  top: 85px;\n  left: 15px;\n  display: flex;\n}\n\n.card-info h2 {\n  font-weight: 300;\n  color: #fff;\n  margin-left: 15px;\n}\n\n.card-info p {\n  font-size: 12px;\n  color: #e4e4e4;\n  font-weight: 100;\n  letter-spacing: 0.4px;\n  margin-left: 15px;\n}\n\n.card-info-to {\n  position: absolute;\n  top: 110px;\n  left: 185px;\n  display: flex;\n}\n\n.card-info-to h2 {\n  font-weight: 300;\n  color: #fff;\n  margin-left: 15px;\n}\n\n.card-info-to p {\n  font-size: 12px;\n  color: #e4e4e4;\n  font-weight: 100;\n  letter-spacing: 0.4px;\n  margin-left: 15px;\n}\n\n.normal-text {\n  font-family: Roboto;\n}\n\n.work-status-bg {\n  background-color: #f88111;\n  border-radius: 20px;\n  color: white;\n  font-family: Roboto;\n  margin-top: 15px;\n  font-size: 12px;\n  margin-right: 15px;\n  width: 45px;\n  padding-left: 10px;\n  padding-top: 1.2px;\n  height: 18px;\n  float: right;\n}\n\n.leave-status-bg {\n  background-color: #383e56;\n  border-radius: 20px;\n  color: white;\n  font-family: Roboto;\n  margin-top: 15px;\n  font-size: 12px;\n  margin-right: 10px;\n  width: 56px;\n  padding-left: 8px;\n  padding-top: 3px;\n  height: 21px;\n  float: right;\n}\n\n.btn-card {\n  font-family: Roboto;\n  font-size: 15px;\n  margin-left: 165px;\n  border-radius: 15px;\n  height: 35px;\n  margin-right: -60px;\n  margin-top: 45px;\n  color: white;\n}\n\n.btn-card-match {\n  font-family: Roboto;\n  font-size: 15px;\n  margin-left: 165px;\n  border-radius: 15px;\n  height: 33px;\n  width: 149px;\n  margin-right: -60px;\n  margin-top: 5px;\n  color: white;\n}\n\n.add_user_div {\n  height: 40%;\n  width: 80%;\n  margin-left: auto;\n  margin-right: auto;\n  margin-bottom: auto;\n  border-radius: 30px;\n}\n\n.input-underline {\n  margin-top: 20px;\n  border: none;\n  box-shadow: none;\n  border-bottom: 2px solid rgba(255, 255, 255, 0.5);\n  color: black;\n  border-radius: 0;\n  -webkit-text-emphasis-color: black;\n          text-emphasis-color: black;\n  font-family: Roboto;\n}\n\n#form {\n  margin-top: 10%;\n  padding-left: 30px;\n  padding-right: 30px;\n}\n\n.ion-btn {\n  margin-top: 25px;\n  height: 48px;\n  font-size: 18px;\n  border-radius: 50px;\n  border: 2px solid rgba(255, 255, 255, 0.8);\n  font-size: 18px;\n  font-family: Arial, Helvetica, sans-serif;\n  line-height: 20px;\n}\n\n.ion-btn:hover,\n.ion-btn:focus,\n.ion-btn:active,\n.ion-btn:visited {\n  color: white;\n  border: 2px solid white;\n  outline: none;\n}\n\n.arrow-style {\n  margin-top: 4px;\n  margin-left: 180px;\n  color: white;\n}\n\n.arrow-style.expanded {\n  transform: rotate(90deg);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXR0ZW5kYW5jZS11c2Vycy9hdHRlbmRhbmNlLXVzZXJzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUNBQUE7RUFDQSxtQkFBQTtBQUNKOztBQUVBO0VBQ0ksYUFBQTtFQUNBLGFBQUE7RUFDQSwyQ0FBQTtBQUNKOztBQUNJO0VBQ0UsWUFBQTtFQUNBLGNBQUE7QUFDTjs7QUFFSTtFQUNFLFlBQUE7RUFDQSxlQUFBO0FBQU47O0FBSUU7RUFDRSxhQUFBO0VBQ0EsaUNBQUE7VUFBQSx5QkFBQTtBQURKOztBQUdJO0VBQ0UsY0FBQTtBQUROOztBQUtFO0VBQ0UsVUFBQTtBQUZKOztBQUtFO0VBQ0UsbUJBQUE7RUFDRSxvQkFBQTtFQUNBLDJCQUFBO0VBQ0EsMEJBQUE7RUFDQSx5QkFBQTtFQUNBLHdCQUFBO0FBRk47O0FBSU07RUFFSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQ0FBQTtFQUNBLDJFQUFBO0VBQ0EscUZBQUE7RUFDQSw2Q0FBQTtFQUNBLHNEQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQ0FBQTtVQUFBLG1DQUFBO0FBRlY7O0FBSVU7RUFDRSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUFGWjs7QUFLVTtFQUNHLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQUhiOztBQUlhO0VBQ0Msa0RBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSw4QkFBQTtFQUNBLDhCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtBQUZkOztBQUdjO0VBQ0Usb0NBQUE7QUFEaEI7O0FBS1U7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VB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QkFBQTtFQUFtQixZQUFBO0FBRnZDOztBQUdJO0VBQ0ksd0JBQUE7QUFEUiIsImZpbGUiOiJzcmMvYXBwL2F0dGVuZGFuY2UtdXNlcnMvYXR0ZW5kYW5jZS11c2Vycy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZC1zdHlsZXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig1NiwgNTYsIDU1KTtcclxuICAgIGhlaWdodDo4MHB4O1xyXG4gICAgd2lkdGg6IDk0JTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgIGJveC1zaGFkb3c6IDZweCA2cHggMnB4IDFweCByZ2IoMjExLCAyMDgsIDIwOCk7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgXHJcbn1cclxuLmNhcmQtaGVhZGVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBwYWRkaW5nOiAyNXB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwwLDAsMC4yKTtcclxuICBcclxuICAgIHAge1xyXG4gICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAwO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgLmFycm93LXN0eWxlIHtcclxuICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDA7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIC5jYXJkLWJvZHkge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICAgIGFuaW1hdGlvbjogZmFkZSAuNXMgZWFzZTtcclxuICBcclxuICAgICYuZGlzcGxheSB7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAucGFkZGluZy0wIHtcclxuICAgIHBhZGRpbmc6IDBcclxuICB9XHJcbiAgXHJcbiAgLnBhZGRpbmctZXhwYW5kZWR7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IHVuc2V0O1xyXG4gICAgICBwYWRkaW5nLXJpZ2h0OiB1bnNldDtcclxuICAgICAgLXdlYmtpdC1wYWRkaW5nLXN0YXJ0OiAxNnB4O1xyXG4gICAgICBwYWRkaW5nLWlubGluZS1zdGFydDogMTZweDtcclxuICAgICAgLXdlYmtpdC1wYWRkaW5nLWVuZDogMTZweDtcclxuICAgICAgcGFkZGluZy1pbmxpbmUtZW5kOiAxNnB4O1xyXG4gIH1cclxuICAgICAgLmhlYWRlci1jYXJkLXN0eWxle1xyXG4gICAgICBcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgaGVpZ2h0OiAxMDBweDtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgICAgICAgICBib3gtc2hhZG93OiAxMHB4IDEwcHggMTBweCAjYWFhYWFhO1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHJnYmEoMjQwLCAxNjUsIDAsIDAuOCksIHJnYmEoMjQwLCAxNjUsIDAsIDAuOCkpO1xyXG4gICAgICAgICAgYm94LXNoYWRvdzogMCA4cHggMjBweCAwIHJnYmEoMjQ0LCAyMDksIDk2LCAwLjUpLCAwIDJweCA0cHggMCByZ2JhKDI0NCwgMjA5LCA5NiwgMC41KTtcclxuICAgICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChyZ2IoMjU1LCAxNTQsIDIpLCByZ2IoMjQwLCAxMzYsIDApKTtcclxuICAgICAgICAgIGJveC1zaGFkb3c6IDAgLTNweCAxNHB4IDAgcmdiKDI0NCwyMDksOTYpLCAwIDNweCA5cHggMCByZ2IoMjQ0LDIwOSw5Nik7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmE4YTJmO1xyXG4gICAgICAgICAgYW5pbWF0aW9uOiBmYWRlLWluIDAuOHMgZWFzZS1pbi1vdXQ7XHJcbiAgICAgICAgIC8vIGFuaW1hdGlvbi1kZWxheTogM3M7XHJcbiAgICAgICAgICBoMSB7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbiAgXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBwe1xyXG4gICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDVweDtcclxuICAgICAgICAgICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICAgICAmLmRhdGUge1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNTYsIDYyLCA4NiwgMC44KSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgcGFkZGluZzogMC41cHggMTFweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICBjb2xvcjp3aGl0ZTtcclxuICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgdG9wOiAxNXB4O1xyXG4gICAgICAgICAgICAgIHJpZ2h0OiAxOHB4O1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogOHB4O1xyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IDJweCA4cHg7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzM4M2U1NjtcclxuICAgICAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNTYsIDYyLCA4NiwgMSkgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICB3aWR0aDogNzBweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiA3MHB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMTZweDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDE2cHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgIFxyXG4gICAgICAgICAgXHJcbiAgICAgIH1cclxuICBcclxuICAgICAgLnRvYXN0LXNjaGVtZXtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBSb2JvdG87XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICB9XHJcbiAgXHJcbiAgICAgIC5pb24tcGFkZGluZyB7XHJcbiAgICAgICAgYW5pbWF0aW9uOiBmYWRlIDFzIGVhc2UtaW4tb3V0O1xyXG4gICAgICB9XHJcbiAgXHJcbiAgICAgIEBrZXlmcmFtZXMgZmFkZS1pbntcclxuICAgICAgICAwJSB7XHJcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTQwMHB4KTtcclxuICAgICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIDEwMCUge1xyXG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCk7XHJcbiAgICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gIFxyXG4gICAgICBAa2V5ZnJhbWVzIGZhZGV7XHJcbiAgICAgICAgMCUge1xyXG4gICAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgMTAwJSB7XHJcbiAgICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4uY2FyZC1jb250ZW50e1xyXG4gICBcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMTBweDtcclxuICAgIGxlZnQ6IDE1cHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGltZ3tcclxuICAgICAgICB3aWR0aDogNjBweDtcclxuICAgICAgICBoZWlnaHQ6IDYwcHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgIGJvcmRlci1jb2xvcjogd2hpdGU7XHJcbiAgICB9XHJcbiAgICBoMntcclxuICAgICAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG4gICAgfVxyXG4gICAgcHtcclxuICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgY29sb3I6ICNlNGU0ZTQ7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDEwMDtcclxuICAgICAgICBsZXR0ZXItc3BhY2luZzogMC40cHg7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbiAgICB9XHJcbn1cclxuLmNhcmQtaW5mb3tcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogODVweDtcclxuICAgIGxlZnQ6IDE1cHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgaDJ7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMTVweDtcclxuICAgIH1cclxuICAgIHB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgIGNvbG9yOiAjZTRlNGU0O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiAxMDA7XHJcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuNHB4O1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG4gICAgfVxyXG59XHJcbi5jYXJkLWluZm8tdG97XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDExMHB4O1xyXG4gICAgbGVmdDogMTg1cHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgaDJ7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMTVweDtcclxuICAgIH1cclxuICAgIHB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgIGNvbG9yOiAjZTRlNGU0O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiAxMDA7XHJcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuNHB4O1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG5cclxuICAgIH1cclxuICAgICAgICAgIFxyXG59XHJcblxyXG4ubm9ybWFsLXRleHR7XHJcbiAgICBmb250LWZhbWlseTogUm9ib3RvO1xyXG59XHJcbi53b3JrLXN0YXR1cy1iZ3tcclxuICAgIGJhY2tncm91bmQtY29sb3I6I2Y4ODExMTtcclxuXHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcclxuICAgIGZvbnQtZmFtaWx5OiBSb2JvdG87XHJcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gICAgZm9udC1zaXplOiAxMnB4IDtcclxuICAgIG1hcmdpbi1yaWdodDogMTVweDtcclxuICAgIHdpZHRoOiA0NXB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gICAgcGFkZGluZy10b3A6IDEuMnB4O1xyXG4gICAgaGVpZ2h0OiAxOHB4O1xyXG4gICAgZmxvYXQ6IHJpZ2h0O31cclxuXHJcbi5sZWF2ZS1zdGF0dXMtYmd7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoNTYsIDYyLCA4NiwgMSk7XHJcbiAgICBcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xyXG4gICAgZm9udC1mYW1pbHk6IFJvYm90bztcclxuICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgICBmb250LXNpemU6IDEycHggO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgd2lkdGg6IDU2cHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDhweDtcclxuICAgIHBhZGRpbmctdG9wOiAzcHg7XHJcbiAgICBoZWlnaHQ6IDIxcHg7XHJcbiAgICBmbG9hdDogcmlnaHQ7fVxyXG5cclxuLmJ0bi1jYXJke1xyXG4gICAgZm9udC1mYW1pbHk6IFJvYm90bztcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAxNjVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgICBoZWlnaHQ6IDM1cHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IC02MHB4O1xyXG4gICAgbWFyZ2luLXRvcDogNDVweDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG4uYnRuLWNhcmQtbWF0Y2h7XHJcbiAgICBmb250LWZhbWlseTogUm9ib3RvO1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE2NXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgIGhlaWdodDogMzNweDtcclxuICAgIHdpZHRoOiAxNDlweDtcclxuICAgIG1hcmdpbi1yaWdodDogLTYwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuLmFkZF91c2VyX2RpdntcclxuICAgIGhlaWdodDogNDAlO1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogYXV0bztcclxuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XHJcbiAgICBcclxufVxyXG4uaW5wdXQtdW5kZXJsaW5lIHtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICB0ZXh0LWVtcGhhc2lzLWNvbG9yOiBibGFjaztcclxuICAgIGZvbnQtZmFtaWx5OiBSb2JvdG87XHJcbiAgICB9XHJcbiAgI2Zvcm0ge1xyXG4gICAgbWFyZ2luLXRvcDogMTAlO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAzMHB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMzBweDtcclxuICBcclxuICB9XHJcbiAgLmlvbi1idG4ge1xyXG4gIFxyXG4gICAgbWFyZ2luLXRvcDogMjVweDtcclxuICAgIGhlaWdodDogNDhweDtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogNTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcclxuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gIH1cclxuICAuaW9uLWJ0bjpob3ZlcixcclxuICAuaW9uLWJ0bjpmb2N1cyxcclxuICAuaW9uLWJ0bjphY3RpdmUsXHJcbiAgLmlvbi1idG46dmlzaXRlZCB7XHJcbiAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAxKTtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMSk7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gIH1cclxuICAuYXJyb3ctc3R5bGV7XHJcblxyXG4gICAgbWFyZ2luLXRvcDogNHB4O21hcmdpbi1sZWZ0OiAxODBweDtjb2xvcjogd2hpdGU7XHJcbiAgICAmLmV4cGFuZGVkIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XHJcbiAgICAgIH1cclxufSJdfQ== */";
      /***/
    },

    /***/
    "./src/app/attendance-users/attendance-users.page.ts":
    /*!***********************************************************!*\
      !*** ./src/app/attendance-users/attendance-users.page.ts ***!
      \***********************************************************/

    /*! exports provided: AttendanceUsersPage */

    /***/
    function srcAppAttendanceUsersAttendanceUsersPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AttendanceUsersPage", function () {
        return AttendanceUsersPage;
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


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _Services_attendance_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../Services/attendance.service */
      "./src/app/Services/attendance.service.ts");
      /* harmony import */


      var _Services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../Services/user.service */
      "./src/app/Services/user.service.ts");

      var AttendanceUsersPage = /*#__PURE__*/function () {
        function AttendanceUsersPage(attendanceSerice, route, router, userService, alertController, toastController, modalController) {
          _classCallCheck(this, AttendanceUsersPage);

          this.attendanceSerice = attendanceSerice;
          this.route = route;
          this.router = router;
          this.userService = userService;
          this.alertController = alertController;
          this.toastController = toastController;
          this.modalController = modalController;
          this.attendanceList = [];
          this.searchedItem = [];
          this.items = [{
            expanded: false
          }];
          this.searchedItem = this.attendanceList;
          this.getByToday();
          this.today = new Date().toISOString().slice(0, 10);
        }

        _createClass(AttendanceUsersPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ionViewDidEnter",
          value: function ionViewDidEnter() {
            var _this = this;

            setTimeout(function () {
              _this.search.setFocus();
            });
          }
        }, {
          key: "ionChange",
          value: function ionChange(event) {
            var val = event.target.value;
            this.searchedItem = this.attendanceList;

            if (val && val.trim() != '') {
              this.searchedItem = this.searchedItem.filter(function (item) {
                console.log(item.firstName);
                return item.firstName.toLowerCase().indexOf(val.toLowerCase()) > -1;
              });
            }
          }
        }, {
          key: "doRefresh",
          value: function doRefresh(event) {
            console.log('Begin async operation');
            this.getByToday();
            setTimeout(function () {
              console.log('Async operation has ended');
              event.target.complete();
            }, 2000);
          }
        }, {
          key: "getAllAttendace",
          value: function getAllAttendace() {
            var _this2 = this;

            this.attendanceList = [];
            this.attendanceSerice.getAll().subscribe(function (data) {
              console.log(data);

              for (var index = 0; index < data['length']; index++) {
                var element = data[index];
                var item = {
                  'firstName': element[0],
                  'lastName': element[1],
                  'photo': element[2],
                  'workState': element[3],
                  'punchTime': element[4]
                };

                _this2.attendanceList.push(item);

                _this2.searchedItem = _this2.attendanceList;
                console.log(_this2.attendanceList);
              }
            });
          }
        }, {
          key: "getByToday",
          value: function getByToday() {
            var _this3 = this;

            this.attendanceList = [];
            this.attendanceSerice.getByToday().subscribe(function (data) {
              for (var index = 0; index < data['length']; index++) {
                var element = data[index];
                var item = {
                  'firstName': element[0],
                  'lastName': element[1],
                  'photo': element[2],
                  'workState': element[3],
                  'punchTime': element[4]
                };

                _this3.attendanceList.push(item);

                _this3.searchedItem = _this3.attendanceList;
                console.log(_this3.attendanceList);
              }
            });
          }
        }, {
          key: "getByMonth",
          value: function getByMonth() {
            var _this4 = this;

            this.attendanceList = [];
            this.attendanceSerice.getByMonth().subscribe(function (data) {
              for (var index = 0; index < data['length']; index++) {
                var element = data[index];
                var item = {
                  'firstName': element[0],
                  'lastName': element[1],
                  'photo': element[2],
                  'workState': element[3],
                  'punchTime': element[4]
                };

                _this4.attendanceList.push(item);

                _this4.searchedItem = _this4.attendanceList;
              }
            });
          }
        }, {
          key: "expandItem",
          value: function expandItem(item) {
            if (item.expanded) {
              item.expanded = false;
            } else {
              this.items.map(function (listItem) {
                if (item == listItem) {
                  listItem.expanded = !listItem.expanded;
                } else {
                  listItem.expanded = false;
                }

                return listItem;
              });
            }
          }
        }]);

        return AttendanceUsersPage;
      }();

      AttendanceUsersPage.ctorParameters = function () {
        return [{
          type: _Services_attendance_service__WEBPACK_IMPORTED_MODULE_4__["AttendanceService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _Services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"]
        }];
      };

      AttendanceUsersPage.propDecorators = {
        search: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['search', {
            "static": false
          }]
        }]
      };
      AttendanceUsersPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-attendance-users',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./attendance-users.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/attendance-users/attendance-users.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./attendance-users.page.scss */
        "./src/app/attendance-users/attendance-users.page.scss"))["default"]]
      })], AttendanceUsersPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=attendance-users-attendance-users-module-es5.js.map