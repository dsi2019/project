
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { ToastController } from 'ionic-angular';


import { AuthService } from '../../services/auth.service';
import {HomePage} from '../home/home';
import {LoginPage} from '../login/login';
import { CuentaService } from '../../services/cuenta.service';
import { stringCompare } from '@firebase/database/dist/src/core/util/util';
import firebase from 'firebase';

@IonicPage()
@Component({
  selector: 'page-registrar',
  templateUrl: 'registrar.html',
})
export class RegistrarPage {
  registrarError: string;
  form: FormGroup;
  userID: string;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private auth: AuthService,
    fb: FormBuilder,
    public toastCtrl: ToastController,
    private cuentaService: CuentaService
    ){
		this.form = fb.group({
      nombre: ['',Validators.required],
			correo: ['',Validators.required],
			telefono: ['',Validators.required],
			contraseña: ['',Validators.required]
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegistrarPage');
  }

  onLoadLoginPage(){
    this.navCtrl.push(LoginPage);
  }

  registrar_existoso(nombre: string, email: string, telefono: string){
    console.log("registration success");
    this.cuentaService.addCuenta({nombre: nombre,
              email: email,
              telefono: telefono,
              iban: ""
    });
    let toast = this.toastCtrl.create({
      message: '¡Cuenta creada!',
      duration: 2000,
      position: 'bottom'
    });
    toast.present(toast);
    this.navCtrl.setRoot(HomePage);
    this.userID = firebase.auth().currentUser.uid;
    this.cuentaService.addCuenta({nombre: nombre,
      email: email, 
      telefono: "",
      iban: "",
      userID: this.userID
});
  }

registrar(){
  let data = this.form.value;
  this.auth.registrar({email:data.correo, password:data.contraseña}).then(
    () => this.registrar_existoso(data.nombre, data.correo, data.telefono),
    error => {
      var errorCode = error.code;
      var errorMessage = error.message;
      if (errorCode == 'auth/weak-password') {
        alert('The password is too weak.');
      } else {
        alert(errorMessage);
      }
    }
  );
  this.navCtrl.pop();
}



}