import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Services } from '@angular/core/src/view';

import {FIREBASE_CONFIG} from '../app/firebase.credentials';
import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database'
import { AngularFireAuth } from 'angularfire2/auth';


import { LoginPage } from '../pages/login/login';
import { RegistrarPage } from '../pages/registrar/registrar';

import { AuthService } from '../services/auth.service';

import { FormsModule }   from '@angular/forms';

@NgModule({
    declarations: [
     MyApp,
     HomePage,
     LoginPage,
     RegistrarPage
     ],
    imports: [
     BrowserModule,
     IonicModule.forRoot(MyApp),
     AngularFireModule.initializeApp(FIREBASE_CONFIG),
     AngularFireDatabaseModule,
     FormsModule
     ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        HomePage,
        LoginPage,
        RegistrarPage
    ],
    providers: [
    AngularFireAuth,
    AuthService,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ]
})
export class AppModule {}