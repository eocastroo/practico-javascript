
// codigo cuadrado
console.group("cuadrados");
const ladoCuadradro = 5 ;

console.log("los lados del cuadrado miden" +  ladoCuadradro + "cm");

const perimetroCuadrado = ladoCuadradro * 4;

console.log("El perimetro del cuadrado es " + perimetroCuadrado + "cm");

const areaDelcuadrado = ladoCuadradro * ladoCuadradro;

console.log("El area del cuadrado es " + areaDelcuadrado + "cm");

console.groupEnd();

// triangulo

console.group("triangulo");

const ladotriangulo1 = 6;
const ladotriangulo2 = 6;
const basetriangulo  = 4
const alturatriangulo = 5.5;

console.log(" los lados del triangulo miden " 
+ ladotriangulo1 
+ "cm,"
+ ladotriangulo2 
+ "cm, "
+ ladoCuadradro 
+ "cm "

);

console.log("la altura del triangulo" + alturatriangulo + "cm");

const perimetroTriangulo = ladotriangulo1 + ladotriangulo2 + basetriangulo;

console.log("el perimetro de los triangulos es: " + perimetroTriangulo + "cm ");

const areaTriangulo = (basetriangulo * alturatriangulo) / 2;

console.log("el area del triangulo es: " + areaTriangulo + "cm^2 ");

console.groupEnd();


//codigo de circulo

console.group("Circulo");

const radioCirculo = 4;
const diametroCirculo = radioCirculo * 2 ;
const PI = Math.PI;
const perimetroCirculo = diametroCirculo * PI ;
const areaCirculo = (radioCirculo  * radioCirculo ) * PI ;

console.log("El radio del circulo es :" + radioCirculo + "cm");
console.log("El diametro del circulo es :" + diametroCirculo + "cm,");
console.log("PI" + PI + ", ");
console.log("El perimetro del Circulo es : " + perimetroCirculo + "cm, ");
console.log("El area del circulo " + areaCirculo + "cm");



console.groupEnd();