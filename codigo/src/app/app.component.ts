import { Component, ViewChild} from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { FavoritosPage } from '../pages/favoritos/favoritos';
import { LoginPage } from '../pages/login/login';
import { SettingsPage } from '../pages/settings/settings';

// services
import { AuthService } from '../services/auth.service';
import { CafeteriaService } from '../services/cafeteria.service';
import { CarritaPage } from '../pages/carrita/carrita';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;
  pages: Array<{ title: string, component: any, icon: string}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, private auth: AuthService, private cafeteriaService: CafeteriaService) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: ' Home', component: HomePage, icon:"home" },
      { title: ' Shopping Cart', component: CarritaPage, icon: "cart"},
      { title: ' Favoritos', component: FavoritosPage, icon: "heart-outline"},
      { title: ' Cuenta', component: SettingsPage, icon:"settings"},
      { title: ' Logout', component: LoginPage, icon: "log-out"}
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.rootPage = LoginPage;
    });
  }

  openPage(page) {
    this.nav.setRoot(page.component);
  }
}