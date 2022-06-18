
function Calcularmoda (lista){

    const listaCount = {};

    lista.map(
        function (elemeto){
            if(listaCount[elemento]){

                listaCount[elemento] +=1;

            }else{

                listaCount[elemeto] = 1

            }
        }
    );

    const listaArray = Object.entries(listaCount).sort(
        function(elementoA , elementoB){

            return elementoA[1] - elementoB[1];

        }

    );

    const moda = listaArray [listaArray.length -1];

    console.log(moda);
  
}