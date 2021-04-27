(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["messages-list-messages-list-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/messages-list/messages-list.page.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/messages-list/messages-list.page.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  \n   <ion-toolbar class=\"toolbar\" >\n    <div class=\"card-content-2\">\n      <img src={{connectedUser.photo}}>\n      <p style=\"color: rgb(0, 0, 0); font-family: Roboto;\">Messages</p>\n    </div>\n    <ion-searchbar style=\"--border-radius: 15px; --background:rgb(255, 254, 254);\" #search showCancelButton=\"focus\" debounce=\"500\" (ionChange)=\"ionChange($event)\"></ion-searchbar>\n\n  </ion-toolbar>\n</ion-header>\n\n<ion-content  >\n  \n  <ion-list  class=\"card-style\" *ngFor=\"let user of searchedItem\" >\n    <p style=\"float: right;margin-top: 30px;font-size: 10px;\">{{user.lastMessage !== null && user.lastMessage !== undefined && user.lastMessage.createdAt?.toMillis() | date:'short'}}</p>\n    <div class=\"card-content\" (click)=\"displayMessages(user)\" >\n      <img src={{user.photo}}>\n      <ion-label>\n        <h2>{{user.firstName +\" \"+user.lastName}}</h2> \n        <p style=\"margin-left: 15px;\">{{user.lastMessage !== null && user.lastMessage !== undefined && user.lastMessage.from === user.uid ? '':'You :' }}{{user.lastMessage !== null && user.lastMessage !== undefined ? user.lastMessage.msg : 'Loading...'}} </p>\n    <!--<p style=\"margin-left: 15px;\">{{user.lastMessage !== null && user.lastMessage !== undefined && user.lastMessage.isSeen ? 'Seen':'Not seen' }}</p> -->\n\n      </ion-label>\n            \n    </div>\n</ion-list>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/messages-list/messages-list-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/messages-list/messages-list-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: MessagesListPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagesListPageRoutingModule", function() { return MessagesListPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _messages_list_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./messages-list.page */ "./src/app/messages-list/messages-list.page.ts");




const routes = [
    {
        path: '',
        component: _messages_list_page__WEBPACK_IMPORTED_MODULE_3__["MessagesListPage"]
    }
];
let MessagesListPageRoutingModule = class MessagesListPageRoutingModule {
};
MessagesListPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], MessagesListPageRoutingModule);



/***/ }),

/***/ "./src/app/messages-list/messages-list.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/messages-list/messages-list.module.ts ***!
  \*******************************************************/
/*! exports provided: MessagesListPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagesListPageModule", function() { return MessagesListPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _messages_list_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./messages-list-routing.module */ "./src/app/messages-list/messages-list-routing.module.ts");
/* harmony import */ var _messages_list_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./messages-list.page */ "./src/app/messages-list/messages-list.page.ts");







let MessagesListPageModule = class MessagesListPageModule {
};
MessagesListPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _messages_list_routing_module__WEBPACK_IMPORTED_MODULE_5__["MessagesListPageRoutingModule"]
        ],
        declarations: [_messages_list_page__WEBPACK_IMPORTED_MODULE_6__["MessagesListPage"]]
    })
], MessagesListPageModule);



/***/ }),

/***/ "./src/app/messages-list/messages-list.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/messages-list/messages-list.page.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".card-style {\n  height: 70px;\n  width: 350px;\n  border-radius: 15px;\n  margin-top: 10px;\n}\n\n.card-content {\n  position: absolute;\n  top: 5px;\n  left: 15px;\n  display: flex;\n  align-items: center;\n}\n\n.card-content img {\n  width: 60px;\n  height: 60px;\n  border-radius: 50%;\n  border-color: white;\n}\n\n.card-content h2 {\n  font-weight: 300;\n  color: black;\n  margin-left: 15px;\n}\n\n.card-content p {\n  font-size: 12px;\n  color: #aaa4a4;\n  font-weight: 100;\n  letter-spacing: 0.4px;\n  margin-left: 15px;\n}\n\n.card-content-2 {\n  margin-left: 20px;\n  display: flex;\n  align-items: center;\n}\n\n.card-content-2 img {\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  border-color: white;\n}\n\n.card-content-2 h2 {\n  font-weight: 300;\n  color: black;\n  margin-left: 15px;\n}\n\n.card-content-2 p {\n  font-size: 23px;\n  color: black;\n  font-weight: bold;\n  letter-spacing: 0.4px;\n  margin-left: 8px;\n}\n\n.toolbar {\n  --ion-toolbar-background: #ffffff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVzc2FnZXMtbGlzdC9tZXNzYWdlcy1saXN0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQUNKOztBQUVBO0VBRUksa0JBQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQUFKOztBQUNJO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FBQ1I7O0FBQ0k7RUFDSSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQUNSOztBQUNJO0VBQ0ksZUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7QUFDUjs7QUFJQTtFQUVJLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FBRko7O0FBR0k7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUFEUjs7QUFHSTtFQUNJLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FBRFI7O0FBR0k7RUFDSSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtBQURSOztBQUtBO0VBQ0ksaUNBQUE7QUFGSiIsImZpbGUiOiJzcmMvYXBwL21lc3NhZ2VzLWxpc3QvbWVzc2FnZXMtbGlzdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZC1zdHlsZXtcclxuICAgIGhlaWdodDogNzBweDtcclxuICAgIHdpZHRoOiAzNTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG59XHJcblxyXG4uY2FyZC1jb250ZW50e1xyXG4gICBcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNXB4O1xyXG4gICAgbGVmdDogMTVweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgaW1ne1xyXG4gICAgICAgIHdpZHRoOiA2MHB4O1xyXG4gICAgICAgIGhlaWdodDogNjBweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgYm9yZGVyLWNvbG9yOiB3aGl0ZTtcclxuICAgIH1cclxuICAgIGgye1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICAgICAgY29sb3I6IGJsYWNrO1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG4gICAgfVxyXG4gICAgcHtcclxuICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgY29sb3I6ICNhYWE0YTQ7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDEwMDtcclxuICAgICAgICBsZXR0ZXItc3BhY2luZzogMC40cHg7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbiAgICB9XHJcbiAgICBcclxufVxyXG5cclxuLmNhcmQtY29udGVudC0ye1xyXG4gICBcclxuICAgIG1hcmdpbi1sZWZ0OjIwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGltZ3tcclxuICAgICAgICB3aWR0aDogNDBweDtcclxuICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgIGJvcmRlci1jb2xvcjogd2hpdGU7XHJcbiAgICB9XHJcbiAgICBoMntcclxuICAgICAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgICAgIGNvbG9yOiBibGFjaztcclxuICAgICAgICBtYXJnaW4tbGVmdDogMTVweDtcclxuICAgIH1cclxuICAgIHB7XHJcbiAgICAgICAgZm9udC1zaXplOiAyM3B4O1xyXG4gICAgICAgIGNvbG9yOiBibGFjaztcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICBsZXR0ZXItc3BhY2luZzogMC40cHg7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDhweDtcclxuICAgIH1cclxuICAgIFxyXG59XHJcbi50b29sYmFye1xyXG4gICAgLS1pb24tdG9vbGJhci1iYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG59XHJcblxyXG5cclxuXHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/messages-list/messages-list.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/messages-list/messages-list.page.ts ***!
  \*****************************************************/
/*! exports provided: MessagesListPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagesListPage", function() { return MessagesListPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _Services_chat_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Services/chat.service */ "./src/app/Services/chat.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _Services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Services/user.service */ "./src/app/Services/user.service.ts");
/* harmony import */ var _Settings_AppSettings__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Settings/AppSettings */ "./src/app/Settings/AppSettings.ts");







let MessagesListPage = class MessagesListPage {
    constructor(chatService, route, router, userService, loadingCtrl) {
        this.chatService = chatService;
        this.route = route;
        this.router = router;
        this.userService = userService;
        this.loadingCtrl = loadingCtrl;
        this.users = [];
        this.messages = [];
        this.loading = null;
        this.connectedUser = _Settings_AppSettings__WEBPACK_IMPORTED_MODULE_6__["AppSettings"].details;
        this.fireBaseUser = JSON.parse(localStorage.getItem('fireBaseUser'));
        this.searchedItem = this.users;
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.loading = yield this.loadingCtrl.create({});
            yield this.loading.present();
            this.chatService.getChatList().subscribe((value) => {
                this.users = [];
                console.log(value);
                value.forEach(element => {
                    if (element.uid !== JSON.parse(localStorage.getItem('fireBaseUser')).uid) {
                        this.userService.findUserByEmail(element.email).subscribe(data => {
                            element['firstName'] = data['firstName'];
                            element['lastName'] = data['lastName'];
                            element['username'] = data['username'];
                            element['photo'] = data['photo'];
                            element.messages = [];
                            this.chatService.getChatMessages().subscribe(messages => {
                                messages.forEach(message => {
                                    if (message.from === element.uid || message.to === element.uid) {
                                        element.messages = [...element.messages, message];
                                    }
                                });
                                element.lastMessage = element.messages && element.messages.length ? element.messages[element.messages.length - 1] : null;
                                console.log("last message", element.lastMessage);
                            });
                        });
                        this.users.push(element);
                        this.searchedItem = this.users;
                    }
                });
            });
            this.chatService.getChatMessages().subscribe(data => {
                console.log(data);
                this.messages = [];
                data.forEach(element => {
                    if ((element['from'] === this.fireBaseUser.uid)) {
                        this.messages.push(element);
                        console.log(this.messages);
                        this.lastMessage = this.messages[this.messages.length - 1];
                    }
                });
                this.loading.dismiss();
                this.loading = null;
            });
        });
    }
    displayMessages(selectedUser) {
        console.log(selectedUser);
        this.userService.details(selectedUser.username).subscribe(user => {
            console.log('details', user);
            this.router.navigate(['/messages', selectedUser.uid]);
        });
    }
    ionChange(event) {
        const val = event.target.value;
        this.searchedItem = this.users;
        if (val && val.trim() != '') {
            this.searchedItem = this.searchedItem.filter((item) => {
                console.log(item.firstName);
                return (item.firstName.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        }
    }
};
MessagesListPage.ctorParameters = () => [
    { type: _Services_chat_service__WEBPACK_IMPORTED_MODULE_3__["ChatService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _Services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] }
];
MessagesListPage.propDecorators = {
    search: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['search', { static: false },] }]
};
MessagesListPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-messages-list',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./messages-list.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/messages-list/messages-list.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./messages-list.page.scss */ "./src/app/messages-list/messages-list.page.scss")).default]
    })
], MessagesListPage);



/***/ })

}]);
//# sourceMappingURL=messages-list-messages-list-module-es2015.js.map