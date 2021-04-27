(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html":
    /*!***************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html ***!
      \***************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppHomeHomePageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content>\nthis is homepage\n</ion-content>\n <ion-menu side=\"start\" menuId=\"first\" contentId=\"content1\">\n        <ion-header>\n        </ion-header>\n          <ion-content>\n            <div class=\"menu-header-bg\"></div>\n            <div class=\"header-content\" >\n              <img src={{currentUser.photo}}>\n              <ion-label >\n                <h2 style=\"text-transform: lowercase; text-transform: capitalize;\">{{currentUser.firstName+\" \"+currentUser.lastName}}</h2>\n                <p>Mobile developer</p>\n              </ion-label>\n            </div>\n            \n\n            <ion-list lines=\"none\" class=\"menu-items\" *ngFor=\"let pages of navigate\">\n              <ion-menu-toggle auto-hide=\"true\" >\n              <ion-item class=\"highlight\" [class.highlight]=\"pages == 1\"  [routerLink]=\"pages.url\" routerDirection=\"forward\">\n                <ion-icon [name]=\"pages.icon\"></ion-icon>{{pages.title}}\n              </ion-item>\n            </ion-menu-toggle>\n            \n            </ion-list>\n            \n            <ion-item style=\"margin-left: 6%;\" lines=\"none\" class=\"menu-items\" (click)=\"logout()\">\n              <ion-icon name=\"exit-outline\"></ion-icon> Log Out\n            </ion-item>\n          </ion-content>\n    </ion-menu>\n\n<ion-router-outlet id=\"content1\"></ion-router-outlet>\n\n\n\n    ";
      /***/
    },

    /***/
    "./src/app/home/home-routing.module.ts":
    /*!*********************************************!*\
      !*** ./src/app/home/home-routing.module.ts ***!
      \*********************************************/

    /*! exports provided: HomeRouter */

    /***/
    function srcAppHomeHomeRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomeRouter", function () {
        return HomeRouter;
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


      var _Services_authguard_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../Services/authguard.service */
      "./src/app/Services/authguard.service.ts");
      /* harmony import */


      var _home_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./home.page */
      "./src/app/home/home.page.ts");

      var routes = [{
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_4__["HomePage"],
        children: [{
          path: '',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | dashboard-dashboard-module */
            [__webpack_require__.e("default~dashboard-dashboard-module~profile-profile-module~qrattendance-qrattendance-module"), __webpack_require__.e("dashboard-dashboard-module")]).then(__webpack_require__.bind(null,
            /*! ../dashboard/dashboard.module */
            "./src/app/dashboard/dashboard.module.ts")).then(function (m) {
              return m.DashboardPageModule;
            });
          },
          canActivate: [_Services_authguard_service__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
        }, {
          path: 'dashboard',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | dashboard-dashboard-module */
            [__webpack_require__.e("default~dashboard-dashboard-module~profile-profile-module~qrattendance-qrattendance-module"), __webpack_require__.e("dashboard-dashboard-module")]).then(__webpack_require__.bind(null,
            /*! ../dashboard/dashboard.module */
            "./src/app/dashboard/dashboard.module.ts")).then(function (m) {
              return m.DashboardPageModule;
            });
          },
          canActivate: [_Services_authguard_service__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
        }, {
          path: 'conge',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | conge-conge-module */
            [__webpack_require__.e("common"), __webpack_require__.e("conge-conge-module")]).then(__webpack_require__.bind(null,
            /*! ../conge/conge.module */
            "./src/app/conge/conge.module.ts")).then(function (m) {
              return m.CongePageModule;
            });
          },
          canActivate: [_Services_authguard_service__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
        }, {
          path: 'attendance-users',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | attendance-users-attendance-users-module */
            [__webpack_require__.e("common"), __webpack_require__.e("attendance-users-attendance-users-module")]).then(__webpack_require__.bind(null,
            /*! ../attendance-users/attendance-users.module */
            "./src/app/attendance-users/attendance-users.module.ts")).then(function (m) {
              return m.AttendanceUsersPageModule;
            });
          },
          canActivate: [_Services_authguard_service__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
        }, {
          path: 'users-list',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | users-list-users-list-module */
            [__webpack_require__.e("common"), __webpack_require__.e("users-list-users-list-module")]).then(__webpack_require__.bind(null,
            /*! ../users-list/users-list.module */
            "./src/app/users-list/users-list.module.ts")).then(function (m) {
              return m.UsersListPageModule;
            });
          },
          canActivate: [_Services_authguard_service__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
        }]
      }];

      var HomeRouter = function HomeRouter() {
        _classCallCheck(this, HomeRouter);
      };

      HomeRouter = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], HomeRouter);
      /***/
    },

    /***/
    "./src/app/home/home.module.ts":
    /*!*************************************!*\
      !*** ./src/app/home/home.module.ts ***!
      \*************************************/

    /*! exports provided: HomePageModule */

    /***/
    function srcAppHomeHomeModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomePageModule", function () {
        return HomePageModule;
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


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _home_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./home.page */
      "./src/app/home/home.page.ts");
      /* harmony import */


      var _home_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./home-routing.module */
      "./src/app/home/home-routing.module.ts");

      var HomePageModule = function HomePageModule() {
        _classCallCheck(this, HomePageModule);
      };

      HomePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _home_routing_module__WEBPACK_IMPORTED_MODULE_6__["HomeRouter"]],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_5__["HomePage"]]
      })], HomePageModule);
      /***/
    },

    /***/
    "./src/app/home/home.page.scss":
    /*!*************************************!*\
      !*** ./src/app/home/home.page.scss ***!
      \*************************************/

    /*! exports provided: default */

    /***/
    function srcAppHomeHomePageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "* {\n  font-family: lato;\n}\n\n.menu-header-bg {\n  height: 180px;\n  width: 350px;\n  background: linear-gradient(rgba(240, 165, 0, 0.8), rgba(240, 165, 0, 0.8));\n  background: linear-gradient(#ff9a02, #f08800);\n  background: #fa8a2f;\n  transform: rotate(-15deg);\n  border-radius: 10px 10px 10px 50px;\n  margin-left: -18px;\n  margin-top: -50px;\n  margin-bottom: 60px;\n}\n\n.header-content {\n  position: absolute;\n  top: 30px;\n  left: 15px;\n  display: flex;\n  align-items: center;\n}\n\n.header-content img {\n  width: 65px;\n  height: 65px;\n  border-radius: 50%;\n  border: px;\n  border-color: white;\n  margin-right: 14px;\n}\n\n.header-content h2 {\n  font-weight: 300;\n  color: #fff;\n  font-family: Roboto;\n}\n\n.header-content p {\n  font-size: 12px;\n  color: #e4e4e4;\n  font-weight: 100;\n  letter-spacing: 0.4px;\n  font-family: Roboto;\n}\n\n.action-button {\n  display: flex;\n  justify-content: center;\n  margin-bottom: 20px;\n}\n\nion-button {\n  text-transform: capitalize;\n  font-weight: 300;\n  --backgroud: #628cff;\n  --border-radius:7px;\n  --box-shadow: none;\n}\n\nion-icon {\n  margin-right: 1px;\n}\n\n.menu-items {\n  margin: 0px;\n}\n\n.menu-items ion-icon {\n  margin-right: 20px;\n  color: #86979f;\n}\n\n.menu-items ion-item {\n  padding-left: 20px;\n  margin-bottom: 10px;\n}\n\n.menu-items .highlight {\n  border-left: 5px solid;\n  color: #ff3c00 !important;\n  padding-left: 15px;\n  font-family: Roboto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFBO0FBQ0o7O0FBQ0E7RUFDSSxhQUFBO0VBQ0EsWUFBQTtFQUNBLDJFQUFBO0VBQ0EsNkNBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0NBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUFFSjs7QUFFQTtFQUVJLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUFBSjs7QUFFSTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQUFSOztBQUdJO0VBQ0ksZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7QUFEUjs7QUFHSTtFQUNJLGVBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0FBRFI7O0FBTUE7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQUhKOztBQU1BO0VBQ0ksMEJBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQUhKOztBQUtBO0VBQ0ksaUJBQUE7QUFGSjs7QUFLQTtFQUNJLFdBQUE7QUFGSjs7QUFJSTtFQUNJLGtCQUFBO0VBQ0EsY0FBQTtBQUZSOztBQUtJO0VBQ0ksa0JBQUE7RUFDQSxtQkFBQTtBQUhSOztBQUtJO0VBQ0ksc0JBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUFIUiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqe1xyXG4gICAgZm9udC1mYW1pbHk6IGxhdG87XHJcbn1cclxuLm1lbnUtaGVhZGVyLWJne1xyXG4gICAgaGVpZ2h0OiAxODBweDtcclxuICAgIHdpZHRoOiAzNTBweDtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChyZ2JhKDI0MCwgMTY1LCAwLCAwLjgpLCByZ2JhKDI0MCwgMTY1LCAwLCAwLjgpKTtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChyZ2IoMjU1LCAxNTQsIDIpLCByZ2IoMjQwLCAxMzYsIDApKTtcclxuICAgIGJhY2tncm91bmQ6ICNmYThhMmY7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtMTVkZWcpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweCAxMHB4IDEwcHggNTBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAtMThweDtcclxuICAgIG1hcmdpbi10b3A6IC01MHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNjBweDtcclxuXHJcbn1cclxuXHJcbi5oZWFkZXItY29udGVudHtcclxuXHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDMwcHg7XHJcbiAgICBsZWZ0OiAxNXB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gICAgaW1ne1xyXG4gICAgICAgIHdpZHRoOiA2NXB4O1xyXG4gICAgICAgIGhlaWdodDogNjVweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgYm9yZGVyOiBweCA7XHJcbiAgICAgICAgYm9yZGVyLWNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDE0cHg7XHJcbiAgICB9XHJcblxyXG4gICAgaDJ7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICBmb250LWZhbWlseTogUm9ib3RvO1xyXG4gICAgfVxyXG4gICAgcHtcclxuICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgY29sb3I6ICNlNGU0ZTQ7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDEwMDtcclxuICAgICAgICBsZXR0ZXItc3BhY2luZzogMC40cHg7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IFJvYm90bztcclxuXHJcbiAgICB9XHJcbn1cclxuXHJcbi5hY3Rpb24tYnV0dG9ue1xyXG4gICAgZGlzcGxheTpmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG5cclxufVxyXG5pb24tYnV0dG9ue1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgLS1iYWNrZ3JvdWQ6ICM2MjhjZmY7XHJcbiAgICAtLWJvcmRlci1yYWRpdXM6N3B4O1xyXG4gICAgLS1ib3gtc2hhZG93OiBub25lO1xyXG59XHJcbmlvbi1pY29ue1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxcHg7XHJcbn1cclxuXHJcbi5tZW51LWl0ZW1ze1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcblxyXG4gICAgaW9uLWljb257XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG4gICAgICAgIGNvbG9yOiAjODY5NzlmO1xyXG4gICAgfVxyXG5cclxuICAgIGlvbi1pdGVte1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMjBweDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgfVxyXG4gICAgLmhpZ2hsaWdodHtcclxuICAgICAgICBib3JkZXItbGVmdDogNXB4IHNvbGlkO1xyXG4gICAgICAgIGNvbG9yOiAjZmYzYzAwICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBSb2JvdG87XHJcbiAgICB9XHJcbn0iXX0= */";
      /***/
    },

    /***/
    "./src/app/home/home.page.ts":
    /*!***********************************!*\
      !*** ./src/app/home/home.page.ts ***!
      \***********************************/

    /*! exports provided: HomePage */

    /***/
    function srcAppHomeHomePageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomePage", function () {
        return HomePage;
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


      var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic-native/splash-screen/ngx */
      "./node_modules/@ionic-native/splash-screen/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic-native/status-bar/ngx */
      "./node_modules/@ionic-native/status-bar/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _Services_authentication_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../Services/authentication.service */
      "./src/app/Services/authentication.service.ts");
      /* harmony import */


      var _Settings_AppSettings__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../Settings/AppSettings */
      "./src/app/Settings/AppSettings.ts");

      var HomePage = /*#__PURE__*/function () {
        function HomePage(platform, splashScreen, statusBar, router, authService) {
          _classCallCheck(this, HomePage);

          this.platform = platform;
          this.splashScreen = splashScreen;
          this.statusBar = statusBar;
          this.router = router;
          this.authService = authService;
          this.homePage = "";
          this.sideMenu();
          this.initializeApp();
        }

        _createClass(HomePage, [{
          key: "initializeApp",
          value: function initializeApp() {
            var _this = this;

            this.platform.ready().then(function () {
              _this.statusBar.styleDefault();

              _this.splashScreen.hide();
            });
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            this.homePage = this.router.url;
            this.currentUser = _Settings_AppSettings__WEBPACK_IMPORTED_MODULE_7__["AppSettings"].details;
            console.log(this.currentUser);
          }
        }, {
          key: "sideMenu",
          value: function sideMenu() {
            this.navigate = [{
              title: "Attendance",
              url: "/options/home/attendance-users",
              icon: "flash"
            }, {
              title: "Holidys",
              url: "/options/home/conge",
              icon: "calendar-outline"
            }, {
              title: "Users",
              url: "/options/home/users-list",
              icon: "bar-chart-outline"
            }];
          }
        }, {
          key: "logout",
          value: function logout() {
            console.log("LOGEDOUT");
            this.authService.logout();
          }
        }]);

        return HomePage;
      }();

      HomePage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Platform"]
        }, {
          type: _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__["SplashScreen"]
        }, {
          type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__["StatusBar"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _Services_authentication_service__WEBPACK_IMPORTED_MODULE_6__["AuthenticationService"]
        }];
      };

      HomePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./home.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./home.page.scss */
        "./src/app/home/home.page.scss"))["default"]]
      })], HomePage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=home-home-module-es5.js.map