(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["options-options-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/options/options.page.html":
    /*!*********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/options/options.page.html ***!
      \*********************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppOptionsOptionsPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n\n<ion-tabs>\n  <ion-tab-bar slot=\"bottom\" color=\"#F3F3F3\">\n\n  <ion-tab-button *ngIf=\"showIconAdmin == true\" selected=\"true\" tab=\"home\">\n  <ion-icon name=\"analytics-outline\"></ion-icon>\n  <ion-label>Dashboard</ion-label>\n  </ion-tab-button>\n  \n  <ion-tab-button *ngIf=\"showIconUser == true\"  tab=\"holiday\">\n    <ion-icon name=\"walk-outline\"></ion-icon>\n        <ion-label>Holidays</ion-label>\n    </ion-tab-button>\n\n  <ion-tab-button tab=\"messages-list\">\n  <ion-icon name=\"chatbubble-ellipses-outline\"></ion-icon>\n  <ion-label>Messages</ion-label>\n  </ion-tab-button>\n  \n  \n  <ion-tab-button tab=\"notifications\">\n  \n    <div>\n\n  \n    <div class=\"orange-notif-circle\">{{countMsg}}</div>\n\n  <ion-icon class=\"bell-notif-icon\" name=\"notifications-outline\">\n    \n  </ion-icon>\n</div>\n  <ion-label>Notifications</ion-label>\n\n  </ion-tab-button>\n  \n  <ion-tab-button tab=\"profile\">\n  <ion-icon name=\"person-outline\"></ion-icon>\n  <ion-label>Profile</ion-label>\n  </ion-tab-button>\n  \n  </ion-tab-bar>\n  </ion-tabs>";
      /***/
    },

    /***/
    "./src/app/options/options-routing.module.ts":
    /*!***************************************************!*\
      !*** ./src/app/options/options-routing.module.ts ***!
      \***************************************************/

    /*! exports provided: OptionsPageRoutingModule */

    /***/
    function srcAppOptionsOptionsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OptionsPageRoutingModule", function () {
        return OptionsPageRoutingModule;
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


      var _options_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./options.page */
      "./src/app/options/options.page.ts");

      var routes = [{
        path: '',
        component: _options_page__WEBPACK_IMPORTED_MODULE_3__["OptionsPage"],
        children: [{
          path: '',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() | home-home-module */
            "home-home-module").then(__webpack_require__.bind(null,
            /*! ../home/home.module */
            "./src/app/home/home.module.ts")).then(function (m) {
              return m.HomePageModule;
            });
          }
        }, {
          path: 'home',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() | home-home-module */
            "home-home-module").then(__webpack_require__.bind(null,
            /*! ../home/home.module */
            "./src/app/home/home.module.ts")).then(function (m) {
              return m.HomePageModule;
            });
          }
        }, {
          path: 'messages-list',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | messages-list-messages-list-module */
            [__webpack_require__.e("common"), __webpack_require__.e("messages-list-messages-list-module")]).then(__webpack_require__.bind(null,
            /*! ../messages-list/messages-list.module */
            "./src/app/messages-list/messages-list.module.ts")).then(function (m) {
              return m.MessagesListPageModule;
            });
          }
        }, {
          path: 'notifications',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() | notifications-notifications-module */
            "notifications-notifications-module").then(__webpack_require__.bind(null,
            /*! ../notifications/notifications.module */
            "./src/app/notifications/notifications.module.ts")).then(function (m) {
              return m.NotificationsPageModule;
            });
          }
        }, {
          path: 'qr',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | qrattendance-qrattendance-module */
            [__webpack_require__.e("default~dashboard-dashboard-module~profile-profile-module~qrattendance-qrattendance-module"), __webpack_require__.e("common"), __webpack_require__.e("qrattendance-qrattendance-module")]).then(__webpack_require__.bind(null,
            /*! ../qrattendance/qrattendance.module */
            "./src/app/qrattendance/qrattendance.module.ts")).then(function (m) {
              return m.QrattendancePageModule;
            });
          }
        }, {
          path: 'profile',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | profile-profile-module */
            [__webpack_require__.e("default~dashboard-dashboard-module~profile-profile-module~qrattendance-qrattendance-module"), __webpack_require__.e("common"), __webpack_require__.e("profile-profile-module")]).then(__webpack_require__.bind(null,
            /*! ../profile/profile.module */
            "./src/app/profile/profile.module.ts")).then(function (m) {
              return m.ProfilePageModule;
            });
          }
        }, {
          path: 'holiday',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | conge-conge-module */
            [__webpack_require__.e("common"), __webpack_require__.e("conge-conge-module")]).then(__webpack_require__.bind(null,
            /*! ../conge/conge.module */
            "./src/app/conge/conge.module.ts")).then(function (m) {
              return m.CongePageModule;
            });
          }
        }]
      }];

      var OptionsPageRoutingModule = function OptionsPageRoutingModule() {
        _classCallCheck(this, OptionsPageRoutingModule);
      };

      OptionsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], OptionsPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/options/options.module.ts":
    /*!*******************************************!*\
      !*** ./src/app/options/options.module.ts ***!
      \*******************************************/

    /*! exports provided: OptionsPageModule */

    /***/
    function srcAppOptionsOptionsModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OptionsPageModule", function () {
        return OptionsPageModule;
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


      var _options_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./options-routing.module */
      "./src/app/options/options-routing.module.ts");
      /* harmony import */


      var _options_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./options.page */
      "./src/app/options/options.page.ts");

      var OptionsPageModule = function OptionsPageModule() {
        _classCallCheck(this, OptionsPageModule);
      };

      OptionsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _options_routing_module__WEBPACK_IMPORTED_MODULE_5__["OptionsPageRoutingModule"]],
        declarations: [_options_page__WEBPACK_IMPORTED_MODULE_6__["OptionsPage"]]
      })], OptionsPageModule);
      /***/
    },

    /***/
    "./src/app/options/options.page.scss":
    /*!*******************************************!*\
      !*** ./src/app/options/options.page.scss ***!
      \*******************************************/

    /*! exports provided: default */

    /***/
    function srcAppOptionsOptionsPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".orange-notif-circle {\n  height: 15px;\n  width: 15px;\n  background-color: #FF0000;\n  border-radius: 50%;\n  margin-bottom: -1px;\n  margin-left: 56%;\n  color: white;\n  font-size: 10px;\n}\n\n.bell-notif-icon {\n  transform: scale(2) !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb3B0aW9ucy9vcHRpb25zLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQUNKOztBQUNBO0VBQ0ksOEJBQUE7QUFFSiIsImZpbGUiOiJzcmMvYXBwL29wdGlvbnMvb3B0aW9ucy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIub3JhbmdlLW5vdGlmLWNpcmNsZXtcclxuICAgIGhlaWdodDogMTVweDtcclxuICAgIHdpZHRoOiAxNXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGMDAwMDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIG1hcmdpbi1ib3R0b206IC0xcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogNTYlO1xyXG4gICAgY29sb3I6d2hpdGU7XHJcbiAgICBmb250LXNpemU6IDEwcHg7XHJcbn1cclxuLmJlbGwtbm90aWYtaWNvbntcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMikgIWltcG9ydGFudDtcclxufSJdfQ== */";
      /***/
    },

    /***/
    "./src/app/options/options.page.ts":
    /*!*****************************************!*\
      !*** ./src/app/options/options.page.ts ***!
      \*****************************************/

    /*! exports provided: OptionsPage */

    /***/
    function srcAppOptionsOptionsPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OptionsPage", function () {
        return OptionsPage;
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


      var _Services_notification_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../Services/notification.service */
      "./src/app/Services/notification.service.ts");
      /* harmony import */


      var _Services_shared_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../Services/shared.service */
      "./src/app/Services/shared.service.ts");
      /* harmony import */


      var _Services_websocket_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../Services/websocket.service */
      "./src/app/Services/websocket.service.ts");
      /* harmony import */


      var _Settings_AppSettings__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../Settings/AppSettings */
      "./src/app/Settings/AppSettings.ts");

      var OptionsPage = /*#__PURE__*/function () {
        function OptionsPage(sharedService, notificationService, webSocketService) {
          _classCallCheck(this, OptionsPage);

          this.sharedService = sharedService;
          this.notificationService = notificationService;
          this.webSocketService = webSocketService;
          this.countMsg = 0;
          this.admin = this.sharedService.verifyAdmin();
          this.stompClient = this.webSocketService.connect();
          this.myNotification = [];
        }

        _createClass(OptionsPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.notificationService.getNotifsByUser().subscribe(function (data) {
              data.forEach(function (element) {
                _this.myNotification.push(element);

                if (element.isSeen === 0) {
                  _this.countMsg += 1;
                }
              });
            });

            if (this.admin) {
              this.showIconAdmin = true;
            } else {
              this.showIconUser = true;
            }
          }
        }, {
          key: "getNotification",
          value: function getNotification() {
            var that = this;
            this.stompClient.connect({
              user: _Settings_AppSettings__WEBPACK_IMPORTED_MODULE_5__["AppSettings"].details.username.toString()
            }, function (frame) {
              that.stompClient.subscribe("/user/queue/reply", function (message) {
                var result = that.myNotification.find(function (obj) {
                  return obj.idNotification === JSON.parse(message.body).idNotification;
                });

                if (result !== undefined) {
                  var foundIndex = that.myNotification.findIndex(function (item) {
                    return item.idNotification == result.idNotification;
                  });
                  that.myNotification[foundIndex].seen = 1;
                  that.countMsg--;
                  that.myNotification[foundIndex] = JSON.parse(message.body);
                }
              });
            });
          }
        }]);

        return OptionsPage;
      }();

      OptionsPage.ctorParameters = function () {
        return [{
          type: _Services_shared_service__WEBPACK_IMPORTED_MODULE_3__["SharedService"]
        }, {
          type: _Services_notification_service__WEBPACK_IMPORTED_MODULE_2__["NotificationService"]
        }, {
          type: _Services_websocket_service__WEBPACK_IMPORTED_MODULE_4__["WebsocketService"]
        }];
      };

      OptionsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-options",
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./options.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/options/options.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./options.page.scss */
        "./src/app/options/options.page.scss"))["default"]]
      })], OptionsPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=options-options-module-es5.js.map