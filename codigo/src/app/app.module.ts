import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule, Menu } from 'ionic-angular';
import { MyApp } from './app.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import {FIREBASE_CONFIG} from '../app/firebase.credentials';
import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database'
import { AngularFireAuth } from 'angularfire2/auth';

import {CarritaPage} from '../pages/carrita/carrita';
import {FavoritosPage} from '../pages/favoritos/favoritos';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import {MenuPage} from '../pages/menu/menu';
import { RegistrarPage } from '../pages/registrar/registrar';
import {SettingsPage} from '../pages/settings/settings';



import { AuthService } from '../services/auth.service';
import {CafeteriaService} from '../services/cafeteria.service';

import { FormsModule }   from '@angular/forms';
import { MenuService } from '../services/menu.service';
import { ListaCarrito } from '../services/carrita.service'
import { DetallesproductoPage} from '../pages/detallesproducto/detallesproducto';
import { CuentaService } from '../services/cuenta.service';
import { PedidoService } from '../services/pedido.service';

@NgModule({
    declarations: [
     MyApp,
     CarritaPage,
     FavoritosPage,
     HomePage,
     LoginPage,
     RegistrarPage,
     SettingsPage,
     MenuPage,
     DetallesproductoPage

     ],
    imports: [
     BrowserModule,
     IonicModule.forRoot(MyApp),
     IonicModule,
     AngularFireModule.initializeApp(FIREBASE_CONFIG),
     AngularFireDatabaseModule,
     FormsModule,
     ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        CarritaPage,
        FavoritosPage,
        HomePage,
        LoginPage,
        MenuPage,
        RegistrarPage,
        SettingsPage,
        DetallesproductoPage
    ],
    providers: [
    AngularFireAuth,
    AuthService,
    CafeteriaService,
    MenuService,
    CuentaService,
    PedidoService,
    StatusBar,
    SplashScreen,
    ListaCarrito,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}