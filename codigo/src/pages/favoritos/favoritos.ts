import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import {MenuService} from '../../services/menu.service'
import {Articulo} from '../../models/articulo';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';
import { DetallesproductoPage } from '../detallesproducto/detallesproducto';

@IonicPage()
@Component({
  selector: 'page-favoritos',
  templateUrl: 'favoritos.html',
})
export class FavoritosPage {

  misFavoritos$: Observable<Articulo[]>;

  constructor(public navCtrl: NavController, public navParams: NavParams, private menuService: MenuService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FavoritosPage');
  }

  ionViewWillEnter(){
    this.misFavoritos$ = this.menuService
    .getArticulosFavoritos()
    .snapshotChanges()
    .pipe(
    map(
      changes => {
        return changes.map(c => ({
          key: c.payload.key, ...c.payload.val()
        }))
      }
    ));
  };

  aDetalles(articulo: Articulo){
    this.navCtrl.push(DetallesproductoPage, {item:articulo})
  }

  removeFavorito(value: Articulo){
    this.menuService.removeArticuloFavorito(value);
  }



}
