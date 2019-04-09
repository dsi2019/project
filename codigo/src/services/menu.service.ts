import​ { ​Injectable​ } ​from​ ​"@angular/core"​;
import { Cafeteria } from "../models/cafeteriamodel";
import { Time} from "@angular/common";
import { Articulo } from "../models/articulo";

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
    
    getMenu(){
        return this.menu;
    }

}