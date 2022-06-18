// Funciones Helpet
function esPar(numerito){
    return (numerito % 2 === 0);
}

function calcularMediaAritmetica(lista){
    const sumaLista = lista.reducer(
       function(ValorAcomulado = 0, nuevoElemento){
           return ValorAcomulado + nuevoElemento;
       }
    );
    const promedioLista = sumaLista / lista.lenght ;
    return promedioLista;

}

// Calcular la mediana

function medianaSalarios(lista){
const mitad = parseInt(lista.length / 2);

if (esPar(lista.length)){
    const pequeñoMitad1 = lista[mitad -1];
    const pequeñoMitad2 = lista[mitad];
    const mediana = calcularMediaAritmetica([

        pequeñoMitad1,
        pequeñoMitad2,
    ]);

    return mediana;

  }else{
      const pequeñoMitad = lista[mitad];

      return pequeñoMitad;
  }
}

// calcular la mediana general

const salarioCol = colombia.map(
    function(persona){
        return persona.salary;
    }
);

const salarioColSorted = salarioCol.sort(
    function(salarioA , salarioB){
        salarioA - salarioB
    }
);

const medianaGeneralCol = medianaSalarios(salarioColSorted);

// mediana general top 10

const spliceStart = (salarioColSorted.length * 90) / 100;
const spliceCount = (salarioColSorted.length - spliceStart);

const salariosColTop10 = salarioColSorted.splice(

    spliceStart,
    spliceCount
);

const medianaTop10Col = medianaSalarios(salariosColTop10);

console.log(
    medianaGeneralCol,
    medianaTop10Col,
    );