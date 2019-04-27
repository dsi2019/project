import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Articulo } from '../../models/articulo';
import { ListaCarrito } from '../../services/carrita.service'


@IonicPage()
@Component({
  selector: 'page-carrita',
  templateUrl: 'carrita.html',
})
export class CarritaPage {

  carrito: Articulo[]=[];
  precioTotal: number= 0.0;
  aux: any = null;

  constructor(public navCtrl: NavController, public navParams: NavParams, private listaCarrito: ListaCarrito) {
    this.aux = navParams.get('item');
    console.log("DENTRO DE CARRITA.TS constructor");
    console.log(this.carrito);
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CarritaPage');
    if(this.aux != null){
      this.carrito = this.listaCarrito.addCarritoItem(this.aux);
      console.log("CARRITO ionViewDidLoad");
      console.log(this.aux);
    }
    
  }
  ionViewWillEnter(){
    this.precioTotal = this.listaCarrito.getTotalPrice();
    this.carrito = this.listaCarrito.getCarritoItems();
    console.log(this.listaCarrito);
    console.log(this.precioTotal);
  }

  onAddCarrita(value: Articulo){
    console.log("adding item to shopping cart");
    console.los(value);
  }

}
