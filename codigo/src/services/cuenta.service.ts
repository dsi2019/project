import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Cuenta } from "../models/cuenta";
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AngularFireAuth } from 'angularfire2/auth';
// import { _ParseAST } from "@angular/compiler";

@Injectable()
export class CuentaService {

    cuentasRef: AngularFireList<Cuenta[]>;
    cuentas: Observable<Cuenta[]>;
    userID: string;

  constructor(private db:AngularFireDatabase, private afAuth: AngularFireAuth) {
    this.afAuth.authState.subscribe(user => {
        if(user) this.userID = user.uid
      })
    this.cuentasRef = db.list('cuentas');
    this.cuentas = this.cuentasRef.snapshotChanges().pipe(
        map(changes =>
            changes.map(c => ({ key: c.payload.key, ...c.payload.val()
          })))
    )};

    addCuenta(value:Cuenta) {
        this.cuentasRef.push({
          nombre: value.nombre,
          email: value.email,
          iban: value.iban,
          telefono: value.telefono,
          userID: this.userID
      })

    }

    getCuenta() {
        if(!this.userID) return;
        return this.db.list('cuentas', ref => {
            let q = ref.orderByChild("userID").equalTo(this.userID);
            return q;
            // var defer = $q.defer();
            // let ref= x.orderByChild("userID").equalTo(this.userID);
            // // return q;
            // ref.once("value",function(copySnap){
            //     if(!copySnap.exists()){
            //       defer.reject(null);
            //     }else{
            //       var listObj = copySnap.val();
            //       var list = Object.keys(listObj).map(function(copy){
            //           return listObj[copy]});
            //       defer.resolve(list[0]);
            //     }
            //   })
            //   return defer.promise;
        })
    }
  }