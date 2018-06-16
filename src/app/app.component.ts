import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import  firebase  from "firebase";

import { HomePage } from '../pages/home/home';
import { AgregarPage } from '../pages/agregar/agregar';
import { LoginPage } from '../pages/login/login';
import { UsuarioProvider } from '../providers/usuario/usuario';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, private usuario:UsuarioProvider) {
    this.initializeApp();
    

    firebase.auth().onAuthStateChanged( user =>{
      if(user){
        this.pages = [
          { title: 'Inicio', component: HomePage },
          { title:'Agregar', component: AgregarPage},
        ];
      }else{
        this.nav.setRoot(LoginPage);
      }
    });


  }

  

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

  salir(){
    this.usuario.salir();
    window.location.reload();
  }
}
