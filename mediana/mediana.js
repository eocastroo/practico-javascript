function CalcularMediaAritmetica(lista){
    const sumaLista = lista.reduce(
        function(ValorAcomulado = 0, nuevoElemento){
            return ValorAcomulado + nuevoElemento;
        }
    );
    const promedioLista = sumaLista / lista.length;
    return promedioLista;

}

const lista1 = [
    100,
    200,
    500,
    4000000
];

const mitadLista1 =  parseInt(lista1.length / 2);


function esPar(numero){
    if(numero % 2 === 0){
        return true;

    }else {
        return false;   
    }
}


let mediana;

if (esPar(lista1.length)){

    const elemento1 = lista1[mitadLista1 - 1];
    const elemento2 = lista1[mitadLista1];

    const promedioElemento1y2 = CalcularMediaAritmetica([
        elemento1,
        elemento2
    ]);

    mediana =  promedioElemento1y2;

}else {
    mediana = lista1[mitadLista1];

}

