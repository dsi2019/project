import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PedidoService } from '../../services/pedido.service';
import { Pedido } from '../../models/pedido';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';



@IonicPage()
@Component({
  selector: 'page-pedidos',
  templateUrl: 'pedidos.html',
})
export class PedidosPage {

  pedidosPending$: Observable<Pedido[]>;
  constructor(public navCtrl: NavController, public navParams: NavParams, public pedidoService: PedidoService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PedidosPage');
  }

  ionViewWillEnter(){
    this.pedidosPending$ = this.pedidoService
    .getPedidosPendientes()
    .snapshotChanges()
    .pipe(
      map(
        changes => {
          return changes.map(c => ({
            key: c.payload.key, ...c.payload.val()
          }))
        }
      )
    )
  }
  
}
