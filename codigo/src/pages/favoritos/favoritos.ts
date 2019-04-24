import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


import {MenuService} from '../../services/menu.service'
import {Articulo} from '../../models/articulo';
import { Observable } from 'rxjs/Observable';

/**
 * Generated class for the FavoritosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

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
    .map(
      changes => {
        return changes.map(c => ({
          key: c.payload.key, ...c.payload.val()
        }));
      }
    );
    console.log("dog");
    // this.misFavoritos$.forEach(element => {
    //   element.forEach(element1 => {
    //     console.log("dog");
    //   });
    // });
    // console.log(this.misFavoritos$.forEach((i)=> console.log(i[0].nombre)))
  };

}
