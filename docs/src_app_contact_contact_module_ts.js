"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_contact_contact_module_ts"],{

/***/ 7786:
/*!***************************************************!*\
  !*** ./src/app/contact/contact-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ContactPageRoutingModule: () => (/* binding */ ContactPageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _contact_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contact.page */ 9495);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);




const routes = [{
  path: '',
  component: _contact_page__WEBPACK_IMPORTED_MODULE_0__.ContactPage
}];
class ContactPageRoutingModule {
  static #_ = this.ɵfac = function ContactPageRoutingModule_Factory(t) {
    return new (t || ContactPageRoutingModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
    type: ContactPageRoutingModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ContactPageRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 915:
/*!*******************************************!*\
  !*** ./src/app/contact/contact.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ContactPageModule: () => (/* binding */ ContactPageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 4210);
/* harmony import */ var _contact_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contact-routing.module */ 7786);
/* harmony import */ var _contact_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contact.page */ 9495);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);






class ContactPageModule {
  static #_ = this.ɵfac = function ContactPageModule_Factory(t) {
    return new (t || ContactPageModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
    type: ContactPageModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _contact_routing_module__WEBPACK_IMPORTED_MODULE_0__.ContactPageRoutingModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](ContactPageModule, {
    declarations: [_contact_page__WEBPACK_IMPORTED_MODULE_1__.ContactPage],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _contact_routing_module__WEBPACK_IMPORTED_MODULE_0__.ContactPageRoutingModule]
  });
})();

/***/ }),

/***/ 9495:
/*!*****************************************!*\
  !*** ./src/app/contact/contact.page.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ContactPage: () => (/* binding */ ContactPage)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ 4210);


class ContactPage {
  constructor() {}
  ngOnInit() {}
  static #_ = this.ɵfac = function ContactPage_Factory(t) {
    return new (t || ContactPage)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: ContactPage,
    selectors: [["app-contact"]],
    decls: 68,
    vars: 0,
    consts: [[1, "fas", "fa-paper-plane"], [1, "container"], ["href", "https://cdn.jotfor.ms/static/formCss.css?3.3.25582", "rel", "stylesheet", "type", "text/css"], ["type", "text/css", "rel", "stylesheet", "href", "https://cdn.jotfor.ms/css/styles/nova.css?3.3.25582"], ["type", "text/css", "media", "print", "rel", "stylesheet", "href", "https://cdn.jotfor.ms/css/printForm.css?3.3.25582"], ["ngNoForm", "", "action", "https://submit.jotform.us/submit/62458485863167/", "method", "post", "name", "form_62458485863167", "id", "62458485863167", "accept-charset", "utf-8", "autocomplete", "on", 1, "jotform-form"], ["type", "hidden", "name", "formID", "value", "62458485863167"], ["type", "hidden", "id", "JWTContainer", "value", ""], ["type", "hidden", "id", "cardinalOrderNumber", "value", ""], ["role", "main", 1, "form-all"], [1, "form-section", "page-section"], ["data-type", "control_fullname", "id", "id_3", 1, "form-line"], ["color", "primary", "id", "label_3", "for", "first_3", 1, "form-label-left", "form-label-auto"], ["id", "cid_3", 1, "form-input"], ["data-wrapper-react", "true"], ["data-input-type", "first", 1, "form-sub-label-container", 2, "vertical-align", "top"], ["type", "text", "id", "first_3", "name", "q3_name[first]", "size", "10", "value", "", "data-component", "first", "aria-labelledby", "label_3 sublabel_3_first", 1, "form-textbox"], ["for", "first_3", "id", "sublabel_3_first", "aria-hidden", "false", 1, "form-sub-label", 2, "min-height", "13px"], ["data-input-type", "last", 1, "form-sub-label-container", 2, "vertical-align", "top"], ["type", "text", "id", "last_3", "name", "q3_name[last]", "size", "15", "value", "", "data-component", "last", "aria-labelledby", "label_3 sublabel_3_last", 1, "form-textbox"], ["for", "last_3", "id", "sublabel_3_last", "aria-hidden", "false", 1, "form-sub-label", 2, "min-height", "13px"], ["data-type", "control_email", "id", "id_4", 1, "form-line"], ["color", "primary", "id", "label_4", "for", "input_4", 1, "form-label", "form-label-left", "form-label-auto"], ["id", "cid_4", 1, "form-input"], ["type", "email", "id", "input_4", "name", "q4_email", "size", "30", "value", "", "placeholder", " ", "data-component", "email", "aria-labelledby", "label_4", 1, "form-textbox", "validate[Email]"], ["data-type", "control_phone", "id", "id_5", 1, "form-line"], ["color", "primary", "id", "label_5", "for", "input_5_area", 1, "form-label", "form-label-left", "form-label-auto"], ["id", "cid_5", 1, "form-input"], ["data-input-type", "areaCode", 1, "form-sub-label-container", 2, "vertical-align", "top"], ["type", "tel", "id", "input_5_area", "name", "q5_phoneNumber[area]", "value", "", "data-component", "areaCode", "aria-labelledby", "label_5 sublabel_5_area", 1, "form-textbox"], ["aria-hidden", "true", 1, "phone-separate"], ["for", "input_5_area", "id", "sublabel_5_area", "aria-hidden", "false", 1, "form-sub-label", 2, "min-height", "13px"], ["data-input-type", "phone", 1, "form-sub-label-container", 2, "vertical-align", "top"], ["type", "tel", "id", "input_5_phone", "name", "q5_phoneNumber[phone]", "value", "", "data-component", "phone", "aria-labelledby", "label_5 sublabel_5_phone", 1, "form-textbox"], ["for", "input_5_phone", "id", "sublabel_5_phone", "aria-hidden", "false", 1, "form-sub-label", 2, "min-height", "13px"], ["data-type", "control_textarea", "id", "id_6", 1, "form-line"], ["id", "label_6", "for", "input_6", 1, "form-label", "form-label-left", "form-label-auto"], ["id", "cid_6", 1, "form-input"], ["id", "input_6", "name", "q6_input6", "cols", "40", "rows", "6", "data-component", "textarea", "aria-labelledby", "label_6", 1, "form-textarea"], ["data-type", "control_button", "id", "id_2", 1, "form-line"], ["id", "cid_2", 1, "form-input-wide"], ["data-align", "auto", 1, "form-buttons-wrapper", "form-buttons-auto", "jsTest-button-wrapperField"], ["id", "input_2", "type", "submit", "data-component", "button", "data-content", "", 1, "btn", "btn-primary", "btn-block"], [2, "display", "none"], ["type", "text", "name", "website", "value", ""], ["type", "hidden", "id", "simple_spc", "name", "simple_spc", "value", "62458485863167", 1, "simple_spc"], [1, "formFooter-heightMask"], [2, "display", "flex", "justify-content", "center", "align-items", "center"], ["href", "mailto:shahidfoy@gmail.com", "target", "_top", 1, "btn", "btn-block"], [2, "margin-bottom", "8px"], [1, "heart"]],
    template: function ContactPage_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-header")(1, "ion-toolbar")(2, "ion-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ion-content")(6, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "link", 2)(8, "link", 3)(9, "link", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "form", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 6)(12, "input", 7)(13, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 9)(15, "ul", 10)(16, "li", 11)(17, "ion-label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Name ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 13)(20, "div", 14)(21, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "label", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " First Name ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "label", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " Last Name ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "li", 21)(30, "ion-label", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " E-mail ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "input", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "li", 25)(35, "ion-label", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " Phone Number ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 27)(38, "div", 14)(39, "span", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "input", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "span", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, " - ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "label", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, " Area Code ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "span", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "input", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "label", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, " Phone Number ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "li", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "label", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "textarea", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "li", 39)(54, "div", 40)(55, "div", 41)(56, "button", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, " Submit ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "li", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, " Should be Empty: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "input", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "input", 45)(62, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 47)(64, "a", 48)(65, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Click the heart to send me an email instead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      }
    },
    dependencies: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.IonToolbar],
    styles: ["ul[_ngcontent-%COMP%] {\n  list-style-type: none;\n}\n\n.container[_ngcontent-%COMP%] {\n  padding: 13px;\n}\n\n.heart[_ngcontent-%COMP%] {\n  position: relative;\n  margin: auto;\n  top: 10px;\n  right: 0;\n  bottom: 0;\n  left: 10px;\n  background-color: pink;\n  height: 50px;\n  width: 50px;\n  transform: rotate(-45deg);\n  animation-name: _ngcontent-%COMP%_beat;\n  animation-duration: 1s;\n  animation-iteration-count: infinite;\n}\n\n.heart[_ngcontent-%COMP%]:after {\n  background-color: pink;\n  content: \"\";\n  border-radius: 50%;\n  position: absolute;\n  width: 50px;\n  height: 50px;\n  top: 0px;\n  left: 25px;\n}\n\n.heart[_ngcontent-%COMP%]:before {\n  background-color: pink;\n  content: \"\";\n  border-radius: 50%;\n  position: absolute;\n  width: 50px;\n  height: 50px;\n  top: -25px;\n  left: 0px;\n}\n\n@keyframes _ngcontent-%COMP%_beat {\n  0% {\n    transform: scale(1) rotate(-45deg);\n  }\n  50% {\n    transform: scale(0.6) rotate(-45deg);\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29udGFjdC9jb250YWN0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHFCQUFBO0FBQ0o7O0FBRUE7RUFDSSxhQUFBO0FBQ0o7O0FBRUE7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxzQkFBQTtFQUNBLG1DQUFBO0FBQ0o7O0FBQ0U7RUFDRSxzQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtBQUVKOztBQUFFO0VBQ0Usc0JBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7QUFHSjs7QUFBRTtFQUNFO0lBQ0Usa0NBQUE7RUFHSjtFQURFO0lBQ0Usb0NBQUE7RUFHSjtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsidWwge1xyXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG59XHJcblxyXG4uY29udGFpbmVyIHtcclxuICAgIHBhZGRpbmc6IDEzcHg7XHJcbn1cclxuXHJcbi5oZWFydCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICB0b3A6IDEwcHg7XHJcbiAgICByaWdodDogMDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIGxlZnQ6IDEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBwaW5rO1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgd2lkdGg6IDUwcHg7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xyXG4gICAgYW5pbWF0aW9uLW5hbWU6IGJlYXQ7XHJcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDFzO1xyXG4gICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XHJcbiAgfVxyXG4gIC5oZWFydDphZnRlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBwaW5rO1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgdG9wOiAwcHg7XHJcbiAgICBsZWZ0OiAyNXB4O1xyXG4gIH1cclxuICAuaGVhcnQ6YmVmb3JlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHBpbms7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDUwcHg7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICB0b3A6IC0yNXB4O1xyXG4gICAgbGVmdDogMHB4O1xyXG4gIH1cclxuXHJcbiAgQGtleWZyYW1lcyBiZWF0IHtcclxuICAgIDAlIHtcclxuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjApIHJvdGF0ZSgtNDVkZWcpO1xyXG4gICAgfVxyXG4gICAgNTAlIHtcclxuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjYpIHJvdGF0ZSgtNDVkZWcpO1xyXG4gICAgfVxyXG4gIH1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */", ".form-label-left[_ngcontent-%COMP%]{\n         width:150px;\n     }\n     .form-line[_ngcontent-%COMP%]{\n         padding-top:12px;\n         padding-bottom:12px;\n     }\n     .form-label-right[_ngcontent-%COMP%]{\n         width:150px;\n     }\n     .form-all[_ngcontent-%COMP%]{\n         display: flex;\n         justify-content: center;\n         \n\n         \n\n         \n\n         font-size:14px;\n     }"]
  });
}

/***/ })

}]);
//# sourceMappingURL=src_app_contact_contact_module_ts.js.map