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

    addCarritoItem(articulo:Articulo) {
        this.total= this.total+articulo.precio;
        this.carrito.push(articulo);
    }

    removeCarritoItem(articulo:Articulo){
        //this.carrito.remove(articulo);
    }

    getTotalPrice(){
            this.total = 0;
            var aux = this.carrito.length;
            var i = 0;
            while(i < aux){
                this.total = this.total + this.carrito[i].precio;
                i++;
            }
            console.log(this.carrito.length); // DEBUG ONLY
        return this.total;
    }
}