export function cargaImagen(div,divPisos,divPlanta,divColumnas){

    //Imagen de que esta vacio
    let imagen = document.createElement('img');
    imagen.setAttribute('src','img/vacio.jpg');
    document.getElementById('cuerpo').appendChild(div).appendChild(divPisos).appendChild(divPlanta).appendChild(divColumnas).appendChild(imagen);

}

import{cargaModal} from './ejercicio1.js';

export function creaBotonesAnadir(div,divPisos,divPlanta,divColumnas,j,z,i){

    //Crear un div para los botones
    let divBotones = document.createElement('div');
    divBotones.setAttribute('id','boton');
    document.getElementById('cuerpo').appendChild(div).appendChild(divPisos).appendChild(divPlanta).appendChild(divColumnas).appendChild(divBotones);
    let botonAniadir = document.createElement('BUTTON');
    botonAniadir.innerHTML = 'Añadir';
    botonAniadir.setAttribute('class','button.aniadir');
    botonAniadir.addEventListener('click',cargaModal);
    let posicion = `${j} ${z} ${i}` ;
    console.log(posicion);
    botonAniadir.setAttribute('value',`${posicion}`);
    document.getElementById('cuerpo').appendChild(div).appendChild(divPisos).appendChild(divPlanta).appendChild(divColumnas).appendChild(divBotones).appendChild(botonAniadir);
}

export function creaNombrePropietario(div,divPisos,divPlanta,divColumnas,textoNombrePropietario){

    let nombrePropietario = document.createElement('p');
    let texto = document.createTextNode(textoNombrePropietario);
    nombrePropietario.appendChild(texto);
    document.getElementById('cuerpo').appendChild(div).appendChild(divPisos).appendChild(divPlanta).appendChild(divColumnas).appendChild(nombrePropietario);    
}

export function cargaFotoMiembros(div,divPisos,divPlanta,divColumnas,miembros,genero){

    if(miembros == 2){

      let imagen = document.createElement('img');
      imagen.setAttribute('src','img/pareja.jpg');
      document.getElementById('cuerpo').appendChild(div).appendChild(divPisos).appendChild(divPlanta).appendChild(divColumnas).appendChild(imagen);
}

    if(miembros == 1 && genero == 'hombre'){

      let imagen = document.createElement('img');
      imagen.setAttribute('src','img/hombre.jpg');
      document.getElementById('cuerpo').appendChild(div).appendChild(divPisos).appendChild(divPlanta).appendChild(divColumnas).appendChild(imagen);
    }

    if(miembros == 1 && genero == 'mujer'){

      let imagen = document.createElement('img');
      imagen.setAttribute('src','img/mujer.jpg');
    document.getElementById('cuerpo').appendChild(div).appendChild(divPisos).appendChild(divPlanta).appendChild(divColumnas).appendChild(imagen);
    }

    if(miembros == 3){

    let imagen = document.createElement('img');
    imagen.setAttribute('src','img/familia-1.jpg');
    document.getElementById('cuerpo').appendChild(div).appendChild(divPisos).appendChild(divPlanta).appendChild(divColumnas).appendChild(imagen);
    }

    if(miembros >= 4){

    let imagen = document.createElement('img');
    imagen.setAttribute('src','img/familia-2.jpg');
    document.getElementById('cuerpo').appendChild(div).appendChild(divPisos).appendChild(divPlanta).appendChild(divColumnas).appendChild(imagen);
    }
}

import {modificaPropietario} from './ejercicio1.js';

export function Modificar(div,divPisos,divPlanta,divColumnas,posicion){

    let divBotones = document.createElement('div');
    divBotones.setAttribute('id','boton');
    document.getElementById('cuerpo').appendChild(div).appendChild(divPisos).appendChild(divPlanta).appendChild(divColumnas).appendChild(divBotones);
    let botonModifica = document.createElement('BUTTON');
    botonModifica.innerHTML = 'Modificar';
    botonModifica.setAttribute('class','modificar');
    botonModifica.setAttribute('value',posicion);
    botonModifica.addEventListener('click',modificaPropietario);
    document.getElementById('cuerpo').appendChild(div).appendChild(divPisos).appendChild(divPlanta).appendChild(divColumnas).appendChild(divBotones).appendChild(botonModifica);
}


import{borrarPropietario} from './ejercicio1.js';

export function Borrar(div,divPisos,divPlanta,divColumnas,nombre){

    
    let botonBorrar = document.createElement('BUTTON');
    botonBorrar.innerHTML = 'Borrar';
    botonBorrar.setAttribute('class','borrar');
    botonBorrar.id='borrar';
    botonBorrar.addEventListener('click',borrarPropietario);
    botonBorrar.setAttribute('value',nombre)

    document.getElementById('cuerpo').appendChild(div).appendChild(divPisos).appendChild(divPlanta).appendChild(divColumnas).appendChild(botonBorrar);
}
