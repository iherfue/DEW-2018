
    //Creo un array de objetos de paises, por defecto habrá siempre 2 paises
    function ListaPaises(){

        this._listaPaises = [{codigo: 'ES', nombre: 'España', poblacion: '450000'},{codigo: 'FR', nombre: 'Francia', poblacion: '600000'}];
    }

    //Metodo NumeroElementos, este metodo imprime los elementos del array, y en un console table la lista paises
    ListaPaises.prototype.numeroElementos = function(){

        console.log(`El número de elementos del array son ${this._listaPaises.length}`);
        console.table(this._listaPaises);
    }

    //Metodo NuevoPais, añade un pais al principio del array con unshift();
    ListaPaises.prototype.nuevoPais = function(pais){

        console.log(pais);
        this._listaPaises.unshift(pais);
    }

    //Añadir un nuevo pais al final del array mediante (push), con un bucle se comprueba si el codigo que introduce el usuario existe, en ese
    //caso el pais ya esta introducido contador valdra 1, para luego hacer la validacion. Si no existe en el array (contador != 1) lo añade 

    ListaPaises.prototype.nuevoPaisFinal = function(pais){

        var contador = 0;

        for(var i = 0; i < this._listaPaises.length; i++){

            if(this._listaPaises[i].codigo == pais.codigo){

                document.getElementById("error").innerHTML ="El código del pais ya existe";
                contador = 1;
            }
        }

        if(contador != 1){
            console.log(this._listaPaises.push(pais));
        }
    }

    //Con un bucle recorremos el array y comprobamos si el codigo del pais existe

    ListaPaises.prototype.compruebaCodigo = function(codigo){

        for(var i = 0; i < this._listaPaises.length; i++){

            if(this._listaPaises[i].codigo == codigo){
                console.log(`EL código del País ${codigo} existe `);
            }
        }
    }

    //Metodo que permite borrar un elemento del array a traves del codigo del pais, realizamos un map en donde almacenamos la posicion del elemento
    //Posteriormente con un bucle recorremos el array, y en donde coincida con el codigo hacemos un splice añadiendo como parámetros la posicion del elemento
    // y la cantidad de elementos a borrar
    ListaPaises.prototype.borrarElemento = function(codigo){

        var pos = this._listaPaises.map(function(e) { return e.codigo; }).indexOf(codigo);
        
        for(var i = 0; i < this._listaPaises.length; i++){

            if(this._listaPaises[i].codigo == codigo){
                
                this._listaPaises.splice(pos,1); 
            }
        }
    }

    ListaPaises.prototype.borrarElementoPrincipio = function(){

        this._listaPaises.shift();
    }

    ListaPaises.prototype.borrarElementoFinal = function(){

        this._listaPaises.pop();
    }

    //Buscamos la posicion de un elemento en el array mediante map e indexOf

    ListaPaises.prototype.buscarElemento = function(codigoPais){

        var encuentra = this._listaPaises.codigo = 'ES'
        var pos = this._listaPaises.map(function(e) { return e.codigo; }).indexOf(codigoPais);
        console.log(`La posición de ${codigoPais} es ${pos}`);

        return pos;
    }

    //Devolver el país de mayor población a traves de un sort

    ListaPaises.prototype.mayorPoblacion = function(){
        
        this._listaPaises.sort(function(a,b){
            
            if(a.poblacion > b.poblacion){
                return 1;
            }

            if(a.poblacion < b.poblacion){
                return -1;
            }
        })

        console.log(`El país con mayor población es ${this._listaPaises[0].nombre}, con una población de ${this._listaPaises[0].poblacion}`);
    }

    //Devolver el país con menor población

    ListaPaises.prototype.menorPoblacion = function(){

        this._listaPaises.sort(function(a,b){

            return a.poblacion - b.poblacion ;
        })

        console.log(`El país con menor población es ${this._listaPaises[0].nombre} con una poblacion de ${this._listaPaises[0].poblacion}`);
    }

    //Exportamos la clase Lista paises
    export{ListaPaises};