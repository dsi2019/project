import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { CafeteriaService } from '../../services/cafeteria.service';
import { Cafeteria } from '../../models/cafeteriamodel';

/**
 * Generated class for the CafeteriasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cafeterias',
  templateUrl: 'cafeterias.html',
})
export class CafeteriasPage {
  cafeterias: Cafeteria[]= [];  
  constructor(public navCtrl: NavController,
    private cafeteriaService: CafeteriaService) {
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CafeteriasPage');
  }

  ionViewWillEnter(){
    this.cafeterias = this.cafeteriaService.getCafeterias();
  };

}
