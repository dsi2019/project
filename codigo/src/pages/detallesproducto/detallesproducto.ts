import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MenuService } from '../../services/menu.service';
import { CarritaPage } from '../carrita/carrita';
import { Articulo } from '../../models/articulo';
import { FormGroup, FormBuilder } from '@angular/forms';

@IonicPage()
@Component({
  selector: 'page-detallesproducto',
  templateUrl: 'detallesproducto.html',
})
export class DetallesproductoPage {
  
  articulo:any;
  selectedAmount: number; 
  form: FormGroup;
  
  constructor(public navCtrl: NavController, public navParams: NavParams,fb: FormBuilder) {
    this.articulo = navParams.get('item');
      this.form = fb.group({
       selector: 1
      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetallesproductoPage');// DEBUG ONLY
  }

  addToCarrito(articulo: Articulo){
    let data = this.form.value;
    this.navCtrl.push(CarritaPage, {item:articulo, item2:data.selector});
  }

}


