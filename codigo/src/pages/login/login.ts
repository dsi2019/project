
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {RegistrarPage} from "../registrar/registrar"
import {HomePage} from '../home/home'



import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { stringCompare } from '@firebase/database/dist/src/core/util/util';
import { HomeStaffPage } from '../home-staff/home-staff';

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
  }

  onLoadRegistrarPage(){
    this.navCtrl.push(RegistrarPage);
  }

  tipoUsuario(correo: string, password: string){
    if ((correo == ("admin@admin.com") || correo == ("Admin@admin.com"))  && ((password == "admin@admin.com"))|| (password == "admin@admin.com")){
      this.navCtrl.setRoot(HomeStaffPage);
    }
    else {
      this.navCtrl.setRoot(HomePage)
    }
  }


  login() {
    let data = this.form.value;
    console.log(data);
		this.auth.signInWithEmail({email:data.correo, password:data.contraseña})
			.then(
        () =>
            this.tipoUsuario(data.correo,data.contraseña),
				error => this.loginError = error.message
			);
	}

}