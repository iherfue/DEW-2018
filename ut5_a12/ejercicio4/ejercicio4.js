import {paises} from "./lista_paises_prueba.js";

document.getElementById("enviar").addEventListener('click',NuevoPais);

function NuevoPais(){

   var codigoPais = document.getElementById("codigo").value;
   var nombrePais = document.getElementById("nombre").value;
   var poblacionPais = document.getElementById("poblacion").value;

   var codigoFinal = codigoPais.toUpperCase();

    if(codigoPais.length < 2 || isNaN(poblacionPais) || nombrePais == "" || poblacionPais == ""){

       document.getElementById("error").innerHTML ="La población debe ser de tipo númerico. Debe rellenar todos los campos";

    }else{
        paises.nuevoPaisFinal({codigo: codigoFinal, nombre: nombrePais, poblacion: poblacionPais});
        document.getElementById("formulario").reset();
        paises.numeroElementos();
    }

}

document.getElementById("guardaPaises").addEventListener('click',guardaPais);

//Guarda en una cookie el país, pasandolo a un JSON, Ojo con la caducidad de la cookie.

function guardaPais(){

    var json_str = JSON.stringify(paises);
    console.log(json_str);
    document.cookie = json_str + "; expires = Fri, 30 Feb 2019 01:00:00 UTC;"; 
    
}

//Ver Cookie

document.getElementById("cookie").addEventListener('click',verCookie);

function verCookie(){

    paises.numeroElementos();
    console.log('Cookies');
    var c = document.cookie;
    c = c.substring(16,c.length-1);
    console.log(c);
    console.log(document.cookie);

    var json = JSON.parse(c);
    console.log(json);
}

//Eliminar el pais

    document.getElementById("elimina").addEventListener('click',eliminaPais);

    function eliminaPais(){

        var codigo = document.getElementById("codigo").value;
        var codigoFinal = codigo.toUpperCase();

        paises.borrarElemento(codigoFinal);
        document.getElementById("formulario").reset();
        paises.numeroElementos();

    }