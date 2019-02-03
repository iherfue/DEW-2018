    //Realizamos los eventos al escribir en el input, y al cambiar el ckeckbox
    document.getElementById("largo").addEventListener('input',calculaVolumetrico);
    document.getElementById("condiciones").addEventListener('change',muestraBoton);

    //Validaciones
    document.getElementById("cp").addEventListener('input',compruebaCP);
    document.getElementById("cp_destino").addEventListener('input',compruebaCPD);

    //Función que calcula el volumen volumetrico, obtenemos del DOM los valores necesario (Ancho,alto,largo)
    //Realizamos el calculo, y lo mostramos en el campo volumetrico
    function calculaVolumetrico(){

        var ancho = document.getElementById("ancho").value;
        var alto = document.getElementById("alto").value;
        var largo = document.getElementById("largo").value;

        var calculo = ancho * alto * largo;
        var total = calculo / 5000;

        document.getElementById("volumetrico").value = total;
        console.log(total);
    }

    //Mostramos el boton de enviar cuando este checked el elemento condiciones, en ese caso se mostrará el botón enviar (display inline)
    //en otro caso se ocultará (display none)
    function muestraBoton(){

        if(document.getElementById("condiciones").checked){

            document.getElementById("enviar").style.display = "inline";
        }else{
            document.getElementById("enviar").style.display = "none";
        }
    }

    //Comprueba CP, cogemos el valor del cp y comprobamos si es un número con la función (isNaN), si da false no se despliega, 
    //si es true es decir hay texto se notifica
    function compruebaCP(){

        var cp = document.getElementById("cp").value;

        if(!isNaN(cp)) {
            
            document.getElementById("error").style.display = "none";

          }else{
            document.getElementById("error").style.display = "inline";
            document.getElementById("error").innerHTML ="Este Campo solo puede llevar números";
        }
    }

    //Metodo que comprueba el CP del destino, el funcionamiento básicamente es como lo anteriormente
    function compruebaCPD(){

        var cp_des = document.getElementById("cp_destino").value;

         if(!isNaN(cp_des)) {
            
            document.getElementById("error").style.display = "none";

          }else{
            document.getElementById("error").style.display = "inline";
            document.getElementById("error").innerHTML ="Este Campo solo puede llevar números";
        }
    }


    //Comprobamos la tarjeta con el evento input (al cambiar el valor del campo)
    document.getElementById("tarjeta").addEventListener('input',compruebaTarjeta);

    //Con una variable que almacene el valor de la tarjeta, lo comparamos con una expresion regular
    //la expresión regular expresa de manera que acepta 4 digitos por cada posicion en total (16)
    function compruebaTarjeta(){

        var tarjeta = document.getElementById("tarjeta").value;
        var expresion = /\d{4}-?\d{4}-?\d{4}-?\d{4}$/;
        

        if(tarjeta.match(expresion)){   //Evaluamos la expresion con match, si es correcta se notifica al usuario

            document.getElementById("correcto").style.display = "inline";
            document.getElementById("correcto").innerHTML ="Número de tarjeta Correcto";
        }
    }


    //Comprobamos que el repartidor sea correcto, añadimos un evento input para que se realice cada vez que cambia el valor del input
    // Recogemos en una variable el valor del campo repartidor, y lo comparamos con la expresion descrita
    document.getElementById("repartidor").addEventListener('input',compruebaEmpleado);

    function compruebaEmpleado(){

        var repartidor = document.getElementById("repartidor").value;
        var expresion = new RegExp(/[E]{1}[S]{1}[$]\d{4}$/);

        if(repartidor.match(expresion)){
            
            document.getElementById("correcto").style.display = "inline";
            document.getElementById("correcto").innerHTML ="Número de repartidor Correcto";
        }
    }

    //Comprobamos el codigo de descuento, primero añadimos un evento que este escuchando cuando el valor del input cambie,
    // en una variable almacenamos el codigoDescuento, y la evaluamos en una expresión regular, si es correcto se notifica al usuario
    //mostrando el mensaje con "style.display = inline"
    document.getElementById("codigo").addEventListener('input',compruebaCodDescuento);

    function compruebaCodDescuento(){

        var codigoDescuento = document.getElementById("codigo").value;
        var expresion = new RegExp(/[A-Z]{5}\d{2}$/);

        if(codigoDescuento.match(expresion)){

            document.getElementById("correcto").style.display = "inline";
            document.getElementById("correcto").innerHTML ="Código de descuento válido";
        }
    }
       
        