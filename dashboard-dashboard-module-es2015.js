(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dashboard-dashboard-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/expandable/expandable.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/expandable/expandable.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div #expandWrapper class='expand-wrapper' [class.collapsed]=\"!expanded\">\n  <ng-content></ng-content>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard.page.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content class=\"has-header\" overflow-scroll=\"false\" has-bouncing=\"true\" style=\"--ion-background-color:#f0f0f0;\">\n  \n  <ion-card class=\"header-card-style\" style=\"--ion-background-color:#ffffff; padding: 0 10px;\">\n    <img src=\"assets/images/bertsch.png\"/>\n\n      <ion-label style=\" margin-top: 2.5%;\" >\n\n        <div style=\"padding-bottom: 7.5px;\n        border-bottom: 1px solid rgba(255,255,255, 0.8);\n        margin-left: 5px;\">\n          <p style=\" font-size: 16px;\n          text-transform: capitalize;\n          margin-left: 0;\">{{currentUser.firstName+\" \"+currentUser.lastName}}</p>\n          <h1 style=\"margin-left: 0; font-size: 14px;\">Welcome to BertschInnovation</h1>\n        </div>\n          <p style=\"margin-top: 15px; margin-top: 1.5px;\n          font-weight: unset; font-size: 11px;\">Official work time is from <b>{{workStart}}</b> to <b>{{workEnd}}</b></p>\n       \n\n        <p class=\"date\">{{today}}</p>\n      </ion-label>\n\n      \n  </ion-card>\n \n \n      <div class=\"ion-padding\" style=\"padding-bottom:  0\">\n       \n    <ion-card style=\"--ion-background-color:#ffffff;\">\n      \n\n      <ion-card-header class=\"title-style-normal\" style=\"text-align: center\">\n        <ion-icon style=\"font-size: 18px;\" name=\"flash-outline\"></ion-icon>\n\n        Presence Preview of <b>{{today}}</b>\n        Number of employees : <b>{{nbEmp}}</b>\n\n      </ion-card-header>\n\n      <ion-card-content>\n        <canvas #doughnutCanvas></canvas>\n      </ion-card-content>\n    </ion-card>\n    <ion-card style=\"--ion-background-color:#ffffff;\">\n      <ion-card-header  class=\"title-style-normal\"  style=\"text-align: center;\">\n        <ion-icon style=\"font-size: 18px;\" name=\"flash-outline\"></ion-icon>\n\n        Punctuality Preview of <b>{{\" \"+today}}</b>\n      </ion-card-header>\n      <ion-card-content>\n        <canvas #doughnutCanvas2></canvas>\n      </ion-card-content>\n    </ion-card>\n  </div>\n\n  \n  \n  <div class=\"ion-padding\" style=\"padding-top: 0\" >\n  <ion-card style=\"--ion-background-color:#ffffff;\" >\n    \n       \n        <div *ngFor=\"let item of its\">\n          <div class=\"card-header\">\n            <p class=\"title-style\">Choose Employee</p>\n            <ion-icon  name=\"chevron-forward-outline\" [ngClass]=\"(item.expanded ? 'arrow-style expanded' : 'arrow-style')\" (click)=\"expandIt(item)\"></ion-icon> \n          </div>\n\n          <ion-card-content [ngClass]=\"!item.expanded ? 'padding-0' : 'padding-expanded'\">\n        \n          <app-expandable expandheight=\"500px\" [expanded]=\"item.expanded\">\n          <ion-list lines=\"none\" style=\"margin-top: -20px;\">\n            <form role=\"form\" [formGroup]=\"statDateForm\" >\n                    \n              <ion-item >\n                <ion-label  style=\"font-family: Roboto; color:black;\">Employee Name</ion-label>\n                <ion-select formControlName=\"selectedId\" interface=\"popover\" style=\"font-family: Roboto;font-size: 15px; margin-right: 8px;color: rgb(156, 152, 152);\"   class=\"normal-text\" value=\"\"  required >\n                  <ion-select-option  value=\"{{employee.id}}\" *ngFor=\"let employee of employeesList\" >{{employee.empFirstname}}</ion-select-option>\n                </ion-select>\n                <ion-icon name=\"person-circle-outline\" style=\"float: left; font-size: 1.2rem;\"></ion-icon>\n              </ion-item>\n    \n           <ion-item >\n              <ion-label  style=\"font-family: Roboto; color:black;\">From</ion-label>\n              <ion-datetime displayFormat=\"DD/MM/YYYY\" style=\"font-family: Roboto;font-size: 15px; margin-right: 8px;color: rgb(156, 152, 152);\" formControlName=\"fromDate\"  class=\"normal-text\" value=\"\" placeholder=\"From\" required></ion-datetime>\n              <ion-icon name=\"calendar-outline\" style=\"float: left; font-size: 1.2rem\"></ion-icon>\n           </ion-item>\n           <ion-item>\n              <ion-label style=\"font-family: Roboto; color: black;\" >To</ion-label>\n              <ion-datetime displayFormat=\"DD/MM/YYYY\"   style=\"font-family: Roboto;font-size: 15px; margin-right: 8px;color: rgb(156, 152, 152);\" value=\" \" formControlName=\"toDate\" placeholder=\"To\" required ></ion-datetime>\n              <ion-icon name=\"calendar-outline\"  style=\"font-size: 1.2rem\"></ion-icon>\n           </ion-item>\n            \n            <ion-button type=\"submit\" expand=\"block\" style=\" text-transform: lowercase; text-transform: capitalize;\" (click)=\"getEmployeeAttendanceStats()\" >View Statistics</ion-button>\n\n             </form>\n            </ion-list>\n            </app-expandable>\n            </ion-card-content>\n  </div>\n\n  <div >\n  <div [ngClass]=\"!showDiagram ? 'card-body' : 'card-body display'\">\n    <ion-card style=\"--ion-background-color:#ffffff;\">\n      <ion-card-header  class=\"title-style\" >\n        Employee Statistics\n      </ion-card-header>\n      <ion-card-content>\n        <canvas #barchartCanvas></canvas>\n      </ion-card-content>\n    </ion-card>\n</div>\n</div>\n     \n\n</ion-card>\n\n    <ion-card style=\"--ion-background-color:#ffffff;\" >\n   \n     \n      <div *ngFor=\"let item of items\">\n        <div class=\"card-header\">\n        <p class=\"title-style\"  >Set Work Time</p>\n        <ion-icon  name=\"chevron-forward-outline\" [ngClass]=\"(item.expanded ? 'arrow-style expanded' : 'arrow-style')\" (click)=\"expandItem(item)\"></ion-icon>\n\n        </div>\n              \n              <ion-card-content [ngClass]=\"!item.expanded ? 'padding-0' : 'padding-expanded'\">\n                <app-expandable expandheight=\"300px\" [expanded]=\"item.expanded\">\n                <ion-list lines=\"none\" style=\"margin-top: -20px;\">\n                  <form role=\"form\" [formGroup]=\"timeForm\"  (ngSubmit)=\"setTime()\">\n                <ion-item >\n                    <ion-label  style=\"font-family: Roboto; color:black;\">Starting from</ion-label>\n                    <ion-datetime style=\"font-family: Roboto;font-size: 15px; margin-right: 8px;color: rgb(156, 152, 152);\" formControlName=\"fromTime\" displayFormat=\"HH:mm\" class=\"normal-text\" value=\"\" placeholder=\"Start Time\" required></ion-datetime>\n                    <ion-icon name=\"timer-outline\" style=\"float: left;font-size: 1.2rem\"></ion-icon>\n                </ion-item>\n                  <ion-item>\n                    <ion-label style=\"font-family: Roboto; color: black;\" >Ending</ion-label>\n                    <ion-datetime formControlName=\"toTime\" displayFormat=\"HH:mm\" style=\"font-family: Roboto;font-size: 15px; margin-right: 8px;color: rgb(156, 152, 152);\" value=\" \" placeholder=\"End Time\" required ></ion-datetime>\n                    <ion-icon name=\"timer-outline\" style=\"font-size: 1.2rem\"></ion-icon>\n                  </ion-item>\n                  <ion-button type=\"submit\" expand=\"block\" style=\"text-transform: lowercase; text-transform: capitalize;\" >Set</ion-button>\n                </form>\n                  </ion-list>\n                  </app-expandable>\n                  </ion-card-content>\n       \n       \n        </div>\n     \n      </ion-card>\n      \n\n  </div>\n    </ion-content>\n    <ion-fab-button   style=\"margin-right: 15px; position: absolute ; right:0;bottom:0;margin-bottom: 10px;--background :black\"  (click)=\"openMyModalQrScanner()\">\n      <ion-icon color=\"light\" name=\"qr-code-outline\"></ion-icon>\n    </ion-fab-button>");

/***/ }),

/***/ "./src/app/Services/stat-service.service.ts":
/*!**************************************************!*\
  !*** ./src/app/Services/stat-service.service.ts ***!
  \**************************************************/
/*! exports provided: StatServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatServiceService", function() { return StatServiceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _Settings_AppSettings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Settings/AppSettings */ "./src/app/Settings/AppSettings.ts");




let StatServiceService = class StatServiceService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    delaysPerDay() {
        return this.httpClient.get(_Settings_AppSettings__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].STAT_URL + '/delays');
    }
    fetchStatsAttendance() {
        return this.httpClient.get(_Settings_AppSettings__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].STAT_URL + '/statsAttedanceDelays');
    }
    getByEmployee(id, from, to) {
        return this.httpClient.get(_Settings_AppSettings__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].STAT_URL + '/calculate/' + id + '/' + from + '/' + to);
    }
    getAll(from, to) {
        return this.httpClient.get(_Settings_AppSettings__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].STAT_URL + '/calculate' + '/all/' + from + '/' + to);
    }
};
StatServiceService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
StatServiceService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    })
], StatServiceService);



/***/ }),

/***/ "./src/app/components/expandable/expandable.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/components/expandable/expandable.component.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".expand-wrapper {\n  transition: max-height 0.4s ease-in-out;\n  overflow: hidden;\n  height: auto;\n}\n\n.collapsed {\n  max-height: 0 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9leHBhbmRhYmxlL2V4cGFuZGFibGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx1Q0FBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQUNKOztBQUVFO0VBQ0Usd0JBQUE7QUFDSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZXhwYW5kYWJsZS9leHBhbmRhYmxlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4cGFuZC13cmFwcGVyIHtcclxuICAgIHRyYW5zaXRpb246IG1heC1oZWlnaHQgMC40cyBlYXNlLWluLW91dDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgfVxyXG4gIFxyXG4gIC5jb2xsYXBzZWQge1xyXG4gICAgbWF4LWhlaWdodDogMCAhaW1wb3J0YW50O1xyXG4gIH0iXX0= */");

/***/ }),

/***/ "./src/app/components/expandable/expandable.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/expandable/expandable.component.ts ***!
  \***************************************************************/
/*! exports provided: ExpandableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExpandableComponent", function() { return ExpandableComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let ExpandableComponent = class ExpandableComponent {
    constructor(renderer) {
        this.renderer = renderer;
        this.expanded = false;
        this.expandHeight = "250px";
    }
    ngAfterViewInit() {
        this.renderer.setStyle(this.expandWrapper.nativeElement, "max-height", this.expandHeight);
    }
};
ExpandableComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] }
];
ExpandableComponent.propDecorators = {
    expandWrapper: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ["expandWrapper", { read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },] }],
    expanded: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ["expanded",] }],
    expandHeight: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ["expandHeight",] }]
};
ExpandableComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-expandable",
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./expandable.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/expandable/expandable.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./expandable.component.scss */ "./src/app/components/expandable/expandable.component.scss")).default]
    })
], ExpandableComponent);



/***/ }),

/***/ "./src/app/dashboard/dashboard-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/dashboard/dashboard-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: DashboardPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardPageRoutingModule", function() { return DashboardPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _dashboard_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard.page */ "./src/app/dashboard/dashboard.page.ts");




const routes = [
    {
        path: '',
        component: _dashboard_page__WEBPACK_IMPORTED_MODULE_3__["DashboardPage"]
    }
];
let DashboardPageRoutingModule = class DashboardPageRoutingModule {
};
DashboardPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], DashboardPageRoutingModule);



/***/ }),

/***/ "./src/app/dashboard/dashboard.module.ts":
/*!***********************************************!*\
  !*** ./src/app/dashboard/dashboard.module.ts ***!
  \***********************************************/
/*! exports provided: DashboardPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardPageModule", function() { return DashboardPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dashboard-routing.module */ "./src/app/dashboard/dashboard-routing.module.ts");
/* harmony import */ var _dashboard_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dashboard.page */ "./src/app/dashboard/dashboard.page.ts");
/* harmony import */ var _components_expandable_expandable_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/expandable/expandable.component */ "./src/app/components/expandable/expandable.component.ts");








let DashboardPageModule = class DashboardPageModule {
};
DashboardPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_5__["DashboardPageRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
        ],
        declarations: [_dashboard_page__WEBPACK_IMPORTED_MODULE_6__["DashboardPage"], _components_expandable_expandable_component__WEBPACK_IMPORTED_MODULE_7__["ExpandableComponent"]]
    })
], DashboardPageModule);



/***/ }),

/***/ "./src/app/dashboard/dashboard.page.scss":
/*!***********************************************!*\
  !*** ./src/app/dashboard/dashboard.page.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".title-style {\n  margin-top: 25px;\n  font-size: 15px;\n  margin: 10px;\n  font-weight: bold;\n  font-family: Roboto;\n  color: black;\n}\n\n.card-style {\n  background-color: #383837;\n  height: 80px;\n  width: 94%;\n  border-radius: 15px;\n  margin-left: 10px;\n  box-shadow: 6px 6px 2px 1px #d3d0d0;\n  margin-bottom: 10px;\n}\n\n.work-status-bg {\n  background-color: #f88111;\n  border-radius: 20px;\n  color: white;\n  font-family: Roboto;\n  margin-top: 15px;\n  font-size: 12px;\n  margin-right: 15px;\n  width: 45px;\n  padding-left: 10px;\n  padding-top: 1.2px;\n  height: 18px;\n  float: right;\n}\n\n.leave-status-bg {\n  background-color: #383e56;\n  border-radius: 20px;\n  color: white;\n  font-family: Roboto;\n  margin-top: 15px;\n  font-size: 12px;\n  margin-right: 10px;\n  width: 56px;\n  padding-left: 8px;\n  padding-top: 3px;\n  height: 21px;\n  float: right;\n}\n\n.card-content {\n  position: absolute;\n  top: 10px;\n  left: 15px;\n  display: flex;\n  align-items: center;\n}\n\n.card-content img {\n  width: 60px;\n  height: 60px;\n  border-radius: 50%;\n  border-color: white;\n}\n\n.card-content h2 {\n  font-weight: 300;\n  color: #fff;\n  margin-left: 15px;\n}\n\n.card-content p {\n  font-size: 12px;\n  color: #e4e4e4;\n  font-weight: 100;\n  letter-spacing: 0.4px;\n  margin-left: 15px;\n}\n\n.title-style-normal {\n  margin-top: 25px;\n  font-size: 15px;\n  margin: 10px;\n  font-family: Roboto;\n  color: black;\n}\n\n.normal-text {\n  font-family: Roboto;\n  color: black;\n}\n\n.arrow-style {\n  font-size: 1.2rem;\n  color: black;\n  float: right;\n  margin-top: -18px;\n  transition: 0.5s ease all;\n}\n\n.arrow-style.expanded {\n  transform: rotate(90deg);\n}\n\n.card-header {\n  display: flex;\n  padding: 25px;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.2);\n}\n\n.card-header p {\n  margin: auto;\n  margin-left: 0;\n}\n\n.card-header .arrow-style {\n  margin: auto;\n  margin-right: 0;\n}\n\n.card-body {\n  display: none;\n  -webkit-animation: fade 0.5s ease;\n          animation: fade 0.5s ease;\n}\n\n.card-body.display {\n  display: block;\n}\n\n.padding-0 {\n  padding: 0;\n}\n\n.padding-expanded {\n  padding-left: unset;\n  padding-right: unset;\n  -webkit-padding-start: 16px;\n  padding-inline-start: 16px;\n  -webkit-padding-end: 16px;\n  padding-inline-end: 16px;\n}\n\n.header-card-style {\n  display: flex;\n  align-items: center;\n  height: 150px;\n  border-radius: 30px;\n  box-shadow: 10px 10px 10px #aaaaaa;\n  background: linear-gradient(rgba(240, 165, 0, 0.8), rgba(240, 165, 0, 0.8));\n  box-shadow: 0 8px 20px 0 rgba(244, 209, 96, 0.5), 0 2px 4px 0 rgba(244, 209, 96, 0.5);\n  background: linear-gradient(#ff9a02, #f08800);\n  box-shadow: 0 -3px 14px 0 #f4d160, 0 3px 9px 0 #f4d160;\n  background: #fa8a2f;\n  -webkit-animation: fade-in 0.8s ease-in-out;\n          animation: fade-in 0.8s ease-in-out;\n}\n\n.header-card-style h1 {\n  font-weight: 300;\n  font-size: 16px;\n  color: #ffffff;\n  margin-left: 5px;\n}\n\n.header-card-style p {\n  margin-left: 5px;\n  color: #ffffff;\n  font-weight: bold;\n  font-size: 12px;\n}\n\n.header-card-style p.date {\n  background-color: rgba(56, 62, 86, 0.8) !important;\n  cursor: pointer;\n  text-align: center;\n  padding: 0.5px 11px !important;\n  border-radius: 20px !important;\n  color: white;\n  position: absolute;\n  top: 15px;\n  right: 18px;\n  font-size: 8px;\n  padding: 2px 8px;\n  background-color: #383e56;\n}\n\n.header-card-style p.date:hover {\n  background-color: #383e56 !important;\n}\n\n.header-card-style img {\n  width: 70px;\n  height: 70px;\n  margin-left: 16px;\n  border-radius: 50%;\n  margin-right: 16px;\n}\n\n.toast-scheme {\n  color: white;\n  font-size: 15px;\n  font-family: Roboto;\n  font-weight: bold;\n  text-align: center;\n}\n\n.ion-padding {\n  -webkit-animation: fade 1s ease-in-out;\n          animation: fade 1s ease-in-out;\n}\n\n@-webkit-keyframes fade-in {\n  0% {\n    transform: translateY(-400px);\n    opacity: 0;\n  }\n  100% {\n    transform: translateY(0px);\n    opacity: 1;\n  }\n}\n\n@keyframes fade-in {\n  0% {\n    transform: translateY(-400px);\n    opacity: 0;\n  }\n  100% {\n    transform: translateY(0px);\n    opacity: 1;\n  }\n}\n\n@-webkit-keyframes fade {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n\n@keyframes fade {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL2Rhc2hib2FyZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUFDSjs7QUFDQTtFQUNFLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUNBQUE7RUFDQSxtQkFBQTtBQUVGOztBQUVBO0VBQ0UseUJBQUE7RUFFQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQUFGOztBQUVBO0VBQ0UseUJBQUE7RUFFQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQUFGOztBQUVBO0VBRUUsa0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQUFGOztBQUNFO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FBQ047O0FBQ0U7RUFDSSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtBQUNOOztBQUNFO0VBQ0ksZUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7QUFDTjs7QUFHQTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUFBRjs7QUFFQTtFQUNJLG1CQUFBO0VBQ0EsWUFBQTtBQUNKOztBQUVDO0VBQ0csaUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7QUFDSjs7QUFBSTtFQUNFLHdCQUFBO0FBRU47O0FBRUE7RUFDRSxhQUFBO0VBQ0EsYUFBQTtFQUNBLDJDQUFBO0FBQ0Y7O0FBQ0U7RUFDRSxZQUFBO0VBQ0EsY0FBQTtBQUNKOztBQUVFO0VBQ0UsWUFBQTtFQUNBLGVBQUE7QUFBSjs7QUFJQTtFQUNFLGFBQUE7RUFDQSxpQ0FBQTtVQUFBLHlCQUFBO0FBREY7O0FBR0U7RUFDRSxjQUFBO0FBREo7O0FBS0E7RUFDRSxVQUFBO0FBRkY7O0FBS0E7RUFDRSxtQkFBQTtFQUNFLG9CQUFBO0VBQ0EsMkJBQUE7RUFDQSwwQkFBQTtFQUNBLHlCQUFBO0VBQ0Esd0JBQUE7QUFGSjs7QUFJSTtFQUVJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGtDQUFBO0VBQ0EsMkVBQUE7RUFDRSxxRkFBQTtFQUNBLDZDQUFBO0VBQ0Esc0RBQUE7RUFDQSxtQkFBQTtFQUNGLDJDQUFBO1VBQUEsbUNBQUE7QUFGUjs7QUFJUTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQUZWOztBQUtRO0VBQ0csZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FBSFg7O0FBSVc7RUFDQyxrREFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLDhCQUFBO0VBQ0EsOEJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0FBRlo7O0FBR1k7RUFDRSxvQ0FBQTtBQURkOztBQUtRO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUFIVjs7QUFTSTtFQUNFLFlBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBTk47O0FBU0k7RUFDRSxzQ0FBQTtVQUFBLDhCQUFBO0FBTk47O0FBU0k7RUFDRTtJQUNFLDZCQUFBO0lBQ0EsVUFBQTtFQU5OO0VBUUk7SUFDRSwwQkFBQTtJQUNBLFVBQUE7RUFOTjtBQUNGOztBQUZJO0VBQ0U7SUFDRSw2QkFBQTtJQUNBLFVBQUE7RUFOTjtFQVFJO0lBQ0UsMEJBQUE7SUFDQSxVQUFBO0VBTk47QUFDRjs7QUFTSTtFQUNFO0lBQ0UsVUFBQTtFQVBOO0VBU0k7SUFDRSxVQUFBO0VBUE47QUFDRjs7QUFDSTtFQUNFO0lBQ0UsVUFBQTtFQVBOO0VBU0k7SUFDRSxVQUFBO0VBUE47QUFDRiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9kYXNoYm9hcmQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRpdGxlLXN0eWxle1xyXG4gICAgbWFyZ2luLXRvcDogMjVweDsgXHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBtYXJnaW46IDEwcHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtZmFtaWx5OiBSb2JvdG87XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbn1cclxuLmNhcmQtc3R5bGV7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDU2LCA1NiwgNTUpO1xyXG4gIGhlaWdodDo4MHB4O1xyXG4gIHdpZHRoOiA5NCU7XHJcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICBtYXJnaW4tbGVmdDogMTBweDtcclxuICBib3gtc2hhZG93OiA2cHggNnB4IDJweCAxcHggcmdiKDIxMSwgMjA4LCAyMDgpO1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgXHJcbn1cclxuXHJcbi53b3JrLXN0YXR1cy1iZ3tcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiNmODgxMTE7XHJcblxyXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcclxuICBmb250LWZhbWlseTogUm9ib3RvO1xyXG4gIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgZm9udC1zaXplOiAxMnB4IDtcclxuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XHJcbiAgd2lkdGg6IDQ1cHg7XHJcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gIHBhZGRpbmctdG9wOiAxLjJweDtcclxuICBoZWlnaHQ6IDE4cHg7XHJcbiAgZmxvYXQ6IHJpZ2h0O31cclxuXHJcbi5sZWF2ZS1zdGF0dXMtYmd7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjpyZ2JhKDU2LCA2MiwgODYsIDEpO1xyXG4gIFxyXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcclxuICBmb250LWZhbWlseTogUm9ib3RvO1xyXG4gIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgZm9udC1zaXplOiAxMnB4IDtcclxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgd2lkdGg6IDU2cHg7XHJcbiAgcGFkZGluZy1sZWZ0OiA4cHg7XHJcbiAgcGFkZGluZy10b3A6IDNweDtcclxuICBoZWlnaHQ6IDIxcHg7XHJcbiAgZmxvYXQ6IHJpZ2h0O31cclxuXHJcbi5jYXJkLWNvbnRlbnR7XHJcbiAgIFxyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDEwcHg7XHJcbiAgbGVmdDogMTVweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgaW1ne1xyXG4gICAgICB3aWR0aDogNjBweDtcclxuICAgICAgaGVpZ2h0OiA2MHB4O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgIGJvcmRlci1jb2xvcjogd2hpdGU7XHJcbiAgfVxyXG4gIGgye1xyXG4gICAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbiAgfVxyXG4gIHB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgY29sb3I6ICNlNGU0ZTQ7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiAxMDA7XHJcbiAgICAgIGxldHRlci1zcGFjaW5nOiAwLjRweDtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbiAgfVxyXG59XHJcblxyXG4udGl0bGUtc3R5bGUtbm9ybWFse1xyXG4gIG1hcmdpbi10b3A6IDI1cHg7IFxyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICBtYXJnaW46IDEwcHg7XHJcbiAgZm9udC1mYW1pbHk6IFJvYm90bztcclxuICBjb2xvcjogYmxhY2s7XHJcbn1cclxuLm5vcm1hbC10ZXh0e1xyXG4gICAgZm9udC1mYW1pbHk6IFJvYm90bztcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIFxyXG59XHJcbiAuYXJyb3ctc3R5bGV7XHJcbiAgICBmb250LXNpemU6IDEuMnJlbTtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIG1hcmdpbi10b3A6IC0xOHB4O1xyXG4gICAgdHJhbnNpdGlvbjogLjVzIGVhc2UgYWxsO1xyXG4gICAgJi5leHBhbmRlZCB7XHJcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcclxuICAgIH1cclxufVxyXG5cclxuLmNhcmQtaGVhZGVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIHBhZGRpbmc6IDI1cHg7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwwLDAsMC4yKTtcclxuXHJcbiAgcCB7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBtYXJnaW4tbGVmdDogMDtcclxuICB9XHJcblxyXG4gIC5hcnJvdy1zdHlsZSB7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDA7XHJcbiAgfVxyXG59XHJcblxyXG4uY2FyZC1ib2R5IHtcclxuICBkaXNwbGF5OiBub25lO1xyXG4gIGFuaW1hdGlvbjogZmFkZSAuNXMgZWFzZTtcclxuXHJcbiAgJi5kaXNwbGF5IHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gIH1cclxufVxyXG5cclxuLnBhZGRpbmctMCB7XHJcbiAgcGFkZGluZzogMFxyXG59XHJcblxyXG4ucGFkZGluZy1leHBhbmRlZHtcclxuICBwYWRkaW5nLWxlZnQ6IHVuc2V0O1xyXG4gICAgcGFkZGluZy1yaWdodDogdW5zZXQ7XHJcbiAgICAtd2Via2l0LXBhZGRpbmctc3RhcnQ6IDE2cHg7XHJcbiAgICBwYWRkaW5nLWlubGluZS1zdGFydDogMTZweDtcclxuICAgIC13ZWJraXQtcGFkZGluZy1lbmQ6IDE2cHg7XHJcbiAgICBwYWRkaW5nLWlubGluZS1lbmQ6IDE2cHg7XHJcbn1cclxuICAgIC5oZWFkZXItY2FyZC1zdHlsZXtcclxuICAgIFxyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBoZWlnaHQ6IDE1MHB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMTBweCAxMHB4IDEwcHggI2FhYWFhYTtcclxuICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQocmdiYSgyNDAsIDE2NSwgMCwgMC44KSwgcmdiYSgyNDAsIDE2NSwgMCwgMC44KSk7XHJcbiAgICAgICAgICBib3gtc2hhZG93OiAwIDhweCAyMHB4IDAgcmdiYSgyNDQsIDIwOSwgOTYsIDAuNSksIDAgMnB4IDRweCAwIHJnYmEoMjQ0LCAyMDksIDk2LCAwLjUpO1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHJnYigyNTUsIDE1NCwgMiksIHJnYigyNDAsIDEzNiwgMCkpO1xyXG4gICAgICAgICAgYm94LXNoYWRvdzogMCAtM3B4IDE0cHggMCByZ2IoMjQ0LDIwOSw5NiksIDAgM3B4IDlweCAwIHJnYigyNDQsMjA5LDk2KTtcclxuICAgICAgICAgIGJhY2tncm91bmQ6ICNmYThhMmY7XHJcbiAgICAgICAgYW5pbWF0aW9uOiBmYWRlLWluIDAuOHMgZWFzZS1pbi1vdXQ7XHJcbiAgICAgICAvLyBhbmltYXRpb24tZGVsYXk6IDNzO1xyXG4gICAgICAgIGgxIHtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgICAgICAgIG1hcmdpbi1sZWZ0OiA1cHg7XHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICBwe1xyXG4gICAgICAgICAgIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbiAgICAgICAgICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgICYuZGF0ZSB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNTYsIDYyLCA4NiwgMC44KSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgcGFkZGluZzogMC41cHggMTFweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIGNvbG9yOndoaXRlO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIHRvcDogMTVweDtcclxuICAgICAgICAgICAgcmlnaHQ6IDE4cHg7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogOHB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAycHggOHB4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzgzZTU2O1xyXG4gICAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDU2LCA2MiwgODYsIDEpICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGltZyB7XHJcbiAgICAgICAgICB3aWR0aDogNzBweDtcclxuICAgICAgICAgIGhlaWdodDogNzBweDtcclxuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxNnB4O1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xyXG4gICAgICAgIH1cclxuICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIC50b2FzdC1zY2hlbWV7XHJcbiAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICBmb250LWZhbWlseTogUm9ib3RvO1xyXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG5cclxuICAgIC5pb24tcGFkZGluZyB7XHJcbiAgICAgIGFuaW1hdGlvbjogZmFkZSAxcyBlYXNlLWluLW91dDtcclxuICAgIH1cclxuXHJcbiAgICBAa2V5ZnJhbWVzIGZhZGUtaW57XHJcbiAgICAgIDAlIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTQwMHB4KTtcclxuICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICB9XHJcbiAgICAgIDEwMCUge1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpO1xyXG4gICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBAa2V5ZnJhbWVzIGZhZGV7XHJcbiAgICAgIDAlIHtcclxuICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICB9XHJcbiAgICAgIDEwMCUge1xyXG4gICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG5cclxuXHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/dashboard/dashboard.page.ts":
/*!*********************************************!*\
  !*** ./src/app/dashboard/dashboard.page.ts ***!
  \*********************************************/
/*! exports provided: DashboardPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardPage", function() { return DashboardPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _Services_attendance_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Services/attendance.service */ "./src/app/Services/attendance.service.ts");
/* harmony import */ var _Services_employee_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Services/employee.service */ "./src/app/Services/employee.service.ts");
/* harmony import */ var _Services_stat_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Services/stat-service.service */ "./src/app/Services/stat-service.service.ts");
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! chart.js */ "./node_modules/chart.js/dist/Chart.js");
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(chart_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _Services_shared_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Services/shared.service */ "./src/app/Services/shared.service.ts");
/* harmony import */ var _Settings_AppSettings__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Settings/AppSettings */ "./src/app/Settings/AppSettings.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _qrattendance_qrattendance_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../qrattendance/qrattendance.page */ "./src/app/qrattendance/qrattendance.page.ts");











let DashboardPage = class DashboardPage {
    constructor(formBuilder, attendanceSerice, employeeService, statService, sharedService, toastController, modalController) {
        this.formBuilder = formBuilder;
        this.attendanceSerice = attendanceSerice;
        this.employeeService = employeeService;
        this.statService = statService;
        this.sharedService = sharedService;
        this.toastController = toastController;
        this.modalController = modalController;
        this.employeesList = [];
        this.admin = this.sharedService.verifyAdmin();
        this.items = [{ expanded: false }];
        this.its = [{ expanded: false }];
        this.itss = [{ expanded: false }];
        this.showDiagram = false;
        this.today = new Date().toISOString().slice(0, 10);
        this.employeeService.count().subscribe((data) => {
            this.nbEmp = data;
            console.log("test", this.nbEmp);
        });
        this.attendanceSerice.count().subscribe((data) => {
            this.empIn = data;
            console.log("nbIn", this.empIn);
            this.doughnutChart = new chart_js__WEBPACK_IMPORTED_MODULE_5__["Chart"](this.doughnutCanvas.nativeElement, {
                type: "doughnut",
                data: {
                    labels: ["Attendance", "Absence"],
                    datasets: [
                        {
                            data: [this.empIn, this.nbEmp - this.empIn],
                            backgroundColor: ["#f56d1f", "#000000"],
                            hoverBackgroundColor: ["#f56d1f", "#000000"],
                        },
                    ],
                },
            });
        });
        this.statService.fetchStatsAttendance().subscribe((data) => {
            //this.nbDelays = data.Delays;
            console.log("delays", this.nbDelays);
            this.doughnutChart2 = new chart_js__WEBPACK_IMPORTED_MODULE_5__["Chart"](this.doughnutCanvas2.nativeElement, {
                type: "doughnut",
                data: {
                    labels: ["In Time", "Delay"],
                    datasets: [
                        {
                            data: [data.Intime, data.Delays],
                            backgroundColor: ["#f56d1f", "#000000"],
                            hoverBackgroundColor: ["#f56d1f", "#000000"],
                        },
                    ],
                },
            });
        });
    }
    ngOnInit() {
        this.getWorkTime();
        this.timeForm = this.formBuilder.group({
            fromTime: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]],
            toTime: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]],
        });
        this.statDateForm = this.formBuilder.group({
            fromDate: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]],
            toDate: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]],
            selectedId: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
        });
        this.getEmployees();
        this.currentUser = _Settings_AppSettings__WEBPACK_IMPORTED_MODULE_8__["AppSettings"].details;
        console.log(this.currentUser);
        this.barChart = new chart_js__WEBPACK_IMPORTED_MODULE_5__["Chart"](this.barchartCanvas.nativeElement, {
            type: "bar",
            data: {
                datasets: [
                    {
                        label: 'Statistics',
                        borderWidth: 1,
                    },
                ],
            },
            options: {
                scales: {
                    yAxes: [
                        {
                            ticks: {
                                beginAtZero: true,
                            },
                        },
                    ],
                },
            },
        });
    }
    setTime() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.timeForm.valid) {
                this.start = new Date(this.timeForm.value.fromTime);
                var myTimeStart = this.start.getHours() + ":" + this.start.getMinutes();
                console.log(myTimeStart);
                this.end = new Date(this.timeForm.value.toTime);
                var myTimeEnd = this.end.getHours() + ":" + this.end.getMinutes();
                console.log(myTimeEnd);
                if (this.end.getHours() > this.start.getHours()) {
                    this.attendanceSerice
                        .setWorkTime(myTimeStart, myTimeEnd)
                        .subscribe((data) => {
                        console.log(data);
                    });
                }
                else {
                    const toast = yield this.toastController.create({
                        message: "Choose time correctly !",
                        duration: 2000,
                        cssClass: "toast-scheme",
                    });
                    toast.present();
                }
            }
            else {
                const toast = yield this.toastController.create({
                    message: "Invalid form !",
                    duration: 2000,
                    cssClass: "toast-scheme",
                });
                toast.present();
            }
        });
    }
    getEmployeeAttendanceStats() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            //if(this.statDateForm.valid){
            this.dateFrom = new Date(this.statDateForm.value.fromDate);
            this.dateTo = new Date(this.statDateForm.value.toDate);
            this.selectedEmployee = this.statDateForm.value.selectedId;
            //this part changes dates from Wed Mar 10 2021 10:44:16 GMT+0100 (UTC+01:00) to 2021-03-10 as the params demand
            var event = new Date(this.dateFrom);
            let customDateFrom = JSON.stringify(event);
            customDateFrom = customDateFrom.slice(1, 11);
            var event2 = new Date(this.dateTo);
            let customDateTo = JSON.stringify(event2);
            customDateTo = customDateTo.slice(1, 11);
            //this.emp = this.statDateForm.value.selectedEmployee
            //console.log(this.emp);
            if (this.statDateForm.valid) {
                if (this.statDateForm.value.fromDate < this.statDateForm.value.toDate) {
                    this.statService
                        .getByEmployee(this.selectedEmployee, customDateFrom, customDateTo)
                        .subscribe((element) => {
                        this.employeeDetails = element;
                        const data = [this.employeeDetails.nbDelay, 0];
                        const data1 = [this.employeeDetails.presence, 0];
                        const data2 = [this.employeeDetails.extraHours, 0];
                        this.barChart = new chart_js__WEBPACK_IMPORTED_MODULE_5__["Chart"](this.barchartCanvas.nativeElement, {
                            type: "bar",
                            data: {
                                labels: ["Delays", "Presence", "Extra Hours"],
                                datasets: [
                                    {
                                        label: 'User Statistics',
                                        data: [data, data1, data2],
                                        backgroundColor: ["#fff4b3", "#ffe866", "#e6c300"],
                                        borderColor: ["#ccad00", "#ccad00", "#ccad00"],
                                        borderWidth: 0.8,
                                    },
                                ],
                            },
                            options: {
                                scales: {
                                    yAxes: [
                                        {
                                            ticks: {
                                                beginAtZero: true,
                                            },
                                        },
                                    ],
                                },
                            },
                        });
                    });
                }
                else {
                    const toast = yield this.toastController.create({
                        message: "Choose dates correctly !",
                        duration: 2000,
                        color: "warning",
                        cssClass: "toast-scheme",
                    });
                    toast.present();
                }
            }
            else {
                const toast = yield this.toastController.create({
                    message: "Invalid form !",
                    duration: 2000,
                    color: "warning",
                    cssClass: "toast-scheme",
                });
                toast.present();
            }
            this.showDiagram = true;
        });
    }
    getEmployees() {
        this.employeeService.getEmployee().subscribe((data) => {
            this.employeesList = data;
            console.log(this.employeesList);
        });
    }
    getWorkTime() {
        this.attendanceSerice.getWorkTime().subscribe(data => {
            this.workStart = data['timetableStart'].substring(11, 16);
            this.workEnd = data['timetableEnd'].substring(11, 16);
            console.log("Work Time Start", data['timetableStart'].substring(11, 16));
            console.log("Work Time End", data['timetableEnd'].substring(11, 16));
        });
    }
    openMyModalQrScanner() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const myModal = yield this.modalController.create({
                component: _qrattendance_qrattendance_page__WEBPACK_IMPORTED_MODULE_10__["QrattendancePage"],
                cssClass: "my-custom-Qr-modal-css",
            });
            return yield myModal.present();
        });
    }
    expandItem(item) {
        if (item.expanded) {
            item.expanded = false;
        }
        else {
            this.items.map((listItem) => {
                if (item == listItem) {
                    listItem.expanded = !listItem.expanded;
                }
                else {
                    listItem.expanded = false;
                }
                return listItem;
            });
        }
    }
    expandIt(item) {
        if (item.expanded) {
            item.expanded = false;
        }
        else {
            this.its.map((listItem) => {
                if (item == listItem) {
                    listItem.expanded = !listItem.expanded;
                }
                else {
                    listItem.expanded = false;
                }
                return listItem;
            });
        }
    }
    expandIts(item) {
        if (item.expanded) {
            item.expanded = false;
        }
        else {
            this.itss.map((listItem) => {
                if (item == listItem) {
                    listItem.expanded = !listItem.expanded;
                }
                else {
                    listItem.expanded = false;
                }
                return listItem;
            });
        }
    }
};
DashboardPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"] },
    { type: _Services_attendance_service__WEBPACK_IMPORTED_MODULE_2__["AttendanceService"] },
    { type: _Services_employee_service__WEBPACK_IMPORTED_MODULE_3__["EmployeeService"] },
    { type: _Services_stat_service_service__WEBPACK_IMPORTED_MODULE_4__["StatServiceService"] },
    { type: _Services_shared_service__WEBPACK_IMPORTED_MODULE_7__["SharedService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["ToastController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["ModalController"] }
];
DashboardPage.propDecorators = {
    doughnutCanvas: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ["doughnutCanvas", { static: true },] }],
    doughnutCanvas2: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ["doughnutCanvas2", { static: true },] }],
    barchartCanvas: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ["barchartCanvas", { static: true },] }]
};
DashboardPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-dashboard",
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./dashboard.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./dashboard.page.scss */ "./src/app/dashboard/dashboard.page.scss")).default]
    })
], DashboardPage);



/***/ })

}]);
//# sourceMappingURL=dashboard-dashboard-module-es2015.js.map