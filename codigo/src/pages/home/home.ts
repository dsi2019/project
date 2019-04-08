import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { CafeteriaService } from '../../services/cafeteria.service';
import { Cafeteria } from '../../models/cafeteriamodel';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  cafeterias: Cafeteria[]= [];  
  constructor(public navCtrl: NavController,
    private cafeteriaService: CafeteriaService) {

  }

  ionViewWillEnter(){
    this.cafeterias = this.cafeteriaService.getCafeterias();
  };
}
