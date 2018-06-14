import { Injectable, ViewChild } from '@angular/core';
import { Clave } from "../../clases/clave.class";
import { Nav } from 'ionic-angular';

import { Observable } from 'rxjs/observable';
import { AngularFirestore,AngularFirestoreCollection } from 'angularfire2/firestore';
import { AngularFireAuth } from 'angularfire2/auth';
import firebase from 'firebase';

import { UsuarioProvider } from '../usuario/usuario';
import { LoginPage } from '../../pages/login/login';

import { ToAstProvider } from "../to-ast/to-ast";


@Injectable()
export class ManejoClavesProvider {
  @ViewChild(Nav) nav: Nav;

  public mostrarClaves:Clave[] = [];
  public claves:Clave[] = [];
  public db = firebase.database();
  public uid = "";

  constructor(private toAst:ToAstProvider){

    firebase.auth().onAuthStateChanged( user =>{
      if(user){
       this.uid = user.uid;
       this.CargarClaves();
      }else{
        this.nav.setRoot(LoginPage);
      }
    });

    // aux.ref("asd").set({
    //   nombre:"asd",
    //   apellido:"chau"
    // });
   
   
    // aux.ref("asd").on('value', rst =>{
    //   console.log(rst.val().apellido);
    // });
     
  }


  // CargarClaves(){
  //   if ( localStorage.getItem("claves") ) {
      
  //     let aux = JSON.parse(localStorage.getItem("claves"));
  //     this.claves = JSON.parse(localStorage.getItem("claves"));
      
  //     this.mostrarClaves = aux;
  //   }
  // }
  CargarClaves(){
    this.mostrarClaves = [];

    this.db.ref('clave/'+this.uid).once('value',(rst)=>{
      rst.forEach( item =>{
        this.mostrarClaves.push(item.val());
      } )
      
    });
  }

  agregarClave(nuevaClave:Clave){
    let NClave = new Clave(nuevaClave);
     NClave.clave = btoa( NClave.clave );
     this.mostrarClaves.push(NClave);

    this.db.ref('clave/'+this.uid).push(NClave);

    
  }
  

//   agregarClave( nueva:Clave ){
//     let NClave = new Clave(nueva);
//     NClave.clave = btoa( NClave.clave );
//     this.claves.push(NClave);
//     this.GuardaLocal();
//   }

//   GuardaLocal(){
//     localStorage.setItem("claves", JSON.stringify(this.claves));
//     this.CargarClaves();
//   }

  borrarLista( index:number ){
    this.mostrarClaves.splice(index,1);
    
    this.db.ref('clave/'+this.uid).set(this.mostrarClaves);
 }

actualizarListaIndex( id:number , claveActu:Clave ){
  let claveUpdate = new Clave( claveActu);
  this.mostrarClaves[id] = claveUpdate;
  this.mostrarClaves[id].clave = btoa(this.mostrarClaves[id].clave);

  this.db.ref('clave/'+this.uid).set(this.mostrarClaves).then( () =>{
    this.toAst.mostrarToAst("Dato actualizado!");
  });
}

}
