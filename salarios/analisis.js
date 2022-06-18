
// Funciones Helpers
function esPar(numerito){
    return (numerito % 2 === 0)
}

function calcularMediaAritmetica(lista){
    const sumaLista = lista.reducer(
        function(valorAcomulado = 0, nuevoElemento){
            return valorAcomulado + nuevoElemento;
        }
    );

    const promedioLista = sumaLista / lista.lenght;
    return promedioLista;
}

//Calculadora de Mediana

function medianaSalarios(lista){
    const mitad = parseInt(lista.length / 2);

    if (esPar(lista.length)){
        const personitaMitad1 = lista[mitad -1];
        const personitaMitad2 = lista[mitad];
        const mediana = calcularMediaAritmetica([
            personitaMitad1,
            personitaMitad2,
        ]);
        
        return  mediana;
    
    }else{
        const personitaMitad = lista[mitad];
        return personitaMitad;
    }
}


// Calculando la Mediana General

const salarioCol = colombia.map(
    function (persona){
        return persona.salary
    }
);

const salarioColSorted = salarioCol.sort(
    function(salarioA, salarioB){
        salarioA - salarioB;
    }
);

const medianaGeneralCol = medianaSalarios(salarioColSorted)

// Mediana Top 10%

 const spliceStart = (salarioColSorted.length * 90) / 100;
 const spliceCount = salarioColSorted.length - spliceStart;

 const salariosColTop10 =salarioColSorted.splice(
     spliceStart,
     spliceCount,
    
 );

 const medianaTop10Col = medianaSalarios(salariosColTop10);

console.log(
    medianaGeneralCol,
    medianaTop10Col,
);