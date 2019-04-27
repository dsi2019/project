import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MenuService } from '../../services/menu.service';
import { CarritaPage } from '../carrita/carrita';
/**
 * Generated class for the DetallesproductoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detallesproducto',
  templateUrl: 'detallesproducto.html',
})
export class DetallesproductoPage {
  articulo:any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.articulo = navParams.get('item');
    console.log(this.articulo);
    console.log("DETALLE PRODUCTO CONSTRUCTO>r");// DEBUG ONLY
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetallesproductoPage');// DEBUG ONLY
  }

  addToCarrito(articulo: Articulo){
    console.log("ITEM TO CARRITO");// DEBUG ONLY
    this.navCtrl.push(CarritaPage, {item:articulo});
  }

}
