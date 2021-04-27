(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["expandable-expandable-module"],{

/***/ "./src/app/expandable/expandable-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/expandable/expandable-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: ExpandablePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExpandablePageRoutingModule", function() { return ExpandablePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _expandable_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./expandable.page */ "./src/app/expandable/expandable.page.ts");




const routes = [
    {
        path: '',
        component: _expandable_page__WEBPACK_IMPORTED_MODULE_3__["ExpandablePage"]
    }
];
let ExpandablePageRoutingModule = class ExpandablePageRoutingModule {
};
ExpandablePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ExpandablePageRoutingModule);



/***/ }),

/***/ "./src/app/expandable/expandable.module.ts":
/*!*************************************************!*\
  !*** ./src/app/expandable/expandable.module.ts ***!
  \*************************************************/
/*! exports provided: ExpandablePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExpandablePageModule", function() { return ExpandablePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _expandable_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./expandable-routing.module */ "./src/app/expandable/expandable-routing.module.ts");
/* harmony import */ var _expandable_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./expandable.page */ "./src/app/expandable/expandable.page.ts");







let ExpandablePageModule = class ExpandablePageModule {
};
ExpandablePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _expandable_routing_module__WEBPACK_IMPORTED_MODULE_5__["ExpandablePageRoutingModule"]
        ],
        declarations: [_expandable_page__WEBPACK_IMPORTED_MODULE_6__["ExpandablePage"]]
    })
], ExpandablePageModule);



/***/ })

}]);
//# sourceMappingURL=expandable-expandable-module-es2015.js.map