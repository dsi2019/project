import { Component, Injectable } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormControl, FormBuilder, Validators, FormGroup } from '@angular/forms';
// import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { ToastController } from 'ionic-angular';

import { AuthService } from '../../services/auth.service';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Cuenta } from "../../models/cuenta";

/**
 * Generated class for the SettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})

export class SettingsPage {
  registrarError: string;
  form: FormGroup;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private auth: AuthService,
    private db:AngularFireDatabase,
    private afAuth: AngularFireAuth,
    fb: FormBuilder,
    public toastCtrl: ToastController
    ){
		this.form = fb.group({
      nombre: ['',Validators.required],
			correo: ['',Validators.required],
      telefono: ['',Validators.required],
      iban: ['',Validators.required]
		});
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
    console.log(this.form.value);
  }

guardar_exitoso() {
  let toast = this.toastCtrl.create({
    message: '¡Ajustes guardados!',
    duration: 2000,
    position: 'bottom'
  });
  toast.present(toast);
}

guardar() {
  let data = this.form.value;
  console.log("saving");
  console.log(data);
  this.auth.registrar({email:data.correo})
}

  

}
