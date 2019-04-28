import { Injectable } from "@angular/core";
import { Articulo } from "../models/articulo";
import { Pedido } from "../models/pedido";

@Injectable()
export class ListaCarrito{

    total: number = 0.0;
    private carrito: Articulo[]=[];
    private cantidad: number[] = [];
    
    constructor(){
       
    }
    getCarritoItems(){
        return this.carrito;
    }

    getCarritoCantidades(){
        return this.cantidad;
    }
    
    addCarritoItem(articulo:Articulo, cantidad: number) {
        this.total= this.total+articulo.precio;
        this.carrito.push(articulo);
        this.cantidad.push(cantidad);
    }

    removeCarritoItem(articuloIndex:number){
        this.carrito.splice(articuloIndex, 1); // borramos el articulo
        this.cantidad.splice(articuloIndex, 1); // borramos la cantidad correspondiente de ese articulo
    }

    // calcular el precio total de todos los productos
    getTotalPrice(){
            this.total = 0;
            var aux = this.carrito.length;
            var i = 0;
            while(i < aux){
                this.total = this.total + this.carrito[i].precio * this.cantidad[i];
                i++;
            }
            console.log(this.carrito.length); // DEBUG ONLY
        return this.total.toFixed(2);
    }
}