webpackJsonp([0],{

/***/ 347:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CafeteriasPageModule", function() { return CafeteriasPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cafeterias__ = __webpack_require__(354);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CafeteriasPageModule = /** @class */ (function () {
    function CafeteriasPageModule() {
    }
    CafeteriasPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__cafeterias__["a" /* CafeteriasPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__cafeterias__["a" /* CafeteriasPage */]),
            ],
        })
    ], CafeteriasPageModule);
    return CafeteriasPageModule;
}());

//# sourceMappingURL=cafeterias.module.js.map

/***/ }),

/***/ 354:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CafeteriasPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_cafeteria_service__ = __webpack_require__(59);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the CafeteriasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CafeteriasPage = /** @class */ (function () {
    function CafeteriasPage(navCtrl, cafeteriaService) {
        this.navCtrl = navCtrl;
        this.cafeteriaService = cafeteriaService;
        this.cafeterias = [];
    }
    CafeteriasPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CafeteriasPage');
    };
    CafeteriasPage.prototype.ionViewWillEnter = function () {
        this.cafeterias = this.cafeteriaService.getCafeterias();
    };
    ;
    CafeteriasPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-cafeterias',template:/*ion-inline-start:"/Users/siddsrinivasan/Desktop/project/codigo/src/pages/cafeterias/cafeterias.html"*/'<!--\n  Generated template for the CafeteriasPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>cafeterias</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <br>\n  <ion-row justify-content-center align-items-center>\n    <ion-title>\n      Cafeterías\n    </ion-title>\n  </ion-row>\n  <ion-list>\n    \n    <ion-card ion-item *ngFor="let cafeteria of cafeterias" >\n      <ion-row row>\n          <ion-col col-4>\n              <ion-item>\n                  <img style ="object-fit: cover; padding-top:50%" class="full-image" src={{cafeteria.foto_url}}>\n              </ion-item>\n          </ion-col>\n          <ion-col col-8>\n              <ion-card-header>\n              <ion-card-subtitle>{{cafeteria.campus}}</ion-card-subtitle>\n              <ion-card-title>{{cafeteria.nombre}}</ion-card-title>\n              Abierto: \n              <b>{{cafeteria.hora_de_abrir.hours}}:{{cafeteria.hora_de_abrir.minutes}} \n              - {{cafeteria.hora_de_cerrar.hours}}:{{cafeteria.hora_de_cerrar.minutes}} \n              </b>\n              </ion-card-header>\n          </ion-col>\n        <ion-card-content>\n        </ion-card-content>\n      </ion-row>\n    </ion-card>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/siddsrinivasan/Desktop/project/codigo/src/pages/cafeterias/cafeterias.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__services_cafeteria_service__["a" /* CafeteriaService */]])
    ], CafeteriasPage);
    return CafeteriasPage;
}());

//# sourceMappingURL=cafeterias.js.map

/***/ })

});
//# sourceMappingURL=0.js.map