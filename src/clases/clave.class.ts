export class Clave {
    usuario:string = "";
    clave:string = "";
    url:string = "";
    descripcion?:string = "";
    visible?:boolean = false;

    constructor(miClave?:Clave){
        if(miClave){
            this.usuario = miClave.usuario;
            this.clave = miClave.clave;
            this.url = miClave.url;
            this.descripcion = miClave.descripcion;
        }
    }
    
}