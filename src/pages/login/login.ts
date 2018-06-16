import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { GooglePlus } from '@ionic-native/google-plus';
import  firebase  from "firebase";

import { UsuarioProvider } from "../../providers/usuario/usuario";
import { HomePage } from '../home/home';


@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  userProfile: any = null;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams, 
              public googleLogin:GooglePlus,
              public userLgin:UsuarioProvider) {    
  }

  login(){
    this.userLgin.login();
    this.estaLoguedo();
  }

  estaLoguedo(){
    firebase.auth().onAuthStateChanged( user =>{
      if (user){
        this.userProfile = user;
        this.navCtrl.setRoot(HomePage);
      } else { 
        this.userProfile = null; 
      }
    } );
  }

}
