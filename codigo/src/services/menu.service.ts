import​ { ​Injectable​ } ​from​ ​"@angular/core"​;
import { Cafeteria } from "../models/cafeteriamodel";
import { Time } from "@angular/common";
import { Articulo } from "../models/articulo";


import​ { ​AngularFireDatabase,​ AngularFireList } ​from​ ​"angularfire2/database"​;
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { _ParseAST } from "@angular/compiler";

@​Injectable​()
export class MenuService{

    private menu: Articulo[] = [
        {nombre: "Leche",
        precio: 0.75,
        foto: "../assets/cafeterias/leche.jpg",
        tipo_de_comida: "bc"
        },
        {nombre: "Infusiones",
        precio: 0.80,
        foto: "../assets/cafeterias/inf.png",
        tipo_de_comida: "bc"
        },
        {nombre: "Cafe Solo",
        precio: 0.90,
        foto: "../assets/cafeterias/cafesolo.jpg",
        tipo_de_comida: "bc",
        },
        /* {nombre: "Cafe de Comercio",
        precio: 0.90,
        foto: "../assets/cafeterias/comercio.jpg",
        tipo_de_comida: "bc",
        }, */
        {nombre: "Colacao",
        precio: 1.00,
        foto: "../assets/cafeterias/colacao.png",
        tipo_de_comida: "bc",
        },
        {nombre: "Cafe Capuccino",
        precio: 1.20,
        foto: "../assets/cafeterias/capuchino.jpg",
        tipo_de_comida: "bc",
        },
        /* {nombre: "Desayuno y Zumo Natural",
        precio: 2.90,
        foto: "../assets/cafeterias/desayuno.jpg",
        tipo_de_comida: "bc",
        }, */
        {nombre: "Bolleria Variada",
        precio: 0.95,
        foto: "../assets/cafeterias/bolleria.jpg",
        tipo_de_comida: "fs",
        },
        {nombre: "Yoghurt",
        precio: 0.80,
        foto: "../assets/cafeterias/yogurt.jpg",
        tipo_de_comida: "bf",
        },
        {nombre: "Batidos Variados",
        precio: 1.20,
        foto: "../assets/cafeterias/zumos.jpg",
        tipo_de_comida: "bf",
        },
        /* {nombre: "Zumos Variados",
        precio: 1.20,
        foto: "../assets/cafeterias/zumos.jpg",
        tipo_de_comida: "bf",
        }, */
        {nombre: "Zumos de Fruta Natural",
        precio: 1.90,
        foto: "../assets/cafeterias/naturales.jpg",
        tipo_de_comida: "bf",
        },
        {nombre: "Coca Cola",
        precio: 0.95,
        foto: "../assets/cafeterias/cola.jpg",
        tipo_de_comida: "bf",
        },
        {nombre: "Fanta Naranja o Limon",
        precio: 0.95,
        foto: "#",
        tipo_de_comida: "bf",
        },
        /* {nombre: "Tonica",
        precio: 0.95,
        foto: "#",
        tipo_de_comida: "bf",
        }, */
        {nombre: "Trinaranjus",
        precio: 1.05,
        foto: "#",
        tipo_de_comida: "bf",
        },
        /* {nombre: "Coca Cola",
        precio: 1.05,
        foto: "#",
        tipo_de_comida: "bf",
        }, */
        {nombre: "Nestea",
        precio: 1.40,
        foto: "#",
        tipo_de_comida: "bf",
        },
        {nombre: "Aquarius",
        precio: 1.40,
        foto: "#",
        tipo_de_comida: "bf",
        },
        {nombre: "Cerveza",
        precio: 1.20,
        foto: "#",
        tipo_de_comida: "bf",
        },
        /* {nombre: "Cerveza 1/3",
        precio: 1.30,
        foto: "#",
        tipo_de_comida: "bf",
        }, */
        {nombre: "Cerveza sin Alcohol",
        precio: 1.30,
        foto: "#",
        tipo_de_comida: "bf",
        },
        {nombre: "Botella de Agua",
        precio: 0.60,
        foto: "#",
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
        {nombre: "Hamburguesa Normal",
        precio: 2.40,
        foto: "#",
        tipo_de_comida: "hb",
        },
        {nombre: "Hamburguesa Con Queso",
        precio: 2.70,
        foto: "#",
        tipo_de_comida: "hb",
        },
        {nombre: "Hamburguesa Doble",
        precio: 3.90,
        foto: "#",
        tipo_de_comida: "hb",
        },
        {nombre: "Hamburguesa Completa con Patatas y Refresco",
        precio: 4.90,
        foto: "#",
        tipo_de_comida: "hb",
        },
        {nombre: "Croqueta (unidad)",
        precio: 0.40,
        foto: "#",
        tipo_de_comida: "rc",
        },
        {nombre: "Patatas bravas, ali-oli",
        precio: 1.55,
        foto: "#",
        tipo_de_comida: "rc",
        },
        /* {nombre: "Empanada",
        precio: 1.90,
        foto: "#",
        tipo_de_comida: "rc",
        }, */
        {nombre: "Pizza",
        precio: 1.90,
        foto: "#",
        tipo_de_comida: "rc",
        },
        {nombre: "Ensalada Mixta",
        precio: 2.75,
        foto: "#",
        tipo_de_comida: "rc",
        },
        {nombre: "Queso Manchego",
        precio: 3.50,
        foto: "#",
        tipo_de_comida: "rc",
        },
        {nombre: "Jamon Serrano",
        precio: 3.50,
        foto: "#",
        tipo_de_comida: "rc",
        },
        {nombre: "Plato Combinado Reducido",
        precio: 4.55,
        foto: "#",
        tipo_de_comida: "pc",
        },
        {nombre: "Plato Combinado Completo",
        precio: 5.20,
        foto: "#",
        tipo_de_comida: "pc",
        },
        {nombre: "Plato Combinado Vegetariano",
        precio: 5.20,
        foto: "#",
        tipo_de_comida: "pc",
        },
        {nombre: "Croissant Salado - Jamon York",
        precio: 1.50,
        foto: "#",
        tipo_de_comida: "cs",
        },
        {nombre: "Croissant Salado - Embutidos",
        precio: 1.50,
        foto: "#",
        tipo_de_comida: "cs",
        },
        {nombre: "Croissant Salado - Queso",
        precio: 1.50,
        foto: "#",
        tipo_de_comida: "cs",
        },
        {nombre: "Croissant Salado - Jamon Serrano",
        precio: 1.60,
        foto: "#",
        tipo_de_comida: "cs",
        },
        {nombre: "Croissant Salado - Atun",
        precio: 1.60,
        foto: "#",
        tipo_de_comida: "cs",
        },
        {nombre: "Croissant Salado - Vegetal",
        precio: 1.60,
        foto: "#",
        tipo_de_comida: "cs",
        },
        {nombre: "Croissant Salado - Vegetal con Queso",
        precio: 1.85,
        foto: "#",
        tipo_de_comida: "cs",
        },
        {nombre: "Sandwiches - Jamon York",
        precio: 1.35,
        foto: "#",
        tipo_de_comida: "sd",
        },
        {nombre: "Sandwiches - Queso",
        precio: 1.35,
        foto: "#",
        tipo_de_comida: "sd",
        },
        {nombre: "Sandwiches - Mixto",
        precio: 1.65,
        foto: "#",
        tipo_de_comida: "sd",
        },
        {nombre: "Sandwiches - Vegetal",
        precio: 1.65,
        foto: "#",
        tipo_de_comida: "sd",
        },
       /*  {nombre: "Sandwiches - Empaquetados",
        precio: 1.60,
        foto: "#",
        tipo_de_comida: "sd",
        }, */
        {nombre: "Sandwiches - Mixto con Huevo",
        precio: 2.05,
        foto: "#",
        tipo_de_comida: "sd",
        },
        {nombre: "Sandwiches - Vegetal con Huevo",
        precio: 2.05,
        foto: "#",
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
        {nombre: "Bocadillo Chorizo/Salchichón/Queso",
        precio: 1.35,
        foto: "#",
        tipo_de_comida: "bd",
        },
        {nombre: "Bocadillo Tortilla Española",
        precio: 1.35,
        foto: "#",
        tipo_de_comida: "bd",
        },
        {nombre: "Bocadillo Tortilla Francesa",
        precio: 1.35,
        foto: "#",
        tipo_de_comida: "bd",
        },
        {nombre: "Bocadillo Atún",
        precio: 1.70,
        foto: "#",
        tipo_de_comida: "bd",
        },
        {nombre: "Bocadillo Bacon",
        precio: 1.70,
        foto: "#",
        tipo_de_comida: "bd",
        },
        {nombre: "Bocadillo Lomo",
        precio: 1.85,
        foto: "#",
        tipo_de_comida: "bd",
        },
        {nombre: "Bocadillo Queso Manchego",
        precio: 1.85,
        foto: "#",
        tipo_de_comida: "bd",
        },
        {nombre: "Bocadillo Jamón Serrano",
        precio: 1.85,
        foto: "#",
        tipo_de_comida: "bd",
        },
        {nombre: "Bocadillo Chorizo/Salchichón con Queso",
        precio: 1.65,
        foto: "#",
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
        {nombre: "Pieza de Fruta",
        precio: 0.60,
        foto: "#",
        tipo_de_comida: "fs",
        },
        {nombre: "Vasito de Fruta Troceada",
        precio: 1.00,
        foto: "#",
        tipo_de_comida: "fs",
        },
        {nombre: "Sobre de Mayonesa, Mostaza, Ketchup, Duo de Aceite y Vinagre",
        precio: 0.25,
        foto: "#",
        tipo_de_comida: "sup",
        },
        {nombre: "Pan",
        precio: 0.25,
        foto: "#",
        tipo_de_comida: "sup",
        },
        {nombre: "Bolsa de Cubiertos",
        precio: 0.25,
        foto: "#",
        tipo_de_comida: "sup",
        },
        /* {nombre: "Mosto",
        precio: 0.95,
        foto: "#",
        tipo_de_comida: "vl",
        },
        {nombre: "Valdepenas",
        precio: 0.95,
        foto: "#",
        tipo_de_comida: "vl",
        },
        {nombre: "Valdepeñas Dos Años o Similar/Rioja",
        precio: 1.10,
        foto: "#",
        tipo_de_comida: "vl",
        },
        {nombre: "Bitter sin Alcohol/Bitter Cinzano",
        precio: 1.30,
        foto: "#",
        tipo_de_comida: "vl",
        },
        {nombre: "Licores",
        precio: 1.30,
        foto: "#",
        tipo_de_comida: "vl",
        },
        {nombre: "Malaga Virgen/Martini/o Similar",
        precio: 1.50,
        foto: "#",
        tipo_de_comida: "vl",
        },
        {nombre: "Rioja Reserva",
        precio: 1.70,
        foto: "#",
        tipo_de_comida: "vl",
        },*/
    ];

    mis_articulosRef: AngularFireList<Articulo[]>;
    mis_articulos: Observable<Articulo[]>;
    userID: string;

    constructor(private db:AngularFireDatabase, private afAuth: AngularFireAuth) {
        this.afAuth.authState.subscribe(user => {
            if(user) this.userID = user.uid
          })
        this.mis_articulosRef = db.list('mis_articulos');
        this.mis_articulos = this.mis_articulosRef.snapshotChanges().pipe(
            map(changes =>
              changes.map(c => ({ key: c.payload.key, ...c.payload.val()
            })))
          );
    }

    getMenu(){
        return this.menu;
    }

    addArticuloFavorito(value) {
        const newRef = this.mis_articulosRef.push({
            nombre: value.nombre,
            precio: value.precio,
            foto: value.foto,
            tipo_de_comida: value.tipo_de_comida,
            userID: this.userID
        });
        }

    removeArticuloFavorito(value){
        this.mis_articulosRef.remove(value);
    }

    getArticulosFavoritos(){
        if (!this.userID) return;
        return this.db.list(`mis_articulos`, ref => {
            let q = ref.orderByChild("userID").equalTo(this.userID);
            return q;
        })
    }

}