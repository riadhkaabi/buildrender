(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-login-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      \n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"has-header\" overflow-scroll=\"false\" has-bouncing=\"true\"  style=\"--ion-background-color:#e9e6e6;\" >\n  <h1></h1>\n    <div id=\"header\">\n    <img src=\"assets/images/bertsch.png\" />\n    <ion-row>\n    <h1 style=\"color: white;\" >Bertsch&nbsp;</h1><h1 style=\"color: #f56d1f;\">Innov</h1><h1 style=\"color: white;\" >ation</h1>\n  </ion-row>\n  </div>\n\n  <form id=\"form\" role=\"form\" [formGroup]=\"form\" (ngSubmit)=\"onSubmit()\">\n    <ion-input style=\"font-family: Roboto;\" ng-model=\"name\" formControlName=\"username\" placeholder=\"Username\" class=\"input-underline\" color=\"none\"></ion-input>\n    <ion-input style=\"font-family: Roboto;\" formControlName=\"password\" placeholder=\"Password\" type =\"password\" class=\"input-underline\"></ion-input>\n    <ion-button style=\"text-transform: lowercase; text-transform: capitalize;font-family: Roboto;\" expand=\"block\" shape=\"round\" color=\"none\" class=\"ion-btn\" type=\"submit\">Login</ion-button>\n    <ion-button style=\"text-transform: lowercase; text-transform: capitalize;font-family: Roboto;\" routerLink=\"/signup\" expand=\"block\" shape=\"round\" color=\"primary\" class=\"ion-btn\" >Sign Up</ion-button>\n  </form>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/Entities/Role.ts":
/*!**********************************!*\
  !*** ./src/app/Entities/Role.ts ***!
  \**********************************/
/*! exports provided: Role */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Role", function() { return Role; });
var Role;
(function (Role) {
    Role["User"] = "ROLE_USER";
    Role["Admin"] = "ROLE_ADMIN";
})(Role || (Role = {}));


/***/ }),

/***/ "./src/app/login/login-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/login/login-routing.module.ts ***!
  \***********************************************/
/*! exports provided: LoginPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageRoutingModule", function() { return LoginPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login.page */ "./src/app/login/login.page.ts");




const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_3__["LoginPage"]
    }
];
let LoginPageRoutingModule = class LoginPageRoutingModule {
};
LoginPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], LoginPageRoutingModule);



/***/ }),

/***/ "./src/app/login/login.module.ts":
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login-routing.module */ "./src/app/login/login-routing.module.ts");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.page */ "./src/app/login/login.page.ts");








let LoginPageModule = class LoginPageModule {
};
LoginPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _login_routing_module__WEBPACK_IMPORTED_MODULE_5__["LoginPageRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]],
    })
], LoginPageModule);



/***/ }),

/***/ "./src/app/login/login.page.scss":
/*!***************************************!*\
  !*** ./src/app/login/login.page.scss ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-toolbar {\n  --background: #222;\n}\nion-toolbar ion-button {\n  text-transform: initial;\n  font-size: 17px;\n}\n.background-shape {\n  border-radius: 20px;\n}\n.input-lg {\n  height: 46px;\n  padding: 10px 16px;\n  font-size: 18px;\n  line-height: 1.3333333;\n  border-radius: 0;\n}\n.input-underline {\n  margin-top: 20px;\n  background: 0 0;\n  border: none;\n  box-shadow: none;\n  border-bottom: 2px solid rgba(255, 255, 255, 0.5);\n  color: #fff;\n  border-radius: 0;\n  -webkit-text-emphasis-color: #fff;\n          text-emphasis-color: #fff;\n  font-style: #fff;\n}\n.ion-btn {\n  margin-top: 15px;\n  height: 48px;\n  font-size: 18px;\n  border-radius: 50px;\n  background: #222;\n  border: 2px solid rgba(255, 255, 255, 0.8);\n  font-size: 18px;\n  font-family: Arial, Helvetica, sans-serif;\n  line-height: 20px;\n}\n.ion-btn:hover,\n.ion-btn:focus,\n.ion-btn:active,\n.ion-btn:visited {\n  color: white;\n  border: 2px solid white;\n  outline: none;\n}\nion-content {\n  --background: #222;\n}\nion-content #header {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\nion-content #header h1 {\n  font-weight: 700;\n  font-size: 26px;\n  color: #010100;\n}\nion-content #header img {\n  width: 100px;\n  height: 100px;\n  border-radius: 50%;\n  border: 2px solid #ff3c00;\n}\nion-content #form {\n  margin-top: 10%;\n  padding-left: 30px;\n  padding-right: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlBO0VBQ0Usa0JBQUE7QUFIRjtBQUtFO0VBQ0UsdUJBQUE7RUFDQSxlQUFBO0FBSEo7QUFPQTtFQUVFLG1CQUFBO0FBTEY7QUFRQTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0FBTEY7QUFRQTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGlEQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUNBQUE7VUFBQSx5QkFBQTtFQUNBLGdCQUFBO0FBTEY7QUFPQTtFQUVFLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFFQSxtQkFBQTtFQUNBLGdCQTVDd0I7RUE2Q3hCLDBDQUFBO0VBQ0EsZUFBQTtFQUNBLHlDQUFBO0VBQ0EsaUJBQUE7QUFMRjtBQU9BOzs7O0VBSUUsWUFBQTtFQUNBLHVCQUFBO0VBQ0EsYUFBQTtBQUpGO0FBTUE7RUFDRSxrQkFBQTtBQUhGO0FBS0U7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtBQUhKO0FBS0k7RUFDRSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FBSE47QUFNSTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtBQUpOO0FBUUU7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQU5KIiwiZmlsZSI6InNyYy9hcHAvbG9naW4vbG9naW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJHRvcG5hdi1iYWNrZ3JvdW5kLWNvbG9yOiAjMjIyO1xuXG5cblxuaW9uLXRvb2xiYXIge1xuICAtLWJhY2tncm91bmQ6ICMyMjI7XG5cbiAgaW9uLWJ1dHRvbiB7XG4gICAgdGV4dC10cmFuc2Zvcm06IGluaXRpYWw7XG4gICAgZm9udC1zaXplOiAxN3B4O1xuICB9XG59XG5cbi5iYWNrZ3JvdW5kLXNoYXBle1xuICBcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbn1cblxuLmlucHV0LWxnIHtcbiAgaGVpZ2h0OiA0NnB4O1xuICBwYWRkaW5nOiAxMHB4IDE2cHg7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgbGluZS1oZWlnaHQ6IDEuMzMzMzMzMztcbiAgYm9yZGVyLXJhZGl1czogMDtcbn1cblxuLmlucHV0LXVuZGVybGluZSB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIGJhY2tncm91bmQ6IDAgMDtcbiAgYm9yZGVyOiBub25lO1xuICBib3gtc2hhZG93OiBub25lO1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xuICBjb2xvcjogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogMDtcbiAgdGV4dC1lbXBoYXNpcy1jb2xvcjogI2ZmZjtcbiAgZm9udC1zdHlsZTogI2ZmZjtcbn1cbi5pb24tYnRuIHtcbiAgXG4gIG1hcmdpbi10b3A6IDE1cHg7XG4gIGhlaWdodDogNDhweDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIGJhY2tncm91bmQ6ICR0b3BuYXYtYmFja2dyb3VuZC1jb2xvcjtcbiAgYm9yZGVyOiAycHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuICBsaW5lLWhlaWdodDogMjBweDtcbn1cbi5pb24tYnRuOmhvdmVyLFxuLmlvbi1idG46Zm9jdXMsXG4uaW9uLWJ0bjphY3RpdmUsXG4uaW9uLWJ0bjp2aXNpdGVkIHtcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMSk7XG4gIGJvcmRlcjogMnB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMSk7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5pb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogIzIyMjtcblxuICAjaGVhZGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgIGgxIHtcbiAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICBmb250LXNpemU6IDI2cHg7XG4gICAgICBjb2xvcjogIzAxMDEwMDtcbiAgICB9XG5cbiAgICBpbWcge1xuICAgICAgd2lkdGg6IDEwMHB4O1xuICAgICAgaGVpZ2h0OiAxMDBweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgIGJvcmRlcjogMnB4IHNvbGlkI2ZmM2MwMDtcbiAgICB9XG4gIH1cblxuICAjZm9ybSB7XG4gICAgbWFyZ2luLXRvcDogMTAlO1xuICAgIHBhZGRpbmctbGVmdDogMzBweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAzMHB4O1xuICBcbiAgfVxufVxuXG4iXX0= */");

/***/ }),

/***/ "./src/app/login/login.page.ts":
/*!*************************************!*\
  !*** ./src/app/login/login.page.ts ***!
  \*************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _Services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Services/authentication.service */ "./src/app/Services/authentication.service.ts");
/* harmony import */ var _Services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Services/user.service */ "./src/app/Services/user.service.ts");
/* harmony import */ var _Settings_AppSettings__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Settings/AppSettings */ "./src/app/Settings/AppSettings.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _Entities_Role__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Entities/Role */ "./src/app/Entities/Role.ts");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-auth.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-firestore.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _Services_chat_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../Services/chat.service */ "./src/app/Services/chat.service.ts");
/* harmony import */ var _ionic_native_deeplinks_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic-native/deeplinks/ngx */ "./node_modules/@ionic-native/deeplinks/__ivy_ngcc__/ngx/index.js");













let LoginPage = class LoginPage {
    constructor(authService, router, userService, afAuth, afs, loadingController, alertController, chatService, deeplink) {
        this.authService = authService;
        this.router = router;
        this.userService = userService;
        this.afAuth = afAuth;
        this.afs = afs;
        this.loadingController = loadingController;
        this.alertController = alertController;
        this.chatService = chatService;
        this.deeplink = deeplink;
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormGroup"]({
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](''),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](''),
        });
    }
    ngOnInit() {
    }
    onSubmit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.form.valid) {
                this.authService.authenticate(this.form.controls.username.value, this.form.controls.password.value).subscribe(data => {
                    localStorage.setItem('token', data.token);
                    this.userService.details(this.form.controls.username.value).subscribe(user => {
                        localStorage.setItem('user', JSON.stringify(user));
                        _Settings_AppSettings__WEBPACK_IMPORTED_MODULE_5__["AppSettings"].details = user;
                        this.email = _Settings_AppSettings__WEBPACK_IMPORTED_MODULE_5__["AppSettings"].details.email;
                        this.currentUser = _Settings_AppSettings__WEBPACK_IMPORTED_MODULE_5__["AppSettings"].details;
                        console.log(this.currentUser);
                        if (_Settings_AppSettings__WEBPACK_IMPORTED_MODULE_5__["AppSettings"].details.authorities.includes(_Entities_Role__WEBPACK_IMPORTED_MODULE_7__["Role"].Admin)) {
                            console.log('admin connected');
                            this.router.navigate(['/options/home/dashboard']);
                        }
                        else {
                            console.log('user connected');
                            console.log('connected user email' + this.email);
                            this.router.navigate(['/options/profile']);
                        }
                    });
                }, error => {
                    this.error = error.message;
                });
            }
            this.authService.fireBaseAuth();
            this.signInToFirebase();
        });
    }
    signInToFirebase() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create();
            yield loading.present();
            console.log('firebaseEmail' + this.email);
            this.chatService
                .signIn(this.email, this.form.controls.password.value)
                .then((res) => {
                loading.dismiss();
            }, (err) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                loading.dismiss();
                const alert = yield this.alertController.create({
                    message: "Invalid Username or password",
                    buttons: ['OK'],
                });
                yield alert.present();
            }));
        });
    }
};
LoginPage.ctorParameters = () => [
    { type: _Services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _Services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] },
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_8__["AngularFireAuth"] },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_9__["AngularFirestore"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["AlertController"] },
    { type: _Services_chat_service__WEBPACK_IMPORTED_MODULE_11__["ChatService"] },
    { type: _ionic_native_deeplinks_ngx__WEBPACK_IMPORTED_MODULE_12__["Deeplinks"] }
];
LoginPage.propDecorators = {
    currentUser: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
};
LoginPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./login.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./login.page.scss */ "./src/app/login/login.page.scss")).default]
    })
], LoginPage);



/***/ })

}]);
//# sourceMappingURL=login-login-module-es2015.js.map