
function CalcularMediaAritmetica(lista){
    const sumaLista = lista.reduce(

        function(ValorAcomulado = 0, nuevoElemento){
            return ValorAcomulado + nuevoElemento;
        }
    );
    const promedioLista = sumaLista / lista.length;
    return promedioLista;

}

/* Primero uso el metodo .sort para organizar en orden ascendente los numeros ingresado
por el usuario
*/

function esPar(numeros){
    if(numeros % 2 === 0){
        return true;

    }else {
        return false;   
    };
}


function calcularMediana(listaNumeros){

    var numerosOrdenados = listaNumeros.sort(function(a,b) {

            return a - b;
        });

    const mitadLista1 =  parseInt(numerosOrdenados.length / 2);

    let mediana;

    if (esPar(numerosOrdenados.length)){

        const elemento1 = numerosOrdenados[mitadLista1 - 1];
        const elemento2 = numerosOrdenados[mitadLista1];
        const promedioElemento1y2 = CalcularMediaAritmetica([
            elemento1,
            elemento2
        ]);
    
        mediana =  promedioElemento1y2;
    
    }else {
        mediana = numerosOrdenados[mitadLista1];
    
    }

    return mediana;

}

