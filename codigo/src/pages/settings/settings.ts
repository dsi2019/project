import { Component, Injectable } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormControl, FormBuilder, Validators, FormGroup } from '@angular/forms';
// import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { ToastController } from 'ionic-angular';

import { AuthService } from '../../services/auth.service';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Cuenta } from "../../models/cuenta";
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';
import { CuentaService } from '../../services/cuenta.service';
import { tap } from 'rxjs/operators';

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})

export class SettingsPage {
  registrarError: string;
  form: FormGroup;

  miCuenta$: Observable<Cuenta[]>;
  cuentas: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private auth: AuthService,
    private db:AngularFireDatabase,
    private afAuth: AngularFireAuth,
    fb: FormBuilder,
    public toastCtrl: ToastController,
    private cuentaService: CuentaService
    ){
		this.form = fb.group({
      nombre: ['',Validators.required],
			correo: ['',Validators.required],
      telefono: ['',Validators.required],
      iban: ['',Validators.required]
    });

      // this.cuentaService.getCuenta[0].subscribe( i => {
      //   this.cuentas = i;
      // })
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
    console.log(this.form.value);
  }

  ionViewWillEnter() {
    this.miCuenta$ = this.cuentaService
    .getCuenta()
    .snapshotChanges()
    .pipe(
    map(
      changes => {
        return changes.map(c => ({
          key: c.payload.key, ...c.payload.val()
        }))
      }
    ));
  };

    // this.miCuenta$ = this.cuentaService.getCuenta[0].pipe(
    //   tap(cuenta => this.form.patchValue(cuenta))
    // );

// guardar_exitoso() {
//   let toast = this.toastCtrl.create({
//     message: '¡Ajustes guardados!',
//     duration: 2000,
//     position: 'bottom'
//   });
//   toast.present(toast);
// }

// guardar() {
//   let data = this.form.value;
//   console.log("saving");
//   console.log(data);
//   this.auth.registrar({email:data.correo})
// }

compartir() {
  let toast = this.toastCtrl.create({
    message: 'Código copiado en el portapapeles',
    duration: 2000,
    position: 'bottom'
  });
  toast.present(toast);
}

}
