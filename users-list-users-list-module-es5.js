(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["users-list-users-list-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/send-token/send-token.component.html":
    /*!********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/send-token/send-token.component.html ***!
      \********************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppSendTokenSendTokenComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n<ion-card class=\"add_user_div\">\n  <div style=\"height: 10%; background-color:primary;\">\n    <ion-text style=\"display: flex;justify-content: center; align-items: center; height: 50%;color: white;font-weight: bold; font-family: Roboto;padding-top: 35px;font-size: 1.2rem;\">Add User</ion-text>\n    <ion-icon  style=\" font-size: 1.5rem;float: right;margin-top: -25px;margin-right: 10px;\" color=\"secondary\" name=\"close-circle-outline\" (click)=\"closeModal()\"></ion-icon>\n\n  </div>\n  \n  <form id=\"form\" role=\"form\" [formGroup]=\"credentialForm\" (ngSubmit)=\"addUser()\">\n    <ion-input ng-model=\"Username\"  formControlName=\"username\" placeholder=\"Username\" class=\"input-underline\" autofocus=\"true\" clearInput=\"true\" color=\"none\"></ion-input>\n    <ion-input placeholder=\"Email\" formControlName=\"email\" autofocus=\"true\" clearInput=\"true\" class=\"input-underline\"></ion-input>\n    <ion-button class=\"ion-btn\" expand=\"block\" shape=\"round\" color=\"primary\"  type=\"submit\" style=\"text-transform: lowercase; text-transform: capitalize;margin-top: 55px;\">Send</ion-button>\n  </form>\n  </ion-card>";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/users-list/users-list.page.html":
    /*!***************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/users-list/users-list.page.html ***!
      \***************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppUsersListUsersListPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header >\n  <ion-toolbar  style=\"font-family: Roboto ;color: rgb(255, 140, 64);font-size: 15px;\">\n    <ion-title>Employees</ion-title>\n    <ion-icon class=\"update-style\" name=\"download-outline\" (click)=\"updateDeviceUsers()\"></ion-icon>\n    </ion-toolbar>\n    <ion-searchbar style=\"--border-radius: 15px; --background:rgb(255, 254, 254);margin-top: -10px;\" #search showCancelButton=\"focus\" debounce=\"500\" (ionChange)=\"ionChange($event)\"></ion-searchbar>\n\n  </ion-header>\n<ion-content class=\"has-header\" overflow-scroll=\"false\" has-bouncing=\"true\"  style=\"--ion-background-color:#e9e6e6;\">\n<ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n<ion-card style=\"--ion-background-color:#f5f4f4;\">\n<ion-list *ngFor=\"let user of searchedItem\" >\n  <ion-card class=\"card-style\" >\n    <div class=\"card-content\">\n      <img src={{user.photo}}>\n      <ion-label >\n        <h2 style=\"text-transform: lowercase; text-transform: capitalize;\">{{user.firstName+\" \"}}{{user.lastName}}</h2>\n        <div [ngClass]=\"(user.holidayState === 1)?'holiday-status-bg':'work-status-bg'\">{{user.holidayState === 1 ? 'In holiday' : 'Working'}}</div>\n        <p>Mobile Developer</p>\n      </ion-label>\n    </div>\n\n    <ion-icon  style=\" font-size: 1.5rem; margin-top: 18px; margin-left: 280px;\" color=\"secondary\" name=\"close-circle-outline\" (click)=\"deleteUser(user)\"></ion-icon>\n\n    <div class=\"card-info\">\n      <ion-label>\n        <h2>Email:</h2>\n        <p>{{user.email}}</p>\n      </ion-label>\n    </div>\n    <div class=\"card-info\">\n      <ion-label style=\"margin-top: 45px;\">\n        <h2>Phone Number: </h2><br>\n        <p style=\"margin-top: -15px;\">{{user.phoneNumber}}</p>\n      </ion-label>\n    </div>\n    <div>\n      <ion-button class=\"btn-card\" style=\"text-transform: lowercase; text-transform: capitalize; border-color: white;\" (click)=\"assignAdminRole(user)\">Assign Admin</ion-button>\n      <ion-button class=\"btn-card-match\" style=\"text-transform: lowercase; text-transform: capitalize; border-color: white;\" (click)=\"matchUser(user)\">Match user</ion-button>\n\n    </div>\n    </ion-card>\n  </ion-list>\n\n</ion-card>\n\n\n\n</ion-content>\n<ion-fab-button style=\"margin-right: 15px; position: absolute ; right:0;bottom:0;margin-bottom: 10px;\"  (click)=\"openMyModal()\">\n  <ion-icon name=\"add-outline\"></ion-icon>\n</ion-fab-button>";
      /***/
    },

    /***/
    "./src/app/Entities/User.ts":
    /*!**********************************!*\
      !*** ./src/app/Entities/User.ts ***!
      \**********************************/

    /*! exports provided: User */

    /***/
    function srcAppEntitiesUserTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "User", function () {
        return User;
      });

      var User = function User() {
        _classCallCheck(this, User);
      };
      /***/

    },

    /***/
    "./src/app/Services/employee.service.ts":
    /*!**********************************************!*\
      !*** ./src/app/Services/employee.service.ts ***!
      \**********************************************/

    /*! exports provided: EmployeeService */

    /***/
    function srcAppServicesEmployeeServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EmployeeService", function () {
        return EmployeeService;
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


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
      /* harmony import */


      var _Settings_AppSettings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../Settings/AppSettings */
      "./src/app/Settings/AppSettings.ts");

      var EmployeeService = /*#__PURE__*/function () {
        function EmployeeService(httpClient) {
          _classCallCheck(this, EmployeeService);

          this.httpClient = httpClient;
        }

        _createClass(EmployeeService, [{
          key: "getEmployee",
          value: function getEmployee() {
            return this.httpClient.get(_Settings_AppSettings__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].EMPLOYEE_URL + '/');
          }
        }, {
          key: "getEmployeeByUserId",
          value: function getEmployeeByUserId(idUser) {
            return this.httpClient.get(_Settings_AppSettings__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].MATCHING_URL + '/' + idUser + "?idUser=".concat(idUser), {});
          }
        }, {
          key: "updateDeviceUsers",
          value: function updateDeviceUsers() {
            return this.httpClient.get(_Settings_AppSettings__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].EMPLOYEE_Device_URL + '/employees');
          }
        }, {
          key: "count",
          value: function count() {
            return this.httpClient.get(_Settings_AppSettings__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].EMPLOYEE_URL + '/count');
          }
        }]);

        return EmployeeService;
      }();

      EmployeeService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      };

      EmployeeService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], EmployeeService);
      /***/
    },

    /***/
    "./src/app/send-token/send-token.component.scss":
    /*!******************************************************!*\
      !*** ./src/app/send-token/send-token.component.scss ***!
      \******************************************************/

    /*! exports provided: default */

    /***/
    function srcAppSendTokenSendTokenComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".card-style {\n  background-color: #4d4b4b;\n  height: 200px;\n  width: 320px;\n  border-radius: 15px;\n  margin-left: 10px;\n  box-shadow: 6px 6px 2px 1px #d3d0d0;\n  margin-bottom: 10px;\n}\n\n.card-content {\n  position: absolute;\n  top: 5px;\n  left: 15px;\n  display: flex;\n  align-items: center;\n}\n\n.card-content img {\n  width: 80px;\n  height: 80px;\n  border-radius: 50%;\n  border-color: white;\n}\n\n.card-content h2 {\n  font-weight: 300;\n  color: #fff;\n  margin-left: 15px;\n}\n\n.card-content p {\n  font-size: 12px;\n  color: #e4e4e4;\n  font-weight: 100;\n  letter-spacing: 0.4px;\n  margin-left: 15px;\n}\n\n.card-info {\n  position: absolute;\n  top: 85px;\n  left: 15px;\n  display: flex;\n}\n\n.card-info h2 {\n  font-weight: 300;\n  color: #fff;\n  margin-left: 15px;\n}\n\n.card-info p {\n  font-size: 12px;\n  color: #e4e4e4;\n  font-weight: 100;\n  letter-spacing: 0.4px;\n  margin-left: 15px;\n}\n\n.card-info-to {\n  position: absolute;\n  top: 110px;\n  left: 185px;\n  display: flex;\n}\n\n.card-info-to h2 {\n  font-weight: 300;\n  color: #fff;\n  margin-left: 15px;\n}\n\n.card-info-to p {\n  font-size: 12px;\n  color: #e4e4e4;\n  font-weight: 100;\n  letter-spacing: 0.4px;\n  margin-left: 15px;\n}\n\n.normal-text {\n  font-family: roboto;\n}\n\n.work-status-bg {\n  background-color: tomato;\n  border-radius: 20px;\n  border: 0.1px solid;\n  border-color: white;\n  color: black;\n  font-family: roboto;\n  float: right;\n  margin-top: 15px;\n  size: 10px;\n  margin-right: 20px;\n  width: 70px;\n  padding-left: 8px;\n  height: 21px;\n}\n\n.btn-card {\n  font-family: roboto;\n  font-size: 15px;\n  margin-left: 165px;\n  border-radius: 15px;\n  height: 35px;\n  margin-right: -60px;\n  margin-top: 45px;\n  color: white;\n}\n\n.btn-card-match {\n  font-family: roboto;\n  font-size: 15px;\n  margin-left: 165px;\n  border-radius: 15px;\n  height: 33px;\n  width: 149px;\n  margin-right: -60px;\n  margin-top: 5px;\n  color: white;\n}\n\n.add_user_div {\n  height: 100%;\n  background-color: #d8d0cf;\n}\n\n.input-underline {\n  margin-top: 20px;\n  border: none;\n  box-shadow: none;\n  border-bottom: 2px solid rgba(255, 255, 255, 0.5);\n  color: black;\n  border-radius: 0;\n  -webkit-text-emphasis-color: black;\n          text-emphasis-color: black;\n  font-family: roboto;\n}\n\n#form {\n  margin-top: 10%;\n  padding-left: 30px;\n  padding-right: 30px;\n}\n\n.ion-btn {\n  font-size: 18px;\n  border-radius: 20px;\n  font-size: 18px;\n  font-family: Roboto;\n  height: 50px;\n}\n\n.ion-btn:hover,\n.ion-btn:focus,\n.ion-btn:active,\n.ion-btn:visited {\n  color: white;\n  border: 2px solid white;\n  outline: none;\n}\n\n.input-underline {\n  font-size: 18px;\n  border: none;\n  margin-top: 25px;\n  box-shadow: none;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.5);\n  color: black;\n  border-radius: 0;\n  -webkit-text-emphasis-color: black;\n          text-emphasis-color: black;\n  font-style: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VuZC10b2tlbi9zZW5kLXRva2VuLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kseUJBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQ0FBQTtFQUNBLG1CQUFBO0FBQ0o7O0FBRUE7RUFFSSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FBQUo7O0FBQ0k7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUFDUjs7QUFDSTtFQUNJLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0FBQ1I7O0FBQ0k7RUFDSSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtBQUNSOztBQUVBO0VBQ0ksa0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7QUFDSjs7QUFBSTtFQUNJLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0FBRVI7O0FBQUk7RUFDSSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtBQUVSOztBQUNBO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7QUFFSjs7QUFESTtFQUNJLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0FBR1I7O0FBREk7RUFDSSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtBQUdSOztBQUdBO0VBQ0ksbUJBQUE7QUFBSjs7QUFFQTtFQUNJLHdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUFvQixtQkFBQTtFQUNwQixZQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0FBRUo7O0FBQ0E7RUFDSSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FBRUo7O0FBQUE7RUFDSSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FBR0o7O0FBREE7RUFDSSxZQUFBO0VBQ0EseUJBQUE7QUFJSjs7QUFEQTtFQUNJLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsaURBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQ0FBQTtVQUFBLDBCQUFBO0VBQ0EsbUJBQUE7QUFJSjs7QUFGRTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FBS0o7O0FBRkU7RUFDRSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FBS0o7O0FBSEU7Ozs7RUFJRSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxhQUFBO0FBTUo7O0FBSEU7RUFDRSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSwyQ0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGtDQUFBO1VBQUEsMEJBQUE7RUFDQSxpQkFBQTtBQU1KIiwiZmlsZSI6InNyYy9hcHAvc2VuZC10b2tlbi9zZW5kLXRva2VuLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmQtc3R5bGV7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNzcsIDc1LCA3NSk7XHJcbiAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gICAgd2lkdGg6IDMyMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgYm94LXNoYWRvdzogNnB4IDZweCAycHggMXB4IHJnYigyMTEsIDIwOCwgMjA4KTtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICBcclxufVxyXG4uY2FyZC1jb250ZW50e1xyXG4gICBcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNXB4O1xyXG4gICAgbGVmdDogMTVweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgaW1ne1xyXG4gICAgICAgIHdpZHRoOiA4MHB4O1xyXG4gICAgICAgIGhlaWdodDogODBweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgYm9yZGVyLWNvbG9yOiB3aGl0ZTtcclxuICAgIH1cclxuICAgIGgye1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbiAgICB9XHJcbiAgICBwe1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICBjb2xvcjogI2U0ZTRlNDtcclxuICAgICAgICBmb250LXdlaWdodDogMTAwO1xyXG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjRweDtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMTVweDtcclxuICAgIH1cclxufVxyXG4uY2FyZC1pbmZve1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA4NXB4O1xyXG4gICAgbGVmdDogMTVweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBoMntcclxuICAgICAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG4gICAgfVxyXG4gICAgcHtcclxuICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgY29sb3I6ICNlNGU0ZTQ7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDEwMDtcclxuICAgICAgICBsZXR0ZXItc3BhY2luZzogMC40cHg7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbiAgICB9XHJcbn1cclxuLmNhcmQtaW5mby10b3tcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMTEwcHg7XHJcbiAgICBsZWZ0OiAxODVweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBoMntcclxuICAgICAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG4gICAgfVxyXG4gICAgcHtcclxuICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgY29sb3I6ICNlNGU0ZTQ7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDEwMDtcclxuICAgICAgICBsZXR0ZXItc3BhY2luZzogMC40cHg7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcblxyXG4gICAgfVxyXG4gICAgICAgICAgXHJcbn1cclxuXHJcbi5ub3JtYWwtdGV4dHtcclxuICAgIGZvbnQtZmFtaWx5OiByb2JvdG87XHJcbn1cclxuLndvcmstc3RhdHVzLWJne1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjp0b21hdG87XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgYm9yZGVyOiAwLjFweCBzb2xpZDtib3JkZXItY29sb3I6IHdoaXRlO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgZm9udC1mYW1pbHk6IHJvYm90bztcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgICBzaXplOiAxMHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG4gICAgd2lkdGg6IDcwcHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDhweDtcclxuICAgIGhlaWdodDogMjFweDtcclxufVxyXG5cclxuLmJ0bi1jYXJke1xyXG4gICAgZm9udC1mYW1pbHk6IHJvYm90bztcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAxNjVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgICBoZWlnaHQ6IDM1cHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IC02MHB4O1xyXG4gICAgbWFyZ2luLXRvcDogNDVweDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG4uYnRuLWNhcmQtbWF0Y2h7XHJcbiAgICBmb250LWZhbWlseTogcm9ib3RvO1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE2NXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgIGhlaWdodDogMzNweDtcclxuICAgIHdpZHRoOiAxNDlweDtcclxuICAgIG1hcmdpbi1yaWdodDogLTYwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuLmFkZF91c2VyX2RpdntcclxuICAgIGhlaWdodDoxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIxNiwgMjA4LCAyMDcpO1xyXG4gICAgXHJcbn1cclxuLmlucHV0LXVuZGVybGluZSB7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgdGV4dC1lbXBoYXNpcy1jb2xvcjogYmxhY2s7XHJcbiAgICBmb250LWZhbWlseTogcm9ib3RvO1xyXG4gICAgfVxyXG4gICNmb3JtIHtcclxuICAgIG1hcmdpbi10b3A6IDEwJTtcclxuICAgIHBhZGRpbmctbGVmdDogMzBweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDMwcHg7XHJcbiAgXHJcbiAgfVxyXG4gIC5pb24tYnRuIHtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBmb250LWZhbWlseTogUm9ib3RvO1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gIH1cclxuICAuaW9uLWJ0bjpob3ZlcixcclxuICAuaW9uLWJ0bjpmb2N1cyxcclxuICAuaW9uLWJ0bjphY3RpdmUsXHJcbiAgLmlvbi1idG46dmlzaXRlZCB7XHJcbiAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAxKTtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMSk7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gIH1cclxuXHJcbiAgLmlucHV0LXVuZGVybGluZSB7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBtYXJnaW4tdG9wOiAyNXB4O1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcbiAgICBjb2xvcjogcmdiKDAsIDAsIDApO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMDtcclxuICAgIHRleHQtZW1waGFzaXMtY29sb3I6IHJnYigwLCAwLCAwKTtcclxuICAgIGZvbnQtc3R5bGU6IHJnYigwLCAwLCAwKTtcclxuICBcclxuICB9XHJcblxyXG5cclxuXHJcbiJdfQ== */";
      /***/
    },

    /***/
    "./src/app/send-token/send-token.component.ts":
    /*!****************************************************!*\
      !*** ./src/app/send-token/send-token.component.ts ***!
      \****************************************************/

    /*! exports provided: SendTokenComponent */

    /***/
    function srcAppSendTokenSendTokenComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SendTokenComponent", function () {
        return SendTokenComponent;
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


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _Entities_User__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../Entities/User */
      "./src/app/Entities/User.ts");
      /* harmony import */


      var _Services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../Services/user.service */
      "./src/app/Services/user.service.ts");

      var SendTokenComponent = /*#__PURE__*/function () {
        function SendTokenComponent(userService, alertController, toastController, modalCtrl, fb, toastCtrl, loadingController) {
          _classCallCheck(this, SendTokenComponent);

          this.userService = userService;
          this.alertController = alertController;
          this.toastController = toastController;
          this.modalCtrl = modalCtrl;
          this.fb = fb;
          this.toastCtrl = toastCtrl;
          this.loadingController = loadingController;
          this.credentialForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('')
          });
        }

        _createClass(SendTokenComponent, [{
          key: "presentToast",
          value: function presentToast(message, show_button, position, duration) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var toast;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.toastCtrl.create({
                        message: message,
                        //showCloseButton: show_button,
                        position: position,
                        duration: duration
                      });

                    case 2:
                      toast = _context.sent;
                      toast.present();

                    case 4:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "addUser",
          value: function addUser() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var _this = this;

              var user;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      if (this.credentialForm.valid) {
                        //const loading = await this.loadingController.create();
                        //await loading.present();
                        user = new _Entities_User__WEBPACK_IMPORTED_MODULE_4__["User"]();
                        user.username = this.credentialForm.controls.username.value;
                        user.email = this.credentialForm.controls.email.value;
                        this.userService.addUser(user.username, user.email).subscribe(function (data) {
                          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                            var toast;
                            return regeneratorRuntime.wrap(function _callee2$(_context2) {
                              while (1) {
                                switch (_context2.prev = _context2.next) {
                                  case 0:
                                    console.log(data); //loading.dismiss();

                                    _context2.next = 3;
                                    return this.toastController.create({
                                      message: 'A registration email have been sent !',
                                      duration: 2000,
                                      color: '',
                                      position: 'bottom'
                                    });

                                  case 3:
                                    toast = _context2.sent;
                                    toast.present();

                                  case 5:
                                  case "end":
                                    return _context2.stop();
                                }
                              }
                            }, _callee2, this);
                          }));
                        });
                        this.closeModal();
                      } else {
                        alert('form not valid!');
                      }

                    case 1:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }, {
          key: "closeModal",
          value: function closeModal() {
            this.modalCtrl.dismiss();
          }
        }]);

        return SendTokenComponent;
      }();

      SendTokenComponent.ctorParameters = function () {
        return [{
          type: _Services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"]
        }];
      };

      SendTokenComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-send-token',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./send-token.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/send-token/send-token.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./send-token.component.scss */
        "./src/app/send-token/send-token.component.scss"))["default"]]
      })], SendTokenComponent);
      /***/
    },

    /***/
    "./src/app/users-list/users-list-routing.module.ts":
    /*!*********************************************************!*\
      !*** ./src/app/users-list/users-list-routing.module.ts ***!
      \*********************************************************/

    /*! exports provided: UsersListPageRoutingModule */

    /***/
    function srcAppUsersListUsersListRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UsersListPageRoutingModule", function () {
        return UsersListPageRoutingModule;
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


      var _users_list_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./users-list.page */
      "./src/app/users-list/users-list.page.ts");

      var routes = [{
        path: '',
        component: _users_list_page__WEBPACK_IMPORTED_MODULE_3__["UsersListPage"]
      }];

      var UsersListPageRoutingModule = function UsersListPageRoutingModule() {
        _classCallCheck(this, UsersListPageRoutingModule);
      };

      UsersListPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], UsersListPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/users-list/users-list.module.ts":
    /*!*************************************************!*\
      !*** ./src/app/users-list/users-list.module.ts ***!
      \*************************************************/

    /*! exports provided: UsersListPageModule */

    /***/
    function srcAppUsersListUsersListModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UsersListPageModule", function () {
        return UsersListPageModule;
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


      var _users_list_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./users-list-routing.module */
      "./src/app/users-list/users-list-routing.module.ts");
      /* harmony import */


      var _users_list_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./users-list.page */
      "./src/app/users-list/users-list.page.ts");
      /* harmony import */


      var _send_token_send_token_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../send-token/send-token.component */
      "./src/app/send-token/send-token.component.ts");

      var UsersListPageModule = function UsersListPageModule() {
        _classCallCheck(this, UsersListPageModule);
      };

      UsersListPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _users_list_routing_module__WEBPACK_IMPORTED_MODULE_5__["UsersListPageRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]],
        declarations: [_users_list_page__WEBPACK_IMPORTED_MODULE_6__["UsersListPage"], _send_token_send_token_component__WEBPACK_IMPORTED_MODULE_7__["SendTokenComponent"]],
        entryComponents: [_send_token_send_token_component__WEBPACK_IMPORTED_MODULE_7__["SendTokenComponent"]]
      })], UsersListPageModule);
      /***/
    },

    /***/
    "./src/app/users-list/users-list.page.scss":
    /*!*************************************************!*\
      !*** ./src/app/users-list/users-list.page.scss ***!
      \*************************************************/

    /*! exports provided: default */

    /***/
    function srcAppUsersListUsersListPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".card-style {\n  background-color: #4d4b4b;\n  height: 200px;\n  width: 320px;\n  border-radius: 15px;\n  margin-left: 10px;\n  box-shadow: 6px 6px 2px 1px #d3d0d0;\n  margin-bottom: 10px;\n}\n\n.card-content {\n  position: absolute;\n  top: 10px;\n  left: 18px;\n  display: flex;\n  align-items: center;\n}\n\n.card-content img {\n  width: 60px;\n  height: 60px;\n  border-radius: 50%;\n  border-color: white;\n}\n\n.card-content h2 {\n  font-weight: 300;\n  color: #fff;\n  margin-left: 15px;\n}\n\n.card-content p {\n  font-size: 12px;\n  color: #e4e4e4;\n  font-weight: 100;\n  letter-spacing: 0.4px;\n  margin-left: 15px;\n}\n\n.card-info {\n  position: absolute;\n  left: 10px;\n  top: 80px;\n  display: flex;\n}\n\n.card-info h2 {\n  font-weight: 300;\n  color: #fff;\n  margin-left: 15px;\n}\n\n.card-info p {\n  font-size: 12px;\n  color: #e4e4e4;\n  font-weight: 100;\n  letter-spacing: 0.4px;\n  margin-left: 15px;\n}\n\n.card-info-to {\n  position: absolute;\n  top: 110px;\n  left: 185px;\n  display: flex;\n}\n\n.card-info-to h2 {\n  font-weight: 300;\n  color: #fff;\n  margin-left: 15px;\n}\n\n.card-info-to p {\n  font-size: 12px;\n  color: #e4e4e4;\n  font-weight: 100;\n  letter-spacing: 0.4px;\n  margin-left: 15px;\n}\n\n.update-style {\n  color: black;\n  font-size: 1.8rem;\n  float: right;\n  margin-right: 10px;\n  margin-top: -28px;\n}\n\n.normal-text {\n  font-family: Roboto;\n}\n\n.holiday-status-bg {\n  background-color: #bbbbbb;\n  border-radius: 5px;\n  color: black;\n  font-family: Roboto;\n  float: right;\n  size: 7px;\n  font-size: 12px;\n  width: 67px;\n  height: 17px;\n  padding-left: 8px;\n  margin-left: 125px;\n  position: absolute;\n  margin-top: -20px;\n  color: white;\n  padding-top: 2px;\n}\n\n.work-status-bg {\n  background-color: #fd7d05;\n  border-radius: 5px;\n  color: black;\n  font-family: Roboto;\n  float: right;\n  size: 7px;\n  font-size: 12px;\n  width: 67px;\n  height: 17px;\n  padding-left: 11px;\n  margin-left: 125px;\n  position: absolute;\n  margin-top: -20px;\n  color: white;\n  padding-top: 1px;\n}\n\n.btn-card {\n  font-family: Roboto;\n  font-size: 12px;\n  margin-left: 185px;\n  border-radius: 15px;\n  height: 35px;\n  width: 120px;\n  margin-right: -60px;\n  margin-top: 45px;\n  color: white;\n}\n\n.btn-card-match {\n  font-family: Roboto;\n  font-size: 12px;\n  margin-left: 185px;\n  border-radius: 15px;\n  height: 33px;\n  width: 120px;\n  margin-right: -60px;\n  margin-top: 5px;\n  color: white;\n}\n\n.add_user_div {\n  height: 40%;\n  width: 80%;\n  margin-left: auto;\n  margin-right: auto;\n  margin-bottom: auto;\n  border-radius: 30px;\n}\n\n.input-underline {\n  margin-top: 20px;\n  border: none;\n  box-shadow: none;\n  border-bottom: 2px solid rgba(255, 255, 255, 0.5);\n  color: black;\n  border-radius: 0;\n  -webkit-text-emphasis-color: black;\n          text-emphasis-color: black;\n  font-family: Roboto;\n}\n\n#form {\n  margin-top: 10%;\n  padding-left: 30px;\n  padding-right: 30px;\n}\n\n.ion-btn {\n  margin-top: 25px;\n  height: 48px;\n  font-size: 18px;\n  border-radius: 50px;\n  border: 2px solid rgba(255, 255, 255, 0.8);\n  font-size: 18px;\n  font-family: Arial, Helvetica, sans-serif;\n  line-height: 20px;\n}\n\n.ion-btn:hover,\n.ion-btn:focus,\n.ion-btn:active,\n.ion-btn:visited {\n  color: white;\n  border: 2px solid white;\n  outline: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlcnMtbGlzdC91c2Vycy1saXN0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUNBQUE7RUFDQSxtQkFBQTtBQUNKOztBQUVBO0VBRUksa0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQUFKOztBQUNJO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FBQ1I7O0FBQ0k7RUFDSSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtBQUNSOztBQUNJO0VBQ0ksZUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7QUFDUjs7QUFFQTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxhQUFBO0FBQ0o7O0FBQUk7RUFDSSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtBQUVSOztBQUFJO0VBQ0ksZUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7QUFFUjs7QUFDQTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0FBRUo7O0FBREk7RUFDSSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtBQUdSOztBQURJO0VBQ0ksZUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7QUFHUjs7QUFFQTtFQUNJLFlBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FBQ0o7O0FBRUE7RUFDSSxtQkFBQTtBQUNKOztBQUNBO0VBQ0kseUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUFFSjs7QUFBQTtFQUNJLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FBR0o7O0FBREE7RUFDSSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQUlKOztBQUZBO0VBQ0ksbUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBQUtKOztBQUhBO0VBQ0ksV0FBQTtFQUNBLFVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQU1KOztBQUhBO0VBQ0ksZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpREFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGtDQUFBO1VBQUEsMEJBQUE7RUFDQSxtQkFBQTtBQU1KOztBQUpFO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUFPSjs7QUFKRTtFQUVFLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFFQSxtQkFBQTtFQUNBLDBDQUFBO0VBQ0EsZUFBQTtFQUNBLHlDQUFBO0VBQ0EsaUJBQUE7QUFNSjs7QUFKRTs7OztFQUlFLFlBQUE7RUFDQSx1QkFBQTtFQUNBLGFBQUE7QUFPSiIsImZpbGUiOiJzcmMvYXBwL3VzZXJzLWxpc3QvdXNlcnMtbGlzdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZC1zdHlsZXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig3NywgNzUsIDc1KTtcclxuICAgIGhlaWdodDogMjAwcHg7XHJcbiAgICB3aWR0aDogMzIwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICBib3gtc2hhZG93OiA2cHggNnB4IDJweCAxcHggcmdiKDIxMSwgMjA4LCAyMDgpO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIFxyXG59XHJcbi5jYXJkLWNvbnRlbnR7XHJcbiAgIFxyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAxMHB4O1xyXG4gICAgbGVmdDogMThweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgaW1ne1xyXG4gICAgICAgIHdpZHRoOiA2MHB4O1xyXG4gICAgICAgIGhlaWdodDogNjBweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgYm9yZGVyLWNvbG9yOiB3aGl0ZTtcclxuICAgIH1cclxuICAgIGgye1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbiAgICB9XHJcbiAgICBwe1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICBjb2xvcjogI2U0ZTRlNDtcclxuICAgICAgICBmb250LXdlaWdodDogMTAwO1xyXG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjRweDtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMTVweDtcclxuICAgIH1cclxufVxyXG4uY2FyZC1pbmZve1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogMTBweDtcclxuICAgIHRvcDogODBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBoMntcclxuICAgICAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG4gICAgfVxyXG4gICAgcHtcclxuICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgY29sb3I6ICNlNGU0ZTQ7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDEwMDtcclxuICAgICAgICBsZXR0ZXItc3BhY2luZzogMC40cHg7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbiAgICB9XHJcbn1cclxuLmNhcmQtaW5mby10b3tcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMTEwcHg7XHJcbiAgICBsZWZ0OiAxODVweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBoMntcclxuICAgICAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG4gICAgfVxyXG4gICAgcHtcclxuICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgY29sb3I6ICNlNGU0ZTQ7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDEwMDtcclxuICAgICAgICBsZXR0ZXItc3BhY2luZzogMC40cHg7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcblxyXG4gICAgfVxyXG4gICAgICAgICAgXHJcbn1cclxuLnVwZGF0ZS1zdHlsZXtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIGZvbnQtc2l6ZTogMS44cmVtO1xyXG4gICAgZmxvYXQgOiByaWdodDtcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgIG1hcmdpbi10b3A6IC0yOHB4O1xyXG5cclxufVxyXG4ubm9ybWFsLXRleHR7XHJcbiAgICBmb250LWZhbWlseTogUm9ib3RvO1xyXG59XHJcbi5ob2xpZGF5LXN0YXR1cy1iZ3tcclxuICAgIGJhY2tncm91bmQtY29sb3I6cmdiKDE4NywgMTg3LCAxODcpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgZm9udC1mYW1pbHk6IFJvYm90bztcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIHNpemU6IDdweDtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIHdpZHRoOiA2N3B4O1xyXG4gICAgaGVpZ2h0OiAxN3B4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiA4cHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMTI1cHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBtYXJnaW4tdG9wOiAtMjBweDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHBhZGRpbmctdG9wOiAycHg7XHJcbn1cclxuLndvcmstc3RhdHVzLWJne1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjpyZ2IoMjUzLCAxMjUsIDUpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgZm9udC1mYW1pbHk6IFJvYm90bztcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIHNpemU6IDdweDtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIHdpZHRoOiA2N3B4O1xyXG4gICAgaGVpZ2h0OiAxN3B4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMXB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEyNXB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbWFyZ2luLXRvcDogLTIwcHg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBwYWRkaW5nLXRvcDogMXB4O1xyXG59XHJcbi5idG4tY2FyZHtcclxuICAgIGZvbnQtZmFtaWx5OiBSb2JvdG87XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMTg1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgaGVpZ2h0OiAzNXB4O1xyXG4gICAgd2lkdGg6IDEyMHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAtNjBweDtcclxuICAgIG1hcmdpbi10b3A6IDQ1cHg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuLmJ0bi1jYXJkLW1hdGNoe1xyXG4gICAgZm9udC1mYW1pbHk6IFJvYm90bztcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAxODVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgICBoZWlnaHQ6IDMzcHg7XHJcbiAgICB3aWR0aDogMTIwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IC02MHB4O1xyXG4gICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcbi5hZGRfdXNlcl9kaXZ7XHJcbiAgICBoZWlnaHQ6IDQwJTtcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgIG1hcmdpbi1ib3R0b206IGF1dG87XHJcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xyXG4gICAgXHJcbn1cclxuLmlucHV0LXVuZGVybGluZSB7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgdGV4dC1lbXBoYXNpcy1jb2xvcjogYmxhY2s7XHJcbiAgICBmb250LWZhbWlseTogUm9ib3RvO1xyXG4gICAgfVxyXG4gICNmb3JtIHtcclxuICAgIG1hcmdpbi10b3A6IDEwJTtcclxuICAgIHBhZGRpbmctbGVmdDogMzBweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDMwcHg7XHJcbiAgXHJcbiAgfVxyXG4gIC5pb24tYnRuIHtcclxuICBcclxuICAgIG1hcmdpbi10b3A6IDI1cHg7XHJcbiAgICBoZWlnaHQ6IDQ4cHg7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XHJcbiAgICBsaW5lLWhlaWdodDogMjBweDtcclxuICB9XHJcbiAgLmlvbi1idG46aG92ZXIsXHJcbiAgLmlvbi1idG46Zm9jdXMsXHJcbiAgLmlvbi1idG46YWN0aXZlLFxyXG4gIC5pb24tYnRuOnZpc2l0ZWQge1xyXG4gICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMSk7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDEpO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICB9Il19 */";
      /***/
    },

    /***/
    "./src/app/users-list/users-list.page.ts":
    /*!***********************************************!*\
      !*** ./src/app/users-list/users-list.page.ts ***!
      \***********************************************/

    /*! exports provided: UsersListPage */

    /***/
    function srcAppUsersListUsersListPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UsersListPage", function () {
        return UsersListPage;
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


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _send_token_send_token_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../send-token/send-token.component */
      "./src/app/send-token/send-token.component.ts");
      /* harmony import */


      var _Services_employee_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../Services/employee.service */
      "./src/app/Services/employee.service.ts");
      /* harmony import */


      var _Services_shared_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../Services/shared.service */
      "./src/app/Services/shared.service.ts");
      /* harmony import */


      var _Services_user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../Services/user.service */
      "./src/app/Services/user.service.ts");

      var UsersListPage = /*#__PURE__*/function () {
        function UsersListPage(userService, employeeService, alertController, toastController, modalController, sharedService) {
          _classCallCheck(this, UsersListPage);

          this.userService = userService;
          this.employeeService = employeeService;
          this.alertController = alertController;
          this.toastController = toastController;
          this.modalController = modalController;
          this.sharedService = sharedService;
          this.usersList = [];
          this.employeesList = [];
          this.admin = this.sharedService.verifyAdmin();
          this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('')
          });
          this.items = [{
            expanded: false
          }];
          this.searchedItem = this.usersList;
        }

        _createClass(UsersListPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getUsers();
            this.getEmployees();
          }
        }, {
          key: "doRefresh",
          value: function doRefresh(event) {
            console.log('Begin async operation');
            this.getUsers();
            this.getEmployees();
            setTimeout(function () {
              console.log('Async operation has ended');
              event.target.complete();
            }, 2000);
          }
        }, {
          key: "ionViewDidEnter",
          value: function ionViewDidEnter() {
            var _this2 = this;

            setTimeout(function () {
              _this2.search.setFocus();
            });
          }
        }, {
          key: "ionChange",
          value: function ionChange(event) {
            var val = event.target.value;
            this.searchedItem = this.usersList;

            if (val && val.trim() != '') {
              this.searchedItem = this.searchedItem.filter(function (item) {
                console.log(item.firstName);
                return item.firstName.toLowerCase().indexOf(val.toLowerCase()) > -1;
              });
            }
          }
        }, {
          key: "getUsers",
          value: function getUsers() {
            var _this3 = this;

            this.userService.findAll().subscribe(function (data) {
              _this3.usersList = data;
              _this3.searchedItem = data;
              console.log(_this3.usersList);
            });
          }
        }, {
          key: "assignAdminRole",
          value: function assignAdminRole(user) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              var _this4 = this;

              var alert;
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      _context4.next = 2;
                      return this.alertController.create({
                        cssClass: 'my-custom-class',
                        header: 'Confirmation',
                        message: 'Assign this user as admin ?',
                        buttons: [{
                          text: 'Cancel',
                          role: 'cancel',
                          cssClass: 'secondary',
                          handler: function handler(blah) {
                            console.log('Confirm Cancel: blah');
                          }
                        }, {
                          text: 'Yes',
                          handler: function handler() {
                            _this4.userService.assignAdminRole(user.id).subscribe(function (data) {
                              console.log(data);
                            });
                          }
                        }]
                      });

                    case 2:
                      alert = _context4.sent;
                      _context4.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));
          }
        }, {
          key: "openMyModal",
          value: function openMyModal() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
              var myModal;
              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      _context5.next = 2;
                      return this.modalController.create({
                        component: _send_token_send_token_component__WEBPACK_IMPORTED_MODULE_4__["SendTokenComponent"],
                        cssClass: 'my-custom-modal-css'
                      });

                    case 2:
                      myModal = _context5.sent;
                      _context5.next = 5;
                      return myModal.present();

                    case 5:
                      return _context5.abrupt("return", _context5.sent);

                    case 6:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5, this);
            }));
          }
        }, {
          key: "deleteUser",
          value: function deleteUser(user) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
              var _this5 = this;

              var alert;
              return regeneratorRuntime.wrap(function _callee6$(_context6) {
                while (1) {
                  switch (_context6.prev = _context6.next) {
                    case 0:
                      _context6.next = 2;
                      return this.alertController.create({
                        cssClass: 'my-custom-class',
                        header: 'Confirmation',
                        message: 'Are you sure you want to Delete this User ?',
                        buttons: [{
                          text: 'Cancel',
                          role: 'cancel',
                          cssClass: 'secondary',
                          handler: function handler(blah) {
                            console.log('Confirm Cancel: blah');
                          }
                        }, {
                          text: 'Yes',
                          handler: function handler() {
                            console.log(user);
                            console.log(_this5.usersList);

                            var index = _this5.usersList.findIndex(function (obj) {
                              return obj.id === user.id;
                            });

                            _this5.userService.deleteUserById(user.id).subscribe(function (data) {
                              _this5.usersList.splice(index, 1);

                              console.log("item");
                            });
                          }
                        }]
                      });

                    case 2:
                      alert = _context6.sent;
                      _context6.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context6.stop();
                  }
                }
              }, _callee6, this);
            }));
          }
        }, {
          key: "updateDeviceUsers",
          value: function updateDeviceUsers() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
              var toast;
              return regeneratorRuntime.wrap(function _callee7$(_context7) {
                while (1) {
                  switch (_context7.prev = _context7.next) {
                    case 0:
                      this.employeeService.updateDeviceUsers().subscribe(function (data) {
                        console.log(data);
                      });
                      _context7.next = 3;
                      return this.toastController.create({
                        message: 'Device Employees list upgraded ',
                        duration: 2000,
                        color: 'primary',
                        position: 'bottom'
                      });

                    case 3:
                      toast = _context7.sent;
                      toast.present();

                    case 5:
                    case "end":
                      return _context7.stop();
                  }
                }
              }, _callee7, this);
            }));
          }
        }, {
          key: "matchUser",
          value: function matchUser(user) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
              var _this6 = this;

              var inputArray, alert;
              return regeneratorRuntime.wrap(function _callee8$(_context8) {
                while (1) {
                  switch (_context8.prev = _context8.next) {
                    case 0:
                      inputArray = [];
                      this.employeesList.forEach(function (element) {
                        inputArray.push({
                          type: 'radio',
                          label: element["empFirstname"],
                          value: element["id"]
                        });
                      });
                      console.log(this.employeeId);
                      _context8.next = 5;
                      return this.alertController.create({
                        cssClass: 'my-custom-class',
                        header: 'Match User',
                        buttons: [{
                          text: 'Cancel',
                          role: 'cancel',
                          cssClass: 'secondary',
                          handler: function handler(blah) {
                            console.log('Confirm Cancel: blah');
                          }
                        }, {
                          text: 'Yes',
                          handler: function handler(value) {
                            _this6.employeeId = value;
                            console.log("employeeId " + _this6.employeeId);

                            _this6.matchingUser(user.id);
                          }
                        }]
                      });

                    case 5:
                      alert = _context8.sent;
                      alert.inputs = inputArray;
                      _context8.next = 9;
                      return alert.present();

                    case 9:
                    case "end":
                      return _context8.stop();
                  }
                }
              }, _callee8, this);
            }));
          }
        }, {
          key: "matchingUser",
          value: function matchingUser(id) {
            console.log("matchingUserId " + this.employeeId);
            this.userService.matchingUser(id, this.employeeId).subscribe(function (data) {
              console.log(data);
            });
          }
        }, {
          key: "getEmployees",
          value: function getEmployees() {
            var _this7 = this;

            this.employeeService.getEmployee().subscribe(function (data) {
              _this7.employeesList = data;
              console.log(data);
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

        return UsersListPage;
      }();

      UsersListPage.ctorParameters = function () {
        return [{
          type: _Services_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"]
        }, {
          type: _Services_employee_service__WEBPACK_IMPORTED_MODULE_5__["EmployeeService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"]
        }, {
          type: _Services_shared_service__WEBPACK_IMPORTED_MODULE_6__["SharedService"]
        }];
      };

      UsersListPage.propDecorators = {
        search: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['search', {
            "static": false
          }]
        }]
      };
      UsersListPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-users-list',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./users-list.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/users-list/users-list.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./users-list.page.scss */
        "./src/app/users-list/users-list.page.scss"))["default"]]
      })], UsersListPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=users-list-users-list-module-es5.js.map