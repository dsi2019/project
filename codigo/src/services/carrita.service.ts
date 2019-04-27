import { Injectable } from "@angular/core";
import { Articulo } from "../models/articulo";


@Injectable()
export class ListaCarrito{

    total: number = 0.0;
    private carrito: Articulo[]=[];
    
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
            this.total = 0;
            var aux = this.carrito.length;
            var i = 0;
            while(i < aux){
                this.total = this.total + this.carrito[i].precio;
                i++;
            }
            console.log(this.carrito.length);
        return this.total;
    }
}