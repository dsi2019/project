import​ { ​Injectable​ } ​from​ ​"@angular/core"​;
import { Articulo } from "../models/articulo";
import {Pedido} from "../models/pedido";


import​ { ​AngularFireDatabase,​ AngularFireList } ​from​ ​"angularfire2/database"​;
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@​Injectable​()
export class PedidoService{

    pedidosRef: AngularFireList<Articulo[]>;
    pedidos: Observable<Articulo[]>;
    userID: string;

    constructor(private db:AngularFireDatabase, private afAuth: AngularFireAuth){
        this.afAuth.authState.subscribe(user => {
            if(user) this.userID = user.uid
          })
        this.pedidosRef = db.list('pedidos');
        this.pedidos = this.pedidosRef.snapshotChanges().pipe(
            map(changes => 
              changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
            )
          );
    }

    addPedido(pedido: Pedido){
        this.pedidosRef.push({
            nombre_cliente: pedido.nombre_cliente,
            comida: pedido.comida,
            userID: this.userID,
        });
    }

}