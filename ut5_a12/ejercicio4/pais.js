    //Clase Pais, recibe tres parámetros 

    function Pais(codigoPais,nombre,poblacion){

        this.codigoPais = codigoPais;
        this.nombre = nombre;
        this.poblacion = poblacion;
    }

    //Creamos una función que concatene las variables, que se le pasan al constructor

    Pais.prototype.toString = function(){

        console.log(`El nombre del país es ${this.nombre}, el código del país es ${this.codigoPais}, el número de habitantes es ${this.poblacion}`);
    }

    //Exportamos la clase Pais

    export {Pais};