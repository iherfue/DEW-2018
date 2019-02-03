
/************* Clase Edificio (Prototipos) *********/

function Edificio(calle,numero,codigoPostal){
    this._calle=calle || "Sin calle";
    this._numero=numero || 0;
    this._codigoPostal=codigoPostal || 390001;
    this._plantas=new Array();
}

/* nPuertas debe ser un número entre 1 y 4. De no ser así, se establece en 4 */
Edificio.prototype.agregaPlantasYPuertas=function(nPlantas,nPuertas){
    if(nPuertas>4)
        nPuertas=4; 
    
    for (var i = 0; i < nPlantas; i++) {
        this._plantas.push(new Array(nPuertas));
        for (var j = 0; j < nPuertas; j++) {
            this._plantas[this._plantas.length-1][j]=null;
        }
    } 
};
    
 Edificio.prototype.modificaNumero=function(numero){
     this._numero=numero;
 };
    
Edificio.prototype.modificaCalle=function(calle){
       this._calle=calle;
};
    
Edificio.prototype.modificaCP=function(cp){
   this._codigoPostal=cp;
 };
    
Edificio.prototype.getCalle=function(){
   return this._calle;
};
    
Edificio.prototype.getNumero=function(){
    return this._numero;
};
    
Edificio.prototype.getCP=function(){
     return this._codigoPostal;
};
    
Edificio.prototype.agregaPropietario=function(planta,puerta,propietario){
    //alert(planta)
    this._plantas[planta][puerta]=propietario;
 //   console.log("El propietario es " + this._plantas[planta][puerta]);
};

Edificio.prototype.getNumeroPlantas=function(){
    return this._plantas.length;
};

Edificio.prototype.getNumeroPuertas=function(planta){
    return this._plantas[planta].length;
}

Edificio.prototype.getPropietario=function(planta,puerta){
    return this._plantas[planta][puerta];
}
    
export{Edificio};