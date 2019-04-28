import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Articulo } from '../../models/articulo';
import { ListaCarrito } from '../../services/carrita.service'
import { PedidoService } from '../../services/pedido.service';
import {AlertController} from 'ionic-angular';
import { CarritaPageModule } from './carrita.module';

@IonicPage()
@Component({
  selector: 'page-carrita',
  templateUrl: 'carrita.html',
})
export class CarritaPage {

  carrito: Articulo[]=[];
  precioTotal: number= 0.0;
  aux: any = null;
  cantidad_nuevo: number = 0;
  cantidad: number[]=[]

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    private listaCarrito: ListaCarrito, 
    private pedidoService: PedidoService,
    private alertController: AlertController) {

      this.aux = navParams.get('item');
      this.cantidad_nuevo = navParams.get('item2');
  }

  ionViewDidLoad() {
    if(this.aux != null)
      this.carrito = this.listaCarrito.addCarritoItem(this.aux, this.cantidad_nuevo); // VOID TYPE
  }

  ionViewWillEnter(){
    this.precioTotal = this.listaCarrito.getTotalPrice();
    this.carrito = this.listaCarrito.getCarritoItems();
    this.cantidad = this.listaCarrito.getCarritoCantidades();
  }
  
  removeCarritaItem(articuloIndex: number){
    this.listaCarrito.removeCarritoItem(articuloIndex);
  }

  isDisabled(){
    return (this.carrito.length == 0);
  }

  realizarPedido(){
    if (this.isDisabled()){
      let alert = this.alertController.create({
        title: 'Carrita Basia',
        subTitle: 'Para comprar algo tienes que añadir algo a su carrita',
        buttons: ['OK']
        });
        alert.present();
    }
    else{
      let pedido = {nombre_cliente: "Introduce Usuario", comida: {articulos: this.carrito, cantidad: this.cantidad}};
      this.pedidoService.addPedido(pedido);
      let alert = this.alertController.create({
        title: 'Pedido Realizado',
        subTitle: 'En breve recibirás una notificación cuando tu pedido esté listo',
        buttons: ['OK']
        });
        alert.present();
        this.navCtrl.popToRoot();
    }   
  }
}
