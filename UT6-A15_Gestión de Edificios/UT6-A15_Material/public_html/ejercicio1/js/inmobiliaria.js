import{Edificio} from './edificio.js';
import{edificiosImportar} from './importar.js';
import {inquilinosImportar} from './importar.js';
/******************** Clase Inmobiliaria (prototipos) ****************************/

function Inmobiliaria(){
    this._edificios=new Array();
};

Inmobiliaria.prototype.addEdificio=function(edificio){
    this._edificios.push(edificio);
};

Inmobiliaria.prototype.getEdificio = function(calle,numero){

    let edificio = '';

    for(var i = 0; i < edificiosImportar.length; i++){

        if(edificiosImportar[i].calle == calle && edificiosImportar[i].numero == numero){

            edificio = (edificiosImportar[i]);
        }
    }

    return edificio;
}

Inmobiliaria.prototype.cargaDatos = function(){

   // this._edificios = edificiosImportar;
    let plantas = '';
    let puertas = '';
  
    for(let i = 0; i < edificiosImportar.length; i++){  
      
        console.log(this._edificios.push(new Edificio(edificiosImportar[i].calle,edificiosImportar[i].numero,edificiosImportar.codigoPostal)));

        plantas = edificiosImportar[i].plantas.length;

        for(let j = 0; j < plantas; j++){

            puertas = edificiosImportar[i].plantas[j];
        //    console.log('Puertas por planta' + puertas);
            this._edificios[i].agregaPlantasYPuertas(1,puertas);

        }
        
        for(let k = 0; k < inquilinosImportar.length; k++){
            
            //let z = Inmobiliaria.prototype.getEdificio(inquilinosImportar[k].calle,inquilinosImportar[k].numero)
            //Asi se queda ivan
            if(this._edificios[i]._calle == inquilinosImportar[k].calle && this._edificios[i]._numero == inquilinosImportar[k].numero){

                this._edificios[i].agregaPropietario(inquilinosImportar[k].piso-1,inquilinosImportar[k].puerta-1,inquilinosImportar[k]);    
            }
            
            
        }
        
    }
    
   // console.log(this._edificios);

}

let inmo = new Inmobiliaria();

console.log(inmo.getEdificio("Primero de Mayo",1));
inmo.cargaDatos();


export{Inmobiliaria};

