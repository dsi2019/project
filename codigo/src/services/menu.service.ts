import​ { ​Injectable​ } ​from​ ​"@angular/core"​;
import { Cafeteria } from "../models/cafeteriamodel";
import { Time} from "@angular/common";
import { Articulo } from "../models/articulo";


import​ { ​AngularFireDatabase​ } ​from​ ​"angularfire2/database"​;
import { AngularFireAuth } from 'angularfire2/auth';

@​Injectable​()
export class MenuService{

    private menu: Articulo[] = [
        {nombre: "Leche",
        precio: 0.75,
        foto: "#",
        tipo_de_comida: "bebidas"
        },
        {nombre: "Colocao",
        precio: 1.00,
        foto: "#",
        tipo_de_comida: "bebidas"},
        {nombre: "Croquetas",
        precio: .40,
        foto: "#",
        tipo_de_comida: "raciones",
        comentos: "(unidad)"}
    ];

    private mis_articulosRef = this.db.list<Articulo>('uneat-3b5eb');
    userID: string;

    constructor(private db:AngularFireDatabase, private afAuth: AngularFireAuth){
        this.afAuth.authState.subscribe(user => {
            if(user) this.userID = user.uid
          })
    }
    
    getMenu(){
        return this.menu;
    }

    // Sólo usando leche para probar Favoritos antes que tenemos la lista en el menu
    addArticuloFavorito() {
        return this.mis_articulosRef.push({nombre: "Leche",
        precio: 0.75,
        foto: "#",
        tipo_de_comida: "bebidas",
        userID: this.userID
        });
        console.log("adding favorito from menu_service!");
    }

    getArticulosFavoritos() {
        // if (!this.userID) return;
        // this.mis_articulosRef = this.db.list(`mis_articulosRef/${this.userID}`);
        return this.mis_articulosRef
    }

}