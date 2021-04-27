(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["notifications-notifications-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/notifications/notifications.page.html":
    /*!*********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/notifications/notifications.page.html ***!
      \*********************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppNotificationsNotificationsPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Notifications</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n<ion-list *ngFor=\"let notification of myNotification\">\n  <ion-item-sliding >\n    <ion-item (click)=\"updateNotification(notification)\">\n      <ion-note style=\"margin-top: -45px\" slot=\"end\">\n        {{notification.time}}  \n      </ion-note>\n      <ion-label>\n        <h2 style=\"color:rgb(255, 75, 4);font-weight: bold;\">{{notification.title}}</h2>\n        <ion-row>\n          <p style=\"font-weight: bold; color: black;\">{{notification.body}}&nbsp;</p>\n        </ion-row>\n        \n        <p>check it out</p>\n      </ion-label>\n      \n    </ion-item>\n    <ion-item-options side=\"end\">\n      <ion-item-option style=\"background-color:rgb(255, 75, 4) ;\">\n        <ion-icon slot=\"icon-only\" name=\"trash\" (click)=\"deleteNotification(notification)\"></ion-icon>\n      </ion-item-option>\n    </ion-item-options>\n  </ion-item-sliding>\n</ion-list>\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/notifications/notifications-routing.module.ts":
    /*!***************************************************************!*\
      !*** ./src/app/notifications/notifications-routing.module.ts ***!
      \***************************************************************/

    /*! exports provided: NotificationsPageRoutingModule */

    /***/
    function srcAppNotificationsNotificationsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NotificationsPageRoutingModule", function () {
        return NotificationsPageRoutingModule;
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


      var _notifications_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./notifications.page */
      "./src/app/notifications/notifications.page.ts");

      var routes = [{
        path: '',
        component: _notifications_page__WEBPACK_IMPORTED_MODULE_3__["NotificationsPage"]
      }];

      var NotificationsPageRoutingModule = function NotificationsPageRoutingModule() {
        _classCallCheck(this, NotificationsPageRoutingModule);
      };

      NotificationsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], NotificationsPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/notifications/notifications.module.ts":
    /*!*******************************************************!*\
      !*** ./src/app/notifications/notifications.module.ts ***!
      \*******************************************************/

    /*! exports provided: NotificationsPageModule */

    /***/
    function srcAppNotificationsNotificationsModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NotificationsPageModule", function () {
        return NotificationsPageModule;
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


      var _notifications_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./notifications-routing.module */
      "./src/app/notifications/notifications-routing.module.ts");
      /* harmony import */


      var _notifications_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./notifications.page */
      "./src/app/notifications/notifications.page.ts");

      var NotificationsPageModule = function NotificationsPageModule() {
        _classCallCheck(this, NotificationsPageModule);
      };

      NotificationsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _notifications_routing_module__WEBPACK_IMPORTED_MODULE_5__["NotificationsPageRoutingModule"]],
        declarations: [_notifications_page__WEBPACK_IMPORTED_MODULE_6__["NotificationsPage"]]
      })], NotificationsPageModule);
      /***/
    },

    /***/
    "./src/app/notifications/notifications.page.scss":
    /*!*******************************************************!*\
      !*** ./src/app/notifications/notifications.page.scss ***!
      \*******************************************************/

    /*! exports provided: default */

    /***/
    function srcAppNotificationsNotificationsPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25vdGlmaWNhdGlvbnMvbm90aWZpY2F0aW9ucy5wYWdlLnNjc3MifQ== */";
      /***/
    },

    /***/
    "./src/app/notifications/notifications.page.ts":
    /*!*****************************************************!*\
      !*** ./src/app/notifications/notifications.page.ts ***!
      \*****************************************************/

    /*! exports provided: NotificationsPage */

    /***/
    function srcAppNotificationsNotificationsPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NotificationsPage", function () {
        return NotificationsPage;
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


      var _Services_websocket_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../Services/websocket.service */
      "./src/app/Services/websocket.service.ts");
      /* harmony import */


      var _Settings_AppSettings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../Settings/AppSettings */
      "./src/app/Settings/AppSettings.ts");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _Services_notification_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../Services/notification.service */
      "./src/app/Services/notification.service.ts");

      var NotificationsPage = /*#__PURE__*/function () {
        function NotificationsPage(notificationService, webSocketService, modalController) {
          _classCallCheck(this, NotificationsPage);

          this.notificationService = notificationService;
          this.webSocketService = webSocketService;
          this.modalController = modalController;
          this.myNotification = [];
          this.notificationBadge = 0;
          this.stompClient = this.webSocketService.connect();
        }

        _createClass(NotificationsPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.getNotification();
            this.notificationBadge = +1;
            console.log(this.notificationBadge);
            this.notificationService.getNotifsByUser().subscribe(function (data) {
              data.forEach(function (element) {
                _this.myNotification.push(element);
              });
            });
          }
        }, {
          key: "doRefresh",
          value: function doRefresh(event) {
            console.log('Begin async operation');
            this.getNotification();
            setTimeout(function () {
              console.log('Async operation has ended');
              event.target.complete();
            }, 2000);
          }
        }, {
          key: "getNotification",
          value: function getNotification() {
            var that = this;
            console.log(_Settings_AppSettings__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].details.username.toString());
            this.stompClient.connect({
              user: _Settings_AppSettings__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].details.username.toString()
            }, function (frame) {
              that.stompClient.subscribe("/user/queue/reply", function (message) {
                var notifId = JSON.parse(message.body).idNotification;
                var index = that.myNotification.findIndex(function (x) {
                  return x.idNotification === notifId;
                });
                var result = that.myNotification.find(function (obj) {
                  return obj.idNotification === JSON.parse(message.body).idNotification;
                });

                if (result === undefined) {
                  that.myNotification.push(JSON.parse(message.body));
                } else {
                  var foundIndex = that.myNotification.findIndex(function (item) {
                    return item.idNotification == result.idNotification;
                  });
                  that.myNotification[foundIndex].seen = 1;
                  that.myNotification[foundIndex] = JSON.parse(message.body);
                }
              });
            });
            console.log(this.notificationBadge);
          }
        }, {
          key: "deleteNotification",
          value: function deleteNotification(notification) {
            var _this2 = this;

            var index = this.myNotification.findIndex(function (obj) {
              return obj.idNotification === notification.idNotification;
            });
            this.notificationService.deleteNotificationById(notification.idNotification).subscribe(function (data) {
              _this2.myNotification.splice(index, 1);
            });
          }
        }, {
          key: "updateNotification",
          value: function updateNotification(notificationToUpdate) {
            notificationToUpdate.isSeen = 1;
            this.notificationService.updateNotification(notificationToUpdate.idNotification, _Settings_AppSettings__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].details.id).subscribe(function (data) {
              console.log(data);
            });
          }
        }]);

        return NotificationsPage;
      }();

      NotificationsPage.ctorParameters = function () {
        return [{
          type: _Services_notification_service__WEBPACK_IMPORTED_MODULE_5__["NotificationService"]
        }, {
          type: _Services_websocket_service__WEBPACK_IMPORTED_MODULE_2__["WebsocketService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]
        }];
      };

      NotificationsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-notifications",
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./notifications.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/notifications/notifications.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./notifications.page.scss */
        "./src/app/notifications/notifications.page.scss"))["default"]]
      })], NotificationsPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=notifications-notifications-module-es5.js.map