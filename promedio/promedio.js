
/**const lista1 = [
    100,
    200,
    300,
    400,
    500
]

let sumaLista1 = 0;

for(let i = 0 ; i < lista1.length; i++){

    sumaLista1 = sumaLista1 + lista1[i];

}

const promedioLista1 = sumaLista1 / lista1.length; */


function CalcularMediaAritmetica(lista){

    /** let sumarLista = 0;

    for(let i = 0; i < lista.length; i++){

        sumarLista = sumarLista + lista[i];

    } **/

    const sumaLista = lista.reduce(

        function(ValorAcomulado = 0, nuevoElemento){

            return ValorAcomulado + nuevoElemento;

        }
    );

    const promedioLista = sumaLista / lista.length;

    return promedioLista;

}