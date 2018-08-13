webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/about/about.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".navbar {\n    background-color: #FFF;\n}\n\n.navbar .navbar-brand {\n    color: black !important;\n    font-weight: bolder;\n    font-size: 1.3em;\n}\n\n.navbar .navbar-nav {\n    margin: 0 auto;\n}\n\n.navbar .nav-item a {\n    color: black !important;\n}\n\n.navbar .dropdown-menu {\n    color: #FFF;\n    background-color: rgba(0, 0, 0, 0.3);\n}\n\n.dropdown-item:hover {\n    background-color: rgba(0, 0, 0, 0.3);\n}\n\n.navbar button {\n    background-color: transparent !important;\n    color: black;\n    border: 2px outset blue;\n}\n\n.navbar button a {\n    text-decoration: none;\n}\n\n.navbar button:hover {\n    background-color: blue;\n    color: greenyellow;\n}\n\n/* Navbar Style End */\n\nspan {\n    color: #FFF;\n}\n\n.container {\n    overflow: hidden;\n    height: 100vh;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/about/about.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n  <a class=\"navbar-brand\" href=\"#\">Duxwell Printing</a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\"\n    aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n    <ul class=\"navbar-nav mr-auto\">\n      <li class=\"nav-item active\">\n        <a class=\"nav-link\" [routerLink]=\"['/']\">Home\n          <span class=\"sr-only\">(current)</span>\n        </a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" [routerLink]=\"['/about']\">About</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" [routerLink]=\"['/services']\">Services</a>\n      </li>\n      <li class=\"nav-item dropdown\">\n        <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\"\n          aria-expanded=\"false\">\n          Dropdown\n        </a>\n        <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\n          <a class=\"dropdown-item\" href=\"#\">\n            <span>Action</span>\n          </a>\n          <a class=\"dropdown-item\" href=\"#\">\n            <span>Another action</span>\n          </a>\n          <div class=\"dropdown-divider\"></div>\n          <a class=\"dropdown-item\" href=\"#\">\n            <span>Something else here</span>\n          </a>\n        </div>\n      </li>\n    </ul>\n    <a [routerLink]=\"['/templates']\">\n      <button class=\"btn btn-outline-success my-2 my-sm-0\">\n        Sample Templates\n      </button>\n    </a>\n  </div>\n</nav>\n\n<div class=\"container\">\n  <div class=\"row\">\n    <hr class=\"featurette-divider\">\n    <div class=\"row featurette\">\n      <div class=\"col-md-7\">\n        <h2 class=\"featurette-heading\"> About Us\n        </h2>\n        <p class=\"lead\">\n          Duxwell Printing was founded in 1990 by Mr. William Seto. He saw the need of printing service in the local area - Financial\n          District and Chinatown.</p>\n        <h5>ABOUT MR. WILLIAM SETO (FOUNDER)</h5>\n        <p class=\"lead\">\n          He is a community leader and an active of many associations and organizations in the local area. He has worked in the printing\n          business for over 50 years.\n        </p>\n        <h5>ABOUT MR. DAVID TSE (MANAGER)</h5>\n        <p class=\"lead\">\n          David is the person that will take care of all your needs. He will respond to your emails and handle all calls, and walk-in\n          customers.\n        </p>\n      </div>\n      <div class=\"col-md-5\">\n        <img class=\"img-circle\" src=\"data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==\" alt=\"Generic placeholder image\"\n          width=\"140\" height=\"140\">\n      </div>\n    </div>\n  </div>\n\n  <!-- /.container -->"

/***/ }),

/***/ "../../../../../src/app/about/about.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-about',
            template: __webpack_require__("../../../../../src/app/about/about.component.html"),
            styles: [__webpack_require__("../../../../../src/app/about/about.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__about_about_component__ = __webpack_require__("../../../../../src/app/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__navbar_navbar_component__ = __webpack_require__("../../../../../src/app/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_services_component__ = __webpack_require__("../../../../../src/app/services/services.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__templates_templates_component__ = __webpack_require__("../../../../../src/app/templates/templates.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_3__navbar_navbar_component__["a" /* NavbarComponent */] },
    { path: 'about', component: __WEBPACK_IMPORTED_MODULE_2__about_about_component__["a" /* AboutComponent */] },
    { path: 'services', component: __WEBPACK_IMPORTED_MODULE_4__services_services_component__["a" /* ServicesComponent */] },
    { path: 'templates', component: __WEBPACK_IMPORTED_MODULE_5__templates_templates_component__["a" /* TemplatesComponent */] }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#return-to-top {\n    font-size: 50px;\n    width: 50px;\n    height: 50px;\n    position: fixed;\n    bottom: 20px;\n    right: 20px;\n    background: rgba(0, 0, 0, 0.7);\n    cursor: pointer;\n    z-index: 99;\n    border-radius: 4px;\n    font-size: 18px;\n}\n\n#return-to-top i {\n    color: #fff;\n    margin: 0;\n    position: relative;\n    left: 16px;\n    top: 13px;\n    font-size: 19px;\n    transition: all 0.3s ease;\n}\n\n#return-to-top:hover {\n    background: rgba(0, 0, 0, 0.9);\n}\n\n#return-to-top:hover i {\n    color: #fff;\n    top: 5px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<a id=\"return-to-top\" (click)=\"arrowClick($event)\">\n    <i class=\"fas fa-chevron-up\"></i>\n</a>\n<router-outlet></router-outlet>\n<app-footer></app-footer>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_bootstrap_utils__ = __webpack_require__("../../../../ngx-bootstrap/utils/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jquery__ = __webpack_require__("../../../../jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_jquery__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = (function () {
    function AppComponent() {
        Object(__WEBPACK_IMPORTED_MODULE_1_ngx_bootstrap_utils__["c" /* setTheme */])('bs3');
    }
    AppComponent.prototype.ngOnInit = function () {
        __WEBPACK_IMPORTED_MODULE_2_jquery__("#return-to-top").hide();
        __WEBPACK_IMPORTED_MODULE_2_jquery__(window).scroll(function () {
            var scrollval = __WEBPACK_IMPORTED_MODULE_2_jquery__(window).scrollTop();
            if (scrollval >= 50) {
                __WEBPACK_IMPORTED_MODULE_2_jquery__('#return-to-top').fadeIn(200);
            }
            else {
                __WEBPACK_IMPORTED_MODULE_2_jquery__('#return-to-top').fadeOut(200);
            }
        });
    };
    AppComponent.prototype.arrowClick = function (event) {
        window.scroll({
            top: 0,
            behavior: "smooth"
        });
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__main_service__ = __webpack_require__("../../../../../src/app/main.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ngx_bootstrap_carousel__ = __webpack_require__("../../../../ngx-bootstrap/carousel/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__agm_core__ = __webpack_require__("../../../../@agm/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__navbar_navbar_component__ = __webpack_require__("../../../../../src/app/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__showbox_showbox_component__ = __webpack_require__("../../../../../src/app/showbox/showbox.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__contact_contact_component__ = __webpack_require__("../../../../../src/app/contact/contact.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__about_about_component__ = __webpack_require__("../../../../../src/app/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_services_component__ = __webpack_require__("../../../../../src/app/services/services.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__templates_templates_component__ = __webpack_require__("../../../../../src/app/templates/templates.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__footer_footer_component__ = __webpack_require__("../../../../../src/app/footer/footer.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




 // <-- Import FormsModule











var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_9__navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_10__showbox_showbox_component__["a" /* ShowboxComponent */],
                __WEBPACK_IMPORTED_MODULE_11__contact_contact_component__["a" /* ContactComponent */],
                __WEBPACK_IMPORTED_MODULE_12__about_about_component__["a" /* AboutComponent */],
                __WEBPACK_IMPORTED_MODULE_13__services_services_component__["a" /* ServicesComponent */],
                __WEBPACK_IMPORTED_MODULE_14__templates_templates_component__["a" /* TemplatesComponent */],
                __WEBPACK_IMPORTED_MODULE_15__footer_footer_component__["a" /* FooterComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_8__agm_core__["a" /* AgmCoreModule */].forRoot({
                    apiKey: 'AIzaSyAYlLpcrvBVKytopDFf4NZJM0nD3u98yKo'
                }),
                __WEBPACK_IMPORTED_MODULE_7_ngx_bootstrap_carousel__["a" /* CarouselModule */].forRoot()
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_6__main_service__["a" /* MainService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/contact/contact.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".contact-section {\n    padding: 15px;\n}\n\n.section-padding {\n    padding: 70px 0 50px;\n}\n\n.contact-section strong {\n    display: block;\n    text-transform: uppercase;\n}\n\n.contact-form strong {\n    margin-bottom: 40px;\n}\n\n.contact-form textarea.form-control {\n    height: 115px;\n}\n\n.contact-form .btn {\n    margin-top: 15px;\n}\n\n/* Input Style */\n\n.contact-form input {\n    position: relative;\n}\n\n.inputWithIcon input[type=text] {\n    padding-left: 40px;\n}\n\n.inputWithIcon {\n    position: relative;\n}\n\n.inputWithIcon i {\n    position: absolute;\n    left: 0;\n    top: 45px;\n    padding: 9px 8px;\n    color: #aaa;\n    transition: .3s;\n}\n\n.inputWithIcon input[type=text]:focus+i {\n    color: dodgerBlue;\n}\n\n.list-unstyled li {\n    font-size: 18px;\n}\n\n.btn:disabled {\n    cursor: not-allowed;\n}\n\n/* Map Style  */\n\n.location-map {\n    padding: 4px;\n    border: 1px solid #eee;\n}\n\n.quote {\n    margin: 8px;\n    font-style: italic;\n    text-align: center;\n}\n\nagm-map {\n    height: 300px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/contact/contact.component.html":
/***/ (function(module, exports) {

module.exports = "<section id=\"contact\" class=\"contact-section section-padding\">\n  <div class=\"row\">\n    <div class=\"col-md-6\">\n      <div class=\"contact-form\">\n        <strong>Send me a message</strong>\n        <p>We are also looking forward to hearing from you. Whether you have a question or need a quote, please let us know.\n          Thanks.\n        </p>\n        <h4 *ngIf=\"showmsg\" class=\"alert alert-info\"> {{ successCommment }} </h4>\n        <form name=\"contact-form\" (submit)=\"formSend(); myForm.reset()\" #myForm=\"ngForm\">\n          <div class=\"form-group inputWithIcon\">\n            <label>Name</label>\n            <input type=\"text\" class=\"form-control\" placeholder=\"Your name...\" [(ngModel)]=\"contactInfo.name\" name=\"name\" required minlength=\"2\"\n              #name=\"ngModel\">\n            <i class=\"fa fa-user fa-lg fa-fw\" aria-hidden=\"true\"></i>\n          </div>\n          <div *ngIf=\"name.invalid && (name.dirty || name.touched)\" class=\"alert alert-danger\">\n            <div *ngIf=\"name?.errors.required\">\n              Name is required!\n            </div>\n            <div *ngIf=\"name?.errors.minlength\">\n              Name must be at least 2 characters long!\n            </div>\n          </div>\n\n          <div class=\"form-group inputWithIcon\">\n            <label>Email</label>\n            <input type=\"text\" class=\"form-control\" placeholder=\"Email...\" [(ngModel)]=\"contactInfo.email\" required pattern=\"[_a-z0-9]+(\\.[_a-z0-9]+)*@[a-z0-9-]*\\.([a-z]{2,4})\"\n              name=\"email\" #yourEmail=\"ngModel\">\n            <i class=\"fa fa-envelope fa-lg fa-fw\" aria-hidden=\"true\"></i>\n          </div>\n          <div class=\"alert alert-danger\" *ngIf=\"yourEmail.invalid && (yourEmail.dirty || yourEmail.touched)\">\n            <div *ngIf=\"yourEmail?.errors.required\">\n              Email is required!\n            </div>\n            <div *ngIf=\"yourEmail?.errors.pattern\">\n              Email format wrong!\n            </div>\n          </div>\n\n          <div class=\"form-group inputWithIcon\">\n            <label>Subject</label>\n            <input type=\"text\" class=\"form-control\" placeholder=\"Subject...\" [(ngModel)]=\"contactInfo.subject\" name=\"subject\" required\n              minlength=\"2\" #contentSub=\"ngModel\">\n            <i class=\"fa fa-paper-plane fa-lg fa-fw\" aria-hidden=\"true\"></i>\n          </div>\n          <div *ngIf=\"contentSub.invalid && (contentSub.dirty || contentSub.touched)\" class=\"alert alert-danger\">\n            <div *ngIf=\"contentSub?.errors.required\">\n              Subject is required!\n            </div>\n            <div *ngIf=\"contentSub?.errors.minlength\">\n              contentSub must be at least 2 characters long!\n            </div>\n          </div>\n\n          <div class=\"form-group inputWithIcon\">\n            <label>Message</label>\n            <textarea class=\"form-control\" placeholder=\"Message...\" rows=\"50\" cols=\"50\" [(ngModel)]=\"contactInfo.message\" name=\"message\"\n              required minlength=\"2\" #msg=\"ngModel\">\n            </textarea>\n            <!-- <i class=\"fas fa-comment-dots\"></i> -->\n          </div>\n          <div *ngIf=\"msg.invalid && (msg.dirty || msg.touched)\" class=\"alert alert-danger\">\n            <div *ngIf=\"msg?.errors.required\">\n              Message is required!\n            </div>\n            <div *ngIf=\"msg?.errors.minlength\">\n              Please messaging me with more detail and more then 2 characters!\n            </div>\n          </div>\n\n          <button type=\"submit\" name=\"submit\" class=\"btn btn-primary\" [disabled]=\"myForm.invalid\">Send Message</button>\n        </form>\n      </div>\n    </div>\n    <!-- /.col-md-6 -->\n\n    <div class=\"col-md-6\">\n      <div class=\"row center-xs\">\n        <div class=\"col-sm-6\">\n          <i class=\"fas fa-map-marker-alt\"></i>\n          <div class=\"contact-detail\">\n            <strong>Address/Street</strong>\n            <ul class=\"list-unstyled\">\n              <li> 7 Wentworth Street, San Francisco, CA 94108</li>\n            </ul>\n            <br>\n            <i class=\"far fa-clock\"></i>\n            <strong>Business Hours:</strong>\n            <ul class=\"list-unstyled\">\n              <li>Monday - Saturday</li>\n              <li>10AM - 6PM</li>\n            </ul>\n          </div>\n        </div>\n\n        <div class=\"col-sm-6\">\n          <i class=\"fas fa-mobile-alt\"></i>\n          <div class=\"contact-number\">\n            <strong>Phone Number</strong>\n            <ul class=\"list-unstyled\">\n              <li>415-986-3888</li>\n              <li>Fax: 415-986-6069</li>\n            </ul>\n            <br>\n            <i class=\"fa fa-envelope\"></i>\n            <strong>Email Address</strong>\n            <ul class=\"list-unstyled\">\n              <li>davidtse39@yahoo.com</li>\n            </ul>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"row\">\n        <div class=\"col-sm-12\">\n          <div class=\"location-map\">\n            <agm-map [latitude]=\"latitude\" [longitude]=\"longitude\" [zoom]=\"zoom\">\n              <agm-marker [latitude]=\"latitude\" [longitude]=\"longitude\"></agm-marker>\n            </agm-map>\n            <p class=\"quote\">\"We locate here!\"</p>\n          </div>\n        </div>\n      </div>\n\n    </div>\n  </div>\n  <!-- /.row -->\n</section>\n<!-- End Contact Section -->"

/***/ }),

/***/ "../../../../../src/app/contact/contact.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__main_service__ = __webpack_require__("../../../../../src/app/main.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ContactComponent = (function () {
    function ContactComponent(_service, _router) {
        this._service = _service;
        this._router = _router;
        this.latitude = 37.7956;
        this.longitude = -122.4062;
        this.zoom = 14;
        this.showmsg = false;
        this.successCommment = 'Email has been sent!';
        this.contactInfo = {
            name: "",
            email: "",
            subject: "",
            message: ""
        };
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent.prototype.formSend = function () {
        var _this = this;
        console.log('form', this.contactInfo);
        this._service.infoSend(this.contactInfo, function (res) {
            if (res.success === "success send message") {
                _this.showmsg = true;
                _this.contactInfo = {
                    name: "",
                    email: "",
                    subject: "",
                    message: ""
                };
            }
        });
    };
    ContactComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-contact',
            template: __webpack_require__("../../../../../src/app/contact/contact.component.html"),
            styles: [__webpack_require__("../../../../../src/app/contact/contact.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__main_service__["a" /* MainService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "../../../../../src/app/footer/footer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* === Footer Wrapper === */\n\nfooter {\n    color: #fff;\n    bottom: 0 !important;\n}\n\nfooter h3 {\n    margin-bottom: 30px;\n    font-weight: 700;\n}\n\nfooter p {\n    font-size: 20px;\n    font-weight: 700;\n}\n\nfooter .footer-below {\n    padding: 25px 0;\n    background-color: #233140;\n}\n\n.portfolio-modal .modal-content i {\n    color: #939393;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<footer id=\"footer\" class=\"text-center\">\n  <div class=\"footer-below\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-lg-12\">\n          COPYRIGHT &copy;\n          <i class=\"fa fa-cog fa-spin\" style=\"color:#97c6c1;font-size:24px;\"></i> 2018\n        </div>\n      </div>\n    </div>\n  </div>\n</footer>"

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-footer',
            template: __webpack_require__("../../../../../src/app/footer/footer.component.html"),
            styles: [__webpack_require__("../../../../../src/app/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/main.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators__ = __webpack_require__("../../../../rxjs/_esm5/operators.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// import 'rxjs/add/operator/catch';
var allInfo = 'assets/json/products.json';
var MainService = (function () {
    function MainService(_http) {
        this._http = _http;
    }
    MainService.prototype.list = function () {
        return this._http.get(allInfo)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["a" /* map */])(function (response) { return response.json(); }));
        // .catch(this.handleError)
    };
    MainService.prototype.infoSend = function (data, callback) {
        this._http.post('/send', data).subscribe(function (res) {
            console.log("from service send info: ", res);
            callback(res.json());
            console.log(res.json());
        }, function (err) {
            console.log(err);
        });
    };
    MainService.prototype.handleError = function (error, caught) {
        console.log(error, caught);
    };
    MainService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], MainService);
    return MainService;
}());



/***/ }),

/***/ "../../../../../src/app/navbar/navbar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".navbar {\n    background-color: #FFF;\n}\n\n.navbar .navbar-brand {\n    color: black !important;\n    font-weight: bolder;\n    font-size: 1.3em;\n}\n\n.navbar .navbar-nav {\n    margin: 0 auto;\n}\n\n.navbar .nav-item a {\n    color: black !important;\n}\n\n.navbar .dropdown-menu {\n    color: #FFF;\n    background-color: rgba(0, 0, 0, 0.3);\n}\n\n.dropdown-item:hover {\n    background-color: rgba(0, 0, 0, 0.3);\n}\n\n.navbar button {\n    background-color: transparent !important;\n    color: black;\n    border: 2px outset blue;\n}\n\n.navbar button a {\n    text-decoration: none;\n}\n\n.navbar button:hover {\n    background-color: blue;\n    color: greenyellow;\n}\n\n/* Navbar Style End */\n\nspan {\n    color: #FFF;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<html lang=\"en\">\n\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\">\n  <title>Document</title>\n</head>\n\n<body>\n  <nav class=\"navbar navbar-expand-lg navbar-light bg-light fixed-top\">\n    <a class=\"navbar-brand\" href=\"#\">Duxwell Printing</a>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\"\n      aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      Menu\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n\n    <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n      <ul class=\"navbar-nav mr-auto\">\n        <li class=\"nav-item active\">\n          <a class=\"nav-link\" [routerLink]=\"['/']\">Home\n            <span class=\"sr-only\">(current)</span>\n          </a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" [routerLink]=\"['/about']\">About</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" [routerLink]=\"['/services']\">Services</a>\n        </li>\n        <li class=\"nav-item dropdown\">\n          <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\"\n            aria-expanded=\"false\">\n            Dropdown\n          </a>\n          <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\n            <a class=\"dropdown-item\" href=\"#\">\n              <span>Action</span>\n            </a>\n            <a class=\"dropdown-item\" href=\"#\">\n              <span>Another action</span>\n            </a>\n            <div class=\"dropdown-divider\"></div>\n            <a class=\"dropdown-item\" href=\"#\">\n              <span>Something else here</span>\n            </a>\n          </div>\n        </li>\n      </ul>\n      <a [routerLink]=\"['/templates']\">\n        <button class=\"btn btn-outline-success my-2 my-sm-0\">\n          Sample Templates\n        </button>\n      </a>\n    </div>\n  </nav>\n\n\n  <app-showbox></app-showbox>\n\n\n\n</body>\n\n</html>"

/***/ }),

/***/ "../../../../../src/app/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavbarComponent = (function () {
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-navbar',
            template: __webpack_require__("../../../../../src/app/navbar/navbar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/services/services.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".navbar {\n    background-color: #FFF;\n}\n\n.navbar .navbar-brand {\n    color: black !important;\n    font-weight: bolder;\n    font-size: 1.3em;\n}\n\n.navbar .navbar-nav {\n    margin: 0 auto;\n}\n\n.navbar .nav-item a {\n    color: black !important;\n}\n\n.navbar .dropdown-menu {\n    color: #FFF;\n    background-color: rgba(0, 0, 0, 0.3);\n}\n\n.dropdown-item:hover {\n    background-color: rgba(0, 0, 0, 0.3);\n}\n\n.navbar button {\n    background-color: transparent !important;\n    color: black;\n    border: 2px outset blue;\n}\n\n.navbar button:hover {\n    background-color: blue;\n    color: greenyellow;\n}\n\n/* Navbar Style End */\n\nspan {\n    color: #FFF;\n}\n\n.container {\n    height: 100vh;\n}\n\n.list-group li {\n    margin-left: 50px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/services/services.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n  <a class=\"navbar-brand\" href=\"#\">Duxwell Printing</a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\"\n    aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n    <ul class=\"navbar-nav mr-auto\">\n      <li class=\"nav-item active\">\n        <a class=\"nav-link\" [routerLink]=\"['/']\">Home\n          <span class=\"sr-only\">(current)</span>\n        </a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" [routerLink]=\"['/about']\">About</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" [routerLink]=\"['/services']\">Services</a>\n      </li>\n      <li class=\"nav-item dropdown\">\n        <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\"\n          aria-expanded=\"false\">\n          Dropdown\n        </a>\n        <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\n          <a class=\"dropdown-item\" href=\"#\">\n            <span>Action</span>\n          </a>\n          <a class=\"dropdown-item\" href=\"#\">\n            <span>Another action</span>\n          </a>\n          <div class=\"dropdown-divider\"></div>\n          <a class=\"dropdown-item\" href=\"#\">\n            <span>Something else here</span>\n          </a>\n        </div>\n      </li>\n    </ul>\n    <a [routerLink]=\"['/templates']\">\n      <button class=\"btn btn-outline-success my-2 my-sm-0\">\n        Sample Templates\n      </button>\n    </a>\n  </div>\n</nav>\n\n<!-- Body Content -->\n\n<div class=\"container\">\n  <h1>OUR SERVICES</h1>\n  <ul class=\"list-unstyled\">\n    <li>\n      <h5>We are a fully-equipped printing company</h5>\n    </li>\n    <li>\n      <h5>Our specialty is in the following areas:</h5>\n      <ul class=\"list-group\">\n        <li>Business cards</li>\n        <li>Letterheads</li>\n        <li>Envelopes (any size)</li>\n      </ul>\n    </li>\n  </ul>\n  <h3>....and more</h3>\n\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/services/services.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServicesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ServicesComponent = (function () {
    function ServicesComponent() {
    }
    ServicesComponent.prototype.ngOnInit = function () {
    };
    ServicesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-services',
            template: __webpack_require__("../../../../../src/app/services/services.component.html"),
            styles: [__webpack_require__("../../../../../src/app/services/services.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ServicesComponent);
    return ServicesComponent;
}());



/***/ }),

/***/ "../../../../../src/app/showbox/showbox.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*  displayInfo */\n\n.displayInfo {\n    padding: 54px 0 100px;\n}\n\n.displayInfo carousel img {\n    width: 100%;\n    height: 500px;\n    max-height: 500px;\n    background-size: cover;\n    padding: 5px;\n    border: 1px solid #000;\n    margin-bottom: 10px;\n    -o-object-position: center;\n       object-position: center;\n}\n\n.displayInfo .item {\n    width: 100%;\n    height: 100%;\n}\n\n.displayInfo .row .col-md-6 {\n    margin-bottom: 30px;\n}\n\n.displayInfo .owner {\n    text-align: center;\n}\n\n.displayInfo .owner img {\n    border-radius: 30px;\n}\n\n/* Info Container */\n\n.info {\n    padding: 70px 20px 30px;\n    overflow: hidden;\n}\n\n.list-group list-group-flush {\n    z-index: -1;\n}\n\n/* Boxes Style  */\n\n.boxes {\n    background-color: #3A9CED;\n    color: #fff;\n}\n\n.boxes .col {\n    text-align: center;\n    padding: 1.5rem 2rem;\n}\n\n/* End */\n\n/* Social Section */\n\nsection.contact {\n    text-align: center;\n    padding: 50px 0;\n}\n\nsection.contact h2 {\n    margin-top: 0;\n    margin-bottom: 25px;\n}\n\nsection.contact h2 i {\n    color: #dd4b39;\n}\n\nsection.contact ul.list-social {\n    margin-bottom: 0;\n}\n\nsection.contact ul.list-social li a {\n    font-size: 30px;\n    line-height: 65px;\n    display: block;\n    width: 65px;\n    height: 65px;\n    color: white;\n    border-radius: 100%;\n    border: 1px #fff solid;\n}\n\nsection.contact ul.list-social li.social-twitter a {\n    background-color: #1da1f2;\n}\n\nsection.contact ul.list-social li.social-twitter a:hover {\n    background-color: #0d95e8;\n}\n\nsection.contact ul.list-social li.social-facebook a {\n    background-color: #3b5998;\n}\n\nsection.contact ul.list-social li.social-facebook a:hover {\n    background-color: #344e86;\n}\n\nsection.contact ul.list-social li.social-print a {\n    background-color: #d73925;\n}\n\nsection.contact ul.list-social li.social-print a:hover {\n    background-color: #d73925;\n}\n\n.bg-primary {\n    background: #3A9CED;\n    background: linear-gradient(#3A9CED, #3A9CED);\n}\n\n/* Smaller than standard 960 (devices and browsers) */\n\n@media only screen and (max-width: 959px) {\n    .displayInfo carousel img {\n        height: 400px;\n    }\n}\n\n/* Tablet Portrait size to standard 960 (devices and browsers) */\n\n@media only screen and (min-width: 768px) and (max-width: 959px) {\n    .displayInfo carousel img {\n        height: 400px;\n    }\n}\n\n/* All Mobile Sizes (devices and browser) */\n\n@media only screen and (max-width: 767px) {\n    .displayInfo carousel img {\n        height: 300px;\n    }\n}\n\n/* Mobile Landscape Size to Tablet Portrait (devices and browsers) */\n\n@media only screen and (min-width: 480px) and (max-width: 767px) {\n    .displayInfo carousel img {\n        height: 300px;\n    }\n}\n\n/* Mobile Portrait Size to Mobile Landscape Size (devices and browsers) */\n\n@media only screen and (max-width: 479px) {\n    .displayInfo carousel img {\n        height: 300px;\n    }\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/showbox/showbox.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Top Container  -->\n<section class=\"v-header\">\n  <div class=\"overlay\">\n    <div class=\"video-chrome-fix\" [innerHTML]=\"videoTag\"></div>\n    <div class=\"backcover\"></div>\n    <div class=\"text-block animated fadeIn slower\">\n      <div class=\"row\">\n        <div class=\"col-lg-6 col-xs-6\">\n          <img src=\"assets/images/welcome.jpg\" alt=\"welcome-image\">\n        </div>\n        <div class=\"col-lg-6 col-xs-6\">\n          <h4>What a beautiful sunrise</h4>\n          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos excepturi in ea quo assumenda. Est, minus explicabo!</p>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n<!-- End  -->\n\n<!-- Basic Info -->\n\n<section class=\"displayInfo\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-8\">\n        <carousel *ngIf='homeImageList'>\n          <slide *ngFor=\"let item of homeImageList\">\n            <img class=\"img-main-carousel\" [src]=\"item.image\" alt=\"first slide\" style=\"display: block; width: 100%;\">\n            <div class=\"carousel-caption\">\n              <h3>{{ item.name }}\n              </h3>\n              <p>\n                {{ item.description }}\n              </p>\n              <a class='btn btn-primary' [routerLink]=\"['/templates']\">View</a>\n            </div>\n          </slide>\n        </carousel>\n      </div>\n      <div class=\"col-md-4\">\n        <div class=\"owner\">\n          <img class=\"img-circle\" src=\"data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==\" alt=\"Generic placeholder image\"\n            width=\"140\" height=\"140\">\n          <h3>David Tse</h3>\n          <h3>Manager</h3>\n          <p>Our goal is to provide you with the Best Service, Best Price, Best Quality. Call or Email us. --\n            <strong>David</strong>\n          </p>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n\n\n\n\n<!-- Box Section -->\n<div class=\"boxes\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col\">\n        <i class=\"fas fa-truck fa-4x\"></i>\n        <h3>Free Shipping</h3>\n        <p>UPS Shipping Products</p>\n      </div>\n      <div class=\"col\">\n        <i class=\"fas fa-globe fa-4x\"></i>\n        <h3>Marketing</h3>\n        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>\n      </div>\n      <div class=\"col\">\n        <i class=\"fas fa-cog fa-4x\"></i>\n        <h3>Development</h3>\n        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>\n      </div>\n    </div>\n  </div>\n</div>\n\n\n<!-- Info Section -->\n<section class=\"info\">\n  <!-- Portfolio Item Row -->\n  <div class=\"row\">\n    <div class=\"col-md-6\">\n      <img src=\"../assets/images/iphone.jpg\" style=\"display: block; width: 100%; transform: scaleY(1.5);\">\n    </div>\n    <div class=\"col-md-6\">\n      <h3 class=\"my-3\">Project Description</h3>\n      <p>\n        <i class=\"fas fa-quote-left fa-pull-left\"></i>\n        No job too large or too small. We custom to your personal needs. Fast turnaround time. Free delivery. UPS pickup.\n        <i class=\"fas fa-quote-right fa-pull-right\"></i>\n      </p>\n      <h3 class=\"my-3\">Project Details</h3>\n      <ul class=\"list-group list-group-flush\">\n        <li class=\"list-group-item\">\n          <i class=\"fas fa-angle-double-right\"></i> Office Stationery</li>\n        <li class=\"list-group-item\">\n          <i class=\"fas fa-angle-double-right\"></i> Business Cards</li>\n        <li class=\"list-group-item\">\n          <i class=\"fas fa-angle-double-right\"></i> Letterheads</li>\n        <li class=\"list-group-item\">\n          <i class=\"fas fa-angle-double-right\"></i> Invoices</li>\n        <li class=\"list-group-item\">\n          <i class=\"fas fa-angle-double-right\"></i> Copying</li>\n        <li class=\"list-group-item\">\n          <i class=\"fas fa-angle-double-right\"></i> Booklets</li>\n        <li class=\"list-group-item\">\n          <i class=\"fas fa-angle-double-right\"></i> Flyers</li>\n        <li class=\"list-group-item\">\n          <i class=\"fas fa-angle-double-right\"></i> Menus</li>\n      </ul>\n    </div>\n  </div>\n  <!-- /.row -->\n</section>\n\n<div class=\"container\">\n  <app-contact></app-contact>\n</div>\n\n\n<!-- Social Section -->\n<section class=\"contact bg-primary\" id=\"contact\">\n  <div class=\"container\">\n    <h2>We\n      <i class=\"fa fa-heart\"></i>\n      new friends!</h2>\n    <ul class=\"list-inline list-social\">\n      <li class=\"list-inline-item social-twitter\">\n        <a target=\"_blank\" href=\"https://twitter.com/share?ref_src=http://duxwellprinting.com/home.html\" class=\"twitter-share-button\"\n          data-show-count=\"false\">\n          <i class=\"fab fa-twitter\"></i>\n        </a>\n        <script async src=\"https://platform.twitter.com/widgets.js\" charset=\"utf-8\"></script>\n      </li>\n      <li class=\"list-inline-item social-facebook\">\n        <div data-href=\"http://duxwellprinting.com/home.html\" data-layout=\"button_count\" data-size=\"large\" data-mobile-iframe=\"true\">\n          <a target=\"_blank\" href=\"https://www.facebook.com/sharer/sharer.php?u=http%3A%2F%2Fduxwellprinting.com%2Fhome.html&amp;src=sdkpreparse\"\n            class=\"fb-xfbml-parse-ignore\">\n            <i class=\"fab fa-facebook-f\"></i>\n          </a>\n        </div>\n\n      </li>\n      <li class=\"list-inline-item social-print\">\n        <a href=\"javascript:window.print()\" class=\"share-btn\">\n          <i class=\"fas fa-print\"></i>\n        </a>\n      </li>\n    </ul>\n  </div>\n</section>"

/***/ }),

/***/ "../../../../../src/app/showbox/showbox.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShowboxComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__main_service__ = __webpack_require__("../../../../../src/app/main.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ShowboxComponent = (function () {
    function ShowboxComponent(_router, _service, _sanitizer) {
        this._router = _router;
        this._service = _service;
        this._sanitizer = _sanitizer;
        this.homeImageList = [];
        this.prevented = false;
        this.defaultImg = "assets/images/products/1.jpg";
        this.videoTag = this.getVideoLoad();
    }
    ShowboxComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.req = this._service.list().subscribe(function (data) {
            console.log(data);
            data.filter(function (item) {
                if (item.featured) {
                    var dataItem = item;
                    _this.homeImageList.push(dataItem);
                }
            });
        });
    };
    ShowboxComponent.prototype.ngOnDestroy = function () {
        this.req.unsubscribe();
    };
    // preventNormal(event: MouseEvent, image: any) {
    //   console.log(image);
    //   if (!image.prevented) {
    //     event.preventDefault();
    //     this._router.navigate(['/templates']);
    //   }
    // }
    ShowboxComponent.prototype.getVideoLoad = function () {
        return this._sanitizer.bypassSecurityTrustHtml("<video id=\"videoDis\" muted loop autoplay>\n        <source src=\"assets/videos/design.mp4\" type=\"video/mp4\">\n      </video>\n      ");
    };
    ShowboxComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-showbox',
            template: __webpack_require__("../../../../../src/app/showbox/showbox.component.html"),
            styles: [__webpack_require__("../../../../../src/app/showbox/showbox.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */], __WEBPACK_IMPORTED_MODULE_2__main_service__["a" /* MainService */], __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["b" /* DomSanitizer */]])
    ], ShowboxComponent);
    return ShowboxComponent;
}());



/***/ }),

/***/ "../../../../../src/app/templates/templates.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".navbar {\n    background-color: #FFF;\n}\n\n.navbar .navbar-brand {\n    color: black !important;\n    font-weight: bolder;\n    font-size: 1.3em;\n}\n\n.navbar .navbar-nav {\n    margin: 0 auto;\n}\n\n.navbar .nav-item a {\n    color: black !important;\n}\n\n.navbar .dropdown-menu {\n    color: #FFF;\n    background-color: rgba(0, 0, 0, 0.3);\n}\n\n.dropdown-item:hover {\n    background-color: rgba(0, 0, 0, 0.3);\n}\n\n.navbar button {\n    background-color: transparent !important;\n    color: black;\n    border: 2px outset blue;\n}\n\n.navbar button a {\n    text-decoration: none;\n}\n\n.navbar button:hover {\n    background-color: blue;\n    color: greenyellow;\n}\n\n/* Navbar Style End */\n\nspan {\n    color: #FFF;\n}\n\n#container {\n    padding: 50px;\n}\n\n.thumbnail {\n    padding: 4px;\n    margin-bottom: 20px;\n    border: 1px solid #ddd;\n    border-radius: 4px;\n    text-align: center;\n    width: 100%;\n    height: auto;\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n}\n\n.thumbnail img {\n    width: 100%;\n    height: 320px;\n}\n\n.thumbnail .panel-footer {\n    background-color: #3A9CED;\n    color: #FFF;\n    margin: 0;\n}\n\n/* Smaller than standard 960 (devices and browsers) */\n\n@media only screen and (max-width: 959px) {\n    #container .thumbnail img {\n        width: 100%;\n    }\n}\n\n/* Tablet Portrait size to standard 960 (devices and browsers) */\n\n@media only screen and (min-width: 768px) and (max-width: 959px) {\n    #container .thumbnail img {\n        width: 100%;\n        height: 200px;\n    }\n}\n\n/* All Mobile Sizes (devices and browser) */\n\n@media only screen and (max-width: 767px) {\n    #container .thumbnail img {\n        width: 100%;\n    }\n}\n\n/* Mobile Landscape Size to Tablet Portrait (devices and browsers) */\n\n@media only screen and (min-width: 480px) and (max-width: 767px) {\n    #container .thumbnail img {\n        width: 100%;\n    }\n}\n\n/* Mobile Portrait Size to Mobile Landscape Size (devices and browsers) */\n\n@media only screen and (max-width: 479px) {\n    #container .thumbnail img {\n        width: 100%;\n    }\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/templates/templates.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light bg-light fixed-top\">\n  <a class=\"navbar-brand\" href=\"#\">Duxwell Printing</a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\"\n    aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    Menu\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n    <ul class=\"navbar-nav mr-auto\">\n      <li class=\"nav-item active\">\n        <a class=\"nav-link\" [routerLink]=\"['/']\">Home\n          <span class=\"sr-only\">(current)</span>\n        </a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" [routerLink]=\"['/about']\">About</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" [routerLink]=\"['/services']\">Services</a>\n      </li>\n      <li class=\"nav-item dropdown\">\n        <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\"\n          aria-expanded=\"false\">\n          Dropdown\n        </a>\n        <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\n          <a class=\"dropdown-item\" href=\"#\">\n            <span>Action</span>\n          </a>\n          <a class=\"dropdown-item\" href=\"#\">\n            <span>Another action</span>\n          </a>\n          <div class=\"dropdown-divider\"></div>\n          <a class=\"dropdown-item\" href=\"#\">\n            <span>Something else here</span>\n          </a>\n        </div>\n      </li>\n    </ul>\n    <a [routerLink]=\"['/templates']\">\n      <button class=\"btn btn-outline-success my-2 my-sm-0\">\n        Sample Templates\n      </button>\n    </a>\n  </div>\n</nav>\n\n<div id=\"container\" class=\"row\">\n  <div class=\"col-md-4 col-sm-12\" *ngFor=\"let abc of productList; let i = index\">\n    <div class=\"thumbnail\">\n      <img [src]='abc.image' alt=\"{{ abc.name }} image\" *ngIf=\"abc.image\">\n      <div class=\"caption\">\n        <h4>Thumbnail label</h4>\n        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere, soluta, eligendi doloribus sunt minus amet sit\n          debitis repellat. Consectetur, culpa itaque odio similique suscipit</p>\n        <p class=\"panel-footer\">\n          Available Now\n        </p>\n      </div>\n    </div>\n  </div>\n</div>\n<!-- End row -->"

/***/ }),

/***/ "../../../../../src/app/templates/templates.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TemplatesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__main_service__ = __webpack_require__("../../../../../src/app/main.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TemplatesComponent = (function () {
    function TemplatesComponent(_service) {
        this._service = _service;
    }
    TemplatesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.req = this._service.list().subscribe(function (data) {
            _this.productList = data;
            console.log(_this.productList);
        });
    };
    TemplatesComponent.prototype.ngOnDestroy = function () {
        this.req.unsubscribe();
    };
    TemplatesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-templates',
            template: __webpack_require__("../../../../../src/app/templates/templates.component.html"),
            styles: [__webpack_require__("../../../../../src/app/templates/templates.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__main_service__["a" /* MainService */]])
    ], TemplatesComponent);
    return TemplatesComponent;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map