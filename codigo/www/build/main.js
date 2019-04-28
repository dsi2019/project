webpackJsonp([8],{

/***/ 137:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PedidoService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators__ = __webpack_require__(16);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PedidoService = /** @class */ (function () {
    function PedidoService(db, afAuth) {
        var _this = this;
        this.db = db;
        this.afAuth = afAuth;
        this.afAuth.authState.subscribe(function (user) {
            if (user)
                _this.userID = user.uid;
        });
        this.pedidosRef = db.list('pedidos');
        this.pedidos = this.pedidosRef.snapshotChanges().pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["map"])(function (changes) {
            return changes.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); });
        }));
    }
    PedidoService.prototype.addPedido = function (pedido) {
        this.pedidosRef.push({
            nombre_cliente: pedido.nombre_cliente,
            comida: pedido.comida,
            userID: this.userID,
        });
    };
    PedidoService.prototype.getPedidos = function () {
        return this.db.list('pedidos');
    };
    PedidoService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */]) === "function" && _b || Object])
    ], PedidoService);
    return PedidoService;
    var _a, _b;
}());

//# sourceMappingURL=pedido.service.js.map

/***/ }),

/***/ 141:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators__ = __webpack_require__(16);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MenuService = /** @class */ (function () {
    function MenuService(db, afAuth) {
        var _this = this;
        this.db = db;
        this.afAuth = afAuth;
        this.menu = [
            { nombre: "Leche",
                precio: 0.75,
                foto: "../assets/cafeterias/leche.png",
                tipo_de_comida: "bc"
            },
            { nombre: "Infusiones",
                precio: 0.80,
                foto: "../assets/cafeterias/inf.png",
                tipo_de_comida: "bc"
            },
            { nombre: "Cafe Solo",
                precio: 0.90,
                foto: "../assets/cafeterias/cafesolo.png",
                tipo_de_comida: "bc",
            },
            /* {nombre: "Cafe de Comercio",
            precio: 0.90,
            foto: "../assets/cafeterias/comercio.jpg",
            tipo_de_comida: "bc",
            }, */
            { nombre: "Colacao",
                precio: 1.00,
                foto: "../assets/cafeterias/colacao.png",
                tipo_de_comida: "bc",
            },
            { nombre: "Cafe Capuccino",
                precio: 1.20,
                foto: "../assets/cafeterias/cafesolo.png",
                tipo_de_comida: "bc",
            },
            /* {nombre: "Desayuno y Zumo Natural",
            precio: 2.90,
            foto: "../assets/cafeterias/desayuno.jpg",
            tipo_de_comida: "bc",
            }, */
            { nombre: "Bolleria Variada",
                precio: 0.95,
                foto: "../assets/cafeterias/bolleria.png",
                tipo_de_comida: "fs",
            },
            { nombre: "Yoghurt",
                precio: 0.80,
                foto: "../assets/cafeterias/yogurt.png",
                tipo_de_comida: "bf",
            },
            { nombre: "Batidos Variados",
                precio: 1.20,
                foto: "../assets/cafeterias/batidos.png",
                tipo_de_comida: "bf",
            },
            /* {nombre: "Zumos Variados",
            precio: 1.20,
            foto: "../assets/cafeterias/zumos.jpg",
            tipo_de_comida: "bf",
            }, */
            { nombre: "Zumos de Fruta Natural",
                precio: 1.90,
                foto: "../assets/cafeterias/zumos.png",
                tipo_de_comida: "bf",
            },
            { nombre: "Coca Cola",
                precio: 0.95,
                foto: "../assets/cafeterias/cola.png",
                tipo_de_comida: "bf",
            },
            { nombre: "Fanta Naranja o Limon",
                precio: 0.95,
                foto: "../assets/cafeterias/fanta.png",
                tipo_de_comida: "bf",
            },
            /* {nombre: "Tonica",
            precio: 0.95,
            foto: "#",
            tipo_de_comida: "bf",
            }, */
            { nombre: "Trinaranjus",
                precio: 1.05,
                foto: "../assets/cafeterias/trina.png",
                tipo_de_comida: "bf",
            },
            /* {nombre: "Coca Cola",
            precio: 1.05,
            foto: "#",
            tipo_de_comida: "bf",
            }, */
            { nombre: "Nestea",
                precio: 1.40,
                foto: "../assets/cafeterias/fanta.png",
                tipo_de_comida: "bf",
            },
            { nombre: "Aquarius",
                precio: 1.40,
                foto: "../assets/cafeterias/aquarius.png",
                tipo_de_comida: "bf",
            },
            { nombre: "Cerveza",
                precio: 1.20,
                foto: "../assets/cafeterias/cerveza.png",
                tipo_de_comida: "bf",
            },
            /* {nombre: "Cerveza 1/3",
            precio: 1.30,
            foto: "#",
            tipo_de_comida: "bf",
            }, */
            { nombre: "Cerveza sin Alcohol",
                precio: 1.30,
                foto: "../assets/cafeterias/sin.png",
                tipo_de_comida: "bf",
            },
            { nombre: "Botella de Agua",
                precio: 0.60,
                foto: "../assets/cafeterias/agua.png",
                tipo_de_comida: "ag",
            },
            /*  {nombre: "Botella de Agua 1/2 l.",
             precio: 0.80,
             foto: "#",
             tipo_de_comida: "ag",
             },
             {nombre: "Botella de Agua 1 l.",
             precio: 1.20,
             foto: "#",
             tipo_de_comida: "ag",
             }, */
            { nombre: "Hamburguesa Normal",
                precio: 2.40,
                foto: "../assets/cafeterias/burguer.png",
                tipo_de_comida: "hb",
            },
            { nombre: "Hamburguesa Con Queso",
                precio: 2.70,
                foto: "../assets/cafeterias/burguer.png",
                tipo_de_comida: "hb",
            },
            { nombre: "Hamburguesa Doble",
                precio: 3.90,
                foto: "../assets/cafeterias/burguer.png",
                tipo_de_comida: "hb",
            },
            { nombre: "Hamburguesa Completa con Patatas y Refresco",
                precio: 4.90,
                foto: "../assets/cafeterias/menu.png",
                tipo_de_comida: "hb",
            },
            { nombre: "Croqueta (unidad)",
                precio: 0.40,
                foto: "../assets/cafeterias/croqueta.png",
                tipo_de_comida: "rc",
            },
            { nombre: "Patatas bravas, ali-oli",
                precio: 1.55,
                foto: "../assets/cafeterias/bravas.png",
                tipo_de_comida: "rc",
            },
            /* {nombre: "Empanada",
            precio: 1.90,
            foto: "#",
            tipo_de_comida: "rc",
            }, */
            { nombre: "Pizza",
                precio: 1.90,
                foto: "../assets/cafeterias/pizza.png",
                tipo_de_comida: "rc",
            },
            { nombre: "Ensalada Mixta",
                precio: 2.75,
                foto: "../assets/cafeterias/ensalada.png",
                tipo_de_comida: "rc",
            },
            { nombre: "Queso Manchego",
                precio: 3.50,
                foto: "../assets/cafeterias/queso.png",
                tipo_de_comida: "rc",
            },
            { nombre: "Jamon Serrano",
                precio: 3.50,
                foto: "../assets/cafeterias/jamon.png",
                tipo_de_comida: "rc",
            },
            { nombre: "Plato Combinado Reducido",
                precio: 4.55,
                foto: "../assets/cafeterias/plato.png",
                tipo_de_comida: "pc",
            },
            { nombre: "Plato Combinado Completo",
                precio: 5.20,
                foto: "../assets/cafeterias/plato.png",
                tipo_de_comida: "pc",
            },
            { nombre: "Plato Combinado Vegetariano",
                precio: 5.20,
                foto: "../assets/cafeterias/plato.png",
                tipo_de_comida: "pc",
            },
            { nombre: "Croissant Salado - Jamon York",
                precio: 1.50,
                foto: "../assets/cafeterias/cro.png",
                tipo_de_comida: "cs",
            },
            { nombre: "Croissant Salado - Embutidos",
                precio: 1.50,
                foto: "../assets/cafeterias/cro.png",
                tipo_de_comida: "cs",
            },
            { nombre: "Croissant Salado - Queso",
                precio: 1.50,
                foto: "../assets/cafeterias/cro.png",
                tipo_de_comida: "cs",
            },
            { nombre: "Croissant Salado - Jamon Serrano",
                precio: 1.60,
                foto: "../assets/cafeterias/cro.png",
                tipo_de_comida: "cs",
            },
            { nombre: "Croissant Salado - Atun",
                precio: 1.60,
                foto: "../assets/cafeterias/cro.png",
                tipo_de_comida: "cs",
            },
            { nombre: "Croissant Salado - Vegetal",
                precio: 1.60,
                foto: "../assets/cafeterias/cro.png",
                tipo_de_comida: "cs",
            },
            { nombre: "Croissant Salado - Vegetal con Queso",
                precio: 1.85,
                foto: "../assets/cafeterias/cro.png",
                tipo_de_comida: "cs",
            },
            { nombre: "Sandwiches - Jamon York",
                precio: 1.35,
                foto: "../assets/cafeterias/san.png",
                tipo_de_comida: "sd",
            },
            { nombre: "Sandwiches - Queso",
                precio: 1.35,
                foto: "../assets/cafeterias/san.png",
                tipo_de_comida: "sd",
            },
            { nombre: "Sandwiches - Mixto",
                precio: 1.65,
                foto: "../assets/cafeterias/san.png",
                tipo_de_comida: "sd",
            },
            { nombre: "Sandwiches - Vegetal",
                precio: 1.65,
                foto: "../assets/cafeterias/san.png",
                tipo_de_comida: "sd",
            },
            /*  {nombre: "Sandwiches - Empaquetados",
             precio: 1.60,
             foto: "#",
             tipo_de_comida: "sd",
             }, */
            { nombre: "Sandwiches - Mixto con Huevo",
                precio: 2.05,
                foto: "../assets/cafeterias/san.png",
                tipo_de_comida: "sd",
            },
            { nombre: "Sandwiches - Vegetal con Huevo",
                precio: 2.05,
                foto: "../assets/cafeterias/san.png",
                tipo_de_comida: "sd",
            },
            /*  {nombre: "Sandwiches - Vegetal Caliente",
             precio: 2.05,
             foto: "#",
             tipo_de_comida: "sd",
             }, */
            /*  {nombre: "Baguette 1 Componente",
             precio: 1.95,
             foto: "#",
             tipo_de_comida: "bg",
             },
             {nombre: "Baguette 2 Componentes",
             precio: 2.30,
             foto: "#",
             tipo_de_comida: "bg",
             },
             {nombre: "Baguette Caliente",
             precio: 2.35,
             foto: "#",
             tipo_de_comida: "bg",
             },
             {nombre: "Baguette Especial",
             precio: 2.70,
             foto: "#",
             tipo_de_comida: "bg",
             },  */
            { nombre: "Bocadillo Chorizo/Salchichón/Queso",
                precio: 1.35,
                foto: "../assets/cafeterias/boc.png",
                tipo_de_comida: "bd",
            },
            { nombre: "Bocadillo Tortilla Española",
                precio: 1.35,
                foto: "../assets/cafeterias/boc.png",
                tipo_de_comida: "bd",
            },
            { nombre: "Bocadillo Tortilla Francesa",
                precio: 1.35,
                foto: "../assets/cafeterias/boc.png",
                tipo_de_comida: "bd",
            },
            { nombre: "Bocadillo Atún",
                precio: 1.70,
                foto: "../assets/cafeterias/boc.png",
                tipo_de_comida: "bd",
            },
            { nombre: "Bocadillo Bacon",
                precio: 1.70,
                foto: "../assets/cafeterias/boc.png",
                tipo_de_comida: "bd",
            },
            { nombre: "Bocadillo Lomo",
                precio: 1.85,
                foto: "../assets/cafeterias/boc.png",
                tipo_de_comida: "bd",
            },
            { nombre: "Bocadillo Queso Manchego",
                precio: 1.85,
                foto: "../assets/cafeterias/boc.png",
                tipo_de_comida: "bd",
            },
            { nombre: "Bocadillo Jamón Serrano",
                precio: 1.85,
                foto: "../assets/cafeterias/boc.png",
                tipo_de_comida: "bd",
            },
            { nombre: "Bocadillo Chorizo/Salchichón con Queso",
                precio: 1.65,
                foto: "../assets/cafeterias/boc.png",
                tipo_de_comida: "bd",
            },
            /* {nombre: "Pulga Chorizo",
            precio: 1.00,
            foto: "#",
            tipo_de_comida: "pm",
            },
            {nombre: "Pulga Tortilla Espanola",
            precio: 1.00,
            foto: "#",
            tipo_de_comida: "pm",
            },
            {nombre: "Pulga Pincho de Tortilla",
            precio: 1.00,
            foto: "#",
            tipo_de_comida: "pm",
            },
            {nombre: "Pulga Salchichon",
            precio: 1.00,
            foto: "#",
            tipo_de_comida: "pm",
            },
            {nombre: "Pulga Bonito",
            precio: 1.20,
            foto: "#",
            tipo_de_comida: "pm",
            },
            {nombre: "Pulga Queso Manchego",
            precio: 1.20,
            foto: "#",
            tipo_de_comida: "pm",
            },
            {nombre: "Pulga Jamon Serrano",
            precio: 1.20,
            foto: "#",
            tipo_de_comida: "pm",
            }, */
            { nombre: "Pieza de Fruta",
                precio: 0.60,
                foto: "../assets/cafeterias/fruta.png",
                tipo_de_comida: "fs",
            },
            { nombre: "Vasito de Fruta Troceada",
                precio: 1.00,
                foto: "../assets/cafeterias/vasi.png",
                tipo_de_comida: "fs",
            },
            { nombre: "Sobre de Mayonesa, Mostaza, Ketchup, Duo de Aceite y Vinagre",
                precio: 0.25,
                foto: "../assets/cafeterias/sobre.png",
                tipo_de_comida: "sup",
            },
            { nombre: "Pan",
                precio: 0.25,
                foto: "../assets/cafeterias/pan.png",
                tipo_de_comida: "sup",
            },
            { nombre: "Bolsa de Cubiertos",
                precio: 0.25,
                foto: "../assets/cafeterias/bolsa.png",
                tipo_de_comida: "sup",
            },
        ];
        this.afAuth.authState.subscribe(function (user) {
            if (user)
                _this.userID = user.uid;
        });
        this.mis_articulosRef = db.list('mis_articulos');
        this.mis_articulos = this.mis_articulosRef.snapshotChanges().pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["map"])(function (changes) {
            return changes.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); });
        }));
    }
    MenuService.prototype.getMenu = function () {
        return this.menu;
    };
    MenuService.prototype.addArticuloFavorito = function (value) {
        this.mis_articulosRef.push({
            nombre: value.nombre,
            precio: value.precio,
            foto: value.foto,
            tipo_de_comida: value.tipo_de_comida,
            userID: this.userID
        });
    };
    MenuService.prototype.removeArticuloFavorito = function (value) {
        this.mis_articulosRef.remove(value.key);
    };
    MenuService.prototype.getArticulosFavoritos = function () {
        var _this = this;
        if (!this.userID)
            return;
        return this.db.list("mis_articulos", function (ref) {
            var q = ref.orderByChild("userID").equalTo(_this.userID);
            return q;
        });
    };
    MenuService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */]])
    ], MenuService);
    return MenuService;
}());

//# sourceMappingURL=menu.service.js.map

/***/ }),

/***/ 142:
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

/***/ }),

/***/ 143:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CuentaService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__(50);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// import { _ParseAST } from "@angular/compiler";
var CuentaService = /** @class */ (function () {
    function CuentaService(db, afAuth) {
        var _this = this;
        this.db = db;
        this.afAuth = afAuth;
        this.afAuth.authState.subscribe(function (user) {
            if (user)
                _this.userID = user.uid;
        });
        this.cuentasRef = db.list('cuentas');
        this.cuentas = this.cuentasRef.snapshotChanges().pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["map"])(function (changes) {
            return changes.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); });
        }));
    }
    ;
    CuentaService.prototype.addCuenta = function (value) {
        this.cuentasRef.push({
            nombre: value.nombre,
            email: value.email,
            iban: value.iban,
            telefono: value.telefono,
            userID: this.userID
        });
    };
    CuentaService.prototype.getCuenta = function () {
        var _this = this;
        if (!this.userID)
            return;
        return this.db.list('cuentas', function (ref) {
            var q = ref.orderByChild("userID").equalTo(_this.userID);
            return q;
            // var defer = $q.defer();
            // let ref= x.orderByChild("userID").equalTo(this.userID);
            // // return q;
            // ref.once("value",function(copySnap){
            //     if(!copySnap.exists()){
            //       defer.reject(null);
            //     }else{
            //       var listObj = copySnap.val();
            //       var list = Object.keys(listObj).map(function(copy){
            //           return listObj[copy]});
            //       defer.resolve(list[0]);
            //     }
            //   })
            //   return defer.promise;
        });
    };
    CuentaService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["a" /* AngularFireAuth */]])
    ], CuentaService);
    return CuentaService;
}());

//# sourceMappingURL=cuenta.service.js.map

/***/ }),

/***/ 167:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetallesproductoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__carrita_carrita__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(19);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DetallesproductoPage = /** @class */ (function () {
    function DetallesproductoPage(navCtrl, navParams, fb) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.articulo = navParams.get('item');
        this.form = fb.group({
            selector: 1
        });
    }
    DetallesproductoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DetallesproductoPage'); // DEBUG ONLY
    };
    DetallesproductoPage.prototype.addToCarrito = function (articulo) {
        var data = this.form.value;
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__carrita_carrita__["a" /* CarritaPage */], { item: articulo, item2: data.selector });
    };
    DetallesproductoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-detallesproducto',template:/*ion-inline-start:"/Users/mathiasmaximilianoamarillolemos/uc3m/dsi/Projecto/ProjectFinal/codigo/src/pages/detallesproducto/detallesproducto.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Detalles de Producto</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n    <ion-card>\n        <ion-card-header>\n          <ion-card-title>{{articulo.nombre}}</ion-card-title>\n        </ion-card-header>\n        <ion-card-content>\n            <form (ngSubmit)="addToCarrito(articulo)" [formGroup]="form">\n                <ion-list >\n                  <ion-row justify-content-center align-items-center style="height: 100%">\n                      <img src={{articulo.foto}} height= "200">\n                  </ion-row>\n                  <ion-item>\n                    <ion-label>  </ion-label >\n                  </ion-item>\n                  <ion-item>\n                    <ion-label> {{articulo.precio}}€</ion-label >\n                  </ion-item>\n                  <ion-item >\n                    <ion-label>Cantidad</ion-label>\n                    <ion-select formControlName = "selector">\n                      <ion-option value="1">1</ion-option>\n                      <ion-option value="2">2</ion-option>\n                      <ion-option value="3">3</ion-option>\n                      <ion-option value="4">4</ion-option>\n                      <ion-option value="5">5</ion-option>\n                      <ion-option value="6">6</ion-option>\n                    </ion-select>\n                  </ion-item>\n                </ion-list >\n                <button ion-button full round block type = "submit" > Añadir a su carrito </button >\n                </form >\n        </ion-card-content>\n      </ion-card>\n  \n</ion-content>\n'/*ion-inline-end:"/Users/mathiasmaximilianoamarillolemos/uc3m/dsi/Projecto/ProjectFinal/codigo/src/pages/detallesproducto/detallesproducto.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */]) === "function" && _c || Object])
    ], DetallesproductoPage);
    return DetallesproductoPage;
    var _a, _b, _c;
}());

//# sourceMappingURL=detallesproducto.js.map

/***/ }),

/***/ 168:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeStaffPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_pedido_service__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_login__ = __webpack_require__(92);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
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
 * Generated class for the HomeStaffPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var HomeStaffPage = /** @class */ (function () {
    function HomeStaffPage(navCtrl, navParams, pedidoService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.pedidoService = pedidoService;
    }
    HomeStaffPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HomeStaffPage');
    };
    HomeStaffPage.prototype.ionViewWillEnter = function () {
        this.pedidos$ = this.pedidoService
            .getPedidos()
            .snapshotChanges()
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["map"])(function (changes) {
            return changes.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); });
        }));
        this.pedidos$.subscribe(function (snapshotChanges) {
            snapshotChanges.forEach(function (snapshot) { return console.log(snapshot.nombre_cliente); });
        });
    };
    ;
    HomeStaffPage.prototype.onLogOut = function () {
        console.log("SALIENDO DE ADMINISTRADOR---->");
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__login_login__["a" /* LoginPage */]);
    };
    HomeStaffPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-home-staff',template:/*ion-inline-start:"/Users/mathiasmaximilianoamarillolemos/uc3m/dsi/Projecto/ProjectFinal/codigo/src/pages/home-staff/home-staff.html"*/'\n<ion-header>\n  <ion-navbar>\n    <ion-title item-left>Pedidos Pendientes</ion-title>\n    <button ion-fab (click)="onLogOut()" style="zoom: 0.8"><ion-icon item-right name="log-out"></ion-icon></button>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n      <ion-list>\n          <ion-item *ngFor="let pedido of pedidos$| async">\n            <ion-card>\n                <ion-card-header>CLIENTE: {{pedido?.nombre_cliente}}</ion-card-header>\n                <ion-card>    \n                  <ion-card-content>\n                      <ion-list>\n                          <ion-item *ngFor="let articulo of pedido.comida.articulos">    \n                              <ion-thumbnail item-right>\n                                <img [src]= "articulo?.foto"/>\n                              </ion-thumbnail>\n                              {{articulo.nombre}}\n                      </ion-item>\n                      </ion-list>\n                    </ion-card-content>\n                    </ion-card>\n                <button color="success" ion-button full round  type = "submit" >Aceptar</button>\n                <button color="danger" ion-button full round  type = "" >Rechazar</button>\n            </ion-card>\n          </ion-item>\n        </ion-list>\n\n  </ion-content>\n  \n'/*ion-inline-end:"/Users/mathiasmaximilianoamarillolemos/uc3m/dsi/Projecto/ProjectFinal/codigo/src/pages/home-staff/home-staff.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_pedido_service__["a" /* PedidoService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_pedido_service__["a" /* PedidoService */]) === "function" && _c || Object])
    ], HomeStaffPage);
    return HomeStaffPage;
    var _a, _b, _c;
}());

//# sourceMappingURL=home-staff.js.map

/***/ }),

/***/ 169:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegistrarPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__login_login__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_cuenta_service__ = __webpack_require__(143);
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
    function RegistrarPage(navCtrl, navParams, auth, fb, toastCtrl, cuentaService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.auth = auth;
        this.toastCtrl = toastCtrl;
        this.cuentaService = cuentaService;
        this.form = fb.group({
            nombre: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            correo: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            contraseña: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]
        });
    }
    RegistrarPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RegistrarPage');
    };
    RegistrarPage.prototype.onLoadLoginPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__login_login__["a" /* LoginPage */]);
    };
    RegistrarPage.prototype.registrar_existoso = function (nombre, email) {
        console.log("registration success");
        this.cuentaService.addCuenta({ nombre: nombre,
            email: email,
            telefono: "",
            iban: ""
        });
        var toast = this.toastCtrl.create({
            message: '¡Cuenta creada!',
            duration: 2000,
            position: 'bottom'
        });
        toast.present(toast);
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */]);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__login_login__["a" /* LoginPage */]);
    };
    RegistrarPage.prototype.registrar = function () {
        var _this = this;
        var data = this.form.value;
        this.auth.registrar({ email: data.correo, password: data.contraseña }).then(function () { return _this.registrar_existoso(data.nombre, data.correo); }, function (error) {
            var errorCode = error.code;
            var errorMessage = error.message;
            if (errorCode == 'auth/weak-password') {
                alert('The password is too weak.');
            }
            else {
                alert(errorMessage);
            }
        });
        this.navCtrl.pop();
    };
    RegistrarPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-registrar',template:/*ion-inline-start:"/Users/mathiasmaximilianoamarillolemos/uc3m/dsi/Projecto/ProjectFinal/codigo/src/pages/registrar/registrar.html"*/'<ion-header>\n  <ion-navbar hideBackButton>\n    <ion-title>Registrar</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n    <br>\n    <ion-row justify-content-center align-items-center style="height: 40%">\n        <img src="../assets/icon/logo.png" height= "200">\n    </ion-row>\n    <ion-row justify-content-center align-items-center>\n        <h1>UnEat</h1>\n    </ion-row>\n\n    <ion-row justify-content-center align-tems-center>\n      <form (ngSubmit)="registrar()" [formGroup]="form">\n        <ion-list inset>\n          <ion-item>\n            <ion-label>Nombre</ion-label>\n            <ion-input type="text" name = "nombre" formControlName = "nombre" placeholder="Chris Caliente"></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-label>Correo</ion-label>\n            <ion-input type="text" name = "correo" formControlName = "correo" placeholder="Johnny@aol.com"></ion-input>\n          </ion-item>\n          <ion-item>\n              <ion-label>Contraseña</ion-label>\n              <ion-input type="password" name = "contraseña" formControlName = "contraseña"  placeholder="......"></ion-input>\n          </ion-item>\n        </ion-list>\n        <div padding-horizontal>\n          <button ion-button full round type="submit">Regístrate</button>\n        </div>\n      </form>\n    </ion-row>\n    <ion-row justify-content-center align-items-center style>\n      <h6> ¿Tienes una cuenta?\n      <button ion-button clear small (click)="onLoadLoginPage()"> Log In </button>\n      </h6>\n    </ion-row>\n</ion-content>'/*ion-inline-end:"/Users/mathiasmaximilianoamarillolemos/uc3m/dsi/Projecto/ProjectFinal/codigo/src/pages/registrar/registrar.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_6__services_cuenta_service__["a" /* CuentaService */]])
    ], RegistrarPage);
    return RegistrarPage;
}());

//# sourceMappingURL=registrar.js.map

/***/ }),

/***/ 170:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_menu_service__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__carrita_carrita__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__detallesproducto_detallesproducto__ = __webpack_require__(167);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MenuPage = /** @class */ (function () {
    function MenuPage(navCtrl, navParams, menuService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.menuService = menuService;
        this.menu = [];
        this.displayMenu = [];
    }
    MenuPage.prototype.ionViewWillEnter = function () {
        this.menu = this.menuService.getMenu();
        this.displayMenu = this.menu;
    };
    MenuPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MenuPage');
    };
    MenuPage.prototype.onAddFavorito = function (value) {
        this.menuService.addArticuloFavorito(value);
    };
    MenuPage.prototype.aCarrita = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__carrita_carrita__["a" /* CarritaPage */]);
    };
    MenuPage.prototype.aDetalles = function (articulo) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__detallesproducto_detallesproducto__["a" /* DetallesproductoPage */], { item: articulo });
    };
    MenuPage.prototype.onSearch = function (event) {
        this.displayMenu = [];
        for (var i = 0; i < this.menu.length; i++) {
            if (this.menu[i].nombre.toLowerCase().includes(event.target.value)) {
                this.displayMenu.push(this.menu[i]);
            }
            ;
        }
        if (event.target.value === "")
            this.displayMenu = this.menu;
    };
    MenuPage.prototype.onChange = function (event) {
        this.displayMenu = [];
        for (var i = 0; i < this.menu.length; i++) {
            if (this.menu[i].tipo_de_comida === event) {
                this.displayMenu.push(this.menu[i]);
            }
            ;
        }
        if (event === "")
            this.displayMenu = this.menu;
    };
    MenuPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-menu',template:/*ion-inline-start:"/Users/mathiasmaximilianoamarillolemos/uc3m/dsi/Projecto/ProjectFinal/codigo/src/pages/menu/menu.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Menu</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding class="card-background-page">\n  <ion-fab bottom right>\n    <button ion-fab color="primary" (click) = "aCarrita()">\n      <ion-icon name="cart"></ion-icon>\n    </button>\n  </ion-fab>\n  <ion-row>\n    <ion-title>Pedir Comida</ion-title>\n  </ion-row>\n  <br>\n  <ion-row>\n      <ion-col col-6>\n        <ion-searchbar (ionInput)="onSearch($event)" placeholder=" "></ion-searchbar>\n      </ion-col>\n      <ion-col col-6>\n        <ion-item class="filtro">\n          <ion-label>Filtrar</ion-label>\n          <ion-select (ionChange)="onChange($event)">\n            <ion-option value="" selected>Todos</ion-option>\n            <ion-option value="bc">Bebidas Calientes</ion-option>\n            <ion-option value="bf">Bebidas Frias</ion-option>\n            <ion-option value="ag">Agua</ion-option>\n            <ion-option value="hb">Hamburguesas</ion-option>\n            <ion-option value="rc">Raciones</ion-option>\n            <ion-option value="pc">Platos Combinados</ion-option>\n            <ion-option value="cs">Croissant Salados</ion-option>\n            <ion-option value="sd">Sandwiches</ion-option>\n            <ion-option value="bg">Baguettes</ion-option>\n            <ion-option value="bd">Bocadillos</ion-option>\n            <ion-option value="pm">Pulgas y Montados</ion-option>\n            <ion-option value="fs">Fruta y Dulces</ion-option>\n            <ion-option value="sup">Suplementos</ion-option>\n            <ion-option value="vl">Vinos y Licores</ion-option>\n          </ion-select>\n        </ion-item>\n      </ion-col>\n  </ion-row>\n  <hr>\n  <ion-list>\n      <ion-grid>\n          <ion-item *ngFor="let articulo of displayMenu">\n              <ion-thumbnail item-right>\n                  <img [src]= "articulo?.foto"/>\n              </ion-thumbnail>\n              <ion-row>\n                  <button (click) = "onAddFavorito(articulo)" style="background: transparent"> \n                    <ion-icon name="heart-outline" class="heart"></ion-icon>\n                  </button>\n                  <ion-col col-8>\n                    <button (click)= "aDetalles(articulo)">\n                      <h5>{{articulo.nombre}}</h5>\n                      <p>{{articulo.precio | number:\'1.2-2\'}}€</p>\n                    </button>\n                  </ion-col>\n            </ion-row>\n          </ion-item>\n      </ion-grid>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/mathiasmaximilianoamarillolemos/uc3m/dsi/Projecto/ProjectFinal/codigo/src/pages/menu/menu.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__services_menu_service__["a" /* MenuService */]])
    ], MenuPage);
    return MenuPage;
}());

//# sourceMappingURL=menu.js.map

/***/ }),

/***/ 201:
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
webpackEmptyAsyncContext.id = 201;

/***/ }),

/***/ 243:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/carrita/carrita.module": [
		520,
		7
	],
	"../pages/detallesproducto/detallesproducto.module": [
		521,
		6
	],
	"../pages/favoritos/favoritos.module": [
		522,
		5
	],
	"../pages/home-staff/home-staff.module": [
		523,
		4
	],
	"../pages/login/login.module": [
		524,
		3
	],
	"../pages/menu/menu.module": [
		525,
		2
	],
	"../pages/registrar/registrar.module": [
		526,
		1
	],
	"../pages/settings/settings.module": [
		527,
		0
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
webpackAsyncContext.id = 243;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 244:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListaCarrito; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ListaCarrito = /** @class */ (function () {
    function ListaCarrito() {
        this.total = 0.0;
        this.carrito = [];
        this.cantidad = [];
    }
    ListaCarrito.prototype.getCarritoItems = function () {
        return this.carrito;
    };
    ListaCarrito.prototype.getCarritoCantidades = function () {
        return this.cantidad;
    };
    ListaCarrito.prototype.addCarritoItem = function (articulo, cantidad) {
        this.total = this.total + articulo.precio;
        this.carrito.push(articulo);
        this.cantidad.push(cantidad);
    };
    ListaCarrito.prototype.removeCarritoItem = function (articuloIndex) {
        this.carrito.splice(articuloIndex, 1); // borramos el articulo
        this.cantidad.splice(articuloIndex, 1); // borramos la cantidad correspondiente de ese articulo
    };
    // calcular el precio total de todos los productos
    ListaCarrito.prototype.getTotalPrice = function () {
        this.total = 0;
        var aux = this.carrito.length;
        var i = 0;
        while (i < aux) {
            this.total = this.total + this.carrito[i].precio * this.cantidad[i];
            i++;
        }
        console.log(this.carrito.length); // DEBUG ONLY
        return this.total.toFixed(2);
    };
    ListaCarrito = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], ListaCarrito);
    return ListaCarrito;
}());

//# sourceMappingURL=carrita.service.js.map

/***/ }),

/***/ 302:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(303);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(426);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 426:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(510);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(299);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__ = __webpack_require__(301);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_firebase_credentials__ = __webpack_require__(518);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angularfire2__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angularfire2_database__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angularfire2_auth__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_carrita_carrita__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_favoritos_favoritos__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_home_home__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_login_login__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_menu_menu__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_registrar_registrar__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_settings_settings__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__services_auth_service__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__services_cafeteria_service__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__ionic_native_clipboard_ngx__ = __webpack_require__(519);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__angular_forms__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__services_menu_service__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__services_carrita_service__ = __webpack_require__(244);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_detallesproducto_detallesproducto__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__services_cuenta_service__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__services_pedido_service__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_home_staff_home_staff__ = __webpack_require__(168);
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
                __WEBPACK_IMPORTED_MODULE_10__pages_carrita_carrita__["a" /* CarritaPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_favoritos_favoritos__["a" /* FavoritosPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_registrar_registrar__["a" /* RegistrarPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_settings_settings__["a" /* SettingsPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_menu_menu__["a" /* MenuPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_detallesproducto_detallesproducto__["a" /* DetallesproductoPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_home_staff_home_staff__["a" /* HomeStaffPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/carrita/carrita.module#CarritaPageModule', name: 'CarritaPage', segment: 'carrita', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/detallesproducto/detallesproducto.module#DetallesproductoPageModule', name: 'DetallesproductoPage', segment: 'detallesproducto', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/favoritos/favoritos.module#FavoritosPageModule', name: 'FavoritosPage', segment: 'favoritos', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home-staff/home-staff.module#HomeStaffPageModule', name: 'HomeStaffPage', segment: 'home-staff', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/menu/menu.module#MenuPageModule', name: 'MenuPage', segment: 'menu', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/registrar/registrar.module#RegistrarPageModule', name: 'RegistrarPage', segment: 'registrar', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/settings/settings.module#SettingsPageModule', name: 'SettingsPage', segment: 'settings', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */],
                __WEBPACK_IMPORTED_MODULE_7_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_6__app_firebase_credentials__["a" /* FIREBASE_CONFIG */]),
                __WEBPACK_IMPORTED_MODULE_8_angularfire2_database__["b" /* AngularFireDatabaseModule */],
                __WEBPACK_IMPORTED_MODULE_20__angular_forms__["b" /* FormsModule */],
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_10__pages_carrita_carrita__["a" /* CarritaPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_favoritos_favoritos__["a" /* FavoritosPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_menu_menu__["a" /* MenuPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_registrar_registrar__["a" /* RegistrarPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_settings_settings__["a" /* SettingsPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_detallesproducto_detallesproducto__["a" /* DetallesproductoPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_home_staff_home_staff__["a" /* HomeStaffPage */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_9_angularfire2_auth__["a" /* AngularFireAuth */],
                __WEBPACK_IMPORTED_MODULE_17__services_auth_service__["a" /* AuthService */],
                __WEBPACK_IMPORTED_MODULE_18__services_cafeteria_service__["a" /* CafeteriaService */],
                __WEBPACK_IMPORTED_MODULE_21__services_menu_service__["a" /* MenuService */],
                __WEBPACK_IMPORTED_MODULE_24__services_cuenta_service__["a" /* CuentaService */],
                __WEBPACK_IMPORTED_MODULE_25__services_pedido_service__["a" /* PedidoService */],
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_22__services_carrita_service__["a" /* ListaCarrito */],
                __WEBPACK_IMPORTED_MODULE_19__ionic_native_clipboard_ngx__["a" /* Clipboard */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_1__angular_core__["i" /* CUSTOM_ELEMENTS_SCHEMA */]],
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 510:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(299);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(301);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_favoritos_favoritos__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_login_login__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_settings_settings__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_auth_service__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_cafeteria_service__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_carrita_carrita__ = __webpack_require__(70);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








// services



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
            { title: ' Home', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */], icon: "home" },
            { title: ' Favoritos', component: __WEBPACK_IMPORTED_MODULE_5__pages_favoritos_favoritos__["a" /* FavoritosPage */], icon: "heart-outline" },
            { title: ' Cuenta', component: __WEBPACK_IMPORTED_MODULE_7__pages_settings_settings__["a" /* SettingsPage */], icon: "settings" },
            { title: ' Logout', component: __WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginPage */], icon: "log-out" },
            { title: ' Shopping Cart', component: __WEBPACK_IMPORTED_MODULE_10__pages_carrita_carrita__["a" /* CarritaPage */], icon: "cart" }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
            _this.rootPage = __WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginPage */];
        });
    };
    MyApp.prototype.openPage = function (page) {
        this.nav.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/mathiasmaximilianoamarillolemos/uc3m/dsi/Projecto/ProjectFinal/codigo/src/app/app.html"*/'\n<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n          <ion-icon name="{{p.icon}}"></ion-icon> {{p.title}} \n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"/Users/mathiasmaximilianoamarillolemos/uc3m/dsi/Projecto/ProjectFinal/codigo/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_8__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_9__services_cafeteria_service__["a" /* CafeteriaService */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 518:
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

/***/ 69:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__ = __webpack_require__(50);
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

/***/ 70:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CarritaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_carrita_service__ = __webpack_require__(244);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_pedido_service__ = __webpack_require__(137);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CarritaPage = /** @class */ (function () {
    function CarritaPage(navCtrl, navParams, listaCarrito, pedidoService, alertController) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.listaCarrito = listaCarrito;
        this.pedidoService = pedidoService;
        this.alertController = alertController;
        this.carrito = [];
        this.precioTotal = 0.0;
        this.aux = null;
        this.cantidad_nuevo = 0;
        this.cantidad = [];
        this.aux = navParams.get('item');
        this.cantidad_nuevo = navParams.get('item2');
    }
    CarritaPage.prototype.ionViewDidLoad = function () {
        if (this.aux != null)
            this.carrito = this.listaCarrito.addCarritoItem(this.aux, this.cantidad_nuevo); // VOID TYPE
    };
    CarritaPage.prototype.ionViewWillEnter = function () {
        this.precioTotal = this.listaCarrito.getTotalPrice();
        this.carrito = this.listaCarrito.getCarritoItems();
        this.cantidad = this.listaCarrito.getCarritoCantidades();
    };
    CarritaPage.prototype.removeCarritaItem = function (articuloIndex) {
        this.listaCarrito.removeCarritoItem(articuloIndex);
    };
    CarritaPage.prototype.isDisabled = function () {
        return (this.carrito.length == 0);
    };
    CarritaPage.prototype.realizarPedido = function () {
        if (this.isDisabled()) {
            var alert_1 = this.alertController.create({
                title: 'Carrita Basia',
                subTitle: 'Para comprar algo tienes que añadir algo a su carrita',
                buttons: ['OK']
            });
            alert_1.present();
        }
        else {
            var pedido = { nombre_cliente: "Introduce Usuario", comida: { articulos: this.carrito, cantidad: this.cantidad } };
            this.pedidoService.addPedido(pedido);
            var alert_2 = this.alertController.create({
                title: 'Pedido Realizado',
                subTitle: 'En breve recibirás una notificación cuando tu pedido esté listo',
                buttons: ['OK']
            });
            alert_2.present();
            this.navCtrl.popToRoot();
        }
    };
    CarritaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-carrita',template:/*ion-inline-start:"/Users/mathiasmaximilianoamarillolemos/uc3m/dsi/Projecto/ProjectFinal/codigo/src/pages/carrita/carrita.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Carrito</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-card>\n      <ion-card-header>\n        <ion-card-title>Articulos en mi carrito</ion-card-title>\n      </ion-card-header>\n      <ion-card-content>\n          <ion-list>\n              <ion-item *ngFor="let articulo of carrito; let i = index ">\n                <ion-thumbnail item-right>\n                  <img [src]= "articulo?.foto"/>\n                </ion-thumbnail>\n                  {{articulo.nombre}}\n                  <p>x {{cantidad[i]}}</p>\n                  <p>{{articulo.precio}}€</p>\n                  <button item-right (click)="removeCarritaItem(i)" style="background: transparent; zoom: 1.5;">\n                      <ion-icon name="trash" ></ion-icon>\n                  </button>\n              </ion-item>\n           </ion-list>\n      </ion-card-content>\n    </ion-card>\n    <ion-card>\n        <ion-card-header>\n          <ion-card-title>Total: {{precioTotal | number:\'1.2-2\'}}€</ion-card-title>\n        </ion-card-header>\n    </ion-card>\n    <ion-card>\n      <ion-card-content>\n        <ion-card-title>\n            Método de pago seleccionado\n          </ion-card-title>\n          <ion-row align-items: center>\n            <ion-col col-4>\n                <ion-icon name = "card" style="zoom:2.0;">\n                  </ion-icon><h3>   ******** 4424</h3>\n            </ion-col>\n            <ion-col col-8>\n                \n            </ion-col>\n          </ion-row>\n      </ion-card-content>\n    </ion-card>\n    <ion-list>\n      <button ion-button id = "pagar"  block type = "submit" (click)="realizarPedido()"> Confirmar Compra</button >\n      </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/mathiasmaximilianoamarillolemos/uc3m/dsi/Projecto/ProjectFinal/codigo/src/pages/carrita/carrita.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__services_carrita_service__["a" /* ListaCarrito */],
            __WEBPACK_IMPORTED_MODULE_3__services_pedido_service__["a" /* PedidoService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], CarritaPage);
    return CarritaPage;
}());

//# sourceMappingURL=carrita.js.map

/***/ }),

/***/ 86:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_cafeteria_service__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__menu_menu__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__favoritos_favoritos__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__settings_settings__ = __webpack_require__(93);
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
    HomePage.prototype.showFavoritos = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__favoritos_favoritos__["a" /* FavoritosPage */]);
    };
    HomePage.prototype.showSettings = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__settings_settings__["a" /* SettingsPage */]);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/mathiasmaximilianoamarillolemos/uc3m/dsi/Projecto/ProjectFinal/codigo/src/pages/home/home.html"*/'<link href="https://fonts.googleapis.com/css?family=Open+Sans+Condensed:300" rel="stylesheet">\n<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous">\n\n<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Home</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content no-bounce>\n  <h1>UnEat</h1>\n  <ion-row justify-content-center align-items-center style="height: 50%">\n    <img src="../assets/icon/logo.png" height= "200">\n  </ion-row>\n\n  <div align="center">\n    \n      <button ion-button (click)="empiezaPedido()" class="botones add">\n        <i class="fas fa-cart-plus"></i>\n      </button>\n  \n      <button ion-button (click)="showFavoritos()" class="botones love">\n          <i class="far fa-heart"></i>\n      </button>\n\n      <button ion-button (click)="showSettings()" class="botones settings">\n          <i class="fas fa-cog"></i>\n      </button>\n\n  </div>\n\n<!-- <ion-fab bottom right>\n  <button ion-fab color="primary" (click)="empiezaPedido()">\n    <ion-icon name="add"></ion-icon>\n  </button>\n</ion-fab> -->\n</ion-content>'/*ion-inline-end:"/Users/mathiasmaximilianoamarillolemos/uc3m/dsi/Projecto/ProjectFinal/codigo/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__services_cafeteria_service__["a" /* CafeteriaService */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 91:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FavoritosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_menu_service__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators__ = __webpack_require__(16);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FavoritosPage = /** @class */ (function () {
    function FavoritosPage(navCtrl, navParams, menuService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.menuService = menuService;
    }
    FavoritosPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FavoritosPage');
    };
    FavoritosPage.prototype.ionViewWillEnter = function () {
        this.misFavoritos$ = this.menuService
            .getArticulosFavoritos()
            .snapshotChanges()
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["map"])(function (changes) {
            return changes.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); });
        }));
    };
    ;
    FavoritosPage.prototype.removeFavorito = function (value) {
        this.menuService.removeArticuloFavorito(value);
    };
    FavoritosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-favoritos',template:/*ion-inline-start:"/Users/mathiasmaximilianoamarillolemos/uc3m/dsi/Projecto/ProjectFinal/codigo/src/pages/favoritos/favoritos.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Favoritos</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-fab bottom right>\n      <button ion-fab color="primary">\n        <ion-icon name="cart"></ion-icon>\n      </button>\n    </ion-fab>\n    <ion-list>\n      <ion-item *ngFor="let favorito of misFavoritos$ | async">\n        <ion-thumbnail item-right>\n            <img [src]= "favorito?.foto"/>\n        </ion-thumbnail>\n        <ion-row>\n          <button (click)="removeFavorito(favorito)">\n            <ion-icon name="heart" class="heart"></ion-icon>\n          </button>\n          <ion-col>\n            <button>\n              <p>{{favorito.nombre}}</p>\n              <p>{{favorito.precio | number:\'1.2-2\'}}€</p>\n            </button>\n        </ion-col>\n      </ion-row>\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/mathiasmaximilianoamarillolemos/uc3m/dsi/Projecto/ProjectFinal/codigo/src/pages/favoritos/favoritos.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__services_menu_service__["a" /* MenuService */]])
    ], FavoritosPage);
    return FavoritosPage;
}());

//# sourceMappingURL=favoritos.js.map

/***/ }),

/***/ 92:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__registrar_registrar__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_auth_service__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__home_staff_home_staff__ = __webpack_require__(168);
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
    };
    LoginPage.prototype.onLoadRegistrarPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__registrar_registrar__["a" /* RegistrarPage */]);
    };
    LoginPage.prototype.tipoUsuario = function (correo, password) {
        if (correo == ("admin@admin.com") && (password == "admin@admin.com")) {
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__home_staff_home_staff__["a" /* HomeStaffPage */]);
        }
        else {
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
        }
    };
    LoginPage.prototype.login = function () {
        var _this = this;
        var data = this.form.value;
        console.log(data);
        this.auth.signInWithEmail({ email: data.correo, password: data.contraseña })
            .then(function () {
            return _this.tipoUsuario(data.correo, data.contraseña);
        }, function (error) { return _this.loginError = error.message; });
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"/Users/mathiasmaximilianoamarillolemos/uc3m/dsi/Projecto/ProjectFinal/codigo/src/pages/login/login.html"*/'<ion-header>\n  <ion-navbar hideBackButton>\n    <ion-title>Log in</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <br>\n  <ion-row justify-content-center align-items-center style="height: 40%">\n      <img src="../assets/icon/logo.png" height= "200">\n  </ion-row>\n  <ion-row justify-content-center align-items-center>\n      <h1>UnEat</h1>\n  </ion-row>\n  <ion-row justify-content-center align-tems-center>\n    <form (ngSubmit)="login()" [formGroup]="form">\n      <ion-list inset>\n        <ion-item>\n          <ion-label>Correo</ion-label>\n          <ion-input type="text" name = "correo" formControlName = "correo" placeholder="Johnny@aol.com"></ion-input>\n        </ion-item>\n        <ion-item>\n            <ion-label>Contraseña</ion-label>\n            <ion-input type="password" name = "correo" formControlName = "contraseña" placeholder="......"></ion-input>\n        </ion-item>\n        <!-- <ion-item>\n          <ion-label>Recuérdame</ion-label>\n          <ion-checkbox>\n          </ion-checkbox>\n        </ion-item> -->\n      </ion-list>\n      <div padding-horizontal>\n        <button ion-button full round type="submit">Iniciar Sesión</button>\n      </div>\n    </form>\n  </ion-row>\n  <ion-row justify-content-center align-items-center style>\n    <h6> ¿No tienes una cuenta?\n    <button ion-button clear small (click)="onLoadRegistrarPage()"> Regístrate </button>\n    </h6>\n  </ion-row>\n</ion-content>'/*ion-inline-end:"/Users/mathiasmaximilianoamarillolemos/uc3m/dsi/Projecto/ProjectFinal/codigo/src/pages/login/login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_5__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormBuilder */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 93:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_auth_service__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_operators__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_cuenta_service__ = __webpack_require__(143);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// import { AngularFireDatabase } from 'angularfire2/database';






var SettingsPage = /** @class */ (function () {
    function SettingsPage(navCtrl, navParams, auth, db, afAuth, fb, toastCtrl, cuentaService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.auth = auth;
        this.db = db;
        this.afAuth = afAuth;
        this.toastCtrl = toastCtrl;
        this.cuentaService = cuentaService;
        this.form = fb.group({
            nombre: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            correo: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            telefono: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            iban: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]
        });
        // this.cuentaService.getCuenta[0].subscribe( i => {
        //   this.cuentas = i;
        // })
    }
    SettingsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SettingsPage');
        console.log(this.form.value);
    };
    SettingsPage.prototype.ionViewWillEnter = function () {
        this.miCuenta$ = this.cuentaService
            .getCuenta()
            .snapshotChanges()
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_6_rxjs_operators__["map"])(function (changes) {
            return changes.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); });
        }));
        var myObserver = {
            cuenta: function (x) { return x; }
        };
        // this.miCuenta$ = this.cuentaService.getCuenta[0].pipe(
        //   tap(cuenta => this.form.patchValue(cuenta))
        // );
    };
    SettingsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-settings',template:/*ion-inline-start:"/Users/mathiasmaximilianoamarillolemos/uc3m/dsi/Projecto/ProjectFinal/codigo/src/pages/settings/settings.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Settings</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n    <ion-list *ngFor="let cuenta of cuentas">\n      <ion-item>\n        <ion-label>Nombre</ion-label>\n        <ion-input type="text" name="nombre">\n          {{cuenta.nombre}}\n       </ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>Email</ion-label>\n        <ion-input type="text" name="email">\n          {{cuenta.email}\n        }</ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>Teléfono</ion-label>\n        <ion-input type="text" name="telefono">\n          {{cuenta.telefono}}\n        </ion-input>\n      </ion-item>\n\n      <ion-item>\n          <ion-label>IBAN</ion-label>\n          <ion-input type="text" name="iban">\n            {{cuenta.iban}}\n          </ion-input>\n        </ion-item>\n    </ion-list>\n      <button ion-button block>Guardar</button>\n</ion-content>'/*ion-inline-end:"/Users/mathiasmaximilianoamarillolemos/uc3m/dsi/Projecto/ProjectFinal/codigo/src/pages/settings/settings.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_4__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["a" /* AngularFireAuth */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_7__services_cuenta_service__["a" /* CuentaService */]])
    ], SettingsPage);
    return SettingsPage;
}());

//# sourceMappingURL=settings.js.map

/***/ })

},[302]);
//# sourceMappingURL=main.js.map