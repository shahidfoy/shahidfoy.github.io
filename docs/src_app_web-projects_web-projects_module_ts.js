"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_web-projects_web-projects_module_ts"],{

/***/ 439:
/*!*********************************************************************!*\
  !*** ./src/app/web-projects/all-projects/all-projects.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AllProjectsComponent: () => (/* binding */ AllProjectsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _websites_websites_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../websites/websites.component */ 54);


class AllProjectsComponent {
  constructor() {}
  ngOnInit() {}
  static #_ = this.ɵfac = function AllProjectsComponent_Factory(t) {
    return new (t || AllProjectsComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: AllProjectsComponent,
    selectors: [["app-all-projects"]],
    decls: 4,
    vars: 0,
    consts: [[1, "container"]],
    template: function AllProjectsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Websites:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "app-websites");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    },
    dependencies: [_websites_websites_component__WEBPACK_IMPORTED_MODULE_0__.WebsitesComponent],
    styles: [".container[_ngcontent-%COMP%] {\n  padding: 8px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvd2ViLXByb2plY3RzL2FsbC1wcm9qZWN0cy9hbGwtcHJvamVjdHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0FBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcbiAgICBwYWRkaW5nOiA4cHg7XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 1030:
/*!*************************************************************!*\
  !*** ./src/app/web-projects/ricochet/ricochet.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RicochetComponent: () => (/* binding */ RicochetComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);

class RicochetComponent {
  constructor() {}
  ngOnInit() {}
  static #_ = this.ɵfac = function RicochetComponent_Factory(t) {
    return new (t || RicochetComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: RicochetComponent,
    selectors: [["app-ricochet"]],
    decls: 2,
    vars: 0,
    template: function RicochetComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " ricochet works!\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    },
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 3276:
/*!*************************************************************!*\
  !*** ./src/app/web-projects/web-projects-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WebProjectsPageRoutingModule: () => (/* binding */ WebProjectsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _all_projects_all_projects_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./all-projects/all-projects.component */ 439);
/* harmony import */ var _ricochet_ricochet_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ricochet/ricochet.component */ 1030);
/* harmony import */ var _web_projects_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./web-projects.page */ 4808);
/* harmony import */ var _websites_websites_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./websites/websites.component */ 54);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1699);







const routes = [{
  path: '',
  component: _web_projects_page__WEBPACK_IMPORTED_MODULE_2__.WebProjectsPage,
  children: [{
    path: '',
    redirectTo: 'all',
    pathMatch: 'full'
  }, {
    path: 'all',
    component: _all_projects_all_projects_component__WEBPACK_IMPORTED_MODULE_0__.AllProjectsComponent
  }, {
    path: 'ricochet',
    component: _ricochet_ricochet_component__WEBPACK_IMPORTED_MODULE_1__.RicochetComponent
  }, {
    path: 'websites',
    component: _websites_websites_component__WEBPACK_IMPORTED_MODULE_3__.WebsitesComponent
  }]
}];
class WebProjectsPageRoutingModule {
  static #_ = this.ɵfac = function WebProjectsPageRoutingModule_Factory(t) {
    return new (t || WebProjectsPageRoutingModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
    type: WebProjectsPageRoutingModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](WebProjectsPageRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
  });
})();

/***/ }),

/***/ 425:
/*!*****************************************************!*\
  !*** ./src/app/web-projects/web-projects.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WebProjectsPageModule: () => (/* binding */ WebProjectsPageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 4210);
/* harmony import */ var _web_projects_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./web-projects-routing.module */ 3276);
/* harmony import */ var _web_projects_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./web-projects.page */ 4808);
/* harmony import */ var _ricochet_ricochet_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ricochet/ricochet.component */ 1030);
/* harmony import */ var _websites_websites_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./websites/websites.component */ 54);
/* harmony import */ var _all_projects_all_projects_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./all-projects/all-projects.component */ 439);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 1699);









class WebProjectsPageModule {
  static #_ = this.ɵfac = function WebProjectsPageModule_Factory(t) {
    return new (t || WebProjectsPageModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
    type: WebProjectsPageModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule, _web_projects_routing_module__WEBPACK_IMPORTED_MODULE_0__.WebProjectsPageRoutingModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](WebProjectsPageModule, {
    declarations: [_web_projects_page__WEBPACK_IMPORTED_MODULE_1__.WebProjectsPage, _all_projects_all_projects_component__WEBPACK_IMPORTED_MODULE_4__.AllProjectsComponent, _ricochet_ricochet_component__WEBPACK_IMPORTED_MODULE_2__.RicochetComponent, _websites_websites_component__WEBPACK_IMPORTED_MODULE_3__.WebsitesComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule, _web_projects_routing_module__WEBPACK_IMPORTED_MODULE_0__.WebProjectsPageRoutingModule],
    exports: [_web_projects_page__WEBPACK_IMPORTED_MODULE_1__.WebProjectsPage]
  });
})();

/***/ }),

/***/ 4808:
/*!***************************************************!*\
  !*** ./src/app/web-projects/web-projects.page.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WebProjectsPage: () => (/* binding */ WebProjectsPage)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ 4210);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 7947);



class WebProjectsPage {
  constructor() {}
  ngOnInit() {}
  static #_ = this.ɵfac = function WebProjectsPage_Factory(t) {
    return new (t || WebProjectsPage)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: WebProjectsPage,
    selectors: [["app-web-projects"]],
    decls: 7,
    vars: 0,
    consts: [[1, "fas", "fa-anchor"]],
    template: function WebProjectsPage_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-header")(1, "ion-toolbar")(2, "ion-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Web Projects");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ion-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    },
    dependencies: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.IonToolbar, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterOutlet],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 54:
/*!*************************************************************!*\
  !*** ./src/app/web-projects/websites/websites.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WebsitesComponent: () => (/* binding */ WebsitesComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ 4210);


class WebsitesComponent {
  constructor() {}
  ngOnInit() {}
  static #_ = this.ɵfac = function WebsitesComponent_Factory(t) {
    return new (t || WebsitesComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: WebsitesComponent,
    selectors: [["app-websites"]],
    decls: 37,
    vars: 0,
    consts: [[1, "row"], [1, "container", "flex-container"], ["href", "https://codepen.io/shahidfoy/", "target", "_blank"], ["src", "assets/codepen.png"], ["href", "http://pivotvision.com/", "target", "_blank"], ["src", "assets/pivotvision.png"], ["href", "https://www.homesketch.com/", "target", "_blank"], ["src", "assets/homesketch.jpg"], ["href", "https://chakratattoo.multiscreensite.com/", "target", "_blank"], ["src", "assets/chakra_tattoo.jpg"], ["href", "https://www.reneefajardo.com/", "target", "_blank"], ["src", "assets/reneefajardo.png"]],
    template: function WebsitesComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "ion-card", 2)(3, "ion-card-header")(4, "ion-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Code Pen Projects");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ion-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ion-card", 4)(9, "ion-card-header")(10, "ion-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Pivothead Support");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "ion-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "ion-card", 6)(15, "ion-card-header")(16, "ion-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Home Sketch");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "ion-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "ion-card", 8)(21, "ion-card-header")(22, "ion-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Charkra Tattoo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "ion-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "ion-card", 10)(27, "ion-card-header")(28, "ion-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Renee Fajardo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "ion-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "ion-card")(33, "ion-card-header")(34, "ion-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "More projects coming soon!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "ion-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      }
    },
    dependencies: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__.IonCard, _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.IonCardContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.IonCardHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.IonCardTitle],
    styles: [".flex-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n}\n.flex-container[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%] {\n  min-width: 250px;\n  max-width: 250px;\n}\n\n.justify-center[_ngcontent-%COMP%] {\n  justify-content: center;\n}\n\nimg[_ngcontent-%COMP%] {\n  width: 200px;\n  height: 200px;\n  vertical-align: middle;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvd2ViLXByb2plY3RzL3dlYnNpdGVzL3dlYnNpdGVzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLGVBQUE7QUFDSjtBQUNJO0VBQ0ksZ0JBQUE7RUFDQSxnQkFBQTtBQUNSOztBQUdBO0VBQ0ksdUJBQUE7QUFBSjs7QUFHQTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7QUFBSiIsInNvdXJjZXNDb250ZW50IjpbIi5mbGV4LWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgLy8ganVzdGlmeS1jb250ZW50OiBsZWZ0O1xuICAgIGlvbi1jYXJkIHtcbiAgICAgICAgbWluLXdpZHRoOiAyNTBweDtcbiAgICAgICAgbWF4LXdpZHRoOiAyNTBweDtcbiAgICB9XG59XG5cbi5qdXN0aWZ5LWNlbnRlciB7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbmltZyB7XG4gICAgd2lkdGg6IDIwMHB4O1xuICAgIGhlaWdodDogMjAwcHg7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ })

}]);
//# sourceMappingURL=src_app_web-projects_web-projects_module_ts.js.map