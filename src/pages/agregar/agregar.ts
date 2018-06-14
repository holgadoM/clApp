import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ManejoClavesProvider } from "../../providers/manejo-claves/manejo-claves";

import { Clave } from "../../clases/clave.class";
import { HomePage } from '../home/home';
import { LoginPage } from '../login/login';


@Component({
  selector: 'page-agregar',
  templateUrl: 'agregar.html',
})
export class AgregarPage {

  public clave: Clave = new Clave();

  constructor(public navCtrl: NavController,
              public _menejoClave : ManejoClavesProvider) {

  }

  guardar(){
    this._menejoClave.agregarClave( this.clave );
    this.navCtrl.setRoot(HomePage);
  }

}
