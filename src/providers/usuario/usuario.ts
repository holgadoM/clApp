import { Injectable } from '@angular/core';
//import { GooglePlus } from '@ionic-native/google-plus';
import  firebase  from "firebase";
import { Platform } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';

@Injectable()
export class UsuarioProvider {

  public user:any = [];

  constructor(public platform:Platform, 
              
              private afAuth: AngularFireAuth) {
               
              }

 

  // public async login(){
  //   if(this.platform.is('cordova')){
 
  //     return this.NativeLogin().then( (r) =>{
     
  //        this.afAuth.authState.subscribe( rst =>{
  //         console.log(rst);
  //         this.user.uid = rst.uid;
  //       } );
  //     } );
  //   }else{
    
  //     return this.webGoogleLogin().then( (r) =>{
     
  //       this.afAuth.authState.subscribe( rst =>{
  //         console.log(rst);
  //         this.user.uid = rst.uid;
  //       });
  //     });
  //   }
  // }
  // // public async login(){

  // //   return this.NativeLogin().then( (r) =>{
  // //           console.log("then: ", r);
  // //            this.afAuth.authState.subscribe( rst =>{
  // //             console.log(rst);
  // //             //this.user.uid = rst.uid;
              
  // //           } );
  // //         } );

  // // }

  // private async NativeLogin(){
  
  //   const gplusUser = await this.googleLogin.login({
  //     'webClientId': '257251618634-4vmpr827e4vk85eaabmtrete5db4c6bp.apps.googleusercontent.com',
  //     'offline': true,
  //   });

  //   return firebase.auth.GoogleAuthProvider.credential(gplusUser.idToken);
    
  // }

  // private async webGoogleLogin(): Promise<void> {
  //   try {
  //     const provider = new firebase.auth.GoogleAuthProvider();
  //     console.log(this.afAuth.auth.signInWithPopup(provider));
  //     const credential = await this.afAuth.auth.signInWithPopup(provider);

  //     return credential;
  //   } catch(err) {
  //     console.log(err)
  //   }
  
  // }

  // salir() {
  //   this.afAuth.auth.signOut();
  // }

}
