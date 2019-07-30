(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#container {\r\n    padding: 15px;\r\n}\r\n\r\n.popover{\r\n    width:200px;\r\n    height:250px;\r\n    \r\n}\r\n\r\n.cc-selector input{\r\n    margin:0;padding:0;\r\n    -webkit-appearance:none;\r\n       -moz-appearance:none;\r\n            appearance:none;\r\n}\r\n\r\n.cc-selectoragil input{\r\n    margin:0;padding:0;\r\n    -webkit-appearance:none;\r\n       -moz-appearance:none;\r\n            appearance:none;\r\n}\r\n\r\n.comportamiento1{\r\n    background-image:url(\"/assets/Images/Comportamiento1.PNG\");\r\n }\r\n\r\n.comportamiento2{\r\n    background-image:url(\"/assets/Images/compoirtamiento2.PNG\")\r\n}\r\n\r\n.comportamiento3{\r\n    background-image:url(\"/assets/Images/comportamiento3.PNG\");\r\n }\r\n\r\n.comportamiento4{\r\n    background-image:url(\"/assets/Images/comportamiento4.PNG\")\r\n}\r\n\r\n.agilismo1{\r\n    background-image:url(\"/assets/Images/agil1.PNG\");\r\n }\r\n\r\n.agilismo2{\r\n    background-image:url(\"/assets/Images/agil2.PNG\")\r\n}\r\n\r\n.agilismo3{\r\n    background-image:url(\"/assets/Images/agil3.PNG\");\r\n }\r\n\r\n.agilismo4{\r\n    background-image:url(\"/assets/Images/agil4.PNG\")\r\n}\r\n\r\n.cc-selector-2 input:active +.drinkcard-cc, .cc-selector input:active +.drinkcard-cc{opacity: .9;}\r\n\r\n.cc-selector-2 input:checked +.drinkcard-cc, .cc-selector input:checked +.drinkcard-cc{\r\n    -webkit-filter: none;\r\n       -moz-filter: none;\r\n            filter: none;\r\n}\r\n\r\n.cc-selectoragil-2 input:active +.drinkagil-cc, .cc-selectoragil input:active +.drinkagil-cc{opacity: .9;}\r\n\r\n.cc-selectoragil-2 input:checked +.drinkagil-cc, .cc-selectoragil input:checked +.drinkagil-cc{\r\n    -webkit-filter: none;\r\n       -moz-filter: none;\r\n            filter: none;\r\n}\r\n\r\n.drinkcard-cc{\r\n    cursor:pointer;\r\n    background-size:200px 200px;\r\n    background-repeat:no-repeat;\r\n    display:inline-block;\r\n    display: block;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    width:10em;height:12em;\r\n    transition: all 100ms ease-in;\r\n    -webkit-filter: brightness(1) grayscale(.9) opacity(.7);\r\n       -moz-filter: brightness(1) grayscale(.9) opacity(.7);\r\n            filter: brightness(1) grayscale(.9) opacity(.7);\r\n}\r\n\r\n.drinkcard-cc:hover{\r\n    -webkit-filter: brightness(1) grayscale(.9) opacity(.7);\r\n       -moz-filter: brightness(1) grayscale(.9) opacity(.7);\r\n            filter: brightness(1) grayscale(.9) opacity(.7);\r\n}\r\n\r\n.drinkagil-cc{\r\n    cursor:pointer;\r\n    background-size:200px 200px;\r\n    background-repeat:no-repeat;\r\n    display:inline-block;\r\n    display: block;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    width:10em;height:12em;\r\n    transition: all 100ms ease-in;\r\n    -webkit-filter: brightness(1) grayscale(.9) opacity(.7);\r\n       -moz-filter: brightness(1) grayscale(.9) opacity(.7);\r\n            filter: brightness(1) grayscale(.9) opacity(.7);\r\n}\r\n\r\n.drinkagil-cc:hover{\r\n    -webkit-filter: brightness(1) grayscale(.9) opacity(.7);\r\n       -moz-filter: brightness(1) grayscale(.9) opacity(.7);\r\n            filter: brightness(1) grayscale(.9) opacity(.7);\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7O0FBRWhCOztBQUVBO0lBQ0ksUUFBUSxDQUFDLFNBQVM7SUFDbEIsdUJBQXVCO09BQ3BCLG9CQUFvQjtZQUNmLGVBQWU7QUFDM0I7O0FBRUE7SUFDSSxRQUFRLENBQUMsU0FBUztJQUNsQix1QkFBdUI7T0FDcEIsb0JBQW9CO1lBQ2YsZUFBZTtBQUMzQjs7QUFFQTtJQUNJLDBEQUEwRDtDQUM3RDs7QUFDRDtJQUNJO0FBQ0o7O0FBQ0E7SUFDSSwwREFBMEQ7Q0FDN0Q7O0FBQ0Q7SUFDSTtBQUNKOztBQUVBO0lBQ0ksZ0RBQWdEO0NBQ25EOztBQUNEO0lBQ0k7QUFDSjs7QUFDQTtJQUNJLGdEQUFnRDtDQUNuRDs7QUFDRDtJQUNJO0FBQ0o7O0FBR0EscUZBQXFGLFdBQVcsQ0FBQzs7QUFDakc7SUFDSSxvQkFBb0I7T0FDakIsaUJBQWlCO1lBQ1osWUFBWTtBQUN4Qjs7QUFFQSw2RkFBNkYsV0FBVyxDQUFDOztBQUN6RztJQUNJLG9CQUFvQjtPQUNqQixpQkFBaUI7WUFDWixZQUFZO0FBQ3hCOztBQUVBO0lBQ0ksY0FBYztJQUNkLDJCQUEyQjtJQUMzQiwyQkFBMkI7SUFDM0Isb0JBQW9CO0lBQ3BCLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLFVBQVUsQ0FBQyxXQUFXO0lBR2QsNkJBQTZCO0lBQ3JDLHVEQUF1RDtPQUNwRCxvREFBb0Q7WUFDL0MsK0NBQStDO0FBQzNEOztBQUNBO0lBQ0ksdURBQXVEO09BQ3BELG9EQUFvRDtZQUMvQywrQ0FBK0M7QUFDM0Q7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsMkJBQTJCO0lBQzNCLDJCQUEyQjtJQUMzQixvQkFBb0I7SUFDcEIsY0FBYztJQUNkLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsVUFBVSxDQUFDLFdBQVc7SUFHZCw2QkFBNkI7SUFDckMsdURBQXVEO09BQ3BELG9EQUFvRDtZQUMvQywrQ0FBK0M7QUFDM0Q7O0FBQ0E7SUFDSSx1REFBdUQ7T0FDcEQsb0RBQW9EO1lBQy9DLCtDQUErQztBQUMzRCIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2NvbnRhaW5lciB7XHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG59XHJcblxyXG4ucG9wb3ZlcntcclxuICAgIHdpZHRoOjIwMHB4O1xyXG4gICAgaGVpZ2h0OjI1MHB4O1xyXG4gICAgXHJcbn1cclxuXHJcbi5jYy1zZWxlY3RvciBpbnB1dHtcclxuICAgIG1hcmdpbjowO3BhZGRpbmc6MDtcclxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTpub25lO1xyXG4gICAgICAgLW1vei1hcHBlYXJhbmNlOm5vbmU7XHJcbiAgICAgICAgICAgIGFwcGVhcmFuY2U6bm9uZTtcclxufVxyXG5cclxuLmNjLXNlbGVjdG9yYWdpbCBpbnB1dHtcclxuICAgIG1hcmdpbjowO3BhZGRpbmc6MDtcclxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTpub25lO1xyXG4gICAgICAgLW1vei1hcHBlYXJhbmNlOm5vbmU7XHJcbiAgICAgICAgICAgIGFwcGVhcmFuY2U6bm9uZTtcclxufVxyXG5cclxuLmNvbXBvcnRhbWllbnRvMXtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6dXJsKFwiL2Fzc2V0cy9JbWFnZXMvQ29tcG9ydGFtaWVudG8xLlBOR1wiKTtcclxuIH1cclxuLmNvbXBvcnRhbWllbnRvMntcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6dXJsKFwiL2Fzc2V0cy9JbWFnZXMvY29tcG9pcnRhbWllbnRvMi5QTkdcIilcclxufVxyXG4uY29tcG9ydGFtaWVudG8ze1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTp1cmwoXCIvYXNzZXRzL0ltYWdlcy9jb21wb3J0YW1pZW50bzMuUE5HXCIpO1xyXG4gfVxyXG4uY29tcG9ydGFtaWVudG80e1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTp1cmwoXCIvYXNzZXRzL0ltYWdlcy9jb21wb3J0YW1pZW50bzQuUE5HXCIpXHJcbn1cclxuXHJcbi5hZ2lsaXNtbzF7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOnVybChcIi9hc3NldHMvSW1hZ2VzL2FnaWwxLlBOR1wiKTtcclxuIH1cclxuLmFnaWxpc21vMntcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6dXJsKFwiL2Fzc2V0cy9JbWFnZXMvYWdpbDIuUE5HXCIpXHJcbn1cclxuLmFnaWxpc21vM3tcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6dXJsKFwiL2Fzc2V0cy9JbWFnZXMvYWdpbDMuUE5HXCIpO1xyXG4gfVxyXG4uYWdpbGlzbW80e1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTp1cmwoXCIvYXNzZXRzL0ltYWdlcy9hZ2lsNC5QTkdcIilcclxufVxyXG5cclxuXHJcbi5jYy1zZWxlY3Rvci0yIGlucHV0OmFjdGl2ZSArLmRyaW5rY2FyZC1jYywgLmNjLXNlbGVjdG9yIGlucHV0OmFjdGl2ZSArLmRyaW5rY2FyZC1jY3tvcGFjaXR5OiAuOTt9XHJcbi5jYy1zZWxlY3Rvci0yIGlucHV0OmNoZWNrZWQgKy5kcmlua2NhcmQtY2MsIC5jYy1zZWxlY3RvciBpbnB1dDpjaGVja2VkICsuZHJpbmtjYXJkLWNje1xyXG4gICAgLXdlYmtpdC1maWx0ZXI6IG5vbmU7XHJcbiAgICAgICAtbW96LWZpbHRlcjogbm9uZTtcclxuICAgICAgICAgICAgZmlsdGVyOiBub25lO1xyXG59XHJcblxyXG4uY2Mtc2VsZWN0b3JhZ2lsLTIgaW5wdXQ6YWN0aXZlICsuZHJpbmthZ2lsLWNjLCAuY2Mtc2VsZWN0b3JhZ2lsIGlucHV0OmFjdGl2ZSArLmRyaW5rYWdpbC1jY3tvcGFjaXR5OiAuOTt9XHJcbi5jYy1zZWxlY3RvcmFnaWwtMiBpbnB1dDpjaGVja2VkICsuZHJpbmthZ2lsLWNjLCAuY2Mtc2VsZWN0b3JhZ2lsIGlucHV0OmNoZWNrZWQgKy5kcmlua2FnaWwtY2N7XHJcbiAgICAtd2Via2l0LWZpbHRlcjogbm9uZTtcclxuICAgICAgIC1tb3otZmlsdGVyOiBub25lO1xyXG4gICAgICAgICAgICBmaWx0ZXI6IG5vbmU7XHJcbn1cclxuXHJcbi5kcmlua2NhcmQtY2N7XHJcbiAgICBjdXJzb3I6cG9pbnRlcjtcclxuICAgIGJhY2tncm91bmQtc2l6ZToyMDBweCAyMDBweDtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0Om5vLXJlcGVhdDtcclxuICAgIGRpc3BsYXk6aW5saW5lLWJsb2NrO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgIHdpZHRoOjEwZW07aGVpZ2h0OjEyZW07XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAxMDBtcyBlYXNlLWluO1xyXG4gICAgICAgLW1vei10cmFuc2l0aW9uOiBhbGwgMTAwbXMgZWFzZS1pbjtcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDEwMG1zIGVhc2UtaW47XHJcbiAgICAtd2Via2l0LWZpbHRlcjogYnJpZ2h0bmVzcygxKSBncmF5c2NhbGUoLjkpIG9wYWNpdHkoLjcpO1xyXG4gICAgICAgLW1vei1maWx0ZXI6IGJyaWdodG5lc3MoMSkgZ3JheXNjYWxlKC45KSBvcGFjaXR5KC43KTtcclxuICAgICAgICAgICAgZmlsdGVyOiBicmlnaHRuZXNzKDEpIGdyYXlzY2FsZSguOSkgb3BhY2l0eSguNyk7XHJcbn1cclxuLmRyaW5rY2FyZC1jYzpob3ZlcntcclxuICAgIC13ZWJraXQtZmlsdGVyOiBicmlnaHRuZXNzKDEpIGdyYXlzY2FsZSguOSkgb3BhY2l0eSguNyk7XHJcbiAgICAgICAtbW96LWZpbHRlcjogYnJpZ2h0bmVzcygxKSBncmF5c2NhbGUoLjkpIG9wYWNpdHkoLjcpO1xyXG4gICAgICAgICAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMSkgZ3JheXNjYWxlKC45KSBvcGFjaXR5KC43KTtcclxufVxyXG5cclxuLmRyaW5rYWdpbC1jY3tcclxuICAgIGN1cnNvcjpwb2ludGVyO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOjIwMHB4IDIwMHB4O1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6bm8tcmVwZWF0O1xyXG4gICAgZGlzcGxheTppbmxpbmUtYmxvY2s7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgd2lkdGg6MTBlbTtoZWlnaHQ6MTJlbTtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDEwMG1zIGVhc2UtaW47XHJcbiAgICAgICAtbW96LXRyYW5zaXRpb246IGFsbCAxMDBtcyBlYXNlLWluO1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMTAwbXMgZWFzZS1pbjtcclxuICAgIC13ZWJraXQtZmlsdGVyOiBicmlnaHRuZXNzKDEpIGdyYXlzY2FsZSguOSkgb3BhY2l0eSguNyk7XHJcbiAgICAgICAtbW96LWZpbHRlcjogYnJpZ2h0bmVzcygxKSBncmF5c2NhbGUoLjkpIG9wYWNpdHkoLjcpO1xyXG4gICAgICAgICAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMSkgZ3JheXNjYWxlKC45KSBvcGFjaXR5KC43KTtcclxufVxyXG4uZHJpbmthZ2lsLWNjOmhvdmVye1xyXG4gICAgLXdlYmtpdC1maWx0ZXI6IGJyaWdodG5lc3MoMSkgZ3JheXNjYWxlKC45KSBvcGFjaXR5KC43KTtcclxuICAgICAgIC1tb3otZmlsdGVyOiBicmlnaHRuZXNzKDEpIGdyYXlzY2FsZSguOSkgb3BhY2l0eSguNyk7XHJcbiAgICAgICAgICAgIGZpbHRlcjogYnJpZ2h0bmVzcygxKSBncmF5c2NhbGUoLjkpIG9wYWNpdHkoLjcpO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\r\n  <div class=\"card-header\">\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-4\">\r\n        <h5>Gerencia Gestión Integral del Talento de TI</h5>\r\n      </div>\r\n      <div class=\"col-md-3 offset-md-5\">\r\n        <!-- <nav class=\"navbar navbar-expand-sm bg-light navbar-light\">\r\n          <ul class=\"nav nav-tabs small justify-content-end\" role=\"tablist\">\r\n            <li class=\"nav-item\">\r\n              <a class=\"nav-link active\" data-toggle=\"tab\" href=\"#home\">Personal</a>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n              <a class=\"nav-link\" data-toggle=\"tab\" href=\"#menu1\">Equipo</a>\r\n            </li>\r\n          </ul>\r\n        </nav>-->\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<br>\r\n<div class=\"row\">\r\n  <div class=\"col-md-1\">\r\n  </div>\r\n  <div class=\"col-md-7\">\r\n            <div class=\"card\" >\r\n              <div class=\"card-header\" *ngIf=\"!showPilar1\"> <!--*ngIf=\"showPilar1\"-->\r\n                Valoración Nivel de Madurez - Equipos Ágiles\r\n              </div>\r\n              <div class=\"card-header\"  *ngIf=\"showPilar1 && !showPilar2\"> <!--*ngIf=\"showPilar1 && showPilar2\"-->\r\n                  Valoración Nivel de Madurez - Pilar 1 - Comportamiento\r\n              </div>\r\n              <div class=\"card-header\"  *ngIf=\"showPilar2 && !showPilar3\">\r\n                  Valoración Nivel de Madurez - Pilar 2 - Técnico\r\n              </div>\r\n              <div class=\"card-header\"  *ngIf=\"showPilar3 && !showPilar4\">\r\n                  Valoración Nivel de Madurez - Pilar 3 - Procesos\r\n              </div>\r\n              <div class=\"card-header\"  *ngIf=\"showPilar4 && !showFinalizar\">\r\n                  Valoración Nivel de Madurez - Pilar 4 - Ágilismo\r\n              </div>\r\n              <div class=\"card-header\"  *ngIf=\"showFinalizar\">\r\n                  Resultado\r\n              </div>\r\n              <div class=\"card-body\" *ngIf=\"!showPilar1\"> <!--*ngIf=\"!showPilar1\"-->\r\n                <div class=\"container row\">\r\n                  <div class=\"col-md-6\">\r\n                    <br>\r\n                    <li class=\"list-group-item\"><b>Dirección:</b><br>\r\n                      <select class=\"form-control input-xs\" [(ngModel)]=\"selectiondireccion\" name=\"selectiondirecciones\"\r\n                        (change)=\"selectiondirecciones()\">\r\n                        <option *ngFor=\"let direccion of direccion\" [value]=\"direccion\">{{direccion}}</option>\r\n                      </select>\r\n                    </li>\r\n                  </div>\r\n                  <div class=\"col-md-6\">\r\n                    <br>\r\n                    <li class=\"list-group-item\" *ngIf=\"selectiondireccion\"><b>Componente Mayor:</b><br>\r\n                      <select class=\"form-control input-xs\" [(ngModel)]=\"selectioncompoMayor\"\r\n                        name=\"selectioncomponenteMayor\" (change)=\"selectioncomponenteMayor()\">\r\n                        <option *ngFor=\"let compoMayor of compoMayor\" [value]=\"compoMayor\">{{compoMayor}}</option>\r\n                      </select>\r\n                    </li>\r\n                  </div>\r\n                </div>\r\n                <div class=\"container row\">\r\n                  <div class=\"col-md-6\">\r\n                    <br>\r\n                    <li class=\"list-group-item\" *ngIf=\"selectioncompoMayor\"><b>Componente Menor:</b><br>\r\n                      <select class=\"form-control input-xs\" [(ngModel)]=\"selectioncompoMenor\"\r\n                        name=\"selectioncomponenteMenor\" (change)=\"selectioncomponenteMenor()\">\r\n                        <option *ngFor=\"let compoMenor of compoMenor\" [value]=\"compoMenor\">{{compoMenor}}</option>\r\n                      </select>\r\n                    </li>\r\n                    <br>\r\n                  </div>\r\n                  <div class=\"col-md-6\">\r\n                    <br>\r\n                    <li class=\"list-group-item\" *ngIf=\"selectioncompoMenor\"><b>Full Stack:</b><br>\r\n                      <select class=\"form-control input-xs\" [(ngModel)]=\"selectionfullstack\" name=\"selecfullstack\"\r\n                        (change)=\"selecfullstack()\">\r\n                        <option *ngFor=\"let fullstack of fullstack\" [value]=\"fullstack\">{{fullstack}}</option>\r\n                      </select>\r\n                    </li>\r\n                  </div>\r\n                </div>\r\n                <div class=\"container row\">\r\n                  <div class=\"col-md-6\">\r\n                    <li class=\"list-group-item\" *ngIf=\"selectionfullstack\"><b>Célula:</b><br>\r\n                      <select class=\"form-control input-xs\" [(ngModel)]=\"selectioncelulas\" name=\"seleccelula\"\r\n                        (change)=\"seleccelula()\">\r\n                        <option *ngFor=\"let celula of celula\" [value]=\"celula\">{{celula}}</option>\r\n                      </select>\r\n                    </li>\r\n                  </div>\r\n                  <div class=\"col-md-6\">\r\n                    <li class=\"list-group-item text-center\" *ngIf=\"selectioncelulas\"><b>Tipo Valoración:</b><br>\r\n                      <select class=\"form-control input-xs\" [(ngModel)]=\"tipoValoracion\" name=\"selectiontipoVal\">\r\n                        <option value=\"Autovaloracion\">Autovaloración</option>\r\n                        <option value=\"Valoracion\">Valoración</option>\r\n                      </select>\r\n                    </li>\r\n                  </div>\r\n                </div>\r\n            </div>\r\n            <form  (ngSubmit)=\"Pilar1(Pilar1Comporta)\" #Pilar1Comporta=\"ngForm\"> \r\n            <form  (ngSubmit)=\"Pilar2(Pilar2Tecni)\" #Pilar2Tecni=\"ngForm\">\r\n              <!--´PILAR COMPORTAMIENTO-->\r\n            <div class=\"card-body\" *ngIf=\"showPilar1 && !showPilar2\"> <!--*ngIf=\"showPilar1 && showPilar2\"-->\r\n                    <div class=\"cc-selector\">\r\n                        <div class=\"row\">\r\n                            <div class=\"card-group\">\r\n                                <div class=\"card\">\r\n                                    <input id=\"comportamiento1\" type=\"radio\" name=\"comportamientonum\" value=\"1\" [(ngModel)]=Pilar1Comportamiento.comportamientonum/>\r\n                                     <label class=\"label drinkcard-cc comportamiento1\" for=\"comportamiento1\"></label>\r\n                                  <div class=\"card-body\">\r\n                                    <p class=\"card-text\" style=\"font-size:80%;\">• Generalmente los miembros del equipo se comportan de manera independiente, pueden ser motivados, pero en la mayoría de los casos están mal informados sobre temas y los objetivos del equipo. \r\n                                      <br>\r\n                                        • Con frecuencia los miembros del equipo pueden exhibir muestras de incertidumbre y ansiedad.</p>\r\n                                  </div>\r\n                                </div>\r\n                                <div class=\"card\">\r\n                                    <input  id=\"comportamiento2\" type=\"radio\" name=\"comportamientonum\" value=\"2\"  [(ngModel)]=Pilar1Comportamiento.comportamientonum/>\r\n                                    <label class=\"label drinkcard-cc comportamiento2\" for=\"comportamiento2\"></label>\r\n                                  <div class=\"card-body\">\r\n                                    <p class=\"card-text\" style=\"font-size:80%;\">• Generalmente los miembros del equipo muestran sus propias personalidades mientras enfrentan ideas y perspectivas de cada uno de los otros miembros. \r\n                                        <br>\r\n                                        • La frustración o los desacuerdos sobre metas, expectativas, papeles y responsabilidades se expresan abiertamente.\r\n                                        </p>\r\n                                    </div> \r\n                                </div>\r\n                            </div>  \r\n                        </div>  <br>\r\n                        <div class=\"row\">\r\n                            <div class=\"card-group\">\r\n                                <div class=\"card\">\r\n                                    <input id=\"comportamiento3\" type=\"radio\" name=\"comportamientonum\" value=\"3\"  [(ngModel)]=Pilar1Comportamiento.comportamientonum/>\r\n                                    <label class=\"label drinkcard-cc comportamiento3\" for=\"comportamiento3\"></label>\r\n                                  <div class=\"card-body\">\r\n                                    <p class=\"card-text\" style=\"font-size:80%;\">• Frecuentemente los miembros del equipo ajustan su comportamiento el uno al del otro mientras que desarrollan acuerdos de hacer el trabajo de forma más natural y fluida. \r\n                                      <br>\r\n                                        • Generalmente los miembros del equipo hacen esfuerzo consciente de resolver los problemas y de lograr armonía en el grupo. Los niveles de motivación han aumentado.\"\r\n                                        </p>\r\n                                  </div>\r\n                                </div>\r\n                                <div class=\"card\">\r\n                                    <input id=\"comportamiento4\" type=\"radio\" name=\"comportamientonum\" value=\"4\"  [(ngModel)]=Pilar1Comportamiento.comportamientonum/>\r\n                                    <label class=\"label drinkcard-cc comportamiento4\" for=\"comportamiento4\"></label>\r\n                                  <div class=\"card-body\">\r\n                                    <p class=\"card-text\" style=\"font-size:80%;\">• Los miembros del equipo tienen una comprensión clara sobre lo que se requiere de ellos a nivel de tarea. Ellos son ahora competentes, autónomos y manejan la toma de decisiones sin necesidad de supervisión. \r\n                                      <br>\r\n                                        • La actitud “Yo puedo hacerlo” es visible\r\n                                        <br>\r\n                                        • Se hacen ofertas para ayudar a otros.\r\n                                        </p>\r\n                                  </div>\r\n                                </div>\r\n                            </div>  \r\n                        </div>\r\n                      </div>\r\n            </div>\r\n            <!--´PILAR TECNICO-->\r\n            <div class=\"card-body\" *ngIf=\"showPilar2 && !showPilar3\"> <!--!showPilar2 && !showPilar3\"-->\r\n                <div class=\"container row\">\r\n                    <ul class=\"nav nav-tabs\" id=\"myTab\" role=\"tablist\">\r\n                        <li class=\"nav-item\">\r\n                          <a class=\"nav-link active\" id=\"home-tab\" data-toggle=\"tab\" href=\"#home\" role=\"tab\" aria-controls=\"home\" aria-selected=\"true\">DevOps</a>\r\n                        </li>\r\n                        <li class=\"nav-item\">\r\n                          <a class=\"nav-link\" id=\"profile-tab\" data-toggle=\"tab\" href=\"#Arquitectura\" role=\"tab\" aria-controls=\"Arquitectura\" aria-selected=\"false\">Arquitectura</a>\r\n                        </li>\r\n                        <li class=\"nav-item\">\r\n                          <a class=\"nav-link\" id=\"contact-tab\" data-toggle=\"tab\" href=\"#Estandares\" role=\"tab\" aria-controls=\"Estandares\" aria-selected=\"false\">Estandares</a>\r\n                        </li>\r\n                         <li class=\"nav-item\">\r\n                          <a class=\"nav-link\" id=\"contact-tab\" data-toggle=\"tab\" href=\"#Aplicaciones\" role=\"tab\" aria-controls=\"Aplicaciones\" aria-selected=\"false\">Aplicaciones</a>\r\n                        </li>\r\n                      </ul>\r\n                </div>\r\n                <div class=\"container row\">\r\n                    <div class=\"tab-content\" id=\"myTabContent\">\r\n                        <div class=\"tab-pane fade show active\" id=\"home\" role=\"tabpanel\" aria-labelledby=\"home-tab\">\r\n                          <br>\r\n                            <div class=\"card\">\r\n                              <div class=\"card-body\">\r\n                                  <div class=\"custom-control custom-radio\">\r\n                                      <input id=\"tecnico1\" type=\"radio\" class=\"custom-control-input\" value=\"1\" name=\"tecniconumeDevops\" \r\n                                      [(ngModel)]=Pilar2Tecnico.tecniconumeDevops data-toggle=\"popover\" data-trigger=\"hover\" data-placement=\"bottom\" data-content=\"My popover content.\">\r\n                                      <label class=\"custom-control-label\" for=\"tecnico1\"><p>El equipo implementa prácticas de DevOps sobre el pilar CM \"Configuration Management\".</p></label>\r\n                                   </div>\r\n                                   <div class=\"custom-control custom-radio\">\r\n                                      <input id=\"tecnico2\" type=\"radio\" class=\"custom-control-input\" value=\"2\" name=\"tecniconumeDevops\" \r\n                                      [(ngModel)]=Pilar2Tecnico.tecniconumeDevops>\r\n                                      <label class=\"custom-control-label\" for=\"tecnico2\"><p>El equipo implementa prácticas de DevOps sobre el pilar CI.</p></label>\r\n                                   </div>\r\n                                   <div class=\"custom-control custom-radio\">\r\n                                      <input id=\"tecnico3\" type=\"radio\" class=\"custom-control-input\" value=\"3\" name=\"tecniconumeDevops\" \r\n                                      [(ngModel)]=Pilar2Tecnico.tecniconumeDevops>\r\n                                      <label class=\"custom-control-label\" for=\"tecnico3\"><p>El equipo despliega continuamente sus artefactos (Pipeline CD).</p></label>\r\n                                   </div>\r\n                                   <div class=\"custom-control custom-radio\">\r\n                                      <input id=\"tecnico4\" type=\"radio\" class=\"custom-control-input\" value=\"4\" name=\"tecniconumeDevops\" \r\n                                      [(ngModel)]=Pilar2Tecnico.tecniconumeDevops>\r\n                                      <label class=\"custom-control-label\" for=\"tecnico4\"><p>El equipo hace RM <b>(Release Management)</b> de pruebas independiente al pipeline del proyecto.</p></label>\r\n                                   </div>\r\n                                   <div class=\"custom-control custom-radio\">\r\n                                      <input id=\"tecnico5\" type=\"radio\" class=\"custom-control-input\" value=\"5\" name=\"tecniconumeDevops\" \r\n                                      [(ngModel)]=Pilar2Tecnico.tecniconumeDevops>\r\n                                      <label class=\"custom-control-label\" for=\"tecnico5\"><p>El equipo ejecuta pruebas automatizadas integradas al pipeline del proyecto.</p></label>\r\n                                   </div>\r\n                              </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"tab-pane fade\" id=\"Arquitectura\" role=\"tabpanel\" aria-labelledby=\"profile-tab\">\r\n                            <br>\r\n                            <div class=\"card\">\r\n                              <div class=\"card-body\">\r\n                                  <div class=\"custom-control custom-radio\">\r\n                                      <input id=\"arquitectura1\" type=\"radio\" class=\"custom-control-input\" value=\"1\" name=\"arquitectnumeDevops\" \r\n                                      [(ngModel)]=Pilar2Tecnico.arquitectnumeDevops>\r\n                                      <label class=\"custom-control-label\" for=\"arquitectura1\"><p>El equipo tiene un conocimiento general de las capas de la arquitectura de la solución.</p></label>\r\n                                   </div>\r\n                                   <div class=\"custom-control custom-radio\">\r\n                                      <input id=\"arquitectura2\" type=\"radio\" class=\"custom-control-input\" value=\"2\" name=\"arquitectnumeDevops\" \r\n                                      [(ngModel)]=Pilar2Tecnico.arquitectnumeDevops>\r\n                                      <label class=\"custom-control-label\" for=\"arquitectura2\"><p>El equipo integra lineamientos de arquitectura de la solución con los diseños y desarrollos.</p></label>\r\n                                   </div>\r\n                                   <div class=\"custom-control custom-radio\">\r\n                                      <input id=\"arquitectura3\" type=\"radio\" class=\"custom-control-input\" value=\"3\" name=\"arquitectnumeDevops\" \r\n                                      [(ngModel)]=Pilar2Tecnico.arquitectnumeDevops>\r\n                                      <label class=\"custom-control-label\" for=\"arquitectura3\"><p>El equipo entiende y comprende los diseños de arquitectura de la solución. </p></label>\r\n                                   </div>\r\n                                   <div class=\"custom-control custom-radio\">\r\n                                      <input id=\"arquitectura4\" type=\"radio\" class=\"custom-control-input\" value=\"4\" name=\"arquitectnumeDevops\" \r\n                                      [(ngModel)]=Pilar2Tecnico.arquitectnumeDevops>\r\n                                      <label class=\"custom-control-label\" for=\"arquitectura4\"><p>El equipo tiene un Nivel medio alto, conocimientos de arquitectura de la solución. <br>\r\n                                        El equipo desarrolla conocimiento en la arquitectura aplicativa del ecosistema.</p></label>\r\n                                   </div>\r\n                                   <div class=\"custom-control custom-radio\">\r\n                                      <input id=\"arquitectura5\" type=\"radio\" class=\"custom-control-input\" value=\"5\" name=\"arquitectnumeDevops\" \r\n                                      [(ngModel)]=Pilar2Tecnico.arquitectnumeDevops>\r\n                                      <label class=\"custom-control-label\" for=\"arquitectura5\"><p>El equipo tiene un Nivel alto en conocimientos de arquitectura de la solución. <br>\r\n                                          El equipo tiene conocimiento alto en escalabilidad, mantenimiento de las aplicaciones.</p></label>\r\n                                   </div>\r\n                              </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"tab-pane fade\" id=\"Estandares\" role=\"tabpanel\" aria-labelledby=\"contact-tab\">\r\n                            <br>\r\n                            <div class=\"card\">\r\n                              <div class=\"card-body\">\r\n                                  <div class=\"custom-control custom-radio\">\r\n                                      <input id=\"estandares1\" type=\"radio\" class=\"custom-control-input\" value=\"1\" name=\"estandaresnume\" \r\n                                      [(ngModel)]=Pilar2Tecnico.estandaresnume>\r\n                                      <label class=\"custom-control-label\" for=\"estandares1\"><p>El equipo no maneja Estandar de trabajo con que interactúan en la célula.\r\n                                          <br>El equipo requiere constantes asesorías para la labor.</p></label>\r\n                                   </div>\r\n                                   <div class=\"custom-control custom-radio\">\r\n                                      <input id=\"estandares2\" type=\"radio\" class=\"custom-control-input\" value=\"2\" name=\"estandaresnume\" \r\n                                      [(ngModel)]=Pilar2Tecnico.estandaresnume>\r\n                                      <label class=\"custom-control-label\" for=\"estandares2\"><p>El equipo tiene un conocimiento Medio en los Estándares de trabajo con que interactúan en la célula.</p></label>\r\n                                   </div>\r\n                                   <div class=\"custom-control custom-radio\">\r\n                                      <input id=\"estandares3\" type=\"radio\" class=\"custom-control-input\" value=\"3\" name=\"estandaresnume\" \r\n                                      [(ngModel)]=Pilar2Tecnico.estandaresnume>\r\n                                      <label class=\"custom-control-label\" for=\"estandares3\"><p>El equipo tiene un conocimiento Alto en los Estándares de trabajo con que interactúan en la célula. \r\n                                        <br>El equipo desarrolla la habilidad de solucionar problemas eficientemente, optimizando los recursos del marco de trabajo de su especialidad.</p></label>\r\n                                   </div>\r\n                                   <div class=\"custom-control custom-radio\">\r\n                                      <input id=\"estandares4\" type=\"radio\" class=\"custom-control-input\" value=\"4\" name=\"estandaresnume\" \r\n                                      [(ngModel)]=Pilar2Tecnico.estandaresnume>\r\n                                      <label class=\"custom-control-label\" for=\"estandares4\"><p>El equipo tiene conocimiento Avanzado - Alto en los Estádares de trabajo con que interactúan en la célula.</p></label>\r\n                                   </div>\r\n                              </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"tab-pane fade\" id=\"Aplicaciones\" role=\"tabpanel\" aria-labelledby=\"contact-tab\">\r\n                            <br>\r\n                            <div class=\"card\">\r\n                              <div class=\"card-body\">\r\n                                  <div class=\"custom-control custom-radio\">\r\n                                      <input id=\"aplicaciones1\" type=\"radio\" class=\"custom-control-input\" value=\"1\" name=\"aplicacionesnume\" \r\n                                      [(ngModel)]=Pilar2Tecnico.aplicacionesnume>\r\n                                      <label class=\"custom-control-label\" for=\"aplicaciones1\"><p>El equipo tiene un conocimiento mínimo (Bajo) de las aplicaciones con que se interactúa en la célula.</p></label>\r\n                                   </div>\r\n                                   <div class=\"custom-control custom-radio\">\r\n                                      <input id=\"aplicaciones2\" type=\"radio\" class=\"custom-control-input\" value=\"2\" name=\"aplicacionesnume\" \r\n                                      [(ngModel)]=Pilar2Tecnico.aplicacionesnume>\r\n                                      <label class=\"custom-control-label\" for=\"aplicaciones2\"><p>El equipo tiene un conocimiento Medio de las aplicaciones con que se interactúa en la célula.</p></label>\r\n                                   </div>\r\n                                   <div class=\"custom-control custom-radio\">\r\n                                      <input id=\"aplicaciones3\" type=\"radio\" class=\"custom-control-input\" value=\"3\" name=\"aplicacionesnume\" \r\n                                      [(ngModel)]=Pilar2Tecnico.aplicacionesnume>\r\n                                      <label class=\"custom-control-label\" for=\"aplicaciones3\"><p>El equipo tiene un conocimiento Medio - Alto de las aplicaciones con que se interactúa en la célula.  \r\n                                        <br>Conoce la aplicacion y su entorno pero requiere de acompañamiento para identificar o detectar impactos con componentes externos.</p></label>\r\n                                   </div>\r\n                                   <div class=\"custom-control custom-radio\">\r\n                                      <input id=\"aplicaciones4\" type=\"radio\" class=\"custom-control-input\" value=\"4\" name=\"aplicacionesnume\" \r\n                                      [(ngModel)]=Pilar2Tecnico.aplicacionesnume>\r\n                                      <label class=\"custom-control-label\" for=\"aplicaciones4\"><p>El equipo tiene un Nivel Alto de las aplicaciones con que se interactúa en la célula.\r\n                                        <br> Reconoce y domina los componentes con que se relaciona su aplicacion; puede identificar facilmente un impacto en estos componentes.</p></label>\r\n                                   </div>\r\n                                   <div class=\"custom-control custom-radio\">\r\n                                      <input id=\"aplicaciones5\" type=\"radio\" class=\"custom-control-input\" value=\"5\" name=\"aplicacionesnume\" \r\n                                      [(ngModel)]=Pilar2Tecnico.aplicacionesnume>\r\n                                      <label class=\"custom-control-label\" for=\"aplicaciones5\"><p>El equipo tiene un Nivel Avanzado de las aplicaciones con que se interactúa en la célula. \r\n                                        <br>Conocimiento alto en lenguajes de Desarrollo.\r\n                                      <br> El equipo propone y lidera modificaciones o analiza  impactos que se requieran de la aplicacion propia como de temas transversales. </p></label>\r\n                                   </div>\r\n                              </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <!--´PILAR PROCESOS-->\r\n            <div class=\"card-body\" *ngIf=\"showPilar3 && !showPilar4\"><!--!showPilar2 && !showPilar3\"-->\r\n                <div class=\"container row\">\r\n                    <div class=\"container row\">\r\n                        <ul class=\"nav nav-tabs\" id=\"myTab\" role=\"tablist\">\r\n                            <li class=\"nav-item\">\r\n                              <a class=\"nav-link active\" id=\"home-tab\" data-toggle=\"tab\" href=\"#home\" role=\"tab\" aria-controls=\"home\" aria-selected=\"true\">Habilitar y Mantener Soluciones  </a>\r\n                            </li>\r\n                            <li class=\"nav-item\">\r\n                              <a class=\"nav-link\" id=\"profile-tab\" data-toggle=\"tab\" href=\"#usd_usm\" role=\"tab\" aria-controls=\"usd_usm\" aria-selected=\"false\">Gestión USD_USM</a>\r\n                            </li>\r\n                            <li class=\"nav-item\">\r\n                              <a class=\"nav-link\" id=\"contact-tab\" data-toggle=\"tab\" href=\"#practicas\" role=\"tab\" aria-controls=\"practicas\" aria-selected=\"false\">Mejores Prácticas y Entregas</a>\r\n                            </li>\r\n                             <li class=\"nav-item\">\r\n                              <a class=\"nav-link\" id=\"contact-tab\" data-toggle=\"tab\" href=\"#negocio\" role=\"tab\" aria-controls=\"negocio\" aria-selected=\"false\">Orientación al Negocio</a>\r\n                            </li>\r\n                          </ul>\r\n                    </div>\r\n                    <div class=\"container row\">\r\n                        <div class=\"tab-content\" id=\"myTabContent\">\r\n                            <div class=\"tab-pane fade show active\" id=\"home\" role=\"tabpanel\" aria-labelledby=\"home-tab\">\r\n                              <br>\r\n                                <div class=\"card\">\r\n                                  <div class=\"card-body\">\r\n                                      <div class=\"custom-control custom-radio\">\r\n                                          <input id=\"proceso1\" type=\"radio\" class=\"custom-control-input\" value=\"1\" name=\"proceso_hy_mnume\" \r\n                                          [(ngModel)]=Pilar3Procesos.proceso_hy_mnume data-toggle=\"popover\" data-trigger=\"hover\" data-placement=\"bottom\" data-content=\"My popover content.\">\r\n                                          <label class=\"custom-control-label\" for=\"proceso1\"><p>El equipo requiere interiorizar el proceso de habilitar soluciones.</p></label>\r\n                                       </div>\r\n                                       <div class=\"custom-control custom-radio\">\r\n                                          <input id=\"proceso2\" type=\"radio\" class=\"custom-control-input\" value=\"2\" name=\"proceso_hy_mnume\" \r\n                                          [(ngModel)]=Pilar3Procesos.proceso_hy_mnume>\r\n                                          <label class=\"custom-control-label\" for=\"proceso2\"><p>El equipo desarrolla mayor experticia en la ejecución del proceso habilitar soluciones, realizando pasos a producción más Ágiles.</p></label>\r\n                                       </div>\r\n                                       <div class=\"custom-control custom-radio\">\r\n                                          <input id=\"proceso3\" type=\"radio\" class=\"custom-control-input\" value=\"3\" name=\"proceso_hy_mnume\" \r\n                                          [(ngModel)]=Pilar3Procesos.proceso_hy_mnume>\r\n                                          <label class=\"custom-control-label\" for=\"proceso3\"><p>Los equipos tienen una ruta clara  sobre los procesos, son impecables y dominan los procesos que intervienen en su dia a dia para el cumplimiento de los controles Sox.</p></label>\r\n                                       </div>\r\n                                       <div class=\"custom-control custom-radio\">\r\n                                          <input id=\"proceso4\" type=\"radio\" class=\"custom-control-input\" value=\"4\" name=\"proceso_hy_mnume\" \r\n                                          [(ngModel)]=Pilar3Procesos.proceso_hy_mnume>\r\n                                          <label class=\"custom-control-label\" for=\"proceso4\"><p>Se  tienen implementadas prácticas de mejora en programación y adopción de nuevas tendencias para trabajar procesos y metodología de forma más eficiente.</p></label>\r\n                                       </div>\r\n                                  </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"tab-pane fade\" id=\"usd_usm\" role=\"tabpanel\" aria-labelledby=\"profile-tab\">\r\n                                <br>\r\n                                <div class=\"card\">\r\n                                  <div class=\"card-body\">\r\n                                      <div class=\"custom-control custom-radio\">\r\n                                          <input id=\"usd_usm1\" type=\"radio\" class=\"custom-control-input\" value=\"1\" name=\"usd_usmnume\" \r\n                                          [(ngModel)]=Pilar3Procesos.usd_usmnume>\r\n                                          <label class=\"custom-control-label\" for=\"usd_usm1\"><p>Tiene los accesos a las herramientas de USD y USM para buscar y gestionar ordenes de cambio.</p></label>\r\n                                       </div>\r\n                                       <div class=\"custom-control custom-radio\">\r\n                                          <input id=\"usd_usm2\" type=\"radio\" class=\"custom-control-input\" value=\"2\" name=\"usd_usmnume\" \r\n                                          [(ngModel)]=Pilar3Procesos.usd_usmnume>\r\n                                          <label class=\"custom-control-label\" for=\"usd_usm2\"><p>El equipo incorpora skills de proactividad en la autogestión de OC y negocia de forma fluida con los responsables de los pedidos.</p></label>\r\n                                       </div>\r\n                                       <div class=\"custom-control custom-radio\">\r\n                                          <input id=\"usd_usm3\" type=\"radio\" class=\"custom-control-input\" value=\"3\" name=\"usd_usmnume\" \r\n                                          [(ngModel)]=Pilar3Procesos.usd_usmnume>\r\n                                          <label class=\"custom-control-label\" for=\"usd_usm3\"><p>El equipo desarrolla mayor experticia en la gestión de pedidos USD y USM, realizando pasos a producción más Ágiles.</p></label>\r\n                                       </div>\r\n                                       <div class=\"custom-control custom-radio\">\r\n                                          <input id=\"usd_usm4\" type=\"radio\" class=\"custom-control-input\" value=\"4\" name=\"usd_usmnume\" \r\n                                          [(ngModel)]=Pilar3Procesos.usd_usmnume>\r\n                                          <label class=\"custom-control-label\" for=\"usd_usm4\"><p>El equipo es proactivo en la autogestión de OC y negocia de forma fluida con los responsables de los pedidos USD y USM para obtener la ejecución de las mismas.</p></label>\r\n                                       </div>\r\n                                  </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"tab-pane fade\" id=\"practicas\" role=\"tabpanel\" aria-labelledby=\"contact-tab\">\r\n                                <br>\r\n                                <div class=\"card\">\r\n                                  <div class=\"card-body\">\r\n                                      <div class=\"custom-control custom-radio\">\r\n                                          <input id=\"practicas1\" type=\"radio\" class=\"custom-control-input\" value=\"1\" name=\"practicasnume\" \r\n                                          [(ngModel)]=Pilar3Procesos.practicasnume>\r\n                                          <label class=\"custom-control-label\" for=\"practicas1\"><p>El equipo carece de una planeación conjunta con otros equipos donde tienen dependencias y tareas criticas.</p></label>\r\n                                       </div>\r\n                                       <div class=\"custom-control custom-radio\">\r\n                                          <input id=\"practicas2\" type=\"radio\" class=\"custom-control-input\" value=\"2\" name=\"practicasnume\" \r\n                                          [(ngModel)]=Pilar3Procesos.practicasnume>\r\n                                          <label class=\"custom-control-label\" for=\"practicas2\"><p>El equipo  trabaja con estándares y fomentan las buenas practicas de documentación de soluciones y procesos.</p></label>\r\n                                       </div>\r\n                                       <div class=\"custom-control custom-radio\">\r\n                                          <input id=\"practicas3\" type=\"radio\" class=\"custom-control-input\" value=\"3\" name=\"practicasnume\" \r\n                                          [(ngModel)]=Pilar3Procesos.practicasnume>\r\n                                          <label class=\"custom-control-label\" for=\"practicas3\"><p>Las entregas a ambientes productivos son impecables y en tiempo corto.Las órdenes de cambio se planean y gestionan de forma adecuada para no generar impactos en las áreas ejecutoras.</p></label>\r\n                                       </div>\r\n                                       <div class=\"custom-control custom-radio\">\r\n                                          <input id=\"practicas4\" type=\"radio\" class=\"custom-control-input\" value=\"4\" name=\"practicasnume\" \r\n                                          [(ngModel)]=Pilar3Procesos.practicasnume>\r\n                                          <label class=\"custom-control-label\" for=\"practicas4\"><p>La colaboración, mejora continua, adaptación y entrega se exterioriza y los equipos empiezan a ser reconocidos por sus prácticas desde PMT y otros equipos.  Los equipos lideran espacios de formación para exponer mejores prácticas en la organización.</p></label>\r\n                                       </div>\r\n                                  </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"tab-pane fade\" id=\"negocio\" role=\"tabpanel\" aria-labelledby=\"contact-tab\">\r\n                                <br>\r\n                                <div class=\"card\">\r\n                                  <div class=\"card-body\">\r\n                                      <div class=\"custom-control custom-radio\">\r\n                                          <input id=\"negocio1\" type=\"radio\" class=\"custom-control-input\" value=\"1\" name=\"negocionume\" \r\n                                          [(ngModel)]=Pilar3Procesos.negocionume>\r\n                                          <label class=\"custom-control-label\" for=\"negocio1\"><p>Al equipo le interesa tener clara la trazabilidad del proceso de negocio que impacta con las soluciones desarrolladas desde su día a día.</p></label>\r\n                                       </div>\r\n                                       <div class=\"custom-control custom-radio\">\r\n                                          <input id=\"negocio2\" type=\"radio\" class=\"custom-control-input\" value=\"2\" name=\"negocionume\" \r\n                                          [(ngModel)]=Pilar3Procesos.negocionume>\r\n                                          <label class=\"custom-control-label\" for=\"negocio2\"><p>El equipo identifica y propone mejoras a las necesidades del negocio, para obtener soluciones más efectivas.</p></label>\r\n                                       </div>\r\n                                       <div class=\"custom-control custom-radio\">\r\n                                          <input id=\"negocio3\" type=\"radio\" class=\"custom-control-input\" value=\"3\" name=\"negocionume\" \r\n                                          [(ngModel)]=Pilar3Procesos.negocionume>\r\n                                          <label class=\"custom-control-label\" for=\"negocio3\"><p>Se tiene una visual más amplia de la solución en que se trabaja y se comienza a pensar mas allá del producto.</p></label>\r\n                                       </div>\r\n                                       <div class=\"custom-control custom-radio\">\r\n                                          <input id=\"negocio4\" type=\"radio\" class=\"custom-control-input\" value=\"4\" name=\"negocionume\" \r\n                                          [(ngModel)]=Pilar3Procesos.negocionume>\r\n                                          <label class=\"custom-control-label\" for=\"negocio4\"><p>El equipo tiene gran conocimiento del negocio y puede aportar en la identificación de nuevas entregas de valor o la evolución de las existentes. </p></label>\r\n                                       </div>\r\n                                  </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"card-body\" *ngIf=\"showPilar4 && !showFinalizar\">\r\n                    <div class=\"cc-selectoragil\">\r\n                        <div class=\"row\">\r\n                            <div class=\"card-group\">\r\n                                <div class=\"card\">\r\n                                    <input id=\"agilismo1\" type=\"radio\" name=\"agilismonum\" value=\"1\" [(ngModel)]=Pilar4Agilismo.agilismonum/>\r\n                                     <label class=\"label drinkagil-cc agilismo1\" for=\"agilismo1\"></label>\r\n                                  <div class=\"card-body\">\r\n                                    <p class=\"card-text\" style=\"font-size:80%;\"><b>El equipo:</b><br>\r\n                                      • Conoce los conceptos básicos del marco de trabajo, pero no entiende el propósito.<br>\r\n                                      • Necesita indicaciones precisas de un líder/jefe para ejecutar tareas. <br></p>\r\n                                  </div>\r\n                                </div>\r\n                                <div class=\"card\">\r\n                                    <input  id=\"agilismo2\" type=\"radio\" name=\"agilismonum\" value=\"2\"  [(ngModel)]=Pilar4Agilismo.agilismonum/>\r\n                                    <label class=\"label drinkagil-cc agilismo2\" for=\"agilismo2\"></label>\r\n                                  <div class=\"card-body\">\r\n                                    <p class=\"card-text\" style=\"font-size:80%;\"><b>El equipo:</b><br>\r\n                                      • Ejecuta las ceremonias de forma adecuada y autónoma.<br>\r\n                                      • Adquiere y cumplen los compromisos.<br>\r\n                                      • Nivel de auto-organización medio. Aun requieren de instrucciones y acompañamiento para el logro de objetivos.</p>\r\n                                    </div> \r\n                                </div>\r\n                            </div>  \r\n                        </div>  <br>\r\n                        <div class=\"row\">\r\n                            <div class=\"card-group\">\r\n                                <div class=\"card\">\r\n                                    <input id=\"agilismo3\" type=\"radio\" name=\"agilismonum\" value=\"3\"  [(ngModel)]=Pilar4Agilismo.agilismonum/>\r\n                                    <label class=\"label drinkagil-cc agilismo3\" for=\"agilismo3\"></label>\r\n                                  <div class=\"card-body\">\r\n                                    <p class=\"card-text\" style=\"font-size:80%;\"><b>El equipo:</b><br>\r\n                                      • Tiene claro el propósito de cada ceremonia.<br>\r\n                                      • Están orientado a la generación de valor para la organización.<br>\r\n                                      • El equipo es auto-organizado y orientado al logro.<br>\r\n                                      • Fácil adaptación al cambio ( ingreso de nuevas historias, entre otros).</p>\r\n                                  </div>\r\n                                </div>\r\n                                <div class=\"card\">\r\n                                    <input id=\"agilismo4\" type=\"radio\" name=\"agilismonum\" value=\"4\"  [(ngModel)]=Pilar4Agilismo.agilismonum/>\r\n                                    <label class=\"label drinkagil-cc agilismo4\" for=\"agilismo4\"></label>\r\n                                  <div class=\"card-body\">\r\n                                    <p class=\"card-text\" style=\"font-size:80%;\">• El nivel de madurez Ejecutor ya está adoptado totalmente por todos los integrantes del equipo.<br>\r\n                                        • Equipo inspirador.<br>\r\n                                        • Movilizador del cambio en la organización.<br>\r\n                                        • Promotor de la agilidad con otros equipos.<br>\r\n                                        • La auto-organización es natural al interior del equipo.<br>\r\n                                        • El equipo impacta positivamente a todo el ecosistema con el que interactúan.</p>\r\n                                  </div>\r\n                                </div>\r\n                            </div>  \r\n                        </div>\r\n                      </div>\r\n            </div>\r\n            <div class=\"card-body\" *ngIf=\"showFinalizar\">\r\n                <div class=\"container row\">\r\n                  Resultado\r\n                </div>\r\n            </div>\r\n                <div class=\"card-footer\" *ngIf=\"tipoValoracion\">  <!--  *ngIf=\"!tipoValoracion\">-->\r\n                  <div class=\"row\">\r\n                    <div class=\"col-md-10\">\r\n                      <button type=\"button\" class=\"btn btn-info\" >\r\n                        Facilitador: <span class=\"badge badge-light\">{{facilitador}}</span>\r\n                      </button>&nbsp;&nbsp;\r\n                      <!--   <button type=\"button\" class=\"btn btn-info\" *ngIf=\"tipoValoracion\">\r\n                              Líder de componente: <span class=\"badge badge-light\">XXXXXXXXXXXXXXXXX</span>\r\n                          </button>&nbsp;&nbsp;-->\r\n                      <button type=\"button\" class=\"btn btn-info\">\r\n                        Nivel de madurez: <span class=\"badge badge-light\">{{madurez}}</span>\r\n                      </button>\r\n                    </div>\r\n                    <div class=\"col-md-2\">\r\n                      <div class=\"container text-right\">\r\n                          <button type=\"button\" class=\"btn btn-primary\" *ngIf=\"!showPilar1\" (click)=\"Informacion()\"> <!--*ngIf=\"!showPilar1\"-->\r\n                              SiguienteP1\r\n                          </button>\r\n                          <button type=\"button\" class=\"btn btn-primary\" *ngIf=\"showPilar1 && !showPilar2 && Pilar1Comportamiento.comportamientonum\" (click)=\"Pilar1()\"><!--*ngIf=\"showPilar1 && !showPilar2\"-->\r\n                            SiguienteP2                    \r\n                          </button>\r\n                          <button type=\"button\" class=\"btn btn-primary\" *ngIf=\"showPilar2 && !showPilar3 && Pilar2Tecnico.tecniconumeDevops && Pilar2Tecnico.arquitectnumeDevops && Pilar2Tecnico.estandaresnume && Pilar2Tecnico.aplicacionesnume\" (click)=\"Pilar2()\">\r\n                              SiguienteP3\r\n                          </button>\r\n                          <button type=\"button\" class=\"btn btn-primary\" *ngIf=\"showPilar3 && !showPilar4 && Pilar3Procesos.proceso_hy_mnume && Pilar3Procesos.usd_usmnume && Pilar3Procesos.practicasnume && Pilar3Procesos.negocionume\" (click)=\"Pilar3()\">\r\n                              SiguienteP4\r\n                          </button>\r\n                          <button type=\"button\" class=\"btn btn-primary\" *ngIf=\"showPilar4 && !showFinalizar\" (click)=\"Pilar4()\">\r\n                              SiguienteFinaliza\r\n                          </button>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </form>\r\n            </form>\r\n          </div>\r\n</div>\r\n  <div class=\"col-md-4\">\r\n    <img src=\"/assets/Images/NivelesEquipos.JPG\" width=\"350\" height=\"350\">\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_equipos_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/equipos.service */ "./src/app/services/equipos.service.ts");



var AppComponent = /** @class */ (function () {
    function AppComponent(EquiposService) {
        this.EquiposService = EquiposService;
        this.title = 'my-dream-app';
        this.facilitador = null;
        this.madurez = null;
        this.selectiondireccion = null;
        this.selectioncompoMayor = null;
        this.selectioncompoMenor = null;
        this.selectionfullstack = null;
        this.tipoValoracion = null;
        this.celula = null;
        this.compoMayor = null;
        this.compoMenor = null;
        this.fullstack = null;
        this.direccion = null;
        this.showPilar1 = false;
        this.showPilar2 = false;
        this.showPilar3 = false;
        this.showPilar4 = false;
        this.showFinalizar = false;
        this.Pilar1Comportamiento = {};
        this.Pilar2Tecnico = {};
        this.Pilar3Procesos = {};
        this.Pilar4Agilismo = {};
        this.informacion = {
            celula: null, facilitador: null, madurez: null, nuevamadurez: null, tipovaloracion: null, madurezNum: null
        };
    }
    AppComponent.prototype.selectiondirecciones = function () {
        var _this = this;
        return this.EquiposService.getcompomayor(this.selectiondireccion).
            subscribe(function (data) {
            console.log(data);
            _this.compoMayor = data;
            //this.ngOnInit();
            //          location.reload();
        });
    };
    AppComponent.prototype.selectioncomponenteMayor = function () {
        var _this = this;
        return this.EquiposService.getcompomenor(this.selectioncompoMayor).
            subscribe(function (data) {
            console.log(data);
            _this.compoMenor = data;
            //this.ngOnInit();
            //          location.reload();
        });
    };
    AppComponent.prototype.selectioncomponenteMenor = function () {
        var _this = this;
        return this.EquiposService.getfullstack(this.selectioncompoMenor).
            subscribe(function (data) {
            console.log(data);
            _this.fullstack = data;
        });
    };
    AppComponent.prototype.selecfullstack = function () {
        var _this = this;
        return this.EquiposService.getcelula(this.selectionfullstack).
            subscribe(function (data) {
            console.log(data);
            _this.celula = data;
        });
    };
    AppComponent.prototype.seleccelula = function () {
        var _this = this;
        return this.EquiposService.getfacilitador(this.selectioncelulas).
            subscribe(function (data) {
            console.log(data);
            _this.facilitador = data[0][0];
            _this.madurez = data[0][1];
        });
    };
    AppComponent.prototype.Pilar1 = function () {
        if (this.Pilar1Comportamiento.comportamientonum == 1) {
            this.Pilar1Comportamiento.comportamiento = "*Generalmente los miembros del equipo se comportan de manera independiente, pueden ser motivados, pero en la mayoría de los casos están mal informados sobre temas y los objetivos del equipo. *Con frecuencia los miembros del equipo pueden exhibir muestras de incertidumbre y ansiedad.";
        }
        else if (this.Pilar1Comportamiento.comportamientonum == 2) {
            this.Pilar1Comportamiento.comportamiento = "*Generalmente los miembros del equipo muestran sus propias personalidades mientras enfrentan ideas y perspectivas de cada uno de los otros miembros. *La frustración o los desacuerdos sobre metas, expectativas, papeles y responsabilidades se expresan abiertamente.";
        }
        else if (this.Pilar1Comportamiento.comportamientonum == 3) {
            this.Pilar1Comportamiento.comportamiento = "*Frecuentemente los miembros del equipo ajustan su comportamiento el uno al del otro mientras que desarrollan acuerdos de hacer el trabajo de forma más natural y fluida. *Generalmente los miembros del equipo hacen esfuerzo consciente de resolver los problemas y de lograr armonía en el grupo. Los niveles de motivación han aumentado.";
        }
        else {
            this.Pilar1Comportamiento.comportamiento = "*Los miembros del equipo tienen una comprensión clara sobre lo que se requiere de ellos a nivel de tarea. Ellos son ahora competentes, autónomos y manejan la toma de decisiones sin necesidad de supervisión. *La actitud 'Yo puedo hacerlo' es visible. *Se hacen ofertas para ayudar a otros.";
        }
        this.Pilar1Comportamiento.celula = this.selectioncelulas;
        this.EquiposService.guardarPilar1(this.Pilar1Comportamiento).subscribe(function (data) { });
        this.showPilar2 = true;
    };
    AppComponent.prototype.Pilar2 = function () {
        //  console.log(this.Pilar2Tecnico);
        if (this.Pilar2Tecnico.tecniconumeDevops == 1) {
            this.Pilar2Tecnico.tecnicoDevops = "El equipo implementa prácticas de DevOps sobre el pilar CM 'Configuration Management'.";
        }
        else if (this.Pilar2Tecnico.tecniconumeDevops == 2) {
            this.Pilar2Tecnico.tecnicoDevops = "El equipo implementa prácticas de DevOps sobre el pilar CI.";
        }
        else if (this.Pilar2Tecnico.tecniconumeDevops == 3) {
            this.Pilar2Tecnico.tecnicoDevops = "El equipo despliega continuamente sus artefactos (Pipeline CD).";
        }
        else if (this.Pilar2Tecnico.tecniconumeDevops == 4) {
            this.Pilar2Tecnico.tecnicoDevops = "El equipo hace RM (Release Management) de pruebas independiente al pipeline del proyecto.";
        }
        else {
            this.Pilar2Tecnico.tecnicoDevops = "El equipo ejecuta pruebas automatizadas integradas al pipeline del proyecto.";
        }
        if (this.Pilar2Tecnico.arquitectnumeDevops == 1) {
            this.Pilar2Tecnico.arquitectDevops = "El equipo tiene un conocimiento general de las capas de la arquitectura de la solución.";
        }
        else if (this.Pilar2Tecnico.arquitectnumeDevops == 2) {
            this.Pilar2Tecnico.arquitectDevops = "El equipo integra lineamientos de arquitectura de la solución con los diseños y desarrollos.";
        }
        else if (this.Pilar2Tecnico.arquitectnumeDevops == 3) {
            this.Pilar2Tecnico.arquitectDevops = "El equipo entiende y comprende los diseños de arquitectura de la solución.";
        }
        else if (this.Pilar2Tecnico.arquitectnumeDevops == 4) {
            this.Pilar2Tecnico.arquitectDevops = "El equipo tiene un Nivel medio alto, conocimientos de arquitectura de la solución. *El equipo desarrolla conocimiento en la arquitectura aplicativa del ecosistema.";
        }
        else {
            this.Pilar2Tecnico.arquitectDevops = "El equipo tiene un Nivel alto en conocimientos de arquitectura de la solución. *El equipo tiene conocimiento alto en escalabilidad, mantenimiento de las aplicaciones.";
        }
        if (this.Pilar2Tecnico.estandaresnume == 1) {
            this.Pilar2Tecnico.estandares = "El equipo tiene un conocimiento general de las capas de la arquitectura de la solución.";
        }
        else if (this.Pilar2Tecnico.estandaresnume == 2) {
            this.Pilar2Tecnico.estandares = "El equipo integra lineamientos de arquitectura de la solución con los diseños y desarrollos.";
        }
        else if (this.Pilar2Tecnico.estandaresnume == 3) {
            this.Pilar2Tecnico.estandares = "El equipo entiende y comprende los diseños de arquitectura de la solución.";
        }
        else if (this.Pilar2Tecnico.estandaresnume == 4) {
            this.Pilar2Tecnico.estandares = "El equipo tiene un Nivel medio alto, conocimientos de arquitectura de la solución. *El equipo desarrolla conocimiento en la arquitectura aplicativa del ecosistema.";
        }
        else {
            this.Pilar2Tecnico.estandares = "El equipo tiene un Nivel alto en conocimientos de arquitectura de la solución. *El equipo tiene conocimiento alto en escalabilidad, mantenimiento de las aplicaciones.";
        }
        if (this.Pilar2Tecnico.aplicacionesnume == 1) {
            this.Pilar2Tecnico.aplicaciones = "El equipo tiene un conocimiento mínimo (Bajo) de las aplicaciones con que se interactúa en la célula.";
        }
        else if (this.Pilar2Tecnico.aplicacionesnume == 2) {
            this.Pilar2Tecnico.aplicaciones = "El equipo tiene un conocimiento Medio de las aplicaciones con que se interactúa en la célula.";
        }
        else if (this.Pilar2Tecnico.aplicacionesnume == 3) {
            this.Pilar2Tecnico.aplicaciones = "El equipo tiene un conocimiento Medio - Alto de las aplicaciones con que se interactúa en la célula. Conoce la aplicacion y su entorno pero requiere de acompañamiento para identificar o detectar impactos con componentes externos.";
        }
        else if (this.Pilar2Tecnico.aplicacionesnume == 4) {
            this.Pilar2Tecnico.aplicaciones = "El equipo tiene un Nivel Alto de las aplicaciones con que se interactúa en la célula. Reconoce y domina los componentes con que se relaciona su aplicacion; puede identificar facilmente un impacto en estos componentes.";
        }
        else {
            this.Pilar2Tecnico.aplicaciones = "El equipo tiene un Nivel Avanzado de las aplicaciones con que se interactúa en la célula. Conocimiento alto en lenguajes de Desarrollo.  El equipo propone y lidera modificaciones o analiza  impactos que se requieran de la aplicacion propia como de temas transversales. ";
        }
        this.Pilar2Tecnico.celula = this.selectioncelulas;
        this.EquiposService.guardarPilar2(this.Pilar2Tecnico).subscribe(function (data) { });
        this.showPilar3 = true;
    };
    AppComponent.prototype.Pilar3 = function () {
        console.log(this.Pilar3Procesos);
        if (this.Pilar3Procesos.proceso_hy_mnume == 1) {
            this.Pilar3Procesos.proceso_hym = "El equipo requiere interiorizar el proceso de habilitar soluciones.";
        }
        else if (this.Pilar3Procesos.proceso_hy_mnume == 2) {
            this.Pilar3Procesos.proceso_hym = "El equipo desarrolla mayor experticia en la ejecución del proceso habilitar soluciones, realizando pasos a producción más Ágiles.";
        }
        else if (this.Pilar3Procesos.proceso_hy_mnume == 3) {
            this.Pilar3Procesos.proceso_hym = "Los equipos tienen una ruta clara  sobre los procesos, son impecables y dominan los procesos que intervienen en su dia a dia para el cumplimiento de los controles Sox.";
        }
        else {
            this.Pilar3Procesos.proceso_hym = "Se tienen implementadas prácticas de mejora en programación y adopción de nuevas tendencias para trabajar procesos y metodología de forma más eficiente.";
        }
        if (this.Pilar3Procesos.usd_usmnume == 1) {
            this.Pilar3Procesos.usd_usm = "Tiene los accesos a las herramientas de USD y USM para buscar y gestionar ordenes de cambio.";
        }
        else if (this.Pilar3Procesos.usd_usmnume == 2) {
            this.Pilar3Procesos.usd_usm = "El equipo incorpora skills de proactividad en la autogestión de OC y negocia de forma fluida con los responsables de los pedidos.";
        }
        else if (this.Pilar3Procesos.usd_usmnume == 3) {
            this.Pilar3Procesos.usd_usm = "El equipo desarrolla mayor experticia en la gestión de pedidos USD y USM, realizando pasos a producción más Ágiles.";
        }
        else {
            this.Pilar3Procesos.usd_usm = "El equipo es proactivo en la autogestión de OC y negocia de forma fluida con los responsables de los pedidos USD y USM para obtener la ejecución de las mismas.";
        }
        if (this.Pilar3Procesos.practicasnume == 1) {
            this.Pilar3Procesos.practicas = "El equipo carece de una planeación conjunta con otros equipos donde tienen dependencias y tareas criticas.";
        }
        else if (this.Pilar3Procesos.practicasnume == 2) {
            this.Pilar3Procesos.practicas = "El equipo  trabaja con estándares y fomentan las buenas practicas de documentación de soluciones y procesos.";
        }
        else if (this.Pilar3Procesos.practicasnume == 3) {
            this.Pilar3Procesos.practicas = "Las entregas a ambientes productivos son impecables y en tiempo corto.Las órdenes de cambio se planean y gestionan de forma adecuada para no generar impactos en las áreas ejecutoras.";
        }
        else {
            this.Pilar3Procesos.practicas = "La colaboración, mejora continua, adaptación y entrega se exterioriza y los equipos empiezan a ser reconocidos por sus prácticas desde PMT y otros equipos.  Los equipos lideran espacios de formación para exponer mejores prácticas en la organización.";
        }
        if (this.Pilar3Procesos.negocionume == 1) {
            this.Pilar3Procesos.negocio = "Al equipo le interesa tener clara la trazabilidad del proceso de negocio que impacta con las soluciones desarrolladas desde su día a día.";
        }
        else if (this.Pilar3Procesos.negocionume == 2) {
            this.Pilar3Procesos.negocio = "El equipo identifica y propone mejoras a las necesidades del negocio, para obtener soluciones más efectivas.";
        }
        else if (this.Pilar3Procesos.negocionume == 3) {
            this.Pilar3Procesos.negocio = "Se tiene una visual más amplia de la solución en que se trabaja y se comienza a pensar mas allá del producto.";
        }
        else {
            this.Pilar3Procesos.negocio = "El equipo tiene gran conocimiento del negocio y puede aportar en la identificación de nuevas entregas de valor o la evolución de las existentes.";
        }
        this.Pilar3Procesos.celula = this.selectioncelulas;
        this.EquiposService.guardarPilar3(this.Pilar3Procesos).subscribe(function (data) { });
        this.showPilar4 = true;
    };
    AppComponent.prototype.Pilar4 = function () {
        console.log(this.Pilar4Agilismo);
        if (this.Pilar4Agilismo.agilismonum == 1) {
            this.Pilar4Agilismo.agilismo = "El equipo: Conoce los conceptos básicos del marco de trabajo, pero no entiende el propósito.* Necesita indicaciones precisas de un líder/jefe para ejecutar tareas. ";
        }
        else if (this.Pilar4Agilismo.agilismonum == 2) {
            this.Pilar4Agilismo.agilismo = "El equipo:* Ejecuta las ceremonias de forma adecuada y autónoma.* Adquiere y cumplen los compromisos.* Nivel de auto-organización medio. Aun requieren de instrucciones y acompañamiento para el logro de objetivos.";
        }
        else if (this.Pilar4Agilismo.agilismonum == 3) {
            this.Pilar4Agilismo.agilismo = "El equipo: * Tiene claro el propósito de cada ceremonia. * Están orientado a la generación de valor para la organización. * El equipo es auto-organizado y orientado al logro. * Fácil adaptación al cambio ( ingreso de nuevas historias, entre otros).";
        }
        else {
            this.Pilar4Agilismo.agilismo = "* El nivel de madurez Ejecutor ya está adoptado totalmente por todos los integrantes del equipo. * Equipo inspirador. * Movilizador del cambio en la organización. *Promotor de la agilidad con otros equipos. * La auto-organización es natural al interior del equipo. * El equipo impacta positivamente a todo el ecosistema con el que interactúan.";
        }
        this.Pilar4Agilismo.celula = this.selectioncelulas;
        this.EquiposService.guardarPilar4(this.Pilar4Agilismo).subscribe(function (data) { });
        this.showFinalizar = true;
    };
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.EquiposService.getDireccion().subscribe(function (data) {
            _this.direccion = data;
            //console.log(this.direccion)
            //console.log(this.selectioncelulas)
        });
        /* this.EquiposService.getPreguntas().subscribe((data) =>
         {
           this.celulas = data;
         })*/
    };
    AppComponent.prototype.Informacion = function () {
        this.informacion.celula = this.selectioncelulas;
        this.informacion.facilitador = this.facilitador;
        this.informacion.madurez = this.madurez;
        this.informacion.tipo_valoracion = this.tipoValoracion;
        if (this.informacion.madurez == "Novato") {
            this.informacion.madurezNum = 1;
        }
        else if (this.informacion.madurez == "Ejecutor") {
            this.informacion.madurezNum = 4;
        }
        else if (this.informacion.madurez == "Gestionador") {
            this.informacion.madurezNum = 2;
        }
        else if (this.informacion.madurez == "Técnico") {
            this.informacion.madurezNum = 3;
        }
        else if (this.informacion.madurez == "Ágil") {
            this.informacion.madurezNum = 5;
        }
        else {
            this.informacion.madurezNum = 0;
        }
        this.showPilar1 = true;
        this.EquiposService.guardarInformacion(this.informacion).subscribe(function (data) {
        });
        //console.log(this.informacion);
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_equipos_service__WEBPACK_IMPORTED_MODULE_2__["EquiposService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _services_equipos_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/equipos.service */ "./src/app/services/equipos.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");








var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"]
            ],
            providers: [
                _services_equipos_service__WEBPACK_IMPORTED_MODULE_5__["EquiposService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/services/equipos.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/equipos.service.ts ***!
  \*********************************************/
/*! exports provided: EquiposService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EquiposService", function() { return EquiposService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var EquiposService = /** @class */ (function () {
    function EquiposService(http) {
        this.http = http;
        this.url = "http://localhost:8080/valoracion";
    }
    //"http://ec2-3-14-3-164.us-east-2.compute.amazonaws.com:8080/valoracion"
    //"http://localhost:8080/valoracion"
    //trae las direcciones
    EquiposService.prototype.getDireccion = function () {
        return this.http.get(this.url + "/direccion");
    };
    //trae el compopnente mayor según la dirección seleccionada
    EquiposService.prototype.getcompomayor = function (direccion) {
        return this.http.get(this.url + "/componentemayor_direccion/" + direccion);
    };
    //trae el compopnente mayor según la dirección seleccionada
    EquiposService.prototype.getcompomenor = function (compomayor) {
        return this.http.get(this.url + "/componentemenor_compomayor/" + compomayor);
    };
    //trae el compopnente mayor según la dirección seleccionada
    EquiposService.prototype.getfullstack = function (compomenor) {
        return this.http.get(this.url + "/fullstack_compomenor/" + compomenor);
    };
    EquiposService.prototype.getcelula = function (fullstack) {
        return this.http.get(this.url + "/celula_fullstack/" + fullstack);
    };
    EquiposService.prototype.getfacilitador = function (celula) {
        return this.http.get(this.url + "/facilitador_celula/" + celula);
    };
    /*
    buscarRespuesta(celula: string, usuario: string): Observable<any> {
      return this.http.get(`${this.url}/preguntas/${celula}/${usuario}`);
  
    }*/
    EquiposService.prototype.guardarInformacion = function (data) {
        return this.http.post(this.url + "/guardarinformacion", data);
        //alert("User created successfully.");
    };
    EquiposService.prototype.guardarPilar1 = function (data) {
        return this.http.post(this.url + "/guardarPilar1", data);
        //alert("User created successfully.");
    };
    EquiposService.prototype.guardarPilar2 = function (data) {
        return this.http.post(this.url + "/guardarPilar2", data);
        //alert("User created successfully.");
    };
    EquiposService.prototype.guardarPilar3 = function (data) {
        return this.http.post(this.url + "/guardarPilar3", data);
        //alert("User created successfully.");
    };
    EquiposService.prototype.guardarPilar4 = function (data) {
        return this.http.post(this.url + "/guardarPilar4", data);
        //alert("User created successfully.");
    };
    EquiposService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], EquiposService);
    return EquiposService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\admin\Documents\Valoracion1\Front\Valoracion\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map