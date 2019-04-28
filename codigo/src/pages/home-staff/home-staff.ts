import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs';
import { Pedido } from '../../models/pedido';
import { map } from 'rxjs/operators';
import { PedidoService } from '../../services/pedido.service';
import { snapshotChanges } from 'angularfire2/database';
import { HomePage } from '../home/home';
import { LoginPage } from '../login/login';

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
    this.pedidos$.subscribe(snapshotChanges => {
      snapshotChanges.forEach(snapshot => console.log(snapshot.nombre_cliente)); 
    });
  };

  onLogOut(){
    console.log("SALIENDO DE ADMINISTRADOR---->");
    this.navCtrl.push(LoginPage);
  }
}
