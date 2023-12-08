"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_home_home_module_ts"],{

/***/ 6058:
/*!*********************************************!*\
  !*** ./src/app/home/home-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HomePageRoutingModule: () => (/* binding */ HomePageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page */ 6957);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);




const routes = [{
  path: '',
  component: _home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage
}];
class HomePageRoutingModule {
  static #_ = this.ɵfac = function HomePageRoutingModule_Factory(t) {
    return new (t || HomePageRoutingModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
    type: HomePageRoutingModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](HomePageRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 4320:
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HomePageModule: () => (/* binding */ HomePageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 4210);
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home-routing.module */ 6058);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.page */ 6957);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);






class HomePageModule {
  static #_ = this.ɵfac = function HomePageModule_Factory(t) {
    return new (t || HomePageModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
    type: HomePageModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _home_routing_module__WEBPACK_IMPORTED_MODULE_0__.HomePageRoutingModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](HomePageModule, {
    declarations: [_home_page__WEBPACK_IMPORTED_MODULE_1__.HomePage],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _home_routing_module__WEBPACK_IMPORTED_MODULE_0__.HomePageRoutingModule]
  });
})();

/***/ }),

/***/ 6957:
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HomePage: () => (/* binding */ HomePage)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ 4210);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 7947);



const _c0 = function () {
  return ["/tabs/web-projects"];
};
const _c1 = function () {
  return ["/tabs/resume"];
};
const _c2 = function () {
  return ["/tabs/contact"];
};
const _c3 = function () {
  return ["/tabs/payment-portal"];
};
class HomePage {
  constructor() {}
  ngOnInit() {}
  static #_ = this.ɵfac = function HomePage_Factory(t) {
    return new (t || HomePage)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: HomePage,
    selectors: [["app-home"]],
    decls: 49,
    vars: 8,
    consts: [["src", "assets/cc.png", 2, "width", "30px"], [1, "container"], ["src", "assets/profile.jpg", 2, "border-radius", "50%", "width", "200px", "height", "200px", "margin", "21px"], ["src", "assets/contravanceCreations3.png", 2, "height", "250px", "width", "350px"], [1, "float-right", 2, "position", "absolute", "right", "0", "top", "10px"], ["id", "gitHub", 1, "contact-options", "circle-link"], ["href", "https://github.com/shahidfoy", "target", "_blank"], ["aria-hidden", "true", 1, "fab", "fa-github"], ["id", "linkedIn", 1, "contact-options", "circle-link"], ["href", "https://www.linkedin.com/in/shahid-foy-302476b7", "target", "_blank"], [1, "fab", "fa-linkedin"], ["id", "codePen", 1, "contact-options", "circle-link"], ["href", "https://codepen.io/shahidfoy/", "target", "_blank"], [1, "fab", "fa-codepen"], [1, "row"], [1, "container", "flex-container"], [3, "routerLink"], [1, "fas", "fa-anchor"], [1, "fas", "fa-hat-wizard"], [1, "fas", "fa-paper-plane"], [1, "fas", "fa-money-check-alt"]],
    template: function HomePage_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-header")(1, "ion-toolbar")(2, "ion-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Contrivance Creations");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ion-content")(6, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 2)(8, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4)(10, "div", 5)(11, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8)(14, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 11)(17, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 14)(20, "div", 15)(21, "ion-card", 16)(22, "ion-card-header")(23, "ion-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " Projects");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "ion-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " Projects I have worked on. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "ion-card", 16)(29, "ion-card-header")(30, "ion-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " Resume");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "ion-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " My journey as a software developer. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "ion-card", 16)(36, "ion-card-header")(37, "ion-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "i", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, " Contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "ion-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, " Keep in contact with me through these proxies. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "ion-card", 16)(43, "ion-card-header")(44, "ion-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "i", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, " Payment Portal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "ion-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, " Payment gateways accepted by me. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c3));
      }
    },
    dependencies: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__.IonCard, _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.IonCardContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.IonCardHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.IonCardTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.RouterLinkDelegate, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink],
    styles: ["@charset \"UTF-8\";\n[_nghost-%COMP%] {\n  padding: 0;\n  margin: 0;\n  position: fixed;\n  background-attachment: fixed;\n  background-image: url(\"/assets/background2.jpg\");\n  background-size: cover;\n  background-repeat: no-repeat;\n}\n\nbody[_ngcontent-%COMP%] {\n  font-family: \"Orbitron\", sans-serif !important;\n}\n\n.contact-options[_ngcontent-%COMP%] {\n  font-size: 1.5em;\n  margin-left: 20px;\n  margin-right: 20px;\n  margin-top: 5px;\n}\n\nion-content[_ngcontent-%COMP%] {\n  padding: 0;\n  margin: 0;\n}\n\n.flex-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n}\n.flex-container[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%] {\n  min-width: 350px;\n  max-width: 350px;\n}\n\n.justify-center[_ngcontent-%COMP%] {\n  justify-content: center;\n}\n\n.jumbotron[_ngcontent-%COMP%] {\n  padding: 0;\n  margin: 0;\n  z-index: 1;\n}\n\n.circle-link[_ngcontent-%COMP%] {\n  height: 40px;\n  width: 40px;\n  border-radius: 40px;\n  margin: 8px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n  transition: 1s ease-out;\n}\n\n.circle-link[_ngcontent-%COMP%]:hover {\n  transform: translateY(-0.25rem);\n  box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);\n}\n.circle-link[_ngcontent-%COMP%]:hover   a[_ngcontent-%COMP%] {\n  color: blue;\n}\n\n.terminal[_ngcontent-%COMP%] {\n  position: relative;\n  width: 80%;\n  max-width: 600px;\n  border-radius: 6px;\n  padding-top: 45px;\n  margin-top: 8px;\n  overflow: hidden;\n  background-color: rgb(15, 15, 16);\n}\n\n.terminal[_ngcontent-%COMP%]::before {\n  content: \"\u2022\u2022\u2022\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 4px;\n  background: rgb(58, 58, 58);\n  color: #c2c3c4;\n  width: 100%;\n  font-size: 2rem;\n  line-height: 0;\n  padding: 14px 0;\n  text-indent: 4px;\n}\n\n.terminal[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%] {\n  font-family: SFMono-Regular, Consolas, Liberation Mono, Menlo, monospace;\n  color: white;\n  padding: 0 1rem 1rem;\n  margin: 0;\n}\n\n\n\n@media screen and (max-width: 767px) {\n  .terminal[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvaG9tZS9ob21lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUFBaEI7RUFDSSxVQUFBO0VBQ0EsU0FBQTtFQUVBLGVBQUE7RUFDQSw0QkFBQTtFQUNBLGdEQUFBO0VBQ0Esc0JBQUE7RUFDQSw0QkFBQTtBQUNKOztBQUVBO0VBQ0ksOENBQUE7QUFDSjs7QUFFQTtFQUNJLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUFDSjs7QUFFQTtFQUNJLFVBQUE7RUFDQSxTQUFBO0FBQ0o7O0FBRUE7RUFDSSxhQUFBO0VBQ0EsZUFBQTtBQUNKO0FBQ0k7RUFDSSxnQkFBQTtFQUNBLGdCQUFBO0FBQ1I7O0FBR0E7RUFDSSx1QkFBQTtBQUFKOztBQUdBO0VBQ0ksVUFBQTtFQUNBLFNBQUE7RUFPQSxVQUFBO0FBTko7O0FBYUE7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUdBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLHdFQUFBO0VBQ0EsdUJBQUE7QUFaSjs7QUFtQkE7RUFDSSwrQkFBQTtFQUNBLDJDQUFBO0FBaEJKO0FBaUJJO0VBQ0ksV0FBQTtBQWZSOztBQW1CQTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlDQUFBO0FBaEJKOztBQW1CRTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLDJCQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQWhCSjs7QUFtQkU7RUFDRSx3RUFBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtFQUNBLFNBQUE7QUFoQko7O0FBb0JJLHNCQUFBO0FBQ0E7RUFFSTtJQUNJLFdBQUE7RUFsQlY7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgICBwYWRkaW5nOiAwO1xuICAgIG1hcmdpbjogMDtcblxuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvYmFja2dyb3VuZDIuanBnXCIpO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbn1cblxuYm9keSB7XG4gICAgZm9udC1mYW1pbHk6ICdPcmJpdHJvbicsIHNhbnMtc2VyaWYgIWltcG9ydGFudDtcbn1cblxuLmNvbnRhY3Qtb3B0aW9ucyB7XG4gICAgZm9udC1zaXplOiAxLjVlbTtcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gICAgbWFyZ2luLXRvcDogNXB4O1xufVxuXG5pb24tY29udGVudCB7XG4gICAgcGFkZGluZzogMDtcbiAgICBtYXJnaW46IDA7XG59XG5cbi5mbGV4LWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgLy8ganVzdGlmeS1jb250ZW50OiBsZWZ0O1xuICAgIGlvbi1jYXJkIHtcbiAgICAgICAgbWluLXdpZHRoOiAzNTBweDtcbiAgICAgICAgbWF4LXdpZHRoOiAzNTBweDtcbiAgICB9XG59XG5cbi5qdXN0aWZ5LWNlbnRlciB7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5qdW1ib3Ryb24ge1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbWFyZ2luOiAwO1xuICAgIC8vIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAvLyBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xuICAgIC8vIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvd3JpdHRlcnJhYmJpdC5wbmdcIik7XG4gICAgLy8gYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAvLyBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIC8vIGhlaWdodDogMTAwdmg7XG4gICAgei1pbmRleDogMTtcblxuICAgIC8vIGJhY2tncm91bmQ6IHJnYigyMyw1MCwzMCk7XG4gICAgLy8gYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KGNpcmNsZSwgcmdiKDQ5LCA0OSwgNDkpIDMzJSwgcmdiKDQzLCAxMjgsIDMxKSA1MiUsIHRyYW5zcGFyZW50IDg2JSk7XG59XG5cblxuLmNpcmNsZS1saW5rIHtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgd2lkdGg6IDQwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNDBweDtcbiAgICBtYXJnaW46IDhweDtcbiAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAvLyBib3JkZXI6IDFweCBzb2xpZCAjZWVlZWVlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgYm94LXNoYWRvdzogMCAxcHggM3B4IHJnYmEoMCwgMCwgMCwgMC4xMiksIDAgMXB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMjQpO1xuICAgIHRyYW5zaXRpb246IDFzIGVhc2Utb3V0O1xuXG4gICAgLy8gYSB7XG4gICAgLy8gICAgIGNvbG9yOiBibGFjaztcbiAgICAvLyB9XG4gIH1cblxuLmNpcmNsZS1saW5rOmhvdmVyIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTAuMjVyZW0pO1xuICAgIGJveC1zaGFkb3c6IDBweCAzcHggMTVweCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gICAgYSB7XG4gICAgICAgIGNvbG9yOiBibHVlO1xuICAgIH1cbn1cblxuLnRlcm1pbmFsIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgd2lkdGg6IDgwJTtcbiAgICBtYXgtd2lkdGg6IDYwMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICBwYWRkaW5nLXRvcDogNDVweDtcbiAgICBtYXJnaW4tdG9wOiA4cHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTUsIDE1LCAxNik7XG4gIH1cblxuICAudGVybWluYWw6OmJlZm9yZSB7XG4gICAgY29udGVudDogXCJcXDIwMjIgXFwyMDIyIFxcMjAyMlwiO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICBoZWlnaHQ6IDRweDtcbiAgICBiYWNrZ3JvdW5kOiByZ2IoNTgsIDU4LCA1OCk7XG4gICAgY29sb3I6ICNjMmMzYzQ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZm9udC1zaXplOiAycmVtO1xuICAgIGxpbmUtaGVpZ2h0OiAwO1xuICAgIHBhZGRpbmc6IDE0cHggMDtcbiAgICB0ZXh0LWluZGVudDogNHB4O1xuICB9XG5cbiAgLnRlcm1pbmFsIHByZSB7XG4gICAgZm9udC1mYW1pbHk6IFNGTW9uby1SZWd1bGFyLENvbnNvbGFzLExpYmVyYXRpb24gTW9ubyxNZW5sbyxtb25vc3BhY2U7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHBhZGRpbmc6IDAgMXJlbSAxcmVtO1xuICAgIG1hcmdpbjogMDtcbiAgfVxuXG5cbiAgICAvKiBSZXNwb25zaXZlIFN0eWxlcyAqL1xuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XG5cbiAgICAgICAgLnRlcm1pbmFsIHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB9XG4gICAgfSJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ })

}]);
//# sourceMappingURL=src_app_home_home_module_ts.js.map