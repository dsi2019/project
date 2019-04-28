import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import {MenuService} from '../../services/menu.service'
import {Articulo} from '../../models/articulo';
import { CarritaPage } from '../carrita/carrita';
import { DetallesproductoPage } from '../detallesproducto/detallesproducto';

@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {

  menu: Articulo[] =[];
  displayMenu: Articulo[] = [];
  constructor(public navCtrl: NavController, public navParams: NavParams, private menuService: MenuService) {
  }

  ionViewWillEnter(){
    this.menu = this.menuService.getMenu();
    this.displayMenu = this.menu;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuPage');
  }

  onAddFavorito(value: Articulo){
    this.menuService.addArticuloFavorito(value);
  }

  aCarrita(){
    this.navCtrl.push(CarritaPage);
  }

  aDetalles(articulo: Articulo){
    this.navCtrl.push(DetallesproductoPage, {item:articulo})
  }

  onSearch(event: any) {
    this.displayMenu = [];
    for (let i = 0; i < this.menu.length; i++) {
      if (this.menu[i].nombre.toLowerCase().includes(event.target.value)) {
        this.displayMenu.push(this.menu[i])
      };
    }
    if (event.target.value === "") this.displayMenu = this.menu;
  }

}

