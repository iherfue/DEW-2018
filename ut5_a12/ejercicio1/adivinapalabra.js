

    function PalabraOculta(){

         aciertos = 0;
         fallos = 0;
    }

    //En esta función, si he consultado internet para poder realizarla, basicamente realiza un random, donde le asigna el valor
    //a una variable temporal.
    PalabraOculta.prototype.shuffle = function(arra1){

        var ctr = arra1.length, temp, index;
			// Mientras tengamos elementros en el array
    		while (ctr > 0) {
			// Pick a random index
            	index = Math.floor(Math.random() * ctr);
				// Decrease ctr by 1
        		ctr--;
			// And swap the last element with it
    			temp = arra1[ctr];
       			arra1[ctr] = arra1[index];
       			arra1[index] = temp;
    		}

    		return arra1;
    }


    PalabraOculta.prototype.generaPalabra = function(){

        document.getElementById('acierta-falla').style.display = 'none';
        document.getElementById("linea_formulario error").style.display = "none";   //Al iniciar el programa ocultamos la linea de acierto o errores

        var palabras = new Array("SANTANDER","BILBAO","SERVIDOR","SANTANDER","FUERTEVENTURA","LAREDO");
		random = palabras[Math.floor(Math.random() * palabras.length)]; //En la variable random almacenamos la palabra que ha salido aleatoriamente

		var res = random.split(""); //La palabra elegida la dividiremos en un array con split()

		console.log(random);
		var palabraShuffle = PalabraOculta.prototype.shuffle(res).toString(); //en una variable almacenamos el string ya desordenado
		console.log(palabraShuffle);
		var final = palabraShuffle.replace(/,/g,""); //La variable final almacena la palabra quitandole las ','
		console.log(final);

        //Rellenamos el formulario, añadiendo al campo letras el valor de la varibale "FINAL" pasado a mayusculas
		document.getElementById("nombre").value = final.toUpperCase();
    }

    PalabraOculta.prototype.alerta = function(){
    
        var palabraUsuario = document.getElementById("palabra").value;  //Almacenamos en una variable la palabra que introduce el usuario
		var palabraFinal = palabraUsuario.toUpperCase();    //La pasamos a mayusculas
		console.log(palabraFinal);

		//Desabilitamos el boton ver solucion y habilitamos el boton nuevapalabra
		if(palabraUsuario == ""){

            document.getElementById("solucion").disabled = false;
			document.getElementById("palabraNew").disabled = true;

		}else{

    		document.getElementById("solucion").disabled = true;
			document.getElementById("palabraNew").disabled = false;
		}
				
        //Si la palabra que introduce el usuario es la misma que la que salio en el random del array , se notifica al usuario
		if(palabraFinal == random){
            document.getElementById('acierta-falla').style.display = 'inline';
            console.log("acertaste");
            
			document.getElementById("acierta-falla").className = "intentos";
            document.getElementById("acierta-falla").innerHTML = `Has acertado la palabra ${random}`;
            aciertos++;
            console.log(aciertos);

        //Si el usuario no acierta la palabra que esta escribiendo se notifica

		}else{  
			console.log("no");
			document.getElementById("acierta-falla").className = "error";
			document.getElementById("acierta-falla").innerHTML = `La palabra ${palabraFinal} no coincide con el original`;
        }
    }

    PalabraOculta.prototype.nuevaPalabra = function(){

        //Si el usuario "genera nueva palabra", se genera la palabra y el campo para introducir la palabra lo limpiamos

        PalabraOculta.prototype.generaPalabra();
        document.getElementById("palabra").value = "";
    }

    PalabraOculta.prototype.verSolucion = function(){

        document.getElementById('acierta-falla').style.display = 'inline';
        document.getElementById("acierta-falla").className = "info";
		document.getElementById("acierta-falla").innerHTML = `La palabra correcta es ${random}`;
        document.getElementById("linea_formulario error").style.display = "none";

        fallos++;
        console.log(fallos);
    }

    PalabraOculta.prototype.finalizar = function(){
        
        document.getElementById('acierta-falla').style.display = 'none';
        document.getElementById("linea_formulario error").style.display = "inline";
        document.getElementById("solucion").disabled = true;

        var totalpartidas = aciertos + fallos;
        var puntuacion = (aciertos /totalpartidas) * 100;
        console.log(totalpartidas);
        document.getElementById("linea_formulario error").innerHTML = `Porcentaje de ciertos ${puntuacion} %`;
    }


    //Instancia de la clase 
    partida = new PalabraOculta();
    //generamos la palabra
    partida.generaPalabra();
    
    //Comprueba palabra
    document.getElementById('palabra').addEventListener('input', partida.alerta); 

    //Generar una nueva palabra
    document.getElementById("palabraNew").addEventListener('click',partida.nuevaPalabra);

    //Ver solución
    document.getElementById("solucion").addEventListener('click',partida.verSolucion);
    
    //finalizar
    document.getElementById("enviar").addEventListener('click',partida.finalizar);