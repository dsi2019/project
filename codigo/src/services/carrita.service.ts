import { Injectable } from "@angular/core";
import { Articulo } from "../models/articulo";


@Injectable()
export class ListaCarrito{

    total: number = 0.0;
    private carrito: Articulo[]=[
        {nombre: "Leche",
        precio: 0.75,
        foto: "#",
        tipo_de_comida: "bc"
        },
        {nombre: "Leche2",
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
        this.total= this.total+value.precio;
        this.carrito.push(value);
    }

    removeCarritoItem(value:Articulo){
        // todo
    }

    getTotalPrice(){
            var aux = this.carrito.length;
            var i = 0;
            while(aux < i){
                this.total = this.total + this.carrito[i].precio;
                console.log(this.total);
                i++;
            }
        return this.total;
    }
}