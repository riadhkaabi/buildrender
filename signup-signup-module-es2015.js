(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["signup-signup-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/signup/signup.page.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/signup/signup.page.html ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button color=\"primary\">\n        <ion-icon slot=\"icon-only\" name=\"arrow-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-buttons slot=\"end\">\n      <ion-button routerLink=\"/login\">Log in</ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div id=\"header\">\n    <img src=\"assets/images/bertsch.png\" />\n    <h1>Create your Account</h1>\n  </div>\n  <form id=\"form\" role=\"form\" [formGroup]=\"userForm\" (ngSubmit)=\"onSubmit()\">\n    <ion-input formControlName=\"firstName\" placeholder=\"First Name\" class=\"input-underline\" color=\"none\"></ion-input>\n    <ion-input formControlName=\"lastName\"placeholder=\"Last Name\" class=\"input-underline\" color=\"none\"></ion-input>\n    <ion-input formControlName=\"email\" placeholder=\"Email\" class=\"input-underline\" color=\"none\"></ion-input>\n    <ion-input formControlName=\"password\" placeholder=\"Password\" type=\"password\" class=\"input-underline\" color=\"none\"></ion-input>\n    <ion-input formControlName=\"phoneNumber\" placeholder=\"Phone Number\" class=\"input-underline\" color=\"none\"></ion-input>\n    <ion-button expand=\"block\" shape=\"round\" type=\"submit\" routerLink=\"/add-picture\" >Join Us</ion-button>\n  </form>\n\n  <p>By pressing 'Join Us' you agree to <br />our terms & conditions.</p>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/signup/signup-routing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/signup/signup-routing.module.ts ***!
  \*************************************************/
/*! exports provided: SignupPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupPageRoutingModule", function() { return SignupPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _signup_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./signup.page */ "./src/app/signup/signup.page.ts");




const routes = [
    {
        path: '',
        component: _signup_page__WEBPACK_IMPORTED_MODULE_3__["SignupPage"]
    }
];
let SignupPageRoutingModule = class SignupPageRoutingModule {
};
SignupPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SignupPageRoutingModule);



/***/ }),

/***/ "./src/app/signup/signup.module.ts":
/*!*****************************************!*\
  !*** ./src/app/signup/signup.module.ts ***!
  \*****************************************/
/*! exports provided: SignupPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupPageModule", function() { return SignupPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _signup_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./signup-routing.module */ "./src/app/signup/signup-routing.module.ts");
/* harmony import */ var _signup_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./signup.page */ "./src/app/signup/signup.page.ts");







let SignupPageModule = class SignupPageModule {
};
SignupPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _signup_routing_module__WEBPACK_IMPORTED_MODULE_5__["SignupPageRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
        ],
        declarations: [_signup_page__WEBPACK_IMPORTED_MODULE_6__["SignupPage"]],
    })
], SignupPageModule);



/***/ }),

/***/ "./src/app/signup/signup.page.scss":
/*!*****************************************!*\
  !*** ./src/app/signup/signup.page.scss ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-toolbar {\n  --background: #f5f5f3;\n}\nion-toolbar ion-button {\n  text-transform: initial;\n  font-size: 17px;\n}\nion-content {\n  --background: #f5f5f3;\n}\nion-content #header {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\nion-content #header h1 {\n  font-weight: 700;\n  font-size: 26px;\n  color: #010100;\n}\nion-content #header img {\n  width: 100px;\n  height: 100px;\n  border-radius: 50%;\n  border: 2px solid #ff3c00;\n}\nion-content #form {\n  margin-top: 15%;\n  padding-left: 30px;\n  padding-right: 30px;\n}\nion-content #form ion-button {\n  margin-top: 35px;\n  height: 48px;\n  font-size: 18px;\n  text-transform: initial;\n  border-radius: 50px;\n  box-shadow: 1px 8px 8px 0px rgba(0, 0, 0, 0.05);\n  --box-shadow: none;\n}\nion-content p {\n  text-align: center;\n  color: #b6b6b6;\n  margin-top: 40px;\n}\nion-content .input-lg {\n  height: 46px;\n  padding: 10px 16px;\n  font-size: 18px;\n  line-height: 1.3333333;\n  border-radius: 0;\n}\nion-content .input-underline {\n  margin-top: 20px;\n  border: none;\n  box-shadow: none;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.5);\n  color: #020202;\n  border-radius: 0;\n  -webkit-text-emphasis-color: black;\n          text-emphasis-color: black;\n  font-style: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lnbnVwL3NpZ251cC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQkFBQTtBQUNGO0FBQ0U7RUFDRSx1QkFBQTtFQUNBLGVBQUE7QUFDSjtBQUdBO0VBQ0UscUJBQUE7QUFBRjtBQUVFO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7QUFBSjtBQUVJO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQUFOO0FBR0k7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7QUFETjtBQUtFO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUFISjtBQUtJO0VBQ0UsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSwrQ0FBQTtFQUNBLGtCQUFBO0FBSE47QUFPRTtFQUNFLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FBTEo7QUFRRTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0FBTko7QUFTRTtFQUNFLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsMkNBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQ0FBQTtVQUFBLDBCQUFBO0VBQ0EsaUJBQUE7QUFQSiIsImZpbGUiOiJzcmMvYXBwL3NpZ251cC9zaWdudXAucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRvb2xiYXIge1xuICAtLWJhY2tncm91bmQ6ICNmNWY1ZjM7XG5cbiAgaW9uLWJ1dHRvbiB7XG4gICAgdGV4dC10cmFuc2Zvcm06IGluaXRpYWw7XG4gICAgZm9udC1zaXplOiAxN3B4O1xuICB9XG59XG5cbmlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiAjZjVmNWYzO1xuXG4gICNoZWFkZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgaDEge1xuICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgIGZvbnQtc2l6ZTogMjZweDtcbiAgICAgIGNvbG9yOiAjMDEwMTAwO1xuICAgIH1cblxuICAgIGltZyB7XG4gICAgICB3aWR0aDogMTAwcHg7XG4gICAgICBoZWlnaHQ6IDEwMHB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgYm9yZGVyOiAycHggc29saWQjZmYzYzAwO1xuICAgIH1cbiAgfVxuXG4gICNmb3JtIHtcbiAgICBtYXJnaW4tdG9wOiAxNSU7XG4gICAgcGFkZGluZy1sZWZ0OiAzMHB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDMwcHg7XG5cbiAgICBpb24tYnV0dG9uIHtcbiAgICAgIG1hcmdpbi10b3A6IDM1cHg7XG4gICAgICBoZWlnaHQ6IDQ4cHg7XG4gICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICB0ZXh0LXRyYW5zZm9ybTogaW5pdGlhbDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gICAgICBib3gtc2hhZG93OiAxcHggOHB4IDhweCAwcHggcmdiYSgwLCAwLCAwLCAwLjA1KTtcbiAgICAgIC0tYm94LXNoYWRvdzogbm9uZTtcbiAgICB9XG4gIH1cblxuICBwIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgY29sb3I6ICNiNmI2YjY7XG4gICAgbWFyZ2luLXRvcDogNDBweDtcbiAgfVxuXG4gIC5pbnB1dC1sZyB7XG4gICAgaGVpZ2h0OiA0NnB4O1xuICAgIHBhZGRpbmc6IDEwcHggMTZweDtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgbGluZS1oZWlnaHQ6IDEuMzMzMzMzMztcbiAgICBib3JkZXItcmFkaXVzOiAwO1xuICB9XG4gIFxuICAuaW5wdXQtdW5kZXJsaW5lIHtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3gtc2hhZG93OiBub25lO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gICAgY29sb3I6IHJnYigyLCAyLCAyKTtcbiAgICBib3JkZXItcmFkaXVzOiAwO1xuICAgIHRleHQtZW1waGFzaXMtY29sb3I6IHJnYigwLCAwLCAwKTtcbiAgICBmb250LXN0eWxlOiByZ2IoMCwgMCwgMCk7XG4gIH1cbiAgXG5cbiAgXG59XG4iXX0= */");

/***/ }),

/***/ "./src/app/signup/signup.page.ts":
/*!***************************************!*\
  !*** ./src/app/signup/signup.page.ts ***!
  \***************************************/
/*! exports provided: SignupPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupPage", function() { return SignupPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _Services_chat_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Services/chat.service */ "./src/app/Services/chat.service.ts");
/* harmony import */ var _Services_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Services/user.service */ "./src/app/Services/user.service.ts");







//import{ Deeplinks } from '@ionic-native/deeplinks/ngx'
let SignupPage = class SignupPage {
    constructor(route, userService, router, formBuilder, loadingController, chatService, alertController) {
        this.route = route;
        this.userService = userService;
        this.router = router;
        this.formBuilder = formBuilder;
        this.loadingController = loadingController;
        this.chatService = chatService;
        this.alertController = alertController;
        this.wcode = '';
        this.userForm = this.formBuilder.group({
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(8)]],
            firstName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            lastName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            phoneNumber: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(8)]]
        });
    }
    ngOnInit() { }
    onSubmit() {
        if (this.userForm.valid) {
            const user = this.userForm.value;
            user.firstName = this.userForm.value.firstName;
            user.lastName = this.userForm.value.lastName;
            user.email = this.userForm.value.email;
            user.password = this.userForm.value.password;
            user.phoneNumber = this.userForm.value.phoneNumber;
            console.log(user);
            this.userService.validateUser(this.route.snapshot.paramMap.get('token'), user).subscribe(data => {
                console.log(data['id']);
                let userId = data['id'];
                this.router.navigate(['/add-picture', userId]);
            }, error => { this.error = error; });
        }
        else {
            alert('form not valid!');
        }
        this.signUpToFireBase();
    }
    signUpToFireBase() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create();
            yield loading.present();
            this.chatService
                .signup(this.userForm.controls.email.value, this.userForm.controls.password.value)
                .then((user) => {
                loading.dismiss();
                //this.router.navigateByUrl('/login', { replaceUrl: true });
            }, (err) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                loading.dismiss();
                const alert = yield this.alertController.create({
                    header: 'Sign up failed',
                    message: err.message,
                    buttons: ['OK'],
                });
                yield alert.present();
            }));
        });
    }
};
SignupPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _Services_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"] },
    { type: _Services_chat_service__WEBPACK_IMPORTED_MODULE_5__["ChatService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] }
];
SignupPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-signup',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./signup.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/signup/signup.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./signup.page.scss */ "./src/app/signup/signup.page.scss")).default]
    })
], SignupPage);



/***/ })

}]);
//# sourceMappingURL=signup-signup-module-es2015.js.map