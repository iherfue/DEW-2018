import{Inmobiliaria} from './inmobiliaria.js';
import { Edificio } from './edificio.js';
import{cargaImagen,creaBotonesAnadir,creaNombrePropietario,cargaFotoMiembros,Modificar,Borrar} from './funciones_auxiliares.js';

/* Instanciamos un objeto de tipo inmobiliaria y cargamos los datos a importar.
 * Definición de manejadores de eventos y funciones de acceso al DOM.
 */


let inmobi = new Inmobiliaria();

inmobi.cargaDatos();

window.addEventListener('load',cargaEdificio);

console.log(inmobi._edificios[0]._plantas[0][0].nombre)

//BUCLE PARA DAR LA VUELTA AL EDIFICIO

    for(let index in inmobi._edificios ){

        inmobi._edificios[index]._plantas = inmobi._edificios[index]._plantas.reverse();
    }


function cargaEdificio(){


    for(let i = 0; i < inmobi._edificios.length; i++){
    
        //elemento div
        let div  = document.createElement('div');
        div.setAttribute("class","edificio");
        div.setAttribute("id",`edificio ${i}`);
        //Creamos H1
        let h1 = document.createElement('h1');
        let texto = document.createTextNode(`C/ ${inmobi._edificios[i]._calle}`);
        h1.appendChild(texto)
        document.getElementById('cuerpo').appendChild(div).appendChild(h1);

        //Creamos el div pisos
        let divPisos = document.createElement('div');
        divPisos.setAttribute('class','pisos');
        divPisos.setAttribute("id",[i]);

        document.getElementById('cuerpo').appendChild(div).appendChild(divPisos);

        
        for(let j = 0; j < inmobi._edificios[i]._plantas.length; j++){
        
            //Creamos la planta
            let divPlanta = document.createElement('div');
            divPlanta.setAttribute('class','planta');
            document.getElementById('cuerpo').appendChild(div).appendChild(divPisos).appendChild(divPlanta);
            
            //Si hay dos propietarios
            if(inmobi._edificios[i]._plantas[j].length == 2){

                for(let x = 0; x < 2; x++){

                    let divColumnas = document.createElement('div');
                    divColumnas.setAttribute('class','propietario col-2');
                    document.getElementById('cuerpo').appendChild(div).appendChild(divPisos).appendChild(divPlanta).appendChild(divColumnas);
                    
                    //Si la puerta esta vacía genera que esta vacio y carga la imagen(X)
                    if(inmobi._edificios[i]._plantas[j][x] == null){

                        //No hay nombre del propietario
                        let textoNombrePropietario = 'Vacio';
                        creaNombrePropietario(div,divPisos,divPlanta,divColumnas,textoNombrePropietario);

                        //Carga Imagen
                        cargaImagen(div,divPisos,divPlanta,divColumnas);

                        //Carga el botón añadir
                        creaBotonesAnadir(div,divPisos,divPlanta,divColumnas,j,x,i);

                    }else{

                        //Pasamos como valor el nombre del propietario, llamamos a la funcion para que ponga el nombre
                        let textoNombrePropietario = inmobi._edificios[i]._plantas[j][x].nombre;
                        creaNombrePropietario(div,divPisos,divPlanta,divColumnas,textoNombrePropietario);

                        //Imagen de los miembros de la familia Pasamos como parámetro el número de miembros de la familia, generara una foto según el miembro
                        let miembros = inmobi._edificios[i]._plantas[j][x].miembros;
                        let genero = inmobi._edificios[i]._plantas[j][x].genero;
                        cargaFotoMiembros(div,divPisos,divPlanta,divColumnas,miembros,genero);

                        //Genera boton modificar
                        let posicion = `${j} ${x} ${i}`; //i posicion del edificio
                        Modificar(div,divPisos,divPlanta,divColumnas,posicion);

                        //Genera boton Eliminar
                        let nombre =  inmobi._edificios[i]._plantas[j][x].nombre;
                        Borrar(div,divPisos,divPlanta,divColumnas,nombre);
                        
                    }
                }
            }
            

            //Si hay un propietario
            if(inmobi._edificios[i]._plantas[j].length == 1){

                let divColumnas = document.createElement('div');
                divColumnas.setAttribute('class','propietario col-4');
                document.getElementById('cuerpo').appendChild(div).appendChild(divPisos).appendChild(divPlanta).appendChild(divColumnas);

                if(inmobi._edificios[i]._plantas[j][0] == null){
                    
                    //No hay nombre del propietario
                    let textoNombrePropietario = 'Vacio';
                    creaNombrePropietario(div,divPisos,divPlanta,divColumnas,textoNombrePropietario)

                    //Carga Imagen
                    cargaImagen(div,divPisos,divPlanta,divColumnas);

                    creaBotonesAnadir(div,divPisos,divPlanta,divColumnas,j,0,i);

                }else{

                    //Generamos el nombre del propietario
                    let textoNombrePropietario = inmobi._edificios[i]._plantas[j][0].nombre;
                    creaNombrePropietario(div,divPisos,divPlanta,divColumnas,textoNombrePropietario)

                    //Genera foto de los miembros que hay en la familia
                    let miembros = inmobi._edificios[i]._plantas[j][0].miembros;
                    let genero = inmobi._edificios[i]._plantas[j][0].genero;
                    cargaFotoMiembros(div,divPisos,divPlanta,divColumnas,miembros,genero);
                    
                    //Crea el boton MODIFICAR
                    let posicion = `${j} ${0} ${i}`; //i posicion del edificio
                    Modificar(div,divPisos,divPlanta,divColumnas,posicion);
                    
                    //CREA EL BOTON ELIMINAR
                    let nombre = inmobi._edificios[i]._plantas[j][0].nombre

                    Borrar(div,divPisos,divPlanta,divColumnas,nombre)
                  
                }                    

            }

            //Si hay 4 propietarios
            if(inmobi._edificios[i]._plantas[j].length == 4){

                //Bucle para crear las columnas
                for(let z = 0; z < 4; z++){

                    var divColumnas = document.createElement('div');
                    divColumnas.setAttribute('class','propietario col-1');
                    document.getElementById('cuerpo').appendChild(div).appendChild(divPisos).appendChild(divPlanta).appendChild(divColumnas);

                    //Nombre del propietario
                    let nombrePropietario = document.createElement('p');
                
                    if(inmobi._edificios[i]._plantas[j][z] == null){

                        let textoNombrePropietario = 'Vacio';
                        creaNombrePropietario(div,divPisos,divPlanta,divColumnas,textoNombrePropietario);

                        //Carga Imagen Pasamos los parámetros
                        cargaImagen(div,divPisos,divPlanta,divColumnas);

                        //Creamos el botón añadir, pasandole la posición del piso y la puerta
                        creaBotonesAnadir(div,divPisos,divPlanta,divColumnas,j,z,i)                     

                    }else{

                        let textoNombrePropietario = inmobi._edificios[i]._plantas[j][z].nombre;
                        creaNombrePropietario(div,divPisos,divPlanta,divColumnas,textoNombrePropietario);

                        //Genera la imagen de los miembros de la familia, además pasamos el género

                        let miembros = inmobi._edificios[i]._plantas[j][z].miembros;
                        let genero = inmobi._edificios[i]._plantas[j][z].genero;
                        cargaFotoMiembros(div,divPisos,divPlanta,divColumnas,miembros,genero);
                    
                        //Generamos el boton para modificar
                        let posicion = `${j} ${z} ${i}`;    //i posicion del edificio z puerta j planta
                        Modificar(div,divPisos,divPlanta,divColumnas,posicion);

                        //Genera el botón para borrar
                        let nombre = inmobi._edificios[i]._plantas[j][z].nombre;
                        Borrar(div,divPisos,divPlanta,divColumnas,nombre);

                    }
                }
            }
        }
    }
}

/**
 * **** 
 * ****
 * BORRAR PROPIETARIO
 * ****
 * ****
 */

export function borrarPropietario(){
    
    var nombrePropietario = this.value;
    //console.log(inmobi._edificios[0]._plantas[1][1])
    for(let i = 0; i < inmobi._edificios.length; i++){

        for(let j = 0; j < inmobi._edificios[i]._plantas.length; j++){
           
            for(let x = 0; x < 4; x++){

                if(inmobi._edificios[i]._plantas[j][x] != null){
                
                    if(inmobi._edificios[i]._plantas[j][x].nombre == nombrePropietario){
                        console.log(inmobi._edificios[i]._plantas[j][x])
                        
                        inmobi._edificios[i]._plantas[j][x] = null
                    }
                }
            }   
        }
    }

    console.log(inmobi._edificios)
    document.getElementById('edificio 0').remove();
    document.getElementById('edificio 1').remove();
    document.getElementById('edificio 2').remove();
    
    cargaEdificio()
}

/**
 * **** 
 * ****
 * INSERTAR PROPIETARIO
 * ****
 * ****
 */


var edificio,planta,p;

export function cargaModal(){

    var puerta = this.value.split(' ');
    console.log(puerta)
    document.getElementById('formulario').style.display = 'block';

    //Ponemos los valores a la puerta y planta
     edificio = document.getElementById('planta').value = parseInt(puerta[2])
     planta = document.getElementById('planta').value = parseInt(puerta[0]);  //piso es planta
     p = document.getElementById('puerta').value = parseInt(puerta[1])+1//Puerta

    //Damos al añadir del formulario
    document.getElementById('formulario-aniadir').addEventListener('click',function(){

        //Datos del propietario
        let nombre = document.getElementById('nombre').value;
        let apellidos = document.getElementById('apellidos').value;
        let unidadFamiliar = document.getElementById('unidad-familiar').value;

        let genero = 'mujer';
        if(document.getElementById('genero-hombre').checked){

            genero = 'hombre';
        }

        //Tipo de miembro

        switch(unidadFamiliar){

            case 'pareja':
            unidadFamiliar = 2;
            break;

            case 'familia-1':
            unidadFamiliar = 3
            break;

            case 'familia-2':
            unidadFamiliar = 4
            break;

            case 'familia-mas':
            unidadFamiliar = 5
            break;

            case 'soltero':
            unidadFamiliar = 1
            break;

        }

        //Si es el primer edificio (0) inserta los siguientes datos;
        if(edificio == 0){

            let propietario = {calle:"General Yagüe",numero:2,piso: planta, puerta: p, nombre: nombre + ' ' + apellidos ,genero: genero, miembros: unidadFamiliar};
            inmobi._edificios[edificio].agregaPropietario(planta,p-1,propietario);

        }
        
        //Si es el segundo edificio (1) inserta los siguientes datos
        if(edificio == 1){  

            let propietario = {calle:"Primero de Mayo",numero:1,piso: planta, puerta: p, nombre: nombre + ' ' + apellidos ,genero: genero, miembros: unidadFamiliar};
            inmobi._edificios[edificio].agregaPropietario(planta,p-1,propietario);
        }

        //Si es el segundo edificio (2) inserta los siguientes datos
        if(edificio == 2){

            let propietario = {calle:"Primero de Mayo",numero:1,piso: planta, puerta: p, nombre: nombre + ' ' + apellidos ,genero: genero, miembros: unidadFamiliar};
            inmobi._edificios[edificio].agregaPropietario(planta,p-1,propietario);

        }

        //Oculta el formulario
        document.getElementById('formulario').style.display  = 'none';
    
        //Elimina el edificio del DOM
        document.getElementById('edificio 0').remove();
        document.getElementById('edificio 1').remove();
        document.getElementById('edificio 2').remove();
        
        //Vuelve a cargar el edificio
        cargaEdificio()     
    })

    //Si le da a cerrar ene l formulario, se oculta
    document.getElementById('formulario-borrar').addEventListener('click',function(){

        document.getElementById('formulario').style.display  = 'none';
    })
   
}


/*********************
 * *******************
 * MODIFICA AL PROPIETARIO
 */

export function modificaPropietario(){

    var puerta = this.value.split(' ');
    console.log(puerta)
    document.getElementById('formulario').style.display = 'block';

    //Ponemos los valores a la puerta y planta
    edificio = document.getElementById('planta').value = parseInt(puerta[2])
    planta = document.getElementById('planta').value = parseInt(puerta[0]);  //piso es planta
    p = document.getElementById('puerta').value = parseInt(puerta[1])//Puerta

    
    let nombre = inmobi._edificios[edificio]._plantas[planta][p].nombre;

    let nombreCompleto = nombre.split(' ');

    //Obtenemos el nombre
    let primerNombre = nombreCompleto[0];
    document.getElementById('nombre').value = primerNombre;

    //Obtenemos el apellido
    let apellidos = nombreCompleto[1];
    document.getElementById('apellidos').value = apellidos;

    //obtenemos unidadFamiliar

    let miembros = inmobi._edificios[edificio]._plantas[planta][p].miembros;

    switch(miembros){

        case 1:
        miembros = 'soltero';
        break;

        case 2:
        miembros = 'pareja';
        break;

        case 3:
        miembros = 'familia-1';
        break;

        case 4:
        miembros = 'familia-2';
        break;

        case 5: case 6: case 7:
        miembros = 'familia-mas';
        break;

    }

    document.getElementById('unidad-familiar').value = miembros;

    let genero = inmobi._edificios[edificio]._plantas[planta][p].genero;

    if(genero == 'hombre'){

        document.getElementById("genero-hombre").checked = true;

    }else{
        document.getElementById("genero-mujer").checked = true;
    }

    document.getElementById('formulario-modificar').addEventListener('click',function(){

        //Datos del propietario
        let nombreFinal = document.getElementById('nombre').value;
        let apellidosFinal = document.getElementById('apellidos').value;
        let unidadFamiliarFinal = document.getElementById('unidad-familiar').value;

        switch(unidadFamiliarFinal){

            case 'pareja':
            unidadFamiliarFinal = 2;
            break;

            case 'familia-1':
            unidadFamiliarFinal = 3
            break;

            case 'familia-2':
            unidadFamiliarFinal = 4
            break;

            case 'familia-mas':
            unidadFamiliarFinal = 5
            break;

            case 'soltero':
            unidadFamiliarFinal = 1
            break;

        }
        
        let genero = 'mujer';
        if(document.getElementById('genero-hombre').checked){

            genero = 'hombre';
        }


        if(edificio == 0){
            
            let propietario = {calle:"General Yagüe",numero:2,piso: planta, puerta: p, nombre: nombreFinal + ' ' + apellidosFinal ,genero: genero, miembros: unidadFamiliarFinal};
            inmobi._edificios[edificio].agregaPropietario(planta,p,propietario);

        }

        //Si es el segundo edificio (1) inserta los siguientes datos
        if(edificio == 1){  

            let propietario = {calle:"Primero de Mayo",numero:1,piso: planta, puerta: p, nombre: nombreFinal + ' ' + apellidosFinal ,genero: genero, miembros: unidadFamiliarFinal};
            inmobi._edificios[edificio].agregaPropietario(planta,p,propietario);
        }

        //Si es el segundo edificio (2) inserta los siguientes datos
        if(edificio == 2){

            let propietario = {calle:"Primero de Mayo",numero:1,piso: planta, puerta: p, nombre: nombreFinal + ' ' + apellidosFinal ,genero: genero, miembros: unidadFamiliarFinal};
            inmobi._edificios[edificio].agregaPropietario(planta,p,propietario);

        }

        document.getElementById('formulario').style.display  = 'none';

        //Elimina el edificio del DOM
        document.getElementById('edificio 0').remove();
        document.getElementById('edificio 1').remove();
        document.getElementById('edificio 2').remove();
        
        //Vuelve a cargar el edificio
        cargaEdificio()     
        console.log(inmobi._edificios[0])
    });

    //Si le da a cerrar ene l formulario, se oculta
    document.getElementById('formulario-borrar').addEventListener('click',function(){

        
    });
}
