
document.getElementById("añadir").addEventListener('click',creaLista);

function creaLista(){

    let texto = document.getElementById("texto").value;

    //Elemento LI
    let li = document.createElement("li");
    let textLi = document.createTextNode(texto);
    //creamos atributo id (sera lo mismo del texto, y asi borraremos segun su id)

    let id = document.createAttribute("id");
    id.value = texto;   //El is valdra lo mismo que el texto

    li.setAttributeNode(id);
    let lista = document.getElementById("lista");
    lista.appendChild(li).appendChild(textLi); //añadira un hijo a "ul" que es lista como id, al li le añadira un hijo que es el texto del input
}

document.getElementById("quitar").addEventListener('click',elimina);

function elimina(){

    //Elemento padre que es el ul
    let padre = document.getElementById("lista");

    //valor del input es el mismo que el id
    let texto = document.getElementById("texto").value;

    //buscamos el elemento a borrar y con removeChild lo borramos
    let borrar = document.getElementById(texto);
    padre.removeChild(borrar);

}