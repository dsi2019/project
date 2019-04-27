import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {MenuService} from '../../services/menu.service'

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
  value:any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.value = navParams.get('item');
    console.log(this.value);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetallesproductoPage');
  }

  addToCarrito(){
    
  }

}
