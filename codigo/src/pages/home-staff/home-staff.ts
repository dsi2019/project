import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs';
import { Pedido } from '../../models/pedido';
import { map } from 'rxjs/operators';
import { PedidoService } from '../../services/pedido.service';

/**
 * Generated class for the HomeStaffPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home-staff',
  templateUrl: 'home-staff.html',
})
export class HomeStaffPage {


  pedidos$: Observable<Pedido[]>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public pedidoService: PedidoService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomeStaffPage');
  }

  ionViewWillEnter(){
    this.pedidos$ = this.pedidoService
    .getPedidos()
    .snapshotChanges()
    .pipe(
    map(
      changes => {
        return changes.map(c => ({
          key: c.payload.key, ...c.payload.val()
        }))
      }
    ));
    console.log("have pedidos");
  };

}
