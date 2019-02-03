import {ListaPaises} from "./lista_paises.js";

const paises = new ListaPaises();
paises.numeroElementos();

paises.nuevoPais({codigo: 'CH', nombre: 'China', poblacion: '1300000000'});
paises.nuevoPaisFinal({codigo: 'EEUU', nombre: 'Estados Unidos', poblacion: '60000'});
paises.numeroElementos();
paises.buscarElemento('ES');
paises.compruebaCodigo('CH');

//paises.borrarElementoPrincipio();
//paises.borrarElementoFinal();

paises.mayorPoblacion();
paises.menorPoblacion();

export{paises};