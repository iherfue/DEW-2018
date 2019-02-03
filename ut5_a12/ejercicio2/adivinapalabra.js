
document.getElementById("linea_formulario error").style.display = "none";

    function PalabraOculta(){

        aciertos = 0;
        fallos = 0;
    }

    //En esta función, si he consultado internet para poder realizarla, basicamente realiza un random, donde le asigna el valor
    //a una variable temporal.
    PalabraOculta.prototype.shuffle = function(arra1){

        var ctr = arra1.length, temp, index;
		
    		while (ctr > 0) {
			
            	index = Math.floor(Math.random() * ctr);
				
        		ctr--;
			
    			temp = arra1[ctr];
       			arra1[ctr] = arra1[index];
       			arra1[index] = temp;
    		}

    		return arra1;
    }


    PalabraOculta.prototype.generaPalabra = function(numero){
        var n = numero;
        document.getElementById("linea_formulario error").style.display = "none";
        
        //declaramos array bidimensional
        var palabras = new  Array();
        palabras[0]= new Array("DUDE","COVE","ARFO","ARDA","FUFE","GAÑA","HULA","AHCB","DADA","DEBE");
        palabras[1] = new Array("AFINAN","AFARAS","ABALES","ABACAS","ABALAN","AGORAS","AGRAVO","AGOTAN","AFLUYE","ADUSTA");
        palabras[2] = new Array("VAQUEE","TANQUE","TEQUES","TIUQUE","JUQUEO","QUINAS","QUESOS","QUISTO","PERQUE","EQUIPO");
        
        console.table(palabras);

        // hay dos random uno para elegir la posicion del array palabras (0,1,2) y el otro random es un numero aleatorio del 0 al 9
        //El primer random escogera el array por ejemplo (1) y el segundo random la posicion de un elemento (0-9) en ese array(1)

        console.log("El array es " + n);
        random = Math.floor(Math.random() * palabras.lenght);

        random_dos = Math.floor(Math.random() * 10);
        palabraAleatoria = palabras[n][random_dos];  
        console.log("Original " + palabraAleatoria);
        
		var res = palabraAleatoria.split(""); //Divide el string en un array

        //Convertir el array a STRING
		var palabraShuffle = PalabraOculta.prototype.shuffle(res).toString();
		console.log(palabraShuffle);
		var final = palabraShuffle.replace(/,/g,"");
		console.log(final);

        //Rellenando formulario
		document.getElementById("nombre").value = final.toUpperCase();
    }

    PalabraOculta.prototype.alerta = function(){
    
        var palabraUsuario = document.getElementById("palabra").value;
		var palabraFinal = palabraUsuario.toUpperCase();
		console.log(palabraFinal);

		//Desabilitamos el boton ver solucion y habilitamos el boton nuevapalabra
		if(palabraUsuario == ""){

            document.getElementById("solucion").disabled = false;
			document.getElementById("palabraNew").disabled = true;

		}else{

    		document.getElementById("solucion").disabled = true;
			document.getElementById("palabraNew").disabled = false;
		}
				
        //Si la palabra que introduce el usuario es igual a la palabra aleatoria se muestra los aciertos por consola, y se notifica
		if(palabraFinal == palabraAleatoria){
            
            console.log("acertaste");
            console.log(this.aciertos);
			document.getElementById("acierta-falla").className = "intentos";
            document.getElementById("acierta-falla").innerHTML = `Has acertado la palabra ${palabraAleatoria}`;

            aciertos++;
            console.log(aciertos);

		}else{
			console.log("no");
			document.getElementById("acierta-falla").className = "error";
			document.getElementById("acierta-falla").innerHTML = `La palabra ${palabraFinal} no coincide con el original`;
        }
    }

    //La función nueva palabra, llama al método genera palabra
    PalabraOculta.prototype.nuevaPalabra = function(){

        PalabraOculta.prototype.generaPalabra();
    }

    
    //Método ver solución, activa la clase info, y añade un texto informativ, además a los fallos se suma 1
    PalabraOculta.prototype.verSolucion = function(){

        document.getElementById("acierta-falla").className = "info";
		document.getElementById("acierta-falla").innerHTML = `La palabra correcta es ${palabraAleatoria}`;
        document.getElementById("linea_formulario error").style.display = "none";
        
        fallos++;
        console.log(fallos);
    }

    //El método finalizar realiza un calculo del numero de partidas jugadas frente a los aciertos y fallos, este se notifica al usuario
    PalabraOculta.prototype.finalizar = function(){
        
        document.getElementById("linea_formulario error").style.display = "inline";

        var totalpartidas = aciertos + fallos;
        var puntuacion = Math.floor((aciertos /totalpartidas) * 100);
        console.log(totalpartidas);
        document.getElementById("linea_formulario error").innerHTML = `Porcentaje de aciertos ${puntuacion} %`;
    }

    //Creamos una instancia de palabra
    partida = new PalabraOculta();
    
    //Según la elección del usuario se generará una palabra u otra pasando como argumento el tipo de array (0,1,2)
    document.getElementById("cuatro_letras").addEventListener('click',cuatroLetras);
    document.getElementById("seis_letras").addEventListener('click',seisLetras);
    document.getElementById("ocho_letras").addEventListener('click',ochoLetras);

    function cuatroLetras(){
        
        partida.generaPalabra(0);
        
    }

    function seisLetras(){
        
        partida.generaPalabra(1);
        
    }

    function ochoLetras(){
        
        partida.generaPalabra(2);
        
    }

    //partida.generaPalabra();
    
    //Comprueba palabra
    document.getElementById('palabra').addEventListener('input', partida.alerta); 

    //Generar una nueva palabra
    document.getElementById("palabraNew").addEventListener('click',partida.nuevaPalabra);

    //Ver solución
    document.getElementById("solucion").addEventListener('click',partida.verSolucion);
    
    //finalizar
    document.getElementById("enviar").addEventListener('click',partida.finalizar);