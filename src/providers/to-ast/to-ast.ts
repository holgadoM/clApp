import { Injectable } from '@angular/core';

import { ToastController } from 'ionic-angular';

/*
  Generated class for the ToAstProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ToAstProvider {

  constructor(private toAst:ToastController) {
    
  }

  mostrarToAst(msg:string){
    const toast = this.toAst.create({
      message: msg,
      duration: 3000
    });
    toast.setPosition("middle");
    toast.present();
  }

}
