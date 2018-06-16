import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ManejoClavesProvider } from "../../providers/manejo-claves/manejo-claves";
import { Clave } from "../../clases/clave.class";
import { HomePage } from '../home/home';

/**
 * Generated class for the EditarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-editar',
  templateUrl: 'editar.html',
})
export class EditarPage {

  
  public clave: Clave;
  public index:number;

  constructor(public navCtrl: NavController,
              public _menejoClave : ManejoClavesProvider,
              public _parametros:NavParams) {
                
        if(_parametros.get('clave')){
          let claveParam = _parametros.get('clave');
          claveParam.clave = atob(claveParam.clave);
          this.clave = new Clave( claveParam );
          this.index = _parametros.get('index');
        }

  }

  guardar(){

    this._menejoClave.actualizarListaIndex( this.index , this.clave );
    this.navCtrl.setRoot(HomePage);
  }


}
