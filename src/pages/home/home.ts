import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { ManejoClavesProvider } from '../../providers/manejo-claves/manejo-claves';
import { Clave } from '../../clases/clave.class';
import { EditarPage } from '../editar/editar';
import { ToAstProvider } from '../../providers/to-ast/to-ast';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public misClaves:Clave[] = [];

  constructor(public navCtrl: NavController,
              public _manejoClave:ManejoClavesProvider,
              public alerta:AlertController,
              public toAst: ToAstProvider) {
           
              }

  borrar(index){
      let aux = new Clave(this._manejoClave.mostrarClaves[index]);
      const confirm = this.alerta.create({
        title: 'Eliminar',
        message: `Desea eliminar ${aux.url}?`,
        buttons: [
          {
            text: 'Si',
            handler: data => {
              this._manejoClave.borrarLista(index);
              this.toAst.mostrarToAst(`Clave ${aux.url.toUpperCase()} borrada.`)
            }
          },
          {
            text: 'No',
            handler: data =>{

            }
          }
        ]
      });
      confirm.present();
  }

  editar(index){
    this.navCtrl.push(EditarPage, { clave: this._manejoClave.mostrarClaves[index], index : index });
  }

  ver(index:number){
    
    if( !this._manejoClave.mostrarClaves[index].visible ){
      this._manejoClave.mostrarClaves[index].clave =  atob(this._manejoClave.mostrarClaves[index].clave);
      this._manejoClave.mostrarClaves[index].visible = !this._manejoClave.mostrarClaves[index].visible;
    
    }else{
      this._manejoClave.mostrarClaves[index].clave =  btoa(this._manejoClave.mostrarClaves[index].clave);
      this._manejoClave.mostrarClaves[index].visible = !this._manejoClave.mostrarClaves[index].visible;
    }
  }

}
