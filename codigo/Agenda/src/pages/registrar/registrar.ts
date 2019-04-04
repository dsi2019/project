import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {FormGroup, FormBuilder, Validators} from '@angular/forms'


import { AuthService } from '../../services/auth.service';
import {HomePage} from '../home/home'

/**
 * Generated class for the RegistrarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-registrar',
  templateUrl: 'registrar.html',
})
export class RegistrarPage {
  registrarError: string;
  form: FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams, private auth: AuthService, fb: FormBuilder,){
		this.form = fb.group({
      nombre: ['',Validators.required],
			correo: ['',Validators.required],
			contraseña: ['',Validators.required]
		});
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegistrarPage');
  }


registrar(){
  let data = this.form.value;
  let credentials = {
    email: data.email,
    password: data.password
  };
  console.log("registering");
  this.auth.registrar(credentials).then(
    () => this.navCtrl.setRoot(HomePage),
    error => this.registrarError = error.message
  );
}

}
