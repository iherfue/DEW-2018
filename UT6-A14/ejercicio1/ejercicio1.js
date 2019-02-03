
    for(var i = 1; i <= 10; i++){

        //Crea el elemento 
        let elemento = document.createElement("p");

        //Se crea un texto para el elmento
        let texto = document.createTextNode(`Esto es un parrafo, el número ${i} `);

        //Creamos un atributo para el elemento
        let id = document.createAttribute("id");
        id.value = [i]; //Se asigna un valor al atributo id

        //Atributo class
        let clase = document.createAttribute("class");
        clase.value="parrafo";

        elemento.setAttributeNode(id);//se establece el atributo al elemento(p)
        elemento.setAttributeNode(clase);

        elemento.appendChild(texto); //se añade al hijo
        document.body.appendChild(elemento);
    }