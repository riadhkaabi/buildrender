(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["add-picture-add-picture-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/add-picture/add-picture.page.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/add-picture/add-picture.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<ion-content [fullscreen]=\"true\" style=\"--ion-background-color:#e9e6e6;\">\n  <ion-card  style=\"border-radius: 20px;\" style=\"--ion-background-color:#ffffff;margin-top: 60px;\">\n  <img   src=\"{{imgURL}}\" height=\"400\" width=\"400\">\n\n<ion-button expand=\"block\" (click)=\"uploadImage()\">Create</ion-button>\n</ion-card>\n\n<ion-fab horizontal=\"end\" vertical=\"bottom\" slot=\"fixed\">\n  <ion-fab-button color=\"light\">\n    <ion-icon name=\"images-outline\"></ion-icon>\n  </ion-fab-button>\n  <ion-fab-list side=\"start\">\n    <ion-fab-button (click)=\"getCamera()\" color=\"light\">\n      <ion-icon name=\"camera-outline\"></ion-icon>\n    </ion-fab-button>\n    <ion-fab-button (click)=\"getGallery()\" color=\"light\">\n      <ion-icon name=\"image-outline\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab-list>\n</ion-fab>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/add-picture/add-picture-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/add-picture/add-picture-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: AddPicturePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddPicturePageRoutingModule", function() { return AddPicturePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _add_picture_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add-picture.page */ "./src/app/add-picture/add-picture.page.ts");




const routes = [
    {
        path: '',
        component: _add_picture_page__WEBPACK_IMPORTED_MODULE_3__["AddPicturePage"]
    }
];
let AddPicturePageRoutingModule = class AddPicturePageRoutingModule {
};
AddPicturePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AddPicturePageRoutingModule);



/***/ }),

/***/ "./src/app/add-picture/add-picture.module.ts":
/*!***************************************************!*\
  !*** ./src/app/add-picture/add-picture.module.ts ***!
  \***************************************************/
/*! exports provided: AddPicturePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddPicturePageModule", function() { return AddPicturePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _add_picture_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./add-picture-routing.module */ "./src/app/add-picture/add-picture-routing.module.ts");
/* harmony import */ var _add_picture_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./add-picture.page */ "./src/app/add-picture/add-picture.page.ts");







let AddPicturePageModule = class AddPicturePageModule {
};
AddPicturePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _add_picture_routing_module__WEBPACK_IMPORTED_MODULE_5__["AddPicturePageRoutingModule"]
        ],
        declarations: [_add_picture_page__WEBPACK_IMPORTED_MODULE_6__["AddPicturePage"]]
    })
], AddPicturePageModule);



/***/ }),

/***/ "./src/app/add-picture/add-picture.page.scss":
/*!***************************************************!*\
  !*** ./src/app/add-picture/add-picture.page.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkZC1waWN0dXJlL2FkZC1waWN0dXJlLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/add-picture/add-picture.page.ts":
/*!*************************************************!*\
  !*** ./src/app/add-picture/add-picture.page.ts ***!
  \*************************************************/
/*! exports provided: AddPicturePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddPicturePage", function() { return AddPicturePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/file-transfer/ngx */ "./node_modules/@ionic-native/file-transfer/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _Services_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Services/user.service */ "./src/app/Services/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");








let AddPicturePage = class AddPicturePage {
    constructor(navCtrl, http, userService, transfer, route, router, camera, loadingCtrl, toastCtrl) {
        this.navCtrl = navCtrl;
        this.http = http;
        this.userService = userService;
        this.transfer = transfer;
        this.route = route;
        this.router = router;
        this.camera = camera;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.route.params.subscribe(params => {
            this.userId = params['userId'];
        });
    }
    ngOnInit() {
        this.getCamera();
    }
    getCamera() {
        this.camera.getPicture({
            sourceType: this.camera.PictureSourceType.CAMERA,
            destinationType: this.camera.DestinationType.DATA_URL
        }).then((res) => {
            this.imgURL = 'data:image/jpeg;base64,' + res;
            this.realImage = res;
            console.log(res);
        }).catch(e => {
            console.log(e);
        });
    }
    getGallery() {
        this.camera.getPicture({
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
            destinationType: this.camera.DestinationType.DATA_URL
        }).then((res) => {
            this.imgURL = 'data:image/jpeg;base64,' + res;
            this.realImage = res;
        }).catch(e => {
            console.log(e);
        });
    }
    uploadImage() {
        const fileTransfer = this.transfer.create();
        let options = {
            fileKey: 'photo',
            fileName: '.png',
            chunkedMode: false,
        };
        console.log(this.realImage);
        fileTransfer.upload(this.imgURL, 'http://192.168.1.63:80/upload.php', options).then((data) => {
            // success
            console.log(data + "Uploaded Successfully");
            let res = data;
            if (res['success']) {
                console.log('True');
            }
            alert("success");
        }, (err) => {
            // error
            alert("error" + JSON.stringify(err));
        });
        this.userService.uploadId(this.userId).subscribe(data => {
            console.log(data);
        });
    }
};
AddPicturePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: _Services_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"] },
    { type: _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_4__["FileTransfer"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] },
    { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_2__["Camera"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"] }
];
AddPicturePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add-picture',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./add-picture.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/add-picture/add-picture.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./add-picture.page.scss */ "./src/app/add-picture/add-picture.page.scss")).default]
    })
], AddPicturePage);



/***/ })

}]);
//# sourceMappingURL=add-picture-add-picture-module-es2015.js.map