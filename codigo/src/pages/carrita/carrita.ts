import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Articulo } from '../../models/articulo';
import { ListaCarrito } from '../../services/carrita.service'
import {CarritaService} from '../../services/carrita.service'
import { PedidoService } from '../../services/pedido.service';

@IonicPage()
@Component({
  selector: 'page-carrita',
  templateUrl: 'carrita.html',
})
export class CarritaPage {

  carrito: Articulo[]=[];
  precioTotal: number= 0.0;
  aux: any = null;
  cantidad_nuevo: number = 0;
  cantidad: number[]=[]

  constructor(public navCtrl: NavController, public navParams: NavParams, private listaCarrito: ListaCarrito, private pedidoService: PedidoService) {
    this.aux = navParams.get('item');
    this.cantidad_nuevo = navParams.get('item2');
    console.log("DENTRO DE CARRITA.TS constructor--->", this.cantidad);// DEBUG ONLY
    console.log(this.carrito);

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CarritaPage');
    if(this.aux != null){
      this.carrito = this.listaCarrito.addCarritoItem(this.aux, this.cantidad_nuevo); // VOID TYPE
      console.log("CARRITO ionViewDidLoad");// DEBUG ONLY
      console.log(this.aux);// DEBUG ONLY
    }
  }

  ionViewWillEnter(){
    this.precioTotal = this.listaCarrito.getTotalPrice();
    this.carrito = this.listaCarrito.getCarritoItems();
    this.cantidad = this.listaCarrito.getCarritoCantidades();

    console.log(this.listaCarrito);
    console.log(this.cantidad);
    console.log(this.precioTotal);
  }
  
  removeCarritaItem(articulo: Articulo){
    console.log("removing item to shopping cart");// DEBUG ONLY
    this.listaCarrito.removeCarritoItem(articulo);
    console.log(articulo);// DEBUG ONLY
  }

  // realizarPedido(){
  //  let pedido = {nombre_cliente: "Chris Caliente", comida: {articulos: this.carrito, cantidad: this.cantidad}};
  //  this.pedidoService.addPedido(pedido);
  // }
}
