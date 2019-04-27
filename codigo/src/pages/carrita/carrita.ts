import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Articulo } from '../../models/articulo';
import { ListaCarrito } from '../../services/carrita.service'
import { preserveWhitespacesDefault } from '@angular/compiler';


@IonicPage()
@Component({
  selector: 'page-carrita',
  templateUrl: 'carrita.html',
})
export class CarritaPage {

  carrito: Articulo[]=[];
  precioTotal: number= 0.0;

  constructor(public navCtrl: NavController, public navParams: NavParams, private listaCarrito: ListaCarrito) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CarritaPage');
    
  }

  ionViewWillEnter(){
    this.carrito = this.listaCarrito.getCarritoItems();
    this.precioTotal = this.listaCarrito.getTotalPrice();
    console.log(this.listaCarrito);
    console.log(this.listaCarrito.getTotalPrice);

  }

  onAddCarrita(value: Articulo){
    console.log("adding item to shopping cart");
    this.listaCarrito.addCarritoItem(value);
    this.precioTotal = this.precioTotal+value.precio;
  }

}
