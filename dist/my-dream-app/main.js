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

module.exports = "<div class=\"card\">\r\n  <div class=\"card-header\">\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-4\">\r\n        <h5>Gerencia Gestión Integral del Talento de TI</h5>\r\n      </div>\r\n      <div class=\"col-md-3 offset-md-5\">\r\n        <!-- <nav class=\"navbar navbar-expand-sm bg-light navbar-light\">\r\n          <ul class=\"nav nav-tabs small justify-content-end\" role=\"tablist\">\r\n            <li class=\"nav-item\">\r\n              <a class=\"nav-link active\" data-toggle=\"tab\" href=\"#home\">Personal</a>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n              <a class=\"nav-link\" data-toggle=\"tab\" href=\"#menu1\">Equipo</a>\r\n            </li>\r\n          </ul>\r\n        </nav>-->\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<br>\r\n<div class=\"row\">\r\n  <div class=\"col-md-1\">\r\n  </div>\r\n  <div class=\"col-md-7\">\r\n            <div class=\"card\" >\r\n              <div class=\"card-header\" *ngIf=\"!showPilar1\"> <!--*ngIf=\"showPilar1\"-->\r\n                Valoración Nivel de Madurez - Equipos Ágiles\r\n\r\n              </div>\r\n              <div class=\"card-header\"  *ngIf=\"showPilar1 && !showPilar2\"> <!--*ngIf=\"showPilar1 && showPilar2\"-->\r\n                  Valoración Nivel de Madurez - Pilar 1 - Comportamiento\r\n              </div>\r\n              <div class=\"card-header\"  *ngIf=\"showPilar2 && !showPilar3\">\r\n                  Valoración Nivel de Madurez - Pilar 2 - Técnico\r\n              </div>\r\n              <div class=\"card-header\"  *ngIf=\"showPilar3 && !showPilar4\">\r\n                  Valoración Nivel de Madurez - Pilar 3 - Procesos\r\n              </div>\r\n              <div class=\"card-header\"  *ngIf=\"showPilar4 && !showFinalizar\">\r\n                  Valoración Nivel de Madurez - Pilar 4 - Ágilismo\r\n              </div>\r\n              <div class=\"card-header\"  *ngIf=\"showFinalizar\">\r\n                  Resultado\r\n              </div>\r\n              <div class=\"card-body\" *ngIf=\"!showPilar1\"> <!--*ngIf=\"!showPilar1\"-->\r\n                <div class=\"container row\">\r\n                  <div class=\"col-md-6\">\r\n                    <br>\r\n                    <li class=\"list-group-item\"><b>Dirección:</b><br>\r\n                      <select class=\"form-control input-xs\" [(ngModel)]=\"selectiondireccion\" name=\"selectiondirecciones\"\r\n                        (change)=\"selectiondirecciones()\">\r\n                        <option *ngFor=\"let direccion of direccion\" [value]=\"direccion\">{{direccion}}</option>\r\n                      </select>\r\n                    </li>\r\n                  </div>\r\n                  <div class=\"col-md-6\">\r\n                    <br>\r\n                    <li class=\"list-group-item\" *ngIf=\"selectiondireccion\"><b>Componente Mayor:</b><br>\r\n                      <select class=\"form-control input-xs\" [(ngModel)]=\"selectioncompoMayor\"\r\n                        name=\"selectioncomponenteMayor\" (change)=\"selectioncomponenteMayor()\">\r\n                        <option *ngFor=\"let compoMayor of compoMayor\" [value]=\"compoMayor\">{{compoMayor}}</option>\r\n                      </select>\r\n                    </li>\r\n                  </div>\r\n                </div>\r\n                <div class=\"container row\">\r\n                  <div class=\"col-md-6\">\r\n                    <br>\r\n                    <li class=\"list-group-item\" *ngIf=\"selectioncompoMayor\"><b>Componente Menor:</b><br>\r\n                      <select class=\"form-control input-xs\" [(ngModel)]=\"selectioncompoMenor\"\r\n                        name=\"selectioncomponenteMenor\" (change)=\"selectioncomponenteMenor()\">\r\n                        <option *ngFor=\"let compoMenor of compoMenor\" [value]=\"compoMenor\">{{compoMenor}}</option>\r\n                      </select>\r\n                    </li>\r\n                    <br>\r\n                  </div>\r\n                  <div class=\"col-md-6\">\r\n                    <br>\r\n                    <li class=\"list-group-item\" *ngIf=\"selectioncompoMenor\"><b>Full Stack:</b><br>\r\n                      <select class=\"form-control input-xs\" [(ngModel)]=\"selectionfullstack\" name=\"selecfullstack\"\r\n                        (change)=\"selecfullstack()\">\r\n                        <option *ngFor=\"let fullstack of fullstack\" [value]=\"fullstack\">{{fullstack}}</option>\r\n                      </select>\r\n                    </li>\r\n                  </div>\r\n                </div>\r\n                <div class=\"container row\">\r\n                  <div class=\"col-md-6\">\r\n                    <li class=\"list-group-item\" *ngIf=\"selectionfullstack\"><b>Célula:</b><br>\r\n                      <select class=\"form-control input-xs\" [(ngModel)]=\"selectioncelulas\" name=\"seleccelula\"\r\n                        (change)=\"seleccelula()\">\r\n                        <option *ngFor=\"let celula of celula\" [value]=\"celula\">{{celula}}</option>\r\n                      </select>\r\n                    </li>\r\n                  </div>\r\n                  <div class=\"col-md-6\">\r\n                    <li class=\"list-group-item text-center\" *ngIf=\"selectioncelulas\"><b>Tipo Valoración:</b><br>\r\n                      <select class=\"form-control input-xs\" [(ngModel)]=\"tipoValoracion\" name=\"selectiontipoVal\">\r\n                        <option value=\"Autovaloracion\">Autovaloración</option>\r\n                        <option value=\"Valoracion\">Valoración</option>\r\n                      </select>\r\n                    </li>\r\n                  </div>\r\n                </div>\r\n            </div>\r\n            <form  (ngSubmit)=\"Pilar1(Pilar1Comporta)\" #Pilar1Comporta=\"ngForm\"> \r\n            <form  (ngSubmit)=\"Pilar2(Pilar2Tecni)\" #Pilar2Tecni=\"ngForm\">\r\n              <!--´PILAR COMPORTAMIENTO-->\r\n            <div class=\"card-body\" *ngIf=\"showPilar1 && !showPilar2\"> <!--*ngIf=\"showPilar1 && showPilar2\"-->\r\n                    <div class=\"cc-selector\">\r\n                        <div class=\"row\">\r\n                            <div class=\"card-group\">\r\n                                <div class=\"card\">\r\n                                    <input id=\"comportamiento1\" type=\"radio\" name=\"comportamientonum\" value=\"1\" [(ngModel)]=Pilar1Comportamiento.comportamientonum/>\r\n                                     <label class=\"label drinkcard-cc comportamiento1\" for=\"comportamiento1\"></label>\r\n                                  <div class=\"card-body\">\r\n                                    <p class=\"card-text\" style=\"font-size:80%;\">• El trabajo en el equipo se realiza de forma individual minimizando las interacciones entre sus miembros.<br>\r\n                                      • La personas se enfocan en ejecutar tareas sin conexión sin conexión con el logro de objetivos.<br>\r\n                                      • Ante la incertidumbre el equipo con frecuencia se muestra ansioso y le cuesta adaptarse a esta condición.<br>\r\n                                      • Se presenta un nivel alto de desconfianza entre los miembros del equipo.\r\n                                        </p>\r\n                                  </div>\r\n                                </div>\r\n                                <div class=\"card\">\r\n                                    <input  id=\"comportamiento2\" type=\"radio\" name=\"comportamientonum\" value=\"3\"  [(ngModel)]=Pilar1Comportamiento.comportamientonum/>\r\n                                    <label class=\"label drinkcard-cc comportamiento2\" for=\"comportamiento2\"></label>\r\n                                  <div class=\"card-body\">\r\n                                    <p class=\"card-text\" style=\"font-size:80%;\">• Frecuentemente el equipo es capaz de negociar y llegar a acuerdos de forma natural y fluida. \r\n                                        <br>\r\n                                        • Existe un armonía en el trabajo en el equipo, en sus interacciones y cumplimiento de responsabilidades.\r\n                                        </p>\r\n                                    </div> \r\n                                </div>\r\n                            </div>  \r\n                        </div>  <br>\r\n                        <div class=\"row\">\r\n                            <div class=\"card-group\">\r\n                                <div class=\"card\">\r\n                                    <input id=\"comportamiento3\" type=\"radio\" name=\"comportamientonum\" value=\"4\"  [(ngModel)]=Pilar1Comportamiento.comportamientonum/>\r\n                                    <label class=\"label drinkcard-cc comportamiento3\" for=\"comportamiento3\"></label>\r\n                                  <div class=\"card-body\">\r\n                                    <p class=\"card-text\" style=\"font-size:80%;\">• Frecuentemente los miembros del equipo ajustan su comportamiento el uno al del otro mientras que desarrollan acuerdos de hacer el trabajo de forma más natural y fluida. \r\n                                      <br>\r\n                                        • Generalmente los miembros del equipo hacen esfuerzo consciente de resolver los problemas y de lograr armonía en el grupo. Los niveles de motivación han aumentado.\"\r\n                                        </p>\r\n                                  </div>\r\n                                </div>\r\n                                <div class=\"card\">\r\n                                    <input id=\"comportamiento4\" type=\"radio\" name=\"comportamientonum\" value=\"5\"  [(ngModel)]=Pilar1Comportamiento.comportamientonum/>\r\n                                    <label class=\"label drinkcard-cc comportamiento4\" for=\"comportamiento4\"></label>\r\n                                  <div class=\"card-body\">\r\n                                    <p class=\"card-text\" style=\"font-size:80%;\">• El equipo asume retos con coraje y entiende la conexión que tienen con los objetivos estratégicos. \r\n                                      <br>\r\n                                        • Colaboran de manera cotidiana buscando lograr resultados como equipo y no como individuos.\r\n                                        </p>\r\n                                  </div>\r\n                                </div>\r\n                            </div>  \r\n                        </div>\r\n                      </div>\r\n            </div>\r\n            <!--´PILAR TECNICO-->\r\n            <div class=\"card-body\" *ngIf=\"showPilar2 && !showPilar3\"> <!--!showPilar2 && !showPilar3\"-->\r\n                <div class=\"container row\">\r\n                    <ul class=\"nav nav-tabs\" id=\"myTab\" role=\"tablist\">\r\n                        <li class=\"nav-item\">\r\n                          <a class=\"nav-link active\" id=\"home-tab\" data-toggle=\"tab\" href=\"#home\" role=\"tab\" aria-controls=\"home\" aria-selected=\"true\">DevOps</a>\r\n                        </li>\r\n                        <li class=\"nav-item\">\r\n                          <a class=\"nav-link\" id=\"profile-tab\" data-toggle=\"tab\" href=\"#Arquitectura\" role=\"tab\" aria-controls=\"Arquitectura\" aria-selected=\"false\">Arquitectura</a>\r\n                        </li>\r\n                        <li class=\"nav-item\">\r\n                          <a class=\"nav-link\" id=\"contact-tab\" data-toggle=\"tab\" href=\"#Estandares\" role=\"tab\" aria-controls=\"Estandares\" aria-selected=\"false\">Estandares</a>\r\n                        </li>\r\n                         <li class=\"nav-item\">\r\n                          <a class=\"nav-link\" id=\"contact-tab\" data-toggle=\"tab\" href=\"#Aplicaciones\" role=\"tab\" aria-controls=\"Aplicaciones\" aria-selected=\"false\">Aplicaciones</a>\r\n                        </li>\r\n                      </ul>\r\n                </div>\r\n                <div class=\"container row\">\r\n                    <div class=\"tab-content\" id=\"myTabContent\">\r\n                        <div class=\"tab-pane fade show active\" id=\"home\" role=\"tabpanel\" aria-labelledby=\"home-tab\">\r\n                          <br>\r\n                            <div class=\"card\">\r\n                              <div class=\"card-body\">\r\n                                  <div class=\"custom-control custom-radio\"> \r\n                                      <input id=\"tecnico1\"  type=\"radio\" class=\"custom-control-input\" value=\"20\" name=\"tecniconumeDevops\" \r\n                                      [(ngModel)]=Pilar2Tecnico.tecniconumeDevops>\r\n                                      <label class=\"custom-control-label\" for=\"tecnico1\"><p>{{devops1}}</p></label>\r\n                                   </div>\r\n                                   <div class=\"custom-control custom-radio\">\r\n                                      <input id=\"tecnico2\" type=\"radio\" class=\"custom-control-input\" value=\"40\" name=\"tecniconumeDevops\" \r\n                                      [(ngModel)]=Pilar2Tecnico.tecniconumeDevops>\r\n                                      <label class=\"custom-control-label\" for=\"tecnico2\"><p>{{devops2}}</p></label>\r\n                                   </div>\r\n                                   <div class=\"custom-control custom-radio\">\r\n                                      <input id=\"tecnico3\" type=\"radio\" class=\"custom-control-input\" value=\"60\" name=\"tecniconumeDevops\" \r\n                                      [(ngModel)]=Pilar2Tecnico.tecniconumeDevops>\r\n                                      <label class=\"custom-control-label\" for=\"tecnico3\"><p>{{devops3}}</p></label>\r\n                                   </div>\r\n                                   <div class=\"custom-control custom-radio\">\r\n                                      <input id=\"tecnico4\" type=\"radio\" class=\"custom-control-input\" value=\"80\" name=\"tecniconumeDevops\" \r\n                                      [(ngModel)]=Pilar2Tecnico.tecniconumeDevops>\r\n                                      <label class=\"custom-control-label\" for=\"tecnico4\"><p>{{devops4}}</p></label>\r\n                                   </div>\r\n                                   <div class=\"custom-control custom-radio\">\r\n                                      <input id=\"tecnico5\" type=\"radio\" class=\"custom-control-input\" value=\"100\" name=\"tecniconumeDevops\" \r\n                                      [(ngModel)]=Pilar2Tecnico.tecniconumeDevops>\r\n                                      <label class=\"custom-control-label\" for=\"tecnico5\"><p>{{devops5}}</p></label>\r\n                                   </div>\r\n                              </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"tab-pane fade\" id=\"Arquitectura\" role=\"tabpanel\" aria-labelledby=\"profile-tab\">\r\n                            <br>\r\n                            <div class=\"card\">\r\n                              <div class=\"card-body\">\r\n                                  <div class=\"custom-control custom-radio\">\r\n                                      <input id=\"arquitectura1\" type=\"radio\" class=\"custom-control-input\" value=\"20\" name=\"arquitectnumeDevops\" \r\n                                      [(ngModel)]=Pilar2Tecnico.arquitectnumeDevops>\r\n                                      <label class=\"custom-control-label\" for=\"arquitectura1\"><p>{{arquitect1}}</p></label>\r\n                                   </div>\r\n                                   <div class=\"custom-control custom-radio\">\r\n                                      <input id=\"arquitectura2\" type=\"radio\" class=\"custom-control-input\" value=\"40\" name=\"arquitectnumeDevops\" \r\n                                      [(ngModel)]=Pilar2Tecnico.arquitectnumeDevops>\r\n                                      <label class=\"custom-control-label\" for=\"arquitectura2\"><p>{{arquitect2}}</p></label>\r\n                                   </div>\r\n                                   <div class=\"custom-control custom-radio\">\r\n                                      <input id=\"arquitectura3\" type=\"radio\" class=\"custom-control-input\" value=\"60\" name=\"arquitectnumeDevops\" \r\n                                      [(ngModel)]=Pilar2Tecnico.arquitectnumeDevops>\r\n                                      <label class=\"custom-control-label\" for=\"arquitectura3\"><p>{{arquitect3}} </p></label>\r\n                                   </div>\r\n                                   <div class=\"custom-control custom-radio\">  \r\n                                      <input id=\"arquitectura4\" type=\"radio\" class=\"custom-control-input\" value=\"80\" name=\"arquitectnumeDevops\" \r\n                                      [(ngModel)]=Pilar2Tecnico.arquitectnumeDevops>\r\n                                      <label class=\"custom-control-label\" for=\"arquitectura4\"><p>{{arquitect4}}</p></label>\r\n                                   </div>\r\n                                   <div class=\"custom-control custom-radio\">\r\n                                      <input id=\"arquitectura5\" type=\"radio\" class=\"custom-control-input\" value=\"100\" name=\"arquitectnumeDevops\" \r\n                                      [(ngModel)]=Pilar2Tecnico.arquitectnumeDevops>\r\n                                      <label class=\"custom-control-label\" for=\"arquitectura5\"><p>{{arquitect5}}</p></label>\r\n                                   </div>\r\n                              </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"tab-pane fade\" id=\"Estandares\" role=\"tabpanel\" aria-labelledby=\"contact-tab\">\r\n                            <br>\r\n                            <div class=\"card\">\r\n                              <div class=\"card-body\">\r\n                                  <div class=\"custom-control custom-radio\">\r\n                                      <input id=\"estandares1\" type=\"radio\" class=\"custom-control-input\" value=\"25\" name=\"estandaresnume\" \r\n                                      [(ngModel)]=Pilar2Tecnico.estandaresnume>\r\n                                      <label class=\"custom-control-label\" for=\"estandares1\"><p>{{estandar1}}</p></label>\r\n                                   </div>\r\n                                   <div class=\"custom-control custom-radio\">\r\n                                      <input id=\"estandares2\" type=\"radio\" class=\"custom-control-input\" value=\"50\" name=\"estandaresnume\" \r\n                                      [(ngModel)]=Pilar2Tecnico.estandaresnume>\r\n                                      <label class=\"custom-control-label\" for=\"estandares2\"><p>{{estandar2}}</p></label>\r\n                                   </div>\r\n                                   <div class=\"custom-control custom-radio\">\r\n                                      <input id=\"estandares3\" type=\"radio\" class=\"custom-control-input\" value=\"75\" name=\"estandaresnume\" \r\n                                      [(ngModel)]=Pilar2Tecnico.estandaresnume>\r\n                                      <label class=\"custom-control-label\" for=\"estandares3\"><p>{{estandar3}}</p></label>\r\n                                   </div>\r\n                                   <div class=\"custom-control custom-radio\">\r\n                                      <input id=\"estandares4\" type=\"radio\" class=\"custom-control-input\" value=\"100\" name=\"estandaresnume\" \r\n                                      [(ngModel)]=Pilar2Tecnico.estandaresnume>\r\n                                      <label class=\"custom-control-label\" for=\"estandares4\"><p>{{estandar4}}</p></label>\r\n                                   </div>\r\n                              </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"tab-pane fade\" id=\"Aplicaciones\" role=\"tabpanel\" aria-labelledby=\"contact-tab\">\r\n                            <br>\r\n                            <div class=\"card\">\r\n                              <div class=\"card-body\">\r\n                                  <div class=\"custom-control custom-radio\">\r\n                                      <input id=\"aplicaciones1\" type=\"radio\" class=\"custom-control-input\" value=\"20\" name=\"aplicacionesnume\" \r\n                                      [(ngModel)]=Pilar2Tecnico.aplicacionesnume>\r\n                                      <label class=\"custom-control-label\" for=\"aplicaciones1\"><p>{{aplicaciones1}}</p></label>\r\n                                   </div>\r\n                                   <div class=\"custom-control custom-radio\">\r\n                                      <input id=\"aplicaciones2\" type=\"radio\" class=\"custom-control-input\" value=\"40\" name=\"aplicacionesnume\" \r\n                                      [(ngModel)]=Pilar2Tecnico.aplicacionesnume>\r\n                                      <label class=\"custom-control-label\" for=\"aplicaciones2\"><p>{{aplicaciones2}}</p></label>\r\n                                   </div>\r\n                                   <div class=\"custom-control custom-radio\">\r\n                                      <input id=\"aplicaciones3\" type=\"radio\" class=\"custom-control-input\" value=\"60\" name=\"aplicacionesnume\" \r\n                                      [(ngModel)]=Pilar2Tecnico.aplicacionesnume>\r\n                                      <label class=\"custom-control-label\" for=\"aplicaciones3\"><p>{{aplicaciones3}}</p></label>\r\n                                   </div>\r\n                                   <div class=\"custom-control custom-radio\">\r\n                                      <input id=\"aplicaciones4\" type=\"radio\" class=\"custom-control-input\" value=\"80\" name=\"aplicacionesnume\" \r\n                                      [(ngModel)]=Pilar2Tecnico.aplicacionesnume>\r\n                                      <label class=\"custom-control-label\" for=\"aplicaciones4\"><p>{{aplicaciones4}}</p></label>\r\n                                   </div>\r\n                                   <div class=\"custom-control custom-radio\">\r\n                                      <input id=\"aplicaciones5\" type=\"radio\" class=\"custom-control-input\" value=\"100\" name=\"aplicacionesnume\" \r\n                                      [(ngModel)]=Pilar2Tecnico.aplicacionesnume>\r\n                                      <label class=\"custom-control-label\" for=\"aplicaciones5\"><p>{{aplicaciones5}}</p></label>\r\n                                   </div>\r\n                              </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <!--´PILAR PROCESOS-->\r\n            <div class=\"card-body\" *ngIf=\"showPilar3 && !showPilar4\"><!--!showPilar2 && !showPilar3\"-->\r\n                <div class=\"container row\">\r\n                    <div class=\"container row\">\r\n                        <ul class=\"nav nav-tabs\" id=\"myTab\" role=\"tablist\">\r\n                            <li class=\"nav-item\">\r\n                              <a class=\"nav-link active\" id=\"home-tab\" data-toggle=\"tab\" href=\"#home\" role=\"tab\" aria-controls=\"home\" aria-selected=\"true\">Habilitar y Mantener Soluciones  </a>\r\n                            </li>\r\n                            <li class=\"nav-item\">\r\n                              <a class=\"nav-link\" id=\"profile-tab\" *ngIf=\"tipo_celula !=='CERT'\" data-toggle=\"tab\" href=\"#usd_usm\" role=\"tab\" aria-controls=\"usd_usm\" aria-selected=\"false\">Gestión USD_USM</a>\r\n                            </li>\r\n                            <li class=\"nav-item\">\r\n                              <a class=\"nav-link\" id=\"contact-tab\" data-toggle=\"tab\" href=\"#practicas\" role=\"tab\" aria-controls=\"practicas\" aria-selected=\"false\">Mejores Prácticas y Entregas</a>\r\n                            </li>\r\n                             <li class=\"nav-item\">\r\n                              <a class=\"nav-link\" id=\"contact-tab\" data-toggle=\"tab\" href=\"#negocio\" role=\"tab\" aria-controls=\"negocio\" aria-selected=\"false\">Orientación al Negocio</a>\r\n                            </li>\r\n                          </ul>\r\n                    </div>\r\n                    <div class=\"container row\">\r\n                        <div class=\"tab-content\" id=\"myTabContent\">\r\n                            <div class=\"tab-pane fade show active\" id=\"home\" role=\"tabpanel\" aria-labelledby=\"home-tab\">\r\n                              <br>\r\n                                <div class=\"card\">\r\n                                  <div class=\"card-body\">\r\n                                      <div class=\"custom-control custom-radio\">\r\n                                          <input id=\"proceso1\" type=\"radio\" class=\"custom-control-input\" value=\"25\" name=\"proceso_hy_mnume\" \r\n                                          [(ngModel)]=Pilar3Procesos.proceso_hy_mnume data-toggle=\"popover\" data-trigger=\"hover\" data-placement=\"bottom\" data-content=\"My popover content.\">\r\n                                          <label class=\"custom-control-label\" for=\"proceso1\"><p>{{hymsoluciones1}}</p></label>\r\n                                       </div>\r\n                                       <div class=\"custom-control custom-radio\">\r\n                                          <input id=\"proceso2\" type=\"radio\" class=\"custom-control-input\" value=\"50\" name=\"proceso_hy_mnume\" \r\n                                          [(ngModel)]=Pilar3Procesos.proceso_hy_mnume>\r\n                                          <label class=\"custom-control-label\" for=\"proceso2\"><p>{{hymsoluciones2}}</p></label>\r\n                                       </div>\r\n                                       <div class=\"custom-control custom-radio\">\r\n                                          <input id=\"proceso3\" type=\"radio\" class=\"custom-control-input\" value=\"75\" name=\"proceso_hy_mnume\" \r\n                                          [(ngModel)]=Pilar3Procesos.proceso_hy_mnume>\r\n                                          <label class=\"custom-control-label\" for=\"proceso3\"><p>{{hymsoluciones3}}</p></label>\r\n                                       </div>\r\n                                       <div class=\"custom-control custom-radio\">\r\n                                          <input id=\"proceso4\" type=\"radio\" class=\"custom-control-input\" value=\"100\" name=\"proceso_hy_mnume\" \r\n                                          [(ngModel)]=Pilar3Procesos.proceso_hy_mnume>\r\n                                          <label class=\"custom-control-label\" for=\"proceso4\"><p>{{hymsoluciones4}}</p></label>\r\n                                       </div>\r\n                                  </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"tab-pane fade\" id=\"usd_usm\" role=\"tabpanel\" aria-labelledby=\"profile-tab\">\r\n                                <br>\r\n                                <div class=\"card\">\r\n                                  <div class=\"card-body\">\r\n                                      <div class=\"custom-control custom-radio\">\r\n                                          <input id=\"usd_usm1\" type=\"radio\" class=\"custom-control-input\" value=\"25\" name=\"usd_usmnume\" \r\n                                          [(ngModel)]=Pilar3Procesos.usd_usmnume>\r\n                                          <label class=\"custom-control-label\" for=\"usd_usm1\"><p>{{usd_usm1}}</p></label>\r\n                                       </div>\r\n                                       <div class=\"custom-control custom-radio\">\r\n                                          <input id=\"usd_usm2\" type=\"radio\" class=\"custom-control-input\" value=\"50\" name=\"usd_usmnume\" \r\n                                          [(ngModel)]=Pilar3Procesos.usd_usmnume>\r\n                                          <label class=\"custom-control-label\" for=\"usd_usm2\"><p>{{usd_usm2}}</p></label>\r\n                                       </div>\r\n                                       <div class=\"custom-control custom-radio\">\r\n                                          <input id=\"usd_usm3\" type=\"radio\" class=\"custom-control-input\" value=\"75\" name=\"usd_usmnume\" \r\n                                          [(ngModel)]=Pilar3Procesos.usd_usmnume>\r\n                                          <label class=\"custom-control-label\" for=\"usd_usm3\"><p>{{usd_usm3}}</p></label>\r\n                                       </div>\r\n                                       <div class=\"custom-control custom-radio\">\r\n                                          <input id=\"usd_usm4\" type=\"radio\" class=\"custom-control-input\" value=\"100\" name=\"usd_usmnume\" \r\n                                          [(ngModel)]=Pilar3Procesos.usd_usmnume>\r\n                                          <label class=\"custom-control-label\" for=\"usd_usm4\"><p>{{usd_usm4}}</p></label>\r\n                                       </div>\r\n                                  </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"tab-pane fade\" id=\"practicas\" role=\"tabpanel\" aria-labelledby=\"contact-tab\">\r\n                                <br>\r\n                                <div class=\"card\">\r\n                                  <div class=\"card-body\">\r\n                                      <div class=\"custom-control custom-radio\">\r\n                                          <input id=\"practicas1\" type=\"radio\" class=\"custom-control-input\" value=\"25\" name=\"practicasnume\" \r\n                                          [(ngModel)]=Pilar3Procesos.practicasnume>\r\n                                          <label class=\"custom-control-label\" for=\"practicas1\"><p>{{mejores_precticas1}}</p></label>\r\n                                       </div>\r\n                                       <div class=\"custom-control custom-radio\">\r\n                                          <input id=\"practicas2\" type=\"radio\" class=\"custom-control-input\" value=\"50\" name=\"practicasnume\" \r\n                                          [(ngModel)]=Pilar3Procesos.practicasnume>\r\n                                          <label class=\"custom-control-label\" for=\"practicas2\"><p>{{mejores_precticas2}}</p></label>\r\n                                       </div>\r\n                                       <div class=\"custom-control custom-radio\">\r\n                                          <input id=\"practicas3\" type=\"radio\" class=\"custom-control-input\" value=\"75\" name=\"practicasnume\" \r\n                                          [(ngModel)]=Pilar3Procesos.practicasnume>\r\n                                          <label class=\"custom-control-label\" for=\"practicas3\"><p>{{mejores_precticas3}}</p></label>\r\n                                       </div>\r\n                                       <div class=\"custom-control custom-radio\">\r\n                                          <input id=\"practicas4\" type=\"radio\" class=\"custom-control-input\" value=\"100\" name=\"practicasnume\" \r\n                                          [(ngModel)]=Pilar3Procesos.practicasnume>\r\n                                          <label class=\"custom-control-label\" for=\"practicas4\"><p>{{mejores_precticas4}}</p></label>\r\n                                       </div>\r\n                                  </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"tab-pane fade\" id=\"negocio\" role=\"tabpanel\" aria-labelledby=\"contact-tab\">\r\n                                <br>\r\n                                <div class=\"card\">\r\n                                  <div class=\"card-body\">\r\n                                      <div class=\"custom-control custom-radio\">\r\n                                          <input id=\"negocio1\" type=\"radio\" class=\"custom-control-input\" value=\"25\" name=\"negocionume\" \r\n                                          [(ngModel)]=Pilar3Procesos.negocionume>\r\n                                          <label class=\"custom-control-label\" for=\"negocio1\"><p>{{orienta_negocio1}}</p></label>\r\n                                       </div>\r\n                                       <div class=\"custom-control custom-radio\">\r\n                                          <input id=\"negocio2\" type=\"radio\" class=\"custom-control-input\" value=\"50\" name=\"negocionume\" \r\n                                          [(ngModel)]=Pilar3Procesos.negocionume>\r\n                                          <label class=\"custom-control-label\" for=\"negocio2\"><p>{{orienta_negocio2}}</p></label>\r\n                                       </div>\r\n                                       <div class=\"custom-control custom-radio\">\r\n                                          <input id=\"negocio3\" type=\"radio\" class=\"custom-control-input\" value=\"75\" name=\"negocionume\" \r\n                                          [(ngModel)]=Pilar3Procesos.negocionume>\r\n                                          <label class=\"custom-control-label\" for=\"negocio3\"><p>{{orienta_negocio3}}</p></label>\r\n                                       </div>\r\n                                       <div class=\"custom-control custom-radio\">\r\n                                          <input id=\"negocio4\" type=\"radio\" class=\"custom-control-input\" value=\"100\" name=\"negocionume\" \r\n                                          [(ngModel)]=Pilar3Procesos.negocionume>\r\n                                          <label class=\"custom-control-label\" for=\"negocio4\"><p>{{orienta_negocio4}}</p></label>\r\n                                       </div>\r\n                                  </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"card-body\" *ngIf=\"showPilar4 && !showFinalizar\">\r\n                    <div class=\"cc-selectoragil\">\r\n                        <div class=\"row\">\r\n                            <div class=\"card-group\">\r\n                                <div class=\"card\">\r\n                                    <input id=\"agilismo1\" type=\"radio\" name=\"agilismonum\" value=\"1\" [(ngModel)]=Pilar4Agilismo.agilismonum/>\r\n                                     <label class=\"label drinkagil-cc agilismo1\" for=\"agilismo1\"></label>\r\n                                  <div class=\"card-body\">\r\n                                    <p class=\"card-text\" style=\"font-size:80%;\"><b>El equipo:</b><br>\r\n                                      • Desconoce los conceptos básicos del marco de trabajo.<br></p>\r\n                                  </div>\r\n                                </div>\r\n                                <div class=\"card\">\r\n                                    <input  id=\"agilismo2\" type=\"radio\" name=\"agilismonum\" value=\"3\"  [(ngModel)]=Pilar4Agilismo.agilismonum/>\r\n                                    <label class=\"label drinkagil-cc agilismo2\" for=\"agilismo2\"></label>\r\n                                  <div class=\"card-body\">\r\n                                    <p class=\"card-text\" style=\"font-size:80%;\"><b>El equipo:</b><br>\r\n                                      • Ejecuta las ceremonias de forma adecuada y autónoma.<br>\r\n                                      • Adquiere y cumplen los compromisos.<br>\r\n                                      • Nivel de auto-organización medio. Aun requieren de instrucciones y acompañamiento para el logro de objetivos.</p>\r\n                                    </div> \r\n                                </div>\r\n                            </div>  \r\n                        </div>  <br>\r\n                        <div class=\"row\">\r\n                            <div class=\"card-group\">\r\n                                <div class=\"card\">\r\n                                    <input id=\"agilismo3\" type=\"radio\" name=\"agilismonum\" value=\"4\"  [(ngModel)]=Pilar4Agilismo.agilismonum/>\r\n                                    <label class=\"label drinkagil-cc agilismo3\" for=\"agilismo3\"></label>\r\n                                  <div class=\"card-body\">\r\n                                    <p class=\"card-text\" style=\"font-size:80%;\"><b>El equipo:</b><br>\r\n                                      • Tiene claro el propósito de cada ceremonia.<br>\r\n                                      • Están orientado a la generación de valor para la organización.<br>\r\n                                      • El equipo es auto-organizado y orientado al logro.<br>\r\n                                      • Fácil adaptación al cambio ( ingreso de nuevas historias, entre otros).</p>\r\n                                  </div>\r\n                                </div>\r\n                                <div class=\"card\">\r\n                                    <input id=\"agilismo4\" type=\"radio\" name=\"agilismonum\" value=\"5\"  [(ngModel)]=Pilar4Agilismo.agilismonum/>\r\n                                    <label class=\"label drinkagil-cc agilismo4\" for=\"agilismo4\"></label>\r\n                                  <div class=\"card-body\">\r\n                                    <p class=\"card-text\" style=\"font-size:80%;\">• El nivel de madurez Ejecutor ya está adoptado totalmente por todos los integrantes del equipo.<br>\r\n                                        • Equipo inspirador.<br>\r\n                                        • El equipo es referente y lleva nuevas prácticas al entorno organizacional.<br>\r\n                                        • Promotor de la agilidad con otros equipos.<br>\r\n                                        • La auto-organización es natural al interior del equipo.<br>\r\n                                        • El equipo impacta positivamente a todo el ecosistema con el que interactúan.</p>\r\n                                  </div>\r\n                                </div>\r\n                            </div>  \r\n                        </div>\r\n                      </div>\r\n            </div>\r\n            <div class=\"card-body\" *ngIf=\"showFinalizar\">\r\n                <div class=\"container row\">\r\n                <button type=\"button\" class=\"btn btn-primary\" data-toggle=\"modal\" data-target=\"#exampleModal\" (click)=\"resultadofinal()\">\r\n                  Ver Resultados\r\n                </button>\r\n                </div>\r\n            </div>\r\n                <div class=\"card-footer\" *ngIf=\"tipoValoracion\">  <!--  *ngIf=\"!tipoValoracion\">-->\r\n                  <div class=\"row\">\r\n                    <div class=\"col-md-10\">\r\n                      <button type=\"button\" class=\"btn btn-info\" >\r\n                        Facilitador: <span class=\"badge badge-light\">{{facilitador}}</span>\r\n                      </button>&nbsp;&nbsp;\r\n                      <!--   <button type=\"button\" class=\"btn btn-info\" *ngIf=\"tipoValoracion\">\r\n                              Líder de componente: <span class=\"badge badge-light\">XXXXXXXXXXXXXXXXX</span>\r\n                          </button>&nbsp;&nbsp;-->\r\n                      <button type=\"button\" class=\"btn btn-info\">\r\n                        Nivel de madurez anterior: <span class=\"badge badge-light\">{{madurez}}</span>\r\n                      </button>\r\n                    </div>\r\n                    <div class=\"col-md-2\">\r\n                      <div class=\"container text-right\">\r\n                          <button type=\"button\" class=\"btn btn-primary\" *ngIf=\"!showPilar1\" (click)=\"Informacion()\"> <!--*ngIf=\"!showPilar1\"-->\r\n                              Siguiente\r\n                          </button>\r\n                          <button type=\"button\" class=\"btn btn-primary\" *ngIf=\"showPilar1 && !showPilar2 && Pilar1Comportamiento.comportamientonum\" (click)=\"Pilar1()\"><!--*ngIf=\"showPilar1 && !showPilar2\"-->\r\n                            Siguiente                 \r\n                          </button>\r\n                          <button type=\"button\" class=\"btn btn-primary\" *ngIf=\"showPilar2 && !showPilar3 && Pilar2Tecnico.tecniconumeDevops && Pilar2Tecnico.arquitectnumeDevops && Pilar2Tecnico.estandaresnume && Pilar2Tecnico.aplicacionesnume\" (click)=\"Pilar2()\">\r\n                              Siguiente\r\n                          </button>\r\n                          <button type=\"button\" class=\"btn btn-primary\" *ngIf=\"showPilar3 && !showPilar4 && Pilar3Procesos.proceso_hy_mnume && (tipo_celula ==='CERT' || Pilar3Procesos.usd_usmnume) && Pilar3Procesos.practicasnume && Pilar3Procesos.negocionume\" (click)=\"Pilar3()\">\r\n                              Siguiente                                                                                                         \r\n                          </button>\r\n                          <button type=\"button\" class=\"btn btn-primary\" *ngIf=\"showPilar4 && !showFinalizar\" (click)=\"Pilar4()\">\r\n                              Siguiente\r\n                          </button>\r\n                          <button type=\"button\" class=\"btn btn-danger\" *ngIf=\"showFinalizar\" onClick=\"window.location.reload();\">Finalizar</button>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </form>\r\n            </form>\r\n          </div>\r\n</div>\r\n  <div class=\"col-md-4\" >\r\n    <img src=\"/assets/Images/NivelesEquipos.JPG\" width=\"350\" height=\"350\">\r\n  </div>\r\n</div>\r\n\r\n<div class=\"modal fade\" id=\"exampleModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\r\n  <div class=\"modal-dialog modal-lg\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h5 class=\"modal-title\" id=\"exampleModalLabel\">Resultados valoracion equipos</h5>\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n          <div class=\"container row\">\r\n              <div class=\"row justify-content-md-center\">\r\n              <button type=\"button\" class=\"btn btn-info\">\r\n                  Nivel de madurez: <span class=\"badge badge-light\">{{resultadovaloracion}}</span>\r\n              </button>\r\n              </div>\r\n          </div>\r\n          <br>\r\n          <div class=\"container row\">\r\n              <div class=\"col-md-6\">\r\n                  <div class=\"card bg-link\">\r\n                      <div class=\"card-header\">\r\n                          Pilar de Comportamiento: {{resultpilar1}}\r\n                      </div>\r\n                  <div class=\"card-body\">\r\n                      <div class=\"row\">\r\n                            <div class=\"card-body\" *ngIf=\"resultpilar1==='Novato'\">\r\n                                  <img src=\"/assets/Images/novato.PNG\" width=\"280\" height=\"170\">\r\n                              </div>\r\n                              <div class=\"card-body\" *ngIf=\"resultpilar1==='Gestionador'\">\r\n                                  <img src=\"/assets/Images/gestionador.PNG\" width=\"280\" height=\"170\">\r\n                              </div>\r\n                              <div class=\"card-body\" *ngIf=\"resultpilar1==='Técnico'\">\r\n                                  <img src=\"/assets/Images/Técnico.PNG\" width=\"280\" height=\"170\">\r\n                              </div>\r\n                              <div class=\"card-body\" *ngIf=\"resultpilar1==='Ejecutor'\">\r\n                                  <img src=\"/assets/Images/Ejecutor.PNG\" width=\"280\" height=\"170\">\r\n                              </div>\r\n                              <div class=\"card-body\" *ngIf=\"resultpilar1==='Ágil'\">\r\n                                  <img src=\"/assets/Images/Ágil.PNG\" width=\"280\" height=\"170\">\r\n                              </div>\r\n                      </div>\r\n                  </div> \r\n                </div>\r\n              </div>\r\n              <div class=\"col-md-6\">\r\n                  <div class=\"card bg-link\">\r\n                      <div class=\"card-header\">\r\n                        Pilar Técnico: {{resultFinalpilar2}}\r\n                      </div>\r\n                  <div class=\"card-body\">\r\n                      <div class=\"row\">\r\n                            <div class=\"card-body\" *ngIf=\"resultFinalpilar2==='Novato'\">\r\n                                  <img src=\"/assets/Images/novato.PNG\" width=\"280\" height=\"170\">\r\n                              </div>\r\n                              <div class=\"card-body\" *ngIf=\"resultFinalpilar2==='Gestionador'\">\r\n                                  <img src=\"/assets/Images/gestionador.PNG\" width=\"280\" height=\"170\">\r\n                              </div>\r\n                              <div class=\"card-body\" *ngIf=\"resultFinalpilar2==='Técnico'\">\r\n                                  <img src=\"/assets/Images/Técnico.PNG\" width=\"280\" height=\"170\">\r\n                              </div>\r\n                              <div class=\"card-body\" *ngIf=\"resultFinalpilar2==='Ejecutor'\">\r\n                                  <img src=\"/assets/Images/Ejecutor.PNG\" width=\"280\" height=\"170\">\r\n                              </div>\r\n                              <div class=\"card-body\" *ngIf=\"resultFinalpilar2==='Ágil'\">\r\n                                  <img src=\"/assets/Images/Ágil.PNG\" width=\"280\" height=\"170\">\r\n                              </div>\r\n                      </div>\r\n                  </div> \r\n                </div>\r\n              </div>\r\n        </div>\r\n        <br>\r\n        <div class=\"container row\">\r\n            <div class=\"col-md-6\">\r\n                <div class=\"card bg-link\">\r\n                    <div class=\"card-header\">\r\n                      Pilar Negocio y Proceso: {{resultFinalpilar3}}\r\n                    </div>\r\n                <div class=\"card-body\">\r\n                    <div class=\"row\">\r\n                          <div class=\"card-body\" *ngIf=\"resultFinalpilar3==='Novato'\">\r\n                                <img src=\"/assets/Images/novato.PNG\" width=\"280\" height=\"170\">\r\n                            </div>\r\n                            <div class=\"card-body\" *ngIf=\"resultFinalpilar3==='Gestionador'\">\r\n                                <img src=\"/assets/Images/gestionador.PNG\" width=\"280\" height=\"170\">\r\n                            </div>\r\n                            <div class=\"card-body\" *ngIf=\"resultFinalpilar3==='Técnico'\">\r\n                                <img src=\"/assets/Images/Técnico.PNG\" width=\"280\" height=\"170\">\r\n                            </div>\r\n                            <div class=\"card-body\" *ngIf=\"resultFinalpilar3==='Ejecutor'\">\r\n                                <img src=\"/assets/Images/Ejecutor.PNG\" width=\"280\" height=\"170\">\r\n                            </div>\r\n                            <div class=\"card-body\" *ngIf=\"resultFinalpilar3==='Ágil'\">\r\n                                <img src=\"/assets/Images/Ágil.PNG\" width=\"280\" height=\"170\">\r\n                            </div>\r\n                    </div>\r\n                </div> \r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-6\">\r\n                    <div class=\"card bg-link\">\r\n                        <div class=\"card-header\">\r\n                          Pilar Ágilismo: {{resultpilar4}}\r\n                        </div>\r\n                    <div class=\"card-body\">\r\n                        <div class=\"row\">\r\n                              <div class=\"card-body\" *ngIf=\"resultpilar4==='Novato'\">\r\n                                    <img src=\"/assets/Images/novato.PNG\" width=\"280\" height=\"170\">\r\n                                </div>\r\n                                <div class=\"card-body\" *ngIf=\"resultpilar4==='Gestionador'\">\r\n                                    <img src=\"/assets/Images/gestionador.PNG\" width=\"280\" height=\"170\">\r\n                                </div>\r\n                                <div class=\"card-body\" *ngIf=\"resultpilar4==='Técnico'\">\r\n                                    <img src=\"/assets/Images/Técnico.PNG\" width=\"280\" height=\"170\">\r\n                                </div>\r\n                                <div class=\"card-body\" *ngIf=\"resultpilar4==='Ejecutor'\">\r\n                                    <img src=\"/assets/Images/Ejecutor.PNG\" width=\"280\" height=\"170\">\r\n                                </div>\r\n                                <div class=\"card-body\" *ngIf=\"resultpilar4==='Ágil'\">\r\n                                    <img src=\"/assets/Images/Ágil.PNG\" width=\"280\" height=\"170\">\r\n                                </div>\r\n                        </div>\r\n                    </div> \r\n                  </div>\r\n            </div>\r\n      </div>\r\n        </div>\r\n        <div class=\"modal-footer\">\r\n            <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\r\n          </div>\r\n      </div>\r\n     \r\n    </div>\r\n  </div>\r\n"

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
        this.tipo_celula = null;
        this.devops1 = null;
        this.devops2 = null;
        this.devops3 = null;
        this.devops4 = null;
        this.devops5 = null;
        this.arquitect1 = null;
        this.arquitect2 = null;
        this.arquitect3 = null;
        this.arquitect4 = null;
        this.arquitect5 = null;
        this.estandar1 = null;
        this.estandar2 = null;
        this.estandar3 = null;
        this.estandar4 = null;
        this.aplicaciones1 = null;
        this.aplicaciones2 = null;
        this.aplicaciones3 = null;
        this.aplicaciones4 = null;
        this.aplicaciones5 = null;
        this.hymsoluciones1 = null;
        this.hymsoluciones2 = null;
        this.hymsoluciones3 = null;
        this.hymsoluciones4 = null;
        this.usd_usm1 = null;
        this.usd_usm2 = null;
        this.usd_usm3 = null;
        this.usd_usm4 = null;
        this.mejores_precticas1 = null;
        this.mejores_precticas2 = null;
        this.mejores_precticas3 = null;
        this.mejores_precticas4 = null;
        this.orienta_negocio1 = null;
        this.orienta_negocio2 = null;
        this.orienta_negocio3 = null;
        this.orienta_negocio4 = null;
        this.showPilar1 = false;
        this.showPilar2 = false;
        this.showPilar3 = false;
        this.showPilar4 = false;
        this.showFinalizar = false;
        this.Pilar1Comportamiento = {};
        this.Pilar2Tecnico = {};
        this.Pilar3Procesos = {};
        this.Pilar4Agilismo = {};
        this.resultpilar1 = null;
        this.resultpilar4 = null;
        this.resultFinalpilar2 = null;
        this.resultFinalpilar3 = null;
        this.resultadoFinal = null;
        this.resultadovaloracion = null;
        this.min = null;
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
            subscribe(function (preguntas) {
            console.log(preguntas);
            _this.facilitador = preguntas[0][2];
            _this.madurez = preguntas[0][1];
            _this.tipo_celula = preguntas[0][4];
            _this.devops1 = preguntas[0][5];
            _this.devops2 = preguntas[0][6];
            _this.devops3 = preguntas[0][7];
            _this.devops4 = preguntas[0][8];
            _this.devops5 = preguntas[0][9];
            _this.arquitect1 = preguntas[0][10];
            _this.arquitect2 = preguntas[0][11];
            _this.arquitect3 = preguntas[0][12];
            _this.arquitect4 = preguntas[0][13];
            _this.arquitect5 = preguntas[0][14];
            _this.estandar1 = preguntas[0][15];
            _this.estandar2 = preguntas[0][16];
            _this.estandar3 = preguntas[0][17];
            _this.estandar4 = preguntas[0][18];
            _this.aplicaciones1 = preguntas[0][19];
            _this.aplicaciones2 = preguntas[0][20];
            _this.aplicaciones3 = preguntas[0][21];
            _this.aplicaciones4 = preguntas[0][22];
            _this.aplicaciones5 = preguntas[0][23];
            _this.hymsoluciones1 = preguntas[0][24];
            _this.hymsoluciones2 = preguntas[0][25];
            _this.hymsoluciones3 = preguntas[0][26];
            _this.hymsoluciones4 = preguntas[0][27];
            _this.usd_usm1 = preguntas[0][28];
            _this.usd_usm2 = preguntas[0][29];
            _this.usd_usm3 = preguntas[0][30];
            _this.usd_usm4 = preguntas[0][31];
            _this.mejores_precticas1 = preguntas[0][32];
            _this.mejores_precticas2 = preguntas[0][33];
            _this.mejores_precticas3 = preguntas[0][34];
            _this.mejores_precticas4 = preguntas[0][35];
            _this.orienta_negocio1 = preguntas[0][36];
            _this.orienta_negocio2 = preguntas[0][37];
            _this.orienta_negocio3 = preguntas[0][38];
            _this.orienta_negocio4 = preguntas[0][39];
        });
    };
    AppComponent.prototype.Pilar1 = function () {
        if (this.Pilar1Comportamiento.comportamientonum == 1) {
            this.resultpilar1 = "Novato";
            this.Pilar1Comportamiento.comportamiento = "*Generalmente los miembros del equipo se comportan de manera independiente, pueden ser motivados, pero en la mayoría de los casos están mal informados sobre temas y los objetivos del equipo. *Con frecuencia los miembros del equipo pueden exhibir muestras de incertidumbre y ansiedad.";
        }
        else if (this.Pilar1Comportamiento.comportamientonum == 3) {
            this.resultpilar1 = "Técnico";
            this.Pilar1Comportamiento.comportamiento = "*Generalmente los miembros del equipo muestran sus propias personalidades mientras enfrentan ideas y perspectivas de cada uno de los otros miembros. *La frustración o los desacuerdos sobre metas, expectativas, papeles y responsabilidades se expresan abiertamente.";
        }
        else if (this.Pilar1Comportamiento.comportamientonum == 4) {
            this.resultpilar1 = "Ejecutor";
            this.Pilar1Comportamiento.comportamiento = "*Frecuentemente los miembros del equipo ajustan su comportamiento el uno al del otro mientras que desarrollan acuerdos de hacer el trabajo de forma más natural y fluida. *Generalmente los miembros del equipo hacen esfuerzo consciente de resolver los problemas y de lograr armonía en el grupo. Los niveles de motivación han aumentado.";
        }
        else if (this.Pilar1Comportamiento.comportamientonum == 5) {
            this.resultpilar1 = "Ágil";
            this.Pilar1Comportamiento.comportamiento = "*Los miembros del equipo tienen una comprensión clara sobre lo que se requiere de ellos a nivel de tarea. Ellos son ahora competentes, autónomos y manejan la toma de decisiones sin necesidad de supervisión. *La actitud 'Yo puedo hacerlo' es visible. *Se hacen ofertas para ayudar a otros.";
        }
        this.Pilar1Comportamiento.celula = this.selectioncelulas;
        this.EquiposService.guardarPilar1(this.Pilar1Comportamiento).subscribe(function (data) { });
        this.showPilar2 = true;
    };
    AppComponent.prototype.Pilar2 = function () {
        console.log(this.Pilar2Tecnico);
        if (this.Pilar2Tecnico.tecniconumeDevops == 20) {
            this.Pilar2Tecnico.tecnicoDevops = this.devops1;
        }
        else if (this.Pilar2Tecnico.tecniconumeDevops == 40) {
            this.Pilar2Tecnico.tecnicoDevops = this.devops2;
        }
        else if (this.Pilar2Tecnico.tecniconumeDevops == 60) {
            this.Pilar2Tecnico.tecnicoDevops = this.devops3;
        }
        else if (this.Pilar2Tecnico.tecniconumeDevops == 80) {
            this.Pilar2Tecnico.tecnicoDevops = this.devops4;
        }
        else {
            this.Pilar2Tecnico.tecnicoDevops = this.devops5;
        }
        //    this.Pilar2Tecnico.resultpilar2 = (parseFloat(this.Pilar2Tecnico.tecniconumeDevops)*0.5).toFixed(2);
        this.Pilar2Tecnico.tecniconumeDevops = (parseFloat(this.Pilar2Tecnico.tecniconumeDevops) * 0.5).toFixed(2);
        if (this.Pilar2Tecnico.arquitectnumeDevops == 20) {
            this.Pilar2Tecnico.arquitectDevops = this.arquitect1;
        }
        else if (this.Pilar2Tecnico.arquitectnumeDevops == 40) {
            this.Pilar2Tecnico.arquitectDevops = this.arquitect2;
        }
        else if (this.Pilar2Tecnico.arquitectnumeDevops == 60) {
            this.Pilar2Tecnico.arquitectDevops = this.arquitect3;
        }
        else if (this.Pilar2Tecnico.arquitectnumeDevops == 80) {
            this.Pilar2Tecnico.arquitectDevops = this.arquitect4;
        }
        else {
            this.Pilar2Tecnico.arquitectDevops = this.arquitect5;
        }
        //  this.Pilar2Tecnico.resultpilar2 = parseFloat(this.Pilar2Tecnico.resultpilar2) + (parseFloat(this.Pilar2Tecnico.arquitectnumeDevops)*0.17).toFixed(2);
        this.Pilar2Tecnico.arquitectnumeDevops = (parseFloat(this.Pilar2Tecnico.arquitectnumeDevops) * 0.17).toFixed(2);
        if (this.Pilar2Tecnico.estandaresnume == 25) {
            this.Pilar2Tecnico.estandares = this.estandar1;
        }
        else if (this.Pilar2Tecnico.estandaresnume == 50) {
            this.Pilar2Tecnico.estandares = this.estandar2;
        }
        else if (this.Pilar2Tecnico.estandaresnume == 75) {
            this.Pilar2Tecnico.estandares = this.estandar3;
        }
        else {
            this.Pilar2Tecnico.estandares = this.estandar4;
        }
        //    this.Pilar2Tecnico.resultpilar2 = parseFloat(this.Pilar2Tecnico.resultpilar2)  + (parseFloat(this.Pilar2Tecnico.estandaresnume)*0.17).toFixed(2);
        this.Pilar2Tecnico.estandaresnume = (parseFloat(this.Pilar2Tecnico.estandaresnume) * 0.17).toFixed(2);
        if (this.Pilar2Tecnico.aplicacionesnume == 20) {
            this.Pilar2Tecnico.aplicaciones = this.aplicaciones1;
        }
        else if (this.Pilar2Tecnico.aplicacionesnume == 40) {
            this.Pilar2Tecnico.aplicaciones = this.aplicaciones2;
        }
        else if (this.Pilar2Tecnico.aplicacionesnume == 60) {
            this.Pilar2Tecnico.aplicaciones = this.aplicaciones3;
        }
        else if (this.Pilar2Tecnico.aplicacionesnume == 80) {
            this.Pilar2Tecnico.aplicaciones = this.aplicaciones4;
        }
        else {
            this.Pilar2Tecnico.aplicaciones = this.aplicaciones5;
        }
        //  this.Pilar2Tecnico.resultpilar2 = parseFloat(this.Pilar2Tecnico.resultpilar2) + (parseFloat(this.Pilar2Tecnico.aplicacionesnume)*0.16).toFixed(2);
        this.Pilar2Tecnico.aplicacionesnume = (parseFloat(this.Pilar2Tecnico.aplicacionesnume) * 0.16).toFixed(2);
        this.Pilar2Tecnico.resultpilar2 = (parseFloat(this.Pilar2Tecnico.aplicacionesnume) + parseFloat(this.Pilar2Tecnico.estandaresnume) + parseFloat(this.Pilar2Tecnico.arquitectnumeDevops) + parseFloat(this.Pilar2Tecnico.tecniconumeDevops));
        if (this.Pilar2Tecnico.resultpilar2 <= 25) {
            this.Pilar2Tecnico.resultpilar2 = 1;
            this.resultFinalpilar2 = "Novato";
        }
        else if (this.Pilar2Tecnico.resultpilar2 > 25 && this.Pilar2Tecnico.resultpilar2 <= 40) {
            this.Pilar2Tecnico.resultpilar2 = 2;
            this.resultFinalpilar2 = "Gestionador";
        }
        else if (this.Pilar2Tecnico.resultpilar2 > 40 && this.Pilar2Tecnico.resultpilar2 <= 60) {
            this.Pilar2Tecnico.resultpilar2 = 3;
            this.resultFinalpilar2 = "Técnico";
        }
        else if (this.Pilar2Tecnico.resultpilar2 > 60 && this.Pilar2Tecnico.resultpilar2 <= 80) {
            this.Pilar2Tecnico.resultpilar2 = 4;
            this.resultFinalpilar2 = "Ejecutor";
        }
        else if (this.Pilar2Tecnico.resultpilar2 > 80) {
            this.Pilar2Tecnico.resultpilar2 = 5;
            this.resultFinalpilar2 = "Ágil";
        }
        this.Pilar2Tecnico.celula = this.selectioncelulas;
        this.EquiposService.guardarPilar2(this.Pilar2Tecnico).subscribe(function (data) { });
        this.showPilar3 = true;
    };
    AppComponent.prototype.Pilar3 = function () {
        console.log(this.Pilar3Procesos);
        if (this.Pilar3Procesos.proceso_hy_mnume == 25) {
            this.Pilar3Procesos.proceso_hym = this.hymsoluciones1;
        }
        else if (this.Pilar3Procesos.proceso_hy_mnume == 50) {
            this.Pilar3Procesos.proceso_hym = this.hymsoluciones2;
        }
        else if (this.Pilar3Procesos.proceso_hy_mnume == 75) {
            this.Pilar3Procesos.proceso_hym = this.hymsoluciones3;
        }
        else {
            this.Pilar3Procesos.proceso_hym = this.hymsoluciones4;
        }
        if (this.tipo_celula == "CERT") {
            this.Pilar3Procesos.usd_usmnume = 0;
            this.Pilar3Procesos.usd_usm = "No Aplica para Certificación";
        }
        else {
            if (this.Pilar3Procesos.usd_usmnume == 25) {
                this.Pilar3Procesos.usd_usm = this.usd_usm1;
            }
            else if (this.Pilar3Procesos.usd_usmnume == 50) {
                this.Pilar3Procesos.usd_usm = this.usd_usm2;
            }
            else if (this.Pilar3Procesos.usd_usmnume == 75) {
                this.Pilar3Procesos.usd_usm = this.usd_usm3;
            }
            else {
                this.Pilar3Procesos.usd_usm = this.usd_usm4;
            }
        }
        if (this.Pilar3Procesos.practicasnume == 25) {
            this.Pilar3Procesos.practicas = this.mejores_precticas1;
        }
        else if (this.Pilar3Procesos.practicasnume == 50) {
            this.Pilar3Procesos.practicas = this.mejores_precticas2;
        }
        else if (this.Pilar3Procesos.practicasnume == 75) {
            this.Pilar3Procesos.practicas = this.mejores_precticas3;
        }
        else {
            this.Pilar3Procesos.practicas = this.mejores_precticas4;
        }
        if (this.Pilar3Procesos.negocionume == 25) {
            this.Pilar3Procesos.negocio = this.orienta_negocio1;
        }
        else if (this.Pilar3Procesos.negocionume == 50) {
            this.Pilar3Procesos.negocio = this.orienta_negocio2;
        }
        else if (this.Pilar3Procesos.negocionume == 75) {
            this.Pilar3Procesos.negocio = this.orienta_negocio3;
        }
        else {
            this.Pilar3Procesos.negocio = this.orienta_negocio4;
        }
        if (this.tipo_celula == "CERT") {
            this.Pilar3Procesos.practicasnume = (parseFloat(this.Pilar3Procesos.practicasnume) * 0.333).toFixed(2);
            this.Pilar3Procesos.usd_usmnume = 0;
            this.Pilar3Procesos.negocionume = (parseFloat(this.Pilar3Procesos.negocionume) * 0.333).toFixed(2);
            this.Pilar3Procesos.proceso_hy_mnume = (parseFloat(this.Pilar3Procesos.proceso_hy_mnume) * 0.333).toFixed(2);
        }
        else {
            this.Pilar3Procesos.practicasnume = (parseFloat(this.Pilar3Procesos.practicasnume) * 0.25).toFixed(2);
            this.Pilar3Procesos.usd_usmnume = (parseFloat(this.Pilar3Procesos.usd_usmnume) * 0.25).toFixed(2);
            this.Pilar3Procesos.negocionume = (parseFloat(this.Pilar3Procesos.negocionume) * 0.25).toFixed(2);
            this.Pilar3Procesos.proceso_hy_mnume = (parseFloat(this.Pilar3Procesos.proceso_hy_mnume) * 0.25).toFixed(2);
        }
        this.Pilar3Procesos.resultpilar3 = (parseFloat(this.Pilar3Procesos.negocionume) + parseFloat(this.Pilar3Procesos.practicasnume) + parseFloat(this.Pilar3Procesos.usd_usmnume) + parseFloat(this.Pilar3Procesos.proceso_hy_mnume));
        if (this.Pilar3Procesos.resultpilar3 <= 25) {
            this.Pilar3Procesos.resultpilar3 = 1;
            this.resultFinalpilar3 = "Novato";
        }
        else if (this.Pilar3Procesos.resultpilar3 > 25 && this.Pilar3Procesos.resultpilar3 <= 40) {
            this.Pilar3Procesos.resultpilar3 = 2;
            this.resultFinalpilar3 = "Gestionador";
        }
        else if (this.Pilar3Procesos.resultpilar3 > 40 && this.Pilar3Procesos.resultpilar3 <= 60) {
            this.Pilar3Procesos.resultpilar3 = 3;
            this.resultFinalpilar3 = "Técnico";
        }
        else if (this.Pilar3Procesos.resultpilar3 > 60 && this.Pilar3Procesos.resultpilar3 <= 80) {
            this.Pilar3Procesos.resultpilar3 = 4;
            this.resultFinalpilar3 = "Ejecutor";
        }
        else if (this.Pilar3Procesos.resultpilar3 > 80) {
            this.Pilar3Procesos.resultpilar3 = 5;
            this.resultFinalpilar3 = "Ágil";
        }
        this.Pilar3Procesos.celula = this.selectioncelulas;
        this.EquiposService.guardarPilar3(this.Pilar3Procesos).subscribe(function (data) { });
        this.showPilar4 = true;
    };
    AppComponent.prototype.Pilar4 = function () {
        console.log(this.Pilar4Agilismo);
        if (this.Pilar4Agilismo.agilismonum == 1) {
            this.resultpilar4 = "Novato";
            this.Pilar4Agilismo.agilismo = "El equipo: Conoce los conceptos básicos del marco de trabajo, pero no entiende el propósito.* Necesita indicaciones precisas de un líder/jefe para ejecutar tareas. ";
        }
        else if (this.Pilar4Agilismo.agilismonum == 3) {
            this.resultpilar4 = "Técnico";
            this.Pilar4Agilismo.agilismo = "El equipo:* Ejecuta las ceremonias de forma adecuada y autónoma.* Adquiere y cumplen los compromisos.* Nivel de auto-organización medio. Aun requieren de instrucciones y acompañamiento para el logro de objetivos.";
        }
        else if (this.Pilar4Agilismo.agilismonum == 4) {
            this.resultpilar4 = "Ejecutor";
            this.Pilar4Agilismo.agilismo = "El equipo: * Tiene claro el propósito de cada ceremonia. * Están orientado a la generación de valor para la organización. * El equipo es auto-organizado y orientado al logro. * Fácil adaptación al cambio ( ingreso de nuevas historias, entre otros).";
        }
        else if (this.Pilar4Agilismo.agilismonum == 5) {
            this.resultpilar4 = "Ágil";
            this.Pilar4Agilismo.agilismo = "* El nivel de madurez Ejecutor ya está adoptado totalmente por todos los integrantes del equipo. * Equipo inspirador. * Movilizador del cambio en la organización. *Promotor de la agilidad con otros equipos. * La auto-organización es natural al interior del equipo. * El equipo impacta positivamente a todo el ecosistema con el que interactúan.";
        }
        this.Pilar4Agilismo.celula = this.selectioncelulas;
        this.EquiposService.guardarPilar4(this.Pilar4Agilismo).subscribe(function (data) { });
        this.showFinalizar = true;
    };
    AppComponent.prototype.resultadofinal = function () {
        var _this = this;
        return this.EquiposService.resultadofinal(this.selectioncelulas).
            subscribe(function (data) {
            _this.resultadoFinal = data;
            var min = _this.resultadoFinal[0][0];
            for (var i = 0; i < _this.resultadoFinal[0].length; i++) {
                if (min > _this.resultadoFinal[0][i]) {
                    min = _this.resultadoFinal[0][i];
                }
            }
            _this.min = parseInt(min);
            if (_this.min == 1) {
                _this.resultadovaloracion = "Novato";
            }
            else if (_this.min == 2) {
                _this.resultadovaloracion = "Gestionador";
            }
            else if (_this.min == 3) {
                _this.resultadovaloracion = "Técnico";
            }
            else if (_this.min == 4) {
                _this.resultadovaloracion = "Ejecutor";
            }
            else
                _this.resultadovaloracion = "Ágil";
            console.log(_this.min);
            console.log(_this.resultpilar1);
            console.log(_this.resultFinalpilar2);
            console.log(_this.resultFinalpilar3);
            console.log(_this.resultpilar4);
            console.log(_this.resultadovaloracion);
        });
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
        this.url = "http://ec2-13-59-5-126.us-east-2.compute.amazonaws.com:8080/valoracion";
    }
    //"http://ec2-13-59-5-126.us-east-2.compute.amazonaws.com:8080/valoracion"
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
    EquiposService.prototype.resultadofinal = function (celula) {
        return this.http.get(this.url + "/resultadofinal/" + celula);
    };
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