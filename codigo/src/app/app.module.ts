import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Services } from '@angular/core/src/view';


import {FIREBASE_CONFIG} from '../app/firebase.credentials';
import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database'
import { AngularFireAuth } from 'angularfire2/auth';


import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { RegistrarPage } from '../pages/registrar/registrar';
import {SettingsPage} from '../pages/settings/settings';


import { AuthService } from '../services/auth.service';
import {CafeteriaService} from '../services/cafeteria.service';

import { FormsModule }   from '@angular/forms';

@NgModule({
    declarations: [
     MyApp,
     HomePage,
     LoginPage,
     RegistrarPage,
     SettingsPage,
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
        HomePage,
        LoginPage,
        RegistrarPage,
        SettingsPage,
    ],
    providers: [
    AngularFireAuth,
    AuthService,
    CafeteriaService,

    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}