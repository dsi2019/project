webpackJsonp([5],{

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__registrar_registrar__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_auth_service__ = __webpack_require__(53);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, navParams, auth, fb) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.auth = auth;
        this.form = fb.group({
            correo: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required],
            contraseña: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required]
        });
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
        console.log(this.form.value);
    };
    LoginPage.prototype.onLoadRegistrarPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__registrar_registrar__["a" /* RegistrarPage */]);
    };
    LoginPage.prototype.login = function () {
        var _this = this;
        console.log("logging-in");
        var data = this.form.value;
        console.log(data);
        this.auth.signInWithEmail({ email: data.correo, password: data.contraseña })
            .then(function () {
            return _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
        }, function (error) { return _this.loginError = error.message; });
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"/Users/siddsrinivasan/Desktop/project/codigo/src/pages/login/login.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Log in</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <br>\n  <ion-row justify-content-center align-items-center style="height: 40%">\n      <img src="../assets/icon/logo.png" height= "200">\n  </ion-row>\n  <ion-row justify-content-center align-items-center>\n      <h1>UnEat</h1>\n  </ion-row>\n  <ion-row justify-content-center align-tems-center>\n    <form (ngSubmit)="login()" [formGroup]="form">\n      <ion-item>\n        <ion-label>Correo</ion-label>\n        <ion-input type="text" name = "correo" formControlName = "correo" placeholder="Johnny@aol.com"></ion-input>\n      </ion-item>\n      <ion-item>\n          <ion-label>Contraseña</ion-label>\n          <ion-input type="password" name = "correo" formControlName = "contraseña" placeholder="......"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label>Recuérdame</ion-label>\n        <ion-checkbox>\n        </ion-checkbox>\n      </ion-item>\n      <button ion-button block round type="submit" >Iniciar Sesión</button>\n    </form>\n  </ion-row>\n  <ion-row justify-content-center align-items-center style>\n    <h6> ¿No tienes una cuenta?</h6> \n    <button ion-button clear small (click)="onLoadRegistrarPage()"> Regístrate </button>\n\n  </ion-row>\n</ion-content>'/*ion-inline-end:"/Users/siddsrinivasan/Desktop/project/codigo/src/pages/login/login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_5__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormBuilder */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegistrarPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(54);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var RegistrarPage = /** @class */ (function () {
    function RegistrarPage(navCtrl, navParams, auth, fb, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.auth = auth;
        this.toastCtrl = toastCtrl;
        this.form = fb.group({
            nombre: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            correo: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            contraseña: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]
        });
    }
    RegistrarPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RegistrarPage');
        console.log(this.form.value);
    };
    RegistrarPage.prototype.registrar_existoso = function () {
        var toast = this.toastCtrl.create({
            message: '¡Cuenta creada!',
            duration: 2000,
            position: 'bottom'
        });
        toast.present(toast);
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */]);
    };
    RegistrarPage.prototype.registrar = function () {
        var _this = this;
        var data = this.form.value;
        console.log("registering");
        console.log(data);
        this.auth.registrar({ email: data.correo, password: data.contraseña }).then(function () { return _this.registrar_existoso(); }, function (error) { return _this.registrarError = error.message; });
    };
    RegistrarPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-registrar',template:/*ion-inline-start:"/Users/siddsrinivasan/Desktop/project/codigo/src/pages/registrar/registrar.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Registrar</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n    <br>\n    <ion-row justify-content-center align-items-center style="height: 40%">\n        <img src="../assets/icon/logo.png" height= "200">\n    </ion-row>\n    <ion-row justify-content-center align-items-center style ="height: 10%">\n        <h1>UnEat</h1>\n    </ion-row>\n    <form (ngSubmit)="registrar()" [formGroup]="form">\n        <ion-list inset>\n            <ion-item>\n                <ion-label>Nombre</ion-label>\n                <ion-input type="text" name = "nombre" formControlName = "nombre" placeholder="Chris Caliente"></ion-input>\n              </ion-item>\n          <ion-item>\n            <ion-label>Correo</ion-label>\n            <ion-input type="text" name = "correo" formControlName = "correo" placeholder="Johnny@aol.com"></ion-input>\n          </ion-item>\n          <ion-item>\n              <ion-label>Contraseña</ion-label>\n              <ion-input type="password" name = "contraseña" formControlName = "contraseña"  placeholder="......"></ion-input>\n          </ion-item>\n        </ion-list>\n        <div padding-horizontal>\n          <button ion-button full round type="submit">Regístrate</button>\n        </div>\n      </form>\n</ion-content>'/*ion-inline-end:"/Users/siddsrinivasan/Desktop/project/codigo/src/pages/registrar/registrar.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ToastController */]])
    ], RegistrarPage);
    return RegistrarPage;
}());

//# sourceMappingURL=registrar.js.map

/***/ }),

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
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
 * Generated class for the MenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MenuPage = /** @class */ (function () {
    function MenuPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    MenuPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MenuPage');
    };
    MenuPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-menu',template:/*ion-inline-start:"/Users/siddsrinivasan/Desktop/project/codigo/src/pages/menu/menu.html"*/'<!--\n  Generated template for the MenuPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>menu</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding class="card-background-page">\n  <ion-fab bottom right>\n    <button ion-fab color="primary">\n      <ion-icon name="cart"></ion-icon>\n    </button>\n  </ion-fab>\n  <ion-row>\n    <ion-title>Pedir Comida</ion-title>\n  </ion-row>\n  <br>\n  <ion-row>\n      <ion-col col-6>\n          <ion-searchbar>\n            </ion-searchbar>\n      </ion-col>\n      <ion-col col-6>\n          <ion-item>\n              <ion-label>Tipo de Comida</ion-label>\n              <ion-select placeholder="Seleciona Una">\n                <ion-select-option value="b">Bebidas</ion-select-option>\n                <ion-select-option value="d">Desayunos</ion-select-option>\n                <ion-select-option value="c">Combos</ion-select-option>\n                <ion-select-option value="ba">Baguettes</ion-select-option>\n              </ion-select>\n            </ion-item>\n      </ion-col>\n  </ion-row>\n  <hr>\n</ion-content>\n'/*ion-inline-end:"/Users/siddsrinivasan/Desktop/project/codigo/src/pages/menu/menu.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], MenuPage);
    return MenuPage;
}());

//# sourceMappingURL=menu.js.map

/***/ }),

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
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
 * Generated class for the SettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SettingsPage = /** @class */ (function () {
    function SettingsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    SettingsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SettingsPage');
    };
    SettingsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-settings',template:/*ion-inline-start:"/Users/siddsrinivasan/Desktop/project/codigo/src/pages/settings/settings.html"*/'<!--\n  Generated template for the SettingsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>settings</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-content padding>\n      <ion-item>\n      <ion-label>Nombre</ion-label>\n      <ion-input></ion-input>\n      </ion-item>\n      <button ion-button block>Guardar</button>\n</ion-content>\n'/*ion-inline-end:"/Users/siddsrinivasan/Desktop/project/codigo/src/pages/settings/settings.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], SettingsPage);
    return SettingsPage;
}());

//# sourceMappingURL=settings.js.map

/***/ }),

/***/ 124:
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
webpackEmptyAsyncContext.id = 124;

/***/ }),

/***/ 167:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/cafeterias/cafeterias.module": [
		344,
		0
	],
	"../pages/login/login.module": [
		345,
		4
	],
	"../pages/menu/menu.module": [
		346,
		3
	],
	"../pages/registrar/registrar.module": [
		347,
		2
	],
	"../pages/settings/settings.module": [
		348,
		1
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 167;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 231:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(251);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 251:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(307);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_firebase_credentials__ = __webpack_require__(315);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angularfire2__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angularfire2_database__ = __webpack_require__(316);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angularfire2_auth__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_home_home__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_login_login__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_menu_menu__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_registrar_registrar__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_settings_settings__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__services_auth_service__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__services_cafeteria_service__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__angular_forms__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_10__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_registrar_registrar__["a" /* RegistrarPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_settings_settings__["a" /* SettingsPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_menu_menu__["a" /* MenuPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/cafeterias/cafeterias.module#CafeteriasPageModule', name: 'CafeteriasPage', segment: 'cafeterias', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/menu/menu.module#MenuPageModule', name: 'MenuPage', segment: 'menu', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/registrar/registrar.module#RegistrarPageModule', name: 'RegistrarPage', segment: 'registrar', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/settings/settings.module#SettingsPageModule', name: 'SettingsPage', segment: 'settings', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */],
                __WEBPACK_IMPORTED_MODULE_7_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_6__app_firebase_credentials__["a" /* FIREBASE_CONFIG */]),
                __WEBPACK_IMPORTED_MODULE_8_angularfire2_database__["a" /* AngularFireDatabaseModule */],
                __WEBPACK_IMPORTED_MODULE_17__angular_forms__["b" /* FormsModule */],
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_10__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_menu_menu__["a" /* MenuPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_registrar_registrar__["a" /* RegistrarPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_settings_settings__["a" /* SettingsPage */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_9_angularfire2_auth__["a" /* AngularFireAuth */],
                __WEBPACK_IMPORTED_MODULE_15__services_auth_service__["a" /* AuthService */],
                __WEBPACK_IMPORTED_MODULE_16__services_cafeteria_service__["a" /* CafeteriaService */],
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_1__angular_core__["i" /* CUSTOM_ELEMENTS_SCHEMA */]],
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 307:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_login_login__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_settings_settings__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_auth_service__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_cafeteria_service__ = __webpack_require__(59);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen, auth, cafeteriaService) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.auth = auth;
        this.cafeteriaService = cafeteriaService;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */], icon: "home" },
            { title: 'Cuenta', component: __WEBPACK_IMPORTED_MODULE_6__pages_settings_settings__["a" /* SettingsPage */], icon: "settings" },
            { title: 'Logout', component: __WEBPACK_IMPORTED_MODULE_5__pages_login_login__["a" /* LoginPage */], icon: "log-out" }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
            _this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_login_login__["a" /* LoginPage */];
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/siddsrinivasan/Desktop/project/codigo/src/app/app.html"*/'\n<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n          <ion-icon name="{{p.icon}}"></ion-icon> {{p.title}} \n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"/Users/siddsrinivasan/Desktop/project/codigo/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_7__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_8__services_cafeteria_service__["a" /* CafeteriaService */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 315:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FIREBASE_CONFIG; });
var FIREBASE_CONFIG = {
    apiKey: "AIzaSyCp1UkuWUmMxYWgL7-EDOxsP6Ph5LxhG2Y",
    authDomain: "uneat-3b5eb.firebaseapp.com",
    databaseURL: "https://uneat-3b5eb.firebaseio.com",
    projectId: "uneat-3b5eb",
    storageBucket: "uneat-3b5eb.appspot.com",
    messagingSenderId: "671107757113"
};
//# sourceMappingURL=firebase.credentials.js.map

/***/ }),

/***/ 53:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__ = __webpack_require__(168);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthService = /** @class */ (function () {
    function AuthService(afAuth) {
        var _this = this;
        this.afAuth = afAuth;
        afAuth.authState.subscribe(function (user) {
            _this.user = user;
        });
    }
    AuthService.prototype.registrar = function (credentials) {
        return this.afAuth.auth.createUserWithEmailAndPassword(credentials.email, credentials.password);
    };
    AuthService.prototype.signInWithEmail = function (credentials) {
        console.log('Sign in with email');
        return this.afAuth.auth.signInWithEmailAndPassword(credentials.email, credentials.password);
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["a" /* AngularFireAuth */]])
    ], AuthService);
    return AuthService;
}());

//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ 54:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_cafeteria_service__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__menu_menu__ = __webpack_require__(112);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, cafeteriaService) {
        this.navCtrl = navCtrl;
        this.cafeteriaService = cafeteriaService;
        this.cafeterias = [];
    }
    HomePage.prototype.ionViewWillEnter = function () {
        this.cafeterias = this.cafeteriaService.getCafeterias();
    };
    ;
    HomePage.prototype.empiezaPedido = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__menu_menu__["a" /* MenuPage */]);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/siddsrinivasan/Desktop/project/codigo/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Home</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-row justify-content-center align-items-center style="height: 100%">\n    <img src="../assets/icon/logo.png" height= "200">\n</ion-row>\n<ion-fab bottom right>\n  <button ion-fab color="primary" (click)="empiezaPedido()">\n    <ion-icon name="add"></ion-icon>\n  </button>\n</ion-fab>\n</ion-content>'/*ion-inline-end:"/Users/siddsrinivasan/Desktop/project/codigo/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__services_cafeteria_service__["a" /* CafeteriaService */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 59:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CafeteriaService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var CafeteriaService = /** @class */ (function () {
    function CafeteriaService() {
        this.cafeterias = [
            {
                nombre: "Sabatini",
                campus: "Leganes",
                hora_de_abrir: { hours: 9, minutes: 0 },
                hora_de_cerrar: { hours: 17, minutes: 30 },
                foto_url: "../../assets/cafeterias/leganes_sabatini.jpg"
            },
            {
                nombre: "Padre Soler",
                campus: "Leganes",
                hora_de_abrir: { hours: 9, minutes: 0 },
                hora_de_cerrar: { hours: 17, minutes: 30 },
                foto_url: "../../assets/cafeterias/leganes_padre_soler.jpg"
            },
            {
                nombre: "Padre Soler",
                campus: "Leganes",
                hora_de_abrir: { hours: 9, minutes: 0 },
                hora_de_cerrar: { hours: 17, minutes: 30 },
                foto_url: "../../assets/cafeterias/leganes_padre_soler.jpg"
            },
        ];
    }
    CafeteriaService.prototype.getCafeterias = function () {
        return this.cafeterias;
    };
    CafeteriaService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])()
    ], CafeteriaService);
    return CafeteriaService;
}());

//# sourceMappingURL=cafeteria.service.js.map

/***/ })

},[231]);
//# sourceMappingURL=main.js.map