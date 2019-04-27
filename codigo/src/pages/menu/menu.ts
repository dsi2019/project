import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import {MenuService} from '../../services/menu.service'
import {Articulo} from '../../models/articulo';
import { CarritaPage } from '../carrita/carrita';
import { DetallesproductoPage } from '../detallesproducto/detallesproducto';

/**
 * Generated class for the MenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {

  menu: Articulo[] =[];
  constructor(public navCtrl: NavController, public navParams: NavParams, private menuService: MenuService) {
  }

  ionViewWillEnter(){
    this.menu = this.menuService.getMenu();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuPage');
  }

  onAddFavorito(value: Articulo){
    console.log("adding favorito from menu");
    this.menuService.addArticuloFavorito(value);
  }

  aCarrita(){
    this.navCtrl.push(CarritaPage);
  }

  aDetalles(articulo: Articulo){
  this.navCtrl.push(DetallesproductoPage, {item:articulo})
}

}

