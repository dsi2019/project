import { Injectable } from "@angular/core";
import { Articulo } from "../models/articulo";


@Injectable()
export class ListaCarrito{

    private carrito: Articulo[]=[
        {nombre: "Leche",
        precio: 0.75,
        foto: "#",
        tipo_de_comida: "bc"
        },
    ];
    
    constructor(){
       
    }

    getCarritoItems(){
        return this.carrito;
    }
    
    addCarritoItem(value:Articulo) {
        this.carrito.push(value);
    }

    removeCarritoItem(value:Articulo){
        // todo
    }

}