
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {RegistrarPage} from "../registrar/registrar"
import {HomePage} from '../home/home'



import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  form: FormGroup;
  loginError: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private auth: AuthService,
		fb: FormBuilder) {
      this.form = fb.group({
        correo: ['',Validators.required],
        contraseña: ['',Validators.required]
      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
    console.log(this.form.value);
  }

  onLoadRegistrarPage(){
    this.navCtrl.push(RegistrarPage);
  }

  login() {
    console.log("logging-in");
    let data = this.form.value;
    console.log(data);
		this.auth.signInWithEmail({email:data.correo, password:data.contraseña})
			.then(
        () =>
        this.navCtrl.setRoot(HomePage),
				error => this.loginError = error.message
			);
	}

}