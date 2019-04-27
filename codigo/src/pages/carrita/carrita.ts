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
  constructor(public navCtrl: NavController, public navParams: NavParams, private listaCarrito: ListaCarrito) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CarritaPage');
  }

  ionViewWillEnter(){
    this.carrito = this.listaCarrito.getCarritoItems();
  }

}
