

// CREACION DE UN TRIANGULO ISOSELES 

function calcular_Altura(lado1, lado2, base){

    if(lado1 === lado2 && lado1 != base){

        alert("Es un triangulo isoseles");

        const altura = Math.sqrt(lado1**2 - base**2/ 4);
        console.log(altura);
    }
    else{

        alert("No es un triangulo isoseles");

    }

}

calcular_Altura(4,4,6);