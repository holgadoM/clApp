import { Injectable } from '@angular/core';
import { GooglePlus } from '@ionic-native/google-plus';
import  firebase  from "firebase";
import { Platform } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from "rxjs";

@Injectable()
export class UsuarioProvider {

  public user:any = [];

  constructor(public platform:Platform, 
              public googleLogin:GooglePlus,
              private afAuth: AngularFireAuth) {
              }

  public async login(){
    if(this.platform.is('cordova')){
      return this.NativeLogin().then( () =>{
         this.afAuth.authState.subscribe( rst =>{
          this.user.uid = rst.uid;
        } );
      } );
    }else{
      return this.webGoogleLogin().then( () =>{
        this.afAuth.authState.subscribe( rst =>{
          this.user.uid = rst.uid;
        });
      });
    }
  }

  private async NativeLogin(){
    const gplusUser = await this.googleLogin.login({
      'webClientId': '257251618634-4vmpr827e4vk85eaabmtrete5db4c6bp.apps.googleusercontent.com',
      'offline': true,
      'scopes': 'profile email'
    });
    return await firebase.auth.GoogleAuthProvider.credential(gplusUser.idToken);
    }

  private async webGoogleLogin(): Promise<void> {
    try {
      const provider = new firebase.auth.GoogleAuthProvider();
      const credential = await this.afAuth.auth.signInWithPopup(provider);
      return credential;
    } catch(err) {
      console.log(err)
    }
  
  }

  salir() {
    this.afAuth.auth.signOut();
  }

}
