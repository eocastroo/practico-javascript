// Figura cuadrado

function perimetroCuadrado(lado){

    return lado * 4 ;

}



function areaDelcuadrado(lado){

   return lado * lado ;

}




//Figura triangulo

function perimetroTriangulo(lado, base){

    return lado + lado + base ;

}

perimetroTriangulo();

function areaTriangulo(base, latura ){

    return (base * latura) / 2 ;

}

areaTriangulo();

// Figura Circulo

function diametroCirculo(radio){

    return radio * 2;

}

diametroCirculo();


function perimetroCirculo(radio){

    const diametro = diametroCirculo(radio);

    return diametro * Math.PI;

}

perimetroCirculo();

function areaCirculo(radio){

return (radio * radio) * Math.PI;

}

areaCirculo();

// ESTRUCTURA DE HTML

function CalculaPerimetroCuadrado(){

    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    const perimetro = perimetroCuadrado(value);
    alert(perimetro);

}


function CalculaAreaCuadrado(){

    const input = document.getElementById("InputCuadrado");
    const value = input.value ;
    const area = areaDelcuadrado(value);
    alert(area);


}

function CalcularPerimetroTriangulo(){
    const input = document.getElementById("InputTriangulo");
    const value = input.value;
    const perimetro = perimetroTriangulo(value);
    alert(perimetro);

}

function CalculaAreaTriangulo(){
    const input = document.getElementById("InputTriangulo");
    const value = input.value;
    const area  = areaTriangulo(value);
    alert(area);

}

