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
            nombre_cliente: this.userID.slice(-4),
            comida: pedido.comida,
            userID: this.userID,
            status: 0,
        });
    }

    cambiarStatus(value){
        return this.pedidosRef.update(value.key,
            {nombre_cliente: value.nombre_cliente,
            comida: value.comida,
            userID: value.userID,
            status: 1});
    }

    getPedidosPendientes(){
        if (!this.userID) return;
        return this.db.list('pedidos', ref => {
            let q = ref.orderByChild("userID").equalTo(this.userID);
            return q;
        })
    }

    getPedidos(){
        if (!this.userID) return;
        return this.db.list(`pedidos`, ref => {
            let q = ref.orderByChild("status").equalTo(0);
            return q;
        })
    }
}